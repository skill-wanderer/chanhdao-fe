import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 7.2</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Nội dung này được dựa trên bài giảng của Cố HT Thích Thiện Hoa, nhằm giúp người đọc dễ dàng nắm bắt các ý chính và thuận tiện trong việc học tập, tham khảo; không phải là bản chép nguyên văn toàn bộ bài giảng.</p>
    </div>
  </div>

  <h2>TẬP 7.2: TAM LUẬN TÔNG</h2>
  <p><strong>CON ĐƯỜNG TU THỨ TÁM TRONG MƯỜI TÔNG</strong></p>

  <hr>

  <h3 id="duyen-khoi">I. DUYÊN KHỞI LẬP TÔNG</h3>
  <p>Tông này căn cứ vào ba bộ luận sau đây mà thành lập, nên gọi là Tam luận tông:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Bộ Trung luận, gồm có bốn quyển, do ngài Bồ tát Long Thọ làm ra, mục đích chính là phá chấp của Tiểu thừa và kèm một phần phụ đã phá sai lầm của ngoại đạo.</li>
    <li>Bộ Bách luận, gồm có hai quyển, do ngài Bồ tát Đề Bà làm ra, mục đích chính là phá chấp của ngoại đạo và kèm một phần phụ phá chấp của Tiểu thừa.</li>
    <li>Bộ Thập Nhị Môn luận, gồm có một quyển, cũng do ngài Long Thọ làm ra, mục đích phá chấp cả Tiểu thừa và ngoại đạo.</li>
  </ul>
  <p>Tóm lại ba bộ luận trên đây, đều phá sự thiên chấp sai lầm của Tiểu thừa và ngoại đạo và mục đích cuối cùng là làm sáng tỏ nghĩa lý sâu xa, mầu nhiệm của Đại thừa.</p>
  <p>Tông này được thịnh hành ở Trung Hoa trong đời Yêu Tần do công đức hoằng dương của ngài Cưu Ma La Thập, và trong đời Đường do công đức của ngài Đại sư Gia Tường.</p>

  <h3 id="ton-chi">II. TÔNG CHỈ VÀ GIÁO LÝ CĂN BẢN</h3>
  <p>Như chúng ta đã thấy trong nội dung của ba bộ luận căn bản nói trên, chủ trương của tông này là phá các điều tà chấp, nêu bày chánh lý.</p>
  <p>Theo Tam luận tông, tà chấp có bốn loại:</p>
  <ul style="padding-left: 2.5rem;">
    <li><strong>Tà chấp của ngoại đạo:</strong> Ngoại đạo tức là những học phái hay tôn giáo khác với đạo Phật. Ngoại đạo vì không thấu rõ lý ngã không và pháp không, nên chấp chặt tà kiến, như tà nhân, tà quả, không nhân mà có quả, có nhân mà không quả v.v... những cái chấp này cần phải đả phá.</li>
    <li><strong>Chấp trước của Tiểu thừa Tỳ đàm tông:</strong> Tiểu thừa Tỳ đàm tông tức là Câu xá tông. Tông này chủ trương lý ngã không, pháp hữu, nghĩa là cho rằng cái ngã nơi người là không có, nhưng các pháp là có. Quan niệm sai lầm về lý pháp hữu ấy cần phải phá trừ.</li>
    <li><strong>Chấp trước của Thành thật tông:</strong> Tông này, tuy chủ trương ngã pháp đều không, nhưng lại chấp cái “không” ấy là thật có (thật có một cái không), chứ không biết rằng cái “không” ấy cũng không hoàn toàn là không, cho nên cần phải phá trừ.</li>
    <li><strong>Chấp trước của người tu về Đại thừa:</strong> Người tu về Đại thừa không còn những chấp trước mê lầm về ngã, pháp của ngoại đạo và Tiểu thừa, đã đoạn trừ những thành kiến chấp có, chấp không, chấp đoạn, chấp thường, nhưng còn có một số người ôm chặt cái sở đắc của mình, nghe nói “có” thì sa vào có, nghe nói “không” thì trệ vào không, nghe nói “trung đạo” thì chấp trước trung đạo. Cho nên, cần phải phá trừ những chấp trước ấy.</li>
  </ul>

  <p>Có người hỏi:<br>
  Tam luận tông chủ trương phá tà như trên, có thể gọi là đầy đủ lắm, nhưng còn phần hiển chánh thì như thế nào?<br>
  Xin thưa: Phá hết tà, tức là hiển chánh. Phá cũng tức là lập. Trừ mê tức là ngộ. Như vậy, tà chấp đã bị phá, thời chánh lý tự bày, ngoài sự phá tà, không có chánh lý nào riêng nữa.</p>

  <p>Trong bộ “Tam luận huyền nghĩa” có nói: Sự phá tà hiển chánh phân làm bốn loại:</p>
  <ol style="padding-left: 2.5rem;">
    <li><strong>Phá mà không thâu:</strong> nghĩa là trước một đối thủ nói không hợp đạo, thì chỉ phá mà không thâu.</li>
    <li><strong>Thâu mà không phá:</strong> nghĩa là đối với người chủ trương hợp với chân lý thì chỉ thâu mà không phá.</li>
    <li><strong>Cũng phá mà cũng thâu:</strong> nghĩa là đối với người học đạo mà còn đầy lòng mê chấp, thì phải phá trừ chỗ mê chấp, và thâu lại giáo nghĩa mà họ đã hiểu lầm.</li>
    <li><strong>Không thâu mà cũng không phá:</strong> đây là trường hợp khi đã tiêu trừ ba loại nói trên, quy về một chơn thật tướng: đến đây thì đã xa lìa nói phô, bặt dứt niệm lự, không thể nói rằng phá, không thể nói rằng thâu.</li>
  </ol>

  <p>Chủ trương phá tà hiển chánh trên đây có thể cô đọng trong bốn chữ sau đây: “Trung đạo bát bất”.</p>
  <p>Trung đạo tức là đạo lý viên dung, cũng gọi là đệ nhất nghĩa đế, nghĩa là cái chơn lý cùng tột, không gì hơn.<br>
  Bát bất tức là tám cái “chẳng phải”: Bất sanh, bất diệt, bất thường, bất đoạn, bất nhất, bất dị, bất lai, bất xuất. Hiểu rõ tám cái “bất” ấy, tức là nhận chân được nghĩa lý của Trung đạo.</p>

  <p>Chúng ta hãy nghe bài kệ sau đây trong “Trung luận” thì rõ:</p>
  <blockquote>
    <p>Bất sinh diệt bất diệt,<br>
    Bất thường diệt bất đoạn,<br>
    Bất nhất diệt bất dị,<br>
    Bất lai diệt bất xuất.<br>
    Năng thuyết thị nhân duyên,<br>
    Thiện diệt chư hí luận,<br>
    Ngã khế thủ lễ Phật,<br>
    Chư thuyết trung đệ nhất.</p>
  </blockquote>

  <p>Giảng rộng đoạn văn trên đây, ông Phan Văn Hùm, trong quyển Phật giáo triết học, đã viết như sau:</p>
  <blockquote>
    <p>“Nhất thiết vạn hữu trong hiện tượng giới đều sinh diệt vô thường. Sinh diệt vô thường như thế, nguyên là vì không có tự tánh, mà bởi nhân duyên mê vọng nên sinh ra giả hữu.</p>
    <p>Thế tục vì vọng kiến, nên chấp lấy cái giả hữu đó. Chân trí thời phủ định giả hữu mà đều nhận thấy là không… Siêu việt được tất cả hữu và vô là cái quan niệm tuyệt đối.</p>
    <p>Muốn đạt cái quan niệm tuyệt đối ấy, phải biết rằng chư pháp đều do nhân duyên sinh ra…</p>
    <p>Chư pháp, tuy là hữu, nhưng mà là phi thường hữu. Hữu, mà phi thường hữu là giả hữu. Giả hữu tuy là hữu mà phi hữu. Hữu mà phi hữu, thời cùng với vô có khác gì? Cho nên chư pháp tuy là vạn hữu, nhưng uyển nhiên là không.</p>
    <p>Lý thể của chân như tuy là không tịch, bất sinh diệt, mà bởi nó sinh ra chư pháp, cho nên nó là căn của giả hữu, thời mặc dù lý thể của chân như là không, thật ra nó là phi không. Như thế, chân như là không mà không thật là không cho nên cùng với hữu có khác gì? Vì thế, rốt lại, chân như tuy là không tịch, mà nó uyển nhiên là hữu.<br>
    Hữu, không, hai cái toàn nhiên cùng nhau bổ hiệp.<br>
    Trung đạo ra ngoài chỗ chấp hữu cùng chấp không.”</p>
  </blockquote>

  <h3 id="ba-thoi">III. BA THỜI GIÁO LÝ</h3>
  <p>Trong phần tông chỉ và giáo lý nói trên, chúng ta thấy Tam luận tông bác tất cả các tông phái của Tiểu thừa và một phần của Đại thừa. Nhưng dù Tiểu thừa hay Đại thừa, cũng là dựa trên giáo lý của Đức Phật cả. Vậy, bác các tôn phái trong đạo Phật, tức là gián tiếp bác giáo lý của Phật chăng?</p>
  <p>Thật ra, không phải như thế. Tất cả lời dạy của Đức Phật chỉ có một tánh chất chung là sự giải thoát, như tất cả nước của đại dương chỉ có một mùi vị là mặn. Phật nói ra các pháp môn, đều để đối trị những phiền não của chúng sanh. Người lương y giỏi tùy theo chứng bệnh mà cho thuốc, thuốc không cao thấp, lành bệnh là hay. Cũng thế, căn cơ chúng sanh không đồng nhau, cho nên pháp môn cũng tùy theo đó mà có sai biệt.</p>
  <p>Theo Tam luận tông, thì giáo lý của Đức Phật chia làm ba thời kỳ:</p>
  <ul style="padding-left: 2.5rem;">
    <li><strong>Thời kỳ thứ nhất:</strong> Tại vườn Lộc Uyển, vì các bậc căn trí hẹp hòi, nói pháp Tiểu thừa, tâm cảnh đều có. Trong thời kỳ này vì cần phải phá cái chấp về tự tánh, thần ngã của ngoại đạo, nên Phật nói “pháp duyên sanh”, xác định là thật có.</li>
    <li><strong>Thời kỳ thứ hai:</strong> Phật vì các bậc căn trí bậc trung, nói “pháp tướng Đại thừa”, chỉ rõ đạo lý duy nhất “cảnh không tâm có” (thế giới hiện tượng không thật có, nhưng tâm thức thật có). Cũng trong thời kỳ này, Phật lần hồi phá trừ chỗ chấp của Nhị thừa về lý duyên sanh thật có, mà nói lý duyên sanh ấy chỉ là giả dối như tuồng có mà thôi, vì họ sợ về chỗ chơn không, nên phải để “giả hữu” lại để dìu dắt họ.</li>
    <li><strong>Thời kỳ thứ ba:</strong> Phật vì các bậc thượng căn thượng trí nói ra giáo lý “vô tướng Đại thừa”, biện bạch tâm cảnh đều không, một mực bình đẳng là chơn liễu nghĩa. Đến thời kỳ này mới thật là chỗ rốt ráo của Đại thừa, chủ trương duyên sinh ấy tức là tánh không, một mực bình đẳng, viên dung cả hai đế (chơn đế, tục đế) không ngại.</li>
  </ul>
  <p>Tóm lại: Thời kỳ thứ nhất, phá trừ ngoại đạo, chỉ dạy Tiểu thừa với giáo lý tâm cảnh đều có. Thời kỳ thứ hai, thông cả Tiểu thừa và một phần của Đại thừa (tam thừa) với giáo lý cảnh không, tâm có. Thời kỳ thứ ba, chỉ có Nhất thừa, với giáo lý tâm cảnh đều không. (Nhưng cái không đây tức là “chơn không, diệu hữu”).</p>

  <h3 id="phuong-phap-tu">IV. PHƯƠNG PHÁP TU HÀNH</h3>
  <p>Chúng ta đã thấy ở các phần trên, chủ trương của Tam luận tông là phá tà, và do chỗ phá ấy mà hiển chánh. Vậy thì phương pháp tu hành của tông này là làm sao nhận rõ được những chỗ sai lầm chấp trước của ngoại đạo và các tông phái khác, tức là chứng ngộ. Muốn vậy, tức phải thực hành pháp quán “bát bất trung đạo”.</p>
  <p>Bát bất tức là bất sinh, bất diệt; bất đoạn, bất thường; bất nhất, bất dị; bất khứ, bất lai. Không ngộ được tám món ấy tức là không rõ chơn đế và tục đế; mà không rõ được chơn đế và tục đế thì cũng không thể nào nhận thấy được lý nghĩa của trung đạo.</p>
  <p>Phép quán này có nhiều giai đoạn, mỗi giai đoạn quán về một phần của “bát bất”; chẳng hạn giai đoạn thứ nhất quán về “bất sinh, bất diệt”; giai đoạn thứ hai quán về “bất đoạn, bất thường” v.v...</p>
  <p>Trong mỗi giai đoạn như thế, phải quán năm câu:</p>
  <ol style="padding-left: 2.5rem;">
    <li><strong>Câu thứ nhất:</strong> “Thật có sinh, thật có diệt”. Ấy là giả thiết thật có sanh diệt như thế gian thường chấp, để mà bác. Chấp như thế gọi là đơn tục (đứng riêng về mặt thế tục), tức nhiên là thiên chấp, chưa hiệp với trung đạo.</li>
    <li><strong>Câu thứ hai:</strong> “Không sanh không diệt”. Ấy là chấp không sanh không diệt làm thật, để mà bác. Chấp như thế gọi là đơn chân, cũng là thiên chấp, không hiệp với trung đạo.</li>
    <li><strong>Câu thứ ba:</strong> “Giả sanh giả diệt”. Ấy là giả lập có sự sanh diệt phát xuất từ nơi bất sanh diệt. Đây tức là trung đạo về thế tục.</li>
    <li><strong>Câu thứ tư:</strong> “Giả bất sanh, giả bất diệt”. Nếu sanh diệt đều giả, thời sự bất sanh bất diệt cũng là giả. Ấy là trung đạo về Chơn đế.</li>
    <li><strong>Câu thứ năm:</strong> “Không phải sanh diệt mà cũng không phải là không sanh diệt”. Đây là dung hiệp cả tục đế và chơn đế mà tìm ra lý trung đạo. Thật vậy, thật tướng của pháp giới không sanh diệt mà cũng không phải không sanh diệt. Đến đây là bặt dứt lời nói phô, tâm niệm lự, mà chỉ nhờ trực quan mới đạt tới.</li>
  </ol>
  <p>Trong năm câu này, thì ba câu cuối (từ câu thứ ba đến câu thứ năm) thường gọi là tam trung (ba lý trung đạo). Vì thế cho nên trong phép quán này, người ta thường nói: dùng năm câu và ba lý trung đạo để quán sát.</p>
  <p>Trên đây là chỉ đưa ra một thí dụ về một giai đoạn trong phép “quán trung đạo bát bất”. Sau khi quán hết giai đoạn thứ nhất “bất sinh, bất diệt”, hành giả tiếp tục giai đoạn thứ hai là “bất đoạn, bất thường”. Và cứ như thế mà quán cho đến hết tám cái “bất”.</p>
  <p>Đây là phép quán riêng biệt của Tam luận tông. Ngoài ra, trên đường tu hành, hành giả còn tùy theo căn cơ mà tu các pháp môn khác như Lục độ vạn hạnh.</p>

  <h3 id="qua-vi">V. QUẢ VỊ TU CHỨNG</h3>
  <p>Giáo lý đã có phân chia làm chơn đế và tục đế, thì quả vị tu chứng cũng phải đứng về cả hai phương diện mà xét.</p>
  <p><strong>Chơn đế:</strong> Nếu về phương diện chơn đế mà xét thì không có vấn đề chứng hay không chứng, thành Phật hay không thành Phật, vì mê ngộ vốn không, nhiễm tịnh đều bình đẳng, hết thảy chúng sanh xưa nay là Phật rồi.</p>
  <p><strong>Tục đế:</strong> Nếu đứng về phương diện tục đế, thì căn cơ chúng sanh không giống nhau, nên sự tu chứng cũng có chậm, có mau. Với những căn cơ rất lanh lợi, thì trong một niệm có thể thành tựu “chánh quán bát bất”, chứng được quả Phật. Trái lại, với những căn cơ chậm lụt, thì phải trải qua ba đại kiếp tu hành lục độ, vạn hạnh, mới được thành Phật. Nếu tuần tự mà tiến thì phải trải qua 52 quả vị.</p>
  <p>Trong các tông khác đã trình bày trong Bản đồ tu Phật, quý độc giả cũng thường nghe nói đến 52 quả vị, nhưng chúng tôi chỉ nêu danh mà không nói rõ nội dung, đến Tam luận tông này, chúng tôi tưởng nên trình bày rõ một lần về các quả vị ấy; và để sau này, khi qua các tông khác, nếu quý độc giả có gặp lại 52 quả vị này, cũng sẽ không còn bỡ ngỡ, 52 quả vị ấy là:</p>

  <p><strong>Thập tín (mười bậc lấy đức tin làm gốc)</strong></p>
  <ul style="padding-left: 2.5rem;">
    <li>Tín tâm</li>
    <li>Tinh tấn tâm</li>
    <li>Niệm tâm</li>
    <li>Định tâm</li>
    <li>Huệ tâm</li>
    <li>Thí tâm</li>
    <li>Giới tâm</li>
    <li>Hộ tâm</li>
    <li>Nguyện tâm</li>
    <li>Hồi hướng tâm</li>
  </ul>

  <p><strong>Thập trụ:</strong> Trụ là an trụ. Các vị Bồ tát khi mới phát tâm, an trụ nơi mười bậc này mà tu hành, trên cầu chứng được quả Phật, dưới hóa độ chúng sanh. Thập trụ là:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Phát tâm trụ</li>
    <li>Trị địa trụ</li>
    <li>Tu hành trụ</li>
    <li>Sanh quý trụ</li>
    <li>Phương tiện trụ</li>
    <li>Chánh tâm trụ</li>
    <li>Bất thối trụ</li>
    <li>Đồng chơn trụ</li>
    <li>Pháp vương tử trụ</li>
    <li>Quán đảnh trụ</li>
  </ul>

  <p><strong>Thập hạnh:</strong> Mười bậc này chú trọng tu hạnh lục độ nhiều hơn các hạnh khác, nên gọi là hạnh. Mười hạnh là:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Hoan hỷ hạnh</li>
    <li>Nhiêu ích hạnh</li>
    <li>Vô nhuế hạnh</li>
    <li>Vô tận hạnh</li>
    <li>Ly si loạn hạnh</li>
    <li>Thiện hiện hạnh</li>
    <li>Vô trước hạnh</li>
    <li>Tôn trọng hạnh</li>
    <li>Thiện pháp hạnh</li>
    <li>Chơn thật hạnh</li>
  </ul>

  <p><strong>Thập hồi hướng:</strong> Hồi nghĩa là xoay về. Hướng tức là xu hướng. Hành giả đem mười hạnh này mà quy hướng về ba nơi sau đây:</p>
  <ol style="padding-left: 2.5rem;">
    <li>Xoay sự về lý, lấy chơn như thực tế mà làm chỗ chứng.</li>
    <li>Xoay nhân về quả, lấy đạo vô thượng Bồ đề làm chỗ sở cầu.</li>
    <li>Xoay mình về nơi người, một lòng bình đẳng, phổ độ chúng sanh.</li>
  </ol>
  <p>Mười hồi hướng là:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Cứu độ chúng sanh, ly chúng sanh tướng hồi hướng, nghĩa là cứu giúp chúng sanh mà không chấp trước về sự cứu giúp.</li>
    <li>Bất hoại hồi hướng, nghĩa là không bao giờ thối tâm cứu giúp chúng sanh.</li>
    <li>Đẳng như Phật hồi hướng, nghĩa là lòng từ bi cứu giúp chúng sanh cũng bằng chư Phật.</li>
    <li>Chí nhất thế xứ hồi hướng, nghĩa là lòng cứu giúp chúng sanh mỗi việc đều chu đáo.</li>
    <li>Vô tận công đức tạng hồi hướng, nghĩa là chất chứa công đức vô tận.</li>
    <li>Tùy thuận nhất thiết kiên cố thiện căn hồi hướng, nghĩa là thuận theo hết thảy căn lành bền chặt.</li>
    <li>Đẳng tâm tùy thuận nhất thế chúng sanh hồi hướng, nghĩa là đem tâm bình đẳng tùy thuận hết thảy chúng sanh.</li>
    <li>Như tướng hồi hướng, nghĩa là làm các công đức hồi hướng về tự tánh chơn như.</li>
    <li>Vô trước vô phược giải thoát tâm hồi hướng, nghĩa là không chấp trước không ràng buộc, một lòng giải thoát.</li>
    <li>Pháp giới vô lượng hồi hướng, nghĩa là hướng về pháp giới không cùng tận.</li>
  </ul>
  <p>Bốn mươi quả vị trên đây (thập tín, thập trụ, thập hạnh, thập hồi hướng) nói về thời gian tu tập thì thuộc vào Kiếp A-tăng-kỳ thứ nhất.</p>

  <p><strong>Thập địa:</strong> Mười bậc này, vì tóm thâu các công đức hữu vi và vô vi, dùng làm tự tánh, cùng làm chỗ nương dựa chắc chắn hơn cả cho sự tu hành, nên gọi là Địa. Mười địa là:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Hoan hỷ địa</li>
    <li>Ly cấu địa</li>
    <li>Phát quang địa</li>
    <li>Diệm huệ địa</li>
    <li>Nan thắng địa</li>
    <li>Hiện tiền địa</li>
    <li>Viễn hành địa</li>
    <li>Bất động địa</li>
    <li>Thiện huệ địa</li>
    <li>Pháp vân địa</li>
  </ul>
  <p>Trong Thập địa, mỗi địa đều có ba tâm: nhập, trụ, xuất. Khi vừa bước vào một bậc nào, gọi là nhập tâm. Trong lúc ở yên trong bậc ấy mà tu, gọi là trụ tâm. Sau khi tu tập lâu rồi, cần bước qua bậc khác gọi là xuất tâm. Ba tâm ấy đều phải trải qua trăm ngàn số kiếp. Từ khi nhập tâm về Sơ địa (tức Hoan hỷ địa) đến Thất địa (tức Viễn hành địa) phải trải qua suốt một kiếp A-tăng-kỳ thứ hai. Từ Bát địa (tức Bất động địa) đến Thập địa (tức Pháp vân địa) thuộc về kiếp A-tăng-kỳ thứ ba.</p>

  <p><strong>Đẳng giác:</strong> Khi đã mãn quả Thập địa thì gọi là Đẳng giác, là địa vị đã gần đến quả Phật.</p>

  <p><strong>Diệu giác:</strong> Tức là Phật quả tự mình đã giác ngộ, lại giác ngộ cho người, trí giác ngộ và công phu tu hành đều được đầy đủ, không thể nghĩ bàn, nên gọi là Diệu giác. Bậc này, vì các lậu nghiệp đã hết sạch và không còn pháp gì phải học nữa, nên cũng gọi là Vô học đạo.</p>

  <h3 id="ket-luan">VI. KẾT LUẬN</h3>
  <p>Như chúng ta đã thấy ở phần trên, Tam luận tông chủ trương “lấy phá làm lập”, phá tất cả những sự chấp trước của ngoại đạo, của Tiểu thừa Tỳ đàm, của Thành thật tông và của cả một số người tu theo Đại thừa nữa. Nhận chân được những sự sai lầm ấy tức là ngộ rồi đấy. Con đường đi đến chân lý không đâu khác hơn con đường mình đang đi. Nhưng muốn khỏi lạc đường và chậm bước, thì phải phá dẹp tất cả những hình bóng phỉnh phờ và những chướng ngại vật trên đường đi ấy. Một khi sự phá dẹp hoàn thành thì chân lý tự nhiên hiện bày.</p>
  <p>Theo thiển kiến chúng tôi, trong Bản đồ tu Phật, Tam luận tông không phải là một con đường tu như các tông khác, mà đúng hơn là một cửa Ải: những hành giả muốn đi từ Tiểu thừa hay từ Đại thừa Thỉ giáo sang Đại thừa Đốn giáo hay Viên giáo thì phải đi ngang cửa Ải Tam luận tông. Đến cửa Ải này, hành giả bị lục soát một cách kỹ lưỡng, nếu ai còn mang theo một món hành lý “chấp trước” gì, thì không thể qua cửa Ải này được. Hành giả khi qua cửa Ải này là phải thông suốt các vấn đề: có, không, sanh, diệt, thường, đoạn, nhất, dị v.v...</p>
  <p>Vậy chúng tôi mong mỏi quý vị Phật tử muốn đi xa vào thế giới Trung đạo hay Viên giác thì hãy nghiên cứu cho kỹ Tam luận tông.</p>
  <p>Chúc quý vị độc giả thành công.</p>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Tam luận tông được hình thành dựa trên ba bộ luận nào sau đây?",
    options: {
      a: "Trung luận, Câu xá luận và Thành thật luận",
      b: "Đại Trí Độ luận, Bách luận và Thập Nhị Môn luận",
      c: "Trung luận, Bách luận và Đại Thừa Khởi Tín luận",
      d: "Trung luận, Bách luận và Thập Nhị Môn luận",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Tông này căn cứ vào ba bộ luận sau đây mà thành lập... Bộ Trung luận... Bộ Bách luận... Bộ Thập Nhị Môn luận...'",
    },
  },
  {
    question: "Mục đích chính của bộ 'Bách luận' do Bồ tát Đề Bà soạn thảo là gì?",
    options: {
      a: "Chuyên phá chấp của Tiểu thừa và làm sáng tỏ lý ngã không",
      b: "Phá chấp của ngoại đạo và kèm một phần phụ phá chấp của Tiểu thừa",
      c: "Giải thích chi tiết về nghĩa lý của kinh Kim Cang",
      d: "Xác lập hệ thống quả vị tu chứng trong 52 giai đoạn",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là của Trung luận.",
      b: "Đúng. 'Bộ Bách luận, gồm có hai quyển, do ngài Bồ tát Đề Bà làm ra, mục đích chính là phá chấp của ngoại đạo và kèm một phần phụ phá chấp của Tiểu thừa.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo Tam luận tông, sai lầm của phái Thành thật tông nằm ở điểm nào?",
    options: {
      a: "Chấp ngã không nhưng lại cho rằng pháp là hữu",
      b: "Chấp cái 'không' là thật có (thật có một cái không)",
      c: "Chấp vào thuyết nhân duyên sanh là thật có",
      d: "Chấp chặt vào tà nhân và tà quả",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là chấp của Câu xá tông.",
      b: "Đúng. 'Chấp trước của Thành thật tông: Tông này, tuy chủ trương ngã pháp đều không, nhưng lại chấp cái 'không' ấy là thật có (thật có một cái không)...'",
      c: "Sai.",
      d: "Sai. Đây là chấp của ngoại đạo.",
    },
  },
  {
    question: "Trong giáo lý 'Trung đạo bát bất', cặp phủ định nào sau đây dùng để chỉ sự không kéo dài và không đứt đoạn?",
    options: {
      a: "Bất sanh, bất diệt",
      b: "Bất thường, bất đoạn",
      c: "Bất nhất, bất dị",
      d: "Bất lai, bất xuất",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Bất thường (không kéo dài mãi mãi) và bất đoạn (không đứt đoạn hoàn toàn).",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Thời kỳ giáo lý thứ ba của Đức Phật theo quan điểm Tam luận tông tập trung vào nội dung gì?",
    options: {
      a: "Pháp Tiểu thừa, xác định tâm cảnh đều hữu",
      b: "Vô tướng Đại thừa, biện bạch tâm cảnh đều không",
      c: "Pháp tướng Đại thừa, chỉ rõ cảnh không tâm có",
      d: "Thuyết minh về lý nhân quả luân hồi cho bậc hạ căn",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là thời kỳ 1.",
      b: "Đúng. 'Thời kỳ thứ ba: Phật vì các bậc thượng căn thượng trí nói ra giáo lý vô tướng Đại thừa, biện bạch tâm cảnh đều không, một mực bình đẳng là chơn liễu nghĩa.'",
      c: "Sai. Đây là thời kỳ 2.",
      d: "Sai.",
    },
  },
  {
    question: "Trong phép quán 'Bát bất trung đạo', tại sao câu thứ năm được coi là sự dung hiệp cao nhất?",
    options: {
      a: "Vì nó chỉ tập trung vào việc cứu độ chúng sanh trên mặt sự tướng",
      b: "Vì nó chứng minh rằng mọi sự vật đều thật có sinh và thật có diệt",
      c: "Vì nó khẳng định rằng sự bất sanh bất diệt là một thực thể cố định",
      d: "Vì nó bặt dứt lời nói và tâm niệm lự, đạt đến thực tướng pháp giới bằng trực quan",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Câu thứ năm: ... Đây là dung hiệp cả tục đế và chơn đế mà tìm ra lý trung đạo... Đến đây là bặt dứt lời nói phô, tâm niệm lự, mà chỉ nhờ trực quan mới đạt tới.'",
    },
  },
  {
    question: "Nhóm quả vị nào trong 52 quả vị chú trọng tu tập hạnh 'Hồi sự hướng lý, hồi nhân hướng quả, hồi tự hướng tha'?",
    options: {
      a: "Thập tín",
      b: "Thập hồi hướng",
      c: "Thập trụ",
      d: "Thập hạnh",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Thập hồi hướng: ... Hành giả đem mười hạnh này mà quy hướng về ba nơi sau đây: 1. Xoay sự về lý... 2. Xoay nhân về quả... 3. Xoay mình về nơi người...'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khoảng thời gian cần thiết để một hành giả từ Sơ địa đến Thất địa trong Thập địa là bao lâu?",
    options: {
      a: "Suốt một kiếp A-tăng-kỳ thứ hai",
      b: "Một kiếp A-tăng-kỳ thứ ba",
      c: "Chỉ trong một niệm đối với mọi căn cơ",
      d: "Một kiếp A-tăng-kỳ thứ nhất",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Từ khi nhập tâm về Sơ địa (tức Hoan hỷ địa) đến Thất địa (tức Viễn hành địa) phải trải qua suốt một kiếp A-tăng-kỳ thứ hai.'",
      b: "Sai. Bát địa đến Thập địa.",
      c: "Sai.",
      d: "Sai. Bốn mươi quả vị đầu.",
    },
  },
  {
    question: "Sự khác biệt chính giữa quả vị 'Đẳng giác' và 'Diệu giác' là gì?",
    options: {
      a: "Đẳng giác chỉ lo tự độ, còn Diệu giác lo cứu độ chúng sanh",
      b: "Đẳng giác là quả vị của Tiểu thừa, còn Diệu giác là của Đại thừa",
      c: "Diệu giác là quả vị Phật hoàn toàn, không còn gì để học, trong khi Đẳng giác là bậc gần sát quả Phật",
      d: "Đẳng giác thuộc kiếp thứ hai, còn Diệu giác thuộc kiếp thứ ba",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Đẳng giác là 'địa vị đã gần đến quả Phật'. Còn Diệu giác là 'Phật quả... các lậu nghiệp đã hết sạch và không còn pháp gì phải học nữa, nên cũng gọi là Vô học đạo.'",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao tác giả lại ví Tam luận tông như một 'Cửa Ải' trên bản đồ tu Phật?",
    options: {
      a: "Vì hành giả phải bỏ lại mọi hành lý 'chấp trước' mới có thể tiến vào các giáo lý cao hơn",
      b: "Vì nó ngăn cách hoàn toàn giữa giáo lý Tiểu thừa và Đại thừa",
      c: "Vì đây là tông phái khó nhất và không ai có thể tu tập được",
      d: "Vì nó yêu cầu hành giả phải học thuộc lòng ba bộ luận mới được công nhận",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Đến cửa Ải này, hành giả bị lục soát một cách kỹ lưỡng, nếu ai còn mang theo một món hành lý chấp trước gì, thì không thể qua cửa Ải này được.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-7-hoa-nghiem-tong-va-tam-luan-tong-tam-luan-tong',
  slug: 'tam-luan-tong',
  title: 'Tam Luận Tông',
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
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-7.2-tam-luan-tong/Tri%E1%BA%BFt_l%C3%BD_Tam_Lu%E1%BA%ADn_T%C3%B4ng.png',
      readingContent,
      tableOfContents: [
        { id: 'duyen-khoi', label: 'I. Duyên Khởi Lập Tông' },
        { id: 'ton-chi', label: 'II. Tông Chỉ Và Giáo Lý Căn Bản' },
        { id: 'ba-thoi', label: 'III. Ba Thời Giáo Lý' },
        { id: 'phuong-phap-tu', label: 'IV. Phương Pháp Tu Hành' },
        { id: 'qua-vi', label: 'V. Quả Vị Tu Chứng' },
        { id: 'ket-luan', label: 'VI. Kết Luận' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-7.2-tam-luan-tong/The_Middle_Way_Gateway.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/06KFPLJtuEc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1McqgtLVSFTDP1mjs6ew7y',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Tam Luận Tông',
    passPercentage: 70,
    questions,
  }
}

export default lesson