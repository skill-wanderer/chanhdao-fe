import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-khoa-1-bai-9-an-chay',
  slug: 'bai-thu-9-an-chay',
  title: 'Bài Thứ 9 - Ăn Chay',
  type: 'article',
  status: 'published',
  order: 9,
  durationMinutes: 45,
  content: '<p>Nội dung bài học đang được biên soạn.</p>',
  createdAt: '2026-03-20',
  updatedAt: '2026-03-27',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/bai-thu-9-an-chay/infographic.png',
      tableOfContents: [
        { id: 'mo-de', label: 'A. Mở Đề' },
        { id: 'chanh-de', label: 'B. Chánh Đề' },
        { id: 'dinh-nghia', label: 'I. Định Nghĩa', indent: 1 },
        { id: 'ly-do', label: 'II. Lý Do Phải Ăn Chay', indent: 1 },
        { id: 'ly-do-tu-bi', label: '1. Vì lòng từ bi và bình đẳng', indent: 2 },
        { id: 'ly-do-luan-hoi', label: '2. Vì muốn tránh quả báo luân hồi', indent: 2 },
        { id: 'ly-do-ve-sinh', label: '3. Vì hợp vệ sinh', indent: 2 },
        { id: 'cach-thuc', label: 'III. Cách Thức Ăn Chay', indent: 1 },
        { id: 'chuong-trinh', label: '1. Chương trình ăn chay', indent: 2 },
        { id: 'chay-ky', label: 'a) Chay kỳ', indent: 3 },
        { id: 'chay-truong', label: 'b) Chay trường', indent: 3 },
        { id: 'phuong-phap', label: '2. Phương pháp thực hành', indent: 2 },
        { id: 'chon-lua-thuc-an', label: 'a) Chọn lựa thay đổi thức ăn', indent: 3 },
        { id: 'cach-nau', label: 'b) Cách nấu', indent: 3 },
        { id: 'giam-thit-ca', label: 'c) Giảm thịt cá dần dần', indent: 3 },
        { id: 'nhung-dieu-can-tranh', label: '3. Những điều cần tránh', indent: 2 },
        { id: 'loi-ich', label: 'IV. Lợi Ích Của Sự Ăn Chay', indent: 1 },
        { id: 'loi-ich-ca-nhan', label: '1. Phương diện cá nhân', indent: 2 },
        { id: 'loi-ich-xa-hoi', label: '2. Phương diện xã hội, nhân loại, chúng sanh', indent: 2 },
        { id: 'ket-luan', label: 'C. Kết Luận' },
      ],
      readingContent: `
<div class="prose prose-lg max-w-none dark:prose-invert">

  <!-- A. MỞ ĐỀ -->
  <section id="mo-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">A. MỞ ĐỀ</h2>
    <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">ĂN CHAY LÀ MỘT PHƯƠNG PHÁP TU HÀNH CỦA NGƯỜI PHẬT TỬ</h3>
    <p>Vấn đề ăn uống là một vấn đề quan trọng đối với tất cả mọi người, mọi chúng sanh. Nếu sống mà không cần ăn, thì tất cả chúng sanh đều thành Thánh cả rồi. Đức Phật Thích Ca, khi còn là một vị Thái Tử, đã nói một câu đầy ý nghĩa: <em>"Sự sống sống bằng sự chết"</em>. Hãy nghĩ lại mà xem: từ khi lọt lòng mẹ đến bây giờ, để được sống, mỗi chúng ta đã làm chết bao nhiêu sinh vật rồi? Chúng ta ăn, chúng ta uống, chúng ta thở, chúng ta nằm, chúng ta đứng, chúng ta đi, mỗi mỗi động tác như thế, đều đã gây bao tang tóc cho những sinh vật ở chung quanh chúng ta! Đó là chưa kể những kẻ hung ác, giết để được thích thú, được tiền tài, danh vọng... Nếu sự sống mà không làm ai chết ai cả, thì cuộc đời sẽ đẹp đẽ biết bao nhiêu! Sự ước ao này có thể thực hiện được một phần lớn, nếu chúng ta áp dụng phương pháp ăn chay mà Phật đã chế ra.</p>
    <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
      <p class="mb-0">Như thế, ăn chay đối với người Phật tử không phải là một sự hiếu kỳ, một sự hiếu danh, một cách đổi món ăn cho ngon miệng, một cách kiêng cữ theo lời dặn của bác sĩ. <strong>Ăn chay chính là một phương pháp tu hành rất quan trọng</strong>, mà người Phật tử thực hành được nhiều chừng nào thì được nhiều kết quả tốt đẹp chừng ấy.</p>
    </div>
  </section>

  <!-- B. CHÁNH ĐỀ -->
  <section id="chanh-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">B. CHÁNH ĐỀ</h2>

    <!-- I. ĐỊNH NGHĨA -->
    <section id="dinh-nghia">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Định Nghĩa</h3>
      <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
        <p class="mb-0"><strong>Ăn chay</strong>, hay <strong>ăn lạt</strong>, nghĩa là ăn những loài thảo mộc: hoa quả, rau cải, không ăn những món ăn thuộc loài động vật như thịt, cá, tôm, cua, sò, ốc — những vật hữu tình, biết tham sống sợ chết như người.</p>
      </div>
    </section>

    <!-- II. LÝ DO PHẢI ĂN CHAY -->
    <section id="ly-do">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Lý Do Phải Ăn Chay</h3>

      <section id="ly-do-tu-bi">
        <h4 class="text-lg font-semibold">1. Vì lòng từ bi và bình đẳng</h4>
        <p>Khi Đức Phật còn tại thế, một hôm Ngài A Nan hỏi Phật rằng:</p>
        <p><em>— Bạch Phật, tại sao trước kia, Phật cho các đệ tử ăn ngũ tịnh nhục, mà nay Ngài lại cấm ăn tuyệt đối.</em></p>
        <p>Phật trả lời Ngài A Nan:</p>
        <p><em>— Vì trình độ các ông trong buổi sơ cơ còn thấp kém, chưa có thể lãnh thọ giáo pháp Đại thừa, thực hành đúng lý đặng, nên khi Ta còn nói pháp Tiểu Thừa, phương tiện cho các ông tạm dùng ngũ tịnh nhục. Đến nay trình độ các ông đã cao, lãnh thọ được giáo pháp Đại Thừa, nên Ta cấm tuyệt ăn thịt cá. Còn ăn thứ ấy, thì còn phạm giới sát sanh, nếu không trực tiếp sát thì cũng gián tiếp sát, làm mất hạt giống từ bi bình đẳng, không thể nào tu hành thành Phật được.</em></p>
        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100"><strong>Ngũ tịnh nhục</strong> là năm thứ thịt thanh tịnh: a) Thịt ăn mà không thấy người giết, b) Thịt ăn mà mình không nghe tiếng con vật bị giết kêu, c) Thịt ăn mà mình không nghi người ta giết cho mình ăn, d) Thịt con thú tự chết, đ) Thịt con thú khác ăn còn dư.</p>
        </div>
        <p>Lời Phật dạy đã rõ ràng: <strong>Ăn chay là cốt yếu để nuôi dưỡng lòng từ bi và tinh thần bình đẳng.</strong></p>
        <p>Thật thế, Phật tử là người đã theo Đạo Từ Bi, thì không lý nào lại không thực hành đức Từ bi trong đời sống của mình từ ý nghĩ, lời nói, cho đến cách ăn uống.</p>
        <p>Nếu chúng ta vì muốn ăn cho khoái khẩu, sướng bụng, mà nhẫn tâm nhìn cảnh chặt đầu, lột da những con vật hiền lành vô tội, nhẫn tâm bịt tai giả điếc trước những tiếng kêu la thảm thiết của những con vật đang giẫy giụa trên tấm thớt, trên bàn thịt, thì sao được gọi là Phật tử.</p>
        <p>Nếu không có một chút lòng thương xót trước những cảnh giết chóc như thế, thì hạt giống Từ bi mỗi ngày mỗi héo khô, cằn cỗi, và công phu tu hành, tụng kinh niệm Phật của chúng ta trở thành vô ích.</p>
        <p>Đạo Phật là đạo Từ bi mà cũng là đạo Bình đẳng. Phật dạy: <em>"Tất cả chúng sanh đều có Phật tánh như nhau"</em>. Vậy thì người Phật tử dưới tầm con mắt của mình, không nên thấy Người và vật khác nhau, mà chỉ đồng một tri giác bình đẳng, ẩn trong thân hình sai biệt.</p>
        <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Nói rằng: <em>"Vật dưỡng nhơn"</em> là một quan niệm rất sai lầm, do sự ích kỷ và ngạo mạn của người sinh ra. Quan niệm ấy dung túng cho người ta thẳng tay giết hại sanh vật, và tạo ra một tình trạng bất bình đẳng, thì không bao giờ cõi đời có thể yên ổn, hòa bình được.</p>
        </div>
      </section>

      <section id="ly-do-luan-hoi">
        <h4 class="text-lg font-semibold">2. Vì muốn tránh quả báo luân hồi</h4>
        <p>Phật dạy: <em>"Tất cả chúng sanh từ vô thỉ đến nay, cứ tạo nhân tội ác, sát hại ăn thịt lẫn nhau, nên bị ác quả, là sanh tử luân hồi mãi trong sáu đường"</em>.</p>
        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Kinh Lăng Nghiêm nói: <em>"Hễ giết một mạng thì hãy trả lại một mạng; tâm giết hại chẳng dứt trừ, thì không thể nào ra khỏi trần lao được…"</em></p>
        </div>
        <p>Vậy muốn tránh oan báo luân hồi, tránh các điều tội lỗi thuộc về giới sát, Phật tử phải ăn chay. Nếu ăn mặn hoài thì không thể nào hết nợ thân mạng và nợ xương thịt, máu huyết được.</p>
      </section>

      <section id="ly-do-ve-sinh">
        <h4 class="text-lg font-semibold">3. Vì hợp vệ sinh</h4>
        <p>Không phải mới từ nay mà từ ngàn xưa, một triết gia, ông Senèque, đã nói rằng: <em>"Mỗi bữa ăn, người ta dùng thịt là tự đầu độc, thành thử con người tự sát ngấm ngầm mà không hay biết, do đó con người bị mạng yểu, chết sớm"</em>.</p>
        <p>Thật thế, ngày nay những nhà y khoa bác sĩ trứ danh như ông Soteyko, Varia Kiplami có nói: <em>"Trong các thứ thịt, có nhiều chất độc rất nguy hiểm cho sức khỏe con người"</em>. Bằng chứng cụ thể là rau cải để lâu ngày thì héo khô, hoặc ung bấy mà ít hôi; còn thịt cá để lâu ngày thì sình, ương, hôi tanh không ai chịu nổi, và khi ăn vào, ta thấy trong người rất nặng nề, mệt nhọc, khó tiêu. Hơn nữa, các loài thú vật, thường mắc bệnh này hay bệnh khác như: bệnh lao, bệnh thương hàn, bệnh sán, sên v.v..., nếu chúng ta ăn vào, sẽ vướng bệnh, rất nguy hiểm.</p>
        <p>Để tránh những bệnh tật, và tăng sức khỏe, chúng ta nên ăn nhiều rau cải. Các nhà khoa học, cũng như các nhà y học Đông, Tây đều công nhận đồ ăn chay là nhẹ nhàng, thanh khiết, dễ tiêu hóa và có nhiều sinh tố rất bổ. Bởi thế, ở nước Nhật có hội "Tổ thực chủ nghĩa", ở Pháp, Đức, Anh, Mỹ đều có "Thảo mộc thực hội".</p>
        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100">Chính Giáo sư Irwin Fischer ở Đại học đường Yale, sau nhiều cuộc thí nghiệm, đã long trọng tuyên bố rằng: <em>"Ăn thịt hay ăn những vật có nhiều chất đạm, sẽ làm cho con người không đủ sức chịu nhọc, không khác nào như người uống rượu"</em>.</p>
          <p class="mb-0">Bà White, một bác học gia cũng đã tuyên bố rằng: <em>"Các thứ hột, các thứ trái cây, đậu và rau cải là những thức ăn mà thiên nhiên đã dành để nuôi chúng ta. Các thức ăn ấy nấu nướng một cách giản dị, thì rất hợp vệ sinh và rất bổ. Nó làm cho thân thể tráng kiện, tinh thần sáng suốt và tránh biết bao nhiêu bệnh tật."</em></p>
        </div>
      </section>
    </section>

    <!-- III. CÁCH THỨC ĂN CHAY -->
    <section id="cach-thuc">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. Cách Thức Ăn Chay</h3>

      <section id="chuong-trinh">
        <h4 class="text-lg font-semibold">1. Chương trình ăn chay</h4>
        <p>Mặc dù sự ăn chay đối với người Phật tử là một điều cần thiết, một phương pháp tu hành nhưng muốn được lợi ích thiết thực, cần phải có phương pháp, và áp dụng một cách tuần tự theo căn cơ và sở nguyện của mình. Trước tiên, không phải người Phật tử nào cũng có thể bỏ hẳn ngay tập quán ăn mặn của mình để ăn chay. Vì thế, trong đạo có chia làm hai loại: ăn chay kỳ và ăn chay trường.</p>

        <section id="chay-ky">
          <h5 class="font-semibold">a) Ăn chay kỳ</h5>
          <p>Ăn chay kỳ là ăn có kỳ hạn nhất định trong mỗi tháng hay mỗi năm:</p>
          <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
            <ul class="mb-0">
              <li><strong>Nhị trai:</strong> Ăn 2 ngày chay trong mỗi tháng vào ngày mồng một và rằm âm lịch.</li>
              <li><strong>Tứ trai:</strong> Ăn 4 ngày chay trong tháng: mồng một, mồng tám, rằm và hăm ba.</li>
              <li><strong>Lục trai:</strong> Ăn 6 ngày chay trong tháng: mồng một, mồng tám, mười bốn, rằm, hăm ba, hăm bốn, hăm tám, hăm chín và ba mươi (tùy tháng thiếu hay đủ).</li>
              <li><strong>Thập trai:</strong> Ăn 10 ngày chay trong tháng: mồng một, mồng tám, mười bốn, rằm, mười tám, hăm ba, hăm tám, hăm chín và ba mươi (nếu tháng thiếu thì 27, 28, 29).</li>
              <li><strong>Nhất nguyệt trai:</strong> Ăn một tháng chay vào tháng giêng hay tháng bảy.</li>
              <li><strong>Tam nguyệt trai:</strong> Ăn ba tháng chay: Tháng giêng, tháng bảy và tháng chín (hay tháng mười); hoặc ăn liên tiếp trong ba tháng.</li>
            </ul>
          </div>
          <p>Nếu tập ăn chay kỳ trong một thời gian mà không gặp một phản ứng nào về thân, tâm và nhận thấy có lợi ích, thì nên lần đến ăn chay trường.</p>
        </section>

        <section id="chay-truong">
          <h5 class="font-semibold">b) Ăn chay trường</h5>
          <p>Ăn chay trường hay trường trai là ăn toàn chay luôn trong mỗi ngày, không gián đoạn cho đến hết đời.</p>
          <p>Nếu mỗi ngày, phát tâm không ăn sau 12 giờ trưa, thì gọi là <strong>ngọ trai</strong>.</p>
        </section>
      </section>

      <section id="phuong-phap">
        <h4 class="text-lg font-semibold">2. Phương pháp thực hành</h4>

        <section id="chon-lua-thuc-an">
          <h5 class="font-semibold">a) Chọn lựa thay đổi thức ăn</h5>
          <p>Để ăn cho được lâu dài và không ngán, chúng ta nên chọn những món ăn có nhiều sinh tố, bổ dưỡng như: cà chua, rau muống, đậu nành, nấm rơm, cải bắp, khoai tây, nếp lức v.v... và những món ăn cũng phải thay đổi luôn.</p>
          <p>Vậy trong một bữa ăn, cần phải ăn những món gì để bữa ăn có đầy đủ chất bổ và ngon miệng? Dưới đây là vài bữa ăn kiểu mẫu:</p>
          <ul>
            <li>Trái cây cùng ăn với cơm hay bắp, bột mì và rau, cải, đậu phụng rang.</li>
            <li>Sữa tươi cùng ăn với trái cây ngọt và cơm, bắp hay bột mì.</li>
          </ul>
          <p>Các món ăn chính nói trên là cần thiết, nhưng cũng cần thêm gia vị như hột cải cay, tiêu ớt, giấm... để giúp bộ máy tiêu hóa làm việc dễ dàng. Nhưng nếu dùng gia vị quá nhiều thành ra có hại, như làm cho bộ máy tiêu hóa nóng, sinh bệnh hay làm kích thích cơ thể.</p>
        </section>

        <section id="cach-nau">
          <h5 class="font-semibold">b) Cách nấu</h5>
          <p>Thức ăn là cần thiết nhưng cách nấu cũng quan trọng; chúng ta đừng có quan niệm sai lầm là đã ăn chay thì nấu thế nào cũng được cả, không cần thiết là phải quan tâm đến. Nếu thức ăn bổ mà không biết cách nấu, thì cũng làm cho nó hết bổ, và có khi làm hại bộ máy tiêu hóa nữa. Dưới đây là vài điều nên nhớ trong khi nấu ăn:</p>
          <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
            <ul class="mb-0">
              <li>Không nên chiên xào nhiều quá, vì sinh tố B và C sẽ bị dầu sôi tiêu diệt và các món có nhiều dầu làm cho bao tử mệt.</li>
              <li>Nên ăn đồ nướng, nhất là nướng không có thoa dầu.</li>
              <li>Khi nấu hay luộc phải nên đậy nắp để sinh tố khỏi bị mất và nên đổ ít nước để chất bổ khỏi loãng. Và nước luộc ấy rất tốt, không nên đổ đi, vì nó chứa rất nhiều chất bổ và sinh tố.</li>
            </ul>
          </div>
        </section>

        <section id="giam-thit-ca">
          <h5 class="font-semibold">c) Giảm thịt cá dần dần trong những ngày ăn mặn</h5>
          <p>Đối với những người ăn chay kỳ thì khi ăn mặn, nên mua những vật người ta làm sẵn, hoặc làm giảm bớt số lượng thịt cá, ăn nhiều rau cải, sữa, tạm dùng trứng gà, trứng vịt không tượng con.</p>
          <p>Khi đã tinh tấn về mặt tinh thần, không nên ăn trứng gà, trứng vịt, vì trứng cũng là một sinh vật sắp nảy nở.</p>
        </section>
      </section>

      <section id="nhung-dieu-can-tranh">
        <h4 class="text-lg font-semibold">3. Những điều cần tránh</h4>

        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100"><strong>a) Không nên kiêu mạn.</strong> Người có phúc duyên ăn chay được dễ dàng, không nên sanh lòng kiêu mạn, tự cho mình là hơn người, và khinh người ăn mặn. Làm như thế đã sanh ác cảm với người mà lại còn làm tổn âm đức của mình nữa.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100"><strong>b) Không nên háo danh.</strong> Có người mới bước vô đường đạo, đã ăn trường trai ngay, cốt để người khác khen ngợi. Ăn chay như thế là do lòng háo danh mà ra; hành động này không có lợi cho sự tu hành mà lại còn có hại: khi không còn ai khen ngợi nữa, thì không thấy hứng thú để tiếp tục ăn chay nữa.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100"><strong>c) Không nên ép xác.</strong> Có người tưởng lầm rằng: ăn chay là để hành hạ thân xác, nên cố ăn một cách cực khổ, như chỉ ăn ròng rã tương rau, muối sả... từ năm này sang năm khác. Ăn như thế thì sẽ hao mòn thân xác mà chết yểu trước khi thành đạo.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100"><strong>d) Không nên giả mặn.</strong> Có nhiều bà nội trợ muốn trổ tài khéo léo của mình bằng cách nấu chay mà giả mặn, rồi đặt tên món ăn mặn, hay làm ra những hình thức giống như đồ mặn. Thí dụ như: củ hủ cao, củ hủ dừa kho mà gọi là cá tra kho; bắp chuối luộc trộn giấm và rau răm, lại đặt tên thịt gà xé phay; bí đao xắt mỏng cặp gắp nướng ăn với bánh hỏi mà lại đặt tên là thịt bò lụi v.v... Như thế, là đã vô tình xúi giục người ăn chay nghĩ đến món mặn, miệng ăn rau dưa, mà lòng tưởng nhớ đến thịt cá, làm trò cười cho thế gian.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100"><strong>đ) Không được quên ngày chay.</strong> Không nên khinh thường quên những ngày chay mà mình đã phát nguyện, dù gặp trường hợp bất thường như đi lỡ đường, làm việc quá buổi, lúc đói quá mà không có sẵn thức ăn chay.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0"><strong>e) Không nên dùng ngũ vị tân.</strong> Ngũ vị tân là: hành, hẹ, tỏi, nén, hưng cừ — không nên dùng, vì các thứ này đã hôi, lại có nhiều chất kích thích lòng dục vọng.</p>
        </div>
      </section>
    </section>

    <!-- IV. LỢI ÍCH CỦA SỰ ĂN CHAY -->
    <section id="loi-ich">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. Lợi Ích Của Sự Ăn Chay</h3>

      <section id="loi-ich-ca-nhan">
        <h4 class="text-lg font-semibold">1. Phương diện cá nhân</h4>
        <p>Những lợi ích của sự ăn chay đối với cá nhân rất lớn lao. Người ăn chay không những thâu hoạch được những lợi ích trong hiện tiền mà cả trong đời sống tương lai nữa.</p>

        <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <h5 class="mt-0 mb-2 font-bold">a) Trong hiện tại</h5>
          <ul class="mb-0">
            <li>Tiết kiệm được tài chánh, vì đồ ăn chay rẻ hơn đồ ăn mặn nhiều.</li>
            <li>Tiết kiệm được ngày giờ và công lao nấu nướng, vì mướp, dưa, bầu bí, khoai... cắt rửa mau và ít tốn nước; và khi kho, luộc, nấu nướng lại mau chín, ít hao củi.</li>
            <li>Thân thể được mạnh khỏe; tinh thần được nhẹ nhàng, trong sạch; trí tuệ được minh mẫn dễ tu thiền quán.</li>
          </ul>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <h5 class="mt-0 mb-2 font-bold">b) Trong đời sau</h5>
          <p class="mb-0">Không chịu quả báo giết hại, nên không phải trả nợ máu thịt, khỏi phải thường mạng. Nếu trở lại làm người, thì được trường thọ.</p>
        </div>
      </section>

      <section id="loi-ich-xa-hoi">
        <h4 class="text-lg font-semibold">2. Phương diện xã hội, nhân loại, chúng sanh</h4>
        <p>Ăn chay không những có lợi ích cho cá nhân, mà còn cho xã hội, nhân loại, chúng sanh nữa. Nếu ai ai cũng ăn chay thì thế giới Ta-bà này làm gì có tiếng rên siết vì chết oan của loài vật và tiếng than thở, đau đớn của người vì nạn tương tàn, tương sát.</p>
        <p>Một nhà Bác học có nói: <em>"Muốn thế giới hòa bình, bắt đầu trong bữa ăn con người phải không có một chút máu hay một miếng thịt cá nào cả"</em>.</p>
        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100">Câu nói đầy đạo đức này cũng đồng một ý nghĩa với câu nói của Cổ nhân:</p>
          <p class="mb-0 text-center font-semibold"><em>"Nhất thế chúng sanh vô sát nghiệp,<br/>Hà sầu thế giới động đao binh".</em><br/>(Nếu tất cả chúng sanh không sát hại lẫn nhau, thì sợ gì thế giới có giặc giã).</p>
        </div>
        <p><strong>Người ăn chay là một chiến sĩ của Hòa bình.</strong> Thật vậy người ăn chay, với một tâm từ bi vô lượng, coi muôn loài là mình, mình là muôn loài, không giết hại sanh vật để thỏa mãn dục vọng, không bao giờ nỡ tâm tàn sát đồng loại để đạt mục đích lợi danh.</p>
        <p>Nếu trong xã hội, ai ai cũng ăn chay, thì đâu có những chuyện gây gổ, đánh đập nhau, như chúng ta thường thấy hằng ngày.</p>
        <p>Nếu trong một nước, ai ai cũng ăn chay thì không có chuyện mạnh hiếp yếu, khôn lấn dại, chém giết lẫn nhau để thỏa lòng dục vọng.</p>
        <p>Nếu trong thế giới, ai ai cũng ăn chay, thì thế giới này là Cực lạc thế giới.</p>
      </section>
    </section>
  </section>

  <!-- C. KẾT LUẬN -->
  <section id="ket-luan">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">C. KẾT LUẬN</h2>
    <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">MỌI NGƯỜI DÙ PHẬT TỬ HAY KHÔNG ĐỀU NÊN ĂN CHAY</h3>
    <p>Như chúng ta đã thấy ở các đoạn trên, xét về phương diện khoa học hay Phật học, về phương diện cá nhân hay đoàn thể, về hiện tại hay tương lai, sự ăn chay đều có rất nhiều lợi ích.</p>
    <p>Vì vậy, những người không phải là Phật tử, nếu muốn thân thể được mạnh khỏe, tinh thần được khinh an, trí tuệ được minh mẫn để học tập; nếu muốn tiết kiệm được tài chánh, công lao, thời giờ, nếu muốn gia đình được hòa thuận yên vui, thì hãy mau mau làm quen với những thức ăn chay.</p>
    <p>Còn những ai đã là Phật tử, đã nguyện theo bước chân của đức Từ Phụ, thì phải thực hành phép ăn chay, để lòng Từ bi được mở rộng, tinh thần bình đẳng được lan xa, trí tuệ được tỏ ngộ, đạo quả được chóng viên thành.</p>
    <p>Vẫn biết, nói dễ mà làm khó; nhưng một người tiến bộ và có thiện chí, khi đã thấy rõ những điều lợi ích, thì dù khó bao nhiêu cũng quyết thực hành cho được. Sự thực hành ấy không phải làm ngay trong một lần, mà phải tuần tự tiến bước.</p>
    <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
      <p class="mb-0 font-semibold">Nếu chúng ta biết áp dụng phép ăn chay đúng như những cách thức đã nói ở trên, thì thiết tưởng không có gì là khó lắm. Điều quan trọng nhất là chúng ta thật có thiện chí hay không mà thôi.</p>
    </div>
  </section>

</div>
`,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/bai-thu-9-an-chay/Zen_Vegetarianism.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/E1aA_FAvA5g',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3k4EyUFGJ7f5RsV8HEN4Jt?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Ăn Chay',
    passPercentage: 70,
    questions: [
      {
        question: 'Theo nội dung bài viết, mục đích chính của việc ăn chay đối với người Phật tử là gì?',
        options: {
          a: 'Để thay đổi khẩu vị và thử những món ăn mới lạ.',
          b: 'Là một phương pháp tu hành để tiến trên đường Đạo.',
          c: 'Để tuân thủ tuyệt đối lời dặn của các bác sĩ về sức khỏe.',
          d: 'Để chứng tỏ bản thân là người có danh tiếng và đạo đức hơn người.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Bài viết khẳng định ăn chay không phải là một sự hiếu kỳ hay cách đổi món ăn cho ngon miệng.',
          b: 'Đúng. Ăn chay là một phương pháp tu hành mà Phật chế ra cho các tín đồ thực hành để tiến trên đường Đạo.',
          c: 'Sai. Bài viết nhấn mạnh ăn chay không phải là cách kiêng cữ theo lời dặn của bác sĩ.',
          d: 'Sai. Bài viết nêu rõ ăn chay đối với người Phật tử không phải là một sự hiếu danh.',
        },
      },
      {
        question: 'Tại sao trong thời kỳ đầu, Đức Phật lại cho phép các đệ tử dùng \'ngũ tịnh nhục\'?',
        options: {
          a: 'Vì thời kỳ đó chưa có đủ các loại rau củ và thực phẩm thảo mộc.',
          b: 'Vì thịt của những con thú tự chết không vi phạm giới sát.',
          c: 'Vì ngũ tịnh nhục được coi là thực phẩm bổ dưỡng nhất thời bấy giờ.',
          d: 'Vì trình độ của các đệ tử lúc đó còn thấp kém, chưa thể thực hành đúng lý Đạo ngay lập tức.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Tài liệu không hề đề cập đến việc thiếu rau củ trong thời kỳ đầu.',
          b: 'Sai. Mặc dù thịt thú tự chết thuộc về \'ngũ tịnh nhục\', nhưng lý do chính Đức Phật cho phép là vì trình độ đệ tử chưa cao.',
          c: 'Sai. Không có chi tiết nào nói ngũ tịnh nhục là thực phẩm bổ dưỡng nhất.',
          d: 'Đúng. Phật cho phép vì trình độ đệ tử sơ cơ còn thấp kém, chưa thể lãnh thọ giáo pháp Đại thừa và thực hành đúng lý ngay.',
        },
      },
      {
        question: 'Quan niệm \'Vật dưỡng nhơn\' bị bài viết phê phán như thế nào?',
        options: {
          a: 'Là cách duy nhất để con người có đủ sức khỏe và trí tuệ.',
          b: 'Là một quy luật tự nhiên tất yếu của sự sinh tồn.',
          c: 'Là một quan niệm sai lầm nảy sinh từ sự ích kỷ và ngạo mạn của con người.',
          d: 'Là một chân lý khoa học về chuỗi thức ăn trong tự nhiên.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Quan niệm này bị bài viết phê phán, không phải là cách để có sức khỏe.',
          b: 'Sai. Bài viết hoàn toàn không coi đó là quy luật tất yếu.',
          c: 'Đúng. Bài viết chỉ rõ đây là một quan niệm rất sai lầm do sự ích kỷ và ngạo mạn của con người sinh ra.',
          d: 'Sai. Bài viết bác bỏ quan niệm này chứ không coi đó là chân lý khoa học.',
        },
      },
      {
        question: 'Về phương diện vệ sinh, bài viết đưa ra dẫn chứng gì để chứng minh thịt động vật có hại?',
        options: {
          a: 'Thịt cá để lâu ngày dễ sình thối, hôi tanh và chứa nhiều mầm bệnh như lao, sán.',
          b: 'Thịt cá khiến con người trở nên hiếu chiến và nóng nảy hơn.',
          c: 'Nấu thịt cá tốn nhiều thời gian và nhiên liệu hơn nấu rau cải.',
          d: 'Thịt động vật thiếu các loại đạm cần thiết cho sự phát triển của não bộ.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Bằng chứng cụ thể là thịt cá để lâu ngày thì sình, ương, hôi tanh và thú vật thường mắc các bệnh như lao, thương hàn, sán.',
          b: 'Sai. Phương diện vệ sinh trong bài không đề cập đến việc khiến con người hiếu chiến.',
          c: 'Sai. Việc tiết kiệm thời gian và nhiên liệu được xếp vào lợi ích hiện tại, không phải chứng minh sự có hại về mặt vệ sinh.',
          d: 'Sai. Bài viết không nói thịt thiếu đạm, mà còn chỉ ra việc ăn thực phẩm nhiều chất đạm làm con người không đủ sức chịu nhọc.',
        },
      },
      {
        question: 'Chương trình ăn \'Thập trai\' được định nghĩa là gì?',
        options: {
          a: 'Chỉ ăn mười loại thực phẩm thảo mộc nhất định trong ngày chay.',
          b: 'Ăn chay 10 ngày trong mỗi tháng theo các ngày âm lịch quy định.',
          c: 'Ăn chay vào 10 ngày cuối cùng của mỗi quý.',
          d: 'Ăn chay liên tục trong 10 tháng mỗi năm.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Thập trai không liên quan đến việc giới hạn 10 loại thực phẩm.',
          b: 'Đúng. Thập trai là ăn 10 ngày chay trong tháng theo các ngày âm lịch nhất định (mồng 1, 8, 14, rằm...).',
          c: 'Sai. Không phải là ăn chay vào 10 ngày cuối cùng của quý.',
          d: 'Sai. Ăn 10 tháng mỗi năm không đúng với định nghĩa của Thập trai trong tài liệu.',
        },
      },
      {
        question: 'Điều gì cần tránh khi chế biến món chay theo lời khuyên của bài viết?',
        options: {
          a: 'Nấu đồ chay nhưng giả hình thức và đặt tên theo các món mặn.',
          b: 'Sử dụng nước luộc rau để nấu canh vì lo ngại ít chất dinh dưỡng.',
          c: 'Sử dụng quá nhiều các loại đậu và hạt trong bữa ăn.',
          d: 'Thay đổi món ăn thường xuyên để tránh cảm giác nhàm chán.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Bài viết khuyên tránh việc nấu đồ chay mà giả mặn vì điều này vô tình làm miệng ăn rau dưa mà lòng lại tưởng nhớ đến thịt cá.',
          b: 'Sai. Bài viết khuyên giữ lại nước luộc vì nó chứa rất nhiều chất bổ và sinh tố.',
          c: 'Sai. Bài viết khuyến khích ăn các loại đậu, hạt vì chúng rất hợp vệ sinh và bổ dưỡng.',
          d: 'Sai. Việc thay đổi món ăn là điều được bài viết khuyến khích thực hiện để ăn được lâu dài mà không ngán.',
        },
      },
      {
        question: 'Tại sao việc \'ép xác\' khi ăn chay lại bị coi là sai lầm?',
        options: {
          a: 'Vì nó khiến người khác nhìn vào cảm thấy sợ hãi việc đi theo Đạo.',
          b: 'Vì đồ ăn khổ hạnh không đủ sinh tố để nuôi dưỡng trí tuệ.',
          c: 'Vì nó làm hao mòn thân thể, có thể gây chết yểu trước khi thành đạo.',
          d: 'Vì ăn như vậy tốn nhiều thời gian chế biến các món tương rau.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Tài liệu không hề nói đến việc làm người khác sợ hãi.',
          b: 'Sai. Dù đồ khổ hạnh có thể thiếu chất, nhưng hậu quả trực tiếp được đề cập là hao mòn thân xác.',
          c: 'Đúng. Ép xác ăn cực khổ ròng rã tương rau, muối sả sẽ làm hao mòn thân xác mà chết yểu trước khi thành đạo.',
          d: 'Sai. Chế biến tương rau, muối sả không tốn nhiều thời gian.',
        },
      },
      {
        question: 'Trong phương pháp nấu ăn, tại sao không nên chiên xào quá nhiều?',
        options: {
          a: 'Vì sử dụng nhiều dầu mỡ làm tăng chi phí kinh tế cho gia đình.',
          b: 'Vì các món chiên xào dễ gây kích thích dục vọng hơn món luộc.',
          c: 'Vì chiên xào làm món ăn mất đi mùi vị tự nhiên của thảo mộc.',
          d: 'Vì nhiệt độ cao của dầu sôi tiêu diệt các sinh tố B và C và gây mệt mỏi cho bao tử.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Yếu tố chi phí không được đề cập làm lý do để tránh chiên xào.',
          b: 'Sai. Ngũ vị tân mới là thứ kích thích dục vọng, không phải các món chiên xào.',
          c: 'Sai. Bài viết không nói về việc mất mùi vị tự nhiên.',
          d: 'Đúng. Bài viết lưu ý sinh tố B và C sẽ bị tiêu diệt bởi dầu sôi, và các món có nhiều dầu sẽ làm cho bao tử mệt.',
        },
      },
      {
        question: 'Câu nói \'Nhất thế chúng sanh vô sát nghiệp, Hà sầu thế giới động đao binh\' mang ý nghĩa gì trong bài?',
        options: {
          a: 'Nếu không có nghiệp sát sinh thì thế giới sẽ không có chiến tranh và loạn lạc.',
          b: 'Chiến tranh là điều không thể tránh khỏi dù con người có ăn chay hay không.',
          c: 'Mọi người phải cùng nhau chế tạo vũ khí để bảo vệ hòa bình thế giới.',
          d: 'Chỉ những ai đi lính mới phải lo lắng về việc thế giới có giặc giã.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Câu này được dịch nghĩa trong bài là: \'Nếu tất cả chúng sanh không sát hại lẫn nhau, thì sợ gì thế giới có giặc giã\'.',
          b: 'Sai. Câu nói mang ý nghĩa ngược lại: có thể ngăn ngừa chiến tranh nếu không có nghiệp sát.',
          c: 'Sai. Không có đề cập nào đến việc chế tạo vũ khí.',
          d: 'Sai. Tài liệu không nói chỉ người đi lính mới phải lo lắng.',
        },
      },
      {
        question: 'Theo văn bản, \'Ngũ vị tân\' bao gồm những loại nào và tại sao cần tránh?',
        options: {
          a: 'Muối, đường, bột ngọt, dầu ăn, nước tương; vì chúng không tinh khiết.',
          b: 'Hành, hẹ, tỏi, nén, hưng cừ; vì chúng có mùi hôi và kích thích lòng dục.',
          c: 'Tiêu, ớt, giấm, mù tạt, gừng; vì chúng làm hỏng bộ máy tiêu hóa.',
          d: 'Năm loại thịt động vật quý hiếm; vì chúng vi phạm giới sát nghiêm trọng.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Đây là các loại gia vị thông thường, không phải ngũ vị tân.',
          b: 'Đúng. Ngũ vị tân gồm hành, hẹ, tỏi, nén, hưng cừ. Cần tránh vì chúng có mùi hôi và có chất kích thích lòng dục vọng.',
          c: 'Sai. Tiêu, ớt, giấm được nhắc đến như gia vị cần thiết nhưng không nên dùng quá nhiều, chứ không thuộc nhóm ngũ vị tân.',
          d: 'Sai. Ngũ vị tân là các gia vị thực vật, không phải là thịt động vật.',
        },
      },
    ],
  },
}

export default lesson
