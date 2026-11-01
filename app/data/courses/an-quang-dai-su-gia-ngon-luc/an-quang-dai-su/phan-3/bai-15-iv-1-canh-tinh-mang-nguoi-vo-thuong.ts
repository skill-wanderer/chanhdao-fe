import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/4.luan-ve-viec-lon-sinh-tu/1.canh-tinh-mang-nguoi-vo-thuong'
  return base + '/' + encodeURIComponent(file)
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-8">
    <header class="mb-2">
      <p class="!mb-1 text-xs font-medium uppercase tracking-widest text-brand-accent">IV. LUẬN VỀ VIỆC LỚN SANH TỬ</p>
      <h2 class="!mt-0">1. Cảnh tỉnh mạng người vô thường</h2>
    </header>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Quang âm vùn vụt, thời thế đổi dời trong mỗi sát-na, một niệm chẳng trụ. Ðấy chính là tạo vật vì hết thảy bọn chúng sanh ta hiện tướng lưỡi rộng dài giảng vô thượng diệu pháp: Mạng người vô thường, vinh hoa chẳng bền, gấp tìm nẻo về để khỏi phải chịu cái khổ trầm luân vậy.</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Việc lớn sanh tử phải dự bị trước. Nếu đợi đến lúc sắp ra đi mới tu, chỉ e sẽ bị nghiệp lực đoạt mất.</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Sanh tử là việc lớn. Vô thường nhanh chóng. Nghe đến kinh sợ, nhưng còn lâu mới bằng khi thân trải qua nỗi đớn đau kịch liệt.</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Cổ nhân nói: “Thông minh bất năng địch nghiệp. Phú quý khởi miễn luân hồi” (Thông minh chẳng cự nổi nghiệp. Phú quý chẳng tránh khỏi luân hồi). Sanh tử xảy đến, không có gì để nương dựa cả, chỉ có mỗi A Di Ðà Phật là nương nhờ được thôi! Tiếc người đời quá ít ai biết. Kẻ biết đến, tin chân thật và thật sự niệm Phật lại càng ít hơn nữa!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Ngày ba mươi tháng Chạp là ngày chấm dứt một năm. Nếu chẳng thu xếp trước cho khéo thì chủ nợ, oán gia sẽ xúm lại lôi kéo, chẳng dung cho lỗi lầm của mình. Lúc lâm chung chính là ngày ba mươi tháng Chạp của cả một đời. Nếu tư lương Tín - Nguyện - Hạnh chưa đủ, vẫn còn tham - sân - si, tập khí ác thì oán gia, chủ nợ từ vô lượng kiếp đến nay sẽ kéo đến bức bách, đòi nợ, chẳng dung cho mình.</p><p class="!mb-0 text-justify indent-8 leading-8">Ðừng nói những kẻ chẳng biết đến pháp môn Tịnh Ðộ đành không biết làm cách nào, phải theo nghiệp thọ sanh; dù là đã biết nhưng chẳng chăm chú tu hành thật sự thì cũng giống hệt như vậy: bị ác nghiệp lôi kéo vào trong tam đồ, lục đạo, vĩnh viễn luân hồi! Muốn cầu con đường thoát khổ, chỉ có cách niệm niệm lo nghĩ đến lúc chết, sợ rằng chết đi sẽ đọa lạc trong tam đồ ác đạo thì Phật niệm sẽ tự thuần, Tịnh nghiệp sẽ tự thành; hết thảy trần cảnh sẽ chẳng thể đoạt được chánh niệm nữa!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Cầu sanh Tây Phương đừng nên sợ chết. Nếu chết ngay ngày hôm nay thì liền sanh về Tây Phương. Ðấy là như lời người xưa đã nói: “Triêu văn đạo, tịch tử khả hỹ!” (Sáng nghe đạo, chiều chết cũng được!) Lẽ đâu, ngày hôm nay phải chết lại chẳng chịu chết, cứ tham luyến trần cảnh chẳng thể buông xuống, khiến cho do tham thành chướng, cảnh Tịnh Ðộ chẳng hiện, khiến cho cảnh tùy nghiệp thọ sanh trong đường thiện ác liền hiện.</p><p class="!mb-0 text-justify indent-8 leading-8">Cảnh hiện, liền theo nghiệp thọ sanh trong đường thiện ác; vãng sanh Tây Phương hóa thành bánh vẽ! Vì thế, đối với người tu Tây Phương, chết hôm nay cũng tốt; sống thêm một trăm hai mươi năm rồi chết cũng hay. Hết thảy phó mặc nghiệp trước, chẳng lầm sanh ý tưởng tính toán, so đo. Nếu như tín nguyện chân thành, thiết tha, báo hết mạng tận, thần thức bèn siêu Tịnh vực, nghiệp trả lại trần lao, sen vàng chín phẩm nở hoa, Phật thọ ký một đời thành Phật!</p></div>
    <div class="my-10 flex items-center justify-center gap-4" aria-hidden="true"><span class="h-px w-20 bg-gradient-to-r from-transparent to-brand-primary"></span><span class="text-xl text-brand-primary">❀</span><span class="h-px w-20 bg-gradient-to-l from-transparent to-brand-primary"></span></div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo văn bản, hậu quả chính của việc trì hoãn tu tập cho đến lúc sắp ra đi là gì?",
    "options": {
      "a": "E rằng người đó sẽ bị nghiệp lực đoạt mất và không kịp tu hành.",
      "b": "Người đó sẽ dễ dàng sám hối và đạt được giải thoát tức thì nhờ sự cấp bách.",
      "c": "Người đó đương nhiên sẽ sanh vào cõi người hoặc cõi trời nhờ tích lũy phước báu thế gian.",
      "d": "Trí tuệ và của cải tích lũy cả đời sẽ bù đắp cho sự thiếu hụt tu hành."
    },
    "answer": "a"
  },
  {
    "question": "Câu nói cổ nhân \"Thông minh bất năng địch nghiệp. Phú quý khởi miễn luân hồi\" mang ý nghĩa gì trong ngữ cảnh của văn bản?",
    "options": {
      "a": "Thành công thế gian sẽ tự động chuyển hóa thành phước báu Tịnh độ lúc lâm chung.",
      "b": "Trí tuệ thế gian và sự giàu sang không thể giúp con người chống lại nghiệp lực hay thoát khỏi luân hồi.",
      "c": "Người giàu có và thông minh sẽ có nhiều lợi thế hơn trong việc giải thoát sinh tử.",
      "d": "Luân hồi chỉ dành cho những ai thiếu kiến thức và nghèo khổ trong xã hội."
    },
    "answer": "b"
  },
  {
    "question": "Hình ảnh ẩn dụ \"ngày ba mươi tháng Chạp của cả một đời\" trong bài viết chỉ thời điểm nào?",
    "options": {
      "a": "Thời điểm bắt đầu tìm hiểu về pháp môn Tịnh Độ.",
      "b": "Dịp lễ tết hằng năm để con người sám hối tội lỗi.",
      "c": "Giai đoạn trung niên khi con người bắt đầu đối mặt với sự lão hóa.",
      "d": "Thời điểm lâm chung (lúc sắp kết thúc cuộc đời)."
    },
    "answer": "d"
  },
  {
    "question": "Phương pháp tâm niệm nào được tác giả khuyên người tu hành nên áp dụng để \"Phật niệm tự thuần, Tịnh nghiệp tự thành\"?",
    "options": {
      "a": "Chỉ niệm Phật khi thân thể khỏe mạnh và gặp may mắn.",
      "b": "Tập trung tìm kiếm danh vọng thế gian để củng cố địa vị.",
      "c": "Luôn tính toán làm sao để kéo dài tuổi thọ thêm trăm năm.",
      "d": "Niệm niệm lo nghĩ đến lúc chết và sợ đọa lạc trong tam đồ ác đạo."
    },
    "answer": "d"
  },
  {
    "question": "Điều gì sẽ xảy ra nếu một người cầu sanh Tây Phương nhưng lúc lâm chung lại tham luyến trần cảnh và sợ chết?",
    "options": {
      "a": "Sự tham luyến đó sẽ tự động biến thành lực đẩy giúp họ vãng sanh nhanh hơn.",
      "b": "Tham luyến tạo thành chướng ngại, khiến cảnh Tịnh Độ chẳng hiện mà cảnh tùy nghiệp thọ sanh liền hiện ra.",
      "c": "Đức Phật A Di Đà vẫn hiện ra cưỡng ép đưa họ về Tây Phương.",
      "d": "Họ sẽ lập tức thoát khỏi luân hồi nhờ phước báu niệm Phật trước đó."
    },
    "answer": "b"
  },
  {
    "question": "Tác giả nhấn mạnh thực trạng quy luật \"quang âm vùn vụt, thời thế đổi dời trong mỗi sát-na\" nhằm nhắc nhở điều gì?",
    "options": {
      "a": "Thế giới tự nhiên luôn biến đổi nhưng mạng người thì cố định và bền vững.",
      "b": "Mạng người vô thường và vinh hoa chẳng bền, cần gấp tìm nẻo về để khỏi chịu khổ trầm luân.",
      "c": "Nên tập trung cải tạo hoàn cảnh sống thế gian thay vì lo nghĩ chuyện sanh tử.",
      "d": "Thời gian còn rất dài nên con người có thể thong thả tận hưởng cuộc sống trước khi tu."
    },
    "answer": "b"
  },
  {
    "question": "Theo văn bản, tại sao nói \"Sanh tử là việc lớn. Vô thường nhanh chóng. Nghe đến kinh sợ, nhưng còn lâu mới bằng khi thân trải qua nỗi đớn đau kịch liệt\"?",
    "options": {
      "a": "Vì nỗi đau đớn thể xác sẽ làm con người quên mất sự sợ hãi về sinh tử.",
      "b": "Vì sự đớn đau thể xác lúc lâm chung thực tế và dữ dội hơn nhiều so với việc chỉ nghe nói suông về vô thường.",
      "c": "Vì cái chết diễn ra rất nhẹ nhàng đối với những ai không tìm hiểu Phật pháp.",
      "d": "Vì người nghe suông sẽ không bao giờ phải chịu sự đau đớn khi qua đời."
    },
    "answer": "b"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-15-iv-1-canh-tinh-mang-nguoi-vo-thuong',
  slug: 'bai-15-iv-1-canh-tinh-mang-nguoi-vo-thuong',
  title: '1. Cảnh tỉnh mạng người vô thường',
  type: 'article',
  status: 'published',
  order: 2,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Lời_cảnh_tỉnh_vô_thường.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Từ_Vô_Thường_Đến_Tịnh_Độ.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/VZUkYYaFImg',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4rubZvoXxBA2INIMBA72Og?si=2XJrRMvdRSKaVvXu3guj3g',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Cảnh tỉnh mạng người vô thường',
    passPercentage: 70,
    questions,
  },
}

export default lesson
