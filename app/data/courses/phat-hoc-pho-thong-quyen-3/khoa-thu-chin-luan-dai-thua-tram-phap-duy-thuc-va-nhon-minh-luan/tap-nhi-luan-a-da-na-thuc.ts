import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHÌ</p>
      <p class="mb-2 font-semibold">LUẬN A ĐÀ NA THỨC</p>
      <h2 id="tap-nhi-luan-a-da-na-thuc" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">TẬP NHÌ - LUẬN A ĐÀ NA THỨC</h2>
    </div>

    <h3 id="neu-cai-ten" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Nêu cái tên</h3>
    <p>Tên A Đà Na thức xuất xứ từ đâu? Luận này trước hết nêu lại nguồn gốc kinh điển của danh từ ấy để người học thấy rằng đây không phải một khái niệm suy diễn, mà là một danh xưng đã có chỗ đứng rõ ràng trong các kinh luận Đại thừa.</p>

    <h4 id="bai-tung-giai-tham-mat" class="text-lg font-semibold">Bài tụng trong kinh Giải Thâm Mật</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>A Đà Na thức thậm thâm tế</p>
        <p>Tập khí chủng tử như bộc lưu</p>
        <p>Ngã ư phàm ngu bất khai diễn</p>
        <p>Khủng bỉ phân biệt chấp vi ngã</p>
      </div>
    </div>
    <p>Nghĩa là: thức A Đà Na rất thậm thâm và tế nhị; các tập khí chủng tử của nó sanh diệt như dòng nước thác. Đức Phật đối với hàng phàm phu và Nhị thừa không giảng nói thức này, vì sợ họ phân biệt rồi chấp làm Ngã.</p>

    <h4 id="bai-tung-thu-lang-nghiem" class="mt-8 text-lg font-semibold">Bài tụng trong kinh Thủ Lăng Nghiêm</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Đà na vi tế thức</p>
        <p>Tập khí thành bộc lưu</p>
        <p>Chơn, phi chơn khủng mê</p>
        <p>Ngã thường bất khai diễn</p>
      </div>
    </div>
    <p>Nghĩa là: thức A Đà Na rất vi tế; các tập khí như dòng nước thác. Vì sợ hàng phàm phu và Nhị thừa chấp thức này là “chơn” hay “phi chơn”, nên Đức Phật không giảng nói thức này cho họ nghe.</p>
    <p>Thức này được xem là căn bản của cả chơn lẫn vọng; Thánh hay Phàm đều nương nơi đây. Bởi vậy, trong Duy thức tông, thức A Đà Na được đặc biệt chú trọng.</p>

    <h4 id="dai-y-hai-bai-tung" class="mt-8 text-lg font-semibold">Đại ý hai bài tụng</h4>
    <p>Đại ý của hai bài tụng là: A Đà Na rất thâm sâu và tế nhị, tóm chứa các tập khí chủng tử từ vô thỉ đến nay, làm chủ gìn giữ báo thân của chúng hữu tình trong một thời kỳ. Nó sanh diệt rất vi tế, nhìn như thường mà thật ra luôn biến động, giống như dòng thác ở xa thấy yên mà thật ra chảy rất mau.</p>
    <p>Không chỉ chúng phàm phu không biết, mà hàng Tiểu thừa chấp pháp cũng có thể mê lầm thức này. Nếu chấp thức này là “chơn” thì rơi vào tăng ích; nếu chấp thức này là “phi chơn” thì rơi vào tổn giảm. Vì sợ chúng sanh phân biệt rồi cố chấp thức này làm thật ngã, thật pháp, nên Đức Phật không vội khai diễn cho họ.</p>
    <p>Luận cũng nhấn mạnh rằng Du Già Sư Địa Luận hoàn toàn căn cứ kinh Giải Thâm Mật để giải thích thức này; ngoài ra còn nhiều chỗ khác trong Nhiếp Đại thừa luận, Hiển dương Thánh giáo luận và Thành Duy thức luận đều có nói đến danh xưng A Đà Na thức.</p>

    <h3 id="dinh-gioi-nghia" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Định giới nghĩa</h3>
    <p>“Giới nghĩa” là định giới hạn về danh nghĩa. Tiếng Phạn gọi là A Đà Na, Hán dịch là “Trì”, nghĩa là giữ gìn. Trong Thành Duy thức luận quyển ba, thức này được giải thích qua ba công năng then chốt.</p>

    <h4 id="ba-cong-nang-cua-a-da-na" class="text-lg font-semibold">Ba công năng của A Đà Na thức</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1 italic">
        <p>Dĩ năng chấp trì chư pháp chủng tử</p>
        <p>Cập năng chấp thọ sắc căn y xứ</p>
        <p>Diệc năng chấp thủ kiết sanh tương tục</p>
        <p>Cố thuyết thử thức danh A Đà Na</p>
      </div>
    </div>
    <div class="space-y-3">
      <p><strong>Chấp trì:</strong> giữ gìn chủng tử của các pháp.</p>
      <p><strong>Chấp thọ:</strong> giữ chịu căn thân và thế giới.</p>
      <p><strong>Chấp thủ:</strong> nắm giữ sự kết nối đời sau.</p>
    </div>

    <h4 id="chap-thu-kiet-sanh-tuong-tuc" class="mt-8 text-lg font-semibold">1. Giữ lấy việc kết nối đời sau</h4>
    <p>Sở dĩ có việc kiết sanh tương tục là vì có phiền não, nghiệp và sanh, tức “Hoặc, Nghiệp và Khổ”. Do phiền não mà tạo nghiệp; do nghiệp mà tiếp nối đời sau để thọ khổ. “Kiết sanh” là bắt đầu từ lúc kết thai cho đến khi sanh ra.</p>
    <p>Từ thân bổn hữu đến tử hữu, từ tử hữu đến trung hữu, rồi đến hậu hữu, dòng sanh tử ấy muốn liên tục không gián đoạn thì phải có một cái gì luôn lưu hành để nắm giữ. Luận xác định cái đó chính là thức A Đà Na. Nếu không có thức này, người chết rồi sẽ mất hẳn, không còn tái sanh, và như thế sẽ rơi vào đoạn kiến.</p>
    <p>Luận còn nhắc lại ý trong kinh Lăng Nghiêm về vua Ba Tư Nặc: trước kia vua theo ngoại đạo, chấp đoạn diệt nên luôn ôm lòng lo buồn; sau khi nghe Phật giảng pháp sanh tử tương tục thì mới hiểu rằng thân này hoại diệt nhưng dòng tiếp nối không đứt tuyệt.</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-0">Hiểu được thức A Đà Na nắm giữ việc kiết sanh tương tục là một cách đối trị cái chấp “chết là hết” của phàm phu và ngoại đạo.</p>
    </div>

    <h4 id="chap-tho-sac-can-y-xu" class="mt-8 text-lg font-semibold">2. Giữ chịu sắc căn và thế giới</h4>
    <p>“Sắc căn y xứ” có hai lớp nghĩa. Một là chỉ năm căn tinh tế bên trong và chỗ nương của chúng nơi thân thô bên ngoài. Hai là chỉ cả chánh báo lẫn y báo, tức thân hữu tình và thế giới đang làm chỗ cư trú của hữu tình.</p>
    <p>Nói cách khác, đây là công năng gìn giữ báo thân của chúng hữu tình được tương tục tồn tại trong một thời kỳ, dù toàn bộ pháp hữu vi đều vô thường sát na sanh diệt. Chữ “chấp thọ” còn có nghĩa là chấp thân này làm tự thể, khiến phát sinh cảm giác và lãnh thọ.</p>
    <p>Luận cũng nêu thêm rằng trong thế giới vật chất, các vật và vi trần tuy chướng ngại lẫn nhau mà vẫn giữ được tự thể tồn tại, đó cũng do công năng giữ gìn của thức A Đà Na, chứ không phải do một thứ “thân thức” nơi khoáng vật hay thực vật như có người lầm tưởng.</p>

    <h4 id="chap-tri-chung-tu-cac-phap" class="mt-8 text-lg font-semibold">3. Giữ gìn chủng tử của các pháp</h4>
    <p>“Các pháp” ở đây chỉ toàn bộ pháp hữu vi, gồm hai loại:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Hữu lậu hữu vi:</strong> các pháp tạp nhiễm thuộc loài Dị sanh.</li>
      <li><strong>Vô lậu hữu vi:</strong> các pháp thanh tịnh thuộc hàng Thánh Hiền.</li>
    </ul>
    <p>“Chủng tử” cũng có hai loại:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Nghiệp chủng:</strong> tức Dị thục tập khí.</li>
      <li><strong>Pháp chủng:</strong> tức Đẳng lưu tập khí.</li>
    </ul>
    <p>Mỗi pháp khi khởi hiện hành đều từ chủng tử của chính nó mà khởi. Nếu không có một thức làm chỗ chứa giữ thì các chủng tử ấy phải tản mất; mà chủng tử tản mất thì hiện hành thế gian và xuất thế gian cũng không thể thành lập.</p>
    <p>Luận lần lượt bác bỏ các khả năng khác: sắc pháp không thể chứa chủng tử vì tự tánh là biến ngại; tâm sở không thể chứa vì không tự tại; sáu thức trước không thể chứa vì có khi gián đoạn; thức thứ Bảy không thể chứa vì là hữu phú vô ký và nếu nó giữ chủng tử thì khi chuyển thành trí thanh tịnh sẽ phát sinh mâu thuẫn.</p>
    <p>Do đó, chỉ có thức A Đà Na với tánh vô phú vô ký, nhất loại sanh diệt tương tục, mới có thể duy trì chủng tử của các pháp. Cảnh giới này rốt ráo chỉ Phật mới biết trọn vẹn, còn Bồ Tát chỉ biết từng phần.</p>

    <h3 id="giai-thich-va-chon-lua" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. Giải thích và chọn lựa</h3>
    <p>Thành Duy thức luận cho biết thức thứ Tám tùy theo công năng và phương diện mà có nhiều tên gọi khác nhau. Luận này nêu các tên ấy ra, rồi chọn lấy danh từ nào vừa rộng vừa chính xác nhất.</p>

    <h4 id="cac-ten-goi-cua-thuc-thu-tam" class="text-lg font-semibold">Các tên gọi của thức thứ tám</h4>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Tâm:</strong> vì là chỗ tích tập để các pháp huân chủng tử vào.</li>
      <li><strong>A Đà Na:</strong> vì giữ gìn chủng tử và thân thể hữu tình không mất.</li>
      <li><strong>Sở tri y:</strong> vì là chỗ y chỉ của các pháp nhiễm và tịnh.</li>
      <li><strong>Chủng tử thức:</strong> vì chứa giữ chủng tử của cả pháp hữu lậu lẫn vô lậu.</li>
      <li><strong>A lại da:</strong> vì có nghĩa Tàng thức với ba mặt Năng tàng, Sở tàng và Ngã ái chấp tàng.</li>
      <li><strong>Dị thục thức:</strong> vì dẫn dắt hữu tình đi trong sanh tử để lãnh thọ quả báo.</li>
      <li><strong>Vô cấu thức:</strong> vì nơi quả Phật, thức này hoàn toàn thanh tịnh vô lậu.</li>
    </ul>

    <h4 id="chon-danh-tu-a-da-na" class="mt-8 text-lg font-semibold">Chọn danh từ A Đà Na</h4>
    <p>Sau khi so sánh, luận không chọn “A lại da” vì nghĩa hẹp, chỉ ứng với phàm phu và Thánh hữu học; không chọn “Dị thục thức” vì đến quả Phật thì tên ấy không còn; không chọn “Vô cấu thức” vì tên đó chỉ dành cho Phật; không chọn “Tâm” hay “Căn bản thức” vì quá rộng, dễ lẫn lộn; cũng không chọn “Đệ bát thức” vì chỉ nêu số mục chứ không nói được tướng và dụng.</p>
    <p>“Sở tri y” tuy khá rộng nhưng cái nghĩa “y” còn có thể thông sang các pháp khác. “Nhứt thế chủng thức” lại chỉ nổi bật một mặt là chứa chủng tử. “Như Lai tàng” thiên về phần thanh tịnh bị che giấu, không chỉ trọn vẹn cả nhiễm lẫn tịnh.</p>
    <p>Tóm lại, danh từ “A Đà Na” được chọn vì vừa tinh xác, vừa nêu bật nhiệm vụ giữ gìn, chấp thọ và chấp thủ của thức này.</p>

    <h3 id="chi-cai-the-cua-thuc-a-da-na" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. Chỉ cái “thể” của thức A Đà Na</h3>
    <p>Đây là phần cốt yếu của bổn luận. Có danh nghĩa thì tất phải có cái thể làm chỗ nương. Nhưng cái thể của A Đà Na không phải là một vật riêng có thể tách khỏi các pháp mà đem ra chỉ bày như một đối tượng hữu hình.</p>

    <h4 id="thuc-a-da-na-tuc-la-cac-phap" class="text-lg font-semibold">Thức A Đà Na tức là các pháp</h4>
    <p>Luận trả lời rất thẳng: thể của A Đà Na thức tức là các pháp. Không thể rời trời, đất, nhơn, vật mà riêng tìm ra một thức A Đà Na nằm ngoài tất cả. Chỉ vì chúng sanh luôn bị ngã chấp, pháp chấp cùng hai chướng che lấp nên chỉ thấy cảnh vật tạp nhiễm mà không nhận ra nền tảng Duy thức ấy.</p>
    <p>Ví như người đau mắt chỉ thấy hoa đốm giữa hư không mà không thấy hư không. Cũng vậy, vì hai chấp hiện hành nên chúng sanh chỉ thấy hiện tượng chứ không thấy được thức A Đà Na đang biểu hiện toàn bộ cảnh giới ấy.</p>
    <p>Luận cũng nói rõ: phần nhiều chúng ta biết thức A Đà Na chỉ nhờ kinh luận và lý luận, chứ mắt không thấy, tai không nghe. Cũng như người chưa tới Lô Sơn mà chỉ nghe tả cảnh rồi suy đoán núi nọ, khe kia; biết là biết, nhưng chưa phải trực tiếp thân chứng.</p>

    <h4 id="tri-tu-tru-hau-dac" class="mt-8 text-lg font-semibold">Trí Tự trụ hậu đắc</h4>
    <p>Muốn trực tiếp biết thức A Đà Na phải là bậc Đại Thánh dùng “Trí tự trụ hậu đắc”. Chữ “Đại” để phân biệt với Tiểu thừa; chữ “Thánh” để phân biệt với phàm phu, tức phải là hàng Bồ Tát từ Sơ địa trở lên.</p>
    <p>Luận phân trí làm hai: Căn bản trí và Hậu đắc trí. Hậu đắc trí lại chia thành Tự trụ hậu đắc trí và Thiệp tha hậu đắc trí. Riêng thức A Đà Na chỉ có Tự trụ hậu đắc trí mới chứng biết trực tiếp được.</p>
    <p>Bồ Tát nhờ Bình đẳng tánh trí và Diệu quan sát trí mà khởi Tự trụ hậu đắc trí, từ đó thấy rõ tất cả pháp đều là thức A Đà Na. Đến quả Phật, bốn trí viên mãn thì sự hiểu biết ấy mới rốt ráo.</p>

    <h4 id="tri-can-ban-va-chan-nhu" class="mt-8 text-lg font-semibold">Trí căn bản và Chơn như</h4>
    <p>Luận nhấn mạnh rằng đoạn trên chỉ cái thể của A Đà Na nơi mặt sự tướng, chứ không phải chỉ thẳng thể tánh Chơn như. Thể tánh Chơn như chỉ có Căn bản trí mới thân chứng được.</p>
    <p>Nói gọn: Trí Tự trụ hậu đắc thấy tất cả pháp đều là thức A Đà Na; còn Trí Căn bản thấy tất cả pháp đều là Chơn như. Cùng một thực tại, nhưng tùy trí mà hiện lượng sai khác.</p>

    <h4 id="tri-thiep-tha-hau-dac" class="mt-8 text-lg font-semibold">Trí Thiệp tha hậu đắc</h4>
    <p>Trí Thiệp tha hậu đắc là trí dùng trong mọi pháp môn giáo hóa: Tứ nhiếp, Lục độ, thượng cầu Phật đạo, hạ hóa hữu tình. Nhờ trí này, Phật và Bồ Tát biết căn cơ, ham muốn và sự sai biệt của muôn loài để tùy duyên nói pháp, nhưng đồng thời vẫn thấy các pháp ấy như huyễn hóa, đều do Duy thức biến hiện.</p>

    <h4 id="tri-cua-nhi-thua-va-di-sanh" class="mt-8 text-lg font-semibold">Trí của Nhị thừa và Dị sanh</h4>
    <p>Trí của Nhị thừa duyên nơi Tứ đế và các pháp nhiễm tịnh, tuy chứng được nhân không nhưng còn pháp chấp. Trí của Dị sanh thì tùy theo nghiệp báo mà tự duyên cảnh vũ trụ, vật ngã riêng của mình, rồi từ đó khởi tánh Biến kế, chấp ngã chấp pháp.</p>
    <p>Vì vậy, cùng một dòng sông mà người thấy là nước, ngạ quỷ thấy là lửa, chư thiên thấy là lưu ly. Cảnh sở tri sai khác là do nghiệp lực và vọng thức sai khác. Rời các lớp phân biệt ấy thì chỉ còn “Nhứt chơn pháp giới”, chỗ ngôn ngữ và suy nghĩ đều bặt dứt.</p>

    <h3 id="hoi-cac-ten-de-giai-thich" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. Hội các tên để giải thích</h3>
    <p>Thức A Đà Na là cảnh bị duyên của Trí Tự trụ hậu đắc. Xét theo từng phương diện, thức này có thể được gọi là A Đà Na, Dị thục thức, Sơ năng biến, Yêm ma la thức, Tâm, Căn bản thức, Đệ bát thức, Nhứt thế chủng thức hay Như Lai tàng.</p>
    <p>Mỗi danh xưng nêu bật một nhiệm vụ riêng: khi nhấn mạnh việc chứa chủng tử thì gọi A Đà Na; khi nhấn mạnh việc lãnh báo thì gọi Dị thục; khi nhấn mạnh việc biến hiện muôn pháp thì gọi Sơ năng biến; khi nhấn mạnh phần thanh tịnh viên mãn thì gọi Yêm ma la hay Vô cấu thức. Tổng hợp lại, chính vì một thức này đảm nhiệm nhiều vai trò nên mới có nhiều tên như vậy.</p>

    <h3 id="chi-nhung-cho-sai-lam" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. Chỉ những chỗ sai lầm</h3>
    <p>Vì không hiểu rõ thức A Đà Na nên trong lịch sử phiên dịch và chú giải đã phát sinh nhiều nhầm lẫn. Luận nêu ra vài chỗ tiêu biểu để biện minh và phá chấp.</p>

    <h4 id="sai-lam-lan-thu-nhat" class="text-lg font-semibold">1. Lầm A Đà Na với thức thứ Bảy</h4>
    <p>Tôn Địa luận nhân thấy A Đà Na có nghĩa “chấp trì” rồi lầm đồng với thức thứ Bảy là thức chấp ngã. Luận chỉ rõ: “chấp trì” của A Đà Na là giữ gìn chủng tử, căn thân và thế giới, hoàn toàn khác với “chấp ngã” của thức thứ Bảy. Đây là một sai lầm lớn vì đánh đồng hai chức năng khác nhau.</p>

    <h4 id="sai-lam-lan-thu-hai" class="mt-8 text-lg font-semibold">2. Cho rằng diệt bảy thức trước để còn thức thứ Tám thuần tịnh</h4>
    <p>Một sai lầm khác là nói thức thứ Tám vốn thanh tịnh, thức thứ Bảy nhiễm ô, và khi chuyển thức thành trí thì phải diệt bảy thức trước để còn thức thứ Tám thuần tịnh. Luận bác bỏ vì ngoài quả Phật, thức thứ Tám chưa rời hết nhiễm; nếu nó đã thuần tịnh từ trước thì các pháp duyên khởi tạp nhiễm không còn nền tảng để thành lập.</p>
    <p>Nếu lại nói bảy thức trước giữ chủng tử thay cho thức thứ Tám thì cũng vô lý, vì bảy thức trước không đủ điều kiện duy trì chủng tử của các pháp. Hơn nữa, nói diệt hết bảy thức trước còn kéo theo hệ quả chư Phật không đủ bốn trí.</p>

    <h4 id="sai-lam-lan-thu-ba" class="mt-8 text-lg font-semibold">3. Lập riêng thức thứ Chín là Yêm ma la</h4>
    <p>Ngài Chân Đế từng nói Yêm ma la là thức thứ Chín, còn thức thứ Tám là thức nhiễm tịnh hòa hiệp. Luận này phản bác rằng đó chỉ là phần thanh tịnh của thức thứ Tám được hiển lộ, chứ không phải có một thức riêng hoàn toàn khác. Nói cách khác, không phải diệt toàn thể thức thứ Tám để sinh ra một thức thứ Chín mới.</p>
    <p>Ngay cả khi viện dẫn bài tụng “Như Lai vô cấu thức / Thị tịnh vô lậu giới / Giải thoát nhứt thế chướng / Viên cảnh trí tương ưng”, điều được nói đến vẫn là phần thanh tịnh của thức thứ Tám cùng các tâm sở thiện tương ưng, chứ không phải một thức thứ Chín tách biệt.</p>

    <h3 id="lap-tong" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. Lập tông</h3>
    <p>Điểm thù thắng của Duy Thức tông nằm ở chỗ nêu rõ thức thứ Tám. Nếu hiểu được thức A Đà Na thì sẽ hiểu được “tất cả pháp Duy thức”, và từ đó cũng có thể thành lập nghĩa “nhứt thế pháp như huyễn”. Vì vậy, bổn luận lấy việc nói rõ tất cả pháp Duy thức làm tông chỉ.</p>

    <h3 id="cong-dung-cua-luan" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII. Công dụng của luận này</h3>
    <p>Nếu chỉ đứng trên tánh Biến kế sở chấp để phá ngã phá pháp thì có thể rơi vào chỗ nghiêng về “không”. Nếu chỉ đề xướng cảnh trí viên dung mầu nhiệm mà thiếu lối chỉ thẳng thực hành thì lại dễ mắc vào chỗ huyền diệu xa rời người học.</p>
    <p>Công dụng thù thắng của bổn luận là chỉ thẳng vào tâm người để nói rõ thức A Đà Na. Vì chỉ rõ tất cả pháp do thức này biểu hiện nên giúp người không rơi vào tổn giảm; vì thấy các pháp như huyễn hóa nên cũng không rơi vào tăng ích. Nói gọn, luận nhắm tới việc phá trừ hai chấp “có” và “không”, giúp người ngộ nhập tánh Duy thức phi hữu phi vô.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-1 font-semibold">Lời kết của bản dịch</p>
      <p class="mb-0">Dịch xong tại chùa Phật Quang Trà Ôn, tiết Trung thu năm Canh Tý (1960).</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Tại sao trong kinh "Giải Thâm Mật", Đức Phật lại không giảng giải về thức A Đà Na cho hàng phàm phu và Nhị thừa?',
    options: {
      a: 'Vì sợ họ nảy sinh tâm phân biệt và chấp thức này là Ngã.',
      b: 'Vì ông vua Ba Tư Nặc đã phản đối việc giảng dạy này.',
      c: 'Vì thức này hoàn toàn hư vọng, không có giá trị tu tập.',
      d: 'Vì thức này chỉ dành cho những người đã đắc quả vị Phật.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Đức Phật không giảng nói thức này cho phàm phu và Nhị thừa vì sợ họ phân biệt rồi chấp làm Ngã.',
    },
  },
  {
    question: 'Tên gọi "A Đà Na" trong tiếng Phạn khi dịch sang nghĩa tiếng Hán có nghĩa là gì?',
    options: {
      a: 'Trì (Giữ gìn)',
      b: 'Tàng (Chứa đựng)',
      c: 'Đoạn (Chấm dứt)',
      d: 'Biến (Thay đổi)',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. A Đà Na được dịch là "Trì", nghĩa là giữ gìn.',
    },
  },
  {
    question: 'Công năng "Chấp thủ kiết sanh tương tục" của thức A Đà Na giúp hành giả đối trị quan niệm sai lầm nào?',
    options: {
      a: 'Chấp thường còn (linh hồn bất tử).',
      b: 'Chấp đoạn diệt (chết là hết).',
      c: 'Chấp các pháp là thật có.',
      d: 'Chấp không (hư vô chủ nghĩa).',
    },
    answer: 'b',
    explanation: {
      b: 'Đúng. Hiểu được thức A Đà Na nắm giữ việc kiết sanh tương tục sẽ đối trị cái chấp "đoạn diệt".',
    },
  },
  {
    question: 'Trong ba công năng của thức A Đà Na, việc duy trì thế giới (Y báo) và thân thể (Chánh báo) thuộc về công năng nào?',
    options: {
      a: 'Chấp thủ kiết sanh tương tục.',
      b: 'Chấp trì chư pháp chủng tử.',
      c: 'Chấp tàng ngã ái.',
      d: 'Chấp thọ sắc căn y xứ.',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Công năng chấp thọ sắc căn y xứ bao gồm việc giữ thân loài hữu tình và thế giới.',
    },
  },
  {
    question: 'Tại sao tên gọi "A lại da thức" không được chọn làm tên gọi chính cho bộ luận này dù nó rất phổ biến?',
    options: {
      a: 'Vì nó chỉ mô tả phần thanh tịnh của thức thứ 8.',
      b: 'Vì nó trùng tên với một vị ngoại đạo thời bấy giờ.',
      c: 'Vì nghĩa của nó hẹp, chỉ tồn tại ở địa vị phàm phu và Thánh hữu học.',
      d: 'Vì nó là tên gọi sai do các nhà phiên dịch đời Bắc Ngụy đặt ra.',
    },
    answer: 'c',
    explanation: {
      c: 'Đúng. Tên "A lại da" nghĩa hẹp vì chỉ dùng cho phàm phu và Thánh hữu học, nên luận không chọn làm tên chính.',
    },
  },
  {
    question: 'Theo văn bản, sai lầm lớn nhất của phái Tông Địa luận khi giải thích về thức A Đà Na là gì?',
    options: {
      a: 'Phủ nhận sự tồn tại của các chủng tử vô lậu trong thức này.',
      b: 'Chấp rằng thức này không có công năng biến hiện thế giới.',
      c: 'Lầm thức A Đà Na với thức thứ 7 (thức chấp ngã).',
      d: 'Cho rằng thức A Đà Na là một thức hoàn toàn mới, thức thứ 10.',
    },
    answer: 'c',
    explanation: {
      c: 'Đúng. Sai lầm đầu tiên được nêu là đồng nhất A Đà Na với thức thứ Bảy chỉ vì cùng dùng chữ "chấp".',
    },
  },
  {
    question: 'Loại trí nào của bậc Đại Thánh được dùng để trực tiếp chứng biết thức A Đà Na?',
    options: {
      a: 'Trí căn bản (Như lý trí).',
      b: 'Trí tự trụ hậu đắc.',
      c: 'Trí thiệp tha hậu đắc.',
      d: 'Trí của hàng Nhị thừa (Thanh văn, Duyên giác).',
    },
    answer: 'b',
    explanation: {
      b: 'Đúng. Luận nói chỉ có Trí tự trụ hậu đắc mới trực tiếp chứng biết thức A Đà Na.',
    },
  },
  {
    question: 'Hình ảnh "dòng nước thác" (bộc lưu) được dùng để minh họa đặc tính nào của thức A Đà Na?',
    options: {
      a: 'Sự thanh tịnh tuyệt đối như nước nguồn.',
      b: 'Tính chất đứng yên, bất biến của bản thể thức.',
      c: 'Sức mạnh phá hủy mọi phiền não của hành giả.',
      d: 'Sự sanh diệt vi tế và tương tục không gián đoạn.',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Dòng nước thác được dùng để chỉ sự sanh diệt vi tế nhưng liên tục không gián đoạn của thức này.',
    },
  },
  {
    question: 'Quan điểm của Ngài Chân Đế về "thức thứ 9" (Yêm ma la thức) bị văn bản này phản bác như thế nào?',
    options: {
      a: 'Vì thức thứ 9 thực chất là tên gọi khác của ý thức (thức thứ 6).',
      b: 'Đó thực chất chỉ là phần thanh tịnh của thức thứ 8, không cần lập riêng thức thứ 9.',
      c: 'Vì thức thứ 9 chỉ dành cho hàng Tiểu thừa.',
      d: 'Vì Ngài Chân Đế đã dịch sai từ "A Đà Na" thành "Yêm ma la".',
    },
    answer: 'b',
    explanation: {
      b: 'Đúng. Luận cho rằng đó chỉ là phần thanh tịnh của thức thứ Tám được hiển lộ, không phải một thức thứ Chín riêng biệt.',
    },
  },
  {
    question: 'Theo mục "Công dụng của luận này", việc hiểu rõ thức A Đà Na giúp hành giả đạt được trung đạo thông qua việc tránh hai thái cực nào?',
    options: {
      a: 'Hữu lậu và Vô lậu.',
      b: 'Tăng ích (chấp có) và Tổn giảm (chấp không).',
      c: 'Thường kiến và Đoạn kiến.',
      d: 'Tham dục và Sân hận.',
    },
    answer: 'b',
    explanation: {
      b: 'Đúng. Đại dụng của bổn luận là phá trừ hai chấp tăng ích và tổn giảm để người học ngộ nhập tánh Duy thức phi hữu phi vô.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-tap-nhi-luan-a-da-na-thuc',
  slug: 'tap-nhi-luan-a-da-na-thuc',
  title: 'Tập Nhì: Luận A Đà Na thức',
  type: 'article',
  status: 'published',
  order: 15,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-06',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/tap-nhi-luan-a-da-na-thuc/Th%E1%BB%A9c_A-%C4%90%C3%A0-Na_V%C3%A0_Mu%C3%B4n_Ph%C3%A1p.png',
      readingContent,
      tableOfContents: [
        { id: 'tap-nhi-luan-a-da-na-thuc', label: 'Tập Nhì - Luận A Đà Na thức' },
        { id: 'neu-cai-ten', label: 'I. Nêu cái tên', indent: 1 },
        { id: 'bai-tung-giai-tham-mat', label: 'Bài tụng trong kinh Giải Thâm Mật', indent: 2 },
        { id: 'bai-tung-thu-lang-nghiem', label: 'Bài tụng trong kinh Thủ Lăng Nghiêm', indent: 2 },
        { id: 'dai-y-hai-bai-tung', label: 'Đại ý hai bài tụng', indent: 2 },
        { id: 'dinh-gioi-nghia', label: 'II. Định giới nghĩa', indent: 1 },
        { id: 'ba-cong-nang-cua-a-da-na', label: 'Ba công năng của A Đà Na thức', indent: 2 },
        { id: 'chap-thu-kiet-sanh-tuong-tuc', label: '1. Giữ lấy việc kết nối đời sau', indent: 2 },
        { id: 'chap-tho-sac-can-y-xu', label: '2. Giữ chịu sắc căn và thế giới', indent: 2 },
        { id: 'chap-tri-chung-tu-cac-phap', label: '3. Giữ gìn chủng tử của các pháp', indent: 2 },
        { id: 'giai-thich-va-chon-lua', label: 'III. Giải thích và chọn lựa', indent: 1 },
        { id: 'cac-ten-goi-cua-thuc-thu-tam', label: 'Các tên gọi của thức thứ tám', indent: 2 },
        { id: 'chon-danh-tu-a-da-na', label: 'Chọn danh từ A Đà Na', indent: 2 },
        { id: 'chi-cai-the-cua-thuc-a-da-na', label: 'IV. Chỉ cái “thể” của thức A Đà Na', indent: 1 },
        { id: 'thuc-a-da-na-tuc-la-cac-phap', label: 'Thức A Đà Na tức là các pháp', indent: 2 },
        { id: 'tri-tu-tru-hau-dac', label: 'Trí Tự trụ hậu đắc', indent: 2 },
        { id: 'tri-can-ban-va-chan-nhu', label: 'Trí căn bản và Chơn như', indent: 2 },
        { id: 'tri-thiep-tha-hau-dac', label: 'Trí Thiệp tha hậu đắc', indent: 2 },
        { id: 'tri-cua-nhi-thua-va-di-sanh', label: 'Trí của Nhị thừa và Dị sanh', indent: 2 },
        { id: 'hoi-cac-ten-de-giai-thich', label: 'V. Hội các tên để giải thích', indent: 1 },
        { id: 'chi-nhung-cho-sai-lam', label: 'VI. Chỉ những chỗ sai lầm', indent: 1 },
        { id: 'sai-lam-lan-thu-nhat', label: '1. Lầm A Đà Na với thức thứ Bảy', indent: 2 },
        { id: 'sai-lam-lan-thu-hai', label: '2. Cho rằng diệt bảy thức trước để còn thức thứ Tám thuần tịnh', indent: 2 },
        { id: 'sai-lam-lan-thu-ba', label: '3. Lập riêng thức thứ Chín là Yêm ma la', indent: 2 },
        { id: 'lap-tong', label: 'VII. Lập tông', indent: 1 },
        { id: 'cong-dung-cua-luan', label: 'VIII. Công dụng của luận này', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/tap-nhi-luan-a-da-na-thuc/A_%C4%90%C3%A0_Na_Th%E1%BB%A9c.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/sksjfUXpK70',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/2ElnNEGtvPl0sueUmGR2lm?utm_source=generator&si=5c5f986213ff42c5',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận A Đà Na thức',
    passPercentage: 70,
    questions,
  },
}

export default lesson
