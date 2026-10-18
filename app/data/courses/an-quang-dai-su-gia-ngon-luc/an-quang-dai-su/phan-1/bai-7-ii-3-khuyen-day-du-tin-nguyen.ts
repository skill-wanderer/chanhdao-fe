import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/2.khuyen-tin-hanh-nguyen/3.khuyen-day-du-tin-nguyen'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">3. Khuyên đầy đủ tín nguyện</h2>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Dù kính cẩn tu trì Ngũ Giới, Thập Thiện, được thân trời người, nhưng phước lạc nhân gian lại chính là cội rễ đọa lạc. Dù trên trời phiền hoặc chẳng mãnh liệt như trong nhân gian, nhưng một khi phước trời đã tận, nhất định sẽ đọa xuống. Do túc phước chưa tận, nên được hưởng phước. Do hưởng phước nên tạo nghiệp. Ðã tạo nghiệp rồi thì đọa lạc ác đạo chỉ trong khoảng nháy mắt, một hơi thở thôi! Huống hồ có kẻ khi mạng trời đã hết, vì sức ác nghiệp đời trước đã chín, liền đọa ngay vào ác đạo!</p>
    <p>Vì thế, cổ đức bảo người tu hành nhưng không có chánh niệm tu trì Tịnh nghiệp, chỉ được phước báo trời người thì gọi là oán thù đời thứ ba. Kinh Pháp Hoa nói: “Tam giới không yên, giống như nhà lửa. Thật đáng sợ hãi”. Người biết tốt xấu phải gấp cầu xuất ly để được yên ổn mới là kế sách bậc thượng vậy.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Một pháp Niệm Phật là cậy vào Phật lực để thoát tam giới, sanh về Tịnh Ðộ. Nay đã chẳng phát nguyện thì có tín chăng? (Người tin thật sự ắt sẽ phát nguyện tha thiết). Tín nguyện đều không, chỉ niệm Phật danh thì thuộc về Tự Lực. Vì không tín nguyện nên chẳng thể cảm ứng đạo giao cùng hoằng thệ của đức Di Ðà. Nếu đã hết Kiến Tư Hoặc, có lẽ được vãng sanh. Còn nếu hoàn toàn chưa đoạn hay chưa đoạn hết sạch thì nghiệp căn vẫn còn, làm sao thoát ngay khỏi luân hồi cho được? Ngũ Tổ Giới Diễn, Thảo Ðường Thanh v.v... chính là những chứng cớ xác thực.</p>
    <p>Phải biết rằng không có tín nguyện mà niệm Phật sẽ chẳng khác gì tham cứu bên Tông, bên Giáo. Dù có được vãng sanh nhưng nhân quả chẳng phù hợp với nhau! Ngài Ngẫu Ích nói: “Ðược vãng sanh hay không toàn là do có tín nguyện hay không. Phẩm vị cao hay thấp toàn là do trì danh sâu hay cạn”. Ðấy chính là phán định chắc như sắt vậy.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Bình sinh tuyệt chẳng có tín nguyện thì khi lâm chung nhất định khó cậy vào Phật lực. Ðã bảo là “thiện ác đồng thời cùng hiện ngay” thì chẳng luận là bốn chữ A Di Ðà Phật chẳng hiện nên chẳng được vãng sanh, mà dù có hiện cũng chẳng được vãng sanh! Vì sao vậy? Do chẳng nguyện vãng sanh, do chẳng cầu Phật, nên chẳng được Phật tiếp dẫn. Kinh Hoa Nghiêm nói: “Giả sử ác nghiệp có thể tướng thì mười phương hư không chẳng thể chứa đựng nổi”. Cổ đức nói: “Như người mắc nợ, chủ nợ nào mạnh sẽ kéo đi trước”. Tâm tình đa đoan, đặt nặng nơi nào sẽ rơi về đó. Nay thiện ác đều hiện, do không có tín nguyện, chẳng thể làm gì ác nghiệp được! Phải biết rằng: Cậy vào tự lực thì nếu còn một mảy ác nghiệp sẽ chẳng thể xuất ly sanh tử, huống là nhiều ác nghiệp?</p>
    <p>Lại nếu không tín nguyện, dù niệm đến Nhất Tâm thì trong vô lượng vô biên người như thế, may ra có một hai người được vãng sanh. Quyết chẳng thể lấy đó làm gương để cắt đứt thiện căn của hết thảy người vãng sanh Tịnh Ðộ trong đời sau.</p>
    <p>Vì cớ sao? Người có thể cậy vào tự lực, niệm đến mức nghiệp tận tình không, chứng Vô Sanh Nhẫn, trong cả cõi đời ít có được một, hai. Nếu ai nấy tu hành theo cách đó, bỏ Tín Nguyện chẳng theo, thì những chúng sanh bình thường sẽ ở mãi trong biển khổ, không cách nào xuất ly, đều là do bị một lời này chèn ép cả. Thế mà kẻ ấy vẫn dương dương đắc ý, cho mình là thật cao, chẳng biết mình bị đoạn Phật huệ mạng, là chúng sanh ngu si nói cuồng. Buồn thay!</p>
    <p>Với pháp Tịnh Ðộ, phải tránh nhìn bằng một mắt, chẳng được đem những giáo nghĩa thông thường để so bì. Nếu Như Lai chẳng mở ra pháp này thì sự liễu sanh thoát tử của chúng sanh đời mạt sẽ chẳng thể thấy được.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Hãy thường nên phát tâm quyết định, lâm chung quyết định muốn được sanh về Tây Phương. Ðừng nói là chẳng muốn thọ lại thân người tầm thường, ngay cả thân vua trong cõi trời người và xuất gia làm Tăng, nghe một ngộ cả ngàn, đắc đại tổng trì, hoằng hóa đại pháp, làm thân cao tăng lợi khắp chúng sanh cũng coi như chỗ chất chứa tội lỗi, độc hại, tâm quyết định chẳng sanh một niệm muốn thọ. Quyết định như thế thì tín nguyện hạnh của mình mới cảm được thệ nguyện của Phật, mới được Phật nhiếp thọ. Cảm ứng đạo giao, được Phật tiếp dẫn, thẳng lên cửu phẩm, vĩnh viễn thoát khỏi luân hồi.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Phải biết rằng: Tây phương Cực Lạc thế giới, đừng nói là phàm phu chẳng đến được, ngay cả thánh nhân Tiểu Thừa cũng chẳng đến được vì nơi ấy thuộc về cảnh giới Ðại Thừa chẳng thể nghĩ bàn. Tiểu thánh hồi tâm hướng đại thì liền đến được. Phàm phu nếu không có tín nguyện để cảm Phật, dù tu hết thảy các hạnh thù thắng khác lẫn hạnh trì danh thù thắng cũng chẳng thể vãng sanh. Vì thế, Tín - Nguyện là tối khẩn yếu. Ngài Ngẫu Ích nói: “Ðược vãng sanh hay chăng toàn là do có tín nguyện hay không, phẩm vị cao hay thấp toàn là do trì danh sâu hay cạn”. Dù ngàn đức Phật xuất thế cũng chẳng thay đổi được lời phán định chắc như sắt này. Hễ tin cho tới, dám chắc Tây Phương ông phải có phần.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Nếu luận về pháp môn Niệm Phật thì chỉ có ba pháp Tín - Nguyện - Hạnh là tông yếu. Ðầy đủ ba pháp, quyết định vãng sanh. Nếu không có tín thật, nguyện thiết, dù có chân hạnh cũng chẳng thể vãng sanh, huống là kẻ tu hành hời hợt, qua loa ư? Ngài Ngẫu Ích từng bảo: “Ðược vãng sanh hay chăng toàn là do có tín nguyện hay không, phẩm vị cao hay thấp toàn là do trì danh sâu hay cạn”. Bởi lẽ, pháp này cả ba đời chẳng dễ thường bàn, là đạo mầu độ khắp ba căn. Hãy nên dốc trọn toàn thân nương về tu tập, mới hòng chứng được lợi ích thật sự. Ba thứ Tín - Nguyện - Hạnh sách Thập Yếu đã giảng rõ từng thứ. Nhưng trọng yếu nhất là trong phần giảng về Ngũ Trùng Huyền Nghĩa của sách Yếu Giải, phần thứ ba là Minh Tông (minh định tông thú của kinh) đã phát huy ba pháp này tinh tường bậc nhất. Tiếp đó, trong mỗi một đoạn văn, Tổ đều giảng giải về Tín - Nguyện - Hạnh. Hãy nên đọc thật kỹ cuốn sách chẳng thể thiếu này.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Muốn sanh Tây Phương, trước hết phải có tín thật, nguyện thiết. Nếu không có lòng tin chân thật, nguyện thiết tha, dù cho tu hành vẫn chẳng thể cảm ứng đạo giao cùng Phật, chỉ được phước báo nhân thiên và tạo thành cái nhân đắc độ trong đời vị lai mà thôi. Nếu đầy đủ Tín - Nguyện thì được vãng sanh vạn người chẳng sót một ai. Tổ Vĩnh Minh bảo: “Vạn người tu, vạn người đến” là nói về Tín Nguyện Hạnh đấy!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Phàm lễ bái, đọc tụng kinh điển Ðại Thừa và làm hết những việc lợi ích người đời thảy đều đem hồi hướng Tây Phương, chẳng cứ gì niệm Phật mới hồi hướng Tây Phương được. Nếu đem các công đức khác hồi hướng về phước báo thế gian thì niệm chẳng quy một mối, càng khó vãng sanh. Phải biết rằng nếu thật sự niệm Phật sẽ chẳng cầu phước báo thế gian, nhưng tự được hưởng phước báo thế gian. Nếu cầu phước báo thế gian, chẳng chịu hồi hướng vãng sanh thì phước báo thế gian đạt được đó sẽ trở thành tệ kém. Tâm chẳng chuyên nhất nên càng khó quyết định vãng sanh!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Người niệm Phật chỉ nên chân thành, thiết tha niệm Phật, tự có thể nương vào Phật tự lực tránh khỏi nạn đao binh, lửa, nước. Chỉ khi nào vì túc nghiệp lôi kéo hoặc do trọng báo địa ngục chuyển thành báo nhẹ trong hiện đời thì mới mắc phải những nạn ấy. Nhưng do thường ngày lòng tin chân thành, nguyện thiết tha, nên ngay khi ấy được Phật tiếp dẫn. Dù hiện tại chưa chứng tam muội nhưng đã dự vào dòng thánh. Tự thân như hình bóng, đao binh thủy hỏa chẳng trở ngại chi. Dù hiện tại gặp phải tai ương, thật chẳng bị khổ. Cả thế giới mênh mông, mấy ai được như vậy chăng?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Nguyện lìa Sa Bà như tù nhân mong thoát lao ngục. Nguyện sanh Cực Lạc như cùng tử mong về lại cố hương. Nếu trước khi chưa sanh về Tịnh Ðộ mà phải nhận lấy ngôi vua trong cõi trời người thì cũng phải coi đó là nhân duyên đọa lạc, trọn không có một niệm mong cầu, hâm mộ. Dẫu đời sau chuyển nữ thành nam, xuất gia từ thơ ấu, nghe một ngộ cả ngàn, đắc đại tổng trì, cũng phải coi đó là đường quanh nẻo rẽ, trọn không có tâm niệm nào mong mỏi cả. Chỉ mong lúc lâm chung, được Phật tiếp dẫn, vãng sanh Tây Phương.</p>
    <p>Ðã được vãng sanh sẽ liễu sanh thoát tử, siêu phàm nhập thánh, ở vào địa vị Bổ Xứ, chứng Vô Sanh Nhẫn, nhìn lại những sự như làm vua trong cõi trời người, xuất gia làm Tăng v.v... nào bằng Tịnh Ðộ. Tu các pháp môn khác trải bao kiếp khó nhọc, chuyên cần, nào được giải thoát! Như lửa đóm sánh với vầng mặt trời rạng rỡ, như gò mối sánh cùng Thái Sơn, khó ngăn buồn thương, khó kìm run rẩy! Bởi vậy, người tu Tịnh Ðộ trọn chẳng thể cầu những sự như hưởng phước lạc nhân thiên trong đời sau và đời sau xuất gia làm Tăng!</p>
    <p>Nếu có chút mảy may mong cầu đời sau thì là chẳng có lòng tin chân thành, nguyện thiết tha, đối với thệ nguyện của đức Di Ðà sẽ bị cách trở, chẳng thể cảm ứng đạo giao, được Phật tiếp dẫn! Như vậy là đã dùng diệu hạnh thù thắng chẳng thể nghĩ bàn tạo thành phước nhân hữu lậu trong cõi nhân thiên.</p>
    <p>Vả nữa, lúc hưởng phước ắt sẽ tạo nghiệp. Ðã tạo ác nghiệp ắt khó tránh ác báo. Như bỏ chất độc vào đề hồ khiến người uống vào phải chết. Kẻ chẳng khéo dụng tâm, mắc họa như thế. Phải nên triệt để cắt đứt ý niệm ấy mới hòng được lợi ích hoàn toàn nơi Tịnh Ðộ, toàn thân thọ dụng vậy!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Dù thọ cả trăm năm, chỉ trong khoảng khảy ngón tay, thở hắt ra một hơi là chẳng còn nữa! Hãy tìm đường thoát; chớ để đến lúc lâm chung, hối cũng chẳng kịp! Thường nhớ kinh dạy: “Thân người khó được, trung quốc khó sanh, Phật pháp khó nghe, tín tâm khó khởi”. Nay may đủ cả bốn điều, càng phải nên nỗ lực như đã lên được núi báu, phải tìm cho được ngọc Ma Ni.</p>
    <p>Chúng sanh vì còn trong địa vị phàm phu, chưa đoạn Hoặc Nghiệp, sanh tử giải quyết chưa xong, khó tránh đọa lạc; cho nên, đức Như Lai cực lực khuyên chúng sanh phát tâm chân tín và nguyện tâm thiết tha, trì danh hiệu Phật cầu sanh Tịnh Ðộ. Ðem hết thảy công đức đã tạo: cúng dường Tam</p>
    <p>Bảo, giữ giới cả đời... chẳng cầu phước báo đời sau trong cõi nhân thiên, chẳng cầu đời này trường thọ, khỏe mạnh, yên vui, chỉ cầu lâm chung vãng sanh Tịnh Ðộ thì phù hợp với thệ nguyện của Phật, cảm ứng đạo giao, chắc chắn được mãn nguyện. Như người rớt xuống biển, có thuyền đến cứu, nếu chịu lên thuyền sẽ lên được bờ kia.</p>
    <p>Cầu phước nhân thiên, chẳng cầu vãng sanh như chẳng lên thuyền, khó khỏi chết chìm. Phật muốn ông siêu phàm nhập thánh, ông lại chỉ nguyện được phước hữu lậu. Một khi phước báo đã hết, vĩnh viễn đọa trong đồ. Khác nào dùng ngọc Ma Ni để ném chim sẻ, được thì ít, mất quá nhiều. Chẳng tiếc lắm ư? Hãy nên tự cảnh tỉnh!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Nếu muốn trong đời này được hưởng lợi ích chân thật, hãy nên nương vào pháp môn Tịnh Ðộ, tín nguyện niệm Phật cầu sanh Tây Phương thì quyết định được liễu sanh thoát tử. Nếu chẳng y vào pháp môn Niệm Phật, đừng kể chi kẻ chưa được chân truyền Phật giáo, ngay cả kẻ đã được chân truyền cũng chẳng thể liễu sanh thoát tử. Vì sao thế? Dù được chân truyền, đại triệt, đại ngộ, nhưng vẫn chưa thật chứng. Có chứng mới liễu sanh thoát tử được, chứ chỉ ngộ thì chẳng thể liễu!</p>
    <p>Tu các pháp môn khác đều phải đoạn Hoặc chứng chân mới có thể liễu sanh thoát tử. Tu pháp môn Tịnh Ðộ chỉ cần đủ tín thật, nguyện thiết, trì danh hiệu Phật, đừng làm các điều ác, vâng làm các điều lành, Chánh -Trợ cùng hành, chẳng những được vãng sanh mà phẩm vị còn ưu thắng nữa. Chẳng riêng kẻ tin tưởng thuần thành, siêng tu được vãng sanh, mà hạng ngũ nghịch thập ác sanh lòng hổ thẹn lớn lao, chí tâm niệm Phật mấy tiếng thì ngay lúc mạng chung nhất định được vãng sanh. Do lòng từ rộng lớn của Phật, chuyên vì sự nghiệp độ sanh, nhất niệm hồi quang liền được nhiếp thọ. Như thế gọi là “nương Phật từ lực, đới nghiệp vãng sanh”.</p>
    <p>Chúng sanh đời mạt chẳng nương theo Tịnh Ðộ, tu các pháp môn khác chỉ được phước báo nhân thiên và tạo nhân duyên đắc độ cho đời vị lai mà thôi. Do không sức đoạn Hoặc, gốc sanh tử vẫn còn, dễ hồ chẳng nảy mầm mộng sanh tử nữa ư?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Pháp Niệm Phật trọng tại tín - nguyện. Tín nguyện chân thiết, dù trong tâm chưa thanh tịnh cũng được vãng sanh. Vì sao vậy? Do chí tâm niệm Phật là năng cảm, nên A Di Ðà Phật liền năng ứng. Như nước trong sông, biển, chưa thể dứt sạch tướng động; nhưng nếu không gió cuồng, sóng to thì vầng trăng rạng ngời trên không sẽ hiện bóng lồ lộ. Cảm ứng đạo giao như mẹ con nhớ nhau. Pháp khác chuyên trọng tự lực, chẳng nhờ vào Phật lực. Cứ do đấy mà hiểu được nghĩa này vậy.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Ước theo những cách giảng dạy thông thường thì còn trong địa vị phàm phu muốn liễu sanh thoát tử thật chẳng phải chuyện dễ. Nếu ước theo pháp môn đặc biệt tín nguyện niệm Phật cầu sanh Tịnh Ðộ thì ngay trong hiện đời ắt được liễu thoát. Nếu như đầy đủ tín thật, nguyện thiết thì trong vạn người nhất định chẳng sót một ai. Chúng sanh đời mạt chỉ có mỗi một pháp này đáng để nương cậy. Bởi thế, khi vận mạng đạo pháp ngày càng suy giảm thì pháp này càng thích đáng căn cơ, thiện tri thức càng đề xướng thiết tha. Chân thật tu trì liền được vãng sanh, là điều chứng nghiệm từng thấy.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Pháp môn Tịnh Ðộ lấy ba pháp Tín - Nguyện - Hạnh làm tông. Có tín nguyện thì chẳng luận tu hành nhiều - ít, cạn - sâu đều được vãng sanh. Không tín nguyện dẫu đạt đến địa vị cả Năng lẫn Sở cùng mất, hồi thoát căn trần thì cũng khó được vãng sanh.</p>
    <p>Nếu như thật sự đạt được Thật Lý Năng lẫn Sở cùng mất, hồi thoát căn trần, có thể cậy vào tự lực để liễu sanh thoát tử thì chẳng phải bàn đến nữa. Nhưng nếu công phu chưa thấy được lý này, vẫn còn chưa thật chứng, nếu không có tín nguyện, cũng khó vãng sanh.</p>
    <p>Thiền gia giảng Tịnh Ðộ quy về Thiền tông, bỏ qua tín nguyện. Nếu thật sự y theo đó mà tu, họa may được khai ngộ, nhưng chưa đoạn Hoặc nghiệp, muốn liễu sanh tử thì có mơ cũng mơ chẳng được. Bởi phàm phu vãng sanh là do tín nguyện cảm Phật, nên có thể nương vào Phật từ lực đới nghiệp vãng sanh. Nay đã chẳng sanh tín nguyện, lại toan đem Phật lẫn cõi nước quy hết vào tự tâm, làm sao cảm Phật được? Cảm ứng chẳng phù hợp thì chúng sanh là chúng sanh, Phật là Phật, biến pháp Hoành Siêu (siêu việt tam giới theo chiều ngang) thành pháp Thụ Xuất (thoát tam giới theo chiều dọc), được lợi thì ít nhưng lại bị tổn hại rất sâu! Chẳng thể không biết điều này!</p>
    <p>Ðược lợi là do tuân theo thuyết ấy, họa chăng được khai ngộ. Còn bị tổn hại là do bỏ đi tín nguyện sẽ không cách chi nhờ vào Phật từ lực được. Bởi vậy, tôi bảo: “Người thực sự tu Tịnh Ðộ chẳng được dùng đến lời khai thị của nhà Thiền, vì tông chỉ của pháp môn bất đồng vậy”.</p>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
  </section>
</div>
`

const questions: QuizQuestion[] = 
[
  {
    "question": "Trong giáo lý Tịnh Độ, thuật ngữ \"oán thù đời thứ ba\" (tam thế oán) dùng để cảnh báo nguy cơ nào đối với người tu hành?",
    "options": {
      "a": "Người tu hành vi phạm nghiêm trọng giới luật khiến cho chúng sanh kết oán thù sâu nặng qua ba kiếp liên tiếp không thể giải thoát.",
      "b": "Tu tập không đúng phương pháp gây ra sự oán thù và trở ngại từ chư thiên, loài người và chúng sanh trong ba cõi.",
      "c": "Người tu Thiền tông nhưng chê bai Tịnh Độ tông nên bị quả báo chịu khổ đau liên tiếp qua ba đời.",
      "d": "Tu hành được phước báo cõi trời người nhưng thiếu chánh niệm Tịnh nghiệp, dẫn đến kiếp thứ hai hưởng phước tạo nghiệp và kiếp thứ ba đọa vào ác đạo."
    },
    "answer": "d"
  },
  {
    "question": "Theo lời phán định nổi tiếng của Ngài Ngẫu Ích, yếu tố nào quyết định trực tiếp việc người tu có được vãng sanh Tây Phương Cực Lạc hay không?",
    "options": {
      "a": "Công phu trì danh niệm Phật sâu hay cạn.",
      "b": "Việc đoạn trừ sạch sẻ Kiến Tư Hoặc trong tâm.",
      "c": "Việc có đầy đủ Tín và Nguyện hay không.",
      "d": "Số lượng câu niệm Phật đạt được mỗi ngày."
    },
    "answer": "c"
  },
  {
    "question": "Theo chỉ dẫn, khi người tu Tịnh Độ thực hiện các thiện hạnh như cúng dường Tam Bảo, giữ giới hay tụng kinh Đại Thừa, họ nên ứng xử như thế nào để đảm bảo lợi ích vãng sanh?",
    "options": {
      "a": "Ngừng làm các việc thiện xã hội để tập trung duy nhất vào việc ngồi niệm Phật.",
      "b": "Đem toàn bộ công đức đó hồi hướng cầu sanh Tây Phương Tịnh Độ chứ không cầu phước báo nhân thiên.",
      "c": "Dành công đức niệm Phật để cầu vãng sanh, còn các việc thiện khác dùng để cầu sức khỏe và giàu sang đời này.",
      "d": "Hồi hướng công đức để mong kiếp sau chuyển thân nam và tiếp tục làm cao tăng hoằng hóa chúng sanh."
    },
    "answer": "b"
  },
  {
    "question": "Khi lâm chung, một người bình sinh tuyệt đối không có Tín - Nguyện dẫu danh hiệu Phật có hiện ra trước mắt thì vì sao vẫn không thể vãng sanh?",
    "options": {
      "a": "Do tâm không nguyện vãng sanh và không cầu Phật, nên chẳng thể cảm ứng được sự tiếp dẫn của Đức Phật.",
      "b": "Do cảnh giới Tây Phương tuyệt đối cấm phàm phu bước vào nếu chưa chứng đắc tam muội.",
      "c": "Do Đức Phật A Di Đà từ chối tiếp dẫn những ai còn mang nhiều ác nghiệp từ trước.",
      "d": "Do danh hiệu Phật khi hiện ra lúc lâm chung bị các chủ nợ ác nghiệp kéo đi mất."
    },
    "answer": "a"
  },
  {
    "question": "Sự khác biệt căn bản giữa phương pháp giải thoát của Tịnh Độ tông và các pháp môn thông thường (Thiền tông, Giáo tông) là gì?",
    "options": {
      "a": "Các pháp môn khác giúp liễu sinh tử dễ dàng hơn Tịnh Độ vì không cần phải có tín tâm.",
      "b": "Tịnh Độ nương vào Phật lực để \"đới nghiệp vãng sanh\", trong khi các pháp môn khác dựa vào tự lực đòi hỏi phải đoạn Hoặc chứng Chân.",
      "c": "Tịnh Độ bắt buộc người tu phải đạt đến cảnh giới nghiệp tận tình không trước khi lâm chung.",
      "d": "Các pháp môn thông thường chỉ mang lại phước báo nhân thiên chứ không tạo nhân duyên đắc độ đời sau."
    },
    "answer": "b"
  },
  {
    "question": "Giáo lý Tịnh Độ thể hiện sự rộng lớn của Phật từ như thế nào đối với hạng người phạm tội \"ngũ nghịch thập ác\"?",
    "options": {
      "a": "Họ phải tự lực đoạn trừ sạch sẻ nghiệp căn ngũ nghịch trước thời điểm lâm chung.",
      "b": "Nếu họ sanh lòng hổ thẹn lớn lao, chí tâm niệm Phật lúc lâm chung thì nhờ Phật từ lực vẫn được đới nghiệp vãng sanh.",
      "c": "Họ bắt buộc phải chịu đọa địa ngục nhiều kiếp cho sạch tội rồi mới được niệm Phật vãng sanh.",
      "d": "Họ chỉ được hưởng phước báo nhân thiên trong đời vị lai chứ tuyệt đối không thể vãng sanh Tịnh Độ."
    },
    "answer": "b"
  },
  {
    "question": "Vì sao phàm phu dẫu tu hết thảy các hạnh thù thắng lẫn hạnh trì danh nhưng nếu thiếu Tín - Nguyện thì vẫn không thể sanh về cõi Cực Lạc?",
    "options": {
      "a": "Vì phàm phu chưa tích lũy đủ phước báu vật chất để cúng dường chư Phật ở mười phương.",
      "b": "Vì Tây Phương Cực Lạc là cảnh giới Đại Thừa chẳng thể nghĩ bàn, thiếu Tín - Nguyện thì không thể cảm Phật để vượt qua giới hạn phàm phu.",
      "c": "Vì Cực Lạc là cõi nước chỉ dành riêng cho những vị Bồ Tát đã chứng đạt Vô Sanh Nhẫn.",
      "d": "Vì Đức Phật A Di Đà quy định người vãng sanh bắt buộc phải dứt sạch mọi tướng động trong tâm."
    },
    "answer": "b"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-7-ii-3-khuyen-day-du-tin-nguyen',
  slug: 'bai-7-ii-3-khuyen-day-du-tin-nguyen',
  title: '3. Khuyên đầy đủ tín nguyện',
  type: 'article',
  status: 'published',
  order: 5,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Tín_Nguyện_Vãng_Sanh_Tịnh_Độ.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Hành_Trình_Tịnh_Độ.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/dUduoRcj-FQ',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1hUh6Q3FEOiQ7prHeekkb8?si=9dn-f_mMQECj6mUQWbPuKA',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Khuyên đầy đủ tín nguyện',
    passPercentage: 70,
    questions,
  },
}

export default lesson
