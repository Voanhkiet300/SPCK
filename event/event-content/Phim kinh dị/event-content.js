let contents = document.getElementById('content')

let ContentList = [
    {
        'tittle': ['Chó ma Frankenweenie (Frankenweenie)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/YPHSXhns72U?si=oLaTYzmGDsAVmm0p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/frankenweeniereview-169-17204237.jpg'],
        'paragraph': ['Bộ phim hoạt hình này được chuyển thể từ phim ngắn người thật đóng của Burton. "Frankenweenie" kể về Victor Frankenstein, cậu bé có bạn thân là chú chó Sparky. Khi Sparky bất ngờ chết, Victor vì không thể chấp nhận điều này nên đã sử dụng tất cả sức mạnh, khả năng và kiến ​​thức khoa học của mình để khiến nó sống lại. Khi Sparky hồi sinh,Victor rất vui, nhưng tất cả mọi người đều coi Sparky là quái vật, vì nó rất khác thường.',
            'Halloween mang nhiều ý nghĩa, bao gồm cả cơ hội tưởng nhớ những người đã qua đời. "Frankenweenie" dạy trẻ em ý nghĩa của việc đối phó với sự mất mát. Mặc dù bộ phim có những sai sót, nhưng tổng thể nó là bộ phim kinh dị cổ điển, thể hiện khả năng kết hợp ánh sáng và bóng tối đỉnh cao của Burton.']
    },
    {
        'tittle': ['Người tay kéo (Edward Scissorhands)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/sEqZ2QWkqO0?si=vlsnK8dRtDJq9X3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/145f2e25-5326-4eae-b99e-fda5d0a59c74-scissorhands-17230413.jfif'],
        'paragraph': ['Đây là một trong những bộ phim hay nhất và được yêu thích nhất của Burton. "Edward Scissorhands" là câu chuyện tình siêu nhiên lãng mạn nhưng cũng đầy bi thảm. Trong đó, Johnny Depp vào vai Edward, cậu bé được nhà phát minh Vincent Price ngọt ngào nhưng lập dị chế tạo. Vincent Price chết trước khi có cơ hội hoàn thành tác phẩm của mình, để lại cậu bé với đôi tay cầm kéo và không còn khả năng tự chống đỡ. Khi Edward phiêu lưu ra thế giới ngoại ô, anh đã yêu Kim, con gái của gia đình nhận nuôi mình.',
            'Edward bắt đầu tìm cách hòa nhập hơn với thế giới khi trở thành bạn Kim. Anh sử dụng những kỹ năng độc đáo của mình để tạo kiểu cho cây cối. Dần dần, anh được cộng đồng chấp nhận, thế nhưng tình yêu của Edward và Kim thì không. Cặp đôi đã phải chiến đấu để thoát khỏi sự phán xét của người ngoài.',
            '"Edward Scissorhands" nêu bật tình yêu của Tim Burton đối với những người bị ruồng bỏ. Sử dụng lối thẩm mỹ của nghệ thuật Gothic (kiến trúc Gothic được nhận biết phổ biến nhất bằng việc sử dụng các mái vòm vuốt nhọn), Burton đã tạo ra một bối cảnh Halloween rùng rợn nhưng vẫn thân thiện với gia đình.']
    },
    {
        'tittle': ['Kỵ sĩ không đầu (Sleepy Hollow)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/6RsKwn_Je1k?si=aHdZotGPWNqPp5eV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/ed8186eafa66b0f57303288220a53d7a8071066d303baed98bb936e8e51ecc89sx1080-17270074.jpg'],
        'paragraph': ['Có lẽ đây là bộ phim đáng sợ nhất trong danh sách này. Kỵ sĩ không đầu là câu chuyện Halloween kinh điển của nhà văn, nhà sử học Washington Irving. Ichabod Crane (Johnny Depp đóng) là một chàng cảnh sát ngoan cố được cử đến ngôi làng "Sleepy Hollow", nơi diễn ra hàng loạt vụ chặt đầu. ',
            'Làng Sleepy Hollow bị ám ảnh bởi truyền thuyết về kỵ sĩ không đầu (Christopher Walken đóng), một hồn ma trong chiến tranh Khi chiếc đầu của người kỵ sĩ bị đánh cắp khỏi ngôi mộ, anh ta trở lại từ cõi chết thu thập những chiếc đầu của cư dân Sleepy Hollow để đầu của mình được trả lại. Ichabod phải làm việc để xác định ai là người đứng đầu và làm thế nào để cứu thị trấn. Trong quá trình điều tra, anh phải lòng Katrina Van Tassel (Christina Ricci đóng). ',
            'Tuy có một số cảnh bạo lực và máu me đáng sợ, "Sleepy Hollow" vẫn duy trì thẩm mỹ kinh dị đẹp như mơ của Burton. ']
    },
    {
        'tittle': ['Thợ cắt tóc quỷ phố Fleet (Sweeney Todd)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/acHBq_oZm-8?si=a70-nd6x8vCZYeEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/sweenettoddlovewit02-17285540.jpg'],
        'paragraph': ['Là bộ phim chuyển thể từ vở nhạc kịch của Stephen Sondheim và Hugh Wheeler, "Sweeney Todd" do diễn viên Johnny Depp thủ vai chính. Bộ phim theo chân Sweeney Todd, từng được biết đến với cái tên Benjamin Barker, người thợ cắt tóc hợp tác kinh doanh với một thợ làm bánh, bà Lovett (Helena Bonham Carter đóng). ',
            'Trong kiếp trước, Barker là người đàn ông có gia đình hạnh phúc với một cô con gái, Johanna (Jayne Wisener đóng). Một ngày, anh bị Thẩm phán Turpin (Alan Rickman đóng) buộc tội một cách gian dối nên phải ngồi tù. Sau khi ra tù, Todd mở tiệm cắt tóc và bắt đầu giết khách hàng của mình. Bà Lovett biến các nạn nhân thành những chiếc bánh nướng để bán, và Todd luôn tìm kiếm cơ hội trả thù thẩm phán.',
            'Bộ phim có nhiều cảnh máu me và đáng sợ. Mặc dù bộ phim nhận được nhiều đánh giá trái chiều, nhưng bầu không khí rùng rợn của nó khiến nó được xem nhiều trong dịp Halloween']
    },
    {
        'tittle': ['Sao Hỏa tấn công (Mars Attacks!)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/DqtjHWlM4lQ?si=iaN_mlf38TKczcI5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/l-intro-1632752169-17305240.jpg'],
        'paragraph': ['Người ngoài hành tinh có thể không phải là điều mà hầu hết mọi người nghĩ đến trong ngày Halloween, nhưng Tim Burton thì khác. Người ngoài hành tinh trong vòng quay của Tim Burton rất vui nhộn nhưng cũng rất đáng sợ. "Mars Attacks!" là bộ phim khoa học viễn tưởng kinh điển của Hollywood, theo chân một nhóm người cố gắng sống sót sau một cuộc xâm lược Trái đất của người sao Hỏa.', 'Khi chính phủ nhìn thấy loạt đĩa bay đang tiến về hành tinh của mình, một nhà khoa học (Pierce Brosnan) đã thuyết phục họ chào đón những người sao Hoả này, và rằng những người sao Hỏa cũng văn minh và hòa bình. Thế nhưng, đây lại là sai lầm chết người. Khi hai hành tinh xảy ra chiến tranh, bộ phim theo chân các nhân vật cố gắng sống sót trong sự hỗn loạn và tàn khốc của các cuộc tấn công từ người sao Hỏa, bao gồm cả Tổng thống (Jack Nicholson). "Mars Attacks!" thực sự hài hước và đáng sợ cho những ai thích sự kinh dị trong lễ Halloween.']
    },
    {
        'tittle': ['Cô dâu xác chết (Corpse Bride)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/AGACeWVdFqo?si=vRmKbThyc0At5YmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/81ebre0jbvlacsl1500-17332246.jpg'],
        'paragraph': ['Kế thừa tinh thần của “Đêm kinh hoàng trước Giáng sinh" (The Nightmare Before Christmas), "Corpse Bride" sử dụng phong cách hoạt hình stop-motion (ngừng chuyển động) tương tự để kể về câu chuyện tình yêu đầy ám ảnh. Victor (Johnny Depp) sẽ kết hôn với Victoria (Emily Watson) trong một cuộc hôn nhân sắp đặt. Không hề biết mặt cô dâu, Victor đi đến rừng để thực hành lời thề của mình và vô tình đánh thức cô dâu xác sống (Helena Bonham Carter). Và ở đây, anh kết hôn với cô.', 'Lúc đầu, Victor bị cô dâu xác sống xa lánh, nhưng khi quen cô, anh thấy có rất nhiều điều để yêu. Như trong nhiều câu chuyện khác của Tim Burton, Victor thấy mình bị giằng xé giữa cô dâu bình thường Victoria và cô dâu xác sống đầy quyến rũ. "Corpse Bride" cũng có rất nhiều sinh vật bộ xương ma quái.', 'Đây là câu chuyện lãng mạn huyền bí, hoàn hảo cho những ai muốn có một bộ phim Halloween nhẹ nhàng nhưng ma quái.']
    },
    {
        'tittle': ['Ngôi nhà ma ám (Beetlejuice)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/ickbVzajrk0?si=SWk4DVw1SWxAP1ma" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/beetlejuice-17363793.jpg'],
        'paragraph': ['"Beetlejuice" được yêu thích đến nỗi nó đã được chuyển thể thành vở nhạc kịch ở sân khấu Broadway (New York, Mỹ) và có thể là bộ phim đậm chất Halloween nhất trong danh sách này. Barbara (Geena Davis đóng) và Adam (Alec Baldwin đóng) là cặp vợ chồng chết trẻ trong một vụ tai nạn xe hơi thảm khốc - nhưng đó mới chỉ là phần mở đầu của câu chuyện. Cặp vợ chồng không biết làm thế nào để siêu thoát. Bị ràng buộc với ngôi nhà cũ (mà họ đang ám ảnh), họ đã tìm cách đuổi gia đình mới chuyển đến. ', 'Nhờ sự giúp đỡ của Beetlejuice (Michael Keaton đóng), Barbara và Adam luôn tìm nhiều cách hù dọa đáng sợ hơn để chọc gia đình nọ. Nhưng khi trở nên thân thiết hơn với con gái gia đình đó, Lydia (Winona Ryder đóng), họ nhận ra rằng mình không muốn làm tổn thương hay xua đuổi những con người vô tội.', '"Beetlejuice" có rất nhiều cảnh sợ hãi nhưng cũng gây cười, là câu chuyện huyền bí ngọt ngào hoàn hảo cho đêm Halloween.']
    },
    {
        'tittle': ['Đêm kinh hoàng trước Giáng sinh (The Nightmare Before Christmas)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/wr6N_hZyBCk?si=C6W3gjs6Dgb-dMZ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/vans-x-the-nightmare-before-christmas-960x640-17412070.jpg'],
        'paragraph': ['Mặc dù Burton không làm đạo diễn "The Nightmare Before Christmas", bộ phim vẫn là một trong những tác phẩm nổi tiếng nhất của ông. Burton đưa ra ý tưởng và tham gia sâu vào quá trình sản xuất của bộ phim.', 'Theo chân vua của Thị trấn Halloween, "The Nightmare Before Christmas" là cuộc phiêu lưu thú vị của Jack Skellington (Chris Sarandon đóng), người buồn chán vì luôn trải qua cùng một kỳ nghỉ năm này qua năm khác. Một ngày nọ, Jack tình cờ phát hiện ra Thị trấn Giáng sinh, một nơi tràn ngập niềm vui và những món quà đối lập với Thị trấn Halloween ma quái. ', "Jack quyết định, anh muốn mang Thị trấn Giáng sinh vào Thị trấn Halloween, nhưng không hiểu điều gì làm cho ngày lễ trở nên đặc biệt. Khi Jack cố gắng tìm hiểu ý nghĩa của Giáng sinh, anh phát hiện ra mảnh ghép còn thiếu của cuộc đời mình có thể đã ở Thị trấn Halloween, nơi anh quen Sally (Catherine O'Hara đóng), người đã luôn yêu anh.", '"The Nightmare Before Christmas" là cuộc phiêu lưu thú vị và là cầu nối hoàn hảo cho gia đình giữa mùa Halloween và mùa Giáng sinh.']
    },
    {
        'tittle': ['Ngôi nhà của cô Peregrine dành cho những đứa trẻ kỳ dị'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/tV_IhWE4LP0?si=V_xtCO2G-DK_wQ_V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/miss-peregrine10-17460617.png'],
        'paragraph': ['Dựa trên tiểu thuyết của Ransom Riggs, "Ngôi nhà của cô Peregrine dành cho những đứa trẻ kỳ dị" là một trong những bộ phim thành công gần đây của Burton,là sự kết hợp giữa cảm giác kỳ quặc với sự thay đổi và óc thẩm mỹ rùng rợn của Burton.', 'Câu chuyện kể về Jake (Asa Butterfield đóng) có ông nội Abe (Terence Stamp đóng) chết trong hoàn cảnh rất bí ẩn. Trong khi gia đình của Jake cho rằng cái chết đó là bình thường, Jake nhớ lại những câu chuyện mà ông đã kể khi anh còn nhỏ, rằng có một ngôi nhà dành cho những đứa trẻ có khả năng đặc biệt. Và Jake quyết định đến Wales để tìm ra sự thật cho chính mình. ', 'Bộ phim có phần hơi khó hiểu, nhưng Burton đã thành công khi làm một bộ phim ma quái cho trẻ em và thanh thiếu niên với sự ly kỳ nhưng không quá đáng sợ,thích hợp cho ngày Halloween.']
    },
    {
        'tittle': ['Bóng tối (Dark Shadows)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/N6tVdffCr_M?si=Fl4Q6JdQc9kJbyHu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/images-3-17483193.jfif'],
        'paragraph': ['Là phiên bản làm lại của vở opera “Xà phòng ma cà rồng” kinh điển thập niên 70, "Dark Shadows" được cho là phim tệ nhất trong các phim của Burton. Tuy nhiên, nếu bạn yêu thích ma cà rồng và những bộ phim vui nhộn thì đây là sự lựa chọn hoàn hảo. ', 'Người bạn lâu năm và cộng tác viên của Burton, Johnny Depp, một lần nữa đóng vai tay chơi ma cà rồng Barnabas Collins. Ở đầu phim, Barnabas bị nguyền rủa bởi người yêu của mình, phù thủy Angelique (Eva Green đóng), người đã chôn sống anh. Hai thế kỷ sau đó, anh được siêu thoát. Khi Barnabas tỉnh dậy, anh phát hiện ngôi nhà thân yêu đang đổ nát và những hậu duệ còn lại của gia đình đang phải đối mặt với những vấn đề của riêng họ. Đây là một bộ phim truyền hình về gia đình ma cà rồng. ', '"Dark Shadows" là bộ phim nhẹ nhàng trong dịp Halloween này, đặc biệt nếu bạn yêu thích ma cà rồng.']
    },
    {
        'tittle': ['Người Dơi trở lại (Batman Returns)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/TlbtLfWvFbo?si=2cx9MH-o_2PLPUx3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/batman-returns-batman-tim-burton-penguin-joker-17505298.jpg'],
        'paragraph': ['Trong phần tiếp theo của những bom tấn siêu anh hùng, Bruce Wayne đối mặt với Penguin (Danny DeVito đóng) và Catwoman (Michelle Pfeiffer đóng) vào dịp lễ Giáng sinh. Mở đầu bộ phim là hình ảnh Penguin, một đứa trẻ mồ côi bị cha mẹ từ chối vì ngoại hình xấu xí. Penguin muốn biết mình đến từ đâu nhưng không có cách nào để làm điều đó ngoài việc phạm tội. Trong khi Penguin tranh giành sự tôn trọng, Batman cũng chiến đấu với Catwoman, vô tình phải lòng cô khi mặt nạ của họ bị bong ra. ', 'Bộ phim là sự lựa chọn hoàn hảo cho Halloween, mặc dù lấy bối cảnh vào Giáng sinh, giống như "The Nightmare Before Christmas".']
    },
    {
        'tittle': ['Kẻ bất tài (Ed Wood)'],
        'video': ['<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/CawVaHxWvnA?si=fExuG9QsCNAMviYJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'],
        'image': ['https://image.vtc.vn/resize/th/upload/2021/10/13/iyoaqr2xhjk21mbhzfsnhzo1y0c-18003884.jpg'],
        'paragraph': ['"Ed Wood" chắc chắn không phải là một trong những bộ phim đáng sợ nhất của Burton. Ttuy nhiên, nếu bạn thích xem phim của Tim Burton vì óc thẩm mỹ của ông, hoặc thích những bộ phim kinh dị đen trắng của thập niên 1950 thì "Ed Wood" là lựa chọn tuyệt vời. Bộ phim theo chân nam diễn viên Johnny Depp trong vai Ed Wood, người đã thực hiện "Kế hoạch 9 từ không gian bên ngoài" và được biết đến rộng rãi như một đạo diễn tồi nhất mọi thời đại. ', 'Tình bạn của Wood với ngôi sao "Dracula" nổi tiếng, Bela Lugosi là trung tâm của bộ phim. Mặc dù Wood và Lugosi được coi là trò cười cho các đồng nghiệp nhưng bộ phim đối xử với họ bằng sự đồng cảm và tôn trọng, điều này khiến "Ed Wood" trở thành bộ phim kinh điển. Diễn xuất của Martin Landau trong vai Lugosi là một điểm đặc biệt. Nhìn chung, nếu bạn đang tìm kiếm một bộ phim Halloween cổ điển thì "Ed Wood" là lựa chọn tuyệt vời.']
    }
]
let text = []
let index = 0;

function paragraph() {
    text = ``
    for (let i = 0; i < ContentList[index].paragraph.length; i++) {
        text += `<p>${ContentList[index].paragraph[i]}</p>`
    }
    return text
}





for (let Content of ContentList) {
    console.log(Content.paragraph.length);
    if (Content.paragraph.length == 2) {
        contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            ${Content.video}
            ${paragraph()}
            <img src="${Content.image}" alt="">
            </div>`
    } else if (Content.paragraph.length == 3) {
        contents.innerHTML += `<div id="content_box" class="content_box">
        <h3>${Content.tittle}</h3>
        ${Content.video}
        ${paragraph()}
        <img src="${Content.image}" alt="">
        </div>`
    } else if (Content.paragraph.length == 4) {
        contents.innerHTML += `<div id="content_box" class="content_box">
        <h3>${Content.tittle}</h3>
        ${Content.video}
        ${paragraph()}
        <img src="${Content.image}" alt="">
        </div>`
    } else {
        contents.innerHTML += `<div id="content_box" class="content_box">
            <h3>${Content.tittle}</h3>
            ${Content.video}
            ${paragraph()}
            <img src="${Content.image}" alt="">
            </div>`
    }
    index++
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