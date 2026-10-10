import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section>
    <h2>CHƯƠNG MƯỜI CHÍN: THỌ DỤNG ĐƯỢC ĐẦY ĐỦ</h2>
    <p>
Lại nữa A-nan! Chúng sanh đã sanh, đang sanh, sẽ sanh qua nước Cực Lạc đều có hình tướng đẹp đẽ đoan nghiêm, phước đức vô lượng, trí huệ sáng suốt, thần thông tự tại. Tất cả thọ dụng đều đầy đủ cả. Cung điện, phục sức, hương hoa, phan lọng, đồ dùng trang nghiêm tùy ý mà có. Chúng sanh cõi đó muốn ăn thì có bát bằng bảy báu tự nhiên hiện đến, với đầy đủ cả trăm món uống ăn. Tuy nói thức ăn nhưng thực không ăn, chỉ ý thọ dụng sắc thanh hương vị, sắc lực tăng trưởng, không có đại tiện tiểu tiện dơ uế. Thân tâm nhu nhuyến, không đắm trước vị. Khi đã dùng xong, các món ăn uống tự nhiên biến mất, đúng thời lại hiện.

Lại có các loại áo báu đẹp đẽ, mũ bằng anh lạc, vô lượng ánh sáng, trăm ngàn diệu sắc tự nhiên đầy đủ. Nhà ở đẹp đẽ xứng với hình tướng, lưới báu che phủ, trên lưới treo linh. Tất cả giao kết lẫn nhau cùng khắp, ánh sáng chiếu diệu rực rỡ tráng lệ. Lại có lầu gác, bao lơn nhà cửa, phòng ốc rộng hẹp, vuông tròn lớn nhỏ, dù ở mặt đất hay trên hư không, thanh tịnh an ổn, vi diệu an lạc, theo ý hiện ra thảy đều đầy đủ.

    </p>
    <h2>CHƯƠNG HAI MƯƠI: GIÓ ĐỨC, MƯA HOA</h2>
    <p>
Cõi nước Phật đó, khi đến giờ ăn tự nhiên có làn gió đức thổi nhẹ, rung các mành lưới và hàng cây báu, từ đó phát ra âm thanh vi diệu. Những âm thanh ấy diễn pháp vô thường, khổ, không, vô ngã, các ba-la-mật. Gió mang vạn loại hương đức thơm nhẹ lan tỏa khắp nơi. Người nào nghe được không còn sanh khởi trần lao cấu uế. Gió chạm đến thân, tự nhiên cảm thấy an vui hòa nhã, giống như tỳ-kheo chứng diệt tận định.

Gió thổi cây báu, mang hoa xếp lại thành từng đống lớn, màu nào sắc nấy, không có xen lẫn. Cánh hoa mềm mại sáng sạch như là hoa đâu-la-miên. Chúng sanh nước ấy đi bước trên hoa lún sâu bốn tấc, vừa dở chân lên, hoa lại như cũ. Sau khi ăn xong, hoa tự biến mất, mặt đất trong sạch. Gió lại tung rải một lớp hoa mới, đúng theo thời tiết, sáu lần như thế.

    </p>
    <h2>CHƯƠNG HAI MƯƠI MỐT: HOA SEN BÁU VÀ ÁNH SÁNG PHẬT</h2>
    <p>
Lại có rất nhiều hoa sen quý báu cùng khắp thế giới. Tất cả hoa đó có ngàn ức cánh, ánh sáng nhiều màu. Hoa sen màu xanh phóng ánh sáng xanh; hoa sen màu trắng phóng ánh sáng trắng; hoa vàng, hoa đỏ, màu sắc ánh sáng cũng lại như thế. Vô lượng vật báu, cùng trăm ngàn ngọc ma-ni chói sáng át cả nhật nguyệt. Những hoa sen ấy hoặc nửa do-tuần, hoặc hai, ba, bốn cho đến một trăm, một ngàn do-tuần. Trong mỗi hoa sen đều ánh phát ra ba mươi sáu trăm ngàn ức tia sáng. Trong mỗi tia sáng hiện ba mươi sáu trăm ngàn ức Phật, thân màu vàng ròng, đầy đủ tướng quý, vẻ đẹp lạ thường. Mỗi đức Phật đó lại phóng trăm ngàn tia sáng chói lọi, nói pháp vi diệu, đến khắp mười phương. Chư Phật như thế dẫn dắt chúng sanh trụ trong chánh đạo.

    </p>
    <h2>CHƯƠNG HAI MƯƠI HAI: QUYẾT ĐỊNH CHỨNG QUẢ CAO NHẤT</h2>
    <p>
Lại nữa A-nan! Cõi nước Phật đó không có bóng tối, không có ánh lửa, không có ánh sáng mặt trời, mặt trăng và các tinh tú, không có tướng trạng của ngày và đêm, cũng không có tên tháng năm kiếp số. Chúng sanh cũng không chấp trước gia đình, không nêu tên hiệu. Lại cũng không có thủ xả phân biệt, tất cả hưởng thụ an lạc thanh tịnh. Nếu như có người thiện nam, tín nữ hoặc là đã sanh, hoặc sẽ sanh về, thảy đều được trụ ở chánh định tụ, quyết định thành tựu Vô thượng đẳng giác. Vì sao như thế? Nếu là tà định và bất định tụ, thì không thấu suốt và không thể nào biết lập nhân ấy.

    </p>
    <h2>CHƯƠNG HAI MƯƠI BA: MƯỜI PHƯƠNG CHƯ PHẬT ĐỀU TÁN THÁN</h2>
    <p>
Lại nữa A-nan! Hằng sa cõi nước ở về phương đông, trong mỗi thế giới có Hằng sa Phật, mỗi vị Phật ấy đều dùng tướng lưỡi dài rộng, phóng ra vô lượng ánh sáng, nói lời chân thật, tán thán công đức Phật Vô Lượng Thọ không thể nghĩ bàn. Chư Phật Hằng sa các nước phương nam, phương tây, phương bắc và bốn phương phụ, phương trên phương dưới cũng đều xưng tán. Tại vì sao thế? Chư Phật muốn khiến chúng sanh các nước trong thế giới khác nghe được danh hiệu Phật Vô Lượng Thọ, phát tâm trong sạch, nhớ nghĩ thọ trì, quy y cúng dường, dù chỉ một niệm tín tâm trong sạch, đem công đức này chí tâm hồi hướng, nguyện sanh nước đó. Những chúng sanh đó đều được vãng sanh ở vị bất thoái, cho đến chứng thành quả vị Chánh giác.

    </p>
    <h2>CHƯƠNG HAI MƯƠI BỐN: BA HẠNG VÃNG SANH</h2>
    <p>
Phật bảo A-nan: Chư thiên loài người ở trong thế giới mười phương ức cõi, nếu chí tâm nguyện sanh về Cực Lạc thì có ba bậc:

Bậc thượng là người bỏ nhà lìa dục, làm bậc sa-môn, phát tâm bồ-đề, một lòng nghĩ nhớ đức Phật Di-đà, tu tập công đức, nguyện sanh nước đó. Những chúng sanh này đến lúc lâm chung, Phật A-di-đà và các thánh chúng hiện ra trước mặt. Trong khoảng chốc lát, người đó theo Phật, sanh về nước ấy, lại được hóa sanh trong ao bảy báu, trí huệ dũng mãnh, thần thông tự tại. Do đó, A-nan! Nếu có chúng sanh muốn ngay đời này thấy Phật Di-đà, thì nên phát tâm Vô thượng bồ-đề, lại nên chuyên nhớ về nước Cực Lạc, gom góp căn lành hồi hướng nước kia. Sau sẽ thấy Phật, sanh về nước đó, được quả bất thoái cho đến quả Phật.

Bậc trung tuy là không làm sa-môn tu công đức lớn, nhưng lại phát tâm Vô thượng bồ-đề, một lòng nhớ nghĩ Phật A-di-đà, tùy sức tu hành, thành tựu công đức. Giữ gìn trai giới, xây dựng chùa tháp, tô đắp tôn tượng, cúng dường sa-môn, thắp đèn treo phan, rải hoa đốt hương, đem công đức này hồi hướng nguyện sanh về cõi nước kia. Người này lâm chung sẽ được hóa thân Phật A-di-đà đầy đủ tướng quý và muôn vẻ đẹp sáng như Phật thật hiện ra trước mặt cùng với đại chúng cung kính vây quanh tiếp dẫn người đó. Người đó tức thì theo hóa thân Phật mà được vãng sanh, chứng quả bất thoái cho đến quả vị Vô thượng bồ-đề. Công đức trí huệ của những người này kém hơn bậc thượng.

Còn về bậc hạ, giả như không làm các thứ công đức mà lại phát tâm Vô thượng bồ-đề, một lòng nhớ nghĩ đến Phật Di-đà, vui vẻ tin ưa, không sanh nghi hoặc, thành tâm nguyện sanh về cõi nước đó. Khi những người này sắp phải mạng chung, mộng thấy đức Phật, cũng được vãng sanh. Công đức trí huệ của những người này kém hơn bậc trung.

Nếu có chúng sanh trụ pháp Đại thừa dùng tâm thanh tịnh hướng về đức Phật Vô Lượng Thọ Quang, niệm danh hiệu Ngài dù chỉ mười niệm, nguyện sanh nước kia, đến khi nghe được diệu pháp thâm sâu liền sanh tin hiểu. Cho đến một niệm tâm nghĩ nhớ đến đức Phật Di-đà, thì những người này khi sắp lâm chung như là trong mộng thấy Phật Di-đà, quyết định vãng sanh, được bất thoái chuyển cho đến quả Phật.

    </p>
    <h2>CHƯƠNG HAI MƯƠI LĂM: CHÁNH NHÂN CỦA VÃNG SANH</h2>
    <p>
Lại nữa A-nan! Nếu có những người thiện nam, thiện nữ nghe kinh điển này, thọ trì đọc tụng, biên chép cúng dường ngày đêm không dứt, cầu được vãng sanh về cõi nước kia. Phát tâm bồ-đề, giữ gìn giới cấm bền chắc không lui, lợi ích chúng sanh, bao nhiêu căn lành đều đem ban phát cho các chúng sanh, để họ an lạc, luôn luôn nhớ nghĩ đến Phật Di-đà và nước Cực Lạc. Với những người này, sau khi mạng chung, thân tướng tốt đẹp trang nghiêm như Phật, được sanh nước ấy, mau được nghe pháp, vĩnh viễn không còn lui sụt bồ-đề.

Lại nữa A-nan! Nếu có chúng sanh muốn sanh nước kia, tuy không tu tập tinh tấn thiền định, mà lại chí thành tụng đọc tôn kinh, giữ gìn giới cấm, làm các việc thiện như không sát sinh, không trộm không dâm, không nói dối trá, thêu dệt, hung ác, không nói đôi chiều, không tham sân si. Như thế ngày đêm, người đó nghĩ nhớ công đức trang nghiêm của Phật Di-đà ở cõi phương tây, chí tâm quy y, đảnh lễ cúng dường. Người này lâm chung không còn sợ hãi, tâm không điên đảo, liền được vãng sanh về cõi Phật đó.

Nếu như người nào vì nhiều sự duyên không thể xuất gia, không có thời gian tu tập trai giới, nhưng lòng trong sạch, trong lúc rảnh rỗi, đoan thân chánh niệm, lìa dục bỏ lo, từ bi tinh tấn, giữ tâm không hề sân hận, ganh ghét, tham lam keo kiệt, hối hận giữa chừng, không chút nghi ngờ. Sống đời hiếu thuận, chí thành trung tín, tin tưởng sâu xa những lời Phật dạy, tin thiện được phước, phụng trì như thế không hề thiếu sót. Muốn được độ thoát, thường phải phát nguyện sanh về Tịnh Độ của Phật Di-đà, từ một đến mười ngày đêm không dứt. Đến khi lâm chung, người này sẽ được vãng sanh nước kia, hành bồ-tát đạo, đạt được bất thoái, đầy đủ thân vàng, ba mươi hai tướng, sẽ được thành Phật. Người ấy muốn được thành Phật nước nào cũng được như ý, tùy sự tinh tấn cầu đạo không dừng mà đạt sở nguyện.

Lại này A-nan! Vì lợi ích này nên chư Phật ở vô lượng vô số các cõi nước kia đều cùng tán thán Phật Vô Lượng Thọ có nhiều công đức.

    </p>
    <h2>CHƯƠNG HAI MƯƠI SÁU: ĐẢNH LỄ, CÚNG DƯỜNG, NGHE PHÁP</h2>
    <p>
Lại nữa A-nan! Các chúng bồ-tát ở khắp mười phương, ai muốn chiêm ngưỡng đảnh lễ đức Phật Vô Lượng Thọ Quang ở cõi Cực Lạc, mỗi người hãy đem hương hoa, phướn lọng, đi đến chỗ Phật cung kính cúng dường, nghe nhận kinh pháp, tuyên dương giáo hóa, khen ngợi công đức trang nghiêm thanh tịnh của nước Cực Lạc.

Bấy giờ, đức Phật bèn nói kệ rằng:
    </p>
    <p>
Cõi Phật ở phương đông<br />
Nhiều như cát sông Hằng<br />
Vô lượng chư bồ-tát<br />
Đến lễ Phật Di-đà.
    </p>
    <p>
Nam, tây, bắc tất cả<br />
Trên dưới đều như thế<br />
Hoặc dùng tâm tôn trọng<br />
Cúng dường các vật báu.
    </p>
    <p>
Nói ra lời hòa nhã<br />
Ca tụng Đấng vô thượng<br />
Đạt được thần thông huệ<br />
Nhập vào pháp sâu xa.
    </p>
    <p>
Nghe tên Phật thánh đức<br />
An ổn được lợi lớn<br />
Trong các loại cúng dường<br />
Siêng tu không mỏi mệt.
    </p>
    <p>
Quán cõi nước thù thắng<br />
Vi diệu khó nghĩ bàn<br />
Công đức trang nghiêm khắp<br />
Cõi Phật khác khó bằng.
    </p>
    <p>
Nhân phát tâm vô thượng<br />
Nguyện mau chứng bồ-đề.<br />
Liền đó Phật Di-đà<br />
Hiện thân vàng mỉm cười
    </p>
    <p>
Từ miệng phóng ánh sáng<br />
Chiếu khắp cả mười phương<br />
Thâu lại xoay quanh Phật<br />
Ba vòng rồi vào đảnh.
    </p>
    <p>
Bồ-tát thấy tướng này<br />
Liền chứng vị bất thoái<br />
Tất cả chúng trong hội<br />
Đều cùng nhau hoan hỷ.
    </p>
    <p>
Tiếng Phật như sấm dậy<br />
Tám âm diễn giọng hay<br />
Bồ-tát mười phương đến<br />
Ta đều biết nguyện ấy
    </p>
    <p>
Chí cầu cõi Tịnh Độ<br />
Thọ ký sẽ thành Phật.<br />
Biết rõ tất cả pháp<br />
Như mộng huyễn, tiếng vang
    </p>
    <p>
Đầy đủ các đại nguyện<br />
Ắt thành cõi như thế.<br />
Biết cõi như bào ảnh<br />
Thường phát lời nguyện lớn
    </p>
    <p>
Rốt ráo đạo bồ-tát<br />
Đầy đủ các công đức<br />
Tu thắng hạnh bồ-đề<br />
Thọ ký sẽ thành Phật.
    </p>
    <p>
Thông suốt tánh các pháp<br />
Tất cả không, vô ngã<br />
Chuyên cầu cõi Phật tịnh<br />
Ắt thành tựu như thế.
    </p>
    <p>
Nghe pháp vui nhận làm<br />
Được đến nơi trong sạch<br />
Ắt được Phật Di-đà<br />
Thọ ký sẽ thành Phật.
    </p>
    <p>
Cõi thù thắng vô biên<br />
Đều do sức Phật nguyện<br />
Nghe tên muốn vãng sanh<br />
Đều được không lui sụt.
    </p>
    <p>
Bồ-tát phát chí nguyện<br />
Nguyện cõi mình cũng vậy<br />
Luôn nhớ độ tất cả<br />
Được phát tâm bồ-đề
    </p>
    <p>
Bỏ thân luân hồi này<br />
Đều được đến bờ kia.<br />
Phụng thờ vạn ức Phật<br />
Bay đi khắp các cõi
    </p>
    <p>
Cung kính hoan hỷ rồi<br />
Trở về nước An Dưỡng.
    </p>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-kinh-vo-luong-tho-bai-5-vang-sanh-va-cong-duc',
  slug: 'bai-5-vang-sanh-va-cong-duc',
  title: 'Vãng sanh và công đức',
  type: 'article',
  status: 'published',
  order: 5,
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
