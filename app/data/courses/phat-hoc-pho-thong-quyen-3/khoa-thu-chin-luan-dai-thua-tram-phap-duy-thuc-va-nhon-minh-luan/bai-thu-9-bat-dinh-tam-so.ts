import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-chin-bat-dinh-tam-so" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ CHÍN - BẤT ĐỊNH TÂM SỞ (CÓ 4 MÓN)</h2>
    </div>

    <h3 id="tong-quan-bat-dinh-tam-so" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tổng quan về Bất định tâm sở</h3>
    <p>Bốn món Tâm sở này không nhất định thiện hay ác, nên gọi là "Bất định".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Hối:</strong> Ăn năn, chỗ khác gọi là "Ố tác".</li>
        <li><strong>Miên:</strong> Ngủ, làm tâm mờ mịt và thân không tự tại.</li>
        <li><strong>Tầm:</strong> Tìm cầu, khiến tâm sanh khởi thô động.</li>
        <li><strong>Tư:</strong> Chín chắn xét, khiến tâm sanh khởi tế nhị và yên ổn hơn.</li>
      </ul>
    </div>

    <h3 id="tam-so-hoi" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Hối: ăn năn</h3>
    <p>Hối: ăn năn. Chỗ khác gọi là "Ố tác": ghét việc làm đã qua; cũng là dị danh của "Hối". Tánh của Tâm sở này, ăn năn việc làm đã qua. Nghiệp dụng của nó làm chướng ngại Định.</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 font-semibold text-primary-700 dark:text-primary-300">Hối có thể thiện hoặc ác</p>
      <p>Ăn năn có khi thiện mà cũng có lúc lại ác.</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Thiện:</strong> "Vừa rồi mình sân si đánh đập người thật bậy quá", như thế là thiện.</li>
        <li><strong>Ác:</strong> "Vừa rồi sao mình không trộm lấy đồ vật của người", như thế là ác.</li>
      </ul>
    </div>

    <h3 id="tam-so-mien" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Miên: ngủ</h3>
    <p>Miên: Ngủ. Tánh của Tâm sở này làm cho tâm mờ mịt, thân không tự tại. Nghiệp dụng của nó làm chướng ngại quán tưởng.</p>
    <p>Ngủ cũng có khi thiện mà cũng có khi ác: Ngủ phải thời là thiện, còn ngủ trong khi nghe kinh hay niệm Phật là ác.</p>

    <h3 id="tam-so-tam" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tầm: tìm cầu</h3>
    <p>Tầm: Tìm cầu. Tâm sở này thiện ác không nhất định, chỉ tùy theo trường hợp. Tánh của nó làm cho tâm đối với cảnh danh ngôn của ý thức (ý ngôn cảnh) sanh khởi thô động.</p>
    <p>Nghiệp dụng của nó là làm cho thân tâm chẳng yên.</p>

    <h3 id="tam-so-tu" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tư: chín chắn xét</h3>
    <p>Tư: Chín chắn xét. Tâm sở này cũng có thiện và ác, tùy theo trường hợp. Tánh của nó làm cho tâm đối với cảnh danh ngôn của ý thức, sanh khởi tế nhị.</p>
    <p>Nghiệp dụng của nó làm cho thân tâm được yên.</p>

    <h3 id="tong-ket-pham-vi-tao-nghiep" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tổng kết phạm vi tạo nghiệp</h3>
    <p>Tóm lại, tất cả chúng sanh hằng ngày tạo nghiệp lành hay dữ, chịu quả báo khổ hay vui, không vượt ra ngoài phạm vi của 8 món Tâm Vương và 51 món Tâm sở này.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Tại sao bốn món Tâm sở Hối, Miên, Tầm, Tư được xếp vào nhóm 'Bất định'?",
    options: {
      a: 'Tính chất luôn trung tính.',
      b: 'Chỉ khi quán tưởng.',
      c: 'Tính chất thiện/ác không cố định.',
      d: 'Ít xuất hiện.',
    },
    answer: 'c',
    explanation: {
      c: `Đúng. "Bất định" nghĩa là tùy duyên mà chúng có thể trở thành thiện hoặc ác.`,
    },
  },
  {
    question: "Tâm sở 'Hối' còn gọi là gì?",
    options: {
      a: 'Phẫn hận',
      b: 'Vô minh',
      c: 'Ố tác',
      d: 'Siểm khúc',
    },
    answer: 'c',
    explanation: {
      c: 'Đúng. Ố tác là ghét việc đã làm, sinh lòng ăn năn.',
    },
  },
  {
    question: "Nghiệp dụng của 'Hối' gây trở ngại cho trạng thái nào?",
    options: {
      a: 'Huệ',
      b: 'Giới',
      c: 'Tín',
      d: 'Định',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Sự hối hận làm tâm dao động, ngăn cản sự tập trung (Định).',
    },
  },
  {
    question: "Ví dụ nào thể hiện 'Hối' mang tính ác?",
    options: {
      a: 'Tiếc vì lãng phí thời gian.',
      b: 'Tiếc vì đã không trộm cắp.',
      c: 'Tiếc vì không nghe pháp.',
      d: 'Tiếc vì lỡ lời mắng người.',
    },
    answer: 'b',
    explanation: {
      b: 'Đúng. Hối hận vì không làm việc ác chính là tâm sở ác.',
    },
  },
  {
    question: "Đặc tính của Tâm sở 'Miên' là gì?",
    options: {
      a: 'Tập trung tâm.',
      b: 'Dao động, lo lắng.',
      c: 'Nhẹ nhàng, an lạc.',
      d: 'Tâm mờ mịt, thân không tự tại.',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Miên (ngủ) làm tâm thức u ám và thân thể mất kiểm soát chủ động.',
    },
  },
  {
    question: "Tâm sở 'Miên' là thiện khi nào?",
    options: {
      a: 'Ngủ khi nghe kinh.',
      b: 'Ngủ để quên phiền não.',
      c: 'Ngủ trốn trách nhiệm.',
      d: 'Ngủ đúng thời điểm, hợp lý.',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Ngủ đúng lúc để phục hồi sức khỏe phụng sự đạo pháp là thiện.',
    },
  },
  {
    question: "Khác biệt chính giữa 'Tầm' và 'Tư'?",
    options: {
      a: 'Tầm ác, Tư thiện.',
      b: 'Số lượng thức xuất hiện.',
      c: 'Tầm thô động, Tư tế nhị.',
      d: 'Tầm yên ổn, Tư chẳng yên.',
    },
    answer: 'c',
    explanation: {
      c: 'Đúng. Tầm là tìm cầu thô hiển, Tư là suy xét sâu sắc, tinh tế.',
    },
  },
  {
    question: "Nghiệp dụng của Tâm sở 'Tư' giúp gì?",
    options: {
      a: 'Thoát nhân quả.',
      b: 'Thúc đẩy hành động.',
      c: 'Loại bỏ ham muốn.',
      d: 'Thân tâm yên ổn.',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Sự suy xét thấu đáo giúp tâm định tĩnh và an ổn.',
    },
  },
  {
    question: 'Mọi nghiệp lành dữ của chúng sanh đều nằm trong phạm vi nào?',
    options: {
      a: '8 Tâm Vương & 51 Tâm sở.',
      b: 'Ngũ uẩn.',
      c: 'Nghiệp quả.',
      d: '4 Bất định.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Đây là toàn bộ hệ thống tâm lý tạo nghiệp trong Duy Thức.',
    },
  },
  {
    question: "Đối tượng tác động chung của 'Tầm' và 'Tư'?",
    options: {
      a: 'Quả báo tương lai.',
      b: 'Sự yên lặng của tâm.',
      c: 'Hình sắc bên ngoài.',
      d: 'Cảnh danh ngôn của ý thức.',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Cả hai đều hoạt động trên các ý niệm và khái niệm (ý ngôn cảnh).',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-9-bat-dinh-tam-so',
  slug: 'bai-thu-9-bat-dinh-tam-so',
  title: 'Bài Thứ 9 - Bất định tâm sở',
  type: 'article',
  status: 'published',
  order: 11,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-06',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-9-bat-dinh-tam-so/4_T%C3%A2m_S%E1%BB%9F_B%E1%BA%A5t_%C4%90%E1%BB%8Bnh.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-chin-bat-dinh-tam-so', label: 'Bài Thứ Chín - Bất định tâm sở (có 4 món)' },
        { id: 'tong-quan-bat-dinh-tam-so', label: 'Tổng quan về Bất định tâm sở', indent: 1 },
        { id: 'tam-so-hoi', label: 'Hối: ăn năn', indent: 1 },
        { id: 'tam-so-mien', label: 'Miên: ngủ', indent: 1 },
        { id: 'tam-so-tam', label: 'Tầm: tìm cầu', indent: 1 },
        { id: 'tam-so-tu', label: 'Tư: chín chắn xét', indent: 1 },
        { id: 'tong-ket-pham-vi-tao-nghiep', label: 'Tổng kết phạm vi tạo nghiệp', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-9-bat-dinh-tam-so/The_Indeterminate_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/ThKbP8RHmsY',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/3h104Y8bACAT1rDKjHsQf0?utm_source=generator&si=69dc76bc38c14e92',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bất định tâm sở',
    passPercentage: 70,
    questions,
  },
}

export default lesson
