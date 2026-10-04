import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div class="mb-8">
      <h2 id="canh-gioi-cuc-lac" class="mt-0 mb-2 text-3xl font-bold text-primary-700 dark:text-primary-300">2.3. Cảnh giới Cực Lạc</h2>
    </div>

    <div class="mb-8">
      <h3 id="chanh-van-1" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chánh văn:</h3>
    <p>Bấy giờ đức Phật bảo Trưởng lão Xá-Lợi-Phất rằng: "Từ đây qua phương Tây quá mười muôn ức cõi Phật, có thế giới tên là Cực Lạc, trong thế giới đó có đức Phật hiệu là A Di Đà hiện nay đương nói pháp."</p>

    <h3 id="giai-thich-tu-ngu-1" class="mt-8 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Giải thích từ ngữ:</h3>
    <p>Bấy giờ: Là lúc đức Phật nói kinh này.</p>
    <p>Trưởng lão Xá Lợi Phất: Như trên đã giải là vị đạo cao đức trọng, có trí tuệ đệ nhất trong hàng Tỳ-kheo; nên cũng gọi ngài là Đại trí Xá Lợi Phất.</p>
    <p>Tùng thị: Là từ nơi tâm thức, chứ không phải không gian bên ngoài.</p>
    <p>Phương Tây: Phương mặt trời lặn, đức Phật lấy phương mặt trời lặn để chỉ cho đi vào đêm trường tịch tịnh, hay chính là nghệ thuật thanh tịnh hóa tâm hồn (niệm danh tự tánh).</p>
    <p>Tùng thị là từ nơi vọng tâm, Tây phương dụ cho tâm tịnh, chứ không nên hiểu là không gian bên ngoài; nên cổ đức dạy: “Chớ bảo Tây phương xa, Tây phương trước mắt mình, nước xuôi về biển lớn, trăng lặn chẳng lìa trời”. (1)</p>
    <p>Quá thập: Là vượt qua mười, dụ cho mười vọng tưởng căn bản phiền não hay mười kiết sử trong tâm. Từ mười vọng tưởng căn bản này phát sinh vạn ức vô cùng tận; nên ở phẩm Phổ Môn kinh Pháp Hoa đức Phật dụ cho Vô Tận Ý. Mười kiết sử là: Tham, sân, si, mạn, nghi, thân kiến, biên kiến, tà kiến, kiến thủ kiến và giới cấm thủ.</p>
    <p>Phật độ: Là cõi Phật, dụ cho cõi chân tâm thanh tịnh.</p>
    <p>Thế giới Cực Lạc: Là thế giới có niềm an lạc tuyệt đối (chân lạc), thế giới của tự tánh Niết-bàn, nên nói: chân thường, chân lạc, chân ngã, chân tịnh.</p>
    <p>Kim hiện tại thuyết pháp: Kim là nay, hiện tại là bây giờ; thời gian là bây giờ, không gian là ở đây; tức dụ cho thực tại tuệ giác. Vì thực tại tuệ giác nên không một pháp có thể nói ra, vì nói ra là vọng; bởi lý nhất tâm bất loạn vậy.</p>

    <h3 id="luoc-giai-1" class="mt-10 mb-4 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Lược giải:</h3>
    <p>Mở đầu kinh văn, đức Phật gọi Ngài Xá Lợi Phất là bậc trí tuệ số một trong hàng Tỳ-kheo để giới thiệu về thế giới Cực Lạc của đức Phật A Di Đà; và nói về thời gian và không gian để đến đó. Thời gian để đến đó thì phải vượt qua mười (quá thập), tức dụ cho vượt qua mười căn bản phiền não ở trong tâm. Vì vậy cho nên, Tổ Huệ Năng nói là “Luận về tướng mà nói, thì số dặm có mười vạn tám ngàn, tức chỉ cho trong tâm có mười ác và tám tà, nên nói xa vậy” (2). Từ mười vọng tưởng căn bản, và tám thức tâm vương lệch ra bên ngoài, phát sinh vạn ức không thể tính đếm hết vọng tâm tư lự. Nay đức Phật Thích Ca dẫn hóa hàng Thanh Văn hướng đến niệm danh tự tánh Di Đà, làm cho nhất tâm bất loạn để đạt thành Phật quả. Như vậy, thời gian để đến cảnh giới Cực Lạc là vô hạn định, bởi do căn cơ của từng hành giả cao hay thấp, miên mật hành trì hay biếng nhác mà có mau chậm. Vì vậy cho nên, Tổ Huệ Năng nói: “Nói xa là vì kẻ hạ căn, nói gần là chỉ cho người thượng trí”. Bậc thượng trí mỗi khi nhận ra tự tánh bất sinh bất diệt, thì tức thời một quyết là đi vào đại định; còn chúng ta tu bao nhiêu năm mà vẫn chưa định một chút nào cả, nên rất xa thật xa, đi mãi cũng không thấy đến.</p>
    <p>Thế giới Cực Lạc là thế giới có niềm an lạc tuyệt đối, tức chỉ cho thế giới của chân tâm, mà chân tâm thì ai cũng có, nên nói không xa không gần. Bởi bậc thượng căn thượng trí, chỉ cần niệm lấy tự tánh Di Đà trong thời gian khảy móng tay là đã chứng bậc vô sinh.</p>
    <p>Còn hàng hạ căn hạ cơ, tu bao lâu tâm cũng khó định, nên nói rất xa. Như vậy, thế giới Cực Lạc là thế giới chân tâm, và thời gian để đi đến đó hay chứng nhập chân tâm, cũng là do dụng tâm đắc lực hay biếng nhác mà có mau chậm; chứ không phải thời gian và không gian vật lý; không phải là Thiên quốc (heaven) như niềm tin của các tôn giáo nhất thần. Nếu cõi Cực Lạc của đức Phật A Di Đà là cõi không gian vật lý, thì vẫn bị lý tính vô thường và vô ngã chi phối, tức còn khổ đau, thì không thể gọi là Cực Lạc được. Vì vậy, A Di Đà như trên đã giải là dịch âm từ tiếng Phạn अमिताभ, amitābha và amitāyus. Amitābha dịch nghĩa là "vô lượng quang" (ánh sáng vô lượng); amitāyus có nghĩa là "vô lượng thọ" (thọ mạng vô lượng), chỉ cho tự tánh Di Đà mà ai cũng có (3). Vì vậy cho nên, trong kinh Duy-ma-cật, đức Phật Thích Ca dạy: “Muốn được cõi tịnh thì phải tịnh tâm mình, tùy tâm mình tịnh thì cõi Tịnh độ tự hiện ra”. Phương Tây là phương mặt trời lặn, dụ cho đêm trường thanh tịnh, nên hướng đến phương Tây chính là thanh tịnh hóa tâm hồn, chứ không phải phương hướng của không gian bên ngoài.</p>
    <p>Trong luận Khởi Tín, Ngài Mã Minh dạy: “Chân tâm vốn ly niệm, nếu khởi niệm lên để niệm Phật, đâu khỏi tự làm khuấy rối lại tâm mình ư?”.</p>
    <p>Trong Phật Tạng Kinh nói: “Không cảm giác, không quán niệm gọi là Niệm Phật. Không nghĩ tưởng, không nói năng gọi là niệm Phật”.</p>
    <p>Đại sư Châu Hoằng ở Trung Hoa nói: “Khởi niệm để niệm Phật, đâu không trở lại trái với tâm Phật ư? Nay đây bảo rằng: Bặt các vọng niệm là thật tướng niệm Phật, lý ấy rất đúng. Song tâm tuy ly niệm, nhưng mà đã bị vô minh nhiễm ô tâm thể, vọng niệm nối chuyền như chứng bệnh nhiều năm, dân loạn lâu ngày nên gọi tập quán (thói quen). Nay muốn gắng gượng dằn ép khiến cho nó lập tức yên tịnh thì ra dứt động về tịnh, càng dứt càng động. Dầu thô niệm tạm ngừng, nhưng tế niệm vẫn còn tích tắc. Thế mà nhận cho là phải, đâu chẳng lầm lắm ư?”.</p>
    <p>Như vậy, trì niệm danh tự “A Di Đà Phật”, có được vãng sinh không? Đó là tâm vốn vọng, lại tập thêm vọng, nó chỉ có tác dụng là gom đa niệm về nhất niệm mà thôi, không thể vượt qua khỏi sinh tử, nên không thể vãng sinh.</p>
    <p>“Kim hiện tại thuyết pháp” là biểu trưng cho thực tại tuệ giác; bởi thời gian là bây giờ và không gian là ở đây. Vì thực tại tuệ giác, nên không một pháp có thể nói ra; bởi nơi tánh giác không vọng lập ngữ ngôn, xa lìa mọi ảnh tượng trong tâm. Vì vậy cho nên, trong Luận Khởi Tín, ngài Mã Minh nói: “Hết thảy các pháp từ trong bản chất của nó vốn xa lìa mọi tướng danh tự, xa lìa mọi tướng nói năng, xa lìa mọi tướng tâm duyên lự, rốt ráo bình đẳng, không có biến đổi, không thể phá hoại, chỉ là nhất tâm, nên gọi chân như”.</p>
    <p>Như vậy, “nhất tâm” đồng nghĩa với “chân như”, mà tạm gọi là thuyết pháp vậy thôi. Kinh A Di Đà là đốn giáo, thuộc Bồ-tát tạng cho nên người niệm và đối tượng niệm vốn không tịch, mới đạt đến nhất tâm. Nếu nơi tự tánh Di Đà mà có pháp vọng sanh ra thì không thể nhất tâm được. Vì vậy, pháp trì danh niệm Phật, quán tượng niệm Phật và quán tưởng niệm Phật là pháp an lập ý của Nhị thừa; không phải là pháp niệm Phật tam-muội, và cõi Tịnh độ mà kinh này chỉ dạy. Xin hành giả liễu tri.</p>

    <div class="mt-10 mb-6">
      <h3 id="ghi-chu-1" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Ghi chú:</h3>
    </div>
    <div class="space-y-4 text-[0.95em]">
      <p>Mạc đạo Tây phương viễn, Tây phương tại mục tiền, thủy lưu quy đại hải, nguyệt lạc bất ly thiên.</p>
      <p>Tám thức tâm vương lệch ra bên ngoài.</p>
      <p>Tự tánh Di Đà, duy tâm Tịnh độ.</p>
    </div>

    </div>

    <hr class="my-10" />

    <div class="mb-8">
      <h3 id="chanh-van-2" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chánh văn:</h3>
    <p>Này Xá Lợi Phất, cõi đó vì sao tên là Cực Lạc?</p>
    <p>Vì chúng sinh trong cõi đó không có những sự khổ, chỉ hưởng những điều vui, nên cõi đó tên là Cực Lạc.</p>
    <p>Này Xá Lợi Phất, lại trong cõi Cực Lạc có bảy từng bao lơn, bảy từng mành lưới, bảy từng hàng cây, đều bằng bốn chất báu bao bọc giáp vòng, vì thế nên cõi đó tên là Cực Lạc.</p>
    <p>Này Xá Lợi Phất, lại nữa trong cõi Cực Lạc có ao bằng bảy chất báu, trong ao đầy dẫy nước đủ tám công đức, đáy ao thuần dùng cát vàng trải làm đất. Vàng, bạc, lưu ly, pha lê hiệp thành những thềm, đường ở bốn bên ao; trên thềm đường có lầu gác cũng đều nghiêm sức bằng vàng, bạc, lưu ly, pha lê, xa cừ, xích châu, mã não.</p>
    <p>Trong ao có hoa sen lớn như bánh xe: hoa sắc xanh thời ánh sáng xanh, sắc vàng thời ánh sáng vàng, sắc đỏ thời ánh sáng đỏ, sắc trắng thời ánh sáng trắng, mầu nhiệm thơm tho trong sạch.</p>
    <p>Này Xá Lợi Phất, cõi Cực Lạc thành tựu công đức trang nghiêm như vậy đó.</p>

    <h3 id="giai-thich-tu-ngu-2" class="mt-8 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Giải thích từ ngữ:</h3>
    <p>Sự khổ: Khổ thì rất nhiều, nhưng không ngoài tám thứ sau:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Sinh là khổ: Người sinh và kẻ được sinh ra đều khổ.</li>
      <li>Già là khổ: Mỗi tuổi mỗi già hóa ra lóng ngóng, mắt lờ tai điếc, tay chân run rẩy, thân thể bất an, ngày đêm mệt mỏi.</li>
      <li>Bệnh là khổ: Thân bệnh và tâm bệnh đều khổ.</li>
      <li>Chết là khổ: Khi sắp chết thì toàn thân đau nhức, sáu giác quan yếu dần.</li>
      <li>Thương mến nhau mà phải xa lìa là khổ.</li>
      <li>Cầu không toại ý là khổ.</li>
      <li>Oán ghét nhau mà phải ở bên nhau hay thường đối đầu nhau là khổ.</li>
      <li>Thân năm ấm tăng giảm bất chừng là khổ.</li>
    </ul>
    <p>Không có những sự khổ: Là chỉ cho khổ diệt (diệt đế hay Niết-bàn). Đoạn trừ 10 kiết sử thì Niết-bàn hiển lộ, nên nói “quá thập”.</p>
    <p>Điều vui: Điều vui ở đây là niềm vui không còn bị nghiệp thức chi phối, nên nói chân lạc, Cực Lạc, hay Niết-bàn.</p>
    <p>Bảy lớp bao lơn: Dụ cho 7 thánh pháp để thành tựu Phật đạo, gồm:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Tín tài: Tin nhận tự tánh thanh tịnh bản nhiên (tin nhận chánh pháp).</li>
      <li>Giới tài: Giữ tâm địa giới thanh tịnh.</li>
      <li>Tàm tài: Tự hổ thẹn không tạo nghiệp nhân xấu ác.</li>
      <li>Quý tài: Tự hổ thẹn với pháp bất thiện, và pháp sanh diệt.</li>
      <li>Văn tài: Hướng tâm miên mật nghe lại tự tánh Di Đà.</li>
      <li>Thí tài: Xả ly rốt ráo ngã chấp và pháp chấp, cũng gọi là hằng thuận pháp tánh tức nghe bằng nghe, thấy bằng cái thấy v.v…</li>
      <li>Huệ tài: Nhiếp tâm không tán loạn để soi rõ tánh chân thật của các pháp.</li>
    </ul>
    <p>Bảy pháp thánh tài này như bao lơn bao bọc chung quanh hành giả vậy, nên kinh gọi là “thất trùng lan thuẫn”.</p>

    <p>Bảy lớp lưới giăng: Dụ cho 7 thánh nhân, gồm:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Tùy tín hành: Tin tự tánh Di Đà thanh tịnh bổn nhiên, mà thực hành.</li>
      <li>Tùy pháp hành: Tin pháp niệm danh tự tánh mà thực hành.</li>
      <li>Tín giải: Tin tự tánh giải mở mọi chấp thủ (triền phược) mà thực hành.</li>
      <li>Kiến chí: Thấy chỗ tột cùng của giải thoát mà hành trì.</li>
      <li>Thân chứng: Tự tâm hành giả đạt được nhất tâm bất loạn, hay chứng vào vô sanh.</li>
      <li>Huệ giải thoát: Nhờ nương vào ánh sáng vô lượng của chân tâm nên lìa khỏi mọi vướng mắc, đoạn trừ các lậu hoặc.</li>
      <li>Câu giải thoát: Nhờ phát huy huệ giải thoát đến rốt ráo nên lìa hẳn chướng phiền não và chướng sở tri, được diệt tận định.</li>
    </ul>
    <p>Bảy lớp lưới báu ở trên bao bọc, che chở, làm cho hành giả thoát hẳn hai thứ phiền não và sở tri; đạt thành giải thoát tối thượng.</p>

    <p>Bảy lớp hàng cây: Dụ cho 7 thắng pháp nhờ nương vào tự tánh Di Đà, gồm:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Thân thắng: Nhờ nương vào tự tánh Di Đà nên đạt thân kim cương bất hoại.</li>
      <li>Như pháp trụ thắng: Nhờ nương vào tự tánh Di Đà nên chân tâm như pháp trụ, mà không bị vọng tâm chi phối làm cho sai lạc chân thật.</li>
      <li>Trí thắng: Nhờ nương tự tánh Di Đà nên thành tựu 4 trí vô ngại (pháp vô ngại trí, nghĩa vô ngại trí, từ vô ngại trí, biện vô ngại trí).</li>
      <li>Cụ túc thắng: Nhờ nương vào tự tánh Di Đà nên đầy đủ muôn hạnh lành.</li>
      <li>Hành xứ thắng: Nhờ nương vào tự tánh Di Đà nên tâm hành xứ diệt, thành tựu chánh định rốt ráo.</li>
      <li>Bất khả tư nghì thắng: Nhờ nương vào tự tánh Di Đà, nên sức oai thần của chân tâm không thể nghĩ bàn hiển lộ.</li>
      <li>Giải thoát thắng: Nhờ nương vào tự tánh Di Đà nên lìa hẳn chướng phiền não và chướng sở tri, giải thoát hoàn toàn.</li>
    </ul>
    <p>Bảy thắng pháp này trụ vững gốc rễ như bảy hàng cây báu, giúp hành giả đạt thành giải thoát giác ngộ, hay chứng đắc Niết-bàn.</p>

    <p>Bốn chất quý báu bao bọc giáp vòng: Vàng, bạc, lưu ly, pha lê, biểu trưng cho bốn đức tính của Niết-bàn là: Thường - lạc - ngã - tịnh, cũng dụ cho pháp thân bao trùm bốn phương; nên ngài Tuệ Trung Thượng Sĩ nói: “Thân báu Di Đà tại đáy lòng, bốn phương thân pháp tỏa mênh mông”.</p>

    <p>Ao bảy báu: Dụ cho Như Lai Tạng tâm chứa đầy đủ đức tướng và trí tuệ Như Lai; nên cũng dụ toàn là bảy chất quý báu. Cũng dụ cho thực hành bảy chi phần giác ngộ: Niệm, trạch pháp, tinh tấn, hỷ, khinh an, định, xả mà đạt thành nhất tâm. Ao bảy báu hay bình thanh tịnh (thanh tịnh bình) đều ẩn dụ cho lý nhất tâm vậy.</p>
    <p>Nước tám công đức:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Trừng thanh (lặng trong), khác với nước ở cõi phàm là vẩn đục.</li>
      <li>Thanh lãnh (mát dịu), khác với nước cõi phàm là khi thì lạnh quá, lúc thì nóng quá.</li>
      <li>Cam mỹ (ngon ngọt), khác với nước cõi phàm lúc thì mặn quá, khi thì nhạt quá.</li>
      <li>Khinh nhuyễn (mềm nhẹ), khác với nước cõi phàm là nặng chìm.</li>
      <li>Nhuận trạch (đượm nhuần, bóng nhoáng), khác với thứ nước cõi phàm là ướt át, thối nát, phai màu, nhợt nhạt.</li>
      <li>An hòa (yên ổn, hòa nhã), khác với thứ nước cõi phàm là chảy mau và dữ tợn.</li>
      <li>Trừ cơ khát (hết đói khát), khác with thứ nước cõi phàm là có lúc sinh ra lạnh bụng.</li>
      <li>Trưởng dưỡng chư căn (nuôi lớn mọi căn), khác với mọi thứ nước cõi phàm là làm tổn hoại mọi căn, làm rối loạn sinh mạng, làm chìm đắm tâm tư.</li>
    </ul>
    <p>Còn nước tám công đức này có tính cách trong trẻo, mát mẻ, ngon ngọt, mềm dịu, thấm nhuần, an hòa, trừ đói khát (không còn dục vọng), nuôi lớn các căn tức làm cho nước tâm trong lặng bằng niệm tự tánh Di Đà, hay thiền định.</p>
    <p>Như vậy, nước tám công đức ở đây là diệu dụng của chân tâm, thoát ly trần cấu, hòa vào thế giới Hoa Tạng, hay chính là pháp giới tạng thân A Di Đà.</p>

    <p>Thềm bậc: Chỉ cho giới đức thanh tịnh. (1)</p>
    <p>Đường ở bốn bên ao: Niệm tự tánh Di Đà nên đi vào nhất tâm (định), nên nói đường ở bốn bên, tức lìa khỏi bốn câu (ly tứ cú). Thế gian thì đi vào đường sanh tử của sanh - trụ - dị - diệt (bốn bên), còn hành giả niệm tự tánh Di Đà thì đi vào “nhất tâm bất loạn”, tức đường bất sanh, bất diệt hay vô sanh vậy.</p>
    <p>Trên thềm đường có lầu gác: Lầu gác ở trên cao là dụ cho tuệ giác, tức tầm nhìn không bị hạn cuộc (vô nhãn giới), hay chính là trí Bát-nhã vậy.</p>
    <p>Thềm là nền móng, dụ cho tâm địa giới, đường là đưa tâm ra khỏi sanh diệt nên dụ cho định, lầu gác là dụ cho tuệ. Ba môn giới - định - tuệ dụ cho bảy báu trang sức tâm hành giả, để đạt thành giới thân huệ mạng, vượt khỏi sanh tử.</p>

    <p>Hoa sen như bánh xe: Hoa sen là dụ cho tự tánh không nhiễm ô, hay tuệ giải thoát tối thượng, đạt thành mạng sống vô lượng (bởi tánh giác vô thủy vô chung), ánh sáng vô lượng (tuệ giác trùm khắp pháp giới). Màu xanh biểu trưng cho định căn, vàng biểu trưng cho niệm căn, đỏ biểu trưng cho tinh tấn căn, trắng biểu trưng cho tín căn, và một màu tổng hợp biểu trưng cho tuệ căn, tạo nên nhất chân pháp giới; một là tất cả, và tất cả là một. Đó chính là ánh sáng giác ngộ của chư Phật, và cũng biểu trưng cho hào quang của đức Phật vậy.</p>
    <p>Công đức trang nghiêm: Trở lại với tự tánh thanh tịnh nhiệm mầu, nên trong kinh Đại Bát-nhã phẩm Kim Cương đức Phật dạy: “Trang nghiêm cõi Phật, tức chẳng trang nghiêm, mới là trang nghiêm”, có nghĩa là trở lại sống với tâm thanh tịnh sáng suốt bổn nhiên, mà tạm gọi là trang nghiêm vậy thôi. Vì vậy cho nên nói: “Tự tánh Di Đà, Duy tâm Tịnh độ”.</p>

    <h3 id="luoc-giai-2" class="mt-10 mb-4 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Lược giải:</h3>
    <p>Trước hết đức Phật nói tổng quát về thế giới Cực Lạc, hay chính là cảnh giới Niết-bàn của chư Phật thì không có sự khổ, chỉ thọ nhận những điều vui, nên nói chân lạc. Còn thế giới Ta-bà hay thế giới sanh diệt của chúng ta thì đủ mọi thứ khổ, nào là: Sanh là khổ, già là khổ, bệnh là khổ, chết là khổ, cầu mà không toại ý là khổ, thương mến nhau mà phải xa lìa là khổ, oán ghét mà luôn đối đầu nhau là khổ, năm ấm tăng giảm bất thường là khổ. Nếu còn sống trên tình thức là còn bị dính mắc, nên bị vọng thức chi phối là còn khổ. Tình thức của chúng ta bị chia chẻ manh mún, bởi sự lộng hành vô độ của dục ái, đã đẩy đưa chúng ta lang thang từ vạn kiếp luân hồi, với bao khổ lụy bi ai. Đó chính là do dòng năng lực tiềm tại trong tâm thức, hay chính là nghiệp lực vậy. Nhưng nay nhờ nương vào niệm tự tánh Di Đà, đạt thành nhất tâm bất loạn, nên đoạn tận mọi khổ đau, và chỉ còn lại an vui tuyệt đãi, nên nói Cực Lạc. Không có những sự khổ là chỉ cho khổ diệt hay diệt đế; mà diệt đế chính là Niết-bàn. Vậy muốn chứng đắc Niết-bàn, đức Phật dạy là phải vượt qua mười kiết sử, đó là: Tham, sân, si, mạn, nghi, thân kiến, biên kiến, tà kiến, kiến thủ kiến và giới cấm thủ, nên nói “quá thập”, cũng nói “A Di Đà Phật thành Phật đến nay đã mười kiếp” tức vượt qua mười vọng tưởng kiết sử thì tự tánh Di Đà hiển lộ.</p>
    <p>Tiếp theo là nói chi tiết về cách trang nghiêm cõi Cực Lạc.</p>
    <p>Trước hết là nói về bảy lớp lan can, hay chính là bảy pháp thánh tài (thất thánh tài): Một là tin nhận tự tánh Di Đà thanh tịnh bản nhiên, vô thủy vô chung nên nói Vô lượng thọ, vô lượng quang, vô lượng trang nghiêm (tín tài). Hai là trở lại sống tròn đầy với giới tâm thanh tịnh (giới tài). Ba là tự hổ thẹn với những điều ác đã làm (tàm tài). Bốn là tự hổ thẹn để ngăn ngừa những điều ác chưa phạm (quý tài). Năm là hướng tâm miên mật nghe lại tự tánh của mình, cũng gọi là “phản văn tự tánh” (văn tài). Sáu là xả sạch chấp ngã và chấp pháp (thí tài), cũng gọi là hằng thuận pháp tánh, tức cái nghe chỉ bằng cái nghe, cái thấy chỉ bằng cái thấy v.v… Bảy là đạt thành nhất tâm bất loạn nên soi rõ thật tướng của các pháp (huệ tài).</p>
    <p>Thứ hai là nói đến bảy lớp lưới giăng hay bảy nhân tố thành tựu bậc thánh (thánh nhân): Một là do tin vào tự tánh Di Đà thanh tịnh bản nhiên mà thực hành (tùy tín hành), chứ không phải tin thế giới Cực Lạc của đức Phật Di Đà bên ngoài tâm. Nếu tin thế giới Cực Lạc của Phật A Di Đà bên ngoài, thì đồng nghĩa với niềm tin Thiên quốc với thiên đàng của ngoại đạo. Hai là tin vào pháp niệm Phật tam-muội, hay niệm danh tự tánh Di Đà mà thực hành (tùy pháp hành). Ba là tin tự tánh giải mở hết thảy chấp thủ mà thực hành (tín giải). Bốn là thấy chỗ tột cùng của giác ngộ là tri kiến Phật mà thực hành (kiến chí). Năm là tự tâm hành giả chứng vào vô sanh (thân chứng). Sáu là nhờ đạt thành ánh sáng vô lượng của chân tâm nên lìa khỏi mọi vướng mắc (huệ giải thoát). Bảy là lìa hẳn hai chướng là: chướng phiền não và chướng sở tri (câu giải thoát).</p>
    <p>Thứ ba là nói đến bảy lớp hàng cây, hay bảy thắng pháp thù diệu: Một là nhờ nương vào niệm tự tánh Di Đà nên đạt thành pháp thân bất hoại (thân thắng). Hai là nhờ đạt được tuệ giác vô lậu nên như pháp trụ, mà không sanh vọng tâm chấp thủ lập trước vật (như pháp trụ thắng). Ba là nhờ nương vào tự tánh Di Đà nên đạt thành bốn trí vô ngại là: pháp vô ngại trí, nghĩa vô ngại trí, từ vô ngại trí, biện vô ngại trí (trí thắng). Thứ tư là nhờ nương vào tự tánh Di Đà nên thành tựu muôn hạnh lành (cụ túc thắng). Thứ năm là nhờ nương vào tự tánh Di Đà nên tâm hành xứ diệt, thành tựu chánh định bổn nhiên (hành xứ thắng), nên nói “liên đài tự tiêu danh” tức tâm không sở trụ. Thứ sáu là đạt thành tuệ giác tối thượng nên không thể nghĩ bàn (bất khả tư nghì thắng). Thứ bảy là nhờ nương vào tự tánh Di Đà nên lìa hẳn chướng phiền não và chướng sở tri, giải thoát hoàn toàn (giải thoát thắng). Bảy thắng pháp này trụ vững gốc rễ cành ngọn, nên dụ cho bảy hàng cây báu; giúp hành giả giải thoát giác ngộ.</p>
    <p>Bốn chất quý báu bao bọc giáp vòng là dụ cho bốn đức tính của Niết-bàn đó là: chân thường, chân lạc, chân ngã, chân tịnh; cũng dụ cho pháp giới tạng thân bao trùm bốn phương sáu hướng (Đông, Tây, Nam, Bắc, tứ duy thượng hạ) nên ngài Tuệ Trung Thượng Sĩ nói:</p>
    <p>“Thân báu Di Đà tại đáy lòng<br />Bốn phương thân pháp tỏa mênh mông<br />Cả trời chỉ thấy vầng trăng quạnh<br />Đêm lắng vào thu vũ trụ trong”.</p>
    <p>Ao bảy báu dụ cho thực hành bảy chi phần giác ngộ:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Niệm giác phần: Là thường an trú trong chánh niệm.</li>
      <li>Trạch pháp giác phần: Là lựa chọn pháp tu, mà ở đây là niệm tự tánh Di Đà.</li>
      <li>Tinh tấn giác phần: Là dụng công phu không gián đoạn, nhằm đạt thành nhất tâm.</li>
      <li>Hỷ giác phần: Nhờ miên mật niệm tự tánh nên phiền não bị tiêu trừ, làm cho tâm an vui.</li>
      <li>Khinh an giác phần: Nhờ niệm tự tánh, nên giải trừ được chướng sở tri, làm cho tâm nhẹ nhàng an lạc.</li>
      <li>Định giác phần: Nhờ niệm tự tánh nên đạt thành nhất tâm bất loạn.</li>
      <li>Xả giác phần: Nhờ nhất tâm bất loạn, nên xả sạch chấp ngã và chấp pháp (xả liễu ngã pháp); tâm trở lại thanh tịnh bổn nhiên, nên cũng dụ cho “bình thanh tịnh” (thanh tịnh bình), hay Tịnh độ.</li>
    </ul>
    <p>Thứ đến là nói nước tám công đức: Công đức là ở nơi tâm thể an định, thanh tịnh sáng suốt bổn nhiên mà có, nên dụ cho nước trong trẻo, mát mẻ, ngon ngọt, mềm dịu, thấm nhuần, an hòa, trừ đói khát (không còn dục vọng). Nước này nuôi lớn các căn, tức làm cho nước tâm trong lặng bằng thiền định, bằng niệm tự tánh Di Đà của mình. Như vậy nước tám công đức ở đây là diệu dụng của chân tâm, nên thoát ly trần cấu, hòa vào thế giới Hoa Tạng, hay chính là pháp giới tạng thân Phật A Di Đà. (2)</p>
    <p>Tiếp theo là nói đến thềm bậc (giai), tức dụ cho giới đức thanh tịnh, nên trong luật Sa-di dạy: “Gần thì làm thềm bậc cho giới Tỳ-kheo, xa thì làm nền móng cho giới Bồ-tát”. Nhờ niệm tự tánh Di Đà đạt thành nhất tâm nên giới đức thanh tịnh, tâm lìa khỏi bốn câu (3) tức tâm trở lại thanh tịnh, mà kinh văn dụ cho đường đi ở bốn bên, tức lìa “tứ cú”. Lầu gác ở trên cao là dụ cho tầm nhìn không bị hạn cuộc (vô nhãn giới) chỉ cho trí Bát-nhã, hay tuệ giác trùm khắp pháp giới. Thềm là nền móng dụ cho tâm địa giới; đường đi là đưa tâm ra khỏi sanh diệt nên dụ cho định, lầu gác là trí tuệ. Ba môn giới - định - tuệ dụ cho bảy báu trang sức tâm hành giả, để đạt thành giới thân huệ mạng, vượt khỏi sinh tử.</p>
    <p>Tiếp đến là nói về hoa sen, tức dụ cho tự tánh không nhiễm ô, hay tuệ giải thoát tối thượng, đạt thành mạng sống vô lượng (vô lượng thọ), ánh sáng vô lượng (vô lượng quang). Màu xanh biểu trưng cho định căn, tức gốc chân tâm thường định; vì vậy trong bài tựa kinh Địa Tạng, ngài Thật Xoa Nan Đà dịch: “Cúi đầu đảnh lễ tâm địa thanh tịnh bổn nhiên, kho tánh giác vô tận ban vui lớn đáng tôn đáng kính”. (4) Màu vàng biểu trưng cho niệm căn, gốc của niệm là chân niệm, tức niệm chân tâm. Màu đỏ biểu trưng cho tấn căn, gốc của tinh tấn là lực chuyển y của “vô công dụng hạnh” để đạt thành nhất tâm. Màu trắng biểu trưng cho tín căn, gốc của tin là tin vào tự tánh Di Đà của mình; ngoài tâm không thể tìm Phật Di Đà hay cảnh giới Cực Lạc nào khác. Và một màu tổng hợp biểu trưng cho tuệ căn, tức tự tánh Di Đà tổng nhiếp hết thảy pháp giới (nhất chân pháp giới); nên gọi là “pháp giới tạng thân”, và đó chính là ánh sáng giác ngộ của chư Phật vậy.</p>
    <p>Tiếp theo là nói đến công đức trang nghiêm, tức nhờ niệm tự tánh Di Đà làm cho nhất tâm bất loạn, nên trở lại với chân tâm thanh tịnh bổn nhiên của mình mà thôi, chứ thật chẳng trang nghiêm gì khác. Vì vậy cho nên, trong phẩm Kim Cương Bát-nhã, đức Phật dạy: “Trang nghiêm cõi Phật, tức chẳng trang nghiêm, mới là trang nghiêm”.</p>

    <div class="mt-10 mb-6">
      <h3 id="ghi-chu-2" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Ghi chú:</h3>
    </div>
    <div class="space-y-4 text-[0.95em]">
      <p>Cận vi Tỳ-kheo giới chi giai thê: Gần thì làm thềm bậc cho giới Tỳ-kheo.</p>
      <p>Phù thủy thử giả bát công đức thủy tự thiên chân, tiên tẩy chúng sinh nghiệp cấu trần, biến nhập Tỳ-lô hoa tạng giới, cá trung vô xứ bất siêu luân, thủy bất tẩy thủy diệu cực pháp thân, trần bất nhiễm trần phản tác tự kỷ, quyên trừ nội ngoại đản địch đàn tràng, sái khô mộc nhi tác dương xuân, khiết uế ban nhi thành tịnh độ. Sở vị đạo nội ngoại trung gian vô trược uế, thánh phàm u hiển tổng thanh lương. Bồ-tát liễu đầu cam lồ thủy, năng linh nhất đích biến thập phương, tinh chuyên cấu uế tận quyên trừ, phổ sái đàn tràng tất thanh tịnh.</p>
      <p>Tứ cú: Có – không – cũng có cũng không – không có không không.</p>
      <p>Khể thủ bổn nhiên tịnh tâm địa, vô lượng Phật tạng đại từ tôn, nam phương thế giới dõng hương vân…</p>
    </div>

    </div>

    <hr class="my-10" />

    <div class="mb-8">
      <h3 id="chanh-van-3" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chánh văn:</h3>
    <p>Lại nữa này Xá Lợi Phất, trong cõi nước của đức Phật đó, thường trỗi nhạc trời, đất bằng vàng ròng, ngày đêm sáu thời rưới hoa trời mạn đà la. Chúng sinh trong cõi đó thường vào lúc sáng sớm, đều lấy đãy đựng những hoa tốt đem cúng dường mười muôn ức Phật ở phương khác, đến giờ ăn liền trở về bổn quốc, ăn cơm xong đi kinh hành. Này Xá Lợi Phất, cõi nước Cực Lạc thành tựu công đức trang nghiêm dường ấy.</p>
    <p>Lại nữa này Xá-Lợi-Phất, cõi đó thường có những giống chim màu sắc xinh đẹp lạ thường, nào chim Bạch hạc, Khổng tước, Anh vũ, Xá lợi, Ca lăng tần già, Cộng mạng; những giống chim đó ngày đêm sáu thời kêu tiếng hòa nhã. Tiếng chim đó diễn nói những pháp như năm căn, năm lực, bảy phần giác ngộ, tám phần thánh đạo v.v... Chúng sinh trong cõi đó nghe tiếng chim xong thảy đều niệm Phật, niệm Pháp, niệm Tăng.</p>
    <p>Này Xá-Lợi-Phất, thầy chớ cho rằng những giống chim đó thật là do tội báo sinh ra. Vì sao như vậy? Vì cõi của đức Phật đó không có ba đường dữ.</p>
    <p>Này Xá-Lợi-Phất, cõi của đức Phật đó tên đường dữ còn không có, huống gì lại có sự thật. Những giống chim đó là do đức Phật A Di Đà muốn làm cho tiếng pháp được tuyên lưu mà biến hóa làm ra đấy thôi.</p>
    <p>Này Xá-Lợi-Phất, trong cõi nước của đức Phật đó, gió nhẹ thổi động các hàng cây báu và động mành lưới báu, làm vang ra tiếng vi diệu, thí như trăm ngàn thứ nhạc đồng một lúc hòa chung. Người nào nghe tiếng đó tự nhiên đều sinh lòng niệm Phật, niệm Pháp, niệm Tăng.</p>
    <p>Này Xá-Lợi-Phất, cõi nước của đức Phật đó thành tựu công đức trang nghiêm dường ấy.</p>

    <h3 id="giai-thich-tu-ngu-3" class="mt-8 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Giải thích từ ngữ:</h3>
    <p>Nhạc trời: Là tiếng âm nhạc giữa trời, cũng dụ cho tiếng tốt lời hay; cũng dụ cho cõi Cực Lạc không có những âm thanh xấu ác, hay những lời tục tĩu, ác độc, mỉa mai, gây chia rẽ hận thù, gây mất đoàn kết. Nhạc trời cũng dụ cho thanh trần giữa không gian, bản chất nó thật ra không có tốt xấu, nhưng do vọng tâm chấp thủ của chúng ta tạo ra phân biệt; còn ở nơi tự tánh thì không sinh vọng tâm phân biệt, như nghe nhạc trời vậy.</p>
    <p>Đất bằng vàng ròng: Dụ cho sắc trần, do sống với tự tánh Di Đà toàn là tánh giác nên dụ cho vàng ròng, nên không sinh tâm chấp thủ lập trước vật. Như lời Tổ Quy Sơn nói: “Tai nghe tiếng và mắt thấy hình sắc mà tâm không dính mắc, thì chân tâm ứng dụng cùng khắp”.</p>
    <p>Ngày đêm sáu thời rưới hoa trời mạn đà la: Hoa cũng dụ cho sắc và hương, rưới hoa dụ cho xúc. Ngày đêm là 24 tiếng, sáu thời là dụ cho khi sáu căn tiếp xúc sáu trần mà đây là sắc trần – hương trần và xúc trần, nhưng nhờ niệm danh tự tánh Di Đà nên tâm không vướng mắc. Đây là nói với hành giả đang dụng công niệm tự tánh; còn mỗi khi đã đạt được giải thoát giác ngộ rồi thì không còn ngày đêm, nên nói vô lượng quang.</p>
    <p>Hoa tốt cúng dường mười vạn ức Phật ở phương khác: Hoa tốt cũng dụ cho sắc đẹp và hương thơm, cúng dường ở đây là xả ly mười kiết sử như đoạn trên đã nói. Bên trong không chấp trước, bên ngoài không đắm nhiễm trần cảnh (năng sở song vong), nên làm cho Phật tánh hiển lộ.</p>
    <p>Trở lại bổn quốc ăn cơm rồi kinh hành: Bổn là cái gốc, quốc độ hay cõi nước thuộc về tâm, nên cũng gọi là “bổn lai diện mục”; tức trở lại với tự tánh Di Đà của mình, nên có một niềm pháp lạc vô biên, cũng gọi là thiền duyệt thực. Cơm chánh pháp cũng được gọi là bát cơm sáu hòa (lục hòa la phạn), dụ cho một chân tâm phát sinh sáu hòa hợp; tạo nên một niềm pháp lạc tuyệt đãi.</p>
    <p>Những giống chim xinh đẹp như: Bạch hạc, Khổng tước, Anh vũ, Xá lợi, Ca lăng tần già, Cộng mạng; ngày đêm sáu thời kêu lên tiếng hòa nhã: Tiếng chim là dụ cho tiếng hữu tình trong suốt ngày đêm, tức phát ra bất cứ lúc nào. Nhưng nhờ nương vào tự tánh Di Đà nên làm cho một ánh sáng của chân tâm (nhất minh tinh) phát sinh ra sáu hòa hợp, hay sáu căn hỗ dụng, mà không bị biến kế sở chấp hay vọng tâm đánh lừa. Thứ nữa, ở cảnh giới Cực Lạc thì không còn nghiệp thức, nên không có súc sinh như cảnh Dục; nhưng đây là đức Phật dụ cho tiếng hữu tình cũng thuộc pháp giới tánh bổn nhiên, và tự tánh Di Đà cũng chính là Phật tánh bổn nhiên vô sở trụ, nên tạo thành năm căn, năm lực, bảy phần bồ đề, và tám chánh đạo (thuộc viên đốn).</p>
    <p>Tiếng chim diễn nói pháp Năm căn, năm lực, bảy phần bồ đề và tám chánh đạo: Đây là trình bày 37 phẩm đạo của Bồ tát thuộc viên giáo, nên Bồ tát thấy bốn đế là huyễn lập trong vọng tâm (vô khổ, vô tập, vô diệt, vô đạo).</p>
    <p>Ngũ căn (năm căn bổn, cội gốc):</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Tín căn: Tin pháp niệm danh tự tánh Di Đà để đạt thành cội gốc bất sinh bất diệt, hay nhất tâm.</li>
      <li>Tinh tấn căn: Miên mật dụng công niệm danh tự tánh Di Đà không ngừng nghỉ, khi nào đạt nhất tâm mới thôi.</li>
      <li>Niệm căn: Chỉ một hướng để tâm niệm tự tánh Di Đà, mà không để cho tâm leo qua cơ cảnh khác.</li>
      <li>Định căn: Nhờ miên mật niệm tự tánh Di Đà, nên đạt thành định tâm.</li>
      <li>Tuệ căn: Nhờ nhất tâm bất loạn nên đạt thành vô lượng quang.</li>
    </ul>
    <p>Ngũ lực (năm sức mạnh làm cho 5 căn vững chắc):</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Tín lực: Làm cho gốc tin (Tín căn) lớn mạnh bởi niệm tự tánh, nên phá hết nghi hoặc, tà tâm và phiền não.</li>
      <li>Tinh tấn lực: Sức tinh tấn không mệt mỏi trong dụng công niệm tự tánh, nên đạt thành sức mạnh vượt thoát sinh tử.</li>
      <li>Niệm lực: Làm cho Niệm căn lớn mạnh, phá hết mọi tà niệm, thành tựu được công đức chánh niệm xuất thế gian.</li>
      <li>Định lực: Làm cho Định căn lớn mạnh bởi niệm tự tánh, nên phá hết mọi tư tưởng lăng xăng rối loạn, thành tựu được tâm Định.</li>
      <li>Tuệ lực: Làm cho Tuệ căn lớn mạnh bởi niệm tự tánh, nên trừ hết mê hoặc bởi mười kiết sử, phát ra được trí huệ vô lậu.</li>
    </ul>

    <p>Thất Bồ Đề Phần hay là Thất Giác Phần (7 phần giác ngộ):</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Trạch pháp giác phần: Nhờ nương vào niệm tự tánh Di Đà nên trí tuệ tự soi rõ các pháp, mà không khởi thức phân biệt.</li>
      <li>Tinh tấn giác phần: Nhờ niệm tự tánh Di Đà miên mật tạo thành lực chuyển y (tinh tấn) đến nhất tâm.</li>
      <li>Hỷ giác phần: Mỗi khi vọng niệm bị loại trừ thì niềm hỷ lạc tự nhiên phát sinh.</li>
      <li>Khinh an giác phần: Mỗi khi hỷ lạc phát sinh thì tâm trở nên nhẹ nhàng an lạc.</li>
      <li>Niệm giác phần: Tâm thuần niệm tự tánh cho đến khi đạt được định bổn nhiên.</li>
      <li>Định giác phần: Đạt được nhất tâm bất loạn, đến đây sinh đã tận, những lậu hoặc đã đoạn trừ, nên tâm thường định.</li>
      <li>Xả giác phần: Mỗi khi đạt được nhất tâm bất loạn thì chướng phiền não và chướng sở tri tự đoạn trừ, tâm giải thoát hiện hữu.</li>
    </ul>

    <p>Bát Thánh Đạo Phần (8 phần Thánh Đạo):</p>
    <p>Chánh kiến: Chánh kiến ở đây khác với chánh kiến của Nhị thừa. Chánh kiến Nhị thừa là do sự phát sóng của vỏ não để hình thành những khái niệm giả lập của tâm thức, nhưng đúng với hiện tượng giới; tức đúng với nhân quả, nhân duyên sinh, tốt xấu, thiện ác để chuyển hóa nội tại và ngoại tại, từ xấu sang tốt, từ dữ sang hiền, từ khổ đau sang an vui.</p>
    <p>Chánh kiến, Theo Đại Tỳ-bà-sa luận (97) thì chánh kiến được phân ra là hai loại:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Một là hữu lậu chánh kiến hay còn gọi là thế tục chánh kiến, tức chỉ cho ý thức luôn luôn tương ưng với thiện huệ hữu lậu, vì chúng quan hệ với chấp thủ của hữu lậu nên phải chuyển hướng về đường thiện để chiêu cảm quả Dục đáng vui của đời vị lai.</li>
      <li>Hai là vô lậu chánh kiến, còn gọi là xuất thế gian chánh kiến, tức chỉ cho trí vô sinh (tri kiến phi kiến) hay chính là tri kiến Phật; nên không còn nhiếp giữ ý thức tương ưng với thiện huệ hữu lậu nữa, mà nó vượt qua khỏi chấp thủ về thiện hữu lậu chánh kiến. Nhờ niệm tự tánh Di Đà nên tuệ vô lậu hiện hữu, tâm vượt thoát mọi chấp thủ, nên không qua trung gian của bộ óc suy luận, nên nói “vô kiến đảnh tướng”.</li>
    </ul>
    <p>Chánh tư duy: Nhờ lực niệm tự tánh Di Đà nên cái tâm vô lậu dần dần ứng hợp với tâm đại Niết bàn. Cũng vì lý này, nên ngài Động Sơn Lương Giới nói: “Không suy nghĩ gì chính là tâm tọa thiền vậy” (phi tư lương tức tọa thiền chi yếu dã). Như vậy Tịnh độ và Thiền không hai. Chánh tư duy ở đây cũng khác với chánh tư duy của Nhị thừa. Chánh tư duy của Nhị thừa là suy nghĩ thiện để huân tập nghiệp thiện, đưa ý về vô tham, vô sân, vô hại, nhằm giúp cho ba nghiệp là thân, miệng và ý thuần thiện; đưa đến quả sinh y thiện theo nhân quả hữu lậu.</p>
    <p>Chánh ngữ: Nhờ tâm duyên vào niệm tự tánh Di Đà nên thu nhiếp mọi nghiệp miệng vào chân niệm. Khác với chánh ngữ của Nhị thừa là xa lìa lời nói hư dối, hai lưỡi, ác khẩu, thêu dệt. Vì những lời nói xấu ác tương ứng với vô minh sẽ đưa hành giả vào ba đường ác. Ngược lại là những lời nói chân thật, lời nói hòa hợp, lợi mình lợi người, lời nói nhẹ nhàng, không thô ác nặng nề, lời nói không thêu dệt phù phiếm, tương ứng với phước báo an vui hạnh phúc. Nói chung, những lời nói nào mang lại an lạc cho mình, cho người, và cho tất cả; chúng tạo nhân hướng thiện làm phước báo sinh y cho hành giả trong tương lai thì đó gọi là chánh ngữ.</p>
    <p>Trong kinh Đại Bát Niết Bàn trước khi đức Phật nhập diệt, có đệ tử hỏi:</p>
    <p>“Bạch Thế Tôn, sau khi Phật nhập Niết bàn rồi, người đời sau gặp nhiều sách vở ngoại đạo với kinh Phật không làm sao phân biệt. Vậy biết tin theo lời nào để tu?”</p>
    <p>Phật bảo, không luận là lời nói của ai, miễn là lời ấy đúng sự thật, hợp chân lý thì cứ tin theo đó mà tu.</p>
    <p>Đó là chúng ta nói đến chánh ngữ của Nhị thừa; ngoài ra nếu hành giả từ bỏ bốn cách nói trên vượt qua mọi tự ngôn tự ngữ trong tâm, nên tương ứng tự tánh thanh tịnh bổn nhiên, đạt thành: Lời chân, lời thật, lời như, lời không luống dối, lời không sai khác (1) với tâm vô sở trụ, thì những lời nói này thuộc chánh ngữ vô lậu.</p>
    <p>Chánh nghiệp: Nhờ tâm niệm tự tánh Di Đà nên thân không còn bị vọng tâm chi phối sai sử tạo thành những nghiệp nhân xấu ác. Khác với chánh nghiệp của Nhị thừa, là chỉ cho hành động, tạo tác chân chánh (tác nhân thiện nghiệp), tức chỉ thân, miệng, ý ba nghiệp thuần thiện; tức xa lìa sát sinh, không cho mà lấy, tà dâm, nói dối v.v... nói chung là hành giả sống từ ý nghĩ, lời nói cho đến hành động luôn xa lìa nghiệp ác, gọi đó là chánh nghiệp.</p>
    <p>Còn chánh nghiệp của người xuất gia là trên nương giáo pháp của đức Phật để tu tâm, dưới tùy duyên mà hóa độ chúng sinh theo chánh pháp. Còn ngược lại, thì gọi là tà nghiệp, gồm có bốn loại như sau:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Làm ruộng, làm vườn, làm thuốc để kiếm cơm, áo, gọi là Hạ Khẩu Thực.</li>
      <li>Làm những phép ngửa mặt xem trăng, sao, mặt trời, mưa, gió, sấm, sét, chớp, xem thiên văn, đoán thời tiết, tính lịch số, xem địa lý phong thủy, phương hướng, huyệt mộ v.v... để kiếm cơm áo, gọi là Ngưỡng Khẩu Thực.</li>
      <li>Nịnh hót những người giàu có, quyền thế, lãnh sứ mạng giao hảo đi sứ bốn phương, nói khoác lác để kiếm nhiều lợi, tổ chức ca sĩ, MC ca hát nhằm tập hợp quần chúng cho nhiều để vận động tiền bạc gọi là Phương Khẩu Thực.</li>
      <li>Học những phép bùa chú, tà thuật, bói toán cát hung, coi tuổi tốt xấu, xem xăm, dâng sao giải hạn, đi cúng kiến, trấn ngũ phương, phá địa ngục, giải tấu quỷ thần để kiếm cơm áo, gọi là Duy Khẩu Thực.</li>
    </ul>
    <p>Chánh mạng: Nhờ niệm tự tánh Di Đà nên mạng mạch của tâm thức không đi vào nghiệp nhân xấu ác, dần dần được nhất tâm bất loạn. Còn chánh mạng của Nhị thừa chính là chánh nghiệp được nhìn dưới khía cạnh nghề nghiệp. Nói một cách cụ thể, chánh mạng là không làm những nghề tổn hại đến sự sống, đến nhân cách và quyền lợi của kẻ khác như buôn người, nuôi súc vật để kinh doanh, săn bắn, chài lưới, buôn bán vũ khí, rượu, ma túy, sách báo phim ảnh đồi trụy, bạo lực, căm thù, hoặc bóc lột sức lao động người khác v.v... Tất cả các nghề nghiệp này, một mặt làm thiệt hại đến đời sống vật chất, tinh thần của mình, của người và toàn bộ xã hội. Mặt khác, nó ảnh hưởng trở lại chính tâm hồn mình, phá hủy các đức tính cao quý như từ - bi - hỷ - xả, đồng thời tăng trưởng lòng tham, sân, si, tức những nhân tố gây ra đau khổ cho mình và kẻ khác. Nghề nghiệp bất chánh tác động qua lại, biến cuộc sống thành một vòng luẩn quẩn của khổ đau.</p>
    <p>Chánh tinh tấn: Nhờ miên mật niệm tự tánh Di Đà nên đạt được nhất tâm bất loạn, chứng đắc Niết Bàn tối thượng. Còn chánh tinh tấn của Nhị thừa là nỗ lực đoạn trừ tà kiến, tà tư duy, tà ngữ, tà nghiệp, tà mạng, tà niệm, tà định để thành tựu chánh kiến, chánh tư duy, chánh ngữ, chánh nghiệp, chánh mạng, chánh niệm và chánh định. Chánh Tinh Tấn cũng còn gọi là Tứ Chánh Cần, tức nỗ lực ngăn chặn những tư tưởng bất thiện, không cho chúng phát khởi. Nỗ lực tiêu diệt các tư tưởng bất thiện đã khởi, không cho chúng phát khởi trở lại. Nỗ lực khởi lên những tư tưởng thiện chưa có, nỗ lực duy trì và phát huy các tư tưởng thiện đã phát khởi. Nói cách khác, chánh tinh tấn chính là năng lượng nuôi dưỡng và phát huy chánh tư duy. Với tác dụng này, nó còn là năng lượng biến các yếu tố khác trong Bát Chánh Đạo thành hiện thực diệt khổ.</p>
    <p>Chánh niệm: Chỉ thuần nhất một niệm tự tánh Di Đà, chứ không cho tâm leo qua cơ cảnh khác, nhằm dần dần đủ năng lực chuyển y đạt đến nhất tâm. Vì vậy cho nên ngài Huệ Năng dạy: “Vô niệm niệm tức chánh, hữu niệm niệm thành tà” (2).</p>
    <p>Còn chánh niệm của Nhị thừa là nhớ nghĩ để đoạn trừ tà kiến, tà ngữ, tà mạng, tà nghiệp. Cũng có nghĩa là sống có ý thức, biết mình đang làm gì, nghĩ gì, nói gì và do đó có thể soi sáng mọi tư tưởng, ngôn ngữ và hành động mình bằng lý nhân quả, nhân duyên sinh để chuyển hóa thân tâm và ngoại tại, từ xấu sang tốt, từ dữ sang hiền thiện, từ khổ đau sang an vui.</p>
    <p>Chánh định: Nhờ niệm tự tánh Di Đà nên đạt thành nhất tâm, đi vào đại định bổn nhiên, không còn trở lại sinh tử nữa; nên nói “Đức Phật thường đại định”.</p>
    <p>Vì đây là giáo viên đốn, nên chỉ nói từ năm căn trở lên mà thôi; không nói về bốn niệm xứ, bốn chánh cần, bốn như ý túc thuộc pháp đối.</p>
    <p>Niệm Phật, niệm Pháp, niệm Tăng chi tâm: Nhờ niệm tự tánh Di Đà nên đạt thành nhất tâm bất loạn, làm cho trí giác bừng sáng và hòa hợp tuyệt đãi. Đó chính là niệm Tam Bảo của tự tâm vậy.</p>
    <p>Tiếng gió thổi nhẹ (bát phong xuy động): Là dụ cho một chút lợi, một chút suy hao, một chút chê bai chỉ trích, một chút gián tiếp khen ngợi, một chút trực tiếp ca tụng, một chút dựng sự giả dối nói xấu, một chút chướng duyên, một chút thuận ý đều lay động tâm thức chúng ta.</p>
    <p>Hàng cây báu và mành lưới báu: Cây có gốc rễ trụ vững dụ cho đại định; mành lưới báu bao bọc dụ cho giới đức. Người có giới, có định thì tám ngọn gió trên không làm cho tâm lay chuyển được.</p>

    <h3 id="luoc-giai-3" class="mt-10 mb-4 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Lược giải:</h3>
    <p>Thứ nhất nói cõi nước Cực Lạc thường trỗi nhạc trời: Âm nhạc là dụ cho tiếng hay, trời ở đây không phải là chư thiên vì cõi Cực Lạc không có luân hồi; mà ám chỉ cho lời hay tiếng tốt giữa không gian không để cho vướng vào lòng, mỗi khi sống trọn vẹn với tự tánh Di Đà của mình. Như vậy, những tiếng xấu ác giữa không gian có để cho dính vào lòng không? Tất nhiên là không, vì sống được với tánh giác ngộ của mình. Còn chúng ta thì, tiếng tốt tiếng xấu gì đều dính hết; vì còn tình thức là còn động cơ của chấp ngã và chấp pháp. Đức Phật đưa ra thanh trần tiêu biểu cho sáu trần, để minh chứng cho cõi Cực Lạc, hay cảnh giới chân như vô sở trụ.</p>
    <p>Thứ hai là cõi Cực Lạc thì đất toàn vàng ròng để dụ cho chân tâm thì không còn tạp niệm, không còn bị nghiệp nhân xấu ác chi phối; chứ vàng ở đây không phải là kim loại quý hiếm của thế gian. Vì vậy, nói đem nghiệp mà vãng sinh (đới nghiệp vãng sinh) là nói sai lời Phật dạy vậy. Vì nghiệp thuộc sinh diệt, mà đem vào chân tâm thì không thể được; mà phải lìa khỏi vọng tâm thì chân tâm mới hiển lộ, nên nói “Liên đài tự tiêu danh”.</p>
    <p>Thứ ba là cõi Cực Lạc suốt ngày đêm đều rưới hoa trời mạn đà la; hoa là dụ cho hương trần và sắc trần, rưới là dụ cho xúc trần. Dụ cho mỗi khi sống được với tự tánh Di Đà rồi, thì suốt ngày đêm, sáu căn không dính mắc sáu trần để sinh ra sáu thức phân biệt của vọng tâm. Còn cảnh giới Cực Lạc, hay chân tâm thì không có ngày đêm, mà luôn luôn sáng mãi nên nói vô lượng quang.</p>
    <p>Thứ tư là đem hoa tốt cúng dường mười vạn ức Phật ở phương khác. Phương khác là dụ cho bên ngoài, cúng dường ở đây là xả ly chấp pháp bằng cách vượt qua mười kiết sử; bởi hết thảy các pháp bên trong và bên ngoài đều không thật thể.</p>
    <p>Tổ Quy Sơn nói: “Hết thảy các pháp trong, ngoài đều là không thật thể, từ tâm thức biến hiện nên đều là giả danh”. Cúng dường Phật là xả ly không năng sở, tức dụ cho nhất tâm bất loạn vậy.</p>
    <p>Chính nhờ xả ly rốt ráo nên tâm mới trở lại với cái gốc bất sinh bất diệt sẵn có của mình, nên kinh nói “hoàn đáo bổn xứ”. Bổn là cái gốc, quốc độ hay cõi nước thuộc về tâm nên cũng gọi là “bổn lai diện mục”; tức trở lại với tự tánh Di Đà của mình. Cơm chánh pháp cũng được gọi là bát cơm sáu hòa (lục hòa la phạn), dụ cho một chân tâm phát sinh sáu hòa hợp; tạo nên một niềm pháp lạc tuyệt đãi mỗi khi sáu căn không còn dính mắc sáu trần.</p>
    <p>Thứ năm là nói đến tiếng hót và sắc đẹp của các loài chim như: Bạch hạc, Khổng tước, Anh vũ, Xá lợi, Ca lăng tần gi伽 (tần già), Cộng mạng hót cả ngày đêm; cũng diễn tả danh và sắc của loài hữu tình, là hai đối tượng luôn tác động đến tâm thức chúng ta bất cứ lúc nào. Nếu có tu hành, thì nhờ vào năm căn, năm lực, bảy phần giác ngộ và tám chánh đạo như một phương tiện trợ đạo, giúp cho chúng ta tiến đến giác ngộ, mà không bị danh sắc chi phối, nên kinh nói nghe rồi thảy đều niệm Tam Bảo của tự tâm (niệm Phật, niệm Pháp, niệm Tăng chi tâm). Chim là đức Phật ẩn dụ mà thôi, chứ không phải chim thật; bởi cảnh giới Cực Lạc không có ba đường dữ là: địa ngục, ngạ quỷ và súc sinh, kể cả cái tên đường dữ cũng không có, huống là có súc sinh. Vì vậy cho nên nói: “Liên đài tự tiêu danh” tức ở nơi cảnh giới chân tâm thì không còn vọng tưởng.</p>
    <p>Thứ sáu là nói gió thổi nhẹ lay động các hàng cây báu và mành lưới báu. Tâm thức chúng ta thường bị giao động, thể hiện cảm xúc vui buồn, thương ghét v.v... rõ rệt trước những hoàn cảnh thuận nghịch của cuộc sống. Khi được lợi (lợi) thì vui mừng hớn hở, ngược lại khi bị mất mát, tổn hại (suy) thì buồn bã, tiếc nuối khổ đau. Khi bị chê bai, chỉ trích (hủy) thì cảm thấy khó chịu rồi nổi sân hận đùng đùng, nhưng khi được khen ngợi (dự) thì vui lòng thỏa thích. Khi được mọi người xưng tán, tung hô (xưng) thì hả hê sung sướng, ngược lại khi bị chế diễu, vu khống (cơ) thì hậm hực, bức xúc không yên. Khi những điều không như ý ập đến thì buồn khổ, thở thanh (khổ); ngược lại khi mọi việc đều thuận ý vừa lòng thì mừng rỡ, vui vẻ nhảy nhót tưng bừng (lạc).</p>
    <p>Cuộc sống của con người chẳng mấy khi được bình an, vì luôn bị tám ngọn gió này chi phối. Do vậy, muốn được an vui thì chúng ta phải biết giữ vững tâm an định khi tiếp xúc, đối diện với tám ngọn gió này. Đại thừa vô sinh phương tiện môn (Đại chính 85, 1247 hạ) chỉ rõ: “Nếu thân tâm vắng lặng an ổn thì tám gió thổi không động”.</p>
    <p>Nay hành giả niệm tự tánh Di Đà nên tâm không sở trụ, và tâm được định tĩnh như được hàng cây báu (dụ cho định), và mành lưới báu (dụ cho giới) bao bọc và che chở vậy. Vì vậy cho nên kinh nói: “Sinh lòng niệm Phật, niệm Pháp, niệm Tăng” tức niệm Tam Bảo của tự tâm. Đó chính là trang nghiêm cõi tịnh, hay cõi Cực Lạc của tự tâm mình vậy.</p>
    <p>Xin hành giả liễu tri.</p>

    <div class="mt-10 mb-6">
      <h3 id="ghi-chu-3" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Ghi chú:</h3>
    </div>
    <div class="space-y-4 text-[0.95em]">
      <p>Chân ngữ dã, thật ngữ dã, như ngữ dã, bất cuống ngữ dã, bất dị ngữ dã.</p>
      <p>Tâm không vọng niệm niệm tức chánh, tâm có vọng niệm lệch ra bên ngoài nên gọi là tà.</p>
    </div>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong phần giải thích từ ngữ, cụm từ 'Tùng thị' và 'Phương Tây' được giải thích như thế nào theo quan điểm Duy tâm Tịnh độ?",
    options: {
      a: 'Là cảnh giới Thiên quốc địa lý do một vị thần tối cao kiến lập.',
      b: 'Là khoảng cách địa lý thực tế tính từ thế giới Ta-bà về phía mặt trời lặn.',
      c: 'Là xuất phát từ vọng tâm hướng về sự thanh tịnh hóa tâm hồn, không phải phương hướng vật lý bên ngoài.',
      d: 'Là khoảng thời gian từ lúc mặt trời lặn cho đến khi đêm tối bắt đầu.',
    },
    answer: 'c',
  },
  {
    question: "Trong cụm từ 'quá mười muôn ức cõi Phật', con số 'mười' (quá thập) ẩn dụ cho điều gì trong tâm thức?",
    options: {
      a: 'Mười công đức lớn của người niệm Phật đạt nhất tâm.',
      b: 'Mười căn bản phiền não hay mười kiết sử trói buộc tâm.',
      c: 'Mười giai đoạn tu tập đầu tiên thuộc hàng Thanh Văn.',
      d: 'Mười phương chư Phật đang hiện diện và thuyết pháp.',
    },
    answer: 'b',
  },
  {
    question: "Hình ảnh 'Bảy lớp bao lơn' (thất trùng lan thuẫn) bao bọc xung quanh cõi Cực Lạc tượng trưng cho điều gì?",
    options: {
      a: 'Bảy loại phiền não thô nặng ngăn cản con người giải thoát.',
      b: 'Bảy pháp tài của bậc Thánh (Thất thánh tài) giúp bảo hộ hành giả.',
      c: 'Bảy tầng trời thuộc cõi Sắc giới và Vô sắc giới.',
      d: 'Bảy phương pháp thiền định căn bản của Nhị thừa.',
    },
    answer: 'b',
  },
  {
    question: "Hình ảnh 'Bảy lớp mành lưới' (thất trùng la võng) trong kinh văn là biểu tượng ẩn dụ của khái niệm nào?",
    options: {
      a: 'Bảy mạng lưới trói buộc của ái dục trong cõi Ta-bà.',
      b: 'Bảy môn học căn bản dành cho giới Tỳ-kheo.',
      c: 'Bảy bậc Thánh nhân (Thất thánh nhân) che chở hành giả khỏi phiền não.',
      d: 'Bảy bước chân đầu tiên của đức Phật khi mới ra đời.',
    },
    answer: 'c',
  },
  {
    question: 'Bốn chất báu (vàng, bạc, lưu ly, pha lê) bao bọc giáp vòng cõi Cực Lạc biểu thị cho những đức tính nào của Niết-bàn?',
    options: {
      a: 'Giới - Định - Tuệ - Giải thoát.',
      b: 'Từ - Bi - Hỷ - Xả.',
      c: 'Khổ - Tập - Diệt - Đạo.',
      d: 'Thường - Lạc - Ngã - Tịnh.',
    },
    answer: 'd',
  },
  {
    question: "Bộ ba kiến trúc 'Thềm bậc', 'Đường đi' và 'Lầu gác' xung quanh ao báu tương ứng đại diện cho ba môn học (Tam học) nào?",
    options: {
      a: 'Giới - Định - Tuệ.',
      b: 'Tín - Hạnh - Nguyện.',
      c: 'Thân - Miệng - Ý.',
      d: 'Phật - Pháp - Tăng.',
    },
    answer: 'a',
  },
  {
    question: 'Theo văn bản, hoa sen màu trắng trong ao bảy báu biểu trưng cho gốc rễ (căn) nào?',
    options: {
      a: 'Tín căn.',
      b: 'Định căn.',
      c: 'Tuệ căn.',
      d: 'Tấn căn.',
    },
    answer: 'a',
  },
  {
    question: 'Vì sao các loài chim như Bạch hạc, Khổng tước, Ca lăng tần già ở cõi Cực Lạc không phải do nghiệp tội báo sinh ra?',
    options: {
      a: 'Vì các loài chim này đã tu tập phước báu nhiều kiếp nên được vãng sinh mang theo thân chim.',
      b: 'Vì chim ở cõi này ăn nước tám công đức nên thoát khỏi bản chất súc sinh.',
      c: 'Vì cõi Cực Lạc không có ba đường dữ và những loài chim đó do Phật A Di Đà biến hóa để tuyên lưu pháp âm.',
      d: 'Vì chúng là những vị Tỳ-kheo đã đắc quả Bồ-tát hiện thân xuống hóa độ.',
    },
    answer: 'c',
  },
  {
    question: "Hình ảnh 'tiếng gió nhẹ thổi động' (bát phong xuy động) làm lay động mành lưới và hàng cây báu ẩn dụ cho điều gì trong đời sống?",
    options: {
      a: 'Tám con đường thực hành chân chánh trong Bát thánh đạo phần.',
      b: 'Tám công đức của nguồn nước trong ao báu.',
      c: 'Tám hoàn cảnh thuận nghịch thế gian (bát phong) thử thách tâm thức con người.',
      d: 'Tám thức tâm vương bị lệch ra bên ngoài.',
    },
    answer: 'c',
  },
  {
    question: 'Theo góc nhìn đốn giáo trong văn bản, thời gian để một hành giả đạt đến cõi Cực Lạc được xác định như thế nào?',
    options: {
      a: 'Không có thời gian vật lý cố định, nhanh hay chậm tùy thuộc vào sự dụng tâm đắc lực hay biếng nhác của từng người.',
      b: 'Tốn đúng mười vạn tám ngàn giờ tụng kinh niệm Phật.',
      c: 'Được ấn định chính xác là sau khi trút hơi thở cuối cùng của đời này.',
      d: 'Cố định là đúng 10 kiếp tu hành miên mật.',
    },
    answer: 'a',
  },
]

const lesson: Lesson = {
  id: 'lesson-luoc-giai-kinh-a-di-da-bai-2-3-canh-gioi-cuc-lac',
  slug: 'bai-2-3-canh-gioi-cuc-lac',
  title: 'Cảnh giới Cực Lạc',
  type: 'article',
  status: 'published',
  order: 4,
  coverImage: materialUrl('2.3-canh-gioi-cuc-lac'),
  createdAt: '2026-10-04',
  updatedAt: '2026-10-04',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.3-canh-gioi-cuc-lac/B%E1%BA%A3n_ch%E1%BA%A5t_c%E1%BA%A3nh_C%E1%BB%B1c_L%E1%BA%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'canh-gioi-cuc-lac', label: '2.3. Cảnh giới Cực Lạc' },
        { id: 'chanh-van-1', label: 'Chánh văn:', indent: 1 },
        { id: 'giai-thich-tu-ngu-1', label: 'Giải thích từ ngữ:', indent: 1 },
        { id: 'luoc-giai-1', label: 'Lược giải:', indent: 1 },
        { id: 'chanh-van-2', label: 'Chánh văn:', indent: 1 },
        { id: 'giai-thich-tu-ngu-2', label: 'Giải thích từ ngữ:', indent: 1 },
        { id: 'luoc-giai-2', label: 'Lược giải:', indent: 1 },
        { id: 'chanh-van-3', label: 'Chánh văn:', indent: 1 },
        { id: 'giai-thich-tu-ngu-3', label: 'Giải thích từ ngữ:', indent: 1 },
        { id: 'luoc-giai-3', label: 'Lược giải:', indent: 1 },
        { id: 'ghi-chu-1', label: 'Ghi chú:', indent: 1 },
        { id: 'ghi-chu-2', label: 'Ghi chú:', indent: 1 },
        { id: 'ghi-chu-3', label: 'Ghi chú:', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.3-canh-gioi-cuc-lac/Ch%C3%A2n_T%C3%A2m_T%E1%BB%8Bnh_%C4%90%E1%BB%99.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/ntBgtFVrO4Q',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/7vAkEZolhSpxUtVI7m64It?si=g3EiSAkbQgaKAMBt6iTvaw',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Cảnh giới Cực Lạc',
    passPercentage: 70,
    questions,
  },
}

export default lesson
