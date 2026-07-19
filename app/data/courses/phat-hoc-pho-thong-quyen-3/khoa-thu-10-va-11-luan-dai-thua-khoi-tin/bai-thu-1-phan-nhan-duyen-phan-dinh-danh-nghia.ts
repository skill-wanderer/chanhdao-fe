import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">CHƯƠNG THỨ NHẤT</p>
      <h2 id="phan-nhan-duyen" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">PHẦN NHÂN DUYÊN</h2>
      <ul class="mb-0 list-disc space-y-1 pl-6">
        <li>Nguyên nhân tạo luận.</li>
        <li>Giải thích tên Luận Đại Thừa Khởi Tín.</li>
        <li>Nội dung của Luận này.</li>
        <li>Ngài Mã Minh Bồ Tát tạo luận: Lý lịch và tên; Nguyên nhân ngộ đạo.</li>
        <li>Ngài Chân Đế dịch luận.</li>
        <li>Lời nguyện cầu.</li>
      </ul>
    </div>

    <h3 id="nguyen-nhan-tao-luan" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">NGUYÊN NHÂN TẠO LUẬN NÀY</h3>
    <p>Trong khoảng 600 năm sau khi Phật nhập diệt, tại Ấn Độ, phần thì phái Tiểu thừa nổi lên tranh chấp, không tin lý Đại thừa, phần thì ngoại đạo lập các tà thuyết phá hoại chánh pháp; tình trạng Phật giáo rất đen tối.</p>
    <p>Ngài Mã Minh Bồ Tát trông thấy tình trạng ấy rất đau lòng, nên tạo ra luận này để xô tà đỡ chánh: trừ những nghi ngờ của Tiểu thừa, phá các tà thuyết của ngoại đạo, làm cho người phát khởi lòng tin Đại thừa.</p>

    <h3 id="giai-thich-ten-luan" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">GIẢI THÍCH TÊN LUẬN ĐẠI THỪA KHỞI TÍN</h3>
    <p><strong>Luận.</strong> Luận là luận bàn lẽ tà chánh, quyết đoán điều nghi ngờ và lựa chọn những việc phải quấy.</p>
    <p><strong>Đại thừa.</strong> Chữ "Đại" là lớn, chữ "Thừa" là cưỡi. Đọc chữ "Thặng" nghĩa là cái xe. Theo đây phải đọc là "Thặng" mới đúng, song vì theo thói quen nên đọc là "Thừa".</p>
    <p>Đại thừa có 5 nghĩa:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Vì đối với Tiểu nên gọi là Đại.</li>
      <li>Quả Phật rộng lớn, thừa này sẽ đi đến quả Phật, nên gọi là Đại thừa.</li>
      <li>Chư Phật là bậc Đại nhân, song chẳng rời thừa này, nên gọi là Đại thừa.</li>
      <li>Các Bồ Tát là bậc Đại sĩ, đều y theo thừa này mà tu tập, nên gọi là Đại thừa.</li>
      <li>Vì thừa này rất rộng lớn, cứu độ chúng sinh đông nhiều nên gọi là Đại thừa.</li>
    </ol>

    <h3 id="luan-lay-gi-lam-dai-thua" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">LUẬN NÀY LẤY GÌ LÀM ĐẠI THỪA?</h3>
    <p>Luận này lấy tâm chúng sinh làm Đại thừa. Bởi tâm chúng sinh: Thể nó lớn, Tướng nó to, Dụng nó đại, bao trùm tất cả các pháp thế gian và xuất thế gian, nên gọi là Đại thừa.</p>
    <p>Trọng tâm của luận này là nói: Thể, Tướng và Dụng của tâm chúng sinh. Vì tâm này là "Tổng tướng" (Tướng chung) của tất cả thánh phàm, mê ngộ, nhân quả... cho nên trong luận này cũng gọi là "Đại Tổng tướng pháp môn thể".</p>
    <p>Tâm này có nghĩa "vận tải": Các Đức Phật đều nương tâm này mà chứng Bồ Đề, Niết bàn. Bồ Tát nương tâm này mà rộng tu muôn hạnh: trên cầu quả Phật, dưới hóa độ chúng sinh. Chúng sinh cũng do tâm này mà trôi lăn trong dòng sinh tử luân hồi. Vì thế nên gọi tâm này là Đại thừa.</p>
    <p>Do ngộ lý này, nên cổ nhân có làm bài kệ:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">Dịch âm</p>
      <div class="mb-3 space-y-1 italic">
        <p>Tam điểm như tinh tượng</p>
        <p>Hoành câu tợ nguyệt tà</p>
        <p>Phi mao tùng thử đắc</p>
        <p>Tổ Phật giả do tha.</p>
      </div>
      <p class="mb-1 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">Dịch nghĩa</p>
      <div class="mb-0 space-y-1 italic">
        <p>Ba chấm như ngôi sao</p>
        <p>Uốn cong tợ trăng tà</p>
        <p>Chúng sinh từ đâu có</p>
        <p>Chư Phật cũng do đây.</p>
      </div>
    </div>
    <p><strong>Khởi tín.</strong> Luận này làm cho người phát khởi lòng tin Đại thừa, nên gọi là "Đại thừa khởi tín". Đáng lẽ phải nói: "Khởi Đại thừa tín", nghĩa là khởi lòng tin Đại thừa; song vì chúng sinh sau khi thấu rõ Đại thừa rồi mới phát khởi lòng tin, nên gọi "Đại thừa khởi tín".</p>

    <h3 id="noi-dung-cua-luan-nay" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">NỘI DUNG CỦA LUẬN NÀY</h3>
    <p>Ngài Mã Minh Bồ Tát căn cứ theo kinh Lăng Già, kinh Tư Ích và các kinh Đại thừa mà tạo ra luận này. Nội dung của luận này là phát minh lý Duy tâm hay Duy thức đem về nhất tâm, vạch rõ nguồn gốc mê ngộ, chỉ bày đường tắt tu hành, tóm các nghĩa lý sâu rộng của Phật nói, làm cho người phát khởi lòng tin Đại thừa.</p>

    <h3 id="ngai-ma-minh-bo-tat" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">NGÀI MÃ MINH BỒ TÁT</h3>

    <h4 id="ly-lich-va-ten" class="mt-6 text-lg font-semibold">Lý lịch và tên</h4>
    <p>Ngài Mã Minh Bồ Tát, người xứ Ba La Nại, phía tây Thiên Trúc (Ấn Độ). Ngài là Tổ thứ 12 ở Thiên Trúc, nối ngôi của Tổ thứ 11 là Phú Na Dạ Xa Tôn giả.</p>
    <p>Vì có 3 nguyên nhân, nên gọi Ngài là Mã Minh:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Khi Ngài vừa sinh ra, thì các con ngựa trong xứ ấy đều buồn mà kêu to lên.</li>
      <li>Ngài đàn rất hay, mỗi khi Ngài đàn thì những con ngựa được nghe tiếng đàn đều buồn mà kêu lên.</li>
      <li>Khi thuyết pháp, các con ngựa nghe đến tiếng Ngài đều rơi nước mắt kêu to lên và không ăn. Mặc dù người ta thử bỏ đói chúng vài ba ngày, rồi đến lúc Ngài thuyết pháp mới bỏ cỏ cho ăn, nhưng chúng cũng không ăn. Bởi thế nên gọi là Mã Minh (ngựa kêu).</li>
    </ol>

    <h4 id="nguyen-nhan-ngo-dao" class="mt-6 text-lg font-semibold">Nguyên nhân Ngài ngộ đạo</h4>
    <p>Khi gặp Tổ Phú Na Dạ Xa Tôn giả,</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Ngài hỏi:</strong> Làm sao biết Phật?</p>
      <p class="mb-1"><strong>Tổ đáp:</strong> Không biết là biết Phật.</p>
      <p class="mb-1"><strong>Ngài hỏi:</strong> Không biết làm sao biết là Phật?</p>
      <p class="mb-1"><strong>Tổ đáp:</strong> Không biết làm sao biết không phải là Phật.</p>
      <p class="mb-1"><strong>Ngài nói:</strong> Nghĩa của Tổ là nghĩa cưa.</p>
      <p class="mb-1"><strong>Tổ nói:</strong> Nghĩa của ông là nghĩa cây.</p>
      <p class="mb-1"><strong>Tổ hỏi tiếp:</strong> Thế nào, ông nói nghĩa của tôi là nghĩa cưa?</p>
      <p class="mb-1"><strong>Ngài đáp:</strong> Vì Tổ nói qua nói lại như cưa vậy.</p>
      <p class="mb-1"><strong>Ngài hỏi tiếp:</strong> Thế nào Tổ nói nghĩa của tôi là nghĩa cây?</p>
      <p class="mb-0"><strong>Tổ đáp:</strong> Vì cây bị cưa vậy. Thế nghĩa của ông bị tôi phá rồi.</p>
    </div>
    <p>Ngài nghe rồi liền ngộ đạo.</p>
    <p>Trong kinh Ma Ha Ma Da, Phật có huyền ký (ghi trước) rằng: "Sau khi Như Lai diệt độ 600 năm, các ngoại đạo tà thuyết thịnh hành, hủy diệt Phật pháp. Lúc bấy giờ có vị Bồ Tát ra đời tên là Mã Minh, nói pháp rất hay, phá trừ tà thuyết, hàng phục ngoại đạo".</p>
    <p>Bởi thế nên biết Ngài Mã Minh cũng là một vị Bồ Tát tái lai. Chúng ta nên học luận này, phải lấy làm hy hữu, gia tâm nghiên cứu, chớ nên xem thường.</p>

    <h3 id="ngai-chan-de" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">NGÀI CHÂN ĐẾ</h3>
    <p>Luận này có hai nhà dịch: Ngài Chân Đế và Ngài Thật Xoa Nan Đà. Bản dịch này là của Ngài Chân Đế. Nguyên tiếng Phạn gọi là "Ba La Mạc Đà"; Tàu dịch là "Chân Đế". Ngài ở nước Ưu Thiền Ni, phía Tây Ấn Độ.</p>
    <p>Ngài qua Tàu nhằm đời vua Nguyên Đế nhà Lương, niên hiệu Thừa Thánh, năm thứ ba (Mậu Thìn). Ngài ở chùa Kiến Hưng, đất Hoàng Châu, dịch bộ Luận này.</p>

    <h3 id="loi-cau-nguyen" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">LỜI CẦU NGUYỆN</h3>

    <h4 id="chanh-van-loi-cau-nguyen" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-0">Kính lạy Phật, Pháp và Tăng, vì muốn cho chúng sinh bỏ chấp tà, trừ các nghi ngờ, khởi lòng tin Đại thừa, để cho giống Phật chẳng mất, nên con tạo ra luận Đại Thừa Khởi Tín này.</p>
    </div>

    <h4 id="luoc-giai-loi-cau-nguyen" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Các vị Bồ Tát khi làm việc gì, trước nhất là để tâm quy kính Tam bảo; cũng như con hướng về cha, trò hướng về thầy, dân chúng hướng về vị lãnh tụ của nước; và nguyện cầu Tam bảo gia hộ cho việc làm của mình hợp với chánh pháp và kết quả viên mãn.</p>
    <p>Đoạn này là Ngài Mã Minh Bồ Tát trước khi tạo luận, nói bài kệ quy kính Tam bảo và nguyện cầu Tam bảo gia hộ.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary-700 dark:text-secondary-300">CHƯƠNG THỨ NHẤT</p>
      <h3 id="chuong-1-phan-nhan-duyen" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">PHẦN NHÂN DUYÊN</h3>
    </div>

    <h4 id="chanh-van-tam-nhan-duyen" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Vì tám nhân duyên sau đây nên tạo ra luận này:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Vì muốn cho chúng sinh xa lìa các khổ, được vui rốt ráo nên tạo luận này, không phải vì danh lợi ở thế gian, hay cầu người cung kính.</li>
      <li>Vì muốn cho chúng sinh hiểu biết chân chính, khỏi sự lầm lạc, nên tạo luận này để giải thích nghĩa căn bản của Như Lai.</li>
      <li>Muốn cho những chúng sinh căn lành đã thuần thục (mãn Thập tín), lòng tin chẳng thối lui và có thể lãnh thọ pháp Đại thừa, nên tạo luận này.</li>
      <li>Muốn cho những chúng sinh căn lành mỏng ít (chưa mãn Thập tín) tu tập tín tâm.</li>
      <li>Vì bảo hộ đạo tâm của những chúng sinh ác nghiệp sâu dày, nên chỉ bày phương tiện, để chúng tiêu trừ nghiệp chướng xa lìa các phiền não si, mạn... và ra khỏi lưới tà.</li>
      <li>Vì muốn đối trị tâm niệm sai lầm của phàm phu và Nhị thừa, nên chỉ bày cho họ tu tập Chỉ Quán.</li>
      <li>Vì những chúng sinh căn tánh kém cỏi, nên chỉ bày phương tiện chuyên tâm niệm Phật, sinh về cõi Phật, để cho tín tâm quyết định không thối chuyển.</li>
      <li>Chỉ bày lợi ích để khuyên người tu hành.</li>
    </ol>
    <p>Tóm lại, vì tám nhân duyên trên, nên tạo ra luận này.</p>

    <h4 id="luoc-giai-tam-nhan-duyen" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Luận này chia ra làm 5 phần, đây là phần thứ nhất, Ngài Mã Minh Bồ Tát vì tám nhân duyên sau đây nên tạo ra luận này:</p>
    <p><strong>Nhân duyên thứ nhất:</strong> Chư Phật và Bồ Tát khi làm việc gì, đều do lòng từ bi, muốn cho chúng sinh khỏi khổ được vui. Tất cả chúng sinh vì mê bản tâm của mình mà thọ các khổ sinh tử, không được vui Niết bàn. Trong luận này, Ngài Mã Minh Bồ Tát chỉ rõ bản tâm, để cho chúng sinh tự tin mình có bản tâm thanh tịnh (pháp Đại thừa) là cái khả năng để thành Phật. Khi chúng sinh đã ngộ được bản tâm của mình rồi, thì sẽ hết khổ sinh tử, được vui Niết bàn. Vì thế nên tạo ra luận này.</p>
    <p><strong>Nhân duyên thứ hai:</strong> Các đức Như Lai đều y nơi "nhất tâm" tu hành mà được thành đạo chứng quả. Luận này nói về "nhất tâm" là nghĩa căn bản của Như Lai, để cho chúng sinh hiểu biết đường lối tu hành một cách chân chính, khỏi bị lạc vào tà kiến (chấp tà).</p>
    <p><strong>Nhân duyên thứ ba:</strong> Luận chủ muốn cho hàng Thập tín Bồ Tát đối với pháp Đại thừa, lòng tin chắc chắn, không bị thối lui, để tiến đến bậc Thập trụ.</p>
    <p><strong>Nhân duyên thứ tư:</strong> Vì những vị Bồ Tát chưa viên mãn Thập tín, muốn cho họ tu tập tín tâm được viên mãn.</p>
    <p><strong>Nhân duyên thứ năm:</strong> Vì những chúng sinh nghiệp chướng nặng nề, bị lưới tà làm chướng ngại, nên tạo ra luận này để chỉ bày phương tiện tu hành, như tụng kinh, sám hối... hầu diệt trừ các nghiệp chướng.</p>
    <p><strong>Nhân duyên thứ sáu:</strong> Vì đối trị tâm lầm lỗi của phàm phu và Nhị thừa, nên Luận chủ tạo luận này, dạy tu "Chỉ" để trừ bệnh "Vọng tưởng tán loạn" của phàm phu; và dạy tu "Quán" để đối trị bệnh "Trầm không thú tịch" (tham luyến cảnh thiên không Niết bàn) của Nhị thừa. (Quán nhân duyên sinh, thấy các pháp chẳng không: Thánh, Phàm đủ cả. Bởi có phàm phu nên phải tu đức đại bi để cứu đời; vì có Thánh, nên phải phát trí tuệ, để cầu quả Phật).</p>
    <p><strong>Nhân duyên thứ bảy:</strong> Vì những người lo sợ đời này tu hành nếu không chứng quả, thì trở lại đời sau bị nghịch duyên làm thối chuyển đạo tâm, hoặc không nhớ lại kiếp trước để tu hành, nên tạo luận này dạy phương tiện niệm Phật, để họ cầu sinh về cõi Phật, thường được nghe Phật thuyết pháp và Bồ Tát khuyên tu, làm cho hành giả tín tâm chẳng thối chuyển.</p>
    <p><strong>Nhân duyên thứ tám:</strong> Vì những chúng sinh giải đãi, nên Luận chủ nói sự lợi ích tu hành, để khuyên người tiến tu.</p>

    <h4 id="hoi-dap-vi-sao-lap-luan" class="mt-6 text-lg font-semibold">Hỏi đáp: Vì sao phải lập luận trở lại?</h4>
    <p><strong>Hỏi:</strong> Pháp Đại thừa, trong các kinh đã nói nhiều, cần gì phải lập trở lại?</p>
    <p><strong>Đáp:</strong> Khi Phật còn trụ thế, vì ba nghiệp của Ngài đều thù thắng, nên một tiếng của Phật nói ra (nhất âm diễn xướng) tùy theo căn cơ của mỗi loài đều được hiểu cả, không cần phải tạo luận. Song sau khi Phật diệt độ, các chúng sinh trình độ không đồng đều, nhân duyên lãnh thọ giáo pháp cũng như sự lãnh hội của mỗi người có khác nhau: có chúng sinh chỉ tự lực học hỏi rất nhiều kinh điển mới hiểu ngộ; có chúng sinh cũng dùng tự lực học ít mà hiểu ngộ nhiều; có chúng sinh không thể tự lực mà phải nhờ xem các bộ đại luận, mới hiểu ngộ; có chúng sinh vì thấy các bộ đại luận rất phiền phức, nên muốn tóm lại văn ít mà thâu nhiều nghĩa. Vì thế nên Luận chủ tạo ra luận này, để tóm tắt giáo pháp quảng đại thậm thâm và nghĩa lý vô biên của Đức Như Lai.</p>
    <p class="italic"><strong>Lược giải:</strong> Đoạn này, Luận chủ lập lời vấn đáp, để giải đáp nghi vấn của độc giả. Đại ý lời hỏi: Pháp Đại thừa, trong các kinh luận đã nói nhiều, nay cần gì phải tạo luận nói lập trở lại? Đại ý lời đáp: Khi Phật còn tại thế do phước tuệ song toàn, ba nghiệp (thân, khẩu, ý) thù thắng; và trình độ của chúng sinh thụ giáo cũng được ưu hạng, nên một lời của Phật nói ra (viên âm), tất cả các loài tùy theo trình độ của mình, đều hiểu được cả. Bởi thế nên không cần phải tạo luận. Song sau khi Phật nhập diệt, người thay thế Phật truyền giáo không được như Ngài, phần thì chúng sinh trình độ không đồng, nhân duyên ngộ đạo của mỗi người có khác: Có người nhờ xem kinh mà ngộ đạo, có người nhờ xem luận mà ngộ đạo, có người ưa nghiên cứu những bộ đại luận, có người chỉ muốn học những quyển luận, văn ít mà bao hàm rất nhiều ý nghĩa. Vì muốn tóm tắt các nghĩa lý sâu rộng vô biên của Phật, nên Ngài Mã Minh Bồ Tát tạo ra luận này.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary-700 dark:text-secondary-300">CHƯƠNG THỨ HAI</p>
      <h3 id="chuong-2-phan-dinh-danh-nghia" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">PHẦN ĐỊNH DANH NGHĨA</h3>
    </div>

    <h4 id="chanh-van-dinh-danh-nghia" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Chương này có hai phần:</p>
    <p><strong>A. PHÁP ĐẠI THỪA</strong> (Thể Đại thừa) tức là tâm chúng sinh. Tâm này tóm thâu hết thảy các pháp thế gian, xuất thế gian và nói lên được nghĩa Đại thừa.</p>
    <p>Tại sao vậy? Vì tâm này có hai tướng:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Tướng Chân như tức là cái Thể của Đại thừa.</li>
      <li>Tướng nhân duyên sinh diệt tức là Thể, Tướng, Dụng của Đại thừa.</li>
    </ol>
    <p><strong>B. NGHĨA ĐẠI THỪA:</strong> "Đại" là lớn, lớn cả 3 phương diện:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Thể lớn:</strong> Chân như bình đẳng, bất tăng bất giảm. Bản thể của tất cả pháp.</li>
      <li><strong>Tướng lớn:</strong> Như Lai tạng chứa đầy vô lượng tánh công đức.</li>
      <li><strong>Dụng lớn:</strong> Vì nó sinh tất cả nhân quả lành của thế gian và xuất thế gian.</li>
    </ul>
    <p>"Thừa" là chiếc xe, tất cả chư Phật đều đi xe này (pháp Đại thừa); tất cả các vị Bồ Tát cũng đều đi xe này mà đến chỗ Phật.</p>

    <h4 id="luoc-giai-dinh-danh-nghia" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này nói về phần lập nghĩa, tức là xác định cái danh nghĩa Đại thừa. Phần lập nghĩa này chia làm hai: Pháp Đại thừa và Nghĩa Đại thừa.</p>
    <p><strong>I. Pháp đại thừa:</strong> là tâm chúng sinh. Tâm này có hai tướng:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Tướng Chân như tức là chỉ riêng về phần thể tánh chân tâm thanh tịnh; dụ như "tánh trong sạch" của nước.</li>
      <li>Tướng nhân duyên sinh diệt tức là chỉ chung cho Thể, Tướng và Dụng của chân vọng hòa hợp; dụ như tánh "trong sạch" và "tướng nhơ đục" lẫn lộn của nước.</li>
    </ul>
    <p><strong>II. Nghĩa đại thừa:</strong> Đại thừa nghĩa là gì? "Đại" là lớn; "Thừa" (thặng) là chiếc xe: chiếc xe lớn.</p>
    <p>Tâm chúng sinh, Thể, Tướng và Dụng đều lớn. Thể thì bao trùm tất cả pháp, Tướng thì chứa đựng hằng sa công đức, còn Dụng thì xuất sinh tất cả pháp thế gian và xuất thế gian.</p>
    <p>Khế kinh chép: "Vô bất tùng thử pháp giới lưu, mạc bất hoàn quy thử pháp giới" (không có một pháp nào chẳng từ tâm này mà lưu xuất, và cũng không có một pháp nào chẳng trở về tâm này).</p>
    <p>Tâm này bao trùm tất cả các pháp thế gian và xuất thế gian. Các Đức Phật đều nương tâm này mà được thành đạo. Các vị Bồ Tát cũng nương tâm này để đến chỗ Phật. Chúng sinh cũng do tâm này mà luân hồi trong 6 đường. Tâm này cũng như chiếc xe lớn chở tất cả người và vật. Bởi thế nên gọi tâm này là pháp Đại thừa.</p>
    <p>Tại sao không nói "Tâm Phật" là pháp Đại thừa mà chỉ nói "Tâm chúng sinh" là pháp Đại thừa? Vì có hai lý:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Nếu nói "Tâm Phật" thì chỉ tóm thâu được pháp thanh tịnh vô lậu mà thôi; còn nói "Tâm chúng sinh", lại tóm thâu được cả pháp hữu lậu, vô lậu, thế gian và xuất thế gian.</li>
      <li>Nói Tâm chúng sinh là đứng về phần "nhân" mà nói; vì chưa phải nhiễm hay tịnh, nên mới có thể tùy nhiễm duyên khởi ra nhiễm pháp, tùy tịnh duyên khởi ra tịnh pháp.</li>
    </ol>

    <h4 id="giai-danh-tu" class="mt-6 text-lg font-semibold">Giải danh từ</h4>
    <p><strong>Tướng chân như:</strong> Chữ "Chân" là chân thật không hư dối; chữ "Như" là bình đẳng như như, không sinh diệt, nghĩa là tướng chân thật bình đẳng như như không sinh diệt; tức là "Thật tướng" hay "Chân tâm" hay "Viên giác", đây là cái "Thể của Đại thừa". Đoạn này gọi "Tướng chân như" tức là ở đoạn văn sau gọi "Môn chân như".</p>
    <p><strong>Tướng nhân duyên sinh diệt:</strong> Vì nhân duyên sinh diệt, nên đủ các tướng: nhiễm, tịnh, thánh, phàm v.v... Đoạn này gọi "Tướng nhân duyên sinh diệt" tức là ở đoạn văn sau gọi "Môn sinh diệt".</p>
    <p><strong>Như Lai tạng,</strong> có 3 nghĩa:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Tánh Như Lai (tánh Phật) bị các phiền não phú tàng (che đậy), tức là chỉ cho chân như còn bị triền phược; như vàng còn ở trong khoáng.</li>
      <li>Tánh Như Lai bao trùm tất cả pháp (nghĩa năng tàng).</li>
      <li>Tánh Như Lai là chỗ xuất sinh ra vô lượng công đức (nghĩa sở tàng).</li>
    </ol>
    <p><strong>Tánh công đức:</strong> Công đức sẵn có trong Như Lai tạng. Công đức này không phải do tu tập mà được; song phải nhờ sự tu tập làm trợ duyên nó mới hiện. Chúng sinh vì thiếu sự tu tập làm trợ duyên, nên tánh công đức này không phát hiện.</p>
    <p><strong>Nhân quả lành</strong> — Tại sao luận này chỉ nói "nhân quả lành" mà không nói đến "nhân quả ác"? Vì có ba nghĩa:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Nhân quả ác là thứ nhiễm ô hư vọng; vì tâm này chỉ bao trùm vô lượng hằng sa công đức, nên không hợp với thứ nhiễm ô hư vọng. Dụ như nước có cả chất trong và đục; song "chất đục" không hợp với tánh nước, mà "chất trong" mới hợp với nước; vì khi lắng bỏ bùn rồi thì chỉ còn chất nước trong. Cũng thế, pháp nhiễm ô không hợp với tâm này, mà duy có nhân quả lành mới hợp với tâm này.</li>
      <li>Ngài Mã Minh chỉ nói về "Nhân quả lành", là vì để chúng sinh thấy tâm mình sinh ra các nhân quả lành, nên sinh tâm hâm mộ sự tu hành, mong cầu quả Phật.</li>
      <li>Ngài Mã Minh Bồ Tát đã lên Thánh vị, nên trong A lại da thức của Ngài chỉ toàn nhân quả lành. Vì Ngài chỉ thấy thuần thiện, nên Ngài chỉ nói "nhân quả lành" mà không nói đến "nhân quả ác".</li>
    </ol>
    <p><strong>Nhân quả lành thế gian:</strong> Nhân quả thuộc về hữu lậu thiện, còn quanh quẩn trong ba cõi thế gian là Dục giới, Sắc giới và Vô sắc giới.</p>
    <p><strong>Nhân quả lành xuất thế gian:</strong> Nhân quả thuộc về vô lậu thanh tịnh, ra ngoài tam giới.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo nội dung bài học, Ngài Mã Minh Bồ Tát tạo ra Luận Đại Thừa Khởi Tín trong bối cảnh lịch sử nào tại Ấn Độ?',
    options: {
      a: 'Khi Phật giáo Đại thừa đã chiếm ưu thế hoàn toàn và cần một hệ thống lý luận mới.',
      b: 'Ngay sau khi Đại hội kết tập kinh điển lần thứ nhất kết thúc để tóm tắt giáo lý.',
      c: 'Vào thời đại vua A Dục khi Phật giáo đang cực thịnh và lan rộng ra khắp thế giới.',
      d: 'Khoảng 600 năm sau khi Phật nhập diệt, khi phái Tiểu thừa và ngoại đạo gây nhiều tranh chấp.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Bối cảnh lúc này tình trạng Phật giáo rất đen tối, Đại thừa chưa chiếm ưu thế hoàn toàn.',
      b: 'Sai. Không phải ngay sau Đại hội kết tập lần thứ nhất mà là khoảng 600 năm sau khi Phật nhập diệt.',
      c: 'Sai. Thời kỳ này Phật giáo không cực thịnh mà đang bị ngoại đạo phá hoại tà thuyết.',
      d: 'Đúng. Khoảng 600 năm sau khi Phật nhập diệt, phái Tiểu thừa nổi lên tranh chấp, ngoại đạo lập tà thuyết phá hoại chánh pháp.',
    },
  },
  {
    question: 'Tại sao Ngài Mã Minh lại được đặt tên là "Mã Minh" (ngựa kêu)?',
    options: {
      a: 'Vì khi Ngài thuyết pháp, ngựa nghe thấy đều rơi nước mắt và không ăn cỏ.',
      b: 'Vì Ngài có giọng nói vang rền và mạnh mẽ như tiếng ngựa hí giữa đồng nội.',
      c: 'Vì Ngài thường cưỡi ngựa đi khắp nơi để truyền bá giáo lý Đại thừa.',
      d: 'Vì Ngài sinh ra trong một gia đình chuyên nuôi ngựa tại xứ Ba La Nại.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Khi thuyết pháp, các con ngựa nghe đến tiếng Ngài đều rơi nước mắt kêu to lên và không ăn, dù bị bỏ đói vài ba ngày.',
      b: 'Sai. Tên gọi này không xuất phát từ giọng nói của Ngài.',
      c: 'Sai. Ngài không cưỡi ngựa đi truyền bá.',
      d: 'Sai. Dù Ngài sinh tại Ba La Nại nhưng văn bản không nhắc đến gia đình Ngài làm nghề nuôi ngựa.',
    },
  },
  {
    question: 'Trong cuộc đối thoại ngộ đạo với Tổ Phú Na Dạ Xa, Ngài Mã Minh đã ví nghĩa của Tổ là "nghĩa cưa". Điều này có ý nghĩa gì?',
    options: {
      a: 'Vì Tổ sử dụng các công cụ lao động để ẩn dụ cho việc tu hành gian khổ.',
      b: 'Vì lời dạy của Tổ có tính chất "qua lại" để phá bỏ các chấp trước.',
      c: 'Vì lời dạy của Tổ sắc bén như lưỡi cưa có thể cắt đứt mọi phiền não.',
      d: 'Vì nghĩa của Tổ cứng nhắc và khó tiếp thu như sắt thép làm nên cái cưa.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đây không phải là sự ẩn dụ về công cụ lao động và sự tu hành gian khổ.',
      b: 'Đúng. Khi Tổ hỏi vì sao gọi là nghĩa cưa, Ngài Mã Minh giải thích: "Vì Tổ nói qua nói lại như cưa vậy".',
      c: 'Sai. Lời giải thích trong văn bản không đề cập đến sự sắc bén cắt đứt phiền não.',
      d: 'Sai. Nghĩa của Tổ không cứng nhắc.',
    },
  },
  {
    question: 'Luận Đại Thừa Khởi Tín xác định đối tượng nào sau đây chính là "Pháp Đại Thừa"?',
    options: {
      a: 'Tâm chúng sinh.',
      b: 'Cõi Niết bàn thanh tịnh.',
      c: 'Các bộ kinh điển sâu rộng.',
      d: 'Trí tuệ của chư Phật.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Luận này xác định "Pháp Đại Thừa" (Thể Đại thừa) chính là tâm chúng sinh.',
      b: 'Sai. Cõi Niết bàn là đích đến, không phải "Pháp Đại Thừa" theo định nghĩa trong Luận.',
      c: 'Sai. Kinh điển là phương tiện, không phải là "Pháp Đại Thừa".',
      d: 'Sai. Luận không lấy trí tuệ của chư Phật làm "Pháp Đại Thừa".',
    },
  },
  {
    question: 'Tại sao tác giả không lấy "Tâm Phật" làm Pháp Đại Thừa mà lại lấy "Tâm chúng sinh"?',
    options: {
      a: 'Vì Tâm chúng sinh bao hàm cả pháp hữu lậu và vô lậu, tóm thâu được mọi trạng thái mê ngộ.',
      b: 'Vì chúng sinh không thể hiểu được Tâm Phật nên phải dùng Tâm chúng sinh cho gần gũi.',
      c: 'Vì Tâm chúng sinh có kích thước lớn hơn Tâm Phật về mặt không gian.',
      d: 'Vì chư Phật không cần đến chiếc xe Đại Thừa nữa nên không gọi là Pháp Đại Thừa.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Nếu nói "Tâm Phật" thì chỉ tóm thâu được pháp thanh tịnh vô lậu, còn "Tâm chúng sinh" tóm thâu được cả pháp hữu lậu, vô lậu, thế gian và xuất thế gian.',
      b: 'Sai. Không phải vì lý do gần gũi hay vì chúng sinh không hiểu được.',
      c: 'Sai. Không có việc so sánh kích thước không gian.',
      d: 'Sai. Các Đức Phật vẫn nương tâm này mà chứng Bồ Đề và Niết bàn.',
    },
  },
  {
    question: 'Trong định nghĩa về "Nghĩa Đại Thừa", đặc tính "Dụng lớn" được giải thích như thế nào?',
    options: {
      a: 'Vì nó có sức mạnh phá hủy mọi nghiệp chướng ác độc của chúng sinh.',
      b: 'Vì nó chứa đựng vô lượng tánh công đức quý báu như cát sông Hằng.',
      c: 'Vì nó sinh ra tất cả nhân quả lành của thế gian và xuất thế gian.',
      d: 'Vì nó bao trùm không gian vô tận và thời gian vĩnh hằng.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Phá hủy nghiệp chướng không được định nghĩa là "Dụng lớn".',
      b: 'Sai. Chứa đựng hằng sa công đức là đặc tính của "Tướng lớn".',
      c: 'Đúng. Tâm này "Dụng lớn" vì nó xuất sinh tất cả nhân quả lành của thế gian và xuất thế gian.',
      d: 'Sai. Sự bao trùm thời không không phải là định nghĩa về dụng của tâm trong Luận.',
    },
  },
  {
    question: 'Theo nhân duyên thứ sáu, phương pháp tu "Quán" được dùng để đối trị căn bệnh gì của hàng Nhị thừa?',
    options: {
      a: 'Bệnh "Giải đãi" không chịu tinh tấn trong việc tu học.',
      b: 'Bệnh "Vọng tưởng tán loạn" do tâm niệm không ngừng dao động.',
      c: 'Bệnh "Trầm không thú tịch", tham luyến cảnh thiên không Niết bàn.',
      d: 'Bệnh "Kiêu mạn" tự cho mình đã chứng đắc đạo quả tối thượng.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Bệnh giải đãi là đối tượng được nhắc đến trong nhân duyên thứ tám.',
      b: 'Sai. Bệnh vọng tưởng tán loạn là của phàm phu, được đối trị bằng cách tu "Chỉ".',
      c: 'Đúng. Tu "Quán" được dạy để đối trị bệnh "Trầm không thú tịch" (tham luyến cảnh thiên không Niết bàn) của Nhị thừa.',
      d: 'Sai. Bệnh kiêu mạn không được đề cập trong nhân duyên thứ sáu.',
    },
  },
  {
    question: 'Tại sao khi Phật còn tại thế thì không cần phải tạo các bộ luận như thế này?',
    options: {
      a: 'Vì thời đó chưa có chữ viết để ghi chép và lưu trữ các bộ luận phức tạp.',
      b: 'Vì Phật có "nhất âm diễn xướng", một lời nói ra khiến mọi trình độ đều hiểu được.',
      c: 'Vì thời đó trình độ của chúng sinh đều đồng nhất và đạt mức ưu hạng.',
      d: 'Vì Phật cấm các đệ tử tranh luận hoặc phân tích quá sâu về lý thuyết.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Luận không đề cập đến việc thiếu chữ viết.',
      b: 'Đúng. Khi Phật còn trụ thế, ba nghiệp thù thắng nên một tiếng của Phật nói ra (nhất âm diễn xướng) tùy theo căn cơ của mỗi loài đều hiểu cả.',
      c: 'Sai. Trình độ chúng sinh là ưu hạng nhưng không đồng nhất, tùy theo căn cơ mỗi loài mà lĩnh hội từ viên âm của Phật.',
      d: 'Sai. Phật không hề có quy định cấm đệ tử phân tích hay tranh luận.',
    },
  },
  {
    question: 'Trong phần giải thích danh từ, "Như Lai tạng" có nghĩa là "Như Lai năng tạng". Nghĩa này ám chỉ điều gì?',
    options: {
      a: 'Tánh Như Lai là nơi sinh ra các công đức.',
      b: 'Tánh Như Lai bao trùm tất cả các pháp.',
      c: 'Tánh Như Lai không còn tồn tại trong chúng sinh ác nghiệp.',
      d: 'Tánh Như Lai bị các phiền não che lấp.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Việc là chỗ xuất sinh ra vô lượng công đức được gọi là "nghĩa sở tàng".',
      b: 'Đúng. "Nghĩa năng tàng" chỉ cho việc Tánh Như Lai bao trùm tất cả các pháp.',
      c: 'Sai. Văn bản không nói tánh này không tồn tại trong chúng sinh ác nghiệp.',
      d: 'Sai. Bị phiền não che lấp là nghĩa "phú tàng".',
    },
  },
  {
    question: 'Nhân duyên thứ bảy của Luận hướng đến đối tượng nào và khuyên họ phương tiện gì?',
    options: {
      a: 'Những người thông minh tài trí, khuyên họ nghiên cứu các bộ đại luận.',
      b: 'Những người có ác nghiệp sâu dày, khuyên họ sám hối để tiêu trừ chướng ngại.',
      c: 'Hàng Bồ Tát đã mãn Thập tín, khuyên họ tiến lên bậc Thập trụ.',
      d: 'Những người căn tánh kém cỏi, khuyên họ niệm Phật để sinh về cõi Phật.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Khuyên nghiên cứu đại luận không nằm trong các nhân duyên được kể.',
      b: 'Sai. Người có ác nghiệp sâu dày là đối tượng của nhân duyên thứ năm, được khuyên tụng kinh, sám hối.',
      c: 'Sai. Bồ Tát mãn Thập tín tiến lên Thập trụ là đối tượng của nhân duyên thứ ba.',
      d: 'Đúng. Nhân duyên thứ bảy hướng đến chúng sinh căn tánh kém cỏi (lo sợ thối chuyển), chỉ bày phương tiện chuyên tâm niệm Phật để sinh về cõi Phật.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-1-phan-nhan-duyen-phan-dinh-danh-nghia',
  slug: 'bai-thu-1-phan-nhan-duyen-phan-dinh-danh-nghia',
  title: 'Bài Thứ 1 - Phần nhân duyên; Phần định danh nghĩa',
  type: 'article',
  status: 'published',
  order: 3,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-19',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-1-phan-nhan-duyen-phan-dinh-danh-nghia/Lu%E1%BA%ADn_%C4%90%E1%BA%A1i_Th%E1%BB%ABa_Kh%E1%BB%9Fi_T%C3%ADn.png',
      readingContent,
      tableOfContents: [
        { id: 'phan-nhan-duyen', label: 'Phần nhân duyên' },
        { id: 'nguyen-nhan-tao-luan', label: 'Nguyên nhân tạo luận này', indent: 1 },
        { id: 'giai-thich-ten-luan', label: 'Giải thích tên Luận Đại Thừa Khởi Tín', indent: 1 },
        { id: 'luan-lay-gi-lam-dai-thua', label: 'Luận này lấy gì làm Đại thừa?', indent: 1 },
        { id: 'noi-dung-cua-luan-nay', label: 'Nội dung của Luận này', indent: 1 },
        { id: 'ngai-ma-minh-bo-tat', label: 'Ngài Mã Minh Bồ Tát', indent: 1 },
        { id: 'ly-lich-va-ten', label: 'Lý lịch và tên', indent: 2 },
        { id: 'nguyen-nhan-ngo-dao', label: 'Nguyên nhân Ngài ngộ đạo', indent: 2 },
        { id: 'ngai-chan-de', label: 'Ngài Chân Đế', indent: 1 },
        { id: 'loi-cau-nguyen', label: 'Lời cầu nguyện', indent: 1 },
        { id: 'chanh-van-loi-cau-nguyen', label: 'Chánh văn', indent: 2 },
        { id: 'luoc-giai-loi-cau-nguyen', label: 'Lược giải', indent: 2 },
        { id: 'chuong-1-phan-nhan-duyen', label: 'Chương thứ nhất: Phần nhân duyên', indent: 1 },
        { id: 'chanh-van-tam-nhan-duyen', label: 'Chánh văn: Tám nhân duyên', indent: 2 },
        { id: 'luoc-giai-tam-nhan-duyen', label: 'Lược giải', indent: 2 },
        { id: 'hoi-dap-vi-sao-lap-luan', label: 'Hỏi đáp: Vì sao phải lập luận trở lại?', indent: 2 },
        { id: 'chuong-2-phan-dinh-danh-nghia', label: 'Chương thứ hai: Phần định danh nghĩa', indent: 1 },
        { id: 'chanh-van-dinh-danh-nghia', label: 'Chánh văn', indent: 2 },
        { id: 'luoc-giai-dinh-danh-nghia', label: 'Lược giải', indent: 2 },
        { id: 'giai-danh-tu', label: 'Giải danh từ', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-1-phan-nhan-duyen-phan-dinh-danh-nghia/Awakening_Mahayana_Faith.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/lXrxhH0IWb8',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/2Q5co7JdqNgTdUQc4FFrI4?utm_source=generator&si=8674a17b6de64154',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần nhân duyên; Phần định danh nghĩa',
    passPercentage: 70,
    questions,
  },
}

export default lesson
