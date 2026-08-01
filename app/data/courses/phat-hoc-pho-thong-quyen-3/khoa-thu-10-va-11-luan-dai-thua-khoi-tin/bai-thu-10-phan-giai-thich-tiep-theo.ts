import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-4 text-sm font-semibold uppercase tracking-wide opacity-70">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="mb-10 rounded-2xl border border-primary-200 bg-primary-50/70 p-6 shadow-sm dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-bold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="noi-ve-nghia-bat-giac-tiep-theo" class="mt-0 mb-0 text-3xl font-extrabold leading-tight text-primary-700 dark:text-primary-300">Nói về nghĩa "Bất giác" (tiếp theo)</h2>
    </div>

    <div class="mt-12 mb-8 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="chon-nhu-vo-minh-thi-chung" class="mt-0 mb-0 text-2xl font-bold text-secondary-700 dark:text-secondary-300">1. Chơn như và vô minh, thỉ và chung (tiếp theo)</h3>
    </div>

    <h4 class="mt-8 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p class="mb-4">Lại nữa, vô minh (pháp nhiễm ô) và chơn như (pháp thanh tịnh) đều đã có sẵn từ vô thỉ đến nay và huân tập chẳng dứt; song đến khi thành Phật rồi, thì vô minh bị dứt hết, còn chơn như lại vô cùng tận trong đời vị lai, cho đến sau khi thành Phật cũng vẫn còn. Tại sao vậy? – Vì chơn như thường huân tập, nên vọng tâm (vô minh) phải tiêu diệt. Do vọng tâm tiêu diệt, nên pháp thân hiện ra; rồi pháp thân lại khởi diệu dụng, huân tập trở lại nữa, nên chơn như không có cùng tận.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p id="chon-nhu-vo-thi-vo-chung" class="mb-4"><strong>Chơn như vô thỉ vô chung:</strong> Chơn như và vô minh đồng một bản thể và có từ vô thỉ. Song chơn như sau khi ra khỏi triền phược rồi, lại được nuôi lớn nên vô chung.</p>
    <p id="vo-minh-vo-thi-huu-chung" class="mb-4"><strong>Vô minh vô thỉ hữu chung:</strong> Vô minh rốt sau bị chơn như tiêu diệt, nên hữu chung.</p>
    <p class="mb-4">Thí như trong trái hồng, cả chất chát và ngọt đều đồng thời có. Song khi trái hồng còn non, chất ngọt bị chất chát lấn át (chơn như tại triền), nên người ta chỉ thấy chất chát (vô minh); đến khi lớn dần, thì chất chát bị chất ngọt huân tập, nên chất chát mỗi ngày mỗi ít, mà chất ngọt mỗi ngày mỗi thêm, rốt cuộc rồi chát hết (vô minh diệt) mà chỉ còn ngọt (chơn như). Khi trái hồng đã chín ngọt rồi, thì không bao giờ trở lại chát nữa (chúng sanh khi đã thành Phật, không trở lại làm chúng sanh nữa).</p>
    <p class="mb-8 opacity-70 italic">Trên đã nói về "Nhơn duyên sanh diệt" rồi, dưới đây sẽ nói về ba đại nghĩa của Tâm là: Thể, Tướng và Dụng.</p>

    <div class="mt-12 mb-8 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="ba-dai-nghia-cua-tam" class="mt-0 mb-2 text-2xl font-bold text-secondary-700 dark:text-secondary-300">m. Nói về 3 đại nghĩa của Tâm:</h3>
      
      <!-- Đã chuyển từ ul sang div để không bị prose tự động chèn dấu chấm -->
      <div class="mb-0 text-lg font-medium text-secondary-600 dark:text-secondary-400 pl-6 space-y-2">
         <p id="the-rong-lon" class="mb-0">1. Thể rộng lớn của Tâm (tánh bình đẳng không động)</p>
         <p id="tuong-rong-lon" class="mb-0">2. Tướng rộng lớn của Tâm (đủ hằng sa công đức)</p>
         <p id="dung-rong-lon" class="mb-0">3. Dụng rộng lớn của Tâm (có hằng sa diệu dụng, sẽ nói trong bài 11)</p>
      </div>
    </div>

    <h4 class="mt-8 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p class="mb-4">Lại nữa, tất cả phàm phu, Thinh văn, Duyên giác, Bồ Tát và Phật, từ hồi nào đến giờ, đều tự sẵn có thể tướng chơn như này. Tánh chơn như không tăng, không giảm, không trước, không sau, không sanh, không diệt, rốt ráo thường hằng, đầy đủ tất cả công đức (đức tánh), như là:</p>
    <ul class="mb-6 list-disc pl-6 space-y-2">
      <li>1. Đại trí huệ sáng suốt.</li>
      <li>2. Chiếu khắp cả pháp giới.</li>
      <li>3. Chơn thật hay biết.</li>
      <li>4. Tâm tánh thanh tịnh.</li>
      <li>5. Thường, lạc, ngã, tịnh.</li>
      <li>6. Trong mát (thanh lương), không biến đổi và tự tại v.v..</li>
    </ul>
    <p class="mb-8">Tóm lại, nó không rời, không đoạn, không khác, đầy đủ pháp Phật không thể nghĩ bàn, và có vô lượng công đức, nhiều hơn số cát sông Hằng. Vì nó đầy đủ tất cả, không thiếu một công đức nào, nên gọi là Như Lai tạng, cũng gọi là Như Lai Pháp thân.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Trước kia, trong phần "Định danh nghĩa" có nói: "Tướng nhơn duyên sanh diệt tức là Thể, Tướng và Dụng của Đại thừa...". Đến bài này nói rõ Thể lớn, Tướng lớn và Dụng lớn của Đại thừa, tức là tâm Chơn như vậy.</p>
    <p class="mb-4">Nhưng trong bài này, chỉ mới nói Thể rộng lớn của tâm, là tánh bình đẳng không vọng động, và Tướng rộng lớn của tâm, là có đủ hằng sa công đức; còn Dụng rộng lớn của tâm, sẽ nói tiếp trong bài thứ 11.</p>
    <p class="mb-4">Tất cả Thánh phàm, đều sẵn có tâm chơn như và cũng đều từ tâm này sanh ra. Tâm chơn như ở nơi Thánh không thêm, ở nơi phàm chẳng giảm, không trước không sau, không sanh không diệt, đầy đủ hằng sa đức tánh:</p>
    
    <ul class="mb-6 list-disc pl-6 space-y-3">
      <li><strong>Đại trí huệ sáng suốt</strong> (tức là đức tánh thường quang của Pháp thân Phật).</li>
      <li><strong>Chiếu khắp cả pháp giới</strong> (tức là Thật trí chiếu suốt lý tánh. Quyền trí soi khắp tất cả sự vật).</li>
      <li><strong>Chơn thật hay biết</strong> (rời các vọng thức phân biệt, chỉ còn chơn giác).</li>
      <li><strong>Tâm tánh thanh tịnh</strong> (chơn tâm thanh tịnh, xa lìa các vọng hoặc nhiễm ô).</li>
      <li><strong>Đủ bốn đức Niết bàn:</strong> Chơn thường (thuần nhứt không thay đổi), Chơn lạc (không có các khổ làm não loạn), Chơn ngã (không bị hai món sanh tử bức bách), Chơn tịnh (không bị trần lao phiền não làm nhiễm ô).</li>
      <li><strong>Trong mát</strong> (vĩnh viễn xa lìa phiền não).</li>
      <li><strong>Không biến đổi</strong> (không sanh, trụ, dị, diệt).</li>
      <li><strong>Tự tại</strong> (không bị các nghiệp triền phược).</li>
      <li><strong>Không rời</strong> (hằng sa công đức không rời chơn như).</li>
      <li><strong>Không đoạn</strong> (từ vô thỉ đến giờ không hề gián đoạn).</li>
      <li><strong>Không khác</strong> (một vị, không khác).</li>
      <li><strong>Và không thể nghĩ bàn v.v..</strong> (sự lý viên dung, nhiễm tịnh không hai, không thể nghĩ bàn được).</li>
    </ul>
    <p class="mb-8 font-semibold">Tóm lại, vì tâm chơn như bao trùm vô lượng hằng sa công đức, nên gọi là Như Lai tạng và làm chỗ nương cho tất cả các Pháp, nên cũng gọi là Pháp thân của Như Lai.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <div class="my-6 rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 space-y-4">
      <p class="mb-0"><strong>Hỏi:</strong> Trước đã nói "Thể chơn như bình đẳng và xa lìa tất cả các tướng", tại sao đến đây lại nói "Thể chơn như có đủ các đức tánh sai khác"?</p>
      <p class="mb-0"><strong>Đáp:</strong> Tuy đủ các đức tánh, mà thật ra không có hình tướng gì sai khác; chỉ đồng một vị chơn như bình đẳng mà thôi.</p>
      <hr class="border-primary-200 dark:border-primary-800" />
      <p class="mb-0"><strong>Hỏi:</strong> Nghĩa này thế nào?</p>
      <p class="mb-0"><strong>Đáp:</strong> Vì bản thể chơn như vô phân biệt, và xa lìa các hình tướng sai biệt, cho nên không có tướng gì sai khác (vô nhị).</p>
      <hr class="border-primary-200 dark:border-primary-800" />
      <p class="mb-0"><strong>Hỏi:</strong> Vậy thì căn cứ theo nghĩa gì, mà nói là sai khác?</p>
      <p class="mb-0"><strong>Đáp:</strong> Căn cứ theo tướng sanh diệt của nghiệp thức, mà nói có sai khác vậy.</p>
    </div>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn này Luận chủ lập những câu vấn đáp, để giải thích các nghi ngờ.</p>
    <ul class="mb-8 list-disc pl-6 space-y-4">
      <li><strong>Trong phần vấn đáp thứ nhứt</strong>, về câu hỏi: "Thể chơn như đã bình đẳng và xa lìa tất cả tướng, tại sao lại có đủ các đức tánh sai khác?" - Luận chủ trả lời, đại ý: "Tướng" không khác với "Tánh", Tướng tức là Tánh, đều đồng một vị chơn như bình đẳng, nên không khác; cũng như sóng không khác với nước, sóng tức là nước, đều đồng một vị.</li>
      <li><strong>Trong phần vấn đáp thứ hai</strong>, ngoại nhân vì chưa hiểu câu trả lời trên, nên hỏi gạn lại, để được giải thích thêm. Luận chủ đáp, đại ý như sau: chơn như xa lìa tất cả các tướng, và tất cả sự phân biệt, cho nên không có hai tướng sai khác; sở dĩ có sự sai khác là do đối vọng tâm phân biệt (nghiệp thức) mà có.</li>
      <li><strong>Trong phần vấn đáp thứ ba</strong>, đại ý về câu hỏi: "Thể và Tướng chơn như đã không hai, vậy căn cứ vào đâu mà nói có sự sai khác?". Đại ý câu đáp: – Căn cứ vào nghiệp thức sanh diệt, mà chỉ Tướng sai khác. Vì nghiệp thức sanh diệt có đủ hằng sa pháp nhiễm ô, cho nên khi chuyển nhiễm ô trở lại chơn như thanh tịnh, tất nhiên cũng phải có đủ hằng sa tướng sai khác về đức tánh thanh tịnh.</li>
    </ul>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <div class="my-6 rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-4"><strong>Hỏi:</strong> Căn cứ theo tướng sanh diệt của nghiệp thức thế nào, mà nói có các đức tánh sai khác?</p>
      <p class="mb-4"><strong>Đáp:</strong> Từ hồi nào đến giờ, tất cả các pháp thật ra không có tướng gì sai khác (thật vô ư niệm), chỉ một chơn tâm mà thôi. Song vì vô minh bất giác, tâm vọng niệm khởi lên, thấy có các cảnh giới, nên gọi là "vô minh".</p>
      <ul class="list-disc pl-6 space-y-3">
        <li>Vì đối với nghiệp thức (vọng tâm) có khởi niệm; trái lại chơn như không khởi niệm nên chơn như có đức tánh Đại trí huệ quang minh (đức tánh thứ nhứt).</li>
        <li>Vì đối với nghiệp thức có thấy, nên có cái không thấy; trái lại chơn như vì xa lìa các cái thấy, nên chơn như có đức tánh chiếu khắp cả pháp giới (đức tánh thứ hai).</li>
        <li>Vì đối với nghiệp thức có vọng động, nên không chơn thật hay biết, và tự tánh không thanh tịnh; trái lại chơn như vì không vọng động, nên chơn như có đức tánh Chơn thật hay biết và Tâm tánh thanh tịnh (đức tánh thứ ba và tư).</li>
        <li>Vì đối với nghiệp thức thì không thường, không lạc, không ngã, không tịnh, nhiệt não, suy biến và không tự tại; trái lại chơn như không có các việc trên, nên chơn như có những đức tánh: chơn thường, chơn lạc, chơn ngã, chơn tịnh, thanh lương (trong mát) bất biến và tự tại (đức tánh thứ 5 và 6 v.v...)</li>
      </ul>
    </div>
    
    <p class="mb-8 font-semibold">Tóm lại, vì đối với nghiệp thức có hằng hà sa số nhiễm ô, còn chơn như thì trái lại, không có các nhiễm ô, nên chơn như hiện ra đủ các đức tánh thanh tịnh, cũng nhiều hơn số cát sông Hằng. Vì nghiệp thức (vọng tâm) có khởi động, còn thấy có các pháp hiện tiền để phân biệt, nên còn có chỗ thiếu sót; trái lại, chơn như là pháp thanh tịnh, chỉ nhứt tâm, không có vọng niệm, nên đầy đủ vô lượng công đức. Bởi thế nên gọi là Như Lai tạng, cũng gọi là Pháp thân của Như Lai.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn vấn đáp này là tiếp theo 3 đoạn vấn đáp trên, để giải thích thêm về câu hỏi: "Thể chơn như đã bình đẳng, lìa tất cả tướng, tại sao lại có đủ các đức tánh sai khác?" _ Đoạn vấn đáp trên đã trả lời rằng: "Căn cứ theo tướng sanh diệt của nghiệp thức, nên nói có các đức tánh sai khác". Bởi thế nên đến đoạn này, mới có câu hỏi: "Căn cứ theo nghiệp thức thế nào mà nói chơn như có các đức tánh sai khác?".</p>
    
    <p class="mb-4">– Đại ý trong câu trả lời của đoạn văn này: tất cả các pháp tức là chơn như, nên không có tướng gì sai khác. Song vì vô minh bất giác, tâm vọng niệm nổi lên (nghiệp thức), nên thấy (chuyển thức) có cảnh giới (hiện thực sai khác).</p>
    
    <p class="mb-4">Nghiệp thức có vô số tướng nhiễm ô như: Khởi vọng niệm, có tướng thấy, tướng không thấy, có động, vô thường, vọng ngã, khổ, nhiệt não, suy biến, không tự tại, có chỗ thiếu sót v.v... Vì đối với các tánh nhiễm ô của nghiệp thức, nên chơn như mới có vô số đức tánh thanh tịnh sai khác, như là:</p>
    <ul class="mb-6 list-disc pl-6 space-y-2">
      <li>Đại trí huệ quang minh</li>
      <li>Chiếu khắp cả pháp giới</li>
      <li>Chơn thật hay biết</li>
      <li>Tánh thanh tịnh</li>
      <li>Chơn thường, chơn lạc, chơn ngã, chơn tịnh</li>
      <li>Trong mát (thanh lương) không biến đổi (không sanh, lão, bịnh, tử) và tự tại v.v...</li>
    </ul>
    
    <p class="mb-4 font-semibold">Tóm lại, vì đối với nghiệp thức có các tướng nhiễm ô, nhiều hơn số cát sông Hằng, nên chơn như cũng có đủ các đức tánh thanh tịnh, nhiều hơn số cát sông Hằng.</p>
    <p class="mt-8 opacity-70 italic">Đã nói Thể lớn, Tướng lớn của chơn như rồi, tiếp đến bài thứ 11 sau đây, sẽ nói Dụng rộng lớn của Tâm chơn như.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Về mặt thời gian tồn tại, điểm chung giữa Chơn như và Vô minh là gì?",
    options: {
      a: "Cả hai đều tồn tại mãi mãi và không bao giờ kết thúc.",
      b: "Cả hai đều có khởi đầu rõ rệt từ một thời điểm nhất định.",
      c: "Cả hai đều hiện hữu từ vô thỉ (không có bắt đầu).",
      d: "Cả hai chỉ xuất hiện khi chúng sanh khởi tâm phân biệt.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Vô minh bị dứt hết khi thành Phật.",
      b: "Sai. Cả hai đều từ vô thỉ.",
      c: "Đúng. Chơn như và vô minh đồng một bản thể và đều đã có sẵn từ vô thỉ đến nay.",
      d: "Sai. Chúng có sẵn từ vô thỉ, trước khi có sự phân biệt của tâm thức.",
    },
  },
  {
    question: "Tại sao Vô minh được gọi là pháp 'hữu chung'?",
    options: {
      a: "Vì nó tự sinh tự diệt theo quy luật tự nhiên của vũ trụ.",
      b: "Vì khi thành Phật, vô minh sẽ bị tiêu diệt hoàn toàn.",
      c: "Vì nó chỉ tồn tại trong giai đoạn chúng sanh chưa biết đến Phật pháp.",
      d: "Vì bản thể của nó vốn không có thật nên sớm muộn cũng biến mất.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Vô minh không tự diệt mà cần sự tu hành (chơn như huân tập).",
      b: "Đúng. Vô minh hữu chung vì rốt sau nó bị chơn như (thanh tịnh) tiêu diệt khi hành giả thành Phật.",
      c: "Sai. Người biết Phật pháp vẫn còn vô minh cho đến khi chứng quả hoàn toàn.",
      d: "Sai. Lý do chính là nó bị diệt trừ bởi chơn như.",
    },
  },
  {
    question: "Trong ví dụ về trái hồng, giai đoạn trái hồng còn non với vị chát lấn át vị ngọt tương ứng với trạng thái nào?",
    options: {
      a: "Chơn như tại triền.",
      b: "Vô minh diệt tận.",
      c: "Pháp thân hiện hành.",
      d: "Chơn như vô triền.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Vị ngọt bị vị chát lấn át tương đương với 'Chơn như tại triền' (Chơn như bị vô minh che lấp, ràng buộc).",
      b: "Sai. Vô minh lúc này đang mạnh (vị chát).",
      c: "Sai. Pháp thân chưa hiện ra khi vô minh đang che lấp.",
      d: "Sai. Vô triền là khi đã thoát khỏi ràng buộc.",
    },
  },
  {
    question: "Ba đại nghĩa của Tâm được đề cập trong bài là gì?",
    options: {
      a: "Thể, Tướng và Dụng.",
      b: "Sanh, Trụ và Diệt.",
      c: "Nghiệp, Thức và Chơn như.",
      d: "Thể, Tánh và Tướng.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Bài học nói về ba đại nghĩa của Tâm Chơn như là: Thể rộng lớn, Tướng rộng lớn và Dụng rộng lớn.",
      b: "Sai. Đây là ba tướng hữu vi.",
      c: "Sai. Đây không phải ba đại nghĩa của Tâm.",
      d: "Sai. Tánh và Tướng thường được gộp chung, 'Dụng' mới là đại nghĩa thứ ba.",
    },
  },
  {
    question: "Tánh Chơn như được mô tả như thế nào về phương diện 'Tướng' rộng lớn?",
    options: {
      a: "Là một thực thể trống rỗng, không có bất kỳ đặc tính nào.",
      b: "Đầy đủ hằng sa công đức và các đức tánh thanh tịnh.",
      c: "Luôn thay đổi tùy theo nghiệp thức của chúng sanh.",
      d: "Có hình tướng rõ rệt, có thể phân biệt bằng giác quan.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Chơn như không trống rỗng mà đầy đủ công đức.",
      b: "Đúng. Tướng rộng lớn của tâm là có đủ hằng sa công đức, nhiều hơn số cát sông Hằng, không thiếu một công đức nào.",
      c: "Sai. Tánh Chơn như rốt ráo thường hằng, không biến đổi.",
      d: "Sai. Chơn như xa lìa các hình tướng sai biệt, vô phân biệt.",
    },
  },
  {
    question: "Trong bốn đức của Niết bàn, 'Chơn ngã' được giải thích như thế nào?",
    options: {
      a: "Không bị hai món sanh tử bức bách.",
      b: "Là sự hưởng lạc trong các tầng trời.",
      c: "Là tâm tánh thanh tịnh xa lìa ô nhiễm.",
      d: "Là cái tôi cá nhân tồn tại vĩnh viễn.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Chơn ngã' được định nghĩa là không bị hai món sanh tử (Phần đoạn và Biến dịch) bức bách, được hoàn toàn tự tại.",
      b: "Sai. Hưởng lạc tầng trời vẫn nằm trong sinh tử luân hồi.",
      c: "Sai. Đó là định nghĩa của 'Chơn tịnh'.",
      d: "Sai. Đạo Phật phá bỏ ngã chấp cá nhân, Chơn ngã ở đây chỉ sự tự tại của Pháp thân.",
    },
  },
  {
    question: "Tại sao Chơn như vốn bình đẳng và không có tướng sai khác, nhưng lại được nói là có 'đủ các đức tánh sai khác'?",
    options: {
      a: "Vì Chơn như cần có nhiều đức tính để cứu độ các loài chúng sanh khác nhau.",
      b: "Vì mỗi chúng sanh thấy một khía cạnh khác nhau của Chơn như.",
      c: "Căn cứ theo tướng sanh diệt của nghiệp thức mà nói có sai khác.",
      d: "Vì Chơn như tự phân chia thành nhiều phần khi hiện diện ở phàm phu.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Cứu độ chúng sanh thuộc về 'Dụng', còn đây đang giải thích về sự tồn tại của các đức tính (Tướng).",
      b: "Sai. Sự sai khác không phụ thuộc vào góc nhìn của chúng sanh.",
      c: "Đúng. Vì đối với các khía cạnh nhiễm ô của nghiệp thức sanh diệt, mà giả lập ra các Tướng (đức tánh thanh tịnh) sai khác tương ứng để đối lập.",
      d: "Sai. Chơn như là một vị, không phân chia.",
    },
  },
  {
    question: "Đức tánh 'Chiếu khắp cả pháp giới' của Chơn như được thiết lập để đối lập với khiếm khuyết nào của nghiệp thức?",
    options: {
      a: "Đối lập với sự vô thường, biến đổi liên tục.",
      b: "Đối lập với cái thấy hạn hẹp (có thấy nên có cái không thấy).",
      c: "Đối lập với sự vọng động, không đứng yên.",
      d: "Đối lập với sự khổ não và bức bách.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Vô thường đối lập với 'Chơn thường'.",
      b: "Đúng. Vì đối với nghiệp thức có thấy (nên sẽ có chỗ khuất lấp không thấy); trái lại Chơn như xa lìa các cái thấy (thấy bằng nhục nhãn), nên có khả năng chiếu khắp pháp giới không chướng ngại.",
      c: "Sai. Vọng động đối lập với 'Chơn thật hay biết'.",
      d: "Sai. Khổ não đối lập với 'Chơn lạc'.",
    },
  },
  {
    question: "Tại sao Chơn như còn được gọi là 'Như Lai tạng'?",
    options: {
      a: "Vì nó bao trùm và chứa đựng vô lượng hằng sa công đức thanh tịnh.",
      b: "Vì nó chỉ hiện ra khi hành giả đã đạt đến quả vị Như Lai.",
      c: "Vì nó là nơi cất giữ những kinh điển quý báu của Như Lai.",
      d: "Vì nó là tên gọi khác của trí huệ phân biệt ở bậc Thánh.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Chữ 'Tạng' nghĩa là chứa đựng. Vì tâm chơn như bao trùm vô lượng hằng sa công đức, không thiếu sót, nên gọi là Như Lai tạng.",
      b: "Sai. Như Lai tạng có sẵn trong mọi chúng sanh phàm phu.",
      c: "Sai. Kinh điển là văn tự, Như Lai tạng là bản thể tâm.",
      d: "Sai. Chơn như là Căn bản trí (vô phân biệt), không phải trí huệ phân biệt.",
    },
  },
  {
    question: "Theo văn bản, trạng thái 'Thanh lương' (trong mát) của Chơn như có nghĩa là gì?",
    options: {
      a: "Là một loại hào quang màu xanh mát tỏa ra từ Pháp thân.",
      b: "Là sự yên tĩnh tuyệt đối không có âm thanh.",
      c: "Là trạng thái vĩnh viễn xa lìa nhiệt não phiền não.",
      d: "Là cảm giác mát mẻ về mặt vật lý khi nhập định.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Thanh lương không phải là ánh sáng vật lý.",
      b: "Sai. Đây là tĩnh lặng về âm thanh, không phải ý nghĩa của thanh lương trong nội tâm.",
      c: "Đúng. Nghiệp thức chứa đựng sự 'nhiệt não' (nóng bức đau khổ do phiền não), trái lại Chơn như xa lìa phiền não nên có đức tính 'thanh lương' (trong mát).",
      d: "Sai. Thanh lương là trạng thái giải thoát của tâm, không phải cảm giác xúc chạm vật lý.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-10-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-10-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 10 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 12,
  createdAt: '2026-08-01',
  updatedAt: '2026-08-01',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10-phan-giai-thich-tiep-theo/B%E1%BA%A3n_Ch%E1%BA%A5t_C%E1%BB%A7a_T%C3%A2m.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-nghia-bat-giac-tiep-theo', label: 'Nói về nghĩa "Bất giác" (tiếp theo)' },
        { id: 'chon-nhu-vo-minh-thi-chung', label: '1. Chơn như và vô minh, thỉ và chung (tiếp theo)', indent: 1 },
        { id: 'chon-nhu-vo-thi-vo-chung', label: 'Chơn như vô thỉ vô chung', indent: 2 },
        { id: 'vo-minh-vo-thi-huu-chung', label: 'Vô minh vô thỉ hữu chung', indent: 2 },
        { id: 'ba-dai-nghia-cua-tam', label: 'm. Nói về 3 đại nghĩa của Tâm:' },
        { id: 'the-rong-lon', label: '1. Thể rộng lớn của Tâm (tánh bình đẳng không động)', indent: 1 },
        { id: 'tuong-rong-lon', label: '2. Tướng rộng lớn của Tâm (đủ hằng sa công đức)', indent: 1 },
        { id: 'dung-rong-lon', label: '3. Dụng rộng lớn của Tâm (có hằng sa diệu dụng, sẽ nói trong bài 11)', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10-phan-giai-thich-tiep-theo/Mahayana_Mind_Architecture.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/gwpXTvK4lBM',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/0C1gSSYRSfcrrYIkIktcqg',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài Thứ 10',
    passPercentage: 70,
    questions,
  },
}

export default lesson