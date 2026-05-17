import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">

  <section id="mo-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">A. MỞ ĐỀ</h2>
    <p>Khao khát cái tuyệt đối, khinh thường cái tương đối; mong cầu cái vĩnh viễn trường tồn, ruồng bỏ cái biến chuyển vô thường, người Việt Nam nói riêng và người Á Châu nói chung đã được huân tập mấy ngàn năm trong một thái độ tư tưởng như trên, nên đã xem thường lịch sử, là một môn học theo sát sự biến chuyển vô thường của sự thế, mà mục đích là mong ghi chép một cách trung thành những gì đã mất hút trong bóng tối của thời gian.</p>
    <p>Quan niệm khinh thường lịch sử ấy đã đem lại cho chúng ta nhiều điều tai hại không nhỏ. Chúng ta đã bỏ mất bao nhiêu bài học quý giá mà ông cha chúng ta mua với một giá rất đắt; chúng ta đã mất rất nhiều liên lạc với quá khứ, tắt mất đường thông cảm với người xưa, và đang lạc loài trong hiện tại vì không biết nên bỏ con đường nào và nên theo con đường nào. Người ta thường nói rất đúng: một dân tộc không quá khứ, thì cũng khó mà có tương lai.</p>
    <p>Riêng trong phạm vi Phật giáo chúng ta, tìm về cho đúng nguồn gốc, thử vạch lại con đường đi truyền giáo của ông cha, xây dựng lại mô hình của một thời đại huy hoàng của Phật giáo, đó là những công việc vô cùng khó khăn, nhọc mệt.</p>
    <p>Nhưng mặc dù mệt nhọc, khó khăn, không lẽ thấy vết xe đổ của người xưa mà nay chúng ta không tránh, cứ nhắm mắt đi càn? Người xưa đã xem thường lịch sử, ngày nay trái lại, chúng ta phải dành cho nó một địa vị quan trọng. Có thấy rõ được nguồn gốc, sự phát triển, những thời đại thịnh suy của một tôn giáo, chúng ta mới hiểu rõ được giá trị chân thật của tôn giáo ấy. Nhất là nếu chúng ta là những người có nhiệm vụ truyền bá giáo lý của Phật Đà, thì hơn ai cả, chúng ta phải học lịch sử Đạo Phật để tìm hiểu lẽ thịnh suy, nguyên nhân những thành bại của công cuộc hoằng dương chánh pháp trên khắp năm châu, hầu bắt chước những điều hay có lợi cho Đạo, bỏ những điều dở, có hại cho Đạo, để Phật Pháp được hoằng truyền mãi mãi với thời gian.</p>
    <p>Vậy trước tiên, chúng ta hãy trở về nguồn, tuần tự đi theo bước chân trên đường truyền giáo, từ khi Đức Giáo chủ Thích Ca mới xuất thế ở Ấn Độ, dần dần qua Trung Hoa, rồi đến Việt Nam, để cuối cùng có một ý niệm tổng quát về hiện tình Phật giáo ở nước nhà và trên Thế giới phức tạp ngày nay.</p>
  </section>

  <section id="chanh-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">B. CHÁNH ĐỀ</h2>
    <p class="text-lg font-semibold uppercase tracking-wide text-secondary-700 dark:text-secondary-300">Phật giáo ở Ấn Độ</p>

    <section id="su-khai-nguon">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Sự khai nguồn của Đức Giáo chủ Thích Ca</h3>

      <section id="tinh-trang-xa-hoi">
        <h4 class="text-lg font-semibold">1. Tình trạng xã hội đen tối và tư tưởng phức tạp ở Ấn Độ khi Đức Phật xuất thế</h4>
        <p>Xét về sự bất công trong xã hội trên 2500 năm trước đây, thì xã hội Ấn Độ có lẽ là một trong những xã hội có một chế độ xã hội và chính trị bất công nhất. Dân chúng Ấn Độ thời bấy giờ bị phân chia rất nhiều giai cấp khác nhau, tựu trung có thể liệt vào những giai cấp chính sau đây:</p>
        <ul>
          <li><strong>a) Bà-la-môn (Brahmanes)</strong> gồm những Giáo sĩ, những người giữ quyền thống trị tinh thần, phụ trách về lễ nghi, cúng bái. Họ tự nhận mình là hạng cao thượng, sinh từ lỗ miệng Phạm Thiên (Brahma) hay Phạm Thiên cầm cương lãnh đạo tinh thần dân tộc, nên có quyền ưu tiên được tôn kính, và an hưởng cuộc đời sung sướng nhất.</li>
          <li><strong>b) Sát-đế-ly (Kshatriyas)</strong> là hàng vua chúa quý phái, tự cho mình sinh từ cánh tay Phạm Thiên, thay mặt cho Phạm Thiên nắm giữ quyền hành thống trị dân chúng.</li>
          <li><strong>c) Vệ-xá (Vaisyas)</strong> là những hàng thương gia chủ điền, tin mình sinh ra từ bắp vế Phạm Thiên, có nhiệm vụ đảm đương về kinh tế trong nước (mua bán, trồng trọt, thu huê lợi cho quốc gia).</li>
          <li><strong>d) Thủ-đà-la (Sudras)</strong> là hàng hạ tiện, nô lệ tin mình sinh từ gót chân Phạm Thiên, nên thủ phận làm khổ sai suốt đời cho các giai cấp trên.</li>
        </ul>
        <p>Ngoài bốn giai cấp trên, còn có một hạng người hạ tiện nhất là giống Ba-ri-a (Pariahs) giống dân tộc mọi rợ, bị coi như sống ngoài lề xã hội loài người, bị các giai cấp trên đối xử như thú vật, vô cùng khổ nhục, tối tăm.</p>
        <p>Năm giai cấp này mặc y phục màu sắc khác nhau. Mỗi giai cấp sống theo luật lệ hệ thống cha truyền con nối, không được thay đổi nghề nghiệp hay cưới hỏi lẫn nhau, và không được di chuyển chỗ ở khác. Theo luật Bà-la-môn, chỉ ba giai cấp trên có quyền đọc kinh, học đạo, còn hai giai cấp dưới thì đời đời chỉ làm nô lệ cho ba giai cấp trên mà thôi.</p>
        <p>Hạng Bà-la-môn hưởng sung sướng nhàn hạ bao nhiêu, thì đám người hạ tiện ở dưới lại khổ sở, nhục nhã bấy nhiêu. Sự bất công xã hội thật không thể nào diễn tả nổi. Giữa người với người, thật không có một nhịp cầu thông cảm nào, nguồn yêu thương tắc nghẽn, giai cấp này đối với giai cấp khác là địch thủ mà càng bóc lột được bao nhiêu là càng tốt bấy nhiêu.</p>
        <p>Về phương diện tôn giáo, triết học, tư tưởng thì xã hội Ấn Độ thời bấy giờ cũng diễn ra một cảnh tượng vô cùng hỗn tạp. Về tín ngưỡng người thờ thần lửa, kẻ thờ thần núi, thần sông, kẻ thờ thần gió, thần chớp, thần mặt trời. Về triết học, kẻ cho rằng Phạm Thiên là căn bản của vũ trụ, vạn hữu, kẻ cho rằng đất là căn bản, kẻ cho rằng nước là căn bản, kẻ cho rằng gió là căn bản... có phái đi xa hơn, từ cụ thể đến trừu tượng, lập ra những thuyết: thời gian luận, không gian luận, phương hướng luận, chủ trương nhất nguyên, nhị nguyên, đa nguyên... Gồm một trăm phái khác nhau, luôn luôn đả kích chống báng nhau.</p>
        <div class="my-6 rounded-lg border-l-4 border-amber-400 bg-amber-50/50 p-5 dark:border-amber-600 dark:bg-amber-900/20">
          <p class="m-0">Tóm lại, xã hội Ấn Độ lúc bấy giờ là một xã hội về vật chất thì đang rên xiết dưới ách bất công, áp bức, về tinh thần thì đang quay cuồng, điên đảo trong những luồng tư tưởng lý thuyết rối reng, tà vạy. Xã hội ấy đang khao khát tình thương và bình đẳng, đang mong chờ được chói rạng dưới ánh sáng của trí huệ. Trong hoàn cảnh ấy, Đức Phật Thích Ca đã xuất hiện đúng lúc để cứu vớt cõi đời sầu khổ.</p>
        </div>
      </section>

      <section id="duc-phat-thich-ca">
        <h4 class="text-lg font-semibold">2. Đức Phật Thích Ca, vị giáo chủ của Đạo Từ bi và Trí huệ</h4>

        <section id="nien-lich-giang-sinh">
          <h5 class="font-semibold">a) Niên lịch Giáng sinh</h5>
          <p>Như chúng ta đã nói ở phần mở đề, người Phật tử chúng ta không cho vấn đề lịch sử là quan trọng; lại thêm trải qua một thời gian lâu dài từ khi Đức Phật xuất hiện đến nay, tài liệu bị thất lạc nhiều, nên có nhiều thuyết khác nhau về niên lịch Giáng sinh của Đức Phật.</p>
          <p>Tuy thế, ngày nay để được thống nhất toàn vẹn về niên lịch, Phật giáo thế giới họp tại Đông Kinh năm 1952, đã thỏa thuận rằng ngày trăng tròn tháng hai của xứ Ấn Độ (tức ngày rằm tháng tư âm lịch) năm 624 trước Jesus Christ ra đời là ngày Đản sinh của Đức Phật Thích Ca. Như vậy, tính đến năm nay (2026) thì Đức Phật Giáng sinh đã được 2650 năm (2026 + 624). Nhưng nếu chúng ta thấy ghi Phật lịch 2570 (tính đến năm Tây lịch là 2026) là vì Tổng hội Phật giáo Quốc tế lấy năm nhập Niết-bàn của Đức Phật làm năm đầu kỷ nguyên, chứ không phải lấy năm sinh.</p>
        </section>

        <section id="quoc-do-dong-ho">
          <h5 class="font-semibold">b) Quốc độ và dòng họ</h5>
          <p>Thời bấy giờ xứ Ấn Độ gồm nhiều tiểu quốc, khi hòa khi chiến với nhau như đời Chiến quốc bên Tàu. Tuy thế, đại cuộc vẫn thu về nước Ma-kiệt-đà (Magadha) như nhà Chu ở Trung Quốc đối với các nước chư hầu vậy. Nước này lớn nhất ở phía nam sông Hằng (Ganges) làm trung tâm cho toàn xứ Ấn Độ. Ở phía Bắc xứ Ấn Độ, gần dưới chân dãy núi Hy-mã-lạp-sơn (bây giờ là nước Nepal) có một quốc độ tên là Ca-tỳ-la-vệ (Kapilavastu).</p>
          <p>Vua trị vì nước này là Tịnh Phạn Vương (Suddhodana) thuộc giai cấp Sát-đế-ly (Kshatriya) dòng Kiều-tất-la (Gotama) là một đại quý tộc ở Ấn Độ. Bà Hoàng hậu, vợ của vua Tịnh Phạn là Ma Gia (Maha-maya) đến 45 tuổi mới có thai.</p>
          <p>Theo tục lệ Ấn Độ, gần ngày sinh, Hoàng hậu trở về nhà cha mẹ là vua A Nậu Thích Ca (Anushakya) ở nước Câu Ly (Koli). Một buổi bình minh, Hoàng hậu ra dạo chơi trong vườn hoa Lâm Tỳ Ni (Lumbini) và sinh hạ Thái tử ở đấy. Thái tử được đặt tên là Tất Đạt Đa (Siddhartha) và theo tục lệ Ấn Độ lấy họ mẹ là Thích Ca (Shakya). Sau khi đã sinh Thái tử Tất Đạt Đa được 7 ngày, Hoàng hậu Ma Gia tạ thế. Em gái của hoàng hậu là Ma Ha Ba Xà Ba Đề (Maha-Prajapati) thay chị nuôi Thái tử Tất Đạt Đa cho đến lớn.</p>
          <p>Thái tử Tất Đạt Đa, sau này tức là Đức Phật Thích Ca Mâu Ni, vị Giáo chủ từ bi và trí huệ của Đạo Phật.</p>
        </section>

        <section id="hinh-tuong-tu-chat">
          <h5 class="font-semibold">c) Hình tướng và tư chất</h5>
          <p>Hình tướng của Thái tử có những nét đặc biệt hơn người thường: Ngài có ba mươi hai tướng quý và tám mươi vẻ đẹp. Cho nên khi xem tướng Ngài, Đạo sĩ A-tư-đà (Asita) đã tiên đoán sau này Ngài sẽ thành Phật, làm chủ cả tam thế, dắt đường chỉ nẻo cho chúng sinh thoát khỏi bể khổ luân hồi.</p>
          <p>Thuở thơ ấu, tư chất thông minh và tánh tình đức độ của Ngài đã biểu lộ một cách rõ rệt. Những Đạo sĩ thông thái, những Võ sĩ tài danh đều được Tịnh Phạn vương mời đến dạy cho Thái tử; và chẳng bao lâu Thái tử đã trở thành một vị văn võ toàn tài, không ai sánh kịp.</p>
          <p>Cùng một nhịp với tài năng, đức độ của Ngài cũng được phát triển một cách vô cùng nhanh chóng và sâu rộng. Tình thương của Ngài lan tràn, bao phủ tất cả mọi vật mọi người.</p>
          <p>Và cũng do tư chất thông minh nhìn thấy rõ được tánh cách giả dối, vô thường của sự thế, và lòng thương vô hạn, không thể ngồi yên để nhìn thấy sự rên siết, khổ đau của cõi đời, nên tâm hồn của Ngài không bao giờ được yên ổn. Ngày đêm, Ngài luôn luôn nghĩ đến phương pháp cứu khổ cho chúng sinh.</p>
          <p>Vua Tịnh Phạn, để làm khuây khỏa lòng con, truyền dựng lên một cung điện nguy nga, bày đủ trò đàn ca múa hát bao vây lấy Thái tử, và còn cưới cho Ngài một người vợ tuyệt thế giai nhân là nàng Da Du Đà La (Yasodhara) nhưng Thái tử vẫn không khuây nỗi buồn mênh mông của cõi thế.</p>
        </section>

        <section id="xuat-gia">
          <h5 class="font-semibold">d) Xuất gia</h5>
          <p>Năm Ngài mười chín tuổi (có chỗ nói 29 tuổi), sau khi đã để lại cho vua Tịnh Phạn một người cháu nội là La Hầu La (Rahula), Thái tử quyết định rời bỏ Hoàng gia, từ bỏ cuộc đời vinh hoa phú quý, trốn ra khỏi hoàng thành, cắt tóc vào rừng sâu mong được yên tĩnh để tìm nghĩ phương pháp cứu độ chúng sinh thoát khỏi vòng khổ ải và đưa họ lên bờ giác ngộ vĩnh viễn yên vui.</p>
          <p>Ban đầu Ngài phải đi tìm học hỏi với những đạo sĩ danh tiếng nhất Ấn Độ thời bấy giờ, nhưng rồi Ngài nhận thấy chân lý và lối tu hành của họ cũng không có gì là siêu thoát. Từ đó, Ngài đi vào ẩn trong dãy núi Tuyết Sơn, phải tự mình tu luyện để tìm ra cái đạo giải thoát như ý Ngài mong muốn.</p>
          <p>Trong sáu năm trời tu khổ hạnh, Ngài cũng chưa thu thập được kết quả gì khả quan. Bấy giờ, Ngài mới đi đến núi Tượng Đầu (Gajasirsa) bên bờ sông Ni Liên Thiền. Sau khi tắm rửa xong Ngài thọ bát cháo sữa (đề hồ) của mấy nàng mục nữ cúng. Rồi Ngài đi đến dưới gốc cây Tất-bát-la (Pippala, sau này người đời gọi là cây Bồ-đề nghĩa là cây giác ngộ, để kỷ niệm sự giác ngộ của Đức Phật dưới gốc cây ấy). Ngài ngồi thiền định ở đó và thề rằng:</p>
          <blockquote>
            <p class="mb-0"><em>"Nếu Ta ngồi đây mà không chứng được đạo quả, thì dù thịt nát xương tan, Ta quyết không bao giờ đứng dậy".</em></p>
          </blockquote>
        </section>

        <section id="thanh-dao-thuyet-phap">
          <h5 class="font-semibold">e) Thành đạo và thuyết pháp độ sinh</h5>
          <p>Ngài ngồi thiền định dưới gốc cây Tất-bát-la, cho đến ngày thứ bốn mươi chín, lúc sao mai vừa mọc, thì Ngài hốt nhiên đại ngộ, thấy được chân lý của vũ trụ và nguồn gốc sinh tử của chúng sinh. Ngài đã thành Phật với danh hiệu là Phật Thích Ca Mâu Ni (Shakya Muni).</p>
          <p>Sau khi thành đạo trong khoảng thời gian bốn mươi chín năm (có chỗ chép là bốn mươi lăm năm) Đức Phật chu du khắp cả các lưu vực sông Hằng, đem đạo vô thượng của Ngài giáo hóa chúng sinh, không phân biệt già trẻ, nam nữ, giàu nghèo, sang hèn, màu da, chủng tộc, trí thức hay ngu si.</p>
          <p>Nhờ lòng từ bi không bờ bến, đức hy sinh rộng lớn vô biên, Ngài đã giảng nói pháp trên năm trăm hội, hóa độ vô số quần sinh, thoát vòng mê mờ khổ não. Và do đó, đạo Phật được thành lập trên cõi đời.</p>
        </section>

        <section id="nhap-niet-ban">
          <h5 class="font-semibold">f) Phật nhập Niết-bàn</h5>
          <p>Vào năm 544 trước Tây lịch (tính đến năm 2026 tức là: 2026 + 544 = 2570 năm) Đức Phật bấy giờ đã 80 tuổi. Nhận thấy chí nguyện của mình đã thực hiện, nhiệm vụ độ sinh của mình đã đầy đủ, một hôm, Đức Phật cho hội đệ tử của Ngài lại, ban những lời di chúc cặn kẽ, rồi từ giã cõi đời một cách bình thản, giản dị trên chiếc võng mắc ở giữa hai cây bông vải (Sala) ngoài châu thành Câu-thi-la (Kusinagara).</p>
          <p>Như thế ấy, một cuộc đời vô cùng vĩ đại đã xuất hiện và biến ẩn như một luồng ánh sáng mầu nhiệm khi đã đánh dấu ba giai đoạn lớn một cách vô cùng giản dị và đầy ý nghĩa:</p>
          <ul>
            <li>Ra đời bên cạnh một gốc cây</li>
            <li>Thành đạo bên một gốc cây</li>
            <li>Và lìa đời ở giữa hai cành cây</li>
          </ul>
        </section>
      </section>
    </section>

    <section id="lich-su-truyen-ba">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Lịch sử truyền bá Phật giáo tại Ấn Độ</h3>

      <section id="bon-thoi-ky-ket-tap">
        <h4 class="text-lg font-semibold">1. Bốn thời kỳ kết tập kinh điển</h4>
        <p>Sau khi Đức Phật nhập Niết-bàn, các vị đệ tử của Đức Phật đã tiếp tục thay phiên nhau nêu cao ngọn đuốc giác ngộ để dắt dẫn quần sinh và tiếp nối sự nghiệp “truyền đăng” cho đến ngày nay. Trước tiên chúng ta hãy nói đến bốn thời kỳ kết tập kinh điển tại Ấn Độ:</p>

        <section id="ket-tap-thu-nhat">
          <h5 class="font-semibold">a) Thời kỳ kết tập thứ nhất</h5>
          <p>Bốn tháng sau khi Đức Phật nhập Niết-bàn, Ngài Ma Ha Ca Diếp (Maha Kasyapa) thay Phật thống suất Tăng chúng đã triệu tập một hội nghị gồm khoảng 500 đại đệ tử của Phật, ở thành Vương Xá (Rajagriha) để giảng tụng lại những giáo lý mà Đức Phật đã dạy. Trong hội nghị đầu tiên này, Ngài Ma Ha Ca Diếp được suy tôn ngồi ghế chủ tọa; Ngài A Nan, là vị đệ tử thường theo Phật nghe nhiều và nhớ lâu, được cử ra tụng lại những lời dạy của Phật; còn Ngài Ưu Ba Ly (Upali) là vị đệ tử thông suốt và nghiêm trì giới luật nhất, được cử ra tụng giới luật. Hội nghị này đã kết thúc sau bảy tháng làm việc và 500 vị đại đệ tử đều công nhận đó là những lời chân thật của Phật.</p>
          <p>Đại hội này được mệnh danh là “Kỳ kết tập thứ nhất”.</p>
        </section>

        <section id="ket-tap-thu-hai">
          <h5 class="font-semibold">b) Kỳ kết tập thứ hai</h5>
          <p>Khoảng một trăm năm sau khi Phật nhập diệt, vì có sự bất đồng về giới điều, nên Tăng chúng chia làm hai nhóm, họp riêng ở hai thành Vaisali và Vajji.</p>
          <p>Nhóm tăng sĩ họp ở thành Vaisali do sự triệu tập của Ngài trưởng lão Yasa thọ 165 tuổi, gồm có 12.000 Tăng sĩ, nhưng trong số ấy chỉ có 700 vị lão thành mới có quyền biểu quyết. Hội nghị này họp dưới quyền chủ tọa của Ngài Revata và đồng thanh biểu quyết: “Không nên sửa đổi cho sai những điều luật của Phật đã truyền đạo mặc dù Đức Thế Tôn đã có di huấn rằng nếu chư Tăng đồng ý cùng nhau là thấy điều luật nào của Như Lai đã chế định là ít quan trọng và không thể thụ trì được nữa, thì được phép sửa chữa”.</p>
          <p>Trong khi ấy thì nhóm Tăng sĩ ở thành Vajji họp dưới quyền chủ tọa của Đại đức Vajjiputra lại chấp thuận. Trong kỳ kết tập thứ hai này chỉ đặt trọng tâm trong việc giải quyết về giới luật mà thôi. Tuy thế, Tăng đồ cũng chia thành hai phái rõ rệt. Phái do Ngài Yasa triệu tập và giữ đúng giới luật của Phật, thì gọi là phái Nguyên thủy (Theravadins) hay Thượng tọa bộ. Phái do Ngài Vajjiputra sửa đổi mười điều luật của Phật thì gọi là phái Tiến thủ, hay là Đại chúng bộ (Mahasanghikas).</p>
          <p>Từ đấy, Phật giáo chia ra hai phái rõ rệt và là cội rễ cho hai mươi tôn phái sau này.</p>
        </section>

        <section id="ket-tap-thu-ba">
          <h5 class="font-semibold">c) Kỳ kết tập thứ ba</h5>
          <p>Hơn hai thế kỷ sau ngày Phật nhập diệt (274 năm trước Tây lịch), Hoàng đế A Dục lại triệu tập 1000 vị Đại trưởng lão uyên thâm để kết tập kinh điển tại thành Pataliputra (tức là Bihar và Patna ngày nay) dưới quyền chủ tọa của Ngài Mục Kiền Liên Tu Đế (Moggaliputta Tissa). Sau chín tháng làm việc, hội nghị đã hoàn thành công tác kết tập kinh điển, ngoài ra lại còn chỉnh đốn Tăng giới, bài trừ những hạng tu sĩ phạm trai, phá giới, vô kỷ luật.</p>
        </section>

        <section id="ket-tap-thu-tu">
          <h5 class="font-semibold">d) Kỳ kết tập thứ tư</h5>
          <p>Vào khoảng 600 năm sau khi Phật nhập diệt, nghĩa là vào thế kỷ thứ nhất Tây lịch, Vua Ca Ni Sắc Ca (Kaniska) một vị Đại đế Ấn Độ, có tâm hộ pháp chẳng thua gì Vua A Dục, đã triệu tập 500 vị Bồ Tát, 500 vị Tỳ kheo cùng 500 người tại gia cư sĩ, tại thành Ca Thập Di La để kết tập kinh điển dưới quyền chủ tọa của hai Ngài Hiếp Tôn Giả và Thế Hữu.</p>
          <p>Kỳ kết tập này gọi là kỳ kết tập lần thứ tư.</p>
          <p>Trong bốn kỳ kết tập này thì hai kỳ đầu chưa cần đến sự biên chép, nghĩa là chỉ đọc tụng lại, xem lời lẽ nào là của Phật đã nói ra, hay xét những ý nghĩa nào là đúng với chánh pháp. Đến thời kỳ thứ ba và thứ tư mới dùng đến văn tự để biên chép thành sách vở. Trong sự biên chép này, chư Tăng chia làm hai phái: Phái Nam thì ghi bằng văn Pali, còn phái Bắc thì ghi bằng văn Phạn (Sanskrit).</p>
        </section>
      </section>

      <section id="nam-bac-phuong">
        <h4 class="text-lg font-semibold">2. Nam phương và Bắc phương Phật giáo</h4>
        <p>Như trên đã nói, vì kinh điển được ghi chép bằng hai thứ văn: Pali và Phạn, nên những xứ nói tiếng Pali thì kinh điển bằng Pali được truyền bá, còn những xứ dân chúng nói tiếng Phạn thì kinh điển bằng Phạn văn được truyền tụng. Nếu lấy Trung Ấn Độ là cứ điểm, thì những xứ phía Nam Ấn Độ và lan ra đến những xứ Tích Lan, Miến Điện, Thái Lan, Ái Lao, Cao Miên... đều theo kinh điển Pali, nên cũng gọi là Nam phương Phật giáo.</p>
        <p>Còn những xứ thuộc Trung Ấn Độ, Bắc Ấn Độ và lan ra đến Nepal, Tây Tạng, Trung Hoa, Việt Nam, Cao Ly, Nhật Bản... thì lại căn cứ theo kinh điển chữ Phạn, và được gọi là Bắc phương Phật giáo.</p>
        <div class="my-6 rounded-lg border-l-4 border-sky-400 bg-sky-50/40 p-5 dark:border-sky-600 dark:bg-sky-900/20">
          <p>Nam phương hay Bắc phương Phật giáo đều thờ chung một đấng Giáo chủ là Đức Phật Thích Ca và đều tuân theo những yếu điểm mà Phật đã dạy. Tuy thế, tùy theo căn cơ, tâm lý và ảnh hưởng văn hóa cùng đời sống của dân chúng có khác nhau giữa Nam và Bắc phương mà phương pháp tu hành và sự phát huy giáo lý có điểm dị và đồng.</p>
          <p class="mb-0">Bắc phương phần nhiều đi về lối tung hoành, phát triển, phóng túng không câu nệ về hình thức. Nam phương thì lại có tánh cách thủ cựu, trung thành với Phật giáo Nguyên thủy, tôn trọng hình thức. Do đó mà có hai phái: Tiểu thừa Phật giáo ở Nam phương và Đại thừa Phật giáo ở Bắc phương.</p>
        </div>
      </section>

      <section id="phat-trien-dai-tieu-thua">
        <h4 class="text-lg font-semibold">3. Sự phát triển của Đại thừa và Tiểu thừa</h4>
        <p>Ở đây vì chúng ta còn đang ở trong phần lịch sử truyền bá Phật giáo, nên chưa vội đề cập đến sự sai khác giữa giáo lý Đại thừa và Tiểu thừa. Chúng ta hãy khu biệt vấn đề và nói đến sự phát triển của hai phái ấy ở Ấn Độ như thế nào mà thôi.</p>

        <section id="tieu-thua-bo-phai">
          <h5 class="font-semibold">a) Sự phát triển của các bộ phái Tiểu thừa</h5>
          <p>Như chúng ta đã biết, nguyên nhân Tiểu thừa chia ra làm hai bộ phái, vì trong kỳ kết tập lần thứ hai, về vấn đề giới luật có chỗ bất đồng, Tăng chúng mới chia ra làm hai phái: Một phái gồm các vị Trưởng lão gọi là Thượng tọa bộ; và một phái gồm phần nhiều các vị Tăng sĩ trẻ tuổi, nhưng rất đông đảo, gọi là Đại chúng bộ.</p>
          <p>Trong khoảng thời gian 100 năm sau kỳ kết tập lần thứ hai ấy, Đại chúng bộ lần lượt chia ra tám bộ phái như sau:</p>
          <p><strong>Lần thứ nhất chia làm ba bộ:</strong></p>
          <ul>
            <li>Nhất thuyết bộ</li>
            <li>Thuyết xuất thế bộ</li>
            <li>Kê dẫn bộ</li>
          </ul>
          <p><strong>Lần thứ hai chia ra một bộ nữa là:</strong> Đa văn bộ</p>
          <p><strong>Lần thứ ba chia ra một bộ nữa là:</strong> Thuyết giả bộ</p>
          <p><strong>Lần thứ tư lại chia ra làm ba bộ nữa là:</strong></p>
          <ul>
            <li>Chế đa bộ</li>
            <li>Tây sơn bộ</li>
            <li>Bắc sơn bộ</li>
          </ul>
          <p>Như thế là từ một bộ phái chính là Đại chúng bộ mà lần lượt chia làm tám chi bộ (cộng là 9 bộ). Trong lúc ấy thì bên Thượng tọa bộ ban đầu sống một cách yên ổn trong núi Ca Thập Di La, nhưng theo với thời gian, cũng phân phái dần, và cuối cùng gồm những bộ như sau:</p>
          <ul>
            <li>Thượng tọa bộ</li>
            <li>Thuyết nhất thế hữu bộ</li>
            <li>Độc tử bộ</li>
            <li>Pháp thượng bộ</li>
            <li>Hiền vi bộ</li>
            <li>Chánh thượng bộ</li>
            <li>Mật lâm sơn bộ</li>
            <li>Hóa địa bộ</li>
            <li>Pháp tạng bộ</li>
            <li>Ẩm quang bộ</li>
            <li>Kinh lượng bộ</li>
          </ul>
          <p>Tóm lại, bên phía Thượng tọa bộ, từ căn bản đến chi nhánh, gồm cả thảy 11 bộ. Nếu tổng cộng cả Thượng tọa bộ lẫn Đại chúng bộ, thì Tiểu thừa gồm cả thảy là 20 bộ.</p>
        </section>

        <section id="dai-thua-phat-trien">
          <h5 class="font-semibold">b) Sự phát triển của phái Đại thừa</h5>
          <p>Mặc dù trong giáo lý của Đức Phật có gồm cả ý nghĩa Tiểu thừa lẫn Đại thừa, nhưng trong bốn, năm thế kỷ đầu của Phật lịch, vì căn cơ của Tăng sĩ và tín đồ Ấn Độ thích hợp với Tiểu thừa hơn, nên giáo phái Tiểu thừa được phát triển mạnh. Nhưng từ thế kỷ thứ nhất Tây lịch, hay thứ sáu Phật lịch, giáo lý Đại thừa bắt đầu phát triển mạnh ở phía Bắc Ấn Độ và dần dần lan rộng ở Bắc phương.</p>
          <p>Công đầu tiên, nhờ đó Đại thừa Phật giáo được phát triển mạnh là của Ngài Mã Minh. Ngài Mã Minh, người ở Bắc Ấn Độ, sinh vào thế kỷ thứ nhất Tây lịch, lúc đầu theo ngoại đạo, có tài biện bác, sau vì biện luận thua Ngài Hiếp Tôn Giả, nên mới quy y theo Phật giáo. Chính Ngài là tác giả bộ luận Đại thừa Khởi tín, Đại thừa Trang nghiêm kinh luận, và nhờ sự hộ pháp đắc lực của Vua Ca Ni Sắc Ca, Ngài đã phục hưng và truyền bá một cách mạnh mẽ giáo lý Đại thừa.</p>
          <p>Một trăm năm sau, nối tiếp sự nghiệp của Ngài Mã Minh, có Ngài Long Thọ ở nước Tỳ Đạt La (Nam Ấn Độ) có thiên tư rất tốt, lúc còn nhỏ đã thông hiểu những kinh giáo của Bà-la-môn, Phệ-đà..., tinh thông cả thiên văn, địa lý, y học, số học. Ban đầu Ngài tu theo Tiểu thừa, sau Ngài nghiên cứu giáo lý Đại thừa và làm ra những bộ luận Trung quán, Thập nhị môn, Trí độ... để phá trừ tà chấp, chỉ rõ chánh lý Đại thừa, và đi chu du các nước để hàng phục ngoại đạo. Đại thừa nhờ đó ngày một thêm tỏ rạng.</p>
          <p>Nối nghiệp Ngài Long Thọ có hai vị đệ tử là Ngài Long Trí và Đề Bà là những người có công lớn trong việc phát dương Đại thừa.</p>
          <p>Sau khi Phật nhập Niết-bàn hơn 900 năm, nghĩa là khoảng thế kỷ thứ tư Tây lịch, có hai anh em Ngài Vô Trước và Thế Thân, sinh ở Bắc Ấn Độ, trước theo Bà-la-môn giáo, sau quy y theo Phật. Ngài Vô Trước là anh, giác ngộ giáo lý Đại thừa trước, còn Ngài Thế Thân ban đầu tu học giáo lý Tiểu thừa, sau nhờ anh là Ngài Vô Trước hướng dẫn sang Đại thừa.</p>
          <p>Từ đó hai anh em tích cực phát dương giáo nghĩa Đại thừa Duy thức và làm ra các bộ: Hiển Dương Thánh Giáo luận, Nhiếp Đại thừa luận... Cả hai Ngài đều chủ trương về Duy thức, biện rõ cái lý: “Tam giới duy tâm, vạn pháp duy thức”. Do đó, học thuyết của hai Ngài gọi là Pháp tướng Duy thức học, và hai Ngài được xem như là khai Tổ của Pháp tướng Duy thức học.</p>
          <p>Ảnh hưởng của hai Ngài nối tiếp lan rộng sang đến thế kỷ thứ 10 Tây lịch và làm cho Đại thừa Phật giáo ở Ấn Độ được phát triển một cách rực rỡ, và lu mờ giáo lý Tiểu thừa.</p>
        </section>
      </section>

      <section id="suy-tan-phat-giao">
        <h4 class="text-lg font-semibold">4. Sự suy tàn của Phật giáo tại Ấn Độ</h4>
        <p>Vào khoảng 2000 năm sau khi Phật nhập diệt, đạo Phật ở Ấn Độ lu mờ dần và hầu như không còn vang bóng gì nữa. Nguyên nhân của sự suy tàn ấy có thể quy vào ba lý do sau đây:</p>

        <section id="ly-do-ba-la-mon">
          <h5 class="font-semibold">a) Sự phục hưng và bài xích của đạo Bà-la-môn</h5>
          <p>Đạo Bà-la-môn, trước thời kỳ Đức Phật xuất hiện là một tôn giáo độc tôn ở Ấn Độ. Nhưng từ khi đạo Phật ra đời và càng ngày càng được phát triển mạnh vì tinh thần từ bi bình đẳng và ánh sáng rực rỡ của trí huệ, đạo Bà-la-môn mất dần thân thế và lui mãi vào trong bóng tối. Nhưng những vị lãnh đạo tôn giáo ấy không ngã lòng, một mặt họ lo tu chỉnh giáo lý của họ, một mặt họ thanh lọc hàng ngũ và dựa vào thế lực của chính quyền, dần dần họ chiếm lại địa vị cũ và hết sức bài xích Phật giáo.</p>
        </section>

        <section id="ly-do-hoi-giao">
          <h5 class="font-semibold">b) Sự xâm nhập quân sự của Hồi giáo</h5>
          <p>Hồi giáo là một tôn giáo nguyên ở Thổ Nhĩ Kỳ (Turquie) khi đã xâm nhập Ấn Độ bằng quân sự, đã dùng những thủ đoạn khốc liệt để hủy diệt chánh pháp, tàn hại Phật giáo bằng cách đập tháp, phá chùa, đốt Kinh điển, giết hại Phật tử. Do đó, đạo Phật hầu như không còn chỗ đứng ở Ấn Độ nữa.</p>
        </section>

        <section id="ly-do-noi-tai">
          <h5 class="font-semibold">c) Lý do nội tại</h5>
          <p>Nếu chỉ vì hai lý do ngoại lai nói trên, thì đạo Phật ở Ấn Độ không dễ gì bị tiêu diệt một cách nhanh chóng như thế. Sự suy sụp Phật giáo ở Ấn Độ còn là sự suy đồi của Tăng giới, Phật tử thiếu tu thiếu học, thiếu tinh thần tiến thủ của giới lãnh đạo Phật giáo Ấn Độ lúc bấy giờ nữa. Nếu sự phá phách ở bên ngoài không có sự gián tiếp tiếp tay phá hoại ở bên trong, thì Phật giáo ở Ấn Độ không diễn ra cái cảnh suy tàn hoang vắng như chúng ta đã thấy trong năm thế kỷ trước đây.</p>
        </section>
      </section>
    </section>
  </section>

  <section id="ket-luan">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">C. KẾT LUẬN</h2>
    <p>Đức Phật đã dạy: có sinh thì có diệt, có thành thì có hoại. Vậy sau mười lăm thế kỷ hưng thịnh, Phật giáo ở Ấn Độ dần dần suy đồi cũng là một sự thường. Luật vô thường chi phối tất cả những sự việc của đời này.</p>
    <p>Và cũng do cái luật biến dịch, chỗ này khuyết thì chỗ kia bồi, làn sóng lặn ở chỗ này để hưng ở chỗ khác. Đạo Phật đã chuyển đi từ trung tâm điểm là Ấn Độ để lan ra, hưng thịnh ở nước khác trước tiên là chung quanh Ấn Độ, rồi sang Trung Hoa và dần dần lan ra khắp thế giới.</p>
  </section>

</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong bối cảnh xã hội Ấn Độ thời Đức Phật, giai cấp nào được cho là sinh ra từ 'cánh tay của Phạm Thiên' và nắm giữ quyền thống trị dân chúng?",
    options: {
      a: 'Bà-la-môn (Brahmanes)',
      b: 'Vệ-xá (Vaisyas)',
      c: 'Sát-đế-ly (Kshatriyas)',
      d: 'Thủ-đà-la (Sudras)',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Giai cấp Bà-la-môn tự nhận mình sinh từ lỗ miệng Phạm Thiên và giữ quyền thống trị tinh thần.',
      b: 'Sai. Giai cấp Vệ-xá tin mình sinh ra từ bắp vế Phạm Thiên và đảm đương kinh tế trong nước.',
      c: 'Đúng. Sát-đế-ly là hàng vua chúa quý phái, tự cho mình sinh từ cánh tay Phạm Thiên, thay mặt Phạm Thiên thống trị dân chúng.',
      d: 'Sai. Giai cấp Thủ-đà-la tin mình sinh từ gót chân Phạm Thiên và thủ phận làm khổ sai suốt đời.',
    },
  },
  {
    question: 'Theo thống nhất tại Hội nghị Phật giáo thế giới năm 1952, niên lịch Giáng sinh của Đức Phật Thích Ca được xác định vào năm nào?',
    options: {
      a: 'Năm 624 trước Tây lịch',
      b: 'Năm 544 trước Tây lịch',
      c: 'Năm 563 trước Tây lịch',
      d: 'Năm 2570 trước Tây lịch',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Hội nghị Phật giáo thế giới tại Đông Kinh năm 1952 đã thỏa thuận ngày Đản sinh của Đức Phật Thích Ca là năm 624 trước Tây lịch.',
      b: 'Sai. Năm 544 trước Tây lịch là năm Đức Phật nhập Niết-bàn, được dùng làm mốc đầu của Phật lịch quốc tế.',
      c: 'Sai. Mốc thời gian này không được nhắc đến trong tài liệu bài học.',
      d: 'Sai. 2570 là số năm Phật lịch tính đến năm 2026, không phải niên đại giáng sinh.',
    },
  },
  {
    question: 'Sau khi Thái tử Tất Đạt Đa sinh hạ được 7 ngày, sự kiện quan trọng nào đã xảy ra trong gia đình hoàng gia?',
    options: {
      a: 'Đạo sĩ A-tư-đà đến xem tướng cho Thái tử',
      b: 'Hoàng hậu Ma Gia tạ thế',
      c: 'Thái tử thực hiện chuyến dạo chơi qua bốn cửa thành',
      d: 'Vua Tịnh Phạn đặt tên cho Ngài là Tất Đạt Đa',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đạo sĩ A-tư-đà có xem tướng cho Thái tử, nhưng tài liệu không ghi sự kiện này xảy ra đúng vào ngày thứ bảy sau sinh.',
      b: 'Đúng. Sau khi sinh Thái tử Tất Đạt Đa được 7 ngày, Hoàng hậu Ma Gia đã tạ thế.',
      c: 'Sai. Sự kiện dạo chơi bốn cửa thành không diễn ra vào thời điểm Thái tử mới sinh được 7 ngày.',
      d: 'Sai. Tài liệu không nhấn mạnh việc đặt tên là sự kiện xảy ra vào đúng ngày thứ bảy sau sinh.',
    },
  },
  {
    question: 'Trong kỳ kết tập kinh điển lần thứ nhất, vị đệ tử nào được cử ra để tụng lại các giới luật của Phật?',
    options: {
      a: 'Ngài Ma Ha Ca Diếp',
      b: 'Ngài Ưu Ba Ly',
      c: 'Ngài A Nan',
      d: 'Ngài Mục Kiền Liên',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ngài Ma Ha Ca Diếp là người thống suất Tăng chúng và được suy tôn ngồi ghế chủ tọa của kỳ kết tập thứ nhất.',
      b: 'Đúng. Ngài Ưu Ba Ly là vị đệ tử thông suốt và nghiêm trì giới luật nhất, nên được cử ra tụng giới luật.',
      c: 'Sai. Ngài A Nan được cử ra tụng lại những lời dạy của Phật.',
      d: 'Sai. Kỳ kết tập thứ nhất không giao vai trò này cho Ngài Mục Kiền Liên.',
    },
  },
  {
    question: 'Sự phân chia giữa phái Thượng tọa bộ (Theravadins) và Đại chúng bộ (Mahasanghikas) bắt đầu xuất hiện từ kỳ kết tập nào?',
    options: {
      a: 'Kỳ kết tập thứ hai',
      b: 'Kỳ kết tập thứ nhất',
      c: 'Kỳ kết tập thứ ba',
      d: 'Kỳ kết tập thứ tư',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Trong kỳ kết tập thứ hai, do bất đồng về giới điều, Tăng chúng đã chia thành hai phái rõ rệt là Thượng tọa bộ và Đại chúng bộ.',
      b: 'Sai. Kỳ kết tập thứ nhất kết thúc trong sự đồng thuận của 500 vị đại đệ tử.',
      c: 'Sai. Việc phân phái đã diễn ra trước kỳ kết tập thứ ba.',
      d: 'Sai. Đến kỳ kết tập thứ tư, sự phân phái đã có từ lâu.',
    },
  },
  {
    question: 'Đặc điểm nổi bật nhất của Nam phương Phật giáo so với Bắc phương Phật giáo là gì?',
    options: {
      a: "Chủ trương lý thuyết 'Tam giới duy tâm, vạn pháp duy thức'",
      b: 'Tôn trọng hình thức và giữ tính cách thủ cựu',
      c: 'Phát triển theo lối tung hoành, phóng túng',
      d: 'Sử dụng văn tự Phạn (Sanskrit) trong kinh điển',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đây là học thuyết của Pháp tướng Duy thức học thuộc dòng phát triển của Đại thừa.',
      b: 'Đúng. Nam phương có tánh cách thủ cựu, trung thành với Phật giáo Nguyên thủy và tôn trọng hình thức.',
      c: 'Sai. Đi theo lối tung hoành, phát triển và phóng túng là đặc điểm được gán cho Bắc phương Phật giáo.',
      d: 'Sai. Nam phương chủ yếu truyền bá kinh điển Pali, còn Bắc phương mới dựa nhiều vào kinh điển Phạn văn.',
    },
  },
  {
    question: "Ai là người được coi là khai Tổ của Pháp tướng Duy thức học, chủ trương thuyết 'Vạn pháp duy thức'?",
    options: {
      a: 'Ngài Long Thọ',
      b: 'Ngài Đề Bà',
      c: 'Hai anh em Ngài Vô Trước và Thế Thân',
      d: 'Ngài Mã Minh',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Ngài Long Thọ có công lớn trong việc làm sáng tỏ chánh lý Đại thừa qua các bộ luận Trung quán, Thập nhị môn và Trí độ.',
      b: 'Sai. Ngài Đề Bà là đệ tử của Ngài Long Thọ, có công phát dương Đại thừa nhưng không được nêu là khai Tổ của Duy thức học.',
      c: 'Đúng. Hai anh em Ngài Vô Trước và Thế Thân chủ trương thuyết “Tam giới duy tâm, vạn pháp duy thức” và được xem là khai Tổ của Pháp tướng Duy thức học.',
      d: 'Sai. Ngài Mã Minh là người có công phục hưng và truyền bá Đại thừa ở giai đoạn đầu.',
    },
  },
  {
    question: 'Đâu là một trong những nguyên nhân nội tại dẫn đến sự suy tàn của Phật giáo tại Ấn Độ khoảng 2000 năm sau khi Phật nhập diệt?',
    options: {
      a: 'Sự phục hưng và bài xích của đạo Bà-la-môn',
      b: 'Sự xâm nhập quân sự của Hồi giáo',
      c: 'Sự di cư của các cao tăng sang Trung Hoa và Việt Nam',
      d: 'Sự suy đồi của Tăng giới và thiếu tinh thần tu học',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Đây là nguyên nhân ngoại lai khi đạo Bà-la-môn dựa vào thế lực chính quyền để lấy lại ảnh hưởng.',
      b: 'Sai. Đây cũng là nguyên nhân ngoại lai do sự tàn phá bằng quân sự.',
      c: 'Sai. Tài liệu không nêu việc di cư của cao tăng là nguyên nhân suy tàn.',
      d: 'Đúng. Văn bản nhấn mạnh sự suy đồi của Tăng giới, Phật tử thiếu tu thiếu học và giới lãnh đạo thiếu tinh thần tiến thủ là lý do nội tại nghiêm trọng.',
    },
  },
  {
    question: 'Ba giai đoạn lớn trong cuộc đời Đức Phật đều gắn liền với một hình ảnh thiên nhiên tương đồng, đó là gì?',
    options: {
      a: 'Trên các đỉnh núi cao',
      b: 'Trong các hang động tĩnh mịch',
      c: 'Bên bờ những dòng sông lớn',
      d: 'Dưới hoặc giữa các gốc cây',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Văn bản không dùng hình ảnh đỉnh núi cao để tổng kết ba sự kiện lớn trong đời Đức Phật.',
      b: 'Sai. Hang động tĩnh mịch không phải hình ảnh được nhấn mạnh ở đây.',
      c: 'Sai. Bờ sông Ni Liên Thiền chỉ gắn với một chặng tu tập, không phải cả ba giai đoạn lớn.',
      d: 'Đúng. Đức Phật ra đời bên cạnh một gốc cây, thành đạo bên một gốc cây và lìa đời ở giữa hai cành cây.',
    },
  },
  {
    question: 'Hệ thống Tiểu thừa Phật giáo sau thời kỳ phân phái cuối cùng gồm tổng cộng bao nhiêu bộ phái?',
    options: {
      a: '100 bộ phái',
      b: '20 bộ phái',
      c: '9 bộ phái',
      d: '11 bộ phái',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Con số 100 được dùng để nói về sự hỗn tạp của các thuyết triết học, không phải số bộ phái Tiểu thừa.',
      b: 'Đúng. Khi cộng cả Thượng tọa bộ lẫn Đại chúng bộ, Tiểu thừa gồm cả thảy 20 bộ phái.',
      c: 'Sai. 9 chỉ là tổng số của nhánh Đại chúng bộ tính cả bộ gốc.',
      d: 'Sai. 11 là tổng số các bộ phái bên Thượng tọa bộ.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-5-bai-1-lich-su-phat-giao-an-do',
  slug: 'bai-thu-1-lich-su-phat-giao-an-do',
  title: 'Bài Thứ 1 - Lịch sử Phật giáo Ấn Độ',
  type: 'article',
  status: 'published',
  order: 1,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-17',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-1-lich-su-phat-giao-an-do/infographic.png',
      readingContent,
      tableOfContents: [
        { id: 'mo-de', label: 'A. Mở Đề' },
        { id: 'chanh-de', label: 'B. Chánh Đề' },
        { id: 'su-khai-nguon', label: 'I. Sự khai nguồn của Đức Giáo chủ Thích Ca', indent: 1 },
        { id: 'tinh-trang-xa-hoi', label: '1. Tình trạng xã hội đen tối và tư tưởng phức tạp', indent: 2 },
        { id: 'duc-phat-thich-ca', label: '2. Đức Phật Thích Ca, vị giáo chủ của Đạo Từ bi và Trí huệ', indent: 2 },
        { id: 'nien-lich-giang-sinh', label: 'a. Niên lịch Giáng sinh', indent: 3 },
        { id: 'quoc-do-dong-ho', label: 'b. Quốc độ và dòng họ', indent: 3 },
        { id: 'hinh-tuong-tu-chat', label: 'c. Hình tướng và tư chất', indent: 3 },
        { id: 'xuat-gia', label: 'd. Xuất gia', indent: 3 },
        { id: 'thanh-dao-thuyet-phap', label: 'e. Thành đạo và thuyết pháp độ sinh', indent: 3 },
        { id: 'nhap-niet-ban', label: 'f. Phật nhập Niết-bàn', indent: 3 },
        { id: 'lich-su-truyen-ba', label: 'II. Lịch sử truyền bá Phật giáo tại Ấn Độ', indent: 1 },
        { id: 'bon-thoi-ky-ket-tap', label: '1. Bốn thời kỳ kết tập kinh điển', indent: 2 },
        { id: 'ket-tap-thu-nhat', label: 'a. Kỳ kết tập thứ nhất', indent: 3 },
        { id: 'ket-tap-thu-hai', label: 'b. Kỳ kết tập thứ hai', indent: 3 },
        { id: 'ket-tap-thu-ba', label: 'c. Kỳ kết tập thứ ba', indent: 3 },
        { id: 'ket-tap-thu-tu', label: 'd. Kỳ kết tập thứ tư', indent: 3 },
        { id: 'nam-bac-phuong', label: '2. Nam phương và Bắc phương Phật giáo', indent: 2 },
        { id: 'phat-trien-dai-tieu-thua', label: '3. Sự phát triển của Đại thừa và Tiểu thừa', indent: 2 },
        { id: 'tieu-thua-bo-phai', label: 'a. Sự phát triển của các bộ phái Tiểu thừa', indent: 3 },
        { id: 'dai-thua-phat-trien', label: 'b. Sự phát triển của phái Đại thừa', indent: 3 },
        { id: 'suy-tan-phat-giao', label: '4. Sự suy tàn của Phật giáo tại Ấn Độ', indent: 2 },
        { id: 'ly-do-ba-la-mon', label: 'a. Sự phục hưng và bài xích của đạo Bà-la-môn', indent: 3 },
        { id: 'ly-do-hoi-giao', label: 'b. Sự xâm nhập quân sự của Hồi giáo', indent: 3 },
        { id: 'ly-do-noi-tai', label: 'c. Lý do nội tại', indent: 3 },
        { id: 'ket-luan', label: 'C. Kết Luận' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-1-lich-su-phat-giao-an-do/The_Lotus_Journey.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://notebooklm.google.com/notebook/1e94bc6b-95b3-4c06-ad9f-894fdd50f0e2',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/0Rt55BWW4PQG9mU9pz2lJI?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Lịch sử Phật giáo Ấn Độ',
    passPercentage: 70,
    questions,
  },
}

export default lesson
