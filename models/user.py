from extensions import db
from werkzeug.security import check_password_hash

class User(db.Model):
    __tablename__ = 'tbl_users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=False, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    prefix = db.Column(db.String(10), nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    age_group = db.Column(db.String(80), nullable=False)
    religion = db.Column(db.String(80), nullable=False)
    gender = db.Column(db.String(80), nullable=False)
    height = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Integer, nullable=False)
    bmi = db.Column(db.Float, nullable=False)
    food_allergies = db.Column(db.String(255), nullable=True)
    profile_picture = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime(), nullable=False, server_default=db.func.now())

    @property
    def data(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'prefix': self.prefix,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'age': self.age,
            'age_group': self.age_group,
            'religion': self.religion,
            'gender': self.gender,
            'height': self.height,
            'weight': self.weight,
            'bmi': self.bmi,
            'food_allergies': self.food_allergies,
            'profile_picture': self.profile_picture,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_user_function(cls):
        users = cls.query.all()
        result = []

        for user in users:
            result.append(user.data)

        return result
    
    @classmethod
    def get_by_id(cls, id):
        data = cls.query.filter(cls.id == id).first()
        print("DATA --> ",data)

        return data
    
    @classmethod
    def get_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    def verify_password(self, password):
        result = check_password_hash(self.password, password)
        return result