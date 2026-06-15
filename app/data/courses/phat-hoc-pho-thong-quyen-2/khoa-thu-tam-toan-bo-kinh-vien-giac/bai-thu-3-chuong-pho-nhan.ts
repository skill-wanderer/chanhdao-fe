import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-pho-nhan" class="text-2xl font-bold text-primary-700 dark:text-primary-300">III. CHƯƠNG PHỔ NHÃN</h2>

    <p>Chương này là một bản đồ thực hành rất rõ: từ chánh niệm, giới luật và hoàn cảnh yên ổn, đi qua quán thân như huyễn, quán tâm như huyễn, rồi đi đến chỗ huyễn tận thì chân hiện. Sơ đồ <em>Lộ trình tu Viên Giác</em> giúp ta thấy toàn bộ con đường ấy một cách mạch lạc: không chỉ hiểu lý, mà còn biết bắt đầu từ đâu và đi tiếp như thế nào.</p>

    <h3 id="ngai-pho-nhan-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Phổ Nhãn hỏi Phật</h3>
    <p>Ngài Phổ Nhãn Bồ Tát thấy rằng sau khi nghe chương của Ngài Phổ Hiền, nếu chỉ nói đến cảnh giới “ly huyễn” mà không chỉ ra phương tiện hạ thủ, thì hàng sơ học và chúng sanh đời sau rất dễ lúng túng. Vì vậy Ngài thưa hỏi Phật: phải tu thế nào, phải suy nghĩ thế nào, phải an trụ và giữ gìn thế nào để ngộ nhập Viên Giác?</p>
    <p>Câu hỏi này chứa đủ hai mặt: <strong>tư huệ</strong> để hiểu đúng, và <strong>tu huệ</strong> để thực hành đúng. Đây là điểm khởi đầu rất thực tế của cả chương.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ngài Phổ Nhãn không phủ nhận pháp môn cao sâu, mà xin thêm chiếc cầu để người căn cơ chưa thuần vẫn có đường bước vào.</p>

    <h3 id="phat-khen-ngai-pho-nhan" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Phổ Nhãn</h3>
    <p>Đức Thế Tôn khen câu hỏi ấy là quý giá, vì nó không chỉ lợi ích cho hàng Bồ Tát hiện tại mà còn cho tất cả chúng sanh đời sau. Sau lời khen, Phật dặn mọi người phải chăm chú lắng nghe, vì cảnh giới Viên Giác là cảnh giới thanh tịnh, không thể dùng tâm tán loạn mà hiểu được.</p>
    <p>Trong phần này, điều quan trọng là thái độ học pháp: kính cẩn, lắng nghe, và không vội đem tâm phân biệt thông thường để đo lường chân lý rốt ráo.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật trước khen ngợi rồi mới khai thị, để cho người nghe biết rằng đây là pháp môn cần tâm chuyên chú, không phải điều có thể hiểu bằng sự bàn luận hời hợt.</p>

    <h3 id="phat-day-phuong-tien-tu-hanh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật dạy phương tiện tu hành</h3>
    <p>Đức Phật dạy người sơ học phải đặt nền tảng trước: y theo pháp “chỉ” của Như Lai, giữ gìn giới cấm kiên cố, sắp xếp đồ chúng và hoàn cảnh cho yên ổn, rồi ở nơi thanh vắng mà tu. Nói gọn lại, muốn hạ thủ công phu thì trước hết phải có chánh niệm, có giới, có định nền.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Giữ giới để tâm không tán loạn vì nghiệp cũ.</li>
      <li>An trú hoàn cảnh thích hợp để ít duyên động.</li>
      <li>Ở chỗ thanh vắng để việc quán chiếu dễ sâu.</li>
      <li>Nuôi chánh niệm để không chạy theo vọng tưởng.</li>
    </ul>
    <p>Phương tiện ở đây không phải là điều phụ thêm, mà chính là chiếc cầu để từ hiểu biết đi vào thực chứng.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đây là chỗ rất thực tế: muốn đi sâu vào Viên Giác thì không thể bỏ qua giới, định, huệ và hoàn cảnh yên ổn; nếu không, tâm rất khó đứng yên để soi thấy huyễn.</p>

    <h3 id="quan-than-nhu-huyen" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Quán thân như huyễn</h3>
    <p>Thân này do đất, nước, gió, lửa hòa hợp mà thành. Da thịt, gân xương, máu mủ, hơi thở, nhịp đập và mọi chuyển động đều là kết quả của nhiều duyên tạm thời tụ lại. Khi bốn đại tan rã, cái được gọi là “thân” cũng tan rã theo, không có một chủ thể cố định nào đứng sau nó.</p>
    <p>Quán thân như huyễn không phải là ghét thân, mà là thấy rõ thân không phải “ta” thật có. Nhờ vậy ta bớt chấp ngã, bớt vì thân mà tạo nghiệp, và bớt bị thân kéo đi trong luân hồi.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Thân huyễn là bước quán đầu tiên để tháo chấp ngã. Khi biết thân chỉ là duyên hợp, hành giả không còn lấy nó làm trung tâm tuyệt đối nữa.</p>

    <h3 id="quan-tam-nhu-huyen" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Quán tâm như huyễn</h3>
    <p>Đi sâu hơn nữa, Phật chỉ ra rằng cái gọi là vọng tâm cũng không có tự thể độc lập. Nó nương theo sáu trần mà khởi phân biệt, gom bóng dáng của cảnh bên ngoài thành cảm giác “tôi đang nghĩ”, “tôi đang biết”, rồi lầm nhận đó là chính mình.</p>
    <p>Khi sáu trần vắng mặt, vọng tâm không còn gì để bám. Vì vậy, tâm phân biệt này cũng chỉ là huyễn, chứ không phải một linh hồn thường hằng, độc lập và bất biến.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Quán thân như huyễn mới chỉ phá được lớp chấp thô; quán tâm như huyễn đi sâu hơn, phá luôn ý niệm về một cái “ta” biết và nghĩ như một thực thể riêng biệt.</p>

    <h3 id="huyen-het-thi-chan-hien" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Huyễn hết thì chân hiện</h3>
    <p>Đường tu ở đây là một tiến trình diệt trừ tuần tự: huyễn thân diệt, huyễn tâm diệt, huyễn trần diệt, huyễn trí diệt, rồi phi huyễn mới hiện. Khi cả năng lẫn sở đều tan, ngay cả cái biết cũng phải buông, thì tánh Viên Giác mới tự hiển lộ.</p>
    <p>Ví như lau gương sạch bụi: ánh sáng không được tạo thêm, chỉ là nó vốn có mà bị che. Khi bụi sạch, gương sáng tự hiện. Cũng vậy, khi huyễn hết, chân không sinh thêm, mà chỉ hiện ra cái vốn sẵn.</p>

    <ul class="list-disc space-y-2 pl-6">
      <li>Huyễn thân diệt.</li>
      <li>Huyễn tâm diệt.</li>
      <li>Huyễn trần diệt.</li>
      <li>Huyễn trí diệt.</li>
      <li>Phi huyễn hiện.</li>
    </ul>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Không những cảnh phải buông, mà cái biết về cảnh cũng phải buông. Đó là điểm khiến con đường này đi đến tận chỗ rốt ráo.</p>

    <h3 id="ngoc-ma-ni-du-tanh-vien-giac" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Ngọc Ma-ni dụ tánh Viên Giác</h3>
    <p>Phật dùng ngọc Ma-ni trong suốt có thể hiện ra năm màu theo các phương để dụ cho tánh Viên Giác. Năm màu không phải là bản tính của ngọc; cũng thế, các thân tâm, ngũ uẩn và muôn sai biệt hiện ra không phải là tự thể của Viên Giác, mà chỉ là ứng hiện tùy duyên.</p>
    <p>Ví dụ này giúp ta thấy rõ sự khác biệt giữa <em>diệu hữu</em> và <em>chấp thật</em>: hiện tượng có thể muôn hình vạn trạng, nhưng bản thể vẫn bình đẳng, thanh tịnh và không động.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ngọc Ma-ni không mất khi hiện màu, Viên Giác cũng không mất khi hiện thân tâm. Nắm được điểm này thì không còn lầm các hiện tượng biến hóa là thực thể cố định.</p>

    <h3 id="phap-gioi-binh-dang" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">8. Pháp giới bình đẳng</h3>
    <p>Vì tánh Viên Giác viên mãn khắp pháp giới, nên căn, trần, đại và cả các pháp môn Đà-la-ni đều bình đẳng, không hoại diệt, không lộn xộn lấn nhau. Nói “thế gian tướng thường trụ” là nói trên bình diện bản thể, chứ không phải chấp vào hình tướng đang đổi thay.</p>
    <p>Cho nên khi thấy được tánh bình đẳng ấy, Bồ Tát không còn khinh người trì giới, không ghét người phạm giới, không chấp mới cũ, không kẹt sạch dơ, và cũng không trụ vào hơn thua của thế gian.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chỗ thấy bình đẳng này không dẫn tới vô cảm, mà dẫn tới cái nhìn không còn thiên lệch. Thấy tất cả đều trong Viên Giác thì tự nhiên tâm phân biệt lắng xuống.</p>

    <h3 id="tu-va-chung-khong-that-co" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">9. Tu mà không tu, chứng mà không chứng</h3>
    <p>Thật ra Viên Giác vốn sẵn có. Công phu tu tập không phải để tạo ra một cái mới, mà để tháo bỏ lớp vô minh đang che phủ. Vì thế, trên mặt phương tiện vẫn phải tinh tấn, nhưng trên mặt rốt ráo thì không có một cái “ta” riêng biệt nào đang tu, cũng không có một pháp thật thể nào để nắm giữ gọi là chứng đắc.</p>
    <p>Ví như mây tan thì trăng hiện. Trăng vốn ở đó, không phải nhờ mây mà có; nhưng nếu không dọn mây thì trăng không hiện. Cho nên tu là có thật ở mặt ứng dụng, nhưng chỗ rốt ráo thì “tu” và “chứng” đều không thể chấp thực.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Nói “không tu không chứng” không phải để phủ nhận hành trì, mà để phá chấp. Nếu không có công phu ban đầu thì vô minh vẫn còn; nếu chấp công phu là thật, lại rơi vào một lớp chấp khác.</p>

    <h3 id="loi-ke-tong-ket" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">10. Lời kệ tổng kết</h3>
    <p>Phật dùng bài kệ để gom hết tinh thần của chương này: các pháp huyễn từ vô minh sanh, nên dùng trí Viên Giác để phá huyễn; huyễn hết thì sáng suốt hiện khắp mười phương, bình đẳng không động. Bồ Tát và chúng sanh đời sau muốn vào Phật đạo thì phải đi đúng con đường ấy.</p>
    <div class="space-y-1 italic">
      <p>Thân tâm đều là huyễn,</p>
      <p>Biết huyễn liền xa lìa.</p>
      <p>Huyễn hết thì chân hiện,</p>
      <p>Viên Giác sáng mười phương.</p>
      <p>Bồ Tát y nơi đó,</p>
      <p>Chúng sanh cũng nương theo.</p>
      <p>Đường vào Phật đạo lớn,</p>
      <p>Không rời chánh niệm đầu.</p>
    </div>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bài kệ không thêm nghĩa mới, mà chỉ nhấn mạnh lại: nhìn rõ huyễn, buông huyễn, rồi chân hiện. Đó chính là lộ trình Viên Giác của toàn chương.</p>

    <h3 id="luu-y-cuoi-bai" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">11. Lưu ý cuối bài</h3>
    <p>“Huyễn” không có nghĩa là phủ nhận nhân quả hay bỏ giới định huệ. Trái lại, vì thấy huyễn nên hành giả càng phải giữ giới, nuôi chánh niệm, an trú đúng chỗ và tiếp tục tu cho đến khi huyễn tận thì chân hiện.</p>
    <p>Nếu hiểu sai “huyễn” thành buông xuôi, ta sẽ đánh mất chiếc cầu đi vào Viên Giác. Nếu hiểu đúng, ta sẽ biết dùng phương tiện để vượt phương tiện, rồi đi đến chỗ rốt ráo không còn mắc kẹt.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Tại sao Ngài Phổ Nhãn lại cầu xin Phật chỉ dạy các phương tiện và thứ lớp tu hành sau khi đã nghe chương của Ngài Phổ Hiền?',
    options: {
      a: 'Vì Ngài thấy pháp môn Viên Đốn chỉ dành cho người trình độ cao, còn kẻ căn cơ thấp khó mà hạ thủ công phu.',
      b: 'Vì Ngài muốn nhấn mạnh rằng tu hành nhất thiết phải trải qua nhiều kiếp mới đạt kết quả.',
      c: 'Vì Ngài chưa hiểu rõ thế nào là tánh Viên Giác thanh tịnh của Như Lai.',
      d: 'Vì Ngài muốn bác bỏ lời dạy về pháp ly huyễn của Ngài Phổ Hiền là không thực tế.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Ngài Phổ Nhãn thấy pháp môn Viên Đốn rất cao, nên xin thêm phương tiện và thứ lớp để người căn cơ thấp vẫn có thể hạ thủ công phu.',
      b: 'Sai. Mục đích của Ngài là xin phương tiện cho người chưa ngộ, không phải nhấn mạnh chuyện nhiều kiếp.',
      c: 'Sai. Ngài hỏi để giúp người khác nương theo mà tu, không phải vì bản thân không hiểu.',
      d: 'Sai. Ngài không bác bỏ lời dạy của Ngài Phổ Hiền, mà xin thêm đường vào cho người sơ cơ.',
    },
  },
  {
    question: 'Trong phương pháp tu hành được Phật dạy ở chương này, bước nào dưới đây là cần thiết khi bắt đầu hạ thủ công phu?',
    options: {
      a: 'Tập trung vào việc tranh luận về lý tánh tuyệt đối để xóa bỏ mọi ranh giới.',
      b: 'Ngay lập tức từ bỏ mọi hoạt động đời thường để vào rừng sâu.',
      c: 'Chỉ cần quán tưởng Tâm là đủ, không cần quan tâm đến hình thể hay giới luật.',
      d: 'Giữ gìn giới cấm kiên cố và sắp xếp hoàn cảnh xung quanh cho thuận tiện.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Phật không dạy tranh luận lý thuyết khi mới bắt đầu hạ thủ công phu.',
      b: 'Sai. Phật dạy ở chỗ thanh vắng, nhưng không bắt buộc phải rời bỏ hết đời sống ngay lập tức.',
      c: 'Sai. Dù rốt ráo không chấp thân tướng, nhưng khi hành trì vẫn không thể bỏ qua giới và sự tu tập.',
      d: 'Đúng. Người sơ học trước hết phải nương giới, định, và hoàn cảnh yên ổn để tâm dễ an trụ.',
    },
  },
  {
    question: "Trong phép quán 'Thân như huyễn', những thành phần nào của cơ thể được phân loại thuộc về đại 'Gió' (Phong)?",
    options: {
      a: 'Nhiệt độ cơ thể và các quá trình chuyển hóa năng lượng.',
      b: 'Phổi hô hấp, tim đập, mạch nhảy và các chuyển động trong người.',
      c: 'Máu, mủ, nước mắt và mồ hôi.',
      d: 'Da, thịt, gân, xương và tủy não.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Nhiệt độ trong người được xếp vào đại Lửa.',
      b: 'Đúng. Phổi hô hấp, tim đập, mạch nhảy và các chuyển động trong người thuộc về đại Gió.',
      c: 'Sai. Máu, mủ, nước mắt và mồ hôi thuộc về đại Nước.',
      d: 'Sai. Da, thịt, gân, xương và tủy não thuộc về đại Đất.',
    },
  },
  {
    question: "Theo lời Phật dạy, bản chất của cái được gọi là 'Tâm' (vọng tâm) là gì?",
    options: {
      a: 'Các vọng tưởng phân biệt tích tụ dựa trên bóng dáng của sáu trần.',
      b: 'Một thực thể tồn tại độc lập ngay cả khi sáu trần không hiện diện.',
      c: 'Nguồn gốc duy nhất tạo ra bốn đại (đất, nước, gió, lửa).',
      d: 'Một linh hồn bất tử, không thay đổi từ kiếp này sang kiếp khác.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Vọng tâm chỉ là các vọng tưởng phân biệt tích tụ trong thân, nương bóng dáng của sáu trần mà giả lập thành “tâm”.',
      b: 'Sai. Nếu không có trần cảnh thì vọng tâm cũng không còn cái gì để phân biệt.',
      c: 'Sai. Bốn đại là duyên hòa hợp tạo nên thân giả tạm, không phải do vọng tâm sanh ra.',
      d: 'Sai. Vọng tâm là hư vọng, không phải linh hồn bất tử.',
    },
  },
  {
    question: "Quá trình 'Huyễn hết thì Chân hiện' được mô tả qua bao nhiêu lớp diệt trừ?",
    options: {
      a: '4 lớp: Thân, Tâm, Cảnh và Pháp đều đồng thời biến mất.',
      b: '2 lớp: Diệt cái sai và giữ lấy cái đúng.',
      c: '3 lớp: Chỉ cần diệt Thân, Tâm và Trần cảnh là đạt đạo.',
      d: '5 lớp: Huyễn Thân diệt, Huyễn Tâm diệt, Huyễn Trần diệt, Huyễn Trí diệt và Phi Huyễn hiện.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Quá trình diệt trừ huyễn được mô tả theo từng lớp tuần tự.',
      b: 'Sai. Pháp đối trị và trí đối trị cũng phải diệt.',
      c: 'Sai. Diệt Thân, Tâm, Cảnh chưa đủ, còn phải diệt luôn cả Trí.',
      d: 'Đúng. Lộ trình là Huyễn Thân, Huyễn Tâm, Huyễn Trần, Huyễn Trí diệt thì Phi Huyễn mới hiện.',
    },
  },
  {
    question: 'Hình ảnh ngọc Ma-ni chiếu hiện ngũ sắc được dùng để ẩn dụ cho điều gì?',
    options: {
      a: 'Sự quý giá của giáo pháp Phật giáo so với các tôn giáo khác.',
      b: 'Ngũ uẩn là thành phần thực có cấu tạo nên tánh Viên Giác.',
      c: 'Tánh Viên Giác tùy theo nghiệp mà ứng hiện ra các thân tâm (ngũ uẩn) khác nhau.',
      d: 'Khả năng thần thông của Bồ Tát có thể biến hóa ra nhiều màu sắc.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Ngọc Ma-ni không được dùng để so sánh giáo pháp.',
      b: 'Sai. Trong tánh Viên Giác thanh tịnh vốn không có ngũ uẩn, sự thấy có ngũ uẩn chỉ là do chúng sanh vọng thấy.',
      c: 'Đúng. Ngọc Ma-ni trong suốt tùy phương chiếu ra năm màu, giống như tánh Viên Giác tùy nghiệp mà hiện các thân tâm khác nhau.',
      d: 'Sai. Ẩn dụ này nói về sự huyễn hiện của chúng sanh, không phải thần thông của Bồ Tát.',
    },
  },
  {
    question: 'Theo văn bản, tại sao nói "Thế gian tướng thường trụ" và các pháp không hoại diệt?',
    options: {
      a: 'Vì thế giới vật chất tồn tại vĩnh cửu bất chấp sự quan sát của con người.',
      b: 'Vì con người không đủ khả năng để tiêu hủy các pháp giới.',
      c: 'Vì bản thể của chúng là tánh Viên Giác mầu nhiệm, viên mãn và không hoại diệt.',
      d: 'Vì các pháp luôn luôn thay đổi nên sự thay đổi đó là thường trụ.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Thế giới vật chất hiện tượng không tồn tại vĩnh cửu.',
      b: 'Sai. Việc pháp không hoại diệt không liên quan đến khả năng tiêu hủy của con người.',
      c: 'Đúng. Vì bản thể của mọi pháp chính là tánh Viên Giác mầu nhiệm, viên mãn và không hoại diệt.',
      d: 'Sai. “Thường trụ” ở đây nói về bản thể thanh tịnh không lộn xộn, không phải nói về sự thay đổi.',
    },
  },
  {
    question: 'Khi đã chứng được tánh Viên Giác, thái độ của Bồ Tát đối với người trì giới và người phạm giới như thế nào?',
    options: {
      a: 'Bình đẳng, không kính người trì giới, không ghét người phạm giới.',
      b: 'Tách biệt hoàn toàn khỏi thế gian để không phải gặp người phạm giới.',
      c: 'Tôn trọng người trì giới để làm gương và phê phán người phạm giới.',
      d: 'Chỉ quan tâm đến người tu lâu và khinh thường người mới học.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Bồ Tát thấy tất cả đều bình đẳng trong Viên Giác nên không còn phân biệt khinh-ghét.',
      b: 'Sai. Thái độ của Bồ Tát là bình đẳng trùm khắp, không phải trốn tránh thế gian.',
      c: 'Sai. Bồ Tát đã vượt khỏi tâm thương ghét và phán xét.',
      d: 'Sai. Bồ Tát không tôn trọng người tu lâu để khinh người mới học.',
    },
  },
  {
    question: 'Tại sao Phật dạy rằng "Tu và chứng mà thật ra không có tu và chứng"?',
    options: {
      a: 'Vì tu hành chỉ là một hình thức giải trí tinh thần không mang lại kết quả thực tế.',
      b: 'Vì các quả vị Phật chỉ là những danh xưng giả tạm không có thật.',
      c: 'Vì mọi nỗ lực của con người đều vô ích trước định mệnh của tạo hóa.',
      d: 'Vì tánh Viên Giác vốn đã sẵn có và hoàn thiện từ xưa, việc tu chỉ là loại bỏ vô minh che phủ.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tu hành thực sự giúp chúng sanh phá bỏ vô minh để trở về với bản giác.',
      b: 'Sai. Quả Phật là sự thành tựu cứu cánh khi xua tan mây mờ vô minh.',
      c: 'Sai. Đạo Phật không chủ trương định mệnh luận.',
      d: 'Đúng. Tánh Viên Giác vốn đã có từ vô thủy; tu chỉ là làm tan lớp mây vô minh để mặt trăng Viên Giác hiện ra.',
    },
  },
  {
    question: 'Trong bài kệ tóm tắt, "sanh tử và Niết-bàn" được so sánh với điều gì?',
    options: {
      a: 'Như giấc mộng hôm qua và như hoa đốm giữa hư không.',
      b: 'Như hai bờ sông mà người tu hành nhất thiết phải vượt qua.',
      c: 'Như lửa và nước luôn luôn xung khắc với nhau.',
      d: 'Như ngày và đêm tuần hoàn không bao giờ kết thúc.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Theo kinh văn và bài kệ tóm tắt, thế giới Phật thì như hoa đốm hư không, còn sanh tử và Niết-bàn thì như giấc mộng hôm qua.',
      b: 'Sai. Sanh tử và Niết-bàn trong tánh Viên Giác rốt ráo không có qua lại hay bờ bến.',
      c: 'Sai. Trên mặt bản thể bình đẳng, sanh tử và Niết-bàn không hề xung khắc vì cả hai đều là mộng.',
      d: 'Sai. Không có sự tuần hoàn thực tế vì chúng sanh vốn đã thành Phật từ xưa đến giờ.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-3-chuong-pho-nhan',
  slug: 'bai-thu-3-chuong-pho-nhan',
  title: 'Bài Thứ 3 - Chương Phổ Nhãn',
  type: 'article',
  status: 'published',
  order: 6,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-3-chuong-pho-nhan/L%E1%BB%99_tr%C3%ACnh_tu_Vi%C3%AAn_Gi%C3%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-pho-nhan', label: 'III. CHƯƠNG PHỔ NHÃN' },
        { id: 'ngai-pho-nhan-hoi-phat', label: '1. Ngài Phổ Nhãn hỏi Phật', indent: 1 },
        { id: 'phat-khen-ngai-pho-nhan', label: '2. Phật khen Ngài Phổ Nhãn', indent: 1 },
        { id: 'phat-day-phuong-tien-tu-hanh', label: '3. Phật dạy phương tiện tu hành', indent: 1 },
        { id: 'quan-than-nhu-huyen', label: '4. Quán thân như huyễn', indent: 1 },
        { id: 'quan-tam-nhu-huyen', label: '5. Quán tâm như huyễn', indent: 1 },
        { id: 'huyen-het-thi-chan-hien', label: '6. Huyễn hết thì chân hiện', indent: 1 },
        { id: 'ngoc-ma-ni-du-tanh-vien-giac', label: '7. Ngọc Ma-ni dụ tánh Viên Giác', indent: 1 },
        { id: 'phap-gioi-binh-dang', label: '8. Pháp giới bình đẳng', indent: 1 },
        { id: 'tu-va-chung-khong-that-co', label: '9. Tu mà không tu, chứng mà không chứng', indent: 1 },
        { id: 'loi-ke-tong-ket', label: '10. Lời kệ tổng kết', indent: 1 },
        { id: 'luu-y-cuoi-bai', label: '11. Lưu ý cuối bài', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-3-chuong-pho-nhan/Awakening_Beyond_Illusion.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/b0Antv9Umx0',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/6WREON3QrH0ZobJye8WEQm?utm_source=generator&si=ae40815940474aed',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Phổ Nhãn',
    passPercentage: 70,
    questions,
  },
}

export default lesson
