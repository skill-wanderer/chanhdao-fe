import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/3.chi-day-phuong-phap-tu-tri/5.khuyen-hanh-nhanh-no-luc'
  return base + '/' + encodeURIComponent(file)
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div>
      <p class="mb-1 text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400">III. CHỈ DẠY PHƯƠNG PHÁP TU TRÌ</p>
      <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">5. Khuyên hành nhân nỗ lực</h2>
    </div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Người sống trong thế gian, có đủ tám nỗi khổ. Dù sanh trên trời khó tránh ngũ suy21 . Chỉ Tây Phương Cực Lạc thế giới không có các nỗi khổ, chỉ hưởng các sự vui. Kinh dạy: “Tam giới vô an, do như hỏa trạch, chúng khổ sung mãn, thậm khả bố úy” (Ba cõi không yên giống như nhà lửa, các khổ dẫy đầy rất đáng kinh sợ). Mạng người vô thường, lẹ như ánh chớp. Ðại hạn xảy đến, ai nấy chẳng thể chiếu cố cho nhau. Hết thảy pháp hữu vi như mộng, huyễn, bọt, bóng.</p><p class="mb-0">Ðối với những điều ấy chẳng tỉnh ngộ, tận lực tu Tịnh nghiệp thì cùng sanh trưởng như gỗ, đá vô tình trong vòng trời đất vậy. Là trang nam nhi có huyết tánh, há chịu làm thây đi thịt chạy, chết mục nát với cỏ cây! Ðề cao cảnh thánh nhưng tự ở chốn phàm phu, gặp lời răn nhắc lớn lao mà chẳng phát phẫn, nghe đạo của thánh hiền, Phật, Tổ vẫn chẳng chịu tin thì là trời phụ người hay người phụ trời đây?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Tâm gặp ác mộng là điềm ác nghiệp đời trước hiển hiện. Dù cảnh hiện ra có thiện hay ác, nhưng chuyển biến được cảnh chính tại nơi mình! Ác nghiệp hiện nhưng chuyên tâm niệm Phật thì nhân duyên ác thành nhân duyên lành, ác nghiệp đời trước biến thành đạo sư đời này. Tiếc là người đời phần nhiều bị nghiệp trói buộc, chẳng thể chuyển biến, đến nỗi lâm vào cảnh đã té giếng còn bị ném đá, khổ càng thêm khổ!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Thời này là thời nào? Nam Bắc đánh nhau, trong ngoài đối địch. Ba bốn năm gần đây, người chết bốn năm ngàn vạn. Tự thuở có con người đến nay, chưa từng nghe thấy sự thê thảm như vậy. Lại còn gió lốc, nước dâng, địa chấn, ôn dịch nhan nhãn các nơi. Lại còn thêm lụt lội, hạn hán, không năm nào chẳng kèm thêm các tai nạn ấy. Giá cả các thứ mắc gấp mấy lần năm trước.</p><p class="mb-0">Trong lúc này, may còn được sống, dám đâu chẳng kiệt lực chuyên tu Tịnh nghiệp để cầu vãng sanh Tịnh Ðộ ư? Dám đâu do may mắn còn được cái thân lại buông lung ý chí, chẳng chuyên chú nhất định vào một pháp, lơ mơ dốc sức vào một pháp môn chẳng khế hợp thời cơ ư? Giả sử một hơi thở ra chẳng hít trở vào được, muốn lại được nghe pháp môn thẳng tắt như thế này, chỉ e chẳng có dịp may mắn như thế nữa đâu?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Thân là gốc để chiêu khổ, chán nhàm bèn được cái nền tảng để hưởng vui. Do túc nhân sâu dày, hiện tại thiện hảo càng nồng hậu, nên báo nặng từ nhiều kiếp chuyển thành vạ nhẹ trong hiện tại. Càng hoạn nạn, đớn đau càng mạnh mẽ tu trì thì những thống khổ trong cõi Sa Bà sẽ là thầy hướng dẫn mình về Cực Lạc. Hãy nghĩ mình đang đền nợ cũ thì những ý tưởng áo não, phiền muộn sẽ tự tiêu. Nếu vẫn còn ôm lòng oán trách thì tội chướng tiếp tục khởi. Cam chịu nghịch cảnh xảy đến mới là kẻ biết vui theo mệnh trời. Chán đây, ưa kia mới là người tu Tịnh nghiệp.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Một câu Phật hiệu bao quát hết cả toàn bộ giáo nghĩa Ðại Tạng không còn sót gì. Người thông Tông, thông Giáo mới có thể làm người chân thật niệm Phật, nhưng người cái gì cũng không biết, cái gì cũng chẳng làm được, miệng chỉ biết thưa thốt, cũng vẫn có thể làm người chân thật niệm Phật. Hai hạng người này có chân thật hay không toàn là do tự mình nỗ lực hay không, có hành theo đúng giáo pháp hay không?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Nếu đối với pháp môn Tịnh Ðộ, kính tin lời Phật quyết định chẳng ngờ, lòng tin chân thành, nguyện thiết tha, tu hành thật sự nhất định sẽ vãng sanh làm người trong thế giới Cực Lạc. Há nên trong lúc kiếp vận này, toan nhằm thời buổi nguy hiểm, tinh thần hữu hạn, lại thực hiện những pháp vụ chẳng cấp bách hòng được tiếng tăm là bậc đại thông gia để thỏa thể diện, khiến cho một việc chuyên tu của chính mình rốt cục thành hư luống sao?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Mười nguyện Phổ Hiền, một hạnh Văn Thù, nếu có thể chuyên ròng tu, dù hết thảy kinh luật đều chẳng thông suốt cũng có thể nhanh chóng tháo cũi xổ lồng, cao dự hải hội. Nếu đối với một pháp cậy vào Phật lực này tin chẳng chân thật, không quyết định nương dựa vào pháp này, dù có thông Tông thông Giáo sâu xa cũng chỉ là tam muội nơi cửa miệng. Toan dùng tam muội kiểu môi miếng ấy để liễu sanh thoát tử thật giống như dùng bánh vẽ để đỡ đói, ắt đến bước cùng đường hối hận sâu xa cũng chẳng mảy may có lợi ích gì! Hiện tại đời lẫn đạo chẳng biết tình trạng tương lai ra sao, vẫn còn toan dùng quang âm sắp hết để lo những chuyện chẳng cấp bách ư?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Cổ nhân nói: “Thiểu thật thắng đa hư. Ðại xảo bất như chuyết. Thuyết đắc nhất trượng, bất như hành thủ nhất thốn” (Ít thật hơn hư nhiều. Khéo quá chẳng bằng vụng. Nói cả trượng không bằng làm được một tấc). Chân tâm là ở chính mình, hãy suy nghĩ thấu đáo!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Một pháp Tịnh Ðộ lấy ba điều Tín - Hạnh - Nguyện làm tông. Chỉ có đầy đủ lòng tin chân thành, nguyện thiết tha mới dốc chí hành trì được. Gặp cảnh họa hại mới bèn chân thành, khẩn thiết; gặp lúc nhàn nhã, thong dong bèn lơi là, hoãn đãi. Ðấy là bệnh chung của phàm phu. Vào lúc này, thời cuộc lẫn tình hình đạo pháp như nằm yên trên đống củi, phía dưới lửa đã bốc cháy, nhưng chưa cháy đến thân. Chớp mắt là toàn thể bừng cháy, khắp cõi không chỗ nào trốn tránh được cả! Sao còn lơi là, xao nhãng qua ngày, chẳng chuyên chí cầu nơi một câu Phật hiệu? Cái tri kiến ấy thiển cận quá đỗi!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ðời trước vun bồi huệ căn này cố nhiên chẳng dễ dàng gì. Nếu đối với pháp này chẳng chuyên tinh, dốc cạn sức để mong được tự chứng, có khác gì chén, bình chưa nung, gặp mưa liền rã. Quang âm ngắn ngủi, mạng người mấy chốc? Một hơi thở ra chẳng trở lại đã qua đời sau. Người chưa chứng đạo từ ngộ vào mê, vạn người có cả mười ngàn; từ ngộ thêm ngộ, ức kẻ chẳng được một hai! Nỡ để vô thượng pháp khí gặp phải cơn mưa tái sanh liền trở thành bụi đất ư?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Chúng ta đã là Phật tử, phải hành Phật hạnh. Dù chẳng phá sạch được vô minh, nhanh chóng khôi phục bổn tánh, tiến thẳng vào Diệu Giác quả hải, chẳng lẽ không thể viên chứng ba tâm (thâm tâm, trực tâm, hồi hướng phát nguyện tâm), dốc lòng tu Tịnh nghiệp để mong đoạn Hoặc ngay nơi thân này, gởi tâm thức nơi Liên bang, làm đệ tử Phật Di Ðà, làm bạn lành của các Ðại Sĩ, an trụ tịch diệt, dạo các cõi Phật, trên cầu Phật đạo, dưới hóa độ chúng sanh hay sao?</p><p class="mb-0">Nếu chẳng tự gắng sức, chỉ đề cao thánh cảnh, vẫn cam làm phàm ngu, e rằng cả nửa đời tu trì siêng nhọc phải đành cay đắng vĩnh viễn trầm luân! Mê muội nên châu buộc nơi vạt áo mà đành bỏ phí của báu, lên núi báu trở về tay không. Dùng tánh Chân Như mầu nhiệm có đủ vô lượng công đức, trí huệ, thần thông, tướng hảo để hứng chịu oan uổng vô lượng sanh tử luân hồi, phiền não nghiệp quả, huyễn vọng cực khổ. Chẳng phải là mất trí sanh cuồng, ghét thăng thích đọa, sống làm thịt chạy, thây đi, chết mục nát cùng cỏ cây ư? Tam thế chư Phật gọi là hạng người đáng thương xót. Những vị đồng luân với tôi hãy nên nỗ lực.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Trong lúc đường đời nguy hiểm này, hãy nên mở toang tấm lòng, tầm mắt, nỗ lực tu trì Tịnh nghiệp. Tất cả cát - hung họa - phước đều chẳng lo tới, tùy duyên ứng biến. Dù cho đại họa trút xuống đầu vẫn nên nghĩ: Những người cùng mắc phải họa này chẳng biết là mấy ngàn vạn ức người? Trong tình thế chẳng làm gì khác được, vẫn còn có A Di Ðà Phật và Quán Thế Âm Bồ Tát để nương cậy được, há còn lo chi? Lấy việc niệm Phật, niệm Quán Thế Âm Bồ Tát để làm chỗ cậy nhờ vô úy. Mở rộng tâm lượng, đừng thấp thỏm thì bệnh tự nhiên lành, thân yên vui.</p><p class="mb-0">Chẳng biết nghĩa này, dù chưa gặp phải cảnh tai ách đã tự hãm mình trước vào trong tai ách; dù là Phật, Bồ Tát cũng chẳng thể cứu nổi. Bởi thế, quân tử không hoạn nạn hành xử như đang bị hoạn nạn, cho nên không điều gì xảy đến mà chẳng tự chủ được!</p></div>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
    <h3 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Chú thích:</h3>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/50 p-5 space-y-2 text-base text-text-secondary dark:border-primary-900 dark:bg-primary-950/20"><p class="mb-0">21 . Ngũ suy: Năm tướng suy: 1. Hoa trên đầu héo 2. Y phục nhơ nhớp 3. Ðổ mồ hôi nách 4. Thân hình hôi thối 5. Không ưa ngồi trên tòa.Mỗi khi năm tướng ấy hiện là điềm báo trước vị trời ấy khi mạng chung sẽ bị đọa lạc.</p></div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo chú thích trong đoạn trích, năm tướng suy (ngũ suy) của chư Thiên bao gồm những biểu hiện nào sau đây?",
    "options": {
      "a": "Mắt mờ, tai điếc, răng rụng, tóc bạc, chân tay run rẩy.",
      "b": "Hoa trên đầu héo, da thịt lở loét, mất tiếng nói, y phục rách rưới, bị các chư Thiên khác xua đuổi.",
      "c": "Hoa trên đầu héo, y phục nhơ nhớp, đổ mồ hôi nách, thân hình hôi thối, không ưa ngồi trên tòa.",
      "d": "Mất đi thần thông, tâm trí u mê, giận dữ thất thường, sợ ánh sáng, ăn uống không tiêu."
    },
    "answer": "c"
  },
  {
    "question": "Trích dẫn kinh điển \"Tam giới vô an, do như hỏa trạch, chúng khổ sung mãn, thậm khả bố úy\" mang ý nghĩa chính là gì?",
    "options": {
      "a": "Chỉ có chốn phàm phu mới chịu nhiều khổ đau, còn các cõi trời thì hoàn toàn không bị ảnh hưởng.",
      "b": "Ba cõi hoàn toàn không có chỗ nào yên ổn, giống như nhà lửa đầy rẫy nỗi khổ đáng sợ.",
      "c": "Mọi tai hại trên thế gian đều xuất phát từ chiến tranh và thiên tai.",
      "d": "Cõi trời là nơi an vui nhất nhưng vẫn khó tránh khỏi quy luật sinh lão bệnh tử."
    },
    "answer": "b"
  },
  {
    "question": "Khi ác nghiệp đời trước hiển hiện (như gặp giấc mơ dữ hoặc cảnh ngộ xấu), tác giả khuyên hành nhân nên ứng xử thế nào?",
    "options": {
      "a": "Cam chịu trong oán trách và phiền muộn vì cho rằng đó là số mệnh không thể đổi.",
      "b": "Chuyên tâm niệm Phật để biến nhân duyên ác thành nhân duyên lành và thành đạo sư đời này.",
      "c": "Tìm cách thực hiện các pháp vụ không cấp bách hòng lấy lại danh tiếng.",
      "d": "Chỉ tập trung nghiên cứu thông Tông thông Giáo để giải thích nguyên nhân của ác nghiệp."
    },
    "answer": "b"
  },
  {
    "question": "Thái độ đúng đắn cần có đối với hoạn nạn và đớn đau trong cõi Sa Bà là gì?",
    "options": {
      "a": "Coi hoạn nạn là sự trừng phạt vĩnh viễn không thể cứu vớt.",
      "b": "Tìm mọi cách tích lũy của cải để chống lại tình trạng giá cả đắt đỏ và thiên tai.",
      "c": "Nghĩ mình đang đền nợ cũ, xem thống khổ Sa Bà là thầy hướng dẫn mình về Cực Lạc.",
      "d": "Oán trách số phận vì cho rằng mình đã tu tập mà vẫn phải chịu khổ."
    },
    "answer": "c"
  },
  {
    "question": "Theo tác giả, hai hạng người nào nếu nỗ lực và hành đúng giáo pháp thì đều có thể trở thành người \"chân thật niệm Phật\"?",
    "options": {
      "a": "Người giàu có cúng dưỡng nhiều và người sống ẩn dật nơi núi cao.",
      "b": "Người thuộc lòng Đại Tạng kinh và người giỏi thuyết giảng pháp môn Tịnh Độ.",
      "c": "Người đã chứng quả Diệu Giác và người đã xuất gia lâu năm.",
      "d": "Người thông Tông thông Giáo và người cái gì cũng không biết, miệng chỉ biết thưa thốt."
    },
    "answer": "d"
  },
  {
    "question": "Tông chỉ cốt lõi làm nền tảng cho một pháp Tịnh Độ bao gồm ba điều kiện nào?",
    "options": {
      "a": "Tín - Hạnh - Nguyện",
      "b": "Từ - Bi - Hỷ - Xả",
      "c": "Văn - Tư - Tu",
      "d": "Giới - Định - Tuệ"
    },
    "answer": "a"
  },
  {
    "question": "Câu nói của cổ nhân \"Thuyết đắc nhất trượng, bất như hành thủ nhất thốn\" nhấn mạnh điều gì?",
    "options": {
      "a": "Nói hay đến đâu cũng không bằng thực hành được một phần nhỏ thực chất.",
      "b": "Nói nhiều thì dễ bị sai sót, tốt nhất nên giữ im lặng tuyệt đối.",
      "c": "Chỉ cần hiểu sâu sắc về mặt giáo lý thì việc thực hành không còn quá quan trọng.",
      "d": "Người vụng về thì không thể tu tập được các pháp môn thẳng tắt."
    },
    "answer": "a"
  },
  {
    "question": "Nếu một người thông Tông thông Giáo sâu xa nhưng lại thiếu lòng tin chân thật vào Phật lực của pháp Tịnh Độ thì sự tu tập đó được so sánh với điều gì?",
    "options": {
      "a": "Nằm yên trên đống củi phía dưới lửa đã bốc cháy.",
      "b": "Dùng bánh vẽ để đỡ đói, rốt cục đến bước cùng đường chẳng có mảy may lợi ích.",
      "c": "Thây đi thịt chạy, chết mục nát cùng cỏ cây.",
      "d": "Chén, bình chưa nung gặp mưa liền rã."
    },
    "answer": "b"
  },
  {
    "question": "Theo văn bản, để hướng tới giải thoát ngay nơi thân này, người Phật tử cần dốc lòng nỗ lực viên chứng \"ba tâm\" nào?",
    "options": {
      "a": "Thâm tâm, Trực tâm, Hồi hướng phát nguyện tâm.",
      "b": "Bồ đề tâm, Vô thượng tâm, Hướng thiện tâm.",
      "c": "Từ tâm, Bi tâm, Hỷ xả tâm.",
      "d": "Thanh tịnh tâm, Bình đẳng tâm, Chánh giác tâm."
    },
    "answer": "a"
  },
  {
    "question": "Nguyên nhân chính khiến cho \"báo nặng từ nhiều kiếp chuyển thành vạ nhẹ trong hiện tại\" là gì?",
    "options": {
      "a": "Do gặp được nhiều may mắn và được chư Thiên che chở khỏi các đại nạn.",
      "b": "Do túc nhân sâu dày kết hợp với thiện hảo hiện tại nồng hậu và sự dốc lòng tu trì.",
      "c": "Do thực hiện được nhiều pháp vụ danh tiếng để thỏa thể diện phàm phu.",
      "d": "Do né tránh được các cuộc chiến tranh và thiên tai nhờ số phận hanh thông."
    },
    "answer": "b"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-13-iii-5-khuyen-hanh-nhan-no-luc',
  slug: 'bai-13-iii-5-khuyen-hanh-nhan-no-luc',
  title: '5. Khuyên hành nhân nỗ lực',
  type: 'article',
  status: 'published',
  order: 6,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Lời_Khuyên_Tu_Tịnh_Nghiệp.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Hoa_Sen_Trong_Biển_Lửa.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/Xyc8MHo2gU4',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1jXfz6vO8e4Wcq0W8cnkuq?si=KNxSwtgkQYiXqpJaZcjL3Q',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Khuyên hành nhân nỗ lực',
    passPercentage: 70,
    questions,
  },
}

export default lesson
