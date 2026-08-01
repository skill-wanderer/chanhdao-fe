import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <!-- Khối Tiêu đề chính -->
    <div class="mb-10 rounded-2xl border border-primary-200 bg-primary-50/70 p-6 shadow-sm dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-bold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ TÁM · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="noi-ve-nghia-bat-giac-tiep-theo" class="mt-0 mb-0 text-3xl font-extrabold leading-tight text-primary-700 dark:text-primary-300">Nói về nghĩa "Bất giác" (tiếp theo)</h2>
    </div>

    <!-- Mục k -->
    <div class="mt-12 mb-8 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="bon-mon-huan-tap" class="mt-0 mb-0 text-2xl font-bold text-secondary-700 dark:text-secondary-300">k. Nói về bốn món huân tập</h3>
    </div>

    <h4 id="chanh-van-bon-mon-huan-tap" class="mt-8 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p class="mb-4">Lại nữa, vì có bốn món huân tập, nên các pháp tạp nhiễm và thanh tịnh được sanh khởi không dứt.</p>
    <ol class="mb-6 list-decimal pl-6 space-y-2">
      <li>Chơn như (pháp thanh tịnh) huân tập</li>
      <li>Vô minh (các nhơn tạp nhiễm) huân tập</li>
      <li>Nghiệp thức (vọng tâm) huân tập</li>
      <li>Cảnh giới hư vọng (sáu trần) huân tập.</li>
    </ol>
    
    <div class="my-8 rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-3"><strong class="text-primary-800 dark:text-primary-300">Hỏi:</strong> Sao gọi là "huân tập"?</p>
      <p class="mb-3"><strong class="text-primary-800 dark:text-primary-300">Đáp:</strong> Chữ "Huân" là xông ướp; chữ "Tập" là quen. Thí như y phục không có mùi thơm, song vì người ta lấy vật thơm xông ướp vào, nên nó quen (có) mùi thơm.</p>
      <p class="mb-0">Cũng thế, chơn như là pháp thanh tịnh thật không có nhiễm ô, song vì bị vô minh huân tập vào, nên có tướng nhiễm ô. Trái lại, vô minh là pháp tạp nhiễm, cũng không có diệu dụng thanh tịnh, chỉ vì bị chơn như huân tập vào, nên nó có diệu dụng thanh tịnh.</p>
    </div>

    <h4 id="luoc-giai-bon-mon-huan-tap" class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn này nói về việc "Huân tập" của tâm sanh diệt, để chỉ rõ lý do các pháp sanh diệt tương tục. Ở đây nên lưu ý nhứt, là hai chữ "huân tập". Chúng ta được chứng Thánh Hiền hay bị làm phàm phu, đều do huân tập cả.</p>
    <p class="mb-4">Thí như người không biết uống rượu, gần gũi bạn rượu nay nếm một giọt, mai uống một ly, như thế gọi là "Huân". Lâu ngày người ấy vì quen hơi rượu, nên ghiền rượu, gọi là "Tập" (tập quán).</p>
    <p class="mb-4">Chơn như và vô minh huân tập nhau cũng thế. Nếu chơn như mạnh, huân tập vô minh, thì vô minh biến thành tịnh dụng. Trái lại, nếu vô minh mạnh, huân tập vào chơn như thì chơn như biến ra tướng nhiễm ô. Cũng như nước lạnh và nóng đổ chung một bồn, nếu thế lực của nước nóng nhiều, thì làm cho nước lạnh trở thành ấm; trái lại, nếu thế lực của nước lạnh nhiều, thì làm cho nước nóng trở thành mát.</p>
    <p class="mb-4">Hằng ngày chúng ta "huân tập" không biết bao nhiêu việc, huân tập cái gì thành ra cái nấy. Huân tập cái xấu nhiều, thành ra người xấu; huân tập cái tốt nhiều, thành ra người tốt. Vào hàng bán hương chiên đàn, được xông ướp mùi thơm, thì ta thơm. Vào hàng bán thịt cá, bị ướp mùi tanh hôi, thì ta hôi. Gần gũi người hiền huân tập đức tánh tốt, thì ta thành người lương thiện; gần gũi kẻ ác, huân tập theo tánh hung dữ, ta thành người bạo ác. Bởi thế nên ngạn ngữ có câu: "Gần mực thì đen, gần đèn thì sáng". Hằng ngày chúng ta chung đụng, gần gũi, lân la không biết bao nhiêu hạng người, chúng ta phải thận trọng về sự huân tập này. Huân tập Phật (chơn như) thì được thành Phật, huân tập chúng sanh (vô minh) thì làm chúng sanh.</p>
    <p class="mb-4 font-semibold">Huân tập có bốn loại:</p>
    <ol class="mb-4 list-decimal pl-6 space-y-2">
      <li>Chơn như huân tập</li>
      <li>Vô minh huân tập</li>
      <li>Vọng tâm huân tập</li>
      <li>Vọng cảnh huân tập</li>
    </ol>
    <p class="text-text-muted italic">Sẽ tuần tự giải thích từ thô đến tế như sau.</p>

    <!-- Do huân tập nhiễm ô -->
    <div class="mt-12 mb-8 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="huan-tap-phap-nhiem-o" class="mt-0 mb-0 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Do huân tập nên các pháp nhiễm ô sanh khởi không dứt</h3>
    </div>

    <h4 id="chanh-van-phap-nhiem-o" class="mt-8 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    
    <div class="my-8 rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-3"><strong class="text-primary-800 dark:text-primary-300">Hỏi:</strong> Huân tập thế nào, mà các pháp tạp nhiễm sanh khởi không dứt?</p>
      <p class="mb-0"><strong class="text-primary-800 dark:text-primary-300">Đáp:</strong> Do chơn như mà có vô minh (hoặc); rồi vô minh làm nhơn trở lại huân tập vào chơn như (nghiệp) sanh ra vọng tâm (khổ); rồi vọng tâm (khổ) trở lại huân tập vào vô minh (hoặc) v.v...</p>
    </div>
    
    <p class="mb-4">Nghĩa là vì chưa ngộ nhập được chơn như, nên bất giác (hoặc, tức là nghiệp tướng) vọng niệm sanh khởi (nghiệp, tức là chuyển tướng) và vọng hiện ra các cảnh giới (khổ, tức là hiện tướng).</p>
    <p class="mb-6">Rồi do cảnh giới nhiễm ô vọng hiện này (khổ) trở lại huân tập vào vọng tâm, sanh ra vọng niệm chấp trước (hoặc, tức là bốn món Thô trước) và tạo ra các nghiệp (nghiệp, tức là món Thô thứ năm) rồi chịu tất cả khổ về thân và tâm v.v... (khổ, tức là món Thô thứ sáu).</p>

    <h4 id="luoc-giai-phap-nhiem-o" class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn này nói do huân tập nên các pháp tạp nhiễm sanh khởi không dứt.</p>
    <p class="mb-4">Vì chưa ngộ nhập được chơn tâm, nên vô minh bất giác vọng động nổi lên (hoặc) rồi huân tập trở lại chơn tâm (nghiệp) biến thành vọng tâm (khổ).</p>
    <p class="mb-4">Rồi từ vọng tâm (khổ) trở lại huân tập vô minh (hoặc) sanh ra vọng niệm (nghiệp) và cảnh giới hư vọng (khổ).</p>
    <p class="mb-4">Cảnh giới hư vọng (khổ) trở lại huân tập vọng tâm, sanh ra vọng niệm chấp trước (hoặc) tạo ra các nghiệp (nghiệp) rồi chịu quả khổ về thân và tâm v.v... (khổ).</p>
    <p class="mb-8">Cũng như 12 nhơn duyên: Từ vô minh (hoặc) làm duyên cho hành (nghiệp), hành làm duyên cho thức, danh sắc, lục nhập, xúc thọ (khổ); thọ làm duyên cho ái (hoặc) và ái làm duyên cho thủ, hữu (nghiệp) sanh và lão tử (khổ) v.v... Ba đời nhơn quả, từ hoặc tạo nghiệp (nhơn quá khứ), do nghiệp nên thọ khổ (quả hiện tại). Rồi khổ lại mê hoặc tạo nghiệp (nhơn hiện tại) và vì tạo nghiệp nên phải chịu khổ về sau (quả vị lai), v.v... Như cái vòng tròn không có mối. Bởi thế nên nói các pháp tạp nhiễm tương tục sanh khởi không dứt.</p>

    <h4 id="chanh-van-canh-gioi-vong-tam-vo-minh" class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn (tiếp theo)</h4>
    
    <p class="mt-6 mb-3 font-semibold">Nói về cảnh giới hư vọng (6 trần) huân tập:</p>
    <p class="mb-2">Cảnh giới hư vọng (6 trần) huân tập có hai món:</p>
    <ul class="mb-6 list-disc pl-6 space-y-2">
      <li>Cảnh giới huân tập làm tăng trưởng vọng niệm (Trí tướng và Tương tục tướng).</li>
      <li>Cảnh giới huân tập làm tăng trưởng chấp thủ (Chấp thủ tướng và Kế danh tự tướng).</li>
    </ul>
    
    <p class="mt-6 mb-3 font-semibold">Nói về vọng tâm (nghiệp thức) huân tập:</p>
    <p class="mb-2">Vọng tâm huân tập có hai món:</p>
    <ul class="mb-6 list-disc pl-6 space-y-2">
      <li>Vọng tâm (nghiệp thức căn bản) huân tập lại căn bản vô minh (làm cho tạng thức bất đoạn) làm cho các vị Bồ Tát, A la hán, Bích Chi Phật (Duyên giác) phải thọ khổ "Biến dịch sanh tử" (sanh tử biến đổi).</li>
      <li>Vọng tâm (phân biệt sự thức) huân tập chi mạt vô minh (tức là bốn món Thô trước) làm cho chúng phàm phu chịu khổ "phần đoạn sanh tử".</li>
    </ul>

    <p class="mt-6 mb-3 font-semibold">Nói về vô minh huân tập:</p>
    <p class="mb-2">Vô minh huân tập có 2 món:</p>
    <ul class="mb-8 list-disc pl-6 space-y-2">
      <li>Căn bản vô minh huân tập vào chơn như làm thành tựu nghiệp thức (Tạng thức).</li>
      <li>Chi mạt vô minh (kiến, ái) huân tập vào vọng tâm làm thành tựu (tăng trưởng) phân biệt sự thức (ý thức).</li>
    </ul>

    <h4 id="luoc-giai-canh-gioi-vong-tam-vo-minh" class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-6">Đoạn này nói về 3 loại huân tập (còn loại thứ tư, là chơn như huân tập, sẽ nói trong bài sau), từ thô về tế:</p>
    
    <p class="mb-4"><strong>1. Cảnh giới hư vọng 6 trần huân tập vào vọng tâm</strong>, nuôi lớn chi mạt vô minh, cũng gọi nhuận sanh vô minh, tức là Niệm (Trí tướng và Tương tục tướng) và thủ (chấp thủ tướng).</p>
    
    <p class="mb-3"><strong>2. Vọng tâm (nghiệp thức) huân tập lại vô minh</strong>, nuôi lớn hai món khổ sanh tử của phàm phu và Thánh giả:</p>
    <ul class="mb-6 space-y-3 pl-6">
      <li><strong class="text-secondary-600 dark:text-secondary-400">a.</strong> Vì vọng tâm (nghiệp thức) huân tập vào căn bản vô minh, nuôi lớn "vọng niệm", làm cho Tạng thức (A lại da) bất đoạn, nên các vị Bồ Tát, Duyên giác, A la hán phải bị khổ biến dịch sanh tử.</li>
      <li><strong class="text-secondary-600 dark:text-secondary-400">b.</strong> Vì vọng tâm phân biệt sự thức (ý thức) huân tập vào chi mạt vô minh (Trí tướng, Tương tục tướng, Chấp thủ tướng và Kế danh tự tướng, tức là kiến hoặc và tư hoặc) nuôi lớn "chấp thủ", làm cho 7 thức trước tương tục mãi mãi, nên chúng phàm phu phải bị khổ phân đoạn sanh tử.</li>
    </ul>
    
    <p class="mb-3"><strong>3. Vô minh huân tập làm thành tựu nghiệp thức và phân biệt sự thức:</strong></p>
    <ul class="mb-6 space-y-3 pl-6">
      <li><strong class="text-secondary-600 dark:text-secondary-400">a.</strong> Vì căn bản vô minh huân tập vào chơn như, nên làm thành tựu nghiệp thức, tức là A lại da thức.</li>
      <li><strong class="text-secondary-600 dark:text-secondary-400">b.</strong> Vì chi mạt vô minh (Kiến: kiến hoặc; Ái: tư hoặc) huân tập vào vọng tâm (nghiệp thức), nên làm thành tựu phân biệt sự thức tức là ý thức. Nói chung là bảy thức trước. Vì bảy thức trước phân biệt các sự vật, rồi chấp ngã, chấp pháp, nên các sự vật mới thành như thế này, hoặc như thế nọ. Bởi thế nên gọi là phân biệt sự thức.</li>
    </ul>
    
    <p class="mt-8 text-text-muted italic">Đã nói "Do huân tập nên các pháp tạp nhiễm sanh khởi không dứt" rồi; tiếp theo đây sẽ nói: "Do huân tập nên các pháp thanh tịnh sanh khởi không dứt".</p>

    <!-- Do huân tập thanh tịnh -->
    <div class="mt-12 mb-8 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="huan-tap-phap-thanh-tinh" class="mt-0 mb-0 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Do huân tập nên các pháp thanh tịnh sanh khởi không dứt</h3>
    </div>

    <h4 id="chanh-van-phap-thanh-tinh" class="mt-8 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    
    <div class="my-8 rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-3"><strong class="text-primary-800 dark:text-primary-300">Hỏi:</strong> Huân tập thế nào, mà các pháp thanh tịnh sanh khởi không dứt?</p>
      <p class="mb-0"><strong class="text-primary-800 dark:text-primary-300">Đáp:</strong> Do chơn như huân tập vô minh, nên làm cho hành giả khởi vọng tâm nhàm chán khổ sanh tử, cầu vui Niết bàn.</p>
    </div>
    
    <p class="mb-4">Nhờ công năng chán khổ sanh tử, ưa thú vui Niết bàn của vọng tâm đó, trở lại huân tập vào chơn như, nên hành giả mới tự tin tánh Phật (khả năng thành Phật) của mình (ở vị Thập tín) và biết cảnh giới hiện tiền không thấy có, chỉ do tâm vọng động hiện ra (Thập trụ) rồi tu hành để xa lìa các nhiễm ô (Thập hạnh và Thập hồi hướng).</p>
    <p class="mb-4">Khi biết xác thực không có cảnh giới hiện tiền (Sơ địa), hành giả mới dùng các phương tiện tu hành (từ Nhị địa đến Cửu địa) và khởi ra hạnh tuỳ thuận chơn tâm, không chấp thủ (Chấp thủ tướng và Kế danh tự tướng), không vọng niệm (Trí tướng và Tương tục tướng) và tu hành trải qua nhiều kiếp lâu xa (Thập địa).</p>
    <p class="mb-6 font-semibold">Tóm lại: Nhờ sức chơn như huân tập này, nên vô minh diệt (Nghiệp tướng diệt). Vì vô minh diệt nên tâm không vọng động (Chuyển tướng diệt); do tâm không vọng động nên cảnh giới cũng theo đó mà diệt (Hiện tướng diệt). Do vô minh (nhơn) và cảnh giới (duyên) đều diệt, nên các tướng vọng nhiễm của tâm cũng diệt hết (Lục thô diệt hết). Lúc bấy giờ, gọi là chứng Niết bàn, và hành giả được diệu dụng không thể nghĩ bàn (tự nhiên nghiệp).</p>

    <h4 id="luoc-giai-phap-thanh-tinh" class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn này nói do huân tập mà các pháp thanh tịnh sanh khởi không dứt.</p>
    <p class="mb-4">Bên trong nhờ tánh Phật (chơn như) huân tập vô minh, nên làm cho hành giả phản tỉnh, nhàm khổ sanh tử cầu vui Niết bàn. Bên ngoài nhờ sự phản tỉnh này, trở lại huân tập vào tánh Phật (chơn như) làm cho hành giả giác ngộ cảnh giới này không thật, nên đã không sanh tâm tham luyến và tạo nghiệp; trái lại, còn tuỳ thuận theo tánh Phật tu hành, phá trừ Tam tế Lục thô, trải qua bao vô số kiếp và 56 địa vị, từ Thập tín đến quả Phật.</p>
    <p class="mb-4">Vì bên trong vô minh, bên ngoài cảnh giới đều đã diệt nên vọng tâm cũng diệt; do vọng tâm diệt, nên tánh Phật (chơn như) mới hiện ra, gọi đó là cảnh Niết bàn. Lúc bấy giờ hành giả được rất nhiều diệu dụng hoá độ chúng sanh không thể nghĩ bàn.</p>
    <p class="mb-4">Chúng ta nên lưu ý đặc điểm này: khi mê thì vô minh làm cho vọng tâm tạo ra các tội khổ sanh tử triền phược; đến lúc ngộ thì chơn như (tánh Phật) làm cho vọng tâm phản tỉnh và tiến tu đến đạo quả Bồ Đề, Niết bàn.</p>
    <p class="mb-8">Cũng như một cây gươm, nếu kẻ giặc cầm thì sát nhơn vô đạo; còn người anh hùng tướng sĩ cầm, thì bảo vệ non sông. Bởi thế nên người tu hành, chỉ đổi cái "Dụng" mà thôi, chớ không phải trừ bỏ cái "Thể" vậy.</p>

    <h4 id="chanh-van-vong-tam-huan-tap" class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn (Vọng tâm huân tập)</h4>
    <p class="mb-3">Lại nữa, vọng tâm huân tập có hai thứ:</p>
    <ul class="mb-6 list-disc pl-6 space-y-2">
      <li><strong>Ý thức huân tập</strong> (phân biệt sự thức), làm cho chúng phàm phu và Nhị thừa nhàm chán khổ sanh tử, và tuỳ theo năng lực của mình, lần lần tu hành đến Đạo vô thượng Bồ Đề.</li>
      <li><strong>Ý huân tập</strong>, làm cho các vị Bồ Tát phát tâm dõng mãnh, mau đến quả Niết bàn.</li>
    </ul>

    <h4 id="luoc-giai-vong-tam-huan-tap" class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn này giải thích, vọng tâm huân tập trở lại chơn như, có hai loại:</p>
    <p class="mb-4"><strong>Ý thức (thức thứ sáu) huân tập vào chơn như;</strong> nghĩa là do công năng phản tỉnh của ý thức, huân tập trở lại tánh Phật sẵn có (chơn như), nên làm cho chúng phàm phu và hàng Nhị thừa nhàm chán khổ sanh tử, phát tâm tu hành, lần lần đến đạo vô thượng Bồ Đề.</p>
    <p class="mb-6"><strong>Ý (tương tục ý) huân tập trở lại chơn như;</strong> nghĩa là do công năng phản tỉnh của ý, huân tập trở lại tánh Phật (chơn như), nên làm cho hàng Bồ Tát, phát tâm dõng mãnh tu hành, mau được quả Niết bàn.</p>
    
    <p class="mt-8 text-text-muted italic">Trên đã nói vọng tâm huân tập vào chơn như, có thô và tế không đồng rồi; tiếp sau đây sẽ nói chơn như huân tập vô minh, có "thể" và "dụng" không đồng.</p>

    <div class="mt-16 text-center">
      <span class="inline-block border-b-2 border-text-muted pb-2 text-sm font-extrabold uppercase tracking-widest text-text-muted">HẾT QUYỂN THƯỢNG</span>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo nội dung bài viết, khái niệm "Huân" và "Tập" được định nghĩa như thế nào thông qua ví dụ về y phục?',
    options: {
      a: '"Huân" là thói quen xấu, "Tập" là sự rèn luyện để trở nên tốt đẹp.',
      b: '"Huân" là bản chất sẵn có, "Tập" là sự thay đổi do tác động bên ngoài.',
      c: '"Huân" là sự nhận thức, "Tập" là hành động thực tế sau khi nhận thức.',
      d: '"Huân" là xông ướp mùi thơm, "Tập" là thói quen có mùi thơm đó lâu ngày.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Đây không phải ý nghĩa của từ "Huân tập".',
      b: 'Sai. Cách giải thích này không phù hợp với ví dụ xông ướp.',
      c: 'Sai. Đây là cách hiểu sai lệch về mặt từ nguyên.',
      d: 'Đúng. "Huân" nghĩa là xông ướp (như lấy hương xông vào áo), "Tập" là lâu ngày thành thói quen (áo nhiễm mùi hương). Khái niệm này chỉ cho sự tác động qua lại trong tâm thức.',
    },
  },
  {
    question: 'Khi Chơn như bị Vô minh huân tập, hiện tượng nào sau đây sẽ xảy ra?',
    options: {
      a: 'Không có sự thay đổi nào vì Chơn như là bất biến.',
      b: 'Vô minh sẽ trở thành một phần của bản thể Chơn như.',
      c: 'Chơn như sẽ tiêu diệt hoàn toàn Vô minh ngay lập tức.',
      d: 'Chơn như hiện ra các tướng nhiễm ô.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Dù bản thể Chơn như bất biến, nhưng về mặt duyên khởi thì vẫn sinh ra vọng tướng.',
      b: 'Sai. Vô minh không thể hòa vào làm một với bản thể thanh tịnh.',
      c: 'Sai. Quá trình này cần thời gian tu tập chứ không tiêu diệt ngay lập tức.',
      d: 'Đúng. Khi Chơn như bị Vô minh huân tập (xông ướp), thì trên bề mặt của Chơn như sẽ hiện ra các tướng sanh diệt nhiễm ô.',
    },
  },
  {
    question: 'Ví dụ về "nước nóng và nước lạnh" trong bài dùng để minh họa cho điều gì?',
    options: {
      a: 'Thế lực mạnh hay yếu của Chơn như hoặc Vô minh sẽ quyết định tính chất của tâm.',
      b: 'Sự hình thành của thế giới vật chất từ các yếu tố đối lập.',
      c: 'Bản chất của mọi sự vật đều là giả tạm như hơi nước.',
      d: 'Sự mâu thuẫn không thể điều hòa giữa các pháp thiện và ác.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Nước lạnh tượng trưng cho Chơn như, sức nóng tượng trưng cho Vô minh. Sự huân tập qua lại giống như đun nước: thế lực bên nào mạnh hơn sẽ lấn át, khiến tâm nghiêng về thanh tịnh hay tạp nhiễm.',
      b: 'Sai. Ví dụ này minh họa cho trạng thái của tâm thức, không phải thế giới vật chất.',
      c: 'Sai. Ví dụ không nhằm nhấn mạnh tính giả tạm.',
      d: 'Sai. Nó minh họa sự tương huân, không phải là mâu thuẫn không thể điều hòa.',
    },
  },
  {
    question: 'Trong tiến trình tạp nhiễm, sự tác động của Cảnh giới hư vọng (6 trần) lên Vọng tâm dẫn đến kết quả nào?',
    options: {
      a: 'Hình thành nên Tạng thức (A lại da thức) nguyên thủy.',
      b: 'Làm tăng trưởng vọng niệm và tăng trưởng chấp thủ.',
      c: 'Chấm dứt các khổ về thân và tâm.',
      d: 'Giúp hành giả sớm nhận ra sự giả tạm của thế gian.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tạng thức được hình thành ở lớp sâu hơn (Vô minh huân tập Chơn như).',
      b: 'Đúng. Cảnh giới bên ngoài (sắc, thinh, hương...) huân tập trở lại Vọng tâm làm phát sinh và tăng trưởng các vọng niệm, chấp trước, từ đó tạo nghiệp và thọ khổ.',
      c: 'Sai. Nó mang lại sự ràng buộc và đau khổ, không phải chấm dứt.',
      d: 'Sai. Ngược lại, nó khiến chúng sanh càng mê đắm thế gian hơn.',
    },
  },
  {
    question: 'Hàng Bồ Tát, A-la-hán và Duyên giác còn phải chịu loại khổ nào do Vọng tâm (nghiệp thức) huân tập vào Căn bản vô minh?',
    options: {
      a: 'Biến dịch sanh tử.',
      b: 'Kiến hoặc và Tư hoặc.',
      c: 'Phần đoạn sanh tử.',
      d: 'Khổ tam đồ ác đạo.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Các vị Thánh này đã dứt được phần đoạn sanh tử của phàm phu, nhưng do Vọng tâm huân tập Vô minh nên vẫn còn vi tế sanh diệt, phải chịu Biến dịch sanh tử.',
      b: 'Sai. Kiến hoặc và Tư hoặc phần lớn đã được các vị này đoạn trừ.',
      c: 'Sai. Phần đoạn sanh tử là cái khổ của phàm phu trong lục đạo.',
      d: 'Sai. Các Ngài đã giải thoát khỏi tam đồ ác đạo.',
    },
  },
  {
    question: 'Kết quả của việc Căn bản vô minh huân tập vào Chơn như là gì?',
    options: {
      a: 'Thành tựu nghiệp thức (Tạng thức).',
      b: 'Phát khởi tâm dõng mãnh cầu Niết bàn.',
      c: 'Thành tựu phân biệt sự thức (Ý thức).',
      d: 'Sanh ra các cảnh giới 6 trần bên ngoài.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Căn bản vô minh huân tập Chơn như tạo ra động tướng vi tế đầu tiên, gọi là Nghiệp thức hay A lại da thức (Tạng thức).',
      b: 'Sai. Quá trình này tạo ra tạp nhiễm, không phải phát tâm bồ đề.',
      c: 'Sai. Ý thức (Phân biệt sự thức) là lớp thô hơn, hình thành sau đó.',
      d: 'Sai. Cảnh giới 6 trần do vọng tâm biến hiện ra sau đó.',
    },
  },
  {
    question: 'Trong tiến trình thanh tịnh, hành giả bắt đầu tự tin vào tánh Phật của mình ở địa vị nào?',
    options: {
      a: 'Quả vị Phật.',
      b: 'Vị Thập trụ.',
      c: 'Vị Thập tín.',
      d: 'Vị Sơ địa.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Ở quả vị Phật thì đã chứng ngộ hoàn toàn, không chỉ dừng ở mức bắt đầu tự tin.',
      b: 'Sai. Vị Thập trụ đã tiến xa hơn bước khởi đầu này.',
      c: 'Đúng. Nhờ Chơn như huân tập bên trong và chư Phật Bồ Tát hỗ trợ bên ngoài, hành giả tu tập đến vị Thập tín thì mới bắt đầu tin chắc vào bản giác (tánh Phật) của chính mình.',
      d: 'Sai. Vị Sơ địa là đã chứng kiến đạo thanh tịnh, không còn ở mức độ mới bắt đầu tự tin.',
    },
  },
  {
    question: 'Theo văn bản, điều gì xảy ra khi vô minh (nhân) và cảnh giới (duyên) đều bị diệt trừ?',
    options: {
      a: 'Hành giả trở thành một vị Bồ Tát tiếp tục thọ khổ biến dịch.',
      b: 'Chơn như cũng bị tiêu diệt theo vì không còn đối tượng huân tập.',
      c: 'Tâm rơi vào trạng thái hư không không có diệu dụng.',
      d: 'Các tướng vọng nhiễm của tâm đều diệt hết và chứng Niết bàn.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Bồ Tát vẫn còn chút vô minh vi tế. Khi vô minh diệt hoàn toàn thì chứng Phật quả.',
      b: 'Sai. Chơn như là bất sanh bất diệt, không bao giờ bị tiêu diệt.',
      c: 'Sai. Tâm trở về bản thể thanh tịnh nhưng vẫn diệu dụng vô cùng.',
      d: 'Đúng. Khi nhân (vô minh) và duyên (cảnh giới) diệt, thì các tướng vọng tâm sanh diệt cũng chấm dứt, hành giả chứng đắc Niết bàn thanh tịnh.',
    },
  },
  {
    question: 'Sự khác biệt giữa "Ý thức huân tập" và "Ý huân tập" trong việc cầu đạo Bồ Đề là gì?',
    options: {
      a: 'Ý thức là do bên ngoài tác động; Ý là do tự thân phát khởi.',
      b: 'Ý thức dành cho phàm phu và Nhị thừa; Ý dành cho các vị Bồ Tát.',
      c: 'Ý thức tạo ra tạp nhiễm; Ý tạo ra thanh tịnh.',
      d: 'Ý thức huân tập vào cảnh giới; Ý huân tập vào vô minh.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Cả hai đều có sự tương tác từ trong ra ngoài.',
      b: 'Đúng. Phàm phu và Nhị thừa sợ khổ sanh tử nên dùng "Ý thức" (phân biệt sự thức) để phát tâm tu hành. Còn Bồ Tát đã hiểu rõ vạn pháp duy tâm, nên dùng cái "Ý" (nghiệp thức vi tế) dõng mãnh tu hành tiến lên Phật quả.',
      c: 'Sai. Khi hướng thiện, cả hai đều tạo ra sự thanh tịnh ở các cấp độ khác nhau.',
      d: 'Sai. Cách phân chia này không phản ánh đúng ý nghĩa trong Khởi Tín Luận.',
    },
  },
  {
    question: 'Ví dụ về "cây gươm" ở cuối bài học nhằm khẳng định điều gì về việc tu hành?',
    options: {
      a: 'Người tu hành cần phải cứng rắn và dứt khoát như một tướng sĩ.',
      b: 'Tu hành chỉ là thay đổi cái "Dụng" (cách dùng tâm) chứ không phải trừ bỏ cái "Thể".',
      c: 'Sức mạnh của trí tuệ có thể cắt đứt mọi phiền não như gươm bén.',
      d: 'Cần phải tiêu diệt tâm thức vì nó nguy hiểm như cây gươm.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ý nghĩa của ví dụ không tập trung vào sự cứng rắn.',
      b: 'Đúng. Cây gươm giết người hay cứu người thì bản chất thép của nó (Thể) không đổi, chỉ có cách dùng (Dụng) là khác. Tu hành cũng vậy, không phải tiêu diệt tâm thể, mà là đổi cách dùng từ vọng nhiễm đau khổ sang thanh tịnh an vui.',
      c: 'Sai. Mặc dù trí tuệ thường được ví như gươm, nhưng trong ngữ cảnh này nó minh họa cho Thể và Dụng.',
      d: 'Sai. Đạo Phật không chủ trương tiêu diệt tâm thể.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-8-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-8-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 8 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 10,
  createdAt: '2026-08-01',
  updatedAt: '2026-08-01',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-8-phan-giai-thich-tiep-theo/S%E1%BB%A9c_m%E1%BA%A1nh_c%E1%BB%A7a_hu%C3%A2n_t%E1%BA%ADp.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-nghia-bat-giac-tiep-theo', label: 'Nói về nghĩa "Bất giác" (tiếp theo)' },
        { id: 'bon-mon-huan-tap', label: 'k. Nói về bốn món huân tập' },
        { id: 'chanh-van-bon-mon-huan-tap', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-bon-mon-huan-tap', label: 'Lược giải', indent: 1 },
        { id: 'huan-tap-phap-nhiem-o', label: 'Do huân tập nên các pháp nhiễm ô sanh khởi không dứt' },
        { id: 'chanh-van-phap-nhiem-o', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-phap-nhiem-o', label: 'Lược giải', indent: 1 },
        { id: 'chanh-van-canh-gioi-vong-tam-vo-minh', label: 'Chánh văn (tiếp theo)', indent: 1 },
        { id: 'luoc-giai-canh-gioi-vong-tam-vo-minh', label: 'Lược giải', indent: 1 },
        { id: 'huan-tap-phap-thanh-tinh', label: 'Do huân tập nên các pháp thanh tịnh sanh khởi không dứt' },
        { id: 'chanh-van-phap-thanh-tinh', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-phap-thanh-tinh', label: 'Lược giải', indent: 1 },
        { id: 'chanh-van-vong-tam-huan-tap', label: 'Chánh văn (Vọng tâm huân tập)', indent: 1 },
        { id: 'luoc-giai-vong-tam-huan-tap', label: 'Lược giải', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-8-phan-giai-thich-tiep-theo/The_Art_of_Habituation.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/NlUD65Ms6z0',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1Zrqmmg7GcqBRWiPU30LYW',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần giải thích (tiếp theo)',
    passPercentage: 70,
    questions,
  },
}

export default lesson