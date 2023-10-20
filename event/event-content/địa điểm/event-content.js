let content1 = document.getElementById('content_container1')
let content2 = document.getElementById('content_container2')
let ContentList1 = [
    {
        'tittle': '1. Phố Tây Bùi Viện, Quận 1- Địa điểm chơi Halloween hot nhất Sài Gòn',
        'paragraph1': 'Đứng đầu danh sách “Halloween nên đi đâu chơi TPHCM” chắc chắn là phố Tây Bùi Viện. Đây là nơi tập trung rất nhiều du khách nước ngoài nên lễ được tổ chức rất lớn. Cả con phố nhộn nhịp, tấp nập những người hóa trang thành ma quỷ. Khắp nơi được trang trí lồng đèn bí ngô, nến,...theo đúng chủ đề đêm kinh hoàng. Vì thế mà phố Tây Bùi Viện được xem là địa điểm “hot” nhất dành cho những ai chưa biết Halloween đi chơi ở đâu.',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-3-1.jpg',
        'paragraph2': ''
    },
    {
        'tittle': '2. Phố đi bộ Nguyễn Huệ, Quận 1',
        'paragraph1': 'Điểm đến thứ 2 cũng náo nhiệt không kém vào ngày lễ Halloween chính là phố đi bộ Nguyễn Huệ. Khu phố này ngày thường đã rộn ràng, nay càng thêm phần sôi động với những góc trang trí bắt mắt, những bạn trẻ diện phục trang kinh dị chụp ảnh khắp nơi. Đặc biệt là bạn chẳng tốn một đồng phí nào mà vẫn có thể hòa mình vào không khí Halloween tại đây. ',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-3.jpg',
        'paragraph2': ''
    },
    {
        'tittle': '3. Công viên Văn Hóa Đầm Sen, Quận 11',
        'paragraph1': 'Nếu bạn có con nhỏ và phân vân không biết Halloween đi chơi ở đâu phù hợp với bé thì công viên Đầm Sen là một gợi ý hay ho đấy. Tới đây, bạn và bé có thể tham gia các trò chơi đa dạng, ăn uống tại khu ẩm thực với nhiều món ngon đa dạng, hấp dẫn. Nhiều khu vực được trang trí theo chủ đề Halloween rất hoành tráng cùng với các chương trình ca múa nhạc đặc sắc, xiếc, hóa trang đỉnh cao,... Bạn và gia đình có thể chụp ảnh và trải qua một mùa Halloween đầy kỷ niệm đáng nhớ. ',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-4.jpg',
        'paragraph2': ''
    },
    {
        'tittle': '4. Crescent Mall, Quận 7',
        'paragraph1': 'Một địa điểm tiếp theo rất được lòng các em nhỏ vào ngày lễ Halloween chính là Crescent Mall quận 7. Nơi đây sẽ tổ chức rất nhiều hoạt động thú vị đậm chất Halloween như chương trình văn nghệ, gameshow với nhiều phần quà hấp dẫn. Bạn cũng có thể ghé các gian hàng và mua những bộ trang phục, phụ kiện để hóa trang thành ma quái tại Crescent Mall. ',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-5.jpg',
        'paragraph2': ''
    },
    {
        'tittle': '5. Khu đô thị Phú Mỹ Hưng, Quận 7',
        'paragraph1': 'Một trong những khu vực hấp dẫn nhiều bạn trẻ đến vui chơi dịp lễ Halloween chính là khu đô thị Phú Mỹ Hưng. Nơi đây có rất nhiều hoạt động thú vị như vẽ mặt nạ, lễ đớp táo,... Bạn có thể hóa trang bằng các đạo cụ đầu lâu, bộ xương di động để hòa mình vào không khí lễ hội tại đây nhé!',
        'image': '',
        'paragraph2': ''
    },
    {
        'tittle': '6. Công viên Lê Thị Riêng, Quận 10',
        'paragraph1': 'Không gian thoáng đãng, rộng rãi cùng những khu vực được trang trí tỉ mẩn cho việc “sống ảo” là những gì bạn sẽ có thể mong đợi tại công viên Lê Thị Riêng. Không những thế, công viên còn có nhiều chương trình Halloween đặc sắc, các tiết mục hấp dẫn để bạn vui chơi đêm hội ma quỷ này. Công viên nằm ngay trên đường Cách mạng Tháng 8 nên bạn sẽ dễ dàng đi đến.Bên cạnh hoạt động hóa tráng, bạn còn được trải nghiệm ẩm thực đường phố và chơi các trò chơi Halloween. Không cần phải đau đầu Halloween đi chơi ở đâu nữa nhé!',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-6.jpg',
        'paragraph2': ''
    },
    {
        'tittle': '7. Chuỗi trung tâm thương mại Aeon Mall, Quận Bình Tân, Tân Phú',
        'paragraph1': 'Aeon Mall là chuỗi trung tâm thương mại - siêu thị Nhật Bản không còn xa lạ gì với tất cả mọi người. Vào các dịp lễ như Halloween, Aeon Mall đều tổ chức nhiều hoạt động theo chủ đề rất đặc sắc. Là 1 trong những địa điểm trang trí Halloween ở Sài Gòn đẹp nhất, Aeon mang đến cho bạn không gian vui chơi huyền bí với ngôi làng bí ngô thú vị. Ánh sáng đẹp, không gian rộng biến Aeon Mall thành “thánh địa” cho các tín đồ sống ảo. ',
        'image': '',
        'paragraph2': ''
    },
    {
        'tittle': '8. Khu du lịch Văn Thánh, Quận Bình Thạnh',
        'paragraph1': 'Tọa lạc tại phường 25, quận Bình Thạnh, khu du lịch Văn Thánh là địa điểm đi chơi Halloween thường niên cực kỳ hấp dẫn đối với du khách. Lễ hội thường sẽ kéo dài trong 2 ngày từ 30/10 đến hết 31/10 với nhiều hoạt động đặc sắc như biểu diễn xiếc, ca nhạc, múa lửa… Bên cạnh tiệc hóa trang, bạn còn được thưởng thức hàng chục món ăn mang đậm phong cách ma quái. Đây không chỉ là địa điểm vui chơi hấp dẫn, mà còn là background lý tưởng cho những bạn yêu thích chụp ảnh.',
        'image': '',
        'paragraph2': ''
    },
    {
        'tittle': '9. Hard Rock Cafe, Quận 1',
        'paragraph1': 'Hàng năm, cứ đến dịp Halloween, toàn bộ nhà hàng Hard Rock Café sẽ được trang hoàng thành một ngôi nhà ma bí ẩn. Và khách hàng chính là chủ nhân thật sự của đêm tiệc đầy màu sắc ma mị, huyền bí này. Cả không gian ngập trong không khí Halloween với lễ hội hoá trang, các trò chơi hấp dẫn và phần nhạc sống “hard rock” do ban nhạc nước ngoài hoặc trong nước biểu diễn. ',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-8.jpg',
        'paragraph2': 'Với những người yêu nhạc Rock và đang muốn tìm một không gian sôi động cho bạn “bùng cháy” và bung xõa cá tính thì Hard Rock Coffee thật sự là một điểm chơi Halloween hoàn hảo. Đặc biệt, nếu bạn là con ma đáng sợ, ghê rợn nhất sẽ được miễn phí và còn nhận được phần quà hấp dẫn đấy!'
    },
    {
        'tittle': '10. Khách sạn Nikko Sài Gòn, Quận 1',
        'paragraph1': 'Với những “người hâm mộ” Buffet ở Sài Gòn thì cái tên Nikko Hotel Saigon không còn xa lạ. Đây là nơi sở hữu 1 trong những buffet ngon nhất Sài Thành. Vào đêm Halloween năm nay, khách sạn sẽ tổ chức một bữa tiệc mang tên Khu Vườn Ma Quái tại Nikko Garden. Đây là một Lễ Hội Hóa Trang vô cùng hoành tráng, khung cảnh mới mẻ với những thức uống lạ lẫm, món tráng miệng đậm chất Halloween.  Đặc biệt nhất chính là thực đơn nướng BBQ thơm lừng nghi ngút khói khiến các “con ma” phải ứa nước miếng. Hãy nhớ hóa trang thật ấn tượng để đoạt giải “Người Nổi Bật Nhất” nhé!',
        'image': '',
        'paragraph2': ''
    },
    {
        'tittle': '11. Cung văn hóa thiếu nhi quận Phú Nhuận',
        'paragraph1': 'Một địa điểm thích hợp cho các bạn trẻ đam mê cosplay chính là Cung văn hóa thiếu nhi tại Phú Nhuận. Đây là nơi các bạn có thể giao lưu, kết nối và tha hồ thể hiện cá tính của mình thông qua việc cosplay thành những nhân vật trong truyện tranh, hoạt hình, phim ảnh,... Nếu vẫn còn lăn tăn Halloween đi đâu chơi ở Sài Gòn thì bạn có thể đến ngay Cung văn hóa Phú Nhuận nhé!',
        'image': '',
        'paragraph2': ''
    },
    {
        'tittle': '12. Chợ phiên',
        'paragraph1': 'Chốt lại danh sách Halloween đi chơi ở đâu TPHCM này chính là một địa điểm nhộn nhịp, vô cùng mới lạ chính là các chợ phiên Ba Tư. Tại đây, bạn sẽ tìm thấy vô số các mặt hàng phục vụ lễ hội và vô vàn những món ăn ngon, đậm chất Halloween. Hóa trang một chút, đi dạo cùng người yêu hoặc bạn bè, nhâm nhi đồ ăn ngon, mua vài thứ giá “mềm” cũng quá đủ cho dịp Halloween này phải không nào!',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-7.jpg',
        'paragraph2': ''
    }
]
let ContentList2 = [
    {
        'tittle': '1. Phố Hàng Mã',
        'paragraph1': 'Đối với dân Hà thành, nhắc tới địa điểm vui chơi Halloween thì hẳn phố Hàng Mã sẽ hiện lên đầu tiên. Không chỉ nổi tiếng và đông đúc vào lễ Trung Thu, đây còn là nơi tổ chức Halloween thường niên của con dân đất thủ đô. Các bạn trẻ thường đến đây mua sắm, chụp hình sống ảo hay đơn giản chỉ là để hòa vào không khí Halloween khó bắt gặp ở nơi khác.',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-10.jpg',
        'paragraph2': ''
    },
    {
        'tittle': '2. Công viên nước Hồ Tây – Điểm đến lý tưởng dịp Halloween',
        'paragraph1': 'Thêm một địa điểm dành cho những ai chưa biết Halloween đi đâu chơi ở Hà Nội chính là công viên nước Hồ Tây. Vào ngày 31/10, công viên Hồ Tây thường tổ chức nhiều hoạt động, vui chơi thú vị như: xem bài tarot, bói henna… Đặc biệt, bạn sẽ được tham gia chương trình “Có hẹn với thây ma”, chương trình lễ hội hóa trang kết hợp với dạ tiệc âm nhạc rất đặc sắc. Một đêm chơi vui, ăn uống thỏa thuê, mua sắm các mặt hàng độc đáo sẽ đem đến cho bạn những khoảnh khắc khó quên.',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-9.jpg',
        'paragraph2': ''
    },
    {
        'tittle': '3. Ngôi nhà ma Aeon mall – Điểm đi chơi Halloween hấp dẫn ở Hà Nội',
        'paragraph1': 'Tiếp theo danh sách “Halloween đi chơi ở đâu” chính là Ngôi nhà ma Aeon mall “hot rần rần” với nhiều bạn trẻ ưa mạo hiểm. Ngôi nhà ma nằm trong trung tâm thương mại Aeon mall được xây dựng dựa trên câu chuyện nữ sinh Nhật Bản rùng rợn. Ngôi nhà ma này do chính các nhà sản xuất Nhật Bản lên kế hoạch và dàn dựng nên sẽ rất kinh dị. ',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-11.jpg',
        'paragraph2': 'Vừa bước chân vào nhà ma, bạn sẽ trải qua cảm giác lạnh gáy bởi không gian lạnh lẽo hòa trong tiếng khóc đáng sợ ma quái. Thỉnh thoảng có những xác chết bất ngờ bật dậy hay những con quỷ lởn vởn trên đầu,... Với giá vé khoảng 80k, đây sẽ là một điểm đến hoàn hảo cho dịp lễ Halloween ở Hà Nội. Hãy cùng người yêu hoặc hội bạn thân thử thôi nào!'
    },
    {
        'tittle': '4. Phố đi bộ Hồ Gươm',
        'paragraph1': 'Địa điểm đi chơi Halloween ở Hà Nội tiếp theo Vietnam Booking giới thiệu đến bạn có lẽ khá quen thuộc. Đó là Phố đi bộ Hồ Gươm. Thông thường, vào cuối tuần, phố đi bộ cũng đã nhộn nhịp với nhiều hoạt động thú vị. Song, vào dịp lễ Halloween thì nơi đây càng thêm phần náo nhiệt bởi có rất nhiều người nước ngoài sẽ đổ ra đường, hóa trang rất ấn tượng. Hãy đến đây, hòa cùng dòng người “ma quái” này nhé!',
        'image': '',
        'paragraph2': ''
    },
    {
        'tittle': '5. Các khu trung tâm thương mại',
        'paragraph1': 'Đa phần các trung tâm thương mại lớn tại Hà Nội đều sẽ trang trí, dựng Nhà Ma theo chủ đề Halloween. Bạn có thể đến xem phim kinh dị, ăn uống và chụp ảnh check in. Trong các khu trung tâm thương mại, Khu đô thị Royal City  là cái tên nổi bật nhất. Bạn có thể đến đây để tham gia lễ hội hóa trang Halloween huyền bí.',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-12.jpg',
        'paragraph2': ''
    },
    {
        'tittle': '6. Công viên Thống Nhất',
        'paragraph1': 'Với những ai đang vắt óc suy nghĩ Halloween đi đâu chơi ở Hà Nội thì hãy đến ngay công viên Thống Nhất. Đây là nơi tổ chức Halloween với quy mô hoành tráng nhất nhì thủ đô. Bạn sẽ được thử thách độ can đảm của bản thân với những pha “hù dọa” kinh hoàng hay sự tấn công của đàn zombie rùng rợn. Chỉ với 100k, bạn sẽ được dấn thân vào một bối cảnh kinh dị, nhà gương ma quái, thưởng thức 1 món thức ăn và 1 vại bia Đức miễn phí,... Thật hấp dẫn phải không nào!',
        'image': '',
        'paragraph2': ''
    },
    {
        'tittle': '7. Công viên Yên Sở',
        'paragraph1': 'Tương tự công viên Thống Nhất, công viên Yên sở cũng là một địa điểm thích hợp cho những bạn chưa biết Halloween đi chơi ở đâu. Bên cạnh những màn hóa trang rùng rợn, công viên còn có lễ hội âm nhạc điện tử với sự xuất hiện của nhiều ca sĩ và DJ nổi tiếng. Bạn có thể khám phá những tiết mục kinh dị và chương trình âm nhạc hoành tráng.',
        'image': 'https://www.vietnambooking.com/wp-content/uploads/2020/10/halloween-di-choi-o-dau-13.jpg',
        'paragraph2': ''
    }
]




for (let Content1 of ContentList1) {
    content1.innerHTML += `<div id="content_box" class="content_box">
    <h3>${Content1.tittle}</h3>
    <p>${Content1.paragraph1}</p>
    <img src="${Content1.image}" alt="">
    <p>${Content1.paragraph2}</p>
</div>`;
}

for (let Content2 of ContentList2) {
    content2.innerHTML += `<div id="content_box" class="content_box">
    <h3>${Content2.tittle}</h3>
    <p>${Content2.paragraph1}</p>
    <img src="${Content2.image}" alt="">
    <p>${Content2.paragraph2}</p>
</div>`;
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