import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/5.khuyen-chu-trong-nhan-qua/3.giai-thich-ve-nguyen-do-cua-kiep-van'
  return base + '/' + encodeURIComponent(file)
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-8">
    <header class="mb-2">
      <p class="!mb-1 text-xs font-medium uppercase tracking-widest text-brand-accent">V. KHUYÊN CHÚ TRỌNG NHÂN QUẢ</p>
      <h2 class="!mt-0">3. Giải thích về nguyên do của kiếp vận</h2>
    </header>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Sự khổ trong Sa Bà chẳng thể nói hết nổi. Dù trong thời thanh bình, hằng ngày vẫn gặp cảnh khổ não. Vì chúng sanh quá quen với những cảnh khổ ấy đã lâu nên chẳng biết đó thôi! Gần đây, Trung Quốc trải mấy phen binh lửa, đã là khổ chẳng thể nói. Ngoài thế giới, các nước đại chiến đã ba năm, người chết gần cả ngàn vạn, khai mào nạn binh kiếp bậc nhất. Tình hình chiến tranh vẫn còn mạnh mẽ, chẳng biết mức độ khốc liệt sẽ đến đâu, lặng im suy nghĩ, thật đáng kinh sợ vậy.</p><p class="!mb-0 text-justify indent-8 leading-8">Nguyên nhân là do nước nọ tận lực muốn chiếm đoạt, tàn diệt nước kia, nhưng cũng do ác nghiệp xưa kia của chúng sanh chiêu cảm ác báo nên mới đến nỗi cực kỳ tàn khốc như thế. Nay nghe lời này, phải nên mạnh mẽ phát khởi đại tâm cầu mau được vãng sanh. Sau đấy sẽ trở vào Sa Bà phổ độ hết thảy.</p><p class="!mb-0 text-justify indent-8 leading-8">Kinh dạy: “Bồ Tát sợ nhân, chúng sanh sợ quả”. Bồ Tát sợ chiêu lấy ác quả nên đoạn ác nhân. Ác nhân đoạn rồi, ác quả không sanh từ đâu được. Chúng sanh đua nhau tạo nhân ác, ắt phải lãnh quả ác. Đến lúc lãnh quả ác, chẳng biết tự sám hối nghiệp trước, lại còn tạo thêm ác pháp để chống chọi lại. Thế nên oan oan tương báo trải bao kiếp không ngừng. Chẳng đáng buồn sao? Chẳng đáng sợ sao? Biết vậy rồi, chẳng lẽ nào lại chẳng cầu sanh Tây Phương!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Cõi đời đang lúc Kiếp Trược, cướp bóc, giết hại lẫn nhau. Chẳng có lá bùa hộ thân, sẽ khó tránh khỏi họa hại được mãi! Lá bùa hộ thân vừa nói đó cũng chỉ là chí thành lễ niệm A Di Đà Phật mà thôi! Quán Âm Đại Sĩ thệ nguyện rộng sâu, nghe tiếng cứu khổ, có cảm ắt ứng. Ngoài việc sáng chiều lễ Phật ra, hãy nên lễ niệm thêm Đại Sĩ sẽ ngầm được gia hộ, tự có thể chuyển họa thành phước, biến tai nạn thành điều tốt lành mà mình chẳng biết.</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Thiên hạ loạn lạc, kẻ thất phu phải có trách nhiệm. Người người ai nấy dốc tấm lòng thành, ai nấy tận lực hiếu đễ, ai nấy làm điều từ thiện: giúp đỡ kẻ cô quả, cứu kẻ hoạn nạn, thương xót kẻ nghèo, kiêng giết, phóng sanh, ăn chay, niệm Phật. Người có thiện cảm, trời ắt ứng phước, tự nhiên mưa thuận, gió hòa, dân yên, vật mạnh, quyết chẳng đến nỗi trời thường giáng các tai nạn: lụt, hạn, ôn dịch, châu chấu, gió lốc, động đất... Thời tiết điều hòa, được mùa, nhân dân lạc nghiệp.</p><p class="!mb-0 text-justify indent-8 leading-8">Lại thêm từ hòa, nhân nhượng tập quen thành thói. Dù có một hai kẻ ngu độn cũng sẽ biến thành hiền lành. Nếu thương xót kẻ quân tử trên xà nhà<sup class="ml-0.5 text-xs font-semibold text-brand-accent">32</sup> , hắn sẽ dứt tuyệt vĩnh viễn thói trộm cắp; chu cấp cho đứa rình rập nhà kín, từ đấy về sau nó sẽ trở thành người lành. Cổ nhân dùng nhân từ để cai trị, chân thành yêu dân, nên còn cảm hóa được cả dị loại. Các điềm lành như: hổ chẳng vào nơi trấn nhậm, cá sấu bỏ đi nơi khác... chép trong sử sách, nào phải chỉ có một chuyện! Nếu ai nấy thật sự có thể dùng lòng từ thiện cảm động nhau, quyết chẳng đến nỗi thường có các tai họa: thổ phỉ, đao binh, giầy xéo, cướp bóc!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Nên biết rằng: Phật pháp lấy nhân quả báo ứng làm đạo nguyên thủy trọng yếu để hạ học thượng đạt. Nay kẻ trên không giữ đạo, kẻ dưới chẳng tuân phép tắc, tàn hại lẫn nhau, lấy giết chóc làm vui, chỉ cốt sao thỏa thích ý mình, chẳng đoái quốc gia còn mất, dân tình thống khổ. Đấy đều là do chẳng biết nhân quả báo ứng mà nên nỗi. Tôi thường nói: “Nhân quả là phương tiện lớn lao để thánh nhân thế gian và xuất thế gian bình trị thiên hạ, độ thoát chúng sanh”. Trong lúc này chẳng đề xướng sự lý nhân quả báo ứng, sanh tử, luân hồi, mà muốn thiên hạ thái bình, nhân dân an lạc, dù Phật, Tổ, thánh hiền cùng ra đời cũng chẳng biết làm sao được!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Thế đạo suy sụp, lòng người bạc bẽo là do Nho Gia chẳng biết đạo là ở chỗ cung kính thực hành, cứ một bề đuổi theo cái ngọn. Phàm đối với những nghĩa lý như khắc kỷ, giữ lễ, ngăn lòng tà, giữ lòng thành, họ chẳng cần biết đến, cứ lo thuộc lòng từ chương hòng làm cái vốn để tấn thủ trong đời, khiến cho cái đạo khen ngợi, giáo hóa, dưỡng dục của thánh nhân trở thành ngón nghề để thâu đoạt danh lợi. Đấy thật là báng nhục thánh hiền, trái nghịch thiên địa đến cùng cực!</p><p class="!mb-0 text-justify indent-8 leading-8">Do vậy, người đọc sách tâm chẳng hiểu nghĩa sách, thân chẳng hành theo đạo lý dạy trong sách. Người làm văn cứ phô diễn đạo lý hiếu đễ, trung tín, lễ nghĩa, liêm sỉ chẳng sót mảy may, nhưng xét đến ý nghĩ, việc làm, tuyệt chẳng có chút mảy may nào liên quan đến những điều ấy cả. Khác nào con hát diễn tuồng, khổ, sướng, vui, buồn, cố làm giống như thật, chứ thật sự ra những tâm trạng ấy chẳng mảy may liên quan gì đến chính mình cả! Thói tệ ấy đã nẩy, dần dà biến thành quá mức.</p><p class="!mb-0 text-justify indent-8 leading-8">Người có thiên tư quen thói cuồng vọng, thẹn phải theo vết Nghiêu, Thuấn, Châu, Khổng, bèn muốn tiến lên, rốt cuộc phế bỏ kinh điển thánh hiền, sùng thượng Âu hóa. Một người đề xướng, trăm kẻ hùa theo, trở thành phong trào đến nỗi những kẻ tiểu nhân hèn kém tầm thường muốn thỏa ý niệm mặc sức phóng túng không kiêng kỵ của mình bèn vội vã đề xướng dẹp bỏ cương thường đạo lý gây trở ngại cho họ, muốn gấp rút thực hành chủ trương tệ hại gây hại lớn lao cho quần chúng, khiến dân không có pháp gì để an, đến nỗi thiên tai, nhân họa liên tục giáng xuống. Vận nước nguy ngập, dân không lẽ sống. Ví như đi đêm bỏ đuốc, vượt biển bỏ thuyền, lại mong chẳng bị té ngã, chìm đắm, há có được chăng?</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Gần đây thế đạo nhân tâm suy sụp, chìm đắm đến cùng cực. Thiên tai, nhân họa liên tục giáng xuống. Người biết lo cho đời, biết các nghiệp quả ấy đều do sát hại khởi lên. Nếu đã biết vật còn chẳng nên giết, quyết chẳng lẽ nào giết người. Do vậy, ai nấy ôm lòng từ thiện, nâng đỡ lẫn nhau, tự thay đổi được phong tục, chiêu cảm được thiên hòa vậy.</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Phải biết rằng phóng sanh chính là để ngăn ngừa giết chóc. Muốn tránh giết chóc thì phải bắt đầu bằng ăn chay. Nếu như ai nấy đều kiêng giết, ai nấy đều ăn chay thì nhà nhà tu tập từ thiện, người người tuân hành đề cao lễ nghĩa, phong tục thuần mỹ, khí hậu điều hòa, mùa màng sung túc, có đâu đến nỗi kiếp đao binh khởi, kẻ này người kia tàn hại lẫn nhau! Đấy chính là nhiệm vụ căn bản trọng yếu, thanh tịnh đúng đắn để vãn hồi thiên tai, nhân họa. Phàm những ai muốn cửa nhà yên vui, thân tâm khang ninh, thiên hạ thái bình, nhân dân an lạc, xin hãy cầu nơi việc phóng sanh kiêng giết, ăn chay, niệm Phật thì cầu gì lại chẳng được!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Gần đây thiên tai nhân họa liên tiếp xảy ra quá đỗi, số người tử vong quá nhiều càng thảm. Há nào phải đạo trời bất nhân đâu, thật ra là do ác nghiệp trong bao kiếp và trong đời này chiêu cảm đó thôi. Tuyệt đối chẳng có chuyện không nhân lại được quả, cũng tuyệt đối chẳng có chuyện tạo thiện nghiệp lại bị quả ác! Chỉ vì tri kiến phàm phu chẳng thể biết rõ nhân duyên túc thế, nên tựa hồ có trường hợp lẽ ra chẳng đáng được nhưng lại được. Nếu có thể xem trọn nhiều kiếp, nhiều đời, sẽ thấy mỗi một quả báo thiện hay ác ta phải nhận đều như tiếng vọng đi theo âm thanh, như bóng theo hình, trọn chẳng sai khác!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Nay thế đạo nhân tâm suy sụp, khuyết hãm đã đến cực điểm. Nếu chẳng dùng nhân quả, báo ứng, sanh tử, luân hồi và “hết thảy chúng sanh đều có Phật tánh, đều có thể thành Phật” để dạy dỗ, quyết khó lòng đạt được hiệu quả! Do một niệm tâm tánh của chúng ta bất biến tùy duyên, tùy duyên bất biến, hễ gặp tịnh duyên bèn chứng Tam Thừa và Phật pháp giới; gặp duyên mê nhiễm sẽ thành nhân thiên và tứ ác thú pháp giới. Dù mười pháp giới thăng trầm, khổ vui khác xa nhau như trời với đất, nhưng tâm tánh vốn sẵn có ấy tại phàm chẳng giảm, tại tánh chẳng tăng.</p><p class="!mb-0 text-justify indent-8 leading-8">Nếu hiểu kỹ nghĩa này, dù có táng thân mất mạng, quyết chẳng chịu bỏ đi tịnh duyên đã ngộ để theo đuổi nhiễm duyên đến nỗi luân hồi mãi mãi, chẳng thể thoát nổi! Vì thế, biết rằng các pháp: nhân quả, báo ứng, sanh tử, luân hồi v.v... chính là đại đạo trị cả gốc lẫn ngọn, là nguyên do của cả phàm lẫn thánh, là phương tiện lớn lao để thánh nhân thế gian, xuất thế gian bình trị thiên hạ, độ thoát chúng sanh. Trong lúc này, nếu bỏ đi pháp này, dù Nghiêu, Thuấn, Vũ, Thang, Văn, Vũ, Châu, Khổng cùng ra đời, cũng chẳng làm gì được!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Ba cõi chẳng yên hệt như nhà lửa, các khổ đầy dẫy thật đáng kinh sợ! Chúng sanh ngu si dù chịu khổ lớn chẳng cầu xuất ly. Dù sẵn có Phật tánh, nhưng vì mê muội, trái nghịch, lại khởi Hoặc tạo nghiệp đến nỗi trải kiếp số như trần sa không cách nào giải thoát. Chẳng đáng buồn ư? Huống nay thế đạo, lòng người nguy hãm, chìm đắm đến cùng cực, sát kiếp thê thảm từ xưa chưa từng nghe.</p><p class="!mb-0 text-justify indent-8 leading-8">Lại thêm trào lưu tân học bác không nhân quả, chê những lời nghị luận đạo đức của thánh hiền là hủ bại, vu vơ, mặc tình đề xướng những ý kiến mình ức đoán. Kẻ quáng dẫn lũ mù, lôi nhau vào lửa, đến nỗi thiên tai, nhân họa liên tục giáng xuống. Lũ dân ngây ngô thật đáng thương xót. Bởi thế, những người có tâm lo cho đời bèn mạnh mẽ phát đại chí muốn cứu giúp dân. Những nghiệp quả ấy đều do chỉ biết tự tư, tự lợi, chẳng biết nhân quả ba đời, thiện ác báo ứng, tưởng là người chết đi, thần thức liền diệt, chẳng có linh hồn tùy theo nhân duyên tội phước thọ sanh trong trời người hay đọa vào tam đồ, ác đạo!</p><p class="!mb-0 text-justify indent-8 leading-8">Nếu thiện hay ác cũng đều bị diệt mất như nhau, lẽ nào chẳng tùy ý làm bất cứ chuyện gì cốt sao thân tâm khoái lạc ư? Do vậy, đối với những việc nghịch thiên trái lý, tổn người lợi mình, cùng với giết hại sanh mạng cốt sao thỏa thích miệng bụng, bèn đua nhau tưng bừng làm, chẳng e dè chi!</p><p class="!mb-0 text-justify indent-8 leading-8">Nếu như biết đến nhân quả ba đời sẽ liền sợ phải thọ báo, chẳng dám móng khởi chút ý niệm, huống hồ là thực hành những việc ấy ư? Vì vậy, biết rằng: sự lý nhân quả ba đời, sanh tử, luân hồi do đức Phật ta giảng chính là huệ nhật trong đêm dài vô minh. Niệm Phật cầu sanh Tây Phương Cực Lạc thế giới chính là thuyền từ trong biển khổ sanh tử. Muốn vãn hồi kiếp vận, bỏ qua pháp này, không còn cách chi!</p></div>
    <div class="my-10 flex items-center justify-center gap-4" aria-hidden="true"><span class="h-px w-20 bg-gradient-to-r from-transparent to-brand-primary"></span><span class="text-xl text-brand-primary">❀</span><span class="h-px w-20 bg-gradient-to-l from-transparent to-brand-primary"></span></div>
    <h3 class="!mt-10 !mb-3">Chú thích:</h3>
    <div class="space-y-2 rounded-xl bg-surface-card px-5 py-4 text-base leading-7 text-text-secondary"><p class="!mb-0 text-justify"><sup class="mr-0.5 text-xs font-semibold text-brand-accent">32</sup> . Nguyên văn: “Lương thượng chi quân tử” (kẻ quân tử ở trên xà nhà) là thành ngữ chỉ kẻ trộm.</p></div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo văn bản, nguyên nhân cốt lõi dẫn đến các tai họa cực kỳ tàn khốc như đao binh, chiến tranh giữa các quốc gia là gì?",
    "options": {
      "a": "Do ác nghiệp xưa kia của chúng sanh chiêu cảm ác báo kết hợp với lòng muốn chiếm đoạt, tàn diệt lẫn nhau.",
      "b": "Do sự bất bình đẳng về kinh tế và chênh lệch giai cấp sâu sắc trong xã hội.",
      "c": "Do sự phát triển của vũ khí hiện đại và lòng tham lãnh thổ thuần túy.",
      "d": "Do thời tiết khí hậu thất thường làm phát sinh xung đột tài nguyên giữa các nước."
    },
    "answer": "a"
  },
  {
    "question": "Sự khác biệt căn bản giữa Bồ Tát và chúng sanh đối với việc đối diện với \"nhân quả\" được Kinh dạy như thế nào?",
    "options": {
      "a": "Bồ Tát sợ quả nên tránh tai họa, chúng sanh sợ nhân nên nỗ lực tu hành.",
      "b": "Bồ Tát và chúng sanh đều sợ quả ác như nhau nhưng Bồ Tát có phép thần thông để tránh.",
      "c": "Bồ Tát sợ nhân nên đoạn ác nhân, chúng sanh sợ quả nhưng khi gặp quả ác lại tiếp tục tạo ác pháp.",
      "d": "Bồ Tát sợ ác duyên, chúng sanh sợ ác nghiệp nhưng không biết cách sám hối."
    },
    "answer": "c"
  },
  {
    "question": "Để chuyển họa thành phước và biến tai nạn thành điều tốt lành trong thời Kiếp Trược, tác giả khuyên phương pháp hộ thân căn bản nào ngoài việc sáng chiều lễ Phật?",
    "options": {
      "a": "Chí thành lễ niệm thêm Quán Thế Âm Đại Sĩ.",
      "b": "Quyên góp tiền bạc cho các tổ chức xã hội để dẹp loạn thổ phỉ.",
      "c": "Tích trữ lương thực và di cư đến nơi hẻo lánh để lánh nạn đao binh.",
      "d": "Mang theo các lá bùa chấn trạch của nhà sư có đạo hạnh cao."
    },
    "answer": "a"
  },
  {
    "question": "Theo nguồn tài liệu, phương cách nền tảng và căn bản nhất để ngăn ngừa đao binh, vãn hồi thiên tai nhân họa là gì?",
    "options": {
      "a": "Kiêng giết hại, ăn chay, phóng sanh và niệm Phật.",
      "b": "Đẩy mạnh việc giảng dạy văn chương Nho gia tại các trường học.",
      "c": "Xây dựng quân đội mạnh mẽ và thắt chặt pháp luật quốc gia.",
      "d": "Đóng cửa biên giới để tránh ảnh hưởng bởi phong trào văn hóa ngoại nhập."
    },
    "answer": "a"
  },
  {
    "question": "Tác giả nhận định như thế nào về mối quan hệ giữa việc \"không đề xướng sự lý nhân quả báo ứng\" với mục tiêu \"thiên hạ thái bình\"?",
    "options": {
      "a": "Nhờ có tiến bộ khoa học hiện đại, không cần đề xướng nhân quả thì thiên hạ vẫn thái bình.",
      "b": "Chỉ cần dùng nghiêm phạt và pháp trị thì tự nhiên đất nước sẽ an lạc mà không cần đạo lý nhân quả.",
      "c": "Chỉ cần mọi người thuộc lòng kinh sách thánh hiền thì xã hội sẽ tự khắc ổn định.",
      "d": "Dù Phật, Tổ, thánh hiền cùng ra đời cũng chẳng thể làm cho thiên hạ thái bình nếu bỏ qua nhân quả."
    },
    "answer": "d"
  },
  {
    "question": "Theo phân tích trong văn bản, vì sao việc học Nho Gia thời suy sụp lại không đem lại hiệu quả cải thiện thế đạo nhân tâm?",
    "options": {
      "a": "Vì người học chỉ đuổi theo từ chương hòng cầu danh lợi, thân chẳng hành theo đạo lý dạy trong sách.",
      "b": "Vì các kinh điển Nho Gia quá khó hiểu đối với dân trí thời bấy giờ.",
      "c": "Vì giáo lý Nho Gia hoàn toàn bác bỏ việc tu thân tích đức và lòng từ thiện.",
      "d": "Vì chính quyền đương thời đã cấm đoán việc lưu hành sách Nho học trong nhân dân."
    },
    "answer": "a"
  },
  {
    "question": "Phong trào \"bác không nhân quả\" và sùng thượng học thuyết mới một cách cuồng vọng gây ra hậu quả nguy hại nào cho quần chúng?",
    "options": {
      "a": "Khiến người dân quá chú trọng vào việc giải thoát sinh tử mà quên mất trách nhiệm thế gian.",
      "b": "Giúp người dân mở mang trí tuệ nhưng lại làm suy giảm nền kinh tế đất nước.",
      "c": "Giúp xã hội công bằng hơn nhưng làm mất đi bản sắc văn hóa truyền thống.",
      "d": "Khiến dân dẹp bỏ cương thường đạo lý, mặc tình phóng túng, làm cho thiên tai nhân họa liên tục giáng xuống."
    },
    "answer": "d"
  },
  {
    "question": "Vì sao việc \"giết hại sanh mạng cốt sao thỏa thích miệng bụng\" lại liên quan trực tiếp đến họa đao binh, chiến tranh giữa con người?",
    "options": {
      "a": "Vì ác nghiệp sát hại loài vật ăn thịt tích tụ dần chiêu cảm thành quả báo chiến tranh tàn sát lẫn nhau giữa con người.",
      "b": "Vì việc chăn nuôi và giết mổ động vật tốn kém quá nhiều chi phí kinh tế.",
      "c": "Vì việc giết động vật làm cạn kiệt tài nguyên thiên nhiên, dẫn đến tranh chấp giữa các quốc gia.",
      "d": "Vì ăn thịt động vật khiến con người suy giảm thể lực, không đủ sức chống lại ngoại xâm."
    },
    "answer": "a"
  },
  {
    "question": "Cụm từ \"Lương thượng chi quân tử\" được giải thích trong chú thích của bài viết mang ý nghĩa chỉ đối tượng nào?",
    "options": {
      "a": "Kẻ trộm (kẻ gian rình rập trên xà nhà).",
      "b": "Những bậc hiền sĩ sống ẩn dật trên núi cao.",
      "c": "Những vị quan lại thanh liêm ngồi làm việc trên triều đình.",
      "d": "Những người sĩ phu yêu nước có tinh thần trách nhiệm với dân tộc."
    },
    "answer": "a"
  },
  {
    "question": "Nguyên lý tâm tính nào giải thích tại sao cùng có sẵn Phật tính nhưng chúng sanh lại thăng trầm khổ vui khác xa nhau trong mười pháp giới?",
    "options": {
      "a": "Do một niệm tâm tính \"bất biến tùy duyên, tùy duyên bất biến\", hễ gặp tịnh duyên thì chứng Tam Thừa và Phật, gặp duyên mê nhiễm thì thành tứ ác thú.",
      "b": "Bản tính con người sinh ra vốn đã phân chia sẵn kẻ hiền người ngu không thể thay đổi.",
      "c": "Do hoàn cảnh vật chất quyết định hoàn toàn bản chất tâm tính của chúng sanh.",
      "d": "Do số mệnh do trời định sẵn, không liên quan đến việc gặp tịnh duyên hay nhiễm duyên."
    },
    "answer": "a"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-22-vi-3-giai-thich-ve-nguyen-do-cua-kiep-van',
  slug: 'bai-22-vi-3-giai-thich-ve-nguyen-do-cua-kiep-van',
  title: '3. Giải thích về nguyên do của kiếp vận',
  type: 'article',
  status: 'published',
  order: 4,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Nguồn_gốc_kiếp_vận_tai_họa.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('From_Darkness_to_Awakening.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/I8HZRRNUiAk',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6iZr6oO1TnuhJN32nH3TRI?si=0yLHefkKSA2FC2MzuHNbTA',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Giải thích về nguyên do của kiếp vận',
    passPercentage: 70,
    questions,
  },
}

export default lesson
