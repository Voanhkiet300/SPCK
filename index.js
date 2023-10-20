let my_content = document.getElementById('my_content')
let all_content = document.getElementById('all_content')
let user = JSON.parse(localStorage.getItem('user')) || []
let contents = document.getElementById('content')
let ContentList = [
    {
        'href': ['event/event-content/địa điểm/event-content.html'],
        'tittle': ['Top 19 địa điểm đi chơi Halloween ở Sài Gòn và Hà Nội đặc sắc nhất'],
        'image': ['https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-3.jpg'],
        'paragraph': ['Cùng tìm hiểu về lễ hội Halloween và những địa điểm vui chơi ở Sài Gòn và Hà Nội nhé!']
    },
    {
        'href': ['event/event-content/Ý nghĩa/event-content.html'],
        'tittle': ['Halloween Là Ngày Nào? Nguồn Gốc Và Ý Nghĩa Ngày Halloween'],
        'image': ['https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/tin-cong-nghe/halloween-la-ngay-nao-nguon-goc-va-y-nghia-ngay-halloween-thumbnail.jpg'],
        'paragraph': ['Hãy cùng tìm hiểu về nguồn gốc và ý nghĩa của ngày halloween nhé!']
    },
    {
        'href': ['event/event-content/Phim kinh dị/event-content.html'],
        'tittle': ['12 bộ phim kinh dị được xem nhiều trong dịp Halloween'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/beetlejuice-17363793.jpg'],
        'paragraph': ['Xem kinh dị là một hoạt động giải trí rất được ưa chuộng trong dịp Halloween, rất nhiều bộ phim thuộc diện kinh điển được xem đi xem lại.']
    },
    {
        'href': ['event/event-content/Chuyện kinh dị/event-content.html'],
        'tittle': ['Tổng hợp truyện ma Halloween nghe rùng mình nhất'],
        'image': ['https://taimienphi.vn/tmp/cf/aut/fnl8-truyen-ma-hallowen-nghe-rung-minh-nhat-1.jpg'],
        'paragraph': ['tổng hợp rất nhiều câu chuyện ma kinh dị, giật mình hay nhất giúp bạn có nhiều lựa chọn và kéo dài buổi lễ hội hóa trang của mình hơn.']
    },
    {
        'href': ['event/event-content/Bí ngô/event-content.html'],
        'tittle': ['Tổng hợp truyện ma Halloween nghe rùng mình nhất'],
        'image': ['https://image.vtc.vn/resize/th/upload/2022/10/29/qua-bi-ngo-halloween-09195860.jpg'],
        'paragraph': ['Những quả bí ngô khắc vô số hình thù độc đáo xuất hiện ở khắp nơi vào dịp Halloween, khiến nhiều người không khỏi thắc mắc về nguồn gốc, ý nghĩa của biểu tượng này.']
    }
]


for (let Content of ContentList) {
    if (ContentList.length > 0) {
        contents.innerHTML += `<div class="content_box">
        <a href="${Content.href}">
            <img src="${Content.image}" alt="">
            <div class="information">
                <h3 class="">${Content.tittle}</h3>
                <p class="">${Content.paragraph}</p>
            </div>
        </a>
    </div>`;
    } else {
        contents.innerHTML = `<img src="no result.png" alt="">`
    }

}

function setting(event) {
    event.preventDefault()
    
}





















function userprint() {
    let right = document.getElementById('right')
    if (user.length == 0) {
        console.log(user);
        right.innerHTML = `<a class="hea_content" href="account/login/login.html">Login</a>
        <a class="hea_content" href="account/register/register.html">register</a>
        <a onclick="setting()" cclass="hea_setting" href="setting">
        <i class="fa fa-gear" style="font-size:36px;"></i>
    </a>`
    } else {
        console.log(user);
        right.innerHTML = `
    <h3 class="hea_user">${user[0].name}</h3>
    <a onclick="setting()" class="hea_setting" href="">
        <i class="fa fa-gear" style="font-size:36px;"></i>
    </a>`
    }
}
userprint()