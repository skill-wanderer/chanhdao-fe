import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-tinh-chu-nghiep-chuong" class="text-2xl font-bold text-primary-700 dark:text-primary-300">IX. CHƯƠNG TỊNH CHƯ NGHIỆP CHƯỚNG</h2>

    <p>Chương này xoay thẳng vào câu hỏi rất căn bản: nếu tâm Viên Giác vốn thanh tịnh, vì sao chúng sanh lại nhiễm ô và không nhập được vào đó? Đức Phật chỉ rõ gốc chướng không nằm ở Viên Giác, mà nằm nơi vọng chấp bốn tướng và thói quen thương ghét của chúng sanh.</p>

    <h3 id="ngai-tinh-chu-nghiep-chuong-bo-tat-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Tịnh Chư Nghiệp Chướng Bồ Tát hỏi Phật</h3>
    <p>Khi ấy, Ngài Tịnh Chư Nghiệp Chướng Bồ Tát đứng lên thưa rằng: Đức Phật đã vì đại chúng nói rộng nhơn địa tu hành của chư Như Lai, toàn là những việc cao siêu mầu nhiệm, khiến cho ai nghe cũng được lợi ích chưa từng có. Nhưng nếu tâm Viên Giác vốn thanh tịnh, thì nhơn gì mà bị nhiễm ô, và vì sao chúng sanh mê muội chẳng nhập được tánh Viên Giác?</p>
    <p>Ngài còn thỉnh cầu Phật khai ngộ pháp tánh, để đại chúng hiện tại và chúng sanh đời sau đều được con mắt trí huệ.</p>
    <h4 id="luoc-giai-ngai-tinh-chu-nghiep-chuong-bo-tat-hoi-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Câu hỏi của Ngài chạm đúng gốc rễ: chướng không nằm ở Viên Giác, mà nằm ở tâm mê. Khi biết hỏi đúng chỗ này, người học mới có thể tìm ra đúng phương thuốc để đối trị.</p>

    <h3 id="phat-khen-ngai-tinh-chu-nghiep-chuong-bo-tat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Tịnh Chư Nghiệp Chướng Bồ Tát</h3>
    <p>Đức Thế Tôn khen câu hỏi ấy là hay và quý, vì nó giúp ích cho cả đại chúng hiện tại lẫn chúng sanh đời sau. Phật dặn mọi người chăm chú lắng nghe, vì lời khai thị sắp nói ra là phương tiện rất sâu, không phải thứ có thể hiểu bằng sự suy nghĩ hời hợt.</p>
    <h4 id="luoc-giai-phat-khen-ngai-tinh-chu-nghiep-chuong-bo-tat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật khen không phải xã giao, mà là xác nhận rằng Ngài đã hỏi trúng điều cần hỏi. Người học đạo muốn tiến xa thì trước hết phải biết hỏi đúng chỗ, rồi mới nói đến công phu và kết quả.</p>

    <h3 id="phat-tra-loi-do-vong-chap-bon-tuong" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật trả lời: Do chúng sanh vọng chấp bốn tướng</h3>
    <p>Phật dạy rằng chúng sanh từ vô thỉ đến nay do vọng tưởng điên đảo, chấp bốn tướng Ngã, Nhơn, Chúng sanh và Thọ mạng làm thật thể của ta, rồi từ đó sinh ra hai cảnh thương và ghét. Thế là một lớp hư vọng lại nương thêm một lớp hư vọng nữa.</p>
    <p>Bởi hai lớp vọng nương nhau nên sinh ra vọng nghiệp, rồi vọng thấy có sanh tử luân hồi. Người nhàm chán sanh tử lại vọng thấy có Niết bàn, nhưng cả hai phía đều còn trong vòng mê. Viên Giác không chống cản ai cả, chính vọng nghiệp làm cho chúng sanh tự không thấy được đường vào.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Chấp bốn tướng làm thật ngã.</li>
      <li>Từ chấp ngã sinh ra thương ghét.</li>
      <li>Thương ghét lại nuôi lớn vọng nghiệp.</li>
      <li>Vọng nghiệp khiến luân hồi và Niết bàn đều thành cảnh đối đãi trong mê.</li>
    </ul>
    <h4 id="luoc-giai-phat-tra-loi-do-vong-chap-bon-tuong" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật chỉ thẳng: cái làm chướng ngại không phải Viên Giác, mà là vọng chấp. Khi còn thấy có một cái ta thật, thì mọi thương ghét, được mất, sanh tử và Niết bàn đều bị kéo vào vòng đối đãi.</p>

    <h3 id="do-vo-minh-cau-dao-khong-the-thanh-dao" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Đem vô minh mà cầu đạo thì không thể thành đạo được</h3>
    <p>Phật dạy thân tâm của chúng sanh đều do vô minh sanh ra. Đã từ vô minh sinh mà lại dùng chính cái tâm ấy để cầu đạo, thì chẳng khác gì muốn lấy cái nhân mê để sinh ra quả giác. Cách cầu như vậy chỉ làm tăng thêm lực của vô minh.</p>
    <p>Vì chấp thân này là ta, nên gặp cảnh thuận thì sinh thương yêu, gặp cảnh nghịch thì sinh oán ghét. Hai tâm thương ghét ấy lại tiếp tục nuôi dưỡng vô minh, cho nên cầu đạo mà không rời bốn tướng thì rốt cuộc khó thành.</p>
    <h4 id="luoc-giai-do-vo-minh-cau-dao-khong-the-thanh-dao" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Điểm cốt lõi ở đây là: không thể dùng vọng tâm để sửa chính vọng tâm. Nếu gốc vẫn là ngã chấp và thương ghét, thì dù cần khổ bao nhiêu cũng chỉ làm cho vô minh mạnh hơn, chứ không đưa đến quả giải thoát.</p>

    <h3 id="phat-noi-bon-tuong" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Phật nói bốn tướng</h3>
    <p>Phật phân biệt rõ bốn tướng đều là những lớp chấp vi tế, từ thô đến tế, từ dễ thấy đến rất khó thấy. Càng tu mà còn thấy có cái mình chứng, cái mình ngộ, cái mình liễu, cái mình giác, thì bốn tướng vẫn chưa dứt.</p>

    <h4 id="nga-tuong" class="text-lg font-semibold">A. Ngã tướng</h4>
    <p>Ngã tướng là tâm tự nhận biết có một cái ta thật. Lúc thân tâm điều hòa thì cái ta ẩn đi, nhưng khi bị trái ý, bị đau đớn, bị xúc chạm thì ngã tướng liền hiện rõ. Ngay cả khi người tu thấy mình có chứng quả hay đắc đạo mà còn biết có một cái mình đang chứng, thì đó vẫn là ngã tướng vi tế.</p>
    <h4 id="luoc-giai-nga-tuong" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ngã tướng có thô và tế. Thô là khi gặp cảnh nghịch thì cái ta nổi lên rất rõ; tế là khi đã tu hành, vẫn còn cái tâm biết mình có chứng đắc. Chỉ cần còn chủ thể năng chứng và đối tượng sở chứng, thì ngã tướng vẫn chưa hết.</p>

    <h4 id="nhon-tuong" class="text-lg font-semibold">B. Nhơn tướng</h4>
    <p>Nhơn tướng là chỗ tự hiểu biết mình là người, người khác cũng là người, tức là còn có một lớp phân biệt Ta và Người. Đi sâu hơn, ngay cả cái tâm cho rằng mình đã viên ngộ Niết bàn, hoặc biết rằng mình có hiểu ngộ, thì cũng vẫn là nhơn tướng.</p>
    <h4 id="luoc-giai-nhon-tuong" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Nhơn tướng vi tế hơn ngã tướng. Khi còn một chút hiểu biết để tự đánh dấu mình đã ngộ, thì vẫn còn chỗ đối đãi giữa cái biết và cái được biết.</p>

    <h4 id="chung-sanh-tuong" class="text-lg font-semibold">C. Chúng sanh tướng</h4>
    <p>Chúng sanh tướng là khi không còn chấp ngã và nhơn nữa, nhưng vẫn còn cái tâm rõ biết rằng mình đã bỏ hai tướng ấy. Bề ngoài có vẻ đã cao hơn trước, nhưng cái biết ấy vẫn là một lớp chấp vi tế.</p>
    <h4 id="luoc-giai-chung-sanh-tuong" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đây là chỗ rất khó thấy: vừa không chấp ngã, không chấp nhơn, nhưng vẫn còn tự biết mình không chấp. Cái biết ấy chính là một dấu vết vi tế của chúng sanh tướng.</p>

    <h4 id="tho-mang-tuong" class="text-lg font-semibold">D. Thọ mạng tướng</h4>
    <p>Thọ mạng tướng là chỗ cái trí giác ngộ còn tiếp tục vận hành để phá trừ các chấp trước, chưa thể tự dứt. Nó tương tục như mạng căn tiếp nối không ngừng, nên gọi là thọ mạng tướng. Nếu còn tâm soi thấy có một cái giác đang phá các tướng trước, thì vẫn chưa rời hết trần cấu.</p>
    <h4 id="luoc-giai-tho-mang-tuong" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Người tu sau khi phá được ba tướng đầu vẫn có thể còn mắc vào tướng rất vi tế này. Hình ảnh nước nóng làm tan băng chỉ cho thấy: khi băng tan rồi, cả băng lẫn nước nóng đều không còn, chỉ còn một thể tánh trong sáng mà thôi.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-0 italic">Chứng là ngã tướng.</p>
      <p class="mb-0 italic">Ngộ là nhơn tướng.</p>
      <p class="mb-0 italic">Liễu là chúng sanh tướng.</p>
      <p class="mb-0 italic">Giác là thọ mạng tướng.</p>
    </div>

    <h3 id="khong-roi-duoc-bon-tuong-nen-tu-chang-thanh-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Vì không rời được bốn tướng, nên tu chẳng thành Phật</h3>
    <p>Phật dạy các chúng sanh đời sau, bởi không rời được bốn tướng nên tuy trải qua nhiều kiếp siêng năng khổ hạnh, rốt cuộc cũng chỉ thành hữu vi mà thôi, không thể chứng Thánh quả. Gốc đã là ngã chấp thì quả giải thoát vô vi không thể sanh ra từ đó.</p>
    <p>Ví như nấu cát làm cơm, dù bỏ công bao nhiêu thì cát vẫn là cát. Tu hành mà còn mang bốn tướng thì công phu chỉ làm tăng thêm cái hữu lậu, chứ chưa chạm tới chỗ vô vi.</p>
    <h4 id="luoc-giai-khong-roi-duoc-bon-tuong-nen-tu-chang-thanh-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Điểm Phật muốn nhấn mạnh là: phải đổi gốc. Không phải chỉ tăng số lượng công phu, mà phải chuyển hướng từ ngã chấp sang vô ngã, từ đối đãi sang thanh tịnh.</p>

    <h3 id="thuong-ghet-la-goc-cua-sanh-tu-luan-hoi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Thương ghét là gốc của sanh tử luân hồi</h3>
    <p>Phật chỉ rõ: còn ưa Niết bàn là còn ngã tướng, còn ghét sanh tử cũng là còn ngã tướng. Người học đạo thường tưởng thương ghét là chuyện bình thường, nhưng thật ra chính thương ghét là gốc làm cho tâm trôi lăn trong sanh tử triền phược.</p>
    <p>Nếu còn đôi chút biết mình chứng được đạo quả thanh tịnh, tức là vẫn chưa dứt gốc ngã tướng. Khi tâm không còn thương ghét, không còn nhơn ngã bỉ thử, mới có thể thật sự nhập Viên Giác.</p>
    <blockquote class="rounded-2xl border-l-4 border-secondary-500 bg-secondary-50/70 p-4 dark:bg-secondary-950/30">
      <p class="mb-0">Mười phương cùng tụ hội</p>
      <p class="mb-0">Người người học vô vi</p>
      <p class="mb-0">Đây là trường thi Phật</p>
      <p class="mb-0">Tâm không mới được đậu</p>
    </blockquote>
    <h4 id="luoc-giai-thuong-ghet-la-goc-cua-sanh-tu-luan-hoi" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Trọng điểm không nằm ở việc thích hay ghét cảnh đời, mà ở chỗ có còn cái ta đang thích, đang ghét hay không. Khi tâm thật sự không còn bám vào hai phía, sanh tử mới thôi trói buộc.</p>

    <h3 id="phat-chi-nga-tuong-an-nup-trong-tang-thuc" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">8. Phật chỉ ngã tướng ẩn núp trong tạng thức</h3>
    <p>Nếu gặp người khen ngợi mà liền vui mừng, muốn tế độ người ấy, còn gặp người chê bai hủy báng mà liền sanh sân hận, thì đủ biết ngã tướng vẫn còn kiên cố núp ẩn trong tạng thức và thường lai vãng nơi các căn. Người tu mà chưa đoạn được chỗ này thì vẫn chưa nhập được Viên Giác thanh tịnh.</p>
    <h4 id="luoc-giai-phat-chi-nga-tuong-an-nup-trong-tang-thuc" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ngã tướng không chỉ hiện ra ở lúc gặp chuyện lớn, mà còn len lỏi trong những phản ứng rất nhỏ trước khen chê. Thấy mình vui vì được khen hay buồn vì bị chê, đó đều là dấu vết của cái ta chưa sạch.</p>

    <h3 id="khong-thay-nguoi-huy-nhuc-khong-thay-minh-thuyet-phap-do-sanh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">9. Không thấy người hủy nhục, không thấy mình thuyết pháp độ sanh</h3>
    <p>Muốn biết mình có vô ngã hay chưa, cứ xem lúc bị người hủy nhục hoặc lúc đang thuyết pháp độ sanh. Nếu bị hủy nhục mà không thấy có người hủy nhục, đó mới là vô ngã. Nếu thuyết pháp mà không thấy có Ta thuyết pháp và có người được độ, đó mới thật sự rời ngã tướng.</p>
    <p>Phật dạy rất rõ: còn thấy có ta độ sanh thì chưa phải Bồ Tát; còn thấy có ta thuyết pháp thì ngã tướng vẫn chưa đoạn.</p>
    <h4 id="luoc-giai-khong-thay-nguoi-huy-nhuc-khong-thay-minh-thuyet-phap-do-sanh" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đây là chỗ thực nghiệm rất gần. Vấn đề không chỉ là không vui không buồn, mà là trong cảnh vui buồn ấy có còn lập thêm một cái ta để đối diện hay không. Khi không còn chủ thể và đối tượng để nắm bắt, mới thật sự gần với vô ngã.</p>

    <h3 id="vi-con-nga-tuong-nen-khong-nhap-duoc-vien-giac" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">10. Vì còn ngã tướng nên không nhập được Viên Giác</h3>
    <p>Ngã tướng là trọng bịnh của hành giả. Nhưng chúng sanh đời sau thường lầm nhận cái trọng bịnh ấy làm chứng đắc Niết bàn, nên càng tinh tấn chừng nào lại càng thêm bệnh ngã tướng chừng nấy. Ngoài ra, có người còn chấp theo kiến giải và hạnh của Như Lai làm của mình, trong khi bốn tướng vẫn còn ẩn núp trong tạng thức.</p>
    <p>Vì vậy mà có ba nguyên nhân lớn làm không thể nhập Viên Giác:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Không biết bốn tướng vi tế, nên lầm cho mình đã chứng đạo.</li>
      <li>Chấp theo kiến giải và hạnh của Như Lai mà không thấy mình còn ngã chấp.</li>
      <li>Chưa đoạn ngã ái, còn sinh kiêu căng, tật đố khi thấy người khác tinh tấn.</li>
    </ul>
    <h4 id="luoc-giai-vi-con-nga-tuong-nen-khong-nhap-duoc-vien-giac" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Điểm đáng sợ nhất là tự lừa mình bằng cảm giác đã ngộ. Chưa dứt ngã ái mà đã thấy mình hơn người, thì càng tu càng xa Viên Giác.</p>

    <h3 id="phat-day-phuong-phap-nhap-vien-giac" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">11. Phật dạy phương pháp nhập Viên Giác</h3>
    <p>Phật chỉ đường rất rõ: muốn thành đạo thì phải thật tu, không phải chỉ học nhiều nói suông. Người tu cần phát tâm đại dõng mãnh, hàng phục phiền não, đoạn ác tu thiện, và giữ tâm vắng lặng khi đối cảnh.</p>

    <h4 id="khong-chi-hoc-nhieu-noi-suong" class="text-lg font-semibold">11.1. Không chỉ học nhiều nói suông</h4>
    <p>Người đời sau nếu chỉ mong thành đạo mà không cầu ngộ đạo, cứ ưa học nhiều nói suông, thì chỉ làm tăng trưởng ngã tướng. Học mà không tu thì trí không mở, mà cái ta lại lớn thêm.</p>

    <h4 id="phat-tam-dai-dung-manh-hang-phuc-phien-nao" class="text-lg font-semibold">11.2. Phát tâm đại dõng mãnh, hàng phục phiền não</h4>
    <p>Những pháp lành chưa chứng thì phải tinh tấn cho chứng; các pháp ác chưa đoạn thì phải đoạn cho được. Khi xúc cảnh không sanh tham, sân, si, mạn, ái, tật đố; nhơn, ngã, bỉ, thử, ân ái đều vắng lặng, thì Như Lai mới ấn chứng cho người ấy sẽ lần lượt thành tựu Viên Giác.</p>

    <h4 id="cau-thien-huu-tri-thuc-nhung-khong-phan-biet-sang-hen" class="text-lg font-semibold">11.3. Cầu thiện hữu tri thức nhưng không phân biệt sang hèn</h4>
    <p>Trên đường tu hành phải cầu thiện hữu tri thức chỉ dẫn để khỏi lạc tà kiến. Nhưng khi đối với thiện tri thức, nếu còn sanh tâm thương ghét, phân biệt giàu nghèo, sang hèn, thì cũng không thể nhập biển Viên Giác thanh tịnh.</p>
    <h4 id="luoc-giai-phat-day-phuong-phap-nhap-vien-giac" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật dạy đủ ba lớp: phải tu chứ không chỉ nói; phải dứt phiền não chứ không chỉ khoe kiến giải; và phải nương thiện tri thức mà không rơi vào phân biệt sang hèn. Đó là con đường thực tế để đi vào Viên Giác.</p>

    <h3 id="phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">12. Phật nói bài kệ tóm lại các nghĩa trên</h3>
    <p>Đức Thế Tôn dùng bài kệ để gom lại toàn bộ ý chính của chương: chúng sanh luân hồi từ vô thỉ đều do chấp ngã; nếu không trừ bốn tướng thì không chứng Bồ Đề; nếu còn thương ghét, tật đố, si mê thì vẫn là kẻ mê muội không nhập được Viên Giác.</p>
    <div class="space-y-1 italic">
      <p>Tịnh Nghiệp! ông nên biết:</p>
      <p>Tất cả các chúng sanh</p>
      <p>Luân hồi từ vô thỉ</p>
      <p>Đều do chấp ngã vậy.</p>
      <p>Nếu không trừ bốn tướng</p>
      <p>Chẳng chứng quả Bồ Đề.</p>
      <p>Nếu tâm còn thương ghét</p>
      <p>Hoặc tật đố si mê</p>
      <p>Ấy là kẻ mê muội,</p>
      <p>Không được nhập Viên Giác.</p>
      <p>Người muốn được giác ngộ,</p>
      <p>Trước phải trừ tham, sân,</p>
      <p>Tâm hết chấp ngã, pháp,</p>
      <p>Mới được nhập Viên Giác.</p>
      <p>Hành giả phải cầu Thầy</p>
      <p>Mới khỏi đọa tà kiến,</p>
      <p>Cầu thầy, mà phân biệt</p>
      <p>Thời không nhập Viên Giác.</p>
    </div>
    <h4 id="luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bài kệ chốt lại hai điều: muốn nhập Viên Giác thì phải trừ bốn tướng và dứt tham sân si; muốn nương thiện tri thức thì cũng phải bỏ phân biệt sang hèn. Có như vậy mới không lạc vào tà kiến và không tự trói mình trong ngã chấp.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Nguyên nhân chính yếu nào khiến chúng sanh không thể nhập được vào tánh Viên Giác thanh tịnh?',
    options: {
      a: 'Do tánh Viên Giác vốn có sự phân biệt giữa người mê và người ngộ.',
      b: 'Do chúng sanh chưa học đủ các giáo lý cao siêu của đức Như Lai.',
      c: 'Do thiếu sự gia trì và lòng đại bi của chư Phật đối với chúng sanh.',
      d: 'Do chúng sanh vọng chấp vào bốn tướng: Ngã, Nhơn, Chúng sanh và Thọ mạng.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tánh Viên Giác vốn thanh tịnh và không tự chấp thuận hay chống cản chúng sanh nhập vào [1], [2].',
      b: 'Sai. Việc chỉ ưa học nhiều nói suông mà không thực tu lại làm tăng trưởng ngã tướng, không phải nguyên nhân cốt lõi [3].',
      c: 'Sai. Kinh không hề đề cập đến việc thiếu sự gia trì, mà là do bản thân chúng sanh tự tạo ra các lớp vọng nghiệp [1].',
      d: 'Đúng. Do vọng tưởng điên đảo, chấp bốn tướng làm thật thể của ta nên sanh ra hai cảnh thương ghét, từ đó không thể nhập được Viên Giác [1].',
    },
  },
  {
    question: 'Theo lời Phật dạy, khi nào thì \"Ngã tướng\" thô hiển lộ rõ rệt nhất ở một người bình thường?',
    options: {
      a: 'Khi cơ thể đang ở trạng thái điều hòa và thoải mái.',
      b: 'Khi tâm đang tập trung cao độ vào việc nghiên cứu kinh điển.',
      c: 'Khi gặp phải những cảnh trái nghịch, đau đớn như bị lửa đốt hay gai đâm.',
      d: 'Khi đang thực hiện các nghi lễ cúng dường tại chùa.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Khi điều hòa không có gì trái ý, tợ hồ như quên mình nên ngã tướng không hiện ra [4].',
      b: 'Sai. Tập trung nghiên cứu kinh điển không phải là hoàn cảnh khiến ngã tướng thô hiển lộ [4].',
      c: 'Đúng. Khi gặp cảnh trái nghịch như gai đâm hay lửa đốt, thân thể mất thăng bằng thì cái Ta hiện ra rất rõ rệt [4].',
      d: 'Sai. Tài liệu không nhắc đến việc thực hiện nghi lễ cúng dường [4].',
    },
  },
  {
    question: 'Tại sao việc \"ưa thích Niết bàn\" và \"ghét bỏ sanh tử\" vẫn bị coi là gốc rễ của sự triền phược (ràng buộc)?',
    options: {
      a: 'Vì Niết bàn và sanh tử thực chất là hai cảnh giới hoàn toàn tách biệt.',
      b: 'Vì chúng sanh cần phải yêu cả sanh tử thì mới có thể giải thoát.',
      c: 'Vì tâm thương và ghét chính là biểu hiện của ngã tướng còn ẩn phục.',
      d: 'Vì Niết bàn không phải là một mục tiêu xứng đáng để theo đuổi.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Niết bàn và sanh tử không tách biệt với tánh Viên Giác, cốt lõi sai lầm nằm ở tâm phân biệt [5].',
      b: 'Sai. Đạo Phật không dạy phải yêu sanh tử, mà là vượt qua mọi sự thương và ghét [6].',
      c: 'Đúng. Nếu còn ưa Niết bàn hay ghét sanh tử, tức là ngã tướng ẩn phục chưa đoạn trừ được, dẫn đến triền phược [5], [6].',
      d: 'Sai. Cảnh Niết bàn tịch tịnh là một điều hay, nhưng dùng tâm \"ưa thích\" (tức ngã tướng) để theo đuổi nó mới là sai lầm [5], [6].',
    },
  },
  {
    question: 'Trong ví dụ về \"nước nóng và băng\", \"nước nóng\" tượng trưng cho điều gì trong quá trình tu hành?',
    options: {
      a: 'Các phiền não tham, sân, si.',
      b: 'Trí huệ dùng để phá trừ bốn tướng.',
      c: 'Mạng căn tương tục của con người.',
      d: 'Sự mê muội của chúng sanh từ vô thỉ.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Băng mới là ảnh dụ cho tâm bị mê muội kết thành các tướng phiền não [7].',
      b: 'Đúng. Nước nóng là dụ cho trí huệ được sử dụng để làm tiêu tan băng (bốn tướng) [7].',
      c: 'Sai. Mạng căn tương tục được ví với \"thọ mạng tướng\", không phải nước nóng [8].',
      d: 'Sai. Sự mê muội khiến tâm vốn như nước biến thành băng [7].',
    },
  },
  {
    question: 'Một người tu hành được xác nhận là đã thực sự đạt đến trạng thái \"Vô ngã\" khi nào?',
    options: {
      a: 'Khi họ quyết định rời bỏ thế gian để sống ẩn dật trong rừng sâu.',
      b: 'Khi họ không còn thấy mình là người thuyết pháp và không thấy có người bị hủy nhục.',
      c: 'Khi họ có thể thuyết giảng giáo pháp một cách trôi chảy và uyên bác.',
      d: 'Khi họ nhận được sự khen ngợi và kính trọng từ đông đảo đại chúng.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tu trong rừng sâu nếu gặp cảnh mừng giận mà tâm nổi lên thì ngã tướng vẫn y nguyên [9].',
      b: 'Đúng. Khi bị hủy nhục mà không thấy có người bị hủy nhục, thuyết pháp không thấy có Ta thuyết pháp, như thế mới thật là Vô ngã [10], [11].',
      c: 'Sai. Thuyết giảng trôi chảy nhưng vẫn thấy có \"Ta thuyết pháp\" thì ngã tướng chưa đoạn [10].',
      d: 'Sai. Nếu nhận được khen ngợi mà sanh vui mừng là ngã tướng vi tế vẫn đang lai vãng [12].',
    },
  },
  {
    question: 'Theo văn bản, ví dụ \"nhận giặc làm con\" ám chỉ sai lầm nào của người tu hành?',
    options: {
      a: 'Nuôi dưỡng những ý nghĩ ác độc trong khi đang tụng kinh.',
      b: 'Đem tiền bạc quý giá cho những người không xứng đáng.',
      c: 'Lầm tin vào những vị tà sư không có đạo hạnh.',
      d: 'Lầm nhận các ngã tướng có chứng có ngộ là quả vị Niết bàn.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Văn bản không nhắc đến việc nuôi dưỡng ác niệm trong khi tụng kinh [13].',
      b: 'Sai. Ví dụ không nói đến vấn đề sử dụng tiền bạc [13].',
      c: 'Sai. Việc lầm tin tà sư được đề cập ở mục khác, không phải ý nghĩa của ví dụ này [13].',
      d: 'Đúng. Lầm nhận các ngã tướng (có chứng, có ngộ) là thành tựu quả Niết bàn thì chẳng khác nào nhận giặc làm con phá tan gia tài [13].',
    },
  },
  {
    question: 'Điều gì tạo nên \"Thọ mạng tướng\" trong tâm thức của hành giả?',
    options: {
      a: 'Sự phân biệt giữa mình và những chúng sanh khác trong cõi đời.',
      b: 'Cái trí giác ngộ còn tương tục tu tập các nghiệp vô lậu mà chưa tự trừ được.',
      c: 'Việc ghi nhớ tất cả các kiếp sống quá khứ của bản thân.',
      d: 'Sự mong cầu được sống lâu để tiếp tục hưởng thụ dục lạc.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Sự phân biệt mình và người khác nằm ở nhơn tướng và chúng sanh tướng [14], [15].',
      b: 'Đúng. Trí giác ngộ tương tục tu tập nghiệp vô lậu chưa thể tự đoạn được, giống như mạng căn tiếp tục, gọi là thọ mạng tướng [8], [7].',
      c: 'Sai. Ghi nhớ kiếp quá khứ không được quy định là thọ mạng tướng trong văn bản này [8].',
      d: 'Sai. Ở đây không mang ý nghĩa cầu thọ mạng thế tục, mà là sự tương tục vi tế của trí phá chấp [8].',
    },
  },
  {
    question: 'Phật dạy hành giả cần có thái độ như thế nào đối với bậc Thiện hữu tri thức (Minh sư)?',
    options: {
      a: 'Phải chọn lựa những vị có địa vị cao sang và giàu có để nương tựa.',
      b: 'Nên giữ khoảng cách và không cần quá kính trọng để tránh bị lệ thuộc.',
      c: 'Cầu sự chỉ dẫn mà không phân biệt sang hèn hay sanh tâm thương ghét.',
      d: 'Chỉ nghe theo những lời dạy phù hợp với kiến giải cá nhân của mình.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Phật cấm hành giả phân biệt giàu nghèo hay sang hèn [16].',
      b: 'Sai. Phải sanh tâm kính trọng, y pháp bất y nhơn [16].',
      c: 'Đúng. Hành giả phải cầu thiện hữu tri thức nhưng không được phân biệt sang hèn, sanh tâm thương ghét, nếu không sẽ không nhập được Viên Giác [3], [17].',
      d: 'Sai. Chấp vào kiến giải cá nhân vốn là một dạng mắc kẹt vào ngã tướng [18], [16].',
    },
  },
  {
    question: 'Tại sao việc \"học nhiều nói suông\" lại bị coi là chướng ngại cho việc thành Đạo?',
    options: {
      a: 'Vì Phật không khuyến khích việc lưu truyền giáo pháp bằng lời nói.',
      b: 'Vì nó khiến hành giả dễ bị mệt mỏi và mất đi sức khỏe thể chất.',
      c: 'Vì giáo pháp của Phật quá phức tạp để có thể ghi nhớ hết.',
      d: 'Vì việc này chỉ làm tăng trưởng ngã tướng và kiến giải cá nhân thay vì thực chứng.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Việc thuyết pháp độ sanh vẫn được ca ngợi nếu hành giả không còn thấy cái Ta thuyết pháp [10].',
      b: 'Sai. Sức khỏe không phải là vấn đề được nêu ra để phê phán việc này [3].',
      c: 'Sai. Vấn đề cốt lõi không phải giáo pháp phức tạp, mà là sự thiếu dõng mãnh hàng phục phiền não [3].',
      d: 'Đúng. Phật dạy việc không lo thực tu mà chỉ ưa học nhiều nói suông sẽ chỉ làm tăng trưởng ngã tướng [3], [16].',
    },
  },
  {
    question: 'Theo văn bản, \"Ngã tướng\" vi tế thường ẩn núp và lai vãng ở đâu trong con người hành giả?',
    options: {
      a: 'Ẩn núp trong tạng thức và lai vãng nơi các căn (mắt, tai, mũi...).',
      b: 'Chỉ xuất hiện khi hành giả tiếp xúc với những người ác.',
      c: 'Nằm ở các huyệt đạo trên cơ thể vật lý.',
      d: 'Chỉ tồn tại trong những giấc mơ khi hành giả không tỉnh táo.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Ngã tướng tuy được lột bỏ lớp thô trọng nhưng vẫn kiên cố núp ẩn trong tạng thức, lai vãng không gián đoạn nơi các căn: mắt, tai, mũi, lưỡi [12].',
      b: 'Sai. Ngay cả khi tiếp xúc với người khen ngợi (cảnh thuận), sự vui mừng muốn tế độ cũng làm hiện lộ ngã tướng [12].',
      c: 'Sai. Bản văn không lý giải ngã tướng ẩn tại huyệt đạo cơ thể [12].',
      d: 'Sai. Ngã tướng lai vãng không gián đoạn trong mọi lúc chứ không chỉ trong giấc mơ [12].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-9-chuong-tinh-chu-nghiep-chuong',
  slug: 'bai-thu-9-chuong-tinh-chu-nghiep-chuong',
  title: 'Bài Thứ 9 - Chương Tịnh Chư Nghiệp Chướng',
  type: 'article',
  status: 'published',
  order: 12,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-9-chuong-tinh-chu-nghiep-chuong/V%C6%B0%E1%BB%A3t_qua_r%C3%A0o_c%E1%BA%A3n_B%E1%BB%91n_T%C6%B0%E1%BB%9Bng.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-tinh-chu-nghiep-chuong', label: 'IX. CHƯƠNG TỊNH CHƯ NGHIỆP CHƯỚNG' },
        { id: 'ngai-tinh-chu-nghiep-chuong-bo-tat-hoi-phat', label: '1. Ngài Tịnh Chư Nghiệp Chướng Bồ Tát hỏi Phật', indent: 1 },
        { id: 'luoc-giai-ngai-tinh-chu-nghiep-chuong-bo-tat-hoi-phat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-khen-ngai-tinh-chu-nghiep-chuong-bo-tat', label: '2. Phật khen Ngài Tịnh Chư Nghiệp Chướng Bồ Tát', indent: 1 },
        { id: 'luoc-giai-phat-khen-ngai-tinh-chu-nghiep-chuong-bo-tat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-tra-loi-do-vong-chap-bon-tuong', label: '3. Phật trả lời: Do chúng sanh vọng chấp bốn tướng', indent: 1 },
        { id: 'luoc-giai-phat-tra-loi-do-vong-chap-bon-tuong', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'do-vo-minh-cau-dao-khong-the-thanh-dao', label: '4. Đem vô minh mà cầu đạo thì không thể thành đạo được', indent: 1 },
        { id: 'luoc-giai-do-vo-minh-cau-dao-khong-the-thanh-dao', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-noi-bon-tuong', label: '5. Phật nói bốn tướng', indent: 1 },
        { id: 'nga-tuong', label: 'A. Ngã tướng', indent: 2 },
        { id: 'luoc-giai-nga-tuong', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'nhon-tuong', label: 'B. Nhơn tướng', indent: 2 },
        { id: 'luoc-giai-nhon-tuong', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'chung-sanh-tuong', label: 'C. Chúng sanh tướng', indent: 2 },
        { id: 'luoc-giai-chung-sanh-tuong', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'tho-mang-tuong', label: 'D. Thọ mạng tướng', indent: 2 },
        { id: 'luoc-giai-tho-mang-tuong', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'khong-roi-duoc-bon-tuong-nen-tu-chang-thanh-phat', label: '6. Vì không rời được bốn tướng, nên tu chẳng thành Phật', indent: 1 },
        { id: 'luoc-giai-khong-roi-duoc-bon-tuong-nen-tu-chang-thanh-phat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'thuong-ghet-la-goc-cua-sanh-tu-luan-hoi', label: '7. Thương ghét là gốc của sanh tử luân hồi', indent: 1 },
        { id: 'luoc-giai-thuong-ghet-la-goc-cua-sanh-tu-luan-hoi', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-chi-nga-tuong-an-nup-trong-tang-thuc', label: '8. Phật chỉ ngã tướng ẩn núp trong tạng thức', indent: 1 },
        { id: 'luoc-giai-phat-chi-nga-tuong-an-nup-trong-tang-thuc', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'khong-thay-nguoi-huy-nhuc-khong-thay-minh-thuyet-phap-do-sanh', label: '9. Không thấy người hủy nhục, không thấy mình thuyết pháp độ sanh', indent: 1 },
        { id: 'luoc-giai-khong-thay-nguoi-huy-nhuc-khong-thay-minh-thuyet-phap-do-sanh', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'vi-con-nga-tuong-nen-khong-nhap-duoc-vien-giac', label: '10. Vì còn ngã tướng nên không nhập được Viên Giác', indent: 1 },
        { id: 'luoc-giai-vi-con-nga-tuong-nen-khong-nhap-duoc-vien-giac', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-day-phuong-phap-nhap-vien-giac', label: '11. Phật dạy phương pháp nhập Viên Giác', indent: 1 },
        { id: 'khong-chi-hoc-nhieu-noi-suong', label: '11.1. Không chỉ học nhiều nói suông', indent: 2 },
        { id: 'phat-tam-dai-dung-manh-hang-phuc-phien-nao', label: '11.2. Phát tâm đại dõng mãnh, hàng phục phiền não', indent: 2 },
        { id: 'cau-thien-huu-tri-thuc-nhung-khong-phan-biet-sang-hen', label: '11.3. Cầu thiện hữu tri thức nhưng không phân biệt sang hèn', indent: 2 },
        { id: 'luoc-giai-phat-day-phuong-phap-nhap-vien-giac', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: '12. Phật nói bài kệ tóm lại các nghĩa trên', indent: 1 },
        { id: 'luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: 'LƯỢC GIẢI', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-9-chuong-tinh-chu-nghiep-chuong/Beyond_the_Ego.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/Wfp1BZSsQck',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/48v0UUOuZ6t6yZDotOPLYM?utm_source=generator&si=0301b506ccec4356',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Tịnh Chư Nghiệp Chướng',
    passPercentage: 70,
    questions,
  },
}

export default lesson
