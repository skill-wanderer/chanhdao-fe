import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/4.luan-ve-viec-lon-sinh-tu/3.day-nhung-dieu-thiet-yeu-ve-lam-chung'
  return base + '/' + encodeURIComponent(file)
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div>
      <p class="mb-1 text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400">IV. LUẬN VỀ VIỆC LỚN SANH TỬ</p>
      <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">3. Dạy những điều thiết yếu về lâm chung</h2>
    </div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Một cửa ải lâm chung thật là khẩn yếu. Ðời có kẻ ngu, lúc cha mẹ, quyến thuộc lâm chung bèn khóc lóc vật vã, tắm rửa, thay áo, chỉ mong đẹp mắt người đời, chẳng nề di hại cho người chết. Người không niệm Phật hãy khoan bàn đến, người chí thiết vãng sanh lúc lâm chung gặp phải quyến thuộc như vậy, đa phần bị phá hoại chánh niệm, vẫn bị ở lại trong thế giới này.</p><p class="mb-0">Lâm chung trợ niệm ví như kẻ yếu đuối trèo núi, sức mình chẳng đủ, may nhờ có sức người đằng trước kéo, đằng sau đẩy, tả hữu xốc nách, nên có thể lên được đỉnh núi cao nhất.</p><p class="mb-0">Lâm chung chánh niệm rỡ ràng, bị ma quyến, ái tình lay động, phá hoại... giống như dũng sĩ trèo núi, tự lực sung túc, nhưng bạn bè, người quen ai nấy đem vật dụng của mình bảo phải gồng gánh. Gồng gánh quá nhiều, sức kiệt, thân nhọc, dõi nhìn vách núi liền lùi bước.</p><p class="mb-0">Lẽ được mất này dù do người khác gây ra, thật sự là do những nghiệp lực thiện hay ác của chính mình trong những kiếp trước đã thành tựu hay phá hoại người mà ra. Phàm là người tu Tịnh nghiệp, phải nên có chánh niệm thành toàn cho người, và phải chỉ dạy sẵn cho quyến thuộc về lẽ lợi hại, ngõ hầu ai nấy hiểu điều quan trọng là chỗ đạt đến của thần thức người chết, chứ chẳng phải tại phương diện tình cảm thế tục, mới hòng khỏi lầm lạc vậy!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Trong tuần thất và trong hết thảy lúc, hết thảy sự, phải lấy niệm Phật làm chánh, chứ chẳng phải chỉ lúc đang lo ma chay! Hiện thời, đa số Tăng lười nhác. Tụng kinh Phật tử phần nhiều không biết. Ðã thế còn tụng nhanh như nước chảy, Phật tử dù biết nhưng chẳng thuộc cũng chẳng thể đọc theo. Dù có đến mấy mươi người, không có mấy người tụng kinh được! Chỉ có mỗi niệm Phật, trừ phi chẳng phát tâm, quyết chẳng có cái nạn không ai niệm theo được. Lại dù chẳng chịu niệm, một câu Phật hiệu lọt qua tai thấu vào tâm cũng tự lợi ích chẳng ít. Ðấy là lý do Quang tôi tuyệt đối chẳng đề xướng lập bất cứ đạo tràng nào khác.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ðối với người sắp mạng chung, chỉ có đồng thanh niệm Phật là có ích. Nếu tâm thức chưa rời khỏi thân thì tắm rửa, thay y phục v.v... cho người chết gây trở ngại rất lớn. Vì thế, người tu Tịnh nghiệp hằng ngày phải nên nói cho quyến thuộc hiểu rõ duyên do ấy, ngõ hầu chẳng đến nỗi dùng lầm tình thân ái, gây trở ngại việc vãng sanh! Nếu là bậc đại nhân tột bậc, bậc cao sĩ xuất cách, bất tất e sợ sẽ mắc phải những chướng ngại ấy!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Phật pháp rộng sâu, chỉ khi nào thành Phật mới ngừng tay được. Muốn chắc chắn được vãng sanh, thường hành truy tiến23 thật chẳng trở ngại gì đến việc khẩn thiết niệm Phật, tức là như kinh Phật đã dạy: “Dù biết tội tánh vốn là không, nhưng luôn sám hối tội trước, chẳng nói là mình đã được thanh tịnh”. Ngài Liên Trì nói: “Trong năm, thường phải truy tiến người đã mất, chẳng được nói họ đã được giải thoát nên chẳng cử hành”.</p><p class="mb-0">Phải biết rằng: tụng kinh, niệm Phật tuy bảo là để truy tiến người thân, thật sự là để quyến thuộc hiện tiền, người quen mở mang cõi lòng, trồng thiện căn, và đem hết thảy công đức truy tiến người thân hồi hướng cho hết thảy pháp giới chúng sanh để mở rộng tâm lượng của mình lẫn người, của kẻ sống lẫn người mất, hòng tiêu diệt những chấp trước, chướng ngại của mình lẫn người, của kẻ còn lẫn người mất. Nếu như chẳng đặt nặng lòng thành, chỉ cốt xa hoa, khoa trương, khoe mẽ cùng người, có thể nói là: “Dùng đám tang người thân để bày trò náo nhiệt”, chẳng phải là điều con cái nên làm.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ngay lúc thân mắc bệnh nặng, lúc chưa thể chắc chắn sẽ sống hay chết, hãy dạy cho mọi người ai nấy vì mẹ chí thành khẩn thiết niệm “nam mô A Di Ðà Phật”, ngõ hầu tuổi thọ chưa tận sẽ chóng lành bệnh, tuổi thọ đã hết sẽ chóng được vãng sanh Tây Phương. Các con ông hiếu tâm tinh thuần, chuyên dốc, ắt sẽ đều thường trì niệm như cứu đầu mình bị cháy. Như thế, nào phải chỉ hữu ích cho phu nhân, mà thật sự còn có ích lợi sâu xa cho các cậu con ông nữa kia.</p><p class="mb-0">Người phàm mắc bệnh thì dùng thuốc để trị, nhưng cũng không nhất quyết phải dùng đến thuốc. Bệnh chẳng thể dùng thuốc trị, dù có tiên đan cũng vô dụng, huống hồ là thuốc của thế gian? Chẳng cần biết là bệnh trị được hay không, đều nên dùng thuốc A Già Ðà. Thứ thuốc này tuyệt đối chẳng hại người. Uống vào, dù thân hay tâm đều kiến hiệu liền.</p><p class="mb-0">Người sống trong thế gian, chẳng luận lâu hay mau, rốt cuộc cũng một lần chết. Cái chết ấy chẳng đáng tiếc, nhưng chỗ sẽ trở về sau khi chết chẳng đáng để sắp đặt sẵn hay sao? Người có lực lượng tự mình sắp đặt thỏa đáng, yên ổn, lẽ cố nhiên khi lâm chung chẳng cần đến người khác giúp đỡ. Nhưng nếu được hỗ trợ lại càng thêm đắc lực. Người không lực lượng phải nên bảo gia quyến thay mình niệm Phật, ắt sẽ đề khởi được chánh niệm, chẳng đến nỗi bị ân ái buộc ràng, vẫn y như cũ bị ái tình trói buộc vào cõi này chẳng thể ra khỏi !</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Với việc đảo bệnh, tiến vong, người đời nay hay dùng những cách như tụng kinh, lễ sám, làm đàn Thủy Lục v.v... Riêng Quang đối với những người quen biết mình đều dạy niệm Phật. Vì lợi ích của việc niệm Phật còn hơn tụng kinh, lễ sám, lập đàn Thủy Lục v.v... rất nhiều. Vì sao vậy?</p><p class="mb-0">Tụng kinh thì người không biết chữ không tụng được. Dù biết chữ nhưng tụng nhanh như nước chảy, người miệng lưỡi hơi chậm chạp cũng không tụng theo nổi. Người lười biếng tuy tụng được, cũng chẳng chịu tụng. Hóa ra chỉ hữu danh vô thực. Lễ sám, lập đàn Thủy Lục cứ theo đó mà suy.</p><p class="mb-0">Niệm Phật thì không một ai là chẳng niệm được. Dù có kẻ lười nhác chẳng chịu niệm, nhưng mọi người cùng hòa tiếng niệm, kẻ ấy chẳng bịt tai nên một câu Phật hiệu tất nhiên sẽ phân minh rành rọt rót vào tâm. Dù chẳng niệm có khác gì là niệm! Như người nhiễm hương, thân có mùi thơm; nào phải họ muốn thơm, chẳng mong như vậy mà lại được vậy! Vì thân quyến cầu an, tiến vong, chẳng thể không biết điều này!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Làm Phật sự bất tất phải niệm kinh, lễ sám, làm đàn Thủy Lục v.v... vì những việc ấy đều thuộc về mặt đàn tràng. Hãy nên chuyên nhất niệm Phật, ngõ hầu các cậu con ông từ đầu đến cuối đều niệm theo được. Nữ quyến ai nấy tự niệm trong phòng mình, chẳng nên ngồi sau lưng các Tăng. Như thế thì chẳng những phu nhân và lệnh quyến được lợi ích thật sự, mà vị Tăng niệm Phật và hết thảy người thấy nghe không ai chẳng được lợi ích.</p><p class="mb-0">Phàm làm Phật sự, nếu chủ nhân chịu tham dự đàn tràng thì vị Tăng sẽ tự phát tâm chân thật. Còn nếu chủ nhân coi đó là chuyện hình thức thì ông Tăng cũng sẽ coi pháp sự ấy là chuyện hình thức, như một kỳ Phật sự đã xong, ban đêm xả đàn Diệm Khẩu rồi thôi!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Cho dù người mất thật sự được vãng sanh, vẫn phải nên chân thành niệm Phật để cầu phẩm sen của người ấy được cao hơn, chóng chứng Vô Sanh, đấy mới là tận hiếu. Ðiều này tuy để người chết được lợi, nhưng thật ra con cái, dâu rể đều cùng gieo thiện căn. Cháu nào niệm được cũng nên bảo nó niệm theo.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Lúc cha mẹ lâm chung, toàn gia không khóc lóc mà niệm Phật là có lợi ích nhất. Nhưng chỉ niệm trong lúc ấy vẫn còn ngắn ngủi lắm, hãy nên niệm Phật cả ba tiếng không ngừng, chẳng cất tiếng khóc cũng như di động, chuyển dịch là tốt nhất. Xin hãy nhớ kỹ lấy!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ðối với việc làm Phật sự, Quang đã từng nói rõ rồi. Mong đừng bắt chước thói tục, làm chuyện sáo rỗng xuông. Nếu niệm Phật trong suốt bốn mươi chín ngày so ra còn lợi hơn tụng kinh rất nhiều.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Người trước khi mất nếu tự có thể tắm gội, thay áo thì rất hay. Nếu người ấy chẳng thể tự làm, quyết chẳng nên tắm gội, thay áo sẵn, khiến người ấy bị đau đớn khó chịu đựng nổi, mất chánh niệm. Sao cuối cùng ông vẫn buộc người đã khuất mặc pháp y, khoanh chân ngồi kết già để rồi tiếc hận? Chẳng biết rằng trong lúc ấy tốt nhất là đồng thanh niệm Phật, vạn vạn phần chẳng được phô trương, bày vẽ (như tắm gội, thay áo, bắt người sắp chết ngồi xếp bằng v.v...). Nếu phô trương, bày vẽ sẽ thành như đã bị té xuống giếng còn bị ném đá thêm. Hãy nhớ kỹ, nhớ chắc!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Lâm chung teo quắt lại và bị bệnh khổ chính là do nghiệp chướng từ nhiều kiếp. Vì người ấy dốc lòng tu Tịnh nghiệp nên chuyển trọng báo, hậu báo thành báo nhẹ trong hiện đời. Ông bảo do tu trì tinh tấn nên thân ngày càng yếu. Lời này chẳng xác đáng, còn vướng lỗi là khiến cho kẻ tín tâm nông cạn nhân đó bèn lui sụt. Phải biết rằng: người niệm Phật quyết định tiêu trừ được nghiệp chướng; những nghiệp chướng hiện tiền chỉ là những ác báo phải đọa trong tam đồ của đời tương lai chuyển thành bệnh khổ trong đời hiện tại để giải quyết cho xong đó thôi!</p><p class="mb-0">Kinh Kim Cang dạy: “Trì kinh Kim Cang có điều nhục nhỏ như bị người khác khinh miệt chính là diệt được cái khổ tam đồ ác đạo trong nhiều kiếp”. Ðấy chính là phước dày, sẽ được vãng sanh Tây Phương. Chịu cái khổ nhỏ lúc này để giải quyết cho xong ác báo từ vô lượng kiếp đến nay, thật là may mắn lớn. Chớ học theo kẻ chẳng biết sự việc chi bảo: “Vì tu trì đến nỗi mắc bệnh hay bị chết!”</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Vì lẽ nào mẹ ông bệnh chẳng lành? Ðấy là do túc nghiệp tạo thành như thế, nhằm chuyển trọng báo, hậu báo thành báo nhẹ trong đời này để giải quyết cho xong ngay trong lúc này.</p><p class="mb-0">Pháp sư Huyền Trang khi lâm chung còn có chút bệnh khổ, lòng ngờ những kinh mình dịch có chỗ nào sai lầm chăng? Liền có một vị Bồ Tát an ủi rằng: “Tội báo trong những kiếp trước của Sư sẽ do nỗi khổ nhỏ này mà tiêu. Ðừng hoài nghi nữa!” Hãy dùng ý này để an ủi mẹ ông, khuyên bà sanh tâm hoan hỷ, đừng sanh tâm oán hận, sẽ quyết định được Phật gia bị. Tuổi thọ chưa hết sẽ mau được lành bệnh. Tuổi thọ hết sẽ vãng sanh. Phàm nhân đang lúc bệnh khổ cứ hay nghĩ đến chuyện lùi một bước sẽ an lạc vô lượng! Gần đây, binh lửa liên miên, chúng ta may chưa mắc phải nạn ấy. Dù có bệnh khổ, vẫn còn được cảnh tỉnh, nhắc nhở mong thoát khổ, thì chỉ nên cảm kích, chuyên tu, tự được lợi ích. Nếu không, cứ oán trời trách người, chẳng những túc nghiệp chẳng thể tiêu, mà còn tăng thêm cái nghiệp oán trời trách người. Hãy bảo mẹ ông như thế. Nếu thật chẳng oán trời trách người, tịnh tâm niệm Phật sẽ tiêu được nghiệp như nước sôi tan tuyết.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Về việc tang tế nên dùng toàn đồ chay, chớ thuận theo thói tục. Dù bị kẻ chẳng thạo việc đời trách là không đúng, cũng cứ mặc họ chê cười mà thôi. Việc chôn cất đừng quá phô trương, bày vẽ. Làm Phật sự chỉ nên niệm Phật, đừng làm Phật sự nào khác. Nên bảo cả nhà cùng khẩn thiết niệm Phật thì mẹ ông, người nhà ông, quyến thuộc của ông và thân thích, bằng hữu đều cùng thật sự hưởng lợi ích.</p><p class="mb-0">Có tài lực thì hãy làm nhiều công đức. Nếu tiền của dùng cho việc tang ma chẳng dư, chỉ lo tang ma không thôi cũng được. Chớ có vung tay quá trán đến nỗi thiếu hụt, sau này phải chịu cảnh quẫn bách.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Mọi việc trong đời người đều có thể vờ vĩnh được, chỉ mỗi mình lúc lâm chung là chẳng thể dối trá được. Huống hồ những chuyện như không tình luyến ái, vẻ mặt vui sướng, ngồi yên qua đời, nếu chẳng phải là Tịnh nghiệp thành thục, đoan chắc không thể đạt được như thế!</p><p class="mb-0">Chỉ mong con cháu và quyến thuộc cả nhà ông hiểu đúng sự việc: Vì mẹ niệm Phật thì chẳng những mẹ ông được lợi, mà thật ra công đức niệm Phật của chính mình càng lớn. Bởi thế, Phật dạy người mỗi khi tụng kinh, trì chú, niệm Phật, làm các công đức đều hồi hướng cho pháp giới chúng sanh. Bình thời, còn vì pháp giới chúng sanh là những kẻ chẳng can hệ gì đến mình hồi hướng, huống hồ mẹ mất mà chẳng chí tâm vì mẹ niệm Phật ư?</p><p class="mb-0">Có thể vì hết thảy chúng sanh hồi hướng là đã hợp với thệ nguyện Bồ Ðề của Phật, như một giọt nước gieo vào biển cả liền được rộng sâu như biển cả. Nếu như chưa đến được biển, đừng nói là một giọt nước; cho dù là trường giang, sông cái tất nhiên vẫn khác với biển cả một trời, một vực! Như vậy, làm điều gì cho người thân và cho hết thảy mọi người đều là để tự bồi đắp phước đức của chính mình đó thôi!</p><p class="mb-0">Biết được nghĩa này, người có tâm hiếu thì tâm hiếu lại càng thêm tăng trưởng. Kẻ không hiếu tâm cũng sẽ phát khởi tâm hiếu, thỉnh Tăng niệm Phật suốt bốn mươi chín ngày, càng hay! Lúc niệm, anh em ông phải có người tham dự cùng niệm. Phụ nữ bất tất phải tới ngồi sau chúng Tăng; bởi lẽ niệm Phật nhiều ngày sẽ trở nên quen biết nhau, có thể khiến người khác nẩy sanh hiềm nghi. Nên xếp riêng một nơi niệm Phật cho phụ nữ, hoặc để họ ngồi sau màn, ra vào theo cửa riêng, hai bên chẳng trông thấy nhau. Làm như vậy để làm gương cho làng xóm, mở bày khuôn phép tốt lành. Nếu để lung tung không giới hạn, lỡ người khác bắt chước theo, lâu ngày ắt nảy sanh mối tệ. Người xưa lập pháp tuy là thượng thượng nhân vẫn tuân theo khuôn phép của hạ hạ nhân nên tệ hại mới không nảy sanh!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Những thuyết “đảnh thánh, nhãn sanh thiên”24 thật sự có chứng cứ, nhưng Quang sợ kẻ vô tri cứ chăm chút thăm dò hơi nóng lạnh. Ý tôi muốn nói là: Nếu có tín nguyện, lâm chung chánh niệm phân minh, ắt được vãng sanh, chẳng cần cứ phải thăm dò hơi nóng lạnh để làm chứng cứ! Cho nên nói: Cũng chẳng phải chỉ có một cách. Chỉ e thăm dò nhiều lượt đến nỗi gây lầm lỡ cho người đã mất. Chẳng thể chẳng biết!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Hãy nên đem hết thảy việc nhà và ngay cả cái sắc thân của chính mình đây thảy đều buông toàn bộ xuống hết. Từ trong cái tâm chẳng nhiễm mảy trần trì thánh hiệu vạn đức hồng danh, nghĩ mình sắp chết, ngoại trừ việc niệm Phật cầu tiếp dẫn chẳng khởi một tạp niệm nào. Làm được như vậy, nếu tuổi thọ đã tận sẽ quyết định vãng sanh Tây Phương, siêu phàm nhập thánh. Nếu tuổi thọ chưa tận, sẽ quyết định tiêu nghiệp, lành bệnh, huệ rạng, phước cao. Nếu chẳng nghĩ như thế, cứ si ngốc chỉ cầu chóng lành bệnh thì chẳng những bệnh chẳng thể chóng lành, trái lại còn nặng thêm. Giả sử như tuổi thọ đã hết, ắt sẽ theo nghiệp chìm nổi vĩnh viễn không có dịp thoát khỏi nỗi khổ ở Sa Bà này!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Người lâm chung được trợ niệm ắt sẽ được vãng sanh. Ðã không được trợ niệm, lại còn khóc lóc, xáo động, khiến ái tình, sân hận khởi lên làm cho người chết khó khỏi bị đọa lạc. Cực hiểm, cực hiểm! Ông thành tựu được việc vãng sanh cho mẹ cũng là chánh nhân tịnh nghiệp của tam thế chư Phật. Ấy là: Ngay trong trần lao mà hành Phật sự, công đức ấy thù thắng hơn những công đức tầm thường cả vạn phần.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Lâm Chung Châu Tiếp (mái chèo lâm chung)</p><p class="mb-0">Phật chế Tăng khi mất phải hỏa thiêu vốn là để họ rời lìa được cái thân phần đoạn giả dối, chứng được Pháp Thân chân thường. Vì thế, từ khi Phật chế lập điều ấy đến nay, Tăng chúng kính dùng cấm chế ấy làm thường quy. Tiếc là đạo pháp ngày càng suy đồi, lâu ngày tệ nạn phát sanh. Như nay Thích tử vội vàng lo hỏa thiêu cho xong việc, chẳng tuân cấm chế. Mỗi khi người bệnh vừa thở hắt ra, liền vội thay áo, dời động để kịp nhập khám một hai ngày, rồi liền hỏa thiêu. Có thể nói là rất trái nghịch chế định của Phật!</p><p class="mb-0">Phật nói con người có tám thức, tức là tri thức. Năm thức đầu là Nhãn, Nhĩ, Tỷ, Thiệt, Thân. Thức thứ sáu là Ý. Thức thứ bảy là Mạt Na, còn gọi là Truyền Tống Thức. Thức thứ tám là A Lại Da, còn gọi là Hàm Tàng Thức. Khi con người sanh ra, chỉ có thức thứ tám này đến trước nhất, các thức kia đến sau. Ðến lúc chết, thức thứ tám này cũng ra đi sau cùng; các thức khác lần lượt đi trước.</p><p class="mb-0">Thức thứ tám chính là linh thức của con người, thế tục thường gọi là “linh hồn”. Thức thứ tám này thông linh nên khi con người mới nhập thai mẹ, nó liền đến trước. Vì thế, con trong bụng mẹ liền biết hoạt động. Ðến khi chết, sau khi dứt hơi, nó chẳng đi ngay, phải đợi đến khi toàn thân lạnh giá, không còn một điểm nào còn ấm nữa, thức ấy mới chịu đi. Khi thức đã đi, thân này sẽ không còn mảy may tri giác nào.</p><p class="mb-0">Nếu chỗ nào còn ấm là thức ấy còn chưa rời đi. Ðộng chạm đến vẫn biết đau khổ. Lúc ấy, kỵ nhất là các sự mặc áo, xếp chân, dời động v.v... Nếu hơi động đến sẽ đau khổ khó chịu đựng nổi; bất quá miệng không nói được, thân chẳng động được đó thôi! Xét theo kinh dạy, ba thứ hơi nóng, thọ mạng và thức thường chẳng rời nhau. Như người sống có hơi ấm thì thức còn hiện hữu. Thức còn hiện hữu thì tuổi thọ chưa hết. Xưa nay có kẻ chết đi dăm ba bữa rồi sống lại, chép rõ ràng trong sách vở có thể tra cứu được.</p><p class="mb-0">Nho Giáo cũng có cái lễ để ba ngày rồi mới đại liệm, do quyến thuộc yêu mến, vẫn hy vọng người chết vạn nhất sống lại chăng? Còn Tăng sĩ ta, tuy chẳng mong sống lại, nhưng cũng chẳng thể chẳng quản gì đến nỗi thống khổ của vong giả, cứ tự tiện dời động để kịp di quan, thiêu hóa. Lòng từ bi để đâu? Cổ nhân nói: “Thố tử hồ bi, vật thương kỳ loại” (thỏ chết, cáo buồn; loài vật thương xót nhau). Loài vật còn như thế, huống hồ cùng là loài người ư? Huống hồ lại còn cùng là Phật tử nữa ư?</p><p class="mb-0">Vả nữa, thói đời khi đau đớn tột bậc sẽ dễ nổi sân tâm. Do sân tâm rất dễ bị đọa lạc. Như kinh nói vua A Kỳ Ðạt lập chùa tháp Phật, công đức vòi vọi. Lúc lâm chung, người hầu cầm quạt lỡ để rớt trúng mặt vua. Vua bị đau, nổi sân, chết đọa làm thân rắn. Nhờ có công đức, sau gặp được sa-môn vì rắn thuyết pháp. Do nghe pháp nên bèn thoát thân rắn, được sanh lên trời. Xem đó, biết rằng: Khi thần thức của người chết chưa đi hẳn thì mặc áo, dời động và lập tức thiêu hóa ngay sẽ khiến người ấy đau đớn nổi sân, càng thêm đọa lạc, há chẳng phải là nhẫn tâm hại lý cố bày trò thảm độc ư?</p><p class="mb-0">Hãy thử nghĩ người chết có oán cừu chi với mình; chỉ vì hảo tâm thành ra ác duyên! Nếu bảo sự còn mờ mịt, biết cậy vào đâu để suy xét, thì những điều chép trong kinh điển chẳng đáng tin chăng? Ðến giờ đây, các thói tệ lưu hành nói chung là do người sống chẳng biết thương cho nỗi khổ của người chết, chỉ tính xong việc cho nhanh nên chẳng nhọc công xem kỹ ấm lạnh. Do đấy, trở thành thói quen, dù có ai nhắc đến lại cười là vu vơ, đến nỗi người chết phải chịu khổ nạn! Ô hô! Ðiều khổ nhất trên đời không gì bằng sanh tử. Sanh như rùa còn sống bị bóc mai, tử như cua bị nhúng nước sôi. Tám khổ cùng nấu, đau đớn chẳng nói nổi!</p><p class="mb-0">Xin những ai chăm sóc bệnh nhân hãy lưu tâm cẩn thận, chớ cùng bệnh nhân tán nhảm chuyện gẫu khiến tâm họ tán loạn, cũng đừng buồn bã, khóc kể om sòm. Hãy nên khuyên bệnh nhân buông hết thân tâm, một dạ niệm Phật để cầu vãng sanh. Lại nên trợ niệm khiến cho bệnh nhân nương theo tiếng niệm Phật của mình để nhớ kỹ trong tâm. Nếu có tiền tài hãy thỉnh Tăng chúng chia ban niệm Phật, khiến cho tiếng niệm Phật ngày đêm không ngớt, hòng tai người bệnh luôn nghe Phật hiệu, có thể quyết định nhờ vào Phật từ lực vãng sanh Tây Phương. Còn như không có tiền của thì cả nhà phát tâm trợ niệm để kết duyên cuối cùng.</p><p class="mb-0">Về việc sắp đặt hậu sự, chớ bàn bạc ngay trước mặt bệnh nhân. Chỉ nên gõ dẫn khánh, cao tiếng niệm Phật, khiến cho từng câu lọt vào tai bệnh nhân ngõ hầu trong tâm người bệnh thường chẳng lìa Phật. Tiếng mõ vốn đục, trợ niệm lâm chung trọn chẳng nên dùng. Bệnh nhân nằm hay ngồi nên để tùy ý, chớ nên di động, cả nhà cứ chuyên tâm niệm Phật. Ðợi đến lúc toàn thân đã lạnh hết, tức là thần thức đã đi hết rồi, đợi thêm hai tiếng nữa mới được tắm rửa, thay áo. Nếu như thân đã lạnh hóa cứng thì nên dùng nước nóng xoa nắn, dùng vải thấm nước nóng áp vào khủy tay, đầu gối, cổ chân, đợi giây lát, những chỗ đó sẽ mềm mại trở lại. Lúc ấy mới xếp chân cho người chết nhập quan. Cho đến lúc mọi việc xong xuôi hết cả, vẫn phải thường niệm Phật.</p><p class="mb-0">Tất cả những việc như lễ sám, tụng kinh đều chẳng có lợi ích rộng lớn bằng niệm Phật. Phàm hết thảy các quyến thuộc dù là tại gia hay xuất gia đều phải tuân hành cách này thì kẻ còn, người mất đều được lợi ích lớn lao. Hơn nữa, Ðức Phật ta khi Niết Bàn, vốn nằm trên hông phải, cứ để như vậy nhập quan trà-tỳ. Người đời nay cứ thuận theo tự nhiên. Nếu ngồi mất thì đặt vào khám. Nếu nằm mất thì đặt vào quan tài, cốt sao thỏa đáng. Nhưng người đời nay phong tục đã thành thói, sợ họ chẳng cho như vậy là đúng, cũng nên lắng nghe, suy nghĩ để quyết định sao cho tiện.</p><p class="mb-0">Còn như người chết rồi có các cảnh tượng thiện ác, vốn là có chứng cứ thật sự. Người sanh vào thiện đạo hơi nóng từ dưới bốc lên trên; người sanh vào ác đạo, hơi nóng từ trên tỏa xuống dưới. Nếu như cả thân lạnh hết, khí nóng tụ lại trên đầu bèn là sanh trong thánh đạo. Hơi nóng ở mắt sanh trong thiên đạo, ở ngực sanh trong nhân đạo, ở bụng sanh ngạ quỷ đạo, ở gối sanh trong súc sanh đạo, ở bàn chân sanh trong địa ngục đạo. Vì thế có bài kệ:</p><div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic bg-primary-50/40 dark:bg-primary-900/10 rounded-r-xl"><p class="mb-0">Ðảnh thánh, nhãn sanh thiên,</p><p class="mb-0">Nhân tâm, ngạ quỷ phúc,</p><p class="mb-0">Súc sanh tất cái ly,</p><p class="mb-0">Ðịa ngục cước bản xuất.</p></div><div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic bg-primary-50/40 dark:bg-primary-900/10 rounded-r-xl"><p class="mb-0">(Ðảnh: thánh; mắt: sanh thiên,</p><p class="mb-0">Ngực: người, bụng: ngạ quỷ;</p><p class="mb-0">Từ gối ra: súc sanh,</p><p class="mb-0">Ðịa ngục: bàn chân nóng)</p></div><p class="mb-0">Ôi! Ðại sự sanh tử chẳng ai tránh được, chỉ có một điều phải thật thận trọng: người săn sóc bệnh nhân phải dùng đồng thể bi tâm để giúp hoàn thành đại sự vãng sanh. Cổ nhân nói:</p><div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic bg-primary-50/40 dark:bg-primary-900/10 rounded-r-xl"><p class="mb-0">Ngã kiến tha nhân tử,</p><p class="mb-0">Ngã tâm nhiệt như hỏa,</p><p class="mb-0">Bất thị thục tha nhân,</p><p class="mb-0">Khán khán luân ngã đáo.</p></div><div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic bg-primary-50/40 dark:bg-primary-900/10 rounded-r-xl"><p class="mb-0">(Ta thấy người khác chết,</p><p class="mb-0">Ruột ta nóng như lửa,</p><p class="mb-0">Nào phải mình ai kia,</p><p class="mb-0">Rồi ta cũng đến lượt!)</p></div><p class="mb-0">Nhân duyên, quả báo cảm ứng chẳng sai! Muốn cầu tự lợi trước phải lợi người! Soạn thiên này để bảo khắp đồng bào, khẩn khoản mong mọi người chú ý!</p></div>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
    <h3 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Chú thích:</h3>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/50 p-5 space-y-2 text-base text-text-secondary dark:border-primary-900 dark:bg-primary-950/20"><p class="mb-0">23 . Truy tiến: làm các công đức hồi hướng cho người đã quá vãng.</p><p class="mb-0">24 . Ðảnh thánh, nhãn sanh thiên... là thuyết cho rằng khi người chết, căn cứ vào chỗ nào còn giữ được hơi nóng, sẽ biết được người chết sanh về đâu, như đảnh đầu nóng sẽ sanh vào cõi thánh, nóng ở mắt sanh vào cõi trời v.v...</p></div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo văn bản, điều nào sau đây là quan trọng nhất người thân nên làm cho người sắp lâm chung?",
    "options": {
      "a": "Khóc lóc thảm thiết xung quanh để thể hiện tình thương yêu.",
      "b": "Vội vàng tắm rửa và thay quần áo đẹp để người bệnh kịp đẹp mắt.",
      "c": "Đồng thanh khẩn thiết niệm Phật để giúp giữ chánh niệm.",
      "d": "Lập tức lập đàn Thủy Lục và tụng kinh thật nhanh"
    },
    "answer": "c"
  },
  {
    "question": "Vì sao Ấn Quang Đại Sư khuyên nên ưu tiên niệm Phật hơn việc tụng kinh hay làm đàn Thủy Lục khi trợ niệm?",
    "options": {
      "a": "Vì tụng kinh chỉ dành riêng cho chư Tăng chứ người tại gia không được phép.",
      "b": "Vì niệm Phật là phương pháp hoàn toàn không tốn kém chi phí tổ chức.",
      "c": "Vì tụng kinh và làm đàn Thủy Lục hoàn toàn không mang lại công đức nào.",
      "d": "Vì niệm Phật đơn giản, ai cũng có thể niệm theo hoặc lắng nghe để nhận lợi ích."
    },
    "answer": "d"
  },
  {
    "question": "Theo giáo lý được trích dẫn trong văn bản, thức nào trong tám thức của con người sẽ rời khỏi cơ thể sau cùng khi qua đời?",
    "options": {
      "a": "Thức thứ sáu (Ý thức)",
      "b": "Thức thứ tám (A-lại-da thức)",
      "c": "Thức thứ bảy (Mạt-na thức)",
      "d": "Năm thức đầu (Tiền ngũ thức)"
    },
    "answer": "b"
  },
  {
    "question": "Nguyên nhân trực tiếp nào khiến vua A Kỳ Đạt bị đọa làm thân rắn lúc lâm chung dù có công đức xây chùa tháp rất lớn?",
    "options": {
      "a": "Gia quyến khóc lóc quá nhiều xung quanh giường bệnh của nhà vua.",
      "b": "Người hầu lỡ tay làm rớt quạt trúng mặt khiến vua bị đau và nổi tâm sân giận.",
      "c": "Vua không chịu cúng nhường tài sản cho chư Tăng trước khi trút hơi thở cuối cùng.",
      "d": "Vua từ chối nghe Sa-môn thuyết pháp trong những ngày cuối đời."
    },
    "answer": "b"
  },
  {
    "question": "Khi một người vừa ngưng thở nhưng thân thể chưa lạnh hoàn toàn, việc vội vàng di chuyển hay tắm rửa cho họ gây ra tác hại gì?",
    "options": {
      "a": "Giúp thân thể giữ được độ co giãn tốt hơn cho việc nhập quan sau này.",
      "b": "Khiến người quá cố không thể nghe thấy bất kỳ tiếng niệm Phật nào nữa.",
      "c": "Khiến thần thức chịu đau đớn dữ dội, dễ khởi tâm sân hận và sa đọa.",
      "d": "Làm cho thần thức lập tức vãng sanh về cõi ác mà không qua xét duyệt nghiệp."
    },
    "answer": "c"
  },
  {
    "question": "Bài kệ \"Đảnh thánh, nhãn sanh thiên, Nhân tâm, ngạ quỷ phúc...\" đề cập đến điều gì?",
    "options": {
      "a": "Thứ tự các bộ phận trên cơ thể bị lạnh đi khi một người bắt đầu mắc bệnh nặng.",
      "b": "Các bước thực hiện nghi lễ hỏa táng theo đúng quy định truyền thống.",
      "c": "Phương pháp xoa bóp bằng nước nóng để làm mềm các khớp xương của thi thể.",
      "d": "Vị trí tích tụ hơi nóng cuối cùng trên cơ thể chỉ ra cõi tái sinh của người chết."
    },
    "answer": "d"
  },
  {
    "question": "Tác giả đưa ra lời khuyên nào về việc thăm dò hơi nóng (đảnh thánh, nhãn sanh thiên) trên cơ thể người lâm chung?",
    "options": {
      "a": "Phải liên tục sờ nắn để xác định chính xác thời điểm thần thức thoát ra ngoài.",
      "b": "Tránh sờ nắn hay thăm dò quá nhiều lần vì dễ làm lay động chánh niệm của người chết.",
      "c": "Chỉ có chư Tăng mới được phép chạm vào cơ thể để kiểm tra các vị trí nóng.",
      "d": "Việc thăm dò hơi nóng là điều kiện bắt buộc để quyết định xem có nên trợ niệm tiếp hay không."
    },
    "answer": "b"
  },
  {
    "question": "Nếu thân thể người chết đã bị cứng sau khi lạnh hoàn toàn, gia quyến nên xử lý như thế nào trước khi xếp chân nhập quan?",
    "options": {
      "a": "Dùng lực mạnh để bẻ thẳng hoặc gấp các khớp xương theo tư thế mong muốn.",
      "b": "Đổi tư thế nằm thành ngồi ngay lập tức mà không cần dùng phương pháp hỗ trợ nào.",
      "c": "Thấm nước nóng vào khăn rồi áp vào các khớp như khuỷu tay, đầu gối để thịt mềm lại.",
      "d": "Đốt lửa hơ xung quanh thi thể để độ nóng làm mềm các cơ quan nhanh chóng."
    },
    "answer": "c"
  },
  {
    "question": "Hiện tượng một người dốc lòng niệm Phật nhưng trước khi chết vẫn phải chịu bệnh khổ nặng nề được giải thích như thế nào?",
    "options": {
      "a": "Do tu hành tinh tấn sai phương pháp khiến sức khỏe ngày càng bị suy kiệt.",
      "b": "Do người đó thiếu lòng thành kính nên không nhận được sự gia bị của Đức Phật.",
      "c": "Do sức tu tập giúp chuyển nghiệp báo nặng ở nhiều kiếp thành bệnh khổ nhẹ ở hiện đời.",
      "d": "Là dấu hiệu chắc chắn cho thấy người đó sẽ bị đọa vào các cõi ác sau khi chết."
    },
    "answer": "c"
  },
  {
    "question": "Trong việc tang tế gia đình, văn bản khuyên gia quyến nên thực hiện như thế nào để vừa trọn đạo hiếu vừa đem lại lợi ích thực sự?",
    "options": {
      "a": "Dùng toàn đồ chay, chuyên nhất niệm Phật, tránh phô trương xa hoa gây thiếu hụt tài chính.",
      "b": "Bày ra các trò náo nhiệt xung quanh đám tang để bớt đi không khí đau buồn.",
      "c": "Mời thật đông Tăng sĩ làm nhiều loại đàn lễ phức tạp trong suốt nhiều ngày đêm.",
      "d": "Đãi cỗ mặn linh đình để thể hiện lòng hiếu thảo và sự tôn trọng đối với khách khứa."
    },
    "answer": "a"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-17-iv-3-day-nhung-dieu-thiet-yeu-ve-lam-chung',
  slug: 'bai-17-iv-3-day-nhung-dieu-thiet-yeu-ve-lam-chung',
  title: '3. Dạy những điều thiết yếu về lâm chung',
  type: 'article',
  status: 'published',
  order: 4,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Hướng_dẫn_trợ_niệm_lâm_chung.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Cửa_Ải_Lâm_Chung.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/SnPPhtCAxVA',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/53gocnjPVUnN2BiF229sdM?si=EztccE3XTRW3YhLggWQosw',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Dạy những điều thiết yếu về lâm chung',
    passPercentage: 70,
    questions,
  },
}

export default lesson
