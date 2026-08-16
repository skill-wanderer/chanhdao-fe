import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="b-phan-chanh-ton-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ CHÍN: B- Phần Chánh tôn (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-nhu-lai-dang-dao" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">56. PHẬT PHÁ CÁI CHẤP "NHƯ LAI ĐẶNG ĐẠO QUẢ VÔ THƯỢNG BỒ ĐỀ"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Ông Tu Bồ Đề bạch Phật: "Bạch Thế Tôn ! Như Lai có chứng đặng đạo quả Vô thượng Bồ Đề không?</p>
      <p class="mb-0">Phật dạy: "Tu Bồ Đề ! Như Lai không có một tí gì gọi là đặng đạo quả Vô thượng Bồ Đề".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Kim Cang Bát Nhã phá trừ cái chấp "Phật có đặng Đạo quả Bồ Đề". Đây là lần thứ 4 (lần thứ nhứt, hai và ba ở đoạn 15, 36, và 46).</p>
    <p>Trong Duy thức Tam thập tụng có chép: "Nếu hành giả hiện tiền còn phần nào thấy mình có chứng Duy thức tánh, thì chưa phải thật chứng Duy thức tánh, vì còn chấp "có sở đắc" vậy".</p>
    <p>Đồng một ý với đoạn kinh này, nếu còn chấp "mình đặng đạo quả Vô thượng Bồ Đề", tức là còn bốn tướng: ngã, nhơn, chúng sanh và thọ giả thì không phải thật chứng đạo vô thượng Bồ Đề.</p>
    <p>Hành giả phải ngộ nhập Kim Cang Bát Nhã, xa lìa các vọng chấp, không còn thấy mình chứng (không ngã) và đạo quả Bồ Đề để chứng (không pháp) thì mới thật là chứng đạo vô thượng Bồ Đề. Bởi thế nên Phật dạy: "Như Lai không có một tí gì gọi là đặng đạo vô thượng Bồ Đề".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phap-nay-binh-dang" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">57. PHÁP NÀY BÌNH ĐẲNG KHÔNG CÓ CAO THẤP</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề ! Pháp này bình đẳng không có cao thấp, không ngã, không nhơn, không chúng sanh và không thọ giả, tạm gọi là đạo vô thượng Bồ Đề.</p>
      <p class="mb-0">Tu Bồ Đề ! Do tu tất cả pháp lành mà đặng đạo vô thượng Bồ Đề, Như Lai nói pháp lành, không phải pháp lành, mới gọi là pháp lành".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật nói "pháp này bình đẳng, không có cao thấp", và phá cái chấp "pháp lành".</p>
    <p>Hành giả còn chấp "ta tu pháp lành" tức là còn chấp ngã (ta tu) chấp pháp (pháp lành). Nếu đem tâm chấp ngã chấp pháp mà tu pháp lành, thì pháp lành ấy thuộc về hữu vi hữu lậu, không phải là pháp lành cứu cánh.</p>
    <p>Hành giả phải dùng Trí huệ Kim Cang Bát Nhã, phá trừ các chấp ngã, chấp pháp mà tu các pháp lành, thì các pháp lành ấy mới hợp với Bát Nhã chơn không, thuộc về vô lậu thanh tịnh, mới phải là pháp lành rốt ráo. Bởi thế nên Phật dạy: "Như Lai nói các pháp lành, không phải pháp lành, mới gọi là pháp lành".</p>
    <p>Hành giả nhập Kim Cang Bát Nhã, phá trừ các vọng chấp mà tu các pháp lành thì sẽ chứng được đạo vô thượng Bồ Đề. Đạo này không ngã, không nhơn, không chúng sanh, không thọ giả, nên Phật nói: "Pháp này bình đẳng, không có cao thấp".</p>

    <p class="font-semibold mt-6">Cổ nhơn có làm một bài tụng, nói về cảnh giới khi ngã và pháp đều hết, như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Vũ tiền chỉ kiến hoa gian điệp</p>
          <p class="mb-0">Vũ hậu toàn vô điệp đề hoa</p>
          <p class="mb-0">Hoa điệp phân phân quá tường khứ</p>
          <p class="mb-0">Bất tri xuân sắc lạc thi gia</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Trước mưa chỉ thấy hoa cùng bướm</p>
          <p class="mb-0">Mưa rồi chẳng thấy bướm với hoa</p>
          <p class="mb-0">Hoa rụng bướm bay qua khỏi vách</p>
          <p class="mb-0">Vậy ai đã hưởng thú xuân này</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài tụng</h4>
    <p>Trước khi chưa dùng trí huệ Bát Nhã (chưa mưa) để phá trừ vô minh vọng chấp, thì ngã (bướm) và pháp (hoa) còn lăng xăng trước mắt.</p>
    <p>Sau khi dùng trí huệ Bát Nhã phá trừ hết vô minh vọng chấp (mưa rồi) thì ngã và pháp đều hết (hoa rụng, bướm bay). Lúc bấy giờ chơn tâm thanh tịnh hay Phật tánh hiện ra. Vậy ai là người hưởng được cảnh giới này.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="cong-duc-khong-the-nghi-ban" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">58- PHẬT NÓI CÔNG ĐỨC CỦA NGƯỜI THỌ TRÌ KINH NÀY KHÔNG THỂ NGHĨ BÀN</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: “Tu Bồ Đề! Nếu có người đem 7 món báu, chất cao bằng các núi Tu Di trong Đại thế giới (một nghìn triệu thế giới nhỏ) để bố thí, thì người này phước đức nhiều lắm.</p>
      <p class="mb-0">Nhưng, nếu có người thọ trì đọc tụng, hoặc giảng dạy Kinh Kim Cang Bát Nhã Ba La Mật này, hoặc trọn quyển, hay nửa quyển, cho đến tối thiểu là bốn câu kệ, thì người này phước đức hơn người trước nhiều lắm. Phước đức của người trước không bằng một phần trăm, một phần ngàn, một phần muôn, một phần ức của người này, cho đến dùng toán số không thể tính được, hay dùng thí dụ cũng không thể thí dụ được phước đức của người này.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ 13, Phật tán thán công đức không thể nghĩ bàn của người thọ trì và truyền bá kinh này.</p>
    <p>Bố thí 7 báu tuy quý, nhưng chỉ giúp cho người về vật chất, giàu có sung sướng trong một đời mà thôi. Phước đức tuy nhiều, nhưng thuộc về hữu vi hữu lậu.</p>
    <p>Người thọ trì hay giảng dạy kinh Kim Cang Bát Nhã, sẽ được lợi ích về phần tinh thần, mình và người đều sẽ tỏ ngộ lý Bát Nhã và sẽ thành Phật, rồi tự độ và độ tha, lợi ích muôn đời, nên mặc dù thọ trì rất ít, nhưng phước đức vẫn nhiều hơn người trước. Phước này thuộc về vô lậu thanh tịnh, nên không thể tính lường hay thí dụ được.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-nhu-lai-do-chung-sanh" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">59. PHẬT PHÁ CÁI CHẤP "NHƯ LAI CÓ ĐỘ CHÚNG SANH"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề ! Ông chớ lầm tưởng: Như Lai nghĩ rằng: "Ta độ chúng sanh". Tại sao vậy? Nếu Như Lai có nghĩ: "Ta độ chúng sanh", thì Như Lai còn chấp bốn tướng: ngã, nhơn, chúng sanh và thọ giả, tức nhiên không phải Như Lai. Bởi thế nên, Như Lai thật không có độ chúng sanh nào cả.</p>
      <p class="mb-0">Tu Bồ Đề ! Như Lai nói "ta", thật ra không có "ta"; nhưng chúng phàm phu lại chấp có ta. Tu Bồ Đề ! Như Lai nói phàm phu, không phải phàm phu, chỉ giả gọi là phàm phu".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá cái chấp "Phật có độ chúng sanh".</p>
    <p>Nếu còn thấy "ta độ chúng", tức là còn vọng chấp ngã (ta) nhơn (chúng sanh) thì không nhập được Kim Cang Bát Nhã, nên không phải là Phật.</p>
    <p>Vì Như Lai đã nhập Kim Cang Bát Nhã, không còn các vọng chấp ngã, nhơn, v.v... nên Như Lai không thấy "thật có độ sanh".</p>
    <p>Vì phá trừ nghi vấn: Phật đã không chấp bốn tướng, tại sao còn nói "ta"? nên Phật dạy tiếp: "Như Lai nói "ta", nhưng thật ra không có cái "ta", do chúng phàm phu vọng chấp là ta".</p>
    <p>Nói đến phàm phu, sợ chúng sanh chấp "thật có phàm phu", nên Phật liền phá: "Như Lai nói phàm phu, không phải thật phàm phu, chỉ giả gọi là phàm phu".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="thay-32-tuong-chua-phai-thay-phat" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">60. THẤY 32 TƯỚNG TỐT CỦA PHẬT CHƯA PHẢI LÀ THẤY ĐƯỢC PHẬT</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề ! Ông có thể cho thấy 32 tướng tốt của ta đây, là thấy được Phật không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn ! Đúng như vậy, thấy 32 tướng tốt của Phật là thấy được Phật". Phật dạy: "Ông hiểu lầm rồi ! Nếu thấy 32 tướng tốt của ta đây, mà cho là thấy được Phật, thì vua Chuyển Luân Thánh Vương cũng có đủ 32 tướng tốt như ta, vậy vua Chuyển Luân Thánh Vương cũng là Phật hay sao?".</p>
      <p class="mb-0">Tu Bồ Đề thưa: "Bạch Thế Tôn ! Con hiểu ý Phật rồi, không thể cho thấy 32 tướng tốt của Phật là thấy được Phật".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá cái chấp: "thấy sắc thân của Phật là thấy được Phật".</p>
    <p>Đây là lần thứ 4 (lần 1, 2, 3 ở đoạn 7, 25, 35) nói về việc thấy Phật.</p>
    <p>Muốn rõ thêm đoạn này, tôi xin nhắc lại một lần nữa: Thuở xưa, có hai vị Tỳ kheo, từ phương xa đến yết kiến Phật. Đi nửa đường, một vị vì sợ phạm giới, không uống nước có sinh trùng, nên bị khát chết. Một vị kia nhờ uống nước được sống, đến yết kiến Phật.</p>
    <p>Phật quở: "Ông Tỳ kheo kia giữ giới, không uống nước tuy chết, nhưng ông đã thấy ta trước rồi. Còn ông không giữ giới, tuy sống đến yết kiến ta, nhưng ông lại cách ta ngàn dặm !".</p>
    <p>Vậy thì, thấy Phật là thấy cái gì? Không thể cho thấy sắc thân có 32 tướng tốt của Phật, mà cho là thấy được Phật. Bởi thế nên Phật nói: "Nếu thấy 32 tướng tốt của Phật là thấy được Phật, thì vua Chuyển Luân Thánh Vương cũng có đủ 32 tướng tốt như Phật, vậy thì vua Chuyển Luân Thánh Vương cũng là Phật hay sao?".</p>
    <p>Tóm lại, theo tinh thần Bát Nhã, phải xa lìa tất cả các vô minh vọng chấp, thì chơn tâm hay Phật tánh mới hiện. Đó mới là thật thấy Phật.</p>
    
    <p class="font-semibold mt-6">Ngộ được nghĩa lý uyên thâm của đoạn này, nên Cổ nhơn có làm bài tụng như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Phật tức tâm hề tâm tức Phật</p>
          <p class="mb-0">Tâm Phật tùng lai giai vọng vật</p>
          <p class="mb-0">Nhược tri vô Phật phục vô tâm</p>
          <p class="mb-0">Thỉ thị chơn như pháp thân Phật</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Phật tức là tâm, tâm tức Phật</p>
          <p class="mb-0">Tâm Phật cả hai đều vọng vật</p>
          <p class="mb-0">Người ngộ vô tâm và vô Phật</p>
          <p class="mb-0">Liền chứng chơn như pháp thân Phật</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài tụng</h4>
    <p>Phật tức tâm, tâm tức Phật. Tâm và Phật chỉ là hai danh từ để gọi mà thôi, chớ không có cái gì chơn thật. Nếu người diệt trừ các vô minh vọng chấp, ngộ được lý Phật và tâm đều không, thì người ấy sẽ chứng đặng chơn như hay Pháp thân Phật.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="bai-ke-pha-chap" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">61. PHẬT NÓI BÀI KỆ PHÁ CÁI CHẤP "THẤY PHẬT BẰNG SẮC TƯỚNG, NGHE PHẬT BẰNG ÂM THANH"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Khi đó, Đức Thế Tôn nói tiếp bài kệ rằng:<br>Nếu thấy Ta bằng sắc tướng<br>Nghe Ta bằng âm thanh<br>Người này đi đường tà<br>Không thấy được Như Lai.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Bài kệ này tóm lại đoạn trên, Phật dùng Trí huệ Bát Nhã phá cái chấp "thấy Phật qua sắc tướng của Phật" và "nghe Phật qua âm thanh của Phật".</p>
    <p>Đoạn trên đã giải nếu chấp sắc thân có 32 tướng tốt của Phật là Phật, thì vua Chuyển Luân Thánh Vương cũng có đủ 32 tướng tốt như Phật, vậy vua Chuyển Luân Thánh Vương cũng là Phật hay sao?</p>
    <p>Nếu chấp tiếng nói thanh thao vi diệu của Phật là tiếng Phật, thì tiếng chim Ca Lăng Tần Già, cũng thanh thao vi diệu như tiếng Phật, vậy tiếng chim Ca Lăng Tần Già cũng là tiếng Phật hay sao?</p>
    <p>Tóm lại, phải phá trừ các vô minh vọng chấp, nhập Kim Cang Bát Nhã, mới thật thấy và nghe được Phật. Trái lại, nếu còn vô minh vọng chấp, chấp sắc tướng hay âm thanh của Phật, không nhập được Kim Cang Bát Nhã, thì không bao giờ thấy được Phật. Bởi thế nên Phật quở: "Người này đi đường tà (vọng), không bao giờ thấy được Như Lai".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-khong" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">62. PHẬT PHÁ CÁI CHẤP "KHÔNG" (TỨC LÀ CHẤP ĐOẠN DIỆT)</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề ! Ông chớ nên nghĩ rằng: "Như Lai không thừa nhận thân tướng tốt đẹp này là thân Phật". Tại sao vậy? _ Nếu người phát tâm Bồ Đề mà nghĩ như vậy, thì mắc về cái chấp "đoạn diệt". Tu Bồ Đề ! Người phát tâm Bồ Đề, đối với các pháp, không nên chấp "đoạn diệt" (không).</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá cái chấp "sắc thân đủ 32 tướng tốt của Phật không phải là Phật".</p>
    <p>Đúng theo tinh thần kinh Bát Nhã, thì phá hết các chấp: ngã, pháp hữu, vô v.v... lúc bấy giờ chơn tâm, Phật tánh hay Bát Nhã v.v... mới hiện.</p>
    <p>Bởi thế nên "chấp sắc thân đầy đủ tướng tốt của Phật là Phật", đã bị Phật quở là "lạc vào đường tà, không thấy được Phật"; mà "chấp sắc thân đầy đủ tướng tốt của Phật, không phải là Phật", cũng bị Phật quở là "chấp đoạn diệt" nghĩa là "chấp không", thuộc về "đoạn kiến ngoại đạo".</p>
    <p>Chấp "có" (chấp thường) chấp "không" (chấp đoạn) cũng đều là vọng chấp cả, không thể chứng đặng Đạo Bồ Đề. Bởi thế nên Phật dạy: "Người phát tâm Bồ Đề, đối với các pháp, không nên chấp đoạn diệt".</p>
    
    <p class="font-semibold mt-6">Kinh chép:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Nhược nhơn dục thức Phật cảnh giới</p>
          <p class="mb-0">Đương tịnh kỳ ý như hư không</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Nếu người muốn biết cảnh giới Phật</p>
          <p class="mb-0">Tâm phải thanh tịnh như hư không</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý</h4>
    <p>Người muốn nhập cảnh giới Phật hay chứng đạo Bồ Đề, thì phải xa lìa các vọng chấp: có, không, đoạn, thường v.v... giữ tâm ý thanh tịnh như hư không.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phuoc-duc-nhieu-hon-bo-thi" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">63. NGƯỜI NGỘ "TẤT CẢ CÁC PHÁP KHÔNG THẬT", PHƯỚC ĐỨC NHIỀU HƠN NGƯỜI BỐ THÍ VÔ SỐ BẢY BÁU</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề ! Nếu các vị Bồ Tát dùng 7 món báu, đựng đầy trong hằng sa thế giới, đem bố thí; và có vị Bồ Tát ngộ "tất cả pháp không thật" (nhứt thế pháp vô ngã) và chứng đặng "pháp không" (pháp nhẫn) thì công đức của vị Bồ Tát sau này, nhiều hơn vị Bồ Tát trước. Tại sao vậy? Vì vị Bồ Tát sau này không lãnh thọ phước đức".</p>
      <p class="mb-0">Tu Bồ Đề bạch Phật: "Bạch Thế Tôn ! Tại sao Bồ Tát không lãnh thọ phước đức". Phật dạy: "Tu Bồ Đề ! Bồ Tát làm các việc phước đức, nhưng không tham trước, nên nói Bồ Tát không lãnh thọ phước đức".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này có Bồ Tát nhập Kim Cang Bát Nhã chứng được "các pháp vô ngã" (vô sanh pháp nhẫn) nên làm các việc phước đức, mà không tham trước, không mong cầu về mình, không chấp tướng phước đức, nên phước đức nhiều hơn vị Bồ Tát bố thí bảy món báu đựng đầy trong hằng sa thế giới.</p>
    <p>Người đem tâm vọng chấp ngã, pháp của phàm phu, mà làm các việc phước đức, dù phước đức ấy có nhiều đến đâu, cũng thuộc về hữu vi hữu lậu của thế gian phàm phu mà thôi.</p>
    <p>Trái lại, nếu người đem tâm thanh tịnh, không chấp ngã, chấp pháp, hợp với tánh Bát Nhã chơn không, mà làm việc phước đức, không tham cầu phước đức riêng về phần mình, thì người này mặc dù làm rất ít, mà phước đức nhiều vô tận; vì phước đức này thuộc về vô lậu thanh tịnh.</p>
    
    <p class="font-semibold mt-6">Giải thích đoạn này, Ngài Trí Giả Đại sư làm bài tụng:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Tam thiên đại thế giới</p>
          <p class="mb-0">Thất bảo mãn kỳ chung</p>
          <p class="mb-0">Hữu nhơn trì bố thí</p>
          <p class="mb-0">Đắc phước giả như phong</p>
          <p class="mb-0">Du thắng xan tham giả</p>
          <p class="mb-0">Vị đắc đạt chơn tông</p>
          <p class="mb-0">Chung tu tứ cú kệ</p>
          <p class="mb-0">Tri giác chứng toàn không</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Cả đại thiên thế giới</p>
          <p class="mb-0">Đựng đầy bảy món báu</p>
          <p class="mb-0">Bố thí để cầu phước</p>
          <p class="mb-0">Đặng phước cũng như gió</p>
          <p class="mb-0">Còn hơn người bỏn xẻn</p>
          <p class="mb-0">Chưa hiểu nghĩa chơn thật</p>
          <p class="mb-0">Trì tụng bốn câu kệ</p>
          <p class="mb-0">Mới ngộ được lý không</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài tụng</h4>
    <p>Người đem bảy báu đựng đầy một nghìn triệu thế giới nhỏ, để bố thí, được phước đức tuy nhiều, nhưng không lâu dài, như gió thổi qua; không bằng người tỏ ngộ lý chơn không của kinh Bát Nhã, sẽ đặng phước vô lậu thanh tịnh.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="space-y-3">
        <p class="mb-0"><strong>"PHÁP KHÔNG" (hay PHÁP NHẪN):</strong> bản thể chơn như thanh tịnh; nhưng vì mây ngã pháp che mờ. Hành giả tu hành phá trừ được ngã chấp (ngã không) thì một phần chơn như hiện ra, nên gọi là "ngã không chơn như"; phá trừ pháp chấp (pháp không) thì một phần nữa chơn như hiện ra, nên gọi là "pháp không chơn như".</p>
        <p class="mb-0">Chứng được lý ngã không (sanh không) và pháp không, thì gọi là "nhị không chơn như" tức là đặng "vô sanh pháp nhẫn", (chứng đặng ngã pháp đều không).</p>
      </div>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Tại sao Phật dạy rằng Như Lai không có một tí gì gọi là đắc đạo quả Vô thượng Bồ Đề?",
    options: {
      a: "Vì đạo quả Vô thượng Bồ Đề thực chất không tồn tại trong giáo lý đạo Phật.",
      b: "Vì nếu còn thấy mình có chứng đắc tức là vẫn còn vướng vào bốn tướng: ngã, nhơn, chúng sanh và thọ giả.",
      c: "Vì chỉ có hàng phàm phu mới có thể đắc được những quả vị hữu hình.",
      d: "Vì Phật muốn thể hiện sự khiêm tốn tối thượng trước các đệ tử của mình.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Lược giải nêu: 'nếu còn chấp mình đặng đạo quả Vô thượng Bồ Đề, tức là còn bốn tướng: ngã, nhơn, chúng sanh và thọ giả thì không phải thật chứng'. Phải xa lìa vọng chấp ngã, pháp thì mới thật là chứng.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo lời Phật dạy, tại sao các pháp lành được gọi là 'pháp lành' nhưng thực chất 'không phải pháp lành'?",
    options: {
      a: "Vì danh từ 'pháp lành' chỉ là một cách gọi tạm thời của người phàm phu để chỉ những việc ác.",
      b: "Vì nếu chấp vào việc mình tu pháp lành thì đó chỉ là pháp hữu vi hữu lậu, không phải cứu cánh.",
      c: "Vì các pháp lành trong thế gian luôn chứa đựng mầm mống của sự ác đức.",
      d: "Vì tu pháp lành không giúp ích gì cho việc đạt được đạo quả Vô thượng Bồ Đề.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Hành giả còn chấp ta tu pháp lành tức là còn chấp ngã (ta tu) chấp pháp (pháp lành). Nếu đem tâm chấp ngã chấp pháp mà tu pháp lành, thì pháp lành ấy thuộc về hữu vi hữu lậu, không phải là pháp lành cứu cánh.' Phải phá trừ chấp ngã, pháp thì pháp lành ấy mới vô lậu thanh tịnh.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong bài tụng về 'Hoa và Bướm', trạng thái 'mưa rồi' (vũ hậu) tượng trưng cho điều gì trong quá trình tu tập?",
    options: {
      a: "Sự khổ đau của cuộc đời ập đến thử thách lòng kiên trì của người tu hành.",
      b: "Trạng thái tâm hồn trở nên u tối và lạc lối khi không thấy được Phật.",
      c: "Giai đoạn đã dùng trí huệ Bát Nhã để phá sạch vô minh và các vọng chấp về ngã, pháp.",
      d: "Thời điểm mà các pháp lành bắt đầu nảy nở và mang lại phước báo vật chất.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Đại ý bài tụng: 'Sau khi dùng trí huệ Bát Nhã phá trừ hết vô minh vọng chấp (mưa rồi) thì ngã và pháp đều hết (hoa rụng, bướm bay). Lúc bấy giờ chơn tâm thanh tịnh hay Phật tánh hiện ra.'",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao phước đức của người thọ trì bốn câu kệ kinh Kim Cang lại lớn hơn người bố thí vô số bảy báu vật chất?",
    options: {
      a: "Vì bảy món báu trong đại thế giới thực chất không có giá trị thật sự đối với chư Thiên.",
      b: "Vì thọ trì kinh giúp đạt được lợi ích tinh thần bền vững, giúp mình và người cùng giác ngộ thành Phật.",
      c: "Vì việc bố thí vật chất thường đi kèm với tâm địa bỏn xẻn và tính toán.",
      d: "Vì Phật chỉ ưu tiên những người biết đọc chữ và có khả năng giảng dạy kinh điển.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Người thọ trì hay giảng dạy kinh Kim Cang Bát Nhã, sẽ được lợi ích về phần tinh thần, mình và người đều sẽ tỏ ngộ lý Bát Nhã và sẽ thành Phật, rồi tự độ và độ tha, lợi ích muôn đời... Phước này thuộc về vô lậu thanh tịnh'.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Vì sao Phật khẳng định: 'Như Lai thật không có độ chúng sanh nào cả'?",
    options: {
      a: "Vì Như Lai muốn chúng sanh phải tự nỗ lực mà không được dựa dẫm vào tha lực.",
      b: "Vì nếu Như Lai thấy mình có độ chúng sanh thì vẫn còn vướng vào ý niệm về cái tôi (ngã) và người khác (nhơn).",
      c: "Vì mọi chúng sanh thực chất đã là Phật nên không cần đến sự cứu độ của Như Lai.",
      d: "Vì chúng sanh quá đông đảo khiến Như Lai không thể độ hết được trong một kiếp.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Nếu Như Lai có nghĩ: Ta độ chúng sanh, thì Như Lai còn chấp bốn tướng: ngã, nhơn, chúng sanh và thọ giả, tức nhiên không phải Như Lai.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Dựa trên ví dụ về vua Chuyển Luân Thánh Vương, tại sao không thể dùng 32 tướng tốt để nhận diện một vị Phật?",
    options: {
      a: "Vì vua Chuyển Luân cũng có đủ 32 tướng tốt nhưng không phải là Phật, chứng tỏ hình tướng không phải là tiêu chuẩn duy nhất.",
      b: "Vì 32 tướng tốt sẽ biến mất khi vị Phật nhập Niết bàn vô dư.",
      c: "Vì tướng tốt của Phật sáng chói và uy nghiêm hơn tướng tốt của vua Chuyển Luân rất nhiều.",
      d: "Vì vua Chuyển Luân Thánh Vương thực chất là hóa thân của Phật ở cõi trần gian.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Phật nói: 'Nếu thấy 32 tướng tốt của ta đây, mà cho là thấy được Phật, thì vua Chuyển Luân Thánh Vương cũng có đủ 32 tướng tốt như ta, vậy vua Chuyển Luân Thánh Vương cũng là Phật hay sao?'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Phật quở người 'thấy Ta bằng sắc tướng, nghe Ta bằng âm thanh' là người đi đường tà vì lý do gì?",
    options: {
      a: "Vì sắc tướng và âm thanh là những thứ do ma vương tạo ra để lừa dối hành giả.",
      b: "Vì việc tôn thờ hình tượng và nghe kinh tụng là những hành vi mê tín dị đoan.",
      c: "Vì Phật không bao giờ xuất hiện dưới hình dáng con người hay phát ra tiếng nói.",
      d: "Vì họ tìm kiếm Phật ở những hiện tượng biến đổi bên ngoài thay vì nhận ra bản thể chân thật bên trong.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Lược giải nêu: 'Nếu còn vô minh vọng chấp, chấp sắc tướng hay âm thanh của Phật, không nhập được Kim Cang Bát Nhã, thì không bao giờ thấy được Phật. Bởi thế nên Phật quở: Người này đi đường tà (vọng)'.",
    },
  },
  {
    question: "Tại sao người phát tâm Bồ Đề không nên chấp vào 'đoạn diệt' (chấp không)?",
    options: {
      a: "Vì nếu chấp không, người ta sẽ không còn động lực để làm các việc thiện tích đức.",
      b: "Vì chấp không cũng là một dạng vọng chấp sai lầm giống như chấp có, ngăn cản việc chứng đạo Bồ Đề.",
      c: "Vì thực tế các pháp luôn tồn tại vĩnh cửu, không bao giờ mất đi.",
      d: "Vì chấp không chỉ dành cho những vị Tỳ kheo đã đạt được quả vị A La Hán.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Chấp 'có' (chấp thường) chấp 'không' (chấp đoạn) cũng đều là vọng chấp cả, không thể chứng đặng Đạo Bồ Đề.'",
      c: "Sai. Các pháp hữu vi vốn vô thường.",
      d: "Sai.",
    },
  },
  {
    question: "Khái niệm 'Bồ Tát không lãnh thọ phước đức' trong văn bản nên được hiểu như thế nào?",
    options: {
      a: "Có nghĩa là các vị Bồ Tát đã đủ phước nên không cần tích lũy thêm thông qua các hành động bố thí.",
      b: "Có nghĩa là thế giới này không có đủ báu vật để đáp ứng phước đức của một vị Bồ Tát.",
      c: "Có nghĩa là Bồ Tát làm các việc phước nhưng không tham cầu, không chấp vào phước báo cho riêng mình.",
      d: "Có nghĩa là mọi phước đức Bồ Tát tạo ra đều tự động chuyển giao cho chúng sanh khác.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Phật dạy: 'Bồ Tát làm các việc phước đức, nhưng không tham trước, nên nói Bồ Tát không lãnh thọ phước đức'.",
      d: "Sai.",
    },
  },
  {
    question: "Trạng thái 'Vô sanh pháp nhẫn' hay 'Pháp nhẫn' được định nghĩa là gì trong phần Lược giải?",
    options: {
      a: "Là pháp tu giúp hành giả không bao giờ phải tái sinh vào các cõi khổ đau.",
      b: "Là khả năng kiên nhẫn tuyệt đối trước sự nhục mạ và tấn công của kẻ thù.",
      c: "Là sự chấp nhận rằng mọi sự vật hiện tượng đều do một đấng tối cao sáng tạo nên.",
      d: "Là khi hành giả phá trừ được cả ngã chấp và pháp chấp, khiến bản thể chơn như hiện ra hoàn toàn.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai. Đây là nhẫn nhục Ba la mật, không phải định nghĩa của Vô sanh pháp nhẫn.",
      c: "Sai.",
      d: "Đúng. 'Chứng được lý ngã không (sanh không) và pháp không, thì gọi là 'nhị không chơn như' tức là đặng 'vô sanh pháp nhẫn', (chứng đặng ngã pháp đều không).'",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-9-phan-chanh-ton-tiep-theo',
  slug: 'bai-thu-9-phan-chanh-ton-tiep-theo',
  title: 'Bài Thứ 9 - Phần Chánh tôn (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 13,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-9-phan-chanh-ton-tiep-theo/Tinh_hoa_Kinh_Kim_Cang.png',
      readingContent,
      tableOfContents: [
        { id: 'b-phan-chanh-ton-tiep-theo', label: 'B. Phần Chánh tôn (tiếp theo)' },
        { id: 'pha-chap-nhu-lai-dang-dao', label: '56. Phật phá cái chấp "Như Lai đặng đạo quả vô thượng Bồ-đề"', indent: 1 },
        { id: 'phap-nay-binh-dang', label: '57. Pháp này bình đẳng không có thấp cao', indent: 1 },
        { id: 'cong-duc-khong-the-nghi-ban', label: '58. Phật nói công đức của người thọ trì Kinh này không thể nghĩ bàn', indent: 1 },
        { id: 'pha-chap-nhu-lai-do-chung-sanh', label: '59. Phật phá cái chấp "Như Lai có độ chúng sanh"', indent: 1 },
        { id: 'thay-32-tuong-chua-phai-thay-phat', label: '60. Thấy 32 tướng tốt của Phật chưa phải là được thấy Phật', indent: 1 },
        { id: 'bai-ke-pha-chap', label: '61. Phật nói bài kệ, phá cái chấp "thấy Phật bằng sắc tướng..."', indent: 1 },
        { id: 'pha-chap-khong', label: '62. Phật phá cái chấp "không" (tức là chấp đoạn diệt)', indent: 1 },
        { id: 'phuoc-duc-nhieu-hon-bo-thi', label: '63. Người ngộ "các pháp không thật", phước đức nhiều hơn bố thí 7 báu', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-9-phan-chanh-ton-tiep-theo/Shattering_Illusions.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/CHj-cp25VoE',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4p1W9X7TICe1zMldbsTmcX',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 9',
    passPercentage: 70,
    questions,
  },
}

export default lesson