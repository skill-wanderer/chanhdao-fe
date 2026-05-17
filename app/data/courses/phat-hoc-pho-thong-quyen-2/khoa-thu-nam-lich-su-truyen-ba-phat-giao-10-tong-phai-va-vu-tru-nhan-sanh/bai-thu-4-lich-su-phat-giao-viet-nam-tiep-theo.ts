import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">

  <section id="phat-giao-duoi-thoi-nha-tran">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">I. PHẬT GIÁO DƯỚI THỜI NHÀ TRẦN (1225-1400)</h2>

    <section id="tinh-hinh-chung-duoi-doi-nha-tran">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Tình hình chung của Phật giáo dưới đời nhà Trần</h3>
      <p>Nhà Trần nối nghiệp nhà Lý, thừa hưởng về mọi phương diện một di sản quý báu mà nhà Lý đã xây dựng trên hai thế kỷ. Riêng về Phật giáo, mặc dù về cuối đời nhà Lý, triều đình gặp nhiều vụ nội biến và trong phái thiền môn ít có được những vị Cao tăng đại đức như ở đầu đời Lý; nhưng trong dân chúng, Đạo Phật đã thấm nhuần sâu xa, đâu đâu cũng có chùa, có tượng Phật để tín đồ sùng bái.</p>
      <p>Bước sang đầu đời nhà Trần, có nhiều lý do khiến chúng ta tin tưởng rằng Đạo Phật sẽ được phát triển mạnh thêm, nhất là các vị vua đầu nhà Trần là những vị vua thông hiểu và sùng mộ Phật giáo còn hơn cả những vị vua đầu nhà Lý. Thế mà Đạo Phật trong đời nhà Trần chỉ thịnh phát trong khoảng 50 năm đầu, rồi dừng lại và thoái bộ mãi.</p>
      <p>Có hai lý do làm cho Đạo Phật không thể tiến phát được là: ở bên ngoài, sự cạnh tranh ráo riết, có nhiều khi là cả một sự đàn áp của Khổng giáo; và ở bên trong, giáo lý Đạo Phật dần dần bị xen lẫn mê tín dị đoan của những tà giáo ngoại đạo mà các vua chúa trong đời nhà Trần rất sùng mộ.</p>
      <p>Vì những sự mê tín dị đoan này, Đạo Phật trước con mắt những nhà thức giả, nhất là phía Khổng giáo, trở thành một cái đạo vô bổ, nguy hiểm cho đời sống quốc gia. Các nhà Nho đua nhau công kích Phật giáo. Triều đình mở những kỳ khảo hạch tăng sĩ về những giáo lý thông thường. Những vị sư nào thi hỏng thì phải hoàn tục. Những người thi đỗ thì được bổ làm chức Triều cung (coi việc các cung), Triều quan (coi việc các đền), Triều tự (coi việc các chùa).</p>
      <p>Thật là một hiện tượng suy đồi rõ rệt: các tăng sĩ phải đi thi để giữ chức coi việc cúng bái ở các cung vua và các đền miếu. Mỉa mai cay độc hơn nữa là trong đời vua Phế Đế (1381), tăng chúng của Đạo Từ Bi lại bị triệu tập làm thành một đạo binh dưới sự thống lĩnh của một vị Thiền sư để đi đánh giặc Chiêm Thành.</p>
    </section>

    <section id="cac-vi-vua-nha-tran-co-cong">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Các vị vua nhà Trần có công với sự truyền bá Phật pháp</h3>
      <p>Như đoạn trên đã nói, trong đầu đời nhà Trần có nhiều vị vua rất sùng mộ Phật pháp và đã có công lớn đối với việc truyền bá Đạo Phật trong nước.</p>

      <section id="vua-tran-thai-tong">
        <h4 class="text-lg font-semibold">a. Vua Trần Thái Tông (1225-1258)</h4>
        <p>Trần Thái Tông tên húy là Trần Cảnh, chồng bà Lý Chiêu Hoàng. Sau khi được vợ nhường ngôi, Trần Thái Tông trở thành vị vua khai nguyên đời Trần. Ngài là một vị quốc vương hiếu đạo rất sâu xa.</p>
        <p>Khi mới lên ngôi, Ngài đã lo việc truyền bá Đạo Phật bằng cách lập chùa, đúc chuông và hộ trì Phật, Pháp, Tăng. Ngài lại còn soạn được hai tập sách rất có giá trị và gây ảnh hưởng quý báu cho việc truyền bá Phật pháp thời bấy giờ là quyển <strong>Thiền tông Chỉ Nam</strong> và quyển <strong>Khóa hư</strong>. Tập <strong>Thiền tông Chỉ Nam</strong> nói rõ về đạo lý tu thiền; còn tập <strong>Khóa hư</strong> giải rõ hành tướng của cái khổ: sinh, lão, bệnh, tử. Hai tập ấy ngày nay vẫn còn lưu truyền.</p>
      </section>

      <section id="vua-tran-nhan-tong">
        <h4 class="text-lg font-semibold">b. Vua Trần Nhân Tông (1278-1293)</h4>
        <p>Trần Nhân Tông là vị vua thứ ba đời Trần. Sau khi đã đánh bại quân Mông Cổ một cách oai hùng, Ngài truyền ngôi lại cho con và vào tu ở núi Yên Tử. Ngài thường đi khắp đó đây để bài trừ những hình thức mê tín dị đoan trong dân gian, thiết lập tu viện, thuyết pháp độ sinh, mở rộng những trạm phát thuốc để cứu giúp người tật bệnh.</p>
        <p>Sau Ngài truyền pháp lại cho Tôn giả Pháp Loa và tịch ở am Ngọa Vân trong lúc đang đi du hóa. Ngài chính là Sơ Tổ phái Trúc Lâm.</p>
      </section>

      <section id="vua-tran-anh-tong">
        <h4 class="text-lg font-semibold">c. Trần Anh Tông (1293-1314)</h4>
        <p>Trần Anh Tông là vị vua thứ tư của nhà Trần, kế vị vua Trần Nhân Tông. Ngài là đệ tử của Pháp Loa tôn sư, nên rất tinh thông về Phật pháp. Noi gương phụ vương là vua Trần Nhân Tông, Ngài đã hăng hái truyền bá Phật giáo trong nước.</p>
        <p>Sau khi thỉnh được Đại tạng kinh ở Trung Hoa về, Ngài sắc in nhiều bản và phát cho nhân dân. Trong dịp xuất gia của Thái thượng hoàng Trần Nhân Tông, Ngài lại còn truyền thiết những đàn tràng lớn để hành lễ và phát chẩn cho dân nghèo.</p>
        <p>Tuy vậy, đến đời Anh Tông, Đạo Phật không còn giữ được cái sắc thái rực rỡ như đầu đời Trần nữa. Sau đời vua này, các vị vua kế vị tuy vẫn là những Phật tử nhưng không còn được lòng tin sáng suốt và thuần túy nữa. Ngoại đạo, tà giáo từ Trung Hoa truyền sang đã xen lẫn trong niềm tin của họ.</p>
      </section>
    </section>

    <section id="phai-truc-lam-yen-tu">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phái Trúc Lâm Yên Tử và các vị Tổ trong phái ấy</h3>
      <p>Trong đời Trần, các vị danh tăng không được đông đảo như ở đời Lý. Tuy thế, trong đời này Phật giáo Việt Nam cũng đã phát triển được một tông phái mới là Trúc Lâm, phát tích từ núi Yên Tử, và các vị Tổ trong phái này cũng là những bậc cao tăng mà đời sau luôn tưởng nhớ mỗi khi nói đến Đạo Phật đời Trần.</p>
      <p>Sau đây chúng ta hãy tìm biết qua tiểu sử và sự nghiệp của các vị ấy:</p>

      <section id="tue-trung-thuong-si">
        <h4 class="text-lg font-semibold">a. Tuệ Trung Thượng Sĩ</h4>
        <p>Ngài húy là Trần Quốc Tung (trong văn bản cũ ghi Trần Quốc Toản), con trai của An Sinh Vương Trần Liễu. Khi giặc Nguyên (Mông Cổ) hai lần sang đánh chiếm nước ta, Ngài theo Hưng Đạo Vương đi chống giặc, lập được nhiều chiến công và được phong đến chức Tiết độ sứ.</p>
        <p>Ngài có lòng mộ đạo từ nhỏ, nhưng vì gặp lúc quốc biến, Ngài phải ra tay phò vua giúp nước. Khi giặc yên, Ngài xin từ chức lui về phong ấp là Vạn Niên hương, chuyên tâm học đạo với Tiêu Diêu thiền sư, là một đệ tử cuối cùng của phái Vô Ngôn Thông.</p>
        <p>Khi ngộ đạo, Ngài thường lập đàn giảng đạo, các môn đồ thiện tín đến dự thính rất đông. Vua Thánh Tông rất kính trọng Ngài, tứ hiệu Ngài là <strong>Tuệ Trung Thượng Sĩ</strong> và ký thác vua Trần Nhân Tông cho Ngài. Ngài hết lòng dạy bảo Nhân Tông về phần đạo lý và sau này Nhân Tông lập ra phái Trúc Lâm và trở thành Đệ nhất tổ của phái này cũng là nhờ ảnh hưởng tinh thần của Tuệ Trung Thượng Sĩ.</p>
        <p>Khi gần hóa, Ngài khiến người nhà kê ghế giữa căn nhà trống, ngồi tựa vào ghế mà tịch. Các nàng hầu khóc lên, Ngài liền mở mắt ra quở rằng:</p>
        <blockquote>
          <p>Sinh tử lẽ thường, có gì đáng thương xót mà làm nhiễu tâm hồn ta như thế?</p>
        </blockquote>
        <p>Các nàng hầu im bặt; Ngài lại nhắm mắt mà tịch. Ngài thọ 62 tuổi.</p>
      </section>

      <section id="tran-nhan-tong-de-nhat-to">
        <h4 class="text-lg font-semibold">b. Trần Nhân Tông, đệ nhất Tổ của phái Trúc Lâm Yên Tử</h4>
        <p>Đây chính là vị vua đã được nhắc ở đoạn trên: sau khi hoàn thành sự nghiệp hộ quốc an dân, Ngài xuất gia tu ở núi Yên Tử, thuyết pháp độ sinh, bài trừ mê tín dị đoan và trở thành Sơ Tổ của dòng Thiền Trúc Lâm.</p>
      </section>

      <section id="phap-loa-to-su">
        <h4 class="text-lg font-semibold">c. Pháp Loa Tổ sư, vị Tổ thứ hai của phái Trúc Lâm</h4>
        <p>Ngài họ Đồng, người hang Cửu La, phủ Nam Sách (nay thuộc tỉnh Hải Dương). Ngài thiên tư đỉnh ngộ, năm 21 tuổi gặp Ngài Điều Ngự (tức là vua Nhân Tông) khen có pháp nhãn và được thu làm đệ tử. Ngài ngộ đạo rất sớm.</p>
        <p>Năm 25 tuổi, Ngài phụng mệnh làm lễ khai giảng ở chùa Siêu Loại, có vua và đình thần đến dự. Sau buổi khai giảng ấy, Ngài Điều Ngự phong cho Ngài làm chủ Sơn môn Yên Tử và đem kinh điển hơn hai trăm bộ giao phó cho Ngài.</p>
        <p>Ngài phụng chiếu định chức các tăng đồ và quản lãnh tăng chúng. Tăng đồ có tăng tịch, sổ sách rõ ràng là bắt đầu từ đó. Trong một đời, Ngài đúc được 1.300 tượng Phật, dựng hai đài giảng đạo, năm ngôi tháp, hai trăm sở tăng đường, độ cho hơn 15.000 tăng ni, trong số ấy có 3.000 người được đắc pháp.</p>
        <p>Ngoài ra, Ngài còn soạn hai tập <strong>Đoạn sách lục</strong> và <strong>Tham thiền yếu chỉ</strong>, nay còn lưu truyền. Công nghiệp lớn lao như thế, nhưng tiếc thay đời Ngài lại rất ngắn ngủi, hưởng thọ 47 năm.</p>
      </section>

      <section id="huyen-quang-ton-su">
        <h4 class="text-lg font-semibold">d. Huyền Quang Tôn sư, vị Tổ thứ ba của phái Trúc Lâm</h4>
        <p>Ngài họ Lý, người làng Vạn Tải (thuộc tỉnh Bắc Ninh bây giờ), cha là Tuệ Tổ, có công đánh Chiêm Thành nhưng không chịu ra làm quan. Ngài hình dung kỳ dị nhưng bẩm tính thông minh, đỗ Trạng nguyên vào lúc 20 tuổi.</p>
        <p>Trước khi thi đỗ, mẹ ngài đi hỏi vợ cho ngài nhưng đến đâu cũng bị từ chối vì hình dung kỳ dị và sự nghèo hèn của gia đình ngài. Nhưng khi ngài thi đỗ, các nhà phú quý tranh nhau gọi gả con gái, và vua cũng đòi gả công chúa cho nhưng ngài đều từ chối. Do đó người đời có câu ca dao:</p>
        <blockquote>
          <p>Khó khăn thì chẳng ai nhìn,<br>Đến khi đỗ Trạng, tám nghìn nhân duyên.</p>
        </blockquote>
        <p>Vì thấy nhân tình thế thái như thế, nên mặc dù làm quan lớn và được đi sứ sang Trung Hoa, ngài vẫn không lấy thế làm mãn nguyện. Một hôm nhân đi theo vua Anh Tông nghe Pháp Loa Tôn sư thuyết pháp, ngài liền giác ngộ nên dâng biểu xin từ chức rồi xuất gia thọ giáo với ngài Pháp Loa.</p>
        <p>Sau khi được ngài Pháp Loa truyền tâm ấn, ngài trụ trì ở chùa Vân Yên núi Yên Tử, tăng ni theo học có đến hàng nghìn. Ngài lập chùa, in kinh, mở pháp hội bố thí cho kẻ nghèo, làm rất nhiều việc công đức.</p>
      </section>

      <p>Ba vị tổ Trúc Lâm trên đây đã gây tạo một uy thế rất lớn, không những trong giới tăng già mà còn cả ngoài nhân gian nữa, nhưng sau đó rất tiếc là những vị kế nghiệp ba ngài không có ai tương xứng nữa.</p>
      <p>Tóm lại, trong đời Trần cũng như đời Lý, lịch sử Phật giáo có thể chia làm hai thời kỳ: thời kỳ thứ nhất là thời kỳ phồn thịnh gồm trong bốn vị vua đầu (gần 100 năm); thời kỳ thứ hai là thời kỳ suy vi gồm các đời vua sau (trong khoảng 80 năm).</p>
    </section>
  </section>

  <section id="phat-giao-duoi-doi-nha-ho-nha-minh-hau-le">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">II. PHẬT GIÁO DƯỚI ĐỜI NHÀ HỒ (1400-1407), DƯỚI THỜI ĐÔ HỘ CỦA NHÀ MINH (1414-1427) VÀ DƯỚI ĐỜI HẬU LÊ (1428-1527)</h2>
    <p>Phật giáo dần dần suy sụp từ dưới đời các vua cuối nhà Trần, sang nhà Hồ và kéo dài cho đến cuối đời Hậu Lê. Trên gần hai ngàn năm Phật giáo có mặt trên đất nước này, có thể nói giai đoạn này là giai đoạn tối tăm nhất của Phật giáo.</p>
    <p>Trong 7 năm chiếm đoạt ngôi nhà Trần, Hồ Quý Ly chưa làm gì được thì nhà Minh mượn cớ khôi phục nhà Trần, kéo quân sang đánh nước ta và đặt nền đô hộ khốc liệt trong bảy năm trời. Bảy năm tuy ngắn ngủi nhưng nhà Minh đã để lại một hậu quả rất tai hại mà 100 năm sau vẫn chưa xóa nhòa hết.</p>
    <p>Thật vậy, sau khi xâm chiếm nước ta, nhà Minh tịch thu hết cả sách vở trong nước, trong ấy gồm cả kinh điển nhà Phật đem về Kim Lăng và đốt phá chùa chiền rất nhiều. Một mặt phá hoại, một mặt nhà Minh cho truyền vào nước ta những hình thức mê tín dị đoan của các đạo Lão và Lạt Ma giáo.</p>
    <p>Do đó, Đạo Phật mất hết cả tính chất thuần túy của các thời đời trước và trở thành một thứ tôn giáo hỗn tạp, kỳ quái. Phật không ra Phật, ma không ra ma. Thật là một cảnh tiêu tàn hoang phế đã diễn ra trong chốn thiền môn!</p>
    <p>Sang đến thời Lê, Nho học rất thịnh hành, các sĩ phu xô nhau vào đường khoa cử, miệt mài trong tư tưởng Tống Nho. Giáo lý nhà Phật không còn làm danh lợi cho ai nên đã bị bỏ quên. Phê bình tình trạng Phật giáo trong giai đoạn này, Thượng tọa Thích Mật Thể trong cuốn <strong>Việt Nam Phật giáo sử lược</strong> đã viết rất đúng như sau:</p>
    <blockquote>
      <p>“Việc tu đạo, đối với hạng ít học thì chỉ là một kế quyền nghi theo hình thức; với hạng sĩ phu thì chỉ là một chỗ để người nào lận đận công danh, chán nản cuộc thế, bất bình với thói đời; nghĩa là chỉ có những người yếm thế mới tìm đến để tiêu dao ngày tháng, mượn cảnh chùa am, tiếng chuông, câu kệ mà dứt bỏ cuộc ngoài thôi, chứ không phải mến hiểu giáo lý của Phật mà tu hành, rồi mộ đạo, rồi lại đem đạo lý ra mà giác ngộ cho kẻ khác.”</p>
    </blockquote>
    <div class="my-6 rounded-lg border-l-4 border-amber-400 bg-amber-50/50 p-5 dark:border-amber-600 dark:bg-amber-900/20">
      <p class="mb-0"><strong>(1)</strong> Để khỏi nói là một kế sinh nhai.</p>
    </div>
    <p>Bởi vậy trong thời Hậu Lê có thể nói là “thời đại Phật giáo suy đồi”.</p>
  </section>

  <section id="phat-giao-trong-thoi-nam-bac-phan-tranh">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">III. PHẬT GIÁO TRONG THỜI NAM BẮC PHÂN TRANH (1528-1802)</h2>
    <p>Nhà Hậu Lê làm vua đến đời vua Chiêu Tông, Cung Hoàng (1516-1527) thì bị Mạc Đăng Dung soán đoạt. Nhưng những trung thần của nhà Lê đã chống lại Mạc Đăng Dung và lập triều đình nhà Lê ở Thanh Hóa, Nghệ An. Sau sáu năm chống nhau với nhà Mạc, nhà Lê đã nhờ công lao to lớn của họ Trịnh mà giành lại giang sơn. Họ Trịnh ỷ mình có nhiều công lao, nắm hết quyền hành ở trong triều, vua Lê chỉ ngồi cho có vị chứ không có thực quyền. Họ Nguyễn vì không muốn phục tùng họ Trịnh nên đã lánh vào Nam, hùng cứ một phương.</p>
    <p>Từ đó nước ta phân chia làm hai: phía Bắc sông Gianh là giang sơn của họ Trịnh; phía Nam sông Gianh là giang sơn của họ Nguyễn. Hai họ Trịnh, Nguyễn đều muốn bành trướng thế lực của mình để diệt trừ đối thủ nên họ ra công xây dựng phần đất của mình về mọi phương diện. Về phương diện tôn giáo, hai bên đều lấy Phật giáo làm quốc giáo và cũng sốt sắng xây chùa tạo tượng rất nhiều.</p>
    <p>Cũng trong giai đoạn này, ở Trung Quốc thường có loạn lạc và các tông phái Phật giáo thường bị chèn ép bởi Lạt Ma giáo nên một số vị cao tăng đã rời quê hương sang Việt Nam truyền giáo, người thì vào ở đất Bắc, người thì vào Nam. Nhờ thế nước ta có nhiều tông phái mới và nhiều vị sư Trung Hoa danh tiếng mà ảnh hưởng còn truyền đến bây giờ.</p>

    <section id="phat-giao-thoi-cac-chua-trinh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Phật giáo trong thời các chúa Trịnh</h3>

      <section id="phat-giao-thoi-ky-chua-trinh">
        <h4 class="text-lg font-semibold">a. Phật giáo trong thời kỳ này</h4>
        <p>Vào khoảng đời vua Lê Thế Tông (1573-1599), ở Bắc có phái Tào Động cũng là chi phái của phái Bồ Đề Đạt Ma ở bên Trung Quốc. Phái này truyền vào bởi nhà sư Trung Hoa Trí Giáo Nhất Cú. Hiện nay các vị sư trụ trì tại các chùa Hòe Nhai, Hàm Long, Trấn Quốc ở Hà Nội là đệ tử của phái Tào Động.</p>
        <p>Vào khoảng đời vua Lê Hy Tông (1676-1705) lại có phái Liên Tông, do một vị vương công họ Trịnh là Lân Giác thiền sư lập ra ở chùa Liên Phái (Bạch Mai, Hà Nội). Đồng thời sư Nguyệt Quang cũng lập ra phái ấy ở Kiến An. Hai Ngài Lân Giác và Nguyệt Quang đều là đệ tử của chi phái Lâm Tế ở Trung Hoa truyền sang. Hiện nay các vị sư trụ trì ở chùa Bà Đá (Hà Nội) là đệ tử của chi Lâm Tế.</p>
        <p>Ngoài sự phát triển hai phái trên, Phật giáo ở Bắc lại được chúa Trịnh ủng hộ khá mạnh: trùng tu tự viện, thỉnh Đại tạng ở Trung Hoa về. Các cao tăng lúc bấy giờ cũng khá đông, danh tiếng nhất là ngài Hương Hải thiền sư mà chúng ta sẽ nói dưới đây.</p>
      </section>

      <section id="huong-hai-thien-su">
        <h4 class="text-lg font-semibold">b. Hương Hải Thiền sư</h4>
        <p>Ngài nguyên trước ở miền Nam, trong phần đất của chúa Nguyễn và là dòng dõi thế phiệt. Thân sinh ngài là một công thần của chúa Nguyễn. Ngài đỗ Hương cống (cử nhân) lúc 18 tuổi, được tuyển vào làm việc ở phủ chúa Nguyễn rồi được bổ ra làm tri phủ ở Triệu Phong (Quảng Trị ngày nay).</p>
        <p>Ngài rất hâm mộ đạo Phật và thường đàm luận giáo lý với các vị cao tăng. Đến 28 tuổi ngài xin từ quan, xuất gia đầu Phật. Ngài ra chơi ở núi Chiêm Bất Lao (Cù Lao Chàm) ngoài Nam Hải, rồi lập am ở lại trụ trì. Đạo hạnh ngài rất cao, quan dân gần xa đều cảm mộ.</p>
        <p>Chúa Nguyễn (Nguyễn Phúc Chu 1691-1715) nghe danh, sai người ra hải đảo mời về và lập chùa để ngài trụ trì. Nhưng sau vì sự nghi ngờ của chúa Nguyễn, ngài bỏ miền Nam, đóng thuyền vượt biển cùng 50 đệ tử ra Bắc và được chúa Trịnh và vua Lê rất mến phục. Vua Lê Dụ Tông (1706-1726) thường mời ngài vào cung để hỏi đạo. Một hôm vua hỏi Ngài:</p>
        <blockquote>
          <p>Trẫm nghe Thiền sư học rộng nhớ nhiều, vậy xin Thiền sư thuyết pháp cho nghe để Trẫm hiểu được Đạo.</p>
        </blockquote>
        <p>Ngài nói:</p>
        <blockquote>
          <p>Bần tăng có bốn câu kệ này, xin Bệ hạ để tâm suy nghĩ:</p>
          <p>Phản văn tự kỷ mỗi thường quan<br>Thẩm sát tư duy tử tế khan<br>Mạc giáo mộng trung tầm tri thức<br>Tương lai diện thượng đổ sư nhan</p>
          <p class="mb-0"><strong>Dịch nghĩa:</strong><br>Nghe lại điều mình thấy những ngày<br>Suy đi nghĩ lại kỹ càng hay<br>Chớ tìm tri thức trong cơn mộng<br>Có thế mới hay nhận được thầy (Đạo)</p>
        </blockquote>
        <p>Vua hỏi:</p>
        <blockquote>
          <p>Thế nào là ý của Phật?</p>
        </blockquote>
        <p>Ngài đáp:</p>
        <blockquote>
          <p>Nhạn quá trường không<br>Ảnh trầm hàn thủy<br>Nhạn vô di tích chi ý<br>Thủy vô lưu ảnh chi tâm.</p>
          <p class="mb-0"><strong>Dịch nghĩa:</strong><br>Nhạn liệng giữa không<br>Bóng chìm dưới nước<br>Nhạn không để dấu lại<br>Nước chẳng lưu bóng làm chi</p>
        </blockquote>
        <p>Ngài thường đọc những câu kệ hay để dạy tăng chúng như sau:</p>
        <blockquote>
          <p>Tầm ngưu tu phỏng tích<br>Học đạo quý vô tâm<br>Tích tại ngưu hoàn tại<br>Vô tâm đạo dị tầm.</p>
          <p class="mb-0"><strong>Dịch nghĩa:</strong><br>Tìm trâu, tìm dấu chân trâu<br>Dấu còn trâu chẳng mất đâu bao giờ<br>Những người học đạo chớ ngờ<br>Vô tâm thì đạo có cơ dễ tìm</p>
        </blockquote>
      </section>
    </section>

    <section id="phat-giao-thoi-cac-chua-nguyen">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật giáo trong thời các chúa Nguyễn</h3>

      <section id="phat-giao-thoi-ky-chua-nguyen">
        <h4 class="text-lg font-semibold">a. Phật giáo trong thời kỳ này</h4>
        <p>Trong khi Phật giáo miền ngoài trỗi dậy thì Phật giáo miền trong cũng phát đạt. Từ khi Nguyễn Hoàng vào trấn Thuận Hóa cho đến khi nhà Nguyễn thống nhất đất nước, trong hơn hai trăm năm, họ Nguyễn đối với Phật giáo hết lòng sùng thượng, tạc tượng, đúc chuông, lập tự viện rất nhiều.</p>
        <p>Bấy giờ có nhiều vị tăng từ Trung Hoa như ngài Tế Viên, ngài Giác Phong sang truyền giáo. Trong số các vị tăng Trung Hoa, có một vị tổ sư mà ảnh hưởng còn truyền lại đến bây giờ là Tổ Nguyên Thiều. Riêng các vị tăng Việt Nam thời có ngài Liễu Quán là một vị Tổ đã làm cho Phật giáo miền Nam thời ấy được vô cùng rực rỡ.</p>
      </section>

      <section id="cac-vi-danh-tang">
        <h4 class="text-lg font-semibold">b. Các vị danh tăng</h4>

        <section id="ngai-nguyen-thieu">
          <h5 class="text-base font-semibold">Ngài Nguyên Thiều</h5>
          <p>Ngài họ Tạ, quê ở Triều Châu (Quảng Đông). Xuất gia năm 19 tuổi, ngài tu ở chùa Báo Tư, thọ giáo với ngài Khoán Viên Hòa thượng. Niên hiệu Cảnh Trị năm thứ ba đời Lê Huyền Tông (1665), Ngài đi theo tàu buôn sang An Nam, trú ở phủ Quy Ninh (Bình Định) lập chùa Thập Tháp Di Đà, mở trường truyền dạy Phật pháp; sau ra Thuận Hóa lập chùa Hà Trung, rồi lên Xuân Kinh (Huế) lập chùa Quốc Ân và dựng tháp Phổ Đồng.</p>
          <p>Sau Ngài phụng mệnh chúa Anh Tông (Nguyễn Phúc Trăn 1687-1691) trở về Trung Quốc tìm mời các vị danh tăng và cung thỉnh pháp tượng, pháp khí. Ngài về Quảng Đông mời được Hòa thượng Thạch Liêm và các danh tăng khác cùng thỉnh được nhiều kinh điển, tượng, pháp khí trở về Nam. Chúa Nguyễn liền sắc mở đàn truyền giới rất long trọng tại chùa Thiên Mụ. Sau đó chúa Nguyễn sắc ban ngài chức trụ trì chùa Hà Trung.</p>
          <p>Một hôm ngài lâm bệnh, họp môn đồ lại dặn dò mọi việc và truyền bài kệ sau đây:</p>
          <blockquote>
            <p>Tịch tịch kính vô ảnh<br>Minh minh châu phát dụng<br>Đường đường vật phi vật<br>Liễu liễu không vật không</p>
          </blockquote>
          <p>Đại ý: Thể Pháp thân thanh tịnh sáng suốt như mảnh gương sạch không bụi, như ngọc minh châu trong sáng bóng ngời. Tuy hiện tiền sự sự, vật vật sai khác nhưng đều là thể pháp thân biểu hiện. Thể pháp thân thường vắng lặng mà không phải là không, tức là lý “chân không diệu hữu”. Ngài viết xong bài kệ, ngồi yên lặng mà tịch.</p>
        </section>

        <section id="ngai-lieu-quan">
          <h5 class="text-base font-semibold">Ngài Liễu Quán</h5>
          <p>Ngài họ Lê, húy Thiện Diệu, quê ở làng Bạch Mã, huyện Đồng Xuân, tỉnh Phú Yên (Sông Cầu bây giờ). Ngài mồ côi mẹ lúc 6 tuổi, thân sinh ngài cho ngài xuất gia và đầu sư với ngài Tế Viên Hòa thượng, người Trung Hoa. Được 7 năm Hòa thượng viên tịch, ngài ra Thuận Hóa học với Giác Phong Lão tổ (người Trung Hoa) ở chùa Bảo Quốc.</p>
          <p>Năm 1691 ngài trở về cố hương phụng dưỡng cha già, phải đi đốn củi để sinh nhai. Được bốn năm sau khi thân phụ ngài qua đời, ngài trở ra Thuận Hóa, thọ giới Sa-di với ngài Thạch Liêm Hòa thượng (cũng người Trung Hoa).</p>
          <p>Năm 1699, ngài đi tham lễ khắp thiền lâm để bồi bổ cho sự tu hành. Qua năm 1702, ngài đến Long Sơn cầu học pháp tam thiền với ngài Tử Dung Hòa thượng (Tổ khai sơn chùa Từ Đàm, Huế). Về phần hóa đạo, ngài rất tinh tấn không nệ khó nhọc. Luôn luôn ngài lập đàn truyền giới, tiếp chúng độ tăng. Năm 1740, ngài tấn đàn phóng giới, rồi từ đó ngài trở về núi Thiên Thai dựng thảo am ẩn náu tu hành, nay tức là chùa Thiền Tôn. Chúa Nguyễn Minh Vương rất trọng đạo hạnh ngài, thường mời ngài vào cung đàm đạo.</p>
          <p>Mùa xuân năm 1742, ngài trở lại dự giới đàn ở chùa Viên Thông, cuối mùa thu ấy ngài thọ bệnh. Khi sắp lâm chung, ngài gọi môn đồ lại dạy rằng: “Nhân duyên đã hết, ta sắp chết đây.” Thấy môn đồ khóc, ngài dạy rằng:</p>
          <blockquote>
            <p>Các ngươi khóc làm gì! Các đức Phật ra đời còn nhập Niết bàn, thì ta nay đi đến rõ ràng, về tất có chỗ, các ngươi không nên khóc và đừng nên buồn thảm.</p>
          </blockquote>
          <p>Kế đó ngài viết bài kệ từ biệt:</p>
          <blockquote>
            <p>Thất thập dư niên thế giới trung<br>Không không, sắc sắc, diệu dung thông<br>Kim triêu nguyện mãn hoàn gia lý<br>Hà tất bôn man vấn tổ tông.</p>
            <p class="mb-0"><strong>Dịch nghĩa:</strong><br>Ngoài bảy mươi năm trong thế gian<br>Không không, sắc sắc thảy dung thông<br>Ngày nay nguyện mãn về nơi cũ<br>Nào phải ân cần hỏi tổ tông</p>
          </blockquote>
          <p>Viết xong, ngài bảo môn đồ rằng: “Sau khi ta đi, các ngươi phải nghĩ đến cơn vô thường nhanh chóng, cần phải siêng năng tu học, các ngươi hãy cố gắng tới, chớ bỏ quên lời ta”.</p>
          <p>Đến ngày 22 tháng 11 giữa mùa đông năm Nhâm Tuất (1742) vào giờ mùi, Ngài dùng nước trà xong, vui vẻ từ biệt môn đồ, tiêu diêu thoát hóa. Chúa Minh Vương được tin liền ban thụy hiệu là <strong>Đạo Hạnh Thụy Chánh Giác Viên Ngộ Hòa thượng</strong>.</p>
        </section>
      </section>
    </section>
  </section>

  <section id="phat-giao-duoi-doi-cac-vua-dau-trieu-nguyen">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">IV. PHẬT GIÁO DƯỚI ĐỜI CÁC VỊ VUA ĐẦU TRIỀU NGUYỄN</h2>

    <section id="tinh-trang-phat-giao-dau-trieu-nguyen">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tình trạng Phật giáo trong giai đoạn này</h3>
      <p>Nhà Tây Sơn trong một giai đoạn ngắn đã chấm dứt tình trạng Nam Bắc phân tranh và thống nhất sơn hà về một mối. Nhưng chẳng bao lâu, chúa Nguyễn Phúc Ánh diệt được nhà Tây Sơn, thu hồi lại đất nước và mở đầu cho triều Nguyễn, lấy niên hiệu Gia Long. Trong giai đoạn này nước ta sống trong cảnh chiến tranh thường trực, ít ai có thì giờ nghĩ đến chuyện chấn hưng đạo đức tôn giáo. Một số chùa chiền bị tàn phá, kinh điển thất lạc, cảnh hoang tàn thật tiêu điều buồn bã.</p>
      <p>Vua Gia Long lên ngôi, công việc trước tiên của ngài là lập lại nền an ninh trật tự trong nước chứ cũng chưa có thì giờ nghĩ đến chuyện chấn hưng Phật giáo. Qua đến đời Minh Mạng và Thiệu Trị, các ngài cũng bắt đầu sắc trùng tu những ngôi chùa tổ đình quan trọng, nhưng trong dân gian thì ảnh hưởng đạo Phật mỗi ngày mỗi lu mờ, phai nhạt dần. Các vị cao tăng vẫn có như ngài Phổ Tịnh Hòa thượng, An Thiền đại sư, Diệu Giác Hòa thượng, Giác Ngộ Hòa thượng. Nhưng vì quá ít ỏi nên quý vị ấy chẳng khác gì những chiếc sao lẻ tẻ trên bầu trời đen tối, chẳng soi sáng được gì.</p>
      <p>Đến khi người Pháp đặt nền đô hộ trên đất nước này thì đạo Phật lại càng suy đồi, mất hết cả những gì thuần túy cao siêu mà chỉ còn như là một thần đạo mà nhiệm vụ chính là lo việc cúng bái mà thôi. Để có một ý niệm chung về một sự tồi tệ trong giai đoạn này, chúng tôi xin trích một đoạn nhận xét rất chính xác sau đây mà Thượng tọa Thích Mật Thể đã viết trong cuốn <strong>Việt Nam Phật giáo sử lược</strong>:</p>
      <blockquote>
        <p>“... Đến đây, từ vua quan cho đến thứ dân, ai ai cũng an trí Đạo Phật là ở sự cúng cấp, cầu đảo chứ không biết gì khác nữa. Và phần đông họ chỉ trọng ông thầy ở chỗ danh vọng, chức tước mặc dù ông ấy thiếu học, thiếu tu. Bởi tệ hại ấy, tăng đồ trong nước lần lần sa vào con đường trụy lạc, cờ bạc, rượu chè, đắm trước thanh sắc.</p>
        <p>Ở miền trung nguyên Bắc kỳ, về kỷ luật tăng già bên ngoài còn giữ được nghiêm chỉnh đôi chút, chứ ở Trung kỳ phần nhiều họ đã có vợ có con một cách công nhiên, không áy náy. Nhất là ở Nam kỳ lại càng hỗn độn hơn nữa... Phần đông tăng đồ chỉ nghĩ đến danh vọng, chức tước: xin bằng Tăng cang, Trụ trì, Sắc tứ v.v.. hay chỉ biết cúng cấp, cầu đảo, phù chú, làm tay sai cho các vua chúa, quan quyền, phú hộ để làm kế sinh nhai. Còn một hạng nữa chỉ giữ mình cho được thanh nhàn, ăn chơi tiêu khiển, bảo là giải thoát v.v..!</p>
        <p class="mb-0">Bởi vậy các cảnh chùa trong nước đã thành cảnh gia đình riêng, không còn gì là tính cách đoàn thể của một tôn giáo nữa. Họ sống trong Phật giáo hầu hết chỉ còn là 'dốt' và 'quên'! 'Quên' để khỏi phải biết đến bổn phận chân chính của một tăng đồ. Ở trong tăng đồ thì như vậy, ở ngoài tín đồ cư sĩ thì ngơ ngác, mù lòa tin bướng, theo càn, ít ai là người hiểu đạo lý. Trong lịch sử Phật giáo Việt Nam, ta có thể đánh vào đây một dấu than (!) rất to tướng.”</p>
      </blockquote>
    </section>
  </section>

  <section id="ket-luan">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">KẾT LUẬN</h2>
    <p>Chúng ta đã theo dõi dấu chân của những nhà truyền bá Đạo Phật đầu tiên ở trên đất nước này cho đến thời cận đại. Trong gần hai mươi thế kỷ hiện diện trên dải đất Việt Nam này, Đạo Phật đã trải qua biết bao cơn thăng trầm, suy thịnh. Những sự biến chuyển ấy không đơn phương mà bao giờ cũng đi song song với sự biến chuyển chung của đất nước. Mỗi lần vận nước hưng lên thì Đạo Phật cũng phát triển mạnh, mỗi lần vận nước suy nhược thì Đạo Phật cũng thoái trào.</p>
    <p>Điều nhận xét thứ hai là những vị anh quân thường thường là những Phật tử thuần thành, luôn luôn ủng hộ và khuyến khích sự truyền bá Phật pháp. Trái lại, những vị vua ít hiểu đạo, phá đạo phần nhiều cũng là những vị vua ít thành công nhất trong sự trị nước an dân.</p>
    <p>Do hai nhận xét trên, chúng ta có thể kết luận rằng: Đạo Phật đã mật thiết hòa mình trong cuộc sống của dân tộc Việt Nam trong quá khứ. Và từ đây về sau, muốn cho đất nước được an cư lạc nghiệp và có một tương lai rạng rỡ, những nhà lãnh đạo quốc gia phải dành cho Đạo Phật một địa vị quan trọng trong mọi sinh hoạt của nước nhà.</p>
  </section>

</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Vì sao Đạo Phật dưới thời nhà Trần chỉ thịnh phát trong khoảng 50 năm đầu rồi sau đó bắt đầu thoái bộ?',
    options: {
      a: 'Do sự cạnh tranh của Khổng giáo và việc giáo lý bị xen lẫn mê tín dị đoan.',
      b: 'Do triều đình cấm đoán việc xây dựng chùa chiền và đúc chuông.',
      c: 'Do thiếu hụt các vị tăng sĩ có khả năng đi đánh giặc cứu nước.',
      d: 'Do các vua nhà Trần không còn sùng mộ Phật giáo như thời nhà Lý.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Tài liệu ghi nhận hai lý do làm Đạo Phật không tiến phát được là sự cạnh tranh ráo riết của Khổng giáo ở bên ngoài và giáo lý bị xen lẫn mê tín dị đoan ở bên trong [1].',
      b: 'Sai. Tài liệu không nhắc đến việc triều đình cấm đoán, ngược lại ngay khi mới lên ngôi, vua Trần Thái Tông đã lập chùa, đúc chuông và hộ trì Phật pháp [1].',
      c: 'Sai. Vào đời vua Phế Đế (1381), triều đình thậm chí còn triệu tập tăng chúng thành một đạo binh đi đánh giặc Chiêm Thành [1].',
      d: 'Sai. Tài liệu khẳng định các vị vua đầu nhà Trần thông hiểu và sùng mộ Phật giáo còn hơn cả những vị vua đầu nhà Lý [1].',
    },
  },
  {
    question: 'Vua Trần Thái Tông đã để lại hai tác phẩm quý giá nào cho việc truyền bá Phật pháp?',
    options: {
      a: 'Lịch sử Phật giáo Việt Nam và Khóa hư.',
      b: 'Việt Nam Phật giáo sử lược và Thiền tông Chỉ Nam.',
      c: 'Đoạn sách lục và Tham thiền yếu chỉ.',
      d: 'Thiền tông Chỉ Nam và Khóa hư.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Không có tác phẩm nào mang tên “Lịch sử Phật giáo Việt Nam” do vua Trần Thái Tông biên soạn.',
      b: 'Sai. “Việt Nam Phật giáo sử lược” là tác phẩm của Thượng tọa Thích Mật Thể được trích dẫn trong bài [2].',
      c: 'Sai. “Đoạn sách lục” và “Tham thiền yếu chỉ” là hai tập sách do ngài Pháp Loa Tôn sư soạn [3].',
      d: 'Đúng. Vua Trần Thái Tông đã soạn hai tập sách có giá trị và ảnh hưởng quý báu là “Thiền tông Chỉ Nam” và “Khóa hư” [1].',
    },
  },
  {
    question: 'Sự kiện nào đánh dấu bước ngoặt trong cuộc đời của vua Trần Nhân Tông sau khi chiến thắng quân Mông Cổ?',
    options: {
      a: 'Ngài thỉnh Đại tạng kinh từ Trung Hoa về để in ấn phát cho dân.',
      b: 'Ngài trực tiếp lãnh đạo đạo binh tăng sĩ đánh giặc Chiêm Thành.',
      c: 'Ngài thành lập phái Tào Động để đối kháng với quân xâm lược.',
      d: 'Ngài truyền ngôi cho con và vào tu tại núi Yên Tử.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Việc thỉnh Đại tạng kinh ở Trung Hoa về và sắc in phát cho nhân dân là công lao của vua Trần Anh Tông [4].',
      b: 'Sai. Việc thống lĩnh đạo binh tăng sĩ đánh Chiêm Thành diễn ra dưới đời vua Phế Đế [1].',
      c: 'Sai. Phái Tào Động phát triển ở miền Bắc vào khoảng đời vua Lê Thế Tông [5].',
      d: 'Đúng. Sau khi đánh bại quân Mông Cổ, Ngài truyền ngôi lại cho con, vào tu ở núi Yên Tử và trở thành Sơ Tổ phái Trúc Lâm [4].',
    },
  },
  {
    question: 'Công nghiệp lớn lao nhất của Pháp Loa Tôn sư trong việc quản lý tăng chúng là gì?',
    options: {
      a: 'Đỗ Trạng nguyên năm 20 tuổi rồi mới đi xuất gia.',
      b: 'Vượt biển ra Bắc để thuyết pháp cho vua Lê Dụ Tông.',
      c: 'Lập tăng tịch và sổ sách rõ ràng để quản lãnh tăng đồ.',
      d: 'Dạy bảo vua Trần Nhân Tông về các đạo lý tinh yếu của Thiền.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Việc đỗ Trạng nguyên năm 20 tuổi là tiểu sử của ngài Huyền Quang Tôn sư [3].',
      b: 'Sai. Đóng thuyền vượt biển ra Bắc thuyết pháp là sự kiện gắn liền với Hương Hải Thiền sư [6].',
      c: 'Đúng. Ngài phụng chiếu định chức các tăng đồ và quản lãnh tăng chúng, từ đó tăng đồ mới có tăng tịch và sổ sách rõ ràng [3].',
      d: 'Sai. Việc hết lòng dạy bảo vua Trần Nhân Tông về đạo lý là công lao của ngài Tuệ Trung Thượng Sĩ [4].',
    },
  },
  {
    question: 'Tại sao ngài Huyền Quang lại từ chối các lời dạm hỏi và hôn sự với công chúa sau khi đỗ Trạng nguyên?',
    options: {
      a: 'Vì ngài nhận thấy sự thay đổi tráo trở của nhân tình thế thái.',
      b: 'Vì ngài có hình dung kỳ dị nên không muốn làm khổ con gái nhà lành.',
      c: 'Vì ngài đã thọ giới Sa-di từ trước khi đi thi.',
      d: 'Vì ngài muốn dành trọn thời gian để đi sứ sang Trung Hoa.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Khi nghèo khó thì bị từ chối, đến lúc đỗ Trạng lại được vua và nhà phú quý săn đón, thấy nhân tình thế thái như vậy nên ngài không lấy làm mãn nguyện [3].',
      b: 'Sai. Hình dung kỳ dị là lý do mà lúc chưa đỗ đạt, ngài bị các nơi từ chối hôn sự [3].',
      c: 'Sai. Ngài xuất gia thọ giáo với ngài Pháp Loa sau khi đã làm quan lớn và được đi sứ sang Trung Hoa [3].',
      d: 'Sai. Mặc dù làm quan lớn và đi sứ sang Trung Hoa nhưng ngài vẫn không lấy thế làm mãn nguyện trước khi dâng biểu xin từ chức [3].',
    },
  },
  {
    question: 'Trong thời kỳ đô hộ của nhà Minh, chính sách nào đã gây thiệt hại nặng nề nhất cho văn hóa Phật giáo Việt Nam?',
    options: {
      a: 'Chỉ cho phép truyền bá duy nhất Khổng giáo của Tống Nho.',
      b: 'Bắt tất cả tăng sĩ phải hoàn tục hoặc đi đánh giặc Chiêm Thành.',
      c: 'Buộc các chùa phải trở thành đơn vị gia đình riêng biệt.',
      d: 'Tịch thu hết kinh điển đem về Kim Lăng và đốt phá chùa chiền.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tư tưởng Tống Nho thịnh hành ở thời nhà Lê do các sĩ phu chạy theo con đường khoa cử chứ không phải chính sách đô hộ của nhà Minh [2].',
      b: 'Sai. Sự việc tăng sĩ thi hỏng phải hoàn tục và phải đi đánh Chiêm Thành diễn ra dưới đời nhà Trần [1].',
      c: 'Sai. Tình trạng các cảnh chùa trở thành gia đình riêng biệt là vấn đề suy đồi diễn ra vào thời nhà Nguyễn [7].',
      d: 'Đúng. Trong bảy năm đô hộ khốc liệt, nhà Minh đã tịch thu hết sách vở, bao gồm cả kinh điển nhà Phật đem về Kim Lăng và đốt phá rất nhiều chùa chiền [2].',
    },
  },
  {
    question: 'Đặc điểm chung của những người tìm đến đạo Phật trong thời kỳ suy đồi ở nhà Hậu Lê là gì?',
    options: {
      a: 'Họ tập trung vào việc in ấn kinh điển và xây dựng các đại tu viện.',
      b: 'Họ là các bậc trí thức lỗi lạc muốn chấn hưng văn hóa dân tộc.',
      c: 'Họ là những dũng sĩ hăng hái tham gia bảo vệ đất nước.',
      d: 'Họ là những người yếm thế, chán nản cuộc đời hoặc dùng việc tu hành làm kế sinh nhai.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Việc tích cực xây dựng đại tu viện và in ấn kinh điển không phải là đặc điểm phổ biến của Phật giáo dưới thời Hậu Lê do giáo lý nhà Phật lúc này đã bị bỏ quên [2].',
      b: 'Sai. Các sĩ phu và giới trí thức thời Hậu Lê chủ yếu xô nhau vào đường khoa cử, miệt mài trong tư tưởng Tống Nho [2].',
      c: 'Sai. Tài liệu không ghi nhận đặc điểm này đối với người tu học Phật thời Hậu Lê.',
      d: 'Đúng. Theo Thượng tọa Thích Mật Thể, việc tu đạo với hạng ít học chỉ là kế sinh nhai, còn với sĩ phu thì là chỗ để những người lận đận, yếm thế, bất bình với thói đời mượn cảnh tiêu dao [2, 5].',
    },
  },
  {
    question: 'Thiền sư Hương Hải đã dùng hình ảnh nào để trả lời vua Lê Dụ Tông về “ý của Phật”?',
    options: {
      a: 'Dấu chân trâu và quá trình tìm trâu của người học đạo.',
      b: 'Mảnh gương sạch không bụi và viên ngọc minh châu.',
      c: 'Cơn mộng và việc tìm kiếm tri thức trong mộng.',
      d: 'Nhạn bay trên không và bóng nhạn chìm dưới nước.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Hình ảnh tìm trâu và dấu chân trâu nằm trong câu kệ ngài thường đọc để dạy tăng chúng, không phải để trả lời vua [6].',
      b: 'Sai. Hình ảnh mảnh gương sạch và ngọc minh châu nằm trong đại ý bài kệ của tổ Nguyên Thiều [8].',
      c: 'Sai. Hình ảnh cơn mộng được dùng trong bốn câu kệ ngài bảo Bệ hạ “để tâm suy nghĩ” trước khi vua đặt câu hỏi về ý của Phật [6].',
      d: 'Đúng. Khi được hỏi “Thế nào là ý của Phật?”, ngài đáp bằng bài kệ “Nhạn quá trường không / Ảnh trầm hàn thủy” (Nhạn liệng giữa không, Bóng chìm dưới nước) [6].',
    },
  },
  {
    question: 'Tổ Nguyên Thiều có đóng góp quan trọng nào khi được chúa Nguyễn Phúc Trăn cử về Trung Quốc?',
    options: {
      a: 'Tìm cách hòa giải sự phân tranh giữa hai họ Trịnh và Nguyễn.',
      b: 'Cung thỉnh các vị danh tăng, kinh điển, tượng và pháp khí về Nam.',
      c: 'Sáng lập ra phái Liên Tông tại vùng đất Bình Định.',
      d: 'Học tập giáo lý của Lạt Ma giáo để cải cách Phật giáo trong nước.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tài liệu không có chi tiết nào nói Tổ Nguyên Thiều thực hiện nhiệm vụ chính trị ngoại giao hòa giải này [8].',
      b: 'Đúng. Ngài phụng mệnh về Quảng Đông mời Hòa thượng Thạch Liêm, các danh tăng khác và thỉnh được nhiều kinh điển, tượng, pháp khí trở về Nam [8].',
      c: 'Sai. Phái Liên Tông do Lân Giác thiền sư lập ra ở Bạch Mai, Hà Nội [5].',
      d: 'Sai. Lạt Ma giáo được nhắc đến như một tôn giáo hỗn tạp truyền vào thời kỳ nhà Minh đô hộ [2], không liên quan đến Tổ Nguyên Thiều.',
    },
  },
  {
    question: 'Ngài Liễu Quán đã dạy các môn đồ điều gì trước khi viên tịch vào năm 1742?',
    options: {
      a: 'Phải xây dựng thật nhiều tháp Phổ Đồng để lưu danh hậu thế.',
      b: 'Phải khóc thương thật nhiều để bày tỏ lòng hiếu thảo đối với thầy.',
      c: 'Phải tìm cách quay về quê cũ để hỏi rõ về tổ tông.',
      d: 'Phải nghĩ đến cơn vô thường nhanh chóng và cần siêng năng tu học.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Việc dựng tháp Phổ Đồng là của ngài Nguyên Thiều ở chùa Quốc Ân [8].',
      b: 'Sai. Ngài đã quở trách môn đồ: “Các ngươi khóc làm gì!... các ngươi không nên khóc và đừng nên buồn thảm” [9].',
      c: 'Sai. Việc về nơi cũ (hoàn gia lý) và hỏi tổ tông (vấn tổ tông) là ẩn ý giác ngộ trong bài kệ ngài viết, không phải lời dạy cho đồ đệ [9].',
      d: 'Đúng. Viết xong bài kệ, ngài dặn môn đồ: “Sau khi ta đi, các ngươi phải nghĩ đến cơn vô thường nhanh chóng, cần phải siêng năng tu học...” [9].',
    },
  },
  {
    question: 'Tình trạng Phật giáo thời đầu nhà Nguyễn (Gia Long, Minh Mạng, Thiệu Trị) được văn bản mô tả như thế nào?',
    options: {
      a: 'Sản sinh ra hàng loạt các vị cao tăng soi sáng bầu trời đen tối.',
      b: 'Trở thành tôn giáo độc tôn và đẩy lùi hoàn toàn ảnh hưởng của Khổng giáo.',
      c: 'Phát triển rực rỡ nhờ sự ủng hộ tuyệt đối của vua Gia Long ngay khi lên ngôi.',
      d: 'Biến thành một thần đạo chỉ lo cúng bái, tăng đồ sa sút về giới luật.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Các vị cao tăng quá ít ỏi, “chẳng khác gì những chiếc sao lẻ tẻ trên bầu trời đen tối, chẳng soi sáng được gì” [7].',
      b: 'Sai. Trong dân gian ảnh hưởng đạo Phật mỗi ngày mỗi lu mờ, phai nhạt dần [7].',
      c: 'Sai. Vua Gia Long khi mới lên ngôi phải ưu tiên lập lại an ninh trật tự, chưa có thì giờ chấn hưng Phật giáo [7].',
      d: 'Đúng. Đạo Phật suy đồi, trở thành một thần đạo cúng bái cầu đảo; tăng đồ lần lần sa vào con đường trụy lạc, danh vọng, chức tước, có vợ con công nhiên [7].',
    },
  },
  {
    question: 'Kết luận chính của văn bản về mối quan hệ giữa lịch sử dân tộc và lịch sử Phật giáo Việt Nam là gì?',
    options: {
      a: 'Tương lai đất nước chỉ phụ thuộc vào các chính sách kinh tế mà không cần tôn giáo.',
      b: 'Vận nước hưng thì Đạo Phật thịnh, vận nước suy thì Đạo Phật thoái trào.',
      c: 'Đạo Phật hoàn toàn độc lập và không bị ảnh hưởng bởi sự thay đổi của các triều đại.',
      d: 'Các vị vua ít hiểu đạo Phật thường là những người trị nước thành công nhất.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tài liệu kết luận muốn đất nước có tương lai rạng rỡ, lãnh đạo cần dành cho Đạo Phật một địa vị quan trọng [10].',
      b: 'Đúng. Tác giả khẳng định sự biến chuyển của Đạo Phật đi song song với đất nước: “Mỗi lần vận nước hưng lên thì Đạo Phật cũng phát triển mạnh, mỗi lần vận nước suy nhược thì Đạo Phật cũng thoái trào” [7].',
      c: 'Sai. Đạo Phật có liên hệ mật thiết và hòa mình trong cuộc sống của dân tộc [10].',
      d: 'Sai. Tài liệu cho rằng những vị vua ít hiểu đạo, phá đạo phần nhiều cũng là những vị vua ít thành công nhất trong sự trị nước an dân [10].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-5-bai-4-lich-su-phat-giao-viet-nam-tiep-theo',
  slug: 'bai-thu-4-lich-su-phat-giao-viet-nam-tiep-theo',
  title: 'Bài Thứ 4 - Lịch sử Phật giáo Việt Nam (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 4,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-17',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-4-lich-su-phat-giao-viet-nam-tiep-theo/infographic.png',
      readingContent,
      tableOfContents: [
        { id: 'phat-giao-duoi-thoi-nha-tran', label: 'I. Phật giáo dưới thời nhà Trần (1225-1400)' },
        { id: 'tinh-hinh-chung-duoi-doi-nha-tran', label: '1. Tình hình chung của Phật giáo dưới đời nhà Trần', indent: 1 },
        { id: 'cac-vi-vua-nha-tran-co-cong', label: '2. Các vị vua nhà Trần có công với sự truyền bá Phật pháp', indent: 1 },
        { id: 'vua-tran-thai-tong', label: 'a. Vua Trần Thái Tông', indent: 2 },
        { id: 'vua-tran-nhan-tong', label: 'b. Vua Trần Nhân Tông', indent: 2 },
        { id: 'vua-tran-anh-tong', label: 'c. Trần Anh Tông', indent: 2 },
        { id: 'phai-truc-lam-yen-tu', label: '3. Phái Trúc Lâm Yên Tử và các vị Tổ trong phái ấy', indent: 1 },
        { id: 'tue-trung-thuong-si', label: 'a. Tuệ Trung Thượng Sĩ', indent: 2 },
        { id: 'tran-nhan-tong-de-nhat-to', label: 'b. Trần Nhân Tông, đệ nhất Tổ', indent: 2 },
        { id: 'phap-loa-to-su', label: 'c. Pháp Loa Tổ sư', indent: 2 },
        { id: 'huyen-quang-ton-su', label: 'd. Huyền Quang Tôn sư', indent: 2 },
        { id: 'phat-giao-duoi-doi-nha-ho-nha-minh-hau-le', label: 'II. Phật giáo dưới đời nhà Hồ, nhà Minh và Hậu Lê' },
        { id: 'phat-giao-trong-thoi-nam-bac-phan-tranh', label: 'III. Phật giáo trong thời Nam Bắc phân tranh' },
        { id: 'phat-giao-thoi-cac-chua-trinh', label: '1. Phật giáo trong thời các chúa Trịnh', indent: 1 },
        { id: 'phat-giao-thoi-ky-chua-trinh', label: 'a. Phật giáo trong thời kỳ này', indent: 2 },
        { id: 'huong-hai-thien-su', label: 'b. Hương Hải Thiền sư', indent: 2 },
        { id: 'phat-giao-thoi-cac-chua-nguyen', label: '2. Phật giáo trong thời các chúa Nguyễn', indent: 1 },
        { id: 'phat-giao-thoi-ky-chua-nguyen', label: 'a. Phật giáo trong thời kỳ này', indent: 2 },
        { id: 'cac-vi-danh-tang', label: 'b. Các vị danh tăng', indent: 2 },
        { id: 'ngai-nguyen-thieu', label: 'Ngài Nguyên Thiều', indent: 3 },
        { id: 'ngai-lieu-quan', label: 'Ngài Liễu Quán', indent: 3 },
        { id: 'phat-giao-duoi-doi-cac-vua-dau-trieu-nguyen', label: 'IV. Phật giáo dưới đời các vị vua đầu triều Nguyễn' },
        { id: 'tinh-trang-phat-giao-dau-trieu-nguyen', label: 'Tình trạng Phật giáo trong giai đoạn này', indent: 1 },
        { id: 'ket-luan', label: 'Kết luận' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-4-lich-su-phat-giao-viet-nam-tiep-theo/Vietnamese_Buddhist_Tides.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/cScCQdluLQ8',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6jj11H8ox6m2YlvdfPPo3Z?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Lịch sử Phật giáo Việt Nam (tiếp theo)',
    passPercentage: 70,
    questions,
  },
}

export default lesson
