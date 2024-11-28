from extensions import db
from werkzeug.security import check_password_hash
from sqlalchemy.orm import relationship

class History(db.Model):
    __tablename__ = 'tbl_history'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('tbl_users.id'), nullable=False)
    food_id = db.Column(db.Integer, db.ForeignKey('tbl_foods.id'), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now())

    # สร้างความสัมพันธ์กับ tbl_foods
    food = relationship('Food', backref='histories')

    @property
    def data(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'food_id': self.food_id,
            #join กับ food แล้วเอา food_name มาแสดง
            'food_name': self.food.food_name if self.food else None,
            'protein': self.food.protein if self.food else None,
            'carbohydrate': self.food.carbohydrate if self.food else None,
            'fat': self.food.fat if self.food else None,
            'sodium': self.food.sodium if self.food else None,
            'colestrol': self.food.colestrol if self.food else None,
            'fiber': self.food.fiber if self.food else None,
            'sugar': self.food.sugar if self.food else None,
            'food_type': self.food.food_type if self.food else None,
            'food_category': self.food.food_category if self.food else None,
            'food_image': self.food.food_image if self.food else None,
            'calories': self.food.calories if self.food else None,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_history_function(cls):
        history = cls.query.all()
        result = []

        for item in history:
            result.append(item.data)

        return result
    
    @classmethod
    def get_history_by_user_id(cls, user_id, order_by='desc'):
        if order_by.lower() == 'asc':
            return cls.query.filter_by(user_id=user_id).order_by(cls.created_at.asc()).all()
        elif order_by.lower() == 'desc':
            return cls.query.filter_by(user_id=user_id).order_by(cls.created_at.desc()).all()
        else:
            raise ValueError("Invalid value for 'order_by'. Use 'asc' or 'desc'.")

    