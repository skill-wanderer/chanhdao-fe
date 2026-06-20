import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-vien-giac" class="text-2xl font-bold text-primary-700 dark:text-primary-300">XI. CHƯƠNG VIÊN GIÁC</h2>

    <p>Chương này đưa người học từ phần lý sang phần sự. Sau khi Phật đã chỉ rộng nhiều phương tiện để nhập Viên Giác thanh tịnh, Ngài Viên Giác Bồ Tát hỏi thẳng hai việc rất thực tế: nếu chúng sanh đời sau chưa được khai ngộ thì phải an cư tu tập ra sao, và trong ba pháp quán thanh tịnh nên bắt đầu từ pháp nào trước.</p>
    <p>Vì thế, toàn chương không đi xa vào lý luận, mà tập trung vào nề nếp tu trì: lập đạo tràng, sám hối, an cư ba tháng, thái độ trước các cảnh giới phát sinh trong lúc dụng công, và cách thực hành ba pháp Chỉ, Quán, Thiền na cho đúng hướng.</p>

    <h3 id="ngai-vien-giac-bo-tat-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Viên Giác Bồ Tát hỏi Phật</h3>
    <p>Khi ấy Ngài Viên Giác Bồ Tát từ trong đại chúng đứng dậy, đi quanh bên hữu của Phật ba vòng, đảnh lễ rồi quỳ thẳng chắp tay bạch rằng: Phật đã vì đại chúng nói rộng những phương tiện nhập Viên Giác thanh tịnh, khiến chúng sanh đời sau được lợi ích lớn.</p>
    <p>Nhưng Ngài còn hỏi sâu hơn cho người tu thực hành: sau khi Phật nhập diệt, nếu chúng sanh đời sau chưa được khai ngộ thì phải an cư như thế nào để tu tập cảnh giới Viên Giác thanh tịnh này? Và trong ba pháp quán thanh tịnh, phải tu pháp nào trước? Ngài thưa hỏi như vậy ba lần rồi lui về chỗ cũ.</p>
    <h4 id="luoc-giai-ngai-vien-giac-bo-tat-hoi-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Câu hỏi của Ngài gom lại thành hai đầu mối rất rõ: <strong>an cư ra sao</strong> và <strong>tu ba pháp quán thế nào</strong>. Nếu chương Tịnh Chư Nghiệp Chướng chú trọng phá chướng, chương Phổ Giác chú trọng chọn thầy và sửa bệnh, thì đến chương Viên Giác, phần hỏi đáp nghiêng mạnh về cách tổ chức công phu cho hành giả đang thật sự muốn tu.</p>
    <p>Điểm này cũng nhắc người học rằng Viên Giác không phải chuyện hiểu một lần là xong. Cũng như lau gương phải lau nhiều lần mới sạch bụi, người tu phải có công phu liên tục thì tánh sáng mới hiện tròn đầy.</p>

    <h3 id="phat-khen-ngai-vien-giac-bo-tat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Viên Giác Bồ Tát</h3>
    <p>Đức Thế Tôn khen Ngài Viên Giác Bồ Tát rằng: “Hay lắm và quý lắm”. Vì câu hỏi này không chỉ lợi ích cho đại chúng hiện tại, mà còn là một sự bố thí lớn cho chúng sanh đời sau đang cần đường tu rõ ràng. Phật dạy mọi người lắng nghe, vì Ngài sẽ chỉ bày các phương tiện tu hành cụ thể.</p>
    <h4 id="luoc-giai-phat-khen-ngai-vien-giac-bo-tat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật khen vì chỗ hỏi đã chạm đúng nhu cầu của người tu thực tế. Nhiều người không thiếu lý thuyết, mà thiếu cách bắt tay vào công phu. Chương này vì vậy giống như một bản hướng dẫn nhập thất và hành trì, không phải chỉ là phần giải thích giáo nghĩa.</p>

    <h3 id="phat-day-phap-an-cu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật dạy pháp an cư</h3>

    <h4 id="neu-ban-duyen-su-thi-tuy-phan-quan-sat" class="text-lg font-semibold">3.1. Nếu bận duyên sự thì tùy phận quán sát</h4>
    <p>Phật dạy rằng khi Phật còn tại thế, sau khi nhập diệt, hay đến đời mạt pháp, nếu có chúng sanh đủ căn tính Đại thừa, tin tâm Viên Giác của Phật và phát tâm tu hành, nhưng đang bận việc chùa hoặc những duyên sự khác, không thể chuyên nhập đạo tràng, thì vẫn không được bỏ tu. Hành giả phải tùy phận của mình mà tư duy và quán các pháp môn Phật đã dạy trước đó.</p>

    <h4 id="neu-khong-ban-thi-lap-dao-trang-va-dinh-thoi-ky" class="text-lg font-semibold">3.2. Nếu không bận thì lập đạo tràng và định thời kỳ</h4>
    <p>Nếu không bị các duyên khác ràng buộc, hành giả nên lập đạo tràng và chia thời kỳ tu tập. Trường kỳ là 120 ngày, trung kỳ là 100 ngày, đoản kỳ là 80 ngày. Trong tịnh thất phải trang nghiêm bằng tràng phan, hương và hoa để giúp tâm sanh kính trọng và nhiếp niệm.</p>
    <p>Nếu Phật còn tại thế thì hành giả chánh tâm nhớ nghĩ Đức Phật. Nếu Phật đã nhập diệt, thì nên an trí tượng Phật để mắt nhìn, tâm tưởng nhớ và giữ lòng cung kính như đang trực tiếp đối trước Phật.</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 font-semibold">Ba thời kỳ tu tập được nêu rất rõ:</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Trường kỳ</strong>: 120 ngày.</li>
        <li><strong>Trung kỳ</strong>: 100 ngày.</li>
        <li><strong>Đoản kỳ</strong>: 80 ngày.</li>
      </ul>
    </div>
    <h4 id="luoc-giai-phat-day-phap-an-cu" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật dạy hai lối rất cân bằng. Nếu đang gánh việc chùa hoặc duyên sự, người tu không cần ép mình phải nhập thất cho bằng được, nhưng cũng không được bỏ rơi công phu. Còn nếu đủ duyên, thì nên nghiêm túc lập đạo tràng, định thời khóa và dồn sức tu tập.</p>
    <p>Chỗ này cho thấy đạo không tách đời sống ra khỏi thực hành. Quan trọng không phải hình thức gò ép, mà là biết tùy hoàn cảnh để giữ công phu liên tục mà không buông lung.</p>

    <h3 id="phat-day-21-ngay-dau-o-trong-tinh-that" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Phật dạy 21 ngày đầu ở trong tịnh thất</h3>
    <p>Phật dạy trong 21 ngày đầu, hành giả phải chí thành lễ kính danh hiệu chư Phật mười phương và chuyên tâm sám hối. Nếu trong thời gian ấy xuất hiện những điềm lành khiến thân tâm nhẹ nhàng, thư thái, thì đó là dấu hiệu khinh an. Sau 21 ngày đầu, hành giả mới chuyên nhiếp vọng niệm để bước sâu vào công phu.</p>
    <h4 id="luoc-giai-phat-day-21-ngay-dau-o-trong-tinh-that" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Người mới tu thường muốn đi thẳng vào định huệ, nhưng Phật dạy phải bắt đầu bằng sám hối và thanh lọc thân tâm. Cũng như cái chén phải rửa sạch mới đựng được đề hồ, hành giả phải làm sạch nghiệp chướng và thói quen thô trước khi mong vào chỗ an định sâu.</p>
    <p>Những cảnh tốt như chiêm bao thấy Phật hay cảm nhận ánh sáng, nhẹ nhàng chỉ là trợ duyên, không phải cứu cánh. Giá trị chính của 21 ngày đầu là làm cho thân tâm lắng xuống và đủ sức bước vào giai đoạn tu tập nghiêm mật hơn.</p>

    <h3 id="phat-day-an-cu-3-thang-theo-bo-tat-thua" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Phật dạy an cư 3 tháng theo Bồ Tát thừa</h3>

    <h4 id="an-tru-noi-hanh-thanh-tinh-cua-bo-tat" class="text-lg font-semibold">5.1. An trụ nơi hạnh thanh tịnh của Bồ Tát</h4>
    <p>Nếu nhằm đúng mùa an cư ba tháng đầu hạ, hành giả phải an trụ nơi hạnh thanh tịnh của Bồ Tát, tâm lìa tư tưởng Thanh văn và không nương vào đồ chúng. Nghĩa là tuy sống giữa hoàn cảnh tu tập, nhưng tâm phải đặt trên lý tưởng Đại thừa, không co rút vào lối giải thoát riêng mình.</p>

    <h4 id="phat-nguyen-lay-dai-vien-giac-lam-gia-lam" class="text-lg font-semibold">5.2. Phát nguyện lấy Đại Viên Giác làm già lam</h4>
    <p>Đến ngày an cư, hành giả phải đối trước Phật phát nguyện tu theo hạnh tịch diệt của Bồ Tát thừa, an trụ nơi thật tướng, lấy Đại Viên Giác làm già lam, lấy Bình đẳng tánh trí hay tự tánh Niết bàn làm chỗ an cư của thân tâm. Ở đây, đạo tràng không còn bị giới hạn hoàn toàn bởi chỗ ở vật lý, mà được đặt trên nền của lý tánh.</p>
    <blockquote class="rounded-2xl border-l-4 border-secondary-500 bg-secondary-50/70 p-4 dark:bg-secondary-950/30">
      <p class="mb-0">Lấy Đại Viên Giác làm già lam, lấy tự tánh Niết bàn làm chỗ an cư, đó là tinh thần an cư của Bồ Tát thừa.</p>
    </blockquote>

    <h4 id="man-an-cu-thi-ra-vao-vo-ngai" class="text-lg font-semibold">5.3. Mãn an cư thì ra vào vô ngại</h4>
    <p>Hành giả thỉnh mười phương chư Phật và chư Bồ Tát cùng làm pháp an cư trong ba tháng, vì một nhân duyên lớn là tu Bồ Tát hạnh và cầu chứng Vô thượng Diệu giác. Khi mãn ba thời kỳ ấy rồi thì tùy ý ra vào vô ngại. Đây gọi là Bồ Tát thị hiện an cư.</p>
    <h4 id="luoc-giai-phat-day-an-cu-3-thang-theo-bo-tat-thua" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này cho thấy an cư của Bồ Tát thừa vừa có hình thức, vừa có nội dung sâu hơn hình thức. Không phải chỉ ở yên trong một chỗ, mà là lấy Viên Giác làm chùa, lấy thật tướng làm nền, lấy hạnh Đại thừa làm tâm niệm xuyên suốt.</p>
    <p>Phần lược giải trong bản gốc còn nhấn mạnh chỗ chuyển thức thành trí khi hành giả an trụ nơi Viên Giác:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Năm thức trước chuyển thành <strong>Thành sở tác trí</strong>.</li>
      <li>Thức thứ sáu chuyển thành <strong>Diệu quan sát trí</strong>.</li>
      <li>Thức thứ bảy chuyển thành <strong>Bình đẳng tánh trí</strong>.</li>
      <li>Thức thứ tám chuyển thành <strong>Đại viên cảnh trí</strong>.</li>
    </ul>
    <p>Nói gọn, khi không còn chấp ngã và không còn bị cảnh chi phối, chỗ vận hành của tâm thức dần đổi từ mê sang giác. Đây là phần nói rõ chiều sâu của việc “an cư nơi Viên Giác”, chứ không chỉ là giữ chỗ ở cố định.</p>

    <h3 id="khi-thay-thang-canh-cho-nen-chap-truoc" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Khi thấy thắng cảnh, chớ nên chấp trước</h3>
    <p>Phật dạy rằng trong ba thời kỳ tu tập, nếu hành giả thấy những thắng cảnh hiện ra mà không đúng như điều mình đã nghe học từ Phật, từ thiện tri thức hay từ kinh dạy, thì quyết không nên chấp thủ. Dù cảnh ấy có vẻ tốt đẹp, lạ thường hay làm mình vui mừng, vẫn phải giữ sự tỉnh táo.</p>
    <h4 id="luoc-giai-khi-thay-thang-canh-cho-nen-chap-truoc" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đây là lời cảnh tỉnh rất thực tế. Người tu khi dụng công có thể gặp nhiều hiện tượng khác thường, nhưng nếu thấy gì cũng tin, gì cũng nắm, thì rất dễ rơi vào lưới ma. Tiêu chuẩn kiểm chứng không phải cảm giác mạnh hay yếu, mà là có đúng với chánh pháp đã nghe học hay không.</p>
    <p>Nói cách khác, <strong>nghe, hiểu, tu, chứng</strong> phải ăn khớp với nhau. Nếu cái chứng hiện ra đi ngược với điều mình đã học đúng từ Phật pháp, thì càng lạ càng phải dè chừng.</p>

    <h3 id="tu-chi-xa-ma-tha" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Tu Chỉ (Xa ma tha)</h3>

    <h4 id="giu-cho-chi-tinh-khong-khoi-vong-niem" class="text-lg font-semibold">7.1. Giữ chỗ chí tịnh, không khởi vọng niệm</h4>
    <p>Người tu pháp Chỉ trước hết giữ chỗ rất yên lặng, không khởi vọng niệm nhớ nghĩ. Khi sự yên lặng ấy đi đến chỗ sâu, trí giác dần hiện ra. Từ chỗ một thân được lặng, hành giả dần cảm được sự thanh tịnh lan rộng đến cả một thế giới.</p>

    <h4 id="tri-giac-mo-rong-theo-do-sach-cua-tam" class="text-lg font-semibold">7.2. Trí giác mở rộng theo độ sạch của tâm</h4>
    <p>Khi trí giác hiện khắp một thế giới, nếu trong thế giới ấy có một chúng sanh khởi một niệm, hành giả cũng đều biết. Sự biết ấy không phải do suy luận mà do giác tánh đã mở rộng theo mức độ thanh tịnh của tâm. Nhưng ngay tại đây, Phật vẫn nhắc: nếu cảnh giới ấy không đúng với chỗ nghe học chân chính, thì không được chấp thủ.</p>
    <h4 id="luoc-giai-tu-chi-xa-ma-tha" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Pháp Chỉ lấy sự lặng làm nền. Khi vọng niệm lắng, huệ giác mới có chỗ phát ra. Bản gốc diễn tả rất mạnh: toàn thế giới như nằm trong giác tánh của hành giả, nên niệm khởi ở đâu cũng có thể biết.</p>
    <p>Dù vậy, điều quan trọng hơn cả thần kỳ của cảnh giới là sự không chấp trước. Phật không dạy người tu chạy theo cái biết rộng lớn, mà dạy dùng nó như dấu hiệu để tiếp tục giữ chánh niệm và tránh rơi vào tà cảnh.</p>

    <h3 id="tu-quan-tam-ma-bat-de" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">8. Tu Quán (Tam ma bát đề)</h3>

    <h4 id="nho-tuong-chu-phat-va-bo-tat" class="text-lg font-semibold">8.1. Nhớ tưởng chư Phật và Bồ Tát</h4>
    <p>Người tu pháp Quán trước hết phải nhớ tưởng mười phương chư Phật và các vị Bồ Tát, rồi y theo các pháp môn Phật đã dạy mà siêng năng tuần tự tu hành. Công phu này không nóng vội, mà đi bằng sức quán chiếu, ghi nhớ và huân tập liên tục.</p>

    <h4 id="phat-nguyen-rong-lon-huan-tap-thanh-chung-tu" class="text-lg font-semibold">8.2. Phát nguyện rộng lớn, huân tập thành chủng tử</h4>
    <p>Trong lúc tu Quán, hành giả thành tựu tam muội và phát nguyện rộng lớn để huân tập thành chủng tử lành. Nếu có cảnh giới gì hiện ra mà trái với sự nghe học đúng pháp, cũng không nên chấp thủ.</p>
    <h4 id="luoc-giai-tu-quan-tam-ma-bat-de" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Pháp Quán nhấn mạnh phần chiếu soi và phát nguyện. Không chỉ nhìn các pháp bằng trí, mà còn lấy đại nguyện làm sức đẩy cho công phu. Điều này giúp người tu không rơi vào khô cứng, chỉ chăm phần yên lặng mà thiếu sức sống của tâm Bồ Tát.</p>
    <p>Tuy là pháp Quán, nguyên tắc vẫn không đổi: cảnh nào trái chánh pháp thì không nhận bừa. Huệ phải đi cùng chánh kiến thì mới không bị lạc.</p>

    <h3 id="chi-quan-song-tu-thien-na" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">9. Chỉ quán song tu (Thiền na)</h3>

    <h4 id="bat-dau-tu-phap-so-tuc" class="text-lg font-semibold">9.1. Bắt đầu từ pháp sổ tức</h4>
    <p>Nếu muốn tu Thiền na, hành giả trước hết phải dùng pháp sổ tức, tức đếm hơi thở. Nhờ điều hòa hơi thở mà tâm được yên, và nhờ tâm yên mà khả năng quán sát các niệm trở nên sáng rõ.</p>

    <h4 id="thay-ro-niem-sanh-tru-di-diet" class="text-lg font-semibold">9.2. Thấy rõ niệm sanh, trụ, dị, diệt</h4>
    <p>Khi công phu tiến lên, hành giả biết rõ từng niệm lúc sanh, trụ, dị, diệt, phân biệt được ranh giới và số lượng của chúng, không chỉ trong lúc tĩnh tọa mà cả trong bốn oai nghi đi, đứng, nằm, ngồi. Cái biết ấy trở nên rõ ràng như mắt thấy sự vật. Nếu khi tu có cảnh gì không đúng với chỗ nghe học, vẫn không được chấp thủ.</p>
    <h4 id="luoc-giai-chi-quan-song-tu-thien-na" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Thiền na là chỗ Chỉ và Quán đi chung. Sổ tức giúp tâm lặng, còn sự nhận biết sanh trụ dị diệt của từng niệm là phần quán. Nhờ vậy hành giả không rơi vào chỉ an tĩnh mà mờ mịt, cũng không rơi vào chỉ quan sát mà tâm tán loạn.</p>
    <p>Đây cũng là phần trả lời trực tiếp câu hỏi “nên tu pháp nào trước”. Theo mạch giải thích trong bản gốc: trước tu Chỉ, kế tu Quán, sau tu Chỉ Quán song tu.</p>

    <h3 id="tom-tat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">10. Tóm tắt</h3>
    <p>Phật kết lại rằng nếu chúng sanh đời mạt pháp muốn cầu đạo mà vì nghiệp chướng nặng, căn tánh ám độn nên tu khó thành, thì phải siêng năng sám hối, thường mong đoạn trừ các phiền não như thương ghét, tật đố, dối nịnh và luôn cầu quả vị cao thượng.</p>
    <p>Đối với ba pháp quán thanh tịnh này, hành giả có thể tùy sức mà tu một pháp. Nếu pháp này chưa thành tựu thì đổi sang pháp khác, nhưng điều cốt yếu là chớ thối tâm buông bỏ.</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li>Siêng sám hối khi nghiệp chướng nặng.</li>
        <li>Nhắm thẳng vào việc đoạn trừ phiền não.</li>
        <li>Tùy căn cơ mà chọn một trong ba pháp quán.</li>
        <li>Nếu chưa thành thì đổi pháp, nhưng không được buông công phu.</li>
      </ul>
    </div>
    <h4 id="luoc-giai-tom-tat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn tóm tắt rất thực tế và giàu tính khích lệ. Phật không đòi người căn cơ chậm phải làm giống người căn cơ bén, nhưng cũng không cho phép lấy căn cơ chậm làm lý do để bỏ cuộc. Chưa thành ở cửa này thì chuyển sang cửa khác, miễn là tiếp tục bước tới.</p>

    <h3 id="phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">11. Phật nói bài kệ tóm lại các nghĩa trên</h3>
    <p>Đức Thế Tôn dùng bài kệ để gom toàn bộ ý chính của chương: phải lập thời kỳ tu tập, 21 ngày đầu sám hối, về sau chánh niệm công phu; nếu thấy cảnh trái chỗ nghe thì không chấp; ba pháp Chỉ, Quán và Thiền na là ba cửa thanh tịnh để người cầu đạo nương vào.</p>
    <div class="space-y-1 italic">
      <p>Viên Giác! ông nên biết:</p>
      <p>Tất cả các chúng sanh</p>
      <p>Muốn cầu đạo vô thượng,</p>
      <p>Phải lập ba thời kỳ:</p>
      <p>Hai mươi mốt ngày đầu</p>
      <p>Sám hối nghiệp vô thỉ,</p>
      <p>Vậy sau chánh suy nghĩ;</p>
      <p>Nếu phi cảnh đã nghe,</p>
      <p>Thì chẳng nên chấp thủ.</p>
      <p>Pháp “Chỉ” rất tịch tịnh,</p>
      <p>Pháp “Quán” chánh nhớ nghĩ,</p>
      <p>Thiền na rõ đếm hơi,</p>
      <p>Thế gọi là tịnh quán.</p>
      <p>Người siêng năng tu tập,</p>
      <p>Thế gọi Phật hiện thế.</p>
      <p>Kẻ độn căn chẳng thành,</p>
      <p>Thì phải siêng sám hối</p>
      <p>Các tội từ vô thỉ.</p>
      <p>Các tội chướng tiêu rồi,</p>
      <p>Cảnh Phật liền hiện trước.</p>
    </div>
    <h4 id="luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bài kệ chốt lại ba điều: phải có khuôn phép tu tập, phải giữ chánh kiến trước mọi cảnh giới, và phải bền chí với ba cửa công phu thanh tịnh. Nếu căn cơ chậm, đường thoát không phải bỏ cuộc mà là quay lại sám hối cho sạch chướng rồi tiếp tục đi.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong chương Viên Giác, nếu một hành giả có duyên sự bận rộn tại chùa không thể chuyên tu tập, Đức Phật dạy họ nên làm gì?',
    options: {
      a: 'Phải từ bỏ mọi duyên sự để nhập thất ngay lập tức.',
      b: 'Tùy phận mà tư duy và quán các pháp môn đã được dạy trước đó.',
      c: 'Tạm ngưng việc tu tập cho đến khi hoàn thành hết các Phật sự.',
      d: 'Chỉ tập trung vào việc tụng kinh và niệm danh hiệu Phật.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phật không dạy hành giả phải bỏ hết duyên sự rồi mới tu.',
      b: 'Đúng. Nếu bận việc chùa hoặc các duyên khác, hành giả vẫn phải tùy phận tư duy và quán các pháp môn Phật đã dạy trước.',
      c: 'Sai. Bận việc không có nghĩa là ngưng hẳn công phu.',
      d: 'Sai. Trọng tâm ở đây là tiếp tục quán sát và hành trì, không chỉ làm một việc riêng lẻ.',
    },
  },
  {
    question: "Theo văn bản, thời gian dành cho một kỳ tu tập 'Trường kỳ' là bao nhiêu ngày?",
    options: {
      a: '120 ngày.',
      b: '90 ngày.',
      c: '80 ngày.',
      d: '100 ngày.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Phật nêu rõ trường kỳ là 120 ngày.',
      b: 'Sai. Văn bản không nêu 90 ngày là một thời kỳ tu tập ở đây.',
      c: 'Sai. 80 ngày là đoản kỳ.',
      d: 'Sai. 100 ngày là trung kỳ.',
    },
  },
  {
    question: 'Mục đích quan trọng nhất của việc trải qua 21 ngày đầu sám hối trong tịnh thất là gì?',
    options: {
      a: 'Để cầu mong các đức Phật ban cho thần thông.',
      b: 'Để được chiêm bao thấy các điềm lành và hào quang.',
      c: 'Để ghi nhớ hết danh hiệu của các đức Phật mười phương.',
      d: 'Làm sạch thân tâm để có năng lực tu tập định huệ.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Phật không dạy sám hối để cầu thần thông.',
      b: 'Sai. Những điềm lành nếu có chỉ là trợ duyên, không phải mục đích chính.',
      c: 'Sai. Lạy danh hiệu Phật là phương tiện sám hối, không phải mục tiêu ghi nhớ.',
      d: 'Đúng. 21 ngày đầu nhằm làm sạch thân tâm để hành giả đủ sức đi vào định và huệ.',
    },
  },
  {
    question: "Hành giả tu theo Bồ tát thừa khi an cư phải phát nguyện lấy điều gì làm 'Già lam' (chùa)?",
    options: {
      a: 'Lấy những ngôi chùa hẻo lánh làm già lam.',
      b: 'Lấy Đại Viên Giác làm già lam.',
      c: 'Lấy thân thể của mình làm già lam.',
      d: 'Lấy mười phương thế giới làm già lam.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đó không phải tinh thần an cư được nhấn mạnh trong đoạn này.',
      b: 'Đúng. Hành giả Bồ Tát thừa phát nguyện lấy Đại Viên Giác làm già lam.',
      c: 'Sai. Bản văn không dạy lấy thân thể vật lý làm chùa.',
      d: 'Sai. Ở đây trọng tâm là lấy lý tánh Viên Giác làm chỗ an cư.',
    },
  },
  {
    question: 'Khi hành giả an trụ nơi Viên Giác, Thức thứ 7 (Mạt-na thức) sẽ chuyển hóa thành loại trí tuệ nào?',
    options: {
      a: 'Diệu quan sát trí.',
      b: 'Thành sở tác trí.',
      c: 'Bình đẳng tánh trí.',
      d: 'Đại viên cảnh trí.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Diệu quan sát trí tương ưng với thức thứ sáu.',
      b: 'Sai. Thành sở tác trí là chỗ chuyển của năm thức trước.',
      c: 'Đúng. Khi an trụ nơi Viên Giác, thức thứ bảy chuyển thành Bình đẳng tánh trí.',
      d: 'Sai. Đại viên cảnh trí tương ưng với thức thứ tám.',
    },
  },
  {
    question: 'Theo lời Phật dạy, hành giả nên xử lý như thế nào khi thấy “thắng cảnh” hiện ra trong lúc tu hành?',
    options: {
      a: 'Nên tìm cách chia sẻ cảnh giới đó cho người khác biết.',
      b: 'Phải ngay lập tức xả bỏ tất cả các cảnh giới dù thiện hay ác.',
      c: 'Nên vui mừng và cố gắng duy trì cảnh giới đó.',
      d: 'Quyết chẳng nên chấp thủ nếu không đúng như sự nghe học.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Phật không khuyên hành giả chạy theo hay khoe khoang cảnh giới.',
      b: 'Sai. Điều quan trọng là phân biệt đúng sai theo chánh pháp, không phải phủ nhận mù quáng mọi thứ.',
      c: 'Sai. Vui mừng chấp trước rất dễ khiến hành giả mắc lưới ma.',
      d: 'Đúng. Nếu cảnh giới không đúng như chỗ nghe học chân chính thì tuyệt đối không nên chấp thủ.',
    },
  },
  {
    question: 'Đặc điểm cốt lõi của pháp tu “Chỉ” (Xa ma tha) được mô tả trong văn bản là gì?',
    options: {
      a: 'Giữ chỗ chí tịnh và không khởi vọng niệm.',
      b: 'Phân biệt ranh giới giữa các niệm sinh diệt.',
      c: 'Quán tưởng mười phương chư Phật.',
      d: 'Theo dõi và đếm số lượng hơi thở.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Pháp Chỉ bắt đầu ở chỗ giữ tâm rất yên lặng và không khởi vọng niệm.',
      b: 'Sai. Đó gần với phần quán sát trong Thiền na.',
      c: 'Sai. Nhớ tưởng chư Phật là trọng điểm của pháp Quán.',
      d: 'Sai. Đếm hơi thở là phương tiện mở đầu cho Thiền na.',
    },
  },
  {
    question: 'Trong pháp tu Thiền na (Chỉ Quán song tu), hành giả sử dụng phương tiện gì để điều hòa tâm trí lúc bắt đầu?',
    options: {
      a: 'Phát đại nguyện rộng lớn.',
      b: 'Pháp sổ tức (đếm hơi thở).',
      c: 'Trì tụng các bài kệ tóm tắt.',
      d: 'Lễ bái danh hiệu Phật.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phát đại nguyện là một phần quan trọng của pháp Quán, không phải bước mở đầu ở đây.',
      b: 'Đúng. Thiền na mở đầu bằng pháp sổ tức để điều hòa hơi thở và giúp tâm lắng lại.',
      c: 'Sai. Bài kệ là phần tóm lược, không phải phương tiện chính để bắt đầu Thiền na.',
      d: 'Sai. Lễ bái danh hiệu Phật thuộc 21 ngày đầu sám hối trong tịnh thất.',
    },
  },
  {
    question: 'Đối với những chúng sanh nghiệp chướng nặng nề, căn tánh ám độn tu hành khó thành, Phật khuyên họ điều gì?',
    options: {
      a: 'Chỉ cần làm việc thiện tích đức là đủ.',
      b: 'Nên chuyển sang tu các pháp môn tiểu thừa cho nhẹ nhàng.',
      c: 'Phải siêng năng sám hối và lần hồi cầu chứng, chớ thối tâm.',
      d: 'Hãy chờ đợi một vị thiện tri thức đến cứu giúp.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Làm việc thiện thôi chưa đủ để giải quyết nghiệp chướng và căn cơ ám độn.',
      b: 'Sai. Phật không dạy hành giả thoái lui sang đường tu khác vì nản chí.',
      c: 'Đúng. Người căn chậm phải siêng sám hối, đổi pháp nếu cần và tiếp tục cầu chứng, không được bỏ cuộc.',
      d: 'Sai. Thiện tri thức quan trọng, nhưng bản thân hành giả vẫn phải tự nỗ lực công phu.',
    },
  },
  {
    question: 'Khái niệm “Thật tướng” trong văn bản được giải thích tương đương với tên gọi nào sau đây?',
    options: {
      a: 'Viên Giác.',
      b: 'Tướng của các vị Bồ tát.',
      c: 'Thế giới cực lạc.',
      d: 'Cõi trời phi tưởng.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Thật tướng ở đây chính là tên gọi khác của chân như hay Viên Giác.',
      b: 'Sai. Thật tướng không phải hình tướng bên ngoài của các vị Bồ Tát.',
      c: 'Sai. Đó không phải tên của một cõi giới riêng biệt.',
      d: 'Sai. Khái niệm này không liên hệ đến cõi trời phi tưởng.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-11-chuong-vien-giac',
  slug: 'bai-thu-11-chuong-vien-giac',
  title: 'Bài Thứ 11 - Chương Viên Giác',
  type: 'article',
  status: 'published',
  order: 14,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-11-chuong-vien-giac/C%E1%BA%A9m_nang_tu_t%E1%BA%ADp_Vi%C3%AAn_Gi%C3%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-vien-giac', label: 'XI. CHƯƠNG VIÊN GIÁC' },
        { id: 'ngai-vien-giac-bo-tat-hoi-phat', label: '1. Ngài Viên Giác Bồ Tát hỏi Phật', indent: 1 },
        { id: 'luoc-giai-ngai-vien-giac-bo-tat-hoi-phat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-khen-ngai-vien-giac-bo-tat', label: '2. Phật khen Ngài Viên Giác Bồ Tát', indent: 1 },
        { id: 'luoc-giai-phat-khen-ngai-vien-giac-bo-tat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-day-phap-an-cu', label: '3. Phật dạy pháp an cư', indent: 1 },
        { id: 'neu-ban-duyen-su-thi-tuy-phan-quan-sat', label: '3.1. Nếu bận duyên sự thì tùy phận quán sát', indent: 2 },
        { id: 'neu-khong-ban-thi-lap-dao-trang-va-dinh-thoi-ky', label: '3.2. Nếu không bận thì lập đạo tràng và định thời kỳ', indent: 2 },
        { id: 'luoc-giai-phat-day-phap-an-cu', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-day-21-ngay-dau-o-trong-tinh-that', label: '4. Phật dạy 21 ngày đầu ở trong tịnh thất', indent: 1 },
        { id: 'luoc-giai-phat-day-21-ngay-dau-o-trong-tinh-that', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-day-an-cu-3-thang-theo-bo-tat-thua', label: '5. Phật dạy an cư 3 tháng theo Bồ Tát thừa', indent: 1 },
        { id: 'an-tru-noi-hanh-thanh-tinh-cua-bo-tat', label: '5.1. An trụ nơi hạnh thanh tịnh của Bồ Tát', indent: 2 },
        { id: 'phat-nguyen-lay-dai-vien-giac-lam-gia-lam', label: '5.2. Phát nguyện lấy Đại Viên Giác làm già lam', indent: 2 },
        { id: 'man-an-cu-thi-ra-vao-vo-ngai', label: '5.3. Mãn an cư thì ra vào vô ngại', indent: 2 },
        { id: 'luoc-giai-phat-day-an-cu-3-thang-theo-bo-tat-thua', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'khi-thay-thang-canh-cho-nen-chap-truoc', label: '6. Khi thấy thắng cảnh, chớ nên chấp trước', indent: 1 },
        { id: 'luoc-giai-khi-thay-thang-canh-cho-nen-chap-truoc', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'tu-chi-xa-ma-tha', label: '7. Tu Chỉ (Xa ma tha)', indent: 1 },
        { id: 'giu-cho-chi-tinh-khong-khoi-vong-niem', label: '7.1. Giữ chỗ chí tịnh, không khởi vọng niệm', indent: 2 },
        { id: 'tri-giac-mo-rong-theo-do-sach-cua-tam', label: '7.2. Trí giác mở rộng theo độ sạch của tâm', indent: 2 },
        { id: 'luoc-giai-tu-chi-xa-ma-tha', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'tu-quan-tam-ma-bat-de', label: '8. Tu Quán (Tam ma bát đề)', indent: 1 },
        { id: 'nho-tuong-chu-phat-va-bo-tat', label: '8.1. Nhớ tưởng chư Phật và Bồ Tát', indent: 2 },
        { id: 'phat-nguyen-rong-lon-huan-tap-thanh-chung-tu', label: '8.2. Phát nguyện rộng lớn, huân tập thành chủng tử', indent: 2 },
        { id: 'luoc-giai-tu-quan-tam-ma-bat-de', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'chi-quan-song-tu-thien-na', label: '9. Chỉ quán song tu (Thiền na)', indent: 1 },
        { id: 'bat-dau-tu-phap-so-tuc', label: '9.1. Bắt đầu từ pháp sổ tức', indent: 2 },
        { id: 'thay-ro-niem-sanh-tru-di-diet', label: '9.2. Thấy rõ niệm sanh, trụ, dị, diệt', indent: 2 },
        { id: 'luoc-giai-chi-quan-song-tu-thien-na', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'tom-tat', label: '10. Tóm tắt', indent: 1 },
        { id: 'luoc-giai-tom-tat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: '11. Phật nói bài kệ tóm lại các nghĩa trên', indent: 1 },
        { id: 'luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: 'LƯỢC GIẢI', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-11-chuong-vien-giac/The_Mirror_of_Perfect_Enlightenment.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/OHeA5IQFrL0',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/1H1JRQdsg7OlP7R96GaHRI?utm_source=generator&si=7efc9effdf564afc',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Viên Giác',
    passPercentage: 70,
    questions,
  },
}

export default lesson
