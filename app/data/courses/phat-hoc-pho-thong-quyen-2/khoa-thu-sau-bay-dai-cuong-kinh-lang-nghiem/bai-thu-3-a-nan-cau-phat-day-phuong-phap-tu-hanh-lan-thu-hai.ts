import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="a-nan-cau-phat-day-phuong-phap-tu-hanh-lan-thu-hai">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Bài thứ ba: A Nan cầu Phật dạy phương pháp tu hành lần thứ hai</h2>
    <p>Ông A Nan đã bảy lần chỉ tâm đều không trúng, vì ông chấp vọng tưởng là tâm, nên bị Phật bác cả. Lần thứ hai ông đứng dậy chắp tay kính lạy, cầu Phật chỉ dạy phương pháp tu hành để thoát ly sanh tử luân hồi.</p>
    <p>A Nan thưa rằng: - Bạch Thế Tôn! Con là em Phật, tuy đã xuất gia, mà vẫn còn ỷ lại lòng thương yêu của Phật, chỉ lo học rộng nghe nhiều, không chuyên tu niệm, nên không chứng được đạo quả, chẳng hàng phục nổi tà chú của ngoại đạo Ta-Tỳ-Ca-La; trái lại, còn bị Ma Đăng Già bắt vào phòng dâm... phải nhờ Phật cứu độ. Vậy cúi xin Phật từ bi chỉ dạy cho con phương pháp tu hành, để phá trừ ác kiến và chứng thành đạo quả.</p>
    <p>Thưa thỉnh xong, A Nan và đại chúng kính cẩn và trông chờ lời Phật chỉ dạy.</p>

    <section id="phat-gan-hoi-tam-lan-thu-hai">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Phật gạn hỏi tâm lần thứ hai</h3>
      <p>Lúc bấy giờ Phật gạn hỏi lại cái "tâm" lần thứ hai, và bảo ông A Nan phải phân biệt rành rẽ cái nào là chơn tâm, và cái nào là vọng tâm.</p>
      <p>Phật dạy: Ông nay muốn đặng đạo vô thượng Bồ đề, thì điều cần nhứt là phải hiểu rõ hai món căn bản:</p>
      <ul>
        <li>Một căn bản của sanh tử luân hồi là vọng tâm.</li>
        <li>Một căn bản của Bồ đề, Niết bàn, là chơn tâm.</li>
      </ul>
      <p>Nếu ông nhận lầm căn bản của sanh tử (vọng tâm) làm nhân tu hành, thì không bao giờ giải thoát được. Cũng như người nhận giặc làm con, thì chỉ thêm bị phá hoại gia sản của mình mà thôi. Và cũng như người nấu cát làm cơm, dầu trải bao nhiêu năm cũng chẳng thành cơm được.</p>
      <p>Vậy nay ông muốn biết đường lối tu hành để ra khỏi sanh tử luân hồi, thì ông hãy nghe tôi hỏi đây:</p>
      <p>Phật liền đưa bàn tay, co lại năm ngón và hỏi ông A Nan rằng: Ông có thấy không?</p>
      <p>A-nan đáp: Bạch Thế Tôn, thấy.</p>
      <p>Phật hỏi: - Ông thấy cái gì?</p>
      <p>A Nan đáp: Con thấy Phật đưa bàn tay co năm ngón lại.</p>
      <p>Phật hỏi: Ông lấy cái gì để thấy và lấy cái gì làm tâm?</p>
    </section>

    <section id="a-nan-chap-suy-nghi-phan-biet-lam-tam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. A Nan chấp cái "suy nghĩ phân biệt" làm tâm</h3>
      <p>A Nan thưa: Con lấy "mắt" để thấy và cái "biết suy nghĩ phân biệt" làm tâm.</p>
      <p>Phật quở: Dốt lắm, A Nan! Cái đó không phải là tâm của ông.</p>

      <section id="luoc-giai-suy-nghi-phan-biet">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Chúng ta nên lưu ý: Thông thường ai cũng đều coi cái "suy nghĩ phân biệt" là tâm của mình, mà Phật lại nói "không phải tâm". Vậy chúng ta cần phải chín chắn suy xét chỗ đó.</p>
      </section>

      <p>A Nan hoảng hốt, đứng dậy thưa Phật: Bạch Thế Tôn, cái "suy nghĩ, phân biệt" này, nếu không phải là tâm của con thì gọi nó là cái gì?</p>
      <p>Phật dạy: Nó là "vọng tưởng" (vọng tâm). Bởi các ông từ hồi nào đến giờ, lầm nhận "vọng tưởng" làm "chơn tâm", cho nên nhiều kiếp trầm luân. Như người nhận giặc làm con, nên bị giặc phá hại.</p>
      <p>A Nan thưa: Bạch Thế Tôn, con vì thương Phật nên mới xuất gia, thì con mới dùng cái tâm này mà thương Phật. Con phụng thờ các đức Phật trong mười phương và làm tất cả các điều công đức, cũng dùng cái tâm này. Dầu cho con có làm các điều tội lỗi, hủy báng Phật pháp, đọa vào đại địa ngục đi nữa, thì con cũng dùng cái tâm này. Ngày hôm nay Phật nói "nó" không phải tâm của con, như thế thành như con không có tâm; nếu không có tâm, thì con đồng như cây, đá rồi! Cúi xin đức Thế Tôn từ bi chỉ giáo.</p>
      <p>Phật dạy rằng: Này A Nan, nếu ông chấp cái "suy nghĩ, phân biệt" là tâm của ông, thì khi rời cảnh vật hiện tiền, cái tâm "hiểu biết, phân biệt" ấy, cũng vẫn còn, thế mới phải là tâm của ông. Nếu rời cảnh vật hiện tiền, mà tâm hiểu biết phân biệt ấy mất đi, thì không phải là chơn tâm của ông rồi.</p>
      <p>Dầu cho ông diệt hết năm tri giác bên ngoài là thấy, nghe, hay, biết (năm giác quan), chỉ còn lưu lại cái "thầm thầm phân biệt" bên trong (thức thứ sáu) thì đó cũng là cái vọng tưởng phân biệt (ý thức thứ sáu) bóng dáng pháp trần, không phải là chơn tâm của ông.</p>
      <p>Này A-Nan, Ta không bắt buộc ông phải chấp cái "suy nghĩ phân biệt" đó là không phải tâm của ông; tôi chỉ bảo ông nên chín chắn suy xét: Nếu rời cảnh vật hiện tiền, mà cái "suy nghĩ phân biệt" này vẫn còn, thì mới phải thật là chơn tâm của ông.</p>
      <p>Còn nếu rời khỏi cảnh vật hiện tiền, mà cái "suy nghĩ phân biệt" này cũng mất luôn đi, thì rõ ràng nó là cái "vọng tưởng phân biệt" (vọng tâm) bóng dáng của sáu trần, chớ không phải là "chơn tâm thường trụ" của ông vậy.</p>
      <p>Nếu ông nhận cái "hư vọng phân biệt sanh diệt" (vọng tưởng) này làm tâm của ông, thì khi cảnh vật hiện tiền qua rồi, tâm ấy cũng theo cảnh vật mà diệt đi. Lúc bấy giờ thành ra ông không có tâm rồi. Nếu không có tâm, thì ông lấy cái gì để tu hành, và thành đạo chứng quả.</p>
      <p>Ông phải biết rằng: Trong thế gian tất cả người tu hành, không được thành đạo, đều do chấp lầm cái "vọng tưởng sanh diệt" (vọng tâm) này làm chân thật (chơn tâm).</p>
      <p>Chính ông ngày nay cũng thế, nên tuy học nhiều mà không được quả Thánh.</p>
    </section>

    <section id="a-nan-cau-phat-chi-day-lan-thu-ba">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. A-Nan cầu Phật chỉ dạy phương pháp tu hành lần thứ ba</h3>
      <p>A Nan cùng Đại chúng, nghe Phật nói như vậy, đều ngẩn ngơ và im lặng.</p>
      <p>Lúc bấy giờ ông A Nan cúi đầu lạy Phật, quỳ gối chắp tay vừa khóc lóc, vừa bạch Phật rằng: Con từ khi xuất gia theo Phật đến nay, vì ỷ lại là em của Phật, tin chắc sẽ nhờ oai thần Phật ban cho đạo quả, chẳng cần tu tánh cực nhọc; không ngờ ai tu nấy chứng, không thể thay thế cho nhau được.</p>
      <p>Hôm nay con mất "bản tâm" đi rồi, thân tuy xuất gia mà tâm chẳng vào đạo, chẳng khác nào đứa cùng tử bỏ cha trốn đi.</p>
      <p>Nay con mới biết học nhiều mà không tu cũng như người không học, và cũng như người nói đến đủ các thức ăn, rốt cuộc trong bụng vẫn đói.</p>
      <p>Bạch Thế Tôn, chúng con vì hai chứng phiền não và sở tri ràng buộc, nên không ngộ được chơn tâm. Cúi xin đức Thế Tôn thương xót kẻ bần cùng, chỉ dạy cho con phương pháp tu hành, để phát minh được tâm tánh.</p>
    </section>

    <section id="phat-chi-cai-thay-thuong-con">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. Phật chỉ cái "thấy" thường còn</h3>
      <p>Khi ấy Phật kêu A Nan, dạy rằng: - Vừa rồi ông nói "thấy năm ngón tay của Ta co nắm lại". Vậy thì sao có nắm tay? Và nhờ cái gì mà có cái thấy?</p>
      <p>A-Nan thưa: - Bạch Thế Tôn, nhân bàn tay của Phật co lại năm ngón, nên mới có nắm tay, và nhờ con mắt cho nên mới có cái thấy.</p>
      <p>Phật hỏi: Vậy thì "không bàn tay chẳng có ngón tay, cũng như không con mắt thời chẳng có cái thấy"; so sánh như thế có đúng không?</p>
      <p>A-Nan thưa: Bạch Thế Tôn, đúng.</p>
      <p>Phật dạy: Không đúng hẳn! Không bàn tay thì không có nắm tay thì phải, không con mắt chẳng phải cái "thấy" không có.</p>
      <p>Ông nên ra ngoài đường hỏi những người mù mắt: "Các người có thấy gì không?", thì họ đều trả lời với ông rằng: "Chỉ thấy tối đen". Như thế thì rõ ràng: Người mù không có con mắt, mà cái "thấy" cũng vẫn còn.</p>
      <p>Đây là cái bằng chứng: Mặc dù con mắt không có, và trần cảnh đối trước có tối và sáng khác nhau, nhưng cái thấy lúc nào cũng có (nói cái thấy là đại diện cho năm giác quan).</p>
      <p>A-Nan thưa: Người mù thấy tối, thì sao gọi là thấy được?</p>
    </section>

    <section id="phat-chi-tam-lan-thu-nhat">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. Phật chỉ tâm lần thứ nhứt</h3>
      <p>Phật hỏi A-Nan: Người sáng mắt ở trong nhà tối thấy tối, cùng với người mù mắt thấy tối, vậy hai cái tối đó có khác nhau không?</p>
      <p>A-Nan thưa: - Bạch Thế Tôn! Không khác.</p>
      <p>Phật hỏi: Người trong nhà tối thấy tối, nếu có người đem đèn vào, họ thấy được các vật, vậy cái đèn thấy hay con mắt thấy?</p>
      <p>A-Nan thưa: Mắt thấy chớ không phải đèn thấy.</p>
      <p>Phật dạy: Cũng thế, người mù mắt khi lột mây rồi, thấy được các cảnh vật, đó là tâm thấy chớ không phải mắt thấy.</p>
      <p>Phật dạy tiếp: - Cái đèn chỉ làm cho sáng các vật, còn cái thấy là con mắt (dụ cho tâm) chớ không phải đèn (dụ con mắt). Lên một tầng nữa: Con mắt chỉ làm cho tỏ rõ các vật, còn cái thấy là tâm, chớ không phải con mắt (đây là lần thứ nhứt Phật chỉ tâm).</p>
      <p>A-Nan và đại chúng nghe Phật giảng dạy như thế rồi, đều im lặng, nhưng trong tâm thật chưa hiểu, nên đều kính cẩn chắp tay, để chờ Phật chỉ dạy thêm.</p>

      <section id="luoc-giai-phat-chi-tam-lan-thu-nhat">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Trong đoạn này, xin nói thêm tỷ dụ này cho dễ hiểu: Con mắt của người cũng như bóng đèn điện, còn cái "thấy" của người cũng như điện. Khi dây đứt (dụ dây thần kinh đứt) bóng hư (dụ mắt mù) thì đèn không cháy, chớ không phải điện mất (không phải cái thấy mất). Đến khi thay bóng mới nối dây lại, thì điện cháy trở lại: Không phải do bóng hay do dây mới có điện.</p>
        <p>Cái "thấy" của người cũng thế: Khi mắt bị mây che thì chỉ thấy tối, chớ không phải cái "thấy" mất, đến khi lột mây rồi, thì cái "thấy" hiện ra, không phải do con mắt mới có cái thấy. Đoạn này Phật chỉ rõ cái "thấy" là tâm.</p>
      </section>
    </section>

    <section id="phat-chi-tam-lan-thu-hai">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. Phật chỉ tâm lần thứ hai</h3>
      <p>Khi đó Phật đưa bàn tay lên, năm ngón co lại rồi mở ra và hỏi ông A Nan: - Ông có thấy cái gì không?</p>
      <p>A Nan thưa: - Thấy Phật đưa tay lên co vào rồi mở ra.</p>
      <p>Phật hỏi: Tự cái tay của Ta co mở, hay "cái thấy" của ông co mở?</p>
      <p>A-Nan thưa: Tự tay Phật co mở, chứ "cái thấy" của con không co mở.</p>
      <p>Phật khen: Phải lắm.</p>
      <p>Phật lại phóng một đạo hào quang trên vai phía mặt của A Nan; A-Nan liền xoay đầu ngó về phía bên mặt. Phật lại phóng hào quang trên vai phía trái của A-Nan; A-Nan xoay đầu ngó qua phía trái.</p>
      <p>Phật hỏi: Cái đầu của ông hôm nay tại sao xoay qua lắc lại như vậy?</p>
      <p>A-Nan thưa: Vì Phật phóng hào quang trên hai vai của con, nên con xoay qua lắc lại để xem.</p>
      <p>Phật hỏi: Vậy cái đầu của ông lắc, hay cái thấy của ông lắc?</p>
      <p>A-Nan thưa: Tự cái đầu con xoay qua lắc lại, chớ cái thấy của con không có xoay lắc.</p>
      <p>Phật hỏi: - Cái nào động, cái nào tịnh?</p>
      <p>A-Nan thưa: - Cái đầu của con có động và tịnh (dừng) chứ cái thấy của con không có động và tịnh.</p>
      <p>Phật nói: Phải.</p>
      <p>Phật dạy tiếp: - Cái nào có co, có mở, có động, có tịnh, có sanh, có diệt, thì cái đó là vọng, thuộc về "khách" không phải ông. Còn cái nào không động tịnh, co mở, không sanh diệt, thì cái đó là "chơn", thuộc về "chủ" chính là ông. Như thế chơn và vọng rất rõ ràng, ông còn chưa hiểu hay sao!</p>
      <p>Tại sao từ hồi nào đến giờ, các ông cứ nhận cái vọng thân tứ đại giả hợp này, cho là thật "thân" của mình; cái vọng tưởng sanh diệt này, cho là thật "tâm" của mình; cảnh vật giả tạm, cho là thật "cảnh" của mình, mà lại bỏ cái chơn tâm thường còn bất sanh bất diệt của mình sẵn có kia đi? Bởi thế nên các ông phải nhiều kiếp sanh tử luân hồi, thật là rất oan uổng!</p>

      <section id="luoc-giai-phat-chi-tam-lan-thu-hai">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Đoạn này Phật chỉ cái "thấy" không co mở, và không sanh, diệt, động, tịnh, đó là chơn tâm lưu lộ.</p>
      </section>
    </section>

    <section id="a-nan-cau-phat-chi-day-chan-va-vong">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII. A Nan cầu Phật chỉ dạy ở nơi thân này cái nào "chơn", cái nào "vọng"</h3>
      <p>Khi ấy A-Nan và đại chúng được nghe Phật tạm chỉ "cái thấy không động tịnh co mở là Tâm", nên tất cả đều hớn hở vui mừng, và nghĩ rằng: Từ vô thỉ đến nay, tự mình làm mất bản tâm, nhận cái vọng tưởng phân biệt theo bóng dáng của trần cảnh làm tâm, ngày hôm nay mới ngộ được Tâm mình, nên hết sức vui mừng. Cũng như đứa con nhỏ khát sữa đã lâu, nay được gặp bà từ mẫu, nên ông và đại chúng cầu Phật chỉ rõ ở nơi thân tâm hiện tiền đây, cái nào chơn thật không sanh diệt và cái nào hư vọng có sanh diệt.</p>
    </section>

    <section id="vua-ba-tu-nac-dung-day-hoi-tiep">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX. Vua Ba Tư Nặc đứng dậy hỏi tiếp</h3>
      <p>Khi ấy vua Ba-tư-nặc đứng dậy thưa Phật: - Bạch Thế Tôn, lúc trước chưa thọ giáo với Phật, con nghe phái ngoại đạo Ca Chiên Diên và Tỳ La Chi Tử đều nói: "Thân này sau khi chết rồi mất hẳn, gọi là Niết bàn".</p>
      <p>Hôm nay con tuy được Phật chỉ dạy, nhưng vẫn còn hồ nghi: Làm sao biết rõ và chứng chắc cái tâm này không sanh diệt. Xin Phật từ bi chỉ dạy cho chúng con.</p>
    </section>

    <section id="phat-chi-tam-lan-thu-ba">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">X. Phật chỉ tâm lần thứ ba</h3>
      <p>Phật hỏi: - Đại vương! Cái thân của ông hiện tại đây, nó bền chắc như ngọc kim cương, còn mãi không hư hoại, hay là phải hoại diệt?</p>
      <p>Vua đáp: - Bạch Thế Tôn, thân con ngày nay đây, rốt cuộc rồi cũng bị hoại diệt.</p>
      <p>Phật hỏi: - Ông chưa chết, làm sao biết nó sẽ bị hoại diệt?</p>
      <p>Vua đáp: - Bạch Thế Tôn, cái thân vô thường của con đây, tuy chưa chết, nhưng hiện tiền nó đã tàn tạ dần! Ngày qua, rồi lại ngày qua! Mỗi niệm qua, qua từ sát na (tíc-tắc) không dừng!... cũng như củi đốt thành tro, cháy dần cho đến lúc tiêu tan! Vì thế nên con biết, thân này nhứt định sẽ tiêu diệt.</p>
      <p>Phật nói: - Phải!</p>
      <p>Phật lại hỏi: - Đại vương! Thân thể ông đâu phải tiêu diệt liền bây giờ?</p>
      <p>Vua đáp: - Bạch Thế Tôn, ngày qua tháng lại, hết hạ đến đông, nó thầm già chết, cho đến ngày nay, đầu bạc răng rụng, chân lỏng gối dùn, mắt mờ tai lãng, già nua đến thế này, mà con thật không hay không biết!</p>
      <p>Bạch Thế Tôn, khi con hai mươi tuổi, tuy nói rằng tuổi trẻ, thật ra nhan sắc đã già hơn khi mười tuổi. Khi ba mươi tuổi lại già hơn khi hai mươi tuổi. Cho đến ngày nay, sáu mươi hai tuổi, lại già hơn khi năm mươi tuổi.</p>
      <p>Nó âm thầm già chết, lấy trong khoảng thời gian mười năm mà nói như vậy. Nếu chính chắn suy nghĩ, thì cái già, chết này, không phải hạn định trong khoảng mười năm hay hai mươi năm, mà thật ra, nó già từng năm, từng tháng, từng ngày. Nếu suy nghĩ kỹ hơn nữa, thì nó già, chết từng phút, từng giây và từng sát na (tíc-tắc)! Năm nay già hơn năm rồi, tháng này già hơn tháng trước, ngày hôm nay già hơn ngày hôm qua, giờ này già hơn giờ trước. Phút này già hơn phút trước, cho đến sát na này cũng già hơn sát na trước. Thế nên con biết, thân này rốt cuộc rồi cũng tiêu diệt.</p>

      <section id="luoc-giai-phat-chi-tam-lan-thu-ba">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Cũng như cái đồng hồ, vì có chạy từng giây, cho nên mới qua từng phút. Bởi có đi từng phút, nên mới chỉ đến từng giờ, và ngày v.v... thân này già chết cũng thế.</p>
      </section>

      <p>Phật hỏi: - Đại vương! Ông thấy cái thân thể của ông âm thầm già chết như thế, nên ông lo buồn; vậy ở nơi thân thể sanh diệt, già chết này, ông có biết được cái gì chẳng sanh diệt già chết không?</p>
      <p>Vua Ba Tư Nặc chắp tay cung kính thưa: - Bạch Thế Tôn, con thật không biết?</p>
    </section>

    <section id="phat-chi-cai-thay-khong-sanh-diet">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XI. Phật chỉ cái "thấy" không sanh diệt</h3>
      <p>Phật dạy rằng: - Tôi nay chỉ cho ông thấy cái không sanh diệt.</p>
      <p>Này đại vương, khi ông mấy tuổi mới thấy được nước sông Hằng?</p>
      <p>Vua đáp: - Khi lên ba tuổi, con được mẹ bồng đến yết kiến thần Tỳ Bà Thiên (thần Trường Thọ) đi ngang qua sông này, nên lúc bấy giờ, con đã thấy được sông Hằng.</p>
      <p>Phật hỏi: - Hôm nay ông thấy sông Hằng, vậy cái "thấy" đó có khác không?</p>
      <p>Vua thưa: - Khi con ba tuổi thấy sông Hằng, đến lúc ba mươi tuổi và nay được sáu mươi hai tuổi thấy sông Hằng cũng đều không khác.</p>
      <p>Phật dạy: - Ngày nay ông lo buồn cho thân ông già yếu, đầu bạc mặt nhăn, không được như lúc còn trẻ. Vậy nay sáu mươi hai tuổi, ông xem thấy sông Hằng, cùng với khi còn trẻ thấy sông Hằng, cái "thấy" đó có già trẻ chi không?</p>
      <p>Vua Ba Tư Nặc thưa: Bạch Thế Tôn, cái "thấy" không có già trẻ.</p>
      <p>Phật dạy: - Này Đại vương, thân thể mặt mày ông tuy già, mà cái "thấy" vẫn không già, vậy cái nào có già, thì cái ấy sẽ bị biến đổi, tiêu diệt; còn cái nào không già, thì cái đó không bị biến đổi tiêu diệt. Nó đã không sanh diệt, thì đâu có bị ông làm cho nó sanh tử luân hồi được.</p>
      <p>Rõ ràng như thế, ông không hiểu sao mà còn dẫn lời của ngoại đạo Mạt-già-lê nói: Thân này chết rồi hoàn toàn diệt mất?</p>
      <p>Vua cùng đại chúng nghe Phật dạy rồi, đều biết rằng: Người chết rồi, là tâm bỏ thân này thọ thân khác, không phải mất hẳn. Ai nấy đều hớn hở vui mừng vì đặng lợi ích chưa từng có.</p>

      <section id="luoc-giai-cai-thay-khong-sanh-diet">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Đoạn này Phật chỉ thấy không già trẻ, sanh diệt đó là Tâm.</p>
      </section>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo lời tự thuật của ông A Nan, nguyên nhân chính nào khiến ông không chứng được đạo quả và bị vướng vào nạn Ma Đăng Già?',
    options: {
      a: 'Ông chưa tìm được một vị thầy đủ từ bi để chỉ dạy phương pháp tu hành đúng đắn.',
      b: 'Ông ỷ lại vào lòng thương của Phật, chỉ lo học rộng nghe nhiều mà không chuyên tu niệm.',
      c: 'Do ông bị ác kiến và ngoại đạo Ta-Tỳ-Ca-La lôi kéo ngay từ khi mới xuất gia.',
      d: 'Ông không có đủ trí tuệ để hiểu được những giáo lý thâm sâu mà Phật đã truyền dạy.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Kinh không đề cập đến việc thiếu thầy từ bi [1].',
      b: 'Đúng. A Nan tự nhận vì "ỷ lại lòng thương yêu của Phật, chỉ lo học rộng nghe nhiều, không chuyên tu niệm" nên không chứng quả [1].',
      c: 'Sai. Ma Đăng Già và tà chú là nạn ông gặp phải do thiếu tu niệm, không phải bị lôi kéo từ đầu [1].',
      d: 'Sai. Không phải do ông thiếu trí tuệ [1].',
    },
  },
  {
    question: 'Phật đưa ra ví dụ "nấu cát làm cơm" để cảnh báo điều gì trong việc tu hành?',
    options: {
      a: 'Sự kiên trì tu tập trong nhiều năm là chưa đủ nếu không có sự hỗ trợ từ ngoại lực.',
      b: 'Việc nhận lầm vọng tâm làm nhân tu hành thì không bao giờ đạt được kết quả giải thoát.',
      c: 'Việc học rộng nghe nhiều mà không tu tập cũng giống như nấu cát mà không có nước.',
      d: 'Người tu hành cần phải biết phân biệt giữa thực phẩm vật chất và thực phẩm tâm linh.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Không liên quan đến hỗ trợ từ ngoại lực [2].',
      b: 'Đúng. Phật dạy nếu nhận lầm vọng tâm làm nhân tu hành thì không bao giờ giải thoát, cũng như người nấu cát làm cơm dẫu trải bao năm cũng không thành [2].',
      c: 'Sai. Ví dụ này dùng để chỉ sai lầm khi lấy vọng tâm làm nhân tu [2].',
      d: 'Sai. Không có sự phân biệt về các loại thực phẩm ở đây [2].',
    },
  },
  {
    question: 'Tại sao Phật lại quở trách khi A Nan cho rằng cái "suy nghĩ phân biệt" là tâm của mình?',
    options: {
      a: 'Vì cái suy nghĩ phân biệt đó thuộc về "thức thứ tám" chứ không phải "thức thứ sáu".',
      b: 'Vì cái suy nghĩ đó luôn luôn thiện, không bao giờ dẫn đến các hành vi tội lỗi.',
      c: 'Vì con người không thực sự có tâm mà chỉ có các giác quan vật lý.',
      d: 'Vì cái suy nghĩ đó sẽ mất đi khi rời khỏi các cảnh vật (sáu trần) hiện tiền.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Cái suy nghĩ phân biệt thầm thầm bên trong là ý thức thứ sáu [3].',
      b: 'Sai. Suy nghĩ phân biệt là hư vọng, không phải luôn thiện [3].',
      c: 'Sai. Con người có chơn tâm [3].',
      d: 'Đúng. Phật phân tích rằng nếu rời khỏi cảnh vật hiện tiền mà cái suy nghĩ mất đi, thì nó chỉ là vọng tưởng bóng dáng của trần cảnh, không phải chơn tâm [3].',
    },
  },
  {
    question: 'Trong ví dụ về người mù thấy tối, Phật muốn chứng minh điều gì về cái "thấy"?',
    options: {
      a: 'Bóng tối là bản chất thật sự của mọi cái thấy khi không có ánh sáng.',
      b: 'Cái thấy và con mắt là một thể thống nhất, không thể tách rời.',
      c: 'Người mù không có khả năng thấy nên họ luôn sống trong sự nhầm lẫn về tâm.',
      d: 'Cái thấy vẫn tồn tại dù con mắt bị hư hoại, vì cái thấy thuộc về tâm.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Bóng tối là trần cảnh, không phải bản chất cái thấy [4].',
      b: 'Sai. Con mắt và cái thấy có thể tách rời [4, 5].',
      c: 'Sai. Người mù vẫn có khả năng thấy được bóng tối đen [4].',
      d: 'Đúng. Việc người mù không có mắt vẫn có cái thấy (thấy tối) chứng minh cái thấy là ở tâm chứ không mất theo con mắt [4, 5].',
    },
  },
  {
    question: 'Dựa trên cuộc đối thoại về chuyển động của đầu và hào quang, đặc điểm nào sau đây thuộc về "Chủ" (Chơn)?',
    options: {
      a: 'Luôn luôn biến đổi theo hào quang và các tác động từ bên ngoài.',
      b: 'Là cái có thể nắm bắt được bằng năm ngón tay khi co mở bàn tay.',
      c: 'Không có sự xoay lắc, không có động tịnh, không có sanh diệt.',
      d: 'Cần phải có sự dẫn dắt của các giác quan thì mới có thể tồn tại.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Sự biến đổi là đặc tính của "khách" (vọng) [6].',
      b: 'Sai. Co mở là đặc tính của bàn tay (cảnh) [6].',
      c: 'Đúng. Cái nào không động tịnh, không co mở, không sanh diệt thì cái đó là "chơn", thuộc về "chủ" [6].',
      d: 'Sai. Cái "chủ" luôn thường trụ độc lập [6].',
    },
  },
  {
    question: 'Vua Ba Tư Nặc đã dùng quan sát nào để nhận ra thân thể mình đang âm thầm già chết?',
    options: {
      a: 'Lời dạy của các ngoại đạo như Ca Chiên Diên về việc thân sau khi chết là mất hẳn.',
      b: 'Sự thay đổi của nhan sắc và sức khỏe qua từng giai đoạn 10 năm, và sâu hơn là từng sát na.',
      c: 'Sự kiện con sông Hằng khô cạn theo thời gian khi ông quan sát nó.',
      d: 'Việc ông không còn nhìn thấy được các vị thần như Tỳ Bà Thiên nữa.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Lời ngoại đạo là một mối hồ nghi của vua, không phải thứ vua quan sát [7].',
      b: 'Đúng. Nhà vua nhận ra sự già đi qua các độ tuổi (20, 30, 62) và sâu sắc hơn là thân thể già chết theo từng năm, tháng, ngày, giờ, phút, sát na [7].',
      c: 'Sai. Sông Hằng dùng để chứng minh tánh không sanh diệt [8].',
      d: 'Sai. Thần Tỳ Bà Thiên gắn liền với việc thấy sông Hằng năm 3 tuổi [8].',
    },
  },
  {
    question: 'Tại sao cái thấy sông Hằng của vua Ba Tư Nặc lúc 3 tuổi và 62 tuổi lại chứng minh được tánh không sanh diệt?',
    options: {
      a: 'Vì trí nhớ của nhà vua về dòng sông không bao giờ bị phai nhạt theo thời gian.',
      b: 'Vì nhà vua luôn giữ được tâm hồn trẻ trung như lúc 3 tuổi khi nhìn dòng sông.',
      c: 'Vì dù thân hình có già nua, nhăn nheo nhưng bản chất cái thấy vẫn không có sự già hay trẻ.',
      d: 'Vì dòng sông Hằng là vĩnh cửu nên cái thấy đối với nó cũng trở nên vĩnh cửu.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Ví dụ không nhấn mạnh vào trí nhớ [8].',
      b: 'Sai. Không đề cập đến tâm hồn trẻ trung [8].',
      c: 'Đúng. Phật chỉ ra rằng dù mặt mày già đi, cái "thấy" vẫn không bị già. Cái không già thì không bị biến đổi, tiêu diệt [8].',
      d: 'Sai. Tính vĩnh cửu nằm ở bản tánh cái thấy [8].',
    },
  },
  {
    question: 'Trong lược giải, tác giả so sánh "điện" và "bóng đèn" để làm rõ mối quan hệ nào?',
    options: {
      a: 'Tánh thấy là điện, còn con mắt là bóng đèn; đèn hư không có nghĩa là điện mất.',
      b: 'Người tu hành cần phải tích lũy năng lượng điện thì bóng đèn trí tuệ mới sáng.',
      c: 'Chơn tâm là bóng đèn sáng, còn vọng tâm là bóng đèn bị dây thần kinh đứt.',
      d: 'Điện là ngoại cảnh tác động vào bóng đèn để tạo ra cái thấy.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Con mắt được ví như bóng đèn, cái "thấy" như điện. Mắt mù giống như dây đứt bóng hư, đèn không cháy nhưng bản chất điện (cái thấy) thì không mất [6].',
      b: 'Sai. Không có yếu tố tích lũy năng lượng [6].',
      c: 'Sai. Không so sánh vọng tâm với bóng đèn hư [6].',
      d: 'Sai. Điện đại diện cho tâm, không phải ngoại cảnh [6].',
    },
  },
  {
    question: 'Hệ quả của việc nhận "vọng tưởng sanh diệt" làm tâm chơn thật là gì?',
    options: {
      a: 'Tâm của người đó sẽ biến mất hoàn toàn sau khi chết theo quan điểm của Niết bàn.',
      b: 'Người tu hành sẽ mãi trầm luân trong sanh tử và không thể thành đạo quả.',
      c: 'Người đó sẽ trở nên giống như cây đá vì không có cảm xúc phân biệt.',
      d: 'Người đó sẽ lập tức bị đọa vào đại địa ngục vì hủy báng Phật pháp.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Chết mất hẳn là quan điểm của ngoại đạo [7].',
      b: 'Đúng. Phật dạy nếu chấp nhận vọng tưởng sanh diệt làm chơn tâm thì phải chịu nhiều kiếp sanh tử luân hồi, tu hành không được thành đạo [3, 6].',
      c: 'Sai. A Nan lo sợ mình thành cây đá, đó không phải hệ quả tu học [3].',
      d: 'Sai. Đại địa ngục là giả định của A Nan khi tranh luận [3].',
    },
  },
  {
    question: 'A Nan ví mình như "đứa cùng tử bỏ cha trốn đi" nhằm thể hiện trạng thái tâm lý nào?',
    options: {
      a: 'Lòng kiêu hãnh vì cuối cùng cũng đã hiểu được giáo lý bí truyền của Phật.',
      b: 'Sự hối hận vì đã đánh mất bản tâm và nhận ra việc học nhiều mà không tu là vô ích.',
      c: 'Sự oán trách vì Phật là anh mình mà không ban cho đạo quả một cách dễ dàng.',
      d: 'Cảm giác tuyệt vọng vì nghĩ rằng mình không có tâm và sẽ trở thành cây đá.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. A Nan đang vô cùng sám hối [9].',
      b: 'Đúng. A Nan khóc lóc, xót xa vì thấy mình tuy xuất gia nhưng tâm chưa vào đạo, làm mất bản tâm, hối hận vì học nhiều mà không tu [9].',
      c: 'Sai. A Nan nhận lỗi do sự ỷ lại của bản thân [9].',
      d: 'Sai. Sự tuyệt vọng thành cây đá xuất hiện ở giai đoạn tranh luận trước đó [3].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-3-a-nan-cau-phat-day-phuong-phap-tu-hanh-lan-thu-hai',
  slug: 'bai-thu-3-a-nan-cau-phat-day-phuong-phap-tu-hanh-lan-thu-hai',
  title: 'Bài Thứ 3 - A Nan cầu Phật dạy phương pháp tu hành lần thứ hai',
  type: 'article',
  status: 'published',
  order: 4,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-25',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-3-a-nan-cau-phat-day-phuong-phap-tu-hanh-lan-thu-hai/Ph%C3%A2n_bi%E1%BB%87t_Ch%C6%A1n_T%C3%A2m%2C_V%E1%BB%8Dng_T%C3%A2m.png',
      readingContent,
      tableOfContents: [
        { id: 'a-nan-cau-phat-day-phuong-phap-tu-hanh-lan-thu-hai', label: 'I. A Nan cầu Phật dạy phương pháp tu hành lần thứ hai' },
        { id: 'phat-gan-hoi-tam-lan-thu-hai', label: 'II. Phật gạn hỏi tâm lần thứ hai', indent: 1 },
        { id: 'a-nan-chap-suy-nghi-phan-biet-lam-tam', label: 'III. A Nan chấp cái "suy nghĩ phân biệt" làm tâm', indent: 1 },
        { id: 'luoc-giai-suy-nghi-phan-biet', label: 'Lược giải', indent: 2 },
        { id: 'a-nan-cau-phat-chi-day-lan-thu-ba', label: 'IV. A-Nan cầu Phật chỉ dạy phương pháp tu hành lần thứ ba', indent: 1 },
        { id: 'phat-chi-cai-thay-thuong-con', label: 'V. Phật chỉ cái "thấy" thường còn', indent: 1 },
        { id: 'phat-chi-tam-lan-thu-nhat', label: 'VI. Phật chỉ tâm lần thứ nhứt', indent: 1 },
        { id: 'luoc-giai-phat-chi-tam-lan-thu-nhat', label: 'Lược giải', indent: 2 },
        { id: 'phat-chi-tam-lan-thu-hai', label: 'VII. Phật chỉ tâm lần thứ hai', indent: 1 },
        { id: 'luoc-giai-phat-chi-tam-lan-thu-hai', label: 'Lược giải', indent: 2 },
        { id: 'a-nan-cau-phat-chi-day-chan-va-vong', label: 'VIII. A Nan cầu Phật chỉ dạy cái nào "chơn", cái nào "vọng"', indent: 1 },
        { id: 'vua-ba-tu-nac-dung-day-hoi-tiep', label: 'IX. Vua Ba Tư Nặc đứng dậy hỏi tiếp', indent: 1 },
        { id: 'phat-chi-tam-lan-thu-ba', label: 'X. Phật chỉ tâm lần thứ ba', indent: 1 },
        { id: 'luoc-giai-phat-chi-tam-lan-thu-ba', label: 'Lược giải', indent: 2 },
        { id: 'phat-chi-cai-thay-khong-sanh-diet', label: 'XI. Phật chỉ cái "thấy" không sanh diệt', indent: 1 },
        { id: 'luoc-giai-cai-thay-khong-sanh-diet', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-3-a-nan-cau-phat-day-phuong-phap-tu-hanh-lan-thu-hai/Awakening_the_True_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/PHeNhq5VSMo',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1DPgIh6xWtzxypqiE3fIss?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - A Nan cầu Phật dạy phương pháp tu hành lần thứ hai',
    passPercentage: 70,
    questions,
  },
}

export default lesson
