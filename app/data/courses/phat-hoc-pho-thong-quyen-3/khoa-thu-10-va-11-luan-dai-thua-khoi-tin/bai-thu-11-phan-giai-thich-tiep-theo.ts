import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-4 text-sm font-semibold uppercase tracking-wide opacity-70">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="mb-10 rounded-2xl border border-primary-200 bg-primary-50/70 p-6 shadow-sm dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-bold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI MỘT · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="noi-ve-nghia-bat-giac-tiep-theo" class="mt-0 mb-0 text-3xl font-extrabold leading-tight text-primary-700 dark:text-primary-300">Nói về nghĩa "Bất giác" (tiếp theo và hết)</h2>
    </div>

    <p id="ba-dai-nghia-cua-tam" class="mb-8 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Ba đại nghĩa của Tâm (tiếp theo và hết)</p>

    <h4 class="mt-8 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p id="dung-rong-lon-cua-tam" class="mb-4 font-semibold">Nói về Dụng rộng lớn của tâm chơn như:</p>
    <p class="mb-4">Các đức Phật từ khi tu nhơn (Bồ Tát đạo) đã phát tâm đại từ bi, tu các pháp Ba la mật, giáo hóa chúng sanh. Các Ngài lập lời thệ nguyện rộng lớn, độ thoát tất cả chúng sanh cho đến cùng tận đời vị lai, không hạn định bao nhiêu số kiếp.</p>
    <p class="mb-4">Các Ngài xem tất cả chúng sanh như thân mình, và cũng không thấy (chấp) có tướng chúng sanh để độ. Tại sao vậy? Vì các Ngài đã chơn thật hiểu biết: tất cả chúng sanh và mình không có sai khác, đồng một tâm chơn như bình đẳng.</p>
    <p class="mb-4">Các Ngài đã dùng Đại trí huệ diệt hết vô minh, nên chơn như (Pháp thân) được hiện ra. Do chơn như đã hiện, nên tự nhiên có các món diệu dụng không thể nghĩ bàn. Bởi diệu dụng từ thể chơn như hiện ra, nên Dụng đồng với Thể chơn như, đều biến khắp tất cả, và cũng đều không có hình tướng gì để thấy được.</p>
    <p class="mb-8">Tại sao vậy? Vì các đức Phật chỉ có Pháp thân thanh tịnh, tức là Trí thân (tâm), không có hình sắc (cảnh giới) và cũng không có tạo tác. Song, tuỳ theo trình độ của chúng sanh, hoặc thấy hoặc nghe, đều được lợi ích, nên gọi là "Dụng lớn".</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn này nói về Dụng lớn của tâm chơn như.</p>
    <p class="mb-4">Các vị Bồ Tát, dùng đại trí huệ, diệt trừ hết vô minh, chứng được Thể chơn như (Pháp thân). Do các vị Bồ Tát đã chứng được chỗ đồng thể, nên tự xem mình cùng tất cả chúng sanh đồng một bản thể, không có riêng khác; nếu chúng sanh đau khổ, tức là mình đau khổ, chúng sanh còn trầm luân thì mình chưa được giải thoát.</p>
    <p class="mb-4">Bởi thế nên Bồ Tát, tức nơi thể chơn như bình đẳng, khởi ra "Đại dụng": Phát tâm đại từ bi, lập lời thệ nguyện rộng lớn, tu các pháp Ba la mật (lục độ), hoá độ chúng sanh, cùng tận đời vị lai, không hạn định bao nhiêu số kiếp, và cũng không chấp có tướng chúng sanh để độ.</p>
    <p class="mb-8">"Thể" và "Tướng" của chơn như đều rộng lớn như thế, nên "Diệu dụng" của chơn như cũng không thể nghĩ bàn: Không có hình tướng, không có công dụng và cũng không có tâm tạo tác; song tuỳ theo căn cơ của mỗi chúng sanh, cảm muốn như thế nào, thì ứng hiện ra như thế ấy (như đức Quan Âm Bồ Tát ứng hiện 32 thân v.v...) làm cho chúng sanh đều được lợi ích, nên được gọi là "Đại dụng". Như hư không, tuỳ các đồ vật mà hiện đủ hình. Và cũng như trăng rằm, không cố ý (vô tâm) không dụng công (vô công dụng) mà tự nhiên chiếu khắp tất cả; tuỳ theo các ao hồ, nước trong hay đục mà trăng tỏ hay mờ.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p class="mb-2 font-semibold">Diệu dụng của chơn như tuỳ theo trình độ của chúng sanh mà thấy có hai phần:</p>
    <ol class="mb-6 list-decimal pl-6 space-y-2">
      <li>Ứng thân</li>
      <li>Báo thân</li>
    </ol>
    
    <p id="ung-than" class="mb-4"><strong>- Chúng phàm phu và Nhị thừa</strong>, do Phân biệt sự thức (ý thức) nên thấy ứng thân Phật. Họ chỉ thấy phần nào về sắc thân Phật, chớ không thể biết cùng tận, và chỉ chấp thân ấy từ ở ngoài đến, chớ không biết do tâm (chuyển thức) hiện ra.</p>
    <p id="bao-than" class="mb-4"><strong>- Các vị Bồ Tát từ khi mới phát tâm, cho đến khi rốt ráo địa vị Bồ Tát</strong>, đều do nghiệp thức (A đà na) mà thấy báo thân Phật. Thân này có vô lượng sắc tướng, mỗi sắc tướng có vô lượng sự tốt đẹp.</p>
    <p id="the-gioi-trang-nghiem" class="mb-4">Về quốc độ của thân này, cũng đủ vô lượng vật quý báu trang nghiêm; tuỳ sự thị hiện nơi nào đều không cùng tận, không có biên giới và cũng không hư hoại.</p>
    <p class="mb-4">Tóm lại, thân thể (chánh báo) và quốc độ (y báo), sở dĩ đều được thành tựu các công đức như thế, là do sự huân tập của các hạnh vô lậu, như các pháp Ba la mật v.v...và sự huân tập bất tư nghị (chơn như huân tập bên trong). Vì được đầy đủ vô lượng tướng diệu lạc như thế nên gọi là Báo thân.</p>
    <p class="mb-8">Chúng phàm phu thì chỉ thấy sắc thân thô sơ của Phật. Còn lục đạo chúng sanh do tuỳ theo cái nghiệp của mỗi loài khác nhau, nên thấy thân Phật không đồng. Do tuỳ theo mỗi loài ứng hiện, không phải chính thân tướng tốt đẹp (báo thân), nên gọi là "ứng thân".</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-2">Tuỳ theo trình độ của chúng sanh, mà diệu dụng chơn như thành ra hai phần:</p>
    
    <p class="mb-2"><strong>1. Ứng thân:</strong> Thân này chỉ tuỳ theo muôn ngàn hoàn cảnh sai biệt của lục đạo chúng sanh, mà hiện ra muôn ngàn hình thức không đồng: Loài nào thấy Phật loài nấy. Như hư không tuỳ theo các đồ vật vuông tròn v.v...mà ứng hiện ra đủ các hình tướng.</p>
    <p class="mb-4">Chúng phàm phu và hàng Nhị thừa, vì còn ý thức phân biệt, và chấp theo trần cảnh bên ngoài, không ngộ lý Duy thức, nên thấy Phật ngoài tâm mình. Bởi thế nên chỉ thấy ứng thân Phật, như thân Phật có 32 tướng tốt v.v...</p>
    
    <p class="mb-2"><strong>2. Báo thân:</strong> Thân này là kết quả hai món huân tập:</p>
    <ul class="mb-4 list-none pl-6 space-y-2">
      <li>a) Chơn như huân tập, cũng gọi là Bất khả tư nghị huân.</li>
      <li>b) Các pháp vô lậu thanh tịnh huân tập, tức là tu các pháp như Lục độ v.v...Vì thế nên Chánh báo (thân thể) được vô số tướng tốt đẹp, mà Y báo (hoàn cảnh) cũng được vô cùng vật quý báu trang nghiêm.</li>
    </ul>
    
    <p class="mb-8">Các vị Bồ Tát từ khi mới phát tâm cho đến lúc rốt ráo địa vị Bồ Tát, đều ngộ lý Duy tâm, nên thấy Báo thân Phật Duy tâm hiện ra, không phải ở ngoài đến. Nhưng cũng tuỳ theo trình độ của từng địa vị, mà sự thấy có Thô, tế khác nhau. Bồ Tát từ địa vị Thập tín, Thập trụ, Thập hạnh, Thập hồi hướng và Tứ gia hạnh, chỉ thấy về phần Thô của Báo thân Phật. Các vị Bồ Tát từ Sơ địa lên đến Đẳng giác thì thấy Báo thân Phật lần lần thù thắng và vi diệu.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p class="mb-4">Lại nữa, các vị Bồ Tát mới phát tâm (tam hiền) do thâm tín chơn như, nên chỉ thấy được một phần nhỏ báo thân Phật. Các vị Bồ Tát này, tuy biết sắc thân Phật có nhiều tướng tốt trang nghiêm, duy tâm biến hiện, không rời chơn như, không khứ không lai, xa lìa ranh giới, song các vị Bồ Tát này còn dùng tâm phân biệt (ý thức) nên chưa nhập được Pháp thân.</p>
    <p class="mb-4">Nếu Bồ Tát đặng tâm thanh tịnh (lên Thánh địa) thì thấy báo thân Phật càng tốt đẹp và càng mầu nhiệm. Đến vị Bồ Tát tột bực (Đẳng giác) thì thấy báo thân Phật mới hoàn toàn rốt ráo.</p>
    <p class="mb-8">Nếu Bồ Tát lìa được nghiệp thức (A đà na) thì ngộ được pháp thân Phật, không có sắc tướng gì có thể thấy được; vì pháp thân của chư Phật, không có sắc tướng thế này thế nọ, không có tướng phần (bị phân biệt) và kiến phần (năng phân biệt) nên không thể thấy được.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn này tiếp theo đoạn trước, nói tuỳ theo trình độ của Bồ Tát, thấy thân Phật khác nhau.</p>
    <p class="mb-4">Các vị Bồ Tát ở địa vị Tam hiền, tuy đã ngộ được lý Duy thức và thâm tín chơn như, nhưng vì còn dùng ý thức phân biệt, nên chỉ thấy báo thân Phật được một ít thôi.</p>
    <p class="mb-4">Các vị Bồ Tát đã ngộ nhập chơn như, chứng được pháp thân thanh tịnh, bước lên Thánh vị (Thập địa); càng lên bực trên chừng nào, thì lại càng thấy báo thân Phật tốt đẹp và mầu nhiệm chừng ấy. Đến địa vị cùng tận của Bồ Tát là vị Đẳng giác, mới thấy được rốt ráo Báo thân Phật.</p>
    <p class="mb-4">Đến khi Bồ Tát phá trừ được Nghiệp thức (Vọng thức: A lại da chơn vọng hoà hiệp) tức là phá trừ được vô minh rất vi tế (món Tế thứ nhứt trong ba Tế); lúc bấy giờ mới hoàn toàn nhập Chơn như, chứng Pháp thân thanh tịnh.</p>
    <p class="mb-8">Pháp thân là bản thể của các pháp; vì không có sắc tướng, không có bỉ thử và không tâm cảnh v.v...nên không thể thấy được. Tất cả chư Phật và chúng sanh cũng đồng một bản thể này.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <div class="my-6 rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-4"><strong>Hỏi:</strong> Pháp thân của chư Phật đã không có các sắc tượng, tại sao lại hiện ra có các sắc tướng? (ứng thân và báo thân)</p>
      <p class="mb-4"><strong>Đáp:</strong> Vì pháp thân là bản thể của sắc tướng, cho nên có thể hiện ra các sắc tướng (hoá thân, báo thân). Do từ hồi nào đến giờ, Sắc (hiện tượng) Tâm (bản thể) không hai, nên bản thể của Sắc (sắc tánh) tức là Tâm (tức trí).</p>
      <p class="mb-4">Vì bản thể của Sắc vô hình (thuộc về tâm) nên gọi là "Trí thân". Vì tướng của tâm (trí tánh) tức là Sắc, nên gọi là "Pháp thân".</p>
      <p class="mb-0">Vì bản thể (tâm) đã biến khắp tất cả chỗ, nên hiện tượng là Sắc, cũng không có chừng ngằn. Tuỳ nơi tâm mà hiện ra mười phương thế giới, vô lượng Bồ Tát, vô lượng Báo thân, vô lượng món trang nghiêm, mỗi mỗi sai khác, đều không có hạn lượng và đều không ngại nhau. Vì đây là diệu dụng đại tự tại của chơn như, nên không thể dùng thức tâm phân biệt mà biết được.</p>
    </div>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-4">Đoạn này Luận chủ đặt ra lời vấn đáp để giải thích sự nghi ngờ.</p>
    <p class="mb-4"><strong>Hỏi:</strong> Pháp thân của chư Phật thanh tịnh, không có các hình tướng, tại sao lại hiện ra có các sắc tướng là Hoá thân và Báo thân?</p>
    <p class="mb-4"><strong>Đại ý lời đáp:</strong> Do từ hồi nào đến giờ, trong Chơn như Pháp thân, Sắc và Tâm không hai: Bản thể của Sắc tức là Tâm, Hiện tượng của Tâm tức là Sắc. Bởi thế nên Chơn như Pháp thân tuy không có hình sắc, mà có thể hiện ra các hình tướng: Y báo và Chánh báo đầy đủ. Cũng như bản thể của điện, biến khắp tất cả không gian, tuy không có hình tướng, nhưng có thể hiện ra các sắc tướng, (hiện tượng) như sấm sét, chớp, nổ v.v...Trong Tâm kinh chép: "Sắc chẳng khác với Không, Không chẳng khác với Sắc" (Sắc bất dị Không, Không bất dị Sắc; Sắc tức thị Không, Không tức thị Sắc).</p>
    <p class="mb-4">Vì Sắc tức là Tâm, nên các pháp tức là Chơn như Pháp thân. Vì Tâm tức là Sắc, nên chơn như pháp thân tuỳ duyên thành các pháp. Do bản thể đã biến khắp tất cả, nên hiện tượng các Sắc tướng, như mười phương thế giới, vô lượng Bồ Tát, vô lượng món trang nghiêm v.v....cũng biến khắp tất cả, không có hạn lượng; mặc dù các hình sắc đều khác nhau, nhưng không trở ngại nhau. Việc này là diệu dụng của Chơn như Pháp thân, nên chúng phàm phu và hàng Nhị thừa, không thể dùng thức tâm của mình mà phân biệt được.</p>
    <p class="mb-8 font-semibold">Do Chơn như là bản thể của các Pháp, nên gọi là Pháp thân; và nó đủ tất cả trí, nên cũng gọi là Trí thân.</p>

    <div class="mt-12 mb-8 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="tro-ve-tam-chon-nhu" class="mt-0 mb-0 text-2xl font-bold text-secondary-700 dark:text-secondary-300">III. Trở về Tâm Chơn như</h3>
    </div>

    <h4 class="mt-8 mb-4 text-xl font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Chánh văn</h4>
    <p class="mb-4">Lại nữa, các pháp từ sanh diệt mà trở về Tâm chơn như; nghĩa là suy xét kỹ càng: bên trong thì thân ngũ ấm (Sắc: Sắc ấm; Tâm: bốn ấm sau), bên ngoài thì cảnh giới (6 trần) rốt ráo vô niệm (tức là chơn tâm). Song, vì chúng sanh bị vô minh làm mê, nên chơn tâm (vô niệm) biến thành hữu niệm (có thân và cảnh v.v..), nhưng bản thể chơn tâm không động (vô niệm).</p>
    <p class="mb-4">Cũng như người lầm phương hướng, vì sự mê lầm nên chấp phương Đông làm phương Tây; thật ra phương hướng không thay đổi.</p>
    <p id="khong-khoi-vong-niem" class="mb-8 font-semibold">Bởi thế nên, người quán sát biết được Tâm vô niệm (không khởi vọng niệm) thì đặng tuỳ thuận vào Tâm chơn như.</p>

    <h4 class="mt-10 mb-4 text-xl font-bold uppercase tracking-wider text-secondary-600 dark:text-secondary-400">Lược giải</h4>
    <p class="mb-2">Luận này có 5 chương, trong chương thứ ba là Phần Giải thích, lại chia làm 3 phần:</p>
    <ol class="mb-4 list-decimal pl-6 space-y-1">
      <li>Nói về nghĩa chánh</li>
      <li>Đối trị các chấp sai lầm.</li>
      <li>Phân biệt hành tướng phát tâm đến Đạo.</li>
    </ol>
    
    <p class="mb-2">Trong phần "Nói về nghĩa chánh", lại chia làm 3:</p>
    <ul class="mb-4 list-none pl-6 space-y-1">
      <li>I. Nói về Tâm Chơn như</li>
      <li>II. Nói về Tâm Sanh diệt</li>
      <li>III. Trở về Tâm Chơn như (tức là quán sát các pháp, sanh tức vô sanh).</li>
    </ul>
    
    <p class="mb-4">Đoạn văn trên đây nói về phần thứ ba là "Trở về Tâm Chơn như".</p>
    <p class="mb-4">Hành giả hãy quán sát tất cả các pháp: Bên trong là thân ngũ ấm (Sắc và Tâm), bên ngoài là cảnh giới 6 trần (sắc, thinh, hương, vị, xúc, pháp) rốt ráo đều vô niệm (không vọng niệm, tức là chơn như). Vì các pháp không rời Thể Chơn tâm (Tâm Chơn như), nên Chơn tâm đã vô niệm (không vọng), thì các pháp cũng vô niệm (không vọng).</p>
    <p class="mb-4">Chơn tâm vì không có hình tướng nên tìm khắp mười phương không thể thấy được nó. Song vì vô minh vọng động, nên Tâm biến ra các pháp hữu hình (hữu niệm) như thân và cảnh v.v...nhưng bản thể Chơn tâm vẫn thanh tịnh không động (vô niệm). Cũng như người bộ hành, vì lầm phương hướng nên chấp phương Đông làm phương Tây, thật ra phương hướng không thay đổi.</p>
    <p class="mb-4">Do vọng niệm sanh ra các pháp sanh diệt, nên dứt trừ vọng niệm (quán vô niệm) thì các pháp sanh diệt kia tự trở về Tâm Chơn như (vô niệm). Cũng như vì gió nên có sóng động, nếu gió hết thì sóng kia tự trở lại với tánh nước yên lặng.</p>
    <p class="mb-4 font-semibold">Nếu vô niệm (không vọng niệm) thì toàn vọng là chơn; nên quán vô niệm là con đường tu chứng duy nhứt của các Phật Tổ.</p>
    
    <p class="mb-4">Trong kinh Lăng nghiêm Phật dạy:" ...Bất tuỳ phân biệt ..." (Không theo trần cảnh khởi vọng niệm phân biệt, tức là quán vô niệm)</p>
    <p class="mb-2">Tổ Đạt Ma khi từ Ấn Độ mới đến Trung Hoa, đức Nhị tổ thỉnh cầu Ngài dạy phương pháp an tâm.</p>
    <ul class="mb-4 list-none pl-6 space-y-2">
      <li>Tổ Đạt Ma trả lời: "Ông hãy đem tâm đến đây, ta sẽ an cho".</li>
      <li>Đức Nhị tổ thưa rằng: "Con tìm tâm không thể được".</li>
      <li>Tổ Đạt Ma dạy tiếp: "Ta đã an tâm cho ông rồi". Đức Nhị tổ liền tỏ ngộ.</li>
    </ul>
    <p class="mb-4">Đức Lục Tổ Huệ Năng dạy: " ....Bổn lai vô nhứt vật ...." (từ xưa đến nay, không có một vật)</p>
    <p class="mb-4">Đây là những bằng chứng Phật và Tổ đều dạy cái bí quyết tu hành mau được thành Phật là "Vô niệm" (không vọng niệm).</p>
    <p class="mb-8">Bởi thế nên, cũng ở nơi Luận này, về đoạn trước đã nói:" ...Nếu lìa các vọng niệm thì đặng nhập chơn như ..." (nhược ly ư niệm, danh vi đắc nhập).</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo nội dung bài học, tại sao các đức Phật lại xem tất cả chúng sanh như bản thân mình và không thấy có tướng chúng sanh để độ?",
    options: {
      a: "Vì các Ngài thấu hiểu rằng mình và chúng sanh đồng một bản thể tâm chơn như bình đẳng.",
      b: "Vì các Ngài đã đạt được thần thông quảng đại, có thể phân thân vào từng chúng sanh.",
      c: "Vì chúng sanh thực chất chỉ là những ảo ảnh không có thật trong cõi ta bà.",
      d: "Vì các Ngài muốn thực hành hạnh khiêm nhường để làm gương cho các hàng Bồ Tát.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Do chứng được chỗ đồng thể, chư Phật và Bồ Tát hiểu rõ tất cả chúng sanh và mình không có sai khác, đều đồng một tâm chơn như bình đẳng, nên không chấp tướng chúng sanh để độ.",
      b: "Sai. Sự vô phân biệt này xuất phát từ thấu triệt bản thể, không phải từ năng lực thần thông.",
      c: "Sai. Khái niệm này không phải là lý do chính được giải thích ở đây.",
      d: "Sai. Đây là một trạng thái tự nhiên của tâm chứng ngộ, không phải sự cố ý tạo tác khiêm nhường.",
    },
  },
  {
    question: "Đối tượng nào sau đây thấy được 'Ứng thân' của Phật thông qua 'Phân biệt sự thức' (ý thức)?",
    options: {
      a: "Chỉ những loài trong lục đạo có nghiệp báo tốt.",
      b: "Các vị Bồ Tát ở địa vị Đẳng giác.",
      c: "Hàng chúng sanh phàm phu và Nhị thừa.",
      d: "Các vị Bồ Tát từ Sơ địa trở lên.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Việc thấy ứng thân phụ thuộc vào thức phân biệt, không chỉ dành cho loài có nghiệp báo tốt.",
      b: "Sai. Bồ Tát Đẳng giác thấy được rốt ráo Báo thân.",
      c: "Đúng. Phàm phu và Nhị thừa do còn dùng 'Phân biệt sự thức' (ý thức) và chấp cảnh bên ngoài nên chỉ thấy được Ứng thân (sắc thân thô sơ).",
      d: "Sai. Bồ Tát từ Sơ địa đã thấy Báo thân vi diệu.",
    },
  },
  {
    question: "Báo thân của Phật được hình thành nhờ vào sự huân tập của những yếu tố nào?",
    options: {
      a: "Sự thiền định sâu sắc để loại bỏ hoàn toàn các cảm giác vật lý.",
      b: "Sự cầu nguyện của chúng sanh và lòng từ bi của chư Phật.",
      c: "Các hạnh vô lậu (như Ba la mật) và sự huân tập của chơn như bên trong.",
      d: "Công đức của việc xây dựng chùa tháp và cúng dường tam bảo.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Thiền định chỉ là một phương pháp, không đại diện đủ hai yếu tố huân tập.",
      b: "Sai. Lòng từ bi sinh ra Ứng thân, còn Báo thân dựa trên nhân duyên huân tập.",
      c: "Đúng. Báo thân là kết quả của sự huân tập bất tư nghị (chơn như huân tập bên trong) và sự huân tập của các hạnh vô lậu thanh tịnh (tu các pháp Ba la mật).",
      d: "Sai. Đó là công đức hữu lậu thế gian.",
    },
  },
  {
    question: "Tại sao Pháp thân của chư Phật được gọi là 'Trí thân'?",
    options: {
      a: "Vì Pháp thân có khả năng ghi nhớ vô lượng kiến thức của thế gian.",
      b: "Vì nó là thân thể được tạo ra từ các hạt nguyên tử trí tuệ.",
      c: "Vì Pháp thân chỉ xuất hiện khi hành giả học rộng nghe nhiều.",
      d: "Vì bản thể của Sắc (vật chất) vốn vô hình và chính là Tâm (Trí).",
    },
    answer: "d",
    explanation: {
      a: "Sai. Pháp thân không liên quan đến việc ghi nhớ kiến thức phân biệt.",
      b: "Sai. Pháp thân không có hình tướng vật lý hay hạt nguyên tử.",
      c: "Sai. Việc học rộng nghe nhiều thuộc về thức phân biệt.",
      d: "Đúng. Vì Sắc và Tâm không hai, bản thể của Sắc vô hình, thuộc về tâm (đủ tất cả trí) nên Pháp thân cũng được gọi là 'Trí thân'.",
    },
  },
  {
    question: "Hành động nào được coi là con đường tu chứng duy nhất để trở về với Tâm chơn như theo văn bản?",
    options: {
      a: "Quán vô niệm (không khởi vọng niệm).",
      b: "Tụng kinh và trì chú liên tục suốt ngày đêm.",
      c: "Phân tích kỹ lưỡng các hiện tượng vật lý của thế giới.",
      d: "Tìm kiếm một vị thầy tâm linh để ban phát sự giải thoát.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Quán vô niệm (dứt trừ vọng niệm) là con đường tu chứng duy nhất của các Phật Tổ để trở về Tâm chơn như.",
      b: "Sai. Đây là phương tiện tu tập, không phải bản chất tối hậu.",
      c: "Sai. Sự phân tích vật lý dùng ý thức phân biệt, sẽ sinh ra thêm niệm.",
      d: "Sai. Sự giải thoát phải tự chứng, không ai ban phát được.",
    },
  },
  {
    question: "Sự khác biệt chính giữa cách nhìn của Bồ Tát Tam hiền và Bồ Tát Thánh địa đối với Báo thân Phật là gì?",
    options: {
      a: "Bồ Tát Tam hiền không tin vào Báo thân, còn Bồ Tát Thánh địa thì có.",
      b: "Bồ Tát Tam hiền thấy Báo thân có sắc tướng, còn Bồ Tát Thánh địa thấy Báo thân vô tướng.",
      c: "Bồ Tát Tam hiền còn dùng ý thức phân biệt nên chỉ thấy được một phần nhỏ và thô của Báo thân.",
      d: "Bồ Tát Tam hiền thấy Báo thân từ bên ngoài đến, còn Bồ Tát Thánh địa thấy từ bên trong.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Cả hai đều tin và thấy được Báo thân.",
      b: "Sai. Pháp thân mới vô tướng, Báo thân vẫn có vô lượng sắc tướng thù thắng.",
      c: "Đúng. Bồ Tát Tam hiền (Thập tín, Thập trụ, Thập hạnh, Thập hồi hướng) do còn dùng tâm phân biệt (ý thức) nên chỉ thấy được phần Thô (một phần nhỏ) của Báo thân. Bồ Tát Thánh địa trở lên thấy rõ ràng, vi diệu hơn.",
      d: "Sai. Cả hai đều biết Báo thân là duy tâm biến hiện.",
    },
  },
  {
    question: "Hình ảnh 'trăng rằm chiếu khắp các ao hồ' được dùng để minh họa cho điều gì?",
    options: {
      a: "Sự biến đổi của tâm theo thời gian như chu kỳ của mặt trăng.",
      b: "Tầm quan trọng của việc chọn môi trường trong sạch để tu tập.",
      c: "Sự duy nhất của chân lý trong một thế giới đa dạng.",
      d: "Diệu dụng của chơn như ứng hiện tự nhiên và không có tâm tạo tác.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Mặt trăng ở đây không đại diện cho thời gian.",
      b: "Sai. Ao hồ trong hay đục không phải chủ đề chính của ví dụ này.",
      c: "Sai. Trọng tâm của ví dụ là sự ứng hiện vô tư.",
      d: "Đúng. Diệu dụng của chơn như hiện ra một cách tự nhiên (như mặt trăng phản chiếu xuống nước), không có tâm tạo tác, không có hình tướng hay công dụng cụ thể nhưng chúng sanh lại được lợi ích.",
    },
  },
  {
    question: "Điều gì xảy ra khi một vị Bồ Tát phá trừ được hoàn toàn 'Nghiệp thức' (A đà na)?",
    options: {
      a: "Họ sẽ có khả năng nhìn thấy Ứng thân của chư Phật ở mười phương.",
      b: "Họ hoàn toàn nhập vào Chơn như và chứng Pháp thân thanh tịnh không sắc tướng.",
      c: "Họ sẽ tái sanh vào cõi người để tiếp tục giáo hóa chúng sanh bằng ý thức.",
      d: "Họ sẽ trở thành một vị Bồ Tát ở địa vị Thập hồi hướng.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Ứng thân là do ý thức phân biệt thấy, phá nghiệp thức sẽ không còn phân biệt.",
      b: "Đúng. Phá trừ Nghiệp thức tức là phá vô minh rất vi tế, Bồ Tát lúc này hoàn toàn nhập Chơn như, chứng Pháp thân thanh tịnh không sắc tướng, không còn Tướng phần hay Kiến phần.",
      c: "Sai. Việc giáo hóa không phụ thuộc vào tái sanh cõi người và không còn dùng ý thức nữa.",
      d: "Sai. Thập hồi hướng là Bồ Tát Tam hiền, vẫn còn dùng ý thức phân biệt.",
    },
  },
  {
    question: "Trong ví dụ về người bộ hành lầm phương hướng, 'phương hướng không thay đổi' tượng trưng cho điều gì?",
    options: {
      a: "Thế giới vật chất luôn tồn tại khách quan bên ngoài tâm.",
      b: "Các quy luật đạo đức là vĩnh cửu không bao giờ sai chạy.",
      c: "Sự kiên định của hành giả trên con đường tìm cầu chân lý.",
      d: "Bản thể chơn tâm vốn bất động và không thay đổi dù chúng sanh có mê lầm.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Phật giáo Đại thừa phủ nhận sự tồn tại độc lập bên ngoài tâm của vạn pháp.",
      b: "Sai. Đạo đức không phải là chủ đề cốt lõi của ví dụ này.",
      c: "Sai. Nó minh hoạ cho bản thể, không phải đức tính cá nhân.",
      d: "Đúng. Người mê nhận Đông làm Tây, nhưng Đông Tây vẫn vậy. Tương tự, do vô minh mà tâm biến ra pháp hữu hình, nhưng bản thể Chơn tâm (vô niệm) vẫn thanh tịnh, không vọng động, không hề thay đổi.",
    },
  },
  {
    question: "Tại sao các hình sắc trong mười phương thế giới và các món trang nghiêm lại không ngăn ngại nhau?",
    options: {
      a: "Vì tất cả đều là diệu dụng đại tự tại của chơn như, từ tâm biến hiện.",
      b: "Vì chúng ở những khoảng cách quá xa nhau trong không gian.",
      c: "Vì các vị Bồ Tát đã dùng thần thông để sắp xếp chúng một cách hợp lý.",
      d: "Vì thế giới vốn là một khoảng không trống rỗng không có gì thực sự tồn tại.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Bản thể của Sắc tức là Tâm, Tâm biến khắp tất cả không có chừng ngằn nên Sắc (mười phương thế giới, vô lượng trang nghiêm) cũng biến khắp. Sự giao thoa này không chướng ngại nhau vì nó là diệu dụng tự tại của chơn như, vượt qua hạn chế của thức tâm phân biệt.",
      b: "Sai. Dù cùng ở một chỗ cũng không ngăn ngại nhau (sự sự vô ngại).",
      c: "Sai. Nó là tự nhiên, không do Bồ Tát tạo tác thần thông sắp xếp.",
      d: "Sai. Chúng có tồn tại dưới dạng diệu dụng (diệu hữu), không phải là khoảng không trống rỗng (ngoan không).",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-11-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-11-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 11 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 13,
  createdAt: '2026-08-01',
  updatedAt: '2026-08-01',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-11-phan-giai-thich-tiep-theo/Di%E1%BB%87u_D%E1%BB%A5ng_C%E1%BB%A7a_T%C3%A2m_Ch%C6%A1n_Nh%C6%B0.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-nghia-bat-giac-tiep-theo', label: 'Nói về nghĩa "Bất giác" (tiếp theo và hết)' },
        { id: 'ba-dai-nghia-cua-tam', label: 'Ba đại nghĩa của Tâm (tiếp theo và hết)' },
        { id: 'dung-rong-lon-cua-tam', label: 'Nói về Dụng rộng lớn của Tâm:', indent: 1 },
        { id: 'bao-than', label: 'Báo thân', indent: 2 },
        { id: 'ung-than', label: 'Ứng thân', indent: 2 },
        { id: 'the-gioi-trang-nghiem', label: 'Thế giới trang nghiêm', indent: 2 },
        { id: 'tro-ve-tam-chon-nhu', label: 'III. Trở về Tâm Chơn như' },
        { id: 'khong-khoi-vong-niem', label: 'Không khởi vọng niệm thì trở về Chơn như', indent: 1 }
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-11-phan-giai-thich-tiep-theo/Di%E1%BB%87u_D%E1%BB%A5ng_Ch%C6%A1n_Nh%C6%B0.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/GoGthfOw0mQ',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/7gL4U5T6cwrsTkonoSpNQg',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài Thứ 11',
    passPercentage: 70,
    questions,
  },
}

export default lesson