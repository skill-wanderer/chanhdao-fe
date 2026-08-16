import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="b-phan-chanh-ton-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ TƯ: B- Phần Chánh tôn (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="cong-duc-tri-kinh" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">13. PHẬT NÓI CÔNG ĐỨC TRÌ KINH NÀY NHIỀU HƠN BỐ THÍ THẤT BẢO</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Nếu có người đựng đầy bảy báu trong đại thế giới (một nghìn triệu thế giới nhỏ) đem bố thí (tài thí), thì phước đức nhiều không?". Tu Bồ Đề thưa: "Bạch Thế Tôn! Nhiều lắm".</p>
      <p>Phật dạy: "Tu Bồ Đề! Nếu có người thọ trì đọc tụng kinh này, hoặc vì người giảng nói trọn quyển hoặc nửa quyển, cho đến tối thiểu là bốn câu kệ, thì công đức (pháp thí) của người này nhiều hơn người trước. Tại sao vậy? Vì tất cả Phật và Pháp đều từ kinh này mà ra".</p>
      <p class="mb-0">Phật dạy tiếp: "Tu Bồ Đề! Gọi là "Phật, Pháp", thực ra cũng không phải "Phật, Pháp", chỉ tạm gọi là "Phật, Pháp"".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ hai, Phật nói về công đức thọ trì đọc tụng kinh này, nhiều hơn người bố thí thất bảo.</p>
    <p>Đoạn này nên chia làm ba phần để giải thích.</p>
    
    <div class="pl-4 space-y-4">
      <div>
        <p class="font-semibold mb-2">1. So sánh phước đức giữa tài thí và pháp thí</p>
        <p class="mb-0">Ngọc ngà châu báu là vật rất quý, đã ít có và khó kiếm, nên không ai có nhiều được. Nhưng nếu người nào có nhiều châu báu, đựng đầy một nghìn triệu thế giới nhỏ (đại thế giới) đem ra bố thí, tất nhiên phước đức nhiều lắm.</p>
        <p class="mb-0 mt-2">Nhưng, nếu có người thọ trì kinh này hoặc giảng nói cho người nghe, từ một quyển, nửa quyển, hoặc một tờ cho đến tối thiểu là bốn câu kệ, thì công đức của người sau, lại nhiều hơn người trước. Tại sao vậy? Vì bố thí tiền tài, dù có nhiều bao nhiêu cũng chỉ giúp về phần vật chất, làm cho người giàu có sung sướng nhất thời mà thôi. Còn bố thí về giáo pháp là giúp về phần tinh thần, làm cho người hiểu biết giáo lý tu hành, thoát ly sinh tử luân hồi, kiến tánh thành Phật, rồi trở lại độ chúng sinh đều được giải thoát. Bởi thế nên bố thí pháp (tinh thần) tuy ít, nhưng phước đức nhiều hơn bố thí tài (vật chất).</p>
      </div>

      <div>
        <p class="font-semibold mb-2">2. Phật và Pháp đều từ kinh này sanh.</p>
        <p class="mb-0">Kinh này là Kinh "Kim Cang Bát Nhã", tức là kinh nói về "Trí huệ Phật". Trí huệ này phá núi vô minh phiền não, nhưng không bị hư hoại, nên gọi là "Kim Cang".</p>
        <p class="mb-0 mt-2">Nhờ Trí huệ Kim Cang Bát Nhã phá hết vô minh, nên mới minh tâm kiến tánh thành Phật, nên nói: "Kinh này sanh ra chư Phật". Và sau khi thành Phật rồi, cũng nhờ có Trí huệ Bát Nhã mới nói ra giáo pháp, nên nói "Kinh này sanh ra Pháp".</p>
      </div>

      <div>
        <p class="font-semibold mb-2">3. Phá cái chấp "thật có Phật, Pháp".</p>
        <p class="mb-0">Đúng theo "tánh Bát Nhã Chơn không", thì nói năng không trúng, suy nghĩ chẳng nhằm, nên không có thể kêu gọi là gì được cả. Nhưng sở dĩ gọi "Phật, Pháp", là một danh từ, đặt ra để gọi tạm mà thôi; thật ra cũng không phải là "Phật, Pháp". Nếu còn chấp "thật có Phật, Pháp" thì không đúng với "Tánh Bát Nhã chơn không", nên Phật dạy: "Gọi là Phật Pháp, thực ra cũng không phải Phật Pháp, chỉ tạm gọi là Phật Pháp".</p>
      </div>
    </div>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="space-y-3">
        <p class="mb-0"><strong>Bảy món báu:</strong> Vàng, bạc, ngọc lưu ly, ngọc xà cừ, ngọc mã não, ngọc san hô và ngọc hổ phách.</p>
        <p class="mb-0"><strong>Đại thế giới:</strong> Tức là Đại thiên thế giới. Thế giới chúng ta ở đây là một thế giới nhỏ; 1.000 thế giới nhỏ, gọi là "Tiểu thiên thế giới"; 1.000 Tiểu thiên thế giới, gọi là "Trung thiên thế giới"; 1.000 Trung thiên thế giới, gọi là "Đại thiên thế giới". Một Đại thiên thế giới là một nghìn triệu thế giới nhỏ. Thế giới Ta bà là một Đại thiên thế giới.</p>
        <p class="mb-0"><strong>Kệ:</strong> Một bài kệ là 4 câu, hoặc nhiều câu, như thơ tứ cú, bát cú v.v... ở nước ta.</p>
        <p class="mb-0"><strong>Thọ trì:</strong> Lãnh thọ và hành trì.</p>
      </div>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="bon-qua-thinh-van" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">14. BỐN QUẢ THINH VĂN, KHÔNG NÊN CHẤP MÌNH CÓ CHỨNG QUẢ</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Nếu vị Tu đà hoàn tự nghĩ rằng: "Tôi đã đặng quả Tu đà hoàn", nghĩ như thế có được không?"</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Không thể được. Tại sao vậy? _ Vị Tu đà hoàn, phải không còn có thấy mình có chứng quả Tu đà hoàn (Hán dịch Nhập lưu), thế mới thật là chứng quả Tu đà hoàn".</p>
      <p>Phật hỏi: "Tu Bồ Đề! Nếu vị Tư đà hàm tự nghĩ rằng: "Tôi đã đặng quả Tư đà hàm"; nghĩ như thế có được không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Không thể được. Tại sao vậy? _ Vị Tư đà hàm, phải không còn có thấy mình có chứng quả Tư đà hàm (Hán dịch Nhứt lai), thế mới thật là chứng quả Tư đà hàm".</p>
      <p>Phật hỏi: "Tu Bồ Đề! Nếu vị A na hàm tự nghĩ rằng: "Tôi đã đặng quả A na hàm"; nghĩ như thế có đặng không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Không thể được. Tại sao vậy? _ Vị A na hàm, phải không còn có thấy mình có chứng quả A na hàm (Tàu dịch là Bất lai), thế mới thật là chứng quả A na hàm".</p>
      <p>Phật hỏi: "Tu Bồ Đề! Nếu vị A la hán tự nghĩ rằng: "Tôi đã đặng quả A la hán"; nghĩ như vậy có đặng không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Không thể được. Tại sao vậy? _ Vị A la hán, phải không còn có thấy mình có chứng quả A la hán, thế mới thật là chứng quả A la hán. Nếu còn thấy mình chứng quả A la hán tức là còn trụ chấp (dính mắc) về bốn tướng: ngã, nhơn, chúng sanh và tu hành giả, thì không phải thật chứng A la hán.</p>
      <p>Bạch Thế Tôn! Cũng như con đây, vì con không còn chấp mình có tu chứng, nên mới được Như Lai chứng nhận: "Tu Bồ Đề đã đặng pháp Tam muội vô tránh; Tu Bồ Đề là người ưa tu hạnh tịch tịnh (A lan na); Tu Bồ Đề là vị A la hán ly dục thứ nhứt. Trong chúng, Tu Bồ Đề là hơn hết".</p>
      <p class="mb-0">Bạch Thế Tôn! Nếu con nghĩ (chấp) rằng: "Con đã đặng quả A la hán, con là vị A la hán ly dục thứ nhứt v.v...", thì Đức Như Lai không chứng nhận và không khen ngợi con như vậy".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã, phá trừ cái chấp của bốn quả Thinh văn, tự thấy mình có chứng quả.</p>
    <p>Trong kinh Tứ thập nhị chương có chép:</p>
    <p class="italic">"Tu vô tu tu, chứng vô chứng chứng v.v..."</p>
    <p>Nghĩa là: Tu mà không còn chấp mình tu, thế mới thật là tu. Chứng quả, mà không chấp mình chứng quả, thế mới thật là chứng quả v.v....</p>
    <p>Nếu người tu chứng, đúng theo tinh thần của "Kim Cang Bát Nhã", nghĩa là không còn các vọng chấp ngã và pháp hay bốn tướng, thì mới thật tu và thật chứng.</p>
    <p>Trái lại, nếu còn chấp ngã, pháp hay bốn tướng (ngã, nhơn v.v..) tức là không nhập được "Kim Cang Bát Nhã", thì không phải thật tu và thật chứng.</p>
    <p>Bởi thế nên bốn quả Thinh văn, nếu còn tự thấy mình có chứng quả Tu đà hoàn, Tư đà hàm, A na hàm, A la hán, tức là còn chấp ngã (ta chứng đặng) và chấp pháp (quả vị để chứng) thì không nhập được "Kim Cang Bát Nhã", nên không phải là Tu đà hoàn, Tư đà hàm, A na hàm, A la hán.</p>
    <p>Ông Tu Bồ Đề, tự đem mình ra làm thí dụ điển hình. Đại ý ông nói: Nếu ông chấp rằng: "Tôi đã đặng pháp Tam muội và đặng quả A la hán v.v..." tức nhiên ông còn chấp ngã (quả A la hán) chấp pháp (Tam muội), chưa nhập được Kim Cang Bát Nhã, thì Phật đâu có ấn chứng cho ông là vị A la hán ly dục thứ nhứt v.v....</p>
    <p>Ngài Phó Đại sĩ nói bài tụng giải thích rằng:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Vô sanh tức vô diệt</p>
          <p class="mb-0">Vô ngã phục vô nhơn</p>
          <p class="mb-0">Vĩnh trừ phiền não chướng</p>
          <p class="mb-0">Trường từ hậu hữu thân</p>
          <p class="mb-0">Cảnh vong tâm diệc diệt</p>
          <p class="mb-0">Vô phục khởi tham sân</p>
          <p class="mb-0">Vô bi không hữu trí</p>
          <p class="mb-0">Hốt nhiên độc nhậm chơn.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Không sanh cũng không diệt</p>
          <p class="mb-0">Không ngã cũng không nhơn</p>
          <p class="mb-0">Dứt trừ phiền não chướng</p>
          <p class="mb-0">Không còn có thân sau</p>
          <p class="mb-0">Tâm cảnh đều vắng lặng</p>
          <p class="mb-0">Do đâu khởi tham sân</p>
          <p class="mb-0">Không bi cũng không trí</p>
          <p class="mb-0">Thế mới nhập Chơn như.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý</h4>
    <p>Nếu không còn các vọng chấp nhơn, ngã, sanh, diệt v.v... thì các phiền não không do đâu mà sanh ra. Phiền não không sanh, tức không tạo nghiệp, nên không bị sanh tử luân hồi. Vì tâm và cảnh đã vắng lặng thì do đâu khởi tham, sân, si. Cho đến bi và trí cũng không chấp, nên chơn tâm hay chơn như tự hiện bày.</p>
    <p>Tóm lại, vì không còn các vô minh vọng chấp: nhơn, ngã, tâm, cảnh, sanh, diệt v.v... nên mới chứng đặng chơn tâm thanh tịnh. Như thế mới thật tu và thật chứng.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="space-y-4">
        <div>
          <p class="mb-1"><strong>Tu đà hoàn:</strong></p>
          <p class="mb-0">Trong bốn quả Thanh văn của Tiểu thừa, Tu đà hoàn là quả Thánh nhỏ nhứt. Tu đà hoàn là dịch âm tiếng Phạn, Trung hoa dịch là "Dự lưu" hoặc "Nhập lưu", nghĩa là mới dự vào dòng Thánh nhơn.</p>
        </div>
        <div>
          <p class="mb-1"><strong>Tư đà hàm:</strong></p>
          <p class="mb-0">Quả Thánh thứ hai trong bốn quả Thinh văn. Trung hoa dịch âm của tiếng Phạn, dịch nghĩa là "Nhứt vãng lai"; nghĩa là còn một lần qua cõi nhơn, thiên để tu hành đoạn hoặc, rồi mới chứng đặng quả A la hán.</p>
        </div>
        <div>
          <p class="mb-1"><strong>A na hàm:</strong></p>
          <p class="mb-0">Quả Thánh thứ ba trong bốn quả. Trung hoa dịch âm tiếng Phạn, dịch nghĩa "Bất lai"; nghĩa là không còn trở lại thọ sanh trong Dục giới nữa.</p>
        </div>
        <div>
          <p class="mb-1"><strong>A la hán:</strong></p>
          <p class="mb-2">Quả Thánh thứ tư trong bốn quả. Trung hoa dịch âm tiếng Phạn, nếu dịch nghĩa, có ba:</p>
          <div class="pl-6 space-y-1">
            <p class="mb-0">a. Vô sanh: Không còn sanh trở lại ba cõi</p>
            <p class="mb-0">b. Sát tặc: Đã giết hết các giặc phiền não.</p>
            <p class="mb-0">c. Ứng cúng: Xứng đáng cho nhơn thiên cúng dường.</p>
          </div>
          <p class="mt-2 mb-0">Do tu nhơn Tỳ kheo có 3 nghĩa, nên chứng quả A la hán cũng có 3 nghĩa.</p>
        </div>
        <div>
          <p class="mb-1"><strong>TAM MUỘI:</strong> Trung Hoa dịch âm tiếng Phạn, dịch nghĩa là "Chánh định".</p>
          <p class="mb-1"><strong>TAM MUỘI VÔ TRÁNH:</strong> Pháp chánh định hơn hết.</p>
          <p class="mb-0"><strong>A LAN NA:</strong> Trung Hoa dịch âm tiếng Phạn, nghĩa là không ồn ào náo nhiệt, vắng vẻ thanh tịnh, giải thoát không bị trần lụy.</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-dac-phap" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">15. PHẬT PHÁ CÁI CHẤP "NHƯ LAI CÓ ĐẮC PHÁP"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Về quá khứ đối với trước Phật Nhiên Đăng, ta có đắc pháp không?".</p>
      <p class="mb-0">Tu Bồ Đề thưa: "Bạch Thế Tôn! Đức Như Lai thật không có "đắc pháp" gì cả".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá trừ cái chấp "Như Lai thật có đắc pháp".</p>
    <p>Kinh chép: "Về quá khứ, vô lượng, vô số kiếp về trước, Đức Thích Ca đối trước Phật Nhiên Đăng, được Ngài truyền chánh pháp và thọ ký, tương lai sẽ được thành Phật, hiệu là Thích Ca Mâu Ni".</p>
    <p>Nhưng, nếu Như Lai còn chấp mình có "đắc pháp và được thọ ký" tức là Như Lai còn chấp ngã (ta được) chấp pháp (đắc pháp) thì không phải là Như Lai. Bởi thế nên ông Tu Bồ Đề thưa: "Bạch Thế Tôn! Như Lai không có đắc pháp gì cả".</p>
    <p>Vì Như Lai không chấp mình có "đắc pháp" và "thọ ký", nên không mắc vào bốn tướng ngã, nhơn v.v... được nhập Kim Cang Bát Nhã. Như thế mới thật là "đắc pháp" và "được thọ ký".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-trang-nghiem-coi-phat" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">16. PHẬT PHÁ CHẤP "BỒ TÁT THẬT CÓ LÀM TRANG NGHIÊM CÕI PHẬT"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Bồ Tát có làm trang nghiêm cõi Phật không?"</p>
      <p class="mb-0">Tu Bồ Đề thưa: "Bạch Thế Tôn! Bồ Tát không làm trang nghiêm cõi Phật. Tại sao vậy? Bồ Tát làm trang nghiêm cõi Phật, mà không thấy (chấp) mình có trang nghiêm cõi Phật, như thế mới thật là trang nghiêm cõi Phật".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá trừ cái chấp "Bồ Tát có làm trang nghiêm cõi Phật".</p>
    <p>Bồ Tát làm các Phật sự, giáo hoá chúng sanh, đó là trang nghiêm cõi Phật. Nhưng, nếu Bồ Tát còn chấp mình có làm Phật sự, giáo hoá chúng sanh, thì Bồ Tát còn tâm nhiễm ô vọng chấp ngã (ta giáo hoá) nhơn (người được giáo hoá). Đem tâm nhiễm ô vọng chấp mà làm "trang nghiêm cõi Phật", thì cõi Phật thành nhiễm ô, không thể "trang nghiêm cõi Phật thanh tịnh" được.</p>
    <p>Trái lại, phải dùng tâm thanh tịnh (không còn các nhiễm ô vọng chấp, chấp ngã, chấp pháp v.v...) mà trang nghiêm cõi Phật, thì cõi Phật mới thanh tịnh trang nghiêm được.</p>

    <p class="font-semibold mt-6">Ngài Xuyên Thiền sư dạy:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Chánh nhơn thuyết tà pháp, tà pháp tất qui chánh</p>
          <p class="mb-0">Tà nhơn thuyết Chánh pháp, chánh pháp tất qui tà</p>
          <p class="mb-0">Giang Bắc thành chỉ, Giang Nam quít.</p>
          <p class="mb-0">Xuân lai đô phóng nhứt ban hoa.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Người chánh nói pháp tà, tà pháp trở về chánh</p>
          <p class="mb-0">Người tà nói pháp chánh, pháp chánh trở thành tà.</p>
          <p class="mb-0">Cũng một cây, nhưng ở Giang bắc thì cây chỉ xác, Giang nam thì thành cây quít.</p>
          <p class="mb-0">Xuân về đều trổ một thứ hoa.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý</h4>
    <p>Người đem tâm đời (danh, lợi, sân, si v.v...) mà làm việc Đạo (làm các Phật sự) thì việc Đạo biến thành việc đời. Trái lại, người đem tâm Đạo (từ bi, hỷ xả v.v...) mà làm việc đời (tiếp xúc làm việc với chúng sanh) thì việc đời trở thành việc Đạo (tứ nhiếp pháp, ngũ minh v.v...) cũng như một thứ cây, nhưng nếu ở đất Giang Bắc thì thành cây chỉ xác, trái đặc ruột và chua, ăn không được; còn ở đất Giang Nam thì thành cây quít, trái ngọt.</p>
    <p>Dù việc chánh hay tà, việc đời hay đạo, đều có nhơn và có quả, chẳng qua tốt hay xấu mà thôi. Cũng như cây chỉ xác hay cây quít, Xuân về đều trổ một thứ hoa và một thứ trái; nhưng trái quít thì ngọt, mà chỉ xác lại chua.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="dung-sanh-vong-tam" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">17. PHẬT DẠY: "ĐỪNG SANH VỌNG TÂM TRỤ CHẤP MỘT NƠI NÀO"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Các vị Đại Bồ Tát phải giữ tâm thanh tịnh, chớ nên sanh vọng tâm trụ chấp nơi sắc trần, thinh trần, hương trần, vị trần, xúc trần và pháp trần. Tóm lại, Bồ Tát đừng khởi vọng tâm trụ chấp một nơi nào cả" (Ưng vô sở trụ nhi sanh kỳ tâm).</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Hai đoạn trên phá cái chấp "Như Lai có đắc pháp" và "Bồ Tát có làm trang nghiêm cõi Phật". Đoạn này tóm lại, Bồ Tát phải giữ tâm thanh tịnh, không nên sanh vọng tâm trụ chấp một nơi nào cả.</p>
    <p>Tất cả sự vật trong vũ trụ, tuy vô cùng vô tận, nhưng không ngoài 18 giới là 6 căn, 6 trần và 6 thức; căn và trần thuộc về vật chất, còn thức thuộc về tinh thần.</p>
    <p>Phật dạy các vị Bồ Tát, phải giữ tâm thanh tịnh, không nên sanh vọng tâm dính mắc (trụ chấp) nơi sắc trần, thinh trần, hương trần, vị trần, xúc trần và pháp trần v.v...</p>
    <p>Tóm lại, chỉ trong một câu, Phật dạy: "Đừng sanh vọng tâm dính mắc (trụ chấp) một nơi nào".</p>
    <p>Thuở xưa, ngài Huệ Năng vừa nghe phú ông tụng kinh Kim Cang Bát Nhã vừa đến câu:</p>
    <p class="italic">"Ưng vô sở trụ nhi sanh kỳ tâm"<br><span class="opacity-80">(Đừng khởi vọng tâm trụ chấp một nơi nào).</span></p>
    <p>Ngài liền tỏ ngộ lý Kim Cang Bát Nhã!... Ngài hân hoan ca ngợi: "Hay quá! kinh Kim Cang Bát Nhã hay quá!"</p>
    <p>"Đừng sanh vọng tâm trụ chấp một nơi nào", tức là "đừng sanh vọng tâm chấp ngã, chấp pháp v.v..." không chấp ngã, pháp thì phiền não không sanh.</p>
    <p>Phiền não không sanh thì tâm được thanh tịnh, không tạo nghiệp sanh tử luân hồi. Đó là phương pháp tu của Đại thừa Đốn giáo, rất giản dị và mau chóng, để hàng phục vọng tâm và an trụ chơn tâm.</p>
    <p>Sau khi đại ngộ lý kinh Bát Nhã, Tổ Huệ Năng đã minh tâm kiến tánh, nên Ngài có dạy rằng:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Hà kỳ tự tánh bổn tự thanh tịnh</p>
          <p class="mb-0">Hà kỳ tự tánh bổn bất sanh diệt</p>
          <p class="mb-0">Hà kỳ tự tánh bổn tự cụ túc</p>
          <p class="mb-0">Hà kỳ tự tánh bổn vô diêu động</p>
          <p class="mb-0">Hà kỳ tự tánh năng sanh vạn pháp</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Ai ngờ tâm mình vốn tự thanh tịnh</p>
          <p class="mb-0">Ai ngờ tâm mình vốn không sanh diệt</p>
          <p class="mb-0">Ai ngờ tâm mình vốn tự đầy đủ</p>
          <p class="mb-0">Ai ngờ tâm mình vốn không diêu động</p>
          <p class="mb-0">Ai ngờ tâm mình hay sanh muôn pháp</p>
        </div>
      </div>
    </div>

    <p>Đức Ngũ Tổ đến lúc tuổi già, muốn chọn người để truyền Tổ vị, nên Ngài truyền dạy trong chúng, mỗi người phải làm một bài kệ, để trình bày sự tu chứng của mình, nếu người nào tỏ ngộ được lý Đạo, Ngài sẽ truyền Tổ vị, làm Tổ thứ Sáu.</p>
    <p>Ngài Thần Tú là bực Thượng tọa, tài đức siêu quần, làm kệ rất hay, nhưng vì chưa tỏ ngộ được lý Kim Cang Bát Nhã, còn trụ chấp các tướng, có tu, có chứng v.v... nên bị Tổ Huệ Năng quở rằng: "Còn đứng ngoài hàng rào".</p>

    <p class="font-semibold mt-6">Bài kệ của Ngài Thần Tú:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Thân thị Bồ Đề thọ</p>
          <p class="mb-0">Tâm như minh cảnh đài</p>
          <p class="mb-0">Thời thời thường phất thức</p>
          <p class="mb-0">Vật sử nhạ trần ai.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Thân là cây Bồ Đề (có tướng)</p>
          <p class="mb-0">Tâm như đài gương sáng (có tướng)</p>
          <p class="mb-0">Mỗi giờ thường lau quét (có tu)</p>
          <p class="mb-0">Chớ cho dính bụi trần (có chứng)</p>
        </div>
      </div>
    </div>

    <p>Tổ Huệ Năng, đã ngộ được lý Kim Cang Bát Nhã, không trụ chấp các tướng, nên được đức Ngũ Tổ truyền trao y bát và làm vị Tổ thứ sáu.</p>

    <p class="font-semibold mt-6">Bài kệ của Tổ Huệ Năng:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Bồ Đề bổn vô thọ</p>
          <p class="mb-0">Tâm phi minh cảnh đài</p>
          <p class="mb-0">Bổn lai vô nhứt vật</p>
          <p class="mb-0">Hà xự nhạ trần ai.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Bồ Đề không phải cây (vô tướng)</p>
          <p class="mb-0">Chơn tâm không phải đài (vô tướng)</p>
          <p class="mb-0">Xưa nay không một vật (vô tướng)</p>
          <p class="mb-0">Chỗ nào dính bụi trần (vô tướng)</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-than-phat-cao-lon" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">18. PHẬT PHÁ CÁI CHẤP "THÂN PHẬT CAO LỚN NHƯ NÚI TU DI"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Báo thân của Phật như núi Tu di. Vậy Báo thân của Phật có cao lớn không?".</p>
      <p class="mb-0">Ông Tu Bồ Đề thưa: "Bạch Thế Tôn! Lớn lắm. Nhưng, Phật nói: "Không chấp thân cao lớn, mới thật là cao lớn"".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã, phá trừ cái chấp "Báo thân Phật cao lớn".</p>
    <p>Từ trước đến đây, đã nhiều lần hỏi và đáp. Vì muốn phá các vọng chấp, để nhập với "Tánh Bát Nhã chơn không", cho nên Phật hỏi. Và cũng vì muốn phá các vọng chấp, để nhập với "Tánh Bát Nhã chơn không" cho nên ông Tu Bồ Đề đáp. Nếu chúng sanh chấp có, thì Ngài nói không; chúng sanh chấp không, thì Ngài nói có v.v... Dù nói có, nói không, nói lớn, nói nhỏ v.v... đều để phá các chấp của chúng sanh, đem về "Tánh Bát Nhã chơn không".</p>
    <p>Phật hỏi ông Tu Bồ Đề: "Báo thân của Phật có cao lớn không?".</p>
    <p>Tu Bồ Đề đáp: "Báo thân của Phật cao lớn lắm".</p>
    <p>Nhưng sợ chúng sanh chấp "thân Phật cao lớn", nên ông Tu Bồ Đề liền dẫn lời Phật nói để phá chấp: "Phật nói không chấp thân cao lớn, mới thật là cao lớn". Nghĩa là: Phàm cái gì còn thấy nghe và suy nghĩ được, thì cái đó không phải tuyệt đối; phải siêu thoát ra ngoài sự thấy nghe và suy nghĩ, mới là tuyệt đối.</p>
    <p>Đức Lão tử nói: "Đạo mà có thể nói được, thì không phải là Đạo".</p>
    <p>Tóm lại, nếu còn "chấp thân cao lớn", tất nhiên còn chấp ngã và chấp pháp, thì không nhập được Kim Cang Bát Nhã, nên chưa phải thân cao lớn.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <p class="font-semibold mb-2">BÁO THÂN: Phật có 3 thân:</p>
      <div class="pl-4 space-y-2">
        <p class="mb-0"><strong>1. Pháp thân:</strong> Tức là Pháp tánh hay chơn tâm, không có hình tướng.</p>
        <p class="mb-0"><strong>2. Báo thân:</strong> Thân do phước báo tu hành, trải qua 3 vô số kiếp mới được. Kinh chép: Báo thân của Phật lớn bằng núi Tu di; duy có bực Bồ Tát mới thấy được.</p>
        <p class="mb-0"><strong>3. Ứng thân hay Hoá thân:</strong> Phật tuỳ các loại chúng sanh mà ứng hiện hay hoá hiện ra mỗi thân, để tế độ.</p>
      </div>
    </div>

  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo văn bản, tại sao công đức của việc thọ trì và giảng nói Kinh Kim Cang (pháp thí) lại lớn hơn việc bố thí bảy báu đầy khắp đại thế giới (tài thí)?",
    options: {
      a: "Vì tất cả chư Phật và giáo pháp đều từ trí tuệ của kinh này mà sinh ra.",
      b: "Vì pháp thí là hành động giúp mọi người có được quyền năng siêu nhiên như chư Phật.",
      c: "Vì pháp thí giúp người khác đạt được sự giàu có và sung sướng lâu dài hơn vật chất.",
      d: "Vì việc bố thí bảy báu quá dễ dàng so với việc đọc tụng và hiểu thấu ý nghĩa của kinh.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Phật dạy: 'Vì tất cả Phật và Pháp đều từ kinh này mà ra.' Bố thí tài chỉ đem lại sung sướng vật chất nhất thời, còn pháp thí giúp thoát ly luân hồi, kiến tánh thành Phật.",
      b: "Sai.",
      c: "Sai. Pháp thí hướng tới giải thoát tinh thần, không phải giàu có vật chất.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao một vị A-la-hán thực thụ không bao giờ tự nghĩ rằng: 'Tôi đã đặng quả A-la-hán'?",
    options: {
      a: "Vì vị đó cần phải giữ khiêm tốn trước mặt đức Thế Tôn để được khen ngợi.",
      b: "Vì quả vị A-la-hán thực chất không có giá trị gì trong hệ thống tu hành của Phật giáo.",
      c: "Vì nếu còn thấy mình chứng quả tức là còn dính mắc vào bốn tướng: ngã, nhơn, chúng sanh và thọ giả.",
      d: "Vì vị A-la-hán đó vẫn còn phải thọ sanh lại trong cõi Dục giới để tiếp tục tu hành.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Vị A-la-hán không thấy mình chứng quả, vì nếu tự nghĩ 'Tôi đã đặng quả' tức là còn chấp ngã (ta chứng đặng) và chấp pháp (quả vị để chứng), nghĩa là còn trụ chấp bốn tướng, chưa nhập được Kim Cang Bát Nhã.",
      d: "Sai. Bậc A-la-hán là bậc Vô sanh, không còn trở lại ba cõi.",
    },
  },
  {
    question: "Trong phần giải thích về việc Bồ-tát trang nghiêm cõi Phật, điều gì là quan trọng nhất để sự trang nghiêm đó trở nên thực thụ?",
    options: {
      a: "Bồ-tát phải đạt được quả vị A-la-hán trước khi bắt đầu công việc trang nghiêm.",
      b: "Bồ-tát phải sử dụng những vật liệu quý giá nhất như bảy báu để làm đẹp cõi Phật.",
      c: "Bồ-tát phải thực hiện việc đó với một tâm thanh tịnh, không chấp mình có làm Phật sự.",
      d: "Bồ-tát cần có sự công nhận của các vị Phật khác về công việc trang nghiêm của mình.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Bồ Tát làm trang nghiêm cõi Phật, mà không thấy (chấp) mình có trang nghiêm cõi Phật, như thế mới thật là trang nghiêm cõi Phật.' Phải dùng tâm thanh tịnh, không chấp ngã, chấp pháp.",
      d: "Sai.",
    },
  },
  {
    question: "Câu kinh nổi tiếng 'Ưng vô sở trụ nhi sanh kỳ tâm' có ý nghĩa chủ đạo là gì?",
    options: {
      a: "Đừng để tâm dính mắc vào sáu trần (sắc, thinh, hương, vị, xúc, pháp) mà hãy giữ tâm thanh tịnh.",
      b: "Chỉ nên khởi tâm thiện và tiêu diệt hoàn toàn các tâm ác để trở thành Bồ-tát.",
      c: "Nên tập trung tâm trí vào một nơi duy nhất để đạt được đại định.",
      d: "Tâm nên dựa vào giáo pháp của Phật để không bị lung lay trước sóng gió cuộc đời.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Ý nghĩa là: Đừng sanh vọng tâm dính mắc (trụ chấp) một nơi nào (như sắc trần, thinh trần...). Giữ tâm thanh tịnh, không trụ chấp.",
      b: "Sai.",
      c: "Sai. Đây là nghĩa ngược lại hoàn toàn với 'vô trụ'.",
      d: "Sai. Thậm chí giáo pháp cũng không được trụ chấp.",
    },
  },
  {
    question: "Sự khác biệt cốt lõi giữa bài kệ của Thần Tú và bài kệ của Huệ Năng nằm ở điểm nào?",
    options: {
      a: "Thần Tú viết bằng chữ Hán, còn Huệ Năng sử dụng ngôn ngữ bình dân để dễ hiểu hơn.",
      b: "Thần Tú cho rằng tâm là vô thường, còn Huệ Năng cho rằng tâm là bất biến.",
      c: "Thần Tú nhấn mạnh vào việc tu hành khổ hạnh, còn Huệ Năng nhấn mạnh vào sự hưởng thụ.",
      d: "Thần Tú vẫn còn trụ chấp vào tướng (thân, tâm, bụi trần), còn Huệ Năng đã ngộ được lý vô tướng.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Thần Tú còn chấp tướng (thân là cây, tâm là đài gương, có tu có chứng). Tổ Huệ Năng ngộ lý Kim Cang Bát Nhã, vô tướng (Bồ đề không cây, tâm không đài gương, vốn không một vật).",
    },
  },
  {
    question: "Khái niệm 'Báo thân' của Phật được mô tả như thế nào trong văn bản?",
    options: {
      a: "Là thân xác vật lý có sinh có diệt như bao người bình thường khác.",
      b: "Là những hình tướng biến hóa tùy theo căn cơ của chúng sanh để cứu độ.",
      c: "Là pháp tánh hay chân tâm, không có hình dáng và không thể nhìn thấy.",
      d: "Là thân do phước báo tu hành vô lượng kiếp mà có, cao lớn như núi Tu di.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai. Đây là Ứng thân/Hóa thân.",
      c: "Sai. Đây là Pháp thân.",
      d: "Đúng. 'Báo thân: Thân do phước báo tu hành, trải qua 3 vô số kiếp mới được. Kinh chép: Báo thân của Phật lớn bằng núi Tu di'.",
    },
  },
  {
    question: "Theo lời dạy của Phật về việc Ngài ở trước Phật Nhiên Đăng, tại sao Ngài nói mình 'thật không có đắc pháp'?",
    options: {
      a: "Vì Ngài đã tự mình chứng ngộ mà không cần đến sự chỉ dạy của bất kỳ vị Phật nào.",
      b: "Vì Phật Nhiên Đăng đã từ chối truyền dạy giáo pháp cho Ngài vào thời điểm đó.",
      c: "Vì giáo pháp của Phật Nhiên Đăng không còn phù hợp với thời đại của đức Thích Ca.",
      d: "Vì nếu chấp mình có đắc pháp tức là vẫn còn chấp ngã và chấp pháp, không phải là chân tâm.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Nếu Như Lai chấp mình có đắc pháp và thọ ký tức là còn chấp ngã (ta được), chấp pháp (pháp đắc). Vì Như Lai không chấp nên mới thật là đắc pháp.",
    },
  },
  {
    question: "Thuật ngữ 'Tư-đà-hàm' (quả Thánh thứ hai) có nghĩa là gì theo phần giải danh từ?",
    options: {
      a: "Sát tặc: Đã giết sạch các giặc phiền não.",
      b: "Dự lưu: Bắt đầu dự vào dòng Thánh.",
      c: "Bất lai: Không còn trở lại thọ sanh trong Dục giới.",
      d: "Nhất vãng lai: Còn trở lại cõi nhân, thiên một lần nữa để tu hành.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây là 1 nghĩa của A la hán.",
      b: "Sai. Đây là nghĩa của Tu đà hoàn.",
      c: "Sai. Đây là nghĩa của A na hàm.",
      d: "Đúng. Tư đà hàm dịch là 'Nhứt vãng lai', nghĩa là còn một lần qua cõi nhơn, thiên để tu hành rồi mới chứng A la hán.",
    },
  },
  {
    question: "Dụ ngôn về cây quít ở Giang Nam và cây chỉ xác ở Giang Bắc dùng để minh họa cho điều gì?",
    options: {
      a: "Phật pháp chỉ có thể nảy nở ở những nơi có điều kiện khí hậu thuận lợi.",
      b: "Địa điểm tu hành quyết định hoàn toàn kết quả của việc đạt đạo.",
      c: "Các pháp môn tu hành cần phải được phân chia rõ ràng giữa Nam và Bắc.",
      d: "Một người đem tâm đời làm việc đạo thì việc đạo biến thành việc đời, và ngược lại.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Ví dụ này (của Ngài Xuyên Thiền sư) dùng để chỉ: 'Người đem tâm đời làm việc Đạo thì việc Đạo biến thành việc đời. Trái lại, đem tâm Đạo làm việc đời thì việc đời trở thành việc Đạo'.",
    },
  },
  {
    question: "Phật dạy rằng 'Phật pháp thực ra cũng không phải Phật pháp, chỉ tạm gọi là Phật pháp'. Tại sao?",
    options: {
      a: "Vì tên gọi 'Phật pháp' là do người đời sau đặt ra chứ không phải do chính Phật nói.",
      b: "Vì theo tánh Bát Nhã chơn không, mọi khái niệm tên gọi đều không thể mô tả đúng thực tại.",
      c: "Vì giáo pháp của Phật luôn thay đổi theo thời gian và không có gì là cố định.",
      d: "Vì Phật muốn thử thách lòng tin của các đệ tử đối với giáo pháp của Ngài.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Đúng theo 'tánh Bát Nhã Chơn không', thì nói năng không trúng, suy nghĩ chẳng nhằm, nên không thể gọi tên. Gọi 'Phật, Pháp' chỉ là danh từ tạm mượn, không nên chấp chặt vào đó.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-4-phan-chanh-ton-tiep-theo',
  slug: 'bai-thu-4-phan-chanh-ton-tiep-theo',
  title: 'Bài Thứ 4 - Phần Chánh tôn (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 8,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-4-phan-chanh-ton-tiep-theo/Tinh_hoa_Kinh_Kim_Cang.png',
      readingContent,
      tableOfContents: [
        { id: 'b-phan-chanh-ton-tiep-theo', label: 'B- Phần Chánh tôn (tiếp theo)' },
        { id: 'cong-duc-tri-kinh', label: '13. Phật nói công đức trì kinh này nhiều hơn bố thí thất bảo', indent: 1 },
        { id: 'bon-qua-thinh-van', label: '14. Bốn quả Thinh văn, không nên chấp mình có chứng quả', indent: 1 },
        { id: 'pha-chap-dac-phap', label: '15. Phật phá cái chấp "Như Lai có đắc pháp"', indent: 1 },
        { id: 'pha-chap-trang-nghiem-coi-phat', label: '16. Phật phá chấp "Bồ tát thật có làm trang nghiêm cõi Phật"', indent: 1 },
        { id: 'dung-sanh-vong-tam', label: '17. Phật dạy: "Đừng sanh vọng tâm trụ chấp một nơi nào"', indent: 1 },
        { id: 'pha-chap-than-phat-cao-lon', label: '18. Phật phá cái chấp "Thân Phật cao lớn như núi Tu Di"', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-4-phan-chanh-ton-tiep-theo/H%C3%A0nh_Tr%C3%ACnh_Ph%C3%A1_Ch%E1%BA%A5p.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/15fHUmOq1Rc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3JWKNZIx7CLWLxrDbDMdnI',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 4',
    passPercentage: 70,
    questions,
  },
}

export default lesson