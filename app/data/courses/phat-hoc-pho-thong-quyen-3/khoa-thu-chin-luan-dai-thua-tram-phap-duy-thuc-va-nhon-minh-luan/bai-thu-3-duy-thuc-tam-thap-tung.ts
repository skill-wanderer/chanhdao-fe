import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP BA</p>
      <p class="mb-2 font-semibold">DUY THỨC TAM THẬP TỤNG DỊ GIẢI</p>
      <h2 id="bai-thu-ba-duy-thuc-tam-thap-tung-di-giai" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ BA - DUY THỨC TAM THẬP TỤNG DỊ GIẢI</h2>
      <p class="mb-0 italic">Giải về thức Năng biến thứ hai: Mạt na thức, và mở qua thức Năng biến thứ ba là sáu thức trước.</p>
    </div>

    <h3 id="chanh-van-thuc-nang-bien-thu-hai" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: THỨC NĂNG BIẾN THỨ HAI</h3>
    <p><strong>Hỏi:</strong> Trên đã nói thức năng biến thứ nhứt, còn thức năng biến thứ hai thế nào?</p>

    <h4 id="nguyen-van-chu-han-mat-na" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thứ đệ nhị năng biến</p>
        <p>Thị thức danh Mạt na</p>
        <p>Y bỉ chuyển, duyên bỉ</p>
        <p>Tư lương vi tánh tướng.</p>
      </div>
    </div>

    <h4 id="dich-nghia-mat-na" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói tụng để trả lời rằng: Thức năng biến thứ hai tên là Mạt na. Thức này do thức A lại da sanh ra, rồi trở lại duyên thức A lại da chấp làm ngã. Tánh và tướng của nó thường lo nghĩ.</p>

    <h4 id="luoc-giai-mat-na" class="text-lg font-semibold">Lược giải</h4>
    <p>Trước đã nói thức Năng biến thứ nhứt, tiếp theo đây nói thức Năng biến thứ hai, tức là thức thứ Bảy. Tiếng Phạn gọi là Mạt na, Tàu dịch là Ý. Thức này là "Căn" của ý thức, chứ không phải ý thức thứ Sáu.</p>
    <p>Thức này nương thức A lại da sanh khởi, rồi trở lại duyên thức A lại da chấp làm ngã. Cũng như cái tay từ nơi thân sanh ra, rồi trở lại hộ vệ cái thân. Vì thức này tánh hay lo nghĩ, nên hiện ra tướng trạng bên ngoài cũng lo nghĩ.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Thức Mạt na trong ba ý chính</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Vị trí:</strong> thức thứ Bảy, tức thức Năng biến thứ hai.</li>
        <li><strong>Chỗ nương:</strong> nương thức A lại da mà sanh khởi.</li>
        <li><strong>Tác dụng:</strong> duyên lại thức A lại da rồi chấp làm ngã.</li>
      </ul>
    </div>

    <h3 id="bon-mon-phien-nao-thuong-cau" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">BỐN MÓN PHIỀN NÃO THƯỜNG CÂU</h3>

    <h4 id="nguyen-van-chu-han-bon-phien-nao" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Tứ phiền não thường câu</p>
        <p>Vị: ngã si, ngã kiến</p>
        <p>Tịnh ngã mạn, ngã ái</p>
        <p>Cập dư xúc đẳng câu.</p>
      </div>
    </div>

    <h4 id="dich-nghia-bon-phien-nao" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Bốn món phiền não thường chung cùng với thức này là: Ngã si, Ngã kiến, Ngã mạn, Ngã ái. Ngoài ra thức này còn tương ưng với các Tâm sở như: Xúc, Tác ý, v.v...</p>

    <h4 id="luoc-giai-bon-phien-nao" class="text-lg font-semibold">Lược giải</h4>
    <p>Những Tâm sở thường tương ưng với thức này, là bốn món phiền não: Ngã si, Ngã kiến, Ngã mạn và Ngã ái.</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Ngã si:</strong> si mê cái Ngã.</li>
      <li><strong>Ngã kiến:</strong> chấp cái Ngã.</li>
      <li><strong>Ngã mạn:</strong> đề cao cái Ngã của mình để khinh mạn người.</li>
      <li><strong>Ngã ái:</strong> tham ái cái Ngã.</li>
    </ol>
    <p>Bởi thức Mạt na thường chấp thức A lại da làm Ngã, nên bốn món phiền não tương ưng với thức này cũng đều do cái Ngã mà sanh. Vì thế trên mỗi món phiền não lại thêm chữ Ngã.</p>
    <p>Ngoài bốn món phiền não trên, lại còn có các Tâm sở, như năm món Biến hành và tuỳ phiền não, cũng tương ưng với thức này; nhưng không phải thường có như bốn món phiền não trên.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Các Tâm sở tương ưng với thức này</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Thường chung khởi:</strong> Si, Kiến, Mạn, Ái.</li>
        <li><strong>Không thường chung khởi:</strong> năm món Biến hành, Tuỳ phiền não, v.v...</li>
      </ul>
    </div>

    <h3 id="huu-phu-vo-ky" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">HỮU PHÚ VÔ KÝ</h3>

    <h4 id="nguyen-van-chu-han-huu-phu-vo-ky" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Hữu phú vô ký nhiếp</p>
        <p>Tuỳ sở sanh sở hệ</p>
        <p>A la hán, Diệt định</p>
        <p>Xuất thế đạo vô hữu</p>
      </div>
    </div>

    <h4 id="dich-nghia-huu-phu-vo-ky" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Tánh của thức này là "hữu phú vô ký". Tuỳ thức A lại da sanh về cảnh giới nào, thì thức này theo đó mà chấp Ngã. Khi chứng A la hán, nhập Diệt tận định và được vào Đạo xuất thế, thì không còn thức này.</p>

    <h4 id="luoc-giai-huu-phu-vo-ky" class="text-lg font-semibold">Lược giải</h4>
    <p>Vì bốn món phiền não ngăn che, nên tánh của thức Mạt na thuộc về hữu phú vô ký. Lại nữa, vì thức này do thức A lại da sanh ra, nên tuỳ theo thức A lại da sanh về cõi nào, thì nó theo chấp ngã ở cõi đó.</p>
    <p><strong>Hỏi:</strong> Người tu hành phải đến địa vị nào mới đoạn được Ngã chấp và không còn thức Mạt na?</p>
    <p><strong>Đáp:</strong> Có ba địa vị:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Đến địa vị A la hán:</strong> vì vị này đã xả tàng thức, nên thức Mạt na không còn chấp Ngã.</li>
      <li><strong>Nhập Diệt tận định:</strong> vì định này diệt hết các Tâm vương và Tâm sở của bảy thức trước.</li>
      <li><strong>Đạo xuất thế:</strong> hành giả khi đặng cái trí hiểu biết chơn vô ngã và đặng trí vô lậu hậu đắc, thì không còn thức Mạt na.</li>
    </ol>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Ba địa vị không có Mạt na tạp nhiễm</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>A la hán:</strong> xả Tàng thức, không còn Mạt na chấp Ngã.</li>
        <li><strong>Diệt tận định:</strong> diệt hết Tâm vương, Tâm sở của sáu thức trước và diệt các Tâm sở về phần tạp nhiễm của thức Mạt na.</li>
        <li><strong>Đạo xuất thế:</strong> được trí hiểu biết chơn vô ngã, đặng trí vô lậu hậu đắc.</li>
      </ul>
    </div>

    <h3 id="chanh-van-thuc-nang-bien-thu-ba" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: THỨC NĂNG BIẾN THỨ BA</h3>
    <p><strong>Hỏi:</strong> Như vậy đã nói thức năng biến thứ hai, còn thức năng biến thứ ba thế nào?</p>

    <h4 id="nguyen-van-chu-han-luc-thuc" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thứ đệ tam năng biến</p>
        <p>Sai biệt hữu lục chủng</p>
        <p>Liễu cảnh vi tánh tướng</p>
        <p>Thiện, bất thiện, câu phi.</p>
      </div>
    </div>

    <h4 id="dich-nghia-luc-thuc" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói tụng để trả lời rằng: Thức năng biến thứ ba có sáu món sai khác. Tánh và tướng của thức này đều phân biệt cảnh (liễu cảnh). Thức này đủ cả ba tánh: thiện, ác và vô ký.</p>

    <h4 id="luoc-giai-luc-thuc" class="text-lg font-semibold">Lược giải</h4>
    <p>Thức năng biến thứ ba có sáu món: Nhãn thức, Nhĩ thức, Tỹ thức, Thiệt thức, Thân thức và Ý thức.</p>
    <p>Trong tám thức, thức nào cũng đều phân biệt cảnh; song thức thứ Bảy và thức thứ Tám chỉ phân biệt cảnh tế, còn sáu thức trước lại phân biệt cảnh thô. Vì vậy trong bài tụng nói: tánh tướng nó đều phân biệt cảnh.</p>
    <p>Cũng như mặt trời mặt trăng sáng suốt chiếu soi khắp thiên hạ. Mặt trời mặt trăng sáng suốt là dụ cho bản tánh của thức này; còn chiếu soi là dụ cho tướng dụng của thức này.</p>
    <p>Sáu thức này đủ cả ba tánh: thiện, ác và vô ký.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Sáu thức trước</p>
      <ol class="mb-0 list-decimal space-y-1 pl-6">
        <li>Nhãn thức</li>
        <li>Nhĩ thức</li>
        <li>Tỹ thức</li>
        <li>Thiệt thức</li>
        <li>Thân thức</li>
        <li>Ý thức</li>
      </ol>
    </div>

    <h3 id="tam-so-tuong-ung-voi-luc-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">TÂM SỞ TƯƠNG ƯNG VỚI SÁU THỨC</h3>

    <h4 id="nguyen-van-chu-han-tam-so-luc-thuc" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thử Tâm sở biến hành</p>
        <p>Biệt cảnh, thiện, phiền não</p>
        <p>Tuỳ phiền não bất định</p>
        <p>Giai tam thọ tương ưng</p>
      </div>
    </div>

    <h4 id="dich-nghia-tam-so-luc-thuc" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Những Tâm sở tương ưng với thức này gồm: Biến hành, Biệt cảnh, Thiện, Căn bản phiền não, Tuỳ phiền não, Bất định và ba thọ.</p>

    <h4 id="luoc-giai-tam-so-luc-thuc" class="text-lg font-semibold">Lược giải</h4>
    <p>Tâm sở do Tâm vương đặt để, cũng như các quan do vua sắp đặt, như một vị quan lớn có bao nhiêu nhơn viên. Tâm sở cũng thế, tất cả 51 món phân làm sáu loại.</p>
    <p>Nay xin liệt kê sau đây:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Biến hành:</strong> có 5 món.</li>
      <li><strong>Biệt cảnh:</strong> có 5 món.</li>
      <li><strong>Thiện:</strong> có 11 món.</li>
      <li><strong>Căn bản phiền não:</strong> có 6 món.</li>
      <li><strong>Tuỳ phiền não:</strong> có 20 món.</li>
      <li><strong>Bất định:</strong> có 4 món.</li>
    </ul>
    <p>Ba thọ là: khổ thọ, lạc thọ và xả thọ. Tóm lại, thức này tương ưng với 51 món Tâm sở và ba thọ.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Thức năng biến thứ hai trong Duy Thức học có tên gọi là gì?",
    "options": {
      "a": "Thức A-lại-da",
      "b": "Nhãn thức",
      "c": "Ý thức",
      "d": "Thức Mạt-na"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. A-lại-da là thức năng biến thứ nhất, là nơi mà thức Mạt-na nương vào để sinh khởi [1, 2].",
      "b": "Sai. Nhãn thức là một trong sáu món thuộc thức năng biến thứ ba [3].",
      "c": "Sai. Ý thức (thức thứ 6) thuộc thức năng biến thứ ba. Mạt-na chỉ là căn của ý thức chứ không phải ý thức [1, 4].",
      "d": "Đúng. Thức năng biến thứ hai có tên là Mạt-na, tiếng Hán dịch là Ý [1, 4]."
    }
  },
  {
    "question": "Mối quan hệ giữa thức Mạt-na và thức A-lại-da được ví dụ như thế nào trong bài học?",
    "options": {
      "a": "Như mặt trời chiếu soi khắp thế gian",
      "b": "Như nhà vua và các quan đại thần",
      "c": "Như cái tay từ nơi thân sinh ra rồi quay lại hộ vệ thân",
      "d": "Như gương sáng soi bóng vạn vật"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Mặt trời mặt trăng sáng suốt chiếu soi là ví dụ cho bản tánh và tướng dụng của thức năng biến thứ ba [3].",
      "b": "Sai. Nhà vua và các quan được dùng làm ví dụ cho sự sắp đặt Tâm vương và Tâm sở [5].",
      "c": "Đúng. Thức Mạt-na nương A-lại-da sinh khởi rồi duyên lại A-lại-da chấp làm ngã, giống như cái tay từ nơi thân sinh ra rồi trở lại hộ vệ cái thân [2, 4].",
      "d": "Sai. Không có hình ảnh ví dụ này trong tài liệu [1, 2, 4]."
    }
  },
  {
    "question": "Bốn món phiền não luôn đi kèm (tương ưng) với thức Mạt-na là gì?",
    "options": {
      "a": "Xúc, Tác ý, Thọ, Tưởng",
      "b": "Tham, Sân, Si, Mạn",
      "c": "Ngã si, Ngã kiến, Ngã mạn, Ngã ái",
      "d": "Khổ thọ, Lạc thọ, Xả thọ"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Xúc và Tác ý cũng là các Tâm sở tương ưng nhưng không nằm trong bốn món phiền não [2, 6].",
      "b": "Sai. Dù cũng là phiền não, nhưng tài liệu chỉ đích danh 4 món phiền não của Mạt-na đều gắn với chữ 'Ngã' [6].",
      "c": "Đúng. Bốn món phiền não thường chung cùng với thức này là Ngã si, Ngã kiến, Ngã mạn và Ngã ái [2, 6].",
      "d": "Sai. Đây là ba loại thọ (cảm giác) tương ưng với thức năng biến thứ ba [5, 7]."
    }
  },
  {
    "question": "Tại sao tánh của thức Mạt-na được gọi là 'Hữu phú vô ký'?",
    "options": {
      "a": "Vì bị bốn món phiền não ngăn che nhưng không thuộc tánh thiện hay ác",
      "b": "Vì nó là căn bản để sinh ra các nghiệp thiện",
      "c": "Vì nó có khả năng phân biệt rõ ràng các thiện ác trên thế gian",
      "d": "Vì nó hoàn toàn thanh tịnh và không có sai lầm"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Tánh của thức Mạt-na thuộc về 'hữu phú vô ký' vì nó bị bốn món phiền não ngăn che [8, 9]. (Vô ký nghĩa là không mang tánh thiện hay ác rõ rệt).",
      "b": "Sai. Nó bị ngăn che bởi phiền não, không phải là căn bản sinh ra nghiệp thiện [9].",
      "c": "Sai. Khả năng phân biệt thiện ác không phải là lý do để gọi là hữu phú vô ký, và thức năng biến thứ ba mới có đủ ba tánh thiện, ác, vô ký [3, 5].",
      "d": "Sai. Thức này có phần tạp nhiễm (Mạt-na tạp nhiễm) bị chi phối bởi phiền não, không phải hoàn toàn thanh tịnh [9, 10]."
    }
  },
  {
    "question": "Thức Mạt-na sẽ không còn hiện hành trong những trường hợp hoặc địa vị nào?",
    "options": {
      "a": "Khi chứng quả Tu-đà-hoàn",
      "b": "Khi đang tập trung suy nghĩ về một vấn đề",
      "c": "Khi đang ngủ không mộng mị",
      "d": "A-la-hán, Diệt tận định, Đạo xuất thế"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Quả Tu-đà-hoàn không được nhắc đến trong các điều kiện làm tiêu biến thức Mạt-na trong văn bản [8-10].",
      "b": "Sai. Tập trung suy nghĩ thuộc về chức năng của Ý thức, không làm mất đi Mạt-na [3].",
      "c": "Sai. Ngủ say không mộng mị không nằm trong ba địa vị đoạn trừ được Mạt-na [8-10].",
      "d": "Đúng. Hành giả sẽ không còn thức Mạt-na khi chứng A-la-hán, nhập Diệt tận định và được vào Đạo xuất thế [8-10]."
    }
  },
  {
    "question": "Thức năng biến thứ ba bao gồm bao nhiêu món sai khác?",
    "options": {
      "a": "Sáu món (Lục thức)",
      "b": "Năm mươi mốt món",
      "c": "Tám món (Bát thức)",
      "d": "Năm món (Ngũ thức)"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Thức năng biến thứ ba có sáu món bao gồm: Nhãn thức, Nhĩ thức, Tỷ thức, Thiệt thức, Thân thức và Ý thức [3, 10].",
      "b": "Sai. Năm mươi mốt (51) món là tổng số các loại Tâm sở [5, 7].",
      "c": "Sai. Tám món (8 thức) là tổng các loại thức trong Duy Thức học [3].",
      "d": "Sai. Thức năng biến thứ ba bao gồm sáu món, không phải năm món [3, 10]."
    }
  },
  {
    "question": "Đặc điểm chung về 'tánh tướng' của thức năng biến thứ ba là gì?",
    "options": {
      "a": "Liễu cảnh (phân biệt cảnh rõ rệt)",
      "b": "Chỉ có tánh ác",
      "c": "Tư lương (lo nghĩ vi tế)",
      "d": "Tàng trữ (chứa nhóm hạt giống)"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Tánh và tướng của thức năng biến thứ ba đều là phân biệt cảnh (liễu cảnh) [3, 10].",
      "b": "Sai. Sáu thức này có đủ cả 3 tánh là thiện, ác, và vô ký [5].",
      "c": "Sai. 'Tư lương' (lo nghĩ) là tánh tướng của thức năng biến thứ hai (Mạt-na) [1].",
      "d": "Sai. Tàng trữ (chứa nhóm) là chức năng của Tàng thức (A-lại-da) [9, 10]."
    }
  },
  {
    "question": "Điểm khác biệt về đối tượng phân biệt giữa sáu thức trước và thức thứ bảy, tám là gì?",
    "options": {
      "a": "Sáu thức trước không phân biệt cảnh, thức bảy và tám mới phân biệt",
      "b": "Sáu thức trước phân biệt theo tánh ác, thức bảy và tám theo tánh thiện",
      "c": "Sáu thức trước phân biệt nội tâm, thức bảy và tám phân biệt ngoại cảnh",
      "d": "Sáu thức trước phân biệt cảnh thô, thức bảy và tám phân biệt cảnh tế"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Trong cả 8 thức, thức nào cũng đều có tính năng phân biệt cảnh [3].",
      "b": "Sai. Cả 6 thức trước đều bao gồm đủ 3 tánh: thiện, ác, và vô ký [3, 5].",
      "c": "Sai. Sự khác biệt về nội tâm hay ngoại cảnh không được đề cập tới làm điểm phân tách ở đây [3].",
      "d": "Đúng. Trong khi thức thứ Bảy và Tám chỉ phân biệt cảnh tế, thì sáu thức trước lại làm nhiệm vụ phân biệt cảnh thô [3]."
    }
  },
  {
    "question": "Có bao nhiêu món Tâm sở tương ưng với thức năng biến thứ ba?",
    "options": {
      "a": "11 món",
      "b": "20 món",
      "c": "51 món",
      "d": "4 món"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. 11 món chỉ là số lượng của riêng các Tâm sở Thiện [7].",
      "b": "Sai. 20 món chỉ là số lượng của riêng các loại Tùy phiền não [7].",
      "c": "Đúng. Thức năng biến thứ ba tương ưng với tất cả 51 món tâm sở (được chia làm 6 loại) [5, 7].",
      "d": "Sai. 4 món chỉ là số lượng của riêng các tâm sở Bất định [7]."
    }
  },
  {
    "question": "Ba thọ mà thức năng biến thứ ba tương ưng bao gồm những gì?",
    "options": {
      "a": "Nhãn thọ, Nhĩ thọ, Tỷ thọ",
      "b": "Thiện thọ, Ác thọ, Vô ký thọ",
      "c": "Khổ thọ, Lạc thọ, Xả thọ",
      "d": "Sinh thọ, Lão thọ, Tử thọ"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Nhãn, Nhĩ, Tỷ là tên các thức, không phải các loại thọ [3].",
      "b": "Sai. Thiện, ác, vô ký là tên của ba tánh, không phải ba thọ [3, 5].",
      "c": "Đúng. Ba thọ tương ưng với thức này bao gồm khổ thọ, lạc thọ, và xả thọ [5, 7].",
      "d": "Sai. Khái niệm này không tồn tại trong phần nội dung về Tâm sở của bài học [7]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-3-duy-thuc-tam-thap-tung',
  slug: 'bai-thu-3-duy-thuc-tam-thap-tung',
  title: 'Bài Thứ 3 - Duy Thức Tam Thập Tụng Dị Giải',
  type: 'article',
  status: 'draft',
  order: 21,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-07',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-3/T%C3%ACm_Hi%E1%BB%83u_Duy_Th%E1%BB%A9c_H%E1%BB%8Dc.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-ba-duy-thuc-tam-thap-tung-di-giai', label: 'Bài Thứ Ba - Duy Thức Tam Thập Tụng Dị Giải' },
        { id: 'chanh-van-thuc-nang-bien-thu-hai', label: 'Chánh văn: thức năng biến thứ hai', indent: 1 },
        { id: 'nguyen-van-chu-han-mat-na', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-mat-na', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-mat-na', label: 'Lược giải', indent: 2 },
        { id: 'bon-mon-phien-nao-thuong-cau', label: 'Bốn món phiền não thường câu', indent: 1 },
        { id: 'nguyen-van-chu-han-bon-phien-nao', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-bon-phien-nao', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-bon-phien-nao', label: 'Lược giải', indent: 2 },
        { id: 'huu-phu-vo-ky', label: 'Hữu phú vô ký', indent: 1 },
        { id: 'nguyen-van-chu-han-huu-phu-vo-ky', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-huu-phu-vo-ky', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-huu-phu-vo-ky', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-thuc-nang-bien-thu-ba', label: 'Chánh văn: thức năng biến thứ ba', indent: 1 },
        { id: 'nguyen-van-chu-han-luc-thuc', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-luc-thuc', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-luc-thuc', label: 'Lược giải', indent: 2 },
        { id: 'tam-so-tuong-ung-voi-luc-thuc', label: 'Tâm sở tương ưng với sáu thức', indent: 1 },
        { id: 'nguyen-van-chu-han-tam-so-luc-thuc', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-tam-so-luc-thuc', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-tam-so-luc-thuc', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-3/Mind_Architecture.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/GP9_L8xbFFU',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/1UX8HrkYe2v5UGYjiY6zY3?utm_source=generator&si=970e9a21e2664da2',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Duy Thức Tam Thập Tụng Dị Giải Bài 3',
    passPercentage: 70,
    questions,
  },
}

export default lesson
