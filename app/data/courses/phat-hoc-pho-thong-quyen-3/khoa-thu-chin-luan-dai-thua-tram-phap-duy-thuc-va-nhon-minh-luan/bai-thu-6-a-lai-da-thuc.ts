import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-sau-a-lai-da-thuc" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ SÁU - A LẠI DA THỨC (THỨC THỨ TÁM)</h2>
    </div>

    <h3 id="nhung-ten-goi-cua-a-lai-da-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Những tên gọi của A-lại-da thức</h3>
    <p>Thức này có rất nhiều tên. Khi đọc đến luận "A đà na thức" quý vị sẽ hiểu rõ hơn; ở đây chỉ kể sơ lược một vài tên quan trọng để nắm được ý chính.</p>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Đệ bát thức:</strong> Thức thứ tám. Vì theo thứ đệ: một là nhãn thức, hai là nhĩ thức, cho đến thức thứ tám là thức này, nên gọi là Đệ bát thức.</li>
      <li><strong>A lại da thức:</strong> Tàu dịch là "Tàng thức". Thức này có công năng chứa đựng chủng tử của các pháp. "Thức" là thể, mà "chứa" là dụng. Hiệp cả thể và dụng, nên gọi là "thức chứa" (Tàng thức).</li>
    </ul>

    <h4 id="ba-nghia-cua-tang-thuc" class="text-lg font-semibold">Ba nghĩa của "Tàng thức"</h4>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Năng tàng:</strong> Năng chứa. Thức này có công năng chứa đựng và gìn giữ chủng tử của các pháp.</li>
      <li><strong>Sở tàng:</strong> Bị chứa. Thức này là chỗ để chứa các pháp.</li>
      <li><strong>Ngã ái chấp tàng:</strong> Gọi tắt là "chấp tàng". Thức thứ bảy chấp kiến phần của thức này làm Ta và thường ái luyến.</li>
    </ol>

    <h3 id="khi-o-dia-vi-pham-phu" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Khi ở địa vị phàm phu, thức này đối với</h3>

    <h4 id="ba-canh-ba-luong-ba-tanh-va-ba-tho" class="text-lg font-semibold">Ba cảnh, ba lượng, ba tánh và ba thọ</h4>
    <div class="space-y-3">
      <p><strong>Ba cảnh:</strong> Thức này chỉ duyên về "Vô bản chất tánh cảnh".</p>
      <p><strong>Ba lượng:</strong> Thức này chỉ có "Hiện lượng".</p>
      <p><strong>Ba tánh:</strong> Thức này thuộc về "Vô phú vô ký tánh".</p>
      <p><strong>Ba thọ:</strong> Thức này chỉ có "Xả thọ".</p>
    </div>

    <h4 id="ba-coi-chin-dia-va-tam-so" class="text-lg font-semibold">Ba cõi, chín địa và tâm sở</h4>
    <div class="space-y-3">
      <p><strong>Ba cõi:</strong> Thức này tùy nghiệp lực dẫn sanh trong ba cõi.</p>
      <p><strong>Chín địa:</strong> Trong chín địa đều có thức này.</p>
      <p><strong>Tâm sở:</strong> Thức này chỉ tương ưng với 5 món Biến hành; song trong 5 thọ thì nó chỉ có "Xả thọ".</p>
    </div>

    <h4 id="chin-duyen-the-tuong-va-nghiep-dung" class="text-lg font-semibold">Chín duyên, thể, tướng và nghiệp dụng</h4>
    <div class="space-y-3">
      <p><strong>Chín duyên:</strong> Thức này chỉ có 4 duyên: Căn (Mạt na), Cảnh (căn thân, thế giới và chủng tử), Tác ý và Chủng tử.</p>
      <p><strong>Thể (tánh):</strong> Vơi vơi không cùng (hạo hạo tam tàng bất khả cùng).</p>
      <p><strong>Tướng:</strong> Thức này như vực sâu (uyên thâm thất lãng cảnh vi phong).</p>
      <p><strong>Nghiệp dụng:</strong> Thức này duy trì chủng tử, căn thân, thế giới và làm chỗ để thọ các pháp huân vào.</p>
    </div>

    <h3 id="khi-len-thanh-vi" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Khi lên Thánh vị, thức này đối với</h3>

    <h4 id="quan-hanh" class="text-lg font-semibold">Quán hạnh</h4>
    <p>Không có quán hạnh riêng nơi thức này.</p>

    <h4 id="doan-hoac-va-chuyen-thanh-tri" class="text-lg font-semibold">Đoạn hoặc và chuyển thành trí</h4>
    <div class="space-y-3">
      <p>Khi lên <strong>Bất động địa</strong> (Bát địa), hành giả đoạn được câu sanh ngã chấp; lúc bấy giờ thức này bỏ cái tên "Tàng thức".</p>
      <p>Đến <strong>Kim Cang đạo</strong>, hành giả đoạn hết câu sanh pháp chấp, không còn cảm thọ sanh tử, cho nên cũng không còn tên là "Dị thục thức"; vì đến địa vị này thì các chủng tử hữu lậu đã hết.</p>
      <p>Lúc bấy giờ thức này được gọi là <strong>"Vô cấu thức"</strong>, và chuyển thành <strong>Đại viên cảnh trí</strong>.</p>
    </div>

    <h4 id="chung-qua-va-dieu-dung" class="text-lg font-semibold">Chứng quả và diệu dụng</h4>
    <p>Vì thức này đã thành Đại viên cảnh trí, nên chiếu khắp mười phương các cõi nước nhiều như vi trần, đồng thời hiện ra Báo thân Phật và Hóa thân Phật để độ thoát chúng sanh.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-0">Muốn cho người học dễ nhớ, nên trong Bát thức quy củ, ngài Huyền Trang Pháp sư có làm ba bài tụng để tóm lại các nghĩa trên. Hai bài tụng đầu nói thức này khi còn ở địa vị phàm phu; bài tụng thứ ba nói khi đã lên Thánh quả.</p>
    </div>

    <h3 id="ba-bai-tung-ve-a-lai-da-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Ba bài tụng về A-lại-da thức</h3>

    <h4 id="bai-tung-thu-nhut" class="text-lg font-semibold">Bài tụng thứ nhứt</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Tánh duy vô phú ngũ Biến hành</p>
        <p>Giới, Địa tùy tha nghiệp lực sanh</p>
        <p>Nhị thừa bất liễu nhơn mê chấp</p>
        <p>Do thử năng hưng Luận chủ tranh</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-nhut" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Vô phú tánh và năm Biến hành</p>
      <p>Ba cõi, chín địa tùy nghiệp sanh</p>
      <p>Nhị thừa không rõ sanh mê chấp</p>
      <p>Bởi thế nên chi Luận chủ tranh (cãi)</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-nhut" class="text-base font-semibold">Lược giải</h5>
    <p>Trong ba tánh, thức này thuộc về "Vô phú vô ký tánh". Trong 51 món tâm sở, thức này chỉ tương ưng với 5 món Biến hành; song trong 5 thọ thì nó chỉ có Xả thọ. Tùy theo nghiệp lực kéo dẫn, mà thức này sanh trong ba cõi và chín địa. Hàng Nhị thừa không hiểu, chấp thức này không có. Bởi thế nên Luận chủ dẫn rất nhiều bằng chứng trong các Kinh Luận để tranh luận, chỉ rõ và quyết định phải có thức thứ tám này.</p>

    <h4 id="bai-tung-thu-hai" class="mt-8 text-lg font-semibold">Bài tụng thứ hai</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Hạo hạo tam tàng bất khả cùng</p>
        <p>Uyên thâm thất lãng cảnh vi phong</p>
        <p>Thọ huân trì chủng căn thân khí</p>
        <p>Khứ hậu lai tiên tác chủ ông</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-hai" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Chơi vơi ba tàng không cùng tột</p>
      <p>Vực sâu, bảy sóng, cảnh làm gió</p>
      <p>Chịu huân, trì chủng và thân cảnh</p>
      <p>Đến trước, đi sau làm chủ ông</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-hai" class="text-base font-semibold">Lược giải</h5>
    <p>Ba tàng là Năng tàng, Sở tàng và Ngã ái chấp tàng. Bởi thức này có công năng duy trì các chủng tử, nên gọi là "Năng tàng". Vì thức này là chỗ để chịu cho các pháp hiện hành huân vào, nên gọi là "Sở tàng". Thức thứ bảy chấp kiến phần của thức này làm Ngã, nên gọi là "Ngã ái chấp tàng".</p>
    <p>Thể và dụng của thức này sâu rộng vô cùng; hàng phàm phu và Nhị thừa không thể thấu tột. Chúng hữu tình từ vô thỉ đến nay cũng do thức này mà sanh tử tương tục không cùng tột, nên trong bài tụng nói: "Vơi vơi ba tàng không cùng tột".</p>
    <p>Biển tàng thức rất sâu rộng, gió bốn duyên (căn, cảnh, chủng tử và tác ý) một phen thổi vào thì sóng bảy thức nhấp nhô nổi dậy. Thức này có công năng duy trì chủng tử, căn thân, thế giới và chịu cho các pháp hiện hành huân vào. Thức này làm ông Chủ; vì khi chúng hữu tình chết thì nó đi sau, còn khi đầu sanh thì nó lại đến trước.</p>

    <h5 id="bai-ke-co-nhon-ve-luc-lam-chung" class="text-base font-semibold">Bài kệ cổ nhơn về lúc lâm chung</h5>
    <p>Cổ nhơn có làm bài kệ để tả trạng thái người chết, trong lúc thần thức sắp rời thân xác, để có thể kinh nghiệm biết người chết rồi được thăng lên hay đọa xuống.</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1 italic">
        <p>Đảnh Thánh, nhãn sanh Thiên</p>
        <p>Nhơn tâm, Ngạ quỷ phúc</p>
        <p>Bàng sanh tất cái ly</p>
        <p>Địa ngục khước tâm xuất</p>
      </div>
    </div>
    <div class="space-y-1">
      <p>Thánh đầu, Trời tại mắt</p>
      <p>Người tim, Ngạ quỷ bụng</p>
      <p>Súc sanh hai chân xuống</p>
      <p>Địa ngục bàn chân ra</p>
    </div>

    <h4 id="bai-tung-thu-ba" class="mt-8 text-lg font-semibold">Bài tụng thứ ba</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Bất động địa tiền tài xả tạng</p>
        <p>Kim Cang đạo hậu Dị thục không</p>
        <p>Đại viên vô cấu đồng thời phát</p>
        <p>Phổ chiếu thập phương trần sát trung</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-ba" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Đến Đệ bát địa bỏ tên "Tàng"</p>
      <p>Chứng Kim Cang đạo, không "Dị thục"</p>
      <p>Gương trí không nhơ đồng thời phát</p>
      <p>Khắp chiếu mười phương vô số cõi</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-ba" class="text-base font-semibold">Lược giải</h5>
    <p>Hành giả khi tới Bất động địa, tức là Bát địa trở lên, thì thức này mới xả cái tên "Tàng thức" mà chỉ còn gọi là "Dị thục thức". Khi đến vị Đẳng giác, được Kim Cang đạo, thì thức này không còn gọi tên là "Dị thục" nữa. Vì lúc bấy giờ, các chủng tử hữu lậu cấu nhiễm đã hết, nên thức này được đổi tên là "Vô cấu thức"; chỉ còn thuần chủng tử vô lậu thanh tịnh, nên cũng được gọi là "Bạch tịnh thức".</p>
    <p>Đến Kim Cang đạo, thì thức này được gọi là "Vô cấu" và chuyển thành Đại viên cảnh trí, nên trong bài tụng nói: "Đại viên (trí) vô cấu (thức) đồng thời phát". Trí Đại viên này chiếu khắp cả mười phương thế giới nhiều như số cát sông Hằng; và hiện ra Báo thân Phật và Hóa thân Phật để độ thoát chúng sanh tột đến đời vị lai.</p>

    <h4 id="ba-giai-doan-ten-goi-cua-thuc-thu-tam" class="mt-8 text-lg font-semibold">Tóm lại ba giai đoạn tên gọi của thức thứ tám</h4>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Từ phàm phu cho đến mãn Thất địa, thì gọi thức này là <strong>Tàng thức</strong> (A lại da) hay <strong>Dị thục thức</strong>.</li>
      <li>Từ Bát địa đến Đẳng giác, thì không còn gọi là "Tàng thức" nữa mà chỉ gọi là <strong>Dị thục thức</strong>.</li>
      <li>Đến quả vị Phật, thì tên "Dị thục" cũng không còn, mà chỉ gọi là <strong>Vô cấu thức</strong> hay <strong>Bạch tịnh thức</strong>.</li>
    </ol>

    <h4 id="bai-tho-bat-thuc" class="mt-8 text-lg font-semibold">Bài thơ Bát thức</h4>
    <p>Muốn cho người học dễ nhớ hành tướng và công năng của tám thức tâm vương, nên cổ nhơn có làm bài thơ rằng:</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1 italic">
        <p>Bát cá đệ huynh, nhứt cá si</p>
        <p>Độc hữu nhứt cá tối linh ly</p>
        <p>Ngũ cá môn tiền tố mãi mại</p>
        <p>Nhứt cá gia trung tác chủ y</p>
      </div>
    </div>
    <div class="space-y-1">
      <p>Anh em tám chú một chàng si (thức thứ bảy)</p>
      <p>Duy có ý thức rất linh ly (khôn ngoan)</p>
      <p>Năm người ngoài cửa lo buôn bán (năm thức trước)</p>
      <p>Làm chủ trong nhà Đệ bát y (thức thứ tám)</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Trong ba nghĩa của 'Tàng thức', nghĩa 'Ngã ái chấp tàng' đề cập đến mối quan hệ giữa thức thứ tám và thức nào sau đây?",
    "options": {
      "a": "Năm thức trước (Tiền ngũ thức)",
      "b": "Thức thứ tám (A lại da thức) tự chấp chính mình",
      "c": "Thức thứ bảy (Mạt na thức)",
      "d": "Thức thứ sáu (Ý thức)"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Tài liệu không đề cập năm thức trước có khả năng chấp tàng [1].",
      "b": "Sai. Không phải là thức thứ tám tự chấp lấy nó [1].",
      "c": "Đúng. Nghĩa 'Ngã ái chấp tàng' là do thức thứ bảy chấp kiến phần của thức thứ tám làm Ta và thường ái luyến [1].",
      "d": "Sai. Thức thứ sáu không đóng vai trò chấp tàng trong nghĩa này [1]."
    }
  },
  {
    "question": "Khi ở địa vị phàm phu, thức thứ tám tương ưng với loại 'Thọ' nào trong năm thọ?",
    "options": {
      "a": "Hỷ thọ",
      "b": "Xả thọ",
      "c": "Khổ thọ",
      "d": "Lạc thọ"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Thức này không tương ưng với hỷ thọ [1].",
      "b": "Đúng. Khi ở địa vị phàm phu, trong ba thọ hay năm thọ thì thức thứ tám chỉ tương ưng duy nhất với 'Xả thọ' [1].",
      "c": "Sai. Thức này không cảm thọ sự khổ [1].",
      "d": "Sai. Thức này không cảm thọ sự lạc [1]."
    }
  },
  {
    "question": "Thức thứ tám được gọi là 'Chủ ông' dựa trên đặc điểm hành tướng nào sau đây?",
    "options": {
      "a": "Là thức thông minh và khôn ngoan nhất trong tám thức",
      "b": "Đến trước khi đầu sanh và đi sau cùng khi chết",
      "c": "Điều hành mọi hoạt động mua bán ở 'năm cửa'",
      "d": "Có khả năng tiêu diệt các chủng tử xấu ác"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Ý thức (thức thứ sáu) mới được ví là chàng khôn ngoan nhất [1].",
      "b": "Đúng. Thức này làm ông chủ vì khi chúng hữu tình chết thì nó rời đi sau cùng, còn khi đầu sanh thì nó lại đến trước tiên [1].",
      "c": "Sai. 'Năm cửa' là hình ảnh ẩn dụ cho hoạt động của năm thức trước [1].",
      "d": "Sai. Đặc tính này không dùng để giải thích ý nghĩa 'Chủ ông' của thức thứ tám [1]."
    }
  },
  {
    "question": "Khi hành giả đạt đến địa vị nào thì thức thứ tám bắt đầu bỏ tên gọi là 'Tàng thức'?",
    "options": {
      "a": "Địa vị A la hán của Nhị thừa",
      "b": "Bát địa (Bất động địa)",
      "c": "Đẳng giác địa",
      "d": "Sơ địa (Hoan hỷ địa)"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Tài liệu không nêu việc xả tên 'Tàng thức' ở địa vị A la hán [1].",
      "b": "Đúng. Khi hành giả tới Bất động địa, tức là Bát địa trở lên, thì đoạn được câu sanh ngã chấp nên thức này mới xả cái tên 'Tàng thức' [1].",
      "c": "Sai. Đến vị Đẳng giác (Kim Cang đạo) thì thức này bỏ tên 'Dị thục thức' để chuyển thành 'Vô cấu thức' [1].",
      "d": "Sai. Sơ địa chưa đủ điều kiện để xả tên 'Tàng thức' [1]."
    }
  },
  {
    "question": "Trong hình ảnh 'Uyên thâm thất lãng cảnh vi phong', 'bảy lớp sóng' tượng trưng cho điều gì?",
    "options": {
      "a": "Bảy cảnh giới của loài người",
      "b": "Bảy thức đầu (từ nhãn thức đến mạt na thức)",
      "c": "Bảy loại phiền não căn bản",
      "d": "Bảy giai đoạn của quá trình chết"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Không có liên hệ với các cảnh giới [1].",
      "b": "Đúng. Biển tàng thức rất sâu rộng, khi gió của bốn duyên thổi vào thì sóng của bảy thức nhấp nhô nổi dậy [1].",
      "c": "Sai. Tài liệu không giải thích bảy sóng là phiền não [1].",
      "d": "Sai. Bảy sóng không phải các giai đoạn của sự chết [1]."
    }
  },
  {
    "question": "Thức thứ tám tương ưng với bao nhiêu món tâm sở trong số 51 món tâm sở?",
    "options": {
      "a": "11 món Thiện",
      "b": "5 món Biệt cảnh",
      "c": "5 món Biến hành",
      "d": "Tất cả 51 món tâm sở"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Thức này thuộc vô phú vô ký tánh nên không tương ưng với 11 món Thiện [1].",
      "b": "Sai. Thức thứ tám không tương ưng với Biệt cảnh [1].",
      "c": "Đúng. Ở địa vị phàm phu, thức này chỉ tương ưng với duy nhất 5 món Biến hành [1].",
      "d": "Sai. Thức này không tương ưng với toàn bộ 51 món tâm sở [1]."
    }
  },
  {
    "question": "Tên gọi nào của thức thứ tám dùng để chỉ trạng thái khi đã hoàn toàn sạch hết các chủng tử hữu lậu?",
    "options": {
      "a": "A đà na thức",
      "b": "A lại da thức",
      "c": "Dị thục thức",
      "d": "Vô cấu thức"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Tên gọi này không được nhấn mạnh cho ý nghĩa làm sạch lậu hoặc trong phần giảng này [1].",
      "b": "Sai. A lại da (Tàng thức) là tên gọi từ địa vị phàm phu đến mãn Thất địa [1].",
      "c": "Sai. Dị thục thức vẫn còn khi chưa đạt đến Đẳng giác, Kim Cang đạo [1].",
      "d": "Đúng. Đến Kim Cang đạo, khi các chủng tử hữu lậu cấu nhiễm đã hết sạch, chỉ còn thuần chủng tử vô lậu thanh tịnh, thì thức này được đổi tên là 'Vô cấu thức' hay 'Bạch tịnh thức' [1]."
    }
  },
  {
    "question": "Khi một người chết, nếu hơi nóng sau cùng tụ lại ở vùng bụng (phúc) thì theo bài kệ cổ, người đó sẽ đầu sanh vào cảnh giới nào?",
    "options": {
      "a": "Địa ngục",
      "b": "Ngạ quỷ",
      "c": "Cõi Trời (Nhãn sanh Thiên)",
      "d": "Cõi Người (Nhơn tâm)"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Ở địa ngục thì hơi nóng tụ ở hai bàn chân [1].",
      "b": "Đúng. Theo bài kệ cổ: 'Nhơn tâm, Ngạ quỷ phúc', nên nếu hơi nóng ở bụng thì sẽ sanh vào cõi Ngạ quỷ [1].",
      "c": "Sai. Hơi nóng tụ ở mắt mới sanh lên cõi Trời [1].",
      "d": "Sai. Cõi người thì hơi nóng tụ lại ở tim [1]."
    }
  },
  {
    "question": "Thức thứ tám chuyển thành loại trí tuệ nào khi hành giả thành Phật?",
    "options": {
      "a": "Diệu quan sát trí",
      "b": "Đại viên cảnh trí",
      "c": "Bình đẳng tánh trí",
      "d": "Thành sở tác trí"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Tài liệu không ghi nhận sự chuyển biến thành Diệu quan sát trí cho thức này [1].",
      "b": "Đúng. Khi đến Kim Cang đạo, thức này chuyển thành Đại viên cảnh trí, chiếu khắp cả mười phương thế giới như một tấm gương lớn không nhơ [1].",
      "c": "Sai. Bình đẳng tánh trí không phải quả chuyển y của thức thứ tám [1].",
      "d": "Sai. Đây không phải trí tuệ tương ứng của thức thứ tám khi thành Phật [1]."
    }
  },
  {
    "question": "Tại sao hàng Nhị thừa lại bị các Luận chủ tranh cãi về sự tồn tại của thức thứ tám?",
    "options": {
      "a": "Vì Nhị thừa cho rằng chỉ có thức thứ tám là tồn tại duy nhất",
      "b": "Vì Nhị thừa muốn thay đổi tên gọi của thức này thành 'Tàng thức'",
      "c": "Vì họ không thấu hiểu và chấp rằng thức này không tồn tại",
      "d": "Vì Nhị thừa cho rằng thức thứ tám là linh hồn bất tử"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Nhị thừa không bảo lưu quan điểm này [1].",
      "b": "Sai. Không có tranh cãi nào về việc đổi tên từ phía Nhị thừa [1].",
      "c": "Đúng. Hàng Nhị thừa không hiểu thấu nên sanh tâm mê chấp, cho rằng thức này không có, bởi thế nên các Luận chủ mới phải dẫn bằng chứng trong Kinh Luận để tranh luận [1].",
      "d": "Sai. Quan niệm về linh hồn bất tử không được nêu là lý do tranh cãi trong bài [1]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-6-a-lai-da-thuc',
  slug: 'bai-thu-6-a-lai-da-thuc',
  title: 'Bài Thứ 6 - A-lại-da thức',
  type: 'article',
  status: 'draft',
  order: 8,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-30',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-6-a-lai-da-thuc/C%E1%BB%99i_ngu%E1%BB%93n_t%C3%A2m_th%E1%BB%A9c_gi%C3%A1c_ng%E1%BB%99.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-sau-a-lai-da-thuc', label: 'Bài Thứ Sáu - A lại da thức (Thức thứ tám)' },
        { id: 'nhung-ten-goi-cua-a-lai-da-thuc', label: 'Những tên gọi của A-lại-da thức', indent: 1 },
        { id: 'ba-nghia-cua-tang-thuc', label: 'Ba nghĩa của "Tàng thức"', indent: 2 },
        { id: 'khi-o-dia-vi-pham-phu', label: 'Khi ở địa vị phàm phu', indent: 1 },
        { id: 'ba-canh-ba-luong-ba-tanh-va-ba-tho', label: 'Ba cảnh, ba lượng, ba tánh và ba thọ', indent: 2 },
        { id: 'ba-coi-chin-dia-va-tam-so', label: 'Ba cõi, chín địa và tâm sở', indent: 2 },
        { id: 'chin-duyen-the-tuong-va-nghiep-dung', label: 'Chín duyên, thể, tướng và nghiệp dụng', indent: 2 },
        { id: 'khi-len-thanh-vi', label: 'Khi lên Thánh vị', indent: 1 },
        { id: 'quan-hanh', label: 'Quán hạnh', indent: 2 },
        { id: 'doan-hoac-va-chuyen-thanh-tri', label: 'Đoạn hoặc và chuyển thành trí', indent: 2 },
        { id: 'chung-qua-va-dieu-dung', label: 'Chứng quả và diệu dụng', indent: 2 },
        { id: 'ba-bai-tung-ve-a-lai-da-thuc', label: 'Ba bài tụng về A-lại-da thức', indent: 1 },
        { id: 'bai-tung-thu-nhut', label: 'Bài tụng thứ nhứt', indent: 2 },
        { id: 'dich-nghia-bai-tung-thu-nhut', label: 'Dịch nghĩa', indent: 3 },
        { id: 'luoc-giai-bai-tung-thu-nhut', label: 'Lược giải', indent: 3 },
        { id: 'bai-tung-thu-hai', label: 'Bài tụng thứ hai', indent: 2 },
        { id: 'dich-nghia-bai-tung-thu-hai', label: 'Dịch nghĩa', indent: 3 },
        { id: 'luoc-giai-bai-tung-thu-hai', label: 'Lược giải', indent: 3 },
        { id: 'bai-ke-co-nhon-ve-luc-lam-chung', label: 'Bài kệ cổ nhơn về lúc lâm chung', indent: 3 },
        { id: 'bai-tung-thu-ba', label: 'Bài tụng thứ ba', indent: 2 },
        { id: 'dich-nghia-bai-tung-thu-ba', label: 'Dịch nghĩa', indent: 3 },
        { id: 'luoc-giai-bai-tung-thu-ba', label: 'Lược giải', indent: 3 },
        { id: 'ba-giai-doan-ten-goi-cua-thuc-thu-tam', label: 'Tóm lại ba giai đoạn tên gọi của thức thứ tám', indent: 2 },
        { id: 'bai-tho-bat-thuc', label: 'Bài thơ Bát thức', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-6-a-lai-da-thuc/Digital_Alaya_Zen.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/BDm_oW5lARI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/5ynlJIEjH0w4h7T1i9jv9v?utm_source=generator&si=fd72444bda6146e1',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - A-lại-da thức',
    passPercentage: 70,
    questions,
  },
}

export default lesson
