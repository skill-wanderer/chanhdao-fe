import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/7.giai-quyet-nhung-nghi-hoac-thuong-gap/4.luan-ve-tong-giao'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-8">
    <header class="mb-2">
      <h2 class="!mt-0">4. Luận về Tông, Giáo</h2>
    </header>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Những giảng sư đời mạt thường thích giảng Thiền, đến nỗi thính chúng đa phần chấp vào những câu công án. Trộm nghĩ: Những câu cơ phong chuyển ngữ (thoại đầu, công án) trong nhà Thiền tuyệt đối chẳng có ý nghĩa gì, chỉ nhằm đáp ứng căn cơ người đến hỏi hòng chỉ nẻo hướng thượng. Những câu chuyển ngữ ấy chỉ nên để tham cứu, sao lại giảng nói? Giảng kinh như vậy chỉ những bậc đại sĩ siêu phàm mới hưởng lợi ích, còn những hạng trung - hạ khác đều mắc bệnh hết. Đối với Tông, chẳng biết tận lực tham cứu những câu cơ phong chuyển ngữ, chỉ lo phỏng đoán ý nghĩa. Với Giáo, do thật lý, thật sự nào phải là cảnh giới của mình, bèn lầm tưởng Phật, Tổ nói thí dụ để giảng pháp. Đem Tông phá Giáo, dùng Giáo phá Tông, cái tệ nạn lưu hành này không còn gì tệ hơn được nữa!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Từ ngài Tào Khê (Lục Tổ Huệ Năng) về sau, đạo Thiền lưu truyền rộng rãi; mối văn tự “chẳng lập văn tự” phổ biến khắp hoàn vũ. Đường giải thuyết ngày càng mở rộng, cửa chứng ngộ ngày càng bế tắc! Vì thế, các tổ Nam Nhạc, Thanh Nguyên đều dùng cơ phong chuyển ngữ để độ người, khiến cho Phật, Tổ trở thành ngôn ngữ suông, không cách nào đáp được lời các ngài hỏi. Nếu chẳng phải thật sự là căn cơ tương xứng sẽ chẳng thể hiểu được lời ấy. Dùng cách ấy để xét nghiệm khiến vàng - thau rạch ròi, ngọc - đá rành rành, không còn cách nào giả trá, ngăn trở đạo pháp. Đấy chính là duyên do của cơ phong chuyển ngữ.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Từ đấy về sau, pháp này ngày càng thịnh hành, được các tri thức đề cao, chỉ e lạc vào lối mòn của người khác, trở thành khuôn sáo cũ kỹ, khiến người học nghi ngờ, lầm lạc, hoại loạn Tông phong, nên cơ phong chuyển ngữ ngày càng cao tột, vô phương chuyển biến, để người khác (người căn cơ không phù hợp) chẳng biết đâu mà mò. Bởi thế mới có những câu nói trách Phật, quở Tổ, bài xích kinh giáo, bác bỏ Tịnh Độ! Những lời lẽ ấy nhằm cưỡng đoạt tình kiến, bít chặt sự biện giải của người nghe. Người căn thuần sẽ nhờ ngay đó biết đường trở về, triệt ngộ hướng thượng; người căn cơ chưa thuần sẽ chân thành, tận lực tham cứu, quyết đạt đến đại triệt, đại ngộ mới thôi. Ấy là vì tri thức còn nhiều, căn tánh con người vẫn còn thông lợi, hiểu rành rẽ giáo lý, tâm sanh tử khẩn thiết, dù chưa thể liễu ngộ ngay cũng chẳng nảy lòng hèn kém, cho đó là pháp bảo vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Hiện tại, lắm kẻ mới đọc vài cuốn sách Nho, chẳng hiểu đạo lý thế gian, chưa hiểu cùng tột giáo thừa, chẳng hiểu Phật pháp, vừa mới phát tâm bèn gia nhập Tông môn. Hàng tri thức chỉ vì duy trì môn đình, cũng học đòi cổ nhân xiển dương, chẳng quản đạo pháp lợi hại thế nào. Người theo học chẳng phát khởi mối nghi tình chân thật, đối với bất cứ điều nào cũng tưởng là chân pháp cả!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Đối với những câu khai thị của người hiện tại hoặc những câu chép trong sách của cổ nhân, có kẻ bèn tự ý suy diễn nêu ra nghĩa lý, dù trọn chẳng ra khỏi việc giải thích ý nghĩa theo mặt văn tự, nhưng cứ tự hào là triệt ngộ hướng thượng, việc tham học đã hoàn tất rồi, liền dự ngay vào địa vị tri thức để dạy dỗ đàn hậu học, lập riêng một môn đình. Cứ sợ người khác chê mình chẳng phải là bậc thông gia bèn ra sức giảng Thiền, muốn được xưng tụng là “tông thuyết kiêm thông”.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Giảng về Tông thì khi giảng những lời chỉ quy hướng thượng của cổ đức rốt cuộc chỉ giảng nghĩa câu văn theo mặt văn tự. Khi giảng Giáo, cái đạo tu nhân chứng quả của Như Lai bị họ biến thành những thuyết “mượn ví dụ để biểu thị pháp”. Dùng Giáo phá Tông, đem Tông phá Giáo, kẻ đui dẫn lũ mù, kéo nhau vào lửa, đến nỗi bọn hậu bối chẳng được nghe gương sáng của tiền bối, láo nháo bắt chước thầy khinh Phật, lờn Tổ, bài nhân, bác quả mà thôi!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Giáo độ khắp ba căn, thâu trọn lợi độn, ví như chiếu chỉ sáng suốt của vua thánh, vạn quốc tôn sùng, trí - ngu, hiền - tệ đều cùng hiểu rõ, đều phải tuân hành. Nếu kẻ nào chẳng tuân sẽ bị xử cực hình. Nếu kẻ nào chẳng tuân lời Phật dạy ắt sẽ đọa trong ác đạo. Tông chỉ độ được thượng căn, chẳng nhiếp trung căn, hạ căn; giống như tướng quân nhận mật lệnh, người thân cận trong doanh mới biết, kẻ ngoài doanh dù có trí huệ cũng chẳng hiểu được. Vì thế mới có thể dùng toàn quân diệt giặc, thiên hạ thái bình. Quân lệnh bị tiết lộ, ba quân sẽ tan vỡ; Tổ ấn bị tiết lộ, năm tông<sup class="ml-0.5 text-xs font-semibold text-brand-accent">46</sup> chết tiêu. Kẻ chưa ngộ chỉ được phép tham cứu thoại đầu, chẳng được xem đọc sách Thiền, thật ra chỉ là vì sợ kẻ ấy hiểu lầm ý Tổ, chấp mê là ngộ, lấy giả rối chân. Đấy gọi là Tổ ấn bị tiết lộ, tai hại cực lớn.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Về nguồn không hai, phương tiện nhiều cửa. Phương tiện của nhà Thiền vượt ngoài khuôn khổ, tựa hồ quét sạch hết thảy ngôn ngữ. Kẻ không lãnh hội được ý ấy, chẳng hiểu ý chỉ rời lìa ngôn ngữ, chuyên nhai bã hèm, nên đối với Tông chỉ lo suy diễn ý Tổ chẳng chịu tận lực tham cứu, đối với Giáo bèn lầm lạc học đòi viên dung, phá hoại sự tướng! Chỉ có bậc đại đạt là được lợi ích cả nơi Tông lẫn nơi Giáo; nếu không, đề-hồ, cam lộ bị chứa trong bình độc bèn thành tỳ sương, trầm độc!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Dù trung căn, hạ căn vẫn có thể được lợi ích nơi Giáo, nhưng nếu chẳng phải là bậc thượng thượng căn sẽ chẳng thể thông suốt Giáo để vận dụng. Dẫu kẻ trung, hạ căn khó thể chuyên chí nơi Tông, nhưng bậc thượng căn lại có thể đại triệt đại ngộ để hòng chứng nhập.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Trong Giáo, phải thông đạt hết thế pháp, Phật pháp, Sự, Lý, tánh, tướng, lại còn phải đại khai viên giải (nhà Thiền gọi là đại triệt đại ngộ) thì mới có thể làm đạo sư cho cả trời lẫn người.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Trong Tông, tham vỡ được một câu thoại đầu, thấy được bổn lai, bèn có thể xiển dương tông phong “trực chỉ”. Nếu nhằm lúc Phật giáo đại hưng khởi và là bậc thông đạt rộng rãi Phật pháp thì hãy nên tham cứu theo nhà Thiền, giống như Tăng Diêu vẽ rồng, hễ điểm nhãn, rồng liền bay lên ngay lập tức. Còn nhằm khi Phật pháp suy vi, kẻ túc căn kém cỏi hãy nên tu trì theo Giáo. Ví như thợ vụng chế đồ mà bỏ hết dây mực thì rốt cuộc chẳng làm gì được cả!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Nay muốn báo ơn Phật, lợi lạc hữu tình thì nhà Thiền dù chuyên xiển dương tông phong, vẫn phải dùng Giáo để ấn chứng; bên Giáo thì tận lực tu trì quán hạnh, chẳng lạm bàn thiền ngữ. Ấy là vì tâm thông diệu đế, hễ gặp duyên liền thành Tông. “Cây bách, que phân khô, quạ kêu, sẻ hót, nước chảy, hoa trôi, ho khạc, phẩy tay, cười khẩy, giận chửi”, pháp nào pháp nấy đều là Tông cả. Lẽ nào diệu pháp viên đốn do chính kim khẩu đức Như Lai nói ra chẳng đáng kể là Tông ư? Cần gì phải mượn cái thanh chống cửa nhà người để chống đỡ cửa nẻo nhà mình! Trong nhà vốn sẵn gỗ Tiên, gỗ Nam, cớ sao vứt bỏ chẳng dùng? Hãy nên biết rằng: pháp không cao, hèn, chỉ là nhất đạo thường nhiên, do căn cơ có sống hay chín nên nơi mỗi pháp được lợi ích khác biệt!</p>
    </div>

    <div class="my-10 flex items-center justify-center gap-4" aria-hidden="true"><span class="h-px w-20 bg-gradient-to-r from-transparent to-brand-primary"></span><span class="text-xl text-brand-primary">❀</span><span class="h-px w-20 bg-gradient-to-l from-transparent to-brand-primary"></span></div>
    <h3 class="!mt-10 !mb-3">Chú thích:</h3>
    <div class="space-y-2 rounded-xl bg-surface-card px-5 py-4 text-base leading-7 text-text-secondary">
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">46</sup> . Năm tông: năm tông của nhà Thiền là Lâm Tế, Quy Ngưỡng, Tào Động, Vân Môn và Pháp Nhãn.</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo văn bản, các câu cơ phong chuyển ngữ (thoại đầu, công án) trong nhà Thiền ban đầu được các vị Tổ đưa ra nhằm mục đích chính là gì?',
    options: {
      a: 'Nhằm đáp ứng căn cơ người đến hỏi để chỉ nẻo hướng thượng và xét nghiệm chân giả.',
      b: 'Để giảng giải kinh điển Phật giáo cho hàng trung hạ căn dễ dàng tiếp thu.',
      c: 'Để kết hợp triết lý Nho giáo với đạo lý Phật giáo thế gian.',
      d: 'Được lập ra nhằm tạo thành một hệ thống văn tự chuẩn mực cho đàn hậu học tu tập.',
    },
    answer: 'a',
  },
  {
    question: 'Việc các giảng sư đời mạt đem Tông phá Giáo, dùng Giáo phá Tông dẫn đến tệ nạn trực tiếp nào sau đây?',
    options: {
      a: 'Giảng Tông thì phỏng đoán ý nghĩa văn tự, giảng Giáo thì lầm tưởng Phật Tổ nói thí dụ để biểu thị pháp.',
      b: 'Khiến kinh sách Nho giáo và Phật giáo được áp dụng đồng nhất trong Tông môn.',
      c: 'Giúp người tu học mau chóng triệt ngộ mà không cần tận lực tham cứu thoại đầu.',
      d: 'Mở rộng cửa chứng ngộ và khép lại đường giải thuyết suông.',
    },
    answer: 'a',
  },
  {
    question: 'Vì sao người chưa ngộ lại không được phép xem đọc sách Thiền mà chỉ được tham cứu thoại đầu?',
    options: {
      a: 'Vì sợ người đó hiểu lầm ý Tổ, chấp mê là ngộ, lấy giả rối chân làm tiết lộ Tổ ấn.',
      b: 'Vì việc xem sách Thiền sẽ triệt tiêu hoàn toàn tâm sanh tử khẩn thiết của người tu.',
      c: 'Vì sách Thiền chứa đựng những ẩn ngữ Nho học không phù hợp với người học Phật.',
      d: 'Vì người căn cơ trung hạ bị cấm tiếp xúc với mọi hình thức ngôn ngữ trong Phật giáo.',
    },
    answer: 'a',
  },
  {
    question: 'Khi Phật pháp rơi vào thời kỳ suy vi, người có túc căn kém cỏi được khuyên nên chọn phương cách tu trì nào?',
    options: {
      a: 'Nên tu trì theo Giáo, vì Giáo có quy củ rõ ràng giống như thợ vụng nương vào dây mực.',
      b: 'Nên gượng ép tham cứu các câu cơ phong cao tột để cầu mong triệt ngộ ngay lập tức.',
      c: 'Nên tự lập môn đình riêng dựa trên việc giải thích nghĩa lý các cuốn sách Nho.',
      d: 'Nên bài xích kinh giáo và Tịnh Độ để vượt thoát khỏi ràng buộc của ngôn ngữ.',
    },
    answer: 'a',
  },
  {
    question: 'Theo phần chú thích trong văn bản, "Năm tông" (Ngũ tông) của nhà Thiền bao gồm những tông phái nào?',
    options: {
      a: 'Quy Ngưỡng, Tào Động, Duy Thức, Hoa Nghiêm, Vân Môn.',
      b: 'Lâm Tế, Tịnh Độ, Mật Tông, Tào Động, Pháp Hoa.',
      c: 'Lâm Tế, Pháp Nhãn, Thiền Tông, Nho Giáo, Phật Giáo.',
      d: 'Lâm Tế, Quy Ngưỡng, Tào Động, Vân Môn, Pháp Nhãn.',
    },
    answer: 'd',
  },
  {
    question: 'Hình ảnh "đề-hồ, cam lộ bị chứa trong bình độc bèn thành tỳ sương, trầm độc" nhằm cảnh báo về điều gì?',
    options: {
      a: 'Lợi ích tuyệt đối của việc giảng giải công án cho hàng hạ căn nghe.',
      b: 'Tác hại của việc người tu trì theo Giáo thừa xem thường các kinh điển đại thừa.',
      c: 'Người không ngộ được ý chỉ rời ngôn ngữ nhưng lại học đòi viên dung, phá hoại sự tướng.',
      d: 'Sự nguy hiểm khi kết hợp việc đọc sách Nho với việc tham cứu thoại đầu.',
    },
    answer: 'c',
  },
  {
    question: 'Điều kiện cần thiết để một vị thầy trong Giáo thừa có thể làm "đạo sư cho cả trời lẫn người" là gì?',
    options: {
      a: 'Phải thông đạt hết thế pháp, Phật pháp, Sự, Lý, tánh, tướng và đại khai viên giải.',
      b: 'Phải biết bài xích kinh giáo và cưỡng đoạt tình kiến của người nghe.',
      c: 'Chỉ cần đọc thuộc các cuốn sách Nho và thành thạo đạo lý thế gian.',
      d: 'Chỉ cần tham vỡ một câu thoại đầu và thấy được bổn lai.',
    },
    answer: 'a',
  },
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-29-viii-4-luan-ve-tong-giao',
  slug: 'bai-29-viii-4-luan-ve-tong-giao',
  title: '4. Luận về Tông, Giáo',
  type: 'article',
  status: 'published',
  order: 6,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Luận_về_Tông_và_Giáo.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Luận_Về_Tông_và_Giáo.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/RDeuG91CmRI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/53uNaCljznJWIrrasi8IcI?si=T8MWKJZ1Swy24GMsG5cZtw',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận về Tông, Giáo',
    passPercentage: 70,
    questions,
  },
}

export default lesson
