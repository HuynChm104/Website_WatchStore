function signup(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username: username,
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);

    alert("Đăng ký thành công");
    window.location.href = "../pages/trangchu.html";
}

function login(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    if (user == null) {
        alert ("Tài khoản không tồn tại");
    }
    else if (
        username == data.username &&
        password == data.password
    ) {
        alert ("Đăng nhập thành công");
        window.location.href = "../pages/trangchu.html";
    } else {
        alert ("Thông tin không chính xác")
    }
}
    