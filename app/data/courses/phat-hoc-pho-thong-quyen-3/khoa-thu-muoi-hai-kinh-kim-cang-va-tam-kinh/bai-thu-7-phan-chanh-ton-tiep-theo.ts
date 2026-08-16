import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="b-phan-chanh-ton-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ BẢY: B- Phần Chánh tôn (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="nguoi-tho-tri-kinh" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">38. NGƯỜI THỌ TRÌ KINH NÀY CÔNG ĐỨC VÔ LƯỢNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Như Lai dùng Trí huệ Phật, thấy rõ ràng và biết chắc chắn: đời sau nếu có người phát tâm thọ trì đọc tụng Kinh này, người ấy sẽ thành tựu công đức vô lượng vô biên".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ 6, Phật khuyến khích về công đức thọ trì Kinh này.</p>
    <p>Kinh này nghĩa lý cao siêu khác thường, quá tầm hiểu biết của người, sợ người không hiểu và không tin thì sẽ mất lợi ích lớn, nên Phật dạy: "Như Lai dùng Trí huệ Phật, thấy biết rõ ràng và chắc chắn: sau này nếu có người thọ trì đọc tụng Kinh này, sẽ được công đức vô lượng".</p>
    <p>Người hiểu biết được nghĩa lý và thọ trì Kinh này, người ấy sẽ ngộ được Kinh Kim Cang Bát Nhã, tức là đã trồng hạt giống Bồ Đề, tất nhiên sẽ đặng quả Bồ Đề nên Phật nói: "Được công đức vô lượng".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="cong-duc-kinh-nay" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">39. CÔNG ĐỨC KINH NÀY VÔ LƯỢNG VÔ BIÊN KHÔNG THỂ NGHĨ BÀN</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Nếu có người nào, một ngày ba lần: Sớm mai, đem thân mình nhiều như số cát sông Hằng để bố thí; Trưa, đem thân mình nhiều như số cát sông Hằng để bố thí; Chiều, cũng đem thân mình nhiều như số cát sông Hằng để bố thí. Bố thí như vậy cho đến vô lượng trăm ngàn muôn ức kiếp, phước đức của người này vô lượng vô biên.</p>
      <p class="mb-0">Nếu có người nghe Kinh này, tin hiểu không nghi ngờ, thì người này phước đức nhiều hơn người trước. Chỉ tin mà thôi còn được phước đức như vậy, huống chi là thọ trì đọc tụng, hoặc phiên dịch hay giảng dạy cho người. Tóm lại, công đức của Kinh này vô lượng vô biên không thể nghĩ bàn".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ 7, Phật tán thán công đức của Kinh này không thể nghĩ bàn. Người đem một thân mình bố thí đã khó, huống chi là nhiều thân. Nhưng, giả sử có người đem nhiều thân mình ra bố thí, mỗi ngày ba lần, sớm mai, trưa và chiều đều bố thí vô lượng vô số thân mình, cho đến nhiều ngày, nhiều tháng, nhiều năm và nhiều kiếp đều bố thí như vậy, thì phước đức người này biết là bao nhiêu.</p>
    <p>Nhưng, nếu có người nghe Kinh này, chỉ sanh lòng tin, không nghi ngờ, thì phước đức còn nhiều hơn người trước, huống chi thọ trì đọc tụng hoặc giảng dạy cho người khác.</p>
    <p>Tại sao vậy? Vì người tin được Kinh này là người đã ươm trồng hạt giống Kim Cang Bát Nhã; thọ trì đọc tụng là huân tưởng hạt giống Bát Nhã; giảng dạy cho người là làm cho người huân sanh hạt giống Bát Nhã. Hạt giống Bát Nhã đã sanh trưởng thì thế nào cũng được thành Phật. Bởi thế nên người tin thọ hoặc giảng dạy Kinh này, phước đức nhiều hơn người bố thí thân mạng.</p>
    
    <p class="font-semibold mt-6">Tóm tắt đoạn này, Ngài Xuyên Thiền sư có làm bài tụng rằng:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Sơ tâm hậu phát thí tân đồng</p>
          <p class="mb-0">Công đức vô biên toán mạc cùng</p>
          <p class="mb-0">Tranh tợ tín tâm tâm bất lập</p>
          <p class="mb-0">Nhứt quyền đả phá thái hư không.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Sớm trưa bố thí phát tâm đồng</p>
          <p class="mb-0">Công đức vô biên tính chẳng cùng</p>
          <p class="mb-0">Đâu bằng tín tâm không trụ chấp</p>
          <p class="mb-0">Một tay đánh phá cõi hư không.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài tụng</h4>
    <p>Người phát tâm bố thí sớm mai, trưa và chiều, công đức đều được vô lượng vô biên; nhưng công đức không bằng người tin hiểu Kinh Bát Nhã và tâm không còn trụ chấp nơi nào.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="dang-dao-qua-bo-de" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">40. PHẬT KHUYÊN NGƯỜI THỌ TRÌ ĐỌC TỤNG KINH NÀY SẼ ĐẶNG ĐẠO QUẢ BỒ ĐỀ</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: “Tu Bồ Đề! Như Lai vì những người phát tâm Đại thừa và phát tâm Tối thượng thừa mà giảng dạy Kinh này.</p>
      <p>Tu Bồ Đề! Như Lai thấy rõ ràng và biết chắc chắn: Nếu có người thọ trì đọc tụng hoặc giảng dạy Kinh này, thì người này sẽ đặng công đức vô lượng vô biên không thể suy nghĩ và luận bàn. Người này sẽ đặng đạo quả Bồ Đề của Như Lai.</p>
      <p class="mb-0">Tu Bồ Đề! Người ưa pháp Tiểu thừa, chấp bốn tướng: ngã, nhơn, chúng sanh và thọ giả, nên đối với Kinh này, họ không thể tin hiểu hoặc đọc tụng, hay giảng dạy cho người.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ 8, Phật tán thán công đức người thọ trì Kinh này sẽ đặng quả Bồ Đề của Phật.</p>
    <p>Phật vì những hàng Đại thừa Bồ Tát và những người phát tâm Tối thượng thừa cầu quả Phật, mà nói Kinh này. Bởi thế nên những người chịu nghe và tin theo Kinh này, hoặc thọ trì đọc tụng hay giảng dạy cho người nghe, tất nhiên người ấy đã có căn tánh (hạt giống) Đại thừa hay Tối thượng thừa, nên đặng công đức vô lượng vô biên và sẽ thành Phật.</p>
    <p>Trái lại, những người căn tánh Tiểu thừa, bị gò bó trong cái khung bốn tướng, tư tưởng không hợp với giáo lý Đại thừa, nên không bao giờ họ lãnh hội được Kinh Đại thừa và tu hành theo Đại thừa hoặc giảng dạy cho người.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="cho-phung-tho-kinh" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">41. CHỖ PHỤNG THỜ KINH NÀY CŨNG ĐƯỢC NHƠN THIÊN VÀ THÁNH THẦN CÚNG DƯỜNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Chỗ nào phụng thờ Kinh này, thì chỗ ấy như có chùa tháp của Phật; tất cả trời người, thánh thần đều cung kính lễ bái, dâng hoa cúng dường hoặc di nhiễu".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ 9, Phật tán thán công đức Kinh Kim Cang Bát Nhã Ba La Mật.</p>
    <p>Trong đoạn thứ 13, Phật dạy: "Tất cả Phật và Pháp đều từ Kinh này sanh ra". Vì Kinh này rất quý báu như vậy, nên trong đoạn 20 và đoạn này (41) đều nói, chỗ thờ Kinh này, cũng được trời, người, thần thánh xem như chùa Phật hay tháp Phật, đều đến cung kính lễ bái cúng dường, hoặc đi kinh hành (đi xung quanh chỗ thờ Kinh).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="bi-khinh-khi-do-toi-chuong" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">42. NGƯỜI THỌ TRÌ KINH NÀY MÀ BỊ NGƯỜI KHINH KHI LÀ DO TỘI CHƯỚNG ĐỜI TRƯỚC CỦA HỌ RẤT NẶNG NỀ</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Nếu người thọ trì đọc tụng Kinh này, mà bị người khinh khi, thì người này do tội chướng đời trước rất nặng nề còn thừa lại, đáng lẽ phải đoạ vào ác đạo; nhưng nay chỉ bị người khinh khi, thì tội chướng đời trước bị tiêu diệt và họ sẽ mau đặng quả Bồ Đề".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ 10, Phật tán thán công đức Kinh Kim Cang Bát Nhã.</p>
    <p>Kinh này công đức vô biên và rất quý báu như thế, nên người thọ trì Kinh này lẽ ra phải được sự cung kính tôn trọng. Nhưng trái lại, bị người khinh khi, thì biết người này do tội chướng đời trước nặng nề còn thừa lại, đáng lẽ phải bị đoạ vào ác đạo. Nhờ công đức thọ trì Kinh này, nên họ bị quả báo rất nhẹ, là chỉ bị người khinh khi. Từ đây các tội chướng đời trước tiêu diệt và họ sẽ đặng thành quả Phật.</p>
    
    <p class="font-semibold mt-6">Tóm tắt đoạn này, Ngài Trương Vô Tận có làm bài tụng:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Tứ tự diệm hương khứ phục hoàn</p>
          <p class="mb-0">Thánh phàm chỉ tại sát na gian</p>
          <p class="mb-0">Tiền nhơn tội nghiệp kim nhơn tiện</p>
          <p class="mb-0">Đảo khước tiền nhơn tội nghiệp sơn.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Bốn mùa lạnh nóng mãi trôi qua</p>
          <p class="mb-0">Phàm thánh không ngoài một sát na</p>
          <p class="mb-0">Tội nghiệp tiền thân nay phải chịu</p>
          <p class="mb-0">Chịu rồi mới hết nghiệp oan gia.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài tụng</h4>
    <p>Bốn mùa nóng lạnh, ngày tháng trôi qua là sự tuần hoàn của vũ trụ. Chứng thánh hay đoạ phàm, chỉ ở trong sát na mê hay ngộ. Kiếp trước làm tội ác nên kiếp này phải trả, bị người khinh khi. Trả xong nghiệp chướng oan gia mới được tự tại giải thoát.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="cong-duc-nhieu-hon-phat-cung-duong" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">43. NGƯỜI THỌ TRÌ KINH NÀY CÔNG ĐỨC NHIỀU HƠN PHẬT THÍCH CA CÚNG DƯỜNG VÔ SỐ CHƯ PHẬT</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Ta nhớ trong quá khứ, về vô lượng vô số kiếp, trước thời Phật Nhiên Đăng, ta cúng dường và phụng thờ tám trăm bốn ngàn muôn ức vô số chư Phật. Nhưng về sau này, nếu có người thọ trì đọc tụng Kinh này, thì công đức của người này so với công đức của ta cúng dường phụng thờ vô số chư Phật trước kia, công đức của ta không bằng một phần trăm, một phần ngàn, một phần vạn, một phần ức của người này; cho đến dùng toán số hay thí dụ cũng không thể tính toán hay thí dụ được công đức của người thọ trì Kinh này".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ 11, Phật tán thán công đức Kinh Kim Cang Bát Nhã.</p>
    <p>Cúng Phật thuộc về tu phước, dù nhiều bao nhiêu, cũng thuộc về phước hữu vi.</p>
    <p>Người thọ trì Kinh này, sẽ tỏ ngộ được lý Bát Nhã và sẽ mau đặng đạo quả Bồ Đề. Sau khi thành đạo, họ sẽ trở lại hoá độ vô số chúng sanh đều được giải thoát, thì công đức làm sao thí dụ được hay tính toán cho hết. Bởi thế nên Phật nói: "Công đức của người thọ trì Kinh này nhiều hơn công đức của Phật cúng dường vô số chư Phật về quá khứ".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phuoc-bao-khong-the-nghi-ban" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">44. KINH NÀY NGHĨA LÝ KHÔNG THỂ NGHĨ BÀN NÊN PHƯỚC BÁO CỦA NGƯỜI THỌ TRÌ KINH NÀY CŨNG KHÔNG THỂ NGHĨ BÀN</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Nếu ta nói hết công đức của người thọ trì đọc tụng Kinh này, sợ e người nghe, tâm sanh cuồng loạn, hoặc nghi ngờ không tin.</p>
      <p class="mb-0">Tóm lại, Kinh này nghĩa lý vô biên, không thể suy nghĩ và luận bàn, nên phước báu của người thọ trì Kinh này cũng không thể suy nghĩ và luận bàn".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ 12, Phật tóm lại, tán thán nghĩa lý của Kinh này vô biên, nên công đức của người thọ trì Kinh này, cũng không thể nghĩ bàn.</p>
    <p>Từ trước đến đây đã 12 lần, Phật so sánh, khuyến khích và tán dương công đức của người thọ trì Kinh này. Nếu nói hết lời, Phật e người nghe rối trí, hoặc nghi ngờ không tin. Nếu người hiểu được nghĩa lý cao thâm của Kinh này, không thể nghĩ bàn, thì họ sẽ tin công đức phước báu của người thọ trì Kinh này, cũng không thể nghĩ bàn.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="hoi-lai-hai-cau-quan-trong" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">45. ĐÂY LÀ LẦN THỨ HAI, ÔNG TU BỒ ĐỀ HỎI LẠI PHẬT HAI CÂU QUAN TRỌNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Khi ấy, ông Tu Bồ Đề bạch Phật: "Bạch Thế Tôn! Nếu có người phát tâm Bồ Đề, thì làm sao hàng phục vọng tâm và làm sao an trụ chơn tâm?"</p>
      <p>Phật dạy: "Tu Bồ Đề! Nếu có người phát tâm Bồ Đề, thì phải dụng tâm như vầy: Ta hoá độ tất cả chúng sanh, nhưng không thấy có mình độ và chúng sanh được độ. Tại sao vậy? Nếu Bồ Tát còn thấy mình độ và chúng sanh được độ, thì Bồ Tát còn tướng ngã, nhơn, tướng chúng sanh và tướng thọ giả, tức nhiên không phải là Bồ Tát.</p>
      <p class="mb-0">Tu Bồ Đề! Thật không có một pháp gì gọi là phát tâm Bồ Đề".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ hai (lần thứ nhứt ở đoạn 1), ông Tu Bồ Đề hỏi Phật "Làm sao hàng phục vọng tâm? Và làm sao an trụ chơn tâm?".</p>
    <p>Đại ý Phật dạy: "Người phát tâm Bồ Đề ra làm các Phật sự, lợi ích tất cả chúng sanh, không nên chấp ngã, pháp hay bốn tướng: ngã, nhơn, chúng sanh và thọ giả. Nếu không chấp ngã pháp hay bốn tướng thì sóng phiền não vọng niệm không sanh. Nếu sóng phiền não vọng niệm không sanh thì biển chơn tâm tự yên tịnh. Đó là phương pháp "hàng phục vọng tâm" mà cũng là "an trụ chơn tâm".</p>
    <p>Nếu Bồ Tát làm Phật sự, hoá độ chúng sanh, mà còn thấy có mình hoá độ (ngã) và người được độ (nhơn) thì Bồ Tát chưa nhập được Kim Cang Bát Nhã, vì còn chấp bốn tướng: ngã, nhơn v.v... nên không phải là Bồ Tát.</p>
    <p>Nói đến "Tâm Bồ Đề", sợ có người trụ chấp tâm Bồ Đề, nên Phật liền phá chấp: "Thật không có một pháp gì gọi là phát tâm Bồ Đề".</p>
    
    <p class="font-semibold mt-6">Ngộ được lý vô trụ của Kinh Kim Cang Bát Nhã, Ngài Trường Sa có làm bài kệ như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Bách xích can đầu bất động nhơn</p>
          <p class="mb-0">Tuy nhiên đắc nhập vị vi chơn</p>
          <p class="mb-0">Bách xích can đầu tu tấn bộ</p>
          <p class="mb-0">Thập phương thế giới hiện toàn thân.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Đầu sào trăm thước đứng vững trân</p>
          <p class="mb-0">Tuy ngộ nhưng chưa đúng lý chơn</p>
          <p class="mb-0">Đầu sào trăm thước thêm một bước</p>
          <p class="mb-0">Mười phương thế giới hiện toàn thân.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài kệ</h4>
    <p>Hai câu đầu là nói, người tu hành dầu cao siêu đến đâu, nhưng nếu còn chấp một tí nào, thì cũng chưa phải là thật tu, thật chứng, cũng như người đứng trên đầu sào trăm thước, tuy cao, nhưng chưa thoát ly được đầu sào.</p>
    <p>Hai câu sau là nói, hành giả phải rời tất cả vọng chấp ngã, pháp mới nhập được pháp giới tánh (chơn tâm hay Bát Nhã); lúc bấy giờ thân mình hiện khắp cả mười phương pháp giới; cũng như chim đã bỏ đầu sào trăm thước, thung dung tự tại bay đi trong cõi thái hư.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-nhu-lai-dac-phap" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">46. PHẬT PHÁ CÁI CHẤP "NHƯ LAI CÓ ĐẮC PHÁP VỚI PHẬT NHIÊN ĐĂNG"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Về quá khứ, Như Lai có đắc pháp Bồ Đề với Phật Nhiên Đăng không?"</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Như Lai không có đắc pháp Bồ Đề với Phật Nhiên Đăng".</p>
      <p>Phật dạy: "Đúng như vậy, Như Lai không có đắc pháp gì cả. Nếu Như Lai có đắc pháp thì Phật Nhiên Đăng không thọ ký cho ta rằng: Về sau, ông sẽ thành Phật hiệu là Thích Ca Mâu Ni".</p>
      <p>Phật dạy tiếp: "Tu Bồ Đề! Có người nói: "Như Lai đặng quả Bồ Đề". Thật ra, Như Lai là bản thể như như của các pháp, nên Như Lai không đặng pháp gì cả.</p>
      <p class="mb-0">Tu Bồ Đề! Như Lai đặng đạo Bồ Đề, không phải hư, không phải thật".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ hai (lần thứ nhứt ở đoạn 15) Phật dùng Trí huệ Kim Cang Bát Nhã, phá cái chấp "Phật có đắc pháp". Đúng theo tinh thần Kinh Kim Cang Bát Nhã, thì phải phá trừ hết các mây vô minh vọng chấp nhơn, ngã v.v... lúc bấy giờ mặt trời Bát Nhã chơn không (chơn như hay Phật tánh) mới hiện.</p>
    <p>Bởi thế nên Phật tuy đắc pháp Bồ Đề, nhưng không thấy mình có đắc (vô ngã) và pháp Bồ Đề (vô pháp) đã đắc, nên mới được Phật Nhiên Đăng thọ ký.</p>
    <p>Nếu Như Lai còn thấy mình có đắc pháp Bồ Đề, tức nhiên Như Lai còn chấp ngã (mình đặng) và chấp pháp (pháp Bồ Đề), chưa nhập được Kim Cang Bát Nhã, thì đâu được Cổ Phật Nhiên Đăng chứng nhận cho: "Về sau ông sẽ thành Phật hiệu là Thích Ca Mâu Ni".</p>
    <p>Chúng sanh chấp "Như Lai đặng quả Bồ Đề", vì chúng sanh chưa hiểu hai chữ "Như Lai". Phật giải thích: "Như Lai là bản thể như như của các pháp"; đã là như như, nên không có đặng pháp gì cả.</p>
    <p>Phật dạy tiếp: "Như Lai đặng đạo Bồ Đề, không phải hư, không phải thật". Nếu đạo Bồ Đề mà còn có hư hay là thật, thì không phải Bồ Đề. Đến chỗ này thì dùng lời nói luận bàn không trúng, đem ý thức suy nghĩ phân biệt cũng chẳng nhằm. Đây là lần thứ ba, Phật phá cái chấp "Như Lai đặng đạo Bồ Đề" (lần thứ nhứt và thứ hai ở về đoạn 15 và 36).</p>
    
    <p class="font-semibold mt-6">Ngộ được lý "Phật tuy đã thành Phật, nhưng không thấy mình được thành Phật", nên Ngài Phật Quốc Thiền sư có làm bài kệ như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Tâm tâm tức Phật, Phật tâm tâm</p>
          <p class="mb-0">Phật Phật tâm tâm, tức Phật tâm</p>
          <p class="mb-0">Tâm Phật ngộ lai vô nhứt vật</p>
          <p class="mb-0">Tướng quân chỉ khát vọng mai lâm.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Tâm tâm tức Phật, Phật tức tâm</p>
          <p class="mb-0">Phật Phật tức tâm, tâm tức Phật</p>
          <p class="mb-0">Tâm, Phật ngộ rồi không chi cả</p>
          <p class="mb-0">Nói me đỡ khát vạn quân binh.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý bài kệ</h4>
    <p>Người mê, chấp tâm và Phật riêng khác. Kẻ hiểu lại nói: Phật tức tâm, tâm tức Phật. Người tỏ ngộ rồi không còn thấy có Phật và tâm. Vì cảm hoá chúng sanh nên mới đặt ra có danh từ tâm và Phật để kêu gọi. Cũng như vì muốn cho vạn quân đỡ khát nước, nên vị Chỉ huy mới phương tiện nói "gần đến rừng me".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-0"><strong>GIẢI DANH TỪ:</strong> <strong>Thọ ký:</strong> Truyền trao và ký nhận.</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="tat-ca-phap-la-phat-phap" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">47. PHẬT NÓI: "TẤT CẢ CÁC PHÁP ĐỀU LÀ PHẬT PHÁP"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Như Lai nói: "Tất cả các pháp đều là Phật pháp". Tu Bồ Đề! Như Lai nói các pháp thật ra không phải các pháp, chỉ giả gọi "các pháp"; cũng như thân Phật cao lớn, Như Lai nói không phải thân Phật cao lớn, chỉ giả gọi "thân Phật cao lớn".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật phá cái chấp "các pháp và thân Phật". Kinh chép: "Pháp thân Phật biến khắp tất cả; cảnh giới của Phật ở gọi là Thường tịch quang". Bởi thế nên nói "tất cả các pháp đều là Phật pháp".</p>
    <p>Chúng ta bị mây vô minh che khuất trăng Bát Nhã, nên chỉ thấy các pháp ngã, nhơn v.v... chư Phật và Bồ Tát đã giác ngộ, phá tan mây vô minh, trăng Bát Nhã được sáng tỏ, nên chỉ thấy toàn là Phật pháp.</p>
    <p>Vừa nói đến "các pháp", sợ chúng sanh chấp "các pháp" mà không ngộ được tánh Bát Nhã chơn không, nên Phật liền phá: "Như Lai nói "các pháp" thật ra không phải "các pháp", chỉ giả gọi là "các pháp". Cũng như thân Phật, thật ra không phải thân Phật, chỉ giả gọi thân Phật".</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo phần 38, tại sao Phật khẳng định người thọ trì Kinh này sẽ có công đức vô lượng?",
    options: {
      a: "Vì Phật dùng Trí huệ Phật để thấy rõ người ấy đã trồng hạt giống Bồ Đề.",
      b: "Vì người đó đã cúng dường vô số chư Phật trong quá khứ.",
      c: "Vì họ đã thực hiện bố thí thân mạng nhiều như số cát sông Hằng.",
      d: "Vì họ đã xây dựng nhiều chùa tháp để thờ phụng Kinh Kim Cang.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Lược giải nêu: 'Phật dạy: Như Lai dùng Trí huệ Phật, thấy biết rõ ràng và chắc chắn... Người hiểu biết được nghĩa lý và thọ trì Kinh này... tức là đã trồng hạt giống Bồ Đề, tất nhiên sẽ đặng quả Bồ Đề nên Phật nói: Được công đức vô lượng'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong phần 39, việc so sánh công đức bố thí thân mạng nhằm mục đích gì?",
    options: {
      a: "Để làm nổi bật giá trị vô song của việc tin hiểu và thọ trì Kinh này.",
      b: "Để chứng minh rằng phước đức hữu vi là quan trọng nhất.",
      c: "Để khuyến khích người tu hành nên hy sinh thân mình cho đạo pháp.",
      d: "Để giải thích lý do tại sao số cát sông Hằng lại được coi là vô lượng.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Bố thí thân mạng (dù mỗi ngày 3 lần, vô số kiếp) là chuyện rất khó và tạo phước khổng lồ, nhưng Phật vẫn khẳng định người nghe và tin hiểu Kinh này còn được phước nhiều hơn, nhằm làm nổi bật giá trị vô song của việc ươm trồng hạt giống Kim Cang Bát Nhã (pháp thí vô lậu).",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao những người ưa pháp Tiểu thừa không thể tin hiểu hoặc giảng dạy Kinh này theo phần 40?",
    options: {
      a: "Vì họ không có đủ phước đức để thọ trì các bản kinh dài.",
      b: "Vì họ chưa bao giờ được nghe Phật Thích Ca thuyết giảng về Bát Nhã.",
      c: "Vì họ còn bị ràng buộc và chấp vào bốn tướng: ngã, nhơn, chúng sanh và thọ giả.",
      d: "Vì pháp Tiểu thừa vốn dĩ không công nhận sự tồn tại của Phật tính.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Phật dạy: 'Người ưa pháp Tiểu thừa, chấp bốn tướng: ngã, nhơn, chúng sanh và thọ giả, nên đối với Kinh này, họ không thể tin hiểu hoặc đọc tụng, hay giảng dạy cho người'.",
      d: "Sai.",
    },
  },
  {
    question: "Đâu là ý nghĩa của việc người thọ trì Kinh bị khinh khi trong phần 42?",
    options: {
      a: "Nhờ công đức thọ trì Kinh, tội chướng nặng nề từ đời trước được tiêu diệt qua quả báo nhẹ này.",
      b: "Đó là một thử thách mà chư Thiên đặt ra để kiểm tra lòng kiên nhẫn của người tu.",
      c: "Người đó đã phạm sai lầm trong quá trình đọc tụng hoặc phiên dịch Kinh.",
      d: "Đó là dấu hiệu cho thấy việc thọ trì Kinh không mang lại lợi ích thực tế.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Phật dạy: 'nếu người thọ trì... mà bị người khinh khi, thì người này do tội chướng đời trước rất nặng nề... đáng lẽ phải đoạ ác đạo; nhưng nay chỉ bị người khinh khi, thì tội chướng đời trước bị tiêu diệt và họ sẽ mau đặng quả Bồ Đề'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong phần 45, Phật dạy phương pháp nào để 'hàng phục vọng tâm' và 'an trụ chơn tâm'?",
    options: {
      a: "Phải cúng dường tám trăm bốn ngàn muôn ức chư Phật.",
      b: "Phải tìm đến những nơi vắng vẻ để tránh xa các tác động của ngoại cảnh.",
      c: "Hóa độ tất cả chúng sanh nhưng không thấy mình là người độ và có chúng sanh được độ.",
      d: "Phải tập trung vào việc đếm hơi thở và ngồi thiền liên tục.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Phật dạy phải dụng tâm: 'Ta hoá độ tất cả chúng sanh, nhưng không thấy có mình độ và chúng sanh được độ'. Không chấp bốn tướng (ngã, nhơn...) là cách hàng phục vọng tâm và an trụ chơn tâm.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Phật khẳng định 'Thật không có một pháp gì gọi là phát tâm Bồ Đề'?",
    options: {
      a: "Vì Bồ Đề là một trạng thái hư ảo không có thật.",
      b: "Để người tu hành không sinh lòng tự mãn hoặc trụ chấp vào ý niệm mình đang phát tâm.",
      c: "Vì chỉ có chư Phật mới thực sự biết cách phát tâm Bồ Đề đúng nghĩa.",
      d: "Vì thực tế không có ai có khả năng phát được tâm Bồ Đề.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Lược giải nêu: 'Nói đến Tâm Bồ Đề, sợ có người trụ chấp tâm Bồ Đề, nên Phật liền phá chấp: Thật không có một pháp gì gọi là phát tâm Bồ Đề'.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo phần 46, ý nghĩa thực sự của danh hiệu 'Như Lai' là gì?",
    options: {
      a: "Là vị Phật sẽ xuất hiện trong tương lai để cứu độ chúng sanh.",
      b: "Là bản thể như như của các pháp.",
      c: "Là người đã đạt được tất cả các pháp thuật thế gian.",
      d: "Là danh hiệu dành cho người đã cúng dường nhiều nhất cho Phật Nhiên Đăng.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Phật giải thích: 'Như Lai là bản thể như như của các pháp', nên Như Lai không đặng pháp gì cả.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Phật Nhiên Đăng lại thọ ký cho Phật Thích Ca (trong quá khứ là một vị Bồ Tát) sẽ thành Phật?",
    options: {
      a: "Vì vị Bồ Tát đó đã vượt qua kỳ thi về trí tuệ Bát Nhã.",
      b: "Vì vị Bồ Tát đó thực sự không thấy mình có đắc một pháp gì (vô đắc).",
      c: "Vì Phật Nhiên Đăng thấy vị Bồ Tát đó có thân hình cao lớn vượt trội.",
      d: "Vì vị Bồ Tát đó đã chứng đắc được một pháp tối thượng và nắm giữ nó.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Nếu Như Lai còn thấy mình có đắc pháp Bồ Đề thì còn chấp ngã, chấp pháp, Phật Nhiên Đăng sẽ không thọ ký. Vì Như Lai 'không có đắc pháp gì cả' (không trụ chấp) nên mới được thọ ký.",
      c: "Sai.",
      d: "Sai. Nắm giữ là có đắc (hữu đắc), sẽ không được thọ ký.",
    },
  },
  {
    question: "Câu nói 'Tất cả các pháp đều là Phật pháp' (phần 47) nên được hiểu như thế nào?",
    options: {
      a: "Mọi bài kinh viết ra đều có giá trị ngang bằng với lời Phật dạy.",
      b: "Khi đã giác ngộ và phá tan mây vô minh, ta thấy mọi hiện tượng đều biểu hiện chân lý của Phật.",
      c: "Người tu hành có quyền làm mọi việc vì tất cả đều đã là Phật pháp.",
      d: "Mọi tôn giáo và tín ngưỡng trên thế giới đều là Phật giáo.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Lược giải nêu: 'chư Phật và Bồ Tát đã giác ngộ, phá tan mây vô minh, trăng Bát Nhã được sáng tỏ, nên chỉ thấy toàn là Phật pháp.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo bài kệ của Ngài Trường Sa (phần 45), hành động 'đầu sào trăm thước thêm một bước' ám chỉ điều gì?",
    options: {
      a: "Phải tiếp tục học thêm nhiều kinh điển hơn nữa.",
      b: "Phải rời bỏ tất cả mọi vọng chấp cuối cùng để nhập vào pháp giới tánh.",
      c: "Cần phải rèn luyện thân thể để có thể chịu đựng được các thử thách khắc nghiệt.",
      d: "Sự nguy hiểm khi tu hành mà không có người hướng dẫn.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Bài kệ đại ý: Người tu hành dù đạt cảnh giới cao (đầu sào trăm thước) nhưng nếu còn trụ chấp thì chưa phải thật chứng. Phải buông bỏ nốt mọi vọng chấp ('thêm một bước' ra khỏi đầu sào) thì mới nhập được pháp giới tánh (Bát Nhã).",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-7-phan-chanh-ton-tiep-theo',
  slug: 'bai-thu-7-phan-chanh-ton-tiep-theo',
  title: 'Bài Thứ 7 - Phần Chánh tôn (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 11,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-7-phan-chanh-ton-tiep-theo/%C3%9D_ngh%C4%A9a_Kinh_Kim_Cang.png',
      readingContent,
      tableOfContents: [
        { id: 'b-phan-chanh-ton-tiep-theo', label: 'B. Phần Chánh tôn (tiếp theo)' },
        { id: 'nguoi-tho-tri-kinh', label: '38. Người thọ trì Kinh này công đức vô lượng', indent: 1 },
        { id: 'cong-duc-kinh-nay', label: '39. Công đức Kinh này vô biên không thể nghĩ bàn', indent: 1 },
        { id: 'dang-dao-qua-bo-de', label: '40. Phật khuyên người thọ trì đọc tụng Kinh sẽ được đạo quả Bồ-đề', indent: 1 },
        { id: 'cho-phung-tho-kinh', label: '41. Chỗ phụng thờ Kinh này, cũng được nhơn thiên và thánh thần cúng dường', indent: 1 },
        { id: 'bi-khinh-khi-do-toi-chuong', label: '42. Người thọ trì Kinh này mà bị khinh khi là do tội chướng của họ đời trước', indent: 1 },
        { id: 'cong-duc-nhieu-hon-phat-cung-duong', label: '43. Người thọ trì Kinh này, công đức nhiều hơn Phật Thích Ca cúng dường vô số chư Phật', indent: 1 },
        { id: 'phuoc-bao-khong-the-nghi-ban', label: '44. Kinh này nghĩa lý không thể nghĩ bàn, nên phước báo cũng không thể nghĩ bàn', indent: 1 },
        { id: 'hoi-lai-hai-cau-quan-trong', label: '45. Đây là lần thứ hai, ông Tu Bồ Đề hỏi lại Phật hai câu quan trọng', indent: 1 },
        { id: 'pha-chap-nhu-lai-dac-phap', label: '46. Phật phá cái chấp "Như Lai có đắc pháp với Phật Nhiên Đăng"', indent: 1 },
        { id: 'tat-ca-phap-la-phat-phap', label: '47. Phật nói: "Tất cả các pháp đều là Phật pháp"', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-7-phan-chanh-ton-tiep-theo/The_Diamond_Void.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/rMm3y_im310',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/7LL2uTuVPjCe3Mr6bzn49k',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 7',
    passPercentage: 70,
    questions,
  },
}

export default lesson