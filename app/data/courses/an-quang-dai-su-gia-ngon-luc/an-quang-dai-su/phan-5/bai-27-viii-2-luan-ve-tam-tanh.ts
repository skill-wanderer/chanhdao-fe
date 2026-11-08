import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/7.giai-quyet-nhung-nghi-hoac-thuong-gap/2.luan-ve-tam-tanh'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-8">
    <header class="mb-2">
      <h2 class="!mt-0">2. Luận về tâm tánh</h2>
    </header>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Tâm vừa Tịch, vừa Chiếu, bất sanh bất diệt, rộng lớn, thấu triệt, linh thông, viên dung hoạt bát, là gốc của hết thảy các pháp thế gian và xuất thế gian. Từ hạng phàm phu đầy dẫy triền phược, hôn mê, điên đảo lầm lạc cho đến tam thế chư Phật, tâm ấy vẫn hệt như nhau, trọn không có gì khác. Vì thế nói: “Tâm, Phật, chúng sanh cả ba không sai biệt”.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Chỉ vì chư Phật chứng đắc rốt ráo nên công đức, lực dụng phô bày triệt để; phàm phu toàn thể mê trái, lại còn áp dụng sức công đức lực dụng ấy vào sáu trần cảnh, khởi tham - sân - si, tạo giết - trộm - dâm, do Hoặc tạo nghiệp, do nghiệp cảm khổ. Ba thứ Hoặc - nghiệp - khổ phát khởi lẫn nhau, nhân nhân quả quả liên tiếp chẳng dứt, trải trần sa kiếp chịu mãi luân hồi, dù muốn xuất ly cũng chẳng có cách nào! Ví như trong nhà tối mò phải của báu, chẳng những không thọ dụng được, lại còn bị của báu ấy làm tổn thương. Tâm mê chạy theo cảnh, quay lưng với Giác, xuôi theo trần lao cũng giống như thế.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Như Lai thương xót, dạy cho họ bỏ vọng về với chân, khôi phục tâm tánh mình. Thoạt đầu dạy “hết vọng là chân”, kế đó dạy “toàn thể vọng chính là chân”, như gió lặng sóng yên, nắng ấm băng tan; sóng, băng trở thành nước. Sóng, băng cùng với nước nào phải là hai vật; nhưng lúc sóng chưa yên, băng chưa tan, so với lúc sóng đã lặng, băng đã tan, dù thể tánh trọn chẳng phải hai, tướng và dụng khác xa vời vợi. Bởi thế mới nói: “Tu đức hữu công, tánh đức mới hiển”. Nếu chỉ cậy vào tánh đức, chẳng chú trọng tu đức thì đến tận đời vị lai cứ mãi mãi là chúng sanh, luống uổng Phật tánh sẵn có, không chỗ dựa nương! Vì thế, Bát Nhã Tâm Kinh nói: “Lúc Quán Tự Tại Bồ Tát thực hành sâu xa Bát Nhã Ba La Mật, soi thấy năm uẩn đều không, vượt hết thảy khổ ách”.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Toàn thể Ngũ Uẩn là Chân Như diệu tâm, nhưng do một bề mê muội, trái nghịch bèn thành tướng huyễn vọng. Vọng tướng đã thành, bèn lầm mất Nhất Tâm. Đã mê muội nơi Nhất Tâm, các khổ đều nhóm lại. Như gió thổi, toàn thể nước trở thành sóng; trời lạnh, nước mềm thành cứng. Dùng Bát Nhã thậm thâm để chiếu soi liền hiểu rõ: mê chân thành vọng, toàn vọng chính là chân; như gió lặng, trời ấm, nước lại trở về bản thể.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Vì thế biết rằng: Hết thảy các pháp đều do vọng tình biến hiện, nếu lìa vọng tình thì bản thể của các pháp ấy hoàn toàn là Không. Bởi vậy, tứ đại đều mất bản tánh, lục căn dùng lẫn cho nhau. Thế nên, Bồ Tát chẳng khởi Diệt Định, hiện các oai nghi, dùng nhãn căn làm Phật sự của nhĩ căn, dùng nhĩ căn làm Phật sự của nhãn căn, vào trong đất như vào nước, đi trong nước như đi trên đất, nước lửa chẳng thể đốt cháy hay nhận chìm được, tùy ý đi, ngồi trên hư không, cảnh không tự tánh, đều theo tâm chuyển.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Bởi vậy, kinh Lăng Nghiêm nói: “Nếu có kẻ nào nhận chân, quy nguyên thì mười phương hư không thảy đều tan mất”. Đấy chính là hiệu quả thật sự của việc “soi thấy năm uẩn đều không” vậy. “Quy” nghĩa là quay về, trở về, tức là phản chiếu hồi quang, khôi phục tâm tánh vốn có. Nhưng muốn phản chiếu hồi quang khôi phục tâm tánh, nếu trước hết tâm chẳng quy hướng Tam Bảo sẽ chẳng thể y giáo phụng hành. Tâm đã quy hướng Tam Bảo sẽ tự có thể khôi phục nguồn tâm, triệt chứng Phật tánh. Đã khôi phục được nguồn tâm vốn sẵn có, triệt chứng Phật tánh, mới biết tự tâm quý báu nhất, trong mê chẳng giảm, lúc ngộ chẳng tăng. Chỉ vì thuận theo pháp tánh nên thọ dụng được, trái lại sẽ bị tổn thương. Thế nhưng, tổn hại hay lợi ích cách biệt nhau một trời, một vực!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Chúng sanh là Phật chưa ngộ, Phật là chúng sanh đã ngộ. Tâm tánh bổn thể của chúng sanh và Phật bình đẳng, giống hệt như nhau, không hai, không khác; nhưng khổ - vui, thọ dụng khác biệt nhau như trời với đất là do xứng tánh thuận tu hay trái tánh nghịch tu mà thành ra như thế. Lý này rất sâu, chẳng dễ tuyên nói. Để khỏi phí lời giãi bày, xin mượn ví dụ để minh thị:</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Chư Phật tu đức đến cùng cực, chứng ngộ triệt để tánh đức, giống như tấm gương báu tròn lớn. Thể chất của gương là đồng<sup class="ml-0.5 text-xs font-semibold text-brand-accent">40</sup> . Biết gương có tánh chất tỏa sáng nên hằng ngày lau, mài, ra sức chẳng ngơi. Bụi hết, gương tỏa sáng, dựng trên đài cao, vật nào soi đến liền hiện bóng. Lớn như trời đất, nhỏ như hạt bụi, mảy lông, sâm la vạn tượng đều hiện rành rành. Ngay trong lúc muôn vàn hình tượng cùng hiện ấy, gương vẫn rỗng rang, trống trải, trọn chẳng có một vật nào.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Tâm chư Phật cũng giống như vậy: đoạn sạch phiền não, Hoặc nghiệp, hiển hiện trọn vẹn trí huệ, đức tướng, an trụ trong Tịch Quang đến cùng tận đời vị lai thường hưởng pháp lạc, độ chín giới xuất ly sanh tử, cùng chứng Niết Bàn. Chúng sanh hoàn toàn mê nơi tánh đức, trọn chẳng tu đức mảy may, ví như gương báu bụi phủ, chẳng có mảy may quang minh nào, ngay cả chất đồng cũng bị teng đóng nên quang minh chẳng hiện được. Tâm chúng sanh cũng giống như thế.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Nếu như biết tấm gương bị bỏ phế chẳng hiện chất đồng này vốn có quang minh soi trời chiếu đất, do đấy chẳng chịu bỏ phế, ngày ngày lau chùi, mài bóng, lúc đầu hơi lộ chất đồng, dần dà tỏa ánh quang minh, vẫn cực lực mài cho sạch, một ngày kia, teng lẫn bụi hết sạch, tự nhiên hình tượng nào soi vào liền hiện bóng, soi trời chiếu đất. Quang minh ấy gương vốn tự có, chẳng phải từ bên ngoài vào, chẳng phải do mài mà có; nhưng nếu chẳng mài cũng không cách nào có được!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Chúng sanh bỏ trần xuôi theo tánh giác, bỏ vọng theo chân cũng giống như thế. Phiền hoặc đoạn dần dần, trí huệ sẽ tăng dần dần. Đến khi công hạnh viên mãn, đoạn được cái không thể đoạn, chứng được cái không thể chứng, viên mãn Bồ Đề, trở về cái chẳng thể đạt được, thần thông, trí huệ, công đức, tướng hảo trọn chẳng khác gì với mười phương ba đời chư Phật. Dù là như vậy, cũng chỉ là khôi phục cái mình sẵn có, phải đâu là mới có. Nếu chỉ chấp nhận tánh đức, chẳng khởi tu đức, ắt đến tận đời vị lai thường phải chịu cái khổ luân hồi sanh tử, vĩnh viễn chẳng có ngày khôi phục cái gốc, trở về cội nguồn được!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Hết thảy chúng sanh đều có Phật tánh, nhưng tâm hạnh thọ dụng của Phật và chúng sanh tuyệt đối chẳng tương đồng. Vì sao vậy? Vì Phật bỏ trần theo giác, chúng sanh lại bỏ giác theo trần; Phật tánh dẫu đồng, mê - ngộ rất khác! Vì thế, sướng - vui, thăng - trầm khác nhau một trời, một vực! Nếu quan sát kỹ nghĩa lý ba nhân Phật tánh, ắt không mối nghi nào là chẳng phá được, không ai là chẳng muốn tu tập! Ba nhân là chánh nhân, liễu nhân và duyên nhân.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Chánh nhân Phật tánh chính là diệu tánh vốn sẵn có trong tâm ta, là Pháp Thân chân thường chư Phật đã chứng. Diệu tánh này tại phàm chẳng giảm, nơi thánh chẳng tăng, trong sanh tử chẳng nhiễm, ở Niết Bàn chẳng tịnh. Chúng sanh triệt để mê trái tánh này, chư Phật viên chứng rốt ráo. Mê - chứng dù khác, tánh thường bình đẳng.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Thứ hai là liễu nhân Phật tánh, tức là chánh trí để phát sanh chánh nhân Phật tánh. Do tri thức hoặc là do kinh giáo, nghe biết diệu nghĩa chánh nhân Phật tánh bèn liễu ngộ, biết do một niệm vô minh chướng lấp nguồn tâm, chẳng biết bản thể của cảnh giới sáu trần vốn là không, nhận lầm thật có, đến nỗi khởi tham - sân - si, tạo giết - trộm - dâm, do Hoặc tạo nghiệp, do nghiệp chịu khổ, khiến cho Chánh Nhân Phật Tánh trở thành cái gốc để khởi Hoặc tạo nghiệp chịu khổ. Từ đấy liễu ngộ, bèn muốn bỏ vọng về với chân, hòng mong khôi phục bổn tánh.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Ba là duyên nhân Phật tánh, tức là trợ duyên. Đã liễu ngộ, phải tu tập các thứ thiện pháp ngõ hầu tiêu trừ Hoặc nghiệp, tăng trưởng phước huệ, cốt sao tự chứng được rốt ráo cái lý sẵn có mà ta đã ngộ đó mới thôi!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Xin dùng thí dụ để chỉ rõ: Chánh Nhân Phật Tánh như vàng trong quặng, như lửa trong gỗ, như ánh sáng nơi gương, như mầm trong hạt, dù là sẵn có, nhưng nếu chẳng biết đến, chẳng được các duyên: nung luyện, khoét, dùi, mài giũa, gieo trồng, mưa đẫm... thì vàng, lửa, ánh sáng, mầm mộng vĩnh viễn chẳng khi nào phát sanh được! Như vậy dù có chánh nhân nhưng nếu không duyên, trọn chẳng thể thọ dụng được.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Bởi thế, Phật dạy hết thảy chúng sanh đều là Phật, muốn độ thoát họ; nhưng chúng sanh trọn chẳng liễu ngộ, chẳng chịu tu tập thiện pháp, đến nỗi bao kiếp dài lâu luân hồi sanh tử, không thể thoát được. Do đó, Như Lai rộng bày các phương tiện, tùy cơ chỉ bày, dẫn dắt, mong chúng sanh bỏ vọng theo chân, bỏ trần theo giác.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Cổ nhân nói: “Sanh tử cũng lớn, há chẳng đau đớn ư?” Trộm bàn: Đã chẳng biết nguyên do, dù có đau lòng cũng chẳng ích gì! Nên biết rằng: Hết thảy chúng sanh theo nghiệp lưu chuyển, thọ sanh trong sáu đường, sanh chẳng biết từ đâu đến, chết chẳng biết đi về đâu! Do nhân duyên tội hay phước sẽ thăng hay giáng, xoay vần luân hồi, chẳng lúc nào xong. Như Lai thương xót, dạy nhân duyên “do Hoặc khởi nghiệp, do nghiệp cảm khổ” và bản thể “thường, lạc, ngã, tịnh, tịch chiếu viên dung” khiến chúng sanh hiểu rõ: Do vô minh nên mới có thân này. Vì thế, thân này hoàn toàn thuộc về huyễn vọng, chẳng những không có tứ đại, ngay cả ngũ uẩn cũng đều không. Đã biết ngũ uẩn là không thì Chân Như pháp tánh, Thật Tướng diệu lý sẽ triệt để phô bày trọn vẹn.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Do tùy duyên nên có tứ thánh, lục phàm, khổ - sướng, thăng - trầm khác xa nhau; nhưng duyên có tịnh - nhiễm, nên phải tùy thuộc vào một trong hai duyên ấy. Tùy thuộc nhiễm duyên sẽ khởi Hoặc, tạo nghiệp, luân hồi sáu đường. Tùy thuộc tịnh duyên sẽ đoạn Hoặc chứng Chân, thường trụ Niết Bàn. Do Hoặc nghiệp có nặng và nhẹ nên có đường lành người - trời, đường thiện ác chen lẫn là A-tu-la, và ba ác đạo: súc sanh, địa ngục, ngạ quỷ.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Do Hoặc khởi Hoặc, do nghiệp tạo nghiệp hoặc thiện hoặc ác, trọn chẳng có tướng nhất định, cho nên chỗ phải sanh về sẽ lần lượt thay đổi như bánh xe xoay tít chẳng có đầu mối, chợt lên, chợt xuống. Đã có đủ phiền hoặc, sẽ đều bị nghiệp buộc ràng, theo nghiệp thọ sanh, chẳng thể tự làm chủ được!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Do đoạn chứng (đoạn Hoặc chứng chân) có sâu hay cạn nên người đoạn Kiến Tư Hoặc sẽ chứng quả Thanh Văn, người trừ tập khí sẽ chứng quả Duyên Giác, bậc phá vô minh sẽ chứng quả Bồ Tát. Nếu trừ sạch vô minh, phước huệ viên mãn, công tu đức đến cùng cực, tánh đức phô bày trọn vẹn sẽ chứng Phật Quả. Chứng Phật Quả bất quá chỉ là chứng rốt ráo triệt để những công đức, lực dụng sẵn có trong tâm tánh ngay khi còn thuộc địa vị phàm phu, nay thọ dụng toàn thể những công đức, lực dụng ấy mà thôi, chứ chẳng thêm mảy may gì vào cái tâm tánh ban đầu ấy cả!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Như Thanh Văn, Duyên Giác, Bồ Tát, tuy sở chứng cao thấp bất đồng, nhưng đều chưa thể thọ dụng trọn vẹn những công đức sẵn có nơi tánh. Thế nhưng hết thảy phàm phu lại hướng sức lực chẳng thể nghĩ bàn của tâm tánh ấy vào sáu trần cảnh, khởi tham - sân - si, tạo giết - trộm - dâm, đến nỗi đọa vào ba ác đạo, trầm luân bao kiếp, so ra ai nấy đều như thế, chẳng đáng buồn ư?</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Trước không khởi đầu, sau không kết thúc, dù chứa đựng cả thái hư vẫn chẳng thể lọt ra ngoài, dù nằm lọt trong vi trần cũng chẳng thể lọt vào trong, thanh tịnh sáng sạch, trạm tịch thường hằng, chẳng sanh, chẳng diệt, lìa tướng, lìa danh, là có nhưng chẳng phải có, là không nhưng chẳng phải không. Đấy là Chân Tánh.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Xét ra cái thân địa - thủy - hỏa - phong chỉ là gân, xương, máu, thịt chứa nhóm, mới sanh liền diệt, vừa tươi tốt đã tàn úa. Các xương, đốt chống đỡ như kết gỗ làm nhà, một tấm da phủ ra ngoài như tô bùn trát vách. Bên trong toàn là phân tiểu, máu mủ, mặt ngoài cáu ghét, mồ hôi, lông, tóc; giòi tửa lúc nhúc, chấy rận như sao trời, giả gọi là Người, nào tồn tại cái Ngã! Lại dùng những thứ mình sẵn có là mắt, tai, mũi, lưỡi, thân, ý để bươn bả trong rừng gai góc sắc, thanh, hương, vị, xúc, pháp. Do đó, khởi vô minh tham - sân - si, diệt mất chánh trí Giới - Định - Huệ.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Ngũ Uẩn vốn không, nào ai chịu một phen quán chiếu. Sáu trần vô tánh, người người cho là thật, đến nỗi vạn khổ cùng tụ tập, cứ lầm mãi tánh linh với vọng tâm và huyễn thân. Đúng như kinh Viên Giác nói: “Hết thảy chúng sanh bao thứ điên đảo, nhận lầm tứ đại là thân tướng của mình, nhận lầm duyên ảnh của sáu trần là tâm tướng của mình”.</p>
    </div>

    <div class="my-10 flex items-center justify-center gap-4" aria-hidden="true"><span class="h-px w-20 bg-gradient-to-r from-transparent to-brand-primary"></span><span class="text-xl text-brand-primary">❀</span><span class="h-px w-20 bg-gradient-to-l from-transparent to-brand-primary"></span></div>
    <h3 class="!mt-10 !mb-3">Chú thích:</h3>
    <div class="space-y-2 rounded-xl bg-surface-card px-5 py-4 text-base leading-7 text-text-secondary">
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">40</sup> . Thời xưa dùng những tấm đồng tròn, đánh bóng làm gương soi mặt</p>
    </div>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Giữa "tánh đức" (Phật tánh vốn sẵn có) và "tu đức" (công phu tu tập), mối quan hệ giữa chúng quyết định thế nào đến việc khôi phục tâm tánh vốn có?',
    options: {
      a: 'Tánh đức chỉ tồn tại ở chư Phật, còn chúng sanh phải tích lũy tu đức thì mới bắt đầu khởi tạo tánh đức.',
      b: 'Tu đức là quá trình sáng tạo ra một Phật tánh mới hoàn toàn mà trước đó tâm tánh chưa từng sở hữu.',
      c: 'Tu đức là công hạnh nỗ lực nhằm mài giũa, giúp hiển lộ trọn vẹn tánh đức vốn sẵn có trong tâm tánh.',
      d: 'Tánh đức vốn trọn vẹn nên chỉ cần chấp nhận tánh đức thì công đức tự hiển phát mà không cần đến tu đức.',
    },
    answer: 'c',
  },
  {
    question: 'Hình ảnh tấm gương báu tròn lớn bị bụi phủ, đóng teng được dùng để ẩn dụ cho trạng thái nào của chúng sanh?',
    options: {
      a: 'Đã biến đổi bản thể đồng ban đầu thành chất liệu khác do thuận theo sáu trần cảnh.',
      b: 'Hoàn toàn không có năng lực chiếu soi, phải nhờ vào sự mài giũa từ bên ngoài mới sinh ra quang minh mới.',
      c: 'Mê muội nơi tánh đức, không chịu khởi tu đức nên ánh quang minh bị lấp lấp dù thể chất vốn sẵn có sáng sạch.',
      d: 'Đã đánh mất hoàn toàn bản thể tâm tánh ban đầu do trải qua vô số kiếp chịu khổ trong luân hồi.',
    },
    answer: 'c',
  },
  {
    question: 'Trong các ẩn dụ về Ba nhân Phật tánh, hành động như "nung luyện quặng, khoét dùi gỗ, mài giũa gương, gieo trồng mưa đẫm" đại diện cho yếu tố nào?',
    options: {
      a: 'Liễu nhân Phật tánh',
      b: 'Chánh nhân Phật tánh',
      c: 'Vọng tình biến hiện',
      d: 'Duyên nhân Phật tánh',
    },
    answer: 'd',
  },
  {
    question: 'Nguyên nhân cốt lõi nào tạo ra sự biệt lập về thọ dụng khổ - vui, thăng - trầm giữa Chư Phật và Chúng sanh dù tâm tánh bổn thể bình đẳng?',
    options: {
      a: 'Do Chư Phật nương theo Tịnh duyên (xứng tánh thuận tu), còn Chúng sanh chạy theo Nhiễm duyên (trái tánh nghịch tu).',
      b: 'Do sự chênh lệch về thời gian tồn tại của bản thể tâm tánh.',
      c: 'Do sáu trần cảnh tự nó có sức mạnh tiêu diệt Phật tánh của phàm phu.',
      d: 'Do Chư Phật tích lũy được các năng lực hoàn toàn mới bên ngoài bản tánh.',
    },
    answer: 'a',
  },
  {
    question: 'Khi thực hành quán chiếu Bát Nhã thậm thâm và "soi thấy năm uẩn đều không", trạng thái nào được miêu tả sẽ xảy ra?',
    options: {
      a: 'Năm uẩn bị diệt trừ tiêu tan thành hư vô hoàn toàn.',
      b: 'Phân chia rõ ràng thân tứ đại và tâm thức thành hai thực thể độc lập.',
      c: 'Toàn thể huyễn vọng trở về bản thể Chân Như diệu tâm, giống như gió lặng sóng yên, băng tan thành nước.',
      d: 'Rời bỏ hoàn toàn thế gian sáu trần để tìm kiếm một diệu tâm độc lập ở cảnh giới khác.',
    },
    answer: 'c',
  },
  {
    question: 'Theo kinh Viên Giác được dẫn lại, sai lầm nhận thức căn bản nào của chúng sanh dẫn đến các biểu hiện điên đảo?',
    options: {
      a: 'Sử dụng nhãn căn để làm Phật sự của nhĩ căn và ngược lại.',
      b: 'Nhận lầm tứ đại làm thân tướng của mình, nhận lầm duyên ảnh của sáu trần làm tâm tướng của mình.',
      c: 'Coi tánh đức và tu đức là hai yếu tố hoàn toàn giống nhau.',
      d: 'Cho rằng ngũ uẩn và sáu trần hoàn toàn không tồn tại dưới bất kỳ hình thức nào.',
    },
    answer: 'b',
  },
  {
    question: 'Bước đầu tiên cần thiết để một người có thể khởi sự "phản chiếu hồi quang, khôi phục tâm tánh vốn có" là gì?',
    options: {
      a: 'Khởi tâm quy hướng Tam Bảo để y giáo phụng hành.',
      b: 'Tự cậy vào tánh đức sẵn có mà không cần nương tựa vào giáo pháp.',
      c: 'Đoạn tuyệt ngay lập tức mọi hoạt động nhận biết của sáu căn.',
      d: 'Thực hiện biến hóa thần thông như đi trên nước hay ngồi trên hư không.',
    },
    answer: 'a',
  },
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-27-viii-2-luan-ve-tam-tanh',
  slug: 'bai-27-viii-2-luan-ve-tam-tanh',
  title: '2. Luận về tâm tánh',
  type: 'article',
  status: 'published',
  order: 4,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Luận_về_tâm_tánh.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Luận_Về_Tâm_Tánh.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/eUzhuVFfc6g',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/0xF8bJm7PU9k4puAWyabUC?si=YfxUA7lJT--NE0JVmx_9Yg',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận về tâm tánh',
    passPercentage: 70,
    questions,
  },
}

export default lesson

