import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="ong-phu-lau-na-hoi-phat-hai-cau-quan-trong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ TÁM</h2>

    <section id="i-ong-phu-lau-na-hoi-phat-hai-cau-quan-trong">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. ÔNG PHÚ LÂU NA HỎI PHẬT HAI CÂU QUAN TRỌNG</h3>
      <p>Lúc bấy giờ ông Phú Lâu Na Di Đa La Ni Tử đứng dậy lạy Phật, chắp tay cung kính và thưa rằng: Bạch Thế Tôn, trong hàng tứ chúng, Phật thường khen con thuyết pháp hơn hết; ở trong hội này con lại chứng được quả Vô lậu. Thế mà hôm nay con nghe Phật nói pháp nhiệm mầu cao thượng, hãy còn chưa hiểu. Cũng như người điếc đứng xa một trăm bước nghe tiếng muỗi kêu; thấy còn không được, huống chi lại nghe.</p>
      <p>Bạch Thế Tôn: Chân tâm này đã vốn thanh tịnh, tại sao lại thoạt sinh ra sơn hà đại địa và các chúng sinh?</p>
      <p>Lại nữa, Phật nói: đất, nước, gió, lửa, tánh nó vắng lặng thường còn, viên dung khắp giáp pháp giới. Bạch Thế Tôn, nếu nước khắp tất cả, thì lửa phải tắt; còn lửa biến khắp thời nước phải khô; tánh lửa thì nóng, tánh nước lại lạnh, hai thứ trái nhau, tại sao đồng cùng khắp cả hư không, mà nó không diệt nhau? Lại nữa, đất thì có hình chất, còn hư không lại trống, tại sao hai thứ đều khắp giáp cả pháp giới, mà không có chướng ngại nhau? Cúi xin đức Như Lai vén mở ngút mây mờ cho chúng con.</p>
      <p>Thưa hỏi xong, ông Phú Lâu Na kính cẩn trở lui, để chờ nghe lời Phật chỉ dạy.</p>

      <section id="luoc-giai-1">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đoạn này ông Phú Lâu Na hỏi Phật hai điều: Chân tâm đã thanh tịnh tại sao thoạt sinh ra có thế giới và chúng sinh? Đất, nước, gió, lửa, tánh nó chống trái nhau, tại sao lại dung hòa được và biến khắp cả pháp giới?</p>
        <p>Về câu hỏi trước thì trong kinh này Phật đã trả lời rõ rồi. Còn về câu hỏi sau chúng ta cũng nên phân biệt cho rõ: Phật nói nước, lửa v.v... biến khắp cả pháp giới, đó là Phật chỉ về phần bản thể mà nói. Ông Phú Lâu Na nghi nước, lửa v.v... trái nhau, làm sao đều biến khắp được. Thế là ông Phú Lâu Na đứng về phần hiện tượng mà hỏi.</p>
        <p>Về phần hiện tượng thì có chướng ngại, còn bản thể thời không bao giờ chướng ngại.</p>
      </section>
    </section>

    <section id="ii-phat-tra-loi-cau-hoi-thu-nhat">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. PHẬT TRẢ LỜI CÂU HỎI THỨ NHẤT</h3>
      <p>Phật dạy: Này Phú Lâu Na, như lời ông hỏi: Chân tâm đã vốn thanh tịnh, tại sao lại sinh ra sơn hà đại địa, thế giới và chúng sinh. Vậy ông có thường nghe ta nói: Chân tâm nhiệm mầu vắng lặng mà thường sáng suốt chiếu soi không?</p>
      <p>Phú Lâu Na thưa: Bạch Thế Tôn, con có thường nghe Phật dạy như thế.</p>
      <p>Phật hỏi: Vậy chân tâm này, ông cho nó tự có tánh sáng suốt chiếu soi (phân biệt) hay là không có sáng suốt chiếu soi?</p>
      <p>Phú Lâu Na thưa: Vì nó sẵn có tánh sáng suốt chiếu soi (phân biệt) nên mới gọi là tâm. Nếu nó không có tánh sáng suốt chiếu soi (phân biệt) thì không gọi là tâm, vì nó không phân biệt được cái gì cả.</p>
      <p>Phật dạy: Như lời ông nói: nếu nó không sáng suốt chiếu soi (phân biệt) thì không phải là tâm, vì nó không phân biệt được cái gì cả. Vậy ông có hiểu chăng: nếu có chiếu soi phân biệt, thì không phải là chân (vì có năng phân biệt thì phải có sở phân biệt), còn không có chiếu soi phân biệt, thì chẳng phải là tâm. Nếu tâm mà không sáng suốt thì không phải là chân tâm thanh tịnh rồi.</p>
      <p>Ông nên hiểu: Chân tâm vẫn sáng suốt, vì ông vọng chấp cái sáng suốt phân biệt làm tâm, nên thành ra có năng phân biệt (tâm) và sở phân biệt (cảnh).</p>
      <p>Chân tâm của ông không phải cái sở phân biệt, nhưng vì ông khởi ra cái năng phân biệt, nên nó (chân tâm) trở lại thành cái sở phân biệt (cảnh). Đã vọng thành cái sở phân biệt, cố nhiên ở nơi ông phải vọng sinh ra cái năng phân biệt.</p>
      <p>Thế là ở nơi chân tâm của ông vẫn thanh tịnh không có năng và sở, mà thoạt nhiên thành ra có năng và sở.</p>

      <section id="luoc-giai-2">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đại ý đoạn này Phật chỉ cái nguyên nhân từ chân tâm thanh tịnh, vì vọng động nổi lên nên sinh ra có thế giới và chúng sinh.</p>
        <p>Chân tâm thanh tịnh mỗi người đều sẵn đủ. Nếu chấp nó không có phân biệt thì chẳng phải là tâm; còn chấp nó có phân biệt thì chẳng phải là chân.</p>
        <p>Bởi ông Phú Lâu Na chấp cái phân biệt chiếu soi làm tâm, nên đã có cái phân biệt, cố nhiên phải có cái sở phân biệt. Thế là năng, sở vừa hiện, thì bỉ và thử rõ ràng.</p>
        <p>Đây là Phật chỉ cái hành tướng của vọng, từ nơi tâm của mọi người khởi lên một cách rõ ràng. Một vọng niệm vừa nổi lên, thì có trăm ngàn vọng niệm khác tiếp tục theo sinh ra, cho đến vô cùng tận. Nhân đó mà có hư không, thế giới và chúng sinh đồng thời hiện ra.</p>
      </section>
    </section>

    <section id="iii-nguyen-nhan-chung-sinh-ra-hu-khong-the-gioi-va-chung-sinh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. PHẬT CHỈ NGUYÊN NHÂN CHUNG SINH RA HƯ KHÔNG, THẾ GIỚI VÀ CHÚNG SINH</h3>
      <p>Từ một thể chân tâm không khác, vì vọng niệm phân biệt, có năng sở, bỉ thử sai khác, nên hiện ra có hư không và thế giới. Nhân có hư không thế giới nên mới có chúng sinh. Đã có thế giới và chúng sinh lăng xăng đối đãi nhau, nên khởi lên vô số vọng tưởng phân biệt: tốt, xấu, phải, trái v.v... Vì thế mà sinh ra đủ các phiền não trần lao nhiễm ô. Cái có hình tướng và sinh diệt là thế giới, cái không hình tướng và yên tịnh là hư không; khác với hư không, thế giới là chúng sinh vậy.</p>
    </section>

    <section id="iv-nguyen-nhan-rieng-va-tuan-tu-sinh-ra-vu-tru">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. PHẬT CHỈ NGUYÊN NHÂN RIÊNG VÀ TUẦN TỰ SINH RA VŨ TRỤ</h3>

      <section id="nguyen-nhan-sinh-gio">
        <h4 class="text-lg font-semibold">NGUYÊN NHÂN SINH GIÓ</h4>
        <p>Từ nơi chân tâm, do vô minh vọng động mà có hư không. Hư không mờ mịt vì vô minh sinh. Trong hư không có chất động, vì là vọng. Bởi thế nên trong hư không có gió (phong luân) để duy trì thế giới.</p>
      </section>

      <section id="nguyen-nhan-sinh-vang-ngoc">
        <h4 class="text-lg font-semibold">NGUYÊN NHÂN SINH RA VÀNG NGỌC</h4>
        <p>Nhân hư không sinh ra gió, và vì nơi tâm chúng sinh có tánh cố chấp phân biệt, cho nên ứng hiện ra ngoài thế giới có những chất cứng chắc là vàng ngọc. Đây là nguyên nhân có chất kim khí để bảo trì thế giới.</p>
      </section>

      <section id="nguyen-nhan-sinh-lua">
        <h4 class="text-lg font-semibold">NGUYÊN NHÂN SINH RA LỬA</h4>
        <p>Trong tâm chúng sinh vì có tánh cố chấp phân biệt nên sinh ra chất cứng chắc là kim khí, và vì có vọng động mà thành ra gió. Rồi gió thổi kim khí, nó cọ xát mãi, nóng lên, nên nháng sinh ra ánh sáng là lửa. Đây là cái nguyên nhân có lửa để nấu đốt các vật.</p>
      </section>

      <section id="nguyen-nhan-sinh-nuoc">
        <h4 class="text-lg font-semibold">NGUYÊN NHÂN SINH RA NƯỚC</h4>
        <p>Chất vàng ngọc vừa sáng ngời và đượm mát. Nhân lửa xông lên, nên có hơi nước rịn ra. Đây là cái nguyên nhân có nước để bao bọc cả mười phương thế giới.</p>
      </section>

      <section id="luoc-giai-4a">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Vì tâm vọng động nên biến hiện ra ngoài thế giới có gió. Vì tâm cố chấp, cho nên biến hiện ra ngoài thế giới có vàng ngọc. Vì tâm nóng nảy, nên biến hiện ra ngoài thế giới có lửa. Vì tâm tham ái, cho nên biến hiện ra ngoài thế giới có nước.</p>
      </section>

      <section id="nguyen-nhan-sinh-con-dao-va-bien">
        <h4 class="text-lg font-semibold">NGUYÊN NHÂN SINH RA CỒN ĐẢO VÀ BIỂN</h4>
        <p>Vì tánh lửa bốc lên, còn nước thì lại chảy xuống, nên có chỗ thấp ướt là sông biển, chỗ nổi lên cao là cồn đảo. Bởi lửa và nước dung hòa nhau, cho nên trong biển thỉnh thoảng bốc lên ánh sáng của lửa, trong cồn đảo lại có sông rạch thường chảy ra nước.</p>
      </section>

      <section id="luoc-giai-4b">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Vì tâm luyến ái nên ứng hiện ra ngoài thành sông biển. Vì tâm cố chấp nên ứng hiện ra ngoài thành cồn đảo; tâm khinh mạn thành ra gió, tâm nóng nảy, sân hận thành lửa. Tóm lại, bốn đại đều duy tâm biến hiện.</p>
      </section>

      <section id="nguyen-nhan-sinh-nui">
        <h4 class="text-lg font-semibold">NGUYÊN NHÂN SINH RA NÚI</h4>
        <p>Vì thế lực của nước yếu hơn lửa, nên bị lửa bốc lên kết thành núi cao. Bởi thế nên đập đá thì có lửa, còn đốt quá nóng, thì nó chảy ra nước.</p>
      </section>

      <section id="luoc-giai-4c">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Vì tâm giận nhiều thương ít, nên ứng hiện ra ngoài thế giới có núi cao.</p>
      </section>

      <section id="nguyen-nhan-sinh-co-cay">
        <h4 class="text-lg font-semibold">NGUYÊN NHÂN SINH RA CỎ CÂY</h4>
        <p>Vì thế lực của đất yếu hơn nước, cho nên bị nước rút lên làm cỏ cây. Bởi thế nên cỏ cây, nếu bị đốt thì thành tro (đất) còn ép thì nó lại ra nước.</p>
      </section>

      <section id="luoc-giai-4d">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Vì tâm thương yêu nặng nề, tánh cố chấp ít, nên ứng hiện ra ngoài thế giới thành cỏ cây. Tóm lại, vì ở trong tâm chúng sinh, các vọng tưởng xen nhau phát sinh, nên ứng hiện ra ngoài thế giới có các cảnh vật. Bởi nhân duyên này mà thế giới nối nhau sinh mãi không dứt.</p>
      </section>
    </section>

    <section id="v-nguyen-nhan-co-chung-sinh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. PHẬT CHỈ NGUYÊN NHÂN CÓ CHÚNG SINH (NHÂN SINH)</h3>
      <p>Ông Phú Lâu Na, cái hư vọng phân biệt đó không có gì lạ, chỉ vì ông chấp cái phân biệt chiếu soi làm tâm. Đã có phân biệt, tất nhiên phải có cái sở phân biệt đối đãi nhau. Vì thế nên cái năng phân biệt không vượt ngoài cảnh sở phân biệt được. Do nhân duyên này, nên nghe không ngoài tiếng, thấy không ngoài sắc, ngửi không ngoài mùi, nếm không ngoài vị v.v... vọng thành 6 căn và 6 trần đối nhau, nên phân ra có thấy, nghe, hay, biết.</p>
      <p>Rồi theo nghiệp lực kéo dẫn, cho nên có những loài sinh con (như người và thú), loài sinh trứng (như chim và cá), loài sinh chỗ ẩm ướt (như vi trùng v.v...), loài hóa sinh (như trời và địa ngục).</p>
      <p>Thần thức khi đầu thai, nhân thấy ánh sáng (lửa dục) của cha mẹ phát ra, rồi nó khởi ra cái tưởng chung chạ làm việc dục ấy. Nếu nó sẽ là trai thì ưa mẹ mà ghét cha, còn nó sẽ là gái thì thương cha mà ghét mẹ. Vì tình lưu luyến nơi ái dục không rời được, nên nó tự kết nạp tư tưởng của nó với tinh huyết của cha mẹ khi giao cấu đó, kết thành ra thai.</p>
      <p>Loài sinh trứng là do nơi tưởng nhiều, loài sinh thai là do nơi tình nặng, loài thấp sinh là do hiệp với chỗ ẩm thấp, loài hóa sinh thì rời cảnh vật tự nó hóa hiện. Bốn loài biến đổi, tùy theo nghiệp lành hay dữ mà cảm thọ quả báo có thăng và trầm. Do nhân duyên ấy mà chúng sinh bỏ thân này thọ thân kia, nối nhau không dứt.</p>
    </section>

    <section id="vi-nguyen-nhan-chung-sinh-tiep-tuc-sinh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. PHẬT CHỈ NGUYÊN NHÂN CHÚNG SINH TIẾP TỤC SINH</h3>
      <p><strong>Tham dục:</strong> Chúng sinh vì tình ân ái kết chặt, thương tưởng quyến luyến nhau không rời, cho nên trong thế gian, cha mẹ, con cháu tiếp tục sinh ra không cùng tột, gốc tại lòng tham dục vậy.</p>
      <p><strong>Tham sát:</strong> Loài nào cũng thương yêu thân mạng, muốn cho mình được sống nên tham ăn những vật bổ dưỡng. Vì thế mà trong thế gian này, loài mạnh ăn thịt loài yếu, loài khôn giết loài dại. Bốn loài ăn nuốt lẫn nhau, gốc tại lòng tham sát hại.</p>
      <p><strong>Tham trộm cướp:</strong> Bởi loài người ăn thịt loài vật, loài vật trở lại ăn thịt người. Người chết làm vật, vật chết làm người, các loài chúng sinh, sinh sinh tử tử, nối tiếp nhau. Các ác nghiệp đã tạo ra rồi, thì cùng nhau vay trả, cho đến nghìn đời không tột, gốc tại lòng tham lam trộm cướp.</p>

      <section id="luoc-giai-6">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Loài này cướp giựt thân mạng loài kia, loài kia giết hại loài này; trả vay, vay trả lẫn nhau, đến trăm ngàn kiếp không ra khỏi sinh tử. Trai mê sắc gái, gái thương tình trai, vì tình ân ái thương yêu lẫn nhau, nên trăm ngàn kiếp bị phiền trược trong vòng luân hồi.</p>
        <p>Tóm lại, vì ba nghiệp sát, đạo, dâm làm gốc, nên nghiệp (nhân) và quả nối nhau, không bao giờ cùng tận.</p>
      </section>

      <p>Này ông Phú Lâu Na, thế giới, chúng sinh và nghiệp quả ba món điên đảo tương tục này đều ở trong chân tâm, vì vô minh vọng động sinh ra năng phân biệt và sở phân biệt tương đối, nên vọng thấy có sơn hà đại địa, thế giới và chúng sinh, rồi tiếp tục sinh hóa, vô cùng hư vọng.</p>
    </section>

    <section id="vii-phu-lau-na-hoi-tiep">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. PHÚ LÂU NA HỎI TIẾP: CHƯ PHẬT ĐÃ CHỨNG ĐƯỢC CHÂN TÂM THANH TỊNH RỒI, VẬY CHỪNG NÀO NỔI VỌNG TRỞ LẠI</h3>
      <p>Ông Phú Lâu Na hỏi Phật: Bạch Thế Tôn, cái chân tâm của con đã cùng với Phật không khác, vốn thanh tịnh không tăng không giảm; bỗng nhiên vọng động nổi lên, sinh ra thế giới và chúng sinh. Vậy các đức Như Lai đã chứng được chân tâm ấy rồi, chừng nào vô minh vọng động nổi lên, sinh trở lại thế giới và chúng sinh nữa?</p>
    </section>

    <section id="viii-phat-dung-ba-thi-du-de-giai-thich">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII. PHẬT DÙNG BA THÍ DỤ ĐỂ GIẢI THÍCH</h3>

      <section id="du-nguoi-lam-phuong-huong">
        <h4 class="text-lg font-semibold">1. DỤ NHƯ NGƯỜI LẦM PHƯƠNG HƯỚNG</h4>
        <p>Phật dạy rằng: Này Phú Lâu Na, như người lầm phương hướng, tưởng phía Nam là phía Bắc. Cái mê lầm ấy không phải nhân ngộ mà có, cũng không phải nhân mê mà sinh. Vì mê không có căn nguyên. Người kia đương lúc đi lầm đường, nếu có người biết đường chỉ lại cho họ, thì từ đó về sau họ không còn lầm lộn nữa.</p>
        <p>Phật dạy: Mười phương các đức Như Lai cũng vậy, khi ngộ được chân tâm thành Phật rồi, thì không bao giờ mê trở lại làm chúng sinh nữa.</p>
      </section>

      <section id="du-hoa-dom-giua-hu-khong">
        <h4 class="text-lg font-semibold">2. DỤ NHƯ HOA ĐỐM GIỮA HƯ KHÔNG</h4>
        <p>Cũng như người bị nhặm con mắt, thấy có đốm hoa lăng xăng giữa hư không. Đến khi hết nhặm rồi thì hoa kia tự hết. Nếu người ấy còn nhìn lại chỗ các hoa đốm diệt ở nơi hư không để trông mong cho hoa sinh trở lại, thì thật là điên đảo.</p>
        <p>Phật nói: Ông đã hiểu như vậy, tại sao còn hỏi: Như Lai đã ngộ được chân tâm thanh tịnh rồi, vậy chừng nào nổi vọng trở lại?</p>
      </section>

      <section id="du-vang-va-cui">
        <h4 class="text-lg font-semibold">3. DỤ NHƯ VÀNG VÀ CỦI</h4>
        <p>Cũng như vàng trong mỏ, khi đào lên đã lọc hết khoáng thành vàng ròng rồi, lúc bấy giờ không còn trở lại làm khoáng nữa. Và cũng như cây đốt thành tro, không thể trở lại thành cây nữa được.</p>
        <p>Chư Phật cũng thế, khi chứng được Bồ đề Niết bàn rồi, không còn vọng động trở lại làm chúng sinh nữa.</p>
      </section>
    </section>

    <section id="ix-phat-tra-loi-cau-hoi-thu-hai">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX. PHẬT TRẢ LỜI CÂU HỎI THỨ HAI</h3>
      <p>Phật nói: Phú Lâu Na, như lời ông hỏi: nước và lửa tại sao chẳng diệt nhau, trái lại được dung hòa cùng nhau và đều biến khắp cả vũ trụ? Hư không với đất tánh chất không đồng, tại sao dung biến được?</p>
      <p>Này Phú Lâu Na, tất cả các pháp xem về tướng (hiện tượng) của nó, nguyên là hư vọng, không thể chỉ bày cái gì thật là cái gì được. Nó đã hư vọng không thật mà ông lại còn hỏi tại sao nó chẳng diệt nhau. Như thế chẳng khác nào người ngồi trông đợi cho cái hoa đốm giữa hư không kia kết đậu thành ra trái.</p>

      <section id="luoc-giai-9">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Xem về tánh (bản thể) của các pháp, thì nguyên nó là chân. Duy có một thể chân tâm, nguyên không phải đất, nước, gió, lửa, thì sao lại chẳng dung hòa nhau được.</p>
      </section>
    </section>

    <section id="x-chan-tam-tuy-duyen-bien-hien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">X. PHẬT CHỈ CHÂN TÂM TÙY DUYÊN BIẾN HIỆN</h3>
      <p>Phú Lâu Na, chân tâm của ông như thế, nếu ông phân biệt hư không thì có hư không hiện ra, phân biệt đất, nước, gió, lửa, thì đều có đất, nước, gió, lửa hiện ra.</p>
      <p>Cũng như hai người đồng xem một mặt trăng dưới nước. Rồi một người đi qua phía đông và một người đi qua phía tây, thì hai người đều thấy có mặt trăng đi theo mình cả, không có chuẩn định. Ông không thể hỏi: mặt trăng chỉ một, tại sao đi theo cả hai người; hay là nói hai người đi riêng đều thấy có hai mặt trăng, tại sao hiện nay chỉ thấy có một.</p>
      <p>Phú Lâu Na, ông nên biết: Vì các pháp hư huyễn, không thể lấy đâu làm bằng cớ được.</p>
    </section>

    <section id="xi-chung-sinh-trai-chan-tam-hiep-vong-tran">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XI. CHÚNG SINH TRÁI VỚI CHÂN TÂM SÁNG SUỐT VÀ HIỆP THEO VỌNG TRẦN</h3>
      <p>Phú Lâu Na, các ông vì trái với chân tâm sáng suốt, mê muội hiệp theo vọng trần, nên chân tâm tùy duyên biến hiện ra có hư không thế giới, các thứ trần lao trong thế gian, cùng khắp cả pháp giới. Vì thế nên ông thấy có gió động, hư không lặng, mặt nhật sáng, mây mờ, sắc tướng và hư không lấn nhau, nước và lửa diệt nhau v.v...</p>
    </section>

    <section id="xii-phat-hiep-voi-chan-tam-sang-suot">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XII. PHẬT HIỆP VỚI CHÂN TÂM SÁNG SUỐT</h3>
      <p>Còn ta (Phật) thì trái với vọng trần, hiệp với chân tâm thường trụ bất sinh bất diệt, biến khắp cả pháp giới. Cho nên ta mới được tự tại vô ngại: ở trong một hiện ra vô lượng, vô lượng hiệp làm một, trong nhỏ hiện lớn, trong lớn hiện nhỏ; không rời nơi đạo tràng mà hiện khắp cả mười phương thế giới. Thân ta bao trùm mười phương hư không vô tận. Trên đầu một mảy lông hiện ra các cõi nước; ngồi trong hạt bụi, mà chuyển đại pháp luân.</p>
      <p>Vì ta diệt hết vọng trần, trở lại với bản tâm thanh tịnh sáng suốt, nên mới được như vậy.</p>

      <section id="luoc-giai-12">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Vì Phật đã ngộ chân tâm thanh tịnh, nên mới được tự tại vô ngại, không còn bị các vật lớn, nhỏ, nhiều, ít v.v... làm chướng ngại. Trái lại, chúng sinh vì mê chân tâm, hiệp theo vọng trần nên thấy có các vật lớn, nhỏ, rộng, hẹp chướng ngại.</p>
        <p>Bởi tâm có chướng ngại (vọng phân biệt) nên thấy ngoài trần cảnh có chướng ngại. Nếu trong tâm hết chướng ngại (không vọng) thì không còn thấy có một vật gì làm chướng ngại cả.</p>
      </section>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo lời Phật dạy ông Phú Lâu Na, tại sao từ chân tâm thanh tịnh lại thoạt nhiên sinh ra sơn hà đại địa và chúng sinh?',
    options: {
      a: 'Do các đại (đất, nước, gió, lửa) tự tương tác với nhau trong hư không.',
      b: 'Do nghiệp lực của chúng sinh từ vô thủy kiếp tích tụ lại.',
      c: 'Do ý muốn sáng tạo của chư Phật để cứu độ chúng sinh.',
      d: 'Do một niệm vọng động khởi lên sự phân biệt năng và sở.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Các đại biến hiện ra ngoài là do duy tâm biến hiện, không phải do chúng tự tương tác.',
      b: 'Sai. Nghiệp lực là nhân duyên khiến chúng sinh thọ quả báo và luân hồi, không phải nguồn gốc đầu tiên sinh ra vũ trụ từ chân tâm.',
      c: 'Sai. Chư Phật đã trở lại với bản tâm thanh tịnh, không có ý muốn sáng tạo vọng trần.',
      d: 'Đúng. Nguyên nhân là từ chân tâm thanh tịnh, vì vọng động nổi lên nên sinh ra thế giới và chúng sinh, dẫn đến sự phân biệt năng và sở.',
    },
  },
  {
    question: 'Tại sao các đại như nước và lửa có tính chất trái ngược nhau nhưng vẫn có thể cùng biến khắp pháp giới mà không tiêu diệt nhau?',
    options: {
      a: 'Vì nhờ có hư không làm môi trường trung gian hòa giải.',
      b: 'Vì chúng nằm ở những không gian và thời gian khác nhau.',
      c: 'Vì xét về mặt hiện tượng, chúng có sự ngăn ngại nhưng xét về bản thể thì không.',
      d: 'Vì sức mạnh của các đại này luôn ở trạng thái cân bằng tuyệt đối.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Văn bản không đề cập đến việc hư không làm môi trường trung gian hòa giải.',
      b: 'Sai. Nước và lửa được miêu tả là đồng cùng khắp cả hư không.',
      c: 'Đúng. Đứng về phần hiện tượng thì có chướng ngại, nhưng xét về phần bản thể thì không bao giờ chướng ngại.',
      d: 'Sai. Không có thông tin nào trong văn bản đề cập đến sức mạnh cân bằng tuyệt đối.',
    },
  },
  {
    question: 'Theo sơ đồ tiến trình hình thành vũ trụ trong văn bản, gió (phong luân) được sinh ra từ đâu?',
    options: {
      a: 'Từ tâm tham ái của chúng sinh đối với cảnh trần.',
      b: 'Từ sự cọ xát giữa các chất cứng và hơi nước.',
      c: 'Từ sự nguội đi của các khối vật chất nóng bỏng.',
      d: 'Từ sự chuyển động của các vọng niệm trong hư không mờ mịt.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tâm luyến ái sinh ra sông biển, không phải sinh ra gió.',
      b: 'Sai. Sự cọ xát của gió thổi kim khí nóng lên mới sinh ra lửa.',
      c: 'Sai. Văn bản không nói về sự nguội đi của khối vật chất nóng bỏng.',
      d: 'Đúng. Từ nơi chân tâm, do vô minh vọng động mà có hư không, trong hư không có chất động vì là vọng, từ đó sinh ra gió.',
    },
  },
  {
    question: 'Tâm lý nào của chúng sinh được cho là nguyên nhân ứng hiện ra các chất cứng chắc như vàng ngọc trong thế giới?',
    options: {
      a: 'Tánh cố chấp phân biệt.',
      b: 'Tánh nóng nảy và giận dữ.',
      c: 'Tánh tham lam muốn sở hữu vật chất.',
      d: 'Tánh kiêu mạn và coi thường người khác.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Vì nơi tâm chúng sinh có tánh cố chấp phân biệt, cho nên ứng hiện ra ngoài thế giới có những chất cứng chắc là vàng ngọc.',
      b: 'Sai. Tâm nóng nảy ứng hiện ra lửa.',
      c: 'Sai. Tâm tham ái biến hiện ra nước.',
      d: 'Sai. Tâm khinh mạn biến thành ra gió.',
    },
  },
  {
    question: 'Tại sao trong biển thỉnh thoảng lại bốc lên ánh sáng của lửa và trong cồn đảo lại có sông rạch chảy nước?',
    options: {
      a: 'Vì đó là quy luật chuyển hóa năng lượng của vũ trụ.',
      b: 'Vì nước và lửa luôn dung hòa và nằm trong nhau do sự xen kẽ của các vọng tưởng.',
      c: 'Vì các đại tự tiêu diệt lẫn nhau tạo ra các hiện tượng lạ.',
      d: 'Vì dưới đáy biển có các núi lửa hoạt động và trên đảo có mưa.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đây là do bốn đại đều duy tâm biến hiện, không phải quy luật vật lý.',
      b: 'Đúng. Bởi lửa và nước dung hòa nhau nên trong biển có lửa, trong cồn đảo có nước; nguyên nhân là do trong tâm chúng sinh các vọng tưởng xen nhau phát sinh.',
      c: 'Sai. Văn bản nói rằng duy có một thể chân tâm nên chúng dung hòa, không tiêu diệt lẫn nhau.',
      d: 'Sai. Đây là cách lý giải khoa học thông thường, không phản ánh quan điểm duy tâm của văn bản.',
    },
  },
  {
    question: 'Văn bản giải thích thế nào về sự hình thành của loài sinh trứng (noãn sinh)?',
    options: {
      a: 'Do sự kết hợp ngẫu nhiên của các yếu tố ẩm ướt.',
      b: 'Do tình cảm (tình) luyến ái quá nặng nề.',
      c: 'Do nghiệp sát sinh từ nhiều kiếp trước.',
      d: 'Do tư tưởng (tưởng) của chúng sinh đó quá nhiều.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Loài thấp sinh mới là do hiệp với chỗ ẩm thấp.',
      b: 'Sai. Loài sinh thai là do nơi tình nặng.',
      c: 'Sai. Nghiệp sát sinh giải thích sự ăn nuốt, vay trả lẫn nhau, không phải nguyên nhân đặc thù sinh ra trứng.',
      d: 'Đúng. Văn bản khẳng định rõ loài sinh trứng là do nơi tưởng nhiều.',
    },
  },
  {
    question: 'Ba nghiệp gốc nào khiến cho chúng sinh và nghiệp quả tương tục, vay trả không ngừng trong luân hồi?',
    options: {
      a: 'Tham, Sân, Si.',
      b: 'Kiêu mạn, Nghi ngờ, Ác kiến.',
      c: 'Vọng ngôn, Ỷ ngữ, Ác khẩu.',
      d: 'Sát (giết hại), Đạo (trộm cướp), Dâm (tham dục).',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tham, sân, si là cội nguồn chung của phiền não, nhưng văn bản chỉ đích danh 3 nghiệp khác trong bối cảnh sinh tử tương tục.',
      b: 'Sai. Đây không phải là ba nghiệp gốc được nêu trong đoạn văn bản.',
      c: 'Sai. Đây là các ác nghiệp về lời nói, không được nhắc đến ở đây.',
      d: 'Đúng. Vì ba nghiệp sát, đạo, dâm làm gốc, nên nghiệp và quả nối nhau, không bao giờ cùng tận.',
    },
  },
  {
    question: 'Phật dùng thí dụ vàng và quặng để giải thích điều gì cho ông Phú Lâu Na?',
    options: {
      a: 'Chân tâm và vô minh luôn tồn tại song hành như vàng và đá.',
      b: 'Mọi chúng sinh đều có Phật tánh tiềm ẩn như vàng trong quặng.',
      c: 'Khi đã tu chứng thành Phật (vàng ròng) thì không bao giờ trở lại làm chúng sinh (quặng) nữa.',
      d: 'Quá trình tu hành gian khổ như việc đào mỏ và lọc vàng.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Thí dụ không nói về sự tồn tại song hành của vô minh và chân tâm.',
      b: 'Sai. Mục đích chính của Phật khi dùng dụ này là để nói về việc không mê lầm trở lại.',
      c: 'Đúng. Như vàng trong mỏ khi được lọc thành vàng ròng thì không trở lại làm khoáng, chư Phật khi chứng Niết bàn cũng không còn vọng động trở lại làm chúng sinh.',
      d: 'Sai. Thí dụ không được dùng để nhấn mạnh sự gian khổ.',
    },
  },
  {
    question: 'Điểm khác biệt cốt yếu giữa chúng sinh và chư Phật đối với chân tâm là gì?',
    options: {
      a: 'Chúng sinh bị kẹt trong thời gian, còn Phật đứng ngoài thời gian.',
      b: 'Chúng sinh đi ngược chân tâm để hiệp theo vọng trần, Phật trái với vọng trần để hiệp theo chân tâm.',
      c: 'Chúng sinh có ít chân tâm hơn, còn Phật có chân tâm trọn vẹn.',
      d: 'Chúng sinh phải chịu khổ đau, còn Phật thì luôn hưởng lạc thú.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Văn bản không đề cập đến yếu tố thời gian ở đây.',
      b: 'Đúng. Chúng sinh trái với chân tâm sáng suốt, hiệp theo vọng trần; còn Phật thì trái với vọng trần, hiệp với chân tâm thường trụ.',
      c: 'Sai. Chân tâm thanh tịnh mỗi người đều sẵn đủ như nhau.',
      d: 'Sai. Khổ đau và lạc thú không phải là điểm khác biệt cốt yếu về chân tâm được đề cập trong bài.',
    },
  },
  {
    question: 'Thí dụ về hai người cùng xem mặt trăng dưới nước nhằm minh họa cho tính chất nào của các pháp?',
    options: {
      a: 'Tầm quan trọng của việc quan sát thực tế khách quan.',
      b: 'Tính chất duy nhất và bất biến của chân lý.',
      c: 'Sự tranh chấp giữa các quan kiến khác nhau của chúng sinh.',
      d: 'Tính chất hư huyễn, tùy duyên biến hiện của các pháp mà không có chuẩn định thật thể.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Thí dụ này không nhằm khuyến khích quan sát khách quan.',
      b: 'Sai. Nó minh họa sự không chuẩn định chứ không phải duy nhất bất biến.',
      c: 'Sai. Không có sự tranh chấp quan kiến nào trong thí dụ này.',
      d: 'Đúng. Khi hai người đi hai hướng đều thấy trăng đi theo, chứng tỏ các pháp hư huyễn tùy duyên biến hiện, không thể lấy đâu làm bằng cớ chuẩn định.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-8-ong-phu-lau-na-hoi-phat-hai-cau-quan-trong',
  slug: 'bai-thu-8-ong-phu-lau-na-hoi-phat-hai-cau-quan-trong',
  title: 'Bài Thứ 8 - Ông Phú Lâu Na hỏi Phật hai câu quan trọng',
  type: 'article',
  status: 'published',
  order: 9,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-8-ong-phu-lau-na-hoi-phat-hai-cau-quan-trong/V%C5%A9_tr%E1%BB%A5_v%C3%A0_gi%C3%A1c_ng%E1%BB%99.png',
      readingContent,
      tableOfContents: [
        { id: 'i-ong-phu-lau-na-hoi-phat-hai-cau-quan-trong', label: 'I. Ông Phú Lâu Na hỏi Phật hai câu quan trọng' },
        { id: 'luoc-giai-1', label: 'Lược giải', indent: 1 },
        { id: 'ii-phat-tra-loi-cau-hoi-thu-nhat', label: 'II. Phật trả lời câu hỏi thứ nhất' },
        { id: 'luoc-giai-2', label: 'Lược giải', indent: 1 },
        { id: 'iii-nguyen-nhan-chung-sinh-ra-hu-khong-the-gioi-va-chung-sinh', label: 'III. Nguyên nhân chung sinh ra hư không, thế giới và chúng sinh' },
        { id: 'iv-nguyen-nhan-rieng-va-tuan-tu-sinh-ra-vu-tru', label: 'IV. Nguyên nhân riêng và tuần tự sinh ra vũ trụ' },
        { id: 'nguyen-nhan-sinh-gio', label: 'Nguyên nhân sinh gió', indent: 1 },
        { id: 'nguyen-nhan-sinh-vang-ngoc', label: 'Nguyên nhân sinh vàng ngọc', indent: 1 },
        { id: 'nguyen-nhan-sinh-lua', label: 'Nguyên nhân sinh lửa', indent: 1 },
        { id: 'nguyen-nhan-sinh-nuoc', label: 'Nguyên nhân sinh nước', indent: 1 },
        { id: 'luoc-giai-4a', label: 'Lược giải', indent: 1 },
        { id: 'nguyen-nhan-sinh-con-dao-va-bien', label: 'Nguyên nhân sinh cồn đảo và biển', indent: 1 },
        { id: 'luoc-giai-4b', label: 'Lược giải', indent: 1 },
        { id: 'nguyen-nhan-sinh-nui', label: 'Nguyên nhân sinh núi', indent: 1 },
        { id: 'luoc-giai-4c', label: 'Lược giải', indent: 1 },
        { id: 'nguyen-nhan-sinh-co-cay', label: 'Nguyên nhân sinh cỏ cây', indent: 1 },
        { id: 'luoc-giai-4d', label: 'Lược giải', indent: 1 },
        { id: 'v-nguyen-nhan-co-chung-sinh', label: 'V. Nguyên nhân có chúng sinh' },
        { id: 'vi-nguyen-nhan-chung-sinh-tiep-tuc-sinh', label: 'VI. Nguyên nhân chúng sinh tiếp tục sinh' },
        { id: 'luoc-giai-6', label: 'Lược giải', indent: 1 },
        { id: 'vii-phu-lau-na-hoi-tiep', label: 'VII. Phú Lâu Na hỏi tiếp' },
        { id: 'viii-phat-dung-ba-thi-du-de-giai-thich', label: 'VIII. Phật dùng ba thí dụ để giải thích' },
        { id: 'du-nguoi-lam-phuong-huong', label: 'Dụ người lầm phương hướng', indent: 1 },
        { id: 'du-hoa-dom-giua-hu-khong', label: 'Dụ hoa đốm giữa hư không', indent: 1 },
        { id: 'du-vang-va-cui', label: 'Dụ vàng và củi', indent: 1 },
        { id: 'ix-phat-tra-loi-cau-hoi-thu-hai', label: 'IX. Phật trả lời câu hỏi thứ hai' },
        { id: 'luoc-giai-9', label: 'Lược giải', indent: 1 },
        { id: 'x-chan-tam-tuy-duyen-bien-hien', label: 'X. Chân tâm tùy duyên biến hiện' },
        { id: 'xi-chung-sinh-trai-chan-tam-hiep-vong-tran', label: 'XI. Chúng sinh trái chân tâm, hiệp vọng trần' },
        { id: 'xii-phat-hiep-voi-chan-tam-sang-suot', label: 'XII. Phật hiệp với chân tâm sáng suốt' },
        { id: 'luoc-giai-12', label: 'Lược giải', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-8-ong-phu-lau-na-hoi-phat-hai-cau-quan-trong/Anatomy_of_Reality.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/5IaCIbu18Fk',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/75E77WtjCgDxBdOtzAeRLe?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Ông Phú Lâu Na hỏi Phật hai câu quan trọng',
    passPercentage: 70,
    questions,
  },
}

export default lesson
