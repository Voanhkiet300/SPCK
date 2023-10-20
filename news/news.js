let contents = document.getElementById('content')
let ContentList = []

if (ContentList.length == 0) {
    contents.innerHTML = `<img src="../no result.png" class="no_result" alt="">`
} else {
    for (let Content of ContentList) {
        contents.innerHTML += `<div class="content_box">
            <a href="${Content.href}">
                <img src="${Content.image}" alt="">
                <div class="information">
                    <h3 class="">${Content.tittle}</h3>
                    <p class="">${Content.paragraph}</p>
                </div>
            </a>
        </div>`
    }
}








function userprint() {
    let user = JSON.parse(localStorage.getItem('user')) || []
    let right = document.getElementById('right')
    if ((user.length == 0)) {
        console.log(user);
        right.innerHTML = `<a class="hea_content" href="account/login/login.html">Login</a>
    <a class="hea_content" href="account/register/register.html">register</a>
    <a class="hea_setting" href="setting">
        <i class="fa fa-gear" style="font-size:36px;"></i>
    </a>`
    } else {
        console.log(user);
        right.innerHTML = `
    <h3 class="hea_user">${user[0].name}</h3>
    <a class="hea_setting" href="setting">
        <i class="fa fa-gear" style="font-size:36px;"></i>
    </a>`
    }
}
userprint()