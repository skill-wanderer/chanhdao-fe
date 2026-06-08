import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bai-thu-muoi-bon-phat-day-tri-chu-lang-nghiem">
    <h2 id="bai-thu-muoi-bon-phat-day-tri-chu-lang-nghiem" class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI BỐN</h2>
    <h3 id="i-phat-day-tri-chu-lang-nghiem" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. PHẬT DẠY TRÌ CHÚ LĂNG NGHIÊM</h3>
    <p>A Nan, người tu hành phải gìn giữ bốn điều luật nghi cần yếu: dâm, sát, đạo, vọng cho trong sạch, cũng như băng tuyết, nơi tâm không khởi vọng niệm duyên theo ngoại cảnh, thì chúng ma kia không làm sao sanh được (vì trong tâm vọng động, nên ngoại ma mới ứng).</p>
    <p>Nếu người nào nghiệp chướng nặng nề, không thể trừ được, ông nên dạy họ chí tâm trì chú Lăng Nghiêm này, thì các nghiệp chướng đều tiêu diệt. Bằng chứng là ông cùng với nàng Ma Đăng Già, tình ân ái chồng vợ đã khắn khít với nhau từ nhiều kiếp, đâu phải mới một đời này; nhờ thần chú Lăng Nghiêm mà nàng Ma Đăng Già nguồn tình khô cạn và được thành A La Hán.</p>
    <p>Ma Đăng Già là kẻ dâm nữ, không có tâm tu hành còn được quả Thánh, huống chi các ông là bậc Thanh Văn, có chí cầu đạo Vô Thượng, lại trì tụng chú này, thì quyết định thành Phật rất dễ, cũng như thuận gió tung bụi, chẳng có khó gì.</p>
    <h4 id="luoc-giai-1" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Trong đoạn kinh này Phật dạy phương pháp tu hành để thành Phật, tóm lại có ba điều:</p>
    <p>Bất tùy phân biệt: Nghĩa là, khi đối cảnh không khởi vọng tâm phân biệt, thì tham, sân, si chẳng sanh. Tham, sân, si không sanh thì các nghiệp sát, đạo, dâm chẳng tạo. Nghiệp nhân không tạo thì quả báo chẳng có. Nói tóm lại là “xoay các tri giác trở về chân tâm”, không duyên theo trần cảnh thì vọng niệm không sanh; vọng không sanh thì chân tâm hiện bày.</p>
    <p>Tổ sư có dạy: “Kiến sắc phi can sắc, văn thanh bất thị thanh”; nghĩa là thấy sắc không can hệ gì đến sắc, nghe tiếng cũng không dính líu gì đến tiếng. Hay như câu: “Ngộ thanh ngộ sắc như thạch thượng tài hoa, kiến lợi kiến danh như nhãn trung trước tiết”: Gặp sắc đẹp hay nghe tiếng hay, như hoa trồng trên đá (không dính líu gì); thấy tài lợi và danh vọng như bụi rớt trong con mắt. Nếu người đến trình độ này rồi, thì dầu vào thanh lâu hay tửu điếm cũng đều là đạo tràng thanh tịnh (dâm phòng tửu tứ vô phi thanh tịnh đạo tràng).</p>
    <p>Trì giới: Phải giữ gìn giới luật, trong tâm ngoài thân đều thanh tịnh như băng tuyết.</p>
    <p>Trì chú Lăng Nghiêm: Nếu người nào nghiệp chướng nặng nề, thì phải trì tụng chú Lăng Nghiêm sẽ mau đặng thành đạo quả. Trong ba pháp tu này, bậc thượng căn, trung căn và hạ căn đều tu được cả. Thật là lòng từ bi của Phật vô lượng, mưa pháp khắp trùm, cỏ cây lớn nhỏ đều được thấm nhuần.</p>
    <h3 id="ii-a-nan-cau-phat-noi-lai-than-chu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. A NAN CẦU PHẬT NÓI LAI THẦN CHÚ</h3>
    <p>Ông A Nan đứng dậy đảnh lễ Phật và kính cẩn bạch rằng: “Con từ khi xuất gia đến nay, vì ỷ lại lòng thương yêu của Phật, chỉ lo học rộng nghe nhiều, chẳng chuyên tu tập, nên chẳng chứng được đạo quả, thành thử phải bị tà thuật của Phạm Thiên bắt; trong tâm con tuy thông suốt mà năng lực không được tự do, nên con phải nhờ Ngài Văn Thù đến cứu độ. Con tuy nhờ thần chú Lăng Nghiêm của Phật mới được giải thoát, nhưng chính con chưa được nghe, cúi xin Đức Thế Tôn từ bi nói lại, khiến cho những người tu hành hiện tại và chúng sanh luân hồi đời sau, nhờ thần chú này mà thân tâm được giải thoát”.</p>
    <h3 id="iii-phat-phong-hao-quang-noi-than-chu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. PHẬT PHÓNG HÀO QUANG NÓI THẦN CHÚ</h3>
    <p>Khi đó từ nơi nhục kế (đảnh) của Phật, phóng ra hào quang trăm báu; trong hào quang xuất hiện ra hoa sen báu ngàn cánh. Trong hoa sen có Đức Hóa Phật ngồi, trên đảnh Ngài phóng ra mười đạo hào quang sáng suốt trăm báu. Trong mỗi đạo hào quang đều có thị hiện vô số thần Kim Cang: vị bưng núi, vị cầm bảo tử v.v... đứng khắp cả hư không. Đại chúng trông thấy vừa mừng vừa sợ, đều cầu Phật thương xót chở che và nhất tâm chờ nghe Phật nói thần chú.</p>
    <p>Phật nói thần chú:</p>
    <h4 id="de-nhat" class="text-lg font-semibold">(ĐỆ NHẤT)</h4>
    <p>Nam mô tát đát tha tô già đa da a la ha đế tam miệu tam bồ đà tỏa. Tát đát tha Phật đà cu tri sắc ni sam. Nam mô tát bà bột đà bột địa, tát đa bệ tệ. Nam mô tát đa nẩm tam miệu tam bồ đà cu tri nẩm. Ta xá ra bà ca tăng già nẩm. Nam mô lô kê A la hán đa nẩm. Nam mô tô lô đa ba na nẩm. Nam mô ta yết rị đà già di nẩm. Nam mô lô kê tam miệu già đa nẩm. Tam miệu</p>
    <p>già ba ra để ba đa na nẩm. Nam mô đề bà ly sắc nỏa. Nam mô tất đà da tỳ đĩa da đà ra ly sắc nỏa. Xá ba noa yết ra ha ta ha ta ra ma tha nẩm. Nam mô bạt ra ha ma ni. Nam mô nhơn đà ra da. Nam mô bà già bà đế, lọ đà ra da. Ô ma bát đế, ta hê dạ da. Nam mô bà già bà đế. Na ra dả noa da. Bàn giá ma ha tam mộ đà ra. Nam mô tất yết rị đa da. Nam mô bà già bà đế. Ma ha ca ra da. Địa rị bát lặc na già ra. Tỳ đà ra ba noa ca ra da. A địa mục đế. Thi ma xá na nê bà tất nê. Ma đát rị già noa. Nam mô tất yết rị đa da. Nam mô bà già bà đế. Đa tha già đa cu ra da. Nam mô bát đầu ma cu ra da. Nam mô bạc xà ra cu ra da. Nam mô ma ni cu ra da. Nam mô già xà cu ra da. Nam mô bà già bà đế, đế rị trà du ra tây na, ba ra ha ra noa ra xà da, đa tha già đa da. Nam mô bà già bà đế. Nam mô a di đa bà da đa tha già đa da, a ra ha đế, tam miệu tam bồ đà da. Nam mô bà già bà đế, a sô bệ da, đa tha già đa da, a ra ha đế, tam miệu tam bồ đà da. Nam mô bà già bà đế, bệ sa xà da cu lô phệ trụ rị da, bác ra bà ra xà da, đa tha già đa da. Nam mô bà già bà đế, tam bổ sư tỳ đa, tát lân nại ra lặc xà da, đa tha già đa da, a ra ha đế, tam miệu tam bồ đà da. Nam mô bà già bà đế, xá kê dã mẫu na duệ, đa tha già đa da, a ra ha đế, tam miệu tam bồ đà da. Nam mô bà già bà đế, lặc đác na kê đô ra xà da, đa tha già đa da, a ra ha đế, tam miệu tam bồ đề da, đế biều nam mô tát yết rị da, ế đàm bà già bà đa, tát đát tha già đô sắc ni sam, tát đát đa bác đác lam. Nam mô a bà ra thị đam, bác ra đế dương kỳ ra, tát ra bà bộ đa yết ra ha, ni yết ra ha yết ca ra ha ni, bạc ra tỷ địa da sất đà nể, a ca ra mật rị trụ, bác rị đát ra da nảnh yết rị, tát ra bà bàn đà na mục xoa ni, tát ra bà đột sắc tra đột tất phạp, bát na nê phạt ra ni, giả đô ra thất đế nẩm, yết ra ha ta ha tát ra nhả xà, tỷ đa băng ta na yết rị, a sắc tra băng xá đế nẩm, na xoa sát đác ra nhả xà, ba ra tát đà na yết rị, a sắc tra nẩm, ma ha yết ra ha nhả xà, tỳ đa băng tát na yết rị, tát bà xá đô lô nể bà ra nhả xà, hô lam đột tất phạp, nan giá na xá ni, tỷ sa xá tất đác ra, a kiết ni ô đà ca ra nhã xà, a bác ra thị đa cu ra, ma ha bác ra chiến trì, ma ha điệp đa, ma ha đế xà, ma ha thuế đa xa bà ra, ma ha bạt ra bàn đà ra bà tất nể, a rị da đa ra, tỳ rị cu tri, thệ bà tỳ xà da, bạt xà ra ma lễ để, tỳ xá lô đa, bột đằng võng ca, bạt xà ra chế hắt na a giá, ma ra chế bà bác ra chất đa, bạt xà ra thiện trì, tỳ xá ra giá, phiến đa xá bệ đề bà bổ thị đa, tô ma lô ba, ma ha thế đa, a rị da đa ra, ma ha bà ra a bác ra, bạt xà ra thương yết ra chế bà, bạc xà ra cu ma rị, cu lam đà rị, bạt xà ra hắc tát đa giá, tỳ địa gia kiền giá na ma rị ca, khuất tô mẫu bà yết ra đa na, bệ lô giá na cu rị đa, dạ ra thố sắc ni sam, tỳ chiết lam bà ma ni giá, bạt xà ra ca na ca ba ra bà, lô xà na bạt xà ra đốn trỉ giá, thế đa giá ca ma ra sát xa thi ba ra bà, ế đế di đế, mẫu đà ra yết noa, ta bệ ra sám, quật phạm đô, ấn thố na mạ mạ tỏa.</p>
    <h4 id="de-nhi" class="text-lg font-semibold">(ĐỆ NHỊ)</h4>
    <p>Ô hồng rị sắc yết noa, bác lặc xá tất đa, tát đát tha già đô sắc ni sam. Hổ hồng đô lô ung chim bà na. Hổ hồng đô lô ung tất đam bà na. Hổ hồng đô lô ung ba ra sắc địa da tam bác xá noa yết ra. Hổ hồng đô lô ung, tát bà dược xoa hắc ra sát ta, yết ra ha nhã xà, tỳ đằng băng tát na yết ra. Hổ hồng đô lô ung, giả đô ra thi để nẩm yết ra ha ta ha tát ra nẩm, tỳ đằng băng tát na ra. Hổ hồng đô lô ung, ra xoa, bà già phạm tát đát tha già đô sắc ni sam, ba ra điểm xà kiết rị, ma ha ta ha tát ra, bột thọ ta ha tát ra thất rị sa, cu tri ta ha tát nê đế lệ, a tệ đề thị bà rị đa, tra tra anh ca ma ha bạt xà lô đà ra, đế rị bồ đà na, man trà ra, ô hồng, ta tất đế bạc bà đô, mạ mạ, ấn thố na mạ mạ tỏa.</p>
    <h4 id="de-tam" class="text-lg font-semibold">(ĐỆ TAM)</h4>
    <p>Ra xà bà dạ, chủ ra bạt dạ, a kỳ ni bà dạ, ô đà ca bà dạ, tỳ xa bà dạ, xá tất đa ra bà dạ, bà ra chước yết ra bà dạ, đột sắc xoa bà dạ, a xá nể bà dạ, a ca ra mật rị trụ bà dạ, đà ra ni bộ di kiếm ba già ba đà bà dạ, ô ra ca bà đa bà dạ, lặc xà đàng trà bà dạ, na già bà dạ, tỳ điều đát bà dạ, tô ba ra noa bà dạ, dược xoa yết ra ha, ra xoa tư yết ra ha, tất rị đa yết ra ha, tỳ xá giá yết ra ha, bộ đa yết ra ha, ca tra bổ đơn na yết ra ha, tất kiền độ yết ra ha, a bá tất ma ra yết ra ha, ô đàn ma đà yết ra ha, xa dạ yết ra ha, hê rị bà đế yết ra ha, xá đa ha rị nẩm, yết bà ha rị nẩm, lô địa ra ha rị nẩm, man ta ha rị nẩm, mê đà ha rị nẩm, man ta ha rị nẩm, mê đà ha rị nẩm, ma xà ha rị nẩm, xà đa ha rị nữ, thị tỳ đa ha rị nẩm, tỳ đa ha rị nẩm, bà đa ha rị nẩm, a du giá ha rị nữ, chất đa ha rị nữ, đế sam tát bệ sam, tát bà yết ra ha nẩm, tỳ đa dạ xà sân đà dạ di, kê ra dạ di, ba rị bạt ra giả ca hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, trà diễn ni hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, ma ha bát du bác đát dạ, lô đà ra hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, na ra dạ noa hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, đát đỏa già lô trà tây hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, ma ha ca ra ma đát rị già noa hất rị đởm, tỳ đà dạ xà sân đà dị di, kê ra dạ di, xà dạ yết ra, ma đột yết ra, tát bà ra tha ta đạt na hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, giả đốt ra bà kỳ nễ hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, tỳ rị dương hất rị tri, nan đà kê sa ra đà noa bác đế, sách hê dạ hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, na yết na xá ra bà noa hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, a la hán hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, tỳ đa ra già hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, bạt xà ra ba nể, cu hê dạ, cu hệ dạ ca địa bát đế hất rị đởm, tỳ đà dạ xà sân đà dạ di, kê ra dạ di, ra xoa võng bà già phạm, ấn thố na mạ mạ tỏa.</p>
    <h4 id="de-tu" class="text-lg font-semibold">(ĐỆ TỨ)</h4>
    <p>Bà già phạm, tát đát đa tát đát ra. Nam mô tý đô đế, a tất đa na ra lặc ca, ba ra bà tất phổ tra, tỳ ca tát đát đa bác đế rị, thập phật ra thập phật ra, đà ra đà ra, tần đà ra tần đà ra, sân đà sân đà. Hổ hồng, hổ hồng, phấn tra, phấn tra, phấn tra, phấn tra, phấn tra ta ha, hê hê phấn, a mâu ca da phấn, a ba ra đề ha đa phấn, ba ra ba ra đà phấn, a tố ra tỳ đà ra ba ca phấn, tát bà đề bệ tệ phấn, tát bà na già tệ phấn, tát bà dược xoa tệ phấn, tát bà kiền thát bà tệ phấn, tát bà bổ đơn na tệ phấn, ca tra bổ đơn na tệ phấn, tát bà đột lang chỉ đế tệ phấn, tát bà thập bà lê tệ phấn, tát bà a bá tất ma lê tệ phấn, tát bà xá ra bà noa tệ phấn, tát bà địa đế kê tệ phấn, tát bà đát ma đà kệ tệ phấn, tát bà tỳ đà da ra thệ giá lê tệ phấn, xà dạ yết ra ma độ yết ra, tát bà dạ tha ta đà kê tệ phấn, tỳ địa da giá lê tệ phấn, giả đô ra phược kỳ nể tệ phấn, bạt xà ra cu ma rị, tỳ đà dạ ra thệ tệ phấn, ma ha ba ra đinh dương xoa kỳ rị tệ phấn, bạt xà ra thương yết ra dạ, ba ra trượng kỳ ra xà da phấn, ma ha ca ra dạ, ma ha mạt đát rị ca noa. Nam mô ta yết rị đa dạ phấn, tỷ sắc noa tỳ duệ phấn, bột ra ha mâu ni duệ phấn, a kỳ ni duệ phấn, ma ha yết rị duệ phấn, yết ra đàn tri duệ phấn, miệc đát rị duệ phấn, lao đát rị duệ phấn, giá văn trà duệ phấn, yết la ra đát rị duệ phấn, ca bát rị duệ phấn, a địa mục chất đa ca thi ma xá na, bà tư nể duệ phấn, diễn kết chất, tát đỏa bà tỏa, mạ mạ ấn thố na mạ mạ tỏa.</p>
    <h4 id="de-ngu" class="text-lg font-semibold">(ĐỆ NGŨ)</h4>
    <p>Đột sắc tra chất đa, a mạt đát rị chất đa, ô xà ha ra, già bà ha ra, già bà ha ra, lô địa ra ha ra, bà ta ha ra, ma xà ha ra, xà đa ha ra, thi tỳ đa ha ra, bạc lược dạ ha ra, kiền đà ha ra, bố sử ba ha ra, phả ra ha ra, bà tỏa ha ra, bác ba chất đa, đột sắc tra chất đa, lao đà ra chất đa, dược xoa yết ra ha, ra sắt ta yết ra ha, bế lệ đa yết ra ha, tỳ xá giá yết ra ha, bộ đa yết ra ha, cưu bàn trà yết ra ha, tất kiền đà yết ra ha, ô đát ma đà yết ra ha, xa dạ yết ra ha, a bá tát ma ra yết ra ha, trạch kê cách trà kỳ ni yết ra ha, rị Phật đế yết ra ha, xà di ca yết ra ha, xá cu ni yết ra ha,mộ đà ra nan địa ca yết ra ha, a lam bà yết ra ha, kiền độ ma ni yết ra ha, thập phạt ra yên ca hê ca, trị đế dược ca, đát lệ đế dược ca, giả đột thác ca, ni đề thập phạt ra, tỳ sam ma thập phạt ra, bạc để ca, tát bà thập phạt ra, thất lô kiết đế, mạt đà bệ đạt lô chế kiếm, a ỷ lô kiềm, mục khê lô kiềm, yết rị đột lô kiềm, yết ra ha yết lam, yết noa du lam, đản đa du lam, hất rị dạ du lam, mạt mạ du lam, bạt rị thất bà du lam, tỷ lật sắc tra du lam, ô đà ra du lam, yết tri du lam, bạt tất đế du lam, ô lô du lam, thường già du lam, hắc tất đa du lam, bạt đà du lam, ta phòng án gia bác ra trượng gia du lam, bộ đa tỷ đa trà trà kỳ ni thập bà ra, đà đột lô ca kiến đốt lô kiết tri, bà lộ đa tỳ, tát bác lô ha lăng già, du sa đát ra, ta na yết ra tỳ sa dụ ca, a kỳ ni ô đà ca, mạt ra bệ ra kiến đa ra, a ca ra mật rị đột đát liểm bộ ca, địa lật lặc tra, tỷ rị sắc chất ca, tát bà na cu ra, tứ dẫn già tệ yết ra rị dược xoa đác ra sô, mạt ra thị phệ đế sam ta bệ sam, tất đát đa bác đát ra, ma ha bạc xà lô sắc ni sam, ma ha bác lặc trượng kỳ lam, dạ ba đột đà xá du xà na, biện đát lệ noa, tỳ đà da bàn đàm ca lô di, đế thù bàn đàm ca lô di, bát ra tỳ đà bàn đàm ca lô di đát điệt tha.</p>
    <p>Án a na lệ, tỳ xá đề bệ ra bạc xà ra đà rị, bàn đà bàn đà nể, bạt xà ra bàn ni phấn. Hổ hồng đô lô ung phấn, ta bà ha.</p>
    <h4 id="luoc-giai-2" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Tổ Đan Hà nói: Từ xưa đến nay không có ai dịch nghĩa thần chú. Vì có năm nguyên nhân:</p>
    <p>Lời bí mật của Phật, duy có Phật với Phật mới biết, ngoài các vị Thánh cũng không thể biết được.</p>
    <p>Vì một chữ hoặc một câu có hàm vô số nghĩa.</p>
    <p>Hoặc tên của các vị quỷ thần, kêu gọi các vị ấy liền đến để bảo hộ người tu.</p>
    <p>Mặt ấn của chư Phật, kẻ âm người dương đều phải tuân theo, cũng như ấn sắc của nhà vua.</p>
    <p>Người chí tâm tụng trì, sẽ được diệt trừ tội nặng và mau chứng quả Thánh.</p>
    <p>Các nhà phiên âm có khác, song hành giả chí tâm trì tụng một bản nào cũng đều được hiệu quả.</p>
    <h3 id="iv-cong-nang-cua-than-chu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. CÔNG NĂNG CỦA THẦN CHÚ</h3>
    <p>A Nan, mười phương các Đức Như Lai đều nhờ “tâm chú” này mà hàng phục các ma, ngăn dẹp ngoại đạo, được thành quả Phật. Mười phương chư Phật đều nhờ “tâm chú” này mà cứu độ tất cả chúng sanh khỏi các tai nạn khổ não như thủy tai, hỏa tai, cơ cẩn v.v... và cứu độ chúng sanh ở địa ngục, ngạ quỷ, súc sanh, đều được giải thoát.</p>
    <p>Các ông là hàng Thanh Văn hữu học chưa khỏi luân hồi, phát tâm cầu quả A La Hán, nếu không trì chú này, mà muốn cho khỏi các ma chướng thì không thể được.</p>
    <p>Sau khi ta diệt độ, các chúng sanh đời sau, nếu có người trì tụng chú này, thì các tai nạn: thủy tai, hỏa hoạn, thuốc độc, độc trùng, ác thú, yêu tinh, quỷ quái v.v... đều chẳng hại được.</p>
    <p>Nếu người phạm tội ngũ nghịch, phá trai, phạm giới, khi chí tâm trì chú này, thì các tội đều tiêu, cũng như nước nóng làm giá tan. Những người không con, muốn cầu con, tụng chú này sẽ được con, cầu trường thọ v.v... được trường thọ, mỗi mỗi đều như ý nguyện.</p>
    <h3 id="v-cac-vi-thien-than-phat-nguyen-bao-ho-nguoi-tri-chu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. CÁC VỊ THIÊN THẦN PHÁT NGUYỆN BẢO HỘ NGƯỜI TRÌ CHÚ</h3>
    <p>Khi Phật nói thần chú này rồi, trong hội có vô số thần Kim Cang, đồng lạy Phật và phát lời thệ nguyện:</p>
    <p>Chúng con xin sẽ thành tâm bảo hộ cho người trì chú này.</p>
    <p>Lại có vô số các vị chư Thiên và Thánh Thần đều đứng dậy lạy Phật và phát nguyện bảo hộ người trì chú này, khiến cho họ khỏi các ma chướng và mau đặng thành đạo Vô Thượng Bồ Đề.</p>
    <p>Lại có vô số vị Kim Cang Tạng Bồ Tát, đồng đứng trước Phật, phát lời thệ rằng:</p>
    <p>Con tu hành chẳng chịu vào Niết Bàn, nguyện ở lại đời sau để theo bảo hộ người tu hành, không cho các loài ác ma đến nhiễu hại, chúng nó phải ở cách xa người tu ngoài mười do tuần. Nếu có loài ác ma nào lai vãng đến người trì chú này, thì con dùng cây bảo tử đánh nó nát như bụi, để cho người tu hành được như nguyện.</p>
    <h3 id="vi-ong-a-nan-hoi-phat-tu-hanh-phai-trai-qua-bao-nhieu-dia-vi-moi-duoc-thanh-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. ÔNG A NAN HỎI PHẬT TU HÀNH PHẢI TRẢI QUA BAO NHIÊU ĐỊA VỊ MỚI ĐƯỢC THÀNH PHẬT</h3>
    <p>A Nan đứng dậy lạy Phật và thưa rằng:</p>
    <p>Bạch Thế Tôn, người tu hành từ khi phát tâm cho đến thành Phật, phải trải qua bao nhiêu địa vị, và thứ lớp tu hành như thế nào? Xin Phật từ bi chỉ dạy cho kẻ mê muội này.</p>
    <p>Phật khen ông A Nan và dạy rằng:</p>
    <p>Ta sẽ vì ông và chúng sanh đời sau cầu quả Đại thừa, chỉ dạy con đường tu hành từ địa vị phàm phu, cho đến khi vào đại Niết Bàn, vậy các ông phải chăm chú nghe ta chỉ dạy:</p>
    <p>A Nan, các ông phải biết: Từ nơi chân tâm thanh tịnh, rời các danh tướng, không có thế giới và chúng sanh, vì vọng động nên có sanh, nhờ sanh có diệt; sanh diệt cũng đều là vọng, diệt hết vọng gọi là chân, thế gọi là Vô Thượng Bồ Đề và đại Niết Bàn là hai quả chuyển y của Như Lai vậy.</p>
    <h3 id="vii-phat-day-ba-mon-tiem-thu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. PHẬT DẠY BA MÓN TIỆM THỨ</h3>
    <p>A Nan, ông nay muốn tu hành để thành Phật, thì phải tuần tự y theo ba món tiệm thứ này, mới có thể diệt trừ được gốc rễ của loạn tưởng, cũng như người muốn súc sạch cái bình để đựng đồ quý, thì trước hết phải đổ độc ra, kế dùng tro chùi rửa, sau dùng nước nóng và chất thơm rửa lại thiệt sạch, rồi mới có thể đựng vị cam lồ được.</p>
    <p>Ba món tiệm thứ là:</p>
    <p>Trừ các trợ duyên bên ngoài: Ăn, không nên ăn những vật không hợp với người tu hành, như ăn thịt uống rượu và ngũ vị tân v.v... Ngũ vị tân, ăn sống thì nó tăng trưởng tánh nóng giận, ăn chín hay sanh tham dục, tụng kinh trì chú chẳng hiệu nghiệm, Thánh Thần không bảo hộ. Còn chỗ ở tu thì phải tìm chỗ nào cho hợp với hoàn cảnh của người tu hành.</p>
    <p>Trừ các chánh nhân bên trong: Cốt yếu là hành giả phải nghiêm trì tịnh giới, không dâm, sát, đạo và vọng, gìn giữ ngoài thân không phạm, trong tâm không động, thân và tâm đều thanh tịnh như băng tuyết.</p>
    <p>Trừ các nghiệp hiện tiền: Khi tiếp xúc với trần cảnh, không khởi vọng niệm phân biệt theo sáu trần, xoay các cảm giác trở về bản tâm thanh tịnh. Do ngoài không duyên theo trần cảnh, trong sáu căn không vọng động, đồng một thể thanh tịnh, nên mười phương thế giới đều được thanh tịnh sáng suốt; cũng như trong ngọc lưu ly có hàm chứa mặt trăng sáng. Hành giả lúc bấy giờ thân tâm thảnh thơi, chứng đặng vô sanh pháp nhẫn, mười phương chư Phật đều hiện trong tâm người ấy. Từ đây hành giả lần lần tăng tiến tu hành, tiến lên các quả Thánh.</p>
    <h3 id="viii-hanh-gia-phai-trai-qua-55-dia-vi-moi-den-qua-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII. HÀNH GIẢ PHẢI TRẢI QUA 55 ĐỊA VỊ MỚI ĐẾN QUẢ PHẬT</h3>
    <p>A Nan, người tu hành khi ái dục khô khan, sáu căn không còn chạy theo sáu trần nhiễm trước, lúc bấy giờ chỉ có trí huệ khô khan, chưa thấm nhuần nước pháp của Phật. Đây là địa vị đầu tiên tên Càn huệ địa (huệ khô), lần lần tấn tu vào địa vị Thập tín (mười món tin):</p>
    <p>Tín tâm trụ</p>
    <p>Niệm tâm trụ</p>
    <p>Tinh tấn tâm</p>
    <p>Huệ tâm trụ</p>
    <p>Định tâm trụ</p>
    <p>Bất thối tâm</p>
    <p>Hộ pháp tâm</p>
    <p>Hồi hướng tâm</p>
    <p>Giới tâm trụ</p>
    <p>Nguyện tâm trụ</p>
    <h4 id="man-dia-vi-thap-tin-den-thap-tru" class="text-lg font-semibold">MÃN ĐỊA VỊ THẬP TÍN ĐẾN THẬP TRỤ</h4>
    <p>Phát tâm trụ</p>
    <p>Trị địa trụ</p>
    <p>Tu hành trụ</p>
    <p>Sanh quý trụ</p>
    <p>Phương tiện cụ túc trụ</p>
    <p>Chánh tâm trụ</p>
    <p>Bất thối trụ</p>
    <p>Đồng chân trụ</p>
    <p>Pháp vương tử trụ</p>
    <p>Quán đảnh trụ</p>
    <h4 id="man-thap-tru-den-thap-hanh" class="text-lg font-semibold">MÃN THẬP TRỤ ĐẾN THẬP HẠNH</h4>
    <p>Hoan hỷ hạnh</p>
    <p>Nhiêu ích hạnh</p>
    <p>Vô sân hận hạnh</p>
    <p>Vô tận hạnh</p>
    <p>Ly si loạn hạnh</p>
    <p>Thiện hiện hạnh</p>
    <p>Vô trước hạnh</p>
    <p>Tôn trọng hạnh</p>
    <p>Thiện pháp hạnh</p>
    <p>Chân thật hạnh</p>
    <h4 id="man-thap-hanh-den-thap-hoi-huong" class="text-lg font-semibold">MÃN THẬP HẠNH ĐẾN THẬP HỒI HƯỚNG</h4>
    <p>Cứu độ nhất thế chúng sanh, ly chúng sanh tướng hồi hướng</p>
    <p>Bất hoại hồi hướng</p>
    <p>Đẳng nhất thế Phật hồi hướng</p>
    <p>Chí nhất thế xứ hồi hướng</p>
    <p>Vô tận công đức tạng hồi hướng</p>
    <p>Tùy thuận bình đẳng thiện căn hồi hướng</p>
    <p>Tùy thuận đẳng quán nhất thế chúng sanh hồi hướng</p>
    <p>Chân như tướng hồi hướng</p>
    <p>Vô phược giải thoát hồi hướng</p>
    <p>Pháp giới vô lượng hồi hướng</p>
    <h4 id="man-thap-hoi-huong-den-tu-gia-hanh" class="text-lg font-semibold">MÃN THẬP HỒI HƯỚNG ĐẾN TỨ GIA HẠNH</h4>
    <p>Noãn địa</p>
    <p>Đảnh địa</p>
    <p>Nhẫn địa</p>
    <p>Thế đệ nhất địa</p>
    <h4 id="man-tu-gia-hanh-den-thap-dia" class="text-lg font-semibold">MÃN TỨ GIA HẠNH ĐẾN THẬP ĐỊA</h4>
    <p>Hoan hỷ địa</p>
    <p>Ly cấu địa</p>
    <p>Phát quang địa</p>
    <p>Diệm huệ địa</p>
    <p>Nan thắng địa</p>
    <p>Hiện tiền địa</p>
    <p>Viễn hành địa</p>
    <p>Bất động địa</p>
    <p>Thiện huệ địa</p>
    <p>Pháp vân địa</p>
    <p>(Khi mãn Thập địa đến địa vị Đẳng giác, qua Đẳng giác đến Diệu giác tức là Phật. Trừ địa vị Càn huệ ra, thì từ địa vị Thập tín, Thập trụ, Thập hạnh, Thập hồi hướng, Tứ gia hạnh, Thập địa và Đẳng giác, nghĩa là phải trải qua 55 địa vị này mới được quả Phật.</p>
    <p>Song trong khi trải qua 55 địa vị này, phải gặp 50 món ma là những điều nguy hiểm nhất trên đường tu hành).</p>
    <h3 id="ix-50-mon-ma-chuong-ngu-am-ma" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX. 50 MÓN MA CHƯỚNG (NGŨ ẤM MA)</h3>
    <p>Thuyết pháp gần xong, Đức Như Lai đứng dậy, tay vịn ghế thất bửu, kêu Ngài A Nan và đại chúng dạy thêm rằng:</p>
    <p>Các ông chưa rõ trên đường tu hành, còn gặp nhiều cảnh ma rất là nguy hiểm. Nếu các ông không biết trước, sanh tâm tà kiến thì đọa vào ác đạo, cũng như người nhận lầm giặc làm con, thì bị hại chẳng ít. Vậy các ông phải chăm chú nghe, Ta sẽ chín chắn chỉ dạy cho.</p>
    <p>Này A Nan, tất cả chúng sanh cùng với mười phương chư Phật, đồng một thể chân tâm thanh tịnh không hai. Bởi các ông bị vô minh vọng tưởng, nên sanh ra mười phương hư không và thế giới nhiều như vi trần, nhưng mười phương hư không và hằng sa thế giới đó đều sanh ở trong chân tâm của các ông, chẳng khác nào một đám mây nhỏ sanh trong trời xanh. Nếu người ngộ được chân tâm rồi thì mười phương hư không và thế giới đều tiêu hết.</p>
    <p>Bởi các loài ma kia thấy người tu hành sanh tâm lo sợ cho bà con quyến thuộc của chúng sẽ tiêu diệt, nên chúng dùng đủ thần lực đến nhiễu hại người tu. Chúng nó cũng đủ năm phép thần thông biến hóa chỉ chưa được lậu tận thông.</p>
    <p>Mặc dầu chúng đủ năm phép thần thông và sức mạnh, song vẫn còn ở trong vòng trần lao; nếu các ông trong khi tu thiền tâm được thanh tịnh sáng suốt, không vọng động, thì chúng ma kia không làm sao hại được. Cũng như dao chặt xuống nước, gió thổi ánh sáng, hoàn toàn không dính líu gì. Chúng ma kia phải lần lần tiêu diệt như băng bị nước nóng chế vào và tối tăm bị ánh sáng phá trừ; chỉ lo một điều là các ông cũng như chủ nhà, nếu chủ nhà mê muội rồi thì các ma chướng kia như khách dễ bề nhiễu hại, rồi các ông trở làm con cái của ma, sau thành người ma.</p>
    <p>Ma Đăng Già là thứ ma yếu hèn, nó chỉ làm ông phá một giới trong tám muôn giới mà thôi, nhờ tâm ông thanh tịnh nên chẳng bị trầm luân. Còn các chúng ma này rất là nguy hiểm, nó phá tan giới thân huệ mạng làm cho ông nhiều kiếp luân hồi. Chẳng khác nào như ông quan lớn bị cách chức, gia tài sự sản bị tịch thâu, trở thành một người dân trắng, không thể cầu cứu với ai được.</p>
    <h3 id="x-muoi-mon-ma-ve-sac-am" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">X. MƯỜI MÓN MA VỀ SẮC ẤM</h3>
    <h4 id="1-than-the-khong-biet-chuong-ngai" class="text-lg font-semibold">1. THÂN THỂ KHÔNG BIẾT CHƯỚNG NGẠI</h4>
    <p>Này A Nan, người trong khi tu thiền do sức dụng công, nên tâm tánh được nhiệm mầu sáng suốt, tự thấy thân thể mình trong giây phút qua lại tự tại, không bị cái gì làm chướng ngại. Vì công dụng tu luyện, nên tạm hiện ra các việc như vậy, không phải là chứng Thánh; nếu sanh tâm nghĩ mình chứng Thánh, thì bị ma cám dỗ.</p>
    <h4 id="2-luom-bo-trung-doc-trong-than" class="text-lg font-semibold">2. LƯỢM BỎ TRÙNG ĐỘC TRONG THÂN</h4>
    <p>A Nan, hành giả trong lúc dụng công tu thiền, thoạt thấy thân thể mình trong suốt, các loài trùng độc, sên bò qua lại, rồi lượm bỏ ra ngoài mà thân không đau đớn. Vì dụng công tu luyện nên tạm hiện ra cảnh như vậy, không phải chứng Thánh. Nếu nghĩ mình chứng Thánh thì bị ma nó cám dỗ.</p>
    <h4 id="3-nghe-trong-hu-khong-co-tieng-noi-phap" class="text-lg font-semibold">3. NGHE TRONG HƯ KHÔNG CÓ TIẾNG NÓI PHÁP</h4>
    <p>Hành giả trong lúc tu thiền, nghe trong hư không có tiếng thuyết pháp, hoặc nghe Thánh, Hiền, Tiên, Phật trong mười phương thế giới đều nói ra nghĩa lý nhiệm mầu. Đây vì hành giả dụng công tu luyện nên tự tâm biến hiện ra cảnh giới như vậy, không phải chứng Thánh, nếu nghĩ mình chứng Thánh, thì bị ma ám ảnh.</p>
    <h4 id="4-thay-phat-hien-va-hoa-sen-no" class="text-lg font-semibold">4. THẤY PHẬT HIỆN VÀ HOA SEN NỞ</h4>
    <p>Người tu thiền định, khi tâm thanh tịnh rồi, tự phát ra ánh sáng. Lúc bấy giờ thấy mười phương đều hiện ra sắc vàng, tất cả các vật loại hóa thành Phật cả. Lại thấy Đức Phật Tỳ Lô Giá Na ngồi trên đài thiên quang, các Đức Phật ngồi xung quanh và có vô số hoa sen đồng thời xuất hiện. Đây do hành giả dụng công tu thiền, nên thấy có cảnh tạm hiện ra như vậy, không phải là chứng Thánh; nếu nghĩ mình chứng Thánh, thì bị ma cám dỗ.</p>
    <h4 id="5-thay-cac-vat-bau-day-ca-hu-khong" class="text-lg font-semibold">5. THẤY CÁC VẬT BÁU ĐẦY CẢ HƯ KHÔNG</h4>
    <p>Người trong khi tu thiền thấy mười phương hư không đều thành bảy báu, nào màu xanh, sắc vàng, đỏ, trắng, hiện ra vô số, mà chẳng chướng ngại nhau. Đây do trong lúc tu thiền, vì hành giả dụng công đè nén vọng niệm thái quá, nên nó biến hiện ra cảnh như vậy, không phải chứng Thánh; nếu nghĩ mình chứng Thánh, thì bị ma cám dỗ.</p>
    <h4 id="6-thay-ban-dem-nhu-ban-ngay" class="text-lg font-semibold">6. THẤY BAN ĐÊM NHƯ BAN NGÀY</h4>
    <p>Người tu thiền định, do tâm yên tịnh nên phát ra ánh sáng. Lúc bấy giờ mặc dù nửa đêm, ở trong nhà tối mà vẫn thấy rõ hết cả mọi vật, không khác chi ban ngày. Vì hành giả dụng công tu luyện nên tạm hiện ra cảnh như vậy, không phải chứng Thánh; nếu cho mình chứng Thánh, thì bị ma cám dỗ.</p>
    <h4 id="7-than-the-khong-biet-dau" class="text-lg font-semibold">7. THÂN THỂ KHÔNG BIẾT ĐAU</h4>
    <p>Người tu thiền đến khi tâm tánh được rỗng không, thì thân thể chẳng biết đau. Lúc bấy giờ lửa đốt không cháy, dao chặt không đau. Đây do sức dụng tâm tu luyện của hành giả nên tạm được như vậy, không phải chứng Thánh; nếu cho mình chứng Thánh, thì bị ma cám dỗ.</p>
    <h4 id="8-thay-canh-gioi-phat-hien-khap-noi" class="text-lg font-semibold">8. THẤY CẢNH GIỚI PHẬT HIỆN KHẮP NƠI</h4>
    <p>Người tu thiền định do dụng công cùng tột, nên thấy mười phương núi sông toàn cả thế giới đều biến thành cõi Phật, đủ cả bảy món báu chiếu sáng khắp giáp. Lại thấy hằng sa chư Phật ở trong cung điện tốt đẹp hiện đầy cả hư không. Trông lên trên thì thấy các cung trời, xem trở xuống lại thấy hết các cõi địa ngục đều không có chướng ngại. Đây do lúc tu thiền, vì hành giả ngưng vọng tưởng lâu ngày, nên nó hóa hiện như vậy, không phải chứng Thánh; nếu cho mình chứng Thánh, thì bị đọa vào đường tà.</p>
    <h4 id="9-ban-dem-thay-nghe-duoc-phuong-xa" class="text-lg font-semibold">9. BAN ĐÊM THẤY, NGHE ĐƯỢC PHƯƠNG XA</h4>
    <p>Trong khi tu thiền, do tâm tham cứu sâu xa, nên trong lúc giữa đêm thấy được nào là chợ búa, đường sá, bà con họ hàng ở các phương xa, hoặc nghe được tiếng nói. Đây do hành giả kiềm thúc cái vọng tâm thái quá, nên tạm hiện ra như vậy, không phải chứng Thánh; nếu cho mình chứng Thánh, thì bị đọa vào đường tà.</p>
    <h4 id="10-than-hinh-bien-hoa-noi-phap-thong-suot" class="text-lg font-semibold">10. THÂN HÌNH BIẾN HÓA, NÓI PHÁP THÔNG SUỐT</h4>
    <p>Trong khi tu thiền, do hành giả dụng tâm tham cứu cùng tột, nên thấy có các vị Thiện tri thức, chỉ trong giây phút mà thân mình biến hóa nhiều cách. Đây do trong khi tu thiền vì hành giả sanh tâm chấp trước, nên bị ma ám ảnh, làm cho người này thông suốt nghĩa mầu, nói pháp vô ngại, không phải chứng Thánh; nếu chẳng chấp trước thì cảnh ma này lần lần tiêu; còn cho mình chứng Thánh thì bị đọa vào cảnh ma.</p>
    <h4 id="tom-lai" class="text-lg font-semibold">TÓM LẠI</h4>
    <p>Này A Nan! Mười cảnh ma này, đều do trong lúc tu thiền, hành giả dụng tâm phá trừ sắc ấm, nên nó biến hiện ra các cảnh như vậy. Nếu khi gặp những cảnh ấy, mê lầm không biết, cho mình đã chứng Thánh thì bị ma nó ám ảnh, rồi sanh đại vọng ngữ, nói mình thành đạo chứng quả v.v... sau khi chết rồi đọa vào địa ngục Vô Gián. Vậy khi ta nhập diệt rồi, các ông nên y lời ta dạy, đem những việc ma này giảng dạy cho người tu hành đời sau, bảo hộ người tu hành đặng đạo quả, chớ để cho họ bị thiên ma nhiễu hại.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong bài giảng, Phật dạy người tu hành phải gìn giữ bốn điều luật nghi cần yếu nào để tâm không khởi vọng niệm?",
    options: {
      a: "Hỷ, nộ, ái, ố",
      b: "Tham, sân, si, mạn",
      c: "Sát, đạo, dâm, tửu",
      d: "Dâm, sát, đạo, vọng"
    },
    answer: "d",
    explanation: {
      a: "Sai. Phật không dạy giữ những cảm xúc này để trừ vọng niệm [1].",
      b: "Sai. Đây là các phiền não căn bản, không phải bốn điều luật nghi [1].",
      c: "Sai. Thiếu giới vọng ngữ và dư giới uống rượu [1].",
      d: "Đúng. Người tu hành phải gìn giữ bốn điều luật nghi cần yếu: dâm, sát, đạo, vọng cho trong sạch để tâm không khởi vọng niệm [1]."
    }
  },
  {
    question: "Nhờ thần chú Lăng Nghiêm, nàng Ma Đăng Già từ một dâm nữ đã chứng được quả vị nào?",
    options: {
      a: "A La Hán",
      b: "Tu Đà Hoàn",
      c: "Phật",
      d: "Bồ Tát"
    },
    answer: "a",
    explanation: {
      a: "Đúng. Nhờ thần chú Lăng Nghiêm mà nàng Ma Đăng Già nguồn tình khô cạn và được thành A La Hán [1].",
      b: "Sai. Nàng không dừng lại ở quả Tu Đà Hoàn [1].",
      c: "Sai. Nàng chưa chứng quả Phật [1].",
      d: "Sai. Nàng chứng quả Thánh của bậc Thanh Văn là A La Hán [1]."
    }
  },
  {
    question: "Phương pháp 'Bất tùy phân biệt' trong lược giải có nghĩa là gì?",
    options: {
      a: "Không phân biệt giàu nghèo khi cứu độ",
      b: "Tránh né mọi tiếp xúc với thế giới bên ngoài",
      c: "Xoay các tri giác trở về chân tâm, không duyên theo trần cảnh",
      d: "Ghi nhớ tất cả các pháp học được từ Phật"
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây không phải là ý nghĩa của việc tu tâm này [1].",
      b: "Sai. Không phải là tránh né tiếp xúc, mà là đối cảnh không khởi vọng tâm [1].",
      c: "Đúng. Bất tùy phân biệt là xoay các tri giác trở về chân tâm, không duyên theo trần cảnh thì vọng niệm không sanh [1].",
      d: "Sai. Đây là học rộng nghe nhiều, không phải pháp bất tùy phân biệt [1]."
    }
  },
  {
    question: "Vì sao ông A Nan tuy thông suốt kinh điển nhưng lại bị tà thuật của Phạm Thiên bắt?",
    options: {
      a: "Vì tà thuật của Phạm Thiên mạnh hơn Phật pháp",
      b: "Vì thần chú Lăng Nghiêm chưa được Phật nói ra",
      c: "Vì ông ỷ lại lòng thương của Phật và chỉ lo học rộng nghe nhiều, chẳng chuyên tu tập",
      d: "Vì ông không có trí tuệ"
    },
    answer: "c",
    explanation: {
      a: "Sai. Phật pháp luôn tối thượng có thể diệt tà thuật [2].",
      b: "Sai. Đây không phải là nguyên nhân tự nội tâm của ông [2].",
      c: "Đúng. Do ỷ lại lòng thương của Phật, chỉ lo học rộng nghe nhiều, chẳng chuyên tu tập nên năng lực không được tự do [2].",
      d: "Sai. Ông có trí tuệ thông suốt kinh điển nhưng thiếu chuyên tu [2]."
    }
  },
  {
    question: "Phật phóng hào quang từ đâu để nói thần chú Lăng Nghiêm?",
    options: {
      a: "Từ nơi nhục kế (đảnh)",
      b: "Từ giữa hai chân mày (lông trắng)",
      c: "Từ lòng bàn tay",
      d: "Từ toàn thân"
    },
    answer: "a",
    explanation: {
      a: "Đúng. Từ nơi nhục kế (đảnh) của Phật, phóng ra hào quang trăm báu để nói thần chú [3].",
      b: "Sai. Phật không phóng quang từ chân mày trong lúc nói chú này [3].",
      c: "Sai. Kinh không ghi nhận việc phóng quang từ lòng bàn tay [3].",
      d: "Sai. Hào quang phát ra từ trên đảnh đầu [3]."
    }
  },
  {
    question: "Theo lời Phật dạy, 'Ngũ vị tân' nếu ăn chín sẽ gây ra tác hại gì cho người tu hành?",
    options: {
      a: "Làm hay sanh tham dục",
      b: "Làm tăng trưởng tánh nóng giận",
      c: "Làm cho thân thể hôi hám",
      d: "Làm cho trí tuệ bị mờ mịt"
    },
    answer: "a",
    explanation: {
      a: "Đúng. Ngũ vị tân ăn chín thì hay sanh tham dục [4].",
      b: "Sai. Ăn sống mới làm tăng trưởng tánh nóng giận [4].",
      c: "Sai. Đây không phải là tác hại được Phật nhấn mạnh [4].",
      d: "Sai. Việc làm trí tuệ mờ mịt không được đề cập trực tiếp ở đoạn này [4]."
    }
  },
  {
    question: "Trong ba món tiệm thứ, việc 'nghiêm trì tịnh giới, không dâm, sát, đạo, vọng' thuộc về bước nào?",
    options: {
      a: "Trừ các chánh nhân bên trong",
      b: "Đạt đến Càn huệ địa",
      c: "Trừ các trợ duyên bên ngoài",
      d: "Trừ các nghiệp hiện tiền"
    },
    answer: "a",
    explanation: {
      a: "Đúng. Trừ các chánh nhân bên trong cốt yếu là phải nghiêm trì tịnh giới, không dâm, sát, đạo, vọng [4].",
      b: "Sai. Càn huệ địa là địa vị đầu tiên sau khi tu ba tiệm thứ [5].",
      c: "Sai. Trợ duyên bên ngoài là kiêng ăn thịt, ngũ vị tân và chọn chỗ ở thanh tịnh [4].",
      d: "Sai. Trừ nghiệp hiện tiền là xoay cảm giác về bản tâm thanh tịnh khi tiếp xúc trần cảnh [4]."
    }
  },
  {
    question: "Hành giả phải trải qua tổng cộng bao nhiêu địa vị để đạt đến quả vị Phật?",
    options: {
      a: "10 địa vị",
      b: "55 địa vị",
      c: "50 địa vị",
      d: "42 địa vị"
    },
    answer: "b",
    explanation: {
      a: "Sai. Mười địa vị chỉ là một phần nhỏ trong toàn bộ tiến trình [5].",
      b: "Đúng. Hành giả phải trải qua 55 địa vị mới đến quả Phật [5].",
      c: "Sai. 50 là số món ma chướng gặp phải trên đường tu, không phải số địa vị [5, 6].",
      d: "Sai. Con số này không chính xác theo kinh văn [5]."
    }
  },
  {
    question: "Phật ví mười phương hư không và thế giới sanh ra trong chân tâm giống như điều gì?",
    options: {
      a: "Như một đám mây nhỏ sanh trong trời xanh",
      b: "Như bọt biển trong đại dương",
      c: "Như ánh sáng mặt trời soi thấu bóng tối",
      d: "Như hạt bụi trong gió"
    },
    answer: "a",
    explanation: {
      a: "Đúng. Mười phương hư không và thế giới sanh ở trong chân tâm chẳng khác nào một đám mây nhỏ sanh trong trời xanh [6].",
      b: "Sai. Hình ảnh bọt biển không được sử dụng ở đoạn kinh này [6].",
      c: "Sai. Đây không phải là ví dụ Phật dùng để chỉ sự sanh ra của thế giới [6].",
      d: "Sai. Hạt vi trần chỉ được dùng để ví dụ cho số lượng vô số của thế giới [6]."
    }
  },
  {
    question: "Tại sao các loài ma lại muốn nhiễu hại người tu hành?",
    options: {
      a: "Vì chúng không muốn có thêm người thành Phật",
      b: "Vì chúng muốn chiếm đoạt công đức của người tu",
      c: "Vì chúng ghen tị với thần thông của người tu",
      d: "Vì chúng lo sợ bà con quyến thuộc của chúng sẽ tiêu diệt khi người tu ngộ được chân tâm"
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây không phải lý do được đề cập trực tiếp [6].",
      b: "Sai. Ma không nhắm vào việc chiếm đoạt công đức [6].",
      c: "Sai. Ma cũng có đủ năm phép thần thông biến hóa [6].",
      d: "Đúng. Các loài ma thấy người tu hành sanh tâm lo sợ cho bà con quyến thuộc của chúng sẽ tiêu diệt nên mới đến nhiễu hại [6]."
    }
  },
  {
    question: "Trong các món ma về sắc ấm, hiện tượng 'thấy ban đêm ở trong nhà tối mà vẫn rõ hết mọi vật' là do nguyên nhân gì?",
    options: {
      a: "Do tâm yên tịnh nên phát ra ánh sáng tạm thời",
      b: "Do sắc ấm đã hoàn toàn tiêu vĩnh viễn",
      c: "Do hành giả đã chứng được thiên nhãn thông",
      d: "Do ma vương ban cho khả năng nhìn xuyên thấu"
    },
    answer: "a",
    explanation: {
      a: "Đúng. Người tu thiền định, do tâm yên tịnh nên phát ra ánh sáng, thấy rõ mọi vật ban đêm, chỉ là cảnh tạm hiện [7].",
      b: "Sai. Sắc ấm lúc này chưa bị phá trừ hoàn toàn [7, 8].",
      c: "Sai. Kinh khẳng định hiện tượng này không phải là chứng Thánh hay đắc thông [7].",
      d: "Sai. Đây là do dụng công tu luyện tự hiện, không phải do ma ban khả năng [7]."
    }
  },
  {
    question: "Điều nguy hiểm nhất mà hành giả gặp phải khi thấy các cảnh giới ma là gì?",
    options: {
      a: "Quên mất các bài chú đã học",
      b: "Bị các loài ác thú tấn công",
      c: "Bị mất hết các phép thần thông",
      d: "Sanh tâm nghĩ mình đã chứng Thánh và nói lời đại vọng ngữ"
    },
    answer: "d",
    explanation: {
      a: "Sai. Kinh không đề cập đến việc quên mất chú [8].",
      b: "Sai. Ác thú không phải là mối nguy hiểm trong 50 món ma [8].",
      c: "Sai. Hành giả chưa chắc đã có thần thông để mất [8].",
      d: "Đúng. Nguy hiểm nhất là mê lầm cho mình đã chứng Thánh, sanh đại vọng ngữ rồi đọa vào địa ngục Vô Gián [8]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-14-phat-day-tri-chu-lang-nghiem',
  slug: 'bai-thu-14-phat-day-tri-chu-lang-nghiem',
  title: 'Bài Thứ 14 - Phật dạy trì chú Lăng Nghiêm',
  type: 'article',
  status: 'published',
  order: 15,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-08',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-14-phat-day-tri-chu-lang-nghiem/B%C3%AD_y%E1%BA%BFu_tu_L%C4%83ng_Nghi%C3%AAm.png',
      readingContent,
      tableOfContents: [
        { id: 'i-phat-day-tri-chu-lang-nghiem', label: 'I. PHẬT DẠY TRÌ CHÚ LĂNG NGHIÊM' },
        { id: 'luoc-giai-1', label: 'Lược giải', indent: 1 },
        { id: 'ii-a-nan-cau-phat-noi-lai-than-chu', label: 'II. A NAN CẦU PHẬT NÓI LAI THẦN CHÚ' },
        { id: 'iii-phat-phong-hao-quang-noi-than-chu', label: 'III. PHẬT PHÓNG HÀO QUANG NÓI THẦN CHÚ' },
        { id: 'de-nhat', label: '(ĐỆ NHẤT)', indent: 1 },
        { id: 'de-nhi', label: '(ĐỆ NHỊ)', indent: 1 },
        { id: 'de-tam', label: '(ĐỆ TAM)', indent: 1 },
        { id: 'de-tu', label: '(ĐỆ TỨ)', indent: 1 },
        { id: 'de-ngu', label: '(ĐỆ NGŨ)', indent: 1 },
        { id: 'luoc-giai-2', label: 'Lược giải', indent: 1 },
        { id: 'iv-cong-nang-cua-than-chu', label: 'IV. CÔNG NĂNG CỦA THẦN CHÚ' },
        { id: 'v-cac-vi-thien-than-phat-nguyen-bao-ho-nguoi-tri-chu', label: 'V. CÁC VỊ THIÊN THẦN PHÁT NGUYỆN BẢO HỘ NGƯỜI TRÌ CHÚ' },
        { id: 'vi-ong-a-nan-hoi-phat-tu-hanh-phai-trai-qua-bao-nhieu-dia-vi-moi-duoc-thanh-phat', label: 'VI. ÔNG A NAN HỎI PHẬT TU HÀNH PHẢI TRẢI QUA BAO NHIÊU ĐỊA VỊ MỚI ĐƯỢC THÀNH PHẬT' },
        { id: 'vii-phat-day-ba-mon-tiem-thu', label: 'VII. PHẬT DẠY BA MÓN TIỆM THỨ' },
        { id: 'viii-hanh-gia-phai-trai-qua-55-dia-vi-moi-den-qua-phat', label: 'VIII. HÀNH GIẢ PHẢI TRẢI QUA 55 ĐỊA VỊ MỚI ĐẾN QUẢ PHẬT' },
        { id: 'man-dia-vi-thap-tin-den-thap-tru', label: 'MÃN ĐỊA VỊ THẬP TÍN ĐẾN THẬP TRỤ', indent: 1 },
        { id: 'man-thap-tru-den-thap-hanh', label: 'MÃN THẬP TRỤ ĐẾN THẬP HẠNH', indent: 1 },
        { id: 'man-thap-hanh-den-thap-hoi-huong', label: 'MÃN THẬP HẠNH ĐẾN THẬP HỒI HƯỚNG', indent: 1 },
        { id: 'man-thap-hoi-huong-den-tu-gia-hanh', label: 'MÃN THẬP HỒI HƯỚNG ĐẾN TỨ GIA HẠNH', indent: 1 },
        { id: 'man-tu-gia-hanh-den-thap-dia', label: 'MÃN TỨ GIA HẠNH ĐẾN THẬP ĐỊA', indent: 1 },
        { id: 'ix-50-mon-ma-chuong-ngu-am-ma', label: 'IX. 50 MÓN MA CHƯỚNG (NGŨ ẤM MA)' },
        { id: 'x-muoi-mon-ma-ve-sac-am', label: 'X. MƯỜI MÓN MA VỀ SẮC ẤM' },
        { id: '1-than-the-khong-biet-chuong-ngai', label: '1. THÂN THỂ KHÔNG BIẾT CHƯỚNG NGẠI', indent: 1 },
        { id: '2-luom-bo-trung-doc-trong-than', label: '2. LƯỢM BỎ TRÙNG ĐỘC TRONG THÂN', indent: 1 },
        { id: '3-nghe-trong-hu-khong-co-tieng-noi-phap', label: '3. NGHE TRONG HƯ KHÔNG CÓ TIẾNG NÓI PHÁP', indent: 1 },
        { id: '4-thay-phat-hien-va-hoa-sen-no', label: '4. THẤY PHẬT HIỆN VÀ HOA SEN NỞ', indent: 1 },
        { id: '5-thay-cac-vat-bau-day-ca-hu-khong', label: '5. THẤY CÁC VẬT BÁU ĐẦY CẢ HƯ KHÔNG', indent: 1 },
        { id: '6-thay-ban-dem-nhu-ban-ngay', label: '6. THẤY BAN ĐÊM NHƯ BAN NGÀY', indent: 1 },
        { id: '7-than-the-khong-biet-dau', label: '7. THÂN THỂ KHÔNG BIẾT ĐAU', indent: 1 },
        { id: '8-thay-canh-gioi-phat-hien-khap-noi', label: '8. THẤY CẢNH GIỚI PHẬT HIỆN KHẮP NƠI', indent: 1 },
        { id: '9-ban-dem-thay-nghe-duoc-phuong-xa', label: '9. BAN ĐÊM THẤY, NGHE ĐƯỢC PHƯƠNG XA', indent: 1 },
        { id: '10-than-hinh-bien-hoa-noi-phap-thong-suot', label: '10. THÂN HÌNH BIẾN HÓA, NÓI PHÁP THÔNG SUỐT', indent: 1 },
        { id: 'tom-lai', label: 'Tóm lại', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-14-phat-day-tri-chu-lang-nghiem/Shurangama_Path_and_Pitfalls.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/kIIY2OGptaQ',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/68PgsDs8SyUTPpzTKs0dyt?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phật dạy trì chú Lăng Nghiêm',
    passPercentage: 70,
    questions,
  },
}

export default lesson
