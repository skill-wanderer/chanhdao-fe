import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-di-lac-bo-tat" class="text-2xl font-bold text-primary-700 dark:text-primary-300">V. CHƯƠNG DI LẶC BỒ TÁT</h2>

    <p>Chương này nối tiếp mạch lý của chương Kim Cang Tạng: đã biết gốc luân hồi là ái dục, thì bước kế tiếp là phải thấy rõ chúng sanh luân hồi như thế nào, Bồ tát khác chúng sanh ở chỗ nào, và người tu Bồ đề phải nương thiện tri thức ra sao để đi vào Viên Giác.</p>
    <p>Điểm nổi bật của chương Di Lặc là phân biệt thật rạch ròi giữa <strong>chúng sanh do ái dục</strong> và <strong>Bồ tát do đại bi</strong>. Một bên bị nghiệp lôi kéo, một bên lấy nguyện lực mà nhập thế; một bên ở trong vòng luân hồi, một bên đi vào đời để cứu đời.</p>

    <h3 id="ngai-di-lac-bo-tat-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Di Lặc Bồ tát hỏi Phật</h3>
    <p>Ngài Di Lặc Bồ tát ở trong đại chúng, đi quanh bên hữu của Phật ba vòng, chắp tay đảnh lễ rồi quỳ thẳng mà thưa rằng: Như Lai đã mở kho báu bí mật của Viên Giác, khiến đại chúng hiện tại và chúng sanh đời sau được con mắt đạo sáng suốt. Vậy các vị Bồ tát và chúng sanh đời sau phải làm sao đoạn được gốc rễ luân hồi để vào biển Đại Tịch diệt của Như Lai?</p>
    <p>Ngài còn hỏi thêm: có mấy loại chúng sanh luân hồi, có mấy hạng người tu theo đạo Bồ đề của Phật, và khi Bồ tát nhập thế độ sanh thì phải dùng phương tiện gì để giáo hóa chúng sanh. Đây đều là những câu hỏi rất thực tế, nhắm thẳng vào con đường tu và con đường độ sanh.</p>
    <p>Nhìn rộng ra, Di Lặc là vị Bổ xứ ở Đâu Suất, từng hiện thân Bố Đại Hòa thượng để lẫn trong đời mà độ sanh, và trong tương lai sẽ hạ sinh ở Long Hoa. Cho nên câu hỏi của Ngài vừa mang chiều sâu của đại Bồ tát, vừa rất gần với kinh nghiệm nhập thế cứu độ.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chỗ hỏi trọng tâm là: đã nghe nói Viên Giác rồi thì phải bước tiếp như thế nào để vào Đại Niết bàn. Ngài Di Lặc hỏi thay cho người học đạo đời sau, để đường tu không bị mơ hồ.</p>

    <h3 id="phat-khen-ngai-di-lac-bo-tat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Di Lặc Bồ tát</h3>
    <p>Đức Thế Tôn khen câu hỏi ấy rất quý, vì nhờ câu hỏi này mà các Bồ tát hiện tại mở sáng con mắt trí huệ, còn chúng sanh đời sau thì biết đường ra khỏi sanh tử luân hồi và sanh lòng tin chắc với cảnh Đại Niết bàn. Phật dặn đại chúng phải chăm chú lắng nghe, vì cảnh giới Viên Giác không thể đo bằng tâm tán loạn hay lối suy nghĩ phân biệt thông thường.</p>
    <p>Vì vậy, sự tán dương của Phật không phải là lời khen xã giao. Đó là một cách xác nhận rằng câu hỏi này chạm đúng gốc rễ của vấn đề: nếu chưa tháo được cái gốc luân hồi thì mọi bàn luận về giải thoát đều chỉ mới ở trên mặt lý thuyết.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Thật tướng</strong> là tướng chơn thật, không bị thời gian và không gian làm đổi khác.</li>
      <li><strong>Vô sanh nhẫn</strong> là an trụ nơi chỗ ngã và pháp không còn sanh khởi, tức an trụ nơi chơn tâm.</li>
    </ul>

    <h3 id="phat-day-ai-va-duc-la-goc-re-cua-sanh-tu-luan-hoi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật dạy: Ái và Dục là gốc rễ của sanh tử luân hồi</h3>
    <p>Phật chỉ thẳng: tất cả chúng sanh từ vô thỉ đến nay đều do món ân ái và tham dục mà trôi lăn trong sanh tử. Gốc của luân hồi không nằm ở nghề nghiệp hay sinh kế, mà nằm ở tâm ái luyến đối với dục trần. Có dục thì sanh ái, có ái thì nối dài sanh tử, nên vòng xoay ấy không dứt.</p>
    <p>Đức Phật nêu bốn loài sanh: noãn sanh, thai sanh, thấp sanh và hóa sanh. Dù ở loài nào, một khi còn nuôi ái dục thì vẫn còn nối tiếp sanh tử, chưa thể ra khỏi luân hồi.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Noãn sanh: như chim, cá.</li>
      <li>Thai sanh: như người và thú.</li>
      <li>Thấp sanh: như lăng quăng, vi trùng.</li>
      <li>Hóa sanh: như côn trùng biến hóa, địa ngục, ngạ quỷ, chư thiên.</li>
    </ul>
    <p>Muốn ra khỏi vòng này, trước hết phải cắt tham dục và tâm ái luyến.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ái và dục giống như mối dây kéo dài: cảnh trần bên ngoài khêu gợi, tâm liền luyến ái; luyến ái thì sanh tham dục; tham dục tạo nghiệp; nghiệp dẫn quả; rồi lại sanh tử tiếp nối không dứt.</p>

    <h3 id="phat-tra-loi-cau-hoi-co-may-loai-chung-sanh-luan-hoi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Phật trả lời câu hỏi: “Có mấy loại chúng sanh luân hồi?”</h3>
    <p>Phật trả lời rằng chúng sanh luân hồi có ba loại lớn. Người gặp nghịch cảnh mà sanh giận ghét, tạo nghiệp ác thì đọa vào địa ngục, ngạ quỷ và súc sanh. Người nhàm chán cảnh dục, ưa tạo nghiệp lành thì sanh về người, trời Dục giới và cả A Tu La. Người chán trần lao của cõi dục nhưng lại ưa thiền định ở cõi Sắc giới và Vô sắc giới thì sanh vào những cõi hữu vi ấy.</p>
    <p>Ba loại này tuy cao thấp khác nhau, nhưng vẫn chưa ra khỏi luân hồi, vì trong đó vẫn còn ái nhiễm. Nghiệp có thể thô hay tế, nhưng nếu còn tham ái thì vẫn chưa thành Thánh đạo.</p>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Ác nghiệp</strong>: địa ngục, ngạ quỷ, súc sanh.</li>
      <li><strong>Thiện nghiệp hữu lậu</strong>: người, trời Dục giới, và cả A Tu La.</li>
      <li><strong>Bất động nghiệp</strong>: Sắc giới và Vô sắc giới do thiền định mà có.</li>
    </ul>
    <p>Vì vậy, muốn thoát sanh tử thì lời Phật dạy rất gọn: phải đoạn ân ái và tham dục.</p>

    <h3 id="bo-tat-hien-than-khong-phai-do-ai-duc-ma-do-long-dai-bi-va-nguyen-luc" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Bồ tát hiện thân, không phải do Ái dục, mà do lòng Đại bi và Nguyện lực</h3>
    <p>Bồ tát hiện thân trong thế gian không phải vì ái dục nhiễm ô như chúng sanh. Gốc của sự thị hiện là lòng từ bi và đại nguyện cứu thế, nên các Ngài có thể hiện thân trong gia đình, trong chợ búa, trong mọi hoàn cảnh, mà vẫn không bị nhiễm bởi cảnh.</p>
    <p>Ngài dùng thân tham dục để bước vào sanh tử, nhưng mục đích là hóa độ, làm cho chúng sanh biết buông ái dục. Đây là chỗ khác nhau căn bản giữa Bồ tát và chúng sanh: một bên bị nghiệp kéo đi, một bên dùng đại bi mà nhập thế.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đừng hiểu lầm rằng Bồ tát cũng giống người thường có ái dục. Thân hiện ra chỉ là phương tiện, còn nội tâm của Bồ tát là đại bi thanh tịnh và nguyện lực.</p>

    <h3 id="phat-noi-co-nam-chung-tanh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Phật nói: có năm chủng tánh</h3>
    <p>Nếu muốn vào cảnh giới Viên Giác, hành giả trước hết phải bỏ tham dục, trừ tâm thương ghét, và lần lượt đoạn hai món chướng: <strong>lý chướng</strong> và <strong>sự chướng</strong>. Lý chướng là chướng ngại chánh tri kiến, cũng gọi là Sở tri chướng, do chấp pháp mà sanh. Sự chướng là chướng ngại tiếp nối sanh tử, cũng gọi là Phiền não chướng, do chấp ngã mà sanh.</p>
    <p>Từ hai chướng cạn sâu ấy mà Phật phân ra năm chủng tánh:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Thinh văn chủng tánh</strong>: đoạn sự chướng, còn lý chướng.</li>
      <li><strong>Duyên giác chủng tánh</strong>: cũng đoạn sự chướng, nhưng tu theo thập nhị nhân duyên.</li>
      <li><strong>Bồ tát chủng tánh</strong>: hai chướng đã phục, tiếp tục đoạn đến chỗ viên mãn Bồ đề và Niết bàn.</li>
      <li><strong>Bất định chủng tánh</strong>: tùy gặp thiện tri thức Đại thừa hay Tiểu thừa mà thành tựu khác nhau.</li>
      <li><strong>Ngoại đạo chủng tánh</strong>: gặp tà sư nên khởi tà kiến, đoạn mất chánh kiến.</li>
    </ul>
    <p>Như vậy, năm chủng tánh không phải là năm loài cố định, mà là năm cách thành tựu hay lệch lạc tùy độ sâu của chướng và duyên gặp được.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Điểm mấu chốt là: người tu chưa đoạn được hai chướng thì vẫn còn ở trong hàng chúng sanh. Khi hai chướng mới phục, mới vào hàng Bồ tát; đến khi hai chướng sạch hẳn thì vào quả Phật.</p>

    <h3 id="bo-tat-thi-hien-cac-hinh-tuong-va-canh-thuan-nghich-de-nhap-the-do-sanh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Bồ tát thị hiện các hình tướng và cảnh thuận nghịch để nhập thế độ sanh</h3>
    <p>Bồ tát nhập thế độ sanh là do bản nguyện từ vô thủy và lòng đại bi thanh tịnh thúc đẩy. Vì vậy, các Ngài có thể hiện thuận hoặc nghịch, có lúc giảng dạy pháp lành, có lúc dùng cảnh khó khăn để đánh thức người mê, và có khi đồng sự nhiếp, cùng làm việc đời để lần hồi dẫn dắt chúng sanh quay về Chánh đạo.</p>
    <p>Nhìn vào những hóa thân như Quan Âm hiện 32 ứng thân, Di Lặc hiện Bố Đại Hòa thượng, hay các vị hiện thân Kim Cang, Tiêu Diện, Ngưu đầu, Mã diện..., ta thấy rõ một điều: bên ngoài có thể khác nhau, nhưng động lực bên trong chỉ là một là lợi sanh.</p>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Khẩu giáo hóa</strong>: dùng lời nói mà khuyên dạy.</li>
      <li><strong>Thân giáo hóa</strong>: hiện thân mà hóa độ.</li>
      <li><strong>Đồng sự nhiếp</strong>: cùng sống, cùng làm, cùng vào cảnh với chúng sanh để dìu dắt họ.</li>
    </ul>
    <p>Bồ tát không vào đời vì danh lợi, mà vì đại bi cứu độ. Đó là chỗ khác hẳn với chúng sanh bị nghiệp lực lôi cuốn.</p>

    <h3 id="chi-nguyen-thanh-phat-khong-o-nhi-thua-va-cho-gap-ngoai-dao-ta-su" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">8. Chỉ nguyện thành Phật, không ở Nhị thừa và chớ gặp ngoại đạo tà sư</h3>
    <p>Người phát tâm cầu nhập Viên Giác phải lập đại nguyện rất rõ: nguyện gặp Thiện tri thức dạy tu hành, chớ gặp tà sư ngoại đạo và Nhị thừa. Rồi y theo bản nguyện mà lần hồi dứt trừ các chướng. Khi các chướng hết, nguyện viên mãn, thì tự nhiên vào thành lớn Viên Giác, lên cung điện giải thoát thanh tịnh của Như Lai.</p>
    <p>Chỗ này nhắc chúng ta rằng lý tuy đốn ngộ, nhưng sự thì phải tiệm trừ. Biết đường rồi vẫn còn phải bước từng bước; gặp đúng minh sư rồi vẫn còn phải giữ nguyện và công phu, để từng lớp chướng được tháo dần.</p>

    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại nguyện là chiếc la bàn của người tu. Không có nguyện, ta rất dễ nghiêng về tà sư, tiểu thừa, hoặc chấp riêng cho mình một con đường tu ích kỷ mà quên lợi sanh.</p>

    <h3 id="phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">9. Phật nói bài kệ tóm lại các nghĩa trên</h3>
    <p>Đức Thế Tôn dùng bài kệ để gom lại toàn bộ ý chính của chương: chúng sanh do tham dục nên sanh tử, Bồ tát do đại bi nên vào đời độ sanh, còn người tu hiện tại và chúng sanh đời sau muốn vào Viên Giác thì phải đoạn ái hoặc, giữ chánh nguyện, và nương minh sư mà đi.</p>
    <div class="space-y-1 italic">
      <p>Di Lặc! Ông nên biết:</p>
      <p>Tất cả các chúng sanh</p>
      <p>Đều do tham dục vậy,</p>
      <p>Nên đọa vào sanh tử</p>
      <p>Chẳng đặng đại giải thoát.</p>
      <p>Nếu người đoạn thương ghét,</p>
      <p>Cùng với tham, sân, si.</p>
      <p>Không cần tu gì khác,</p>
      <p>Cũng đều được thành Phật.</p>
      <p>Cầu nguyện gặp Minh sư,</p>
      <p>Khai ngộ được chơn chánh,</p>
      <p>Y theo nguyện Bồ tát,</p>
      <p>Trừ tuyệt hai món chướng,</p>
      <p>Được vào đại Niết bàn.</p>
      <p>Các Bồ tát mười phương,</p>
      <p>Đều bởi lòng Đại bi,</p>
      <p>Phát nguyện vào sanh tử,</p>
      <p>Tùy loại độ chúng sanh.</p>
      <p>Người tu hành hiện tại</p>
      <p>Và chúng sanh đời sau,</p>
      <p>Phải đoạn trừ ái hoặc,</p>
      <p>Mới đặng vào Viên Giác.</p>
    </div>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bài kệ chốt lại hai điều: chúng sanh do tham dục nên sanh tử, Bồ tát do đại bi nên vào đời độ sanh. Người tu muốn vào Viên Giác thì phải đoạn ái dục, giữ chánh nguyện và nương minh sư để tháo dần hai chướng.</p>
    <p>Những lời nguyện như của Địa Tạng Bồ tát hay Tổ A Nan đều cùng một tinh thần ấy: không cầu an ổn riêng mình, mà nguyện vào nơi khó vào để độ tận người chưa độ.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo lời Phật dạy trong chương Di Lặc Bồ tát, gốc rễ sâu xa của sanh tử luân hồi là gì?",
    "options": {
      "a": "Sự giận dữ và oán thù",
      "b": "Sự ngu si và tà kiến",
      "c": "Ân ái và tham dục",
      "d": "Nghề nghiệp và sinh kế"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Bản kinh không chỉ ra đây là gốc rễ sâu xa nhất của sanh tử luân hồi.",
      "b": "Sai. Dù vô minh là gốc chung, nhưng đoạn kinh này đặc biệt nhấn mạnh yếu tố khác.",
      "c": "Đúng. Tài liệu ghi rõ: \"Tất cả chúng sanh từ vô thỉ đến giờ, đều do món 'ân ái và tham dục' cho nên mới bị sanh tử luân hồi\" [1].",
      "d": "Sai. Nghề nghiệp không phải là gốc rễ của luân hồi."
    }
  },
  {
    "question": "Hình tượng Ngài Bố Đại Hòa thượng (một hóa thân của đức Di Lặc) với sáu em bé leo trèo xung quanh tượng trưng cho điều gì?",
    "options": {
      "a": "Lục độ muôn hạnh",
      "b": "Hàng phục được lục tặc",
      "c": "Sự yêu thương trẻ nhỏ",
      "d": "Sáu cõi luân hồi"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Sáu trẻ em không tượng trưng cho lục độ (sáu pháp ba-la-mật).",
      "b": "Đúng. Chung quanh có sáu em bé đang leo trèo lên mình Ngài, là tượng trưng cho lục tặc (sáu giặc) khi đã bị Ngài hàng phục [2].",
      "c": "Sai. Dù Ngài có lòng từ bi yêu thương trẻ nhỏ, nhưng đây không phải là ý nghĩa biểu tượng cốt lõi.",
      "d": "Sai. Không tượng trưng cho lục đạo luân hồi."
    }
  },
  {
    "question": "Trong khái niệm về 'Nhị chướng', 'Lý chướng' được văn bản định nghĩa như thế nào?",
    "options": {
      "a": "Làm chướng ngại chánh tri kiến",
      "b": "Làm tiếp nối các sanh tử",
      "c": "Làm chướng ngại việc hành thiện",
      "d": "Làm phát sinh lòng tham dục"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Lý chướng, do chấp pháp mà sanh, làm chướng ngại chánh tri kiến của Phật [3].",
      "b": "Sai. Đây là định nghĩa của Sự chướng [3].",
      "c": "Sai. Không được văn bản định nghĩa như vậy.",
      "d": "Sai. Tham dục liên quan nhiều hơn đến Sự chướng/Phiền não chướng [3]."
    }
  },
  {
    "question": "Điểm khác biệt chính giữa Bồ tát và chúng sanh khi hiện thân trong cõi sanh tử là gì?",
    "options": {
      "a": "Bồ tát chỉ hiện thân ở cõi Trời",
      "b": "Bồ tát hiện thân để hưởng thọ phước báo",
      "c": "Bồ tát không có thân xác vật lý",
      "d": "Bồ tát hiện thân do lòng đại bi và nguyện lực"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Bồ tát có thể hiện thân ở mọi cõi để hóa độ [4].",
      "b": "Sai. Bồ tát hiện thân không phải vì hưởng thọ [4].",
      "c": "Sai. Bồ tát vẫn hiện thân hình tướng, thậm chí thân tham dục [1].",
      "d": "Đúng. Bồ tát hóa hiện thân hình gốc do lòng Từ bi và đại nguyện cứu thế, không phải vì ái dục nhiễm ô như chúng sanh [1]."
    }
  },
  {
    "question": "Hàng 'Nhị thừa' (Thinh văn và Duyên giác) được phân loại dựa trên đặc điểm đoạn trừ chướng ngại nào?",
    "options": {
      "a": "Chưa đoạn được cả Sự chướng lẫn Lý chướng",
      "b": "Đoạn được Lý chướng nhưng còn Sự chướng",
      "c": "Đoạn được cả Sự chướng và Lý chướng",
      "d": "Đoạn được Sự chướng nhưng chưa đoạn được Lý chướng"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Đây là đặc điểm của phàm phu (chúng sanh) [3].",
      "b": "Sai. Nhị thừa không đoạn Lý chướng trước [5].",
      "c": "Sai. Đây là cảnh giới của Bồ Tát hoặc Phật [5].",
      "d": "Đúng. Hạng này đoạn tuyệt tham dục, trừ được ngã chấp tức sự chướng, nhưng pháp chấp tức lý chướng chưa đoạn [5]."
    }
  },
  {
    "question": "Theo văn bản, 'Bất định chủng tánh' là hạng chúng sanh có đặc điểm gì?",
    "options": {
      "a": "Không bao giờ có khả năng chứng ngộ Viên giác",
      "b": "Chỉ có thể tu tập theo pháp môn Tứ đế",
      "c": "Thành tựu tùy thuộc vào việc gặp được vị Thiện tri thức nào",
      "d": "Luôn luôn đi theo con đường ngoại đạo"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Họ vẫn có khả năng chứng ngộ Viên giác [5].",
      "b": "Sai. Không chỉ giới hạn ở môn Tứ đế [5].",
      "c": "Đúng. Căn tánh không nhất định, gặp thiện tri thức Đại thừa thì thành Đại thừa, gặp Tiểu thừa thì thành Tiểu thừa [5].",
      "d": "Sai. Việc theo ngoại đạo phụ thuộc vào duyên, không phải \"luôn luôn\" [5, 6]."
    }
  },
  {
    "question": "Tại sao hạng 'Ngoại đạo chủng tánh' lại không đạt được chánh ngộ dù vẫn có tâm tầm cầu tu hành?",
    "options": {
      "a": "Do họ không có lòng đại từ đại bi",
      "b": "Do gặp phải tà sư chỉ dạy đường lối không chơn chánh",
      "c": "Do họ quá tham lam tài vật thế gian",
      "d": "Do họ không chịu thực hành thiền định"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Văn bản không đề cập đến nguyên nhân này.",
      "b": "Đúng. Đi tầm thiện tri thức nhưng lại gặp ngoại đạo tà sư dạy bảo, sanh ra tà kiến, hiểu ngộ không chơn chánh [6].",
      "c": "Sai. Không được kinh nhắc đến trong định nghĩa này.",
      "d": "Sai. Ngoại đạo vẫn có thể có thiền định nhưng là tà thiền."
    }
  },
  {
    "question": "Bồ tát Di Lặc sẽ thành Phật vào thời điểm nào trong tương lai theo kinh điển được trích dẫn?",
    "options": {
      "a": "Sau khi Ngài tu xong pháp Tứ Thiền tại cõi Sắc giới",
      "b": "Trong kiếp tăng thứ 10, khi loài người thọ tám vạn tuổi",
      "c": "Ngay sau khi Phật Thích Ca nhập diệt 100 năm",
      "d": "Khi nhân loại chỉ còn thọ 10 tuổi"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Đây không phải điều kiện hay thời điểm được kinh nhắc tới.",
      "b": "Đúng. Đợi đến khi thế giới này hết kiếp giảm thứ 9, đến kiếp tăng thứ 10, trong lúc nhân loại hưởng thọ được trên tám vạn tuổi, Ngài mới giáng sanh [2, 7].",
      "c": "Sai. Thời gian lâu hơn rất nhiều so với 100 năm.",
      "d": "Sai. Đó là thời điểm cuối của kiếp giảm, không phải lúc Ngài giáng sanh."
    }
  },
  {
    "question": "Pháp tu 'Duy thức' mà Phật Thích Ca dạy cho Ngài Di Lặc giúp Ngài chứng ngộ điều gì?",
    "options": {
      "a": "Cuộc đời là bể khổ và cần thoát ly",
      "b": "Tam giới duy tâm, vạn pháp duy thức",
      "c": "Tất cả chúng sanh đều có Phật tánh",
      "d": "Sự tồn tại vĩnh cửu của cái tôi (Ngã)"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Đây là Khổ đế của Nhị thừa.",
      "b": "Đúng. Ngài quán thấy \"Tam giới duy tâm, vạn pháp duy thức\", mọi thứ đều như bóng trong gương do thức tâm biến hiện [8].",
      "c": "Sai. Mặc dù là giáo lý Đại thừa nhưng không phải trọng tâm trực tiếp của pháp Duy thức mà Ngài ngộ trong đoạn này.",
      "d": "Sai. Pháp tu Duy thức giúp phá bỏ tà kiến về Ngã, trừ tánh biến kế sở chấp [8]."
    }
  },
  {
    "question": "Trong bài kệ tóm tắt, Phật dạy rằng nếu người đoạn trừ được những gì thì không cần tu gì khác cũng thành Phật?",
    "options": {
      "a": "Gia đình và người thân",
      "b": "Tất cả các công việc thế gian",
      "c": "Thương ghét, tham, sân, si",
      "d": "Sách vở và kiến thức đa văn"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Kinh không dạy chối bỏ người thân một cách tiêu cực.",
      "b": "Sai. Bồ tát vẫn có thể đồng sự nhiếp với công việc thế gian [4].",
      "c": "Đúng. Bài kệ ghi rõ: \"Nếu người đoạn thương ghét, Cùng với tham, sân, si. Không cần tu gì khác, Cũng đều được thành Phật\" [9].",
      "d": "Sai. Không liên quan đến nội dung bài kệ."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-5-chuong-di-lac-bo-tat',
  slug: 'bai-thu-5-chuong-di-lac-bo-tat',
  title: 'Bài Thứ 5 - Chương Di Lặc Bồ Tát',
  type: 'article',
  status: 'published',
  order: 8,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-5-chuong-di-lac-bo-tat/Con_%C4%90%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1t_Vi%C3%AAn_Gi%C3%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-di-lac-bo-tat', label: 'V. CHƯƠNG DI LẶC BỒ TÁT' },
        { id: 'ngai-di-lac-bo-tat-hoi-phat', label: '1. Ngài Di Lặc Bồ tát hỏi Phật', indent: 1 },
        { id: 'phat-khen-ngai-di-lac-bo-tat', label: '2. Phật khen Ngài Di Lặc Bồ tát', indent: 1 },
        { id: 'phat-day-ai-va-duc-la-goc-re-cua-sanh-tu-luan-hoi', label: '3. Phật dạy: Ái và Dục là gốc rễ của sanh tử luân hồi', indent: 1 },
        { id: 'phat-tra-loi-cau-hoi-co-may-loai-chung-sanh-luan-hoi', label: '4. Phật trả lời câu hỏi: “Có mấy loại chúng sanh luân hồi?”', indent: 1 },
        { id: 'bo-tat-hien-than-khong-phai-do-ai-duc-ma-do-long-dai-bi-va-nguyen-luc', label: '5. Bồ tát hiện thân, không phải do Ái dục, mà do lòng Đại bi và Nguyện lực', indent: 1 },
        { id: 'phat-noi-co-nam-chung-tanh', label: '6. Phật nói: có năm chủng tánh', indent: 1 },
        { id: 'bo-tat-thi-hien-cac-hinh-tuong-va-canh-thuan-nghich-de-nhap-the-do-sanh', label: '7. Bồ tát thị hiện các hình tướng và cảnh thuận nghịch để nhập thế độ sanh', indent: 1 },
        { id: 'chi-nguyen-thanh-phat-khong-o-nhi-thua-va-cho-gap-ngoai-dao-ta-su', label: '8. Chỉ nguyện thành Phật, không ở Nhị thừa và chớ gặp ngoại đạo tà sư', indent: 1 },
        { id: 'phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: '9. Phật nói bài kệ tóm lại các nghĩa trên', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-5-chuong-di-lac-bo-tat/Di_L%E1%BA%B7c_Khai_S%C3%A1ng.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/YkgrFlQJvl8',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/70ZI9T6vOEqO66JqGjUeJH?utm_source=generator&si=ae2c58f6cde749c8',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Di Lặc Bồ Tát',
    passPercentage: 70,
    questions,
  },
}

export default lesson
