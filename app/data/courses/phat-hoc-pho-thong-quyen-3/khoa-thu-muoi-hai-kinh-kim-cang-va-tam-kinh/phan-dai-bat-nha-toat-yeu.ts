import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH ĐẠI BÁT NHÃ TOÁT YẾU</p>
      <h2 id="luoc-giai-tieu-de" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Lược Giải Tiêu Đề Kinh</h2>
    </div>

    <div class="my-6 pl-4 border-l-4 border-primary-300 dark:border-primary-700 italic opacity-80">
      <p class="mb-1">Ngài Tam tạng Pháp sư Huyền Trang dịch chữ Phạn ra chữ Hán</p>
      <p class="mb-0">Sa môn THÍCH THIỆN HOA dịch lại chữ Việt và lược giải</p>
    </div>

    <h4 class="mt-8 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Nguyên đề mục kinh này có mười chữ: <span class="font-semibold">"Ma Ha Bát Nhã Ba La Mật Đa tâm kinh"</span>; gọi tắt là: "Tâm kinh"</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="giai-nghia-ma-ha" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">MA HA</h3>
    </div>
    <p>Trung Hoa dịch âm chữ Phạn "Maha", dịch nghĩa là "Đại" (lớn), "Đa" (nhiều) và "thắng" (hơn).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="giai-nghia-bat-nha" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">BÁT NHÃ</h3>
    </div>
    <p>Trung Hoa dịch âm chữ Phạn "Prajñā"; vì không có chữ dịch cho cân xứng, nên chỉ dịch nguyên âm (Bát Nhã).</p>

    <p class="font-semibold mt-6">Bát Nhã có nhiều nghĩa sâu xa, nhưng tóm lại có sáu nghĩa:</p>
    <div class="pl-6 space-y-2 my-4">
      <p class="mb-0">1. Viễn ly: Xa lìa các vô minh phiền não vọng chấp</p>
      <p class="mb-0">2. Minh: Sáng, không mờ tối</p>
      <p class="mb-0">3. Trí: Thông suốt</p>
      <p class="mb-0">4. Huệ: Sáng tỏ</p>
      <p class="mb-0">5. Trí huệ: Sáng tỏ thông suốt</p>
      <p class="mb-0">6. Thanh tịnh: Trong sạch không nhiễm ô.</p>
    </div>

    <p>Bát Nhã có nhiều nghĩa như vậy, nếu lấy một nghĩa thì không được đúng lắm, nên các dịch giả chỉ để nguyên âm chữ Phạn.</p>
    <p>Tuy nhiên, trong sáu nghĩa trên đây, nếu đem so sánh và cân nhắc, thì có thể dùng tạm nghĩa "Trí huệ", vì nghĩa Trí huệ có phần rõ ràng và xác đáng hơn hết.</p>
    <p>Nhưng, cần phải chọn lọc thật kỹ, bỏ các loại Trí huệ sau đây, mới đúng với nghĩa của chữ "Bát Nhã".</p>

    <div class="pl-6 space-y-4 my-4">
      <div>
        <p class="font-semibold mb-1">1. Trí huệ thế gian:</p>
        <p class="mb-0">Trong thế gian, những người học rộng thấy xa, thông minh lanh lợi khôn khéo lịch duyệt, hay giỏi mọi phương diện, thiên hạ gọi là người "Trí huệ". Nhưng Trí huệ đó là Trí huệ của thế tục phàm phu, không phải là "Trí huệ Bát Nhã".</p>
      </div>
      <div>
        <p class="font-semibold mb-1">2. Trí huệ ngoại đạo:</p>
        <p class="mb-0">Chúng ngoại đạo tu thiền định lâu ngày cũng có Trí huệ biết được việc quá khứ hiện tại và vị lai, thần thông biến hóa vô cùng, nhiều pháp kỳ lạ. Nhưng Trí huệ đó là tà Trí huệ, không phải "Trí huệ Bát Nhã".</p>
      </div>
      <div>
        <p class="font-semibold mb-1">3. Trí huệ Nhị thừa:</p>
        <p class="mb-0">Hàng Thinh văn và Duyên giác do tu pháp Tứ đế và Thập nhị nhơn duyên mà đặng đạo quả. Các vị này đã khỏi sanh tử luân hồi, thần thông tự tại và có Trí huệ biết được việc quá khứ hiện tại và vị lai.</p>
      </div>
    </div>

    <p>Nhưng Trí huệ đó thuộc về Trí huệ Tiểu thừa, chỉ thấy về "ngã không chơn như" (thiên không), chớ chưa thấy được "pháp không chơn như", nên cũng không phải "Trí huệ Bát Nhã".</p>
    <p>Trừ ba loại Trí huệ trên, duy có Trí huệ của Phật hay của Đại thừa Bồ Tát, mới phải là "Trí huệ Bát Nhã".</p>
    <p>Công dụng của Trí huệ Bát Nhã, như mặt trời chiếu phá các mây mù vô minh vọng chấp (ngã, pháp). Bởi thế nên Trí huệ Bát Nhã chiếu soi các pháp, thì pháp nào cũng đều bỏ hình giả dối, mà hoàn lại tướng chơn thật. Tướng chơn thật của các pháp đã hiện, tức là chơn như hay chơn lý của vũ trụ hiện ra vậy.</p>
    <p>Trí huệ Bát Nhã sẵn có trong mỗi chúng sanh từ vô thỉ đến nay, không phải do tu mới có, hay nhờ các duyên bên ngoài luyện tập mà thành. Dù ở địa vị phàm phu, nó cũng không giảm, dù chứng quả thánh, nó cũng không tăng. Nó không bị các vô minh phiền não phá hoại, trái lại còn phá tiêu tất cả vô minh phiền não từ vô thỉ đến nay. Nó phá một cách dễ dàng và rốt ráo, như gió thổi mây bay, như mặt trời chiếu sương mù tan. Bởi thế nên gọi là "Bát Nhã Ba La Mật Đa" (Trí huệ rốt ráo).</p>
    <p>Trí huệ Bát Nhã có công năng như chiếc thuyền, đưa chúng sanh từ bên này bờ mê muội triền phược của phàm phu, đến bên kia bờ giác ngộ giải thoát của chư Phật, nên Cổ nhơn cũng gọi là "thuyền Bát Nhã".</p>

    <p class="font-semibold mt-6">Muốn giản biệt Trí huệ Bát Nhã, để khỏi lầm lộn với Trí huệ của phàm phu, ngoại đạo và Tiểu thừa, chúng tôi dịch nghĩa chữ "Bát Nhã" như sau:</p>
    <div class="pl-6 space-y-2 my-2">
      <p class="mb-0">1. Trí huệ Phật (Trí huệ của Phật tánh hay chơn tâm)</p>
      <p class="mb-0">2. Trí huệ Bát Nhã (dùng cả chữ Phạn và chữ Hán)</p>
      <p class="mb-0">3. Trí huệ rốt ráo (Bát Nhã Ba la mật)</p>
    </div>

    <p class="font-semibold mt-6">Bát Nhã có ba loại:</p>
    <div class="pl-6 space-y-2 my-2">
      <p class="mb-0"><strong>a. Văn tự Bát Nhã:</strong> tức là "học Bát Nhã". Hành giả nhờ học văn tự nghĩa lý kinh Bát Nhã mới ngộ được Lý tánh Bát Nhã của mình.</p>
      <p class="mb-0"><strong>b. Quán chiếu Bát Nhã:</strong> Tức là "tu Bát Nhã". Sau khi đã ngộ được Lý tánh Bát Nhã, hành giả phải tu tập; nghĩa là quán sát chiếu soi các pháp đều "không".</p>
      <p class="mb-0"><strong>c. Thật tướng Bát Nhã:</strong> Tức là "Chứng Bát Nhã". Sau khi tu tập, đến lúc công viên quả mãn rồi, hành giả chứng được tướng chơn thật của Bát Nhã.</p>
    </div>

    <p class="font-semibold mt-6">Tu chứng Bát Nhã có ba giai đoạn:</p>
    <div class="pl-6 space-y-2 my-2">
      <p class="mb-0"><strong>1. Gia hạnh Bát Nhã:</strong> Tăng gia công hạnh tu Bát Nhã. Nghĩa là sau khi hạ thủ công phu tu tập, hành giả phải tăng gia công hạnh, mới đặng Trí huệ Bát Nhã.</p>
      <p class="mb-0"><strong>2. Căn bản Bát Nhã:</strong> Tức là thể tánh Bát Nhã, tuy sẵn có trong mỗi chúng sanh, nhưng phải nhờ có tu hành mới được hiển lộ.</p>
      <p class="mb-0"><strong>3. Hậu đắc Bát Nhã:</strong> Tức là diệu dụng Bát Nhã, do hành giả sau khi chứng đặng "căn bản Bát Nhã" rồi mới được diệu dụng này.</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="giai-nghia-ba-la-mat-da" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">BA LA MẬT ĐA</h3>
    </div>
    <p>Trung Hoa dịch âm chữ Phạn "Paramita", có hai nghĩa:</p>
    <div class="pl-6 space-y-3 my-4">
      <p class="mb-0"><strong>1. Đáo bỉ ngạn:</strong> đến bờ bên kia. Trí huệ Bát Nhã có công năng đưa chúng sanh từ bờ mê muội triền phược của phàm phu bên này, qua đến bờ giác ngộ giải thoát của chư Phật bên kia, nên gọi là "Bát Nhã Ba La Mật Đa".</p>
      <p class="mb-0"><strong>2. Cứu cánh viên mãn:</strong> hoàn toàn rốt ráo. Theo tục ngữ Ấn Độ, phàm làm việc gì khi đã hoàn toàn viên mãn, thì gọi là "Ba La Mật Đa". Trí huệ Bát Nhã là loại Trí huệ đã rốt ráo viên mãn, nên gọi là "Bát Nhã Ba La Mật Đa".</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="giai-nghia-tam" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">TÂM</h3>
    </div>
    <p>Chữ "Tâm" có nhiều nghĩa:</p>
    <div class="pl-6 grid grid-cols-1 md:grid-cols-2 gap-2 my-4">
      <p class="mb-0">1. Tâm: Quả tim, như "tâm can tỳ phế thận";</p>
      <p class="mb-0">2. Tâm: Chứa nhóm và sanh khởi, như "tập khởi tâm";</p>
      <p class="mb-0">3. Tâm: Chứa nhóm, như "Tập tích tâm";</p>
      <p class="mb-0">4. Tâm: Sanh diệt không gián đoạn, như "đẳng vô gián tâm";</p>
      <p class="mb-0">5. Tâm: Nhớ nghĩ lo lường, như "tư lương tâm";</p>
      <p class="mb-0">6. Tâm: Rõ ràng phân biệt, như "minh liễu phân biệt tâm";</p>
      <p class="mb-0">7. Vọng Tâm: Tâm hư vọng sanh diệt;</p>
      <p class="mb-0">8. Chơn Tâm: Tâm chơn thật, như "bản thể chơn tâm";</p>
      <p class="mb-0">9. Tâm: Toát yếu hay tinh yếu, như chữ "trọng tâm".</p>
    </div>
    
    <p>Tóm lại, chữ "tâm" tùy ở mỗi vị trí mà có rất nhiều nghĩa khác nhau.</p>
    <p>Nhưng chữ “Tâm” ở trong đề mục kinh này, thì nên dùng nghĩa "tinh yếu", "toát yếu" hay "trọng tâm" mới là chính xác. Vì Phật nói kinh Đại Bát Nhã đến 600 quyển, trải qua thời gian 22 năm mới rồi (nhị thập nhị niên Bát Nhã đàm); kinh này (chỉ có 260 chữ) là trọng tâm hoặc toát yếu hay tinh yếu của kinh Đại Bát Nhã, nên gọi là "Ma Ha Bát Nhã Ba La Mật Đa tâm kinh".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="giai-nghia-kinh" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">KINH</h3>
    </div>
    <p>Kinh điển hay giáo lý, do Phật hoặc Bồ Tát nói ra. Chữ "kinh" có nhiều nghĩa, nhưng tóm lại có ba nghĩa như sau:</p>
    <div class="pl-6 space-y-3 my-4">
      <p class="mb-0"><strong>1. Thường:</strong> Không thay đổi. Chơn lý của Phật không thay đổi, dù Phật quá khứ, hiện tại, vị lai cũng đều nói chơn lý như vậy.</p>
      <p class="mb-0"><strong>2. Đường canh:</strong> Đường chỉ xuôi trong tấm vải. Nhờ sợi chỉ xuôi, xâu kết các sợi chỉ ngang, để làm thành một tấm vải. Còn Kinh là sự tổng hợp ghi chép các lời nói của Phật hoặc Thánh hiền.</p>
      <p class="mb-0"><strong>3. Hợp (khế):</strong> Kinh Phật hợp với "chơn lý của vũ trụ" và hợp với "căn cơ trình độ của chúng sanh". Cũng một bộ kinh, mà tùy theo trình độ của mỗi người sẽ hiểu cao, người hiểu thấp. Tuy sự hiểu ngộ cao thấp không đồng, nhưng y theo kinh tu hành, đều được khỏi khổ sanh tử luân hồi, không sót một người nào. Kinh Phật có những đặc điểm như vậy, nên gọi là "khế kinh".</p>
    </div>

    <p class="font-semibold">Tóm lại, "Ma Ha Bát Nhã Ba La Mật Đa tâm kinh" là "Kinh toát yếu kinh Đại Bát Nhã".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="danh-tuong-the-dung" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">NÓI VỀ DANH, TƯỚNG, THỂ, DỤNG VÀ TÔN CHỈ CỦA KINH NÀY</h3>
    </div>
    <div class="pl-6 space-y-2 my-4">
      <p class="mb-0"><strong>Danh:</strong> Tên kinh này dùng pháp "Bát Nhã" làm tên</p>
      <p class="mb-0"><strong>Tướng:</strong> Kinh này lấy "Đại thừa" làm giáo tướng.</p>
      <p class="mb-0"><strong>Thể:</strong> Kinh này lấy "Thật tướng" làm thể</p>
      <p class="mb-0"><strong>Dụng:</strong> Kinh này lấy "độ thoát khổ ách" làm dụng</p>
      <p class="mb-0"><strong>Tôn chỉ:</strong> Kinh này lấy "quán chiếu" làm tôn chỉ</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="tam-tang-phap-su-huyen-trang" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">TAM TẠNG PHÁP SƯ HUYỀN TRANG</h3>
    </div>
    <p>Tên của dịch giả: Ngài Tam Tạng Pháp sư Huyền Trang.</p>
    <p><strong>TAM TẠNG PHÁP SƯ:</strong> Tam tạng là ba kho tàng; vì có công năng trùm chứa văn nghĩa của Phật pháp, nên gọi là "Tạng".</p>
    <div class="pl-6 space-y-2 my-4">
      <p class="mb-0">1. Kinh tạng chép những lời Phật dạy hay những lời của các vị Bồ Tát nói ra.</p>
      <p class="mb-0">2. Luật tạng chép những giới và luật của 7 chúng (Tỳ kheo, Tỳ kheo Ni, Sa Di, Sa Di Ni, Thức xoa và Ưu bà tắc, Ưu bà di)</p>
      <p class="mb-0">3. Luận tạng chép những nghị luận chánh tà, phân biệt chơn vọng của các vị Bồ Tát và chư Tổ.</p>
    </div>

    <p>Thầy giảng Kinh thì gọi là "Pháp sư"<br>Thầy giảng Luật thì gọi là "Luật sư"<br>Thầy giảng Luận thì gọi là "Luận sư"</p>
    <p>Ngài Huyền Trang thông suốt cả ba tạng và giảng dạy cả Kinh, Luật, Luận nên gọi Ngài là "Tam Tạng Pháp sư" (vị Pháp sư thông suốt ba tạng).</p>

    <p><strong>HUYỀN TRANG:</strong> Ngài họ Trần tên Vĩ ở đất Yển Sư, tỉnh Lạc Dương. Ngài rất thông minh, xuất gia khi 13 tuổi, học đủ kinh điển. Đến năm Trinh Quán thứ ba, Ngài phát tâm qua Ấn Độ học Phật pháp đến 15 năm, rất thông về "pháp tướng Duy thức học". Ngài học được 657 bộ kinh. Đến năm Trinh Quán thứ 19, Ngài về Trung Hoa. Vua Đường Thái Tông rất mừng, thỉnh Ngài ở lại chùa Hoằng Phúc dịch kinh. Ngài dịch được 75 bộ, cộng là 1335 quyển. Ngài hưởng thọ 75 tuổi. Vua Cao Tông dựng tháp Ngài theo kiểu Ấn Độ tại chùa Từ Ân, công đức của Ngài thật là vô tận.</p>
    <p>Kinh này có năm nhà dịch từ chữ Phạn ra chữ Trung Hoa, nhưng bản dịch của Ngài Huyền Trang truyền bá được thịnh hành hơn hết.</p>

  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong đề mục 'Ma Ha Bát Nhã Ba La Mật Đa tâm kinh', từ 'MA HA' mang những ý nghĩa nào sau đây theo bản lược giải?",
    options: {
      a: "Đại (lớn), Đa (nhiều) và Thắng (hơn).",
      b: "Vô lượng, Vô biên và Vô tận.",
      c: "Thanh tịnh, Giải thoát và Tự tại.",
      d: "Sáng suốt, Thông đạt và Minh bạch.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Trung Hoa dịch âm chữ Phạn Maha, dịch nghĩa là Đại (lớn), Đa (nhiều) và Thắng (hơn).'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao các dịch giả thường giữ nguyên âm chữ Phạn cho từ 'Bát Nhã' thay vì chỉ dùng một nghĩa tiếng Việt duy nhất?",
    options: {
      a: "Vì đây là tên riêng của một vị Bồ Tát.",
      b: "Vì luật lệ dịch thuật kinh điển không cho phép dịch từ này.",
      c: "Vì từ này có nhiều nghĩa sâu xa, dùng một nghĩa sẽ không lột tả hết.",
      d: "Vì âm thanh của từ 'Bát Nhã' có năng lực thần chú.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Bát Nhã có nhiều nghĩa sâu xa... nếu lấy một nghĩa thì không được đúng lắm, nên các dịch giả chỉ để nguyên âm chữ Phạn.'",
      d: "Sai.",
    },
  },
  {
    question: "Loại trí huệ nào sau đây được văn bản xác định là 'Trí huệ Bát Nhã'?",
    options: {
      a: "Trí huệ thế gian của những người học rộng thấy xa.",
      b: "Trí huệ của hàng Thinh văn và Duyên giác.",
      c: "Trí huệ của Phật hay của Đại thừa Bồ Tát.",
      d: "Trí huệ ngoại đạo có được nhờ tu tập thiền định lâu ngày.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Lược giải nêu rõ phải loại trừ Trí huệ thế gian, Trí huệ ngoại đạo, Trí huệ Nhị thừa. 'Trừ ba loại Trí huệ trên, duy có Trí huệ của Phật hay của Đại thừa Bồ Tát, mới phải là Trí huệ Bát Nhã.'",
      d: "Sai.",
    },
  },
  {
    question: "Đặc điểm nào sau đây mô tả đúng về bản chất của Trí huệ Bát Nhã trong mỗi chúng sanh?",
    options: {
      a: "Cần phải được tích lũy dần dần qua nhiều kiếp mới có được.",
      b: "Sẵn có từ vô thỉ, không tăng khi thành thánh, không giảm khi là phàm.",
      c: "Sẽ mất đi nếu chúng sanh rơi vào vòng vô minh phiền não.",
      d: "Do tu hành tinh tấn và nhờ các duyên bên ngoài luyện tập mà thành.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Trí huệ Bát Nhã sẵn có trong mỗi chúng sanh từ vô thỉ đến nay... Dù ở địa vị phàm phu, nó cũng không giảm, dù chứng quả thánh, nó cũng không tăng.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Giai đoạn nào trong ba loại Bát Nhã yêu cầu hành giả phải quán sát chiếu soi các pháp đều 'không'?",
    options: {
      a: "Quán chiếu Bát Nhã.",
      b: "Thật tướng Bát Nhã.",
      c: "Gia hạnh Bát Nhã.",
      d: "Văn tự Bát Nhã.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Quán chiếu Bát Nhã: Tức là tu Bát Nhã. Sau khi đã ngộ được Lý tánh Bát Nhã, hành giả phải tu tập; nghĩa là quán sát chiếu soi các pháp đều không.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Cụm từ 'BA LA MẬT ĐA' (Paramita) có hai nghĩa chính là gì?",
    options: {
      a: "Vượt qua khổ ải và Đắc quả vị Thánh.",
      b: "Đáo bỉ ngạn (đến bờ bên kia) và Cứu cánh viên mãn.",
      c: "Quay về nguồn cội và Thấu hiểu chơn lý.",
      d: "Trí huệ vô biên và Từ bi hỷ xả.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Lược giải giải thích hai nghĩa: '1. Đáo bỉ ngạn: đến bờ bên kia... 2. Cứu cánh viên mãn: hoàn toàn rốt ráo.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Chữ 'TÂM' trong tiêu đề 'Tâm Kinh' nên được hiểu theo nghĩa nào là chính xác nhất?",
    options: {
      a: "Sự ghi nhớ và lo lường (tư lương tâm).",
      b: "Vọng tâm (tâm hư vọng sanh diệt).",
      c: "Quả tim (cơ quan trong cơ thể).",
      d: "Tinh yếu, toát yếu hay trọng tâm.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Nhưng chữ Tâm ở trong đề mục kinh này, thì nên dùng nghĩa tinh yếu, toát yếu hay trọng tâm mới là chính xác... kinh này là trọng tâm hoặc toát yếu hay tinh yếu của kinh Đại Bát Nhã.'",
    },
  },
  {
    question: "Nghĩa 'Khế' (Hợp) của chữ Kinh được giải thích như thế nào?",
    options: {
      a: "Hợp giữa lời nói và việc làm của Phật.",
      b: "Hợp giữa các tông phái khác nhau trong Phật giáo.",
      c: "Hợp với chơn lý vũ trụ và hợp với căn cơ của chúng sanh.",
      d: "Hợp giữa quá khứ, hiện tại và vị lai.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Kinh Phật hợp với chơn lý của vũ trụ và hợp với căn cơ trình độ của chúng sanh... Kinh Phật có những đặc điểm như vậy, nên gọi là khế kinh.'",
      d: "Sai.",
    },
  },
  {
    question: "Theo văn bản, ngài Huyền Trang được gọi là 'Tam Tạng Pháp sư' vì lý do gì?",
    options: {
      a: "Vì ngài được vua Đường Thái Tông sắc phong danh hiệu đó.",
      b: "Vì ngài đã dành 15 năm để học tập tại Ấn Độ.",
      c: "Vì ngài thông suốt cả ba tạng: Kinh, Luật và Luận.",
      d: "Vì ngài đã dịch được 1335 quyển kinh.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Ngài Huyền Trang thông suốt cả ba tạng và giảng dạy cả Kinh, Luật, Luận nên gọi Ngài là Tam Tạng Pháp sư (vị Pháp sư thông suốt ba tạng).'",
      d: "Sai.",
    },
  },
  {
    question: "Trong cấu trúc của Tâm Kinh, phần 'Dụng' (công năng) được xác định là gì?",
    options: {
      a: "Quán chiếu.",
      b: "Độ thoát khổ ách.",
      c: "Đại thừa.",
      d: "Thật tướng.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là Tôn chỉ.",
      b: "Đúng. 'Dụng: Kinh này lấy độ thoát khổ ách làm dụng'.",
      c: "Sai. Đây là Tướng.",
      d: "Sai. Đây là Thể.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-phan-dai-bat-nha-toat-yeu',
  slug: 'phan-dai-bat-nha-toat-yeu',
  title: 'Phần Đại Bát Nhã toát yếu',
  type: 'article',
  status: 'published',
  order: 19,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/phan-dai-bat-nha-toat-yeu/Gi%E1%BA%A3i_M%C3%A3_T%C3%A2m_Kinh.png',
      readingContent,
      tableOfContents: [
        { id: 'luoc-giai-tieu-de', label: 'Lược Giải Tiêu Đề Kinh' },
        { id: 'giai-nghia-ma-ha', label: 'MA HA', indent: 1 },
        { id: 'giai-nghia-bat-nha', label: 'BÁT NHÃ', indent: 1 },
        { id: 'giai-nghia-ba-la-mat-da', label: 'BA LA MẬT ĐA', indent: 1 },
        { id: 'giai-nghia-tam', label: 'TÂM', indent: 1 },
        { id: 'giai-nghia-kinh', label: 'KINH', indent: 1 },
        { id: 'danh-tuong-the-dung', label: 'Nói về Danh, Tướng, Thể, Dụng và Tôn chỉ của Kinh', indent: 1 },
        { id: 'tam-tang-phap-su-huyen-trang', label: 'Tam Tạng Pháp sư Huyền Trang', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/phan-dai-bat-nha-toat-yeu/Heart_Sutra_Essence.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/VPMEjmUuTtk',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6HsK6GmC5i1YdHKx3gFyYy',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Đại Bát Nhã Toát Yếu',
    passPercentage: 70,
    questions,
  },
}

export default lesson