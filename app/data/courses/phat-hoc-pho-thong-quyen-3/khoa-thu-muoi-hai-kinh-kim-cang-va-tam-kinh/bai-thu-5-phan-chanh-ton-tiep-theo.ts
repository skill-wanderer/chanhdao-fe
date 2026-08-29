import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="b-phan-chanh-ton-tiep-theo" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ NĂM: B- Phần Chánh tôn (tiếp theo)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="tho-tri-kinh-nay" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">19. THỌ TRÌ KINH NÀY PHƯỚC ĐỨC VÔ LƯỢNG</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Như trong sông Hằng, có vô số cát, rồi lấy mỗi một hạt cát, lại cho là một sông Hằng. Vậy những số cát trong vô số sông Hằng đó, có nhiều không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Nhiều lắm. Nếu chỉ tính những sông Hằng mà thôi, hãy còn nhiều vô số, huống chi là tính tất cả số cát trong vô số sông Hằng".</p>
      <p>Phật hỏi tiếp: "Tu Bồ Đề! Nếu có chúng sanh nào dùng 7 món báu, đựng đầy trong nhiều Đại thế giới (một nghìn triệu thế giới nhỏ) để đem bố thí; số Đại thế giới này cũng nhiều như số cát trong vô số sông Hằng, thì chúng sanh đó phước đức nhiều không?".</p>
      <p>Tu Bồ Đề thưa: "Bạch Thế Tôn! Nhiều lắm".</p>
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Ta nay thành thật bảo ông: Nếu có người thọ trì đọc tụng hay giảng kinh này, hoặc trọn quyển hay nửa quyển, cho đến tối thiểu, chừng bốn câu kệ, thì phước đức của người này nhiều hơn người trước".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật nói công đức người thọ trì hoặc giảng dạy kinh này (pháp thí) nhiều hơn công đức người bố thí thất bửu (tài thí) đựng đầy trong vô số Đại thế giới, nhiều như số cát trong vô số sông Hằng. Đây là lần thứ ba, Phật tán thán về công đức thọ trì kinh.</p>
    <p>Ngọc ngà châu báu, không ai có nhiều được. Nhưng nếu có người, có nhiều châu báu, đựng đầy trong vô số Đại thế giới, đem bố thí, thì phước đức người này không thể nghĩ bàn.</p>
    <p>Nhưng nếu có người thọ trì hay giảng kinh này, hoặc trọn quyển hay nửa quyển, hoặc tối thiểu là bốn câu kệ, thì công đức của người sau nhiều hơn người trước.</p>
    <p>Vì bố thí về châu báu, dầu nhiều đến đâu, cũng chỉ giúp cho người về phương diện vật chất, giàu sang, sung sướng nhất thời mà thôi, chứ không thể đem hạnh phúc vĩnh viễn cho người được.</p>
    <p>Còn người thọ trì hoặc giảng dạy kinh này, tuy ít và dễ làm, nhưng thuộc về pháp thí, giúp cho người về phương diện tinh thần, có ảnh hưởng sâu rộng hơn. Mình và người được trồng hạt giống Bát Nhã, một ngày sau, không sớm thì chầy, thế nào cũng được nứt mầm nẩy chồi, đơm bông kết quả, sẽ được thành Phật, rồi hóa độ vô số chúng sanh cũng sẽ thành Phật. Bởi vì người trì kinh và bố thí pháp, thuộc về phước vô lậu thanh tịnh, nên phước đức nhiều hơn người bố thí vật chất.</p>

    <p class="mt-6 font-semibold">Tóm tắt đoạn này, Ngài Phó Đại sĩ có làm bài tụng như sau:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Bảo mãn tam thiên giới</p>
          <p class="mb-0">Tê trì tác phước điền</p>
          <p class="mb-0">Duy thành hữu lậu nghiệp</p>
          <p class="mb-0">Chung bất ly nhơn thiên</p>
          <p class="mb-0">Trì kinh thủ tứ cú</p>
          <p class="mb-0">Dữ Phật tác lương duyên</p>
          <p class="mb-0">Dục nhập vô vi hải</p>
          <p class="mb-0">Tu thừa Bát Nhã thuyền</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Đựng báu đầy Đại thiên</p>
          <p class="mb-0">Bố thí trồng ruộng phước</p>
          <p class="mb-0">Chỉ thành nghiệp hữu lậu</p>
          <p class="mb-0">Hưởng phước cõi nhơn thiên</p>
          <p class="mb-0">Trì tụng bốn câu kệ</p>
          <p class="mb-0">Tạo duyên lành với Phật</p>
          <p class="mb-0">Muốn vào biển vô vi</p>
          <p class="mb-0">Phải nương thuyền Bát Nhã.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý</h4>
    <p>Bài tụng này nói, của báu đựng đầy Đại thế giới (một nghìn triệu thế giới nhỏ) đem bố thí làm phước, hành giả chỉ hưởng phước hữu lậu của cõi nhơn thiên. Không bằng người trì tụng bốn câu kệ, để gieo duyên lành với Phật, đặng nương nhờ thuyền Bát Nhã, dạo chơi biển vô vi, hưởng phước vui vĩnh viễn.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <div class="space-y-4">
        <p class="mb-0"><strong>Sông Hằng:</strong> Tên một con sông bên Ấn Độ. Dài rộng và rất nhiều cát. Mỗi khi Phật thuyết pháp, muốn chỉ cái gì nhiều không thể tính được, thì Phật thí dụ "Như số cát sông Hằng" (Hằng hà sa số).</p>
        <p class="mb-0"><strong>Đại thế giới:</strong> Nguyên văn chữ Hán là "Tam thiên đại thế giới", gọi tắt là "Đại thế giới".<br>Nhân lên 3 lần ngàn, là một Đại thế giới. Nghĩa là năm châu thế giới của chúng ta ở đây là một thế giới nhỏ; nhân lên 1000 thế giới nhỏ, gọi là "Tiểu thiên thế giới"; nhân lên 1000 tiểu thiên thế giới, gọi là "Trung thiên thế giới"; nhân lên 1000 trung thiên thế giới, gọi là "Đại thiên thế giới"; tức là một nghìn triệu thế giới nhỏ, gọi là một "Đại thiên thế giới". Ngoài thế giới Ta bà là "một Đại thiên thế giới". Ngoài thế giới Ta bà còn hằng hà sa số Đại thiên thế giới.</p>
      </div>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="cong-duc-cua-kinh" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">20. CÔNG ĐỨC CỦA KINH KIM CANG BÁT NHÃ</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật dạy: "Tu Bồ Đề! Những chỗ được giảng kinh này, hoặc trọn bộ hay nửa quyển, cho đến tối thiểu là bốn câu kệ, thì chỗ đó cũng được chư thiên, người và thánh thần đến cúng dường và đều kính trọng như chỗ chùa tháp của Phật".</p>
      <p class="mb-0">Phật dạy tiếp: "Tu Bồ Đề! Nếu chỗ nào thờ kinh này, thì chỗ đó có Phật và có các vị đệ tử tôn quý của Phật. Bởi thế nên người chí thành thọ trì đọc tụng kinh này, người ấy sẽ thành tựu Trí huệ Kim Cang Bát Nhã".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này tiếp theo đoạn trên, nói về công đức quý báu của Kinh và khuyên người thọ trì Kinh này. Đây là lần thứ tư.</p>
    <p>Đoạn trước (đoạn 13) Phật dạy: "...tất cả Phật và pháp đều từ kinh này mà ra". Bởi thế nên chỗ giảng kinh này và chỗ thờ kinh này, thì chỗ đó như chùa Phật hay tháp Phật, có Phật, có đệ tử tôn quý của Phật; thánh, thần, trời, người đều kính trọng và cúng dường.</p>
    <p>Vì Kinh này rất quý báu như vậy, nên người chí thành thọ trì kinh này sẽ được Trí huệ Phật (Kim Cang Bát Nhã).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="hoi-ten-kinh" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">21. ÔNG TU BỒ ĐỀ HỎI PHẬT VỀ TÊN KINH</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Lúc bấy giờ ông Tu Bồ Đề hỏi Phật: "Bạch Thế Tôn! Kinh này tên gì? Và tại sao chúng con phải phụng trì?".</p>
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Kinh này tên là 'KIM CANG BÁT NHÃ BA LA MẬT'; vì thế nên các ông phải phụng trì".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đến đây, ông Tu Bồ Đề thỉnh Phật xác định tên kinh và giải thích, tại sao phải phụng trì? Phật trả lời: Kinh này tên "Kim Cang Bát Nhã Ba La Mật" (nghĩa đã giải ở đề mục kinh). Vì "Kim Cang Bát Nhã", nên các ông phải phụng trì.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-kinh-kim-cang" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">22. PHẬT PHÁ CÁI CHẤP VỀ KINH "KIM CANG BÁT NHÃ BA LA MẬT"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Như Lai nói Bát Nhã Ba La Mật, tức là không phải Bát Nhã Ba La Mật, thế mới gọi là Bát Nhã Ba La Mật".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá trừ cái chấp về kinh "Kim Cang Bát Nhã Ba La Mật". Nếu hành giả còn vọng chấp "có kinh Bát Nhã và có ta phụng trì", tức là hành giả còn chấp ngã (ta phụng trì) và chấp pháp (kinh Bát Nhã) thì không phải là kinh Bát Nhã và thọ trì Bát Nhã. Phải dẹp trừ hết các vọng chấp ngã, pháp v.v... mới phải thọ trì kinh Bát Nhã.</p>
    <p>Bởi thế nên, Phật vừa nói ra tên kinh, sợ chúng sanh chấp tên kinh, nên Phật liền phá chấp: "Như Lai nói Bát Nhã Ba La Mật, không phải Bát Nhã Ba La Mật, thế mới thật là Bát Nhã Ba La Mật".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-nhu-lai-thuyet-phap" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">23. PHẬT PHÁ CÁI CHẤP "NHƯ LAI CÓ THUYẾT PHÁP"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Phật hỏi: "Tu Bồ Đề! Như Lai có thuyết pháp không?". Tu Bồ Đề thưa: "Bạch Thế Tôn! Như Lai không có thuyết pháp".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là lần thứ hai, Phật phá cái chấp: "Như Lai có thuyết pháp" (lần thứ nhất ở đoạn 11).</p>
    <p>Tiếp theo đoạn trên, ông Tu Bồ Đề hỏi kinh này tên gì? - Phật nói kinh này tên là "Kim Cang Bát Nhã Ba La Mật". Sợ người chấp: "Như thế Phật có nói pháp Bát Nhã", nên tiếp đến đoạn này, Phật phá luôn cái chấp: "Phật có thuyết pháp".</p>
    <p>Nếu hành giả còn vọng chấp: "Phật có thuyết pháp", thì không nhập được "Kim Cang Bát Nhã". Vì ông Tu Bồ Đề đã nhập được lý "Kim Cang Bát Nhã", nên ông trả lời: "Như Lai không có thuyết pháp".</p>
    <p>Muốn cho độc giả rõ thêm đoạn này, tôi xin nhắc lại lời giải thích ở đoạn trước thêm một lần nữa: Một hôm ông Tu Bồ Đề ngồi yên tịnh dưới gốc cây. Trời Đế Thích rưới hoa cúng dường. Ông Tu Bồ Đề hỏi: "Ai rưới hoa?". - Trời Đế Thích thưa: "Ngài thuyết kinh Bát Nhã hay quá! Con xin dâng hoa cúng dường".</p>
    <p>Ông Tu Bồ Đề nói: "Tôi không nói kinh Bát Nhã". Trời Đế Thích thưa: "Ngài không nói Bát Nhã, con không nghe Bát Nhã".</p>
    <p>Kết luận: "Không nói Bát Nhã và không nghe Bát Nhã", như thế mới thật là "nói Bát Nhã và nghe Bát Nhã".</p>
    <p>Vì ngộ được lý chơn không của Kinh Bát Nhã, nên ngài Viên Ngộ Thiền sư có làm bài kệ rằng:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Thập phương đồng tụ hội</p>
          <p class="mb-0">Cá cá học vô vi</p>
          <p class="mb-0">Thử thị tuyển Phật trường</p>
          <p class="mb-0">Tâm không cập đệ quy.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Mười phương đồng tụ hội</p>
          <p class="mb-0">Người người học vô vi</p>
          <p class="mb-0">Đây là trường thi Phật</p>
          <p class="mb-0">"Tâm Không" mới được đậu.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý</h4>
    <p>Bài kệ này quan trọng nhất là hai chữ "Tâm không". Nếu người nào tâm không còn các phiền não vọng chấp ngã, pháp v.v... thì người đó nhập được Kim Cang Bát Nhã, tức là đậu quả Phật.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-vi-tran-the-gioi" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">24. PHẬT PHÁ CÁI CHẤP "THẬT CÓ VI TRẦN VÀ THẾ GIỚI"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Những vi trần chứa trong đại thế giới (1 nghìn triệu thế giới nhỏ) có nhiều không?". Tu Bồ Đề thưa: "Bạch Thế Tôn nhiều lắm".</p>
      <p class="mb-0">Phật dạy: "Tu Bồ Đề! Như Lai nói các vi trần, không phải thật vi trần. Như Lai nói thế giới, không phải thật thế giới, chỉ tạm gọi là thế giới".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Phật dùng Trí huệ Bát Nhã phá trừ cái chấp "thật có vi trần và thật có thế giới".</p>
    <p>Phật đã dạy: "Phàm sở hữu tướng giai thị hư vọng"; nghĩa là: phàm cái gì có hình tướng, đều là hư dối không thật. Tất cả muôn vật trong vũ trụ, lớn như thế giới, nhỏ như vi trần, cũng đều là hư giả không thật.</p>
    <p>Do hiệp nhiều vi trần (bụi nhỏ) thành ra một vật lớn nhất, rồi tạm đặt tên là thế giới.</p>
    <p>Trái lại, do vật lớn nhất như thế giới, chẻ cho đến thật nhỏ, không còn chẻ được nữa, rồi tạm đặt tên là vi trần (bụi nhỏ). Vật thế giới hay vi trần, cùng các vật khác, đều do vọng thức của chúng sanh, phân biệt so đo (kế đạc phân biệt) rồi đặt tên như thế này hay như thế khác, chứ không có thật thể.</p>
    <p>Trong bộ Câu Xá Luận tụng lược thích, về trang 210, có chép về vi trần và thế giới, đại ý như sau: Từ vật lớn nhất là thế giới, rồi chẻ nhỏ thế giới ra nhiều lần, cho đến thành hột bụi bay qua lại các kẽ hở (như mỗi buổi sáng, mặt trời chiếu vào các kẽ hở, chúng ta thấy rất nhiều bụi bay qua bay lại). Các thứ bụi này gọi tên là:</p>

    <div class="pl-6 space-y-2 mt-4 mb-4">
      <p class="mb-0"><strong>1. Khích du trần:</strong> Bụi bay qua các kẽ hở.</p>
      <p class="mb-0"><strong>2. Ngưu mao đầu trần:</strong> Hạt bụi nhỏ ở trên đầu lông con trâu. Bụi này do chẻ nhỏ bụi "khích du" mà thành.</p>
      <p class="mb-0"><strong>3. Dương mao đầu trần:</strong> Hạt bụi ở trên đầu lông con dê. Thứ bụi này do chẻ nhỏ bụi "Ngưu mao đầu" mà thành.</p>
      <p class="mb-0"><strong>4. Thố mao đầu trần:</strong> Hạt bụi ở trên đầu lông con thỏ. Thứ bụi này do chẻ nhỏ bụi "Dương mao đầu" mà thành.</p>
      <p class="mb-0"><strong>5. Thủy trần:</strong> Bụi rớt trong nước không ướt, vì quá nhỏ. Thứ bụi này do chẻ nhỏ bụi "Thố mao đầu" mà thành.</p>
      <p class="mb-0"><strong>6. Kim trần:</strong> Bụi này có thể lọt qua những vàng khối hay sắt dày hoặc kiếng dày; do chẻ nhỏ bụi "Thủy trần" mà thành.</p>
      <p class="mb-0"><strong>7. Vi trần:</strong> Bụi nhỏ; do chẻ nhỏ bụi "Kim trần" mà thành.</p>
      <p class="mb-0"><strong>8. Cực vi trần:</strong> Bụi rất nhỏ. Hạt bụi này do chẻ nhỏ bụi "Vi trần" mà thành.</p>
      <p class="mb-0"><strong>9. Lân hư trần:</strong> Bụi gần mé hư không. Thứ bụi này nhỏ nhất, không thể chẻ nhỏ nữa được, nếu chẻ nữa thì thành hư không. Bụi này do chẻ bụi "Cực vi" mà thành.</p>
    </div>

    <p>Rồi trở lại, từ vọng tâm nhỏ như "Lân hư trần"</p>
    <div class="pl-6 space-y-1 mb-4 italic">
      <p class="mb-0">Tích tụ 7 Lân hư trần thành một "Cực vi trần"</p>
      <p class="mb-0">....7 Cực vi trần thành một "Vi trần"</p>
      <p class="mb-0">....7 Vi trần thành một "Kim trần"</p>
      <p class="mb-0">....7 Kim trần thành một "Thủy trần"</p>
      <p class="mb-0">....7 Thủy trần thành một "Thố mao đầu trần"</p>
      <p class="mb-0">....7 Thố mao đầu trần thành một "Dương mao đầu trần"</p>
      <p class="mb-0">....7 Dương mao đầu trần thành một "Ngưu mao đầu trần"</p>
      <p class="mb-0">....7 Ngưu mao đầu trần thành một "Khích du trần"</p>
    </div>
    
    <p>Cứ tích tụ mãi mãi như vậy, thành những vật nhỏ, đến vật lớn, cho đến vật lớn nhất là "thế giới".</p>
    <p>Tóm lại, chứa nhiều vi trần thành thế giới; chẻ nhỏ thế giới thành ra vi trần. Vi trần và thế giới đều do sự đối đãi lớn với nhỏ, mà đặt ra cái tên để kêu gọi, chớ không có cái gì là chơn thật.</p>

    <p class="font-semibold mt-6">Ngài Phó Đại sĩ làm bài tụng, nói về vi trần và thế giới.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Tích trần thành thế giới</p>
          <p class="mb-0">Chiết giới tác vi trần</p>
          <p class="mb-0">Giới dụ nhơn thiên quả</p>
          <p class="mb-0">Trần vi hữu lậu nhơn</p>
          <p class="mb-0">Trần nhơn, nhơn bất thật</p>
          <p class="mb-0">Giới quả, quả phi nhơn</p>
          <p class="mb-0">Quả nhơn tri thị huyễn</p>
          <p class="mb-0">Tiêu diêu tự tại nhơn</p>
          <p class="mb-0 mt-2">Vọng kế nhơn thành chấp</p>
          <p class="mb-0">Mê thằng vị thị xà</p>
          <p class="mb-0">Tâm nghi sanh ám quỷ</p>
          <p class="mb-0">Nhãn bệnh kiến không hoa</p>
          <p class="mb-0">Nhất cảnh tuy vô dị</p>
          <p class="mb-0">Tam nhơn nãi kiến sai</p>
          <p class="mb-0">Liễu tư danh bất thật</p>
          <p class="mb-0">Trường ngự bạch ngưu xa.</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Chứa trần thành thế giới</p>
          <p class="mb-0">Chẻ giới hóa vi trần</p>
          <p class="mb-0">Giới dụ quả nhơn thiên</p>
          <p class="mb-0">Trần là nhơn hữu lậu</p>
          <p class="mb-0">Trần nhơn, nhơn không thật</p>
          <p class="mb-0">Giới quả, quả chẳng chơn</p>
          <p class="mb-0">Biết quả, nhơn đều huyễn</p>
          <p class="mb-0">Được tự tại tiêu diêu</p>
          <p class="mb-0 mt-2">Vọng thấy dây thành rắn</p>
          <p class="mb-0">Chấp mê bởi tại tâm</p>
          <p class="mb-0">Tâm sợ nên ma hiện</p>
          <p class="mb-0">Mắt nhặm thấy đốm hoa</p>
          <p class="mb-0">Một cảnh không sai khác</p>
          <p class="mb-0">Ba người thấy chẳng đồng</p>
          <p class="mb-0">Ai biết đó là huyễn</p>
          <p class="mb-0">Tức là bậc Đại giác.</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý hai bài tụng</h4>
    <p>Bài tụng thứ nhất nói: chứa vi trần thành thế giới, chẻ thế giới thành vi trần. Thế giới là dụ cho quả nhơn thiên, vi trần là dụ cho nhơn hữu lậu. Nhơn vi trần đã không thật, nên quả thế giới cũng hư vọng.</p>
    <p>Nếu người biết được nhơn quả đều như huyễn, thì sẽ được tiêu diêu tự tại.</p>
    <p>Tiếp đến bài tụng thứ hai, đại ý nói: Vì tánh "Biến kế sở chấp", nên chấp sợi dây là con rắn, ban đêm thấy bóng tối cho là ma; cũng như vì con mắt bị nhặm, nên thấy có hoa đốm giữa hư không. Cũng một cảnh không sai khác, nhưng ba người (biến kế sở chấp, y tha khởi và viên thành thật) thấy chẳng đồng. Nếu người được giác ngộ như Phật, mới biết đó là giả danh không thật.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="pha-chap-32-tuong-tot" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">25. PHẬT PHÁ CÁI CHẤP: "THẤY 32 TƯỚNG TỐT CỦA PHẬT LÀ THẤY PHẬT"</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Phật hỏi: "Tu Bồ Đề! Ông có thể cho thấy 32 tướng tốt của Như Lai là thấy được Như Lai không?".</p>
      <p class="mb-0">Tu Bồ Đề thưa: "Bạch Thế Tôn! Không thể được. Tại sao vậy? Vì Đức Như Lai nói 32 tướng tốt, chỉ giả gọi 32 tướng tốt".</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn trên (24) Phật dùng Trí huệ Bát Nhã phá chấp về y báo (chấp pháp) là vi trần và thế giới. Đoạn này Phật lại dùng Trí huệ Bát Nhã phá chấp về chánh báo (chấp ngã); nghĩa là chấp "thấy 32 tướng tốt của Phật là thấy được Phật". Đây là lần thứ hai (lần thứ nhất ở đoạn thứ 7) Phật phá chấp về thấy Phật.</p>
    <p>Nếu còn chấp "thấy 32 tướng tốt của Phật là thấy được Phật", tức là còn chấp ngã (ta thấy) chấp nhơn (Phật) v.v... thì không nhập được Kim Cang Bát Nhã, nên không thấy được Phật thiệt.</p>
    
    <p class="font-semibold mt-6">Ngài Phó Đại sĩ làm bài tụng, nói về việc phá các vọng chấp ngã, nhơn, năng, sở v.v...</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div>
        <p class="font-semibold mb-2">Nguyên văn (dịch âm):</p>
        <div class="italic">
          <p class="mb-0">Tảo trừ tâm ý địa</p>
          <p class="mb-0">Danh vi Tịnh độ nhơn</p>
          <p class="mb-0">Vô luận phước dữ trí</p>
          <p class="mb-0">Quang thả ly tham sân</p>
          <p class="mb-0">Trang nghiêm tuyệt năng sở</p>
          <p class="mb-0">Vô ngã diệc vô nhơn</p>
          <p class="mb-0">Đoạn, thường cu bất nhiễm</p>
          <p class="mb-0">Tần thoát xuất hồng trần</p>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-2">Dịch nghĩa:</p>
        <div class="italic">
          <p class="mb-0">Quét sạch đất tâm ý</p>
          <p class="mb-0">Đó là nhơn tịnh độ</p>
          <p class="mb-0">Không cần tu phước huệ</p>
          <p class="mb-0">Miễn bỏ được tham sân</p>
          <p class="mb-0">Trang nghiêm không năng sở</p>
          <p class="mb-0">Không ngã cũng không nhơn</p>
          <p class="mb-0">Đoạn, thường đều chẳng nhiễm</p>
          <p class="mb-0">Siêu xuất cõi hồng trần</p>
        </div>
      </div>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Đại ý hai bài tụng</h4>
    <p>Không cần tu phước huệ hay phương pháp nào khác, chỉ quét sạch tham, sân, si v.v... ở trong tâm địa của mình, đó là nhơn để vãng sanh về Tịnh độ.</p>
    <p>Dẹp trừ cái vọng chấp: năng, sở, nhơn, ngã, đoạn, thường v.v... thì được siêu thoát cõi hồng trần, đó là trang nghiêm cõi Phật.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-2 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      <p class="font-semibold mb-2">32 Tướng tốt: Phật có 32 tướng tốt</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 pl-4">
        <p class="mb-0">1. Dưới bàn chân no tròn</p>
        <p class="mb-0">2. Dưới bàn chân có cả ngàn khu ốc</p>
        <p class="mb-0">3. Tay chân mềm dịu</p>
        <p class="mb-0">4. Ngón chân có màn như chân nhạn</p>
        <p class="mb-0">5. Ngón tay ngón chân no tròn</p>
        <p class="mb-0">6. Gót xứng với bàn chân</p>
        <p class="mb-0">7. Bàn chân xứng với gót</p>
        <p class="mb-0">8. Hai chân tròn vót như hai chân nai</p>
        <p class="mb-0">9. Tay dài thòng tới đầu gối</p>
        <p class="mb-0">10. Âm tướng quy tàng</p>
        <p class="mb-0">11. Chân lông ửng màu xanh tía</p>
        <p class="mb-0">12. Tóc lông đều xoay qua phía mặt</p>
        <p class="mb-0">13. Da trơn mịn không dính dơ</p>
        <p class="mb-0">14. Màu da sắc vàng</p>
        <p class="mb-0">15. Tay chân vai cổ, bảy chỗ đều đủ</p>
        <p class="mb-0">16. Cổ tròn lạ thường</p>
        <p class="mb-0">17. Hai cái nách no đủ</p>
        <p class="mb-0">18. Dung nghi đoan chánh</p>
        <p class="mb-0">19. Thân tướng trang nghiêm</p>
        <p class="mb-0">20. Hình thể xứng nhau</p>
        <p class="mb-0">21. Oai dung như sư tử</p>
        <p class="mb-0">22. Chói hào quang mỗi phía một lần</p>
        <p class="mb-0">23. Hàm răng bốn mươi cái khít và bằng</p>
        <p class="mb-0">24. Bốn răng cấm trắng và bén</p>
        <p class="mb-0">25. Trong miệng có mùi thơm</p>
        <p class="mb-0">26. Lưỡi dài che đặng cả cái mặt</p>
        <p class="mb-0">27. Tiếng nói dịu dàng đủ giọng</p>
        <p class="mb-0">28. Lông nheo như ngưu vương</p>
        <p class="mb-0">29. Con mắt có quần đỏ</p>
        <p class="mb-0">30. Mặt như trăng tròn</p>
        <p class="mb-0">31. Chỗ gian mi có lông trắng</p>
        <p class="mb-0">32. Trên đầu lồi thịt lên, như đầu tóc</p>
      </div>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong phần 19, tại sao công đức của người thọ trì hoặc giảng dạy Kinh Kim Cang lại lớn hơn người bố thí thất bảo đầy khắp các Đại thế giới?",
    options: {
      a: "Vì bố thí vật chất chỉ mang lại hạnh phúc nhất thời, còn Pháp thí giúp gieo hạt giống Bát Nhã để thành Phật vĩnh viễn.",
      b: "Vì việc tìm kiếm bảy món báu dễ dàng hơn việc tìm hiểu ý nghĩa sâu xa của bốn câu kệ trong kinh.",
      c: "Vì chư Phật chỉ công nhận những người có khả năng đọc tụng kinh điển mà không quan tâm đến việc giúp đỡ người nghèo.",
      d: "Vì bố thí vật chất gây ra phiền não cho người nhận, còn giảng kinh thì không gây ra tác động tiêu cực nào.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Bố thí tài sản dù lớn đến đâu cũng chỉ mang lại phước báu vật chất nhất thời (hữu lậu), còn thọ trì và giảng dạy Kinh Kim Cang (pháp thí) giúp gieo hạt giống Bát Nhã, đem lại sự giải thoát, thành Phật vĩnh viễn (phước vô lậu thanh tịnh).",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo định nghĩa về 'Đại thế giới' (Tam thiên đại thế giới) trong bài, một Đại thế giới chứa bao nhiêu thế giới nhỏ?",
    options: {
      a: "Một nghìn triệu thế giới nhỏ.",
      b: "Mười triệu thế giới nhỏ.",
      c: "Một triệu thế giới nhỏ.",
      d: "Ba nghìn thế giới nhỏ.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Nhân lên 1000 thế giới nhỏ, gọi là 'Tiểu thiên thế giới'; nhân lên 1000 tiểu thiên thế giới, gọi là 'Trung thiên thế giới'; nhân lên 1000 trung thiên thế giới, gọi là 'Đại thiên thế giới'; tức là một nghìn triệu thế giới nhỏ, gọi là một 'Đại thiên thế giới'.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khi nói 'Như Lai nói Bát Nhã Ba La Mật, tức không phải Bát Nhã Ba La Mật', mục đích chính của Phật là gì?",
    options: {
      a: "Để khẳng định rằng Kinh Kim Cang không có thực chất và không cần phải học tập.",
      b: "Để chứng minh rằng ngôn ngữ của con người luôn sai lệch so với chân lý của vũ trụ.",
      c: "Để thông báo rằng Ngài sẽ đổi tên kinh sang một tên gọi khác phù hợp hơn.",
      d: "Để phá trừ cái chấp vào tên gọi và hình thức của kinh điển.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Phật dùng Trí huệ Bát Nhã phá trừ cái chấp về kinh 'Kim Cang Bát Nhã Ba La Mật', tức là phá chấp ngã (ta phụng trì) và chấp pháp (tên kinh), để hành giả không kẹt vào danh tự.",
    },
  },
  {
    question: "Tại sao ông Tu Bồ Đề lại trả lời rằng 'Như Lai không có thuyết pháp'?",
    options: {
      a: "Vì ông đã ngộ được lý chơn không, hiểu rằng chân lý tối hậu không thể diễn tả bằng lời nói.",
      b: "Vì ông Tu Bồ Đề không nghe thấy Phật nói gì do mải thiền định.",
      c: "Vì trong buổi lễ đó Phật thực sự giữ im lặng từ đầu đến cuối.",
      d: "Vì ông cho rằng những lời Phật nói chỉ là những lời khuyên đạo đức thông thường, không phải là pháp.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Ông Tu Bồ Đề đã nhập được lý 'Kim Cang Bát Nhã' (lý chơn không vô tướng) nên hiểu rằng nếu chấp 'Phật có thuyết pháp' là còn kẹt trong tướng, do đó ông trả lời 'Như Lai không có thuyết pháp'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong hệ thống phân chia vi trần, loại bụi nào được mô tả là nhỏ nhất, nếu chẻ nữa sẽ thành hư không?",
    options: {
      a: "Cực vi trần.",
      b: "Kim trần.",
      c: "Lân hư trần.",
      d: "Khích du trần.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Lân hư trần: Bụi gần mé hư không. Thứ bụi này nhỏ nhất, không thể chẻ nhỏ nữa được, nếu chẻ nữa thì thành hư không.'",
      d: "Sai.",
    },
  },
  {
    question: "Phật dùng ví dụ về 'thế giới' và 'vi trần' để chứng minh điều gì về bản chất của vạn vật?",
    options: {
      a: "Vi trần là nguồn gốc của sự sống, còn thế giới chỉ là nơi chứa đựng sự sống đó.",
      b: "Thế giới là vĩnh hằng trong khi vi trần luôn biến đổi không ngừng.",
      c: "Mọi vật đều do các thành phần nhỏ hợp lại mà thành, không có thực thể cố định, chỉ là giả danh.",
      d: "Con người cần phải bảo vệ thế giới và tôn trọng từng hạt bụi nhỏ.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Tóm lại, chứa nhiều vi trần thành thế giới; chẻ nhỏ thế giới thành ra vi trần. Vi trần và thế giới đều do sự đối đãi lớn với nhỏ, mà đặt ra cái tên để kêu gọi, chớ không có cái gì là chơn thật.' Mọi pháp đều hư giả (phi tướng).",
      d: "Sai.",
    },
  },
  {
    question: "Bài tụng của Ngài Phó Đại sĩ về vi trần có nhắc đến 'Vọng thấy dây thành rắn'. Ví dụ này minh họa cho khái niệm nào?",
    options: {
      a: "Trí huệ vô lậu.",
      b: "Tánh Viên thành thật.",
      c: "Quả báo nhơn thiên.",
      d: "Tánh Biến kế sở chấp.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Đại ý bài tụng: 'Vì tánh 'Biến kế sở chấp', nên chấp sợi dây là con rắn, ban đêm thấy bóng tối cho là ma'.",
    },
  },
  {
    question: "Theo đoạn 25, việc thấy 32 tướng tốt của Phật có đồng nghĩa với việc thấy được chân thân của Như Lai không?",
    options: {
      a: "Không, vì 32 tướng tốt đó thực chất là do người đời tự tưởng tượng ra.",
      b: "Có, vì Phật đã dùng thần lực để biến hóa ra các tướng tốt đó cho chúng sinh chiêm bái.",
      c: "Có, vì chỉ có những bậc đại đức mới có thể sở hữu 32 tướng trang nghiêm như vậy.",
      d: "Không, vì 32 tướng tốt chỉ là hình tướng bên ngoài, không phải là thực thể giải thoát của Như Lai.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Không phải tưởng tượng ra.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Ông Tu Bồ Đề thưa: 'Không thể được. Vì Đức Như Lai nói 32 tướng tốt, chỉ giả gọi 32 tướng tốt'. Việc chấp vào 32 tướng tốt là chấp ngã, chấp pháp, không thấy được Phật thiệt (Pháp thân).",
    },
  },
  {
    question: "Phương pháp nào được Ngài Phó Đại sĩ đề cập để vãng sanh về Tịnh độ và siêu thoát cõi hồng trần?",
    options: {
      a: "Đi tìm con sông Hằng để đếm tất cả số cát ở đó.",
      b: "Xây dựng nhiều chùa tháp và cúng dường thật nhiều châu báu.",
      c: "Quét sạch tham, sân, si và các vọng chấp trong đất tâm ý.",
      d: "Phải học thuộc lòng toàn bộ 32 tướng tốt của Phật.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Đại ý bài tụng: 'Không cần tu phước huệ hay phương pháp nào khác, chỉ quét sạch tham, sân, si v.v... ở trong tâm địa của mình, đó là nhơn để vãng sanh về Tịnh độ. Dẹp trừ cái vọng chấp: năng, sở, nhơn, ngã... thì siêu thoát hồng trần.'",
      d: "Sai.",
    },
  },
  {
    question: "Đặc điểm nào sau đây thuộc về danh sách 32 tướng tốt của Phật được liệt kê ở cuối bài?",
    options: {
      a: "Đôi mắt có màu xanh lá cây rực rỡ.",
      b: "Lưỡi dài che đặng cả cái mặt.",
      c: "Cánh tay ngắn và thon gọn để dễ cử động.",
      d: "Mái tóc màu vàng kim rực rỡ.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Tướng số 26: 'Lưỡi dài che đặng cả cái mặt'.",
      c: "Sai. Tướng số 9: 'Tay dài thòng tới đầu gối'.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-5-phan-chanh-ton-tiep-theo',
  slug: 'bai-thu-5-phan-chanh-ton-tiep-theo',
  title: 'Bài Thứ 5 - Phần Chánh tôn (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 9,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-5-phan-chanh-ton-tiep-theo/T%C3%B3m_t%E1%BA%AFt_%C3%BD_ngh%C4%A9a_Kinh_Kim_Cang.png',
      readingContent,
      tableOfContents: [
        { id: 'b-phan-chanh-ton-tiep-theo', label: 'B- Phần Chánh tôn (tiếp theo)' },
        { id: 'tho-tri-kinh-nay', label: '19. Thọ trì Kinh này phước đức vô lượng', indent: 1 },
        { id: 'cong-duc-cua-kinh', label: '20. Công đức của Kinh Kim Cang Bát Nhã', indent: 1 },
        { id: 'hoi-ten-kinh', label: '21. Ông Tu Bồ Đề hỏi Phật tên Kinh', indent: 1 },
        { id: 'pha-chap-kinh-kim-cang', label: '22. Phật phá cái chấp "Kinh Kim Cang Bát Nhã"', indent: 1 },
        { id: 'pha-chap-nhu-lai-thuyet-phap', label: '23. Phật phá cái chấp "Như Lai có thuyết pháp"', indent: 1 },
        { id: 'pha-chap-vi-tran-the-gioi', label: '24. Phật phá cái chấp "Thật có vi trần và thế giới"', indent: 1 },
        { id: 'pha-chap-32-tuong-tot', label: '25. Phật phá cái chấp "Thấy 32 tướng tốt của Phật là thấy Phật"', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-5-phan-chanh-ton-tiep-theo/L%C6%B0%E1%BB%A1i_G%C6%B0%C6%A1m_Kim_Cang.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/KSxVkXCxta8',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6ONPNlJyVeOkU5OxxjQUeU',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 5',
    passPercentage: 70,
    questions,
  },
}

export default lesson