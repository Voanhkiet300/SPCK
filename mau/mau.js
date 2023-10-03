let contents = document.getElementById('content')

let ContentList = [
    {
        'leader': [''],
        'tittle': [''],
        'image': [''],
        'paragraph': ['']
    }
    {
        'leader': [''],
        'tittle': [''],
        'image': [''],
        'paragraph': ['']
    },
]





for (let Content of ContentList) {
    console.log(Content.paragraph.length);
    if (Content.paragraph.length > 1) {
        if (Content.leader == '' && Content.image == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            <p>${Content.paragraph[0]}</p>
            <p>${Content.paragraph[1]}</p>
            </div>`
        } else if (Content.leader == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            <img src="${Content.image}" alt="">
            <p>${Content.paragraph[0]}</p>
            <p>${Content.paragraph[1]}</p>
            </div>`
        } else if (Content.image == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h2>${Content.leader}</h2>
            <h3>${Content.tittle}</h3>
            <p>${Content.paragraph[0]}</p>
            <p>${Content.paragraph[1]}</p>
            </div>`
        } else {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h2>${Content.leader}</h2>
            <h3>${Content.tittle}</h3>
            <img src="${Content.image}" alt="">
            <p>${Content.paragraph[0]}</p>
            <p>${Content.paragraph[1]}</p>
            </div>`
        }
    } else {

        if (Content.leader == '' && Content.image == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            <p>${Content.paragraph}</p>
            </div>`
        } else if (Content.leader == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            <img src="${Content.image}" alt="">
            <p>${Content.paragraph}</p>
            </div>`
        } else if (Content.image == '') {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h2>${Content.leader}</h2>
            <h3>${Content.tittle}</h3>
            <p>${Content.paragraph}</p>
            </div>`
        } else {
            contents.innerHTML += `<div id="content_box" class="content_box">
            <h2>${Content.leader}</h2>
            <h3>${Content.tittle}</h3>
            <img src="${Content.image}" alt="">
            <p>${Content.paragraph}</p>
            </div>`
        }
    }
}