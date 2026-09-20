import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 6.1</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Mật Tông (Chơn ngôn tông) thờ đức Đại Nhật Như Lai làm giáo chủ bí mật. Bài học giới thiệu tôn chỉ Lục đại, Bốn Mạn-đà-la và phương pháp tu hành Tam mật mầu nhiệm (tức thân thành Phật).</p>
    </div>
  </div>

  <h2>MẬT TÔNG</h2>
  <p><strong>Con Đường Tu Thứ Năm Trong Mười Tông</strong></p>

  <hr>

  <h2 id="duyen-khoi">I. Duyên Khởi Lập Tông</h2>
  <p>Tông này thờ đức Đại Nhật Như Lai (Tỳ Lô Giá Na) làm giáo chủ bí mật. Ngài Kim Cang Bồ tát đích thân chịu chức vị quán đảnh, kế thừa pháp mầu nhiệm của đức Đại Nhật Như Lai, vì thế cho nên Tông này gọi Mật tông hay Chơn ngôn tông (lời dạy chân thật mầu nhiệm, bí mật).</p>

  <p>Ngài Kim Cang Bồ tát truyền lại cho ngài Long Thọ; ngài Long Thọ truyền lại cho ngài Long Trí; ngài Long Trí truyền lại cho ngài Thiện Vô Úy Tam tạng và ngài Kim Cang Trí Tam tạng.</p>

  <p>Vào đầu đời Đường, hai ngài Vô Úy và Kim Cang sang Trung Hoa, rộng truyền bí pháp của Mật tông. Về sau ngài Không Hải (người Nhật) thọ giáo và trở thành vị Tổ Mật tông ở Nhật Bản.</p>

  <p>Mật tông có nhiều phái:</p>
  <ul>
    <li>a) Mật tông ở Trung Hoa</li>
    <li>b) Mật tông ở Nhật, thường gọi là Đông mật</li>
    <li>c) Mật tông ở Tây Tạng tức là Lạt-ma giáo, hay là Tạng mật.</li>
  </ul>

  <p><strong>Kinh điển của Mật tông:</strong> Tông này nương vào hai bộ kinh lớn làm cội gốc là bộ: Kinh Đại Nhật và kinh Kim Cang Đảnh. (Thêm Tô Tất Địa, Du Ký và Yếu lược niệm tụng thành năm bộ).</p>

  <h3>Đại Nhật Như Lai là ai?</h3>
  <p>Phật có ba thân: Pháp thân, Báo thân và Ứng thân. Đại Nhật Như Lai hay Tỳ Lô Giá Na, không phải là đức Phật Thích Ca (Ứng thân) như một số người lầm tưởng, mà chính là <strong>Pháp thân Phật</strong> (thể tánh thanh tịnh bình đẳng của hết thảy các pháp).</p>
  <p>Theo Mật tông có hai loại giáo pháp:</p>
  <ul>
    <li><strong>Hiển giáo:</strong> Những lời dạy của Ứng thân Phật (Thích Ca) tùy căn cơ chúng sanh mà chỉ dạy.</li>
    <li><strong>Mật giáo:</strong> Những pháp môn mầu nhiệm, bí mật mà chỉ những vị Đại Bồ tát nhờ trí tuệ sáng suốt mới thọ lãnh được của Pháp thân Phật.</li>
  </ul>
  <p>Tóm lại, Mật tông thuộc về Mật giáo. Giáo chủ là Đại Nhật Như Lai (Pháp thân). Sơ tổ là ngài Bồ tát Kim Cang Tát Đỏa.</p>

  <hr>

  <h2 id="ton-chi">II. Tôn Chỉ Và Giáo Lý Căn Bản</h2>

  <h3>1. Lục đại</h3>
  <p>Mật tông chủ trương Lục đại là chơn thật thể của vũ trụ, bản nguyên của các tánh năng sinh, năng lưu. Lục đại gồm: địa đại, thủy đại, hỏa đại, phong đại, không đại (thuộc về vật) và thức đại (thuộc về tâm).</p>
  <p>Sáu đại này dung thông, thâu nhiếp lẫn nhau, làm nhân duyên sanh ra các pháp.</p>
  <p>Lục đại bao gồm ba phương diện (không thể tách rời nhau):</p>
  <ul>
    <li><strong>Thể đại:</strong> bản thể chung cùng của vũ trụ.</li>
    <li><strong>Tướng đại:</strong> hình tướng của sự vật và chúng sanh.</li>
    <li><strong>Dụng đại:</strong> ngôn ngữ, động tác, công dụng của mỗi sự vật.</li>
  </ul>
  <p>Lý tánh của vũ trụ vạn hữu cũng tức là Phật tánh. Phật tánh sẵn có trong mọi chúng sanh.</p>

  <h3>2. Bốn Mạn-đà-la</h3>
  <p>Mạn-đà-la nghĩa là tròn trịa đầy đủ. Bốn pháp Mạn-đà-la (Tứ mạn tướng đại) là bốn tướng rộng lớn do sáu đại biến hiện:</p>
  <ol>
    <li><strong>Đại Mạn-đà-la:</strong> Nghĩa hẹp chỉ cái sắc tướng trang nghiêm của Phật, Bồ tát thể hiện trong các pho tượng tô vẽ.</li>
    <li><strong>Tam muội gia Mạn-đà-la:</strong> Nghĩa hẹp chỉ những vật mà Phật và Bồ tát thường cầm (hoa sen, ngọc báu...) tiêu biểu cho lời thệ nguyện.</li>
    <li><strong>Pháp Mạn-đà-la:</strong> Nghĩa hẹp chỉ cho những chủng tử hay chơn ngôn (như chữ Ā, chữ Hūṃ, Mật chú, danh hiệu Phật).</li>
    <li><strong>Yết ma Mạn-đà-la:</strong> Yết ma nghĩa là cử động. Nghĩa hẹp chỉ cho hết thảy oai nghi động tác của chư Phật, Bồ tát làm sự nghiệp độ sanh.</li>
  </ol>
  <p>Bốn Mạn-đà-la này đồng thời tồn tại, Phật và chúng sanh đều có, không lìa nhau.</p>

  <hr>

  <h2 id="phuong-phap">III. Phương Pháp Tu Hành</h2>
  <p>Sự tu hành của Mật tông gồm Giáo tướng và Sự tướng:</p>
  <ul>
    <li><strong>Sự tướng:</strong> Tất cả những thực hành như tụng chú, kết ấn, cúng dường, lập đàn... phải theo khuôn phép (phải có bậc A-xà-lê truyền thọ).</li>
    <li><strong>Giáo tướng:</strong> Những nghĩa lý sâu xa mầu nhiệm rút ra từ sự tướng để chỉ dạy.</li>
  </ul>

  <h3>Phương pháp Tam mật</h3>
  <p>Tam mật là phương pháp mầu nhiệm dựa trên thân, ngữ, ý. Chúng sanh muốn được như Phật phải tu Tam mật: <strong>Tay bắt ấn (thân mật), miệng niệm chơn ngôn (ngữ mật), tâm chuyên vào tam-ma-địa (ý mật).</strong></p>
  <p>Sự tu hành Tam mật chia làm hai giai đoạn:</p>
  <ol>
    <li><strong>Tam mật gia trì:</strong> Hành giả làm chủ thân, ngữ, ý; tâm thủy được ánh sáng mầu nhiệm của Đại Nhật Như Lai chói rọi vào (Gia), hành giả thọ nhận (Trì).</li>
    <li><strong>Tam mật du-gà:</strong> Ánh sáng của Phật và ánh sáng tâm thủy của hành giả ăn hiệp nhau (du-gà) không sai khác. Lúc này hữu tướng Tam mật đã thành tựu.</li>
  </ol>

  <hr>

  <h2 id="qua-vi">IV. Quả Vị Tu Chứng</h2>
  <p>Khi thành tựu Tam mật hữu tướng và thông suốt bốn Mạn-đà-la, hành giả nhất cử nhất động đều đúng oai nghi Phật, làm lợi lạc chúng sanh tự nhiên. Đó là <strong>Vô tướng Tam mật</strong>.</p>
  <blockquote>
    <p>"Mở miệng ra tiếng, chơn ngôn diệt tội; giơ tay động chân, đều thành Phật ấn; theo việc khởi niệm, diệu quán tự thành".</p>
  </blockquote>
  <p>Đó tức là ý nghĩa của bốn chữ <strong>"tức thân thành Phật"</strong> (hiện đời thành Phật).</p>

  <hr>

  <h2 id="ket-luan">V. Kết Luận</h2>
  <p>Sự lợi ích tu về Mật tông chung quy là <strong>Ba nghiệp thanh tịnh</strong> (Thân không làm ác, miệng không nói lỗi, tâm không nghĩ bậy). Kinh chép: <em>"Tam nghiệp hằng thanh tịnh, đồng Phật vãng Tây phương"</em>.</p>
  <p>Trì chú có rất nhiều lợi ích:</p>
  <ul>
    <li><strong>Chú Vãng sanh:</strong> Nhổ sạch gốc rễ nghiệp chướng, sanh về Tịnh độ.</li>
    <li><strong>Chú Lăng nghiêm:</strong> Tiêu trừ oan gia nghiệp chướng và tình ái dục nặng nề (như A-nan và Ma-đăng-già).</li>
    <li><strong>Chú Phổ âm:</strong> Tiêu trừ phục thi cốt khí, yêu tinh quỷ quái.</li>
    <li><strong>Ngũ bộ chú / Đại bi:</strong> Phước huệ tăng long, cầu sao được vậy.</li>
  </ul>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong hệ thống truyền thừa của Mật tông, ngài Long Thọ đã truyền lại giáo pháp cho vị nào sau đây?",
    options: {
      a: "Ngài Kim Cang Trí",
      b: "Ngài Thiện Vô Úy",
      c: "Ngài Long Trí",
      d: "Ngài Nhất Hạnh",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Văn bản chép rõ: 'Ngài Kim Cang Bồ tát truyền lại cho ngài Long Thọ; ngài Long Thọ truyền lại cho ngài Long Trí...'",
      d: "Sai.",
    },
  },
  {
    question: "Mật tông lấy hai bộ kinh nào làm cội gốc cho giáo lý của mình?",
    options: {
      a: "Kinh Lăng Nghiêm và kinh A Di Đà",
      b: "Kinh Đại Nhật và kinh Kim Cang Đảnh",
      c: "Kinh Hoa Nghiêm và kinh Pháp Hoa",
      d: "Kinh Tô Tất Địa và kinh Du Ký",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Tông này nương vào hai bộ kinh lớn làm cội gốc là bộ: Kinh Đại Nhật và kinh Kim Cang Đảnh.'",
      c: "Sai.",
      d: "Sai. Đây là các kinh phụ thêm.",
    },
  },
  {
    question: "Theo quan điểm của Mật tông, đức Đại Nhật Như Lai (Tỳ Lô Giá Na) chính là thân nào trong Tam thân Phật?",
    options: {
      a: "Ứng thân",
      b: "Pháp thân",
      c: "Tự tánh thân",
      d: "Báo thân",
    },
    answer: "b",
    explanation: {
      a: "Sai. Ứng thân là Phật Thích Ca.",
      b: "Đúng. 'Đại Nhật Như Lai hay Tỳ Lô Giá Na... chính là Pháp thân Phật.' (Pháp thân cũng gọi là Tự tánh thân, nhưng đáp án Pháp thân là thuật ngữ chính xác trong cặp khái niệm đối lập Ứng thân - Pháp thân).",
      c: "Sai. (Từ đồng nghĩa nhưng Pháp thân là từ chuẩn được nhấn mạnh trong bài).",
      d: "Sai.",
    },
  },
  {
    question: "Trong giáo lý 'Lục đại', yếu tố nào sau đây được xếp vào phương diện 'Tâm'?",
    options: {
      a: "Thức đại",
      b: "Phong đại",
      c: "Địa đại",
      d: "Không đại",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Trong lục đại thì năm đại trước thuộc về vật, đại cuối cùng (thức đại) thuộc về tâm.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Loại Mạn-đà-la nào dùng để chỉ các chủng tử (như chữ Ā hoặc Hūṃ) và chơn ngôn của chư Phật?",
    options: {
      a: "Yết ma Mạn-đà-la",
      b: "Tam muội gia Mạn-đà-la",
      c: "Đại Mạn-đà-la",
      d: "Pháp Mạn-đà-la",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Pháp Mạn-đà-la... Nghĩa hẹp là chỉ cho những chủng tử hay chơn ngôn của các đức Phật hay Bồ tát.'",
    },
  },
  {
    question: "Phương pháp tu hành 'Tam mật' của chúng sanh để tương ứng với Phật bao gồm những gì?",
    options: {
      a: "Lạy Phật, nghe pháp, tọa thiền",
      b: "Bố thí, trì giới, nhẫn nhục",
      c: "Ăn chay, tụng kinh, niệm Phật",
      d: "Tay bắt ấn, miệng niệm chơn ngôn, tâm chuyên tam-ma-địa",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Còn chúng sanh, thì tay bắt ấn là thân mật, miệng niệm chơn ngôn là ngữ mật, tâm chuyên vào tam-ma-địa (thiền định) là ý mật.'",
    },
  },
  {
    question: "Giai đoạn nào trong tu hành Tam mật mà ánh sáng của đức Đại Nhật Như Lai và tâm của hành giả ăn khớp, hòa nhập làm một?",
    options: {
      a: "Giáo tướng Mật tông",
      b: "Tam mật gia trì",
      c: "Tam mật du-gà",
      d: "Vô tướng Tam mật",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai. Đây là giai đoạn đầu thọ nhận.",
      c: "Đúng. 'Giai đoạn thứ hai gọi là Tam mật du-gà... ánh sáng của đức Đại Nhật Như Lai và ánh sáng trong tâm thủy của hành giả ăn hiệp nhau (du-gà) không sai không khác.'",
      d: "Sai.",
    },
  },
  {
    question: "Cụm từ 'Tức thân thành Phật' trong Mật tông có ý nghĩa chủ đạo là gì?",
    options: {
      a: "Chỉ có tâm thành Phật chứ thân vẫn là phàm phu",
      b: "Sau khi chết sẽ được vãng sanh và thành Phật",
      c: "Phải trải qua vô số kiếp tu hành mới thành Phật",
      d: "Thành Phật ngay trong kiếp sống hiện tại",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Đó cũng tức là ý nghĩa của bốn chữ tức thân thành Phật; nghĩa là hiện đời thành Phật.'",
    },
  },
  {
    question: "Theo tài liệu, việc trì tụng chú Lăng Nghiêm mang lại lợi ích đặc biệt nào?",
    options: {
      a: "Tiêu trừ oan gia nghiệp chướng và tình ái dục nặng nề",
      b: "Nhổ sạch gốc rễ nghiệp chướng để sanh về Tịnh độ",
      c: "Tiêu trừ yêu tinh quỷ quái trong gia trạch",
      d: "Cầu gì được nấy, phước huệ tăng long",
    },
    answer: "a",
    explanation: {
      a: "Đúng. '...trì chú Lăng nghiêm sẽ được tiêu trừ các oan gia nghiệp chướng và tình ái dục nặng nề từ nhiều kiếp về trước...'",
      b: "Sai. Đây là lợi ích của chú Vãng sanh.",
      c: "Sai. Đây là lợi ích của chú Phổ âm.",
      d: "Sai. Đây là lợi ích của Ngũ bộ chú/Đại bi.",
    },
  },
  {
    question: "Sự khác biệt căn bản giữa 'Sự tướng' và 'Giáo tướng' trong tu hành Mật tông là gì?",
    options: {
      a: "Sự tướng có thể tự học, Giáo tướng phải nhờ thầy dạy",
      b: "Sự tướng là mật giáo, Giáo tướng là hiển giáo",
      c: "Sự tướng là thực hành, Giáo tướng là lý thuyết mầu nhiệm",
      d: "Sự tướng dành cho hàng Bồ tát, Giáo tướng dành cho chúng sanh",
    },
    answer: "c",
    explanation: {
      a: "Sai. Sự tướng phải có A-xà-lê dạy mới biết.",
      b: "Sai.",
      c: "Đúng. Sự tướng là thực hành (tụng chú, kết ấn), Giáo tướng là nghĩa lý sâu xa rút ra từ sự tướng.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-6-mat-tong-va-thien-thai-tong-mat-tong',
  slug: 'mat-tong',
  title: 'Mật Tông',
  type: 'article',
  status: 'published',
  order: 1,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-6.1-mat-tong/Con_%C4%91%C6%B0%E1%BB%9Dng_T%E1%BB%A9c_Th%C3%A2n_Th%C3%A0nh_Ph%E1%BA%ADt.png',
      readingContent,
      tableOfContents: [
        { id: 'duyen-khoi', label: 'I. Duyên Khởi Lập Tông' },
        { id: 'ton-chi', label: 'II. Tôn Chỉ Và Giáo Lý' },
        { id: 'phuong-phap', label: 'III. Phương Pháp Tu Hành' },
        { id: 'qua-vi', label: 'IV. Quả Vị Tu Chứng' },
        { id: 'ket-luan', label: 'V. Kết Luận' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-6.1-mat-tong/Golden_Cosmos_Awakening.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/WmiGoaIndJo',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5Zu8BnlXPSd8Uj36mN8wMH',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Mật Tông',
    passPercentage: 70,
    questions,
  },
}

export default lesson