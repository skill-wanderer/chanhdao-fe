import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 3</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Nội dung này được dựa trên bài giảng của Cố HT Thích Giác Khang, nhằm giúp người đọc dễ dàng nắm bắt các ý chính và thuận tiện trong việc học tập, tham khảo; không phải là bản chép nguyên văn toàn bộ bài giảng.</p>
    </div>
  </div>

  <h2>THIỀN TÔNG (QUYỂN NHẤT)</h2>
  <p><strong>Con Đường Tu Thứ Ba Trong 10 Tông</strong></p>

  <h3 id="phan-mo-dau">A. PHẦN MỞ ĐẦU</h3>
  <p>Sau khi đi qua bốn con đường đầu tiên trong Bản đồ tu Phật... Hôm nay chúng ta đi vào con đường tu thứ năm là Thiền tông. Con đường này mở chung cho cả hàng Đại thừa và Tiểu thừa. Vị khai sáng đầu tiên của Thiền tông vẫn là Đức Phật. Trước Ngài, sự tham thiền nhập định của các ngoại đạo không phải là không có. Nhưng đến Ngài, phương pháp thiền định mới đạt đến chỗ rốt ráo.</p>
  <p>Luôn trong 49 ngày đêm dưới cội Bồ đề, Ngài đã ngồi tham thiền nhập định cho đến khuya mùng 8 tháng chạp âm lịch, lúc sao mai vừa mọc thì Ngài “minh tâm kiến tính”, chứng được đạo quả Bồ đề... Và từ đấy về sau, một tông phái riêng đã được thành lập. Đó là Thiền tông.</p>

  <h3>Sao gọi là Thiền Tông ?</h3>
  <p>Thiền tông là một tông phái của Phật giáo lấy pháp môn tham thiền nhập định làm căn bản tu hành.</p>
  <ul>
    <li>Chữ <strong>“Thiền”</strong> là do chữ “thiền na”, một tiếng Phạn, dịch nghĩa là định lự (định các tư lự). Xưa dịch là “tư duy”, nay dịch là “tịnh lự”. <em>Tư duy</em> là suy nghiệm (quán). <em>Tịnh lự</em> là để tâm vắng lặng không vọng tưởng (chỉ).</li>
    <li>Chữ <strong>“định”</strong> nguyên tiếng Phạn là Samadhi (tam muội), nghĩa là tập trung tư tưởng vào một cảnh duy nhất không cho tán loạn.</li>
  </ul>
  <p>Hợp hai chữ Thiền và Định, chúng ta có một nghĩa chung: Tập trung tư tưởng vào một đối tượng duy nhất, không cho tán loạn, để cho tâm thể được vắng lặng, tâm dụng được sáng tỏ, mạnh mẽ, đặng quan sát và suy nghiệm chân lý.</p>

  <p>Phương pháp thiền định có hai cách:</p>
  <ol>
    <li><strong>Tham thiền:</strong> Tham cứu về lý thiền, cầu minh tâm kiến tính, như tham cứu câu thoại đầu.</li>
    <li><strong>Quán tưởng:</strong> Tập trung tư tưởng để quan sát sáng tỏ chân lý, như quán bất tịnh, quán từ bi.</li>
  </ol>
  <p>Tu thiền định còn gọi là tu “chỉ quán” hay tu “định huệ”. <em>“Chỉ” là nhân, mà “Định” là quả. “Quán” là nhân, mà “Huệ” là quả.</em></p>

  <h3>CHỦ TRƯƠNG CỦA THIỀN TÔNG</h3>
  <p>Tất cả chúng sinh bị vô minh mê hoặc. Tại sao? Vì hằng ngày bị thất tình, lục dục, bát phong xuy động làm cho tâm tính mờ ám, như ngọn đèn bị gió thổi leo lét. Đèn tâm chao động (không định) nên ánh sáng trí huệ không thể tỏa ra, không xé tan được mây vô minh hắc ám.</p>
  <p>Muốn phá trừ vô minh hắc ám, hành giả phải tu thiền định. Tâm có định, mới phát sinh trí huệ. Trí huệ có phát sinh mới phá trừ được vô minh hắc ám, và mới minh tâm kiến tính thành Phật.</p>
  <p>Trái lại với chủ trương nghe qua có vẻ dễ dàng, phép tu thiền định rất khó, phải thường có thiện hữu tri thức dắt dẫn, phải tốn rất nhiều công phu và kiên nhẫn, trải qua thời gian lâu dài mới thu được kết quả.</p>

  <hr>

  <h3 id="cac-loai-thien">B. CÁC LOẠI THIỀN ĐỊNH</h3>
  <p>Thiền định có nhiều loại. Ngài Tông Mật Thiền sư dạy:</p>
  <ul>
    <li><strong>Ngoại đạo thiền:</strong> Người tà kiến, ưa cõi trên chán cõi dưới mà tu.</li>
    <li><strong>Phàm phu thiền:</strong> Người chánh tín nhân quả, cũng dùng sự ưa cõi trên chán cõi dưới mà tu.</li>
    <li><strong>Tiểu thừa thiền:</strong> Người biết rõ lý “ngã không” mà tu.</li>
    <li><strong>Đại thừa thiền:</strong> Người ngộ được lý “ngã, pháp đều không” mà tu.</li>
    <li><strong>Tối thượng thừa thiền:</strong> Người đốn ngộ tự tâm xưa nay vốn thanh tịnh, tâm ấy tức là Phật, rốt ráo không khác.</li>
  </ul>

  <h4>I. NGOẠI ĐẠO THIỀN</h4>
  <p>Là những loại thiền không nhằm mục đích cầu giải thoát sinh tử luân hồi, mà chỉ cầu sống lâu, thần thông biến hóa, huyền bí cám dỗ người... Dụng tâm không chân chánh nên không thể rốt ráo.</p>
  
  <ol>
    <li>
      <strong>Tà thiền định:</strong> Các loài yêu tinh luyện phép thuật nhiễu hại nhân dân, thầy phù thủy luyện thiên linh cái. Lời Phật dạy ngài A Nan:
      <ul>
        <li>Không đoạn lòng dâm → đọa vào ma đạo.</li>
        <li>Không đoạn tâm sát hại → đọa vào thần đạo (dạ xoa, quỷ thần).</li>
        <li>Không đoạn tâm trộm cướp → đọa vào tà đạo (yêu tinh, ma quỷ, đồng bóng).</li>
      </ul>
    </li>
    <li>
      <strong>Thiền định của đạo tiên:</strong> Tu luyện trừ dục tình để dưỡng tinh, luyện khí, hóa thần nhằm trường sinh bất tử. Tuy nhiên, cái thân do tứ đại giả hợp tất phải bị luật vô thường chi phối. Ông Lữ Đồng Tân sau khi thua phép thiền sư đã ngộ ra "từ trước dụng tâm sai" và quy y Phật.
    </li>
    <li>
      <strong>Luyện Du-già (Yoga):</strong> Tự kiềm chế theo kỷ luật khắt khe, tập trung các huyệt từ hậu môn lên đỉnh đầu để Hỏa hậu lưu thông. Dù có thần thông như dao chém không đứt, ngủ ba tháng không ăn, cũng không thể liễu sinh thoát tử.
    </li>
    <li>
      <strong>Luyện thôi miên:</strong> Vận dụng tinh thần thành sức mạnh sai khiến sự vật, con người. Dụng tâm không chân chánh, chỉ cầu huyền bí, phiền não lậu nổi lên thì thần thông mất hết.
    </li>
  </ol>

  <h4>II. PHÀM PHU THIỀN</h4>
  <p>Cũng gọi là thế gian thiền vì chưa đưa hành giả ra ngoài tam giới, chưa chứng thánh quả. Gồm Tứ thiền và Tứ không định.</p>

  <ol>
    <li>
      <strong>Tứ thiền:</strong>
      <ul>
        <li>Sơ thiền: Ly sinh hỷ lạc.</li>
        <li>Nhị thiền: Định sinh hỷ lạc.</li>
        <li>Tam thiền: Ly hỷ diệu lạc (cõi vui hơn hết).</li>
        <li>Tứ thiền: Xả niệm thanh tịnh.</li>
      </ul>
    </li>
    <li>
      <strong>Tứ không định:</strong>
      <ul>
        <li>Không vô biên xứ định: Thể nhập với hư không vô biên.</li>
        <li>Thức vô biên xứ định: Xóa bỏ biên giới của thức.</li>
        <li>Vô sở hữu xứ định: Xa lìa sự chao động, nhân ngã, năng sở.</li>
        <li>Phi tưởng, phi phi tưởng xứ định: Vượt lên tưởng, sáng suốt như mặt gương chứ không phải vô tri như đất đá.</li>
      </ul>
    </li>
  </ol>

  <h4>III. NHỊ THỪA THIỀN</h4>
  <p>Hay Tiểu thừa thiền, thuộc xuất thế gian thiền (thoát luân hồi), nhưng chậm chạp, cục bộ. Các pháp môn gồm:</p>
  <ul>
    <li><strong>Ngũ đình tâm quán:</strong>
      <ul>
        <li>Quán sổ tức, trừ tâm tán loạn</li>
        <li>Quán bất tịnh, trừ tâm tham sắc dục</li>
        <li>Quán từ bi, trừ tâm sân hận</li>
        <li>Quán nhân duyên, trừ tâm si mê</li>
        <li>Quán giới phân biệt, trừ tâm chấp ngã</li>
      </ul>
    </li>
    <li><strong>Cửu tưởng quán:</strong> Tưởng thây sình trướng, máu mủ, rục rã, thú ăn, xương trắng, thiêu đốt...</li>
    <li><strong>Tứ vô lượng tâm:</strong> Từ, Bi, Hỷ, Xả vô lượng.</li>
    <li><strong>Thông minh thiền:</strong> Lục thông và Tam minh.</li>
  </ul>

  <hr>

  <h3 id="so-tuc">NÓI RÕ VÀI PHÁP MÔN CỦA NHỊ THỪA THIỀN</h3>

  <h4>1. QUÁN SỔ TỨC (Đếm hơi thở)</h4>
  <p>Mục đích: Đình chỉ tâm tán loạn. Hằng ngày tâm trí lăng xăng, rộn ràng, thất tình lục dục chi phối. Nếu không định tâm, như ngọn đèn bị gió bạt, không soi sáng được gì.</p>
  <p><em>“Chế tâm nhất xứ, vô sự bất biện”</em> (Ngăn vọng tâm lại một chỗ, thì không việc gì chẳng thành tựu).</p>

  <p><strong>Những điều cần biết trước khi quán:</strong></p>
  <ul>
    <li>Thức ăn hợp cơ thể, mặc hợp thời tiết, chỗ ở thanh vắng, tắm rửa sạch sẽ.</li>
    <li>Cách ngồi: Ngồi kiết-già hoặc bán-già. Lưng thẳng như vách tường.</li>
    <li>Đầu cổ thẳng, hai mắt chỉ mở phần tư (mở lớn thì loạn, nhắm thì hôn trầm).</li>
  </ul>

  <p><strong>Phương pháp đếm:</strong></p>
  <ul>
    <li>Đếm hơi thở (ra đếm 1, vào đếm 2... đến 10).</li>
    <li>Đếm hơi chẵn (hít vào thở ra đếm 1... đến 10).</li>
    <li>Đếm thuận (từ 1 đến 10) hoặc Đếm nghịch (từ 10 đến 1).</li>
  </ul>
  <p><strong>Những lỗi thường mắc:</strong> Tăng (thở ít đếm nhiều nhảy vọt), Giảm (thở nhiều đếm thụt lùi), Vô ký (không rõ đếm đến mấy). Khi mắc lỗi phải bắt đầu đếm lại.</p>

  <h4>2. QUÁN BẤT TỊNH</h4>
  <p>Mục đích: Dẹp trừ lòng tham sống sợ chết, tham đắm sắc thân. Quán sát tỉ mỉ để thấy rõ thân con người là không trong sạch.</p>
  <ol>
    <li><strong>Quán chủng tử bất tịnh:</strong> Chủng tử tạo thai mang nghiệp phiền não tham sân si, là kết hợp hôi tanh của tinh cha huyết mẹ.</li>
    <li><strong>Quán trụ xứ bất tịnh:</strong> Bào thai là ngục tối chứa đầy máu nhớt tanh hôi dơ bẩn, thiếu ánh sáng không khí.</li>
    <li><strong>Quán tự tướng bất tịnh:</strong> Chín lỗ trong thân bài tiết ra các chất hôi hám gớm ghiếc, còn dơ hơn các lỗ cống đô thị.</li>
    <li><strong>Quán tự thể bất tịnh:</strong> Chất cứng (tóc, móng), lỏng (nước miếng, máu), sệt (não, mỡ) đều không trong sạch.</li>
    <li><strong>Quán chung cánh bất tịnh:</strong> Giai đoạn xác chết mềm hư, tan rã, thối rữa, tứ đại trả về tứ đại.</li>
  </ol>

  <p>Đức Phật xé tan ảo ảnh xác thân để hướng người tu vào giá trị chân thật trường tồn. Quán bất tịnh để đối trị lòng tham dục, giác ngộ Phật tính, chứ không phải để chán đời tự hủy diệt mình. Đức Phật dạy: <em>"Mỗi chúng sinh đều có Phật tính"</em>.</p>

  <hr>

  <h3 id="cau-chuyen">VÀI CÂU CHUYỆN ĐẶC BIỆT CỦA NHỊ THỪA THIỀN</h3>
  <ul>
    <li><strong>Một thiền giả ở đời Tùy:</strong> Tọa thiền trong bọng cây đại thụ. Ngàn năm sau, thợ đốn cây dâng vua, cưa không đứt. Nhờ Thiền sư dùng linh đánh thức, thiền giả xuất định, thân thể không tan rã mà cứng rắn kiên cố.</li>
    <li><strong>Ướp xác thiền giả Nhật Bản:</strong> Thế kỷ 13, 14, các thiền sư ép xác tiêu mỡ, uống nước rửa ruột, tọa thiền viên tịch. Kỹ thuật ướp tự nhiên không cần mổ bụng lấy ruột như Ai Cập, thiền giả vẫn nguyên vẹn như đang mãi trong thiền định.</li>
  </ul>

  <h3>KẾT LUẬN</h3>
  <p>Các pháp tu thiền của Nhị thừa nhiều vô kể. Hành giả phải chọn bề thích hợp trình độ, phải có Minh sư hướng dẫn (như ngài Thiện Tài đi tham học 53 vị, ngài Huyền Trang sang Ấn Độ). Nếu sai pháp môn (đem pháp Sổ tức dạy người giữ nghĩa địa) thì hoài công vô ích.</p>
  <p>Tu hành như trồng cây, không bôn chồn nóng nảy, kiên nhẫn chăm bón, đúng thời tiết cây sẽ trổ hoa. Phải trải qua nhiều đời kiếp tích trữ, khi công tròn quả mãn mới minh tâm kiến tính thành Phật.</p>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong tiếng Phạn, chữ 'Thiền' vốn được phiên âm từ 'Thiền na', có nghĩa là gì theo cách dịch nghĩa 'định lự'?",
    options: {
      a: "Đình chỉ các vọng tưởng không cho khởi động.",
      b: "Định các tư lự hoặc làm cho tâm thể được vắng lặng.",
      c: "Quán sát cho sáng tỏ một vấn đề cụ thể để phát sinh trí huệ.",
      d: "Tập trung tư tưởng vào một cảnh duy nhất không cho tán loạn.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là nghĩa của Chỉ.",
      b: "Đúng. 'Chữ Thiền là do chữ thiền na... dịch nghĩa là định lự (định các tư lự).' Tịnh lự là để tâm vắng lặng không cho khởi các vọng tưởng tư lự.",
      c: "Sai. Đây là nghĩa của Quán.",
      d: "Sai. Đây là nghĩa của Định (Tam muội).",
    },
  },
  {
    question: "Theo chủ trương của Thiền tông, tại sao đèn tâm của chúng sinh không thể chiếu soi chân lý vũ trụ?",
    options: {
      a: "Vì chúng sinh không có sẵn hạt giống trí huệ từ ban đầu.",
      b: "Vì chúng sinh chưa thực hiện các phép tu khổ hạnh ép xác.",
      c: "Vì đèn tâm bị gió lục trần làm chao động khiến trí huệ không tỏa sáng.",
      d: "Vì mây vô minh là một thực thể độc lập không thể phá bỏ.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Đèn tâm của chúng ta không giờ phút nào chẳng bị gió lục trần làm chao động. Vì đèn tâm chao động (không định) nên ánh sáng trí huệ không thể tỏa ra...'",
      d: "Sai.",
    },
  },
  {
    question: "Loại thiền nào mà người tu ngộ được lý 'ngã và pháp đều không'?",
    options: {
      a: "Tiểu thừa thiền",
      b: "Phàm phu thiền",
      c: "Đại thừa thiền",
      d: "Tối thượng thừa thiền",
    },
    answer: "c",
    explanation: {
      a: "Sai. Tiểu thừa chỉ ngộ lý 'ngã không'.",
      b: "Sai.",
      c: "Đúng. 'Người ngộ được lý ngã, pháp đều không mà tu thiền, là Đại thừa thiền.'",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao các lối thiền định của ngoại đạo như tiên đạo hay thôi miên bị coi là không chân chánh theo quan niệm Phật giáo?",
    options: {
      a: "Vì các phương pháp đó quá dễ dàng thực hiện nên không có kết quả.",
      b: "Vì họ không sử dụng các tư thế ngồi kiết già hay bán già.",
      c: "Vì mục đích của họ không nhằm dẹp trừ phiền não để giải thoát sinh tử.",
      d: "Vì họ không tin vào sự tồn tại của các bậc Thánh hiền.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. '...những hành động gì không nhằm mục đích trau giồi tâm tính, dẹp trừ phiền não hữu lậu, để cầu giải thoát sinh tử luân hồi, đều là không chân chánh.'",
      d: "Sai.",
    },
  },
  {
    question: "Giai đoạn thiền định nào trong Tứ thiền được gọi là 'Ly hỷ diệu lạc'?",
    options: {
      a: "Sơ thiền",
      b: "Tam thiền",
      c: "Nhị thiền",
      d: "Tứ thiền",
    },
    answer: "b",
    explanation: {
      a: "Sai. Sơ thiền là Ly sinh hỷ lạc.",
      b: "Đúng. Tam thiền là Ly hỷ diệu lạc, đây được xem là cảnh giới có niềm vui mầu nhiệm nhất.",
      c: "Sai. Nhị thiền là Định sinh hỷ lạc.",
      d: "Sai. Tứ thiền là Xả niệm thanh tịnh.",
    },
  },
  {
    question: "Trong 'Tứ không định', trạng thái mà thiền giả xóa bỏ biên giới của tâm thức để thể nhập vào cái vô hạn gọi là gì?",
    options: {
      a: "Phi tưởng, phi phi tưởng xứ định",
      b: "Vô sở hữu xứ định",
      c: "Không vô biên xứ định",
      d: "Thức vô biên xứ định",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Thức vô biên xứ định... thiền giả phải vào định thứ hai để xóa bỏ cái biên giới của thức, khi thành tựu, tức thể nhập được vào cõi Thức vô biên.'",
    },
  },
  {
    question: "Phương pháp 'Quán Sổ tức' có mục đích chính là đối trị tâm bệnh nào?",
    options: {
      a: "Tâm tán loạn",
      b: "Tâm si mê",
      c: "Tâm tham sắc dục",
      d: "Tâm sân hận",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Trong Ngũ đình tâm quán: 'Quán sổ tức, trừ tâm tán loạn'.",
      b: "Sai. Quán nhân duyên trừ tâm si mê.",
      c: "Sai. Quán bất tịnh trừ tâm tham sắc dục.",
      d: "Sai. Quán từ bi trừ tâm sân hận.",
    },
  },
  {
    question: "Khi thực hành Quán Sổ tức, nếu hành giả đếm nhảy vọt (thở ít mà đếm nhiều) thì gọi là lỗi gì?",
    options: {
      a: "Lỗi Giảm",
      b: "Lỗi Vô ký",
      c: "Lỗi Hôn trầm",
      d: "Lỗi Tăng",
    },
    answer: "d",
    explanation: {
      a: "Sai. Giảm là thở nhiều đếm ít.",
      b: "Sai. Vô ký là không nhớ đếm tới đâu.",
      c: "Sai.",
      d: "Đúng. 'Tăng : Nghĩa là thở ít mà đếm nhiều, đếm nhảy vọt, như mới ba liền đếm năm...'",
    },
  },
  {
    question: "Trong phép 'Quán bất tịnh', việc quan sát chín lỗ trên thân xác thường xuyên bài tiết chất dơ bẩn thuộc về phần quán nào?",
    options: {
      a: "Quán tự thể bất tịnh",
      b: "Quán trụ xứ bất tịnh",
      c: "Quán chủng tử bất tịnh",
      d: "Quán tự tướng bất tịnh",
    },
    answer: "d",
    explanation: {
      a: "Sai. Tự thể là quán chất cứng lỏng sệt.",
      b: "Sai. Trụ xứ là bào thai.",
      c: "Sai. Chủng tử là tinh huyết.",
      d: "Đúng. 'Quán tự tướng bất tịnh là quán những hình tướng không sạch sẽ... chín lỗ ấy là: đường đại, đường tiểu, miệng... bài tiết ra nhiều chất dơ bẩn'.",
    },
  },
  {
    question: "Mục đích thực sự của Đức Phật khi dạy phép Quán bất tịnh là gì?",
    options: {
      a: "Để đối trị lòng tham dục và nhận ra Phật tính thanh tịnh trong thân xác vô thường.",
      b: "Để khuyến khích việc xa lánh xã hội và không chăm sóc sức khỏe.",
      c: "Để người tu thấy đời là đau khổ mà tự hủy diệt thân mình.",
      d: "Để chứng minh rằng con người không có khả năng đạt được sự thanh tịnh.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Biết lợi dụng cái thân bất tịnh, vô thường này mà tìm ra cái tịnh cái thường... Quán bất tịnh có mục đích: Đối trị lòng tham dục... giác ngộ Phật tính.'",
      b: "Sai.",
      c: "Sai. Văn bản nhấn mạnh: 'Tuyệt đối không phải để tự hủy diệt thân mình... Đừng khinh trong núi đất dơ không có ngọc'.",
      d: "Sai.",
    },
  },
  {
    question: "Câu chuyện về vị thiền giả đời Tùy ngồi trong bọng cây đại thụ minh chứng cho điều gì trong tu hành?",
    options: {
      a: "Sự nguy hiểm của việc tu thiền mà không có người trông nom.",
      b: "Sức mạnh của các vị thần rừng bảo vệ người tu hành.",
      c: "Thiền tông chỉ dành cho những người có khả năng sống lâu bất tử.",
      d: "Công phu tham thiền nhập định có thể duy trì thân hình không tan rã qua hàng ngàn năm.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. '...đây là một vị tu thiền, do sức định kiên cố mà duy trì được thân hình không tan rã và trở thành cứng rắn như thế.'",
    },
  },
  {
    question: "Theo kinh Lăng Nghiêm, nếu một người tu thiền định mà không đoạn trừ tâm sát hại thì sẽ đọa vào đường nào?",
    options: {
      a: "Thần đạo (trở thành đại lực quỷ, dạ xoa).",
      b: "Ma đạo (trở thành ma chúa, ma dân).",
      c: "Địa ngục vô gián ngay lập tức.",
      d: "Tà đạo (trở thành yêu tinh, đồng bóng).",
    },
    answer: "a",
    explanation: {
      a: "Đúng. '...không đoạn tâm sát hại, thì chỉ đọa vào thần đạo, bậc thượng thành đại lực quỷ, bậc trung làm phi hành dạ xoa...'",
      b: "Sai. Không đoạn lòng dâm thì vào Ma đạo.",
      c: "Sai.",
      d: "Sai. Không đoạn tâm trộm cướp thì vào Tà đạo.",
    },
  },
  {
    question: "Tại sao việc chọn lựa phương pháp tu thiền cần có sự hướng dẫn của Minh sư?",
    options: {
      a: "Để Minh sư có thể truyền thần thông trực tiếp cho đệ tử.",
      b: "Để tránh việc áp dụng sai phương pháp không phù hợp với căn cơ, trình độ.",
      c: "Vì chỉ có Minh sư mới có quyền cấp bằng chứng nhận đắc đạo.",
      d: "Vì tu thiền bắt buộc phải học thuộc lòng toàn bộ kinh điển trước.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Trái lại, nếu vị minh sư truyền lầm pháp môn cho đệ tử... như ngài Xá-lợi-phất đem pháp Sổ tức dạy người giữ nghĩa địa, hay phép quán Bất tịnh dạy người thợ rèn tu, thì chỉ hoài công vô ích...'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong cách ngồi thiền, tại sao hành giả cần giữ lưng thẳng như vách tường?",
    options: {
      a: "Để ép các chất trược khí từ phổi xuống đường đại tiện.",
      b: "Để các khớp xương sống ăn chịu đều nhau, giúp ngồi được lâu mà không ngã.",
      c: "Để thể hiện uy nghi của một bậc thánh nhân tương lai.",
      d: "Để ngăn chặn các dòng khí dương thoát ra ngoài đỉnh đầu.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Lưng phải ngồi thẳng như vách tường, để cho các khớp xương sống ăn chịu vào đều nhau, như thế ngồi mới lâu được... nếu hơi nghiêng, cố nhiên nó phải ngã.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Loại thiền nào nhấn mạnh việc 'đốn ngộ tự tâm xưa nay vốn thanh tịnh, tâm ấy tức là Phật'?",
    options: {
      a: "Tối thượng thừa thiền",
      b: "Ngoại đạo thiền",
      c: "Phàm phu thiền",
      d: "Tiểu thừa thiền",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Lời Ngài Tông Mật thiền sư: 'Người đốn ngộ tự tâm, xưa nay vốn thanh tịnh... tâm ấy tức là Phật, rốt ráo không khác, y theo tâm ấy mà tu thiền là Tối thượng thừa thiền'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-3-thien-tong-quyen-nhut-thien-tong-quyen-nhut',
  slug: 'thien-tong-quyen-nhut',
  title: 'Thiền Tông (Quyển nhứt)',
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
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-3-thien-tong/Thi%E1%BB%81n_T%C3%B4ng__%C4%90%C6%B0%E1%BB%9Dng_Gi%C3%A1c_Ng%E1%BB%99.png',
      readingContent,
      tableOfContents: [
        { id: 'phan-mo-dau', label: 'A. Phần Mở Đầu' },
        { id: 'cac-loai-thien', label: 'B. Các Loại Thiền Định' },
        { id: 'so-tuc', label: 'Nói Rõ Về Quán Sổ Tức & Bất Tịnh' },
        { id: 'cau-chuyen', label: 'Vài Câu Chuyện Về Nhị Thừa Thiền' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-3-thien-tong/The_Third_Path_of_Zen.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/YYPwixxZISc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/37E4EZy6CZPsPw2IQOEis9',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Thiền Tông (Quyển Nhứt)',
    passPercentage: 70,
    questions,
  },
}

export default lesson