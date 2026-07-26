import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ SÁU · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="noi-ve-nghia-bat-giac-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Nói về nghĩa "Bất giác" (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="noi-ve-y-tuong-tuc" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">d. Nói về "Ý" tương tục, có 5 thứ</h3>
    </div>

    <h4 id="chanh-van-y-tuong-tuc" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Trên đã nói "Tâm sanh diệt", (thức A lại da) tiếp theo đây sẽ nói "cái 'Ý' làm nhân duyên sanh diệt".</p>
    <p>Tất cả chúng sanh đều từ nơi tâm (A lại da) mà sanh ra ý (Mạt na) và ý thức (thức thứ 6). Nghĩa là do thức A lại da có vô minh bất giác (nghiệp tướng) nên sanh ra Năng kiến (chuyển tướng) và Năng hiện (hiện tướng) rồi tiếp tục sanh ra các niệm (lục thô), chấp lấy cảnh giới v.v... gọi là "Ý".</p>

    <h4 id="luoc-giai-y-tuong-tuc" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này nói về sự quan trọng của "ý". Trong các nơi khác, khi nói đến "ý" thì thường dùng để chỉ riêng cho thức Mạt na, là thức sanh diệt tương tục thắng hơn các thức. Nhưng chữ "ý" ở luận này là chỉ chung cho cả 8 thức; vì cả 8 thức đều có nghĩa "sanh diệt tương tục".</p>
    <p>Thức A lại da là gốc của sanh diệt, thức Mạt na làm nhân duyên cho sự sanh diệt tương tục; còn ý thức thì khởi hoặc tạo nghiệp, làm cho chúng sanh nhiều kiếp sanh tử không dứt.</p>

    <h4 id="chanh-van-y-5-thu" class="mt-6 text-lg font-semibold">Chánh văn: Cái "Ý" có 5 thứ</h4>
    <p>Cái "Ý" này lại có 5 thứ: Nghiệp thức (nghiệp tướng), Chuyển thức (chuyển tướng), Hiện thức (hiện tướng), Trí thức (trí tướng) và Tương tục thức (tương tục tướng).</p>
    <p id="nghiep-thuc"><strong>a. "Nghiệp thức":</strong> là sự vô minh bất giác làm cho tâm vọng động (tức là Tự chứng phần của thức A lại da).</p>
    <p id="chuyen-thuc"><strong>b. "Chuyển thức":</strong> là phần Năng phân biệt (Kiến phần của thức A lại da) do tâm vọng động chuyển sanh ra.</p>
    <p id="hien-thuc"><strong>c. "Hiện thức":</strong> là sự hiện bày của cảnh giới ngũ trần bị phân biệt (Tướng phần của thức A lại da). Cảnh giới này không có trước sau, trong tất cả thời, mặc tình sanh khởi, thường hiện ở trước.</p>
    <p class="italic text-text-muted">(3 thức này thuộc về Tam Tế)</p>
    <p id="tri-thuc"><strong>d. "Trí thức":</strong> là cái biết phân biệt các pháp nhiễm tịnh.</p>
    <p id="tuong-tuc-thuc"><strong>e. "Tương tục thức":</strong> là niệm niệm sanh diệt tương tục không gián đoạn.</p>
    <p class="italic text-text-muted">(2 thức này thuộc về 2 món Thô trước, trong 6 món Thô)</p>
    <p>Năm thứ "ý" này, giữ gìn tất cả nghiệp lành dữ, từ quá khứ vô lượng kiếp về trước, cho đến ngày nay cũng không mất (trì chủng). Nó lại có công năng làm cho thành thục tất cả quả báo khổ vui về hiện tại cũng như tương lai, không sai mất (chấp thủ căn thân, thế giới và kiết sanh tương tục). Và có công năng nhớ việc đã qua, nghĩ những việc hiện tại và suy tính những việc chưa đến (vị lai).</p>
    <p>Bởi thế nên ba cõi (Dục giới, Sắc giới và Vô sắc giới) đều hư ngụy, duy tâm tạo ra. Nếu rời tâm thì không có cảnh giới sáu trần này (ba cõi).</p>

    <h4 id="luoc-giai-y-5-thu" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này nói về nghĩa chữ "ý", là chỉ cho một dòng sanh diệt tương tục không gián đoạn. Từ vô minh vọng động, sanh ra 3 món Tế, là Nghiệp tướng (nghiệp thức), Chuyển tướng (chuyển thức), Hiện tướng (hiện thức) và hai món Thô là Trí tướng (trí thức) và Tương tục tướng (tương tục thức).</p>
    <p>Năm cái "ý" này có công năng giữ gìn thiện ác, quả báo khổ vui hiện tại và vị lai, làm cho không mất (đó là công năng trì chủng, chấp thọ căn thân thế giới và kiết sanh tương tục của thức A đà na); nhớ nghĩ những việc đã qua và lo tính những điều chưa đến (đó là công năng của thức thứ 6), và một dòng sanh diệt, tiếp tục từ trước đến sau không gián đoạn, gọi đó là "ý". Bởi thế nên chữ "ý" này là chỉ chung cho cả 8 thức.</p>
    <p>Tóm lại, từ vô minh vọng động, sanh ra thức A lại da. Từ thức A lại da lại tiếp tục sanh ra 7 thức trước; rồi cùng nhau làm nhân làm duyên, lại thành ra một dòng sóng thức, sanh diệt tương tục vô tận, gọi đó là "ý". Cũng vì rõ nghĩa này, nên Cổ nhân làm bài thơ có câu rằng: "...Nhất ba tài động vạn ba tùy..." (một lượng sóng vừa nổi lên, thì trăm ngàn lượng sóng đều nổi theo).</p>
    <p>Nào ba cõi, nào 6 trần đều từ 8 thức này biến hiện. Bởi thế nên các pháp đều hư dối, duy tâm tạo ra; nếu rời 8 thức, thì các cảnh giới đều không còn.</p>

    <h4 id="chanh-van-tam-sanh-phap-sanh" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Nghĩa này thế nào? Do tất cả pháp đều từ vọng tâm của chúng sanh mà sanh khởi, nên tất cả sự phân biệt tức là phân biệt trong tự tâm. Nhưng tâm không có hình tướng gì cả, nên không thể thấy được nó. Phải biết, tất cả cảnh giới ở thế gian, đều do vô minh vọng tâm của chúng sanh mà được tồn tại, nên tất cả các pháp, đều không có thật thể, mà chỉ vọng tâm huyễn hiện, như bóng trong gương.</p>
    <p>Nếu vọng tâm sanh khởi, thì các pháp đều sanh khởi; vọng tâm diệt thì các pháp đều diệt (Tâm sanh tắc chủng chủng pháp sanh, tâm diệt tắc chủng chủng pháp diệt).</p>

    <h4 id="luoc-giai-tam-sanh-phap-sanh" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Tất cả các pháp đều do tâm của chúng sanh sanh ra, nên chúng sanh phân biệt các pháp, tức là phân biệt ở nơi tự tâm. Kinh Lăng Nghiêm chép: "Tự tâm thủ tự tâm, phi huyễn thành huyễn pháp" (tự tâm chúng sanh trở lại chấp lấy tự tâm chúng sanh; tâm không phải huyễn mà trở lại thành pháp hư huyễn).</p>
    <p>Tất cả các pháp đều không thật có, chỉ nương nơi tâm mà tồn tại, như hoa trong gương, như trăng dưới nước. Nếu tâm động thì các pháp sanh, tâm tịnh thì các pháp diệt. Trong Khế kinh chép: "Tâm sanh tắc chủng chủng pháp sanh, tâm diệt tắc chủng chủng pháp diệt" là vậy. Tổ Quy Sơn nói: "Nhất tâm không sanh thì muôn pháp đều dứt" (Nhất tâm bất sanh vạn pháp câu tức). Bởi thế nên đoạn trước nói "Người quán vô niệm (không vọng niệm) thì hướng về trí Phật".</p>
    <p class="italic text-text-muted">(Đoạn này đã nói về "ý tương tục" rồi, tiếp theo dưới đây sẽ nói đến ý thức.)</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="noi-ve-y-thuc" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">e. Nói về "ý thức"</h3>
    </div>

    <h4 id="chanh-van-y-thuc" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Trên đã nói về "ý" rồi, tiếp theo đây nói về "ý thức". Ý thức tức là "thức tương tục". Bởi chúng phàm phu chấp trước rất nặng nề nơi Ngã và Ngã sở, nên khởi ra các món vọng chấp, leo chuyền theo sự vật, phân biệt cảnh giới sáu trần, gọi đó là "ý thức" (thức thứ sáu). Cũng gọi đó là "Phân ly thức", hay gọi "Phân biệt sự thức". Thức này nương nơi kiến (kiến hoặc) và ái (tư hoặc) phiền não mà được nuôi lớn.</p>

    <h4 id="luoc-giai-y-thuc" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này nói về "ý thức".</p>
    <p>So với 5 món "ý" nói trên, thì ý thức này thuộc về món thứ năm là "Tương tục thức"; trong Lục thô nó thuộc về Thô thứ hai là "Tương tục Tướng"; trong 8 thức nó thuộc về thức thứ 6.</p>
    <p>Bởi thức này, niệm niệm tương tục, chấp Ngã và Ngã sở, leo chuyền theo các trần cảnh, phân biệt các sự vật, vọng chấp đủ điều, nên gọi là "Thức tương tục".</p>
    <p>Bởi thức này phân biệt 5 trần cảnh (Sắc, Thinh, Hương, Vị và Xúc) mỗi cảnh riêng nhau, nên gọi là "Phân ly thức".</p>
    <p>Bởi thức này phân biệt tất cả sự vật, nên cũng gọi là "Phân biệt sự thức".</p>
    <p>Lại nữa, thức này nhờ 2 món phiền não là "Kiến" và "Ái" mà được nuôi lớn. "Kiến" tức là kiến hoặc, thuộc về phân biệt hoặc. "Ái" tức là Tư hoặc, thuộc về Câu sanh hoặc. Do hai món phiền não này, nên ý thức mới khởi hoặc tạo nghiệp, quanh quẩn trong sanh tử luân hồi.</p>
    <p class="italic text-text-muted">(Trong "Môn sanh diệt" có 2 phần, trên đã nói về phần thuận dòng vô minh (lưu chuyển), sanh ra các pháp sanh tử tạp nhiễm; sau đây sẽ nói, chính nơi pháp tạp nhiễm lưu chuyển đó, để chỉ sự trở lại thanh tịnh (hoàn tịnh) tùy theo trình độ của người, hoặc mau hay chậm không đồng.)</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="canh-gioi-duy-phat-moi-biet" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Cảnh giới này duy Phật mới biết được rốt ráo</h3>
    </div>

    <h4 id="chanh-van-duy-phat" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Do vô minh huân tập sanh ra thức. Cảnh giới này, chúng phàm phu không thể biết được; dù cho hàng Nhị thừa dùng trí huệ quán sát cũng không thể biết được; các vị Bồ Tát từ Sơ tín cho đến Tam hiền (Trụ, Hạnh, Hướng) phát tâm quán sát, chỉ biết được chút ít; bậc Thập địa Bồ Tát (Pháp thân Bồ Tát) cũng chỉ biết được từng phần; cho đến Đẳng giác Bồ Tát cũng không thể biết hết; duy có Phật mới biết được rốt ráo.</p>
    <p>Tại sao vậy? Vì tâm này từ hồi nào đến giờ, tánh nó vẫn thanh tịnh, không có vô minh; song bị vô minh làm nhiễm ô (bất biến tùy duyên), vì thế nên rất khó biết. Bởi thế nên chỉ có Phật mới có thể biết được cảnh giới này.</p>
    <p>Tóm lại, chơn tâm (tâm tánh) vì thường không vọng niệm, nên gọi là "bất biến" (chơn như). Song chúng sanh vì không ngộ nhập được chơn tâm (nhất pháp giới) này, lại sanh vọng niệm nên gọi là "vô minh".</p>

    <h4 id="luoc-giai-duy-phat" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Người đang chiêm bao không bao giờ biết được chiêm bao, phải thức giấc rồi mới biết đó là cảnh chiêm bao; chúng sanh đang ở trong vòng vô minh vọng thức, không thể biết được vô minh vọng thức; bao giờ giác ngộ hoàn toàn, mới biết được rốt ráo cảnh giới của vô minh vọng thức.</p>
    <p>Do vô minh huân tập vào chơn như, nên chơn vọng hòa hiệp biến thành thức A lại da. Chúng phàm phu vì đang ở trong vòng thức biến, nên không bao giờ biết được cảnh giới thức biến. Hàng Nhị thừa tuy dùng trí huệ quán sát, phá được ngã chấp; nhưng mây pháp chấp hãy còn dày bịt và che lối chơn tâm, nên cũng không thể thấy được cảnh giới ấy. Các bậc Bồ Tát ở vị Tam hiền, mới phá được đôi phần phân biệt pháp chấp, nên chỉ biết được chút ít về cảnh giới này. Đến bậc Thập địa Bồ Tát, hễ phá được một phần vô minh, chứng được một phần pháp thân, thì thấy được một phần của cảnh giới này, và cứ tuần tự như thế, cho đến khi nào phá được 10 phần vô minh, thì chứng 10 phần pháp thân và biết được cả 10 phần của cảnh giới này. (Thập địa Bồ Tát, do phá vô minh, chứng được pháp thân, nên gọi là "Pháp thân Bồ Tát"). Bậc Đẳng giác Bồ Tát, vì còn vi tế vô minh, nên đối với cảnh giới này, biết cũng chưa tường tận. Đến quả vị Phật, do phá vô minh đã sạch hết, nên mới hoàn toàn biết được cảnh giới này; cũng như người đã hoàn toàn thức tỉnh, mới biết được rốt ráo cảnh mê mộng.</p>
    <p class="italic text-text-muted">(Trên đã nói nhân duyên trở lại bản tâm thanh tịnh rồi, dưới đây sẽ lược nói đến địa vị nào, mới đoạn được hoặc gì, để trở lại bản tâm thanh tịnh.)</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo nội dung bài học, tại sao chữ \'Ý\' trong luận này lại được dùng để chỉ chung cho cả 8 thức?',
    options: {
      a: 'Vì cả 8 thức đều có tính chất sanh diệt tương tục.',
      b: 'Vì các thức này không thể tách rời khỏi cảnh giới sáu trần.',
      c: 'Vì ý thức là thức quan trọng nhất trong việc tạo nghiệp.',
      d: 'Vì thức A-lai-da bao trùm và điều khiển tất cả các thức khác.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Tài liệu ghi rõ \'chữ ý ở luận này là chỉ chung cho cả 8 thức; vì cả 8 thức đều có nghĩa sanh diệt tương tục\' [1].',
      b: 'Sai. Cảnh giới sáu trần do thức biến hiện, nhưng không phải lý do dùng chung chữ \'Ý\'.',
      c: 'Sai. Tạo nghiệp là công năng đặc trưng của ý thức (thức thứ 6), không dùng để giải thích cho cả 8 thức.',
      d: 'Sai. Dù A-lại-da là gốc nhưng văn bản giải thích bằng tính \'sanh diệt tương tục\'.',
    },
  },
  {
    question: 'Thành phần nào sau đây thuộc về \'Tam Tế\' (ba món vi tế) trong 5 thứ Ý?',
    options: {
      a: 'Hiện thức và Ý thức.',
      b: 'Trí thức và Tương tục thức.',
      c: 'Chuyển thức và Trí thức.',
      d: 'Nghiệp thức, Chuyển thức và Hiện thức.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Hiện thức thuộc Tam tế nhưng Ý thức thì không.',
      b: 'Sai. Trí thức và Tương tục thức thuộc về hai món Thô trong sáu món Thô [2].',
      c: 'Sai. Trí thức không thuộc Tam tế.',
      d: 'Đúng. Văn bản nêu rõ ba món Tế sinh ra từ vô minh vọng động là Nghiệp tướng (nghiệp thức), Chuyển tướng (chuyển thức) và Hiện tướng (hiện thức) [2], [3].',
    },
  },
  {
    question: 'Trong 5 thứ Ý, \'Chuyển thức\' tương ứng với phần nào của thức A-lai-da?',
    options: {
      a: 'Chơn như phần.',
      b: 'Tướng phần.',
      c: 'Tự chứng phần.',
      d: 'Kiến phần (Năng phân biệt).',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Chuyển thức không phải chơn như phần.',
      b: 'Sai. Tướng phần tương ứng với Hiện thức.',
      c: 'Sai. Tự chứng phần tương ứng với Nghiệp thức.',
      d: 'Đúng. \'Chuyển thức\' được định nghĩa là phần Năng phân biệt (Kiến phần của thức A lại da) do tâm vọng động chuyển sanh ra [4].',
    },
  },
  {
    question: 'Đặc điểm nào sau đây mô tả đúng về \'Hiện thức\'?',
    options: {
      a: 'Là sự vọng động đầu tiên của tâm do vô minh.',
      b: 'Cảnh giới hiện bày không có trước sau, thường hiện ở trước.',
      c: 'Là sự ghi nhớ các việc đã qua và suy tính tương lai.',
      d: 'Là cái biết phân biệt các pháp nhiễm hay tịnh.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đây là mô tả của Nghiệp thức.',
      b: 'Đúng. Hiện thức là sự hiện bày của cảnh giới ngũ trần, không có trước sau, mặc tình sanh khởi và thường hiện ở trước [2].',
      c: 'Sai. Ghi nhớ và suy tính là công năng của Ý thức (thức thứ 6).',
      d: 'Sai. Phân biệt nhiễm tịnh là mô tả của Trí thức.',
    },
  },
  {
    question: 'Công năng \'trì chủng\' (giữ gìn hạt giống nghiệp) được văn bản gán cho đối tượng nào?',
    options: {
      a: 'Năm thứ \'Ý\' tương tục.',
      b: 'Duy nhất thức thứ sáu.',
      c: 'Trí tuệ của hàng Nhị thừa.',
      d: 'Cảnh giới sáu trần.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Năm thứ \'ý\' này có công năng giữ gìn tất cả nghiệp lành dữ từ quá khứ cho đến ngày nay không mất, gọi là trì chủng [2], [3].',
      b: 'Sai. Công năng này là của dòng 5 thứ \'ý\' tương tục kết hợp.',
      c: 'Sai. Hàng Nhị thừa không liên quan đến công năng trì chủng.',
      d: 'Sai. Sáu trần là cảnh giới bị phân biệt, không tự giữ gìn hạt giống nghiệp.',
    },
  },
  {
    question: 'Tại sao Ý thức (thức thứ sáu) còn được gọi là \'Phân ly thức\'?',
    options: {
      a: 'Vì nó hoạt động gián đoạn, không liên tục.',
      b: 'Vì nó giúp hành giả ly khai khỏi phiền não.',
      c: 'Vì nó tách rời khỏi tâm thức A-lai-da.',
      d: 'Vì nó phân biệt riêng biệt từng cảnh giới trong năm trần.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Thức này thuộc về \'Tương tục thức\', niệm niệm liên tục không gián đoạn.',
      b: 'Sai. Ý thức tạo nghiệp sinh tử luân hồi, không giúp ly khai phiền não.',
      c: 'Sai. Tên gọi này không dựa trên sự tách rời khỏi A-lai-da.',
      d: 'Đúng. Bởi thức này phân biệt 5 trần cảnh (Sắc, Thinh, Hương, Vị, Xúc) mỗi cảnh riêng nhau, nên gọi là \'Phân ly thức\' [5].',
    },
  },
  {
    question: 'Theo văn bản, \'Ý thức\' được nuôi lớn bởi hai món phiền não nào?',
    options: {
      a: 'Vô minh và Ngã mạn.',
      b: 'Kiến (kiến hoặc) và Ái (tư hoặc).',
      c: 'Tham và Sân.',
      d: 'Hôn trầm và Thụy miên.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ngã mạn không được đề cập là thức nuôi lớn ý thức.',
      b: 'Đúng. Văn bản nêu rõ thức này nương nơi kiến (kiến hoặc) và ái (tư hoặc) phiền não mà được nuôi lớn [6], [7].',
      c: 'Sai. Tham và Sân thuộc phiền não nói chung nhưng không dùng đúng thuật ngữ ở đoạn này.',
      d: 'Sai. Hôn trầm và thụy miên không được nhắc đến.',
    },
  },
  {
    question: 'Câu nói \'Tâm sanh tắc chủng chủng pháp sanh, tâm diệt tắc chủng chủng pháp diệt\' ngụ ý điều gì?',
    options: {
      a: 'Mọi cảnh giới đều do vọng tâm huyễn hiện, không có thật thể.',
      b: 'Chỉ khi tâm diệt thì con người mới trở nên vô tri như gỗ đá.',
      c: 'Thế giới khách quan tồn tại độc lập với tâm thức.',
      d: 'Sự sinh diệt của vạn vật là quy luật vật lý tự nhiên.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Tất cả các pháp đều không thật có, chỉ nương nơi tâm mà tồn tại. Vọng tâm sanh thì pháp sanh, tâm diệt thì pháp diệt [8], [9].',
      b: 'Sai. Câu nói không ngụ ý biến thành vô tri.',
      c: 'Sai. Câu nói khẳng định điều ngược lại: mọi thứ duy tâm tạo ra.',
      d: 'Sai. Đây là quy luật của tâm thức, không phải quy luật vật lý học.',
    },
  },
  {
    question: 'Tại sao bậc Đẳng giác Bồ Tát vẫn chưa thể biết rốt ráo về cảnh giới của thức?',
    options: {
      a: 'Vì cảnh giới này vốn không thể biết được.',
      b: 'Vì vẫn còn vi tế vô minh chưa đoạn hết.',
      c: 'Vì bậc Đẳng giác chưa chứng được Pháp thân.',
      d: 'Vì họ không sử dụng trí huệ để quán sát.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đức Phật có thể biết được rốt ráo cảnh giới này.',
      b: 'Đúng. Bậc Đẳng giác Bồ Tát vì còn vi tế vô minh, nên đối với cảnh giới này biết cũng chưa tường tận [10], [11].',
      c: 'Sai. Từ bậc Thập địa Bồ Tát đã chứng được các phần của Pháp thân.',
      d: 'Sai. Các ngài vẫn có quán sát nhưng vô minh che khuất nên chưa biết hết.',
    },
  },
  {
    question: 'Mối quan hệ giữa Chơn tâm và Vô minh được mô tả như thế nào trong phần kết của văn bản?',
    options: {
      a: 'Vô minh có trước rồi mới sanh ra Chơn tâm.',
      b: 'Tánh của tâm vẫn thanh tịnh nhưng bị vô minh làm nhiễm ô.',
      c: 'Chơn tâm và Vô minh là hai thực thể tách biệt hoàn toàn.',
      d: 'Khi có vô minh thì Chơn tâm biến mất hoàn toàn.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Chơn tâm không sinh ra từ vô minh.',
      b: 'Đúng. Tâm này từ hồi nào đến giờ tánh nó vẫn thanh tịnh, không có vô minh; song bị vô minh làm nhiễm ô (bất biến tùy duyên) [10].',
      c: 'Sai. Chúng không tách biệt mà hòa hiệp huân tập lẫn nhau tạo thành thức A-lại-da.',
      d: 'Sai. Chơn tâm bất biến, nó không bị biến mất mà chỉ bị che lấp đi.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-6-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-6-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 6 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 8,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-26',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-6-phan-giai-thich-tiep-theo/B%E1%BA%A3n_ch%E1%BA%A5t_c%E1%BB%A7a_t%C3%A2m_th%E1%BB%A9c.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-nghia-bat-giac-tiep-theo', label: 'Nói về nghĩa "Bất giác" (tiếp theo)' },
        { id: 'noi-ve-y-tuong-tuc', label: 'd. Nói về "ý tương tục" có 5 thứ' },
        { id: 'chanh-van-y-tuong-tuc', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-y-tuong-tuc', label: 'Lược giải', indent: 1 },
        { id: 'chanh-van-y-5-thu', label: 'Chánh văn: Cái "Ý" có 5 thứ', indent: 1 },
        { id: 'nghiep-thuc', label: 'Nghiệp thức (nghiệp tướng)', indent: 2 },
        { id: 'chuyen-thuc', label: 'Chuyển thức (chuyển tướng)', indent: 2 },
        { id: 'hien-thuc', label: 'Hiện thức (hiện tướng)', indent: 2 },
        { id: 'tri-thuc', label: 'Trí thức (trí tướng)', indent: 2 },
        { id: 'tuong-tuc-thuc', label: 'Tương tục thức (tương tục tướng)', indent: 2 },
        { id: 'luoc-giai-y-5-thu', label: 'Lược giải', indent: 1 },
        { id: 'chanh-van-tam-sanh-phap-sanh', label: 'Chánh văn: Tâm sanh thì các pháp sanh', indent: 1 },
        { id: 'luoc-giai-tam-sanh-phap-sanh', label: 'Lược giải', indent: 1 },
        { id: 'noi-ve-y-thuc', label: 'e. Nói về "ý thức"' },
        { id: 'chanh-van-y-thuc', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-y-thuc', label: 'Lược giải', indent: 1 },
        { id: 'canh-gioi-duy-phat-moi-biet', label: 'Cảnh giới này duy Phật mới biết được rốt ráo' },
        { id: 'chanh-van-duy-phat', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-duy-phat', label: 'Lược giải', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-6-phan-giai-thich-tiep-theo/Ripples_of_Consciousness.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/b-h8Pju_Ozc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/4v70aBKkXWcyTb5ncDkrjB?utm_source=generator&si=12ed9a4dbf7e403c',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần giải thích (tiếp theo)',
    passPercentage: 70,
    questions,
  },
}

export default lesson
