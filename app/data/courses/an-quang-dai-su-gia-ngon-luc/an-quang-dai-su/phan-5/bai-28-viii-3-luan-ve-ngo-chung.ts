import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/7.giai-quyet-nhung-nghi-hoac-thuong-gap/3.luan-ve-ngo-chung'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-8">
    <header class="mb-2">
      <h2 class="!mt-0">3. Luận về ngộ chứng</h2>
    </header>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Từ xưa, cao tăng hoặc cổ Phật tái sanh, hoặc Bồ Tát thị hiện đều thường hiện thân làm phàm phu, trọn chẳng hề nói ta là Phật, ta là Bồ Tát. Vì thế, kinh Lăng Nghiêm nói: “Sau khi ta diệt độ, ta truyền các Bồ Tát và các A La Hán, ứng thân sanh trong thời mạt pháp, hiện các thứ thân để độ những kẻ đang luân chuyển, nhưng trọn chẳng tự bảo mình thật sự là Bồ Tát hay A La Hán, tiết lộ nhân duyên bí mật của Phật, chỉ thường nhún nhường nói mình là kẻ mạt học”. Chỉ trừ lúc lâm chung, bèn ngầm để lại lời phó chúc.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Trí Giả Đại Sư thật sự là hóa thân của Phật Thích Ca, đến lúc lâm chung, có người hỏi ngài đã chứng đến địa vị nào. Ngài đáp:“Nếu tôi chẳng lãnh chúng ắt sẽ tịnh được sáu căn, vì tổn mình lợi người nên chỉ đạt được Ngũ Phẩm. Do vậy, vẫn còn thuộc địa vị phàm phu!” Ngũ Phẩm tức là địa vị Quán Hạnh trong Viên Giáo, sở ngộ bằng với chư Phật, đã chế phục hoàn toàn ngũ trụ phiền não, nhưng vẫn chưa đoạn được Kiến Hoặc. Ngài Trí Giả lúc lâm chung còn chẳng hé lộ sở chứng thật sự là vì để khích lệ kẻ hậu học gắng chí tinh tu, chẳng đến nỗi được chút ít đã cho là đủ, hoặc còn là phàm phu mà đã lạm xưng là thánh!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Nay bè lũ ma khoe xằng mình đắc đạo, hoại loạn Phật pháp, lầm lạc chúng sanh, là kẻ đại vọng ngữ. Cái tội đại vọng ngữ đó nặng hơn tội ngũ nghịch, thập ác trăm ngàn vạn ức lần. Thầy trò chúng nó sẽ đọa mãi trong địa ngục A Tỳ trải qua Phật sát vi trần số kiếp<sup class="ml-0.5 text-xs font-semibold text-brand-accent">41</sup> , luôn chịu sự khổ cùng cực, không cách nào thoát khỏi. Sao đành vì hư danh, lợi lạc phù phiếm một thời để phải chịu hình phạt thảm khốc dài cả kiếp? Danh lợi làm con người lầm lạc đến nỗi như thế đấy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Niệm Phật, xem kinh, ngộ lý Nhị Không, chứng pháp Thật Tướng là ước trên phương diện tự tỉnh ngộ tu trì để dạy về nhân hiện tại, quả mai sau. Chớ nên càn rỡ tự đắc, bảo là ngay trong đời này mình sẽ đạt được như thế. Chứng Thật Tướng ngay trong đời này chẳng phải là không có người làm được, chỉ e hiền khiết<sup class="ml-0.5 text-xs font-semibold text-brand-accent">42</sup> không có căn lành ấy! Nếu chẳng trình bày rõ nguyên do, e rằng ông sẽ lầm mong chứng thánh, chí cao nhưng hạnh chẳng xứng, lâu ngày ắt sẽ mất trí đâm cuồng, chưa đắc bảo đã đắc, chưa chứng bảo đã chứng, cầu thăng hóa đọa, biến khéo thành vụng. Xét đến kết quả, khó tránh chìm đắm mãi mãi trong nẻo ác; chẳng những mai một tánh linh của chính mình, lại còn cô phụ Phật ân nữa!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Đối với hai thứ Không Lý, nếu chỉ luận về ngộ thì hàng phàm phu lợi căn cũng ngộ được. Như những người thuộc vào địa vị Danh Tự của Viên Giáo, tuy chẳng chế phục được mảy may ngũ trụ phiền não nào, nhưng sở ngộ của họ và sở ngộ của chư Phật không hai, không khác (Ngũ trụ: Kiến Hoặc là một trụ, Tư Hoặc gồm ba trụ. Trần Sa Hoặc và Vô Minh Hoặc gộp thành một trụ). Nếu nói theo nhà Thiền, những kẻ ấy gọi là bậc đại triệt đại ngộ, bên Giáo gọi là “đại khai viên giải”.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">“Đại triệt đại ngộ” chẳng phải là chỉ hiểu loáng thoáng mơ hồ đâu nhé! Như Bàng cư sĩ (Bàng Long Uẩn) nghe Mã Tổ bảo:“Đợi khi nào ông một hơi uống cạn nước Tây Giang, ta sẽ nói cho ông hay” liền đốn vong huyền giải. Ngài Đại Huệ Cảo nghe ngài Viên Ngộ bảo: “Gió nồm từ Nam thổi, điện gác mát mẻ sao!” cũng ngộ như thế. Tổ Trí Giả tụng kinh Pháp Hoa đến câu “gọi là chân tinh tấn, là chân pháp để cúng dường Như Lai” của phẩm Dược Vương Bổn Sự liền hoát nhiên đại ngộ, lặng lẽ nhập định, tận mắt thấy một hội Linh Sơn nghiễm nhiên chưa tan. Ngộ như thế mới gọi là “đại triệt đại ngộ, đại khai viên giải!”</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Nếu bàn về chuyện chứng được pháp Thật Tướng thì hàng phàm phu sát đất chẳng thể làm được. Nam Nhạc Tư đại thiền sư là “đắc pháp sư”<sup class="ml-0.5 text-xs font-semibold text-brand-accent">43</sup> của ngài Trí Giả, có đại trí huệ, có đại thần thông, lúc lâm chung, có người hỏi đến sở chứng, ngài bảo: “Tôi lúc đầu mong đạt được Đồng Luân, nhưng do lãnh chúng quá sớm nên chỉ đạt được Thiết Luân mà thôi!” (Đồng Luân tức là Thập Trụ, phá một phần vô minh, vừa mới dự vào Thật Báo Tịnh Độ, chứng được một phần Tịch Quang Tịnh Độ. Bậc Sơ Trụ có thể hiện thân làm Phật giáo hóa chúng sanh trong một trăm tam thiên đại thiên thế giới. Nhị Trụ giáo hóa được một ngàn, Tam Trụ giáo hóa bốn ngàn. Mỗi địa vị cứ gấp mười lần hơn. Thiết Luân tức là địa vị thứ mười trong Thập Tín. Sơ Tín đoạn Kiến Hoặc, Thất Tín đoạn Tư Hoặc, Bát, Cửu, Thập Tín phá được Trần Sa, chế phục vô minh. Ngài Nam Nhạc Huệ Tư thị hiện chỉ chứng được ngôi thứ 10 trong Thập Tín, tức là vẫn chưa chứng được pháp Thật Tướng. Phá một phẩm vô minh liền chứng Sơ Trụ, mới được gọi là chứng pháp Thật Tướng).</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Trí Giả đại sư là hóa thân của Phật Thích Ca. Lâm chung có người hỏi ngài chứng được địa vị nào, ngài đáp: “Nếu ta chẳng lãnh chúng, ắt sẽ tịnh được sáu căn (tức là nếu ngài không thâu nạp, giáo hóa đồ chúng, ngài sẽ chứng được Thập Tín, sáu căn thanh tịnh như trong phẩm Pháp Sư Công Đức kinh Pháp Hoa đã nói). Do tổn mình lợi người, nên chỉ chứng được Ngũ Phẩm” (Ngũ Phẩm tức là địa vị Quán Hạnh, chế phục trọn vẹn Ngũ Trụ Hoặc, nhưng vẫn chưa đoạn được Kiến Hoặc). Ngẫu Ích đại sư lâm chung có bài kệ như sau:</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Danh tự vị trung chân Phật nhãn,<br>Vị tri tất cánh phó hà nhân</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">(Phật nhãn hãy còn nơi danh tự,<br>Giao ai rốt cuộc biết đâu là!)</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">(Người thuộc về địa vị danh tự đã viên ngộ Tạng Tánh giống như chư Phật, nhưng chưa thể chế phục được Kiến Hoặc, huống hồ là đoạn nổi! Thân phận những bậc đại triệt đại ngộ trong đời mạt đa phần giống như vậy. Tạng Tánh chính là Như Lai Tạng Diệu Chân Như tánh, là tên gọi khác của pháp Thật Tướng).</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Ngẫu Ích đại sư thị hiện chỉ chứng địa vị Danh Tự, ngài Trí Giả thị hiện chỉ chứng được Ngũ Phẩm, ngài Nam Nhạc thị hiện chỉ chứng được Thập Tín. Tuy bổn địa của ba vị đại sư đều chẳng thể suy lường được, nhưng các ngài thị hiện chỉ chứng ba địa vị Danh Tự, Quán Hạnh, Tương Tự, đủ thấy Thật Tướng chẳng dễ chứng. Vì kẻ hậu tấn khó thể vượt hơn các ngài được, chỉ e chúng nó chưa chứng đã bảo là chứng nên các ngài lấy thân mình thuyết pháp ngõ hầu người đời sau tự biết hổ thẹn, chẳng dám làm xằng đó thôi! Cái ân thị hiện địa vị sở chứng vào lúc sau cùng của ba vị đại sư thật là nghiền xương, nát thân khó báo đáp nổi! Ông hãy tự suy gẫm coi mình thật sự có vượt trỗi ba vị đại sư ấy chăng?</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Còn như cho rằng: “Niệm Phật, xem kinh, vun bồi căn lành, sau khi vãng sanh Tây Phương, thường hầu Phật Di Đà, cao dự hải hội, tùy theo công hạnh cạn hay sâu ắt chứng được Thật Tướng sớm hay trễ” thì đấy là lời quyết định vô ngại, là điều hết thảy những người vãng sanh cùng chứng cùng đắc vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Ngộ là phân minh rành rành như mở cửa thấy núi, vẹt mây thấy trăng. Lại như người mắt sáng đích thân thấy đường về nhà, cũng như kẻ nghèo đã lâu chợt mở toang kho báu. Chứng là như theo đường về nhà, dừng chân ngồi yên, cũng như giữ lấy kho báu ấy, tùy ý hưởng dùng. Phàm phu đại tâm cũng có thể liễu ngộ giống như chư Phật, nhưng về mặt Chứng thì Sơ Địa còn chẳng thể biết nổi chỗ giở chân, đặt chân của bậc Nhị Địa. Hiểu được ý nghĩa Chứng và Ngộ rồi, tự nhiên sẽ chẳng khởi lòng tăng thượng mạn, chẳng nảy ý lui sụt, mà cái tâm cầu sanh Tịnh Độ dù vạn con trâu cũng chẳng kéo lui lại được!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Trí Giả đại sư được người đời xưng tụng là hóa thân của Phật Thích Ca. Chẳng ai biết được sở chứng của Ngài, nhưng Phật hiện thân tạo pháp tắc cho chúng sanh. Vì thế, đại sư thị hiện vẫn thuộc địa vị phàm phu, bảo: “Nếu ta chẳng lãnh chúng, ắt sẽ tịnh được sáu căn”. Ngài dùng chính thân mình để răn người, hiện thân thuyết pháp. Thoạt đầu, đại sư mong đoạn Hoặc chứng Chân, đạt thẳng lên Thập Địa hay Đẳng Giác. Do phải hoằng pháp lợi sanh, bỏ lỡ công phu thiền định của chính mình nên chỉ chứng được địa vị Ngũ Phẩm Quán Hạnh trong Viên Giáo mà thôi! Vì thế ngài nói: “Do tổn mình lợi người nên chỉ đạt được Ngũ Phẩm”.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Ngũ Phẩm là năm thứ: tùy hỷ, đọc tụng, giảng nói, kiêm hành Lục Độ và chánh hành Lục Độ. Địa vị Ngũ Phẩm trong Viên Giáo viên ngộ Tạng Tánh (Tạng tánh là Thật Tướng diệu lý, khi còn triền phược (“tại triền”) gọi là Như Lai Tạng Tánh. Lúc thoát được triền phược gọi là Tịnh Pháp Thân. Nói chung là vì vô minh chưa đoạn nên gọi là Triền) giống hệt sở ngộ của Phật, trọn chẳng khác gì. Đã chế phục trọn vẹn Kiến, Tư, Trần Sa, Vô Minh, Phiền Não nhưng chưa đoạn được Kiến Hoặc. Nếu đoạn được Kiến Hoặc liền chứng Sơ Tín. Đến địa vị Thất Tín mới đoạn sạch Tư Hoặc, thật sự chứng được “lục căn tùy ý chẳng nhiễm sáu trần”. Vì thế gọi là địa vị “lục căn thanh tịnh”.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Đã thế, trong mỗi một căn lại có đủ công đức của sáu căn, làm Phật sự của sáu căn. Do vậy, còn gọi là “lục căn hỗ dụng” (sáu căn dùng lẫn nhau) như trong phẩm Pháp Sư Công Đức của kinh Pháp Hoa đã nói. Ngài Nam Nhạc thị hiện chứng địa vị này. Người thuộc vào địa vị này chẳng những có đại trí huệ, lại còn có đại thần thông, thần thông của Tiểu Thừa A La Hán chẳng thể sánh bằng. Vì thế ngài Nam Nhạc lúc sanh tiền cũng như sau khi tịch luôn có những sự chẳng thể nghĩ bàn khiến kẻ thấy hoặc nghe phát khởi tín tâm.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Nam Nhạc, Trí Giả đều là bậc Pháp Thân Đại Sĩ, địa vị thực chứng của các Ngài nào ai dò được mức cao thâm. Chẳng qua các ngài muốn cổ vũ hậu thế chuyên tinh học đạo nên mới chịu khuất lấp như thế, nào phải đâu các ngài thật sự chỉ chứng địa vị Thập Tín Tương Tự hay Ngũ Phẩm Quán Hạnh! Lũ phàm phu sát đất chúng ta há kham học đòi các ngài được ư? Hãy nên ưa thô trì trọng giới<sup class="ml-0.5 text-xs font-semibold text-brand-accent">44</sup> , nhất tâm niệm Phật, kiêm tu các điều lành thế gian để làm trợ hạnh, noi theo pháp hạnh các vị Vĩnh Minh, Liên Trì thì không ai là chẳng được lợi cả!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Các tông tu trì Phật pháp phải đến mức “hạnh khởi, giải tuyệt” mới được lợi ích thật sự, chỉ riêng Tịnh Tông chẳng tu quán như thế. Nhà Thiền đem một câu thoại đầu hoàn toàn vô nghĩa đặt vào trong tâm, coi như bổn mạng nguyên thần, chẳng kể năm tháng, suốt ngày tham cứu cho đến khi nào cả thân tâm lẫn thế giới đều chẳng biết đến nữa, mới hòng đại triệt đại ngộ; chẳng phải là hạnh khởi giải tuyệt hay sao? Lục Tổ nói: “Chỉ xem kinh Kim Cang liền có thể minh tâm kiến tánh”, đấy chẳng phải là hạnh khởi giải tuyệt ư?</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Theo ngu ý, chữ Khởi nên hiểu là Cực, tức là tận lực đến cùng cực, mới hòng đạt đến cả Năng lẫn Sở cùng mất, nhất tâm phô bày triệt để. Nếu hạnh chưa đến mức cùng cực, dù có quán niệm vẫn còn có Năng, có Sở, vẫn hoàn toàn là tác dụng của phàm tình, hoàn toàn là tri kiến phân biệt, hoàn toàn là tri giải, sao đạt lợi ích chân thật được? Phải tận sức đến cùng cực thì Năng, Sở, tình kiến mới tiêu diệt, chân tâm vốn có mới phát hiện. Bởi thế, thuở xưa có người đầu như cây chết sau chứng đạo phong, rạng rỡ cổ kim. Muốn tu hành được lợi ích phải hoàn toàn chú trọng nơi một chữ Cực vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Người khéo đạt lợi ích thì không gì là chẳng hữu ích, người cam chịu tổn mình sẽ chẳng bị tổn hại gì cả. Người đời nay hay dùng thế trí biện thông để làm vốn nghiên cứu Phật học; vừa biết được chút nghĩa lý đã bảo mình chứng đắc. Từ đấy, tự nghĩ mình cao quý, miệt thị cổ kim. Đừng nói là người hiện đại chẳng đáng để vào mắt, ngay cả những bậc cao tăng từ một ngàn mấy trăm năm trước (đa phần là cổ Phật tái lai, hoặc Pháp Thân Bồ Tát thị hiện) đều bị họ coi tuốt là hạng tầm thường, chẳng đáng noi theo! Chưa đắc bảo đã đắc, chưa chứng khoe đã chứng. Nghe lời họ nói cao chót vót chín tầng trời, xét tâm họ thấp trệt dưới chín tầng đất! Tập nhiễm như thế hãy nên quyết liệt trừ khử. Nếu không, khác nào Đề Hồ đựng trong chén độc, giết người chết tươi!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Nếu có thể niệm niệm quay lại xem xét tự tâm thì chẳng những sẽ được lợi ích nơi các pháp Như Lai đã giảng, ngay cả phiến đá, hòn sỏi tầm thường, chiếc đèn lồng, cây cột ngoài đường, tất cả những hình sắc, thanh âm trong đại địa, không thứ gì chẳng phải là diệu lý Thật Tướng Đệ Nhất Nghĩa Đế! Bởi thế mới nói: “Xưa nay chưa có ai, sao từng mộng thấy được?” Xin hãy tin chắc, gắng sức thực hành.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Những điều lệnh thân<sup class="ml-0.5 text-xs font-semibold text-brand-accent">45</sup> được thấy thật là hy hữu, lạ lùng, có thể nói là có thiện căn từ xưa, nhưng phải ra sức gắng công tu trì thì giấc mộng ấy mới chẳng bị uổng phí. Nếu như vì tri kiến phàm phu, lầm tưởng mình đã được Tam Bảo gia bị, đã dự vào dòng thánh, rồi sanh đại ngã mạn, chưa đắc bảo đã đắc, chưa chứng bảo đã chứng, sẽ thành ra do nhân lành chuốc lấy quả ác. Người đời mạt tâm trí hèn kém thường mắc phải căn bệnh ấy. Câu kinh Lăng Nghiêm: “Chẳng nghĩ là thánh tâm thì gọi là cảnh giới lành, nếu cho là thánh giải sẽ vướng quần tà” chính là nói về tình trạng này. Xin hãy lấy việc tận lực tu trì pháp môn Tịnh Độ để tự khích lệ mình, ngõ hầu tương lai quyết định được hưởng đại lợi ích!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Niệm Phật chú trọng vãng sanh, niệm đến cùng cực cũng có thể minh tâm kiến tánh, phải đâu niệm Phật hoàn toàn chẳng ích lợi gì cho đời hiện tại! Xưa kia, ngài Minh Giáo Tung Thiền Sư, nhật khóa niệm mười vạn lần thánh hiệu Quán Thế Âm, sau này mọi kinh sách thế gian ngài không đọc nhưng đều biết. Cứ xem Tịnh Độ Thập Yếu, Tịnh Độ Thánh Hiền Lục ắt sẽ biết niệm Phật mầu nhiệm, Quang tôi đã nhắc đến nhiều lần trong cuốn Văn Sao hủ lậu của mình. Cư sĩ bảo “niệm Phật vô ích đối với đời này” thì chẳng những chưa thâm hiểu các kinh luận Tịnh Độ, mà ngay cả với cuốn Văn Sao của Quang cũng chỉ cưỡi ngựa xem hoa, chưa đọc hiểu thật kỹ vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Tuy Tịch Quang Tịnh Độ là “đương xứ tức thị” (có thể tạm hiểu là “ngay nơi đây chính là cõi Thường Tịch Quang”, hoặc “hiện hữu ngay tại nơi đây”, hoặc “có thể ngộ nhập ngay nơi đây chẳng cần tìm nơi khác”), nhưng nếu chẳng là bậc trí đoạn rốt ráo, viên chứng Pháp Thân Tỳ Lô Giá Na sẽ chẳng thể triệt để chứng ngộ, đích thân thọ dụng được! Bốn mươi mốt địa vị: Thập Trụ, Thập Hạnh, Thập Hồi Hướng, Thập Địa, Đẳng Giác trong Viên Giáo vẫn còn là “phần chứng” (chứng nhập được ít phần). Nếu ông đã viên chứng được Pháp Thân Tỳ Lô Giá Na, nói “đương xứ tức thị Tịch Quang” cũng chẳng ngại gì. Nếu không thì chỉ là kể tên món ăn, đếm của báu, chẳng khỏi bị đói rét đến chết mà thôi!</p>
    </div>

    <div class="my-10 flex items-center justify-center gap-4" aria-hidden="true"><span class="h-px w-20 bg-gradient-to-r from-transparent to-brand-primary"></span><span class="text-xl text-brand-primary">❀</span><span class="h-px w-20 bg-gradient-to-l from-transparent to-brand-primary"></span></div>
    <h3 class="!mt-10 !mb-3">Chú thích:</h3>
    <div class="space-y-2 rounded-xl bg-surface-card px-5 py-4 text-base leading-7 text-text-secondary">
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">41</sup> . Phật sát vi trần số kiếp: Số kiếp nhiều như số vi trần trong một cõi Phật.</p>
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">42</sup> . Bạn bè xa cách nhau gọi là “khiết khoát”, nên khi viết thư, ta hay gọi người bạn ở xa là “hiền khiết” (bạn hiền)</p>
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">43</sup> . Đắc pháp sư: lãnh hội pháp, chứng ngộ pháp nơi vị nào thì vị ấy gọi là “đắc pháp sư”.</p>
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">44</sup> . Thô trì trọng giới: Giữ các giới trọng còn ở mức giới tướng, chưa hoàn toàn giữ được giới tánh nên gọi là “thô trì”.</p>
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">45</sup> . Lệnh thân: tiếng gọi tỏ ý tôn trọng đối với mẹ của người khác</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo đoạn trích, các vị Bồ Tát hoặc A La Hán ứng thân trong thời mạt pháp thường thể hiện thân phận như thế nào đối với người đời?',
    options: {
      a: 'Công khai tuyên bố danh vị Phật, Bồ Tát để chúng sanh sinh lòng kính tin.',
      b: 'Thường xuyên hiển thị đại thần thông biến hóa để hàng phục ngoại đạo.',
      c: 'Chọn sống ẩn dật hoàn toàn trong núi sâu, không tiếp xúc với phàm phu.',
      d: 'Hiện thân làm phàm phu và nhún nhường xưng mình là kẻ mạt học.',
    },
    answer: 'd',
  },
  {
    question: 'Hậu quả và hình phạt dành cho kẻ phạm tội "đại vọng ngữ" (khoe xằng mình đắc đạo) được miêu tả nghiêm trọng như thế nào?',
    options: {
      a: 'Tội này nhẹ hơn tội ngũ nghịch và có thể dễ dàng sám hối để thoát khỏi.',
      b: 'Tội này giúp khuyến khích người khác khởi tâm tu hành nên có cả công lẫn tội.',
      c: 'Tội này chỉ làm tổn hại danh dự cá nhân chứ không gây ảnh hưởng tới Phật pháp.',
      d: 'Tội này nặng hơn ngũ nghịch thập ác trăm ngàn vạn ức lần, phải đọa địa ngục A Tỳ chịu khổ lâu dài.',
    },
    answer: 'd',
  },
  {
    question: 'Lý do Trí Giả Đại Sư giải thích lúc lâm chung về việc ngài chỉ thị hiện đạt địa vị Ngũ Phẩm Quán Hạnh là gì?',
    options: {
      a: 'Do ngài dành thời gian lãnh chúng hoằng pháp lợi sanh nên bỏ lỡ công phu thiền định cá nhân.',
      b: 'Do ngài bị phiền não Kiến Hoặc hoàn toàn chi phối nên không thể tiến xa hơn.',
      c: 'Do ngài không có đủ căn lành để thấu hiểu diệu lý Thật Tướng.',
      d: 'Do ngài phản đối các phương pháp tu trì thiền định của các bậc tiền bối.',
    },
    answer: 'a',
  },
  {
    question: 'Trong văn bản, sự khác biệt căn bản giữa khái niệm "Ngộ" và "Chứng" được ví như thế nào?',
    options: {
      a: 'Ngộ giống như nghe kể về kho báu, còn Chứng là tự mình tìm kiếm kho báu.',
      b: 'Ngộ là vẹt mây thấy trăng hay mở kho báu; Chứng là đi theo đường trở về ngồi yên hay giữ lấy kho báu thọ dụng.',
      c: 'Ngộ là hành động của phàm phu, còn Chứng là việc phàm phu lợi căn có thể dễ dàng làm được ngay.',
      d: 'Ngộ và Chứng là hai khái niệm hoàn toàn đồng nghĩa và có thể dùng thay thế cho nhau.',
    },
    answer: 'b',
  },
  {
    question: 'Người thuộc địa vị Danh Tự trong Viên Giáo đạt được mức độ "Ngộ" như thế nào theo giải thích của tác giả?',
    options: {
      a: 'Chỉ hiểu biết mơ hồ, loáng thoáng về các danh từ triết lý.',
      b: 'Đã đoạn sạch hoàn toàn ngũ trụ phiền não và có đại thần thông.',
      c: 'Tuy chưa chế phục được phiền não nhưng sở ngộ không hai không khác với chư Phật.',
      d: 'Đã chứng được pháp Thật Tướng và dự vào cõi Thật Báo Tịnh Độ.',
    },
    answer: 'c',
  },
  {
    question: 'Mục đích chính của các vị đại sư (Nam Nhạc, Trí Giả, Ngẫu Ích) khi thị hiện chứng các địa vị thấp lúc lâm chung là gì?',
    options: {
      a: 'Khuyên người đời tuyệt đối không nên hoằng pháp lợi sanh để bảo toàn công phu.',
      b: 'Bày tỏ sự tiếc nuối và thất vọng về kết quả tu trì của chính bản thân các ngài.',
      c: 'Để hậu thế tự biết hổ thẹn, gắng chí tinh tu và không dám lạm xưng chưa chứng bảo chứng.',
      d: 'Phủ nhận hoàn toàn khả năng chứng đạt pháp Thật Tướng trong Phật giáo.',
    },
    answer: 'c',
  },
  {
    question: 'Trạng thái "Hạnh khởi, giải tuyệt" trong tu trì được giải thích như thế nào?',
    options: {
      a: 'Chú trọng dùng thế trí biện thông để nghiên cứu nghĩa lý kinh sách.',
      b: 'Tận lực tu trì đến cùng cực khiến Năng, Sở và tri kiến phân biệt đều tiêu diệt.',
      c: 'Vừa giữ tâm phân biệt vừa tham cứu câu thoại đầu một cách hời hợt.',
      d: 'Dừng mọi hành vi tu tập thực tế để tập trung quán tưởng lý Nhị Không.',
    },
    answer: 'b',
  },
  {
    question: 'Dẫn chứng về Minh Giáo Tung Thiền Sư niệm thánh hiệu Quán Thế Âm được tác giả đưa ra nhằm chứng minh điều gì?',
    options: {
      a: 'Người tu hành bắt buộc phải đọc hết tất cả sách vở thế gian trước khi niệm Phật.',
      b: 'Thiền tông và Tịnh Độ tông là hai phương pháp hoàn toàn mâu thuẫn nhau.',
      c: 'Niệm Phật chỉ có tác dụng sau khi vãng sanh chứ không có ích lợi cho đời này.',
      d: 'Niệm Phật chí thành có thể mang lại sự mở mang trí huệ mầu nhiệm ngay trong đời hiện tại.',
    },
    answer: 'd',
  },
  {
    question: 'Theo văn bản, thái độ tu học nào bị coi là căn bệnh nguy hiểm thường gặp ở người đời mạt?',
    options: {
      a: 'Luôn niệm niệm quay lại xem xét tự tâm và khiêm tốn trì giới.',
      b: 'Vừa biết chút nghĩa lý đã bảo mình chứng đắc, sanh đại ngã mạn và miệt thị cổ đức.',
      c: 'Tự biết sức mình hèn kém nên nỗ lực cầu sanh Tây Phương Tịnh Độ.',
      d: 'Nhất tâm niệm Phật kiêm tu các điều lành thế gian để làm trợ hạnh.',
    },
    answer: 'b',
  },
  {
    question: 'Ý nghĩa của câu kinh Lăng Nghiêm: "Chẳng nghĩ là thánh tâm thì gọi là cảnh giới lành, nếu cho là thánh giải sẽ vướng quần tà" được ứng dụng ra sao?',
    options: {
      a: 'Khi gặp trải nghiệm hy hữu, nếu không sanh tâm ngạo mạn cho là chứng thánh thì mới nhận được đại lợi ích.',
      b: 'Người tu hành không nên mong cầu nhận được bất kỳ sự gia bị nào từ Tam Bảo.',
      c: 'Mọi giấc mộng hoặc cảnh giới lạ trong khi tu hành đều là ma cảnh cần phải loại bỏ ngay.',
      d: 'Đạt được cảnh giới lành đồng nghĩa với việc người tu đã chắc chắn chứng được pháp Thật Tướng.',
    },
    answer: 'a',
  },
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-28-viii-3-luan-ve-ngo-chung',
  slug: 'bai-28-viii-3-luan-ve-ngo-chung',
  title: '3. Luận về ngộ chứng',
  type: 'article',
  status: 'published',
  order: 5,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Phân_biệt_Ngộ_và_Chứng.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Awakening_and_Realization.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/_sMeL6SKQV4',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/0T4dkDtuMTSWfyaVQyQxco?si=YUVQUnAvQpaxUKVlJS6Yog',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận về ngộ chứng',
    passPercentage: 70,
    questions,
  },
}

export default lesson
