import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-ba-tam-vuong" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ BA - I. TÂM VƯƠNG (CÓ TÁM MÓN)</h2>
      <p class="mb-0">Tám món tâm này rất thù thắng, tự tại và tự chủ; cũng như vị Quốc vương, nên gọi là Tâm vương (nhứt thế tối thắng cố).</p>
    </div>

    <h3 id="nam-thuc-truoc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Năm thức trước (Tiền ngũ thức)</h3>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Nhãn thức:</strong> Cái biết của con mắt. Vì thức này nương Nhãn căn, khởi ra tác dụng phân biệt về sắc trần, nên gọi là "Nhãn thức".</li>
      <li><strong>Nhĩ thức:</strong> Cái biết của lỗ tai. Vì thức này nương Nhĩ căn, khởi ra tác dụng phân biệt về thinh trần, nên gọi là "Nhĩ thức".</li>
      <li><strong>Tỹ thức:</strong> Cái biết của mũi. Vì thức này nương Tỹ căn, khởi ra tác dụng phân biệt về hương trần, nên gọi là "Tỹ thức".</li>
      <li><strong>Thiệt thức:</strong> Cái biết của lưỡi. Vì thức này nương Thiệt căn, khởi ra tác dụng phân biệt về vị trần, nên gọi là "Thiệt thức".</li>
      <li><strong>Thân thức:</strong> Cái biết của thân. Vì thức này nương Thân căn, khởi ra tác dụng phân biệt về xúc trần, nên gọi là "Thân thức".</li>
    </ul>
    <p>Trong 8 thức Tâm vương, vì 5 thức này ở bên ngoài và trước, nên cũng gọi là "Tiền ngũ thức" (năm thức trước).</p>

    <h3 id="khi-o-dia-vi-pham-phu" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Khi ở địa vị phàm phu, năm thức này đối với</h3>

    <h4 id="ba-canh-ba-luong-ba-tanh" class="text-lg font-semibold">Ba cảnh, ba lượng và ba tánh</h4>
    <div class="space-y-3">
      <p><strong>Ba cảnh:</strong> Năm thức này chỉ có "Tánh cảnh".</p>
      <p><strong>Ba lượng:</strong> Năm thức này chỉ có "Hiện lượng".</p>
      <p><strong>Ba tánh:</strong> Năm thức này có đủ 3 tánh: Thiện, Ác và Vô ký.</p>
    </div>

    <h4 id="nam-tho-ba-coi-chin-dia" class="text-lg font-semibold">Năm thọ, ba cõi và chín địa</h4>
    <div class="space-y-3">
      <p><strong>Năm thọ:</strong> Năm thức này chỉ có 3 thọ: Khổ, Lạc và Xả thọ.</p>
      <p><strong>Ba cõi:</strong> Ở cõi Dục thì năm thức này đủ cả, đến cõi Sắc chỉ còn thức: Nhãn, Nhĩ và Thân; vì hai thức Tỹ và Thiệt không hiện hành (Nhãn, Nhĩ, Thân tam Nhị địa cư).</p>
      <p><strong>Chín địa:</strong> Năm thức này chỉ ở trong hai địa: 1. Ngũ thú tạp cư địa, tức là cõi Dục thuộc về Sơ địa. 2. Ly sanh hỷ lạc địa, ở cõi Sắc, thuộc Sơ thiền gọi là Nhị địa.</p>
    </div>

    <h4 id="tam-so-duyen-the-tuong-nghiep-dung" class="text-lg font-semibold">Tâm sở, duyên, thể, tướng và nghiệp dụng</h4>
    <div class="space-y-3">
      <p><strong>Năm mươi mốt Tâm sở:</strong> Năm thức này chỉ tương ưng 34 tâm sở: 5 món biến hành, 5 món biệt cảnh, 11 món Thiện, 3 món Căn bản phiền não, 2 món Trung tùy và 8 món Đại tùy.</p>
      <p><strong>Chín duyên:</strong> Nhãn thức đủ 9 duyên, Nhĩ thức chỉ còn 8 duyên (thiếu Minh), 3 thức Tỹ, Thiệt và Thân chỉ có 7 duyên (thiếu Minh và Không).</p>
      <p><strong>Thể:</strong> Thể của 5 thức này, chỉ có Tự tánh phân biệt, không có Tùy niệm phân biệt và Kế đạt phân biệt.</p>
      <p><strong>Tướng:</strong> Thức với căn khó phân (ngu giả nan phân thức dữ căn).</p>
      <p><strong>Nghiệp dụng:</strong> Duyên trần cảnh. Song 2 thức: Nhãn và Nhĩ phải cách trần cảnh mới phân biệt được. Còn 3 thức: Tỹ, Thiệt và Thân phải hiệp với trần cảnh mới phân biệt được.</p>
    </div>

    <h3 id="khi-len-thanh-vi" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Khi lên Thánh vị, năm thức này đối với</h3>

    <h4 id="quan-hanh-tu" class="text-lg font-semibold">Quán hạnh (tu)</h4>
    <p>Khi lên Thánh vị, thì 5 thức này chuyển thành "Hậu đắc trí", và biến ra cái Tướng phần của 2 món chơn như (Sanh không chơn như và Pháp không chơn như) mà quán (duyên).</p>

    <h4 id="doan-hoac-va-chuyen-thanh-tri" class="text-lg font-semibold">Đoạn hoặc và chuyển thành trí</h4>
    <p>Khi thức thứ 8 đã chuyển thành "Đại viên cảnh trí", thì các căn được vô lậu; lúc bấy giờ 5 thức này cũng được vô lậu và chuyển làm "Thành sở tác trí".</p>

    <h4 id="chung-qua-va-dieu-dung" class="text-lg font-semibold">Chứng quả và diệu dụng</h4>
    <p>Khi chứng quả vị Phật thì 5 thức này chuyển làm "Thành sở tác trí". Lúc bấy giờ nó có công dụng hóa hiện ra 3 loại thân để giáo hóa và dứt trừ các khổ sanh tử luân hồi cho chúng sanh.</p>

    <h3 id="ba-loai-than" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Ba loại thân</h3>
    <ol class="list-decimal space-y-3 pl-6">
      <li><strong>Thân Đại hóa:</strong> Tức là Thắng ứng thân. Thân này cao 1.000 trượng, để giáo hóa hàng Đại thừa Bồ Tát.</li>
      <li><strong>Thân Tiểu hóa:</strong> Tức là Liệt ứng thân. Thân này cao một trượng sáu thước, để giáo hóa hàng Tam hiền Bồ Tát cùng Nhị thừa và phàm phu.</li>
      <li><strong>Thân Tùy loại hóa:</strong> Thân này tùy theo loại chúng sanh mà hóa hiện.</li>
    </ol>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-0">Vì muốn cho người học dễ nhớ, nên trong Bát Thức Quy Củ, Ngài Huyền Trang Pháp sư có làm ba bài tụng tóm tắt lại 5 thức như sau. Hai bài tụng đầu là nói 5 thức này khi còn ở địa vị phàm phu, bài tụng thứ 3 là nói khi lên Thánh vị.</p>
    </div>

    <h3 id="ba-bai-tung-tom-tat-tien-ngu-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Ba bài tụng tóm tắt tiền ngũ thức</h3>

    <h4 id="bai-tung-thu-nhat" class="text-lg font-semibold">Bài tụng thứ nhứt</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Tánh cảnh, Hiện lượng, thông tam Tánh</p>
        <p>Nhãn, Nhĩ, Thân tam Nhị địa cư</p>
        <p>Biến hành, Biệt cảnh, Thiện thập nhứt</p>
        <p>Trung nhị, Đại bát, Tham, Sân, Si</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-nhat" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Tánh cảnh, Hiện lượng, thông ba Tánh</p>
      <p>Nhãn, Nhĩ, Thân ba ở Nhị địa</p>
      <p>Biến hành, Biệt cảnh, Thiện mười một</p>
      <p>Trung hai, Đại tám, Tham, Sân, Si</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-nhat" class="text-base font-semibold">Lược giải</h5>
    <p>Trong 3 Cảnh thì 5 thức này chỉ có "Tánh cảnh"; trong 3 lượng nó chỉ có "Hiện lượng"; còn 3 Tánh thì nó đủ cả Thiện, Ác và Vô ký.</p>
    <p>Ở cõi Dục là Sơ địa, thì đủ cả 5 thức. Lên cõi Sắc về Nhị địa, thì chỉ còn 3 thức là: Nhãn, Nhĩ và Thân.</p>
    <p>Nói về Tâm sở, thì 5 thức này tương ưng với 34 món: 5 món Biến hành, 5 món Biệt cảnh, 11 món Thiện, 2 món Trung tùy, 8 món Đại tùy và 3 món Căn bản phiền não là: Tham, Sân, Si.</p>

    <h4 id="bai-tung-thu-hai" class="mt-8 text-lg font-semibold">Bài tụng thứ hai</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Ngũ thức đồng y Tịnh sắc căn</p>
        <p>Cửu duyên, bát, thất hảo tương lân</p>
        <p>Hiệp tam, ly nhị, quán trần thế</p>
        <p>Ngu giả nan phân thức dữ căn</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-hai" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Năm thức đồng nương Tịnh sắc căn</p>
      <p>Chín, tám, bảy duyên ưa gần nhau</p>
      <p>Ba hiệp, hai rời, duyên trần cảnh</p>
      <p>Ngu giả khó phân Thức và Căn</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-hai" class="text-base font-semibold">Lược giải</h5>
    <p>Căn, có 2 loại: 1. Phù trần căn: Căn thô phù bên ngoài. 2. Tịnh sắc căn: Căn thanh tịnh tinh tế ở bên trong; cũng gọi là "Thắng nghĩa căn", vì căn này rất thù thắng.</p>
    <p>Năm thức đều nương 5 căn Tịnh sắc và nhờ có các duyên mới sanh ra được. Như Nhãn thức nhờ 9 duyên, Nhĩ thức chỉ còn 8 duyên, Tỹ, Thiệt và Thân mỗi thức chỉ có 7 duyên.</p>
    <p>Ba thức: Tỹ, Thiệt và Thân phải hiệp với trần cảnh mới duyên được; còn 2 thức là Nhãn và Nhĩ phải cách hở trần cảnh mới duyên được.</p>
    <p>Chúng phàm phu và hàng Nhị thừa vì chấp pháp nặng nề, nên khó phân biệt cái nào là Thức và cái nào là Căn. Vì thế, mà cả hai đều bị gọi là "Ngu giả".</p>

    <h4 id="bai-tung-thu-ba" class="mt-8 text-lg font-semibold">Bài tụng thứ ba</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Biến tướng quán không duy hậu đắc</p>
        <p>Quả trung du tự bất thuyên chơn</p>
        <p>Viên minh sơ phát thành Vô lậu</p>
        <p>Tam loại phân thân tức khổ luân.</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-ba" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Trí Hậu đắc biến tướng không, quán (duyên)</p>
      <p>Khi chứng quả còn chẳng nói chơn</p>
      <p>Viên minh vừa phát thành Vô lậu</p>
      <p>Phân thân ba loại, dứt khổ luân</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-ba" class="text-base font-semibold">Lược giải</h5>
    <p>Năm thức này không có "Căn bản trí" mà chỉ có "Hậu đắc trí". Khi duyên chơn như thì nó chỉ biến lại tướng phần của hai món chơn như (Sanh không chơn như và Pháp không chơn như) mà duyên, chớ không thể trực tiếp thân duyên được; vì nó không có "Căn bản trí" nên không thể thân duyên.</p>
    <p>Khi chứng được Thánh quả, cũng không thể nói "Năm thức này thân duyên được chơn như", huống chi là trong lúc tu nhơn.</p>
    <p>Đến khi thức thứ Tám vừa chuyển thành Đại viên cảnh trí (viên minh sơ phát) thì 5 thức này thành Vô lậu. Lúc bấy giờ, 5 thức này có công dụng hiện ra ba loại thân để hóa độ và dứt trừ các khổ sanh tử luân hồi cho chúng sanh.</p>
    <p>Câu "Biến tướng không quán": Biến lại tướng chơn như mà duyên. Chữ "Tướng không" là tướng Ngã không và Pháp không tức là Chơn như (nhị không chơn như). Chữ "Quán" là duyên. Nghĩa là: Trí Hậu đắc này chỉ biến lại tướng chơn như mà duyên.</p>
    <p>Chữ "Nói Chơn": Nghĩa là nói thân duyên Chơn như.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Tại sao tám món tâm (từ thức thứ nhất đến thức thứ tám) lại được gọi là \"Tâm vương\"?",
    "options": {
      "a": "Vì chúng chỉ tồn tại ở những bậc Thánh giả đã đạt được giải thoát.",
      "b": "Vì chúng thù thắng, tự tại và tự chủ đối với các tâm sở khác.",
      "c": "Vì chúng là những thức xuất hiện đầu tiên trong quá trình nhận thức.",
      "d": "Vì chúng có khả năng bao quát toàn bộ vũ trụ và vạn vật."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Tài liệu không đề cập đến việc Tâm vương chỉ tồn tại ở bậc Thánh giả [1].",
      "b": "Đúng. Tám món tâm này rất thù thắng, tự tại và tự chủ, giống như vị Quốc vương kiểm soát các thứ khác nên gọi là Tâm vương [1].",
      "c": "Sai. Tài liệu không giải thích nguồn gốc tên gọi dựa trên thứ tự xuất hiện nhận thức [1].",
      "d": "Sai. Sự bao quát vạn vật không phải là lý do tám món tâm này được gọi là Tâm vương [1]."
    }
  },
  {
    "question": "Trong ba cảnh (Tánh cảnh, Độc ảnh cảnh, Đới chất cảnh), tiền ngũ thức ở địa vị phàm phu chỉ có cảnh nào?",
    "options": {
      "a": "Độc ảnh cảnh",
      "b": "Tánh cảnh",
      "c": "Cả ba cảnh trên",
      "d": "Đới chất cảnh"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Tiền ngũ thức không duyên với Độc ảnh cảnh [2, 3].",
      "b": "Đúng. Khi ở địa vị phàm phu, đối với ba cảnh thì năm thức này chỉ có Tánh cảnh [2, 3].",
      "c": "Sai. Tiền ngũ thức không duyên đủ cả ba cảnh [2, 3].",
      "d": "Sai. Tiền ngũ thức không duyên với Đới chất cảnh [2, 3]."
    }
  },
  {
    "question": "Ở cõi Sắc (Sắc giới), những thức nào trong tiền ngũ thức không còn hiện hành?",
    "options": {
      "a": "Thân thức và Tỹ thức",
      "b": "Tỹ thức và Thiệt thức",
      "c": "Nhãn thức và Nhĩ thức",
      "d": "Cả năm thức đều hiện hành"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Thân thức vẫn còn hiện hành ở cõi Sắc [2].",
      "b": "Đúng. Khi đến cõi Sắc (Nhị địa) thì chỉ còn Nhãn, Nhĩ, Thân thức hoạt động; hai thức Tỹ và Thiệt không hiện hành [2, 3].",
      "c": "Sai. Nhãn thức và Nhĩ thức vẫn tiếp tục hiện hành ở cõi Sắc [2].",
      "d": "Sai. Không phải cả năm thức đều hiện hành vì Tỹ và Thiệt thức đã ngừng [2, 3]."
    }
  },
  {
    "question": "Tiền ngũ thức tương ưng với bao nhiêu món Tâm sở?",
    "options": {
      "a": "51 món",
      "b": "10 món",
      "c": "34 món",
      "d": "21 món"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Tiền ngũ thức không tương ưng đủ 51 món tâm sở [2].",
      "b": "Sai. Số lượng tâm sở tương ưng nhiều hơn 10 món [2].",
      "c": "Đúng. Năm thức này chỉ tương ưng 34 tâm sở gồm: 5 biến hành, 5 biệt cảnh, 11 thiện, 3 căn bản phiền não, 2 trung tùy và 8 đại tùy [2, 3].",
      "d": "Sai. Số lượng tâm sở tương ưng không phải là 21 món [2]."
    }
  },
  {
    "question": "Sự khác biệt về điều kiện hoạt động giữa (Nhãn, Nhĩ thức) và (Tỹ, Thiệt, Thân thức) là gì?",
    "options": {
      "a": "Cả năm thức đều phải hiệp với trần cảnh mới phân biệt được.",
      "b": "Nhãn, Nhĩ cần ly trần; Tỹ, Thiệt, Thân cần hiệp với trần.",
      "c": "Nhãn, Nhĩ cần hiệp với trần; Tỹ, Thiệt, Thân cần ly trần.",
      "d": "Cả năm thức đều phải cách hở trần cảnh mới phân biệt được."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Nhãn thức và Nhĩ thức không thể hiệp trần [2, 4].",
      "b": "Đúng. Về nghiệp dụng, hai thức Nhãn và Nhĩ phải cách hở trần cảnh (ly trần) mới duyên được; còn ba thức Tỹ, Thiệt và Thân phải hiệp với trần cảnh mới phân biệt được [2, 4].",
      "c": "Sai. Trật tự bị ngược, Nhãn/Nhĩ cần ly trần chứ không phải hiệp trần [2, 4].",
      "d": "Sai. Tỹ, Thiệt, Thân thức phải hiệp trần chứ không thể cách hở [2, 4]."
    }
  },
  {
    "question": "Nhãn thức cần bao nhiêu duyên để phát sinh cái biết?",
    "options": {
      "a": "5 duyên",
      "b": "7 duyên",
      "c": "8 duyên",
      "d": "9 duyên"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Số duyên cần thiết nhiều hơn 5 [2].",
      "b": "Sai. 7 duyên là số duyên cần cho Tỹ, Thiệt và Thân thức [2, 4].",
      "c": "Sai. 8 duyên là số duyên cần cho Nhĩ thức [2, 4].",
      "d": "Đúng. Nhãn thức nhờ đủ 9 duyên mới sanh ra được [2, 4]."
    }
  },
  {
    "question": "Tại sao nói tiền ngũ thức đối với phàm phu là \"Ngu giả nan phân thức dữ căn\"?",
    "options": {
      "a": "Vì năm thức này không có khả năng phân biệt đối tượng.",
      "b": "Vì người phàm phu khó phân biệt được cái nào là Thức (năng duyên) và cái nào là Căn (sở y).",
      "c": "Vì Căn và Thức có hình dáng hoàn toàn giống hệt nhau.",
      "d": "Vì thức và căn luôn tồn tại tách biệt hoàn toàn."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Năm thức vẫn có khả năng phân biệt đối tượng tương ứng (sắc, thinh, hương...) [1].",
      "b": "Đúng. Chúng phàm phu và hàng Nhị thừa vì chấp pháp nặng nề nên khó phân biệt được cái nào là Thức và cái nào là Căn, nên bị gọi là Ngu giả [4].",
      "c": "Sai. Tài liệu không đề cập đến việc hình dáng căn và thức giống hệt nhau [4].",
      "d": "Sai. Thức phải nương vào Căn để phát sinh tác dụng, không tồn tại tách biệt hoàn toàn [1, 4]."
    }
  },
  {
    "question": "Khi chứng quả vị Phật, tiền ngũ thức chuyển hóa thành loại trí tuệ nào?",
    "options": {
      "a": "Thành sở tác trí",
      "b": "Đại viên cảnh trí",
      "c": "Bình đẳng tánh trí",
      "d": "Diệu quan sát trí"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Khi chứng quả vị Phật, 5 thức này chuyển làm Thành sở tác trí [5].",
      "b": "Sai. Đại viên cảnh trí là do thức thứ 8 chuyển thành [5].",
      "c": "Sai. Tiền ngũ thức không chuyển thành Bình đẳng tánh trí [5].",
      "d": "Sai. Tiền ngũ thức không chuyển thành Diệu quan sát trí [5]."
    }
  },
  {
    "question": "Thân \"Thắng ứng thân\" (Thân Đại hóa) có đặc điểm gì về chiều cao và đối tượng giáo hóa?",
    "options": {
      "a": "Cao vô hạn, không thể đo lường bằng con số.",
      "b": "Cao 1.000 trượng, giáo hóa hàng Đại thừa Bồ Tát.",
      "c": "Cao một trượng sáu thước, giáo hóa hàng Nhị thừa.",
      "d": "Tùy theo loại chúng sanh mà hóa hiện hình dáng."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Chiều cao của Thân Đại hóa được xác định cụ thể là 1.000 trượng [6].",
      "b": "Đúng. Thân Đại hóa tức Thắng ứng thân cao 1.000 trượng, để giáo hóa hàng Đại thừa Bồ Tát [6].",
      "c": "Sai. Đây là đặc điểm của Thân Tiểu hóa (Liệt ứng thân) [6].",
      "d": "Sai. Đây là đặc điểm của Thân Tùy loại hóa [6]."
    }
  },
  {
    "question": "Tại sao tiền ngũ thức không thể trực tiếp duyên (thân duyên) được Chơn như?",
    "options": {
      "a": "Vì chúng chỉ có Hậu đắc trí mà không có Căn bản trí.",
      "b": "Vì năm thức này luôn bị ô nhiễm bởi các phiền não thô nặng.",
      "c": "Vì Chơn như là đối tượng chỉ dành cho thức thứ tám.",
      "d": "Vì Chơn như không có hình sắc để mắt và tai có thể nhận biết."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Năm thức này không có Căn bản trí mà chỉ có Hậu đắc trí, nên không thể trực tiếp thân duyên được chơn như mà chỉ biến lại tướng phần để duyên [7].",
      "b": "Sai. Lý do cốt lõi là do thiếu Căn bản trí chứ không phải do ô nhiễm phiền não [7].",
      "c": "Sai. Tài liệu không nói Chơn như chỉ dành cho thức thứ tám duyên [7].",
      "d": "Sai. Lý do thuộc về loại trí tuệ (Hậu đắc trí/Căn bản trí) chứ không phải do hình sắc của Chơn như [7]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-3-tam-vuong',
  slug: 'bai-thu-3-tam-vuong',
  title: 'Bài Thứ 3 - I. Tâm vương',
  type: 'article',
  status: 'published',
  order: 5,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-30',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-3-duy-thuc-tam-thap-tung/H%C3%A0nh_tr%C3%ACnh_t%E1%BB%AB_th%E1%BB%A9c_%C4%91%E1%BA%BFn_tr%C3%AD.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-ba-tam-vuong', label: 'Bài Thứ Ba - I. Tâm vương (có tám món)' },
        { id: 'nam-thuc-truoc', label: 'Năm thức trước (Tiền ngũ thức)', indent: 1 },
        { id: 'khi-o-dia-vi-pham-phu', label: 'Khi ở địa vị phàm phu', indent: 1 },
        { id: 'ba-canh-ba-luong-ba-tanh', label: 'Ba cảnh, ba lượng và ba tánh', indent: 2 },
        { id: 'nam-tho-ba-coi-chin-dia', label: 'Năm thọ, ba cõi và chín địa', indent: 2 },
        { id: 'tam-so-duyen-the-tuong-nghiep-dung', label: 'Tâm sở, duyên, thể, tướng và nghiệp dụng', indent: 2 },
        { id: 'khi-len-thanh-vi', label: 'Khi lên Thánh vị', indent: 1 },
        { id: 'quan-hanh-tu', label: 'Quán hạnh (tu)', indent: 2 },
        { id: 'doan-hoac-va-chuyen-thanh-tri', label: 'Đoạn hoặc và chuyển thành trí', indent: 2 },
        { id: 'chung-qua-va-dieu-dung', label: 'Chứng quả và diệu dụng', indent: 2 },
        { id: 'ba-loai-than', label: 'Ba loại thân', indent: 1 },
        { id: 'ba-bai-tung-tom-tat-tien-ngu-thuc', label: 'Ba bài tụng tóm tắt tiền ngũ thức', indent: 1 },
        { id: 'bai-tung-thu-nhat', label: 'Bài tụng thứ nhứt', indent: 2 },
        { id: 'dich-nghia-bai-tung-thu-nhat', label: 'Dịch nghĩa', indent: 3 },
        { id: 'luoc-giai-bai-tung-thu-nhat', label: 'Lược giải', indent: 3 },
        { id: 'bai-tung-thu-hai', label: 'Bài tụng thứ hai', indent: 2 },
        { id: 'dich-nghia-bai-tung-thu-hai', label: 'Dịch nghĩa', indent: 3 },
        { id: 'luoc-giai-bai-tung-thu-hai', label: 'Lược giải', indent: 3 },
        { id: 'bai-tung-thu-ba', label: 'Bài tụng thứ ba', indent: 2 },
        { id: 'dich-nghia-bai-tung-thu-ba', label: 'Dịch nghĩa', indent: 3 },
        { id: 'luoc-giai-bai-tung-thu-ba', label: 'Lược giải', indent: 3 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-3-duy-thuc-tam-thap-tung/Chuy%E1%BB%83n_H%C3%B3a_Ti%E1%BB%81n_Ng%C5%A9_Th%E1%BB%A9c.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/lcl7AEm_7Bg',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/1YEQRmPWA3WswQnqi3Rejm?utm_source=generator&si=e12cd555ae7f400f',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Tâm vương',
    passPercentage: 70,
    questions,
  },
}

export default lesson
