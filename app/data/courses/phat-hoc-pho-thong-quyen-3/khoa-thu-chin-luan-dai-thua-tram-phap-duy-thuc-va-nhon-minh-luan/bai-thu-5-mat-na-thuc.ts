import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-nam-mat-na-thuc" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ NĂM - MẠT NA THỨC (THỨC THỨ BẢY)</h2>
    </div>

    <h3 id="nhung-ten-goi-cua-mat-na-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Những tên gọi của Mạt na thức</h3>
    <p>Thức này có nhiều tên, mỗi tên nêu lên một công năng hay một phương diện hoạt động riêng:</p>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Mạt na:</strong> gọi theo nguyên âm tiếng Phạn.</li>
      <li><strong>Ý căn:</strong> thức này là căn của ý thức (thức thứ Sáu), vì thức thứ Sáu nương thức này phát sanh.</li>
      <li><strong>Thức thứ Bảy:</strong> theo thứ đệ thì thức này đứng nhằm thứ Bảy.</li>
      <li><strong>Truyền thống thức:</strong> vì thức này có công năng truyền các pháp hiện hành.</li>
      <li><strong>Ý:</strong> vì thức này sanh diệt tương tục không gián đoạn nên gọi là "Ý". Song, sợ người lầm lộn với ý thức thứ Sáu, nên thức thứ Bảy này thường chỉ gọi là "Ý", mà không thêm chữ "Thức".</li>
    </ul>

    <h4 id="doi-tuong-duyen-cua-mat-na-thuc" class="text-lg font-semibold">Đối tượng duyên của Mạt na thức</h4>
    <p>Thức này chỉ duyên kiến phần của thức A lại da, chấp làm thật ngã và thật pháp. Vì vậy, nơi Mạt na thức luôn tiềm ẩn khuynh hướng chấp ngã rất sâu kín, vừa vi tế vừa bền bỉ.</p>

    <h3 id="khi-o-dia-vi-pham-phu" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Khi ở địa vị phàm phu, thức này đối với</h3>

    <h4 id="ba-canh-ba-luong-va-ba-tanh" class="text-lg font-semibold">Ba cảnh, ba lượng và ba tánh</h4>
    <div class="space-y-3">
      <p><strong>Ba cảnh:</strong> Thức này chỉ có Đới chất cảnh.</p>
      <p><strong>Ba lượng:</strong> Thức này chỉ có Phi lượng.</p>
      <p><strong>Ba tánh:</strong> Thức này chỉ có Hữu phú Vô ký tánh.</p>
    </div>

    <h4 id="ba-gioi-chin-dia-va-tam-so" class="text-lg font-semibold">Ba giới, chín địa và tâm sở</h4>
    <div class="space-y-3">
      <p><strong>Ba giới:</strong> Trong ba Giới, thức này đều có đủ.</p>
      <p><strong>Chín địa:</strong> Trong chín Địa, thức này có đủ.</p>
      <p><strong>Tâm sở:</strong> Thức này có 18 tâm sở: 5 món Biến hành, 1 món Huệ trong Biệt cảnh, 4 món căn bổn phiền não là Si, Kiến, Mạn, Ái và 8 món Đại tùy.</p>
    </div>

    <h4 id="chin-duyen-tanh-tuong-va-nghiep-dung" class="text-lg font-semibold">Chín duyên, tánh, tướng và nghiệp dụng</h4>
    <div class="space-y-3">
      <p><strong>Chín duyên:</strong> Thức này chỉ có ba duyên: Căn cảnh duyên, Tác ý duyên và Chủng tử duyên.</p>
      <p><strong>Tánh:</strong> Hằng thẩm xét và lo nghĩ (Hằng thẩm tư lương).</p>
      <p><strong>Tướng:</strong> Lo nghĩ (Tư lương vi tánh tướng).</p>
      <p><strong>Nghiệp dụng:</strong> Làm chỗ cho 6 thức trước nương, hoặc nhiễm hay tịnh.</p>
    </div>

    <h3 id="khi-len-thanh-vi" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Khi lên Thánh vị, thức này đối với</h3>

    <h4 id="quan-hanh" class="text-lg font-semibold">Quán hạnh</h4>
    <p>Thật ra thức này không có năng lực đoạn hoặc, chỉ nhờ thức thứ Sáu tu quán, đoạn hoặc, mà thức này cũng được đoạn. Đây là điểm cho thấy Mạt na thức tuy rất vi tế nhưng sự chuyển hóa của nó lại gắn chặt với công phu quán chiếu nơi ý thức.</p>

    <h4 id="doan-hoac-va-chuyen-thanh-tri" class="text-lg font-semibold">Đoạn hoặc và chuyển thành trí</h4>
    <p>Thức này có ba giai đoạn đoạn hoặc và chuyển thành trí:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Đến <strong>Sơ địa</strong>, thức này mới vừa chinh phục được hai món chấp về phần câu sanh và chuyển thành <strong>Bình đẳng tánh trí</strong>.</li>
      <li>Khi lên <strong>Bát địa</strong> (Vô công dụng đạo), thức này đoạn được câu sanh ngã chấp.</li>
      <li>Đến <strong>Kim Cang đạo</strong>, thức này mới đoạn được câu sanh pháp chấp.</li>
    </ol>

    <h4 id="chung-qua-va-dieu-dung" class="text-lg font-semibold">Chứng quả và diệu dụng</h4>
    <p>Khi chứng quả vị Phật, thì thức này hiện ra thân "Tha thọ dụng", để giáo hóa thập địa Bồ Tát. Nhờ đó, công năng giáo hóa của Mạt na thức sau khi chuyển thành trí không còn bị giới hạn trong phạm vi chấp ngã nữa, mà trở thành diệu dụng bình đẳng.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-0">Muốn cho người học dễ nhớ, nên trong Bát thức quy củ, ngài Huyền Trang Pháp sư có làm ba bài tụng như sau. Hai bài tụng đầu nói thức này khi ở địa vị Phàm phu; bài tụng thứ ba nói thức này khi lên Thánh quả.</p>
    </div>

    <h3 id="ba-bai-tung-ve-mat-na-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Ba bài tụng về Mạt na thức</h3>

    <h4 id="bai-tung-thu-nhat" class="text-lg font-semibold">Bài tụng thứ nhất</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Đới chất hữu phú thông tình bổn</p>
        <p>Tùy duyên chấp ngã, lượng vi phi</p>
        <p>Bát đại Biến hành, Biệt cảnh Huệ</p>
        <p>Tham, Si, Ngã kiến, Mạn tương tùy.</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-nhat" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Đới chất hữu phú thông Bảy, Tám</p>
      <p>Tùy duyên chấp ngã thuộc Phi lượng</p>
      <p>Tám đại, Biến hành, Huệ Biệt cảnh</p>
      <p>Tham, Si, Ngã, Mạn thường theo nhau</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-nhat" class="text-base font-semibold">Lược giải</h5>
    <p>Trong ba cảnh, thức này chỉ duyên về "Đới chất cảnh". Trong ba tánh, thức này chỉ thuộc về "Hữu phú Vô ký tánh". Cảnh đới chất của thức này là thông cả thức thứ Bảy và thức thứ Tám. Nghĩa là thức thứ Bảy dùng kiến phần năng duyên của mình duyên qua kiến phần của thức thứ Tám, rồi biến lại thành cảnh đới chất.</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1 italic">
        <p>"Dĩ tâm duyên tâm chơn đới chất"</p>
        <p>"Trung gian tướng phần lưỡng đầu sanh"</p>
      </div>
    </div>
    <p>Nghĩa là thức thứ Bảy dùng kiến phần của tâm mình, duyên qua kiến phần tâm của thức thứ Tám, nên chính giữa hai thức này sanh ra một tướng phần là cảnh "Chơn đới chất". Chúng sanh tùy vọng nghiệp sanh trong Tam giới, thì thức này cũng theo đó mà chấp ngã. Trong ba lượng, thức này thuộc về phi lượng.</p>
    <p>Về tâm sở thì thức này có 18 món: 8 Đại tùy, 5 món Biến hành và một món Huệ trong 5 món Biệt cảnh với 4 món căn bổn phiền não là Tham, Si, Mạn và Ngã kiến.</p>

    <h4 id="bai-tung-thu-hai" class="mt-8 text-lg font-semibold">Bài tụng thứ hai</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Hằng thẩm tư lương ngã tương tùy</p>
        <p>Hữu tình nhựt dạ trấn hôn mê</p>
        <p>Tứ hoặc bát đại tương ưng khởi</p>
        <p>Lục chuyển hô vi "Nhiễm tịnh y"</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-hai" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Hằng xét lo lường theo chấp ngã</p>
      <p>Hữu tình ngày đêm bị mê muội</p>
      <p>Bốn hoặc, tám đại chung nhau khởi</p>
      <p>Sáu thức gọi là "Nhiễm tịnh y"</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-hai" class="text-base font-semibold">Lược giải</h5>
    <p>Thức thứ Bảy thường suy xét so đo, chấp kiến phần của thức thứ Tám làm ngã. Trong Bát thức quy củ tụng có nói: thức thứ Tám có hằng mà không thẩm xét; thức thứ Bảy vừa hằng lại vừa thẩm xét; thức thứ Sáu có thẩm xét mà không hằng; còn năm thức trước thì không hằng và không thẩm.</p>
    <p>Cũng vì thức này chấp ngã, nên chúng hữu tình mê muội trong sanh tử đêm dài mà chẳng tự biết. Thức này tương ưng với bốn món căn bản phiền não là Si, Kiến, Mạn, Ái và 8 món Đại tùy. Sáu thức trước gọi thức này là "Nhiễm tịnh y".</p>

    <h4 id="bai-tung-thu-ba" class="mt-8 text-lg font-semibold">Bài tụng thứ ba</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Cực hỷ sơ tâm, bình đẳng tánh</p>
        <p>Vô công dụng hạnh ngã hằng thôi</p>
        <p>Như Lai hiện khởi tha thọ dụng</p>
        <p>Thập địa Bồ Tát sở bị côi (cơ)</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung-thu-ba" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Đến Sơ địa, thành "Bình đẳng trí"</p>
      <p>Đến Vô công dụng, hằng phá Ngã</p>
      <p>Như Lai hiện thân "Tha thọ dụng"</p>
      <p>Giáo hóa hàng Thập địa Bồ Tát.</p>
    </div>

    <h5 id="luoc-giai-bai-tung-thu-ba" class="text-base font-semibold">Lược giải</h5>
    <p>Hành giả khi chứng được Hoan hỷ địa, tức là Sơ địa, thì thức này chuyển lại thành "Bình đẳng tánh trí". Đến Bất động địa, tức là địa thứ Tám, cũng gọi là "Vô công dụng hạnh"; lúc bấy giờ hành giả mới dẹp trừ chủng tử của ngã chấp.</p>
    <p>Đến khi chứng quả Phật, thức này đã chuyển thành trí, hiện ra thân "Tha thọ dụng" để giáo hóa hàng Thập địa Bồ Tát.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Thức thứ Bảy còn được gọi là 'Ý căn' vì lý do nào sau đây?",
    "options": {
      "a": "Vì nó là chỗ dựa để thức thứ Tám phát sinh.",
      "b": "Vì nó là căn cứ của năm thức cảm giác.",
      "c": "Vì nó có khả năng phân biệt sáu trần cảnh.",
      "d": "Vì thức thứ Sáu nương vào thức này để phát sinh."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Thức thứ Bảy không phải là căn hay chỗ dựa để thức thứ Tám phát sinh [1].",
      "b": "Sai. Nó không đóng vai trò làm căn cứ phát sinh cho năm thức cảm giác trước [1].",
      "c": "Sai. Việc phân biệt sáu trần cảnh không phải là lý do để thức thứ Bảy được gọi là 'Ý căn' [1].",
      "d": "Đúng. Thức thứ Bảy là căn của ý thức (Thức thứ Sáu), vì thức thứ Sáu phải nương vào thức này mới có thể phát sanh [1]."
    }
  },
  {
    "question": "Trong ba cảnh (Tánh cảnh, Đới chất cảnh, Độc ảnh cảnh), Mạt na thức thuộc về cảnh nào?",
    "options": {
      "a": "Đới chất cảnh",
      "b": "Tánh cảnh",
      "c": "Độc ảnh cảnh",
      "d": "Cả ba cảnh trên"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Khi ở địa vị phàm phu, đối với ba cảnh, thức thứ Bảy chỉ duyên về Đới chất cảnh [2, 3].",
      "b": "Sai. Thức thứ Bảy không duyên về Tánh cảnh [2, 3].",
      "c": "Sai. Thức thứ Bảy không duyên về Độc ảnh cảnh [2, 3].",
      "d": "Sai. Thức này không thông cả ba cảnh mà chỉ duy nhất có Đới chất cảnh [2, 3]."
    }
  },
  {
    "question": "Tại sao thức thứ Bảy được gọi là 'Truyền thống thức'?",
    "options": {
      "a": "Vì nó có công năng truyền các pháp hiện hành.",
      "b": "Vì nó duy trì truyền thống tu tập của hành giả.",
      "c": "Vì nó giữ gìn các chủng tử truyền thừa từ quá khứ.",
      "d": "Vì nó truyền đạt các thông tin từ thế hệ này sang thế hệ khác."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Thức thứ Bảy có một tên gọi là 'Truyền thống thức' vì nó có công năng truyền các pháp hiện hành [1].",
      "b": "Sai. Việc duy trì truyền thống tu tập không phải là lý do cho tên gọi này trong giáo lý Duy thức [1].",
      "c": "Sai. Giữ gìn các chủng tử là công năng cốt lõi của thức thứ Tám (A-lại-da thức), không phải thức thứ Bảy [1].",
      "d": "Sai. Chữ 'truyền thống' ở đây mang ý nghĩa truyền các pháp hiện hành chứ không phải truyền tin giữa các thế hệ [1]."
    }
  },
  {
    "question": "Về phương diện 'Ba lượng', thức thứ Bảy được xếp vào loại nào?",
    "options": {
      "a": "Thông cả Hiện lượng và Tỷ lượng",
      "b": "Hiện lượng",
      "c": "Phi lượng",
      "d": "Tỷ lượng"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Thức này không thông với Hiện lượng hay Tỷ lượng [2, 3].",
      "b": "Sai. Ở địa vị phàm phu, thức này không có Hiện lượng [2, 3].",
      "c": "Đúng. Trong ba lượng, hoạt động của thức thứ Bảy tùy duyên chấp ngã nên chỉ thuộc về Phi lượng [2, 3].",
      "d": "Sai. Thức này hoàn toàn không có Tỷ lượng [2, 3]."
    }
  },
  {
    "question": "Thức thứ Bảy tương ưng với bao nhiêu món tâm sở khi ở địa vị phàm phu?",
    "options": {
      "a": "18 tâm sở",
      "b": "21 tâm sở",
      "c": "51 tâm sở",
      "d": "10 tâm sở"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Thức này đi kèm với 18 tâm sở bao gồm: 8 món Đại tùy, 5 món Biến hành, 1 món Huệ (trong 5 món Biệt cảnh) và 4 món căn bổn phiền não [2, 3].",
      "b": "Sai. Số lượng 21 tâm sở không đúng với đặc tính của thức thứ Bảy [2, 3].",
      "c": "Sai. 51 là tổng số tâm sở tương ưng của Thức thứ Sáu, không phải Thức thứ Bảy [2, 3].",
      "d": "Sai. Số lượng tâm sở là 18, không phải 10 [2, 3]."
    }
  },
  {
    "question": "Bốn món căn bản phiền não luôn đi kèm với thức thứ Bảy là gì?",
    "options": {
      "a": "Sát, Đạo, Dâm, Vọng",
      "b": "Si, Kiến, Mạn, Ái",
      "c": "Hỷ, Nộ, Ái, Ố",
      "d": "Tham, Sân, Si, Mạn"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Đây là bốn trọng giới (giới luật), không phải bốn món căn bản phiền não [2-4].",
      "b": "Đúng. Bốn món căn bản phiền não (tứ hoặc) luôn tương ưng cùng khởi với thức này là Tham (Ái), Si, Ngã kiến (Kiến) và Mạn [2-4].",
      "c": "Sai. Đây là các cảm xúc thông thường, không phải căn bổn phiền não theo Duy thức [2-4].",
      "d": "Sai. Thức thứ Bảy tương ưng với Tham (Ái), Si, Mạn nhưng đi kèm với Kiến (Ngã kiến) thay vì Sân [2-4]."
    }
  },
  {
    "question": "Đặc tính của thức thứ Bảy so với các thức khác được mô tả là gì?",
    "options": {
      "a": "Thẩm xét mà không hằng.",
      "b": "Hằng mà không thẩm xét.",
      "c": "Vừa hằng lại vừa thẩm xét.",
      "d": "Không hằng và không thẩm xét."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Thẩm xét mà không hằng là đặc tính của thức thứ Sáu [4].",
      "b": "Sai. Hằng mà không thẩm xét là đặc tính của thức thứ Tám [4].",
      "c": "Đúng. Đặc tính (tánh) của thức thứ Bảy là 'Hằng thẩm tư lương' (thường suy xét lo lường), tức là vừa hằng lại vừa thẩm xét [2, 4].",
      "d": "Sai. Không hằng và không thẩm xét là đặc tính của năm thức trước [4]."
    }
  },
  {
    "question": "Khi hành giả chứng được Sơ địa (Hoan hỷ địa), thức thứ Bảy chuyển thành trí gì?",
    "options": {
      "a": "Thành sở tác trí",
      "b": "Diệu quan sát trí",
      "c": "Đại viên cảnh trí",
      "d": "Bình đẳng tánh trí"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Thành sở tác trí là trí tuệ được chuyển hóa từ năm thức đầu [5, 6].",
      "b": "Sai. Diệu quan sát trí là trí tuệ chuyển hóa từ ý thức (thức thứ Sáu) [5, 6].",
      "c": "Sai. Đại viên cảnh trí là kết quả chuyển hóa của thức thứ Tám [5, 6].",
      "d": "Đúng. Khi đến Sơ địa, thức thứ Bảy bắt đầu chuyển hóa thành 'Bình đẳng tánh trí' [5, 6]."
    }
  },
  {
    "question": "Tại giai đoạn nào thức thứ Bảy mới đoạn trừ được 'Câu sanh pháp chấp'?",
    "options": {
      "a": "Bát địa (Vô công dụng đạo)",
      "b": "Tam địa",
      "c": "Kim Cang đạo",
      "d": "Sơ địa"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Khi lên Bát địa (Vô công dụng đạo), thức này mới chỉ đoạn được câu sanh ngã chấp [5, 6].",
      "b": "Sai. Không có tài liệu đề cập đến việc đoạn câu sanh pháp chấp ở Tam địa [5].",
      "c": "Đúng. Phải đến giai đoạn Kim Cang đạo thì thức thứ Bảy mới hoàn toàn đoạn được câu sanh pháp chấp [5].",
      "d": "Sai. Ở Sơ địa, thức này mới chỉ chinh phục được phần nào hai món chấp về phần câu sanh [5, 6]."
    }
  },
  {
    "question": "Khi chứng quả Phật, thức thứ Bảy hiện ra thân gì để giáo hóa các Bồ Tát?",
    "options": {
      "a": "Thân Biến hóa",
      "b": "Thân Pháp giới",
      "c": "Thân Tự thọ dụng",
      "d": "Thân Tha thọ dụng"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Thức thứ Bảy không hiện thân Biến hóa để giáo hóa [5, 6].",
      "b": "Sai. Không phải là thân Pháp giới [5, 6].",
      "c": "Sai. Thân Tự thọ dụng không phải là thân được đề cập liên quan đến thức thứ Bảy [5, 6].",
      "d": "Đúng. Khi chứng quả vị Phật, thức này hiện ra thân 'Tha thọ dụng' để giáo hóa cho hàng thập địa Bồ Tát [5, 6]."
    }
  },
  {
    "question": "Tánh chất 'Hữu phú Vô ký' của thức thứ Bảy có nghĩa là gì?",
    "options": {
      "a": "Hoàn toàn thanh tịnh không bị che lấp.",
      "b": "Tính chất ác rõ rệt gây ra tội lỗi.",
      "c": "Không thiện không ác nhưng che lấp thánh đạo.",
      "d": "Là tính chất thiện nhưng bị che lấp."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Chữ 'Hữu phú' mang ý nghĩa là bị che lấp chứ không phải thanh tịnh [2, 3].",
      "b": "Sai. 'Vô ký' có nghĩa là không thiện cũng không ác, không phải là tính ác rõ rệt [2, 3].",
      "c": "Đúng. Trong ba tánh, thức này thuộc Hữu phú Vô ký, nghĩa là tính chất 'Vô ký' (không thiện không ác) nhưng 'Hữu phú' (bị che lấp bởi phiền não, cản trở thánh đạo) [2, 3].",
      "d": "Sai. Thức này là Vô ký chứ không phải tính chất thiện [2, 3]."
    }
  },
  {
    "question": "Trong bài tụng của ngài Huyền Trang, câu 'Lục chuyển hô vi Nhiễm tịnh y' có ý nghĩa gì?",
    "options": {
      "a": "Sáu thức đều biến thành trí tịnh hoàn toàn.",
      "b": "Sáu đời chuyển kiếp đều dựa vào thức này.",
      "c": "Thức thứ Sáu có khả năng làm sạch thức thứ Bảy.",
      "d": "Sáu thức trước coi thức thứ Bảy là chỗ dựa cho sự nhiễm hay tịnh."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Câu tụng không mang ý nghĩa là sáu thức đã tịnh hoàn toàn [4].",
      "b": "Sai. Từ 'Lục chuyển' chỉ cho 6 thức trước (từ nhãn thức đến ý thức), không phải 'Sáu đời chuyển kiếp' [4].",
      "c": "Sai. Dù thức thứ sáu có tu quán hỗ trợ thức thứ bảy, nhưng câu tụng này không miêu tả ý nghĩa đó [4].",
      "d": "Đúng. Nghiệp dụng của thức thứ bảy là làm chỗ nương cho 6 thức trước. Vì vậy, sáu thức trước gọi nó là 'Nhiễm tịnh y' tức là áo nương tựa, chỗ dựa của sự nhiễm ô hay thanh tịnh [2, 4]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-5-mat-na-thuc',
  slug: 'bai-thu-5-mat-na-thuc',
  title: 'Bài Thứ 5 - Mạt na thức',
  type: 'article',
  status: 'published',
  order: 7,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-5-mat-na-thuc/H%C3%A0nh_tr%C3%ACnh_chuy%E1%BB%83n_h%C3%B3a_M%E1%BA%A1t_Na.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-nam-mat-na-thuc', label: 'Bài Thứ Năm - Mạt na thức (Thức thứ bảy)' },
        { id: 'nhung-ten-goi-cua-mat-na-thuc', label: 'Những tên gọi của Mạt na thức', indent: 1 },
        { id: 'doi-tuong-duyen-cua-mat-na-thuc', label: 'Đối tượng duyên của Mạt na thức', indent: 2 },
        { id: 'khi-o-dia-vi-pham-phu', label: 'Khi ở địa vị phàm phu', indent: 1 },
        { id: 'ba-canh-ba-luong-va-ba-tanh', label: 'Ba cảnh, ba lượng và ba tánh', indent: 2 },
        { id: 'ba-gioi-chin-dia-va-tam-so', label: 'Ba giới, chín địa và tâm sở', indent: 2 },
        { id: 'chin-duyen-tanh-tuong-va-nghiep-dung', label: 'Chín duyên, tánh, tướng và nghiệp dụng', indent: 2 },
        { id: 'khi-len-thanh-vi', label: 'Khi lên Thánh vị', indent: 1 },
        { id: 'quan-hanh', label: 'Quán hạnh', indent: 2 },
        { id: 'doan-hoac-va-chuyen-thanh-tri', label: 'Đoạn hoặc và chuyển thành trí', indent: 2 },
        { id: 'chung-qua-va-dieu-dung', label: 'Chứng quả và diệu dụng', indent: 2 },
        { id: 'ba-bai-tung-ve-mat-na-thuc', label: 'Ba bài tụng về Mạt na thức', indent: 1 },
        { id: 'bai-tung-thu-nhat', label: 'Bài tụng thứ nhất', indent: 2 },
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
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-5-mat-na-thuc/M%E1%BA%A1t_na_th%E1%BB%A9c.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/sPgLqMyqqVI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/3eCQPgSJ59FWbEgs2xRUPF?utm_source=generator&si=818c28571a944750',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Mạt na thức',
    passPercentage: 70,
    questions,
  },
}

export default lesson
