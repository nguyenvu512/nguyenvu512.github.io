var currentIndex=0;
function changeBonusText(){
    var text=["Levents loves you","Sales up to 40%", "Miễn phí ship cho đơn hàng từ 1.000.000VNĐ"];
    var changeText=document.querySelector(".bonus_text");
    changeText.textContent = text[currentIndex];
    currentIndex = (currentIndex + 1) % text.length;
}
setInterval(changeBonusText,10000);
// sự kiện nhấn search thì hiển thị ô search
var btnSearch=document.querySelector(".searchButton");
btnSearch.addEventListener("click", function(){
    document.querySelector(".searchBox").classList.add("active");
});
document.querySelector(".deleteIcon").addEventListener("click", function(){
    document.querySelector(".searchBox").classList.remove("active");
});
//đăng ký đăng nhâphj
$(document).ready(function() {
    // Xử lý sự kiện đăng ký
    $(".btn_register").click(function(event) {
        event.preventDefault(); // Ngăn chặn form được gửi đi

        // Lấy thông tin từ form đăng ký
        var username = $("#loginUsername").val();
        var password = $("#rgtpwd").val();
        var confirmPassword = $("#rgtpwdagain").val();

        // Kiểm tra xác nhận mật khẩu
        if (password !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        // Lưu thông tin tài khoản vào localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Đăng ký thành công!");

        // Đóng modal đăng ký
    });

    // Xử lý sự kiện đăng nhập
    $(".btn_login").click(function(event) {
        event.preventDefault(); // Ngăn chặn form được gửi đi

        // Lấy thông tin từ form đăng nhập
        var username = $("#rgtUsername").val();
        var password = $("#loginpwd").val();

        // Lấy thông tin từ localStorage
        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("password");

        // Kiểm tra thông tin đăng nhập
        if (username === storedUsername && password === storedPassword) {
            alert("Đăng nhập thành công!");
            // Thực hiện các hành động khác sau khi đăng nhập thành công
        } else {
            alert("Tài khoản hoặc mật khẩu không chính xác!");
        }

        // Đóng modal đăng nhập
    });
});

