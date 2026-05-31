import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bai-thu-muoi-a-nan-thuat-lai-cho-minh-da-ngo">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI</h2>

    <section id="i-a-nan-thuat-lai-cho-minh-da-ngo-va-phat-chi-day-phuong-phap-tu-hanh-de-nhap-chon-tam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. A NAN THUẬT LẠI CHỖ MÌNH ĐÃ NGỘ VÀ PHẬT CHỈ DẠY PHƯƠNG PHÁP TU HÀNH ĐỂ NHẬP CHƠN TÂM</h3>
      <p>Ông A Nan và đại chúng được Phật dạy bảo rất tường tất, nên các điều nghi lầm đã trừ hết, ngộ được chơn tâm (thật tướng), nhưng chưa biết làm sao chứng nhập, nên các ông cúi đầu lạy Phật, chắp tay kính cẩn thưa rằng:</p>
      <p>Bạch Thế Tôn, Ngài đã dùng đủ phương tiện dẫn dắt chúng con ra khỏi sông mê bể khổ. Hôm nay, chúng con tuy ngộ được chơn tâm của mình, biến khắp cả mười phương thế giới, nhưng còn bị Như Lai quở trách, học nhiều mà không tu, chẳng bằng người lo tu tập.</p>
      <p>Nay chúng con cũng như người bần cùng vất vả, được vị Thiên Vương ban cho cái nhà lầu tốt đẹp, song chưa biết làm sao vào nhà. Cúi xin đức Như Lai chỉ dạy cho chúng con, được vào tri kiến của Phật (chứng nhập chơn tâm).</p>
    </section>

    <section id="ii-phat-chi-day-phuong-phap-tu">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. PHẬT CHỈ DẠY PHƯƠNG PHÁP TU</h3>
      <p>Phật dạy A Nan và đại chúng: Các ông nếu phát tâm Bồ đề, đối với các pháp môn tu hành chí quyết tăng tấn, tâm không giải đãi thì khi mới phát tâm, trước phải phân biệt rành rõ hai nghĩa quyết định.</p>
    </section>

    <section id="iii-nghia-quyet-dinh-thu-nhut">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. NGHĨA QUYẾT ĐỊNH THỨ NHỨT</h3>
      <p>Này A Nan! Các ông muốn bỏ Tiểu thừa Thinh văn, tu theo Đại thừa Bồ tát, vào tri kiến của Phật, thì trước phải quan sát cái nhơn địa phát tâm cùng với quả vị sẽ chứng là đồng hay khác?</p>
      <p>Nếu các ông dùng cái vọng tâm sanh diệt làm nhơn tu hành, mà mong cầu cho đặng quả Phật, thường còn không sanh diệt thì không thể được. Đây là điều quyết định thứ nhứt.</p>

      <section id="luoc-giai-1">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đoạn trước Phật đã dạy: nếu dùng vọng tâm làm tu nhơn, mà muốn đặng quả thường trụ, thì như người nấu cát muốn cho thành cơm, dầu trải qua bao nhiêu kiếp cũng không thể được. Hành giả phải an trụ nơi chơn tâm làm nhơn địa tu hành, thì mới đặng quả Phật bất sanh bất diệt.</p>
      </section>

      <p>A Nan! Ông hãy xét coi: trong thế gian những vật gì có làm ra, đều phải hoại diệt, chứ chưa từng nghe cái hư không có hoại diệt bao giờ, vì hư không không phải là vật bị làm ra vậy (hư không dụ chơn tâm, các vật là dụ vọng tâm có sanh diệt).</p>
      <p>Xét lại trong thân ông, những vật cứng dẻo (da, thịt, gân, xương) là đất; những vật đượm ướt (máu, huyết, mồ hôi, mỡ) là nước; chất ấm, nóng trong người thuộc về lửa; những vật lưu động (hơi thở ra vào) là thuộc về gió. Do bốn món này nó phiền phược và phân chia cái chơn tâm của ông, thành ra có thấy, nghe, hay, biết, từ thỉ chí chung năm lớp ngầu đục (ngũ trược).</p>
      <p>Tỷ dụ như nước trong sạch có người lấy bụi đất quăng vào, thì đất sẽ mất chất cứng, còn nước mất chất trong sạch, trở thành ngầu đục, nên gọi là ô trược.</p>
      <p>A Nan! Nay ông muốn cho cái thấy, nghe, hay, biết (các giác quan) trở lại để hiệp với bốn đức Niết bàn của Như Lai: thường, lạc, ngã, tịnh, thì trước ông phải lựa ra cái gốc rễ sanh tử (vọng tâm) và y theo chơn tâm thanh tịnh viên mãn bất sanh bất diệt làm nhơn địa tu hành.</p>

      <section id="luoc-giai-2">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Vì còn ở trong vòng mê nên gọi là các giác quan: thấy, nghe, hay, biết; đến khi ngộ rồi thì các giác quan này trở lại thành bốn đức Niết bàn: thường, lạc, ngã, tịnh.</p>
        <p>Chúng ta cũng nên phân biệt cho rõ nghĩa: 1. chơn tâm, 2. các giác quan, 3. vọng niệm phân biệt. Như nước biển trong veo (dụ chơn tâm) chảy vào các sông ngòi lẫn lộn bùn đục (dụ cho chơn tâm lưu lộ nơi các căn, thành các giác quan; đục là dụ còn ở nơi mê) nổi sóng ba đào (dụ cho vọng niệm phân biệt).</p>
      </section>

      <p>Các ông hãy xoay cái hư vọng sanh diệt trở lại chơn tâm thanh tịnh không sanh diệt; phải lấy chơn tâm không sanh diệt này làm nhơn địa tu hành, thì sau mới chứng được quả Phật thường trụ.</p>
      <p>Cách tu hành cũng như lóng nước. Nước đục để yên tịnh trong một cái bình, để lâu thì những bụi cát từ từ chìm lặn, mà nước trong hiện ra; hễ càng yên tịnh thì nước càng trong. Đây là dụ cho giai đoạn thứ nhứt, khi mới hàng phục được phiền não khách trần (phiền não vừa lặng). Đến chừng lọc bỏ cặn đục chỉ còn toàn là nước trong, là dụ cho giai đoạn thứ hai, khi đã đoạn trừ căn bản vô minh.</p>
      <p>Đến khi chỉ còn hoàn toàn là nước trong, thì dù lắc cho mấy nó cũng vẫn trong. Còn khi đoạn được căn bản vô minh, chỉ còn chơn tâm thanh tịnh hiện tiền, lúc bấy giờ dầu có tạo tác thi vi làm đủ mọi việc, song cũng đều là chơn, vẫn hiệp với đức tánh thanh tịnh mầu nhiệm của Niết bàn, không còn bị phiền não nhiễu loạn.</p>

      <section id="luoc-giai-3">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đoạn này hay lắm; Phật dạy lối tu rất rõ ràng và thật tế. Hiệp với đoạn trước Phật dạy: khi đối cảnh không khởi phân biệt, thì vọng niệm chẳng sanh. Vọng niệm không sanh thời chơn tâm tự hiện.</p>
        <p>Cũng như nước đứng trong, thì cặn cáu lóng chìm. Lóng càng lâu thì nước càng trong. Đến khi dứt sạch căn bản vô minh, chỉ còn toàn thể chơn tâm, thì hành động thi vi chi cũng đều là thanh tịnh. Nên kinh nói: Như Lai án túc hải ấn phát quang v.v... (Phật vừa để chơn, thì biển trong in ánh sáng). Như nước đã lọc bỏ cặn rồi thì lắc mấy cũng vẫn trong. Đoạn này cũng chỉ rõ cái nghĩa thành Phật rồi không trở lại làm chúng sanh.</p>
        <p>Các đạo khác tu hành dẫu cao siêu cho mấy, chẳng qua cũng như nước lóng mà chưa lọc bỏ được cặn. Lâu lâu phiền não nổi lên, thì phải đọa trở lại, nên gọi là hữu lậu (còn sa rớt).</p>
      </section>
    </section>

    <section id="iv-nghia-quyet-dinh-thu-hai">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. NGHĨA QUYẾT ĐỊNH THỨ HAI</h3>
      <p>A Nan, các ông phát tâm dõng mãnh, quyết định dẹp trừ các tướng hữu vi, cầu quả đại thừa, thì cần phải xét rõ gốc rễ của phiền não: từ vô thỉ đến nay, cái nào là phát nghiệp vô minh (bất giác vọng động), cái nào nhuận sanh vô minh (ái, thủ), cái gì tạo (lục thức), cái gì lãnh thọ (bát thức). Đây là nghĩa quyết định thứ hai.</p>
      <p>Các ông tu đạo Bồ đề, nếu không xét rõ gốc rễ của phiền não, thì đối với căn và trần hư vọng này, không thể biết được cái điên đảo ở chỗ nào. Cái chỗ ở còn không biết thời làm sao hàng phục được giặc phiền não để chứng quả Phật.</p>
      <p>Các ông hãy xem trong thế gian, những người mở gút, nếu họ chẳng thấy được mối, thì không mong gì mở được. Chưa từng nghe cái hư không bị ai mở được, vì hư không vô hình chẳng có gút và mở vậy (hư không dụ cho chơn tâm).</p>
      <p>Ông nên hiểu: Hiện tiền sáu căn của ông đây: mắt, tai, mũi, lưỡi, thân và ý, chúng làm mai mối cho sáu giặc (sáu thức), đến cướp giựt của báu nhà ông. Bởi thế nên các ông cùng tất cả chúng sanh, từ vô thỉ đến nay bị triền phược trong vòng luân hồi, không vượt ra ngoài ba cõi được.</p>

      <section id="luoc-giai-4">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Vì sáu căn làm mai mối, dẫn chúng sanh ra sáu thức là lục tặc, cướp hại chơn tánh. Nghĩa là vì căn đối với cảnh, khởi vọng niệm phân biệt, nên chơn tâm phải bị mờ. Cũng như gió xao động, cặn cáu nổi lên, nên tánh nước trong phải ẩn.</p>
      </section>
    </section>

    <section id="v-vi-vong-noi-len-chon-tam-bi-an">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. VÌ VỌNG NỔI LÊN CHƠN TÂM BỊ ẨN</h3>
      <p>Này A Nan, sáu căn của ông như vậy, do vô minh vọng động nổi lên, nên chơn tâm bị ẩn. Từ đây về sau, mỗi khi chiếu soi thì gồm cả vọng đều phát.</p>
      <p>Bởi thế nên rời tối và sáng, thời mắt ông không thấy; rời động và tịnh thì tai ông không nghe; rời thông và nghẹt thì mũi ông không ngửi; rời các vị ra thời lưỡi ông không nếm; rời các xúc trần thì thân ông không biết; rời cả pháp trần thì ý ông không phân biệt.</p>
    </section>

    <section id="vi-xoay-vong-ve-chon-thi-sau-can-duoc-tu-tai">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. XOAY VỌNG VỀ CHƠN THÌ SÁU CĂN ĐƯỢC TỰ TẠI</h3>
      <p>Chỉ sáu căn của ông không theo sáu trần cảnh khởi vọng niệm phân biệt, tùy ông mở gút (vọng nhiễm) được một căn nào thì các căn đều được giải thoát. Nghĩa là ngoài không cùng với trần cảnh gút chặt, trong thâu phục phiền não trở lại với chơn tâm sáng suốt, thì năm căn bị gút chặt kia cũng đều được hoàn toàn giải thoát. Lúc bấy giờ sáu căn tự tại, thay nhau cần dùng, các giác quan: thấy, nghe, hay, biết, không còn bị cuộc hạn nơi các căn: mắt, tai, mũi, lưỡi v.v... chỉ nương các căn phát ra tác dụng; không cần có trần cảnh đối chiếu mà cũng vẫn thấy, nghe, hay, biết.</p>
    </section>

    <section id="vii-dan-chung-cac-vi-thay-nghe-hay-biet-duoc-tu-tai">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. DẪN CHỨNG CÁC VỊ THẤY, NGHE, HAY, BIẾT ĐƯỢC TỰ TẠI, KHÔNG CÒN BỊ CUỘC HẠN NƠI CĂN</h3>
      <p>A Nan! Ông đã thấy trong hội này, như ông A Na Luật Đà không có con mắt mà vẫn thấy. Rồng Bạt Nan Đà không lỗ tai mà vẫn nghe. Thần nữ Căn đà không lỗ mũi mà ngửi được mùi. Ông Kiều Phạm Bác Đề cái lưỡi không phải lưỡi người, mà biết được các món ăn của người. Ông Thần Thuấn Nhã Đa không có thân mà vẫn biết xúc. Ông Ma Ha Ca Diếp tu diệt tận định, dứt trừ ý căn đã lâu, mà vẫn phân biệt được rõ ràng.</p>
      <p>A Nan! Hiện nay các căn của ông nếu hoàn toàn gỡ hết cái gút chặt nơi trần cảnh (không theo trần cảnh phân biệt), trong thì chinh phục được phiền não, trở về với chơn tâm rồi thì hiện tiền thân căn và thế giới đây đều không còn; cũng như nước nóng băng tan, ông liền chứng được quả Phật.</p>
      <p>A Nan! Như người thế gian, cái thấy của họ chỉ gom ở con mắt. Nếu bảo họ nhắm mắt lại, thì hiện tiền tối đen, sáu căn mờ mịt, đầu chân in nhau. Người kia lấy tay rờ khắp cả thân thể, tuy mắt họ không thấy, mà cũng vẫn biết đâu là đầu và đâu là chân; cái hiểu biết đồng nhau (đây cũng là một bằng chứng: các giác quan chẳng bị cuộc hạn nơi căn và trần).</p>
      <p>A Nan, nhơn sáng mới thấy, nếu tối thời không thấy. Nay không cần sáng mà cũng thấy biết, như thế thì cái tối kia không thể làm mờ (mất) cái thấy biết của ông được. Căn và trần các vọng đã tiêu rồi, thì liền trở lại với chơn tánh.</p>
    </section>

    <section id="viii-a-nan-nghi-cac-giac-quan-hien-tien-la-vong">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII. A NAN NGHI: CÁC GIÁC QUAN HIỆN TIỀN LÀ VỌNG, TẠI SAO PHẬT LẠI DẠY NƯƠNG NƠI ĐÓ LÀM NHƠN ĐỊA TU HÀNH, ĐỂ CHỨNG ĐẶNG QUẢ PHẬT CHƠN THẬT</h3>
      <p>A Nan thưa: Bạch Thế tôn, như lời Phật dạy: Muốn cầu quả Phật thường còn, thì cái nhơn địa phát tâm tu hành phải chơn thật, mới chứng được quả vị chơn thật.</p>
      <p>Bạch Thế tôn! Bồ đề, Niết bàn, Chơn như, Pháp tánh, Yêm ma la thức, Không Như Lai tạng và Đại viên cảnh trí, bảy danh từ tuy khác, chớ cũng đồng một quả Phật thanh tịnh thường còn không hoại.</p>
      <p>Còn cái thấy, nghe, hay, biết, các giác quan của con đây, nếu rời các trần cảnh hiện tiền: tối, sáng, động, tịnh v.v..., thời không còn thấy, nghe, hay, biết nữa. Quanh quẩn tới lui, chín chắn suy tìm, thì cái tâm của con hoàn toàn không chơn thật. Tại làm sao Phật dạy lấy cái hư vọng đoạn diệt này làm nhơn tu, để cầu quả Phật thường còn không sanh diệt cho được. Vậy thì lời nói của Phật trước sau trái nhau, làm sao gọi là Như Lai nói thật, xin đức Từ tôn từ bi vén mở chỗ mê mờ cho chúng con.</p>
    </section>

    <section id="ix-phat-bao-danh-chuong-de-chung-nghiem-tanh-nghe-thuong-con">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX. PHẬT BẢO ĐÁNH CHUÔNG ĐỂ CHỨNG NGHIỆM TÁNH NGHE THƯỜNG CÒN</h3>
      <p>Phật dạy: A Nan, ông tuy học rộng, nghe nhiều, nhưng các phiền não hữu lậu (mê lầm) chưa hết, nên ông chỉ biết suông cái tên điên đảo. Đến lúc cái điên đảo thật hiện tiền, thì ông lại không biết. Như thế thì sự tin hiểu của ông chưa được chắc chắn. Tôi nay đem những việc thường trong đời, để trừ các nghi lầm cho ông.</p>
      <p>Khi đó Phật liền bảo ông La Hầu La đánh một tiếng chuông, rồi hỏi ông A Nan rằng: Ông có nghe không? A Nan thưa: Nghe.</p>
      <p>Đến lúc chuông hết ngân, Phật lại hỏi: Ông có nghe không? A Nan thưa: Không nghe.</p>
      <p>Phật lại bảo ông La Hầu La đánh một tiếng chuông nữa và hỏi: Ông có nghe không? A Nan đáp: Nghe.</p>
      <p>Phật hỏi: Thế nào là nghe và thế nào là không nghe?</p>
      <p>A Nan thưa: Vì đánh chuông có tiếng ngân nên con nghe, đến khi tiếng chuông hết ngân thì con không nghe.</p>
      <p>Phật dạy: A Nan! Khi tiếng chuông hết ngân, ông nói rằng không nghe; nếu ông thật không có cái nghe thì ông đồng như cây đá, tại sao khi đánh tiếng chuông thứ hai, ông lại có nghe?</p>
      <p>Vậy cho biết: cái tiếng (cảnh) khi có khi không, chớ cái nghe (tâm) của ông lúc nào cũng có. Nếu cái nghe của ông thật không, thì cái gì biết được không nghe đó?</p>
      <p>Thế nên ông phải biết: cái tiếng đối với cái tiếng nó tự sanh và diệt, chớ ở cái nghe (tâm) của ông, không phải vì tiếng sanh mà nó có, tiếng diệt mà nó không. Tại ông điên đảo hôn mê, nhận cái thường (tánh nghe) làm đoạn diệt (tiếng), chớ không phải rời sáu trần cảnh: sắc, thinh, hương v.v... mà các giác quan thấy, nghe, hay, biết của ông không có.</p>

      <section id="luoc-giai-5">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đây là lần thứ bảy, Phật chỉ rất rõ ràng các giác quan: thấy, nghe v.v... là tâm và thường còn.</p>
      </section>
    </section>

    <section id="x-phat-chi-khi-ngu-cai-nghe-cung-khong-mat">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">X. PHẬT CHỈ KHI NGỦ, CÁI NGHE CŨNG KHÔNG MẤT</h3>
      <p>Bằng chứng thứ hai: Như người đang ngủ, nằm trên giường chõng, trong nhà có người giã gạo, khi đó người ngủ kia mơ màng, tưởng là tiếng trống hoặc tiếng chuông, đến chừng thức dậy rồi mới nhận rõ đó là tiếng chày giã gạo.</p>
      <p>A Nan! Người ngủ kia, mặc dù đối với cảnh vật hiện tiền họ không thấy biết, mà cái nghe của họ cũng không mất.</p>
      <p>Dù cho thân thể ông đến khi già chết tiêu tan, mà cái tánh nghe này cũng không vì ông già, chết đó mà tiêu diệt. Bởi chúng sanh từ vô thỉ đến giờ, cứ theo các trần cảnh, khởi vọng niệm phân biệt lăng xăng, chưa từng ngộ được chơn tâm thường còn của mình.</p>
      <p>Vì cứ nương theo vọng niệm phân biệt, chẳng nương theo chơn tâm thường trụ, cho nên đời đời nhiễm ô, trôi lăn trong vòng sanh tử. Vậy các ông phải bỏ cái vọng niệm sanh diệt, theo về với chơn tâm thường trụ. Khi chơn tâm thanh tịnh sáng suốt hiện tiền rồi, thì căn thân, trần cảnh và vọng trần và tâm cấu nhiễm đã tiêu rồi, lúc bấy giờ lo gì chẳng thành quả Phật vô thượng.</p>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong phần mở đầu, tại sao Ngài A Nan lại ví mình như người bần cùng được Thiên Vương ban cho nhà lầu nhưng chưa biết cách vào?',
    options: {
      a: 'Ông cảm thấy mình quá nghèo khó không xứng đáng với những giáo lý cao siêu của Phật.',
      b: 'Ông muốn xin Phật ban cho thần thông để có thể nhìn thấy ngôi nhà lầu đó.',
      c: 'Ông đã hiểu được lý thuyết về chơn tâm nhưng chưa biết phương pháp để thực sự chứng nhập.',
      d: 'Ông chưa từng nghe nói về chơn tâm và mong cầu Phật ban cho một ngôi nhà thực sự.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Ngài A Nan không nói mình nghèo khó về mặt vật chất hay thiếu phẩm chất đến mức không xứng đáng [1].',
      b: 'Sai. Ông không xin Phật ban thần thông, mà cúi xin Như Lai chỉ dạy phương pháp để được vào tri kiến của Phật [1].',
      c: 'Đúng. Ngài A Nan thuật lại rằng đại chúng tuy đã ngộ được chơn tâm của mình (như có nhà lầu tốt đẹp) nhưng chưa biết làm sao chứng nhập (như chưa biết cách vào) [2], [1].',
      d: 'Sai. Ngài A Nan và đại chúng đã nghe, hiểu và ngộ được chơn tâm rồi chứ không phải chưa từng nghe [2].',
    },
  },
  {
    question: 'Theo Nghĩa quyết định thứ nhứt, nếu một người dùng tâm sanh diệt làm nhân để tu hành thì kết quả sẽ ra sao?',
    options: {
      a: 'Không bao giờ đạt được quả Phật thường trụ không sanh diệt.',
      b: 'Vẫn có thể đạt được kết quả nếu nỗ lực tu hành trong nhiều kiếp.',
      c: 'Sẽ đạt được quả vị Tiểu thừa nhưng không thể đạt được Đại thừa.',
      d: 'Tâm sanh diệt sẽ tự động chuyển hóa thành chơn tâm khi gặp duyên.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Phật dạy nếu dùng vọng tâm sanh diệt làm nhân tu hành mà mong cầu đặng quả Phật thường còn không sanh diệt thì tuyệt đối không thể được [3].',
      b: 'Sai. Lược giải chỉ rõ, giống như việc nấu cát muốn cho thành cơm, dẫu trải qua bao nhiêu kiếp cũng không thể đạt được [3].',
      c: 'Sai. Văn bản nhấn mạnh vào việc không thể đạt quả thường trụ, không đề cập đến việc chắc chắn đạt quả vị Tiểu thừa bằng tâm sanh diệt theo cách này [1], [3].',
      d: 'Sai. Tâm sanh diệt không tự động chuyển hóa, hành giả phải chủ động lấy chơn tâm thanh tịnh làm nhân địa tu hành [4].',
    },
  },
  {
    question: 'Trong ví dụ về việc lóng nước đục, giai đoạn lọc bỏ hoàn toàn cặn đục tượng trưng cho điều gì trong tu hành?',
    options: {
      a: 'Rơi vào trạng thái hôn trầm và vô định.',
      b: 'Mới bắt đầu phát tâm Bồ đề.',
      c: 'Đoạn trừ căn bản vô minh.',
      d: 'Hàng phục được phiền não khách trần.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Lọc bỏ cặn đục tượng trưng cho sự thanh tịnh, không phải sự hôn trầm hay vô định [5].',
      b: 'Sai. Phát tâm Bồ đề là giai đoạn khởi đầu, không phải là kết quả của việc đã gạn lọc sạch phiền não [1], [4].',
      c: 'Đúng. Phật dạy khi lọc bỏ cặn đục chỉ còn toàn là nước trong, đó là dụ cho giai đoạn thứ hai khi hành giả đã đoạn trừ căn bản vô minh [4].',
      d: 'Sai. Việc lóng nước để cặn từ từ chìm xuống mới là giai đoạn thứ nhất: hàng phục được phiền não khách trần [4].',
    },
  },
  {
    question: 'Tại sao sáu căn (mắt, tai, mũi, lưỡi, thân, ý) lại được gọi là mai mối cho sáu giặc?',
    options: {
      a: 'Vì chúng là những thực thể xấu xa cần phải bị tiêu diệt hoàn toàn.',
      b: 'Vì chúng không có thật mà chỉ là do hư không tạo ra.',
      c: 'Vì chúng khiến con người trở nên nghèo khổ và bệnh tật.',
      d: 'Vì chúng dẫn dắt sự phân biệt của sáu thức bên trong đi cướp mất chơn tánh.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Căn không phải là thực thể xấu xa cần tiêu diệt, mà do chúng đối cảnh khởi vọng niệm nên làm mờ chơn tâm [6], [7].',
      b: 'Sai. Sáu căn hiện tiền là có thật đối với chúng sanh trong vòng luân hồi [8].',
      c: 'Sai. Sáu căn không gây ra sự nghèo khổ vật chất mà khiến chúng sanh bị triền phược trong luân hồi ba cõi [8].',
      d: 'Đúng. Sáu căn làm mai mối dẫn dắt sáu thức (lục tặc) đến cướp hại chơn tánh, vì khi căn đối với cảnh sẽ khởi vọng niệm phân biệt [8], [6].',
    },
  },
  {
    question: 'Khi một người mở được gút của một căn, điều gì sẽ xảy ra với các căn còn lại theo lời Phật dạy?',
    options: {
      a: 'Các căn khác sẽ trở nên vô dụng vì không còn sự liên kết.',
      b: 'Năm căn còn lại cũng đều được hoàn toàn giải thoát.',
      c: 'Người tu hành phải tiếp tục mở gút từng căn một theo trình tự.',
      d: 'Chỉ có ý căn là được giải thoát, các căn vật lý vẫn bị hạn chế.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Các căn không trở nên vô dụng mà thay nhau cần dùng, đạt được sự tự tại [7].',
      b: 'Đúng. Phật dạy tùy mở gút được một căn nào, thì năm căn bị gút chặt kia cũng đều được hoàn toàn giải thoát [7].',
      c: 'Sai. Văn bản ghi rõ khi giải thoát một căn thì các căn kia đều đồng thời được giải thoát, không bắt buộc phải theo trình tự mở từng căn [7].',
      d: 'Sai. Tất cả năm căn còn lại (kể cả vật lý) đều hoàn toàn giải thoát [7].',
    },
  },
  {
    question: 'Vị nào trong đại hội được dẫn chứng là không có lỗ tai mà vẫn nghe?',
    options: {
      a: 'Thần nữ Căn đà.',
      b: 'Rồng Bạt Nan Đà.',
      c: 'Ông Kiều Phạm Bác Đề.',
      d: 'Ông A Na Luật Đà.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Thần nữ Căn đà không có lỗ mũi mà vẫn ngửi được mùi [9].',
      b: 'Đúng. Trong hội, Rồng Bạt Nan Đà được dẫn chứng là không có lỗ tai mà vẫn nghe [9].',
      c: 'Sai. Ông Kiều Phạm Bác Đề cái lưỡi không phải lưỡi người mà biết được món ăn [9].',
      d: 'Sai. Ông A Na Luật Đà là vị không có con mắt mà vẫn thấy [9].',
    },
  },
  {
    question: 'Trong thí nghiệm đánh chuông, Phật đã chứng minh điều gì về mối quan hệ giữa tiếng và tánh nghe?',
    options: {
      a: 'Tánh nghe và tiếng chuông đều là những pháp sanh diệt như nhau.',
      b: 'Tiếng có sanh diệt nhưng tánh nghe thì luôn thường còn.',
      c: 'Tiếng chuông chính là thực thể tạo ra tánh nghe.',
      d: 'Tánh nghe chỉ tồn tại khi có tiếng vang lên.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Chỉ có tiếng là pháp có sanh có diệt, còn tánh nghe là tâm thường còn [10].',
      b: 'Đúng. Phật chứng minh cái tiếng tự sanh và diệt, chớ cái nghe của ông lúc nào cũng có, không phải vì tiếng sanh mà có, tiếng diệt mà không [10].',
      c: 'Sai. Tánh nghe có sẵn ở người, không phải do tiếng chuông tạo ra [10].',
      d: 'Sai. Khi tiếng chuông hết ngân, tánh nghe vẫn tồn tại để biết rằng đang không nghe tiếng [11], [10].',
    },
  },
  {
    question: 'Ví dụ về người ngủ mơ thấy tiếng chày giã gạo là tiếng trống nhằm mục đích gì?',
    options: {
      a: 'Giải thích rằng những giấc mơ thường xuyên gây ra sự điên đảo.',
      b: 'Chứng minh tánh nghe không mất đi ngay cả khi thân thể đang ngủ nghỉ.',
      c: 'Khuyên người tu hành không nên ngủ quá nhiều để tránh vọng tưởng.',
      d: 'Cho thấy âm thanh bên ngoài không thể tác động đến tâm người ngủ.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ví dụ này không được đưa ra để bàn về sự điên đảo của các giấc mơ [12].',
      b: 'Đúng. Phật đưa bằng chứng này để chỉ ra rằng dù người ngủ đối với cảnh vật hiện tiền không thấy biết, nhưng cái nghe của họ cũng không mất [12].',
      c: 'Sai. Không có lời khuyên nào về việc tránh ngủ hay ngủ nhiều trong đoạn văn bản này [12].',
      d: 'Sai. Âm thanh bên ngoài (tiếng chày) rõ ràng đã tác động vào cái nghe của người đang ngủ, khiến họ nằm mơ nghe thấy nó [12].',
    },
  },
  {
    question: 'Điều gì cấu thành Ngũ trược (năm lớp ngầu đục) làm phân chia chơn tâm theo văn bản?',
    options: {
      a: 'Năm loại thức ăn không thanh tịnh.',
      b: 'Sự phiền phược của bốn đại (đất, nước, gió, lửa) lên chơn tâm.',
      c: 'Năm giai đoạn của quá trình sanh, lão, bệnh, tử và khổ.',
      d: 'Năm loại ham muốn dục vọng của con người.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Văn bản không đề cập đến thức ăn trong quá trình hình thành ngũ trược [13].',
      b: 'Đúng. Sự phiền phược của bốn món (đất, nước, lửa, gió) làm phân chia chơn tâm thành ra năm lớp ngầu đục, gọi là ngũ trược [13].',
      c: 'Sai. Ngũ trược ở đây được giải thích là các lớp ngầu đục của tâm, không phải các giai đoạn sinh tử [13].',
      d: 'Sai. Ngũ trược được hình thành bởi tứ đại, không phải bởi năm loại dục vọng [13].',
    },
  },
  {
    question: 'Theo văn bản, để chứng được quả Phật, người tu hành cần phải từ bỏ điều gì?',
    options: {
      a: 'Bỏ rơi thân xác và thế giới vật chất ngay lập tức.',
      b: 'Bỏ vọng niệm sanh diệt để trở về với chơn tâm thường trụ.',
      c: 'Từ bỏ việc nghe và thấy để giữ cho tâm yên tịnh.',
      d: 'Từ bỏ mọi kiến thức đã học được từ kinh điển.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phật không dạy người tu hành phải tự từ bỏ hay hủy hoại thân xác hiện tại [14].',
      b: 'Đúng. Lời khuyên cốt lõi là: các ông phải bỏ cái vọng niệm sanh diệt, theo về với chơn tâm thường trụ thì mới mong thành quả Phật [14].',
      c: 'Sai. Cái nghe, cái thấy vốn là tâm và thường còn, không phải thứ cần từ bỏ; thứ cần bỏ là sự phân biệt lăng xăng chạy theo trần cảnh [10], [12].',
      d: 'Sai. Ngài A Nan dù học rộng nghe nhiều nhưng không bị khuyên từ bỏ kiến thức, mà là từ bỏ các phiền não hữu lậu và sự mê lầm điên đảo [15].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-10-a-nan-thuat-lai-cho-minh-da-ngo',
  slug: 'bai-thu-10-a-nan-thuat-lai-cho-minh-da-ngo',
  title: 'Bài Thứ 10 - A Nan thuật lại chỗ mình đã ngộ',
  type: 'article',
  status: 'published',
  order: 11,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-10-a-nan-thuat-lai-cho-minh-da-ngo/L%E1%BB%99_tr%C3%ACnh_nh%E1%BA%ADp_Ch%C6%A1n_T%C3%A2m.png',
      readingContent,
      tableOfContents: [
        {
          id: 'i-a-nan-thuat-lai-cho-minh-da-ngo-va-phat-chi-day-phuong-phap-tu-hanh-de-nhap-chon-tam',
          label: 'I. A Nan thuật lại chỗ mình đã ngộ và cầu phương pháp nhập chơn tâm',
        },
        { id: 'ii-phat-chi-day-phuong-phap-tu', label: 'II. Phật chỉ dạy phương pháp tu' },
        { id: 'iii-nghia-quyet-dinh-thu-nhut', label: 'III. Nghĩa quyết định thứ nhứt' },
        { id: 'luoc-giai-1', label: 'Lược giải', indent: 1 },
        { id: 'luoc-giai-2', label: 'Lược giải', indent: 1 },
        { id: 'luoc-giai-3', label: 'Lược giải', indent: 1 },
        { id: 'iv-nghia-quyet-dinh-thu-hai', label: 'IV. Nghĩa quyết định thứ hai' },
        { id: 'luoc-giai-4', label: 'Lược giải', indent: 1 },
        { id: 'v-vi-vong-noi-len-chon-tam-bi-an', label: 'V. Vì vọng nổi lên chơn tâm bị ẩn' },
        { id: 'vi-xoay-vong-ve-chon-thi-sau-can-duoc-tu-tai', label: 'VI. Xoay vọng về chơn thì sáu căn được tự tại' },
        {
          id: 'vii-dan-chung-cac-vi-thay-nghe-hay-biet-duoc-tu-tai',
          label: 'VII. Dẫn chứng các vị thấy, nghe, hay, biết được tự tại',
        },
        { id: 'viii-a-nan-nghi-cac-giac-quan-hien-tien-la-vong', label: 'VIII. A Nan nghi về nhân địa tu từ các giác quan' },
        {
          id: 'ix-phat-bao-danh-chuong-de-chung-nghiem-tanh-nghe-thuong-con',
          label: 'IX. Phật bảo đánh chuông để chứng nghiệm tánh nghe thường còn',
        },
        { id: 'luoc-giai-5', label: 'Lược giải', indent: 1 },
        { id: 'x-phat-chi-khi-ngu-cai-nghe-cung-khong-mat', label: 'X. Phật chỉ khi ngủ, cái nghe cũng không mất' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-10-a-nan-thuat-lai-cho-minh-da-ngo/Illuminating_the_True_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/Ujijna5vzaI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3odpnxgcJrjhYiSEKTinKk?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - A Nan thuật lại chỗ mình đã ngộ',
    passPercentage: 70,
    questions,
  },
}

export default lesson
