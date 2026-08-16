import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="b-phan-chanh-ton-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ BA: B- Phần Chánh tôn (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="khong-chap-thay-than-phat" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">7. KHÔNG NÊN CHẤP: "THẤY ĐƯỢC THÂN CỦA PHẬT LÀ THẤY ĐƯỢC PHẬT"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Phật hỏi: "Tu Bồ Đề ! Ông có thể cho thấy cái thân tướng của ta đây là thấy được Như Lai chăng?".</p>
    <p>Tu Bồ Đề thưa: "Bạch Thế Tôn ! Không thể cho thấy cái thân tướng của Ngài đó là thấy Như Lai. Tại sao vậy? _ Vì Như Lai nói: "Cái thân tướng này, không phải thật là thân tướng của Như Lai".</p>
    <p>Phật dạy tiếp: "Tu Bồ Đề ! Phàm cái gì có hình tướng đều là hư vọng. Nếu ông thấy các pháp (tướng) đều hư vọng, không thật (phi tướng) tức là thấy được Như Lai (thật tướng các pháp)".</p>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này, Phật dùng Trí huệ Bát Nhã phá trừ cái chấp: "Thấy sắc thân của Phật là thấy được Phật". Đây là lần thứ nhứt, nói về việc thấy Phật.</p>
    <p>Trên đường tu hành, phải có đủ cả Sự và Lý. Nhờ Sự tướng bên ngoài, mới ngộ được lý tánh bên trong; có ngộ Lý tánh bên trong, mới thấy rõ được Sự tướng bên ngoài.</p>
    <p>Người chấp Lý mà bỏ Sự, cũng như người chỉ kể suông đủ các thức ăn cao lương mỹ vị, nhưng bụng vẫn đói. Người mê Sự mà bỏ Lý, cũng như trẻ con mê bánh vẽ.</p>
    <p>Nhờ có tượng cốt giả, kinh giấy, Tăng phàm v.v... là sự tướng bên ngoài, để giúp chúng ta nhớ lại tìm cầu Phật thiệt, Pháp thiệt và Tăng thiệt trong tự tâm của chúng ta.</p>
    <p>Nếu bác bỏ Sự tướng bên ngoài là hư giả (không thờ Phật, tụng kinh v.v...) mà chỉ chấp suông về phần Lý tánh bên trong (Phật tức tâm), thì đức Phật nơi tâm ta cũng không làm sao biểu lộ ra được.</p>
    <p>Chư Tổ dạy:</p>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-1">"Thật tế lý địa, bất thọ nhứt trần</p>
      <p class="mb-0">Phật sự môn trung, bất xả nhứt pháp".</p>
    </div>
    <p>Nghĩa là: Về Phật tâm thanh tịnh, thì không có một mảy trần. Nhưng về phần Sự tướng tu hành, thì không thể bỏ qua một pháp nào.</p>
    <p>Trái lại, nếu chấp về Sự tướng (cầu Phật bên ngoài) mà không tìm Phật thiệt nơi tự tâm của mình, thì cũng không bao giờ thấy được Phật. Bởi thế nên Phật dạy:</p>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">"Nếu người chấp: "thấy sắc thân của ta cho là thấy được Phật, nghe tiếng nói Pháp của ta cho là nghe được tiếng Phật", thì người đó đã đi lạc về đường tà, không bao giờ thấy được Phật".<br><span class="text-sm opacity-80">(KINH KIM CANG)</span></p>
    </div>
    
    <p>Ngày xưa có hai vị Tỳ kheo, từ phương xa đến chiêm bái Phật. Đi đường xa hết nước, bị khát lâu ngày, vừa gặp ao nước có sinh trùng, một vị giữ giới không uống nên chết giữa đường; một vị uống nước được sống, đi đến ra mắt Phật.</p>
    <p>Phật quở rằng: "Ông Tỳ kheo giữ giới kia tuy chết, nhưng ông vẫn sống và đã thấy ta rồi. Còn ông không giữ giới tuy sống, ở sát bên ta, nhưng thật ra ông đã chết và cách ta ngàn dặm".</p>
    <p>Tại sao, vị Tỳ kheo giữ giới bị chết giữa đường không thấy Phật, mà Phật lại cho "đã thấy được ta rồi"; trái lại, vị Tỳ kheo không giữ giới còn sống ở bên Phật thấy được Phật, mà Phật lại cho là "cách Phật ngàn dặm?".</p>
    <p>Cho biết, thấy cái sắc thân có 32 tướng tốt và 80 vẻ đẹp bên ngoài của Phật, chưa phải là thấy được Phật; phải thấy "Phật tâm thanh tịnh" hay "pháp thân Phật" mới thật là thấy Phật.</p>
    <p>Song le, đa số chúng sanh, chỉ rong ruổi chạy theo giả tướng, tìm Phật bên ngoài, mà không biết xoay trở lại tìm Đức Phật thiệt trong tâm của mình. Bởi thế nên cổ nhơn quở: "Phật trong nhà không thờ, mà thờ đức Phật Thích Ca ngoài đường" là vậy.</p>
    <p>Vì phá cái mê lầm này, nên Tổ Đơn Hà đốt một vị Phật gỗ (Phật giả). Có người hỏi Ngài: "Đốt để làm gì?". _ Ngài trả lời: "Đốt để tìm xá lợi" (tìm Phật thiệt). Ông chủ chùa thấy vậy sợ khủng khiếp, nên rụng hết râu mày; vì huỷ kinh đốt Phật là tội rất nặng.</p>
    <p>Vì sự kiện này, nên cổ nhơn có làm bài kệ:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Đơn Hà thiêu mộc Phật</p>
          <p class="mb-0">Viện chủ lạc tu mi</p>
          <p class="mb-0">Nhứt trường kỳ đặc sự</p>
          <p class="mb-0">Thiên hạ thiểu nhơn tri</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Tổ Đơn Hà đốt Phật gỗ</p>
          <p class="mb-0">Ngài viện chủ rụng râu mày</p>
          <p class="mb-0">Một trường hợp rất đặc biệt</p>
          <p class="mb-0">Trong thiên hạ ít người biết.</p>
        </div>
      </div>
    </div>

    <p>Trọng tâm trong đoạn văn này là hai chữ "thấy Phật". Phật hỏi: "Ông có thể cho thấy cái thân tướng của ta đây là thấy được Như Lai chăng?" _ Ngài Tu Bồ Đề đáp: "Không thể cho thấy cái thân tướng của Phật là thấy Phật".</p>
    <p>Phật dạy tiếp: "Phàm cái gì có hình tướng đều là hư vọng", (phàm sở hữu tướng giai thị hư vọng). Sắc thân của Phật do tứ đại giả hợp, có hình tướng nên cũng là hư vọng. Bởi thế nên thấy sắc thân của Phật, chưa phải là thấy được Phật.</p>
    <p>Vậy thì thấy cái gì mới thấy được Phật?</p>
    <p>Phật dạy tiếp: "Nếu ông thấy các pháp (tướng) đều là hư vọng, tức là thấy được Như Lai (thật tướng các pháp)".</p>
    
    <p class="font-semibold mt-6">Ngài Thái Hư Pháp sư giảng:</p>
    <p>Đoạn này không những nói sắc thân của Phật là hư vọng, mà tất cả các hình tướng, như thế giới chúng sanh v.v... cũng đều hư vọng, như hoa trong gương, như trăng dưới nước, không có chơn thật. Nếu người rõ thấu được các tướng đều hư vọng như vậy, tức là đã thấy được "pháp thân của Như Lai", tức là rõ thấu được "tướng chân thật của các pháp", cũng tức là "Trí huệ vô thượng", và cũng tức là "Kim Cang Bát Nhã diệu tâm".<br><span class="text-sm opacity-80">(KIM CANG GIẢNG LUẬN)</span></p>

    <p>Tóm lại, đoạn kinh này, Phật dùng Trí huệ Kim Cang Bát Nhã, phá trừ vọng chấp: "Thấy sắc thân có 32 tướng tốt, và 80 vẻ đẹp bên ngoài của Phật, rồi chấp là thấy được Phật", mà quên xoay trở lại, tự tìm cầu Đức Phật thiệt trong tự tâm của mình.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="nguoi-tin-duoc-kinh-nay" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">8. NGƯỜI TIN ĐƯỢC KINH NÀY, DO ĐÃ TRỒNG CĂN LÀNH TỪ NHIỀU KIẾP</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Ông Tu Bồ Đề hỏi Phật: "Bạch Thế Tôn ! Chúng sanh nghe đến kinh này, chẳng biết có tin được không?".</p>
    <p>Phật dạy: "Tu Bồ Đề ! Ông chớ nên lo như vậy. Không những hiện tại mà cả vị lai đều có người nghe và tin được kinh này. Sau 500 năm, khi Như Lai nhập diệt, nếu có người xuất gia (trì giới) hoặc tại gia (tu phước) nghe đến kinh này, mà sanh lòng tin thọ, thì biết người này đã trồng căn lành (đã tu), không phải mới bốn năm đời Phật, mà đã nhiều kiếp tu hành, từ vô lượng vô số chư Phật đến nay.</p>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Ông Tu Bồ Đề hỏi Phật: "Không biết chúng sanh nghe đến kinh này, có tin được không?". Đây là lần thứ nhứt hỏi về việc tin thọ.</p>
    <p>Phật vì những hàng Đại thừa Bồ Tát, nói kinh Kim Cang Bát Nhã, dạy các vị Bồ Tát, dùng Trí huệ Bát Nhã, phá trừ các vô minh vọng chấp ngã, pháp, để trở về với bản tâm thanh tịnh là tánh Bát Nhã chơn không, vô trụ vô tướng.</p>
    <p>Ông Tu Bồ Đề lo ngại cho chúng sanh căn cơ thấp kém, sợ e không hiểu và không tin, nên ông hỏi Phật: "Không biết chúng sanh nghe đến kinh này, có tin được không?".</p>
    <p>Đại ý, Phật dạy: không những hiện tại ở đời Chánh pháp, có chúng sanh hiểu và tin được kinh này, mà vị lai, sau khi Phật nhập diệt 500 năm, trong đời Tượng pháp hoặc Mạt pháp, cũng có chúng sanh hiểu và tin được kinh này. Nhưng, những chúng sanh đời Tượng pháp hoặc Mạt pháp tin được kinh này, là do họ đã nhiều kiếp có tu hành, trồng căn lành từ vô lượng đức Phật về trước (như Ngài Huệ Năng chỉ nghe một câu "ưng vô sở trụ nhi sanh kỳ tâm" trong kinh này mà được tỏ ngộ), chứ không phải mới tu từ bốn năm đời đức Phật trở lại đây.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="nguoi-tho-tri-kinh-nay" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">9. NGƯỜI THỌ TRÌ KINH NÀY CÔNG ĐỨC VÔ LƯỢNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Phật dạy tiếp: "Tu Bồ Đề ! Như Lai thấy rõ ràng và biết chắc chắn: Nếu có chúng sanh nào nghe đến kinh này, sanh tâm tin thọ, cho đến trong thời gian rất ngắn, chỉ nhứt niệm, thì chúng sanh đó sẽ được phước đức vô lượng vô biên.</p>
    <p>Tại sao vậy? _ Vì chúng sanh này không còn chấp tướng ngã, tướng nhơn, tướng chúng sanh, tướng thọ giả, tướng phải pháp và tướng không phải pháp".</p>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Phật khuyên người tin và thực hành theo kinh này, sẽ được công đức vô lượng. Đây là lần khuyên thứ nhứt.</p>
    <p>Người có cái khiếu về âm nhạc, mới nhận được cái hay và ưa thích về âm nhạc. Người có cái khiếu về hội hoạ mới thấy được cái đẹp và ưa thích về hội hoạ. Người có cái khiếu về văn chương mới thấy cái hay và ưa thích về văn chương.</p>
    <p>Cũng thế, người có cái khiếu về Bát Nhã, hay nói theo danh từ Duy thức là "hạt giống Bát Nhã", mới hiểu và tin được kinh Bát Nhã.</p>
    <p>Người đã có hạt giống Bát Nhã, tất nhiên không còn chấp các tướng: ngã, nhơn, chúng sanh, thọ giả, tướng phải pháp (Phật pháp) và tướng không phải pháp (tà pháp). Người này được nghe thêm kinh Bát Nhã làm cho hạt giống Bát Nhã của mình được sanh trưởng, sẽ mau đặng quả Bồ Đề. Bởi thế nên Phật dạy: "Ta thấy rõ ràng và biết chắc chắn: chúng sanh nào nghe hiểu và tin được kinh này, thì sẽ được phước đức vô lượng vô biên".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="giao-phap-nhu-chiec-thuyen" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">10. GIÁO PHÁP CỦA PHẬT CŨNG NHƯ CHIẾC THUYỀN ĐƯA NGƯỜI QUA BỂ KHỔ</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Phật dạy: "Nếu các ông còn chấp các tướng, hoặc chấp "tướng chánh pháp" hay chấp "tướng phi chánh pháp" thì cũng đều bị dính mắc nơi bốn tướng: ngã, nhơn, chúng sanh và thọ giả. Bởi thế nên không được chấp "tướng chánh pháp" hay chấp "tướng phi chánh pháp".</p>
    <p>Cũng vì lẽ đó, nên Như Lai thường dạy: "Các thầy Tỳ kheo phải biết: giáo pháp của ta cũng như chiếc đò, đưa người qua sông; các ông không nên trụ chấp nơi giáo pháp.</p>
    <p>"Chánh pháp" còn không nên trụ chấp huống chi là "phi pháp"".</p>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã, phá trừ cái chấp "chánh pháp" và chấp "phi chánh pháp".</p>
    <p>Phật dạy hành giả, không nên chấp một tướng gì cả; dù là "chánh pháp" (hay Phật pháp) cũng không được chấp. Nếu còn trụ chấp, bất luận một tướng gì, thì cũng đều bị mắc vào bốn tướng: ngã, nhơn, chúng sanh và thọ giả, hay nói gọn hơn là mắc vào tướng ngã, pháp. Nếu còn chấp ngã, pháp thì phiền não vọng chấp đua nhau sanh khởi. Phiền não vọng chấp sanh khởi, thì hành giả không thể hàng phục được vọng tâm và an trụ chơn tâm.</p>
    <p>Bởi thế nên Phật dạy: "Giáo pháp của Phật cũng như chiếc đò đưa người qua sông". Khi đến bờ rồi hành giả phải bỏ chiếc đò, mà lên bờ. Trái lại, nếu hành giả cứ khư khư chấp giữ chiếc đò, thì không bao giờ lên bờ được. Người tu hành cũng thế, phải bỏ cái "chấp", mới lên bờ giải thoát được.</p>
    <p>Trong Kinh Viên giác chép: "Tất cả kinh giáo của Phật, cũng như ngón tay để chỉ mặt trăng. Người xem, phải nương ngón tay mới thấy được mặt trăng. Nhưng nếu chấp ngón tay (chỉ xem ngón tay) thì không bao giờ thấy được mặt trăng".</p>
    <p>Tóm lại, Phật dạy: "chánh pháp" (Phật pháp) còn không nên chấp, huống chi là "phi pháp".</p>
    <p>Ngài Xuyên Thiền sư ngộ được lý vô trước của kinh Bát Nhã, nên làm bài kệ rằng:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Đắc thọ phàn chi mạt túc kỳ</p>
          <p class="mb-0">Huyền nhai tán thủ trượng phu nhi</p>
          <p class="mb-0">Thuỷ hàn dạ lãnh ngư nan mích</p>
          <p class="mb-0">Lưu đắc không thuyền tải nguyệt qui.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Níu nhánh chuyền cây chẳng phải tài</p>
          <p class="mb-0">Dốc đứng buông tay mới trượng phu</p>
          <p class="mb-0">Gió lạnh đêm khuya câu chẳng có</p>
          <p class="mb-0">Thuyền không chỉ chở bóng trăng thanh.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý</h4>
    <p>Câu thứ nhứt, nói về tiệm tu, phải lần hồi, còn chấp trụ nơi danh tướng; cũng như người đi mà níu nhánh vịn cây, thì không có gì hay cả.</p>
    <p>Câu thứ hai, nói về đốn tu, không trụ chấp các tướng; cũng như người đi lên dốc ngược, mà không níu vịn đâu hết, mới là bậc đại tài.</p>
    <p>Câu thứ ba, nói về tâm cảnh đều vắng lặng, cũng như canh khuya thanh vắng, bầu trời yên lặng, mặt nước phẳng lặng như tờ, cá chim cũng đều lặng nghỉ, không hoạt động.</p>
    <p>Câu thứ tư, nói về khi các vọng chấp các tướng ngã, pháp đã hết, thì chỉ còn ánh Trí huệ Bát Nhã chơn không; cũng như chiếc thuyền không (không chấp) chỉ chở bóng trăng thanh (Trí huệ Bát Nhã).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-nhu-lai-thanh-phat" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">11. PHẬT PHÁ CÁI CHẤP "NHƯ LAI CÓ THÀNH PHẬT VÀ THUYẾT PHÁP"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Phật hỏi ông Tu Bồ Đề: "Như Lai có thành Phật không? Và Như Lai có thuyết pháp không?".</p>
    <p>Tu Bồ Đề thưa: "Bạch Thế Tôn ! Như Lai không thành Phật và Như Lai cũng không thuyết pháp. Tại sao vậy? Vì pháp của Như Lai, không thể chấp thủ, nói năng không trúng, suy nghĩ chẳng nhằm, không phải chánh pháp, mà cũng không phải phi pháp.</p>
    <p>Như thế thì làm sao, có cái gì quyết định là "thành Phật", và có cái gì quyết định là "nói pháp"".</p>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá trừ cái chấp "Như Lai thật có thành Phật, và thật có nói pháp".</p>
    <p>Trong Duy thức Tam thập tụng có chép:</p>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-1">Hiện tiền lập thiểu vật</p>
      <p class="mb-1">Vị thị Duy thức tánh</p>
      <p class="mb-1">Dĩ hữu sở đắc cố</p>
      <p class="mb-0">Phi thật trụ Duy thức</p>
    </div>
    <p>Nghĩa là: nếu hành giả hiện tiền còn phần nào chấp mình có chứng Duy thức tánh, thì chưa phải thật chứng Duy thức tánh, vì còn vọng chấp có "sở đắc" vậy.</p>
    <p>Nếu Như Lai có thành Phật, tất nhiên phải có chúng sanh chưa thành Phật, thế thì bốn tướng: ngã, nhơn v.v... đua nhau sanh khởi. Nếu còn ngã, nhơn v.v... thì không phải là Phật.</p>
    <p>Nếu Như Lai có nói pháp, tất nhiên phải có chúng sanh nghe pháp. Nếu còn có kẻ nói người nghe, tức nhiên còn nhơn, ngã, bỉ, thử. Nếu còn ngã, nhơn thì không phải là thuyết Phật pháp. Bởi thế, nên Phật thuyết pháp 49 năm, mà rốt cuộc Phật nói: "Ta không nói một chữ".</p>
    <p>Đức Lão Tử nói: "Cái "đạo" mà có thể nói được, thì không phải thật là đạo. Cái "tên" mà có thể kêu gọi được, thì không phải thật là "tên"" (Đạo khả đạo, phi thường đạo giả, danh khả danh, phi thường danh).</p>
    <p>Kinh chép: "Một hôm, ông Tu Bồ Đề ngồi yên lặng dưới gốc cây. Trời Đế Thích đến rưới hoa cúng dường. Ông Tu Bồ Đề hỏi: "Ai rải hoa và rải hoa để làm gì?". Trời Đế Thích thưa: "Ngài nói kinh Bát Nhã hay quá ! Con đến rải hoa cúng dường". Ông Tu Bồ Đề nói: "Ta không nói kinh Bát Nhã". Trời Đế Thích thưa: "Ngài không nói, con không nghe"".</p>
    <p>Kết luận: "Không nói Bát Nhã và không nghe Bát Nhã", như thế mới thật là "nói Bát Nhã và nghe Bát Nhã".</p>
    <p>Ông Tu Bồ Đề đã hiểu: "Phật pháp" không thể nghĩ bàn, không thể chấp thủ, chẳng phải "có", chẳng phải "không", không phải "chánh pháp" và cũng không phải "phi chánh pháp"; nên bạch Phật rằng: "Như Lai không thành Phật và Như Lai cũng không thuyết pháp".</p>
    <p>Tóm lại, phải rời các vọng chấp, không còn dụng tâm suy nghĩ và lời nói luận bàn, mới thật là "thành Phật" và "thuyết pháp".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phat-phap-khong-sai-khac" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">12. PHẬT PHÁP KHÔNG CÓ SAI KHÁC, DO TRÌNH ĐỘ CỦA CHÚNG SANH MÀ THẤY CÓ SAI KHÁC</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Ông Tu Bồ Đề bạch Phật: "Phật pháp đã như thế, tại sao lại có các quả thánh hiền cao thấp khác nhau?". Phật dạy: "Vì trình độ của chúng sanh có sai khác, nên có các quả thánh hiền sai khác, chứ không phải Phật pháp (vô vi) có sai khác".</p>
    
    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này phá cái chấp "Phật pháp có sai khác".</p>
    <p>Đoạn trên đã nói: "Pháp của Như Lai, không thể chấp thủ, nói năng không trúng, suy nghĩ chẳng nhằm, không phải chánh pháp và cũng không phải phi pháp". Phật pháp đã cao siêu như vậy, vượt ra ngoài nói năng và suy nghĩ, tại sao lại có các quả thánh hiền cao thấp khác nhau?</p>
    <p>Phật giải thích: "Vì trình độ của chúng sanh có sai khác, nên có các quả thánh hiền sai khác, chứ không phải Phật pháp có sai khác".</p>
    <p>Trong kinh thường thí dụ: "Như ba con thú qua sông". Nghĩa là Phật pháp như con sông, không cạn không sâu. Hành giả như ba con thú lội qua sông: Con Dê thì lội ngập đầu (dụ cho Tiểu thừa); con Nai thì lội ngập cổ (dụ cho Trung thừa); con Voi thì lội ngập ống chân (dụ cho Đại thừa).</p>
    <p>Phật pháp cao siêu huyền diệu, không thể nói năng và luận bàn, nên Ngài Xuyên Thiền sư có làm bài tụng rằng:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Hư không cảnh giới khởi tư lương</p>
          <p class="mb-0">Đại đạo thanh u lý cánh trường</p>
          <p class="mb-0">Đản đắc ngũ hồ phong nguyệt tại</p>
          <p class="mb-0">Xuân lai y cựu bách hoa hương.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Hư không rộng rãi lớn bao la</p>
          <p class="mb-0">Lý đạo lại càng quá thẳm xa</p>
          <p class="mb-0">Trăng, gió, nước hồ thường tự tại</p>
          <p class="mb-0">Chào xuân đua nở trăm nghìn hoa.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý</h4>
    <p>Hư không đã rộng lớn bao la không thể nghĩ bàn, Phật pháp lại càng cao siêu huyền diệu rộng lớn hơn hư không. Cảnh vật thiên nhiên của vũ trụ, như trăng thanh gió mát, nước hồ phẳng lặng, xuân về trăm hoa đua nở v.v... đều nói lên tinh thần tự tại giải thoát của Phật pháp.</p>
    <p>Kinh chép: "Nhứt thế chư Pháp vô phi Phật pháp". Nghĩa là "Tất cả các pháp thế gian cũng đều là Phật pháp". Nếu mê thì pháp thế gian, còn ngộ là Phật pháp.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="pl-6 space-y-2">
        <p class="mb-0"><strong>Chấp thủ:</strong> nắm giữ</p>
        <p class="mb-0"><strong>Chánh Pháp:</strong> Pháp chơn chánh</p>
        <p class="mb-0"><strong>Phi Pháp:</strong> Pháp không chơn chánh</p>
        <p class="mb-0"><strong>Vô vi:</strong> Pháp không bị tạo tác thi vi, không sanh diệt, tức là chơn như hay Phật tánh.</p>
      </div>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo đoạn trích, điều kiện cốt lõi để một người có thể thực sự 'thấy được Như Lai' là gì?",
    options: {
      a: "Tu hành khổ hạnh cho đến khi thân hình tiều tụy.",
      b: "Nghe được âm thanh thuyết pháp vang dội của Như Lai.",
      c: "Nhận ra mọi hình tướng đều là hư vọng và không thật.",
      d: "Chiêm bái thân tướng có 32 tướng tốt và 80 vẻ đẹp của Phật.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Phật dạy: 'Nếu ông thấy các pháp (tướng) đều hư vọng, không thật (phi tướng) tức là thấy được Như Lai (thật tướng các pháp)'.",
      d: "Sai. Đoạn kinh dùng Trí huệ Bát Nhã phá trừ cái chấp 'thấy sắc thân là thấy Phật'.",
    },
  },
  {
    question: "Tại sao Phật lại quở vị Tỳ kheo uống nước có sinh trùng là 'cách Ta ngàn dặm' dù ông ta đang đứng ngay cạnh Phật?",
    options: {
      a: "Vì vị Tỳ kheo đó chưa thọ trì kinh Kim Cang Bát Nhã.",
      b: "Vì vị Tỳ kheo đó không trồng đủ căn lành từ nhiều kiếp trước.",
      c: "Vì vị Tỳ kheo đó đã phạm giới và không thấy được 'Phật tâm thanh tịnh'.",
      d: "Vì vị Tỳ kheo đó không có đủ trí huệ để hiểu kinh điển.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Vị Tỳ kheo phạm giới (uống nước có trùng) dù sống sát bên Phật nhưng không thấy được 'Phật tâm thanh tịnh' nên coi như đã chết và cách Phật ngàn dặm.",
      d: "Sai.",
    },
  },
  {
    question: "Theo lời Phật dạy trong đoạn 8, những người ở đời Mạt pháp mà tin được kinh này là do nguyên nhân gì?",
    options: {
      a: "Do họ có trí thông minh vượt trội so với người bình thường.",
      b: "Do họ may mắn gặp được các vị thiện tri thức chỉ dạy.",
      c: "Do họ đã trồng căn lành từ vô lượng kiếp và tu hành qua nhiều đời Phật.",
      d: "Do họ đã đọc qua tất cả các giáo pháp khác trước khi đọc kinh này.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Phật dạy những người tin được kinh này ở thời vị lai là do 'đã trồng căn lành... từ vô lượng vô số chư Phật đến nay'.",
      d: "Sai.",
    },
  },
  {
    question: "Hình ảnh 'chiếc thuyền đưa người qua sông' được dùng để ám chỉ điều gì về giáo pháp của Phật?",
    options: {
      a: "Giáo pháp là đích đến cuối cùng của người tu hành.",
      b: "Giáo pháp là phương tiện để đạt đến giải thoát, không nên chấp giữ khi đã xong việc.",
      c: "Giáo pháp là thứ quý giá nhất cần phải mang theo suốt đời.",
      d: "Giáo pháp là rào cản ngăn cách chúng sanh với bể khổ.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Giáo pháp của ta cũng như chiếc đò, đưa người qua sông; các ông không nên trụ chấp nơi giáo pháp.' Tức là qua sông rồi phải bỏ đò mới lên bờ được.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Ngài Tu Bồ Đề lại khẳng định Như Lai không thành Phật và không thuyết pháp?",
    options: {
      a: "Vì pháp của Như Lai không thể chấp thủ, không thể nói năng hay suy nghĩ cho trúng.",
      b: "Vì Như Lai chưa đạt đến cảnh giới giác ngộ hoàn toàn.",
      c: "Vì tất cả những gì Phật nói chỉ là những lời giả dối để thử lòng đệ tử.",
      d: "Vì Ngài Tu Bồ Đề muốn phủ nhận vai trò của đức Phật.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Vì pháp của Như Lai, không thể chấp thủ, nói năng không trúng, suy nghĩ chẳng nhằm, không phải chánh pháp, mà cũng không phải phi pháp.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo văn bản, lý do thực sự dẫn đến việc có các quả vị Thánh hiền cao thấp khác nhau là gì?",
    options: {
      a: "Do trình độ và căn cơ của chúng sanh có sự sai khác.",
      b: "Do bản thân Phật pháp có sự phân chia cao thấp.",
      c: "Do thời gian tu hành dài hay ngắn khác nhau.",
      d: "Do sự thiên vị của đức Phật khi truyền dạy giáo pháp.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Phật dạy: 'Vì trình độ của chúng sanh có sai khác, nên có các quả thánh hiền sai khác, chứ không phải Phật pháp (vô vi) có sai khác'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Câu kệ 'Thuyền không chỉ chở bóng trăng thanh' trong đoạn 10 diễn tả trạng thái tâm linh nào?",
    options: {
      a: "Tâm còn đầy rẫy những suy tính về công đức tu hành.",
      b: "Sự cô đơn, lạnh lẽo của người tu hành trong đêm tối.",
      c: "Sự bế tắc khi không tìm thấy cá (giáo pháp) trong đêm lạnh.",
      d: "Tâm đã hết các vọng chấp về ngã, pháp và chỉ còn ánh sáng trí huệ Bát Nhã.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Theo đại ý, 'thuyền không' dụ cho việc không còn chấp ngã/pháp, 'chở bóng trăng thanh' dụ cho ánh sáng Trí huệ Bát Nhã chơn không hiện ra.",
    },
  },
  {
    question: "Theo giải thích từ 'Lược giải' đoạn 7, tại sao chúng ta vẫn cần đến tượng Phật và kinh sách dù chúng chỉ là giả tướng?",
    options: {
      a: "Vì không có chúng thì chúng ta không thể thể hiện sự giàu có của đạo tràng.",
      b: "Vì đó là những vật phẩm linh thiêng có khả năng ban phước trực tiếp.",
      c: "Vì đức Phật bắt buộc mọi đệ tử phải thờ cúng hình tượng Ngài.",
      d: "Để giúp chúng ta ghi nhớ và tìm cầu Phật thiệt, Pháp thiệt trong tự tâm.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Nhờ có tượng cốt giả, kinh giấy, Tăng phàm v.v... là sự tướng bên ngoài, để giúp chúng ta nhớ lại tìm cầu Phật thiệt, Pháp thiệt... trong tự tâm của chúng ta.'",
    },
  },
  {
    question: "Hành động đốt tượng Phật gỗ của Tổ Đơn Hà nhằm mục đích gì?",
    options: {
      a: "Để chứng minh năng lực thần thông của mình trước đám đông.",
      b: "Để sưởi ấm trong mùa đông giá rét vì không còn củi.",
      c: "Để phá tan sự mê lầm, chấp vào hình tướng giả mà quên Phật thiệt.",
      d: "Để phá hoại tài sản của chùa do mâu thuẫn với viện chủ.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai. Tuy đây có thể là một phần giai thoại thực tế, nhưng mục đích đạo lý trong bài là C.",
      c: "Đúng. Tổ Đơn Hà đốt Phật giả và nói 'Đốt để tìm xá lợi' nhằm phá tan sự mê lầm của người đời hay rong ruổi tìm Phật bên ngoài mà quên Phật thiệt trong tâm.",
      d: "Sai.",
    },
  },
  {
    question: "Ý nghĩa của ví dụ 'ngón tay chỉ mặt trăng' trong kinh Viên Giác là gì?",
    options: {
      a: "Chúng ta không cần ngón tay vẫn có thể thấy được mặt trăng dễ dàng.",
      b: "Mặt trăng là thứ không có thật, chỉ có ngón tay là thật.",
      c: "Ngón tay chính là mặt trăng nên cần phải tôn thờ ngón tay.",
      d: "Kinh điển là phương tiện (ngón tay) để thấy chân lý (mặt trăng), không nên nhầm lẫn giữa hai thứ.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Kinh giáo (ngón tay) là phương tiện để chỉ chân lý (mặt trăng). Người tu nương vào kinh để thấu chân lý, không nên lầm chấp kinh điển chính là chân lý (chấp ngón tay).",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-3-phan-chanh-ton-tiep-theo',
  slug: 'bai-thu-3-phan-chanh-ton-tiep-theo',
  title: 'Bài Thứ 3 - Phần Chánh tôn (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 7,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-3-phan-chanh-ton-tiep-theo/%C3%9D_ngh%C4%A9a_Kinh_Kim_Cang.png',
      readingContent,
      tableOfContents: [
        { id: 'b-phan-chanh-ton-tiep-theo', label: 'B- Phần Chánh tôn (tiếp theo)' },
        { id: 'khong-chap-thay-than-phat', label: '7. Không nên chấp: "Thấy được thân của Phật là thấy được Phật"', indent: 1 },
        { id: 'nguoi-tin-duoc-kinh-nay', label: '8. Người tin được Kinh này, là do đã trồng căn lành từ nhiều kiếp', indent: 1 },
        { id: 'nguoi-tho-tri-kinh-nay', label: '9. Người thọ trì kinh này được công đức vô lượng', indent: 1 },
        { id: 'giao-phap-nhu-chiec-thuyen', label: '10. Giáo pháp của Phật cũng như chiếc thuyền đưa người qua bể khổ', indent: 1 },
        { id: 'pha-chap-nhu-lai-thanh-phat', label: '11. Phật phá cái chấp "Như Lai có thành Phật và thuyết pháp"', indent: 1 },
        { id: 'phat-phap-khong-sai-khac', label: '12. Phật pháp không có sai khác, do trình độ của chúng sanh mà thấy có sai khác', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-3-phan-chanh-ton-tiep-theo/The_Art_of_Breaking_Attachments.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/BMW_0AEqE0o',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6RGZLJq7OaST37a9GDk8d1',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 3',
    passPercentage: 70,
    questions,
  },
}

export default lesson