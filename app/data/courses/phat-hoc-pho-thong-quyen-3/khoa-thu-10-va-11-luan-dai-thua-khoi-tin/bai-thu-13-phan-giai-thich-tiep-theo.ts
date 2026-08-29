import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI BA · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="phan-biet-hanh-tuong-phat-tam" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">C. Phân biệt hành tướng phát tâm đến đạo (bài thứ nhất)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="ba-mon-phat-tam" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Ba món phát tâm</h3>
    </div>
    
    <p id="tin-hoan-toan"><strong>I. Tín hoàn toàn mà phát tâm</strong></p>
    <p id="hieu-biet-va-lam"><strong>II. Hiểu biết và làm mà phát tâm</strong></p>
    <p id="chung-nhap-chan-nhu"><strong>III. Chứng nhập chân như mà phát tâm</strong></p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Chữ "Đạo" nói ở đây là chỉ cho đạo quả của chư Phật đã chứng ngộ và cũng là cái chỗ của tất cả các vị Bồ Tát phát tâm tu hành để hướng về.</p>
    <p>Sự phát tâm, lược có 3 món: 1. Tín hoàn toàn (Tín thành tựu) mà phát tâm, 2. Hiểu và tu (giải, hạnh) mà phát tâm, 3. Chứng nhập chân như mà phát tâm.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Luận này có năm chương, trong chương thứ ba, có ba phần: phần đầu giải thích về pháp Đại thừa; phần thứ hai, Ngài Mã Minh đả thông những chấp sai lầm. Sau khi được rửa sạch các chấp sai lầm rồi, hành giả mới phát tâm tu về pháp Đại thừa. Vì thế nên tiếp đến phần thứ ba, Ngài Mã Minh phân biệt hành tướng phát tâm tu về đạo quả Đại thừa.</p>
    <p>Đạo quả Đại thừa là nơi chư Phật đã chứng, mà cũng là chỗ các vị Bồ Tát đang hướng về đó.</p>
    <p>Sự phát tâm tu về đạo quả Đại thừa, lược chia có ba hạng, từ cạn đến sâu:</p>
    <p>- Mãn địa vị Thập tín (Tín hoàn toàn) phát tâm;</p>
    <p>- Địa vị Tam hiền (Giải: Hiểu, Hành: tu) phát tâm;</p>
    <p>- Địa vị Thập thánh đã chứng nhập chân như phát tâm.</p>
    <p>Chữ "Phát tâm" có hai nghĩa: 1. Lập chí cao rộng, 2. Phát triển tâm tánh, hay phát minh tâm tánh.</p>

    <h4 id="tin-hoan-toan-phat-tam" class="mt-6 text-lg font-semibold">1. Nói về Tín hoàn toàn mà phát tâm</h4>
    
    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Phải là người thế nào và nhờ tu hạnh gì để thành tựu vị Thập tín, mới phát tâm được?</p>
      <p class="mb-0"><strong>Đáp:</strong> Những chúng sanh bất định (không nhất định chánh hay tà), nhờ sức căn lành huân tập đời trước, làm cho họ tin nhân quả, nên nhàm khổ sanh tử, phát tâm tu thập thiện, để cầu đạo vô thượng Bồ Tát. Nhờ được đích thân hầu hạ, cúng dường chư Phật và tu hành trải qua muôn kiếp, nên họ mới đặng thành tựu tín tâm. Do nhân duyên đó nên được gặp Phật, Bồ Tát dạy mà họ phát tâm; hoặc vì lòng Đại bi, mà họ tự phát tâm; hoặc vì thấy chánh pháp sắp diệt mà muốn duy trì nên họ tự phát tâm.</p>
    </div>
    <p class="mt-4">Những người như thế, được vào hàng chánh định, trọn không thối chuyển. Vì họ đã hiệp với "Chánh nhân Phật tánh", nên họ được gọi là "dòng giống của Như Lai".</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này nói về Tín thành tựu phát tâm. Từ Sơ tín cho đến Thập tín thì tín tâm mới hoàn toàn viên mãn nên gọi là "Tín thành tựu". Do tín tâm vững chắc, lập chí nguyện cầu quả Phật vô thượng và phát minh tâm tánh, nên gọi là "Tín thành tựu phát tâm".</p>
    
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 mt-4 mb-4">
      <p class="mb-1"><strong>Hỏi:</strong> Hạng người nào, tu hạnh gì, mới đặng hoàn toàn viên mãn vị Thập tín, và làm sao phát tâm?</p>
      <p class="mb-0"><strong>Đáp:</strong> Những người bất định chánh tà, hay căn trí chưa nghiêng ngả bên nào (Đại thừa hay Tiểu thừa) nếu gặp Tiểu thừa giáo hóa thì họ thành Thanh văn, Duyên giác, nếu gặp Đại thừa giáo hóa thì họ thành Bồ Tát hay Phật. Những người ấy, do nhiều đời có trồng căn lành và bên trong nhờ tánh Phật của họ thúc giục, bên ngoài nhờ chánh pháp huân vào, làm cho họ tin đạo lý nhân quả, rồi nhàm cảnh trần gian là bể khổ sanh tử, nên phát tâm tu hành cầu đạo giải thoát Niết bàn.</p>
    </div>
    <p>Phát tâm tu hành, phụng sự chánh pháp, hầu hạ Thiện hữu tri thức và cúng dường chư Phật, làm những việc như thế, trải qua một vạn kiếp, hành giả mới viên mãn địa vị Thập tín.</p>
    <p>Khi tín tâm đã viên mãn thành tựu rồi, hoặc gặp Phật hay Bồ Tát dạy họ phát tâm, hoặc do lòng Đại bi thúc giục làm cho họ phát tâm, hoặc thấy chánh pháp suy đồi, muốn duy trì chánh pháp nên họ phát tâm.</p>
    <p>Những người được viên mãn vị Thập tín và phát tâm như thế, là đã hiệp với "Chánh nhân Phật tánh" vào hàng "Chánh định", không còn bất định hay thối chuyển nữa, nên họ cũng được gọi là "dòng giống của Như Lai".</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Có những chúng sanh, từ hồi nào đến giờ, căn lành mỏng ít, phiền não sâu dày, tuy cũng gặp Phật cúng dường, song chỉ cầu phước báo cõi nhân thiên, hoặc tu theo Nhị thừa, hoặc họ có cầu pháp Đại thừa, nhưng căn tánh chẳng quyết định, tấn thối không chừng; hoặc họ cúng dường chư Phật, mà chưa đầy một vạn kiếp. Những hạng người này cũng gặp nhân duyên lành để phát tâm (như thấy sắc tướng của chư Phật mà phát tâm, hoặc nhân cúng dường chư tăng mà phát tâm, hoặc nhân gặp hàng Nhị thừa dạy bảo mà họ phát tâm, hoặc học với thầy bạn mà họ phát tâm). Nhưng các loại phát tâm này, đều chẳng nhất định, nếu gặp hoàn cảnh xấu ngược, thì họ thối tâm, hoặc đọa vào Nhị thừa.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn trên nói những người tín tâm đã thành tựu, và phát tâm như vậy, thì được vào hàng chánh định, quyết không thối chuyển, vì họ tu đã được một vạn kiếp.</p>
    <p>Đoạn này nói, những người phát tâm sau đây, vì tu chưa đầy một vạn kiếp, tín tâm chưa thành tựu, hoặc còn thối chuyển, nên chưa được vào hàng Chánh định. Họ cũng gặp duyên lành để phát tâm, hoặc thấy tướng hảo của Phật mà phát tâm, hoặc nhân cúng dường chư Tăng mà phát tâm, hoặc gặp Nhị thừa giáo hóa phát tâm v.v... Nhưng vì căn lành mỏng ít, phiền não sâu dày, tuy gặp Phật pháp tu hành, song chỉ cầu phước báo thiên nhân, hoặc tu theo Nhị thừa, và nếu gặp Đại thừa thì tâm họ cũng không quyết định, nên khi bị nghịch cảnh, họ thối tâm hoặc tu theo Tiểu thừa tiêu cực.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="ba-mon-tam-thap-tin" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">a. Ba món tâm trong vị Thập tín</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Tóm lại, khi tín tâm đã thành tựu thì phát ba món tâm như sau:</p>
    <p><strong>1. Trực tâm</strong>, nghĩa là tâm trực niệm chân như</p>
    <p><strong>2. Thâm tâm</strong>, nghĩa là tâm ưa làm các việc lành</p>
    <p><strong>3. Đại bi tâm</strong>, nghĩa là tâm muốn cứu khổ các chúng sanh.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Hành giả tu hành phải trải qua một vạn kiếp mới được thành tựu tín tâm. Lúc bấy giờ hành giả phát ra vô số tâm, nhưng tóm lại có ba thứ:</p>
    <p><strong>1. Trực tâm</strong>, quán thẳng Chân như pháp tánh</p>
    <p><strong>2. Thâm tâm</strong>, nguyện làm các việc lành</p>
    <p><strong>3. Đại bi tâm</strong>, thệ độ tất cả chúng sanh.</p>
    <p>Quán chân như là căn bản của hai hạnh: Tự lợi và lợi tha. Vì quán trong bản thể chân như có đủ vô lượng công đức, cho nên hành giả ưa tu các pháp lành, để hiệp với tánh chân như của mình. Hành giả tu hành, khi nào thâm nhập đến chỗ không còn thấy tướng tu nữa, gọi đó là "Thâm tâm".</p>
    <p>Vì quán mình và tất cả chúng sanh đồng bản thể chân như, nên chúng sanh đau khổ tức là mình đau khổ, chúng sanh còn trần luân thì mình chưa được giải thoát an vui nơi cảnh Niết bàn. Vì thế mà hành giả phát tâm Đại bi cứu khổ tất cả chúng sanh.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Chân như đã là một thể, tại sao không bảo hành giả trực niệm chân như, mà lại còn tạm dùng các phương tiện, tu các pháp lành?</p>
      <p class="mb-0"><strong>Đáp:</strong> Thí như ngọc ma ni thể chất tuy sáng suốt trong sạch, nhưng còn bị lẫn lộn trong khoáng nhơ bẩn. Nếu người chỉ nghĩ đến tánh chất trong suốt của ngọc, mà không dùng các phương tiện giũa mài v.v... thì quyết định không thể đặng chất ngọc ma ni thuần tịnh.</p>
      <p class="mb-0 mt-2">Cũng thế, chúng sanh tuy sẵn có chất chân như thanh tịnh, song còn bị vô lượng phiền não làm nhiễm ô. Nếu hành giả chỉ niệm chân như, mà không dùng phương tiện tu các pháp lành, thì cũng không thể đặng chất chân như thuần tịnh.</p>
      <p class="mb-0 mt-2">Vì các phiền não nhiễm ô vô lượng, nên hành giả phải tu vô lượng hạnh lành để đối trị. Nếu hành giả tu các pháp lành, thì tự nhiên thuận về với tánh chân như của mình.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này giải đáp sự thắc mắc của độc giả.</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 mt-4 mb-4">
      <p class="mb-1"><strong>Hỏi:</strong> Chúng sanh đã sẵn có chất chân như thanh tịnh, tại sao người tu hành không niệm thẳng chân như, mà lại còn dùng vô số phương tiện để dẹp trừ phiền não nhiễm ô và tu các pháp lành làm gì?</p>
      <p class="mb-0"><strong>Đáp:</strong> Chúng sanh tuy sẵn có chất chân như thanh tịnh, song còn bị vô lượng phiền não làm nhiễm ô; cũng như ngọc ma ni, tuy chất nó sáng suốt trong sạch, nhưng còn bị lẫn lộn trong khoáng nhơ bẩn. Nếu hành giả trực chỉ quán chân như, mà không dùng các phương tiện để trừ phiền não và tu các pháp lành, thì chất chân như thuần tịnh không bao giờ thật hiện được. Cũng như người chỉ nghĩ đến chất ngọc trong suốt, mà không dùng đến các phương tiện như lọc khoáng, giũa mài v.v... thì quyết định cũng không bao giờ thành ngọc mỹ quan được (ngọc bất trác, bất thành khí).</p>
    </div>
    <p>Chúng sanh có vô lượng bệnh phiền não, nên Phật cũng có vô lượng thuốc phương tiện để trị. Nếu muốn hết các bệnh phiền não, trở thành người lành mạnh (Bồ Đề, Niết bàn), tất nhiên hành giả phải uống thuốc phương tiện của Phật. Người diệt trừ phiền não tu các pháp lành là đi ngược dòng trần lao, thuận theo tánh chân như. Bởi thế nên hành giả phải phát minh ba tâm (Trực tâm, Thâm tâm và Đại bi tâm) và thực hành bốn phương tiện sau này.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="bon-mon-phuong-tien" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">b. Bốn món phương tiện</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="pt-can-ban"><strong>1. Phương tiện căn bản:</strong></p>
    <p>Quán tất cả các pháp, tánh vốn vô sanh (không) để lìa các vọng chấp, và nhờ thế mà không mắc vòng sanh tử; quán các pháp do nhân duyên hòa hiệp, nên nghiệp quả chẳng mất (có) để khởi tâm đại bi, tu các hạnh lành, cảm hóa chúng sanh, và nhờ thế nên không trụ Niết bàn.</p>
    <p>Tóm lại, vì tùy thuận theo tánh vô trụ của chân như, nên không dính mắc sanh tử và không an trụ Niết bàn.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Trong bốn phương tiện tu hành để nhập chân như, thì món phương tiện này là căn bản.</p>
    <p>Chúng sanh, vọng chấp các pháp thật có, nên tạo ra các nghiệp; rồi bị nghiệp lực kéo dẫn, phải chịu sanh tử luân hồi. Nay hành giả quán "các pháp hư giả, không thật", nên không vọng chấp và không tạo nghiệp; vì nghiệp không tạo, nên không bị sanh tử luân hồi.</p>
    <p>Song, nếu hành giả chỉ một bề quán "Không" như thế, sợ e mắc vào bệnh "chấp không", rồi chẳng cần tu hành và hóa độ chúng sanh; như hàng Thanh văn chấp không, ưa vắng lặng (trầm không thú tịch) thích thú cảnh vui Niết bàn của Tiểu thừa.</p>
    <p>Bởi thế, hành giả phải quán "do nhân duyên hòa hiệp, nên các pháp chẳng phải không và nghiệp quả chẳng mất", để khởi tâm Đại bi, tu các hạnh lành giáo hóa chúng sanh. Nhờ quán như thế, nên hành giả không còn "chấp không" và say mê cảnh Niết bàn của Tiểu thừa nữa.</p>
    <p>Vì không vướng mắc sanh tử, nên về phần tự lợi hành giả được thành tựu. Và vì không vướng mắc Niết bàn của Tiểu thừa, nên hành giả độ thoát tất cả chúng sanh, hoàn thành hạnh lợi tha.</p>
    <p>Không mắc sanh tử, không trụ Niết bàn là thuận theo đức tánh vô trụ của chân tâm; như thế gọi là "Trực tâm". Trực tâm là phương tiện căn bản của các hạnh, tự giác và giác tha. Khế kinh chép: "Tâm thắng (không mắc hai bên) là Đạo tàng" (trực tâm thị Đạo tàng).</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="pt-ngan-ngua"><strong>2. Phương tiện ngăn ngừa các việc ác:</strong></p>
    <p>Biết xấu hổ, ăn năn, chừa lỗi, ngăn ngừa tất cả điều ác không cho phát sanh và tăng trưởng. Hành giả phải làm như thế để tùy thuận theo đức tánh thanh tịnh của chân như.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này nói về phương tiện thứ hai là "không làm việc ác". Người biết xấu xa hổ thẹn thì không làm các điều tội lỗi; biết ăn năn hối hận những tội đã làm, thì tội lỗi ấy không tăng trưởng nữa. Bởi thế nên "hổ thẹn" là yếu tố ngăn chặn việc ác phát sanh; còn "ăn năn hối hận" là yếu tố làm cho tội lỗi đã sanh, không tăng trưởng nữa.</p>
    <p>Đoạn văn trước nói 3 tâm: 1. Trực tâm, 2. Thâm tâm, 3. Đại bi tâm. Đoạn này nói phương tiện thứ hai, thuộc về Thâm tâm, tức là ưa làm các việc lành. Lành có hai thứ: 1. Bỏ dữ (chỉ thiện) gọi là lành; 2. Làm lành (tác thiện) cũng gọi là lành.</p>
    <p>Món phương tiện thứ hai này thuộc về loại "lành bỏ dữ"; món phương tiện thứ ba sau này, thuộc về loại "lành làm lành". Hai loại lành này đều thuộc về Thâm tâm cả.</p>
    <p>Tóm lại, vì tùy thuận theo đức tánh thanh tịnh của Tâm chân như, nên hành giả phải xa lìa các tội lỗi.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="pt-phat-sanh"><strong>3. Phương tiện làm cho phát sanh hoặc nuôi lớn căn lành:</strong></p>
    <p>Siêng năng lễ bái và cúng dường Tam bảo, tùy hỷ việc lành, tán thán công đức và thỉnh Phật trụ thế chuyển pháp luân. Do tâm kính mến Tam bảo rất thuần hậu, làm cho đức tin được thêm lớn nên hành giả mới dốc chí cầu đạo vô thượng. Lại nhờ sức gia hộ của Tam bảo, nên các nghiệp chướng được tiêu trừ và căn lành không thối chuyển. Vì tùy thuận theo đức tánh "vô chướng ngại" của chân như, nên hành giả phải xa lìa các si mê chướng ngại.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phương tiện thứ ba này là "làm các việc lành", tức là loại "lành tác thiện" (làm lành). Loại lành này cũng nương nơi thâm tâm mà khởi. Hành giả làm cho phát sanh những việc lành chưa sanh, và nuôi lớn những việc lành đang có. Siêng năng tu hành và cúng dường Tam bảo v.v... là trồng căn lành; còn kính mến Tam bảo v.v... là nuôi lớn đức tin. Hành giả lại nhờ thần lực của Tam bảo gia hộ, nên tiêu trừ được các nghiệp chướng và làm cho đức tin được vững chắc.</p>
    <p>Lễ bái thì xa lìa được cái bệnh ngã mạn, tán thán thì xa lìa được cái bệnh hủy báng, tùy hỷ thì xa lìa được cái bệnh tật đố v.v...</p>
    <p>Tóm lại, vì tùy thuận theo đức tánh sáng suốt vô ngại của Tâm chân như, nên hành giả phải xa lìa các si mê chướng ngại.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="pt-dai-nguyen"><strong>4. Phương tiện đại nguyện và bình đẳng:</strong></p>
    <p>Hành giả vì tùy thuận tánh không đoạn tuyệt của chân như và bình đẳng không hai, chẳng phân bỉ thử, rốt ráo vắng lặng, rộng lớn phổ biến của chân như. Nên hành giả phát đại nguyện, cùng tận đời vị lai, hóa độ tất cả chúng sanh, đều được rốt ráo chứng vô dư Niết bàn, không còn sót một chúng sanh nào.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phương tiện thứ tư là "cứu khổ các chúng sanh". Món phương tiện này do tâm đại bi phát sanh.</p>
    <p>Hành giả tùy thuận theo các đức tánh: bất tuyệt, rộng lớn, bình đẳng, cứu cánh tịch diệt của Tâm chân như, nên lập lời thệ nguyện rộng lớn, hóa độ hết thảy chúng sanh, đều được cứu cánh Niết bàn, không hạn định thời gian và không bao giờ dừng nghỉ.</p>
    <p>Tóm lại, Bồ Tát tùy thuận theo các đức tánh tốt của tâm chân như mà tu các hạnh lành, dẹp trừ các cấu nhiễm, để trở về Tâm chân như.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="tam-tuong-thanh-dao" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">c. Tám tướng thành đạo</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Bồ Tát nhờ phát tâm này, nên được thấy Pháp thân một phần nào. Do thấy được Pháp thân nên Bồ Tát tùy theo nguyện lực của mình, mà hiện ra tám tướng sau đây, để làm lợi ích cho chúng sanh:</p>
    <div class="grid grid-cols-2 gap-2 my-4">
      <p>1. Từ cung trời Đâu suất giáng sanh</p>
      <p>2. Nhập thai</p>
      <p>3. Ở trong thai</p>
      <p>4. Sanh ra</p>
      <p>5. Xuất gia</p>
      <p>6. Thành Đạo</p>
      <p>7. Thuyết pháp</p>
      <p>8. Nhập Niết bàn</p>
    </div>
    
    <p>Song các vị Bồ Tát này, chưa chứng pháp thân, vì còn các nghiệp hữu lậu từ quá khứ vô lượng kiếp đến nay, chưa có thể đoạn trừ được. Vị Bồ Tát do sức đại nguyện tự tại mà thọ sanh; tuy không phải bị nghiệp lực kéo dẫn, song vẫn còn khổ vi tế. Trong Khế kinh, Phật nói: "Có vị Bồ Tát thối tâm bị đọa vào ác thú". Nói như vậy, là để cho những vị sơ tâm (chưa phải chính thức Bồ Tát) còn giải đãi trên đường tu hành, lo sợ, mà phát tâm dõng mãnh tiến tu, chứ không phải thật thối đọa.</p>
    <p>Lại nữa, các vị Bồ Tát này, từ khi phát tâm về sau, mặc dù nghe nói phải trải qua vô lượng vô biên a tăng kỳ kiếp (vô số kiếp), siêng năng tu hành khổ hạnh, mới chứng được Niết bàn; nhưng cũng không nhu nhược và lo sợ đọa vào Nhị thừa, vì họ đã hiểu chắc và tin rằng: Tất cả các pháp từ hồi nào đến giờ, tánh nó vốn là Niết bàn.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bồ Tát khi đã viên mãn Thập tín, phát ba món tâm trên rồi (Trực tâm, Thâm tâm và Đại bi tâm) thì vào Thập trụ, thấy được Pháp thân thanh tịnh, nên có thể thị hiện tám tướng cao cả, để làm lợi ích cho các chúng sanh, mà tâm không nhu nhược và sợ thối đọa; bởi vì các vị Bồ Tát này đã biết các pháp từ xưa đến nay vốn là Niết bàn.</p>
    <p>Các vị Bồ Tát Thập trụ này, vì các nghiệp hữu lậu chưa hết, nên sanh ở đâu, cũng còn khổ vi tế về "phần đoạn sanh tử". Nhưng sự thọ sanh của các Ngài là do đại nguyện để hóa độ chúng sanh, chứ không phải bị nghiệp lực kéo dẫn mà thọ sanh.</p>
    <p>Lại nữa, các vị Bồ Tát này không bao giờ đọa vào ác thú, thối thất Bồ Đề. Nhưng trong kinh Bản nghiệp Phật nói: "các vị Bồ Tát từ Thất trụ về trước còn thối đọa, nếu từ một kiếp đến mười kiếp không gặp Thiện hữu tri thức". Phật nói như vậy là để khủng bố các vị Sơ tâm Bồ Tát còn giải đãi trong sự tu hành.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo nội dung bài học, chữ 'Phát tâm' được giải thích theo hai nghĩa chính nào?",
    options: {
      a: "Lòng tin vững chắc và từ bỏ tham ái.",
      b: "Tìm cầu phước báo và tránh xa tội ác.",
      c: "Chứng ngộ chân như và cứu độ chúng sanh.",
      d: "Lập chí cao rộng và phát minh tâm tánh.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây là một phần kết quả của việc phát tâm.",
      b: "Sai. Đây thuộc về hạng người căn lành mỏng ít cầu phước báo nhân thiên.",
      c: "Sai. Đây là kết quả cứu cánh.",
      d: "Đúng. Chữ 'Phát tâm' có hai nghĩa: 1. Lập chí cao rộng, 2. Phát triển tâm tánh hay phát minh tâm tánh.",
    },
  },
  {
    question: "Hành giả cần phải tu hành trải qua khoảng thời gian bao lâu mới đạt được sự thành tựu về tín tâm (Thập tín)?",
    options: {
      a: "Chỉ cần một đời chuyên tâm tu hành.",
      b: "Vô lượng vô biên a tăng kỳ kiếp.",
      c: "Khoảng một vạn kiếp.",
      d: "Khoảng một nghìn kiếp.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai. Đây là thời gian để chứng Niết bàn rốt ráo.",
      c: "Đúng. Phụng sự chánh pháp, cúng dường chư Phật trải qua một vạn kiếp thì hành giả mới viên mãn địa vị Thập tín (Tín thành tựu).",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao những người phát tâm do thấy tướng hảo của Phật hoặc do cúng dường Chư Tăng lại có thể bị thối tâm?",
    options: {
      a: "Vì họ không tin vào định luật nhân quả của thế gian.",
      b: "Vì căn lành mỏng ít, phiền não sâu dày và chưa tu đủ một vạn kiếp.",
      c: "Vì họ chưa từng được gặp gỡ hay nghe giáo pháp từ hàng Nhị thừa.",
      d: "Vì họ chỉ muốn tu theo hạnh Thanh văn và Duyên giác.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Họ vẫn có thể tin nhân quả nhưng chưa đủ vững chắc.",
      b: "Đúng. Những người này do tu chưa đầy một vạn kiếp, tín tâm chưa thành tựu, căn lành mỏng ít nên khi gặp hoàn cảnh nghịch ngược thì dễ thối tâm.",
      c: "Sai.",
      d: "Sai. Có khi họ cầu pháp Đại thừa nhưng tâm không kiên định.",
    },
  },
  {
    question: "Trong ba món tâm của vị Thập tín, 'Trực tâm' có nghĩa là gì?",
    options: {
      a: "Tâm thề nguyện cứu độ tất cả chúng sanh.",
      b: "Tâm trực niệm chân như pháp tánh.",
      c: "Tâm ưa thích làm các việc lành để giúp người.",
      d: "Tâm luôn ngay thẳng trong lời nói và hành động.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là Đại bi tâm.",
      b: "Đúng. Trực tâm nghĩa là tâm trực niệm (quán thẳng) chân như pháp tánh.",
      c: "Sai. Đây là Thâm tâm.",
      d: "Sai. Trực tâm trong đạo Phật hướng về bản thể, không chỉ là thái độ đạo đức.",
    },
  },
  {
    question: "Văn bản dùng hình ảnh nào để giải thích lý do tại sao sẵn có Chân như thanh tịnh mà vẫn cần tu các phương tiện lành?",
    options: {
      a: "Mặt trời bị mây mù che khuất.",
      b: "Gương bẩn cần được lau chùi thường xuyên.",
      c: "Nước đục cần được lọc bằng chất thanh lọc.",
      d: "Ngọc ma ni bị lẫn trong khoáng nhơ bẩn.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Thí như ngọc ma ni thể chất trong sạch nhưng lẫn lộn trong khoáng nhơ, nếu không mài giũa (tu tập phương tiện lành) thì không thể lấy được chất ngọc thuần tịnh (Chân như).",
    },
  },
  {
    question: "Mục đích chính của 'Phương tiện căn bản' trong bốn món phương tiện là gì?",
    options: {
      a: "Chỉ chuyên quán về tánh 'Không' để nhanh chóng thoát khỏi luân hồi.",
      b: "Tùy thuận tính vô trụ để không mắc vào sanh tử cũng không trụ Niết bàn.",
      c: "Ngăn chặn các tội ác từ trong ý nghĩ để làm sạch thân tâm.",
      d: "Tập trung hoàn toàn vào việc thiền định để chứng đắc các thần thông.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Nếu chỉ quán 'Không' sẽ rơi vào bệnh trầm không thú tịch của Nhị thừa.",
      b: "Đúng. Quán tánh vô sanh (Không) để lìa vọng chấp khỏi sanh tử, đồng thời quán nhân duyên (Có) để khởi đại bi tu hạnh lành. Tùy thuận tính vô trụ nên 'không mắc vòng sanh tử, không an trụ Niết bàn'.",
      c: "Sai. Đây là 'Phương tiện ngăn ngừa tội ác'.",
      d: "Sai.",
    },
  },
  {
    question: "Theo phương tiện thứ hai, làm thế nào để các tội lỗi đã lỡ phạm không còn tăng trưởng?",
    options: {
      a: "Biết ăn năn hối hận những lỗi đã làm.",
      b: "Biết hổ thẹn trước khi định làm việc xấu.",
      c: "Thực hiện cúng dường thật nhiều tài sản cho Tam bảo.",
      d: "Nhờ sức gia hộ của chư Phật để tiêu trừ hết nghiệp.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Biết xấu xa hổ thẹn thì ngăn chặn việc ác phát sinh, còn biết 'ăn năn hối hận' những tội đã làm thì yếu tố đó làm cho tội lỗi không tăng trưởng nữa.",
      b: "Sai. Hổ thẹn là để ngăn ngừa tội ác mới phát sinh.",
      c: "Sai. Đây thuộc phương tiện thứ 3.",
      d: "Sai. Đây là tác dụng phụ của phương tiện thứ 3.",
    },
  },
  {
    question: "Việc 'Siêng năng lễ bái' trong phương tiện thứ ba giúp hành giả xa lìa căn bệnh tâm lý nào?",
    options: {
      a: "Bệnh hủy báng.",
      b: "Bệnh ngã mạn.",
      c: "Bệnh tật đố.",
      d: "Bệnh si mê.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Tán thán mới trừ bệnh hủy báng.",
      b: "Đúng. Lễ bái thì xa lìa được cái bệnh ngã mạn.",
      c: "Sai. Tùy hỷ mới trừ bệnh tật đố.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao các vị Bồ Tát ở địa vị Thập trụ dù đã thấy Pháp thân nhưng vẫn còn chịu 'khổ vi tế'?",
    options: {
      a: "Vì các Ngài bị nghiệp lực kéo dẫn vào vòng sanh tử.",
      b: "Vì các Ngài cảm thấy lo sợ khi nghe về thời gian tu hành quá dài.",
      c: "Vì các nghiệp hữu lậu từ quá khứ chưa được đoạn trừ hết.",
      d: "Vì các Ngài chưa phát được ba món tâm: Trực tâm, Thâm tâm, Đại bi tâm.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Bồ Tát thọ sanh do đại nguyện, không do nghiệp lực kéo dẫn.",
      b: "Sai. Các Ngài đã hiểu tánh Niết Bàn nên không lo sợ.",
      c: "Đúng. Vì các nghiệp hữu lậu từ vô lượng kiếp chưa đoạn trừ được hoàn toàn nên dù thọ sanh bằng đại nguyện vẫn còn khổ vi tế.",
      d: "Sai. Các Ngài đã phát ba món tâm rồi mới vào được Thập trụ.",
    },
  },
  {
    question: "Phát biểu nào sau đây đúng nhất về việc Bồ Tát thị hiện 'Tám tướng thành đạo'?",
    options: {
      a: "Việc thị hiện tám tướng là bắt buộc do nghiệp lực quá khứ thúc đẩy.",
      b: "Chỉ những vị đã viên mãn Thập tín và bước vào Thập trụ mới có thể thị hiện.",
      c: "Tám tướng này chỉ xuất hiện khi Bồ Tát đã hoàn toàn nhập Niết bàn.",
      d: "Tất cả mọi chúng sanh ngay khi mới phát tâm đều hiện được tám tướng.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Là do thệ nguyện cứu độ, không phải nghiệp lực.",
      b: "Đúng. Bồ Tát viên mãn Thập tín (phát 3 tâm) rồi vào Thập trụ, thấy được phần nào Pháp thân mới có thể dùng nguyện lực thị hiện tám tướng thành đạo làm lợi ích chúng sanh.",
      c: "Sai. Quá trình thành đạo diễn ra trước khi chứng vô dư Niết bàn.",
      d: "Sai. Phải đạt đến một trình độ nhất định mới thị hiện được.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-13-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-13-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 13 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 15,
  createdAt: '2026-08-01',
  updatedAt: '2026-08-01',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-13-phan-giai-thich-tiep-theo/H%C3%A0nh_tr%C3%ACnh_T%C3%ADn_t%C3%A2m_%C4%90%E1%BA%A1i_Th%E1%BB%ABa.png',
      readingContent,
      tableOfContents: [
        { id: 'phan-biet-hanh-tuong-phat-tam', label: 'C. Phân biệt hành tướng phát tâm đến đạo (bài thứ nhất)' },
        { id: 'ba-mon-phat-tam', label: 'BA MÓN PHÁT TÂM', indent: 1 },
        { id: 'tin-hoan-toan', label: 'I. Tín hoàn toàn mà phát tâm', indent: 2 },
        { id: 'hieu-biet-va-lam', label: 'II. Hiểu biết và làm mà phát tâm', indent: 2 },
        { id: 'chung-nhap-chan-nhu', label: 'III. Chứng nhập chân như mà phát tâm.', indent: 2 },
        { id: 'tin-hoan-toan-phat-tam', label: '1. Nói về Tín hoàn toàn mà phát tâm', indent: 1 },
        { id: 'ba-mon-tam-thap-tin', label: 'a. Ba món tâm trong vị Thập tín', indent: 2 },
        { id: 'bon-mon-phuong-tien', label: 'b. Bốn món phương tiện', indent: 2 },
        { id: 'pt-can-ban', label: 'Phương tiện căn bản', indent: 3 },
        { id: 'pt-ngan-ngua', label: 'Phương tiện ngăn ngừa các tội ác', indent: 3 },
        { id: 'pt-phat-sanh', label: 'Phương tiện làm phát sanh các việc lành', indent: 3 },
        { id: 'pt-dai-nguyen', label: 'Phương tiện Đại nguyện và Bình đẳng', indent: 3 },
        { id: 'tam-tuong-thanh-dao', label: 'c. Tám tướng thành đạo', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-13-phan-giai-thich-tiep-theo/H%C3%A0nh_Tr%C3%ACnh_T%E1%BB%89nh_Th%E1%BB%A9c_%C4%90%E1%BA%A1i_Th%E1%BB%ABa.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/h4aVI6esofY',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5aoTeu5vGevmUlOYvgJkyu',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài Thứ 13',
    passPercentage: 70,
    questions,
  },
}


export default lesson