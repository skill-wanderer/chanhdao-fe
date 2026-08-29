import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="phan-tu" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">A. PHẦN TỰ (Phần mở đầu kinh Bát Nhã)</h2>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p>Tôi nghe như vầy: Một hôm, tại nước Xá Vệ, Phật và 1250 vị Đại Tỳ-kheo, đều ở Tịnh xá Kỳ Hoàn, trong vườn của ông Thái tử Kỳ Đà và ông Trưởng giả Cấp Cô Độc.</p>
      <p>Sắp đến giờ ngọ trai, Phật và chúng tăng đều đắp y, mang bình bát vào thành Xá Vệ, theo thứ lớp khất thực.</p>
      <p class="mb-0">Khất thực xong, Phật và chúng tăng đồng về Tịnh xá để thọ trai. Sau khi thọ trai xong, Phật xếp y, cất bình bát và rửa chân, rồi trải toạ cụ, ngồi yên tịnh.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đây là những cử chỉ bình thường và rất đơn giản; nhưng đã tạo thành một bức tranh tuyệt diệu, nói lên được tinh thần "giải thoát vô trụ", để mở màn cho Phật nói kinh Bát Nhã.</p>
    <p>Chúng ta hãy định tâm, đọc kỹ lại một lần nữa, những câu sau này, thì chúng ta sẽ thấy bộc lộ rõ ràng tinh thần Bát Nhã (giải thoát vô trụ).</p>
    <p>Sắp đến giờ ngọ trai, Phật và chúng tăng đều đắp y, mang bình bát vào thành Xá Vệ, theo thứ lớp khất thực.</p>
    <p>Khất thực xong, Phật và chúng tăng đồng về Tịnh xá để thọ trai. Sau khi thọ trai xong, Phật xếp y, cất bình bát và rửa chân, rồi trải toạ cụ ngồi yên tịnh.</p>
    <p>Vì ngộ được tánh "Bát Nhã giải thoát", trùm khắp trên muôn vật, nên Cổ nhơn có nói hai câu:</p>
    
    <div class="pl-6 italic my-2">
      <p class="mb-0">Thanh thanh tuý trúc, tổng thị Chơn như</p>
      <p class="mb-0">Uất uất huỳnh hoa, vô phi Bát Nhã.</p>
    </div>
    
    <p class="mt-4 font-semibold">Dịch nghĩa:</p>
    <div class="pl-6 italic my-2">
      <p class="mb-0">Mướt mướt tre xanh, biểu lộ Chơn như.</p>
      <p class="mb-0">Mởn mởn hoa vàng, trình bày Bát Nhã.</p>
    </div>

    <p class="mt-6 font-semibold">Ngài Thái Hư pháp sư giảng:</p>
    <p>"Phật nói kinh này để chỉ rõ trong mỗi chúng sanh đều sẵn đủ bản thể Kim Cang Bát Nhã. Cái diệu dụng của Kim Cang Bát Nhã là làm cho hành giả khi tu Lục độ vạn hạnh, mà không trụ chấp các tướng.</p>
    <p>Người ngộ được Kim Cang Bát Nhã rồi thì đối với các pháp và mọi việc đều thông suốt vô ngại; những việc làm bình thường hằng ngày đều là Phật pháp, tạm bình thường đó cũng là Phật pháp cho đến đi, đứng, nằm, ngồi v.v... cũng đều là Phật pháp. Những việc thần thông biến hoá đều là diệu dụng vô thượng của chư Phật đã đành, mà những nỗi mừng, vui, giận, ghét cũng là cái phương tiện hay khéo của Phật pháp.</p>
    <p>Trái lại, nếu người chưa nhập được "Kim Cang Bát Nhã", dù có được thần thông biến hoá di sơn đảo hải đi nữa, thì cũng là tà thuật của yêu ma ngoại đạo, dù có thiền định muôn năm, cũng chỉ hưởng phước quả hữu lậu của cõi nhơn, thiên mà thôi; một mai nghiệp báo hết rồi, vẫn trở lại thọ khổ luân hồi trong lục đạo. Quí vị nên chín chắn nghĩ xét!</p>
    <p>Kinh Kim Cang Bát Nhã, trong mỗi người đều sẵn đủ và khắp cả pháp giới. Nó không ở trong, không ở ngoài, không ở chính giữa và cũng không rời trong ngoài và chính giữa; không thể nghĩ bàn và cũng không trụ chấp được. Nếu người bền chí tu hành lâu dài, thì sẽ có ngày tự nhiên đốn ngộ. Trái lại, nếu người hướng ngoại tìm cầu, chấp rằng Phật có thần thông biến hoá v.v... phải có đủ như thế, mới phải là Phật. Những người chấp như thế, không thể phân biệt, giản trạch được thế nào là Phật pháp và thế nào là ngoại đạo. Than ôi! nếu sai một hào ly, thì cách xa ngàn dặm! Quí vị phải cẩn thận, rất cẩn thận!"</p>
    <p class="text-right text-sm opacity-80">(KIM CANG GIẢNG LỤC)</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="giai-danh-tu" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">GIẢI DANH TỪ</h3>
    </div>

    <p id="toi-nghe-nhu-vay" class="font-semibold uppercase text-primary-700 dark:text-primary-300">TÔI NGHE NHƯ VẦY:</p>
    <p>Trong trí Độ Luận có chép: "Khi Đức Như Lai sắp nhập Niết bàn, ông Ưu Ba Ly nói với A Nan rằng: Ông là người giữ gìn "Pháp tạng" của Phật, ông phải bạch Phật những điều cần yếu về sau.</p>
    <p>Ông Ưu Ba Ly và A Nan cùng nhau đến bạch Phật bốn điều:</p>
    <div class="pl-6 space-y-2 mt-2 mb-4">
      <p class="mb-0">1. Tất cả các kinh của Phật, mở đầu nên đề chữ gì?</p>
      <p class="mb-0">2. Phật nhập diệt rồi lấy ai làm thầy?</p>
      <p class="mb-0">3. Nương nơi đâu mà trụ?</p>
      <p class="mb-0">4. Xá lợi và y bát của Phật, phân như thế nào?</p>
    </div>
    
    <p class="font-semibold">Phật dạy:</p>
    <div class="pl-6 space-y-2 mt-2 mb-4">
      <p class="mb-0">1. Mở đầu các kinh, hãy để "Như thị ngã văn" (tôi nghe như vầy).</p>
      <p class="mb-0">2. Ta nhập Niết bàn, các ông phải lấy "giới luật" làm thầy.</p>
      <p class="mb-0">3. Các ông phải trụ nơi pháp "Tứ niệm xứ" (quán thân bất tịnh, quán thọ thị khổ, quán tâm vô thường, quán pháp vô ngã).</p>
      <p class="mb-0">4. Xá lợi của ta chia làm ba phần (một phần thờ tại nhơn gian, một phần thờ trên các cõi trời, một phần thờ dưới Long cung) còn y và bát truyền lại cho ông Ma Ha Ca Diếp.</p>
    </div>

    <p id="ty-kheo" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">TỲ KHEO:</p>
    <p>Tỳ kheo là dịch âm của tiếng Phạn, dịch nghĩa có ba:</p>
    <div class="pl-6 space-y-2 mt-2 mb-4">
      <p class="mb-0"><strong>Khất sĩ:</strong> Là kẻ đi xin: trên xin giáo pháp của Phật để nuôi tuệ mạng, dưới xin vật thực để nuôi thân.</p>
      <p class="mb-0"><strong>Phá ác:</strong> Phá trừ các việc tội ác.</p>
      <p class="mb-0"><strong>Bố ma:</strong> Làm khủng bố các ma.</p>
    </div>

    <p id="ngo-trai" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">NGỌ TRAI:</p>
    <p>Phật độ cơm đúng giờ ngọ (12 giờ trưa) nên gọi là "ngọ trai". Những thực phẩm cúng dường chư Tăng, trong giờ ngọ, thì gọi là "Trai Tăng".</p>

    <p id="y-phuc" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">Y:</p>
    <p>Y phục của chư Tăng, tức là áo Cà-sa. Y phục của chư Tăng bằng vải, có nhiều loại: Không điều (mạn y), năm điều, bảy điều và chín điều v.v...</p>

    <p id="binh-bat" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">BÌNH BÁT:</p>
    <p>Đồ đựng thức ăn của chư Tăng, làm bằng sành v.v... lớn hay nhỏ tuỳ sức người dùng.</p>

    <p id="toa-cu" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">TOẠ CỤ:</p>
    <p>Tấm vải để lót ngồi của Phật hoặc chư Tăng.</p>

  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo phần mở đầu của kinh Bát Nhã, Đức Phật và chúng tăng đang cư ngụ tại địa điểm nào ở nước Xá Vệ?",
    options: {
      a: "Núi Linh Thứu",
      b: "Tịnh xá Kỳ Hoàn",
      c: "Vườn Lộc Uyển",
      d: "Tịnh xá Trúc Lâm",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Phật và 1250 vị Đại Tỳ-kheo đều ở Tịnh xá Kỳ Hoàn, trong vườn của ông Thái tử Kỳ Đà và ông Trưởng giả Cấp Cô Độc.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Những hành động bình thường như đắp y, mang bát, rửa chân của Phật mang hàm ý sâu sắc gì trong tinh thần Bát Nhã?",
    options: {
      a: "Nghi thức bắt buộc trước khi thuyết pháp",
      b: "Tinh thần giải thoát vô trụ",
      c: "Sự thể hiện uy quyền của giáo chủ",
      d: "Sự rèn luyện kỷ luật khắt khe",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Lược giải ghi rõ: 'những cử chỉ bình thường và rất đơn giản; nhưng đã tạo thành một bức tranh tuyệt diệu, nói lên được tinh thần 'giải thoát vô trụ', để mở màn cho Phật nói kinh Bát Nhã.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo lời giảng của Ngài Thái Hư pháp sư, điều gì xảy ra nếu một người có thần thông nhưng chưa nhập được 'Kim Cang Bát Nhã'?",
    options: {
      a: "Người đó sẽ được hưởng phước báo vô lậu",
      b: "Người đó sẽ sớm thành Phật",
      c: "Người đó không cần tu tập Lục độ",
      d: "Thần thông đó bị coi là tà thuật của yêu ma",
    },
    answer: "d",
    explanation: {
      a: "Sai. Chỉ hưởng phước quả hữu lậu.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Ngài Thái Hư giảng: 'nếu người chưa nhập được 'Kim Cang Bát Nhã', dù có được thần thông biến hoá đi nữa, thì cũng là tà thuật của yêu ma ngoại đạo'.",
    },
  },
  {
    question: "Trong ba nghĩa của từ 'Tỳ-kheo', nghĩa nào sau đây có nghĩa là 'làm khủng bố các ma'?",
    options: {
      a: "Trưởng giả",
      b: "Khất sĩ",
      c: "Bố ma",
      d: "Phá ác",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai. Khất sĩ là kẻ đi xin.",
      c: "Đúng. 'Bố ma' nghĩa là làm khủng bố các ma.",
      d: "Sai. Phá ác là phá trừ việc tội ác.",
    },
  },
  {
    question: "Trước khi Phật nhập Niết bàn, Ngài dạy các đệ tử nên lấy điều gì làm thầy?",
    options: {
      a: "Lấy giới luật làm thầy",
      b: "Lấy thần thông biến hóa làm thầy",
      c: "Lấy ông A Nan làm thầy",
      d: "Lấy trí tuệ thông minh làm thầy",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Phật dạy: 'Ta nhập Niết bàn, các ông phải lấy 'giới luật' làm thầy.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Nội dung nào sau đây KHÔNG thuộc về phép 'Tứ niệm xứ' mà Phật dạy các đệ tử nương tựa?",
    options: {
      a: "Quán tâm vô thường",
      b: "Quán pháp vô ngã",
      c: "Quán thân bất tịnh",
      d: "Quán thực phẩm bất tịnh",
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây là 1 trong 4 niệm xứ.",
      b: "Sai. Đây là 1 trong 4 niệm xứ.",
      c: "Sai. Đây là 1 trong 4 niệm xứ.",
      d: "Đúng. Tứ niệm xứ gồm: quán thân bất tịnh, quán thọ thị khổ, quán tâm vô thường, quán pháp vô ngã. Không có 'quán thực phẩm bất tịnh'.",
    },
  },
  {
    question: "Cụm từ 'Như thị ngã văn' được dịch nghĩa sang tiếng Việt là gì?",
    options: {
      a: "Tôi nghe như vầy",
      b: "Đúng như sự thật",
      c: "Mọi việc đều vô thường",
      d: "Phật nói như vậy",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Như thị ngã văn' được dịch là 'Tôi nghe như vầy'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo văn bản, y bát của Phật được truyền lại cho vị đại đệ tử nào?",
    options: {
      a: "Ông A Nan",
      b: "Ông Ma Ha Ca Diếp",
      c: "Ông Ưu Ba Ly",
      d: "Ông Xá Lợi Phất",
    },
    answer: "b",
    explanation: {
      a: "Sai. A Nan và Ưu Ba Ly đến hỏi Phật.",
      b: "Đúng. Phật dạy: 'còn y và bát truyền lại cho ông Ma Ha Ca Diếp.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Bản thể của 'Kim Cang Bát Nhã' được mô tả như thế nào trong văn bản?",
    options: {
      a: "Chỉ tồn tại trong trí tuệ của chư Phật",
      b: "Chỉ đạt được thông qua thần thông",
      c: "Sẵn đủ trong mỗi chúng sanh và khắp pháp giới",
      d: "Nằm ở điểm chính giữa của thân và tâm",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Ngài Thái Hư giảng: 'Kinh Kim Cang Bát Nhã, trong mỗi người đều sẵn đủ và khắp cả pháp giới. Nó không ở trong, không ở ngoài, không ở chính giữa...'",
      d: "Sai.",
    },
  },
  {
    question: "Thuật ngữ 'Ngọ trai' dùng để chỉ việc gì trong sinh hoạt của Tăng đoàn?",
    options: {
      a: "Ăn sáng vào lúc bình minh",
      b: "Nghi lễ tụng kinh trước khi ăn",
      c: "Cúng dường vật thực cho người nghèo",
      d: "Ăn cơm đúng giờ Ngọ (12 giờ trưa)",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Ngọ trai là việc 'Phật độ cơm đúng giờ ngọ (12 giờ trưa)'.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-a-phan-tu',
  slug: 'a-phan-tu',
  title: 'A- Phần tự',
  type: 'article',
  status: 'published',
  order: 5,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/a-phan-tu/Tinh_Th%E1%BA%A7n_B%C3%A1t_Nh%C3%A3.png',
      readingContent,
      tableOfContents: [
        { id: 'phan-tu', label: 'A. PHẦN TỰ (Phần mở đầu kinh Bát Nhã)' },
        { id: 'giai-danh-tu', label: 'GIẢI DANH TỪ' },
        { id: 'toi-nghe-nhu-vay', label: 'Tôi nghe như vầy', indent: 1 },
        { id: 'ty-kheo', label: 'Tỳ kheo', indent: 1 },
        { id: 'ngo-trai', label: 'Ngọ trai', indent: 1 },
        { id: 'y-phuc', label: 'Y phục', indent: 1 },
        { id: 'binh-bat', label: 'Bình bát', indent: 1 },
        { id: 'toa-cu', label: 'Toạ cụ', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/a-phan-tu/The_Diamond_Prelude.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/HPOLdBLKXUM',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1LCa1Y3DQy0Cj3hgW620nG',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - A. Phần tự',
    passPercentage: 70,
    questions,
  },
}

export default lesson
