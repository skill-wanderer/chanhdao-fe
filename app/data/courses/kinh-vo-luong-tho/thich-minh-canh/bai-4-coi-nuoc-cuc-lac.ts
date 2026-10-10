import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section>
    <h2>CHƯƠNG TÁM: TÍCH LŨY CÔNG ĐỨC</h2>
    <p>
Lại này A-nan! Tỳ-kheo Pháp Tạng ở trước đức Phật Thế Tự Tại Vương và chúng trời người phát nguyện lớn xong, trụ huệ chân thật, dũng mãnh tinh tấn, nhất tâm chuyên chí trang nghiêm cõi nước rộng lớn thênh thang, đẹp đẽ siêu việt, không hề suy giảm. Trong vô lượng kiếp, tích lũy đức hạnh, không khởi các tưởng tham sân si dục; không dính sắc thanh hương vị xúc pháp; chỉ ưa tưởng niệm chư Phật quá khứ, tu tập căn lành, hành hạnh tịch tĩnh, thoát ly hư vọng. Nương vào chân đế mà trồng công đức, không kể khó nhọc. Ít muốn biết đủ, cầu pháp thanh tịnh, chuyên làm lợi ích cho các chúng sanh. Chí nguyện vững mạnh, thành tựu sức nhẫn. Giáo hóa hữu tình, lòng thường từ mẫn, nói lời hòa ái, khuyên nhủ cố gắng, cung kính tam bảo, phụng thờ sư trưởng, không có dối trá.

Trang nghiêm các hạnh, đầy đủ khuôn phép, quán sát các pháp như ảo như hóa, thiền định thường hằng. Pháp Tạng khéo léo gìn giữ khẩu nghiệp, không hề bàn luận điều xấu của người; khéo giữ thân nghiệp, không mất luật nghi; khéo giữ ý nghiệp, trong sạch không nhiễm. Dù có cõi nước, thành ấp xóm làng, quyến thuộc trân bảo, nhưng không tham đắm. Thường tu sáu độ: bố thí, trì giới, nhẫn nhục, tinh tấn, thiền định, trí huệ. Giáo hóa chúng sanh, khiến cho họ được an trụ trong đạo chân chánh vô thượng. Do vì thành tựu căn lành như thế, cho nên Pháp Tạng sanh ở chỗ nào cũng tự nhiên có vô lượng kho báu, hoặc làm trưởng giả, cư sĩ, quý tộc, hoặc làm quốc vương, Chuyển luân thánh vương, hoặc vua của sáu tầng trời cõi Dục cho đến Phạm vương.

Pháp Tạng tôn trọng cúng dường chư Phật chưa từng gián đoạn. Công đức như thế, nói không thể hết. Thân miệng Pháp Tạng thường tỏa hương thơm giống hương chiên-đàn, mùi hoa ưu-bát. Chính mùi hương này xông thơm lan tỏa vô lượng cõi nước. Sanh ra nơi nào, Pháp Tạng cũng đủ ba mươi hai tướng của đại trượng phu, tám mươi vẻ đẹp, thân tướng đoan nghiêm. Trong tay của Ngài thường hiện vô số đồ dùng quý báu. Tất cả đồ dùng đều đẹp bậc nhất để cho Pháp Tạng lợi ích chúng sanh. Do nhân duyên đó, vô số chúng sanh phát tâm Vô thượng chánh đẳng chánh giác.

    </p>
    <h2>CHƯƠNG CHÍN: THÀNH TỰU VIÊN MÃN</h2>
    <p>
Phật bảo A-nan: Tỳ-kheo Pháp Tạng tu hạnh bồ-tát tích lũy công đức vô lượng vô biên, tâm được tự tại với tất cả pháp, không thể nào dùng ngôn ngữ phân biệt mà biết rõ được, những điều phát nguyện đều được thành tựu. Pháp Tạng như thật an trụ cõi Phật, đầy đủ oai đức trang nghiêm rộng lớn.

A-nan nghe Phật nói điều đó xong, bạch với Phật rằng: "Bồ-tát Pháp Tạng thành tựu giác ngộ là Phật quá khứ, hay Phật tương lai, hay Phật hiện tại ở cõi nước khác?"

Lúc ấy, Thế Tôn lại bảo A-nan: Chính Đức Phật đó không từ đâu đến, không đi về đâu, không sanh không diệt, không phải quá khứ, hiện tại, vị lai. Vì nguyện độ sanh, Pháp Tạng thành Phật hiệu A-di-đà ở nước Cực Lạc về chính phương tây, cách Diêm-phù-đề trăm ngàn câu-chi na-do-tha cõi, đã hơn mười kiếp. Hiện nay Phật ấy đương nói pháp mầu, vô lượng vô số bồ-tát, thanh văn cung kính vây quanh.

    </p>
    <h2>CHƯƠNG MƯỜI: ĐỀU NGUYỆN THÀNH PHẬT</h2>
    <p>
Nghe Phật nói về Phật A-di-đà lúc làm bồ-tát cầu được nguyện này, vương tử Xà-thế, năm trăm trưởng giả lòng rất vui mừng, mỗi vị đều cầm một chiếc lọng vàng cùng đến trước Phật, đảnh lễ dâng lọng. Cúng dường Phật xong, ngồi qua một bên nghe kinh vi diệu, đều phát nguyện rằng: "Khi tôi thành Phật, tất cả đều như Phật A-di-đà."

Đức Phật biết được, bảo các tỳ-kheo: "Các vương tử này sau sẽ thành Phật. Đời trước họ đã tu hạnh bồ-tát, đã từng cúng dường bốn trăm ức Phật trong vô số kiếp. Thời Phật Ca-diếp, các vương tử đó làm đệ tử ta, hôm nay lại gặp và được cúng dường." Các thầy tỳ-kheo nghe Phật nói thế, thảy đều hoan hỷ.

    </p>
    <h2>CHƯƠNG MƯỜI MỘT: CÕI NƯỚC THANH TỊNH TRANG NGHIÊM</h2>
    <p>
Phật bảo A-nan: Cõi nước Cực Lạc đầy đủ vô lượng công đức trang nghiêm, vĩnh viễn không có danh từ đau khổ, ma não, ác thú, các thứ tai nạn; cũng không có cả bốn mùa lạnh nóng, mưa bão trái thời; lại cũng không có sông biển lớn nhỏ, gò, đống, hầm, hố, gai góc, đá sỏi, Tu-di, Thiết Vi. Tất cả đều bằng bảy thứ quý báu, đất bằng vàng ròng rộng lớn bằng phẳng không có giới hạn, đẹp đẽ trong sạch trang nghiêm tốt đẹp, vượt hơn tất cả cõi nước mười phương.
A-nan nghe xong, bạch đức Thế Tôn: "Nếu cõi nước đó không núi Tu-di, thì Tứ thiên vương, Đao-lợi thiên vương sẽ trụ nơi đâu?"
Phật hỏi A-nan: "Tất cả cõi trời Dạ Ma, Đâu-suất, Sắc, Vô Sắc Giới nương đâu mà trụ?"
A-nan bạch Phật: "Nương vào nghiệp lực không thể nghĩ bàn."
Phật bảo A-nan: "Nghiệp lực sâu nặng không nghĩ bàn đó, ông có biết không? Quả báo thân ông cũng không nghĩ bàn; nghiệp báo chúng sanh cũng không nghĩ bàn; thiện căn chúng sanh cũng không nghĩ bàn; thánh lực chư Phật, cõi nước chư Phật cũng không nghĩ bàn. Chúng sanh nước đó do công đức lành trụ nơi hạnh nghiệp, nương nhờ thần lực Phật A-di-đà mà được như vậy."
A-nan bạch Phật: "Nghiệp nhân quả báo không thể nghĩ bàn. Con đối pháp này thật không nghi ngờ. Chỉ muốn phá trừ lưới nghi tất cả chúng sanh đời sau mà hỏi câu này."

    </p>
    <h2>CHƯƠNG MƯỜI HAI: ÁNH SÁNG CHIẾU KHẮP</h2>
    <p>
Phật bảo A-nan: Ánh sáng oai thần của Phật Di-đà rất là cao quý, chư Phật mười phương đều không thể bằng. Ánh sáng chiếu khắp Hằng sa cõi Phật, phương đông phương tây, phương nam phương bắc, phương trên phương dưới và bốn phương phụ cũng giống như thế. Hào quang trên đỉnh của đức hóa Phật chỉ chiếu một, hai, ba, bốn do-tuần, hoặc là trăm ngàn vạn ức do-tuần. Ánh sáng Phật khác chỉ chiếu xa được một, hai cõi Phật, hoặc là một trăm, một ngàn cõi Phật. Chỉ có ánh sáng của Phật Di-đà chiếu soi rộng khắp vô số vô biên vô lượng cõi Phật.

Ánh sáng Phật khác chiếu xa hoặc gần, vốn do công đức từ lời phát nguyện trong lúc cầu đạo, lớn nhỏ không đồng ở đời quá khứ. Đến khi thành Phật, mỗi vị tự được ánh sáng xa gần tự nhiên như thế, không phải tính trước. Còn ánh sáng của Phật A-di-đà thù thắng chói sáng hơn cả ánh sáng mặt trời mặt trăng ngàn vạn ức lần. Trong những ánh sáng chỉ có ánh sáng của Phật Di-đà là cao quý nhất, là vua ánh sáng.

Cũng vì lẽ đó Phật Vô Lượng Thọ còn được gọi là Phật Vô Lượng Quang, cũng còn gọi là Phật Vô Biên Quang, Phật Vô Ngại Quang, Phật Vô Đẳng Quang, Phật Trí Huệ Quang, Phật Thường Chiếu Quang, Phật Thanh Tịnh Quang, Phật Hoan Hỷ Quang, Phật Giải Thoát Quang, Phật An Ổn Quang, Siêu Nhật Nguyệt Quang, Bất Tư Nghì Quang. Ánh sáng như thế chiếu khắp tất cả cõi nước mười phương. Nếu chúng sanh nào gặp ánh sáng này thì phiền não diệt, pháp thiện phát sanh, thân tâm nhu nhuyến. Nếu ở ba cõi cùng cực khổ đau thấy ánh sáng này thì đau khổ dứt. Sau khi mạng chung, liền được giải thoát. Nếu chúng sanh nào nghe được oai thần công đức rộng lớn của ánh sáng này, chí tâm xưng tán ngày đêm liên tục, thì sẽ được sanh về cõi Phật ấy tùy theo ý muốn.

    </p>
    <h2>CHƯƠNG MƯỜI BA: MẠNG SỐNG PHẬT VÀ ĐẠI CHÚNG ĐỀU VÔ LƯỢNG</h2>
    <p>
Phật bảo A-nan: Phật Vô Lượng Thọ, mạng sống dài lâu không thể tính lường, lại có vô số đại chúng thanh văn thần trí thông đạt, oai lực tự tại, có thể nắm giữ tất cả thế giới trong bàn tay mình. Trong đệ tử ta, Đại Mục-kiền-liên thần thông bậc nhất, trong một ngày đêm có thể biết được số lượng chúng sanh trong mười phương cõi. Giả sử chúng sanh ở trong mười phương đều thành duyên giác, mỗi vị duyên giác sống lâu vạn ức, đều có thần thông như Mục-kiền-liên, thì dù vận hết trí lực để cùng suy tính số lượng của các thanh văn trong hội Phật đó, thì cũng không được một phần vạn lần. Ví như biển cả sâu rộng vô biên, giả sử lấy một sợi lông cực nhỏ phân ra trăm phần, nghiền như vi trần, lấy mao trần đó chấm giọt nước biển, thì nước trên đầu của mao trần đó so với nước biển, nước nào nhiều hơn?

Lại này A-nan! Số lượng thanh văn mà các duyên giác và Mục-kiền-liên có thể biết được như là số nước trên một mao trần, còn điều chưa biết thì như biển kia. Mạng sống Phật đó và mạng trời, người, thanh văn, bồ-tát cũng giống như vậy, không thể nào dùng toán số ví dụ mà biết hết được.

    </p>
    <h2>CHƯƠNG MƯỜI BỐN: CÂY BÁU CÙNG KHẮP CÕI NƯỚC</h2>
    <p>
Cõi nước Phật đó có nhiều cây báu, hoặc toàn bằng vàng, hoặc toàn bằng bạc, toàn bằng lưu ly, hoặc là toàn bằng thủy tinh, hổ phách, ngọc quý mã não. Những thứ cây ấy thuần là do một chất báu mà thành, chứ không xen tạp. Lại có các cây toàn bằng hai, ba cho đến bảy báu cộng lại mà thành. Gốc, thân, cành, ngọn đều do những chất báu ấy tạo ra. Hoa lá và quả bằng chất báu khác. Lại có các cây, gốc vàng thân bạc, lưu ly làm cành, thủy tinh làm ngọn, hổ phách làm lá, mỹ ngọc làm hoa, mã não làm quả. Còn những cây khác cũng do bảy báu cùng nhau tạo thành, gốc thân cành lá, hoa quả tốt tươi. Mỗi loại tự xếp thành hàng khác nhau, hàng hàng thẳng tắp, lối lối ngang bằng, lá cành cùng hướng, hoa trái đối nhau. Màu sắc tươi thắm, chói sáng không thể nhìn tả hết được. Gió mát thổi lên chạm lá phát ra năm loại âm thanh, cung bậc vi diệu, tự nhiên hòa hợp. Các cây báu này khắp cõi nước ấy.

    </p>
    <h2>CHƯƠNG MƯỜI LĂM: ĐẠO TRÀNG BỒ-ĐỀ</h2>
    <p>
Đạo tràng lại có cây bồ-đề cao bốn trăm vạn dặm, chu vi gốc cây năm ngàn do-tuần, cành lá tỏa rộng ra khắp bốn phía hai mươi vạn dặm, đều do các báu tự nhiên hiệp thành. Hoa quả tươi tốt chói sáng cùng khắp. Các loại ngọc quý vua các loại ngọc, hồng lục trắng xanh kết chuỗi anh lạc. Mây ngọc kết vòng trang sức trụ báu. Linh vàng chuông ngọc giăng khắp mọi nơi. Lưới báu trân châu che trùm khắp cả, trăm ngàn màu sắc ánh chiếu lẫn nhau, vô lượng hào quang sáng soi vô cực. Mọi sự trang nghiêm tùy tâm ứng hiện.

Gió mát thổi nhẹ vào các cành lá lay động tạo thành tiếng pháp vô lượng. Âm thanh vi diệu vang khắp cõi Phật, thanh tao hòa nhã trong trẻo tuyệt vời, là tiếng hay nhất trong các âm thanh mười phương thế giới. Nếu chúng sanh nào thấy được đạo thọ, nghe được âm thanh, ngửi được mùi hương, nếm được diệu quả, chạm được ánh sáng, nhớ nghĩ công đức của cây báu này, sáu căn thanh tịnh, không còn phiền não, trụ nơi bất thoái, thành tựu bồ-đề. Lại còn vầy nữa, do thấy cây này đạt ba loại nhẫn: âm hưởng, nhu thuận, vô sanh pháp nhẫn.

Phật bảo A-nan: Cõi nước của Phật trang nghiêm như thế, dùng cây hoa quả và các chúng sanh mà làm Phật sự. Đó là do nhờ oai thần, bản nguyện của đức Phật kia. Nguyện lực đầy đủ, rõ ràng kiên cố mà được như thế.

    </p>
    <h2>CHƯƠNG MƯỜI SÁU: NHÀ CỬA LẦU GÁC</h2>
    <p>
Lại nữa A-nan! Giảng đường tinh xá, lầu gác lan can của đức Phật đó cũng thảy đều do bảy báu kết thành, ngọc ma-ni trắng xếp thành những đường trong sáng đẹp đẽ không thể so sánh. Cung điện bồ-tát cũng được kiến trúc bằng các châu báu. Trong đó hoặc có các vị bồ-tát hiện ở trên đất giảng kinh, tụng kinh, nghe kinh, kinh hành, ngồi thiền, tư duy về tám thánh đạo. Các vị bồ-tát ở trên hư không giảng kinh, nghe nhận, tụng đọc, kinh hành, tọa thiền, tư duy. Có người chứng được quả tu-đà-hoàn, có người chứng được quả tư-đà-hàm, quả a-na-hàm và a-la-hán. Người nào chưa được quả vị bất thoái thì sẽ chứng được. Mọi người tự mình suy niệm về đạo trong niềm hoan hỷ.

    </p>
    <h2>CHƯƠNG MƯỜI BẢY: CÔNG ĐỨC CỦA AO SUỐI</h2>
    <p>
Lại nữa A-nan! Hai bên giảng đường có ao suối mát chảy thông với nhau, sâu cạn, dài rộng phân thành từng loại, hoặc mười do-tuần, hai mươi do-tuần cho đến một trăm, một ngàn do-tuần, trong trẻo thơm tho, đầy nước tám đức. Trên bờ ao kia có vô số loại cây chiên-đàn hương, cây kiết tường quả, hoa trái tỏa hương, ánh sáng rực rỡ. Cành lá xum xuê che mát cả ao, thoảng hương thơm ngát, hương của thế gian không thể sánh bằng, theo gió hương bay, theo dòng hương tỏa.

Lòng ao trang sức bằng bảy thứ báu, đáy bằng cát vàng. Trong đó có hoa sen xanh, sen hồng, sen vàng, sen trắng đầy cả mặt nước, muôn màu tươi thắm. Chúng sanh nước đó xuống ao này tắm. Họ muốn nước ấy đến chân đến gối, đến lưng đến cổ, muốn nước rửa thân, muốn nước lạnh ấm, muốn nước mạnh yếu, tất cả thấy được chiều theo ý muốn. Tắm xong đều được khai thần mở trí, thân thể sảng khoái, sáng sạch nhẹ nhàng. Cát vàng sáng chói, dù ở chỗ sâu vẫn ánh lên mặt. Sóng gợn lăn tăn nối nhau không dứt, phát ra vô lượng vi diệu âm thanh như tiếng tam bảo, tiếng ba-la-mật, tiếng vô sanh diệt, tiếng ngừng vắng bặt, mười lực, vô úy, vô tánh vô tác, vô ngã vô nhân, tiếng đại từ bi, tiếng đại hỷ xả, cam lồ quán đảnh, thọ nhận giai vị.

Chúng sanh nghe được những âm thanh ấy, tâm liền thanh tịnh không còn phân biệt, chánh trực bình đẳng, thành tựu căn lành. Những điều được nghe, đều hợp với pháp. Nếu ai muốn nghe, liền được toại nguyện; ai không muốn nghe thì không nghe thấy. Họ được vĩnh viễn không bị lui sụt nơi tâm Vô thượng chánh đẳng chánh giác.

Các chúng sanh ở mười phương thế giới sanh về cõi đó, tự nhiên hóa sanh trong hoa sen đẹp nơi ao bảy báu, thân thể sáng sạch, cao quý vô cùng. Tên ba đường khổ họ còn không nghe, huống chi khổ thật. Chỉ có thứ tiếng tự nhiên an lạc, vì thế nước ấy gọi là Cực Lạc.

    </p>
    <h2>CHƯƠNG MƯỜI TÁM: ÍT CÓ, SIÊU VIỆT THẾ GIAN</h2>
    <p>
Ở nước Cực Lạc, chúng sanh nhân dân dung mạo đẹp đẽ không ai sánh bằng, tất cả cùng loại, không có sai biệt, vì thuận phong tục của các phương cõi có tên trời, người.

Phật bảo A-nan: Ví như có người ăn xin nghèo khổ đứng cạnh nhà vua, diện mạo hình trạng có khác nhau không? Đem nhà vua đó nếu so sánh với Chuyển luân thánh vương, thì sẽ xấu xí như người ăn xin bên cạnh vua vậy. Chuyển luân thánh vương oai tướng bậc nhất, nhưng đem so với vua trời Đao-lợi lại càng xấu hơn. Giả như Đế Thích so Đệ Lục Thiên thì tất không bằng một phần ngàn lần. Đệ Lục Thiên Tử nếu so sánh với bồ-tát, thanh văn ở cõi Cực Lạc, nhan sắc dung mạo không bằng một phần trăm vạn ức lần; cung điện, y phục, thức ăn, thức uống của các bồ-tát và chúng thanh văn giống hệt như trời Tha Hóa Tự Tại, cho đến oai đức thần thông biến hóa, tất cả trời, người không thể sánh bằng một phần trong số trăm vạn ức lần.

A-nan! Nên biết cõi nước Cực Lạc của Phật Di-đà công đức trang nghiêm không thể nghĩ bàn là như thế đó.</p>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-kinh-vo-luong-tho-bai-4-coi-nuoc-cuc-lac',
  slug: 'bai-4-coi-nuoc-cuc-lac',
  title: 'Cõi nước Cực Lạc',
  type: 'article',
  status: 'published',
  order: 4,
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
