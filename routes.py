import sys
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import Blueprint, render_template, request, redirect, url_for, jsonify,make_response

from controllers.user import add_user_function,edit_user_function,delete_user_function,login_user_function
from models.user import User

from models.food import Food

from models.history import History
from controllers.history import add_history_function

from werkzeug.security import check_password_hash

main = Blueprint('main', __name__)

#frontend routes----------------------------------------------------------------
@main.route('/')
def home():
    return render_template("index.html")

@main.route('/about')
def about():
    return render_template("about.html")

@main.route('/recommend')
def recommend():
    return render_template("recommend.html")

@main.route('/history')
def history():
    return render_template("history.html")

@main.route('/profile')
def proffile():
    return render_template("profile.html")

@main.route('/food_detail/<int:id>', methods=['GET'])
def food_detail(id):
    data = Food.get_food_by_id(id)

    #add, view
    get_mode = request.args.get('mode')
    text = ""
    
    if(get_mode == 'add'):
        text = "เมนูอาหารที่เลือก"
    elif(get_mode == 'view'):
        text = "ข้อมูลเมนูอาหาร"

    data['text'] = text

    return render_template("food_detail.html", data=data)

#backend routes----------------------------------------------------------------

#ส่งข้อมูลไปหน้าบ้าน
# @main.route('/', methods=['GET'])
# def home():
#     data = User.get_user_function()
#     return template("index.html", data=data)

@main.route('/getusers', methods=['GET'])
def getusers():
    data = User.get_user_function()
    # print(data, file=sys.stderr)
    return data

@main.route('/register', methods=['GET','POST'])
def register():
    data = add_user_function()
    print("data --> ",data)

    if(request.method == 'POST'):
        return data
    else:
        return render_template("register.html")

@main.route('/getprofile', methods=['GET','POST'])
@jwt_required()  # ตรวจสอบ Authorization header ที่ตั้งค่าใน before_request
def getprofile():
    current_user_id = get_jwt_identity()

    # get user from id
    user = User.get_by_id(current_user_id)
    if(user is None):
        return {"error": "User not found"}, 404

    print("user --> ",user)
    if(request.method == 'POST'):
        #validate_password before update
        password = request.form.get('password')
        print("request.form --> ",request.form)

        db_password = user.password
        if not check_password_hash(db_password, password):
            return {"error": "Password is incorrect"}, 400

        return edit_user_function(user)
    
    return user.data

@main.route('/deleteuser/<int:id>', methods=['DELETE'])
def deleteuser(id):
    # Get user from ID
    user = User.get_by_id(id)
    if user is None:
        return {"error": "User not found"}, 404  # เพิ่มสถานะ HTTP 404 สำหรับ resource ที่หาไม่เจอ

    # Delete user
    delete_user_function(user)
    return {"message": "User deleted successfully", "id": id}, 200  # ส่งข้อความและ ID ที่ลบสำเร็จ

@main.route('/login', methods=['GET','POST'])
def login():
    if(request.method == 'POST'):
        response = login_user_function()
        return response
    return render_template("login.html")

@main.route('/logout', methods=['GET'])
def logout():
    # สร้าง response ที่จะแสดงผล
    response = make_response({"message": "Logout successful", "status": "success"})
    
    # รีเซ็ตคุกกี้ access_token โดยการตั้งค่าสำหรับการหมดอายุทันที
    response.set_cookie('access_token', '', max_age=0, expires=0)
    
    # คืนค่า response ที่ได้
    return response

@main.route('/addhistory', methods=['POST'])
@jwt_required() 
def addhistory():
    current_user_id = get_jwt_identity()

    # get user from id
    user = User.get_by_id(current_user_id)
    if(user is None):
        return {"error": "User not found"}, 404

    if(request.method == 'POST'):
        return add_history_function(user)
    else:
        # return render_template("addhistory.html")
        return {"error": "Method not allowed"}, 405

@main.route('/gethistory', methods=['GET'])
@jwt_required()
def gethistory():
    current_user_id = get_jwt_identity()

    # get user from id
    print("current_user_id --> ",current_user_id)
    user = User.get_by_id(current_user_id)
    if(user is None):
        return {"error": "User not found"}, 404

    filter = request.args.get('filter')
    histories = History.get_history_by_user_id(user_id=user.id, order_by=filter)
    # ใช้ data property เพื่อแปลงเป็น dictionary
    result = [history.data for history in histories]
    return jsonify(result)

@main.route('/getfoodlist', methods=['GET'])
def getfood():
    # รับค่าพารามิเตอร์ type และ category จาก request
    food_type = request.args.get('food_type')
    food_category = request.args.get('food_category')

    # เรียก method พร้อมส่งค่าพารามิเตอร์
    data = Food.get_food_list(food_type=food_type, food_category=food_category)
    return jsonify(data)  # ใช้ jsonify เพื่อให้ส่งผลลัพธ์ในรูป JSON ได้ถูกต้อง