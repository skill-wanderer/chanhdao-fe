import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 4</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Nội dung này được dựa trên bài giảng của Cố HT Thích Thiện Hoa, nhằm giúp người đọc dễ dàng nắm bắt các ý chính và thuận tiện trong việc học tập, tham khảo; không phải là bản chép nguyên văn toàn bộ bài giảng.</p>
    </div>
  </div>

  <h2>THIỀN TÔNG (QUYỂN NHÌ)</h2>
  <p><strong>Tiếp theo và hết</strong></p>

  <hr>

  <h3 id="dai-thua-thien">IV. ĐẠI THỪA THIỀN</h3>
  <p>Trong Thiền tông tập I, chúng ta đã biết qua các loại thiền: Ngoại đạo thiền, Phàm phu thiền, Tiểu thừa thiền và phương pháp tu luyện của họ. Trong tập này, chúng tôi sẽ dành riêng toàn tập để nói về Đại thừa thiền. Nội dung của tập này sẽ gồm những mục chính sau đây:</p>
  <ol>
    <li>Các pháp môn của Đại thừa thiền</li>
    <li>Sự truyền thừa của các Tổ trong phái Thiền tông, ở Ấn Độ, Trung Hoa và Việt Nam.</li>
    <li>Các ma chướng trong lúc tu thiền</li>
    <li>Các kinh sách nói về thiền?</li>
  </ol>

  <p>Trước khi đi sâu vào các mục nói trên, chúng ta hãy hiểu qua thế nào là Đại thừa thiền?</p>
  <p>Đại thừa thiền là pháp tu thiền của bậc Đại thừa, cũng gọi là xuất thế gian thượng thượng thiền. Pháp thiền này chỉ dành riêng cho những người thượng căn rất thông minh và lanh lợi tu. Những bậc Đại thừa Bồ Tát đã nhiều đời nhiều kiếp tu hành, phá hết các phiền não thô trược, chỉ còn vi tế vô minh, nếu kiếp này gặp được minh sư chỉ giáo cho pháp tu Đại thừa thiền này, thì sẽ được tỏ ngộ. Cũng như cành hoa sắp nở, chỉ thêm chút ít công phu vun tưới, thì hoa sẽ trổ ngay. <strong>Yếu tố căn bản của Đại thừa thiền là trí huệ.</strong> Thiền giả phải lấy trí huệ để tự quan sát tâm tánh. Nếu thiếu trí huệ, thiền giả khó được kết quả khi tu theo Đại thừa thiền.</p>

  <hr>

  <h3 id="cac-phap-mon">I. CÁC PHÁP THIỀN ĐỊNH CỦA ĐẠI THỪA</h3>
  <p>Các pháp thiền định của Đại thừa rất nhiều như: Pháp hoa tam muội, Niệm Phật tam muội, Bát châu tam muội, Giác ý tam muội, Thủ lăng nghiêm tam muội, Tự tánh thiền, Nhất thiết thiền... Dưới đây chúng ta hãy nghiên cứu qua một số pháp thiền định thông thường của Đại thừa.</p>

  <ol>
    <li>
      <strong>Sao gọi là Pháp hoa tam muội?</strong>
      <p>Tam muội hay “Tam ma đề” do chữ Phạn Samadhi phiên âm ra. Trung Hoa dịch là “Điều trực định” hay “chánh định”. Pháp này căn cứ theo kinh Pháp Hoa. Ngài Trí Giả Đại sư dạy phương pháp tu gồm mười điều: 1) Nghiêm tịnh đạo tràng; 2) Tịnh thân; 3) Tịnh nghiệp; 4) Cúng dường chư Phật; 5) Lễ Phật; 6) Sám hối sáu căn; 7) Đi nhiễu; 8) Tụng kinh; 9) Tọa thiền; 10) Chứng tướng.</p>
    </li>
    <li>
      <strong>Sao gọi là Niệm Phật tam muội?</strong>
      <p>Phương pháp này căn cứ theo kinh Bát châu niệm Phật. Hành giả thường niệm danh hiệu của Phật A Di Đà ở Tây phương, ngày đêm không dứt. Khi được tam muội, hành giả thấy chư Phật hiện ra trước mắt.</p>
    </li>
    <li>
      <strong>Sao gọi là Giác ý tam muội?</strong>
      <p>Căn cứ theo kinh Đại phẩm Bát Nhã. Hành giả tu pháp này, tâm ý giác ngộ tất cả pháp và được vô sanh nhẫn.</p>
    </li>
    <li>
      <strong>Sao gọi là Thủ lăng nghiêm tam muội?</strong>
      <p>Hành giả phải nhận chân rằng các pháp đều từ thực thể là Như Lai tạng tâm mà tùy duyên biến hiện, như huyễn như hóa.</p>
    </li>
    <li>
      <strong>Sao gọi là Tự tánh thiền, Nhất thiết thiền, Nan thiền v.v…?</strong>
      <p>Gồm cả thảy chín món và được gọi là Đại thừa thiền. Các vị Bồ tát nhờ y theo các món thiền này mà tấn tu làm nên được các công hạnh rộng lớn.</p>
    </li>
    <li>
      <strong>Sao gọi là Trực chỉ thiền?</strong>
      <p>Trực chỉ thiền là pháp thiền chỉ thẳng tâm người, thấy tánh thành Phật, không dùng phương tiện tu quán và cũng không cần kinh giáo.</p>
    </li>
    <li>
      <strong>Sao gọi là Như Lai thanh tịnh thiền?</strong>
      <p>Như Lai thanh tịnh thiền là pháp thiền thanh tịnh của Như Lai. Đức Phật Thích Ca sau khi phá trừ hết vô minh phiền não, tâm được thanh tịnh, Ngài chứng được đạo Bồ Đề.</p>
    </li>
    <li>
      <strong>Sao gọi là Như Lai tối thượng thừa thiền?</strong>
      <p>Đây là phép thiền siêu cao hơn tất cả phép thiền mà Đức Như Lai đã ứng dụng.</p>
    </li>
    <li>
      <strong>Sao gọi là Đạt Ma Tổ sư thiền?</strong>
      <p>Ngài Đạt Ma ngồi xoay mặt vào tường chín năm tại chùa Thiếu Lâm để tham thiền. Tức là phép thiền mà Ngài đã tu luyện ở chùa Thiếu Lâm vậy.</p>
    </li>
  </ol>

  <p>Các phép thiền của Đại thừa có thể chia làm hai loại lớn:</p>
  <ul>
    <li>
      <strong>Loại thứ nhất:</strong> Căn cứ theo kinh sách của Phật tổ truyền dạy mà tu tập (tam muội), có tu, có quán, có phương pháp nhất định. Khá phổ biến và dễ thành tựu.
    </li>
    <li>
      <strong>Loại thứ hai:</strong> <em>"Giáo ngoại biệt truyền, bất lập văn tự"</em>. Không căn cứ theo kinh giáo, vị minh sư dùng tâm mình truyền thẳng sự giác ngộ qua tâm đệ tử (Dĩ tâm ấn tâm). Truyền trực tiếp mỗi đời chỉ một người xuất chúng.
    </li>
  </ul>

  <p>Cách truyền đạt pháp thiền "Dĩ tâm ấn tâm" lại có hai lối:</p>
  <ul>
    <li><strong>Tham cứu thoại đầu:</strong> Một câu nói thiền (công án) rất ngắn nhưng ý nghĩa sâu xa. Vị đệ tử tham cứu có khi 10-15 năm mới tỏ ngộ.</li>
    <li><strong>Dùng hình thức lạ lùng:</strong> Đánh, hét, ra dấu, mời ăn cơm uống nước trà... Tùy thời cơ ứng biến để khai ngộ đệ tử.</li>
  </ul>

  <hr>

  <h3 id="su-truyen-thua">II. HỆ THỐNG TRUYỀN THỪA CỦA CÁC TỔ TRONG PHÁI THIỀN TÔNG</h3>
  
  <h4>TẠI ẤN ĐỘ</h4>
  <ul>
    <li>
      <strong>Ngài Ma Ha Ca Diếp (Sơ tổ):</strong> Khi Phật ở hội Linh Sơn cầm cành hoa sen đưa lên, toàn chúng hội yên lặng, duy ngài Ca Diếp mỉm cười (phá nhan vi tiếu). Phật ấn chứng: <em>"Ta có chánh pháp nhãn tạng... nay ta truyền cho ông Ma Ha Ca Diếp"</em>.
    </li>
    <li>
      <strong>Ngài A Nan (Nhị tổ):</strong> Hỏi tổ Ca Diếp ngoài truyền y bát còn truyền pháp gì? Tổ Ca Diếp gọi to "A Nan!", ngài A Nan đáp "Dạ!". Tổ dạy tiếp: "Cây sào phướn trước cửa chùa ngã!". Ngài A Nan liền tỏ ngộ thiền cơ.
    </li>
  </ul>
  <p>Từ ngài Ca Diếp đến ngài Bồ Đề Đạt Ma, ở Ấn Độ có cả thảy là 28 vị tổ.</p>

  <h4>TẠI TRUNG HOA</h4>
  <ul>
    <li><strong>Ngài Bồ Đề Đạt Ma (Sơ tổ):</strong> Tổ thứ 28 Ấn Độ sang Trung Hoa. Dù gặp Lương Võ Đế nhưng căn cơ chưa hợp nên Ngài đến chùa Thiếu Lâm ngồi day mặt vào vách 9 năm chờ thời. Ngài truyền lại bộ kinh Lăng Già 4 quyển.</li>
    <li><strong>Ngài Huệ Khả / Thần Quang (Nhị tổ):</strong> Đứng ngoài tuyết chặt đứt cánh tay để cầu đạo. Ngài thưa "Con tìm tâm không được", Tổ bảo "Ta đã an tâm cho ông rồi đó!", Ngài liền ngộ đạo.</li>
    <li><strong>Ngài Tăng Xán (Tam tổ)</strong>.</li>
    <li><strong>Ngài Đạo Tín (Tứ tổ)</strong>.</li>
    <li><strong>Ngài Hoằng Nhẫn (Ngũ tổ):</strong> Tứ Tổ đạo Tín dặn ông già đi "đổi xác". Ông già mượn thai một cô gái chưa chồng, sinh ra đứa bé tên Hoằng Nhẫn, sau được Tứ Tổ truyền pháp.</li>
    <li>
      <strong>Ngài Huệ Năng (Lục tổ):</strong> Từ người tiều phu đốn củi không biết chữ, nghe câu <em>"Ưng vô sở trụ nhi sanh kỳ tâm"</em> liền ngộ đạo. Đến Huỳnh Mai giã gạo. Sáng tác bài kệ <em>"Bồ đề bổn vô thọ / Tâm phi minh cảnh đài..."</em> đập tan kiến chấp của Thượng tọa Thần Tú. Được Ngũ Tổ truyền y bát giữa đêm.
    </li>
  </ul>

  <p>Từ ngài Lục Tổ Huệ Năng về sau, Thiền tông chia ra "Nam đốn, Bắc tiệm" và phát triển thành 2 phái, 5 dòng (Lâm Tế, Quy Ngưỡng, Tào Động, Vân Môn, Pháp Nhãn).</p>

  <h4>TẠI VIỆT NAM</h4>
  <p>Phật giáo truyền vào Việt Nam từ thế kỷ II, nhưng Thiền tông chính thức được truyền vào bởi:</p>
  <ul>
    <li><strong>Phái Tỳ Ni Đa Lưu Chi:</strong> Cuối thế kỷ VI, ngài Tỳ Ni Đa Lưu Chi (đệ tử Tam tổ Tăng Xán) sang Việt Nam truyền đạo tại chùa Pháp Vân. Vị tổ thứ 2 là Ngài Pháp Hiển.</li>
    <li><strong>Phái Vô Ngôn Thông:</strong> Đầu thế kỷ IX, ngài Vô Ngôn Thông tu tại chùa Kiến Sơ (Bắc Ninh). Tam tổ là ngài Thiện Hội Thiền sư.</li>
    <li><strong>Phái Thảo Đường:</strong> Đời vua Lý Thánh Tông (1069), ngài Thảo Đường (người Trung Hoa) làm tù binh Chiêm Thành được vua phát hiện và phong làm Quốc sư.</li>
    <li><strong>Phái Trúc Lâm:</strong> Do vua Trần Nhân Tông (1278-1308) sáng lập tại núi Yên Tử, lấy hiệu "Hương Vân Đại Đầu Đà". Đây là phái duy nhất phát tích tại đất nước Việt.</li>
    <li><strong>Phái Lâm Tế:</strong> Do ngài Nguyên Thiều khai sáng tại Trung Việt (chùa Quốc Ân - Huế).</li>
    <li><strong>Phái Liễu Quán:</strong> Do ngài Liễu Quán (quê Phú Yên) sáng lập. Ngài ngộ đạo qua câu "Vạn pháp quy nhất, nhất quy hà xứ".</li>
  </ul>

  <hr>

  <h3 id="ma-chuong">III. CÁC MA CHƯỚNG TRONG LÚC TU THIỀN (NGŨ ẤM MA)</h3>
  <p><em>(Trích đoạn "Ngũ ấm ma" trong kinh Lăng Nghiêm)</em></p>
  <p>Phật dạy: "Các loài ma kia thấy người tu hành, sinh tâm lo sợ cho bà con quyến thuộc của chúng sẽ bị tiêu diệt, nên chúng dùng thần lực đến nhiễu hại người tu. Nếu người tu hành tâm được thanh tịnh sáng suốt không vọng động, thì chúng ma không hại được. Chỉ lo chủ nhà mê muội, nhận lầm giặc làm con."</p>

  <h4>1. Mười Món Ma Về SẮC ẤM</h4>
  <p>Hành giả phá trừ sắc ấm, vọng tâm biến hiện ra các cảnh như: Thân thể không bị chướng ngại, Lượm bỏ trùng độc trong thân, Nghe trong hư không có tiếng nói pháp, Thấy Phật hiện và hoa sen trổ, Thấy các vật báu đầy cả hư không, Thấy ban đêm như ban ngày, Thân thể không biết đau, Thấy cảnh giới Phật hiện khắp nơi, Ban đêm thấy nghe được phương xa, Thân hình biến hóa nói pháp thông suốt. <em>Nếu mê lầm cho mình chứng Thánh thì bị ma cám dỗ, đọa vào địa ngục vô gián.</em></p>

  <h4>2. Mười Món Ma Về THỌ ẤM</h4>
  <p>Hành giả phá trừ sắc ấm, thọ ấm hiện bày. Do dụng công dằn ép thái quá sinh ra: Thấy loài vật thương khóc (ma sầu bi), Chí dũng mãnh bằng Phật (ma ngã mạn), Tâm nghĩ tưởng khô khan, Được chút ít cho là đầy đủ, Tâm buồn rầu vô hạn (muốn tự sát), Vui cười không thôi phát cuồng, Sinh đại ngã mạn (hủy kinh đập tượng), Tâm sinh khinh an, Chấp không (bác bỏ nhân quả), Vì quá tham ái sinh ra cuồng dục. <em>Nếu cho mình chứng Thánh thì bị đọa ác đạo.</em></p>

  <h4>3. Mười Món Ma Về TƯỞNG ẤM</h4>
  <p>Hành giả phát minh diệu dụng, khởi tâm tham cầu: Tham cầu diệu dụng linh nghiệm, Tham cầu du ngoạn xuất thần, Cầu ngộ chân lý, Móng tâm muốn biết cội nguồn, Tham cầu cảm ứng, Tham cầu chỗ vắng vẻ tịch mịch, Tham cầu biết kiếp trước, Tham cầu thần thông, Tham cầu không không (ẩn hiện vô cớ), Tham cầu sống lâu. <em>Thiên ma biết ý liền xuất hồn nhập vào người, tự xưng thành Phật làm người mất chánh tín.</em></p>

  <h4>4. Mười Món Ma Về HÀNH ẤM</h4>
  <p>Tưởng ấm hết, tâm minh chánh, thiên ma không khuấy nhiễu được. Hành giả tự nghiên cứu nguồn gốc muôn loài sinh ra các biên kiến tà chấp: Chấp không nguyên nhân sanh, Bốn món chấp thường, Chấp một phần thường một phần vô thường, Chấp có bốn món biên giới, Bốn món luận nghị rối loạn, Chấp 16 tướng có, Chấp 8 món vô tướng, Chấp 8 món cu phi, Chấp 5 món đoạn diệt, Chấp 5 món Niết bàn hiện tại. <em>Do mất chánh kiến nên đọa về ngoại đạo.</em></p>

  <h4>5. Mười Món Ma Về THỨC ẤM</h4>
  <p>Hành ấm hết, chỉ còn thức ấm. Sanh tâm chấp: Chấp minh đế (sơ tưởng A-lại-da), Chấp năng sanh, Chấp chơn thường, Chấp cỏ cây cũng đều biết, Chấp tứ đại hóa sanh, Chấp hư vô, Tham cầu sống lâu, Tham luyến cảnh dục, Định tánh Thinh văn, Định tánh Duyên giác. <em>Vì khởi tâm chấp trước nên đọa làm bè bạn của ngoại đạo, trời Vô tưởng, Ma-hê-thủ-la...</em></p>

  <hr>

  <h3 id="kinh-sach">IV. CÁC KINH SÁCH NÓI VỀ THIỀN</h3>
  <p>Kinh sách nói về thiền không thể kể xiết. Thiết yếu có: Kinh Lăng Già, Kinh Lăng Nghiêm, Kinh Viên Giác, Kinh Pháp Bảo Đàn, Đại Thừa Chỉ Quán, Lục Diệu Pháp Môn, Kinh Kim Cang, Truyền Đăng Lục, Vô Môn Quan, Bích Nham Lục, Thiền Tông Chỉ Nam (của vua Trần Thái Tông) v.v…</p>

  <hr>

  <h3 id="tong-ket">PHẦN TỔNG KẾT</h3>
  <p>Thiền định chia làm hai loại lớn: Chánh định và tà định (hay Ngoại đạo thiền và Phật giáo thiền).</p>
  <ul>
    <li><strong>Ngoại đạo thiền:</strong> Tu vì tham sân si, cầu sống lâu, thần thông, tà kiến.</li>
    <li><strong>Phàm phu thiền:</strong> Chánh tín nhân quả nhưng tu vì chán cõi dưới, ưa cõi trên.</li>
    <li><strong>Tiểu thừa thiền:</strong> Phá ngã chấp nhưng còn pháp chấp, tu cục bộ tuần tự.</li>
    <li><strong>Đại thừa thiền:</strong> Căn tánh mau lẹ vượt bậc, ngộ ngã-pháp đều không, đốn ngộ tự tâm vốn thanh tịnh là Phật.</li>
  </ul>
  
  <p>Đại thừa thiền có ba phương pháp truyền thọ:</p>
  <ol>
    <li>Tu theo kinh sách Đại thừa (các loại tam muội).</li>
    <li>Giáo ngoại biệt truyền (tham cứu câu nói thiền/thoại đầu).</li>
    <li>Dùng cửu chỉ, đánh hét, đãi trà cơm... (thiền cơ mầu nhiệm).</li>
  </ol>
  <p>Người truyền pháp phải biết căn cơ, biết thời tiết và biết phương pháp thích hợp.</p>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Yếu tố căn bản nhất mà một thiền giả cần có để đạt được kết quả khi tu theo Đại thừa thiền là gì?",
    options: {
      a: "Sự khổ hạnh",
      b: "Sự kiên trì tuyệt đối",
      c: "Trí huệ",
      d: "Khả năng thuộc lòng kinh giáo",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Yếu tố căn bản của Đại thừa thiền là trí huệ. Thiền giả phải lấy trí huệ để tự quan sát tâm tánh. Nếu thiếu trí huệ, thiền giả khó được kết quả...'",
      d: "Sai.",
    },
  },
  {
    question: "Pháp môn nào sau đây thuộc loại thiền định Đại thừa dựa trên quy củ và kinh giáo (Tam muội)?",
    options: {
      a: "Đạt Ma Tổ sư thiền",
      b: "Trực chỉ thiền",
      c: "Như Lai tối thượng thừa thiền",
      d: "Pháp hoa tam muội",
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây là loại truyền ngoài giáo lý.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Tam muội, căn cứ theo kinh sách của Phật tổ truyền dạy mà tu tập... như Pháp hoa tam muội...'",
    },
  },
  {
    question: "Trong hệ thống truyền thừa Thiền tông Ấn Độ, ai là người đã tỏ ngộ được 'thiền cơ' khi Đức Phật đưa cành hoa sen lên?",
    options: {
      a: "Ngài Ưu Ba Ly",
      b: "Ngài Ma Ha Ca Diếp",
      c: "Ngài Xá Lợi Phất",
      d: "Ngài A Nan",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Duy có ngài Ma Ha Ca Diếp là tỏ ngộ được thiền cơ của Phật, nên đổi sắc mặt vui vẻ, chúm chím mỉm cười (phá nhan vi tiếu).' Được nhận làm Sơ tổ Ấn Độ.",
      c: "Sai.",
      d: "Sai. A Nan là Nhị tổ.",
    },
  },
  {
    question: "Sự khác biệt cốt lõi giữa 'Nam đốn' và 'Bắc tiệm' trong Thiền tông Trung Hoa là gì?",
    options: {
      a: "Sự khác biệt về quan điểm giác ngộ tức thời và tu tập dần dần",
      b: "Một bên cho phép lập gia đình, một bên thì không",
      c: "Địa điểm tu hành khác nhau",
      d: "Sự khác biệt về bộ kinh căn bản được sử dụng",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Phương Nam chủ trương về đốn ngộ; phương Bắc chủ trương về tiệm tu, nên gọi là Nam đốn, Bắc tiệm.' (Đốn: ngay lập tức; Tiệm: tuần tự dần dần).",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Phái Thiền tông nào sau đây do chính một vị vua Việt Nam sáng lập?",
    options: {
      a: "Phái Tỳ Ni Đa Lưu Chi",
      b: "Phái Vô Ngôn Thông",
      c: "Phái Trúc Lâm",
      d: "Phái Thảo Đường",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Đệ nhất tổ của phái Trúc Lâm tức là vua Trần Nhân Tông... Trong các phái Thiền tông ở Việt Nam, chỉ có phái Trúc Lâm là phát tích tại đất nước Việt.'",
      d: "Sai.",
    },
  },
  {
    question: "Trong 'Ngũ ấm ma', ma chướng thuộc về 'Sắc ấm' thường biểu hiện qua hiện tượng nào?",
    options: {
      a: "Phát sinh lòng thương xót chúng sinh đến mức khóc ròng",
      b: "Bác bỏ nhân quả, cho rằng tất cả đều là không",
      c: "Thân thể tự thấy trong suốt hoặc thấy các vật báu đầy hư không",
      d: "Tự cho mình đã thành Phật và đi khuyến hóa dâm dục",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là Thọ ấm (ma sầu bi).",
      b: "Sai. Đây là Thọ ấm (chấp không).",
      c: "Đúng. 'Mười món ma về Sắc ấm... Thân thể không bị chướng ngại... Thấy các vật báu đầy cả hư không...'",
      d: "Sai. Đây là Tưởng ấm hoặc Thọ ấm tà dục.",
    },
  },
  {
    question: "Phương pháp 'Tứ hét' (bốn tiếng hét) nổi tiếng thuộc về dòng thiền nào?",
    options: {
      a: "Dòng Tào Động",
      b: "Dòng Vân Môn",
      c: "Dòng Quy Ngưỡng",
      d: "Dòng Lâm Tế",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Ngài Lâm Tế nói: Có khi hét một tiếng như bửu kiếm... Bởi thế nên người đời gọi là Lâm Tế tứ hét (bốn tiếng hét của Lâm Tế).' Dòng này chuyên dùng gậy đánh và hét.",
    },
  },
  {
    question: "Theo tài liệu, 'Ngoại đạo thiền' khác với thiền định của Phật giáo ở điểm nào?",
    options: {
      a: "Không thực hiện ngồi kiết già",
      b: "Mục đích nhắm vào thần thông, trường sinh hoặc lạc thú thay vì giải thoát",
      c: "Chỉ tu tập vào ban đêm",
      d: "Không sử dụng hơi thở làm đối tượng",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Họ không nhắm ngay mục đích dẹp trừ vô minh phiền não, cầu được minh tâm kiến tánh... mà chỉ nhắm mục đích nhỏ hẹp như cầu thần thông, trường sinh bất tử, thành tiên...'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Bài kệ 'Bổn lai vô nhất vật / Hà xứ nhạ trần ai?' của Lục Tổ Huệ Năng nhằm bác bỏ quan điểm nào trong bài kệ của Thượng tọa Thần Tú?",
    options: {
      a: "Ý định truyền y bát của Ngũ tổ",
      b: "Sự chấp trước vào thân là cây Bồ đề và tâm là đài gương sáng",
      c: "Quan điểm cho rằng tâm không cần lau quét",
      d: "Việc sử dụng văn tự để diễn đạt đạo lý",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Bài kệ Thần Tú: 'Thân thị Bồ đề thọ, Tâm như minh cảnh đài...'. Huệ Năng phản bác: 'Bồ đề bổn vô thọ, Tâm phi minh cảnh đài...'.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao ma chướng lại thường xuất hiện và nhiễu hại người tu thiền định?",
    options: {
      a: "Vì chúng muốn thử thách lòng kiên nhẫn của thiền giả",
      b: "Vì chúng sợ người tu hành thành đạo sẽ tiêu diệt quyến thuộc của chúng",
      c: "Vì người tu thiền làm xáo động môi trường sống của chúng",
      d: "Vì thiền giả đã vô tình gọi chúng đến thông qua các câu chú",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Bởi các loài ma kia thấy người tu hành, sinh tâm lo sợ cho bà con quyến thuộc của chúng sẽ bị tiêu diệt, nên chúng dùng đủ thần lực đến nhiễu hại người tu.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-4-thien-tong-quyen-nhi-thien-tong-quyen-nhi',
  slug: 'thien-tong-quyen-nhi',
  title: 'Thiền Tông (Quyển nhì)',
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
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-4-thien-tong/Tu_t%E1%BA%ADp_%C4%90%E1%BA%A1i_Th%E1%BB%ABa_Thi%E1%BB%81n.png',
      readingContent,
      tableOfContents: [
        { id: 'dai-thua-thien', label: 'IV. Đại Thừa Thiền' },
        { id: 'cac-phap-mon', label: 'I. Các Pháp Thiền Định Của Đại Thừa' },
        { id: 'su-truyen-thua', label: 'II. Hệ Thống Truyền Thừa Các Tổ' },
        { id: 'ma-chuong', label: 'III. Các Ma Chướng (Ngũ Ấm Ma)' },
        { id: 'kinh-sach', label: 'IV. Các Kinh Sách Về Thiền' },
        { id: 'tong-ket', label: 'Phần Tổng Kết' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-4-thien-tong/%C4%90%E1%BA%A1i_Th%E1%BB%ABa_Thi%E1%BB%81n_T%E1%BB%89nh_Th%E1%BB%A9c.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/GcM8ueF6hR4',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6wmjfhS0xeVEkl0aezImiG',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Thiền Tông (Quyển Nhì)',
    passPercentage: 70,
    questions,
  },
}

export default lesson