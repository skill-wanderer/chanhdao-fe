import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/1.tinh-do-thu-thang'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">I. TỊNH ĐỘ THÙ THẮNG</h2>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Lớn lao thay! Ðiều được pháp môn Tịnh Ðộ chỉ dạy là “tâm này làm Phật, tâm này là Phật”, chỉ thẳng tâm người. Nếu vẫn cho là kém kỳ lạ, đặc biệt thì mỗi niệm niệm Phật chính là thành Phật ngay trong niệm ấy. Ðộ khắp ba căn, thống nhiếp Thiền, Luật, Giáo. Như mưa đúng thời nhuần thấm vạn vật; giống như biển cả dung nạp trăm sông.</p>
    <p>Hết thảy pháp Thiên, Viên, Ðốn, Tiệm, không pháp nào chẳng phát xuất từ pháp giới này. Hết thảy hạnh Ðại, Tiểu, Quyền, Thiệt, không hạnh nào chẳng quy về nơi pháp giới này. Chẳng đoạn Hoặc nghiệp, liền được dự vào hàng Bổ Xứ, viên mãn Bồ Ðề ngay trong một đời này. Chúng sanh trong cửu giới lìa môn này thì trên là chẳng thể viên thành Phật đạo. Mười phương chư Phật bỏ pháp môn này thì dưới là chẳng thể lợi khắp quần manh. Bởi đó, trọn Hoa Nghiêm hải chúng cùng tuân theo mười đại nguyện vương; Pháp Hoa vừa xưng một tiếng liền chứng Thật Tướng các pháp.</p>
    <p>Tịnh Ðộ là hạnh phương tiện tối thắng nên trong luận Khởi Tín, ngài Mã Minh bảo là dễ hành mau đến; ngài Long Thọ xiển dương pháp này trong luận Tỳ Bà Sa. Hậu thân của đức Thích Ca là ngài Trí Giả nói ra Thập Nghi Luận chuyên chí Tây Phương. Sư Vĩnh Minh là Phật Di Ðà thị hiện, soạn Tứ Liệu Giản, chung thân niệm Phật dẫn tam thừa ngũ tánh cùng chứng Chân Thường, đưa thượng thánh hạ phàm cùng lên bờ kia.</p>
    <p>Vì thế pháp môn này cả cửu giới cùng hướng về, mười phương cùng khen ngợi. Ngàn kinh cùng xiển dương, vạn luận đều tuyên thuyết. Thật có thể nói là pháp cực đàm của một đời giáo hóa của Ðức Phật, là đại giáo Nhất Thừa vô thượng. Chẳng trồng cội đức thì trải bao kiếp khó gặp được. Ðã được thấy nghe phải siêng tu tập.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Giáo - Lý - Hạnh - Quả là cương tông của Phật pháp. Nhớ Phật, niệm Phật thực là đường tắt để đắc đạo. Thời xưa, cứ tu một pháp thì cả bốn (Giáo - Lý - Hạnh - Quả) đều đủ. Còn đời này nếu bỏ Tịnh Ðộ thì hoàn toàn chẳng chứng được đạo quả. Ấy là vì cách biệt thánh đã xa, căn tánh con người hèn kém, nếu chẳng cậy vào Phật lực, quyết khó được giải thoát.</p>
    <p>Như đã nói: “Pháp môn Tịnh Ðộ nhiếp khắp căn cơ thượng, trung, hạ; cao trỗi hơn Luật, Giáo, Thiền Tông, thực là lòng từ bi triệt để của chư Phật, chỉ bày thể tánh sẵn có của chúng sanh, dẫn tam thừa ngũ tánh đồng quy cõi tịnh, đưa thượng thánh hạ phàm cùng chứng Chân Thường. Cửu giới chúng sanh lìa pháp này thì trên chẳng thể viên thành Phật đạo. Mười phương chư Phật bỏ pháp môn này thì dưới chẳng thể lợi khắp quần manh”.</p>
    <p>Thế nên, vãng thánh tiền hiền (thánh hiền đời trước) ai nấy đều hướng về. Ngàn kinh vạn luận đâu đâu cũng chỉ quy. Từ sau hội Hoa Nghiêm dẫn khởi quy hướng, các đại Bồ Tát tận khắp mười phương thế giới không vị nào chẳng cầu sanh Tịnh Ðộ; kể từ khi diễn thuyết tại Kỳ Viên đến nay, cuối hết thảy các trước thuật của Tây Thiên, Ðông Ðộ đều quy kết Liên Bang.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Cổ nhân nói: “Thân người khó được, trung quốc6 khó sanh, Phật pháp khó nghe, sanh tử khó xong”. Chúng ta may mắn được thân người, sanh ở trung quốc, được nghe Phật pháp. Ðiều bất hạnh là tự thẹn nghiệp chướng sâu nặng, không sức đoạn Hoặc để mau thoát khỏi Tam Giới, liễu sanh thoát tử; nhưng lại may mắn được nghe đức Như Lai ta tâm bi triệt để nói ra pháp môn Tịnh Ðộ là pháp đại quyền xảo, phương tiện lạ lùng, khiến hàng phàm phu lè tè sát đất được đới nghiệp vãng sanh, thật không còn gì may mắn hơn nữa! Nếu chẳng phải là từ vô lượng kiếp đến nay đã trồng thiện căn sâu dày, làm sao nghe được pháp chẳng thể nghĩ bàn này? Chẳng nên gấp sanh lòng tin chân thành, phát nguyện cầu sanh ư?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Trộm nghe Tịnh Ðộ chính là pháp tỏ bày rốt ráo bổn hoài của Phật, cao vượt hết thảy Thiền - Giáo - Luật, thống nhiếp hết thảy Thiền - Giáo - Luật. Nói gọn thì một lời, một câu, một kệ, một sách đều có thể gồm trọn không còn sót. Nói rộng ra, dù huyền ngôn của Tam Tạng mười hai bộ kinh, diệu nghĩa của chư Tổ năm tông cũng chẳng thể diễn giảng trọn pháp môn Tịnh Ðộ này.</p>
    <p>Giả sử khắp cả đại địa chúng sanh đều thành Chánh Giác, hiện tướng lưỡi rộng dài, dùng sức thần thông, sức trí huệ, vi trần nói, cõi nước nói, nói hăm hở, nói không gián đoạn, vẫn còn chưa thể tận nổi! Bởi lẽ Tịnh Ðộ vốn là chẳng thể nghĩ bàn.</p>
    <p>Hãy thử nghĩ xem: Hoa Nghiêm đại kinh là vua trong Tam Tạng, trong phẩm cuối cùng quy trọng nơi nguyện vương. Áo điển Pháp Hoa mầu nhiệm đứng đầu các kinh, nghe kinh liền vãng sanh, địa vị ngang với Ðẳng Giác. Vậy thì ngàn kinh muôn luận đâu đâu đều chỉ quy Tịnh Ðộ là có nguyên do vậy.</p>
    <p>Văn Thù phát nguyện, Phổ Hiền khuyến khích. Trong hội Ðại Tập, đức Như Lai thọ ký rằng: Trong đời Mạt Pháp, không do pháp này chẳng thể đắc độ. Trong luận Tỳ Bà Sa, ngài Long Thọ phán định là pháp dễ hành, mau thoát sanh tử. Thế nên, vãng thánh tiền hiền người người hướng đến, nào phải phí công toi! Thật có thể nói là cả một đời giáo hóa đều chỉ là để đặt cơ sở cho pháp môn Niệm Phật!</p>
    <p>Chẳng phải chỉ có thế! Phàm hết thảy cảnh giới đối ứng sáu căn, tức là: núi, sông, đại địa, sáng, tối, sắc, không, thấy, nghe, hay, biết, thanh, hương, vị v.v... không gì chẳng phải là văn tự để phô diễn, xiển dương Tịnh Ðộ đó sao? Lạnh - nóng đắp đổi, già - bệnh chen nhau, lụt, hạn, chiến tranh, tật dịch, bạn ma, tà kiến, không gì chẳng phải là để răn nhắc cảnh tỉnh con người mau cầu sanh Tịnh Ðộ đó ư? Nói rộng ra, há có thể trọn hết được sao?</p>
    <p>Còn như bảo “một lời đã gộp hết cả” thì lời đó là “Tịnh”. Tịnh đến cùng cực thì sáng tỏ, thông suốt. Nếu chưa đạt Diệu Giác, há dễ đảm đương nổi một lời này ư? Nghiên cứu bài tụng Lục Tức Thành Phật7 thì sẽ biết. “Một câu” là “Tín, Nguyện, Hạnh”. Với Tín - Nguyện - Hạnh thì không Tín chẳng đủ để khởi Nguyện. Không Nguyện thì chẳng đủ để dẫn dắt Hạnh. Không có diệu hạnh Trì Danh thì chẳng đủ để viên mãn điều mình Nguyện, chứng điều mình tin. Hết thảy kinh luận Tịnh Ðộ đều phát minh ý chỉ này. “Một kệ” là kệ tán Phật8: Nêu chánh báo để gồm thâu y báo, thuật Hóa Chủ để bao gồm đồ chúng; tuy chỉ gồm tám câu nhưng đã nêu trọn đại cương của cả ba kinh Tịnh Ðộ.</p>
    <p>Một cuốn sách là cuốn Tịnh Ðộ Thập Yếu. Chữ chữ đều là bến cầu9 cho đời Mạt Pháp. Lời lời đều là gương báu của Liên Tông. Buốt lòng trào lệ, phanh tim vẩy máu, xứng tánh phát huy, chỉ bày cốt tủy. Dù dùng những thí dụ như cứu người chết đuối, cứu người bị lửa cháy vẫn chẳng thể diễn tả lòng thống thiết của chư Tổ được. Bỏ qua sách này thì chánh tín không do đâu mà sanh được, tà kiến không do đâu mà diệt được!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Nên biết rằng chúng ta từ vô thỉ đến nay đã tạo ác nghiệp vô lượng, vô biên. Kinh Hoa Nghiêm dạy: “Giả sử ác nghiệp có thể tướng thì mười phương hư không chẳng thể chứa đựng nổi”. Lẽ đâu tu trì lơ mơ, hời hợt, lại tiêu nổi được nghiệp ư? Bởi vậy, Thích Ca, Di Ðà, giáo chủ hai cõi, đau đáu nghĩ đến chúng sanh không sức đoạn Hoặc, riêng mở ra một pháp môn nương vào từ lực của Phật để đới nghiệp vãng sanh. Lòng hoằng từ đại bi ấy dù trời đất, cha mẹ cũng chẳng thể bằng được một phần Hằng hà sa. Chỉ nên phát lòng thẹn hổ, phát tâm sám hối mới tự có thể được Phật gia bị, nghiệp tiêu, thân an thôi!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Hòa Thượng Thiện Ðạo nói: “Nếu muốn học về Giải thì hết thảy các pháp từ địa vị phàm phu cho đến địa vị Phật, không pháp nào chẳng nên học. Nếu muốn học về Hạnh, nên chọn lấy một pháp khế lý, khế cơ, chuyên tinh tận sức mới mau chứng được lợi ích chân thật. Nếu không thì từ kiếp này qua kiếp nọ vẫn khó xuất ly!” Pháp khế lý, khế cơ Ngài nói đó không gì hơn là Tín Nguyện Trì Danh Cầu Sanh Tây Phương!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Kinh A Di Ðà, kinh Vô Lượng Thọ, kinh Quán Vô Lượng Thọ gọi là “Tịnh Ðộ Tam Kinh”, chuyên luận về sự lý duyên khởi của Tịnh Ðộ. Các kinh Ðại Thừa khác đều nói kèm về Tịnh Ðộ. Nhưng kinh Hoa Nghiêm chính là khi đức Như Lai mới thành Chánh Giác, vì bốn mươi mốt địa vị Pháp Thân Ðại Sĩ mà xứng tánh giảng thẳng diệu pháp Nhất Thừa. Cuối kinh, Thiện Tài đi tham học khắp các thiện tri thức. Sau khi chứng ngộ như chư Phật, Thiện Tài đồng tử được Phổ Hiền Bồ Tát giảng cho nghe mười đại nguyện vương. Ngài dạy Thiện Tài và khắp Hoa Nghiêm hải chúng hồi hướng vãng sanh Tây Phương Cực Lạc thế giới ngõ hầu được viên mãn Phật Quả.</p>
    <p>Trong Quán kinh, phần nói về hạ phẩm hạ sanh, kẻ ngũ nghịch -thập ác đủ các điều bất thiện, lúc lâm chung tướng địa ngục hiện, có thiện tri thức dạy cho niệm Phật. Kẻ ấy liền vâng lời dạy, xưng niệm Phật danh, chưa đầy mười tiếng liền thấy Hóa Thân Phật đưa tay tiếp dẫn vãng sanh.</p>
    <p>Kinh Ðại Tập dạy: “Ðời Mạt Pháp ức ức người tu hành, hiếm có một người đắc đạo. Chỉ có nương vào Niệm Phật mới thoát khỏi sanh tử”. Do đấy, ta biết rằng pháp niệm Phật là đạo để thượng thánh hạ phàm cùng tu, là pháp dù trí hay ngu đều hành được. Hạ thủ dễ, thành công cao, dùng sức ít nhưng được hiệu quả nhanh. Do chuyên cậy vào Phật lực nên lợi ích thù thắng, vượt trội những giáo pháp thông thường. Người xưa nói: “Các môn khác học đạo như kiến bò lên núi cao. Niệm Phật vãng sanh như căng buồm thuận gió, nước xuôi”, thật rất khéo hình dung vậy!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Ðại Giác Thế Tôn thương các chúng sanh mê trái tự tâm, luân hồi lục đạo, trải bao kiếp dài lâu chưa thể thoát ra. Do vậy, Ngài hưng khởi Vô Duyên Từ, vận lòng bi đồng thể, thị hiện sanh trong thế gian, thành Ðẳng Chánh Giác, tùy thuận cơ nghi nói rộng các pháp. Nói đại cương, gồm có năm tông. Năm tông gì? Là Luật, là Giáo, là Thiền, là Mật, là Tịnh.</p>
    <p>Luật là thân Phật, Giáo là lời Phật, Thiền là tâm Phật. Sở dĩ Phật được gọi là Phật chỉ là do ba pháp này mà thôi. Sở dĩ đức Phật độ sanh cũng chỉ là do ba pháp này. Nếu chúng sanh thật sự có thể nương theo Luật, Giáo, Thiền tu trì thì ba nghiệp của chúng sanh sẽ chuyển thành ba nghiệp của chư Phật. Ba nghiệp đã chuyển thì phiền não chính là Bồ Ðề, sanh tử chính là Niết Bàn.</p>
    <p>Lại sợ túc nghiệp sâu nặng chẳng thể dễ chuyển nên dùng sức đà-ra-ni tam mật gia trì để un đúc. Hoặc lại sợ rằng căn khí kém cỏi, chưa được giải thoát, phải thọ sanh lần nữa sẽ khó tránh khỏi mê lầm; vì thế đặc biệt mở ra một môn tín nguyện niệm Phật cầu sanh Tịnh Ðộ, ngõ hầu dù thánh hay phàm đều cùng vãng sanh Tây Phương ngay trong đời này. Bậc thánh thì mau chứng Vô Thượng Bồ Ðề, kẻ phàm thì vĩnh viễn thoát khỏi sanh tử trói buộc. Do dựa vào từ lực của Phật nên công đức, lợi ích chẳng thể nghĩ bàn.</p>
    <p>Nên biết rằng: Luật là nền tảng của Giáo, Thiền, Tịnh, Mật. Nếu chẳng nghiêm trì giới cấm sẽ chẳng thể đạt được lợi ích chân thật nơi Giáo, Thiền, Tịnh, Mật. Như lầu cao vạn trượng, nếu nền móng chẳng vững thì chưa cất xong đã sụp. Tịnh là chỗ quy túc của Giáo, Thiền, Tịnh, Mật, như trăm sông, vạn dòng đều đổ vào biển cả.</p>
    <p>Bởi lẽ, pháp môn Tịnh Ðộ là pháp môn để mười phương chư Phật trên thành Phật đạo, dưới độ chúng sanh, thành thỉ, thành chung. Vì thế trong phẩm Nhập Pháp Giới kinh Hoa Nghiêm, Thiện Tài được ngài Phổ Hiền gia bị, khai thị, chứng được Ðẳng Giác. Ðức Phổ Hiền lại khuyên Thiện Tài nên phát mười đại nguyện vương, hồi hướng vãng sanh Tây Phương Cực Lạc thế giới ngõ hầu mau viên mãn Phật Quả. Ngài lại dùng pháp này phổ khuyến toàn bộ Hoa Tạng đại chúng nên tu tập như thế.</p>
    <p>Trong Quán Vô Lượng Thọ Phật Kinh, phần nói về Hạ Phẩm Hạ Sanh, hạng người ngũ nghịch thập ác, sắp đọa địa ngục A Tỳ, được thiện tri thức dạy cho niệm Phật, niệm mười tiếng hoặc chỉ niệm mấy tiếng là mạng chung, cũng vẫn được Phật tiếp dẫn vãng sanh Tây Phương.</p>
    <p>Xem đó thì trên từ bậc Ðẳng Giác Bồ Tát chẳng thể ra khỏi pháp này, dưới đến kẻ tội ngũ nghịch, thập ác cũng có thể chứng nhập pháp này. Công đức, lợi ích của pháp môn đây vượt trỗi hơn các giáo pháp khác trong cả một đời giáo hóa của Ðức Phật. Bởi lẽ, các giáo pháp khác toàn dạy dùng tự lực để thoát ly sanh tử. Kẻ chưa đoạn Hoặc, nương vào từ lực của Phật liền có thể đới nghiệp vãng sanh. Kẻ đã đoạn Hoặc nếu nương theo từ lực của Phật sẽ chóng chứng được phẩm vị cao.</p>
    <p>Vì thế, đây là một pháp môn đặc biệt nhất trong cả một đời giáo hóa của Ðức Phật, chẳng thể dùng những giáo pháp thông thường để bàn luận pháp này được! Do đó, các kinh Ðại Thừa như kinh Hoa Nghiêm, Pháp Hoa v.v..., các đại Bồ Tát như Văn Thù, Phổ Hiền...; các đại tổ sư như Long Thọ, Mã Minh... đều hiển thị, xiển dương, khen ngợi, chỉ dạy, phổ khuyến vãng sanh.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Ðức Di Ðà, đức Thích Ca trong những kiếp xưa, phát đại thệ nguyện độ thoát chúng sanh. Vị này thì thị hiện sanh trong uế độ, dùng nhơ, dùng khổ chiết phục, hòng đưa chúng sanh đi. Vị kia thì an cư Tịnh Ðộ, dùng tịnh, dùng vui nhiếp thọ để lôi kéo, uốn nắn.</p>
    <p>Ông chỉ thấy ngu phu, ngu phụ cũng niệm Phật được bèn coi thường Tịnh Ðộ; sao chẳng thấy trong phẩm Nhập Pháp Giới của kinh Hoa Nghiêm, sau khi Thiện Tài đã chứng ngộ ngang với chư Phật thì Phổ Hiền Bồ Tát bèn chỉ dạy phát khởi mười đại nguyện vương, hồi hướng vãng sanh Tây Phương Cực Lạc thế giới hòng viên mãn Phật Quả? Huống hồ Bồ Tát còn đem pháp này khuyên khắp cả Hoa Tạng hải chúng nữa? Hoa Tạng Hải Chúng không một ai là phàm phu, nhị thừa, toàn là Pháp Thân Ðại Sĩ thuộc bốn mươi mốt địa vị, cùng phá vô minh, cùng chứng pháp tánh, đều có thể do bổn nguyện hiện làm Phật trong thế giới không có Phật.</p>
    <p>Hơn nữa, trong biển Hoa Tạng, tịnh độ vô lượng, nhưng ai nấy đều hồi hướng vãng sanh Tây Phương Cực Lạc thế giới, đủ biết là vãng sanh Cực Lạc chính là huyền môn để thoát khổ, là đường tắt để thành Phật. Vì thế, từ xưa tới nay, trong tất cả tùng lâm Thiền, Giáo, Luật, không đâu chẳng sớm chiều trì danh hiệu Phật cầu sanh Tây Phương vậy.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Hết thảy chúng sanh vốn sẵn có trí huệ, đức tướng Như Lai. Chỉ do mê chân theo vọng, quay lưng với Giác, xuôi theo trần lao, nên toàn thể chuyển thành phiền não, ác nghiệp. Vì thế phải trải bao kiếp dài lâu, luân hồi sanh tử. Như Lai thương xót giảng ra các pháp khiến họ bỏ vọng quy chân, ngoảnh mặt với trần lao, xuôi theo giác ngộ, khiến cho toàn thể phiền não ác nghiệp lại trở thành trí huệ, đức tướng. Từ đây cho đến cùng tột đời vị lai, an trụ trong cõi Thường Tịch Quang. Khác nào nước đóng thành băng, băng lại tan thành nước, thể vốn chẳng khác, nhưng công dụng thực khác nhau một trời một vực.</p>
    <p>Nhưng căn cơ chúng sanh có Tiểu, có Ðại, mê có cạn, có sâu; Phật tùy thuận cơ nghi của mỗi người khiến ai nấy đều được lợi ích. Pháp môn Ngài nói ra mênh mông như Hằng sa, nhưng cầu lấy pháp chí viên, chí đốn, tối diệu, tối huyền, hạ thủ dễ, thành công cao, dùng sức ít được hiệu quả nhanh, độ khắp ba căn, thống nhiếp các pháp, thượng thánh hạ phàm cùng chung tu, đại cơ cùng tiểu căn cùng lãnh thọ được thì không gì thù thắng, siêu tuyệt bằng pháp môn Tịnh Ðộ. Vì sao nói thế?</p>
    <p>Hết thảy pháp môn tuy đốn - tiệm khác nhau, quyền - thật đều khác, nhưng đều phải dụng công tu tập sâu xa mới hòng đoạn Hoặc, chứng chân, xuất ly sanh tử, siêu phàm nhập thánh. Ðó gọi là cậy vào tự lực, không nương dựa vào điều gì khác cả. Nếu như còn chút Hoặc chưa tận thì vẫn bị luân hồi như cũ. Ðấy đều là các pháp phải thấu đạt lý rất sâu, chẳng dễ tu tập. Nếu chẳng phải hạng sẵn có linh căn từ trước, đời này thật khó lòng chứng nhập.</p>
    <p>Chỉ có mình pháp môn Tịnh Ðộ, chẳng luận là phú quý hay bần tiện, già, trẻ, gái, trai, trí, ngu, tăng, tục, sĩ, nông, công, thương, hết thảy hạng người đều tu tập được là do đại bi nguyện lực của đức A Di Ðà Phật nhiếp thủ chúng sanh khổ não cõi Sa Bà. Vì thế, so với các pháp môn khác, tu Tịnh Ðộ đắc quả dễ dàng hơn.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Một niệm tâm tánh của chúng sanh và một niệm tâm tánh của Phật chẳng hai. Tuy còn mê chưa giác, khởi Hoặc tạo nghiệp, gây đủ các tội, Phật tánh sẵn có vẫn không bị tổn thất. Ví như ma-ni bảo châu vứt nhà xí, sánh cùng phẩn uế trọn chẳng khác gì. Kẻ ngu chẳng biết là báu, coi hệt như phẩn uế. Người trí biết là diệu bảo vô giá, chẳng hiềm ô uế, vào trong nhà xí nhặt lên, dùng đủ mọi cách gột rửa cho sạch. Sau đó, treo lên tràng cao, liền phóng đại quang minh, tùy lòng người muốn gì đều tuôn khắp các thứ báu. Bởi đó kẻ ngu mới biết là quý báu.</p>
    <p>Ðại Giác Thế Tôn thấy các chúng sanh cũng giống như vậy: do hôn mê, đảo, Hoặc, gây đủ ngũ nghịch, thập ác, vĩnh viễn đọa trong đường ác tam đồ; Phật không hề có tâm niệm vứt bỏ, luôn tìm kiếm cơ duyên, hiển nhiên hoặc ngầm gia bị cho, vì họ thuyết pháp, mong họ giũ sạch Hoặc nghiệp huyễn vọng, ngộ Phật tánh chân thường, mãi cho đến khi viên chứng Vô Thượng Bồ Ðề mới thôi. Ðối với kẻ tội tày đình, ác cùng cực cũng vẫn như vậy. Với kẻ tội nghiệp ít, dạy cho tu Giới và Thiện. Với người có sức thiền định sâu, không một ai là chẳng được Phật hóa độ như vậy.</p>
    <p>Phàm là trong tam giới, người nhiếp được tâm, chế ngự được các phiền hoặc, nhưng còn chấp thân, tình chủng vẫn còn; một khi phước báo hết, sanh xuống cõi dưới, gặp cảnh, đụng duyên, lại khởi Hoặc tạo nghiệp. Do nghiệp cảm khổ, luân hồi lục đạo không lúc nào xong. Vì thế kinh Pháp Hoa bảo: “Ba cõi không an giống như nhà cháy. Các khổ đầy dẫy, thật đáng sợ hãi”. Nếu chẳng phải là kẻ nghiệp tận, tình không, đoạn Hoặc chứng chân thì chẳng có hy vọng thoát khỏi tam giới.</p>
    <p>Nay chỉ có mỗi pháp môn Tịnh Ðộ, cốt sao lòng tin chân thành, nguyện thiết tha, trì danh hiệu Phật, liền có thể nương Phật từ lực vãng sanh Tây Phương. Ðã được vãng sanh liền nhập Phật cảnh giới, thọ dụng như Phật, phàm tình, thánh kiến thứ gì cũng chẳng sanh. Thật là ngàn phần ổn thỏa, vạn phần thích đáng, là pháp môn vạn phần chẳng thể bỏ sót vậy. Nay đang lúc Mạt Pháp, bỏ pháp môn này thì không còn có cách nào khác cả.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Phật quang chính là trí huệ có sẵn ngay trong tâm của phàm, thánh, chúng sanh và Phật trong mười pháp giới. Tâm ấy thể lộ quang minh chiếu suốt, trạm tịch, thường hằng, bất sanh, bất diệt, vô thỉ, vô chung, theo chiều dọc tột cùng ba đời nhưng ba đời bởi đó mà mất hết, theo chiều ngang trọn khắp mười phương nhưng mười phương bởi đó tiêu sạch. Nếu bảo là Không thì vạn đức cùng hiển bày trọn vẹn. Nếu bảo là Có thì một trần chẳng lập. Chính là hết thảy pháp nhưng lìa hết thảy tướng. Tại phàm chẳng giảm, nơi thánh chẳng tăng. Dù có ngũ nhãn cũng chẳng thấy được, có tứ biện tài cũng chẳng diễn tả được; nhưng pháp nào cũng phải nương vào sức nó, chỗ nào cũng gặp nó cả.</p>
    <p>Nhưng do chúng sanh chưa triệt ngộ nên chẳng những không thọ dụng được, trái lại còn dùng sức chẳng thể nghĩ bàn ấy để khởi Hoặc tạo nghiệp. Do nghiệp cảm khổ đến nỗi sanh tử, luân hồi không lúc nào xong, dùng chân tâm thường trụ để lãnh huyễn báo sanh diệt. Ví như đang say thấy nhà cửa quay cuồng, nhà thật sự chẳng quay; mê bảo là phương vị di chuyển, phương vị thật sự chẳng dời động! Toàn là do vọng nghiệp hóa hiện, trọn không có pháp nào để được cả.</p>
    <p>Vì thế, Thích Ca Mâu Ni Thế Tôn thị hiện thành Phật đạo, lúc Ngài chứng ngộ triệt để Phật quang bèn than: “Lạ thay! Lạ thay! Hết thảy chúng sanh đều có đủ Như Lai trí huệ, đức tướng, chỉ do vọng tưởng, chấp trước nên chẳng thể chứng đắc. Nếu lìa được vọng tưởng thì Nhất Thiết Trí, Tự Nhiên Trí, Vô Ngại Trí sẽ được hiện tiền”.</p>
    <p>Kinh Lăng Nghiêm chép: “Diệu tánh viên minh lìa các danh tướng, vốn chẳng có thế giới, chúng sanh. Do vọng mà có sanh, do sanh nên có diệt. Sanh diệt gọi là Vọng. Diệt vọng gọi là Chân. Ðấy gọi là Như Lai Vô Thượng Bồ Ðề hay Ðại Niết Bàn, hai danh hiệu sử dụng lẫn nhau”.</p>
    <p>Ngài Bàn Sơn nói: “Một mảnh trăng tâm lưỡi liềm, nuốt mất ánh sáng muôn vật. Tâm chẳng chiếu cảnh, cảnh cũng chẳng còn. Tâm, cảnh cùng mất, còn là vật gì?”</p>
    <p>Ngài Quy Sơn nói: “Linh quang riêng chiếu, thoát khỏi căn - trần. Thể lộ chân thường, chẳng phiền văn tự. Tâm tánh chẳng nhiễm, vốn tự viên thành. Chỉ lìa vọng niệm tức Như Như Phật”.</p>
    <p>Do đấy, biết rằng mọi ngôn giáo của Phật, Tổ, không lời nào chẳng phải là nhằm chỉ bày tâm tánh sẵn có của chúng sanh, khiến họ bỏ mê quy ngộ, phản bổn hoàn nguyên (trở về nguồn gốc) đó thôi! Nhưng chúng sanh căn cơ có sâu cạn, mê có dày, mỏng, nếu chẳng nhọc nhằn dùng mọi thứ ngôn giáo để khai thị, chỉ dẫn, dùng các thứ pháp môn để đối trị thì mỗi người nhờ đâu mới nhìn xuyên được mây mê che lấp tánh không, thấy được vầng tâm nguyệt?</p>
    <p>Bởi thế, lúc Như Lai mới thành đạo, trước hết ngài diễn giảng Ðại Hoa Nghiêm, luận thẳng vào đại pháp vượt ngoài cửu giới, chẳng xen lẫn với pháp Quyền - Tiểu, hòng những hàng đại cơ túc căn thành thục đều chứng Chân Thường, vượt lên bến Giác. Lại do độn căn chúng sanh chưa được hưởng lợi ích, Phật liền khéo dẫn dụ dần dần, tùy cơ diễn thuyết: hoặc dùng Ngũ Giới, Thập Thiện để nhiếp phục hai thừa nhân - thiên khiến họ gieo nhân Phật đạo thù thắng; hoặc là dùng Tứ Ðế, Thập Nhị Nhân Duyên, Lục Ðộ Vạn Hạnh nhiếp phục ba thừa Thanh Văn, Duyên Giác, Bồ Tát khiến họ chứng được cận duyên của Phật đạo.</p>
    <p>Bắt đầu từ thời A Hàm cho đến thời Bát Nhã, không kinh nào là chẳng tuyên thuyết thuận theo căn tánh của chúng sanh, khiến họ lần lượt tiến dần trên đường về nhà. Bổn hoài của Phật vẫn giữ kín chưa nói. Mãi đến thời Pháp Hoa, Phật mới khai Quyền hiển Thật, khai Tích hiển Bổn10 , nhân - thiên - quyền - tiểu đều là Nhất Thừa, khách làm thuê thật là con ông trưởng giả! Ba căn đều được thọ ký, diễn bày trọn vẹn bổn hoài xuất thế, cùng hội Hoa Nghiêm ban sơ, đầu cuối chiếu rọi lẫn nhau. Có thể nói là một đại sự nhân duyên đem giao phó trọn vẹn, không còn giấu diếm chút gì.</p>
    <p>Lại vì chúng sanh đời Mạt căn cơ hèn kém, thật chẳng ai có thể đoạn Hoặc chứng chân. Vì thế, Phật đặc biệt mở ra một môn Tịnh Ðộ hòng thượng, trung, hạ căn, dù phàm hay thánh cùng lìa khỏi Sa Bà, sanh về Cực Lạc ngay trong đời này, chứng dần dần vô lượng quang - thọ. Lòng thâm từ đại bi ấy thật là chí cực không còn gì hơn được nữa!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Phật pháp rộng sâu như biển cả. Kẻ phàm phu sát đất nào lại có thể một hơi hút sạch tận nguồn, cạn đáy được? Tuy nhiên, nếu có thể sanh tâm chánh tín sẽ tự có thể tùy theo sức mình được hưởng lợi ích. Ví như Tu La, hương tượng và các loài muỗi mòng uống nước biển cả; loài nào, loài nấy uống no mới thôi. Ðức Như Lai xuất thế tùy thuận chúng sanh thuyết pháp khiến mỗi loài được lợi ích cũng giống như thế. Chúng sanh đời mạt nghiệp chướng sâu dày, thiện căn cạn mỏng, tâm trí hẹp kém, thọ mạng ngắn ngủi. Ðã thế, tri thức ít ỏi, ma tà, ngoại đạo tung hoành. Tu các pháp môn khác muốn ngay trong hiện đời đoạn Hoặc chứng chân, liễu sanh thoát tử thật là một việc hy hữu cực khó.</p>
    <p>Chỉ mỗi mình pháp Tịnh Ðộ chuyên cậy vào Phật lực. Thế nên chẳng cần biết đến Ðoạn, Chứng, chỉ trọng Tín - Nguyện. Nếu có đủ tín - nguyện, dẫu là hạng tội ác cực đại sắp đọa A Tỳ địa ngục vẫn có thể nương vào sức thập niệm, mau chóng được Phật từ tiếp dẫn vãng sanh. Ôi! Như Lai đại từ phổ độ chẳng bỏ sót một ai. Chỉ mình pháp này thật là tóm thâu trọn khắp.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Pháp môn Niệm Phật nguyên lai ra sao? Do một niệm tâm tánh của chúng ta giống như hư không thường hằng, bất biến. Tuy thường chẳng biến, nhưng lại niệm niệm tùy duyên. Nếu chẳng duyên theo Phật giới sẽ duyên theo cửu giới. Chẳng duyên theo tam thừa sẽ duyên theo lục đạo. Chẳng duyên theo nhân thiên, ắt sẽ duyên theo tam đồ. Do duyên theo nhiễm - tịnh sai khác thành ra quả báo sướng - khổ khác xa.</p>
    <p>Dù bản thể trọn chẳng biến đổi, nhưng Tướng và Dụng dĩ nhiên khác biệt một trời, một vực! Ví như hư không, mặt trời chiếu thì sáng, mây đùn thì tối. Tuy bản thể của hư không chẳng vì mặt trời hay mây mà tăng, giảm, nhưng tướng trạng hiện rõ hay ngăn che cố nhiên chẳng thể nói là cá mè một lứa. Do nghĩa này, Như Lai dạy mọi chúng sanh duyên niệm nơi Phật.</p>
    <p>Vì thế mới nói: “Nếu tâm chúng sanh nhớ Phật, niệm Phật thì hiện tại, tương lai nhất định thấy Phật, cách Phật chẳng xa”.</p>
    <p>Lại nói: “Chư Phật Như Lai là pháp giới thân vào trong tâm tưởng của hết thảy chúng sanh. Vì thế, lúc tâm các ngươi tưởng Phật thì tâm ấy chính là ba mươi hai tướng, tám mươi vẻ đẹp phụ. Tâm này làm Phật, tâm này là Phật. Biển Chánh Biến Tri của chư Phật từ tâm tưởng sanh”.</p>
    <p>Hễ duyên theo Phật giới thì tâm này làm Phật, tâm này là Phật. Nếu duyên theo các giới chúng sanh thì tâm này làm chúng sanh, tâm này là chúng sanh. Ðã hiểu vậy rồi mà vẫn chẳng niệm Phật, thật là chuyện chưa từng có! Một pháp Niệm Phật lấy vạn đức hồng danh của Như Lai làm duyên, mà vạn đức hồng danh ấy chính là Vô Thượng Giác Ðạo do đức Như Lai đã chứng khi Ngài đắc quả. Do lấy Quả Ðịa Giác (sự giác ngộ khi đã chứng quả) làm Nhân Ðịa Tâm (cái tâm dùng để tu nhân), cho nên Nhân trùm biển Quả, Quả thấu tột nguồn Nhân. Như người nhiễm hương, thân có mùi thơm; như tò vò nuôi nhện, lâu ngày hóa tò vò con11 . Thành Phật ngay trong đời này, chuyển phàm thành thánh; công năng, lực dụng của pháp này vượt xa hết thảy các pháp môn khác trong cả một đời giáo hóa của Ðức Phật. Bởi lẽ, các pháp môn khác đều cậy vào Tự Lực, phải đoạn Hoặc chứng chân mới hòng liễu sanh thoát tử.</p>
    <p>Pháp môn Niệm Phật: Tự Lực và Phật Lực cả hai cùng đủ. Bởi thế, người đã đoạn Hoặc Nghiệp sẽ mau chứng Pháp Thân. Người đầy dẫy Hoặc Nghiệp thì đới nghiệp vãng sanh. Pháp này cực kỳ bình thường, dù là kẻ ngu phu, ngu phụ cũng được hưởng lợi ích; nhưng lại cực kỳ huyền diệu, dẫu là Ðẳng Giác Bồ Tát cũng chẳng thoát khỏi phạm vi của pháp này. Vì thế, không một ai là chẳng tu được. Hạ thủ dễ, thành công cao. Dùng sức ít, hiệu quả nhanh chóng. Thật là pháp môn đặc biệt trong cả một đời giáo hóa của Như Lai. Vì thế, chẳng thể dùng những giáo lý thông thường để bình luận, phán đoán được! Mạt Pháp chúng sanh phước mỏng, huệ cạn, chướng dày, nghiệp sâu, chẳng tu pháp này, toan cậy Tự Lực để đoạn Hoặc chứng chân hòng liễu sanh tử thật là vạn nan, vạn nan!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Kể từ Ðại Giáo truyền sang Ðông (ý nói: Phật giáo truyền sang Trung Hoa), Lô Sơn hưng khởi Liên Xã, một xướng trăm hòa, không đâu chẳng thuận theo. Nhưng những vị có đại công làm rạng rỡ Tịnh tông thì đời Bắc Ngụy có ngài Ðàm Loan. Ngài Ðàm Loan là bậc chẳng thể suy lường nổi. Do có việc, ngài phải xuống Nam gặp Lương Vũ Ðế; sau trở về Bắc, Vũ Ðế thường hướng về Bắc cúi lạy, nói: “Loan Pháp Sư là bậc nhục thân Bồ Tát!”.</p>
    <p>Ðời Trần - Tùy có ngài Trí Giả. Ðời Ðường có ngài Ðạo Xước, noi theo giáo pháp của ngài Ðàm Loan, chuyên tu Tịnh nghiệp, cả đời giảng ba kinh Tịnh Ðộ hơn hai trăm lượt. Từ cửa ngài Ðạo Xước, có ngài Thiện Ðạo. Cho đến các vị Thừa Viễn, Pháp Chiếu, Thiếu Khang, Ðại Hạnh thì liên phong đã thổi khắp cả trung ngoại (trong và ngoài Trung Hoa). Do vậy, tri thức các tông không ai là chẳng dùng đạo này để mật tu hoặc hiển hóa, tự lợi, lợi tha.</p>
    <p>Với nhà Thiền, nếu chỉ đề cao hướng thượng thì một pháp chẳng lập, Phật còn chẳng thèm bận tâm tới, huống là niệm Phật cầu sanh Tịnh Ðộ? Ðấy là Chân Ðế: một pháp đã mất thì hết thảy đều mất. Nói: “Thật Tế Lý</p>
    <p>Ðịa chẳng nhận một mảy trần” là nói về Tánh thể. Nếu luận đích xác về mặt tu trì thì lại chẳng bỏ một pháp nào, chẳng làm việc thì chẳng ăn, huống hồ niệm Phật cầu sanh Tịnh Ðộ! Ðấy là Tục Ðế: một pháp đã lập thì hết thảy đều lập.</p>
    <p>Nói: “Trong cửa Phật sự chẳng bỏ một pháp” là nói về Tánh sẵn đủ vậy. Nếu toan bỏ Tục Ðế để luận Chân Ðế thì chẳng phải là Chân Ðế, khác nào bỏ tứ đại, ngũ uẩn đi tìm tâm tánh. Thân đã chẳng còn, tâm gởi vào đâu? Nếu dùng Tục Ðế để hiển Chân Ðế thì đích thực là Chân Ðế. Như ở nơi mắt thì bảo là thấy, ở tai gọi là nghe; tức là dùng tứ đại, ngũ uẩn để hiển tâm tánh.</p>
    <p>Những điều vừa nói trên đây chính là ý chỉ lớn lao của việc chư Tổ ngầm tu Tịnh Ðộ; nhưng các ngài chẳng giảng rộng, thuật rõ, nên nếu chẳng hiểu sâu xa ý Tổ sẽ chẳng biết được. Cứ như quy chế kỳ đảo cho những vị Tăng mắc bệnh và quy cách thiêu hóa, tống táng những vị đã mất do ngài Bách Trượng xác lập, ta thấy đều quy về Tịnh Ðộ.</p>
    <p>Có vị nói: “Tu hành dùng niệm Phật là ổn thỏa, thích đáng”. Ngài Chân Hiệt Liễu bảo: “Pháp môn Tịnh Ðộ chính là để tiếp dẫn căn khí thượng thượng, chỉ kiêm tiếp dẫn căn khí trung hạ”. Ngài còn bảo: “Trong cả tông Tào Ðộng hết thảy đều ngầm tu.Do vì tu Tịnh Ðộ thấy Phật giản dị hơn Tông môn rất nhiều”. Ngài cũng bảo: “Dù Phật hay Tổ, dù Giáo hay Thiền đều tu Tịnh Ðộ, đồng quy một nguồn”. Những lời ấy đủ cho ta thấy được đại khái quan điểm của các thiền sư thời ấy.</p>
    <p>Kịp đến ngài Vĩnh Minh đại sư, bản thân là Cổ Phật, do nguyện xuất thế mới lưu lại ngôn giáo rõ ràng, soạn sách lưu truyền, hoằng dương. Ngài lại sợ người học chẳng rõ đường nẻo, lẫn lộn lợi hại, nên cực lực xướng ra bài kệ Tứ Liệu Giản, có thể nói là cương tông của cả Ðại Tạng. Ngài làm bậc hướng đạo nơi đường rẽ, khiến cho người học chỉ trong tám mươi chữ đốn ngộ yếu đạo xuất sanh tử, chứng Niết Bàn. Tấm lòng đau đáu cứu thế của ngài thật là thiên cổ chưa từng có.</p>
    <p>Sau đấy, các tông sư đều lưu lại ngôn giáo rõ ràng, chuyên khen ngợi pháp này như các đại tổ sư: Trường Lô Trách, Thiên Y Hoài, Viên Chiếu Bổn, Ðại Thông Bổn, Trung Phong Bổn, Thiên Như Tắc, Sở Thạch Kỳ, Không Cốc Long v.v... tuy hoằng dương Thiền Tông, vẫn chú trọng khen ngợi Tịnh Ðộ.</p>
    <p>Ðến khi Liên Trì đại sư tham học với Tiếu Nham Ðại Ngộ xong, cân nhắc mọi bề, đề xướng: “Nếu Tịnh nghiệp đã thành, Thiền Tông sẽ tự chứng. Giống như tắm nơi biển cả là đã dùng nước của cả trăm sông. Thân đã đến điện Hàm Nguyên, cần gì hỏi Trường An đâu nữa!” Sau đấy, các đại tổ sư: Ngẫu Ích, Triệt Lưu, Tỉnh Am, Mộng Ðông v.v... không vị nào chẳng xướng như vậy. Bởi lẽ, lập cách hóa độ theo thời, pháp phải phù hợp căn cơ. Nếu không như thế, chúng sanh chẳng thể đắc độ!</p>
    <p>Từ đấy về sau, Phật pháp suy dần, lại thêm quốc gia lắm biến cố, pháp luân cơ hồ ngừng chuyển. Dù có bậc trí thức ra sức chống chọi, nhưng chẳng đủ sức, đến nỗi chẳng ai hỏi đến đạo này. Nếu có ai bàn đến pháp này, người nghe cứ như đang bị làm phiền. May còn có một hai vị Tăng, Tục đại tâm, in khắc lưu truyền, khiến cho những lời giáo huấn của chư Tổ chẳng bị diệt, khiến cho người ta được tạm nghe đến thì thật không còn gì may mắn hơn!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Cho đến khi đại giáo truyền sang Ðông, Viễn công đại sư (tổ Huệ Viễn) bèn dùng pháp này lập tông. Lúc đầu, ngài muốn cùng đồng học là Huệ Vĩnh qua La Phù, nhưng bị pháp sư Ðạo An lưu lại. Ngài Huệ Vĩnh bèn một mình đi trước qua Tầm Dương. Thứ sử Ðào Phạm ngưỡng mộ đạo phong của Sư, bèn lập chùa Tây Lâm cho Ngài ở. Ðấy là năm Ðinh Sửu niên hiệu Thái Nguyên thứ hai (377) đời Hiếu Vũ Ðế nhà Ðông Tấn. Ðến năm Thái Nguyên thứ 9 (Giáp Thân - 384), Viễn công mới đến Lô Sơn.</p>
    <p>Thoạt đầu, Ngài trụ tại Tây Lâm, nhưng bạn tu tìm đến quá đông, chùa Tây Lâm chật hẹp không chứa nổi. Thứ sử Hoàn Y bèn bắt đầu dựng chùa tại phía Ðông núi, đặt tên là Ðông Lâm. Ðến ngày 28 tháng Bảy năm Canh Dần (390 - Thái Nguyên thứ 15), Viễn công bèn cùng tăng, tục 123 người, kết Liên Xã niệm Phật, cầu sanh Tây Phương, sai ông Lưu Di Dân soạn bài văn khắc vào đá để minh thệ.</p>
    <p>Pháp Sư Huệ Vĩnh cũng dự vào Liên Xã. Vĩnh công sống tại Tây Lâm, trong gian nhà tranh biệt lập trên đảnh núi. Khi ấy có người đi Thiền hành, đến bên thất ngài, liền ngửi thấy mùi hương lạ, nhân đó đặt tên là Hương Cốc (hang thơm) để người khác suy ra thì biết.</p>
    <p>Lúc Viễn công mới kết xã, có một trăm hai mươi ba người đều là bậc long tượng trong pháp môn, Thái Sơn - Bắc Ðẩu trong làng Nho. Do đạo phong của Viễn công lan tỏa nên đều rủ nhau tìm tới. Nếu tính suốt cả hơn ba mươi năm trong đời Ngài thì số người dự vào Liên Xã tu Tịnh nghiệp, được tiếp dẫn vãng sanh rất nhiều không thể tính nổi.</p>
    <p>Sau này, các vị Ðàm Loan, Trí Giả, Ðạo Xước, Thiện Ðạo, Thanh Lương, Vĩnh Minh... không vị nào chẳng như thế cả: tự hành, dạy người. Ngài Ðàm Loan soạn Vãng Sanh Luận Chú diệu tuyệt cổ kim. Ngài Trí Giả viết Thập Nghi Luận diễn giải đến tột cùng lẽ được mất. Ngài soạn Quán Kinh Sớ giảng sâu xa cách quán tưởng đúng đắn. Ngài Ðạo Xước giảng ba kinh Tịnh Ðộ gần hai trăm lượt. Ngài Thiện Ðạo sớ giải ba kinh Tịnh Ðộ, cực lực khuyên chuyên tu. Ngài Thanh Lương sớ giải Phổ Hiền Hạnh Nguyện Phẩm phát huy đạo rốt ráo thành Phật. Ngài Vĩnh Minh nói Tứ Liệu Giản chỉ thẳng pháp liễu thoát ngay trong đời này.</p>
    <p>Từ xưa, các bậc cao nhân trong các tông, không vị nào lại chẳng hướng lòng về Tịnh Ðộ, chỉ có các tông sư nhà Thiền lại chuyên ngầm tu nên không xiển dương rõ rệt. Từ sau khi ngài Vĩnh Minh xướng xuất, các vị mới lưu lại ngôn giáo rõ rệt, thiết tha khuyên tu trì. Vì thế, bài Khuyến Tu Tịnh Ðộ Văn của Tử Tâm Tân Thiền Sư có câu: “Di Ðà rất dễ niệm, Tịnh Ðộ thật dễ sanh”.Còn viết: “Người tham thiền rất nên niệm Phật. Nếu căn cơ độn, chỉ e đời này chưa thể đại ngộ, phải nhờ Di Ðà nguyện lực tiếp dẫn vãng sanh”. Ngài còn viết: “Nếu ông niệm Phật mà chẳng sanh Tịnh Ðộ thì lão tăng sẽ đọa trong địa ngục kéo lưỡi”.</p>
    <p>Tác phẩm Tịnh Ðộ Thuyết của Chân Hiết Liễu thiền sư có câu: “Cả một tông Tào Ðộng thảy đều chú trọng ngầm tu. Là vì sao vậy? Là vì pháp môn Niệm Phật là đường tắt tu hành, thật dựa vào Ðại Tạng, tiếp dẫn căn khí thượng thượng kiêm tiếp dẫn căn cơ trung, hạ”.</p>
    <p>Ngài còn viết: “Bậc đại tượng trong Tông môn đã ngộ pháp bất hữu bất không bèn quyết chí khăng khăng nơi Tịnh nghiệp. Do Tịnh nghiệp thấy được Phật giản dị hơn Tông môn rất nhiều”.</p>
    <p>Ngài còn nói: “Dù Phật hay Tổ, dù Giáo hay Thiền đồng quy một nguồn. Nhập được pháp môn này thì vô lượng pháp môn thảy đều chứng nhập”. Trường Lô Trách thiền sư kết Liên Hoa Thắng Hội phổ khuyến đạo, tục niệm Phật cầu vãng sanh, cảm hai vị Bồ Tát Phổ Hiền, Phổ Huệ trong mộng đến xin dự hội. Sư liền để tên hai vị Bồ Tát đứng đầu hội. Ðủ thấy pháp này khế lý, khế cơ, chư thánh ngầm khen ngợi.</p>
    <p>Trong hai triều Tống Thái Tông và Tống Chân Tông, pháp sư Tỉnh Thường trụ trì chùa Chiêu Khánh ở Chiết Giang, hâm mộ đạo phong của tổ Lô Sơn Huệ Viễn, lập Tịnh Hạnh Xã. Ông Vương Văn Chánh Công Ðán quy y đầu tiên, làm người chủ xướng. Những bậc tể quan, châu mục, học sĩ, đại phu đều xưng là đệ tử, tham dự Tịnh Hạnh Xã đến hơn một trăm hai mươi người. Hàng sa môn tham dự đến hơn ngàn người, còn hàng sĩ thứ chẳng thể tính nổi số.</p>
    <p>Sau lại có Lộ Công Văn Ngạn Bác làm quan suốt bốn triều Nhân Tông, Anh Tông, Thần Tông, Triết Tông, xuất tướng nhập tướng hơn năm mươi năm, quan phẩm đến chức Thái Sư, được phong là Lộ Quốc Công. Ông bình sinh dốc lòng tin Phật pháp, tuổi già càng tận lực hỗ trợ đạo pháp, chuyên niệm A Di Ðà Phật. Sáng, chiều, đi, đứng, chưa từng thiếu lười. Ông cùng với pháp sư Tịnh Nghiêm kết xã 10 vạn người ở kinh đô để cầu sanh Tịnh Ðộ. Phần lớn các sĩ đại phu thời ấy đều được ông giáo hóa. Ông có bài tụng như sau:</p>
    <p class="text-center italic">Tri quân khí đảm đại như thiên,<br />Nguyện kết Tây Phương thập vạn duyên,<br />Bất vị tự thân cầu kế hoạt,<br />Ðại gia tề thượng độ đầu thuyền.</p>
    <p class="text-center italic">(Tạm dịch:<br />Biết ngài lớn mật bằng trời,<br />Xin cùng Tịnh Ðộ kết mười vạn duyên<br />Cứu thân nào tính kế riêng,<br />Ai ai đều đã bước lên thuyền rồi!)</p>
    <p>Ông thọ đến chín mươi hai tuổi, niệm Phật qua đời.</p>
    <p>Ðời Nguyên - Minh thì có các ngài Trung Phong, Thiên Như, Sở Thạch, Diệu Hiệp. Mỗi vị để lại thi ca, hoặc tạo luận giải thích, không vị nào là chẳng cực lực xiển dương pháp khế lý, khế cơ, suốt trên, tột dưới này. Nhưng các vị Liên Trì, U Khê, Ngẫu Ích là những người thành khẩn, thiết tha tột bực nhất.</p>
    <p>Ðời Thanh có ngài Phạm Thiên Tư Tề, Hồng Loa Triệt Ngộ đều tận lực hoằng dương đạo này. Các tác phẩm Khuyến Phát Bồ Ðề Tâm Văn của ngài Phạm Thiên, Thị Chúng Pháp Ngữ của ngài Hồng Loa có thể nói là những tác phẩm tiếp nối chí nguyện cổ thánh, khai phát kẻ học hậu lai, kinh thiên địa, động quỷ thần. Nếu người học thật có thể hành theo đó thì không ai là chẳng giã biệt Sa Bà, cao đăng Cực Lạc, làm đệ tử của Phật Di Ðà, làm bạn hiền trong Hải Hội.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Cho đến khi nào căn cơ của chúng sanh hết sạch, đức Như Lai mới nghỉ ngơi, nhưng lòng đại bi lợi sanh của Phật chẳng bao giờ cùng tận. Do đó, các vị đại đệ tử phân phát xá lợi, kết tập Kinh Tạng mong được lưu thông khắp mọi cõi, ngõ hầu tất cả đều được Phật pháp thấm nhuần. Mãi đến đời Ðông Hán, đại giáo mới bắt đầu truyền đến Trung Quốc. Nhưng do phong khí chưa mở nên chỉ lưu thông ở phương Bắc. Ðến đời Tôn Ngô, vào năm Xích Ô thứ tư (241), tôn giả Khang Tăng Khải sang giáo hóa tại Kiến Nghiệp, cảm được xá lợi của Như Lai giáng lâm khiến cho Tôn Quyền sanh lòng tin tưởng tột bậc. Họ Tôn bèn sửa chùa, dựng tháp để hoằng dương pháp hóa. Nam phương bắt đầu được thọ hưởng giáo pháp từ đấy.</p>
    <p>Ðến đời Tấn, giáo pháp lan khắp các nước Cao Ly, Nhật Bản, Miến Ðiện, An Nam, Tây Tạng, Mông Cổ. Từ đấy về sau, ngày càng hưng thịnh. Ðến đời Ðường, các tông đã thành lập đầy đủ, có thể nói là cực thịnh. Các tông Thiên Thai, Hiền Thủ, Từ Ân hoằng Giáo. Lâm Tế, Tào Ðộng, Quy Ngưỡng, Vân Môn, Pháp Nhãn hoằng Tông. Nam Sơn thì nghiêm tịnh Tỳ Ni (Luật). Liên Tông thì chuyên tu Tịnh Ðộ. Giống như các bộ chia nhau coi sóc công việc, hệt như sáu căn hỗ trợ nhau. Ấy là vì Giáo là lời Phật, Tông là tâm Phật, Luật là hạnh Phật. Tâm, ngữ, hạnh ba thứ khó thể tách rời, chỉ là ước trên phương diện chú trọng vào mặt nào mà lập danh.</p>
    <p>Chỉ mỗi mình pháp Tịnh Ðộ mới nhìn thì là phương tiện để phàm phu nhập đạo, nhưng thực ra nó là chỗ quy túc rốt ráo của các tông. Bởi thế, kẻ sắp đọa A Tỳ được dự vào phẩm chót, bậc đã chứng ngộ ngang với chư Phật vẫn cầu vãng sanh. Lúc đức Như Lai còn tại thế, ngàn căn cơ cùng được nuôi dưỡng, vạn mạch đều quy hướng. Phật diệt độ rồi, bậc đại sĩ hoằng pháp ai nấy chỉ hoằng dương một pháp để mong thâm nhập được một môn.</p>
    <p>Chư pháp dung thông, ví như ngàn hạt châu nơi cái lưới của Ðế Thích, mỗi hạt châu chẳng lẫn vào nhau, nhưng ánh sáng mỗi châu lại chiếu vào hàng ngàn hạt châu khác, ánh sáng của ngàn hạt châu chiếu vào một hạt châu. Soi rọi lẫn nhau nhưng chẳng tạp, riêng biệt nhưng chẳng thể phân khai. Kẻ câu nệ vào Tích thì bảo: “Hết thảy pháp, mỗi pháp đều sai khác”. Kẻ khéo hiểu sẽ nói: “Hết thảy pháp, các pháp viên thông”. Như bốn cửa thành, gần cửa nào theo cửa đó mà vào. Cửa tuy khác nhau, nhưng vào thành chẳng khác. Nếu biết ý này thì chẳng phải chỉ có những giáo lý rất sâu do chư Phật, chư Tổ đã nói mới là pháp để “quy chân đạt bổn” (thấu hiểu một cách chân thật, thông đạt tận nguồn cội), minh tâm kiến tánh, mà hết thảy Ấm, Nhập, Xứ, Giới, Ðại v.v... trong khắp thế gian cũng đều là pháp để quy chân đạt bổn, minh tâm kiến tánh! Mà mỗi một pháp cũng chính là chân, là bổn, là tâm, là tánh!</p>
    <p>Bởi vậy, kinh Lăng Nghiêm coi Ngũ Ấm, Lục Nhập, Thập Nhị Xứ, Thập Bát Giới, Thất Ðại đều là Như Lai Tạng Diệu Chân Như Tánh. Vì thế bảo rằng: Hết thảy pháp không một pháp nào chẳng phải là Phật pháp, cũng như không một ai chẳng phải là Phật. Tiếc thay chúng sanh châu đeo trong vạt áo trọn chẳng biết hay, ôm của báu đi ăn xin, chịu khốn cùng oan uổng. Dùng tâm Như Lai tạo nghiệp chúng sanh, dùng pháp giải thoát chịu khổ luân hồi, đáng thương lắm thay! Vì thế, bậc đại sĩ hoằng pháp chẳng nề gian nan, cay đắng, dùng đủ mọi phương tiện để khai ngộ, dẫn dắt khiến chúng sanh hiểu đúng sự lý, nhân quả của mười pháp giới, triệt ngộ tự tánh của tâm, ngõ hầu viên chứng rốt ráo.</p>
    <p>Từ Ðường, sang Tống, sang Nguyên, sang Minh, đến Thanh, cả một ngàn năm, thanh giáo chẳng khuất lấp. Dẫu chẳng hưng thịnh bằng thời Ðường, nhưng cũng có thể nói là suýt soát. Từ đời Hàm Phong, Ðồng Trị trở đi, binh hỏa liên miên, đói kém liên tiếp, cao nhân ngày một hiếm hoi, kẻ dung tục ngày càng nhiều, quốc gia chẳng bận tâm đề xướng, tăng lữ không sức chấn hưng. Do đó, hàng cao nhân tại gia vì chưa từng nghiên cứu Phật pháp, chuộng lầm khuôn sáo cũ của Âu - Hàn (Âu Dương Tu, Hàn Dũ), đến nỗi đạo pháp suy sụp sát đất. Mãi đến cuối đời Thanh, học vấn phát triển, những người thiên tư cao tìm đọc kinh Phật mới hay gốc đạo chính là đây, mới bèn quyết chí nghiên cứu.</p>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
    <h3 class="mt-10 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chú Thích:</h3>
    <p class="text-[0.95em]">6 . Trung quốc: ở chính giữa đất nước, hoặc những vùng văn minh, không sanh nơi biên cương, mọi rợ.</p>
    <p class="text-[0.95em]">7 . Lục tức thành Phật: Lục tức là xứng lý, danh tự, tương tự, phần chứng, cứu cánh, quán hạnh. Tức là thành Phật đi từ mặt lý đến thực chứng. Chẳng hạn như: Xứng lý tức thành Phật nghĩa là chúng sanh ai cũng sẵn Phật tánh, nên về mặt lý, chúng sanh đều là Phật. Khi nhận hiểu rằng ai cũng có Phật tánh, tin chắc không nghi nhưng chưa đoạn được phiền não, chưa chứng đạo quả, thì chỉ là danh tự tức thành Phật. Khi khởi công tu tập, đoạn dần phiền não thì gọi là quán hạnh tức thành Phật...</p>
    <p class="text-[0.95em]">8 . Tức là kệ tán Phật A Di Ðà: A Di Ðà Phật thân kim sắc....</p>
    <p class="text-[0.95em]">9 . Nguyên văn là “tân lương” (bến và cầu), nghĩa bóng là những hướng dẫn chỉ nam</p>
    <p class="text-[0.95em]">10 . Khai Tích hiển Bổn: Bổn là bản thể, Tích là hình tướng thị hiện. Ví như mặt trăng là Bổn, bóng trăng hiện trong các chỗ có nước là Tích. Khai Tích hiển Bổn là chỉ dạy về Pháp Thân, chỉ rõ Ứng Thân. Chẳng hạn trong hội Pháp Hoa, phẩm Như Lai Thọ Lượng, Ðức Phật chỉ rõ thân thuyết pháp trong cõi Sa Bà, thọ tám mươi tuổi là ứng thân thị hiện để dẫn dụ chúng sanh về đạo Nhất Thừa, chứ pháp thân của Phật thường trụ bất hoại. Cũng như không riêng trong cõi Sa Bà, Phật còn thị hiện trong nhiều thế giới khác nhau, dùng nhiều danh hiệu khác nhau để hóa độ chúng sanh.</p>
    <p class="text-[0.95em]">11 . Nguyên văn là “minh linh” (một loại sâu cắn lúa). Dịch là nhện để thuận theo câu ca dao “tò vò mà nuôi con nhện...”. Thật ra, tò vò bắt các loài sâu hay nhện, tiêm nọc cho chúng mê đi, nhưng vẫn sống, rồi bỏ vào ổ có chứa trứng tò vò con để làm mồi cho con. Ở đây, Tổ dùng ví dụ này để thuận theo cách hiểu của thế gian.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = 
[
  {
    "question": "Theo văn bản, tại sao pháp môn Tịnh Độ lại được xem là đặc biệt thiết yếu đối với hàng phàm phu trong thời Mạt Pháp?",
    "options": {
      "a": "Vì phàm phu chướng sâu nghiệp nặng, khó tự lực đoạn Hoặc, cần nương vào từ lực của Phật để đới nghiệp vãng sanh.",
      "b": "Vì pháp môn này hoàn toàn thay thế và bãi bỏ các tông phái khác như Thiền, Luật, Giáo.",
      "c": "Vì pháp môn này không yêu cầu người tu phải có Tín và Nguyện, chỉ cần nghiêm trì giới luật.",
      "d": "Vì người tu Tịnh Độ sẽ thành Phật ngay lập tức tại cõi Sa Bà mà không cần vãng sanh Cực Lạc."
    },
    "answer": "a"
  },
  {
    "question": "Khái niệm \"Một câu\" gộp trọn yếu chỉ tu trì Tịnh Độ được nêu trong đoạn trích là gì?",
    "options": {
      "a": "Giới, Định, Tuệ",
      "b": "Tín, Nguyện, Hạnh",
      "c": "Giáo, Lý, Hạnh, Quả",
      "d": "Từ, Bi, Hỷ, Xả"
    },
    "answer": "b"
  },
  {
    "question": "Trong phần cuối kinh Hoa Nghiêm được nhắc tới trong trích đoạn, Ngài Phổ Hiền Bồ Tát đã khuyên Thiện Tài Đồng Tử và đại chúng làm điều gì?",
    "options": {
      "a": "Xóa bỏ toàn bộ công đức đã tu tập để bắt đầu lại từ địa vị phàm phu.",
      "b": "Chỉ thực hành thiền định quán tưởng mà không phát bất kỳ nguyện vọng nào.",
      "c": "Phát mười đại nguyện vương, hồi hướng vãng sanh Tây Phương Cực Lạc.",
      "d": "Ở lại vĩnh viễn cõi Sa Bà để làm hóa thân Phật mà không cần cầu sanh Tịnh Độ."
    },
    "answer": "c"
  },
  {
    "question": "Thái độ của chư Tổ nhà Thiền đối với việc tu Tịnh Độ được giải thích qua hai mặt Chân Đế và Tục Đế như thế nào?",
    "options": {
      "a": "Chân Đế xét về Tánh thể thì \"chẳng nhận một mảy trần\", Tục Đế xét về Tu trì thì \"chẳng bỏ một pháp nào\".",
      "b": "Chân Đế bắt buộc phải niệm Phật thành tiếng, Tục Đế chỉ cho phép ngồi thiền ngậm miệng.",
      "c": "Chân Đế dành riêng cho hàng phàm phu, Tục Đế là cảnh giới của chư Phật.",
      "d": "Chân Đế phủ nhận nhân quả, Tục Đế mới chấp nhận nhân quả."
    },
    "answer": "a"
  },
  {
    "question": "Tác giả của bài kệ \"Tứ Liệu Giản\" dùng để soi sáng và đốn ngộ yếu đạo xuất sanh tử giữa Thiền và Tịnh Độ là ai?",
    "options": {
      "a": "Hòa thượng Thiện Đạo",
      "b": "Ngài Trí Giả",
      "c": "Sư Vĩnh Minh (Vĩnh Minh Đại Sư)",
      "d": "Ngài Đàm Loan"
    },
    "answer": "c"
  },
  {
    "question": "Trong Kinh Quán Vô Lượng Thọ, hạng người \"Hạ phẩm hạ sanh\" (ngũ nghịch thập ác) đạt được vãng sanh nhờ điều kiện gì vào lúc lâm chung?",
    "options": {
      "a": "Nhờ gặp thiện tri thức dạy bảo, chí tâm xưng niệm Phật danh dẫu chỉ mười tiếng hoặc vài tiếng.",
      "b": "Nhờ trả hết toàn bộ quả báo địa ngục trong nhiều kiếp rồi mới được tái sanh.",
      "c": "Nhờ tự thân hiểu thấu suốt giáo lý Bát Nhã vô niệm.",
      "d": "Nhờ đã nhập định sâu xa nhiều năm trước khi lâm chung."
    },
    "answer": "a"
  },
  {
    "question": "Hình ảnh so sánh nào được cổ nhân dùng trong văn bản để làm nổi bật sự khác biệt giữa việc tự lực tu hành và nương vào Phật lực niệm Phật?",
    "options": {
      "a": "Các môn khác như băng tan thành nước; Niệm Phật như nước đóng thành băng.",
      "b": "Các môn khác như chim bay trên trời; Niệm Phật như cá bơi ngược dòng nước.",
      "c": "Các môn khác như kiến bò lên núi cao; Niệm Phật vãng sanh như căng buồm thuận gió, nước xuôi.",
      "d": "Các môn khác như đi thuyền trên biển; Niệm Phật như đi bộ trên đất liền."
    },
    "answer": "c"
  },
  {
    "question": "Theo Hòa thượng Thiện Đạo được trích dẫn trong bài, người tu hành nên có thái độ phân định như thế nào giữa việc học \"Giải\" và học \"Hạnh\"?",
    "options": {
      "a": "Về 解 (Giải) thì nên học rộng các pháp; về 行 (Hạnh) thì nên chọn một pháp khế lý khế cơ để chuyên tinh.",
      "b": "Chỉ tập trung học 解 cho đến khi thành Phật rồi mới bắt đầu tu Hạnh.",
      "c": "Về 解 chỉ học một kinh duy nhất; về 行 thì thực hành tất cả các môn cùng lúc.",
      "d": "Phủ nhận hoàn toàn việc học 解, chỉ chú trọng thực hành Hạnh."
    },
    "answer": "a"
  },
  {
    "question": "Ý nghĩa của câu \"Lấy Quả Địa Giác làm Nhân Địa Tâm\" trong pháp môn Niệm Phật được giải thích như thế nào?",
    "options": {
      "a": "Cho rằng quả vị Phật và tâm của phàm phu hoàn toàn cách biệt, không thể kết nối.",
      "b": "Chỉ dựa hoàn toàn vào tự lực của bản thân mà không liên quan đến danh hiệu hay công đức của Phật.",
      "c": "Yêu cầu hành giả phải đạt đến quả vị Phật trước rồi mới bắt đầu phát tâm niệm Phật.",
      "d": "Dùng vạn đức hồng danh (quả thành tựu của Phật) làm tâm niệm tu hành của phàm phu ở nhân địa."
    },
    "answer": "d"
  },
  {
    "question": "Nhân vật lịch sử nào được ghi nhận trong văn bản là người khởi xướng kết Liên Xã niệm Phật tại Lô Sơn (Đông Lâm Chùa), mở đầu cho trào lưu quy hướng Tịnh Độ?",
    "options": {
      "a": "Pháp Sư Tỉnh Thường",
      "b": "Pháp Sư Đạo An",
      "c": "Viễn Công Đại Sư (Tổ Huệ Viễn)",
      "d": "Lộ Quốc Công Văn Ngạn Bác"
    },
    "answer": "c"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-3-i-tinh-do-thu-thang',
  slug: 'bai-3-i-tinh-do-thu-thang',
  title: 'I. TỊNH ĐỘ THÙ THẮNG',
  type: 'article',
  isSectionHeader: true,
  status: 'published',
  order: 1,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Pháp_Môn_Tịnh_Độ.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Tịnh_Độ_Thù_Thắng.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/nozKWqsXi0Q',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3nCaHvWqcVCyzedZvmjZuB?si=rD3sjtYXQtW6p3Yqn5oS1g',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Tịnh Độ Thù Thắng',
    passPercentage: 70,
    questions,
  },
}

export default lesson
