import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-10c-vo-vi-phap" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ 10c - V. VÔ VI PHÁP</h2>
    </div>

    <h3 id="tong-quan-vo-vi-phap" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. Vô vi pháp (có 6 món)</h3>
    <p>Pháp Vô vi không sanh diệt, không biến đổi, không phải như các pháp hữu vi là Tâm vương, Tâm sở, Sắc pháp, Bất tương ưng hành có sanh diệt biến đổi. Do các pháp hữu vi (94 món) diệt rồi, thì pháp vô vi mới hiện bày (<em>Tứ, sở hiển thị cố</em>).</p>
    <p>Thật ra, vô vi không phải có 6 pháp, song vì theo từng khía cạnh của nó để giải thích, nên đặt ra 6 tên.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold text-secondary-700 dark:text-secondary-300">Sáu tên gọi của Vô vi pháp</p>
      <ol class="mb-0 list-decimal space-y-2 pl-6">
        <li>Hư không vô vi</li>
        <li>Trạch diệt vô vi</li>
        <li>Phi trạch diệt vô vi</li>
        <li>Bất động diệt vô vi</li>
        <li>Thọ tưởng diệt vô vi</li>
        <li>Chơn như vô vi</li>
      </ol>
    </div>

    <h4 id="hu-khong-vo-vi" class="mt-8 text-lg font-semibold">Hư không vô vi</h4>
    <p>Chơn như hay Pháp tánh, không thể dùng ý thức suy nghĩ hay lời nói luận bàn được. Nó phi sắc, phi tâm, không sanh diệt, không cấu tịnh, không tăng giảm nên gọi là "Vô vi".</p>
    <p>Bởi nó không ngã, không pháp, rời các cấu nhiễm, rỗng rang như hư không, nên gọi là "Hư không vô vi". Đây là theo thí dụ mà đặt tên.</p>

    <h4 id="trach-diet-vo-vi" class="mt-8 text-lg font-semibold">Trạch diệt vô vi</h4>
    <p>Do dùng trí huệ Vô lậu, lựa chọn diệt trừ hết các nhiễm ô, nên chơn như vô vi mới hiện. Vì thế nên gọi là "Trạch diệt vô vi".</p>

    <h4 id="phi-trach-diet-vo-vi" class="mt-8 text-lg font-semibold">Phi trạch diệt vô vi</h4>
    <p>Vô vi không cần lựa chọn diệt trừ các phiền não. Có hai nghĩa:</p>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>a)</strong> Tánh chơn như vốn thanh tịnh, không phải do lựa chọn diệt trừ các phiền não nhiễm ô mới có, nên gọi là "Phi trạch diệt".</li>
      <li><strong>b)</strong> Các pháp hữu vi tạp nhiễm, vì thiếu duyên không sanh khởi, nên pháp vô vi được hiện. Bởi thế nên gọi "Phi trạch diệt".</li>
    </ul>

    <h4 id="bat-dong-diet-vo-vi" class="mt-8 text-lg font-semibold">Bất động diệt vô vi</h4>
    <p>Đệ tứ thiền đã lìa được ba định dưới, ra khỏi tam tai (đao binh tai, hỏa tai, thủy tai) không còn bị mừng, giận, thương, ghét... làm chao động nơi tâm, nên gọi là "Bất động diệt".</p>

    <h4 id="tho-tuong-diet-vo-vi" class="mt-8 text-lg font-semibold">Thọ tưởng diệt vô vi</h4>
    <p>Khi được Diệt tận định, diệt trừ hết "thọ" và "tưởng" tâm sở nên gọi là "Thọ tưởng diệt vô vi".</p>

    <h4 id="chon-nhu-vo-vi" class="mt-8 text-lg font-semibold">Chơn như vô vi</h4>
    <p>Không phải Vọng, gọi là Chơn (không biến kế sở chấp); không phải điên đảo gọi là Như (không y tha khởi), tức là thật tánh của các pháp (Viên thành thật).</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 font-semibold text-primary-700 dark:text-primary-300">Hai câu hỏi được nêu ra trong luận</p>
      <p>Trong luận Đại thừa trăm pháp này, ngoại nhơn hỏi hai câu:</p>
      <ol class="mb-0 list-decimal space-y-2 pl-6">
        <li>Tất cả pháp là gì?</li>
        <li>Thế nào là không thật (vô ngã)?</li>
      </ol>
      <p class="mb-0 mt-3">Từ trước đến đây, Luận chủ lược nói 100 pháp, để trả lời câu hỏi thứ nhất rồi, sau đây trả lời về câu hỏi thứ hai.</p>
    </div>

    <h3 id="phan-thu-hai-noi-khong-that-vo-nga" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Phần thứ hai: Nói "không thật" (Vô ngã)</h3>
    <h4 id="hai-loai-vo-nga" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Nói "không thật" (vô ngã), tóm có 2 loại:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Nhơn (người) không thật.</li>
      <li>Pháp (vật) không thật.</li>
    </ul>
    <p>Người đời chấp tất cả các pháp thật có, tức là chấp Ngã (Thật). Chấp Thật (Ngã) có hai:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Nhơn (người) thật.</li>
      <li>Pháp (vật) thật.</li>
    </ul>
    <p>Chấp thân này thật có, gọi là Nhơn thật. Chấp núi sông tất cả các cảnh vật bên ngoài thật có, gọi là Pháp thật.</p>
    <p>Do chấp thật có (ngã) nên sanh ra tham, sân, si rồi tạo ra các nghiệp, sanh tử luân hồi trong lục đạo. Bởi thế nên Phật nói:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-0">"Tất cả Pháp không thật".</p>
    </blockquote>
    <p>Nói "Tất cả pháp" tức là bao trùm cả loài hữu tình và vô tình. Loài hữu tình không thật có là "Nhơn không thật". Loài vô tình như hoàn cảnh, sự vật không thật có, là "Pháp không thật".</p>

    <h3 id="ket-luan-duy-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Kết luận</h3>
    <p>Từ trước đến đây, lược nói 100 pháp thì đã bao trùm Nhơn và Pháp. Phàm phu chấp cả Nhơn và Pháp đều thật có. Tiểu thừa chỉ chấp Pháp là thật có.</p>
    <p>Trong luận này nói: 8 món Tâm vương là tự thể của thức và hơn tất cả (<em>nhứt thế tối thắng cố</em>). 51 món tâm sở là phần sở hữu và tương ưng của thức (<em>dữ thử tương ưng cố</em>). 11 món sắc pháp là phần hình bóng, do Tâm vương và Tâm sở hiện ra (<em>nhị sở hiện ảnh cố</em>). 24 món Bất tương ưng hành là do ba phần: tâm vương, tâm sở và sắc pháp, phân chia ngôi thứ sai khác mà giả lập (<em>tam, phận vị sai biệt cố</em>). 6 món vô vi là do 4 món hữu vi trên (tâm vương, tâm sở, sắc pháp và bất tương ưng hành) diệt hết mà hiện bày ra, tức là thật tánh của thức (<em>tứ, sở hiển thị cố</em>).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold text-secondary-700 dark:text-secondary-300">Điểm kết thúc của toàn bài</p>
      <p class="mb-2">Bởi thế nên biết: Người đời chấp "Nhơn thật có" và "Pháp thật có" đều không ngoài thức. Do đó mà đức Thế Tôn nói:</p>
      <blockquote class="mb-2 border-l-4 border-secondary-300 pl-4 italic text-text-muted dark:border-secondary-700">
        <p class="mb-0">"Tất cả Pháp không thật" (Vô ngã).</p>
      </blockquote>
      <blockquote class="mb-0 border-l-4 border-secondary-300 pl-4 italic text-text-muted dark:border-secondary-700">
        <p class="mb-0">"Muôn Pháp Duy thức".</p>
      </blockquote>
    </div>

    <p class="mt-6 text-sm italic text-text-muted">Viết xong tại Phật Học Đường Nam Việt<br />Rằm tháng 6 năm Kỷ Hợi (1959)</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo văn bản, tại sao lại gọi là 'Vô vi' pháp?",
    "options": {
      "a": "Vì chúng là những hiện tượng tâm lý phát sinh từ sự tương ưng của tâm vương.",
      "b": "Vì chúng không sanh diệt, không biến đổi và hiện bày khi các pháp hữu vi đã diệt.",
      "c": "Vì chúng được tạo ra từ sự kết hợp của các yếu tố vật chất và tinh thần.",
      "d": "Vì chúng có tính sanh diệt và luôn biến đổi theo thời gian."
    },
    "answer": "b",
    "explanation": {
      "b": "Đúng. Pháp Vô vi không sanh diệt, không biến đổi. Do các pháp hữu vi (94 món) diệt rồi, thì pháp vô vi mới hiện bày [1]."
    }
  },
  {
    "question": "Tại sao 'Hư không vô vi' lại được đặt tên như vậy?",
    "options": {
      "a": "Vì nó là kết quả của việc đạt được định Đệ tứ thiền.",
      "b": "Vì nó cần được trí huệ lựa chọn để tiêu diệt các cấu nhiễm.",
      "c": "Vì bản tính của nó rời các cấu nhiễm, rỗng rang như hư không.",
      "d": "Vì nó là một khoảng không gian vật lý bao quanh trái đất."
    },
    "answer": "c",
    "explanation": {
      "c": "Đúng. Bởi nó không ngã, không pháp, rời các cấu nhiễm, rỗng rang như hư không, nên gọi là 'Hư không vô vi' [2]."
    }
  },
  {
    "question": "Cơ chế nào dẫn đến sự hiện bày của 'Trạch diệt vô vi'?",
    "options": {
      "a": "Do tâm ý thức tự nhiên thanh tịnh mà không cần tu tập.",
      "b": "Do dùng trí huệ vô lậu để lựa chọn và diệt trừ hết các nhiễm ô.",
      "c": "Do thiếu các nhân duyên hỗ trợ để các pháp tạp nhiễm sanh khởi.",
      "d": "Do việc đoạn trừ các cảm thọ và suy nghĩ trong định Diệt tận."
    },
    "answer": "b",
    "explanation": {
      "b": "Đúng. Do dùng trí huệ Vô lậu, lựa chọn diệt trừ hết các nhiễm ô, nên chơn như vô vi mới hiện [2]."
    }
  },
  {
    "question": "Nghĩa nào sau đây thuộc về 'Phi trạch diệt vô vi'?",
    "options": {
      "a": "Sự thanh tịnh đạt được sau khi trải qua hỏa tai và thủy tai.",
      "b": "Các pháp hữu vi vì thiếu duyên nên không sanh khởi, khiến pháp vô vi hiện bày.",
      "c": "Chơn như hiện ra do nỗ lực lựa chọn đoạn tuyệt phiền não.",
      "d": "Pháp vô vi được hiển lộ nhờ sự rung động mạnh mẽ của tâm thức."
    },
    "answer": "b",
    "explanation": {
      "b": "Đúng. Các pháp hữu vi tạp nhiễm, vì thiếu duyên không sanh khởi, nên pháp vô vi được hiện [2]."
    }
  },
  {
    "question": "'Bất động diệt vô vi' liên quan đến trạng thái tâm lý nào?",
    "options": {
      "a": "Tâm vẫn còn sự phân biệt giữa 'biến kế sở chấp' và 'y tha khởi'.",
      "b": "Tâm hoàn toàn biến mất và không còn tồn tại bất kỳ thức nào.",
      "c": "Tâm không còn bị các cảm xúc mừng, giận, thương, ghét làm chao động.",
      "d": "Tâm đạt đến trạng thái cực hỷ trong các tầng định thấp."
    },
    "answer": "c",
    "explanation": {
      "c": "Đúng. Đệ tứ thiền đã lìa được ba định dưới, ra khỏi tam tai... không còn bị mừng, giận, thương, ghét... làm chao động nơi tâm, nên gọi là 'Bất động diệt' [3]."
    }
  },
  {
    "question": "Trong 'Thọ tưởng diệt vô vi', hai món tâm sở nào bị loại bỏ?",
    "options": {
      "a": "Hư không và Chơn như.",
      "b": "Sắc và Thức.",
      "c": "Thọ và Tưởng.",
      "d": "Tham và Sân."
    },
    "answer": "c",
    "explanation": {
      "c": "Đúng. Khi được Diệt tận định, diệt trừ hết 'thọ' và 'tưởng' tâm sở nên gọi là 'Thọ tưởng diệt vô vi' [3]."
    }
  },
  {
    "question": "Theo giải thích về 'Chơn như vô vi', 'Chơn' có nghĩa là gì?",
    "options": {
      "a": "Là trạng thái tâm lý còn bị điên đảo.",
      "b": "Là sự thay đổi hình dáng của sắc pháp.",
      "c": "Là sự vận hành liên tục của các pháp hữu vi.",
      "d": "Là cái không phải vọng, không thuộc về biến kế sở chấp."
    },
    "answer": "d",
    "explanation": {
      "d": "Đúng. Không phải Vọng, gọi là Chơn (không biến kế sở chấp) [3]."
    }
  },
  {
    "question": "Văn bản chia 'Vô ngã' (không thật) thành hai loại nào?",
    "options": {
      "a": "Thức thật và Sắc thật.",
      "b": "Tâm thật và Cảnh thật.",
      "c": "Nhơn (người) không thật và Pháp (vật) không thật.",
      "d": "Hữu vi thật và Vô vi thật."
    },
    "answer": "c",
    "explanation": {
      "c": "Đúng. Nói 'không thật' (vô ngã), tóm có 2 loại: Nhơn (người) không thật và Pháp (vật) không thật [4]."
    }
  },
  {
    "question": "Hệ quả của việc chấp 'Nhơn thật' và 'Pháp thật' là gì?",
    "options": {
      "a": "Giúp con người nhanh chóng đạt được Diệt tận định.",
      "b": "Làm cho 6 pháp vô vi hiện bày rõ ràng hơn.",
      "c": "Đưa con người thoát khỏi tam tai (hỏa, thủy, đao binh).",
      "d": "Sanh ra tham, sân, si và tạo nghiệp luân hồi trong lục đạo."
    },
    "answer": "d",
    "explanation": {
      "d": "Đúng. Do chấp thật có (ngã) nên sanh ra tham, sân, si rồi tạo ra các nghiệp, sanh tử luân hồi trong lục đạo [5]."
    }
  },
  {
    "question": "Theo phần Kết luận, các món 'Sắc pháp' được giải thích là gì?",
    "options": {
      "a": "Là thật tánh của thức khi các phiền não đã diệt hết.",
      "b": "Là những thực thể tồn tại độc lập bên ngoài tâm thức.",
      "c": "Là tự thể của thức và hơn tất cả mọi pháp khác.",
      "d": "Là phần hình bóng do Tâm vương và Tâm sở hiện ra."
    },
    "answer": "d",
    "explanation": {
      "d": "Đúng. 11 món sắc pháp là phần hình bóng, do Tâm vương và Tâm sở hiện ra (nhị sở hiện ảnh cố) [5]."
    }
  },
  {
    "question": "Tại sao tác giả lại kết luận 'Muôn Pháp Duy thức'?",
    "options": {
      "a": "Vì tất cả các pháp (Nhơn và Pháp) đều không nằm ngoài sự hiện hành của thức.",
      "b": "Vì chỉ có thức mới là thật còn các pháp khác đều là hư vô.",
      "c": "Vì thức là thứ duy nhất có sanh diệt trong 100 pháp.",
      "d": "Vì thức không cần đến các duyên để sanh khởi."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Người đời chấp 'Nhơn thật có' và 'Pháp thật có' đều không ngoài thức. Do đó mà đức Thế Tôn nói: 'Tất cả Pháp không thật' (Vô ngã) và 'Muôn Pháp Duy thức' [6]."
    }
  },
  {
    "question": "24 món 'Bất tương ưng hành' được hình thành dựa trên cơ sở nào?",
    "options": {
      "a": "Là những thực thể vật chất vi tế không thể nhìn thấy.",
      "b": "Do sự diệt trừ hoàn toàn của thọ và tưởng.",
      "c": "Do trí huệ vô lậu lựa chọn mà thành.",
      "d": "Do sự giả lập dựa trên các sai biệt của tâm vương, tâm sở và sắc pháp."
    },
    "answer": "d",
    "explanation": {
      "d": "Đúng. 24 món Bất tương ưng hành là do ba phần: tâm vương, tâm sở và sắc pháp, phân chia ngôi thứ sai khác mà giả lập [5]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-10c-vo-vi-phap',
  slug: 'bai-thu-10c-vo-vi-phap',
  title: 'Bài Thứ 10c - V. Vô vi pháp',
  type: 'article',
  status: 'published',
  order: 14,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-06',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10c-vo-vi-phap/L%E1%BB%A5c_Ph%C3%A1p_V%C3%B4_Vi_Duy_Th%E1%BB%A9c.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-10c-vo-vi-phap', label: 'Bài Thứ 10c - V. Vô vi pháp' },
        { id: 'tong-quan-vo-vi-phap', label: 'V. Vô vi pháp (có 6 món)', indent: 1 },
        { id: 'hu-khong-vo-vi', label: 'Hư không vô vi', indent: 2 },
        { id: 'trach-diet-vo-vi', label: 'Trạch diệt vô vi', indent: 2 },
        { id: 'phi-trach-diet-vo-vi', label: 'Phi trạch diệt vô vi', indent: 2 },
        { id: 'bat-dong-diet-vo-vi', label: 'Bất động diệt vô vi', indent: 2 },
        { id: 'tho-tuong-diet-vo-vi', label: 'Thọ tưởng diệt vô vi', indent: 2 },
        { id: 'chon-nhu-vo-vi', label: 'Chơn như vô vi', indent: 2 },
        { id: 'phan-thu-hai-noi-khong-that-vo-nga', label: 'Phần thứ hai: Nói "không thật" (Vô ngã)', indent: 1 },
        { id: 'hai-loai-vo-nga', label: 'Chánh văn', indent: 2 },
        { id: 'ket-luan-duy-thuc', label: 'Kết luận', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10c-vo-vi-phap/100_Dharmas_of_Absolute_Truth.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/BkiRDDPUfDc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/7iDXofoubUZ2ADUduMYzws?utm_source=generator&si=4b248dc9284e44a2',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Vô vi pháp',
    passPercentage: 70,
    questions,
  },
}

export default lesson
