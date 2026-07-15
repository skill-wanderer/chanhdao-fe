import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP BA</p>
      <p class="mb-2 font-semibold">DUY THỨC TAM THẬP TỤNG DỊ GIẢI</p>
      <h2 id="bai-thu-sau-giai-thich-cac-dieu-nghi" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ SÁU</h2>
      <p class="mb-0 font-semibold">GIẢI THÍCH CÁC ĐIỀU NGHI</p>
    </div>

    <h3 id="chanh-van-noi-thuc-sanh-phan-biet" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: NỘI THỨC SANH CÁC MÓN PHÂN BIỆT</h3>
    <p><strong>Hỏi:</strong> Nếu chỉ có nội thức, không có ngoại cảnh làm duyên, thì nội thức làm sao sanh ra các món phân biệt?</p>

    <h4 id="nguyen-van-chu-han-noi-thuc-sanh-phan-biet" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Do nhứt thế chủng thức</p>
        <p>Như thị như thị biến</p>
        <p>Dĩ triển chuyển lực cố</p>
        <p>Bỉ bỉ phân biệt sanh.</p>
      </div>
    </div>

    <h4 id="dich-nghia-noi-thuc-sanh-phan-biet" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói bài tụng để trả lời rằng: Do các chủng tử trong Tạng thức, trùng trùng biến ra các pháp. Vì sức phát triển sanh khởi của các pháp, nên sanh ra các món phân biệt.</p>

    <h4 id="luoc-giai-noi-thuc-sanh-phan-biet" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Hỏi:</strong> Nếu không có ngoại cảnh làm duyên, chỉ có nội thức thì nội thức làm sao sanh ra các món phân biệt?</p>
    <p><strong>Đáp:</strong> Luận chủ trả lời: Do thức A lại da chứa đựng chủng tử của các pháp, các chủng tử ấy lại sanh ra các pháp hiện hành rồi mỗi pháp hiện hành lại sanh Kiến phần (năng phân biệt) và Tướng phần (bị phân biệt).</p>
    <p>Câu "như thị như thị biến" nghĩa là từ khi sanh cho đến khi chín sự biến đổi phát triển rất nhiều.</p>
    <p>Câu "triển chuyển lực cố" nghĩa là tám thức hiện hành và các Tâm sở tương ưng, nào Tướng phần, nào Kiến phần v.v... đều có cái năng lực hỗ trợ cho nhau, nên sanh ra các cảnh giới thế gian (bị phân biệt) và các món phân biệt (năng phân biệt).</p>

    <h3 id="chanh-van-sanh-tu-tuong-tuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: SANH TỬ TƯƠNG TỤC</h3>
    <p><strong>Hỏi:</strong> Nếu chỉ có nội thức, không có ngoại cảnh để làm trợ duyên, thì tại sao lại có chúng hữu tình sanh tử tương tục?</p>

    <h4 id="nguyen-van-chu-han-sanh-tu-tuong-tuc" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Do chư nghiệp tập khí</p>
        <p>Nhị thủ tập khí câu</p>
        <p>Tiền Dị thục ký tận</p>
        <p>Phục sanh dư Dị thục.</p>
      </div>
    </div>

    <h4 id="dich-nghia-sanh-tu-tuong-tuc" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói bài tụng để trả lời rằng: Do tập khí (chủng tử) của các nghiệp và tập khí (chủng tử) của hai thủ (năng thủ, sở thủ) chung nhau làm duyên nên thân dị thục (báo thân) đời này vừa hết, thì lại tiếp tục sanh ra các thân dị thục đời sau và đời sau nữa.</p>

    <h4 id="luoc-giai-sanh-tu-tuong-tuc" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Hỏi:</strong> Nếu chỉ có nội thức, không có ngoại cảnh làm duyên, thì tại sao hiện nay thấy có các chúng hữu tình sanh tử tiếp nối luôn luôn?</p>
    <p><strong>Đáp:</strong> Do có các nghiệp làm duyên, nên chúng hữu tình sanh tử tương tục.</p>
    <p>Chữ "Chư nghiệp": Nghĩa là nghiệp lành, nghiệp dữ và nghiệp bất động (tu thiền định).</p>
    <p>Chữ "Nhị thủ": Kiến phần (năng thủ), Tướng phần (sở thủ) hoặc Danh (tâm) và Sắc (vật) hay Tâm vương và Tâm sở.</p>
    <p>Chữ "tập khí": Tức là biệt danh của chủng tử. Như người viết chữ: khi chưa viết thì cái công năng tập quen (tập khí) đó, nó tiềm tàng núp ẩn trong tay, người không thấy được. Đến khi viết chữ, là do cái công năng tập luyện (khí phần) ngày trước đó, nên nay mới viết được. Bởi thế nên "chủng tử" (công năng tiềm tàng) cũng gọi là "tập khí".</p>
    <p>Báo thân của loài hữu tình, gọi là thân Dị thục. Khi thân Dị thục hiện tiền sắp diệt, thì chủng tử của các nghiệp làm sơ duyên và chủng tử của hai món thủ làm thân duyên, tương tục không dứt, nên làm cho sanh ra thân Dị thục đời sau. Bởi thế nên các chúng hữu tình, khi sắc thân này chết đi, thì lại sanh ra sắc thân khác. Do đó mà sanh tử nối luôn, không biết chừng nào cùng tận.</p>

    <h3 id="chanh-van-ba-tu-tanh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: BA TỰ TÁNH</h3>
    <p><strong>Hỏi:</strong> Nếu chỉ có thức mà thôi, tại sao rất nhiều chỗ trong kinh Phật nói có ba tánh?</p>
    <p><strong>Đáp:</strong> Phải biết ba tánh đó cũng chẳng ngoài thức.</p>
    <p><strong>Hỏi:</strong> Tại sao vậy?</p>

    <h4 id="nguyen-van-chu-han-ba-tu-tanh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Do bỉ bỉ biến kế</p>
        <p>Biến kế chủng chủng vật</p>
        <p>Thử Biến kế sở chấp</p>
        <p>Tự tánh vô sở hữu</p>
        <p>Y tha khởi tự tánh</p>
        <p>Phân biệt duyên sở sanh</p>
        <p>Viên thành thật ư bỉ</p>
        <p>Thường viễn ly tiền tánh</p>
        <p>Cố thử dữ y tha</p>
        <p>Phi dị phi bất dị</p>
        <p>Như vô thường đẳng tánh</p>
        <p>Phi bất kiến thử bỉ.</p>
      </div>
    </div>

    <h4 id="dich-nghia-ba-tu-tanh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói ba bài tụng để trả lời rằng: Do tánh Biến kế sở chấp, vọng chấp tất cả các vật. Tánh Biến kế sở chấp này, không thật có tự thể. Còn tánh Y tha khởi là do các duyên phân biệt mà sanh. Tánh Viên thành thật, là do trên tánh Y tha khởi xa lìa tánh Biến kế sở chấp mà hiện.</p>
    <p>Bởi thế nên tánh "Viên thành thật" đối với tánh "Y tha khởi" cũng khác mà cũng không khác, vì không thể tách riêng được. Bởi thế nên, nếu không thấy được tánh Viên thành thật, thì cũng không thể thấy được tánh Y tha khởi. Cũng như tánh vô thường... đối với các pháp, cũng khác mà cũng không khác.</p>

    <h4 id="luoc-giai-ba-tu-tanh" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Hỏi:</strong> Nếu chỉ có thức mà thôi, thì tại sao trong các kinh rất nhiều chỗ, đức Thế Tôn nói có ba món tự tánh: 1. Biến kế sở chấp tự tánh. 2. Y tha khởi tự tánh. 3. Viên thành thật tự tánh?</p>
    <p><strong>Đáp:</strong> Luận chủ trả lời rằng: "Ba món tự tánh Phật nói đó, cũng không rời thức". Song còn e người không tin, nên Luận chủ nói tiếp 3 bài tụng để giải thích nguyên do.</p>
    <p>Tánh Biến kế sở chấp này là do chúng sanh vọng chấp ức đạc mà có. Như bên Âu châu có nhà học giả thấy bộ xương khỉ giống bộ xương người, nhơn đó họ nghi ngờ và ức đạc rằng: loài khỉ tiến hóa thành loài người; rồi đề xướng lên cái thuyết "Động vật tiến hóa" (Darwin). Từ đó về sau họ mới chủ trương rằng "Tất cả vật trên thế gian, đều do tiến hóa thành". Bởi thế nên bài tụng nói: "Vọng chấp tất cả vật".</p>
    <p>Vì vọng tưởng ức đạc, chớ chẳng phải thật có, dụ như lông rùa sừng thỏ, nên bài tụng nói: "Tánh Biến kế Sở chấp không có thật thể" (thử Biến kế sở chấp, tự tánh vô sở hữu).</p>
    <p>Còn tánh "Y tha khởi", là do phân biệt các duyên trong thế gian mà sanh. Thí như người nhặm con mắt, xem hư không thấy có các hoa đốm, rồi khởi vọng tưởng phân biệt: hoa này đỏ hay trắng, tốt hay xấu, giống thật hoa hay không... Họ không biết rằng: Trong hư không chẳng có hoa, do nhặm mắt nên thấy có hoa (Y tha khởi).</p>
    <p>Trong tánh "Y tha khởi" có nhiễm và tịnh; nếu lìa được phần nhiễm ô tức là tánh Biến kế sở chấp, thì đặng phần thanh tịnh, gọi là tánh "Viên thành thật". Cũng như nước và sóng, nếu sóng xao động lặng, thì tánh nước yên tịnh hiện ra.</p>
    <p>Bởi thế nên "tánh Viên thành thật" với "tánh Y tha khởi", không thể nói khác hay không khác, cũng như nước với sóng không hai mà cũng không một.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Xem biểu đồ: Thực tại theo Duy thức</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Biến kế sở chấp:</strong> vọng chấp tất cả các vật, không có thật tự thể — dụ như lông rùa sừng thỏ.</li>
        <li><strong>Y tha khởi:</strong> do các duyên phân biệt mà sanh, có nhiễm và tịnh — dụ như người nhặm mắt thấy hoa đốm giữa hư không.</li>
        <li><strong>Viên thành thật:</strong> lìa phần nhiễm ô (Biến kế) trên nền Y tha khởi mà hiện ra — dụ như sóng lặng thì tánh nước yên tịnh hiện ra.</li>
      </ul>
    </div>

    <p>Câu "phi bất kiến thử bỉ" nghĩa là nếu không thấy được tánh Viên thành thật đây, thì cũng không thấy được tánh Y tha khởi kia.</p>
    <p>Nghĩa này không những trong đạo Phật, ngay đến người thế tục, nếu không tu theo Phật pháp để ngộ tánh Viên thành thật, thì cũng không thể thấy được các pháp Y tha khởi của thế gian.</p>

    <h3 id="chanh-van-ba-vo-tanh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: BA VÔ TÁNH</h3>
    <p><strong>Hỏi:</strong> Nếu đã có 3 tánh, tại sao đức Thế Tôn lại nói: "Tất cả pháp đều không có tự tánh?"</p>

    <h4 id="nguyen-van-chu-han-ba-vo-tanh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Tức y thử tam tánh</p>
        <p>Lập bỉ tam vô tánh</p>
        <p>Cố Phật mật ý thuyết</p>
        <p>Nhứt thế pháp vô tánh</p>
        <p>Sơ tức tướng vô tánh</p>
        <p>Thứ vô tự nhiên tánh</p>
        <p>Hậu do viễn ly tiền</p>
        <p>Sở chấp ngã, pháp tánh</p>
        <p>Thử chư pháp thắng nghĩa</p>
        <p>Diệt tức thị chơn như</p>
        <p>Thường như kỳ tánh cố</p>
        <p>Tức Duy thức thật tánh.</p>
      </div>
    </div>

    <h4 id="dich-nghia-ba-vo-tanh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói 3 bài tụng để trả lời rằng: Phật y cứ trên ba món tự tánh này, mà mật ý nói: "Tất cả pháp đều không có tự tánh".</p>
    <p>Biến kế sở chấp không tự tánh, vì tướng hư vọng vậy.</p>
    <p>Y tha khởi không có tự tánh, vì do các duyên phân biệt sanh, không phải tự nhiên có.</p>
    <p>Viên thành thật không có tự tánh, do xa lìa tánh Biến kế hư vọng chấp ngã chấp pháp mà hiện.</p>
    <p>Đây là nghĩa thù thắng của các pháp, cũng gọi là "chơn như", vì tánh nó "thường như" vậy; cũng tức "thật tánh" của Duy thức.</p>

    <h4 id="luoc-giai-ba-vo-tanh" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Hỏi:</strong> Nếu có ba món tự tánh, tại sao đức Thế Tôn lại nói: "Tất cả pháp đều không có tự tánh"?</p>
    <p><strong>Đáp:</strong> Luận chủ nói 3 bài tụng để giải thích: "Phật y cứ trên ba món tự tánh, rồi giả lập ba món vô tánh". Đã nói "Phật giả lập ba món vô tánh" thì biết rằng chẳng phải thật vô. Sở dĩ Phật phương tiện mật ý nói như vậy, chẳng qua để đối trị cái chấp "ba tánh" mà thôi, chớ không phải thật ý. Cũng như dùng ba món thuốc để đối trị ba bệnh.</p>
    <p>Ba món vô tánh là: 1. Tướng vô tánh; nghĩa là tướng Biến kế sở chấp, hư vọng không thật có. 2. Tự nhiên vô tánh; nghĩa là do các duyên sanh, không phải tự nhiên có; nên cũng gọi là "sanh vô tánh". 3. Thắng nghĩa vô tánh; nghĩa là xa lìa các vọng chấp ngã chấp pháp rồi, mới hiện ra tánh này; nên gọi là "Thắng nghĩa vô tánh".</p>
    <p>Thắng nghĩa vô tánh, cũng tức là chơn như, vì tánh nó chơn thật không vọng, thường như vậy; cũng gọi là "Thật tánh của Duy thức".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Ba món vô tánh đối trị ba tự tánh</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Tướng vô tánh</strong> để đối trị Biến kế sở chấp tánh.</li>
        <li><strong>Tự nhiên vô tánh</strong> để đối trị Tự nhiên tánh (Y tha).</li>
        <li><strong>Thắng nghĩa vô tánh</strong> để đối trị Viên thành thật tánh.</li>
      </ul>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo văn bản, tại sao nội thức có thể sanh ra các món phân biệt dù không có ngoại cảnh làm duyên?',
    options: {
      a: 'Do sức mạnh của các vị thần linh áp đặt lên nhận thức.',
      b: 'Do các căn tiếp xúc trực tiếp với các trần cảnh thật có bên ngoài.',
      c: 'Do các chủng tử trong Tạng thức biến hiện ra các pháp.',
      d: 'Do tâm trí tự tưởng tượng ra thế giới bên ngoài mà không cần hạt giống.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Văn bản không hề đề cập đến sự can thiệp của thần linh.',
      b: 'Sai. Hệ thống Duy thức bác bỏ việc có ngoại cảnh thật bên ngoài làm duyên.',
      c: 'Đúng. Do các chủng tử trong Tạng thức, trùng trùng biến ra các pháp.',
      d: 'Sai. Các pháp sanh khởi là do có các chủng tử (hạt giống) chứa đựng trong thức A lại da sanh ra, chứ không phải do tâm trí tự tưởng tượng mà không cần hạt giống.',
    },
  },
  {
    question: 'Cụm từ "Như thị như thị biến" trong bài tụng thứ sáu có ý nghĩa gì?',
    options: {
      a: 'Chỉ sự luân hồi giữa các cõi giới khác nhau.',
      b: 'Sự biến đổi của các pháp từ khi sanh cho đến khi chín muồi.',
      c: 'Sự đứng yên không thay đổi của các sự vật hiện tượng.',
      d: 'Sự biến mất hoàn toàn của mọi ý niệm sai lầm.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Câu này không dùng để chỉ trực tiếp sự luân hồi cõi giới.',
      b: 'Đúng. Câu "như thị như thị biến" nghĩa là từ khi sanh cho đến khi chín sự biến đổi phát triển rất nhiều.',
      c: 'Sai. Ý nghĩa của câu là "biến đổi phát triển rất nhiều" chứ không phải là sự đứng yên.',
      d: 'Sai. Không có thông tin nào trong văn bản gán ý nghĩa này cho câu "như thị như thị biến".',
    },
  },
  {
    question: 'Yếu tố nào kết hợp với nhau làm duyên khiến thân Dị thục đời sau tiếp tục sanh khởi?',
    options: {
      a: 'Chỉ duy nhất do các nghiệp ác từ đời trước để lại.',
      b: 'Sự điều khiển của ý thức và sức mạnh của cơ thể vật lý.',
      c: 'Do sự mong muốn được trường tồn của bản ngã.',
      d: 'Tập khí của các nghiệp và tập khí của nhị thủ.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Nghiệp làm duyên bao gồm cả nghiệp lành, nghiệp dữ và nghiệp bất động, chứ không chỉ có nghiệp ác.',
      b: 'Sai. Văn bản không nhắc đến sự điều khiển của ý thức và cơ thể vật lý trong ngữ cảnh này.',
      c: 'Sai. Văn bản không nói nguyên nhân là do mong muốn trường tồn của bản ngã.',
      d: 'Đúng. Do tập khí (chủng tử) của các nghiệp và tập khí (chủng tử) của hai thủ (năng thủ, sở thủ) chung nhau làm duyên nên thân dị thục tiếp tục sanh ra.',
    },
  },
  {
    question: 'Tại sao "Tập khí" lại được gọi là biệt danh của chủng tử?',
    options: {
      a: 'Vì nó chỉ xuất hiện khi chúng ta thực hiện các hành động xấu.',
      b: 'Vì nó là tên gọi khác của các đối tượng bên ngoài mà ta cảm nhận được.',
      c: 'Vì nó là không khí xung quanh tác động vào tâm thức con người.',
      d: 'Vì nó là công năng tiềm tàng, giống như thói quen được rèn luyện núp ẩn bên trong.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tập khí liên quan đến nhiều loại nghiệp khác nhau, không chỉ hành động xấu.',
      b: 'Sai. Tập khí là nội tại, không phải là đối tượng bên ngoài.',
      c: 'Sai. Chữ "khí" ở đây không mang nghĩa là không khí xung quanh.',
      d: 'Đúng. Vì chủng tử là công năng tập quen, tiềm tàng núp ẩn bên trong giống như người tập viết chữ nên cũng gọi là "tập khí".',
    },
  },
  {
    question: 'Tánh "Biến kế sở chấp" được mô tả như thế nào trong văn bản?',
    options: {
      a: 'Là sự thật khách quan mà mọi nhà khoa học đều công nhận.',
      b: 'Là bản chất chân thật, vĩnh hằng của mọi sự vật.',
      c: 'Là các pháp sanh ra do sự kết hợp của nhiều nhân duyên.',
      d: 'Do vọng chấp, ức đạc mà có chứ không thật có tự thể.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Đây là sự ức đạc sai lầm, không phải sự thật khách quan.',
      b: 'Sai. Bản chất chân thật là tánh Viên thành thật, không phải Biến kế sở chấp.',
      c: 'Sai. Pháp do duyên sanh là tánh Y tha khởi.',
      d: 'Đúng. Tánh Biến kế sở chấp này là do chúng sanh vọng chấp ức đạc mà có, không có thật thể.',
    },
  },
  {
    question: 'Mối quan hệ giữa tánh "Viên thành thật" và tánh "Y tha khởi" là gì?',
    options: {
      a: 'Y tha khởi là giả hoàn toàn, còn Viên thành thật là thật hoàn toàn.',
      b: 'Viên thành thật sanh ra Y tha khởi thông qua các duyên.',
      c: 'Phi dị phi bất dị (không khác cũng không phải không khác).',
      d: 'Là hai thực thể hoàn toàn độc lập và không liên quan đến nhau.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Văn bản không dùng cách giải thích này để mô tả mối quan hệ giữa hai tánh.',
      b: 'Sai. Y tha khởi là do phân biệt các duyên trong thế gian mà sanh.',
      c: 'Đúng. Tánh Viên thành thật đối với tánh Y tha khởi cũng khác mà cũng không khác, vì không thể tách riêng được.',
      d: 'Sai. Chúng không thể tách riêng được, giống như nước với sóng không hai mà cũng không một.',
    },
  },
  {
    question: 'Mục đích của Đức Thế Tôn khi nói về "Ba món vô tánh" là gì?',
    options: {
      a: 'Để đối trị cái chấp vào "ba tánh" chứ không phải thật ý tiêu diệt các pháp.',
      b: 'Để giải thích rằng các pháp tự nhiên mà có, không cần nhân duyên.',
      c: 'Để thay thế hoàn toàn giáo lý về ba tự tánh vì nó đã lỗi thời.',
      d: 'Để khẳng định rằng thế giới này hoàn toàn là hư vô, không có gì tồn tại.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Sở dĩ Phật phương tiện mật ý nói như vậy, chẳng qua để đối trị cái chấp "ba tánh" mà thôi, chớ không phải thật ý.',
      b: 'Sai. Văn bản khẳng định các pháp do duyên sanh, không phải tự nhiên có.',
      c: 'Sai. Phật y cứ trên ba món tự tánh, rồi giả lập ba món vô tánh, chứ không phải thay thế.',
      d: 'Sai. Văn bản khẳng định "chẳng phải thật vô".',
    },
  },
  {
    question: 'Theo văn bản, "Thắng nghĩa vô tánh" tương đương với khái niệm nào sau đây?',
    options: {
      a: 'Năng lực sanh tử tương tục của chúng hữu tình.',
      b: 'Sự hư vọng của các tướng do mắt nhặm thấy.',
      c: 'Sự biến đổi không ngừng của tám thức hiện hành.',
      d: 'Chơn như hay Thật tánh của Duy thức.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Sanh tử tương tục là do các nghiệp và nhị thủ làm duyên.',
      b: 'Sai. Sự hư vọng của người nhặm mắt là ví dụ cho tánh Y tha khởi.',
      c: 'Sai. Sự biến đổi của các thức không phải là khái niệm tương đương của Thắng nghĩa vô tánh.',
      d: 'Đúng. Thắng nghĩa vô tánh, cũng tức là chơn như, cũng gọi là "Thật tánh của Duy thức".',
    },
  },
  {
    question: 'Ví dụ về người "nhặm mắt xem hư không thấy hoa đốm" dùng để minh họa cho tánh nào?',
    options: {
      a: 'Tập khí của các nghiệp thiện.',
      b: 'Tướng vô tánh.',
      c: 'Tánh Y tha khởi.',
      d: 'Tánh Viên thành thật.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Ví dụ này không nói về các nghiệp thiện.',
      b: 'Sai. Tướng vô tánh để đối trị Biến kế sở chấp.',
      c: 'Đúng. Người nhặm mắt thấy có hoa đốm không thật trong hư không là ví dụ cho tánh Y tha khởi.',
      d: 'Sai. Viên thành thật được ví như tánh nước yên lặng khi sóng đã xao động.',
    },
  },
  {
    question: 'Câu "Phi bất kiến thử bỉ" trong bài tụng có nghĩa là gì?',
    options: {
      a: 'Không được nhìn vào các pháp bên ngoài khi đang tu tập nội thức.',
      b: 'Chỉ những người chứng quả mới nhìn thấy được sự khác biệt giữa hai tánh này.',
      c: 'Nếu không thấy được tánh Viên thành thật thì cũng không thấy đúng tánh Y tha khởi.',
      d: 'Cả tánh Viên thành thật và Y tha khởi đều không thể nhìn thấy bằng mắt thường.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Câu này không mang ý nghĩa răn dạy cấm nhìn pháp bên ngoài.',
      b: 'Sai. Không phải là nghĩa giải thích trực tiếp của câu này.',
      c: 'Đúng. Câu "phi bất kiến thử bỉ" nghĩa là nếu không thấy được tánh Viên thành thật đây, thì cũng không thấy được tánh Y tha khởi kia.',
      d: 'Sai. Đây không phải ý nghĩa mà luận chủ giải thích cho câu tụng này.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-6-giai-thich-cac-dieu-nghi',
  slug: 'bai-thu-6-giai-thich-cac-dieu-nghi',
  title: 'Bài Thứ 6 - Giải thích các điều nghi',
  type: 'article',
  status: 'published',
  order: 24,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-6-giai-thich-cac-dieu-nghi/Th%E1%BB%B1c_t%E1%BA%A1i_theo_Duy_th%E1%BB%A9c.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-sau-giai-thich-cac-dieu-nghi', label: 'Bài Thứ Sáu' },
        { id: 'chanh-van-noi-thuc-sanh-phan-biet', label: 'Chánh văn: Nội thức sanh các món phân biệt', indent: 1 },
        { id: 'nguyen-van-chu-han-noi-thuc-sanh-phan-biet', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-noi-thuc-sanh-phan-biet', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-noi-thuc-sanh-phan-biet', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-sanh-tu-tuong-tuc', label: 'Chánh văn: Sanh tử tương tục', indent: 1 },
        { id: 'nguyen-van-chu-han-sanh-tu-tuong-tuc', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-sanh-tu-tuong-tuc', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-sanh-tu-tuong-tuc', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-ba-tu-tanh', label: 'Chánh văn: Ba tự tánh', indent: 1 },
        { id: 'nguyen-van-chu-han-ba-tu-tanh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-ba-tu-tanh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-ba-tu-tanh', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-ba-vo-tanh', label: 'Chánh văn: Ba vô tánh', indent: 1 },
        { id: 'nguyen-van-chu-han-ba-vo-tanh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-ba-vo-tanh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-ba-vo-tanh', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-6-giai-thich-cac-dieu-nghi/Decoding_Absolute_Reality.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/2r-fpZKdTfA',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/21Zc1fep1Zai85XdtgWEHi?utm_source=generator&si=4764859e9cd54447',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Giải thích các điều nghi',
    passPercentage: 70,
    questions,
  },
}

export default lesson
