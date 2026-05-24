import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="a-nan-cau-phat-chi-cai-dien-dao">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Bài thứ tư: A-Nan cầu Phật chỉ cái “điên đảo”</h2>
    <p>Khi ấy A-Nan đứng dậy lạy Phật, kính cẩn bạch rằng:</p>
    <p>Nếu cái thấy, nghe, không sanh diệt này là “Tâm” của chúng con, tại sao trước kia đức Thế Tôn lại quở chúng con “bỏ mất chơn tâm, làm việc điên đảo”?</p>
    <p>Cúi xin đức Như Lai mở rộng lòng từ bi chỉ dạy cho chúng con biết cái “Điên đảo” ở chỗ nào.</p>

    <section id="phat-dan-ty-du-chi-dien-dao">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Phật dẫn tỷ dụ để chỉ rõ cái “điên đảo”</h3>
      <p>Khi đó Phật xuôi cánh tay chỉ xuống đất, hỏi ông A-Nan rằng:</p>
      <p>- Ông thấy cánh tay của ta như thế này, là xuôi hay ngược?</p>
      <p>A-Nan thưa: - Các người trong thế gian cho như thế là ngược; còn con thì không biết thế nào là ngược hay xuôi.</p>
      <p>Phật lại hỏi ông A-Nan: - Các người trong thế gian cho như thế là ngược, thì họ cho như thế nào mới là xuôi?</p>
      <p>A-Nan thưa: - Đức Như Lai đưa cánh tay lên, năm ngón chỉ thẳng lên hư không, như thế là xuôi.</p>
      <p>Phật liền đưa tay lên, rồi kêu A-Nan mà bảo rằng:</p>
      <p>- Cũng một cánh tay này chứ không chi khác, chẳng qua chỉ đổi đầu làm đuôi, đổi đuôi làm đầu mà thôi, thế mà người thế gian chấp thế này là ngược và thế kia là xuôi; điên đảo là đấy! Đấy là điên đảo.</p>
      <p>Đem một cánh tay này mà so sánh, để chỉ rõ thêm ra: Thân Như Lai gọi là thân Phật (giác ngộ), thân các ông gọi là thân điên đảo (chúng sanh). Vậy ông nên chín chắn xem xét: thân ông và thân Phật, cái “Điên đảo” (chúng sanh) ở chỗ nào?</p>

      <section id="chu-giai-ty-du-dien-dao">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Ý Phật chỉ: Đồng một thể tánh chơn tâm, vì vô minh vọng động, chấp đây thật là Phật, kia thật là chúng sanh. Đó là “điên đảo”.</p>
      </section>
    </section>

    <section id="phat-chi-day-ngay-cai-dien-dao">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. Phật chỉ ngay cái “điên đảo”</h3>
      <p>Khi ấy A-Nan và đại chúng ngó Phật sửng sốt, đôi mắt không nháy, vì không biết ở nơi thân này và tâm này, cái “điên đảo” ở chỗ nào!</p>
      <p>Phật thấy vậy thương xót mới dạy tiếp: - Ta thường nói: “Các pháp đều duy tâm biến hiện, cho đến thân và tâm ông ngày nay, cũng đều là vật ở trong chơn tâm hiện ra”. Tại sao các ông lại bỏ cái bản thể chơn tâm đi. Các ông vẫn ở trong ngộ (chơn tâm) làm mình (điên đảo là đó), thật đáng buồn thương!</p>
    </section>

    <section id="phat-chi-vi-me-nen-co-the-gioi-va-chung-sanh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. Phật dạy: Vì mê nên có thế giới và chúng sanh</h3>
      <p>Này A-Nan, bởi vô minh vọng động nên biến hiện ra có hư không, thế giới và chúng sanh. Trong thân chúng sanh vì có vọng tưởng lẫn lộn, nên nó vọng động leo chuyền bên trong (như vượn, như ngựa); khi các giác quan mở ra, thì nó rong ruổi theo trần cảnh bên ngoài (như vượn sút xiềng, ngựa tông chuồng). Rồi các ông chấp cái tướng vọng tưởng lăng xăng bên trong đó, cho là tâm tánh của mình. Một phen chấp nó làm tâm, thì không sao khỏi mê lầm cho rằng “tâm ở trong thân”.</p>
      <p>Chứ đâu biết rằng: Thân này, tâm này, cho đến núi, sông, thế giới và hư không đều là vật trong chơn tâm hiện ra cả.</p>

      <section id="chu-giai-vi-me-nen-co-the-gioi">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Như người đương thức (dụ chơn tâm) bỗng chốc buồn ngủ (dụ vô minh). Khi ngủ chiêm bao thấy có hư không, thế giới, chúng sanh và mình (dụ vô minh sanh ra thế giới và chúng sanh), rồi chấp cái thân và tâm trong chiêm bao kia là mình, mà bỏ cả cảnh thức tỉnh rộng lớn này đi v.v... (dụ như vì mê muội nên nhận cái vọng thân vọng tâm này làm mình, cảnh này là thật, mà bỏ cái toàn thể chơn tâm sáng suốt rộng lớn kia).</p>
      </section>

      <p>Cái chơn tâm rộng lớn như vậy, các ông lại bỏ đi không nhận, trở lại chấp cái vọng thân, vọng tâm này cho là thật của mình. Cũng như toàn thể bể cả rộng khơi trong trẻo kia không nhận, trở lại chấp hòn bọt nhỏ nhen cho là toàn thể bể cả, thật là điên đảo! Các ông là một trong vô số người mê muội, thật đáng thương xót!</p>
      <p>Như cũng một cánh tay của ta, mà chấp thế này là ngược, thế kia là xuôi, cũng đồng một loại điên đảo!</p>
    </section>

    <section id="a-nan-hieu-chan-tam-chua-dam-nhan">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. A-Nan đã hiểu được “chơn tâm” song chưa dám nhận</h3>
      <p>Ông A-Nan vì thấy lòng từ bi tha thiết của Phật thương xót hết sức nồng hậu, chỉ dạy rất thâm trầm, nên cảm động rơi nước mắt, kính cẩn bạch Phật rằng:</p>
      <p>Con tuy nhờ Phật chỉ dạy cho hiểu được chơn tâm, nhưng hiện nay con vẫn còn dùng “cái tâm phân biệt” (vọng tâm) nghe lời Phật nói, rồi ngộ suông cái chơn tâm này mà thôi, nên chưa dám nhận chắc là tâm con. Vậy xin Phật thương xót chỉ dạy cho con hết nghi ngờ, để trở về với đạo vô thượng.</p>
      <p>Phật dạy: Nếu các ông lấy vọng tâm nghe chánh pháp (chơn tâm) thì chánh pháp này cũng trở thành ra vọng, không thể nghe đặng chánh pháp.</p>
      <p>Các ông nên biết: Ta cũng như người dùng ngón tay chỉ mặt trăng, các ngươi phải nhơn ngón tay mà xem mặt trăng. Nếu chấp ngón tay cho là mặt trăng, thì chẳng những không thấy được mặt trăng, mà cũng không biết luôn cả ngón tay. Vì cho ngón tay là mặt trăng, thì không những không biết ngón tay là gì, mà cũng không biết thế nào là tối và sáng. Vì mê chấp ngón tay là mặt trăng, thì tối và sáng làm sao rõ được.</p>
      <p>Nay nếu các ông chấp cái “phân biệt” (vọng) làm tâm của mình, thì cái tâm này, khi rời tiếng nói pháp của ta, cũng vẫn còn phân biệt, thế mới phải thật là tâm của các ông (chủ). Nếu rời tiếng nói pháp của ta ra, mà các ông không còn phân biệt nữa, thì đó là vọng (khách) chớ không phải thật tâm (chủ) của các ông rồi.</p>
      <p>Cũng như người khách, chỉ ngủ nhờ rồi đi, chớ không ở lại được. Nếu thật là chủ nhà, thì ở luôn chớ không còn đi đâu nữa.</p>
      <p>Cũng thế, nếu thật là tâm của ông, thì không đi đâu cả. Tại sao khi rời tiếng nói pháp của ta, thì ông không còn phân biệt nữa?</p>
      <p>Không những cái “phân biệt” về tiếng, cho đến cái “phân biệt” về sắc, hương, vị, xúc và pháp, nếu rời sáu trần cảnh ra, thì nó đều không còn phân biệt nữa. Thế thì cái tâm của ông đồng là khách, có chỗ trả về. Vậy cái nào là “chủ”, thật là tâm của ông?</p>
      <p>A-Nan hỏi Phật: - Nếu cái tâm của con có chỗ trả về (trần cảnh qua thì tâm phân biệt hết) thì tại sao Đức Như Lai lại nói: “Cái chơn tâm của con không trả về đâu cả?”. Xin Phật mở lòng từ bi chỉ dạy cho.</p>
    </section>

    <section id="phat-chi-tam-lan-thu-tu">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. Phật chỉ tâm lần thứ tư</h3>
      <p>Phật dạy: - Này A-Nan, tất cả cảnh vật trong thế gian không ngoài: sáng, tối, trống, bít, trong, đục v. v... Nay ta đem các vật này, cái nào trả về cho bản nguyên của cái nấy.</p>
      <p>Như ánh sáng thì trả về cho mặt nhựt, vì không mặt nhựt thì không sáng; còn tối thì trả về cho ban đêm, trống trả về cho trống, bít trả về cho vách, trong trả về cho tịnh, đục trả về cho bụi v.v... Cái nào trả về cho cái nấy rồi; còn cái “thấy” của ông thấy các cảnh vật đó, ông muốn nó trở về đâu? Nếu trả về cho cái sáng, thì khi tối đến đáng lẽ ông không thấy tối. Nếu trả nó về cho tối, thì khi sáng đến ông cũng phải không thấy sáng; còn trả về cho trống, bít v.v... cũng thế.</p>
      <p>Rõ ràng các cảnh vật tuy có thiên sai vạn biệt, mà “cái thấy” của ông thật không sai khác. Như vậy, cái nào có thể trả được, thì cái đó là khách, tự nhiên không phải là ông rồi; còn cái nào ông không trả về được, thì cái đó là chủ, quyết định của ông chớ ai?</p>
      <p>Cái tâm của ông mầu nhiệm sáng suốt và sẵn sàng như vậy, tại sao ông lại tự mê muội đi, trở lại nhận cái vọng làm mình, đành chịu nổi chìm trong biển khổ sanh tử, thật đáng thương xót!</p>

      <section id="chu-giai-phat-chi-tam-lan-thu-tu">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Đoạn này Phật phân tách các trần tướng, cái nào trả về cái nấy, để cho rõ “cái thấy” không trả về đâu được. Đó là cái “chủ”, là “tâm” của chúng ta vậy.</p>
      </section>
    </section>

    <section id="a-nan-con-nghi-hoi-phat">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. A-Nan còn nghi hỏi Phật</h3>
      <p>A-Nan thưa: Bạch Thế Tôn, con tuy biết cái “thấy” này, không trả về đâu được, nhưng làm sao biết chắc nó là “chơn tâm” của con?</p>
    </section>

    <section id="phat-chi-tam-lan-thu-nam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII. Phật chỉ tâm lần thứ năm</h3>
      <p>Phật dạy rằng: Này A-Nan, ông thử xem trước mắt, tất cả các cảnh vật sum la vạn tượng, nào là núi sông, đất nước v.v... Ông nên lựa riêng ra cái nào thuộc về cảnh vật, còn cái nào là tâm ông.</p>
      <p>Này A-Nan, cùng tột tầm mắt thấy của ông, ngó lên thì thấy mặt trời, mặt trăng, đó là vật chớ không phải là ông; xem rộng ra, núi, sông, cây cối, cỏ hoa, người thú; cho đến gió bụi, chim chóc, cũng đều là vật chớ không phải ông.</p>
      <p>A-Nan, tất cả các cảnh vật, mặc dù có cao thấp, xa gần, ngàn sai muôn khác, song cũng đều là “vật bị thấy” của ông cả. Các vật loại tuy có sai khác, mà cái thấy của ông không khác. Thế thì cái “thấy” này chính là “tâm” của ông chứ không phải vật.</p>

      <section id="chu-giai-phat-chi-tam-lan-thu-nam">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Đoạn này Phật chỉ tâm rất rõ ràng.</p>
      </section>
    </section>

    <section id="phat-chi-them-cai-thay-la-tam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX. Phật dạy thêm cái “thấy” là tâm chứ không phải vật</h3>
      <p>Nếu cái “thấy” này là vật, thì ông cũng có thể thấy được cái “thấy” của Ta.</p>
      <p>Nếu ông cùng ta đồng thấy một vật (bị thấy), mà ông cho là thấy được “cái thấy” của ta, thời khi ta không thấy, sao ông chẳng thấy được cái “không thấy” của ta? (vì cái thấy không phải vật nên chẳng thấy được nó).</p>
      <p>Nếu ông nói: thấy được cái “không thấy” của ta, thì ông thấy cái gì đó, chớ quyết định không phải là thấy cái “không thấy” (tâm) của ta. Nếu ông không thấy được cái “không thấy” của ta, thì quyết định nó là “tâm”, đương nhiên không phải là vật rồi.</p>
      <p>Lại nữa, nếu cái thấy là vật, thì khi ông thấy nó, nó cũng phải thấy được ông. Như vậy thời tâm, vật lộn lạo; và trong thế gian này, không thể phân biệt được loài hữu tình (tâm), và loài vô tình (vật).</p>

      <section id="chu-giai-cai-thay-la-tam">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Đại ý đoạn này Phật nói vật thì bị thấy, còn tâm thì không bị thấy. Bởi cái thấy là tâm, nên không thể thấy được nó.</p>
      </section>

      <p>Này A-Nan, khi ông thấy các cảnh vật, cái thấy của ông khắp giáp tất cả, cái thấy đó không phải của Ta và của người khác, thì quyết định của ông chớ ai?</p>
      <p>Rất rõ ràng như thế, tại ông còn nghi “chơn tâm” của ông? Cái “chơn tâm” của ông như vậy, sao ông không tự nhận lấy, lại đi cầu ta chỉ “chơn tâm” cho nữa?</p>

      <section id="chu-giai-chi-tam-ro-rang">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Đoạn này, Phật chỉ tâm rõ ràng hơn hết.</p>
      </section>
    </section>

    <section id="a-nan-nghi-cai-thay-co-lon-nho-dut-noi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">X. A-Nan nghi “cái thấy” có lớn nhỏ, đứt nối</h3>
      <p>A-Nan thưa Phật: - Bạch Thế Tôn, nếu cái “thấy” này quyết định là tâm của con, chớ không phải của ai, thì khi con xem vũ trụ bao la, thấy mặt trời, mặt trăng... lúc bấy giờ cái thấy của con rộng lớn khắp giáp cả hư không. Khi con trở vào trong nhà, thì chỉ thấy nội trong nhà thôi.</p>
      <p>Vậy cái thấy này nó phải rút nhỏ lại, chun vào nhà, hay là khi vào nhà, nó bị tường vách cắt đứt, nên còn nhỏ như thế? Chúng con không biết nghĩa này thế nào, xin Phật từ bi chỉ dạy.</p>
    </section>

    <section id="phat-day-tran-canh-co-lon-nho-cai-thay-khong-lon-nho">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XI. Phật dạy: Trần cảnh có lớn nhỏ, cái “thấy” không lớn nhỏ</h3>
      <p>Phật dạy: Này A-Nan, trong thế gian tất cả cảnh vật có lớn nhỏ trong ngoài, tốt xấu v.v... đều thuộc về trần cảnh hiện tiền cả, chớ không phải cái thấy của ông có lớn nhỏ, tóp lại hay nới ra.</p>
      <p>Cũng như trong cái hộp vuông, thì thấy hư không vuông, trong cái chén tròn thấy hư không tròn. Vì chén tròn, hộp vuông, nên thấy hư không có vuông và tròn, chớ không phải cái hư không thật có tướng vuông tròn.</p>
      <p>Nếu hư không quyết định là vuông, thì khi để cái chén tròn, đáng lẽ không thấy hư không tròn.</p>
      <p>Trái lại, nếu hư không quyết định là tròn, thì khi để hộp vuông, đáng lẽ không thấy nó vuông.</p>
      <p>Vậy nên biết: vuông, tròn là tại đồ vật, chớ không phải hư không có vuông, tròn. Nếu phá hết các đồ vuông, tròn thì ông sẽ thấy hư không không có tướng vuông, tròn. Không phải bỏ hư không vuông mà có hư không tròn, hay trừ hư không tròn mà có hư không vuông.</p>
      <p>Cái “thấy” của ông cũng thế, không có vuông tròn hay lớn nhỏ, mà lớn nhỏ, vuông tròn là tại cảnh vật.</p>
      <p>Nếu ông cho khi vào nhà, cái “thấy” quyết định phải tóp nhỏ lại, thì ông ra ngoài sân xem mặt nhựt, ông phải kéo giãn cái “thấy” ra đến mặt nhựt hay sao?</p>
      <p>Lại nữa, khi vào nhà, nếu ông cho cái thấy bị cắt đứt đi, thì khi xoi vách trống ra một lỗ, thấy được bên ngoài, sao cái thấy của ông không có dấu nối?</p>
      <p>Nghĩa đó rất rõ ràng như vậy, chớ có chi lạ mà ông nói không biết.</p>
      <p>A-Nan, tất cả chúng sanh từ vô thỉ đến giờ vì mê mình (tâm) làm vật, bỏ mất chơn tâm của mình, bị cảnh vật xoay chuyển (chi phối) nên thấy có lớn nhỏ, rộng hẹp, tốt xấu v.v... Nếu ai chuyển xoay được cảnh vật, thân tâm đặng sáng suốt viên mãn, thì đồng với chư Phật. Lúc bấy giờ không rời nơi đạo tràng (chỗ này) mà ở trên đầu một mảy lông, có thể chứa đựng khắp cả mười phương thế giới.</p>

      <section id="chu-giai-tran-canh-co-lon-nho">
        <h4 class="text-lg font-semibold">Lược giải</h4>
        <p>Từ nơi thể tánh chơn tâm, vì vô minh vọng động, sanh ra có hư không thế giới, chúng sanh cùng các cảnh vật, nên gọi “mê mình là vật”.</p>
        <p>Khi có cảnh vật rồi, cứ theo đó mà phân biệt xấu tốt, lớn nhỏ, mừng giận v.v... nên nói “bị vật chuyển xoay”.</p>
        <p>Đến khi hết vô minh vọng động, trở lại với thể tánh chơn tâm, thì các cảnh vật ấy không còn; như người thức giấc chiêm bao, thì cảnh chiêm bao kia hết, nên nói “xoay chuyển vật” là thế.</p>
        <p>Lúc bấy giờ, một sợi lông hay mười phương thế giới cũng đều là chơn tâm cả. Đã đồng là chơn tâm, thì không còn thấy thế giới lớn hơn sợi lông, hay sợi lông nhỏ hơn thế giới, vì đồng một thể tánh, nên nói: “Trên đầu một sợi lông, có thể chứa đựng mười phương thế giới”.</p>
        <p>Đoạn này lý thâm, phải suy nghĩ nhiều mới hiểu.</p>
      </section>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong tỷ dụ về cánh tay của Đức Phật, tại sao việc cho rằng cánh tay hướng xuống là “ngược” lại được gọi là điên đảo?',
    options: {
      a: 'Vì người thế gian không biết cách đưa tay lên đúng hướng.',
      b: 'Vì cánh tay vốn không có hướng cố định.',
      c: 'Vì cùng là một cánh tay nhưng lại bị phân biệt dựa trên sự thay đổi vị trí.',
      d: 'Vì hướng xuống dưới tượng trưng cho sự sa đọa của chúng sanh.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Văn bản không nói rằng người thế gian không biết cách đưa tay lên.',
      b: 'Sai. Vấn đề cốt lõi là sự lầm chấp vào hiện tượng chứ không phải việc cánh tay không có hướng [1].',
      c: 'Đúng. Cùng một cánh tay này chứ không chi khác, chẳng qua chỉ đổi đầu làm đuôi, đổi đuôi làm đầu mà người thế gian lầm chấp ngược xuôi [1].',
      d: 'Sai. Trong văn bản không có ý nghĩa biểu tượng này cho hướng xuống [1].',
    },
  },
  {
    question: 'Theo văn bản, tại sao chúng sanh lại lầm tưởng tâm nằm ở trong thân?',
    options: {
      a: 'Vì không có sự phân biệt giữa năng lực thấy và vật bị thấy.',
      b: 'Do các giác quan cung cấp thông tin chính xác về vị trí của tâm.',
      c: 'Do mê lầm chấp nhận cái “vọng tưởng lăng xăng” bên trong làm tâm tánh của mình.',
      d: 'Vì chơn tâm vốn dĩ bị giới hạn trong phạm vi cơ thể vật lý.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Sự lầm tưởng không xuất phát từ việc thiếu phân biệt năng lực thấy ở đoạn này [2].',
      b: 'Sai. Giác quan không cung cấp vị trí chính xác của tâm.',
      c: 'Đúng. Chúng sanh chấp cái tướng vọng tưởng lăng xăng bên trong cho là tâm tánh của mình, nên mê lầm cho rằng “tâm ở trong thân” [2].',
      d: 'Sai. Chơn tâm bao trùm cả núi, sông, thế giới và hư không [3].',
    },
  },
  {
    question: 'Hình ảnh “ngón tay chỉ mặt trăng” được Phật dùng để nhắc nhở A Nan điều gì?',
    options: {
      a: 'Phải học thuộc lòng các kinh điển như chính mặt trăng.',
      b: 'Không nên nhầm lẫn phương tiện chỉ dạy với chân lý thực tại.',
      c: 'Ngón tay và mặt trăng tuy hai mà một, không nên phân biệt.',
      d: 'Mặt trăng là biểu tượng cho tâm phân biệt của chúng sanh.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Lời Phật dạy (pháp) chỉ là phương tiện, không phải để bám víu một cách máy móc [4].',
      b: 'Đúng. Nếu chấp ngón tay (phương tiện) cho là mặt trăng (chân lý), thì chẳng những không thấy được mặt trăng mà cũng không biết ngón tay [4].',
      c: 'Sai. Ngón tay và mặt trăng hoàn toàn khác nhau [4].',
      d: 'Sai. Mặt trăng ở đây tượng trưng cho chơn tâm, không phải tâm phân biệt [4].',
    },
  },
  {
    question: 'Làm thế nào để phân biệt giữa “Khách” (vọng) và “Chủ” (thật) trong tâm thức?',
    options: {
      a: 'Chủ là cái tâm có thể phân biệt được các âm thanh và hình sắc.',
      b: 'Khách là những gì thuộc về tâm, Chủ là những gì thuộc về thế giới bên ngoài.',
      c: 'Khách là người ngủ nhờ lâu ngày, Chủ là người chỉ ghé qua rồi đi.',
      d: 'Cái gì có thể “trả về” cho nguồn gốc khác thì đó là Khách; cái gì không thể trả về đâu được thì là Chủ.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tâm phân biệt theo cảnh là Khách, vì khi rời trần cảnh thì nó hết phân biệt [5].',
      b: 'Sai. Cả “Khách” và “Chủ” trong trường hợp này đều đang xét các trạng thái của tâm [6].',
      c: 'Sai. Khách là người ngủ nhờ rồi đi, Chủ là người ở lại luôn [6].',
      d: 'Đúng. Cái nào có thể trả được là khách, cái nào không trả về được thì quyết định là chủ [7].',
    },
  },
  {
    question: 'Trong ví dụ về cái hộp vuông và cái chén tròn, Phật muốn chứng minh điều gì về cái “thấy”?',
    options: {
      a: 'Hình dạng vuông, tròn là do hư không tự biến hiện ra.',
      b: 'Cái thấy có thể thay đổi hình dạng tùy theo vật chứa.',
      c: 'Sự lớn nhỏ, vuông tròn thuộc về trần cảnh chứ không thuộc về bản thể của cái thấy.',
      d: 'Khi vào nhà, cái thấy thực sự bị tường vách cắt đứt thành những phần nhỏ.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hư không không tự có hình tướng vuông tròn [8].',
      b: 'Sai. Cái thấy không thay đổi [9].',
      c: 'Đúng. Lớn nhỏ, vuông tròn là tại cảnh vật, chớ không phải cái thấy của con người có nới ra, tóp lại hay vuông tròn [8], [9].',
      d: 'Sai. Khi xoi vách trống thành lỗ, cái thấy không có dấu nối, nên không hề bị cắt đứt [10].',
    },
  },
  {
    question: 'Tại sao việc nhận “hòn bọt” là toàn thể “bể cả” lại được coi là điên đảo?',
    options: {
      a: 'Vì đó là sự đánh đồng một biểu hiện nhỏ bé, tạm thời với bản thể rộng lớn, vĩnh hằng.',
      b: 'Vì hòn bọt vốn không có nước bên trong.',
      c: 'Vì hòn bọt và bể cả vốn không có mối liên hệ nào với nhau.',
      d: 'Vì bể cả rộng lớn không bao giờ sinh ra những hòn bọt nhỏ.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Thật là điên đảo khi không nhận toàn thể bể cả rộng lớn trong trẻo, lại trở lại chấp hòn bọt nhỏ nhen (vọng thân, vọng tâm) cho là bể cả [11].',
      b: 'Sai. Hòn bọt vẫn cấu tạo từ nước biển.',
      c: 'Sai. Hòn bọt sinh ra từ bể cả [11].',
      d: 'Sai. Bể cả có thể xuất hiện bọt nước do sóng, tượng trưng cho vô minh vọng động [12], [11].',
    },
  },
  {
    question: 'Theo đoạn “Phật dạy thêm cái thấy là tâm chớ không phải vật”, tại sao ta không thể thấy được cái “không thấy” của người khác?',
    options: {
      a: 'Vì cái thấy không phải là một đối tượng vật chất để có thể bị quan sát.',
      b: 'Vì khi một người không thấy gì, thì không có gì để mà thấy.',
      c: 'Vì mắt của chúng ta không đủ tinh tường để nhìn thấy tâm.',
      d: 'Vì tâm và vật luôn trộn lẫn với nhau không thể tách rời.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Vì cái thấy là tâm, không phải vật nên chẳng thể thấy được nó, không thể phân tách thành “vật bị thấy” để quan sát [13], [14].',
      b: 'Sai. Lập luận của Phật không dựa trên việc thiếu vật chất hiện diện.',
      c: 'Sai. Không phải do giới hạn của thị giác mà do bản chất của cái thấy [13].',
      d: 'Sai. Trái lại, Phật đang phân tách rạch ròi để chứng minh tâm và vật không lộn lạo [14].',
    },
  },
  {
    question: 'Một người có thể “xoay chuyển được cảnh vật” (chuyển vật) sẽ đạt được trạng thái nào?',
    options: {
      a: 'Có khả năng biến mọi vật nhỏ thành vật lớn và ngược lại.',
      b: 'Sẽ không còn nhìn thấy bất cứ cảnh vật nào trong thế gian nữa.',
      c: 'Thân tâm sáng suốt viên mãn, đồng với chư Phật, không bị cảnh vật chi phối.',
      d: 'Có thể điều khiển thời tiết và các hiện tượng tự nhiên theo ý muốn.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Xoay chuyển cảnh vật mang ý nghĩa dứt bỏ vô minh, không bị cảnh vật chi phối [15].',
      b: 'Sai. Cảnh vật khi hết vô minh sẽ được nhìn nhận với đúng thể tánh của chơn tâm [15].',
      c: 'Đúng. Nếu ai chuyển xoay được cảnh vật, thân tâm đặng sáng suốt viên mãn, thì đồng với chư Phật [10].',
      d: 'Sai. “Xoay chuyển” là thuật ngữ chỉ sự giác ngộ trong tâm, không phải siêu năng lực điều khiển tự nhiên [10], [15].',
    },
  },
  {
    question: 'Điểm khác biệt cốt lõi giữa tâm phân biệt (vọng tâm) và chơn tâm khi rời xa các giác quan là gì?',
    options: {
      a: 'Tâm phân biệt biến mất khi rời sáu trần, còn chơn tâm (cái thấy) vẫn thường hằng.',
      b: 'Tâm phân biệt vẫn tồn tại độc lập, còn chơn tâm cần có đối tượng.',
      c: 'Tâm phân biệt không có chỗ trả về, còn chơn tâm có chỗ trả về.',
      d: 'Cả hai đều biến mất vì không còn đối tượng để nhận thức.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Nếu rời sáu trần cảnh ra thì nó (tâm phân biệt) không còn phân biệt nữa, đồng là khách có chỗ trả về; còn chơn tâm là thật chủ thì vẫn còn đó, không có chỗ trả về [5].',
      b: 'Sai. Tâm phân biệt phụ thuộc vào sáu trần [5].',
      c: 'Sai. Ngược lại, tâm phân biệt có chỗ trả về, chơn tâm không có chỗ trả về [5], [7].',
      d: 'Sai. Chơn tâm không biến mất [7].',
    },
  },
  {
    question: 'Nguyên nhân sâu xa nào dẫn đến sự hiện hữu của thế giới và chúng sanh theo lời Phật dạy?',
    options: {
      a: 'Do sự kết hợp ngẫu nhiên của các yếu tố vật chất trong hư không.',
      b: 'Do chơn tâm tự phân chia mình thành các mảnh nhỏ.',
      c: 'Do ý muốn của các vị Phật muốn tạo ra nơi tu hành cho chúng sanh.',
      d: 'Do vô minh vọng động mà biến hiện ra hư không, thế giới và chúng sanh.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Thuyết duyên sanh vật chất này không được đề cập trong đoạn văn.',
      b: 'Sai. Chơn tâm không tự phân chia, chỉ là chúng sanh mê lầm [11].',
      c: 'Sai. Không xuất phát từ ý muốn của chư Phật.',
      d: 'Đúng. Bởi vô minh vọng động nên biến hiện ra có hư không, thế giới và chúng sanh [2].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-4-a-nan-cau-phat-chi-cai-dien-dao',
  slug: 'bai-thu-4-a-nan-cau-phat-chi-cai-dien-dao',
  title: 'Bài Thứ 4 - A-Nan cầu Phật chỉ cái “điên đảo”',
  type: 'article',
  status: 'published',
  order: 5,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-25',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-4-a-nan-cau-phat-chi-cai-dien-dao/H%C3%A0nh_tr%C3%ACnh_nh%E1%BA%ADn_di%E1%BB%87n_Ch%C6%A1n_T%C3%A2m.png',
      readingContent,
      tableOfContents: [
        { id: 'a-nan-cau-phat-chi-cai-dien-dao', label: 'I. A-Nan cầu Phật chỉ cái “điên đảo”' },
        { id: 'phat-dan-ty-du-chi-dien-dao', label: 'II. Phật dẫn tỷ dụ để chỉ rõ cái “điên đảo”', indent: 1 },
        { id: 'chu-giai-ty-du-dien-dao', label: 'Lược giải', indent: 2 },
        { id: 'phat-chi-day-ngay-cai-dien-dao', label: 'III. Phật chỉ ngay cái “điên đảo”', indent: 1 },
        { id: 'phat-chi-vi-me-nen-co-the-gioi-va-chung-sanh', label: 'IV. Phật dạy: Vì mê nên có thế giới và chúng sanh', indent: 1 },
        { id: 'chu-giai-vi-me-nen-co-the-gioi', label: 'Lược giải', indent: 2 },
        { id: 'a-nan-hieu-chan-tam-chua-dam-nhan', label: 'V. A-Nan đã hiểu được “chơn tâm” song chưa dám nhận', indent: 1 },
        { id: 'phat-chi-tam-lan-thu-tu', label: 'VI. Phật chỉ tâm lần thứ tư', indent: 1 },
        { id: 'chu-giai-phat-chi-tam-lan-thu-tu', label: 'Lược giải', indent: 2 },
        { id: 'a-nan-con-nghi-hoi-phat', label: 'VII. A-Nan còn nghi hỏi Phật', indent: 1 },
        { id: 'phat-chi-tam-lan-thu-nam', label: 'VIII. Phật chỉ tâm lần thứ năm', indent: 1 },
        { id: 'chu-giai-phat-chi-tam-lan-thu-nam', label: 'Lược giải', indent: 2 },
        { id: 'phat-chi-them-cai-thay-la-tam', label: 'IX. Phật dạy thêm cái “thấy” là tâm chứ không phải vật', indent: 1 },
        { id: 'chu-giai-cai-thay-la-tam', label: 'Lược giải', indent: 2 },
        { id: 'chu-giai-chi-tam-ro-rang', label: 'Lược giải', indent: 2 },
        { id: 'a-nan-nghi-cai-thay-co-lon-nho-dut-noi', label: 'X. A-Nan nghi “cái thấy” có lớn nhỏ, đứt nối', indent: 1 },
        { id: 'phat-day-tran-canh-co-lon-nho-cai-thay-khong-lon-nho', label: 'XI. Phật dạy: Trần cảnh có lớn nhỏ, cái “thấy” không lớn nhỏ', indent: 1 },
        { id: 'chu-giai-tran-canh-co-lon-nho', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-4-a-nan-cau-phat-chi-cai-dien-dao/Finding_the_True_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/Hhjh3kL7l8s',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/2p735qakbZyd7ncW6mCkD8?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - A-Nan cầu Phật chỉ cái “điên đảo”',
    passPercentage: 70,
    questions,
  },
}

export default lesson
