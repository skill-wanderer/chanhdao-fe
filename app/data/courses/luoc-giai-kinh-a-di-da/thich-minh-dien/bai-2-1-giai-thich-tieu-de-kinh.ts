import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div class="mb-8">
      <h2 id="giai-thich-tieu-de-kinh" class="mt-0 mb-2 text-3xl font-bold text-primary-700 dark:text-primary-300">2.1. Giải thích tiêu đề kinh</h2>
    </div>

    <div class="mb-8">
      <h3 id="chanh-van" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chánh văn:</h3>
      <p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">Phật nói kinh A Di Đà</p>
    </div>

    <div class="mb-8">
      <h3 id="giai-thich-tu-ngu" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Giải thích từ ngữ:</h3>

    <h4 class="mt-6 text-lg font-semibold">Phật (hay Phật-đà):</h4>
    <p>Là dịch âm từ tiếng Phạn Buddha. Dịch sang tiếng Trung Hoa là Giác giả, nghĩa là người đã giác ngộ hoàn toàn gồm: tự giác – giác tha – giác hạnh viên mãn.</p>

    <h4 class="mt-6 text-lg font-semibold">Thuyết:</h4>
    <p>Là nói hay trình bày ra bằng lời.</p>

    <h4 class="mt-6 text-lg font-semibold">Kinh:</h4>
    <p>Là dịch âm từ tiếng Phạn Sūtra, dịch nghĩa là “quán xuyến và nhiếp trì”. Lời dạy của Đức Phật giúp cho chúng ta biết cách quán chiếu thân tâm và ngoại tại, để chuyển hóa những nghiệp nhân xấu ác sang tốt lành.</p>
    <p>Kinh cũng giúp cho chúng ta biết cách hóa giải vọng tâm, để chân tâm hiển lộ. Kinh mang tính khế cơ và khế lý, tức thích hợp với từng căn cơ chúng sinh và khế hợp chân lý.</p>
    <p>Hệ kinh điển mang tính khế cơ được gọi là “Bất liễu nghĩa”. Hệ kinh này giúp cho chúng ta hình thành cho mình một phàm tuệ bằng chánh niệm tỉnh giác, bằng tuệ quán để thấy rõ mọi hoành tung thiện ác, tốt xấu để chuyển hóa thân tâm và ngoại tại, hầu đem lại sự bình ổn, sự tươi mát, an lạc và hạnh phúc cho cuộc sống chung cùng.</p>
    <p>Hệ kinh điển mang tính khế lý được gọi là “Liễu nghĩa”. Hệ kinh này giúp cho chúng ta hình thành cho mình một thánh tuệ, tức trở lại sống đúng với bản giác sẵn có xưa nay của mình, ngỏ hầu mở tung mọi lầm chấp bởi thói quen dựng lập của vọng tưởng. Kinh A Di Đà này thuộc hệ kinh liễu nghĩa, dạy chúng ta pháp niệm Phật A Di Đà hay niệm tự tánh để được nhất tâm.</p>

    <h4 class="mt-6 text-lg font-semibold">A Di Đà:</h4>
    <p>Là dịch âm từ tiếng Phạn अमिताभ (Amitābha) và Amitāyus. Amitābha dịch nghĩa là "Vô Lượng Quang" (ánh sáng vô lượng); Amitāyus có nghĩa là "Vô Lượng Thọ" (thọ mạng vô lượng). Vô lượng quang, vô lượng thọ là chỉ cho tự tánh Di Đà, hay tánh giác ngộ mà ai cũng có (1). Vì vậy cho nên, trong kinh Duy-ma-cật, Đức Phật Thích-ca dạy: “Muốn được cõi tịnh thì phải tịnh tâm mình, tùy tâm mình tịnh thì cõi tịnh độ tự hiện ra” (2).</p>

    </div>

    <div class="mb-8">
      <h3 id="giai-thich-de-kinh" class="mt-0 mb-4 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Giải thích đề kinh:</h3>
    <p>Phật nói kinh A Di Đà là trực chỉ vào tên kinh mà cũng là pháp, nhưng pháp ở đây là pháp niệm tự tánh, nên danh A Di Đà ở đây cũng là danh tự tánh. Bởi danh tự tánh A Di Đà mới siêu việt thời gian nên nói Vô lượng thọ, và siêu việt không gian nên nói Vô lượng quang. Và niệm ngay nơi tự tánh Di Đà ở trong tâm mình, nên cất hết mọi đối tượng của thức, vì vậy kinh nói “pháp khó tin” (nan tín chi pháp). Còn nếu niệm danh từ “A Di Đà Phật” thì do thức niệm, nên không thể siêu vượt thời gian và không gian, không thể có kết quả là nhất tâm bất loạn được. Đó chính là sự nhầm lẫn mà xưa nay chúng ta thường niệm, nên rốt cuộc không thể trực nhập chân tâm. Kinh này thuộc về giáo lý viên đốn, Bồ-tát tạng nên nói “chư Phật sở hộ niệm”.</p>

    <p>Nhưng do căn cơ của người tu có cao thấp sai khác, nên người xưa phương tiện lập ra bốn phương pháp là:</p>

    <h4 class="mt-6 text-lg font-semibold">Trì danh niệm Phật:</h4>
    <p>Tức chấp trì danh hiệu Phật A Di Đà bởi意 (ý thức), nên làm cho ý thức không phân tán, dần dần đạt được nhất niệm. Phương pháp này giúp chúng ta gom nhiều niệm (đa niệm) về một niệm (nhất niệm), làm cho ý chỉ duyên vào danh hiệu A Di Đà Phật, mà không suy nghĩ miên man. Phương pháp này chỉ có tác dụng là an lập ý của Nhị thừa.</p>

    <h4 class="mt-6 text-lg font-semibold">Quán tượng niệm Phật:</h4>
    <p>Tức dùng ý thức và đôi mắt chiêm ngưỡng hình tượng Đức Phật A Di Đà (do nghệ nhân tưởng tượng vẽ ra), không cho ý thức phân tán nên dần dần cũng đạt được nhất niệm. Phương pháp này cũng giống như phương pháp thôi miên của thế gian, nhờ chăm chăm nhìn vào một điểm cố định nên ý không phân tán. Phương pháp quán tượng này cũng chỉ tác dụng là an lập ý.</p>

    <h4 class="mt-6 text-lg font-semibold">Quán tưởng niệm Phật:</h4>
    <p>Tức dùng trí tưởng tượng hình bóng Đức Phật A Di Đà (được nghệ nhân vẽ ra) làm hiện hữu hình bóng ấy trong vọng tâm của chúng ta, làm cho ý không phân tán, nên dần dần cũng được nhất niệm. Phương pháp này cũng chỉ tác dụng là an lập ý.</p>
    <p>Chúng ta cần chú ý là, pháp gì có đối tượng thì còn bị thức dính vào; tức còn sở tướng là còn hư vọng, nên còn bị dòng năng lực Saṃsāra chi phối, để hình thành ba loại hạt giống: Thiện – ác và vô ký hay rơi vào hôn trầm (4 cú: có, không, cũng có cũng không, không có không không). Trên lộ trình chín cảnh giới định (cửu định) của Đức Phật Thích-ca, Ngài liên tục từ bỏ những gì có sở chứng, từ Sơ thiền cho đến Phi phi tưởng xứ định. Đức Phật thấy rằng: Pháp gì được tác thành thì pháp ấy còn thức dính vào nên rơi vào hữu vi vô thường, nên Ngài mới đi vào Diệt thọ tưởng định, nơi mà các lậu hoặc sẽ hoàn toàn được đoạn trừ, các cảm thọ lạc, khổ, vô ký và các tưởng đi đến các cảm thọ lạc, khổ, vô ký sẽ hoàn toàn được tịnh chỉ.</p>

    <h4 class="mt-6 text-lg font-semibold">Thật tướng niệm Phật:</h4>
    <p>Tức niệm Phật tam-muội hay chính là niệm tự tánh Di Đà mà kinh A Di Đà này chỉ dạy. Tự tánh vốn tự thanh tịnh, nên niệm A Di Đà là niệm vô sở niệm (tâm vô sở trụ). Bởi niệm vô niệm, nên các Tổ xưa chuyển từ niệm danh tự A Di Đà Phật sang niệm tự tánh bằng cách đảo ngược lại: “Ai niệm A Di Đà Phật?”. Vì vậy cho nên kinh nói “pháp khó tin”; vì không có sở niệm, nên cũng gọi là “pháp không pháp”. Theo lý Thật tướng thì niệm Pháp thân Phật, nên gọi là “Pháp giới tạng thân A Di Đà Phật”. Pháp thân thanh tịnh như hư không, biến khắp pháp giới, thật không có tướng có thể được, không có tướng tâm năng niệm, tướng Phật sở niệm, năng sở đều quên, tâm - Phật không hai, đạt thành nhất tâm bất loạn, trạm nhiên thường trụ.</p>

    <p>Vì vậy cho nên, nói đem nghiệp mà vãng sanh là một sự hiểu lầm tai hại. Bởi chân tâm vốn lìa khỏi sanh diệt; nó vốn vô thủy vô chung nên nói vô lượng thọ, vô lượng quang. Đem nghiệp thuộc sanh diệt vào cảnh giới bất sanh bất diệt, thì không thể được. Trợ niệm vãng sanh cũng là một sự sai lầm khác, cũng không kém phần tai hại, tức phá bỏ luật nhân quả mà Đức Thế Tôn đã chỉ dạy. Không ai làm cho tâm mình thanh tịnh ngoài mình. Nếu có tha lực như vậy, thì chính Đức Phật Thích-ca Mâu-ni đã làm cho tâm chúng sanh thanh tịnh hết rồi; còn đâu luân hồi nữa? Nhưng không, Đức Phật xác quyết rằng, Ngài chỉ là người dạy đạo mà thôi. Còn ai ăn thì nấy no, ai uống thì nấy hết khát. Đức Phật không thể tu thay cho thị giả A-nan được, nên khi Ngài thị hiện tịch diệt thì thầy A-nan vẫn chưa chứng được đạo. Không tu chờ gần chết, nhờ người khác đến trợ niệm danh tự “Nam-mô A Di Đà Phật” để được vãng sanh, tức là phá bỏ luật nhân quả mà Phật Thích-ca đã dạy. Vả lại, đem thức tác thêm vọng mà lại gọi vãng sanh là một sự ngớ ngẩn. Người theo Phật có chánh kiến thì phải cẩn thận! (3)</p>

    <p>Như vậy, đề kinh cũng nói lên thật tướng niệm Phật để đạt đến cảnh giới chân tâm, nguồn an lạc tuyệt đối (cực lạc) mà Đức Phật Thích-ca đã chứng đắc.</p>

    </div>

    <div class="mt-10 mb-6">
      <h3 id="ghi-chu" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Ghi chú:</h3>
      <div class="space-y-4 text-[0.95em]">
      <p>Tự tánh Di Đà, duy tâm Tịnh độ.</p>
      <p>Nhược đắc Tịnh độ, đương tịnh kỳ tâm. Tùy kỳ tâm tịnh, tắc Phật độ tịnh (Kinh Duy-ma-cật).</p>
      <p>Chính vì những ngộ nhận này, đã tạo duyên làm cho ngoại đạo đồng hóa Đức Phật A Di Đà với Thượng Đế, vô lượng quang với ánh sáng vĩnh hằng của Thượng Đế, Tịnh độ với Thiên quốc (Heaven), gia hộ hay tiếp dẫn với cứu rỗi (Bless); nhằm dụ dỗ những tín đồ Phật giáo thiếu chánh kiến nghe theo, rồi cải đạo.</p>
      </div>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo giải thích trong văn bản, từ 'Kinh' (Sūtra) mang ý nghĩa cốt lõi nào sau đây đối với người tu tập?",
    options: {
      a: 'Là những câu chuyện lịch sử về cuộc đời Đức Phật được ghi chép lại để thờ phụng.',
      b: 'Là những mật mã tâm linh chỉ dành riêng cho những bậc Thánh đã đắc đạo.',
      c: 'Là tập hợp các quy tắc đạo đức bắt buộc mọi Phật tử phải tuân theo một cách máy móc.',
      d: 'Là phương tiện giúp quán chiếu thân tâm và ngoại tại để chuyển hóa nghiệp ác thành thiện.',
    },
    answer: 'd',
  },
  {
    question: "Hệ kinh điển 'Bất liễu nghĩa' được hiểu là gì và có vai trò như thế nào?",
    options: {
      a: 'Là hệ kinh chỉ tập trung vào việc mô tả các cảnh giới cực lạc ở phương Tây.',
      b: 'Là kinh điển mang tính khế cơ, giúp hình thành phàm tuệ để chuyển hóa thân tâm và cuộc sống chung.',
      c: 'Là những bản kinh không còn giá trị sử dụng trong thời hiện đại do tính chất lỗi thời.',
      d: 'Là hệ kinh điển cao nhất, giúp hành giả trực nhập vào bản giác sẵn có ngay lập tức.',
    },
    answer: 'b',
  },
  {
    question: "Tại sao danh hiệu A Di Đà lại được giải thích là 'Vô Lượng Thọ' và 'Vô Lượng Quang'?",
    options: {
      a: 'Để mô tả sự giàu sang và quyền lực tuyệt đối của một vị giáo chủ ở cõi Tịnh độ.',
      b: 'Vì đó là những lời chúc tụng mà các nghệ nhân xưa kia dùng để ca ngợi Đức Phật.',
      c: 'Vì Đức Phật A Di Đà có tuổi thọ dài lâu và hào quang sáng rực rỡ hơn các vị Phật khác.',
      d: 'Để chỉ cho tự tánh Di Đà siêu việt thời gian (thọ) và không gian (quang) có sẵn trong mỗi người.',
    },
    answer: 'd',
  },
  {
    question: "Vì sao phương pháp 'Thật tướng niệm Phật' lại được gọi là 'pháp khó tin' (nan tín chi pháp)?",
    options: {
      a: 'Vì hiện nay không còn ai có thể hướng dẫn đúng phương pháp này nữa.',
      b: 'Vì phương pháp này chỉ dành cho những người có trí thông minh tuyệt đỉnh mới hiểu nổi.',
      c: 'Vì hành giả phải thực hiện những nghi lễ khổ hạnh cực kỳ khó khăn mới có kết quả.',
      d: 'Vì nó yêu cầu niệm ngay nơi tự tánh, không có đối tượng của thức, trái với thói quen tìm cầu bên ngoài.',
    },
    answer: 'd',
  },
  {
    question: "Quan điểm của tác giả về việc 'đem nghiệp vãng sanh' hoặc 'trợ niệm vãng sanh' là gì?",
    options: {
      a: 'Là sự bổ sung hoàn hảo cho luật nhân quả bằng lòng từ bi của Đức Phật.',
      b: 'Là một truyền thống tốt đẹp cần được duy trì để thể hiện lòng hiếu thảo.',
      c: 'Đó là sự sai lầm vì không ai có thể làm cho tâm mình thanh tịnh thay cho chính mình.',
      d: 'Là những phương tiện thiện xảo cần thiết để giúp người già và người bệnh an tâm.',
    },
    answer: 'c',
  },
  {
    question: "Trạng thái 'Tùy kỳ tâm tịnh, tắc Phật độ tịnh' trong Kinh Duy-ma-cật được nhắc đến nhằm khẳng định điều gì?",
    options: {
      a: 'Đức Phật sẽ thanh lọc tâm cho chúng ta nếu chúng ta cầu nguyện thành tâm.',
      b: 'Tịnh độ là một hành tinh xa xôi chỉ xuất hiện khi chúng ta nhắm mắt.',
      c: 'Cõi Tịnh độ chỉ dành cho những người đã chết sạch hết mọi nghiệp chướng.',
      d: 'Muốn đạt được cõi tịnh thì cốt lõi phải là thanh tịnh chính tâm mình.',
    },
    answer: 'd',
  },
  {
    question: "Hành động 'đảo ngược' câu niệm của các Tổ xưa sang 'Ai niệm A Di Đà Phật?' nhằm mục đích gì?",
    options: {
      a: 'Để thay đổi không khí tu tập cho bớt nhàm chán.',
      b: 'Để chuyển từ niệm danh tự sang niệm tự tánh bằng cách truy tìm chủ thể năng niệm.',
      c: 'Để giúp người tu tập dễ nhớ danh hiệu Phật hơn.',
      d: 'Để chứng tỏ rằng trí tuệ của các vị Tổ cao hơn người bình thường.',
    },
    answer: 'b',
  },
  {
    question: "Văn bản cảnh báo về sự ngộ nhận nào có thể khiến tín đồ Phật giáo bị 'ngoại đạo' dụ dỗ cải đạo?",
    options: {
      a: 'Ngộ nhận rằng Phật giáo không có các nghi lễ cúng bái linh đình.',
      b: 'Đồng hóa Đức Phật A Di Đà với Thượng Đế và Tịnh độ với Thiên quốc (Heaven).',
      c: 'Nghi ngờ về sự tồn tại của Đức Phật Thích-ca Mâu-ni trong lịch sử.',
      d: 'Tin rằng tất cả các tôn giáo đều dạy con người làm điều thiện như nhau.',
    },
    answer: 'b',
  },
]

const lesson: Lesson = {
  id: 'lesson-luoc-giai-kinh-a-di-da-bai-2-1-giai-thich-tieu-de-kinh',
  slug: 'bai-2-1-giai-thich-tieu-de-kinh',
  title: 'Giải thích tiêu đề kinh',
  type: 'article',
  status: 'published',
  order: 2,
  coverImage: materialUrl('2.1-giai-thich-tieu-de-kinh'),
  createdAt: '2026-10-04',
  updatedAt: '2026-10-04',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.1-giai-thich-tieu-de-kinh/Ph%C6%B0%C6%A1ng_ti%E1%BB%87n_%C4%91%E1%BA%BFn_Th%E1%BA%ADt_t%C6%B0%E1%BB%9Bng.png',
      readingContent,
      tableOfContents: [
        { id: 'giai-thich-tieu-de-kinh', label: '2.1. Giải thích tiêu đề kinh' },
        { id: 'chanh-van', label: 'Chánh văn:', indent: 1 },
        { id: 'giai-thich-tu-ngu', label: 'Giải thích từ ngữ:', indent: 1 },
        { id: 'giai-thich-de-kinh', label: 'Giải thích đề kinh:', indent: 1 },
        { id: 'ghi-chu', label: 'Ghi chú:', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.1-giai-thich-tieu-de-kinh/The_Self_Nature_Amitabha.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/OKO4QERtt2Y',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1H3GAZJMVI30Gpye26465R?si=tFQMnlswQ7OLjVbGSjvZpQ',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Giải thích tiêu đề kinh',
    passPercentage: 70,
    questions,
  },
}

export default lesson
