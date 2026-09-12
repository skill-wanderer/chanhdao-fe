import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <p class="badge badge-free mb-4">Bản Đồ Tu Phật - Tập 2.1</p>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Luật Tông là con đường tu thứ nhất trong 10 tông phái của Phật giáo. Chủ trương cốt lõi: Hãy giữ gìn giới luật nghiêm chỉnh thì tâm sẽ định, trí tuệ sẽ phát sinh.</p>
    </div>
  </div>

  <h2 id="loi-noi-dau">Lời Nói Đầu: 10 Con Đường Tu Chuyên Môn</h2>
  
  <p>Trong tập thứ nhất của Bản đồ tu Phật, chúng tôi đã chỉ rõ con đường tu hành thông thường của quảng đại quần chúng và của giới Phật tử tại gia rồi. Bắt đầu từ tập hai này, chúng tôi sẽ tuần tự nói đến mười con đường tu chuyên môn của giới tu sĩ, tức là mười tông phái trong Phật giáo.</p>
  <p>Mặc dù trong giới Phật tử ngày nay có một số đông vì cuộc đời ràng buộc chưa thể có đủ thì giờ và hoàn cảnh để thực hành trọn vẹn một trong 10 tông phái trên, nhưng chúng ta hãy cứ tìm hiểu và làm theo được phần nào để gieo nhân, rồi một ngày kia, khi đã đủ nhân duyên hãy tu tập hoàn bị hơn.</p>
  
  <p><strong>10 tông phái được sắp đặt theo thứ tự sau:</strong></p>
  <ol>
    <li><strong>Luật tông</strong> (thuộc về Tiểu thừa và Đại thừa)</li>
    <li><strong>Tịnh độ tông</strong> (thuộc Đại thừa)</li>
    <li><strong>Thiền tông</strong> (thuộc cả Đại thừa và Tiểu thừa)</li>
    <li><strong>Duy thức tông</strong> (thuộc Đại thừa, cũng gọi là Pháp tướng tông)</li>
    <li><strong>Mật tông</strong> (thuộc Đại thừa, cũng gọi là Chơn ngôn tông)</li>
    <li><strong>Pháp hoa tông</strong> (thuộc Đại thừa, cũng gọi là Thiên thai tông)</li>
    <li><strong>Hoa nghiêm tông</strong> (thuộc Đại thừa, cũng gọi là Tánh không tông)</li>
    <li><strong>Tam luận tông</strong> (thuộc Đại thừa, cũng gọi là Tánh không tông)</li>
    <li><strong>Câu xá tông</strong> (thuộc Tiểu thừa, cũng gọi là Hữu tông)</li>
    <li><strong>Thành thật tông</strong> (thuộc Đại thừa)</li>
  </ol>

  <hr>

  <h2 id="duyen-khoi-lap-tong">I. Duyên Khởi Lập Tông</h2>
  <p>Tông này dùng Luật làm chỗ căn cứ, nên gọi Luật tông. Đức Phật khi còn tại thế, tùy căn cơ, tùy hoàn cảnh mà chế ra nhiều giới luật để răn dạy đệ tử, hóa độ chúng sinh.</p>
  <p>Sau khi Ngài nhập Niết bàn, ngài <strong>Ưu Ba Ly</strong> là vị tinh thông về giới luật, đứng lên pháp tọa trong kỳ kết tập kinh điển lần thứ nhất, để tụng đọc lại những giới luật mà Đức Phật đã chế ra. Lần kết tập này chưa biên chép thành kinh điển, nên ngài Ưu Ba Ly phải đọc đi đọc lại đến 80 lần, đến nỗi mỗi người trong hội nghị đều thuộc lòng (bát thập tụng luật).</p>
  <p>Đến đời Đường, ngài Đạo Tuyên luật sư nhận thấy bộ luật Tứ phần là thích hợp với căn cơ người Trung Hoa, nên đã căn cứ vào bộ luật này để lập ra Luật tông. Ngài Đạo Tuyên là người Chung Nam Sơn, nên người đời cũng gọi tông này là <strong>"Chung Nam Sơn tông"</strong>. Tông này thịnh hành hơn hết vì nó dung hòa cả Đại thừa lẫn Tiểu thừa.</p>

  <hr>

  <h2 id="tong-chi-va-dac-diem">II. Tông Chỉ Và Đặc Điểm Của Luật Tông</h2>
  <p>Nghiệp định đoạt tất cả đời sống của chúng ta. Nếu những nghiệp (thân, khẩu, ý) ấy được thanh tịnh, không tạo ra các điều ác, thì ta không thọ quả báo sinh tử luân hồi. Muốn các nghiệp được thanh tịnh thì ta phải giữ gìn giới luật.</p>
  
  <ul>
    <li>Giữ giới <strong>không sát nhân hại vật</strong>: hiện đời khỏi bị tù tội, về sau khỏi đọa trong ba đường dữ.</li>
    <li>Giữ giới <strong>không trộm cướp</strong>: hiện thời làm người lương thiện, đời sau không bị giật của cướp đồ.</li>
    <li>Giữ giới <strong>không tà dâm</strong>: hiện thời thành người tốt, gia đình hạnh phúc.</li>
    <li>Giữ giới <strong>không nói dối, nói ác</strong>: thì được sự kính trọng.</li>
    <li>Giữ giới <strong>không cờ bạc, rượu chè</strong>: thì trí huệ tăng trưởng.</li>
  </ul>

  <blockquote>
    <p>Nhờ giữ giới luật không làm các việc tội lỗi, nên tâm được "định", do tâm định nên phát sinh ra trí tuệ sáng suốt. Bởi thế nên trong ba môn vô lậu học (Giới, Định, Huệ), <strong>"Giới" đứng đầu hết cả</strong>.</p>
  </blockquote>

  <hr>

  <h2 id="cac-loai-gioi-luat">III. Các Loại Giới Luật</h2>
  <p>Giới luật có thể phân chia làm hai loại lớn là giới luật của Tiểu thừa và giới luật của Đại thừa.</p>

  <table>
    <thead>
      <tr>
        <th>Phân loại</th>
        <th>Mục đích & Ý nghĩa</th>
        <th>Gồm những giới nào?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Giới Tiểu Thừa</strong></td>
        <td>Tính cách tiêu cực, tự lợi, chỉ có mục đích chính là tránh tội lỗi cho riêng mình. (Cái lợi cho người chỉ là ảnh hưởng gián tiếp).</td>
        <td>Ngũ giới (5 giới), Bát quan trai giới (8 giới), Sa di giới (10 giới), Tỳ kheo giới (250 giới) và Tỳ kheo ni giới (348 giới).</td>
      </tr>
      <tr>
        <td><strong>Giới Đại Thừa</strong></td>
        <td>Tính cách tích cực, nhằm vào mục đích lợi tha hơn tự lợi.</td>
        <td>10 giới trọng và 48 giới khinh của Bồ tát, Tam tụ tịnh giới.</td>
      </tr>
    </tbody>
  </table>

  <h3>Nếu đứng về phương diện hành trì, giới luật chia làm 2 phần:</h3>
  <ul>
    <li><strong>1. Chỉ trì (Ngăn dứt ác nghiệp):</strong> Bao gồm các giới bản của Tỳ kheo (250 giới) và Tỳ kheo ni (348 giới). Các giới này gọi là Cụ túc giới.</li>
    <li><strong>2. Tác trì (Hành động theo thiện nghiệp):</strong> Gồm có 20 kiền độ (điều luật, phẩm loại) như: Thọ giới, Thuyết giới, An cư, Tự tứ v.v...</li>
  </ul>

  <hr>

  <h2 id="cac-danh-tu-phuong-phap">IV. Các Danh Từ Và Phương Pháp Thực Hành Cần Biết</h2>

  <h3>1. Danh, Chủng, Tính, Tướng</h3>
  <ul>
    <li><strong>Danh:</strong> Là tên chỉ mỗi giới (như bất sát sinh, bất thâu đạo).</li>
    <li><strong>Chủng:</strong> Là chủng loại hay nhóm (như Ba la di, Tăng tàng).</li>
    <li><strong>Tính:</strong> Tâm tính ở bên trong thanh tịnh, không nghĩ tưởng đến việc ác.</li>
    <li><strong>Tướng:</strong> Hình tướng bên ngoài không thực hiện những điều ác ấy.</li>
  </ul>

  <h3>2. Khai, Giá, Trì, Phạm</h3>
  <ul>
    <li><strong>Khai:</strong> Là mở, cho làm (linh động vì từ bi hay vì lợi ích chung, trị bệnh).</li>
    <li><strong>Giá:</strong> Là ngăn cấm, không cho làm.</li>
    <li><strong>Trì:</strong> Đã thọ giới mà giữ gìn cho được thanh tịnh.</li>
    <li><strong>Phạm:</strong> Đã thọ giới mà không giữ gìn giới.</li>
  </ul>

  <h3>3. Chỉ trì, Tác phạm và Tác trì, Chỉ phạm</h3>
  <ul>
    <li><strong>Chỉ trì:</strong> Về các điều ác quyết giữ gìn không gây tội lỗi.</li>
    <li><strong>Tác phạm:</strong> Các điều ác, đáng lẽ phải giữ gìn, mà lại làm.</li>
    <li><strong>Tác trì:</strong> Các điều thiện, cần phải làm, mới là giữ giới.</li>
    <li><strong>Chỉ phạm:</strong> Các điều thiện, nếu đình chỉ không làm, là phạm giới.</li>
  </ul>
  <p><em>Thí dụ: Về tội ăn trộm, nếu không làm là chỉ trì, nếu làm là tác phạm. Trái lại, về hạnh bố thí nếu làm là tác trì, nếu không làm là chỉ phạm.</em></p>

  <h3>4. Tính tội và Giá tội</h3>
  <ul>
    <li><strong>Tính tội:</strong> Là tội sẵn có trong bản tính chúng sinh (Sát, Đạo, Dâm, Vọng). <em>Tính giới</em> là giới ngăn ngừa 4 tội này.</li>
    <li><strong>Giá tội:</strong> Là tội không sẵn có trong bản tính, nhưng do hoàn cảnh, tập nhiễm mà phát sinh (như uống rượu). <em>Giá giới</em> là giới để ngăn ngừa các tội này. Muốn giữ được tính giới dễ dàng thì phải cần giữ giá giới.</li>
  </ul>

  <hr>

  <h2 id="ket-luan">V. Kết Luận</h2>
  <p>Phần nhiều các tông khác thì phải hiểu rồi mới tu, Luật tông trái lại, chủ trương : <strong>hãy tu đi rồi sẽ hiểu, hãy giữ gìn giới luật cho nghiêm chỉnh, thì tâm sẽ định tĩnh, thanh tịnh, tâm đã thanh tịnh, thì trí tuệ sẽ sáng suốt, chân tâm sẽ biện bày.</strong></p>
  
  <p>Thật là một chủ trương rất thiết thực, mà kết quả lại chắc chắn ! Những kẻ học rộng biết nhiều mà không giữ giới cũng chẳng khác gì ngọn đèn trước gió, có thể sáng lắm, nhưng không biết sẽ tắt khi nào. Trái lại, kẻ học ít biết hẹp mà giữ giới một cách chân thành, thì cũng như ngọn đèn có ống khói, khi mới thắp thì còn lu, nhưng không tắt và càng cháy lâu càng cháy tỏ.</p>
  
  <p>Vì những lý lẽ trình bày ở trên, Luật tông đều thích hợp với mọi căn cơ, nhất là với những căn cơ chậm lụt. Trong đệ tử của Phật, ngài Ưu Ba Ly đã trở thành một đại đệ tử của Phật, đã thành một bậc hiền thánh, chỉ vì đã nghiêm trì giới luật !</p>

  <blockquote>
    <p>Xin hãy tự trả lời mấy câu hỏi giản dị sau đây:<br>
    - Tu như thế này có cầu kỳ, xa thực tế không ?<br>
    - Đối với mình, con đường tu về Luật tông trong "Bản đồ tu Phật" này có cần thiết, thích hợp với mình không ?</p>
  </blockquote>

</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo tác giả Thích Thiện Hoa, tại sao giới Phật tử cần tìm hiểu về 10 tông phái mặc dù có thể chưa thực hiện trọn vẹn?",
    options: {
      a: "Vì đây là yêu cầu bắt buộc đối với tất cả Phật tử tại gia khi mới quy y.",
      b: "Vì chỉ có nghiên cứu 10 tông phái này mới có thể bắt đầu quá trình tu hành.",
      c: "Để có thể phân biệt và bài trừ các tông phái không phù hợp với văn hóa Việt Nam.",
      d: "Để có thể gieo nhân duyên và tránh sự mù mờ về các giáo phái của đạo Phật.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Tác giả viết: 'chúng ta không thể mù mờ về những giáo phái của đạo Phật được... hãy cứ tìm hiểu và làm theo được phần nào để gieo nhân, rồi một ngày kia, khi đã đủ nhân duyên hãy tu tập hoàn bị hơn.'",
    },
  },
  {
    question: "Trong danh sách 10 tông phái được sắp xếp theo nhu cầu của Phật tử Việt Nam, những tông nào được coi là thông cả Đại thừa và Tiểu thừa?",
    options: {
      a: "Luật tông và Thiền tông.",
      b: "Câu xá tông và Thành thật tông.",
      c: "Mật tông và Duy thức tông.",
      d: "Tịnh độ tông và Pháp hoa tông.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Tác giả nêu rõ: 'Tóm lại, trong 10 tông này, Luật tông và Thiền tông thông cả Đại thừa và Tiểu thừa'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Vị đại đệ tử nào của Đức Phật đã tụng đọc lại giới luật trong kỳ kết tập kinh điển lần thứ nhất, tạo tiền đề cho Luật tông?",
    options: {
      a: "Ngài Ưu Ba Ly.",
      b: "Ngài Xá Lợi Phất.",
      c: "Ngài A Nan.",
      d: "Ngài Đạo Tuyên.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Ngài Ưu Ba Ly là vị tinh thông về giới luật, đứng lên pháp tọa trong kỳ kết tập kinh điển lần thứ nhất, để tụng đọc lại những giới luật mà Đức Phật đã chế ra.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Luật tông của Ngài Đạo Tuyên còn được gọi là 'Chung Nam Sơn tông'?",
    options: {
      a: "Vì đây là tên bộ luật chính mà tông phái này sử dụng.",
      b: "Dựa theo tên của ngọn núi nơi Ngài Đạo Tuyên cư ngụ.",
      c: "Vì đây là tông phái chỉ dành cho những người tu hành ở vùng núi cao.",
      d: "Để ghi nhớ nơi Đức Phật lần đầu tiên thuyết về giới luật.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Ngài Đạo Tuyên là người Chung Nam Sơn, nên người đời cũng gọi tông này là Chung Nam Sơn tông để phân biệt với các Luật tông khác'.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong 'Ba môn vô lậu học', thứ tự mà giới luật được nhắc đến và vai trò của nó là gì?",
    options: {
      a: "Có vai trò độc lập và không liên quan đến Định hay Huệ.",
      b: "Đứng thứ hai, sau trí tuệ để kiểm soát hành vi.",
      c: "Đứng hàng đầu, là nền tảng để phát sinh Định và Huệ.",
      d: "Đứng cuối cùng, là kết quả sau khi đã có trí tuệ.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Bởi thế nên trong ba môn vô lậu học (giới, định, huệ), Giới đứng đầu hết cả... nhờ giữ giới luật... nên tâm được định, do tâm định nên phát sinh ra trí tuệ sáng suốt.'",
      d: "Sai.",
    },
  },
  {
    question: "Đặc điểm chính để phân biệt Giới luật Đại thừa với Giới luật Tiểu thừa là gì?",
    options: {
      a: "Giới Tiểu thừa chỉ dành cho người xuất gia, còn Đại thừa chỉ dành cho tại gia.",
      b: "Giới Đại thừa không bắt buộc phải giữ nghiêm chỉnh bằng giới Tiểu thừa.",
      c: "Đại thừa tập trung vào mục đích lợi tha (giúp người), trong khi Tiểu thừa thiên về tự lợi (tránh tội cho mình).",
      d: "Số lượng giới luật của Đại thừa nhiều hơn Tiểu thừa.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Giới Tiểu thừa: 'tính cách tiêu cực, tự lợi, chỉ có mục đích chính là tránh tội lỗi cho riêng mình'. Giới Đại thừa: 'tính cách tích cực, nhằm vào mục đích lợi tha hơn tự lợi'.",
      d: "Sai.",
    },
  },
  {
    question: "Thuật ngữ 'Khai' trong 'Khai, Giá, Trì, Phạm' có ý nghĩa như thế nào trong thực hành giới luật?",
    options: {
      a: "Là sự chấm dứt hoàn toàn một giới luật khi thấy không còn phù hợp.",
      b: "Là việc cố tình vi phạm giới luật vì lợi ích cá nhân.",
      c: "Linh động cho phép thực hiện một việc vốn bị cấm vì lý do từ bi hoặc hoàn cảnh đặc biệt.",
      d: "Là quy định bắt buộc mọi Phật tử phải thực hiện theo định kỳ.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Khai là mở, cho làm... Tuy thế, nếu vì lòng từ bi, vì lợi ích chung, hay vì trí tuệ thúc đẩy, thì có thể Khai mà không phạm tội.'",
      d: "Sai.",
    },
  },
  {
    question: "Sự khác biệt giữa 'Chỉ trì' và 'Tác trì' là gì?",
    options: {
      a: "Chỉ trì dành cho hàng Tiểu thừa, Tác trì dành cho hàng Đại thừa.",
      b: "Chỉ trì là giữ gìn bằng tâm, Tác trì là giữ gìn bằng thân.",
      c: "Chỉ trì là làm việc thiện, Tác trì là dừng việc ác.",
      d: "Chỉ trì là ngăn dứt ác nghiệp, Tác trì là chủ động hành động theo thiện nghiệp.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Một phần thuộc về chỉ trì, nghĩa là ngăn dứt ác nghiệp, một phần thuộc về tác trì, nghĩa là hành động theo thiện nghiệp.'",
    },
  },
  {
    question: "Tại sao 'Giá tội' (như uống rượu) lại cần được ngăn ngừa thông qua 'Giá giới'?",
    options: {
      a: "Vì Giá tội bản chất đã là tội ác từ vô thủy.",
      b: "Vì Giá tội là những quy định do xã hội đặt ra chứ không phải do Phật chế.",
      c: "Vì Giá tội gây ra quả báo nặng nề hơn Tính tội.",
      d: "Để hỗ trợ việc giữ gìn 'Tính giới' một cách dễ dàng hơn bằng cách ngăn chặn các duyên gây tội.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Nhưng muốn giữ được tính giới một cách ít khó khăn, phải cần giữ giá giới. Như người muốn đốn cây cổ thụ, trước tiên phải chặt dần ngành ngọn...'",
    },
  },
  {
    question: "Câu châm ngôn nào phản ánh đúng chủ trương thực hành của Luật tông so với các tông phái khác?",
    options: {
      a: "Trí tuệ là quan trọng nhất, giới luật chỉ là phương tiện tạm thời.",
      b: "Hiểu rõ giáo lý rồi mới bắt đầu tu tập.",
      c: "Chỉ cần hiểu tâm mình là đủ, không cần câu nệ hình thức giới luật.",
      d: "Tu đi rồi sẽ hiểu, giữ giới nghiêm chỉnh thì trí tuệ sẽ phát lộ.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Luật tông, trái lại, chủ trương : hãy tu đi rồi sẽ hiểu, hãy giữ gìn giới luật cho nghiêm chỉnh, thì tâm sẽ định tĩnh, thanh tịnh... trí tuệ sẽ sáng suốt...'",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-2-luat-tong-va-tinh-do-tong-luat-tong',
  slug: 'luat-tong',
  title: 'Luật Tông',
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
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-2-luat-tong-va-tinh-do-tong/tap-2.1-luat-tong/Lu%E1%BA%ADt_T%C3%B4ng__Gi%E1%BB%9Bi_V%C3%A0_Tu%E1%BB%87.png',
      readingContent,
      tableOfContents: [
        { id: 'loi-noi-dau', label: 'Lời nói đầu' },
        { id: 'duyen-khoi-lap-tong', label: 'I. Duyên khởi lập tông' },
        { id: 'tong-chi-va-dac-diem', label: 'II. Tông chỉ và đặc điểm' },
        { id: 'cac-loai-gioi-luat', label: 'III. Các loại giới luật' },
        { id: 'cac-danh-tu-phuong-phap', label: 'IV. Các danh từ và phương pháp' },
        { id: 'ket-luan', label: 'V. Kết luận' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-2-luat-tong-va-tinh-do-tong/tap-2.1-luat-tong/The_Path_of_Buddhist_Discipline.pdf',
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
    title: 'Câu hỏi ôn tập - Luật Tông',
    passPercentage: 70,
    questions,
  },
}

export default lesson