import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="b-phan-chanh-ton-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ TÁM: B- Phần Chánh tôn (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-bo-tat-co-do-sanh" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">48. PHẬT PHÁ CÁI CHẤP "BỒ TÁT CÓ ĐỘ SANH"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Nếu Bồ Tát còn chấp mình hóa độ vô số chúng sanh thì không phải là Bồ Tát. Tại sao vậy? Vì thật ra không có một pháp gì gọi là Bồ Tát. Bởi thế nên Phật nói: "Tất cả các pháp không ngã, không nhơn, không chúng sanh và không thọ giả".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá trừ cái chấp "thật có Bồ Tát, thật có độ sanh" và Phật dạy: "Các pháp đều giả, không có bốn tướng".</p>
    <p>Đúng theo tinh thần kinh Bát Nhã, thì pháp nào hay việc làm nào của Bồ Tát, hợp với tánh Bát Nhã chơn không, thì pháp đó hay việc làm đó mới là thật.</p>
    <p>Nếu Bồ Tát còn chấp có mình độ sanh tức là Bồ Tát còn nhơn (người được độ), ngã (mình độ) v.v... thì không hợp với tinh thần Bát Nhã, nên không phải là Bồ Tát. Đây là lần thứ hai (lần thứ nhứt ở đoạn 3) Phật phá cái chấp "Bồ Tát có độ sanh".</p>
    <p>Vì Bồ Tát hợp với tánh Bát Nhã chơn không, nên Phật dạy: "Không có một pháp gì gọi là Bồ Tát". Cũng vì các pháp hợp với tánh Bát Nhã chơn không, nên Phật dạy: "Tất cả các pháp đều không ngã, không nhơn, không chúng sanh và không thọ giả".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-bo-tat-trang-nghiem" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">49. PHẬT PHÁ CÁI CHẤP "BỒ TÁT CÓ LÀM TRANG NGHIÊM CÕI PHẬT"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Nếu Bồ Tát chấp rằng: "Ta làm trang nghiêm cõi Phật", thì không phải là Bồ Tát. Tại sao vậy? Như Lai nói: Bồ Tát làm trang nghiêm cõi Phật, mà không chấp mình có làm trang nghiêm cõi Phật, mới thật là trang nghiêm cõi Phật".</p>
      <p class="mb-0">Tóm lại, nếu Bồ Tát không còn chấp ngã chấp pháp, Như Lai mới gọi là "thật Bồ Tát".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dạy: Bồ Tát không còn chấp ngã, chấp pháp, phải hợp với tánh Bát Nhã chơn không, mới phải thật là Bồ Tát và mới phải là trang nghiêm cõi Phật. Đây là lần thứ hai (lần thứ nhứt, xem đoạn 16) Phật phá cái chấp "Bồ Tát có trang nghiêm cõi Phật".</p>
    <p>Bồ Tát làm trang nghiêm cõi Phật, mà không chấp mình có làm trang nghiêm, như thế mới thật là trang nghiêm cõi Phật. Trái lại, nếu Bồ Tát chấp mình có làm trang nghiêm cõi Phật, tức là Bồ Tát còn chấp ngã (ta làm), chấp pháp (cõi Phật), không hợp với tinh thần Bát Nhã, thì không phải là trang nghiêm và cũng không phải là Bồ Tát.</p>
    <p>Tóm lại, Phật dạy: "Nếu Bồ Tát nhập vào Bát Nhã chơn không, không còn các vọng chấp ngã, pháp, thì Như Lai mới gọi là thật Bồ Tát".</p>

    <p class="font-semibold mt-6">Ngài Xuyên Thiền sư làm bài tụng tóm tắt lại ý nghĩa trên, như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Tá bà sam tử bái bà môn</p>
          <p class="mb-0">Lễ số châu truyền dĩ thập phần</p>
          <p class="mb-0">Trúc ảnh tảo dai, trần bất động</p>
          <p class="mb-0">Nguyệt luân xuyên hải, thủy vô ngần.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Mượn áo tràng bà để lạy bà</p>
          <p class="mb-0">Lễ rồi, áo trả lại cho bà</p>
          <p class="mb-0">Bóng trúc quét sân, trần chẳng động</p>
          <p class="mb-0">Vừng trăng xuyên biển, nước không xao.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài tụng</h4>
    <p>Bài kệ này nói về lý "vô trụ vô tướng" của kinh Bát Nhã, Bồ Tát làm trang nghiêm cõi Phật; cũng như người mượn áo tràng của bà để lạy bà. Nhưng Bồ Tát không chấp có trang nghiêm cõi Phật; như người lạy rồi trả áo, không còn giữ lại vết tích gì cả.</p>
    <p>Bồ Tát độ sanh hay làm các Phật sự mà không thấy có mình độ và chúng sanh được độ v.v... cũng như bóng trúc quét bụi, tia sáng của vừng trăng xuyên biển; bụi trần không động mà nước cũng không dợn.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phat-co-nam-mat" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">50. PHẬT CÓ ĐỦ NĂM LOẠI CON MẮT</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Như Lai có nhục nhãn không?" Tu Bồ Đề thưa: "Bạch Thế Tôn! Như Lai có nhục nhãn".</p>
      <p>"Tu Bồ Đề! Như Lai có thiên nhãn không?"<br>"Bạch Thế Tôn! Như Lai có thiên nhãn".</p>
      <p>"Tu Bồ Đề! Như Lai có Huệ nhãn không?"<br>"Bạch Thế Tôn! Như Lai có Huệ nhãn".</p>
      <p>"Tu Bồ Đề! Như Lai có Pháp nhãn không?"<br>"Bạch Thế Tôn! Như Lai có Pháp nhãn".</p>
      <p class="mb-0">"Tu Bồ Đề! Như Lai có Phật nhãn không?"<br>"Bạch Thế Tôn! Như Lai có Phật nhãn".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này phá cái chấp "Phật và Bồ Tát không thấy chi hết".</p>
    <p>Mục đích của Kinh Bát Nhã là phải phá hết các vọng chấp, thì chơn tâm hay Phật tánh (Bát Nhã) mới hiện. Bởi thế nên, chấp "có" đã bị bác, mà chấp "không" cũng bị bác.</p>
    <p>Từ trước đến đây, Phật đã nhiều lần phá về chấp có. Như nói: "Bồ Tát phải không thấy có mình độ sanh, không thấy có chúng sanh được độ. Bồ Tát không thấy mình làm trang nghiêm và không thấy cõi Phật được trang nghiêm v.v..."</p>
    <p>Sợ người chấp: "...như thế thì chư Phật và Bồ Tát không thấy chi hết", nên đến đoạn này, Phật mới hỏi ông Tu Bồ Đề: "Như Lai có năm món nhãn không?". Ông Tu Bồ Đề thưa: "Như Lai có đủ năm món nhãn"; nghĩa là có đủ năm loại con mắt, nên Như Lai thấy tất cả.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="space-y-4">
        <p class="mb-0"><strong>Nhục nhãn:</strong> Con mắt thịt của phàm phu, chỉ thấy trong phạm vi nhỏ hẹp; nếu bị vật gì che ngăn thì không thấy.</p>
        <p class="mb-0"><strong>Thiên nhãn:</strong> Con mắt của chư thiên, do tu thiền định hoặc sanh lên các cõi trời, mới được con mắt này. Thiên nhãn thấy được xa và thấu suốt tất cả, không bị vật gì làm chướng ngại.</p>
        <p class="mb-0"><strong>Huệ nhãn:</strong> Con mắt Trí huệ. Huệ nhãn chỉ thấy "ngã không"; nghĩa là chúng sanh không thật, chỉ do ngũ uẩn và tứ đại hòa hợp. Hàng Thinh văn và Duyên giác mới có Huệ nhãn.</p>
        <p class="mb-0"><strong>Pháp nhãn:</strong> Con mắt thấy suốt tất cả các pháp. Bồ Tát đặng pháp nhãn, thấy "ngã pháp" đều không; nghĩa là Bồ Tát không những rõ thấu ngã, nhơn, chúng sanh và thọ giả đều không, mà cũng rõ thấu tất cả các pháp đều không thật, chỉ do các duyên hòa hợp sanh.</p>
        <p class="mb-0"><strong>Phật nhãn:</strong> Con mắt Phật. Phật thấy biết tất cả các pháp trong thế gian và xuất thế gian. Phật thấy hoàn toàn viên mãn, dù hằng sa thế giới, vô lượng chúng sanh, Phật cũng đều thấy và biết tất cả.</p>
      </div>
      <p class="mt-4 mb-0 font-semibold italic">Tóm lại, Phật có đủ 5 con mắt; Bồ Tát có 4 con mắt; Nhị thừa còn 3; phàm phu chỉ một; chư thiên có 1 hoặc 2.</p>
    </div>

    <p class="font-semibold mt-6">Cổ nhơn làm bài tụng nói về ngũ nhãn như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Thiên nhãn thông phi ngại</p>
          <p class="mb-0">Nhục nhãn ngại phi thông</p>
          <p class="mb-0">Pháp nhãn phi quán tục</p>
          <p class="mb-0">Huệ nhãn liễu trí thông</p>
          <p class="mb-0">Phật nhãn như thiên nhựt</p>
          <p class="mb-0">Chiếu dị thể hoàn đồng.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Mắt Trời thấy thông suốt</p>
          <p class="mb-0">Mắt Thịt thấy có ngại</p>
          <p class="mb-0">Mắt Pháp thấy pháp không</p>
          <p class="mb-0">Mắt Huệ thấy ngã không</p>
          <p class="mb-0">Mắt Phật thấy tất cả</p>
          <p class="mb-0">Muôn pháp đồng nhứt thể.</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phat-thay-biet-het" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">51. PHẬT THẤY BIẾT HẾT TÂM NIỆM CỦA CÁC CHÚNG SANH, TRONG HẰNG SA THẾ GIỚI</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Cát ở trong sông Hằng, Như Lai có gọi là cát không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Như Lai cũng gọi là cát".</p>
      <p>Phật hỏi: "Như một sông Hằng có vô số cát, rồi lấy mỗi một hạt cát để thí dụ một sông Hằng, thì có vô số sông Hằng. Trong vô số sông Hằng, mỗi một sông Hằng lại có vô số cát nữa, rồi đem vô số hạt cát trong vô số sông Hằng đó lại thí dụ nữa, mỗi một hạt cát là một tam thiên đại thiên thế giới của Phật (Đại thế giới). Như thế, thế giới của Phật có nhiều không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Nhiều lắm".</p>
      <p>Phật dạy: "Tu Bồ Đề! Tất cả chúng sanh ở trong vô số thế giới như vậy, có bao nhiêu tâm niệm, Như Lai đều thấy biết tất cả".</p>
      <p class="mb-0">Phật dạy tiếp: "Tu Bồ Đề! Như Lai nói tâm, không phải thật có tâm, chỉ giả gọi là "tâm". Tại sao vậy? Vì tâm quá khứ tìm không được, tâm hiện tại tìm không được, tâm vị lai cũng tìm không được".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này tiếp với đoạn trên (50), Như Lai có 5 con mắt, nên Như Lai thấy biết vô cùng thế giới và vô tận chúng sanh.</p>
    <p>Trong vô số thế giới, mỗi thế giới có vô số chúng sanh, mỗi chúng sanh có bao nhiêu tâm niệm, Như Lai đều thấy biết tất cả.</p>
    <p>Vừa nói đến "tâm", sợ chúng sanh vọng chấp "có tâm" mà không nhập được Kim Cang Bát Nhã, nên Phật liền phá: "Như Lai nói "tâm" không phải thật có tâm, chỉ giả gọi là "tâm".</p>
    <p>Phật giải thích thêm: Vì tâm quá khứ đã diệt, tâm vị lai chưa đến, tâm hiện tại không dừng trụ, nên trong ba đời tìm tâm không thể được.</p>
    <p>Thuở xưa, Ngài Huệ Khả (Nhị Tổ) đến cầu Tổ Đạt Ma (Sơ Tổ) về pháp an tâm (xem "bản đồ tu Phật" tập 4).</p>
    <div class="pl-4 space-y-2 my-4 italic opacity-90 border-l-2 border-secondary-300 dark:border-secondary-700">
      <p class="mb-0">Tổ Đạt Ma hỏi: "Ông đến đây để làm gì?".</p>
      <p class="mb-0">Ngài Huệ Khả thưa: "Bạch Tổ Sư! Con đến đây để cầu pháp an tâm".</p>
      <p class="mb-0">Tổ Đạt Ma hỏi: "Quá khứ tâm bất khả đắc, hiện tại tâm bất khả đắc, vị lai tâm bất khả đắc, vậy ông muốn an cái tâm nào?".</p>
      <p class="mb-0">Ngài Huệ Khả thưa: "Trong ba thời (quá khứ, hiện tại và vị lai) con tìm tâm đều không thể được".</p>
      <p class="mb-0">Tổ Đạt Ma dạy: "Ta đã an tâm cho ông rồi". Ngài Huệ Khả liền tỏ ngộ.</p>
    </div>

    <p class="font-semibold mt-6">Ngài Xuyên Thiền sư có làm bài kệ nói về ba tâm:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Tam tế cầu tâm, tâm bất kiến</p>
          <p class="mb-0">Lưỡng nhãn y nhiên đối lưỡng nhãn</p>
          <p class="mb-0">Bất tu di kiếm khắc chu tầm</p>
          <p class="mb-0">Tuyết nguyệt phong hoa thường kiến diện.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Hai mắt trơ trơ chỉ ngó chăm</p>
          <p class="mb-0">Tìm mãi ba đời chẳng thấy tâm</p>
          <p class="mb-0">Tuyết nguyệt phong hoa thường đối diện</p>
          <p class="mb-0">Kiếm rơi hà tất khắc khe tầm.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải và đại ý</h4>
    <p>Thuở xưa, có người đi thuyền làm rơi cây kiếm dưới sông. Người ấy liền lấy dao khắc be thuyền, để chờ thuyền đậu nghỉ sẽ tìm. Đến khi thuyền đậu, người ấy xuống sông mò hoài không được kiếm. Anh ta thắc mắc: "Cây kiếm mới rớt, tôi khắc thuyền làm dấu ngay chỗ này, sao tìm hoài không được".</p>
    <p>Người trí thấy vậy bảo: "Anh dại quá! Kiếm rớt hồi nãy, thì anh phải tìm ngay chỗ hồi nãy và tại chỗ đó; chớ đợi đến bây giờ, đã khác chỗ rồi, thì làm sao tìm được".</p>
    <p>Cũng thế, người tu hành phải trực ngộ bản tâm mình. Nếu còn móng tâm để tìm tâm ở đâu đâu, thì không bao giờ tìm được; vì tâm quá khứ đã diệt, tâm hiện tại không dừng, tâm vị lai chưa đến.</p>
    <p>Tóm lại, đại ý bài tụng: Những cảnh vật thiên nhiên, như tuyết trong, trăng sáng, gió mát, hoa tươi ở trước mắt, đều biểu lộ bản thể chơn tâm thường trú. Hành giả phải tức nơi muôn vật đó mà trực ngộ bản tâm mình, cần gì phải tìm đâu xa. Nếu hành giả không trực ngộ, mà cứ lo tìm tâm quá khứ, hiện tại và vị lai, thì cũng như người khắc dấu lên thuyền để mò kiếm, không bao giờ mò được.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-phuoc-duc-nhieu" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">52. PHẬT PHÁ CÁI CHẤP "PHƯỚC ĐỨC NHIỀU"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Nếu có người dùng 7 món báu, đựng đầy trong một Đại thế giới (một nghìn triệu thế giới nhỏ) đem bố thí, người này được phước đức không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Nhiều lắm!".</p>
      <p class="mb-0">Phật dạy: "Nếu chấp phước đức này thật có, thì Như Lai nói phước đức này không nhiều. Không chấp phước đức nhiều, Như Lai mới nói "đặng nhiều phước đức".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Nếu đem tâm chấp tướng mà làm việc phước đức, thì phước đức đó thành hữu vi hữu lậu; dầu có nhiều bao nhiêu cũng có ngày cùng tận. Trái lại, nếu đem tâm vô tướng (không cầu danh, cầu lợi, không chấp nhơn, chấp ngã v.v...) mà làm việc phước đức, thì phước đức này thuộc về vô lậu thanh tịnh, hợp với tánh Bát Nhã chơn không (chơn tâm) dù làm ít, nhưng phước đức vô cùng tận.</p>
    <p>Thuở xưa, Tổ Đạt Ma đến Trung Hoa truyền đạo. Vua Lương Võ Đế đem việc bố thí làm phước, đúc chuông, tạo tượng và lập 72 cảnh chùa v.v... để hỏi Tổ Đạt Ma. Trong câu hỏi có tính cách khoe khoang chấp tướng.</p>
    <p>Vua hỏi: "Trẫm lập 72 cảnh chùa, đúc chuông, tạo tượng, tu kiều, bồi lộ v.v... phước đức có nhiều không?".</p>
    <p>Trả lời đúng theo tinh thần "vô trụ, vô tướng" của kinh Bát Nhã, Tổ Đạt Ma nói: "Không có phước đức". Vua Lương Võ Đế vì trình độ quá kém, không hiểu được lời của Tổ dạy, nên nghi rằng không phải Tổ, lại đem dâng thuốc độc cho Tổ Đạt Ma uống... <span class="text-sm opacity-80">(xem quyển "Tổ Đạt Ma", do Hương Đạo xuất bản)</span>.</p>
    
    <p class="font-semibold mt-6">Ngài Xuyên Thiền sư tả về cảnh: khi các mây vô minh vọng chấp hết, thì mặt trăng Trí huệ Bát Nhã hiện ra, bằng hai câu như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Vô hạn dã tâm phong quyển tận</p>
          <p class="mb-0">Nhứt luân cô nguyệt chiếu thiên tâm.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Gió cuốn mây đen về biển cả</p>
          <p class="mb-0">Một vừng trăng sáng giữa trời không.</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-thay-tuong-tot" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">53. PHẬT PHÁ CÁI CHẤP "THẤY SẮC THÂN VÀ TƯỚNG TỐT CỦA PHẬT LÀ THẤY PHẬT"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Ông có thể cho thấy sắc thân của ta đây là thấy được Phật không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Không thể cho thấy sắc thân của Phật là thấy được Phật. Tại sao vậy? Vì Như Lai nói sắc thân, không phải thật sắc thân, chỉ giả gọi là sắc thân".</p>
      <p>Phật hỏi tiếp: "Tu Bồ Đề! Ông có thể cho thấy các tướng tốt (32 tướng tốt, 80 vẻ đẹp) của ta đây là thấy được Phật không?".</p>
      <p class="mb-0">Tu Bồ Đề thưa: "Bạch Thế Tôn! Không thể cho thấy các tướng tốt của Phật là thấy được Phật. Tại sao vậy? Vì Như Lai nói các tướng tốt, không phải thật tướng tốt, chỉ giả gọi là tướng tốt".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Kim Cang Bát Nhã phá trừ cái chấp: "Thấy sắc thân và tướng hảo của Phật là thấy được Phật". Đây là lần thứ ba (lần thứ nhứt và nhì ở đoạn 7 và 25) Phật phá cái chấp về việc thấy Phật.</p>
    <p>Kinh Kim Cang, Phật dạy: "Phàm sở hữu tướng, giai thị hư vọng" (phàm cái gì có hình tướng đều là hư dối).</p>
    <p>Sắc thân của Phật, do bốn đại hòa hợp giả tạo ra thân tướng, nên thân tướng của Phật cũng hư vọng không thật, chỉ giả gọi là thân Phật.</p>
    <p>Rồi từ trên thân tướng, do bốn đại giả tạo, lại sanh ra nhiều tướng, những tướng ấy cũng hư vọng không thật, chỉ giả gọi là 32 tướng tốt và 80 vẻ đẹp.</p>
    <p>Đến lúc hoàn thành nhiệm vụ độ sanh, Phật thâu thần nhập diệt, xả thân tướng tứ đại để vào cõi Niết bàn, thì xác thân và 32 tướng tốt, do tứ đại giả hợp của Phật cũng theo luật "sanh, trụ, dị, diệt" mà biến đổi. Lúc bấy giờ không còn cái gì để gọi là sắc thân và tướng tốt.</p>
    <p>Bởi thế nên Phật dạy: "Không phải sắc thân, chỉ giả gọi sắc thân; không phải tướng tốt, chỉ giả gọi là tướng tốt". Vì thế nên ông Tu Bồ Đề thưa: "Không thể cho thấy sắc thân hay thấy tướng tốt của Phật mà cho là thấy được Phật".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-nhu-lai-thuyet-phap" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">54. PHẬT PHÁ CÁI CHẤP "NHƯ LAI CÓ THUYẾT PHÁP"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Ông chớ nên nghĩ rằng: "Như Lai có thuyết pháp". Tại sao vậy? Nếu người nào không hiểu lời của Phật dạy, lại nói rằng: "Như Lai có thuyết pháp", thì người ấy khinh báng Phật.</p>
      <p class="mb-0">Tu Bồ Đề! Như Lai nói: "Thuyết pháp, tức là không có pháp gì có thể nói được, mới gọi là thuyết pháp".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Kim Cang Bát Nhã phá trừ cái chấp "Như Lai có thuyết pháp". Đây là lần thứ 3, Phật phá cái chấp về "Như Lai có thuyết pháp" (lần thứ nhứt ở đoạn 11 và 23).</p>
    <p>Nếu người nào chấp: "Phật có thuyết pháp", thì người đó còn chấp ngã (Phật) và chấp pháp (thuyết pháp). Đem tâm vọng chấp ngã pháp của phàm phu mà suy nghĩ luận bàn đến chánh pháp của Phật, thì chánh pháp của Phật trở thành vọng chấp của phàm phu. Ngài Xuyên Thiền sư nói: "Tà nhơn thuyết chánh pháp, chánh pháp tức quy tà" (người tà nói pháp chánh, pháp chánh trở thành tà). Bởi thế nên Phật nói: "Người đó khinh báng Phật". Vì họ không nhập được "lý Kim Cang Bát Nhã", nên Phật nói: "Họ không hiểu được lời của Phật dạy".</p>
    <p>Đức Lão Tử nói: "Đạo mà có thể nói được, thì không phải thật là Đạo (Đạo khả đạo, phi thường đạo)". Cũng đồng một ý này, Đức Phật dạy: "Không có pháp gì có thể nói được, mới gọi là thuyết pháp".</p>

    <p class="font-semibold mt-6">Phật nói bài kệ như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Thị tùng thành đạo hậu</p>
          <p class="mb-0">Chung chí Bạt đề hà</p>
          <p class="mb-0">Ư thị nhị trung gian</p>
          <p class="mb-0">Vị thường thuyết nhứt tự.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Từ khi mới thành đạo</p>
          <p class="mb-0">Đến lúc nhập Niết bàn</p>
          <p class="mb-0">Trong khoảng thời gian ấy</p>
          <p class="mb-0">Ta không nói một chữ.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài kệ</h4>
    <p>Bài kệ này nói về lý kinh Bát Nhã. Cổ nhơn dạy: "vô thuyết vô văn chơn Bát Nhã" (không nói Bát Nhã và không nghe Bát Nhã, mới thật là nói Bát Nhã và nghe Bát Nhã), <span class="text-sm opacity-80">(xin độc giả xem lại đoạn giải 11 và 23)</span>.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-co-chung-sanh" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">60. PHẬT PHÁ CÁI CHẤP "THẬT CÓ CHÚNG SANH"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Khi đó, ông Tu Bồ Đề thưa Phật: "Bạch Thế Tôn! Đời sau, nếu có chúng sanh nào nghe đến kinh Bát Nhã, không biết họ có thể tin được không?".</p>
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Chúng kia, không phải chúng sanh, cũng không phải phi chúng sanh. Tại sao vậy? Như Lai nói chúng sanh, thật không phải chúng sanh, chỉ giả gọi là chúng sanh".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Kim Cang Bát Nhã phá cái chấp "thật có chúng sanh". Trong tánh Bát Nhã chơn không thì ngã và pháp đều không, bốn tướng chẳng còn.</p>
    <p>Bốn tướng đã không, ngã chấp chẳng còn, thì đâu có gì là chúng sanh hay phi chúng sanh. Đã không phải chúng sanh hay phi chúng sanh, thì có gì là tin hay không tin. Đúng theo tinh thần kinh Bát Nhã, nếu còn phân biệt vọng chấp, thì không phải là thật. Bởi thế nên Phật dạy tiếp: "Như Lai nói chúng sanh, không phải thật chúng sanh, chỉ giả gọi là chúng sanh".</p>

    <p class="font-semibold mt-6">Ngài Phó Đại sĩ làm bài tụng, để tóm tắt lại đoạn này, như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Chúng sanh dữ thọ giả</p>
          <p class="mb-0">Uẩn thượng lập hư danh</p>
          <p class="mb-0">Như quy mao bất thật</p>
          <p class="mb-0">Tợ thố giác vô hình.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Ngã, nhơn, chúng sanh và thọ giả</p>
          <p class="mb-0">Trên năm uẩn chỉ có giả danh</p>
          <p class="mb-0">Như lông rùa không có thật thể</p>
          <p class="mb-0">Tợ như sừng thỏ chẳng có hình.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài tụng</h4>
    <p>Tất cả các pháp trên năm uẩn như ngã, nhơn, chúng sanh và thọ giả v.v... đều không thật có, như lông rùa, sừng thỏ, chỉ có giả danh mà thôi.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo đoạn 48, điều kiện gì để một người được gọi là một vị Bồ Tát thật sự?",
    options: {
      a: "Phải hóa độ được vô số chúng sanh vào cõi Niết bàn.",
      b: "Phải phát nguyện trang nghiêm cõi Phật bằng bảy món báu.",
      c: "Phải có đầy đủ năm loại con mắt (ngũ nhãn).",
      d: "Không còn chấp ngã, nhơn, chúng sanh và thọ giả khi làm việc độ sanh.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Phật dạy: 'Nếu Bồ Tát còn chấp mình hóa độ vô số chúng sanh thì không phải là Bồ Tát... Tất cả các pháp không ngã, không nhơn, không chúng sanh và không thọ giả'. Bồ Tát không còn chấp các tướng này mới thật là Bồ Tát.",
    },
  },
  {
    question: "Hình ảnh 'bóng trúc quét sân, trần chẳng động' trong bài tụng ở đoạn 49 minh họa cho lý thuyết nào?",
    options: {
      a: "Sự tĩnh lặng tuyệt đối không làm bất cứ việc gì của bậc tu hành.",
      b: "Sự trang nghiêm cõi Phật bằng các loại cây quý như trúc và báu vật.",
      c: "Khả năng thần thông của Bồ Tát có thể đi xuyên qua vật chất.",
      d: "Lý vô trụ, vô tướng: làm các Phật sự mà tâm không dính mắc, không để lại vết tích chấp trước.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Bóng trúc quét bụi, tia sáng của vừng trăng xuyên biển; bụi trần không động mà nước cũng không dợn' là hình ảnh ẩn dụ cho lý 'vô trụ vô tướng'. Bồ Tát làm trang nghiêm cõi Phật, hóa độ chúng sanh nhưng tâm không dính mắc (không để lại vết tích ngã, pháp).",
    },
  },
  {
    question: "Loại mắt nào được mô tả là thấy được xa và thấu suốt tất cả, không bị vật gì chướng ngại, do tu thiền định hoặc sanh lên cõi trời mà có?",
    options: {
      a: "Huệ nhãn",
      b: "Pháp nhãn",
      c: "Nhục nhãn",
      d: "Thiên nhãn",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Thiên nhãn: Con mắt của chư thiên, do tu thiền định hoặc sanh lên các cõi trời, mới được con mắt này. Thiên nhãn thấy được xa và thấu suốt tất cả, không bị vật gì làm chướng ngại'.",
    },
  },
  {
    question: "Điểm khác biệt chính giữa Huệ nhãn và Pháp nhãn theo định nghĩa trong tài liệu là gì?",
    options: {
      a: "Huệ nhãn thấy được các cõi trời, còn Pháp nhãn thấy được các hằng sa thế giới.",
      b: "Không có sự khác biệt, cả hai đều chỉ chung cho trí huệ của bậc thánh.",
      c: "Huệ nhãn là mắt của Phật, còn Pháp nhãn là mắt của Bồ Tát.",
      d: "Huệ nhãn thấy 'ngã không', còn Pháp nhãn thấy cả 'ngã' và 'pháp' đều không.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Huệ nhãn chỉ thấy 'ngã không'... Pháp nhãn thấy 'ngã pháp' đều không; nghĩa là Bồ Tát không những rõ thấu ngã, nhơn... đều không, mà cũng rõ thấu tất cả các pháp đều không thật'.",
    },
  },
  {
    question: "Tại sao Phật dạy rằng 'Quá khứ tâm bất khả đắc, hiện tại tâm bất khả đắc, vị lai tâm bất khả đắc'?",
    options: {
      a: "Vì tâm nằm ngoài phạm vi hiểu biết của con người và ngôn ngữ.",
      b: "Vì tâm của chúng sanh quá nhỏ bé nên không thể tìm thấy được.",
      c: "Vì chỉ có Phật mới có thể nhìn thấy được tâm, còn chúng sanh thì không.",
      d: "Vì tâm quá khứ đã diệt, tâm vị lai chưa đến và tâm hiện tại không dừng trụ.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Lược giải giải thích: 'Vì tâm quá khứ đã diệt, tâm vị lai chưa đến, tâm hiện tại không dừng trụ, nên trong ba đời tìm tâm không thể được'.",
    },
  },
  {
    question: "Câu chuyện người 'khắc mạn thuyền tìm kiếm' được dùng để phê phán sai lầm nào trong tu hành?",
    options: {
      a: "Việc quá tin tưởng vào các phương tiện vật chất khi tu tập.",
      b: "Việc không chịu ghi nhớ những lời dạy của thầy tổ.",
      c: "Việc lười biếng không chịu đi tìm kiếm chân lý ở những nơi xa xôi.",
      d: "Việc cố gắng tìm kiếm bản tâm bằng cách bám víu vào các tâm niệm đã qua hoặc hư vọng.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Người tu hành phải trực ngộ bản tâm ngay tại hiện tại (tuyết nguyệt phong hoa thường đối diện). Việc bám víu để tìm tâm ở quá khứ, hiện tại, vị lai cũng uổng công vô ích như kẻ khắc dấu lên mạn thuyền để tìm kiếm thanh gươm đã rơi.",
    },
  },
  {
    question: "Theo đoạn 57, tại sao Tổ Đạt Ma lại trả lời vua Lương Võ Đế rằng việc xây chùa, đúc chuông 'không có phước đức'?",
    options: {
      a: "Vì những việc đó quá nhỏ bé so với công đức của một vị Phật.",
      b: "Vì vua Lương Võ Đế làm việc thiện với tâm cầu danh, khoe khoang và chấp tướng.",
      c: "Vì Tổ Đạt Ma muốn thử lòng kiên trì của nhà vua.",
      d: "Vì nhà vua đã dùng tiền bạc bất chính để làm những việc đó.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Lược giải nêu rõ: Lời của Tổ Đạt Ma là trả lời đúng theo tinh thần 'vô trụ, vô tướng' của kinh Bát Nhã, để phá sự khoe khoang chấp tướng của vua Lương Võ Đế. Khi tâm còn chấp tướng thì phước chỉ là hữu vi hữu lậu, không phải phước đức vô lậu thanh tịnh của chơn tâm.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao việc thấy 32 tướng tốt của Phật không được coi là thấy được Phật thật sự?",
    options: {
      a: "Vì các tướng tốt đó chỉ dành cho hàng chư thiên nhìn thấy.",
      b: "Vì các tướng tốt đó chỉ là giả hiệu, Phật thực sự không có hình dáng.",
      c: "Vì Phật có thể biến hóa ra vô số hình dáng khác nhau nên tướng tốt không cố định.",
      d: "Vì sắc thân và các tướng tốt đều do tứ đại giả hợp, chịu sự biến đổi sinh diệt.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Lược giải giải thích: 'Sắc thân của Phật, do bốn đại hòa hợp giả tạo ra thân tướng... Rồi từ trên thân tướng... lại sanh ra nhiều tướng, những tướng ấy cũng hư vọng... theo luật sanh, trụ, dị, diệt mà biến đổi'. Thấy tướng hư vọng không phải là thấy Phật thật (Pháp thân).",
    },
  },
  {
    question: "Trong đoạn 59, Phật nói người nào cho rằng 'Như Lai có thuyết pháp' là khinh báng Phật. Lý do chính là gì?",
    options: {
      a: "Vì thực tế Phật luôn giữ im lặng từ khi thành đạo đến khi nhập diệt.",
      b: "Vì người đó vẫn còn chấp vào ngã (Phật) và pháp (lời thuyết), không hiểu lý Bát Nhã.",
      c: "Vì lời nói của Phật quá cao siêu, không ai có thể hiểu đúng được.",
      d: "Vì Phật chỉ dùng tâm truyền tâm chứ không dùng lời nói.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Việc giữ im lặng là nghĩa bóng (không chấp thuyết pháp).",
      b: "Đúng. 'Nếu người nào chấp: Phật có thuyết pháp, thì người đó còn chấp ngã (Phật) và chấp pháp (thuyết pháp). Đem tâm vọng chấp ngã pháp của phàm phu mà suy nghĩ... thì chánh pháp trở thành vọng chấp...'. Vì không nhập được lý Bát Nhã nên họ khinh báng Phật.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Thí dụ về 'lông rùa, sừng thỏ' trong bài tụng của Phó Đại sĩ (đoạn 60) nhằm khẳng định điều gì về chúng sanh?",
    options: {
      a: "Chúng sanh chỉ là giả danh được lập trên năm uẩn, không có thực thể tự ngã.",
      b: "Chúng sanh là những thực thể quý hiếm và khó gặp được Phật pháp.",
      c: "Mọi chúng sanh đều có bản tính kỳ diệu như những con vật linh thiêng.",
      d: "Chúng sanh cần phải tu tập để biến đổi thân mình thành thân Phật.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Đại ý bài tụng nói rằng ngã, nhơn, chúng sanh và thọ giả 'trên năm uẩn chỉ có giả danh, như lông rùa không có thật thể, tợ như sừng thỏ chẳng có hình', tức là không có thực thể.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-8-phan-chanh-ton-tiep-theo',
  slug: 'bai-thu-8-phan-chanh-ton-tiep-theo',
  title: 'Bài Thứ 8 - Phần Chánh tôn (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 12,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-8-phan-chanh-ton-tiep-theo/Tr%C3%AD_Hu%E1%BB%87_B%C3%A1t_Nh%C3%A3_Ph%E1%BA%ADt_Gi%C3%A1o.png',
      readingContent,
      tableOfContents: [
        { id: 'b-phan-chanh-ton-tiep-theo', label: 'B. Phần Chánh tôn (tiếp theo)' },
        { id: 'pha-chap-bo-tat-co-do-sanh', label: '48. Phật phá cái chấp "Bồ tát có độ sanh"', indent: 1 },
        { id: 'pha-chap-bo-tat-trang-nghiem', label: '49. Phật phá cái chấp "Bồ tát có làm trang nghiêm cõi Phật"', indent: 1 },
        { id: 'phat-co-nam-mat', label: '50. Phật có đủ năm loại con mắt', indent: 1 },
        { id: 'phat-thay-biet-het', label: '51. Phật thấy biết hết các tâm niệm của chúng sanh trong hằng sa thế giới', indent: 1 },
        { id: 'pha-chap-phuoc-duc-nhieu', label: '52. Phật phá cái chấp "phước đức nhiều"', indent: 1 },
        { id: 'pha-chap-thay-tuong-tot', label: '53. Phật phá cái chấp "thấy sắc thân và tướng tốt của Phật là thấy Phật"', indent: 1 },
        { id: 'pha-chap-nhu-lai-thuyet-phap', label: '54. Phật phá cái chấp "Như Lai có thuyết pháp"', indent: 1 },
        { id: 'pha-chap-co-chung-sanh', label: '60. Phật phá cái chấp "thật có chúng sanh"', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-8-phan-chanh-ton-tiep-theo/The_Diamond_Blade.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/WCmXWZFBYPU',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/2USUj6HBz9CA877r683iVY',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 8',
    passPercentage: 70,
    questions,
  },
}

export default lesson