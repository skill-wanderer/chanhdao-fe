import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP BA</p>
      <p class="mb-2 font-semibold">DUY THỨC TAM THẬP TỤNG DỊ GIẢI</p>
      <h2 id="bai-thu-nam-duy-thuc-tam-thap-tung-di-giai" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ NĂM</h2>
    </div>

    <h3 id="chanh-van-phan-vi-hien-khoi" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: PHẦN VỊ HIỆN KHỞI CỦA CÁC THỨC</h3>
    <p><strong>Hỏi:</strong> Trên đã nói sáu loại tâm sở tương ưng rồi, bây giờ làm sao biết được phần vị hiện khởi của các thức?</p>

    <h4 id="nguyen-van-chu-han-phan-vi-hien-khoi" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Y chỉ căn bản thức</p>
        <p>Ngũ thức tuỳ duyên hiện</p>
        <p>Hoặc câu hoặc bất câu</p>
        <p>Như đào ba y thủy</p>
        <p>Ý thức thường hiện khởi</p>
        <p>Trừ sanh Vô tưởng thiên</p>
        <p>Cập vô tâm nhị định</p>
        <p>Thụy miên dữ muộn tuyệt.</p>
      </div>
    </div>

    <h4 id="dich-nghia-phan-vi-hien-khoi" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói hai câu tụng trên để trả lời rằng: Sáu thức trước đều nương nơi thức căn bản (A lại da) mà hiện khởi; cũng như sóng nương nơi nước mà sanh.</p>
    <p>Năm thức trước tuỳ duyên mà khởi; hoặc chung sanh hoặc chẳng chung sanh. Duy có ý thức thường hiện khởi, trừ ra năm chỗ nó không sanh khởi: 1. Sanh ở cõi trời Vô tưởng, 2. Nhập định Vô tưởng, 3. Nhập định Diệt tận, 4. Ngủ mê, 5. Chết giả.</p>

    <h4 id="luoc-giai-phan-vi-hien-khoi" class="text-lg font-semibold">Lược giải</h4>
    <p>Sáu thức trước, bên trong đều nương nơi thức Căn bản (A lại da) bên ngoài nhờ các duyên (căn, cảnh, tác ý, v.v...) và tuỳ theo phận vị của nó mà sanh khởi không đồng. Nếu đủ duyên thì sanh khởi, còn thiếu duyên thì nó không sanh. Cũng như sóng nương nơi nước và nhờ gió, nên có khi sanh, khi diệt. Duy có ý thức vì ít duyên nên dễ đủ; vì thế mà được thường sanh khởi, chỉ trừ năm chỗ không sanh:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Trời Vô tưởng:</strong> do hành giả khi tu định, nhàm ghét diệt trừ cái "tưởng", mà được sanh về cõi trời này, nên cõi trời này không có ý thức.</li>
      <li><strong>Nhập định Vô tưởng:</strong> do hành giả diệt trừ 6 thức trước, mới được định này.</li>
      <li><strong>Nhập định Diệt tận:</strong> do hành giả diệt trừ phần hiện hành của bảy thức trước, mới được định này. Hai định trên đây đều không có "ý thức".</li>
      <li><strong>Ngủ mê:</strong> khi ngủ mê không chiêm bao, cũng không có ý thức.</li>
      <li><strong>Chết giả:</strong> khi bệnh nặng gần chết, hoặc khi bất tỉnh nhơn sự (chết giả) cũng không có ý thức.</li>
    </ol>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Xem biểu đồ</p>
      <ul class="mb-2 list-disc space-y-2 pl-6">
        <li><strong>Nước:</strong> dụ thức A lại da.</li>
        <li><strong>Sóng (không gián đoạn):</strong> dụ ý thức thường hiện khởi (trừ 5 chỗ).</li>
      </ul>
      <p class="mb-2 font-semibold">Năm chỗ ý thức không sanh</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li>Trời Vô tưởng</li>
        <li>Định Vô tưởng</li>
        <li>Định Diệt tận</li>
        <li>Ngủ mê (không chiêm bao)</li>
        <li>Chết giả</li>
      </ul>
    </div>

    <h3 id="chanh-van-tat-ca-phap-duy-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: TẤT CẢ PHÁP DUY THỨC</h3>
    <p><strong>Hỏi:</strong> Trên đã phân biệt rành rõ hành tướng của ba thức năng biến, đều nương nơi hai phần, rồi tự nó biến ra; bây giờ làm sao biết được các pháp chỉ do thức biến hiện, rồi giả gọi Ngã, Pháp chớ không phải thật có, nên nói "tất cả Pháp Duy thức"?</p>

    <h4 id="nguyen-van-chu-han-tat-ca-phap-duy-thuc" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thị chư thức chuyển biến</p>
        <p>Phân biệt, sở phân biệt</p>
        <p>Do thử, bỉ giai vô</p>
        <p>Cố nhứt thế Duy thức.</p>
      </div>
    </div>

    <h4 id="dich-nghia-tat-ca-phap-duy-thuc" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói một bài tụng để trả lời rằng: Chỉ do các thức biến ra Năng phân biệt thức (kiến phần) và Sở phân biệt (tướng phần). Song Năng phân biệt (thử) và Sở phân biệt (bỉ) đều không thật có, nên nói: "tất cả pháp Duy thức".</p>

    <h4 id="luoc-giai-tat-ca-phap-duy-thuc" class="text-lg font-semibold">Lược giải</h4>
    <p>Mỗi thức và mỗi Tâm sở đều có 4 phần:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Kiến phần:</strong> phần Năng phân biệt.</li>
      <li><strong>Tướng phần:</strong> phần bị phân biệt, tức là cảnh vật.</li>
      <li><strong>Tự chứng phần:</strong> phần này tự chứng minh cho Kiến phần.</li>
      <li><strong>Chứng tự chứng phần:</strong> phần này chứng minh cho phần tự chứng.</li>
    </ol>
    <p>Trong bốn phần này, về phần thứ ba là Tự chứng, không những có công năng chứng minh cho phần thứ hai là Kiến phần, mà cũng có công năng đặc biệt là trở lại chứng minh phần thứ tư là Chứng tự chứng phần. Bởi thế nên không cần phải có phần thứ năm.</p>

    <p>Xin nói một thí dụ để giải rõ bốn phần: Thí như anh A và anh B hùn nhau buôn bán. Anh A ra tiền (vật có hình tướng) là dụ cho "Tướng phần". Anh B ra công (không hình tướng) là dụ cho "Kiến phần". Hai người lập một tờ hợp đồng (giao kèo) để chứng minh một bên ra công và một bên xuất của. Tờ hợp đồng là dụ cho "Tự chứng phần". Vì hai anh tranh giành nhau, nên đem đến quan kiện. Ông quan chiếu theo tờ hợp đồng mà phân xử. Ông quan là dụ cho "Chứng tự chứng phần".</p>

    <p>Trên đã nói rõ hành tướng của ba thức năng biến: Từ nơi hai phần bên trong là Tự Chứng Phần và Chứng Tự Chứng Phần, biến sanh ra hai phần bên ngoài là Kiến phần và Tướng phần. Vậy thì hai phần bên trong là "thể" làm chỗ bị y chỉ (nương tựa), còn hai phần bên ngoài là "dụng" là "năng y chỉ".</p>

    <p>Thí dụ như con ốc hương, đầu và mình con ốc là dụ cho "Tự chứng phần" và "Chứng tự chứng phần"; còn hai cái vòi là dụ cho Kiến phần và Tướng phần. Hai vòi có khi lòi ra, có lúc lại thụt vào, là dụ cho cái dụng Kiến phần và Tướng phần, sanh diệt không thường; còn cái đầu và mình của con ốc thì thường còn, để dụ cho cái thể Tự chứng phần và Chứng tự chứng phần, không sanh không diệt.</p>

    <p>Luận chủ và ngoại nhơn hai bên rất mâu thuẫn nhau. Nếu lý Duy thức của Luận chủ được thành thì sự chấp thật có Ngã, Pháp của ngoại nhơn không thành; trái lại, nếu sự chấp Ngã, Pháp của ngoại nhơn được thành, thì lý Duy thức của Luận chủ bất thành.</p>

    <p><strong>Ý của ngoại nhơn hỏi:</strong> Làm sao biết Ngã, Pháp đều nương nơi thức biến ra, chẳng phải thật có, nên nói "Tất cả Pháp đều Duy thức"?</p>

    <p><strong>Ý của Luận chủ đáp:</strong> Trên đã nói ba thức Năng biến, mỗi thức đều từ nơi tự thể mà biến sanh ra Kiến phần và Tướng phần; Kiến phần là phần năng phân biệt, mà Tướng phần là phần bị phân biệt. Phần bị phân biệt là các cảnh vật như núi, sông, đại địa, v.v... Phần năng phân biệt tức là tác dụng thấy, nghe, hay biết các cảnh vật.</p>

    <p>Bởi phần năng phân biệt (thấy) và phần bị phân biệt (cảnh) đều do thức thể biến ra, toàn không thật có, nên nói "Tất cả pháp Duy thức".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-0">Thức thể (tự chứng phần sanh ra Dụng) → Phần biết (Kiến) và Phần bị biết (Tướng), đều là thức.</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Dựa trên bài tụng, sáu thức trước (năm thức giác quan và ý thức) nương tựa vào thức nào để hiện khởi?',
    options: {
      a: 'Cảnh giới bên ngoài',
      b: 'Mạt-na thức',
      c: 'Tướng phần',
      d: 'Thức A-lại-da (Căn bản thức)',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Các thức không nương vào cảnh giới bên ngoài làm gốc để hiện khởi.',
      b: 'Sai. Mạt-na không phải là thức căn bản cho sáu thức trước hiện khởi theo bài tụng.',
      c: 'Sai. Tướng phần chỉ là phần đối tượng bị phân biệt, không phải là nơi nương tựa.',
      d: 'Đúng. Theo bài tụng, sáu thức trước đều nương nơi thức căn bản (A lại da) mà hiện khởi, giống như sóng nương nơi nước.',
    },
  },
  {
    question: "Tại sao Ý thức được gọi là 'thường hiện khởi' so với năm thức trước?",
    options: {
      a: 'Vì Ý thức không bao giờ bị gián đoạn ngay cả khi ngủ',
      b: 'Vì Ý thức cần ít duyên nên dễ dàng hội đủ điều kiện để sanh khởi',
      c: 'Vì Ý thức là chủ thể điều khiển trực tiếp sáu căn',
      d: 'Vì Ý thức có khả năng tự tồn tại độc lập với Thức căn bản',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ý thức vẫn bị gián đoạn trong 5 trường hợp, bao gồm cả khi ngủ mê không chiêm bao.',
      b: 'Đúng. Duy có ý thức vì ít duyên nên dễ đủ điều kiện, vì thế mà được thường sanh khởi.',
      c: 'Sai. Bài luận không giải thích nguyên nhân ý thức thường hiện khởi là do điều khiển sáu căn.',
      d: 'Sai. Ý thức vẫn phải nương nơi thức Căn bản bên trong để sanh khởi.',
    },
  },
  {
    question: 'Trong các trường hợp sau đây, trường hợp nào Ý thức KHÔNG hiện khởi?',
    options: {
      a: 'Trạng thái ngủ mê không chiêm bao',
      b: 'Khi đang nằm mơ (chiêm bao)',
      c: 'Khi đang tập trung suy nghĩ sâu sắc',
      d: 'Khi đang nhìn thấy hình sắc',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Khi ngủ mê không chiêm bao là một trong năm trường hợp mà ý thức không sanh khởi.',
      b: 'Sai. Nằm mơ (chiêm bao) thì ý thức vẫn còn hoạt động, chỉ trừ lúc ngủ mê không chiêm bao.',
      c: 'Sai. Tập trung suy nghĩ sâu sắc chính là hoạt động mạnh mẽ của ý thức.',
      d: 'Sai. Nhìn thấy hình sắc đòi hỏi sự hoạt động của nhãn thức và cả ý thức.',
    },
  },
  {
    question: 'Sự khác biệt giữa Định Vô tưởng và Định Diệt tận về mặt đối tượng bị diệt trừ là gì?',
    options: {
      a: 'Định Vô tưởng chỉ diệt ý thức, Định Diệt tận diệt toàn bộ 8 thức',
      b: 'Định Vô tưởng diệt khổ thọ, Định Diệt tận diệt hỷ thọ',
      c: 'Cả hai loại định đều chỉ tập trung diệt trừ Ý thức',
      d: 'Định Vô tưởng diệt 6 thức trước, Định Diệt tận diệt phần hiện hành của 7 thức trước',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Định Diệt tận không diệt toàn bộ 8 thức mà chỉ diệt phần hiện hành của bảy thức trước.',
      b: 'Sai. Bài luận không phân biệt hai loại định này bằng việc diệt khổ thọ hay hỷ thọ.',
      c: 'Sai. Cả hai định đều diệt nhiều hơn một ý thức.',
      d: 'Đúng. Khi nhập định Vô tưởng hành giả diệt trừ 6 thức trước, còn nhập định Diệt tận hành giả diệt trừ phần hiện hành của bảy thức trước.',
    },
  },
  {
    question: "Trong 'Tứ phần' của tâm thức, phần nào đóng vai trò tự chứng minh cho 'Kiến phần'?",
    options: {
      a: 'Tự chứng phần',
      b: 'Tướng phần',
      c: 'Năng phân biệt phần',
      d: 'Chứng tự chứng phần',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Tự chứng phần (phần thứ ba) có công năng tự chứng minh cho Kiến phần.',
      b: 'Sai. Tướng phần là phần bị phân biệt (cảnh vật), không đóng vai trò chứng minh.',
      c: 'Sai. Năng phân biệt phần (chính là Kiến phần) là phần cần được chứng minh.',
      d: 'Sai. Chứng tự chứng phần (phần thứ tư) dùng để chứng minh cho phần Tự chứng.',
    },
  },
  {
    question: "Ví dụ về 'tờ hợp đồng' trong bài dùng để minh họa cho thành phần nào?",
    options: {
      a: 'Chứng tự chứng phần',
      b: 'Kiến phần',
      c: 'Tướng phần',
      d: 'Tự chứng phần',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Ông quan chiếu theo tờ hợp đồng mà phân xử mới là dụ cho Chứng tự chứng phần.',
      b: 'Sai. Người anh ra công làm việc mới là dụ cho Kiến phần.',
      c: 'Sai. Người anh ra tiền (vật có hình tướng) là dụ cho Tướng phần.',
      d: 'Đúng. Tờ hợp đồng được lập ra để chứng minh một bên ra công và một bên xuất của, là dụ cho Tự chứng phần.',
    },
  },
  {
    question: "Theo ví dụ về con ốc hương, 'đầu và mình' của con ốc đại diện cho điều gì?",
    options: {
      a: 'Sáu thức trước nương nơi Thức căn bản',
      b: 'Sự phân biệt giữa Ngã và Pháp',
      c: 'Cái "dụng" sanh diệt không thường của Kiến phần và Tướng phần',
      d: 'Cái "thể" thường còn, không sanh diệt của Tự chứng và Chứng tự chứng phần',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Sáu thức trước nương nơi thức căn bản được dụ cho sóng nương nơi nước.',
      b: 'Sai. Ví dụ con ốc hương không dùng để nói về sự phân biệt Ngã và Pháp.',
      c: 'Sai. Cái "dụng" sanh diệt không thường được dụ bằng hai cái vòi của con ốc khi lòi ra lúc thụt vào.',
      d: 'Đúng. Đầu và mình của con ốc hương thường còn, được dùng để dụ cho cái thể Tự chứng phần và Chứng tự chứng phần, không sanh không diệt.',
    },
  },
  {
    question: "Tại sao Luận chủ khẳng định rằng 'Năng phân biệt' và 'Sở phân biệt' đều không thật có?",
    options: {
      a: 'Vì chúng là những ảo giác chỉ xuất hiện trong giấc mơ',
      b: 'Vì chúng chỉ là những tên gọi giả tạm do con người đặt ra',
      c: 'Vì cả hai đều do thức tự biến hiện ra từ chính nó',
      d: 'Vì chúng sẽ biến mất khi con người đạt đến cõi trời Vô tưởng',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Bài luận không dùng lý do ảo giác trong giấc mơ để phủ nhận sự thật có của chúng.',
      b: 'Sai. Luận chủ không giải thích rằng đây chỉ là những tên gọi giả tạm.',
      c: 'Đúng. Bởi vì phần năng phân biệt (thấy) và phần bị phân biệt (cảnh) toàn bộ đều do tự thức thể biến ra nên chúng không thật có.',
      d: 'Sai. Cõi trời Vô tưởng chỉ là nơi ý thức không sanh khởi, không phải là cơ sở giải thích cho việc này.',
    },
  },
  {
    question: "Cụm từ 'Nhứt thế Duy thức' (Tất cả pháp Duy thức) có nghĩa là gì?",
    options: {
      a: 'Thế giới này là do thức A-lại-da của một vị thần tạo ra',
      b: 'Mọi vạn vật, hiện tượng đều chỉ là sự biến hiện của tâm thức',
      c: 'Vật chất và tinh thần luôn tồn tại song hành độc lập',
      d: 'Chỉ có ý thức con người mới là thực tại duy nhất',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phật giáo không chủ trương thế giới do thức của một vị thần nào tạo ra.',
      b: 'Đúng. Tất cả các cảnh vật hay tác dụng thấy nghe hiểu biết đều do thức thể biến ra, toàn không thật có nên gọi là Tất cả pháp Duy thức.',
      c: 'Sai. Lý thuyết này trái ngược với quan điểm vạn pháp duy thức, phủ định sự độc lập của vật chất.',
      d: 'Sai. Duy thức ở đây bao gồm sự vận hành của cả 8 thức chứ không phải chỉ mình ý thức của con người.',
    },
  },
  {
    question: 'Tại sao không cần đến phần thứ năm trong cấu trúc các phần của tâm thức?',
    options: {
      a: 'Vì Kiến phần đã đủ khả năng tự nhận biết chính nó',
      b: 'Vì cấu trúc bốn phần đã bao hàm toàn bộ vũ trụ',
      c: 'Vì Tự chứng phần và Chứng tự chứng phần có khả năng tương tác chứng minh lẫn nhau',
      d: 'Vì con số bốn được coi là con số hoàn hảo trong Phật học',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Kiến phần vẫn cần phải có Tự chứng phần để chứng minh cho nó.',
      b: 'Sai. Đây không phải là lý do được giải thích trong văn bản.',
      c: 'Đúng. Phần thứ ba (Tự chứng) chứng minh cho phần thứ tư (Chứng tự chứng phần) và ngược lại, nên không cần phải có phần thứ năm.',
      d: 'Sai. Luận chủ không giải thích dựa trên ý nghĩa hoàn hảo của các con số.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-5-duy-thuc-tam-thap-tung',
  slug: 'bai-thu-5-duy-thuc-tam-thap-tung',
  title: 'Bài Thứ 5 - Duy Thức Tam Thập Tụng',
  type: 'article',
  status: 'published',
  order: 23,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-5-duy-thuc-tam-thap-tung/V%E1%BA%ADn_h%C3%A0nh_c%E1%BB%A7a_t%C3%A2m_th%E1%BB%A9c.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-nam-duy-thuc-tam-thap-tung-di-giai', label: 'Bài Thứ Năm' },
        { id: 'chanh-van-phan-vi-hien-khoi', label: 'Chánh văn: Phần vị hiện khởi của các thức', indent: 1 },
        { id: 'nguyen-van-chu-han-phan-vi-hien-khoi', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-phan-vi-hien-khoi', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-phan-vi-hien-khoi', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-tat-ca-phap-duy-thuc', label: 'Chánh văn: Tất cả pháp Duy thức', indent: 1 },
        { id: 'nguyen-van-chu-han-tat-ca-phap-duy-thuc', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-tat-ca-phap-duy-thuc', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-tat-ca-phap-duy-thuc', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-5-duy-thuc-tam-thap-tung/Mapping_the_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/CXDpVlYeqis',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/0MMKjOFkE2gxdgtTMCKQBZ?utm_source=generator&si=c98cd6edf6c44a7f',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Duy Thức Tam Thập Tụng Bài 5',
    passPercentage: 70,
    questions,
  },
}

export default lesson
