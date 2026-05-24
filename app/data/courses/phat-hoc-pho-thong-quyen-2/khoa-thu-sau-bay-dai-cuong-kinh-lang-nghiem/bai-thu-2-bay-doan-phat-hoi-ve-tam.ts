import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bay-doan-phat-hoi-ve-tam">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BẢY ĐOẠN PHẬT HỎI VỀ TÂM</h2>
    <p>Trước khi muốn chỉ chơn tâm, Phật gạn hỏi cái vọng tâm. Khi đã hiểu vọng tâm rồi, thì về sau Phật chỉ cái chơn tâm mới khỏi lầm. Cũng như người, trước phân biệt được thau, đồng và vàng giả rồi, thì về sau chỉ đến vàng thiệt, họ mới nhận được chắc chắn, nên trước hỏi về cái Tâm.</p>
    <p>Phật kêu A-Nan hỏi rằng: - Trong giáo pháp ta, ông ngưỡng mộ cái gì mà phát tâm xuất gia?</p>
    <p>A-Nan thưa: - Vì thấy Phật có 32 tướng tốt đẹp lạ thường, con sanh lòng hâm mộ và phát tâm xuất gia.</p>
    <p>Phật hỏi: - Ông nói: "Vì thấy 32 tướng tốt của Phật, sanh lòng hâm mộ"; vậy ông lấy cái gì để thấy, và lấy cái gì để hâm mộ?</p>
    <p>A-Nan thưa: - Con lấy mắt để thấy và dùng tâm hâm mộ.</p>
    <p>Phật hỏi: - Ông nói: "Lấy con mắt để thấy và cái tâm hâm mộ", vậy ông có biết cái tâm và con mắt ở chỗ nào không?</p>
    <p>Ông từ hồi nào đến giờ, nhiều kiếp sanh tử luân hồi, cũng vì tâm và mắt! Nếu ông không biết nó ở chỗ nào, thì không bao giờ hàng phục được phiền não và trần lao.</p>
    <p>Cũng như vị quốc vương, bị giặc đến xâm chiếm, đem binh dẹp trừ, nếu không biết giặc trú ngụ ở chỗ nào thì không bao giờ dẹp được giặc.</p>

    <section id="a-nan-chap-tam-trong-than">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. A-Nan chấp tâm trong thân</h3>
      <p>A-Nan thưa: - Bạch Thế Tôn, không những một mình con hiểu, mà tất cả chúng sanh cũng đều cho "con mắt ở trên mặt, còn tâm ở trong thân".</p>

      <section id="phat-bac-tam-trong-than">
        <h4 class="text-lg font-semibold">Phật bác</h4>
        <p>Phật hỏi: - Ông ngồi trong giảng đường này, trước hết ông thấy cái gì? Và vì sao ông thấy được cây cối ngoài vườn?</p>
        <p>A-Nan thưa: - Bạch Thế Tôn, con ngồi trong giảng đường, trước thấy Phật cùng chư Tăng, và nhờ mở các cửa, nên con nhìn ra ngoài, thấy được cây cối, cảnh vật bên ngoài.</p>
        <p>Phật hỏi: - Có ai ngồi trong nhà, không thấy các vật trong nhà, mà lại thấy được cảnh vật bên ngoài không?</p>
        <p>A-Nan thưa: - Bạch Thế Tôn, người ngồi trong nhà, mà không thấy các vật trong nhà, lại thấy cảnh vật bên ngoài là không có lý.</p>
        <p>Phật nói: - Tâm ông cũng thế, nếu thật ở trong thân ông, thì trước hết nó phải thấy tim, gan, ruột, phổi hoặc móng tay ra, tóc dài, gân chuyển, mạch động ở trong, rồi sau do mở mắt, ông mới thấy đặng các cảnh vật bên ngoài. Cũng như người ngồi trong giảng đường này, trước hết phải thấy Phật cùng chúng Tăng và những vật trong giảng đường, rồi sau dòm ra ngoài, mới thấy núi sông cây rừng v.v..</p>
        <p>Vậy có ai trước thấy tim, gan, ruột, phổi ở trong thân, rồi sau mới thấy các vật ở bên ngoài không? Nếu không, thì ông nói: "tâm ở trong thân" là phi lý.</p>
      </section>
    </section>

    <section id="a-nan-chap-tam-o-ngoai-than">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. A-Nan chấp tâm ở ngoài thân</h3>
      <p>A-Nan bạch Phật: Bạch Thế Tôn, cứ theo lý luận trên thì con hiểu: Tâm ở ngoài thân. Vì nếu ở trong thân, sao không thấy được các vật ở bên trong, mà chỉ thấy cảnh vật bên ngoài. Vậy nên con biết tâm ở ngoài thân. Cũng như cái đèn đốt ngoài nhà, nên chẳng sáng được trong nhà. Nghĩa này đúng rồi, chắc không còn lầm lạc nữa.</p>

      <section id="phat-bac-tam-o-ngoai-than">
        <h4 class="text-lg font-semibold">Phật bác</h4>
        <p>Phật hỏi A-Nan: Cái tâm của ông, nếu ở ngoài thân, thì thân và tâm ông không dính dấp với nhau. Vậy trong lúc tâm biết, thân phải không biết; còn khi thân biết, thì tâm phải không biết.</p>
        <p>Cũng như Ta với các thầy Tỳ-kheo, vì thân thể khác nhau, nên khi Ta thọ trai, các thầy không no được.</p>
        <p>Vậy ông thử xem cánh tay của Ta đây, trong lúc mắt (thân) ông vừa thấy, tâm ông có biết liền không?</p>
        <p>A-Nan thưa: Bạch Thế Tôn, trong lúc con mắt vừa thấy, thì tâm con liền phân biệt.</p>
        <p>Phật hỏi: Nếu mắt ông vừa thấy, tâm ông liền biết, thì thân ông và tâm không thể rời nhau được. Như thế thì ông nói: "Tâm ở ngoài thân" cũng không phải.</p>
      </section>
    </section>

    <section id="a-nan-chap-tam-an-trong-con-mat">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. A-Nan chấp tâm ẩn trong con mắt</h3>
      <p>A-Nan thưa: Bạch Thế Tôn, theo lời Phật bác: "Tâm không phải ở trong thân, vì nó chẳng thấy được bên trong; cũng không phải ở ngoài thân, vì mắt vừa thấy, tâm liền biết, rõ ràng tâm thân không rời nhau".</p>
      <p>Cứ theo lý luận này, thì con hiểu: Tâm núp trong con mắt; cũng như con mắt của người mang kính, nên chỉ thấy các cảnh vật bên ngoài, mà không thấy được vật bên trong.</p>

      <section id="phat-bac-tam-an-trong-con-mat">
        <h4 class="text-lg font-semibold">Phật bác</h4>
        <p>Phật hỏi A-Nan: Nếu tâm con núp trong con mắt, cũng như con mắt người mang kính; vậy Ta hỏi: "Người mang kính trong khi họ thấy cảnh vật, họ có thấy được cái kính mang đó không?"</p>
        <p>A-Nan thưa: Bạch Thế Tôn, thấy được.</p>
        <p>Phật hỏi: Nếu tâm ông cũng như con mắt người mang kính, thì vậy sao người mang kính có thể thấy được cái kính mang, còn tâm ông sao không thấy được con mắt của ông?</p>
        <p>Nếu tâm ông thấy được con mắt của ông, thì con mắt của ông thành ra cảnh bị thấy, nó phải ở ngoài thân ông mới phải.</p>
        <p>Nếu thân, tâm ngoài nhau, thì làm sao mắt ông vừa thấy, tâm ông liền phân biệt được?</p>
        <p>Nếu tâm ông không thấy được con mắt của ông, thì sao ông tỷ dụ như con mắt người mang kính?</p>
        <p>Thế nên ông nói: "Tâm núp trong con mắt, như con mắt người mang kính núp sau cái kính", cũng không phải.</p>
      </section>
    </section>

    <section id="a-nan-chap-tro-lai-tam-o-trong-than">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. Ông A-Nan chấp trở lại, tâm ở trong thân</h3>
      <p>A-Nan thưa: Bạch Thế Tôn, bây giờ con nghĩ: Nhắm mắt thấy tối, là tâm thấy trong thân (gan ruột); nhờ cửu khiếu, thất huyệt (các giác quan) trống hở, nên mở mắt thấy sáng là tâm thấy các cảnh vật ngoài thân. Chẳng biết nghĩa này có đúng không?</p>

      <section id="phat-bac-thay-toi-la-thay-trong-than">
        <h4 class="text-lg font-semibold">Phật bác</h4>
        <p>Phật hỏi A-Nan: Ông nói: "Nhắm mắt thấy tối là thấy trong thân"; vậy thì khi ông thấy tối, cảnh tối đó có đối trước mắt ông hay không?</p>
        <p>Nếu cái tối không đối trước mắt, thì không thành cái nghĩa thấy. Còn có đối trước mắt, thì thấy tối là thấy trước, sao ông lại nói thấy trong?</p>
        <p>Nếu ông cho thấy tối là thấy trong thân (gan ruột) thì khi ở trong nhà tối không có ánh sáng, ông thấy tối đó, cũng là thấy gan ruột của ông sao?</p>
        <p>Lại nữa, nếu nhắm mắt thấy tối, ông cho là thấy trong thân, mở mắt thấy sáng là thấy ngoài thân, vậy sao ông không thấy được cái mặt?</p>
        <p>Cái mặt ở ngoài, ông mở mắt còn không thấy, thì khi nhắm mắt thấy tối, làm sao chắc là thấy trong thân?</p>
        <p>Nếu ông thấy được cái mặt ông, thì con mắt với tâm hiểu biết của ông, phải ở ngoài thân ông.</p>
        <p>Nếu tâm và mắt ở ngoài thân, thì nó không phải là tâm mắt của ông rồi.</p>
        <p>Nếu ông cho tâm, mắt (ngoài thân ông) đó cũng là ông, vậy thì nay Ta thấy được mặt ông, thế thì Ta đây cũng là tâm, mắt của ông sao?</p>
        <p>Lại nữa, trong lúc con mắt ông biết, thì thân ông cũng phải không biết, khi thân ông biết, thì con mắt ông phải không biết (vì ông chấp nó rời nhau).</p>
        <p>Nếu ông cho cả hai đều biết, thì một mình ông phải có hai cái biết (tâm), vậy khi tu hành chứng quả, ông sẽ thành hai vị Phật sao?</p>
        <p>Thế nên phải biết: Ông nói: "thấy tối là thấy trong thân" cũng không phải.</p>
      </section>
    </section>

    <section id="a-nan-chap-tam-tuy-cho-hoa-hiep-ma-co">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. A-Nan chấp tâm tùy chỗ hòa hiệp mà có</h3>
      <p>A-Nan thưa: Bạch Thế Tôn, con thường nghe Phật dạy tứ chúng: "Do tâm sanh, nên các pháp mới sanh, do các pháp sanh, cho nên tâm mới sanh". Nay con suy nghĩ, thì cái "suy nghĩ" đó là tâm của con; tùy hòa hiệp chỗ nào, thì tâm liền theo đó mà có, không phải ở trong, ngoài và chính giữa.</p>

      <section id="phat-bac-tam-tuy-cho-hoa-hiep">
        <h4 class="text-lg font-semibold">Phật bác</h4>
        <p>Phật hỏi A-Nan: Ông nói: "Tùy hòa hiệp chỗ nào, thì tâm liền theo đó mà có"; như thế thì cái tâm của ông không có thật thể.</p>
        <p>Nếu tâm ông không có hình thể (tức là không có) thì lấy cái gì mà hòa hiệp? Còn nó có hình thể, thì ông thử lấy tay phải đánh qua tay trái, ông liền biết đau. Vậy cái tâm biết đau này, là từ trong thân chạy ra hay từ bên ngoài chạy vào?</p>
        <p>Nếu ông nói: "nó từ trong thân chạy ra", thì trước hết nó phải thấy gan ruột trong thân của ông. Còn nếu nó từ ngoài hư không chạy vào, thì trước hết nó phải thấy cái mặt của ông.</p>
        <p>A-Nan thưa: Con mắt thì thấy, còn cái tâm thì biết; Phật nói: "cái tâm thấy", nghĩa đó không phải.</p>
        <p>Phật hỏi: Nếu con mắt thấy thì những người chết, con mắt vẫn còn, sao họ không thấy vật?</p>
        <p>Nếu người chết, mà vẫn còn thấy vật, thì sao gọi là người chết?</p>
        <p>Lại nữa, nếu cái tâm hiểu biết của ông có thật thể, thì có một thể hay nhiều thể, ở khắp cả thân ông, hay không khắp cả thân?</p>
        <p>Nếu tâm ông có một thể, và ở khắp cả thân, thì khi ông lấy tay đánh thử một chỗ trên thân ông, đáng lẽ ra thân đều biết đau hết, vì tâm ở khắp cả thân và đồng một thể.</p>
        <p>Nếu cả thân đều biết đau, thì cái đau đó lẽ ra không có ở nhất định chỗ nào.</p>
        <p>Nếu cái đau có chỗ ở nhất định, thì ông nói: "cái tâm một thể và ở khắp cả thân" cũng không phải. Còn nói "tâm ông có nhiều thể", thì thành ra nhiều người; vậy cái nào là tâm của ông?</p>
        <p>Nếu tâm ông không ở khắp thân thể, vậy ông đồng thời vừa đụng trên đầu, và cũng vừa đụng dưới chân, khi ấy nếu đầu biết đau, thì chân phải không biết, còn chân biết đau, thì đầu phải không biết.</p>
        <p>Nhưng thực tế thì, đầu và chân của ông cả hai đều biết đau.</p>
        <p>Thế nên ông nói: "tùy hòa hiệp chỗ nào, thì tâm tùy theo đó mà có", cũng không phải.</p>
      </section>
    </section>

    <section id="a-nan-chap-tam-o-chinh-giua">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. A-Nan chấp tâm ở chính giữa</h3>
      <p>A-Nan bạch Phật: Con nghe Phật cùng với ngài Văn Thù... khi luận về "thật tướng" (chơn tâm), Phật dạy rằng: "Tâm chẳng ở trong và cũng chẳng ở ngoài".</p>
      <p>Nay con suy nghĩ: Nếu tâm ở trong thân, sao chẳng biết được bên trong? Còn nói tâm ở ngoài, thì sao tâm lại biết nhau? Như thế thì "tâm" chắc ở chính giữa.</p>

      <section id="phat-bac-tam-o-chinh-giua">
        <h4 class="text-lg font-semibold">Phật bác</h4>
        <p>Phật hỏi: Ông nói "Tâm ở chính giữa", vậy cái "chính giữa" đó ở chỗ nào? Phải có nhất định và rõ ràng, ở nơi thân hay ở nơi cảnh?</p>
        <p>Nếu ở nơi thân, thì ở một bên thân, hay ở giữa thân?</p>
        <p>Nếu ở một bên thì không phải chính giữa, còn ở chính giữa thân thì đồng với ở trong thân, như đã nói trước. Nghĩa là: tâm phải thấy trước tim, gan, ruột, phổi bên trong.</p>
        <p>Còn như ở về cảnh, thì có thể nêu (cái giữa) ra được, hay không nêu ra được?</p>
        <p>Nếu không nêu ra được, thì đồng như không có; còn nếu nêu ra được, thì không thể nhất định chỗ nào là chính giữa.</p>
        <p>Vì sao? Như người lấy cây cắm chính giữa, nếu người ở phía Đông thì xem thấy cây ấy cắm ở phía Tây; còn người ở phía Nam, thì xem thấy cây ở phía Bắc.</p>
        <p>Cái cây cắm nêu đó đã không nhất định chỗ nào là chính giữa, thì cái tâm của ông cũng phải lộn lạo không định.</p>
        <p>A-Nan thưa: Con nói "chính giữa" không phải hai chỗ ấy. Như Phật thường nói: "con mắt đối với sắc trần, sanh ra nhãn thức". Một bên con mắt thì có phân biệt, một bên sắc trần lại không phân biệt, cái thức sanh chính giữa, đó là chỗ của tâm ở.</p>
        <p>Phật hỏi: Ông nói: "Tâm ông sanh chính giữa căn và trần cảnh" hay không gồm cả hai.</p>
        <p>Nếu gồm cả hai, thì căn với cảnh lộn lạo (căn không thành căn, cảnh không thành cảnh; vì vừa biết mà cũng là không biết). Song trần cảnh thì không có tri giác, còn căn lại có tri giác, hai bên đối lập riêng khác, vậy lấy chỗ nào làm giữa.</p>
        <p>Còn như không gồm cả căn và cảnh, thì tâm không thật thể. Vậy lấy cái gì làm chính giữa?</p>
        <p>Thế nên phải biết: Ông nói "tâm ở chính giữa" cũng không phải.</p>
      </section>
    </section>

    <section id="a-nan-chap-cai-khong-truoc-lam-tam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. A-Nan chấp cái "không trước" làm tâm</h3>
      <p>A-Nan thưa: Bạch Thế Tôn, ngày trước con thấy khi Phật cùng với ông Đại Mục-Kiền-Liên, Tu-Bồ-Đề v.v... nói pháp, Phật có dạy rằng:</p>
      <p>"Cái tâm hiểu biết phân biệt, không ở trong thân, không ở ngoài thân, không ở chính giữa, không ở chỗ nào cả; không dính mắc (vô trước) tất cả, đó gọi là tâm".</p>
      <p>Vậy nay con lấy cái "không dính mắc" đó làm tâm, chẳng biết có hay được không?</p>

      <section id="phat-bac-cai-khong-truoc-lam-tam">
        <h4 class="text-lg font-semibold">Phật bác</h4>
        <p>Phật hỏi: - Ông nói: lấy cái "không dính mắc tất cả" làm tâm. Vậy Ta hỏi ông: tất cả các vật tượng trong thế gian này, nào là hư không, thế giới v.v... Vậy các vật tượng ấy có mà ông không dính mắc (trước) hay là không, mà ông không dính mắc?</p>
        <p>Nếu các vật tượng ấy không có, thì cũng như lông rùa, sừng thỏ: nó đã không, thời có gì mà dính mắc.</p>
        <p>Nếu còn có cái "không dính mắc" thì ông không thể nói rằng "không dính mắc" được. Vì cái gì không có hình tướng thì không, còn cái gì có hình tướng là có. Nếu có hình tướng thì phải bị "dính mắc".</p>
        <p>Thế nên ông nói: "không dính mắc tất cả làm tâm" cũng không phải.</p>
      </section>
    </section>

    <section id="luoc-giai">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">Lược giải</h3>
      <p>Đã bảy lần Phật gạn về tâm, ông A-Nan đều nói không trúng. Vậy nên biết: Nếu chưa ngộ được thể tánh chơn tâm, thì dù cho nói cách nào cũng sai cả. Chẳng khác nào như trong Nhiếp Đại Thừa luận có cái dụ: "kẻ mù rờ voi". Người rờ nhằm cái chân thì nói con voi như cột nhà, người rờ nhằm lỗ tai, thì nói voi như cái hốt rác, người rờ nhằm đuôi, thì nói voi như cây chổi quét nhà v.v... mặc dù rờ trúng, nhưng nói và nghĩ thế nào cũng sai cả. Phải thấy chơn tướng của con voi, thì nói mới không sai.</p>
      <p>Chúng ta cũng nên lưu ý; trong kinh này, ngài A-Nan đại diện cho chúng sanh mê lầm hiện tại, cũng như tương lai mà đứng ra thưa hỏi.</p>
      <p>Có những đoạn ngài trình bày hoặc thưa hỏi rất thấp, là đại diện cho những chúng sanh mê lầm bực hạ căn. Có những đoạn Ngài trình bày hoặc thưa hỏi thâm thúy, là đại diện cho những chúng sanh căn tánh bực thượng. Vậy chúng ta không nên căn cứ lời trình bày trên mặt văn tự mà phê phán trình độ của Ngài.</p>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Tại sao Phật lại gạn hỏi về 'vọng tâm' trước khi chỉ ra 'chơn tâm'?",
    options: {
      a: 'Vì vọng tâm và chơn tâm thực chất là một thể thống nhất.',
      b: 'Vì vọng tâm là nguồn gốc duy nhất của mọi trí tuệ.',
      c: 'Để chứng minh rằng con người không hề có chơn tâm.',
      d: 'Để người nghe không bị lầm lẫn khi chơn tâm được chỉ ra sau này.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tài liệu không đề cập đến việc vọng tâm và chơn tâm là một thể thống nhất ở phần này [1].',
      b: 'Sai. Vọng tâm không được xem là nguồn gốc của trí tuệ [1].',
      c: 'Sai. Việc gạn hỏi hoàn toàn không nhằm chứng minh con người không có chơn tâm [1].',
      d: 'Đúng. Phật gạn hỏi để người nghe hiểu rõ vọng tâm trước, thì về sau khi Phật chỉ cái chơn tâm mới khỏi lầm [1].',
    },
  },
  {
    question: 'Trong đoạn đối thoại đầu tiên, Ananda trả lời rằng ông dùng cái gì để thấy và hâm mộ 32 tướng tốt của Phật?',
    options: {
      a: 'Dùng căn lành từ nhiều kiếp để thấy.',
      b: 'Dùng mắt để thấy và dùng tâm để hâm mộ.',
      c: 'Dùng tâm để thấy và dùng trí để hâm mộ.',
      d: 'Dùng ý thức để vừa thấy vừa hâm mộ.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. A-Nan không nhắc đến căn lành trong câu trả lời [2].',
      b: "Đúng. Ngài A-Nan đã thưa với Phật rằng: 'Con lấy mắt để thấy và dùng tâm hâm mộ' [2].",
      c: 'Sai. Ngài A-Nan trả lời dùng mắt để thấy, không phải dùng tâm để thấy [2].',
      d: 'Sai. Ngài A-Nan đã phân định rõ dùng mắt để thấy và tâm để hâm mộ [2].',
    },
  },
  {
    question: "Lập luận chính của Phật để bác bỏ quan điểm 'Tâm ở trong thân' là gì?",
    options: {
      a: 'Vì tâm vốn không có hình tướng nên không thể nằm trong vật có hình tướng.',
      b: 'Thân thể là giả tạm nên tâm không thể trú ngụ bên trong.',
      c: 'Tâm ở trong thân thì không thể liên kết được với thế giới bên ngoài.',
      d: 'Tâm không thấy được các bộ phận nội tạng như tim, gan, phèo, phổi.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Lập luận của Phật không dựa trên vấn đề hình tướng ở phần này [3], [4].',
      b: 'Sai. Phật không đề cập đến việc thân thể là giả tạm [3], [4].',
      c: 'Sai. Sự liên kết bên ngoài không phải là lý lẽ chính ở lập luận này [3], [4].',
      d: 'Đúng. Phật lập luận rằng nếu tâm thật sự ở trong thân, thì trước hết nó phải thấy được các cơ quan nội tạng như tim, gan, ruột, phổi trước khi thấy cảnh vật bên ngoài [3], [4].',
    },
  },
  {
    question: "Khi bác bỏ quan điểm 'Tâm ở ngoài thân', Phật dùng ví dụ về việc 'thọ trai' (ăn cơm) để nói lên điều gì?",
    options: {
      a: 'Ngoài thân không có không gian để tâm trú ngụ.',
      b: 'Tâm là thứ điều khiển việc ăn uống nên không thể ở ngoài.',
      c: 'Việc ăn cơm chỉ là hoạt động của thân, không liên quan đến tâm.',
      d: 'Thân và tâm không thể tách rời; nếu tâm ở ngoài thì khi thân biết, tâm sẽ không biết.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Phật không bàn về vấn đề không gian [5].',
      b: 'Sai. Trọng tâm của ví dụ không nhằm giải thích việc tâm điều khiển ăn uống [5].',
      c: 'Sai. Thân và tâm có sự liên kết, không phải là không liên quan [5].',
      d: 'Đúng. Phật ví dụ khi Ngài thọ trai thì các thầy Tỳ-kheo không thể no được do thân thể khác nhau. Tương tự, nếu tâm ở ngoài thân thì khi mắt vừa thấy, tâm không thể liền phân biệt [5].',
    },
  },
  {
    question: "Tại sao việc so sánh 'Tâm núp trong con mắt' giống như 'mắt người mang kính' lại bị Phật bác bỏ?",
    options: {
      a: 'Vì khi mang kính, tầm nhìn bị hạn chế nên không giống với sự sáng suốt của tâm.',
      b: 'Vì người mang kính thấy được kính, còn tâm không thấy được con mắt.',
      c: 'Vì con mắt vốn dĩ đã là một phần của tâm.',
      d: 'Vì kính là vật vô tri, không thể so sánh với tâm.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Việc tầm nhìn bị hạn chế không phải là lý lẽ Phật đưa ra [6], [7].',
      b: 'Đúng. Phật lý luận rằng người mang kính có thể thấy được cái kính mình mang, vậy nếu tâm núp trong mắt thì tâm cũng phải thấy được con mắt [7].',
      c: 'Sai. Phật không kết luận con mắt là một phần của tâm [7].',
      d: 'Sai. Việc kính là vật vô tri không được sử dụng để bác bỏ [7].',
    },
  },
  {
    question: "Trong quan điểm thứ tư, Ananda cho rằng nhắm mắt thấy tối là 'thấy trong thân'. Phật phản bác điều này như thế nào?",
    options: {
      a: 'Trong thân không có màu tối mà chỉ có các cơ quan.',
      b: 'Cái tối đó đối trước mắt nên là thấy bên ngoài, không phải thấy bên trong.',
      c: 'Nhắm mắt thì tâm không còn hoạt động để mà thấy.',
      d: 'Thấy tối là do thiếu ánh sáng chứ không phải là một sự thấy.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phật không dùng lý luận về việc trong thân không có màu tối [8].',
      b: 'Đúng. Phật chỉ ra rằng khi thấy tối, cảnh tối đó đối trước mắt, mà đã có đối trước mắt thì đó là thấy trước, không thể gọi là thấy trong [8].',
      c: 'Sai. Khi nhắm mắt tâm vẫn có hoạt động hiểu biết [8].',
      d: 'Sai. Thiếu ánh sáng không phải là cách Phật phản bác ở đây [8], [9].',
    },
  },
  {
    question: "Trong lập luận về 'tâm không dính mắc' (vô trước), Phật đặt ra vấn đề gì về sự tồn tại của các vật tượng?",
    options: {
      a: 'Chỉ có chơn tâm mới thực sự đạt được trạng thái vô trước.',
      b: 'Nếu vật không có thì lấy gì để không dính mắc, nếu vật có thì phải có sự dính mắc.',
      c: "Dính mắc là bản chất tự nhiên của tâm nên không thể nói là 'vô trước'.",
      d: 'Các vật tượng chỉ là ảo ảnh nên tâm không cần dính mắc.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phật không đề cập chơn tâm mới đạt vô trước trong lập luận bác bỏ này [10].',
      b: 'Đúng. Phật lập luận rằng nếu các vật tượng không có thì không có gì để dính mắc, còn nếu vật tượng có hình tướng thì chắc chắn phải bị dính mắc [10].',
      c: 'Sai. Phật không kết luận dính mắc là bản chất tự nhiên của tâm [10].',
      d: 'Sai. Phật không nói các vật tượng là ảo ảnh [10].',
    },
  },
  {
    question: "Ví dụ 'kẻ mù rờ voi' trong phần Lược giải nhằm minh họa điều gì?",
    options: {
      a: 'Ananda là người có căn tánh thấp kém như kẻ mù.',
      b: 'Thế giới này là một sự tổng hòa của nhiều mảnh ghép khác nhau.',
      c: 'Tri thức của con người là hữu hạn so với sự vô biên của vũ trụ.',
      d: 'Nếu chưa ngộ được chơn tâm thì mọi hiểu biết và suy luận đều sai lạc.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Ví dụ này không nhằm phán xét căn tánh của ngài A-Nan [11], [12].',
      b: 'Sai. Ví dụ không nhằm giải thích cấu tạo của thế giới [11].',
      c: 'Sai. Đây không phải ý nghĩa của ví dụ về vũ trụ và tri thức [11].',
      d: 'Đúng. Tác giả dẫn chứng rằng nếu chưa ngộ được thể tánh chơn tâm, thì dù cho có nói hay nghĩ cách nào cũng đều sai cả, giống như kẻ mù rờ voi [11].',
    },
  },
  {
    question: 'Văn bản khuyên người đọc nên có thái độ như thế nào đối với các câu hỏi của ngài Ananda?',
    options: {
      a: 'Cần học thuộc lòng để có thể đối đáp lại các cuộc tranh luận.',
      b: 'Chỉ nên tập trung vào những đoạn thưa hỏi thâm thúy.',
      c: 'Không nên căn cứ vào mặt văn tự để phê phán trình độ của ngài.',
      d: 'Nên coi đó là những câu hỏi ngớ ngẩn của người mới tu hành.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Không có lời khuyên học thuộc lòng trong văn bản [12].',
      b: 'Sai. Văn bản không khuyến khích chỉ tập trung vào đoạn thâm thúy [12].',
      c: 'Đúng. Văn bản nhắc nhở chúng ta không nên căn cứ lời trình bày trên mặt văn tự mà phê phán trình độ của ngài A-Nan [12].',
      d: 'Sai. Ngài A-Nan đại diện cho cả chúng sanh căn tánh bậc hạ và bậc thượng, không phải là những câu hỏi ngớ ngẩn [12].',
    },
  },
  {
    question: "Theo lời Phật, tại sao việc biết rõ 'chỗ ở' của tâm và mắt lại quan trọng đối với người tu hành?",
    options: {
      a: 'Để có thể giải thích giáo pháp cho người khác một cách logic.',
      b: 'Để hiểu rõ cấu tạo sinh học của cơ thể con người.',
      c: 'Để có thể hàng phục được phiền não và trần lao.',
      d: 'Để chứng minh mình là người có trí tuệ hơn người.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Phật không nhắc đến việc giải thích giáo pháp cho người khác ở đây [2].',
      b: 'Sai. Phật không hướng đến việc hiểu cấu tạo sinh học [2].',
      c: 'Đúng. Phật dạy rằng nếu không biết tâm và mắt ở chỗ nào, thì không bao giờ hàng phục được phiền não và trần lao [2].',
      d: 'Sai. Việc này không nhằm chứng tỏ sự thông thái [2].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-2-bay-doan-phat-hoi-ve-tam',
  slug: 'bai-thu-2-bay-doan-phat-hoi-ve-tam',
  title: 'Bài Thứ 2 - Bảy đoạn Phật hỏi về Tâm',
  type: 'article',
  status: 'published',
  order: 3,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-25',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-2-bay-doan-phat-hoi-ve-tam/B%E1%BA%A3y_L%E1%BA%A7n_G%E1%BA%A1n_H%E1%BB%8Fi_T%C3%A2m.png',
      readingContent,
      tableOfContents: [
        { id: 'bay-doan-phat-hoi-ve-tam', label: 'Bảy đoạn Phật hỏi về Tâm' },
        { id: 'a-nan-chap-tam-trong-than', label: 'I. A-Nan chấp tâm trong thân', indent: 1 },
        { id: 'phat-bac-tam-trong-than', label: 'Phật bác', indent: 2 },
        { id: 'a-nan-chap-tam-o-ngoai-than', label: 'II. A-Nan chấp tâm ở ngoài thân', indent: 1 },
        { id: 'phat-bac-tam-o-ngoai-than', label: 'Phật bác', indent: 2 },
        { id: 'a-nan-chap-tam-an-trong-con-mat', label: 'III. A-Nan chấp tâm ẩn trong con mắt', indent: 1 },
        { id: 'phat-bac-tam-an-trong-con-mat', label: 'Phật bác', indent: 2 },
        { id: 'a-nan-chap-tro-lai-tam-o-trong-than', label: 'IV. Ông A-Nan chấp trở lại, tâm ở trong thân', indent: 1 },
        { id: 'phat-bac-thay-toi-la-thay-trong-than', label: 'Phật bác', indent: 2 },
        { id: 'a-nan-chap-tam-tuy-cho-hoa-hiep-ma-co', label: 'V. A-Nan chấp tâm tùy chỗ hòa hiệp mà có', indent: 1 },
        { id: 'phat-bac-tam-tuy-cho-hoa-hiep', label: 'Phật bác', indent: 2 },
        { id: 'a-nan-chap-tam-o-chinh-giua', label: 'VI. A-Nan chấp tâm ở chính giữa', indent: 1 },
        { id: 'phat-bac-tam-o-chinh-giua', label: 'Phật bác', indent: 2 },
        { id: 'a-nan-chap-cai-khong-truoc-lam-tam', label: 'VII. A-Nan chấp cái "không trước" làm tâm', indent: 1 },
        { id: 'phat-bac-cai-khong-truoc-lam-tam', label: 'Phật bác', indent: 2 },
        { id: 'luoc-giai', label: 'Lược giải', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-2-bay-doan-phat-hoi-ve-tam/Seven_Inquiries_of_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/yQY9cr9wRCg',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4yqcCIOgrcgn8f0Y3Tmdir?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bảy đoạn Phật hỏi về Tâm',
    passPercentage: 70,
    questions,
  },
}

export default lesson
