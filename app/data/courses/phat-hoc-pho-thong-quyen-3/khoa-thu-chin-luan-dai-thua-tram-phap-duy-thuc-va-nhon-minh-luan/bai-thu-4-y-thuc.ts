import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-tu-y-thuc" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ TƯ - Ý THỨC (THỨC THỨ SÁU)</h2>
    </div>

    <h3 id="vi-sao-goi-la-y-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Vì sao gọi là "Ý thức"?</h3>
    <p>Thức này nương Ý căn (thức thứ 7) khởi tác dụng phân biệt Pháp trần, nên gọi là "Ý thức". Trong tám thức duy có thức thứ Sáu này rất lanh lẹ và khôn ngoan hơn hết, nên trong bài thơ Bát thức có câu rằng: "Độc hữu nhứt cá tối linh ly" (riêng có một cái thức rất lanh lẹ).</p>
    <p>Suy nghĩ làm việc phải, thức này đứng đầu; còn tính toán tạo tác việc ác, thì nó cũng hơn cả. Bởi thế nên trong Duy thức nói: "Công vi thủ, tội vi khôi" (nói về công thì thức này hơn hết, còn luận về tội thì nó cũng đứng đầu).</p>
    <p>Thức này cũng có công năng chấp Ngã và chấp Pháp. Vì vậy, người học Duy thức thường phải theo dõi rất kỹ mọi hoạt động phân biệt, suy lường, tính toán nơi thức thứ sáu nếu muốn chuyển mê thành ngộ.</p>

    <h4 id="phan-biet-ten-goi-y-thuc" class="text-lg font-semibold">Phân biệt tên gọi "Ý thức" của thức thứ sáu và thức thứ bảy</h4>
    <p>Một điều mà người học thường thắc mắc là: tại sao thức thứ Sáu gọi là "Ý thức", mà thức thứ Bảy cũng gọi là "Ý thức"?</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-3">
        <p><strong>Thức thứ Sáu gọi là "Ý thức":</strong> vì thức này nương "Ý căn" mà khởi ra phân biệt, nên gọi là Ý thức, nghĩa là thức của Ý căn. Ở đây, "Thức" là năng y, còn "Ý" là sở y; hai phần khác nhau. Cũng như nói "Nhãn thức", tức là thức của Nhãn căn.</p>
        <p><strong>Thức thứ Bảy gọi là "Ý thức":</strong> chữ "Ý" ở đây chỉ nghĩa sanh diệt tương tục không gián đoạn. Vì thức này sanh diệt tương tục không gián đoạn nên gọi là "Ý thức". Trong trường hợp này, "Thức" tức là "Ý" không khác.</p>
        <p><strong>Thí dụ tương tự:</strong> cũng như "Tàng thức", chữ "Tàng" là chứa đựng. Vì thức này chứa đựng các pháp nên gọi là "Tàng thức"; tức Thức chính là Tàng, không phải hai phần tách riêng.</p>
      </div>
    </div>

    <h3 id="khi-o-dia-vi-pham-phu" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Khi ở địa vị phàm phu, thức này đối với</h3>

    <h4 id="ba-canh-ba-luong-va-ba-tanh" class="text-lg font-semibold">Ba cảnh, ba lượng và ba tánh</h4>
    <div class="space-y-3">
      <p><strong>Ba cảnh:</strong> Thức này có đủ ba cảnh: Tánh cảnh, Độc ảnh cảnh và Đới chất cảnh.</p>
      <p><strong>Ba lượng:</strong> Thức này có đủ ba lượng: Hiện lượng, Tỷ lượng và Phi lượng.</p>
      <p><strong>Ba tánh:</strong> Thức này có đủ ba tánh: Thiện tánh, Ác tánh và Vô ký tánh.</p>
    </div>

    <h4 id="ba-coi-chin-dia-va-tam-so" class="text-lg font-semibold">Ba cõi, chín địa và tâm sở</h4>
    <div class="space-y-3">
      <p><strong>Ba cõi:</strong> Thức này có đủ trong ba cõi: Cõi Dục, Cõi Sắc và Cõi Vô sắc.</p>
      <p><strong>Chín địa:</strong> Thức này có đủ trong chín địa.</p>
      <p><strong>Tâm sở:</strong> Thức này có đủ 51 món Tâm sở: 5 món Biến hành, 5 món Biệt cảnh, 11 món Thiện, 6 món Căn bản phiền não, 20 món Tùy phiền não và 4 món Bất định.</p>
    </div>

    <h4 id="chin-duyen-the-tuong-va-nghiep-dung" class="text-lg font-semibold">Chín duyên, thể, tướng và nghiệp dụng</h4>
    <div class="space-y-3">
      <p><strong>Chín duyên:</strong> Trong chín duyên, thức này chỉ có 5 duyên: Căn duyên, Cảnh duyên, Tác ý duyên, Căn bản duyên và Chủng tử duyên.</p>
      <p><strong>Thể (tánh):</strong> Thể của thức này có ba món phân biệt: Tự tánh phân biệt, Tùy niệm phân biệt và Kế đạc phân biệt.</p>
      <p><strong>Tướng:</strong> Tướng của thức này là luân chuyển trong ba cõi (tam giới luân thời dị khả tri).</p>
      <p><strong>Nghiệp dụng:</strong> Nghiệp dụng của thức này làm cho thân và miệng tạo ra dẫn nghiệp và mãn nghiệp để cảm thọ quả báo trong ba cõi. Và ba tánh cùng năm Thọ, thức này thường thay đổi luôn.</p>
    </div>

    <h3 id="khi-len-thanh-vi" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Khi lên Thánh vị, thức này đối với</h3>

    <h4 id="quan-hanh-tu" class="text-lg font-semibold">Quán hạnh (tu)</h4>
    <p>Thức thứ sáu này quán sanh không để phá trừ ngã chấp và quán pháp không để phá trừ pháp chấp. Vì vậy, ở đường tu Duy thức, thức này vừa là đầu mối gây vọng nghiệp, vừa là chỗ trực tiếp xoay lại để quán chiếu và chuyển hóa.</p>

    <h4 id="doan-hoac-va-thanh-tri" class="text-lg font-semibold">Đoạn hoặc và thành trí</h4>
    <p>Thức này có năm giai đoạn trừ hoặc và chuyển thành trí:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Đến vị <strong>Tư lương</strong>, thì thức này mới chinh phục được hai món hiện hành của ngã chấp.</li>
      <li>Đến vị <strong>Kiến đạo</strong>, thì thức này mới đoạn được hai món chủng tử về phần phân biệt của ngã chấp và pháp chấp.</li>
      <li>Đến vị <strong>Tu tập</strong>, thức này đoạn được hai món hiện hành và chinh phục được hai chủng tử câu sanh của ngã chấp và pháp chấp.</li>
      <li>Đến vị <strong>Viễn hành</strong> trở lên, thì thức này mới đoạn hết câu sanh ngã chấp và hoàn toàn vô lậu.</li>
      <li>Đến vị <strong>Đẳng giác</strong>, thức này đoạn hết câu sanh pháp chấp, chuyển thành Diệu quan sát trí.</li>
    </ol>

    <h4 id="chung-qua-va-dieu-dung" class="text-lg font-semibold">Chứng quả và diệu dụng</h4>
    <p>Khi chứng quả vị Phật, thì thức này chuyển thành Diệu quan sát trí và có công năng chiếu soi căn cơ của chúng sanh trong Đại thiên thế giới, rồi tùy cơ thuyết pháp hóa độ hàm linh.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-0">Muốn cho người học dễ nhớ, nên trong Bát thức quy củ, ngài Huyền Trang Pháp sư có làm ba bài tụng tóm tắt thức này. Hai bài tụng đầu nói về Ý thức khi còn ở địa vị phàm phu; bài tụng thứ ba nói về Ý thức khi đặng Thánh quả.</p>
    </div>

    <h3 id="ba-bai-tung-tom-tat-y-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Ba bài tụng tóm tắt Ý thức</h3>

    <h4 id="bai-tung-thu-nhat" class="text-lg font-semibold">Bài tụng thứ nhứt</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Tam Tánh, tam Lượng thông tam Cảnh</p>
        <p>Tam giới luân thời dị khả tri</p>
        <p>Tương ưng Tâm sở ngũ thập nhứt</p>
        <p>Thiện ác lâm thời biệt phối chi.</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-nhat" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Ba Tánh, ba Lượng và ba Cảnh</p>
      <p>Luân chuyển ba cõi rất dễ biết</p>
      <p>Tâm sở tương ưng năm mươi mốt</p>
      <p>Thiện ác đến thời riêng phối hiệp.</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-nhat" class="text-base font-semibold">Lược giải</h5>
    <p>Thức thứ Sáu này đủ cả ba Tánh, ba Lượng và ba Cảnh. Nó luân hồi trong ba cõi rất dễ biết. Những Tâm sở tương ưng với thức này có 51 món. Khi thức này nghĩ việc lành thì có Thiện tâm sở riêng phối hiệp; còn khi nghĩ việc ác thì có Ác tâm sở riêng phối hiệp.</p>

    <h4 id="bai-tung-thu-hai" class="mt-8 text-lg font-semibold">Bài tụng thứ hai</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Tánh, Giới, Thọ tam hằng chuyển dịch</p>
        <p>Căn, Tùy, Tín đẳng đồng tương liên</p>
        <p>Động thân phát ngữ độc vi tối</p>
        <p>Dẫn, Mãn năng chiêu nghiệp lực khiên.</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-hai" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Tánh, Giới, Thọ ba thường biến đổi</p>
      <p>Căn, Tùy, Tín chung nhau liên tiếp</p>
      <p>Thân động, miệng thốt nó hơn hết</p>
      <p>Dẫn nghiệp, Mãn nghiệp thọ quả báo.</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-hai" class="text-base font-semibold">Lược giải</h5>
    <p>Thức này đối với ba Tánh, ba Giới và năm Thọ thì nó thường thay đổi; khi thì vui, lúc lại buồn. Năm mươi mốt món Tâm sở như căn bản phiền não, Tùy phiền não và Thiện tâm sở cùng nhau liên tiếp, không lúc nào rời thức này. Làm cho thân động và miệng nói, duy có thức này là hơn hết. Nó tạo ra dẫn nghiệp và mãn nghiệp để chiêu cảm quả báo đời sau.</p>

    <h4 id="bai-tung-thu-ba" class="mt-8 text-lg font-semibold">Bài tụng thứ ba</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Phát khởi sơ tâm Hoan hỷ địa</p>
        <p>Câu sanh do tự hiện triền miên</p>
        <p>Viễn hành địa hậu thuần vô lậu</p>
        <p>Quán sát viên minh chiếu Đại thiên.</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-ba" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Khi đặng sơ tâm Hoan hỷ địa</p>
      <p>Câu sanh ngã, pháp hiện còn ẩn</p>
      <p>Viễn hành về sau thuần vô lậu</p>
      <p>Quán sát viên mãn khắp Đại thiên.</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-ba" class="text-base font-semibold">Lược giải</h5>
    <p>Hành giả trong lúc trải qua Thập thánh thì thức này có ba thời kỳ đoạn phiền não và thuần vô lậu. Khi lên Sơ địa, tức Hoan hỷ địa, thì phân biệt ngã chấp và pháp chấp đều đã đoạn. Nhưng câu sanh ngã chấp và pháp chấp hãy còn hiện hành và miên phục trong Tàng thức, chưa có thể chinh phục và đoạn trừ được.</p>
    <p>Khi đến Viễn hành địa (tức Thất địa) trở lên thì mới đoạn được chủng tử câu sanh của ngã chấp và chinh phục được hiện hành của pháp chấp. Lúc bấy giờ thức này mới thuần Vô lậu.</p>
    <p>Khi sắp lên quả Phật thì đoạn được chủng tử câu sanh của pháp chấp. Lúc bấy giờ thức này chuyển thành Diệu quan sát trí, quán sát chiếu soi cả Đại thiên thế giới và tùy theo căn cơ của mỗi loài mà thuyết pháp giáo hóa.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Tại sao thức thứ sáu được gọi là \"Ý thức\"?",
    "options": {
      "a": "Vì nó là thức duy nhất không cần nương tựa vào bất kỳ căn nào.",
      "b": "Vì nó nương vào Ý căn (thức thứ bảy) để khởi tác dụng phân biệt.",
      "c": "Vì nó có khả năng chứa đựng tất cả các hạt giống (chủng tử).",
      "d": "Vì nó là thức có tính chất sanh diệt tương tục không gián đoạn."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Thức thứ sáu bắt buộc phải nương vào Ý căn [1].",
      "b": "Đúng. Thức thứ sáu gọi là 'Ý thức' vì nó nương 'Ý căn' mà khởi ra phân biệt. Tức là thức của Ý căn [1].",
      "c": "Sai. Khả năng chứa đựng hạt giống (chủng tử) là đặc điểm của Tàng thức (thức thứ 8) [1].",
      "d": "Sai. Tính chất sanh diệt tương tục không gián đoạn là lý do giải thích cho tên gọi 'Ý thức' của thức thứ bảy, không phải thức thứ sáu [1]."
    }
  },
  {
    "question": "Trong tám thức, thức nào được mô tả là \"tối linh ly\" (lanh lẹ và khôn ngoan hơn hết)?",
    "options": {
      "a": "Thức thứ sáu (Ý thức)",
      "b": "Thức thứ tám (A-lại-da thức)",
      "c": "Năm thức trước (Tiền ngũ thức)",
      "d": "Thức thứ bảy (Mạt-na thức)"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Trong tám thức duy có thức thứ sáu này rất lanh lẹ và khôn ngoan hơn hết, nên trong bài thơ Bát thức có câu 'Độc hữu nhứt cá tối linh ly' [1].",
      "b": "Sai. Câu nói 'tối linh ly' không dùng để chỉ thức thứ tám [1].",
      "c": "Sai. Tài liệu nhấn mạnh đặc tính này là riêng của thức thứ sáu [1].",
      "d": "Sai. Câu nói này không miêu tả thức thứ bảy [1]."
    }
  },
  {
    "question": "Câu nói \"Công vi thủ, tội vi khôi\" ám chỉ điều gì về thức thứ sáu?",
    "options": {
      "a": "Nó là thức duy nhất có thể chuyển hóa tội thành công.",
      "b": "Nó chỉ tạo ra tội lỗi nếu không được tu tập.",
      "c": "Nó không chịu trách nhiệm cho các hành vi ác do thói quen.",
      "d": "Nó là thức dẫn đầu trong cả việc tạo công đức và gây ra tội lỗi."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Câu này không có nghĩa là sự chuyển hóa tội thành công [1].",
      "b": "Sai. Thức này đứng đầu trong cả việc tạo ra điều ác và điều thiện [1].",
      "c": "Sai. Trái ngược hoàn toàn với tài liệu [1].",
      "d": "Đúng. Khi suy nghĩ làm việc phải thì nó đứng đầu (công vi thủ), còn tính toán việc ác thì nó cũng hơn cả (tội vi khôi) [1]."
    }
  },
  {
    "question": "Sự khác biệt về tên gọi \"Ý thức\" giữa thức thứ sáu và thức thứ bảy là gì?",
    "options": {
      "a": "Không có sự khác biệt, cả hai thức đều có chung một ý nghĩa và công năng.",
      "b": "Thức thứ sáu là tên gọi dựa trên nơi nương tựa, thức thứ bảy dựa trên tự tánh tương tục.",
      "c": "Thức thứ sáu gọi theo tên của Phật, thức thứ bảy gọi theo tên của chúng sanh.",
      "d": "Thức thứ sáu dựa trên đối tượng phân biệt, thức thứ bảy dựa trên khả năng ghi nhớ."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Tuy cùng tên gọi nhưng cách giải thích ý nghĩa hoàn toàn khác nhau [1].",
      "b": "Đúng. Thức thứ sáu nương 'Ý căn' mà gọi là Ý thức (năng y và sở y khác nhau), trong khi thức thứ bảy được gọi là Ý thức vì tự tánh của nó là sanh diệt tương tục không gián đoạn [1].",
      "c": "Sai. Tài liệu không đề cập đến cách giải thích này [1].",
      "d": "Sai. Tên gọi không dựa trên đối tượng phân biệt hay khả năng ghi nhớ [1]."
    }
  },
  {
    "question": "Thức thứ sáu có bao nhiêu món Tâm sở tương ưng?",
    "options": {
      "a": "26 món Phiền não.",
      "b": "11 món Thiện tâm sở.",
      "c": "8 món Tâm vương.",
      "d": "51 món Tâm sở."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Đây không phải là con số tổng các món tâm sở [1].",
      "b": "Sai. 11 món Thiện chỉ là một phần nhỏ trong tổng số tâm sở tương ưng của thức này [1].",
      "c": "Sai. Tâm vương là các thức chính, không phải là tâm sở [1].",
      "d": "Đúng. Thức thứ sáu có đủ 51 món Tâm sở, bao gồm 5 Biến hành, 5 Biệt cảnh, 11 Thiện, 6 Căn bản phiền não, 20 Tùy phiền não, và 4 Bất định [1]."
    }
  },
  {
    "question": "Trong chín duyên, thức thứ sáu cần bao nhiêu duyên để khởi tác dụng?",
    "options": {
      "a": "7 duyên",
      "b": "5 duyên",
      "c": "9 duyên",
      "d": "3 duyên"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Không phải là 7 duyên [1].",
      "b": "Đúng. Trong chín duyên, thức này chỉ có 5 duyên: Căn duyên, Cảnh duyên, Tác ý duyên, Căn bản duyên, và Chủng tử duyên [1].",
      "c": "Sai. Thức này không cần đủ cả 9 duyên [1].",
      "d": "Sai. Không phải là 3 duyên [1]."
    }
  },
  {
    "question": "Khi ở địa vị Phàm phu, nghiệp dụng của thức thứ sáu là gì?",
    "options": {
      "a": "Duy trì mạng sống và chấp giữ thân thể.",
      "b": "Làm cho thân và miệng tạo ra dẫn nghiệp và mãn nghiệp.",
      "c": "Thanh lọc các hạt giống ác trong Tàng thức.",
      "d": "Chỉ tập trung vào việc quán tưởng không tánh."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Đây không phải nghiệp dụng của thức thứ sáu [1].",
      "b": "Đúng. Nghiệp dụng của thức này làm cho thân và miệng tạo ra dẫn nghiệp và mãn nghiệp để cảm thọ quả báo trong ba cõi [1, 2].",
      "c": "Sai. Việc thanh lọc không phải là nghiệp dụng của thức thứ sáu ở vị phàm phu [1].",
      "d": "Sai. Quán tưởng thuộc về địa vị tu hành (Thánh vị), không phải của Phàm phu [1]."
    }
  },
  {
    "question": "Thức thứ sáu chuyển thành \"Diệu quan sát trí\" hoàn toàn ở giai đoạn nào?",
    "options": {
      "a": "Vị Tư lương",
      "b": "Quả vị Phật (sau Đẳng giác)",
      "c": "Hoan hỷ địa (Sơ địa)",
      "d": "Viễn hành địa (Thất địa)"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Ở vị Tư lương, thức này mới chỉ chinh phục được hiện hành của ngã chấp [3].",
      "b": "Đúng. Khi đến vị Đẳng giác (sắp lên quả Phật), thức này đoạn hết câu sanh pháp chấp và chuyển hoàn toàn thành Diệu quan sát trí [2, 3].",
      "c": "Sai. Ở Sơ địa chỉ mới đoạn được phân biệt ngã chấp và pháp chấp [2].",
      "d": "Sai. Đến Thất địa mới đoạn được chủng tử câu sanh ngã chấp, chưa chuyển thành trí hoàn toàn [2, 3]."
    }
  },
  {
    "question": "Trong ba bài tụng của ngài Huyền Trang, bài tụng thứ hai nhấn mạnh điều gì về thức thứ sáu?",
    "options": {
      "a": "Khả năng quán chiếu Đại thiên thế giới của trí huệ.",
      "b": "Sự tương ưng với 51 tâm sở thiện ác.",
      "c": "Sự biến đổi của Tánh, Giới, Thọ và vai trò chủ chốt trong tạo nghiệp.",
      "d": "Cách thức phá trừ ngã chấp và pháp chấp."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đây là nội dung chính của bài tụng thứ ba [2].",
      "b": "Sai. Nội dung về 51 tâm sở nằm trong bài tụng thứ nhất [3].",
      "c": "Đúng. Bài tụng thứ hai nhấn mạnh 'Tánh, Giới, Thọ ba thường biến đổi' và vai trò 'thân động, miệng thốt nó hơn hết' tạo ra dẫn nghiệp và mãn nghiệp [2].",
      "d": "Sai. Không phải là nội dung trọng tâm của bài tụng thứ hai [2]."
    }
  },
  {
    "question": "Tại giai đoạn Hoan hỷ địa (Sơ địa), loại chấp trước nào đã được đoạn trừ?",
    "options": {
      "a": "Câu sanh ngã chấp và pháp chấp.",
      "b": "Tất cả các loại phiền não vô lậu.",
      "c": "Chỉ đoạn được ngã chấp, còn pháp chấp vẫn nguyên vẹn.",
      "d": "Phân biệt ngã chấp và pháp chấp."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Ở giai đoạn này, câu sanh ngã chấp và pháp chấp hãy còn hiện hành và miên phục trong Tàng thức [2].",
      "b": "Sai. Chưa đoạn trừ được tất cả phiền não [2].",
      "c": "Sai. Ở Sơ địa đã đoạn được cả hai loại phân biệt ngã chấp và pháp chấp [2].",
      "d": "Đúng. Khi lên Sơ địa (Hoan hỷ địa), thì phân biệt ngã chấp và pháp chấp đều đã được đoạn trừ [2]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-4-y-thuc',
  slug: 'bai-thu-4-y-thuc',
  title: 'Bài Thứ 4 - Ý thức',
  type: 'article',
  status: 'published',
  order: 6,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-4-y-thuc/S%C6%A1_%C4%91%E1%BB%93_chuy%E1%BB%83n_h%C3%B3a_%C3%BD_th%E1%BB%A9c.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-tu-y-thuc', label: 'Bài Thứ Tư - Ý thức (Thức thứ sáu)' },
        { id: 'vi-sao-goi-la-y-thuc', label: 'Vì sao gọi là "Ý thức"?', indent: 1 },
        { id: 'phan-biet-ten-goi-y-thuc', label: 'Phân biệt tên gọi "Ý thức"', indent: 2 },
        { id: 'khi-o-dia-vi-pham-phu', label: 'Khi ở địa vị phàm phu', indent: 1 },
        { id: 'ba-canh-ba-luong-va-ba-tanh', label: 'Ba cảnh, ba lượng và ba tánh', indent: 2 },
        { id: 'ba-coi-chin-dia-va-tam-so', label: 'Ba cõi, chín địa và tâm sở', indent: 2 },
        { id: 'chin-duyen-the-tuong-va-nghiep-dung', label: 'Chín duyên, thể, tướng và nghiệp dụng', indent: 2 },
        { id: 'khi-len-thanh-vi', label: 'Khi lên Thánh vị', indent: 1 },
        { id: 'quan-hanh-tu', label: 'Quán hạnh (tu)', indent: 2 },
        { id: 'doan-hoac-va-thanh-tri', label: 'Đoạn hoặc và thành trí', indent: 2 },
        { id: 'chung-qua-va-dieu-dung', label: 'Chứng quả và diệu dụng', indent: 2 },
        { id: 'ba-bai-tung-tom-tat-y-thuc', label: 'Ba bài tụng tóm tắt Ý thức', indent: 1 },
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
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-4-y-thuc/H%C3%A0nh_Tr%C3%ACnh_Chuy%E1%BB%83n_H%C3%B3a_%C3%9D_Th%E1%BB%A9c.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/2-mQ_hcsGpw',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/0nx37Og4erwRpzxlqdYFlJ?utm_source=generator&si=f1724d475f364c76',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Ý thức',
    passPercentage: 70,
    questions,
  },
}

export default lesson
