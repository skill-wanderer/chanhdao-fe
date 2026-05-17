import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <p class="text-lg font-semibold uppercase tracking-wide text-secondary-700 dark:text-secondary-300">(Từ lúc mới du nhập đến hết đời Lý)</p>

  <section id="mo-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">A. MỞ ĐỀ</h2>
    <p>Trong thời Pháp thuộc, vì vận mệnh chung cả nước nhà đang suy đồi, lại bị văn hóa Tây phương và ngoại đạo lấn áp, nên Phật giáo đối với phần đông dân tộc Việt Nam như là một tôn giáo hạ đẳng, phụ thuộc, không có nghĩa lý gì.</p>
    <p>Nhưng nếu có ai đi sâu vào lịch sử Phật giáo Việt Nam theo dõi bước đi của sự truyền giáo qua các thời đại từ khi dân tộc Việt Nam mới lập quốc đến ngày nay, thì sẽ thấy Phật giáo giữ một địa vị quan trọng vô cùng trong công trình gây dựng văn hóa Việt Nam. Có thể nói một cách không quá rằng: Văn hóa Việt Nam một phần lớn là văn hóa Phật giáo. Rút cái tính chất Phật giáo trong văn hóa Việt Nam ra thì văn hóa ấy thật là nghèo nàn, nông cạn. Chính Thượng tọa Mật Thể, trong quyển <strong>Việt Nam Phật giáo sử lược</strong> đã nói rất đúng: "Nhờ tinh thần sáng suốt của thể đạo, với công nghiệp bố giáo của các tổ sư Phật giáo rất có công to trên lịch sử văn hóa nước nhà".</p>
    <p>Ngày nay, để nhận chân đứng đắn cái vai trò quan trọng và sứ mệnh lịch sử của Phật giáo nước nhà, cũng như để thêm tin tưởng và phấn khởi mà tu học, để thừa tiếp cái tinh thần "Bi-Trí-Dũng" của đạo mà truyền lại cho các thế hệ về sau, chúng ta, Phật tử Việt Nam cần phải biết rõ lịch sử Phật giáo Việt Nam.</p>
  </section>

  <section id="chanh-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">B. CHÁNH ĐỀ</h2>

    <section id="phat-giao-du-nhap-vao-viet-nam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. PHẬT GIÁO DU NHẬP VÀO VIỆT NAM</h3>

      <section id="con-duong-du-nhap">
        <h4 class="text-lg font-semibold">1. Con đường du nhập</h4>
        <p>Nước Việt Nam ta nằm trên bán đảo Ấn Độ Chi Na, giữa hai nước rộng lớn, hai dân tộc đông đảo nhất thế giới, hai nền văn minh xán lạn của châu Á là Ấn Độ và Trung Hoa. Vì địa thế của nước Việt Nam nằm ở giữa con đường biển đi từ Ấn Độ đến Trung Hoa, nên đã chịu ảnh hưởng nhiều của hai nền văn minh ấy.</p>
        <p>Riêng về Phật giáo, thì sự du nhập vào Việt Nam cũng do cả hai con đường: đường biển từ phía Nam lên và đường bộ từ phía Bắc xuống. Trong số bốn nhà truyền giáo đầu tiên đặt chân lên Việt Nam, thì hết ba nhà sư là người Ấn Độ, đi đường thủy sang Trung Hoa truyền đạo và đã ghé tại Việt Nam là các Ngài: Ma Ha Kỳ Vực, Khương Tăng Hội và Chi Cương Lương.</p>
        <p>Nhà truyền giáo thứ tư là người Trung Hoa, Ngài Mâu Bác, đã đi đường bộ từ phía Bắc xuống. Đó là điều chứng minh rằng Phật giáo vào Việt Nam do cả đường thủy và đường bộ cả từ phía Nam lên và phía Bắc xuống. Nhưng vì nước ta bị Trung Hoa đô hộ ngót một ngàn năm và sau đó vẫn còn lệ thuộc vào văn hóa và chính trị nên về sau con đường truyền giáo từ Trung Hoa sang là con đường chính.</p>
      </section>

      <section id="thoi-dai-du-nhap-dau-tien">
        <h4 class="text-lg font-semibold">2. Thời đại du nhập đầu tiên</h4>
        <p>Theo các sử gia đáng tin cậy, thì nhà truyền giáo đầu tiên đến Việt Nam (lúc bấy giờ là đất Giao Châu) là Ngài Mâu Bác, người quận Thương Ngô tức là Ngô Châu (Trung Hoa bây giờ). Sau khi vua Hán Linh Đế mất (189) nước Trung Hoa thường loạn lạc, Ngài theo mẹ qua ở Giao Châu và truyền bá đạo Phật.</p>
        <p>Nhà truyền giáo thứ hai đặt chân lên đất Giao Châu là Ngài Khương Tăng Hội, Ngài gốc Khương Cư (Sogdiana, Ấn Độ). Mục đích của Ngài là sang Trung Hoa, nhưng ông thân của Ngài sang Giao Châu buôn bán nên Ngài cũng theo đường Giao Châu để sang Trung Hoa. Trung Hoa lúc ấy về đời Tam Quốc, Ngài đến nước Đông Ngô và được Ngô Tôn Quyền sùng mộ, xin quy y với Ngài (229-252). Như thế là Ngài Khương Tăng Hội ghé lại Giao Châu vào khoảng đầu thế kỷ thứ III, sau Tây lịch.</p>
        <p>Vào khoảng giữa thế kỷ thứ III đến cuối thế kỷ thứ III, đất Giao Châu lại đón tiếp hai nhà sư Ấn Độ nữa là Ngài Ma Ha Kỳ Vực và Chi Cương Lương, trên bước đường sang Trung Hoa truyền giáo của các Ngài, vào đời nhà Tần (265-306).</p>
        <p>Như thế, có thể nói rằng: Đạo Phật du nhập đầu tiên sang Việt Nam trong khoảng cuối thế kỷ thứ II đến thế kỷ thứ III, sau Tây lịch.</p>
      </section>

      <section id="cac-mon-phai-du-nhap">
        <h4 class="text-lg font-semibold">3. Các môn phái du nhập</h4>
        <p>Trong thời kỳ đầu tiên du nhập Việt Nam, đạo Phật chỉ phớt qua trên đất nước, chưa có màu sắc riêng biệt và dân chúng chỉ mới tiếp xúc với Đạo Phật trong phương tiện thờ cúng lễ bái mà thôi.</p>
        <p>Phải đợi đến vài ba trăm năm sau, đạo Phật mới thâm nhập dần vào dân chúng và do ảnh hưởng của Phật giáo Trung Hoa. Có một điều chúng ta ngạc nhiên là, mặc dù Phật giáo Trung Hoa gồm mười tông phái, mà chỉ có Thiền tông là được truyền đi sang Việt Nam trước nhất và mạnh mẽ nhất. Tông này được truyền vào Việt Nam trước hết do Ngài Tỳ Ni Đa Lưu Chi (Vinitaruci) đưa sang (580). Ngài là đệ tử được truyền tâm pháp của Tam tổ Tăng Xán, và chính là Sơ tổ Thiền tông ở Việt Nam.</p>
        <p>Đến đời Đường (820) lại có Ngài Vô Ngôn Thông ở Trung Hoa sang truyền giáo, lập thành phái Thiền tông thứ hai; kế đó là các phái Thảo Đường, Tào Động, Lâm Tế v.v.. lần lượt truyền sang Việt Nam.</p>
        <p>Tóm lại, đạo Phật du nhập vào Việt Nam, chỉ có Thiền tông là gây ảnh hưởng mạnh mẽ hơn cả.</p>
      </section>
    </section>

    <section id="phat-giao-duoi-thoi-hau-ly-nam-de-va-bac-thuoc-lan-thu-ba">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. PHẬT GIÁO DƯỚI THỜI HẬU LÝ NAM ĐẾ (571-602) VÀ BẮC THUỘC LẦN THỨ BA (603-939)</h3>
      <p>Từ khi Phật giáo truyền vào Việt Nam cho đến thời Tiền Lý Nam Đế, kể ra trên ba trăm năm (189-548) nhưng vẫn còn nằm trong thời kỳ phôi thai chưa có gì đáng gọi là thịnh hành lắm. Đến thời Hậu Lý Nam Đế (571-602) và Bắc thuộc lần thứ III (603-939) Phật giáo mới bắt đầu bước vào thời thành đạt.</p>

      <section id="giai-doan-thu-nhat">
        <h4 class="text-lg font-semibold">1. Giai đoạn thứ nhất</h4>
        <p>Sự truyền bá Thiền tông của Ngài Tỳ Ni Đa Lưu Chi và Ngài Pháp Hiển.</p>
        <p>Vào cuối đời Hậu Lý Nam Đế, có Ngài Tỳ Ni Đa Lưu Chi ở Trung Hoa sang (580) đem Thiền tông truyền bá vào, được người Việt Nam hết sức sùng mộ. Do đó, lần đầu tiên nước Việt Nam được biết đến Thiền tông và Ngài Tỳ Ni Đa Lưu Chi chính là Sơ tổ phái Thiền tông ở Việt Nam. Sau Ngài Tỳ Ni Đa Lưu Chi có Ngài Pháp Hiển là đệ tử của Ngài Tỳ Ni Đa Lưu Chi nối nghiệp thầy, đem đạo Phật truyền sâu trong dân chúng.</p>
      </section>

      <section id="giai-doan-thu-hai">
        <h4 class="text-lg font-semibold">2. Giai đoạn thứ hai</h4>
        <p>Ảnh hưởng của ba đoàn truyền giáo.</p>
        <p>Đến đây, Phật giáo Việt Nam bắt đầu thịnh. Lúc bấy giờ nước ta đang lệ thuộc nhà Tùy, vua Cao Tổ nhà Tùy, nghe nước ta đạo Phật đang phát triển mạnh, nên vua ban cho các vị danh tăng ở nước ta năm hòm lễ vật, và sắc lệnh cho xây tháp ở chùa Pháp Vân, chùa Trùng Khánh cùng các danh địa khác.</p>
        <p>Sau này Tùy mất ngôi (618) nhà Đường kế nghiệp, vua Đường Cao Tổ cũng có ban cho An Nam năm viên ngọc Xá Lị và sắc dựng chùa xây tháp.</p>
        <p>Cũng trong giai đoạn này, những nhà truyền giáo Trung Hoa và Ấn Độ, thường mượn đường nước ta mà qua lại. Trong khi đi ngang Việt Nam các Ngài thường ghé lại ít lâu để thuyết pháp, do đó chúng ta cũng chịu được nhiều ảnh hưởng tốt. Trong số những đoàn truyền giáo ấy, đáng kể nhất là ba đoàn sau đây:</p>
        <p><strong>a) Đoàn thứ nhất:</strong> Gồm có các Ngài Minh Viễn pháp sư, Huệ Mạnh thiền sư, và Vô Hành thiền sư, đều là người Trung Hoa.</p>
        <p><strong>b) Đoàn thứ hai:</strong> Gồm các Ngài Đàm Nhuận pháp sư, Trí Hoàng pháp sư, và Tăng Già Bạt Ma (Hai Ngài đầu người Trung Hoa và Ngài sau người Tây Trúc).</p>
        <p><strong>c) Đoàn thứ ba:</strong> Gồm sáu nhà sư Việt Nam là các Ngài Vân Kỳ thiền sư, Mộc Xoa Đề Bà, Khuy Sung pháp sư, Huệ Diệm pháp sư, Trí Hành thiền sư; bốn Ngài đầu người Giao Châu, hai Ngài sau người Ái Châu (Thanh Hóa, Nghệ An bây giờ). Các Ngài này đều từ Việt Nam đi sang cầu pháp ở Tây Trúc và tịch, phần nhiều rất sớm, ở Ấn Độ hay Tích Lan.</p>
      </section>

      <section id="giai-doan-thu-ba">
        <h4 class="text-lg font-semibold">3. Giai đoạn thứ ba</h4>
        <p>Sự truyền bá của phái Vô Ngôn Thông.</p>
        <p>Vào năm 820, nước ta lại được một vị cao tăng thuộc phái Thiền tông sang truyền giáo và lập thành một phái Thiền tông thứ hai là Ngài Vô Ngôn Thông.</p>
        <p>Ngài họ Trịnh, quê ở Quảng Châu. Lúc nhỏ Ngài đã mộ đạo, xuất gia tu học tại chùa Song Lâm, đất Vũ Châu (Chiết Giang). Tính Ngài điềm đạm, ít nói nhưng sự lý gì cũng hiểu, nên người thời ấy gọi Ngài là Vô Ngôn Thông.</p>
        <p>Một hôm Ngài đang ngồi lễ Phật, gặp một vị thiền sư đến điểm hóa cho Ngài và đưa Ngài đi tìm đức Mã Tổ mà tham học. Nhưng đến Giang Tây, Ngài nghe tin đức Mã Tổ đã tịch rồi, nên Ngài đi đến xin tòng sư với tổ Bách Trượng Thiền sư.</p>
        <p>Một hôm trong buổi giảng, có vị học tăng hỏi tổ Bách Trượng:</p>
        <blockquote>
          <p class="mb-2">Thế nào là pháp môn của phái Đại thừa?</p>
          <p class="mb-0">Tâm địa nhược thông, huệ nhật tự chiếu (nghĩa là: nếu tâm địa thông rồi thì mặt trời huệ tự nhiên chiếu sáng).</p>
        </blockquote>
        <p>Nghe được mấy câu ấy, Ngài Vô Ngôn Thông liền ngộ đạo. Ngài trở về Quảng Châu, trụ trì tại chùa An Hòa. Đến năm 820, Ngài qua Việt Nam trú ở chùa Kiến Sơ, làng Phù Đổng (Bắc Ninh) trọn ngày ngồi xây mặt vào vách mà thiền định. Như thế đã mấy năm mà không ai biết; chỉ có vị sư ở chùa ấy là Cảm Thành thiền sư biết Ngài là bậc Cao tăng đắc đạo trong phái Thiền tông, nên hết lòng kính trọng và thờ làm thầy. Ngài thị tịch một cách rất an nhiên tự tại, vào năm 826 Tây lịch, sau khi truyền tâm ấn cho Ngài Cảm Thành thiền sư.</p>
        <p>Ngài Cảm Thành thiền sư lại truyền tâm ấn cho Ngài Thiện Hội và gây thành một truyền thống cho phái Vô Ngôn Thông (Chúng ta sẽ học tiếp trong các đời vua sau).</p>
        <p>Tóm lại, trong khoảng thời gian gần bốn trăm năm, từ đời Hậu Lý Nam Đế (571-602) cho đến hết thời kỳ Bắc thuộc lần thứ ba (603-939), sự truyền giáo ở Việt Nam có thể chia làm ba giai đoạn: giai đoạn thứ nhất, do công đức của phái Tỳ Ni Đa Lưu Chi; giai đoạn thứ hai, do các đoàn truyền giáo Trung Hoa và Việt Nam, và sự khuyến khích ủng hộ của các đời vua Tùy và Đường; giai đoạn thứ ba, do phái Vô Ngôn Thông.</p>
      </section>
    </section>

    <section id="phat-giao-duoi-thoi-dinh-va-tien-le">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. PHẬT GIÁO DƯỚI THỜI ĐINH VÀ TIỀN LÊ (968-1009)</h3>

      <section id="tinh-trang-tong-quat-doi-dinh-tien-le">
        <h4 class="text-lg font-semibold">1. Tình trạng tổng quát của Phật giáo trong hai đời Đinh, Lê</h4>
        <p>Trong hai đời vua này, đạo Phật được tiến phát rất nhiều. Có thể nói Đạo Phật trở thành độc tôn. Tất cả văn hóa, chính trị trong nước, một phần lớn đều thuộc về tăng sĩ, cho nên Đạo Phật được phổ biến dễ dàng trong quần chúng. Mặc dù Nho giáo và Lão giáo đã truyền vào từ lâu, nhưng không làm sao có uy thế được như Phật giáo. Trong triều chính thì Ngài Ngô Chân Lưu làm đến chức Khuông Việt thái sư; trong giới tăng sĩ thì Ngài Trương Ma Ni làm Tăng lục đạo sĩ và pháp sư Đặng Huyền Quang làm Sùng Chân uy nghi.</p>
        <p>Sau khi nhà Đinh mất ngôi, Lê Đại Hành lên kế vị, chống lại quân nhà Tống (980) và được thắng lợi. Trong giai đoạn này, các vị tăng sĩ lại được biệt đãi hơn; vua Lê Đại Hành thường triệu thỉnh các vị Tăng thống vào triều để bàn hỏi việc nước và khuyến khích việc truyền bá Phật pháp.</p>
        <p>Điều đáng chú ý trong giai đoạn này là, sau khi đã hòa với nhà Tống, vua Đại Hành sai sứ sang triều cống nhà Tống và xin thỉnh bộ "Cửu kinh" và "Đại Tạng kinh" đem về truyền bá. Đây là lần đầu tiên nước ta chính thức sang thỉnh kinh ở Trung Hoa về.</p>
        <p>Một điều đáng ghi nhớ nữa là trong giai đoạn này, trong giới tăng sĩ có hai vị cao tăng xuất chúng đã làm vẻ vang cho nước nhà một thời. Đó là Ngài Khuông Việt thái sư và Ngài Đỗ Thuận thiền sư.</p>
      </section>

      <section id="khuong-viet-thai-su">
        <h4 class="text-lg font-semibold">2. Khuông Việt thái sư</h4>
        <p>Ngài họ Ngô pháp hiệu là Chân Lưu, quê ở làng Cát Lỵ, trụ trì chùa Phật Đà. Thuở nhỏ Ngài theo học Nho, lớn lên thọ giới ở Vân Phong thiền sư ở chùa Khai Quốc. Từ đó Ngài chuyên đọc kinh điển nhà Phật, hiểu được mọi lẽ cốt yếu của Thiền tông, tiếng tăm lừng lẫy trong nước. Năm Ngài 40 tuổi, vua Đinh Tiên Hoàng mời vào hỏi đạo, Ngài ứng đối tinh tường, vua rất mến phục và phong làm Tăng Thống. Năm sau vua lại phong Ngài làm Khuông Việt thái sư (Khuông Việt là người có công giúp đỡ sửa sang nước Việt).</p>
        <p>Đến đời vua Lê Đại Hành, Ngài càng được kính trọng hơn nữa. Bao nhiêu việc quân, việc nước, vua thường triệu Ngài đến hỏi. Ngài ở triều được ít lâu rồi lấy cớ già yếu xin cáo về, dựng một ngôi chùa ở núi Du Hý. Ở đó, Ngài mở trường dạy học, học trò đến rất đông.</p>
        <p>Ngày rằm tháng hai, niên hiệu Thuận Thiên thứ hai đời nhà Lý, Ngài gọi Đa Bảo thiền sư là đệ tử thân tín của Ngài đến, truyền tâm pháp qua bài kệ sau đây, rồi chắp tay an nhiên thị tịch.</p>
        <blockquote>
          <p><strong>Nguyên văn:</strong><br>Mộc trung nguyên hữu hỏa,<br>Nguyên hỏa phục hoàn sinh,<br>Nhược vị mộc vô hỏa,<br>Toản toại hà do sinh?</p>
          <p class="mb-0"><strong>Dịch nghĩa:</strong><br>Trong cây vốn có lửa,<br>Tia lửa mới sáng lòa,<br>Nếu bảo cây không có lửa,<br>Cọ sát sao lại ra?</p>
        </blockquote>
        <p>Ngài thọ được 81 tuổi, và là người thứ tư được truyền tâm pháp của phái Vô Ngôn Thông.</p>
      </section>

      <section id="do-thuan-thien-su">
        <h4 class="text-lg font-semibold">3. Đỗ Thuận Thiền sư</h4>
        <p>Ngài dòng họ Đỗ, không rõ nguyên quán ở đâu, xuất gia từ thuở nhỏ, thọ giới với Long Thọ Phù Trì thiền sư. Khi nhà Tiền Lê mới thành nghiệp, Ngài thường được vời vào triều để bàn luận chính trị và ngoại giao. Vua Đại Hành thường gọi là Đỗ pháp sư, chứ không dám gọi chính tên. Ngài làm thơ rất hay, và thường được cử ra để đối đáp với các sứ giả Trung Hoa.</p>
        <p>Niên hiệu Hưng Thống thứ hai nhà Tiền Lê, Ngài thị tịch, thọ được 76 tuổi. Ngài có làm quyển "Bồ Tát hiệu sám hối văn", nay truyền lại. Ngài là đời truyền pháp thứ mười của phái Tỳ Ni Đa Lưu Chi.</p>
      </section>

      <section id="nhan-xet-doi-dinh-tien-le">
        <h4 class="text-lg font-semibold">4. Nhận xét chung về Phật giáo trong giai đoạn này</h4>
        <p>Phật giáo đời Đinh Tiên Hoàng và Tiền Lê, sở dĩ được ưu đãi và giữ địa vị độc tôn, vì những lý do sau đây: các vị tăng sĩ phần nhiều là những vị bác học thâm Nho. Chữ Nho mặc dù trước đó đã được đem dạy ở đất Việt, nhưng vì chưa có khoa thi cử, nên ít người theo học. Chỉ có các vị thiền sư, vì cần nghiên cứu Phật giáo qua kinh điển bằng chữ Hán, nên phải học Nho nhiều. Những vị sư lúc bấy giờ, vừa túc Nho, vừa hiểu đạo lý mà vừa có đức hạnh, thì lẽ dĩ nhiên trong triều được vua trọng vọng, ngoài dân chúng được kính nể. Đạo Phật được thịnh hành trong giai đoạn này cũng không có gì đáng ngạc nhiên.</p>
      </section>
    </section>

    <section id="phat-giao-duoi-doi-nha-ly">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. PHẬT GIÁO DƯỚI ĐỜI NHÀ LÝ (1010-1225)</h3>

      <section id="duoi-doi-ly-thai-to">
        <h4 class="text-lg font-semibold">1. Dưới đời Lý Thái Tổ</h4>

        <section id="vua-ly-thai-to-va-tinh-hinh-phat-giao">
          <h5 class="text-base font-semibold">a. Vua Lý Thái Tổ và tình hình Phật giáo dưới đời này (1010-1028)</h5>
          <p>Vua Lý Thái Tổ tên húy là Lý Công Uẩn, con nuôi của sư Lý Khánh Vân ở chùa Cổ Pháp, thọ giáo với Ngài Vạn Hạnh Thiền sư. Sau khi vua Lê Ngọa Triều mất, Ngài mới lên ngôi kế vị, lấy hiệu Thuận Thiên đóng đô ở Thăng Long (Hà Nội). Lý Thái Tổ là một Phật tử thuần thành, nên sau khi lên ngôi, Ngài hết sức chú trọng đến sự truyền bá Phật giáo. Ngài đã dựng rất nhiều ngôi chùa và độ rất nhiều Tăng chúng. Đáng chú ý hơn cả là năm 1019, Ngài sai sứ thần sang Trung Hoa thỉnh kinh đem về để tại kinh viện Đại Hưng.</p>
          <p>Triều đại này có thể nói là triều đại mà Phật giáo được thịnh đạt nhất. Các vị thiền sư lúc bấy giờ như Ngài Vạn Hạnh, Đa Bảo, Sùng Phạm thiền sư đều là những bậc danh tăng mà nhà vua rất tín trọng. Cho nên sự truyền giáo của các Ngài rất dễ dàng có hiệu quả. Những vị danh tăng này đều ở hai phái Tỳ Ni Đa Lưu Chi và Vô Ngôn Thông cả.</p>
        </section>

        <section id="van-hanh-thien-su">
          <h5 class="text-base font-semibold">b. Vạn Hạnh Thiền sư</h5>
          <p>Ngài họ Nguyễn, không rõ tên húy là gì, người làng Cổ Pháp. Gia đình Ngài đời đời thờ Phật, Ngài thông minh xuất chúng từ thuở nhỏ, học hết tam giáo và tinh thông về giáo lý nhà Phật. Năm 20 tuổi Ngài xuất gia, theo học với Ngài Thiền Ông đạo giả, tức là vị thứ hai được truyền tâm pháp của phái Tỳ Ni Đa Lưu Chi. Ngài chuyên tập pháp "Tổng trì tam ma địa". Người đời thường xem câu nói của Ngài như những câu sấm. Trong thời vua Đại Hành còn sống, Ngài được vời vào triều hỏi việc quan.</p>
          <p>Năm Thuận Thiên thứ IX (1018) Ngài không đau ốm gì mà tịch. Thi hài Ngài được triều đình và các đệ tử của Ngài hỏa táng và thờ ở trong tháp. Trước khi tịch Ngài có làm bài kệ như sau:</p>
          <blockquote>
            <p><strong>Hán văn:</strong><br>Thân như điện ảnh hữu hoàn vô.<br>Vạn mộc xuân vinh thu tựu khô.<br>Nhậm vận thịnh suy vô bố úy.<br>Thịnh suy như lộ thảo đầu phô.</p>
            <p class="mb-0"><strong>Dịch nghĩa:</strong><br>Thân như bóng chớp chiều tà.<br>Cỏ xuân tươi tốt, thu qua rụng rời.<br>Sá chi suy thịnh việc đời.<br>Thịnh suy như hạt sương rơi đầu cành.</p>
          </blockquote>
        </section>
      </section>

      <section id="duoi-doi-ly-thai-tong">
        <h4 class="text-lg font-semibold">2. Dưới đời Lý Thái Tông (1028-1054)</h4>

        <section id="tinh-hinh-phat-giao-duoi-doi-ly-thai-tong">
          <h5 class="text-base font-semibold">a. Tình hình Phật giáo dưới đời vua này</h5>
          <p>Lý Thái Tông nối ngôi Thái Tổ, lấy niên hiệu Thiên Thành. Ngài cũng là người rất sùng mộ đạo Phật. Sau khi đánh dẹp giặc Chiêm ở đất Hồng Châu (Nghệ An) về, Thái Tông sắc lập 95 ngôi chùa cử lễ khánh thành, hạ chiếu miễn thuế cho dân trong nước một năm. Đến năm 1034, Thái Tông đổi niên hiệu là Thông Thụy, lúc bấy giờ nước Việt Nam được nhà Tống ban Đại Tạng kinh và tự sai sứ thỉnh qua nước ta. Hành động ấy gây một ảnh hưởng khả quan cho Phật giáo nước nhà, và một vinh dự cho triều đình nhà Lý lúc bấy giờ.</p>
          <p>Từ lúc nhận lãnh Đại Tạng kinh của nhà Tống, vua Thái Tông thường đến nghe kinh và hỏi đạo với Ngài Thiền Lão thiền sư và tự xưng là đệ tử. Về sau vua được Ngài Thiền Lão truyền tâm pháp là người thứ bảy trong đời truyền thống của phái Vô Ngôn Thông.</p>
          <p>Dưới đời này có nhiều vị cao tăng rất có công trong sự truyền bá chính pháp, như ngài Huệ Linh thiền sư, Định Lương trưởng lão, Thiền Lão thiền sư v.v.. .</p>
        </section>

        <section id="hue-linh-thien-su">
          <h5 class="text-base font-semibold">b. Huệ Linh thiền sư</h5>
          <p>Ngài họ Lâm, tên tục là Khu, quê ở Đông Phù Liệt, nguyên là con cháu Lâm Phú ở Trà Sơn (Hà Đông bây giờ). Ngài có tướng mạo khôi ngô, ăn nói lưu loát, từ nhỏ đã nổi tiếng văn hay chữ tốt. Những khi học Nho còn thừa thời giờ, ngài lại nghiên cứu kinh Phật. Gần 70 tuổi Ngài theo học đạo với Ngài Định Huệ thiền sư. Từ đó sự tu học của Ngài càng ngày càng tiến. Khi được sư phụ truyền tâm pháp cho, Ngài mới đi hành hóa khắp chốn tùng lâm, rồi đến núi Bồ Đề. Mỗi lần Ngài ngồi nhập định ít nhất cũng năm bảy ngày. Người đời bấy giờ thường gọi Ngài là ông "Phật sống". Nhà vua cho người đi thỉnh Ngài nhiều phen, Ngài mới chịu về triều. Sau khi đàm đạo vua rất kính phục và phong Ngài làm chức Nội cung phụng tăng và truyền sắc ở chùa Vạn Tuệ gần thành Thăng Long.</p>
          <p>Một hôm trong đại nội có thiết tiệc chay đãi các tăng sĩ, vua hỏi:</p>
          <blockquote>
            <p class="mb-0">Đối với tâm nguyện của Phật, các học giả thường cãi nhau. Trẫm muốn các bậc thượng đức ở đây, bày tỏ chỗ sở đắc, để Trẫm được biết sự học vấn của các Ngài như thế nào?</p>
          </blockquote>
          <p>Huệ Linh Thiền sư liền ứng khẩu bài kệ sau đây:</p>
          <blockquote>
            <p><strong>Nguyên văn:</strong><br>Pháp bổn như vô Pháp<br>Phi hữu diệc phi không<br>Nhược nhơn tri thử pháp<br>Chúng sinh dữ Phật đồng<br>Tịch tịch Lăng Già nguyệt<br>Không không độ hải chu<br>Tri không không giác hữu<br>Tam muội nhậm thông chu.</p>
            <p class="mb-0"><strong>Dịch nghĩa:</strong><br>Pháp vốn như không pháp<br>Chẳng có cũng chẳng không<br>Nếu hiểu được pháp ấy<br>Chúng sinh Phật vẫn đồng<br>Trăng Lăng Già phẳng lặng<br>Thuyền Bát Nhã chơn không<br>Biết không rồi biết có<br>Tam muội mặc dung thông.</p>
          </blockquote>
          <p>Nghe bài kệ, vua rất lấy làm mến phục. Thời ấy các vị vương công trong triều và sĩ thứ nhiều người đến hỏi đạo lý và đều tôn Ngài là thầy.</p>
          <p>Sang đời Thánh Tông, Ngài được phong làm Tạ Nhai Tăng đô thống. Đến năm Gia Khánh thứ năm (1063) Ngài tịch. Ngài có soạn mấy cuốn: "Pháp sự Trai Nghi, Đạo Tràng Khánh Tân Văn" nhưng đều thất truyền.</p>
        </section>

        <section id="thien-lao-thien-su">
          <h5 class="text-base font-semibold">c. Thiền Lão thiền sư</h5>
          <p>Ngài trụ trì tại chùa Trùng Minh huyện Tiên Du, đệ tử của Đa Bảo thiền sư. Sau khi học đã đắc đạo, Ngài về ngôi chùa vùng Từ Sơn, danh tiếng lừng lẫy, học trò đông đến nghìn người. Chỗ ở của Ngài thành Đại Tùng Lâm.</p>
          <p>Trong khoảng niên hiệu Thông Thụy (1034-1038) vua Lý Thái Tông nhân một hôm đến thăm và hỏi Ngài:</p>
          <blockquote>
            <p><strong>Hòa thượng tới ở chùa này bao lâu?</strong></p>
            <p>Đản tri kim nhật nguyệt<br>Thùy thức cựu xuân thu</p>
            <p><strong>Dịch nghĩa:</strong><br>Sống ngày nay biết ngày nay<br>Còn xuân thu trước, ai hay làm gì?</p>
            <p><strong>Vua lại hỏi:</strong> Ngày thường Hòa thượng thường làm việc gì?</p>
            <p>Thúy trúc hoàng hoa phi ngoại cảnh<br>Bạch vân minh nguyệt lộ toàn chân</p>
            <p class="mb-0"><strong>Dịch nghĩa:</strong><br>Trúc biếc hoa vàng đâu cảnh khác<br>Trăng trong, mây bạc hiện toàn chân.</p>
          </blockquote>
          <p>Sau khi về cung, vua định sai sứ rước Ngài vào triều để thỉnh làm cố vấn. Sứ giả đến nơi thì Ngài đã tịch rồi.</p>
        </section>
      </section>

      <section id="duoi-doi-ly-thanh-tong">
        <h4 class="text-lg font-semibold">3. Dưới đời Lý Thánh Tông (1054-1075)</h4>

        <section id="tinh-hinh-phat-giao-duoi-doi-ly-thanh-tong">
          <h5 class="text-base font-semibold">a. Tình hình Phật giáo trong đời này</h5>
          <p>Thánh Tông lên ngôi, đổi quốc hiệu là Đại Việt và lấy niên hiệu là Long Thụy Thái Bình. Ngài là một ông vua rất sùng mộ Đạo Phật. Năm Long Thụy thứ năm (1059), Ngài xuống sắc lệnh dựng chùa xây tháp và đúc quả chuông trọng lượng 12.000 cân đồng, tại làng Bảo Thiên thuộc tỉnh Hà Nội. Quả chuông ấy hiện nay vẫn còn.</p>
          <p>Trong thời đại này, phái Thảo Đường xuất hiện ở Việt Nam, do Ngài Thảo Đường, đệ tử Ngài Tuyết Đậu Minh Giác bên Trung Hoa truyền sang. Vua Lý Thánh Tông thọ giáo với Ngài, sau được truyền tâm pháp làm đệ tử đầu tiên của Ngài Thảo Đường. Phái Thảo Đường tức là phái Thiền tông thứ ba ở nước ta vậy.</p>
          <p>Lý Thánh Tông là một tăng sĩ được quyền truyền tâm pháp thì chắc chắn Đạo Phật lúc bấy giờ rất được phát đạt và có ảnh hưởng lớn lao trong dân chúng lắm.</p>
        </section>

        <section id="phai-thao-duong">
          <h5 class="text-base font-semibold">b. Phái Thảo Đường</h5>
          <p>Năm 1069 vua Lý Thánh Tông đi đánh Chiêm Thành, bắt được vua Chiêm Thành là Chế Củ và nhiều dân, quân về làm tù binh. Những tù binh này, vua ban cho các quan trong triều làm hầu hạ. Trong số các quan trong triều, có một vị Tăng Lục. Một hôm, vị Tăng ấy đi vắng, về bỗng thấy bản "Ngữ lục" của mình bị một tù nhân sửa chữa lại cả. Vị Tăng Lục thất kinh, đem về tâu với vua. Vua cho đòi tên tù nhân ấy hỏi, thì y ứng đối rất thông suốt, luận về kinh Phật rất sáng đáng. Hỏi ra mới biết đó là một vị Thiền sư người Trung Hoa, theo thầy qua Chiêm Thành, rồi bị bắt làm tù binh. Vị Thiền sư ấy tức là Ngài Thảo Đường.</p>
          <p>Khi biết rõ tung tích của ngài Thảo Đường Thiền sư, vua Thánh Tông liền sắc phong ngài làm Quốc sư, cho giảng kinh tại chùa Khai Quốc trong thành Thăng Long. Đệ tử đến xin học rất đông. Ngài biệt lập một phái gọi là phái Thảo Đường.</p>
        </section>
      </section>

      <section id="duoi-doi-ly-nhan-tong">
        <h4 class="text-lg font-semibold">4. Dưới đời Lý Nhân Tông (1072-1127)</h4>

        <section id="tinh-hinh-phat-giao-duoi-doi-ly-nhan-tong">
          <h5 class="text-base font-semibold">a. Tình hình Phật giáo trong thời kỳ này</h5>
          <p>Lý Nhân Tông, mặc dù khi lên ngôi tuổi còn nhỏ mà rất thông minh, anh dũng. Ngài rất hâm mộ Phật giáo, cho nên ngoài công việc triều chính ra, Ngài còn để tâm lo truyền bá Phật pháp. Ngài có đặt một vị quan cao cấp trông nom hết thảy các chùa trong nước. Ngài lại phong cho Khô Đầu thiền sư làm Quốc sư để cố vấn việc quốc chính, như Ngài Khuông Việt dưới đời Đinh và Tiền Lê.</p>
          <p>Song song với công việc chấn hưng Phật pháp của vua, bà Hoàng hậu cũng là một tín nữ đắc lực, đã xuất của riêng ra lập hơn trăm ngôi chùa trong nước.</p>
          <p>Trong đời này, lại có nhiều bậc thiền sư lỗi lạc, trước thuật những sách vở làm vẻ vang cho lịch sử Phật giáo nước nhà như Ngài Viên Chiếu Thiền sư, Ngộ Ấn thiền sư ...</p>
        </section>

        <section id="vien-chieu-thien-su">
          <h5 class="text-base font-semibold">b. Viên Chiếu Thiền sư</h5>
          <p>Ngài họ Mai, tên húy là Trực, quê ở huyện Long Đàm, con anh bà Linh Cảm Thái hậu (Vợ vua Thái Tông). Ngài thông minh từ thuở nhỏ. Mặc dù con nhà quyền quý, Ngài từ giã gia đình, vào chùa Tiêu Sơn, xin làm đệ tử Ngài Định Hương Thiền sư, nghiên cứu thiền học. Ngài rất am hiểu pháp "Tam quán" trong kinh Viên Giác, tu đến đắc đạo và được sư phụ truyền tâm ấn.</p>
          <p>Sau Ngài về Thăng Long, dựng một ngôi chùa ở mé tả kinh thành và trụ trì tại đó. Người bốn phương nghe tiếng xin theo học rất đông.</p>
          <p>Ngài có soạn quyển: "Dược sư thập nhị văn", trong ấy bàn giải về 12 điều đại nguyện trong kinh dược sư. Vua Lý Nhân Tông có đưa bản sách ấy cho các sứ thần sang Trung Hoa dâng vua Triết Tông nhà Tống. Vua Tống giao sách ấy cho các vị thượng tọa ở chùa Tướng Quốc xem và có chỗ nào đáng sửa thì sửa lại. Các đại sư Trung Hoa xem rồi tâu với vua Tống rằng: "Đây là đấng hóa thân đại sĩ ra đời ở phương Nam, giảng giải kinh nghĩa rất tinh vi, bọn phàm tăng chúng tôi đâu dám thêm bớt một chữ nào nữa!".</p>
          <p>Vua Tống sắc cho sao lại một bản, còn bản chính thì trả lại cho vua ta với nhiều lời khen tặng. Ngài Viên Chiếu tịch năm Quảng Hựu thứ sáu (1090) thọ 92 tuổi.</p>
          <p>Sau đây là bài thơ của Ngài còn truyền lại:</p>
          <blockquote>
            <p><strong>Nguyên văn:</strong><br>Giốc hưởng tùy phong xuyên trúc đáo<br>Sơn nham đáo nguyệt quá tường lai<br>Vũ trích nham hoa thần nữ lệ<br>Phong xao đính trúc Bá Nha cầm.</p>
            <p class="mb-0"><strong>Dịch nghĩa:</strong><br>Theo gió tiếng còi luồng bụi trúc<br>Kèm trăng trái núi quá đầu tường<br>Hoa núi mưa sa thần nữ khóc<br>Tre xanh gió thổi Bá Nha đàn.</p>
          </blockquote>
        </section>
      </section>

      <section id="duoi-doi-ly-than-tong">
        <h4 class="text-lg font-semibold">5. Dưới đời Lý Thần Tông (1128-1138)</h4>
        <p>Lý Nhân Tông không có con, lập con của hoàng đệ là Sùng Hiền Hầu lên làm Thái tử, sau lên ngôi tức là Thần Tông. Năm Thiên Chương Bảo Tự thứ tư (1136) vua mắc bệnh nặng, nhờ có Minh Không Thiền sư chữa khỏi, nên vua phong cho thiền sư làm Quốc sư và sắc lập chùa Linh Cảm.</p>
        <p>Trong đời này cũng có nhiều vị danh tăng như Minh Không Thiền Sư, Thông Biện Thiền sư, Bảo Giám Thiền sư và đặc biệt có một sư Ni, con gái một vị hoàng thân, tức là bà Diệu Nhân. Vị sư Ni này thọ giới với Chân Không Thiền sư, và là vị Ni đầu tiên trong phái Tỳ Ni Đa Lưu Chi. Ngoài ra, trong thời này cũng có nhiều vị cao tăng trong phái Vô Ngôn Thông, Thảo Đường mở đạo tràng dạy đệ tử hoặc đi hành hóa, dùng pháp thuật cứu giúp kẻ bệnh tật rất nhiều.</p>
      </section>

      <section id="duoi-doi-cac-vi-vua-cuoi-doi-nha-ly">
        <h4 class="text-lg font-semibold">6. Dưới đời các vị vua cuối đời nhà Lý: Lý Anh Tông (1138-1175), Lý Cao Tông (1176-1210), Lý Huệ Tông (1211-1225)</h4>

        <section id="ly-anh-tong-va-thoi-dai-nay">
          <h5 class="text-base font-semibold">a. Lý Anh Tông và thời đại này</h5>
          <p>Thần Tông mất, thái tử Thiên Tộ lên làm vua lấy đế hiệu là Anh Tông. Anh Tông là đệ tử của Không Lộ Thiền sư (phái Thảo Đường) và được truyền tâm pháp, tức là vị đệ tử thứ tư nối truyền thống của phái Thảo Đường.</p>
          <p>Những vị Thiền sư có tiếng trong đời này là: Trí Thuyền, Am Trí, Bảo Giám, Viên Thông Thiền sư. Ngài Viên Thông Thiền sư được phong làm quốc sư vào năm 1143, tịch năm 1151, thọ 72 tuổi. Ngài có trước tác những bộ sách hiện còn lưu lại:</p>
          <p>Chư Phật tích dư sự (30 chương).<br>Hồng Chung Văn Bi Ký<br>Tăng già tạp lục (50 chương).<br>1000 bài thơ</p>
        </section>

        <section id="ly-cao-tong-va-thoi-dai-nay">
          <h5 class="text-base font-semibold">b. Lý Cao Tông và thời đại này</h5>
          <p>Anh Tông mất, Thái tử Long Cán nối ngôi, hiệu là Cao Tông. Cao Tông lên ngôi mới ba tuổi, công việc trong triều giao trong tay quan phụ chánh Hồ Hiến Hành. Cao Tông lớn lên thụ giáo với Ngài Trương Tam Tạng Thiền sư trong phái Thảo Đường.</p>
          <p>Trong đời này, tuy vua chúa, các bà cung phi và triều đình (như thái úy Tô Hiến Thành, thái bảo Ngô Hòa Nghĩa) đều sùng mộ Đạo Phật, nhưng sự phát triển không có gì đặc sắc đáng kể. Vận nước đang xuống, và Phật giáo cũng xuôi theo đà.</p>
        </section>

        <section id="ly-hue-tong-voi-thoi-dai-nay">
          <h5 class="text-base font-semibold">c. Lý Huệ Tông với thời đại này</h5>
          <p>Thái tử Sảm nối ngôi Cao Tông, tức là Huệ Tông. Nhà Lý đến giai đoạn này, đã suy lắm. Trong triều thì nổi loạn, vua không có thực quyền, ngoài dân gian cũng không được yên ổn. Do đó, Phật giáo cũng bị ảnh hưởng theo.</p>
          <p>Năm 1224, Huệ Tông chán ngán cái đời làm vua, truyền ngôi cho con gái mới 7 tuổi là công chúa Phật Kim, tức Lý Chiêu Hoàng, rồi xuất gia ở chùa Chân Giáo, tự xưng là Huệ Quang Đại Sư.</p>
          <p>Lý Chiêu Hoàng truyền ngôi cho chồng là Trần Cảnh. Nhà Lý chấm dứt từ đấy!</p>
        </section>
      </section>

      <section id="nhan-xet-chung-phat-giao-doi-nha-ly">
        <h4 class="text-lg font-semibold">7. Nhận xét chung về Phật giáo đời nhà Lý</h4>
        <p>Nếu ở Trung Hoa, đời Đường là đời Phật giáo thịnh hành nhất, thì ở Việt Nam đời Lý là đời Phật giáo được thịnh hành nhất.</p>
        <p>Trong hơn hai trăm năm, Đạo Phật giữ địa vị độc tôn về mọi phương diện: Đạo đức, văn học, chính trị, ngoại giao. Tám đời vua nhà Lý đều sùng mộ Đạo Phật và có nhiều vị đã xuất gia đắc đạo. Các vị Tăng trong đời vua ấy là những cao Tăng, Đại đức, thông thái và giữ nhiều địa vị quan trọng trong triều đình. Không những thế, các Ngài còn là những thi sĩ lỗi lạc, những nhà ngoại giao tài tình và những nhà mô phạm uyên bác. Các Ngài đã tận tụy đem cái sở học, sở đắc của mình nhập thế cứu đời, gây uy tín rất lớn cho Đạo Phật. Chính các Ngài đã gián tiếp cải chính một cách hùng hồn bằng những hành động của mình rằng: Đạo Phật không phải là yếm thế, nhu nhược mà chính là tích cực, dõng mãnh cứu đời và đã góp công rất lớn trong công cuộc dựng nước và an dân. Đọc lịch sử Phật giáo nước nhà đến đoạn này, chúng tăng sĩ thật vô cùng phấn khởi và càng thêm tin tưởng vào sứ mệnh cứu đời của Phật giáo.</p>
      </section>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Dựa trên nội dung bài học, tại sao Phật giáo lại giữ một vai trò quan trọng trong việc hình thành văn hóa Việt Nam?',
    options: {
      a: 'Vì tinh thần đạo đức và công lao giáo hóa của các tổ sư có ảnh hưởng sâu rộng đến lịch sử dân tộc.',
      b: 'Vì Phật giáo là tôn giáo duy nhất tồn tại ở Việt Nam từ thời cổ đại.',
      c: 'Vì Phật giáo được du nhập trực tiếp bởi các vị vua đầu tiên của nước Việt.',
      d: 'Vì văn hóa phương Tây đã thúc đẩy sự phát triển của Phật giáo trong thời kỳ đầu.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Tài liệu trích dẫn lời Thượng tọa Mật Thể khẳng định rằng nhờ tinh thần đạo đức và công nghiệp bố giáo, các tổ sư Phật giáo đã có công rất lớn đối với lịch sử văn hóa nước nhà [1].',
      b: 'Sai. Tài liệu cho biết Nho giáo và Lão giáo cũng đã được truyền vào từ lâu và cùng tồn tại với Phật giáo [2].',
      c: 'Sai. Phật giáo được du nhập qua các nhà truyền giáo Ấn Độ và Trung Hoa, không phải trực tiếp do các vị vua đầu tiên mang về [3], [4].',
      d: 'Sai. Văn hóa phương Tây từng lấn át khiến Phật giáo bị xem nhẹ trong thời Pháp thuộc, chứ không thúc đẩy sự phát triển trong thời kỳ đầu [5].',
    },
  },
  {
    question: 'Những nhà truyền giáo đầu tiên đặt chân lên đất Giao Châu chủ yếu đi bằng con đường nào?',
    options: {
      a: 'Đường hàng hải trực tiếp từ các nước phương Tây.',
      b: 'Con đường tơ lụa đi xuyên qua các nước Trung Á.',
      c: 'Cả đường thủy từ phía Nam lên và đường bộ từ phía Bắc xuống.',
      d: 'Hoàn toàn bằng đường bộ từ Trung Hoa xuống phía Nam.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Không có bằng chứng trong tài liệu về đường hàng hải từ phương Tây [3].',
      b: 'Sai. Con đường tơ lụa Trung Á không được nhắc đến trong tài liệu này [3].',
      c: 'Đúng. Phật giáo du nhập vào Việt Nam bằng cả hai ngả: đường biển (thủy) từ Ấn Độ ở phía Nam lên và đường bộ từ Trung Hoa ở phía Bắc xuống [3].',
      d: 'Sai. Ngoài đường bộ từ phương Bắc, còn có đường biển từ phương Nam với các nhà truyền giáo Ấn Độ [3].',
    },
  },
  {
    question: 'Ai được coi là Sơ tổ của phái Thiền tông đầu tiên tại Việt Nam?',
    options: {
      a: 'Ngài Thảo Đường.',
      b: 'Ngài Tỳ Ni Đa Lưu Chi.',
      c: 'Ngài Khương Tăng Hội.',
      d: 'Ngài Vô Ngôn Thông.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ngài Thảo Đường là tổ sư của phái Thiền tông thứ ba tại nước ta [6].',
      b: 'Đúng. Ngài Tỳ Ni Đa Lưu Chi đưa Thiền tông vào năm 580 và được xác nhận chính là Sơ tổ Thiền tông ở Việt Nam [7], [8].',
      c: 'Sai. Ngài Khương Tăng Hội là một trong những nhà truyền giáo đầu tiên ghé qua Giao Châu, nhưng không phải là Sơ tổ Thiền tông [4].',
      d: 'Sai. Ngài Vô Ngôn Thông lập ra phái Thiền tông thứ hai vào khoảng năm 820 [7], [9].',
    },
  },
  {
    question: 'Sự kiện nào đánh dấu lần đầu tiên nước ta chính thức sang Trung Hoa thỉnh kinh về truyền bá?',
    options: {
      a: 'Dưới thời Đinh Tiên Hoàng khi phong chức Tăng Thống.',
      b: 'Dưới thời vua Lý Thái Tổ sau khi dời đô về Thăng Long.',
      c: 'Dưới thời vua Lê Đại Hành sau khi thắng quân Tống.',
      d: 'Dưới thời Ngô Quyền sau chiến thắng Bạch Đằng.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Vua Đinh Tiên Hoàng có phong Tăng Thống nhưng chưa có hoạt động thỉnh kinh chính thức [10].',
      b: 'Sai. Vua Lý Thái Tổ có sai sứ sang thỉnh kinh nhưng đây không phải là lần đầu tiên [11].',
      c: 'Đúng. Sau khi hòa với nhà Tống, vua Lê Đại Hành đã sai sứ sang triều cống và xin thỉnh bộ Cửu kinh cùng Đại Tạng kinh. Đây được ghi nhận là lần đầu tiên nước ta chính thức sang thỉnh kinh ở Trung Hoa về [12].',
      d: 'Sai. Tài liệu không ghi nhận sự kiện thỉnh kinh dưới thời Ngô Quyền.',
    },
  },
  {
    question: 'Danh hiệu "Khuông Việt Thái sư" mà vua Đinh Tiên Hoàng phong cho Ngài Chân Lưu có ý nghĩa gì?',
    options: {
      a: 'Người bảo vệ các ngôi chùa trên đất Việt.',
      b: 'Vị thầy dạy đạo pháp cho hoàng gia.',
      c: 'Người đứng đầu các đạo sĩ trong cả nước.',
      d: 'Người có công giúp đỡ sửa sang nước Việt.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. "Khuông Việt" không có nghĩa là bảo vệ chùa chiền [10].',
      b: 'Sai. Dù Ngài được vua trọng vọng hỏi việc nước nhưng danh hiệu không có nghĩa là thầy dạy đạo cho hoàng gia [10].',
      c: 'Sai. Ngài là Tăng Thống đứng đầu Phật giáo, không phải đứng đầu đạo sĩ [10].',
      d: 'Đúng. Tài liệu chú thích rõ ràng rằng "Khuông Việt" nghĩa là người có công giúp đỡ sửa sang nước Việt [10].',
    },
  },
  {
    question: 'Bài kệ "Thân như điện ảnh hữu hoàn vô" của Thiền sư Vạn Hạnh nhằm nhắc nhở điều gì?',
    options: {
      a: 'Sự vĩnh cửu của thể xác con người theo thời gian.',
      b: 'Sự vô thường, biến đổi của vạn vật và thân phận con người.',
      c: 'Tầm quan trọng của việc luyện tập để có sức khỏe bền bỉ.',
      d: 'Khuyên con người nên tích trữ của cải cho đời sau.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Bài kệ nói về sự phù du, không phải vĩnh cửu [13].',
      b: 'Đúng. Bài kệ mượn hình ảnh "bóng chớp chiều tà" (điện ảnh), "cỏ xuân tươi tốt thu qua rụng rời" (vạn mộc) để nhắc nhở con người về sự vô thường của vạn vật và khuyên không nên sợ hãi trước sự thịnh suy ở đời [13].',
      c: 'Sai. Không liên quan đến việc rèn luyện sức khỏe [13].',
      d: 'Sai. Không mang ý nghĩa khuyên bảo tích trữ của cải [13].',
    },
  },
  {
    question: 'Phái Thảo Đường được hình thành ở Việt Nam trong hoàn cảnh đặc biệt nào?',
    options: {
      a: 'Vua Lý Thánh Tông đi đánh Chiêm Thành và bắt được Ngài Thảo Đường làm tù binh.',
      b: 'Do một vị hoàng thân triều Lý đi du học ở phương Nam đem về.',
      c: 'Được truyền sang bởi các đoàn truyền giáo Ấn Độ.',
      d: 'Sư Thảo Đường tự mình đi bộ từ Trung Hoa sang Việt Nam để mở đạo.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Năm 1069, vua Lý Thánh Tông đi đánh Chiêm Thành và đã vô tình bắt được một thiền sư Trung Hoa (Ngài Thảo Đường) làm tù binh, từ đó phát hiện ra tài năng của ngài và lập nên phái Thảo Đường [6], [14].',
      b: 'Sai. Không có vị hoàng thân nào đi du học để mang phái này về [6].',
      c: 'Sai. Ngài Thảo Đường là người Trung Hoa (đệ tử Ngài Tuyết Đậu Minh Giác), không phải do đoàn Ấn Độ truyền sang [6].',
      d: 'Sai. Ngài Thảo Đường theo thầy qua Chiêm Thành rồi bị bắt làm tù binh đưa về Đại Việt, không phải tự ý đi bộ sang mở đạo [6].',
    },
  },
  {
    question: 'Vì sao các vị tăng sĩ thời Đinh - Lê thường được nhà vua mời tham chính và bàn thảo việc nước?',
    options: {
      a: 'Vì các vị tăng sĩ nắm giữ toàn bộ quân quyền trong tay.',
      b: 'Vì họ vừa giỏi chữ Nho, vừa có đạo đức và am hiểu đạo lý sâu sắc.',
      c: 'Vì họ là những người duy nhất biết chữ vào thời điểm đó.',
      d: 'Vì nhà vua sợ uy tín của họ trong dân chúng nên phải giữ họ ở gần.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tăng sĩ không nắm quân quyền, họ chỉ đóng vai trò cố vấn [15], [16].',
      b: 'Đúng. Các thiền sư bấy giờ am hiểu kinh điển bằng chữ Hán nên có vốn Nho học thâm sâu (túc Nho), đồng thời có đạo hạnh và am hiểu đạo lý nên được triều đình trọng dụng và mời bàn việc nước [16].',
      c: 'Sai. Chữ Nho đã được dạy ở đất Việt nhưng vì chưa có khoa thi nên ít người học, chứ không phải tăng sĩ là những người duy nhất biết chữ [16].',
      d: 'Sai. Việc mời tham chính xuất phát từ sự mến phục tài đức thực sự của họ chứ không phải vì lý do e sợ uy tín [16].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-5-bai-3-lich-su-phat-giao-viet-nam',
  slug: 'bai-thu-3-lich-su-phat-giao-viet-nam',
  title: 'Bài Thứ 3 - Lịch sử Phật giáo Việt Nam',
  type: 'article',
  status: 'published',
  order: 3,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-17',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-3-lich-su-phat-giao-viet-nam/infographic.png',
      readingContent,
      tableOfContents: [
        { id: 'mo-de', label: 'A. Mở đề' },
        { id: 'phat-giao-du-nhap-vao-viet-nam', label: 'I. Phật giáo du nhập vào Việt Nam' },
        { id: 'con-duong-du-nhap', label: '1. Con đường du nhập', indent: 1 },
        { id: 'thoi-dai-du-nhap-dau-tien', label: '2. Thời đại du nhập đầu tiên', indent: 1 },
        { id: 'cac-mon-phai-du-nhap', label: '3. Các môn phái du nhập', indent: 1 },
        { id: 'phat-giao-duoi-thoi-hau-ly-nam-de-va-bac-thuoc-lan-thu-ba', label: 'II. Phật giáo dưới thời Hậu Lý Nam Đế và Bắc thuộc lần thứ ba' },
        { id: 'giai-doan-thu-nhat', label: '1. Giai đoạn thứ nhất', indent: 1 },
        { id: 'giai-doan-thu-hai', label: '2. Giai đoạn thứ hai', indent: 1 },
        { id: 'giai-doan-thu-ba', label: '3. Giai đoạn thứ ba', indent: 1 },
        { id: 'phat-giao-duoi-thoi-dinh-va-tien-le', label: 'III. Phật giáo dưới thời Đinh và Tiền Lê' },
        { id: 'tinh-trang-tong-quat-doi-dinh-tien-le', label: '1. Tình trạng tổng quát', indent: 1 },
        { id: 'khuong-viet-thai-su', label: '2. Khuông Việt thái sư', indent: 1 },
        { id: 'do-thuan-thien-su', label: '3. Đỗ Thuận Thiền sư', indent: 1 },
        { id: 'nhan-xet-doi-dinh-tien-le', label: '4. Nhận xét chung', indent: 1 },
        { id: 'phat-giao-duoi-doi-nha-ly', label: 'IV. Phật giáo dưới đời nhà Lý' },
        { id: 'duoi-doi-ly-thai-to', label: '1. Dưới đời Lý Thái Tổ', indent: 1 },
        { id: 'vua-ly-thai-to-va-tinh-hinh-phat-giao', label: 'a. Vua Lý Thái Tổ và tình hình Phật giáo', indent: 2 },
        { id: 'van-hanh-thien-su', label: 'b. Vạn Hạnh Thiền sư', indent: 2 },
        { id: 'duoi-doi-ly-thai-tong', label: '2. Dưới đời Lý Thái Tông', indent: 1 },
        { id: 'tinh-hinh-phat-giao-duoi-doi-ly-thai-tong', label: 'a. Tình hình Phật giáo', indent: 2 },
        { id: 'hue-linh-thien-su', label: 'b. Huệ Linh thiền sư', indent: 2 },
        { id: 'thien-lao-thien-su', label: 'c. Thiền Lão thiền sư', indent: 2 },
        { id: 'duoi-doi-ly-thanh-tong', label: '3. Dưới đời Lý Thánh Tông', indent: 1 },
        { id: 'tinh-hinh-phat-giao-duoi-doi-ly-thanh-tong', label: 'a. Tình hình Phật giáo trong đời này', indent: 2 },
        { id: 'phai-thao-duong', label: 'b. Phái Thảo Đường', indent: 2 },
        { id: 'duoi-doi-ly-nhan-tong', label: '4. Dưới đời Lý Nhân Tông', indent: 1 },
        { id: 'tinh-hinh-phat-giao-duoi-doi-ly-nhan-tong', label: 'a. Tình hình Phật giáo trong thời kỳ này', indent: 2 },
        { id: 'vien-chieu-thien-su', label: 'b. Viên Chiếu Thiền sư', indent: 2 },
        { id: 'duoi-doi-ly-than-tong', label: '5. Dưới đời Lý Thần Tông', indent: 1 },
        { id: 'duoi-doi-cac-vi-vua-cuoi-doi-nha-ly', label: '6. Các vị vua cuối đời nhà Lý', indent: 1 },
        { id: 'ly-anh-tong-va-thoi-dai-nay', label: 'a. Lý Anh Tông', indent: 2 },
        { id: 'ly-cao-tong-va-thoi-dai-nay', label: 'b. Lý Cao Tông', indent: 2 },
        { id: 'ly-hue-tong-voi-thoi-dai-nay', label: 'c. Lý Huệ Tông', indent: 2 },
        { id: 'nhan-xet-chung-phat-giao-doi-nha-ly', label: '7. Nhận xét chung về Phật giáo đời nhà Lý', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-3-lich-su-phat-giao-viet-nam/Vietnamese_Buddhist_History.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/5EVXTmS0nRo',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/2W3n6FYh9aALv4ZPow0oyl?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Lịch sử Phật giáo Việt Nam',
    passPercentage: 70,
    questions,
  },
}

export default lesson
