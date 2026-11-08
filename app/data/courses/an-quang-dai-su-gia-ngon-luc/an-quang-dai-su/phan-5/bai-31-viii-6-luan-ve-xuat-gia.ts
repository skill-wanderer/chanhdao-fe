import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/7.giai-quyet-nhung-nghi-hoac-thuong-gap/6.luan-ve-xuat-gia'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-8">
    <header class="mb-2">
      <h2 class="!mt-0">6. Luận về xuất gia</h2>
    </header>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Phật pháp chính là pháp chung cho cả chín pháp giới, không một ai là chẳng nên tu theo, cũng như không một ai chẳng thể tu nổi! Người trì trai, niệm Phật thì nhiều, nhưng tính đến những người có thể làm cho đạo pháp hưng long, phong tục thuần thiện chỉ sợ chẳng được mấy, những người làm được như vậy càng nhiều càng tốt. Xuất gia làm Tăng chính là để gìn giữ cũng như lập bày phương cách lưu truyền đạo pháp của Như Lai.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Có những người lập chí hướng thượng, phát Bồ Đề tâm, triệt ngộ tự tánh, tam học (Văn - Tư - Tu) sâu rộng, nhưng lại đặc biệt tán dương Tịnh Độ ngõ hầu mau chóng thoát khỏi vòng khổ ải ngay trong một đời này, chỉ e số người này cũng chẳng được mấy ai, càng được nhiều người như vậy càng tốt. Còn như những kẻ có chút tín tâm, chẳng có đại chí hướng, muốn mượn danh nghĩa tăng sĩ, ăn không ngồi rồi, ăn bám nhà Phật, mang danh con Phật, nhưng thật ra chỉ là gã cạo đầu, dẫu chẳng tạo ác nghiệp, cũng đã là hạt giống hư, là phế nhân đối với đất nước. Nếu lại còn phá giới, tạo nghiệp, điếm nhục Phật pháp, dù lúc sống trốn được quốc pháp, chết đi chắc chắn đọa vào địa ngục. Đối với pháp, đối với mình đều chẳng lợi ích. Một gã như thế còn chẳng nên có, huống chi là nhiều!</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Cổ nhân bảo: “Xuất gia là việc của bậc đại trượng phu, chẳng phải hạng loàng xoàng làm được”, đấy chính là lời chân thật, chẳng phải là lời hạ thấp hạng loàng xoàng để đề cao Tăng-già đâu! Ấy là vì đối với việc gánh vác gia nghiệp của Phật, tiếp nối huệ mạng của Phật, nếu chẳng phải là người phá vô minh khôi phục bổn tánh, hoằng dương pháp đạo lợi lạc chúng sanh thì sẽ chẳng thể làm được. Nay những kẻ làm Tăng phần nhiều là hạng thô bỉ, bại hoại, vô lại, mong được sống an nhàn, thảnh thơi; kẻ chịu trì trai niệm Phật còn chẳng có mấy, huống hồ là người có thể gánh vác gia nghiệp, tiếp nối huệ mạng ư? Hiện tại Phật pháp sa sút đến tận đất đen là vì Thanh Thế Tổ (Thuận Trị) chẳng xét thời cơ, chẳng tuân Phật chế, thay đổi cách khảo thí tăng sĩ của triều đại trước (nhà Minh), bỏ luôn độ điệp<sup class="ml-0.5 text-xs font-semibold text-brand-accent">48</sup> , cho phép ai nấy tùy ý xuất gia, gây thành mối tệ vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Cho tùy ý xuất gia, đối với bậc thượng sĩ thật là có lợi ích lớn, nhưng đối với kẻ hạ căn lại là sự tổn hại rất lớn. Nếu như toàn thể thế gian đều là bậc thượng sĩ, cố nhiên pháp tắc này rất hữu ích đối với đạo pháp; thế nhưng bậc thượng sĩ hệt như vảy lân, kẻ hạ căn nhiều như lông bò. Chỉ tạm hữu ích ngay trong lúc ấy (từ đầu nhà Thanh cho đến thời Càn Long, thiện tri thức nhiều như rừng, nên bảo là “hữu ích”),họa lan sâu hậu thế; cho đến hiện tại, mối tệ ô tạp, lạm dụng đã đến mức cùng cực. Dù có thiện tri thức muốn chỉnh đốn một phen cũng chẳng thể làm gì được, chẳng đáng buồn ư?</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Từ rày về sau, người xuất gia điều thứ nhất là phải thật sự phát khởi đại Bồ Đề tâm tự lợi lợi tha, thứ hai là phải có thiên tư hơn người mới cho xuống tóc, không vậy không được. Còn người nữ có tín tâm hãy bảo họ tu hành tại gia, vạn vạn phần chẳng nên để họ xuất gia, chỉ sợ gặp phải kẻ phóng túng khiến Phật môn bị ô uế, bại hoại chẳng nhỏ. Nếu người nam tu hành thật sự, xuất gia càng dễ, bởi họ tham phỏng tri thức, y chỉ tùng lâm nào cũng được. Người nữ dù là bậc chân tu xuất gia cũng khó, bởi lẽ làm gì cũng dễ bị miệng đời gièm xiểm, việc gì cũng khó thể tùy ý được. Chọn lựa để thế độ người, chẳng độ ni chúng như thế chính là nghĩa lý trọng yếu bậc nhất để hộ trì Phật pháp, chỉnh lý pháp môn trong đời mạt vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Người đời nay hay coi xuất gia như một phương cách sống trốn tránh, lười nhác, an nhàn. Tệ nhất là kẻ không còn sanh lộ nào khác, lấy xuất gia làm kế sống trộm qua ngày. Bởi thế người xuất gia hiện tại đa phần là hạng vô lại, đạo pháp bị quét sạch sành sanh đều là vì hạng xuất gia bại hoại như thế gây nên nỗi cả!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Tăng nhân đời nay khó thể khiến người khác tin tưởng nổi. Nay đã truy điệu tăng nhân, lẽ nào lại phỉ báng tăng nhân. Nếu nêu lên những điều tốt lành của họ để răn nhắc những kẻ bất thiện thì chẳng mắc lỗi gì. Nhưng nếu mình đã thuộc vào hàng học trò thì việc răn nhắc cũng nên châm chước; việc răn nhắc ấy chỉ hàng đức cao trọng vọng mới thực hiện được, chẳng phải là việc nên làm của loài chim non miệng vàng vậy!</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Hàng xuất gia nếu chẳng phải chân tu, tập khí đầu đường xó chợ còn tệ hơn kẻ tục. Nếu muốn xa lìa tập khí ấy thì trước hết phải hiểu rõ hết thảy các pháp thế gian đều là khổ, là không, là vô thường, là vô ngã, là bất tịnh, thì ba độc tham - sân - si không cách nào khởi lên được. Nếu vẫn chưa chế ngự chúng được, hãy dùng trung - thứ - nhẫn nhục để đối trị ắt chúng sẽ tự dứt. Nếu vẫn chưa dứt thì phải tưởng mình như đã chết, tự nhiên vô biên phiền não sẽ hóa thành thanh lương.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Chỉ hạng Thích Tử chúng ta mới lấy việc thành đạo lợi sanh làm cách báo ân tối thượng, chẳng những báo đền cha mẹ nhiều đời, mà còn báo đáp hết thảy cha mẹ trong tứ sanh lục đạo từ vô lượng kiếp. Chẳng những chỉ hiếu kính khi cha mẹ còn sống mà còn phải độ thoát linh thức của cha mẹ khiến họ được vĩnh viễn thoát khỏi khổ luân, thường trụ Chánh Giác. Bởi thế mới nói: đạo hiếu của nhà Phật ẩn mật khó sáng tỏ ra vậy.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Tuy nhiên, đạo hiếu của Nho gia lấy việc phụng dưỡng cha mẹ làm đầu. Như đạo Thích từ biệt cha mẹ đi xuất gia, có phải là chẳng đoái hoài đến việc phụng dưỡng cha mẹ chăng? Phật chế định: Xuất gia phải thưa cùng cha mẹ. Nếu có anh em, con cháu để gởi gắm cha mẹ mới được bẩm thỉnh với cha mẹ. Cha mẹ có đồng ý mới được xuất gia. Nếu không, chẳng chấp thuận cho kẻ ấy được xuống tóc.</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Sau khi xuất gia xong, nếu như anh em gặp biến cố, cha mẹ không chỗ nương nhờ, người xuất gia cũng được phép chia sớt y bát để phụng dưỡng song thân. Vì thế, mới có gương thơm hiếu dưỡng với mẹ của ngài Trường Lô (Ngài Trường Lô Trách thiền sư đời Tống, người xứ Tương Dương. Lúc nhỏ mồ côi cha, mẹ họ Trần, được bảo bọc nơi nhà cậu. Đến lúc lớn, sư thông suốt sách vở thế gian. Năm 29 tuổi xuất gia, hiểu sâu xa yếu chỉ nhà Thiền, sau trụ trì chùa Trường Lô, đón mẹ về ở phòng phía Đông phương trượng, khuyên mẹ niệm Phật cầu sanh Tịnh Độ suốt bảy năm trời. Bà mẹ niệm Phật qua đời. Xem sự tích này trong Tịnh Độ Thánh Hiền Lục), chuyện lạ chôn cha của ngài Đạo Phi (Đạo Phi thuộc hoàng tộc nhà Đường, người Trường An, mới vừa đầy năm, cha bỏ mình vì việc nước. Bảy tuổi xuất gia, đời loạn lạc, gạo thóc đắt đỏ, sư bèn cõng mẹ vào Hoa Sơn, tự nhịn ăn, khất thực nuôi mẹ. Năm sau, sư đến chiến trường Hoắc Sơn, thu nhặt xương trắng, chí thành tụng niệm kinh chú, cầu tìm được xương cha. Mấy ngày sau, xương cha trồi lên giữa đống xương, hiện ngay trước mặt ngài Đạo Phi. Ngài bèn bọc lấy xương tàn, ôm về chôn cất. Xem trong Tống Cao Tăng Truyện).</p>
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">Bởi thế kinh dạy: “Công đức cúng dường cha mẹ bằng với công đức cúng dường Nhất Sanh Bổ Xứ Bồ Tát”. Cha mẹ còn sống, phải khéo léo khuyên dụ trì trai, niệm Phật cầu sanh Tây Phương. Cha mẹ mất rồi, dùng công đức đọc tụng, tu trì của chính mình, luôn chí thành hồi hướng cho cha mẹ ngõ hầu cha mẹ vĩnh viễn thoát khỏi ngũ trược, mãi mãi giã biệt sáu đường, chứng Vô Sanh Nhẫn, đạt đến địa vị Bất Thoái, độ thoát chúng sanh đến tận cùng đời vị lai, khiến mình lẫn người đều thành đạo Chánh Giác. Có vậy mới chẳng giống với sự đại hiếu thông thường của thế gian.</p>
    </div>

    <div class="space-y-4 border-t border-brand-primary/20 pt-8">
      <p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Xuất gia làm Tăng phải vì chuyên chí Phật thừa, lập bày cách duy trì đạo pháp, chứ chẳng phải là chỉ có thành Tăng thì mới có thể tu trì Phật pháp.</p>
    </div>

    <div class="my-10 flex items-center justify-center gap-4" aria-hidden="true"><span class="h-px w-20 bg-gradient-to-r from-transparent to-brand-primary"></span><span class="text-xl text-brand-primary">❀</span><span class="h-px w-20 bg-gradient-to-l from-transparent to-brand-primary"></span></div>
    <h3 class="!mt-10 !mb-3">Chú thích:</h3>
    <div class="space-y-2 rounded-xl bg-surface-card px-5 py-4 text-base leading-7 text-text-secondary">
      <p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">48</sup> . Thời Minh, tăng sĩ phải trúng tuyển kỳ khảo thí về nội điển mới được cấp giấy chứng nhận (độ điệp) là Tăng sĩ thực thụ.</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo văn bản, mục đích tối thượng và chính yếu của việc xuất gia làm Tăng là gì?',
    options: {
      a: 'Tìm kiếm một phương cách sống an nhàn, thảnh thơi để thoát khỏi nỗi lo sinh kế thế gian.',
      b: 'Gánh vác gia nghiệp và tiếp nối huệ mạng của Như Lai để hoằng dương pháp đạo, lợi lạc chúng sanh.',
      c: 'Chỉ nhằm tìm nơi quy y trì trai niệm Phật để tự giải thoát khổ ải cho riêng bản thân.',
      d: 'Mượn danh nghĩa Tăng sĩ để tìm sự bảo hộ của triều đình và né tránh nghĩa vụ quốc gia.',
    },
    answer: 'b',
  },
  {
    question: 'Theo tác giả, sự kiện lịch sử nào đã trực tiếp dẫn đến mối tệ ô tạp, lạm dụng xuất gia làm cho Phật pháp sa sút?',
    options: {
      a: 'Triều đại nhà Minh thắt chặt các kỳ khảo thí nội điển và phát hành quá nhiều độ điệp.',
      b: 'Người tu tại gia không chịu chia sớt y bát để phụng dưỡng chư Tăng.',
      c: 'Các thiện tri thức thời Càn Long cấm cản việc thế độ người xuất gia.',
      d: 'Thanh Thế Tổ (Thuận Trị) bỏ quy định khảo thí và cấp độ điệp, cho phép tùy ý xuất gia.',
    },
    answer: 'd',
  },
  {
    question: 'Đối với người nữ có tín tâm trong thời mạt pháp, tác giả đưa ra lời khuyên như thế nào?',
    options: {
      a: 'Chỉ cho phép xuất gia nếu đã trúng tuyển các kỳ thi nội điển khắt khe.',
      b: 'Khuyến khích xuất gia càng nhiều càng tốt để gia tăng lực lượng hộ trì Phật pháp.',
      c: 'Yêu cầu họ phải tham phỏng khắp các tùng lâm trước khi xuống tóc.',
      d: 'Nên bảo họ tu hành tại gia, vạn phần chẳng nên để xuất gia.',
    },
    answer: 'd',
  },
  {
    question: 'Thuật ngữ "độ điệp" được chú giải trong văn bản có nghĩa là gì?',
    options: {
      a: 'Giấy khen dành cho các cư sĩ tại gia có công cúng dường cha mẹ xuất sắc.',
      b: 'Sổ hộ tịch riêng dành cho những gia đình có con em đi xuất gia.',
      c: 'Tờ giấy phép cho phép Tăng sĩ được đi lại khất thực giữa các địa phương.',
      d: 'Giấy chứng nhận Tăng sĩ thực thụ được cấp sau khi trúng tuyển kỳ khảo thí về nội điển.',
    },
    answer: 'd',
  },
  {
    question: 'Khi tập khí xấu chưa dứt và vẫn chưa chế ngự được bằng trung - thứ - nhẫn nhục, tác giả khuyên người xuất gia nên dùng phương pháp nào?',
    options: {
      a: 'Tăng gấp đôi thời lượng đọc tụng kinh điển mỗi ngày.',
      b: 'Lập tức rời khỏi tùng lâm để đến nơi hoang vắng bế quan.',
      c: 'Hoàn tục trở lại làm cư sĩ để rèn luyện lại tâm tính.',
      d: 'Tưởng như mình đã chết để vô biên phiền não tự hóa thành thanh lương.',
    },
    answer: 'd',
  },
  {
    question: 'Theo Phật chế được đề cập trong bài, điều kiện bắt buộc về mặt gia đình trước khi một người được phép xuất gia là gì?',
    options: {
      a: 'Phải thưa và được cha mẹ đồng ý, đồng thời có anh em hoặc con cháu để gởi gắm phụng dưỡng song thân.',
      b: 'Phải cắt đứt hoàn toàn mọi liên hệ tình cảm và kinh tế với gia đình.',
      c: 'Phải đợi sau khi cha mẹ qua đời mới được phép thỉnh nguyện xuống tóc.',
      d: 'Chỉ cần tích lũy đủ của cải để cha mẹ dưỡng già là có thể tự ý xuất gia.',
    },
    answer: 'a',
  },
  {
    question: 'Trong trường hợp sau khi xuất gia mà gia đình gặp biến cố, cha mẹ không chỗ nương nhờ, Tăng sĩ được phép làm gì?',
    options: {
      a: 'Đưa cha mẹ vào ở hẳn trong phương trượng mà không cần khuyên họ tu hành.',
      b: 'Vận động cư sĩ quyên góp lập quỹ riêng chăm sóc cha mẹ.',
      c: 'Chia sớt y bát của mình để phụng dưỡng song thân.',
      d: 'Xin hoàn tục ngay lập tức để làm ăn nuôi dưỡng cha mẹ.',
    },
    answer: 'c',
  },
  {
    question: 'Tác giả dẫn kinh văn so sánh công đức cúng dường cha mẹ ngang bằng với công đức cúng dường vị Bồ Tát nào?',
    options: {
      a: 'Đại Bi Quán Thế Âm Bồ Tát.',
      b: 'Đại Trí Văn Thù Sư Lợi Bồ Tát.',
      c: 'Nhất Sanh Bổ Xứ Bồ Tát.',
      d: 'Địa Tạng Vương Bồ Tát.',
    },
    answer: 'c',
  },
  {
    question: 'Ngài Trường Lô Trách thiền sư đã thể hiện tấm gương báo hiếu đặc biệt nào đối với mẹ?',
    options: {
      a: 'Lặn lội ra chiến trường thu nhặt xương trắng để tìm lại hài cốt của cha.',
      b: 'Xin triều đình ban độ điệp cho mẹ được thế độ xuất gia làm Ni sư trụ trì.',
      c: 'Đón mẹ về ở phòng phía Đông phương trượng, khuyên mẹ niệm Phật cầu sanh Tịnh Độ suốt 7 năm.',
      d: 'Cõng mẹ vào Hoa Sơn, tự nhịn ăn khất thực để nuôi mẹ qua mùa gặt nghèo khó.',
    },
    answer: 'c',
  },
  {
    question: 'Theo tác giả, tại sao việc răn nhắc những tăng nhân bất thiện không nên do hàng người ở tư cách "học trò" thực hiện?',
    options: {
      a: 'Vì việc răn nhắc đòi hỏi địa vị đức cao trọng vọng mới thực hiện được mà không mắc lỗi sai cừu.',
      b: 'Vì luật pháp quốc gia cấm người trẻ tuổi góp ý người lớn tuổi.',
      c: 'Vì các tăng nhân bất thiện chắc chắn sẽ không bao giờ chịu lắng nghe.',
      d: 'Vì người ở hàng học trò chưa thuộc hết các giáo lý về trung - thứ - nhẫn nhục.',
    },
    answer: 'a',
  },
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-31-viii-6-luan-ve-xuat-gia',
  slug: 'bai-31-viii-6-luan-ve-xuat-gia',
  title: '6. Luận về xuất gia',
  type: 'article',
  status: 'published',
  order: 8,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Ý_Nghĩa_Chân_Chính_Xuất_Gia.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Luận_Về_Xuất_Gia.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/InLMKpUENX4',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1ph9j65XyVhXvevqxvUBSu?si=3WoOzqPMTUm3c3nuDVMSZQ',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận về xuất gia',
    passPercentage: 70,
    questions,
  },
}

export default lesson
