from flask import request, make_response
from models.user import User
from extensions import db
from werkzeug.security import generate_password_hash,check_password_hash
from flask_jwt_extended import create_access_token
from datetime import timedelta

def add_user_function():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        prefix = request.form['prefix']
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        age = request.form['age']
        age_group = request.form['age_group']
        religion = request.form['religion']
        gender = request.form['gender']
        height = request.form['height']
        weight = request.form['weight']
        bmi = request.form['bmi']
        food_allergies = request.form['food_allergy']

        # แฮชรหัสผ่าน
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        print("Generated hashed password: ", hashed_password)

        user = User(
            username=username,
            password=hashed_password,
            prefix=prefix,
            first_name=first_name,
            last_name=last_name,
            age=age,
            age_group=age_group,
            religion=religion,
            gender=gender,
            height=height,
            weight=weight,
            bmi=bmi,
            food_allergies=food_allergies
        )

        user.save()

        return {
            "message": "สมัครสมาชิกสำเร็จ",
            "status": "success",
            "details": {
                'id': user.id,
                'username': user.username,
                'prefix': user.prefix,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'age': user.age,
                'age_group': user.age_group,
                'religion': user.religion,
                'gender': user.gender,
                'height': user.height,
                'weight': user.weight,
                'bmi': user.bmi,
                'created_at': user.created_at,
                'updated_at': user.updated_at
            }
        }

def edit_user_function(data):
    #if method = POST then update user
    if request.method == 'POST':
        data.username = request.form.get('username', data.username)
        data.prefix = request.form.get('prefix', data.prefix)
        data.first_name = request.form.get('first_name', data.first_name)
        data.last_name = request.form.get('last_name', data.last_name)
        data.age = request.form.get('age', data.age)
        data.age_group = request.form.get('age_group', data.age_group)
        data.religion = request.form.get('religion', data.religion)
        data.gender = request.form.get('gender', data.gender)
        data.height = request.form.get('height', data.height)
        data.weight = request.form.get('weight', data.weight)
        data.bmi = request.form.get('bmi', data.bmi)
        data.food_allergies = request.form.get('food_allergies', data.food_allergies),
        data.profile_picture = request.form.get('profile_picture', data.profile_picture)

        from datetime import datetime
        data.updated_at = datetime.utcnow()

        db.session.commit()
    
    #if method = GET then return user data
    return {
        "message": "อัพเดทข้อมูลสำเร็จ",
        "status": "success",
        "details": data.data
    }

def delete_user_function(data):
    if request.method == 'DELETE':
        db.session.delete(data)
        db.session.commit()

def login_user_function():
    # รับข้อมูลจาก request

    username = request.form['username']
    password = request.form['password']

    # ตรวจสอบ input
    if not username or not password:
        return {"error": "Username and password are required"}, 400

        # ค้นหาผู้ใช้ในฐานข้อมูล
    user = User.get_by_username(username)
    if not user:
        return {"error": "User not found"}, 404

    # ตรวจสอบรหัสผ่าน
    if not user.verify_password(password):
        return {"error": "Invalid password"}, 401
    
    print("User logged in: ", user.data)

    # สร้าง Access Token
    access_token = create_access_token(identity=str(user.id), expires_delta=timedelta(hours=1))

    # สร้าง response
    response = make_response({
        "message": "เข้าสู่ระบบสำเร็จ กรุณารอสักครู่",
        "status": "success",
        "access_token": access_token
    })

    # ตั้งค่า Cookie (ตั้งค่าพิเศษ)
    response.set_cookie(
        'access_token', 
        access_token, 
        httponly=True,  # ป้องกันการเข้าถึงผ่าน JavaScript
        secure=True,    # ใช้เฉพาะ HTTPS
        samesite='Lax', # หรือ 'Strict' ขึ้นอยู่กับความต้องการ
        max_age=timedelta(hours=1)  # ระยะเวลาใน cookie
    )

    return response, 200