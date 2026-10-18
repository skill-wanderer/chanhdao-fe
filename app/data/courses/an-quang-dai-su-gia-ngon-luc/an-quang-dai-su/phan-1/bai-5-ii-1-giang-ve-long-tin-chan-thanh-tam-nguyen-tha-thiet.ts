import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/2.khuyen-tin-hanh-nguyen/1.giang-ve-long-tin'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">II. KHUYÊN TÍN HẠNH NGUYỆN NÊN CHÂN THÀNH , THA THIẾT</h2>
    <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300">1. Giảng về lòng tin chân thành, tâm nguyện tha thiết</h3>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Nói đến Tín là nói phải tin Sa Bà thật là khổ, Cực Lạc thật là vui. Sa Bà khổ vô lượng, vô biên. Nói chung, chẳng ngoài tám nỗi khổ, tức là: sanh, già, bệnh, chết, ân ái biệt ly, oán ghét nhưng vẫn phải gặp mặt, cầu chẳng được thỏa ý, năm ấm lừng lẫy. Tám nỗi khổ này dù người cả đời giàu sang tột bực hay kẻ nghèo đến nỗi phải ăn mày, ai nấy đều có. Bảy thứ đầu là quả báo do đời quá khứ cảm thành, cứ suy nghĩ kỹ ắt tự biết, chẳng cần phải nói rõ. Nói rõ sẽ phải tốn nhiều giấy mực.</p>
    <p>Nỗi khổ thứ tám (năm ấm lẫy lừng) là do hiện tại khởi tâm động niệm cũng như những hành động, nói năng. Ðây chính là nhân thọ khổ trong đời sau. Nhân quả vấn vít lôi kéo liên tục từ kiếp này sang kiếp khác chẳng thể giải thoát.</p>
    <p>Ngũ Ấm là Sắc, Thọ, Tưởng, Hành, Thức. Sắc chính là cái thân do nghiệp báo cảm thành. Thọ, Tưởng, Hành, Thức là những thứ do tâm huyễn vọng khởi lên khi tiếp xúc với cảnh. Do các pháp thân tâm huyễn vọng này bèn đối với sáu trần cảnh khởi Hoặc tạo nghiệp như lửa cháy hừng hực chẳng thể dập tắt, nên bảo là “xí thạnh” (lừng lẫy).</p>
    <p>Thêm nữa, Ấm có nghĩa là ngăn che. Do năm pháp này ngăn che nên chân tánh chẳng thể hiển hiện, như mây dầy che khuất mặt trời. Tuy vầng thái dương rực rỡ trọn chẳng bị tổn giảm, nhưng vì mây che lấp nên chẳng soi thấu được. Cũng giống như thế, phàm phu chưa đoạn Hoặc nghiệp bị năm pháp này che phủ, bầu trời chân tánh và vầng mặt trời trí huệ chẳng thể hiển hiện được. Ðấy là nỗi khổ thứ tám, chính là cội gốc của hết thảy các khổ.</p>
    <p>Người tu đạo sức Thiền Ðịnh sâu, đối với cảnh giới sáu trần trọn không chấp trước, chẳng khởi oán ghét. Từ đây lại gia công dụng hạnh, tiến lên chứng đắc Vô Sanh thì Hoặc nghiệp hết sạch, cắt đứt căn bản sanh tử. Nhưng công phu này thật chẳng dễ dàng gì, trong đời mạt thật khó có ai đạt được. Vì thế phải chuyên tu Tịnh nghiệp cầu sanh Cực Lạc, nương Phật từ lực vãng sanh Tây phương.</p>
    <p>Ðã được vãng sanh thì liên hoa hóa sanh, chẳng còn các nỗi khổ, thuần mang hình dáng bé trai, thọ ngang hư không, thân không tai biến. Những danh từ lão, khổ, bệnh v.v... còn chẳng nghe đến, huống là thật có! Kề cận thánh chúng, chầu hầu Di Ðà. Chim, nước, rừng cây đều diễn pháp âm. Tùy</p>
    <p>theo căn tánh nghe xong liền chứng, người thân còn chẳng thấy, huống là oán thù? Mong áo được áo, tưởng ăn liền ăn. Lầu các, đền đài đều do bảy báu tạo thành, chẳng nhọc sức người, chỉ là hóa hiện. Vậy thì bảy nỗi khổ cõi Sa Bà biến thành bảy điều vui.</p>
    <p>Nơi thân có đại thần thông, có đại oai lực, chẳng rời chỗ mình đang ở mà ngay trong một niệm ở khắp các thế giới của chư Phật trong mười phương, làm các Phật sự, thượng cầu, hạ hóa. Tâm có đại trí huệ, đại biện tài; nơi một pháp biết Thật Tướng của hết thảy pháp. Tùy cơ thuyết pháp chẳng hề lầm lạc. Tuy nói những lời thuộc về Thế Ðế nhưng đều khế hợp diệu lý Thật Tướng. Không có nỗi khổ Ngũ Ấm Xí Thạnh, hưởng niềm vui thân tâm tịch diệt. Bởi thế kinh dạy: “Không có các nỗi khổ, chỉ hưởng các sự vui, nên gọi là Cực Lạc”.</p>
    <p>Sa Bà khổ, khổ chẳng thể nói. Cực Lạc vui, vui chẳng gì ví nổi. Tin sâu lời Phật, trọn chẳng nghi hoặc mới gọi là Chân Tín. Ðừng nên dùng tri kiến ngoại đạo, phàm phu để so lường lầm lạc, cho rằng mọi thứ trang nghiêm thắng diệu chẳng thể nghĩ bàn của Tịnh Ðộ đều là chuyện ngụ ngôn, là thí dụ, là tâm pháp, chẳng phải cảnh thật. Nếu có các thứ tà kiến, hiểu biết sai lạc như vậy sẽ đánh mất điều lợi ích thực sự là được vãng sanh Tịnh Ðộ. Cái hại ấy rất lớn, chẳng thể chẳng biết.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Ðã biết Sa Bà là khổ, Cực Lạc là vui thì hãy nên phát thệ nguyện thiết thực, nguyện lìa khổ Sa Bà, nguyện hưởng vui Cực Lạc. Nguyện ấy phải tha thiết như bị rớt xuống hầm xí, cầu được thoát ra gấp. Lại như bị giam cầm trong ngục, đau đáu nghĩ đến quê nhà. Sức mình chẳng thể tự thoát, ắt phải cầu người có đại thế lực cứu cho thoát khỏi.</p>
    <p>Hết thảy chúng sanh trong thế giới Sa Bà đối với cảnh thuận - nghịch, khởi tham, sân, si, tạo giết, trộm, dâm, ô uế diệu giác minh tâm sẵn có. Ðấy chính là hầm xí không đáy. Ðã tạo nghiệp ác, ắt phải chịu ác báo, qua nhiều kiếp dài lâu luân hồi sáu nẻo. Ðấy chính là chốn lao ngục chẳng hề phóng thích tội nhân. A Di Ðà Phật trong nhiều kiếp quá khứ, phát bốn mươi tám nguyện độ thoát chúng sanh. Có một nguyện là: “Nếu có chúng sanh nghe danh hiệu ta, cầu sanh về nước ta, dẫu chỉ mười niệm mà nếu chẳng sanh, chẳng lấy Chánh Giác”. A Di Ðà Phật thệ nguyện độ sanh; nhưng nếu chúng sanh chẳng cầu tiếp dẫn, Phật cũng chẳng biết làm cách nào! Nếu như chí tâm xưng danh, thề cầu xuất ly Sa Bà thì không một ai chẳng được Phật rủ lòng từ nhiếp thọ. A Di Ðà Phật có đại thế lực, cứu được người đang ở trong hầm phân không đáy, trong lao ngục chẳng hề phóng thích, khiến họ thoát ngay những chốn ấy, đặt yên họ nơi quê nhà sẵn có là cõi Cực Lạc, khiến họ nhập cảnh giới Phật, được thọ dụng giống như Phật.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Phật Di Ðà vì chúng ta phát nguyện, lập hạnh để mong chúng ta thành Phật. Chúng ta bội nghịch hạnh nguyện của đức Di Ðà nên bao kiếp dài lâu ngụp lặn mãi trong lục đạo, vĩnh viễn làm chúng sanh. Hiểu rõ Di Ðà chính là đức Phật ở ngay trong tâm chúng ta, ta chính là chúng sanh trong tâm Phật Di Ðà. Tâm đã là một, nhưng phàm và thánh cách nhau một trời một vực là do ta cứ một bề mê muội, trái nghịch nên mới đến nỗi thế. Tín tâm như vậy mới đáng là Chân Tín. Dùng tín tâm này phát nguyện quyết định vãng sanh, hành hạnh quyết định niệm Phật mới hòng thâm nhập Tịnh tông pháp giới, thành tựu ngay trong một đời, một phen siêu thăng liền vào thẳng ngay địa vị Như Lai như mẹ con gặp gỡ, vui sướng vĩnh viễn thường hằng vậy!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Trong sự niệm Phật, điều trọng yếu nhất là để liễu sanh thoát tử. Ðã vì liễu sanh tử thì với nỗi khổ sanh tử, tự sanh tâm chán nhàm; với sự vui Tây phương, tự sanh tâm ưa thích. Như thế thì hai pháp Tín - Nguyện sẽ được đầy đủ, trọn vẹn ngay trong khoảnh khắc ấy. Rồi lại thêm chí thành, khẩn thiết như con nhớ mẹ mà niệm thì Phật lực, tự lực, tự tâm tín nguyện công đức lực, cả ba pháp cùng hiển hiện trọn vẹn, khác nào mặt trời rực rỡ trên không. Dù cho mây đùn, băng đóng tầng tầng, không lâu cũng sẽ tan hết cả.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Hãy thử hỏi: Ngoài tâm không Phật, ngoài Phật không tâm. Chẳng khẩn thiết thì có đạt được như thế chăng? Không Tín - Nguyện có đạt được như thế chăng?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Phàm là bọn hữu tình chúng ta hễ nghe nói đến pháp môn Tịnh Ðộ thì phải tin Sa Bà cực khổ, Tây Phương cực vui, phải tin rằng từ nhiều đời đến nay, nghiệp chướng sâu nặng, chẳng cậy vào Phật lực, khó thể xuất ly. Phải nên tin rằng cầu được vãng sanh thì ngay trong đời này sẽ được vãng sanh. Phải tin niệm Phật nhất định được Ngài từ bi nhiếp thọ. Dùng một lòng kiên định này, nguyện lìa Sa Bà như kẻ tù muốn thoát khỏi lao ngục, trọn chẳng có tâm lưu luyến. Nguyện sanh Tây Phương như lữ khách mong quay về cố hương, chẳng hề có ý niệm do dự. Từ đó, tùy phận, tùy lực, chí tâm trì niệm thánh hiệu A Di Ðà Phật, chẳng luận là nói năng, im lặng, động, tịnh, đi, đứng, nằm, ngồi, đón tiếp khách khứa, mặc áo, ăn cơm, giữ sao Phật hiệu chẳng lìa tâm, tâm chẳng lìa Phật.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Kinh A Di Ðà nói: “Từ đây đi qua Tây Phương khỏi mười vạn ức cõi có thế giới tên là Cực Lạc. Cõi ấy có Phật hiệu A Di Ðà, nay hiện đang thuyết pháp”. Kinh còn dạy: “Cõi ấy vì sao tên là Cực Lạc? Chúng sanh cõi ấy không có các điều khổ, chỉ hưởng những điều vui, nên gọi là Cực Lạc”. Không có các điều khổ, chỉ hưởng những điều vui là do được trang nghiêm bởi phước đức, trí huệ, thần thông đạo lực của A Di Ðà Phật. Thế giới chúng ta đang sống có đủ cả ba khổ, tám khổ, vô biên các nỗi khổ, hoàn toàn chẳng vui. Vì thế gọi là Sa Bà. Tiếng Phạn Sa Bà, Hán dịch là Kham Nhẫn, ý nói: chúng sanh trong thế giới này có thể kham chịu được các thứ khổ. Trong thế giới này chẳng phải là không có điều vui, nhưng những điều được coi là vui ấy lại đều là khổ. Chúng sanh mê muội lại coi đấy là vui, như mê rượu đắm sắc, săn bắn, bẫy rập, có gì là vui? Một lũ ngu phu đắm đuối chẳng bỏ được, thích đến quên mệt, thật đáng xót thương! Những điều dù thật sự là vui cũng khó lâu bền. Chẳng hạn như cha mẹ cùng còn sống, anh em không xảy ra chuyện gì; chuyện như vậy làm sao thường hằng được mãi? Vì thế cảnh vui vừa thoáng qua, tâm buồn liền tiếp theo ngay, nên bảo là “trọn chẳng có gì vui”, chẳng cần phải bàn nữa! Sự khổ trong thế giới chẳng thể nói hết, nhưng có thể dùng tam khổ, bát khổ để bao quát không sót.</p>
    <p>Ba khổ là:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>- Khổ Khổ.</li>
      <li>- Vui (lạc) là Hoại Khổ.</li>
      <li>- Chẳng khổ chẳng vui là Hành Khổ.</li>
    </ul>
    <p>1) Khổ Khổ là nói thân tâm ngũ ấm này thể tánh bức bách nên gọi là Khổ. Lại còn phải luôn chịu đựng các nỗi khổ: sanh, già, bệnh, chết v.v... nên gọi là Khổ Khổ.</p>
    <p>2) Hoại Khổ là bất cứ sự gì trong thế gian cũng chẳng được bền lâu. Mặt trời giữa Ngọ phải chếch về Tây. Trăng đầy rồi khuyết, đạo trời còn phải như thế, huống là việc người? Cảnh vui vừa chớm, cảnh khổ đã đến ngay. Nỗi khổ ấy chẳng diễn tả được nổi! Vì thế gọi Lạc là Hoại Khổ.</p>
    <p>3) Hành Khổ là tuy chẳng khổ, chẳng vui, tựa hồ phải chăng, nhưng tánh nó dời đổi, có gì là thường trụ? Vì thế gọi là Hành Khổ.</p>
    <p>Nêu lên ba thứ khổ ấy (Khổ Khổ, Hoại Khổ, Hành Khổ) thì không có nỗi khổ nào chẳng gộp trong ấy. Ý nghĩa tám khổ trong các sách đã thuật rõ. Nếu biết cõi này là là khổ thì tâm chán nhàm Sa Bà sẽ bừng bừng phát sanh. Nếu biết cõi kia là vui thì ý niệm ưa thích, mong cầu Cực Lạc sẽ hừng hực phát khởi. Do vậy, chẳng làm các điều ác, vâng làm các điều lành để bồi đắp nền tảng. Lại dùng tâm chí thành, khẩn thiết trì danh hiệu Phật, cầu sanh Tây Phương thì thoát được cõi Sa Bà này, sanh về cõi Cực Lạc kia, làm con đích thực của đấng Di Ðà, làm bạn hiền trong Hải Hội vậy!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Xem cõi Sa Bà này nhơ xấu còn hơn nhà xí. Tin cõi Cực Lạc kia chính là quê nhà mình vốn sẵn có. Chẳng cầu phước lạc cõi trời, cõi người trong đời này hay đời sau, chỉ nguyện khi báo chung mạng tận, được Phật tiếp dẫn vãng sanh. Sáng tối như thế, niệm đâu chú trọng đấy, niệm cực công thuần, cảm ứng đạo giao, lúc lâm chung, ắt được thỏa nguyện. Ðã sanh về Tịnh Ðộ sẽ đốn ngộ Vô Sanh, nhìn lại phú quý thế gian khác nào ánh dương diệm12 , hoa đốm trên không, thật đúng là nhà ngục, biển độc mà thôi!</p>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
    <h3 class="mt-10 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chú Thích:</h3>
    <p class="text-[0.95em]">12 . Dương diệm (mirage): ảo ảnh do sức nóng hay ánh nắng soi lên các lớp không khó lạnh và nóng khác nhau tạo thành.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = 
[
  {
    "question": "Vì sao nỗi khổ thứ tám 'Ngũ ấm xí thạnh' lại được coi là cội gốc của tất cả các nỗi khổ khác trong cõi Sa Bà?",
    "options": {
      "a": "Do Ngũ ấm chỉ xuất hiện khi phàm phu bước vào giai đoạn già yếu và bệnh tật trong đời sống.",
      "b": "Do đây là quả báo trực tiếp từ kiếp quá khứ mà phàm phu hoàn toàn thụ động gánh chịu, không thể tác động bằng tư tưởng hiện tại.",
      "c": "Do năm pháp Ngũ ấm ngăn che chân tánh và từ sự tiếp xúc trần cảnh làm khởi Hoặc tạo nghiệp, tích tụ nhân chịu khổ cho đời sau.",
      "d": "Do nỗi khổ này hoàn toàn do sự tác động bất ngờ của hoàn cảnh tự nhiên bên ngoài gây nên."
    },
    "answer": "c"
  },
  {
    "question": "Tên gọi 'Sa Bà' (dịch nghĩa là Kham Nhẫn) phản ánh thực trạng nào của chúng sanh trong thế giới này?",
    "options": {
      "a": "Chúng sanh có thể chịu đựng được vô vàn các thứ khổ đau, đồng thời mê muội coi những điều khổ huyễn vọng là niềm vui.",
      "b": "Cõi đời này có vô số niềm vui vĩnh cửu nhưng con người phải thật sự nhẫn nại mới trải nghiệm được.",
      "c": "Chúng sanh ở cõi này chỉ gánh chịu quả báo quá khứ mà hoàn toàn không thể tạo thêm nhân nghiệp mới.",
      "d": "Đây là cõi giới mà mọi người đều dễ dàng tự dứt sạch sinh tử bằng sức mạnh công phu cá nhân."
    },
    "answer": "a"
  },
  {
    "question": "Quan niệm nào sau đây bị coi là tà kiến sai lạc làm mất đi lợi ích vãng sanh Tịnh Độ của người tu hành?",
    "options": {
      "a": "Tin rằng việc xưng niệm danh hiệu Phật với tâm chí thành chắc chắn sẽ được Đức Phật Di Đà nhiếp thọ.",
      "b": "Cho rằng mọi sự trang nghiêm thắng diệu của Tịnh Độ chỉ là chuyện ngụ ngôn, thí dụ hoặc tâm pháp chứ không có cảnh thật.",
      "c": "Tin rằng phàm phu nghiệp chướng sâu nặng bắt buộc phải nhờ Phật lực mới thoát khỏi luân hồi lục đạo.",
      "d": "Tin tưởng chắc chắn rằng cõi Sa Bà thật sự khổ và cõi Cực Lạc thật sự có niềm vui tịch diệt."
    },
    "answer": "b"
  },
  {
    "question": "Mối quan hệ bản thể giữa Đức Phật A Di Đà và chúng sanh được giải thích như thế nào để khẳng định khả năng vãng sanh?",
    "options": {
      "a": "Tâm chúng sanh và tâm Phật hoàn toàn khác biệt về bản chất nên bắt buộc phải qua nhiều kiếp tu thiền mới đồng đẳng.",
      "b": "Đức Phật A Di Đà là vị Phật ở ngay trong tâm chúng sanh, và chúng sanh chính là chúng sanh trong tâm Đức Phật A Di Đà.",
      "c": "Đức Phật A Di Đà chỉ tiếp dẫn những chúng sanh nào đã hoàn toàn tiêu trừ hết nghiệp chướng trong quá khứ.",
      "d": "Đức Phật A Di Đà là một đấng sáng tạo hoàn toàn độc lập và không có liên hệ bản thể với tâm chúng sanh."
    },
    "answer": "b"
  },
  {
    "question": "Hình ảnh ẩn dụ 'dương diệm' (ảo ảnh do sức nóng không khí) trong văn bản được sử dụng để chỉ điều gì?",
    "options": {
      "a": "Sức mạnh thiền định sâu dày giúp dứt sạch Hoặc nghiệp của các bậc thánh nhân.",
      "b": "Ánh sáng rực rỡ phát ra từ đền đài lầu các do bảy báu tạo thành ở cõi Cực Lạc.",
      "c": "Sự huyễn vọng, không chân thật của vinh hoa phú quý thế gian khi nhìn dưới góc độ trí huệ Vô Sanh.",
      "d": "Sức nóng của ngọn lửa nghiệp hống đốt cháy chúng sanh nơi ba đường ác."
    },
    "answer": "c"
  },
  {
    "question": "Tại sao việc cầu chứng đắc Vô Sanh bằng tự lực Thiền Định lại được coi là cực kỳ khó khăn đối với người trong thời Mạt pháp?",
    "options": {
      "a": "Vì thiền định bắt buộc người tu phải trải qua tất cả các nỗi khổ của cõi Tịnh Độ.",
      "b": "Vì tu thiền định ngăn cản người tu phát tâm từ bi cứu độ chúng sanh.",
      "c": "Vì thiền định chỉ mang lại phước báu nhỏ hẹp ở cõi người chứ không thể phát sinh trí huệ.",
      "d": "Vì đòi hỏi công phu thiền định rất sâu để đoạn sạch Hoặc nghiệp đối với sáu trần, cắt đứt căn bản sinh tử."
    },
    "answer": "d"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-5-ii-1-giang-ve-long-tin-chan-thanh-tam-nguyen-tha-thiet',
  slug: 'bai-5-ii-1-giang-ve-long-tin-chan-thanh-tam-nguyen-tha-thiet',
  title: '1. Giảng về lòng tin chân thành, tâm nguyện tha thiết',
  type: 'article',
  status: 'published',
  order: 3,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Tín_Nguyện_Niệm_Phật_Vãng_Sinh.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Chân_Tín_và_Thiết_Nguyện.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/EkYZe0wVMps',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/26T8Rff2MLk0TT4Rr21Ka9?si=sTOv1ogJQ-Olufv6jI8g-A',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Giảng về lòng tin chân thành, tâm nguyện tha thiết',
    passPercentage: 70,
    questions,
  },
}

export default lesson
