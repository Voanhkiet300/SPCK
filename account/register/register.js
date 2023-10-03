let register = document.getElementById('register')

register.addEventListener('submit', function (event) {
    event.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let users = {email: email, password: password}
    localStorage.setItem('user', JSON.stringify(user))
})