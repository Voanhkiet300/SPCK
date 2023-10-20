let contents = document.getElementById('content')

let ContentList = [
    {
        'leader': ['Halloween là ngày nào?'],
        'tittle': [''],
        'image': ['https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/tin-cong-nghe/halloween-la-ngay-nao-nguon-goc-va-y-nghia-ngay-halloween-thumbnail.jpg'],
        'paragraph': ['All Hallows’ Evening (viết tắt là Halloween) thường được biết đến với cái tên là “Lễ hội ma quỷ”. Thực tế, Halloween là một lễ hội truyền thống và đặc biệt ở phương Tây, nó thường được diễn ra hàng năm vào ngày 31/10, trước buổi lễ Các Thánh trong Kito Giáo. Halloween là thời điểm đánh dấu một mùa vụ thu hoạch đã kết thúc và đón chờ một mùa đông băng giá. Đồng thời, đây cũng là dịp để chúng ta cùng nhau tưởng nhớ về những vị Thánh, các vị Tử Đạo hay những người thân đã qua đời. Cho đến ngày nay, Halloween đã trở thành lễ hội phổ biến trên toàn thế giới, với quy mô lớn/nhỏ tùy vào mỗi quốc gia. ']
    },
    {
        'leader': ['Nguồn gốc lễ Halloween'],
        'tittle': [''],
        'image': [''],
        'paragraph': ['Chúng ta đã biết Halloween là ngày nào rồi, nhưng liệu các bạn đã biết về nguồn gốc của ngày này chưa? Thật ra, Halloween đã có từ 2000 năm về trước. Lễ hội này có nguồn gốc từ dân tộc Celt, sinh sống tại những vùng đất là Ireland, Anh Quốc và miền Bắc nước Pháp bây giờ. Theo niềm tin tôn giáo của người Celt, họ cho rằng vào trước thềm năm mới, ranh giới giữa hai thế giới âm và dương rất mờ nhạt, khiến cho người đã chết vẫn có thể trở về cõi trần gian. Chính vì vậy, họ đã đốt lửa và hóa trang thành nhiều hình dáng kỳ lạ, nhằm xua đuổi tà ma và chào đón những người thân đã mất quay về.']
    },
    {
        'leader': ['Ý nghĩa ngày Halloween'],
        'tittle': [''],
        'image': [''],
        'paragraph': ['Nhìn vào nguồn gốc của ngày Halloween, chúng ta có thể thấy rằng đây không chỉ đơn thuần là một lễ hội ma quỷ hay ngày hội hóa trang. Halloween cũng là một dịp lễ linh thiêng và quan trọng thuộc về tôn giáo, mang nhiều ý nghĩa sâu sắc như:']
    },
    {
        'leader': [''],
        'tittle': ['Tưởng nhớ và tôn vinh những người đã khuất'],
        'image': [''],
        'paragraph': ['Nếu có ai đó hỏi bạn Halloween là ngày nào, có ý nghĩa gì? Bạn có thể trả lời rằng đây là ngày đầu tiên (ngày 31/10) trong chuỗi ngày tôn vinh những vị Thánh (sau đó là ngày Lễ Các Thánh vào 1/11), cũng là lúc để chúng ta tưởng niệm đến những người thân đã khuất (Lễ Linh Hồn vào 2/11). Theo truyền thuyết, Halloween là ngày mà các vong hồn được phép quay trở về trần gian để thăm người nhà. Nếu những vong hồn này nhận được nhiều lời cầu nguyện từ trần thế, họ sẽ sớm được rửa tội và trở về với Chúa. ']
    },
    {
        'leader': [''],
        'tittle': ['Là ngày trừ tà và xua đuổi những điều xấu xa'],
        'image': [''],
        'paragraph': ['Nếu nói về ý nghĩa xua đuổi ma quỷ và những điều xấu xa trong ngày Halloween, chúng ta cần phải kể đến một câu chuyện truyền thuyết của người Ireland.  Chuyện kể về một chàng trai đã chết tên là Jack. Linh hồn của Jack không được lên thiên đàng, vì lúc còn sống, anh ta là một người rất keo kiệt, ích kỷ, không biết chia sẻ với người khác. Tuy nhiên, linh hồn này cũng không thể xuống địa ngục vì lúc sinh thời, Jack cũng đã từng chơi đùa với ma quỷ nên lũ quỷ không muốn bắt anh.', 'Không muốn nhìn thấy linh hồn “người bạn” của mình lang thang và vất vưởng như vậy, lũ quỷ đã lấy một ít than hồng ở Địa Ngục và cho vào quả bí ngô, tạo thành một chiếc đèn lồng giúp Jack soi sáng con đường mà mình đi. Để tạo thêm không khí giữ lửa, Jack cũng đã đục thủng các lỗ xung quanh quả bí. Đó chính là lý do vì sao mà ngày nay, bí ngô lại trở thành biểu tượng chính trong dịp này. ']
    },
    {
        'leader': [''],
        'tittle': ['Là ngày trẻ em được nhận những viên kẹo táo'],
        'image': ['https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/tin-cong-nghe/halloween-la-ngay-nao-nguon-goc-va-y-nghia-ngay-halloween-h7.jpg'],
        'paragraph': ['Chắc hẳn bạn cũng biết “Treat or Trick” là trò chơi không thể thiếu vào mỗi dịp Halloween. Người ta thường chọn những viên kẹo táo phủ đường để tặng cho trẻ em vào dịp này. Cách làm món kẹo này cũng rất đơn giản, bạn chỉ cần chọn ra những quả táo to tròn và nhúng vào siro hoặc đường, trang trí thêm một lớp socola phủ cốm nữa là đủ. Hãy thử làm món nào vào dịp Halloween năm nay nhé!']
    },
    {
        'leader': ['Những hoạt động thú vị trong ngày Halloween'],
        'tittle': ['Ngày hội hóa trang'],
        'image': ['https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/tin-cong-nghe/halloween-la-ngay-nao-nguon-goc-va-y-nghia-ngay-halloween-h2.jpg'],
        'paragraph': ['Khi nhận được câu hỏi ngày Halloween là ngày nào, chắc hẳn mọi người sẽ nghĩ ngay đến việc nó chính là ngày hội hóa trang. Điều này cũng dễ hiểu thôi, vì hoạt động hóa trang thành những nhân vật mình yêu thích đã trở thành một nét đặc trưng của dịp lễ hội này.', 'Việc hóa trang thành một hình dáng khác lạ được bắt nguồn với ý nghĩa ban đầu là xua đuổi tà ma. Nhưng trải qua hàng nghìn năm phát triển, người ta đã dần quên mất ý nghĩa này, thay vào đó, người ta thích nhìn nhận lễ hội hóa trang Halloween như một “show” thời trang bắt mắt và ấn tượng hơn. Vào dịp này, mọi người có thể thỏa thích hóa trang thành những hình mẫu mà mình yêu thích, có thể là nhân vật hoạt hình, có thể là diễn viên chính trong bộ phim nào đó và cùng diễu hành vui vẻ, nhộn nhịp trên đường phố. ']
    },
    {
        'leader': [''],
        'tittle': ['Khắc bí ngô'],
        'image': [''],
        'paragraph': ['Sau khi đọc qua câu chuyện về linh hồn của Jack, chắc bạn cũng đã hiểu được Halloween là ngày nào, vì sao bí ngô lại là biểu tượng của ngày này rồi, phải không nào? Ngày nay, hoạt động khắc bí ngô trong dịp Halloween đã dần trở nên phổ biến và sáng tạo hơn. Người ta có thể khắc bí ngô thành nhiều hình thù khác nhau, phổ biến nhất là gương mặt ma được tạo hình thành những biểu cảm đáng yêu, nhí nhố. ']
    },
    {
        'leader': [''],
        'tittle': ['Gõ cửa xin kẹo'],
        'image': ['https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/tin-cong-nghe/halloween-la-ngay-nao-nguon-goc-va-y-nghia-ngay-halloween-h3.jpg'],
        'paragraph': ['Nếu như bạn hỏi trẻ con phương Tây Halloween là ngày nào, các bạn nhỏ sẽ trả lời rằng đó là ngày để chơi trò “Trick or Treat” (cho kẹo hay bị ghẹo). Phong tục này bắt đầu phổ biến tại nước Mỹ vào những năm 1960. Vào dịp Halloween, trẻ em trong khu phố thường hóa trang và rủ nhau đến gõ cửa từng nhà để xin kẹo. Người ta quan niệm rằng những đứa bé này đang “vào vai” những linh hồn trở về, vì vậy, việc cho kẹo cũng thể hiện được sự chia sẻ cho linh hồn những người đã khuất. Nếu không được cho kẹo, các bé có thể bày ra những trò tinh ranh và chọc phá chủ nhà. Tuy nhiên, cho đến ngày nay, phong tục này đã dần trở nên lịch sự hơn, gia chủ muốn cho kẹo các bé thường sẽ báo trước, và những gia đình nào không muốn tham gia vào trò chơi này cũng sẽ không bị quấy phá nữa. ']
    },
    {
        'leader': [''],
        'tittle': ['Lấy táo vào ngày lễ Halloween'],
        'image': [''],
        'paragraph': ['Tập tục này bắt nguồn từ người Celtic. Khi mảnh đất của dân tộc này bị người La Mã chiếm đóng, một phần văn hóa La Mã cũng đã du nhập và phát triển tại đây, trong đó có lễ hội thờ nữ thần Pomona - vị thần mùa màng. Theo truyền thuyết, vị nữ thần này thường ẩn mình trong những giỏ trái cây, đặc biệt là táo - loại hoa quả linh thiêng, thường được dùng để cúng các vị thần linh.  Chính vì vậy vào dịp Halloween, người ta thường tổ chức các trò chơi có liên quan đến táo như lấy táo trong chậu nước, gọt vỏ táo,... như một nghi lễ cầu may. ']
    },
    {
        'leader': [''],
        'tittle': ['Tổ chức party'],
        'image': ['https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/tin-cong-nghe/halloween-la-ngay-nao-nguon-goc-va-y-nghia-ngay-halloween-h4.png'],
        'paragraph': ['Những buổi tiệc tưng bừng là điều không thể thiếu vào những đêm Halloween ở khắp nơi trên thế giới. Tại những buổi tiệc này, bạn sẽ phải hóa thân thành các nhân vật theo ý thích hoặc theo đúng “dresscode” mà chủ bữa tiệc đề ra. Trong các buổi tiệc chào đón Halloween, bạn sẽ được trải nghiệm nhiều trò chơi cực kỳ thú vị, cũng như được thưởng thức những món ăn với hình dáng kỳ quái nhưng vẫn rất bắt mắt và ấn tượng.']
    },
    {
        'leader': ['Những món ăn truyền thống trong ngày Halloween'],
        'tittle': ['Món súp bí ngô'],
        'image': ['https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/tin-cong-nghe/halloween-la-ngay-nao-nguon-goc-va-y-nghia-ngay-halloween-h5.jpg'],
        'paragraph': ['Bí ngô được xem là biểu tượng đặc trưng của ngày Halloween, chính vì vậy, những món ăn từ bí như súp bí, bánh bí ngô,... sẽ không thể thiếu trong bữa tiệc này. Mỗi quốc gia, khu vực trên thế giới sẽ có những cách chế biến súp bí ngô khác nhau. Thông thường, món nay thường có vị béo, ngọt nhẹ, phù hợp với cả trẻ em lẫn người lớn. ']
    },
    {
        'leader': [''],
        'tittle': ['Bánh linh hồn'],
        'image': [''],
        'paragraph': ['Halloween là ngày nào? Đó được xem là ngày mà các linh hồn sẽ được phép trở về nhân gian, vì vậy, món bánh linh hồn cũng là một trong số những món ăn cần xuất hiện trên bàn tiệc Halloween. Về cơ bản, đây là một kiểu bánh quy có hình tròn, có nho khô bên trên và được trang trí thêm biểu tượng hình chữ thập. Ngoài ra, để tạo thêm không khí cho bữa tiệc, bạn cũng có thể làm bánh linh hồn với nhiều hình thù đậm chất “Halloween” hơn như hình đầu lâu chẳng hạn. ']
    },
    {
        'leader': [''],
        'tittle': ['Món bánh Barmbrack'],
        'image': ['https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/tin-cong-nghe/halloween-la-ngay-nao-nguon-goc-va-y-nghia-ngay-halloween-h6.jpg'],
        'paragraph': ['Barmbrack là một loại bánh mì của Ireland, bên trong gồm có các loại hoa quả sấy khô như mâm xôi hay nho. Trong ngày Halloween, người ta thường bỏ thêm một số loại vật phẩm bên trong chiếc bánh này, bao gồm nhẫn, đồng xu và miếng vải. Nếu bạn chọn được chiếc bánh có đồng xu, điều đó có nghĩa là bạn sẽ có may mắn về tiền tài trong thời gian sắp tới. Ngược lại, miếng vải sẽ tượng trưng cho sự khó khăn mà bạn cần phải đối mặt. Cuối cùng, chiếc nhẫn sẽ là biểu tượng của tình yêu, dự đoán tình duyên sắp tới của bạn. Đây cũng là một trò chơi rất hay trong dịp lễ Halloween này. ']
    },
    {
        'leader': [''],
        'tittle': ['Món khoai tây nghiền Colcannon đặc biệt'],
        'image': [''],
        'paragraph': ['Món khoai tây nghiền Colcannon cũng có xuất xứ từ Ireland, với nguyên liệu chính là khoai tây, sữa, bơ và một ít cải xoăn. Bạn có thể biến tấu bằng cách cho thêm tiêu hoặc thịt xông khói, giúp cho bữa ăn thêm đầy đủ hương vị và hấp dẫn hơn. ']
    }
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