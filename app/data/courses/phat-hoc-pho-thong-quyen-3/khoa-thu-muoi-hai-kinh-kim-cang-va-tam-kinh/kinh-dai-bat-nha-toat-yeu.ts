import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH ĐẠI BÁT NHÃ TOÁT YẾU</p>
      <h2 id="bat-nha-tam-kinh" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÁT NHÃ TÂM KINH</h2>
    </div>

    <div class="my-6 pl-4 border-l-4 border-primary-300 dark:border-primary-700 italic opacity-80">
      <p class="mb-1">Ngài Tam tạng Pháp sư CƯU MA LA THẬP, dịch chữ Phạn ra chữ Hán</p>
      <p class="mb-0">Sa môn THÍCH THIỆN HOA dịch lại chữ Việt và lược giải</p>
    </div>

    <h3 id="ban-dich-thu-nhat" class="mt-8 text-xl font-bold text-secondary-700 dark:text-secondary-300">NGUYÊN VĂN (Bản dịch thứ nhất)</h3>
    <p>Ngài Quán Tự Tại Bồ Tát, sau khi đi sâu vào Trí huệ Bát Nhã rồi, Ngài thấy năm uẩn đều "không" (Bát Nhã) nên không còn các khổ.</p>
    <p>Ngài gọi ông Xá Lợi Tử dạy rằng: "Này Xá Lợi Tử ! Năm uẩn (sắc, thọ, tưởng, hành, thức) chẳng khác với "không", "không" chẳng khác với năm uẩn; năm uẩn tức là "không", "không" tức là năm uẩn.</p>
    <p>Này Xá Lợi Tử ! "Tướng không" (Bát Nhã) của các pháp đây, nó không sanh không diệt, không nhơ không sạch, không thêm không bớt.</p>
    <p>Bởi thế nên, trong "Tướng không" (Bát Nhã) này, không có năm uẩn là: sắc, thọ, tưởng, hành, thức; không có Sáu căn là: nhãn, nhĩ, tỷ, thiệt, thân, ý; không có Sáu trần là: sắc, thinh, hương, vị, xúc, pháp; không có Sáu thức là: nhãn thức, nhĩ thức, tỷ thức, thiệt thức, thân thức và ý thức;</p>
    <p>Không có mười hai nhơn duyên; nghĩa là không có "vô minh" và cũng không có "hết vô minh"; cho đến không có "Lão tử" và cũng không có "hết Lão tử";</p>
    <p>Không có Tứ đế là: khổ, tập, diệt, đạo; cũng không có "trí" tu chứng và đạo quả để chứng (đắc). Tóm lại, không có "đặng" cái gì cả.</p>
    <p>Các vị Bồ Tát nhờ y theo Trí huệ Bát Nhã (Tướng không) mà xa lìa được các mộng tưởng điên đảo, nên tâm không còn ngăn ngại, lo sợ và chứng được rốt ráo Niết bàn.</p>
    <p>Các đức Phật quá khứ, hiện tại và vị lai cũng đều y theo Trí huệ Bát Nhã (Tướng không) mà đặng đạo Vô thượng Bồ Đề.</p>
    <p>Vì Trí huệ Bát Nhã (Tướng không) có khả năng diệt trừ hết các khổ, chắc chắn như vậy, không hư dối, nên gọi là thần chú Bát Nhã Ba La Mật; cũng gọi là "chú Đại thần, chú Đại minh, chú Vô thượng và chú Vô đẳng đẳng".</p>
    <p>Ngài Quán Tự Tại Bồ Tát liền nói Thần chú Bát Nhã: <span class="font-semibold italic text-primary-600 dark:text-primary-400">"Yết đế yết đế, Ba la yết đế, Ba la tăng yết đế, Bồ Đề tát bà ha"</span>.</p>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50"></div>

    <h3 id="ban-dich-thu-hai" class="mt-8 text-xl font-bold text-secondary-700 dark:text-secondary-300">NGUYÊN VĂN (Bản dịch thứ hai)</h3>
    <p>Sau khi đi sâu vào Trí huệ Bát Nhã rồi, Ngài Quán Tự Tại Bồ Tát thấy các pháp đều là Bát Nhã (không), nên không còn các khổ.</p>
    <p>Ngài gọi ông Xá Lợi Tử dạy rằng: "Này Xá Lợi Tử ! Các pháp chẳng khác với Bát Nhã (không), Bát Nhã chẳng khác với các Pháp; các Pháp tức là Bát Nhã (không), Bát Nhã tức là các Pháp.</p>
    <p>Này Xá Lợi Tử ! Bát Nhã (tướng không) là tánh của các Pháp. Nó không sanh không diệt, không nhơ không sạch, không thêm không bớt.</p>
    <p>Bởi thế nên trong Bát Nhã (không), không có các Pháp thế gian như: Năm uẩn (sắc, thọ, tưởng, hành, thức), sáu căn (nhãn, nhĩ, tỷ, thiệt, thân, ý), sáu trần (sắc, thinh, hương, vị, xúc, pháp), sáu thức (nhãn thức, nhĩ thức, tỷ thức, thiệt thức, thân thức và ý thức).</p>
    <p>Và trong Bát Nhã, cũng không có các Pháp xuất thế gian như: Tứ đế (khổ, tập, diệt, đạo), Mười hai nhơn duyên (không có vô minh và vô minh tận; không có Lão tử và Lão tử tận), không có "trí" tu chứng và đạo quả để chứng (đắc). Tóm lại, trong Bát Nhã không có cái gì cả.</p>
    <p>Các vị Bồ Tát nhờ y theo Trí huệ Bát Nhã (không) mà xa lìa được các mộng tưởng điên đảo, nên tâm không còn ngăn ngại, lo sợ và chứng được đạo quả Niết bàn.</p>
    <p>Các đức Phật quá khứ, hiện tại và vị lai, cũng đều y theo Trí huệ Bát Nhã (không) mà đặng đạo vô thượng Bồ Đề.</p>
    <p>Vì Trí huệ Bát Nhã có khả năng diệt trừ hết các khổ, chắc chắn như vậy không hư dối, nên cũng gọi là Thần chú Bát Nhã, cũng gọi là chú Đại thần, chú Đại minh, chú Vô thượng và chú Vô đẳng đẳng".</p>
    <p>Ngài Quán Tự Tại Bồ Tát, liền nói thần chú Bát Nhã: <span class="font-semibold italic text-primary-600 dark:text-primary-400">"Yết đế yết đế, Ba la yết đế, Ba La Tăng Yết đế, Bồ Đề tát bà ha"</span>.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo văn bản, vị Bồ Tát nào đã thực hành sâu xa Trí huệ Bát Nhã và nhận ra năm uẩn đều là 'không'?",
    options: {
      a: "Ngài Quán Tự Tại Bồ Tát",
      b: "Ngài Địa Tạng Vương Bồ Tát",
      c: "Ngài Xá Lợi Tử",
      d: "Ngài Văn Thù Sư Lợi Bồ Tát",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Ngài Quán Tự Tại Bồ Tát, sau khi đi sâu vào Trí huệ Bát Nhã rồi, Ngài thấy năm uẩn đều không (Bát Nhã) nên không còn các khổ.'",
      b: "Sai.",
      c: "Sai. Xá Lợi Tử là vị đệ tử được Bồ Tát gọi để dạy.",
      d: "Sai.",
    },
  },
  {
    question: "Mối quan hệ giữa 'năm uẩn' và 'không' được mô tả như thế nào trong kinh văn?",
    options: {
      a: "Năm uẩn và 'không' tách biệt hoàn toàn.",
      b: "Năm uẩn tức là 'không', 'không' tức là năm uẩn.",
      c: "Năm uẩn có trước, sau đó mới trở thành 'không'.",
      d: "Năm uẩn che lấp mất tính 'không'.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Năm uẩn chẳng khác với không, không chẳng khác với năm uẩn; năm uẩn tức là không, không tức là năm uẩn.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Đặc tính nào sau đây thuộc về 'Tướng không' của các pháp theo lời dạy của Bồ Tát?",
    options: {
      a: "Không nhơ không sạch.",
      b: "Có thể thêm vào hoặc bớt đi.",
      c: "Có sanh có diệt theo thời gian.",
      d: "Luôn luôn biến đổi không ngừng.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Tướng không (Bát Nhã) của các pháp đây, nó không sanh không diệt, không nhơ không sạch, không thêm không bớt.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong 'Tướng không' (Bát Nhã), yếu tố nào sau đây KHÔNG tồn tại?",
    options: {
      a: "Trí tu chứng và đạo quả để đắc.",
      b: "Mười hai nhơn duyên và Tứ đế.",
      c: "Sáu căn (mắt, tai, mũi, lưỡi, thân, ý).",
      d: "Tất cả các yếu tố trên (Năm uẩn, Sáu căn, Sáu trần, Tứ đế, v.v.).",
    },
    answer: "d",
    explanation: {
      a: "Sai. Ý này có liệt kê nhưng chưa đủ.",
      b: "Sai. Ý này có liệt kê nhưng chưa đủ.",
      c: "Sai. Ý này có liệt kê nhưng chưa đủ.",
      d: "Đúng. Kinh văn phủ định sự tồn tại thật có của tất cả các pháp thế gian và xuất thế gian trong Bát Nhã (Tướng không).",
    },
  },
  {
    question: "Kinh văn nói gì về 'Vô minh' trong bối cảnh của Bát Nhã?",
    options: {
      a: "Vô minh là nguồn gốc của Bát Nhã.",
      b: "Không có vô minh và cũng không có hết vô minh.",
      c: "Chỉ có 'hết vô minh' là có thật.",
      d: "Cần phải diệt trừ vô minh để đạt được Bát Nhã.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'nghĩa là không có vô minh và cũng không có hết vô minh'.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Nhờ vào đâu mà các vị Bồ Tát xa lìa được các mộng tưởng điên đảo và chứng được Niết bàn?",
    options: {
      a: "Nhờ học thuộc lòng các bộ kinh điển.",
      b: "Nhờ y theo Trí huệ Bát Nhã.",
      c: "Nhờ cầu khẩn các đức Phật quá khứ.",
      d: "Nhờ khổ hạnh ép xác lâu ngày.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Các vị Bồ Tát nhờ y theo Trí huệ Bát Nhã (Tướng không) mà xa lìa được các mộng tưởng điên đảo... và chứng được rốt ráo Niết bàn.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Các đức Phật quá khứ, hiện tại và vị lai đặng đạo Vô thượng Bồ Đề nhờ vào điều gì?",
    options: {
      a: "Y theo Trí huệ Bát Nhã.",
      b: "Sự thọ ký của các đức Phật đời trước.",
      c: "Lòng từ bi vô hạn.",
      d: "Thần chú linh thiêng.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Các đức Phật quá khứ, hiện tại và vị lai cũng đều y theo Trí huệ Bát Nhã (Tướng không) mà đặng đạo Vô thượng Bồ Đề.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Trí huệ Bát Nhã lại được gọi là 'Thần chú Bát Nhã Ba La Mật'?",
    options: {
      a: "Vì nó mang lại sự giàu sang cho người đọc.",
      b: "Vì nó được dịch từ tiếng Phạn ra chữ Hán.",
      c: "Vì nó chứa đựng những âm thanh bí mật khó hiểu.",
      d: "Vì nó có khả năng diệt trừ hết các khổ, chắc chắn và không hư dối.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Vì Trí huệ Bát Nhã (Tướng không) có khả năng diệt trừ hết các khổ, chắc chắn như vậy, không hư dối, nên gọi là thần chú Bát Nhã Ba La Mật'.",
    },
  },
  {
    question: "Cụm từ 'Yết đế yết đế, Ba la yết đế, Ba la tăng yết đế, Bồ Đề tát bà ha' đại diện cho phần nào của kinh?",
    options: {
      a: "Lời chào của Ngài Xá Lợi Tử.",
      b: "Danh hiệu của các vị Phật quá khứ.",
      c: "Thần chú Bát Nhã.",
      d: "Phần lược giải của hòa thượng Thích Thiện Hoa.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Ngài Quán Tự Tại Bồ Tát liền nói Thần chú Bát Nhã: Yết đế yết đế, Ba la yết đế...'",
      d: "Sai.",
    },
  },
  {
    question: "Trong bản dịch thứ hai, 'Bát Nhã' (tướng không) được định nghĩa là gì đối với các pháp?",
    options: {
      a: "Là tánh của các pháp.",
      b: "Là cái không tồn tại sau khi các pháp diệt đi.",
      c: "Là kẻ thù của các pháp.",
      d: "Là một hình thức biến hiện của các pháp.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Bát Nhã (tướng không) là tánh của các Pháp. Nó không sanh không diệt, không nhơ không sạch, không thêm không bớt.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-kinh-dai-bat-nha-toat-yeu',
  slug: 'kinh-dai-bat-nha-toat-yeu',
  title: 'Kinh Đại Bát Nhã toát yếu',
  type: 'article',
  status: 'published',
  order: 17,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/kinh-dai-bat-nha-toat-yeu/Tr%C3%AD_Hu%E1%BB%87_B%C3%A1t_Nh%C3%A3.png',
      readingContent,
      tableOfContents: [
        { id: 'bat-nha-tam-kinh', label: 'Kinh Đại Bát Nhã Toát Yếu' },
        { id: 'ban-dich-thu-nhat', label: 'Bản dịch thứ nhất', indent: 1 },
        { id: 'ban-dich-thu-hai', label: 'Bản dịch thứ hai', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/kinh-dai-bat-nha-toat-yeu/Illuminated_Void.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/F446N9wn7Vk',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/7KMWDbRnj9T7LyDbdFh3X8',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bát Nhã Tâm Kinh',
    passPercentage: 70,
    questions,
  },
}

export default lesson