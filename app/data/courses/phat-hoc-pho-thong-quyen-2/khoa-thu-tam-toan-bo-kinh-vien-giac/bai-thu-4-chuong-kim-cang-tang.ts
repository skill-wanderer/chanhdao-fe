import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-kim-cang-tang" class="text-2xl font-bold text-primary-700 dark:text-primary-300">IV. CHƯƠNG KIM CANG TẠNG</h2>

    <h3 id="ngai-kim-cang-tang-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Kim Cang Tạng Bồ Tát hỏi Phật</h3>
    <p>Khi ấy Ngài Kim Cang Tạng Bồ Tát ở trong đại chúng, đi quanh bên hữu của Phật ba vòng, đảnh lễ rồi quỳ thẳng bạch rằng: “Bạch Đức Đại Bi Thế Tôn, Ngài đã vì các vị Bồ Tát nói rõ tánh Viên Giác thanh tịnh của Như Lai, và chỉ dạy những phương tiện, tuần tự tu hành để nhập tánh Viên Giác. Ngài đã vén mở mây vô minh mờ ám cho các chúng sanh, khiến mắt trí huệ được sáng tỏ.”</p>
    <p>Nhưng con vẫn còn một nghi: nếu chúng sanh từ xưa đến nay vốn đã thành Phật, thì tại sao lại còn có vô minh để trở lại làm chúng sanh nữa? Nếu chúng sanh sẵn có vô minh, thì do nhân duyên gì mà Đức Như Lai lại nói “chúng sanh đã thành Phật từ xưa đến nay”? Cúi xin Đức Đại Bi Thế Tôn, vì hàng Bồ Tát hiện tại và tất cả chúng sanh đời sau, nhổ sạch gốc rễ nghi lầm này, để họ được ngộ nhập đạo vô thượng.</p>
    <h4 id="luoc-giai-ngai-kim-cang-tang-hoi-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đây là mấu chốt của toàn chương: đã có vô minh thì gọi là chúng sanh, hết vô minh thì gọi là Phật. Vì vậy, câu “chúng sanh đã thành Phật từ xưa” nghe như trái ngược với hiện tượng đang thấy.</p>
    <p>Ngài Kim Cang Tạng hỏi không phải để tranh luận, mà để tìm cho ra một lối vào. Nếu không tháo được nghi này, người học đạo rất khó tin sâu và càng khó thật tu.</p>

    <h3 id="phat-khen-ngai-kim-cang-tang" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Kim Cang Tạng Bồ Tát</h3>
    <p>Đức Thế Tôn khen câu hỏi ấy là rất quý, vì không chỉ lợi ích cho hàng Bồ Tát hiện tại mà còn cho chúng sanh đời sau. Ngài dặn đại chúng phải chăm chú lắng nghe, bởi cảnh giới Viên Giác thanh tịnh không thể đo bằng tâm tán loạn hay hiểu qua loa.</p>
    <p>Kim Cang là báu vật cứng bén nhất. Ngài Kim Cang Tạng biểu trưng cho trí tuệ có sức phá tan lớp mây vô minh rất sâu, nên mới dám nêu lên chỗ khó nhất của kinh.</p>
    <h4 id="luoc-giai-phat-khen-ngai-kim-cang-tang" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật trước khen rồi mới khai thị, để cho người nghe biết đây là pháp môn phải chuyên chú. Không thể dùng tấm lòng hời hợt mà đo lường Viên Giác.</p>
    <p>Ngài Kim Cang Tạng là vị đại Bồ Tát thượng thủ, nên câu hỏi của Ngài đại diện cho chỗ nghi căn bản của người học đạo: vì sao đã là Phật mà còn hiện như chúng sanh?</p>

    <h3 id="phat-day-nguoi-me-noi-ngo-ngo-ay-thanh-me" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật dạy: Người mê nói ngộ, Ngộ ấy thành mê</h3>
    <p>Phật dạy tất cả pháp có sinh diệt, trước sau, hợp tan, có mất... đều thuộc về vòng luân hồi. Nếu người đang ở trong luân hồi mà đem cái tâm luân hồi ấy đi bàn về Viên Giác, thì chính Viên Giác cũng bị kéo vào vòng đối đãi, thành thêm một khái niệm trong luân hồi.</p>
    <p>Ngược lại, nếu thật sự lìa khỏi luân hồi rồi, thì không còn thấy các việc hư vọng ấy nữa. Cho nên, cái “ngộ” mà còn nương trên vọng chấp thì vẫn chưa thật ngộ.</p>
    <h4 id="luoc-giai-phat-day-nguoi-me-noi-ngo-ngo-ay-thanh-me" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Người còn ở trong vòng mê mà nói chuyện ngộ, thì ngay cái ngộ ấy cũng bị nhuộm màu mê. Dùng vọng tâm để bàn về Phật đạo thì Phật đạo cũng bị biến thành một cảnh giới đối đãi.</p>
    <p>Muốn thật vào Viên Giác thì phải vượt khỏi tâm ưa ghét, hơn thua, còn mất. Chưa lìa đối đãi mà nói ngộ thì chỉ là thêm một lớp khái niệm nữa mà thôi.</p>

    <h3 id="phat-dung-thi-du-de-giai-thich-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Phật dùng thí dụ để giải thích nghĩa trên</h3>
    <p>Phật dùng những thí dụ rất gần gũi: mắt nháy nên thấy nước dợn sóng; mắt nhìn không kịp nên thấy thành vòng lửa; mây bay mà tưởng mặt trăng chạy; thuyền đi mà ngỡ bờ trôi. Tất cả đều do một niệm sai lệch mà cảnh tướng bị hiểu lầm.</p>
    <p>Cũng vậy, nếu dùng tâm chúng sanh đang dao động để nhìn tánh Viên Giác thanh tịnh, thì Viên Giác bị thấy thành động, thành nhiễm, thành có trước có sau. Chính cái tâm quan sát sai lầm đã làm ra mâu thuẫn.</p>
    <h4 id="luoc-giai-phat-dung-thi-du-de-giai-thich-nghia-tren" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Thấy nước dợn, vòng lửa, trăng chạy, bờ trôi đều là ví dụ cho vọng tâm. Viên Giác vốn tịch tĩnh; cái động nằm nơi tâm nhìn, không ở nơi tánh giác.</p>
    <p>Phật mượn những hiện tượng quen thuộc để chỉ ra: khi tâm bị động thì thấy cảnh cũng động; khi tâm còn nhiễm thì nhìn đâu cũng nhiễm.</p>

    <h3 id="phat-day-cac-phap-hu-huyen-khong-co-that-sanh-va-that-diet" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Phật dạy: các Pháp hư huyễn, không có thật sanh và thật diệt</h3>
    <p>Phật lại dùng ví dụ người bị nhặm mắt thấy hoa đốm giữa hư không. Khi hết nhặm rồi, hoa đốm tự mất. Không nên hỏi “hoa đốm mất rồi, chừng nào nó sanh lại?”, vì vốn dĩ hư không chưa từng có hoa đốm thật.</p>
    <p>Chúng sanh trong Viên Giác mà vọng thấy sanh tử, cũng như người nhặm mắt thấy hoa đốm. Tướng sinh diệt là hư vọng; tánh Viên Giác thì thường thanh tịnh, chẳng bị sinh diệt chi phối, chẳng tạm có, chẳng tạm không.</p>
    <h4 id="luoc-giai-phat-day-cac-phap-hu-huyen-khong-co-that-sanh-va-that-diet" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Hoa đốm do nhặm mắt, không có thật thể. Viên Giác cũng vậy: các cảnh vọng có thể hiện, có thể mất, nhưng tánh giác thì không vì vậy mà thêm bớt.</p>
    <p>Cho nên đừng chấp sanh diệt là thật có. Chỗ thấy sinh tử chính là chỗ cần phá trừ, chứ không phải một cảnh thật để ta bám vào.</p>

    <h3 id="phat-day-khi-thanh-phat-roi-khong-tro-lai-lam-chung-sanh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Phật dạy: khi thành Phật rồi, không trở lại làm chúng sanh</h3>
    <p>Phật dùng thí dụ kim quặng: khi đã nấu lọc ra vàng y thì không còn trở lại thành quặng nữa. Cũng thế, khi vọng minh đã được dứt sạch, tánh Viên Giác hiển lộ, gọi là thành Phật, nhưng đó không phải là làm ra một cái gì mới từ bên ngoài.</p>
    <p>Vốn từ trong quặng đã có vàng, nên nói chúng sanh nguyên lai thành Phật. Chỉ vì lớp quặng vô minh che lấp mà vàng chưa hiện. Đến khi lọc sạch, vàng hiện thì không còn lý do nào để gọi nó trở lại thành quặng nữa.</p>
    <h4 id="luoc-giai-phat-day-khi-thanh-phat-roi-khong-tro-lai-lam-chung-sanh" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Vàng trong quặng là dụ cho Phật tánh nơi chúng sanh. Thành Phật không phải mới đắc thêm một vật, mà là bỏ lớp che để tánh sẵn có hiển bày.</p>
    <p>Khi đã thành vàng y rồi thì không còn trở lại làm quặng nữa. Cũng vậy, khi vô minh đã sạch thì không có chuyện quay ngược lại làm chúng sanh.</p>

    <h3 id="tan-vien-giac-phi-tat-ca-tuong" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Tánh Viên Giác phi tất cả tướng</h3>
    <p>Đứng trên mặt tuyệt đối, tánh Viên Giác vốn không có Bồ-đề, Niết-bàn, thành Phật, chúng sanh hay luân hồi. Những tên gọi ấy đều là phương tiện đặt ra trên mặt đối đãi để dẫn dắt người học.</p>
    <p>Vì có phiền não nên mới nói Bồ-đề; vì có sanh tử nên mới nói Niết-bàn; vì có chúng sanh nên mới nói Phật. Nhưng khi nhìn sâu vào tánh Viên Giác, tất cả đều như hoa đốm giữa hư không, không thật có tự thể để nắm giữ.</p>
    <h4 id="luoc-giai-tan-vien-giac-phi-tat-ca-tuong" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ở tầng tương đối thì có phàm - thánh, mê - ngộ; ở tầng tuyệt đối thì các danh tướng ấy đều không thể chấp làm thật. Đây là chỗ cần buông cả khái niệm lẫn thành kiến.</p>
    <p>Khi đã thấy rõ mọi pháp như hoa đốm, người tu không còn bị mắc kẹt vào tên gọi Bồ-đề hay Niết-bàn nữa.</p>

    <h3 id="tan-vien-giac-khong-the-nghi-ban" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">8. Tánh Viên Giác không thể nghĩ bàn</h3>
    <p>Phật nhấn mạnh: ngay cả cảnh giới Niết-bàn của hàng Thanh Văn Tiểu thừa còn không thể lấy tâm phân biệt mà thâm chứng, huống gì cảnh giới Viên Giác thanh tịnh của Như Lai lại đem tâm suy nghĩ so đo của chúng sanh mà mong nhập được?</p>
    <p>Dùng tâm luân hồi để nghĩ về Viên Giác giống như đem lửa đom đóm đốt núi Tu Di. Cho nên trước hết phải đoạn căn bản sanh tử luân hồi từ vô thỉ, tức là phải lìa vọng tâm phân biệt.</p>
    <h4 id="luoc-giai-tan-vien-giac-khong-the-nghi-ban" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Muốn vào biển Niết-bàn phải bỏ hẳn tâm luân hồi. Vọng tưởng còn thì chấp còn; chấp còn thì chưa thể bước vào cảnh giới không đối đãi.</p>
    <p>Đây là chỗ Phật dạy rất rốt ráo: không phải đem thêm suy nghĩ để hiểu Viên Giác, mà là dứt ngay cái tâm hay nghĩ bàn ấy.</p>

    <h3 id="khong-the-dung-tam-chung-sanh-phan-biet-duoc-canh-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">9. Không thể dùng tâm chúng sanh, phân biệt được cảnh Phật</h3>
    <p>Phật chỉ thẳng rằng: mọi suy nghĩ phân biệt đều từ vọng tâm mà khởi, duyên theo bóng dáng của sáu trần. Cái biết ấy hư vọng như hoa đốm trong hư không, nên không phải chơn tâm.</p>
    <p>Vì vậy, nếu dùng tâm hư vọng ấy để đo lường cảnh giới của chư Phật, thì cảnh Phật cũng bị kéo xuống thành một cảnh tương đối, không thể nào vào được Viên Giác chơn thật. Cho nên, trước hết phải đoạn căn bản sanh tử luân hồi từ vô thỉ.</p>
    <h4 id="luoc-giai-khong-the-dung-tam-chung-sanh-phan-biet-duoc-canh-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Hễ còn đối đãi có - không, phải - trái, thánh - phàm thì vẫn còn ở trong vọng chấp. Muốn rõ Viên Giác phải phá gốc vọng tâm từ đầu.</p>
    <p>Câu hỏi của Ngài Kim Cang Tạng là để mở chỗ này: không thể đem cái tâm đang bị luân hồi hóa đi hỏi về cảnh giới vượt ngoài luân hồi.</p>

    <h3 id="phat-noi-bai-ke-de-tom-lai-cac-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">10. Phật nói bài kệ để tóm lại các nghĩa trên</h3>
    <p>Đức Thế Tôn muốn gom lại ý nghĩa của cả chương nên nói bài kệ này. Bài kệ nhắc rằng tánh Như Lai vắng lặng, chưa từng có chung thủy; nếu dùng tâm luân hồi mà nghĩ bàn cảnh giới Phật, thì cảnh Phật cũng thành luân hồi.</p>
    <p>Người ở bờ luân hồi không thể tự dưng bước vào biển Phật. Nhưng Phật tánh vốn sẵn có, chỉ cần tu là hiện; như vàng vốn có trong quặng, chỉ cần lọc bỏ quặng là thành vàng y.</p>
    <div class="space-y-1 italic">
      <p>Kim Cang Tạng! Nên biết:</p>
      <p>Như Lai tánh vắng lặng,</p>
      <p>Chưa từng có chung thủy,</p>
      <p>Nếu dùng tâm luân hồi,</p>
      <p>Suy nghĩ cảnh giới Phật,</p>
      <p>Cảnh Phật thành luân hồi.</p>
      <p>Người ở bờ luân hồi,</p>
      <p>Không thể vào biển Phật.</p>
      <p>Phật tánh tuy sẵn có,</p>
      <p>Phải tu mới hiện nhiên.</p>
      <p>Cũng như vàng sẵn có,</p>
      <p>Phải lọc quặng mới thành.</p>
      <p>Khi đã thành vàng y,</p>
      <p>Không trở lại làm quặng.</p>
      <p>Sanh tử và Niết-bàn,</p>
      <p>Phàm phu cùng chư Phật,</p>
      <p>Thấy đều như hoa đốm.</p>
      <p>Tâm suy nghĩ đã huyễn,</p>
      <p>Làm sao nhập được chân.</p>
      <p>Nếu rõ được tâm này,</p>
      <p>Mới cầu được Viên Giác.</p>
    </div>
    <h4 id="luoc-giai-phat-noi-bai-ke-de-tom-lai-cac-nghia-tren" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bài kệ gom hết tinh thần của chương: đừng chấp luân hồi là thật, đừng chấp Phật đạo là một cái gì để nắm bắt. Chỉ cần dứt vọng tâm thì Viên Giác tự hiện.</p>
    <p>Câu kết “Nếu rõ được tâm này, mới cầu được Viên Giác” nhắc rằng việc quan trọng nhất không phải gom thêm khái niệm, mà là nhận ra và buông cái tâm hư vọng đang che phủ chính mình.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong câu hỏi đầu tiên, Ngài Kim Cang Tạng Bồ Tát nêu lên mâu thuẫn gì về việc “chúng sanh đã thành Phật”?',
    options: {
      a: 'Nếu chúng sanh có sẵn vô minh thì làm sao có thể tu hành để thành Phật?',
      b: 'Nếu đã thành Phật từ xưa thì tại sao lại có vô minh để trở lại làm chúng sanh?',
      c: 'Nếu mười phương chúng sanh đều là Phật, tại sao thế giới vẫn còn khổ đau?',
      d: 'Tại sao các đức Như Lai hiện nay không dùng thần thông để nhổ sạch vô minh cho chúng sanh?',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Câu hỏi của Ngài không phải là nghi về phương pháp tu hành, mà là mâu thuẫn giữa việc đã là Phật mà vẫn còn vô minh [1].',
      b: 'Đúng. Ngài hỏi thẳng: nếu chúng sanh đã thành Phật từ xưa đến nay, thì tại sao lại còn tất cả vô minh để trở lại làm chúng sanh nữa [1].',
      c: 'Sai. Ngài không đặt câu hỏi theo hướng thế giới khổ đau hay không [1].',
      d: 'Sai. Ngài không hỏi về thần thông nhổ vô minh [1].',
    },
  },
  {
    question: 'Phật dùng thí dụ “nhờ mây bay mà thấy mặt trăng chạy” để giải thích điều gì?',
    options: {
      a: 'Tánh Viên Giác cũng có sự thay đổi tùy theo trình độ tu hành của mỗi người.',
      b: 'Sự chuyển động của các pháp hữu vi là quy luật tất yếu của vũ trụ.',
      c: 'Chúng sanh cần phải quan sát thiên nhiên để thấu hiểu đạo lý sâu xa.',
      d: 'Vì tâm chúng sanh biến động nên nhìn nhận sai lệch về tánh Viên Giác vốn thanh tịnh.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tánh Viên Giác vốn thanh tịnh và không thay đổi [4].',
      b: 'Sai. Thí dụ này không nhằm giải thích quy luật chuyển động của vũ trụ [4].',
      c: 'Sai. Đây không phải lời khuyên quan sát thiên nhiên để hiểu đạo lý [4].',
      d: 'Đúng. Phật mượn việc mây bay làm ảo giác trăng chạy để chỉ việc dùng tâm cầu nhiễm sanh tử luân hồi mà quan sát tánh Viên Giác thì thấy nó cũng cầu nhiễm, biến động [4].',
    },
  },
  {
    question: 'Theo lời Phật dạy, tại sao không nên hỏi “chừng nào hoa đốm sanh trở lại trong hư không” sau khi bệnh lòa mắt đã hết?',
    options: {
      a: 'Vì hoa đốm sẽ tự động xuất hiện lại nếu người đó tiếp tục làm việc quá sức.',
      b: 'Vì hoa đốm vốn là hư huyễn, không thật sự có sinh ra hay mất đi.',
      c: 'Vì người đã hết bệnh thì không còn quan tâm đến những điều hư vọng nữa.',
      d: 'Vì hư không quá rộng lớn nên không thể quan sát được hoa đốm.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Việc làm việc quá sức không được nhắc đến trong kinh [5].',
      b: 'Đúng. Hoa đốm là do lòa nhặm mà vọng thấy, vốn hư huyễn không có thật thể, nên trong hư không không thật sự có sự sanh ra hay diệt đi của hoa đốm [5].',
      c: 'Sai. Trọng tâm của lý do là bản chất không thật của hoa đốm chứ không phải do người bệnh không quan tâm [5].',
      d: 'Sai. Hư không rộng lớn không phải là lý do khiến không quan sát được [5].',
    },
  },
  {
    question: 'Thí dụ về “chất vàng trong quặng” nhằm khẳng định điều gì về việc thành Phật?',
    options: {
      a: 'Quặng và vàng là hai thực thể hoàn toàn khác biệt và không liên quan đến nhau.',
      b: 'Khi đã thành vàng y thì không bao giờ trở lại thành quặng nữa.',
      c: 'Thành Phật là kết quả của việc tích lũy thêm các công đức mới.',
      d: 'Vàng chỉ được tạo ra sau quá trình nấu lọc lâu dài.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Vàng được lọc ra từ quặng, biểu thị Phật tánh sẵn có trong chúng sanh [6].',
      b: 'Đúng. Thí dụ này khẳng định khi lọc hết quặng thành vàng y thì không bao giờ trở lại làm quặng nữa, tương tự thành Phật rồi thì không khởi vô minh trở lại làm chúng sanh [6].',
      c: 'Sai. Vàng đã có sẵn từ trước, không phải nhờ tích lũy mới sanh ra [6].',
      d: 'Sai. Quá trình nấu lọc làm vàng hiển ra chứ không phải “tạo ra” chất vàng vốn đã có [6].',
    },
  },
  {
    question: 'Câu nói “Dùng tâm luân hồi mà nghĩ bàn đến tánh Viên Giác, thì tánh Viên Giác đó cũng trở thành luân hồi” có nghĩa là gì?',
    options: {
      a: 'Chỉ những người đang ở trong luân hồi mới có thể hiểu đúng về tánh Viên Giác.',
      b: 'Người tu hành cần phải mang tâm luân hồi vào biển Niết-bàn để chuyển hóa nó.',
      c: 'Tánh Viên Giác thực chất là một phần của vòng luân hồi.',
      d: 'Mọi suy nghĩ, phân biệt về cảnh giới Phật bằng vọng tâm đều bị giới hạn trong vòng đối đãi, sanh diệt.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Người trong luân hồi dùng vọng tâm không thể hiểu tánh Viên Giác [8].',
      b: 'Sai. Dùng tâm luân hồi mà muốn vào biển Niết-bàn là không thể được [8].',
      c: 'Sai. Tánh Viên Giác vốn thanh tịnh, không thuộc luân hồi [8].',
      d: 'Đúng. Hễ đem cái tâm đối đãi, hư vọng của chúng sanh để suy lường cảnh giới Phật thì chính cảnh giới ấy bị kéo xuống thành đối đãi, luân hồi [8].',
    },
  },
  {
    question: 'Phật ví việc dùng tâm chúng sanh suy nghĩ để nhập vào biển Niết-bàn tịch tịnh của Như Lai giống như hành động nào?',
    options: {
      a: 'Dùng một hạt cát để lấp đầy hố sâu của vô minh.',
      b: 'Dùng gương mờ để soi rõ khuôn mặt thật của mình.',
      c: 'Dùng tay không để tát cạn nước biển Đông.',
      d: 'Dùng lửa đom đóm để đốt cháy núi Tu Di.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Thí dụ này không có trong kinh [8].',
      b: 'Sai. Không có thí dụ về gương mờ ở đoạn này [8].',
      c: 'Sai. Không có thí dụ tát cạn biển Đông [8].',
      d: 'Đúng. Phật dạy: “Cũng như người dùng lửa đom đóm, để đốt núi Tu di, làm sao đốt được...” [8].',
    },
  },
  {
    question: 'Tại sao hàng Thanh Văn Tiểu thừa bị Phật quở là “loại giống khô, mầm héo”?',
    options: {
      a: 'Vì họ đắm chìm nơi cảnh không tịch, thân tâm đoạn diệt, không phát tâm cứu độ chúng sanh để thành quả Phật.',
      b: 'Vì họ vẫn còn ham thích những lạc thú ở cõi trời và cõi người.',
      c: 'Vì họ không chịu giữ giới luật nghiêm minh.',
      d: 'Vì họ quá chú trọng vào việc nghiên cứu kinh điển mà quên tu tập.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Hàng Thanh Văn đắm chìm nơi cảnh không, thân tâm đoạn diệt như tro nguội, không hóa độ chúng sanh nên không thể nẩy mầm sanh chồi quả Phật Bồ-đề [8].',
      b: 'Sai. Họ say đắm cảnh Niết-bàn tịch mịch, không phải lạc thú thế gian [8].',
      c: 'Sai. Tài liệu không nhắc đến việc họ thiếu giữ giới [8].',
      d: 'Sai. Tài liệu không nói họ lơ là tu tập vì nghiên cứu kinh điển [8].',
    },
  },
  {
    question: 'Đứng về phương diện “lý tánh tuyệt đối” của tâm Viên Giác, các khái niệm Bồ-đề, Niết-bàn hay thành Phật được nhìn nhận như thế nào?',
    options: {
      a: 'Là những mục tiêu tối thượng mà mọi hành giả phải bám chặt không buông.',
      b: 'Là những phần thưởng dành cho người đã vượt qua được ba vô số kiếp tu hành.',
      c: 'Thấy đều như hoa đốm giữa hư không, không có thật thể đối đãi.',
      d: 'Chỉ có Niết-bàn là thật, còn các thứ khác đều là giả tạm.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Ở phương diện tuyệt đối thì không có mục tiêu để bám nắm [7].',
      b: 'Sai. Các khái niệm này không phải là phần thưởng [7].',
      c: 'Đúng. Đứng về lý tánh tuyệt đối, sanh tử và Niết-bàn, phàm phu và chư Phật đều được thấy như hoa đốm giữa hư không [7].',
      d: 'Sai. Ngay cả Niết-bàn cũng chỉ là hoa đốm hư huyễn nếu còn đứng trên mặt đối đãi [7].',
    },
  },
  {
    question: 'Theo văn bản, “vọng tưởng phân biệt” của chúng sanh thực chất duyên theo đối tượng nào?',
    options: {
      a: 'Duyên theo các vị Bồ Tát đang thuyết pháp.',
      b: 'Duyên theo sự thanh tịnh của bản thể vũ trụ.',
      c: 'Duyên theo những lời dạy trong kinh điển Đại thừa.',
      d: 'Duyên theo bóng dáng của sáu trần (sắc, thanh, hương, vị, xúc, pháp).',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Vọng tâm không duyên theo Bồ Tát thuyết pháp ở phương diện này [9].',
      b: 'Sai. Vọng tưởng không thể duyên được bản thể thanh tịnh [9].',
      c: 'Sai. Vọng tâm không duyên theo kinh điển [9].',
      d: 'Đúng. Phật chỉ rõ tất cả suy nghĩ đều là vọng tưởng phân biệt duyên theo bóng dáng của sáu trần, hư vọng như hoa đốm [9].',
    },
  },
  {
    question: 'Để đạt được Viên Giác, Phật dạy các vị Bồ Tát và chúng sanh đời sau cần thực hiện bước tiên quyết nào?',
    options: {
      a: 'Phải tìm cho được một vị thiện tri thức để nương tựa suốt đời.',
      b: 'Phải đoạn hết căn bản sanh tử luân hồi từ vô thỉ (vọng tâm phân biệt).',
      c: 'Phải học thuộc lòng tất cả các bài kệ trong kinh Viên Giác.',
      d: 'Phải đi quanh hữu bên Phật ba vòng và kính cẩn chắp tay.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đây không phải bước tiên quyết được nhắc đến trong đoạn này [9].',
      b: 'Đúng. Phật dạy: “Trước phải đoạn hết căn bản sanh tử luân hồi từ vô thỉ”, tức là dứt vọng tâm phân biệt [9].',
      c: 'Sai. Tài liệu không yêu cầu học thuộc bài kệ [9].',
      d: 'Sai. Đây chỉ là nghi lễ thưa hỏi pháp của Ngài Kim Cang Tạng [1], không phải pháp tu diệt vô minh.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-4-chuong-kim-cang-tang',
  slug: 'bai-thu-4-chuong-kim-cang-tang',
  title: 'Bài Thứ 4 - Chương Kim Cang Tạng',
  type: 'article',
  status: 'published',
  order: 7,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-4-chuong-kim-cang-tang/Gi%E1%BA%A3i_m%C3%A3_V%C3%B4_minh_Gi%C3%A1c_ng%E1%BB%99.png',
      readingContent,
      tableOfContents: [
        {
          id: 'chuong-kim-cang-tang',
          label: 'IV. CHƯƠNG KIM CANG TẠNG',
        },
        {
          id: 'ngai-kim-cang-tang-hoi-phat',
          label: '1. Ngài Kim Cang Tạng Bồ Tát hỏi Phật',
          indent: 1,
        },
        {
          id: 'luoc-giai-ngai-kim-cang-tang-hoi-phat',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'phat-khen-ngai-kim-cang-tang',
          label: '2. Phật khen Ngài Kim Cang Tạng Bồ Tát',
          indent: 1,
        },
        {
          id: 'luoc-giai-phat-khen-ngai-kim-cang-tang',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'phat-day-nguoi-me-noi-ngo-ngo-ay-thanh-me',
          label: '3. Phật dạy: Người mê nói ngộ, Ngộ ấy thành mê',
          indent: 1,
        },
        {
          id: 'luoc-giai-phat-day-nguoi-me-noi-ngo-ngo-ay-thanh-me',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'phat-dung-thi-du-de-giai-thich-nghia-tren',
          label: '4. Phật dùng thí dụ để giải thích nghĩa trên',
          indent: 1,
        },
        {
          id: 'luoc-giai-phat-dung-thi-du-de-giai-thich-nghia-tren',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'phat-day-cac-phap-hu-huyen-khong-co-that-sanh-va-that-diet',
          label: '5. Phật dạy: các Pháp hư huyễn, không có thật sanh và thật diệt',
          indent: 1,
        },
        {
          id: 'luoc-giai-phat-day-cac-phap-hu-huyen-khong-co-that-sanh-va-that-diet',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'phat-day-khi-thanh-phat-roi-khong-tro-lai-lam-chung-sanh',
          label: '6. Phật dạy: khi thành Phật rồi, không trở lại làm chúng sanh',
          indent: 1,
        },
        {
          id: 'luoc-giai-phat-day-khi-thanh-phat-roi-khong-tro-lai-lam-chung-sanh',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'tan-vien-giac-phi-tat-ca-tuong',
          label: '7. Tánh Viên Giác phi tất cả tướng',
          indent: 1,
        },
        {
          id: 'luoc-giai-tan-vien-giac-phi-tat-ca-tuong',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'tan-vien-giac-khong-the-nghi-ban',
          label: '8. Tánh Viên Giác không thể nghĩ bàn',
          indent: 1,
        },
        {
          id: 'luoc-giai-tan-vien-giac-khong-the-nghi-ban',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'khong-the-dung-tam-chung-sanh-phan-biet-duoc-canh-phat',
          label: '9. Không thể dùng tâm chúng sanh, phân biệt được cảnh Phật',
          indent: 1,
        },
        {
          id: 'luoc-giai-khong-the-dung-tam-chung-sanh-phan-biet-duoc-canh-phat',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
        {
          id: 'phat-noi-bai-ke-de-tom-lai-cac-nghia-tren',
          label: '10. Phật nói bài kệ để tóm lại các nghĩa trên',
          indent: 1,
        },
        {
          id: 'luoc-giai-phat-noi-bai-ke-de-tom-lai-cac-nghia-tren',
          label: 'LƯỢC GIẢI',
          indent: 2,
        },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-4-chuong-kim-cang-tang/Awakening_Perfect_Enlightenment.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/PfVcbMwISkc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/2XmxoM8BaEn02JEHAB4AEb?utm_source=generator&si=b5ec7fd8693445e2',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Kim Cang Tạng',
    passPercentage: 70,
    questions,
  },
}

export default lesson
