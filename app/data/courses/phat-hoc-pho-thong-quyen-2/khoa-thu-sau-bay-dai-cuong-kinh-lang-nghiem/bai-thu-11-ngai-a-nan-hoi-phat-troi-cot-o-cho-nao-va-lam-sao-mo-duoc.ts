import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bai-thu-muoi-mot-ngai-a-nan-hoi-phat-troi-cot-o-cho-nao-va-lam-sao-mo-duoc">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ 11</h2>

    <section id="i-ngai-a-nan-hoi-phat-troi-cot-o-cho-nao-va-lam-sao-mo-duoc">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. NGÀI A NAN HỎI PHẬT: TRÓI CỘT Ở CHỖ NÀO VÀ LÀM SAO MỞ ĐƯỢC?</h3>
      <p>A Nan thưa: Bạch Thế Tôn, như lời Phật dạy về cái nghĩa thứ hai là phải biết rõ gốc rễ của phiền não ở chỗ nào, mới có thể trừ được. Cũng như người mở gút, nếu không biết mối gút ở đâu thì không bao giờ mở được.</p>
      <p>Bạch Thế Tôn! Chính thế, chúng con đây cũng vậy, từ vô thỉ đến nay, cùng với các vô minh chung (đồng) sanh và chung diệt; tuy mang danh xuất gia, học rộng nghe nhiều, thật ra cũng như người bị bệnh rét cách ngày.</p>
      <p>Cúi xin Đức Như Lai thương xót những kẻ trầm luân hiện tại cũng như vị lai chỉ dạy cho ở nơi thân tâm này, chỗ nào triền phược (gút), và làm sao mở được?</p>
    </section>

    <section id="ii-phat-chi-cho-troi-cot-gut">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. PHẬT CHỈ CHỖ TRÓI CỘT (GÚT)</h3>
      <p>Khi đó Phật cùng với mười phương chư Phật, đều thương xót A Nan và đại chúng cùng các chúng sanh đời sau, nên trên đảnh các Ngài đồng phóng hào quang quý báu chiếu khắp tất cả, đồng gọi A Nan cùng đại chúng và dạy rằng:</p>
      <p>Nay các ông muốn biết cái "câu sanh vô minh" (vô minh chung cùng sanh từ vô thỉ đến nay) để trừ, và "quả vô thượng Bồ đề" để tu chứng, vậy nay ta sẽ chỉ rõ cho các ông.</p>
      <p>Này A Nan, khiến cho các ông nhiều kiếp sanh tử luân hồi, chỉ vì sáu căn mà làm cho các ông chứng được đạo quả Bồ đề an vui giải thoát, cũng chỉ vì sáu căn của các ông mà thôi.</p>

      <section id="luoc-giai-1">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Mười phương các Đức Phật, đồng phóng hào quang, đồng dạy như vậy, là để cho A Nan và đại chúng đều biết: đây là một phương pháp duy nhất, không những một mình đức Thích Ca, mà cả mười phương chư Phật cũng đồng chỉ dạy như thế.</p>
      </section>
    </section>

    <section id="iii-a-nan-hoi-tai-sao-bi-sanh-tu-luan-hoi-hay-duoc-giai-thoat-cung-vi-sau-can">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. A NAN HỎI: TẠI SAO BỊ SANH TỬ LUÂN HỒI HAY ĐƯỢC TỰ TẠI GIẢI THOÁT CŨNG VÌ SÁU CĂN?</h3>
      <p>Ông A Nan đã nghe Phật chỉ dạy, nhưng chưa hiểu nên kính cẩn hỏi Phật:</p>
      <p>Bạch Thế Tôn, tại sao làm cho chúng con nhiều kiếp sanh tử luân hồi cũng vì sáu căn, còn được an vui giải thoát cũng chỉ do sáu căn, chứ không phải do vật gì khác?</p>
      <p>Phật dạy rằng: Căn và trần đồng một thể (tâm), triền phược và giải thoát không hai (mê thì triền phược, ngộ thì giải thoát). Các thức hư vọng, cũng như hoa đốm giữa hư không.</p>

      <section id="luoc-giai-2">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Căn trần không lỗi mà lỗi tại vọng thức phân biệt, song thức thì hư vọng không có thật thể như hoa đốm giữa hư không.</p>
        <p>Cũng đồng căn và trần này, song phàm phu vì mê, khởi vọng thức phân biệt ngã, pháp, nên bị triền phược, gọi là kiết (gút). Thánh nhơn cũng đồng căn trần này, song vì giác ngộ không khởi phân biệt chấp thật có ngã, pháp nên được giải thoát, thế gọi là mở.</p>
      </section>

      <p>A Nan, vì có trần cảnh, nên ở nơi căn mới khởi ra phân biệt. Vì đã có cái năng phân biệt ở nơi căn, nên mới hiện ra cái tướng bị phân biệt là cảnh. Căn (kiến) và cảnh (tướng) đối đãi nhau vọng hiện, chứ không thật có (vô tánh). Cũng như hình cây lau gác nhau.</p>

      <section id="luoc-giai-3">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Vì các cây lau gác nhau, nên ở xa xem như có hình người hay vật. Cái hình này không thật. Đây là dụ cho căn trần hư huyễn không thật, vì đối đãi nhau nên vọng hiện ra mà thôi.</p>
      </section>

      <p>Thế nên, khi thấy, nghe, hay, biết, mà khởi vọng niệm phân biệt, đó là gốc vô minh. Còn khi thấy, nghe, hay, biết mà không khởi vọng niệm phân biệt, đó là Niết bàn. Ở trong chơn tâm thanh tịnh, không có dung chứa vật gì cả.</p>

      <section id="luoc-giai-4">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đoạn này Phật dạy, khi sáu căn đối với sáu trần cảnh nếu khởi vọng niệm phân biệt, đó là gốc của vô minh triền phược (trói cột).</p>
        <p>Bởi thế nên Phật nói: "vì sáu căn làm cho các ông sanh tử luân hồi". Trái lại, khi sáu căn đối với sáu trần, mà không khởi vọng niệm phân biệt đó là Niết bàn, là giải thoát (mở gút) nên Phật nói: "Làm cho các ông được an vui giải thoát cũng vì sáu căn".</p>
      </section>
    </section>

    <section id="iv-phat-noi-bai-ke-tom-lai-nghia-tren">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. PHẬT NÓI BÀI KỆ TÓM LẠI NGHĨA TRÊN</h3>
      <p>Khi đó Phật muốn tóm lại các nghĩa trên, nên nói bài kệ ý nghĩa như vầy:</p>

      <section id="nguyen-van-chu-han">
        <h4 class="text-lg font-semibold">NGUYÊN VĂN CHỮ HÁN</h4>
        <p>Chơn tánh hữu vi không</p>
        <p>Duyên sanh có như huyễn</p>
        <p>Bất thật như không hoa</p>
        <p>Ngôn vọng hiển chư chơn</p>
        <p>Vọng, chơn đồng nhị vọng</p>
        <p>Do phi chơn phi chơn</p>
        <p>Vân hà kiến sở kiến</p>
        <p>Trung gian vô thật tánh</p>
        <p>Thị cố nhược giao lô</p>
        <p>Giải kết đồng sở nhơn</p>
        <p>Thánh phàm vô nhị lộ</p>
        <p>Nhữ quán giao trung tánh</p>
        <p>Không hữu nhị câu phi</p>
        <p>Mê hối tức vô minh</p>
        <p>Phát minh tiện giải thoát</p>
        <p>Giải kết nhơn thứ đệ</p>
        <p>Lục giải nhứt diệc vong</p>
        <p>Căn tuyển trạch Viên Thông</p>
        <p>Nhập lưu thành Chánh giác</p>
        <p>Đà na vi tế thức</p>
        <p>Tập khí thành bộc lưu</p>
        <p>Chơn phi chơn khủng mê</p>
        <p>Ngã thường bất khai diễn</p>
        <p>Tự tâm thủ tự tâm</p>
        <p>Phi huyễn thành huyễn pháp</p>
        <p>Bất thủ vô phi huyễn</p>
        <p>Phi huyễn thường bất sanh</p>
        <p>Huyễn pháp vân hà lập</p>
        <p>Thị danh diệu liên hoa</p>
        <p>Kim cang vương bảo giác</p>
        <p>Như huyễn tam ma đề</p>
        <p>Đàn chĩ siêu vô học</p>
        <p>Thử A tỳ đạt ma</p>
        <p>Thập phương Bạc Già phạm</p>
        <p>Nhứt lộ Niết bàn môn</p>
      </section>

      <section id="dich-nghia-bai-ke">
        <h4 class="text-lg font-semibold">DỊCH NGHĨA BÀI KỆ</h4>
        <p>Xứng theo chơn tánh (chơn tâm) thì các pháp hữu vi (vọng) không thật có, do nhơn duyên sanh, cũng như vật huyễn thuật.</p>
        <p>Xứng về chơn tánh thì vô vi (chơn) cũng không thật có, vì nó không sanh diệt, như hoa đốm giữa hư không.</p>
        <p>Nói hữu vi là vọng, để hiển vô vi kia là chơn. Vì đối đãi nhau mà có, nên "chơn" và "vọng" cũng đồng vọng cả. Đến lý này, còn không thể nói là "chơn" hay "phi chơn", thì làm sao gọi nó là cái "thấy" (căn) hay cái "bị thấy" (trần) được. Vì nó như vật huyễn, chẳng có thật tánh, cũng như hình cây lau gác.</p>
        <p>Giải thoát hay triền phược đồng do sáu căn. Được chứng Thánh hay bị đọa phàm cũng bởi sáu căn, chứ không có con đường nào khác. Các ông cứ xem hình cây lau gác kia, nói có hay nói không đều không thể được. Hễ mê muội là vô minh, còn giác ngộ thì giải thoát.</p>
        <p>Cột gút lại hay mở ra, đều phải theo thứ lớp. Khi sáu gút (sáu căn) mở rồi, thì cái tên một cũng không còn (vì không còn đối đãi, nên không thể kêu gọi). Các ông lựa được căn viên thông tu hành, thì mau đặng thành quả Phật.</p>
        <p>Thức A Đà Na (thức thứ tám) rất là tinh tế, các chủng tử trong thức này nó sanh diệt rất vi tế, như dòng nước chảy mau. Ta đối với phàm phu và tiểu thừa không hề giảng nói (thức này) vì sợ chúng mê lầm chấp là "chơn" hay là "vọng", đều có hại cả.</p>
        <p>Tự nơi tâm các ông, trở lại chấp lấy tự tâm các ông. Chơn tâm không phải huyễn mà trở lại thành hư huyễn. Nếu đối với các "chơn" mà các ông không sanh tâm chấp thủ: với cái "chơn" kia hãy còn không sanh, huống chi là cái "hư huyễn" làm gì có được.</p>
        <p>Đây là con đường duy nhất của mười phương các đức Phật tu hành đến cảnh Niết bàn. Pháp này tên là Diệu Liên Hoa, cũng tên Kim Cang Vương Bảo Giác và cũng tên là Như huyễn Tam ma đề. Chỉ tu trong giây phút thì được quả vô học.</p>
        <p>Khi đó A Nan và đại chúng nghe Phật nói bài kệ nghĩa lý thâm trầm, nên tâm trí mỗi người đều trở nên sáng suốt, được lợi ích chưa từng có.</p>
      </section>

      <section id="luoc-giai-5">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Ông A Nan đã mấy lần cầu Phật chỉ dạy phương pháp nào mười phương các đức Phật tu hành để được thành đạo chứng quả. Điều ấy, Phật chỉ dạy đến đây đã tường tận.</p>
        <p>Từ trước đến đây là nói về phần đốn tu và đốn chứng. Từ đây về sau Phật mới dạy về phần tiệm tu.</p>
      </section>
    </section>

    <section id="v-vong-het-thi-chon-hien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. VỌNG HẾT THÌ CHƠN HIỆN</h3>
      <p>Này A Nan, tùy ông lựa chọn sáu căn mà tu hành, nếu sự kiết phược ở nơi căn diệt; khi các vọng đã tiêu hết, thì đó là "chơn" chứ gì nữa!</p>
      <p>A Nan, ông hãy xem cái khăn đã cột sáu gút đây, có thể đồng một thời mở được hết sáu gút được không?</p>
      <p>A Nan thưa: Bạch Thế Tôn, sáu gút tuy đồng một cái khăn, song khi cột, đã tuần tự mà cột, thì khi mở cũng phải theo thứ lớp mà mở, không thể đồng một thời mở được hết.</p>
      <p>Phật dạy: Sáu căn của ông khi giải trừ cũng phải như vậy. Mở gút đầu tiên là phá trừ ngã chấp (chấp ta) trước chứng đặng nhơn không. Tiến đến tầng thứ hai là phá trừ Pháp chấp, sau mới chứng đặng pháp không. Ngã, pháp đều không sanh, thế mới gọi là Bồ tát đặng Vô sanh nhẫn (an nhẫn nơi nhơn, pháp đều không sanh).</p>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong lời dạy của Đức Phật, yếu tố nào vừa là nguyên nhân khiến chúng sanh luân hồi, vừa là phương tiện để đạt được giải thoát?',
    options: {
      a: 'Sáu căn của chính mình',
      b: 'Nghiệp lực từ tiền kiếp',
      c: 'Sáu trần (cảnh vật bên ngoài)',
      d: 'Thức A-lại-da',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Phật dạy rằng nhiều kiếp sanh tử luân hồi hay chứng được đạo quả Bồ đề an vui giải thoát đều chỉ vì sáu căn [1].',
      b: 'Sai. Văn bản tập trung vào sáu căn, không đề cập đến nghiệp lực tiền kiếp trong ngữ cảnh này [1].',
      c: 'Sai. Sáu trần không phải gốc rễ, luân hồi hay giải thoát là ở nơi sáu căn [1].',
      d: 'Sai. Yếu tố được chỉ đích danh làm nguyên nhân sanh tử hay giải thoát ở đây là sáu căn [1].',
    },
  },
  {
    question: 'Tại sao Đức Phật lại sử dụng hình ảnh "hình cây lau gác vào nhau" để mô tả về căn và cảnh?',
    options: {
      a: 'Để mô tả quá trình phát triển của trí tuệ',
      b: 'Để chỉ sự vững chãi của giáo pháp',
      c: 'Để chỉ tính chất đối đãi và không thật có của chúng',
      d: 'Để khuyên chúng sanh nên đoàn kết',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Ví dụ này không dùng để mô tả sự phát triển trí tuệ [2], [3].',
      b: 'Sai. Cây lau gác vào nhau không biểu trưng cho sự vững chãi [2], [3].',
      c: 'Đúng. Căn (kiến) và cảnh (tướng) đối đãi nhau vọng hiện chứ không thật có, giống như hình cây lau gác vào nhau [2]. Đây là dụ cho căn trần hư huyễn [3].',
      d: 'Sai. Hình ảnh này không mang ý nghĩa khuyên răn sự đoàn kết [2], [3].',
    },
  },
  {
    question: 'Theo lời Phật dạy, gốc rễ của vô minh nằm ở đâu khi sáu căn tiếp xúc với sáu trần?',
    options: {
      a: 'Ở việc sáu căn bị hư hỏng về mặt vật lý',
      b: 'Ở việc không thể nhìn thấy các vật từ xa',
      c: 'Ở việc khởi vọng niệm phân biệt khi thấy nghe',
      d: 'Ở sự hiện diện của trần cảnh bên ngoài',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Văn bản không nhắc đến sự hư hỏng vật lý của căn [3].',
      b: 'Sai. Khoảng cách tầm nhìn không liên quan đến gốc rễ vô minh [3].',
      c: 'Đúng. Khi thấy, nghe, hay, biết (sáu căn đối với sáu trần) mà khởi vọng niệm phân biệt, đó là gốc vô minh triền phược [3].',
      d: 'Sai. Sự hiện diện của trần cảnh không có lỗi, lỗi ở việc khởi vọng niệm phân biệt [2], [3].',
    },
  },
  {
    question: 'Tại sao Đức Phật thường ít khi giảng giải về thức A đà na (thức thứ tám) cho phàm phu và tiểu thừa?',
    options: {
      a: 'Vì sợ họ mê lầm chấp thức này là "chơn" hoặc "vọng"',
      b: 'Vì nó quá phức tạp để hiểu',
      c: 'Vì thức này không quan trọng trong việc tu hành',
      d: 'Vì thức này chỉ tồn tại ở các bậc Thánh',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Phật sợ chúng phàm phu và tiểu thừa mê lầm chấp thức A đà na là "chơn" hay "vọng", đều có hại cho việc tu hành [4].',
      b: 'Sai. Dù thức này vi tế, nhưng lý do chính yếu là để tránh sự chấp trước sai lầm [4].',
      c: 'Sai. Thức này chứa các chủng tử sanh diệt vi tế, rất quan trọng [4].',
      d: 'Sai. Thức này có ở mọi chúng sanh, không chỉ bậc Thánh [4].',
    },
  },
  {
    question: 'Thứ tự đúng trong việc mở các "gút thắt" để đạt đến "Vô sanh nhẫn" là gì?',
    options: {
      a: 'Phá pháp chấp trước, sau đó phá ngã chấp',
      b: 'Phá ngã chấp trước để chứng nhơn không, sau đó phá pháp chấp để chứng pháp không',
      c: 'Mở đồng thời cả sáu gút thắt cùng một lúc',
      d: 'Chỉ cần phá trừ trần cảnh bên ngoài là đủ',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Trình tự phải là phá ngã chấp trước rồi mới đến pháp chấp [5].',
      b: 'Đúng. Mở gút đầu tiên là phá trừ ngã chấp để chứng nhơn không, tầng thứ hai là phá trừ Pháp chấp để chứng pháp không [5].',
      c: 'Sai. Giống như mở gút khăn, sáu căn khi giải trừ cũng phải theo thứ lớp, không thể đồng một thời mở hết [6], [5].',
      d: 'Sai. Cần phá trừ các chấp trước bên trong (ngã, pháp), chứ không phải phá trần cảnh bên ngoài [5].',
    },
  },
  {
    question: 'Câu kệ "Vọng, chơn đồng nhị vọng" trong bài kệ của Phật có ý nghĩa gì sâu sắc nhất?',
    options: {
      a: 'Cái giả và cái thật đều quý giá như nhau',
      b: 'Phật giáo không công nhận sự tồn tại của chân lý',
      c: 'Khi còn đứng trên lập trường đối đãi để phân biệt cái chơn và cái vọng thì cả hai đều là sản phẩm của tâm phân biệt',
      d: 'Chơn tâm cũng là một thứ hư huyễn',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Câu kệ không đánh giá sự quý giá của chúng [7].',
      b: 'Sai. Đạo Phật vẫn chỉ đường đến chơn tâm, nhưng vượt lên trên sự phân biệt [7].',
      c: 'Đúng. Nói hữu vi là vọng để hiển vô vi là chơn, vì đối đãi nhau mà có nên cả khái niệm "chơn" và "vọng" đều đồng là vọng [7].',
      d: 'Sai. Chơn tâm thực sự không sanh diệt, chỉ có khái niệm phân biệt chơn-vọng mới là hư huyễn [7], [8].',
    },
  },
  {
    question: 'Khi sáu gút (tương ứng sáu căn) đã được mở hoàn toàn, điều gì sẽ xảy ra với khái niệm về cái "Một"?',
    options: {
      a: 'Cái "Một" sẽ trở nên vĩnh cửu',
      b: 'Cái "Một" sẽ biến thành cái "Tất cả"',
      c: 'Cái tên "Một" cũng không còn tồn tại vì không còn sự đối đãi',
      d: 'Sáu căn sẽ nhập lại làm một căn duy nhất',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Khái niệm "Một" không trở thành vĩnh cửu [4].',
      b: 'Sai. Văn bản không nói "Một" biến thành "Tất cả" [4].',
      c: 'Đúng. Khi sáu gút mở rồi thì cái tên "một" cũng không còn, vì không còn đối đãi nên không thể kêu gọi [4].',
      d: 'Sai. Sáu căn không phải nhập lại thành một căn vật lý duy nhất [4].',
    },
  },
  {
    question: 'Theo văn bản, trạng thái "Niết bàn" được mô tả như thế nào trong mối quan hệ với sáu căn?',
    options: {
      a: 'Là khi thấy, nghe, hay, biết mà không khởi vọng niệm phân biệt',
      b: 'Là khi sáu căn ngừng hoạt động hoàn toàn',
      c: 'Là kết quả của việc tiêu diệt mọi cảm giác',
      d: 'Là một cõi giới xa xôi sau khi chết',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Khi sáu căn đối với sáu trần (thấy, nghe, hay, biết) mà không khởi vọng niệm phân biệt, đó là Niết bàn, là giải thoát [3], [9].',
      b: 'Sai. Các căn vẫn thực hiện chức năng thấy, nghe, hay, biết chứ không ngừng hoạt động [3].',
      c: 'Sai. Không phải tiêu diệt cảm giác mà là dừng sự phân biệt lăng xăng [3].',
      d: 'Sai. Niết bàn được mô tả là trạng thái giải thoát ngay khi đối cảnh không sinh vọng niệm, không phải cõi giới sau khi chết [9].',
    },
  },
  {
    question: 'Mười phương chư Phật đồng phóng hào quang và đồng dạy một lời cho Ngài A Nan nhằm mục đích gì?',
    options: {
      a: 'Để chứng minh rằng đây là con đường duy nhất và chung nhất của chư Phật',
      b: 'Để xua tan bóng tối trong hang động nơi họ đang đứng',
      c: 'Để chúc mừng Ngài A Nan đã ngộ đạo',
      d: 'Để phô diễn thần thông quảng đại',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Hành động đồng phóng hào quang và đồng dạy là để cho A Nan và đại chúng biết đây là phương pháp duy nhất, chung của cả mười phương chư Phật [1].',
      b: 'Sai. Sự kiện này mang ý nghĩa pháp lý chứ không phải thắp sáng vật lý [1].',
      c: 'Sai. Ngài A Nan lúc này vẫn đang cầu xin Phật chỉ dạy, chưa ngộ đạo hoàn toàn [10], [1].',
      d: 'Sai. Mục đích cốt lõi là ấn chứng chánh pháp [1].',
    },
  },
  {
    question: 'Cụm từ "Tự tâm thủ tự tâm" trong bài kệ cảnh báo về điều gì?',
    options: {
      a: 'Cảnh báo về việc tâm không thể tự hiểu chính mình',
      b: 'Cảnh báo về việc dùng tâm sai lầm để chấp lấy cái chơn tâm, biến nó thành hư huyễn',
      c: 'Cảnh báo về việc tâm trí quá lười biếng',
      d: 'Khuyên chúng ta nên yêu thương bản thân mình nhiều hơn',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Không mang nghĩa tâm không hiểu chính nó [8].',
      b: 'Đúng. Cảnh báo việc tự nơi tâm trở lại chấp lấy tự tâm mình, làm cho chơn tâm không phải huyễn lại trở thành hư huyễn [8].',
      c: 'Sai. Lời răn dạy này không liên quan đến sự lười biếng [8].',
      d: 'Sai. Đây là lời dạy triết lý về cách thức dụng tâm tu tập, không mang nghĩa yêu thương cá nhân [8].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-11-ngai-a-nan-hoi-phat-troi-cot-o-cho-nao-va-lam-sao-mo-duoc',
  slug: 'bai-thu-11-ngai-a-nan-hoi-phat-troi-cot-o-cho-nao-va-lam-sao-mo-duoc',
  title: 'Bài Thứ 11 - Ngài A Nan hỏi Phật: "Trói cột ở chỗ nào và làm sao mở được?"',
  type: 'article',
  status: 'published',
  order: 12,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-11-ngai-a-nan-hoi-phat-troi-cot-o-cho-nao-va-lam-sao-mo-duoc/S%C3%A1u_C%C4%83n_v%C3%A0_Gi%E1%BA%A3i_Tho%C3%A1t.png',
      readingContent,
      tableOfContents: [
        {
          id: 'i-ngai-a-nan-hoi-phat-troi-cot-o-cho-nao-va-lam-sao-mo-duoc',
          label: 'I. Ngài A Nan hỏi Phật: trói cột ở chỗ nào và làm sao mở được?',
        },
        { id: 'ii-phat-chi-cho-troi-cot-gut', label: 'II. Phật chỉ chỗ trói cột (gút)' },
        { id: 'luoc-giai-1', label: 'Lược giải', indent: 1 },
        {
          id: 'iii-a-nan-hoi-tai-sao-bi-sanh-tu-luan-hoi-hay-duoc-giai-thoat-cung-vi-sau-can',
          label: 'III. A Nan hỏi: vì sao sanh tử hay giải thoát cũng do sáu căn?',
        },
        { id: 'luoc-giai-2', label: 'Lược giải', indent: 1 },
        { id: 'luoc-giai-3', label: 'Lược giải', indent: 1 },
        { id: 'luoc-giai-4', label: 'Lược giải', indent: 1 },
        { id: 'iv-phat-noi-bai-ke-tom-lai-nghia-tren', label: 'IV. Phật nói bài kệ tóm lại nghĩa trên' },
        { id: 'nguyen-van-chu-han', label: 'Nguyên văn chữ Hán', indent: 1 },
        { id: 'dich-nghia-bai-ke', label: 'Dịch nghĩa bài kệ', indent: 1 },
        { id: 'luoc-giai-5', label: 'Lược giải', indent: 1 },
        { id: 'v-vong-het-thi-chon-hien', label: 'V. Vọng hết thì chơn hiện' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-11-ngai-a-nan-hoi-phat-troi-cot-o-cho-nao-va-lam-sao-mo-duoc/Untying_the_Knot.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/euzJ43mB2L0',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/0S2sV3HhEImmo7nXQ5Yjg4?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Ngài A Nan hỏi Phật: trói cột ở chỗ nào và làm sao mở được?',
    passPercentage: 70,
    questions,
  },
}

export default lesson
