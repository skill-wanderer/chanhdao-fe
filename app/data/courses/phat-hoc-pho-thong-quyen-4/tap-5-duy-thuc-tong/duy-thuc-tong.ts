import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <h2>TẬP V: DUY THỨC TÔNG</h2>
  <p><strong>(CŨNG GỌI LÀ PHÁP TƯỚNG TÔNG)</strong></p>
  <p><strong>CON ĐƯỜNG TU THỨ TƯ TRONG 10 TÔNG</strong></p>

  <p>Tất cả chúng sanh từ vô thỉ đến nay, vì chấp có thật ngã, thật pháp mà tạo ra các nghiệp, rồi bị các nghiệp dắt dẫn nên xoay vần mãi theo bánh xe sanh tử luân hồi.</p>

  <p>Nếu con người hiểu rõ một cách chắc chắn rằng tất cả các pháp trong vũ trụ, nhân và ngã, đều không thật có, chỉ do thức biến hiện như cảnh trong chiêm bao, mà không còn gây phiền não, tạo nghiệp chướng nữa, thì tất không còn bị ràng buộc trong bánh xe sanh tử luân hồi.</p>

  <p>Để phá trừ hai món chấp thật ngã và thật pháp, Đức Phật có rất nhiều phương pháp, có rất nhiều phép tu, mà Duy thức tông, hay Pháp tướng tông là một phép tu rất cần thiết, rất hiệu nghiệm để đi đến sự giải thoát.</p>

  <p>Theo Bản đồ tu Phật mà chúng tôi đã trình bày từ trước đến nay, thì đây là con đường thứ sáu, một trong 15 con đường chính yếu để đi đến cõi Phật.</p>

  <hr>

  <h3 id="dinh-nghia">I. ĐỊNH NGHĨA</h3>
  <p>Tông này thuộc về Đại thừa, phân tách vũ trụ, vạn hữu đều do thức biến hiện.</p>
  <p>Duy thức tông, hay Pháp tướng tông, như danh từ đã chỉ định, không nói về tâm tánh chơn như, mà chỉ nói về tướng của thức, tức cũng là tướng của các pháp. Biết rằng từ chơn vọng hòa hiệp biến thành hình tướng thức A lại da, rồi từ thức A lại da sanh ra các tướng tâm pháp (7 thức trước và 51 món tâm sở), sắc pháp v.v… tông này quán sát hành tướng của các pháp ấy, nên gọi là “Pháp tướng tông”.</p>
  <p>Đứng về phương diện nguyên nhân mà nghiên cứu, tông này chủ trương rằng vũ trụ vạn hữu, hay là tất cả các pháp đều duy thức biến hiện, ngoài thức không có một yếu tố nào khác nữa nên gọi là “Duy thức tông”.</p>
  <p>Vậy “Pháp tướng tông” hay “Duy thức tông” cũng đều để gọi pháp môn mà tông chỉ chính là nghiên cứu, quan sát hành tướng và nguyên nhân sanh khởi của vạn pháp. Nguyên nhân sanh khởi ấy là THỨC.</p>

  <h3 id="duyen-khoi">II. DUYÊN KHỞI VÀ SỰ PHÁT TRIỂN CỦA DUY THỨC TÔNG QUA CÁC KINH SÁCH CHÍNH YẾU</h3>
  <p>Như tất cả các tông phái khác, Duy thức tông cũng căn cứ vào kinh luận của Phật mà được thành lập ra. Đó là sáu bộ kinh và 11 bộ luận sau đây:</p>

  <p>Sáu bộ kinh là:</p>
  <ol style="padding-left: 2.5rem;">
    <li>Kinh Giải thâm mật</li>
    <li>Kinh Hoa nghiêm</li>
    <li>Kinh Như Lai xuất hiện công đức trang nghiêm</li>
    <li>Kinh A tỳ đạt ma</li>
    <li>Kinh Lăng nghiêm</li>
    <li>Kinh Hậu nghiêm (hay Mật nghiêm)</li>
  </ol>

  <p>Mười một bộ luận là:</p>
  <ol style="padding-left: 2.5rem;">
    <li>Luận Du già sư địa</li>
    <li>Luận Hiển dương thánh giáo</li>
    <li>Luận Đại thừa trang nghiêm</li>
    <li>Luận Tập lượng</li>
    <li>Luận Nhiếp đại thừa</li>
    <li>Luận Thập địa kinh</li>
    <li>Luận Phân biệt Du già</li>
    <li>Luận Quán sở duyên duyên</li>
    <li>Luận Duy thức nhị thập tụng</li>
    <li>Luận Biện trung biên</li>
    <li>Luận Tạp luận</li>
  </ol>

  <p>Vị sáng lập ra Duy thức chính là Bồ tát Di Lặc. Đức Di Lặc sau khi tu chứng được Duy thức, đã ứng theo lời thỉnh cầu của ngài Vô Trước, nói luận Du già sư địa.<br>
  Hai vị có công lớn trong việc phát triển tông này ở Ấn Độ là hai anh em ngài Vô Trước và ngài Thế Thân. Ngài Vô Trước dựa theo bộ “Du già sư địa” làm ra bộ luận “Hiển dương thánh giáo”, và “Nhiếp đại thừa”. Ngài Thế Thân lại có công đức lớn lao hơn nữa, tóm tắt lại nghĩa lý Duy thức, làm ra bộ luận “Duy thức tam thập tụng”. Về sau, có mười vị Đại Luận sư, sớ giải bộ Duy thức tam thập tụng, làm thành mười bộ luận chính về Duy thức.<br>
  Đến đời Đường, ngài Huyền Trang từ Trung Hoa sang Ấn Độ thỉnh kinh và tham cứu về Phật giáo. Môn học sở trường của Ngài là Duy thức. Sau khi trở về Trung Hoa, ngài lượm lặt tinh hoa của mười bộ đại luận nói trên, dịch thành Hán văn dưới nhan đề là: “Thành duy thức luận” gồm cả thảy mười quyển. Ngài Khuy Cơ là đệ tử lớn của ngài Huyền Trang sớ giải thêm rõ nghĩa lý bộ “Thành duy thức luận” làm ra thành 60 quyển, dưới nhan đề là “Thành duy thức thuật ký”.<br>
  Tóm lại, ở Ấn Độ, vị có công lớn nhất trong sự phát huy Duy thức tông là Ngài Thế Thân. Còn ở Trung Hoa, vị có công lớn trong việc truyền bá Duy thức tông là Ngài Huyền Trang.</p>

  <p>Về phương diện sách vở dạy Duy thức, thì có ba bộ sau đây từ xưa đến nay được các học giả xem là chánh tông Duy thức:</p>
  <ol style="padding-left: 2.5rem;">
    <li><strong>Đại thừa bá pháp minh môn luận:</strong> (tác giả là ngài Thế Thân). Nội dung bộ luận này giải thích các danh từ chuyên môn của Duy thức, nói rõ 100 pháp và hai món vô ngã. Người học Duy thức nếu không học bộ luận này trước, thì không dễ gì hiểu được Duy thức. (Bộ luận này đã được dịch ra Việt ngữ và chúng tôi lấy nhan đề là: Duy thức nhập môn).</li>
    <li><strong>Duy thức tam thập tụng:</strong> (cũng do ngài Thế Thân tạo). Trong bộ luận này, Ngài Thế Thân dùng 30 bài tụng để giải thích về lý nghĩa chánh của Duy thức. Luận này có thể chia làm bốn phần:
      <ol type="a" style="padding-left: 2.5rem;">
        <li>Phần thứ nhất nói về ba thức năng biến:
          <ul style="padding-left: 2.5rem;">
            <li>Thức năng biến thứ nhất là thức A lại da (thức thứ tám)</li>
            <li>Thức năng biến thứ hai là thức Mạt na (thức thứ bảy)</li>
            <li>Thức năng biến thứ ba là sáu thức trước.</li>
          </ul>
        </li>
        <li>Phần thứ hai nói về các tâm sở:
          <ul style="padding-left: 2.5rem;">
            <li>Biến hành (5 món)</li>
            <li>Biệt cảnh (5 món)</li>
            <li>Thiện (11 món)</li>
            <li>Căn bản phiền não (6 món)</li>
            <li>Tùy phiền não (20 món)</li>
            <li>Bất định (4 món)</li>
          </ul>
        </li>
        <li>Phần thứ ba giải đáp các nghi vấn:
          <ul style="padding-left: 2.5rem;">
            <li>Làm sao biết được phận vị sanh khởi của các thức?</li>
            <li>Nếu không có ngoại cảnh, thì sao có sanh tử và các sự phân biệt?</li>
            <li>Nếu không có ngoại cảnh, thì sao có chúng hữu tình sanh tử?</li>
            <li>Nếu chỉ có thức, sao Phật lại nói có ba tánh?</li>
            <li>Nếu có ba tánh, sao Phật lại nói ba món vô tánh?</li>
          </ul>
        </li>
        <li>Phần thứ tư nói về thứ đệ tu Duy thức:<br>
        Từ khi phát tâm tu Duy thức cho đến khi chứng được Duy thức tánh thành Phật, hành giả phải trải qua năm địa vị, thứ lớp như sau:
          <ul style="padding-left: 2.5rem;">
            <li>Vị Tư lương (như lương thực của người đi đường)</li>
            <li>Vị Gia hạnh (gia công tấn hành)</li>
            <li>Vị Thông đạt (thấu suốt đường lối)</li>
            <li>Vị Tu tập (tu hành tập luyện)</li>
            <li>Cứu cánh (đến cùng tột địa vị tu chứng).</li>
          </ul>
        </li>
      </ol>
    </li>
    <li><strong>Bát thức quy củ tụng:</strong> (tác giả là ngài Huyền Trang). Nội dung của quyển này, ngài Huyền Trang dùng 12 bài tụng để toát yếu lại nghĩa lý Duy thức, gồm bốn phần:
      <ol type="a" style="padding-left: 2.5rem;">
        <li>Phần thứ nhất nói về 5 thức đầu;</li>
        <li>Phần thứ hai nói về thức thứ sáu;</li>
        <li>Phần thứ ba nói về thức thứ bảy;</li>
        <li>Phần thứ tư nói về thức thứ tám.</li>
      </ol>
      Mỗi một phần có ba bài tụng, hai bài tụng đầu nói hành tướng các thức, khi hành giả còn ở địa vị phàm phu; bài tụng thứ ba nói hành tướng các thức, khi lên quả vị Thánh.<br>
      Tóm lại, ba bộ phận trên này, người muốn tu học Duy thức, không thể bỏ qua được.
    </li>
  </ol>

  <h3 id="chu-truong">III. CHỦ TRƯƠNG CỦA DUY THỨC TÔNG</h3>
  <p>Chủ trương của Duy thức tông là phá trừ vọng chấp ngã, pháp (biến kế sở chấp), bằng cách chỉ cho chúng sanh thấy tất cả các pháp đều nương nơi thức hiện ra (y tha khởi), và mục đích cuối cùng là đưa chúng sanh trở về với tánh chân thật (viên thành thật). Thế giới hiện tượng này, vì mê mờ, chúng ta tưởng là chắc thật, nhưng theo chủ trương của Duy thức học, thì vũ trụ vạn hữu đều là Duy thức biến hiện. Cũng như sơn hà, đại địa trong cảnh chiêm bao đều do tâm chiêm bao hiện ra, ngoài tâm chiêm bao, không có cảnh vật ấy.</p>
  <p>Vậy, nếu chỉ cho chúng sanh thấy được một cách rõ ràng, vũ trụ vạn hữu do thức biến hiện ra như thế nào, thì chắc chắn chúng sanh sẽ không còn chấp thật ngã, thật pháp nữa. Cũng như khi biết cảnh vật trong chiêm bao là do tâm chiêm bao sanh ra thì không còn mê muội nơi cảnh chiêm bao nữa. Mà không chiêm bao tức là đã thức tỉnh. Cũng thế, khi không còn chấp thật ngã, thật pháp nữa, tất sẽ thấy được tánh chân thật của vũ trụ vạn hữu, (tánh viên thành thật). Đó là chủ trương của Duy thức tông.</p>
  <p>Nói một cách vắn tắt, chủ trương của Duy thức tông là: quy vũ trụ vạn hữu trở về Duy thức tướng, rồi từ Duy thức tướng trở về Duy thức tánh (tâm chơn như hay viên giác tánh).</p>

  <h3 id="thanh-phan-hien-tuong">IV. THÀNH PHẦN CỦA HIỆN TƯỢNG GIỚI (vũ trụ vạn hữu gồm cả tâm và pháp) PHÂN LOẠI THEO DUY THỨC TÔNG</h3>
  <p>Hiện tượng giới, tức là vạn sự vạn vật trong vũ trụ (gồm cả tâm lẫn vật), tuy nhiều không thể kể xiết được, nhưng dưới nhãn quan của nhà Duy thức học, có thể phân ra thành năm loại lớn; năm loại này lại chia thành 100 thành phần hay 100 pháp.</p>

  <p>Năm loại lớn ấy là:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Tâm vương tức là “tướng” của thức thuộc về tâm giới.</li>
    <li>Tâm sở tức là “dụng” của thức, cũng thuộc về tâm giới.</li>
    <li>Sắc pháp tức là “ảnh tượng” của thức thuộc về sắc giới.</li>
    <li>Bất tương ưng hành tức là “phận vị sai khác” của thức, không phải thuộc hẳn về tâm mà cũng không thuộc về sắc giới, nhưng gồm cả hai phần mà thành.</li>
    <li>Vô vi tức là “tánh” của thức, cũng gọi là “chơn như”.</li>
  </ul>

  <p>Bốn loại trên: tâm vương, tâm sở, sắc pháp, bất tương ưng hành thuộc về “hữu vi”, tức là “tướng” có sanh diệt.<br>
  Loại thứ năm, là pháp “vô vi” không sanh diệt, không tạo tác, tức là “tánh” của pháp, hay chơn như.</p>

  <p>Năm loại lớn trên này, mỗi loại lại chia làm nhiều thành phần, có những tác dụng hành tướng riêng biệt, mà chúng ta cần nghiên cứu kỹ sau đây:</p>

  <p><strong>1. Tâm vương:</strong> Tâm vương gồm có tám món, mỗi món có những đặc tánh, khả năng và nhiệm vụ riêng biệt, như mỗi ông vua làm chủ mỗi nước, nên gọi là tâm vương. Tám phần của tâm vương là:</p>
  <ol style="padding-left: 2.5rem;">
    <li>Nhãn thức</li>
    <li>Nhĩ thức</li>
    <li>Tỳ thức</li>
    <li>Thiệt thức</li>
    <li>Thân thức</li>
    <li>Ý thức</li>
    <li>Mạt na thức</li>
    <li>A lại da thức</li>
  </ol>

  <p>Chúng ta có năm giác quan, mỗi giác quan có một sở năng, một cái biết riêng; khi ta nhìn một cái hoa, biết cái hoa ấy màu vàng hay đỏ v.v… cái biết ấy thuộc về con mắt, nên gọi là Nhãn thức. Khi chúng ta nghe đàn, biết tiếng đàn ấy cao hay thấp, to hay nhỏ v.v… cái biết ấy thuộc về tai, nên gọi là Nhĩ thức. Khi ta ngửi một mùi gì, biết được mùi ấy là thơm hay hôi, cái biết đó thuộc về mũi, nên gọi là Tỳ thức. Khi chúng ta nếm một món ăn gì, biết được món ăn mặn hay lạt, chua hay ngọt, cái biết ấy thuộc về lưỡi, nên gọi là Thiệt thức. Khi chúng ta đụng vào một vật gì, biết được vật ấy cứng hay mềm, nóng hay lạnh, cái biết ấy thuộc về thân thể ta, nên gọi là Thân thức.</p>

  <p>Năm cái biết trên này: Nhãn, Nhĩ, Tỳ, Thiệt và Thân thức, thuộc về năm giác quan bên ngoài nên chúng ta dễ nhận.</p>

  <p>Ba cái biết sau này: Ý thức, Mạt na thức, A lại da thức, thuộc về nội tâm, và theo thứ lớp, ẩn sâu vào trong, tế nhị hơn, nên khó nhận khó biết. Tuy nhiên ta cần phải nhận biết rành rẽ hành tướng, phân biệt được phạm vi hoạt động, sở trường, sở đoản và công năng của mỗi thứ.</p>

  <p>Trước tiên, chúng ta nói đến thức thứ sáu hay “Ý thức”, Ý thức có hai phạm vi hoạt động:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Khi nó hiệp với năm thức trước, tiếp xúc với cảnh, thì gọi là “Ngũ câu Ý thức”, hay là “Minh liễu Ý thức”. Trong lúc mắt thấy sắc, tai nghe tiếng v.v… mà không có Ý thức phụ vào (để ý) thì mặc dù mắt vẫn thấy, tai vẫn nghe, nhưng thấy nghe không được rõ ràng. Sách chép: “Tâm bất tại yên, thị nhi bất kiến, thính nhi bất văn” (nếu không chú ý, thì dù xem cũng chẳng thấy, lắng cũng chẳng nghe). Trái lại, khi có Ý thức phụ vào, thì thấy nghe v.v… đều minh bạch.</li>
    <li>Khi nào Ý thức làm việc một mình, không cùng hợp tác với năm thức trước, thì gọi là “Đơn độc Ý thức”. Như trong lúc năm thức trước không tiếp xúc với sắc, thanh, hương, vị và xúc, mà trong tâm trí ta vẫn lưu lại bóng dáng (pháp trần) của năm trần. Khi chúng ta nhớ tưởng lại, thì cảnh ngũ trần in như hiện rõ ràng ở trước, đó là công dụng của “Độc đầu Ý thức”. Thức thứ sáu này, khi tính toán, suy nghĩ việc gì, thiện hay ác, hay hay dở, cũng đều lanh lợi đảm đang hơn các thức khác, nên trong Duy thức nói: “công vi thủ, tội vi khôi” (công đứng đầu, mà tội cũng đứng đầu).</li>
  </ul>
  <p>Thức thứ sáu, tuy sở trường là khôn ngoan lanh lợi, nhưng lại có sở đoản là bất thường, không phải lúc nào cũng hiện diện, mà lại có khi gián đoạn, ẩn phục, như trong lúc bị chụp thuốc mê, chết giả, ngủ say, hay nhập “vô tưởng định” v.v… Qua những giai đoạn ấy, ý thức lại hiện trở lại.<br>
  Vậy trong lúc ý thức không hiện, nó núp ở đâu? Theo Duy thức khi đó, thức thứ sáu trở về gốc của nó là Ý căn, tức là thức thứ bảy hay thức Mạt na. Theo tâm lý học thì cũng có thể gọi là tiềm thức.<br>
  Thức thứ bảy này có hai công năng:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Chấp ngã;</li>
    <li>Làm căn bản cho Ý thức thứ sáu.</li>
  </ul>
  <p>Nó có công năng là đem các pháp hiện hành bên ngoài “truyền” vào tạng thức và đem các pháp chủng tử bên trong “tống” ra ngoài, nên cũng có tên là “truyền tống thức”. Sự chấp ngã của thức này và của thức thứ sáu, có thô và tế khác nhau. Khi nào để ý bảo thủ bản ngã, như khi ra trận, bắn nhau với địch quân, khi đánh lộn, hay tìm một mưu kế gì để sinh nhai, thì sự chấp ngã ấy thuộc về thức thứ sáu, thô phù, dễ thấy. Nhưng ngoài những lúc ấy, không phải là chúng ta không chấp ngã, sự chấp ngã vẫn thường trực trong chúng ta. Nhưng nó âm thầm, sâu kín, tiềm phục, nên chúng ta không nhận thấy được. Đến lúc bất ngờ, đột nhiên xảy đến một sự việc gì có nguy hại đến tánh mạng ta, như bất thần có người rình rập, hay đi ra đường bị nhánh cây gãy sắp rơi xuống đầu v.v… trong những lúc ấy, tuy thức thứ sáu không kịp để ý can thiệp, đối phó, mà ta vẫn tự tránh né, bảo thủ cái Ngã. Đó là sự chấp ngã của thức thứ Bảy.</p>
  <p>Ngoài bảy thức nói trên, còn có một thức thứ Tám tế nhị, sâu kín mênh mông hơn nữa, đó là thức A lại da, Tàu dịch là Tàng thức, nghĩa là thức “Tích chứa”.<br>
  Từ nhỏ đến lớn, chúng ta đọc rất nhiều sách, tiếp xúc với rất nhiều sự vật, rồi thời gian cứ tuần tự trôi qua, chúng ta tưởng đã quên mất rồi. Thế mà không! Mỗi khi nghĩ đến, thì danh từ, hình ảnh của những sự vật xưa cũ hiện ra một cách rõ ràng như một cuốn phim quay lại ở trước mắt. Những danh từ hình ảnh ấy, vì sao đã mấy chục năm rồi mà vẫn còn lại? Tất nhiên phải có một cái kho vô tận chất chứa lại, nên mới không mất vậy! Kho vô tận này, trong Duy thức tông gọi là Tàng thức (thức chứa).</p>
  <p>Để cho dễ nhớ hành tướng và công năng của tám thức nói trên, cổ nhân có làm bài kệ rằng:</p>
  <blockquote>
    <p>Bát cá đệ huynh, nhứt cá si<br>
    Độc hữu nhất cá, tối linh linh<br>
    Ngũ cá môn tiền tố mãi mại<br>
    Nhất cá gia trung tác chủ y</p>
    <p>Dịch nghĩa:<br>
    Anh em tám chú, một người si (thức thứ 7)<br>
    Một mình ý thức rất tinh ranh (thức thứ 6)<br>
    Năm chàng ngoài cửa lo buôn bán (năm thức trước)<br>
    Làm chủ trong nhà, thức Lại da.</p>
  </blockquote>

  <p><strong>2. Tâm sở:</strong> Tâm sở là tánh sở hữu, phụ thuộc của tâm vương, cũng như những ông quan trong triều, phụ thuộc dưới quyền sai sử của ông Vua, hay những nhân viên phụ thuộc dưới quyền sử dụng của vị Bộ trưởng. Tâm sở có tất cả 51 pháp, chia làm sáu loại như sau:</p>
  <ul style="padding-left: 2.5rem;">
    <li><strong>Biến hành tâm sở:</strong> Biến là phổ biến, Hành là lưu hành; Biến hành tâm sở nghĩa là những tâm sở có công năng phổ cập lưu chuyển khắp cả tám thức (tâm vương), với thức nào nó cũng tương ưng được cả. Biến hành tâm sở gồm có 5 pháp là: Xúc, Tác ý, Thọ, Tưởng và Tư.</li>
    <li><strong>Biệt cảnh tâm sở:</strong> Biệt là riêng biệt, biệt cảnh tâm sở là những tâm sở duyên mỗi cảnh khác nhau, như Dục tâm sở duyên riêng với cảnh mà mình quan sát… chứ không phải như Biến hành tâm sở. Biệt cảnh tâm sở gồm có 5 pháp là: Dục, Thắng giải, Niệm, Định và Huệ.</li>
    <li><strong>Thiện tâm sở:</strong> Thiện tâm sở là tâm sở lành, và có công năng phát sanh những điều lành mà thôi. Thiện tâm sở gồm có 11 pháp là: Tín, Tàm, Quý, Vô tham, Vô sân, Vô si, Tinh tấn, Khinh an, Bất phóng dật, Hành xả, Bất hại.</li>
    <li><strong>Căn bản phiền não tâm sở:</strong> Những tâm sở này gây phiền não, rối loạn cho chúng sanh. Đây là những phiền não làm cội gốc cho các phiền não khác phát sinh, nên gọi là căn bản phiền não. Căn bản phiền não gồm có sáu pháp là: Tham, Sân, Si, Mạn, Nghi, Ác kiến.</li>
    <li><strong>Tùy phiền não tâm sở:</strong> Những tâm sở này nương tựa, phát sinh từ các phiền não căn bản tâm sở nói trên, nên gọi là Tùy phiền não. Những tâm sở căn bản phiền não trên là gốc, mà những tâm sở Tùy phiền não này là ngọn. Tùy phiền não tâm sở gồm có 20 pháp là: Phẫn, Hận, Phú, Não, Tật, Xan, Cuống, Siểm, Hại, Kiêu, Vô tàm, Vô quý, Trạo cử, Hôn trầm, Bất tín, Giải đãi, Phóng dật, Thất niệm, Tán loạn, Bất chánh tri.</li>
    <li><strong>Bất định tâm sở:</strong> Bất định nghĩa là không nhất định; Bất định tâm sở là những tâm sở không nhất định là thiện hay ác; không đứng hẳn về một phía thiện hay ác như các pháp nói trên. Bất định tâm sở gồm có bốn pháp là: Hối, Miên, Tầm, Tư.</li>
  </ul>

  <p><strong>3. Sắc pháp:</strong> Sắc pháp tức là những pháp có thể hư nát và có tánh cách chướng ngại. Sắc pháp là sự phối hợp của năm căn và sáu trần, cộng tất cả là 11 pháp:<br>
  Năm căn là: nhãn, nhĩ, tỷ, thiệt, thân.<br>
  Sáu trần là: sắc, thanh, hương, vị, xúc và pháp trần.</p>

  <p><strong>4. Bất tương ưng hành pháp:</strong> Các pháp này không thuộc về sắc mà cũng không thuộc về tâm; nhưng chúng nó không thể rời sắc và tâm mà có được. Thí dụ như “đắc” (được) là một “bất tương ưng hành pháp”. “Được” không thể là sắc mà cũng không thể là tâm. Nhưng khi nói “được”, tức hàm cái nghĩa “được” một cái gì, như “được” một đồng bạc chẳng hạn, và phải có một yếu tố thứ hai là “ai” được. Đồng bạc thuộc về sắc, “ai” thuộc về tâm. Còn “được” thì không phải là sắc và tâm, nhưng phải nương vào sắc và tâm mới có. Đó là một thí dụ để chúng ta suy ngẫm về những pháp bất tương ưng khác như mạng căn, sanh, trụ, dị, diệt, phương, thế, tốc v.v… gồm tất cả là 24 pháp.</p>

  <p><strong>5. Vô vi pháp:</strong> Như đoạn trên đã có nói, pháp vô vi là pháp không sanh, không diệt, không tạo tác, không thay đổi, xa lìa tướng hư vọng, tức là thể tánh của các pháp. Các pháp vô vi, đối với phàm phu thì khó có thể nói năng, nghĩ bàn so sánh được. Tuy thế, để có một ý niệm về thể tánh chơn như, nhà chủ trương duy thức dựa vào sắc tướng, danh tự để hình dung các pháp vô vi. Do đó, mà đặt thành sáu pháp vô vi sau đây:</p>
  <ol style="padding-left: 2.5rem;">
    <li><strong>Hư không vô vi:</strong> Muốn nói thể tánh chơn như, xa lìa các điều chướng ngại giống như hư không.</li>
    <li><strong>Trạch diệt vô vi:</strong> Trạch là lựa chọn. Diệt là diệt trừ, nghĩa là nhờ sự lựa chọn đúng đắn của trí huệ vô lậu mà diệt trừ được sự phiền não nhiễm trước, chứng ngộ cứu cánh.</li>
    <li><strong>Phi trạch diệt vô vi:</strong> Trên thì nói nhờ sự lựa chọn đúng đắn của trí huệ mà diệt trừ được sự phiền não nhiễm trước. Nhưng nói thế không có nghĩa rằng pháp tánh nhờ có sự diệt trừ phiền não mới có được. Pháp tánh vốn đã có sẵn, xưa nay vốn là thanh tịnh, không có nhiễm ô, không có sanh diệt, cho nên gọi “Phi trạch diệt vô vi”. Lại có nghĩa thứ hai là vì thiếu duyên, nên các phiền não nhiễm ô không hiện; vì thế mà pháp vô vi thanh tịnh tự hiện ra, không cần có sự trạch diệt.</li>
    <li><strong>Bất động vô vi:</strong> Khi đã xa lìa các phiền não, về cõi tịnh lự thứ ba, thuộc về Sắc giới, dứt bỏ những sự vui buồn, thường tương ưng cùng xả thọ, không còn bị lay động bởi một sắc tướng gì nữa, nên gọi là “Bất động vô vi”.</li>
    <li><strong>Tưởng thọ diệt vô vi:</strong> Khi đã xa lìa được phiền não ở cõi thứ ba thuộc về Vô sắc giới, các tâm sở “tưởng, thọ” đều tịnh diệt, chơn như hiện ra, nên gọi là “Tưởng thọ diệt vô vi”.</li>
    <li><strong>Chơn như vô vi:</strong> Năm pháp vô vi trên này là hình dung các đức tánh của chơn như; pháp thứ sáu này, chơn như vô vi là chỉ đích danh bản thể chơn như.</li>
  </ol>
  <p>Để người học dễ nhớ 100 pháp vừa kể trên này, cổ nhân có một bài kệ, tóm tắt như sau:</p>
  <blockquote>
    <p>Sắc pháp thập nhất, tâm pháp bát<br>
    Ngũ thập nhất cá tâm sở pháp<br>
    Nhị thập tứ chủng bất tương ưng<br>
    Lục cá vô vi thành bá pháp.</p>
    <p>Dịch nghĩa:<br>
    Sắc pháp mười một, tâm pháp tám<br>
    Năm mươi mốt món tâm sở pháp<br>
    Hai mươi bốn món bất tương ưng<br>
    Sáu món vô vi, thành trăm pháp.</p>
  </blockquote>

  <h3 id="phuong-phap-tu">V. PHƯƠNG PHÁP TU</h3>
  <p>Như chúng ta đã biết vũ trụ vạn hữu tuy vô cùng phức tạp, nhưng nhà Duy thức học có thể sắp xếp thành một trăm loại (bách pháp). Một trăm loại này, tuy hình tướng công năng có khác, chung cục lại cũng đều là Thức cả.</p>
  <p>Vậy phương pháp tu hành của nhà Duy thức học là làm thế nào để chứng ngộ cái lý nói trên, thể nhập với cái chân lý ấy. Để đạt mục đích này, nhà Duy thức học dạy phải thực hành năm phép quán sau đây, gọi là “ngũ trùng duy thức quán”. Với năm phép quán này, hành giả đi từ thô đến tế, từ phức tạp đến tinh thuần, để cuối cùng chỉ còn thấy có thức tánh, tức là tâm chơn như.</p>

  <ol style="padding-left: 2.5rem;">
    <li><strong>Bỏ cái hư giả, lưu lại cái chơn thật (khiển hư, tồn thật):</strong> Bỏ cái hư giả tức là cái vọng chấp thật có ngã, có pháp do cái tánh “biến kế” tạo ra. Lưu lại cái chơn thật, tức là cái tánh “y tha khởi” và “viên thành”. Nói một cách khác cho dễ hiểu, trong pháp quán này, hành giả phải quán ngã và pháp là không thật (hư) để phá trừ cái chấp thật có. Hành giả lại quán tánh y tha, viên thành là thật có (thật) để phá trừ chấp không. Trong lối quán Duy thức tầng thứ nhất này “có” và “không” đối đãi nhau, để bỏ “biến kế” lưu lại “y tha” và “viên thành”.</li>
    <li><strong>Bỏ cái lộn lạo, lưu lại cái thuần túy (xả lạm lưu thuần):</strong> Cái lộn lạo nói ở đây là tướng phần (nội cảnh); cái thuần túy ở đây là kiến phần. Bỏ cái lộn lạo lưu lại cái thuần túy, tức là bỏ phần “tướng” bị duyên (sở duyên) mà lưu lại cái phần “kiến” là phần năng duyên. Đây là lối quán thứ hai về Duy thức, lấy tâm (năng) và cảnh (sở) đối đãi với nhau, và mục đích là bỏ cảnh (xả lạm) mà chỉ giữ lại tâm (lưu thuần). Lối quán thứ nhất là bỏ vọng cảnh ngoài tâm; lối quán thứ hai này là bỏ cảnh nội tâm là tướng phần của thức.</li>
    <li><strong>Đem cái ngọn trở về gốc (nhiếp mạt quy bổn):</strong> Cái ngọn ở đây tức muốn nói tướng phần và kiến phần, còn gốc ở đây tức là tự chứng phần. Kiến phần và tướng phần là “dụng” đều y theo tự chứng phần mà khởi ra, nên gọi là ngọn; còn tự chứng phần là “thể tánh” cho nên gọi là gốc. Lối quán Duy thức thứ ba này là đem “dụng” và “thể” đối đãi với nhau, mà mục đích là bỏ cái phần tương đối ít quan trọng là dụng (kiến phần, tướng phần), chỉ giữ lại cái phần căn bản là thể (tự chứng phần).</li>
    <li><strong>Giấu cái liệt làm hiển lộ cái thắng (ẩn liệt, hiển thắng):</strong> Cái liệt muốn nói ở đây tức là các tâm sở, cái thắng tức là các tâm vương. Tâm sở phụ thuộc vào tâm vương nên gọi là liệt, hay kém; tâm vương là phần sai sử chủ động, nên gọi là thắng hay hơn. Lối quán Duy thức thứ tư này là đem 51 món tâm sở so sánh với 8 món tâm vương, mà mục đích là dẹp bỏ các món tâm sở và làm hiển lộ 8 món tâm vương.</li>
    <li><strong>Bỏ thức tướng về thức tánh (khiển tướng chứng tánh):</strong> Bốn tầng quán Duy thức trên, tuy rốt ráo chỉ còn giữ lại các món Tâm vương, nhưng Tâm vương cũng có sự tướng và lý tánh. Lối quán thứ năm này là đem sự tướng đối đãi với lý tánh, mà mục đích cuối cùng là bỏ sự tướng của thức (thức tướng) để trở về với lý tánh của thức (thức tánh), tức cũng là chứng nhập pháp tánh hay tâm chơn như.</li>
  </ol>
  <p>Ngoài năm lớp quán Duy thức của cổ nhân mà chúng tôi vừa kể trên, còn có một lối tu nữa rất dễ dàng và thiết thực hợp với đại chúng, là chúng ta thường quán sát và kiểm điểm nội tâm của mình.<br>
  Chúng ta hãy đọc kỹ về hai loại Phiền não tâm sở và Thiện tâm sở trong Duy thức, để nhìn rõ mặt mày tướng trạng, công dụng, tánh tình và danh tự của chúng. Rồi hằng ngày chúng ta kiểm điểm ở nơi nội tâm. Mỗi khi hiện lên một tâm niệm gì, chúng ta kiểm điểm và quan sát thật kỹ tâm niệm này thiện hay ác (phiền não). Nếu tâm niệm thiện thì chúng ta nuôi dưỡng cho nó phát triển thêm, còn tâm niệm ác thì chúng ta phải mau mau lo diệt trừ đi. Chúng ta biết sửa đổi tâm niệm xấu (tu tâm) và nuôi dưỡng tánh tốt (dưỡng tánh) như thế, thì chúng ta sẽ thành được thánh hiền.</p>

  <h3 id="nam-dia-vi">VI. NĂM ĐỊA VỊ HÀNH GIẢ PHẢI TRẢI QUA TRONG KHI TU DUY THỨC</h3>
  <p>Người tu học pháp môn Duy thức, cũng như kẻ bộ hành, từ khi nảy sinh cái ý nguyện muốn đi cho đến khi tới đích, phải trải qua năm giai đoạn hay năm địa vị như sau:</p>

  <ol style="padding-left: 2.5rem;">
    <li><strong>Vị Tư lương:</strong> Tức là thời gian chuẩn bị, như người sắp đi xa, phải chuẩn bị lương thực trước khi cất bước lên đường. Trong Duy thức tam thập tụng có chép:
      <blockquote>
        Nãi chí vị khởi thức<br>
        Cầu trụ Duy thức tánh<br>
        Ư nhị thử tùy miên<br>
        Du vị năng phục diệt.<br>
        Nghĩa là: Từ khi chưa phát tâm cho đến khi phát tâm cầu an trụ Duy thức tánh, trong thời gian đó, hai món thủ (ngã chấp, pháp chấp) hãy còn miên phục, hành giả chưa có thể chinh phục hay diệt trừ được.
      </blockquote>
    </li>
    <li><strong>Vị Gia hạnh:</strong> Hành giả gia công tấn hành, cũng như người định đi xa, sau khi đã chuẩn bị đầy đủ hành lý, cất bước lên đường. Trong Duy thức tam thập tụng có chép:
      <blockquote>
        Hiện tiền lập thiểu vật<br>
        Vị thị Duy thức tánh<br>
        Dĩ hữu sở đắc cố<br>
        Phi thật trụ Duy thức<br>
        Nghĩa là: Nếu hiện tiền còn thấy mình an trụ Duy thức tánh, dù nhỏ niệm bao nhiêu, thì cũng chưa phải thật an trụ Duy thức tánh, vì còn chỗ sở đắc vậy.
      </blockquote>
    </li>
    <li><strong>Vị Thông đạt:</strong> Hành giả thông suốt đường lối tu hành, cũng như người bộ hành, nghiên cứu kỹ lưỡng con đường mà mình sắp đi, biết rõ đoạn nào tốt, đoạn nào xấu, đoạn nào nguy hiểm, đoạn nào không v.v… Trong Duy thức tam thập tụng có chép:
      <blockquote>
        Nhược thời ư sở duyên<br>
        Trí độ vô sở đắc<br>
        Nhĩ thời trụ Duy thức<br>
        Ly nhị thủ tướng cố.<br>
        Nghĩa là: Bao giờ cảnh sở quán và trí năng quán đều không, khi đó mới an trụ nơi Duy thức tánh, vì đã xa lìa được hai món thủ vậy.
      </blockquote>
    </li>
    <li><strong>Vị Tu tập:</strong> Hành giả đang tu tập, cũng như người đã lên đường và đang đi trên đường thiên lý. Trong Duy thức tam thập tụng có chép:
      <blockquote>
        Vô đắc bất tư nghị<br>
        Thị xuất thế gian trí<br>
        Xá nhị thô trọng cố<br>
        Tiên chứng đắc chuyển y.<br>
        Nghĩa là: Cảnh giới “vô đắc” này không thể nghĩ bàn; đây là trí xuất thế gian vô lậu. Do đã lìa được hai món thô trọng (phiền não chướng và sở tri chướng), hành giả chứng được hai món chuyển y (Bồ đề và Niết bàn).
      </blockquote>
    </li>
    <li><strong>Vị Cứu cánh:</strong> Quả vị rốt ráo của sự tu chứng, tức là quả Phật, cũng như người đi đường đã hoàn toàn tới chỗ. Trong Duy thức tam thập tụng có chép:
      <blockquote>
        Thử tức vô lậu giới<br>
        Bất tư nghị, thiện, thường<br>
        An lạc, giải thoát thân<br>
        Đại Mâu ni danh pháp.<br>
        Nghĩa là: Đây là cảnh giới vô lậu, cũng gọi là: Bất tư nghị; Thiện; Thường; An lạc; Giải thoát thân; Đại Mâu ni, cũng gọi là Pháp thân.
      </blockquote>
    </li>
  </ol>

  <h3 id="ket-qua">VII. KẾT QUẢ TU CHỨNG</h3>
  <p>Hành giả, sau khi đã dày công tu luyện pháp môn Duy thức này, sẽ được nhiều thành quả tốt đẹp như sau:</p>

  <p><strong>1. Được bốn trí:</strong></p>
  <ol style="padding-left: 2.5rem;">
    <li><strong>Thành sở tác trí:</strong> Trong khi còn sống trong mê vọng, năm thức trước của chúng ta là nhãn, nhĩ, tỳ, thiệt và thân thức, duyên với cảnh giới năm trần là sắc, thanh, hương, vị và xúc trần; nhờ thế, chúng ta mới thấy được sắc, nghe được tiếng, ngửi được mùi, nếm được vị và cảm giác được với cảnh giới chung quanh. Nhưng cái giá trị và tầm hoạt động cũng như công dụng của năm thức ấy rất nhỏ hẹp và thường hay sai lạc, nhận giả làm thật. Do đó, chúng ta tạo ra các nghiệp sanh tử luân hồi, quay cuồng trong lục đạo. Đối với người tu Duy thức khi đã thành tựu rồi, thì năm thức này chuyển ra cái trí “Thành sở tác”, nghĩa là cái trí có những công năng vô cùng rộng lớn như thị hiện thần thông biến hóa, hiện ra ba món hóa thân, để tùy theo căn cơ của chúng sanh mà hóa độ.</li>
    <li><strong>Diệu quán sát trí:</strong> Khi đang còn ở trong mê, thức thứ sáu chỉ biết so đo, tính toán trong phạm vi nhỏ hẹp, tầm hoạt động không thể bao quát cùng khắp được. Do đó mà, nó thường hay sai lạc, lầm lẫn, và lôi kéo thân và miệng làm nhiều điều tội lỗi, tạo ra các nghiệp sanh tử luân hồi. Đến khi đã chứng được Duy thức quả rồi, thì cái thức thứ sáu này chuyển thành cái trí Diệu quán sát, nghĩa là cái trí quán sát rất là mầu nhiệm, có thể thấy được hằng sa thế giới; trong mỗi thế giới thấy được toàn thể chúng sanh, trong mỗi chúng sanh thấy được bao nhiêu tâm niệm v.v… Và nhờ sự quán sát huyền diệu rốt ráo như thế mà tùy theo nguyện vọng, tâm lý, làm lợi lạc cho chúng sanh.</li>
    <li><strong>Bình đẳng tánh trí:</strong> Trong khi mê, thức thứ bảy chấp kiến phần của thức thứ tám làm ngã. Khi đã chấp “ngã”, tất chỉ biết có cái ngã là quan trọng nhất, và mọi ý nghĩ, mọi hành động, mọi lời nói gì cũng đều quy tụ chung quanh cái ngã. Điều gì thích hợp với cái ngã thì yêu thương, chiều chuộng, cung dưỡng, điều gì trái với cái ngã thì khinh ghét, hất hủi, chà đạp. Do đó, gây ra không biết bao nhiêu là bất công, bất bình đẳng, làm xáo trộn, điêu đứng, phá hủy cõi trần gian này. Đến khi chứng được Duy thức quả, thức thứ bảy này không còn chấp ngã nữa, mà chỉ thấy mình và người, cho đến loài vật đều bình đẳng như nhau. Khi đã có được trí bình đẳng rồi thì sẽ dùng tâm từ bi hiện đủ phương tiện, để tùy theo căn cơ mỗi loài mà hóa độ, làm cho chúng sanh đều được giải thoát.</li>
    <li><strong>Đại viên cảnh trí:</strong> Khi còn mê mờ bị thức thứ bảy chấp ngã và bị các chủng tử phiền não hữu lậu, nhiễm ô chi phối, nên thức thứ tám không được sáng suốt thanh tịnh. Đến khi nhờ tu hành, chứng được Duy thức tánh, thức thứ tám này trở thành như một cái gương lớn được lau chùi sạch bụi bặm, có thể phản chiếu khắp cả mười phương thế giới, nên gọi là “Đại viên cảnh trí”.</li>
  </ol>

  <p><strong>2. Hai trí:</strong> Bốn trí trên này, tuy có phân chia khác nhau, tùy theo công năng của mỗi thứ, nhưng rốt lại, có thể gồm trong hai trí sau đây là Căn bản trí và Hậu đắc trí.</p>
  <ol style="padding-left: 2.5rem;">
    <li><strong>Căn bản trí:</strong> Tức là trí thể, chư Phật và chúng sanh đều sẵn có. Trí này cũng gọi là Vô phân biệt trí.</li>
    <li><strong>Hậu đắc trí:</strong> Tức là trí dụng. Sau khi chứng quả Thánh, được Căn bản trí rồi mới được Hậu đắc trí. Trí này cũng gọi là Sai biệt trí; nghĩa là trí phân biệt các pháp do tánh y tha khởi mà có sai khác.</li>
  </ol>
  <p>Tóm lại, thành quả rốt ráo của người tu học Duy thức là chuyển đổi được tám thức thành bốn trí là: Thành sở tác trí, Diệu quán sát trí, Bình đẳng tánh trí và Đại viên cảnh trí. Đứng về mặt thể và dụng mà xét thì bốn trí này chỉ gồm lại làm hai trí là: Căn bản trí và Hậu đắc trí. Khi đã có được hai trí này hành giả đã chứng được Duy thức tánh, ngộ nhập chơn tâm, hoàn thành quả Phật.</p>

  <h3 id="loi-ich">VIII. LỢI ÍCH THIẾT THỰC TRONG KHI HỌC VÀ TU DUY THỨC</h3>
  <p>Kết quả thu hoạch được như trên, hành giả tất nhiên phải trải qua nhiều kiếp tu hành. Nhưng chúng ta đừng thấy con đường đi quá xa xôi, diệu vợi mà nản chí. Vả lại không phải đợi đến khi thu hoạch kết quả cuối cùng mới nhận chân sự lợi ích của pháp môn này. Ngay trong khi đang tu học, môn Duy thức này cũng đã đem lại cho chúng ta nhiều lợi ích thiết thực cho đời sống hiện tại rồi:</p>

  <ol style="padding-left: 2.5rem;">
    <li><strong>Chúng ta biết được mình một cách rõ ràng:</strong> Từ hồi nào đến giờ, chúng ta cho thân tâm này là của ta, tưởng rằng chúng ta hiểu rõ bản thân của ta nhiều lắm. Nhưng nghĩ cho kỹ, chúng ta chỉ biết sơ sài về chúng ta mà thôi. Về thân xác này, chúng ta chỉ thấy được những bộ phận ở bên ngoài như mặt, mũi, tay, chân v.v… Muốn biết các bộ phận bên trong chúng ta tất phải học khoa giải phẫu.<br>
    Về tâm tánh chúng ta lại càng dốt hơn nữa. Nhiều khi chúng ta tưởng hiểu rõ nội tâm của mình kỳ thật đã lầm nhiều lắm. Vậy muốn rõ biết tâm tánh một cách rõ ràng chúng ta hãy tu học Duy thức. Như phần trên đã nói, Duy thức học đã phân tích, chia chẻ một cách tường tận, tỉ mỉ tâm lý của chúng ta, liệt kê ra thành nhiều loại; mỗi loại có những tên riêng, hành tướng, công năng, phạm vi hoạt động khác nhau như thế nào. Học Duy thức, chúng ta thấy được phần nội tâm một cách rõ ràng như người cầm gương soi, thấy tất cả những gì ở trên mặt. Chúng ta sẽ biết rõ những tâm niệm xấu xa để diệt trừ (tu tâm), những tánh tình tốt đẹp để bồi dưỡng (dưỡng tánh). Do đó, chúng ta sẽ trở thành người hiền lương, đạo đức.</li>
    <li><strong>Chúng ta thấy được cái chính phủ nội tâm của chúng ta:</strong> Tâm lý của mỗi người mới xem qua thật vô cùng phức tạp; nhưng nếu suy nghiệm cho kỹ, chúng ta thấy vẫn có một tổ chức gần giống như một liên bang. Trước tiên, thức thứ tám như một vị Tổng thống của liên bang; các tâm sở biến hành như các vị Bộ trưởng; các tâm sở biệt cảnh như các vị Tỉnh trưởng; các tâm sở bất định như các vị dân biểu không đảng phái; các tâm sở thiện như các vị công thần liêm khiết hay các vị công chức tận tâm vì dân vì nước; các tâm sở phiền não như những tham quan ô lại, hay giặc giã, lưu manh v.v… còn các chủng tử (thiện, ác, vô ký) thì như toàn thể dân chúng trong liên bang.<br>
    Với một liên bang nội tâm như thế, nếu chúng ta biết sắp đặt điều hòa bộ máy chính quyền nội tâm cho vững vàng, thì tất nhiên liên bang ấy sẽ vững mạnh, hùng cường, và văn minh tiến bộ. Trái lại, nếu chúng ta không nắm vững được bộ máy hành chính nội tâm, thì liên bang ấy sẽ loạn lạc, đói khổ và không sớm thì muộn, sẽ rơi vào vực thẳm tối tăm.<br>
    Duy thức học giúp cho chúng ta thấy rõ chính phủ nội tâm của mình, để tự điều hòa cho được thạnh trị, thái bình.</li>
    <li><strong>Chúng ta trau dồi được một đức tánh tốt đẹp là tánh kiên nhẫn:</strong> Học Duy thức, trước tiên, chính là chúng ta học đức tính kiên nhẫn. Thật vậy, người không kiên nhẫn, không thể học Duy thức đến nơi đến chốn được, vì môn học này chia chẻ tâm lý một cách tỉ mỉ, phiền toái; mỗi tâm niệm đều có nhiều danh từ chuyên môn, và được nghiên cứu kỹ lưỡng về tánh chất, hành vi, tướng trạng… Những người không chịu khó, tánh tình hời hợt, nóng nảy, không thể nào thành công trên đường tu học Duy thức. Cho nên chỉ những người kiên nhẫn mới thành công, hay ngược lại muốn thành công thì phải luyện tập đức tánh kiên nhẫn. Từ xa xưa đến nay, trong đạo đức hay ngoài đời, những người được thành công vĩ đại, đều nhờ đức tánh kiên nhẫn.</li>
    <li><strong>Chúng ta giữ được thái độ bình tĩnh tự tại:</strong> Như các đoạn trước đã nêu rõ, mọi sự vật trong vũ trụ này đều do thức biến, chứ không chắc thật. Do đó, khi gặp được điều may mắn, chúng ta không kiêu hãnh, ngã mạn, cống cao; khi gặp cảnh đau buồn, như tử biệt sanh ly v.v… chúng ta bớt khổ não, kêu thanh, giữ được thái độ bình tĩnh.<br>
    Và cũng do biết cõi đời là giả tạm, như mây bay, như gió thoảng, nên chúng ta không say đắm, tham lam luyến tiếc, và nhờ thế, chúng ta bớt dần những nghiệp dữ, chóng được giải thoát.</li>
    <li><strong>Chúng ta nắm vững lòng tin:</strong> Học Duy thức, chúng ta thấy rõ được giá trị cao siêu của nó, nên lại càng tin tưởng mạnh mẽ vào tôn giáo của chúng ta, một tôn giáo không phải dựa trên giáo điều độc đoán, mà dựa trên thực nghiệm, và lấy ngay nội tâm của con người làm nền tảng cho sự tu học của mình.</li>
  </ol>

  <h3 id="ket-luan">IX. KẾT LUẬN</h3>
  <p>Chúng tôi đã trình bày xong những điểm chính yếu của Duy thức tông, hay Pháp tướng tông. Tất nhiên với khuôn khổ của một tập sách nhỏ thuộc vào loại “những bài giảng” này, chúng tôi không thể đi sâu vào chi tiết, trình bày một cách rộng rãi, đầy đủ hơn. Quý vị nào muốn nghiên cứu sâu xa về môn học này, xin hãy tìm trước tiên ba bộ sách chính tông của Duy thức là: Đại thừa bá pháp minh môn luận (Duy thức nhập môn), Duy thức tam thập tụng, và Bát thức quy củ tụng; sau đó sẽ nghiên cứu thêm những tập sách khác hiện đã được xuất bản rất nhiều ở Việt Nam.</p>
  <p>Tuy thế, sau khi xem qua nội dung trình bày trong tập sách này, quý vị cũng đã có thể quyết định được con đường tu hành của quý vị rồi. Nếu quý vị thấy đây là một con đường tu hành thích hợp và thiết thực lợi ích đối với đời mình thì xin hãy hạ thủ công phu ngay, nghĩa là ngày đêm quan sát kiểm thảo tâm thức của mình. Như quý vị đã biết, trong mỗi chúng ta đều có sáu đầu đảng giặc cướp là sáu món Căn bản phiền não. Sáu đầu đảng này lại có hai mươi tên bộ hạ nguy hiểm là 20 Tùy phiền não. Chính bọn giặc cướp này, từ vô thỉ đến nay, phá hại chúng ta vô cùng vô tận, làm cho chúng ta phải điêu đứng trầm luân trong biển khổ sanh tử luân hồi. Nếu ngày nay chúng ta biết được sự tàn phá của chúng, quyết tâm diệt trừ, không cho chúng hoành hành nữa, chắc chắn cuộc đời của chúng ta sẽ được an cư lạc nghiệp (xem quyển Tu tâm).</p>
  <p>Hơn nữa, bên cạnh những bọn giặc cướp ấy chúng ta còn có những anh hùng nghĩa sĩ, chuyên làm các việc thiện là 11 món tâm sở Thiện. Với những vị hảo hán này, chúng ta phải luôn luôn ân cần, trọng đãi, khuyến khích cổ vũ, để cho họ càng thêm hăng hái và mạnh mẽ làm các việc lành (xem quyển Dưỡng tánh).</p>
  <p>Một khi các tâm niệm xấu hoàn toàn tiêu diệt, các tánh tốt hoàn toàn đầy đủ, chúng ta sẽ thành Phật quả.</p>
  <p>Cầu mong quý vị thành công.</p>
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
        { id: 'phuong-phap-tu', label: 'V. Phương Pháp Tu' },
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