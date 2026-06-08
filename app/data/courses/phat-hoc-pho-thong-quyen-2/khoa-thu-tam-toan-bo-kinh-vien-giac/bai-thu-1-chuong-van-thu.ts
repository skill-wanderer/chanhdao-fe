import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-van-thu" class="text-2xl font-bold text-primary-700 dark:text-primary-300">I. CHƯƠNG VĂN-THÙ</h2>

    <h3 id="ngai-van-thu-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Văn Thù hỏi Phật</h3>
    <p>Khi ấy Ngài Văn-thù Sư-lợi Bồ-tát ở trong đại-chúng đứng dậy, đi quanh bên hữu của Phật ba vòng, rồi chắp tay đảnh-lễ và quỳ thẳng bạch rằng:</p>
    <p>"Bạch đức Đại-bi Thế-Tôn, xin Ngài vì thính-chúng trong pháp-hội hiện-tại nầy và các chúng-sanh cầu Đại-thừa đời sau, từ bi chỉ dạy:</p>
    <p>Nói lại nhơn-địa tu-hành thanh-tịnh của Như-Lai;</p>
    <p>Các vị Bồ-tát đối với Đại-thừa, đã phát tâm thanh-tịnh (Bồ-đề) rồi, làm sao xa lìa được các bịnh (trừ-vọng); khiến cho các chúng-sanh khỏi đọa vào đường tà (tà-kiến)."</p>
    <p>Ngài Văn-thù Bồ-tát thưa thỉnh như vậy ba lần, kính lạy rồi trở lui, cùng với đại chúng ngồi yên-lặng, để chờ nghe lời Phật chỉ giáo.</p>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại-ý đoạn này là Ngài Văn-Thù hỏi Phật hai điều:</p>
    <p>Phật đã tu-hành như thế nào mà được thành Phật?</p>
    <p>Các vị Bồ-tát, khi đã phát-tâm Bồ-đề rồi, làm sao cho các vọng đừng sanh?</p>
    <p>Câu hỏi thứ nhất giống như câu hỏi trong kinh Lăng-Nghiêm, Ngài A-Nan hỏi Phật: “...Xin Phật chỉ dạy cho con phương-pháp nào mà tất cả các Đức Phật tu-hành đều được thành đạo chứng quả...”.</p>
    <p>Câu hỏi thứ hai, giống như câu hỏi trong kinh Kim-Cang, Ngài Tu-Bồ-Đề hỏi Phật: “... Làm sao an-trụ Chơn-tâm và làm sao hàng-phục được Vọng-tâm...” (Vân hà ưng trụ, vân hà hàng-phục kỳ tâm).</p>

    <h3 id="phat-khen-ngai-van-thu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Văn Thù</h3>
    <p>Khi ấy đức Thế-Tôn kêu Ngài Văn-Thù Sư-Lợi Bồ-tát mà dạy rằng:</p>
    <p>Này Thiện-nam, quý lắm! Ông vì các vị Bồ-tát hiện tại và tất cả chúng sanh đời sau cầu pháp Đại-thừa mà thưa hỏi:</p>
    <p>Nhơn-địa tu-hành của Như-Lai;</p>
    <p>Khi đã phát tâm thanh tịnh rồi, làm sao xa lìa các bịnh, để khỏi đọa vào tà-kiến. Vậy ông hãy chăm chú nghe, tôi sẽ vì các ông chỉ giáo.</p>
    <p>Khi đó Ngài Văn-Thù Sư-Lợi Bồ-tát và đại chúng đều hoan hỷ, vừa kính cẩn và vừa chăm chú chờ nghe lời Phật dạy bảo.</p>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật trước khen ngợi, rồi sau dặn dò phải chăm chú nghe, là vì “Viên-giác” là cảnh giới thanh tịnh, phải định tâm chú thần mà nghe, không thể dùng tâm sanh diệt, ý nghĩ xằng xiên mà nghe hiểu được.</p>

    <h3 id="phat-tra-loi-cho-ngai-van-thu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật trả lời cho Ngài Văn Thù</h3>
    <p>Này thiện nam, Như Lai có pháp “Đại Đà-la-ni”(1) tên là “Viên Giác”. Từ tánh “Viên-Giác” này mà sanh ra tất cả các pháp thanh tịnh: Chơn như, Bồ-đề (Trí-giác), Niết-bàn (viên-tịch) và Ba-la-mật (Đáo-Bỉ-Ngạn), nay ta sẽ dạy trao cho các ông.</p>
    <p>Này Văn Thù, nhơn địa tu hành của các Đức Phật, đều y “Viên Giác” này mà vĩnh viễn đoạn trừ vô minh, được sáng suốt thanh tịnh viên mãn, nên mới được thành Phật. Vậy “Vô minh” là gì?</p>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ngài Văn Thù hỏi nguyên nhơn tu hành của các Đức Phật thế nào? - Đến đây Phật mới trả lời: Tất cả chư Phật đều y “Viên Giác” để chiếu phá vô minh và được thành Phật. Nào là: Chơn như, Bồ-đề, Niết-bàn và Bát-nhã Ba-la-mật-đa v.v... cũng đều từ “Viên Giác” này mà lưu xuất.</p>
    <p>Vậy muốn ngộ được “Viên Giác” trước phải hiểu rõ. Vô minh và diệt trừ vô minh là điều cần nhứt.</p>

    <h3 id="phat-chi-vo-minh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Phật chỉ “Vô minh”</h3>
    <p>Này Thiện nam, tất cả chúng sanh từ hồi nào đến giờ, bị nhiều món điên đảo làm mê mờ tánh “Viên Giác”, như người lạc đường, lầm lộn bốn phương. Điên đảo vọng hiện ra thân và tâm, rồi lầm nhận thân tứ đại giả hợp nầy làm thân mình, chấp cái vọng niệm sanh diệt duyên theo bóng dáng của sáu trần cho là thật tâm mình. Như người nhặm con mắt, thấy trong hư không có các hoa đốm, hoặc mặt trăng thứ hai. Thật ra trong hư không chẳng có hoa đốm hay mặt trăng thứ hai, nhưng vì người nhặm con mắt vọng chấp. Bởi vọng-chấp, nên chẳng những không biết được hư không, mà lại thêm mê lầm: Chấp thật có hoa đốm sanh. Vì mê lầm mà có sanh tử luân hồi, nên gọi là “Vô minh”.</p>
    <p>(1) Đà la ni: Hán dịch là Tổng trì, nghĩa là: tóm giữ không mất. Đây là nói tánh “Viên Giác” tóm chứa hằng sa các công đức, giữ gìn không mất.</p>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này Phật chỉ rõ cái “Vô minh”. Vô minh là những cái vọng tưởng điên đảo che mờ tánh “Viên-Giác” (bản tâm thanh tịnh).</p>
    <p>Bởi Vô-minh vọng hiện ra có thân có cảnh rồi chúng-sanh trở lại chấp thật-ngã thật-pháp, tạo ra vô số nghiệp, mê mờ chồng chập, che đậy tánh Viên Giác! Vì thế mà nhiều kiếp sanh tử luân hồi, trầm luân trong biển khổ.</p>
    <p>Cũng như người bị buồn ngủ (dụ cho Vô minh) nổi lên, làm cho mê mờ tánh tỉnh táo (dụ cho Viên Giác); nhơn đó hiện ra cảnh chiêm bao đủ cả người và vật (hiện thế giới và chúng sanh), rồi cũng khóc cũng cười, cũng mừng cũng giận, mỗi mỗi đều cho là thiệt cả, nên luyến ái triền miên, từ giấc chiêm bao này tiếp tục qua giấc chiêm bao khác, không biết chừng nào thức tỉnh.</p>
    <p>Đây là dụ cho Vô minh chồng chập che mờ tánh “Viên Giác” (Chơn tâm).</p>

    <h3 id="phat-day-vo-minh-khong-co-that-the" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Phật dạy “Vô minh” không có thật thể</h3>
    <p>Này Thiện nam! Cái “Vô-minh” này không có thật thể (thật vật). Như người ngủ chiêm bao, thấy các cảnh vật, đến khi thức rồi, thì cảnh vật kia không còn; và như người hết nhặm, thì các hoa đốm trong hư không tự tiêu diệt. Lúc bấy giờ không thể nói “thật có chỗ hoa diệt”, vì không thật có chỗ hoa sanh vậy.</p>
    <p>Tất cả chúng sanh ở trong cái “không sanh diệt” (tánh Viên Giác) mà vọng thấy có sanh diệt, cho nên mới bị trầm luân trong biển sanh tử luân hồi.</p>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này Phật dạy: Tất cả chúng sanh vẫn ở trong bản tánh Viên Giác thanh tịnh không sanh không diệt, mà tự mình mê mờ (Vô minh) vọng thấy có sanh diệt, nên vĩnh kiếp triền miên, luống chịu trôi lăn trong biển sanh tử luân hồi, thật đáng thương!</p>
    <p>Nhưng “Vô-minh” là hư vọng, không có thật thể, cho nên khi giác ngộ rồi, thì nó tự hết. Cũng như cái “Tối”, vì nó không có thật thể, nên khi “Sáng” đến, thì “Tối” tự mất. Nếu Vô minh là vật có thật, như núi, như sông v.v... thì không dễ gì làm tiêu nó được.</p>
    <p>Phật lại tỷ dụ: Vô minh như chiêm bao, không phải thật vật, nên khi thức rồi thì cảnh chiêm bao tự mất. – Vô minh như mắt người bị nhặm, thấy hoa đốm lăng xăng giữa hư không, khi hết nhặm rồi thì hoa đốm liền tiêu.</p>

    <h3 id="phat-day-tu-theo-vien-giac" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Phật dạy tu theo “Viên giác”</h3>
    <p>Này Thiện nam, nhơn địa tu hành của Như Lai là tu theo Viên Giác. Nghĩa là: biết các pháp đều hư huyễn, như hoa đốm giữa hư không, chẳng có người chịu sanh tử luân hồi.</p>
    <p>Không phải phá hoại, làm cho các pháp mất đi mà kêu là không, chính bản tính của các pháp nó tự không. Cái “biết (năng biết) các pháp không” đó, cũng như hư không. “Cái biết như hư không”, cũng không luôn. Nhưng không thể nói: “không có cái biết”. Phải dứt trừ hết cả “có” và “không”, như thế mới gọi là “tùy thuận tánh Viên Giác” (tu Viên Giác).</p>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này Phật dạy tu theo “Viên-Giác”, có 5 từng bực:</p>
    <p>Từng bực thứ nhất, là quán các pháp đều hư-huyễn, như hoa đốm giữa hư-không, nên không sanh tâm tham, sân, si. Ba độc không sanh, thì ba nghiệp thân, khẩu, ý chẳng tạo nghiệp. Vì không tạo nghiệp, nên không có cảnh luân-hồi và người bị luân-hồi.</p>
    <p>Trên nói “cảnh bị biết” không, nói đến từng thứ hai là “cái tâm hay biết” cũng như hư-không.</p>
    <p>Đến từng thứ ba, là cái biết “cái tâm hay biết cũng như hư không” cũng không luôn.</p>
    <p>Sợ người lầm chấp cảnh giới này không có cái biết, nên đến từng thứ tư, Phật dạy tiếp: “không phải là không có cái biết”.</p>
    <p>Đến từng thứ miên (năm), Phật dạy phải rời các vọng-chấp “có” và “không”, mới nhập được tánh viên-giác.</p>

    <h3 id="phat-va-bo-tat-deu-tu-theo-vien-giac" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Phật và Bồ Tát đều tu theo “Viên Giác”</h3>
    <p>Tại sao thế? Vì trong Như Lai Tạng (Viên Giác) không có sanh diệt, không có thấy biết, như hư không thường còn, chẳng lay động, như tánh của pháp giới viên mãn khắp giáp cả mười phương.</p>
    <p>Đây gọi là chỗ nhơn địa tu hành của Như Lai, các vị Bồ-tát cũng nhơn nơi đây mà phát tâm thanh tịnh tu theo Đại thừa. Chúng sanh đời sau cũng phải y theo đây tu hành, mới khỏi đọa vào tà kiến.</p>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Như-Lai-Tạng là tánh Như-Lai hàm chứa tất cả các pháp; cũng gọi là “Viên-Giác”, cũng kêu là “Pháp giới tánh” (bản tánh của các pháp). Nó viên mãn khắp giáp cả mười phương, không có sanh diệt và cũng không tri kiến, như hư không thường còn chẳng lay động.</p>
    <p>Phật dạy: Đây là chỗ tu hành của Như Lai. Các vị Bồ-tát cũng nhơn nơi đây phát tâm thanh tịnh tu Đại thừa. Chúng sanh đời sau cũng phải y nơi đây tu hành mới khỏi lạc vào tà đạo.</p>
    <p>Ngài Văn-Thù hỏi 2 câu:</p>
    <p>Nhơn địa tu hành của Như Lai.</p>
    <p>Các vị Bồ-tát phát tâm Bồ-đề tu theo Đại-thừa, làm sao phá trừ được các vọng? Đến đây Phật đã dạy xong.</p>

    <h3 id="phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">8. Phật nói bài kệ tóm lại các nghĩa trên</h3>
    <p>Khi đó Đức Thế Tôn, muốn tóm lại các nghĩa trên, mà nói bài kệ rằng:</p>
    <div class="space-y-1 italic">
      <p>Văn Thù! Ông phải biết:</p>
      <p>Chỗ chơn địa tu hành</p>
      <p>Của các đức Như Lai</p>
      <p>Là dùng trí Viên Giác</p>
      <p>Phá trừ hết Vô minh:</p>
      <p>Biết các pháp hư huyễn</p>
      <p>Thì khỏi bị luân hồi.</p>
      <p>Cũng như người chiêm bao,</p>
      <p>Thức rồi cảnh mộng hết.</p>
      <p>Cái biết cũng không còn</p>
      <p>Sáng suốt khắp mười phương (Viên Giác),</p>
      <p>Bình đẳng không chuyển động,</p>
      <p>Tức thì thành Phật đạo.</p>
      <p>Các huyễn diệt hết rồi,</p>
      <p>Thành đạo cũng không thành:</p>
      <p>Xưa nay tánh viên mãn.</p>
      <p>Bồ-tát y nơi đây,</p>
      <p>Phát tâm đại Bồ-đề,</p>
      <p>Các chúng sanh đời sau,</p>
      <p>Tu đây mới khỏi đọa.</p>
    </div>
    <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại ý bài kệ này: Các Đức Phật dùng trí Viên Giác phá trừ Vô minh. Nghĩa là: biết muôn vật đều hư huyễn, như hoa đốm giữa hư không, không sanh tâm nhiễm trước, nên khỏi bị luân hồi.</p>
    <p>Người được giác ngộ rồi cũng như người thức giấc chiêm bao: các cảnh vật đều không còn - Cảnh “bị biết” đã không, nên “cái biết” (năng biết) cũng không. Vì năng và sở đều không nên tánh Viên Giác mới hiện ra sáng-suốt chiếu khắp cả mười phương, bình đẳng không chuyển động, như thể là “thành Phật”.</p>
    <p>Nói “thành Phật” là tạm nói mà thôi, thật ra cũng không “thành”. Vì tánh “Viên Giác” của mỗi người đều sẵn có, chỉ trừ hết “Vô-minh” rồi thì “Viên Giác” tự hiện ra, chớ có gì đâu mà gọi là “thành”.</p>
    <p>Cũng như người có sẵn hòn ngọc trong túi, chẳng qua vì quên, nên in như mất. Đến khi nhớ lại thì ngọc vẫn ở sẵn trong túi áo, chớ đâu phải mới “đặng”. Bởi thế nên nói “thành đạo cũng không thành”.</p>
    <p>Phật y theo Viên Giác này mà tu, Bồ-tát cũng y theo Viên Giác này mà phát tâm Bồ-đề, cho đến chúng sanh đời sau cũng phải y theo Viên Giác này tu hành mới khỏi lạc vào tà đạo.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Trong chương Văn Thù, Ngài Văn Thù Bồ-tát đã hỏi Đức Phật về điều gì đầu tiên?",
    "options": {
      "a": "Cách xây dựng đạo tràng cho các chúng sanh đời sau.",
      "b": "Các phương pháp trì chú và tụng kinh của chư Phật.",
      "c": "Nhơn địa tu hành thanh tịnh của Như Lai.",
      "d": "Các vị thần linh nào hộ trì cho người tu Đại thừa."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Chi tiết này không nằm trong câu hỏi của Ngài Văn Thù.",
      "b": "Sai. Các phương pháp trì chú và tụng kinh không được đề cập.",
      "c": "Đúng. Ngài Văn Thù thỉnh cầu Đức Phật: 'Nói lại nhơn-địa tu-hành thanh-tịnh của Như-Lai' [1].",
      "d": "Sai. Việc các vị thần linh hộ trì không phải là nội dung Ngài Văn Thù hỏi."
    }
  },
  {
    "question": "Đức Phật gọi tên pháp 'Đại Đà-la-ni' mà từ đó sanh ra tất cả các pháp thanh tịnh là gì?",
    "options": {
      "a": "Bát-nhã",
      "b": "Niết-bàn",
      "c": "Viên Giác",
      "d": "Chơn như"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Bát-nhã (Ba-la-mật) là pháp được sanh ra từ Viên Giác, không phải là tên pháp Đại Đà-la-ni [2].",
      "b": "Sai. Niết-bàn cũng là pháp sanh ra từ Viên Giác [2].",
      "c": "Đúng. Đức Phật nói Như Lai có pháp 'Đại Đà-la-ni' tên là 'Viên Giác' [2].",
      "d": "Sai. Chơn như là pháp thanh tịnh được sanh ra từ Viên Giác [2]."
    }
  },
  {
    "question": "Theo lời Phật dạy, 'Vô minh' thực chất là gì?",
    "options": {
      "a": "Sự thiếu kiến thức về các giáo lý và kinh điển Phật giáo.",
      "b": "Sự điên đảo mê mờ, lầm nhận thân tứ đại và vọng niệm là mình.",
      "c": "Những ác nghiệp mà chúng sanh đã tạo ra từ nhiều đời.",
      "d": "Một thế lực ma vương che mắt người tu hành."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Vô minh trong kinh Viên Giác không được định nghĩa là việc thiếu kiến thức giáo lý.",
      "b": "Đúng. Vô minh là sự điên đảo, 'lầm nhận thân tứ đại giả hợp nầy làm thân mình, chấp cái vọng niệm sanh diệt duyên theo bóng dáng của sáu trần cho là thật tâm mình' [2].",
      "c": "Sai. Ác nghiệp là kết quả của vô minh, không phải bản chất cốt lõi của vô minh theo đoạn kinh này.",
      "d": "Sai. Vô minh sinh ra từ sự lầm chấp của tự tâm, không phải là một thế lực ma vương."
    }
  },
  {
    "question": "Đức Phật dùng ví dụ nào để minh họa cho việc 'Vô minh' không có thật thể?",
    "options": {
      "a": "Như hạt giống nảy mầm thành cây.",
      "b": "Như bóng gương và trăng dưới nước.",
      "c": "Như nước biến thành băng.",
      "d": "Như người ngủ chiêm bao và người bị nhặm mắt thấy hoa đốm."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Không có ví dụ này trong đoạn kinh.",
      "b": "Sai. Dù là hình ảnh quen thuộc trong đạo Phật nhưng không xuất hiện trong đoạn này.",
      "c": "Sai. Ví dụ này không có trong văn bản.",
      "d": "Đúng. Đức Phật lấy ví dụ 'như người ngủ chiêm bao' khi thức thì cảnh mộng hết, và 'như người hết nhặm' thì hoa đốm tự tiêu diệt để chỉ Vô minh không có thật thể [3]."
    }
  },
  {
    "question": "Trong các tầng bực tu hành theo Viên Giác, 'Cái biết như hư không' cần phải được xử lý như thế nào ở bước tiếp theo?",
    "options": {
      "a": "Phải dùng cái biết đó để soi sáng cho người khác.",
      "b": "Phải gìn giữ cái biết đó mãi mãi không để mất.",
      "c": "Cái biết đó cũng phải được buông bỏ (không luôn).",
      "d": "Phải biến cái biết đó thành vật chất hữu hình."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Tầng bực tu hành không dạy phải giữ lấy để soi sáng người khác ở bước này.",
      "b": "Sai. Nếu giữ lại sẽ tạo thành sự bám víu và sở chấp mới.",
      "c": "Đúng. Ở từng bực tiếp theo, Đức Phật chỉ dạy 'Cái biết như hư không, cũng không luôn' [3].",
      "d": "Sai. Không thể biến cái biết thành vật chất hữu hình."
    }
  },
  {
    "question": "Tại sao nói khi thành đạo thực ra lại là 'không thành'?",
    "options": {
      "a": "Vì con đường tu hành là vô tận, không bao giờ có điểm dừng.",
      "b": "Vì tánh Viên Giác vốn đã sẵn có ở mỗi người, không phải mới đắc được từ bên ngoài.",
      "c": "Vì sau khi thành đạo, Phật sẽ nhập Niết-bàn và biến mất.",
      "d": "Vì quả vị Phật là một sự hư huyễn, không có thật."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Đây không phải lý do giải thích cho việc 'không thành'.",
      "b": "Đúng. Tánh Viên Giác vốn sẵn có, giống như hòn ngọc trong túi áo, khi nhớ lại thì ngọc vốn sẵn ở đó chứ không phải mới đặng, nên nói 'thành đạo cũng không thành' [4].",
      "c": "Sai. Không liên quan đến việc nhập Niết-bàn.",
      "d": "Sai. Quả vị Phật không bị gọi là hư huyễn trong kinh này."
    }
  },
  {
    "question": "Theo văn bản, Như-Lai-Tạng (Viên Giác) có đặc điểm nào sau đây?",
    "options": {
      "a": "Chỉ xuất hiện sau khi chúng sanh qua đời.",
      "b": "Luôn luôn biến đổi theo nghiệp lực của chúng sanh.",
      "c": "Không có sanh diệt, không có thấy biết, như hư không thường còn.",
      "d": "Là một nơi chốn cụ thể ở phương Tây."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Tánh Viên Giác luôn hiện hữu sẵn có ngay hiện tại.",
      "b": "Sai. Tánh Viên Giác không biến đổi hay lay động theo nghiệp lực [4].",
      "c": "Đúng. Trong Như Lai Tạng không có sanh diệt, không có thấy biết, như hư không thường còn, chẳng lay động [4].",
      "d": "Sai. Nó viên mãn khắp mười phương, không bị giới hạn ở một địa điểm cụ thể [4]."
    }
  },
  {
    "question": "Mục đích chính của việc hiểu rằng các pháp là 'hư huyễn' trong tu hành Viên Giác là gì?",
    "options": {
      "a": "Để có thể sử dụng các thần thông biến hóa.",
      "b": "Để không còn quan tâm đến cuộc sống và gia đình.",
      "c": "Để chứng minh rằng thế giới này không tồn tại.",
      "d": "Để không sanh tâm tham, sân, si và không tạo nghiệp luân hồi."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Thần thông biến hóa không phải là mục đích được nhắc đến.",
      "b": "Sai. Đây là cái nhìn yếm thế sai lệch với tinh thần tu tập của Đại thừa.",
      "c": "Sai. Mục đích tu tập không thuần túy chỉ để chứng minh lý thuyết.",
      "d": "Đúng. Việc quán các pháp đều hư huyễn giúp hành giả không sanh tâm tham, sân, si, từ đó ba nghiệp không tạo ác nghiệp và dứt được sự luân hồi [3]."
    }
  },
  {
    "question": "Trong bài kệ tóm tắt, Đức Phật dạy rằng sau khi các 'huyễn' đã diệt hết thì điều gì sẽ xảy ra?",
    "options": {
      "a": "Sẽ có một thế giới mới được tạo ra.",
      "b": "Chư Thiên sẽ xuống rước hành giả về trời.",
      "c": "Tánh sáng suốt hiện ra khắp mười phương, bình đẳng không chuyển động.",
      "d": "Hành giả sẽ rơi vào trạng thái trống rỗng hoàn toàn không biết gì."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Quá trình tu hành không nhằm tạo ra thế giới mới.",
      "b": "Sai. Sự kiện này không có trong bài kệ tóm tắt.",
      "c": "Đúng. Khi năng và sở đều không, thì tánh Viên Giác hiện ra 'Sáng suốt khắp mười phương / Bình đẳng không chuyển động' [4].",
      "d": "Sai. Trạng thái này là sự chiếu rọi sáng suốt chứ không phải trống rỗng vô minh."
    }
  },
  {
    "question": "Tại sao Phật khuyên chúng sanh đời sau phải y theo giáo pháp này mà tu hành?",
    "options": {
      "a": "Để có thể tranh luận thắng các tôn giáo khác.",
      "b": "Để trở thành những vị thần có quyền năng tối thượng.",
      "c": "Để khỏi đọa vào tà kiến và các đường tà.",
      "d": "Để được giàu sang và sống lâu trong đời sau."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đạo Phật không chủ trương tu hành để tranh thắng luận lý.",
      "b": "Sai. Đạt quyền năng thần thánh không phải là mục đích của sự giác ngộ.",
      "c": "Đúng. Đức Phật dạy chúng sanh đời sau phải y theo Viên Giác tu hành để 'khỏi đọa vào đường tà (tà-kiến)' [1, 4].",
      "d": "Sai. Phước báo nhân thiên hữu lậu không phải là cứu cánh của pháp Đại thừa Viên Giác."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-1-chuong-van-thu',
  slug: 'bai-thu-1-chuong-van-thu',
  title: 'Bài Thứ 1 - Chương Văn Thù',
  type: 'article',
  status: 'published',
  order: 4,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-08',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-1-chuong-van-thu/H%C3%A0nh_Tr%C3%ACnh_T%E1%BB%AB_M%C3%AA_Sang_Ng%E1%BB%99.png',
      readingContent,
      tableOfContents: [
        {
          id: 'chuong-van-thu',
          label: 'I. CHƯƠNG VĂN-THÙ',
        },
        {
          id: 'ngai-van-thu-hoi-phat',
          label: '1. Ngài Văn Thù hỏi Phật',
          indent: 1,
        },
        {
          id: 'phat-khen-ngai-van-thu',
          label: '2. Phật khen Ngài Văn Thù',
          indent: 1,
        },
        {
          id: 'phat-tra-loi-cho-ngai-van-thu',
          label: '3. Phật trả lời cho Ngài Văn Thù',
          indent: 1,
        },
        {
          id: 'phat-chi-vo-minh',
          label: '4. Phật chỉ “Vô minh”',
          indent: 1,
        },
        {
          id: 'phat-day-vo-minh-khong-co-that-the',
          label: '5. Phật dạy “Vô minh” không có thật thể',
          indent: 1,
        },
        {
          id: 'phat-day-tu-theo-vien-giac',
          label: '6. Phật dạy tu theo “Viên giác”',
          indent: 1,
        },
        {
          id: 'phat-va-bo-tat-deu-tu-theo-vien-giac',
          label: '7. Phật và Bồ Tát đều tu theo “Viên Giác”',
          indent: 1,
        },
        {
          id: 'phat-noi-bai-ke-tom-lai-cac-nghia-tren',
          label: '8. Phật nói bài kệ tóm lại các nghĩa trên',
          indent: 1,
        },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-1-chuong-van-thu/Awakening_to_Perfect_Enlightenment.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/e5qayccy7P0',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6YGflK6uHbQyMFk2ceiP7P?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Văn Thù',
    passPercentage: 70,
    questions,
  },
}

export default lesson
