import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ HAI</p>
      <h2 id="noi-ve-tam-chon-nhu" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">NÓI VỀ TÂM CHƠN NHƯ</h2>
      <p class="mb-0">Có 2 nghĩa:</p>
      <ul class="mb-0 list-disc space-y-1 pl-6">
        <li>Thật không (như thật không).</li>
        <li>Thật có (như thật bất không).</li>
      </ul>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="a-noi-ro-nghia-chanh" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">A. NÓI RÕ NGHĨA CHÁNH</h3>
    </div>

    <h4 id="chanh-van-noi-ro-nghia-chanh" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Cái tâm này (chúng sanh tâm) có hai phần: I. Tâm chơn như, II. Tâm sanh diệt. Hai tâm này không rời nhau và đều bao trùm tất cả pháp.</p>

    <h4 id="luoc-giai-noi-ro-nghia-chanh" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Chương này giải thích tâm chúng sanh là pháp Đại thừa. Pháp Đại thừa có hai phần: Chơn như và Sanh diệt. Chơn như là "Thể" rộng lớn của tâm; Sanh diệt là "Tướng" và "Dụng" rộng lớn của tâm. Phải phân chia làm hai phương diện như vậy, mới rõ được Thể, Tướng và Dụng của tâm.</p>
    <p>Nếu đứng về "Thể chơn như", thì suy nghĩ không trúng, luận bàn chẳng nhằm, lìa các văn tự, ly tất cả tướng; như thế làm sao có các pháp sai biệt được. Bởi thế nên phải nói đến Tướng và Dụng là "môn sanh diệt" mới rõ được hành tướng sai biệt của "Tâm chúng sinh".</p>
    <p>Chơn như là "Thể", còn Sanh diệt là "Tướng" và "Dụng". Tướng và Dụng không rời Thể, Thể không rời Tướng và Dụng; cũng như nước không rời sóng, sóng không rời nước. Bởi Thể, Tướng và Dụng không rời nhau, nên mỗi một phần đều bao hàm được tất cả pháp.</p>
    <p>Vì Thể và Dụng không rời nhau, nên đứng về phần Chơn như mà luận, thì tuy "thanh tịnh bất biến", mà vẫn tùy duyên sanh diệt; còn đứng về phần Sanh diệt mà xem, thì tuy "tùy duyên sai biệt" mà vẫn như như bất biến.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="i-tam-chon-nhu" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">I. Tâm chơn như</h3>
    </div>

    <h4 id="chanh-van-tam-chon-nhu" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Tâm Chơn như là cái tâm tánh bất sanh bất diệt. Thể và Tướng nó to lớn bao trùm tất cả các pháp (nhứt pháp giới đại tổng tướng pháp môn thể).</p>
    <p>Sở dĩ các pháp sai khác là do vọng niệm; nếu rời vọng niệm thì không còn các cảnh tướng sai khác. Bởi thế nên tất cả pháp từ hồi nào đến giờ, không thể dùng danh tự để kêu gọi, không thể dùng lời nói luận bàn, không thể dùng tâm suy nghĩ được, không có biến đổi và cũng không phá hoại vì nó rốt ráo bình đẳng, chỉ có một "Tâm Chơn như" mà thôi.</p>

    <h4 id="luoc-giai-tam-chon-nhu" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Tâm Chơn như này, tánh không sanh diệt và bao trùm tất cả nhơn quả, thánh phàm, y báo chánh báo... Bởi thế nên nguyên văn chữ Hán gọi là "nhứt pháp giới đại tổng tướng pháp môn thể".</p>
    <p>Vì vọng niệm nên thấy có tất cả các pháp sai khác; cũng như vì mắt nhặm nên thấy có hoa đốm giữa hư không. Nếu như lìa vọng niệm rồi, thì không có tất cả cảnh giới sai khác, mà chỉ còn một "Tâm Chơn như"; cũng như mắt hết nhặm thì chỉ còn hư không một màu trong tịnh. Bởi tất cả pháp là "Tâm Chơn như", nên không thể phá hoại, không thể dùng lời nói luận bàn, không thể dùng danh tự để kêu gọi và cũng không thể dùng tâm suy nghĩ được. Từ hồi nào đến giờ, nó rốt ráo bình đẳng, không có sai khác. Bởi thế nên trong Khế kinh chép:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="mb-0 space-y-1 italic">
        <p>"Thị pháp trụ pháp vị</p>
        <p>Thế gian tướng thường trụ"</p>
      </div>
    </div>
    <p>Nghĩa là: Pháp nào vẫn an trụ địa vị của pháp nấy; tướng thế gian là tướng thường trụ.</p>

    <h4 id="giai-danh-tu-tam-chon-nhu" class="mt-6 text-lg font-semibold">Giải danh từ</h4>
    <p><strong>Tâm Chơn như:</strong> Vì tâm này không hư ngụy, nên gọi là "Chơn", không bị thời gian thay đổi, không gian chuyển dời, từ hồi nào đến giờ nó vẫn như thế, nên gọi là "Như". Tâm Chơn như cũng gọi là "Chơn tâm" hay "Viên giác".</p>
    <p><strong>Nhứt pháp giới đại tổng tướng pháp môn thể:</strong> Câu này nghĩa lý rất sâu rộng, xin giải sơ lược: Tâm Chơn như là Thể chung của "Nhứt pháp giới".</p>
    <p>Chữ "Nhứt" là chỉ cho sự bình đẳng bất nhị, thuộc về lời nói ngăn chấp, chớ không phải lời nói tiêu biểu.</p>
    <p>Chữ "Giới" là chỉ cho "tâm Chơn như" này, nó là "nhơn" là "giống" là "bản năng" sanh ra tất cả các pháp, nên gọi là "nhứt pháp giới". Nhứt pháp giới là toàn tánh của vũ trụ. Ở nơi nhứt pháp giới này, có thể phân ra tổng tướng (thể) và biệt tướng (muôn pháp sai khác).</p>
    <p><strong>Đại tổng tướng:</strong> Tâm Chơn như là "Tổng tướng" (tướng chung) của tất cả pháp; vì thể tánh nó bình đẳng song cũng tóm thâu tất cả tướng, nên gọi là "Đại".</p>
    <p><strong>Pháp môn:</strong> Chữ "Pháp" nghĩa là: "giữ gìn tự tánh và làm cho người hiểu biết". Chữ "môn" là nghĩa ra vào thông suốt. Tất cả chúng sanh có thể do pháp môn này tu hành, đến được mục đích cứu cánh; nếu rời "Đại tổng tướng pháp môn" này, thì không thể đạt đến quả vị Phật.</p>
    <p>Nói tóm lại:</p>
    <ul class="list-disc space-y-1 pl-6">
      <li>Nhứt pháp giới là "Thể" của tâm Chơn như.</li>
      <li>Đại tổng tướng là "Tướng" của tâm Chơn như.</li>
      <li>Pháp môn là "Dụng" của tâm Chơn như.</li>
    </ul>

    <h4 id="chanh-van-danh-tu-chan-nhu" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Tất cả những lời nói, đều do vọng niệm phân biệt mà sanh, chỉ do giả danh chớ không thật thể. Cho đến danh từ Chơn như cũng không thực; chẳng qua là một danh từ túng cùng của lời nói, dùng để trừ bỏ các danh từ khác (vọng) mà thôi (nhơn ngôn khiển ngôn). Song cái "Thể" của Chơn như không thể trừ bỏ và cũng không thể dựng lập. Phải biết: Tất cả các pháp cũng không thể trừ bỏ vì đều là "Chơn" vậy, và cũng không thể dựng lập, vì đều là "Như" vậy. Bởi tất cả các pháp đều là Chơn như, nên không thể nói bàn và suy nghĩ được.</p>

    <h4 id="luoc-giai-danh-tu-chan-nhu" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Tất cả những lời nói phô, đều do vọng niệm phân biệt; danh từ chỉ là hư giả, chớ không có thật thể. Cho đến cái danh từ Chơn như cũng là hư giả mà thôi. Danh từ Chơn như hay Phật là danh từ túng cùng trong các danh từ tạm đặt ra như thế để trừ các danh từ vọng nhiễm của thế gian. Cũng như ông thầy giáo, tạm dùng tiếng gõ bảng để trừ tiếng ồn của học sinh (dĩ ngôn diệt ngôn). Đến khi tiếng ồn của học sinh hết, thì tiếng gõ bảng của thầy giáo cũng không còn. Cũng như khi vọng mất, chúng sanh hết, thì Chơn như hay Phật cũng chẳng còn.</p>
    <p>Song, chỉ bỏ cái danh từ (Chơn như) hư giả, chớ thể tánh chơn như thì không thể bỏ hay lấy. Cho đến các pháp cũng không thể bỏ và lấy được. Vì các pháp đều là "Chơn", nên không thể bỏ, và "Như" nên không thể lấy. Bởi các pháp đều chơn như, nên không thể dùng lời nói luận bàn hay tâm suy nghĩ đến được.</p>
    <p>Tóm lại, vì vọng niệm phân biệt, nên thấy có các pháp sai biệt. Nếu vọng niệm phân biệt hết, thì tất cả các pháp không còn những tướng sai biệt, mà đều là Chơn như. Bởi các pháp đều là chơn như, nên nói năng không trúng, suy nghĩ chẳng nhằm và cũng không thể lấy hay bỏ được.</p>

    <h4 id="chanh-van-hoi-dap-tuy-thuan" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Nếu "Chơn như", mà không thể dùng lời nói luận bàn hay tâm suy nghĩ, thì chúng sanh làm sao tùy thuận và ngộ nhập được?</p>
      <p class="mb-0"><strong>Đáp:</strong> Nếu người nào biết tất cả pháp, tuy có nói bàn, mà không có "năng nói" và "sở nói"; tuy có suy nghĩ, mà không có "năng suy nghĩ" và "sở suy nghĩ", thì người ấy được tùy thuận Chơn như. Còn người nào lìa các niệm (vọng niệm) thì người đó được nhập Chơn như.</p>
    </div>

    <h4 id="luoc-giai-hoi-dap-tuy-thuan" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Luận chủ lập lời vấn đáp, để giải thích sự nghi ngờ của độc giả.</p>
    <p><strong>Hỏi:</strong> Nếu Chơn như mà không thể dùng lời nói luận bàn và tâm suy nghĩ được thì, chúng sanh làm sao tùy thuận và ngộ nhập Chơn như?</p>
    <p><strong>Đáp:</strong> Nếu người nào biết tất cả pháp, tuy có nói năng suy nghĩ, mà không chấp nơi nói năng suy nghĩ, thì người đó được tùy thuận Chơn như. Tiến lên một tầng nữa, nếu người nào lìa các vọng niệm, thì người ấy nhập được Chơn như. Nghĩa là "Vọng" hết, thì "Chơn" hiện. Đoạn này đồng một ý nghĩa với bốn chữ "bất tùy phân biệt" trong Kinh Lăng Nghiêm.</p>

    <h4 id="chanh-van-hai-nghia-chon-nhu" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Lại nữa, nếu căn cứ trên danh từ (ngôn thuyết) mà phân biệt, thì chữ Nhơn như có 2 nghĩa:</p>
    <p><strong>1. THẬT KHÔNG (như thật không):</strong> tức là chỉ nói đến cái thể tánh rốt ráo chơn thật của Chơn như. Nghĩa là: từ hồi nào đến giờ, Chơn như không có các tâm niệm hư vọng, không có tất cả các tướng sai biệt, nói chung là thật không có các pháp tạp nhiễm.</p>
    <p>Phải biết: Chơn như phi tướng "có", phi tướng "không"; phi tướng "chẳng phải có", phi tướng "chẳng phải không"; phi tướng "cũng có và cũng không"; phi tướng "một", phi tướng "khác"; phi tướng "chẳng phải một, chẳng phải khác"; phi tướng "cũng một cũng khác".</p>
    <p>Nói tóm lại, vì chơn như không có tất cả các vọng niệm phân biệt của chúng sanh, nên gọi rằng "thật không". Nếu khi vọng tâm phân biệt hết rồi thì cũng không còn cái gì gọi là "không" nữa.</p>

    <h4 id="luoc-giai-that-khong" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đứng về phương diện lý tánh tuyệt đối, thì Chơn như không thể kêu gọi là gì được (ly danh tự tướng), không thể dùng lời nói luận bàn (ly ngôn thuyết tướng) và cũng không thể dùng tâm suy nghĩ được (ly tâm duyên tướng). Song, nếu căn cứ trên văn tự lời nói mà luận, thì Chơn như có hai nghĩa: 1. Thật không và 2. Thật có.</p>
    <p>Đoạn này nói về nghĩa "thật không" (ly nhứt thế tướng), tức là chỉ cho cái "thể Chơn như", từ hồi nào đến giờ, nó không có các vọng niệm, không có các nhiễm pháp và không có các tướng sai khác. Nó phi tất cả các tướng: Có, không, chẳng phải có, chẳng phải không, cho đến phi tướng đồng, tướng dị và tướng không đồng không dị...</p>
    <p>Nói tóm lại là nó không có tất cả vọng niệm phân biệt của chúng sanh, và khi rời các vọng niệm rồi, thì cái gọi là "không" đó cũng không còn.</p>

    <h4 id="chanh-van-that-co" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p><strong>2. THẬT CÓ (như thật bất không):</strong> tự thể Chơn như, thật có đủ công đức vô lậu (tức nhứt thế pháp). Bởi Chơn như không có các vọng, nên tức là Chơn tâm. Cái Chơn tâm này thường còn không biến đổi và đầy đủ các pháp thanh tịnh; nên nói "thật có" (bất không).</p>
    <p>Nhưng cái cảnh giới "thật có" này, cũng không có hình tướng gì để nắm lấy được, vì nó lìa các vọng niệm, nên chỉ có người tu chứng mới biết được mà thôi.</p>

    <h4 id="luoc-giai-that-co" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Trong đoạn này nói: Chơn như có hai nghĩa, tức là ý nói Chơn như có hai thứ.</p>
    <p>Đoạn trên nói về phương diện "thể tánh" của Chơn như, thì không có các vọng niệm, không có các pháp nhiễm ô, tức là "ly nhứt thế tướng", nên nói "thật không".</p>
    <p>Đoạn này nói về phương diện "tướng dụng" của Chơn như, thì đầy đủ vô lượng hằng sa công đức, thế là "tức nhứt thế pháp", nên nói "thật có". Nhưng cảnh giới "thật có" này, không có hình tướng gì để chỉ bày ra được, vì đã lìa các vọng niệm phân biệt, nên chỉ có người chứng ngộ mới biết được thôi.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo nội dung bài viết, 'Tâm chúng sanh' (pháp Đại thừa) bao gồm hai phần chính nào?",
    options: {
      a: 'Tâm trí tuệ và Tâm phiền não',
      b: 'Tâm chơn như và Tâm sanh diệt',
      c: 'Tâm hữu vi và Tâm vô vi',
      d: 'Tâm thiện và Tâm ác',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tài liệu không chia tâm chúng sanh thành trí tuệ và phiền não.',
      b: 'Đúng. Pháp Đại thừa (tâm chúng sanh) có hai phần là Chơn như và Sanh diệt.',
      c: 'Sai. Tâm hữu vi và vô vi không phải hai phần được đề cập trong bài.',
      d: 'Sai. Không có sự phân chia thành tâm thiện và tâm ác.',
    },
  },
  {
    question: "Trong ba phương diện Thể, Tướng và Dụng, 'Tâm chơn như' thuộc về phương diện nào?",
    options: {
      a: 'Cả Tướng và Dụng',
      b: 'Tướng',
      c: 'Dụng',
      d: 'Thể',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tướng và Dụng thuộc về môn sanh diệt.',
      b: 'Sai. Tướng là hành tướng sai biệt của sanh diệt.',
      c: 'Sai. Dụng cũng thuộc về tâm sanh diệt.',
      d: 'Đúng. Chơn như là "Thể" rộng lớn của tâm, còn Sanh diệt là "Tướng" và "Dụng".',
    },
  },
  {
    question: 'Nguyên nhân chính khiến chúng ta thấy các cảnh tướng sai khác trong các pháp là gì?',
    options: {
      a: 'Do ý muốn của các bậc Thánh',
      b: 'Do vọng niệm',
      c: 'Do sự khác biệt khách quan của vật chất',
      d: 'Do sự vận hành tự nhiên của thời gian',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Bài viết không nhắc đến ý muốn của các bậc Thánh.',
      b: 'Đúng. Sở dĩ các pháp sai khác là do vọng niệm, nếu rời vọng niệm thì không còn cảnh tướng sai khác.',
      c: 'Sai. Sự khác biệt không đến từ thế giới vật chất khách quan.',
      d: 'Sai. Thời gian không phải là nguyên nhân tạo ra sự sai khác.',
    },
  },
  {
    question: "Tại sao tâm này lại được gọi là 'Như'?",
    options: {
      a: 'Vì nó không bị thời gian thay đổi hay không gian chuyển dời',
      b: 'Vì nó chỉ tồn tại trong suy nghĩ',
      c: 'Vì nó luôn thay đổi theo hoàn cảnh',
      d: 'Vì nó giống như các sự vật bên ngoài',
    },
    answer: 'a',
    explanation: {
      a: "Đúng. Tâm này không bị thời gian thay đổi, không gian chuyển dời, từ hồi nào đến giờ vẫn thế nên gọi là 'Như'.",
      b: 'Sai. Tâm này không thể dùng tâm suy nghĩ được.',
      c: 'Sai. Tâm này như như bất biến, không thay đổi.',
      d: "Sai. 'Như' không có nghĩa là giống sự vật bên ngoài.",
    },
  },
  {
    question: "Cụm từ 'Nhứt pháp giới đại tổng tướng pháp môn thể' dùng để chỉ điều gì?",
    options: {
      a: 'Một phương pháp tu hành cụ thể cho hàng sơ cơ',
      b: 'Sự phân chia các giai tầng trong vũ trụ',
      c: 'Các hiện tượng sanh diệt trong thế giới',
      d: 'Tâm Chơn như là bản thể chung, bao trùm toàn bộ vũ trụ và vạn pháp',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Đây không phải một phương pháp cụ thể cho hàng sơ cơ.',
      b: 'Sai. Cụm từ này không chỉ sự phân chia giai tầng.',
      c: 'Sai. Các hiện tượng sanh diệt thuộc về Tướng và Dụng, không phải bản thể.',
      d: "Đúng. Tâm Chơn như là Thể chung của 'Nhứt pháp giới', bao trùm tất cả nhơn quả, thánh phàm.",
    },
  },
  {
    question: "Nghĩa 'Thật không' (như thật không) của Chơn như có nghĩa là gì?",
    options: {
      a: 'Chơn như không có các vọng niệm và các tướng sai biệt tạp nhiễm',
      b: 'Chơn như là một khái niệm không thể hiểu được',
      c: 'Chơn như giống như một khoảng không trống rỗng',
      d: 'Chơn như hoàn toàn không tồn tại',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Thể tánh rốt ráo của Chơn như không có tâm niệm hư vọng, không có tướng sai biệt và pháp tạp nhiễm.',
      b: 'Sai. Nó rốt ráo bình đẳng và có thể ngộ nhập được chứ không phải không thể hiểu.',
      c: "Sai. Chơn như vẫn có nghĩa 'Thật có' với vô lượng công đức nên không phải khoảng không trống rỗng.",
      d: 'Sai. Chơn như không phải là không tồn tại vì nó có tự thể.',
    },
  },
  {
    question: "Nghĩa 'Thật có' (như thật bất không) khẳng định điều gì về Chơn như?",
    options: {
      a: 'Chơn như có hình tướng cụ thể để nắm bắt',
      b: 'Chơn như là một thực thể do con người tạo ra',
      c: 'Chơn như chính là thế giới vật chất ta đang thấy',
      d: 'Chơn như có đầy đủ các công đức vô lậu thanh tịnh',
    },
    answer: 'd',
    explanation: {
      a: "Sai. Cảnh giới 'thật có' này không có hình tướng gì để nắm lấy được.",
      b: 'Sai. Chơn như không phải do con người tạo ra, nó là bản thể từ hồi nào đến giờ vẫn thế.',
      c: 'Sai. Chơn như không phải là cảnh giới vật chất hữu hình.',
      d: 'Đúng. Tự thể Chơn như thật có đủ công đức vô lậu, thường còn không biến đổi và đầy đủ pháp thanh tịnh.',
    },
  },
  {
    question: "Làm thế nào để một người được coi là 'tùy thuận' với Chơn như?",
    options: {
      a: 'Đọc thuộc lòng tất cả kinh điển',
      b: 'Luôn luôn suy nghĩ về hình dáng của Chơn như',
      c: "Tuy có nói năng, suy nghĩ nhưng không chấp vào cái 'năng' và 'sở'",
      d: 'Từ bỏ hoàn toàn việc giao tiếp và suy nghĩ',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Việc tùy thuận không nằm ở chỗ đọc thuộc lòng kinh điển.',
      b: 'Sai. Chơn như không có hình tướng để suy nghĩ.',
      c: "Đúng. Nếu người nào biết tất cả pháp, tuy có nói bàn, suy nghĩ mà không có 'năng' và 'sở', thì được tùy thuận Chơn như.",
      d: 'Sai. Không cần từ bỏ hoàn toàn giao tiếp và suy nghĩ, chỉ cần không chấp vào chúng.',
    },
  },
  {
    question: 'Hình ảnh so sánh nào được dùng để diễn tả quan hệ giữa Thể, Tướng và Dụng của tâm?',
    options: {
      a: 'Gương và hình ảnh trong gương',
      b: 'Lửa và khói',
      c: 'Nước và sóng',
      d: 'Cây và quả',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hình ảnh chiếc gương không được dùng ở đây.',
      b: 'Sai. Hình ảnh lửa và khói không có trong bài.',
      c: 'Đúng. Bài luận viết: Thể không rời Tướng và Dụng; cũng như nước không rời sóng, sóng không rời nước.',
      d: 'Sai. Cây và quả không được sử dụng để so sánh.',
    },
  },
  {
    question: "Theo văn bản, trạng thái 'nhập Chơn như' khác với 'tùy thuận Chơn như' ở điểm nào?",
    options: {
      a: 'Tùy thuận là dành cho người tu, nhập là dành cho người không tu',
      b: 'Nhập Chơn như có nghĩa là hiểu được danh từ Chơn như',
      c: 'Nhập Chơn như là khi đã lìa được các vọng niệm',
      d: 'Không có sự khác biệt giữa hai trạng thái này',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Cả hai trạng thái đều dành cho người thực hành pháp, không phải phân chia cho người không tu.',
      b: 'Sai. Danh từ Chơn như chỉ là giả danh để trừ bỏ vọng niệm.',
      c: "Đúng. Tùy thuận là không chấp vào năng/sở, còn 'nhập' Chơn như là khi người đó đã lìa được các vọng niệm (vọng hết thì chơn hiện).",
      d: 'Sai. Có sự khác biệt rõ ràng giữa hai mức độ ngộ nhập và tùy thuận.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-2-phan-giai-thich',
  slug: 'bai-thu-2-phan-giai-thich',
  title: 'Bài Thứ 2 - Phần giải thích',
  type: 'article',
  status: 'published',
  order: 4,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-19',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-2-phan-giai-thich/B%E1%BA%A3n_Th%E1%BB%83_T%C3%A2m_Ch%C6%A1n_Nh%C6%B0.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-tam-chon-nhu', label: 'Nói về Tâm Chơn như' },
        { id: 'a-noi-ro-nghia-chanh', label: 'A. Nói rõ nghĩa chánh', indent: 1 },
        { id: 'chanh-van-noi-ro-nghia-chanh', label: 'Chánh văn', indent: 2 },
        { id: 'luoc-giai-noi-ro-nghia-chanh', label: 'Lược giải', indent: 2 },
        { id: 'i-tam-chon-nhu', label: 'I. Tâm chơn như', indent: 1 },
        { id: 'chanh-van-tam-chon-nhu', label: 'Chánh văn', indent: 2 },
        { id: 'luoc-giai-tam-chon-nhu', label: 'Lược giải', indent: 2 },
        { id: 'giai-danh-tu-tam-chon-nhu', label: 'Giải danh từ', indent: 2 },
        { id: 'chanh-van-danh-tu-chan-nhu', label: 'Chánh văn: Danh từ Chơn như', indent: 2 },
        { id: 'luoc-giai-danh-tu-chan-nhu', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-hoi-dap-tuy-thuan', label: 'Chánh văn: Hỏi đáp tùy thuận, ngộ nhập', indent: 2 },
        { id: 'luoc-giai-hoi-dap-tuy-thuan', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-hai-nghia-chon-nhu', label: 'Chánh văn: Hai nghĩa của Chơn như - Thật không', indent: 2 },
        { id: 'luoc-giai-that-khong', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-that-co', label: 'Chánh văn: Thật có', indent: 2 },
        { id: 'luoc-giai-that-co', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-2-phan-giai-thich/T%C3%A2m_Ch%C6%A1n_Nh%C6%B0.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/jVAD14SwHCg',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/74dTXhtHsZCcVn4IlaThue?utm_source=generator&si=4ab041f5e4ae4f0e',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần giải thích',
    passPercentage: 70,
    questions,
  },
}

export default lesson
