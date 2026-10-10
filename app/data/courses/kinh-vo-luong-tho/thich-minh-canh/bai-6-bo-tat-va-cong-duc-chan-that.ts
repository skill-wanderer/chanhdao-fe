import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section>
    <h2>CHƯƠNG HAI MƯƠI BẢY: CA TỤNG TÁN THÁN CÔNG ĐỨC CỦA PHẬT</h2>
    <p>
Phật bảo A-nan: Các vị bồ-tát ở cõi nước đó nương sức oai thần của đức Phật kia, trong khoảng bữa ăn, qua đến vô lượng vô biên tịnh độ ở khắp mười phương cúng dường chư Phật. Các món cúng dường chư Phật, bồ-tát như là hương hoa, phướn lọng vi diệu, vừa nghĩ liền có, quý đẹp lạ thường, thế tục không có. Hoa rải trong không hiệp lại thành một, tất cả hoa ấy khi rơi xuống dưới xếp thành vòng tròn rồi biến thành lọng trăm ngàn màu sắc, mỗi sắc mỗi hương, hương thơm xông khắp. Lọng hoa nhỏ nhất cũng mười do-tuần, rồi lớn dần lên cho đến đầy cả ba ngàn thế giới, cứ theo thứ tự trước mất sau hiện. Nếu không hoa mới, lớp trước vẫn còn.

Rồị trong hư không cùng tấu âm nhạc, âm thanh vi diệu, ca tụng tán thán công đức của Phật. Ở trong khoảnh khắc, các bồ-tát ấy trở về nước mình, cũng tụ họp lại ở đại giảng đường, lắng nghe đức Phật Vô Lượng Thọ Quang giảng nói đại pháp, tất cả vui vẻ, tâm đạt được đạo. Ngay trong khi đó, gió mát thổi vào các cây bảy báu phát ra năm loại âm thanh vi diệu, vô lượng hoa đẹp bay ra bốn phía, tự nhiên cúng dường như thế không dứt. Tất cả chư thiên, mỗi người mang theo trăm ngàn hương hoa, vạn thứ âm nhạc cúng dường đức Phật và các đại chúng bồ-tát, thanh văn, lần lượt kéo đến hớn hở vui mừng. Đó đều là do uy lực gia trì từ sức bản nguyện của Phật Vô Lượng Thọ Quang cùng với công đức cúng dường chư Phật, căn lành tương tục không có khuyết giảm, khéo léo tu tập nhiếp thọ thành tựu mà được như thế.

    </p>
    <h2>CHƯƠNG HAI MƯƠI TÁM: THẦN THÔNG VÀ ÁNH SÁNG CỦA BỒ-TÁT</h2>
    <p>
Phật bảo A-nan: Các chúng bồ-tát trong cõi nước đó thấy suốt nghe thấu các việc quá khứ, hiện tại, vị lai ở khắp mười phương. Chư thiên, loài người, côn trùng tâm ý thiện ác thế nào, miệng muốn nói gì, khi nào giải thoát, chứng đạo vãng sanh, tất cả điều đó các bồ-tát ấy đều dự biết trước. Thanh văn nước đó thân có ánh sáng chiếu xa một tầm. Ánh sáng bồ-tát chiếu rọi rất xa một trăm do-tuần. Có hai bồ-tát tôn quý bậc nhất, oai thần ánh sáng của hai vị đó chiếu khắp ba ngàn đại thiên thế giới.

A-nan bạch Phật: "Hai vị bồ-tát danh hiệu là gì?"

Phật bảo A-nan: "Tên hai vị ấy là Quán Thế Âm và Đại Thế Chí. Cả hai vị này tu hạnh bồ-tát ở cõi Ta-bà, khi vãng sanh về cõi nước Cực Lạc thường hầu thân cận hai bên phải trái đức Phật Di-đà. Nếu hai vị đó muốn đến cõi khác ở khắp mười phương, thì tùy tâm đến. Nay hai vị ấy đang trụ cõi này làm lợi chúng sanh. Nếu có thiện nam, hoặc tín nữ nào ở tại thế gian bị nạn khổ gấp, chỉ cần xưng niệm bồ-tát Quán Âm thì được giải thoát."

    </p>
    <h2>CHƯƠNG HAI MƯƠI CHÍN: SỨC THỆ NGUYỆN RỘNG SÂU</h2>
    <p>
Lại nữa A-nan! Các vị bồ-tát ở cõi nước đó dù là hiện tại hay ở vị lai rốt ráo đều được nhất sanh bổ xứ. Chỉ trừ người nào có chí nguyện lớn đi vào sanh tử để độ chúng sanh, rống tiếng sư tử, mang giáp trụ dày, đội mũ Đại thừa, dùng sức công đức thệ nguyện rộng lớn để tự trang nghiêm. Tuy phải sanh vào đời ác năm trược, thị hiện cũng giống như một chúng sanh, đến khi thành Phật cũng không bao giờ rơi vào cõi ác. Dù sanh ở đâu, bồ-tát đều biết đời trước của mình.

Phật Vô Lượng Thọ muốn độ chúng sanh mười phương cõi nước, muốn cho chúng sanh sanh về nước kia, nên khiến cho họ chứng được niết-bàn, giáo hóa bồ-tát chứng được quả Phật. Khi đã thành Phật, tiếp tục chỉ dạy độ thoát chúng sanh. Lần lượt dạy dỗ, độ thoát như thế không thể tính kể. Thanh văn, bồ-tát, các loài chúng sanh ở khắp mười phương sanh về nước đó chứng được niết-bàn sẽ được thành Phật, số đó nhiều lắm không thể kể hết.

Cõi nước Phật đó thường hằng như một, không có tăng giảm. Vì sao như thế? Ví như biển cả là vua sông rạch, các dòng sông lớn đều chảy về biển, mà nước biển ấy nào có tăng giảm. Vô số nước Phật ở khắp mười phương, cõi Phật Di-đà rộng lớn trường cửu, sáng suốt đẹp đẽ, an lạc hơn cả. Có được như thế là bởi do Ngài lúc làm bồ-tát thệ nguyện cầu đạo, tích lũy công đức vô lượng vô biên. Phật A-di-đà bố thí ân đức khắp mười phương cõi, vô cùng sâu rộng nói không thể hết.

    </p>
    <h2>CHƯƠNG BA MƯƠI: SỰ TU TRÌ CỦA BỒ-TÁT</h2>
    <p>
Lại nữa A-nan! Tất cả bồ-tát ở cõi nước đó thảy đều đầy đủ thiền định trí huệ, thần thông oai đức, thông suốt rốt ráo bí tạng của Phật, điều phục các căn, thân tâm nhu nhuyến, thâm nhập chánh huệ, không còn hoặc lậu, nương theo hạnh Phật tu bảy giác chi, tám phần thánh đạo. Thấu suốt năm nhãn, chân đế tục đế, nhục nhãn phân biệt, thiên nhãn thông đạt, pháp nhãn trong sạch, huệ nhãn thấy chân, Phật nhãn đầy đủ, giác ngộ pháp tánh. Có đủ biện tài và sức tổng trì tự tại vô ngại. Khéo thấu suốt được vô biên phương tiện, nói lời thành thật nghĩa lý sâu xa độ thoát chúng sanh.

Truyền bá chánh pháp vô tướng vô vi, không buộc không thoát, không có phân biệt, xa lìa điên đảo. Đối cảnh thọ dụng, các bồ-tát đó đều không dính mắc, đi khắp nước Phật không ưa không chán, không có mong cầu hay tưởng mong cầu, cũng không có tưởng ta người oán thù. Tại vì sao thế? Các bồ-tát đó đối với chúng sanh có lòng từ bi, thích làm lợi ích, xa lìa tất cả chấp trước điên đảo, thành tựu vô lượng công đức trang nghiêm.

Các bồ-tát đó dùng huệ vô ngại hiểu pháp như như, biết rõ tập, diệt; phương tiện âm thanh, nhưng không ưa thích ngôn ngữ thế tục, ham thích chánh luận, biết được tất cả pháp đều vắng lặng. Sanh thân phiền não, cả hai đều hết. Các bồ-tát đó ở trong ba cõi bình đẳng siêng tu rốt ráo nhất thừa, đến bờ tuyệt đối, dứt sạch lưới nghi, chứng vô sở đắc, dùng trí phương tiện tăng trưởng thấy biết. Từ xưa tới nay, các bồ-tát đó thảy đều an ổn trụ trong thần thông, được đạo nhất thừa không từ người khác.

    </p>
    <h2>CHƯƠNG BA MƯƠI MỐT: CÔNG ĐỨC CHÂN THẬT</h2>
    <p>
Trí huệ bồ-tát rộng sâu như biển, sự giác ngộ cao hơn đỉnh Tu-di. Tự thân chiếu sáng hơn cả nhật nguyệt. Tâm trong sáng sạch cũng như núi tuyết. Nhẫn nhục như đất, tất cả bình đẳng. Trong sạch như nước, tẩy rửa bụi dơ; rực sáng như lửa, đốt củi phiền não; không dính như gió chẳng bị chướng ngại. Tiếng pháp rền vang, độ người mê muội; mưa pháp cam lồ, thấm mát chúng sanh, lòng từ bình đẳng, rộng như hư không. Sạch đẹp như sen, không hề ô nhiễm; như cây ni-câu che mát khắp cả; như chày kim cang đập nát tà chấp; như núi Thiết Vi, chúng ma ngoại đạo không thể lay động.

Tâm họ ngay thẳng, quyết định khéo léo, bàn luận chánh pháp không hề nhàm chán, cầu pháp không mỏi, giới như lưu ly trong ngoài sáng sạch. Các bồ-tát đó có nói điều gì cũng khiến đại chúng vui vẻ tuân phục. Đánh trống pháp lớn, dựng cao cờ pháp, các ngài rực sáng mặt trời trí huệ chiếu phá tối ngu. Trong sạch ôn hòa, thiền định minh sát, làm bậc đạo sư điều phục mình người, dẫn dắt chúng sanh bỏ các ái trước, xa lìa ba cấu, du hí thần thông, nhờ nơi nguyện lực sanh ra căn lành, hàng phục quân ma. Kính thờ chư Phật, làm ngọn đèn sáng, phước điền tối thượng, kiết tường thù thắng cho các chúng sanh, kham nhận cúng dường hiên ngang vui vẻ, dũng mãnh không sợ.

Tướng quý vẻ đẹp, công đức biện tài của các bồ-tát trang nghiêm đầy đủ không ai sánh bằng. Các bồ-tát này thường được Phật khen đạt được rốt ráo các ba-la-mật, mà thường an trụ nơi tam-ma-địa, chẳng sanh chẳng diệt, đi khắp đạo tràng, xa cảnh nhị thừa.

Lại này A-nan! Nay ta nói lược công đức chân thật của các bồ-tát ở nước Cực Lạc. Nếu nói rộng ra, thì dù trải qua trăm ngàn vạn kiếp cũng không thể hết.

    </p>
    <h2>CHƯƠNG BA MƯƠI HAI: TUỔI THỌ VÀ SỰ AN LẠC VÔ CÙNG</h2>
    <p>
Bấy giờ Phật bảo bồ-tát Di-lặc, cùng hàng trời người: Trí huệ công đức của hàng thanh văn và chư bồ-tát ở nước Cực Lạc của Phật Di-đà không thể nói hết. Nước đó nhiệm mầu an lạc vi diệu, thanh tịnh như thế. Tại sao chúng sanh ở cõi nước này không gắng tu thiện, niệm đạo tự nhiên ra vào cúng dường, xem kinh hành đạo, vui thích tập theo trí huệ sắc bén, tâm không lui sụt, ý không giải đãi. Bên ngoài thong thả, bên trong chuyên cần, đồng với hư không, thích hợp trung đạo. Trong ngoài tương ưng, tự nhiên nghiêm chỉnh, kiểm điểm ngay ngắn, thân tâm trong sạch không còn tham ái, chí nguyện an định không tăng không giảm, cầu đạo hòa chánh không bị điên đảo. Hành theo kinh điển không dám sai sót, như cưa theo mực.

Vì mến mộ đạo, tâm không vọng niệm, không có lo âu, tự nhiên vô vi, rỗng rang không chấp, đạm bạc không dục. Phát được thiện nghiệp, hết lòng mong cầu, thương xót chúng sanh, lễ hiệp với nghĩa, sự lý viên dung, vượt thoát sanh tử, tự nhiên giữ gìn chân thật trong sáng, chí nguyện vô thượng tịch định an lạc. Đến một mai kia tâm mở sáng suốt, ở tánh tự nhiên hiện tự nhiên tướng, căn bản sẵn đủ ánh sáng hồi chiếu vạn vật lung linh, biến thành tối thắng. Cõi Uất-đơn-việt biến thành bảy báu, ánh sáng chói ngời, lấp lánh tốt đẹp, không dính trên dưới, rỗng không giới hạn. Mỗi người siêng năng nỗ lực cầu đạo ắt được siêu việt. Sau sẽ vãng sanh qua cõi Tịnh Độ của Phật Di-đà, dứt ngang năm đường, lấp kín ba ác. Thắng đạo vô cực dễ được vãng sanh, nhưng không người cầu. Cực Lạc hằng thuận theo tánh tự nhiên, tâm chí lặng lẽ, rộng như hư không, siêng cầu đạo đức để được sống lâu, thọ mạng vô tận. Tại sao cứ mãi đắm việc thế gian vô vàn lo lắng?

    </p>
    <h2>CHƯƠNG BA MƯƠI BA: KHUYẾN DỤ SÁCH TẤN</h2>
    <p>
Người đời cùng tranh những chuyện không đâu. Ở chốn đau khổ quá cùng cực này gắng làm kiếm sống. Quý tiện nghèo giàu, lớn nhỏ nam nữ bị tâm sai sử, quá nhiều lo lắng. Không ruộng lo ruộng, không nhà lo nhà, quyến thuộc tài sản có không cũng lo; được một thiếu một, lo cho bằng người, vừa được chút ít lại càng lo hơn, lửa cháy, nước trôi, trộm cắp, kẻ thù cướp chiếm tài sản. Tâm bền chí vững chấp chặt không buông, một khi chết đi bỏ lại tất cả, chẳng mang theo được. Giàu cũng như nghèo, đau khổ lo âu có trăm ngàn mối.

Người trong thế gian, cha con anh em, vợ chồng thân thuộc phải kính yêu nhau không nên ganh ghét, giúp đỡ lẫn nhau không được tham tiếc. Lời nói sắc mặt thường phải ôn hòa, không được chống trái. Nếu có xích mích, tâm sanh giận hờn thì qua đời sau chuyển thành đại oán. Thử xem việc đời càng thêm họa hại, dù chưa đến kề, mau nghĩ lìa xa. Đắm trong ái dục, sống chết một mình, đến đi riêng lẻ, khổ vui tự nhận, không ai thay cho. Hết thiện lại ác nhanh chóng đổi thay, đường đi đã khác, gặp gỡ khó mong. Lúc còn mạnh khỏe sao không cố gắng tu tập thiện nghiệp còn đợi lúc nào?

Người đời thiện ác không tự thấy được, cát hung họa phước tranh nhau gây tạo, thân ngu tâm tối chạy theo đạo tà, càng thêm điên đảo, căn bản vô thường, mênh mông mờ mịt. Không tin kinh pháp, tâm chẳng lo xa, chỉ thích hưởng thụ, mê muội sân giận, tham đắm sắc tài không hề thôi dứt. Than ôi, đáng thương! Người trước hung ác không biết đạo đức, không ai nói cho, lún sâu đường khổ, đâu có lạ gì! Con đường sanh tử, lý lẽ thiện ác, họ không chịu tin, cho là không có. Hãy tự nhìn nhau rồi tự khắc biết, hoặc cha khóc con, hoặc con khóc cha, anh em vợ chồng, thương khóc lẫn nhau. Kẻ chết người sống quyến luyến lẫn nhau, ân ái buộc ràng không mong giải thoát. Lún sâu ân huệ, tham đắm dục tình. Không biết nghĩ suy chuyên tâm hành đạo, đến khi mạng hết thì biết làm sao!

Người lầm đạo nhiều, người hiểu đạo ít. Mỗi người như thế ôm lòng độc hại, ác khí mịt mù, làm việc càn quấy, chống trái đất trời, tha hồ tạo tội, tổn giảm thọ mạng. Sau khi chết rồi, đọa ba đường ác không mong thoát khỏi. Các ông phải nên suy nghĩ chín chắn, bỏ các việc ác làm các việc thiện, siêng năng hành đạo. Ái dục vinh hoa không thể mãi còn, đều phải lánh xa không đáng ham thích. Phải siêng tinh tấn nguyện sanh Cực Lạc, trí huệ sáng suốt, công đức thù thắng, chớ theo ý mình chê bai kinh luật, phải chịu sau người.

    </p>
    <h2>CHƯƠNG BA MƯƠI BỐN: TÂM ĐƯỢC KHAI MỞ, SÁNG SUỐT</h2>
    <p>
Di-lặc bạch Phật: "Lời Phật dạy bảo rất sâu rất thiện, chúng con đều nhờ từ ân của Ngài giải thoát ưu khổ. Phật là vua pháp, là thánh của thánh, ánh sáng chiếu khắp, là Thầy trời người. Chúng con gặp Phật, nghe được danh hiệu Phật Vô Lượng Thọ, thảy đều vui mừng, tâm được mở tỏ."

Phật bảo Di-lặc: Tôn kính đức Phật là việc lành lớn, phải nên niệm Phật dứt các nghi ngờ, bỏ các ái dục, lấp các nguồn ác, dạo chơi ba cõi không bị chướng ngại, chỉ dạy chánh đạo, độ người chưa độ. Các ông nên biết chúng sanh mười phương nhiều kiếp đến nay xoay vần năm đường khổ lo không dứt. Lúc sanh đã khổ, đến già cũng khổ, bệnh càng khổ nhiều, chết lại khổ hơn. Thân người hôi dơ, không gì đáng ưa. Phải nên quyết định rửa sạch tâm dơ, nói làm trung tín, trong ngoài hợp nhau.

Người phải tự độ rồi mới độ người, chí tâm cầu nguyện, tích lũy căn lành. Tuy nói một đời tinh tấn khổ tu, nhưng chỉ thoáng chốc, sau được sanh về cõi nước Tịnh Độ an lạc vô cùng, vĩnh viễn nhổ được gốc khổ sanh tử, không còn khổ đau, sống trăm ngàn kiếp tự tại tùy ý. Các người phải nên tinh tấn nguyện cầu, chớ có nghi ngờ, tự chuốc tội lỗi. Những người nghi ấy sau sẽ sanh về trong thành bảy báu, biên địa nước kia, trong năm trăm năm chịu các khổ ách.

Di-lặc bạch rằng: "Con xin vâng theo lời dạy của Phật, siêng năng tu hành không dám nghi ngờ."</p>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-kinh-vo-luong-tho-bai-6-bo-tat-va-cong-duc-chan-that',
  slug: 'bai-6-bo-tat-va-cong-duc-chan-that',
  title: 'Bồ-tát và công đức chân thật',
  type: 'article',
  status: 'published',
  order: 6,
  createdAt: '2026-10-10',
  updatedAt: '2026-10-10',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
    },
  ],
}

export default lesson
