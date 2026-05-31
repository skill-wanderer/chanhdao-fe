import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bai-thu-chin-phat-day-chon-tam-phi-tat-ca-tuong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ CHÍN</h2>

    <section id="i-phat-day-chon-tam-phi-tat-ca-tuong">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. PHẬT DẠY: CHƠN TÂM PHI TẤT CẢ TƯỚNG</h3>
      <p>Phật dạy: Chơn tâm này phi tâm (thức), phi đất, nước, gió, lửa và phi hư không.</p>
      <p>(Đoạn này nói: Chơn tâm phi ngũ uẩn. Thọ, tưởng, hành, thức thuộc về tâm; còn đất, nước, gió, lửa thuộc về sắc.)</p>
      <p>Nó phi nhãn, nhĩ, tỉ, thiệt, thân, ý; phi sắc, thinh, hương, vị, xúc, pháp; phi nhãn giới cho đến phi thức giới.</p>
      <p>(Đoạn này nói: Chơn tâm phi lục nhập, thập nhị xứ và thập bát giới. Tức là nói phi ấm, giới, nhập, phi cảnh giới lục phàm.)</p>
      <p>Chơn tâm phi minh, vô minh và minh vô minh tận, cho đến phi lão tử và phi lão tử tận.</p>
      <p>(Đoạn này nói: phi 12 nhơn duyên, cả lưu chuyển và hoàn diệt là cảnh giới của Duyên giác.)</p>
      <p>Phi khổ, tập, diệt, đạo; phi trí và phi đắc.</p>
      <p>(Đoạn này nói: phi tứ đế là cảnh giới của Thinh văn.)</p>
      <p>Phi bố thí, trì giới, tinh tấn, nhẫn nhục, thiền định và trí huệ.</p>
      <p>(Đoạn này nói: phi lục độ là cảnh giới của Bồ tát.)</p>
      <p>Cho đến phi Như Lai, Ứng Cúng, Chánh Biến Tri... (mười hiệu), phi Đại Niết Bàn và phi bốn đức của Niết Bàn: thường, lạc, ngã, tịnh.</p>
      <p>(Đoạn này nói: phi cảnh giới Phật. Từ Thinh văn, Duyên giác, Bồ tát và Phật gọi là tứ thánh).</p>
      <p>Tóm lại, chơn tâm phi tất cả các pháp thế gian (6 cõi phàm) và xuất thế gian (4 quả thánh) vậy.</p>

      <section id="luoc-giai-1">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đã là chơn tâm thì không còn vọng. Vì không còn vọng nên không có đối đãi: ngộ mê, thánh phàm, chúng sanh và Phật, hữu vi hay vô vi v.v... vì nó tuyệt tánh, ly tướng.</p>
      </section>
    </section>

    <section id="ii-phat-day-chon-tam-tuc-tat-ca-phap">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. PHẬT DẠY: CHƠN TÂM TỨC TẤT CẢ PHÁP</h3>
      <p>Phật dạy: Chơn tâm này, cũng tức tất cả pháp; tức là tâm; tức là đất, nước, gió, lửa và hư không; tức là nhãn, nhĩ, tỉ, thiệt, thân, ý; tức là sắc, thinh, hương, vị, xúc, pháp; tức là nhãn thức giới cho đến ý thức giới; tức Tứ đế; tức Thập nhị nhân duyên; tức là Lục độ; tức là Phật và bốn đức Niết Bàn. Nói tóm lại, chơn tâm tức là tất cả pháp thế gian và xuất thế gian.</p>

      <section id="luoc-giai-2">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Tâm đã sanh ra tất cả pháp, thì tâm là tất cả pháp. Cũng như bột đã làm ra các thứ bánh, thì bột đó tức là bánh.</p>
      </section>
    </section>

    <section id="iii-chon-tam-khong-the-noi-phi-va-tuc">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. ĐẾN MỘT TỪNG NỮA LÀ CHƠN TÂM KHÔNG THỂ NÓI &ldquo;PHI&rdquo; VÀ &ldquo;TỨC&rdquo;</h3>
      <p>Phú Lâu Na, cái chơn tâm này lại rời tất cả &ldquo;tức&rdquo; và &ldquo;phi&rdquo;, mà cũng là &ldquo;tức&rdquo; và &ldquo;phi tức&rdquo;.</p>
      <p>Chơn tâm như thế, thì từ kẻ phàm phu cho đến các vị thánh: Thinh văn, Duyên giác, làm sao lấy tâm trí suy nghĩ cho đến đạo vô thượng bồ đề của Như Lai, hay dùng lời nói luận bàn của thế gian mà ngộ nhập chỗ tri kiến của Phật cho được?</p>

      <section id="luoc-giai-3">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đây là chỗ tuyệt đối, không thể nói năng, suy nghĩ và kêu gọi là gì được. Túng cùng chỉ gọi &ldquo;Chơn tâm&rdquo; thôi. Bởi thế nên Phật đóng cửa thất tại nước Ma Kiệt; ông Duy Ma ngậm miệng ở thành Tỳ Gia, cũng vì lý đạo quá cao siêu và nhiệm mầu, nên không thể nói ra được vậy.</p>
      </section>
    </section>

    <section id="iv-phat-lay-cay-dan-de-ty-du">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. PHẬT LẤY CÂY ĐỜN ĐỂ TỶ DỤ</h3>
      <p>Tỷ dụ như cây đờn cầm hay đờn tỳ bà v.v... tuy sẵn có tiếng hay, nhưng phải nhờ ngón tay hay của người biết khảy (nhạc sĩ) mới có thể phát ra tiếng hay được.</p>

      <section id="luoc-giai-4">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Thí dụ này rõ ràng và thực tế lắm. Người đờn hay khảy ra tiếng hay, người đờn vừa khảy ra tiếng vừa, người đờn dở khảy tiếng dở, song đều có tiếng cả. Dụ như chơn tâm của chúng ta tùy duyên biến hiện các pháp; nếu khéo dùng thì hiện ra Phật, còn vừa vừa thì thành Bồ tát, Thinh văn, vụng lắm thì thành tam đồ lục đạo, đều có biến hiện cả.</p>
        <p>Ta cùng với các ông cũng đồng một bản thể chơn tâm thanh tịnh này và viên mãn khắp giáp tất cả. Song ta làm việc gì và lúc nào cũng đều chơn cả. Còn các ông tâm vừa móng lên, thì phiền não trần lao đã khởi trước.</p>
        <p>Bởi các ông không siêng năng cầu đạo vô thượng, chỉ ưa mến quả Tiểu thừa, mới vừa chứng được chút ít lại cho là đầy đủ.</p>
      </section>
    </section>

    <section id="v-ong-phu-lau-na-hoi-chon-tam-nhon-dau-co-vong">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. ÔNG PHÚ LÂU NA HỎI PHẬT: CHƠN TÂM NHƠN ĐÂU CÓ VỌNG</h3>
      <p>Ông Phú Lâu Na thưa: Bạch Thế Tôn, con cùng với Phật đã đồng một chơn tâm viên mãn không khác. Nhưng con bị vọng tưởng từ vô thỉ, nên nhiều kiếp phải chịu sanh tử luân hồi, nay tuy chứng đặng quả Thánh, mà chưa cứu cánh (còn ở về Tiểu thừa).</p>
      <p>Còn Đức Thế Tôn thì tất cả các vọng đã hoàn toàn diệt, Ngài đã chứng chơn tâm thường trụ rồi, được tự tại giải thoát. Vậy con xin kính hỏi Đức Thế Tôn: Tất cả chúng sanh vì sao có vọng, tự che lấy chơn tâm mà phải chịu trầm luân?</p>
    </section>

    <section id="vi-phat-day-da-la-vong-thi-khong-co-so-nhon">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. PHẬT DẠY: ĐÃ LÀ VỌNG THÌ KHÔNG CÓ SỞ NHƠN, NHƯ ÔNG DIỄN NHÃ ĐẠT ĐA</h3>
      <p>Phật dạy: Này Phú Lâu Na, ông tuy trừ nghi, mà các mê lầm chưa hết. Tôi nay dùng việc thực tế và hiện tiền trong thế gian để chỉ dạy ông: vừa rồi đây, ông có nghe câu chuyện chàng Diễn Nhã Đạt Đa tại thành Thất La Phiệt không? Một buổi sáng nọ chàng lấy gương soi mặt, thấy cái đầu trong gương (bóng) có mặt mày đáng thương. Chàng trở lại giận trách &ldquo;cái đầu thiệt của mình đây sao không thấy được mặt mày của mình; hay là ma quỷ?&rdquo;. Rồi bỗng nhiên chàng nổi cuồng vùng chạy... Theo ý ông, người này nhơn cái gì mà bỗng nhiên nổi cuồng vụt chạy?</p>
      <p>Ông Phú Lâu Na thưa: Người ấy tự tâm họ cuồng, chớ không có nhơn cái chi cả.</p>
      <p>Phật dạy: Cũng vậy đó, ông Phú Lâu Na. Đã nói là &ldquo;vọng&rdquo; thì đâu có sở nhơn, còn có sở nhơn thì không phải là vọng. Các vọng tưởng tự nó nhơn nhau liên tiếp phát sanh; từ đời này đã mê rồi chất chứa thêm cái mê, cho đến nhiều kiếp. Ta đã nhiều lần chỉ dạy, mà các ông hãy còn chưa ngộ trở lại.</p>
      <p>Này Phú Lâu Na, cái &ldquo;mê&rdquo; như vậy đó, nhơn mê tự có? Nếu người biết được cái &ldquo;mê&rdquo; ấy không nguyên nhân, thì cái &ldquo;mê vọng&rdquo; đó không còn gá nương vào đâu nữa. Lúc bấy giờ dầu muốn cho nó sanh còn không thể được, huống chi muốn diệt.</p>
      <p>Các ông nên biết: người đặng đạo Bồ đề rồi (ngộ chơn tâm), cũng như người thức giấc mộng, mà muốn nói lại việc chiêm bao; mặc dầu trong tâm nhớ biết rõ ràng, nhưng không làm sao chỉ các vật trong chiêm bao ra được, vì nó không thật có, vả lại nó cũng không có nguyên nhân nữa. Cũng như chàng Diễn Nhã Đạt Đa, tự sợ cái đầu của mình, rồi nổi cuồng vụt chạy, chớ không có sở nhơn gì cả.</p>
      <p>Nếu cái &ldquo;cuồng&rdquo; kia thoạt nhiên hết, thì cái &ldquo;đầu&rdquo; vẫn y nguyên. Dù cho khi chưa hết cuồng thì cái đầu ấy cũng không mất. Này Phú Lâu Na, các &ldquo;mê vọng&rdquo; như vậy đó, chớ có nhơn cái gì đâu!</p>

      <section id="luoc-giai-6">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Cái đầu là dụ cho &ldquo;chơn tâm&rdquo;. Tự nổi cuồng là dụ cho các &ldquo;vọng tưởng&rdquo; tự sanh. Hết cuồng rồi thì cái đầu vẫn y nguyên, dầu đương cuồng cái đầu cũng không mất, là dụ cho ngộ rồi thì chơn tâm tự hiện, dầu chưa ngộ, chơn tâm cũng không mất.</p>
      </section>
    </section>

    <section id="vii-neu-vong-duyen-dut-chon-tam-hien-bay">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. NẾU CÁC &ldquo;VỌNG DUYÊN&rdquo; DỨT, TÂM &ldquo;CUỒNG VỌNG&rdquo; TIÊU THÌ CHƠN TÂM HIỆN BÀY</h3>
      <p>Này Phú Lâu Na, các ông khi đối với trần cảnh (thế giới, chúng sanh, nghiệp quả) chỉ đừng có khởi vọng niệm phân biệt, thì tham, sân, si (ba duyên) không khởi. Ba duyên không khởi, thời ba nhơn sát, đạo, dâm chẳng sanh. Lúc bấy giờ anh khùng Diễn Nhã Đạt Đa (mê) ở trong tâm các ông tự hết, mà hết tức là Bồ đề (sáng suốt). Khi ấy chơn tâm của ông thanh tịnh sáng suốt tự hiện bày, khắp cả pháp giới, không cần phải cực nhọc khó khăn tu chứng, hay xin cầu nơi ai cả.</p>

      <section id="luoc-giai-7">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Bởi đối cảnh khởi tâm phân biệt, nên sanh ra tham, sân, si. Vì tham, sân, si mới có sát, đạo, dâm. Do sát, đạo, dâm nên phải chịu sanh tử luân hồi.</p>
        <p>Tỷ dụ như người khi đối với nữ sắc v.v... chỉ thấy qua không khởi vọng niệm phân biệt thì chẳng có hại chi. Đến lúc khởi tâm phân biệt đây là xấu, thì tâm ghét giận nổi lên. Còn phân biệt kia đẹp thì tâm tham muốn sanh ra. Tham, sân đã sanh thì si cũng theo đó mà khởi.</p>
        <p>Còn khi đối cảnh, mà tâm không khởi phân biệt thời vọng niệm chẳng sanh, vọng niệm không sanh thì chơn tâm tự hiện.</p>
        <p>Thật là một pháp tu trực chỉ mau thành Phật nhứt, mà cũng là khó nhất. Chúng ta suốt đời chỉ tu theo bốn chữ Phật dạy: &ldquo;Bất tùy phân biệt&rdquo; (đối cảnh không khởi phân biệt) cũng chưa chắc đã tu xong.</p>
        <p>Tỷ dụ cùng tử, trong túi áo có sẵn hột châu như ý, nhưng không hay biết, nên chịu nghèo hèn vất vả phải đi làm thuê mướn ở các phương xa, kiếm ăn qua ngày tháng, song hột châu ấy không mất. Đến khi gặp người tri thức (quen) chỉ cho biết: &ldquo;Anh đã sẵn có hột châu vô giá trong túi áo kia&rdquo;. Lúc bấy giờ anh muốn gì được nấy, giàu có vô cùng. Chừng ấy anh mới hối ngộ rằng: hột thần châu này chính mình đã sẵn có, không phải do nơi người mà được.</p>
        <p>Lời tỷ dụ này rất hay, Phật chỉ rõ chúng sanh đều sẵn có Phật tánh (chơn tâm). Nhưng vì không ngộ, nên phải nhiều kiếp làm chúng sanh khổ sở, mà Phật tánh thì vẫn không mất. Đến khi ngộ được chơn tâm, chứng thành quả Phật, phước trí đầy đủ rồi mới biết rằng: chơn tâm này chính mình sẵn có, không phải do nơi người mà được.</p>
      </section>
    </section>

    <section id="viii-a-nan-nghi-tam-bo-de-do-nhon-duyen-sanh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII. A NAN NGHI &ldquo;TÂM BỒ ĐỀ&rdquo; DO NHƠN DUYÊN SANH</h3>
      <p>Khi đó A Nan đứng dậy lạy Phật, chắp tay bạch rằng:</p>
      <p>Đức Thế Tôn nói: &ldquo;Ba duyên tham, sân, si đứt rồi, thời ba nhơn sát, đạo, dâm không sanh. Lúc bấy giờ anh khùng Diễn Nhã Đạt Đa trong tâm ông tự hết, mà hết tức là Bồ đề, không phải do nơi người mà đặng&rdquo;.</p>
      <p>Bạch Thế Tôn, như thế thì tâm Bồ đề rõ ràng là do nhơn duyên sanh rồi. Tại sao Đức Như Lai lại bác thuyết nhơn duyên sanh?</p>
      <p>Không những riêng chúng con là hàng Thinh văn tuổi trẻ hữu học, do nhơn duyên mà tâm được khai ngộ; chính như trong hội này, những vị đã đặng vô lậu, như ông Đại Mục Kiền Liên, ông Xá Lợi Phất và ông Tu Bồ Đề từ dòng Phạm chí ngoại đạo, cũng do nghe Phật nói nhơn duyên, mà tâm được khai ngộ.</p>
      <p>Nay Phật nói: &ldquo;Tâm Bồ đề không từ nơi nhơn duyên sanh&rdquo;. Như thế thì chúng ngoại đạo Câu Xá Ly kia nói về thuyết &ldquo;tự nhiên&rdquo; cũng thành đúng lý hay sao? Xin Phật duỗi lòng đại bi, vạch mở chỗ mê mờ cho chúng con.</p>

      <section id="luoc-giai-8">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Ông A Nan trước đã nghi nhơn duyên và tự nhiên, đều bị Phật phá rồi, nay ông lại còn nghi nhơn duyên và tự nhiên nữa. Bởi vì lưới nghi chồng chập nhiều đời, vả lại hàng Thinh văn pháp chấp khó trừ. Cũng như cây chuối, lột được bẹ này, lại bày ra bẹ khác. Lột cho hết bẹ thì lõi chuối mới bày. Phá nghi cho hết, thì &ldquo;chơn tâm&rdquo; mới hiện.</p>
      </section>
    </section>

    <section id="ix-phat-dinh-nghia-chu-nhon-duyen-tu-nhien-va-bac">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX. PHẬT ĐỊNH NGHĨA CHỮ NHƠN DUYÊN, TỰ NHIÊN VÀ BÁC</h3>
      <p>Phật dạy rằng: Này A Nan, như chàng Diễn Nhã Đạt Đa kia, vì nhơn duyên soi gương, cho nên chàng mới sanh ra cuồng. Đến khi hết cuồng thì tánh không cuồng (tỉnh) tự nhiên sanh ra; có phải cái lý nhơn duyên và tự nhiên cùng tột như thế chăng?</p>
      <p>Này A Nan, chàng Diễn Nhã Đạt Đa kia, nếu cái đầu của chàng đã là tự nhiên, thì lúc nào cũng vẫn tự nhiên, vậy do nhơn duyên gì nổi cuồng sợ chạy?</p>
      <p>Nếu cái đầu là tự nhiên, vì nhơn duyên soi gương cho nên mới cuồng, vậy cái đầu cũng vẫn tự nhiên, sao chẳng vì nhơn duyên soi gương mà mất đi. Phải biết: cái đầu vẫn không biến đổi hay mất đi, còn &ldquo;cuồng sợ&rdquo; tự nó vọng sanh. Vậy thì cần gì phải có nhơn duyên soi gương mới sanh ra cuồng?</p>

      <section id="luoc-giai-9">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đoạn này đại ý nói: Nếu nói &ldquo;chơn tâm tự nhiên&rdquo; thì lúc nào cũng vẫn tự nhiên, vậy do nhơn duyên gì mà nổi vọng. Nếu nói &ldquo;có nhơn duyên nên nổi vọng&rdquo; sao chẳng do nhơn duyên mà chơn tâm kia mất. Vậy thì biết, chơn tâm không biến đổi, cái &ldquo;cuồng vọng&rdquo; tự nó vọng sanh, không cần gì phải có nhơn duyên.</p>
        <p>Còn nói &ldquo;cái cuồng đó tự nhiên sẵn có&rdquo;, vậy thì khi chưa cuồng nó núp ở chỗ nào?</p>
        <p>Cái đầu đã tự nhiên không có cuồng vọng, vậy vì sao nổi cuồng vụt chạy?</p>
        <p>Nếu như người ngộ được &ldquo;cái đầu mình sẵn có&rdquo;, biết được cái &ldquo;cuồng&rdquo; tự nó vọng sanh, thì thuyết nhơn duyên và tự nhiên đều là nói chơi cả.</p>
      </section>
    </section>

    <section id="x-phat-pha-chap-nhon-duyen-de-dan-vao-vo-cong-dung">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">X. PHẬT PHÁ CHẤP NHƠN DUYÊN ĐỂ DẪN VÀO &ldquo;VÔ CÔNG DỤNG&rdquo;</h3>
      <p>Thế nên Ta nói: &ldquo;Ba duyên: tham, sân, si đoạn hết, tức là tâm Bồ đề&rdquo;. Nếu cái &ldquo;vọng tâm sanh diệt kia diệt, mà tâm Bồ đề sanh&rdquo;, như thế cũng còn ở trong vòng sanh diệt. Phải diệt và sanh đều hết, mới được vô công dụng đạo (chỗ cứu cánh).</p>

      <section id="luoc-giai-10">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đoạn này Phật phá chấp nhơn duyên để dẫn nhập đạo vô công dụng.</p>
      </section>
    </section>

    <section id="xi-phat-pha-chap-tu-nhien-de-thanh-vo-hi-luan">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XI. PHẬT PHÁ CHẤP TỰ NHIÊN ĐỂ THÀNH VÔ HÍ LUẬN</h3>
      <p>Nếu ông chấp &ldquo;vọng tâm sanh diệt kia diệt rồi, thì tâm Bồ đề tự nhiên sanh&rdquo;; như thế cũng còn ở trong vòng sanh diệt, chưa phải thật là tự nhiên. Phải không còn sanh và diệt, mới thật là tự nhiên.</p>
      <p>Ông nên hiểu thêm: không phải tự nhiên sanh, không phải nhơn duyên hòa hiệp khởi; ly (rời) cả tự nhiên và nhơn duyên hòa hiệp, mà cái &ldquo;ly&rdquo; đó cũng không còn nữa, như thế mới phải là chỗ rốt ráo (vô hí luận).</p>

      <section id="luoc-giai-11">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đoạn này là Phật chỉ đến chỗ cứu cánh tuyệt đối, nếu còn nói năng phân biệt, thì chưa phải là tuyệt đối.</p>
      </section>
    </section>

    <section id="xii-phat-quo-a-nan-hoc-nhieu-khong-tu">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XII. PHẬT QUỞ ÔNG A NAN HỌC NHIỀU KHÔNG TU, THÌ CHẲNG CÓ LỢI ÍCH GÌ</h3>
      <p>A Nan! Ông đối với quả Bồ đề Niết Bàn của Phật hãy còn cách xa lắm! Nếu ông không siêng năng, trải qua nhiều kiếp chịu cực nhọc tu hành, thì dầu cho có nhớ hết nghĩa lý nhiệm mầu trong mười hai bộ kinh của mười phương các đức Phật, nhiều như số cát sông Hằng, cũng chỉ giúp thêm cho ông việc nói giỏi mà thôi, chớ không lợi chi cho ông cả.</p>
      <p>Ông nay luận bàn về thuyết nhơn duyên và tự nhiên rất là thông suốt. Người đời khen ông là bực học rộng nghe nhiều. Nếu trong nhiều kiếp ông chỉ chứa chất cái học suông này mà không tu, thì không bao giờ khỏi được cái nạn Ma Đăng Già kia vậy.</p>
      <p>Nếu cái học và nghe suông của ông đó có lợi thì cần gì phải nhờ đến thần chú Lăng Nghiêm của ta, để làm cho nàng Ma Đăng Già kia nguồn tình khô cạn, lửa dục tiêu tan, lại tinh tiến tu hành trong đạo pháp của ta, nàng chứng được quả thánh thứ Ba (A Na Hàm). Khi đó ông mới được giải thoát.</p>
    </section>

    <section id="xiii-so-sanh-de-khuyen-khich-tu-hanh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XIII. SO SÁNH ĐỂ KHUYẾN KHÍCH TU HÀNH</h3>
      <p>A Nan! Ông tuy nhiều kiếp ghi nhớ các nghĩa lý nhiệm mầu của Như Lai, nhưng không bằng một ngày tu tập nghiệp vô lậu, xa lìa hai cái khổ thương ghét (tham, sân) ở thế gian.</p>
      <p>Bằng chứng rõ ràng, như nàng Ma Đăng Già nguyên trước kia là kẻ dâm nữ, do nhờ thần chú của ta, mà nguồn tình khô cạn, lửa dục tiêu tan, lại xuất gia tu hành làm Tỳ-kheo-ni.</p>
      <p>Còn bà Gia Du Đà La là mẹ của La Hầu La, vì biết được nhơn đời trước, do tham ái mà nhiều đời phải chịu khổ, nên một niệm tu theo nghiệp lành vô lậu, mà được ra khỏi tình ái ân triền phược và đặng thọ ký.</p>
      <p>Kẻ phụ nhơn tu hành còn được như thế, huống chi các ông là nam tử, đã học rộng nghe nhiều mà trở lại chấp chỗ thấy, nghe suông, chẳng biết tiến tu, sao tự khinh mình đến thế!</p>

      <section id="luoc-giai-13">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đoạn này Phật quở trách rất là thống thiết! Nếu chỉ học nhiều mà không tu thì chẳng có lợi ích gì. Chúng ta đọc đoạn này chớ nên nghĩ rằng: &ldquo;Phật chỉ quở một mình ông A Nan&rdquo;, mà chính Ngài quở trách chung tất cả chúng ta vậy.</p>
        <p><strong>LƯU Ý:</strong> Từ trước đến đây, Phật nói về phần lý, từ đây về sau, Phật mới chỉ về đường lối tu hành.</p>
      </section>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong phần I, Phật dạy "Chơn tâm phi tất cả tướng". Điều này có nghĩa là gì đối với các khái niệm như ngũ uẩn, lục nhập hay thập bát giới?',
    options: {
      a: 'Chơn tâm nằm ngoài và không bị đồng nhất với các pháp này.',
      b: 'Chơn tâm chỉ tồn tại khi các tướng này bị tiêu diệt hoàn toàn.',
      c: 'Chơn tâm là sự tổng hòa của các tướng này.',
      d: 'Chơn tâm là nguồn gốc vật chất tạo nên ngũ uẩn.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Chơn tâm phi ngũ uẩn, lục nhập, thập bát giới... vì nó tuyệt tánh, ly tướng và không đồng nhất với tất cả các pháp thế gian hay xuất thế gian [1], [2], [3].',
      b: 'Sai. Chơn tâm bản nhiên thanh tịnh và thường trụ, không phụ thuộc vào việc các tướng có bị tiêu diệt hay không [3].',
      c: 'Sai. Chơn tâm "phi tất cả tướng", tức là không phải sự tổng hòa của các tướng [4], [3].',
      d: 'Sai. Các đại như đất, nước, gió, lửa thuộc về sắc (vật chất), còn chơn tâm phi các yếu tố này [1].',
    },
  },
  {
    question: 'Tại sao Phật lại khẳng định "Chơn tâm tức là tất cả pháp" ngay sau khi nói nó "phi tất cả tướng"?',
    options: {
      a: 'Vì chơn tâm và vọng tâm là hai thực thể tách biệt hoàn toàn.',
      b: 'Để khẳng định rằng tu hành chỉ cần quan sát các pháp bên ngoài.',
      c: 'Vì tất cả pháp đều do tâm sanh ra, nên tâm chính là các pháp đó.',
      d: 'Vì các pháp thế gian có thực tính giống hệt như chơn tâm.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Chơn tâm và vọng tâm không phải là hai thực thể tách biệt hoàn toàn theo cách hiểu này [3].',
      b: 'Sai. Không có nội dung nào khuyên chỉ quan sát các pháp bên ngoài [5].',
      c: 'Đúng. Lược giải nêu rõ: "Tâm đã sanh ra tất cả pháp, thì tâm là tất cả pháp. Cũng như bột đã làm ra các thứ bánh, thì bột đó tức là bánh" [6].',
      d: 'Sai. Các pháp là sự biến hiện tùy duyên, không đồng nhất thực tính tuyệt đối với chơn tâm [7].',
    },
  },
  {
    question: 'Theo tỷ dụ về "cây đờn", sự khác biệt giữa việc hiện ra "Phật" hay "tam đồ lục đạo" nằm ở đâu?',
    options: {
      a: 'Nằm ở việc người nghe có hiểu được bản nhạc hay không.',
      b: 'Nằm ở kỹ năng và cách sử dụng "ngón tay" của người khảy đờn.',
      c: 'Nằm ở thời điểm mà tiếng đờn phát ra.',
      d: 'Nằm ở bản chất khác nhau của các loại nhạc cụ.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Sự khác biệt không phụ thuộc vào người nghe [7].',
      b: 'Đúng. Cây đờn có tiếng hay phải nhờ ngón tay của người biết khảy; dụ như chơn tâm tùy duyên biến hiện, khéo dùng thì hiện ra Phật, vụng lắm thì thành tam đồ lục đạo [7].',
      c: 'Sai. Thời điểm không phải là yếu tố tạo ra sự khác biệt [7].',
      d: 'Sai. Tất cả đều chung một bản thể chơn tâm, giống như cùng một cây đờn [7], [8].',
    },
  },
  {
    question: 'Trong câu chuyện về chàng Diễn Nhã Đạt Đa, "cái đầu" và việc "nổi cuồng" lần lượt tượng trưng cho điều gì?',
    options: {
      a: 'Cái đầu là nhơn duyên, nổi cuồng là tự nhiên.',
      b: 'Cái đầu là chơn tâm, nổi cuồng là vọng tưởng tự sanh.',
      c: 'Cái đầu là quả vị Phật, nổi cuồng là hành trình tu đạo.',
      d: 'Cái đầu là vọng tưởng, nổi cuồng là chơn tâm.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Chàng Diễn Nhã Đạt Đa được dùng để bác bỏ thuyết nhơn duyên và tự nhiên [9], [10].',
      b: 'Đúng. Theo lược giải: "Cái đầu là dụ cho chơn tâm. Tự nổi cuồng là dụ cho các vọng tưởng tự sanh" [11].',
      c: 'Sai. Nổi cuồng không phải là hành trình tu đạo mà là trạng thái mê lầm [11].',
      d: 'Sai. Cái đầu dụ cho chơn tâm chứ không phải vọng tưởng [11].',
    },
  },
  {
    question: 'Phật dạy rằng nếu "mê" là "vọng" thì nó có đặc điểm quan trọng nào sau đây?',
    options: {
      a: 'Nó do người khác mang đến và gieo rắc vào tâm ta.',
      b: 'Nó là một phần tất yếu của chơn tâm.',
      c: 'Nó không có nguyên nhân thực sự (vô sở nhơn).',
      d: 'Nó có một khởi đầu rõ ràng từ kiếp trước.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Cái mê không do người khác gieo rắc mà tự phát sanh [12].',
      b: 'Sai. Vọng không phải là phần tất yếu của chơn tâm [12].',
      c: 'Đúng. Phật dạy "Đã nói là vọng thì đâu có sở nhơn", và "Nếu người biết được cái mê ấy không nguyên nhân, thì cái mê vọng đó không còn gá nương vào đâu nữa" [12].',
      d: 'Sai. Vọng không có nguyên nhân thực sự nên cũng không có khởi đầu thực sự [12], [13].',
    },
  },
  {
    question: 'Phương pháp tu hành "Bất tùy phân biệt" được mô tả như thế nào trong bài học?',
    options: {
      a: 'Là việc cố gắng tiêu diệt mọi cảm xúc và giác quan.',
      b: 'Là việc trốn tránh mọi trần cảnh để giữ tâm yên tĩnh.',
      c: 'Là đối cảnh mà không khởi vọng niệm phân biệt đẹp, xấu, thương, ghét.',
      d: 'Là ghi nhớ thật nhiều kinh điển để có trí tuệ phân biệt đúng sai.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Việc tu hành không phải là tiêu diệt giác quan [14].',
      b: 'Sai. Tu hành không phải là trốn tránh trần cảnh [11], [14].',
      c: 'Đúng. "Bất tùy phân biệt" nghĩa là khi đối cảnh "chỉ thấy qua không khởi vọng niệm phân biệt" thì tham, sân, si sẽ không sanh ra [11], [14], [5].',
      d: 'Sai. Ghi nhớ nhiều kinh điển nhưng không tu thì bị Phật quở trách [15].',
    },
  },
  {
    question: 'Tại sao việc cho rằng tâm Bồ đề do "nhơn duyên sanh" lại bị Phật bác bỏ?',
    options: {
      a: 'Vì ông A Nan chưa đủ trình độ để hiểu về nhơn duyên.',
      b: 'Vì nếu do nhơn duyên sanh thì nó sẽ thuộc vòng sanh diệt.',
      c: 'Vì Phật muốn khẳng định Bồ đề là do nỗ lực cá nhân hoàn toàn.',
      d: 'Vì nhơn duyên là thuyết của ngoại đạo Câu Xá Ly.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phật bác bỏ không phải vì trình độ của A Nan [16].',
      b: 'Đúng. Phật dạy nếu "vọng tâm sanh diệt kia diệt, mà tâm Bồ đề sanh", thì như thế cũng còn ở trong vòng sanh diệt, chưa phải là đạo vô công dụng [16].',
      c: 'Sai. Phật không dùng lý do này để bác bỏ nhơn duyên [16].',
      d: 'Sai. Ngoại đạo Câu Xá Ly chủ trương thuyết "tự nhiên", không phải nhơn duyên [17].',
    },
  },
  {
    question: 'Phật đưa ra lời cảnh báo gì cho ông A Nan về việc "học rộng nghe nhiều"?',
    options: {
      a: 'Học rộng là bước quan trọng nhất để tiêu trừ lửa dục.',
      b: 'Nếu không tu tập nghiệp vô lậu, việc ghi nhớ kinh điển chỉ giúp nói giỏi chứ không có lợi ích thực sự.',
      c: 'Chỉ có người học ít mới có thể tập trung tu hành hiệu quả.',
      d: 'Học nhiều sẽ giúp mau chóng đạt được quả thánh mà không cần thiền định.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Thần chú và tu tập mới tiêu trừ được lửa dục, không phải chỉ học rộng [18].',
      b: 'Đúng. Phật quở rằng nếu nhớ hết kinh điển mà không tu thì "cũng chỉ giúp thêm cho ông việc nói giỏi mà thôi, chớ không lợi chi cho ông cả" [15].',
      c: 'Sai. Phật không khuyên con người nên học ít [15], [19].',
      d: 'Sai. Học nhiều mà không tu thì không cứu được nạn, không đạt quả thánh [18].',
    },
  },
  {
    question: 'Trường hợp của nàng Ma Đăng Già và bà Gia Du Đà La minh chứng cho điều gì?',
    options: {
      a: 'Việc tu hành nghiệp vô lậu có sức mạnh giải thoát thực sự, dù xuất thân là ai.',
      b: 'Phụ nữ không thể chứng được quả thánh cao nhất.',
      c: 'Thần chú Lăng Nghiêm chỉ có tác dụng đối với phụ nữ.',
      d: 'Học rộng nghe nhiều là điều kiện tiên quyết để xuất gia.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Nàng Ma Đăng Già là kẻ dâm nữ và bà Gia Du Đà La bị ái ân triền phược, nhưng nhờ tu tập nghiệp lành vô lậu mà được giải thoát và chứng quả [20].',
      b: 'Sai. Cả hai người phụ nữ đều tu hành và được giải thoát [20].',
      c: 'Sai. Thần chú không chỉ dành riêng cho phụ nữ [18], [20].',
      d: 'Sai. Nàng Ma Đăng Già không cần học rộng nghe nhiều vẫn tu hành chứng quả [20].',
    },
  },
  {
    question: 'Tại sao nói "Chơn tâm rời tất cả tức và phi" là chỗ rốt ráo (vô hí luận)?',
    options: {
      a: 'Vì "tức" và "phi" là những khái niệm sai lầm hoàn toàn.',
      b: 'Vì chơn tâm không tồn tại thực sự trong thế giới này.',
      c: 'Vì ngôn ngữ và tư duy thế gian không thể chạm tới thực tại tuyệt đối.',
      d: 'Vì Phật muốn giữ bí mật về chơn tâm cho những vị đại Bồ tát.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Đây không phải là sự sai lầm của khái niệm, mà là hạn chế của ngôn từ [21].',
      b: 'Sai. Chơn tâm hiện hữu viên mãn khắp tất cả [8].',
      c: 'Đúng. Lược giải ghi rõ: "Đây là chỗ tuyệt đối, không thể nói năng, suy nghĩ và kêu gọi là gì được", ly mọi khái niệm ngôn từ mới là chỗ rốt ráo vô hí luận [21], [22], [15].',
      d: 'Sai. Phật không giữ bí mật mà chỉ vì lý đạo quá cao siêu nên không thể nói ra bằng lời được [21].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-9-phat-day-chon-tam-phi-tat-ca-tuong',
  slug: 'bai-thu-9-phat-day-chon-tam-phi-tat-ca-tuong',
  title: 'Bài Thứ 9 - Phật dạy Chơn Tâm phi tất cả tướng',
  type: 'article',
  status: 'published',
  order: 10,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-9-phat-day-chon-tam-phi-tat-ca-tuong/Ch%C6%A1n_T%C3%A2m_v%C3%A0_V%E1%BB%8Dng_T%C6%B0%E1%BB%9Fng.png',
      readingContent,
      tableOfContents: [
        { id: 'i-phat-day-chon-tam-phi-tat-ca-tuong', label: 'I. Phật dạy: Chơn tâm phi tất cả tướng' },
        { id: 'luoc-giai-1', label: 'Lược giải', indent: 1 },
        { id: 'ii-phat-day-chon-tam-tuc-tat-ca-phap', label: 'II. Phật dạy: Chơn tâm tức tất cả pháp' },
        { id: 'luoc-giai-2', label: 'Lược giải', indent: 1 },
        { id: 'iii-chon-tam-khong-the-noi-phi-va-tuc', label: 'III. Chơn tâm không thể nói "phi" và "tức"' },
        { id: 'luoc-giai-3', label: 'Lược giải', indent: 1 },
        { id: 'iv-phat-lay-cay-dan-de-ty-du', label: 'IV. Phật lấy cây đờn để tỷ dụ' },
        { id: 'luoc-giai-4', label: 'Lược giải', indent: 1 },
        { id: 'v-ong-phu-lau-na-hoi-chon-tam-nhon-dau-co-vong', label: 'V. Ông Phú Lâu Na hỏi: Chơn tâm nhơn đâu có vọng' },
        { id: 'vi-phat-day-da-la-vong-thi-khong-co-so-nhon', label: 'VI. Phật dạy: Đã là vọng thì không có sở nhơn' },
        { id: 'luoc-giai-6', label: 'Lược giải', indent: 1 },
        { id: 'vii-neu-vong-duyen-dut-chon-tam-hien-bay', label: 'VII. Vọng duyên dứt, chơn tâm hiện bày' },
        { id: 'luoc-giai-7', label: 'Lược giải', indent: 1 },
        { id: 'viii-a-nan-nghi-tam-bo-de-do-nhon-duyen-sanh', label: 'VIII. A Nan nghi tâm Bồ đề do nhơn duyên sanh' },
        { id: 'luoc-giai-8', label: 'Lược giải', indent: 1 },
        { id: 'ix-phat-dinh-nghia-chu-nhon-duyen-tu-nhien-va-bac', label: 'IX. Phật định nghĩa chữ nhơn duyên, tự nhiên và bác' },
        { id: 'luoc-giai-9', label: 'Lược giải', indent: 1 },
        { id: 'x-phat-pha-chap-nhon-duyen-de-dan-vao-vo-cong-dung', label: 'X. Phật phá chấp nhơn duyên để dẫn vào vô công dụng' },
        { id: 'luoc-giai-10', label: 'Lược giải', indent: 1 },
        { id: 'xi-phat-pha-chap-tu-nhien-de-thanh-vo-hi-luan', label: 'XI. Phật phá chấp tự nhiên để thành vô hí luận' },
        { id: 'luoc-giai-11', label: 'Lược giải', indent: 1 },
        { id: 'xii-phat-quo-a-nan-hoc-nhieu-khong-tu', label: 'XII. Phật quở ông A Nan học nhiều không tu' },
        { id: 'xiii-so-sanh-de-khuyen-khich-tu-hanh', label: 'XIII. So sánh để khuyến khích tu hành' },
        { id: 'luoc-giai-13', label: 'Lược giải', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-9-phat-day-chon-tam-phi-tat-ca-tuong/Awakening_the_True_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/ApIWwxL5ng8',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5IiTxKZSm3jzrkHmtHE9sy?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phật dạy Chơn Tâm phi tất cả tướng',
    passPercentage: 70,
    questions,
  },
}

export default lesson
