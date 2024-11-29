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

let insert_history_arr = [];

let food_ingredient = {
    "เนื้อหมู": [
        "น้ำพริกอ่อง",
        "น้ำพริกมะขาม",
        "ยำถั่วพู",
        "โจ๊กข้าวกล้อง",
        "ข้าวกล้องผัดรวมมิตร",
        "ข้าวกล้องผัดน้ำพริกปลา",
        "แกงขี้เหล็ก",
        "ยำยอดคะน้า",
        "ยำผักกระเฉด",
        "แกงจืดเต้าหู้",
        "ผัดเต้าหู้ถั่วงอก",
        "ก๋วยเตี๋ยวราดหน้า",
        "ก๋วยเตี๋ยวราดหน้ารวมมิตร",
        "ยำยอดมะระหวาน",
        "ยำผักหวาน",
        "ยำผักกูด",
        "ยำใบชะพลู",
        "ยำยอดกระถิน",
        "เมี่ยงคะน้า",
        "เกาเหลาเลือดหมู",
        "แกงจืดตำลึงใส่ตับ",
        "แกงจืดตำลึงเต้าหู้อ่อน",
        "ขนมจีนน้ำเงี้ยว",
        "ข้าวกับจิ้น",
        "ลาบหมู",
        "ลาบคั่ว",
        "ผัดผักกระเฉด",
        "ผัดบล็อดโคลี่",
        "แกงเหลืองหมูฟักทอง",
        "โจ๊กหมูเครื่องในใส่ไข่",
        "ก๋วยจั๊บ",
        "ข้าวผัดบ้านมุก",
        "ข้าวผัดรวมมิตร",
        "ไข่ฟูหมูสับ",
        "ก๋วยเตี๋ยวเครื่องใน",
        "ก๋วยเตี๋ยวรวมมิตร",
        "เส้นเล็กแห้ง",
        "ก๋วยเตี๋ยวต้มยำ",
        "ก๋วยเตี๋ยวราดหน้าหมูตับ",
        "ผัดเปรี้ยวหวานตับ",
        "ผัดถั่วงอกเลือดหมูตับหมู",
        "ผัดเผ็ดถั่วฝักยาวใส่ตับ",
        "เกี๊ยวปลา",
        "ก๋วยเตี๋ยวลูกชิ้นปลา",
        "ข้าต้มปลา",
        "แกงจืดมะระยัดไส้",
        "ข้าวต้มเบญจรงค์",
        "ต้มจืดวุ้นเส้น",
        "ยำมะระ",
        "สุกี้น้ำ",
        "ข้าวคลุกกะปิ"
    ],
    "เนื้อไก่": [
        "ข้าวกล้องผัดรวมมิตร",
        "ยำหัวปลีไก่",
        "ยำหัวปลีทรงเครื่อง",
        "แกงแคไก่",
        "ต้มไก่บ้านใบมะขามอ่อน",
        "แกงป่าไก่",
        "แกงอ่อมไก่",
        "แกงเขียวหวานไก่",
        "ขนมจีนน้ำเงี้ยว",
        "ข้าวผัดกระเพราไก่ใส่ตับ",
        "ข้าวผัดพริกไก่กับเครื่องในไข่ดาว",
        "ลาบไก่",
        "ก๋วยเตี๋ยวไก่มะระ",
        "ก๋วยเตี๋ยวคุกคิก",
        "ก๋วยเตี๋ยวรวมมิตร",
        "ก๋วยเตี๋ยวชากังราว",
        "ตับบด",
        "ผัดฟักทองตับ",
        "แกงป่าสมุนไพร",
        "ไก่ต้มฟักมะนาวดอง",
        "ก๋วยเตี๋ยวไก่ตุ๋น",
        "ก๋วยเตี๋ยวเป็ดน้ำ"
    ],
    "เนื้อวัว": [
        "ลาบวัว",
        "ก๋วยเตี๋ยวเนื้อตุ๋น"
    ],
    "เนื้อเป็ด": [
        "ลาบเป็ด",
        "ก๋วยเตี๋ยวเป็ดน้ำ"
    ],
    "กุ้ง": [
        "ข้าวยำปักษ์ใต้",
        "ยำสมุนไพร",
        "ยำตะไคร้",
        "ยำตะไคร้กุ้งสด",
        "ยำตะไคร้กุ้งกรอบ",
        "น้ำพริกขยำ",
        "น้ำพริกกุ้งเสียบ",
        "นำพริกมะขาม",
        "น้ำพริกกุ้งสด",
        "น้ำพริกลงเรือ",
        "กุ้งพล่า",
        "ยำถั่วพู",
        "ข้าวกล้องผัดรวมมิตร",
        "ข้าวผัดเบญจรงค์",
        "ยำหัวปลีไก่",
        "ยำหัวปลีกุ้งสด",
        "ยำ3อย่าง",
        "ยำหัวปลีทรงเครื่อง",
        "แกงเลียง",
        "ยำยอดคะน้า",
        "ยำผัดกระเฉด",
        "ข้าวคลุกกะปิ",
        "แกงส้มผักกระเฉด",
        "แกงส้มดอกแค",
        "แกงส้มผักรวม",
        "ก๋วยเตี๋ยวราดหน้ารวมมิตร",
        "ยำผักหวาน",
        "ยำผักกูด",
        "ยำใบบัวบก",
        "ยำใบชะพลู",
        "ยำยอดกระถิน",
        "แกงส้มรวมมิตร",
        "แกงส้มดอกแคกุ้งสด",
        "น้ำพริกกุ้งผักสด",
        "ยำส้มโอ",
        "ยำมะระ",
        "ต้มยำกุ้ง",
        "ข้าวต้มกุ้ง",
        "เกี๊ยวปลา",
        "ก๋วยเตี๋ยวทะเล",
        "ยำสมุนไพรครัวข้าวหอม"
    ],
    "หมึก": [
        "ยำสมุนไพร",
        "ก๋วยเตี๋ยวราดหน้ารวมมิตร",
        "ก๋วยเตี๋ยวรวมมิตร",
        "ก๋วยเตี๋ยวทะเล",
    ],
    "ปลา": [
        "น้ำพริกหนุ่ม",
        "น้ำพริกปลา",
        "น้ำพริกอีสาน",
        "ข้าวกล้องผัดน้ำพริกปลา",
        "ข้าวกล้องผัดน้ำพริกปลาร้า",
        "ขนมจีนน้ำยาป่า",
        "ขนมจีนน้ำยาปักษ์ใต้",
        "ขนมจีนแกงป่า",
        "แกงขี้เหล็ก",
        "แกงป่าปลา",
        "แกงอ่อมปลาดุก",
        "แกงป่าปลาเห็ดโคน",
        "ปลาช่อนนึ่งสมุนไพร",
        "ปลาทับทิมสมุนไพร",
        "ปลาช่อนนึ่งแจ๋ว",
        "ปลาช่อนโบราณ",
        "ปลาช่อนพล่า",
        "ปลาช่อนเผาสมุนไพร",
        "ปลาช่อนนึ่งอีสาน",
        "ปลาช่อนแม่ลาเผา",
        "น้ำพริกปลาทู",
        "ยำปลาทู",
        "น้ำพริกปลาร้า",
        "ข้าวคลุกน้ำพริกปลาร้า",
        "เมี่ยงปลาทู",
        "แกงส้มชะอมปลากะพง",
        "ปลาดุกผักฉ่า",
        "ปลากะพงลวกจิ้ม",
        "ปลากรายลวกจิ้ม",
        "แกงส้มปลาช่อน",
        "ต้มยำปลาช่อน",
        "ปลาเนื้ออ่อนนึ่งแจ่ว",
        "ลาบปลาดุก",
        "ลาบปลาแรด",
        "ก๋วยเตี๋ยวปลา",
        "ปลาช่อนนึ่งสมุนไพร",
        "ปลาอินทรีย์ย่าง",
        "ปลาทับทิมนึ่งแจ่ว",
        "น้ำพริกปลา",
        "แกงเหลืองปลา",
        "แกงส้มปลากะพง",
        "เกาเหลาปลา",
        "แกงอ่อมปลา",
        "ก๋วยเตี๋ยวลูกชิ้นปลา",
        "แกงไตปลา",
        "เกี๊ยวปลา",
        "ก๋วยเตี๋ยวราดหน้าปลา",
        "ปลาทับทิมนึ่งซีอิ๊ว",
        "ต้มปลานิลใส่ผัดติ้ว",
        "ลาบปลา",
        "ข้าต้มปลา",
        "ปลากะพงนึ่งมะนาว",
        "แกงหน่อไม้ใส่ใบย่านาง",
        "ข้ามต้มเบญจรงค์",
        "ก๋วยเตี๋ยวทะเล"
    ],
    "หอย": [
        "แกงหอยใบชะพลู",
        "แกงหอยขม"
    ],
    "ปู": [
        "น้ำพริกปู"
    ],
    "ถั่ว": [
        "ยำตะไคร้",
        "ยำตะไคร้กุ้งสด",
        "ยำตะไคร้กุ้งกรอบ",
        "ยำถั่วพู",
        "ข้าวผัดเบญจรงค์",
        "ยำหัวปลีไก่",
        "ยำหัวปลีกุ้งสด",
        "ยำ3อย่าง",
        "ยำหัวปลีทรงเครื่อง",
        "แกงแคไก่",
        "ปลาช่อนพล่า",
        "ข้าวคลุกกะปิ",
        "ผัดเต้าหู้ถั่วงอก",
        "ยำใบชะพลู",
        "เมี่ยงปลาทู",
        "เมี่ยงคะน้า",
        "เมี่ยงสมุนไพร",
        "เส้นเล็กแห้ง",
        "ก๋วยเตี๋ยวต้มยำ",
        "ผัดถั่วงอกเลือดหมูตับหมู",
        "ผัดเผ็ดถั่วฝักยาวใส่ตับ",
        "แกงไตปลา",
        "แกงส้มรวมมิตร",
        "ยำมะระ",
        "ยำส้มโอ"
    ],
    "แป้ง": [
        "ปลาช่อนเผาสมุนไพร",
        "ปลาช่อนแม่ลาเผา",
        "ก๋วยเตี๋ยวราดหน้า",
        "ก๋วยเตี๋ยวราดหน้ารวมมิตร",
        "ปลาช่อนเผาสมุนไพร",
        "ก๋วยเตี๋ยวราดหน้าปลา"
    ],
    "กลูเตน": [
        "ข้าวยำปักษ์ใต้",
        "ยำตะไคร้กุ้งกรอบ",
        "ลาบเต้าหู้",
        "โจ๊กข้าวกล้อง",
        "ข้าวกล้องผัดรวมมิตร",
        "ข้าวกล้องผัดน้ำพริกปลา",
        "ข้าวกล้องผัดน้ำพริกปลาร้า",
        "ข้าวผัดเบญจรงค์",
        "ขนมจีนน้ำยาป่า",
        "ขนมจีนน้ำยาปักษ์ใต้",
        "ขนมจีนแกงป่า",
        "ลาบเต้าหู้ทรงเครื่อง",
        "ข้าวคลุกกะปิ",
        "ข้าวคลุกน้ำพริกปลาร้า",
        "เต้าหู้ทรงเครื่อง",
        "แกงจืดเต้าหู้",
        "ก๋วยเตี๋ยวเส้นหมี่เต้าหู้ทรงเครื่อง",
        "เต้าหู้อบหม้อดิน",
        "ผัดเต้าหู้ถั่วงอก",
        "ก๋วยเตี๋ยวราดหน้า",
        "ก๋วยเตี๋ยวราดหน้ารวมมิตร",
        "ขนมจีนน้ำเงี้ยว",
        "ข้าวกับจิ้น",
        "ข้าวผัดกระเพราไก่ใส่ตับ",
        "ข้าวผัดพริกไก่กับเครื่องในไข่ดาว",
        "โจ๊กหมูเครื่องในใส่ไข่",
        "ก๋วยจั๊บ",
        "ข้าวผัดบ้านมุก",
        "ข้าวผัดรวมมิตร",
        "ก๋วยเตี๋ยวไก่มะระ",
        "ก๋วยเตี๋ยวเครื่องใน",
        "ก๋วยเตี๋ยวคุกคิก",
        "ก๋วยเตี๋ยวรวมมิตร",
        "ก๋วยเตี๋ยวชากังราว",
        "เส้นเล็กแห้ง",
        "ก๋วยเตี๋ยวราดหน้าหมูตับ",
        "ซุปจมูกข้าวกล้อง",
        "ก๋วยเตี๋ยวปลา",
        "ก๋วยเตี๋ยวลูกชิ้นปลา",
        "เกี๊ยวปลา",
        "ก๋วยเตี๋ยวราดหน้าปลา",
        "ข้าวต้มกุ้ง",
        "ข้าวต้มเบญจรงค์",
        "ต้มจืดวุ้นเส้น",
        "ก๋วยเตี๋ยวไก่ตุ๋น",
        "ก๋วยเตี๋ยวทะเล",
        "ก๋วยเตี๋ยวเนื้อตุ๋น",
        "ก๋วยเตี๋ยวเป็ดน้ำ",
        "ขนมจีนน้ำยาป่า",
        "สุกี้น้ำ"
    ],
    "ไข่": [
        "โจ๊กข้าวกล้อง",
        "ข้าวกล้องผัดผักรวมมิตร",
        "ข้าวกล้องผัดน้ำพริกปลาร้า",
        "ยำหัวปลีไก่",
        "ยำหัวปลีกุ้งสด",
        "ยำ3อย่าง",
        "ยำหัวปลีทรงเครื่อง",
        "ข้าวคลุกกะปิ",
        "เต้าหู้ทรงเครื่อง",
        "แกงจืดเต้าหู้",
        "ก๋วยเตี๋ยวเส้นหมี่เต้าหู้ทรงเครื่อง",
        "เต้าหู้อบหม้อดิน",
        "ผัดเต้าหู้ถั่วงอก",
        "ก๋วยเตี๋ยวราดหน้ารวมมิตร",
        "แกงจืดตำลึงใส่ตับ",
        "แกงจืดตำลึงเต้าหู้อ่อน",
        "ข้าวผัดพริกไก่กับเครื่องในไข่ดาว",
        "แกงส้มชะอมปลากะพง",
        "โจ๊กหมูเครื่องในใส่ไข่",
        "ข้าวผัดบ้านมุก",
        "ข้าวผัดรวมมิตร",
        "ไข่ตุ๋นฟักทอง",
        "ไข่ฟูหมูสับ",
        "ไข่ทรงเครื่อง",
        "ไข่ตุ๋นนมสด",
        "ก๋วยเตี๋ยวต้มยำ",
        "ก๋วยเตี๋ยวราดหน้าหมูตับ",
        "ต้มจืดวุ้นเส้น",
        "สุกี้น้ำ",
        "ซุปไข่กับผัก"
    ],
    "นม": [
        "ไข่ตุ๋นนมสด"
    ],
    "ยีสต์": [
        "ผัดเต้าหู้ถั่วงอก",
        "ลาบเต้าหู้ทรงเครื่อง"
    ]
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

    if(window.location.pathname == "/meal"){
        renderMealSelectionPage();
    }

    if(window.location.pathname == "/suggest"){
        renderSuggestPage();
    }

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
    // console.log("data", data);
    let html_obj = {};
    data.forEach((item) => {
        let date = formatDate(item.created_at);
        date = date.split(",")[0];
        html_obj[date] = {
            html: html_obj[date] ? html_obj[date].html : ""
        }

        html_obj[date].html +=
        `<div class="history_row">
            <div style="display: flex; align-items: center; gap: 20px">
                <img src="/static/${item.food_image}" alt="${item.food_name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px;">
                <div>
                    <p>วันที่: ${formatDate(item.created_at)}</p>
                    <p>เมนู: ${item.food_name}</p>
                    <p>แคลอรี่: ${item.calories} kcal</p>
                </div>
            </div>
            <a style="color: #3168ff; text-decoration: none;" href="/food_detail/${item.food_id}?mode=view">ดูเพิ่มเติม</a>
        </div>`
    });

    let html = "";
    for (const [key, value] of Object.entries(html_obj)) {
        html_obj[key] = value.html;
        html += `
            <div class="history_group">
                ${html_obj[key]}
            </div>
        `;
    }

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
    } else {
        imagePath = `/static/uploads/${data.profile_picture}`
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

async function renderSuggestPage() {
    let user_data = await getUserData();
    let calories = findCalorisByUser(user_data);

    let new_user_data = {
        calories: calories,
        religion: user_data.religion,
        food_allergies: user_data.food_allergies
    }

    $.ajax({
        url: '/getfoodlist',
        type: 'GET'
    }).then((result) => {
        let filter_data = suggestFoodByUser(result, new_user_data);

        let html = renderFoodRow(filter_data);
        $('#food_suggest').html(html);
    }).catch((err) => {
        // alert(err.status);
    });

    renderFoodTypeDropdown2(new_user_data);
    renderFoodCategoryDropdown2(new_user_data);
}

function suggestFoodByUser(data, user_data) {
    // console.log("user_data", user_data);
    //user_data ต้องมี calories, religion, อาหารที่แพ้

    let user_allergy = user_data.food_allergies;

    //array อาหารที่แพ้
    if(user_allergy == ""){
        user_allergy = [];
    } else {
        user_allergy = user_allergy.split(",");
    }

    let food_allergy_list = [];
    for (let i = 0; i < user_allergy.length; i++) {
        let trimmedAllergy = user_allergy[i].trim();  // Trim the space
    
        // Check if the trimmed key exists in the food_ingredient object
        if (food_ingredient[trimmedAllergy]) {
            food_allergy_list.push(food_ingredient[trimmedAllergy]);
        }
    }

    let allergy_obj = {}
    for (let i = 0; i < food_allergy_list.length; i++) {
        const list = food_allergy_list[i];
        
        for (let j = 0; j < list.length; j++) {
            const item = list[j];
            allergy_obj[item] = item;
        }
    }

    //เอาไปหาว่ากินอะไรไม่ได้บ้าง แล้วเอารายการอาหารที่กินไม่ได้ มาเช็คกับชื่อเมนู ถ้าชื่อเมนูมีในอาหารที่กินไม่ได้ ก็ continue

    let new_data = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        let calories = item.calories;
        let food_name = item.food_name;

        if(food_name == allergy_obj[food_name]){
            continue;
        }

        if(calories <= user_data.calories) {
            new_data.push(item);
        }
    }

    // console.log("new_data", new_data);

    return new_data;
}

function findCalorisByUser(user_data) {
    let calories = 0;
    let height = user_data.height;
    let weight = user_data.weight;
    let gender = user_data.gender;
    let age = user_data.age;

    if(gender == "หญิง") {
        if(age >= 1 && age <= 8) {
            if(weight <= 12.5 && height <= 89.6) {
                calories = 980;
            } else if ((weight > 12.5 && weight <= 18.1) && (height > 89.6 && height <= 108.9)) {
                calories = 1200;
            } else if ((weight > 18.1 && weight <= 22.5) && (height > 108.9 && height <= 121)) {
                calories = 1320;
            } else {
                calories = 1500;
            }
        } else if (age > 8 && age <= 18) {
            if ((weight > 22.5 && weight <= 36.5) && (height > 121 && height <= 143.9)) {
                calories = 1650;
            } else if ((weight > 36.5 && weight <= 47.7) && (height > 143.9 && height <= 157.1)) {
                calories = 1860;
            } else if ((weight > 47.7 && weight <= 48.9) && (height > 157.1 && height <= 158.8)) {
                calories = 1890;
            } else {
                calories = 2100;
            }
        } else if (age > 18 && age <= 30) {
            if(weight <= 53 && height <= 160) {
                calories = 1780;
            } else {
                calories = 2000;
            }
        } else if (age > 30 && age <= 50) {
            if(weight <= 52.2 && height <= 157.6) {
                calories = 1780;
            } else {
                calories = 2000;
            }
        } else if (age > 50 && age <= 60) {
            if(weight <= 51.9 && height <= 156.5) {
                calories = 1770;
            } else {
                calories = 1900;
            }
        } else if (age > 60 && age <= 70) {
            if(weight <= 49.9 && height <= 153.5) {
                calories = 1560;
            } else {
                calories = 1700;
            }
        } else if (age > 70) {
            if(weight <= 48.5 && height <= 152) {
                calories = 1540;
            } else {
                calories = 1600;
            }
        }
    } else {
        if(age >= 1 && age <= 8) {
            if(weight <= 13.1 && height <= 90.8) {
                calories = 1050;
            } else if ((weight > 13.1 && weight <= 18.3) && (height > 90.8 && height <= 109.5)) {
                calories = 1290;
            } else if ((weight > 18.3 && weight <= 23) && (height > 109.5 && height <= 122.3)) {
                calories = 1440;
            } else {
                calories = 1600;
            }
        } else if (age > 8 && age <= 18) {
            if ((weight > 23 && weight <= 35.6) && (height > 121 && height <= 142.2)) {
                calories = 1800;
            } else if ((weight > 35.6 && weight <= 51.5) && (height > 142.2 && height <= 164.3)) {
                calories = 2200;
            } else if ((weight > 51.5 && weight <= 58.3) && (height > 164.3 && height <= 171.2)) {
                calories = 2370;
            } else {
                calories = 2600;
            }
        } else if (age > 18 && age <= 30) {
            if(weight <= 61.3 && height <= 170.8) {
                calories = 2260;
            } else {
                calories = 2400;
            }
        } else if (age > 30 && age <= 50) {
            if(weight <= 60.1 && height <= 169.2) {
                calories = 2190;
            } else {
                calories = 2300;
            }
        } else if (age > 50 && age <= 60) {
            if(weight <= 59.5 && height <= 167.8) {
                calories = 2180;
            } else {
                calories = 2300;
            }
        } else if (age > 60 && age <= 70) {
            if(weight <= 58.7 && height <= 165.1) {
                calories = 1790;
            } else {
                calories = 1900;
            }
        } else if (age > 70) {
            if(weight <= 56.2 && height <= 163.6) {
                calories = 1740;
            } else {
                calories = 1800;
            }
        }
    }

    calories = (calories / 3).toFixed(2);

    return calories;
}

async function getUserData() {
    return new Promise((resolve) => {
        $.ajax({
            url: '/getprofile',
            type: 'GET'
        }).then((result) => {
            // console.log("result", result);
            resolve(result);
        }).catch((err) => {
            // resolve({});
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

                localStorage.removeItem('access_token');
                
                setTimeout(() => {
                    window.location.href = "/login";
                }, 1200);
            }
        });
    });
}

function renderFoodTypeDropdown2(new_user_data) {
    const dropdown = $('#foodType2');
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
            let filter_data = suggestFoodByUser(result, new_user_data);

            let html = renderFoodRow(filter_data);
            $('#food_suggest').html(html);
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

function renderFoodCategoryDropdown2(new_user_data) {
    const dropdown = $('#foodCategory2');
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
            let filter_data = suggestFoodByUser(result, new_user_data);

            let html = renderFoodRow(filter_data);
            $('#food_suggest').html(html);
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

async function renderMealSelectionPage() {
    let user_data = await getUserData();
    let calories = findCalorisByUser(user_data);

    let new_user_data = {
        calories: calories,
        religion: user_data.religion,
        food_allergies: user_data.food_allergies
    };

    // โหลดเมนูเริ่มต้น
    loadFoodMenu(new_user_data);
    loadFoodMenu2(new_user_data);
    loadFoodMenu3(new_user_data);

    // เรนเดอร์ประเภทอาหาร
    renderFoodCategoryDropdown3(new_user_data);
    renderFoodMenu()

    renderFoodCategoryDropdown4(new_user_data);
    renderFoodMenu2()

    renderFoodCategoryDropdown5(new_user_data);
    renderFoodMenu3()

    $('#his_submit_btn').on('click', function(e) {
        e.preventDefault();
        
        if(insert_history_arr.length > 0){
            for(let i = 0; i < insert_history_arr.length; i++){
                let food_obj = {
                    "food_id": insert_history_arr[i]
                }
    
                $.ajax({
                    url: '/addhistory',
                    type: 'POST',
                    data: food_obj
                }).then((result) => {
                    // alert(result.message);
                    Toastify({
                        text: result.message,
                        duration: 1000,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"// สีพื้นหลัง
                    }).showToast();

                    setTimeout(() => {
                        window.location.href = "/history";
                    }, 1200);
                }).catch((err) => {
                    // alert(err.status);
                });
            }
        }
    });
}

// โหลดรายการอาหารและอัปเดต ul_foodMenu
function loadFoodMenu(user_data, selectedCategory = "") {
    let food_filter = selectedCategory ? { food_category: selectedCategory } : {};

    $.ajax({
        url: '/getfoodlist',
        type: 'GET',
        data: food_filter
    }).then((result) => {
        let filter_data = suggestFoodByUser(result, user_data);

        if(filter_data.length == 0){
            $('#ul_foodMenu').html("<p style='text-align: center; margin: 10px;'>ไม่พบข้อมูล</p>");
        } else {
            let html = renderDropdownMenuList(filter_data);
            $('#ul_foodMenu').html(html); // อัปเดต ul_foodMenu
        }
    }).catch((err) => {
        console.error("Error loading food menu:", err);
    });
}

function loadFoodMenu2(user_data, selectedCategory = "") {
    let food_filter = selectedCategory ? { food_category: selectedCategory } : {};

    $.ajax({
        url: '/getfoodlist',
        type: 'GET',
        data: food_filter
    }).then((result) => {
        let filter_data = suggestFoodByUser(result, user_data);
        if(filter_data.length == 0){
            $('#ul_foodMenu2').html("<p style='text-align: center; margin: 10px;'>ไม่พบข้อมูล</p>");
        } else {
            let html = renderDropdownMenuList(filter_data);
            $('#ul_foodMenu2').html(html); // อัปเดต ul_foodMenu
        }
    }).catch((err) => {
        console.error("Error loading food menu:", err);
    });
}

function loadFoodMenu3(user_data, selectedCategory = "") {
    let food_filter = selectedCategory ? { food_category: selectedCategory } : {};

    $.ajax({
        url: '/getfoodlist',
        type: 'GET',
        data: food_filter
    }).then((result) => {
        let filter_data = suggestFoodByUser(result, user_data);
        if(filter_data.length == 0){
            $('#ul_foodMenu3').html("<p style='text-align: center; margin: 10px;'>ไม่พบข้อมูล</p>");
        } else {
            let html = renderDropdownMenuList(filter_data);
            $('#ul_foodMenu3').html(html); // อัปเดต ul_foodMenu
        }
    }).catch((err) => {
        console.error("Error loading food menu:", err);
    });
}

// เรนเดอร์ dropdown สำหรับประเภทอาหาร
function renderFoodCategoryDropdown3(user_data) {
    const dropdown = $('#foodCategory3');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const items = dropdown.find('.dropdown__item');
    const hiddenInput = dropdown.find('input[type="hidden]');

    // Toggle dropdown
    button.on('click', function() {
        dropdown.toggleClass('open');
    });

    // เมื่อเลือกประเภทอาหาร
    items.on('click', function() {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // อัปเดตข้อความปุ่ม
        hiddenInput.val(selectedValue); // อัปเดต hidden input value
        dropdown.removeClass('open'); // ปิด dropdown

        // โหลดเมนูใหม่ตามประเภทที่เลือก
        loadFoodMenu(user_data, selectedValue);
    });

    // ปิด dropdown เมื่อคลิกข้างนอก
    $(document).on('click', function(event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

function renderFoodMenu() {
    const dropdown = $('#foodMenu');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const hiddenInput = dropdown.find('input[type="hidden"]');

    // Toggle the dropdown
    button.on('click', function () {
        dropdown.toggleClass('open');
    });

    // Event delegation: Handle item clicks dynamically
    dropdown.on('click', '.dropdown__item', function () {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // Update button text
        hiddenInput.val(selectedValue); // Update hidden input
        dropdown.removeClass('open'); // Close dropdown

        insert_history_arr.push(selectedValue);
    });

    // Close dropdown if clicked outside
    $(document).on('click', function (event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

function renderFoodCategoryDropdown4(user_data) {
    const dropdown = $('#foodCategory4');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const items = dropdown.find('.dropdown__item');
    const hiddenInput = dropdown.find('input[type="hidden]');

    // Toggle dropdown
    button.on('click', function() {
        dropdown.toggleClass('open');
    });

    // เมื่อเลือกประเภทอาหาร
    items.on('click', function() {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // อัปเดตข้อความปุ่ม
        hiddenInput.val(selectedValue); // อัปเดต hidden input value
        dropdown.removeClass('open'); // ปิด dropdown

        // โหลดเมนูใหม่ตามประเภทที่เลือก
        loadFoodMenu2(user_data, selectedValue);
    });

    // ปิด dropdown เมื่อคลิกข้างนอก
    $(document).on('click', function(event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

function renderFoodMenu2() {
    const dropdown = $('#foodMenu2');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const hiddenInput = dropdown.find('input[type="hidden"]');

    // Toggle the dropdown
    button.on('click', function () {
        dropdown.toggleClass('open');
    });

    // Event delegation: Handle item clicks dynamically
    dropdown.on('click', '.dropdown__item', function () {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // Update button text
        hiddenInput.val(selectedValue); // Update hidden input
        dropdown.removeClass('open'); // Close dropdown

        insert_history_arr.push(selectedValue);
    });

    // Close dropdown if clicked outside
    $(document).on('click', function (event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

function renderFoodCategoryDropdown5(user_data) {
    const dropdown = $('#foodCategory5');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const items = dropdown.find('.dropdown__item');
    const hiddenInput = dropdown.find('input[type="hidden]');

    // Toggle dropdown
    button.on('click', function() {
        dropdown.toggleClass('open');
    });

    // เมื่อเลือกประเภทอาหาร
    items.on('click', function() {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // อัปเดตข้อความปุ่ม
        hiddenInput.val(selectedValue); // อัปเดต hidden input value
        dropdown.removeClass('open'); // ปิด dropdown

        // โหลดเมนูใหม่ตามประเภทที่เลือก
        loadFoodMenu3(user_data, selectedValue);
    });

    // ปิด dropdown เมื่อคลิกข้างนอก
    $(document).on('click', function(event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

function renderFoodMenu3() {
    const dropdown = $('#foodMenu3');
    const button = dropdown.find('.dropdown__btn');
    const list = dropdown.find('.dropdown__list');
    const hiddenInput = dropdown.find('input[type="hidden"]');

    // Toggle the dropdown
    button.on('click', function () {
        dropdown.toggleClass('open');
    });

    // Event delegation: Handle item clicks dynamically
    dropdown.on('click', '.dropdown__item', function () {
        const selectedValue = $(this).data('value');
        button.text($(this).text()); // Update button text
        hiddenInput.val(selectedValue); // Update hidden input
        dropdown.removeClass('open'); // Close dropdown

        insert_history_arr.push(selectedValue);
    });

    // Close dropdown if clicked outside
    $(document).on('click', function (event) {
        if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
            dropdown.removeClass('open');
        }
    });
}

// ฟังก์ชันช่วยสร้าง HTML ของรายการอาหาร
function renderDropdownMenuList(filter_data) {
    let html = "";
    for (let i = 0; i < filter_data.length; i++) {
        const item = filter_data[i];
        html += `
            <li class="dropdown__item" data-value="${item.id}">${item.food_name}</li>
        `;
    }
    return html;
}
