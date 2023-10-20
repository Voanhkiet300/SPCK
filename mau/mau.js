let contents = document.getElementById('content')

let ContentList = [
    {
        'leader': [''],
        'tittle': [''],
        'image': [''],
        'paragraph': ['']
    },
    {
        'leader': [''],
        'tittle': [''],
        'image': [''],
        'paragraph': ['']
    },
]
let index = 0;
function paragraph() {
    text = ``
    for (let i = 0; i < ContentList[index].paragraph.length; i++) {
        text += `<p>${ContentList[index].paragraph[i]}</p>`
    }
    index ++
    return text
}





for (let Content of ContentList) {
    console.log(Content.paragraph.length);
    if (Content.paragraph.length > 1) {
        if (Content.leader == '' && Content.image == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            ${paragraph()}
            </div>`
        } else if (Content.leader == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            <img src="${Content.image}" alt="">
            ${paragraph()}
            </div>`
        } else if (Content.image == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h2>${Content.leader}</h2>
            <h3>${Content.tittle}</h3>
            ${paragraph()}
            </div>`
        } else {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h2>${Content.leader}</h2>
            <h3>${Content.tittle}</h3>
            <img src="${Content.image}" alt="">
            ${paragraph()}
            </div>`
        }
    } else {

        if (Content.leader == '' && Content.image == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            ${paragraph()}
            </div>`
        } else if (Content.leader == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            <img src="${Content.image}" alt="">
            ${paragraph()}
            </div>`
        } else if (Content.image == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h2>${Content.leader}</h2>
            <h3>${Content.tittle}</h3>
            ${paragraph()}
            </div>`
        } else {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h2>${Content.leader}</h2>
            <h3>${Content.tittle}</h3>
            <img src="${Content.image}" alt="">
            ${paragraph()}
            </div>`
        }
    }
}

function userprint() {
    let user = JSON.parse(localStorage.getItem('user')) || []
    let right = document.getElementById('right')
    if (user == []) {
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