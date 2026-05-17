import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">

  <section id="duy-thuc-tong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">4. DUY THỨC TÔNG HAY LÀ PHÁP TƯỚNG TÔNG</h2>
    <p>Duy Thức tông thuộc về Đại thừa, chuyên phân tích vũ trụ, vạn hữu và đời sống nội tâm dưới ánh sáng của thức. Tông này vừa là một hệ thống triết học sâu sắc, vừa là một pháp môn tu tập nhằm phá trừ hai món chấp căn bản là chấp ngã và chấp pháp để đưa hành giả trở về với tánh chân thật.</p>

    <section id="duy-thuc-duyen-khoi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. DUYÊN KHỞI LẬP TÔNG</h3>
      <p>Tất cả chúng sanh từ vô thỉ đến nay, vì chấp có thật ngã, thật pháp mà tạo ra các nghiệp, rồi bị các nghiệp dắt dẫn nên xoay vần mãi trong bánh xe sanh tử luân hồi.</p>
      <p>Nếu con người hiểu rõ một cách chắc chắn rằng tất cả các pháp trong vũ trụ, ngã và pháp đều không thật có, chỉ do thức biến hiện, như cảnh trong chiêm bao, mà không còn gây phiền não, tạo nghiệp chướng nữa, thì tất không còn bị ràng buộc trong luân hồi sanh tử.</p>
      <p>Để phá trừ hai món chấp thật ngã và thật pháp, Đức Phật đã chỉ dạy rất nhiều phương pháp. Trong đó, Duy Thức tông hay Pháp Tướng tông là một pháp tu rất cần thiết và rất hiệu nghiệm để đi đến giải thoát.</p>
    </section>

    <section id="duy-thuc-dinh-nghia">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. ĐỊNH NGHĨA</h3>
      <p>Tôn này thuộc về Đại thừa, phân tích vũ trụ vạn hữu đều do thức biến hiện.</p>
      <p>Duy Thức tông hay Pháp Tướng tông, như danh từ đã chỉ định, không đi thẳng vào bản thể chơn như, mà chủ yếu nói về hành tướng của thức, cũng tức là hành tướng của pháp. Biết rằng từ chơn vọng hòa hiệp biến thành thức A-lại-da, rồi từ thức A-lại-da sanh ra các tướng tâm pháp v.v..., tông này quán sát những hành tướng ấy nên gọi là <strong>Pháp Tướng tông</strong>.</p>
      <p>Đứng về phương diện nguyên nhân để nghiên cứu, tông này chủ trương rằng vũ trụ vạn hữu hay tất cả các pháp đều do duy thức biến hiện; ngoài thức không còn một yếu tố nào khác nữa, nên gọi là <strong>Duy Thức tông</strong>.</p>
      <p>Vì vậy, Pháp Tướng tông hay Duy Thức tông đều là những tên gọi khác nhau của cùng một pháp môn: nghiên cứu, quan sát hành tướng và nguyên nhân sanh khởi của vạn pháp, mà nguyên nhân ấy chính là <strong>thức</strong>.</p>
    </section>

    <section id="duy-thuc-can-cu">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. CĂN CỨ KINH LUẬN ĐỂ LẬP RA DUY THỨC TÔNG</h3>
      <p>Như các tông phái khác, Duy Thức tông cũng căn cứ vào kinh luận của Phật mà thành lập. Theo truyền thống được nêu trong bài học này, nền tảng của tông gồm sáu bộ kinh và mười một bộ luận.</p>
      <div class="my-6 rounded-lg border-l-4 border-primary-400 bg-primary-50/50 p-5 dark:border-primary-600 dark:bg-primary-900/20">
        <p class="mb-2 font-semibold">Sáu bộ kinh được nêu làm căn cứ là:</p>
        <ul class="mb-0">
          <li>Kinh Giải Thâm Mật</li>
          <li>Kinh Hoa Nghiêm</li>
          <li>Kinh Như Lai Xuất Hiện Công Đức Trang Nghiêm</li>
          <li>Kinh A-tỳ-đạt-ma</li>
          <li>Kinh Lăng Nghiêm</li>
          <li>Kinh Hậu Nghiêm hay Mật Nghiêm</li>
        </ul>
      </div>
      <div class="my-6 rounded-lg border-l-4 border-amber-400 bg-amber-50/50 p-5 dark:border-amber-600 dark:bg-amber-900/20">
        <p class="mb-2 font-semibold">Các bộ luận chính được nhắc đến gồm:</p>
        <ul class="mb-0">
          <li>Luận Du-già Sư-địa</li>
          <li>Luận Hiển Dương Thánh Giáo</li>
          <li>Luận Đại Thừa Trang Nghiêm</li>
          <li>Luận Nhiếp Đại Thừa</li>
          <li>Luận Thập Địa Kinh</li>
          <li>Luận Phân Biệt Du-già</li>
          <li>Luận Quán Sở Duyên Duyên</li>
          <li>Luận Duy Thức Nhị Thập Tụng</li>
          <li>Luận Biện Trung Biên</li>
          <li>Luận Tạp Luận</li>
          <li>Các trước tác triển khai từ Duy Thức Tam Thập Tụng</li>
        </ul>
      </div>
      <p>Vị được tôn là sáng lập nền Duy thức chính là Bồ Tát Di Lặc. Đức Di Lặc, sau khi tu chứng được Duy thức, đã ứng theo lời thỉnh cầu của Ngài Vô Trước mà nói Luận Du-già Sư-địa.</p>
      <p>Hai vị có công lớn trong việc phát triển tông này tại Ấn Độ là hai anh em Ngài Vô Trước và Ngài Thế Thân. Ngài Vô Trước dựa theo bộ Du-già Sư-địa để soạn các bộ Hiển Dương Thánh Giáo và Nhiếp Đại Thừa. Ngài Thế Thân lại tóm lược nghĩa lý Duy thức để làm ra bộ <strong>Duy Thức Tam Thập Tụng</strong>, về sau trở thành nền tảng giải thích của nhiều Đại luận sư.</p>
      <p>Đến đời Đường, Ngài Huyền Trang từ Trung Hoa sang Ấn Độ thỉnh kinh và tham cứu Phật học, đặc biệt sở trường về Duy thức. Sau khi trở về, Ngài chọn lọc tinh hoa của mười bộ đại luận, dịch thành Hán văn dưới nhan đề <strong>Thành Duy Thức Luận</strong> gồm mười quyển. Ngài Khuy Cơ, đệ tử lớn của Ngài Huyền Trang, lại sớ giải rõ thêm dưới nhan đề <strong>Thành Duy Thức Thuật Ký</strong>.</p>
      <p>Tóm lại, ở Ấn Độ, vị có công lớn nhất trong sự phát huy Duy Thức tông là Ngài Thế Thân; còn ở Trung Hoa, vị có công lớn nhất trong việc truyền bá Duy Thức tông là Ngài Huyền Trang.</p>
      <p>Về phương diện sách học nhập môn và chánh tông của Duy thức, bài học nhấn mạnh ba bộ quan trọng sau:</p>
      <ul>
        <li><strong>Đại Thừa Bách Pháp Minh Môn Luận</strong>: giải thích các danh từ chuyên môn của Duy thức, nói rõ một trăm pháp và hai món vô ngã.</li>
        <li><strong>Duy Thức Tam Thập Tụng</strong>: dùng ba mươi bài tụng để giải thích nghĩa lý căn bản của Duy thức, gồm bốn phần: ba chức năng biến, các tâm sở, giải đáp nghi vấn, và đạo vị tu tập.</li>
        <li><strong>Bát Thức Quy Củ Tụng</strong>: Ngài Huyền Trang dùng mười hai bài tụng để tóm lược nghĩa lý Duy thức theo năm thức đầu, thức thứ sáu, thức thứ bảy và thức thứ tám.</li>
      </ul>
      <p>Ba bộ luận trên là những cửa ngõ không thể bỏ qua đối với người muốn học Duy thức một cách có hệ thống.</p>
    </section>

    <section id="duy-thuc-chu-truong">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. CHỦ TRƯƠNG CỦA DUY THỨC TÔNG</h3>
      <p>Chủ trương của Duy Thức tông là phá trừ vọng chấp ngã, pháp tức <strong>biến kế sở chấp</strong>, bằng cách chỉ cho chúng sanh thấy tất cả các pháp đều nương nơi thức hiện ra tức <strong>y tha khởi</strong>, và mục đích cuối cùng là đưa chúng sanh trở về với tánh chân thật tức <strong>viên thành thật</strong>.</p>
      <p>Thế giới hiện tượng này vì mê mờ mà chúng ta tưởng là chắc thật, nhưng theo Duy thức học thì vũ trụ vạn hữu đều là do thức biến hiện, giống như sơn hà đại địa trong cảnh chiêm bao vốn không thật có. Nếu chỉ bày cho chúng sanh thấy rõ vũ trụ vạn hữu do thức biến hiện như thế nào, thì chắc chắn sẽ không còn chấp thật ngã, thật pháp nữa.</p>
      <p>Nói một cách vắn tắt, chủ trương của Duy Thức tông là quy vũ trụ vạn hữu trở về Duy thức tướng, rồi từ Duy thức tướng trở về Duy thức tánh, tức tâm chơn như hay tánh viên giác.</p>
    </section>

    <section id="duy-thuc-hien-tuong-gioi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. THÀNH PHẦN CỦA HIỆN TƯỢNG GIỚI</h3>
      <p>Hiện tượng giới hay vũ trụ vạn hữu, gồm cả tâm và pháp, tuy vô cùng sai biệt nhưng dưới nhãn quan của Duy thức có thể phân thành năm loại lớn, và năm loại ấy lại chia thành một trăm pháp.</p>
      <div class="my-6 rounded-lg border-l-4 border-emerald-400 bg-emerald-50/50 p-5 dark:border-emerald-600 dark:bg-emerald-900/20">
        <p class="mb-2 font-semibold">Năm loại lớn là:</p>
        <ul class="mb-0">
          <li><strong>Tâm vương</strong>: tướng của thức, thuộc tâm giới.</li>
          <li><strong>Tâm sở</strong>: dụng của thức, cũng thuộc tâm giới.</li>
          <li><strong>Sắc pháp</strong>: ảnh tượng của thức, thuộc sắc giới.</li>
          <li><strong>Bất tương ưng hành</strong>: những phận vị sai khác không thuần tâm mà cũng không thuần sắc.</li>
          <li><strong>Vô vi</strong>: tánh của thức, cũng gọi là chơn như.</li>
        </ul>
      </div>
      <p>Bốn loại đầu thuộc về hữu vi, tức tướng có sanh diệt. Loại thứ năm là vô vi, không sanh diệt, không tạo tác, tức thể tánh của các pháp.</p>

      <section id="duy-thuc-tam-vuong">
        <h4 class="text-lg font-semibold">1. Tâm vương</h4>
        <p>Tâm vương gồm có tám món, mỗi món có những đặc tánh, khả năng và nhiệm vụ riêng biệt như mỗi ông vua làm chủ một nước. Tám phần ấy là:</p>
        <ul>
          <li>Nhãn thức</li>
          <li>Nhĩ thức</li>
          <li>Tỹ thức</li>
          <li>Thiệt thức</li>
          <li>Thân thức</li>
          <li>Ý thức</li>
          <li>Mạt-na thức</li>
          <li>A-lại-da thức</li>
        </ul>
        <p>Năm thức đầu tương ứng với năm giác quan bên ngoài nên dễ nhận biết. Ba thức sau thuộc về nội tâm, càng về sau càng ẩn sâu, tế nhị và khó nhận hơn.</p>
        <p><strong>Ý thức</strong> tức thức thứ sáu có hai phạm vi hoạt động. Khi hợp tác với năm thức trước để tiếp xúc với cảnh thì gọi là <strong>ngũ câu ý thức</strong> hay <strong>minh liễu ý thức</strong>. Khi hoạt động một mình, không hợp với năm thức trước, thì gọi là <strong>đơn độc ý thức</strong> hay <strong>độc đầu ý thức</strong>. Thức này có sở trường lanh lợi, tính toán, suy nghĩ, nên trong Duy thức nói: “Công vi thủ, tội vi khôi”. Tuy nhiên nó lại bất thường, có lúc gián đoạn như khi mê man, ngủ say hay nhập vô tưởng định.</p>
        <p>Khi ý thức không hiện hành, theo Duy thức nó nương nơi thức thứ bảy là <strong>Mạt-na thức</strong>. Mạt-na có hai công năng lớn: chấp ngã và làm căn bản cho thức thứ sáu. Nó còn được gọi là <strong>truyền tống thức</strong> vì có tác dụng đem pháp hiện hành bên ngoài truyền vào tạng thức và đem chủng tử từ trong tạng thức tống ra ngoài.</p>
        <p>Ngoài bảy thức ấy còn có <strong>A-lại-da thức</strong>, tức thức thứ tám, vô cùng tế nhị và sâu kín. Tàu dịch là tạng thức, nghĩa là thức tích chứa. Tất cả những danh từ, hình ảnh, kinh nghiệm, chủng tử thiện ác từ vô số đời đều được cất giữ trong thức này như trong một kho vô tận.</p>
        <div class="my-6 rounded-lg border-l-4 border-slate-400 bg-slate-50/50 p-5 dark:border-slate-600 dark:bg-slate-900/20">
          <p class="mb-2 font-semibold">Bài kệ tóm tắt tám thức:</p>
          <p class="mb-2">Nguyên văn:</p>
          <p class="mb-2">Bát cá đệ huynh, nhứt cá si<br />Độc hữu nhứt cá, tối linh tinh<br />Ngũ cá môn tiền tam mãi mại<br />Nhất cá gia trung tác chủ y</p>
          <p class="mb-2">Dịch nghĩa:</p>
          <p class="mb-0">Anh em tám chú một người si (thức thứ bảy)<br />Một mình ý thức rất tinh ranh (thức thứ sáu)<br />Năm chàng ngoài cửa lo buôn bán (năm thức trước)<br />Làm chủ trong nhà, thức lại da (thức thứ tám)</p>
        </div>
      </section>

      <section id="duy-thuc-tam-so">
        <h4 class="text-lg font-semibold">2. Tâm sở</h4>
        <p>Tâm sở là những tánh sở hữu, phụ thuộc của tâm vương, giống như các quan chức dưới quyền sai sử của vua. Tâm sở có tất cả năm mươi mốt pháp, chia làm sáu loại:</p>
        <ul>
          <li><strong>Biến hành tâm sở</strong> gồm 5 pháp: Xúc, Tác ý, Thọ, Tưởng, Tư.</li>
          <li><strong>Biệt cảnh tâm sở</strong> gồm 5 pháp: Dục, Thắng giải, Niệm, Định, Huệ.</li>
          <li><strong>Thiện tâm sở</strong> gồm 11 pháp: Tín, Tàm, Quý, Vô tham, Vô sân, Vô si, Tinh tấn, Khinh an, Bất phóng dật, Hành xả, Bất hại.</li>
          <li><strong>Căn bản phiền não tâm sở</strong> gồm 6 pháp: Tham, Sân, Si, Mạn, Nghi, Ác kiến.</li>
          <li><strong>Tùy phiền não tâm sở</strong> gồm 20 pháp: Phẫn, Hận, Phú, Não, Tật, Xan, Cuống, Siểm, Hại, Kiêu, Vô tàm, Vô quý, Trạo cử, Hôn trầm, Bất tín, Giải đãi, Phóng dật, Thất niệm, Tán loạn, Bất chánh tri.</li>
          <li><strong>Bất định tâm sở</strong> gồm 4 pháp: Hối, Miên, Tầm, Tư.</li>
        </ul>
      </section>

      <section id="duy-thuc-sac-phap">
        <h4 class="text-lg font-semibold">3. Sắc pháp</h4>
        <p>Sắc pháp là những pháp có thể hư nát và có tánh chướng ngại. Sắc pháp là sự phối hợp của năm căn và sáu trần, cộng lại thành mười một pháp:</p>
        <ul>
          <li>Năm căn: Nhãn, Nhĩ, Tỹ, Thiệt, Thân.</li>
          <li>Sáu trần: Sắc, Thanh, Hương, Vị, Xúc và Pháp trần.</li>
        </ul>
      </section>

      <section id="duy-thuc-bat-tuong-ung-hanh">
        <h4 class="text-lg font-semibold">4. Bất tương ưng hành pháp</h4>
        <p>Những pháp này không thuộc hẳn về sắc mà cũng không thuộc hẳn về tâm; nhưng lại không thể rời sắc và tâm mà có. Ví dụ như “đắc” không phải là sắc, cũng không phải là tâm, nhưng nếu nói “được” thì phải có cái được và người được. Loại pháp này gồm tất cả hai mươi bốn pháp như mạng căn, sanh, trụ, dị, diệt, phương, thế, tốc v.v...</p>
      </section>

      <section id="duy-thuc-vo-vi-phap">
        <h4 class="text-lg font-semibold">5. Vô vi pháp</h4>
        <p>Vô vi là pháp không sanh, không diệt, không tạo tác, không thay đổi, xa lìa tướng hư vọng, tức thể tánh của các pháp. Dựa vào sắc tướng và danh tự để hình dung thể tánh ấy, Duy thức nêu sáu pháp vô vi:</p>
        <ul>
          <li><strong>Hư không vô vi</strong>: chỉ thể tánh xa lìa các chướng ngại như hư không.</li>
          <li><strong>Trạch diệt vô vi</strong>: nhờ trí huệ vô lậu lựa chọn đúng đắn mà diệt trừ phiền não, chứng ngộ cứu cánh.</li>
          <li><strong>Phi trạch diệt vô vi</strong>: pháp tánh vốn sẵn thanh tịnh, không phải đợi diệt phiền não mới có.</li>
          <li><strong>Bất động diệt vô vi</strong>: trạng thái không còn lay động bởi sắc tướng khi đã xa lìa phiền não.</li>
          <li><strong>Tưởng thọ diệt vô vi</strong>: trạng thái tịch diệt của tưởng và thọ khi chơn như hiển lộ.</li>
          <li><strong>Chơn như vô vi</strong>: đích danh bản thể chơn như.</li>
        </ul>
        <div class="my-6 rounded-lg border-l-4 border-primary-400 bg-primary-50/50 p-5 dark:border-primary-600 dark:bg-primary-900/20">
          <p class="mb-2 font-semibold">Bài kệ tóm tắt một trăm pháp:</p>
          <p class="mb-2">Nguyên văn:</p>
          <p class="mb-2">Sắc pháp thập nhất, tâm pháp bát<br />Ngũ thập nhất cá tâm sở pháp<br />Nhị thập tứ chủng bất tương ưng<br />Sáu món vô vi, thành trăm pháp</p>
          <p class="mb-0">Dịch nghĩa: Sắc pháp mười một, tâm pháp tám; năm mươi mốt món tâm sở pháp; hai mươi bốn món bất tương ưng; sáu món vô vi, thành trăm pháp.</p>
        </div>
      </section>
    </section>

    <section id="duy-thuc-phuong-phap">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. PHƯƠNG PHÁP TU HÀNH</h3>
      <p>Nhà Duy thức học dạy rằng vũ trụ vạn hữu tuy muôn hình vạn trạng nhưng rốt cuộc đều là thức. Vì vậy, phương pháp tu hành là làm thế nào để chứng ngộ và thể nhập chơn lý ấy. Muốn đạt đến mục đích đó, hành giả phải thực hành năm pháp quán gọi là <strong>Ngũ trùng duy thức quán</strong>:</p>
      <ol>
        <li><strong>Khiển hư tồn thật</strong>: bỏ cái hư giả là vọng chấp ngã, chấp pháp để lưu lại tánh y tha và viên thành.</li>
        <li><strong>Xả lạm lưu thuần</strong>: bỏ phần tướng bị duyên và lưu lại phần kiến là năng duyên; nghĩa là bỏ cảnh để chỉ giữ lại tâm thuần túy.</li>
        <li><strong>Nhiếp mạt quy bổn</strong>: đem ngọn là kiến phần, tướng phần trở về gốc là tự chứng phần.</li>
        <li><strong>Ẩn liệt hiển thắng</strong>: làm ẩn các tâm sở phụ thuộc để hiển lộ tám tâm vương chủ động.</li>
        <li><strong>Khiển tướng chứng tánh</strong>: bỏ sự tướng của thức để trở về lý tánh của thức, tức chứng nhập pháp tánh hay tâm chơn như.</li>
      </ol>
      <p>Ngoài năm lớp quán trên, bài học còn nêu một lối thực tập thiết thực hơn với đại chúng: thường xuyên quan sát và kiểm điểm nội tâm. Hãy đọc kỹ hai loại phiền não tâm sở và thiện tâm sở trong Duy thức, rồi mỗi khi có một tâm niệm hiện lên, phải nhận diện xem đó là thiện hay ác. Điều thiện thì nuôi dưỡng, điều ác thì mau mau dập tắt. Đó là tu tâm và dưỡng tánh.</p>
    </section>

    <section id="duy-thuc-nam-dia-vi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. HÀNH GIẢ PHẢI TRẢI QUA NĂM ĐỊA VỊ TRONG KHI TU DUY THỨC</h3>
      <p>Người tu học Duy thức cũng như kẻ bộ hành, từ lúc khởi ý muốn đi đến khi tới đích phải trải qua năm giai đoạn hay năm địa vị:</p>
      <ol>
        <li><strong>Vị Tư lương</strong>: thời gian chuẩn bị như người sắp đi xa phải sửa soạn lương thực.</li>
        <li><strong>Vị Gia hạnh</strong>: gia công tấn hạnh, chính thức lên đường tu tập.</li>
        <li><strong>Vị Thông đạt</strong>: thông suốt đường lối tu hành, thấy rõ chỗ năng thủ và sở thủ.</li>
        <li><strong>Vị Tu tập</strong>: đang thật sự tu hành luyện tập để chuyển y.</li>
        <li><strong>Vị Cứu cánh</strong>: quả vị rốt ráo của sự tu chứng, tức quả Phật.</li>
      </ol>
      <p>Mỗi địa vị đều được minh họa bằng những câu kệ trong Duy Thức Tam Thập Tụng, từ lúc phát tâm cầu an trụ Duy thức tánh cho đến cảnh giới vô lậu, bất tư nghị, an lạc và giải thoát thân.</p>
    </section>

    <section id="duy-thuc-ket-qua">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII. KẾT QUẢ TU CHỨNG</h3>
      <p>Hành giả khi tu luyện Duy thức sẽ đạt được nhiều thành quả tốt đẹp, tiêu biểu nhất là chuyển tám thức thành bốn trí, rồi quy bốn trí ấy về hai trí.</p>

      <section id="duy-thuc-bon-tri">
        <h4 class="text-lg font-semibold">1. Bốn trí</h4>
        <ul>
          <li><strong>Thành sở tác trí</strong>: năm thức trước chuyển thành trí có công năng rộng lớn để tùy cơ hóa độ chúng sanh.</li>
          <li><strong>Diệu quán sát trí</strong>: thức thứ sáu chuyển thành trí quan sát mầu nhiệm, thấy rõ vô số thế giới và tâm niệm chúng sanh.</li>
          <li><strong>Bình đẳng tánh trí</strong>: thức thứ bảy không còn chấp ngã, thấy mình và người bình đẳng, từ đó khởi tâm từ bi cứu độ.</li>
          <li><strong>Đại viên cảnh trí</strong>: thức thứ tám trở thành như tấm gương lớn sáng sạch, phản chiếu khắp mười phương thế giới.</li>
        </ul>
      </section>

      <section id="duy-thuc-hai-tri">
        <h4 class="text-lg font-semibold">2. Hai trí</h4>
        <p>Bốn trí trên, tuy khác nhau về công năng, nhưng rốt lại có thể quy về hai trí:</p>
        <ul>
          <li><strong>Căn bản trí</strong>: trí thể, cũng gọi là vô phân biệt trí.</li>
          <li><strong>Hậu đắc trí</strong>: trí dụng, cũng gọi là sai biệt trí, phát khởi sau khi chứng quả.</li>
        </ul>
        <p>Tóm lại, thành quả rốt ráo của người học Duy thức là chuyển đổi được tám thức thành bốn trí, rồi viên dung thành căn bản trí và hậu đắc trí, chứng được Duy thức tánh, ngộ nhập chơn tâm và hoàn thành quả Phật.</p>
      </section>
    </section>

    <section id="duy-thuc-loi-ich">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX. LỢI ÍCH THIẾT THỰC TRONG KHI HỌC VÀ TU DUY THỨC</h3>
      <p>Dù kết quả tối hậu có thể cần nhiều kiếp tu hành, nhưng ngay trong hiện tại, việc học Duy thức cũng đem lại nhiều lợi ích cụ thể:</p>
      <ol>
        <li><strong>Biết mình một cách rõ ràng</strong>: Duy thức phân tích nội tâm rất tường tận, giúp ta thấy rõ những tâm niệm xấu để diệt trừ và những đức tính tốt để bồi dưỡng.</li>
        <li><strong>Thấy được “chánh phủ nội tâm”</strong>: bài học ví thức thứ tám như tổng thống, các tâm vương như các nhà lãnh đạo, các tâm sở như cơ cấu hành chánh; nhờ đó ta biết cách điều hòa bộ máy nội tâm.</li>
        <li><strong>Trau dồi tính kiên nhẫn</strong>: muốn học Duy thức đến nơi đến chốn phải nhẫn nại, tỉ mỉ và bền bỉ.</li>
        <li><strong>Giữ được thái độ bình tĩnh tự tại</strong>: thấy các pháp đều do thức biến, không chắc thật, nên bớt kiêu mạn khi thuận cảnh và bớt khổ đau khi nghịch cảnh.</li>
        <li><strong>Nắm vững lòng tin</strong>: càng học càng thấy Phật giáo không dựa trên giáo điều độc đoán mà dựa trên thực nghiệm và sự quán sát nội tâm.</li>
      </ol>
    </section>

    <section id="duy-thuc-ket-luan">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">X. KẾT LUẬN</h3>
      <p>Những điểm chính yếu của Duy thức tông vừa trình bày chỉ là cánh cửa nhập môn. Người muốn nghiên cứu sâu xa cần tìm hiểu kỹ ba bộ sách chính tông là Đại Thừa Bách Pháp Minh Môn Luận, Duy Thức Tam Thập Tụng và Bát Thức Quy Củ Tụng.</p>
      <p>Điều cốt yếu là phải đem giáo lý ấy áp dụng ngay vào đời sống: ngày đêm quan sát, kiểm thảo tâm thức của mình, nhận diện sáu căn bản phiền não và hai mươi tùy phiền não như bọn giặc cướp nội tâm để quyết tâm diệt trừ, đồng thời nuôi dưỡng mười một món thiện tâm sở như những vị anh hùng nghĩa sĩ. Khi tâm niệm xấu đã dứt sạch và đức hạnh tốt đẹp được viên mãn, hành giả sẽ thành tựu Phật quả.</p>
    </section>
  </section>

  <section id="mat-tong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">5. MẬT TÔNG HAY CHƠN NGÔN TÔNG</h2>
    <p>Mật tông thuộc về Đại thừa, lấy Đức Đại Nhật Như Lai tức Tỳ Lô Giá Na làm giáo chủ. Tông này nhấn mạnh đến sự tương ưng giữa thân, khẩu, ý của hành giả với thân, khẩu, ý của Phật qua pháp tu Tam mật.</p>

    <section id="mat-tong-duyen-khoi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. DUYÊN KHỞI LẬP TÔNG</h3>
      <p>Tôn này thờ Đức Đại Nhật Như Lai làm giáo chủ. Ngài Kim Cang Bồ Tát đích thân chịu lễ quán đảnh, kế thừa pháp mầu nhiệm của Đức Đại Nhật Như Lai, vì thế tông này được gọi là Mật tông hay Chơn Ngôn tông, tức lời dạy chơn thật mầu nhiệm và bí mật.</p>
      <p>Dòng truyền thừa được nhắc đến như sau: Ngài Kim Cang Bồ Tát truyền cho Ngài Long Thọ; Long Thọ truyền cho Long Trí; Long Trí truyền cho Ngài Thiện Vô Úy Tam Tạng và Ngài Kim Cang Trí Tam Tạng. Vào đầu đời Đường, hai ngài này sang Trung Hoa để rộng truyền bí pháp Mật tông.</p>
      <p>Ngài Vô Úy truyền cho Ngài Nhất Hạnh Thiền sư; còn Ngài Kim Cang Trí truyền cho Ngài Bất Không Tam Tạng. Ngài Bất Không lại truyền cho Ngài Huệ Quả Hòa thượng; Ngài Huệ Quả truyền cho Ngài Không Hải, vị về sau trở thành Tổ Mật tông ở Nhật Bản.</p>
      <p>Mật tông có nhiều phái, thường được nhắc đến là:</p>
      <ul>
        <li>Mật tông ở Trung Hoa</li>
        <li>Mật tông ở Nhật Bản, thường gọi là Đông Mật</li>
        <li>Mật tông ở Tây Tạng, tức Tạng Mật hay Lạt-ma giáo</li>
      </ul>
      <p>Về kinh điển, tông này nương chủ yếu vào hai bộ kinh lớn là <strong>Đại Nhật</strong> và <strong>Kim Cang Đảnh</strong>. Nếu kể thêm Tô Tất Địa, Du Ký và Yếu Lược Niệm Tụng thì thành ra năm bộ kinh quan trọng của Mật tông.</p>
      <p>Đức Đại Nhật Như Lai hay Tỳ Lô Giá Na không phải là Đức Phật Thích Ca trong cõi Ta-bà, mà chính là <strong>Pháp thân Phật</strong>. Theo Mật tông, Pháp thân này vẫn có thể tuyên thuyết Mật giáo cho các bậc đại Bồ Tát lãnh thọ, tiêu biểu như Ngài Kim Cang Tát Đỏa.</p>
    </section>

    <section id="mat-tong-ton-chi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. TÔN CHỈ VÀ GIÁO LÝ CĂN BẢN</h3>

      <section id="mat-tong-luc-dai">
        <h4 class="text-lg font-semibold">1. Lục đại</h4>
        <p>Mật tông chủ trương <strong>Lục đại</strong> là chơn thật thể của vũ trụ. Lục đại gồm: địa đại, thủy đại, hỏa đại, phong đại, không đại và thức đại.</p>
        <p>Trong sáu đại ấy, năm đại đầu thuộc về vật, còn thức đại thuộc về tâm. Sáu đại dung thông, không ngăn ngại, thâu nhiếp lẫn nhau, làm nhân làm duyên cho nhau mà sinh ra các pháp.</p>
        <p>Lục đại còn bao hàm ba phương diện:</p>
        <ul>
          <li><strong>Thể đại</strong>: bản thể chung của vũ trụ.</li>
          <li><strong>Tướng đại</strong>: hình tướng của sự vật và chúng sanh.</li>
          <li><strong>Dụng đại</strong>: ngôn ngữ, động tác và công dụng của mỗi sự vật.</li>
        </ul>
        <p>Thể, tướng, dụng tuy được phân biệt để dễ quan sát nhưng thực ra không thể rời nhau. Từ đó, Mật tông xác định rằng lý tánh hay chơn như chính là Phật tánh, và Phật tánh ấy sẵn có trong mọi chúng sanh, mọi hình thức tồn tại.</p>
      </section>

      <section id="mat-tong-bon-man-tra-la">
        <h4 class="text-lg font-semibold">2. Bốn Mạn-trà-la</h4>
        <p>Mạn-trà-la nghĩa là tròn đầy, rộng lớn không lường. Bốn pháp Mạn-trà-la hay tứ Mạn tướng đại là bốn tướng rộng lớn đầy đủ của bản thể do sáu đại biến hiện:</p>
        <ul>
          <li><strong>Đại Mạn-trà-la</strong>: về nghĩa hẹp là sắc tướng trang nghiêm của Phật, Bồ Tát thể hiện qua tượng, hình vẽ; về nghĩa rộng là thân tướng của các loài hữu tình và muôn pháp.</li>
          <li><strong>Tam-muội-gia Mạn-trà-la</strong>: về nghĩa hẹp là những vật Phật và Bồ Tát thường cầm như hoa sen, bảo châu, cành dương liễu; về nghĩa rộng là đặc tánh riêng biệt của các pháp.</li>
          <li><strong>Pháp Mạn-trà-la</strong>: về nghĩa hẹp là chủng tử, chơn ngôn, mật chú, danh hiệu của Phật và Bồ Tát; về nghĩa rộng là âm thanh, lời nói, hình ảnh, ký hiệu trong vũ trụ.</li>
          <li><strong>Yết-ma Mạn-trà-la</strong>: về nghĩa hẹp là oai nghi động tác của chư Phật và Bồ Tát để làm các sự nghiệp độ sinh; về nghĩa rộng là mọi cử động và hành vi trong thế giới.</li>
        </ul>
        <p>Bốn Mạn-trà-la đồng thời tồn tại và không lìa nhau: có một thì phải có ba cái kia. Phật, Bồ Tát và chúng sanh đều đầy đủ bốn Mạn ấy.</p>
      </section>
    </section>

    <section id="mat-tong-phuong-phap">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. PHƯƠNG PHÁP TU HÀNH</h3>
      <p>Mật tông có hai phương diện thực hành là <strong>Giáo tướng</strong> và <strong>Sự tướng</strong>. Sự tướng là những thực hành cụ thể như tụng chú, kết ấn, cúng dường, lập đàn. Giáo tướng là những ý nghĩa sâu xa mầu nhiệm rút ra từ các sự tướng ấy. Người tu hành phải học và thực hành cả hai phương diện, không được thiên bỏ bên nào.</p>
      <p>Phương pháp tu hành trọng yếu của Mật tông là <strong>Tam mật</strong>, gồm:</p>
      <ul>
        <li><strong>Thân mật</strong>: tay bắt ấn để thanh tịnh thân nghiệp.</li>
        <li><strong>Ngữ mật</strong> hay khẩu mật: miệng niệm chơn ngôn để thanh tịnh khẩu nghiệp.</li>
        <li><strong>Ý mật</strong>: tâm chuyên vào tam-ma-địa, quán tưởng Đức Đại Nhật Như Lai để thanh tịnh ý nghiệp.</li>
      </ul>
      <p>Sự tu hành Tam mật được chia thành hai giai đoạn:</p>
      <ol>
        <li><strong>Tam mật gia trì</strong>: khi hành giả làm chủ thân, ngữ, ý rồi thì tâm mình cảm ứng, tiếp nhận ánh sáng mầu nhiệm của Đức Đại Nhật Như Lai.</li>
        <li><strong>Tam mật du-già</strong>: khi ánh sáng của Đức Đại Nhật Như Lai và ánh sáng trong tâm hành giả hiệp nhau không sai khác.</li>
      </ol>
      <p>Đến đây, công phu tu hành hữu tướng Tam mật được thành tựu.</p>
    </section>

    <section id="mat-tong-qua-vi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. QUẢ VỊ TU CHỨNG</h3>
      <p>Khi hành giả thành tựu Tam mật hữu tướng, thông suốt ý nghĩa của bốn Mạn-trà-la, thì nhất cử nhất động đều đúng theo oai nghi của Phật và làm lợi ích cho chúng sanh một cách tự nhiên. Đó là vô tướng Tam mật.</p>
      <p>Đến giai đoạn vô tướng Tam mật, mọi hành vi cử động đều là ấn, mọi lời nói đều là chú và chơn ngôn, mọi ý nghĩ đều là diệu quán. Vì thế kinh mới mô tả hạng người ấy rằng: “Mở miệng ra tiếng, chơn ngôn diệt tội; dơ tay động chân, đều thành mật ấn; theo việc khởi niệm, diệu quán tự thành”.</p>
      <p>Đó cũng là ý nghĩa của bốn chữ <strong>tức thân thành Phật</strong>, nghĩa là ngay trong hiện đời thành Phật.</p>
    </section>

    <section id="mat-tong-ket-luan">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. KẾT LUẬN</h3>
      <p>Sự tu hành của Mật tông, đến chỗ rốt ráo, cũng quy về mục đích chung của mọi pháp môn là làm cho ba nghiệp thanh tịnh. Thân ngồi trì chú, tay bắt ấn nên thân không làm điều ác; miệng đọc thần chú nên khẩu không nói lời tội lỗi; tâm quán tưởng chơn ngôn nên ý không nghĩ điều xấu. Ba nghiệp hằng thanh tịnh thì đồng Phật.</p>
      <p>Bài học cũng nhấn mạnh rằng trì chú có nhiều lợi ích tùy pháp môn, nhưng cốt lõi của Mật tông vẫn là sự thanh tịnh thân, khẩu, ý và sự tương ưng với pháp thân Phật qua Tam mật.</p>
    </section>
  </section>

  <section id="thien-thai-tong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">6. PHÁP HOA TÔNG HAY THIÊN THAI TÔNG</h2>
    <p>Thiên Thai tông là một tông phái lớn của Phật giáo phát triển mạnh ở Trung Hoa, nổi bật với pháp quán “Nhứt tâm tam quán”. Tông này làm sáng tỏ giáo lý “chư pháp duy nhứt tâm” qua một hệ thống lý luận tinh vi và thực hành viên dung.</p>

    <section id="thien-thai-duyen-khoi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. DUYÊN KHỞI LẬP TÔNG</h3>
      <p>Thiên Thai tông được khởi xướng từ Bắc Tề. Ngài Huệ Văn Thiền sư dựa vào bộ Trí Độ Luận mà lập ra pháp <strong>Nhứt tâm tam quán</strong>. Pháp này được truyền cho Ngài Nam Nhạc Huệ Tư Thiền sư, rồi truyền cho Ngài Trí Giả ở núi Thiên Thai.</p>
      <p>Ngài Trí Giả là bậc đại sư, y theo kinh Pháp Hoa, bổ túc cho pháp Nhứt tâm tam quán được hoàn bị và lập thành một tôn phái lớn ở núi Thiên Thai, nên gọi là <strong>Thiên Thai tông</strong>, cũng gọi là <strong>Pháp Hoa tông</strong>.</p>
      <p>Đại đệ tử của Ngài Trí Giả là Ngài Chương An Đại sư đã ghi chép lại lời dạy của thầy và kết thành nhiều bộ luận nền tảng như <strong>Pháp Hoa huyền nghĩa</strong>, <strong>Pháp Hoa văn cú</strong>, <strong>Ma Ha chỉ quán</strong>. Các đời sau như Ngài Trí Oai, Huệ Oai, Huyền Minh, Trạm Nhiên tiếp tục hoằng dương tông chỉ ấy.</p>
      <p>Ba bộ sách lớn làm căn bản cho Thiên Thai tông là: Pháp Hoa huyền nghĩa, Pháp Hoa văn cú và Ma Ha chỉ quán. Ngoài ra còn có những bộ như Quán Âm huyền nghĩa, Quán Âm nghĩa sớ, Kim Quang Minh huyền nghĩa, Kim Quang Minh văn cú và Quán kinh sớ.</p>
    </section>

    <section id="thien-thai-ton-chi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. TÔN CHỈ VÀ GIÁO LÝ CĂN BẢN</h3>
      <p>Thiên Thai tông lấy giáo lý “<strong>Chư pháp duy nhứt tâm</strong>” làm nền tảng. Theo tông này, ngoài tâm không có các pháp, ngoài các pháp cũng không có tâm. Tâm là nhất thiết pháp, nhất thiết pháp là tâm. Tâm bao trùm tất cả: tâm là chúng sanh, tâm cũng là Bồ Tát, Phật; sanh tử cũng ở nơi tâm ấy.</p>
      <p>Để thấy được đầy đủ các phương diện tưởng chừng mâu thuẫn của tâm, người quan sát phải đứng trên nhiều khía cạnh:</p>
      <ul>
        <li>Đứng về <strong>chơn đế</strong>, các pháp do nhân duyên sanh nên không có tự tánh, gọi là <strong>Không</strong>.</li>
        <li>Đứng về <strong>tục đế</strong>, các pháp vẫn hiện hữu với muôn hình muôn vẻ, nên gọi là <strong>Giả</strong>.</li>
        <li>Không chấp một bên Không hay Có, mà thấy được sự dung thông của cả hai, đó là <strong>Trung đạo</strong>.</li>
      </ul>
      <p>Vì thế Thiên Thai tông chủ trương <strong>pháp môn tánh cụ</strong>: trong mỗi pháp giới đều có đủ mười pháp giới; trong cõi phàm đã hàm chứa mầm Thánh; trong cõi sanh diệt vô thường vẫn có lý bất sanh bất diệt. Đó là một quan niệm rất lạc quan về khả năng tu chứng của chúng sanh.</p>
    </section>

    <section id="thien-thai-phuong-phap">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. PHƯƠNG PHÁP TU HÀNH</h3>
      <p>Trên mặt thực hành, Thiên Thai tông trước hết nhận định rằng chúng sanh đang bị che phủ bởi vô số mê lầm, gọi là hoặc. Những hoặc ấy có thể phân làm ba loại:</p>

      <section id="thien-thai-ba-hoac">
        <h4 class="text-lg font-semibold">1. Ba loại hoặc</h4>
        <ul>
          <li><strong>Kiến tư hoặc</strong>: mê lầm về lý và sự khiến chúng sanh bị trói buộc trong ba cõi.</li>
          <li><strong>Trần sa hoặc</strong>: những mê lầm nhiều như cát bụi, chỉ có Bồ Tát mới có thể dứt trừ.</li>
          <li><strong>Vô minh hoặc</strong>: mê lầm che lấp thật tướng Trung đạo, sâu xa hơn cả.</li>
        </ul>
      </section>

      <section id="thien-thai-ba-phap-quan">
        <h4 class="text-lg font-semibold">2. Ba pháp quán</h4>
        <p>Để đối trị ba loại hoặc ấy, Thiên Thai tông lập ra ba pháp quán là <strong>Không quán</strong>, <strong>Giả quán</strong> và <strong>Trung quán</strong>. Ba pháp này được rút ra từ bài kệ nổi tiếng trong Trung Luận:</p>
        <div class="my-6 rounded-lg border-l-4 border-primary-400 bg-primary-50/50 p-5 dark:border-primary-600 dark:bg-primary-900/20">
          <p class="mb-2">Nhân duyên sở sanh pháp<br />Ngã thuyết tức thị không<br />Diệc danh vi giả danh<br />Diệc thị trung đạo nghĩa</p>
          <p class="mb-0">Nghĩa là: Các pháp do nhân duyên sanh, nên tánh bản là không, mà cũng là giả danh, đó cũng là nghĩa lý của Trung đạo.</p>
        </div>
        <ul>
          <li><strong>Không quán</strong>: đứng về chơn đế mà quán các pháp là không để dứt trừ kiến tư hoặc.</li>
          <li><strong>Giả quán</strong>: đứng về tục đế mà quán các pháp tuy không mà vẫn giả hiện, từ đó phá được trần sa hoặc.</li>
          <li><strong>Trung quán</strong>: đứng về trung đế mà thấy các pháp tức chơn tức tục, dung thông không ngăn ngại, nhờ đó dứt trừ vô minh hoặc.</li>
        </ul>
      </section>

      <section id="thien-thai-nhat-tam-tam-quan">
        <h4 class="text-lg font-semibold">3. Nhứt tâm tam quán</h4>
        <p>Ba pháp quán có thể thực hành theo nhiều lối: quán theo thứ lớp, quán theo lối thông tướng, hoặc cao nhất là quán theo lối viên dung. Trong pháp quán viên dung này, dùng một tâm mà đồng thời tu cả ba pháp quán. Đó là <strong>nhứt tâm tam quán</strong>.</p>
        <p>Nhờ nhứt tâm tam quán, hành giả có thể nhận rõ cùng lúc ba mặt của thực tại, giống như soi gương mà thấy đồng thời ánh sáng của gương, bóng phản chiếu trong gương, và thể tánh của gương. Từ đó, Thiên Thai tông kết luận rằng Chơn như, Tâm và Vật quan hệ mật thiết như tánh ướt, nước và sóng: không rời nhau, không phải một mà cũng không phải khác.</p>
      </section>
    </section>

    <section id="thien-thai-qua-vi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. QUẢ VỊ TU CHỨNG</h3>
      <p>Do sự khám phá của nhứt tâm tam quán, Thiên Thai tông có quan niệm rất lạc quan về sự tu chứng: ngay trong hiện tiền, nếu hiểu rõ nghĩa lý Trung đạo và khởi công tu luyện thì cũng đã có phần Phật tánh hiện tiền.</p>

      <section id="thien-thai-luc-tuc-phat">
        <h4 class="text-lg font-semibold">1. Lục tức Phật</h4>
        <p>Thiên Thai tông đề xướng học thuyết <strong>Lục tức Phật</strong>, gồm:</p>
        <ul>
          <li><strong>Lý tức Phật</strong>: hết thảy chúng sanh vốn đủ Phật tánh.</li>
          <li><strong>Danh tự tức Phật</strong>: hiểu được lý tánh qua kinh điển, văn tự.</li>
          <li><strong>Quán hạnh tức Phật</strong>: thực hành đúng theo lời Phật dạy.</li>
          <li><strong>Tương tợ tức Phật</strong>: tu hành đến chỗ tâm đã yên, mường tượng như đã chứng được lý tánh.</li>
          <li><strong>Phần chứng tức Phật</strong>: phá được từng phần màn vô minh và chứng được từng phần Trung đạo.</li>
          <li><strong>Cứu cánh tức Phật</strong>: đạt đến bậc Diệu giác viên mãn.</li>
        </ul>
        <p>Về lý, bậc đầu và bậc cuối đều bình đẳng vì cùng chung một Phật tánh. Nhưng về sự, thứ vị vẫn sai khác, nên người tu hành không được sanh tâm tăng thượng mạn.</p>
      </section>

      <section id="thien-thai-ba-tri">
        <h4 class="text-lg font-semibold">2. Ba trí</h4>
        <ul>
          <li><strong>Nhất thiết trí</strong>: rõ biết hết thảy các pháp đều không sanh; do tu Không quán mà thành.</li>
          <li><strong>Đạo chủng trí</strong>: rõ biết các pháp do duyên khởi nên giả có; do tu Giả quán mà thành.</li>
          <li><strong>Nhất thiết chủng trí</strong>: soi rõ Không, Giả, Trung và thông suốt thật tướng; do thành tựu Trung quán mà có.</li>
        </ul>
        <p>Nếu tu theo thứ lớp thì ba trí thành tựu tuần tự. Nếu tu theo nhứt tâm viên quán thì ba trí có thể đồng thời thành tựu.</p>
      </section>

      <section id="thien-thai-ba-duc">
        <h4 class="text-lg font-semibold">3. Ba đức</h4>
        <p>Kết quả tu chứng của Thiên Thai tông không chỉ là ba trí mà còn là ba đức của cảnh giới Niết-bàn:</p>
        <ul>
          <li><strong>Đức Pháp thân</strong>: thể chứng được chơn tướng của vũ trụ.</li>
          <li><strong>Đức Bát-nhã</strong>: trí sáng suốt rõ biết các pháp không sanh không diệt.</li>
          <li><strong>Đức Giải thoát</strong>: lìa bỏ mọi ràng buộc phiền não nghiệp chướng, chứng được tự tại vô ngại.</li>
        </ul>
      </section>
    </section>

    <section id="thien-thai-ket-luan">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. KẾT LUẬN</h3>
      <p>Điểm đặc sắc nhất của Thiên Thai tông là pháp <strong>nhứt tâm tam quán</strong>. Nhờ đó, hành giả nhận rõ ba phương diện của thực tại là Vật, Tâm và Chơn như, ví như sóng, nước và tánh ướt: tam tức nhất, nhất tức tam, dung thông vô ngại.</p>
      <p>Nếu nghiền ngẫm thấu đáo nghĩa lý ấy và đem vào thực hành, hành giả sẽ dần bước vào pháp nhứt tâm tam quán, đồng thời thấy rõ con đường thành Phật không ở đâu xa mà ngay trong tâm mình.</p>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo Duy Thức Tôn, nguyên nhân sâu xa khiến chúng sanh bị luân hồi sanh tử là do sự chấp trước vào hai món nào?",
    options: {
      a: "Năng thủ và sở thủ",
      b: "Thật ngã và thật pháp",
      c: "Hữu vi và vô vi",
      d: "Tâm vương và tâm sở",
    },
    answer: "b",
    explanation: {
      a: "Sai. Năng thủ và sở thủ là hai món tùy miên trong giai đoạn Tư lương mà hành giả chưa chế phục được [1].",
      b: "Đúng. Tất cả chúng sanh từ vô thỉ đến nay vì chấp có thật ngã, thật pháp mà tạo ra các nghiệp, rồi bị dẫn dắt xoay vành mãi theo bánh xe luân hồi [2].",
      c: "Sai. Hữu vi và vô vi là cách phân loại các pháp (có sanh diệt và không sanh diệt) [3].",
      d: "Sai. Tâm vương và tâm sở là những thành phần thuộc về tâm giới trong hiện tượng giới, không phải nguyên nhân trực tiếp gây ra luân hồi [4].",
    },
  },
  {
    question: "Vị Cao tăng nào có công lớn nhất trong việc truyền bá và dịch thuật kinh sách Duy Thức Tôn tại Trung Hoa đời Đường?",
    options: {
      a: "Ngài Thế Thân",
      b: "Ngài Vô Trước",
      c: "Ngài Khuy Cơ",
      d: "Ngài Huyền Trang",
    },
    answer: "d",
    explanation: {
      a: "Sai. Ngài Thế Thân là vị có công lớn nhất phát huy Duy Thức Tôn ở Ấn Độ [5].",
      b: "Sai. Ngài Vô Trước cùng với em là Thế Thân phát triển môn này ở Ấn Độ [6].",
      c: "Sai. Ngài Khuy Cơ là đệ tử của Ngài Huyền Trang, người có công sớ giải thêm nghĩa lý cho rõ ràng [6].",
      d: "Đúng. Ở Trung Hoa đời Đường, vị có công lớn nhất trong việc truyền bá và dịch thuật tinh hoa Duy Thức Tôn là Ngài Huyền Trang [6], [5].",
    },
  },
  {
    question: "Trong tám thức của Duy Thức Tôn, thức nào có công năng chính là 'chấp ngã' và làm căn bản cho Ý thức?",
    options: {
      a: "Thức A-lại-da (Thức thứ tám)",
      b: "Ý thức (Thức thứ sáu)",
      c: "Nhãn thức (Thức thứ nhất)",
      d: "Thức Mạt-na (Thức thứ bảy)",
    },
    answer: "d",
    explanation: {
      a: "Sai. Thức A-lại-da (tạng thức) có công năng tích chứa các chủng tử, hình ảnh như một kho vô tận [7].",
      b: "Sai. Ý thức (thức thứ sáu) có sở trường lanh lợi tính toán nhưng lại có khi bị gián đoạn và bất thường [8], [9].",
      c: "Sai. Nhãn thức (thức thứ nhất) chỉ có công năng nhận biết hình ảnh, màu sắc khi nhìn [10].",
      d: "Đúng. Thức thứ bảy (Mạt-na thức) có hai công năng chính là chấp ngã và làm căn bản cho Ý thức [9], [11].",
    },
  },
  {
    question: "Phép quán nào trong 'Ngũ trùng duy thức quán' dạy hành giả bỏ phần tâm và cảnh đối đãi để chỉ giữ lại phần tâm thuần túy?",
    options: {
      a: "Bỏ cái lộn lạo, lưu lại cái thuần túy (xả lạm lưu thuần)",
      b: "Bỏ thực tướng về thức tánh (khiển tướng chứng tánh)",
      c: "Bỏ cái hư giả, lưu lại cái chơn thật (khiển hư tồn thật)",
      d: "Đem cái ngọn trở về gốc (nhiếp mạt quy bổn)",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Xả lạm lưu thuần' lấy tâm và cảnh đối đãi nhau, mục đích là bỏ cảnh (xả lạm) và chỉ giữ lại tâm (lưu thuần) [12].",
      b: "Sai. 'Khiển tướng chứng tánh' là bỏ sự tướng của thức để trở về với lý tánh của thức [13].",
      c: "Sai. 'Khiển hư tồn thật' là quán ngã pháp là không thật để phá trừ chấp có, lưu lại tánh thật [12].",
      d: "Sai. 'Nhiếp mạt quy bổn' là đem dụng (ngọn) và thể (gốc) đối đãi nhau để dẹp bỏ dụng và giữ thể [12].",
    },
  },
  {
    question: "Mật Tôn chủ trương 'Lục đại' là bản nguyên của vũ trụ. Trong đó, yếu tố nào đại diện cho phần 'tâm'?",
    options: {
      a: "Hỏa đại",
      b: "Thức đại",
      c: "Không đại",
      d: "Địa đại",
    },
    answer: "b",
    explanation: {
      a: "Sai. Hỏa đại là một trong năm đại đầu tiên thuộc về vật [14].",
      b: "Đúng. Trong sáu đại, năm đại đầu thuộc vật, còn đại cuối cùng là 'thức đại' thì thuộc về tâm [14].",
      c: "Sai. Không đại thuộc về phần vật [14].",
      d: "Sai. Địa đại cũng nằm trong nhóm năm đại thuộc về vật [14].",
    },
  },
  {
    question: "Trong phương pháp tu hành 'Tam mật' của Mật Tôn, việc hành giả miệng niệm chơn ngôn được gọi là gì?",
    options: {
      a: "Thân mật",
      b: "Ngữ mật (khẩu mật)",
      c: "Tam mật gia trì",
      d: "Ý mật",
    },
    answer: "b",
    explanation: {
      a: "Sai. Thân mật là khi hành giả dùng tay bắt ấn [15].",
      b: "Đúng. Theo phương pháp Tam mật, hành giả miệng niệm chơn ngôn thì được gọi là ngữ mật [15].",
      c: "Sai. Tam mật gia trì là giai đoạn tâm thủy của hành giả thừa tiếp ánh sáng của Đại Nhật Như Lai rọi vào [16].",
      d: "Sai. Ý mật là khi tâm chuyên chú vào thiền định (tam-ma-địa) [15].",
    },
  },
  {
    question: "Thiên Thai Tôn lập ra ba pháp quán để đối trị với ba loại mê lầm (hoặc). 'Trung quán' được dùng để dứt trừ loại mê lầm nào?",
    options: {
      a: "Biệt hoặc",
      b: "Trần sa hoặc",
      c: "Kiến tư hoặc",
      d: "Vô minh hoặc",
    },
    answer: "d",
    explanation: {
      a: "Sai. Biệt hoặc là tên gọi chung cho những mê lầm giới ngoại (Trần sa hoặc và Vô minh hoặc) mà chỉ có Bồ Tát mới dứt trừ được [17], [18].",
      b: "Sai. Trần sa hoặc được dứt trừ thông qua Giả quán [19].",
      c: "Sai. Kiến tư hoặc được dứt trừ thông qua việc tu tập Không quán [19].",
      d: "Đúng. Trung quán giúp nhận chân rõ các pháp dung thông chơn tục, trừ được vô minh hoặc một cách rốt ráo và cùng tột [19].",
    },
  },
  {
    question: "Khái niệm 'Lý tức Phật' trong hệ thống 'Lục tức Phật' của Thiên Thai Tôn có ý nghĩa gì?",
    options: {
      a: "Đã hiểu rõ nghĩa lý kinh điển qua văn tự và lời dạy.",
      b: "Đã đạt đến quả vị giác ngộ hoàn toàn và viên mãn.",
      c: "Mọi chúng sanh đều có sẵn Phật tánh dù chưa tu hành.",
      d: "Đã phá được một phần trong 41 lớp màn vô minh.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Lãnh hội nghĩa lý vũ trụ qua kinh điển, văn tự gọi là Danh tự tức Phật [20].",
      b: "Sai. Đạt đến quả vị cuối cùng viên mãn, chứng quả cực điểm gọi là Cứu cánh tức Phật [20].",
      c: "Đúng. Lý tức Phật chỉ nghĩa lý chân thật rằng mọi chúng sanh vốn có đủ Phật tánh, không khác gì các đức Như Lai [20].",
      d: "Sai. Tu hành phá được một phần màn vô minh thì gọi là Phần chứng tức Phật [20].",
    },
  },
  {
    question: "Ba trí của Phật theo Thiên Thai Tôn gồm Nhất thiết trí, Đạo chủng trí và Nhất thiết chủng trí. Trí nào giúp rõ biết vạn pháp đều là Trung đạo và thông suốt thật tướng?",
    options: {
      a: "Căn bản trí",
      b: "Đạo chủng trí",
      c: "Nhất thiết trí",
      d: "Nhất thiết chủng trí",
    },
    answer: "d",
    explanation: {
      a: "Sai. Căn bản trí (và Hậu đắc trí) là thuật ngữ thuộc Duy Thức Tôn, không nằm trong ba trí của Thiên Thai Tôn [21], [22].",
      b: "Sai. Đạo chủng trí là trí rõ biết nhất thiết pháp có một cách giả dối do duyên khởi hòa hợp [22].",
      c: "Sai. Nhất thiết trí rõ biết các pháp đều không sanh, phân biệt được danh tướng [22].",
      d: "Đúng. Nhất thiết chủng trí do tu Trung quán sinh ra, soi rõ cả Không - Giả - Trung, biết hết thảy pháp là trung đạo và thông suốt thật tướng [22], [23].",
    },
  },
  {
    question: "Trong giáo lý của Mật Tôn, 'Tam-muội-gia Mạn-trà-la' (nghĩa hẹp) thường chỉ cho những đối tượng nào?",
    options: {
      a: "Các pho tượng Phật và Bồ Tát được chạm trổ.",
      b: "Các vật dụng Phật, Bồ Tát cầm như hoa sen, bảo châu.",
      c: "Các cử động oai nghi và sự nghiệp độ sinh.",
      d: "Các câu thần chú (Mật chú) và danh hiệu Phật.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Pho tượng Phật, Bồ Tát được tô vẽ chạm trổ thuộc về Đại Mạn-trà-la [24].",
      b: "Đúng. Nghĩa hẹp của Tam-muội-gia Mạn-trà-la là chỉ những vật mà Phật và Bồ Tát thường cầm như hoa sen, cành dương liễu, ngọc bửu châu... [24].",
      c: "Sai. Cử động oai nghi và hành động độ sinh thuộc về Yết-ma Mạn-trà-la [24].",
      d: "Sai. Chơn ngôn, mật chú, danh hiệu thuộc về Pháp Mạn-trà-la [24].",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-5-bai-7-duy-thuc-tong-mat-tong-thien-thai-tong',
  slug: 'bai-thu-7-duy-thuc-tong-mat-tong-thien-thai-tong',
  title: 'Bài Thứ 7 - 4. Duy Thức tông (Pháp Tướng tông), 5. Mật tông, 6. Thiên Thai tông',
  type: 'article',
  status: 'published',
  order: 7,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-17',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-7-duy-thuc-tong-mat-tong-thien-thai-tong/infographic.png',
      readingContent,
      tableOfContents: [
        { id: 'duy-thuc-tong', label: '4. Duy Thức tông hay là Pháp Tướng tông' },
        { id: 'duy-thuc-duyen-khoi', label: 'I. Duyên khởi lập tông', indent: 1 },
        { id: 'duy-thuc-dinh-nghia', label: 'II. Định nghĩa', indent: 1 },
        { id: 'duy-thuc-can-cu', label: 'III. Căn cứ kinh luận để lập tông', indent: 1 },
        { id: 'duy-thuc-chu-truong', label: 'IV. Chủ trương của Duy Thức tông', indent: 1 },
        { id: 'duy-thuc-hien-tuong-gioi', label: 'V. Thành phần của hiện tượng giới', indent: 1 },
        { id: 'duy-thuc-tam-vuong', label: '1. Tâm vương', indent: 2 },
        { id: 'duy-thuc-tam-so', label: '2. Tâm sở', indent: 2 },
        { id: 'duy-thuc-sac-phap', label: '3. Sắc pháp', indent: 2 },
        { id: 'duy-thuc-bat-tuong-ung-hanh', label: '4. Bất tương ưng hành pháp', indent: 2 },
        { id: 'duy-thuc-vo-vi-phap', label: '5. Vô vi pháp', indent: 2 },
        { id: 'duy-thuc-phuong-phap', label: 'VI. Phương pháp tu hành', indent: 1 },
        { id: 'duy-thuc-nam-dia-vi', label: 'VII. Năm địa vị tu Duy thức', indent: 1 },
        { id: 'duy-thuc-ket-qua', label: 'VIII. Kết quả tu chứng', indent: 1 },
        { id: 'duy-thuc-loi-ich', label: 'IX. Lợi ích thiết thực', indent: 1 },
        { id: 'duy-thuc-ket-luan', label: 'X. Kết luận', indent: 1 },
        { id: 'mat-tong', label: '5. Mật tông hay Chơn Ngôn tông' },
        { id: 'mat-tong-duyen-khoi', label: 'I. Duyên khởi lập tông', indent: 1 },
        { id: 'mat-tong-ton-chi', label: 'II. Tôn chỉ và giáo lý căn bản', indent: 1 },
        { id: 'mat-tong-luc-dai', label: '1. Lục đại', indent: 2 },
        { id: 'mat-tong-bon-man-tra-la', label: '2. Bốn Mạn-trà-la', indent: 2 },
        { id: 'mat-tong-phuong-phap', label: 'III. Phương pháp tu hành', indent: 1 },
        { id: 'mat-tong-qua-vi', label: 'IV. Quả vị tu chứng', indent: 1 },
        { id: 'mat-tong-ket-luan', label: 'V. Kết luận', indent: 1 },
        { id: 'thien-thai-tong', label: '6. Pháp Hoa tông hay Thiên Thai tông' },
        { id: 'thien-thai-duyen-khoi', label: 'I. Duyên khởi lập tông', indent: 1 },
        { id: 'thien-thai-ton-chi', label: 'II. Tôn chỉ và giáo lý căn bản', indent: 1 },
        { id: 'thien-thai-phuong-phap', label: 'III. Phương pháp tu hành', indent: 1 },
        { id: 'thien-thai-ba-hoac', label: '1. Ba loại hoặc', indent: 2 },
        { id: 'thien-thai-ba-phap-quan', label: '2. Ba pháp quán', indent: 2 },
        { id: 'thien-thai-nhat-tam-tam-quan', label: '3. Nhứt tâm tam quán', indent: 2 },
        { id: 'thien-thai-qua-vi', label: 'IV. Quả vị tu chứng', indent: 1 },
        { id: 'thien-thai-luc-tuc-phat', label: '1. Lục tức Phật', indent: 2 },
        { id: 'thien-thai-ba-tri', label: '2. Ba trí', indent: 2 },
        { id: 'thien-thai-ba-duc', label: '3. Ba đức', indent: 2 },
        { id: 'thien-thai-ket-luan', label: 'V. Kết luận', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-7-duy-thuc-tong-mat-tong-thien-thai-tong/Ba_L%E1%BB%91i_M%E1%BB%99t_Ch%C3%A2n_L%C3%BD.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/8Hk9NU-7m88',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5UYECA7pZoKvL8cYkQjI5E?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Duy Thức tông, Mật tông và Thiên Thai tông',
    passPercentage: 70,
    questions,
  },
}

export default lesson
