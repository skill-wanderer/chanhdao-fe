import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Pháp Môn Tịnh Độ</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mb-8">
      <h2 class="mt-0 mb-2 text-3xl font-bold text-primary-700 dark:text-primary-300">7 CÂU HỎI VỀ PHÁP MÔN TỊNH ĐỘ</h2>
      <p class="mb-0 italic opacity-80 font-medium">Giảng sư: Cố Cư sĩ Thích Giác Khang</p>
    </div>

    <!-- Câu 1 -->
    <h3 id="cau-hoi-1" class="mt-8 text-xl font-bold text-secondary-700 dark:text-secondary-300">1. Đi tu Phật thất, tu pháp môn niệm Phật hay niệm Phật A-Di-Đà mục đích để làm gì?</h3>
    <p>Tu Phật thất, tu pháp môn niệm Phật hay niệm Phật A-Di-Đà mục đích để cầu vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà.</p>

    <!-- Câu 2 -->
    <h3 id="cau-hoi-2" class="mt-8 text-xl font-bold text-secondary-700 dark:text-secondary-300">2. Xứ Cực lạc của Đức Phật A-Di-Đà ở đâu?</h3>
    <p>Xứ Cực lạc của Đức Phật A-Di-Đà ở hướng Tây, hướng mặt trời lặn, cách đây mười muôn ức cõi. Theo "sự", xác định hướng Tây là nhằm giúp cho hành giả có một niềm tin để tu thiền và tịnh được nhất niệm. Vì có được nhất niệm và phát nguyện thì mới cảm ứng đạo giao với Phật A-Di-Đà và sẽ được vãng sanh.</p>

    <!-- Câu 3 -->
    <h3 id="cau-hoi-3" class="mt-8 text-xl font-bold text-secondary-700 dark:text-secondary-300">3. Lấy gì để vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà?</h3>
    <p>Lấy thần thức để vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà. Thần thức còn gọi là linh hồn.</p>
    <p>Khi chúng ta còn sống thì thần thức thể hiện qua 6 căn: mắt, tai, mũi, lưỡi, thân, óc. Khi chết thì xác thân trở về tứ đại, chỉ còn lại thần thức nó bàng bạc khắp mọi nơi trong không gian. Thần thức tỏa ra xa hay gần tùy theo định lực mạnh hay yếu.</p>

    <!-- Câu 4 -->
    <h3 id="cau-hoi-4" class="mt-8 text-xl font-bold text-secondary-700 dark:text-secondary-300">4. Muốn vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà có mấy điều kiện?</h3>
    <p>Muốn vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà cần phải có 3 điều kiện: <strong>Tín - Hạnh - Nguyện</strong>.</p>

    <div class="my-6 pl-4 border-l-4 border-primary-400 dark:border-primary-600">
      <p class="font-semibold text-lg text-primary-700 dark:text-primary-300 mb-2">I. TÍN</p>
      <p class="mb-2">Là lòng tin, tin phải sâu. Tin có 6:</p>
      <ul class="space-y-2 mt-2">
        <li><strong>1. Tin tự:</strong> tin chính mình niệm Phật đạt nhất niệm thì chắc chắn được vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà.</li>
        <li><strong>2. Tin tha:</strong> tin chắc chắn rằng Đức Phật A-Di-Đà sẽ tiếp dẫn những chúng sanh nào niệm Phật được nhất niệm và có phát nguyện về xứ Cực lạc.</li>
        <li><strong>3 & 4. Tin nhân và Tin quả:</strong> hiện nay ta đã gieo nhân niệm Phật đạt nhất niệm thì sẽ được hưởng cái quả vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà.</li>
        <li><strong>5. Tin sự:</strong> tin có thế giới Cực lạc thật sự ở phương Tây, cách đây mười muôn ức cõi, có Đức Phật A-Di-Đà và chư Thánh chúng. Đức Phật A-Di-Đà và chư Thánh chúng là Chánh báo, còn thế giới Cực lạc là Y báo.</li>
        <li><strong>6. Tin lý:</strong> tức là Chánh báo và Y báo cũng phát hiện từ Chân tâm Phật tánh mà ra.</li>
      </ul>
    </div>

    <div class="my-6 pl-4 border-l-4 border-primary-400 dark:border-primary-600">
      <p class="font-semibold text-lg text-primary-700 dark:text-primary-300 mb-2">II. HẠNH</p>
      <p class="mb-2">Là hành chuyên. Hành có 4 điều kiện: <em>rành rõ, tương ưng, chí thành, nhiếp tâm</em>.</p>
      <ul class="space-y-2 mt-2">
        <li><strong>1. Rành rõ:</strong> rành là từng chữ, từng câu rành rẽ không lộn lạo; rõ là mình tự nhận lấy tiếng niệm Phật rõ ràng không trại, không mờ.</li>
        <li><strong>2. Tương ưng:</strong> là tiếng hiệp với tâm, tâm duyên theo tiếng, tâm và tiếng hiệp khắn khít nhau.</li>
        <li><strong>3. Chí thành:</strong> một lòng tha thiết luôn tưởng nhớ đến Phật, như con thơ mắc nạn mà kêu cầu từ mẫu cứu vớt.</li>
        <li><strong>4. Nhiếp tâm:</strong> là để tâm vào tiếng niệm Phật, không để tạp niệm xen vào, nếu xao lãng thời liền thâu lại, chăm chú nhận rõ tiếng niệm Phật của mình.</li>
      </ul>
    </div>

    <div class="my-6 pl-4 border-l-4 border-primary-400 dark:border-primary-600">
      <p class="font-semibold text-lg text-primary-700 dark:text-primary-300 mb-2">III. NGUYỆN</p>
      <p class="mb-0">Là phải mong mỏi về Cực lạc, chí thành tha thiết như viễn khách nhớ cố hương, lúc nào cũng nhớ Phật, tưởng Phật như con thơ nhớ từ mẫu.</p>
    </div>

    <!-- Câu 5 -->
    <h3 id="cau-hoi-5" class="mt-8 text-xl font-bold text-secondary-700 dark:text-secondary-300">5. Tín – Hạnh – Nguyện cái nào có trước, cái nào có sau?</h3>
    <div class="pl-4 space-y-4 my-4">
      <div>
        <p class="font-semibold mb-1">Nói về sự:</p>
        <p class="mb-0">Tín - Hạnh - Nguyện là cái vòng quẩn quanh, nó cũng giống như cái kiềng ba chân không thể thiếu một. Nhưng tùy theo nhân duyên, hoàn cảnh và trình độ của mỗi người đến với pháp môn Tịnh độ: tín trước hoặc hạnh trước hay nguyện trước.</p>
        <p class="mb-0 mt-2">Thường thì người sơ cơ đến với pháp môn Tịnh độ bằng tín trước. Tức tin rằng thế giới Cực lạc thật sự ở phương Tây, cách đây mười muôn ức cõi, có Đức Phật A-Di-Đà và chư Thánh chúng. Rồi sau đó mới nhàm chán cõi Ta-bà mong mỏi về Cực lạc. Mà muốn về Cực lạc phải hành câu niệm Phật cho được nhất niệm.</p>
      </div>
      <div>
        <p class="font-semibold mb-1">Nói về lý:</p>
        <p class="mb-0">Thì Tín - Hạnh - Nguyện có cùng một lúc, không thể nói cái có trước, cái có sau. Vì trong tín có hạnh và nguyện, trong hạnh có tín và nguyện, trong nguyện có tín và hạnh. Tức là ba phương diện của một thực thể.</p>
      </div>
    </div>

    <!-- Câu 6 -->
    <h3 id="cau-hoi-6" class="mt-8 text-xl font-bold text-secondary-700 dark:text-secondary-300">6. Tín – Hạnh – Nguyện cái nào quan trọng?</h3>
    <p class="font-semibold text-primary-700 dark:text-primary-300">Nguyện quyết định cho sự vãng sanh.</p>
    
    <div class="space-y-4 my-4">
      <div>
        <p class="font-semibold mb-2">TÍN: Nói về phẩm, có bốn:</p>
        <div class="pl-6 space-y-1">
          <p><strong>1. Tin sự:</strong> của người, trời. Vãng sanh về cõi Phàm Thánh đồng cư Tịnh độ thuộc Hạ phẩm.</p>
          <p><strong>2. Tin lý:</strong> của 4 bậc Thánh. Vãng sanh về cõi Phương tiện hữu dư Tịnh độ thuộc Trung phẩm.</p>
          <p><strong>3. Tin sự - lý vô ngại pháp giới:</strong> của chư Bồ-tát. Vãng sanh về cõi Thật báo trang nghiêm Tịnh độ thuộc Thượng phẩm.</p>
          <p><strong>4. Tin sự - sự vô ngại pháp giới:</strong> của Như Lai. Vãng sanh về cõi Thường tịch quang Tịnh độ thuộc Thượng phẩm.</p>
        </div>
      </div>

      <div>
        <p class="font-semibold mb-2">HẠNH: Nói về sanh, có ba:</p>
        <p class="italic mb-2">Nếu hành được: 8/24 là Hạ sanh, 16/24 là Trung sanh – 24/24 là Thượng phẩm.</p>
        <div class="pl-6 space-y-3">
          <div>
            <p class="font-medium underline mb-1">Người - trời (niệm Phật được nhất niệm):</p>
            <ul class="list-disc pl-5 m-0 space-y-1">
              <li>8/24 là Hạ phẩm - Hạ sanh.</li>
              <li>16/24 là Hạ phẩm - Trung sanh.</li>
              <li>24/24 là Hạ phẩm - Thượng sanh.</li>
            </ul>
          </div>
          <div>
            <p class="font-medium underline mb-1">Bốn bậc Thánh (vừa niệm Phật vừa nhận lại Phật tánh - Vô niệm):</p>
            <ul class="list-disc pl-5 m-0 space-y-1">
              <li>8/24 là Trung phẩm - Hạ sanh.</li>
              <li>16/24 là Trung phẩm - Trung sanh.</li>
              <li>24/24 là Trung phẩm - Thượng sanh.</li>
            </ul>
          </div>
          <div>
            <p class="font-medium underline mb-1">Bồ-tát (vừa niệm Phật vừa tùy thuận giáo hóa chúng sanh - Vô niệm - niệm, niệm - vô niệm):</p>
            <ul class="list-disc pl-5 m-0 space-y-1">
              <li>8/24 là Thượng phẩm - Hạ sanh.</li>
              <li>16/24 là Thượng phẩm - Trung sanh.</li>
              <li>24/24 là Thượng phẩm - Thượng sanh.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p class="font-semibold mb-1">NGUYỆN:</p>
        <p class="mb-0">Có nguyện thì mới được vãng sanh và phải nguyện chí thành tha thiết.</p>
      </div>
    </div>
    
    <p class="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg mt-4 border border-primary-100 dark:border-primary-800">
      <strong>Tóm lại:</strong> Tín - Hạnh - Nguyện nếu nói về sự thì nguyện quan trọng hơn hết. Vì nó quyết định cho sự vãng sanh. Còn nói về lý thì Tín - Hạnh - Nguyện đều quan trọng như nhau.
    </p>

    <!-- Câu 7 -->
    <h3 id="cau-hoi-7" class="mt-8 text-xl font-bold text-secondary-700 dark:text-secondary-300">7. Tu Tịnh độ có chắc chắn vãng sanh không?</h3>
    <div class="space-y-4 my-4 pl-4">
      <p class="relative pl-6  before:absolute before:left-0 before:text-primary-500">
        Đối với những vị tu đắc Tứ thiền, Tứ không và ba quả Thánh đầu thì câu hỏi này là thừa. Vì định lực của những vị này rất mạnh, nếu muốn vãng sanh sẽ được vãng sanh. Những vị tu đắc Tứ thiền, Tứ không định lực của họ rất mạnh, sau khi chết lập tức sanh về cõi trời ngay. Và trường hợp của những người tạo tội ngũ nghịch, vì quá ác mất hết cái biết nên khi chết bị đọa địa ngục ngay, nên không mang thân trung ấm.
      </p>
      <p class="relative pl-6  before:absolute before:left-0 before:text-primary-500">
        Đối với 4 đường ác đạo, cõi người, cõi trời dục giới thì câu hỏi này không trả lời được, vì hiện tượng giới rất là phức tạp, thuộc về nhân quả ba đời mà chỉ có Như Lai mới hiểu rõ thôi. Cho nên câu hỏi này phải nên sửa lại là <em>"chúng ta tu Tịnh độ có đầy đủ tín - hạnh - nguyện chưa? Và nhất là nguyện lực có chí thành khẩn thiết không?"</em>.
      </p>
    </div>

    <p>Nếu mà chấp nhận câu hỏi này thì trả lời rằng: chúng ta tu Tịnh độ có đầy đủ tín - hạnh - nguyện và nguyện lực có chí thành tha thiết thì chắc chắn sẽ được vãng sanh 100%. Nhưng nếu lỡ lâm chung do cận tử nghiệp nào đó làm trở ngại cho sự vãng sanh phải đọa vào ác đạo, đó là trường hợp ngoài ý muốn.</p>
    
    <p>Và do thường ngày chúng ta có huân tập sẵn những chủng tử niệm Phật vào trong A-lại-da thức, thì khi đó chúng ta nhớ lại, liền niệm Phật với một lòng chí thành tha thiết nhớ tưởng Phật, nguyện về Cực lạc. Do nhờ định lực niệm Phật của mình cảm ứng với từ lực của Đức Phật A-Di-Đà thì lập tức cảnh "ác đạo" sẽ được chuyển hóa thành cảnh "Cực lạc" và chúng ta sẽ được vãng sanh. Vì <strong>"Tất cả cảnh giới đều do tâm tạo"</strong>, chỉ cần chuyển đổi cái tâm thì cảnh giới sẽ được chuyển đổi.</p>

  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Mục đích chính của việc tu pháp môn niệm Phật hoặc tu Phật thất theo nội dung bài viết là gì?",
    options: {
      a: "Để trở thành một vị Thánh có thần thông quảng đại.",
      b: "Để đạt được sự giàu có và bình an trong cuộc sống hiện tại.",
      c: "Để cầu vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà.",
      d: "Để nghiên cứu về lịch sử của Đức Phật A-Di-Đà.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Văn bản ghi rõ: 'Tu Phật thất, tu pháp môn niệm Phật hay niệm Phật A-Di-Đà mục đích để cầu vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà.'",
      d: "Sai.",
    },
  },
  {
    question: "Theo phương diện 'sự', việc xác định xứ Cực lạc ở hướng Tây có ý nghĩa gì đối với người tu tập?",
    options: {
      a: "Vì hướng Tây là nơi mặt trời mọc, tượng trưng cho sự khởi đầu mới.",
      b: "Để phân biệt với các tôn giáo khác vốn thường chọn hướng Đông.",
      c: "Để hành giả có niềm tin nhằm tu thiền và đạt được nhất niệm.",
      d: "Chỉ đơn thuần là một chỉ dẫn địa lý để con người dễ tìm kiếm trên bản đồ.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Theo sự, xác định hướng Tây là nhằm giúp cho hành giả có một niềm tin để tu thiền và tịnh được nhất niệm.'",
      d: "Sai.",
    },
  },
  {
    question: "Thần thức (hay linh hồn) được mô tả như thế nào sau khi xác thân trở về tứ đại?",
    options: {
      a: "Nó sẽ biến mất hoàn toàn cùng với thể xác.",
      b: "Nó sẽ lập tức hóa thân thành một con người mới ngay tại cõi Ta-bà.",
      c: "Nó bàng bạc khắp mọi nơi trong không gian.",
      d: "Nó sẽ tụ lại thành một điểm duy nhất trong não bộ.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Khi chết thì xác thân trở về tứ đại, chỉ còn lại thần thức nó bàng bạc khắp mọi nơi trong không gian.'",
      d: "Sai.",
    },
  },
  {
    question: "Ba điều kiện thiết yếu (kiềng ba chân) để vãng sanh về xứ Cực lạc là gì?",
    options: {
      a: "Bi - Trí - Dũng",
      b: "Giới - Định - Tuệ",
      c: "Nghe - Suy nghĩ - Tu tập",
      d: "Tín - Hạnh - Nguyện",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Muốn vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà cần phải có 3 điều kiện: Tín - Hạnh - Nguyện.'",
    },
  },
  {
    question: "Trong 'Lục tín', 'Tin tự' có nghĩa là gì?",
    options: {
      a: "Tin rằng mình có thể tự do làm mọi điều mình thích ở cõi Cực lạc.",
      b: "Tin rằng mọi người xung quanh sẽ giúp mình đạt được nhất niệm.",
      c: "Tin chính mình niệm Phật đạt nhất niệm thì chắc chắn được vãng sanh.",
      d: "Tin rằng chỉ cần mình muốn là sẽ được vãng sanh mà không cần niệm Phật.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Tin tự: tin chính mình niệm Phật đạt nhất niệm thì chắc chắn được vãng sanh về xứ Cực lạc của Đức Phật A-Di-Đà.'",
      d: "Sai.",
    },
  },
  {
    question: "Yếu tố 'Tương ưng' trong phần Hạnh được giải thích như thế nào?",
    options: {
      a: "Tiếng niệm Phật phải to và vang dội để mọi người cùng nghe.",
      b: "Hành động của cơ thể phải tương ứng với từng chữ niệm ra.",
      c: "Niệm Phật phải tương ứng với thời gian làm việc trong ngày.",
      d: "Tiếng hiệp với tâm, tâm duyên theo tiếng, cả hai khăng khít nhau.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Tương ưng: là tiếng hiệp với tâm, tâm duyên theo tiếng, tâm và tiếng hiệp khắn khít nhau.'",
    },
  },
  {
    question: "Theo phương diện 'sự', yếu tố nào được coi là quan trọng nhất vì nó quyết định cho sự vãng sanh?",
    options: {
      a: "Tín (Lòng tin)",
      b: "Nguyện (Mong mỏi vãng sanh)",
      c: "Trí tuệ (Sự hiểu biết)",
      d: "Hạnh (Thực hành)",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Tín - Hạnh - Nguyện nếu nói về sự thì nguyện quan trọng hơn hết. Vì nó quyết định cho sự vãng sanh.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Người ở cõi người hoặc trời đạt được phẩm vị 'Hạ phẩm - Trung sanh' khi hành câu niệm Phật đạt nhất niệm ở mức nào?",
    options: {
      a: "12/24",
      b: "24/24",
      c: "8/24",
      d: "16/24",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Theo bảng Hạnh đối với Người-trời: '16/24 là Hạ phẩm - Trung sanh'.",
    },
  },
  {
    question: "Nếu một người tu Tịnh độ gặp phải 'cận tử nghiệp' xấu làm trở ngại, điều gì giúp họ có thể chuyển hóa cảnh giới để vãng sanh?",
    options: {
      a: "Nhờ vào việc đã cúng dường nhiều tiền bạc lúc còn sống.",
      b: "Nhờ sự trợ giúp của người thân đang cầu nguyện bên cạnh.",
      c: "Nhờ các chủng tử niệm Phật đã huân tập sẵn trong A-lại-da thức được nhớ lại và phát khởi.",
      d: "Sự can thiệp trực tiếp của các vị Thánh chúng mà không cần người đó niệm Phật.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Do thường ngày chúng ta có huân tập sẵn những chủng tử niệm Phật vào trong A-lại-da thức, thì khi đó chúng ta nhớ lại, liền niệm Phật với một lòng chí thành tha thiết... cảnh ác đạo sẽ được chuyển hóa thành cảnh Cực lạc.'",
      d: "Sai.",
    },
  },
  {
    question: "Văn bản khẳng định thế nào về mối quan hệ giữa Tín, Hạnh và Nguyện khi nói về 'lý'?",
    options: {
      a: "Nguyện là quan trọng nhất, các yếu tố kia chỉ là phụ.",
      b: "Hạnh là yếu tố duy nhất có thể quan sát và đo lường được.",
      c: "Cả ba có cùng một lúc, là ba phương diện của một thực thể.",
      d: "Tín phải có trước rồi mới đến Hạnh và Nguyện.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Nói về lý: thì Tín - Hạnh - Nguyện có cùng một lúc, không thể nói cái có trước, cái có sau... Tức là ba phương diện của một thực thể.'",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-phap-mon-tinh-do-bai-1-7-cau-hoi',
  slug: 'bai-1-7-cau-hoi-ve-phap-mon-tinh-do',
  title: '7 Câu Hỏi Về Pháp Môn Tịnh Độ',
  type: 'article',
  status: 'published',
  order: 1,
  coverImage: materialUrl('7 CÂU HỎI VỀ PHÁP MÔN TỊNH ĐỘ'),  
  createdAt: '2026-08-29',
  updatedAt: '2026-08-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/7%20C%C3%82U%20H%E1%BB%8EI%20V%E1%BB%80%20PH%C3%81P%20M%C3%94N%20T%E1%BB%8ANH%20%C4%90%E1%BB%98/L%E1%BB%99_tr%C3%ACnh_v%E1%BB%81_C%E1%BB%B1c_L%E1%BA%A1c%20(1).png',
      readingContent,
      tableOfContents: [
        { id: 'cau-hoi-1', label: '1. Mục đích niệm Phật' },
        { id: 'cau-hoi-2', label: '2. Xứ Cực lạc ở đâu?' },
        { id: 'cau-hoi-3', label: '3. Lấy gì để vãng sanh?' },
        { id: 'cau-hoi-4', label: '4. Điều kiện vãng sanh' },
        { id: 'cau-hoi-5', label: '5. Tín - Hạnh - Nguyện cái nào trước?' },
        { id: 'cau-hoi-6', label: '6. Tín - Hạnh - Nguyện cái nào quan trọng?' },
        { id: 'cau-hoi-7', label: '7. Có chắc chắn vãng sanh không?' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/7%20C%C3%82U%20H%E1%BB%8EI%20V%E1%BB%80%20PH%C3%81P%20M%C3%94N%20T%E1%BB%8ANH%20%C4%90%E1%BB%98/Path_to_Bliss.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/2MMWk6DUEaI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5LFVpqU7dUrK0Moqvqq9SE',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - 7 Câu Hỏi Về Pháp Môn Tịnh Độ',
    passPercentage: 70,
    questions,
  },
}

export default lesson
