import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 2.2</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Tịnh Độ Tông là một đại lộ bằng phẳng, hành giả dễ đi mà mau đến, bất luận hạng người nào, trong hoàn cảnh nào cũng có thể tu chứng được. Bài học sẽ hướng dẫn chi tiết 3 yếu tố cốt lõi: Tín - Hạnh - Nguyện.</p>
    </div>
  </div>

  <h2>TỊNH ĐỘ TÔNG</h2>
  <p><strong>HT. Thích Thiện Hoa</strong></p>

  <p>Con đường tu thứ hai trong mười tông là Tịnh độ tông. Tông này thuộc về Đại thừa, chủ trương dạy người chuyên tâm niệm Phật để được vãng sanh về cảnh Tịnh độ của Phật A Di Đà. Do đó, tông này mới có tên là Tịnh độ tông.</p>

  <p>Đây là một trong nhiều pháp môn của Phật, mà đặc điểm là dễ tu, dễ chứng, rất thích hợp với đại đa số quần chúng. Với pháp môn này, bất luận hạng người nào, trong thời gian nào, hoàn cảnh nào, cũng có thể tu chứng được cả. Nếu đem so sánh với con đường đi, thì tông này là một đại lộ bằng phẳng, rộng rãi mát mẻ, hành giả dễ đi mà mau đến, không sợ gặp nguy hiểm chướng ngại giữa đường.</p>

  <hr>

  <h2 id="duyen-khoi">I. Duyên Khởi Lập Tông</h2>
  <p>Tịnh độ tông căn cứ vào những kinh điển gì để thành lập? Ở đây chúng tôi chỉ xin nêu lên "Ba kinh Tịnh độ" chính:</p>
  <ol>
    <li><strong>Kinh Vô lượng thọ:</strong> Kinh này chép lại 48 lời thệ nguyện của Đức A Di Đà, khi còn là Tỳ-kheo Pháp Tạng. Ngài nguyện lập ra một quốc độ trang nghiêm thanh tịnh để tiếp dẫn chúng sanh trong mười phương thế giới về đó.</li>
    <li><strong>Kinh Quán vô lượng thọ:</strong> Kinh này chép rõ 16 phép quán và 9 phẩm, để được vãng sanh về cõi Tịnh độ.</li>
    <li><strong>Kinh Tiểu bổn A Di Đà:</strong> Kinh này lược tả cảnh giới cõi Cực lạc trang nghiêm khiến người sinh lòng ham mộ, phát nguyện tu theo pháp môn "trì danh niệm Phật" cho đến "nhất tâm bất loạn".</li>
  </ol>
  <p>Giáo điển về Tịnh độ truyền qua Trung Hoa rất sớm, nhưng đến đời Đông Tấn nhờ ngài <strong>Huệ Viễn đại sư</strong> ra công hoằng dương, tông này mới bắt đầu thịnh hành. Ngài là vị Tổ đầu tiên ở Trung Hoa.</p>

  <hr>

  <h2 id="bon-loai-tinh-do">II. Bốn Loại Tịnh Độ</h2>
  <p>Đứng về phương diện tính chất, từ tế đến thô, có thể chia làm bốn loại Tịnh độ sau đây:</p>

  <h3>1. Thường tịch quang Tịnh độ</h3>
  <p>Đây là cảnh giới mà Pháp thân Phật an trụ. "Thường" là không sanh diệt (Pháp thân), "Tịch" là xa lìa phiền não vọng nhiễm (Giải thoát), "Quang" là chiếu sáng khắp mười phương (Bát-nhã). Cảnh giới này không có hình sắc mà chỉ là chơn tâm.</p>

  <h3>2. Thật báo trang nghiêm Tịnh độ</h3>
  <p>Hành giả trải qua ba vô số kiếp tích công lũy đức, do phước báo tu hành dồn chứa lại làm trang nghiêm cảnh giới. Đây là chỗ ở của Báo thân Phật và các bậc đại Bồ-tát (từ Thập địa đến Đẳng giác).</p>

  <h3>3. Phương tiện hữu dư Tịnh độ</h3>
  <p>Cảnh Tịnh độ này không phải là cứu cánh rốt ráo, mà chỉ là phương tiện của hàng Nhị thừa. Các vị này đã dứt được kiến hoặc và tư hoặc, nhưng còn dư lại vô minh hoặc và trần sa hoặc chưa trừ được, nên gọi là "hữu dư".</p>

  <h3>4. Phàm thánh đồng cư Tịnh độ</h3>
  <p>Đây tức là cõi Cực lạc của Phật A Di Đà ở Tây phương. Vì nơi đây Phật, Bồ-tát (Thánh) cùng sống chung với các chúng sinh mới vãng sanh chưa chứng quả thánh (Phàm) nên gọi là "Phàm thánh đồng cư Tịnh độ".</p>

  <hr>

  <h2 id="ba-yeu-to">III. Ba Yếu Tố Để Cầu Sanh Về Tịnh Độ</h2>
  <p>Muốn được vãng sanh về cõi Tịnh độ, hành giả phải chuẩn bị đủ ba yếu tố (ba món tư lương) là: <strong>Tín, Nguyện và Hành</strong>.</p>

  <h3>1. Thế nào là Tín?</h3>
  <p>Tín là đức tin vững chắc, không gì lay chuyển được. Kinh Hoa Nghiêm có dạy: <em>"Tin là mẹ sanh ra các công đức"</em>. Tin có ba phần:</p>
  <ul>
    <li><strong>Tin Phật:</strong> Tin lời dạy của Đức Phật Thích Ca không hư dối, Đức Phật A Di Đà và cảnh Tịnh độ đều có thật.</li>
    <li><strong>Tin Pháp:</strong> Tin pháp môn niệm Phật là pháp môn dễ tu, dễ chứng, 48 lời nguyện của Phật A Di Đà có đầy đủ hiệu lực để cứu độ chúng sanh.</li>
    <li><strong>Tin mình:</strong> Tin mình có đầy đủ khả năng và nghị lực tu theo pháp môn này, chuyên trì danh hiệu cho đến "nhất tâm bất loạn" thì khi lâm chung chắc chắn được vãng sanh.</li>
  </ul>

  <h3>2. Thế nào là Nguyện?</h3>
  <p>Nguyện là động cơ thúc đẩy cho người tu hành mau đến mục đích. Hành giả phải lập nguyện cho vững bền, thiết tha mong cầu được sanh về cõi Tịnh độ.</p>
  <blockquote>
    <p>Trong 48 lời nguyện của Phật A Di Đà: "Sau khi ta thành Phật, chúng sanh ở mười phương, một lòng tin ưa, muốn về cõi ta, từ một niệm cho đến mười niệm, nếu không đặng vãng sanh, thời ta thề không thành bậc Chánh giác, chỉ trừ những người phạm tội ngũ nghịch và chê bai Chánh pháp".</p>
  </blockquote>

  <h3>3. Thế nào là Hành?</h3>
  <p>Hành là thực hành, làm theo. Nếu tin (tín) mà không ước ao (nguyện) thì vô bổ. Nhưng ước ao (nguyện) mà không làm (hành) thì ảo huyền. Bởi thế, <strong>tín, nguyện, hành</strong> bao giờ cũng phải có đủ như cái đảnh ba chân.</p>

  <hr>

  <h2 id="phuong-phap">IV. Phương Pháp Tu Về Tịnh Độ</h2>
  <p>Niệm Phật có nhiều cách, tựu trung có 5 phương pháp chính:</p>

  <ol>
    <li><strong>Trì danh niệm Phật:</strong> Chuyên tâm trì niệm danh hiệu "Nam mô A Di Đà Phật" không cho xen hở khi đi, đứng, nằm, ngồi.</li>
    <li><strong>Tham cứu niệm Phật:</strong> Quán sát câu niệm Phật từ đâu mà đến, đến rồi sẽ đi về đâu? Phép này giống như tham cứu "thoại đầu" bên Thiền tông.</li>
    <li><strong>Quán tượng niệm Phật:</strong> Ngồi trước tượng Phật, chú tâm chiêm ngưỡng các tướng tốt mà liên tưởng đến các đức tánh của Phật. Quán huệ trừ Si, quán từ bi trừ Sân. Tâm hành giả sẽ lọc sạch ý niệm ác độc và giống tâm Phật.</li>
    <li><strong>Quán tưởng niệm Phật:</strong> Không có tượng trước mặt nhưng vẫn nhắm mắt quán tưởng Đức Phật Di Đà phóng hào quang bao phủ thân mình.</li>
    <li><strong>Thật tướng niệm Phật:</strong> Là pháp niệm Phật đạt đến bản thể chơn tâm không sanh diệt. Bốn phép trước thuộc về Sự (có niệm có tu), phép thứ năm thuộc về Lý (không năng sở). Khi tu 4 phép đầu thuần thục, vọng tưởng dứt sạch, chỉ còn một tâm yên lặng chiếu soi, kinh Di Đà gọi là <em>"được nhất tâm bất loạn"</em>.</li>
  </ol>

  <hr>

  <h2 id="loi-ich">V. Lợi Ích Của Phép Niệm Phật</h2>

  <h3>1. Lợi ích về sự:</h3>
  <ul>
    <li><strong>Trừ các phiền não:</strong> Thay vì nhớ nghĩ khổ đau, ta đem tâm nhớ Phật. <em>"Một câu niệm Phật giải oan khiên".</em></li>
    <li><strong>Trừ niệm chúng sanh:</strong> Khi bận niệm Phật, ta không còn thì giờ nhớ nghĩ tham, sân, si hay làm việc ác.</li>
    <li><strong>Thân thể nhẹ nhàng an ổn:</strong> Tâm uất hận trút ra theo tiếng niệm, tâm định thì ăn ngon ngủ yên, yếu tim cũng mau bình phục.</li>
    <li><strong>Tâm trí sáng suốt:</strong> Nhờ tâm định tĩnh như ngọn đèn có ống khói không bị gió lay, nên trí huệ phát chiếu, học hành mau nhớ.</li>
    <li><strong>Khi lâm chung được vãng sanh:</strong> Được luôn luôn thấy Phật, nghe pháp, làm bạn với thánh hiền tăng.</li>
  </ul>

  <h3>2. Lợi ích về lý:</h3>
  <p>Khi niệm Phật "nhất tâm bất loạn", chơn tâm thanh tịnh hiện ra. Chơn tâm không sanh diệt là Thường, vắng lặng là Tịch, chiếu soi là Quang. Đó chính là cảnh <em>Thường tịch quang Tịnh độ</em>.</p>
  <p>Bởi thế nên kinh chép: <strong>"Tự tánh Di Đà, duy tâm Tịnh độ"</strong> là vậy.</p>

  <hr>

  <h2 id="ket-luan">VI. Kết Luận</h2>
  <p>Chúng ta đừng tưởng pháp môn Tịnh độ chỉ để cho những người căn trí thấp thỏi. Thật ra, vì nó dễ tu, dễ chứng nên rất nhiều vị Bồ-tát (như Văn-thù, Phổ Hiền, Quán Âm) và các Tổ sư các tông phái khác (như Thiên Thân, Trí Giả, Long Thọ) cũng đều thực hành pháp môn này để cầu sanh về Tịnh độ.</p>
  
  <blockquote>
    <p>Nếu chúng ta nhận thấy con đường này có giá trị thiết thực, lợi ích chắc chắn cho đời chúng ta, thì đừng chần chờ gì nữa. Hãy chuẩn bị ngay ba món tư lương là Tín, Nguyện, Hành. Với một quyết tâm không thối chuyển, chúng ta chắc chắn sẽ niệm Phật đến chỗ "Nhất tâm bất loạn".</p>
  </blockquote>

</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Tại sao tông phái này có tên gọi là 'Tịnh Độ tông'?",
    options: {
      a: "Vì tông này chỉ dành cho những người đã đạt được tâm thanh tịnh hoàn toàn.",
      b: "Vì tông này do Đức Phật A Di Đà trực tiếp thành lập tại Trung Hoa.",
      c: "Vì đây là tông phái duy nhất trong mười tông dạy về cách làm sạch môi trường sống.",
      d: "Vì tông này dạy người chuyên tâm niệm Phật để được vãng sanh về cảnh Tịnh độ.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. '...chủ trương dạy người chuyên tâm niệm Phật để được vãng sanh về cảnh Tịnh độ của Phật A Di Đà. Do đó, tông này mới có tên là Tịnh độ tông.'",
    },
  },
  {
    question: "Trong các loại Tịnh độ, 'Thường tịch quang Tịnh độ' được định nghĩa như thế nào?",
    options: {
      a: "Là cảnh giới mà Pháp thân Phật an trụ, không có hình sắc mà chỉ là chơn tâm.",
      b: "Là cõi dành cho các bậc Bồ-tát từ Thập địa đến Đẳng giác.",
      c: "Là cõi Cực lạc phương Tây nơi phàm phu và thánh nhân cùng cư ngụ.",
      d: "Là cõi Tịnh độ của hàng Nhị thừa đã dứt được kiến hoặc và tư hoặc.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Đây là cảnh giới mà Pháp thân Phật an trụ... Cảnh Tịnh độ này không có hình sắc mà chỉ là chơn tâm.'",
      b: "Sai. Đây là Thật báo trang nghiêm Tịnh độ.",
      c: "Sai. Đây là Phàm thánh đồng cư Tịnh độ.",
      d: "Sai. Đây là Phương tiện hữu dư Tịnh độ.",
    },
  },
  {
    question: "Bộ kinh nào sau đây được gọi là một trong 'Ba kinh Tịnh độ' chính?",
    options: {
      a: "Kinh Bát-nhã",
      b: "Kinh Tứ thập nhị chương",
      c: "Kinh Hoa Nghiêm",
      d: "Kinh Quán vô lượng thọ",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Ba kinh chính là: Kinh Vô lượng thọ, Kinh Quán vô lượng thọ, Kinh Tiểu bổn A Di Đà.",
    },
  },
  {
    question: "Yếu tố 'Tín' trong ba món tư lương bao gồm những niềm tin cụ thể nào?",
    options: {
      a: "Tin vào thế giới Cực lạc, tin vào 48 lời nguyện và tin vào sự giúp đỡ của tha nhân.",
      b: "Tin Phật, tin Pháp và tin mình.",
      c: "Tin vào kinh điển, tin vào phép quán và tin vào sự thần thông.",
      d: "Tin Phật, tin Tổ sư và tin vào nghiệp lực.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Tác giả chia 'Tín' làm 3 phần: a) Tin Phật, b) Tin Pháp, c) Tin mình.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Phương pháp 'Tham cứu niệm Phật' có đặc điểm gì nổi bật?",
    options: {
      a: "Hành giả tưởng tượng Đức Phật đang phóng hào quang bao phủ thân mình.",
      b: "Hành giả ngồi trước tượng Phật để chiêm ngưỡng các tướng tốt.",
      c: "Hành giả phải suy nghiệm, quán sát câu niệm Phật xem từ đâu đến và ai là người niệm.",
      d: "Hành giả chỉ cần niệm danh hiệu Phật liên tục từ khi thức đến khi ngủ.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là Quán tưởng niệm Phật.",
      b: "Sai. Đây là Quán tượng niệm Phật.",
      c: "Đúng. '...hành giả phải quán sát câu niệm Phật này, từ đâu mà đến, đến rồi sẽ đi về đâu? Niệm đây là ai niệm... Phép niệm Phật này giống như phép tham cứu câu thoại đầu bên Thiền tông.'",
      d: "Sai. Đây là Trì danh niệm Phật.",
    },
  },
  {
    question: "Theo tài liệu, lợi ích lớn nhất của việc niệm Phật đối với đời sau là gì?",
    options: {
      a: "Khi lâm chung được vãng sanh về Tịnh độ để tiếp tục tu hành cho đến quả Phật.",
      b: "Trở thành một vị Tổ sư nổi tiếng để hoằng dương chánh pháp.",
      c: "Được hưởng các lạc thú ở cõi trời sau khi qua đời.",
      d: "Được tái sanh làm người giàu sang và có trí tuệ thông minh.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Nhưng cái lợi ích lớn nhất là ở đời sau... sau khi lâm chung, sẽ sanh về Tịnh độ, được luôn luôn thấy Phật, nghe pháp... và có đủ nhiều thiện duyên để tiếp tục tu hành cho đến quả Phật.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao cõi Cực lạc của Phật A Di Đà được gọi là 'Phàm thánh đồng cư Tịnh độ'?",
    options: {
      a: "Vì nơi đây có cả Phật, Bồ-tát cùng sống chung với những chúng sinh mới vãng sanh chưa chứng quả thánh.",
      b: "Vì bất cứ ai ở cõi Ta-bà, dù thiện hay ác, đều có thể cư ngụ tại đó.",
      c: "Vì Phật A Di Đà đã dùng thần lực để biến phàm phu thành thánh nhân ngay lập tức khi họ vừa đặt chân đến.",
      d: "Vì cõi này nằm ở giữa ranh giới của cõi Phàm và cõi Thánh.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Vì Phật, Bồ-tát và các vị thượng thiện nhơn (thánh) cùng sống chung với các chúng sinh mới vãng sanh, chưa chứng được quả thánh (phàm) nên gọi là Phàm thánh đồng cư Tịnh độ.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khái niệm 'Thật tướng niệm Phật' được giải thích như thế nào?",
    options: {
      a: "Là phương pháp sử dụng chuỗi hạt để ghi nhớ số lần niệm Phật mỗi ngày.",
      b: "Là pháp niệm Phật đạt đến bản thể chơn tâm, không còn phân biệt năng sở, bỉ thử.",
      c: "Là cách niệm Phật bằng cách tập trung nhìn vào tướng lông trắng giữa chân mày của Phật.",
      d: "Là việc nghiên cứu các sự thật lịch sử về cuộc đời Đức Phật A Di Đà.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Thật tướng niệm Phật là pháp niệm Phật đã đạt đến bản thể chơn tâm. Chơn tâm không sanh diệt... không còn niệm, còn tu, không còn năng sở...'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Lời nguyện thứ nhất của Pháp Tạng Tỳ-kheo (trong ba lời nguyện được trích dẫn) nhấn mạnh điều kiện gì để được vãng sanh?",
    options: {
      a: "Phải là người nam, đã xuất gia và đoạn tuyệt hoàn toàn với thế sự.",
      b: "Phải tu hành khổ hạnh trong nhiều kiếp và thông thuộc tất cả kinh điển.",
      c: "Phải cúng dường thật nhiều tài bảo cho các cơ sở tự viện.",
      d: "Một lòng tin ưa, muốn về cõi Ngài, niệm từ một đến mười niệm.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. '...chúng sanh ở mười phương, một lòng tin ưa, muốn về cõi ta, từ một niệm cho đến mười niệm, nếu không đặng vãng sanh, thời ta thề không thành bậc Chánh giác...'",
    },
  },
  {
    question: "Tại sao việc niệm Phật lại giúp tâm trí sáng suốt và học hành mau nhớ?",
    options: {
      a: "Vì nhờ niệm Phật mà tâm trí được định tĩnh, giống như ngọn đèn có ống khói không bị gió lay động.",
      b: "Vì Đức Phật A Di Đà sẽ trực tiếp truyền dạy kiến thức cho người thường xuyên niệm danh hiệu Ngài.",
      c: "Vì danh hiệu Phật chứa đựng các mật mã kích hoạt não bộ phát triển vượt bậc.",
      d: "Vì người niệm Phật sẽ không cần phải học các môn học thế gian nữa.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Nhờ niệm Phật, tâm trí sẽ định tĩnh, như ngọn đèn có ống khói, không lay động. Do đó tâm trí sẽ phát chiếu, như ngọn đèn tỏa sáng vậy.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-2-luat-tong-va-tinh-do-tong-tinh-do-tong',
  slug: 'tinh-do-tong',
  title: 'Tịnh Độ Tông',
  type: 'article',
  status: 'published',
  order: 2,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-2-luat-tong-va-tinh-do-tong/tap-2.2-tinh-do-tong/%C4%90%E1%BA%A1i_L%E1%BB%99_Thanh_T%E1%BB%8Bnh_C%E1%BB%B1c_L%E1%BA%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'duyen-khoi', label: 'I. Duyên khởi lập tông' },
        { id: 'bon-loai-tinh-do', label: 'II. Bốn loại Tịnh Độ' },
        { id: 'ba-yeu-to', label: 'III. Ba yếu tố: Tín - Nguyện - Hành' },
        { id: 'phuong-phap', label: 'IV. Phương pháp tu' },
        { id: 'loi-ich', label: 'V. Lợi ích niệm Phật' },
        { id: 'ket-luan', label: 'VI. Kết luận' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-2-luat-tong-va-tinh-do-tong/tap-2.2-tinh-do-tong/The_Pure_Land_Path.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/AoUGcEmfUOI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3NNm2nIcpCzNNz4yxdqn7j',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Tịnh Độ Tông',
    passPercentage: 70,
    questions,
  },
}

export default lesson