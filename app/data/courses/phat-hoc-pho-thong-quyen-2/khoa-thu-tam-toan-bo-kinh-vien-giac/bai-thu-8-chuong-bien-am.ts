import type { Lesson, QuizQuestion } from '~/types/course'

const practiceMethods = [
  {
    title: 'Xa ma tha (tu Chỉ)',
    summary: 'Giữ tâm vắng lặng để dứt vọng niệm và an trú trong định.',
  },
  {
    title: 'Tam ma bát đề (tu Quán)',
    summary: 'Quán các pháp như huyễn để phát huệ và khởi năng lực hóa độ.',
  },
  {
    title: 'Thiền na (Chỉ, Quán song tu)',
    summary: 'Chỉ và Quán cùng vận hành, định huệ quân bình, không kẹt hai bên.',
  },
  {
    title: 'Trước Định, sau Huệ',
    summary: 'Lấy định làm nền rồi mở trí huệ quán chiếu.',
  },
  {
    title: 'Định rồi Định-Huệ đồng tu',
    summary: 'Từ an trụ bước sang chỗ vừa lặng vừa soi.',
  },
  {
    title: 'Định, rồi Huệ, rồi Định-Huệ song tu',
    summary: 'Trình tự tu dần từ Chỉ sang Quán rồi hợp nhất.',
  },
  {
    title: 'Định, rồi Định-Huệ song tu, rồi Huệ',
    summary: 'Định làm đầu, hợp nhất làm giữa, huệ làm cuối.',
  },
  {
    title: 'Định, sau Huệ và Định-Huệ song tu',
    summary: 'Từ định chuyển sang hai mặt quán chiếu và song tu.',
  },
  {
    title: 'Định và Huệ cùng tu, rồi sang song tu',
    summary: 'Hai mặt đồng khởi rồi quy về dung thông.',
  },
  {
    title: 'Định và song tu, rồi trở về Huệ',
    summary: 'Từ ổn định mà mở trí huệ quán chiếu.',
  },
  {
    title: 'Trước Huệ, sau Định',
    summary: 'Huệ dẫn đầu, rồi trở lại sự an trụ.',
  },
  {
    title: 'Huệ, rồi Định và Định-Huệ song tu',
    summary: 'Từ quán chiếu chuyển dần sang an định và dung hợp.',
  },
  {
    title: 'Huệ rồi riêng tu Định',
    summary: 'Quán trước, định sau để tâm càng sâu.',
  },
  {
    title: 'Huệ, rồi Định-Huệ đồng tu, sau Định',
    summary: 'Huệ mở cửa, song tu nâng lên, rồi lắng về định.',
  },
  {
    title: 'Huệ, rồi Định và Định-Huệ song tu',
    summary: 'Huệ làm nền, rồi các cửa khác tiếp nối.',
  },
  {
    title: 'Huệ và Định cùng tu, rồi vào Thiền na',
    summary: 'Định huệ dung thông để bước vào quân bình.',
  },
  {
    title: 'Huệ và Định-Huệ song tu, rồi tu Định',
    summary: 'Từ quán chiếu và song tu mà trở về an tịch.',
  },
  {
    title: 'Định-Huệ song tu, rồi tu Định',
    summary: 'Từ dung hợp quay về chỗ an trú sâu hơn.',
  },
  {
    title: 'Định-Huệ song tu, rồi tu Huệ',
    summary: 'Từ dung hợp lại phát sáng quán chiếu.',
  },
  {
    title: 'Định-Huệ song tu, rồi Định rồi Huệ',
    summary: 'Theo thứ lớp mà xoay qua xoay lại cho phù hợp.',
  },
  {
    title: 'Định-Huệ song tu, rồi Huệ rồi Định',
    summary: 'Tùy căn cơ mà đổi chiều trước sau.',
  },
  {
    title: 'Thiền na, rồi Định và Huệ',
    summary: 'Từ quân bình của song tu mà triển khai ra hai mặt.',
  },
  {
    title: 'Thiền na và Định, rồi Huệ',
    summary: 'Từ định huệ dung thông chuyển sang quán chiếu.',
  },
  {
    title: 'Thiền na và Huệ, rồi Định',
    summary: 'Từ quán và quân bình trở lại nơi an định.',
  },
  {
    title: 'Viên tu ba pháp',
    summary: 'Định, Quán, song tu cùng viên dung, không rời Viên giác.',
  },
] as const

const practiceMethodsHtml = practiceMethods
  .map(item => `
      <li>
        <strong>${item.title}</strong>: ${item.summary}
      </li>`)
  .join('\n')

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-bien-am" class="text-2xl font-bold text-primary-700 dark:text-primary-300">VIII. CHƯƠNG BIỆN ÂM</h2>

    <p>Chương này nối tiếp câu hỏi của Ngài Biện Âm Bồ tát: sau khi Phật chỉ bày ba pháp môn Chỉ, Quán và Chỉ Quán song tu, thì người học đạo phải nương vào đó như thế nào để đi vào Viên giác. Điểm cốt lõi của toàn chương là: Viên giác vốn không hai, nhưng phương tiện đi vào thì phải khéo tùy căn cơ mà mở ra nhiều cửa.</p>

    <h3 id="ngai-bien-am-bo-tat-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Biện Âm Bồ tát hỏi Phật</h3>
    <p>Ngài Biện Âm Bồ tát từ trong đại chúng đứng dậy, đảnh lễ rồi thưa hỏi Đức Phật rằng: ba pháp môn phương tiện mà Phật vừa dạy thật là hy hữu, nhưng nếu các vị Bồ tát muốn nhập Viên giác thì có mấy cách tu tập, nên nương theo thứ lớp hay vượt qua thứ lớp, và phải mở bày thế nào cho đại chúng hiện tại cùng chúng sanh đời sau đều hiểu rõ.</p>
    <p>Điều Ngài hỏi không phải là một câu hỏi thuần lý thuyết. Ngài hỏi thay cho người học đạo muốn biết đường đi cụ thể: làm sao sử dụng ba pháp môn ấy để khế hợp với căn cơ, không rơi vào chỗ chấp một phương tiện rồi quên mất đích đến.</p>
    <h4 id="luoc-giai-ngai-bien-am-bo-tat-hoi-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Biện Âm không hỏi để tăng thêm chữ nghĩa, mà để mở một lối đi thực hành. Câu hỏi của Ngài làm nổi rõ một điểm rất quan trọng: Viên giác là một vị, nhưng người vào đạo thì có sớm muộn, sâu cạn và cách tiếp cận khác nhau.</p>

    <h3 id="phat-khen-ngai-bien-am-bo-tat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Biện Âm Bồ tát</h3>
    <p>Đức Thế Tôn khen câu hỏi ấy là quý, vì nhờ đó mà đại chúng hiện tại và chúng sanh đời sau có được phương tiện rõ ràng để nương tu. Phật còn dặn phải chăm chú lắng nghe, vì pháp môn Viên giác rất sâu, chỉ có tâm lắng sạch và ngay thẳng mới tiếp nhận được.</p>
    <p>Việc khen trước rồi mới khai thị cho thấy chỗ hỏi đã chạm đúng gốc rễ. Khi biết hỏi đúng chỗ, người học đạo sẽ tránh được tình trạng học nhiều mà vẫn mờ đường, chỉ nhớ chữ mà quên lối tu.</p>
    <h4 id="luoc-giai-phat-khen-ngai-bien-am-bo-tat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật khen không phải để xã giao, mà để xác nhận rằng câu hỏi này mở đúng cửa. Người học đạo muốn tiến xa thì trước hết phải biết hỏi đúng điều cần hỏi, rồi mới nói đến công phu và kết quả.</p>

    <h3 id="phat-day-25-phap-tu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật dạy 25 pháp tu</h3>
    <p>Phật dạy rằng tánh Viên giác thanh tịnh vốn chẳng có pháp để tu và cũng chẳng có người tu. Tuy vậy, vì Bồ tát và chúng sanh chưa nhập được Viên giác nên phải mượn huyễn pháp làm phương tiện. Từ đó mà mở ra 25 cách tu, không phải 25 chân lý khác nhau, mà là 25 cửa khế cơ để đi về cùng một chỗ.</p>

    <h4 id="ba-phap-goc" class="text-lg font-semibold">3.1. Ba pháp gốc: Chỉ, Quán và Thiền na</h4>
    <p>Ba pháp môn nền tảng là:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Xa ma tha</strong>: tu Chỉ, giữ tâm vắng lặng để dứt vọng niệm.</li>
      <li><strong>Tam ma bát đề</strong>: tu Quán, thấy các pháp như huyễn để phát huệ.</li>
      <li><strong>Thiền na</strong>: Chỉ và Quán song tu, định huệ quân bình, không kẹt một bên.</li>
    </ul>
    <p>Đây là ba cửa căn bản. Từ ba cửa này, tùy căn cơ mà phát triển thành 25 cách xoay chuyển khác nhau.</p>

    <h4 id="hai-muoi-lam-cach-tu-theo-can-co" class="text-lg font-semibold">3.2. Hai mươi lăm cách tu theo căn cơ</h4>
    <p>Dù đi theo hướng nào, điểm chung vẫn là không rời Viên giác. Người hợp định thì lấy định làm đầu, người hợp huệ thì lấy huệ làm đầu, người hợp dung thông thì đi thẳng vào song tu. Các phương tiện dưới đây chỉ là những cách sắp xếp khác nhau của cùng một con đường.</p>
    <ol class="list-decimal space-y-3 pl-6">
${practiceMethodsHtml}
    </ol>
    <p class="mt-4">Tóm lại, 25 cách tu chỉ là những biến hóa của ba pháp gốc. Người học không nên chấp vào một trình tự cố định, mà phải thấy rõ căn cơ của mình để chọn cửa cho khế hợp.</p>
    <h4 id="luoc-giai-phat-day-25-phap-tu" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Điểm then chốt là không chấp pháp môn. Có người phải đi từ định sang huệ, có người phải đi từ huệ sang định, có người phải đi theo cách đan xen, và có người có thể viên dung cả ba pháp. Tất cả đều là phương tiện đưa về một mối Viên giác thanh tịnh.</p>

    <h3 id="tong-lai" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Tóm lại</h3>
    <p>Nếu các Bồ tát hiện tại và chúng sanh đời sau muốn thực hành 25 pháp môn này, kinh dạy phải giữ giới thanh tịnh, tâm suy nghĩ vắng lặng, thành tâm sám hối trong 21 ngày, rồi viết tên 25 pháp môn vào giấy, niêm lại, đặt trên bàn Phật và chí tâm cầu thỉnh. Sau đó rút một thẻ để tự biết căn cơ mình hợp với cửa nào mà tu.</p>
    <p>Phương tiện này nhằm soi rõ căn cơ, chứ không phải để cầu may. Điều quan trọng nhất vẫn là tâm phải thật thanh tịnh và không được khởi một niệm nghi ngờ.</p>
    <h4 id="luoc-giai-tong-lai" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đây là cách kinh chỉ cho người học đạo biết tự lượng sức mình. Có người đốn ngộ, có người phải tiệm tu, nhưng dù đốn hay tiệm thì cũng đều phải thật tâm và không nghi ngờ mới thành tựu.</p>

    <h3 id="phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Phật nói bài kệ tóm lại các nghĩa trên</h3>
    <p>Đức Phật dùng kệ để gom lại toàn bộ ý chính của chương này: trí huệ thanh tịnh của Bồ tát đều nương Thiền định mà sanh; ba cửa Chỉ, Quán và Chỉ Quán song tu là gốc; từ đó tùy căn cơ mà thành 25 pháp môn; chư Phật mười phương và hành giả ba đời đều nương vào đó mà thành đạo.</p>
    <div class="space-y-1 italic">
      <p>Biện Âm! Ông nên biết:</p>
      <p>Trí huệ thanh tịnh của Bồ tát</p>
      <p>Đều nương nơi Thiền định mà sanh</p>
      <p>Chỉ, Quán và Chỉ Quán song tu</p>
      <p>Là ba cửa căn bản</p>
      <p>Tùy căn cơ mà mở thành hai mươi lăm pháp</p>
      <p>Mười phương chư Phật và hành giả ba đời</p>
      <p>Đều nương pháp môn này mà thành đạo</p>
      <p>Chỉ người đã đốn ngộ</p>
      <p>Và người không tin</p>
      <p>Mới không đi con đường ấy</p>
      <p>Còn Bồ tát và chúng sanh đời sau</p>
      <p>Phải y theo đây mà tu</p>
      <p>Nhờ đại bi của Phật, các ông siêng thực hành</p>
      <p>Sẽ mau chứng Niết bàn</p>
    </div>
    <h4 id="luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bài kệ chốt lại ba ý: thiền định là gốc của trí huệ thanh tịnh, 25 pháp chỉ là những phương tiện khế cơ, và người học đạo phải biết nương pháp mà đi nhưng không chấp vào pháp. Khi không nghi ngờ và biết tùy căn cơ, con đường Viên giác sẽ trở nên sáng rõ.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Ngài Biện Âm Bồ tát thưa hỏi Đức Phật điều gì là trọng tâm của chương này?',
    options: {
      a: 'Ai là vị Bồ tát kế tiếp sẽ thuyết pháp.',
      b: 'Có bao nhiêu cách tu tập để đi vào Viên giác từ ba pháp môn.',
      c: 'Cách cầu thần thông để cứu độ chúng sanh.',
      d: 'Cách xây dựng một đạo tràng thật lớn.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Chương này không bàn về thứ tự thuyết pháp của các vị Bồ tát.',
      b: 'Đúng. Ngài hỏi Phật về các cách tu tập của ba pháp môn phương tiện để nhập Viên giác.',
      c: 'Sai. Ngài không thưa hỏi về thần thông.',
      d: 'Sai. Không có nội dung nào về việc xây dựng đạo tràng.',
    },
  },
  {
    question: 'Vì sao Đức Phật chia các phương tiện tu thành 25 cách?',
    options: {
      a: 'Vì đó là một con số cố định bắt buộc cho mọi người.',
      b: 'Vì có 25 loại phiền não khác nhau.',
      c: 'Vì phải hợp với 25 cõi giới riêng biệt.',
      d: 'Vì căn cơ và trình độ của chúng sanh khác nhau.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Con số 25 ở đây là phương tiện, không phải nghi thức cố định.',
      b: 'Sai. Kinh không nói 25 pháp ứng với 25 phiền não.',
      c: 'Sai. Việc chia pháp môn không dựa trên 25 cõi giới.',
      d: 'Đúng. Phật chia thành nhiều cách để khế hợp căn cơ khác nhau của chúng sanh.',
    },
  },
  {
    question: 'Trong chương này, Xa ma tha nhấn mạnh điều gì?',
    options: {
      a: 'Quán các pháp như huyễn để phát trí huệ.',
      b: 'Giữ tâm vắng lặng để dứt vọng niệm và an trú trong định.',
      c: 'Biến cõi uế thành Tịnh độ bằng thần thông.',
      d: 'Tùy duyên hóa hiện để làm lợi ích hữu tình.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đó là ý nghĩa gần với Tam ma bát đề.',
      b: 'Đúng. Xa ma tha là pháp Chỉ, lấy sự vắng lặng làm nền.',
      c: 'Sai. Nội dung này không phải trọng tâm của Xa ma tha.',
      d: 'Sai. Đây không phải cách mô tả chính của pháp Chỉ.',
    },
  },
  {
    question: 'Tam ma bát đề được hiểu như thế nào?',
    options: {
      a: 'Pháp Chỉ thuần túy, chỉ giữ tâm yên tĩnh.',
      b: 'Pháp Quán như huyễn, dùng trí chiếu soi để phát huệ.',
      c: 'Pháp chỉ dành cho người đã thành Phật.',
      d: 'Pháp bỏ hết mọi thứ tu hành khác.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Chỉ thuần túy là Xa ma tha.',
      b: 'Đúng. Tam ma bát đề tương ưng với Quán như huyễn.',
      c: 'Sai. Pháp này là phương tiện tu học cho Bồ tát và người học đạo.',
      d: 'Sai. Pháp này không loại bỏ các phương tiện khác.',
    },
  },
  {
    question: 'Thiền na được hiểu như thế nào?',
    options: {
      a: 'Chỉ và Quán song tu, định huệ quân bình.',
      b: 'Chỉ riêng cho người sơ cơ.',
      c: 'Chỉ là ngồi thật lâu không cử động.',
      d: 'Quán phá bỏ tất cả hình tướng bên ngoài.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Thiền na là chỗ Chỉ và Quán cùng tu, không chấp vào một bên.',
      b: 'Sai. Thiền na không phải chỉ dành cho sơ cơ.',
      c: 'Sai. Ngồi lâu không phải là định nghĩa của Thiền na.',
      d: 'Sai. Nội dung này thuộc về Quán, không phải toàn bộ Thiền na.',
    },
  },
  {
    question: 'Trước khi rút thăm pháp môn, hành giả cần làm gì?',
    options: {
      a: 'Thuộc lòng toàn bộ 25 pháp môn.',
      b: 'Giữ giới thanh tịnh, tâm vắng lặng và 21 ngày sám hối.',
      c: 'Xuất gia trước rồi mới được thử.',
      d: 'Phải có thần thông để tự biết căn cơ.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Kinh không đòi hỏi phải thuộc lòng rồi mới rút thăm.',
      b: 'Đúng. Đây là điều kiện kinh dạy trước khi cầu biết pháp môn hợp cơ.',
      c: 'Sai. Xuất gia không phải điều kiện được nêu ở đây.',
      d: 'Sai. Phương tiện này không dựa trên thần thông.',
    },
  },
  {
    question: 'Theo bài kệ, trí huệ thanh tịnh của Bồ tát do đâu sanh?',
    options: {
      a: 'Do đọc nhiều kinh điển.',
      b: 'Do Thiền định.',
      c: 'Do cầu phước báo lớn.',
      d: 'Do tranh luận nhiều với người khác.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đọc nhiều chỉ là trợ duyên, không phải gốc được nhấn mạnh ở đây.',
      b: 'Đúng. Bài kệ nói rõ trí huệ thanh tịnh của Bồ tát đều nương nơi Thiền định mà sanh.',
      c: 'Sai. Phước báo không phải là trọng tâm của bài kệ.',
      d: 'Sai. Tranh luận không phải là nguồn sanh trí huệ được nói đến.',
    },
  },
  {
    question: 'Ai không theo pháp môn này?',
    options: {
      a: 'Người có lòng tin và người tinh tấn.',
      b: 'Người chỉ tu định mà không cần huệ.',
      c: 'Người đốn ngộ và người không tin.',
      d: 'Người mới phát tâm xuất gia.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hai nhóm này vẫn có thể nương pháp môn mà tu.',
      b: 'Sai. Chỉ tu định là chưa đủ, nhưng không phải nhóm bị loại trừ trong bài kệ.',
      c: 'Đúng. Bài kệ nêu rõ chỉ người đốn ngộ và người không tin mới chẳng theo pháp này.',
      d: 'Sai. Người mới phát tâm vẫn có thể học theo pháp môn này.',
    },
  },
  {
    question: 'Ý nghĩa của “tự tánh vô tác” là gì?',
    options: {
      a: 'Tự tánh phải tạo mới có.',
      b: 'Tự tánh sẵn có, không do tạo tác mà thành.',
      c: 'Tự tánh là một năng lực bí mật chỉ người đặc biệt mới có.',
      d: 'Tự tánh chỉ có trong chùa và không ở đời thường.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Nếu phải tạo mới có thì không còn gọi là tự tánh.',
      b: 'Đúng. Tự tánh vô tác nghĩa là sẵn có, không do tạo tác mà thành.',
      c: 'Sai. Kinh không giải thích như một năng lực bí mật riêng biệt.',
      d: 'Sai. Tự tánh không bị giới hạn trong không gian như vậy.',
    },
  },
  {
    question: 'Điều cốt lõi của 25 pháp tu là gì?',
    options: {
      a: 'Giữ chặt một pháp cố định cho mọi người.',
      b: 'Xoay chuyển theo căn cơ nhưng không rời Viên giác.',
      c: 'Chỉ tu thiền định mà bỏ quán chiếu.',
      d: 'Chỉ tu quán tưởng mà không cần an định.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Bài kinh không chủ trương cố định một pháp cho tất cả.',
      b: 'Đúng. 25 pháp là các phương tiện khế cơ, nhưng đều quy về Viên giác.',
      c: 'Sai. Chỉ tu định là thiếu một bên.',
      d: 'Sai. Chỉ tu quán cũng chưa đủ, phải biết khế hợp căn cơ.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-8-chuong-bien-am',
  slug: 'bai-thu-8-chuong-bien-am',
  title: 'Bài Thứ 8 - Chương Biện Âm',
  type: 'article',
  status: 'published',
  order: 11,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-8-chuong-bien-am/25_Ph%C3%A1p_Tu_Vi%C3%AAn_Gi%C3%A1c.png',
      readingContent,
      tableOfContents: [
        {
          id: 'chuong-bien-am',
          label: 'VIII. CHƯƠNG BIỆN ÂM',
        },
        {
          id: 'ngai-bien-am-bo-tat-hoi-phat',
          label: '1. Ngài Biện Âm Bồ tát hỏi Phật',
          indent: 1,
        },
        {
          id: 'luoc-giai-ngai-bien-am-bo-tat-hoi-phat',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'phat-khen-ngai-bien-am-bo-tat',
          label: '2. Phật khen Ngài Biện Âm Bồ tát',
          indent: 1,
        },
        {
          id: 'luoc-giai-phat-khen-ngai-bien-am-bo-tat',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'phat-day-25-phap-tu',
          label: '3. Phật dạy 25 pháp tu',
          indent: 1,
        },
        {
          id: 'ba-phap-goc',
          label: '3.1. Ba pháp gốc: Chỉ, Quán và Thiền na',
          indent: 2,
        },
        {
          id: 'hai-muoi-lam-cach-tu-theo-can-co',
          label: '3.2. Hai mươi lăm cách tu theo căn cơ',
          indent: 2,
        },
        {
          id: 'luoc-giai-phat-day-25-phap-tu',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'tong-lai',
          label: '4. Tóm lại',
          indent: 1,
        },
        {
          id: 'luoc-giai-tong-lai',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'phat-noi-bai-ke-tom-lai-cac-nghia-tren',
          label: '5. Phật nói bài kệ tóm lại các nghĩa trên',
          indent: 1,
        },
        {
          id: 'luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-8-chuong-bien-am/Architecture_of_Awakening.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/3L9ZEUXVCPE',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/1Dg8cDl1NKpm0ExcVeJnwe?utm_source=generator&si=1288783302294ddc',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Biện Âm',
    passPercentage: 70,
    questions,
  },
}

export default lesson
