import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-4 text-sm font-semibold uppercase tracking-wide opacity-70">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="mb-10 rounded-2xl border border-primary-200 bg-primary-50/70 p-6 shadow-sm dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-bold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ CHÍN · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="noi-ve-nghia-bat-giac-tiep-theo" class="mt-0 mb-0 text-3xl font-extrabold leading-tight text-primary-700 dark:text-primary-300">Nói về nghĩa "Bất giác" (tiếp theo)</h2>
    </div>

    <div class="mt-12 mb-8 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="bon-mon-huan-tap" class="mt-0 mb-0 text-2xl font-bold text-secondary-700 dark:text-secondary-300">k. Nói về bốn món huân tập (tiếp theo)</h3>
    </div>

    <h4 class="mt-8 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p id="chon-nhu-huan-tap-2-phan" class="mb-2 font-semibold">Nói về chơn như (pháp thanh tịnh) huân tập. Chơn như huân tập vô minh, có hai phần:</p>
    
    <div class="mb-6 pl-6 space-y-2">
      <p id="the-tuong-chon-nhu" class="mb-0"><strong>1.</strong> Thể tướng chơn như huân tập</p>
      <p id="dieu-dung-chon-nhu" class="mb-0"><strong>2.</strong> Diệu dụng chơn như huân tập.</p>
    </div>
    
    <p class="mb-4 font-semibold">Nói về thể tướng chơn như huân tập vô minh:</p>
    <p class="mb-4">Tất cả chúng sanh từ vô thỉ đến nay, đều sẵn có bản thể chơn như (tánh Phật) và có đủ các công dụng (diệu dụng chơn như) không thể nghĩ bàn, sanh ra các cảnh giới. Do thể tướng và công dụng của chơn như (tánh Phật) thường huân tập vô minh, nó thúc đẩy chúng sanh chán khổ sanh tử, cầu vui Niết bàn, và tự tin mình có sẵn chơn như (tánh Phật) nên tự phát tâm tu hành để thành Phật.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Trong kinh chép: "Tất cả chúng sanh đều có tánh Phật" (khả năng thành Phật). Tánh Phật này, cũng gọi là chơn như, Pháp tánh hay Chánh nhơn Phật tánh v.v... Nhờ sẵn có tánh Phật (giống Phật) nên chúng sanh tu hành mới được thành Phật.</p>
    <p class="mb-8">Tánh Phật này thanh tịnh vô lậu, và có diệu dụng không thể nghĩ bàn. Nó thường huân tập vô minh, làm cho chúng sanh tự tin mình có khả năng thành Phật, nên phát tâm tu hành, chán khổ sanh tử cầu vui Niết bàn. Nếu không nhờ tánh Phật này thúc giục, thì chúng sanh không biết chừng nào mới phát tâm tu hành, cầu quả giải thoát.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <div class="my-6 rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-0"><strong class="text-primary-800 dark:text-primary-300">Hỏi:</strong> Nếu tất cả chúng sanh đều sẵn có Chơn như (tánh Phật) và đồng huân tập vô minh thì tất cả chúng sanh phải đồng thời tự tin mình có chơn như (tánh Phật), đồng thời phát tâm tu các pháp lành và đồng thời chứng quả Niết bàn; tại sao có vô cùng sai khác: kẻ tin người không, kẻ tu trước người tu sau, có kẻ đã nhập Niết bàn còn người chưa nhập?</p>
    </div>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Do trước nói: "Tất cả chúng sanh đều sẵn có tánh Phật, và nhờ tánh Phật này huân tập vô minh, nên làm cho chúng sanh nhàm cảnh khổ sanh tử, ưa vui Niết bàn v.v..." nên mới có câu hỏi này. Trong câu hỏi này có hai điều nghi:</p>
    
    <div class="mb-8 pl-6 space-y-4">
      <p class="mb-0"><strong>Điều nghi thứ nhứt:</strong> Chúng sanh đã sẵn có tánh chơn như, bình đẳng như nhau, tại sao lại có vô số những sự sai khác, không bình đẳng, như kẻ đần độn người thông minh, kẻ chánh người tà, kẻ tin người không v.v...</p>
      <p class="mb-0"><strong>Điều nghi thứ hai:</strong> Chúng sanh đã đồng nhờ chơn như huân tập vào vô minh, nên phát tâm tu hành v.v... Vậy thì phải đồng thời phát tâm, đồng thời tự tin mình có tánh Phật và đồng thời tu, đồng thời chứng v.v... Tại sao có vô cùng những sự sai khác, không bình đẳng, như kẻ tu trước người tu sau, kẻ mau ngộ đạo người chậm chạp v.v…</p>
    </div>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <div class="my-6 rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-0"><strong class="text-primary-800 dark:text-primary-300">Đáp:</strong> Từ hồi nào đến giờ chơn như vẫn một; song vô minh có vô lượng vô biên, tánh chất khác nhau, dày mỏng không đồng.</p>
    </div>
    
    <p class="mb-4">Do vô minh này mà sanh ra các phiền não sai khác (Sở tri chướng) nhiều hơn số cát sông Hằng. Cũng do vô minh này mà sanh ra các phiền não sai khác, như ngã kiến, ái nhiễm v.v... (Phiền não chướng).</p>
    <p class="mb-6">Tóm lại: Tất cả phiền não (phiền não chướng, sở tri chướng) đều do vô minh sanh khởi, hoặc trước hoặc sau vô cùng sai khác. <span class="opacity-70 italic">(Đoạn này đã nói "vô minh sai khác không đồng", tiếp theo đây sẽ nói "ngoại duyên không phải một").</span></p>
    
    <p class="mb-4">Lại nữa, trong Phật pháp nói: "Tất cả các pháp đều do nhơn duyên sanh; nhơn duyên đầy đủ mới được thành tựu".</p>
    <p class="mb-4">Thí như chất lửa trong cây là "Chánh nhơn" của lửa. Song, nếu không có "trợ duyên" là người biết lấy lửa, và các phương tiện như bùi nhùi (bổi), công người cọ sát v.v... thì lửa kia không thể tự phát sanh ra được.</p>
    <p class="mb-4">Cũng vậy, chúng sanh tuy sẵn có tánh Phật (chơn như) là cái "nhơn chánh" để thành Phật; song nếu không có "ngoại duyên" là gặp các đức Phật, Bồ Tát và Thiện tri thức v.v... dẫn dắt chỉ dạy cho phương pháp tu hành, thì hành giả cũng không thể tự mình đoạn trừ phiền não và tu chứng Niết bàn được.</p>
    <p class="mb-4">Trái lại, nếu chỉ có "ngoại duyên" mà không có chơn như là cái "nhơn chánh" để thành Phật huân tập bên trong, thì hành giả cũng không thể tự mình chán khổ sanh tử, cầu vui rốt ráo Niết bàn được.</p>
    <p class="mb-8 font-semibold">Bởi thế nên, phải có nội nhơn và ngoại duyên đều đầy đủ; nghĩa là bên trong nhờ tánh Phật (chơn như) làm "chánh nhơn" huân tập; bên ngoài nhờ đức từ bi và đại nguyện của Phật, Bồ Tát giúp hộ làm "trợ duyên", thì hành giả mới chán khổ sanh tử, tin có cõi Niết bàn và phát tâm tu tập các pháp lành. Nhờ tu tập các pháp lành được thuần thục, nên hành giả mới gặp chư Phật, Bồ Tát thị hiện, chỉ dạy những điều lợi lạc. Lúc bấy giờ hành giả mới tinh tấn tu hành, để đến đạo quả Niết bàn.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Tất cả chúng sanh đều có tánh Phật (chơn như) và đồng huân tập vô minh v.v... thì phải đồng phát tâm, đồng tu và đồng chứng như nhau. Song, có sự vô cùng sai khác, không đồng nhau như kẻ phát tâm tu hành người hủy báng, kẻ đã thành Phật người còn trầm luân, là vì hai nguyên nhơn sau này:</p>
    
    <div class="mb-6 pl-6 space-y-4">
      <p class="mb-0"><strong>- Vô minh không đồng:</strong> Mỗi chúng sanh có rất nhiều lớp vô minh: có thứ vô minh thuộc về căn bản, có thứ vô minh thuộc về chi mạt; có thứ sâu dày, có thứ mỏng cạn, có thứ thô phù dễ trừ, có thứ tế nhị khó đoạn. Do các thứ vô minh này sanh ra hằng hà sa số phiền não. Nhưng trong số phiền não này, tóm lại có hai chướng: phiền não chướng và sở tri chướng (cũng gọi là trần sa hoặc). Vì đoạn trừ vô minh có khó dễ, mau chậm khác nhau, nên chúng sanh phát tâm tu hành và chứng quả không đồng thời.</p>
      <p class="mb-0"><strong>- Hoàn cảnh không đồng:</strong> Mỗi chúng sanh đều có mỗi hoàn cảnh khác nhau, hoàn cảnh tức là các duyên chung quanh. Chứng được đạo quả vô thượng Bồ Đề, phải có đủ cả nhơn và duyên. Nhơn là chơn như hay Phật tánh, huân tập bên trong; Duyên là những hoàn cảnh giúp đỡ bên ngoài, như Phật, Bồ Tát và Thiện hữu tri thức dạy bảo dẫn dắt v.v... Nếu chỉ có Nhơn mà thiếu Duyên, hoặc có Duyên mà thiếu Nhơn, thì cũng không thành.</p>
    </div>

    <p class="mb-6">Thí như trong cây có sẵn chất lửa là "nhơn chánh"; song phải nhờ các "trợ duyên" là hoàn cảnh bên ngoài, như người biết lấy lửa và bổi v.v... thì lửa ấy mới phát sanh được. Nếu thiếu một (Nhơn hoặc Duyên) thì lửa không thể xuất hiện được. Bởi hoàn cảnh của mỗi chúng sanh không đồng nhau, nên sự phát tâm tu hành và chứng quả không thống nhất. Đây là lý do thứ hai.</p>

    <p class="mb-2 font-semibold">Phật tánh có 3:</p>
    <div class="mb-8 pl-6 space-y-2">
      <p class="mb-0"><strong>1. Chánh nhơn Phật tánh:</strong> Chơn như là cái nhơn chánh để thành Phật; dụ như chất lửa sẵn có trong cây.</p>
      <p class="mb-0"><strong>2. Duyên nhơn Phật tánh:</strong> Phật, Bồ Tát, Thiện hữu tri thức và kinh sách v.v... là trợ duyên để thành Phật; dụ như người biết lấy lửa và bổi v.v...</p>
      <p class="mb-0"><strong>3. Liễu nhơn Phật tánh:</strong> Chánh nhơn và trợ duyên đều đầy đủ, làm cho hành giả phát hiện được (liễu ngộ) tánh Phật của mình; dụ như lửa trong cây đã phát cháy.</p>
    </div>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p id="dieu-dung-2-duyen" class="mb-2 font-semibold">Diệu dụng chơn như huân tập có 2 duyên:</p>
    <div class="mb-6 pl-6 space-y-2">
      <p id="duyen-sai-biet" class="mb-0"><strong>a. Duyên sai biệt</strong>, có 2 thứ: Duyên gần, duyên xa</p>
      <p id="duyen-binh-dang" class="mb-0"><strong>b. Duyên bình đẳng</strong></p>
    </div>

    <p class="mb-4"><strong>1. Duyên sai biệt:</strong> Từ khi mới phát tâm cầu đạo cho đến thành Phật, trong khoảng thời gian ấy, hành giả hoàn toàn nhờ chư Phật và Bồ Tát gia hộ cho trên đường tu hành. Vì tâm đại bi, nên Phật và Bồ Tát hoặc hiện làm người thân thuộc, như cha mẹ (để dạy bảo hành giả), hoặc hiện làm Thiện hữu tri thức (để nhắc nhở), hoặc hiện làm người tôi tớ hầu hạ (để khuyên lơn), hoặc hiện làm kẻ oan gia (như Đề bà đạt đa v.v... để xúc khích), hoặc dùng Tứ nhiếp pháp (để cảm hoá), cho đến làm không biết bao nhiêu công hạnh, để huân tập cho hành giả; làm cho hành giả hoặc nhớ nghĩ công đức của các Ngài, hoặc thấy hình tướng, hoặc nghe thuyết pháp, mà được lợi ích và tăng trưởng căn lành.</p>
    
    <p class="mb-2">Các duyên sai khác này, chia làm hai loại:</p>
    <div class="mb-4 pl-6 space-y-2">
      <p class="mb-0">a) Duyên gần, làm cho hành giả mau đặng Bồ Đề (hiện tiền chứng đạo).</p>
      <p class="mb-0">b) Duyên xa, làm cho hành giả về sau mới đặng tế độ (nhiều kiếp về sau mới đặng đạo).</p>
    </div>
    <p class="mb-8">Hai món duyên gần và xa này, lại chia làm hai loại nữa: Duyên làm cho hành giả được thọ đạo pháp và Duyên làm cho hành giả tăng trưởng đạo hạnh.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn này nói về diệu dụng chơn như của chư Phật và Bồ Tát huân tập cho chúng sanh. Chư Phật và Bồ Tát đã chứng được bản thể chơn như, nên tự nhiên có diệu dụng không thể nghĩ bàn.</p>
    <p class="mb-4">Do lòng Đại bi và Đại nguyện của chư Phật và Bồ Tát, tuỳ theo trình độ của chúng sanh phát tâm cầu đạo, nên từ diệu dụng của chơn như, ứng hiện ra các thân hình v.v... làm trợ duyên bên ngoài, để giúp cho chúng sanh được thành đạo quả. Nhưng các duyên này, có chia làm hai loại:</p>
    <div class="mb-6 pl-6 space-y-2">
      <p class="mb-0"><strong>1. Duyên sai biệt:</strong> Do trình độ của chúng sanh không đồng, sự phát tâm của mỗi người mỗi khác, nên chư Phật và Bồ Tát thị hiện phải có sai khác (Duyên sai biệt).</p>
      <p class="mb-0"><strong>2. Duyên bình đẳng:</strong> Do đồng thể đại bi, nên chư Phật và Bồ Tát phát nguyện độ sanh, bình đẳng làm lợi ích.</p>
    </div>

    <p class="mb-2">Đoạn này nói về "Duyên sai biệt". Chư Phật và Bồ Tát thị hiện rất nhiều phương tiện để độ sanh; nhưng không ngoài 5 việc như sau:</p>
    <div class="mb-6 pl-6 space-y-2">
      <p class="mb-0">a) Vì muốn dùng từ ái để dẫn dắt hành giả, nên hiện làm cha mẹ.</p>
      <p class="mb-0">b) Vì muốn dùng việc hầu hạ để gần gũi hành giả đặng khuyên lơn, nên hiện làm kẻ tôi tớ.</p>
      <p class="mb-0">c) Vì muốn dùng việc cộng sự để giúp cho hành giả, nên hiện làm Thiện hữu tri thức.</p>
      <p class="mb-0">d) Vì muốn xúc khích hành giả trên đường tu hành, nên hiện làm kẻ oan gia (như Đề bà đạt đa).</p>
      <p class="mb-0">đ) Vì muốn cảm hoá người, nên dùng Tứ nhiếp pháp.</p>
    </div>
    
    <p class="mb-4">Tất cả những phương tiện này, đều do lòng từ bi của Phật và Bồ Tát mà khởi hiện, làm trợ duyên để huân tập cho hành giả tăng trưởng căn lành và được nhiều lợi ích.</p>
    
    <p class="mb-2">Các duyên sai biệt này chia làm 2 loại:</p>
    <div class="mb-6 pl-6 space-y-2">
      <p class="mb-0"><strong>Duyên gần;</strong> nghĩa là hành giả sớm được tế độ. Như khi Phật còn tại thế, những chúng sanh được hoá độ.</p>
      <p class="mb-0"><strong>Duyên xa;</strong> nghĩa là hành giả chậm được tế độ. Như khi Phật Đại Thông Trí Thắng ra đời, đức Thích Ca làm đệ tử Ngài, cho đến thời kỳ này mới được thành Phật.</p>
    </div>
    <p class="mb-8">Tất cả những phương tiện này, đều giúp cho hành giả được lãnh thọ đạo pháp và tăng trưởng đạo hạnh.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p id="duyen-binh-dang" class="mb-8"><strong>2. Duyên bình đẳng:</strong> Tất cả chư Phật và Bồ Tát đều phát nguyện độ thoát tất cả chúng sanh. Do sức bi trí đồng thể tự nhiên huân tập, nên các Ngài thường hằng tuỳ thuận chúng sanh nào muốn thấy Phật nghe Pháp, thì đều bình đẳng hiện ra để hoá độ, không bỏ một chúng sanh nào. Bởi thế nên chúng sanh khi ở trong thiền định, đều được bình đẳng thấy Phật.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Chư Phật và Bồ Tát đã chứng đến chỗ đồng thể (Phật và chúng sanh đồng một bản thể) nên các Ngài tự thấy chúng sanh còn đau khổ thì mình còn đau khổ; chúng sanh còn trầm luân thì mình chưa giải thoát.</p>
    <p class="mb-4">Bởi thế nên từ chỗ đồng thể ấy, các Ngài khởi Đại bi, Đại trí và phát Đại nguyện. Như Ngài Địa Tạng Bồ Tát thề rằng: "Chúng sanh độ tận, phương chứng Bồ Đề. Địa ngục vị không, thệ bất thành Phật" (nghĩa là độ hết chúng sanh mới chứng Bồ Đề; nếu địa ngục còn tội nhơn, thì tôi thề không thành Phật).</p>
    <p class="mb-4">Đức A Nan thề rằng: "Ngũ trược ác thế thệ tiên nhập. Như nhứt chúng sanh vị thành Phật, chung bất ư thử thủ Nê hoàn". Nghĩa là: Trong đời tội ác 5 trược, tôi thề xung phong vào trước để độ chúng sanh. Nếu còn một chúng sanh nào chưa thành Phật, thì tôi thề không chịu chứng quả Niết bàn.</p>
    <p class="mb-4">Do sự thúc giục của đồng thể bi trí này, nên các Ngài thường hằng tuỳ thuận tất cả chúng sanh, bình đẳng hoá độ. Như Ngài Phổ Hiền Bồ Tát thường hiện thân cho người thấy; đức Quán Thế Âm Bồ Tát thì ứng hiện 32 thân v.v...</p>
    <p class="mb-6">Nếu chúng sanh nào tâm thanh tịnh thì được thấy chư Phật và Bồ Tát (chúng sanh tâm nhược tịnh, Bồ Đề ảnh hiện trung). Sự ứng hiện ấy rất tự nhiên và bình đẳng, cũng như ao nước nào trong thì tự nhiên có trăng bình đẳng hiện vào.</p>
    
    <p class="mb-8 opacity-70 italic">Trên đã nói diệu dụng chơn như của chư Phật, Bồ Tát khi đã được hiển lộ rồi; còn chơn như của chúng sanh chưa hiển lộ thì diệu dụng thế nào? Hãy xem đoạn dưới đây:</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p id="the-dung-2-thu" class="mb-2 font-semibold">Thể và Dụng chơn như huân tập, lại chia làm 2 thứ:</p>
    
    <div class="mb-6 pl-6 space-y-4">
      <p id="chua-chung-nhap" class="mb-0"><strong>1. Chưa chứng nhập chơn như:</strong> Chúng phàm phu, hàng Nhị thừa và các vị Bồ Tát mới phát tâm (Tam hiền), do ý và ý thức huân tập mà phát tâm, và chỉ nương nơi sức tin của mình (tin tánh Phật ở nơi mình) mà tu hành; vì chưa chứng nhập (tương ưng) bản thể chơn như, nên chưa được vô phân biệt tâm (vô phân biệt trí, tức là căn bản trí); vì chưa đặng diệu dụng của chơn như, nên sự tu hành chưa được diệu dụng tự tại (sai biệt trí hay hậu đắc trí).</p>
      <div>
        <p id="da-chung-nhap" class="mb-2"><strong>2. Đã chứng nhập chơn như, được 2 trí:</strong> Các vị Bồ Tát đã chứng Pháp thân (Thập địa Bồ Tát), chỉ nương nơi Pháp tánh (Pháp lực) tu hành (thuận tánh khởi tu), tự nhiên huân tập vào chơn như, nên diệt được vô minh. Các vị Bồ Tát này đã được vô phân biệt tâm (<span id="can-ban-tri">căn bản trí</span>), vì đã chứng nhập được bản thể chơn như; và đã được Sai biệt trí (<span id="hau-dac-tri">Hậu đắc trí</span>), vì đã được diệu dụng của chơn như (dữ Phật trí dụng tương ưng).</p>
      </div>
    </div>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Thể chơn như không hai, song vì còn ở trong vỏ chúng sanh hay đã thoát ra ngoài mà diệu dụng có rộng hẹp chẳng đồng; vì thế nên phân làm hai loại:</p>
    
    <p class="mb-4"><strong>Người chưa chứng nhập được chơn như:</strong> Chơn như còn bị các phiền não nhiễm ô triền phược (tại triền), chưa được hiển lộ; như vàng còn ở trong khoáng. Chúng phàm phu, hàng Nhị thừa và các vị Bồ Tát còn ở địa vị Tam hiền, đều từ vọng thức phân biệt mà phát tâm; do tự tin nơi mình có tánh Phật mà tu hành. Vì chưa chứng nhập "thể" và "dụng" của chơn như, nghĩa là chơn như còn bị triền phược, chưa được hiển lộ, nên các vị này chưa được căn bản trí (vô phân biệt trí) và hậu đắc trí (sai biệt trí).</p>
    
    <p class="mb-6"><strong>Người đã chứng nhập chơn như:</strong> Chơn như đã được hiển lộ ra khỏi vỏ phiền não nhiễm ô triền phược; như vàng đã ra khỏi khoáng. Các vị Bồ Tát từ Sơ địa cho đến Thất địa mới nhập được bản thể chơn như; từ Bát địa đến Phật mới được Diệu dụng của chơn như. Các vị này, tuỳ theo tánh chơn như mà tu hành, nên diệt trừ được vô minh. Vì đã chứng nhập Thể và Dụng của chơn như, nên các vị Bồ Tát này được hai món trí: Căn bản trí (Vô phân biệt trí) và Hậu đắc trí (Sai biệt trí).</p>

    <p class="mt-8 opacity-70 italic">Đã nói nhiễm và tịnh huân tập nhau rồi, dưới đây sẽ nói nhiễm và tịnh, cái nào có cùng tận, cái nào không cùng tận.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong giáo lý về Chơn như huân tập, 'Thể tướng chơn như huân tập' còn được gọi là gì?",
    options: {
      a: "Chánh nhơn huân tập",
      b: "Trợ duyên huân tập",
      c: "Liễu nhơn huân tập",
      d: "Ngoại duyên huân tập",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Thể tướng chơn như huân tập (chánh nhơn huân tập) là một trong hai phần của Chơn như huân tập vô minh.",
      b: "Sai. Trợ duyên huân tập là 'Diệu dụng chơn như huân tập'.",
      c: "Sai. Văn bản không gọi như vậy.",
      d: "Sai. Ngoại duyên là trợ duyên bên ngoài, không phải Thể tướng chơn như huân tập (nội nhơn).",
    },
  },
  {
    question: "Tác dụng chính của việc Thể tướng và công dụng chơn như thường huân tập vô minh là gì?",
    options: {
      a: "Biến đổi vô minh thành các pháp lành một cách tự động",
      b: "Tiêu diệt hoàn toàn vô minh mà không cần ngoại duyên",
      c: "Giúp chúng sanh ngay lập tức đạt được Vô phân biệt trí",
      d: "Làm cho chúng sanh chán khổ sanh tử và cầu vui Niết bàn",
    },
    answer: "d",
    explanation: {
      a: "Sai. Việc này không diễn ra tự động mà cần sự phát tâm tu tập.",
      b: "Sai. Để thành tựu cần có cả nội nhơn và ngoại duyên.",
      c: "Sai. Vô phân biệt trí chỉ đạt được khi đã chứng nhập chơn như.",
      d: "Đúng. Thể tướng và diệu dụng chơn như thúc đẩy chúng sanh chán khổ sanh tử, cầu vui Niết bàn, tự tin mình có sẵn tánh Phật nên phát tâm tu hành.",
    },
  },
  {
    question: "Tại sao tất cả chúng sanh đều có tánh Phật nhưng lại phát tâm tu hành và chứng quả không đồng thời?",
    options: {
      a: "Do vô minh dày mỏng khác nhau và hoàn cảnh ngoại duyên không đồng",
      b: "Do bản thể chơn như của mỗi người vốn đã có sự cao thấp",
      c: "Vì chỉ có một số ít chúng sanh thực sự sở hữu Chánh nhơn Phật tánh",
      d: "Vì diệu dụng của chư Phật chỉ hướng đến những người có căn lành",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Sự sai khác này là do hai nguyên nhân: Vô minh không đồng (dày mỏng, thô tế khác nhau) và Hoàn cảnh không đồng (duyên chung quanh khác nhau).",
      b: "Sai. Bản thể chơn như của mọi chúng sanh là bình đẳng.",
      c: "Sai. Tất cả chúng sanh đều có tánh Phật.",
      d: "Sai. Chư Phật và Bồ Tát phát nguyện độ thoát tất cả chúng sanh bình đẳng.",
    },
  },
  {
    question: "Trong ví dụ về việc lấy lửa từ cây, chất lửa sẵn có trong cây tượng trưng cho điều gì?",
    options: {
      a: "Vô minh phiền não",
      b: "Liễu nhơn Phật tánh",
      c: "Chánh nhơn Phật tánh",
      d: "Duyên nhơn Phật tánh",
    },
    answer: "c",
    explanation: {
      a: "Sai. Vô minh không phải là nhân sanh ra Niết Bàn.",
      b: "Sai. Liễu nhơn là kết quả khi chánh nhơn và trợ duyên đầy đủ, như lửa đã cháy.",
      c: "Đúng. Chất lửa sẵn có trong cây tượng trưng cho 'Chánh nhơn Phật tánh' (Chơn như).",
      d: "Sai. Duyên nhơn là người biết lấy lửa và bổi (trợ duyên).",
    },
  },
  {
    question: "Loại duyên nào mà chư Phật và Bồ Tát có thể hiện thân làm kẻ oan gia (như Đề bà đạt đa) để thúc đẩy người tu hành?",
    options: {
      a: "Duyên thường hằng",
      b: "Duyên sai biệt",
      c: "Duyên bình đẳng",
      d: "Duyên nội tại",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây không phải thuật ngữ được dùng trong bài.",
      b: "Đúng. Việc hiện thân làm kẻ oan gia để xúc khích hành giả là một phương tiện thuộc về 'Duyên sai biệt' (tuỳ theo trình độ chúng sanh mà ứng hiện khác nhau).",
      c: "Sai. Duyên bình đẳng là sự ứng hiện tự nhiên không phân biệt cho những ai muốn thấy Phật nghe Pháp.",
      d: "Sai. Đây là trợ duyên bên ngoài.",
    },
  },
  {
    question: "Duyên gần (trong Duyên sai biệt) có đặc điểm gì nổi bật?",
    options: {
      a: "Là duyên khiến hành giả không cần phải thọ nhận đạo pháp",
      b: "Chỉ dành riêng cho hàng Nhị thừa tu tập",
      c: "Làm cho hành giả mau chóng đặng Bồ Đề",
      d: "Chỉ xuất hiện sau nhiều kiếp tu hành gian khổ",
    },
    answer: "c",
    explanation: {
      a: "Sai. Cả duyên gần và xa đều giúp lãnh thọ đạo pháp.",
      b: "Sai. Duyên sai biệt hướng đến mọi đối tượng tuỳ căn cơ.",
      c: "Đúng. Duyên gần làm cho hành giả mau đặng Bồ Đề (hiện tiền chứng đạo, sớm được tế độ).",
      d: "Sai. Đó là đặc điểm của 'Duyên xa'.",
    },
  },
  {
    question: "Tại sao hàng Nhị thừa và Bồ Tát ở địa vị Tam hiền được coi là chưa chứng nhập (tương ưng) chơn như?",
    options: {
      a: "Vì họ hoàn toàn không tin mình có sẵn tánh Phật",
      b: "Vì họ chưa từng gặp được Phật và Bồ Tát gia hộ",
      c: "Vì họ vẫn còn nương nơi ý và ý thức huân tập để tu hành",
      d: "Vì họ đã tiêu diệt được hoàn toàn phiền não chướng",
    },
    answer: "c",
    explanation: {
      a: "Sai. Họ tu hành là do nương vào sức tin nơi tánh Phật của mình.",
      b: "Sai. Họ vẫn nhận được sự huân tập trợ duyên.",
      c: "Đúng. Họ phát tâm từ vọng thức phân biệt (ý và ý thức), chơn như vẫn còn bị phiền não triền phược chưa hiển lộ, nên chưa chứng nhập.",
      d: "Sai. Nếu đã diệt hết phiền não thì đã chứng nhập.",
    },
  },
  {
    question: "Các vị Bồ Tát từ Sơ địa đến Thất địa được mô tả là đã đạt được loại trí tuệ nào?",
    options: {
      a: "Trí tuệ nương vào sức tin đơn thuần",
      b: "Căn bản trí (Vô phân biệt trí)",
      c: "Ý thức phân biệt thanh tịnh",
      d: "Hậu đắc trí (Sai biệt trí) hoàn toàn tự tại",
    },
    answer: "b",
    explanation: {
      a: "Sai. Trí tuệ nương vào sức tin là của hàng Tam hiền.",
      b: "Đúng. Các vị Bồ Tát từ Sơ địa đến Thất địa mới nhập được bản thể chơn như, nên đã được Căn bản trí (Vô phân biệt trí).",
      c: "Sai. Ý thức phân biệt không phải là mục tiêu tối hậu.",
      d: "Sai. Hậu đắc trí thuộc về Diệu dụng chơn như, từ Bát địa trở lên mới tự tại.",
    },
  },
  {
    question: "Câu thệ nguyện của Ngài Địa Tạng và Ngài A Nan trong lược giải minh họa cho khái niệm nào?",
    options: {
      a: "Duyên sai biệt",
      b: "Vô minh huân tập",
      c: "Duyên bình đẳng",
      d: "Thể tướng chơn như",
    },
    answer: "c",
    explanation: {
      a: "Sai. Duyên sai biệt là ứng hiện tuỳ căn cơ.",
      b: "Sai. Đây là diệu dụng của chơn như, không phải vô minh.",
      c: "Đúng. Lời thệ nguyện cứu độ tất cả chúng sanh xuất phát từ 'đồng thể đại bi', minh họa cho sức mạnh của 'Duyên bình đẳng'.",
      d: "Sai. Nó thuộc về Diệu dụng chơn như, không phải Thể tướng.",
    },
  },
  {
    question: "Mối quan hệ giữa 'Nội nhơn' và 'Ngoại duyên' trong quá trình thành Phật được ví như thế nào?",
    options: {
      a: "Ngoại duyên chỉ cần thiết cho hàng phàm phu, không cần cho Bồ Tát",
      b: "Cả hai phải đầy đủ thì sự tu hành mới thành tựu",
      c: "Ngoại duyên quan trọng hơn vì chúng sanh không thể tự tu",
      d: "Nội nhơn là đủ vì chúng sanh vốn đã có tánh Phật",
    },
    answer: "b",
    explanation: {
      a: "Sai. Bồ Tát vẫn cần sự gia hộ của chư Phật.",
      b: "Đúng. Trong Phật pháp, nhơn duyên phải đầy đủ mới thành tựu. Phải có nội nhơn (chơn như) huân tập và ngoại duyên (Phật, Bồ Tát) gia hộ thì mới đến đạo quả Niết bàn.",
      c: "Sai. Nếu không có nội nhơn thì ngoại duyên không có tác dụng.",
      d: "Sai. Có nội nhơn nhưng thiếu ngoại duyên thì như có củi mà không có mồi lửa.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-9-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-9-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 9 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 11,
  createdAt: '2026-08-01',
  updatedAt: '2026-08-01',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-9-phan-giai-thich-tiep-theo/S%C6%A1_%C4%91%E1%BB%93_ti%E1%BA%BFn_tr%C3%ACnh_gi%C3%A1c_ng%E1%BB%99.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-nghia-bat-giac-tiep-theo', label: 'Nói về nghĩa "Bất giác" (tiếp theo)' },
        { id: 'bon-mon-huan-tap', label: 'k. Nói về bốn món huân tập (tiếp theo)' },
        { id: 'chon-nhu-huan-tap-2-phan', label: 'Nói về chơn như huân tập, có 2 phần:' },
        { id: 'the-tuong-chon-nhu', label: '1. Thể tướng chơn như huân tập (chánh nhơn huân tập)', indent: 1 },
        { id: 'dieu-dung-chon-nhu', label: '2. Diệu dụng chơn như huân tập (trợ duyên huân tập)', indent: 1 },
        { id: 'dieu-dung-2-duyen', label: 'Diệu dụng chơn như huân tập có 2 duyên:' },
        { id: 'duyen-sai-biet', label: 'a. Duyên sai biệt, có 2 thứ: Duyên gần, duyên xa', indent: 1 },
        { id: 'duyen-binh-dang', label: 'b. Duyên bình đẳng', indent: 1 },
        { id: 'the-dung-2-thu', label: 'Thể và Dụng chơn như huân tập, lại chia làm 2 thứ:' },
        { id: 'chua-chung-nhap', label: '1. Chưa chứng nhập chơn như', indent: 1 },
        { id: 'da-chung-nhap', label: '2. Đã chứng nhập chơn như, được 2 trí:', indent: 1 },
        { id: 'can-ban-tri', label: 'Căn bản trí (vô phân biệt trí)', indent: 2 },
        { id: 'hau-dac-tri', label: 'Hậu đắc trí (sai biệt trí)', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-9-phan-giai-thich-tiep-theo/Awakening_Suchness.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/5kgEcZD7hKg',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4WVs58y8y84b2nq8GS5zzL',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài Thứ 9',
    passPercentage: 70,
    questions,
  },
}

export default lesson