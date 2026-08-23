import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="b-phan-chanh-ton-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI: B- Phần Chánh tôn (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-nhu-lai-di-dung" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">64. PHẬT PHÁ CÁI CHẤP "NHƯ LAI CŨNG CÓ ĐI, ĐỨNG, NẰM, NGỒI"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Nếu có người chấp: Như Lai cũng tới, lui, nằm, ngồi v.v... thì người đó không hiểu nghĩa Như Lai.</p>
      <p class="mb-0">Tu Bồ Đề! Như Lai nghĩa là không từ đâu đến và cũng không đi về đâu, nên gọi là Như Lai".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá cái chấp "Như Lai cũng đi, đứng, nằm, ngồi v.v...".</p>
    <p>Pháp thân của Phật như như bất động, không khứ không lai, không sanh không diệt. Phật chứng được pháp thân này, nên gọi là Như Lai.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-vi-tran-the-gioi" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">65. PHẬT PHÁ CÁI CHẤP "THẬT CÓ VI TRẦN VÀ THẾ GIỚI"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Nếu có người chẻ nhỏ Đại thiên thế giới (một nghìn triệu thế giới nhỏ) thành vi trần. Vậy số vi trần này nhiều không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Nhiều lắm".</p>
      <p>Phật dạy: "Tu Bồ Đề! Như Lai nói các vi trần, không phải thật vi trần, chỉ giả gọi là vi trần. Nếu các vi trần thật có, thì Như Lai không gọi là vi trần (chỉ gọi cái tướng, do chẻ nhỏ thế giới mà thành).</p>
      <p>Tu Bồ Đề! Như Lai nói thế giới, không phải thật thế giới, chỉ giả gọi thế giới. Nếu thế giới thật có, thì Như Lai không gọi là thế giới, mà chỉ gọi là cái tướng tổng hợp của nhiều vi trần.</p>
      <p>Tu Bồ Đề! Như Lai nói cái tướng tổng hợp (thế giới) không phải tướng tổng hợp, chỉ giả gọi là tướng tổng hợp.</p>
      <p class="mb-0">Tu Bồ Đề! Chúng phàm phu vì không biết đó là một cái tướng tổng hợp của nhiều vi trần, nên chấp là thật có thế giới, rồi sanh tâm tham lam luyến ái v.v...".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá cái chấp "thật có vi trần và thế giới". Đây là lần thứ hai (lần thứ nhứt ở đoạn 24) Phật phá cái chấp vi trần và thế giới.</p>
    <p>Chẻ vật lớn nhứt như thế giới, chẻ cho đến lúc không còn chẻ được nữa, thì tạm gọi đó là "vi trần" (bụi nhỏ). Rồi tổng hợp rất nhiều vi trần, đến mức cùng tột mà tạm thành. Cả hai vi trần và thế giới đều không thật thể, chỉ có giả danh mà thôi.</p>
    <p>Tóm lại, tất cả muôn sự muôn vật trong vũ trụ, lớn như thế giới, nhỏ như vi trần, đều không thật thể, chỉ có giả danh mà thôi. Chúng sanh không biết, vọng chấp là thật, nên gặp cảnh thuận thì sanh tâm tham lam; còn gặp cảnh nghịch thì sân, si v.v... rồi tạo ra các nghiệp sanh tử luân hồi, từ đời này đến kiếp nọ, không biết bao giờ cùng tận.</p>
    <p>Vậy thì, vi trần là do chẻ thế giới ra đến tột độ mà tạm có; ngược lại thế giới là do tổng hợp nhiều vi trần, đến mức cùng tột mà tạm thành. Cả hai vi trần và thế giới đều không thật thể, chỉ có giả danh mà thôi.</p>
    <p>Bởi thế nên Phật thuyết kinh Kim Cang Bát Nhã, mục đích để phá các vô minh vọng chấp thật ngã. Khi mây vô minh vọng chấp hết rồi, thì trăng Phật tánh (Trí huệ Bát Nhã) hiện ra, chiếu khắp cả mười phương thế giới.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-nga" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">66. PHẬT PHÁ CHẤP NGÃ</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Nếu có người nói: "Phật cũng có ngã tướng, nhơn tướng, chúng sanh tướng và thọ giả tướng". Vậy, người này có hiểu được nghĩa của Như Lai nói không?".</p>
      <p class="mb-0">Tu Bồ Đề thưa: "Bạch Thế Tôn! Người này không hiểu được nghĩa của Như Lai nói. Tại sao vậy? Vì Như Lai nói bốn tướng: ngã, nhơn, chúng sanh và thọ giả, nhưng không phải thật có bốn tướng, chỉ giả gọi bốn tướng ngã, nhơn, chúng sanh và thọ giả mà thôi".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Kim Cang Bát Nhã phá trừ cái "ngã chấp".</p>
    <p>Có người chấp: "Nếu không có "ngã", tại sao Phật cũng nói có bốn tướng: ngã, nhơn, chúng sanh và thọ giả?" – Vì chúng sanh chấp bốn tướng thật có, nên Phật cũng nói cái tên bốn tướng, để giải thích cho chúng sanh biết bốn tướng đó là giả, chứ không phải Phật chấp thật có bốn tướng như chúng sanh. Bởi thế nên Phật dạy: "Như Lai nói bốn tướng, nhưng không phải thật có bốn tướng, chỉ giả gọi bốn tướng".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-phap" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">67. PHẬT PHÁ CHẤP PHÁP</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Người phát tâm Bồ Đề chẳng nên chấp các pháp thật có, mà phải thấy các pháp là giả, biết các pháp là giả, hiểu các pháp là giả và tin các pháp là giả.</p>
      <p class="mb-0">Tu Bồ Đề! Như Lai nói "các pháp" không thật có "các pháp", chỉ giả gọi là "các pháp"".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Kim Cang Bát Nhã, phá trừ cái chấp pháp.</p>
    <p>Chúng sanh vì chấp thật có ta (ngã) nên suốt đời, chỉ lo cho ta ăn ngon, lo cho ta mặc đẹp, lo nhà cửa cho ta, lo tiền cho ta tiêu dùng, lo cho ta có danh vọng, quyền tước v.v... làm việc gì cũng vì ta. Rồi cái gì hợp với ta thì sanh tâm tham lam luyến ái, cái gì nghịch với ta thì sân, si, tật đố v.v... tạo đủ điều tội lỗi.</p>
    <p>Không ngờ cái "ta" chẳng thật, do các duyên hòa hợp giả tạo. Khi các duyên tan rã rồi, thì có cái gì gọi là "ta".</p>
    <p>Ngoài sự chấp "ta", chúng sanh còn chấp "pháp"; nghĩa là chấp muôn sự muôn vật thật có. Vì chấp sự vật thật có và lâu dài, nên chúng sanh cả đời chịu khổ sở, vất vả để tìm cầu. Được rồi tham cầu nữa, không biết bao giờ đủ; không được thì sân hận, tạo không biết bao nhiêu tội lỗi. Do đó mà bị sanh tử luân hồi, không biết bao giờ cùng tận.</p>
    <p>Không ngờ các pháp cũng đều hư giả, không thật, như bể cả biến làm ruộng dâu, ruộng dâu hóa làm bể cả, có cái gì chơn thật và trường tồn. Bởi thế nên Phật dạy: "Người phát tâm Bồ Đề, không nên chấp các pháp thật có, mà phải thấy các pháp là giả, hiểu các pháp là giả, và tin các pháp là giả".</p>
    <p>Hành giả thấy biết và tin các pháp là giả, mới ngăn chận được vọng tưởng tham, sân, si v.v... và mới trở về với chơn tâm thanh tịnh của mình.</p>
    <p>Cũng vì thế, nên toàn bộ kinh Kim Cang Bát Nhã, đều nhắm mục đích đả phá các vọng chấp ngã, pháp để chúng sanh trở về với bản tâm thanh tịnh hay Phật tánh sáng suốt của mình.</p>
    <p>Đó là phương pháp "hàng phục vọng tâm mà cũng là để an trụ chơn tâm".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="tan-than-cong-duc" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">68. PHẬT TÁN THÁN CÔNG ĐỨC THỌ TRÌ KINH KIM CANG BÁT NHÃ</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Nếu có người dùng 7 món báu, đựng đầy vô lượng vô số thế giới đem bố thí. Và, nếu có người phát tâm Bồ Đề thọ trì đọc tụng hoặc giảng dạy kinh này, trọn quyển hay nửa quyển, cho đến tối thiểu là bốn câu kệ, thì phước đức của người này nhiều hơn người trước.</p>
      <p class="mb-0">Tại sao người thọ trì đọc tụng kinh này, phước đức nhiều hơn người trước? Vì người này chẳng chấp thủ các tướng (ngã, pháp), nhập được thể tánh Kim Cang, như như bất động vậy".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật tán thán công đức người thọ trì kinh này, nhiều hơn người bố thí vô số thất bảo. Đây là lần thứ 14, Phật nói về công đức trì kinh.</p>
    <p>Người thọ trì kinh này, sẽ phá trừ hết các vọng chấp ngã, pháp hay bốn tướng, ngộ nhập được Kim Cang Bát Nhã là tánh như như bất động và sẽ thành Phật, rồi trở lại giáo hóa vô lượng vô số chúng sanh đều được giải thoát, nên phước đức nhiều hơn người bố thí bảy báu.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="bai-ke-huu-vi" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">69. PHẬT NÓI BÀI KỆ: QUÁN CÁC PHÁP HỮU VI ĐỀU GIẢ</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Dịch âm (nguyên văn):</p>
        <div class="italic">
          <p class="mb-0">Nhứt thế hữu vi pháp</p>
          <p class="mb-0">Như mộng, huyễn, bào, ảnh</p>
          <p class="mb-0">Như lộ diệc như điển</p>
          <p class="mb-0">Ưng tác như thị quán.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Phải quán như thế này:</p>
          <p class="mb-0">Tất cả pháp hữu vi</p>
          <p class="mb-0">Như mộng, huyễn, bọt, bóng</p>
          <p class="mb-0">Như sương, như điển chớp.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Phật kết thúc thời kinh Bát Nhã bằng một bài kệ, quán các pháp hữu vi đều giả, để hàng phục vọng tâm và an trụ chơn tâm.</p>
    <p>Hành giả phải luôn luôn quán tất cả các pháp trong vũ trụ đều hư giả, như chiêm bao, như vật huyễn thuật, như bọt nước, như bóng tối, như sương mai và điện chớp.</p>
    <p>Khi hành giả đã đi sâu vào pháp quán giả; nghĩa là thấy một cách chắc chắn "các pháp đều hư giả" như sáu món hư huyễn trên, thì hành giả không còn khởi vọng tâm chấp thủ ngã pháp hay bốn tướng.</p>
    <p>Khi các vô minh vọng chấp không còn thì chơn tâm thanh tịnh hiện ra, hay nói cách khác là tánh Kim Cang Bát Nhã như như bất động hiện ra. Lúc bấy giờ, hành giả liền chứng được quả Bồ Đề, không cần phải gian lao khổ hạnh, nhiều kiếp tu hành hay phải tìm đâu xa lạ.</p>
    <p>Tóm lại, đây là một phương pháp tu mau chóng, đặc biệt của kinh Kim Cang Bát Nhã, để "hàng phục vọng tâm và an trụ chơn tâm".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mt-12 mb-6">
      <h2 id="phan-luu-thong" class="mt-0 mb-0 text-2xl font-bold text-primary-700 dark:text-primary-300">PHẦN LƯU THÔNG</h2>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo lời Phật dạy trong đoạn 64, nghĩa đúng nhất của danh hiệu 'Như Lai' là gì?",
    options: {
      a: "Là người không từ đâu đến và cũng không đi về đâu.",
      b: "Là người đi khắp mười phương thế giới để độ hóa chúng sanh.",
      c: "Là người có các tướng đi, đứng, nằm, ngồi trang nghiêm.",
      d: "Là người từ cõi Niết Bàn đến thế gian để truyền đạo.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Phật dạy: 'Như Lai nghĩa là không từ đâu đến và cũng không đi về đâu, nên gọi là Như Lai'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Phật nói vi trần và thế giới đều không phải là 'thật có'?",
    options: {
      a: "Vì chúng chỉ là giả danh, do sự chẻ nhỏ hoặc tổng hợp mà thành, không có thực thể độc lập.",
      b: "Vì chúng là những thứ quá nhỏ hoặc quá lớn không thể quan sát được.",
      c: "Vì Phật muốn chúng sanh không được quan tâm đến vật chất xung quanh.",
      d: "Vì chúng sẽ biến mất hoàn toàn sau khi hành giả chứng đắc Bồ Đề.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Lược giải nêu: 'Vi trần là do chẻ thế giới ra đến tột độ mà tạm có; ngược lại thế giới là do tổng hợp nhiều vi trần... Cả hai vi trần và thế giới đều không thật thể, chỉ có giả danh mà thôi.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Việc chấp 'thật có thế giới' dẫn đến hậu quả gì cho chúng sanh phàm phu?",
    options: {
      a: "Giúp con người có động lực để xây dựng thế giới tốt đẹp hơn.",
      b: "Làm cho chúng sanh nhanh chóng đạt được Trí huệ Bát Nhã.",
      c: "Sanh tâm tham lam luyến ái và tạo nghiệp sanh tử luân hồi.",
      d: "Dẫn đến việc phủ nhận hoàn toàn sự tồn tại của bốn tướng: ngã, nhơn, chúng sanh, thọ giả.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Chúng phàm phu... chấp là thật có thế giới, rồi sanh tâm tham lam luyến ái... tạo ra các nghiệp sanh tử luân hồi'.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Như Lai nói về bốn tướng (ngã, nhơn, chúng sanh, thọ giả) dù chúng không phải thật có?",
    options: {
      a: "Vì bốn tướng này là nền tảng để xây dựng lòng tự trọng (ngã).",
      b: "Vì Phật cần các khái niệm này để phân loại các bậc tu hành.",
      c: "Để giải thích cho chúng sanh biết đó chỉ là giả danh nhằm phá trừ sự chấp thật của họ.",
      d: "Để khẳng định rằng Phật vẫn còn mang thân xác con người.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Lược giải nêu: 'Vì chúng sanh chấp bốn tướng thật có, nên Phật cũng nói cái tên bốn tướng, để giải thích cho chúng sanh biết bốn tướng đó là giả, chứ không phải Phật chấp thật có bốn tướng'.",
      d: "Sai.",
    },
  },
  {
    question: "Người phát tâm Bồ Đề nên có thái độ như thế nào đối với 'các pháp'?",
    options: {
      a: "Phải phủ nhận sự hiện diện của các pháp trong đời sống hàng ngày.",
      b: "Phải tìm kiếm những pháp trường tồn và bất biến.",
      c: "Phải thấy, biết, hiểu và tin các pháp đều là giả.",
      d: "Phải cố gắng tích lũy thật nhiều pháp thiện để mau thành Phật.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Phật dạy: Người phát tâm Bồ Đề chẳng nên chấp các pháp thật có, mà phải thấy các pháp là giả, biết các pháp là giả, hiểu các pháp là giả và tin các pháp là giả.'",
      d: "Sai.",
    },
  },
  {
    question: "Theo đoạn 68, tại sao phước đức của người thọ trì kinh Kim Cang lại lớn hơn người bố thí vô lượng bảy báu?",
    options: {
      a: "Vì người thọ trì kinh phá trừ được ngã pháp, nhập thể tánh Kim Cang và có thể cứu độ vô lượng chúng sanh.",
      b: "Vì việc bố thí vật chất thường gây ra sự lãng phí không cần thiết.",
      c: "Vì Phật ưu tiên cho những người biết đọc chữ và giảng dạy hơn người lao động.",
      d: "Vì người thọ trì kinh này có thể trở nên giàu có hơn cả người bố thí.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Lược giải nêu: 'Vì người này chẳng chấp thủ các tướng (ngã, pháp), nhập được thể tánh Kim Cang, như như bất động... và sẽ thành Phật, rồi trở lại giáo hóa vô lượng vô số chúng sanh'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong bài kệ kết thúc kinh, sự vật nào sau đây KHÔNG được dùng để ví dụ cho 'pháp hữu vi'?",
    options: {
      a: "Kim cương (đá quý).",
      b: "Bào (bọt nước).",
      c: "Điển (chớp).",
      d: "Mộng (chiêm bao).",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Kim cương không nằm trong 6 hình ảnh (mộng, huyễn, bào, ảnh, lộ, điển).",
      b: "Sai. Bào nằm trong bài kệ.",
      c: "Sai. Điển nằm trong bài kệ.",
      d: "Sai. Mộng nằm trong bài kệ.",
    },
  },
  {
    question: "Mục đích cốt lõi của toàn bộ kinh Kim Cang Bát Nhã theo lược giải là gì?",
    options: {
      a: "Khuyến khích chúng sanh từ bỏ mọi hoạt động đời thường để vào rừng tu hành.",
      b: "Hàng phục vọng tâm và an trụ chơn tâm bằng cách phá bỏ các vọng chấp ngã, pháp.",
      c: "Giúp con người đạt được những quyền năng siêu nhiên.",
      d: "Hướng dẫn cách thực hiện các nghi lễ cúng bái đúng cách.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Tóm lại, đây là một phương pháp tu mau chóng, đặc biệt của kinh Kim Cang Bát Nhã, để hàng phục vọng tâm và an trụ chơn tâm.' (bằng cách phá trừ ngã, pháp).",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khi 'mây vô minh vọng chấp' hết rồi, điều gì sẽ hiện ra?",
    options: {
      a: "Sự giàu sang và danh vọng tột đỉnh.",
      b: "Các vị thần linh đến hộ trì.",
      c: "Trăng Phật tánh (Trí huệ Bát Nhã).",
      d: "Thế giới cực lạc hữu hình.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Khi mây vô minh vọng chấp hết rồi, thì trăng Phật tánh (Trí huệ Bát Nhã) hiện ra, chiếu khắp cả mười phương thế giới.'",
      d: "Sai.",
    },
  },
  {
    question: "Lược giải đoạn 67 ví sự thay đổi khôn lường của các pháp như thế nào?",
    options: {
      a: "Như bể cả biến làm ruộng dâu, ruộng dâu hóa làm bể cả.",
      b: "Như mặt trời mọc rồi lại lặn.",
      c: "Như mây bay gió thổi.",
      d: "Như nước chảy về nguồn.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'các pháp cũng đều hư giả, không thật, như bể cả biến làm ruộng dâu, ruộng dâu hóa làm bể cả, có cái gì chơn thật và trường tồn'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-10-phan-chanh-ton-tiep-theo',
  slug: 'bai-thu-10-phan-chanh-ton-tiep-theo',
  title: 'Bài Thứ 10 - Phần Chánh tôn (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 14,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10-phan-chanh-ton-tiep-theo/T%C3%B3m_t%E1%BA%AFt_Kinh_Kim_Cang.png',
      readingContent,
      tableOfContents: [
        { id: 'b-phan-chanh-ton-tiep-theo', label: 'B. Phần Chánh tôn (tiếp theo)' },
        { id: 'pha-chap-nhu-lai-di-dung', label: '64. Phật phá cái chấp "Như Lai cũng có đi, đứng, nằm, ngồi"', indent: 1 },
        { id: 'pha-chap-vi-tran-the-gioi', label: '65. Phật phá cái chấp "thật có vi trần và thế giới"', indent: 1 },
        { id: 'pha-chap-nga', label: '66. Phật phá "chấp ngã"', indent: 1 },
        { id: 'pha-chap-phap', label: '67. Phật phá "chấp pháp"', indent: 1 },
        { id: 'tan-than-cong-duc', label: '68. Phật tán thán công đức thọ trì Kinh Kim Cang Bát Nhã.', indent: 1 },
        { id: 'bai-ke-huu-vi', label: '69. Phật nói bài kệ: quán các pháp hữu vi đều giả.', indent: 1 },
        { id: 'phan-luu-thong', label: 'PHẦN LƯU THÔNG' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10-phan-chanh-ton-tiep-theo/KIM_CANG_B%C3%81T_NH%C3%83_PH%C3%81_CH%E1%BA%A4P.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/KFnqvA5CNVE',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6WjR7D7jXE4X4vUskU85Ng',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 10',
    passPercentage: 70,
    questions,
  },
}

export default lesson