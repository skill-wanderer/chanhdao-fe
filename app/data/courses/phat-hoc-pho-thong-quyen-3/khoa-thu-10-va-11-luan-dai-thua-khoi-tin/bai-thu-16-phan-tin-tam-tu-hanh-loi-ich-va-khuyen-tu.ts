import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI SÁU · CHƯƠNG THỨ TƯ · PHẦN TÍN TÂM TU HÀNH</p>
      <h2 id="chuong-thu-tu-tin-tam-tu-hanh-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Chương thứ tư: TÍN TÂM TU HÀNH (Tiếp theo và hết)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="cac-thu-ma-chuong" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">C. NÓI VỀ CÁC THỨ MA CHƯỚNG TRONG KHI TU THIỀN</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Nếu chúng sanh nào căn lành mỏng ít, bị các tà ma ngoại đạo, hoặc quỷ thần làm não loạn, trong khi hành giả tham thiền, chúng hiện các hình tướng ghê sợ, hoặc hiện kẻ trai người gái xinh đẹp v.v... thì phải quán Duy tâm, lúc bấy giờ các ma này tiêu diệt, không còn làm gì nữa được.</p>
    <p><span id="ma-hien-phat">Hoặc chúng hiện hình chư Thiên, Bồ Tát, Phật, cũng đủ các tướng tốt;</span> <span id="ma-noi-phap">hoặc nói thần chú, nói pháp bố thí, trì giới, nhẫn nhục, tinh tấn, thiền định, trí huệ; hoặc nói pháp bình đẳng, không, vô tướng, vô nguyện, không oán, không thân, không nhơn, không quả, rốt ráo trống không vắng lặng, gọi đó là Niết bàn.</span> Hoặc chúng làm cho hành giả biết được đời trước của mình (túc mạng thông) hoặc biết những việc quá khứ vị lai, biết đặng tâm người (tha tâm thông) biện tài vô ngại. Chúng làm cho hành giả tham luyến danh lợi ở thế gian v.v...</p>
    <p><span id="ma-lam-mat-tanh">Hoặc ma làm cho hành giả tánh không chừng đỗi, hay giận, hay cười, ưa ngủ, nhiều bịnh, hoặc nhiều thương xót, tâm hay giải đãi; hoặc có khi rất tinh tấn, có lúc lại bê tha hoặc sinh tâm nghi ngờ không tin, và nhiều lo nghĩ;</span> hoặc bỏ pháp tu căn bản, trở lại tu các tạp hạnh; hoặc đắm nhiễm các việc triền phược ở thế gian; hoặc làm cho hành giả đặng chút ít phần tương tợ như các pháp tam muội, song đó là cảnh bị chứng của ngoại đạo, không phải thật tam muội; hoặc làm cho hành giả ở trong Định, từ một ngày hoặc đến bảy ngày, tự nhiên đặng món ăn thơm ngon, thân tâm vui thích, không biết đói khát; khiến cho hành giả rất ưa thích. Hoặc làm cho hành giả ăn không chừng đỗi, khi nhiều khi ít, sắc mặt biến đổi luôn.</p>
    <p id="doi-tri-cac-ma">Khi gặp những cảnh như vậy, hành giả phải thường dùng trí huệ quán sát, siêng năng giữ gìn Chánh niệm, <span id="khong-mong-tam">không nên chấp thủ</span>, chớ để cho tâm mình đoạ vào lưới tà. Phải như thế hành giả mới xa lìa được các ma chướng. (<span id="quan-duy-tam">Quán Duy tâm</span>)</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Người tu thiền định, khi phá trừ ngũ ấm, sẽ bị trên năm chục món ma, biến hiện đủ cách để thử thách và não hại người tu Thiền.</p>
    <p>Khi gặp các cảnh ma ấy, hành giả phải dụng tâm như thế nào, và dùng những phương pháp gì để diệt trừ, thì trong kinh Lăng Nghiêm Phật đã dạy rất rõ ràng và kỹ lưỡng, (quí vị nên đọc đoạn Ngũ ấm ma trong quyển Đại cương Lăng Nghiêm).</p>
    <p>Trong Luận này, Ngài Mã Minh Bồ Tát chỉ nói sơ lược về ma; Hoặc chúng hiện thân Phật, thân Bồ Tát; hoặc nói kinh thuyết pháp thông suốt; hoặc làm cho người tu thiền biết được việc quá khứ, vị lai; hoặc đặng túc mạng thông, tha tâm thông, biện tài vô ngại; hoặc làm cho người tu thiền tham lam danh lợi v.v...</p>
    <p>Khi gặp các cảnh ma như vậy, hành giả phải đừng quyến luyến, nhiễm trước và đừng sanh tâm vui mừng hay lo buồn, mà phải luôn luôn quán Duy tâm; nghĩa là quán do dụng công tu thiền, nên tâm hiện ra các cảnh như vậy, chứ không có gì lạ và cũng không phải chứng chi cả. Kinh Lăng Nghiêm, Phật nói: "...Nếu hành giả không chấp mình được Thiền hay chứng Thánh thì tốt, còn chấp mình Thiền hay chứng Thánh thì đoạ vào tà đạo" (Bất tác Thánh tâm danh thiện cảnh giới, nhược tác thánh giải tức thọ quần tà). Phải dụng tâm như thế thì các cảnh ma kia tự nhiên tiêu diệt. Nếu hành giả vui mừng, cho mình được Thiền hay chứng Đạo v.v... thì bị ma ám ảnh nhiễu hại; vì các việc ma là hiện thân của sự tham luyến vui buồn chấp thủ.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Phải biết, các pháp thiền định (tam muội) của ngoại đạo tu tập, đều không rời phiền não hữu lậu vì tâm còn ngã mạn, chấp ngã tham lam danh lợi ở thế gian và cầu người cung kính.</p>
    <p>Còn tu pháp Chơn như tam muội (thiền định) này thì không có tướng gì để được, lại có công năng làm cho các phiền não lần lần mỏng ít; cho đến khi xuất định hành giả cũng không giãi đãi. Nếu người tu hành mà không tu pháp Chơn như tam muội này, thì không thể nhập được dòng giống của Như Lai.</p>
    <p>Tu các pháp thiền định tam muội của thế gian, cũng như thiền định của ngoại đạo, đều thuộc trong Tam giới, vì còn các phiền não chấp ngã và say đắm nhiễm trước nơi cảnh thiền. Bởi thế nên người tu thiền định, nếu không có Thiện tri thức dẫn dắt, thì quyết định sẽ lạc vào ngoại đạo.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Trong kinh Lăng Nghiêm, khi Phật sắp chỉ dạy phương pháp tu hành thì Phật đã khuyên bảo dặn dò ông A Nan và đại chúng rằng "Phải phân biệt rành rõ hai món căn bản: 1. Vọng tâm phiền não là căn bản của sanh tử luân hồi và 2. Chơn tâm thanh tịnh là căn bản của Bồ Đề Niết bàn. Nếu các ông nhận lầm là căn bản của sanh tử luân hồi làm nhơn tu hành, thì không bao giờ thành Phật được; và cũng như người nhận giặc làm con, chỉ bị nó phá hại mà thôi". Bởi thế nên, đoạn này Bồ Tát Mã Minh phân tách rành rõ tà định và chánh định, để cho hành giả khỏi lầm lạc.</p>
    <p>Thiền định của ngoại đạo và thế gian là do phiền não hữu lậu làm động cơ thúc đẩy, như vì lợi dưỡng, cầu người cung kính v.v... mà tu. Khi tu thiền, thấy được một vài thắng cảnh thì họ ngã mạn cống cao và tham ái nơi cảnh thiền v.v... Bởi thế nên tu chừng nào, thì họ lại tăng trưởng bản ngã, thêm nhiều phiền não, đào sâu hố tà, luân hồi mãi trong tam giới.</p>
    <p>Còn thiền định của chư Phật là do chơn như thanh tịnh (chơn như) làm động cơ, nên không vì lợi dưỡng hay cầu người cung kính, khi thấy thắng cảnh, chỉ quán là Duy tâm, không móng tâm tham luyến, không ngã mạn cống cao, không nuôi lớn bản ngã. Bởi thế nên hành giả tu chừng nào thì phiền não càng tiêu, được vào cảnh giới của chư Phật.</p>
    <p>Tóm lại, người tu thiền định, nếu không có Thiện hữu tri thức (Minh sư chỉ giáo) để dẫn dắt, thì dễ lạc vào tà kiến ngoại đạo.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="muoi-dieu-loi-ich" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">D. MƯỜI ĐIỀU LỢI ÍCH THIỀN ĐỊNH</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Người chuyên tâm tinh tấn tu pháp tam muội này (Chơn như tam muội) thì hiện đời sẽ được mười điều lợi ích:</p>
    <p><strong>1.</strong> Được mười phương chư Phật và Bồ Tát thường hộ niệm.</p>
    <p><strong>2.</strong> Không bị các ma quỷ khủng bố.</p>
    <p><strong>3.</strong> Không bị chín mươi lăm thứ thiên ma ngoại đạo làm mê hoặc.</p>
    <p><strong>4.</strong> Xa lìa những việc huỷ báng Chánh pháp và các tội chướng nặng nề dần dần mỏng ít.</p>
    <p><strong>5.</strong> Diệt hết các nghi ngờ và những sự thấy nghe tội lỗi.</p>
    <p><strong>6.</strong> Đối với các cảnh giới của chư Phật, lòng tin tăng trưởng.</p>
    <p><strong>7.</strong> Xa lìa các điều ăn năn lo lắng và đối với việc sanh tử, tâm không khiếp sợ.</p>
    <p><strong>8.</strong> Tâm được nhu hoà, bỏ tánh kiêu mạn, chẳng bị người làm não hại.</p>
    <p><strong>9.</strong> Dù chưa chứng Định, song trong tất cả thời gian, tất cả cảnh giới, hành giả có thể làm cho các phiền não tổn giảm và không tham vui ở thế gian.</p>
    <p><strong>10.</strong> Nếu được Tam muội thì không bị các âm thanh của trần gian và các ngoại duyên làm chao động.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Người tu hành là một vị Tướng soái cùng với các ma quân trường kỳ kháng chiến, không phải kháng chiến một năm một tháng, mà phải nhiều đời nhiều kiếp, không phải một ngày một buổi, mà phải đánh từng giờ từng phút với giặc nội tâm (phiền não). Cố nhiên hành giả phải trải qua ba giai đoạn: Giai đoạn thứ nhất là tự vệ, phải trải qua một a tăng kỳ kiếp (một vô số kiếp), hành giả thua nhiều thắng ít; giai đoạn thứ hai là cầm cự, trải qua một a tăng kỳ kiếp thứ hai, hành giả năm ăn năm thua; giai đoạn thứ ba là phản công, cũng trải qua một a tăng kỳ kiếp nữa, hành giả thắng nhiều mà thua ít.</p>
    <p>Tuy nhiên, nếu hành giả thành tâm chuyên nhứt, tinh tấn tu học pháp "chơn như tam muội" này, thì sẽ được mười điều lợi ích như trên; mà điều lợi ích thứ nhứt là được chư Phật và Bồ Tát thường hộ niệm; như vậy, lo chi chẳng được thành đạo chứng quả.</p>
    <p class="italic text-text-muted">(Trên đã nói tu Chỉ, tiếp theo đây sẽ nói tu Quán)</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="bay-phap-quan" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">E. BẢY PHÁP QUÁN</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Nếu người tu Chỉ (Định) mà tâm bị trầm một (chìm lặng) sanh ra giãi đãi, hoặc chẳng ưa làm việc lành, xa lìa tâm Đại bi, thì phải tu Quán.</p>
    <p><strong>Quán vô thường:</strong> Quán tất cả các pháp hữu vi trong thế gian, không có lâu dài, giây phút biến hoại.</p>
    <p><strong>Quán khổ:</strong> Quán tất cả tâm hạnh là khổ, vì mỗi niệm sanh diệt không dừng.</p>
    <p><strong>Quán vô ngã:</strong> Quán các pháp quá khứ như chiêm bao, các pháp hiện tại như chớp nhoáng, các pháp vị lai như mây tụ tán.</p>
    <p><strong>Quán bất tịnh:</strong> Quán tất cả thân hình nam, nữ trong trần gian đều bất tịnh, đủ các thứ ô uế, không có một chút gì sạch sẽ đáng ưa.</p>
    <p><strong>Quán Đại bi:</strong> Hành giả phải thường nhớ tất cả chúng sanh từ vô thỉ đến giờ, đều bởi vô minh huân tập, làm cho tâm sanh diệt, và đã thọ không biết bao nhiêu thân hình khổ não; hiện tại đây vẫn bị vô lượng sự khổ sở đang áp bức, cho đến vị lai cũng còn chịu các điều khổ não, không biết chừng nào cùng tận. Chúng sanh bị các khổ sở như thế, không thể lìa bỏ được, thế mà không hay không biết, thật đáng thương xót.</p>
    <p><strong>Quán Đại nguyện:</strong> Hành giả thường suy nghĩ chúng sanh khổ sở như thế, nên phát tâm dõng mãnh, tu tất cả công đức lành, lập lời thệ nguyện rộng lớn: "Nguyện cho tâm tôi không còn phân biệt thân sơ (đồng thể) để dùng vô lượng phương tiện cứu độ tất cả chúng sanh khổ não khắp cả mười phương, cùng tận vị lai, đều được an vui Niết bàn".</p>
    <p><strong>Quán Tinh tấn:</strong> Do hành giả đã phát nguyện rộng lớn như vậy, nên trong tất cả thời gian và tất cả mọi nơi, phải siêng năng tu học, tuỳ theo khả năng của mình mà làm các việc lành, tâm không giãi đãi.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Hành giả nếu tu "Chỉ" mà không tu "Quán" thì có thể sanh ra những tai hại là xa lìa tâm Đại bi, không ưa làm các việc lành. Bởi thế nên muốn tránh những tai hại ấy, hành giả phải tu "Quán".</p>
    <p>Trước nhứt, hành giả phải quán "Tứ niệm xứ" để thấy rõ thâm tâm và thế giới đều là vô thường, khổ, vô ngã và bất tịnh". Tiếp đó hành giả dùng quán Đại bi cứu độ. Rồi tiếp dùng quán Đại nguyện, nghĩa là khi đã thấy chúng sanh khổ quá, nên hành giả tự phát lời thệ nguyện rộng lớn và dũng mãnh độ sanh với tâm bình đẳng, không phân biệt thời gian và không gian. Hành giả đã lập Đại nguyện rồi thì phải dùng quán Tinh tấn, nghĩa là phải tận lực của mình làm các điều lợi ích cho chúng sanh trong mười phương, không khi nào rảnh việc.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="chi-quan-dong-thoi" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">G. CHỈ VÀ QUÁN ĐỒNG THỜI TU</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Chỉ trừ những lúc ngồi chuyên tu pháp "Chỉ" còn ngoài ra tất cả thì giờ khác, hành giả đều phải quan sát những việc gì nên làm, việc gì không nên làm.</p>
    <p>Khi đi, đứng, nằm, ngồi hành giả phải đồng thời tu cả Chỉ và Quán. Nghĩa là hành giả tuy trong khi quán tự tánh của các pháp không sanh (Chỉ), nhưng cũng quán do nhơn duyên hoà hiệp, nên nghiệp lành dữ và quả báo khổ vui không mất (Quán). Tuy trong lúc quán do nhơn duyên hoà hiệp nghiệp báo không mất (Quán), nhưng hành giả cũng quán tự tánh của các pháp không sanh (Chỉ).</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bồ Tát Mã Minh dạy hành giả trong bốn oai nghi: đi, đứng, nằm, ngồi đều phải tu cả Chỉ và Quán. Trong khi quán các pháp vô sanh, để trừ tâm tham lam ái trước v.v... thì hành giả cũng quán nhơn duyên hoà hiệp, nhơn quả lành dữ không mất, để rộng tu các việc lành và giáo hoá chúng sanh. Tuy "quán không" mà chẳng bỏ môn hạnh lành; "quán có" mà tâm tánh vẫn thanh tịnh, không nhiễm trước, ái luyến một cảnh nào. Đó là lợi ích của Chỉ và Quán đồng thời tu vậy.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="loi-ich-chi-quan" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">H. LỢI ÍCH TU CHỈ QUÁN</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Phàm phu tu "Chỉ" thì trừ được tâm nhiễm trước thế gian; Nhị thừa tu "Chỉ" thì bỏ được tâm khiếp nhược. Phàm phu tu "Quán", xa lìa được cái bịnh chẳng ưa tu pháp lành; Nhị thừa tu "Quán", đối trị được tâm hẹp hòi ích kỷ, chẳng khởi Đại bi. Bởi thế nên phải tu cả Chỉ và Quán, giúp nhau mới thành, không thể rời nhau được. Nếu hành giả không tu cả Chỉ và Quán thì sẽ không thể vào đạo Bồ Đề.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Nhờ tu "Chỉ" nên hành giả ngăn được sự tham trước và khiếp nhược. Nhờ tu "Quán" nên hành giả phát khởi tâm Đại bi và làm lợi ích cho chúng hữu tình. Bởi thế nên pháp Chỉ, Quán, (Định, Huệ) là con đường lớn của hành giả để về cõi Phật.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phap-mon-niem-phat" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">I. PHÁP MÔN NIỆM PHẬT</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Lại nữa, nếu có chúng sanh mới tu pháp này, tâm còn khiếp sợ, muốn được Chánh tín, nhưng lo sợ "ở cõi ta bà không thường gặp Phật, nghe pháp và cúng dường, e sợ lòng tin của mình không thành tựu", muốn thối chí, thì những chúng sanh ấy biết rằng: Phật còn có phương tiện thù thắng, bảo đảm tín tâm của hành giả được thành tựu. Phương tiện ấy là "Nhơn duyên chuyên tâm niệm Phật, cầu sanh về cõi Phật ở phương khác, để thường được thấy Phật, nghe pháp", thì chắc chắn xa lìa được ác đạo.</p>
    <p>Trong Khế kinh, Phật dạy: "nếu người chuyên tâm niệm Phật A Di Đà ở thế giới Cực lạc phương tây, và đem công đức tu hành hồi hướng phát nguyện cầu sanh về đó, thì quyết định sẽ sanh về thế giới Cực lạc, được thường thấy Phật và nghe pháp, không bao giờ thối chuyển".</p>
    <p>Nếu hành giả quán chơn như Pháp thân của Phật A Di Đà và thường siêng năng tu tập, thì rốt ráo sẽ được sanh vào hàng ngũ chánh định.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Hành giả muốn hái quả Phật, tất nhiên phải leo lên cây Bồ Đề cao 6 thước, là Bố thí, Trì giới, Nhẫn nhục, Tinh tấn, Thiền định và Trí huệ. Quan trọng nhứt là hai thước sau; trong Luận này gọi là Chỉ và Quán. Đó là điều duy nhứt của các vị Bồ Tát đã và sẽ chứng quả Phật.</p>
    <p>Nhưng, có người lo ngại: "Chúng phàm phu đến quả Phật, phải tu nhiều kiếp và trải qua thời gian lâu xa là ba vô số kiếp; hơn nữa, ở cõi Ta bà này có rất nhiều chướng ngại, và không thường gặp Phật, sự tu khó thành công". Muốn cho những người ấy hết lo ngại, bảo đảm sự tu hành chắc chắn được kết quả, nên Bồ Tát Mã Minh chỉ thêm một phương tiện thù thắng của Phật, là dạy người "Nhứt tâm niệm Phật, hồi hướng cầu sanh về cõi nước của Phật A Di Đà, để thường gặp Phật và làm bạn với các vị Bồ Tát, ngày đêm sáu thời thường nghe tiếng pháp; cho đến gió thổi, cây rung, suối reo, chim hót, cũng đều diễn ra những pháp: Ngũ căn, Ngũ lực, Thất Bồ Đề, Bát chánh đạo v.v..."; như trong kinh Di Đà đã nói.</p>
    <p>Hành giả gặp hoàn cảnh thuận tiện, tốt đẹp như thế, thì lo gì chẳng thành đạo chứng quả. Bởi thế nên pháp "Nhứt tâm niệm Phật" là phương tiện thù thắng nhứt của đức Đại bi Thế tôn.</p>
    <p class="italic text-text-muted">(Đã hết chương thứ tư là Tín tâm, Tu hành)</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mt-12 mb-6">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">CHƯƠNG THỨ NĂM</p>
      <h2 id="chuong-thu-nam-loi-ich" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Nói về LỢI ÍCH VÀ KHUYẾN TU</h2>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="hoc-va-tu-theo-luan">Pháp Đại thừa bí mật của chư Phật, tôi đã nói một cách tổng quát rồi. Nếu có người nào đối với pháp Đại thừa của Như Lai (thậm thâm cảnh giới) đã không nghi ngờ hay bài báng, lại còn sanh tâm chánh tín muốn vào Đại thừa, nên họ thọ trì (văn) suy nghĩ (tư) và tu tập (tu) theo Luận này, thì người ấy sẽ được đạo vô thượng Bồ Đề. Nếu người nào nghe đến Pháp Đại thừa này mà tâm không nghi sợ thì người ấy sẽ được chư Phật thọ ký và quyết định sẽ nối dòng Phật.</p>
    <p>Giả sử có người giáo hoá chúng sanh cả Đại thiên thế giới (một nghìn triệu thế giới nhỏ) đều tu thập thiện, công đức của người này tuy nhiều, nhưng không bằng có người chỉ ở thời gian ngắn như trong bữa ăn, tu pháp Đại thừa này, thì công đức lại nhiều hơn người trước không thể so sánh được.</p>
    <p>Lại nữa, nếu có người, hoặc trong một ngày đêm, thọ trì, quán sát và tu hành theo Luận này, thì người ấy sẽ được công đức vô lượng vô biên, không thể nói hết. Dầu cho mười phương chư Phật ở trong vô lượng vô biên, a tăng kỳ kiếp (vô số kiếp) tán thán công đức của người đó cũng không hết. Tại sao vậy? Bởi vì pháp Đại thừa (Phật tánh) có công đức không cùng tận; Luận này nói về pháp Đại thừa nên người thọ trì và tu tập, theo luận này, cũng được công đức vô lượng vô biên như vậy.</p>
    <p id="khuyen-hanh-gia">Nếu chúng sanh nào đối với Luận này mà huỷ báng, không tin, thì chúng sanh đó sẽ bị tội báo lớn, trải qua vô lượng kiếp thọ khổ não. Vì thế nên chúng sanh phải tin tưởng không nên huỷ báng Luận này, bởi có hại cho mình và người, đoạn tuyệt giống Tam bảo.</p>
    <p>Tất cả chư Phật đều do pháp Đại thừa này mà được Niết bàn; các vị Bồ Tát cũng nhờ tu pháp Đại thừa này mà đặng vào trí Phật. Các vị Bồ Tát quá khứ, hiện tại và vị lai đều tu theo pháp Đại thừa này mà được thành tựu đức tin thanh tịnh. Bởi thế nên chúng sanh phải siêng năng tu học.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chương thứ năm này nói về sự lợi ích và khuyên người tu hành. Bộ Luận này nói về pháp Đại thừa, tức là tâm chúng sanh hay Phật tánh, hoặc gọi chơn như hay Pháp thân v.v... Chư Phật, Bồ Tát quá khứ, hiện tại và vị lai đều tu theo pháp Đại thừa mà được thành đạo chứng quả. Bởi thế nên người tu theo pháp Đại thừa chỉ trong thời gian ngắn, như trong bữa ăn hay một ngày đêm, công đức người này nhiều hơn người dạy chúng sanh trong Đại thiên thế giới tu Thập thiện; vì tu Thập thiện chỉ hưởng phước hữu lậu ở cõi trời; và mười phương chư Phật tán dương công đức của người tu theo Đại thừa cũng không hết lời, vì công đức này thuộc về chơn tâm thanh tịnh vô lậu, biến khắp tất cả.</p>
    <p>Trái lại nếu chúng sanh nào huỷ báng không tin Luận này, tức là huỷ báng không tin pháp Đại thừa hay không tin tánh Phật, tâm chơn như v.v... của mình thì chúng sanh đó tự đoạn pháp thân huệ mạng của mình, làm mất giống Phật pháp của mình nên nhiều kiếp phải chịu sanh tử luân hồi trầm luân trong biển khổ.</p>
    <p>Vì thế nên chúng sanh không nên nghi ngờ huỷ báng, mà phải tin tưởng và tu theo Luận này.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mt-12 mb-6">
      <h3 id="hoi-huong" class="mt-0 text-xl font-bold text-primary-700 dark:text-primary-300">BÀI KỆ HỒI HƯỚNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4">
      <p class="mb-1">Nghĩa lý rộng sâu của chư Phật</p>
      <p class="mb-1">Tôi nay tổng quát nói đã rồi</p>
      <p class="mb-1">Nguyện đem công đức về Pháp tánh</p>
      <p class="mb-0">Tất cả chúng sanh đều được lợi.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Theo lệ thường, các vị Bồ Tát khi tạo luận, trước nhứt nói bài kệ quy kính Tam bảo, để cầu Tam bảo gia hộ cho việc làm của mình được khế lý và hợp cơ; rốt sau nói bài kệ hồi hướng, để hồi hướng cho tất cả chúng sanh đều nhờ công đức này mà được lợi lạc. Đây là bài kệ hồi hướng.</p>

    <div class="mt-10 text-right italic text-sm text-text-muted">
      <p class="mb-1">Dịch chánh văn xong ngày 27 tháng Giêng Tân Sửu</p>
      <p class="mb-1">Lược giải và tu chỉnh, xong ngày 28 tháng Chạp năm Tân Sửu (1961)</p>
      <p class="mb-0">In xong giữa mùa Sen nở, năm Nhâm Dần (1962)</p>
    </div>
    
    <p class="text-center font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mt-12">— HẾT —</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo văn bản, khi hành giả gặp các hình tướng ghê sợ hoặc xinh đẹp do ma hiện ra trong lúc tham thiền, phương pháp đối trị hiệu quả nhất là gì?",
    options: {
      a: "Quán Duy tâm.",
      b: "Cầu xin sự giúp đỡ của chư Thiên và Bồ Tát.",
      c: "Tăng cường tụng thần chú để xua đuổi.",
      d: "Bỏ dở buổi thiền để tránh bị não loạn.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Văn bản ghi rõ: 'thì phải quán Duy tâm, lúc bấy giờ các ma này tiêu diệt, không còn làm gì nữa được.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Một trong những dấu hiệu của ma chướng là khiến hành giả có được 'biện tài vô ngại' hoặc biết được việc quá khứ vị lai. Tại sao điều này lại nguy hiểm?",
    options: {
      a: "Vì nó khiến cơ thể hành giả bị suy nhược và biến đổi sắc mặt.",
      b: "Vì nó làm cho hành giả tham luyến danh lợi thế gian.",
      c: "Vì nó ngăn cản hành giả đạt được các món ăn thơm ngon trong định.",
      d: "Vì những khả năng này là hoàn toàn giả dối và không có thật.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Việc suy nhược và biến đổi sắc mặt là do ma làm ăn không chừng đỗi, không phải hệ quả trực tiếp của tha tâm thông.",
      b: "Đúng. Cảnh ma này làm cho hành giả có những thần thông giả tạm, mục đích là để 'làm cho hành giả tham luyến danh lợi ở thế gian' mà lạc đường tu.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Kinh Lăng Nghiêm đưa ra lời khuyên nào cho hành giả khi gặp các cảnh giới tốt đẹp trong lúc tu thiền?",
    options: {
      a: "Bất tác Thánh tâm danh thiện cảnh giới.",
      b: "Phải ghi chép lại để chia sẻ cho người khác học tập.",
      c: "Nhanh chóng xuất định để tránh bị ma ám ảnh.",
      d: "Phải vui mừng vì đó là dấu hiệu của sự chứng đắc.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Lược giải dẫn kinh Lăng Nghiêm: 'Bất tác Thánh tâm danh thiện cảnh giới, nhược tác thánh giải tức thọ quần tà' (Không chấp mình chứng Thánh thì đó là cảnh giới tốt, còn hiểu lầm mình đã chứng Thánh thì sẽ đọa vào tà ma).",
      b: "Sai.",
      c: "Sai.",
      d: "Sai. Vui mừng chấp đắc sẽ bị ma nhiễu hại.",
    },
  },
  {
    question: "Sự khác biệt căn bản giữa thiền định của ngoại đạo và 'Chơn như tam muội' là gì?",
    options: {
      a: "Chơn như tam muội chỉ có thể thực hiện khi ngồi yên một chỗ.",
      b: "Chơn như tam muội dựa trên tâm ngã mạn để cầu tiến bộ.",
      c: "Thiền định ngoại đạo không có các cảnh giới thần thông.",
      d: "Thiền định ngoại đạo còn phiền não hữu lậu và chấp ngã.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Phương tiện tùy duyên Chỉ có thể thực hiện khi đi đứng nằm ngồi.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Chánh văn ghi: 'các pháp thiền định (tam muội) của ngoại đạo tu tập, đều không rời phiền não hữu lậu vì tâm còn ngã mạn, chấp ngã tham lam danh lợi ở thế gian'.",
    },
  },
  {
    question: "Lợi ích thứ tám của mười điều lợi ích tu thiền 'Chơn như tam muội' là gì?",
    options: {
      a: "Được mười phương chư Phật hộ niệm.",
      b: "Diệt hết các nghi ngờ và sự thấy nghe tội lỗi.",
      c: "Không bị các âm thanh trần gian làm chao động.",
      d: "Tâm được nhu hoà, bỏ tánh kiêu mạn, chẳng bị người làm não hại.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây là lợi ích thứ 1.",
      b: "Sai. Đây là lợi ích thứ 5.",
      c: "Sai. Đây là lợi ích thứ 10.",
      d: "Đúng. Lợi ích thứ 8: 'Tâm được nhu hoà, bỏ tánh kiêu mạn, chẳng bị người làm não hại.'",
    },
  },
  {
    question: "Khi tu 'Chỉ' mà tâm bị chìm lắng (trầm một) hoặc sinh lòng lười biếng, hành giả cần phải làm gì?",
    options: {
      a: "Phải tu pháp Quán.",
      b: "Ngừng tu tập và đi làm việc thiện ngay lập tức.",
      c: "Tăng cường thời gian ngủ để phục hồi năng lượng.",
      d: "Tiếp tục ngồi yên cho đến khi tâm tự sáng suốt trở lại.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Chánh văn chỉ rõ: 'Nếu người tu Chỉ (Định) mà tâm bị trầm một (chìm lặng) sanh ra giãi đãi, hoặc chẳng ưa làm việc lành, xa lìa tâm Đại bi, thì phải tu Quán.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Pháp quán nào sau đây giúp hành giả phát khởi lòng thương xót chúng sanh đang bị vô minh áp bức?",
    options: {
      a: "Quán Đại bi.",
      b: "Quán Vô thường.",
      c: "Quán Bất tịnh.",
      d: "Quán Tinh tấn.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Quán Đại bi là thường nhớ tất cả chúng sanh bị vô minh huân tập, chịu vô số sự khổ não áp bức mà không hay không biết, từ đó khởi lòng thương xót.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Bồ Tát Mã Minh lại giới thiệu thêm phương tiện niệm Phật A Di Đà ở cuối chương 4?",
    options: {
      a: "Vì pháp tu Chỉ và Quán quá khó, không ai có thể thực hiện được.",
      b: "Để bảo đảm tín tâm cho những người mới tu còn khiếp sợ sự thối chuyển.",
      c: "Vì niệm Phật không cần phải tu tập Chỉ và Quán nữa.",
      d: "Vì niệm Phật là cách duy nhất để tiêu diệt ma chướng.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Chỉ và quán là đường lối chính, không phải không ai thực hiện được.",
      b: "Đúng. Đối với chúng sanh mới tu, sợ cõi ta bà chướng ngại nhiều và dễ thối tâm, Phật thêm phương tiện thù thắng niệm Phật cầu vãng sanh Cực Lạc để bảo đảm tín tâm không bao giờ thối chuyển.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo chương 5, công đức của một người tu tập pháp Đại thừa này trong thời gian ngắn (như bữa ăn) được so sánh như thế nào?",
    options: {
      a: "Không thể so sánh được vì hai loại công đức này giống hệt nhau.",
      b: "Nhiều hơn công đức của người giáo hoá chúng sanh cả Đại thiên thế giới tu Thập thiện.",
      c: "Ít hơn công đức của người tu Thập thiện vì thời gian quá ngắn.",
      d: "Bằng với công đức của người dạy chúng sanh tu Thập thiện trong một thế giới nhỏ.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Chánh văn khẳng định: 'người chỉ ở thời gian ngắn như trong bữa ăn, tu pháp Đại thừa này, thì công đức lại nhiều hơn người trước [giáo hoá cả Đại thiên thế giới tu Thập thiện] không thể so sánh được.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Hành động nào bị cảnh báo là sẽ gây tội báo lớn, khiến chúng sanh chịu khổ não trong vô lượng kiếp?",
    options: {
      a: "Chỉ lo tu tập cho bản thân mà chưa phát Đại nguyện.",
      b: "Không thể thực hiện đồng thời cả Chỉ và Quán.",
      c: "Quên không đọc bài kệ hồi hướng sau khi tu tập.",
      d: "Huỷ báng và không tin tưởng vào Luận Đại thừa này.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Chánh văn nói: 'Nếu chúng sanh nào đối với Luận này mà huỷ báng, không tin, thì chúng sanh đó sẽ bị tội báo lớn, trải qua vô lượng kiếp thọ khổ não.'",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-16-phan-tin-tam-tu-hanh-loi-ich-va-khuyen-tu',
  slug: 'bai-thu-16-phan-tin-tam-tu-hanh-loi-ich-va-khuyen-tu',
  title: 'Bài Thứ 16 - Phần tín tâm, tu hành (tiếp theo và hết); Lợi ích và khuyến tu',
  type: 'article',
  status: 'published',
  order: 18,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-16-tinh-tam-tu-hanh-tiep-theo/C%E1%BA%A9m_nang_tu_t%E1%BA%ADp_thi%E1%BB%81n.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-thu-tu-tin-tam-tu-hanh-tiep-theo', label: 'Chương thứ tư: TÍN TÂM TU HÀNH (Tiếp theo và hết)' },
        { id: 'cac-thu-ma-chuong', label: 'C. Các thứ ma chướng khi tu thiền:', indent: 1 },
        { id: 'ma-hien-phat', label: 'Ma hiện Phật, Bồ Tát v.v...', indent: 2 },
        { id: 'ma-noi-phap', label: 'Ma nói pháp Lục độ và ba môn giải thoát v.v...', indent: 2 },
        { id: 'ma-lam-mat-tanh', label: 'Ma làm cho hành giả mất tánh thường hoặc điên v.v...', indent: 2 },
        { id: 'doi-tri-cac-ma', label: 'Đối trị các ma:', indent: 2 },
        { id: 'quan-duy-tam', label: 'Quán duy tâm', indent: 3 },
        { id: 'khong-mong-tam', label: 'Không móng tâm chấp trước.', indent: 3 },
        { id: 'muoi-dieu-loi-ich', label: 'D. Mười điều lợi ích tu thiền', indent: 1 },
        { id: 'bay-phap-quan', label: 'E. Bảy pháp quán', indent: 1 },
        { id: 'chi-quan-dong-thoi', label: 'G. Chỉ và quán đồng thời tu', indent: 1 },
        { id: 'loi-ich-chi-quan', label: 'H. Lợi ích chỉ quán', indent: 1 },
        { id: 'phap-mon-niem-phat', label: 'I. Pháp môn niệm Phật', indent: 1 },
        { id: 'chuong-thu-nam-loi-ich', label: 'Chương thứ năm: Nói về LỢI ÍCH và KHUYẾN TU' },
        { id: 'hoc-va-tu-theo-luan', label: 'Học và tu theo Luận này sẽ được lợi ích vô cùng', indent: 1 },
        { id: 'khuyen-hanh-gia', label: 'Khuyên hành giả tu theo Luận Đại thừa này', indent: 1 },
        { id: 'hoi-huong', label: 'Hồi hướng', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-16-tinh-tam-tu-hanh-tiep-theo/The_Lotus_Awakening.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/LzWgXNz5Lvw',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4yfX7nLuPQcVFPMhP85Z0o',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài Thứ 16',
    passPercentage: 70,
    questions,
  },
}
export default lesson