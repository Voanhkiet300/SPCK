let myPost = JSON.parse(localStorage.getItem('myPost')) || []
let user = JSON.parse(localStorage.getItem('user')) || []
let Post = ''
let myContent = document.getElementById('my_content')
let Newpost = document.getElementById('Newpost')
let image_box = document.getElementById('image_box')
let image_input = document.getElementById("image-input")
let img = document.getElementById('img')
let label = document.getElementById('label')
let url = ''


Newpost.addEventListener("submit", (event) => {
    event.preventDefault()
    let caption = document.getElementById("caption")
    let content = document.getElementById('contentInput')
    console.log(url);
    Post = {
        'id': myPost.length + 1,
        'username': user[0].name,
        'caption': caption.value,
        'content': content.value,
        'image': url
    }
    myPost.push(Post)
    localStorage.setItem('myPost', JSON.stringify(myPost))
    Toastify({
        text: "Đăng bài thành công!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

const reader = new FileReader()
image_input.onchange = (event) => {
    const files  = event.target.files;


    reader.readAsDataURL(files[0])

    reader.addEventListener("load", (event) => {
        url = event.target.result;
        console.log(url);
        image_box.innerHTML = `<img src="${url}" alt="" id="img" class="image">`
    })
}
















function userprint() {
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