import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <p class="badge badge-free mb-4">Bản Đồ Tu Phật - Tập 1</p>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Bài viết này thanh toán những quan niệm sai lầm và chật hẹp về chữ "Tu", nhằm giúp hành giả xác định một con đường tu học chân chính.</p>
    </div>
  </div>

  <h2 id="loi-noi-dau">Phần Mở Đầu: Thanh Toán Những Quan Niệm Sai Lầm</h2>
  
  <p>Chữ "tu" có lẽ là một chữ đã có từ lâu lắm trong danh từ của người Trung Hoa và Việt Nam. Thế mà cho đến ngày nay còn không biết bao nhiêu người, cả trong giới Phật tử lẫn người ngoài còn quan niệm chữ "Tu" một cách sai lầm, chật hẹp, mập mờ…</p>
  <p>Ít ai hiểu được một cách đúng đắn, toàn diện chữ "Tu". Người đứng ở khía cạnh này của chữ "Tu" công kích người đứng ở khía cạnh kia, cuối cùng không ai biết đâu là phải, đâu là trái, đâu là chánh, đâu là tà.</p>
  
  <h3 id="12-quan-niem">12 Quan Niệm Sai Lầm Cần Đả Phá</h3>
  
  <ol>
    <li>
      <strong>Trong thời khoa học, văn minh và vật chất này mà tu cái gì ?</strong>
      <p>Vật chất càng phát triển mạnh, thì tinh thần càng phải được đề cao, để giữ cán cân thăng bằng cho xã hội nhân loại, nếu không thì sự sụp đổ không thể tránh khỏi được.</p>
    </li>
    <li>
      <strong>Già mới tu, chứ còn trẻ mà tu cái gì ?</strong>
      <p>Người già hay trẻ gì cũng cần phải tu, và sự trẻ trung hăng hái cũng cần cho sự tu hành như cho bao nhiêu việc khác ở đời. Vả lại, chắc gì chúng ta còn có một tuổi già để tu hành ?</p>
    </li>
    <li>
      <strong>Những người tật nguyền, bệnh hoạn, côi cút mới tu ?</strong>
      <p>Tu cũng rất cần cho những người khỏe mạnh, có năng lực, có tài ba lỗi lạc, chứ không riêng cho hạng người tật nguyền, yếu đuối, côi cút…</p>
    </li>
    <li>
      <strong>Tu là phải xuất gia, chứ ở tại gia mà tu cái gì ?</strong>
      <p>Tu không phải chỉ có một hình thức là bỏ nhà đi ở chùa, mà chính ở đâu cũng tu được, tất cả mọi người đều cần phải tu.</p>
    </li>
    <li>
      <strong>Tu phải ở núi, ở non, ở am, ở cốc ?</strong>
      <p>Tưởng rằng tu là phải trốn đời. Tu như thế là đứng về phương diện tiêu cực. Chứ còn tu một cách tích cực, thì phải nhập thế, độ sanh.</p>
    </li>
    <li>
      <strong>Tu là phải ép xác, ăn chay nằm đất, ăn ngọ, ngủ ngồi…v.v, mới là chơn tu ?</strong>
      <p>Lấy những hình tướng không quan trọng hay sai lạc mà cho là chính yếu. Phật đâu có dạy tu là phải ép xác ? Chính Ngài là người đầu tiên bài xích lối tu này nhất.</p>
    </li>
    <li>
      <strong>Những người tuyệt cốc, chỉ ăn hoa quả mới là chơn tu ?</strong>
      <p>Những người làm như hình thức trên, chẳng qua vì thiếu học, không biết nên tu như thế nào, vả lại có tánh lập dị.</p>
    </li>
    <li>
      <strong>Tu như ông đạo ớt, đạo sả… kia mới thật là chơn tu ?</strong>
      <p>Nếu ăn ớt chẳng hạn là chơn tu, thì những con chim con sáo, chim nhồng chắc đã thành Phật cả rồi.</p>
    </li>
    <li>
      <strong>Tu sao còn đau, còn uống thuốc ?</strong>
      <p>Mọi sinh vật trên đời đều phải tuân theo luật vô thường : Sinh, lão, bệnh, tử. Xác thân của Đức Phật cũng không vượt ra ngoài bốn trạng thái ấy.</p>
    </li>
    <li>
      <strong>Những người đi khất thực, đầu trần, chân không... mới thật là chơn tu.</strong>
      <p>Phật chế có đến 84.000 pháp môn, mà khất thực chỉ là một trong các hạnh. Trong giới luật không có giới nào cấm che dù, đội nón, mang guốc.</p>
    </li>
    <li>
      <strong>Chấp chặt pháp môn của mình tu là đúng, còn bao nhiêu pháp môn của người khác là sai.</strong>
      <p>Các quan niệm, thái độ trên đều là hiểu phiến diện hẹp hòi. Như người mù rờ voi, rờ được phần nào thì cho phần ấy là con voi.</p>
    </li>
    <li>
      <strong>Tu sẽ làm cho con người nhu nhược, dễ bị người lấn áp.</strong>
      <p>Thật ra, tu đâu có phải là khiếp nhược, đầu hàng, mà trái lại là hùng lực, là dõng mãnh, là tinh tấn, không sợ hy sinh.</p>
    </li>
  </ol>

  <hr>

  <h2 id="chuong-1">Chương I: Giải Thích Nghĩa Chữ "Tu"</h2>
  <p>"Tu" là một tiếng nguồn gốc chữ Hán, dịch nghĩa thông thường là <strong>"Sửa"</strong>. "Tu" có ba phương diện : <em>tu tâm, tu thân và tu bổ</em>.</p>
  <p>Đã nói là "Sửa" thì bất luận những cái gì xấu xa hư dở đều phải sửa:</p>
  <ul>
    <li><strong>Sửa cái dở thành hay :</strong> Bỏ cờ bạc, rượu trà... trở lại lo cho gia đình.</li>
    <li><strong>Sửa cái xấu trở lại cái tốt :</strong> Bỏ sát nhơn hại vật, dâm loạn, nói dối... trở lại nhơn từ, chân thật.</li>
    <li><strong>Sửa tà theo chánh :</strong> Bỏ mê tín, dị đoan... trở về chánh đạo.</li>
    <li><strong>Sửa quấy trở lại phải :</strong> Bỏ ngổ nghịch... trở lại hiếu đạo.</li>
    <li><strong>Sửa vọng thức thành Bốn trí :</strong> Chuyển thức thứ tám thành Đại viên cảnh trí, thức thứ bảy thành Bình đẳng tánh trí...</li>
    <li><strong>Sửa phiền não thành Bồ đề :</strong> Bỏ tham lam, sân hận, si mê trở lại thành Bồ đề thanh tịnh.</li>
    <li><strong>Sửa chúng sanh thành Phật :</strong> Chuyển vô thường, chấp ngã, bất tịnh, phiền não thành bốn đức Niết bàn : Thường, Lạc, Ngã, Tịnh.</li>
  </ul>

  <hr>

  <h2 id="chuong-2">Chương II: Con Đường Tu Thông Thường Của Quảng Đại Quần Chúng</h2>
  
  <h3>1. Trong phạm vi cá nhân</h3>
  <p>Đối với họ, "tu" cả ba phương diện : Đức, Trí và Thể.</p>
  <ul>
    <li><strong>Đức:</strong> Sửa chữa những tật xấu (tham lam, sân hận...) và thay thế bằng từ bi, hỷ xả, nhẫn nhục.</li>
    <li><strong>Trí:</strong> Trau giồi trí tuệ, mở mang kiến thức.</li>
    <li><strong>Thể:</strong> Luyện tập thân thể khỏe mạnh.</li>
    <li><strong>Tu bổ:</strong> Sửa sang nhà cửa, đồ đạc.</li>
  </ul>

  <h3>2. Trong phạm vi đoàn thể</h3>
  <p>Nếu muốn tồn tại và tiến triển, thì tu luyện cũng phải được xem là vấn đề chánh yếu.</p>
  <blockquote>
    <p>"Tâm có tu thân mới tốt, thân có tu thì gia đình mới được chỉnh đốn, gia đình có tu quốc gia mới thạnh trị, quốc gia có tu thì thế giới mới hòa bình an lạc."</p>
  </blockquote>

  <hr>

  <h2 id="chuong-3">Chương III: Con Đường Tu Thông Thường Của Phật Tử</h2>
  <p>Con đường tu này là phổ thông cho cả Phật tử tại gia lẫn xuất gia. Tùy theo tâm lượng mà lợi ích chia làm hai loại: <strong>Phước hữu lậu</strong> (thế gian, có hạn định) và <strong>Phước vô lậu</strong> (xuất thế gian, vô tận).</p>

  <table>
    <thead>
      <tr>
        <th>Phương Pháp Tu</th>
        <th>Phước Hữu Lậu (Tâm ô nhiễm/Cầu lợi)</th>
        <th>Phước Vô Lậu (Tâm thanh tịnh/Vì chánh đạo)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. Quy y</strong></td>
        <td>Cầu mạnh khỏe, theo phong trào, sợ mất lòng bạn bè.</td>
        <td>Trở về với Phật tánh sáng suốt, Pháp tánh từ bi, Tăng thanh tịnh.</td>
      </tr>
      <tr>
        <td><strong>2. Thọ giới</strong></td>
        <td>Bắt buộc, tự ái, kiêu hãnh hoặc vì danh lợi địa vị.</td>
        <td>Tránh tội lỗi, cầu giải thoát. Bảo vệ tự do, hạnh phúc cho cá nhân và xã hội.</td>
      </tr>
      <tr>
        <td><strong>3. Thờ Phật</strong></td>
        <td>Như thờ thần linh để cầu ban ơn giáng phước, mua may bán đắt.</td>
        <td>Cảm phục đức cao dày, thờ tấm gương cao quý (từ bi, trí tuệ) để noi theo.</td>
      </tr>
      <tr>
        <td><strong>4. Lạy Phật</strong></td>
        <td>Cầu cạnh, van xin Phật ban ân, thăng quan tiến chức.</td>
        <td>Để sửa mình, nép mình dưới đức độ đấng Giác ngộ, tỏ lòng tri ân sâu xa.</td>
      </tr>
      <tr>
        <td><strong>5. Cúng Phật</strong></td>
        <td>Lo lót, hối lộ hay chuộc tội, hoặc cúng vì khoe khoang giàu có.</td>
        <td>Tỏ lòng thành kính tri ân. Với lòng thành thì vật nhỏ mọn cũng thành quý báu.</td>
      </tr>
      <tr>
        <td><strong>6. Ăn chay</strong></td>
        <td>Đổi bữa, vì bệnh hoạn, cầu tài lộc, trả lời nguyền, tự ái thi đua.</td>
        <td>Vì lòng từ bi, không sát hại sinh vật, thể hiện đức tánh bình đẳng muôn loài.</td>
      </tr>
      <tr>
        <td><strong>7. Niệm Phật</strong></td>
        <td>Ích kỷ tiêu cực, hẹp hòi, chỉ cầu cho được lợi ích riêng mình.</td>
        <td>Xóa lấp tư tưởng xấu, nhắc nhở tánh Phật sáng suốt ngự trị sẵn trong ta.</td>
      </tr>
      <tr>
        <td><strong>8. Tụng Kinh</strong></td>
        <td>Cầu danh lợi, nghêu ngao hết giờ, miệng đọc tay quạt, thiếu lòng thành.</td>
        <td>Nhớ lời Phật dạy, cầu thanh tịnh ba nghiệp để sanh định phát huệ.</td>
      </tr>
      <tr>
        <td><strong>9. Trì chú</strong></td>
        <td>Trừ tà, trị bệnh, cầu tiêu tai giải ách (như phép thuật thần bí).</td>
        <td>Phương tiện để đoạn hoặc hiển chơn, giúp tâm định, phát huệ phá vô minh.</td>
      </tr>
      <tr>
        <td><strong>10. Sám hối</strong></td>
        <td>Cầu xin tha tội như với quan tòa rồi tái phạm. Sám hối để trả lễ.</td>
        <td>Thành thật ăn năn, quyết tâm bỏ lỗi trước và không tái phạm về sau.</td>
      </tr>
    </tbody>
  </table>

  <h3>Tổng Kết</h3>
  <p>Nếu chúng ta đem tâm niệm phiền não nhiễm ô (tham, sân, si…) mà tu hay làm các việc phước thiện, thì sẽ được phước báo <strong>hữu lậu</strong>, chỉ giàu sang phú quý ở trần gian.</p>
  <p>Trái lại, nếu chúng ta đem tâm niệm trong trắng, tốt đẹp, thanh tịnh, cao thượng (từ bi, trí huệ…vv) mà tu, thì sẽ được phước báu <strong>vô lậu thanh tịnh</strong>, hưởng hoài không hết.</p>
  <blockquote>
    <p>Đức Phật có dạy : "Biển khổ mênh mông, nhưng nếu chúng ta quay đầu lại, thì bờ giác ngộ ở đấy rồi".</p>
  </blockquote>

</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Dựa trên nội dung tài liệu, nghĩa thông thường và căn bản nhất của chữ 'Tu' là gì?",
    options: {
      a: "Trốn",
      b: "Đọc",
      c: "Cúng",
      d: "Sửa",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Tu là một tiếng nguồn gốc chữ Hán, dịch nghĩa thông thường là Sửa. Tu có ba phương diện : tu tâm, tu thân và tu bổ.'",
    },
  },
  {
    question: "Tác giả phản bác quan niệm 'Thời đại khoa học vật chất thì không cần tu' như thế nào?",
    options: {
      a: "Vật chất càng phát triển thì tinh thần càng cần được đề cao để giữ cán cân thăng bằng.",
      b: "Tu hành chỉ dành cho những người không tin vào khoa học thực nghiệm.",
      c: "Khoa học và tu hành là hai lĩnh vực hoàn toàn tách biệt, không liên quan đến nhau.",
      d: "Chỉ khi khoa học thất bại thì con người mới nên tìm đến việc tu hành.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Tác giả lập luận: 'Vật chất càng phát triển mạnh, thì tinh thần càng phải được đề cao, để giữ cán cân thăng bằng cho xã hội nhân loại, nếu không thì sự sụp đổ không thể tránh khỏi được.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Quan niệm sai lầm nào về độ tuổi tu hành thường được nhắc đến trong tài liệu?",
    options: {
      a: "Người trẻ không đủ kiên nhẫn để theo đuổi con đường tu hành.",
      b: "Tu hành làm cho con người nhanh già và héo úa nhựa sống.",
      c: "Càng già tu hành càng đạt được kết quả cao hơn người trẻ.",
      d: "Chỉ người già mới cần tu, trẻ trung thì nên hưởng thụ.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Đó là quan niệm: 'Già mới tu, chứ còn trẻ mà tu cái gì ?... xem nhà chùa như một nhà dưỡng lão... Còn hạng thanh niên thì phải tranh đấu với đời, để tận hưởng những lạc thú'.",
    },
  },
  {
    question: "Trong ba phương diện của chữ 'Tu' (Tu tâm, Tu thân, Tu bổ), phương diện 'Tu bổ' có nghĩa là gì?",
    options: {
      a: "Bổ sung thêm kiến thức và trí tuệ cho bản thân.",
      b: "Bồi bổ sức khỏe bằng các loại thuốc và thực phẩm.",
      c: "Sửa sang nhà cửa, vườn tược và các vật sở hữu.",
      d: "Sửa đổi những tính cách hung dữ thành hiền lành.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Tu bổ' nghĩa là: 'sửa sang nhà cửa hư dột, may vá lại quần áo rách nát (tu bổ), vun xới lại ruộng vườn hoang phế...'",
      d: "Sai.",
    },
  },
  {
    question: "Theo tài liệu, thứ tự đúng để đạt được hòa bình thế giới thông qua việc tu hành là gì?",
    options: {
      a: "Gia tề - Thân tu - Quốc trị - Thiên hạ bình.",
      b: "Quốc trị - Gia tề - Thân tu - Thiên hạ bình.",
      c: "Thiên hạ bình - Quốc trị - Gia tề - Thân tu.",
      d: "Thân tu - Gia tề - Quốc trị - Thiên hạ bình.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Tâm chánh nhi hậu thân tu, thân tu nhi hậu gia tề, gia tề nhi hậu quốc trị, quốc trị nhi hậu thiên hạ bình.'",
    },
  },
  {
    question: "Người ăn chay như thế nào thì được hưởng 'phước vô lậu'?",
    options: {
      a: "Vì muốn thực hiện một lời hứa trả lễ sau khi đạt được mục đích.",
      b: "Vì lòng từ bi, không muốn sát hại và gây đau khổ cho sinh vật.",
      c: "Vì muốn khoe khoang sự đạo đức của mình với bạn bè.",
      d: "Vì bị bệnh và bác sĩ bắt buộc phải kiêng thịt.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là phước hữu lậu.",
      b: "Đúng. 'Ăn chay vì lòng từ bi, không muốn sát hại sinh vật... làm tăng trưởng lòng nhân từ, làm hiện rõ đức tánh bình đẳng... Người ăn chay với quan niệm cao cả... sẽ được phước vô lậu thanh tịnh'.",
      c: "Sai. Đây là phước hữu lậu.",
      d: "Sai. Đây là phước hữu lậu.",
    },
  },
  {
    question: "Sự khác biệt chính giữa việc sám hối đúng nghĩa và sám hối sai lầm là gì?",
    options: {
      a: "Sám hối đúng nghĩa là cầu xin cho người khác; sám hối sai lầm là cầu cho mình.",
      b: "Sám hối đúng nghĩa là phải lạy nhiều; sám hối sai lầm là chỉ đọc kinh.",
      c: "Sám hối đúng nghĩa là lạy Phật tại chùa; sám hối sai lầm là làm tại nhà.",
      d: "Sám hối đúng nghĩa là quyết tâm không tái phạm; sám hối sai lầm là cầu xin Phật tha tội để tiếp tục lối cũ.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Sám hối đúng nghĩa (b): 'cho lời thệ nguyện quyết tâm bỏ lỗi trước và không tái phạm về sau'. Sám hối sai lầm (a): 'cầu xin tha thứ... vui vẻ trở về với nếp sống cũ, và rồi lại gây tạo tội lỗi nữa'.",
    },
  },
  {
    question: "Tại sao tác giả cho rằng tu hành không làm cho con người trở nên nhu nhược hay yếu đuối?",
    options: {
      a: "Vì người tu hành có thể dùng phép thuật để lấn át kẻ khác.",
      b: "Vì khi tu hành, người ta sẽ không còn kẻ thù nào để phải đối đầu.",
      c: "Vì người tu hành sẽ được các vị thần linh bảo vệ tuyệt đối trước kẻ thù.",
      d: "Vì tu hành là sức mạnh hùng lực, dõng mãnh để vượt qua gian khổ và bảo vệ chí nguyện.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Thật ra, tu đâu có phải là khiếp nhược, đầu hàng, yếu đuối, mà trái lại là hùng lực, là dõng mãnh, là tinh tấn, không sợ đau, không sợ chết, không sợ hy sinh.'",
    },
  },
  {
    question: "Mục đích sâu sắc nhất của việc 'Niệm Phật' đối với một Phật tử hiểu đạo là gì?",
    options: {
      a: "Để Phật ghi tên vào danh sách được cứu độ sau khi chết.",
      b: "Để tiêu thời gian rảnh rỗi và làm cho tâm trí bớt suy nghĩ lung tung.",
      c: "Để được Phật gia hộ cho việc buôn bán thuận lợi, một vốn mười lời.",
      d: "Để nhắc nhở bản thân nhớ lại tánh Phật sáng suốt sẵn có trong mình.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai. Đây là cầu phước hữu lậu.",
      d: "Đúng. 'Người hiểu cao hơn một bậc nữa, thì niệm Phật là để nhắc nhở cho mình nhớ lại tánh Phật (khả năng thành Phật) sáng suốt ngự trị sẵn trong mỗi chúng ta...'",
    },
  },
  {
    question: "Quan điểm nào sau đây về việc ăn uống của người tu hành bị tác giả coi là thiếu học thức và lập dị?",
    options: {
      a: "Ăn uống thanh đạm để giữ gìn sức khỏe tu tập.",
      b: "Ăn chay trường suốt đời để nuôi dưỡng lòng từ bi.",
      c: "Chỉ ăn hoa quả, khoai, chuối hoặc chỉ ăn muối ớt, muối sả mới là chân tu.",
      d: "Ăn ngọ (chỉ ăn một bữa vào giữa trưa) để giảm bớt sự ham muốn ăn uống.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Các quan niệm tuyệt cốc (chỉ ăn hoa quả, khoai, chuối) hay ông đạo ớt, đạo sả bị tác giả phê phán: 'chẳng qua vì thiếu học, không biết nên tu như thế nào, vả lại có tánh lập dị...'",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-1-chon-duong-tu-chon-duong-tu',
  slug: 'chon-duong-tu',
  title: 'Chọn đường tu',
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
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-1-chon-duong-tu/B%E1%BA%A3n_%C4%91%E1%BB%93_tu_Ph%E1%BA%ADt.png',
      readingContent,
      tableOfContents: [
        { id: 'loi-noi-dau', label: '12 Quan Niệm Sai Lầm' },
        { id: 'chuong-1', label: 'Chương I: Giải thích chữ Tu' },
        { id: 'chuong-2', label: 'Chương II: Tu của quần chúng' },
        { id: 'chuong-3', label: 'Chương III: Tu của Phật tử' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-1-chon-duong-tu/Spiritual_Kintsugi.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/F2XXJnIGGZc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4GQV9GJlGASPxXpGwmQ5Rh',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chọn Đường Tu',
    passPercentage: 70,
    questions,
  },
}

export default lesson