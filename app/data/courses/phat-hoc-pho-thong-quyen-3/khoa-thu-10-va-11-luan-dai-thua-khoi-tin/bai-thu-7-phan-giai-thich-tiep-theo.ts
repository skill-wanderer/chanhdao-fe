import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ BẢY · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="noi-ve-nghia-bat-giac-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Nói về nghĩa "Bất giác" (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="noi-ve-tam-nhiem-o" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">g. Nói về Tâm nhiễm ô, có 6 lớp</h3>
    </div>

    <h4 id="chanh-van-tam-nhiem-o" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Tâm nhiễm ô này (kể từ Thô đến Tế) có 6 lớp:</p>
    <p id="nhiem-o-chap-truoc"><strong>Nhiễm ô về chấp trước (chấp tương ưng nhiễm, tức là hai món Thô: chấp thủ tướng và kế danh tự tướng).</strong> Hành giả phải đến quả Nhị thừa hay vị Thập tín, mới trừ được món nhiễm ô này.</p>
    <p id="nhiem-o-bat-doan"><strong>Nhiễm ô bất đoạn (Bất đoạn tương ưng nhiễm, tức là món Thô về tương tục tướng).</strong> Hành giả từ địa vị Thập tín đến địa vị Thập hồi hướng, phương tiện tu hành, lần lần xả bỏ, khi đến Sơ địa (tịnh tâm địa) mới hoàn toàn xa lìa được món nhiễm ô này.</p>
    <p id="nhiem-o-phan-biet"><strong>Nhiễm ô về trí phân biệt (Phân biệt trí tương ưng nhiễm, tức là món Thô về Trí tướng).</strong> Hành giả phải từ Nhị địa (Cụ giới địa) lần lần diệt trừ, cho đến Thất địa (Vô tướng phương tiện địa) mới hoàn toàn xa lìa nhiễm ô này.</p>
    <p id="nhiem-o-canh-sac"><strong>Nhiễm ô về cảnh sắc (Hiện sắc bất tương ưng nhiễm, tức là món Tế về Hiện tướng).</strong> Hành giả tu hành phải đến Bát địa (Sắc tự tại địa) mới xa lìa được món nhiễm ô này.</p>
    <p id="nhiem-o-nang-phan-biet"><strong>Nhiễm ô về năng phân biệt (Năng kiến tâm bất tương ưng nhiễm, tức là món Tế về Kiến tướng).</strong> Hành giả tu hành phải đến Cửu địa, mới xa lìa được món nhiễm ô này.</p>
    <p id="nhiem-o-ve-nghiep"><strong>Nhiễm ô về nghiệp (Căn bản nghiệp bất tương ưng nhiễm, tức là món Tế về Nghiệp tướng).</strong> Hành giả từ Thập địa lên Đẳng giác Bồ Tát và phải đến quả vị Phật, mới có thể diệt trừ món nhiễm ô này.</p>
    <p>Tóm lại: Vì không ngộ được chơn tâm (bất đạt nhứt pháp giới nghĩa) nên sanh ra nhiều lớp nhiễm ô (Tam tế, Lục thô). Muốn diệt trừ các nhiễm ô này, hành giả phải trải qua nhiều địa vị: Bắt đầu từ địa vị Thập tín để tâm quán sát và học tập đoạn trừ tâm nhiễm ô. Qua Tam hiền rồi vào Thập địa, tuỳ mỗi địa vị, diệt trừ mỗi phần tâm nhiễm ô (vọng hoặc); đến quả vị Phật mới diệt hoàn toàn rốt ráo.</p>

    <h4 id="luoc-giai-tam-nhiem-o" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Vì không ngộ được chơn tâm, nên sanh ra trùng trùng mê vọng. Các lớp mê vọng tuy nhiều, nhưng đại lược chia làm 6 lớp, từ Thô đến Tế.</p>
    <p><strong>Chấp tương ưng nhiễm</strong> (nhiễm ô về sự chấp trước) tức là hai món Thô thứ ba và thứ tư (chấp thủ tướng và kế danh tự tướng) trong 6 món Thô. Hành giả tu hành phải đến Nhị thừa hay Thập tín mới đoạn trừ được lớp vọng nhiễm này.</p>
    <p><strong>Bất đoạn tương ưng nhiễm</strong> (nhiễm ô về bất đoạn) tức là món Thô thứ hai (tương tục tướng) trong 6 món Thô. Hành giả tu hành từ địa vị Tam hiền đoạn trừ lần lần cho đến Sơ địa mới trừ hết lớp vọng nhiễm này.</p>
    <p><strong>Phân biệt trí tương ưng nhiễm</strong> (nhiễm ô về phân biệt) tức là món Thô thứ nhứt (trí tướng) trong 6 món Thô. Hành giả tu hành từ Nhị địa cho đến Thất địa mới trừ được lớp vọng nhiễm này.</p>
    <p><strong>Hiện sắc bất tương ưng nhiễm</strong> (nhiễm ô về cảnh giới) tức là món Tế thứ ba (hiện tướng) trong 3 món Tế. Hành giả tu hành đến Bát địa mới đoạn được lớp vọng nhiễm này.</p>
    <p><strong>Năng kiến tâm bất tương ưng nhiễm</strong> (nhiễm ô về năng phân biệt) tức là món Tế thứ hai (kiến tướng) trong 3 món Tế. Hành giả tu hành, phải đến Cửu địa, mới đoạn được lớp vọng nhiễm này.</p>
    <p><strong>Căn bản nghiệp bất tương ưng nhiễm</strong> (nhiễm ô về nghiệp) tức là món Tế thứ nhứt (Vô minh nghiệp tướng) trong 3 món Tế. Hành giả tu hành khi sắp chứng quả Phật, mới đoạn trừ được lớp vọng nhiễm rất vi tế này.</p>
    <p>Tóm lại: Vì vô minh vọng nhiễm chồng chất nhiều lớp, từ nhiều đời nhiều kiếp, nên hành giả phải trải qua nhiều giai đoạn, nhiều địa vị để phá trừ. Phá một lớp vô minh, thì Hành giả chứng lên được một địa vị. Như thế, bắt đầu từ phàm phu, tu đến quả vị Phật, Hành giả phải trải qua thời gian là 3 lần vô số kiếp (A tăng kỳ kiếp) và qua 55 địa vị, mới đoạn mê hoặc (vô minh) được hoàn toàn và chứng được rốt ráo quả Phật.</p>

    <h4 id="van-dap-tuong-ung-bat-tuong-ung" class="mt-6 text-lg font-semibold">Vấn đáp: Tương ưng và Bất tương ưng</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Sao gọi là "tương ưng" (3 món nhiễm về tương ưng)?</p>
      <p class="mb-3"><strong>Đáp:</strong> Vì Tâm vương, Tâm sở khác nhau (tâm niệm, pháp dị) và tánh chất nhiễm ô của cảnh bị duyên không đồng; song Tâm vương khi duyên cảnh nào thì Tâm sở cũng ưng thuận duyên theo cảnh đó, nên gọi là "tương ưng" (ngôn thuyết).</p>
      <p class="mb-1"><strong>Hỏi:</strong> Sao gọi là "bất tương ưng" (3 món nhiễm về bất tương ưng)?</p>
      <p class="mb-0"><strong>Đáp:</strong> Vì tâm mới vừa bất giác vọng động, chưa phân ra căn cảnh hay Tâm vương, Tâm sở, nên gọi là "bất tương ưng".</p>
    </div>
    <p class="mt-4">Trong 6 món nhiễm ô này, sở dĩ 3 món đầu (chấp tương ưng nhiễm, bất đoạn tương ưng nhiễm và phân biệt trí tương ưng nhiễm) đều gọi là "tương ưng", là vì chúng nó thô phù, lại chia ra 2 phần rất rõ rệt (căn, cảnh; Tâm vương, Tâm sở) và có sự hoà hiệp nhau (tương ưng).</p>
    <p>Còn 3 món nhiễm ô sau (hiện sắc bất tương ưng nhiễm, năng kiến tâm bất tương ưng nhiễm và căn bản nghiệp bất tương ưng nhiễm) lại gọi là "Bất tương ưng"; là vì chúng nó rất vi tế, còn ở trong vòng trừu tượng, chưa phân Năng, Sở, Tâm, Cảnh, nên chẳng có sự hợp nhau.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="tam-nhiem-o-va-vo-minh" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">h. Tâm nhiễm ô và vô minh khác nhau như thế nào?</h3>
    </div>

    <h4 id="chanh-van-tam-nhiem-o-va-vo-minh" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Tâm nhiễm ô là phiền não chướng (phiền não ngại) làm chướng ngại căn bản trí (vô phân biệt trí) duyên Chơn như.</p>
    <p>Vô minh là sở tri chướng (trí ngại) làm chướng ngại hậu đắc trí (tự nhiên nghiệp trí) duyên các pháp sai biệt của thế gian.</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Tại sao tâm nhiễm ô lại chướng ngại căn bản trí?</p>
      <p class="mb-3"><strong>Đáp:</strong> Vì tâm nhiễm ô sanh ra Năng kiến tướng (kiến phần) và Năng hiện tướng (tướng phần) rồi vọng sanh ra chấp thủ cảnh giới (thuộc về Lục thô), nên trái với tánh Chơn như bình đẳng.</p>
      <p class="mb-1"><strong>Hỏi:</strong> Tại sao vô minh (bất giác) lại chướng ngại Hậu đắc trí (sai biệt trí)?</p>
      <p class="mb-0"><strong>Đáp:</strong> Vì các pháp thường tịnh, không có khởi động; còn vô minh thì bất giác vọng động, nên trái với tánh thường tịnh của các pháp. Bởi thế nên không thể tuỳ thuận biết hết các cảnh giới thế gian.</p>
    </div>

    <h4 id="luoc-giai-tam-nhiem-o-va-vo-minh" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Vô minh và tâm nhiễm ô khác nhau thế nào? Từ vô minh sanh ra tâm nhiễm ô (Tam tế, Lục thô) nên vô minh là gốc, mà tâm nhiễm ô là sự sai biệt của vô minh.</p>
    <p>Vô minh thuộc về mê "Lý", tức là sở tri chướng, làm chướng ngại Hậu đắc trí, cũng gọi là Sai biệt trí (trí này phân biệt các pháp sai biệt thế gian).</p>
    <p>Tâm nhiễm ô thuộc về mê "Sự", tức là phiền não chướng, làm chướng ngại Căn bản trí; cũng gọi là Vô phân biệt trí (trí này duyên Chơn như).</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Tại sao phiền não (tâm nhiễm ô) làm chướng ngại Căn bản trí, còn Sở tri (vô minh) lại chướng ngại Hậu đắc trí?</p>
      <p class="mb-0"><strong>Đáp:</strong> Tánh Chơn như bình đẳng, không có năng sở bỉ thử, nên phải dùng Căn bản trí (vô phân biệt trí) mới duyên được Chơn như. Song vì phiền não là tâm nhiễm ô lại chao động, có năng sở bỉ thử, ngàn sai muôn khác, trái với chơn như bình đẳng, nên làm chướng ngại "Vô phân biệt trí" (Căn bản trí).</p>
    </div>
    <p class="mt-4">Các pháp thế gian không rời chơn như, và chơn như đã thanh tịnh nên các pháp thế gian cũng phải thanh tịnh. Song vì vô minh bất giác, trái với tánh thanh tịnh của các pháp, nên không thật biết được các pháp. Bởi thế nên vô minh (sở tri chướng) làm chướng ngại Sai biệt trí (Hậu đắc trí).</p>
    <p class="italic text-text-muted">(Đã nói nhơn duyên sanh diệt rồi, tiếp theo đây sẽ nói tướng sanh diệt.)</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="ba-tuong-nhiem-o-sanh-diet" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">i. Ba tướng nhiễm ô sanh diệt</h3>
    </div>

    <h4 id="chanh-van-ba-tuong-sanh-diet" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Lại nữa, tướng nhiễm ô sanh diệt, có 3 thứ:</p>
    <p id="tuong-sanh-diet-tho"><strong>Tướng sanh diệt thô</strong> (chấp thủ tướng và kế danh tự tướng) đây là cảnh giới của địa vị Tam hiền (phàm phu) biết.</p>
    <p id="tuong-sanh-diet-vua"><strong>Tướng sanh diệt vừa Thô vừa Tế</strong> (tức là 2 món Thô đầu: Trí tướng, Tương tục tướng và 2 món Tế sau: Chuyển tướng và Hiện tướng), đây là cảnh giới của Bồ Tát (từ Sơ địa đến Đẳng giác) biết.</p>
    <p id="tuong-sanh-diet-vi-te"><strong>Tướng sanh diệt Vi tế</strong> (tức là món Tế đầu tiên: Vô minh nghiệp tướng) đây là cảnh giới chỉ có Phật mới biết.</p>
    <p>Ba tướng nhiễm ô sanh diệt này, đều do vô minh huân tập mà sanh. Nghĩa là do vô minh bất giác làm nhơn và cảnh giới hư vọng làm duyên, mới sanh ra các tướng nhiễm ô sanh diệt.</p>
    <p>Bởi thế nên, nhơn (vô minh) diệt, thì duyên (cảnh giới) diệt. Nếu vô minh (nhơn) diệt, thì Tam tế diệt (bất tương ưng tâm diệt), và nếu cảnh giới (duyên) diệt, thì Lục thô diệt (tương ưng tâm diệt).</p>

    <h4 id="luoc-giai-ba-tuong-sanh-diet" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Tướng nhiễm ô sanh diệt có Thô và Tế, tức là Lục thô và Tam tế. Hàng Tam hiền (Trụ, Hạnh, Hướng) chưa đặng Thánh vị, nên đều gọi là phàm phu. Hàng phàm phu (Tam hiền) chỉ biết hành tướng của hai món Thô thứ ba và thứ tư. Bồ Tát từ Sơ địa đến Đẳng giác thì biết được hành tướng của 2 món Tế sau (Chuyển tướng và Hiện tướng). Duy Phật mới biết được hành tướng của món Vi tế thứ nhứt là "Vô minh nghiệp tướng".</p>
    <p>Các tướng sanh diệt Thô, Tế này, đều do vô minh huân tập mà có. Nghĩa là do vô minh bất giác làm nhơn, sanh ra 3 món Vi tế (Nghiệp tướng, Chuyển tướng và Hiện tướng); rồi do cảnh giới (Hiện tướng) làm duyên, sanh ra 6 món Thô.</p>
    <p>Bởi thế nên vô minh (nhơn) diệt, thì cảnh giới (duyên) diệt. Nếu vô minh diệt thì Tam tế diệt; và nếu cảnh giới (Hiện tướng) diệt thì Lục thô cũng diệt.</p>

    <h4 id="van-dap-de-quyet-nghi" class="mt-6 text-lg font-semibold">Vấn đáp để quyết nghi</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Nếu tâm này (tâm nhiễm ô) diệt, thì lấy gì để tiếp tục tu hành? Và nếu tâm này còn tương tục, thì làm sao được thành Phật?</p>
      <p class="mb-0"><strong>Đáp:</strong> Chỉ diệt cái "Vọng tướng" của tâm, chớ không phải diệt cái "Chơn thể" của tâm. Cũng như vì gió nên nước nổi sóng. Nếu gió đứng thì sóng lặng, chứ nước không diệt. Cũng thế, vì vô minh (gió) mà tâm thể (nước) sanh ra vọng tướng (sóng). Nếu vô minh (si mê) diệt thì vọng tướng của tâm cũng diệt, chớ tâm trí (tâm thể) không diệt.</p>
    </div>

    <p class="mt-4">Vì đoạn trước nói "Nếu Nhơn diệt, thì tâm bất tương ưng diệt; còn Duyên diệt, thì tâm tương ưng diệt", nên đoạn này mới có câu hỏi: "Nếu tâm này diệt, thì lấy gì để tiếp tục tu hành v.v..."</p>
    <p>Đại ý trong lời đáp: Tâm có hai phần, chơn thể và vọng tưởng. Tâm chơn thể như nước; tâm vọng tướng như sóng. Nước vì gió mà có sóng, nên khi gió hết thì sóng lặng, chứ nước không diệt.</p>
    <p>Cũng thế, vì gió vô minh làm chao động, nên nước tâm thể nổi lên các vọng thức, rồi sanh diệt tương tục. Khi gió vô minh hết, thì sóng vọng thức lặng, chứ nước tâm thể không diệt.</p>
    <p>Trên đây có hai danh từ: Tâm thể và Tâm trí, ý nghĩa khác nhau. Nói "Tâm thể" là chỉ chung cho cả nhiễm tịnh, phàm thánh đều có Tâm thể. Còn nói "Tâm trí" là chỉ riêng về phần "Tịnh" của tâm thể khi đã rời nhiễm, và đặng thành thánh quả.</p>
    <p class="italic text-text-muted">(Trên đây nói phần "nhiễm tịnh sanh diệt, sanh ra tất cả pháp", tiếp theo đây sẽ nói "nhiễm huân tập nhau", để chỉ rõ các pháp sanh khởi không dứt.)</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Hành giả ở địa vị nào mới có thể hoàn toàn xa lìa được món "Nhiễm ô bất đoạn" (tương tục tướng)?',
    options: {
      a: 'Bát địa (Sắc tự tại địa)',
      b: 'Thất địa (Vô tướng phương tiện địa)',
      c: 'Nhị thừa hoặc Thập tín',
      d: 'Sơ địa (Tịnh tâm địa)',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Bát địa là để xa lìa nhiễm ô về cảnh sắc (Hiện tướng).',
      b: 'Sai. Thất địa là để xa lìa nhiễm ô về trí phân biệt (Trí tướng).',
      c: 'Sai. Nhị thừa hoặc Thập tín mới trừ được nhiễm ô về chấp trước.',
      d: 'Đúng. Hành giả từ địa vị Thập tín đến địa vị Thập hồi hướng xả bỏ lần lần, khi đến Sơ địa (tịnh tâm địa) mới hoàn toàn xa lìa được món nhiễm ô bất đoạn này.',
    },
  },
  {
    question: 'Tại sao ba món nhiễm ô đầu tiên được gọi là "Tương ưng"?',
    options: {
      a: 'Vì chúng thuộc về bản thể thanh tịnh của Chơn như.',
      b: 'Vì chúng rất vi tế và nằm trong vòng trừu tượng.',
      c: 'Vì Tâm vương và Tâm sở có sự hòa hiệp, cùng duyên theo một cảnh.',
      d: 'Vì chúng không phân biệt được năng duyên và sở duyên.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Chúng không thuộc bản thể thanh tịnh mà thuộc lớp nhiễm ô.',
      b: 'Sai. Ba món nhiễm ô đầu tiên được gọi là thô phù, không phải vi tế hay trừu tượng.',
      c: 'Đúng. Tâm vương và Tâm sở khác nhau nhưng khi Tâm vương duyên cảnh nào thì Tâm sở cũng ưng thuận duyên theo cảnh đó, có sự hòa hiệp nên gọi là tương ưng.',
      d: 'Sai. Chúng chia ra hai phần rất rõ rệt là căn, cảnh và Tâm vương, Tâm sở nên có sự phân biệt.',
    },
  },
  {
    question: 'Vô minh (sở tri chướng) gây trở ngại trực tiếp cho loại trí huệ nào?',
    options: {
      a: 'Hậu đắc trí (Sai biệt trí)',
      b: 'Tâm thể thanh tịnh',
      c: 'Căn bản trí (Vô phân biệt trí)',
      d: 'Trí tuệ của hàng Nhị thừa',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Vô minh là sở tri chướng làm chướng ngại Hậu đắc trí (tự nhiên nghiệp trí) trong việc duyên theo các pháp sai biệt của thế gian.',
      b: 'Sai. Vô minh không trực tiếp chướng ngại tâm thể, bản chất tâm thể thanh tịnh không diệt.',
      c: 'Sai. Tâm nhiễm ô (phiền não chướng) mới làm chướng ngại Căn bản trí.',
      d: 'Sai. Văn bản không đề cập trí tuệ Nhị thừa bị chướng ngại trực tiếp bởi vô minh theo cách này.',
    },
  },
  {
    question: 'Trong các món nhiễm ô, món nào là vi tế nhất và chỉ có quả vị Phật mới đoạn trừ hoàn toàn?',
    options: {
      a: 'Nhiễm ô về nghiệp (Căn bản nghiệp tướng)',
      b: 'Nhiễm ô về cảnh sắc (Hiện tướng)',
      c: 'Nhiễm ô về trí phân biệt (Trí tướng)',
      d: 'Nhiễm ô về năng phân biệt (Kiến tướng)',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Căn bản nghiệp bất tương ưng nhiễm (nhiễm ô về nghiệp) là món Tế thứ nhứt, hành giả phải đến quả vị Phật mới có thể diệt trừ được lớp vọng nhiễm rất vi tế này.',
      b: 'Sai. Nhiễm ô về cảnh sắc có thể xa lìa ở Bát địa.',
      c: 'Sai. Nhiễm ô về trí phân biệt có thể xa lìa ở Thất địa.',
      d: 'Sai. Nhiễm ô về năng phân biệt có thể xa lìa ở Cửu địa.',
    },
  },
  {
    question: 'Hình ảnh "Gió dừng thì sóng lặng, nhưng nước không diệt" ám chỉ điều gì trong quá trình tu hành?',
    options: {
      a: 'Cảnh giới bên ngoài là nguyên nhân duy nhất tạo ra sóng tâm.',
      b: 'Khi đạt thành Phật quả, tâm trí của chúng ta sẽ biến mất hoàn toàn.',
      c: 'Sự tu hành chỉ diệt trừ vọng tướng của tâm, còn tâm thể (chơn thể) vẫn tồn tại.',
      d: 'Vô minh và tâm thể là hai thực thể hoàn toàn độc lập không liên quan.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Gió ở đây là biểu tượng cho vô minh làm tâm nổi sóng vọng tướng.',
      b: 'Sai. Tâm trí hay tâm thể không hề bị diệt mất.',
      c: 'Đúng. Khi vô minh (gió) diệt thì vọng tướng của tâm (sóng) lặng, chứ tâm thể (nước) không diệt.',
      d: 'Sai. Vô minh (gió) huân tập tác động lên tâm chơn thể (nước) tạo ra vọng tướng.',
    },
  },
  {
    question: 'Theo văn bản, đối tượng nào có khả năng thấu suốt được "Tướng sanh diệt vừa Thô vừa Tế"?',
    options: {
      a: 'Các hành giả ở địa vị Thập tín',
      b: 'Hàng Bồ Tát từ Sơ địa đến Đẳng giác',
      c: 'Chỉ duy nhất quả vị Phật',
      d: 'Hàng Tam hiền (phàm phu)',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Địa vị Thập tín không thấy được Tướng sanh diệt vừa Thô vừa Tế.',
      b: 'Đúng. Tướng sanh diệt vừa Thô vừa Tế là cảnh giới của Bồ Tát từ Sơ địa đến Đẳng giác biết được.',
      c: 'Sai. Quả vị Phật là cảnh giới duy nhất biết được Tướng sanh diệt vi tế.',
      d: 'Sai. Hàng Tam hiền (phàm phu) chỉ biết được Tướng sanh diệt thô.',
    },
  },
  {
    question: 'Mối quan hệ nhân duyên giữa Vô minh và Cảnh giới được giải thích như thế nào?',
    options: {
      a: 'Diệt trừ Cảnh giới thì Vô minh sẽ tự động mất theo.',
      b: 'Vô minh là nhân (Nhơn), Cảnh giới là điều kiện (Duyên).',
      c: 'Vô minh và Cảnh giới là một, không có sự phân biệt nhân duyên.',
      d: 'Cảnh giới sinh ra Vô minh.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Nhơn (vô minh) diệt thì duyên (cảnh giới) mới diệt theo, chứ không phải ngược lại.',
      b: 'Đúng. Các tướng nhiễm ô sanh diệt do vô minh bất giác làm nhơn và cảnh giới hư vọng làm duyên mà sanh ra.',
      c: 'Sai. Vô minh và cảnh giới là hai yếu tố nhơn và duyên được phân biệt rõ ràng.',
      d: 'Sai. Vô minh làm nhơn sinh ra 3 món Vi tế, rồi từ cảnh giới (Hiện tướng) làm duyên mới sinh ra 6 món Thô.',
    },
  },
  {
    question: 'Tại sao Tâm nhiễm ô lại làm chướng ngại "Căn bản trí" (Vô phân biệt trí)?',
    options: {
      a: 'Vì tâm nhiễm ô quá thanh tịnh nên không thể tương thích với trí tuệ.',
      b: 'Vì Căn bản trí chỉ dùng để quan sát các pháp thế gian sai biệt.',
      c: 'Vì tâm nhiễm ô chỉ xuất hiện ở hàng Nhị thừa.',
      d: 'Vì tâm nhiễm ô tạo ra sự phân biệt năng-sở, trái với tánh bình đẳng của Chơn như.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tâm nhiễm ô là phiền não chướng, không thanh tịnh.',
      b: 'Sai. Hậu đắc trí (sai biệt trí) mới là trí dùng để duyên các pháp sai biệt của thế gian.',
      c: 'Sai. Tâm nhiễm ô (Lục thô, Tam tế) có ở nhiều cấp độ, phàm thánh đều cần tu hành để đoạn trừ.',
      d: 'Đúng. Tánh Chơn như bình đẳng, song tâm nhiễm ô lại chao động, tạo ra năng sở bỉ thử ngàn sai muôn khác nên làm chướng ngại Vô phân biệt trí (Căn bản trí).',
    },
  },
  {
    question: 'Hành giả phải mất bao lâu và trải qua bao nhiêu địa vị để đạt đến quả Phật rốt ráo?',
    options: {
      a: 'Tu hành trong một đời là có thể chứng quả.',
      b: '1 lần vô số kiếp và 10 địa vị.',
      c: '3 lần vô số kiếp (A tăng kỳ kiếp) và 55 địa vị.',
      d: 'Trải qua Thập tín và Thập địa (tổng cộng 20 vị).',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Vô minh vọng nhiễm chồng chất nhiều kiếp, nên không thể chứng quả ngay trong một đời.',
      b: 'Sai. Thời gian dài hơn và số địa vị nhiều hơn thế.',
      c: 'Đúng. Bắt đầu từ phàm phu, tu đến quả vị Phật, Hành giả phải trải qua thời gian là 3 lần vô số kiếp (A tăng kỳ kiếp) và qua 55 địa vị mới đoạn mê hoặc hoàn toàn.',
      d: 'Sai. Hành giả phải trải qua tới 55 địa vị.',
    },
  },
  {
    question: 'Sự khác biệt giữa "Tâm thể" và "Tâm trí" là gì?',
    options: {
      a: 'Tâm thể chỉ dành cho Thánh, Tâm trí chỉ dành cho phàm.',
      b: 'Không có sự khác biệt, hai từ này đồng nghĩa hoàn toàn.',
      c: 'Tâm thể là sóng, Tâm trí là nước.',
      d: 'Tâm thể là cái chung cho cả nhiễm tịnh, còn Tâm trí là phần tịnh khi đã rời nhiễm.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Cả phàm lẫn thánh đều có Tâm thể.',
      b: 'Sai. Hai danh từ này có ý nghĩa khác nhau.',
      c: 'Sai. Tâm thể ví như nước, còn tâm vọng tướng mới ví như sóng.',
      d: 'Đúng. "Tâm thể" là chỉ chung cho cả nhiễm tịnh, còn "Tâm trí" là chỉ riêng về phần "Tịnh" của tâm thể khi đã rời nhiễm và đặng thành thánh quả.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-7-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-7-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 7 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 9,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-26',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-7-phan-giai-thich-tiep-theo/L%E1%BB%99_tr%C3%ACnh_thanh_t%E1%BB%8Bnh_t%C3%A2m.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-nghia-bat-giac-tiep-theo', label: 'Nói về nghĩa "Bất giác" (tiếp theo)' },
        { id: 'noi-ve-tam-nhiem-o', label: 'g. Nói về Tâm nhiễm ô, có 6 lớp' },
        { id: 'chanh-van-tam-nhiem-o', label: 'Chánh văn', indent: 1 },
        { id: 'nhiem-o-chap-truoc', label: 'Nhiễm ô chấp trước (chấp thủ tướng và kế danh tự tướng)', indent: 2 },
        { id: 'nhiem-o-bat-doan', label: 'Nhiễm ô bất đoạn (tương tục tướng)', indent: 2 },
        { id: 'nhiem-o-phan-biet', label: 'Nhiễm ô phân biệt (trí tướng)', indent: 2 },
        { id: 'nhiem-o-canh-sac', label: 'Nhiễm ô cảnh sắc (hiện tướng)', indent: 2 },
        { id: 'nhiem-o-nang-phan-biet', label: 'Nhiễm ô năng phân biệt (kiến tướng)', indent: 2 },
        { id: 'nhiem-o-ve-nghiep', label: 'Nhiễm ô về nghiệp (nghiệp tướng)', indent: 2 },
        { id: 'luoc-giai-tam-nhiem-o', label: 'Lược giải', indent: 1 },
        { id: 'van-dap-tuong-ung-bat-tuong-ung', label: 'Vấn đáp: Tương ưng và Bất tương ưng', indent: 1 },
        { id: 'tam-nhiem-o-va-vo-minh', label: 'h. Tâm nhiễm ô và vô minh khác nhau như thế nào?' },
        { id: 'chanh-van-tam-nhiem-o-va-vo-minh', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-tam-nhiem-o-va-vo-minh', label: 'Lược giải', indent: 1 },
        { id: 'ba-tuong-nhiem-o-sanh-diet', label: 'i. Ba tướng nhiễm ô sanh diệt' },
        { id: 'chanh-van-ba-tuong-sanh-diet', label: 'Chánh văn', indent: 1 },
        { id: 'tuong-sanh-diet-tho', label: 'Tướng sanh diệt thô', indent: 2 },
        { id: 'tuong-sanh-diet-vua', label: 'Tướng sanh diệt vừa', indent: 2 },
        { id: 'tuong-sanh-diet-vi-te', label: 'Tướng sanh diệt vi tế', indent: 2 },
        { id: 'luoc-giai-ba-tuong-sanh-diet', label: 'Lược giải', indent: 1 },
        { id: 'van-dap-de-quyet-nghi', label: 'Vấn đáp để quyết nghi', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-7-phan-giai-thich-tiep-theo/Zen_Ocean_of_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/GmoO0qGamDE',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/3lO8klUSrA72Lg9jwna31P?utm_source=generator&si=65efcdc4f7e44af4',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần giải thích (tiếp theo)',
    passPercentage: 70,
    questions,
  },
}

export default lesson
