let contents = document.getElementById('content')

let ContentList = [
    {
        'tittle': ['Sự tích đèn bí ngô Halloween'],
        'image': [''],
        'paragraph': [`Chiếc đèn hình quả bí ngô có tên gọi là “Jack O'Lantern”, trong đó Jack là tên anh chàng keo kiệt, bủn xỉn trong câu chuyện dân gian của đất nước Ireland. Anh ta thường chỉ giao du, kết bạn với một con quỷ.`, 'Một lần, Jack mời quỷ đi uống rượu. Do bản tính keo kiệt, anh ta gạ gẫm quỷ biến thành đồng tiền để trả cho người bán hàng. Con quỷ đồng ý, tự biến mình thành đồng tiền. Nhưng không ngờ Jack tráo trở, đem bỏ đồng tiền đó vào túi có cây thánh giá, khiến quỷ không thể trở về nguyên hình. Hoảng sợ, quỷ ra sức van nài. Cuối cùng Jack đồng ý thả nó ra với điều kiện quỷ không được quấy nhiễu anh ta trong suốt một năm, và nếu Jack chết, quỷ cũng không được thu linh hồn của anh ta. Con quỷ đồng ý.']
    },
    {
        'tittle': [''],
        'image': ['https://image.vtc.vn/resize/th/upload/2022/10/29/qua-bi-ngo-halloween-09195860.jpg'],
        'paragraph': ['Sau một năm giao kèo, Jack sợ quỷ quay lại làm hại mình nên nghĩ ra cách lừa quỷ lên cây hái táo. Trong lúc quỷ đang ở trên cây táo, Jack nhanh chóng khắc thánh giá dưới gốc cây. Quỷ sợ quá không dám leo xuống nên đã thỏa thuận với Jack sẽ không trêu chọc anh chàng thêm 10 năm nữa.', 'Vài năm sau, Jack chết đi, nhớ đến lời hứa với Jack, con quỷ đã không tới đưa linh hồn anh ta về địa ngục. Thế nhưng trên thiên đường, Thượng đế cũng không chấp nhận Jack vì những điều xấu anh ta từng làm. Linh hồn anh ta lang thang khắp nơi. Thấy vậy, quỷ đem lòng thương hại, lấy một quả bí ngô, moi hết ruột và cho vào ít than hồng của địa ngục đưa cho Jack để sưởi ấm trên đường trở lại trần gian. Để cho không khí lưu thông giữ lửa không tắt, Jack phải đục thủng quả bí ngô. Ánh lửa từ trong chiếu ra, soi sáng nẻo đường lang thang của Jack. Có lẽ Jack phải cầm đèn đi lang thang trên mặt đất cho đến ngày phán xét cuối cùng theo niềm tin Thiên Chúa giáo. ']
    },
    {
        'tittle': ['Ý nghĩa của biểu tượng quả bí ngô Halloween'],
        'image': [''],
        'paragraph': ['Với mục đích cầu nguyện cho các linh hồn và để hai cõi âm dương hội ngộ, vào ngày Halloween, mọi người thường khoét ruột quả bí ngô, tỉa hình mặt người láu cá. Sau đó, họ để vào trong những cây nến để làm đèn. Quả bí ngô trở thành biểu tượng của lễ hội này.']
    },
    {
        'tittle': [''],
        'image': ['https://image.vtc.vn/resize/th/upload/2022/10/29/qua-bi-ngo-halloween1-09222806.jpg'],
        'paragraph': ['Đêm 31/10, rạng sáng 1/11 hằng năm là thời điểm diễn ra lễ hội Halloween. Người ta tin rằng linh hồn của người chết sẽ trở về thăm nhà và để lại lời nhắn nhủ cho thân nhân trong giấc mơ. Bởi vậy, vào khoảng thời gian này, người phương Tây treo đèn lồng bằng quả bí ngô trước cửa với hy vọng các linh hồn, ma quỷ có đủ ánh sáng để tìm đường đi và không quấy rầy chủ nhà.', 'Ngoài ý nghĩa tâm linh, người phương Tây còn quan niệm, màu vàng của quả bí ngô tượng trưng cho sự thành công và giàu sang. Do đó, họ thường trang trí nhà bằng quả bí ngô trong mùa Halloween với mong muốn nhận được may mắn và hạnh phúc.']
    }
]
let index = 0;
function paragraph() {
    text = ``
    for (let i = 0; i < ContentList[index].paragraph.length; i++) {
        text += `<p>${ContentList[index].paragraph[i]}</p>`
    }
    index++
    return text
}





for (let Content of ContentList) {
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
            <h3>${Content.tittle}</h3>
            ${paragraph()}
            </div>`
    } else {
        contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            <img src="${Content.image}" alt="">
            ${paragraph()}
            </div>`
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