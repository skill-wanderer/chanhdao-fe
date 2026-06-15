import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-pho-hien" class="text-2xl font-bold text-primary-700 dark:text-primary-300">II. CHƯƠNG PHỔ HIỀN</h2>

    <h3 id="ngai-pho-hien-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Phổ Hiền hỏi Phật</h3>
    <p>Khi ấy Ngài Phổ Hiền Bồ Tát, ở trong đại chúng đứng dậy đi quanh bên hữu của Phật ba vòng rồi chắp tay đảnh lễ và quỳ thẳng bạch rằng:</p>
    <p>Bạch Đức Đại Bi Thế Tôn, xin Ngài vì các vị Bồ Tát ở trong hội này và tất cả chúng sanh đời sau tu Đại thừa, từ bi chỉ dạy phương pháp tu hành để vào cảnh giới Viên Giác thanh tịnh.</p>
    <p>Bạch Thế Tôn, nếu chúng sanh biết các pháp đều như huyễn, thân và tâm này cũng huyễn, thì cần gì phải tu? Tại sao còn dùng cái “huyễn” trở lại tu “pháp huyễn” làm gì?</p>
    <p>Lại nữa, nếu các pháp hư huyễn đều diệt hết, thì thân tâm này cũng diệt; nếu thân tâm đều diệt thì lấy ai tu hành mà gọi là “tu pháp như huyễn”?</p>
    <p>Bạch Thế Tôn, nếu các chúng sanh không tu hành, vẫn ở mãi trong cảnh sanh tử huyễn hóa mà chẳng tự biết, thì làm sao dẹp trừ các tâm vọng tưởng, để giải thoát được sanh tử luân hồi?</p>
    <p>Xin Phật vì chúng sanh đời sau, chỉ dạy phương tiện tu tập và thứ lớp tu hành như thế nào, để cho chúng sanh khi nghe đến cảnh giới Viên Giác thanh tịnh này, y theo đó tu hành, vĩnh viễn xa lìa được các vọng huyễn.</p>
    <p>Ngài Phổ Hiền Bồ Tát thưa thỉnh như vậy ba lần, kính cẩn lạy Phật rồi trở lui.</p>
    <h4 id="luoc-giai-ngai-pho-hien-hoi-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại ý đoạn này là Ngài Phổ Hiền Bồ Tát hỏi Phật:</p>
    <p>Nếu tất cả chúng sanh biết các pháp đều như huyễn thì cần gì phải tu, vì nó là huyễn. Tại sao còn dùng cái huyễn (thân tâm) tu pháp như huyễn làm gì?</p>
    <p>Nếu chúng sanh chấp là huyễn mà không tu, thì vẫn ở mãi trong sanh tử luân hồi, làm sao được giải thoát?</p>
    <p>Xin Phật từ bi chỉ dạy phương tiện tu hành và phải tu tuần tự như thế nào, mới nhập được cảnh giới Viên Giác thanh tịnh?</p>

    <h3 id="phat-khen-ngai-pho-hien" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Phổ Hiền</h3>
    <p>Khi đó Đức Thế Tôn khen Ngài Phổ Hiền Bồ Tát và dạy rằng:</p>
    <p>Này thiện nam, quý lắm! Ông vì vị Bồ Tát hiện tại và chúng sanh đời sau, hỏi về phương tiện và thứ lớp tu tập pháp môn “như huyễn Tam muội” của Bồ Tát, khiến cho chúng sanh xa lìa các huyễn. Vậy các ông nên chăm chú nghe, ta sẽ vì các ông khai thị.</p>
    <p>Khi đó, ngài Phổ Hiền Bồ Tát và đại chúng đều hoan hỷ, kính cẩn và chăm chú nghe lời Phật chỉ giáo.</p>
    <h4 id="luoc-giai-phat-khen-ngai-pho-hien" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Văn Thù và Phổ Hiền là hai vị đại Bồ Tát. Ngài Văn Thù tiêu biểu cho đại trí, Ngài Phổ Hiền tiêu biểu cho đại hạnh. Có đại trí mới phá trừ được căn bản vô minh. Có đại hạnh mới hoàn thành được công hạnh của Phật. Người tu hành lúc nào cũng phải đủ cả “Trí và Hạnh”. Có “Trí” mới phá được vô minh và thấu rõ chân lý. Có “Hạnh” mới đạt được chân lý, hoàn thành quả Phật.</p>
    <p>Đoạn này Phật khen ngợi Ngài Phổ Hiền Bồ Tát, vì chúng sanh mà hỏi pháp tu “như huyễn Tam muội”.</p>
    <p>(1) Chữ “Tam muội” Hán dịch là “Định” hay “Chánh thọ”. Vì nhiếp tâm chuyên chú một chỗ, không cho xao lãng, nên gọi là “Định”. Ngài Tông Mật nói: “Rõ thấu thân và tâm đều như huyễn, thậm hiệp với Chơn như, như thế gọi là Chánh thọ”.</p>
    <p>Nghĩa bóng của chữ “Tam muội” là chỉ cho công việc làm đã quán thuần thục. Như người niệm Phật, có khi niệm mà có lúc lại quên, còn bị các vọng niệm xen tạp, như thế là chưa được Tam muội. Bao giờ người niệm Phật chỉ ròng ròng một niệm Phật thôi, không có một niệm gì khác xen vào, đi đứng nằm ngồi bất luận chỗ nào hay lúc nào cũng vẫn nhớ niệm Phật, như thế gọi là được “niệm Phật Tam muội”.</p>
    <p>Chúng ta quán các vật đều hư huyễn; nhưng có khi lại thấy là thiệt, như thế chưa được “như huyễn Tam muội”. Bao giờ đi đứng nằm ngồi bất luận giờ phút nào hay nơi nào cũng đều thấy các pháp hoàn toàn hư huyễn, như thế là chúng ta được pháp “Như huyễn Tam muội”.</p>

    <h3 id="phat-tra-loi-cho-ngai-pho-hien" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật trả lời cho Ngài Phổ Hiền</h3>
    <p>Này thiện nam! Tất cả các cảnh vật huyễn hóa (thế giới, chúng sanh) của chúng sanh, đều sanh trong tâm Viên Giác mầu nhiệm của Như Lai. Các pháp hư huyễn có diệt, mà tánh Viên Giác vẫn không diệt. Cũng như hoa đốm sanh trong hư không, các hoa đốm huyễn kia có hoại diệt, mà tánh hư không chẳng hề hoại diệt.</p>
    <h4 id="luoc-giai-phat-tra-loi-cho-ngai-pho-hien" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Hoa đốm là dụ cảnh vật, hư không là dụ Viên Giác. Đại ý đoạn này là nói các pháp giả dối hư huyễn thế gian này đều sanh trong Viên Giác (chơn tâm). Các pháp hư huyễn diệt mà tâm Viên Giác không diệt. Cũng như các hoa đốm sanh trong hư không, các đốm có diệt mà hư không không diệt.</p>

    <h3 id="phat-day-cac-phap-tu-de-nhap-vien-giac" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Phật dạy các pháp tu để nhập Viên Giác</h3>
    <p>Khi các huyễn cảnh diệt rồi, thì cái huyễn tâm của hành giả cũng theo đó mà diệt luôn. Đến khi các huyễn (năng và sở) đều diệt hết, thì cái tâm Viên Giác không vọng động tự hiện.</p>
    <p>Bởi đối với vọng huyễn mà nói “Viên Giác” nên Viên Giác cũng trở thành vọng huyễn, vì còn ở trong vòng đối đãi vậy. Đến cảnh giới này, nếu nói “có Viên Giác” thì chưa rời vọng huyễn đã đành, mà nói là “không Viên Giác” thì cũng chẳng rời được vọng huyễn.</p>
    <p>Thế nên, các vọng huyễn (có và không) đều phải bị diệt hết rồi, mới gọi là Viên Giác.</p>
    <h4 id="luoc-giai-phat-day-cac-phap-tu-de-nhap-vien-giac" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này lý lẽ uyên thâm, có 5 tầng:</p>
    <div class="space-y-2">
      <p>1. Huyễn cảnh diệt.</p>
      <p>2. Huyễn tâm cũng diệt.</p>
      <p>3. Các huyễn (năng, sở) diệt hết, tâm Viên Giác hiện bày.</p>
      <p>4. Bởi đối vọng huyễn mà gọi “Viên Giác” nên Viên Giác cũng trở thành hư huyễn. Vì còn ở trong vòng đối đãi phân biệt, nên chưa phải là “Viên Giác”.</p>
      <p>5. Nếu “chấp có Viên Giác” thì ở trong vòng vọng huyễn, mà “chấp không Viên Giác” cũng còn ở trong vòng vọng huyễn. Các vọng huyễn: có, không, sanh, diệt, phải, chẳng v.v... đều phải diệt hết rồi, thế mới đúng là “Viên Giác”.</p>
    </div>
    <p>Đại ý đoạn này nói: “Tánh Viên Giác” (chân tâm) không thể dùng lời nói mà luận bàn được, cũng không dùng ý nghĩ mà suy nghĩ được. Nếu vừa móng tâm động niệm, nghĩ thánh nói phàm, cho thế này là vọng, thế kia là chân, như thế là hãy còn trong vòng đối đãi; hễ còn đối đãi phân biệt, thì đều là vọng huyễn cả; phải rời hết các vọng huyễn mới đúng là “Viên Giác”.</p>

    <h3 id="phat-day-phuong-phap-ly-huyen" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Phật dạy phương pháp ly huyễn</h3>
    <p>Này Thiện Nam! Tất cả các vị Bồ Tát và chúng sanh đời sau, cần phải xa lìa các việc như sau:</p>
    <p>Xa lìa các cảnh giới huyễn hóa hư vọng. Nhưng còn cái “Tâm biết xa lìa”.</p>
    <p>Cái “Tâm biết xa lìa” đó cũng là huyễn, nên cũng xa lìa luôn.</p>
    <p>Cái “xa lìa” đó cũng là huyễn, nên cũng phải xa lìa.</p>
    <p>Cái “lìa cái xa lìa” cũng là huyễn nên cũng phải xa lìa luôn.</p>
    <p>Phải không còn cái gì để “xa lìa” nữa, như thế mới gọi là trừ được các huyễn.</p>
    <p>Tỷ như người kéo lửa, dùng hai miếng củi tre cọ xát nhau; cọ cho đến khi lửa phát ra, trở lại cháy hai miếng tre; cháy đến lúc củi hết, lửa tàn tro bay, bấy giờ chỉ còn đất trống.</p>
    <p>Dùng “cái huyễn” tu các “pháp huyễn” cũng thế. Khi các huyễn diệt hết rồi, không phải là đoạn diệt mà lúc bấy giờ tánh Viên Giác tự hiện bày.</p>
    <h4 id="luoc-giai-phat-day-phuong-phap-ly-huyen" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại ý đoạn này nói: người tu hành trước hết phải lìa các huyễn cảnh, sau lìa huyễn tâm; lìa cho đến không còn cái gì để lìa nữa, thế mới là lìa được hết các huyễn. Lúc bấy giờ cái phi huyễn là “Viên Giác tánh” hiện ra. Như thế thì “Viên Giác tánh” không phải là đoạn diệt.</p>
    <p>Như người kéo lửa, ban đầu dùng hai miếng củi tre cọ nhau (dụ cho tâm và cảnh), khi lửa phát ra trở lại cháy hết củi đến lúc lửa tàn tro bay (tâm cảnh đều hết), bấy giờ chỉ còn đất trống (dụ cho Viên Giác).</p>

    <h3 id="phat-day-giac-ngo-khong-co-tuan-tu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Phật dạy: “Giác ngộ” không có tuần tự, “Rời huyễn” chẳng cần phương tiện</h3>
    <p>Này thiện nam! Khi biết được các pháp hư huyễn, tức là lìa được các huyễn, chớ không cần phải có phương tiện gì khác. Lìa được các huyễn tức là “giác”, cũng không có lớp lang tuần tự gì.</p>
    <p>Tất cả Bồ Tát và chúng sanh đời sau, y như thế mà tu hành, mới xa lìa được các huyễn.</p>
    <h4 id="luoc-giai-phat-day-giac-ngo-khong-co-tuan-tu" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật dạy người biết được các pháp là hư huyễn thì không còn cố chấp và tham luyến các pháp nữa, tức là lìa được các huyễn rồi, chớ không có phương pháp tu tập nào khác.</p>
    <p>Câu này giống như câu trong Kinh Lăng Nghiêm: “Giác mê, mê diệt” (giác ngộ được cái mê, thì cái mê ấy hết). Cũng như người khi biết mình là chiêm bao, thì không còn chiêm bao nữa.</p>
    <p>Lìa được các vọng huyễn, tức thì “Viên Giác” hiện bày, thế nên không có lớp lang từng bậc. Dụ như khi ánh sáng đến, thì cái tối liền diệt; tối vừa diệt thì sáng vừa hiện, không có lớp lang tuần tự chi hết.</p>
    <p>Đoạn trước Ngài Phổ Hiền có hỏi thứ lớp tu pháp môn như huyễn thế nào, đến đoạn này Phật trả lời đã xong.</p>

    <h3 id="phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Phật nói bài kệ tóm lại các nghĩa trên</h3>
    <p>Khi ấy Đức Thế Tôn muốn tóm lại nghĩa này, nên nói bài kệ rằng:</p>
    <div class="space-y-1 italic">
      <p>Phổ Hiền! Ông nên biết</p>
      <p>Các vô minh huyễn hóa</p>
      <p>Của tất cả chúng sanh,</p>
      <p>Từ vô thỉ đến giờ,</p>
      <p>Đều sanh trong Viên Giác</p>
      <p>Của các Đức Như Lai</p>
      <p>Cũng như các hoa đốm</p>
      <p>Sanh trong thái hư không.</p>
      <p>Hoa đốm diệt hết rồi,</p>
      <p>Hư không vẫn trong tịnh.</p>
      <p>Các huyễn từ “Giác” sanh,</p>
      <p>Huyễn diệt, “Giác” viên mãn.</p>
      <p>Viên Giác không vọng động.</p>
      <p>Các Bồ Tát hiện tại</p>
      <p>Và chúng sanh đời sau</p>
      <p>Thường phải xa lìa huyễn.</p>
      <p>Xa lìa cho hết huyễn</p>
      <p>Như lửa từ cây sanh</p>
      <p>Trở lại cháy hết cây;</p>
      <p>Lửa tàn tro bay tận.</p>
      <p>“Giác ngộ” không tuần tự</p>
      <p>“Phương tiện” cũng không cần.</p>
    </div>
    <h4 id="luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại ý bài kệ này Phật dạy: Các vô minh vọng huyễn của chúng sanh từ vô thỉ đến giờ, đều sanh trong tâm Viên Giác của Như Lai. Đến khi các vô minh vọng huyễn diệt rồi, thì tâm “Viên Giác” hiện ra, không có tuần tự và cũng không cần có phương tiện gì khác.</p>
    <p>Dụ như hoa đốm sanh trong hư không, khi hoa đốm diệt hết thì hư không tự trong tịnh. Và như lửa từ trong cây sanh, trở lại đốt cháy cây, đến khi củi hết lửa tàn, khói tan tro tận, lúc bấy giờ chỉ còn bầu trời trong suốt.</p>

    <h4 id="luu-y" class="text-lg font-semibold">LƯU Ý</h4>
    <p>Trong chương Phổ Hiền này, chúng ta nên lưu ý về câu hỏi của Ngài Phổ Hiền và lời đáp của Phật, vì rất quan hệ đến đời tu hành của chúng ta.</p>
    <p>Ngài Phổ Hiền hỏi rằng: “Đã là huyễn thì cần gì phải tu? Tại sao còn dùng thân tâm như huyễn để tu hành như huyễn?” - Đoạn này chúng ta nếu hiểu lầm, thì không sao khỏi sanh ra những vọng chấp: “Thân huyễn, cảnh huyễn, tu học cũng huyễn v.v...” rồi trăm việc lành đều bỏ xuôi, thật là nguy hiểm vô cùng.</p>
    <p>Vậy ta cần phải xét kỹ về đoạn trả lời của Phật. Đại ý Phật dạy rằng: Tuy biết các pháp là “huyễn” nhưng cần phải tu mới đạt đến chỗ “phi huyễn” (chân). Cũng như: vẫn biết “tiếng gõ bảng” của thầy giáo thì không sao dẹp được hết tiếng ồn ào của học trò. Đến khi hết tiếng ồn ào của học trò thì tiếng gõ bảng cũng không cần nữa.</p>
    <p>Tổ sư đã dạy: “Hữu vi tuy nguy, xả chi tắc Phật đạo nan thành”; nghĩa là các việc tu hành đều thuộc về hữu vi pháp, tuy biết là vọng, nhưng nếu bỏ đi không tu thì khó thành đạo Phật. Cổ nhân dạy: “Đập gai lấy gai mà lẹ” hay là “phải dùng giặc để dẹp giặc” cũng là nghĩa ấy.</p>
    <p>Vẫn biết “Viên Giác” tánh không phải huyễn, nhưng muốn nhập Viên Giác thì phải dùng huyễn để trừ huyễn. Khi các huyễn diệt hết, thì tánh “Viên Giác” mới hiện.</p>
    <p>Cổ Đức dạy: “Thật tế lý địa bất thọ nhất trần, vạn sự môn trung bất xả nhất pháp”, nghĩa là: về chỗ lý tánh chân thật (Viên Giác) thì không thọ một mảy trần; nhưng về sự tướng tu hành, thì không bỏ một việc nhỏ.</p>
    <p>Đây là một quy tắc từ nghìn xưa. Những vị tu hành được thành đạo quả, không một ai vượt qua ngoài quy tắc này.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong chương Phổ Hiền, Ngài Phổ Hiền Bồ Tát tiêu biểu cho phương diện nào trong tu hành?',
    options: {
      a: 'Đại bi',
      b: 'Đại nguyện',
      c: 'Đại hạnh',
      d: 'Đại trí',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Đoạn này không lấy đại bi làm tiêu biểu cho Ngài Phổ Hiền.',
      b: 'Sai. Văn bản không nói Ngài Phổ Hiền tiêu biểu cho đại nguyện.',
      c: 'Đúng. Tài liệu ghi rõ Ngài Phổ Hiền tiêu biểu cho đại hạnh, còn Ngài Văn Thù tiêu biểu cho đại trí.',
      d: 'Sai. Đại trí là biểu tượng của Ngài Văn Thù.',
    },
  },
  {
    question: 'Theo lời giải thích của Ngài Tông Mật, “Chánh thọ” được hiểu là gì?',
    options: {
      a: 'Rõ thấu thân tâm đều như huyễn và thậm hiệp với Chân như',
      b: 'Sự tập trung tuyệt đối vào một đối tượng bên ngoài',
      c: 'Một trạng thái an lạc của thiền định thông thường',
      d: 'Loại bỏ hoàn toàn mọi tư duy và cảm nhận',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Ngài Tông Mật giải thích “rõ thấu thân và tâm đều như huyễn, thậm hiệp với Chân như” thì gọi là Chánh thọ.',
      b: 'Sai. Chánh thọ không chỉ là tập trung vào một đối tượng bên ngoài.',
      c: 'Sai. Cách giải thích trong tài liệu nhấn mạnh sự thấu đạt thân tâm như huyễn.',
      d: 'Sai. Không phải loại bỏ mọi cảm nhận một cách máy móc.',
    },
  },
  {
    question: 'Phật dùng ví dụ “hoa đốm trong hư không” để minh họa điều gì?',
    options: {
      a: 'Viên Giác và các pháp huyễn đều cùng diệt mất',
      b: 'Các pháp huyễn có diệt, còn tánh Viên Giác thì không diệt',
      c: 'Hư không là nguyên nhân sinh ra hoa đốm',
      d: 'Thế giới là một thực thể vĩnh cửu không đổi',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Viên Giác không bị diệt theo các pháp huyễn.',
      b: 'Đúng. Hư không là dụ cho Viên Giác: hoa đốm có hoại diệt nhưng hư không chẳng hề hoại diệt.',
      c: 'Sai. Ví dụ này không nhằm nói hư không sinh ra hoa đốm theo nghĩa vật lý.',
      d: 'Sai. Đoạn kinh nói các pháp thế gian là hư huyễn.',
    },
  },
  {
    question: 'Vì sao nói “có Viên Giác” hay “không Viên Giác” vẫn chưa rời vọng huyễn?',
    options: {
      a: 'Vì Viên Giác vốn là một khái niệm do tâm tưởng đặt ra',
      b: 'Vì còn rơi vào vòng đối đãi có - không, chưa rời phân biệt',
      c: 'Vì Viên Giác chỉ có sau khi thân tâm hoàn toàn biến mất',
      d: 'Vì chư Phật không cho phép nói về Viên Giác',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Viên Giác không phải là khái niệm hư đặt.',
      b: 'Đúng. Còn kẹt trong đối đãi có - không thì vẫn là vọng huyễn.',
      c: 'Sai. Viên Giác không đồng nghĩa với đoạn diệt thân tâm.',
      d: 'Sai. Phật vẫn đang giảng dạy về Viên Giác.',
    },
  },
  {
    question: 'Tiến trình “ly huyễn” mà Phật dạy gồm những tầng nào?',
    options: {
      a: 'Lìa cảnh huyễn, rồi lìa tâm biết lìa, rồi lìa luôn cái lìa',
      b: 'Bỏ hết thân tâm rồi mới nhập đạo',
      c: 'Chỉ cần quán tưởng Viên Giác là đủ',
      d: 'Phải đi qua nhiều tầng phương tiện phức tạp',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Phật dạy phải lìa cảnh huyễn, lìa tâm biết lìa, lìa cái lìa và cả cái “lìa cái lìa”.',
      b: 'Sai. Đoạn kinh không dạy đoạn bỏ thân tâm theo nghĩa tiêu cực.',
      c: 'Sai. Phật nhấn mạnh cách lìa huyễn chứ không chỉ quán tưởng.',
      d: 'Sai. Bản kinh nói “rời huyễn” chẳng cần phương tiện khác.',
    },
  },
  {
    question: 'Ví dụ “hai miếng củi tre cọ xát nhau” nhằm chỉ điều gì trong tu hành?',
    options: {
      a: 'Dùng hỏa lực bên ngoài để đốt sạch vọng tưởng',
      b: 'Dùng huyễn để tu huyễn, đến khi huyễn diệt thì Viên Giác hiện bày',
      c: 'Cần có nghi thức đặc biệt mới khởi được trí tuệ',
      d: 'Tu hành là một tiến trình kéo dài vô tận',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đây không phải là nghĩa của ví dụ.',
      b: 'Đúng. Hai miếng tre cọ nhau, lửa phát ra rồi cháy hết củi; ví như dùng huyễn để trừ huyễn, đến khi huyễn tận thì Viên Giác hiện.',
      c: 'Sai. Không có nghi thức đặc biệt nào được nêu ra.',
      d: 'Sai. Ví dụ nhấn mạnh sự tận diệt của huyễn chứ không phải kéo dài vô tận.',
    },
  },
  {
    question: 'Theo Phật, “Giác ngộ” có cần tuần tự từng bậc không?',
    options: {
      a: 'Có, phải lần lượt qua nhiều cấp độ mới được',
      b: 'Không, khi biết pháp là huyễn thì tức là lìa huyễn và giác ngay',
      c: 'Có, nhưng chỉ dành cho hàng Bồ Tát',
      d: 'Không, vì giác ngộ là một sự ngẫu nhiên',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phật nói giác ngộ không có lớp lang tuần tự.',
      b: 'Đúng. Khi biết các pháp hư huyễn, tức là lìa được huyễn; lìa huyễn tức là giác.',
      c: 'Sai. Đoạn kinh áp dụng cho cả Bồ Tát và chúng sanh đời sau.',
      d: 'Sai. Giác ngộ không phải sự ngẫu nhiên.',
    },
  },
  {
    question: 'Bài kệ tóm tắt dạy rằng các vô minh huyễn hóa của chúng sanh từ đâu mà sanh?',
    options: {
      a: 'Từ một cõi giới khác ngoài Viên Giác',
      b: 'Từ tâm Viên Giác của Như Lai',
      c: 'Từ thân tâm vật lý của con người',
      d: 'Từ nghiệp chướng hoàn toàn tách rời bản tâm',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Bài kệ nói các huyễn đều sanh trong Viên Giác.',
      b: 'Đúng. Kệ dạy các vô minh huyễn hóa đều sanh trong tâm Viên Giác của Như Lai.',
      c: 'Sai. Thân tâm chỉ là huyễn hóa, không phải gốc sanh ra Viên Giác.',
      d: 'Sai. Nghiệp chướng cũng không tách rời bản tâm theo cách giải này.',
    },
  },
  {
    question: 'Vì sao không nên hiểu lầm lời dạy “các pháp đều như huyễn” rồi bỏ hết việc tu?',
    options: {
      a: 'Vì như vậy sẽ làm chậm tiến độ học kinh',
      b: 'Vì sẽ rơi vào vọng chấp, bỏ xuôi trăm việc lành và không thể nhập phi huyễn',
      c: 'Vì chỉ người tại gia mới được phép quán như huyễn',
      d: 'Vì các pháp huyễn thật ra không cần được nhận biết',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Vấn đề không phải là tiến độ học kinh.',
      b: 'Đúng. Lưu ý cuối bài cảnh báo nếu hiểu lầm rồi chấp “thân huyễn, cảnh huyễn, tu học cũng huyễn” thì sẽ bỏ hết việc lành, rất nguy hiểm.',
      c: 'Sai. Đoạn kinh dành cho cả Bồ Tát và chúng sanh đời sau.',
      d: 'Sai. Phật dạy phải biết rõ các pháp là huyễn để tu, không phải phủ nhận việc nhận biết.',
    },
  },
  {
    question: 'Ý chính của câu “Thật tế lý địa bất thọ nhất trần, vạn sự môn trung bất xả nhất pháp” là gì?',
    options: {
      a: 'Ở chỗ chân lý thì không chấp một mảy trần, nhưng ở sự tướng thì không bỏ một pháp tu nào',
      b: 'Khi đã ngộ thì mọi nghi thức tu hành đều vô nghĩa',
      c: 'Chỉ có thiền định mới là con đường duy nhất, các pháp khác không cần',
      d: 'Tu hành phải xa lánh hoàn toàn đời sống thường nhật',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Chỗ lý tánh chân thật không thọ một mảy trần, nhưng về sự tướng tu hành thì không bỏ một pháp nhỏ nào.',
      b: 'Sai. Đoạn này nhấn mạnh không bỏ sự tướng tu hành.',
      c: 'Sai. Tài liệu không giới hạn như vậy.',
      d: 'Sai. Không có nghĩa là xa lánh hoàn toàn đời sống.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-2-chuong-pho-hien',
  slug: 'bai-thu-2-chuong-pho-hien',
  title: 'Bài Thứ 2 - Chương Phổ Hiền',
  type: 'article',
  status: 'published',
  order: 5,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-2-chuong-pho-hien/L%E1%BB%99_tr%C3%ACnh_Ly_huy%E1%BB%85n_Vi%C3%AAn_Gi%C3%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-pho-hien', label: 'II. CHƯƠNG PHỔ HIỀN' },
        { id: 'ngai-pho-hien-hoi-phat', label: '1. Ngài Phổ Hiền hỏi Phật', indent: 1 },
        { id: 'luoc-giai-ngai-pho-hien-hoi-phat', label: 'Lược giải', indent: 2 },
        { id: 'phat-khen-ngai-pho-hien', label: '2. Phật khen Ngài Phổ Hiền', indent: 1 },
        { id: 'luoc-giai-phat-khen-ngai-pho-hien', label: 'Lược giải', indent: 2 },
        { id: 'phat-tra-loi-cho-ngai-pho-hien', label: '3. Phật trả lời cho Ngài Phổ Hiền', indent: 1 },
        { id: 'luoc-giai-phat-tra-loi-cho-ngai-pho-hien', label: 'Lược giải', indent: 2 },
        { id: 'phat-day-cac-phap-tu-de-nhap-vien-giac', label: '4. Phật dạy các pháp tu để nhập Viên Giác', indent: 1 },
        { id: 'luoc-giai-phat-day-cac-phap-tu-de-nhap-vien-giac', label: 'Lược giải', indent: 2 },
        { id: 'phat-day-phuong-phap-ly-huyen', label: '5. Phật dạy phương pháp ly huyễn', indent: 1 },
        { id: 'luoc-giai-phat-day-phuong-phap-ly-huyen', label: 'Lược giải', indent: 2 },
        { id: 'phat-day-giac-ngo-khong-co-tuan-tu', label: '6. Phật dạy: “Giác ngộ” không có tuần tự, “Rời huyễn” chẳng cần phương tiện', indent: 1 },
        { id: 'luoc-giai-phat-day-giac-ngo-khong-co-tuan-tu', label: 'Lược giải', indent: 2 },
        { id: 'phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: '7. Phật nói bài kệ tóm lại các nghĩa trên', indent: 1 },
        { id: 'luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: 'Lược giải', indent: 2 },
        { id: 'luu-y', label: 'Lưu ý', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-2-chuong-pho-hien/Transcending_Illusion.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/bWTfwwKhuIk',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4xKyQnpLegrmaaN8Eo3Gu5?utm_source=generator&si=10f98515df114d3b',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Phổ Hiền',
    passPercentage: 70,
    questions,
  },
}

export default lesson
