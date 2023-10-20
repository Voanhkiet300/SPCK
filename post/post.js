let my_content = document.getElementById('my_content')
let all_content = document.getElementById('all_content')
let posts = JSON.parse(localStorage.getItem('myPost')) || []
console.log(posts.length);
print()


function print() {
    for (let post of posts) {
        my_content.innerHTML += `<div class="content_box" id="post">
        <div class="delete">
        <h3 class="content_box1">${post.username}</h3>
        <button onclick="delete_post(${post.id})" id="delete">Delete post</button>
        </div>
        <p class="caption content_box1">${post.caption}</p>
        <img src="${post.image}" alt="" class="content_box1" id="img">
        <p class="content_box1">${post.content}</p>
    </div>`
        all_content.innerHTML += `<div class="content_box" id="post">
        <div class="delete">
        <h3 class="content_box1">${post.username}</h3>
        <button onclick="delete_post(${post.id})" id="delete">Delete post</button>
        </div>
        <p class="caption content_box1">${post.caption}</p>
        <img src="${post.image}" alt="" class="content_box1" id="img">
        <p class="content_box1">${post.content}</p>
    </div>`
    }
}

function delete_post(a) {
    for (let post of posts) {
        let find_id = Object.values(post)[0]
        if (find_id == a) {
            var newPosts = posts.filter(object => {
                return object.id !== find_id;
            });
        }
    }
    for (let i = 0; i < newPosts.length; i++) {
        newPosts[i].id = i + 1
    }
    posts = newPosts
    localStorage.setItem('myPost', JSON.stringify(posts))
    console.log(newPosts);
    my_content.innerHTML = ``
    all_content.innerHTML = ``
    print()
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
        // console.log(user);
        right.innerHTML = `
        <h3 class="hea_user">${user[0].name}</h3>
        <a class="hea_setting" href="setting">
        <i class="fa fa-gear" style="font-size:36px;"></i>
    </a>`
    }
}
userprint()