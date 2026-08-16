import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="b-phan-chanh-ton-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ SÁU: B- Phần Chánh tôn (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="cong-duc-tho-tri" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">26. PHẬT NÓI CÔNG ĐỨC THỌ TRÌ KINH KIM CANG BÁT NHÃ</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Nếu có người tự đem thân mạng mình, nhiều như cát sông Hằng để bố thí, thì người đó phước đức nhiều lắm. Nhưng nếu có người thọ trì đọc tụng hay giảng dạy kinh này, trọn quyển hay nửa quyển, cho đến tối thiểu là bốn câu kệ, thì phước đức người này nhiều hơn người trước".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Kinh này rất quý báu và lợi ích vô cùng, nên Phật đã nhiều lần tán thán công đức, khuyên người thọ trì và giảng dạy cho người. Từ trước đến đây đã năm lần nói về công đức của kinh này.</p>
    <p>Đoạn trước (19) nói, người dùng ngoại tài là 7 món báu, nhiều như số cát sông Hằng đem bố thí, phước đức của người này tuy nhiều, nhưng không bằng người thọ trì và giảng dạy kinh Kim Cang Bát Nhã phước đức lại nhiều hơn.</p>
    <p>Đoạn này nói, người đem nội tài là thân mạng của mình ra bố thí; chỉ bố thí một thân mạng phước đức đã nhiều và ít ai làm được, huống chi là bố thí thân mạng của mình nhiều như số cát sông Hằng, thì phước đức biết là bao nhiêu!</p>
    <p>Nhưng nếu có người thọ trì đọc tụng hoặc giảng dạy kinh này từ một quyển hay nửa quyển cho đến tối thiểu là bốn câu kệ, thì người này phước đức nhiều hơn người trước.</p>
    <p>Bố thí thân mạng, tuy ít người làm được, nhưng phước đức vẫn còn ở trong vòng hữu vi và hữu lậu. Người thọ trì đọc tụng hoặc giảng dạy kinh này, thì mình và người đều được ngộ nhập "Kim Cang Bát Nhã" và sẽ được thành Phật; rồi trở lại hóa độ vô số chúng sanh, nên phước đức của người này, thuộc về vô lậu vô vi, nhiều hơn người trước.</p>

    <p class="font-semibold mt-6">Nói về công đức thọ trì kinh này, Ngài Trí Giả Đại sư có làm bài tụng:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Hằng sa số thậm đa</p>
          <p class="mb-0">Sa số cánh nan lương</p>
          <p class="mb-0">Cử sa tề thất bảo</p>
          <p class="mb-0">Năng trì bố thí tương</p>
          <p class="mb-0">Hữu tướng giai vi huyễn</p>
          <p class="mb-0">Đồ ngôn Trí huệ cường</p>
          <p class="mb-0">Nhược luận tứ cú đệ</p>
          <p class="mb-0">Thử phước mạt vi tường</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Kể sông Hằng đã quá</p>
          <p class="mb-0">Số cát lại nhiều hơn</p>
          <p class="mb-0">Chứa báu nhiều như thế</p>
          <p class="mb-0">Thí tài số biết bao</p>
          <p class="mb-0">Chấp mê theo giả tướng</p>
          <p class="mb-0">Dẫu đặng phước huệ cao</p>
          <p class="mb-0">Sánh với bốn câu kệ</p>
          <p class="mb-0">Phước kia có chút nào</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài tụng</h4>
    <p>Chỉ đếm sông Hằng đã không hết, huống chi là đếm số cát trong vô số sông Hằng. Người đem của báu nhiều bằng số cát trong vô số sông Hằng ra bố thí, phước đức tuy nhiều, nhưng thuộc hữu vi, hữu lậu.</p>
    <p>Không bằng người thọ trì hoặc giảng dạy kinh này chừng bốn câu, thì phước đức nhiều hơn người trước.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="tu-bo-de-cam-dong" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">27. ÔNG TU BỒ ĐỀ BÙI NGÙI CẢM ĐỘNG RƠI NƯỚC MẮT</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Sau khi thấy Phật nhiều lần ân cần, nhắc nhở khuyên dạy, ông Tu Bồ Đề nghe hiểu được nghĩa lý thâm thúy của Kinh này, nên lúc bấy giờ, ông cảm động bùi ngùi và sa nước mắt!...</p>
      <p class="mb-0">Ông Tu Bồ Đề bạch Phật rằng: "Bạch Thế Tôn! Con tuy đặng huệ nhãn đã lâu, nhưng từng được nghe Phật nói kinh điển, nghĩa lý cao siêu huyền diệu, quý báu như thế này!".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Chúng ta mỗi khi bị xúc cảm một việc gì quá mạnh, hoặc buồn hay vui, đều có rưng nước mắt. Ông Tu Bồ Đề vì thấy Phật đã nhiều lần ân cần nhắc nhở thọ trì và khuyên dạy những nghĩa lý thâm thúy cao siêu của kinh này, mà từ hồi nào đến giờ ông chưa từng được nghe, nên ông cảm động rơi nước mắt.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="cong-duc-thu-nhat" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">28. NGƯỜI NGHE KINH NÀY SANH LÒNG TIN NGƯỜI ẤY ĐẶNG CÔNG ĐỨC THỨ NHẤT</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Ông Tu Bồ Đề thưa Phật: "Bạch Thế Tôn! Nếu có người nghe Kinh này, sanh lòng tin trong sạch, ngộ được thật tướng (tánh Bát Nhã) thì người ấy sẽ đặng thành tựu công đức hy hữu thứ nhất.</p>
      <p class="mb-0">Bạch Thế Tôn! Như Lai nói "thật tướng" tức là không phải "thật tướng", chỉ tạm gọi là "thật tướng".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này ông Tu Bồ Đề nói: người nghe kinh này mà ngộ được "thật tướng Bát Nhã", thì người ấy đặng công đức hy hữu. Và ông phá luôn cái chấp "thật tướng".</p>
    <p>Người có cái khiếu (theo Duy thức học gọi là hạt giống) âm nhạc, nghe âm nhạc mới biết hay. Người có cái khiếu thi thơ, nghe thi thơ mới biết thích.</p>
    <p>Cũng thế, người có cái khiếu hay hạt giống Bát Nhã, nghe đến kinh Bát Nhã mới sanh lòng tin và ngộ nhập được "Thật tướng Bát Nhã". Bởi thế nên người này công đức vô lượng.</p>
    <p>Vừa nói đến "thật tướng", ông Tu Bồ Đề sợ người chấp "thật tướng", nên ông liền phá luôn cái chấp ấy, bằng cách dẫn lời Phật dạy: "Như Lai nói thật tướng, tức là không phải thật tướng, chỉ tạm gọi là thật tướng".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <p class="font-semibold mb-2">THẬT TƯỚNG:</p>
      <p class="mb-0">Phật nói: "Phàm sở hữu tướng giai thị hư vọng" (phàm cái gì có hình tướng đều là hư vọng).</p>
      <p class="mb-0 mt-2">Vậy thì cái không hình tướng mới là chơn thật. Kinh chép: "Vô tướng chi tướng, cố danh thật tướng" (cái tướng mà không có hình tướng mới gọi là thật tướng).</p>
      <p class="mb-0 mt-2">Căn cứ theo lời giải thích này, thì "thật tướng" là không còn các vọng tướng và vọng chấp, tức là "Bát Nhã chơn không".</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="nguoi-co-hat-giong-bat-nha" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">29. NGƯỜI CÓ HẠT GIỐNG BÁT NHÃ MỚI TIN VÀ HIỂU ĐƯỢC KINH NÀY</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Ông Tu Bồ Đề thưa: "Bạch Thế Tôn! Hiện nay con nghe đặng kinh này, hiểu được, tin được và thọ trì, chẳng lấy làm khó. Khi Đức Như Lai nhập diệt, 500 năm về sau, nếu có người nghe kinh này, mà được hiểu ngộ, tin theo và thọ trì, thì người đó mới là hy hữu!</p>
      <p>Tại sao vậy? Vì người này không còn chấp bốn tướng: ngã, nhơn, chúng sanh và thọ giả.</p>
      <p class="mb-0">Bạch Thế Tôn! Nói bốn tướng, không phải thật có bốn tướng, chỉ giả gọi bốn tướng là ngã, nhơn, chúng sanh và thọ giả. Tại sao vậy? - Vì phải xa lìa tất cả các chấp tướng, mới gọi là chư Phật".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này tiếp với đoạn văn trên, nói người có hạt giống Trí huệ Bát Nhã, phá trừ được bốn tướng, mới tin và hiểu được kinh này.</p>
    <p>Khi Phật còn tại thế, chúng sanh căn tánh Đại thừa rất nhiều, nên nghe kinh này hiểu và tin không khó. Đến sau khi Phật nhập diệt, chúng sanh căn tánh Đại thừa rất ít, nên nghe hiểu và tin được kinh này rất khó. Vì người nghe phải không còn chấp bốn tướng: ngã, nhơn, chúng sanh và thọ giả, mới hiểu được kinh Kim Cang Bát Nhã này.</p>
    <p>Nói đến bốn tướng, ông Tu Bồ Đề sợ người chấp thật có bốn tướng, nên ông liền bác rằng: "Nói bốn tướng, không phải thật có bốn tướng, chỉ giả gọi bốn tướng mà thôi".</p>
    <p>Kết luận, ông nói rằng: "Phải rời tất cả các vọng chấp, vọng tướng, ngộ nhập Kim Cang Bát Nhã, mới gọi là chư Phật".</p>

    <p class="font-semibold mt-6">Ngài Cảo Thiền sư, ngộ được câu: "Lìa tất cả các vọng chấp, mới là chư Phật", nên có làm hai bài tụng rằng:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Thân khẩu ý thanh tịnh</p>
          <p class="mb-0">Thị danh Phật xuất thế</p>
          <p class="mb-0">Thân khẩu ý bất tịnh</p>
          <p class="mb-0">Thị danh Phật diệt độ</p>
          <p class="mb-0 mt-2">Tức tâm thị Phật vô dư Pháp</p>
          <p class="mb-0">Mê giả đa ư tâm ngoại cầu</p>
          <p class="mb-0">Nhất niệm quách nhiên quy bổn tế</p>
          <p class="mb-0">Hoàn như tẩy khước thượng thuyền đầu</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Thân, khẩu, ý thanh tịnh</p>
          <p class="mb-0">Đó là Phật xuất thế.</p>
          <p class="mb-0">Thân, khẩu, ý bất tịnh</p>
          <p class="mb-0">Đó là Phật nhập diệt.</p>
          <p class="mb-0 mt-2">Tức tâm là Phật, Phật tại tâm</p>
          <p class="mb-0">Kẻ mê rong ruổi, ngoại tâm cầu</p>
          <p class="mb-0">Nhất niệm giác ngộ về đến Phật</p>
          <p class="mb-0">Dễ như rửa chân bước lên thuyền.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý hai bài tụng</h4>
    <p>Ba nghiệp: Thân, miệng và ý đều thanh tịnh, đó là Phật xuất thế. Trái lại, ba nghiệp không thanh tịnh tức là Phật nhập diệt. Phật tức tâm, tâm tức Phật. Người mê muội không biết, lại tìm Phật ngoài tâm. Nếu trong nhất niệm mà tâm giác ngộ thì tức thành Phật; rất dễ như người rửa chân bước lên thuyền.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phat-xac-nhan" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">30. PHẬT XÁC NHẬN LỜI NÓI CỦA ÔNG TU BỒ ĐỀ LÀ PHẢI</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Đúng như vậy. Nếu có người nghe Kinh này mà không nghi ngờ hay kinh sợ, thì người này rất là hy hữu".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này vẫn còn tiếp với hai đoạn văn trên, Phật xác nhận lời nói của ông Tu Bồ Đề là phải: Người có hạt giống Kim Cang Bát Nhã, không chấp các tướng mới hiểu và tin được Kinh này.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-bat-nha-la-de-nhat" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">31. PHẬT PHÁ CÁI CHẤP: "BÁT NHÃ LÀ ĐỆ NHỨT BA LA MẬT"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Như Lai nói Bát Nhã là đệ nhất Ba la mật, không phải Bát Nhã là đệ nhất Ba la mật, thế mới thật Bát Nhã là đệ nhất Ba la mật".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật phá cái chấp "Bát Nhã là pháp Ba la mật thứ nhất". Đây là lần thứ hai, Phật phá cái chấp Bát Nhã Ba la mật (lần thứ nhất ở đoạn 22).</p>
    <p>Trong 6 pháp Lục độ, tức là 6 pháp Ba la mật, thì Trí huệ Bát Nhã là bao trùm tất cả, nên Phật nói: "Bát Nhã là đệ nhất Ba la mật".</p>
    <p>Nhưng, nếu người còn chấp mình đặng "Bát Nhã là đệ nhất Ba la mật" (chấp pháp) thì không phải thật đặng "Bát Nhã là đệ nhất Ba la mật" nữa, vì còn chấp ngã (mình đặng) chấp pháp (Ba la mật). Bởi thế nên Phật dạy tiếp: "Không còn thấy (chấp) mình đặng Bát Nhã là đệ nhất Ba la mật, thì mới thật đặng Bát Nhã là đệ nhất Ba la mật".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="pl-4 space-y-2">
        <p class="mb-0"><strong>Bát Nhã:</strong> (đã giải ở trước, đề mục kinh)</p>
        <p class="mb-0"><strong>Ba la mật:</strong> (đã giải ở trước, đề mục kinh)</p>
      </div>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-nhan-nhuc" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">32. PHẬT PHÁ CÁI CHẤP "NHẪN NHỤC BA LA MẬT"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Như Lai nói người Nhẫn nhục Ba la mật (rốt ráo) mà không thấy mình Nhẫn nhục Ba la mật, như thế mới thật là Nhẫn nhục Ba la mật".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật phá cái chấp "Người tu Nhẫn nhục Ba la mật, mà còn chấp mình đặng Nhẫn nhục Ba la mật".</p>
    <p>Nếu hành giả tu hạnh nhẫn nhục rốt ráo (Ba la mật) mà còn chấp mình tu hạnh nhẫn nhục rốt ráo, tức nhiên hành giả còn chấp nhơn (người làm nhục) chấp ngã (ta bị nhục) thì chưa phải là nhẫn nhục rốt ráo. Hành giả phải lìa tất cả vọng chấp: nhơn, ngã, bỉ, thử v.v... nhập Kim Cang Bát Nhã, mà tu pháp nhẫn nhục thì pháp nhẫn nhục đó mới hoàn toàn rốt ráo, gọi là nhẫn nhục Ba la mật.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="tien-than-nhan-nhuc" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">33. PHẬT NÓI TIỀN THÂN CỦA NGÀI LÀ MỘT VỊ TIÊN NHƠN TU NHẪN NHỤC BA LA MẬT</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Về quá khứ, ta làm vị Tiên nhơn tu hạnh nhẫn nhục đến 500 đời. Bị vua Ca Lợi cắt xẻo thân thể từng đoạn, nhưng ta không sân hận; Vì ta không còn chấp bốn tướng: ngã, nhơn, chúng sanh và thọ giả".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này tiếp theo đoạn trên (32) nói về việc tu hạnh nhẫn nhục Ba la mật. Muốn giải thích rõ ràng: thế nào là "nhẫn nhục rốt ráo" (nhẫn nhục Ba la mật), Phật dẫn bằng chứng điển hình, là tiền thân Ngài làm vị Tiên nhơn tu hạnh Nhẫn nhục. Bị vua Ca Lợi cắt xẻo thân thể ra từng mảnh, nhưng Ngài không hề sân hận. Vì Ngài không còn chấp bốn tướng: ngã, nhơn v.v... nên mới đặng nhẫn nhục rốt ráo (nhẫn nhục Ba la mật).</p>
    <p>Sách chép, một hôm vua Ca Lợi dẫn cung phi mỹ nữ lên núi để yến tiệc. Sau buổi yến tiệc say sưa, vua nằm nghỉ, các cung phi lén vua đi dạo núi.</p>
    <p>Qua một đồi khác, thấy một vị Tiên nhơn ngồi tu dưới một gốc cây đại thọ, các cung phi rủ nhau đến chiêm bái.</p>
    <p>Sau khi thức dậy, không thấy cung phi, vua liền đi tìm. Đến một đồi núi, thấy các cung phi đang ngồi xoay quanh hỏi đạo vị Tiên nhơn dưới một gốc cây cổ thụ, vua tức giận hỏi:</p>
    <div class="pl-6 space-y-1 mb-4 italic opacity-90">
      <p class="mb-0">- Người là ai mà dám quyến rũ cung phi mỹ nữ của ta?</p>
      <p class="mb-0">- Tôi là Tiên nhơn tu hạnh Nhẫn nhục rốt ráo.</p>
      <p class="mb-0">- Có thật không?</p>
      <p class="mb-0">- Thật, tôi tu Nhẫn nhục rốt ráo (Ba la mật).</p>
    </div>
    
    <p>Vua liền rút gươm xẻo mũi, lóc tai, chặt tay v.v... vị Tiên nhơn, mà không thấy vị Tiên nhơn có chút gì phản ứng hay sân hận v.v...</p>
    <p>Sau cơn nóng giận, vua hối hận và hỏi:</p>
    <div class="pl-6 space-y-1 mb-4 italic opacity-90">
      <p class="mb-0">- Có lẽ vì thế lực của nhà Vua nên Tiên nhơn Nhẫn nhục, không dám chống lại, chứ trong tâm làm sao khỏi buồn giận?</p>
    </div>
    
    <p>Tiên nhơn thề rằng: Nếu tôi không thiệt tu Nhẫn nhục rốt ráo, trong tâm còn chút giận hờn, thì tôi chết luôn theo với tay chân bị cắt xẻo; trái lại, nếu tôi thật tu Nhẫn nhục rốt ráo, tâm không sân hận thì tay chân của tôi bị cắt, đều hoàn y nguyên trở lại như xưa.</p>
    <p>Lời thệ của Tiên nhơn vừa dứt thì mũi, tai, thân thể của Tiên nhơn đều hoàn lại như trước. Vua hết sức ăn năn sám hối tội lỗi của mình và thỉnh cầu Tiên nhơn tha thứ.</p>
    <p>Tiên nhơn đã không hờn giận, lại còn phát nguyện: "Sau khi đắc đạo ta sẽ độ người trước".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="xa-lia-vong-chap" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">34. BỒ TÁT PHÁT TÂM BỒ ĐỀ PHẢI XA LÌA TẤT CẢ CÁC VỌNG CHẤP</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Bồ Tát phát tâm Bồ Đề, phải xa lìa tất cả các chấp tướng. Bồ Tát không nên sanh tâm trụ chấp nơi sắc trần, thinh trần, hương trần, vị trần, xúc trần và pháp trần v.v...</p>
      <p class="mb-0">Nói tóm lại, Bồ Tát đừng sanh vọng tâm trụ chấp một nơi nào cả. Nếu Bồ Tát tâm còn trụ chấp một nơi nào, thì không phải thật an trụ chơn tâm".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ hai (lần thứ nhất ở đoạn 17), Phật dạy các vị Bồ Tát đừng sanh vọng tâm trụ chấp một nơi nào.</p>
    <p>Tâm Bồ Đề là tâm Phật (xem đoạn 2). Bồ Tát phát tâm Bồ Đề, phải xa lìa tất cả các vô minh vọng chấp: Không chấp ngã, chấp nhơn, chấp chúng sanh, thọ giả, không chấp sáu căn, sáu trần và sáu thức v.v... Nói chung là không chấp ngã, chấp pháp.</p>
    <p>Khi các vọng chấp hết rồi, thì tâm Bồ Đề hay tánh Bát Nhã v.v... hiện ra. Đó là "Hàng phục vọng tâm và an trụ chơn tâm".</p>
    <p>Nếu tâm còn có chỗ trụ chấp, tức là tâm còn vọng động; tâm còn vọng động thì trụ nơi điên đảo, chứ không phải an trụ chơn tâm hay tánh Bát Nhã.</p>
    <p>Bởi thế nên Phật dạy: "Nếu Bồ Tát tâm còn trụ chấp một nơi nào thì không phải thật an trụ chơn tâm".</p>

    <p class="font-semibold mt-6">Ngài Xuyên Thiền sư làm bài tụng, nói về việc không trụ chấp nơi sắc, thinh, hương, v.v...</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Kiến sắc phi can sắc</p>
          <p class="mb-0">Văn thinh bất thị thinh</p>
          <p class="mb-0">Sắc thinh vô ngại xứ</p>
          <p class="mb-0">Thân đáo pháp vương thành</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Thấy sắc không mê sắc</p>
          <p class="mb-0">Nghe tiếng chẳng nhiễm tiếng</p>
          <p class="mb-0">Sắc tiếng đều không ngại</p>
          <p class="mb-0">Mới đến pháp vương thành</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài tụng</h4>
    <p>Trong khi sáu giác quan tiếp xúc với sáu trần cảnh, mà không khởi vọng niệm phân biệt, nhiễm ô mê hoặc (trụ chấp) nơi trần cảnh, thì hành giả sẽ được vào cảnh giới Phật (thành Pháp vương).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="bo-thi-khong-chap-tuong" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">35. PHẬT DẠY BỒ TÁT BỐ THÍ HAY LÀM CÁC VIỆC LỢI ÍCH CHÚNG SANH ĐỀU KHÔNG NÊN CHẤP TƯỚNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Bồ Tát khi bố thí hay làm các việc lợi ích cho tất cả chúng sanh, không nên sanh tâm trụ chấp các tướng (mình bố thí, người thọ thí, vật bố thí).</p>
      <p class="mb-0">Tu Bồ Đề! Như Lai nói các tướng không phải thật (các pháp) chỉ giả gọi các tướng. Như Lai nói chúng sanh, không phải thật chúng sanh, chỉ giả gọi chúng sanh".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ hai (lần thứ nhất về đoạn 4), Phật dạy các vị Bồ Tát bố thí hay làm các việc lợi ích chúng sanh, đều không nên chấp tướng (xem đoạn 4 ở trước).</p>
    <p>Hành giả khi làm lợi ích các chúng sanh, mà tâm còn trụ chấp các tướng, nghĩa là còn thấy mình bố thí, người thọ thí và vật bố thí, tất nhiên hành giả còn chấp ngã (mình, người) chấp pháp (vật bố thí), thì hành giả chỉ được phước hữu lậu nhiễm ô, nên không phải là bố thí Ba la mật (bố thí rốt ráo).</p>
    <p>Bởi thế nên Phật dạy, các vị Bồ Tát, khi bố thí hay làm lợi ích cho các chúng sanh, phải nhập Kim Cang Bát Nhã mà làm; nghĩa là không có chấp các tướng: ngã, nhơn, chúng sanh, thọ giả thì được phước đức vô lậu thanh tịnh. Bố thí như vậy, mới phải là bố thí Ba la mật (bố thí rốt ráo).</p>
    <p>Đoạn trước nói về Nhẫn nhục, đoạn này nói về bố thí. Muốn giúp cho quý vị Phật tử hiểu thêm và để thực hành, thế nào là "Nhẫn nhục rốt ráo" và thế nào là "bố thí rốt ráo", chúng tôi xin nói thêm một thí dụ như sau.</p>
    <p>Hành giả muốn đặng Nhẫn nhục Ba la mật hay bố thí Ba la mật, thì phải quán chúng sanh và mình đồng một bản thể, mới không thấy ta có bố thí và chúng sanh thọ thí hay người làm nhục và ta thọ nhục.</p>
    <p>Thí dụ như tay phải với tay trái, đồng thấy chung một thân, nên khi tay phải lỡ làm tổn thương tay trái (đóng đinh trượt tay), tay trái không giận. Vì tay trái tự nhận mình cùng với tay phải đồng một thân, nên tay trái không thấy do tay phải làm nhục và mình bị nhục. Nhẫn nhục như thế mới là Nhẫn nhục rốt ráo (nhẫn nhục Ba la mật).</p>
    <p>Trái lại, tay phải lo lấy bông gòn và thuốc để băng cho tay trái, nhưng nó không kiêu hãnh, vì tay phải cũng tự nhận mình cùng với tay trái đồng một thân, nên nó không thấy mình (tay phải) là người ban ơn và tay trái là kẻ thọ ơn. Bố thí như thế, mới là bố thí rốt ráo (Bố thí Ba la mật).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="nhu-lai-noi-that" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">36. NHƯ LAI NÓI THẬT, KHÔNG NÓI DỐI</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Như Lai nói thật, nói chơn chánh, không nói dối, không nói sai khác. Như Lai có đắc pháp, nhưng pháp ấy không thật không hư".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đến thời Bát Nhã, thì Phật phá hết các vọng chấp từ lâu của chúng sanh, để chúng sanh tiến lên một bậc cao hơn nữa. Vì thế nên phần lý thuyết cũng như phần tinh thần của thời kinh Bát Nhã, rất lạ lùng hơn các thời thuyết pháp khác.</p>
    <p>Sợ chúng sanh nghi ngờ lời Phật nói không chơn thật, khi nói vầy, khi nói khác, thay đổi không chừng, nên Phật gọi ông Tu Bồ Đề dạy rằng: "Như Lai nói thật, nói chơn chánh, không nói dối, không nói sai khác".</p>
    <p>Đức Như Lai được đạo Bồ Đề, nhưng nếu chấp đạo Bồ Đề này là hư hay thật thì không phải là Bồ Đề. Vì thế nên Phật dạy: "Như Lai có đắc pháp, nhưng pháp ấy không thật không hư".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="vo-tuong-bo-thi" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">37. TRỤ TƯỚNG BỐ THÍ NHƯ VÀO NHÀ TỐI, VÔ TƯỚNG BỐ THÍ NHƯ ĐI BAN NGÀY</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Nếu Bồ Tát bố thí mà tâm còn trụ chấp nơi pháp bố thí, thì như người vào nhà tối, không thấy gì cả. Trái lại, nếu Bồ Tát bố thí mà tâm không trụ chấp nơi pháp bố thí, thì cũng như người có mắt sáng tỏ, lại nhờ ánh sáng của mặt nhựt chiếu soi, được thấy tất cả mọi vật".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thấy thứ ba (lần thứ nhất và hai ở đoạn 4 và 35), Phật dạy Bồ Tát bố thí không nên chấp tướng bố thí.</p>
    <p>Người bố thí, nếu còn chấp tướng, nghĩa là còn thấy ta là người ban ơn, kia là kẻ thọ ơn, đó là vật bố thí, thì bị mây vô minh ngã, pháp che mờ Trí huệ Bát Nhã, nên Phật thí dụ: "như người đi vào nhà tối không thấy gì cả".</p>
    <p>Trái lại, nếu bố thí mà không chấp tướng, trong kinh gọi là "tam luân không tịch"; nghĩa là không thấy mình bố thí (ban ơn), người thọ thí (thọ ơn) và vật bố thí (xem thí dụ tay phải bó tay trái ở đoạn 35) thì mây vô minh ngã, pháp đều hết, nên mặt trời Trí huệ Bát Nhã hiện ra, chiếu soi khắp tất cả pháp. Bởi thế nên Phật nói: "Như người có mắt sáng tỏ, lại nhờ ánh sáng của mặt nhựt chiếu soi, được thấy mọi vật".</p>

  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo nội dung bài học, tại sao phước đức của người thọ trì bốn câu kệ trong Kinh Kim Cang lại lớn hơn người bố thí thân mạng nhiều như cát sông Hằng?",
    options: {
      a: "Vì bố thí thân mạng chỉ mang lại phước đức hữu vi, hữu lậu, còn thọ trì kinh dẫn đến đạo quả vô lậu.",
      b: "Vì bố thí thân mạng là việc làm quá dễ dàng so với việc đọc tụng kinh điển.",
      c: "Vì việc đọc tụng kinh giúp con người có thêm nhiều kiến thức thế gian.",
      d: "Vì Phật muốn khuyến khích mọi người học chữ thay vì làm việc thiện nguyện.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Bố thí thân mạng tuy khó làm nhưng phước đức vẫn nằm trong vòng hữu vi, hữu lậu (chỉ hưởng phước thế gian rồi tái sinh). Người thọ trì kinh này ngộ nhập Bát Nhã, thành Phật cứu độ chúng sanh, nên phước vô lậu cao hơn hẳn.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Ngài Tu Bồ Đề lại cảm động bùi ngùi và rơi nước mắt khi nghe Phật giảng Kinh Kim Cang?",
    options: {
      a: "Vì ông cảm thấy buồn bã trước sự khổ đau của chúng sanh trong cõi luân hồi.",
      b: "Vì ông lo sợ rằng chúng sanh đời sau sẽ không còn ai tin vào kinh điển này nữa.",
      c: "Vì ông cảm thấy hối hận vì trước đây đã không chịu tu hành tinh tấn.",
      d: "Vì ông hiểu được nghĩa lý thâm thúy, cao siêu của kinh này mà từ trước đến giờ chưa từng được nghe.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Ông thưa với Phật: 'Con tuy đặng huệ nhãn đã lâu, nhưng từng được nghe Phật nói kinh điển, nghĩa lý cao siêu huyền diệu, quý báu như thế này!', nên cảm động rơi nước mắt.",
    },
  },
  {
    question: "Trong đoạn 28, cụm từ 'thật tướng' được giải thích như thế nào để tránh sự chấp trước vào hình tướng?",
    options: {
      a: "Thật tướng là một thực thể cố định mà mọi người có thể nắm bắt được.",
      b: "Thật tướng là tổng hợp của bốn tướng: ngã, nhơn, chúng sanh và thọ giả.",
      c: "Thật tướng chính là các sự vật hiện tượng hiện hữu trước mắt chúng ta.",
      d: "Thật tướng thực chất là không có hình tướng, chỉ tạm gọi tên như vậy để dẫn dắt chúng sanh.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Phật dạy 'Phàm sở hữu tướng giai thị hư vọng'. Nên cái 'không hình tướng' mới là thật tướng. Ngài Tu Bồ Đề cũng dẫn lời Phật để phá chấp: 'Như Lai nói thật tướng, tức là không phải thật tướng, chỉ tạm gọi là thật tướng'.",
    },
  },
  {
    question: "Vì sao Phật dạy rằng 'Bát Nhã Ba-la-mật không phải là Bát Nhã Ba-la-mật'?",
    options: {
      a: "Để phá bỏ cái chấp của hành giả về việc mình đang sở hữu hoặc đạt được một pháp môn cao nhất.",
      b: "Để khẳng định rằng Bát Nhã chỉ dành riêng cho chư Phật, không dành cho Bồ-tát.",
      c: "Vì Phật đã tìm ra một pháp môn khác ưu việt hơn Bát Nhã.",
      d: "Vì Bát Nhã là một pháp môn không có thực lực trong việc cứu độ chúng sanh.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Trong Lục độ, Bát Nhã là đệ nhất. Nhưng nếu hành giả chấp 'mình đặng Bát Nhã đệ nhất' (chấp ngã, chấp pháp) thì không còn thật là đệ nhất nữa. Nên Phật dạy câu này để phá cái chấp đó.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong câu chuyện về tiền thân của Phật, Ngài đã thể hiện điều gì khi bị vua Ca Lợi cắt xẻo thân thể?",
    options: {
      a: "Ngài cầu xin các vị chư thiên đến cứu giúp mình khỏi cơn hoạn nạn.",
      b: "Ngài sử dụng thần thông để làm cho nhà vua kinh sợ và dừng tay.",
      c: "Ngài chấp nhận đau đớn để sau này có thể trừng phạt nhà vua một cách công bằng.",
      d: "Ngài không sân hận vì Ngài không còn chấp vào bốn tướng ngã, nhơn, chúng sanh và thọ giả.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Tiền thân Phật làm vị Tiên nhơn, bị vua Ca Lợi cắt xẻo thân thể từng đoạn nhưng không hề sân hận, vì Ngài đã nhập Kim Cang Bát Nhã, không còn chấp bốn tướng: ngã, nhơn, chúng sanh, thọ giả.",
    },
  },
  {
    question: "Bồ-tát phát tâm Bồ-đề được dạy là 'không nên sanh vọng tâm trụ chấp một nơi nào cả'. Điều này có nghĩa là gì?",
    options: {
      a: "Bồ-tát cần phải trốn tránh thế giới bên ngoài để giữ tâm không động.",
      b: "Bồ-tát chỉ được phép trụ tâm vào những điều tốt đẹp và thiêng liêng.",
      c: "Bồ-tát không được phép suy nghĩ hay làm bất cứ việc gì.",
      d: "Bồ-tát phải xa lìa sự bám chấp vào sáu trần (sắc, thinh, hương, vị, xúc, pháp) để tâm được thanh tịnh.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai. Trụ vào điều thiêng liêng vẫn là trụ chấp (chấp pháp).",
      c: "Sai.",
      d: "Đúng. Không sanh vọng tâm trụ chấp tức là không trụ chấp nơi sắc, thinh, hương, vị, xúc và pháp trần. Khi các vọng chấp hết thì tâm Bồ đề hiển lộ.",
    },
  },
  {
    question: "Ví dụ về 'tay phải băng bó cho tay trái' trong đoạn 35 minh họa cho khái niệm nào trong tu hành?",
    options: {
      a: "Sự phân chia nhiệm vụ rõ ràng giữa người ban ơn và người thọ ơn.",
      b: "Việc cần phải giúp đỡ những người thân trong gia đình trước khi giúp người ngoài.",
      c: "Sự nhẫn nhục và bố thí rốt ráo (Ba-la-mật) dựa trên việc nhận thức mình và người đồng một bản thể.",
      d: "Tầm quan trọng của việc rèn luyện sức khỏe thể chất để tu tập.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Ngược lại hoàn toàn.",
      b: "Sai.",
      c: "Đúng. Tay phải băng tay trái không tự thấy mình ban ơn, tay trái bị thương không thấy mình thọ nhục vì chúng nhận thức cùng chung một cơ thể. Dụ cho Bồ tát quán chúng sanh đồng một bản thể, tu bố thí và nhẫn nhục không chấp tướng (Ba-la-mật).",
      d: "Sai.",
    },
  },
  {
    question: "Phật ví việc bố thí mà còn chấp tướng (thấy mình ban ơn, người nhận ơn) giống như điều gì?",
    options: {
      a: "Như người có mắt sáng nhưng bị bịt kín bởi một tấm vải đen.",
      b: "Như người đi trong nắng gắt mà không có nón che.",
      c: "Như người đi vào nhà tối, không nhìn thấy gì cả.",
      d: "Như con thuyền không có lái giữa biển khơi sóng gió.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Phật dạy: 'Nếu Bồ Tát bố thí mà tâm còn trụ chấp nơi pháp bố thí, thì như người vào nhà tối, không thấy gì cả.'",
      d: "Sai.",
    },
  },
  {
    question: "Theo bài tụng của Ngài Cảo Thiền sư, khi nào thì được gọi là 'Phật xuất thế'?",
    options: {
      a: "Khi một vị thái tử đi tu và đạt được đạo quả dưới gốc cây bồ đề.",
      b: "Khi có một vị thánh giáng trần để cứu độ nhân loại.",
      c: "Khi chúng sanh cùng nhau xây dựng thật nhiều chùa chiền và tháp báu.",
      d: "Khi thân, khẩu và ý của hành giả đều được thanh tịnh.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Bài tụng chép: 'Thân khẩu ý thanh tịnh / Thị danh Phật xuất thế' (Thân khẩu ý thanh tịnh, đó là Phật xuất thế).",
    },
  },
  {
    question: "Phật khẳng định rằng pháp mà Ngài đắc được là 'không thật không hư'. Ý nghĩa của lời dạy này là gì?",
    options: {
      a: "Rằng giáo pháp của Phật chỉ là những lời nói dối mang tính tạm thời.",
      b: "Rằng đạo pháp của Ngài biến đổi không ngừng tùy theo thời gian.",
      c: "Rằng Phật vẫn chưa thực sự đạt được sự giác ngộ hoàn toàn.",
      d: "Rằng chân lý không thể bị nắm giữ như một vật thể (thật) nhưng cũng không phải là vô nghĩa (hư).",
    },
    answer: "d",
    explanation: {
      a: "Sai. Phật nói thật không nói dối.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Đạo Bồ Đề không thể nắm bắt, chấp thủ là thật có (không thật), nhưng nó hiện hữu làm lợi ích chúng sanh, có công năng giải thoát (không hư).",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-6-phan-chanh-ton-tiep-theo',
  slug: 'bai-thu-6-phan-chanh-ton-tiep-theo',
  title: 'Bài Thứ 6 - Phần Chánh tôn (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 10,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-6-phan-chanh-ton-tiep-theo/C%E1%BB%91t_l%C3%B5i_Kinh_Kim_Cang.png',
      readingContent,
      tableOfContents: [
        { id: 'b-phan-chanh-ton-tiep-theo', label: 'B. Phần Chánh tôn (tiếp theo)' },
        { id: 'cong-duc-tho-tri', label: '26. Phật nói công đức thọ trì Kinh Kim Cang Bát Nhã', indent: 1 },
        { id: 'tu-bo-de-cam-dong', label: '27. Ông Tu Bồ Đề bùi ngùi cảm động rơi nước mắt', indent: 1 },
        { id: 'cong-duc-thu-nhat', label: '28. Người nghe Kinh này sanh lòng tin được công đức thứ nhất', indent: 1 },
        { id: 'nguoi-co-hat-giong-bat-nha', label: '29. Người có hạt giống Bát Nhã mới tin và hiểu được Kinh này', indent: 1 },
        { id: 'phat-xac-nhan', label: '30. Phật xác nhận lời nói của ông Tu Bồ Đề là phải', indent: 1 },
        { id: 'pha-chap-bat-nha-la-de-nhat', label: '31. Phật phá cái chấp: "Bát Nhã là đệ nhứt Ba-la-mật"', indent: 1 },
        { id: 'pha-chap-nhan-nhuc', label: '32. Phật phá cái chấp: "Nhẫn nhục Ba-la-mật"', indent: 1 },
        { id: 'tien-than-nhan-nhuc', label: '33. Phật nói tiền thân Ngài là vị Tiên nhơn tu hạnh Nhẫn nhục', indent: 1 },
        { id: 'xa-lia-vong-chap', label: '34. Bồ tát phát tâm Bồ đề phải xa lìa tất cả các vọng chấp', indent: 1 },
        { id: 'bo-thi-khong-chap-tuong', label: '35. Bồ tát bố thí lợi ích chúng sanh không nên chấp tướng', indent: 1 },
        { id: 'nhu-lai-noi-that', label: '36. Như Lai nói thật, không nói dối', indent: 1 },
        { id: 'vo-tuong-bo-thi', label: '37. Trụ tướng bố thí như vào nhà tối, vô tướng bố thí như đi ban ngày', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-6-phan-chanh-ton-tiep-theo/Kim_Cang_%C4%90%E1%BA%A1i_Gi%C3%A1c.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/WCmXWZFBYPU',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6ylLTQtBfRK2FYutyWudro',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 6',
    passPercentage: 70,
    questions,
  },
}

export default lesson