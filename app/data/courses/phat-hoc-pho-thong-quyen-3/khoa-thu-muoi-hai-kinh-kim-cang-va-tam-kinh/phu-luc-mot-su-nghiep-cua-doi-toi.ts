import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">PHỤ LỤC</p>
      <h2 id="mot-su-nghiep-cua-doi-toi" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">MỘT "SỰ NGHIỆP" CỦA ĐỜI TÔI</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="nguyen-nhan" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">I. NGUYÊN NHÂN</h3>
    </div>
    <p class="font-semibold italic opacity-90">Hoài bão một "CÁI MỘNG" trên 25 năm mới hoàn toàn thực hiện</p>
    <p>Trong lúc du học ở Xuân Kinh (1938), đến mùa hè năm 1941, tôi được dịp may dự thính lớp Giáo Lý của Đoàn Thanh Niên Đức Dục, trong một tháng (mỗi đêm giảng 2 giờ), do Bác sĩ Lê Đình Thám đảm trách (lớp này hiện nay còn Thượng Tọa Thích Minh Châu và Đạo hữu Võ Đình Cường v.v...) Tôi thích thú quá! Vì thấy bác sĩ đem phương pháp giảng giải của Tây phương mà giải thích, trình bày một triết lý cao siêu của Đông phương. Sự phối hợp cả Âu và Á làm cho người nghe rất thích thú vì hiểu được rằng triết lý cao siêu của Đông phương qua phương pháp trình bày rõ ràng rành mạch của Tây phương.</p>
    <p>Từ đó tôi hoài bão một cái mộng: "làm sao, sau này mình sẽ đóng một cây thang giáo lý" (tức là bộ "Phật Học Phổ Thông", ngày hôm nay).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="suu-tam-tai-lieu" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">II. SƯU TẦM TÀI LIỆU</h3>
    </div>
    <p>Từ đó, tôi bắt đầu gom góp sưu tầm các tài liệu. Đọc trong kinh, xem trong sách, hoặc nghe những bài giảng nào có thể làm tài liệu đóng cây thang giáo lý, thì tôi đều góp nhặt để dành cả: nhất là tài liệu của bác sĩ Lê Đình Thám (pháp danh Tâm Minh) giảng cho lớp Thanh Niên Đức Dục.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="thoi-gian-tap-su" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">III. THỜI GIAN TẬP SỰ</h3>
    </div>
    <p>Đến năm 1945, sau khi tốt nghiệp chương trình Phật pháp, tôi trở về Nam, mở trường dạy giáo lý tại chùa Phật Quang xứ Bang Chang, quận Trà Ôn. Số Tăng, Ni đến học trên 30 vị (trong số này hiện nay còn lại, bên Tăng, Thầy Thanh Từ v.v... bên Ni, ni cô Trí Định v.v...)</p>
    <p>Ngoài lớp giáo lý, chúng tôi còn mở các lớp học quốc ngữ mỗi buổi sáng, để dạy cho các em ở trong làng, số học sinh gần 150 em; dạy lớp Bình Dân Học Vụ (vần chữ O) để giúp cho đồng bào mù chữ trong những buổi tối; và mở trạm y tế giúp cho đồng bào bệnh hoạn trong làng.</p>
    <p>Muốn làm việc lớn, trước phải làm việc nhỏ, muốn đi xa trước phải từ nơi gần. Nhờ có lớp giáo lý, số học chúng trên 30 vị, tôi bắt đầu tập sự, đem thí nghiệm chương trình Phật học phổ thông (thang giáo lý) mà chúng tôi đã ôm ấp cái mộng từ lâu, để chờ cơ hội tốt, một hoàn cảnh rộng rãi hơn, sẽ đem ra thực hiện (thời gian tập sự, chờ đợi gần 8 năm trường).</p>
    <p>Trước nhất, tôi soạn từng dàn bài, rồi đem ra giảng dạy cho học chúng. Tôi bắt họ ký chú kỹ lưỡng. Sau khi giảng xong, tôi bảo họ làm bài đem tôi sửa, rồi viết lại thành từng tập sách nhỏ để cho tín đồ mượn xem, như quyển Đạo Phật, Tam quy, Ngũ giới, Tứ nhiếp pháp, Lục độ v.v...</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="thoi-gian-thuc-hien" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">IV. THỜI GIAN THỰC HIỆN</h3>
    </div>
    <p>Đến năm 1952, đường giao thông được dễ dàng, tôi được các bạn đồng song, Thượng tọa Thích Thiện Hòa (Giám đốc Phật học Đường N.V.), Thượng tọa Thích Nhựt Liên (Tổng Thư ký Giáo Hội Tăng Già Nam Việt) và Thượng Tọa Thích Quảng Minh (Hội trưởng Hội Phật học Nam Việt) đến thăm và mời tôi về Sài Gòn để chung lo Phật sự.</p>
    <p>Quý Thượng Tọa khuyên tôi rằng: "Cái đèn treo trên cao, thế nào ánh sáng cũng chiếu xa hơn".</p>
    <p>Vì nguyện vọng hoằng dương chánh pháp, vì muốn thống nhất Phật sự và vì tình bạn xa cách nhau trên 8 năm trường muốn sum họp, nên tôi hoan hỷ nhận lời. Từ đây, tôi bắt đầu thu xếp mọi công việc, để chờ ngày lên đường.</p>
    <p>Đầu năm 1953, sau Tết Nguyên đán, ngày mồng 8 tháng Giêng, 8 thầy trò chúng tôi quảy hành lý lên đường... Đến Sài Gòn vào chùa Ấn Quang, sau khi thu xếp chỗ ăn ở tạm xong, quý Thầy giao phó cho tôi hai gánh nặng, là "Giáo dục và Hoằng pháp" (vừa làm Trưởng ban Giáo dục GHTGNV kiêm Đốc giáo PHĐNV và vừa làm Trưởng ban Hoằng pháp GHTGNV). Rồi quý Thầy đua nhau xuất dương.</p>
    <p>Suốt một thời gian, trên 10 năm trường, đông sông tây đục, cả ngày chỉ lo dạy học, diễn giảng rồi huấn luyện cán bộ trụ trì và giảng viên, hết khóa Hạ đến khóa Đông, con người tôi như con vụ.</p>
    <p>Mặc dù công việc quá bận rộn, nhưng cái chí nguyện "đóng cây thang giáo lý" đã ôm ấp từ lâu, tôi không hề xao lãng. Ban ngày dạy học, ban đêm soạn bài, dịch kinh. Hết giờ dạy cho Tăng, Ni ở các học đường, rồi đến dạy cho lớp Như Lai Sứ Giả và Cư sĩ. Ngoài ra còn làm các Phật sự khác, việc Giáo hội, việc lễ lược, tổ chức, thù tạc v.v... Một ngày đêm, chúng tôi làm việc thẳng thét 4 buổi (sáng, chiều, tối và khuya).</p>
    <p>Mỗi tuần, tối thứ Tư hoặc là tối thứ Năm, tôi mở lớp dạy giáo lý tại chùa Ấn Quang (Phật học đường NV) rồi đến chùa Phước Hòa (trụ sở của Hội Phật học NV) để dạy Phật pháp cho quý Phật tử cư sĩ, tức là lớp "Phật học Phổ thông". Tôi bắt đầu thực hiện "cái mộng" này vào năm 1953.</p>
    <p>Soạn từng bài, đem ra dạy, rút kinh nghiệm rồi chúng tôi mới viết kỹ lại thành tập. Đúng 10 bài làm một khóa học.</p>
    <p>Mỗi năm chúng tôi mở 2 khóa hoặc 3 khóa (trừ 2 năm 1963 và 1964 gặp lúc Pháp nạn nên không mở khóa học Giáo lý được). Ngoài chương trình Phật học Phổ thông, chúng tôi còn dạy Bản đồ tu Phật (Phật học cương yếu, 10 Tông phái) và Duy Thức học v.v...</p>
    <p>Sau khi rút kinh nghiệm bản thân, từ phương pháp dạy (nghệ thuật trình bày) và bài vở được tu chỉnh rồi in thành tập, chúng tôi mở khóa huấn luyện cho các cán bộ Diễn giảng, mỗi khóa 10 bài. Sau khi huấn luyện chu đáo, nắm chắc kết quả, chúng tôi mới cử quý vị giảng viên, đi giảng các Tỉnh Hội Phật học, mỗi nơi 10 đêm, rồi trở về thụ huấn 10 bài khác. Như thế, chúng tôi cử các vị đi mỗi năm ba kỳ, sau những ngày nghỉ học tại Phật học đường NV (mỗi năm nghỉ học 3 kỳ, mỗi kỳ 1 tháng).</p>
    <p>Khóa giảng được kết quả tốt đẹp, thính giả mỗi ngày mỗi đông, nên giảng viên thêm hào hứng và rút tỉa nhiều kinh nghiệm. Nhờ thế, giảng viên tiến đến mức chuyên môn, cầm được nghệ thuật diễn giảng, giảng rất hấp dẫn. Người nghe cũng thích thú! Nhờ thế, chúng tôi gây được phong trào học giáo lý từ Đô thành đến các tỉnh, trong mấy năm vừa qua ở miền Nam.</p>
    <p>Cứ theo cái đà này mà tiến, hết khóa thứ nhất đến khóa thứ hai, rồi tiếp đến khóa thứ ba và thứ tư v.v... Bắt đầu từ năm 1953 đến nay (1965) là 13 năm tôi đã hoàn thành được 12 nấc thang Giáo lý; nghĩa là 12 khóa "Phật học Phổ Thông". Nếu cộng với 5 năm hoài bão cái mộng trên, và thời gian tập sự 8 năm, tất cả là 25 năm trọn.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="noi-dung" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">V. NỘI DUNG</h3>
    </div>
    <p>Trong thời gian trên, ngoài bộ "Phật học Phổ thông" 12 tập, chúng tôi còn soạn bộ "Bản đồ tu Phật" 10 tập, "Duy thức học" 6 tập và các loại sách khác, như Bài học ngàn vàng v.v... tất cả là 10 loại, gần 80 thứ.</p>
    <p>Nội dung bộ "Phật học Phổ thông", chia làm 12 khóa: Từ khóa I đến khóa IV, nói về "Ngũ thừa Phật giáo" và những vấn đề cần biết như nhân quả luân hồi, Đạo Phật v.v... Khóa V, năm bài đầu nói về Lịch sử truyền bá của Phật giáo, từ Ấn Độ sang Trung Hoa đến Việt Nam và các nước Phật giáo, ba bài tiếp nói về Đại cương Phật giáo (10 tông phái), 2 bài sau nói về "Nhân sinh và vũ trụ" là hai vấn đề rất quan trọng. Khóa thứ VI và VII là Đại cương kinh Lăng Nghiêm, khóa thứ VIII là kinh Viên Giác, 2 bộ kinh này thuộc về Tánh tông và được ca tụng nhiều nhất trong Thiền môn. Khóa thứ IX là Duy thức học (Luận Đại thừa Bách pháp, Bát thức quy củ, Duy thức Tam thập tụng, A-đà-na thức, và luận Nhân Minh). Khóa thứ X và XI là luận Đại thừa khởi tín, một bộ luận có tiếng tăm trong Phật giáo. Duy thức học và luận Khởi tín, thuộc về Tướng tông. Thế là từ khóa I đến khóa XI, có thể giúp cho độc giả hiểu được căn bản giáo lý là Ngũ Thừa Phật giáo, Tánh Tông và Tướng Tông, cùng những vấn đề quan trọng trong Phật giáo. Đến khóa thứ XII là kinh Kim Cang Bát Nhã và Tâm kinh, thuộc về Tánh Không tông, để giúp cho hành giả muốn lên cao phải cởi mở rũ bỏ những gì nặng nề đã mang từ lâu.</p>
    <p>Chúng tôi chia ra 12 khóa, từ thấp đến cao giúp cho quý Phật tử dễ học; cũng như cây thang có 12 nấc để cho người dễ leo.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="loi-ich" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">VI. LỢI ÍCH</h3>
    </div>
    <p>Bộ "Phật học Phổ thông" và các loại sách "Phật học tùng thư" của chúng tôi từ khi được phổ biến đến nay, đã đem lại các lợi ích như sau:</p>
    <div class="pl-6 space-y-2 my-4">
      <p class="mb-0">1. Truyền bá giáo lý được sâu rộng trong quần chúng</p>
      <p class="mb-0">2. Giúp cho rất nhiều Phật tử hiểu biết Phật pháp để tu hành</p>
      <p class="mb-0">3. Giúp cho Tăng, Ni các Phật học viện mau hiểu giáo lý</p>
      <p class="mb-0">4. Giúp tài liệu cho quý Giảng sư và Giáo sư để giảng dạy giáo lý</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="nhung-yeu-to-thanh-cong" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">VII. NHỮNG YẾU TỐ ĐỂ THÀNH CÔNG TRONG VIỆC SÁNG TÁC VÀ PHIÊN DỊCH</h3>
    </div>
    
    <div class="space-y-6">
      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">1. KHẢ NĂNG</h4>
        <p>Muốn làm công việc gì trước tiên cần phải có đủ "khả năng" về công việc ấy. Như người muốn sáng tác và phiên dịch giáo lý, tất nhiên phải có đủ khả năng về việc này, phải có một học lực khác, cả nội điển lẫn ngoại điển, tương đương với công việc, mới có thể làm được.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">2. BỀN CHÍ</h4>
        <p>"Bền chí" là một yếu tố cần nhất trong mọi công việc, nhất là việc sáng tác và phiên dịch. Công việc này đòi hỏi rất nhiều sự "cần cù, rị mọ", ngồi cặm cụi suốt ngày đêm trên bàn viết, từ tháng này đến năm nọ. Người không bền chí, không thể đeo đuổi được lâu dài. Nếu chỉ do hứng thú nhất thời, thì chỉ viết hoặc dịch được một vài quyển mà thôi.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">3. SỨC KHỎE</h4>
        <p>"Sức khỏe" cũng là một yếu tố cần thiết trong mọi công việc. Nếu làm việc gì mà thiếu sức khỏe thì khó thành công mỹ mãn. Sức khỏe kém, tất nhiên thân thể mỏi mệt, tinh thần bì quyến, không minh mẫn sáng suốt, không thể ngồi lâu, để phiên dịch hoặc sáng tác.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">4. THÍCH THÚ</h4>
        <p>Làm công việc gì, mặc dù có khả năng sức khỏe và bền chí, nhưng nếu không thấy "thích thú" thì cũng khó mà thành tựu, nhất là việc phiên dịch và sáng tác. Có cảm thấy thích thú, mới vượt qua được sự khó khăn cực khổ, mải miết nơi bàn viết ngày đêm, không chán.</p>
        <p>Người sáng tác hoặc phiên dịch, khi thực hiện được một tác phẩm nào, tự cảm thấy vui mừng và thích thú, không khác gì anh nghèo cất được cái nhà mới. Phải có thích thú như thế, mới làm được việc này.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">5. TIÊU CHUẨN PHIÊN DỊCH VÀ SÁNG TÁC</h4>
        <p>Người xưa nói: "Văn tức là người". Đúng như thế. Người tính tình như thế nào, thì viết văn cũng như thế ấy.</p>
        <p>Viết văn hay diễn giảng ai cũng muốn cho nhiều người đọc và dễ hiểu. Nhưng trái lại, khi viết hay giảng, phần nhiều người muốn nói thật cao siêu khó khăn, làm cho người đọc và nghe phải mệt trí! Như thế không khác gì người muốn đi tới mà hai chân lại bước lùi. Thật ra, điều đó là do ảnh hưởng tính tình, cũng khó mà thay đổi.</p>
        <p>Chúng tôi nhắm vào tiêu chuẩn: Khoa học (rõ ràng thứ lớp), Đại chúng (Phổ thông, bình dân) và Dân tộc (sắc thái Việt Nam), nên những kinh sách, mặc dù khó đến đâu, qua sự phiên dịch hoặc sáng tác của chúng tôi, cũng đều làm cho người đọc dễ hiểu và rõ ràng.</p>
        <p>Theo sự kinh nghiệm của chúng tôi trên mười năm nay về việc trước tác và phiên dịch, nếu tác phẩm nào thiếu ba điểm trên (Khoa học, Đại chúng và Dân tộc) thì khó có thể phổ biến sâu rộng trong quảng đại quần chúng.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">6. TẠO HOÀN CẢNH THÍCH HỢP</h4>
        <p>Hoàn cảnh là một trong những yếu tố quan trọng quyết định sự thành công hay thất bại. Chúng ta nên hay hư, hay hay dở, đa số đều do ảnh hưởng hoàn cảnh tốt hay xấu. Chúng tôi làm được một vài công tác về phiên dịch và sáng tác, là do chúng tôi tự tạo ra một hoàn cảnh thuận tiện, để nó thúc đẩy chúng tôi trên công việc này.</p>
        <p>Trước nhất, chúng tôi mở ra một lớp học giáo lý hằng tuần (bắt đầu năm 1953 đến nay, mỗi tuần vào tối thứ Tư hoặc tối thứ Năm), và soạn chương trình giáo lý từ sơ cấp đến cao đẳng. Mỗi tuần tôi soạn một bài giáo lý để dạy. Và tôi phải nghiên cứu cách dạy (nghệ thuật trình bày) mỗi bài phải dạy thế nào cho hấp dẫn, người học dễ thâu nhận và thích thú. Vì thế mà người học mỗi ngày mỗi đông và bắt buộc tôi mỗi tuần phải soạn ra một bài để dạy. Một năm tôi mở dạy hai hoặc ba khóa (trước hạ, giữa hạ và sau hạ). Nhờ thế mà bài vở mỗi ngày thêm nhiều và nghệ thuật giảng dạy mỗi ngày càng thêm điêu luyện.</p>
        <p>Sau khi đã có sẵn một số tài liệu về giáo lý, và nắm chắc kết quả về sự giảng dạy ở trong tay rồi, chúng tôi liền mở ra các lớp huấn luyện cán bộ: Giảng sư, Trụ trì và Như Lai Sứ Giả để huấn luyện về chuyên môn của chúng tôi.</p>
        <p>Sau khi được huấn luyện thuần thục, nắm chắc sự thành công trong tay, các vị cán bộ được cử đi các Tỉnh hội Phật học mở khóa dạy giáo lý, mỗi nơi 10 đêm. Người học mỗi đêm càng đông. Người dạy mỗi ngày thêm hào hứng. Nhờ thế mà chúng tôi gây được phong trào học giáo lý trong các năm vừa qua ở miền Nam. Không gì thích thú bằng: bài mình soạn có người dạy, sách mình viết có người đọc. Hoàn cảnh này thúc đẩy chúng tôi phải cố gắng biên soạn, để cung ứng nhu cầu về giáo lý cho quý Phật tử bốn phương.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">7. SÁNG KIẾN</h4>
        <p>Với "sáng kiến", công việc của chúng ta dù cũ cũng thành mới mẻ. Trong khi giảng dịch hay viết, nếu không có một đôi chút sáng kiến thì người nghe hay đọc cảm thấy khô khan, buồn chán. Trái lại, nếu chúng ta có sáng kiến thêm vào, thì người đọc cảm thấy như thưởng thức được vài phần hương vị mới lạ. Chúng tôi xin dẫn một vài bằng chứng điển hình: Bộ Đại thừa Bách pháp minh môn là một bộ luận đã có từ nghìn xưa, người đọc rất khó hiểu. Nhưng chúng tôi có sáng kiến, căn cứ vào đó, sáng tác quyển TU TÂM, làm cho người đọc dễ hiểu và thích thú. Kinh Lăng Nghiêm đã có mấy nhà dịch ra chữ Việt, nhưng bản dịch của chúng tôi, vì có đôi phần sáng kiến và sáng tác, nên được nhiều người thích đọc, vì rõ ràng và dễ hiểu. Bởi thế nên "sáng kiến" không những rất cần trong việc phiên dịch và sáng tác, mà còn rất cần trong mọi công việc và mọi hoàn cảnh.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">8. KẾ HOẠCH VÀ TỔ CHỨC</h4>
        <p>Phàm làm việc gì có kế hoạch và biết tổ chức thì công việc mới thành tựu dễ dàng. Trên đoạn thứ 6 nói về hoàn cảnh, chúng tôi đã nói một vài khía cạnh về sự tổ chức việc làm của chúng tôi. Đến đây chúng tôi nói rõ thêm, để giúp ích phần nào cho những người bạn muốn đi theo con đường của chúng tôi.</p>
        <p>Theo đúng kế hoạch và tổ chức, chúng tôi chia công việc ra làm 3 phần như sau: Biên soạn, Xuất bản và Phổ biến (phát hành).</p>
        <div class="pl-4 space-y-4 my-4">
          <div>
            <p class="font-semibold mb-1">1. Phần biên soạn và phiên dịch:</p>
            <p class="mb-2">Chúng tôi lập "Phật học Tùng thư", chia ra làm 10 loại sách sau đây: 1. Kinh, 2. Luật, 3. Luận, 4. Phật học Phổ thông, 5. Bài giảng, 6. Phật học Giáo khoa, 7. Giáo lý dạy Gia đình Phật tử, 8. Tạp luận, 9. Sự tích, 10. Kinh tụng (các nghi thức tụng niệm).</p>
            <p class="mb-2">Tất cả 10 loại sách này, gồm 80 thứ, phân chia làm 8 bộ:</p>
            <div class="pl-6 space-y-1 text-sm">
              <p class="mb-0">1. Bộ Phật học Phổ thông, 12 khóa (hay Cây thang giáo lý, 12 nấc)</p>
              <p class="mb-0">2. Bộ Bản đồ tu Phật, 10 tập (Đại cương Phật giáo: 10 tông phái)</p>
              <p class="mb-0">3. Bộ Duy thức học, 6 quyển (các sách vở chánh tông của Duy thức)</p>
              <p class="mb-0">4. Phật học Giáo khoa các trường trung học Bồ Đề (từ đệ Thất đến đệ Nhất)</p>
              <p class="mb-0">5. Giáo lý dạy Gia đình Phật tử (sắp thực hiện)</p>
              <p class="mb-0">6. Nghi thức tụng niệm (Kinh Nhật tụng Đại bản và Tiểu bản v.v...)</p>
              <p class="mb-0">7. Tám quyển sách quý, bài học ngàn vàng v.v... (tạp luận)</p>
              <p class="mb-0">8. Sự tích</p>
            </div>
            <p class="mt-2 mb-0 opacity-90 text-sm italic">Các bộ sách này, sắp có thứ tự và theo hệ thống từ thấp đến cao, từ dễ đến khó, làm cho người đọc dễ hiểu, như cây thang có nhiều nấc, khiến cho người leo lên cao không khó (muốn rõ hệ thống tổ chức và nội dung của mỗi bộ sách nói trên, xin quý vị xem quyển "Mục lục kinh sách" của Hương Đạo xuất bản).</p>
          </div>
          <div>
            <p class="font-semibold mb-1">2. Phần xuất bản:</p>
            <p class="mb-2">Chúng tôi tổ chức một cơ quan xuất bản gọi là "Nhà xuất bản Hương Đạo", để xuất bản kinh sách của chúng tôi phiên dịch và sáng tác từ trước đến nay.</p>
            <p class="mb-0">Từ hai bàn tay trắng, chúng tôi chỉ lấy công làm lời, lấy lời làm vốn. Ban đầu in từ quyển sách nhỏ, như Tu Tâm, lần đến các tập Phật học Phổ thông v.v... Ngoài sự trả tiền in cho nhà in và bút phí, chúng tôi rất tiện tặn, không dám tiêu xài. Dành dụm cho tới ngày nay, Nhà xuất bản Hương Đạo của chúng tôi, được một kho sách gần 80 thứ.</p>
          </div>
          <div>
            <p class="font-semibold mb-1">3. Phần Phổ biến:</p>
            <p class="mb-0">Như đoạn trên, trong phần thứ 6 nói về hoàn cảnh, chúng tôi có nói sơ lược: sau khi đã có sách vở rồi, chúng tôi mở lớp giáo lý tại Thủ Đô dạy theo chương trình chúng tôi đã soạn. Rồi chúng tôi huấn luyện cán bộ đi các tỉnh, cũng dạy theo tài liệu nói trên. Ngoài ra, chúng tôi còn gửi các nhà phát hành kinh sách ở Trung và Nam để họ phổ biến sâu rộng trong quần chúng. Nhờ thế, mà giáo lý được phổ biến và giúp cho sự xuất bản được dễ dàng và sự phiên dịch sáng tác khỏi bị khủng hoảng.</p>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">9. KINH NGHIỆM</h4>
        <p>Mỗi khi chúng ta làm một việc gì, dù thất bại hay thành công đều là một bài học cho chúng ta rút kinh nghiệm, để làm việc sắp đến.</p>
        <p>Về việc sáng tác phiên dịch, xuất bản và phổ biến, trên 10 năm nay, chúng tôi rút rất nhiều kinh nghiệm về sự thất bại cũng như thành công. Gặp thành công, chúng tôi giữ y như thế mà tiến. Gặp thất bại chúng tôi rút kinh nghiệm để sửa chữa. Mỗi khi ra một quyển sách hay giảng một bài nào, chúng tôi dọ hỏi dư luận quần chúng, tìm hiểu những phê bình chỉ trích hơn là lời khen ngợi. Nhờ thế mà chúng tôi gặt hái được những thành quả hôm nay.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">10. TRÌNH BÀY TƯ TƯỞNG PHẬT GIÁO ĐÔNG PHƯƠNG QUA PHƯƠNG PHÁP TÂY PHƯƠNG</h4>
        <p>Chúng tôi vào chùa từ thuở bé, lo học giáo lý nhà Phật, chỉ hấp thụ tư tưởng Phật giáo Đông phương. Một duyên may, năm 1941, tôi được dự thính lớp Thanh niên Đức Dục tại Huế, do bác sĩ Lê Đình Thám đảm nhiệm. Bác sĩ là người rất giỏi về Âu học và cũng rất thâm về Á học. Bác sĩ đem phương pháp giảng giải của Tây phương mà giảng giải phân tích nền triết học cổ học Đông phương một cách rõ ràng rành mạch mà vẫn giữ được phần cao siêu thâm thúy. Chúng tôi thích thú vô cùng. Mặc dù hấp thụ trong thời gian không lâu, nhưng một khi hạt giống đã rơi vào tâm điền rồi, từ đó về sau nó sẽ tiến hóa luôn, nức mộng, nẩy chồi cho đến khi đơm bông kết trái.</p>
        <p>Về sự giảng dạy cũng như sự trước tác phiên dịch của chúng tôi, người nghe và người đọc được dễ hiểu, rõ ràng và rành mạch là nhờ chúng tôi áp dụng được đôi phần phương pháp Tây phương.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">11. ĐẶT SÁT VẤN ĐỀ</h4>
        <p>Một vài người bạn đến chơi và thân mật phê bình: "Thầy không thông minh lắm, chậm chạp và ít sáng kiến, nhưng mỗi khi có một sáng kiến nào, thì thầy đeo đuổi và làm cho kỳ được. Điều quý nhất là thầy biết đặt sát vấn đề, biết cân nhắc đắn đo, chọn người chọn việc, đặt đúng chỗ và dùng đúng thời, nên thành công được nhiều khả quan".</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">12. KHÔNG ĐI XA MỤC ĐÍCH</h4>
        <p>Mỗi khi làm một việc gì, trước nhất chúng tôi tự hỏi: "Mục đích để làm gì?". Sau khi hạ thủ công việc ấy, chúng tôi luôn luôn nhắm mục đích ấy mà tiến, không dám đi lạc đường. Như việc phiên dịch và sáng tác này, trước khi bắt tay vào việc, chúng tôi tự vấn lương tâm: "Mục đích để làm gì? Vì danh? Vì lợi? Hay vì hoằng pháp lợi sinh?" - Sau khi chúng tôi quyết định: "Mục đích để phổ biến giáo lý" và may ra có lợi phần nào, thì tiếp tục in thêm các kinh sách khác và giúp cho quý vị cán bộ diễn giảng hay những người đang thiếu thốn xung quanh.</p>
        <p>Vì mục đích trên, các năm đầu, mỗi tháng chúng tôi đều có cúng dường theo bản nguyện. Sau một thời gian thấy quý vị giảng sư được thành công trong việc diễn giảng, có đủ phương tiện để tự túc, chúng tôi lại bớt phần cúng dường, xoay lại để làm bút phí cho sự sửa chữa, hay tu chỉnh các tác phẩm và dịch phẩm đã xuất bản. Đến nay, công việc tu chỉnh và xuất bản v.v... vẫn còn tiếp tục.</p>
        <p>Nhờ không đi sai "mục đích" hay "bản nguyện", nên chúng tôi được toại nguyện khá nhiều.</p>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-primary-700 dark:text-primary-300">13. BIẾT DÙNG VÀ DÁM DÙNG TIỀN</h4>
        <p>Đành rằng: "Không tiền thì không làm được việc gì". Nhưng có tiền mà đắn đo rít rắm, tiện tặn quá, thì cũng không làm nên việc gì lớn lao. Lại nữa, có tiền mà không biết dùng tiền, nghĩa là dùng tiền không đúng chỗ không hợp thời, thì có tiền chỉ thêm hại mà thôi. Trái lại, dùng tiền trúng chỗ hợp thời thì được thành công tốt đẹp.</p>
        <p>Xuyên qua các đoạn trên (phần xuất bản và đoạn thứ 12: không đi xa mục đích) quý vị thấy chúng tôi lấy công làm lời, lấy lời làm vốn, rất tiện tặn dành dụm và tích trữ mới thành một sự nghiệp (một kho sách, 10 loại, gần 80 thứ). Mặc dù chúng tôi tiện tặn tiết kiệm như vậy, nhưng vì muốn cho thành "một sự nghiệp văn hóa" nên với việc đáng dùng như "tu chỉnh, sửa chữa" lại các bộ sách đã xuất bản, chúng tôi dám xuất số tiền, có thể nói gần quá sức lo của chúng tôi. Không sợ tốn kém, miễn sao thành tựu công việc thì thôi. Nhờ thế chúng tôi thu góp được kết quả theo ý muốn.</p>
      </div>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="ghi-on" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">VIII. GHI ƠN</h3>
    </div>
    <p>Kinh chép: "Chư pháp tùng duyên sanh". Chính thế, mặc dù chúng tôi đã có chí nguyện "đóng cây thang giáo lý" làm chánh nhân, nhưng nếu không nhờ các duyên lành, thì cũng khó mà thành tựu. Vậy hôm nay, công việc mà chúng tôi xem như "Một sự nghiệp của đời tôi", có thể nói là đã hoàn thành, chúng tôi xin thành tâm ghi khắc công ơn sau đây:</p>
    <div class="pl-6 space-y-2 my-4">
      <p class="mb-0">1. Ơn Tam Bảo gia hộ;</p>
      <p class="mb-0">2. Ơn quý Sư trưởng và thiện hữu tri thức mở mang kiến thức;</p>
      <p class="mb-0">3. Ơn Phụ mẫu sanh thành và ơn Đàn na giúp đỡ;</p>
      <p class="mb-0">4. Ơn Thượng tọa Thích Thiện Hòa, Đại đức Thích Trường Lạc v.v... đã soạn giúp một số bài, khi chúng tôi quá bận việc và vui lòng chiều theo ý muốn, để mặc tình chúng tôi sửa chữa;</p>
      <p class="mb-0">5. Ơn Đạo hữu Võ Đình Cường đã giúp tôi rất nhiều về việc tu chỉnh bài vở;</p>
      <p class="mb-0">6. Ơn quý Phật tử đến học hằng tuần (từ năm 1953 đến 1962) tạo hoàn cảnh để thúc đẩy chúng tôi sáng tác và thí nghiệm chương trình giáo lý;</p>
      <p class="mb-0">7. Ơn Đạo hữu Nhuận Chưởng, Minh Phúc và ông Dương Kiều Thi v.v... đã giúp chúng tôi về việc xuất bản.</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="hien-giao-hoi" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">IX. HIẾN GIÁO HỘI PGVNTN</h3>
    </div>
    <p>Những tác phẩm hay dịch phẩm của nhà xuất bản Hương Đạo chúng tôi, sau khi tu chỉnh hoàn toàn, và trả tất nợ nhà in rồi, chúng tôi sẽ làm lễ hiến cho Giáo Hội Phật Giáo VNTN hay những người nối theo chí nguyện (phiên dịch và sáng tác) của chúng tôi.</p>
    <p>Những tác phẩm của chúng tôi, đều không giữ bản quyền đối với quý vị nào muốn ấn tống. Nhưng, nếu ai muốn sửa đổi nội dung hay in để kiếm lời, thì phải được sự đồng ý của chúng tôi.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="hoi-huong" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">X. HỒI HƯỚNG</h3>
    </div>
    <p>Tôi làm được điều lợi ích gì, có bao nhiêu công đức đều hồi hướng:</p>
    <div class="pl-6 space-y-1 italic my-4 border-l-2 border-secondary-300 dark:border-secondary-700 py-2">
      <p class="mb-0">Trên đền đáp bốn ơn</p>
      <p class="mb-0">Dưới cứu giúp ba loài.</p>
      <p class="mb-0 mt-4 not-italic font-semibold">Cầu nguyện cho:</p>
      <p class="mb-0">Mặt trời Phật thêm sáng</p>
      <p class="mb-0">Bánh xe pháp xoay hoài</p>
      <p class="mb-0">Thế giới đều hòa bình</p>
      <p class="mb-0">Nhân dân được an lạc</p>
      <p class="mb-0">Tôi và các chúng sinh</p>
      <p class="mb-0">Đều sanh về cõi Phật.</p>
    </div>

    <div class="mt-12 text-right italic text-sm text-text-muted">
      <p class="mb-1">Viết tại Dưỡng đường Đồn Đất Sài Gòn</p>
      <p class="mb-1">Quý Xuân Ất Tỵ (1965)</p>
      <p class="mb-0 font-semibold">Sa môn THÍCH THIỆN HOA</p>
    </div>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-12-phu-luc-mot-su-nghiep-cua-doi-toi',
  slug: 'phu-luc-mot-su-nghiep-cua-doi-toi',
  title: 'Phụ lục: Một "sự nghiệp" của đời tôi',
  type: 'article',
  status: 'published',
  order: 22,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'mot-su-nghiep-cua-doi-toi', label: 'Một "sự nghiệp" của đời tôi' },
        { id: 'nguyen-nhan', label: 'I. Nguyên nhân', indent: 1 },
        { id: 'suu-tam-tai-lieu', label: 'II. Sưu tầm tài liệu', indent: 1 },
        { id: 'thoi-gian-tap-su', label: 'III. Thời gian tập sự', indent: 1 },
        { id: 'thoi-gian-thuc-hien', label: 'IV. Thời gian thực hiện', indent: 1 },
        { id: 'noi-dung', label: 'V. Nội dung', indent: 1 },
        { id: 'loi-ich', label: 'VI. Lợi ích', indent: 1 },
        { id: 'nhung-yeu-to-thanh-cong', label: 'VII. Những yếu tố để thành công trong việc sáng tác và phiên dịch', indent: 1 },
        { id: 'ghi-on', label: 'VIII. Ghi ơn', indent: 1 },
        { id: 'hien-giao-hoi', label: 'IX. Hiến Giáo hội PGVNTN', indent: 1 },
        { id: 'hoi-huong', label: 'X. Hồi hướng', indent: 1 },
      ],
    },
  ],
}

export default lesson