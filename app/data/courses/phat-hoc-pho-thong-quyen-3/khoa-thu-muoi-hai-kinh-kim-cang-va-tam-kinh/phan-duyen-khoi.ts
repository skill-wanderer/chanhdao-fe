import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÁT NHÃ TÂM KINH</p>
      <h2 id="phan-duyen-khoi" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Phần Duyên Khởi</h2>
    </div>

    <h4 class="mt-8 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Ngài Quán Tự Tại Bồ Tát, sau khi đi sâu vào Trí huệ Bát Nhã rồi, thấy năm uẩn đều "không" (Bát Nhã), nên không còn các khổ.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn thứ nhứt, nói: Bồ Tát dùng Trí huệ Bát Nhã, thấy các pháp đều không (Bát Nhã) nên không còn các khổ.</p>
    <p>Tất cả chúng sanh vì mê bản thể chơn tâm thanh tịnh của mình, nên vọng hiện ra có thế giới và chúng sanh, cũng như người mê ngủ chiêm bao, nên thấy có các cảnh vật.</p>
    <p>Chúng sanh chấp các cảnh vật đó là thật, nên khởi ra tham, sân, si tạo đủ các nghiệp, rồi sanh tử luân hồi chịu đủ kiểu khổ sở. Cũng như người đang chiêm bao, vì chấp cảnh vật trong chiêm bao là thật, nên sanh ra vui buồn đủ chuyện.</p>
    <p>Bồ Tát dùng Trí huệ Bát Nhã, thấy rõ các pháp (thế giới, chúng sanh) đều không, do vô minh vọng tưởng hiện ra, nên Bồ Tát không còn bị các khổ bởi vô minh vọng tưởng. Cũng như người đã thức giấc chiêm bao, thấy rõ các cảnh vật trong chiêm bao đều không có, nên không còn bị khổ vui bởi cảnh chiêm bao.</p>
    <p>Tóm lại, chúng sanh vì chấp năm uẩn thật có, nên mới chịu các khổ sở. Bồ Tát dùng Trí huệ Bát Nhã thấy năm uẩn đều không, nên không còn bị các khổ.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-6">
      <p class="mb-4 font-bold text-primary-800 dark:text-primary-300">GIẢI DANH TỪ</p>
      
      <div class="mb-4">
        <p class="mb-1 font-semibold">QUÁN TỰ TẠI BỒ TÁT:</p>
        <p class="mb-2">Ngài Huyền Trang Pháp sư dịch là "Quán Tự Tại Bồ Tát"; Cựu dịch: "Quán Thế Âm Bồ Tát". Quán Tự Tại, có hai nghĩa:</p>
        <div class="pl-6 space-y-1">
          <p class="mb-0">1. Quán rõ các pháp đều do tâm biến hiện, nên chúng sanh được quả tự tại.</p>
          <p class="mb-0">2. Quán biết căn cơ của chúng sanh, nên sự giáo hoá được tự tại.</p>
        </div>
      </div>

      <div class="mb-4">
        <p class="mb-1 font-semibold">BỒ TÁT:</p>
        <p class="mb-2">Trung Hoa dịch tắt chữ "Bồ Đề Tát Đỏa". "Bồ Đề" dịch là "Giác"; "Tát đỏa" dịch là "Hữu tình"; nghĩa là chúng hữu tình đã được giác ngộ. Có ba nghĩa:</p>
        <div class="pl-6 space-y-2">
          <p class="mb-0"><strong>Phần tự lợi:</strong> Tức là "Hữu tình giác", nghĩa là chúng hữu tình đã giác ngộ, nhưng chưa được hoàn toàn như Phật. Vì còn vi tế sở tri ngu, nên giác mà còn hữu tình.</p>
          <p class="mb-0"><strong>Phần lợi tha:</strong> Tức là "Giác hữu tình"; nghĩa là phần mình đã giác ngộ, rồi giác ngộ cho chúng sanh.</p>
          <p class="mb-0"><strong>Phần tự lợi, tự tha:</strong> Tức là "Tự giác, giác tha"; nghĩa là trên cầu đạo Phật để giác ngộ cho mình, dưới giáo hoá chúng sanh.</p>
        </div>
        <p class="mt-2 mb-0 italic text-sm">Nghĩa thứ nhứt, tức là "Trí", nghĩa thứ hai tức là "Bi", nghĩa thứ ba cả Bi và Trí. Bồ Tát "Bi, Trí" gồm đủ, "Lý, Sự" vô ngại, nên gọi là "Quán Tự Tại Bồ Tát".</p>
      </div>

      <div class="mb-4">
        <p class="mb-1 font-semibold">ĐI SÂU VÀO TRÍ HUỆ BÁT NHÃ:</p>
        <p class="mb-0">Tức là Bồ Tát đã thâm nhập Trí huệ Bát Nhã.</p>
      </div>

      <div class="mb-4">
        <p class="mb-1 font-semibold">NĂM UẨN ĐỀU KHÔNG:</p>
        <p class="mb-2">Hàng Nhị thừa phá cái chấp ngã, nhưng còn chấp pháp; nghĩa là thấy không có "ngã", nhưng còn năm uẩn. Hàng Đại thừa Bồ Tát, thì ngã pháp đều phá; nghĩa là ngã đã không mà năm uẩn cũng không.</p>
        <p class="mb-2">Năm uẩn là: Sắc, Thọ, Tưởng, Hành, Thức. Ngài Huyền Trang dịch là "ngũ uẩn". Chữ "uẩn" là "chứa nhóm"; nghĩa là năm món này tích tụ chứa nhóm làm thân và làm tâm.</p>
        <p class="mb-2">Cựu dịch là "ngũ ấm". Chữ "Ấm" là che đậy; nghĩa là năm món này che đậy chơn tâm thanh tịnh, như mây che mặt nhựt.</p>
        <p class="mb-0">Tóm lại, tất cả sự vật trong vũ trụ, không ngoài thế giới và chúng sanh. Thế giới chúng sanh không ngoài Sắc (vật chất) và Tâm (tinh thần). Sắc tức là sắc uẩn; tâm tức là tâm uẩn: thọ, tưởng, hành, thức. Bởi thế nên nói "năm uẩn đều không", tức là nói "thế giới và chúng sanh hay tất cả sự vật trong vũ trụ đều không".</p>
      </div>

      <div class="mb-0">
        <p class="mb-1 font-semibold">KHỔ:</p>
        <p class="mb-0">Các khổ vô biên nhưng tóm lại có ba món khổ: khổ khổ, hoại khổ và hành khổ; hay tám món khổ là: sanh khổ, lão khổ, bịnh khổ, tử khổ, ái biệt ly khổ, oán tắng hội khổ, ngũ ấm xí thạnh khổ, cầu bất đắc khổ <span class="text-sm opacity-80">(xem Khổ đế trong quyển Tứ Diệu Đế, do Hương Đạo xuất bản)</span>.</p>
      </div>

    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo lược giải, tại sao chúng sanh lại phải chịu khổ và luân hồi trong sanh tử?",
    options: {
      a: "Do nghiệp báo từ nhiều đời trước không thể hóa giải.",
      b: "Do không thực hành đúng các nghi lễ tôn giáo định kỳ.",
      c: "Do thế giới khách quan vốn dĩ là nơi đầy rẫy sự khổ đau.",
      d: "Do mê lầm bản thể chơn tâm và chấp các cảnh vật, năm uẩn là thật có.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Lược giải nêu: 'Tất cả chúng sanh vì mê bản thể chơn tâm thanh tịnh... Chúng sanh chấp các cảnh vật đó là thật, nên khởi ra tham, sân, si tạo đủ các nghiệp, rồi sanh tử luân hồi chịu đủ kiểu khổ sở.'",
    },
  },
  {
    question: "Ngài Huyền Trang Pháp sư dịch danh hiệu của vị Bồ Tát trong đoạn văn là gì?",
    options: {
      a: "Quán Tự Tại Bồ Tát",
      b: "Quán Thế Âm Bồ Tát",
      c: "Đại Bi Bồ Tát",
      d: "Bát Nhã Bồ Tát",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Trong phần Giải danh từ: 'Ngài Huyền Trang Pháp sư dịch là Quán Tự Tại Bồ Tát; Cựu dịch: Quán Thế Âm Bồ Tát.'",
      b: "Sai. Đây là Cựu dịch.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong danh từ 'Bồ Tát', chữ 'Bồ Đề' mang ý nghĩa là gì?",
    options: {
      a: "Giác",
      b: "Trí huệ",
      c: "Hữu tình",
      d: "Giải thoát",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Trung Hoa dịch tắt chữ Bồ Đề Tát Đỏa. Bồ Đề dịch là Giác; Tát đỏa dịch là Hữu tình'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Sự khác biệt chính giữa cách nhìn của hàng 'Nhị thừa' và hàng 'Đại thừa Bồ Tát' đối với năm uẩn là gì?",
    options: {
      a: "Hàng Nhị thừa phá chấp ngã nhưng còn chấp pháp; Bồ Tát phá cả chấp ngã lẫn chấp pháp.",
      b: "Hàng Nhị thừa chỉ tập trung vào khổ, còn Bồ Tát tập trung vào vui.",
      c: "Hàng Nhị thừa thấy năm uẩn là thật, trong khi Bồ Tát thấy chúng là giả.",
      d: "Hàng Nhị thừa không tin vào năm uẩn, còn Bồ Tát tin vào năm uẩn.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Giải danh từ 'NĂM UẨN ĐỀU KHÔNG' ghi: 'Hàng Nhị thừa phá cái chấp ngã, nhưng còn chấp pháp; nghĩa là thấy không có ngã, nhưng còn năm uẩn. Hàng Đại thừa Bồ Tát, thì ngã pháp đều phá; nghĩa là ngã đã không mà năm uẩn cũng không.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo 'Cựu dịch', tại sao năm uẩn lại được gọi là 'ngũ ấm'?",
    options: {
      a: "Vì chúng chứa nhóm các nghiệp lành và dữ.",
      b: "Vì chúng bảo vệ con người khỏi những tác động xấu của ngoại cảnh.",
      c: "Vì chúng là năm loại khổ đau lớn nhất của con người.",
      d: "Vì chúng che đậy chơn tâm thanh tịnh, giống như mây che mặt trời.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Cựu dịch là ngũ ấm. Chữ Ấm là che đậy; nghĩa là năm món này che đậy chơn tâm thanh tịnh, như mây che mặt nhựt.'",
    },
  },
  {
    question: "Trong cấu trúc của năm uẩn, những thành phần nào thuộc về phần 'Tâm' (tinh thần)?",
    options: {
      a: "Sắc, Thọ, Tưởng, Hành",
      b: "Chỉ có Thức uẩn là thuộc về Tâm.",
      c: "Thọ, Tưởng, Hành, Thức",
      d: "Sắc, Thọ, Tưởng, Thức",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Giải danh từ nêu: 'Sắc tức là sắc uẩn; tâm tức là tâm uẩn: thọ, tưởng, hành, thức.'",
      d: "Sai.",
    },
  },
  {
    question: "Nghĩa thứ hai của 'Quán Tự Tại' liên quan đến khả năng nào của Bồ Tát?",
    options: {
      a: "Khả năng nhìn thấu suốt tương lai của nhân loại.",
      b: "Khả năng tự mình thoát khỏi mọi ràng buộc vật chất.",
      c: "Khả năng quán biết căn cơ của chúng sanh để giáo hóa tự tại.",
      d: "Khả năng đi sâu vào các cõi giới khác nhau.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Quán Tự Tại, có hai nghĩa: 1... 2. Quán biết căn cơ của chúng sanh, nên sự giáo hoá được tự tại.'",
      d: "Sai.",
    },
  },
  {
    question: "Khi nói 'Năm uẩn đều không', văn bản ngụ ý điều gì về vũ trụ và vạn vật?",
    options: {
      a: "Mọi sự vật trong vũ trụ đều không hề tồn tại dưới bất kỳ hình thức nào.",
      b: "Chỉ những người đã giác ngộ mới thấy mọi thứ đều không.",
      c: "Chỉ có thế giới vật chất là không, còn tâm linh là có thật.",
      d: "Thế giới, chúng sanh hay tất cả sự vật trong vũ trụ đều không.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Bởi thế nên nói năm uẩn đều không, tức là nói thế giới và chúng sanh hay tất cả sự vật trong vũ trụ đều không.'",
    },
  },
  {
    question: "Phần 'Tự giác, giác tha' trong nghĩa của Bồ Tát tương ứng với sự kết hợp của hai yếu tố nào?",
    options: {
      a: "Bi và Trí",
      b: "Nghiệp và Quả",
      c: "Định và Tuệ",
      d: "Sắc và Tâm",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Nghĩa thứ nhất (tự lợi) là Trí, nghĩa thứ hai (lợi tha) là Bi, nghĩa thứ ba (tự giác, giác tha) là cả Bi và Trí.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong tám món khổ được liệt kê, món khổ nào liên quan trực tiếp đến sự 'hừng hẫy' của năm uẩn?",
    options: {
      a: "Oán tắng hội khổ",
      b: "Cầu bất đắc khổ",
      c: "Ái biệt ly khổ",
      d: "Ngũ ấm xí thạnh khổ",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Danh sách 8 món khổ có liệt kê 'ngũ ấm xí thạnh khổ' (năm ấm/uẩn hừng hẫy lẫy lừng là khổ).",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-phan-duyen-khoi',
  slug: 'phan-duyen-khoi',
  title: 'Phần Duyên khởi',
  type: 'article',
  status: 'published',
  order: 20,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/phan-duyen-khoi/Th%E1%BA%A5u_Hi%E1%BB%83u_T%C3%A1nh_Kh%C3%B4ng.png',
      readingContent,
      tableOfContents: [
        { id: 'phan-duyen-khoi', label: 'Phần Duyên Khởi' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/phan-duyen-khoi/Heart_Sutra_Awakening_(2).pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/UUpvefvw1Is',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1EUt3j7nXCyvg3DDoJToMk',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần Duyên Khởi',
    passPercentage: 70,
    questions,
  },
}

export default lesson