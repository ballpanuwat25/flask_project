
# Project Documentation

Step 01: Clone project

```bash
  git clone https://github.com/ballpanuwat25/flask_project.git
```

Step 02: Change directory to project path

```bash
  cd flask_project
```

Step 03: Create visual environment and activate environment

```bash
  python -m venv env1
  env1\Scripts\activate
```

**ถ้าไม่สามารถใช้คำสั่งนี้ได้ env1\Scripts\activate ให้เปิด powershell และ run คำสั่งนี้

```bash
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Step 04: Install package

```bash
  pip install -r requirements.txt
  python.exe -m pip install --upgrade pip
```

Step 05: Open XAMPP และสร้าง DB ชื่อว่า menu_db

Step 06: Create table ด้วยคำสั่งตามนี้
```bash
  flask db init
  flask db migrate
  flask db upgrade
```

Step 07: วางไฟล์รูปไว้ที่โฟล์เดอร์ static และ เปลี่ยนชื่อรูปในไฟล์ menu.sql ให้ชื่อตรงกัน 
เช่น มีรูปที่ชื่อว่า test_image.jpg เป็นรูปของเมนู ข้าวยำปักษ์ใต้ 
ให้แก้ชื่อไฟล์จาก image3.jpg เป็น test_image.jpg แบบนี้

```sql
INSERT INTO tbl_foods(id,food_name,protein,carbohydrate,fat,sodium,colestrol,fiber,sugar,food_type,food_category,calories,food_image) VALUES (1,'ข้าวยำปักษ์ใต้',8.8,47.5,1.8,800,0,11,0,'ข้าว','ยำ',434,'test_image.jpg');
```

Step 08: Import ไฟล์ menu.sql เข้าตาราง tbl_foods 

Step 09: Start Project

```bash
  python app.py
```