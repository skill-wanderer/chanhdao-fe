import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-khoa-1-bai-7-tho-phat-lay-phat-cung-phat',
  slug: 'bai-thu-7-tho-phat-lay-phat-cung-phat',
  title: 'Bài Thứ 7 - Thờ Phật, Lạy Phật, Cúng Phật',
  type: 'article',
  status: 'published',
  order: 7,
  durationMinutes: 45,
  content: '<p>Nội dung bài học đang được biên soạn.</p>',
  createdAt: '2026-03-20',
  updatedAt: '2026-03-26',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/bai-thu-7-tho-phat-lay-phat-cung-phat/infographic.png',
      tableOfContents: [
        { id: 'mo-de', label: 'A. Mở Đề' },
        { id: 'chanh-de', label: 'B. Chánh Đề' },
        { id: 'tho-phat', label: 'I. Thờ Phật', indent: 1 },
        { id: 'phat-dang-ton-tho', label: '1. Phật là bậc đáng tôn thờ', indent: 2 },
        { id: 'tho-phat-dung-y-nghia', label: '2. Thờ Phật đúng ý nghĩa', indent: 2 },
        { id: 'tho-duc-phat-nao', label: '3. Phải thờ Đức Phật nào?', indent: 2 },
        { id: 'cach-thuc-tho-phat', label: '4. Cách thức thờ Phật', indent: 2 },
        { id: 'lay-phat', label: 'II. Lạy Phật', indent: 1 },
        { id: 'y-nghia-lay-phat', label: '1. Ý nghĩa lạy Phật', indent: 2 },
        { id: 'lay-phat-dung-y-nghia', label: '2. Lạy Phật đúng ý nghĩa', indent: 2 },
        { id: 'bon-phep-lay', label: '3. Bốn phép lạy (thuộc về lý)', indent: 2 },
        { id: 'cung-phat', label: 'III. Cúng Phật', indent: 1 },
        { id: 'y-nghia-cung-phat', label: '1. Ý nghĩa về cúng Phật', indent: 2 },
        { id: 'cung-phat-voi-gi', label: '2. Phải cúng Phật với những gì?', indent: 2 },
        { id: 'nam-mon-dieu-huong', label: '3. Năm món diệu hương cúng Phật', indent: 2 },
        { id: 'cung-duong-phap-bao', label: '4. Cúng dường Pháp bảo', indent: 2 },
        { id: 'cung-duong-tang-bao', label: '5. Cúng dường Tăng bảo', indent: 2 },
        { id: 'ket-luan', label: 'C. Kết Luận' },
        { id: 'loi-ich', label: '1. Lợi ích của sự thờ lạy và cúng Phật', indent: 1 },
        { id: 'khuyen-phat-tam', label: '2. Khuyên phát tâm chánh tín', indent: 1 },
      ],
      readingContent: `
<div class="prose prose-lg max-w-none dark:prose-invert">

  <!-- A. MỞ ĐỀ -->
  <section id="mo-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">A. MỞ ĐỀ</h2>
    <p>Xưa nay, những bậc có công ơn lớn đối với Quốc gia, xã hội đều được tôn sùng, ngưỡng mộ. Sự tôn sùng ngưỡng mộ này do nhiều nguyên nhân, nhưng nguyên nhân chính là lòng tri ân và sự mong muốn được noi theo gương sáng.</p>
    <p>Tục ngữ có câu: <em>"Ăn trái nhớ kẻ trồng cây, uống nước phải nhớ người đào giếng"</em>. Lòng tri ân là một đức tánh quý báu, mà những người có chút công bằng không thể thiếu được. Một xã hội gồm những phần tử phi ân bội nghĩa, ăn cháo đá bát, không có thể tồn tại được lâu dài, vì nó làm chán nản những kẻ có lòng, và làm khô cạn nguồn hy sinh. Vả lại, nếu con người thấy điều tốt, người hiền mà chẳng hâm mộ, thấy điều xấu, người ác mà không tránh xa, thì con người ấy là người thiếu căn bản đạo đức, thiếu mầm thiện, khó có thể tiến bộ.</p>
    <p>Vì những lý do trên, ta thấy trên thế giới, bất luận ở phương trời nào, dân tộc nào, thời đại nào, hễ kẻ có công với làng xóm, thì được làng xóm tôn thờ, kẻ có công với quốc gia, dân tộc, thì được quốc gia, dân tộc tôn thờ, kẻ có công đức với nhân loại, thì được nhân loại sùng thượng.</p>
    <p>Sự thờ cúng trong các tôn giáo cũng không ra ngoài những lý do đã kể trên. Nhưng ở các tôn giáo, sự thờ cúng có tính cách thường trực và thiết tha hơn, vì các vị Giáo chủ là những bậc có công ơn lớn đối với nhân loại và là những gương sáng mà tín đồ cần đặt luôn luôn ở trước mắt để soi sáng đời mình. Trong các vị Giáo chủ, thì Ðức Phật là vị được nhiều tín đồ sùng mộ nhất. Sự sùng mộ ở đây biểu hiện trong sự thờ, lạy và cúng Phật.</p>
  </section>

  <!-- B. CHÁNH ĐỀ -->
  <section id="chanh-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">B. CHÁNH ĐỀ</h2>

    <!-- I. THỜ PHẬT -->
    <section id="tho-phat">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Thờ Phật</h3>

      <section id="phat-dang-ton-tho">
        <h4 class="text-lg font-semibold">1. Phật là bậc đáng tôn thờ</h4>
        <p>Phật là những bậc đã dày công tu luyện phước đức và trí tuệ, cho nên đã được hoàn toàn sáng suốt và có đầy đủ đức hạnh cao quý. Các Ngài đã dùng đức và trí ấy để dẫn dắt chúng sanh ra ngoài biển khổ luân hồi, và đưa đến địa vị sáng suốt an vui. Trong công việc độ sanh ấy, các Ngài lại không bao giờ thối chuyển ngã lòng mặc dù gặp trở lực khó khăn. Các Ngài đã nguyện độ cho toàn thể chúng sanh, cho đến khi nào không còn một chúng sanh nào để độ nữa mới thôi. Thật là đúng với câu: <em>"Tự giác, giác tha, giác hạnh viên mãn"</em>.</p>
        <p>Một bậc có đủ ba đức tính quý báu là <strong>Bi, Trí, Dũng</strong>, ba đức tính căn bản mà một con người muốn được toàn thiện, toàn mỹ, toàn chân, không thể thiếu được. Một bậc siêu phàm xuất chúng, có những lời dạy quý báu, những cử chỉ cao thượng, những hành động sáng suốt, một đời sống gương mẫu như Phật, mà chúng ta không tôn thờ, thì còn tôn thờ ai nữa?</p>
      </section>

      <section id="tho-phat-dung-y-nghia">
        <h4 class="text-lg font-semibold">2. Nhưng chúng ta phải thờ Phật như thế nào mới đúng ý nghĩa</h4>
        <p>Như trên đã nói, chúng ta thờ Phật là để tỏ lòng tri ân của chúng ta đối với một Vị đã có ân đức lớn với nhân loại. Chúng ta thờ Phật là để có luôn luôn ở trước mặt một gương mẫu sáng suốt trọn lành để khuôn rập tư tưởng, lời nói và hành động của chúng ta được chân, thiện, mỹ như Phật vậy.</p>
        <p>Người ta thường nói: <em>"Gần mực thì đen, gần đèn thì sáng"</em>. Chúng ta thờ Phật là muốn luôn luôn được có bên mình ngọn đèn trí tuệ của Ngài, cái hương từ bi của Ngài, để được sáng lây, thơm lây, chứ không phải chúng ta có mục đích cầu cạnh Ngài để Ngài ban phước, trừ họa, để Ngài che chở cho chúng ta mua may bán đắt một cách bất lương, hay để chúng ta dựa vào thế lực của Ngài, tha hồ làm những điều bất chính.</p>
        <div class="my-6 rounded-lg border-l-4 border-red-400 bg-red-50/60 p-5 dark:border-red-600 dark:bg-red-900/20">
          <p class="mb-0 font-semibold text-red-800 dark:text-red-300">Nếu chúng ta thờ Ngài với mục đích sai lạc như vừa nói ở trên, thì không những chúng ta đã phỉ báng Ðức Phật, mà chúng ta còn tự tạo tư tưởng không tốt cho chúng ta nữa.</p>
        </div>
      </section>

      <section id="tho-duc-phat-nao">
        <h4 class="text-lg font-semibold">3. Phải thờ Ðức Phật nào?</h4>
        <p>Ðức Phật nào cũng có nghĩa vô lượng quang, vô lượng thọ bao la cùng khắp và công đức tu hành phước trí vô lượng vô biên cả; nên hễ thờ một Ðức Phật là thờ tất cả các Ðức Phật.</p>
        <p>Nhưng chúng ta cũng nên tùy theo thời kỳ giáo hóa của mỗi Ðức Phật và pháp môn tu hành mà thờ cho xứng lý, hợp cơ. Thí dụ như hiện nay, chúng ta ở vào thời kỳ giáo hóa của Ðức Phật Thích Ca Mâu Ni, thì lẽ cố nhiên, chúng ta phải thờ Ngài trước hết.</p>
        <p>Nếu tín đồ nào tu về <em>"Tịnh độ tông"</em>, chuyên về pháp môn <em>"Trì danh niệm Phật"</em> để cầu vãng sanh, thì tín đồ ấy phải thờ Ðức Phật A Di Ðà.</p>
        <p>Hoặc giả, nếu Phật tử muốn thờ tất cả Phật trong ba đời, thì nên thờ Ðức Phật Thích Ca, Ðức A Di Ðà, và Ðức Di Lặc, gọi là thờ <strong>"Tam thế Phật"</strong>.</p>
      </section>

      <section id="cach-thuc-tho-phat">
        <h4 class="text-lg font-semibold">4. Cách thức thờ Phật</h4>
        <p>Như vậy trong nhà tín đồ, nếu muốn thờ tượng Phật, thì nhiều nhất là ba vị. Và nên nhớ rằng, trong khi thờ Tam thế Phật, phải sắp đặt chung một bàn. Nếu tượng lồng kiếng thì nên treo ngay thẳng, không được cái cao, cái thấp, cũng không được cái to, cái bé; còn như tượng gỗ, tượng đồng tượng sành, thì để ngang hàng đồng bậc, không nên để từng trên, cấp dưới. Bàn thờ Phật phải đặt chính giữa nhà, bàn thờ ông bà thì nên thờ một bên. Nếu nhà lầu thì thờ Phật ở tầng trên.</p>
        <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Tại bàn thờ Phật không nên để tạp vật nào khác, ngoài <strong>bình bông, lư hương, chân đèn và dĩa quả</strong>. Những vật này mỗi ngày đều chăm sóc lau quét sạch sẽ luôn.</p>
        </div>
        <p>Lần đầu tiên thỉnh tượng Phật, tín đồ phải làm lễ thượng tượng, cũng gọi là <strong>lễ an vị Phật</strong>. Lễ này không bắt buộc phải tổ chức linh đình, chỉ nên làm một cách đơn giản, nhưng không kém vẻ trang nghiêm và tinh khiết. Muốn được hai đặc điểm ấy, chủ nhà phải dọn mình sạch sẽ: ăn chay, giữ giới và mời thêm thiện hữu trí thức đến hộ niệm một thời kinh.</p>
        <p>Và bắt đầu từ ngày làm lễ an vị Phật trở đi, tất cả mọi người trong nhà, mỗi ngày ra vô trông thấy tượng Phật, nên nghĩ nhớ đến đức hạnh cao cả của Ngài mà chỉnh đốn lại thân tâm mình. Mỗi ngày đều lo cải thiện lại sự cư xử với nhau, đối nội cũng như đối ngoại, phải luôn luôn thấm nhuần tinh thần từ bi, bác ái và bình đẳng. Như thế mới xứng đáng với danh nghĩa của một gia đình có thờ Phật.</p>
        <p>Thờ phụng lâu năm, tượng Phật bị hư rách, không thể sơn phết hay sửa chữa lại được, thì nên thay đổi tượng mới. Khi có tượng mới rồi thì tượng cũ phải dâng vào chùa chờ dịp nhập tháp, chớ không nên bạ đâu bỏ đó, mà mang tội.</p>
      </section>
    </section>

    <!-- II. LẠY PHẬT -->
    <section id="lay-phat">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Lạy Phật</h3>

      <section id="y-nghia-lay-phat">
        <h4 class="text-lg font-semibold">1. Ý nghĩa lạy Phật</h4>
        <p>Ngày xưa, khi Ðức Phật còn tại thế, các đệ tử từ vua quan cho đến dân chúng, mỗi lần được may mắn gặp Ðức Phật Thích Ca, đều cúi xuống ôm chân Phật và đặt trán mình lên chân Ngài để tỏ lòng ngưỡng mộ, tôn thờ một bậc tối thượng: Bi, Trí siêu phàm. Cử chỉ ấy là một cử chỉ vô cùng khiêm tốn, nhu thuận và hoàn toàn tin cậy đối với Ðức Phật.</p>
        <p>Sau khi Phật nhập diệt, toàn thể tín đồ vẫn xem Ngài như còn tại thế, và cái cử chỉ cúi xuống ôm chân Phật vẫn còn tiếp nối tồn tại cho đến ngày nay và muôn ngàn năm sau. Cái cử chỉ ấy chỉ có cái công dụng làm cho tín đồ bao giờ cũng hình dung như Ðức Phật còn ngồi trước mặt mình để chứng giám cho tấm lòng thành kính thiết tha của mình.</p>
      </section>

      <section id="lay-phat-dung-y-nghia">
        <h4 class="text-lg font-semibold">2. Phải lạy Phật như thế nào mới đúng ý nghĩa</h4>
        <p>Ðể cho đúng với ý nghĩa trên, khi lạy Phật phải quỳ xuống, ngửa hai bàn tay ra như đang nâng hai chân Phật và cúi lưng xuống đặt trán mình trên hai lòng bàn tay.</p>
        <p>Trước khi lạy Phật, phải dọn mình cho sạch sẽ: rửa mặt, súc miệng, lau tay chân, thay y phục và mặc áo tràng. Xong xuôi, mới đốt hương ra trước bàn Phật, đứng ngay thẳng, tay chắp để trước ngực, mắt nhìn tượng Phật, tâm tưởng đến các tướng tốt và những đức hạnh cao cả của Ngài, và tỏ bày nguyện vọng chân chánh của mình, xá rồi cắm hương vào lư, đánh tiếng chuông và lạy Phật 3 lạy.</p>
        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <h5 class="mt-0 mb-2 font-bold">Lễ đúng — Thân tâm cung kính lễ</h5>
          <p class="mb-0">Lễ Phật như thế mới đúng phép; trong kinh gọi là <em>"thân tâm cung kính lễ"</em>, nghĩa là thân thì hăng hái tề chỉnh, nghiêm trang, tâm thì hớn hở vui mừng và hết lòng thành kính như gặp được Phật còn tại thế.</p>
        </div>
        <div class="my-6 rounded-lg border-l-4 border-red-400 bg-red-50/60 p-5 dark:border-red-600 dark:bg-red-900/20">
          <h5 class="mt-0 mb-2 font-bold text-red-800 dark:text-red-300">Lễ sai — Ngã mạn lễ</h5>
          <p class="mb-0"><strong>Ngã mạn lễ</strong> là khi lạy Phật mà trong tâm còn ngạo nghễ, kiêu căng, năm vóc (đầu, hai tay, hai chân) không sát đất, đứng lên cúi xuống một cách cẩu thả, qua loa cho có chuyện.</p>
        </div>
        <div class="my-6 rounded-lg border-l-4 border-red-400 bg-red-50/60 p-5 dark:border-red-600 dark:bg-red-900/20">
          <h5 class="mt-0 mb-2 font-bold text-red-800 dark:text-red-300">Lễ sai — Cầu danh lễ</h5>
          <p class="mb-0"><strong>Cầu danh lễ</strong> là khi thấy có đông người thì miệng liền to tiếng dài hơi xưng danh hiệu Phật, thân lại siêng năng lạy không ngừng nghỉ, có ý để cho mọi người khen ngợi. Trái lại khi không có người thì thân lại biếng nhác, tâm lại giải đãi, không muốn lễ bái gì cả.</p>
        </div>
        <p>Hai cách lễ bái trên đây rất giả dối, vậy những ai muốn tiến trên đường đạo, thì phải nên tránh ngay.</p>
      </section>

      <section id="bon-phep-lay">
        <h4 class="text-lg font-semibold">3. Bốn phép lạy (thuộc về lý)</h4>
        <p>Về phương diện Lý, thì có bốn phép lễ:</p>

        <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <h5 class="mt-0 mb-2 font-bold">a) Phát trí thanh tịnh lễ</h5>
          <p class="mb-0">Trong phép này, người hành lễ phải thấu suốt rằng cảnh giới của chư Phật đều tùy tâm hiện bày, nên lạy một Ðức Phật, tức là lạy tất cả Chư Phật, lạy một lạy, tức là lạy tất cả Pháp giới, vì Pháp thân của Phật dung thông.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <h5 class="mt-0 mb-2 font-bold">b) Biến nhập pháp giới lễ</h5>
          <p class="mb-0">Trong phép này, người hành lễ phải tự quán thân, tâm cùng tất cả các pháp, từ hồi nào đến giờ đều không rời pháp giới.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <h5 class="mt-0 mb-2 font-bold">c) Chánh quán lễ</h5>
          <p class="mb-0">Trong phép này, người hành lễ lạy Ðức Phật ngay nơi tự tâm của mình, chứ không duyên với Ðức Phật nào khác, vì tất cả chúng sanh từ xưa đến nay, đều sẵn có Phật tánh viên mãn, bình đẳng và chân giác.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-amber-400 bg-amber-50/60 p-5 dark:border-amber-600 dark:bg-amber-900/20">
          <h5 class="mt-0 mb-2 font-bold text-amber-800 dark:text-amber-300">d) Thật tướng bình đẳng lễ</h5>
          <p>Trong phép lễ này, người hành lễ không thấy có tự, có tha; người và mình là một, phàm và thánh nhứt như, thế và dụng không hai. Do đó, Ngài Văn Thù Sư Lợi Bồ-tát có nói: <em>"Năng lễ, sở lễ tánh không tịch"</em>, nghĩa là người lạy và đấng mình lạy, thể tánh đều vắng lặng. Như thế mới thấu đáo và hợp với lý Bát Nhã.</p>
          <p class="mb-0">Bốn cách lễ này, lý cao khó nghĩ bàn, nếu chẳng phải bực thượng căn, thượng trí, thì không thấu nổi và khó làm theo được.</p>
        </div>
      </section>
    </section>

    <!-- III. CÚNG PHẬT -->
    <section id="cung-phat">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. Cúng Phật</h3>
      <p>Cúng Phật là nói tắt, nói cho đủ nghĩa là cúng dường Tam bảo: Phật, Pháp, Tăng. Cúng dường có nghĩa là cung cấp và nuôi dưỡng.</p>

      <section id="y-nghia-cung-phat">
        <h4 class="text-lg font-semibold">1. Ý nghĩa về cúng Phật</h4>
        <p>Có người sẽ hỏi: Tại sao Ðức Phật đã là bất sanh, bất diệt mà lại còn phải cúng dường?</p>
        <p>Thật ra, Ðức Phật đã thoát ra ngoài vòng sanh tử, thì đâu còn hạn cuộc trong sự ăn uống. Nhưng đây chỉ là một hình thức để ngụ ý rằng, mặc dầu Phật đã nhập diệt lâu rồi, nhưng đối với chúng ta, bao giờ cũng xem như Ngài còn tại thế. Xưa, các đệ tử, các đàn-na thí chủ đã cúng dường Ngài như thế nào, nay chúng ta vẫn tiếp tục cái cử chỉ ấy. Sự cúng dường này làm cho chúng ta gần với Phật, có cảm tưởng như bao giờ cũng ở bên cạnh Phật. Cũng nhơn sự thờ phụng, lễ bái cúng dường này mà chúng ta được kết duyên lành với Phật, hình dung rõ rệt cuộc đời của Ngài để quyết noi theo bước chân của Ngài.</p>
      </section>

      <section id="cung-phat-voi-gi">
        <h4 class="text-lg font-semibold">2. Phải cúng Phật với những gì? (về sự)</h4>
        <p>Vẫn biết rằng chúng ta nên cúng dường Phật để hình dung như Ngài còn tại thế, nhưng nếu chúng ta, mỗi khi cúng Phật, lại bày biện đủ thức ăn uống, nào yến tiệc cỗ bàn linh đình thì thật là phí của, phí công mà lại còn làm sai lạc ý nghĩa sâu xa của sự cúng Phật.</p>
        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Vậy, muốn cúng Phật đúng ý nghĩa thì chỉ nên dùng <strong>hương thơm, đèn sáng, hoa tươi, trái tốt, nước trong</strong> và đôi khi thêm <strong>cơm trắng</strong> là đủ.</p>
        </div>
      </section>

      <section id="nam-mon-dieu-huong">
        <h4 class="text-lg font-semibold">3. Năm món diệu hương để cúng Phật (về lý)</h4>
        <p>Ðoạn trên là nói về sự, về hình tướng bên ngoài khi cúng Phật. Còn về phương diện Lý, thì phải dùng năm món diệu hương để cúng Phật như sau:</p>

        <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <h5 class="mt-0 mb-2 font-bold">a) Giới hương</h5>
          <p class="mb-0">Pháp thân của Phật rất thanh tịnh, nếu về mặt Sự, chúng ta đã dùng hương trầm đốt cúng, thì về mặt Lý, chúng ta cũng phải trì giới cho trang nghiêm thanh tịnh, để cúng dường được đủ cả về Sự và Lý.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <h5 class="mt-0 mb-2 font-bold">b) Ðịnh hương</h5>
          <p class="mb-0">Thân tâm chúng ta bị mê nhiễm và thường loạn động trong mọi hoàn cảnh. Nếu để buông trôi mãi trong tình trạng ấy, thì chúng ta chẳng tu hành gì được. Vậy hằng ngày, hằng giờ, hằng phút, hằng giây, hằng sát-na chúng ta phải cố gắng tập định tĩnh tâm hồn, đừng để cho những ý nghĩ, hành động xấu xa xâm chiếm tâm hồn và làm cho chúng ta phải loạn động. Làm cho tâm tư lắng xuống, như thế gọi là dùng Ðịnh hương cúng Phật.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <h5 class="mt-0 mb-2 font-bold">c) Huệ hương</h5>
          <p>Huệ hương cúng Phật là lúc nào cũng phải lưu tâm vào ba món sáng tỏ: <strong>Văn huệ, Tư huệ, và Tu huệ</strong>.</p>
          <ul>
            <li><strong>Văn huệ</strong> là lắng nghe lời giáo hóa quý báu của chư Phật và Thánh Hiền Tăng.</li>
            <li><strong>Tư huệ</strong> là đem những lời quý báu nói trên ra suy xét, nghiền ngẫm, biết thế nào là phải, thế nào là quấy, cái nào là chân thật, cái nào là luống dối để khỏi lầm lạc vào đường tà.</li>
            <li><strong>Tu huệ</strong> là quyết tâm thực hành những điều mình cho là phải, trừ bỏ những điều mình cho là trái, thực hiện đúng đắn giáo lý sáng suốt của Ðức Phật.</li>
          </ul>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-amber-400 bg-amber-50/60 p-5 dark:border-amber-600 dark:bg-amber-900/20">
          <h5 class="mt-0 mb-2 font-bold text-amber-800 dark:text-amber-300">d) Giải thoát hương</h5>
          <p class="mb-0">Giải thoát hương cúng Phật là quyết tâm phá trừ ngã chấp, nguồn gốc của bao sự đau khổ luân hồi. Chúng ta phải luôn luôn quán vô ngã, không nhận chiếc thân tứ đại này là mình, cũng không nhìn cái nghiệp thức phân biệt là mình, để được thoát ly ra ngoài vòng sanh tử luân hồi.</p>
        </div>

        <div class="my-6 rounded-lg border-l-4 border-red-400 bg-red-50/60 p-5 dark:border-red-600 dark:bg-red-900/20">
          <h5 class="mt-0 mb-2 font-bold text-red-800 dark:text-red-300">e) Giải thoát tri kiến hương</h5>
          <p>Chúng ta đã biết quán vô ngã, để phá trừ ngã chấp thì được giải thoát, song vẫn còn <em>"Pháp chấp"</em> ràng buộc, nên chưa đến được cảnh giới tự tại, vô ngại như Phật. Còn Pháp chấp nghĩa là còn thấy các pháp như: đất, nước, gió, lửa là có thật; còn thấy vui buồn sướng khổ là có thật.</p>
          <p>Khi nào chúng ta thể nhận được rằng tứ đại sở dĩ in tuồng có thật là vì chúng ta còn ở trong nghiệp người, chớ đối với các loài khác, như cá chẳng hạn, thì nước đâu phải là nước như chúng ta quan niệm, mà chính là lâu đài, nhà cửa; đối với loài mọt, thì gỗ đâu phải như chúng ta quan niệm, mà là những thức ăn và nhà ở. Cho đến vui, buồn, sướng, khổ đều là đối đãi với nhau mà sanh ra.</p>
          <p class="mb-0">Vậy thì Pháp cũng như Ngã, đều là giả dối, không có thật, mà chỉ là những danh từ suông mà thôi. Luôn luôn, quán như thế, để được giải thoát ra khỏi sự chấp Pháp, như thế gọi là <em>"Giải thoát tri kiến hương"</em> cúng Phật.</p>
        </div>
      </section>

      <section id="cung-duong-phap-bao">
        <h4 class="text-lg font-semibold">4. Cúng dường Pháp bảo</h4>
        <p>Pháp bảo là các Pháp của Phật đã giảng dạy, để cho chúng sanh y theo đó mà tu hành. Muốn cúng dường Pháp bảo, trước hết chúng ta phải học Kinh, Luật, Luận và nghiên cứu giáo lý để nhận định thế nào là Pháp bảo, là chánh giáo.</p>
        <p>Nếu chúng ta có học thức rộng thì phải nghĩ đến việc phiên dịch các Kinh điển Ngoại ngữ ra Việt ngữ để hoàn thành một bộ Tam Tạng Việt Nam, chúng ta có thể giúp vào việc hoằng pháp lợi sanh bằng sự diễn giảng hay sáng tác những vấn đề có liên quan đến Phật pháp. Nếu chúng ta có tài chánh thì nên xuất tiền ra ấn tống hay xuất bản Kinh điển để phổ thông Pháp bảo. Những việc làm như trên đều là cúng dường Pháp bảo cả.</p>
      </section>

      <section id="cung-duong-tang-bao">
        <h4 class="text-lg font-semibold">5. Cúng dường Tăng bảo</h4>
        <p>Nếu chúng ta đã thành tâm thờ cúng Phật, thì tất nhiên chúng ta phải kính trọng Tăng. Chư Tăng đã thay Phật mà truyền giáo lý của Ngài lại cho chúng ta, lẽ nào chúng ta lại làm ngơ không biết đến?</p>
        <p>Chúng ta không nên phân biệt Tăng ở xứ nào, chùa nào hay phái nào. Vị Tăng nào có đủ giới đức chúng ta cũng sẵn sàng cung phụng cả, như thế gọi là cúng dường Tăng bảo.</p>
      </section>
    </section>
  </section>

  <!-- C. KẾT LUẬN -->
  <section id="ket-luan">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">C. KẾT LUẬN</h2>

    <section id="loi-ich">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Lợi ích của sự thờ lạy và cúng Phật</h3>
      <p>Như các đoạn trên đã nói, chúng ta thờ lạy và cúng Phật là do lòng tri ân sâu xa của chúng ta đối với bậc đã hy sinh tất cả hạnh phúc vĩnh cửu cho chúng sanh; lý do thứ hai của sự thờ lạy và cúng, ấy là để cho chúng ta luôn luôn có trước mắt, trên đầu chúng ta, một cái gương mẫu hoàn toàn chân, thiện, mỹ để noi theo.</p>
      <p>Sự thờ, lạy và cúng Phật, nếu thực hành một cách thành tâm, thiện chí và đúng ý nghĩa, thì sẽ đem lại cho người rất nhiều lợi ích trong hiện tại và vị lai:</p>

      <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
        <h5 class="mt-0 mb-2 font-bold">a) Trong hiện tại</h5>
        <p>Mỗi chúng ta và gia đình chúng ta, bao giờ cũng như sống trong bầu không khí xán lạn, trong ảnh hưởng tốt lành, đạo vị của Chư Phật. Chúng ta luôn luôn sống trong nghiêm chỉnh, trong lễ nghi, trên thuận dưới hòa, vì mỗi ý nghĩ, mỗi cử chỉ, mỗi lời nói của chúng ta đều được đôi mắt sáng suốt của Ðức Phật soi xuống.</p>
        <p class="mb-0">Chúng ta không dám sống bừa bãi, làm xằng, nghĩ quấy khi Ðức Phật đang ngự trị trong gia đình và trong lòng mỗi chúng ta. Chỉ những tâm hồn trống rỗng, không tin tưởng, không tôn thờ một vị thiêng liêng cao cả nào, mới dễ sa ngã, trụy lạc. Cho nên trong gia đình, nếu muốn có hạnh phúc trong hiện tại, muốn sống một đời sống có ý nghĩa, muốn con em đừng bê tha, trụy lạc, thì người gia chủ nên thiết bàn Phật, để ngày ngày lễ bái và cúng dường Ngài và tập cho con em sống một đời sống hiền lương và có đạo vị.</p>
      </div>

      <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
        <h5 class="mt-0 mb-2 font-bold">b) Khi lâm chung</h5>
        <p class="mb-0">Nghiệp lành mà chúng ta đã huân tập trong hằng ngày sẽ cảm ứng đến lòng từ bi vô hạn của Chư Phật và Bồ-tát. Do <em>"Luật đồng thanh tương ứng, đồng khí tương cầu"</em>, Chư Phật và Bồ-tát sẽ phóng quang đến tiếp dẫn giác linh chúng ta về cõi Tịnh độ an vui, tự tại.</p>
      </div>
    </section>

    <section id="khuyen-phat-tam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Khuyên phát tâm chánh tín trong sự thờ, lạy và cúng Phật, Pháp, Tăng</h3>
      <p>Muốn có được kết quả tốt đẹp như trên, chúng ta phải phát tâm chánh tín. Nếu thờ, lạy và cúng dường Tam bảo một cách sai lạc thì không những không ích lợi gì cho ta mà lại còn mang thêm tội, và trôi lăn mãi trong cảnh sanh tử luân hồi. Chúng ta phải tin tưởng một cách mạnh mẽ rằng:</p>
      <ol type="a">
        <li><strong>Ðức Phật</strong> là bậc hoàn toàn giác ngộ, siêu sanh, thoát tử, có năng lực độ thoát chúng sanh khỏi nẻo luân hồi, và xứng đáng làm thầy chúng sanh trong ba cõi. Vì thế nên chúng ta thờ Ngài.</li>
        <li><strong>Phật pháp</strong> là phương thuốc thần diệu, trừ được tất cả nguyên nhân đau khổ của chúng sanh; vì thế cho nên chúng ta thờ Phật pháp.</li>
        <li><strong>Chư Tăng</strong>, nếu có đủ giới hạnh thanh tịnh, là những Thầy sáng, bạn lành của chúng ta. Vì thế, chúng ta kính thờ, thân cận các Ngài để học hỏi đường lối tu hành.</li>
        <li>Tất cả chúng sanh đều có <strong>Phật tánh</strong> sáng suốt, nếu chí tâm tu tập theo Phật pháp, thì chắc chắn sẽ thành Phật.</li>
        <li>Lý <strong>nhân quả</strong> không hề sai chạy, nếu tạo nhân lành thì hưởng quả tốt. Trong các nhân lành, không có nhân lành nào thù thắng hơn là nhân <em>"thờ Phật, lạy Phật, và cúng dường Tam Bảo"</em>, đủ cả Sự và Lý. Vẫn biết rằng thờ, lạy và cúng Phật đủ cả hai phương diện Sự và Lý là khó, nhưng chung quanh chúng ta, ở trong thế giới này sẵn có vô lượng vô biên kim cương Bồ-tát và Hộ pháp thần vương, đồng phát tâm giúp đỡ, hộ niệm cho tất cả những người phát tâm chánh tín thờ cúng Phật, thì lo gì công của chúng ta không tròn, quả của chúng ta không mãn?</li>
      </ol>
    </section>
  </section>

</div>
      `,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/bai-thu-7-tho-phat-lay-phat-cung-phat/The_Art_of_Veneration.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube-nocookie.com/embed/JyBlxXOQuek',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6Go83qlvqSERyE5BIVGLvT?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Thờ Phật, Lạy Phật, Cúng Phật',
    passPercentage: 70,
    questions: [
      {
        question: 'Mục đích chính của việc thờ Phật trong gia đình theo nội dung bài viết là gì?',
        options: {
          a: 'Để thể hiện lòng tri ân và có một gương mẫu sáng suốt để noi theo.',
          b: 'Để trang trí nhà cửa thêm phần trang nghiêm và theo kịp truyền thống.',
          c: 'Để dựa vào thế lực của Ngài nhằm tránh khỏi các tai họa trong đời sống.',
          d: 'Để cầu xin Ngài ban phước lộc và giúp mua may bán đắt.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Tài liệu ghi rõ thờ Phật là để tỏ lòng tri ân và luôn có trước mặt một gương mẫu sáng suốt trọn lành để noi theo.',
          b: 'Sai. Đây không phải là mục đích của việc thờ Phật được nêu trong văn bản.',
          c: 'Sai. Việc thờ phụng hoàn toàn không phải để dựa vào thế lực của Ngài để làm bậy hay tránh họa.',
          d: 'Sai. Tài liệu nhấn mạnh thờ Phật không phải cầu cạnh ban phước, trừ họa hay mua may bán đắt.',
        },
      },
      {
        question: 'Khi thờ \'Tam thế Phật\', các pho tượng cần được sắp xếp như thế nào cho đúng?',
        options: {
          a: 'Đặt tượng lớn ở giữa và các tượng nhỏ hơn ở hai bên.',
          b: 'Treo hoặc đặt các tượng chung một bàn, đảm bảo sự thẳng hàng và đồng bậc.',
          c: 'Sắp xếp theo thứ tự cao thấp dựa trên cấp bậc của các vị Phật.',
          d: 'Mỗi vị Phật phải được thờ ở một bàn riêng biệt trong nhà.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Tài liệu không quy định xếp theo kích thước lớn nhỏ một cách tùy tiện.',
          b: 'Đúng. Trong khi thờ Tam thế Phật, phải sắp đặt chung một bàn, treo ngay thẳng hoặc để ngang hàng đồng bậc.',
          c: 'Sai. Không được phân chia từng trên, cấp dưới đối với các tượng.',
          d: 'Sai. Các tượng phải được sắp đặt chung một bàn thờ.',
        },
      },
      {
        question: 'Thế nào là \'Ngã mạn lễ\' trong các cách lạy Phật?',
        options: {
          a: 'Lạy Phật với tâm thế hớn hở, thân hình tề chỉnh nghiêm trang.',
          b: 'Lạy Phật khi có đông người để được khen ngợi là người siêng năng.',
          c: 'Lạy Phật với tâm kiêu căng, năm vóc không sát đất và làm một cách cẩu thả.',
          d: 'Lạy Phật ngay nơi tự tâm của mình mà không hướng ra bên ngoài.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Đây là cách lễ đúng phép gọi là thân tâm cung kính lễ.',
          b: 'Sai. Đây là Cầu danh lễ.',
          c: 'Đúng. Ngã mạn lễ là khi lạy Phật mà tâm ngạo nghễ, kiêu căng, năm vóc không sát đất, đứng lên cúi xuống cẩu thả.',
          d: 'Sai. Đây là Chánh quán lễ thuộc về phương diện Lý.',
        },
      },
      {
        question: 'Trong năm món diệu hương cúng Phật, \'Huệ hương\' có ý nghĩa là gì?',
        options: {
          a: 'Là việc luôn lưu tâm vào ba món: Văn huệ, Tư huệ và Tu huệ.',
          b: 'Là việc quyết tâm phá trừ ngã chấp để thoát ly sinh tử.',
          c: 'Là việc tập định tĩnh tâm hồn, không để ngoại cảnh làm loạn động.',
          d: 'Là việc trì giới cho trang nghiêm và thanh tịnh.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Huệ hương cúng Phật là lúc nào cũng phải lưu tâm vào ba món sáng tỏ: Văn huệ, Tư huệ, và Tu huệ.',
          b: 'Sai. Đây là ý nghĩa của Giải thoát hương.',
          c: 'Sai. Đây là ý nghĩa của Định hương.',
          d: 'Sai. Đây là ý nghĩa của Giới hương.',
        },
      },
      {
        question: 'Theo văn bản, cách cúng Phật nào dưới đây được coi là đúng ý nghĩa về mặt \'Sự\'?',
        options: {
          a: 'Bày biện yến tiệc, cỗ bàn linh đình để tỏ lòng thành.',
          b: 'Phải cúng đủ mâm cao cỗ đầy vào tất cả các ngày trong tuần.',
          c: 'Chỉ dùng hương thơm, đèn sáng, hoa tươi, trái tốt và nước trong.',
          d: 'Cúng dường bằng các loại vàng bạc và đồ vật quý giá.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Việc bày biện linh đình là phí của, phí công và làm sai lạc ý nghĩa sâu xa.',
          b: 'Sai. Tài liệu không yêu cầu phải mâm cao cỗ đầy.',
          c: 'Đúng. Muốn cúng Phật đúng ý nghĩa thì chỉ nên dùng hương thơm, đèn sáng, hoa tươi, trái tốt, nước trong và đôi khi thêm cơm trắng.',
          d: 'Sai. Tài liệu không yêu cầu cúng bằng vàng bạc hay đồ quý giá.',
        },
      },
      {
        question: 'Phép lạy \'Thật tướng bình đẳng lễ\' thuộc về phương diện nào và có ý nghĩa gì?',
        options: {
          a: 'Thuộc về Sự; nghĩa là lạy Phật để cầu danh tiếng với mọi người xung quanh.',
          b: 'Thuộc về Lý; nghĩa là người lạy và đấng mình lạy có thể tánh vắng lặng, không phân biệt.',
          c: 'Thuộc về Lý; nghĩa là lạy một đức Phật là lạy tất cả chư Phật.',
          d: 'Thuộc về Sự; nghĩa là khi lạy phải quỳ xuống ngửa hai bàn tay.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Cầu danh tiếng là Cầu danh lễ thuộc về mặt Sự khi lễ sai.',
          b: 'Đúng. Thật tướng bình đẳng lễ thuộc về Lý, mang ý nghĩa \'Năng lễ, sở lễ tánh không tịch\', tức người lạy và đấng mình lạy thể tánh đều vắng lặng.',
          c: 'Sai. Đây là ý nghĩa của Phát trí thanh tịnh lễ.',
          d: 'Sai. Đây là cách lạy đúng về mặt Sự, không phải ý nghĩa của phép lạy Thật tướng bình đẳng lễ.',
        },
      },
      {
        question: 'Hành động nào sau đây được coi là cúng dường Pháp bảo?',
        options: {
          a: 'Thường xuyên đến chùa quét dọn và công quả.',
          b: 'Xây dựng chùa chiền khang trang và đúc tượng Phật lớn.',
          c: 'Cung phụng vật thực và thuốc men cho các vị tăng sĩ.',
          d: 'Ấn tống kinh điển hoặc phiên dịch kinh sách ra tiếng Việt.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Đây chỉ là các hoạt động công quả chung, không đặc trưng cho cúng dường Pháp bảo.',
          b: 'Sai. Xây chùa đúc tượng không được nhắc tới trong phần Pháp bảo.',
          c: 'Sai. Đây là cúng dường Tăng bảo.',
          d: 'Đúng. Xuất tiền ấn tống, xuất bản Kinh điển hay phiên dịch Kinh điển ra Việt ngữ là cúng dường Pháp bảo.',
        },
      },
      {
        question: 'Tại sao việc thờ Phật lại đem lại lợi ích cho con em trong gia đình hiện tại?',
        options: {
          a: 'Vì thờ Phật giúp gia đình có tiếng tăm hơn trong cộng đồng làng xóm.',
          b: 'Vì sự hiện diện của tượng Phật tạo ra bầu không khí nghiêm chỉnh, giúp con em tránh sa ngã.',
          c: 'Vì con em sẽ được hưởng phước báo, không cần học hành vẫn thành đạt.',
          d: 'Vì Đức Phật sẽ trực tiếp sửa dạy và trừng phạt con em khi chúng làm sai.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Mục đích không phải để cầu danh hay tiếng tăm.',
          b: 'Đúng. Đức Phật ngự trị tạo ảnh hưởng tốt lành, đạo vị, giúp con em tập nếp sống hiền lương, không sa ngã, trụy lạc.',
          c: 'Sai. Đạo Phật nhấn mạnh luật nhân quả, không có chuyện tự nhiên thành đạt mà không cần nỗ lực.',
          d: 'Sai. Đức Phật không trực tiếp trừng phạt ai.',
        },
      },
      {
        question: 'Đối với tượng Phật đã cũ nát, không thể sửa chữa được, người tín đồ nên xử lý như thế nào?',
        options: {
          a: 'Nên đem bỏ vào thùng rác hoặc để ở những nơi công cộng.',
          b: 'Nên dâng vào chùa để chờ dịp nhập tháp một cách cung kính.',
          c: 'Nên giữ lại trong kho để làm kỷ niệm cho con cháu đời sau.',
          d: 'Nên đốt bỏ ngay tại nhà để giải thoát cho linh hồn tượng.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Bạ đâu bỏ đó sẽ mang tội.',
          b: 'Đúng. Khi tượng cũ hư rách không sửa được thì nên thay mới, tượng cũ dâng vào chùa chờ dịp nhập tháp.',
          c: 'Sai. Tài liệu không hướng dẫn giữ lại làm kỷ niệm.',
          d: 'Sai. Tài liệu không hề đề cập tới việc đốt bỏ tại nhà.',
        },
      },
      {
        question: 'Khái niệm \'Giải thoát tri kiến hương\' nhằm mục đích phá trừ loại chấp trước nào?',
        options: {
          a: 'Phá trừ tâm tham lam về vật chất.',
          b: 'Phá trừ sự biếng nhác trong việc lễ bái.',
          c: 'Phá trừ Pháp chấp (chấp vào tính thực hữu của các pháp).',
          d: 'Phá trừ Ngã chấp (chấp vào cái tôi).',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Không liên quan trực tiếp đến định nghĩa của Giải thoát tri kiến hương.',
          b: 'Sai. Đây không phải là sự phá chấp được nói đến.',
          c: 'Đúng. Giải thoát tri kiến hương là luôn quán chiếu để được giải thoát ra khỏi sự chấp Pháp (Pháp chấp), không bám víu vào suy nghĩ các pháp là có thật.',
          d: 'Sai. Phá trừ Ngã chấp là ý nghĩa của Giải thoát hương.',
        },
      },
    ],
  },
}

export default lesson
