let contents = document.getElementById('content')

let ContentList = [
    {   
        'href': ['event-content/địa điểm/event-content.html'],
        'tittle': ['Top 19 địa điểm đi chơi Halloween ở Sài Gòn và Hà Nội đặc sắc nhất'],
        'image': ['https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-3.jpg'],
        'paragraph': ['Cùng tìm hiểu về lễ hội Halloween và những địa điểm vui chơi ở Sài Gòn và Hà Nội nhé!']
    },
    {
        'href': ['event-content/Ý nghĩa/event-content.html'],
        'tittle': ['Halloween Là Ngày Nào? Nguồn Gốc Và Ý Nghĩa Ngày Halloween'],
        'image': ['https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/tin-cong-nghe/halloween-la-ngay-nao-nguon-goc-va-y-nghia-ngay-halloween-thumbnail.jpg'],
        'paragraph': ['Hãy cùng tìm hiểu về nguồn gốc và ý nghĩa của ngày halloween nhé!']
    },
    {
        'href': ['event-content/Phim kinh dị/event-content.html'],
        'tittle': ['12 bộ phim kinh dị được xem nhiều trong dịp Halloween'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/beetlejuice-17363793.jpg'],
        'paragraph': ['Xem kinh dị là một hoạt động giải trí rất được ưa chuộng trong dịp Halloween, rất nhiều bộ phim thuộc diện kinh điển được xem đi xem lại.']
    },
    {
        'href': ['event-content/Chuyện kinh dị/event-content.html'],
        'tittle': ['Tổng hợp truyện ma Halloween nghe rùng mình nhất'],
        'image': ['https://taimienphi.vn/tmp/cf/aut/fnl8-truyen-ma-hallowen-nghe-rung-minh-nhat-1.jpg'],
        'paragraph': ['tổng hợp rất nhiều câu chuyện ma kinh dị, giật mình hay nhất giúp bạn có nhiều lựa chọn và kéo dài buổi lễ hội hóa trang của mình hơn.']
    }
]


for (let Content of ContentList) {
    contents.innerHTML += `<div class="content_box">
    <a href="${Content.href}">
        <img src="${Content.image}" alt="">
        <div class="information">
            <h3 class="">${Content.tittle}</h3>
            <p class="">${Content.paragraph}</p>
        </div>
    </a>
</div>`;
}