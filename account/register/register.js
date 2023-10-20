let register = document.getElementById('register')
let users = JSON.parse(localStorage.getItem('UserAccounts')) || []

register.addEventListener('submit', function (event) {
    event.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let user = {name: name, email: email, password: password}
    users.push(user)
    localStorage.setItem('UserAccounts', JSON.stringify(users))
})