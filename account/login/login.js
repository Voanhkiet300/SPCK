login.addEventListener("submit", (e) => {
    // Lấy từ ô input
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    // Lấy từ localStorage
    let user = JSON.parse(localStorage.getItem("user"))

    if (email == user.email) {
        if (password == user.password){
            window.location.href = "../index.html"
        } else alert("Sai mật khẩu")
    }else alert("Không tìm thấy tài khoản")
})