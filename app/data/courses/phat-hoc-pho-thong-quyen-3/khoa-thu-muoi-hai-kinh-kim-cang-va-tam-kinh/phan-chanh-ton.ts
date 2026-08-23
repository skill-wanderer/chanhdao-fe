import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÁT NHÃ TÂM KINH</p>
      <h2 id="phan-chanh-ton" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Phần Chánh Tôn</h2>
    </div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Ngài gọi ông Xá Lợi Tử dạy rằng: "Này Xá Lợi Tử! Năm uẩn (sắc, thọ, tưởng, hành, thức) chẳng khác với "không" (Bát Nhã), "không" chẳng khác với năm uẩn; sắc tức là "không" (Bát Nhã), "không" tức là năm uẩn.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại ý đoạn này nói: Năm uẩn tức là "không" (Bát Nhã), "không" tức là năm uẩn.</p>
    <p>Nói năm uẩn tức là nói tất cả các pháp. Tất cả các pháp có hai phần: Tánh và Tướng. Tánh của các pháp thì không có hình tướng. Kinh gọi là "không tướng" (<em>thị chư pháp không tướng</em>). Bởi "không tướng" nên không sai khác, không sanh diệt, không hư hoại v.v... cũng gọi là thật tướng, chơn tướng, chơn tánh, chơn không, chơn như hay chơn tâm v.v...</p>
    <p>Tướng của các pháp thì có hình tướng, như năm uẩn hay các pháp sai khác, có sanh diệt, hư dối không thật, rốt cuộc hoàn không. Kinh chép: "Ngũ uẩn giai không".</p>
    <p>Thí dụ như vòng, kiềng, xoa, xuyến là "tướng" của vàng; băng, tuyết, mù sương, nước đá là "tướng" của nước, đều có sanh diệt, hư giả không thật, rốt cuộc đều trở về không. Còn "tánh" của vàng hay "tánh" của nước thì không có các tướng: dài, ngắn, vuông, tròn v.v... (dụ cho không tướng). Vì "không tướng" nên không sanh diệt hư hoại; dụ như thật tướng, chơn tướng hay chơn không v.v... <span class="text-sm opacity-80">(Đây chỉ là thí dụ cho dễ hiểu, chứ không phải "vàng" hay "nước" là thật tướng hay chơn tướng v.v...)</span>.</p>
    
    <p class="font-semibold mt-6">Đoạn kinh này có hai tầng đạo lý, cạn và sâu khác nhau.</p>
    <p>Tầng đạo lý thứ nhất, dùng hai chữ "chẳng khác":</p>
    <div class="pl-6 space-y-1 mb-4">
      <p class="mb-0">Năm uẩn "chẳng khác" với không</p>
      <p class="mb-0">Không "chẳng khác" với năm uẩn.</p>
    </div>
    <p>Nghĩa là đem "năm uẩn" với "chơn không" để so sánh nhau: Lấy "năm uẩn" so sánh với "chơn không" không khác; và lấy "chơn không" để so sánh với "năm uẩn" cũng không khác. Tuy không khác, nhưng có người hiểu: vẫn còn một bên "năm uẩn" và một bên "chơn không". Cũng như nói "sóng và nước không khác", nhưng vẫn còn chấp: sóng và nước hai thứ riêng biệt.</p>
    
    <p>Đến tầng đạo lý thứ hai, có phần sâu hơn, lại dùng hai chữ "tức là":</p>
    <div class="pl-6 space-y-1 mb-4">
      <p class="mb-0">Năm uẩn "tức là" không</p>
      <p class="mb-0">Không "tức là" năm uẩn.</p>
    </div>
    <p>Nghĩa là: "năm uẩn" tức là "chơn không", "chơn không" tức là "năm uẩn". Năm uẩn với chơn không, không còn hai phần riêng biệt nữa. Cũng như nói: sóng tức là nước, nước tức là sóng, không có riêng khác.</p>
    <p>Tầng đạo lý thứ nhứt nói: Năm uẩn "chẳng khác" với Không, Không "chẳng khác" với Năm uẩn, tức là nói: Tướng của các pháp "chẳng khác" với tánh của các pháp. Tánh của các pháp "chẳng khác" với Tướng của các pháp. Cũng như nói: Kẹo (tướng) "không khác" với đường (tánh); Đường "không khác" với kẹo.</p>
    <p>Tầng đạo lý thứ hai nói: Năm uẩn "tức là" Không, Không "tức là" Năm uẩn; tức là nói: Tướng của các pháp "tức là" Tánh của các pháp. Tánh của các pháp "tức là" Tướng của các pháp. Cũng như nói: Kẹo (tướng) "tức là" Đường (tánh); Đường "tức là" kẹo.</p>

    <p class="font-semibold mt-6">Muốn rõ thêm đoạn kinh này, chúng tôi xin thí dụ như sau:</p>
    <p>Như người mê ngủ chiêm bao (dụ chúng sanh mê muội) thấy các cảnh vật khổ vui v.v... Vì mê mộng nên họ chấp các cảnh vật ấy là thật, rồi cũng vui buồn cười khóc v.v...</p>
    <p>Trái lại, người thức (dụ Bồ Tát tu Trí huệ Bát Nhã) thấy các cảnh chiêm bao kia đều không (ngũ uẩn giai không) nên không bị cảnh chiêm bao làm cho họ khổ sở (độ nhứt thế khổ ách).</p>
    <p>Người thức kia (dụ Ngài Quán Tự Tại Bồ Tát) biết rằng: Vì tâm chiêm bao hiện ra các cảnh chiêm bao, nên nói: "Cảnh chiêm bao (sắc) "không khác" với tâm chiêm bao (không), Tâm chiêm bao "không khác" với cảnh chiêm bao; cảnh chiêm bao "tức là" Tâm chiêm bao, Tâm chiêm bao "tức là" cảnh chiêm bao".</p>

    <p class="font-semibold mt-6">Lên một tầng nữa, Phật dạy:</p>
    <p>Chúng sanh vì mê bản thể chơn tâm thanh tịnh của mình (chơn không) nên vọng hiện ra thế giới và chúng sanh, tức là cảnh giới của chúng ta sống đây (trong kinh cũng gọi là cảnh đại mộng). Rồi chúng sanh vọng chấp cho là cảnh thật, nên cũng mừng giận khổ vui v.v... cũng như người chiêm bao (tiểu mộng) không khác, nên gọi là "mộng tưởng điên đảo".</p>
    <p>Bồ Tát đã giác ngộ (như người thức tỉnh) dùng Trí huệ Bát Nhã (như trí của người thức) thấy cảnh giới của chúng ta đang sống đây là cảnh đại mộng, đều do tâm hiện ra, nên Bồ Tát dạy: "các pháp đều không" (ngũ uẩn giai không), do tâm hiện ra, nên các pháp chẳng khác với tâm (không), tâm chẳng khác với các pháp; các pháp tức là tâm, tâm tức là các pháp".</p>
    <p>Tóm lại, đồng một bản thể chơn tâm thanh tịnh không khác, nhưng chúng sanh vì vô minh vọng tưởng điên đảo, nên thấy có năm uẩn hay thế giới chúng sanh, rồi theo cảnh đại mộng này mà thọ khổ.</p>
    <p>Trái lại, Bồ Tát đã giác ngộ (người đã thức giấc đại mộng) dùng Trí huệ Bát Nhã thấy cảnh đại mộng này (5 uẩn hay các pháp) đều không, chỉ do tâm hiện ra, nên không còn bị các khổ của cảnh đại mộng nữa (độ nhứt thế khổ ách).</p>
    <p>Vì chúng sanh mê, từ "tánh không" hiện ra "có sắc", nên nói: "sắc chẳng khác với không", nên nói: "không chẳng khác sắc", hay không tức là "sắc".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      
      <p class="mb-1 font-semibold">XÁ LỢI TỬ:</p>
      <p class="mb-4">Có nhà dịch "Xá Lợi Phất" hay "Xá Lợi Phất Đa La". Chữ "phất" đồng nghĩa với chữ "Tử" (con). Ông Xá Lợi Tử là bậc đại đệ tử của Phật, Trí huệ thứ nhứt.<br>Bà mẹ ông tên Xá Lợi, thông minh xuất chúng, biện luận nổi danh trong xứ, nhứt là trong khi có mang ông. Theo phong tục Ấn Độ, thường lấy tên mẹ đặt tên con, nên gọi ông là Xá Lợi Tử (hay Phất); nghĩa là con bà Xá Lợi.<br>Theo bản dịch của Ngài Thi Hộ chép: "Trong khi Đức Thế Tôn ở non Linh Thứu nhập định Thậm thâm quang minh, nói chánh pháp Tam ma đề, thì ông Xá Lợi Phất bạch với Ngài Quán Tự Tại Bồ Tát rằng: "Nếu có người muốn tu pháp môn thậm thâm Bát Nhã, thì phải tu như thế nào?". Nhơn đó Ngài Quán Tự Tại gọi ông Xá Lợi Phất mà giảng nói kinh này".</p>

      <p class="mb-1 font-semibold">SẮC (Sắc uẩn):</p>
      <p class="mb-2">Các vật chất chứa nhóm lại thành ra những hình tướng, như thân thể và cảnh vật, gọi là "sắc uẩn". Sắc uẩn gồm 11 món: Năm căn và sáu trần.</p>
      <div class="pl-6 space-y-1 mb-2">
        <p class="mb-0"><strong>Năm căn là:</strong> 1. Nhãn căn (mắt), 2. Nhĩ căn (tai), 3. Tỷ căn (mũi), 4. Thiệt căn (lưỡi), 5. Thân căn (thân thể).</p>
        <p class="mb-0"><strong>Sáu trần là:</strong> 1. Sắc trần (cảnh bị thấy), 2. Thanh trần (tiếng bị nghe), 3. Hương trần (mùi bị ngửi), 4. Vị trần (vị bị nếm), 5. Xúc trần (cảnh bị xúc của thân), 6. Pháp trần (cảnh bị biết của ý thức; tức là "vô biểu sắc". Sắc này không tiêu biểu ra ngoài, nhưng đối với nội tâm ý thức chúng ta có thể thấy rõ ràng).</p>
      </div>

      <p class="mb-1 font-semibold">THỌ (Thọ uẩn):</p>
      <p class="mb-4">Thọ là lãnh thọ. Sau khi tiếp xúc với cảnh rồi, sanh lãnh thọ. Sự lãnh thọ có năm: 1. Thọ khổ, 2. Thọ vui, 3. Thọ buồn, 4. Thọ mừng, 5. Thọ không vui buồn.</p>

      <p class="mb-1 font-semibold">TƯỞNG (Tưởng uẩn):</p>
      <p class="mb-4">Tưởng là tưởng nhớ hình tượng của các cảnh. Do sau khi tiếp xúc và lãnh thọ các cảnh khổ vui rồi, sanh ra tưởng nhớ.</p>

      <p class="mb-1 font-semibold">HÀNH (Hành uẩn):</p>
      <p class="mb-4">Hành là sự thay đổi biến chuyển của tâm niệm. Trong 51 món Tâm sở, trừ Thọ và Tưởng ra, còn 49 món Tâm sở và 24 món Tâm Bất tương ưng, đều thuộc về Hành uẩn.</p>

      <p class="mb-1 font-semibold">THỨC (Thức uẩn):</p>
      <p class="mb-2">Thức nghĩa là hiểu biết phân biệt; có khả năng biến hiện ra các cảnh và phân biệt các cảnh. Thức, chia ra làm tám loại:</p>
      <div class="pl-6 space-y-1 mb-4">
        <p class="mb-0">1. Nhãn thức: Cái biết của mắt</p>
        <p class="mb-0">2. Nhĩ thức: Cái biết của tai</p>
        <p class="mb-0">3. Tỷ thức: Cái biết của mũi</p>
        <p class="mb-0">4. Thiệt thức: Cái biết của lưỡi</p>
        <p class="mb-0">5. Thân thức: Cái biết của thân</p>
        <p class="mb-0">6. Ý thức: Cái biết của ý (phân biệt cảnh nội tâm)</p>
        <p class="mb-0">7. Mạt na thức: Cái biết thứ 7, chấp thức thứ 8 làm ngã</p>
        <p class="mb-0">8. A lại da thức: Cái biết thứ 8, chứa chủng tử các pháp</p>
      </div>

      <p class="mb-1 font-semibold">KHÔNG:</p>
      <p class="mb-2">Tức đoạn sau nói "Không tướng". Cái "không" đây, không phải hư không, ngoan không hay cái "không" đối với cái có; cũng không phải thủ tiêu hết các vật hữu hình mà nói là không; và cũng không phải cái "không" của Tiểu thừa (Thiên không).</p>
      <p class="mb-0">Cái "không" đây, tức là bản tánh thanh tịnh không có các hình tướng, nên gọi là "không tướng" (tướng không). Vì nó không sanh diệt, không hư dối, nên cũng gọi là "chơn không" hay thật tướng, chơn tướng, chơn tánh, chơn tâm, chơn như v.v...</p>
    </div>

    <p>Tóm lại, kinh này nói "năm uẩn" tức là bên Duy thức nói "94 pháp hữu vi". Kinh này nói "không" hay "không tướng", tức là bên Duy thức nói "sáu pháp vô vi".</p>
    <p>Kinh này nói: "Sắc chẳng khác với không" hay nói: "Sắc tức là không", là nói "Pháp hữu vi tức là pháp vô vi".</p>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50"></div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Này Xá Lợi Tử! "Tướng không" (Bát Nhã) của các pháp đây, nó không sanh không diệt, không nhơ không sạch, không thêm không bớt.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn kinh này nói: Tánh (Bát Nhã) của các pháp, không sanh không diệt, không cấu tịnh v.v...</p>
    <p>Đoạn thứ nhứt nói: "Năm uẩn đều không", đoạn thứ hai nói: "Sắc chẳng khác với không", hay "sắc tức là không v.v...", đoạn này nói: "tướng không của các pháp"; chữ "Không" ở trong ba đoạn này đều chỉ cho "Trí huệ Bát Nhã", tức là "Tánh" của các pháp.</p>
    <p>"Tánh" của các pháp không có hình tướng: không có tướng sanh, không có tướng diệt, không có tướng cấu nhiễm của phàm phu, không có tướng thanh tịnh của chư Phật. Khi ngộ nó không thêm, lúc mê nó cũng không bớt. Bởi thế nên cũng gọi là "không tướng" (tướng không), chơn tướng, thật tướng, chơn tánh, chơn tâm, chơn như, chơn không hay thật tướng Bát Nhã v.v...</p>
    <p>Tóm lại, "Tánh" của các pháp là "chơn tâm thanh tịnh sáng suốt", không có các hình tướng, nên gọi là "không tướng" hay "Bát Nhã chơn không".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <p class="mb-1 font-semibold">Pháp:</p>
      <p class="mb-0">Chỉ chung cho tất cả sự vật: tinh thần, vật chất, hữu hình vô hình, hữu vi vô vi, thánh phàm v.v... Chẳng những bàn ghế v.v... là "pháp", cho đến hư không cũng là "pháp". Bóng trong gương, trăng dưới nước là "pháp", mà lông rùa, sừng thỏ cũng là "pháp", cho đến tư tưởng tâm niệm cũng là "pháp". Phàm những cái gì, tự nó giữ được cái bản chất của nó làm cho người biết được nó là cái gì, thì đều gọi là "pháp".</p>
    </div>

    <p>Tóm lại, nói rộng là "tất cả pháp", nói hẹp là "năm uẩn". Nói "năm uẩn là chơn không" tức là nói "các pháp là chơn không". Chính ở nơi các pháp mà nhận tướng "chơn không", chẳng phải ngoài các pháp, riêng có một tướng chơn không.</p>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50"></div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Bởi thế nên, trong "Tướng không" (Bát Nhã) không có 5 uẩn là: sắc, thọ, tưởng, hành, thức; không có 6 căn là: nhãn, nhĩ, tỷ, thiệt, thân, ý; không có 6 trần là: sắc, thinh, hương, vị, xúc, pháp; không có 6 thức là: nhãn thức, nhĩ thức, tỷ thức, thiệt thức, thân thức và ý thức.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn kinh này nói: Trong "Tướng không" (Bát Nhã) không có các pháp thế gian.</p>
    <p>Vì "Tướng không" của các pháp (Bát Nhã) không sanh diệt, không cấu tịnh, không tăng giảm v.v... nên trong "Tướng không" (Bát Nhã) không có 5 uẩn, mười hai xứ (6 căn, 6 trần), mười tám giới (6 căn, 6 trần, 6 thức), cũng như trên màn bạc (dụ Tướng không) không có các hình ảnh.</p>
    <p>Thật ra, nói "năm uẩn" tức là gồm cả mười hai xứ và mười tám giới; trái lại, nói "mười hai xứ", cũng gồm cả năm uẩn và mười tám giới; hay nói "mười tám giới" cũng gồm cả mười hai xứ và năm uẩn.</p>
    
    <p class="font-semibold mt-4">Sở dĩ phân chia riêng khác như vậy, là vì Phật phá sự chấp ngã của chúng sanh:</p>
    <div class="pl-6 space-y-2 mb-4">
      <p class="mb-0">1. Người chấp nặng về phần tinh thần (tâm) là Ngã, thì Phật nói "năm uẩn", chia chẻ tinh thần (tâm) ra làm bốn phần là: thọ, tưởng, hành và thức để phá chấp. Còn "Sắc" không cần chia chẻ.</p>
      <p class="mb-0">2. Người chấp nặng về phần vật chất (chấp thân) là Ngã, thì Phật nói "mười hai xứ", chia chẻ sắc ra làm 12 phần là 6 căn và 6 trần, để phá chấp.</p>
      <p class="mb-0">3. Người chấp cả tinh thần (tâm) và vật chất (sắc) làm Ngã, thì Phật nói "mười tám giới" chia chẻ cả tinh thần và vật chất ra làm 18 phần là 6 căn, 6 trần và 6 thức để phá chấp.</p>
    </div>

    <p>Tóm lại, trong Bát Nhã (Tướng không) không có các pháp của thế gian là năm uẩn, sáu căn, sáu trần và sáu thức.</p>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50"></div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Không có mười hai nhơn duyên, nghĩa là không có "vô minh", và cũng không có "hết vô minh", cho đến không có "lão tử" và cũng không có "hết lão tử".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn kinh này nói: Trong "Tướng không" (Bát Nhã) không có 12 nhơn duyên là pháp tu xuất thế gian của Thánh Duyên giác.</p>
    <p>Trong Bát Nhã chơn không, cũng không có 12 nhơn duyên: Về phần lưu chuyển là Vô minh duyên Hành, cho đến duyên Lão tử. Và về phần hoàn diệt là Vô minh diệt thì Hành diệt, cho đến Lão tử diệt.</p>
    <p>Bậc Thánh Duyên giác, nhờ quán sự lưu chuyển của 12 nhơn duyên, mà thấu rõ được nguồn gốc của sanh tử luân hồi; và cũng nhờ quán sự hoàn diệt của 12 nhơn duyên mà được ngộ đạo.</p>

    <p class="font-semibold mt-4">Quán sự "Lưu chuyển" của 12 nhơn duyên như thế nào, mà thấy rõ được nguồn gốc của sanh tử luân hồi?</p>
    <p>Hành giả quán 12 nhơn duyên xoay vần tiếp nối lẫn nhau, như sợi dây chuyền có 12 khoen: khoen này chuyền khoen kia, khoen kia chuyền khoen nọ, như cái vòng tròn không mối.</p>
    <p>Chúng sanh vì đời trước mê lầm (quá khứ căn bản vô minh) nên tạo ra các nghiệp (hành). Hai món này (vô minh và hành) làm nhơn quá khứ.</p>
    <p>Sau khi chết bị nghiệp lực dẫn dắt tinh thần (thức) đi thọ thân (danh, sắc). Khi thành thân, tất nhiên có 6 căn (nhãn, nhĩ, tỷ, thiệt v.v...) là chỗ của 6 trần phản ánh vào (lục nhập). Khi có 6 căn tiếp xúc (xúc) với 6 trần, rồi sinh ra lãnh thọ (thọ) sự khổ và vui. Năm món này (thức, danh sắc, lục nhập, xúc, thọ) là quả hiện tại.</p>
    <p>Khi thọ quả hiện tại, trở lại tạo nhơn nữa là ưa thích (ái), tìm cầu (thủ), làm sao cho có (hữu). Ba món này (ái, thủ, hữu) làm nhơn hiện tại (tức là chi mạt vô minh).</p>
    <p>Do ưa thích tìm cầu cho được, nên tạo nghiệp để thọ sanh thân sau (sanh). Khi đã có thân (tất nhiên phải có thức, danh sắc, lục nhập, xúc, thọ) thì phải già và chết (lão, tử). Ba món này (sanh, lão, tử) là quả vị lai.</p>
    <p>Trong khi thọ quả vị lai, rồi trở lại tạo nhơn nữa (ái, thủ, hữu) để thọ quả vị lai lần nữa, cho đến vô cùng tận.</p>

    <div class="pl-6 space-y-1 mb-4 italic border-l-2 border-secondary-300 dark:border-secondary-700 py-2">
      <p class="mb-0">Quá khứ nhơn (Vô minh, Hành) -> Quả hiện tại (Thức, Danh sắc, Lục nhập, Xúc, Thọ)</p>
      <p class="mb-0">Hiện tại nhơn (Ái, Thủ, Hữu) -> Quả vị lai (Sanh, Lão tử)</p>
    </div>

    <p class="font-semibold mt-4">Quán về sự "Hoàn diệt" của 12 nhơn duyên:</p>
    <p>Sau khi hành giả quán sát nguồn gốc của sanh tử luân hồi là do 12 nhơn duyên, nhưng trọng tâm là vô minh. Hành giả muốn dứt sanh tử luân hồi, tất nhiên phải diệt trừ vô minh. Nếu vô minh bị diệt trừ thì hành diệt, cho đến lão tử diệt.</p>
    <p>Vô minh có 2 loại: căn bản vô minh, tức là vô minh quá khứ (vô minh, hành), và chi mạt vô minh, tức là vô minh hiện tại (ái, thủ, hữu). Vô minh quá khứ rất khó diệt trừ. Hành giả chỉ có thể diệt trừ vô minh hiện tại là ái, thủ, hữu. Nếu ái, thủ, hữu diệt rồi, thì sanh và lão tử không còn. Không còn sanh và lão tử, thì làm gì có sanh tử luân hồi <span class="text-sm opacity-80">(xem Phật học Phổ thông khóa thứ tư, giải thích rất rõ)</span>.</p>
    <p>Tóm lại, trong Bát Nhã (Tướng không, hay chơn như, chơn tâm v.v...) không có pháp tu xuất thế gian của Thánh Duyên giác là 12 nhơn duyên, cả lưu chuyển và hoàn diệt.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="space-y-2">
        <p class="mb-0"><strong>VÔ MINH:</strong> Không sáng suốt, tức là si mê lầm lạc. Nói chung là mười món căn bản phiền não và 20 món tùy phiền não.</p>
        <p class="mb-0"><strong>HÀNH:</strong> Hành động, tạo tác các nghiệp.</p>
        <p class="mb-0"><strong>THỨC:</strong> Thần thức, tức là phần tinh thần trong con người.</p>
        <p class="mb-0"><strong>DANH SẮC:</strong> Danh là chỉ cho Tâm, về phần tinh thần chỉ có cái tên; còn Sắc là sắc thân về phần vật chất. Đây là chỉ cho trạng thái khi mới thọ thân, tinh thần và vật chất mới vừa phối hợp, chưa có mắt, tai, mũi, lưỡi v.v...</p>
        <p class="mb-0"><strong>LỤC NHẬP:</strong> Sáu chỗ vào. Khi thân thể đã đủ 6 căn (nhãn, nhĩ, tỷ, thiệt, thân, ý) là chỗ của 6 trần cảnh phản ánh vào.</p>
        <p class="mb-0"><strong>XÚC:</strong> Khi đã có 6 căn, bắt đầu tiếp xúc với 6 trần.</p>
        <p class="mb-0"><strong>THỌ:</strong> Sau khi tiếp xúc với 6 trần cảnh rồi lãnh thọ các cảnh.</p>
        <p class="mb-0"><strong>ÁI:</strong> Sau khi lãnh thọ trần cảnh rồi sanh tâm ưa thích.</p>
        <p class="mb-0"><strong>THỦ:</strong> Cầu thủ. Sau khi ưa thích rồi tìm cầu và nắm giữ.</p>
        <p class="mb-0"><strong>HỮU:</strong> Có. Sau khi cầu thủ rồi gây tạo thế nào cho có.</p>
        <p class="mb-0"><strong>SANH:</strong> Vì đã tạo nhơn là ưa thích, cầu thủ gây tạo cho có, tức là tạo nghiệp, nên phải thọ quả là sanh đời sau.</p>
        <p class="mb-0"><strong>LÃO TỬ:</strong> Sau khi sanh ra đã có thân, tất nhiên phải bị già rồi chết.</p>
      </div>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50"></div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Không có Tứ đế là: khổ, tập, diệt, đạo; cũng không có "Trí" tu chứng và đạo quả để chứng (đắc). Tóm lại, trong "Tướng không" (Bát Nhã) không có "đặng" cái gì cả.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn kinh này nói: Trong "Tướng không" (Bát Nhã) không có các pháp xuất thế gian như Tứ đế, Lục độ v.v...</p>
    <p>Trong đoạn kinh này, chia làm ba phần:</p>
    <div class="pl-6 space-y-4 mb-4">
      <div>
        <p class="font-semibold mb-1">1. Trong Bát Nhã chơn không, không có Tứ diệu đế là pháp tu của bốn quả Thánh Thinh văn.</p>
      </div>
      <div>
        <p class="font-semibold mb-1">2. Trong Bát Nhã chơn không, cũng không có "Trí", là người tu chứng và "Đắc", là đạo quả để chứng. Trong phần này lại có 2 nghĩa:</p>
        <p class="mb-1">a. Nói chung, từ trước đến đây, theo văn kinh thì chỉ phá riêng về "pháp chấp"; nghĩa là trong Bát Nhã chơn không, không có pháp ngũ uẩn, pháp Tứ đế, pháp Thập nhị nhân duyên v.v... Đến đây, mới phá chung cả ngã chấp và pháp chấp; nghĩa là trong Bát Nhã chơn không, không có người tu (ngã) và chứng (pháp); nói chung cả pháp Lục độ và quả Phật.</p>
        <p class="mb-0">b. Nói riêng, câu "không có trí và cũng không có chứng", có thể chỉ riêng cho pháp Lục độ. Vì từ trước đã nói "Trong Bát Nhã chơn không, không có pháp Tứ đế của Thinh văn, pháp Thập nhị nhơn duyên của Duyên giác"; đến đoạn văn này tất nhiên, "Trong Bát Nhã chơn không, cũng không có pháp Lục độ của Bồ Tát".</p>
      </div>
      <div>
        <p class="font-semibold mb-1">3. Tóm lại, trong Bát Nhã chơn không, không có "Đặng" cái gì cả. Đoạn này cũng có 2 nghĩa:</p>
        <p class="mb-1">a. Nói chung, trong Bát Nhã chơn không, không có các pháp thế gian là năm uẩn mười hai xứ, mười tám giới và cũng không có các pháp xuất thế gian là Tứ đế, Thập nhị nhơn duyên, Lục độ, rốt sau là quả Phật. Nói tóm lại, là "không có đặng cái gì cả".</p>
        <p class="mb-0">b. Nói riêng, câu "không có đặng cái gì cả", có thể chỉ riêng cho đạo quả Bồ Đề Niết bàn của Phật. Vì từ trước đã nói: Trong Bát Nhã chơn không, không có pháp tu của Tam thừa là Tiểu thừa (Thinh văn), Trung thừa (Duyên giác) và Thượng thừa (Bồ Tát); đến đoạn văn này tất nhiên trong Bát Nhã chơn không, cũng không có Tối thượng thừa là quả vị Phật.</p>
      </div>
    </div>
    <p>Tóm lại, trong "Tướng không" hay trong "Bát Nhã" không có Tứ thánh (Thinh văn, Duyên giác, Bồ Tát, Phật) và Lục phàm (Thiên, nhơn, A tu la, Địa ngục, Ngạ quỷ và Súc sanh) hay nói một cách khác là: "không có pháp gì cả".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="space-y-4">
        <p class="mb-0"><strong>TỨ ĐẾ (Tứ Diệu Đế):</strong> Bốn sự thật chắc chắn, muôn đời không thay đổi.</p>
        
        <div>
          <p class="mb-1 font-semibold">KHỔ (Khổ đế):</p>
          <p class="mb-2">chơn lý chắc chắn trình bày rõ ràng cho chúng ta thấy tất cả những nỗi đau khổ trên thế gian này, mà mỗi chúng ta đều phải chịu, như ba khổ: 1. Khổ trên cái khổ (khổ khổ), 2. Khổ vì hư hoại (hoại khổ), 3. Khổ vì thay đổi biến chuyển (hành khổ).</p>
          <p class="mb-0">Và tám khổ: 1. Sanh khổ, 2. Bệnh khổ, 3. Già khổ, 4. Chết khổ, 5. Đang thương nhau bị xa lìa là khổ, 6. Đang thù oán giận hờn lại gặp nhau là khổ, 7. Mong cầu không được là khổ (thất vọng), 8. Năm ấm quá thạnh là khổ.</p>
        </div>

        <div>
          <p class="mb-1 font-semibold">TẬP (Tập đế):</p>
          <p class="mb-2">chơn lý chắc thật trình bày nguyên nhơn của bể khổ trần gian là lý do vì đâu mà có những nỗi khổ này. Khổ đế như là bản kê hiện trạng của bệnh; còn Tập đế như là bản nói rõ nguyên nhơn của chứng bệnh, lý do vì sao bệnh.</p>
          <p class="mb-0">Tập là nhóm chứa; nghĩa là nhóm chứa các phiền não mê lầm. Phiền não rất nhiều, nói rộng thì đến 84.000 món, nói hẹp thì có 10 món căn bản phiền não và 20 món chi mạt phiền não.</p>
        </div>

        <div>
          <p class="mb-1 font-semibold">DIỆT (Diệt đế hay Niết bàn):</p>
          <p class="mb-2">Kinh chép: "Các phiền não diệt gọi là Niết bàn. Xa lìa các pháp hữu vi cũng gọi là Niết bàn". Niết bàn có nhiều loại:</p>
          <div class="pl-6 space-y-1">
            <p class="mb-0">1. Hữu Dư Y Niết bàn: Từ quả thánh thứ nhứt cho đến quả thánh thứ ba của Tiểu thừa tuy đã chứng Niết bàn, nhưng cái dư báo hãy còn.</p>
            <p class="mb-0">2. Vô Dư Y Niết bàn: Đến quả thánh thứ tư, là A La Hán thì các phiền não nghiệp báo không còn, hoàn toàn chứng được quả Niết bàn.</p>
            <p class="mb-0">3. Vô Trụ Xứ Niết bàn: Đây là quả Niết bàn của Bồ Tát. Bồ Tát đã tự tại giải thoát, nên chỗ nào cũng là cảnh Niết bàn của quý Ngài.</p>
          </div>
        </div>

        <div>
          <p class="mb-1 font-semibold">ĐẠO (Đạo đế):</p>
          <p class="mb-2">phương pháp tu chơn chánh, chắc chắn để đến đạo quả Niết bàn. Phương pháp có 37 phẩm, chia làm 7 loại:</p>
          <div class="pl-6 grid grid-cols-2 gap-1">
            <p class="mb-0">1. Tứ niệm xứ</p>
            <p class="mb-0">2. Tứ chánh cần</p>
            <p class="mb-0">3. Tứ như ý túc</p>
            <p class="mb-0">4. Ngũ căn</p>
            <p class="mb-0">5. Ngũ lực</p>
            <p class="mb-0">6. Thất Bồ Đề</p>
            <p class="mb-0">7. Bát Chánh Đạo</p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50"></div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Các vị Bồ Tát nhờ y theo Trí huệ Bát Nhã (Tướng không) mà xa lìa được các cảnh mộng tưởng điên đảo nên tâm không còn ngăn ngại, lo sợ và chứng rốt ráo Niết bàn.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn kinh này nói: Bồ Tát nhờ y theo Trí huệ Bát Nhã mà xa lìa được các cảnh sợ hãi của mộng tưởng điên đảo và chứng rốt ráo Niết bàn.</p>
    <p>Vì trong Trí huệ Bát Nhã không có "Đặng" cái gì cả nên Bồ Tát mới y theo Trí huệ Bát Nhã (Tướng không) mà xa lìa các điên đảo sợ hãi trong cảnh sanh tử đại mộng và chứng đặng rốt ráo quả Niết bàn. Đoạn này đồng nghĩa với bài tụng thứ 29, trong quyển Duy thức Tam thập tụng:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Vô đắc bất tư nghị</p>
          <p class="mb-0">Thị xuất thế gian trí</p>
          <p class="mb-0">Xả nhị thô trọng cố</p>
          <p class="mb-0">Tiện chứng đắc chuyển y.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Cảnh giới vô đắc (không đặng) không thể nghĩ bàn. Vì cảnh giới này là trí xuất thế gian, đã bỏ hai món Thô trọng (phiền não chướng và sở tri chướng) và chứng đặng hai món Bồ Đề Niết bàn.</p>
        </div>
      </div>
    </div>

    <p>Mới đọc qua đoạn văn này và đoạn văn tiếp sau, chúng ta thấy hình như mâu thuẫn với đoạn văn trên. Vì trong đoạn văn trên nói: "trong Bát Nhã chơn không, không có đặng cái gì cả"; còn đoạn văn này và đoạn văn tiếp sau đây lại nói: "Bồ Tát nhờ y theo Trí huệ Bát Nhã mà chứng đặng rốt ráo Niết bàn. Chư Phật cũng nhờ y theo Trí huệ Bát Nhã mà đặng đạo Vô thượng Bồ Đề".</p>
    <p>Nhưng xét kỹ thì không phải mâu thuẫn. Vì "không có đặng cái gì cả", nên mới đặng tất cả. Cũng như cái gương hay màn bạc, nhờ không giữ chặt một hình ảnh gì cả, nên các hình ảnh mới hiện đủ cả.</p>
    <p>Cũng thế, trong Bát Nhã chơn không, vì không có một hình ảnh gì cả, nên tùy tịnh duyên hiện ra bốn quả thánh; tùy nhiễm duyên hiện ra sáu quả phàm, không thiếu một pháp nào cả.</p>
    <p>Tất cả chúng sanh, vì mê muội tánh Bát Nhã, nên trong chỗ không có cảnh vật mà tự thấy có đủ các cảnh vật, nào thế giới chúng sanh và sanh tử luân hồi v.v... Cũng như người ngủ chiêm bao, trong chỗ không có cảnh vật, mà hiện ra đủ các cảnh vật vui, buồn v.v... nên gọi là "mộng tưởng điên đảo". Rồi người chiêm bao kia, tâm bị cảnh vật trong chiêm bao chi phối, làm cho họ phải buồn rầu lo sợ, lắm điều chướng ngại.</p>
    <p>Các vị Bồ Tát nhờ y theo Trí huệ Bát Nhã (Tướng không), thấy ngã, pháp đều không, năm uẩn chẳng có, thế giới và chúng sanh không còn, nên tâm không còn bị cảnh vật làm chướng ngại hay chi phối nữa, và không còn buồn lo sợ hãi. Cũng như người thức giấc chiêm bao, vì thấy cảnh chiêm bao là không, nên tâm không còn bị cảnh vật trong chiêm bao làm chướng ngại chi phối; không còn bị buồn lo sợ hãi bởi cảnh chiêm bao. Bởi thế nên nói: "Bồ Tát nhờ y theo Trí huệ Bát Nhã, nên xa lìa các mộng tưởng điên đảo, tâm không còn bị chướng ngại và lo sợ v.v..."</p>
    <p>Người đã hoàn toàn thức giấc chiêm bao, thì người ấy được an vui với cảnh thức tỉnh, không còn một tí gì sợ hãi lo buồn bởi cảnh mê mộng nữa. Cũng thế, Bồ Tát khi đi sâu vào Trí huệ Bát Nhã, thì không còn bị cảnh thế gian đại mộng này làm cho tâm họ có một tí gì lo buồn sợ hãi nữa. Các Ngài hoàn toàn tự tại giải thoát và an vui với cảnh Niết bàn tịch mịch, nên nói: "rốt ráo Niết bàn".</p>
    <p>Tóm lại, Bồ Tát nhờ y theo Trí huệ Bát Nhã, nên xa lìa các mộng tưởng điên đảo, không còn bị các khổ sanh tử và được rốt ráo Niết bàn.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <p class="font-semibold mb-2">NIẾT BÀN:</p>
      <p class="mb-2">Hay Niết bàn na hay Nê hoàn, là do dịch âm chữ Phạn "Nirvana" mà ra. Niết bàn có nhiều nghĩa:</p>
      <div class="pl-6 space-y-1 mb-2">
        <p class="mb-0"><strong>NIẾT (Nir):</strong> là ra khỏi; <strong>Bàn (Vana):</strong> là rừng mê. Niết bàn là ra khỏi rừng mê.</p>
        <p class="mb-0">Niết là chẳng; bàn là dệt; nghĩa là chẳng dệt ra sanh tử luân hồi nữa. Chữ Bàn cũng có nghĩa là không ngăn ngại.</p>
      </div>
      <p class="mb-2 mt-4">Niết bàn còn rất nhiều nghĩa nữa, song tóm lại không ngoài ba nghĩa như sau:</p>
      <div class="pl-6 space-y-1 mb-0">
        <p class="mb-0">1. Bất sanh: Nghĩa là không còn sanh ra các thứ mê lầm tội lỗi nữa.</p>
        <p class="mb-0">2. Giải thoát: Nghĩa là thoát ra ngoài sự ràng buộc, không mắc vào các phiền não triền phược nữa.</p>
        <p class="mb-0">3. Tịch diệt: Nghĩa là vắng lặng, dứt sạch. Vắng lặng, an lành, dứt sạch tất cả nguồn gốc mê lầm. Vì Niết bàn có nhiều nghĩa như vậy, nên trong kinh thường để nguyên âm mà không có dịch nghĩa.</p>
      </div>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50"></div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Các đức Phật quá khứ, hiện tại và vị lai cũng đều y theo Trí huệ Bát Nhã này (Tướng không) mà đặng đạo Vô thượng Bồ Đề.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn kinh này nói: Chư Phật nhờ y theo Trí huệ Bát Nhã mà chứng đặng Bồ Đề.</p>
    <p>Tất cả chư Phật trong ba đời, quá khứ, hiện tại và vị lai, trong khi tu nhơn, các Ngài đều dùng Trí huệ Bát Nhã, chiếu phá sạch hết các mây mù vô minh phiền não từ vô thủy đến nay; nào ngã chấp pháp chấp đều không còn. Lúc bấy giờ chơn tâm, Phật tánh hay thật tướng Bát Nhã hiện ra, các Ngài chứng đặng đạo Vô thượng Bồ Đề, cũng gọi là thành Phật.</p>
    <p>Tóm lại, tất cả những người tu hành, từ phàm phu (Thập tín) trải qua Tam Hiền (Thập trụ, Thập hạnh và Thập hồi hướng) đến Thập Thánh (Thập địa) rốt sau là quả Phật, không địa vị nào và cũng không giờ phút nào, chẳng dùng Trí huệ Bát Nhã; nghĩa là nhờ Trí huệ Bát Nhã mà đặng thành tựu viên mãn. Bởi thế nên kinh chép: "Trí huệ là mẹ sanh ra tất cả chư Phật".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="space-y-4">
        <div>
          <p class="mb-1 font-semibold">BỒ ĐỀ:</p>
          <p class="mb-0">Bồ Đề là dịch âm chữ Phạn "Bodhi". Cựu dịch là "Đạo", nghĩa là thông suốt. Tân dịch là "Giác", có nghĩa là giác ngộ, mà giác ngộ tức là Phật (Phật dịch nghĩa là Giác).</p>
        </div>
        <div>
          <p class="mb-1 font-semibold">VÔ THƯỢNG BỒ ĐỀ:</p>
          <p class="mb-2">Tức là quả Phật Bồ Đề, không có quả Phật Bồ Đề nào trên nữa. Bồ Đề có nhiều tầng bậc:</p>
          <div class="pl-6 space-y-1">
            <p class="mb-0">1. Sơ phát tâm Bồ Đề (người mới phát tâm Phật)</p>
            <p class="mb-0">2. Thinh văn Bồ Đề</p>
            <p class="mb-0">3. Duyên giác Bồ Đề</p>
            <p class="mb-0">4. Bồ Tát Bồ Đề</p>
            <p class="mb-0">5. Phật Bồ Đề (cũng gọi là Vô thượng Bồ Đề)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50"></div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Vì Trí huệ Bát Nhã (Tướng không) hãy diệt trừ hết các khổ, chắc chắn như vậy không hư dối, nên gọi là Thần chú Bát Nhã Ba La Mật Đa, cũng gọi là chú Đại thần, chú Đại minh, chú Vô thượng và chú Vô đẳng đẳng.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn kinh này nói: Trí huệ Bát Nhã, có công năng diệt trừ các khổ, nên cũng gọi là Thần chú Bát Nhã v.v...</p>
    <p>Kinh này là kinh nhưng cũng là chú; vì người chí thành trì tụng, sẽ được linh nghiệm phi thường, tùy tâm mãn nguyện, cầu chi được nấy, mau lẹ phi thường, không khác gì thần chú, nên cũng gọi là "Thần chú Bát Nhã Ba La Mật Đa".</p>
    <p>Kinh này thần diệu không thể xét lường được. Người thọ trì đọc tụng kinh này sẽ được thành tựu công đức không thể nghĩ bàn và được đại giải thoát, nên gọi là "chú Đại thần".</p>
    <p>Kinh này có khả năng phá trừ gốc rễ của vô minh phiền não từ vô thủy đến nay, và làm hiển lộ Phật tánh sáng suốt, nên gọi là "chú Đại minh".</p>
    <p>Người trì kinh này sẽ đặng đạo Vô thượng Bồ Đề, nên cũng gọi là "chú Vô thượng".</p>
    <p>Người chí tâm trì tụng kinh này sẽ đặng Phật tánh bình đẳng như như bất động, và sẽ chứng được quả Phật là quả cao tột, không quả vị nào sánh bằng, nên gọi là "chú Vô đẳng đẳng".</p>
    <p>Tóm lại, kinh này có công năng thần diệu phi thường, cũng như thần chú, có thể diệt trừ hết gốc rễ vô minh phiền não, làm cho hành giả hết khổ được đại giải thoát và minh tâm kiến tánh thành Phật, nên gọi là "chú Bát Nhã" v.v...</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-0"><strong>GIẢI DANH TỪ:</strong> <strong>CHÚ:</strong> Tiếng Phạn gọi là "Đà La Ni"; Trung Hoa dịch là "chú"; tức là những bài kinh không có nghĩa, cũng gọi là "mật giáo". Hành giả chí thành đọc tụng, sẽ được linh nghiệm như thần nên cũng gọi là "Thần chú".</p>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50"></div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Ngài Quán Tự Tại Bồ Tát, liền nói thần chú Bát Nhã: "Yết đế yết đế, Ba la yết đế, Ba la tăng yết đế, Bồ Đề tát bà ha".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn kinh này nói về Thần chú Bát Nhã.</p>
    <p>Tất cả kinh điển của Phật có thể chia làm hai loại: Hiển giáo và Mật giáo. Nhưng kinh sách nào giảng dạy nghĩa lý và phương pháp tu hành rõ ràng, hành giả y theo đó thực hành, sẽ được thành công đắc quả, thì gọi là Hiển giáo. Trái lại, như các Thần chú, hành giả không cần biết nghĩa lý, chỉ chí tâm trì tụng, sẽ được linh nghiệm phi thường, cầu chi được nấy, tùy tâm mãn nguyện, thì gọi là "Mật giáo".</p>
    <p>Bát Nhã Tâm Kinh, đủ cả Hiển giáo và Mật giáo. Từ câu: "Quán Tự Tại Bồ Tát hành thâm v.v... cho đến câu: "tức thuyết chú viết", là thuộc về Hiển giáo. Từ câu: "Yết đế yết đế" cho đến câu "Bồ Đề tát bà ha", là thuộc về Mật giáo.</p>
    <p>Ngài Quán Tự Tại Bồ Tát, trước nói kinh Bát Nhã, giảng giải nghĩa lý rõ ràng để cho người tu hành y theo đó thực hành sẽ được trí tuệ Bát Nhã.</p>
    <p>Tiếp theo kinh, Ngài nói thần chú Bát Nhã, để cho người tu hành, chí thành trì tụng (không cần biết nghĩa) tâm họ sẽ được định. Nhờ có định mới phát sanh ra Trí huệ và sẽ nhập được Thật Tướng Bát Nhã. Nghĩa là từ Văn tự Bát Nhã tiến lên Quán chiếu Bát Nhã, rồi đến Thật Tướng Bát Nhã.</p>
    
    <p class="font-semibold mt-6">Về Thần chú, từ xưa đến nay hầu hết chư Tổ, đều không dịch nghĩa. Bởi các lý do như sau:</p>
    <div class="pl-6 space-y-2 my-4">
      <p class="mb-0">1. Thần chú là mật ngữ (lời nói mật) của chư Phật, không phải chúng phàm phu có thể biết được.</p>
      <p class="mb-0">2. Thần chú là tên của các vị Thần, đọc đến thì chư Thần sẽ đến bảo hộ cho hành giả được toại nguyện.</p>
      <p class="mb-0">3. Thần chú cũng như các mật hiệu của nhà binh, hành giả chí tâm trì tụng, sẽ được hiệu nghiệm phi thường.</p>
      <p class="mb-0">4. Chữ "Chú" nghĩa là nguyện. Hành giả chí thành trì tụng, sẽ được tùy tâm mãn nguyện.</p>
    </div>

    <p>Tóm lại, Thần chú Bát Nhã thuộc về Mật giáo, có nhiều lý do không thể phiên dịch được. Người chí tâm trì tụng sẽ được lợi ích vô cùng vô tận.</p>

    <div class="mt-12 text-right italic text-sm text-text-muted">
      <p class="mb-1">Dịch tại PHƯỚC HẬU Cổ tự TRÀ ÔN</p>
      <p class="mb-1">Dịch xong ngày 6/9 năm Ất Tỵ, PL 2509</p>
      <p class="mb-0">Nhằm ngày 30/10/1965</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong tầng đạo lý thứ nhất, khi nói năm uẩn 'chẳng khác' với 'không', người học thường dễ mắc phải sai lầm nào?",
    options: {
      a: "Vẫn còn chấp năm uẩn và chơn không là hai thực thể riêng biệt để so sánh.",
      b: "Phủ nhận sự tồn tại của năm uẩn trong thực tế.",
      c: "Đồng nhất hoàn toàn hai khái niệm mà không có sự phân biệt.",
      d: "Cho rằng năm uẩn là thật còn chơn không là giả.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Lược giải nêu rõ: 'Tuy không khác, nhưng có người hiểu: vẫn còn một bên năm uẩn và một bên chơn không. Cũng như nói sóng và nước không khác, nhưng vẫn còn chấp: sóng và nước hai thứ riêng biệt.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo lược giải, khái niệm 'không' (Bát Nhã) trong kinh này khác với 'không' của Tiểu thừa như thế nào?",
    options: {
      a: "Là bản tánh thanh tịnh, không sanh diệt, không hình tướng (chơn không).",
      b: "Là sự tiêu diệt hết mọi vật hữu hình để đạt đến cái không.",
      c: "Là hư không trống rỗng như bầu trời.",
      d: "Là cái không đối lập với cái có của thế gian.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Cái 'không' ở đây không phải hư không, không phải cái không đối lập với có, không phải thủ tiêu vạn vật, cũng không phải Thiên không của Tiểu thừa. Mà là 'bản tánh thanh tịnh không có các hình tướng... gọi là chơn không hay thật tướng'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Thành phần nào sau đây thuộc về 'Sắc uẩn'?",
    options: {
      a: "Tám loại thức phân biệt cảnh.",
      b: "Năm căn và sáu trần.",
      c: "Năm trạng thái lãnh thọ cảm giác.",
      d: "Các tâm sở trừ Thọ và Tưởng.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là Thức uẩn.",
      b: "Đúng. Sắc uẩn gồm 11 món: Năm căn (mắt, tai, mũi, lưỡi, thân) và sáu trần (sắc, thanh, hương, vị, xúc, pháp).",
      c: "Sai. Đây là Thọ uẩn.",
      d: "Sai. Đây là Hành uẩn.",
    },
  },
  {
    question: "Tại sao Đức Phật lại chia chẻ sắc pháp và tâm pháp thành 'Mười tám giới' (6 căn, 6 trần, 6 thức)?",
    options: {
      a: "Để chứng minh rằng thế giới vật chất là quan trọng hơn tâm linh.",
      b: "Để giải thích cấu tạo sinh học của con người và thế giới.",
      c: "Để phá sự chấp ngã của những người chấp nặng cả về tinh thần lẫn vật chất.",
      d: "Chỉ đơn thuần là cách liệt kê các pháp hữu vi trong đời sống.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Theo Lược giải: 'Sở dĩ phân chia riêng khác như vậy, là vì Phật phá sự chấp ngã của chúng sanh... Người chấp cả tinh thần (tâm) và vật chất (sắc) làm Ngã, thì Phật nói mười tám giới chia chẻ cả tinh thần và vật chất ra làm 18 phần... để phá chấp.'",
      d: "Sai.",
    },
  },
  {
    question: "Trong 12 nhơn duyên, những yếu tố nào được coi là 'Nhơn hiện tại' (chi mạt vô minh)?",
    options: {
      a: "Sanh, Lão tử.",
      b: "Ái, Thủ, Hữu.",
      c: "Vô minh, Hành.",
      d: "Thức, Danh sắc, Lục nhập.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là Quả vị lai.",
      b: "Đúng. Ái (ưa thích), Thủ (tìm cầu), Hữu (làm sao cho có) làm nhơn hiện tại (tức là chi mạt vô minh).",
      c: "Sai. Đây là Nhơn quá khứ (căn bản vô minh).",
      d: "Sai. Đây là Quả hiện tại.",
    },
  },
  {
    question: "Khái niệm 'Tập đế' trong Tứ Diệu Đế được ví với điều gì trong quá trình chữa bệnh?",
    options: {
      a: "Bản kê khai các triệu chứng của bệnh.",
      b: "Trạng thái sau khi đã lành bệnh hoàn toàn.",
      c: "Nguyên nhân gây ra chứng bệnh.",
      d: "Phương pháp và thuốc điều trị bệnh.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là Khổ đế.",
      b: "Sai. Đây là Diệt đế.",
      c: "Đúng. 'Tập đế như là bản nói rõ nguyên nhơn của chứng bệnh, lý do vì sao bệnh'.",
      d: "Sai. Đây là Đạo đế.",
    },
  },
  {
    question: "Bồ Tát nhờ y theo Trí huệ Bát Nhã mà đạt được điều gì quan trọng nhất để chứng Niết bàn?",
    options: {
      a: "Xa lìa các mộng tưởng điên đảo và tâm không còn ngăn ngại.",
      b: "Tích lũy được thật nhiều công đức từ việc trì chú.",
      c: "Có khả năng biến hóa ra các thế giới khác nhau.",
      d: "Tiêu diệt hoàn toàn các pháp hữu vi trên thế gian.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Các vị Bồ Tát nhờ y theo Trí huệ Bát Nhã (Tướng không) mà xa lìa được các mộng tưởng điên đảo, nên tâm không còn ngăn ngại, lo sợ và chứng được rốt ráo Niết bàn.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo giải thích về Thần chú Bát Nhã, tại sao nó được gọi là 'Chú Vô Đẳng Đẳng'?",
    options: {
      a: "Vì nó là bài chú ngắn nhất trong các loại kinh điển.",
      b: "Vì nó có thể chữa khỏi tất cả các loại bệnh vật lý.",
      c: "Vì nó dẫn đến quả Phật cao tột, không có quả vị nào sánh bằng.",
      d: "Vì nó chỉ dành riêng cho các đức Phật ở tương lai.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Lược giải nêu: 'Người chí tâm trì tụng kinh này... sẽ chứng được quả Phật là quả cao tột, không quả vị nào sánh bằng, nên gọi là chú Vô đẳng đẳng'.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao các vị Tổ sư thường không dịch nghĩa các câu Thần chú (phần Mật giáo)?",
    options: {
      a: "Vì ngôn ngữ Phạn quá khó để tìm từ tương đương trong tiếng Hán hay tiếng Việt.",
      b: "Vì thần chú không mang bất kỳ ý nghĩa triết học nào.",
      c: "Để tránh việc người bình thường hiểu sai và làm dụng thần chú.",
      d: "Vì thần chú là mật ngữ của chư Phật, giúp hành giả chuyên tâm trì tụng để định tâm.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Thần chú là mật ngữ của chư Phật, tên các vị thần... Việc không dịch giúp người tu hành chí thành trì tụng (không cần biết nghĩa, không phân biệt) thì tâm họ sẽ được định, từ đó phát sanh trí tuệ.",
    },
  },
  {
    question: "Khái niệm 'Niết bàn' (Nirvana) có nghĩa là 'không dệt ra sanh tử luân hồi nữa' dựa trên cách giải thích chữ nào?",
    options: {
      a: "Chữ 'Bàn' (Vana) có nghĩa là dệt hoặc rừng mê.",
      b: "Chữ 'Bát Nhã' (Prajna) có nghĩa là trí huệ.",
      c: "Chữ 'Bàn' mang nghĩa là sự ngăn ngại.",
      d: "Chữ 'Niết' (Nir) có nghĩa là bất sanh.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Lược giải nêu: 'Niết là chẳng; bàn là dệt; nghĩa là chẳng dệt ra sanh tử luân hồi nữa'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-phan-chanh-ton',
  slug: 'phan-chanh-ton',
  title: 'Phần Chánh tôn',
  type: 'article',
  status: 'published',
  order: 21,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/phan-chanh-van/B%C3%A1t_Nh%C3%A3_T%C3%A2m_Kinh_T%C3%A1nh_Kh%C3%B4ng.png',
      readingContent,
      tableOfContents: [
        { id: 'phan-chanh-ton', label: 'Phần Chánh Tôn' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/phan-chanh-van/Prajna_Heart_Awakening.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/CtmlKqPfqAE',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5iOlcFBKotVMVOHEDR3SOl',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần Chánh Tôn',
    passPercentage: 70,
    questions,
  },
}

export default lesson