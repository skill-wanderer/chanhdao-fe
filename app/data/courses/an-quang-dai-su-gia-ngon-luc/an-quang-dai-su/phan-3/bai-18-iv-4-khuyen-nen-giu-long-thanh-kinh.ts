import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/4.luan-ve-viec-lon-sinh-tu/4.khuyen-nen-giu-long-thanh-kinh'
  return base + '/' + encodeURIComponent(file)
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div>
      <p class="mb-1 text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400">IV. LUẬN VỀ VIỆC LỚN SANH TỬ</p>
      <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">4. Khuyên nên giữ lòng thành kính</h2>
    </div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Nhập đạo nhiều môn, chỉ do chí hướng mỗi người mà thâm nhập một môn, trọn chẳng có một pháp nhất định. Nhưng nhất định phải: 1. Thành. 2. Cung kính. Hai điều này dù cho tất cả chư Phật tận đời vị lai đều xuất thế cả vẫn chẳng thể khác được. Chúng ta đã là phàm phu sát đất muốn mau tiêu nghiệp lụy, mau chứng Vô Sanh, chẳng dốc sức vào hai việc này thì ví như cây không rễ lại mong tươi tốt, chim không cánh lại mong bay lên, có được hay chăng?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Thế tục đọc sách tuyệt không kính nể. Sáng dậy, chẳng buồn rửa ráy, súc miệng. Ði tiêu xong chẳng thèm gột rửa. Hoặc còn bỏ sách nơi giường, ghế, hoặc làm gối lót đầu để đêm ngủ đọc luôn, bỏ chung với đồ lót, áo quần. Sách nào đặt trên bàn để đọc thì bỏ lẫn lộn với các vật khác, xem lời hiền thánh như mớ giấy cũ nát. Hoàn toàn không có ý chăm chút, không mảy may kính trọng.</p><p class="mb-0">Thậm chí những sách coi chơi của phụ nữ những nhà thư hương đều là kinh truyện, tôi tớ những nhà giàu có lau chùi đồ đạc đều dùng [những tờ giấy có in chép] văn chương. Bao thứ khinh nhờn khó lòng thuật tỉ mỉ. Thói tệ tích tập đã lâu, quen mắt chẳng quan tâm đến. Nếu chẳng chỉ rõ họa phước, chắc chắn khó tránh lỗi khinh nhờn. Chưa được ích gì, đã mắc lỗi lớn trước! Thương những kẻ vô tri ấy nên phải chỉ dạy trước.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Một pháp niệm Phật thật rất giản dị, rất rộng, rất lớn, nhưng phải khẩn thiết chí thành đến cùng cực mới hòng cảm ứng đạo giao, được lợi ích thật sự ngay trong đời này! Nếu lười nhác, biếng trễ, không mảy may kính nể, dù gieo được viễn nhân, vẫn mắc tội khinh nhờn chẳng thể tưởng tượng nổi. May ra được sanh vào cõi trời, cõi người, quyết khó lòng cao dự hải hội.</p><p class="mb-0">Ðối với tượng Phật nên tưởng như đức Phật thật, chẳng được coi giống như gỗ, đất, đồng, sắt v.v... Kinh điển chính là thầy của tam thế chư Phật, là Pháp Thân xá-lợi của Như Lai, cũng nên xem như Ðức Phật thật sự, chẳng được coi như giấy mực. Lúc đối trước kinh tượng, hãy nên như trung thần thờ thánh chúa, như con hiếu đọc di chúc. Làm được như thế, không nghiệp chướng nào chẳng tiêu, không phước huệ nào chẳng đủ!</p><p class="mb-0">Hiện tại, hàng sĩ đại phu học Phật rất nhiều, nhưng đa số chỉ đọc kinh văn, hiểu ý nghĩa, dùng đó để phô phang ngoài miệng hòng được tiếng là bậc thông gia mà thôi. Còn như cung kính, chí thành, y giáo tu trì, thật khó có được một ai!</p><p class="mb-0">Tôi thường nói: “Muốn hưởng lợi ích thật sự từ Phật pháp, phải cầu nơi cung kính. Có một phần cung kính sẽ tiêu được một phần tội nghiệp, tăng một phần phước huệ. Có mười phần cung kính sẽ tiêu được mười phần tội nghiệp, tăng mười phần phước huệ. Nếu chẳng cung kính đến nỗi khinh mạn thì tội nghiệp càng tăng, phước huệ càng giảm. Buồn thay!”</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Lễ, tụng, trì, niệm, các thứ tu trì đều phải lấy thành kính làm chủ. Nếu thành kính đến cùng cực thì công đức như trong kinh nói: Còn ở địa vị phàm phu chưa thể viên đắc, nhưng sở đắc cũng đã khó nghĩ khó bàn! Nếu không thành kính, có khác chi hát tuồng, những trò khổ, sướng, buồn, vui đều là giả trang, chẳng phát xuất từ bên trong. Dù có công đức, cũng chẳng thể vượt quá cái phước si ám của cõi nhân thiên đó thôi. Nhưng do cái si phước ấy ắt sẽ tạo ác nghiệp, cái khổ tương lai có lúc nào xong?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Nói đến thành, nói đến cung kính, lời lẽ ấy cả thế gian đều biết, nhưng đạo lý này cả thế gian đều mê muội. Ông X. nọ do tội nghiệp sâu nặng, mong tội nghiệp tiêu trừ để báo ân Phật, thường tìm cầu những khuôn mẫu tu trì tốt đẹp của cổ đức. Nhờ đó, ông biết rằng Thành và Cung Kính thật là bí quyết cực diệu để siêu phàm nhập thánh, liễu sanh thoát tử. Vì thế, ông thường cùng kẻ hữu duyên nhắc đi, nhắc lại điều này.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ðối với việc xem kinh, nếu muốn làm pháp sư để tuyên dương cho đại chúng thì hãy đọc kinh văn trước, tiếp đó xem các chú sớ. Nếu tinh thần chẳng sung túc, kiến giải chẳng hơn người, chớ có mất công nhọc nhằn tâm lực, uổng phí năm tháng.</p><p class="mb-0">Nếu muốn tùy phận được lợi ích thật sự, phải chí thành khẩn thiết thanh tịnh tam nghiệp. Hoặc trước hết phải đoan tọa chốc lát, lắng định thân tâm, rồi mới lễ Phật, đọc ra tiếng; hoặc chỉ im lặng xem. Hoặc lễ Phật xong, đoan tọa chốc lát, sau đó mới mở kinh [ra xem]. Cũng phải thân đoan nghiêm, ngồi ngay ngắn như đối trước thánh dung, đích thân lắng nghe viên âm, chẳng dám manh nha một niệm biếng nhác, chẳng dám khởi một niệm phân biệt. Ðọc một loạt từ đầu đến cuối, dù là văn hay nghĩa đều nhất loạt chẳng dùng lý lẽ để hiểu.</p><p class="mb-0">Ðọc kinh như thế, người lợi căn đối với mỗi mỗi Không lý sẽ lãnh ngộ được, chứng pháp Thật Tướng; còn kẻ căn cơ độn kém cũng tiêu trừ được nghiệp chướng, tăng trưởng phước huệ. Lục Tổ nói: “Ðãn khán Kim Cang kinh, tức năng minh tâm kiến tánh”(chỉ xem kinh Kim Cang liền có thể minh tâm kiến tánh) là nói về cách xem kinh như trên đây, cho nên bảo là “đãn” (chỉ). Kinh Ðại Thừa đều có công năng minh tâm kiến tánh, chứ nào phải mình kinh Kim Cang?</p><p class="mb-0">Nếu cứ một mực phân biệt câu này nghĩa như thế nào, đoạn này nghĩa là gì thì toàn là thuộc về phàm tình, vọng tưởng, xét đoán, suy lường, làm sao ngầm phù hợp với ý Phật, lãnh ngộ trọn vẹn ý kinh; nhân đó, nghiệp chướng tiêu diệt, phước huệ tăng cao cho được? Nếu biết cung kính thì còn gieo được chút thiện căn. Nếu cứ làm giống hệt như cách đọc sách Nho của kẻ học rộng sẽ thành hạng người vướng phải tội khinh nhờn sừng sững như non, thăm thẳm như vực, dùng nhân lành chiêu lấy quả ác vậy.</p><p class="mb-0">Cổ nhân chuyên trọng nghe kinh vì tâm chẳng thể khởi phân biệt. Như có người đọc kinh ra tiếng, một người khác ở cạnh nhiếp tâm lắng nghe mỗi chữ, mỗi câu cho thật phân minh. Tâm kẻ ấy chuyên chú, chẳng dám duyên theo hết thảy thanh sắc bên ngoài. Nếu chỉ hơi phóng túng liền bị đoạn tuyệt ngay, chẳng quán thông nổi văn nghĩa!</p><p class="mb-0">Người tụng có kinh văn để nương theo, chẳng phải dốc trọn tâm, nhưng cũng phải tụng cho rõ ràng vì người nghe chỉ nhờ vào tiếng tụng. Nếu người tụng phóng túng một chút liền thành đứt đoạn. Nếu nghe được như thế, công đức bằng với công đức của người chí thành, cung kính tụng. Nếu người tụng chỉ thiếu cung kính đôi chút thì công đức khó bằng nổi kẻ nghe.</p><p class="mb-0">Người đời nay xem kinh Phật như giấy cũ. Trên án kinh để lẫn các tạp vật. Cầm lấy kinh chẳng rửa tay, miệng chẳng súc sạch, lắc lư thân mình, giở chân, rung đùi, thậm chí phóng thí25 , gãi chân, buông lung hết thảy chẳng kiêng sợ gì, còn hòng xem kinh để được phước, tiêu tội! Chỉ có hạng ma vương muốn diệt Phật pháp là tán thán, cho là hoạt bát viên dung, là phù hợp sâu xa với diệu đạo không chấp trước của Ðại Thừa! Hàng Phật tử chân thật tu hành trông thấy cảnh ấy chỉ còn biết đau xót thầm, nước mắt đầm đìa, than thở ma quyến hoành hành, chẳng biết làm sao!</p><p class="mb-0">Ngài Trí Giả tụng kinh hoát nhiên đại ngộ, lặng lẽ nhập định, nào phải do tâm phân biệt mà được đâu! Một vị cổ đức chép kinh Pháp Hoa, nhất tâm chuyên chú liền đạt “niệm cực tình vong”, cho đến lúc trời tối mịt vẫn chép kinh như thường. Thị giả vào hỏi trời đã tối mịt sao vẫn còn chép, Ngài liền xòe tay ra, chẳng trông thấy lòng bàn tay. Xem kinh như thế là cũng chuyên tâm dốc chí giống như tham thiền khán thoại đầu, trì chú, niệm Phật. Do dụng lực lâu ngày, sẽ có một ngày được hoát nhiên quán thông.</p><p class="mb-0">Minh Tuyết Kiệu Tín thiền sư, người ở Phủ Thành, Ninh Ba không biết chữ, trung niên xuất gia, tận lực khổ công tham cứu, nhẫn được những việc người khác chẳng thể nhẫn, làm được việc người khác chẳng thể làm. Khổ hạnh của ngài người khác khó đạt được. Lâu ngày, đại triệt, đại ngộ, miệng nói ra điều gì đều khéo léo khế hợp cùng Thiền cơ. Tuy chẳng biết chữ, chẳng viết được, nhưng lâu ngày Ngài liền biết chữ! Lâu sau, Ngài còn tung hoành ngọn bút, nghiễm nhiên trở thành một bậc đại thư pháp.</p><p class="mb-0">Những sự lợi ích này đều là từ chẳng phân biệt, chuyên tinh tham cứu mà có. Người xem kinh cũng nên lấy đó làm gương!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Lúc xem kinh tuyệt đối chẳng được khởi tâm phân biệt thì tự nhiên vọng tưởng phải tiềm phục, thiên chân phát hiện. Nếu muốn nghiên cứu nghĩa lý hoặc giở xem các chú sớ hãy dành một thời gian khác để chuyên nghiên cứu. Trong lúc nghiên cứu, tuy chẳng nghiêm túc như lúc xem kinh, cũng chẳng được hoàn toàn không cung kính. Bất quá, so với lúc xem kinh, thư thái hơn một chút.</p><p class="mb-0">Nghiệp chưa thể tiêu, trí chưa thể rạng thì phải lấy việc xem kinh làm chính, việc nghiên cứu chỉ đại lược kèm theo. Nếu không, suốt ngày quanh năm chỉ lo nghiên cứu, dù nghiên cứu đến mức như vẹt mây thấy mặt trăng, mở cửa thấy núi, cũng chỉ là bàn suông ngoài miệng, chẳng hề can hệ mảy may đến thân tâm, tánh mạng, sanh tử chi cả! Ngày ba mươi tháng Chạp xảy đến chẳng dùng được mảy may!</p><p class="mb-0">Nếu có thể xem kinh [theo cách] như trên vừa nói, ắt sẽ nghiệp tiêu, trí rạng, ba thứ tình kiến sẽ trở về “chốn quê hương chẳng hề tồn tại” (ý nói: sẽ biến mất không tăm tích). Nếu chẳng xem kinh được như thế, chẳng những ba thứ tình kiến chưa chắc chẳng sanh, còn e do sức túc nghiệp, tà kiến sẽ phát khởi, bác không nhân quả, và các thứ phiền não: giết, trộm, dâm, dối sẽ nối tiếp nhau nổi dậy như lửa cháy hừng hực, nhưng vẫn cứ cho mình là người hành Ðại Thừa, hết thảy vô ngại! Lại còn vin vào câu nói “Tâm bình hà lao trì giới?” (tâm bình nào phải nhọc công giữ giới?) của Lục Tổ để cho rằng phá hết các giới mà chẳng phá mới thật sự là trì giới. Thật là tu hành khó đạt chân pháp vậy!</p><p class="mb-0">Sở dĩ chư Phật, chư Tổ chủ trương Tịnh Ðộ là để nhờ vào Phật từ lực chế phục nghiệp lực, chẳng cho chúng phát hiện. Vì thế nên lấy niệm Phật làm chánh, xem kinh làm trợ hạnh!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ðức Như Lai đã diệt độ, những cái còn lại chỉ là kinh và tượng. Nếu coi tượng bằng đất, gỗ, vàng, tượng vẽ v.v... là đức Phật thật sẽ diệt được nghiệp chướng, phá được phiền hoặc, chứng tam muội, thoát sanh tử. Nếu coi đó chỉ là đất, gỗ, vàng, tranh vẽ thì tượng cũng chỉ là đất, gỗ, vàng, tranh vẽ mà thôi! Nếu khinh nhờn đất, gỗ, vàng, tranh vẽ chẳng có lỗi gì, nhưng nếu khinh nhờn tượng Phật bằng đất, gỗ, vàng, tranh vẽ thì tội tầy trời. Ðọc tụng kinh Phật, lời Tổ, phải coi như Phật tổ đang hiện diện nói cho ta nghe, chẳng dám móng khởi chút biếng nhác nào!</p><p class="mb-0">Làm được như vậy, tôi bảo người ấy ắt sẽ cao đăng chín phẩm ngay trong đời này. Nếu không, chỉ là dạo chơi trong pháp môn, bất quá được lợi ích là biết nhiều, thấy nhiều, nói được rành rẽ, chứ chẳng mảy may thọ dụng được lợi ích chân thật chi, vẫn chỉ là chuyện nghe bên đường, nói bên lề mà thôi! Cổ nhân đối với Tam Bảo đều giữ lòng tôn kính thật sự, chứ chẳng chỉ bàn bạc ơ hờ rồi thôi. Người đời nay miệng còn chẳng buồn bàn đến một chữ, huống là thực hành ư?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ấn Quang thấy những người trích máu chép kinh gần đây chỉ là tạo nghiệp vì trọn chẳng cung kính. Mỗi lần trích máu, liền trích rất nhiều. Vào tiết Xuân Thu, qua hai ba ngày máu liền hư thối. Mùa Hạ, để nửa ngày máu liền tanh hôi, vẫn cứ dùng để chép. Có người còn đem máu phơi khô, mỗi lần chép liền dùng nước hòa máu khô nghiền ra để chép. Lại còn chép luộm thuộm, chẳng cung kính mảy may.</p><p class="mb-0">Ðúng là trò trẻ con đùa giỡn, chẳng phải là dùng máu để biểu lộ lòng chí thành, mà chỉ là trích máu chép kinh để đoạt cái danh mình là người chân thật tu hành thôi!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Chép kinh chẳng giống như viết tự bình26 , chủ yếu là dốc tinh thần vào, chứ chẳng cần xinh khéo. Chép kinh nên như tiến sĩ chép sách. Mỗi một nét bút chẳng được cẩu thả, viết tắt. Dạng chữ dùng phải là dạng chánh thức. Nếu tọa hạ27 viết theo thể loại viết trát là không được. Xưa nay, người ta hay dùng các thể loại hành thư hay thảo thư để chép kinh, Quang tôi tuyệt đối chẳng tán thành!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Người đời nay chép kinh mặc sức ngoáy bút, thật chẳng phải là chép kinh, chỉ là mượn dịp để luyện chữ đồng thời lưu lại bút tích cho hậu thế đó thôi! Chép kinh như thế không phải là hoàn toàn vô ích, nhưng chẳng qua chỉ tạo thành cái nhân đắc độ trong đời tương lai, mà cái tội khinh nhờn cũng chẳng nhỏ nhặt gì!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* ... (lược bỏ đoạn này không dịch vì Tổ luận về thể loại chữ nên dùng để chép kinh. Ngài trách một vị cư sĩ khi chép kinh đã nệ cổ, tự tiện sửa đổi những chữ trong kinh theo lối viết cổ. Thiển nghĩ, đoạn này vô ích đối với những độc giả không biết chữ Hán, nên không dịch ra)</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Nếu đối với pháp môn Tịnh Ðộ chẳng thể dốc hết một lòng quyết chí tu trì; đối với việc tuân giữ lòng thành kính, khắc kỷ, giữ lễ cứ muốn cho là chẳng muốn chấp trước, hòng khéo che đậy những thứ sơ sài, tán loạn, phóng dật, thì những lợi ích ngài đạt được chẳng giống với cái hiểu biết từ chỗ thấy hiểu kém cỏi của Quang tôi. Những điều khác trong bộ Văn Sao tạp nhạp của Quang đã nói đủ cả, nên chẳng dông dài nữa.</p><p class="mb-0">Ðối với việc xem kinh, chỉ có cung kính mới được lợi ích thật sự. Nếu chẳng cung kính, dù có được lợi ích thì lợi ích ấy chẳng qua là nương theo kinh văn hiểu ý nghĩa, chứ nghiệp tiêu, trí rạng, thầm ngộ tự tâm trọn chẳng thể cầu may như thế được! Huống hồ còn đeo cái lỗi khinh nhờn chẳng thể nói hết nổi được! Ðây chính là bệnh chung của cả thế gian, thật là buồn đau, khóc hận, thở dài sườn sượt vậy!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Chẳng thể lập riêng nghi thức lễ Phật cho người cực bận. Chỉ chí thành, khẩn thiết, miệng xưng Phật hiệu, thân lễ chân Phật, cứ thành kính như Phật đang hiện diện là được!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Chẳng thể lễ bái xá lợi, chẳng thể thân cận tùng lâm, cũng chẳng sai sót gì! Cốt sao trông thấy tượng Phật liền tưởng như đức Phật thật; thấy kinh Phật, lời Tổ, tưởng Phật, tưởng Tổ đang đích thân giảng dạy cho mình. Chí cung chí kính, chẳng lười nhác, chẳng xao nhãng chính là suốt ngày thấy Phật, suốt ngày thân cận chư Phật, Bồ Tát, Tổ Sư, thiện tri thức, xá lợi, tùng lâm.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Tri thức gởi vải trắng cho biết đến năm Nhâm Ngọ sẽ in. Ðiều này tội lỗi đến mức cùng cực, bởi lẽ đã sử dụng danh hiệu Bồ Tát một cách điếm nhục, khinh nhờn đến mức cùng tột. Huống hồ có nơi còn khinh miệt ngồi lên nữa. Năm Quang Tự thứ 20, tôi từng thấy một lần ở Phổ Ðà, năm 21 ở chùa A Dục Vương lại thấy. Tôi lấy làm lạ, than cùng điện chủ điện Xá Lợi. Ông bảo: “Ðấy là phong tục của vùng Ninh Ba”. Tôi tự thẹn mình không có sức để ngăn ngừa thói tục xấu ác này. Nếu như Quang tôi là chủ nhân một phương ắt sẽ đến nơi thanh minh lỗi hại của việc này, ngõ hầu những người có tín tâm chỉ được lợi ích, chẳng mắc điều tổn hại ấy!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Hết thảy tôn kinh Ðại Thừa Hiển Mật đức Ðại Giác Thế Tôn đã nói đều dạy lý vốn duy tâm, đạo hợp Thật Tướng, khắp ba đời chẳng đổi, cả mười cõi cùng tuân trở về nguồn, quay lại cội, là đạo sư của chư Phật, dẹp khổ, ban vui, là cha lành của chúng sanh. Nếu có thể dốc cạn lòng thành kính lễ tụng, thọ trì thì mình lẫn người đều được lợi ích thù thắng, u - hiển cùng gội ân quang, như Như Ý châu, như vô tận tạng, lấy chẳng hết, dùng chẳng tận, tùy tâm hiện lượng, sở nguyện đều mãn.</p><p class="mb-0">Kinh Lăng Nghiêm nói: Cầu vợ được vợ, cầu con được con, cầu tam muội được tam muội, cầu trường thọ được trường thọ. Như thế cho đến cầu Niết Bàn được đại Niết Bàn. Ðại Niết Bàn là cứu cánh quả đức. Nếu luận về Như Lai bổn tâm thì thật sự toàn bộ Khế Kinh chỉ là để giảng điều này. Nhưng chúng sanh chí nguyện hẹp kém, chưa chí thành đến mức cùng cực nên chẳng thể khế nhập ngay được.</p><p class="mb-0">Vì thế, phải thuận theo tâm hạnh của họ để thỏa mãn sở nguyện của mỗi người. Nếu là bậc túc căn sâu dày sẽ liền đốn minh tự tánh, triệt chứng duy tâm, phá phiền hoặc, tiến ngay vào Bồ Ðề, viên mãn phước huệ, mau thành Giác Ðạo để đạt được toàn bộ lợi ích của Khế Kinh, phô trọn bản hoài của Như Lai.</p><p class="mb-0">Ví như một trận mưa thấm khắp, cỏ cây đều tươi tốt. Cây lớn sẽ chọc mây, che lấp ánh mặt trời; cây nhỏ sẽ dài phân, tăng tấc. Ðạo vốn duy nhất Chân Như, nhưng tùy tâm mà lợi ích có thù thắng, có kém hèn. Nhưng nếu đã trồng thiện căn, rốt rồi cũng thành Phật quả. Dù chẳng thể đạt được ngay lợi ích lớn lao, cũng tạo thành nhân độ thoát. Nghe tiếng cái trống bôi thuốc độc, xa gần đều chết. Ăn chút kim cang, quyết định chẳng tiêu. Trước phải dùng dục để lôi kéo, sau mới hòng chứng nhập Phật trí, là nói về lẽ này đấy!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Kinh dạy thân người khó được, Phật pháp khó nghe. Nếu chẳng phải xưa đã có nhân duyên, tựa đề các bộ kinh Phật còn chẳng được nghe, huống là được thọ trì, đọc tụng hòng tu nhân chứng quả? Nhưng những điều Như Lai đã dạy chỉ dựa trên lý vốn sẵn có trong tâm của chúng sanh. Ngoài tâm tánh ra, trọn không có một pháp nào để được!</p><p class="mb-0">Nhưng chúng sanh còn mê, chẳng thể liễu tri, huyễn sanh vọng tưởng chấp trước đối với Chân Như Thật Tướng. Do vậy khởi tham - sân - si, tạo giết - trộm - dâm, mê trí huệ trở thành phiền não, khiến thường trụ trở thành sanh diệt, trải bao kiếp số nhiều như bụi trần, chẳng thể trở lại. May gặp các kinh điển Ðại Thừa hiển mật do đức Như Lai nói, mới biết hạt châu vẫn còn nguyên nơi vạt áo, Phật tánh vẫn thường còn, kẻ hèn hạ làm khách đó vốn là con ông trưởng giả. Trời người sáu nẻo nào phải chỗ mình ở, Thật Báo, Tịch Quang chính là quê nhà sẵn có.</p><p class="mb-0">Nghĩ lại từ vô thỉ đến nay, chưa được nghe Phật nói, tuy sẵn đủ tâm tánh này, vô cớ phải chịu luân hồi oan uổng! Thật đúng là đau đớn ứa lệ, tiếng [gào khóc] vang động cõi đại thiên! Lòng tan từng mảnh, ruột đứt từng tấc. Ân ấy, đức ấy hơn hẳn thiên địa, cha mẹ cả trăm ngàn vạn lần. Thân nghiền, xương nát chẳng báo đáp nổi!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Tăng, tục ngày nay giở xem kinh Phật chẳng mảy may cung kính, bao thứ khinh nhờn khó thể thuật tỉ mỉ từng thứ. Thói quen lưu hành đã lâu, coi đó là thuận mắt, những điều khinh nhờn khó bề kể hết. Coi pháp ngôn của Như Lai như giấy cũ rách nát.</p><p class="mb-0">Ðừng nói chi kẻ chẳng biết chỉ thú của kinh, trọn không lợi ích; ngay cả những người hiểu sâu xa nghĩa kinh cũng chỉ là tam muội nơi cửa miệng, tỏa sáng ngoài mặt. Như kẻ đói kể chuyện ăn, như người nghèo đếm của báu, tuy có công nghiên cứu, tuyệt không được ích lợi thực chứng! Huống hồ cái tội khinh nhờn đã ngập cả trời, nên thời hạn thọ khổ phải đâu chỉ hết kiếp! Tuy là nhân lành, chiêu cảm ngược thành ác quả. Dù có thành cái nhân đắc độ cho tương lai, khó tránh nhiều kiếp chịu đủ các khổ.</p><p class="mb-0">Ðem tấm lòng ôm ấp nỗi thảm thương này dám bày tỏ những điều rơm rác để mong ai nấy vâng làm theo lời Phật, ngõ hầu chỉ được lợi ích, chẳng bị tổn hại.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Kinh Kim Cang nói: “Như chỗ nào có kinh điển thì chỗ đó có Phật, là đệ tử phải tôn trọng”. Lại nói: “Nơi nơi chốn chốn nếu có kinh này thì hết thảy thế gian, trời, người, a-tu-la đều phải nên cúng dường. Phải biết chỗ ấy chính là tháp [Phật], đều phải nên cung kính, làm lễ, nhiễu quanh, dùng các thứ hoa hương để rải lên trên ấy. Vì sao phải như vậy? Là vì hết thảy chư Phật và pháp Vô Thượng Chánh Ðẳng Chánh Giác của chư Phật đều xuất phát từ kinh này”.</p><p class="mb-0">Trong các kinh Ðại Thừa, kinh nào cũng dạy người phải cung kính kinh điển, chứ chẳng phải một kinh. Ấy là vì các kinh Ðại Thừa là mẹ của chư Phật, là thầy của Bồ Tát, là Pháp Thân xá-lợi của tam thế Như Lai, là thuyền từ thoát khổ của cửu giới chúng sanh. Dù cao đăng Phật Quả, vẫn còn phải kính pháp hòng báo đền nguồn gốc, chẳng quên đại ân. Vì thế, kinh Niết Bàn nói: “Pháp là mẹ Phật, Phật từ Pháp sanh”.</p><p class="mb-0">Tam thế Như Lai đều cúng dường Pháp; huống hồ phàm phu sát đất khắp thân toàn là nghiệp lực, như tội nặng bị tù, giam cầm trong ngục lâu ngày, không do đâu được thoát ra! May sao nhờ thiện căn túc thế được thấy kinh Phật, như tù được lệnh phóng thích, mừng rỡ vô ngần, bèn dùng ngay pháp ấy để mãi mãi từ biệt tam giới, vĩnh viễn xuất ly lao ngục sanh tử, tự chứng tam thân, về thẳng quê nhà Niết Bàn. Nhờ nghe kinh mà được vô biên lợi ích, há nên do tri kiến cuồng vọng bèn chẳng kiêng nể, khác nào tục nho đọc sách, tự tiện khinh nhờn ư?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ðạo của Thánh Hiền chỉ là Thành và Minh. Thánh, Cuồng phân biệt chỉ trong một niệm. Chẳng niệm Thánh ắt biến thành Cuồng, khắc chế cuồng niệm bèn trở thành Thánh. Lẽ nắm - buông, được - mất ví như thuyền chèo ngược nước, chẳng tiến phải lùi, chẳng thể chẳng gắng sức chống chọi mà lơi lỏng chút nào.</p><p class="mb-0">Phải biết rằng một chữ Thành, thánh lẫn phàm cùng có một Chân Tâm hệt như nhau chẳng khác. Một chữ Minh phải luôn giữ gìn, xem xét, là cách để đạt đạo từ phàm chí thánh. Nhưng trong địa vị phàm phu, trong những sinh hoạt hằng ngày, muôn cảnh chen nhau, chẳng nhận biết, soi xét một cảnh sẽ khó tránh trong chớp mắt liền nẩy sanh những tình tưởng trái lẽ. Tình tưởng ấy đã sanh, chân tâm liền bị vướng mối tệ, nên hành vi nào cũng đều chẳng trung chánh. Nếu chẳng vận dụng một phen công phu thiết thực trừ khử cho sạch thì ngày càng tệ hơn, chẳng biết đã tuột xuống tận đáy. Uổng cho cái tâm làm thánh sẵn có vĩnh viễn bị chìm đắm trong loài phàm ngu, chẳng đáng buồn sao?</p><p class="mb-0">Nhưng làm thánh chẳng khó, chỉ là tự làm sáng cái đức sáng của chính mình. Muốn làm sáng cái đức sáng thì phải từ “trí tri cách vật” mà hạ thủ. Nếu chẳng thể cực lực hiểu rõ, trừ khử những mối nhân dục (tham muốn của con người) thì Chân Tri sẵn có quyết khó thể hiển hiện triệt để được!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Dù là trai chủ thỉnh pháp hay các Sư tác pháp, ai nấy đều kiệt thành tận kính thì lợi ích chẳng thể nói được nổi. Như Xuân về, khắp cõi đất thảo mộc đều nảy nở xanh tươi; trăng sáng vằng vặc giữa trời, sông ngòi thảy đều hiện bóng. Do đó, người đương sống sẽ nghiệp tiêu, trí rạng, chướng tận, phước tăng, tiên vong đều sanh Tịnh Ðộ, sở cầu không gì chẳng được toại ý, lại khiến cho oán thân bao kiếp, pháp giới hàm thức cùng gội Tam Bảo ân quang, cùng kết duyên chủng Bồ Ðề.</p><p class="mb-0">Nếu trai chủ chẳng thành kính thì công đức xuất tiền chỉ hữu hạn, nhưng tội lỗi khinh mạn thì vô cùng. Tăng chúng chẳng thành kính, chính là thổi ống bễ thành kinh, gõ chày cối thành lễ28 , lúc Tam Bảo, long thiên giáng lâm cứ xử sự lỗ mãng, luộm thuộm, tắc trách, mà không đến nỗi núi tội ngất ngưởng, biển phước cạn khô, sống mắc tai vạ, chết bị đày phạt há có được chăng?</p></div>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
    <h3 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Chú giải:</h3>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/50 p-5 space-y-2 text-base text-text-secondary dark:border-primary-900 dark:bg-primary-950/20"><p class="mb-0">25 . Phóng thí: đánh trung tiện (break wind, passing gas).</p><p class="mb-0">26 . Tự bình: những bức thư họa, hoặc chữ viết trên quạt, trên giấy, trên lụa để phô diễn tài thư pháp.</p><p class="mb-0">27 . Tọa hạ: tiếng tôn xưng người khác, thường dùng để gọi người có chức vụ.</p><p class="mb-0">28 . Ý nói: đọc kinh không thành kính chỉ có âm điệu nhịp nhàng như thợ rèn thổi bễ, đánh các pháp khí làm lễ nhưng chẳng thành kính khác gì người giã gạo, cứ nhịp chày đều đều cho xong việc.</p></div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo đoạn trích, hai điều căn bản nhất mà người tu hành nhất định phải giữ gìn để mau tiêu nghiệp lụy và chứng Vô Sanh là gì?",
    "options": {
      "a": "Trí huệ và Thiền định",
      "b": "Tụng kinh và Bái sám",
      "c": "Bố thí và Trì giới",
      "d": "Thành và Cung kính"
    },
    "answer": "d"
  },
  {
    "question": "Tác giả so sánh người muốn tiêu nghiệp lụy mà không dốc sức vào lòng thành và sự cung kính với hai hình ảnh nào trong tự nhiên?",
    "options": {
      "a": "Người đui đi đêm và người điếc nghe nhạc",
      "b": "Cá trên đất khô và rồng thiếu nước",
      "c": "Cây không rễ và chim không cánh",
      "d": "Thuyền không chèo và xe không bánh"
    },
    "answer": "c"
  },
  {
    "question": "Mối quan hệ giữa mức độ cung kính đối với Phật pháp và lợi ích tiêu tội, tăng phước được tác giả miêu tả ra sao?",
    "options": {
      "a": "Cung kính hay khinh mạn đều nhận lợi ích như nhau vì Phật tánh bình đẳng",
      "b": "Lợi ích phụ thuộc hoàn toàn vào số lượng kinh điển đã thuộc lòng",
      "c": "Sự cung kính chỉ mang lại phước báu cõi trời người, không thể tiêu được tội",
      "d": "Lợi ích thu được tỉ lệ thuận trực tiếp với mức độ cung kính"
    },
    "answer": "d"
  },
  {
    "question": "Khi đối trước kinh điển, tác giả khuyên người tu học nên coi kinh điển là gì?",
    "options": {
      "a": "Công cụ dùng để tranh luận hòng đạt tiếng là bậc thông gia",
      "b": "Thầy của tam thế chư Phật và Pháp Thân xá-lợi của Như Lai",
      "c": "Phương tiện tạm thời bằng giấy mực để tra cứu kiến thức",
      "d": "Tác phẩm văn học cổ cần phân tích tỉ mỉ ngữ pháp và lý luận"
    },
    "answer": "b"
  },
  {
    "question": "Khi xem kinh để tùy phận được lợi ích thật sự cho bản thân, phương pháp đọc nào được hướng dẫn?",
    "options": {
      "a": "Vừa đọc vừa tra cứu chú sớ và phân tích rõ nghĩa từng câu từng đoạn",
      "b": "Đọc ghi chép lại các ý chính và đối chiếu với sách vở Nho giáo",
      "c": "Đọc một loạt từ đầu đến cuối, không dùng tâm phân biệt hay suy lường nghĩa lý",
      "d": "Chỉ chọn đọc những đoạn dễ hiểu và bỏ qua các đoạn sâu xa"
    },
    "answer": "c"
  },
  {
    "question": "Tác giả cảnh báo điều gì nếu một người suốt ngày quanh năm chỉ lo nghiên cứu nghĩa lý chú sớ mà không lấy việc xem kinh chí thành làm chính?",
    "options": {
      "a": "Sẽ mau chóng trở thành bậc đại pháp sư điều phục đại chúng",
      "b": "Sẽ tự động tiêu trừ mọi túc nghiệp và đốn ngộ Thật Tướng",
      "c": "Chỉ là bàn suông ngoài miệng, không can hệ gì đến việc giải thoát sanh tử khi lâm chung",
      "d": "Giúp tâm bình đẳng mà không cần tuân giữ bất kỳ giới luật nào"
    },
    "answer": "c"
  },
  {
    "question": "Thái độ và dạng chữ đúng đắn được tác giả yêu cầu khi chép kinh Phật là gì?",
    "options": {
      "a": "Tự ý sửa đổi các từ trong kinh theo lối viết cổ để tỏ ra nệ cổ",
      "b": "Viết thật nhanh để kịp hoàn thành số lượng lớn kinh văn trong thời gian ngắn",
      "c": "Dốc tinh thần vào, dùng dạng chữ chánh thức, không cẩu thả hay viết tắt",
      "d": "Dùng thể chữ hành thư hoặc thảo thư bay bổng để biểu diễn tài thư pháp"
    },
    "answer": "c"
  },
  {
    "question": "Vì sao hành vi trích máu chép kinh của một số người thời đó lại bị tác giả phê phán là tạo nghiệp?",
    "options": {
      "a": "Máu người không thể dùng làm mực viết theo quy định của Phật giáo",
      "b": "Hành vi trích máu làm tổn hại thân thể phàm phu, trái với giới luật Phật giáo",
      "c": "Thiếu lòng chí thành cung kính, chép luộm thuộm và mượn đó để đoạt danh tiếng",
      "d": "Việc này tốn quá nhiều thời gian và gây lãng phí tài nguyên"
    },
    "answer": "c"
  },
  {
    "question": "Theo văn bản, phương pháp xem kinh không khởi tâm phân biệt mang lại lợi ích gì cho người có căn cơ độn kém?",
    "options": {
      "a": "Trở thành bậc đại thư pháp nổi tiếng ngay trong đời này",
      "b": "Tiêu trừ nghiệp chướng và tăng trưởng phước huệ",
      "c": "Có khả năng tự lập ra các nghi thức lễ Phật riêng cho bản thân",
      "d": "Thuộc lòng toàn bộ các bộ chú sớ của cổ đức"
    },
    "answer": "b"
  },
  {
    "question": "Đâu là quan điểm đúng đắn về sự phối hợp giữa niệm Phật và xem kinh đối với người tu Tịnh Độ?",
    "options": {
      "a": "Phá bỏ giới luật và xem kinh niệm Phật đều là không chấp trước",
      "b": "Lấy niệm Phật làm chánh, xem kinh làm trợ hạnh",
      "c": "Lấy xem kinh và nghiên cứu chú sớ làm chánh, niệm Phật làm phụ",
      "d": "Chỉ cần xem kinh là đủ, không cần niệm Phật hay lễ bái"
    },
    "answer": "b"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-18-iv-4-khuyen-nen-giu-long-thanh-kinh',
  slug: 'bai-18-iv-4-khuyen-nen-giu-long-thanh-kinh',
  title: '4. Khuyên nên giữ lòng thành kính',
  type: 'article',
  status: 'published',
  order: 5,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Bí_quyết_tu_học_Phật_pháp.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Bí_Quyết_Siêu_Phàm_Nhập_Thánh.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/yYqImV0E7lU',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3YGMOhKVhTu4FyDzRFav06?si=WGmAxW29SKC3Ixys5v3Waw',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Khuyên nên giữ lòng thành kính',
    passPercentage: 70,
    questions,
  },
}

export default lesson
