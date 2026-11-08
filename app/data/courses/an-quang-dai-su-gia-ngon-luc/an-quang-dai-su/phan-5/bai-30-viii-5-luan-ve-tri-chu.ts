import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/7.giai-quyet-nhung-nghi-hoac-thuong-gap/5.luan-ve-tri-chu'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-8">
    <header class="mb-2">
      <h2 class="!mt-0">5. Luận về Trì Chú</h2>
    </header>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Một pháp Trì Chú chỉ nên dùng làm Trợ Hạnh, chẳng nên lấy Trì Chú làm Chánh Hạnh, coi Niệm Phật là pháp tu phụ! Dù pháp môn Trì Chú cũng chẳng thể nghĩ bàn, nhưng phàm phu được vãng sanh hoàn toàn nhờ vào lòng tin chân thành, nguyện thiết tha, cũng như do đại thệ nguyện của A Di Đà Phật cảm ứng đạo giao mà được Ngài tiếp dẫn. Nếu chẳng hiểu lẽ này, dù pháp nào cũng đều chẳng thể nghĩ bàn, tu bất cứ pháp nào mà chẳng được, nhưng vẫn trở thành “không Thiền, không Tịnh Độ, giường sắt và cột đồng, vạn kiếp với muôn đời, không có ai nương dựa!”</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Nếu tự biết mình là phàm phu đầy dẫy triền phược, toàn thân là nghiệp lực, nếu chẳng cậy vào nguyện lực hoằng thệ của Như Lai, quyết khó thể chắc chắn thoát khỏi luân hồi ngay trong đời này, ắt sẽ biết lực dụng của những giáo pháp đức Phật đã dạy ra trong cả một đời đều chẳng bằng được nổi một pháp Tịnh Độ này.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Nếu trì chú, tụng kinh để gieo trồng phước huệ, tiêu tội nghiệp thì được; nhưng nếu vọng động mong cầu thần thông thì đúng là bỏ gốc theo ngọn, chẳng khéo dụng tâm. Nếu như tâm này cố kết, lại chẳng hiểu rõ lý, giới lực chẳng vững, Bồ Đề tâm chẳng sanh, tâm nhân - ngã càng thạnh, ắt chẳng mấy chốc sẽ bị ma dựa phát cuồng! Phàm muốn được thần thông, phải đắc đạo trước đã! Hễ đắc đạo liền tự có thần thông. Nếu chẳng dốc sức vào đạo, chỉ mong cầu thần thông, đừng nói là chưa đắc thần thông, dù có đắc cũng trở thành chướng đạo! Vì thế, chư Phật, chư Tổ thảy đều nghiêm cấm, chẳng muốn người đời tu tập thần thông! Do trong đời thường có những người có kiến giải như thế nên tôi mới nhiều lần giãi bày như vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Chỉ nên trì chú để trợ tu Tịnh nghiệp, đừng bộp chộp tác pháp, khinh nhờn Phật, thánh. Nếu đường đột tác pháp nhưng thân tâm chẳng cung kính, chẳng chí thành, rất có thể ma sự sẽ khởi. Chỉ có một việc là nên tác pháp, nhưng đấy lại chẳng phải là phận sự của các ông. Đó là: nếu ai phát tâm xuất gia, nhưng thầy thế độ chưa chứng đạo, chẳng thể quán xét căn cơ, bèn cầu xin Phật từ ngầm dạy cho biết người ấy xuất gia được hay không, hòng tránh khỏi tệ nạn hạng đầu trộm đuôi cướp lộn sòng Tăng chúng.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Nhưng ngày nay Tăng chúng thâu nạp đồ đệ, cứ sợ chẳng thâu được nhiều, dù biết rõ kẻ đó là phường hạ lưu, vẫn cứ vội vã thâu nạp, chỉ sợ nó bỏ đi mất, mấy ai chịu quyết trạch như thế nữa! Tham danh lợi, ưa quyến thuộc đến nỗi Phật pháp ngập chìm sát đất, không cách nào hưng khởi được nữa!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Người niệm Phật chẳng phải là không được trì chú, nhưng phải phân định rõ đâu là Chánh, đâu là Trợ thì Trợ cũng quy về Chánh. Nếu cứ lằng nhằng chẳng thể phân biệt, đến ngày nào đó nhìn lại, Chánh cũng chẳng phải là Chánh nữa! Chú Chuẩn Đề, chú Đại Bi, chẳng có chú nào hơn kém cả! Nếu tâm chí thành, pháp nào cũng linh. Tâm chẳng chí thành, pháp nào cũng chẳng linh!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Học chú Vãng Sanh bằng chánh âm tiếng Phạn<sup class="ml-0.5 text-xs font-semibold text-brand-accent">47</sup> cũng là rất tốt, nhưng chẳng được sanh tâm phân biệt, cho chú văn lược dịch là sai. Hễ khởi tâm niệm ấy sẽ sanh tâm ngờ vực đối với hết thảy các chú chép trong Đại Tạng, cho là những chú ấy chẳng hợp Phật ý. Phải biết rằng những vị dịch kinh đều chẳng phải tầm thường, sao lại vì những bản dịch của họ không giống nhau bèn sanh lòng miệt thị? Hơn một ngàn năm, những người trì chú này được lợi ích chẳng kể nổi số; chẳng lẽ mọi người trì chú trong hơn một ngàn năm ấy đều chẳng biết tiếng Phạn hay sao? Học thì đương nhiên phải học, tuyệt đối đừng khởi ý niệm ưu liệt, hơn kém thì lợi ích sẽ chẳng thể nghĩ bàn.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Hơn nữa, một pháp trì chú rất giống như pháp khán thoại đầu. Pháp khán thoại đầu dùng một câu vô nghĩa để dứt trừ phân biệt phàm tình hòng chứng Chân Trí sẵn có. Pháp trì chú chẳng cần hiểu nghĩa lý câu chú, cứ chí thành khẩn thiết mà trì, dốc lòng thành đến cùng cực, tự sẽ được nghiệp tiêu trí rạng, chướng tận phước cao, lợi ích chẳng thể nghĩ bàn được!</p>
    </div>

    <div class="my-10 flex items-center justify-center gap-4" aria-hidden="true"><span class="h-px w-20 bg-gradient-to-r from-transparent to-brand-primary"></span><span class="text-xl text-brand-primary">❀</span><span class="h-px w-20 bg-gradient-to-l from-transparent to-brand-primary"></span></div>
    <h3 class="!mt-10 !mb-3">Chú thích:</h3>
    <div class="space-y-2 rounded-xl bg-surface-card px-5 py-4 text-base leading-7 text-text-secondary">
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">47</sup> . Sở dĩ gọi là chánh âm vì chú Vãng Sanh ta thường đọc chỉ là cách phiên âm theo giọng Hán, mô phỏng Phạn âm.</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo đoạn văn, vai trò đúng đắn của việc Trì Chú trong mối quan hệ với pháp tu Niệm Phật là gì?',
    options: {
      a: 'Trì chú và Niệm Phật phải coi là hai Chánh Hạnh ngang hàng nhau.',
      b: 'Trì chú có thể thay thế hoàn toàn Niệm Phật khi muốn thoát khỏi luân hồi.',
      c: 'Trì chú là Chánh Hạnh, còn Niệm Phật là pháp tu phụ trợ.',
      d: 'Trì chú chỉ nên làm Trợ Hạnh, lấy Niệm Phật làm Chánh Hạnh.',
    },
    answer: 'd',
  },
  {
    question: 'Cơ sở chính yếu giúp người phàm phu triền phược được vãng sanh Tịnh Độ là gì?',
    options: {
      a: 'Nhờ hoàn thành các nghi thức tác pháp khinh nhờn nhưng đúng bài bản.',
      b: 'Nhờ lòng tin chân thành, nguyện thiết tha và đại thệ nguyện của Đức Phật A Di Đà tiếp dẫn.',
      c: 'Nhờ thông hiểu toàn bộ nghĩa lý uyên áo của các bài chú tiếng Phạn.',
      d: 'Nhờ luyện đắc được thần thông cao siêu từ việc trì chú lâu năm.',
    },
    answer: 'b',
  },
  {
    question: 'Hậu quả nghiêm trọng nào được cảnh báo nếu người trì chú cố chấp mong cầu thần thông khi tâm nhân-ngã thạnh và giới lực chưa vững?',
    options: {
      a: 'Sẽ tự động đắc đạo mà không cần trải qua công phu niệm Phật.',
      b: 'Sẽ nhanh chóng bị ma dựa phát cuồng.',
      c: 'Sẽ bị mất đi khả năng học tiếng Phạn cổ.',
      d: 'Chỉ bị giảm bớt phước báu chứ không ảnh hưởng tới thân tâm.',
    },
    answer: 'b',
  },
  {
    question: 'Mối quan hệ đúng đắn giữa \'đắc đạo\' và \'thần thông\' theo quan điểm của chư Phật, chư Tổ là gì?',
    options: {
      a: 'Người đắc đạo tuyệt đối không thể có bất kỳ thần thông nào.',
      b: 'Thần thông là pháp tu duy nhất giúp người phàm phu chứng Bồ Đề tâm.',
      c: 'Phải đắc đạo trước, khi đã đắc đạo thì tự nhiên sẽ có thần thông.',
      d: 'Phải nỗ lực luyện cầu thần thông trước để lấy đó làm phương tiện đắc đạo.',
    },
    answer: 'c',
  },
  {
    question: 'Trường hợp đặc biệt nào được đề cập là nên tác pháp trì chú để xin Phật ngầm dạy?',
    options: {
      a: 'Khi muốn kiểm tra xem bài chú Đại Bi hay chú Chuẩn Đề linh ứng hơn.',
      b: 'Khi người tu niệm Phật muốn cầu thần thông để tiêu trừ nghiệp lực ngay lập tức.',
      c: 'Khi thầy thế độ chưa chứng đạo cần quán xét căn cơ của người phát tâm xuất gia.',
      d: 'Khi học chú Vãng Sanh tiếng Phạn để kiểm tra bản dịch Hán văn.',
    },
    answer: 'c',
  },
  {
    question: 'Yếu tố quyết định sự linh ứng của các bài chú (như chú Chuẩn Đề, chú Đại Bi) là gì?',
    options: {
      a: 'Do bài chú đó thuộc Phạn âm hay Hán âm.',
      b: 'Do việc thực hiện đầy đủ các đại lễ tác pháp phức tạp.',
      c: 'Do người trì chú đã đạt được thần thông từ trước.',
      d: 'Do sự chí thành khẩn thiết của tâm người trì tụng.',
    },
    answer: 'd',
  },
  {
    question: 'Khi học chú Vãng Sanh bằng chánh âm tiếng Phạn, thái độ nào người tu tập tuyệt đối cần tránh?',
    options: {
      a: 'Sanh tâm phân biệt, miệt thị các bản chú lược dịch cũ trong Đại Tạng.',
      b: 'Dùng việc trì chú để trợ tu cho Tịnh nghiệp.',
      c: 'Không cần cố hiểu nghĩa lý uyên áo của câu chú.',
      d: 'Trì tụng với lòng chí thành khẩn thiết.',
    },
    answer: 'a',
  },
  {
    question: 'Theo văn bản, điểm giống nhau giữa pháp Trì Chú và pháp Khán Thoại Đầu là gì?',
    options: {
      a: 'Cả hai đều bắt buộc phải thực hiện bằng tiếng Phạn nguyên bản.',
      b: 'Cả hai đều tập trung vào việc luyện tập các phép thuật tác pháp.',
      c: 'Cả hai đều đòi hỏi người tu phải giải thích rõ ràng ý nghĩa từng từ ngữ.',
      d: 'Cả hai đều hướng tới dứt trừ phân biệt phàm tình mà không cần hiểu nghĩa lý câu từ để chứng Chân Trí.',
    },
    answer: 'd',
  },
  {
    question: 'Điều gì sẽ xảy ra nếu một người tu tập không phân định rõ ràng giữa Chánh Hạnh và Trợ Hạnh?',
    options: {
      a: 'Trợ Hạnh sẽ tự động chuyển hóa thành Chánh Hạnh viên mãn.',
      b: 'Người đó sẽ nhanh chóng đắc được thần thông vượt trội.',
      c: 'Đến một ngày nhìn lại, Chánh Hạnh cũng chẳng còn giữ được bản chất Chánh nữa.',
      d: 'Người đó sẽ chắc chắn được vãng sanh ngay trong đời này.',
    },
    answer: 'c',
  },
  {
    question: 'Vì sao tác giả cho rằng việc chìa tay cầu thần thông khi trì chú lại là \'bỏ gốc theo ngọn\'?',
    options: {
      a: 'Vì chư Phật và chư Tổ không ai sở hữu thần thông.',
      b: 'Vì gốc tu tập là dốc sức vào đạo và tiêu trừ nghiệp chướng, còn thần thông chỉ là quả tự nhiên khi đắc đạo.',
      c: 'Vì thần thông làm triệt tiêu hoàn toàn công đức của chú Đại Bi.',
      d: 'Vì trì chú chỉ có tác dụng duy nhất là học ngôn ngữ Phạn cổ.',
    },
    answer: 'b',
  },
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-30-viii-5-luan-ve-tri-chu',
  slug: 'bai-30-viii-5-luan-ve-tri-chu',
  title: '5. Luận về Trì Chú',
  type: 'article',
  status: 'published',
  order: 7,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Trì_Chú_Trong_Tịnh_Độ.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Luận_Về_Trì_Chú.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/7US2hy-S4II',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5OegbAIFsJ6oc6iJysOGd5?si=N9pjxe5EQ0-HTQ3VueCq2A',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận về Trì Chú',
    passPercentage: 70,
    questions,
  },
}

export default lesson
