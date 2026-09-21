import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 2.1</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Giáo Hội Phật Giáo Việt Nam - HT. Thích Thiện Hoa. BẢN ĐỒ TU PHẬT - Nhà xuất bản Tôn Giáo.</p>
    </div>
  </div>

  <h2>TẬP 2.1: LUẬT TÔNG</h2>
  <p><strong>CON ĐƯỜNG TU THỨ NHẤT TRONG 10 TÔNG</strong></p>

  <hr>

  <h3 id="loi-noi-dau">LỜI NÓI ĐẦU</h3>
  <p><strong>MƯỜI CON ĐƯỜNG TU CHUYÊN MÔN CỦA GIỚI TU SĨ</strong></p>
  <p>Trong tập thứ nhất của Bản đồ tu Phật, chúng tôi đã chỉ rõ con đường tu hành thông thường của quảng đại quần chúng và của giới Phật tử tại gia rồi. Bắt đầu từ tập hai này, chúng tôi sẽ tuần tự nói đến mười con đường tu chuyên môn của giới tu sĩ, tức là mười tông phái trong Phật giáo.</p>
  <p>Cách tu hành từ đây có phần khó hơn các lối tu trước, phải tốn nhiều thì giờ và mất nhiều công phu tu tập. Vì thế, chỉ những người ít bị cuộc đời hằng ngày ràng buộc như giới tu sĩ, hay những ai muốn đi sâu vào đạo mới hy vọng thực hành có kết quả.<br>
  Tuy thế, đã là Phật tử hay muốn thành Phật tử chân chánh, chúng ta không thể mù mờ về những giáo phái của đạo Phật được. Mặc dù trong giới Phật tử ngày nay có một số đông vì cuộc đời ràng buộc chưa thể có đủ thì giờ và hoàn cảnh để thực hành trọn vẹn một trong 10 tông phái trên, nhưng chúng ta hãy cứ tìm hiểu và làm theo được phần nào để gieo nhân, rồi một ngày kia, khi đã đủ nhân duyên hãy tu tập hoàn bị hơn.</p>
  <p>Thật ra trong rừng giáo lý mênh mông bát ngát của Phật giáo, không biết bao nhiêu là đường ngang ngả dọc, chứ không phải chỉ có 10 con đường này mà thôi. Nhưng đây là những con đường chính, những đại lộ có thể đưa bộ hành đi đến đích mà không sợ lạc đường. Người học Phật biết được 10 con đường lớn này có thể nói là đã thấy được gần toàn diện khu rừng Phật giáo.</p>
  <p>Theo các kinh sách Phật giáo, người ta thường liệt kê các tông phái trên theo thứ tự như sau :<br>
  Câu xá tông, Thành thật tông, Luật tông, Pháp tướng tông, Tam luận tông, Thiên thai tông, Hoa nghiêm tông, Mật tông (hay Chơn ngôn tông), Thiền tông và Tịnh độ tông.<br>
  Nhưng sắp đặt như trên là đứng về phương diện thuần nghiên cứu, dựa trên giáo sử, đi từ Tiểu thừa đến Đại thừa.</p>
  <p>Trong Bản đồ tu Phật này, chúng tôi căn cứ theo trình độ hiểu biết, hoàn cảnh và sự nhu cầu thiết thực của đa số Phật tử Việt Nam, sắp đặt 10 tông theo thứ tự dưới đây. Chúng tôi sẽ tuần tự biên soạn và xuất bản theo thứ tự ấy, để quý vị Phật tử hiện đang cần những tông trên có trước những tài liệu mà nghiên cứu và tu hành :</p>
  <ol style="padding-left: 2.5rem;">
    <li>Luật tông (thuộc về Tiểu thừa và Đại thừa)</li>
    <li>Tịnh độ tông (thuộc Đại thừa)</li>
    <li>Thiền tông (thuộc cả Đại thừa và Tiểu thừa)</li>
    <li>Duy thức tông (thuộc Đại thừa, cũng gọi là Pháp tướng tông)</li>
    <li>Mật tông (thuộc Đại thừa, cũng gọi là Chơn ngôn tông)</li>
    <li>Pháp hoa tông (thuộc Đại thừa, cũng gọi là Thiên thai tông)</li>
    <li>Hoa nghiêm tông (thuộc Đại thừa, cũng gọi là Tánh không tông)</li>
    <li>Tam luận tông (thuộc Đại thừa, cũng gọi là Tánh không tông)</li>
    <li>Câu xá tông (thuộc Tiểu thừa, cũng gọi là Hữu tông)</li>
    <li>Thành thật tông (thuộc Đại thừa)</li>
  </ol>
  <p>Tóm lại, trong 10 tông này, Luật tông và Thiền tông thông cả Đại thừa và Tiểu thừa, Câu xá tông và Thành thật tông chỉ thuộc về tiểu thừa, sáu tông còn lại thuộc về Đại thừa.</p>
  <p>Tuy Phật giáo có chia ra nhiều tông phái, hay nhiều con đường tu hành như trên, nhưng người tu hành muốn đi theo con đường nào cũng đều đến một mục đích là thành đạo, chứng quả. Cũng như nhà có nhiều ngõ, đi ngõ nào cũng đều vào nhà được cả. Tuy nhiên, ngõ có rộng, có hẹp, có dài, ngắn khác nhau, con đường tu hành có khó, dễ, dài, ngắn không đồng. Hành giả phải kỹ lưỡng chọn lựa con đường nào thích hợp với trình độ và hoàn cảnh của mình mà tu hành, mới thâu hoạch được kết quả tốt đẹp.</p>
  <p>Trong mỗi tông, đều có rất nhiều kinh sách và phương pháp dạy bảo tu hành cũng rất tinh vi, có nhiều tầng bậc, thứ lớp. Hành giả phải tận tâm học tập và nghiên cứu mới thấu suốt được, rồi hạ thủ công phu một cách kiên nhẫn dẻo dai, mới được thành công.<br>
  Hiện nay Phật tử Việt Nam, kinh sách của 10 tông phái thì có tông rất nhiều, như Tịnh độ tông, Luật tông, Duy thức tông, có tông rất hiếm kinh sách như Mật tông, Tam luận tông… Nói là hiếm, chứ không phải là không có, nếu muốn nghiên cứu hay tu hành thì tông nào cũng vẫn có đủ kinh sách để cung cấp cho chúng ta. Khổ một nỗi là những kinh sách ấy bằng chữ Hán, lý nghĩa rất thâm huyền, súc tích, nếu không có một cái vốn Hán học vững vàng thì cũng khó mà thấu suốt được. Thêm nữa, chúng ta lại ít có những vị hướng dẫn uyên bác, chuyên môn để đưa đường chỉ lối. Có lẽ vì thế mà ở Việt Nam chúng ta, ít có Phật tử chuyên tu về một môn phái nào rõ rệt.</p>
  <p>Nhận thấy cái khuyết điểm ấy, nên chúng tôi với khả năng và sức hiểu biết có hạn lượng, cố gắng giới thiệu những con đường tu chuyên môn nói trên, tạm thời làm người hướng dẫn trong những bước đầu. Và chúng tôi hy vọng rằng nhờ những bước đầu đó, quý độc giả sẽ ham thích học hỏi và đi sâu dần vào các con đường tu, hướng dẫn những người đi sau, tạo thành những môn phái riêng biệt như ở Trung Hoa ngày xưa, và nhất là Nhật Bản bây giờ, mà tông phái nào cũng thịnh hành, có rất đông môn đồ như Thiền tông (mà tổ đình là chùa Tổng Trì), Tịnh độ tông (Tổ đình là chùa Tăng Thượng), Pháp tướng tông (Tổ đình là chùa Dược Sư v.v…).</p>
  <p>Nếu Phật giáo Việt Nam mà được cái phong cách sung mãn hùng hậu như thế, thì vận mệnh đất nước đã đến thời kỳ rạng rỡ, hưng thịnh rồi vậy.</p>
  <p><em>Soạn giả THÍCH THIỆN HOA</em></p>

  <hr>

  <h3 id="duyen-khoi-lap-tong">I. DUYÊN KHỞI LẬP TÔNG</h3>
  <p>Tông này dùng Luật làm chỗ căn cứ, nên gọi Luật tông. Đức Phật khi còn tại thế, tùy căn cơ, tùy hoàn cảnh mà chế ra nhiều giới luật để răn dạy đệ tử, hóa độ chúng sinh. Sau khi Ngài nhập Niết bàn, các đại đệ tử của Ngài, như Ưu Ba Ly là vị tinh thông về giới luật, đứng lên pháp tọa trong kỳ kết tập kinh điển lần thứ nhất, để tụng đọc lại những giới luật mà Đức Phật đã chế ra. Lần kết tập này chưa biên chép thành kinh điển, nên ngài Ưu Ba Ly phải đọc đi đọc lại đến 80 lần, đến nỗi mỗi người trong hội nghị đều thuộc lòng. Do đó, mới có tên gọi là “bát thập tụng luật”. Về sau, tuần tự theo thời gian, nguyên thủy Phật giáo lần hồi chia ra làm nhiều nhánh, hay bộ phái. Mỗi bộ phái đều theo một bộ luật riêng. Trong số các bộ luật này, bộ được nói đến và áp dụng nhiều nhất là các bộ : Thập tụng, Tứ phần, Tăng kỳ, Ngũ phần.</p>
  <p>Những bộ luật này được truyền sang Trung Hoa và được phiên dịch ra Hán văn. Đến đời Đường, ngài Trí Thủ luật sư chú giải các bộ ấy, và đệ tử của ngài là Đạo Tuyên luật sư, nhận thấy trong các bộ ấy, bộ luật Tứ phần là thích hợp với căn cơ người Trung Hoa, nên đã căn cứ vào bộ luật này để lập ra Luật tông. Ngài Đạo Tuyên là người Chung Nam Sơn, nên người đời cũng gọi tông này là “Chung Nam Sơn tông” để phân biệt với các Luật tông khác, như của các ngài Pháp Lệ bên phái Hữu tướng bộ, hay ngài Hoài Tố ở Đông Tháp.<br>
  Trong các tông này, chỉ có Luật tông của ngài Chung Nam Sơn là thịnh hành hơn hết và được truyền bá cho đến bây giờ, vì nó dung hòa cả Đại thừa lẫn Tiểu thừa.</p>

  <h3 id="tong-chi-dac-diem">II. TÔNG CHỈ VÀ ĐẶC ĐIỂM CỦA LUẬT TÔNG</h3>
  <p>Phàm một tổ chức, một công việc gì đúng đắn cũng đều phải tuân theo những quy luật nhất định. Hơn tất cả, sự tu hành lại càng phải tuân theo những giới luật nghiêm minh. Như chúng ta đã biết trong phần giáo lý căn bản, nghiệp là động lực chính của vũ trụ nhân sinh. Nghiệp định đoạt tất cả đời sống của chúng ta. Nghiệp có ba loại : nghiệp của hành động, nghiệp của lời nói và nghiệp của ý nghĩ. Nếu những nghiệp ấy được thanh tịnh, không tạo ra các điều ác, thì ta không thọ quả báo sinh tử luân hồi. Không có quả báo sinh tử luân hồi thì tất nhiên là được giải thoát. Muốn các nghiệp được thanh tịnh thì ta phải giữ gìn giới luật. Giữ gìn giới luật, chính là một phương pháp tu hành trong nhiều phương pháp, mà Phật đã chế ra. Phương pháp này rất thiết thực và rất hiệu nghiệm đối với Phật tử chúng ta :</p>
  <ul style="padding-left: 2.5rem;">
    <li>Giữ giới không sát nhân hại vật, hiện đời không làm người hung dữ, khỏi bị tù tội, về sau khỏi đọa trong ba đường dữ là địa ngục, ngạ quỷ, súc sinh, và khỏi bị người giết hại, đó là tu.</li>
    <li>Giữ giới không trộm cướp, thì hiện thời làm người lương thiện, khỏi bị giam hãm xiềng xích, đời sau không mắc quả báo, bị người giật của cướp đồ, đó là tu.</li>
    <li>Giữ giới không tà dâm, hiện thời thành người tốt, gia đình mình và người không bị rầy rà đánh đập, khổ sở vì ghen tuông, đó là tu.</li>
    <li>Giữ giới không nói dối, không nói láo xược, thèo lẻo, thêm bớt, đâm thọc, không nói hung ác và thô tục, thì không bị người khinh khi, lại được sự kính trọng, đó là tu.</li>
    <li>Giữ giới không cờ bạc, hút xách, rượu chè, thì khỏi mất tiền, thiếu nợ, khỏi say sưa, làm điều tội lỗi và khỏi bị người khinh bỉ, trí huệ tăng trưởng, đó là tu.</li>
  </ul>
  <p>Nói một cách tổng quát, giữ một giới là ngăn ngừa được một điều quấy, và thêm một điều tốt, giữ nhiều giới là ngăn ngừa được nhiều điều quấy và thêm được nhiều điều tốt. Bởi thế, nên giữ giới luật là phương pháp tu hành không xa thực tế và rất cần thiết cho các Phật tử cầu đạo giải thoát.<br>
  Nhờ giữ giới luật không làm các việc tội lỗi, nên tâm được “định”, do tâm định nên phát sinh ra trí tuệ sáng suốt. Nhờ có trí huệ, sáng suốt nên phá trừ được vô minh, si ám và được minh tâm kiến tánh thành Phật.</p>
  <p>Người tu tại gia có giữ giới, mới thành Phật tử chân chánh. Người xuất gia thọ Sa di, có giữ giới mới phải là chân tu. Thầy Tỳ kheo có giữ giới mới phải là Tỳ kheo thanh tịnh. Bồ tát có giữ giới mới phải là chân Bồ tát. Bởi thế nên trong ba môn vô lậu học (giới, định, huệ), “giới” đứng đầu hết cả.<br>
  Tông này sở dĩ lập ra là nhằm vào lợi ích thiết thực và chắc chắn của giới luật, như đã trình bày ở trên.</p>

  <h3 id="cac-loai-gioi-luat">III. CÁC LOẠI GIỚI LUẬT</h3>
  <p>Giới luật có nhiều tầng bậc, tùy theo căn cơ, tùy theo giới tu sĩ, tùy theo sự phát nguyện của kẻ tu hành mà áp dụng. Nhưng nói một cách tổng quát thì giới luật có thể phân chia làm hai loại lớn là giới luật của Tiểu thừa và giới luật của Đại thừa.</p>
  <ol style="padding-left: 2.5rem;">
    <li>Những giới luật nào có tính cách tiêu cực, tự lợi, chỉ có mục đích chính là tránh tội lỗi cho riêng mình là thuộc về giới Tiểu thừa. Tất nhiên trong khi giữ giới cho riêng mình, thì người khác cũng được lợi, như giữ giới không trộm cướp, thì mình được lợi là kìm giữ lòng tham, mà người khác cũng được lợi là khỏi cái khổ vì tiếc của đã mất. Mặc dù thế, giới không trộm cướp cũng chỉ liệt vào giới Tiểu thừa, vì trong khi giữ giới, mục đích chính, trực tiếp là giữ cho mình, còn cái lợi cho người chỉ là ảnh hưởng gián tiếp của giới ấy. Những giới như : Ngũ giới (5 giới chế cho người tại gia), Bát quan trai giới (8 giới cho người tại gia tập sống như người xuất gia), Sa di giới và Sa di ni giới (10 giới chế cho người mới xuất gia), Thức xoa (6 điều nữ học giới), Tỳ kheo giới (250 giới) và Tỳ kheo ni giới (348 giới) là những giới thuộc về Tiểu thừa.</li>
    <li>Những giới luật nào có tính cách tích cực, nhằm vào mục đích lợi tha hơn tự lợi thì thuộc vào Đại thừa giới. Những giới thuộc về Đại thừa như : 10 giới trọng và 48 giới khinh của Bồ tát, Tam tụ tịnh giới (gồm có : Nhiếp luật nghi giới là không làm việc ác, Nhiếp thiện pháp giới là làm các việc lành, Nhiêu ích hữu tình giới là làm ích lợi cho chúng sinh, như làm các việc có tính cách từ thiện xã hội v.v…).</li>
  </ol>
  <p>Nếu đứng về phương diện hành trì mà phân loại, giới luật lại có thể chia làm hai phần lớn : một phần thuộc về chỉ trì, nghĩa là ngăn dứt ác nghiệp, một phần thuộc về tác trì, nghĩa là hành động theo thiện nghiệp.</p>
  
  <p><strong>1. Về chỉ trì, có hai bộ giới bản :</strong></p>
  <ul style="padding-left: 2.5rem;">
    <li>a) Tỳ kheo giới bản, gồm 250 giới, chia làm 8 nhóm là : 1. Ba la di (4 giới), 2. Tăng tàng (13 giới), 3. Bất định (2 giới), 4. Xả đọa (30 giới), 5. Đơn đọa (90 giới), 6. Đề xá ni (4 giới), 7. Chúng học (100 giới), 8. Diệt tranh (7 giới). Hai trăm năm mươi giới này, có thể chia thành tám nhóm như trên, nhưng cũng có thể tùy nghi chia làm năm nhóm (ngũ thiên), sáu nhóm (lục tụ) hay 7 nhóm (thất tụ).</li>
    <li>b) Tỳ kheo ni giới bản (giới của Tỳ kheo ni) gồm có 348 giới, chia làm 7 nhóm là : 1. Ba la di (8 giới), 2. Tăng tàng (17 giới), 3. Xả đọa (30 giới), 4. Đơn đọa (178 giới), 5. Đề xá ni (8 giới), 6. Chúng học (100 giới), 7. Diệt tranh (7 giới). Ba trăm bốn mươi tám giới này, có thể chia làm bảy môn như trên, nhưng cũng có thể tùy nghi chia thành năm nhóm, sáu nhóm hay bảy nhóm như bên tăng.</li>
  </ul>
  <p>Giới Tỳ kheo và Tỳ kheo ni trên này gọi là Cụ túc giới, nghĩa là những giới đem lại cho người thọ vô lượng giới hạnh phước đức. Nhưng 250 hay 348 giới chưa phải là nhiều. Đó chỉ là mới tóm thâu những giới luật chính, làm giềng mối cho sự trì phạm mà thôi. Nếu kể cho hết giới luật thì về “lượng” sách đồng hư không, về “cảnh” lại lan khắp cả pháp giới. Nếu kể về bậc trung, thì bên Tăng có đến 3.000 oai nghi 80.000 tế hạnh, bên Ni có đến 80.000 oai nghi 120.000 tế hạnh.<br>
  Vì sao Phật lập ra nhiều giới luật như thế ? Vì mỗi một giới là ngăn ngừa một việc xấu tệ, mà con người chúng ta là phàm phu, từ tâm niệm cho đến hành vi, có không biết bao nhiêu việc xấu tệ, nên phải có vô số giới luật để ngăn ngừa.</p>

  <p><strong>2. Về tác trì, gồm có 20 kiền độ.</strong><br>
  Kiền độ nghĩa là phẩm loại, điều luật (Khandha).<br>
  Hai mươi kiền độ là :</p>
  <ol style="padding-left: 2.5rem;">
    <li>Thọ giới kiền độ.</li>
    <li>Thuyết giới kiền độ.</li>
    <li>An cư kiền độ.</li>
    <li>Tự tứ kiền độ. v.v…</li>
  </ol>
  <p>Sự chia ra chỉ trì và tác trì là cốt cho dễ phân biệt trong khi giữ giới, chứ thật ra, nói một cách rốt ráo thì trong chỉ có tác, trong tác có chỉ, không thể nói một cách dứt khoát được.</p>

  <h3 id="danh-tu-phuong-phap">IV. CÁC DANH TỪ VÀ PHƯƠNG PHÁP THỰC HÀNH CẦN BIẾT</h3>
  <p>Như chúng ta đã thấy ở trên, giới luật của Phật chế ra rất nhiều, do đó, danh từ chuyên môn và cách thức giữ giới cũng rất phức tạp. Vậy muốn giữ giới được kết quả, trước tiên phải biết những điều sau đây :</p>

  <p><strong>1. Sao gọi là “danh, chủng, tính, tướng” ?</strong></p>
  <ul style="padding-left: 2.5rem;">
    <li>a) Danh là tên (danh từ) nghĩa là tên chỉ mỗi giới, như “bất sát sinh, bất thâu đạo” v.v…</li>
    <li>b) Chủng là chủng loại, hay nhóm, như chúng ta thấy ở phần chia các giới của Tăng, Ni, Ba la di, Tăng tàng v.v…</li>
    <li>c) Tính là tâm tính, là tính chất ở bên trong, như người giữ giới, trong tâm niệm không nghĩ tưởng đến việc sát, đạo, dâm, vọng v.v… hoặc thấy người phạm cũng sinh tâm vui mừng hay liên tưởng đến. Giữ gìn tâm tính ở bên trong được thanh tịnh như vậy, gọi là “tính giới”.</li>
    <li>d) Tướng là hình tướng ở bên ngoài, như bên trong đã không nghĩ đến sát sinh, trộm cướp (tính giới) v.v… mà bên ngoài, không thực hiện những điều ác ấy, gọi là “tướng giới”.</li>
  </ul>
  <p>Tóm lại, mỗi khi phạm một điều tội lỗi, người giữ giới phải biết tội ấy tên gì (danh), sát hay đạo v.v… thuộc về loại nào (chủng), Ba la di hay Tăng tàng v.v… thuộc về nội tâm (tính) hay ngoài thân (tướng) ? Và cuối cùng hành giả phải biết tội ấy, theo luật, phải trị phạt thế nào mới được thanh tịnh ?</p>

  <p><strong>2. Sao gọi là “khai, giá, trì, phạm” ?</strong></p>
  <ul style="padding-left: 2.5rem;">
    <li>a) Khai là mở, cho làm.</li>
    <li>b) Giá là ngăn cấm, không cho làm.<br>
    Như khi Phật còn tại thế, Ngài cấm các vị Tỳ kheo leo lên cây, đó là “Giá”. Nhưng về sau, có vị Tỳ kheo vào rừng bị ác thú rượt, mà không dám leo lên cây để tránh vì sợ phạm giới, và cuối cùng phải bị ác thú hại. Từ đó, Phật dạy : “nếu có duyên sự thì được leo cây” như thế gọi là “Khai”.<br>
    Một thí dụ thứ hai : người Phật tử phải giữ giới không uống rượu, đó là “Giá”. Nhưng khi bị bệnh nặng, nếu cần rượu để hòa với thuốc, uống mới lành bệnh, thì tạm được dùng. Đó là “Khai”. Nhưng trước khi uống, phải bạch với chư Tăng.</li>
    <li>c) Trì là giữ gìn, như khi đã thọ giới mà giữ gìn cho được thanh tịnh thì gọi là “Trì”.</li>
    <li>d) Phạm là vi phạm, như đã thọ giới rồi mà không giữ gìn giới thì gọi là “Phạm”.</li>
  </ul>
  <p>Tóm lại, trong khi tu hành giữ giới luật, hành giả luôn luôn quan sát mỗi mỗi hành vi hằng ngày của mình, xét xem một cách sáng suốt thế nào là “Trì”, thế nào là “Phạm”, trong trường hợp nào, và giới nào được “Khai”, trong trường hợp nào và giới nào không được “Khai” v.v… Nói một cách tổng quát khi đã thọ giới thì phải “Trì”. Nếu không “Trì” là “Phạm”. Tuy thế, nếu vì lòng từ bi, vì lợi ích chung, hay vì trí tuệ thúc đẩy, thì có thể “Khai” mà không phạm tội. Nhưng nếu vì tâm nhiễm ô, vì phiền não thúc đẩy mà “Khai” thì là “Phạm”.</p>

  <p><strong>3. Sao gọi là “chỉ trì, tác phạm và tác trì, chỉ phạm” ?</strong></p>
  <ul style="padding-left: 2.5rem;">
    <li>a) Chỉ trì là nói về phương diện các điều ác quyết giữ gìn không gây tội lỗi.</li>
    <li>b) Tác phạm là nói về phương diện các điều ác, đáng lẽ phải giữ gìn, mà lại không giữ được, cho nên phải phạm tội lỗi.</li>
    <li>c) Tác trì là nói về phương diện các điều thiện, cần phải làm, mới là giữ giới.</li>
    <li>d) Chỉ phạm là nói về phương diện các điều thiện, nếu đình chỉ không làm, là phạm giới.</li>
  </ul>
  <p>Thí dụ : Về tội ăn trộm, nếu không làm là chỉ trì, nếu làm là tác phạm. Trái lại, về hạnh bố thí nếu làm là tác trì, nếu không làm là chỉ phạm.</p>

  <p><strong>4. Sao gọi là tính tội và giá tội, hay tính giới và giá giới ?</strong></p>
  <ul style="padding-left: 2.5rem;">
    <li>a) Tính tội là tội sẵn có trong bản tính chúng sinh, như sát, đạo, dâm, vọng. Bốn tính này có sẵn trong tâm tính chúng sinh từ vô thủy đến nay, hễ có chúng sinh là có chúng nó. Mỗi người, không cần ai dạy bảo, không cần học tập, đều biết sát, đạo, dâm, vọng. Vì thế cho nên gọi là tính tội.</li>
    <li>b) Giá tội là tội không sẵn có trong bản tính, nhưng do hoàn cảnh, do tập nhiễm mà phát sinh, như tội uống rượu chẳng hạn. Nói một cách tổng quát, ngoài bốn tính tội là sát, đạo, dâm, vọng, còn bao nhiêu tội khác đều là giá tội cả.</li>
    <li>c) Tính giới là giới để ngăn ngừa bốn tính tội là sát, đạo, dâm, vọng. Giới này rất quan trọng, nhưng cũng rất khó giữ. Giữ được bốn giới này thì sự tu hành tất sẽ kết quả và con đường giải thoát chắc chắn sẽ chờ đón hành giả.</li>
    <li>d) Giá giới là giới để ngăn ngừa tội lỗi do hoàn cảnh luyện tập mà phát sinh. Những giới này ít quan trọng hơn những giới trên. Nhưng muốn giữ được tính giới một cách ít khó khăn, phải cần giữ giá giới. Như người muốn đốn cây cổ thụ, trước tiên phải chặt dần ngành ngọn, như người dụng binh giỏi, trước khi muốn chiếm một đô thị lớn, phải ngăn chặn các con đường đi vào đô thị ấy.</li>
  </ul>

  <h3 id="ket-luan">V. KẾT LUẬN</h3>
  <p>Như chúng ta đã rõ, mục đích của giáo pháp mà Đức Phật chỉ bày cho chúng ta là để được minh tâm, kiến tính và thành Phật. Tất cả các tông phái, mặc dù có chủ trương và đặc điểm khác nhau, nhưng mục đích cuối cùng đều là một : Giác ngộ và Thành Phật.</p>
  <p>Luật tông cũng không đi ra ngoài mục đích trên, mặc dù phương pháp có khác. Phần nhiều các tông khác thì phải hiểu rồi mới tu, Luật tông, trái lại, chủ trương : hãy tu đi rồi sẽ hiểu, hãy giữ gìn giới luật cho nghiêm chỉnh, thì tâm sẽ định tĩnh, thanh tịnh, tâm đã thanh tịnh, thì trí tuệ sẽ sáng suốt, chân tâm sẽ biện bày, Phật tính sẽ phát lộ.</p>
  <p>Thật là một chủ trương rất thiết thực, mà kết quả lại chắc chắn ! Những kẻ học rộng biết nhiều mà không giữ giới cũng chẳng khác gì ngọn đèn trước gió, có thể sáng lắm, nhưng không biết sẽ tắt khi nào. Trái lại, kẻ học ít biết hẹp mà giữ giới một cách chân thành, thì cũng như ngọn đèn có ống khói, khi mới thắp thì còn lu, nhưng không tắt và càng cháy lâu càng cháy tỏ.</p>
  <p>Vì những lý lẽ trình bày ở trên, Luật tông đều thích hợp với mọi căn cơ, nhất là với những căn cơ chậm lụt. Ở đời chúng ta thường thấy phần nhiều những người có căn trí lanh lẹ, hiểu nhanh biết lẹ, nhưng vì hay ỷ vào sức mình, không chịu đặt mình vào khuôn phép kỷ luật nên cuối cùng, chẳng thu hoạch được kết quả gì tốt đẹp cả. Trái lại, những kẻ có căn trí tầm thường, nhiều khi chậm lụt nữa, nhưng lại dễ thành công trên đường đời cũng như trên đường đạo, vì họ biết thủ phận, chịu khó khép mình vào kỷ luật, không tự mãn, tự cao. Trong đệ tử của Phật, có ai có một địa vị xã hội hạ tiện (đi gánh phân) và một căn trí thấp thỏi như ngài Ưu Ba Ly ? Thế mà ngài Ưu Ba Ly đã trở thành một đại đệ tử của Phật, đã thành một bậc hiền thánh, chỉ vì đã nghiêm trì giới luật ! Chúng ta đây địa vị xã hội và căn trí chắc chắn không kém ngài Ưu Ba Ly, lẽ nào chúng ta không thu hoạch được thành quả tốt đẹp như Ngài, nếu chúng ta cũng tập nghiêm trì giới luật như Ngài ?</p>
  <p>Trước khi chấm dứt tông này, chúng tôi xin mời quý Phật tử hãy suy xét kỹ lưỡng và tự trả lời mấy câu hỏi giản dị sau đây :</p>
  <ul style="padding-left: 2.5rem;">
    <li>Tu như thế này có cầu kỳ, xa thực tế không ?</li>
    <li>Đối với mình, con đường tu về Luật tông trong “Bản đồ tu Phật” này có cần thiết, thích hợp với mình không ?</li>
  </ul>
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