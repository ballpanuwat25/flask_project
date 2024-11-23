import os
from dotenv import load_dotenv

# โหลดค่าจาก .env
load_dotenv()

class Config:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', 'mysql+pymysql://root:@127.0.0.1:3306/menu_db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False