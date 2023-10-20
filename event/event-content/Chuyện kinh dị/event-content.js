let contents = document.getElementById('content')

let ContentList = [
    {
        'tittle': 'Truyện Số 1 Cho Đêm Halloween Đầy Sợ Hãi',
        'image': '',
        'paragraph': ['Anh ta thường đi đến tiệm cơm này để ăn, món ăn ở đây rất ngon, chỉ có hơi lạt thôi."Anh ơi, có cần thêm chút muối không?" Ông chủ tiệm lần nào cũng hỏi anh ta một cách thân thiện. Mà lần nào anh ta cũng cần, hôm nay anh ta kinh ngạc khi nhìn thấy cửa tiệm bị niêm phong."Ông chủ tiệm này là một tên bệnh tâm thần!" Người đi đường truyền tai nhau: "Vừa nãy bị người của bệnh viện tâm thần bắt đi rồi.". "Thật ra ông ta cũng rất đáng thương nha! Lại đem tro cốt biến thành muối bỏ vào món ăn" Người đi đường thở dài.']
    },
    {
        'tittle': ['Truyện Số 2, Đừng “Đọc” Vào Nửa Đêm Halloween'],
        'image': [''],
        'paragraph': ['Vào lúc 11:00h tối, có một anh chàng chạc tuổi 20 đứng giữa một cánh đồng trống để đón xe buýt về thành phố. Anh ta đứng mãi mà chẳng thấy một chiếc xe nào chạy ngang. Đến đúng 12:00h đêm có 1 chiếc xe chạy đến, anh ta vội quắc chiếc xe vào xin được đi nhờ vào thành phố. Anh ta leo lên xe và ngủ thiếp đi vì mệt mỏi. Trời mưa rất to và một tiếng sét đánh xuống nghe chói tai đã làm cho anh chàng tỉnh giấc. Anh ta đã mất hồn khi không nhìn thấy tài xế lái xe mà xe vẫn chạy.']
    },
    {
        'tittle': ['Truyện Ma Halloween Số 3. Nếu Sợ Đừng Đọc Nhé'],
        'image': [''],
        'paragraph': ['Kinh hoàng đêm lễ hội', 'Gần 12h đêm, đường phố vắng tanh, hai chị em Hoa chuẩn bị tắt điện đi ngủ thì có tiếng gõ cửa. Một anh trông rất thư sinh, đeo kính cận, xin phép được vào phòng có chút việc. Thấy người tử tế, ăn nói nhã nhặn lại cũng là sinh viên xóm bên cạnh nên hai chị em vui vẻ đồng ý cho vào.', 'Mượn cái mâm, xếp ít hoa quả lên đấy, anh lôi trong túi ra tấm ảnh thờ của một người còn rất trẻ, hai chị em hoảng hồn. Giọng buồn buồn, vị khách lạ lên tiếng: “Hai em đừng sợ, đây là anh Dũng, ngày xưa ở cùng phòng này với anh, nhưng vì bị người yêu bỏ nên treo cổ tự tử ở đây. Hôm nay cũng là giỗ đầu của anh ấy, anh muốn thắp nén hương gọi là chút lòng thành”.', 'Chưa nói dứt lời, vị khách đã châm hương, vừa khóc vừa khấn nghe rất thảm thiết. Sau đó vị khách cáo lui: “Làm phiền hai em một tí vậy thôi, ngày xưa nó mới chết, tối nào cũng về nằm cạnh anh khiến anh sợ quá mà phải chuyển chỗ đấy”. Không để hai chị em kịp phản ứng, vị khách đã mất hút vào bóng tối.', 'Không ai bảo ai, cả hai cùng hét thất thanh vì sợ. Phòng hàng xóm chạy sang, cũng phát hoảng khi thấy mâm ảnh thờ chềnh ềnh giữa nhà. Hai chị em sang hàng xóm ngủ nhờ và hôm sau vĩnh biệt luôn căn phòng trọ ấy.', 'Cũng tại một xóm trọ của SV, Lan ra đánh răng để chuẩn bị đi ngủ. Vừa bật điện nhà vệ sinh cô đã hét thất thanh. Mọi người chạy ra: “Có ma trong buồng tắm, có một cái đầu Tìm mãi chẳng thấy gì, mọi người quay vào: “Chắc tại xem phim kinh dị nhiều quá nên giờ nhìn đâu cũng thấy ma”.', 'Chưa đầy 30 phút sau, một tiếng hét nữa lại vang lên từ buồng tắm. Một chị đi làm ca đêm về muộn, mô tả lại thì đúng là thứ mà Lan đã nhìn thấy. Lúc này hai chị em quá sợ, chỉ có những người trong xóm là không ai tin: “Nếu có thì nó còn ở đấy chứ chạy đi đâu được”.', 'Thế rồi ma xuất hiện khắp nơi, ai nấy đều hoảng loạn, chỉ có Dương là rõ mọi chuyện hơn ai hết vì chính cậu là chủ nhân của trò đùa này.']
    },
    {
        'tittle': ['Truyện Ma Halloween Số 4: Vui Buồn Chuyện Ngày Hội Ma'],
        'image': [''],
        'paragraph': ['Vườn Bách Thảo, mới hơn 9h tối, mọi người bỗng giật mình vì một cô gái vừa la hét vừa chạy thục mạng như thể bị ma đuổi. Người yêu càng chạy theo sau, cô càng chạy nhanh và càng la hét. Đến khi chàng trai không đuổi theo nữa thì cô cũng đã ra khỏi Vườn Bách Thảo.', 'Mọi người xúm lại hỏi có chuyện gì thì chàng trai bỗng phì cười: “Cô ấy bảo em kể chuyện ma cho nghe. Em kể bao nhiêu chuyện mà cô ấy vẫn không sợ, lại cứ đòi em phải kể cái gì thật rùng rợn”.', 'Em đành chiều lòng, bằng giọng trầm nhất và vô cảm nhất, cùng khuôn mặt đờ trắng bệch như xác chết em cất tiếng: “Lúc chiều, nếu không bị tai nạn chết dưới đường 5 Hải Phòng thì anh đã đến với em sớm hơn. Hiện nay xác của anh đang được đắp một cái chiếu bên lề đường, sau đó em mở trừng hai mắt nhìn cô ấy. Và kết quả thì anh chị đã được chứng kiến”.', 'Chị em Hoa đang sống yên ổn trong xóm bỗng giờ đây phải chuyển khỏi xóm cùng nỗi kinh hoàng. Dẫu biết rằng có thể đó chỉ là sự đùa ác ý của một ai đó nhưng hai chị em vẫn sợ không dám ở trong nhà một mình. Phải đi ở nhờ dù nhà cũng có phòng, mà bây giờ đi thuê được một cái phòng ưng ý đâu phải dễ.', 'Cái xóm trọ “đầu lâu” lẽ ra rất vui vẻ, giờ đây vô cùng hoảng loạng vì sự xuất hiện liên tục của một bóng ma. Có lẽ nó còn “hoành hành” ngang dọc nếu không có một tai nạn xảy ra. Hôm đó, Dương quyết định cho ma “nhập” vào nhà một cô bé mới chuyển đến. Đang lúi húi ngồi học, chủ nhân bỗng nhìn lên và ngất xỉu khi thấy một chiếc đầu lâu nham nhở tóc ngay trên bàn gần cửa sổ.', 'Đứng ngoài chờ mãi mà không thấy tiếng hét, Dương liếc qua khe cửa rồi thất thanh: “Anh chị ơi, cứu! cứu!”. Cô bé có tiền sử bệnh tim ngã vật, hai mắt trắng dã, chân tay co giật liên hồi. Mọi người ai cũng lo cuống cuồng, người chườm dầu, người xoa bóp, người gọi xe cấp cứu, chỉ có Dương là lặng lẽ rút lui cùng chiếc đầu lâu tội lỗi.', 'Halloween có ý nghĩa riêng của nó, nhưng không nên là dịp để ta gây ra vết sẹo mang tên sợ hãi cho những người xung quanh. Hãy làm gì cho một ngày Halloween đáng nhớ, đừng biến nó thành trò khủng bố tinh thần.']
    },
    {
        'tittle': ['Truyện Ma Halloweensố 5: Tiền Ai Làm Rơi Kìa?'],
        'image': [''],
        'paragraph': ['Cô gái nắm tay bạn trai đi dạo trên đường. "Tiền ai làm rơi kìa?"Cô gái nói. Anh bạn trai nhặt lên xem một cách tỉ mỉ, đây là tờ đô-la âm phủ mà. Anh ta liền quăng đi, gió thổi tờ tiền rơi xuống giữa đường. Cô gái nói:"Sao lại quăng đi? Rõ ràng là 100 ngàn thật mà"Cô gái vội vàng chạy ra giữa đường, nhặt tờ tiền lên vẫy vẫy về phía bạn trai, vui vẻ nói: "Anh xem, em đã nói là tiền thật rồi mà!" Một chiếc xe từ đâu lao đến...... Trong vũng máu, trong tay của cô gái vẫn đang nắm tờ đô-la âm phủ đã nhuốm đầy màu đỏ của máu tươi.']
    },
    {
        'tittle': ['Truyện Ma Halloweensố 6: Cô Gái!'],
        'image': [''],
        'paragraph': ['Cô gái nắm tay bạn trai đi dạo trên đường. "Tiền ai làm rơi kìa?"Cô gái nói. Anh bạn trai nhặt lên xem một cách tỉ mỉ, đây là tờ đô-la âm phủ mà. Anh ta liền quăng đi, gió thổi tờ tiền rơi xuống giữa đường. Cô gái nói:"Sao lại quăng đi? Rõ ràng là 100 ngàn thật mà"Cô gái vội vàng chạy ra giữa đường, nhặt tờ tiền lên vẫy vẫy về phía bạn trai, vui vẻ nói: "Anh xem, em đã nói là tiền thật rồi mà”. Một chiếc xe từ đâu lao đến...... Trong vũng máu, trong tay của cô gái vẫn đang nắm tờ đô-la âm phủ đã nhuốm đầy màu đỏ của máu tươi.']
    },
    {
        'tittle': ['Truyện Ma Halloween Số 7: Bắt Xe Đêm'],
        'image': [''],
        'paragraph': ['Nửa đêm, trên đường chỉ có mình tôi đợi... xe, lúc này ở đằng xa có một chiếc tắc-xi chầm chậm dừng lại ngay bên cạnh tôi,tài xế mở cửa sổ xe hỏi tôi:"3 người các cô đi đâu?" Tôi vừa nghe xong liền vội vàng mở cửa xe, lao vào, kêu tài xế nhanh chóng lái xe đi, tôi sẽ trả gấp đôi tiền. Sau khi chiếc xe vội vàng chạy đi được một đoạn, hơi thở cùng nhịp tim của tôi cũng tạm ổn định lại, lúc này, tài xế đem cái đầu xoay đúng 180 độ đối diện với tôi hỏi: "Giờ thì cô đi đâu đây?"']
    },
    {
        'tittle': ['Truyện Ma Halloween Số 8: Giặt Quần Áo!'],
        'image': [''],
        'paragraph': ['Tiểu Linh nghe nói gần đây nửa đêm trong nhà vệ sinh của ký túc xá có âm thanh quái dị của con gái, nghe thê lương vô cùng. Tối nay, nửa đêm cô thức dậy đi vào nhà vệ sinh, trên đường đi nhìn thấy một cái thau, trong thau có để một chiếc áo, nước trong thau đều mà một màu đỏ như máu. Sau đó liền nghe một tiếng thét... "Chất lượng quần áo bây giờ sao lại kém như vậy, ra màu ra đến nỗi này luôn!"', '']
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
    if (Content.image == '') {
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