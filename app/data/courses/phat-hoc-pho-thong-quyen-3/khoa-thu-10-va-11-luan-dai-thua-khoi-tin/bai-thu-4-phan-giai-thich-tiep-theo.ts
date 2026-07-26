import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ TƯ · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="noi-ve-nghia-giac" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Nói về nghĩa "Giác" (tiếp theo và hết)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="ban-giac-co-2-tuong" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Bản giác có 2 tướng</h3>
    </div>

    <h4 id="chanh-van-2-tuong" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Lại nữa, do dứt các nhiễm duyên phân biệt, nên bản giác thành ra hai tướng: 1. Tướng trí tịnh. 2. Tướng nghiệp dụng bất tư nghị; hai tướng này không rời bản giác.</p>
    <p><strong>Tướng trí tịnh (Thể):</strong> Hành giả nhờ sức huân tập và như thật tu hành, đến khi công phu tu hành đã viên mãn, phá trừ được thức A lại da (chơn vọng hoà hiệp) và diệt các vọng tâm tương tục, thì pháp thân thanh tịnh hiện ra, đặng cái trí thuần tịnh, nên gọi là "Tướng trí tịnh".</p>

    <h4 id="luoc-giai-2-tuong" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Nhờ dứt trừ các pháp nhiễm ô phân biệt, nên tánh giác hiện ra có 2 tướng: 1. Bản thể sáng suốt trong sạch, gọi là "Tướng trí tịnh". 2. Diệu dụng không thể nghĩ bàn, gọi là "Tướng nghiệp dụng bất tư nghị". Vì thể và dụng không rời tánh giác, nên gọi "hai tướng không rời bản giác".</p>
    <p>Bậc Tam hiền, bên trong nhờ sức chơn như huân ra, bên ngoài lại nhờ chánh pháp huân vào, nên làm cho hành giả tự phát khởi tín tâm tu hành.</p>
    <p>Đến hàng Thập địa Bồ Tát, do nhờ sức tu tập, nên ngộ nhập được tâm chơn như, rồi y như tâm chơn như này mà tu, nên gọi là "Như thật tu hành".</p>
    <p>Đến vị Đẳng giác Bồ Tát, thì sự tu hành, công đã thành quả lại mãn; lúc bấy giờ Bồ Tát phá trừ thức hoà hiệp và diệt tâm tương tục, nên pháp thân thanh tịnh hiện ra, đặng trí thuần tịnh, gọi là "Tướng trí tịnh".</p>

    <h4 id="giai-danh-tu-2-tuong" class="mt-6 text-lg font-semibold">Giải danh từ</h4>
    <p><strong>"Thức hoà hiệp":</strong> Đoạn trước nói "Sanh diệt và bất sanh diệt hoà hiệp, gọi là A lại da", nay nói "phá thức hoà hiệp" tức là phá thức A lại da. Song chỉ phá cái "tướng hư vọng tạp nhiễm" của thức A lại da; không phải phá cái "thể tánh" của thức này.</p>
    <p><strong>"Tâm tương tục":</strong> Tâm tương tục tức là 7 chuyển thức (từ nhãn thức đến Mạt na thức). Diệt tâm tương tục, tức là diệt "tướng" hư vọng tương tục của 7 thức trước, không phải diệt cái "thể" của 7 chuyển thức.</p>

    <h4 id="chanh-van-hoi-dap" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Nghĩa này thế nào?</p>
      <p class="mb-0"><strong>Đáp:</strong> Tất cả tâm thức đều là vô minh; song cái tướng vô minh (vọng) không rời tánh giác (chơn). Bởi thế nên không thể phá hoại (vì không rời tánh giác), và cũng không phải không phá hoại được (vì là tướng vô minh).</p>
    </div>
    <p>Thí như trước biển cả (dụ tánh giác) vì gió (vô minh) nên nổi sóng (tâm thức); sóng và gió đều động và không rời nhau; song tánh nước chẳng động. Đến khi sóng đứng thì gió lặng; song tánh ướt của nước không diệt.</p>
    <p>Cũng thế, biển tâm thanh tịnh của chúng sanh, bị gió vô minh thổi động, nên sóng tâm thức nổi lên. Sóng tâm thức, gió vô minh đều động, lại không hình tướng và chẳng rời nhau; song biển chơn tâm chẳng hề chao động. Nếu gió vô minh dừng, thì sóng tâm thức tương tục kia cũng lặng; song nước trí thuần tịnh (chơn) không bao giờ diệt.</p>

    <h4 id="luoc-giai-hoi-dap" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Vì vô minh sanh ra các tâm thức hư vọng, nên các tâm thức không rời vô minh. Song vô minh lại không thật thể, chỉ nương tánh giác mà có, nên nó không rời tánh giác. Đến khi vô minh hết, thức tâm diệt, thì tánh giác hiện bày. Cũng như, vì gió thổi nên tánh sóng nổi lên; sóng và gió đều động và không rời nhau. Đến khi gió đứng sóng lặng thì tánh nước thanh tịnh bằng phẳng hiện ra.</p>

    <h4 id="chanh-van-nghiep-dung" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p><strong>Tướng nghiệp dụng bất tư nghị (Dụng):</strong> Do tướng trí tịnh đủ vô lượng công đức và thường không đoạn tuyệt, nên có thể tuỳ thuận theo căn cơ của chúng sanh, tự nhiên ứng hiện ra tất cả các cảnh giới mầu nhiệm thù thắng, để làm lợi ích cho chúng sanh.</p>

    <h4 id="luoc-giai-nghiep-dung" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Từ chơn như thể (tướng trí tịnh) khởi ra các diệu dụng (chơn như dụng) không thể nghĩ bàn được (tướng nghiệp dụng bất tư nghị). Nhờ diệu dụng này mới có thể hiện ra được các cảnh giới thù thắng, tuỳ theo trình độ của mỗi loài, làm vô lượng công đức, để lợi ích cho tất cả chúng sanh không thể nghĩ bàn.</p>
    <p>Ngài Đức Thanh giải: Bản giác khi còn ở tại vỏ mê, thì chúng sanh nương nơi đó mà tạo ra vô lượng vô biên các nghiệp, nên kinh chép: "Nghiệp lực không thể nghĩ bàn". Nay Bản giác đã ra khỏi vỏ mê, được thanh tịnh, thì có đủ tất cả thần thông diệu dụng, cũng không thể nghĩ bàn được. Và Bản giác này nghĩ ra các cảnh giới thắng diệu, làm vô lượng công đức, tuỳ theo căn cơ của mỗi loài, ứng hiện đủ cách, để làm lợi ích cho các chúng sanh; như Ngài Quán Thế Âm hiện ra 32 ứng thân, 14 món vô úy... nên gọi là "Nghiệp dụng bất khả tư nghị" (Diệu dụng không thể nghĩ bàn).</p>

    <h4 id="giai-danh-tu-nghiep-dung" class="mt-6 text-lg font-semibold">Giải danh từ</h4>
    <p><strong>"Tự nhiên ứng hiện":</strong> Nghĩa là ứng hiện một cách tự nhiên, không dụng công và cố ý. Thí như mặt trăng chiếu xuống ao, hễ nước trong thì trăng tự nhiên ứng hiện; trăng không có dụng công và cố tâm.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="ban-giac-co-4-nghia" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Bản giác có 4 nghĩa</h3>
    </div>

    <h4 id="chanh-van-nhu-that-khong" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Lại nữa, Thể và Tướng của tánh giác (chơn tâm) giống như cái gương sáng sạch, và rộng lớn như hư không, bao trùm tất cả. Tánh giác này có 4 nghĩa:</p>
    <p><strong>1. Như thật không:</strong> Như cái gương lớn sáng sạch, không có hình ảnh của cảnh vật (thật không). Tánh giác (chơn tâm) xa lìa các tướng của vọng tâm và vọng cảnh (ly nhất thế tướng); không có một pháp nào hiện ra cả; cũng như cái gương trống không. Đây là nói về nghĩa "Tịch" (vắng lặng) của tánh giác, không phải nói về nghĩa "chiếu".</p>

    <h4 id="luoc-giai-nhu-that-khong" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Vì tánh giác viên mãn thanh tịnh, nên dụ như cái gương sáng sạch; vì tánh giác rộng rãi bao la, nên dụ như hư không rộng lớn. Nếu phân tách từng khía cạnh, thì tánh giác có 4 nghĩa; đoạn này nói về nghĩa thứ nhứt:</p>
    <p><strong>Thật không:</strong> Đây là nói về nghĩa "tịch tịnh" của Chơn tâm. Vì Bản thể chơn tâm (tánh giác) vốn thanh tịnh, rộng rãi bao la và ly tất cả các tướng, không thể dùng tâm thức suy nghĩ hay lời nói luận bàn được, (cũng như cái gương sáng sạch, không có lưu một hình ảnh gì ở trong gương cả) tức là pháp thân thanh tịnh sẵn có của chúng sanh, không phải do tu mới được.</p>

    <h4 id="chanh-van-nhon-huan-tap" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p><strong>2. Nhơn huân tập:</strong> Như cái gương sáng lớn, hiện đủ các cảnh (thật có). Trong tánh giác (chơn tâm) đủ các pháp (tức nhứt thế pháp); nghĩa là tất cả cảnh giới thánh, phàm đều hiện trong chơn tâm thường trú nầy. Nó không xuất không nhập, không mất không hoại, vì tánh của các pháp là chơn tâm vậy.</p>
    <p>Lại nữa, vì tánh giác không vọng động, nên các pháp nhiễm ô, không thể làm nhiễm ô được; trái lại nó đủ tất cả các pháp vô lậu và làm nhơn huân tập cho chúng sanh vậy.</p>

    <h4 id="luoc-giai-nhon-huan-tap" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn trước nói về "thể" của chơn tâm, ly tất cả các tướng, cũng như cái gương sáng, không có một vật gì ở trong gương (như thật không). Đoạn này nói về Tướng và Dụng của chơn tâm đủ tất cả pháp. Cũng như cái gương sáng, các cảnh vật đều hiện vào (như thật bất không).</p>
    <p>Tướng và Dụng của chơn tâm có 2 nghĩa:</p>
    <ul class="list-disc space-y-1 pl-6">
      <li><strong>Đủ tất cả pháp:</strong> Tất cả chúng sanh đều sẵn có các pháp vô lậu thanh tịnh, cũng gọi là "bản hữu Phật tánh" hay "chánh nhơn Phật tánh".</li>
      <li><strong>Nhơn huân tập:</strong> Tất cả chúng sanh đều sẵn có tánh Phật; tánh Phật đủ vô lượng hằng sa công đức và thanh tịnh không động, nên các pháp nhiễm ô không làm nhiễm ô được. Tánh Phật này làm chánh nhơn (chánh nhơn Phật tánh) huân tập ở bên trong, khiến cho chúng sanh giác ngộ, nhàm chán khổ sanh tử, phát tâm cầu đạo giải thoát.</li>
    </ul>

    <h4 id="chanh-van-phap-xuat-ly" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p><strong>3. Pháp xuất ly:</strong> Như cái gương đã sáng sạch, không còn bụi nhơ. Tánh giác (tánh Phật) đã sáng suốt thuần tịnh, ra khỏi hai chướng: Phiền não chướng, Sở tri chướng và xa lìa thức A lại da (Chơn, Vọng hoà hiệp).</p>

    <h4 id="luoc-giai-phap-xuat-ly" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Pháp xuất ly tức là "Liễu nhơn Phật tánh", cũng gọi là "Chơn như xuất triền". Hành giả nhờ công phu tu tập, đoạn trừ phiền não chướng, sở tri chướng và phá thức hoà hiệp (A lại da), nên tánh Phật (Chơn như) không còn bị triền phược và được sáng suốt thuần tịnh.</p>

    <h4 id="chanh-van-duyen-huan-tap" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p><strong>4. Duyên huân tập:</strong> Như cái gương sáng, phản chiếu trở lại. Tánh giác (Phật tánh) đã ra khỏi vỏ triền phược rồi, trở lại chiếu soi khắp giáp tất cả, và tuỳ theo tâm niệm của mỗi loài mà hiện thân hoá độ, làm trợ duyên huân tập trở lại vào tâm chúng sanh, khiến cho chúng sanh tu tập căn lành.</p>

    <h4 id="luoc-giai-duyen-huan-tap" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Duyên nhơn Phật tánh: Do Chơn như đã xuất triền, nên có diệu dụng không thể nghĩ bàn: Chiếu khắp tất cả và tuỳ theo tâm niệm của chúng sanh mà thị hiện các thân hình để hoá độ, làm trợ duyên, huân tập trở lại vào tâm chúng sanh, khiến cho chúng sanh phát Bồ Đề tâm, tu theo chánh pháp.</p>
    <p>Công dụng cao cả và rộng lớn của Chơn như (tánh giác), chỉ có thể thí dụ như hư không. Thể tánh sáng suốt thuần tịnh của Chơn như (tánh giác), chỉ có thể thí dụ như gương: dầu có bụi hay không, song chất pha lê (gương) vẫn sáng suốt, thủy chung như một.</p>
    <p class="italic text-text-muted">(đoạn này đã nói nghĩa "Giác" rồi, tiếp theo sau đây sẽ nói đến nghĩa "Bất giác" của thức A lại da)</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo nội dung bài học, Bản giác được chia thành hai tướng chính là gì?',
    options: {
      a: 'Tướng nhiễm ô và Tướng thanh tịnh',
      b: 'Tướng hữu lậu và Tướng vô lậu',
      c: 'Tướng trí tịnh và Tướng nghiệp dụng bất tư nghị',
      d: 'Tướng sinh diệt và Tướng bất sinh diệt',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Tài liệu không chia bản giác thành tướng nhiễm ô và tướng thanh tịnh.',
      b: 'Sai. Tài liệu không đề cập đến tướng hữu lậu và tướng vô lậu như là hai tướng của bản giác.',
      c: 'Đúng. Nhờ dứt trừ các pháp nhiễm ô phân biệt, bản giác thành ra hai tướng là tướng trí tịnh và tướng nghiệp dụng bất tư nghị.',
      d: 'Sai. Sinh diệt và bất sinh diệt là hai yếu tố hòa hiệp thành thức A lại da, không phải là hai tướng của bản giác.',
    },
  },
  {
    question: "Hành giả đạt được 'Tướng trí tịnh' đầy đủ nhất ở vị đạo quả nào?",
    options: {
      a: 'Bồ Tát Đẳng giác',
      b: 'Bậc Tam hiền',
      c: 'Hàng Thập địa Bồ Tát',
      d: 'Chúng sanh còn trong vỏ mê',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Đến vị Đẳng giác Bồ Tát, công tu hành đã thành quả lại mãn, hành giả phá trừ thức hoà hiệp và diệt tâm tương tục để đặng trí thuần tịnh gọi là Tướng trí tịnh.',
      b: 'Sai. Bậc Tam hiền mới là lúc hành giả tự phát khởi tín tâm tu hành nhờ sức huân tập.',
      c: 'Sai. Hàng Thập địa Bồ Tát mới ngộ nhập được tâm chơn như và như thật tu hành, chưa viên mãn công quả như vị Đẳng giác.',
      d: 'Sai. Khi còn trong vỏ mê, chúng sanh chưa thể hiển lộ pháp thân thanh tịnh.',
    },
  },
  {
    question: "Trong ví dụ về biển cả, 'tánh ướt' của nước tượng trưng cho điều gì?",
    options: {
      a: 'Các pháp nhiễm ô phân biệt',
      b: 'Nước trí thuần tịnh (Chơn)',
      c: 'Sóng tâm thức tương tục',
      d: 'Vô minh che lấp',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Các pháp nhiễm ô hay vô minh được ví như cơn gió.',
      b: 'Đúng. Khi gió đứng thì sóng lặng nhưng tánh ướt của nước không diệt, điều này dụ cho nước trí thuần tịnh (chơn) không bao giờ diệt.',
      c: 'Sai. Sóng tâm thức tương tục được ví với những đợt sóng động do gió thổi.',
      d: 'Sai. Vô minh được ví như cơn gió thổi động biển tâm thanh tịnh.',
    },
  },
  {
    question: "Việc 'phá thức hoà hiệp' được giải thích cụ thể là phá bỏ điều gì?",
    options: {
      a: 'Sự tồn tại vật lý của chúng sanh',
      b: 'Tướng hư vọng tạp nhiễm của thức A lại da',
      c: 'Tất cả các pháp vô lậu',
      d: 'Thể tánh của chân tâm',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tài liệu không nhắc đến sự tồn tại vật lý.',
      b: 'Đúng. Việc phá thức hoà hiệp (phá thức A lại da) chỉ là phá cái tướng hư vọng tạp nhiễm của nó.',
      c: 'Sai. Các pháp vô lậu là bản tính thanh tịnh, không thể bị phá hoại.',
      d: 'Sai. Đoạn văn nhấn mạnh rõ là không phải phá hoại thể tánh của thức này.',
    },
  },
  {
    question: "Đặc điểm nào sau đây mô tả đúng về 'Tướng nghiệp dụng bất tư nghị'?",
    options: {
      a: 'Chỉ xuất hiện khi hành giả còn đang phân biệt các pháp nhiễm',
      b: 'Là một quá trình đòi hỏi sự tính toán và cố ý của Bồ Tát',
      c: 'Gây ra các nghiệp lực khiến chúng sanh luân hồi',
      d: 'Tự nhiên ứng hiện các cảnh giới thù thắng để làm lợi ích cho chúng sanh',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tướng này hiển lộ do dứt được các nhiễm duyên phân biệt.',
      b: "Sai. Cụm từ 'Tự nhiên ứng hiện' nghĩa là ứng hiện một cách tự nhiên, không dụng công và cố ý.",
      c: 'Sai. Nghiệp lực luân hồi xảy ra khi Bản giác còn ở tại vỏ mê, còn khi đã thanh tịnh thì nó tạo vô lượng công đức lợi ích chúng sanh.',
      d: 'Đúng. Tướng này có khả năng tuỳ thuận theo căn cơ của chúng sanh, tự nhiên ứng hiện ra tất cả các cảnh giới mầu nhiệm thù thắng để làm lợi ích cho họ.',
    },
  },
  {
    question: "Nghĩa 'Như thật không' trong bốn nghĩa của tánh giác ám chỉ điều gì?",
    options: {
      a: 'Khả năng phản chiếu mọi hình ảnh của thế gian',
      b: 'Tánh giác không có thật và chỉ là hư cấu',
      c: 'Tánh giác chỉ chứa đựng các pháp nhiễm ô',
      d: 'Tánh giác vắng lặng, lìa tất cả các tướng của vọng tâm và vọng cảnh',
    },
    answer: 'd',
    explanation: {
      a: "Sai. Khả năng phản chiếu hình ảnh giống như 'gương sáng lớn hiện đủ các cảnh' là nghĩa của Nhơn huân tập (như thật bất không).",
      b: "Sai. 'Như thật không' nói về nghĩa tịch tịnh của Chơn tâm chứ không phải sự hư cấu.",
      c: 'Sai. Chơn tâm vốn thanh tịnh và không có một pháp vọng cảnh nào hiện ra cả.',
      d: 'Đúng. Tánh giác xa lìa các tướng của vọng tâm và vọng cảnh (ly nhất thế tướng), giống như cái gương lớn sáng sạch không lưu hình ảnh của cảnh vật.',
    },
  },
  {
    question: "Tại sao tánh giác được gọi là 'Nhơn huân tập'?",
    options: {
      a: 'Vì nó chỉ hiện diện sau khi hành giả đã diệt hết vô minh',
      b: 'Vì nó là duyên bên ngoài từ chánh pháp tác động vào',
      c: 'Vì nó làm cái nhân bên trong thôi thúc chúng sanh giác ngộ và cầu đạo',
      d: 'Vì nó khiến chúng sanh tạo ra các nghiệp ác',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Tánh Phật (nhơn huân tập) là bản hữu, tức là sẵn có trong tất cả chúng sanh.',
      b: 'Sai. Duyên bên ngoài và trợ duyên từ chánh pháp là mô tả của Duyên huân tập.',
      c: 'Đúng. Tánh Phật làm chánh nhơn huân tập ở bên trong, khiến cho chúng sanh giác ngộ, nhàm chán khổ sanh tử và phát tâm cầu đạo giải thoát.',
      d: 'Sai. Tánh Phật làm cho chúng sanh cầu đạo giải thoát chứ không tạo ra nghiệp ác.',
    },
  },
  {
    question: "Khái niệm 'Pháp xuất ly' trong bốn nghĩa của tánh giác tương đương với thuật ngữ nào?",
    options: {
      a: 'Chơn như xuất triền',
      b: 'Duyên nhơn Phật tánh',
      c: 'Chơn như tại triền',
      d: 'Vô minh phong động',
    },
    answer: 'a',
    explanation: {
      a: "Đúng. 'Pháp xuất ly' hay 'Liễu nhơn Phật tánh' cũng được gọi là 'Chơn như xuất triền'.",
      b: "Sai. 'Duyên nhơn Phật tánh' tương đương với nghĩa 'Duyên huân tập'.",
      c: 'Sai. Xuất ly mang nghĩa ra khỏi vỏ triền phược, không còn tại triền nữa.',
      d: 'Sai. Thuật ngữ vô minh phong động không liên quan đến khái niệm này.',
    },
  },
  {
    question: "Nghĩa 'Duyên huân tập' của tánh giác có vai trò gì đối với chúng sanh?",
    options: {
      a: 'Thị hiện các thân hình để hóa độ và làm trợ duyên cho chúng sanh tu tập',
      b: 'Ngăn cản chúng sanh tiếp xúc với các cảnh giới mầu nhiệm',
      c: 'Làm cho tâm chúng sanh trở nên xao động như sóng biển',
      d: 'Tập trung vào việc tiêu diệt các chủng tử vô lậu',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Do Chơn như xuất triền nên có diệu dụng chiếu soi và tuỳ theo tâm niệm của chúng sanh mà thị hiện các thân hình để hóa độ, làm trợ duyên cho họ tu tập.',
      b: 'Sai. Vai trò của Duyên huân tập là hỗ trợ, không phải ngăn cản chúng sanh.',
      c: 'Sai. Sự xao động là do gió vô minh chứ không phải do Duyên huân tập.',
      d: 'Sai. Nó trợ duyên khiến chúng sanh phát Bồ Đề tâm và tu tập căn lành, không phải để tiêu diệt các pháp vô lậu thanh tịnh.',
    },
  },
  {
    question: "Theo văn bản, 'Tâm tương tục' được định nghĩa là gì?",
    options: {
      a: 'Chỉ riêng thức A lại da',
      b: '7 chuyển thức (từ nhãn thức đến Mạt na thức)',
      c: 'Tánh giác bản nguyên không dao động',
      d: 'Các pháp vô lậu thanh tịnh',
    },
    answer: 'b',
    explanation: {
      a: "Sai. Thức A lại da được định nghĩa là 'thức hoà hiệp'.",
      b: "Đúng. Văn bản giải thích rõ 'Tâm tương tục tức là 7 chuyển thức (từ nhãn thức đến Mạt na thức)'.",
      c: 'Sai. Tánh giác bản nguyên là pháp thân thanh tịnh, không phải tâm tương tục.',
      d: "Sai. Tâm tương tục là các 'vọng tâm' và 'tướng hư vọng', không phải pháp vô lậu.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-4-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-4-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 4 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 6,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-26',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-4-phan-giai-thich-tiep-theo/B%E1%BA%A3n_Gi%C3%A1c_v%C3%A0_T%C3%A2m_T%E1%BB%89nh_Th%E1%BB%A9c.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-nghia-giac', label: 'Nói về nghĩa "Giác" (tiếp theo và hết)' },
        { id: 'ban-giac-co-2-tuong', label: 'Bản giác có 2 tướng' },
        { id: 'chanh-van-2-tuong', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-2-tuong', label: 'Lược giải', indent: 1 },
        { id: 'giai-danh-tu-2-tuong', label: 'Giải danh từ', indent: 1 },
        { id: 'chanh-van-hoi-dap', label: 'Chánh văn (Hỏi đáp)', indent: 1 },
        { id: 'luoc-giai-hoi-dap', label: 'Lược giải', indent: 1 },
        { id: 'chanh-van-nghiep-dung', label: 'Chánh văn (Tướng nghiệp dụng)', indent: 1 },
        { id: 'luoc-giai-nghiep-dung', label: 'Lược giải', indent: 1 },
        { id: 'giai-danh-tu-nghiep-dung', label: 'Giải danh từ', indent: 1 },
        { id: 'ban-giac-co-4-nghia', label: 'Bản giác có 4 nghĩa' },
        { id: 'chanh-van-nhu-that-khong', label: 'Chánh văn (1. Như thật không)', indent: 1 },
        { id: 'luoc-giai-nhu-that-khong', label: 'Lược giải', indent: 1 },
        { id: 'chanh-van-nhon-huan-tap', label: 'Chánh văn (2. Nhơn huân tập)', indent: 1 },
        { id: 'luoc-giai-nhon-huan-tap', label: 'Lược giải', indent: 1 },
        { id: 'chanh-van-phap-xuat-ly', label: 'Chánh văn (3. Pháp xuất ly)', indent: 1 },
        { id: 'luoc-giai-phap-xuat-ly', label: 'Lược giải', indent: 1 },
        { id: 'chanh-van-duyen-huan-tap', label: 'Chánh văn (4. Duyên huân tập)', indent: 1 },
        { id: 'luoc-giai-duyen-huan-tap', label: 'Lược giải', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-4-phan-giai-thich-tiep-theo/Original_Enlightenment_Decoded.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/G6AsizqCm18',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/3A5JJMFy2GBsUcSJ9Zsh08?utm_source=generator&si=6fa0596c2dea48bd',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần giải thích (tiếp theo)',
    passPercentage: 70,
    questions,
  },
}

export default lesson
