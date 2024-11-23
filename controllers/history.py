from flask import request
from models.history import History
from extensions import db
from models.user import User
from models.food import Food

def add_history_function(user):
    if request.method == 'POST':
        user_id = user.id
        food_id = request.form['food_id']

        print("user_id: ", user_id)
        print("food_id: ", food_id)

        # ตรวจสอบว่า user_id และ food_id มีอยู่ในฐานข้อมูล
        user = User.query.get(user_id)
        food = Food.query.get(food_id)

        if not user:
            return {"message": "Invalid user_id", "status": "error"}, 400
        if not food:
            return {"message": "Invalid food_id", "status": "error"}, 400

        # สร้างข้อมูล history
        history = History(
            user_id=user_id,
            food_id=food_id
        )

        try:
            history.save()
        except Exception as e:
            return {"message": "Failed to create history", "status": "error", "details": str(e)}, 500

        # ส่ง response
        return {
            "message": "บันทึกเมนูอาหารสำเร็จ",
            "status": "success",
            "details": {
                'id': history.id,
                'user_id': history.user_id,
                'food_id': history.food_id,
                'created_at': history.created_at,
                'updated_at': history.updated_at
            }
        }, 201