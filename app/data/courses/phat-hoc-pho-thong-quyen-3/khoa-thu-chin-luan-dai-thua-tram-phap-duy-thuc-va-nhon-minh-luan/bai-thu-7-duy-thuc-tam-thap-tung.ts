import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP BA</p>
      <p class="mb-2 font-semibold">DUY THỨC TAM THẬP TỤNG DỊ GIẢI</p>
      <h2 id="bai-thu-bay-duy-thuc-tam-thap-tung" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ BẢY</h2>
    </div>

    <p class="mt-6"><strong>Hỏi:</strong> Như trên đã thành lập Duy thức tướng và Duy thức tánh rồi; Người nào mới có thể nhập được? Và làm sao để ngộ nhập?</p>
    <p><strong>Đáp:</strong> Phải là người có đủ hai giống tánh Đại thừa và tu hành trải qua năm địa vị sau này mới được ngộ nhập:</p>
    <ol class="list-decimal space-y-1 pl-6">
      <li>Vị Tư lương</li>
      <li>Vị Gia hạnh</li>
      <li>Vị Thông đạt</li>
      <li>Vị Tu tập</li>
      <li>Vị Cứu cánh</li>
    </ol>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Xem infographic: Năm giai đoạn Duy thức</p>
      <p class="mb-0">Từ khi phát tâm tu Duy thức cho đến khi chứng Duy thức quả, hành giả phải trải qua năm địa vị: Tư lương &rarr; Gia hạnh &rarr; Thông đạt &rarr; Tu tập &rarr; Cứu cánh.</p>
    </div>

    <h3 id="chanh-van-vi-tu-luong" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: VỊ TƯ LƯƠNG</h3>
    <p><strong>Hỏi:</strong> Hành tướng của vị Tư lương thế nào?</p>

    <h4 id="nguyen-van-chu-han-vi-tu-luong" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Nãi chí vị khởi thức</p>
        <p>Cầu trụ Duy thức tánh</p>
        <p>Ư nhị thủ tùy miên</p>
        <p>Du vị năng phục diệt.</p>
      </div>
    </div>

    <h4 id="dich-nghia-vi-tu-luong" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói bài tụng để trả lời rằng: Từ khi chưa phát tâm, cho đến khi đã phát tâm cầu an trụ Duy thức tánh, trong thời gian đó hai món thủ (ngã chấp, pháp chấp) hãy còn miên phục; hành giả chưa có thể chinh phục hay diệt trừ được.</p>

    <h4 id="luoc-giai-vi-tu-luong" class="text-lg font-semibold">Lược giải</h4>
    <p>Từ trước đến đây đã nói rõ về Duy thức cảnh rồi, tức là Duy thức tướng và Duy thức tánh. Nay sẽ nói Duy thức hạnh và Duy thức quả, tức là dạy người sau khi học hiểu, phải phát tâm tu hành rồi mới chứng được Duy thức quả.</p>
    <p>Vậy từ khi phát tâm tu Duy thức, cho đến chứng Duy thức quả, phải trải qua năm địa vị:</p>
    <p><strong>Vị Tư lương:</strong> Lương phạn, đồ hành lý. Thí như người đi đường. Trước phải sắm sửa lương phạn tiền bạc v.v... để lên đường.</p>
    <p>Địa vị này bắt đầu từ khi chưa phát tâm tu Duy thức quán, cho đến khi phát Bồ Đề tâm, cầu an trụ Duy thức tánh (chơn như tâm).</p>
    <p>Thí như chúng ta nghe trong kinh dạy: "vạn pháp Duy thức"; rồi chúng ta bắt đầu ngày đêm tu Duy thức quán. Bất luận thời giờ nào, khi thấy nghe hay biết, chúng ta đều quán "Tất cả pháp là giả tướng, Duy thức biến hiện". Chúng ta luôn luôn ở trong Duy thức quán. Cũng như người ở trong cảnh Tịnh độ bảy báu trang nghiêm. Được như thế thì tất cả phiền não không thể xâm nhập.</p>
    <p>Song, khi mới cầu an trụ Duy thức, công tu chưa thâm, năng lực còn kém, nên chưa có thể an trụ Duy thức tánh được. Lúc bấy giờ hai món phiền não (năng thủ, sở thủ) còn miên phục, chưa trỗi dậy; cũng như cỏ bị đá đè. Đến khi áp lực được nhẹ đi, thì hai món chủng tử này sẽ sanh khởi trở lại.</p>
    <p>Duy thức tánh như ông chủ nhà, phiền não như kẻ trộm. Kẻ trộm không bao giờ ưa chủ nhà; chủ nhà lúc nào cũng ghét kẻ trộm.</p>
    <p>Duy thức tánh và phiền não cũng thế. Nếu không diệt trừ phiền não thì không thể an trụ Duy thức tánh được. Bởi thế nên muốn an trụ Duy thức tánh thì quyết định phải diệt trừ hai món thủ (ngã, pháp).</p>

    <h3 id="chanh-van-vi-gia-hanh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: VỊ GIA HẠNH</h3>
    <p><strong>Hỏi:</strong> Hành tướng của vị Gia hạnh thế nào?</p>

    <h4 id="nguyen-van-chu-han-vi-gia-hanh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Hiện tiền lập thiểu vật</p>
        <p>Vị thị Duy thức tánh</p>
        <p>Dĩ hữu sở đắc cố</p>
        <p>Phi thật trụ Duy thức.</p>
      </div>
    </div>

    <h4 id="dich-nghia-vi-gia-hanh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói bài tụng để trả lời rằng: Nếu hiện tiền còn một tí thấy mình an trụ Duy thức tánh, thì chưa phải thật an trụ Duy thức tánh, vì còn có chỗ sở đắc vậy.</p>

    <h4 id="luoc-giai-vi-gia-hanh" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Vị Gia hạnh:</strong> Gia công tấn hạnh. Vị Gia hạnh này giống như người đi đường, trước phải dự bị đồ hành lý, rồi sắp sửa khởi hành.</p>
    <p>Hành giả, khi tu Duy thức quán, thấy cảnh giới Duy thức hiện tiền, nếu chấp mình chứng được Duy thức tánh, như thế là còn có chỗ sở đắc, nên chưa phải thật chứng Duy thức. Cũng như ông Nhan Hồi học Đạo với đức Khổng tử, sau khi thể hội được Đạo, ông nói rằng: "Như có một vật gì đứng đồ sộ vậy(1)". Đó cũng là cảnh giới Duy thức biến, chẳng qua thức biến không đồng.</p>
    <p>Vì chơn tánh của Duy thức, chẳng phải có, chẳng phải không, tuy chứng mà không có gì là chứng, thế mới thật là chứng Duy thức.</p>
    <p>Người an trụ được chơn tánh của Duy thức, cũng như cái tay người biết viết chữ: Không thấy có gì khác cả. Bởi thế nên nói "đặng mà không có gì là đặng".</p>
    <p>Nay người tu Duy thức, do hiện tiền còn một tí thấy mình chứng Duy thức, nên không phải thật an trụ nơi Duy thức tánh.</p>

    <h3 id="chanh-van-vi-thong-dat" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: VỊ THÔNG ĐẠT</h3>
    <p><strong>Hỏi:</strong> Hành tướng của vị Thông đạt thế nào?</p>

    <h4 id="nguyen-van-chu-han-vi-thong-dat" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Nhược thời ư sở duyên</p>
        <p>Trí đô vô sở đắc</p>
        <p>Nhĩ thời trụ Duy thức</p>
        <p>Ly nhị thủ tướng cố.</p>
      </div>
    </div>

    <h4 id="dich-nghia-vi-thong-dat" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói bài tụng để trả lời rằng: bao giờ cảnh sở quán và trí năng quán đều không, khi đó mới an trụ nơi Duy thức tánh, vì đã xa lìa được hai món thủ vậy.</p>

    <h4 id="luoc-giai-vi-thong-dat" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Vị Thông đạt:</strong> Rõ ràng thông suốt. Vị Thông đạt này cũng như người đi đường, đã thông suốt con đường sẽ đi, bắt đầu khởi hành, không còn lo ngại.</p>
    <p>Hành tướng của vị này là khi hành giả đối với cảnh sở quán và trí năng quán, đều xem như huyễn như hóa, không có sở đắc.</p>
    <p>Vị Gia hạnh trước, chưa xa lìa hai món thủ (Ngã chấp, Pháp chấp), vì còn có sở đắc, nên chưa có thể an trụ nơi Duy thức. Đến vị Thông đạt này, thì đã xa lìa hai món thủ, không có sở đắc, nên mới thật an trụ nơi Duy thức.</p>
    <p>Đoạn văn này, đồng một nghĩa với câu: "Vô trí diệc vô đắc" (không có trí năng đắc và cảnh sở đắc) trong Bát Nhã Tâm kinh.</p>

    <h3 id="chanh-van-vi-tu-tap" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: VỊ TU TẬP</h3>
    <p><strong>Hỏi:</strong> Hành tướng của vị Tu tập thế nào?</p>

    <h4 id="nguyen-van-chu-han-vi-tu-tap" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Vô đắc bất tư nghị</p>
        <p>Thị xuất thế gian trí</p>
        <p>Xả nhị thô trọng cố</p>
        <p>Tiện chứng đắc chuyển y.</p>
      </div>
    </div>

    <h4 id="dich-nghia-vi-tu-tap" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói bài tụng để trả lời rằng: Cảnh giới Vô đắc này không thể nghĩ bàn; đây là "Trí xuất thế gian" (vô phân biệt trí). Do đã xa lìa được hai món thô trọng (Phiền não chướng và Sở tri chướng) và chứng được hai món chuyển y (Bồ Đề, Niết bàn).</p>

    <h4 id="luoc-giai-vi-tu-tap" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Vị Tu tập:</strong> Tu hành tập luyện. Địa vị Thông đạt trên, là chỉ thông suốt giáo lý, song chưa tu tập. Đến địa vị này mới tu tập Lục độ muôn hạnh, để chứng ngộ chơn lý.</p>
    <p>Ở địa vị Thông đạt mới vừa chứng cái "Thể" của trí vô đắc. Đến địa vị Tu tập này mới đặng "Diệu dụng" của trí vô đắc. Diệu dụng của trí này không thể nghĩ bàn. Nhưng, nếu trí còn có sở đắc là trí của thế gian; cái trí không có sở đắc, mới phải là trí của xuất thế gian.</p>
    <p>Vị Tu tập này đã xả bỏ được chủng tử của hai chướng là Phiền não chướng và Sở tri chướng và chứng được hai quả Bồ Đề và Niết bàn.</p>
    <p>Bài tụng trên nói chữ "thô trọng" là chỉ cho hai món chủng tử của hai món chướng: Phiền não và Sở tri; còn nói chữ "chuyển y", nghĩa là y cứ trên y tha khởi tánh, mà chuyển nhiễm trở lại tịnh: chuyển phiền não chướng thành Đại giải thoát (Niết bàn), chuyển sở tri chướng thành Đại Bồ Đề.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Trên tánh Y tha khởi</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Xả hai món nhiễm:</strong> Phiền não chướng và Sở tri chướng.</li>
        <li><strong>Đặng hai quả Thanh tịnh:</strong> Đại Niết bàn và Đại Bồ Đề.</li>
      </ul>
    </div>

    <h3 id="chanh-van-vi-cuu-canh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: VỊ CỨU CÁNH</h3>
    <p><strong>Hỏi:</strong> Hành tướng của vị Cứu cánh thế nào?</p>

    <h4 id="nguyen-van-chu-han-vi-cuu-canh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thử tức vô lậu giới</p>
        <p>Bất tư nghị, thiện, thường</p>
        <p>An lạc, Giải thoát thân</p>
        <p>Đại Mâu ni danh pháp.</p>
      </div>
    </div>

    <h4 id="dich-nghia-vi-cuu-canh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói bài tụng để trả lời rằng: Đây là cảnh giới vô lậu, cũng gọi là: 1. Bất tư nghị, 2. Thiện, 3. Thường, 4. An lạc, 5. Giải thoát thân, 6. Đại Mâu ni, cũng gọi là Pháp thân.</p>

    <h4 id="luoc-giai-vi-cuu-canh" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Vị Cứu cánh:</strong> Quả vị rốt ráo; trong các quả vị tu hành, đến đây đã cùng tột rồi, không còn quả vị nào hơn nữa. Hành giả chứng được quả vị Bồ Đề, Niết bàn là cảnh giới vô lậu rốt ráo thanh tịnh.</p>
    <p>Nói "Cảnh giới thanh tịnh" tức là chỉ cái Tổng tướng của vị Cứu cánh; nếu chỉ Biệt tướng của vị này thì có 6 món:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Bất tư nghị:</strong> Cảnh giới này không thể dùng trí suy nghĩ hay lời nói luận bàn được.</li>
      <li><strong>Thiện:</strong> Cảnh giới này đã xa lìa hết các pháp nhiễm ô, bất thiện.</li>
      <li><strong>Thường:</strong> Cảnh giới này thường còn, tột đến đời vị lai, không có cùng tận vậy.</li>
      <li><strong>An lạc:</strong> Cảnh giới này rất thanh tịnh vui vẻ, không có các điều khổ não bức bách vậy.</li>
      <li><strong>Giải thoát thân:</strong> Do xa lìa các phiền não triền phược, nên được thân Giải thoát (Cảnh giới của Nhị thừa).</li>
      <li><strong>Đại Mâu Ni hay gọi là Pháp thân:</strong> Do xa lìa được sở tri chướng, nên chứng đặng quả vô thượng Bồ Đề; vì quả vị này bản tánh rất thanh tịnh, nên gọi là Đại Mâu ni (tịnh mặc) cũng gọi là Pháp thân vậy.</li>
    </ol>

    <p class="mt-6 text-sm italic text-text-muted">Dịch xong tại chùa Phật Quang (Trà Ôn), ngày trừ tịch năm Canh Tý (14-2-1961).</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo văn bản, để ngộ nhập Duy thức, hành giả phải trải qua bao nhiêu địa vị tu hành?',
    options: {
      a: 'Năm địa vị',
      b: 'Ba địa vị',
      c: 'Bảy địa vị',
      d: 'Bốn địa vị',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Văn bản nêu rõ hành giả phải trải qua năm địa vị: Tư lương, Gia hạnh, Thông đạt, Tu tập, Cứu cánh.',
      b: 'Sai. Văn bản không đề cập đến ba địa vị.',
      c: 'Sai. Văn bản không đề cập đến bảy địa vị.',
      d: 'Sai. Văn bản không đề cập đến bốn địa vị.',
    },
  },
  {
    question: "Tại địa vị Tư lương, trạng thái của 'hai món thủ' (ngã chấp và pháp chấp) được mô tả như thế nào?",
    options: {
      a: 'Không còn ảnh hưởng đến tâm thức',
      b: 'Đã bị tiêu diệt hoàn toàn',
      c: 'Vẫn còn miên phục, chưa thể chinh phục',
      d: 'Đã được chuyển hóa thành trí tuệ',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hai món thủ vẫn còn và có khả năng sinh khởi trở lại.',
      b: 'Sai. Hai món phiền não này chưa bị tiêu diệt.',
      c: 'Đúng. Tại địa vị Tư lương, hai món thủ hãy còn miên phục, hành giả chưa thể chinh phục hay diệt trừ được.',
      d: 'Sai. Không có thông tin về việc chuyển hóa thành trí tuệ ở giai đoạn này.',
    },
  },
  {
    question: 'Tại sao ở địa vị Gia hạnh, hành giả vẫn chưa thật sự an trụ nơi Duy thức tánh?',
    options: {
      a: 'Vì chưa phát Bồ Đề tâm',
      b: 'Vì chưa học hiểu giáo lý Duy thức',
      c: 'Vì còn thấy mình có chỗ sở đắc',
      d: 'Vì chưa xả bỏ được thân mạng',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Việc phát Bồ Đề tâm là bắt đầu từ vị Tư lương.',
      b: 'Sai. Giai đoạn này hành giả đã học hiểu và đang tu Duy thức quán.',
      c: 'Đúng. Hành giả hiện tiền còn một tí thấy mình chứng Duy thức tánh, tức là còn có chỗ sở đắc nên chưa thật an trụ.',
      d: 'Sai. Văn bản không đề cập đến việc xả bỏ thân mạng.',
    },
  },
  {
    question: 'Điểm khác biệt cốt lõi giữa vị Thông đạt và vị Gia hạnh là gì?',
    options: {
      a: 'Vị Thông đạt mới bắt đầu tu tập Lục độ',
      b: 'Vị Thông đạt đã xa lìa được hai món thủ nhờ không có sở đắc',
      c: 'Vị Thông đạt bắt đầu sắm sửa hành lý',
      d: 'Vị Thông đạt đã đạt đến quả vị rốt ráo',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Bắt đầu tu tập Lục độ là ở vị Tu tập.',
      b: 'Đúng. Vị Gia hạnh chưa xa lìa hai món thủ vì còn sở đắc. Đến vị Thông đạt thì đã xa lìa hai món thủ, không có sở đắc.',
      c: 'Sai. Việc sắm sửa hành lý được dùng làm ví dụ cho vị Tư lương và Gia hạnh.',
      d: 'Sai. Quả vị rốt ráo là của vị Cứu cánh.',
    },
  },
  {
    question: "Địa vị nào là nơi hành giả thực hiện 'Lục độ muôn hạnh' và chứng đặng 'Diệu dụng' của trí vô đắc?",
    options: {
      a: 'Vị Cứu cánh',
      b: 'Vị Thông đạt',
      c: 'Vị Tu tập',
      d: 'Vị Gia hạnh',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Vị Cứu cánh là quả vị rốt ráo thanh tịnh cuối cùng.',
      b: 'Sai. Vị Thông đạt mới chỉ thông suốt giáo lý và chứng cái "Thể" của trí vô đắc.',
      c: 'Đúng. Đến vị Tu tập, hành giả mới tu tập Lục độ muôn hạnh để chứng ngộ chân lý và đặng "Diệu dụng" của trí vô đắc.',
      d: 'Sai. Vị Gia hạnh chưa đạt đến trình độ này.',
    },
  },
  {
    question: "Thuật ngữ 'Chuyển y' trong địa vị Tu tập có nghĩa là gì?",
    options: {
      a: 'Từ bỏ việc tu hành để quay về thế gian',
      b: 'Thay đổi y phục khi tu hành',
      c: 'Di chuyển nơi cư trú để thanh tịnh tâm',
      d: 'Dựa trên tánh Y tha khởi để chuyển nhiễm thành tịnh',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Đây hoàn toàn không phải nghĩa của từ "Chuyển y" trong Phật học.',
      b: 'Sai. Đây là nghĩa đen thông thường, không phải nghĩa thuật ngữ trong Duy thức.',
      c: 'Sai. Không liên quan đến việc chuyển nơi cư trú.',
      d: 'Đúng. Chuyển y nghĩa là y cứ trên y tha khởi tánh, mà chuyển nhiễm trở lại tịnh (chuyển phiền não chướng thành Niết bàn, chuyển sở tri chướng thành Đại Bồ Đề).',
    },
  },
  {
    question: "Trong sáu biệt tướng của vị Cứu cánh, 'Đại Mâu Ni' còn được gọi bằng tên gọi nào khác?",
    options: {
      a: 'Vô lậu giới',
      b: 'Pháp thân',
      c: 'Bất tư nghị',
      d: 'Giải thoát thân',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Vô lậu giới chỉ chung cho tổng tướng của vị Cứu cánh.',
      b: 'Đúng. Biệt tướng thứ 6 là Đại Mâu Ni, bản tánh rất thanh tịnh nên cũng được gọi là Pháp thân.',
      c: 'Sai. Bất tư nghị là biệt tướng thứ 1.',
      d: 'Sai. Giải thoát thân là biệt tướng thứ 5.',
    },
  },
  {
    question: "Tại sao cảnh giới ở vị Cứu cánh được gọi là 'Thường'?",
    options: {
      a: 'Vì nó chỉ xuất hiện vào những lúc thường nhật',
      b: 'Vì nó tồn tại mãi mãi đến đời vị lai, không cùng tận',
      c: 'Vì nó thường xuyên thay đổi theo ý muốn',
      d: 'Vì nó là thói quen bình thường của chúng sinh',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Không liên quan đến những lúc thường nhật.',
      b: 'Đúng. Gọi là "Thường" vì cảnh giới này thường còn, tột đến đời vị lai, không có cùng tận vậy.',
      c: 'Sai. Cảnh giới này không thay đổi mà thường hằng.',
      d: 'Sai. Không mang ý nghĩa chỉ thói quen.',
    },
  },
  {
    question: "Trong ví dụ về 'Chủ nhà và Kẻ trộm', Duy thức tánh đóng vai trò là ai?",
    options: {
      a: 'Ông chủ nhà',
      b: 'Kẻ trộm',
      c: 'Người bảo vệ',
      d: 'Người hàng xóm',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Văn bản ghi rõ: "Duy thức tánh như ông chủ nhà, phiền não như kẻ trộm".',
      b: 'Sai. Kẻ trộm đóng vai trò là phiền não.',
      c: 'Sai. Văn bản không đề cập đến vai trò này.',
      d: 'Sai. Văn bản không đề cập đến vai trò này.',
    },
  },
  {
    question: "Cụm từ 'Vô trí diệc vô đắc' trong Bát Nhã Tâm Kinh được văn bản dùng để so sánh với địa vị nào?",
    options: {
      a: 'Vị Cứu cánh',
      b: 'Vị Thông đạt',
      c: 'Vị Tu tập',
      d: 'Vị Tư lương',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Không được dùng để so sánh với vị Cứu cánh.',
      b: 'Đúng. Ở vị Thông đạt, cảnh sở quán và trí năng quán đều không có sở đắc, điều này đồng nghĩa với câu "Vô trí diệc vô đắc" trong Bát Nhã Tâm Kinh.',
      c: 'Sai. Không được dùng để so sánh với vị Tu tập.',
      d: 'Sai. Không được dùng để so sánh với vị Tư lương.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-7-duy-thuc-tam-thap-tung',
  slug: 'bai-thu-7-duy-thuc-tam-thap-tung',
  title: 'Bài Thứ 7 - Duy Thức Tam Thập Tụng',
  type: 'article',
  status: 'published',
  order: 25,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-7-duy-thuc-tam-thap-tung/5_Giai_%C4%90o%E1%BA%A1n_Duy_Th%E1%BB%A9c.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-bay-duy-thuc-tam-thap-tung', label: 'Bài Thứ Bảy' },
        { id: 'chanh-van-vi-tu-luong', label: 'Chánh văn: Vị Tư lương', indent: 1 },
        { id: 'nguyen-van-chu-han-vi-tu-luong', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-vi-tu-luong', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-vi-tu-luong', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-vi-gia-hanh', label: 'Chánh văn: Vị Gia hạnh', indent: 1 },
        { id: 'nguyen-van-chu-han-vi-gia-hanh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-vi-gia-hanh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-vi-gia-hanh', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-vi-thong-dat', label: 'Chánh văn: Vị Thông đạt', indent: 1 },
        { id: 'nguyen-van-chu-han-vi-thong-dat', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-vi-thong-dat', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-vi-thong-dat', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-vi-tu-tap', label: 'Chánh văn: Vị Tu tập', indent: 1 },
        { id: 'nguyen-van-chu-han-vi-tu-tap', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-vi-tu-tap', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-vi-tu-tap', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-vi-cuu-canh', label: 'Chánh văn: Vị Cứu cánh', indent: 1 },
        { id: 'nguyen-van-chu-han-vi-cuu-canh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-vi-cuu-canh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-vi-cuu-canh', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-7-duy-thuc-tam-thap-tung/Yogacara_Mind_Transformation.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/-if56dMAb74',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/6Nrf0aG01WPbF7LYmEHSYQ?utm_source=generator&si=dc75054ed8c54738',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Duy Thức Tam Thập Tụng (Bài 7)',
    passPercentage: 70,
    questions,
  },
}

export default lesson
