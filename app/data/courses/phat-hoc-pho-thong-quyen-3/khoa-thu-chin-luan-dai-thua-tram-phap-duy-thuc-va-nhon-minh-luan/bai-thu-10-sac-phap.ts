import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-muoi-sac-phap" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI - III. SẮC PHÁP (CÓ 11 MÓN)</h2>
    </div>

    <h3 id="tong-quan-sac-phap" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tổng quan về Sắc pháp</h3>
    <p>Sắc pháp là thuộc về sắc, tức những cái thuộc về sắc. Sắc có hai loại: hình sắc như dài, ngắn, vuông, tròn và màu sắc như xanh, đỏ, trắng, vàng.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold text-secondary-700 dark:text-secondary-300">Sắc pháp gồm 11 món</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>5 căn:</strong> Nhãn căn, Nhĩ căn, Tỷ căn, Thiệt căn, Thân căn.</li>
        <li><strong>6 trần:</strong> Sắc trần, Thinh trần, Hương trần, Vị trần, Xúc trần, Pháp trần.</li>
      </ul>
      <p class="mb-0 mt-3">Sắc pháp là tướng phần ảnh tượng của Tâm Vương và Tâm sở, nên trong Duy thức nói: <em>nhị sở hiện ảnh cố</em>.</p>
    </div>

    <h3 id="nam-can" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Năm căn</h3>
    <p>Chữ "Căn" có nghĩa là làm chỗ nương cho thức và phát sanh ra thức. Năm căn, căn nào cũng có hai thứ: một phần tinh tế ở bên trong gọi là <strong>Thắng nghĩa căn</strong>, và một phần thô phù ở bên ngoài gọi là <strong>Phù trần căn</strong>.</p>

    <h4 id="nhan-can" class="text-lg font-semibold">Nhãn căn</h4>
    <p>Nhãn căn là con mắt. Hình tướng của con mắt như trái nho. Nghiệp dụng của nó là chiếu soi các sắc.</p>

    <h4 id="nhi-can" class="text-lg font-semibold">Nhĩ căn</h4>
    <p>Nhĩ căn là lỗ tai. Hình tướng của tai như lá sen non. Nghiệp dụng của nó là hay nghe các tiếng.</p>

    <h4 id="ty-can" class="text-lg font-semibold">Tỷ căn</h4>
    <p>Tỷ căn là lỗ mũi. Hình tướng của lỗ mũi như hai ngón tay xuôi xuống. Nghiệp dụng của nó là hay ngửi các mùi thơm và hôi.</p>

    <h4 id="thiet-can" class="text-lg font-semibold">Thiệt căn</h4>
    <p>Thiệt căn là cái lưỡi. Hình tướng của lưỡi như trăng lưỡi liềm. Nghiệp dụng của nó là nếm các vị và nói năng kêu gọi.</p>

    <h4 id="than-can" class="text-lg font-semibold">Thân căn</h4>
    <p>Thân căn là thân thể. Chữ "thân" có hai nghĩa: tích tụ các bộ phận và làm chỗ nương cho các căn. Nghiệp dụng của nó là duyên xúc trần, như nặng, nhẹ, trơn, nhám.</p>

    <h3 id="sau-tran" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Sáu trần</h3>
    <p>Chữ "trần" có nghĩa là nhiễm ô và bụi bặm. Sáu trần là sáu cảnh bị sáu căn duyên đến, từ cảnh bị thấy cho đến cái bóng dáng còn lưu lại trong ý thức.</p>

    <h4 id="sac-tran" class="text-lg font-semibold">Sắc trần</h4>
    <p>Sắc trần là cảnh bị thấy của con mắt. Sắc trần có 25 món:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Xanh</li>
      <li>Vàng</li>
      <li>Đỏ</li>
      <li>Trắng</li>
      <li>Dài</li>
      <li>Ngắn</li>
      <li>Vuông</li>
      <li>Tròn</li>
      <li>To</li>
      <li>Nhỏ</li>
      <li>Cao</li>
      <li>Thấp</li>
      <li>Ngay</li>
      <li>Xiên</li>
      <li>Ánh sáng</li>
      <li>Bóng</li>
      <li>Sáng</li>
      <li>Tối</li>
      <li>Khói</li>
      <li>Bụi</li>
      <li>Mây</li>
      <li>Mù</li>
      <li>Cực lược sắc (sắc rất nhỏ) và cực quýnh sắc (sắc rất xa)</li>
      <li>Biểu sắc (sắc có nêu ra được)</li>
      <li>Sắc hư không</li>
    </ol>

    <h4 id="thinh-tran" class="text-lg font-semibold">Thinh trần</h4>
    <p>Thinh trần là tiếng, cảnh bị nghe của tai. Có 12 loại tiếng:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Tiếng: cái tướng bị nghe của tai, nói chung là các tiếng.</li>
      <li>Tiếng vừa ý.</li>
      <li>Tiếng không vừa ý.</li>
      <li>Tiếng bình thường, không ưa ghét.</li>
      <li>Tiếng loài hữu tình, như tiếng nói.</li>
      <li>Tiếng loài vô tình, như tiếng cây cối.</li>
      <li>Tiếng thuộc cả hữu tình và vô tình, như tiếng trống do tay người ta đánh.</li>
      <li>Tiếng thuộc về thế tục nói.</li>
      <li>Tiếng thuộc về của Thánh giả.</li>
      <li>Tiếng của ngoại đạo nói, do Biến kế sở chấp.</li>
      <li>Tiếng nói chánh (Thánh ngôn): như thật có thấy, nghe, hay, biết thì nói có thấy, nghe, hay và biết; không thấy, nghe, hay, biết thì nói không thấy, nghe, hay, biết; như thế gọi là 8 lời nói chánh.</li>
      <li>Tiếng vang.</li>
    </ol>

    <h4 id="huong-tran" class="text-lg font-semibold">Hương trần</h4>
    <p>Hương trần là mùi, cảnh bị ngửi của mũi. Có 6 thứ mùi:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Mùi thơm.</li>
      <li>Mùi hôi.</li>
      <li>Mùi không thơm hôi.</li>
      <li>Mùi từ bản chất sanh (câu sanh hương).</li>
      <li>Mùi do chế tạo mà có (hòa hiệp hương).</li>
      <li>Mùi do sự biến đổi mà sanh.</li>
    </ol>

    <h4 id="vi-tran" class="text-lg font-semibold">Vị trần</h4>
    <p>Vị trần là vị, cảnh bị nếm của lưỡi. Có 12 thứ vị:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Vị đắng.</li>
      <li>Vị chua.</li>
      <li>Vị ngọt.</li>
      <li>Vị cay.</li>
      <li>Vị mặn.</li>
      <li>Vị lạt.</li>
      <li>Vị vừa ý.</li>
      <li>Vị không vừa ý.</li>
      <li>Vị bình thường.</li>
      <li>Vị từ bản chất sanh.</li>
      <li>Vị do hòa hiệp chế tạo mà có.</li>
      <li>Vị do biến đổi mà sanh.</li>
    </ol>

    <h4 id="xuc-tran" class="text-lg font-semibold">Xúc trần</h4>
    <p>Xúc trần là xúc, cảnh bị biết của thân. Xúc trần có 26 món:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Đất.</li>
      <li>Nước.</li>
      <li>Gió.</li>
      <li>Lửa.</li>
      <li>Nhẹ.</li>
      <li>Nặng.</li>
      <li>Nhám.</li>
      <li>Trơn.</li>
      <li>Hoãn.</li>
      <li>Gấp.</li>
      <li>Lạnh.</li>
      <li>Nóng.</li>
      <li>Cứng.</li>
      <li>Mềm.</li>
      <li>Đói.</li>
      <li>Khát.</li>
      <li>No.</li>
      <li>Sức lực.</li>
      <li>Yếu.</li>
      <li>Buồn.</li>
      <li>Ngứa.</li>
      <li>Dính.</li>
      <li>Già.</li>
      <li>Bệnh.</li>
      <li>Chết.</li>
      <li>Ốm.</li>
    </ol>

    <h4 id="phap-tran" class="text-lg font-semibold">Pháp trần</h4>
    <p>Pháp trần là cái bóng dáng của năm trần còn lưu lại trong ý thức. Nghĩa là khi mắt không còn thấy sắc, tai không còn nghe tiếng, cho đến thân không còn biết xúc mà trong ý thức vẫn nhớ lại bóng dáng của năm trần; cái bóng dáng đó là pháp trần. Trong Duy thức gọi là <em>lạc tạ ảnh tử</em>, tức cái bóng rớt lại.</p>
    <p>Đây là cảnh bị biết của ý thức. Pháp trần có 5 loại:</p>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Cực lược sắc:</strong> Sắc rất nhỏ như vi trần.</li>
      <li><strong>Cực quýnh sắc:</strong> Sắc rất xa, như thấy tăm tăm mù mù.</li>
      <li><strong>Định quả sắc:</strong> Những sắc tướng do tu định hiện ra, như các vị Bồ Tát khi nhập định hiện ra nước, lửa, thế giới.</li>
      <li><strong>Vô biểu sắc:</strong> Sắc không nêu bày ra được; như khi thọ giới, ý thức lãnh thọ mà có, nên cũng gọi là thọ sở dẫn sắc.</li>
      <li><strong>Biến kế sở chấp sắc:</strong> Sắc do ý thức vọng tưởng phân biệt sanh, chẳng thật.</li>
    </ul>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong giáo lý được trình bày, Sắc pháp bao gồm tổng cộng bao nhiêu món?',
    options: {
      a: '5 món',
      b: '6 món',
      c: '10 món',
      d: '11 món',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Sắc pháp có 11 món, bao gồm 5 căn và 6 trần [1].',
    },
  },
  {
    question:
      'Mỗi căn trong năm căn đều có hai phần: một phần tinh tế bên trong và một phần thô phù bên ngoài. Phần tinh tế bên trong được gọi là gì?',
    options: {
      a: 'Phù trần căn',
      b: 'Thắng nghĩa căn',
      c: 'Pháp trần',
      d: 'Ý căn',
    },
    answer: 'b',
    explanation: {
      b: 'Đúng. Trong năm căn, phần tinh tế nằm ở bên trong được gọi là Thắng nghĩa căn [1].',
    },
  },
  {
    question: 'Hình tướng của Nhĩ căn (lỗ tai) được so sánh với hình ảnh nào sau đây?',
    options: {
      a: 'Trăng lưỡi liềm',
      b: 'Hai ngón tay xuôi xuống',
      c: 'Trái nho',
      d: 'Lá sen non',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Hình tướng của Nhĩ căn (tai) được miêu tả là giống như lá sen non [2].',
    },
  },
  {
    question: "Theo định nghĩa về Sắc trần, loại sắc nào được hiểu là 'sắc có nêu ra được'?",
    options: {
      a: 'Biểu sắc',
      b: 'Biến kế sở chấp sắc',
      c: 'Cực lược sắc',
      d: 'Vô biểu sắc',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Biểu sắc chính là loại sắc có thể nêu ra được [3].',
    },
  },
  {
    question: 'Trong 12 loại Thinh trần, tiếng trống do tay người đánh được xếp vào loại nào?',
    options: {
      a: 'Tiếng loài hữu tình',
      b: 'Tiếng loài vô tình',
      c: 'Tiếng vang',
      d: 'Tiếng thuộc cả hữu tình và vô tình',
    },
    answer: 'd',
    explanation: {
      d: 'Đúng. Tiếng trống do tay người ta đánh là ví dụ điển hình của tiếng thuộc cả hữu tình và vô tình [3].',
    },
  },
  {
    question: 'Mùi do sự kết hợp, chế tạo mà thành (hòa hiệp hương) thuộc về loại trần nào?',
    options: {
      a: 'Hương trần',
      b: 'Vị trần',
      c: 'Sắc trần',
      d: 'Xúc trần',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Hòa hiệp hương (mùi do chế tạo mà có) là một trong 6 thứ mùi thuộc Hương trần [4].',
    },
  },
  {
    question:
      'Xúc trần có 26 món, bao gồm cả những trạng thái sinh lý. Trạng thái nào sau đây KHÔNG thuộc danh mục Xúc trần được nêu trong văn bản?',
    options: {
      a: 'Đói, Khát',
      b: 'Già, Bệnh, Chết',
      c: 'Vui, Giận',
      d: 'Trơn, Nhám',
    },
    answer: 'c',
    explanation: {
      c: 'Đúng. Đói, khát, già, bệnh, chết, trơn, nhám đều thuộc Xúc trần, nhưng các cảm xúc như vui, giận không nằm trong 26 món của Xúc trần [4].',
    },
  },
  {
    question: "Pháp trần được gọi là 'lạc tạ ảnh tử' trong Duy thức học. Cụm từ này có nghĩa là gì?",
    options: {
      a: 'Vật chất cực nhỏ',
      b: 'Ánh sáng rực rỡ',
      c: 'Cái bóng rớt lại',
      d: 'Sự phân biệt sai lầm',
    },
    answer: 'c',
    explanation: {
      c: 'Đúng. "Lạc tạ ảnh tử" có nghĩa là cái bóng rớt lại của 5 trần lưu lại trong ý thức [5].',
    },
  },
  {
    question:
      'Loại sắc tướng nào do các vị Bồ Tát nhập định hiện ra nước, lửa hoặc thế giới được gọi là gì?',
    options: {
      a: 'Cực quýnh sắc',
      b: 'Định quả sắc',
      c: 'Biến kế sở chấp sắc',
      d: 'Vô biểu sắc',
    },
    answer: 'b',
    explanation: {
      b: 'Đúng. Định quả sắc là những sắc tướng do tu định hiện ra, như khi các vị Bồ Tát nhập định [5].',
    },
  },
  {
    question: "Vô biểu sắc còn được gọi là 'thọ sở dẫn sắc'. Loại sắc này phát sinh từ hoạt động nào?",
    options: {
      a: 'Khi nghe tiếng vang từ xa',
      b: 'Khi tưởng tượng về những điều không thật',
      c: 'Khi ý thức lãnh thọ giới pháp',
      d: 'Khi mắt nhìn thấy ánh sáng',
    },
    answer: 'c',
    explanation: {
      c: 'Đúng. Vô biểu sắc sanh ra khi thọ giới và được ý thức lãnh thọ, nên còn gọi là sắc do thọ giới dẫn sanh [6].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-10-sac-phap',
  slug: 'bai-thu-10-sac-phap',
  title: 'Bài Thứ 10 - III. Sắc pháp',
  type: 'article',
  status: 'published',
  order: 12,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-06',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10-sac-phap/11_Th%C3%A0nh_Ph%E1%BA%A7n_S%E1%BA%AFc_Ph%C3%A1p.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-muoi-sac-phap', label: 'Bài Thứ Mười - III. Sắc pháp (có 11 món)' },
        { id: 'tong-quan-sac-phap', label: 'Tổng quan về Sắc pháp', indent: 1 },
        { id: 'nam-can', label: 'I. Năm căn', indent: 1 },
        { id: 'nhan-can', label: 'Nhãn căn', indent: 2 },
        { id: 'nhi-can', label: 'Nhĩ căn', indent: 2 },
        { id: 'ty-can', label: 'Tỷ căn', indent: 2 },
        { id: 'thiet-can', label: 'Thiệt căn', indent: 2 },
        { id: 'than-can', label: 'Thân căn', indent: 2 },
        { id: 'sau-tran', label: 'II. Sáu trần', indent: 1 },
        { id: 'sac-tran', label: 'Sắc trần', indent: 2 },
        { id: 'thinh-tran', label: 'Thinh trần', indent: 2 },
        { id: 'huong-tran', label: 'Hương trần', indent: 2 },
        { id: 'vi-tran', label: 'Vị trần', indent: 2 },
        { id: 'xuc-tran', label: 'Xúc trần', indent: 2 },
        { id: 'phap-tran', label: 'Pháp trần', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-10-sac-phap/The_Art_of_S%E1%BA%AFc_Ph%C3%A1p.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/FFxp9Pr_A-4',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/7865aU7Z1duuwYOynai8nk?utm_source=generator&si=28607172506c4d16',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Sắc pháp',
    passPercentage: 70,
    questions,
  },
}

export default lesson
