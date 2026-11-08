import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/7.giai-quyet-nhung-nghi-hoac-thuong-gap/1.luan-ve-su-ly'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-8">
    <header class="mb-2">
      <h2 class="!mt-0">1. Luận về sự - lý</h2>
    </header>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Lý thế gian hay xuất thế gian chẳng ra khỏi hai chữ “tâm tánh”. Sự thế gian và xuất thế gian chẳng ra khỏi hai chữ “nhân quả”. Chúng sanh trầm luân cửu giới, Như Lai chứng Nhất Thừa, nhưng tâm tánh chẳng tăng hay giảm mảy may nào! Sở dĩ thăng - trầm khác xa nhau, khổ vui cách biệt vời vợi là do tu đức nơi nhân địa chẳng giống hệt nhau nên thọ dụng quả địa khác biệt.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Xiển dương Phật pháp thật chẳng phải là chuyện dễ! Chỉ luận về lý tánh thì trung căn, hạ căn chẳng hưởng lợi ích; chuyên nói nhân quả thì người căn cơ bậc thượng thường hay chán nghe. Nhưng nhân quả và tâm tánh nếu tách rời ra, cả hai đều tổn; hợp lại, cả hai cùng tốt đẹp. Vì thế, ngài Mộng Đông nói: “Người khéo luận tâm tánh ắt chẳng bỏ lìa nhân quả. Người tin sâu nhân quả ắt rốt cuộc hiểu rõ ràng tâm tánh”. Lý này lẽ tất nhiên là như thế. Nhưng chúng sanh thời Mạt Pháp căn cơ hèn kém, các pháp Thiền - Giáo chỉ cậy vào tự lực, khế ngộ còn khó, huống hồ liễu thoát! Chỉ có pháp môn Tịnh Độ cậy vào Phật lực, chỉ cần đầy đủ lòng tin chân thành, nguyện thiết tha, dù là ngũ nghịch thập ác cũng có thể vĩnh viễn thoát khỏi luân hồi, cao dự hải hội. Đối với pháp tối thượng thừa chẳng thể nghĩ bàn này, hãy nên giảng về cả Lý lẫn Sự, thành thật khuyên ai nấy hãy nên thí pháp này đều khắp.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Nên biết rằng pháp môn Tịnh Độ có đủ cả tất cả sự tướng của bốn pháp giới, đều là pháp giới sự sự vô ngại. Đọc đến rồi tu, chớ nên chấp Lý bỏ Sự. Nếu chấp vào một bên, cả Lý lẫn Sự cùng mất. Như người biết ý căn nhạy bén nhất bèn bỏ cả ngũ căn thì ý căn cũng chẳng thể do đâu tồn tại được. Chỉ nên dùng Sự để hiển Lý, dùng Lý dung hội Sự mới chẳng sai lầm. Vì vậy, mới nói yếu chỉ của Tịnh Độ là “toàn Sự tức Lý”. Lý - Sự viên dung bèn khế hợp bổn thể. Tôi biết sư đã ăn no cơm vua từ lâu<sup class="ml-0.5 text-xs font-semibold text-brand-accent">38</sup> , nhưng vẫn cứ miệt mài hiến lời hèn mọn, chẳng qua để giãi bày tấc lòng thành của đứa con túng quẫn mong được trở về nhà, cũng như mong rửa sạch cái tội báng pháp trước đây đó thôi!<sup class="ml-0.5 text-xs font-semibold text-brand-accent">39</sup></p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Người thông minh đời nay tuy học Phật pháp, nhưng chưa thân cận khắp các thiện tri thức, đa phần chuyên trọng lý tánh, bài bác, vứt bỏ nhân quả và những chuyện tu hành về mặt Sự. Đã bác Sự Tu, nhân quả thì lý tánh cũng mất. Bởi thế, thường có hạng tài cao, ngôn từ kinh động cả quỷ thần, nhưng xét đến hành vi lại chẳng khác gì bọn vô tri vô thức đầu đường xó chợ. Gốc bệnh đều là do bác Sự Tu và nhân quả gây ra cả, khiến cho bậc thượng trí uổng công nảy lòng thương xót, kẻ hạ ngu bắt chước làm càn theo. Ấy là dùng thân mình báng pháp, tội lỗi vô lượng.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Biết chẳng khó, làm được mới khó. Đời có hạng người rỗng tuếch, nghe được lý “tâm, Phật, chúng sanh cả ba không sai biệt”, hoặc do duyệt kinh sách bên Giáo, tham thiền, ngộ được lý này, liền cho rằng mình giống như Phật, cần gì phải tu phải chứng, bèn phóng túng tâm ý, đối với hết thảy cảnh duyên lầm lạc bảo: “Sáu trần chính là Giác, tham - sân - si chính là Giới - Định - Huệ, cần gì phải chế tâm nhiếp thân, không dây mà tự trói mình?” Thứ kiến giải này hèn kém nhất; nghĩa là chấp Lý phế Sự, bác không nhân quả có khác gì dùng bánh vẽ để khỏi đói, cất nhà trên không, tự mình lầm, khiến người lầm, há chẳng phải là tội lỗi cực điểm hay sao? Dùng thiện nhân chuốc lấy quả ác, tam thế chư Phật gọi kẻ ấy là kẻ đáng thương xót vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Người đời nay phần nhiều ưa bàn xuông, chẳng chuộng thực sự tu tập. Khuyên tu Tịnh nghiệp, hiển nhiên là nên tu cả Sự lẫn Lý, nhưng phải đặt nặng việc tu về mặt Sự làm phương cách tu trì. Vì sao vậy? Do đối với người hiểu rõ Lý thì toàn Sự tức Lý, suốt ngày Sự Trì chính là suốt ngày Lý Trì. Nếu chưa thể hiểu thật rõ về Sự và Lý, vừa nghe nói đến Lý Trì liền biết nghĩa ấy thâm diệu, rất hợp với cái tính lười nhác, biếng trễ, sợ phải trì niệm nhọc nhằn của mình, bèn chấp Lý phế Sự. Sự đã phế thì Lý cũng chỉ thành bàn xuông mà thôi!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Sự Trì là tin có đức A Di Đà Phật ở Tây phương, chưa thấu hiểu “tâm này làm Phật, tâm này là Phật”, nhưng cứ quyết chí nguyện cầu vãng sanh như con nhớ mẹ, chẳng lúc nào tạm quên. Đấy là chưa đạt lý tánh nhưng cứ y theo Sự mà tu trì.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Lý Trì là tin đức A Di Đà Phật ở Tây phương tâm ta sẵn có, do tâm ta tạo. “Tâm sẵn có” nghĩa là tâm vốn có đủ lý này. “Tâm tạo” là nương theo cái lý sẵn có ấy để khởi tu thì lý ấy mới có thể hiển hiện được; vì thế gọi là “tạo”. “Tâm sẵn có” chính là lý thể, “tâm tạo” là sự tu. “Tâm sẵn có” chính là “tâm này là Phật”. “Tâm tạo” chính là “tâm này làm Phật”. “Tâm này làm Phật” chính là xứng tánh khởi tu. “Tâm này là Phật” chính là toàn tu tại tánh. Tu đức hữu công tánh đức mới hiển, dù ngộ Lý nhưng vẫn chẳng phế Sự thì mới là “chân tu”. Nếu không sẽ đọa vào tri kiến cuồng vọng chấp Lý phế Sự. Bởi thế, phần dưới mới viết: “Liền dùng hồng danh tự tâm sẵn có, hồng danh do tâm tạo thành để làm cảnh buộc tâm chẳng để tạm quên”.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Thứ giải pháp này ngàn đời chưa từng có, thật là khế lý khế cơ, lý sự viên dung, chẳng phải bậc Pháp Thân Đại Sĩ dễ gì đạt tới được! Sự Trì dù chưa ngộ Lý, há nào phải ra ngoài Lý đâu, bất quá là hành nhân chưa thể viên ngộ tự tâm! Đã ngộ thì Sự chính là Lý, nào có phải cái lý được ngộ nằm ngoài Sự đâu! Lý chẳng lìa Sự, Sự chẳng lìa Lý, Lý - Sự không hai; như thân và tâm con người đồng thời vận dụng cả hai, trọn chẳng hề có chuyện thân và tâm tranh nhau hơn kém! Người thấu đạt dù có muốn chẳng dung hợp cũng chẳng thể được. Tri kiến cuồng vọng, chấp Lý phế Sự thì chẳng thể dung hợp.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Tâm này trọn khắp, thường hằng như hư không. Chúng ta do mê nhiễm nên khởi các chấp trước, ví như hư không do bị các vật ngăn chướng nên chẳng thể trọn khắp, chẳng thường hằng. Nhưng chẳng trọn khắp, chẳng thường hằng chỉ là vọng kiến chấp trước, chứ nào phải hư không thật sự bị các vật ngăn chướng nên chẳng trọn khắp, chẳng thường hằng ư? Vì thế, cái tâm phàm phu cùng với cái tâm bất sanh bất diệt mà đức Như Lai đã chứng trọn chẳng khác gì.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Điều khác biệt là do phàm phu mê nhiễm nên mới đến nỗi như thế, chứ chẳng phải là tâm thể vốn có cải biến! Di Đà Tịnh Độ hoàn toàn nằm trong một niệm tâm tánh của chúng ta, tâm ta vốn sẵn có Phật A Di Đà. Tâm ta sẵn có nên đương nhiên phải thường niệm. Đã thường niệm ắt sẽ cảm ứng đạo giao, tu đức có công tánh đức mới hiển, Sự - Lý viên dung, chúng sanh và Phật chẳng khác! Vì thế nói: “Dùng tâm sẵn có Phật của mình để niệm đức Phật sẵn có trong tâm ta, lẽ nào đức Phật sẵn có trong tâm ta chẳng ứng với cái tâm sẵn có Phật ư?”</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Những điều Tông môn dạy chuyên chỉ về lý tánh, chẳng luận về Sự Tu. Vì sao vậy? Muốn cho con người trước hết biết đến cái lý “nhân quả, tu chứng, phàm thánh, chúng sanh - Phật chẳng phân biệt”, để rồi y theo cái lý ấy mà bắt đầu tu nhân chứng quả, siêu phàm nhập thánh, đấy chính là sự “chúng sanh thành tựu Phật đạo” vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Luận rạch ròi thì Phật pháp chẳng ngoài Chân Đế và Tục Đế. Trong Chân Đế, một pháp chẳng lập, như thường nói: “Thật Tế lý địa chẳng dính mảy trần”. Trong Tục Đế, không pháp nào chẳng đủ, như thường nói: “Trong cửa Phật sự, chẳng bỏ một pháp”. Trong Giáo, xiển dương cả Tục lẫn Chân, nhưng đa phần nói về Tục Đế. Bên Tông thì chính ngay nơi Tục nói về Chân, nhưng quét sạch tướng Tục.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Phải biết rằng: Chân và Tục đồng thể, hoàn toàn chẳng phải là hai vật. Ví như tấm gương báu tròn lớn, rỗng sáng chiếu soi cùng tột, trọn chẳng có một vật. Tuy trọn chẳng có một vật, nhưng nếu người Hồ đến, gương hiện bóng người Hồ, người Hán đến, hiện bóng người Hán, sâm la vạn tượng cùng đến đều cùng hiện. Dù bao tướng cùng hiện, vẫn trọn chẳng có một vật. Tuy trọn chẳng có một vật, chẳng trở ngại các tướng cùng hiện. Nơi “các tướng cùng hiện” đó, nhà Thiền chuyên nói “trọn chẳng có một vật”. Nơi “trọn chẳng có một vật” ấy, Giáo dạy rõ “các tướng cùng hiện”. Như vậy, nơi Sự Tu nhà Thiền hiển rõ lý tánh, chẳng bỏ Sự Tu. Nơi lý tánh, Giáo giảng Sự Tu quy về lý tánh. Đấy gọi là “xứng tánh khởi tu, toàn tu tại tánh, bất biến tùy duyên, tùy duyên bất biến, Sự - Lý cùng đạt, Tông - Giáo bất nhị” vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Cái gọi là Niệm Phật Tam Muội nói tưởng dễ dàng, nhưng chứng đạt thật khó. Hãy nên nhiếp tâm niệm thiết tha, lâu ngày sẽ tự đạt. Dù chẳng thể tự đạt, nhưng do công đức tin chân thành, nguyện thiết tha, nhiếp tâm tịnh niệm ắt sẽ ngầm được Phật tiếp dẫn, đới nghiệp vãng sanh. Sự Nhất Tâm theo cách phán định của đại sư Ngẫu Ích người tu hành đời nay còn chưa thực hiện nổi, huống chi Lý Nhất Tâm? Phải đoạn được Kiến Tư Hoặc mới gọi là Sự Nhất Tâm. Phá vô minh, chứng pháp tánh gọi là Lý Nhất Tâm. Nếu là bậc “trong ngầm hạnh Bồ Tát, ngoài hiện làm phàm phu” thì đối với hai loại Nhất Tâm này chẳng khó khăn gì. Nếu thật sự là phàm phu đầy dẫy triền phược thì Sự Nhất Tâm còn chưa dễ được, huống hồ là Lý Nhất Tâm ư? Hãy xem kỹ lá thư trao đổi rất dài giữa Quang tôi và vị cư sĩ nọ ở Vĩnh Gia ắt sẽ biết rõ. Đến chừng nào ngộ Vô Sanh rồi, gìn giữ chắc chắn, tiêu sạch các tập khí dư thừa, sẽ tự hiểu rõ điều ấy, cần gì phải hỏi trước? Như người uống nước, nóng lạnh tự biết. Nếu không dù người uống có nói đích xác mười phần, người chưa uống rốt cuộc vẫn chẳng biết được mùi vị ra sao!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Có lẽ cư sĩ thấy ngộ được Vô Sanh Nhẫn là chuyện dễ dàng, e tự mình ngộ rồi nhưng chưa biết cách gìn giữ chắc chắn cái ngộ ấy ắt sẽ bị các tập khí thừa sót khiến cho sở ngộ lại bị mất đi nên mới hỏi như vậy chăng? Chân Vô Sanh Nhẫn thật chẳng phải là chuyện nhỏ đâu, đấy chính là “phá vô minh - chứng pháp tánh”; tối thiểu phải là bậc Sơ Trụ trong Viên Giáo, bậc Sơ Địa trong Biệt Giáo mới chứng được, nói sao dễ dàng thế?</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Mong ông hãy hành theo những điều Quang đã nói trong Văn Sao, ắt sẽ hiểu duyên do của pháp môn Tịnh Độ, ắt tín - nguyện - hạnh sẽ chẳng bị những dị thuyết của hết thảy thiện tri thức đoạt mất. Sau đấy, nếu còn sức thì chẳng ngại nghiên cứu thêm các kinh luận Đại Thừa để mở mang trí thức, hòng làm căn cứ hoằng truyền Tịnh Độ. Như vậy, dù là phàm phu vẫn có thể tùy cơ lợi sanh, hành Bồ Tát đạo, đừng lầm mong cao xa, chỉ e Sự - Lý chẳng rành, khó tránh khỏi bị ma dựa. Lá thư dài gởi vị cư sĩ nọ ở Vĩnh Gia chuyên trị chứng bịnh này. Bịnh cư sĩ ấy với bịnh của ông tên gọi khác nhau, nhưng tánh chất giống hệt, nên Quang chẳng muốn nói nhiều.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Chỉ mong ông nhờ lá thư ấy mà lãnh hội. Phải biết người sau khi đã ngộ dù tu trì giống hệt như người chưa ngộ, nhưng tâm niệm khác biệt. Người chưa ngộ Vô Sanh, cảnh chưa xảy đến đã mong sẵn, cảnh hiện tiền bèn nắm níu, cảnh đã qua rồi vẫn nghĩ nhớ. Người ngộ Vô Sanh thì cảnh tuy sanh diệt, tâm chẳng sanh diệt, hệt như gương sáng, đến không dính, đi không tăm tích. Tâm ứng theo cảnh như gương hiện bóng, trọn chẳng có mảy may ý niệm nào chấp trước, quyến luyến. Dù đối cảnh vô tâm, vẫn sóng trào biển hạnh, mây bủa cửa từ. Đối với luân lý, cương thường thế gian và việc thượng hoằng hạ hóa đều mỗi mỗi nhận hiểu đúng, thật sự thực hành, dù táng thân mất mạng chẳng chịu vượt phạm.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Đừng tưởng là đối cảnh vô tâm rồi phế hết các sự tu trì tự lợi lợi tha, thượng hoằng hạ hóa. Nếu hiểu như vậy sẽ vướng sâu vào Không Ma, đọa vào Ngoan Không. Do đấy, bác không nhân quả, buông lung làm càn trở thành đem phàm lạm thánh, hoại loạn Phật pháp, lầm lạc chúng sanh, tạo thành chủng tử A Tỳ địa ngục. Điều này quan hệ hết sức sâu xa, bất đắc dĩ Quang tôi phải vì ông trình bày sơ lược lợi hại.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Nếu ước trên Thật Tế lý thể để luận thì phàm - thánh, chúng sanh - Phật, nhân - quả, tu - chứng đều chẳng thể được. Nếu luận trên phương diện pháp môn tu trì thì trên từ Như Lai đã thành Phật đạo, dưới đến chúng sanh trong A Tỳ đều chẳng ra ngoài nhân quả. Hiểu rõ lý tánh nhưng chẳng phế Sự Tu bèn là Chánh Tri, chấp lý tánh phế Sự Tu bèn thành tà kiến. Sai chỉ hào ly, lập thành địa ngục và Phật quả khác biệt.</p>
    </div>

    <div class="my-10 flex items-center justify-center gap-4" aria-hidden="true"><span class="h-px w-20 bg-gradient-to-r from-transparent to-brand-primary"></span><span class="text-xl text-brand-primary">❀</span><span class="h-px w-20 bg-gradient-to-l from-transparent to-brand-primary"></span></div>
    <h3 class="!mt-10 !mb-3">Chú thích:</h3>
    <div class="space-y-2 rounded-xl bg-surface-card px-5 py-4 text-base leading-7 text-text-secondary">
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">38</sup> . Cơm vua (vương thiện): Vương thiện là cỗ bàn của nhà vua. Đây là điển tích lấy từ kinh Pháp Hoa, phẩm Thọ Ký: Các vị La Hán như Ca Chiên Diên, Tu Bồ Đề, Mục Kiện Liên... nghe Phật chỉ dạy đạo Nhất Thừa, bèn biết mình cũng có khả năng thành Phật, nhưng vẫn chưa đủ tự tin, bèn cầu xin Phật thọ ký, giống như kẻ đói thấy cỗ bàn của vua chẳng dám ăn, phải chờ vua cho phép. “Ăn no cơm vua” ý nói vị Tăng trong đoạn thư này đã hiểu lý Nhất Thừa, đã tự tin mình có khả năng thành Phật.</p>
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">39</sup> . Trước khi hiểu đạo Phật, tổ Ấn Quang mê Nho nên kịch liệt bài báng đạo Phật.</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo đoạn trích, mối quan hệ giữa tâm tánh (Lý) và nhân quả (Sự) được thể hiện như thế nào thông qua lời của ngài Mộng Đông?',
    options: {
      a: 'Người khéo luận tâm tánh chẳng bỏ lìa nhân quả, người tin sâu nhân quả rốt cuộc sẽ hiểu rõ tâm tánh.',
      b: 'Chỉ có việc bàn luận lý tánh mới mang lại lợi ích thiết thực cho người thuộc trung căn và hạ căn.',
      c: 'Tâm tánh và nhân quả là hai đường lối tu tập độc lập, người căn cơ cao chỉ cần chú trọng tâm tánh.',
      d: 'Nhân quả là phương pháp tạm thời dành cho kẻ hạ ngu, còn tâm tánh mới là cứu cánh của bậc thượng trí.',
    },
    answer: 'a',
  },
  {
    question: 'Vì sao pháp môn Tịnh Độ được xem là đặc biệt thích hợp với chúng sanh thời Mạt Pháp?',
    options: {
      a: 'Tịnh Độ chỉ dành riêng cho những bậc đã chứng Vô Sanh Pháp Nhẫn từ trước.',
      b: 'Người tu Tịnh Độ không cần đến Tín và Nguyện mà vẫn có thể chứng đạt Lý Nhất Tâm dễ dàng.',
      c: 'Pháp môn này không đòi hỏi thực hành sự tướng mà chỉ tập trung ngộ lý tánh tối thượng.',
      d: 'Thiền và Giáo đòi hỏi tự lực rất khó khế ngộ, trong khi Tịnh Độ cậy vào Phật lực để liễu thoát luân hồi.',
    },
    answer: 'd',
  },
  {
    question: 'Căn bệnh chung của nhiều người thông minh học Phật thời nay được tác giả chỉ ra là gì?',
    options: {
      a: 'Quá chú trọng vào việc trì tụng sự tướng mà quên mất việc học hỏi kinh điển Đại Thừa.',
      b: 'Chuyên trọng lý tánh, bài bác và vứt bỏ nhân quả cùng các hành vi tu hành về mặt Sự.',
      c: 'Không tin vào khả năng thành Phật của bản thân nên chỉ mong cầu các quả vị nhỏ nát.',
      d: 'Chỉ chăm chăm tu tập Bồ Tát đạo mà bỏ quên việc giữ gìn cương thường luân lý thế gian.',
    },
    answer: 'b',
  },
  {
    question: 'Theo văn bản, thế nào là "Sự Trì" trong pháp môn Tịnh Độ?',
    options: {
      a: 'Tin có Đức Phật A Di Đà ở Tây Phương, dù chưa thấu đạt lý tánh nhưng quyết chí niệm Phật như con nhớ mẹ.',
      b: 'Hiểu thấu suốt lý "tâm này làm Phật, tâm này là Phật" rồi mới bắt đầu niệm Phật.',
      c: 'Chỉ niệm Phật khi tâm đã hoàn toàn sạch bóng các vọng niệm và tập khí dư thừa.',
      d: 'Buông bỏ hết mọi hình thức niệm Phật bên ngoài để chú trọng quán chiếu tâm tính bên trong.',
    },
    answer: 'a',
  },
  {
    question: 'Khái niệm "Tâm sẵn có" và "Tâm tạo" tương ứng với những khía cạnh nào trong tu tập?',
    options: {
      a: '"Tâm sẵn có" là Sự tu, "Tâm tạo" là Lý thể.',
      b: '"Tâm sẵn có" đại diện cho phàm phu, "Tâm tạo" đại diện cho Chư Phật.',
      c: '"Tâm sẵn có" là lý thể ("tâm này là Phật"), "Tâm tạo" là sự tu ("tâm này làm Phật").',
      d: '"Tâm sẵn có" là Chân Đế, "Tâm tạo" là tà kiến cuồng vọng.',
    },
    answer: 'c',
  },
  {
    question: 'Hậu quả nghiêm trọng của việc chấp Lý phế Sự, coi "tham-sân-si chính là Giới-Định-Huệ" là gì?',
    options: {
      a: 'Giúp người tu nhanh chóng chứng đạt Lý Nhất Tâm mà không cần qua Sự Nhất Tâm.',
      b: 'Làm cho công phu niệm Phật chuyển thành hành vi của bậc Pháp Thân Đại Sĩ.',
      c: 'Khiến người tu vướng sâu vào Không Ma, đọa vào Ngoan Không, tạo nhân đọa địa ngục A Tỳ.',
      d: 'Chỉ ảnh hưởng đến bản thân người đó chứ không gây hại cho người khác.',
    },
    answer: 'c',
  },
  {
    question: 'Mối quan hệ giữa Chân Đế và Tục Đế được mô tả qua hình ảnh so sánh nào?',
    options: {
      a: 'Như tấm gương báu rỗng sáng không một vật nhưng sẵn sàng hiện tất cả hình bóng khi có duyên đến.',
      b: 'Như cất nhà trên không trung hay dùng bánh vẽ để bớt đói.',
      c: 'Như nước và lửa không thể dung hòa trong cùng một khoảng không.',
      d: 'Như người đói nhìn thấy cỗ bàn của nhà vua mà không dám ăn.',
    },
    answer: 'a',
  },
  {
    question: 'Theo phán định được nhắc tới trong bài, điều kiện để đạt được "Sự Nhất Tâm" là gì?',
    options: {
      a: 'Phải đoạn trừ được Kiến Tư Hoặc.',
      b: 'Phá được vô minh và chứng được pháp tánh.',
      c: 'Phải đạt đến quả vị Sơ Địa trong Biệt Giáo.',
      d: 'Chỉ cần ngộ được lý "tâm, Phật, chúng sanh cả ba không sai biệt".',
    },
    answer: 'a',
  },
  {
    question: 'Điểm khác biệt căn bản trong tâm niệm khi đối cảnh giữa người ngộ Vô Sanh và người chưa ngộ là gì?',
    options: {
      a: 'Người ngộ Vô Sanh phế bỏ hoàn toàn việc tu trì tự lợi lợi tha, còn người chưa ngộ vẫn miệt mài làm.',
      b: 'Người chưa ngộ không thể niệm Phật, còn người ngộ Vô Sanh mới có thể bắt đầu niệm Phật.',
      c: 'Người ngộ Vô Sanh có thể tự do phạm các quy tắc luân lý thế gian mà không bị mắc nhân quả.',
      d: 'Người chưa ngộ luôn dính mắc vào quá khứ, hiện tại, tương lai; người ngộ thì tâm chẳng sanh diệt theo cảnh, đến không dính, đi không tăm tích.',
    },
    answer: 'd',
  },
  {
    question: 'Tại sao đối với người chưa thấu hiểu thật rõ về Lý và Sự, tác giả lại khuyên nên đặt nặng việc tu về mặt "Sự"?',
    options: {
      a: 'Vì nếu vừa nghe nói Lý Trì liền chấp vào đó để biện hộ cho sự lười nhác, biếng trễ, khiến Lý cũng thành bàn suông.',
      b: 'Vì Sự tu giúp đoạn trừ vô minh nhanh hơn việc hiểu thấu lý tánh.',
      c: 'Vì tu về mặt Sự dễ dàng đạt đến Lý Nhất Tâm hơn mà không cần nương vào Phật lực.',
      d: 'Vì mặt Lý hoàn toàn không có giá trị gì đối với pháp môn Tịnh Độ.',
    },
    answer: 'a',
  },
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-26-viii-1-luan-ve-su-ly',
  slug: 'bai-26-viii-1-luan-ve-su-ly',
  title: '1. Luận về sự - lý',
  type: 'article',
  status: 'published',
  order: 3,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Lý_Sự_trong_tu_tập.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Đạo_Trình_Viên_Dung.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/jQrTAP9s0jI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3HRbRQxBOoylhIZ3OSGUPH?si=wrl_SYWuQ_21EXEjvT8ixw',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận về sự - lý',
    passPercentage: 70,
    questions,
  },
}

export default lesson
