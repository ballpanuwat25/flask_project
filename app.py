from flask import Flask, render_template, request, g, jsonify
from config import Config
from extensions import db
from flask_migrate import Migrate
from routes import main
from flask_jwt_extended import JWTManager

from dotenv import load_dotenv
import os

def create_app():
    load_dotenv()

    app = Flask(__name__)
    app.config.from_object(Config)

    # เพิ่ม JWT
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

    #upload
    UPLOAD_FOLDER = 'static/uploads'
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

    register_extensions(app)
    register_resources(app)
    return app

def register_extensions(app):
    db.init_app(app)
    migrate = Migrate(app, db)

    JWTManager(app)

    # เพิ่ม before_request ในที่นี้
    @app.before_request
    def before_request():
        # ดึง token จาก cookies
        token = request.cookies.get('access_token')
        if token:
            # ตั้งค่า Authorization header ใน environ ของ request
            request.environ['HTTP_AUTHORIZATION'] = f'Bearer {token}'
        
    @app.route('/upload', methods=['POST'])
    def upload_file():
        print("request", request)
        if 'file' not in request.files:
            return jsonify({'message': 'ไม่มีไฟล์ถูกเลือก'}), 400

        file = request.files['file']
        if file.filename == '':
            return jsonify({'message': 'ยังไม่ได้เลือกไฟล์'}), 400

        # บันทึกไฟล์
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        try:
            file.save(file_path)
            return jsonify({'message': f'ไฟล์ {file.filename} ถูกอัปโหลดเรียบร้อย!'})
        except Exception as e:
            return jsonify({'message': f'เกิดข้อผิดพลาด: {str(e)}'}), 500
            
def register_resources(app):
    app.register_blueprint(main)

if __name__ == "__main__":
    app = create_app()

    # สร้างตารางในฐานข้อมูล
    with app.app_context():
        db.create_all()

    app.run(debug=True)