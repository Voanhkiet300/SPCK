let login = document.getElementById('login')
let UserAccounts = JSON.parse(localStorage.getItem("UserAccounts"))
var eCheck = ''
var pCheck = ''
let user = []
let username = ''

function checkpassword() {
    for (const UserAccount of UserAccounts) {
        if (password.value == user.password) {
            pCheck = true
        } else {
            pCheck = false
        }
    }
}
function checkemail() {
    for (const UserAccount of UserAccounts) {
        username = UserAccount.name
        console.log(username);
        console.log(UserAccount.email);
        console.log(email.value);
        if (email.value == UserAccount.email) {
            eCheck = true
        } else {
            eCheck = false
        }
    }
}

login.addEventListener("submit", (event) => {
    event.preventDefault()
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    // console.log(email);
    checkemail()
    if (eCheck == true) {
        checkpassword()
        if (pCheck = true) {
            let account = {name: username, email: email.value, password: password.value}
            user.push(account)
            localStorage.setItem('user', JSON.stringify(user))
            window.location.href = "../../index.html"
        } else {
            alert('Sai mật khẩu')
        }
    } else {
        alert('Không tìm thấy tài khoản')
    }
})

