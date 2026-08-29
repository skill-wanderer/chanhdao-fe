import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="b-phan-chanh-ton" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ HAI: B - Phần Chánh tôn</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="hai-cau-quan-trong" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">1. ÔNG TU BỒ ĐỀ HỎI PHẬT HAI CÂU QUAN TRỌNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Khi đó, ở trong đại chúng, ông Trưởng lão Tu Bồ Đề đứng dậy, vén tay áo bên hữu, gối quỳ xuống, chắp tay cung kính và bạch Phật rằng:</p>
      <p>"Hy hữu thay Đức Thế Tôn ! Ngài thường nhớ nghĩ và bảo hộ các vị Bồ tát. Ngài rất hay khéo dạy bảo các vị Bồ Tát .</p>
      <p>Bạch Thế Tôn ! Nếu có người phát tâm Bồ Đề muốn cầu quả Phật, thì:</p>
      <p class="mb-0">Làm sao hàng phục vọng tâm ?<br>Và làm sao an trụ chơn tâm ?”</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này, ông Trưởng lão Tu Bồ Đề hỏi Phật hai câu quan trọng, để mở đầu, Phật nói kinh Bát Nhã.</p>
    <p>"Hàng phục vọng tâm" và "an trụ chơn tâm" là vấn đề khó nhất. Nhưng nếu người phát tâm Bồ Đề, mà không "hàng phục được vọng tâm" và "an trụ chơn tâm" thì không bao giờ chứng đặng quả Phật.</p>
    <p>Vậy "làm sao hàng phục vọng tâm?"</p>
    <p>Và "làm sao an trụ chơn tâm?"</p>
    <p>Đó là điều quan trọng, mà ông Trưởng lão Tu Bồ Đề, đã đại diện cho toàn thể đại chúng, đứng lên cung kính hỏi Phật.</p>
    <p>Lãnh hội được diệu nghĩa của kinh này nên Ngài Xuyên Thiền sư có làm bài tụng rằng:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Nễ hỷ ngã bất hỷ</p>
          <p class="mb-0">Quân bi ngã bất bi</p>
          <p class="mb-0">Nhạn tư phi hàn bắc</p>
          <p class="mb-0">Yến ức cựu sào qui</p>
          <p class="mb-0">Thu nguyệt xuân hoa vô hạn ý</p>
          <p class="mb-0">Cá trung chỉ hứa tự gia tri</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Người vui ta chẳng vui</p>
          <p class="mb-0">Người buồn ta chẳng buồn</p>
          <p class="mb-0">Nhạn bay về biển Bắc</p>
          <p class="mb-0">Yến nhớ ổ trời Nam</p>
          <p class="mb-0">Xuân hoa thu nguyệt vô cùng ý</p>
          <p class="mb-0">Lãnh hội thế nào tự mình thôi (biết)</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý</h4>
    <p>Bài này diễn tả lý Bát Nhã vô trụ.</p>
    <p>Hai câu đầu nói về "vô trụ vô chấp". Ba câu sau tả cảnh vật thiên nhiên, như nhạn bay về biển Bắc; chim yến nhớ tổ bay về phương Nam, mùa xuân đến trăm hoa đua nở, mùa thu thì mặt trăng sáng tỏ.</p>
    <p>Bức tranh tuyệt diệu của vũ trụ bao la, vô cùng ý tứ, biểu lộ "Bát Nhã chơn như". Tự người ngộ lấy.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phat-khen-tu-bo-de" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">2. PHẬT KHEN ÔNG TU BỒ ĐỀ VÀ HỨA SẼ KHAI THỊ</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề ! Lời ông vừa hỏi thật là quí lắm ! Vậy ông hãy chăm chú nghe, ta sẽ vì các ông chỉ dạy".</p>
      <p class="mb-0">Phật dạy tiếp: "Tu Bồ Đề ! Nếu có người phát tâm Bồ Đề, muốn cầu quả Phật, thì như lời ta dạy đây mà "hàng phục vọng tâm" và "an trụ chơn tâm".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Nhờ ông Tu Bồ Đề thưa thỉnh, mà Phật nói kinh Bát Nhã, để chỉ dạy cho chúng sanh tỏ ngộ: Tự mình có tánh "Bát Nhã" và phải tự trở về với tánh "Bát Nhã" của mình; nên Phật khen câu hỏi của ông Tu Bồ Đề thật là quí lắm !</p>
    <p>Nhưng ngộ nhập được lý "Bát Nhã", không phải người vọng tâm loạn ý mà nhập được; phải người dọn mình sạch sẽ, thành tâm định ý, mới lãnh hội được, nên Phật dạy: "Phải chăm chú nghe". Và Phật hứa sẽ dạy phương pháp "hàng phục vọng tâm và an trụ chơn tâm" như sau.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="space-y-4">
        <p class="mb-0"><strong>Tâm Bồ Đề:</strong> Bồ Đề là dịch âm tiếng Phạn, dịch nghĩa là "Giác" tức là giác ngộ. Tâm Bồ Đề là tâm giác ngộ, sáng suốt; nói dễ hiểu hơn là "tâm Phật" (Phật cũng dịch là Giác).<br>Người phát tâm Phật để cầu quả Phật, tâm Bồ Đề là "Nhơn Phật", quả Bồ Đề là "quả Phật".</p>
        <p class="mb-0"><strong>Tu Bồ Đề:</strong> Tên của một vị đệ tử Phật. Trung Hoa dịch có 3 nghĩa: 1. Thiện hiện (khéo thị hiện), 2. Thiện Cát (điềm lành), 3. Không sanh (ông ưa nhập "không định" và ngộ lý "chơn không" thứ nhứt).<br>Ông Tu Bồ Đề, bên trong thì ẩn hạnh Bồ-tát, bên ngoài lại hiện tướng Thinh văn; địa vị cao, phước đức lớn, nên gọi là "Trưởng lão".</p>
        <p class="mb-0"><strong>Thế Tôn:</strong> Phật là một đấng mà tất cả chúng sanh trong thế gian và xuất thế gian đều tôn kính.</p>
      </div>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="do-sanh-khong-chap-tuong" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">3. PHẬT DẠY BỒ TÁT ĐỘ SANH KHÔNG NÊN CHẤP TƯỚNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề ! Các ông phải y như lời ta dạy đây, mà hàng phục vọng tâm của mình.</p>
      <p class="mb-0">Tu Bồ Đề ! Các vị Đại Bồ Tát phải độ tất cả các loại chúng sanh (như loài sanh trứng, loài sanh con, loài sanh chỗ ẩm thấp, loài hoá sanh, loài có sắc, loài có tưởng, loài chẳng phải không tưởng v.v...) đều được nhập Niết bàn. Bồ Tát tuy độ vô lượng vô số chúng sanh như vậy, nhưng không thấy có một chúng sanh nào được độ. Tại sao vậy? Nếu Bồ Tát còn thấy có mình độ và chúng sanh được độ, tức là Bồ Tát còn chấp bốn tướng (tướng ngã, tướng nhơn, tướng chúng sanh và tướng thọ giả) thì không phải là Bồ Tát".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dạy Bồ Tát độ sanh, phải dùng Trí huệ Bát Nhã, phá các vọng chấp ngã, nhơn v.v... đó là phương pháp "hàng phục vọng tâm".</p>
    <p>Bồ Tát muốn biết mình còn phiền não vọng chấp hay không, để diệt trừ, tất nhiên phải lao mình vào phiền não; nghĩa là phải nhập thế độ sanh, làm các Phật sự.</p>
    <p>Phật dạy Bồ Tát khi nhập thế độ sanh làm các Phật sự, luôn luôn phải dùng Trí huệ Bát Nhã phá trừ các chấp ngã, chấp pháp, không còn thấy bốn tướng (ngã nhơn v.v....) thì phiền não vọng chấp không sanh. Đó là phương pháp "hàng phục vọng tâm".</p>
    <p>Nếu Bồ Tát vừa khởi vọng chấp: "có mình độ và người được độ v.v...", tức là Bồ Tát còn ngã, nhơn, bỉ, thử, thì vô số phiền não đua nhau nổi lên như sóng. Cổ nhơn nói:</p>
    <p class="italic">"Nhất ba tài động, vạn ba tuỳ".</p>
    <p>Nghĩa là: Một lượng sóng vừa nhô lên, thì trăm ngàn lượng sóng liền theo đó mà nổi lên.</p>
    <p>Nếu Bồ Tát còn vô minh phiền não vọng chấp nổi lên, thì không phải là Bồ Tát; vì chưa nhập được Trí huệ Bát Nhã.</p>
    <p>Kinh Tứ thập nhị chương chép:</p>
    <p class="italic">"Giáo pháp của ta: "Niệm" mà không trụ chấp nơi niệm, mới thật là "Niệm". "Làm" mà không trụ chấp nơi làm, mới thật là "làm". "Nói" mà không trụ chấp nơi nói, mới thật là "nói". "Tu" mà không trụ chấp nơi tu, mới thật là "tu". "Chứng" mà không trụ chấp nơi chứng, mới thật là "chứng".</p>
    <p>Đó là tôn chỉ "vô trụ tướng" của kinh Bát Nhã.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      
      <p class="font-semibold mt-4 mb-2">Tất cả chúng sanh chia làm 9 loại:</p>
      <div class="pl-6 space-y-1 mb-4">
        <p class="mb-0"><strong>1. Loài sanh trứng (noãn sanh):</strong> như gà, vịt, chim, cò v.v...</p>
        <p class="mb-0"><strong>2. Loài sanh con (thai sanh):</strong> như người, trâu, bò v.v...</p>
        <p class="mb-0"><strong>3. Loài sanh nơi ẩm thấp (thấp sanh):</strong> như vi trùng, con lăng quăng v.v...</p>
        <p class="mb-0"><strong>4. Loài hoá sanh (hoá sanh):</strong> như cỏ mục hoá sanh đom đóm v.v...</p>
        <p class="mb-0"><strong>5. Loài có hình sắc (hữu sắc):</strong> như chúng sanh ở cõi Dục và cõi Sắc.</p>
        <p class="mb-0"><strong>6. Loài không hình sắc (vô sắc):</strong> như chúng sanh ở cõi Vô sắc v.v...</p>
        <p class="mb-0"><strong>7. Loài có tâm tưởng (hữu tưởng):</strong> như chúng sanh ở cõi trời hữu tưởng v.v...</p>
        <p class="mb-0"><strong>8. Loài không tâm tưởng (vô tưởng):</strong> như chúng sanh ở cõi vô tưởng. Chúng sanh ở cõi Dục, tu định vô tưởng, được sanh về cõi trời Vô tưởng, hưởng thọ 500 kiếp, rồi vẫn trở lại trong vòng sanh tử luân hồi.</p>
        <p class="mb-0"><strong>9. Loài chẳng phải có tưởng và chẳng phải không tưởng (phi hữu tưởng, phi vô tưởng):</strong> như chúng sanh ở cõi trời phi phi tưởng xứ, trong cõi Vô sắc. Chúng sanh ở cõi này, đồng với hư không, không có thân thể và thế giới. Họ chỉ có định không có huệ, thọ đến tám vạn kiếp, rồi trở lại đoạ về chỗ không vong.</p>
      </div>

      <p class="font-semibold mt-4 mb-2">BỐN TƯỚNG:</p>
      <p class="mb-2">Mỗi chúng sanh đều có bốn tướng: Như đối với người khác tự xưng "tôi" hay "ta", là "ngã tướng"; Ta có nhơn cách là "nhơn tướng"; Ta thuộc loài hữu tình, sanh vật là "chúng sanh tướng"; Ta có thân mạng, sống trong một thời gian là "thọ giả tướng".</p>
      <p class="mb-2">Tóm lại, phàm chấp một tướng, tất nhiên chấp đủ bốn tướng:</p>
      <div class="pl-6 space-y-1 mb-4">
        <p class="mb-0">- <strong>Ngã tướng:</strong> chấp có "ta"</p>
        <p class="mb-0">- <strong>Nhơn tướng:</strong> chấp có "loài người".</p>
        <p class="mb-0">- <strong>Chúng sanh tướng:</strong> chấp có chúng sanh.</p>
        <p class="mb-0">- <strong>Thọ giả tướng:</strong> chấp có mạng sống trong một thời gian.</p>
      </div>

      <p class="font-semibold mt-4 mb-2">NIẾT BÀN:</p>
      <p class="mb-2">Dịch âm của tiếng Phạn "Nirvana", dịch nghĩa là viên tịch: Viên mãn vắng lặng. Niết bàn có bốn loại:</p>
      <div class="pl-6 space-y-1 mb-2">
        <p class="mb-0"><strong>1.</strong> Tánh tịnh Niết bàn.</p>
        <p class="mb-0"><strong>2.</strong> Vô trụ xứ Niết bàn.</p>
        <p class="mb-0"><strong>3.</strong> Hữu dư Niết bàn.</p>
        <p class="mb-0"><strong>4.</strong> Vô dư Niết bàn.</p>
      </div>
      <p class="mb-0 text-sm opacity-80">(Xem đoạn Diệt đế trong quyển Tứ diệu đế).</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="bo-thi-khong-chap-tuong" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">4. PHẬT DẠY BỒ TÁT BỐ THÍ KHÔNG NÊN CHẤP TƯỚNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề ! Bồ Tát khi tu pháp Bố thí, không nên trụ chấp các tướng; nghĩa là không nên trụ chấp tướng sáu trần là: sắc, thinh, hương, vị, xúc và pháp. Tại sao vậy? Nếu Bồ Tát bố thí mà không chấp tướng bố thí, thì phước đức nhiều lắm, không thể nghĩ bàn".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn trên (đoạn 3), Phật dạy Bồ Tát khi độ sanh, phải dùng Trí huệ Bát Nhã phá trừ "ngã chấp", tức là không chấp bốn tướng: ngã, nhơn, chúng sanh và thọ giả.</p>
    <p>Đoạn này, Phật dạy Bồ Tát khi bố thí, cũng phải dùng Trí huệ Bát Nhã, phá trừ "pháp chấp"; nghĩa là không chấp tướng sáu trần: sắc, thinh, hương, vị, xúc và pháp. Đó là phương pháp "hàng phục vọng tâm".</p>
    <p>Bồ Tát làm Phật sự, như hoá độ chúng sanh hay bố thí v.v... mà tâm còn chấp ngã chấp pháp, tất nhiên tâm còn phiền não nhiễm ô mà làm các Phật sự (phước thiện), thì các Phật sự đó cũng biến thành nhiễm ô; cũng như đem đồ nhơ bẩn mà đựng vật tinh khiết, thì vật tinh khiết trở thành nhơ bẩn, nên hành giả chỉ hưởng phước hữu lậu nhiễm ô; nghĩa là phước báu nhơn thiên ở thế gian, hưởng có thời hạn; như hư không bị cuộc hạn trong ly nhỏ.</p>
    <p>Trái lại, khi làm các Phật sự, như bố thí v.v... nếu Bồ Tát dùng Trí huệ Bát Nhã, phá trừ chấp ngã, chấp pháp; nghĩa là không chấp mình là người bố thí, ban ơn (chấp ngã), kia là kẻ thọ thí, chịu ơn (chấp nhơn), đây là vật bố thí (chấp pháp), thì các phiền não nhiễm ô không sanh, tâm được thanh tịnh. Tâm thanh tịnh tức là tâm Phật hay tâm chơn như, rộng rãi bao la, như mười phương hư không. Nếu đem tâm thanh tịnh mà bố thí, thì hành giả được phước vô lậu thanh tịnh, rộng lớn như hư không, không cùng tận. Cũng như một giọt nước tuy nhỏ (bố thí ít), nhưng được hoà vào biển cả (tâm tịnh) thì cũng được biến khắp cả biển, rộng rãi bao la.</p>
    <p>Bởi thế nên Phật dạy: Bồ Tát khi bố thí phải "tam luân không tịch", nghĩa là không thấy (chấp) có mình ban ơn, kẻ chịu ơn và vật bố thí. Như thế mới gọi là "Bố thí Ba la mật" (Bố thí rốt ráo).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phuoc-nhieu-nhu-hu-khong" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">5. BỐ THÍ KHÔNG CHẤP TƯỚNG PHƯỚC NHIỀU NHƯ MƯỜI PHƯƠNG HƯ KHÔNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề ! Hư không ở phương Đông có thể nghĩ bàn được không?". Tu Bồ Đề thưa: "Bạch Thế Tôn ! Không thể nghĩ bàn được".</p>
      <p>Phật hỏi tiếp: "Hư không phương Tây, phương Nam, phương Bắc, phương trên, phương dưới và bốn góc, có thể nghĩ bàn được không?" Tu Bồ Đề thưa: "Bạch Thế Tôn ! Không thể nghĩ bàn được".</p>
      <p class="mb-0">Phật dạy: "Tu Bồ Đề ! Bồ Tát bố thí, không trụ chấp các tướng, đặng phước đức cũng như mười phương hư không, nghĩa là nhiều lắm không thể nghĩ bàn".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này tiếp theo đoạn trên (đoạn 4), Phật dùng mười phương hư không, để thí dụ phước đức của người bố thí không chấp tướng.</p>
    <p>Phật dạy, Bồ Tát không chấp tướng bố thí, hay nói cách khác là đúng như Trí huệ Bát Nhã mà làm việc bố thí, thì được phước đức vô lậu thanh tịnh và nhiều như mười phương hư không, không có cùng tận.</p>
    <p>-Thế nào là phước hữu lậu nhiễm ô, có cùng tận?</p>
    <p>Và thế nào là phước vô lậu thanh tịnh, không cùng tận?</p>
    <p>Chúng tôi xin dẫn một thí dụ làm điển hình, để giải thích vấn đề này:</p>
    <p>Có hai gia đình nghèo khó, đồng gặp một hoàn cảnh như nhau, trong nhà đều có tai nạn. Cả hai đều đến hai nhà khá giả để mượn tiền. Một nhà khá giả có tâm tham, thủ lợi, nên khi đưa của ra đòi có lời. Nhà khá giả thứ hai có tâm từ bi, thương người nghèo khổ lại gặp tai nạn, nên cho mượn không, chẳng nghĩ đến việc cảm ơn hay tiền lời.</p>
    <p>Đúng kỳ hẹn, cả hai gia đình tai nạn đều đem số tiền trả cho hai người khá giả. Người khá giả tham lợi, nhận thêm số tiền lời chi tiêu ít ngày hết. Thế là hai bên không còn ơn ích gì nhau nữa cả. Người khá giả thứ hai, vì tâm nhơn từ giúp người không cầu danh lợi, nên được người khốn khó kia nhớ ơn và kính thương mãi mãi.</p>
    <p>Đến khi nước nhà bị giặc giã, cả hai nhà khá giả đều tản cư. Gia đình người tham lợi, tìm người giúp đỡ không ra; đến cậy anh vay tiền lúc trước cũng không được. Đây là dụ cho phước hữu lậu nhiễm ô (đem tâm tham làm phước) có cùng tận.</p>
    <p>Trái lại, gia đình người nhơn từ, được người nghèo khó thọ ơn trước kia, tình nguyện hy sinh giúp đỡ mãi mãi không tính tiền công. Đây là dụ cho phước vô lậu thanh tịnh (đem tâm từ bi làm phước) không cùng tận.</p>
    <p>Tóm lại, nếu hành giả đem tâm phiền não nhiễm ô (tham, sân, si v.v...) mà làm các Phật sự, thì chỉ hưởng phước ô trược hữu lậu của nhơn thiên, có cùng tận.</p>
    <p>Trái lại, nếu hành giả đem tâm thanh tịnh (từ bi, Trí huệ, không cầu danh lợi v.v...) mà làm các Phật sự, thì hưởng phước vô lậu thanh tịnh của Phật, không cùng tận.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="an-tru-chon-tam" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">6. PHẬT DẠY AN TRỤ CHƠN TÂM</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Tóm lại, Phật dạy: "Tu Bồ Đề ! Các vị Bồ Tát phải y như lời ta dạy đó mà an trụ chơn tâm".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật tóm kết lại hai đoạn trên, để trả lời câu hỏi của ông Tu Bồ Đề: "Làm sao an trụ chơn tâm".</p>
    <p>Phật dạy: "Các vị Bồ Tát độ vô lượng vô biên chúng sanh đều được nhập Niết bàn, nhưng không thấy có một chúng sanh nào được độ"; và "Bồ Tát tu pháp bố thí, không nên trụ chấp các tướng như sắc, thinh, hương, vị, xúc và pháp", nghĩa là Bồ Tát không chấp ngã (khi độ sanh) không chấp pháp (khi bố thí); đó là phương pháp "hàng phục vọng tâm" mà cũng là "an trụ chơn tâm".</p>
    <p>Nếu Bồ Tát độ sanh và làm các Phật sự, mà còn khởi vọng tâm, chấp nơi các tướng (ngã, nhơn v.v...) thì các phiền não tham, sân, si đua nhau nổi lên. Nếu tham, sân, si đã nổi thì làm sao không khởi tạo nghiệp sanh tử luân hồi.</p>
    <p>Trái lại, nếu Bồ Tát độ sanh hay làm các Phật sự, mà không khởi vọng tâm, chấp các tướng ngã, pháp v.v... thì các phiền não không sanh. Phiền não không sanh, thì không tạo nghiệp. Nghiệp không tạo thì không còn sanh tử luân hồi.</p>
    <p>Tóm lại, Phật dạy: "Đừng trụ chấp một nơi nào". Đó là phương pháp "hàng phục vọng tâm" và "an trụ chơn tâm" của hàng Đại thừa Bồ Tát.</p>
    <p>Ngài Long Tế Hoà thượng ngộ được lý "vô trụ" của kinh Bát Nhã, nên có làm bài tụng rằng:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Tâm cảnh đốn tiêu dung</p>
          <p class="mb-0">Phương minh sắc dữ không</p>
          <p class="mb-0">Dục thức bổn lai thể</p>
          <p class="mb-0">Thanh sơn bạch vân trung</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Không còn chấp tâm và cảnh</p>
          <p class="mb-0">Mới ngộ được lý sắc, không</p>
          <p class="mb-0">Muốn biết bổn lai bản thể</p>
          <p class="mb-0">Kìa, mây trắng với non xanh.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý</h4>
    <p>Muốn ngộ được lý "sắc tức thị không, không tức thị sắc", thì phải trừ các vọng chấp ngã (tâm) và pháp (cảnh). Muốn biết bản thể Bát Nhã chơn không, xưa nay như thế nào, thì cứ xem "Kìa, mây trắng với non xanh".</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong phần Chánh Tôn của bài học, ông Trưởng lão Tu Bồ Đề đã hỏi Đức Phật hai câu hỏi quan trọng nào?",
    options: {
      a: "Làm sao để bố thí được nhiều phước và làm sao để độ hết chúng sanh?",
      b: "Làm sao hàng phục vọng tâm và làm sao an trụ chơn tâm?",
      c: "Làm sao để tu tập thiền định và làm sao để hiểu được tính không?",
      d: "Làm sao để thoát khỏi luân hồi và làm sao để chứng quả A La Hán?",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Ông Tu Bồ Đề hỏi: 'Làm sao hàng phục vọng tâm? Và làm sao an trụ chơn tâm?'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo lời dạy của Đức Phật, tại sao một vị Bồ Tát độ vô số chúng sanh nhưng lại không thấy có chúng sanh nào được độ?",
    options: {
      a: "Vì nếu còn thấy có người được độ thì Bồ Tát vẫn còn chấp vào bốn tướng.",
      b: "Vì số lượng chúng sanh quá lớn không thể đếm xuể.",
      c: "Vì Bồ Tát chỉ lo tu tập cho bản thân chứ không quan tâm đến kết quả độ sanh.",
      d: "Vì chúng sanh vốn dĩ đã tự giải thoát từ trước.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Phật dạy nếu Bồ Tát còn thấy có mình độ và chúng sanh được độ, tức là Bồ Tát còn chấp bốn tướng (ngã, nhơn, chúng sanh, thọ giả) thì không phải là Bồ Tát.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khái niệm 'Ngã tướng' trong bốn tướng được giải thích như thế nào?",
    options: {
      a: "Chấp có 'tôi' hay 'ta', phân biệt mình với người khác.",
      b: "Chấp vào nhơn cách và phẩm giá của loài người.",
      c: "Chấp có mạng sống tồn tại trong một khoảng thời gian.",
      d: "Chấp vào việc mình thuộc loài hữu tình.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Như đối với người khác tự xưng 'tôi' hay 'ta', phân biệt mình và người, đó là 'ngã tướng'.",
      b: "Sai. Đây là Nhơn tướng.",
      c: "Sai. Đây là Thọ giả tướng.",
      d: "Sai. Đây là Chúng sanh tướng.",
    },
  },
  {
    question: "Khi thực hiện pháp Bố thí, Đức Phật dạy Bồ Tát không nên trụ chấp vào các tướng của 'sáu trần'. Sáu trần bao gồm những yếu tố nào?",
    options: {
      a: "Nhãn, nhĩ, tỷ, thiệt, thân, ý.",
      b: "Tham, sân, si, mạn, nghi, ác kiến.",
      c: "Ngã, nhơn, chúng sanh, thọ giả, sắc, không.",
      d: "Sắc, thinh, hương, vị, xúc, pháp.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây là lục căn.",
      b: "Sai. Đây là căn bản phiền não.",
      c: "Sai.",
      d: "Đúng. Sáu trần là: sắc, thinh, hương, vị, xúc và pháp.",
    },
  },
  {
    question: "Tại sao phước đức của việc bố thí không chấp tướng lại được ví như mười phương hư không?",
    options: {
      a: "Vì hư không là một trong chín loại chúng sanh được độ.",
      b: "Vì hư không là nơi chứa đựng mọi báu vật trên thế gian.",
      c: "Vì Đức Phật muốn khuyên người ta không nên coi trọng vật chất.",
      d: "Vì khi tâm không chấp tướng, tâm trở nên thanh tịnh và rộng lớn vô cùng tận.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Khi bố thí không chấp tướng, tâm được thanh tịnh rộng rãi bao la. Nếu đem tâm thanh tịnh rộng lớn như hư không đó mà bố thí, thì phước vô lậu cũng rộng lớn không cùng tận như hư không.",
    },
  },
  {
    question: "Trong ví dụ về hai gia đình khá giả cho mượn tiền, gia đình cho mượn có tính lãi đại diện cho điều gì?",
    options: {
      a: "Sự trí tuệ trong việc quản lý tài sản.",
      b: "Tâm Bồ Đề của hàng Thinh văn.",
      c: "Phước hữu lậu nhiễm ô.",
      d: "Phước vô lậu thanh tịnh.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Gia đình cho mượn có tâm tham thủ lợi (tính lãi) dụ cho việc làm phước với tâm phiền não nhiễm ô, phước này có cùng tận (hữu lậu).",
      d: "Sai.",
    },
  },
  {
    question: "Thuật ngữ 'Tam luân không tịch' trong bố thí có nghĩa là gì?",
    options: {
      a: "Bố thí cho ba loại chúng sanh: noãn sanh, thai sanh và thấp sanh.",
      b: "Ba lần thực hiện bố thí với tâm vắng lặng.",
      c: "Sự bố thí được thực hiện bởi ba vị Bồ Tát khác nhau.",
      d: "Không thấy có người bố thí, người nhận bố thí và vật bố thí.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Bồ Tát khi bố thí phải 'tam luân không tịch', nghĩa là không thấy (chấp) có mình ban ơn, kẻ chịu ơn và vật bố thí.",
    },
  },
  {
    question: "Loài chúng sanh 'Phi hữu tưởng phi vô tưởng' được mô tả như thế nào trong văn bản?",
    options: {
      a: "Sống ở cõi Dục, hưởng thọ 500 kiếp rồi luân hồi.",
      b: "Loài có hình sắc rõ rệt sống ở cõi Sắc.",
      c: "Sống trong chỗ ẩm thấp như vi trùng hay lăng quăng.",
      d: "Đồng với hư không, không có thân thể, có định nhưng không có huệ.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây là loài sống ở cõi Vô tưởng.",
      b: "Sai. Đây là loài hữu sắc.",
      c: "Sai. Đây là loài thấp sanh.",
      d: "Đúng. Loài phi hữu tưởng phi vô tưởng ở cõi Vô sắc, đồng với hư không, không có thân thể và thế giới, chỉ có định không có huệ.",
    },
  },
  {
    question: "Theo bài tụng của Ngài Long Tế Hòa thượng, để ngộ được lý 'sắc dữ không' (sắc và không), hành giả cần phải làm gì?",
    options: {
      a: "Chỉ tập trung vào việc ngắm nhìn mây trắng và non xanh.",
      b: "Phân biệt rõ ràng giữa cái tâm bên trong và cảnh vật bên ngoài.",
      c: "Tiêu dung sự chấp trước vào tâm và cảnh.",
      d: "Tìm kiếm bản thể Bát Nhã ở nơi xa xôi, hẻo lánh.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đó là ẩn dụ của câu cuối.",
      b: "Sai. Phân biệt sẽ sinh ra chấp trước.",
      c: "Đúng. 'Tâm cảnh đốn tiêu dung / Phương minh sắc dữ không' (Không còn chấp tâm và cảnh, Mới ngộ được lý sắc không).",
      d: "Sai.",
    },
  },
  {
    question: "Tôn chỉ 'vô trụ tướng' trong kinh Bát Nhã được thể hiện như thế nào trong việc tu hành theo Kinh Tứ thập nhị chương?",
    options: {
      a: "Niệm, làm, nói, tu, chứng mà không trụ chấp nơi những việc đó.",
      b: "Chỉ cần niệm Phật là đủ, không cần làm các việc khác.",
      c: "Phải ghi nhớ thật kỹ những gì mình đã tu chứng để bảo vệ đạo quả.",
      d: "Phải từ bỏ mọi việc làm, lời nói và suy nghĩ.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Kinh Tứ thập nhị chương chép: 'Niệm mà không trụ chấp nơi niệm... Làm mà không trụ chấp nơi làm... Tu mà không trụ chấp nơi tu...'. Đó là tôn chỉ vô trụ tướng.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai. Đạo Phật không dạy từ bỏ hành động, mà dạy làm nhưng không trụ chấp.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-2-b-phan-chanh-ton',
  slug: 'bai-thu-2-b-phan-chanh-ton',
  title: 'Bài Thứ 2 - B- Phần Chánh tôn',
  type: 'article',
  status: 'published',
  order: 6,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-2-phan-chanh-ton/B%C3%AD_Quy%E1%BA%BFt_An_Tr%E1%BB%A5_T%C3%A2m.png',
      readingContent,
      tableOfContents: [
        { id: 'b-phan-chanh-ton', label: 'B. Phần Chánh tôn' },
        { id: 'hai-cau-quan-trong', label: '1. Ông Tu Bồ Đề hỏi Phật hai câu quan trọng', indent: 1 },
        { id: 'phat-khen-tu-bo-de', label: '2. Phật khen ông Tu Bồ Đề và hứa sẽ khai thị', indent: 1 },
        { id: 'do-sanh-khong-chap-tuong', label: '3. Phật dạy Bồ tát hóa độ chúng sanh không nên chấp tướng', indent: 1 },
        { id: 'bo-thi-khong-chap-tuong', label: '4. Phật dạy Bồ tát bố thí không nên chấp tướng', indent: 1 },
        { id: 'phuoc-nhieu-nhu-hu-khong', label: '5. Bố thí không chấp tướng, phước nhiều như mười phương hư không', indent: 1 },
        { id: 'an-tru-chon-tam', label: '6. Phật dạy an trụ chơn tâm', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-2-phan-chanh-ton/The_Art_of_Non-Abiding.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/zXIZ1jA-t0A',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5tf0WoXExmhxXYHCknVPiP',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 2',
    passPercentage: 70,
    questions,
  },
}

export default lesson