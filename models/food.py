from extensions import db
from werkzeug.security import check_password_hash

class Food(db.Model):
    __tablename__ = 'tbl_foods'
    id = db.Column(db.Integer, primary_key=True)
    food_name = db.Column(db.String(255), nullable=False)
    protein = db.Column(db.Float, nullable=False)
    carbohydrate = db.Column(db.Float, nullable=False)
    fat = db.Column(db.Float, nullable=False)
    sodium = db.Column(db.Float, nullable=False)
    colestrol = db.Column(db.Float, nullable=False)
    fiber = db.Column(db.Float, nullable=False)
    sugar = db.Column(db.Float, nullable=False)
    food_type = db.Column(db.String(80), nullable=False)
    food_category = db.Column(db.String(80), nullable=False)
    calories = db.Column(db.Float, nullable=False)
    food_image = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now())

    @property
    def data(self):
        return {
            'id': self.id,
            'food_name': self.food_name,
            'protein': self.protein,
            'carbohydrate': self.carbohydrate,
            'fat': self.fat,
            'sodium': self.sodium,
            'colestrol': self.colestrol,
            'fiber': self.fiber,
            'sugar': self.sugar,
            'food_type': self.food_type,
            'food_category': self.food_category,
            'calories': self.calories,
            'food_image': self.food_image,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_food_list(cls, food_type=None, food_category=None):
        query = cls.query
        
        # กรองตาม type หากมีการส่ง type มา
        if food_type:
            query = query.filter(cls.food_type == food_type)
        
        # กรองตาม category หากมีการส่ง category มา
        if food_category:
            query = query.filter(cls.food_category == food_category)

        # ดึงข้อมูลทั้งหมด
        data = query.all()
        return [item.data for item in data]  # แปลงข้อมูลในรูป list

    @classmethod
    def get_food_by_id(cls, id):
        data = cls.query.filter(cls.id == id).first()
        return data.data

    