import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 5</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Duy Thức Tông (cũng gọi là Pháp Tướng Tông) phân tách vũ trụ, vạn hữu đều do thức biến hiện. Bài học sẽ phân tích chi tiết Bách Pháp, Tám Thức, Bốn Trí và Năm phép quán Duy thức.</p>
    </div>
  </div>

  <h2>DUY THỨC TÔNG (PHÁP TƯỚNG TÔNG)</h2>
  <p><strong>Con Đường Tu Thứ Tư Trong 10 Tông</strong></p>

  <p>Tất cả chúng sanh từ vô thỉ đến nay, vì chấp có thật ngã, thật pháp mà tạo ra các nghiệp, rồi bị các nghiệp dắt dẫn nên xoay vần mãi theo bánh xe sanh tử luân hồi.</p>

  <p>Nếu con người hiểu rõ một cách chắc chắn rằng tất cả các pháp trong vũ trụ, nhân và ngã, đều không thật có, chỉ do thức biến hiện như cảnh trong chiêm bao, mà không còn gây phiền não, tạo nghiệp chướng nữa, thì tất không còn bị ràng buộc trong bánh xe sanh tử luân hồi.</p>

  <p>Để phá trừ hai món chấp thật ngã và thật pháp, Đức Phật có rất nhiều phương pháp, có rất nhiều phép tu, mà Duy thức tông, hay Pháp tướng tông là một phép tu rất cần thiết, rất hiệu nghiệm để đi đến sự giải thoát.</p>

  <hr>

  <h3 id="dinh-nghia">I. ĐỊNH NGHĨA</h3>
  <p>Tông này thuộc về Đại thừa, phân tách vũ trụ, vạn hữu đều do thức biến hiện.</p>
  <ul>
    <li><strong>Pháp tướng tông:</strong> Không nói về tâm tánh chơn như, mà chỉ nói về tướng của thức. Tông này quán sát hành tướng của các pháp (7 thức trước, 51 món tâm sở, sắc pháp...) biến hiện từ thức A lại da, nên gọi là “Pháp tướng tông”.</li>
    <li><strong>Duy thức tông:</strong> Đứng về nguyên nhân sanh khởi, tông này chủ trương rằng vũ trụ vạn hữu đều là duy thức biến hiện, ngoài thức không có một yếu tố nào khác nữa.</li>
  </ul>

  <hr>

  <h3 id="duyen-khoi">II. DUYÊN KHỞI VÀ SỰ PHÁT TRIỂN CỦA DUY THỨC TÔNG</h3>
  <p>Duy thức tông căn cứ vào 6 bộ kinh (Giải thâm mật, Hoa nghiêm, Lăng nghiêm...) và 11 bộ luận (Du già sư địa, Hiển dương thánh giáo, Nhiếp đại thừa...) để thành lập.</p>
  
  <p>Vị sáng lập ra Duy thức chính là <strong>Bồ tát Di Lặc</strong>. Hai vị có công lớn phát triển tông này ở Ấn Độ là hai anh em ngài <strong>Vô Trước</strong> và ngài <strong>Thế Thân</strong> (tác giả <em>Duy thức tam thập tụng</em>). Đến đời Đường, ngài <strong>Huyền Trang</strong> sang Ấn Độ thỉnh kinh, mang Duy thức về Trung Hoa và dịch thành <em>Thành duy thức luận</em>.</p>

  <p>Về phương diện sách vở dạy Duy thức, có ba bộ được xem là chánh tông:</p>
  <ol>
    <li><strong>Đại thừa bá pháp minh môn luận:</strong> (Do ngài Thế Thân tạo) Giải thích 100 pháp và hai món vô ngã.</li>
    <li><strong>Duy thức tam thập tụng:</strong> (Do ngài Thế Thân tạo) Dùng 30 bài tụng giải thích về: 3 thức năng biến, 51 tâm sở, giải đáp nghi vấn và 5 địa vị tu Duy thức.</li>
    <li><strong>Bát thức quy củ tụng:</strong> (Do ngài Huyền Trang tạo) Dùng 12 bài tụng toát yếu nghĩa lý về 5 thức đầu, thức thứ 6, thức thứ 7 và thức thứ 8.</li>
  </ol>

  <hr>

  <h3 id="chu-truong">III. CHỦ TRƯƠNG CỦA DUY THỨC TÔNG</h3>
  <p>Chủ trương của Duy thức tông là phá trừ vọng chấp ngã, pháp (biến kế sở chấp), bằng cách chỉ cho chúng sanh thấy tất cả các pháp đều nương nơi thức hiện ra (y tha khởi), và mục đích cuối cùng là đưa chúng sanh trở về với tánh chân thật (viên thành thật).</p>
  <p>Thế giới hiện tượng này, như sơn hà, đại địa trong cảnh chiêm bao đều do tâm chiêm bao hiện ra. Khi biết cảnh vật trong chiêm bao là do tâm sanh ra thì không còn mê muội nữa. Nói vắn tắt: <strong>Quy vũ trụ vạn hữu trở về Duy thức tướng, rồi từ Duy thức tướng trở về Duy thức tánh (tâm chơn như).</strong></p>

  <hr>

  <h3 id="thanh-phan-hien-tuong">IV. THÀNH PHẦN CỦA HIỆN TƯỢNG GIỚI (100 PHÁP)</h3>
  <p>Vạn sự vạn vật trong vũ trụ dưới nhãn quan Duy thức học được phân ra thành 5 loại lớn (100 pháp):</p>

  <h4>1. Tâm vương (8 món)</h4>
  <p>Tâm vương là "tướng" của thức thuộc về tâm giới, làm chủ như một ông vua. Gồm 8 thức:</p>
  <ul>
    <li><strong>Năm thức trước:</strong> Nhãn thức, Nhĩ thức, Tỳ thức, Thiệt thức, Thân thức (thuộc giác quan bên ngoài).</li>
    <li><strong>Thức thứ sáu (Ý thức):</strong> Hoạt động lanh lợi, tính toán suy nghĩ thiện ác. Hoạt động cùng 5 thức trước gọi là <em>Ngũ câu ý thức</em>, hoạt động một mình gọi là <em>Đơn độc ý thức</em>.</li>
    <li><strong>Thức thứ bảy (Mạt na thức):</strong> Có công năng chấp ngã (tự động bảo thủ bản ngã) và làm căn bản cho Ý thức thứ sáu (Truyền tống thức).</li>
    <li><strong>Thức thứ tám (A lại da thức):</strong> Tàng thức (thức chứa), là cái kho vô tận chất chứa lại tất cả danh từ, hình ảnh, sự vật từ nhỏ đến lớn không mất đi.</li>
  </ul>
  <blockquote>
    <p>Bài kệ cổ nhân: "Anh em tám chú, một người si (thức 7) / Một mình ý thức rất tinh ranh (thức 6) / Năm chàng ngoài cửa lo buôn bán (5 thức trước) / Làm chủ trong nhà, thức Lại da."</p>
  </blockquote>

  <h4>2. Tâm sở (51 món)</h4>
  <p>Là tánh sở hữu, phụ thuộc dưới quyền sai sử của Tâm vương. Chia làm 6 loại:</p>
  <ol>
    <li><strong>Biến hành (5):</strong> Xúc, Tác ý, Thọ, Tưởng, Tư.</li>
    <li><strong>Biệt cảnh (5):</strong> Dục, Thắng giải, Niệm, Định, Huệ.</li>
    <li><strong>Thiện (11):</strong> Tín, Tàm, Quý, Vô tham, Vô sân, Vô si, Tinh tấn, Khinh an, Bất phóng dật, Hành xả, Bất hại.</li>
    <li><strong>Căn bản phiền não (6):</strong> Tham, Sân, Si, Mạn, Nghi, Ác kiến.</li>
    <li><strong>Tùy phiền não (20):</strong> Phẫn, Hận, Phú, Não... (là ngọn sanh từ căn bản phiền não).</li>
    <li><strong>Bất định (4):</strong> Hối, Miên, Tầm, Tư.</li>
  </ol>

  <h4>3. Sắc pháp (11 món)</h4>
  <p>Những pháp có chướng ngại, gồm sự phối hợp của 5 căn (nhãn, nhĩ, tỷ, thiệt, thân) và 6 trần (sắc, thanh, hương, vị, xúc, pháp trần).</p>

  <h4>4. Bất tương ưng hành pháp (24 món)</h4>
  <p>Không thuộc về sắc cũng không thuộc tâm, nhưng phải nương vào sắc và tâm mới có. Thí dụ: "đắc" (được), sanh, trụ, dị, diệt, phương, thế...</p>

  <h4>5. Vô vi pháp (6 món)</h4>
  <p>Là pháp không sanh, không diệt, tức là thể tánh chơn như. Gồm: Hư không vô vi, Trạch diệt vô vi, Phi trạch diệt vô vi, Bất động vô vi, Tưởng thọ diệt vô vi, Chơn như vô vi.</p>

  <hr>

  <h3 id="phuong-phap-tu">V. PHƯƠNG PHÁP TU (NGŨ TRÙNG DUY THỨC QUÁN)</h3>
  <p>Phương pháp tu Duy thức là thực hành năm phép quán từ thô đến tế để cuối cùng chỉ còn thấy thức tánh:</p>
  <ol>
    <li><strong>Khiển hư, tồn thật:</strong> Bỏ cái hư giả (vọng chấp ngã, pháp), lưu lại cái chơn thật (tánh y tha khởi, viên thành thật).</li>
    <li><strong>Xả lạm lưu thuần:</strong> Bỏ cái lộn lạo (cảnh nội tâm/tướng phần) mà giữ lại cái thuần túy (tâm năng duyên/kiến phần).</li>
    <li><strong>Nhiếp mạt quy bổn:</strong> Đem cái ngọn (kiến phần, tướng phần) trở về gốc (tự chứng phần - thể tánh).</li>
    <li><strong>Ẩn liệt, hiển thắng:</strong> Giấu cái liệt (51 món tâm sở) làm hiển lộ cái thắng (8 món tâm vương).</li>
    <li><strong>Khiển tướng chứng tánh:</strong> Bỏ sự tướng của thức để trở về với lý tánh của thức, chứng nhập chơn như.</li>
  </ol>
  <p>Ngoài ra, hằng ngày hành giả cần <strong>kiểm điểm nội tâm</strong>: nuôi dưỡng thiện tâm sở và diệt trừ phiền não tâm sở.</p>

  <hr>

  <h3 id="nam-dia-vi">VI. NĂM ĐỊA VỊ HÀNH GIẢ PHẢI TRẢI QUA</h3>
  <ol>
    <li><strong>Vị Tư lương:</strong> Thời gian chuẩn bị lương thực (phát tâm cầu an trụ Duy thức tánh).</li>
    <li><strong>Vị Gia hạnh:</strong> Gia công tấn hành, còn thấy mình an trụ tức là còn sở đắc.</li>
    <li><strong>Vị Thông đạt:</strong> Cảnh sở quán và trí năng quán đều không, xa lìa 2 món thủ.</li>
    <li><strong>Vị Tu tập:</strong> Hành giả đang tu tập, lìa 2 món thô trọng, chứng chuyển y (Bồ đề, Niết bàn).</li>
    <li><strong>Vị Cứu cánh:</strong> Quả vị rốt ráo (quả Phật), cảnh giới vô lậu bất tư nghị.</li>
  </ol>

  <hr>

  <h3 id="ket-qua">VII. KẾT QUẢ TU CHỨNG (CHUYỂN 8 THỨC THÀNH 4 TRÍ)</h3>
  <p>Hành giả tu luyện thành công sẽ chuyển đổi 8 thức thành 4 trí:</p>
  <ul>
    <li><strong>1. Thành sở tác trí (chuyển 5 thức đầu):</strong> Trí có công năng thị hiện thần thông biến hóa để độ sanh.</li>
    <li><strong>2. Diệu quán sát trí (chuyển thức thứ 6):</strong> Trí quán sát mầu nhiệm thấy được hằng sa thế giới và tâm niệm chúng sanh.</li>
    <li><strong>3. Bình đẳng tánh trí (chuyển thức thứ 7):</strong> Không còn chấp ngã, thấy mình và chúng sanh bình đẳng như nhau, sanh tâm đại từ bi.</li>
    <li><strong>4. Đại viên cảnh trí (chuyển thức thứ 8):</strong> Thức thứ tám trở thành tấm gương lớn trong sáng phản chiếu khắp mười phương.</li>
  </ul>
  <p>Bốn trí này gom lại thành 2 trí lớn: <strong>Căn bản trí</strong> (trí thể sẵn có vô phân biệt) và <strong>Hậu đắc trí</strong> (trí dụng sai biệt sau khi chứng quả).</p>

  <hr>

  <h3 id="loi-ich">VIII. LỢI ÍCH THIẾT THỰC KHI HỌC VÀ TU DUY THỨC</h3>
  <ul>
    <li><strong>Biết rõ mình:</strong> Phân tích tỉ mỉ nội tâm, thấy rõ tâm niệm xấu để diệt, tâm niệm tốt để bồi dưỡng.</li>
    <li><strong>Thấy được chính phủ nội tâm:</strong> Biết cách điều hòa bộ máy liên bang nội tâm (Thức thứ 8 là Tổng thống, Tâm vương, Tâm sở là các viên quan) để đạt thái bình.</li>
    <li><strong>Trau dồi kiên nhẫn:</strong> Học Duy thức đòi hỏi sự kiên nhẫn tột độ để phân tích phiền toái.</li>
    <li><strong>Giữ bình tĩnh tự tại:</strong> Biết cõi đời giả tạm do thức biến, bớt khổ đau kêu than khi gặp nghịch cảnh.</li>
    <li><strong>Nắm vững lòng tin:</strong> Tin tưởng mạnh mẽ vào tôn giáo dựa trên thực nghiệm nội tâm.</li>
  </ul>

  <h3>IX. KẾT LUẬN</h3>
  <p>Duy thức học vạch trần sáu đầu đảng giặc cướp (Căn bản phiền não) và 20 tên bộ hạ (Tùy phiền não) đã phá hại chúng ta vô tận. Nếu quyết tâm diệt trừ chúng và bồi dưỡng các anh hùng nghĩa sĩ (11 Thiện tâm sở), một khi tâm niệm xấu tiêu diệt, tánh tốt đầy đủ, chúng ta sẽ thành Phật quả.</p>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Mục đích chính của Duy thức tông khi đề ra các phép tu là gì?",
    options: {
      a: "Phá trừ hai món chấp thật ngã và thật pháp.",
      b: "Tìm cầu sự trường sinh bất tử thông qua thiền định.",
      c: "Xây dựng một hệ thống triết học lý luận về vật chất.",
      d: "Chỉ đơn thuần nghiên cứu về lịch sử các bộ kinh Phật.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Để phá trừ hai món chấp thật ngã và thật pháp, Đức Phật có rất nhiều phương pháp... Duy thức tông là một phép tu rất cần thiết...'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Vì sao tông này còn được gọi là 'Pháp tướng tông'?",
    options: {
      a: "Vì nó quan sát và phân tích hành tướng của các món tâm pháp, sắc pháp biến hiện từ thức.",
      b: "Vì nó chỉ tập trung vào việc thờ cúng các hình tượng Phật.",
      c: "Vì đây là tông phái chuyên về việc đặt ra các luật lệ khắt khe.",
      d: "Vì tông này chỉ công nhận các hiện tượng vật lý là có thật.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Tông này quán sát hành tướng của các pháp ấy (7 thức trước, 51 món tâm sở, sắc pháp...), nên gọi là Pháp tướng tông.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Ai được coi là vị sáng lập ra Duy thức tông?",
    options: {
      a: "Ngài Huyền Trang",
      b: "Bồ tát Di Lặc",
      c: "Ngài Khuy Cơ",
      d: "Bồ tát Thế Thân",
    },
    answer: "b",
    explanation: {
      a: "Sai. Huyền Trang truyền sang Trung Hoa.",
      b: "Đúng. 'Vị sáng lập ra Duy thức chính là Bồ tát Di Lặc. Đức Di Lặc sau khi tu chứng được Duy thức, đã ứng theo lời thỉnh cầu của ngài Vô Trước, nói luận Du già sư địa.'",
      c: "Sai.",
      d: "Sai. Thế Thân có công phát triển.",
    },
  },
  {
    question: "Thức thứ bảy (Mạt na thức) có công năng chủ yếu nào sau đây?",
    options: {
      a: "Suy tính, lanh lợi và tạo ra các nghiệp thiện ác rõ rệt nhất.",
      b: "Chấp ngã và làm căn bản cho Ý thức thứ sáu.",
      c: "Tích chứa tất cả các hạt giống (chủng tử) kinh nghiệm từ quá khứ.",
      d: "Tiếp xúc với năm trần bên ngoài để phân biệt màu sắc, âm thanh.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là Thức 6.",
      b: "Đúng. 'Thức thứ bảy này có hai công năng: Chấp ngã; Làm căn bản cho Ý thức thứ sáu.'",
      c: "Sai. Đây là Thức 8.",
      d: "Sai. Đây là 5 thức đầu.",
    },
  },
  {
    question: "Trong hệ thống 100 pháp, 'Sắc pháp' bao gồm những thành phần nào?",
    options: {
      a: "Các trạng thái tâm lý lành như Tín, Tàm, Quý.",
      b: "Sự phối hợp của năm căn và sáu trần (tổng cộng 11 pháp).",
      c: "8 món Tâm vương và 51 món Tâm sở.",
      d: "24 món bất tương ưng và 6 món vô vi.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Sắc pháp là sự phối hợp của năm căn và sáu trần, cộng tất cả là 11 pháp.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tầng quán thứ hai trong 'Ngũ trùng duy thức quán' là gì?",
    options: {
      a: "Khiển hư tồn thật (Bỏ cái hư giả, giữ cái chân thật).",
      b: "Xả lạm lưu thuần (Bỏ cái lộn lạo, giữ cái thuần túy).",
      c: "Khiển tướng chứng tánh (Bỏ thức tướng về thức tánh).",
      d: "Nhiếp mạt quy bổn (Đem cái ngọn trở về gốc).",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là tầng quán 1.",
      b: "Đúng. Tầng 2 là Xả lạm lưu thuần (Bỏ cái lộn lạo, lưu lại cái thuần túy). Bỏ cảnh (tướng phần) giữ lại tâm (kiến phần).",
      c: "Sai. Đây là tầng 5.",
      d: "Sai. Đây là tầng 3.",
    },
  },
  {
    question: "Khi chứng được quả vị Phật, thức thứ tám (A lại da thức) sẽ chuyển thành trí gì?",
    options: {
      a: "Thành sở tác trí",
      b: "Bình đẳng tánh trí",
      c: "Diệu quán sát trí",
      d: "Đại viên cảnh trí",
    },
    answer: "d",
    explanation: {
      a: "Sai. 5 thức đầu.",
      b: "Sai. Thức 7.",
      c: "Sai. Thức 6.",
      d: "Đúng. 'Đến khi nhờ tu hành, chứng được Duy thức tánh, thức thứ tám này trở thành như một cái gương lớn... phản chiếu khắp mười phương, nên gọi là Đại viên cảnh trí.'",
    },
  },
  {
    question: "Địa vị thứ ba trong năm giai đoạn tu Duy thức là 'Vị Thông đạt'. Trạng thái của hành giả ở giai đoạn này được mô tả như thế nào?",
    options: {
      a: "Đang chuẩn bị lương thực cho chuyến đi xa.",
      b: "Vẫn còn bị hai món chấp ngã và chấp pháp che lấp hoàn toàn.",
      c: "Cảnh sở quán và trí năng quán đều không, xa lìa hai món thủ.",
      d: "Đã hoàn toàn đạt đến quả vị Phật rốt ráo.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Vị Tư lương.",
      b: "Sai.",
      c: "Đúng. 'Vị Thông đạt... Nhược thời ư sở duyên / Trí độ vô sở đắc... Bao giờ cảnh sở quán và trí năng quán đều không, khi đó mới an trụ nơi Duy thức tánh.'",
      d: "Sai. Vị Cứu cánh.",
    },
  },
  {
    question: "Nhóm 'Tùy phiền não tâm sở' gồm có bao nhiêu pháp?",
    options: {
      a: "51 pháp",
      b: "11 pháp",
      c: "20 pháp",
      d: "6 pháp",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là tổng số tâm sở.",
      b: "Sai. Đây là Thiện tâm sở.",
      c: "Đúng. 'Tùy phiền não tâm sở gồm có 20 pháp là: Phẫn, Hận, Phú, Não, Tật, Xan...'",
      d: "Sai. Đây là Căn bản phiền não.",
    },
  },
  {
    question: "Theo Duy thức tông, sự khác biệt giữa 'Căn bản trí' và 'Hậu đắc trí' là gì?",
    options: {
      a: "Căn bản trí là trí của năm thức đầu, Hậu đắc trí là trí của thức thứ tám.",
      b: "Căn bản trí chỉ dành cho phàm phu, còn Hậu đắc trí dành cho Phật.",
      c: "Hậu đắc trí có trước để làm nền tảng tìm ra Căn bản trí.",
      d: "Căn bản trí là trí tuệ có sẵn (thể), còn Hậu đắc trí là trí tuệ sau khi chứng quả (dụng).",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Căn bản trí: Tức là trí thể, chư Phật và chúng sanh đều sẵn có. Hậu đắc trí: Tức là trí dụng. Sau khi chứng quả Thánh, được Căn bản trí rồi mới được Hậu đắc trí.'",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-5-duy-thuc-tong-duy-thuc-tong',
  slug: 'duy-thuc-tong',
  title: 'Duy Thức Tông',
  type: 'article',
  status: 'published',
  order: 1,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-5-duy-thuc-tong/H%C3%A0nh_Tr%C3%ACnh_Duy_Th%E1%BB%A9c_T%C3%B4ng.png',
      readingContent,
      tableOfContents: [
        { id: 'dinh-nghia', label: 'I. Định Nghĩa' },
        { id: 'duyen-khoi', label: 'II. Duyên Khởi Lập Tông' },
        { id: 'chu-truong', label: 'III. Chủ Trương' },
        { id: 'thanh-phan-hien-tuong', label: 'IV. Thành Phần Hiện Tượng Giới' },
        { id: 'phuong-phap-tu', label: 'V. Phương Pháp Tu (Ngũ Trùng Duy Thức Quán)' },
        { id: 'nam-dia-vi', label: 'VI. Năm Địa Vị' },
        { id: 'ket-qua', label: 'VII. Kết Quả Tu Chứng' },
        { id: 'loi-ich', label: 'VIII. Lợi Ích Thiết Thực' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-5-duy-thuc-tong/Universe_of_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/zmiFsOsi-MU',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/32zwJa9nzK50pMSSkdQhjn',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Duy Thức Tông',
    passPercentage: 70,
    questions,
  },
}

export default lesson