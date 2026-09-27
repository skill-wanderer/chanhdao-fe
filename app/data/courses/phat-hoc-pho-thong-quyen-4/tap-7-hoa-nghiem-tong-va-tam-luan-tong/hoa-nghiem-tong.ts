import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 7.1</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Nội dung này được dựa trên bài giảng của Cố HT Thích Thiện Hoa, nhằm giúp người đọc dễ dàng nắm bắt các ý chính và thuận tiện trong việc học tập, tham khảo; không phải là bản chép nguyên văn toàn bộ bài giảng.</p>
    </div>
  </div>

  <h2>TẬP 7.1: HOA NGHIÊM TÔNG</h2>
  <p><strong>(HIỀN THỦ TÔNG)</strong></p>
  <p><strong>CON ĐƯỜNG TU THỨ BẢY TRONG MƯỜI TÔNG</strong></p>

  <hr>

  <h3 id="duyen-khoi">I. DUYÊN KHỞI LẬP TÔNG</h3>
  <p>Tông này thuộc về Đại thừa căn cứ theo giáo nghĩa trong kinh Hoa Nghiêm là một bộ kinh cao nhất mà Đức Phật đã nói ra, nên gọi là Hoa Nghiêm tông.<br>
  Người sáng lập ra tông này là ngài Đỗ Thuận, một vị Hòa thượng đời Đường. Ngài đã thâu góp ý nghĩa mầu nhiệm của kinh Hoa Nghiêm, làm ra bộ “Pháp giới quán”.<br>
  Người kế vị ngài Đỗ Thuận là ngài Trí Nghiễm, ở chùa Chí Tướng. Ngài Trí Nghiễm đã làm ra nhiều bộ luận có giá trị để giãi bày nghĩa lý của tông này như các bộ : “Sưu huyền ký”, “Thập huyền môn”, “Ngũ thập yếu vấn đáp”.<br>
  Vị thừa kế ngài Trí Nghiễm và đã có nhiều công nghiệp lớn đối với tông này là ngài Pháp Tạng, cũng gọi là ngài Hiền Thủ quốc sư. Ngài đã làm ra bộ “Thám huyền ký” và nhiều chương số khác, khiến cho Hoa Nghiêm tông rất được thịnh hành và phát triển trong thời Ngài. Do đó, Tông này cũng thường gọi là Hiền Thủ tông. Sau khi Ngài Hiền Thủ qua đời được ít lâu, kinh Hoa Nghiêm được dịch lại bằng Hán văn bộ mới, ngài Trừng Quán, tức là Thanh Lương quốc sư, dựa theo ý nghĩa bộ Hoa Nghiêm mới dịch này mà làm ra bộ “Hoa Nghiêm sớ sao”, bày giải nghĩa lý rộng rãi, sâu xa, mầu nhiệm của Hoa Nghiêm kinh. Vì thế, Hoa Nghiêm tông lại càng được người dùng sùng mộ, nhất là trong giới thượng lưu trí thức nước Tàu.</p>

  <h3 id="ton-chi">II. TÔNG CHỈ VÀ GIÁO LÝ CĂN BẢN</h3>
  <p>Trong các bộ kinh của Đức Phật, kinh Hoa Nghiêm là bộ kinh có ý nghĩa cao sâu, mầu nhiệm nhất. Chỉ những vị đại đệ tử, căn cơ minh mẫn, lanh lẹ mới có thể hiểu thấu được. Do đó, Hoa Nghiêm tông chỉ thích hợp cho những ai đã có một căn bản Phật pháp vững chắc và đã quen với lối suy luận trừu tượng của giáo lý nhà Phật. Đem một giáo lý uyên thâm của Phật pháp ra trình bày trong một tập sách phổ thông như thế này, thật khó mà nói cho rõ ràng, đầy đủ nghĩa lý của Hoa Nghiêm tông. Tuy thế, để có một bộ sách gồm đầy đủ 10 tông phái của Phật giáo Trung Hoa, và để quý độc giả có đủ tài liệu để so sánh sự sai khác của mỗi tông, chúng tôi không thể không nói đến Hoa Nghiêm trong khi điểm qua tông chỉ và giáo lý căn bản của mười tông. Chúng tôi sẽ cố gắng trình bày một cách giản dị, gọn gàng về giáo lý đặc sắc của tông này, và cũng mong mỗi quý vị độc giả theo dõi một cách chăm chú sự trình bày này, ngõ hầu vấn đề được sáng tỏ.<br>
  Tông này được gọi là “Viên giáo”, nghĩa là giáo lý viên dung, hoàn toàn đầy đủ.<br>
  Tông này chủ trương “Pháp giới duyên khởi”, nghĩa là vũ trụ vạn hữu trùng trùng do nhân duyên hòa hợp mà thành. Nói một cách khác, mọi sự vật nhỏ như hạt bụi cho đến một vật lớn như trăng sao, đều nương vào nhau, làm nhân làm quả, lớp lớp không cùng tột, dung thông nhau, đối chọi nhau, ảnh hưởng lẫn nhau mà có. Mỗi pháp, mỗi pháp, trong vũ trụ không thể tồn tại riêng rẽ, biệt lập mà tự có được. Cái này có, là nhờ cái kia, cái kia có là nhờ cái này. Cái này và cái kia tương quan, tương duyên, lớp lớp không cùng tột, cho nên cũng gọi là “vô tận duyên khởi” hay “trùng trùng duyên khởi”.<br>
  Vì là trùng trùng duyên nhau, nên một là thảy, thảy là một, mọi sự vật trong vũ trụ đều dung thông nhau. Và do đó, trong kinh Hoa Nghiêm đã có nêu lên pháp môn “Sự sự vô ngại pháp giới”.<br>
  Để hiểu rõ nghĩa lý của pháp môn này, chúng ta hãy đi theo phép quy nạp gồm có bốn giai đoạn sau đây, cũng gọi là bốn pháp giới.</p>

  <ol style="padding-left: 2.5rem;">
    <li><strong>Sự pháp giới :</strong> Sự là nói về các hình tướng sai biệt của các pháp trong vũ trụ. Trong vũ trụ, các pháp đều có giới hạn rõ ràng, như nước lạnh, nước đá, nước sôi, hơi nước, đều có tướng trạng khác nhau. Đó là đứng về sự mà quan sát vũ trụ vạn hữu, hay nói theo danh từ đạo Phật là “Sự pháp giới”.</li>
    <li><strong>Lý pháp giới :</strong> Lý là nói về cái phần bên trong, vô hình của sự vật. Đây tức là lý tánh bình đẳng, chỗ nương tựa cho tất cả sự tướng; lý dung thông khắp tất cả, như nước lạnh, nước đá, hơi nước, tuy tướng trạng khác nhau, nhưng thể tánh vẫn là một. Vũ trụ vạn hữu không chỉ có phần sự tướng mà còn có phần lý tánh nữa. Đó tức là “Lý pháp giới”.</li>
    <li><strong>Lý sự vô ngại pháp giới :</strong> Như trên chúng ta đã thấy, mỗi pháp đều có Sự và Lý. Lý do nơi Sự mà rõ, Sự nương vào Lý mà thành. Lý và Sự dung thông, như nước tức là sóng, sóng tức là nước. Lý, Sự trong mỗi pháp đã dung thông, thì Lý Sự trong pháp giới cũng dung thông, vô ngại. Đó là ý nghĩa của “Lý, Sự vô ngại pháp giới”.</li>
    <li><strong>Sự sự vô ngại pháp giới :</strong> Trong pháp giới, có hằng hà sa số sự vật, hình tướng tuy khác nhau, giới hạn tuy bất đồng, nhưng lý tánh lại dung thông, bình đẳng, không có phân chia ngăn cách. Nhờ lý, mà sự sự được dung thông vô ngại. Như các vật dụng bằng điện, nào quạt điện, đèn điện, máy lạnh, bàn ủi điện, lò điện v.v… tuy mỗi vật đều có hình dáng, công dụng sai khác, nhưng đều thông nhau qua luồng điện chi phối lẫn nhau, ảnh hưởng qua lại. Một thí dụ khác : nhiều hồ chứa nước, hình dáng, rộng hẹp khác nhau, nhưng ăn thông với nhau bằng những ống nước, do đó sự đầy vơi, nhơ sạch của một hồ này đều liên quan mật thiết đến tất cả các hồ khác.</li>
  </ol>

  <p>Trên đây là những thí dụ vô cùng thô thiển, cốt để gợi lên một ý niệm về “Sự sự vô ngại pháp giới” thôi, chứ không đúng hẳn. Trong hai thí dụ trên, chúng ta lấy những vật dụng điện khí hay những hồ nước để hình dung cho Sự sự trong pháp giới, và lấy những luồng điện hay luồng nước để hình dung cho Lý của pháp giới. Thí dụ như thế, người ta sẽ tưởng rằng Sự và Lý là hai loại khác nhau, có thể phân tách ra được. Nhưng thật ra, Lý và Sự không thể phân tách được, trong Sự có Lý, trong Lý có Sự. Sự Lý chẳng qua là hai phương diện của một vấn đề vô cùng tế nhị, mà lý trí của chúng ta đã phân tách ra để tạm nghiên cứu đó thôi.<br>
  Để tóm tắt ý nghĩa của bốn pháp giới này, chúng tôi xin nói một cách giản dị như sau :<br>
  Pháp giới gồm triệu triệu sự vật khác nhau, như A, B, C, v.v… (sự pháp giới).<br>
  Trong mỗi sự vật đều có lý tánh bình đẳng, mà chúng tôi hình dung là L (lý pháp giới).<br>
  Lý tánh bình đẳng ấy dung thông với tất cả mọi sự vật, như A=L; B=L; C=L (lý, sự vô ngại pháp giới).<br>
  Nhờ lý tánh dung thông với mọi sự vật, mà mọi sự vật trong vũ trụ trở thành dung thông nhau, vô ngại đối với nhau, như A=B=C v.v… (sự sự vô ngại pháp giới).</p>

  <h3 id="sau-tuong">SÁU TƯỚNG VÀ MƯỜI LÝ HUYỀN DIỆU CỦA CÁC PHÁP</h3>
  <p>Trong pháp giới, sở dĩ sự sự được vô ngại, dung thông, là do các pháp đều có đủ “sáu tướng” và “mười lý huyền diệu” sau đây :</p>

  <h4>SÁU TƯỚNG VIÊN DUNG</h4>
  <p>Dựa theo bộ kinh Hoa Nghiêm, ngài Bồ tát Thế Thân đã làm ra bộ “Thập địa luận” để giải thích nghĩa lý của sáu tướng (lục tướng). Sáu tướng này được gọi là viên dung vì nó có những đức tính viên mãn, dung thông, vô ngại. Sáu tướng của sự vật trong vũ trụ ấy là :</p>
  <ol style="padding-left: 2.5rem;">
    <li><strong>Tổng tướng.</strong> Tổng tướng là cái tướng bao trùm tất cả, tổng cộng tất cả các tướng sai biệt. Như khi ta nói đến cái nhà, là gồm tất cả cột, kèo, tường, mái, đá gạch v.v… Vậy cái nhà tức là tổng tướng.</li>
    <li><strong>Biệt tướng.</strong> Biệt tướng là nói các tướng riêng biệt; nhiều biệt tướng cộng lại thành tổng tướng. Như các biệt tướng trong cái nhà là cột, kèo, tường, mái, gạch, đá v.v… Đã có Tổng thì tức phải có Biệt; nếu không có Biệt, thì cũng không thể lấy gì mà gọi là Tổng.</li>
    <li><strong>Đồng tướng.</strong> Đồng tướng là cái tướng chung cùng, dung hòa với nhau, không ngăn ngại nhau, không trái chống nhau. Như kèo, cột, tường, mái, tuy khác nhau, nhưng không ngăn ngại nhau mà vẫn đồng hướng về một mục tiêu chung là cái nhà.</li>
    <li><strong>Dị tướng.</strong> Dị tướng là các tướng riêng biệt, cái này, cái kia, hình tướng không giống nhau, mặc dù vẫn cùng nhau dung hòa để gánh vác một nhiệm vụ chung; như cột, kèo, tường, mái trong một cái nhà, không cái nào giống cái nào. Dị tướng không phải là biệt tướng, cũng như đồng tướng không phải là tổng tướng.<br>
    Như 100 đồng bạc là tổng tướng. Tổng tướng này là tổng cộng của các tờ giấy bạc. Những tờ giấy bạc là biệt tướng. Những tờ giấy bạc này to nhỏ, hình ảnh, màu sắc khác nhau là dị tướng. Mặc dù là hình tướng khác nhau, nhưng cũng là những tờ giấy bạc cả, tánh chất “bạc” ấy là đồng tướng.</li>
    <li><strong>Thành tướng.</strong> Thành tướng là tướng thành tựu. Sự chung cùng để thành ra một cái gì, đó là thành tướng. Như cái nhà là sự thành tựu của các cái cột, kèo, tường, mái v.v… Vậy cái nhà, đứng về phương diện công dụng để ở, là thành tướng của các cột, kèo, tường, mái v.v… Nếu lấy thí dụ 100 đồng, thì số tiền là thành tướng của các tờ giấy bạc. Nhờ sự kết hợp của những tờ giấy bạc này mà có được số bạc 100 để mua được một vật gì đó, như thế là thành tướng.</li>
    <li><strong>Hoại tướng.</strong> Hoại tướng là cái tướng độc lập của các pháp. Như cột, kèo, tường, mái, trong khi hợp tác với nhau để thành cái nhà, thì vẫn giữ cái địa vị riêng của chúng nó là cột, kèo, tường, mái, chứ không phải vì thành cái nhà mà chúng nó không còn là cột, kèo, tường, mái nữa. Cũng như trong khi hợp thành số bạc 100 đồng, các tờ giấy bạc vẫn giữ nguyên giá trị của mỗi thứ.</li>
  </ol>

  <p>Sáu tướng này phân ra làm ba đôi, gọi là “tam đối lục tướng” :<br>
  Tổng, Biệt cùng đối nhau, thuộc về Thể.<br>
  Đồng, Dị cùng đối nhau, thuộc về Tướng.<br>
  Thành, Hoại cùng đối nhau, thuộc về Dụng.</p>

  <p>Nếu chúng ta lấy con sư tử bằng vàng làm thí dụ, thì toàn thể thân hình của nó là Tổng tướng; mỗi bộ phận riêng rẽ, như tai, mắt, mũi, lưỡi là Biệt tướng; chất vàng của nó là Đồng tướng; mỗi bộ phận có hình dáng riêng khác là Dị tướng; mỗi bộ phận cộng tác hòa hiệp với nhau để thành hình con sư tử là Thành tướng; nhưng mỗi bộ phận đều có phạm vi riêng biệt, tự lập của nó là Hoại tướng.<br>
  Khi chúng ta nói đến Tổng, Đồng, Thành là nói về phương diện toàn thể vũ trụ; khi chúng ta nói đến Biệt, Dị, Hoại là nói về phương diện hiện tượng giới, trong ấy mỗi sự vật đều phơi bày riêng rẽ khác nhau. Theo trong kinh Hoa Nghiêm thì Tổng, Đồng, Thành tướng thuộc về môn hàng bố (nghĩa là hiển lộ, phơi bày la liệt). Một bên là bình đẳng, một bên là sai biệt. Nhưng bình đẳng và sai biệt tương tức, tương nhập, viên dung không ngại. Tương tức nghĩa là cái này tức là cái kia, như nước tức là sóng, tương nhập nghĩa là ăn nhập với nhau, dung thông nhau, như mặt gương này và mặt gương kia phản chiếu vào nhau không cùng mà không cản trở gì nhau. Vì tương tức, tương nhập, nên lìa tổng tướng thì không dị tướng, lìa thành tướng thời không hoại tướng. Tóm lại, viên dung không lìa hàng bố, hàng bố không lìa viên dung, viên dung tức hàng bố, hàng bố tức viên dung. Hết thảy các pháp đều đủ sáu tướng ấy, không một pháp nào là không viên dung tự tại, tức nhập không ngại. Vì thế cho nên gọi là 6 tướng viên dung. Đấy là ý nghĩa huyền diệu của Hoa Nghiêm nhất thừa viên giáo.</p>

  <h3 id="muoi-huyen-mon">MƯỜI LÝ HUYỀN DIỆU CỦA CÁC PHÁP HAY MƯỜI HUYỀN MÔN</h3>
  <p>Ngoài sáu tướng nói trên, các pháp còn có 10 lý huyền diệu, hay 10 đức tính huyền diệu, mà bộ kinh Hoa Nghiêm sớ sao và bộ Thám huyền ký của ngài Hiền Thủ có giải thích như sau :</p>
  <ol style="padding-left: 2.5rem;">
    <li><strong>Môn “đồng thời đầy đủ các pháp tương ưng” (đồng thời cụ túc tương ưng) :</strong> Nghĩa là trong mỗi một pháp nào đồng thời cũng có đủ, hàm chứa tất cả các pháp khác trong vũ trụ. Như một giọt nước có đủ khí vị của muôn ngàn sông, biển.</li>
    <li><strong>Môn “rộng và hẹp tự tại không ngại” (quảng hiệp tự tại vô ngại) :</strong> Nghĩa là một vật gọi là lớn, chưa hẳn là lớn, một vật gọi là nhỏ chưa hẳn là nhỏ. Nhờ cái lý dung thông, một vật nhỏ như đầu mảy lông, có thể chứa được cả thái hư mà còn rộng. Một vật lớn như thái hư, có thể nằm gọn trong đầu mảy lông, mà không chật. Đây muốn nói rằng, trong pháp giới, sự sự đã vô ngại, dung thông thì quan niệm về sự rộng hẹp, lớn nhỏ đều là những danh từ suông, không có biên giới nhất định giữa một vật này và một vật khác; một vật nhỏ như vi trần có liên quan đến vũ trụ; một vật lớn như vũ trụ có liên quan đến một vi trần. Cho nên kinh Hoa Nghiêm có chép : “Trong một mảy trần, hết thảy cõi nước rộng rãi an trụ”. Để giải thích ý nghĩa này, kinh thường dạy : “Sự nhờ Lý mà được dung thông tự tại không ngăn ngại”.</li>
    <li><strong>Môn “một và nhiều dung nhau không đồng” (nhất, đa tương dung bất đồng) :</strong> Nghĩa là về số lượng, một và nhiều vật có thể dung nạp lẫn nhau, mà vẫn không phá hoại cái tướng riêng biệt (an lập) của mỗi vật. Như muôn ngàn ngọn đèn thắp sáng một gian nhà, ngọn này ngọn kia lẫn hiệp với nhau, nhưng ngọn nào cũng có cái ánh sáng riêng của nó.</li>
    <li><strong>Môn “các pháp tương tức tự tại” (chư pháp tương tức tự tại) :</strong> Nghĩa là các pháp cùng dung, cùng tức, không ngần ngại nhau. Như một pháp khi bỏ mình đồng với các pháp khác, thì toàn thể đều về nơi pháp kia; nếu một pháp nhiếp thâu các pháp đồng về mình, thì hết thảy các pháp kia lại về nơi một pháp thâu nhiếp ấy. Cũng ví như chất vàng với sắc vàng, hai pháp ấy không rời nhau.</li>
    <li><strong>Môn “ẩn mật, tỏ rõ đều thành” (bí mật ẩn hiển câu thành) :</strong> Nghĩa là một pháp có nhiều phương diện, khi phương diện này hiển thì phương diện kia ẩn; khi phương diện kia ẩn, thì phương diện này hiển; trong ẩn có hiển, trong hiển có ẩn; ẩn hiện đắp đổi cho nhau mà thành tựu. Sự ẩn hiện ấy cũng không nhất định cái nào sau cái nào trước, cũng không ngần ngại, chống đối nhau. Như một pho tượng bằng vàng, khi chú ý đến vàng thì không thấy cái đẹp của pho tượng, khi chú ý đến cái đẹp của pho tượng thì không thấy vàng. Tóm lại, khi cái đẹp hiển thì vàng ẩn, khi vàng hiển thì cái đẹp ẩn.</li>
    <li><strong>Môn “vi tế dung nhau, an lập” (vi tế tương dung an lập) :</strong> Vi tế nghĩa là nhỏ nhiệm mà rõ ràng. Một vật nhỏ nhiệm có thể bao trùm một vật nhỏ nhiệm khác mà không cản trở nhau, không phá hoại cái tướng của nhau. Như một giọt nước bao gồm nhiều hạt nước, mỗi hạt nước gồm nhiều hóa chất, mỗi hóa chất gồm nhiều nguyên tử, mỗi nguyên tử gồm nhiều điện tử, giữa những điện tử có cái nhân : Mỗi thứ đều dung nhau và an lập trong nhau.</li>
    <li><strong>Môn “cảnh giới tướng võng Nhơn đà la” (Nhơn đà la võng cảnh giới) :</strong> Nhơn đà la tức là phiên âm của chữ Indra là cõi trời Đế Thích. Theo Bà-la-môn giáo, thì trên cõi trời Nhơn đà la, có cái màn lưới bằng bửu châu; mỗi hạt bửu châu chói hiện đến muôn trượng, hạt này hạt khác phản chiếu nhau chói sáng lẫn nhau, lớp lớp không cùng tận. Môn này cũng như vậy : trong mỗi pháp có nhiều pháp khác, trong nhiều pháp khác lại có nhiều pháp khác nữa. Cứ thế nhân mãi lên cho đến vô cùng tận. Kinh Hoa Nghiêm có chép : “Hết thảy thế giới đều như thế giới màn lưới Nhơn đà la”.</li>
    <li><strong>Môn “nhơn sự rõ pháp, sanh trí hiểu biết” (thác sự hiển pháp sanh giải) :</strong> Nghĩa là nhờ sự mà hiểu được lý; nhưng khi lý đã rõ, thì lý lại lan rộng làm cho chúng ta hiểu rộng sâu xa qua nhiều sự khác. Đây muốn nói trí hiểu biết lan rộng dung thông qua sự vật, như vết dầu lan trên mặt nước, chỉ một tia lửa có thể bừng cháy rất xa.</li>
    <li><strong>Môn “mười đời cách pháp dị thành” (thập thế cách pháp dị thành) :</strong> Đây muốn nói thời gian mặc dù cách biệt nhau từ quá khứ đến hiện tại qua tương lai, nhưng chính nhờ thế mà các pháp được thành một cách dễ dàng. Tại sao chia thời gian thành mười đời mà không chia làm ba đời ? Đáng lẽ chỉ nói quá khứ, hiện tại, tương lai là đủ. Nhưng muốn chia một cách rốt ráo, tinh vi, trong kinh chia mười đời như sau : trong quá khứ cũng gồm có quá khứ, hiện tại và tương lai; trong hiện tại cũng gồm như thế và tương lai cũng vậy; ba đời, mỗi đời lại chia nhỏ làm ba thành chín. Nhưng nếu chia nhỏ như thế mà không có ý niệm tổng quát so sánh liên hệ với nhau thì cũng không có được ý niệm về thời gian. Vì thế cho nên ngoài chín niệm biệt ấy, còn cộng thêm một niệm tổng (tổng quát) nữa, thành ra mười.</li>
    <li><strong>Môn “chủ và bạn nương nhau làm đầy đủ công đức sáng suốt hoàn toàn” (chủ bạn, viên minh, cụ đức) :</strong> Như chúng ta đã thấy ở các phần trên : các pháp nương nhau mà thành. Nếu ta lấy một pháp làm chủ, thì các pháp khác là bạn. Chủ và bạn nương nhau làm đầy đủ công đức, lớp lớp không cùng tận, như mặt trăng sáng trên không, chung quanh vây những vì sao nhấp nháy, rồi trên mặt đất, bao nhiêu sông, ngòi, ao hồ, lại phản chiếu ánh sáng trăng sao ở trên không, làm cho cảnh vật khắp nơi càng thêm rạng rỡ.</li>
  </ol>
  <p>Tóm lại, mười lý huyền diệu này cộng với sáu tướng nói trên của các pháp là nguyên nhân giải thích vì sao “sự sự được vô ngại” trong pháp giới, và cắt nghĩa một cách đầy đủ giáo lý “trùng trùng duyên khởi” mà Hoa Nghiêm tông chủ trương.</p>

  <h3 id="phuong-phap-tu">III. PHƯƠNG PHÁP TU HÀNH</h3>
  <p>Giáo lý căn bản của Hoa Nghiêm tông đã sâu xa mầu nhiệm, thì phương pháp tu hành tất nhiên cũng phải cao siêu, mầu nhiệm mới đưa hành giả đến cứu cánh tu hành. Tựu trung, trong các phương pháp tu hành ấy, ba pháp quán về pháp giới sau đây được xem là các pháp môn trọng yếu và có hiệu quả rốt ráo nhất :</p>
  <ol style="padding-left: 2.5rem;">
    <li><strong>Chơn không quán;</strong> Chơn nghĩa là chơn thật, không hư vọng; Không là không bị sắc tướng chi phối, ngăn ngại.<br>
    Pháp quán này dựa trên “lý pháp giới” mà lập ra. Mục đích của pháp quán này là dứt vọng tình, rõ chơn tánh, khiến cho hành giả thấy sắc mà không bị sắc ngăn ngại và nhận được rằng toàn thể là chơn không; thấy không, mà nhận được rằng đó không phải là không hẳn (đoạn không) mà toàn là chơn tánh. Tóm lại, pháp quán này nhìn thấy qua được sự đối đãi giả dối của cái không và cái có, để nhận rõ được cái “lý của vũ trụ (lý pháp giới) là chơn không” (đã giải ở trên).</li>
    <li><strong>Lý sự vô ngại quán :</strong> Pháp quán này y theo “lý sự vô ngại pháp giới” mà lập ra. Lý là thể tánh thanh tịnh sáng suốt; Sự là hình tướng phân hạn của các pháp. Lý sự vô ngại, như trong phần giáo lý căn bản đã có nói ở trước, nghĩa là lý và sự không phải là hai loại trái chống nhau, ngăn cách nhau mà trái lại, dung thông nhau. Lý, sự thấu suốt, viên dung không ngại nên gọi là “lý sự vô ngại quán”.<br>
    Theo phép quán này, hành giả quan sát cái sắc tướng của một mảy trần mà khám phá ra được cái lý của cả vũ trụ. Tức là qua cái tướng hư giả của sự vật mà thấy được cái tánh sáng suốt của nhứt chơn.</li>
    <li><strong>Châu biến hàm dung quán :</strong> Pháp quán này dựa trên cái lý “sự sự vô ngại pháp giới” mà lập ra. Châu biến là lan ra, biến hóa cùng khắp tất cả; hàm dung là bao gồm, thâu nhiếp, dung thông tất cả. Châu biến hàm dung quán là pháp quán nhằm mục đích nhận chân được rằng : các pháp một và nhiều không ngại nhau, lớn và nhỏ trùm nhau, dung nhiếp lẫn nhau, lớp lớp không cùng tột, ẩn hiện tự tại, đồng thời tương tức tương nhập thâu nhiếp, dung thông nhau cho đến vô cùng vô tận, trùm chứa cả vũ trụ bao la.<br>
    Theo pháp quán này, hành giả quán sát cái Lý nơi một Sự, rồi do một Sự ấy mà mỗi mỗi Sự khác cũng đều thấy rõ. Hành giả lại quán mọi Sự tức nơi Lý, rồi theo Lý ấy mà mỗi mỗi Sự đều dung thông.</li>
  </ol>

  <h3 id="qua-vi">IV. QUẢ VỊ TU CHỨNG</h3>
  <p>Theo Hoa Nghiêm tông, giải thoát vẫn không phá hoại thế gian tướng; nói một cách khác, không phải phủ nhận thế gian tướng mà có thể tìm thấy giải thoát ở một nơi nào khác. Ngay trong thế gian này, nếu hành giả phân biệt được chân vọng, khử trừ điên đảo, khiến cho tâm thanh tịnh để cùng thật tại nhất trí : đó là giải thoát.<br>
  Quan niệm về giải thoát của Hoa Nghiêm tông không khác với Thiên Thai tông, nghĩa là đều chủ trương một cách lạc quan rằng chúng sanh và Phật không sai cách : không nhận chân được lý trùng trùng duyên khởi, sự sự vô ngại pháp giới, là chúng sanh; giác ngộ được chân lý trên là Phật.</p>

  <h3 id="ket-luan">V. KẾT LUẬN</h3>
  <p>Hoa Nghiêm tông vì y theo bộ kinh cao nhất của Phật mà thành lập, nên được liệt vào hạng viên giáo, nghĩa là giáo lý hoàn toàn viên mãn. Và cũng vì là viên giáo cho nên phải cần một căn trí thông lợi mới tu theo được.<br>
  Vậy hành giả, trước khi muốn lựa chọn con đường này để tiến bước, cần phải cân nhắc cho kỹ lưỡng, nhất là phải tìm nghiên cứu thêm cho thấu đáo. Nếu thấy nó khó hiểu, quá cao đối với căn cơ của mình, thì tốt hơn, nên tìm một con đường khác, bởi vì con đường nào, cuối cùng cũng đưa đến giải thoát cả.<br>
  Nhưng nếu quý vị nào nhận thấy căn cơ của mình có thể theo kịp được giáo lý huyền diệu của tông này, thì đó là một diễm phúc lớn. Trí tuệ quý vị sẽ nếm được hương vị thanh cao nhất của đạo nhiệm mầu, và sự tu hành của quý vị cũng mau đến đích, vì quý vị đã trèo theo con đường thẳng đứng để lên đỉnh núi “giải thoát”. Bao giờ con đường thẳng đứng cũng khó trèo, nhưng mau đến đích hơn những con đường vòng quanh co. Trong tu hành cũng vậy.</p>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong lịch sử hình thành Hoa Nghiêm tông, vị sư nào được gọi là Hiền Thủ quốc sư và là người có công lớn khiến tông phái này cực thịnh vào đời Đường?",
    options: {
      a: "Ngài Trừng Quán",
      b: "Ngài Đỗ Thuận",
      c: "Ngài Pháp Tạng",
      d: "Ngài Trí Nghiễm",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. '...là ngài Pháp Tạng, cũng gọi là ngài Hiền Thủ quốc sư. Ngài đã làm ra bộ Thám huyền ký... khiến cho Hoa Nghiêm tông rất được thịnh hành và phát triển trong thời Ngài.'",
      d: "Sai.",
    },
  },
  {
    question: "Khái niệm 'Sự pháp giới' trong giáo lý Hoa Nghiêm được hiểu như thế nào?",
    options: {
      a: "Sự tương tác vô hạn giữa các hiện tượng riêng biệt mà không cần thông qua bản thể.",
      b: "Sự quan sát các sự vật dựa trên hình tướng sai biệt và giới hạn riêng biệt của chúng.",
      c: "Sự hòa nhập hoàn toàn giữa hiện tượng hữu hình và bản thể vô hình.",
      d: "Sự nhận thức về bản thể đồng nhất và vô hình bên trong của mọi sự vật.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Sự pháp giới : Sự là nói về các hình tướng sai biệt của các pháp trong vũ trụ... có giới hạn rõ ràng... Đó là đứng về sự mà quan sát vũ trụ vạn hữu.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong 'Lục tướng viên dung', hai tướng nào sau đây được xếp vào cặp đối lập thuộc về phương diện 'Tướng' (Tướng trạng)?",
    options: {
      a: "Thành tướng và Hoại tướng",
      b: "Tổng tướng và Thành tướng",
      c: "Tổng tướng và Biệt tướng",
      d: "Đồng tướng và Dị tướng",
    },
    answer: "d",
    explanation: {
      a: "Sai. Thuộc về Dụng.",
      b: "Sai.",
      c: "Sai. Thuộc về Thể.",
      d: "Đúng. 'Sáu tướng này phân ra làm ba đôi... Đồng, Dị cùng đối nhau, thuộc về Tướng.'",
    },
  },
  {
    question: "Sử dụng thí dụ về ngôi nhà, 'Hoại tướng' được giải thích như thế nào để đảm bảo tính viên dung?",
    options: {
      a: "Các bộ phận cột, kèo bị biến chất để hòa nhập hoàn toàn vào cấu trúc mới.",
      b: "Ngôi nhà bị hư hỏng theo thời gian do các điều kiện thời tiết.",
      c: "Các bộ phận như cột, kèo vẫn giữ nguyên vị trí và đặc tính riêng ngay cả khi đã hợp thành nhà.",
      d: "Sự biến mất của các chi tiết riêng lẻ để chỉ còn lại một cái nhà duy nhất.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Hoại tướng là cái tướng độc lập của các pháp. Như cột, kèo, tường, mái, trong khi hợp tác với nhau để thành cái nhà, thì vẫn giữ cái địa vị riêng của chúng nó...'",
      d: "Sai.",
    },
  },
  {
    question: "Môn 'Ẩn mật, tỏ rõ đều thành' (Bí mật ẩn hiển câu thành) trong Thập huyền môn sử dụng ví dụ về pho tượng vàng để minh họa điều gì?",
    options: {
      a: "Vàng là bản thể vĩnh hằng còn hình dáng tượng là giả tạm, sẽ biến mất.",
      b: "Khi ta chú ý vào chất liệu vàng thì hình dáng tượng trở nên mờ nhạt (ẩn) và ngược lại.",
      c: "Phải nung chảy pho tượng thì mới thấy được bản chất thật sự của vàng.",
      d: "Pho tượng vàng có giá trị cao hơn các pho tượng làm bằng đồng hay gỗ.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Như một pho tượng bằng vàng, khi chú ý đến vàng thì không thấy cái đẹp của pho tượng, khi chú ý đến cái đẹp của pho tượng thì không thấy vàng. Tóm lại, khi cái đẹp hiển thì vàng ẩn, khi vàng hiển thì cái đẹp ẩn.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao trong môn 'Mười đời cách pháp dị thành', thời gian lại được chia thành 10 đời thay vì 3 đời (quá khứ, hiện tại, tương lai) thông thường?",
    options: {
      a: "Để phân biệt rõ ràng 10 giai đoạn tu chứng của một vị Bồ tát.",
      b: "Vì có 10 vị tổ sư đã cùng nhau xây dựng nên khái niệm thời gian này.",
      c: "Vì mỗi đời trong 3 đời lại chứa đựng cả 3 đời bên trong, cộng thêm một niệm tổng quát liên kết tất cả.",
      d: "Để phù hợp với hệ thập phân trong toán học cổ đại Trung Hoa.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. '...trong quá khứ cũng gồm có quá khứ, hiện tại và tương lai; trong hiện tại cũng gồm như thế và tương lai cũng vậy; ba đời, mỗi đời lại chia nhỏ làm ba thành chín... cộng thêm một niệm tổng (tổng quát) nữa, thành ra mười.'",
      d: "Sai.",
    },
  },
  {
    question: "Thí dụ về 'màn lưới bửu châu của cõi trời Đế Thích' (Nhơn đà la võng) nhằm minh họa cho lý thuyết nào sau đây?",
    options: {
      a: "Sự sắp xếp trật tự của vũ trụ theo một ý chí tối cao của thần linh.",
      b: "Mọi sự vật đều phản chiếu lẫn nhau và chứa đựng hình ảnh của nhau một cách vô tận.",
      c: "Thế giới này là một sự ràng buộc như mạng lưới khiến con người không thể thoát ra.",
      d: "Chỉ có cõi trời mới đạt được sự sáng suốt như các hạt châu.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. '...mỗi hạt bửu châu chói hiện đến muôn trượng, hạt này hạt khác phản chiếu nhau chói sáng lẫn nhau, lớp lớp không cùng tận. Môn này cũng như vậy : trong mỗi pháp có nhiều pháp khác, trong nhiều pháp khác lại có nhiều pháp khác nữa.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-7-hoa-nghiem-tong-va-tam-luan-tong-hoa-nghiem-tong',
  slug: 'hoa-nghiem-tong',
  title: 'Hoa Nghiêm Tông',
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
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-7.1-hoa-nghiem-tong/Tri%E1%BA%BFt_l%C3%BD_Hoa_Nghi%C3%AAm_t%C3%B4ng.png',
      readingContent,
      tableOfContents: [
        { id: 'duyen-khoi', label: 'I. Duyên Khởi Lập Tông' },
        { id: 'ton-chi', label: 'II. Tông Chỉ Và Giáo Lý' },
        { id: 'sau-tuong', label: 'Sáu Tướng Và 10 Lý Huyền Diệu' },
        { id: 'muoi-huyen-mon', label: 'Mười Huyền Môn' },
        { id: 'phuong-phap-tu', label: 'III. Phương Pháp Tu Hành' },
        { id: 'qua-vi', label: 'IV. Quả Vị Tu Chứng' },
        { id: 'ket-luan', label: 'V. Kết Luận' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-7.1-hoa-nghiem-tong/The_Huayan_Universe.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/M8R1pv7SbTo',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3V4BVBie5gfmjyREA5Bwp2',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Hoa Nghiêm Tông',
    passPercentage: 70,
    questions,
  }
}

export default lesson