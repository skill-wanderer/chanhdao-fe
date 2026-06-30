import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-tam-tuy-phien-nao" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ TÁM - TÙY PHIỀN NÃO (CÓ 20 MÓN)</h2>
    </div>

    <h3 id="tong-quan-tuy-phien-nao" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tổng quan về Tùy phiền não</h3>
    <p>Hai mươi món phiền não này, là tùy thuộc 6 món Căn bản phiền não trên mà sanh khởi. Vì phạm vi tương ưng của nó có rộng và hẹp không đồng, nên chia làm ba loại.</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Tiểu tùy:</strong> có 10 món, mỗi món tự lực sanh khởi, phạm vi tương ưng nhỏ hẹp.</li>
        <li><strong>Trung tùy:</strong> có 2 món là Vô tàm và Vô quý, phạm vi tương ưng trung bình.</li>
        <li><strong>Đại tùy:</strong> có 8 món, biến khắp các tâm sở bất thiện, phạm vi rộng hơn hai nhóm trước.</li>
      </ul>
    </div>

    <h3 id="tieu-tuy" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Tiểu tùy</h3>
    <p>Có 10 món, mỗi món tự lực sanh khởi, phạm vi tương ưng nhỏ hẹp, nên gọi là "Tiểu".</p>

    <h4 id="muoi-mon-tieu-tuy" class="text-lg font-semibold">Mười món Tiểu tùy</h4>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Phẫn:</strong> Giận. Tánh của tâm sở này, khi gặp cảnh trái nghịch, nóng giận. Nghiệp dụng của nó là hay làm tổn hại người, vật và chướng ngại tánh không nóng giận.</li>
      <li><strong>Hận:</strong> Hờn. Khi gặp cảnh nghịch, trước nóng giận rồi sau mới hờn. Tánh của tâm sở này là ôm ấp sự oán ghét không bỏ. Nghiệp dụng của nó là nóng nảy, buồn phiền và hay làm chướng ngại tánh không hờn.</li>
      <li><strong>Phú:</strong> Che giấu. Tánh của tâm sở này, vì sợ mất danh giá và tài lợi, nên che giấu tội lỗi của mình. Nghiệp dụng của nó là hay ăn năn, buồn và chướng ngại tánh không che giấu.</li>
      <li><strong>Não:</strong> Buồn buồn. Khi gặp cảnh nghịch, trước giận hờn rồi sau mới buồn. Tánh của tâm sở này hay nhớ lại những cảnh trái nghịch đã qua, rồi sanh buồn phiền. Nghiệp dụng của nó là chướng ngại tánh không buồn.</li>
      <li><strong>Tật:</strong> Tật đố, ganh ghét. Tánh của tâm sở này hay ganh ghét đố kỵ những gì mà người ta hơn mình. Nghiệp dụng của nó là làm chướng ngại tánh không tật đố và sầu khổ lo buồn.</li>
      <li><strong>Xan:</strong> Bỏn xẻn. Tánh của tâm sở này, bỏn xẻn, rích rắc, không chịu ban bố tiền tài hay giáo pháp cho người. Nghiệp dụng của nó là làm bộ quê mùa, ăn mặc nghèo cực, để tích trữ tài sản và làm chướng ngại không bỏn xẻn.</li>
      <li><strong>Cuống:</strong> Dối. Tánh của tâm sở này, dối gạt người để lợi mình. Nghiệp dụng của nó là làm việc không chơn chánh để nuôi sống và chướng ngại tánh không dối gạt.</li>
      <li><strong>Siểm:</strong> Bợ đỡ, nịnh hót. Tánh của tâm sở này, lựa thời thế nịnh hót, bợ đỡ người. Nghiệp dụng của nó là không nghe lời chỉ giáo chơn chánh của thầy, bạn và làm chướng ngại tánh không dua nịnh.</li>
      <li><strong>Hại:</strong> Tổn hại. Tánh của tâm sở này làm tổn hại các loài hữu tình. Nghiệp dụng của nó là làm bức não người, vật và chướng ngại tánh không tổn hại.</li>
      <li><strong>Kiêu:</strong> Kiêu căng. Tánh của tâm sở này, vì thấy mình giàu sang, quyền tước hoặc tài năng, rồi sanh ra kiêu cách và ngạo nghễ. Nghiệp dụng của nó là làm nhơn sanh ra nhiễm ô, tội lỗi và chướng ngại tánh không kiêu căng.</li>
    </ul>

    <h3 id="trung-tuy" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Trung tùy</h3>
    <p>Có hai món là Vô tàm và Vô quý; vì hai món tâm sở này, duyên các tâm sở bất thiện, phạm vi tương ưng của nó trung bình, nên gọi là "Trung tùy".</p>

    <h4 id="hai-mon-trung-tuy" class="text-lg font-semibold">Hai món Trung tùy</h4>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Vô tàm:</strong> Tự mình không biết xấu hổ. Tánh của tâm sở này, khi làm việc quấy không biết tự hổ, khinh dễ những người hiền thiện. Nghiệp dụng của nó là làm tăng trưởng việc ác và chướng ngại tánh biết xấu hổ.</li>
      <li><strong>Vô quý:</strong> Không biết thẹn với người. Tánh của tâm sở này, khi làm việc quấy, không biết thẹn với người, ưa làm việc tội ác. Nghiệp dụng của nó là làm tăng trưởng việc ác và chướng ngại tánh biết thẹn.</li>
    </ul>

    <h3 id="dai-tuy" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. Đại tùy</h3>
    <p>Có 8 món sau đây. Tám món tâm sở này biến khắp các tâm sở bất thiện, phạm vi của nó rộng hơn hai món Trung tùy trước, nên gọi là "Đại tùy".</p>

    <h4 id="bat-mon-dai-tuy" class="text-lg font-semibold">Tám món Đại tùy</h4>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Trạo cử:</strong> Lao chao. Tánh của tâm sở này làm cho thân tâm chao động không yên tịnh. Nghiệp dụng của nó là làm chướng ngại Định và Hành xả.</li>
      <li><strong>Hôn trần:</strong> Mờ tối trầm trọng. Tánh của tâm sở này, khiến cho tâm khi đối với quán cảnh mờ mịt không sáng suốt. Nghiệp dụng của nó là làm chướng ngại Huệ và khinh an.</li>
      <li><strong>Bất tín:</strong> Không tin. Tánh của tâm sở này là không tin các pháp lành, làm cho tâm tánh ô nhiễm. Nghiệp dụng của nó hay sanh giải đãi và chướng ngại tâm thanh tịnh.</li>
      <li><strong>Giải đãi:</strong> Biếng nhác trễ nãi. Tánh của tâm sở này là biếng nhác, không lo đoạn ác và tu thiện. Nghiệp dụng của nó là làm chướng ngại tinh tấn và tăng trưởng tánh nhiễm ô.</li>
      <li><strong>Phóng dật:</strong> Buông lung. Tánh của tâm sở này phóng túng, buông lung, không thúc liễm thân tâm để đoạn ác tu thiện. Nghiệp dụng của nó là làm tăng ác tổn thiện, và chướng ngại tánh không buông lung.</li>
      <li><strong>Thất niệm:</strong> Mất chánh niệm. Tánh của tâm sở này không nhớ cảnh đã duyên. Nghiệp dụng của nó là làm chướng ngại chánh niệm và sanh tán loạn.</li>
      <li><strong>Tán loạn:</strong> Rối loạn. Tánh của tâm sở này làm cho tâm rối loạn. Nghiệp dụng của nó là làm chướng ngại chánh định và sanh ra ác huệ.</li>
      <li><strong>Bất chánh tri:</strong> Biết không chơn chánh. Tánh của tâm sở này, khi đối với cảnh, hiểu biết sai lầm. Nghiệp dụng của nó là làm chướng ngại cái hiểu biết chơn chánh và sanh ra phạm giới.</li>
    </ul>

    <h3 id="phan-biet-trao-cu-tan-loan-phong-dat" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Hỏi đáp về Trạo cử, Tán loạn và Phóng dật</h3>
    <p><strong>Hỏi:</strong> Ba món tâm sở: Trạo cử, Tán loạn và Phóng dật khác nhau thế nào?</p>
    <p><strong>Đáp:</strong> Trạo cử là lao chao; dụ như con ngựa đứng một chỗ trong chuồng, nhưng đầu và mình vẫn lắc qua lắc lại không yên. Tán loạn là rối loạn; dụ như con ngựa chạy lăng xăng trong chuồng. Phóng dật là buông lung; dụ như con ngựa đã thoát ra khỏi chuồng, tuôn vào lúa mạ của người.</p>

    <h3 id="phan-biet-san-phan-han-nao" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Hỏi đáp về Sân, Phẫn, Hận và Não</h3>
    <p><strong>Hỏi:</strong> Bốn món tâm sở: Sân, Phẫn, Hận và Não, hành tướng khác nhau thế nào?</p>
    <p><strong>Đáp:</strong> Sân là nổi nóng, dụ như lửa rơm. Phẫn là giận, dụ như lửa củi. Hận là hờn; dụ như lửa than. Não là buồn, dụ như tro nóng.</p>

    <h3 id="sieng-nang-lam-viec-quay" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Siêng năng làm việc quấy có phải là tinh tấn không?</h3>
    <p><strong>Hỏi:</strong> Siêng năng làm việc quấy, có phải là Tinh tấn tâm sở không?</p>
    <p><strong>Đáp:</strong> Không phải. Siêng năng làm việc quấy là Phóng dật tâm sở.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Dựa trên văn bản, tại sao 10 món đầu tiên như Phẫn, Hận, Phú... lại được gọi là 'Tiểu tùy'?",
    "options": {
      "a": "Vì mỗi món tự lực sanh khởi và có phạm vi tương ưng nhỏ hẹp.",
      "b": "Vì chúng là những phiền não nhẹ nhàng, dễ dàng đoạn trừ.",
      "c": "Vì chúng chỉ xuất hiện ở những người có căn tính thấp kém.",
      "d": "Vì chúng luôn đi kèm với các tâm sở bất thiện khác để tồn tại."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. 10 món Tiểu tùy mỗi món tự lực sanh khởi, phạm vi tương ưng nhỏ hẹp, nên gọi là 'Tiểu' [1].",
      "b": "Sai. Văn bản không đề cập đến việc chúng nhẹ nhàng hay dễ đoạn trừ [1].",
      "c": "Sai. Không có thông tin về căn tính thấp kém của người mắc phải [1].",
      "d": "Sai. Văn bản ghi rõ mỗi món 'tự lực sanh khởi' chứ không phải luôn đi kèm với các tâm sở khác để tồn tại [1]."
    }
  },
  {
    "question": "Tâm sở nào được mô tả là có tánh che giấu tội lỗi của mình vì sợ mất danh giá và tài lợi?",
    "options": {
      "a": "Vô tàm",
      "b": "Phú",
      "c": "Cuống",
      "d": "Siểm"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Vô tàm là làm việc quấy không biết tự hổ, khinh dễ những người hiền thiện [2].",
      "b": "Đúng. Tâm sở Phú (che giấu) có tánh vì sợ mất danh giá và tài lợi nên che giấu tội lỗi của mình [3].",
      "c": "Sai. Cuống là dối gạt người để lợi mình [4].",
      "d": "Sai. Siểm là lựa thời thế nịnh hót, bợ đỡ người [4]."
    }
  },
  {
    "question": "Trong ví dụ về con ngựa để phân biệt các tâm sở, hình ảnh 'con ngựa chạy lăng xăng trong chuồng' dùng để chỉ tâm sở nào?",
    "options": {
      "a": "Thất niệm",
      "b": "Phóng dật",
      "c": "Trạo cử",
      "d": "Tán loạn"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Thất niệm không được ví dụ bằng hình ảnh con ngựa [5].",
      "b": "Sai. Phóng dật được ví dụ như con ngựa đã thoát ra khỏi chuồng, tuôn vào lúa mạ của người [6].",
      "c": "Sai. Trạo cử được ví dụ như con ngựa đứng một chỗ trong chuồng, nhưng đầu và mình vẫn lắc qua lắc lại [6].",
      "d": "Đúng. Tán loạn là sự rối loạn, được ví dụ như con ngựa chạy lăng xăng trong chuồng [6]."
    }
  },
  {
    "question": "Sự khác biệt căn bản giữa 'Vô tàm' và 'Vô quý' theo văn bản là gì?",
    "options": {
      "a": "Vô tàm là phạm tội nhẹ, còn Vô quý là phạm các tội ác nghiêm trọng.",
      "b": "Vô tàm thuộc nhóm Tiểu tùy, còn Vô quý thuộc nhóm Trung tùy.",
      "c": "Vô tàm làm chướng ngại tánh biết thẹn, còn Vô quý làm chướng ngại tánh biết xấu hổ.",
      "d": "Vô tàm là không tự biết xấu hổ với chính mình, còn Vô quý là không biết thẹn với người khác."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Văn bản không hề phân biệt về mức độ nghiêm trọng của tội lỗi [2].",
      "b": "Sai. Cả Vô tàm và Vô quý đều cùng thuộc nhóm Trung tùy [7].",
      "c": "Sai. Vô tàm chướng ngại tánh biết xấu hổ, còn Vô quý chướng ngại tánh biết thẹn [2].",
      "d": "Đúng. Vô tàm là tự mình không biết xấu hổ, trong khi Vô quý là không biết thẹn với người khác [2]."
    }
  },
  {
    "question": "Khi so sánh các trạng thái nóng giận với các loại lửa, tâm sở 'Não' (buồn) được ví với hình ảnh nào?",
    "options": {
      "a": "Lửa củi",
      "b": "Tro nóng",
      "c": "Lửa rơm",
      "d": "Lửa than"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Lửa củi là ví dụ hình ảnh cho Phẫn [6].",
      "b": "Đúng. Não là tâm sở buồn, được ví như tro nóng [6].",
      "c": "Sai. Lửa rơm là ví dụ hình ảnh cho Sân [6].",
      "d": "Sai. Lửa than là ví dụ hình ảnh cho Hận [6]."
    }
  },
  {
    "question": "Tâm sở nào có nghiệp dụng là gây ra 'ác huệ' và chướng ngại 'chánh định'?",
    "options": {
      "a": "Hôn trần",
      "b": "Bất chánh tri",
      "c": "Trạo cử",
      "d": "Tán loạn"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Hôn trần làm chướng ngại Huệ và khinh an [8].",
      "b": "Sai. Bất chánh tri làm chướng ngại cái hiểu biết chơn chánh và sanh ra phạm giới [5].",
      "c": "Sai. Trạo cử làm chướng ngại Định và Hành xả [8].",
      "d": "Đúng. Tán loạn có nghiệp dụng là làm chướng ngại chánh định và sanh ra ác huệ [5]."
    }
  },
  {
    "question": "Theo lời giải đáp cuối văn bản, hành vi 'siêng năng làm việc quấy' thực chất thuộc về tâm sở nào?",
    "options": {
      "a": "Cuống",
      "b": "Giải đãi",
      "c": "Tinh tấn",
      "d": "Phóng dật"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Cuống là dối gạt người để lợi mình [4].",
      "b": "Sai. Giải đãi là biếng nhác, không lo đoạn ác và tu thiện [8].",
      "c": "Sai. Việc siêng năng làm điều quấy không được coi là Tinh tấn tâm sở [9].",
      "d": "Đúng. Theo phần giải đáp, siêng năng làm việc quấy thực chất là Phóng dật tâm sở [9]."
    }
  },
  {
    "question": "Nghiệp dụng của tâm sở 'Xan' được mô tả như thế nào trong văn bản?",
    "options": {
      "a": "Ganh ghét đố kỵ những gì người khác hơn mình.",
      "b": "Lựa thời thế nịnh hót, bợ đỡ người khác.",
      "c": "Làm bộ quê mùa, ăn mặc nghèo cực để tích trữ tài sản.",
      "d": "Dối gạt người để thu lợi về cho bản thân."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đây là tánh của tâm sở Tật [3].",
      "b": "Sai. Đây là tánh của tâm sở Siểm [4].",
      "c": "Đúng. Nghiệp dụng của Xan (bỏn xẻn) là làm bộ quê mùa, ăn mặc nghèo cực để tích trữ tài sản và chướng ngại tánh không bỏn xẻn [4].",
      "d": "Sai. Đây là tánh của tâm sở Cuống [4]."
    }
  },
  {
    "question": "Tâm sở nào khiến tâm trở nên 'mờ mịt không sáng suốt' khi đối diện với cảnh quán chiếu?",
    "options": {
      "a": "Bất tín",
      "b": "Thất niệm",
      "c": "Giải đãi",
      "d": "Hôn trần"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Bất tín làm cho tâm tánh ô nhiễm do không tin các pháp lành [8].",
      "b": "Sai. Thất niệm là tánh không nhớ cảnh đã duyên [5].",
      "c": "Sai. Giải đãi là biếng nhác trễ nãi [8].",
      "d": "Đúng. Hôn trần là sự mờ tối trầm trọng, khiến tâm khi đối với quán cảnh trở nên mờ mịt không sáng suốt [8]."
    }
  },
  {
    "question": "Nhóm 'Đại tùy' phiền não bao gồm 8 món tâm sở có đặc điểm chung là gì?",
    "options": {
      "a": "Biến khắp các tâm sở bất thiện.",
      "b": "Duyên khắp các tâm sở thiện và bất thiện.",
      "c": "Mỗi món đều tự lực sanh khởi độc lập.",
      "d": "Chỉ phát sinh khi có đủ 6 món Căn bản phiền não."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Tám món tâm sở này biến khắp các tâm sở bất thiện, phạm vi rộng hơn nhóm Trung tùy [2].",
      "b": "Sai. Chúng chỉ biến khắp các tâm sở bất thiện, chứ không đề cập đến tâm sở thiện [2].",
      "c": "Sai. Tự lực sanh khởi là đặc tính của nhóm Tiểu tùy [1].",
      "d": "Sai. Dù đều tùy thuộc 6 món Căn bản phiền não để sanh khởi, nhưng không có yêu cầu phải có đủ cả 6 món mới phát sinh [1]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-8-tuy-phien-nao',
  slug: 'bai-thu-8-tuy-phien-nao',
  title: 'Bài Thứ 8 - Tùy phiền não',
  type: 'article',
  status: 'published',
  order: 10,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-30',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-8-tuy-phien-nao/Nh%E1%BA%ADn_Di%E1%BB%87n_20_Phi%E1%BB%81n_N%C3%A3o.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-tam-tuy-phien-nao', label: 'Bài Thứ Tám - Tùy phiền não (có 20 món)' },
        { id: 'tong-quan-tuy-phien-nao', label: 'Tổng quan về Tùy phiền não', indent: 1 },
        { id: 'tieu-tuy', label: 'I. Tiểu tùy', indent: 1 },
        { id: 'muoi-mon-tieu-tuy', label: 'Mười món Tiểu tùy', indent: 2 },
        { id: 'trung-tuy', label: 'II. Trung tùy', indent: 1 },
        { id: 'hai-mon-trung-tuy', label: 'Hai món Trung tùy', indent: 2 },
        { id: 'dai-tuy', label: 'III. Đại tùy', indent: 1 },
        { id: 'bat-mon-dai-tuy', label: 'Tám món Đại tùy', indent: 2 },
        { id: 'phan-biet-trao-cu-tan-loan-phong-dat', label: 'Hỏi đáp về Trạo cử, Tán loạn và Phóng dật', indent: 1 },
        { id: 'phan-biet-san-phan-han-nao', label: 'Hỏi đáp về Sân, Phẫn, Hận và Não', indent: 1 },
        { id: 'sieng-nang-lam-viec-quay', label: 'Siêng năng làm việc quấy có phải là tinh tấn không?', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-8-tuy-phien-nao/B%E1%BA%A3n_%C4%90%E1%BB%93_20_T%C3%B9y_Phi%E1%BB%81n_N%C3%A3o.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/g3MorfFqPIo',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/0SSCGxWdXV91IUEtuEHWiW?utm_source=generator&si=59b1290e0a484719',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Tùy phiền não',
    passPercentage: 70,
    questions,
  },
}

export default lesson
