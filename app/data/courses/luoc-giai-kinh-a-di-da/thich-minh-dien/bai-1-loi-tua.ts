import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div class="mb-8">
      <h2 class="mt-0 mb-2 text-3xl font-bold text-primary-700 dark:text-primary-300">LƯỢC GIẢI KINH A DI ĐÀ</h2>
      <p class="mb-1">Thời đại Dao Tần, Pháp Sư ba tạng Cưu Ma La Thập</p>
      <p class="mb-1">dịch văn Phạn sang văn Trung Hoa.</p>
      <p class="mb-0 italic opacity-80 font-medium">Lược giải: Tỳ kheo Thích Minh Điền</p>
    </div>

    <div class="mb-8">
      <h3 id="loi-tua" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Lời tựa</h3>

    <p>Kinh A Di Đà thuộc Tiểu bản, là bản kinh được trì tụng hằng ngày của Tăng-già cũng như Phật tử thuộc Tông Tịnh Độ ở Trung Hoa, Nhật Bản và Việt Nam. Còn Đại bản kinh A Di Đà là kinh Vô Lượng Thọ, với 48 lời nguyện của tỳ-kheo Pháp Tạng. Kinh A Di Đà thuộc hệ kinh thời kỳ Phật giáo Phát triển mà thường gọi là kinh Đại thừa. Nhưng theo tôi, thì cả hai hệ kinh: Nguyên thủy (Nikāya - Āgama) và Phát triển đều tải cả hai nội dung là Nhị thừa và Đại thừa. Vì vậy cho nên, kinh Trường A-hàm dịch nghĩa là Vô tỷ pháp nghĩa là pháp tối thượng. A-hàm cũng là tên gọi chung về kinh của Phật, nên trong Pháp Hoa luận sớ, ngài Cát Tạng nói: A-hàm là tên gọi chung cả kinh điển Nhị thừa và Đại thừa. Bốn bộ A-hàm phần lớn trình bày về giáo nghĩa Nhị thừa, kinh Niết-bàn là Phương đẳng A-hàm phần lớn nói về giáo nghĩa Đại thừa; chỉ có một điều mà chúng ta cần lưu ý là:</p>

    <ul class="list-none space-y-3 pl-0">
      <li>1. Kinh Phật được ghi xuống bằng chữ viết không có từ thời Phật còn ở đời, mà bất luận kinh điển thuộc thừa nào, bộ nào cũng đều do đệ tử của Đức Phật thuật lại sau khi Ngài nhập diệt. Kinh Phật được kết tập sớm nhất là sau khi Phật diệt độ vài ba tháng, và muộn nhất là từ Phật diệt độ 500 năm về sau.</li>
      <li>2. Về việc thuật lại kinh Phật có hai hướng: Một là do đoàn thể công khai kết tập, hai là do cá nhân trước thuật. Hướng thứ nhất thì có lịch sử để khảo chứng, còn hướng thứ hai thì không làm sao khảo chứng được.</li>
      <li>3. Kinh Phật sử dụng cả hai hình thức đơn hành bản (1) và tùng thư. Mười mấy bộ kinh lớn hiện còn lưu hành đều là tùng thư. Nhưng theo tính chất thì loại tùng thư này lại chia làm hai: Có loại biên soạn cùng một lúc hoàn thành, có loại phải trải qua nhiều năm bổ sung mới hoàn thành.</li>
      <li>4. Đầu tiên kinh Phật không có bản chữ viết mà chỉ dựa vào đọc thuộc lòng, bản chữ viết sau Phật diệt độ mấy trăm năm mới có. Phật giáo truyền đến đâu thì tùy theo tiếng nước đó mà biên chép. Do đó có thể nói kinh Phật đều là văn học phiên dịch.</li>
    </ul>

    <p>Kinh A Di Đà (tiểu bản Sukhāvatī-vyūha) là một bản toát yếu của kinh Đại Vô Lượng Thọ (đại phẩm Sukhāvatī-vyūha), và đây là một trong ba bộ kinh (Vô Lượng Thọ, Quán Vô Lượng Thọ, A Di Đà) nói về Tịnh Độ (Pure Land sect). Bản kinh mà chúng ta đang nghiên cứu ở đây là do ngài Cưu-ma-la-thập, đời Diêu Tần (383–416 Hậu Tần) dịch từ văn Phạn sang văn Trung Hoa vào năm 402, tại chùa Thảo Đường, và ngài là người dịch ý của kinh; không như những dịch giả khác dịch bằng chánh văn Phạn sang văn Trung Hoa, như ngài Huyền Trang chẳng hạn. Bản dịch chữ Hán của ngài Cưu-ma-la-thập đã được dùng làm kinh tụng hằng ngày cho các thời khóa công phu Tịnh độ, và được xem là định bản để dùng cho các bộ A Di Đà chú giải, cũng như đã được dịch ra nhiều thứ tiếng khác. Pháp sư Cưu-ma-la-thập, người xứ Thiên Trúc (Ấn Độ), là vị Pháp sư đã phiên dịch trên 380 quyển kinh Phật từ tiếng Phạn ra tiếng Trung Hoa.</p>

    <p>Tập kinh Quán Vô Lượng Thọ (Amitāyurdhyāna Sūtra) cho chúng ta biết giáo lý Tịnh độ do Đức Phật Thích-ca Mâu-ni giảng dạy. Nguyên do là Thái tử A-xà-thế ở thành Vương Xá, nổi loạn chống lại vua cha là Tần-bà-sa-la và bắt vua cha giam vào ngục bỏ đói cho chết. Nhưng nhà vua nhờ Hoàng hậu Vi-đề-hi (mẹ của A-xà-thế) hằng ngày tắm rửa sạch sẽ rồi trộn bột hòa với mật trát vào mình rồi đem vào trong ngục cho vua Tần-bà-sa-la dùng. Khi phát hiện ra sự việc này, Thái tử A-xà-thế liền bắt mẹ mình giam vào một nơi. Hoàng hậu Vi-đề-hi đau khổ tột độ, nên lén sai lính đến thỉnh cầu Đức Phật chỉ cho bà một cõi nước nào mà không có những sự khổ như cõi Ta-bà này. Đức Thế Tôn liền chỉ cho bà Vi-đề-hi về cõi Tịnh của Phật A Di Đà. Đó chính là duyên khởi để Đức Phật dạy bà Vi-đề-hi nói riêng, và chúng ta nói chung về pháp niệm Phật A Di Đà, hay chính là niệm tự tánh đến nhất tâm bất loạn, để vượt ra khỏi sinh tử.</p>

    <p>Đời Tấn bên Trung Hoa, ngài Huệ Viễn căn cứ vào lời dạy của Đức Phật trong các kinh, khởi xướng Tông Tịnh Độ tại núi Lư Sơn (Khuôn Lư) tỉnh Giang Tây.</p>

    <p>Bảy bộ kinh phần lớn nói về Tịnh độ là:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>1. Vô Lượng Thanh Tịnh Bình Đẳng Giác Kinh (hai cuốn).</li>
      <li>2. Đại A Di Đà Kinh (hai cuốn).</li>
      <li>3. Vô Lượng Thọ Kinh (hai cuốn).</li>
      <li>4. Quán Vô Lượng Thọ Kinh (một cuốn).</li>
      <li>5. A Di Đà Kinh (một cuốn).</li>
      <li>6. Xưng Tán Tịnh Độ Phật Nhiếp Thọ Kinh (một cuốn).</li>
      <li>7. Cổ Âm Thanh Vương Đà La Ni Kinh (một cuốn).</li>
    </ul>

    <p>Kinh A Di Đà này trình bày về giáo lý viên đốn, thuộc Đại thừa Bồ-tát tạng, là kinh khen ngợi công đức chẳng thể nghĩ bàn và được tất cả chư Phật hộ niệm. Kinh này dùng lời rất kỳ đặc, để chuyển tải nội dung rất sâu xa vi diệu, không có đương cơ thưa hỏi, mà do Đức Phật Thích-ca Mâu-ni tự giảng nói, nhằm khai thị về pháp môn niệm Phật tam-muội, hay niệm tự tánh Di Đà, tức đưa tâm ra khỏi mọi sở niệm. Nhận ra ý này nên Hòa thượng Thích Trí Quảng (2) nói: “Niệm Phật không phải là kêu Phật. Đa số người lầm tưởng kêu tên Phật là niệm Phật. Niệm Phật hoàn toàn khác với kêu tên Phật. Suốt ngày chúng ta đọc Nam-mô A Di Đà Phật là kêu tên Phật để vãng sanh thì không thể nào vãng sanh được.”</p>

    <p>Pháp niệm danh tự tánh A Di Đà là pháp trực chỉ nơi tâm mà hành trì, chứ không qua trung gian phương tiện, nhằm giúp hành giả đạt đến nhất tâm bất loạn. Cõi Tịnh độ của Phật A Di Đà được ẩn dụ cho tánh giác mà ai cũng có. Vì chỉ cho tánh giác vô thủy vô chung, nên gọi là vô lượng thọ, vô lượng quang, hay pháp giới tạng thân. Để nhận rõ mục đích và tôn chỉ của kinh này, chúng ta lần lượt tìm hiểu thật nghĩa của từng đoạn qua kinh văn. Mong sao, hành giả “Được ý quên lời” hạ thủ công phu hàm nhiếp miên mật, nhằm sống lại với “Tự tánh là Di Đà, tâm mình là Tịnh độ”, ngỏ hầu vượt qua sinh tử vậy.</p>

    </div>

    <div class="mt-10 mb-6">
      <h3 id="ghi-chu" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Ghi chú:</h3>
      <div class="space-y-4 text-[0.95em]">
      <p>(1) 単行本, phiên âm Hán-Việt: đơn hành bản - Tankōbon hay cũng được gọi là tankobon, tankaban, kanji là một thuật ngữ Nhật Bản dùng để nói về một quyển sách có nội dung hoàn chỉnh, và quyển sách này không phải là một phần của một xê-ri sách nhiều tập. Có thể hiểu nôm na "tankōbon" là "sách một tập". Tuy nhiên, mỗi tập trong các xê-ri truyện manga Nhật Bản cũng được gọi là đơn hành bản, dù việc này trái ngược hoàn toàn với định nghĩa trên.</p>
      <p>Đơn hành bản không bao gồm văn khố bản (文庫版, bunkoban), tân thư (新書, shinsho, ám chỉ các sách chuyên viết về các kiến thức khoa học), hay khổ sách cực lớn mukku (ムック, chứa rất nhiều hình ảnh).</p>
      <p>Đơn hành bản, nói chung, thật ra cũng đa dạng về kích thước. Nó có thể là một cuốn sách nhỏ xíu khổ đậu bản (豆本, mamehon) hay một cuốn sách cỡ Folio 1219 inch. Tuy nhiên, kích thước cỡ "tankobon" ngành đóng sách ở Anh, Mỹ thường là cỡ Quarto hay Octavo.</p>
      <p>Trong tiếng Anh, một đơn hành bản được gọi là graphic novel (tiểu thuyết có minh họa) hay trade paperback (sách bìa mềm), mặc dù các thuật ngữ gốc như tankaban, tankobon,... vẫn được dùng rộng rãi, nhất là trên mạng internet. Ngoài ra, các fan manga Nhật Bản còn gọi các đơn hành bản là komikkusu (コミックス), cách phiên âm kiểu Nhật của từ tiếng Anh Comics.</p>
      <p>(2) Bài viết của HT. Thích Trí Quảng, Tổng Biên tập báo Giác Ngộ. PHẬT HỌC 24/12/2012 08:08 (GMT+7)</p>
      </div>
    </div>

    <div class="mt-8 mb-8 text-right font-semibold">
      <p class="mb-0">Tỳ-kheo Thích Minh Điền</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Vị Pháp sư nào đã thực hiện bản dịch kinh A Di Đà từ văn Phạn sang văn Trung Hoa vào năm 402 tại chùa Thảo Đường?',
    options: {
      a: 'Pháp sư Cưu-ma-la-thập',
      b: 'Tỳ-kheo Thích Minh Điền',
      c: 'Thiền sư Huệ Viễn',
      d: 'Pháp sư Huyền Trang',
    },
    answer: 'a',
  },
  {
    question: 'Theo đoạn văn tựa, mối quan hệ giữa Kinh A Di Đà (tiểu bản) và Kinh Vô Lượng Thọ (đại bản) được giải thích như thế nào?',
    options: {
      a: 'Kinh A Di Đà được biên soạn trước để làm nền tảng phát triển nên Kinh Vô Lượng Thọ.',
      b: 'Kinh A Di Đà là bản tóm tắt, trích yếu nội dung cốt lõi của đại phẩm Kinh Vô Lượng Thọ.',
      c: 'Hai bản kinh này hoàn toàn độc lập và thuộc về hai hệ tư tưởng Phật giáo khác nhau.',
      d: 'Kinh A Di Đà là bản giải thích chi tiết cho các lời nguyện trong Kinh Vô Lượng Thọ.',
    },
    answer: 'b',
  },
  {
    question: "Trong bài viết, nhận định của ngài Cát Tạng trong 'Pháp Hoa luận sớ' về kinh điển A-hàm (Āgama) là gì?",
    options: {
      a: 'A-hàm là tên gọi riêng biệt chỉ dành cho hệ kinh điển Nguyên thủy.',
      b: 'A-hàm chỉ bao gồm bốn bộ kinh đầu tiên được kết tập ngay sau khi Phật diệt độ.',
      c: 'A-hàm là tên gọi chung cho cả kinh điển Nhị thừa và Đại thừa.',
      d: 'A-hàm là văn bản kinh điển duy nhất giữ nguyên chính xác từng lời Phật dạy.',
    },
    answer: 'c',
  },
  {
    question: 'Điểm khác biệt trong phương pháp dịch kinh của Pháp sư Cưu-ma-la-thập so với Pháp sư Huyền Trang là gì?',
    options: {
      a: 'Cưu-ma-la-thập dịch kinh bằng cách đọc thuộc lòng, trong khi Huyền Trang chép bằng chữ viết.',
      b: 'Cưu-ma-la-thập dịch trực tiếp sang tiếng Việt, trong khi Huyền Trang dịch sang tiếng Trung Hoa.',
      c: 'Cưu-ma-la-thập chỉ dịch các kinh thuộc hệ Nguyên thủy, còn Huyền Trang chỉ dịch kinh Phát triển.',
      d: 'Cưu-ma-la-thập là người dịch ý của kinh, trong khi Huyền Trang dịch theo chánh văn Phạn.',
    },
    answer: 'd',
  },
  {
    question: 'Sự kiện lịch sử đau thương nào được đề cập là duyên khởi để Đức Phật giảng dạy kinh Quán Vô Lượng Thọ?',
    options: {
      a: 'Thành Vương Xá bị tai họa chiến tranh hủy hoại hoàn toàn khiến nhân dân lầm than.',
      b: 'Thái tử A-xà-thế làm loạn, giam vương phụ và vương mẫu khiến Hoàng hậu Vi-đề-hi đau khổ thỉnh cầu cõi hết khổ.',
      c: 'Vua Tần-bà-sa-la bị bệnh nặng không chữa khỏi nên mong tìm cõi sống vô lượng.',
      d: 'Hoàng hậu Vi-đề-hi muốn chứng ngộ ngay lập tức năng lực thần thông để giải cứu chồng.',
    },
    answer: 'b',
  },
  {
    question: 'Theo văn bản, Tông Tịnh Độ được khởi xướng tại địa danh nào ở Trung Hoa và do ai chủ trì?',
    options: {
      a: 'Ngài Cưu-ma-la-thập khởi xướng tại chùa Thảo Đường vào đời Dao Tần.',
      b: 'Ngài Cát Tạng khởi xướng tại núi Lư Sơn vào thời Phật giáo Phát triển.',
      c: 'Hòa thượng Thích Trí Quảng khởi xướng tại Tăng-già Việt Nam.',
      d: 'Ngài Huệ Viễn khởi xướng tại núi Lư Sơn (tỉnh Giang Tây) vào đời Tấn.',
    },
    answer: 'd',
  },
  {
    question: 'Đặc điểm nổi bật về phương thức thuyết giảng của Đức Phật đối với Kinh A Di Đà là gì?',
    options: {
      a: 'Đức Phật tổ chức cuộc tranh luận công khai giữa các vị đệ tử Nhị thừa và Đại thừa.',
      b: 'Đức Phật trả lời hàng loạt câu hỏi vướng mắc do Hoàng hậu Vi-đề-hi đặt ra.',
      c: 'Đức Phật tự mình giảng nói mà không cần có người thưa hỏi trước (vô vấn tự thuyết).',
      d: 'Kinh được đệ tử Ananda đọc lại ngay trong đêm Đức Phật nhập Niết-bàn.',
    },
    answer: 'c',
  },
  {
    question: "Theo góc độ thâm thúy được tác giả trình bày, cụm từ 'Vô lượng thọ' hay 'Vô lượng quang' trong kinh A Di Đà ẩn dụ cho điều gì?",
    options: {
      a: 'Số lượng văn bản kinh điển được lưu giữ qua hàng trăm năm.',
      b: 'Tuổi thọ vật lý kéo dài hàng triệu năm của người sống ở cõi Cực Lạc.',
      c: 'Tánh giác vô thủy vô chung sẵn có ở mỗi chúng sinh.',
      d: 'Ánh sáng mặt trời chiếu sáng khắp các châu lục trên thế giới.',
    },
    answer: 'c',
  },
  {
    question: "Quan niệm đúng đắn về hành vi 'niệm Phật' theo quan điểm của Hòa thượng Thích Trí Quảng và tác giả là gì?",
    options: {
      a: 'Niệm Phật là việc tụng thuộc lòng tất cả bảy bộ kinh Tịnh Độ mỗi ngày.',
      b: 'Niệm Phật là cầu xin Phật A Di Đà ban phát phép thuật để vượt qua sinh tử.',
      c: 'Niệm Phật là phương pháp trực chỉ nơi tâm, quay về tánh giác để đạt đến nhất tâm bất loạn chứ không phải chỉ kêu tên Phật.',
      d: 'Niệm Phật đơn thuần là đọc liên tục câu danh hiệu Nam-mô A Di Đà Phật cả ngày để chắc chắn được vãng sanh.',
    },
    answer: 'c',
  },
  {
    question: "Theo phần chú thích trong tài liệu, thuật ngữ 'Đơn hành bản' (Tankōbon) có nghĩa gốc là gì?",
    options: {
      a: 'Một bộ tùng thư bao gồm hàng trăm quyển kinh hợp lại.',
      b: 'Loại sách bìa cứng khổ lớn dành riêng cho giới tăng sĩ.',
      c: 'Quyển sách có nội dung hoàn chỉnh và không phải là một phần của xê-ri sách nhiều tập.',
      d: 'Bản chép tay cổ xưa được truyền miệng qua nhiều thế hệ.',
    },
    answer: 'c',
  },
]

const lesson: Lesson = {
  id: 'lesson-luoc-giai-kinh-a-di-da-bai-1-loi-tua',
  slug: 'bai-1-loi-tua',
  title: 'Lời tựa',
  type: 'article',
  status: 'published',
  order: 1,
  createdAt: '2026-10-04',
  updatedAt: '2026-10-04',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/1-loi-tua/L%C6%B0%E1%BB%A3c_gi%E1%BA%A3i_Kinh_A_Di_%C4%90%C3%A0.png',
      readingContent,
      tableOfContents: [
        { id: 'loi-tua', label: 'Lời tựa' },
        { id: 'ghi-chu', label: 'Ghi chú:' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/1-loi-tua/T%E1%BB%AB_B%C3%B3ng_T%E1%BB%91i_%C4%90%E1%BA%BFn_V%C3%B4_L%C6%B0%E1%BB%A3ng_Quang.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/yJHwD6wDbEI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3DskulINUO0FLFojcjWtqQ?si=yzhorobFRdm7IsqXRdInBQ',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Lời tựa',
    passPercentage: 70,
    questions,
  },
}

export default lesson
