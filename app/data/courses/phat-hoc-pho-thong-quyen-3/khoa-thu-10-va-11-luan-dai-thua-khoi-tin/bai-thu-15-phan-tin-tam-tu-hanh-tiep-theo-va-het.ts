import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI LĂM · CHƯƠNG THỨ TƯ · PHẦN TÍN TÂM TU HÀNH</p>
      <h2 id="chuong-thu-tu-tin-tam-tu-hanh" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Chương thứ tư: TÍN TÂM TU HÀNH (2 bài, bài này thứ nhất)</h2>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Chương này là căn cứ vào nhóm chúng sanh chưa vào chánh định mà nói về việc tín tâm tu hành. Về tín tâm thì ước lược có bốn món, còn tu hành lại có năm món.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="bon-mon-tin-tam" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">A. NÓI VỀ BỐN MÓN TÍN TÂM</h3>
    </div>
    
    <p id="tin-can-ban"><strong>1. Tin căn bản</strong>, tức là ưa nghĩ nhớ pháp chơn như.</p>
    <p id="tin-phat"><strong>2. Tin Phật</strong> có vô lượng công đức; hành giả thường phải nghĩ tưởng, gần gũi, cung kính và cúng dường chư Phật, để phát khởi căn lành và nguyện cầu đặng "Nhứt thế trí".</p>
    <p id="tin-phap"><strong>3. Tin Pháp</strong> của Phật có lợi ích lớn; hành giả phải thường nhớ tu hành các pháp Ba la mật.</p>
    <p id="tin-tang"><strong>4. Tin Tăng</strong> là người chơn chánh tu hành, tự lợi lợi tha, và hành giả thường ưa thân cận các vị Bồ Tát để cầu học cái hạnh chơn thật.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Luận này có năm chương, ba chương đầu là phần lý thuyết, chương thứ tư nói về thực hành, tức là việc khởi tín tâm tu hành, nên chương này rất cần thiết cho hành giả.</p>
    <p>Vậy người nào mới có thể khởi tín tâm tu hành? Bồ Tát Mã Minh nói: "Phải chúng sanh chưa vào chánh định, mới có thể khởi tín tâm tu hành". Tại sao thế? Vì những người tà định (ngoại đạo) không thể khởi tín tâm tu hành theo Đại thừa; còn những người đã vào chánh định rồi, thì không cần phải nói nữa; duy có người bất định (không nhứt định Đại thừa hay Tiểu thừa) chưa vào chánh định, mới có thể khởi tín tâm tu hành theo Đại thừa được.</p>
    <p>Vậy hành giả phải tin cái gì? Có bốn món: Trước nhứt hành giả phải tự tin nơi bản tánh chơn như của mình, tức là tin mình sẵn có tánh Phật (khả năng thành Phật), cũng gọi là tin tâm Đại thừa. Tin như thế nào? Phải luôn luôn tin tưởng và nghĩ nhớ tâm chơn như của mình, Thể nó lớn, Tánh nó to, Dụng nó đại. Đó là điều tin căn bản, còn ba điều tin sau này, cũng do tin căn bản mà ra, tức là tin Tam bảo: Tin Phật là người đã chứng được chơn như; tin Pháp là phương pháp để thực hiện chơn như; tin Tăng là người đang thực hành theo chơn như.</p>
    <p>Hành giả tin Phật để cầu được nhứt thế trí; tin Pháp để tu hành theo các pháp Ba la mật; tin Tăng để học theo hạnh chơn thật.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="nam-mon-tu-hanh" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">B. NÓI VỀ NĂM MÔN TU HÀNH</h3>
    </div>
    
    <p id="bo-thi">1. Bố thí</p>
    <p id="tri-gioi">2. Trì giới</p>
    <p id="nhan-nhuc">3. Nhẫn nhục</p>
    <p id="tinh-tan">4. Tinh tấn</p>
    <p id="chi-quan">5. Chỉ, quán (Định, Huệ)</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Thế nào là tu Bố thí? Nếu thấy có người đến xin, hành giả có những tài vật gì tuỳ theo sức mình, đem bố thí cho người, thì sẽ được hai điều lợi ích: tự mình bỏ được lòng tham lam bỏn xẻn, và người thọ thí được vui mừng. Nếu thấy người bị tai nạn, sợ hãi lo buồn, hành giả tận khả năng của mình cứu giúp, làm cho họ hết lo sợ; gọi là thí vô úy (bố thí cái không sợ). Nếu có người đến cầu nghe Phật pháp, hành giả tuỳ theo sự hiểu biết của mình, phương tiện thuyết pháp; thuyết pháp với tâm niệm tốt đẹp là nghĩ vì tự lợi lợi tha và hồi hướng về đạo Bồ Đề, không vì danh lợi hoặc cầu người cung kính.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Về việc tu hành, hành giả chỉ tu pháp Lục độ thì những hạnh tự lợi và lợi tha đều được đầy đủ.</p>
    <p>Bố thí có ba thứ: thí tài, thí pháp và thí không sợ.</p>
    <p><strong>Thí tài</strong>, tức là thí của, có hai thứ của: a) Đem tiền bạc của cải của mình giúp cho người, gọi là thí ngoại tài (của ngoài thân); b) Hy sinh thân mạng để cứu người, như cho máu những người thiếu máu v.v... gọi là thí nội tài (của trong thân). Thí ngoại tài thì hành giả sẽ trừ được tâm bỏn xẻn về tiền của. Thí nội tài thì hành giả sẽ bớt được tâm chấp ngã và tự ái.</p>
    <p><strong>Thí pháp</strong>, tức là thí phương pháp, có hai phần: a) Chỉ dạy cho người những phương pháp (nghề nghiệp) chơn chánh để tự nuôi sống, gọi là thí về pháp thế gian; b) Dạy người những phương pháp tu hành để giải thoát sanh tử luân hồi, gọi là thí về pháp xuất thế gian. Thí pháp, hành giả sẽ trừ được tâm bỏn xẻn về pháp.</p>
    <p><strong>Thí không sợ</strong>, tức là thí cái không lo sợ, cũng có hai phần: a) Về phần tiêu cực, mình không làm cho người lo sợ, gọi là thí không sợ; b) Về phần tích cực, thấy người bị hoạn nạn, đang lo sợ, mình tận lực cứu giúp, làm cho người hết lo sợ, cũng gọi là thí không sợ. Bố thí không sợ, hành giả sẽ nuôi lớn được lòng từ bi.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Thế nào là tu Trì giới? Không sát sanh, trộm cắp, dâm dục, không nói lời đâm thọc, nói lời độc ác, không nói dối, nói thêu dệt, không tham sân si, tật đố, dua nịnh, dối trá và tà kiến. Nếu là người xuất gia thì, vì còn dẹp trừ phiền não, nên phải xa lánh chỗ ồn ào, thường ở chỗ thanh vắng, tu hạnh thiểu dục tri túc, hoặc tu hạnh đầu đà v.v... Cho đến một lỗi nhỏ, hành giả cũng phải sanh tâm hổ thẹn, ăn năn sám hối và kiêng sợ; không dám khinh giới luật của Phật. Hành giả phải giữ gìn, đừng để cho người chê bai khinh hiềm, tại mình mà họ tạo tội lỗi.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Giới luật của Phật chế ra, tổng quát có ba phần, gọi là "Tam tụ tịnh giới" (ba phần giới thanh tịnh):</p>
    <p>1. Bỏ các điều tội lỗi, gọi là "Nhiếp luật nghi giới";</p>
    <p>2. Làm các việc lành, gọi là "Nhiếp thiện pháp giới";</p>
    <p>3. Làm lợi ích chúng sanh, gọi là "Nhiêu ích hữu tình giới".</p>
    <p>Hành giả tu theo Đại thừa, một mặt là phải giữ ba phần giới này cho thanh tịnh; một mặt nữa là đừng làm những điều sái quấy, để cho thế gian đàm tiếu, mà họ mang lấy tội lỗi.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Thế nào là tu Nhẫn nhục? Nhẫn chịu những điều người ta làm cho mình khổ não, trong tâm hành giả cũng không nghĩ tưởng đến việc trả thù; và nhẫn chịu tám hướng gió của trần gian thổi đến: 1. Thạnh lợi, 2. Suy bại, 3. Huỷ báng, 4. Danh dự, 5. Khen, 6. Chê, 7. Khổ, 8. Vui.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Tất cả những hoàn cảnh làm cho hành giả tạo các tội lỗi không ngoài tám điều, gọi là "Bát phong" (tám ngọn gió); nhưng tóm lại thì có hai cảnh: thuận và nghịch.</p>
    <p>Tài lợi, danh vọng, khen ngợi và vui là bốn ngọn gió thuận cảnh, nó thổi vào biển tâm của hành giả, làm cho nổi lên vô lượng sóng tham lam. Suy bại, huỷ báng (công kích lỗi người), chê bai (nói xấu) và khổ là bốn ngọn gió nghịch cảnh, nó thổi vào biển tâm của hành giả, làm cho nổi lên không biết bao nhiêu sóng sân hận.</p>
    <p>Hành giả khi gặp các thứ gió, dù thuận hay nghịch, cũng đều phải giữ gìn biển tâm mình cho yên lặng, đừng để các sóng phiền não như tham lam hay sân si v.v... nổi lên. Như thế gọi là tu pháp Nhẫn nhục Ba la mật.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Thế nào là tu Tinh tấn? Lập chí kiên nhẫn, tu các việc lành, tâm không trễ nãi và không khiếp nhược. Hành giả phải thường nhớ rằng, từ quá khứ nhiều kiếp lâu xa đến nay đã thọ không biết bao nhiêu thân tâm hư giả và chịu không biết bao nỗi khổ lớn lao, đều không có lợi ích gì cả. Bởi thế nên đời nay, ta siêng năng tu các công đức, làm những việc tự lợi lợi tha, để mau xa lìa các khổ.</p>
    <p>Lại nữa, nếu người tín tâm tu hành mà bị các nghiệp chướng đời trước làm chướng ngại, hoặc bị các tà ma ác quỉ nhiễu hại, hay bị việc đời ràng buộc, hoặc bị bịnh khổ làm não bức v.v... thì hành giả phải tinh tấn dõng mãnh, ngày đêm sáu thời lễ Phật tụng kinh, thành tâm sám hối, thường hành không bỏ phế; khuyên thỉnh Phật trụ thế và tuỳ hỷ các việc công đức, để hồi hướng về đạo quả Bồ Đề. Phải làm như thế, hành giả mới khỏi các điều chướng ngại và căn lành tăng trưởng.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Tinh tấn là một yếu tố để thành công trên đường đời cũng như trên đường Đạo. Người tu hành nếu thiếu tinh tấn thì không bao giờ thành đạo chứng quả được. Tinh là tinh chuyên một việc; Tấn là tiến tới không dừng.</p>
    <p>Hành giả lập chí dõng mãnh, chuyên tu các pháp lành, tâm không khiếp nhược, phải thường nhớ rằng: Từ vô lượng kiếp đến nay ta thọ biết bao nhiêu thân, chịu biết bao nhiêu khổ, nhưng không làm được điều lợi ích gì cả! Vậy đời này ta phải tu các công đức, để xa lìa các tội khổ. Nếu người bị nghiệp chướng đời trước nặng nề, hoặc tà ma ác quỉ nhiễu loạn, hay việc đời ràng buộc, bịnh hoạn làm khổ não, v.v... khó hành đạo được, hành giả phải ngày đêm 6 thời, tụng kinh sám hối, không nên bê trễ, thì các chướng ngại sẽ hết và căn lành tăng trưởng.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Thế nào là tu Chỉ, Quán? "Chỉ" nghĩa là đình chỉ tất cả các vọng tưởng (định), để tuỳ thuận theo quán không (xa ma tha); "Quán" nghĩa là quán sát các tướng nhơn duyên sanh diệt (huệ) để tuỳ thuận theo quán giả (tỳ bát xa na).</p>
    <p>Sao gọi là tuỳ thuận? Do hành giả từ từ tu tập, một lần cả Chỉ và Quán, đều không rời nhau, nên gọi là tuỳ thuận.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Tu Chỉ, Quán tức là tu Thiền định và trí huệ. "Chỉ" là đình chỉ các vọng tưởng, tức là Định; "Quán" là quán sát để thấu rõ chơn lý của các pháp, tức là Huệ. Tu Chỉ, Quán sẽ được Định, Huệ; vì Chỉ, Quán là Nhơn, mà Định, Huệ là Quả.</p>
    <p>Trong Lục độ, chia riêng ra Thiền định và Trí huệ, là muốn cho hành giả thấy rõ hành tướng, công dụng và kết quả của hai pháp môn khác nhau. Trong Luận này về chương "Tín tâm tu hành", Bồ Tát Mã Minh cũng dạy tu Lục độ, nhưng hai độ sau lại chung làm một và không gọi tu Định, Huệ mà lại gọi là tu Chỉ, Quán? Vì Bồ Tát muốn cho hành giả phải hiểu rằng: Về phần tu nhơn thì hai pháp này rất liên quan với nhau; nghĩa là hành giả phải đồng thời tu cả Chỉ và Quán. Trong Chỉ có Quán, trong Quán có Chỉ.</p>
    <p>Thế nào là trong Chỉ có Quán? Nghĩa là muốn ngăn ngừa đình chỉ không cho các vọng tưởng nổi lên, thì hành giả phải quán sát các pháp là không; bởi các pháp là không, nên hành giả chẳng chấp có, và không khởi tâm tham sân v.v...</p>
    <p>Thế nào là trong Quán có Chỉ? Nghĩa là hành giả quán sát các pháp đều do nhơn duyên hoà hiệp, sanh không phải thật sanh, mà diệt cũng không phải thật diệt. Vì các pháp do nhơn duyên hoà hiệp giả có, nên hành giả chẳng chấp không, và chẳng sanh các phiền não.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mt-8 mb-6">
      <h3 class="mt-0 text-xl font-bold text-primary-700 dark:text-primary-300">NÓI VỀ TU CHỈ (ĐỊNH)</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Nếu tu "Chỉ" (định) hành giả phải ở chỗ thanh vắng, ngồi ngay thẳng, tâm chơn chánh, chẳng nương hơi thở, chẳng nương hình sắc và hư không, chẳng nương đất, nước, gió, lửa; chẳng nương thấy, nghe, hay biết, cho đến các tưởng niệm đều diệt trừ, rồi hành giả dẹp luôn cái "tâm niệm" trừ tưởng niệm nữa.</p>
    <p>Do tất cả các pháp từ hồi nào đến giờ, mỗi niệm không sanh, mỗi niệm không diệt, nên hành giả phải không các tưởng niệm và cũng không tưởng cảnh giới ngoài tâm, rốt sau rồi lấy tâm trừ tâm. Nếu tâm vọng tưởng rong ruỗi, thì hành giả phải liền đem trở lại chánh niệm. Phải biết "Chánh niệm" đây, tức là "Duy tâm", không có ngoại cảnh. Và cái tâm này cũng không hình tướng gì có thể tưởng niệm được.</p>
    <p>Lại nữa, trong tất cả thì giờ, khi đi đứng nằm ngồi, tới lui qua lại, làm tất cả việc, hành giả phải thường nhớ phương tiện (phương tiện tuỳ duyên chỉ), nghĩa là tuỳ thuận quán sát. Hành giả tu tập như vậy lâu ngày thuần thục, thì tâm được an trụ; do tâm an trụ lần lần mạnh mẽ, nên dẹp sâu phiền não, tín tâm tăng trưởng, đặng tuỳ thuận vào chơn như tam muội, mau thành vị Bất thối. Chỉ trừ những người nghiệp chướng sâu dày, nghi ngờ bài báng không tin, hoặc ngã mạn biếng nhác, thì không thể nhập Chơn như tam muội được.</p>
    <p>Và hành giả nhờ nương pháp Chơn như tam muội này mà biết được pháp giới duy nhứt; nghĩa là nhận rõ Pháp thân của chư Phật và thân chúng sanh bình đẳng không hai, nên cũng gọi là Nhứt hạnh tam muội.</p>
    <p>Phải biết Chơn như là căn bản của các pháp tam muội; nếu hành giả tu pháp tam muội này, thì lần lần sẽ được vô lượng pháp tam muội.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Hành giả tu Định (Chỉ), phải ở chỗ thanh vắng, tránh xa nơi ồn ào náo nhiệt; thân ngồi ngay thẳng, không ngước không cúi; tâm phải chơn chánh, tỉnh táo sáng suốt và tịch tịnh, không phù không trầm; phải thoát ly thân, nghĩa là không nương hơi thở (không sổ tức); không nương hình sắc; phải thoát ly thế giới, không nương hư không, tứ đại; và phải thoát ly tâm, không nương thấy nghe hay biết.</p>
    <p>Hành giả phải trừ hết các tưởng niệm rồi cái tâm niệm trừ các tưởng đó cũng dứt luôn; phải biết các pháp từ hồi nào đến giờ, chỉ là nhứt tâm (Duy tâm), không sanh không diệt, không có cảnh giới ngoài tâm. Bởi thế nên tâm vừa vọng động rong ruổi theo trần cảnh, thì hành giả phải thâu lại đem về chánh niệm tức là nhứt tâm, gọi là "dùng nhứt tâm diệt các vọng tưởng"; rốt sau cái "tâm" này (nhứt tâm) cũng không còn, gọi là "dùng tâm trừ tâm".</p>
    <p>Các vị Cổ đức dạy rằng: "Người tham thiền, trong phải thoát ly thân tâm, ngoài xa lìa cảnh giới; nghĩa là phải rời tâm, ý, thức mà tham cứu, phải ra khỏi con đường thánh phàm mà tu học, phải viễn ly các cảnh giới vọng tưởng mà cầu đạo". Tóm lại, là phải phóng xả tất cả.</p>
    <p>Đoạn này nói về "Phương tiện tuỳ duyên Chỉ"; nghĩa là tu Thiền định không những thường ngồi, mà còn phải phương tiện tuỳ duyên tu tập, không cho gián đoạn. Khi đi đứng nằm ngồi làm các việc, hành giả cũng phải luôn luôn quán sát tu tập; như thế lâu ngày tâm được an trụ, nhơn đó định lực lần lần mạnh mẽ nên tín tâm tăng tấn, dẹp sâu phiền não, được tuỳ thuận vào Chơn như tam muội, thành bực Bất thối. Chỉ trừ những người huỷ báng không tin, thì không được vào Chơn như tam muội.</p>
    <p>Hành giả được Chơn như tam muội rồi, thì biết pháp giới là một, chúng sanh và chư Phật bình đẳng không hai, mê ngộ đồng một tánh, nên cũng gọi là Nhứt hạnh tam muội (Tam muội đồng nhứt thể).</p>
    <p>Chơn như tam muội là căn bản của các pháp tam muội, nên người ngộ được Chơn như tam muội rồi thì sẽ được các pháp tam muội khác.</p>
    
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-4">
      <p class="mb-0"><strong>Ghi chú:</strong> Chữ "Tam muội", Tàu dịch là Chánh định hay Chánh thọ; Nghĩa là tu Định đã đến lúc thuần thục hay đúng mức. (Đã nói tu thiền định rồi, tiếp sau đây sẽ nói các việc ma)</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo văn bản, nhóm chúng sanh nào là đối tượng chính cần khởi tín tâm tu hành Đại thừa?",
    options: {
      a: "Các vị Bồ Tát đã đặng vị Bất thối.",
      b: "Những người thuộc nhóm bất định, chưa vào chánh định.",
      c: "Những người thuộc tà định (ngoại đạo).",
      d: "Những người đã vào chánh định.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Những người bất định (chưa nhứt định Đại thừa hay Tiểu thừa) và chưa vào chánh định mới cần khởi tín tâm tu hành. Ngoại đạo không khởi tín, còn người đã vào chánh định thì không thối chuyển nữa.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong 'Bốn món Tín tâm', 'Tin căn bản' được hiểu là tin vào điều gì?",
    options: {
      a: "Tin vào bản tánh chơn như hay tánh Phật của chính mình.",
      b: "Tin vào sự dẫn dắt của các vị Tăng Bồ Tát.",
      c: "Tin vào phương pháp tu hành Ba la mật.",
      d: "Tin vào vô lượng công đức của chư Phật.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Tin căn bản là tự tin nơi bản tánh chơn như của mình (sẵn có tánh Phật), ưa nghĩ nhớ pháp chơn như.",
      b: "Sai. Đây là Tin Tăng.",
      c: "Sai. Đây là Tin Pháp.",
      d: "Sai. Đây là Tin Phật.",
    },
  },
  {
    question: "Việc bố thí 'nội tài' được giải thích cụ thể là hành động nào sau đây?",
    options: {
      a: "Giảng dạy giáo lý Phật pháp cho người khác.",
      b: "Làm cho người khác hết lo sợ trước tai nạn.",
      c: "Hy sinh thân mạng hoặc hiến máu để cứu người.",
      d: "Đem tiền bạc, của cải giúp đỡ người nghèo khó.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là Thí pháp.",
      b: "Sai. Đây là Thí vô úy.",
      c: "Đúng. Bố thí nội tài (của trong thân) là hy sinh thân mạng cứu người như cho máu, giúp hành giả bớt được tâm chấp ngã.",
      d: "Sai. Đây là Thí ngoại tài.",
    },
  },
  {
    question: "Trong ba phần của 'Tam tụ tịnh giới', phần giới nào tập trung vào việc làm lợi ích cho chúng sanh?",
    options: {
      a: "Đầu đà giới.",
      b: "Nhiêu ích hữu tình giới.",
      c: "Nhiếp thiện pháp giới.",
      d: "Nhiếp luật nghi giới.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Nhiêu ích hữu tình giới' nghĩa là làm lợi ích cho chúng sanh.",
      c: "Sai. Đây là làm các việc lành.",
      d: "Sai. Đây là bỏ các điều tội lỗi.",
    },
  },
  {
    question: "Tu 'Nhẫn nhục' theo văn bản bao gồm việc giữ tâm yên lặng trước 'Bát phong'. Bốn ngọn gió nào thuộc về 'thuận cảnh'?",
    options: {
      a: "Thạnh lợi, Danh dự, Khen, Vui.",
      b: "Suy bại, Huỷ báng, Chê bai, Khổ.",
      c: "Tham, Sân, Si, Tật đố.",
      d: "Sát sanh, Trộm cắp, Dâm dục, Nói dối.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Bốn ngọn gió thuận cảnh là Tài lợi (Thạnh lợi), Danh vọng (Danh dự), Khen ngợi và Vui, làm nổi lên sóng tham lam.",
      b: "Sai. Đây là bốn ngọn gió nghịch cảnh.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khi bị nghiệp chướng đời trước ngăn trở hoặc tà ma nhiễu hại, hành giả được khuyên tu tập Tinh tấn như thế nào?",
    options: {
      a: "Ngừng tu tập để chữa trị bịnh khổ trước.",
      b: "Tìm nơi thanh vắng để trốn tránh mọi sự ràng buộc.",
      c: "Chỉ tập trung vào việc bố thí tài vật để tích đức.",
      d: "Ngày đêm sáu thời lễ Phật, tụng kinh và thành tâm sám hối.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Hành giả phải tinh tấn dõng mãnh, ngày đêm 6 thời lễ Phật tụng kinh, thành tâm sám hối không bỏ phế để chướng ngại hết và căn lành tăng trưởng.",
    },
  },
  {
    question: "Trong pháp tu 'Chỉ, Quán', 'Chỉ' (định) và 'Quán' (huệ) có mối quan hệ như thế nào?",
    options: {
      a: "Tu 'Quán' quan trọng hơn vì nó tạo ra trí huệ.",
      b: "Hành giả phải hoàn thành tu 'Chỉ' mới được chuyển sang 'Quán'.",
      c: "Là hai giai đoạn tu tập riêng biệt, không liên quan đến nhau.",
      d: "Đồng thời tu tập cả hai, trong Chỉ có Quán và trong Quán có Chỉ.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Hai pháp này rất liên quan, hành giả phải tuỳ thuận quán sát, đồng thời tu cả Chỉ và Quán (tu một lần không rời nhau).",
    },
  },
  {
    question: "Khi thực hành tu 'Chỉ' (định), hành giả cần thực hiện việc 'thâu tâm' như thế nào nếu tâm vọng tưởng?",
    options: {
      a: "Dùng các tưởng niệm tốt đẹp để thay thế các tưởng niệm xấu.",
      b: "Liền đem tâm trở lại chánh niệm, biết rõ mọi thứ đều là 'Duy tâm'.",
      c: "Nương vào hơi thở để ổn định tâm ý.",
      d: "Nương vào hình sắc hoặc đất, nước, gió, lửa.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Vừa vọng động thì phải liền đem thâu tâm về chánh niệm, biết 'Chánh niệm' đây tức là 'Duy tâm', không có cảnh giới ngoài tâm.",
      c: "Sai. Văn bản nói 'không nương hơi thở'.",
      d: "Sai. Văn bản nói 'không nương hình sắc, tứ đại'.",
    },
  },
  {
    question: "Tại sao 'Chơn như tam muội' còn được gọi là 'Nhứt hạnh tam muội'?",
    options: {
      a: "Vì đây là pháp tam muội đầu tiên và duy nhất cần tu tập.",
      b: "Vì hành giả chỉ thực hiện một hành động duy nhất là ngồi thiền.",
      c: "Vì nó giúp nhận rõ Pháp thân Phật và thân chúng sanh bình đẳng không hai.",
      d: "Vì hành giả phải từ bỏ mọi hành vi để chỉ tập trung vào tâm.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Được Chơn như tam muội thì biết pháp giới là một (duy nhứt), chúng sanh và chư Phật bình đẳng không hai, mê ngộ đồng một tánh nên gọi là Nhứt hạnh tam muội.",
      d: "Sai.",
    },
  },
  {
    question: "Theo văn bản, yếu tố nào là 'căn bản' để đạt được thành công trên cả đường đời lẫn đường đạo?",
    options: {
      a: "Trì giới.",
      b: "Bố thí.",
      c: "Nhẫn nhục.",
      d: "Tinh tấn.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. LƯỢC GIẢI nói: 'Tinh tấn là một yếu tố để thành công trên đường đời cũng như trên đường Đạo. Người tu hành nếu thiếu tinh tấn thì không bao giờ thành đạo chứng quả được.'",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-15-phan-tin-tam-tu-hanh-tiep-theo-va-het',
  slug: 'bai-thu-15-phan-tin-tam-tu-hanh-tiep-theo-va-het',
  title: 'Bài Thứ 15 - Phần tín tâm, tu hành (tiếp theo và hết)',
  type: 'article',
  status: 'published',
  order: 17,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'chuong-thu-tu-tin-tam-tu-hanh', label: 'Chương thứ tư: TÍN TÂM TU HÀNH (2 bài, bài này thứ nhất)' },
        { id: 'bon-mon-tin-tam', label: 'A. Bốn món Tín tâm', indent: 1 },
        { id: 'tin-can-ban', label: 'Tín căn bản (tin tánh Phật của mình)', indent: 2 },
        { id: 'tin-phat', label: 'Tín Phật', indent: 2 },
        { id: 'tin-phap', label: 'Tín Pháp', indent: 2 },
        { id: 'tin-tang', label: 'Tín Tăng', indent: 2 },
        { id: 'nam-mon-tu-hanh', label: 'B. Năm món Tu hành (Lục độ):', indent: 1 },
        { id: 'bo-thi', label: 'Bố thí', indent: 2 },
        { id: 'tri-gioi', label: 'Trì giới', indent: 2 },
        { id: 'nhan-nhuc', label: 'Nhẫn nhục', indent: 2 },
        { id: 'tinh-tan', label: 'Tinh tấn', indent: 2 },
        { id: 'chi-quan', label: 'Chỉ, quán (Định, Huệ)', indent: 2 },
      ],
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/tr0U437iF3Q',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1eaV9Rtayf6nj3q97SVUJD',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài Thứ 15',
    passPercentage: 70,
    questions,
  },
}
export default lesson