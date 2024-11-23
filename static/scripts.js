let register_obj = {
    username: "",
    password: "",
    prefix: "",
    first_name: "",
    last_name: "",
    age: "",
    age_group: "",
    gender: "",
    religion: "",
    weight: "",
    height: "",
    bmi: "",
    food_allergy: "",
}

let food_allergy_arr = [];
let filter = "desc";
let filename = "";

let food_filter = {
    food_type: "",
    food_category: ""
}

$(document).ready(function() {
    checkLoginStatus();

    renderLoginContent();
    renderRegisterContent();

    if(window.location.pathname == "/profile"){
        renderProfileContent();
    }

    if(window.location.pathname == "/history"){
        renderHistoryContent();
    }

    renderFoodDetail();
    renderHomePage();
});

function renderPrefixDropdown() {
    const dropdown = $('#prefixDropdown');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const items = dropdown.find('.dropdown__item');
    const hiddenInput = dropdown.find('input[type="hidden"]');

    // Toggle the dropdown when button is clicked
    button.on('click', function() {
        dropdown.toggleClass('open');
    });

    // Set the selected value and close the dropdown when an item is clicked
    items.on('click', function() {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // Update button text
        hiddenInput.val(selectedValue); // Set the hidden input value
        dropdown.removeClass('open'); // Close the dropdown

        register_obj.prefix = selectedValue;
    });

    // Close dropdown if clicked outside
    $(document).on('click', function(event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

function renderReligionDropdown() {
    //religion dropdown
    const dropdown2 = $('#religionDropdown');
    const button2 = dropdown2.find('.dropdown__btn');
    const list2 = dropdown2.find('.dropdown__list');
    const items2 = dropdown2.find('.dropdown__item');
    const hiddenInput2 = dropdown2.find('input[type="hidden"]');
    // Toggle the dropdown when button is clicked
    button2.on('click', function() {
        dropdown2.toggleClass('open');
    });

    // Set the selected value and close the dropdown when an item is clicked
    items2.on('click', function() {
        const selectedValue = $(this).data('value');
        button2.text($(this).text()); // Update button text
        hiddenInput2.val(selectedValue); // Set the hidden input value
        dropdown2.removeClass('open'); // Close the dropdown

        register_obj.religion = selectedValue;
    });

    // Close dropdown if clicked outside
    $(document).on('click', function(event) {
        if (!dropdown2.is(event.target) && dropdown2.has(event.target).length === 0) {
            dropdown2.removeClass('open');
        }
    });
}

function renderGenderDropdown() {
    //gender dropdown
    const dropdown3 = $('#genderDropdown');
    const button3 = dropdown3.find('.dropdown__btn');
    const list3 = dropdown3.find('.dropdown__list');
    const items3 = dropdown3.find('.dropdown__item');
    const hiddenInput3 = dropdown3.find('input[type="hidden"]');
    // Toggle the dropdown when button is clicked
    button3.on('click', function() {
        dropdown3.toggleClass('open');
    });

    // Set the selected value and close the dropdown when an item is clicked
    items3.on('click', function() {
        const selectedValue = $(this).data('value');
        button3.text($(this).text()); // Update button text
        hiddenInput3.val(selectedValue); // Set the hidden input value
        dropdown3.removeClass('open'); // Close the dropdown

        register_obj.gender = selectedValue;
    });

    // Close dropdown if clicked outside
    $(document).on('click', function(event) {
        if (!dropdown3.is(event.target) && dropdown3.has(event.target).length === 0) {
            dropdown3.removeClass('open');
        }
    }); 
}

function renderRegisterContent() {
    $('#registerForm2').hide();
    $('#registerForm3').hide();
    $('#registerForm4').hide();
    
    $('#register_text2').hide();
    $('#register_text3').hide();
    $('#register_text4').hide();
    $('#register_text5').hide();
    $('#register_text6').hide();
    $('#register_text7').hide();
    $('#register_text8').hide();
    
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();
        var username = $('#reg_username').val();
        let password = $('#reg_password').val();
        let confirm_password = $('#confirm_password').val();
        if(password != confirm_password){
            Toastify({
                text: "รหัสผ่านไม่ตรงกัน",
                duration: 1000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #FF4B2B, #FF416C)", // สีพื้นหลัง
            }).showToast();
            return;
        }

        register_obj.username = username;
        register_obj.password = password;        

        $('#registerForm').hide();
        $('#register_text').hide();

        $('#registerForm2').show();
        $('#register_text2').show();
    });

    $('#registerForm2').on('submit', function(e) {
        e.preventDefault();

        $('#registerForm2').hide();
        $('#register_text2').hide();

        $('#registerForm3').show();
        $('#register_text3').show();

        let first_name = $('#first_name').val();
        register_obj.first_name = first_name;

        let last_name = $('#last_name').val();
        register_obj.last_name = last_name;

    });

    $('#no_btn').on('click', function(e) {
        e.preventDefault();
        // e.preventDefault();

        // $('#registerForm2').hide();
        // $('#registerForm').show();

        $.ajax({
            url: '/register',
            type: 'POST',
            data: register_obj
        }).then((result) => {
            // console.log("result", result);
            Toastify({
                text: result.message,
                duration: 1000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // สีพื้นหลัง
            }).showToast();

            $('#registerForm3').hide();
            $('#register_text3').hide();

            $('#register_text6').show();
            $('#register_text7').show();
            $('#register_text8').show();
        }).catch((err) => {
            // alert(err.status);
        });

    });

    $('#yes_btn').on('click', function(e) {
        e.preventDefault();
        
        $('#register_text3').hide();
        $('#registerForm3').hide();

        $('#registerForm4').show();
        $('#register_text4').show();
    });

    $('#registerForm4').on('submit', function(e) {
        e.preventDefault();

        let food_allergy = food_allergy_arr.join(", "); 

        let other = $('#other').val();
        if(other != ""){
            food_allergy += ", " + other;
        }

        register_obj.food_allergy = food_allergy;

        console.log("register_obj", register_obj);
        
        $.ajax({
            url: '/register',
            type: 'POST',
            data: register_obj
        }).then((result) => {
            Toastify({
                text: result.message,
                duration: 1000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // สีพื้นหลัง
            }).showToast();

            $('#registerForm4').hide();
            $('#register_text4').hide();

            $('#register_text6').show();
            $('#register_text7').show();
            $('#register_text8').show();
        }).catch((err) => {
            // alert(err.status);
        });
    });

    renderPrefixDropdown();
    renderReligionDropdown();
    renderGenderDropdown();

    $('#age').on('change', function(e) {
        let age = $('#age').val();
        register_obj.age = age;
        if (age >= 1 && age <= 8) {
            register_obj.age_group = "เด็ก";
        } else if (age >= 9 && age <= 18) {
            register_obj.age_group = "วัยรุ่น";
        } else if (age >= 19 && age <= 60) {
            register_obj.age_group = "ผู้ใหญ่";
        } else if (age >= 61) {
            register_obj.age_group = "ผู้สูงอายุ";
        }

        $('#age_group').val(register_obj.age_group);
    });
    
    $('#height').on('change', function(e) {
        let weight = $('#weight').val();
        let height = $('#height').val();

        register_obj.height = height;

        if(weight != "" && height != ""){
            let bmi = weight / ((height / 100) * (height / 100));
            bmi = bmi.toFixed(2);
            register_obj.bmi = bmi;
            $('#bmi').val(bmi);
        }
    });

    $('#weight').on('change', function(e) {
        let weight = $('#weight').val();
        let height = $('#height').val();

        register_obj.weight = weight;

        if(weight != "" && height != ""){
            let bmi = weight / ((height / 100) * (height / 100));
            bmi = bmi.toFixed(2);
            register_obj.bmi = bmi;
            $('#bmi').val(bmi);
        }
    });

    renderCheckbox();
}

function renderLoginContent() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        let username = $('#username').val();
        let password = $('#password').val();

        $.ajax({
            url: '/login',
            type: 'POST',
            data: {
                username: username,
                password: password
            }
        }).then((result) => {
            let access_token = result.access_token;

            Toastify({
                text: "เข้าสู่ระบบสำเร็จ กำลังพาคุณไปยังหน้าหลัก",
                duration: 1000, // แสดง 3 วินาที
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // สีเขียวฟ้า
            }).showToast();
            
            // กำหนดเวลาหลังจากที่ Toastify แสดงครบ 3 วินาที (3000ms) ให้ทำการ redirect
            setTimeout(() => {
                localStorage.setItem('access_token', access_token);
                window.location.href = "/";
            }, 1200); // 3000ms คือเวลาที่ Toastify แสดง
            
        }).catch((err) => {
            // alert(err.status);
            Toastify({
                text: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
                duration: 1000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #FF4B2B, #FF416C)", // สีพื้นหลัง
            }).showToast();
        });

    });

    $('#logout_btn').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: '/logout',
            type: 'GET',
        }).then((result) => {
            if(result.status == "success"){
                localStorage.removeItem('access_token');
                window.location.href = "/";
            }
        }).catch((err) => {
            // alert(err.status);
        });
    });
}

function checkLoginStatus() {
    // ตรวจสอบว่า access_token มีหรือไม่
    let token = localStorage.getItem('access_token');
    // console.log("token", token);
    
    if (token) {
        // ถ้ามี token แสดงปุ่ม logout และซ่อนปุ่ม login/register
        $('#nav_login_btn').hide();
        $('#register_btn').hide();
        $('#logout_btn').show();
    } else {
        // ถ้าไม่มี token แสดงปุ่ม login/register และซ่อนปุ่ม logout
        $('#nav_login_btn').show();
        $('#register_btn').show();
        $('#logout_btn').hide();
    }
}

function renderCheckbox() {
    $('#beef').on('change', function() {
        let beef = 'เนื้อวัว';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(beef);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(beef);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#duck').on('change', function() {
        let duck = 'เนื้อเป็ด';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(duck);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(duck);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#pork').on('change', function() {
        let pork = 'เนื้อหมู';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(pork);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(pork);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#chicken').on('change', function() {
        let chicken = 'เนื้อไก่';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(chicken);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(chicken);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#fish').on('change', function() {
        let fish = 'ปลา';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(fish);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(fish);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#shrimp').on('change', function() {
        let shrimp = 'กุ้ง';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(shrimp);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(shrimp);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#crab').on('change', function() {
        let crab = 'ปู';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(crab);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(crab);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#squid').on('change', function() {
        let squid = 'หมึก';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(squid);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(squid);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#egg').on('change', function() {
        let egg = 'ไข่';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(egg);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(egg);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#milk').on('change', function() {
        let milk = 'นม';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(milk);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(milk);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#been').on('change', function() {
        let been = 'ถั่ว';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(been);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(been);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#powder').on('change', function() {
        let powder = 'แป้งสาลี';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(powder);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(powder);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#shell').on('change', function() {
        let shell = 'หอย';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(shell);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(shell);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#yeast').on('change', function() {
        let yeast = 'ยีสต์';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(yeast);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(yeast);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });

    $('#gluten').on('change', function() {
        let gluten = 'กลูเตน';  // ค่าที่ต้องการเก็บเมื่อ checkbox ถูกเลือก
    
        if ($(this).is(':checked')) {
            // ถ้า checkbox ถูกเลือก ให้เพิ่มค่าไปยัง array
            food_allergy_arr.push(gluten);
        } else {
            // ถ้า checkbox ถูกยกเลิกการเลือก ให้ลบค่าจาก array
            let index = food_allergy_arr.indexOf(gluten);
            if (index !== -1) {
                food_allergy_arr.splice(index, 1);
            }
        }
    });
}

function renderProfileContent() {
    $.ajax({
        url: '/getprofile',
        type: 'GET',
        data: {
            filter: filter
        }
    }).then((result) => {
        let html = renderProfileForm(result);
        $('#profile_container').html(html);

        $('#profile_form input').on('blur', function() {
            $('#profile_save').css('display', 'flex');
        });

        $('#profile_form textarea').on('blur', function() {
            $('#profile_save').css('display', 'flex');
        });
    
        $("#profile_save_btn").on('click', function(e) {
            e.preventDefault();
    
            let first_name = $('#profile_first_name').val();
            let last_name = $('#profile_last_name').val();
            let age = $('#age').val();
            let age_group = $('#age_group').val();
            let gender = $('#profile_gender').val();
            let religion = $('#profile_religion').val();
            let height = $('#height').val();
            let weight = $('#weight').val();
            let bmi = $('#bmi').val();
            let food_allergies = $('#profile_food_allergies').val();
    
            let password = $('#profile_password').val();
    
            if(password == ""){
                Toastify({
                    text: "กรุณากรอกรหัสผ่าน",
                    duration: 1000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    backgroundColor: "linear-gradient(to right, #FF4B2B, #FF416C)", // สีพื้นหลัง
                }).showToast();

                return;
            }
    
            let profile_obj = {
                first_name: first_name,
                last_name: last_name,
                age: age,
                age_group: age_group,
                gender: gender,
                religion: religion,
                height: height,
                weight: weight,
                bmi: bmi,
                food_allergies: food_allergies,
                password: password,
            }

            if(filename != ""){
                profile_obj.profile_picture = filename;
            }

            // console.log("profile_obj", profile_obj);
    
            $.ajax({
                url: '/getprofile',
                type: 'POST',
                data: profile_obj
            }).then((result) => {
                // alert(result.message);
                Toastify({
                    text: result.message,
                    duration: 1000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // สีพื้นหลัง
                }).showToast();

                $('#profile_save').css('display', 'none');

                setTimeout(() => {
                    window.location.reload();
                }, 1200);
            }).catch((err) => {
                // console.log("err", err);
                if(err.status == 401) {
                    Toastify({
                        text: "กรุณาเข้าสู่ระบบ",
                        duration: 1000,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        backgroundColor: "linear-gradient(to right, #FF4B2B, #FF416C)", // สีพื้นหลัง
                        onClick: function() {
                            // เมื่อผู้ใช้คลิกที่ Toast ให้ทำการ redirect
                            localStorage.removeItem('access_token');
                            window.location.href = "/login";
                        }
                    }).showToast();

                    setTimeout(() => {
                        window.location.href = "/login";
                    }, 1200);
                }
            });
        });

        $('#file-name').text('ยังไม่ได้เลือกไฟล์');
        $('#upload-btn').hide();

        $('#file-upload').change(function() {
            filename = $(this).prop('files')[0] ? $(this).prop('files')[0].name : 'ยังไม่ได้เลือกไฟล์';
            $('#file-name').text('ไฟล์ที่เลือก: ' + filename);
            
            $('#label_file_upload').hide();
            $('#upload-btn').show();
        });
        
          // อัปโหลดไฟล์
        $('#upload-form').submit(function(e) {
            e.preventDefault(); // ป้องกันการรีเฟรชหน้า
        
            var formData = new FormData(this);
        
            $.ajax({
              url: '/upload', // URL ที่จะส่งไฟล์ไป
              type: 'POST',
              data: formData,
              processData: false,
              contentType: false,
              beforeSend: function() {
                $('#upload-status').text('กำลังอัปโหลด...');
              },
              success: function(response) {
                $('#upload-status').html(`<p style='font-family: "Kanit", serif;font-weight: 500;'>` + response.message + '</p>');
                
                $('#label_file_upload').hide();
                $('#upload-btn').hide();
                $('#upload-status').show();

                //บันทึกการเปลี่ยนแปลง
                $('#profile_save').css('display', 'flex');
              },
              error: function(xhr) {
                $('#upload-status').html('<p>เกิดข้อผิดพลาด: ' + xhr.statusText + '</p>');
              }
            });
        });
    }).catch((err) => {
        // console.log("err", err.responseJSON.error);
        if(err.status == 401) {
            Toastify({
                text: "กรุณาเข้าสู่ระบบ",
                duration: 1000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #FF4B2B, #FF416C)", // สีพื้นหลัง
                onClick: function() {
                    // เมื่อผู้ใช้คลิกที่ Toast ให้ทำการ redirect
                    localStorage.removeItem('access_token');
                    window.location.href = "/login";
                }
            }).showToast();

            setTimeout(() => {
                window.location.href = "/login";
            }, 1200);
        }
    });
}

function renderHistoryContent() {
    renderOrderDropdown();

    $.ajax({
        url: '/gethistory',
        type: 'GET',
        data: {
            filter: filter
        }
    }).then((result) => {
        let html = renderHistoryRow(result);
        $('#history_content').html(html);
    }).catch((err) => {
        // console.log("err", err.responseJSON.error);
        if(err.status == 401) {
            Toastify({
                text: "กรุณาเข้าสู่ระบบ",
                duration: 1000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #FF4B2B, #FF416C)", // สีพื้นหลัง
                onClick: function() {
                    // เมื่อผู้ใช้คลิกที่ Toast ให้ทำการ redirect
                    localStorage.removeItem('access_token');
                    window.location.href = "/login";
                }
            }).showToast();

            setTimeout(() => {
                window.location.href = "/login";
            }, 1200);
        }
    });

    $('.dropdown__item').click(function() {
        $.ajax({
            url: '/gethistory',
            type: 'GET',
            data: {
                filter: filter
            }
        }).then((result) => {
            let html = renderHistoryRow(result);
            $('#history_content').html(html);
        }).catch((err) => {
            // alert(err.status);
        });
    });

}

function renderOrderDropdown() {
    const dropdown = $('#orderDropdown');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const items = dropdown.find('.dropdown__item');
    const hiddenInput = dropdown.find('input[type="hidden"]');

    // Toggle the dropdown when button is clicked
    button.on('click', function() {
        dropdown.toggleClass('open');
    });

    // Set the selected value and close the dropdown when an item is clicked
    items.on('click', function() {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // Update button text
        hiddenInput.val(selectedValue); // Set the hidden input value
        filter = selectedValue;
        dropdown.removeClass('open'); // Close the dropdown
    });

    // Close dropdown if clicked outside
    $(document).on('click', function(event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

function renderHistoryRow(data) {
    let html = "";
    data.forEach((item) => {
        html += `
            <div class="history_row">
                <div>
                    <p>วันที่: ${formatDate(item.created_at)}</p>
                    <p>เมนู: ${item.food_name}</p>
                </div>
                <a style="color: #3168ff; text-decoration: none;" href="/food_detail/${item.food_id}?mode=view">ดูเพิ่มเติม</a>
            </div>
        `;
    });

    return html;
}

function formatDate(dateString, timeZone = 'Asia/Bangkok') {
    const date = new Date(dateString);

    // กำหนดการแปลงเวลาโดยใช้ TimeZone UTC
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC', // ใช้ UTC เพื่อไม่ให้เปลี่ยนเวลา
        hour12: false // ใช้รูปแบบเวลา 24 ชั่วโมง
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate; // ลบ comma ที่อาจเกิดขึ้น
}

function renderFoodDetail() {
    let url = window.location.href;
    let mode = getQueryParameter(url, "mode")

    // console.log("mode", mode);

    if(mode == "add"){
        $('#food_save_btn').show();
    } else if (mode == "view") {
        $('#food_save_btn').hide();
    }

    $('#food_save_btn').on('click', function(e) {
        e.preventDefault();
        let food_id = window.location.pathname.split("/")[2];

        console.log("food_id", food_id);

        let food_obj = {
            "food_id": food_id
        }

        $.ajax({
            url: '/addhistory',
            type: 'POST',
            data: food_obj
        }).then((result) => {
            Toastify({
                text: result.message,
                duration: 1000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"// สีพื้นหลัง
            }).showToast();
        }).catch((err) => {
            //alert(err.status);
        });
    });
}

function getQueryParameter(url, param) {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    return params.get(param);
}

function renderHomePage() {
    $.ajax({
        url: '/getfoodlist',
        type: 'GET'
    }).then((result) => {
        let html = renderFoodRow(result);
        $('#food_content').html(html);
    }).catch((err) => {
        // alert(err.status);
    });

    renderFoodTypeDropdown();
    renderFoodCategoryDropdown();
}

function renderFoodTypeDropdown() {
    const dropdown = $('#foodType');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const items = dropdown.find('.dropdown__item');
    const hiddenInput = dropdown.find('input[type="hidden]');

    // Toggle the dropdown when button is clicked
    button.on('click', function() {
        dropdown.toggleClass('open');
    });

    // Set the selected value and close the dropdown when an item is clicked
    items.on('click', function() {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // Update button text
        hiddenInput.val(selectedValue); // Set the hidden input value
        dropdown.removeClass('open'); // Close the dropdown

        if(selectedValue != "") {
            food_filter.food_type = selectedValue;
        } else {
            food_filter.food_type = "";
        }

        $.ajax({
            url: '/getfoodlist',
            type: 'GET',
            data: food_filter
        }).then((result) => {
            let html = renderFoodRow(result);
            $('#food_content').html(html);
        }).catch((err) => {
            // alert(err.status);
        });
    });

    // Close dropdown if clicked outside
    $(document).on('click', function(event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

function renderFoodCategoryDropdown() {
    const dropdown = $('#foodCategory');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const items = dropdown.find('.dropdown__item');
    const hiddenInput = dropdown.find('input[type="hidden]');

    // Toggle the dropdown when button is clicked
    button.on('click', function() {
        dropdown.toggleClass('open');
    });

    // Set the selected value and close the dropdown when an item is clicked
    items.on('click', function() {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // Update button text
        hiddenInput.val(selectedValue); // Set the hidden input value
        dropdown.removeClass('open'); // Close the dropdown

        if(selectedValue != "") {
            food_filter.food_category = selectedValue;
        } else {
            food_filter.food_category = "";
        }

        $.ajax({
            url: '/getfoodlist',
            type: 'GET',
            data: food_filter
        }).then((result) => {
            let html = renderFoodRow(result);
            $('#food_content').html(html);
        }).catch((err) => {
            // alert(err.status);
        });
    });

    // Close dropdown if clicked outside
    $(document).on('click', function(event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

function renderFoodRow(data) {
    let html = "";
    // const imagePath = `/static/image3.jpg`;
    data.forEach((item) => {
        const imagePath = `/static/${item.food_image}`;  // สมมุติว่า 'image_path' มาจากฐานข้อมูล
        html += `
            <div class="card_container">
                <div class="card">
                    <div class="card_image">
                        <img src="${imagePath}" alt="Image 1">
                    </div>
                    <div class="card-content">
                        <h2 class="card-title">${item.food_name}</h2>
                        <p class="card-description">
                            สารอาหาร: โปรตีน: ${item.protein} กรัม, ไขมัน: ${item.fat} กรัม, คาร์โบไฮเดรต: ${item.carbohydrate} กรัม, ใยอาหาร: ${item.fiber} กรัม
                        </p>
                        <button style='font-family: "Kanit", serif;' class="card-button" onclick="handleButtonClick(${item.id})">ดูเพิ่มเติม</button>
                    </div>
                </div>
            </div>
        `;
    });

    return html;
}

function handleButtonClick(foodId) {
    window.location.href = `/food_detail/${foodId}?mode=add`;
}

function renderProfileForm(data) {

    let imagePath= "";
    if(!data.profile_picture){
        imagePath = `/static/image4.jpg`;
    }

    let html = `
        <h1 style="margin-bottom: 20px;">ข้อมูลส่วนตัว</h1>
        <div class="profile_content" id="profile_content">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div class="profile_image">
                    <img src="${imagePath}" alt="Image 4">
                    <!-- <img src="" alt="Image 4"> -->
                </div>
                <h2 style="margin-top: 20px;">ชื่อผู้ใช้: ${data.username}</h2>

                <div class="upload-container">
                    <form id="upload-form" enctype="multipart/form-data">
                    <div style='font-family: "Kanit", serif; font-weight: 500;' id="file-name"></div>
                    <label id="label_file_upload" for="file-upload" class="custom-file-upload">
                        <i class="fa fa-cloud-upload"></i> เลือกไฟล์
                    </label>
                    <input type="file" id="file-upload" class="file-input" name="file">
                    <button style='font-family: "Kanit", serif; font-weight: 500;' type="submit" id="upload-btn">อัพโหลด</button>
                    </form>
                    <div id="upload-status"></div>
                </div>
            </div>

            <div class="profile_info">
                <form id="profile_form" class="profile_form">

                    <div class="input_label_group">
                        <label for="first_name">ชื่อจริง</label>
                        <input type="text" id="profile_first_name" name="first_name" placeholder="ชื่อจริง" value="${data.first_name}">
                    </div>

                    <div class="input_label_group">
                        <label for="last_name">นามสกุล</label>
                        <input type="text" id="profile_last_name" name="last_name" placeholder="ชื่อจริง" value="${data.last_name}">
                    </div>  
                    
                    <div class="input_group">
                        <div class="input_label_group">
                            <label for="age">อายุ</label>
                            <input type="age" id="age" name="age" placeholder="อายุ" value="${data.age}">
                        </div>

                        <div class="input_label_group">
                            <label for="age_group">ช่วงอายุ</label>
                            <input placeholder="ช่วงอายุ" type="text" id="age_group" name="age_group" value="${data.age_group}" readonly>
                        </div>
                    </div>

                    <div class="input_group">
                        <div class="input_label_group">
                            <label for="gender">เพศ</label>
                            <input type="text" id="profile_gender" name="gender" placeholder="เพศ" value="${data.gender}">
                        </div>

                        <div class="input_label_group">
                            <label for="religion">ศาสนา</label>
                            <input placeholder="ศาสนา" type="text" id="profile_religion" name="religion" value="${data.religion}">
                        </div>
                    </div>

                    <div class="input_group">
                        <div class="input_label_group">
                            <label for="height">ส่วนสูง</label>
                            <input type="number" id="height" name="height" placeholder="ส่วนสูง" value="${data.height}">
                        </div>

                        <div class="input_label_group">
                            <label for="weight">น้ำหนัก</label>
                            <input placeholder="น้ำหนัก" type="number" id="weight" name="weight" value="${data.weight}">
                        </div>
                    </div>

                    <div class="input_label_group">
                        <label for="bmi">BMI</label>
                        <input type="number" id="bmi" name="bmi" placeholder="BMI" value="${data.bmi}" readonly>
                    </div>

                    <div class="input_label_group">
                        <label for="food_allergies">ประวัติการแพ้อาหาร</label>
                        <textarea id="profile_food_allergies" style="margin-bottom: 30px;" rows="5" name="food_allergies" placeholder="food_allergies">${data.food_allergies}</textarea>
                    </div>
                </form>
            </div>
        </div>

        <div class="profile_save" id="profile_save">
            <div class="input_label_group">
                <input style="margin: 0;" type="password" id="profile_password" name="pass_word" placeholder="กรุณาใส่รหัสผ่าน">
            </div>
            <button id="profile_save_btn" class="profile_save_btn">บันทึก</button>
        </div>
    `;

    return html;
}

function checkImageExists(imagePath) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true); // รูปโหลดสำเร็จ
        img.onerror = () => resolve(false); // รูปโหลดไม่สำเร็จ
        img.src = imagePath;
    });
}