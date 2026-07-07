import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-10b-tam-bat-tuong-ung-hanh-phap" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ 10b - IV. TÂM BẤT TƯƠNG ƯNG HÀNH PHÁP (CÓ 24 MÓN)</h2>
    </div>

    <h3 id="tong-quan-tam-bat-tuong-ung-hanh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tổng quan về Tâm bất tương ưng hành</h3>
    <p>Tâm bất tương ưng hành pháp, gọi tắt là "Bất tương ưng hành". Chữ "Hành pháp" là những pháp thuộc về "Hành uẩn". Hành uẩn là một trong năm uẩn.</p>
    <p>Chữ "Hành" là sanh diệt dời đổi; chữ "Uẩn" là chứa nhóm.</p>

    <h3 id="hai-loai-hanh-uan" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Hai loại Hành uẩn</h3>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <ul class="mb-0 list-disc space-y-3 pl-6">
        <li><strong>Tương ưng hành uẩn:</strong> tức là các tâm sở (51 món). Chữ "Tương ưng" là ưng thuận với Tâm Vương.</li>
        <li><strong>Bất tương ưng hành uẩn:</strong> tức là 24 món "Bất tương ưng hành" sau đây; 24 món này không tương ưng với tâm, chúng chỉ y ba phần: Tâm Vương, tâm sở và sắc pháp mà giả thành lập (<em>Tam, phận vị sai biệt cố</em>).</li>
      </ul>
    </div>

    <h3 id="hai-muoi-bon-mon-bat-tuong-ung-hanh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Hai mươi bốn món Bất tương ưng hành</h3>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Đắc</li>
      <li>Mạng căn</li>
      <li>Chánh đồng phận</li>
      <li>Dị sanh tánh</li>
      <li>Vô tưởng định</li>
      <li>Diệt tận định</li>
      <li>Vô tưởng báo</li>
      <li>Danh thân</li>
      <li>Cú thân</li>
      <li>Văn thân</li>
      <li>Sanh</li>
      <li>Trụ</li>
      <li>Lão</li>
      <li>Vô thường</li>
      <li>Lưu chuyển</li>
      <li>Định vị</li>
      <li>Tương ưng</li>
      <li>Thế tốc</li>
      <li>Thứ đệ</li>
      <li>Thời</li>
      <li>Phương</li>
      <li>Số</li>
      <li>Hòa hợp tánh</li>
      <li>Bất hòa hợp tánh</li>
    </ol>

    <h3 id="nhom-gia-lap-tren-ba-phan" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Nhóm giả lập trên ba phần</h3>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Đắc:</strong> Được, trái với mất. Thí như "Tôi được đồng xu", cố nhiên phải có đồng xu là "sắc pháp", và nhãn thức để thấy, ý thức để phân biệt là tâm pháp, cùng với các tâm sở chung khởi là tâm sở pháp; phải đủ cả ba phần như thế, mới thành nghĩa "được".</li>
      <li><strong>Mạng căn:</strong> Thân mạng. Do nghiệp đời trước kéo dẫn, làm cho thần thức thọ thân, sống trong một thời gian hoặc lâu hay mau, gọi là "mạng căn".</li>
      <li><strong>Chánh đồng phận:</strong> Cũng như chữ "đồng loại". Các loại chúng sanh hoặc hữu tình hay vô tình, loài nào đồng với loài nấy. Như loài người đồng với người; loài vật đồng với vật.</li>
      <li><strong>Dị sanh tánh:</strong> Những loài sanh ra khác với Thánh nhơn, tức là phàm phu; chỗ khác gọi "Phi đắc": Chúng phàm phu không được Thánh quả. Bởi thế nên gọi "Dị sanh tánh" hay "phi đắc" đều được cả.</li>
    </ul>

    <h3 id="nhom-dinh-va-qua-bao" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Nhóm định và quả báo</h3>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Vô tưởng định:</strong> Định này diệt hết các tâm vương và tâm sở của 6 thức trước. Song đây chỉ gọi "Vô tưởng" là vì "tưởng" làm chủ động vậy.</li>
      <li><strong>Diệt tận định:</strong> Định này không những diệt hết các tâm vương và tâm sở của 6 thức trước, mà diệt luôn cả phần tạp nhiễm của tâm vương tâm sở về thức thứ Bảy.</li>
      <li><strong>Vô tưởng báo:</strong> Người ở cõi Dục tu Vô tưởng định, sau khi mạng chung, đặng báo thân ở cõi trời Vô tưởng.</li>
    </ul>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 font-semibold text-primary-700 dark:text-primary-300">Phân biệt hai loại định</p>
      <p class="mb-2">Vô tưởng định là định của phàm phu; còn Diệt tận định là định của Thánh nhơn.</p>
      <p class="mb-0">Điểm khác nhau là Diệt tận định diệt luôn cả phần tạp nhiễm nơi thức thứ Bảy, còn Vô tưởng định chỉ diệt các tâm vương và tâm sở của 6 thức trước.</p>
    </div>

    <h3 id="nhom-danh-cu-van" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Nhóm Danh thân, Cú thân, Văn thân</h3>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Danh thân:</strong> Tên hay danh từ. Có danh từ đơn và danh từ kép.</li>
      <li><strong>Cú thân:</strong> Câu. Do ráp nhiều tiếng thành câu; câu có ngắn và dài.</li>
      <li><strong>Văn thân:</strong> Chữ. Chữ là chỗ y chỉ của danh từ và câu.</li>
    </ul>

    <h3 id="nhom-sanh-tru-lao-vo-thuong" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Nhóm Sanh, Trụ, Lão, Vô thường</h3>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Sanh:</strong> Sanh ra. Nghĩa là từ hồi nào đến giờ không có, nay mới có.</li>
      <li><strong>Trụ:</strong> Ở. Những vật đã sanh ra rồi, còn lưu lại trong một thời gian, chưa diệt.</li>
      <li><strong>Lão:</strong> Già, suy yếu gần chết.</li>
      <li><strong>Vô thường:</strong> Không thường, biệt danh của chết.</li>
    </ul>

    <h3 id="nhom-nhan-qua-va-tuong-ung" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Nhóm nhân quả và tương ưng</h3>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Lưu chuyển:</strong> Xoay vần, nhơn quả trước sau nối nhau không dứt.</li>
      <li><strong>Định vị:</strong> Nhơn quả lành, dữ khác nhau, không lộn lạo.</li>
      <li><strong>Tương ưng:</strong> Ưng thuận với nhau. Như nhơn nào quả nấy, cân xứng với nhau.</li>
    </ul>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold text-secondary-700 dark:text-secondary-300">Hỏi đáp về món "Tương ưng"</p>
      <p><strong>Hỏi:</strong> Cả 24 món, đều gọi là "Bất tương ưng hành" tại sao món thứ 17 này lại gọi là "Tương ưng"?</p>
      <p class="mb-0"><strong>Đáp:</strong> Nói "Bất tương ưng" là để phân biệt 24 món này, không phải là tương ưng tâm sở; còn về món thứ 17 này mà gọi là "Tương ưng", là do Sắc, Tâm và Tâm sở hòa hợp mà nói, nên không đồng với "Tương ưng tâm sở" trước.</p>
    </div>

    <h3 id="nhom-the-gian-va-so-luong" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Nhóm thế gian, thời-không và số lượng</h3>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Thế tốc:</strong> Các pháp hữu vi xoay vần mau lẹ như chong chóng.</li>
      <li><strong>Thứ đệ:</strong> Thứ lớp, trật tự không có lộn lạo.</li>
      <li><strong>Thời:</strong> Thời gian: quá khứ, hiện tại và vị lai.</li>
      <li><strong>Phương:</strong> Không gian: Đông, Tây, Nam, Bắc, tứ duy, thượng hạ.</li>
      <li><strong>Số:</strong> Số lượng. Như: một, hai, ba, bốn cho đến trăm, ngàn...</li>
      <li><strong>Hòa hợp tánh:</strong> Các duyên hòa hợp không có trái nhau.</li>
      <li><strong>Bất hòa hợp tánh:</strong> Những pháp chống trái, không hòa hợp với nhau.</li>
    </ul>

    <h3 id="tong-ket-huu-vi-vo-vi" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tổng kết hữu vi và vô vi</h3>
    <p>Nói tóm lại, từ trước đến đây đã kể 94 pháp: 8 món Tâm vương, 51 món Tâm sở, 11 món Sắc pháp, 24 món Bất tương ưng hành, đều thuộc về pháp hữu vi có sanh diệt biến đổi. Sáu pháp sau đây thuộc về vô vi.</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Hữu vi:</strong> những gì có tạo tác, có sanh diệt, không thường còn.</li>
        <li><strong>Vô vi:</strong> những gì không tạo tác, không sanh diệt, không tăng giảm, vắng lặng thường còn.</li>
      </ul>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Trong khái niệm 'Hành uẩn', hai chữ 'Hành' và 'Uẩn' được định nghĩa như thế nào?",
    "options": {
      "a": "'Hành' là sự vận hành của tâm; 'Uẩn' là các tầng tâm thức.",
      "b": "'Hành' là tu hành; 'Uẩn' là công đức tích lũy.",
      "c": "'Hành' là hành động của thân; 'Uẩn' là kết quả của nghiệp.",
      "d": "'Hành' là sanh diệt dời đổi; 'Uẩn' là chứa nhóm."
    },
    "answer": "d",
    "explanation": {
      "d": "Đúng. Theo tài liệu, chữ 'Hành' là sanh diệt dời đổi; chữ 'Uẩn' là chứa nhóm [1]."
    }
  },
  {
    "question": "Tại sao 24 pháp 'Bất tương ưng hành' lại được gọi là 'giả lập'?",
    "options": {
      "a": "Vì chúng là những ảo tưởng của phàm phu khi chưa chứng đắc.",
      "b": "Vì chúng chỉ tồn tại trong các cõi trời Vô tưởng.",
      "c": "Vì chúng chỉ y vào ba phần: Tâm Vương, tâm sở và sắc pháp mà thành lập.",
      "d": "Vì chúng không có tính chất sanh diệt dời đổi."
    },
    "answer": "c",
    "explanation": {
      "c": "Đúng. 24 món này không tương ưng với tâm, chúng chỉ y ba phần: Tâm Vương, tâm sở và sắc pháp mà giả thành lập [1]."
    }
  },
  {
    "question": "Để thành lập nghĩa của chữ 'Đắc' (được), cần phải hội đủ những yếu tố nào?",
    "options": {
      "a": "Phải có sắc pháp, tâm pháp (nhãn thức, ý thức) và các tâm sở chung khởi.",
      "b": "Chỉ cần có sắc pháp và sự hiện diện của đối tượng.",
      "c": "Chỉ cần có ý chí muốn sở hữu một vật cụ thể.",
      "d": "Phải có phước đức từ đời trước và sự nỗ lực hiện tại."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Phải đủ cả ba phần: sắc pháp, tâm pháp (nhãn thức để thấy, ý thức để phân biệt) cùng với các tâm sở chung khởi thì mới thành nghĩa 'được' [2]."
    }
  },
  {
    "question": "Sự khác biệt chính giữa 'Vô tưởng định' và 'Diệt tận định' là gì?",
    "options": {
      "a": "Vô tưởng định diệt 6 thức trước; Diệt tận định diệt luôn phần tạp nhiễm của thức thứ Bảy.",
      "b": "Vô tưởng định chỉ kéo dài trong thời gian ngắn hơn Diệt tận định.",
      "c": "Vô tưởng định là định có hình dáng; Diệt tận định là định không hình dáng.",
      "d": "Vô tưởng định dành cho Thánh nhân; Diệt tận định dành cho phàm phu."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Vô tưởng định diệt tâm vương và tâm sở của 6 thức trước. Còn Diệt tận định diệt luôn cả phần tạp nhiễm của tâm vương tâm sở về thức thứ Bảy [3]."
    }
  },
  {
    "question": "Trong ba món Danh thân, Cú thân và Văn thân, yếu tố nào đóng vai trò là 'chỗ y chỉ' cho hai yếu tố còn lại?",
    "options": {
      "a": "Danh thân",
      "b": "Tâm Vương",
      "c": "Văn thân",
      "d": "Cú thân"
    },
    "answer": "c",
    "explanation": {
      "c": "Đúng. Văn thân (chữ) là chỗ y chỉ của danh từ (Danh thân) và câu (Cú thân) [4]."
    }
  },
  {
    "question": "Tại sao món thứ 17 là 'Tương ưng' lại nằm trong danh sách các pháp 'Bất tương ưng'?",
    "options": {
      "a": "Vì nó không có tính chất sanh diệt dời đổi như các món khác.",
      "b": "Vì nó chỉ tương ưng với các bậc Thánh đã đắc quả.",
      "c": "Vì tên gọi của nó bị đặt nhầm trong quá trình biên soạn.",
      "d": "Vì nó là sự hòa hợp của Sắc, Tâm và Tâm sở, không chỉ riêng tương ưng với tâm sở."
    },
    "answer": "d",
    "explanation": {
      "d": "Đúng. Món thứ 17 gọi là 'Tương ưng' là do Sắc, Tâm và Tâm sở hòa hợp mà nói, nên không đồng với 'Tương ưng tâm sở' trước đó [5]."
    }
  },
  {
    "question": "Định nghĩa nào sau đây đúng về 'Mạng căn' theo nguồn tài liệu?",
    "options": {
      "a": "Là sự kết hợp giữa danh từ và câu chữ để hiểu đạo lý.",
      "b": "Là trạng thái không còn sanh diệt, vắng lặng thường còn.",
      "c": "Do nghiệp đời trước kéo dẫn, làm cho thần thức thọ thân và sống trong một thời gian.",
      "d": "Là khả năng suy nghĩ và phân biệt của ý thức."
    },
    "answer": "c",
    "explanation": {
      "c": "Đúng. Mạng căn là do nghiệp đời trước kéo dẫn, làm cho thần thức thọ thân, sống trong một thời gian hoặc lâu hay mau [2]."
    }
  },
  {
    "question": "'Dị sanh tánh' còn được gọi bằng tên khác là gì và mang ý nghĩa gì?",
    "options": {
      "a": "Gọi là 'Vô thường', nghĩa là sự chết.",
      "b": "Gọi là 'Thế tốc', nghĩa là sự vận hành mau lẹ.",
      "c": "Gọi là 'Chánh đồng phận', nghĩa là các loài giống nhau.",
      "d": "Gọi là 'Phi đắc', nghĩa là phàm phu không được Thánh quả."
    },
    "answer": "d",
    "explanation": {
      "d": "Đúng. Dị sanh tánh còn gọi là 'Phi đắc', ý chỉ chúng phàm phu không được Thánh quả [3]."
    }
  },
  {
    "question": "Sự khác biệt cơ bản giữa pháp 'Hữu vi' và pháp 'Vô vi' là gì?",
    "options": {
      "a": "Hữu vi là những pháp thiện; Vô vi là những pháp ác.",
      "b": "Hữu vi dành cho người tu hành; Vô vi dành cho người thế gian.",
      "c": "Hữu vi có tạo tác và sanh diệt; Vô vi không tạo tác và không sanh diệt.",
      "d": "Hữu vi thuộc về tâm; Vô vi thuộc về sắc pháp."
    },
    "answer": "c",
    "explanation": {
      "c": "Đúng. 'Hữu vi' là những gì có tạo tác, có sanh diệt, không thường còn. 'Vô vi' là những gì không tạo tác, không sanh diệt, không tăng giảm, vắng lặng thường còn [6]."
    }
  },
  {
    "question": "Trong 24 món Bất tương ưng hành, khái niệm 'Thứ đệ' ám chỉ điều gì?",
    "options": {
      "a": "Sự không hòa hợp, chống trái nhau.",
      "b": "Thứ lớp, trật tự không có lộn lạo.",
      "c": "Sự xoay vần mau lẹ như chong chóng.",
      "d": "Nhân quả lành dữ khác nhau, không lộn lạo."
    },
    "answer": "b",
    "explanation": {
      "b": "Đúng. Thứ đệ có nghĩa là thứ lớp, trật tự không có lộn lạo [5]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-10b-tam-bat-tuong-ung-hanh-phap',
  slug: 'bai-thu-10b-tam-bat-tuong-ung-hanh-phap',
  title: 'Bài Thứ 10b - IV. Tâm bất tương ưng hành pháp',
  type: 'article',
  status: 'published',
  order: 13,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-06',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10b-tam-bat-tuong-ung-hanh-phap/24_T%C3%A2m_B%E1%BA%A5t_T%C6%B0%C6%A1ng_%C6%AFng.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-10b-tam-bat-tuong-ung-hanh-phap', label: 'Bài Thứ 10b - IV. Tâm bất tương ưng hành pháp (có 24 món)' },
        { id: 'tong-quan-tam-bat-tuong-ung-hanh', label: 'Tổng quan về Tâm bất tương ưng hành', indent: 1 },
        { id: 'hai-loai-hanh-uan', label: 'Hai loại Hành uẩn', indent: 1 },
        { id: 'hai-muoi-bon-mon-bat-tuong-ung-hanh', label: 'Hai mươi bốn món Bất tương ưng hành', indent: 1 },
        { id: 'nhom-gia-lap-tren-ba-phan', label: 'Nhóm giả lập trên ba phần', indent: 1 },
        { id: 'nhom-dinh-va-qua-bao', label: 'Nhóm định và quả báo', indent: 1 },
        { id: 'nhom-danh-cu-van', label: 'Nhóm Danh thân, Cú thân, Văn thân', indent: 1 },
        { id: 'nhom-sanh-tru-lao-vo-thuong', label: 'Nhóm Sanh, Trụ, Lão, Vô thường', indent: 1 },
        { id: 'nhom-nhan-qua-va-tuong-ung', label: 'Nhóm nhân quả và tương ưng', indent: 1 },
        { id: 'nhom-the-gian-va-so-luong', label: 'Nhóm thế gian, thời-không và số lượng', indent: 1 },
        { id: 'tong-ket-huu-vi-vo-vi', label: 'Tổng kết hữu vi và vô vi', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10b-tam-bat-tuong-ung-hanh-phap/Architectures_of_Reality.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/S35H-ehjda0',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/0ZG44sIcTgu2yVuK8HGVr5?utm_source=generator&si=4556fb2ee17e4314',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Tâm bất tương ưng hành pháp',
    passPercentage: 70,
    questions,
  },
}

export default lesson
