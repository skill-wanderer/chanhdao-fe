import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-oai-duc-tu-tai" class="text-2xl font-bold text-primary-700 dark:text-primary-300">VII. CHƯƠNG OAI ĐỨC TỰ TẠI</h2>

    <p>Chương này mở ra một điểm rất quan trọng: Viên Giác vốn không hai, nhưng hành giả đi vào lại có nhiều cửa. Ngài Oai Đức Tự Tại hỏi Phật không phải để tìm một lý thuyết trừu tượng, mà để xin chỉ rõ phương tiện thực hành cho Bồ Tát hiện tại và chúng sanh đời sau.</p>
    <p>Hình ảnh “cái thành lớn có bốn cửa” nói rất gọn ý kinh: đến thành có thể vào từ nhiều cổng, nhưng tất cả đều cùng dẫn về một nơi. Cũng vậy, trở về Viên Giác có thể qua nhiều pháp môn, miễn là đúng căn cơ và đúng cách.</p>

    <h3 id="ngai-oai-duc-tu-tai-bo-tat-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Oai Đức Tự Tại Bồ Tát hỏi Phật</h3>
    <p>Khi ấy Ngài Oai Đức Tự Tại Bồ Tát ở trong đại chúng đứng dậy, đi quanh bên hữu của Phật ba vòng, chắp tay kính cẩn rồi quỳ thẳng bạch rằng:</p>
    <blockquote>
      <p>Bạch đức Đại Bi Thế Tôn, xin Ngài vì chúng con, phân biệt chỉ dạy “phương tiện để nhập Viên Giác tánh của Phật” mà giác tâm được quang minh, chẳng nhơn tu hành mà vẫn được lợi ích lớn.</p>
      <p>Bạch đức Thế Tôn, thí như cái thành lớn có bốn cửa, hành giả muốn vào cửa nào cũng được, đâu phải chỉ có một con đường. Cũng thế, các vị Bồ Tát tu hành, làm trang nghiêm cõi Phật và thành đạo Bồ Đề đâu phải chỉ có một phương tiện. Cúi xin Đức Thế Tôn chỉ dạy các phương tiện tu hành và thứ lớp làm sao, để các vị Bồ Tát trong pháp hội này và chúng sanh đời sau cầu pháp Đại thừa, đều được khai ngộ và mau vào biển Đại tịch diệt của Như Lai.</p>
    </blockquote>
    <p>Ngài Oai Đức Tự Tại Bồ Tát thưa thỉnh như vậy ba lần rồi chắp tay kính cẩn, lễ Phật và trở lui. Câu hỏi này đặt ra cho cả hiện tại lẫn tương lai: làm sao đi vào Viên Giác mà không lạc vào chỗ chấp một phương tiện duy nhất.</p>
    <h4 id="luoc-giai-ngai-oai-duc-tu-tai-bo-tat-hoi-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại ý đoạn này nêu rõ: Thành Viên Giác không hai, nhưng cửa phương tiện thì nhiều. Kinh Lăng Nghiêm nói: “Quy nguyên tánh vô nhị, phương tiện hữu đa môn”. Trở về tánh gốc thì không hai, còn đường vào thì tùy căn cơ mà lập ra nhiều cửa.</p>

    <h3 id="phat-khen-ngai-oai-duc-tu-tai-bo-tat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Oai Đức Tự Tại Bồ Tát</h3>
    <p>Đức Thế Tôn khen câu hỏi này là quý, vì nhờ nó mà người học không lầm tưởng Viên Giác chỉ có một lối vào cứng nhắc. Phật xác nhận rằng điều đáng quý không phải là bàn chuyện cao xa, mà là chỉ thẳng con đường thực hành cho Bồ Tát hiện tại và chúng sanh đời sau.</p>
    <p>Vì vậy, sự tán dương của Phật không phải là lời khen xã giao. Đó là cách xác nhận rằng câu hỏi này đã chạm đúng gốc rễ của vấn đề: nếu chưa tháo được cái gốc luân hồi thì mọi bàn luận về giải thoát đều chỉ mới ở trên mặt lý thuyết.</p>
    <h4 id="luoc-giai-phat-khen-ngai-oai-duc-tu-tai-bo-tat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật khen trước rồi mới khai thị là để nhấn mạnh: người học phải biết kính trọng chỗ hỏi đúng, vì chỗ hỏi đúng mới mở được chỗ đi đúng. Nếu không, dễ rơi vào học pháp chỉ để nhớ chữ mà quên đường tu.</p>

    <h3 id="phat-day-canh-vien-giac-khong-hai-nhung-phuong-tien-vao-co-nhieu-duong" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật dạy: Cảnh “Viên Giác” không hai nhưng phương tiện vào có nhiều đường</h3>
    <p>Phật dạy tánh Viên Giác thanh tịnh trùm khắp mười phương, cùng chư Phật và chúng sanh đồng một bản thể. Xét trên chân tánh thì không có hai; nhưng xét trên căn cơ và bệnh chấp của người học thì phải lập phương tiện.</p>
    <p>Vì trình độ của chúng sanh không đồng, nên cánh cửa đi vào Viên Giác được mở thành ba pháp môn căn bản:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Xa ma tha</strong>: tu chỉ, dừng vọng niệm.</li>
      <li><strong>Tam ma bát đề</strong>: tu quán, soi thấy pháp huyễn.</li>
      <li><strong>Thiền na</strong>: chỉ quán song tu, quân bình định huệ.</li>
    </ul>
    <p>Ba cửa này tuy khác tên, nhưng đều là đường trở về Viên Giác, không có cửa nào là “độc quyền”.</p>
    <h4 id="luoc-giai-phat-day-canh-vien-giac-khong-hai-nhung-phuong-tien-vao-co-nhieu-duong" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ý chính là: Viên Giác không hai, nhưng phương tiện tu hành thì vô lượng. Tóm lại, không ngoài ba pháp môn Chỉ, Quán và Chỉ Quán song tu. Đây là cách kinh chỉ rõ lộ trình để người học khỏi mờ mịt trước quá nhiều cách tu khác nhau.</p>

    <h3 id="tu-phap-xa-ma-tha" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Tu pháp “Xa ma tha” (tu chỉ, tu định)</h3>
    <p>Xa ma tha là pháp an trú trong tịch tĩnh. Hành giả lắng vọng niệm, giữ cái hạnh yên lặng cho đến khi giác quan và vọng thức không còn lay động. Khi ấy trí huệ thanh tịnh phát sinh, thân tâm được thấy như khách trọ, như bụi phủ, như bóng trong gương.</p>
    <p>Đoạn kinh dùng hình ảnh rất cụ thể: khi tâm vắng lặng thì chư Phật trong mười phương hiện ra trong tâm hành giả rõ ràng như bóng hiện trong gương. Tức là không phải đi tìm cái thấy bên ngoài, mà là dọn sạch chỗ vọng bên trong.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Giữ hạnh yên lặng, không chạy theo vọng niệm.</li>
      <li>Khi vọng động lặng xuống thì trí huệ thanh tịnh phát sinh.</li>
      <li>Thấy thân tâm hư vọng, không chấp là thật ngã.</li>
    </ul>
    <h4 id="luoc-giai-tu-phap-xa-ma-tha" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>“Xa ma tha” ở đây là Chỉ của Đại thừa, xứng theo bản thể của chơn tâm mà tu, chứ không phải cái Chỉ chỉ để nén tâm hay trốn cảnh. Dứt vọng niệm thì trí huệ sáng, mà trí huệ sáng thì Viên Giác tự hiện.</p>

    <h3 id="tu-phap-tam-ma-bat-de" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Tu pháp “Tam ma bát đề” (tu quán, tu huệ)</h3>
    <p>Tam ma bát đề là phép quán huyễn. Hành giả quán thân tâm, căn trần, thế giới đều là huyễn hóa; khởi trí như huyễn để trừ huyễn, làm hạnh như huyễn để hóa độ chúng sanh như huyễn. Lòng đại bi vẫn vận hành, nhưng không luyến ái, không nắm giữ.</p>
    <p>Khi quán sâu, cả cảnh huyễn và trí huyễn đều lắng, phi huyễn hiện ra. Kinh dùng hình ảnh mầm cây nảy nở từ lòng đất để nói việc công phu tăng trưởng dần dần, không phải một bước là xong.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Quán các pháp đều là huyễn hóa.</li>
      <li>Dùng trí như huyễn để trừ huyễn.</li>
      <li>Hành hạnh như huyễn để hóa độ chúng sanh như huyễn.</li>
    </ul>
    <h4 id="luoc-giai-tu-phap-tam-ma-bat-de" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Pháp quán này không phải để phủ nhận đời sống, mà để phá chấp đời sống là thật có. Khi ngã chấp và pháp chấp lắng xuống, thấy rõ mọi cảnh chỉ là duyên hợp, thì phi huyễn mới hiện.</p>

    <h3 id="tu-phap-thien-na" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Tu pháp “Thiền na” (chỉ quán đồng thời tu, định huệ song tu)</h3>
    <p>Thiền na là chỗ Chỉ và Quán cùng tu. Ở đây không chấp vào tịch tĩnh của Chỉ, cũng không mắc vào huyễn tướng của Quán. Định và Huệ quân bình, bốn tướng ngã, nhân, chúng sanh, thọ mạng đều lặng, hành giả vẫn ở trong thế giới mà không bị thế giới trói buộc.</p>
    <p>Ví như tiếng “boong” của chuông: tiếng thoát ra ngoài chuông, nhưng không rời chuông. Cũng vậy, Viên Giác vẫn hiện nơi thân tâm và cảnh giới, mà không bị thân tâm và cảnh giới lưu ngại.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Không chấp pháp Chỉ tịch tịnh.</li>
      <li>Không chấp pháp Quán như huyễn.</li>
      <li>Chỉ và Quán đồng thời, định huệ quân bình.</li>
    </ul>
    <h4 id="luoc-giai-tu-phap-thien-na" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Thiền na ở đây là Tĩnh lự, là pháp Chỉ và Quán đều tu. Nếu tách riêng thì Chỉ là Xa ma tha, Quán là Tam ma bát đề; còn Thiền na là chỗ Chỉ Quán dung thông, không mắc vào hai bên.</p>

    <h3 id="tu-phuong-tien-nay-loi-ich-rat-lon" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Tu pháp phương tiện này lợi ích rất lớn</h3>
    <p>Ba pháp môn trên đều là phương tiện nhập Viên Giác. Mười phương chư Phật, chư đại Bồ Tát đều nương đó mà thành đạo. Người học nếu trong một niệm tùy thuận được Viên Giác tánh, lợi ích ấy còn lớn hơn việc giáo hóa muôn ức A La Hán và Bích Chi Phật.</p>
    <p>Đây là chỗ kinh nhắc rất rõ: phương tiện tuy là cửa vào, nhưng nếu nắm đúng phương tiện thì lợi ích không thể nghĩ bàn. Hành giả không cần tìm một con đường đặc biệt khác, chỉ cần đi đúng cửa mà mình đang đứng trước.</p>
    <h4 id="luoc-giai-tu-phuong-tien-nay-loi-ich-rat-lon" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Tùy thuận Viên Giác nghĩa là không khởi thêm một cái thấy riêng để đối đầu với chân tánh. Khi công phu khớp với bản thể không hai, lợi ích vượt xa việc chỉ làm được những việc lớn trên mặt hiện tượng.</p>

    <h3 id="phat-noi-bai-ke-tom-lai-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">8. Phật nói bài kệ tóm lại nghĩa trên</h3>
    <p>Đức Thế Tôn dùng bài kệ để gom lại toàn bộ ý chính của chương: Viên Giác không hai, nhưng phương tiện tu có ba cửa lớn. Người học phải biết nương phương tiện mà đi, chứ đừng chấp phương tiện làm cứu cánh.</p>
    <div class="space-y-1 italic">
      <p>Oai Đức! ông nên biết:</p>
      <p>Viên Giác tánh không hai,</p>
      <p>Phương tiện tu có nhiều.</p>
      <p>Như Lai tóm chỉ bày</p>
      <p>Không ngoài ba pháp này:</p>
      <p>Tu pháp “Chỉ” vắng lặng</p>
      <p>Như bóng chiếu trong gương.</p>
      <p>Tu pháp “Quán” như huyễn,</p>
      <p>Như mộng, mầm chồi lớn dần.</p>
      <p>Chỉ, Quán đồng thời tu,</p>
      <p>Như tiếng “boong” của chuông.</p>
      <p>Ba pháp môn mầu nhiệm,</p>
      <p>Đều tùy thuận Viên Giác.</p>
      <p>Mười phương các đức Phật,</p>
      <p>Và các đại Bồ Tát,</p>
      <p>Nhờ đây được thành đạo,</p>
      <p>Rốt ráo chứng Niết bàn.</p>
    </div>
    <h4 id="luoc-giai-phat-noi-bai-ke-tom-lai-nghia-tren" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bài kệ chốt lại hai tầng nghĩa: trên mặt lý thì không có hai, trên mặt sự thì có ba pháp môn để ứng cơ. Người học nếu biết nương phương tiện mà đi, rồi buông chấp phương tiện, thì mới thật sự bước vào Viên Giác.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Trong lời thưa hỏi của Ngài Oai Đức Tự Tại Bồ Tát, ông đã dùng hình ảnh nào để ví dụ cho tính chất đa dạng của các phương tiện tu hành?",
    "options": {
      "a": "Nhiều dòng sông cùng đổ về biển lớn.",
      "b": "Một ngọn đuốc soi sáng bóng đêm.",
      "c": "Mầm cây nảy nở từ lòng đất.",
      "d": "Một cái thành lớn có bốn cửa vào."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Hình ảnh này không được đề cập.",
      "b": "Sai. Không có hình ảnh ngọn đuốc trong lời thỉnh cầu của Bồ Tát.",
      "c": "Sai. Mầm cây là ví dụ dùng cho pháp Tam ma bát đề.",
      "d": "Đúng. Ngài thưa rằng thí như cái thành lớn Viên Giác có bốn cửa, hành giả muốn vào cửa nào cũng được [1]."
    }
  },
  {
    "question": "Theo lời Phật dạy, tại sao lại có vô lượng phương tiện để nhập vào tánh Viên Giác dù bản thể là không hai?",
    "options": {
      "a": "Vì tánh Viên Giác luôn biến đổi theo thời gian.",
      "b": "Vì trình độ và căn cơ của chúng sanh không đồng đều.",
      "c": "Vì các cõi Phật khác nhau đòi hỏi các cách tu khác nhau.",
      "d": "Vì mỗi vị Phật có một phương pháp giảng dạy riêng biệt."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Tánh Viên Giác vốn bình đẳng không khác [1].",
      "b": "Đúng. Phật dạy vì trình độ của chúng sanh không đồng, nên các phương tiện trở về tánh Viên Giác có sai khác [1].",
      "c": "Sai. Kinh không giải thích lý do từ sự khác biệt của các cõi Phật.",
      "d": "Sai. Phương tiện khác biệt là do chúng sanh, không phải do phương pháp riêng của từng vị Phật."
    }
  },
  {
    "question": "Đặc điểm chính của phương pháp tu \"Xa ma tha\" (tu chỉ) là gì?",
    "options": {
      "a": "Sử dụng trí huệ để cứu độ chúng sanh trong mộng huyễn.",
      "b": "Giữ hạnh yên lặng, lóng các vọng niệm để trí huệ thanh tịnh phát sanh.",
      "c": "Không chấp vào cả tịch tịnh lẫn huyễn hóa.",
      "d": "Quán sát thế giới và thân tâm đều là huyễn hóa."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Đây là đặc điểm của pháp quán (Tam ma bát đề).",
      "b": "Đúng. Phật dạy y theo tâm Viên Giác thanh tịnh này mà giữ cái hạnh yên lặng và lóng các vọng niệm để trí huệ thanh tịnh phát sanh [2].",
      "c": "Sai. Đây là đặc điểm của pháp Thiền na.",
      "d": "Sai. Quán sát huyễn hóa thuộc về Tam ma bát đề."
    }
  },
  {
    "question": "Phật ví dụ kết quả của pháp tu \"Xa ma tha\" giống như hiện tượng nào sau đây?",
    "options": {
      "a": "Mặt trăng chiếu rọi trên dòng nước đục.",
      "b": "Tiếng chuông ngân vang thoát ra ngoài vỏ chuông.",
      "c": "Ánh chớp lóe lên trong bầu trời đêm.",
      "d": "Vạn vật soi bóng rõ ràng trong gương."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Không có ví dụ này.",
      "b": "Sai. Tiếng chuông là ví dụ cho pháp tu Thiền na.",
      "c": "Sai. Ánh chớp không phải là kết quả của Xa ma tha.",
      "d": "Đúng. Khi tâm vắng lặng, chư Phật trong mười phương hiện ra trong tâm hành giả rõ ràng như bóng hiện trong gương [2]."
    }
  },
  {
    "question": "Trong pháp tu \"Tam ma bát đề\", hành giả cần đạt đến trạng thái nào để hoàn thành pháp quán?",
    "options": {
      "a": "Hoàn toàn xa lìa các tướng huyễn để tánh phi huyễn hiện ra.",
      "b": "Tập trung vào việc tiêu diệt hoàn toàn thân xác vật lý.",
      "c": "Đạt được sự vắng lặng tuyệt đối không còn nghe thấy gì.",
      "d": "Chỉ dừng lại ở việc thấy chúng sanh là huyễn để không đau khổ."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Hành giả quán đến cuối cùng hoàn toàn xa lìa các tướng huyễn để cái phi huyễn hiện ra, đó là hoàn thành pháp quán [3].",
      "b": "Sai. Phật giáo không dạy việc tiêu diệt thân xác vật lý.",
      "c": "Sai. Vắng lặng tuyệt đối nghiêng về Xa ma tha.",
      "d": "Sai. Quán huyễn là để hành Bồ tát đạo, cứu độ chúng sanh chứ không chỉ để bản thân không đau khổ [3]."
    }
  },
  {
    "question": "Sự khác biệt giữa \"Chỉ, Quán\" của Đại thừa trong kinh này so với Tiểu thừa là gì?",
    "options": {
      "a": "Đại thừa chỉ dành cho các vị Bồ Tát đã thành Phật.",
      "b": "Xứng theo bản thể của chơn tâm mà tu, thay vì dùng phương tiện bên ngoài.",
      "c": "Tiểu thừa chỉ tu quán mà không tu chỉ.",
      "d": "Đại thừa không cần phải ngồi thiền hay giữ giới."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Đại thừa dành cho cả Bồ Tát hiện tại và chúng sanh đời sau cầu pháp [1].",
      "b": "Đúng. Lối Chỉ, Quán của Đại thừa là xứng theo bản thể của chơn tâm mà Chỉ và Quán, khác với Tiểu thừa phải dùng phương tiện bên ngoài [2].",
      "c": "Sai. Cả hai thừa đều có thể tu chỉ và quán.",
      "d": "Sai. Đại thừa vẫn coi trọng phương tiện tu nhưng lấy chơn tâm làm gốc."
    }
  },
  {
    "question": "Pháp tu \"Thiền na\" được mô tả như thế nào để phân biệt với hai pháp trước?",
    "options": {
      "a": "Chỉ tập trung vào việc tiêu diệt bốn tướng: ngã, nhơn, chúng sanh, thọ mạng.",
      "b": "Là sự kết hợp nhịp nhàng giữa Định và Huệ, không bị kẹt vào các tướng đối đãi.",
      "c": "Là phương pháp dành riêng cho người có trí tuệ thấp kém.",
      "d": "Chỉ chú trọng vào việc hưởng thụ sự nhẹ nhàng thư thái (khinh an)."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Việc tiêu diệt bốn tướng là kết quả, không phải là phương pháp cốt lõi để phân biệt.",
      "b": "Đúng. Thiền na là Chỉ và Quán đều tu, khiến cho Định và Huệ được quân bình, không chấp thủ pháp Quán như huyễn và pháp Chỉ tịch tịnh [4].",
      "c": "Sai. Thiền na là phương pháp tu Đại thừa mầu nhiệm.",
      "d": "Sai. Khinh an có ở cả Xa ma tha và Tam ma bát đề [2, 3]."
    }
  },
  {
    "question": "Ví dụ về tiếng vang của chuông thoát ra ngoài chuông dùng để minh họa điều gì trong pháp Thiền na?",
    "options": {
      "a": "Âm thanh của giáo pháp có thể truyền đi rất xa.",
      "b": "Tánh Viên Giác không bị ngăn ngại bởi thân tâm và thế giới dù đang hiện hữu trong đó.",
      "c": "Sự trống rỗng của vạn vật giống như lòng chuông.",
      "d": "Phải có sự tác động từ bên ngoài (gõ chuông) thì tính giác mới hiện."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Ví dụ không nhằm nói về sự lan truyền của giáo pháp.",
      "b": "Đúng. Tánh Viên giác vẫn thọ dụng thế giới và thân tâm mà không bị cảnh trần ràng buộc, thí như tiếng chuông tuy ở nơi chuông mà vẫn thoát ra ngoài chuông [4].",
      "c": "Sai. Ví dụ nhấn mạnh sự không ngăn ngại, vượt ra ngoài chướng ngại [4].",
      "d": "Sai. Tánh Viên Giác vốn sẵn có."
    }
  },
  {
    "question": "Theo phần Lược giải cuối bài, pháp \"Thiền na\" tương ứng với phép quán nào trong Tam Quán?",
    "options": {
      "a": "Duy tâm quán, dựa theo tâm thức để tu hành.",
      "b": "Không quán, dựa theo Chơn đế để tu hành.",
      "c": "Giả quán, dựa theo Tục đế để tu hành.",
      "d": "Trung quán, dựa theo Trung đế để tu hành."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Duy tâm quán không nằm trong ba pháp của kinh này.",
      "b": "Sai. Không quán tương ứng với Xa ma tha [5].",
      "c": "Sai. Giả quán tương ứng với Tam ma bát đề [5].",
      "d": "Đúng. Thiền na là Nhị biên phân biệt chỉ, tức là Trung quán, y theo Trung đế để mà tu [5]."
    }
  },
  {
    "question": "Đức Phật so sánh lợi ích của việc tùy thuận tu tập pháp môn Viên Giác trong giây phút với việc gì?",
    "options": {
      "a": "Bố thí ngọc ngà châu báu đầy khắp thế giới.",
      "b": "Xây dựng hàng vạn ngôi bảo tháp bằng vàng.",
      "c": "Trải qua vô số kiếp khổ hạnh trong rừng sâu.",
      "d": "Giáo hóa được muôn ức vị A La Hán và Bích Chi Phật."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Ví dụ này thường xuất hiện trong kinh Kim Cang, không phải trong đoạn này.",
      "b": "Sai. Không được nhắc tới trong bài học.",
      "c": "Sai. Khổ hạnh không được đem ra so sánh ở đây.",
      "d": "Đúng. Phật dạy lợi ích của việc hóa độ muôn ức vị A La Hán và Bích Chi Phật không bằng lợi ích của việc chỉ trong giây phút tùy thuận và tu tập pháp môn Viên Giác [4]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-7-chuong-oai-duc-tu-tai',
  slug: 'bai-thu-7-chuong-oai-duc-tu-tai',
  title: 'Bài Thứ 7 - Chương Oai Đức Tự Tại',
  type: 'article',
  status: 'draft',
  order: 10,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-7-chuong-oai-duc-tu-tai/Ba_n%E1%BA%BBo_%C4%91%C6%B0%E1%BB%9Dng_gi%C3%A1c_ng%E1%BB%99.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-oai-duc-tu-tai', label: 'VII. CHƯƠNG OAI ĐỨC TỰ TẠI' },
        { id: 'ngai-oai-duc-tu-tai-bo-tat-hoi-phat', label: '1. Ngài Oai Đức Tự Tại Bồ Tát hỏi Phật', indent: 1 },
        { id: 'luoc-giai-ngai-oai-duc-tu-tai-bo-tat-hoi-phat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-khen-ngai-oai-duc-tu-tai-bo-tat', label: '2. Phật khen Ngài Oai Đức Tự Tại Bồ Tát', indent: 1 },
        { id: 'luoc-giai-phat-khen-ngai-oai-duc-tu-tai-bo-tat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-day-canh-vien-giac-khong-hai-nhung-phuong-tien-vao-co-nhieu-duong', label: '3. Phật dạy: Cảnh “Viên Giác” không hai nhưng phương tiện vào có nhiều đường', indent: 1 },
        { id: 'luoc-giai-phat-day-canh-vien-giac-khong-hai-nhung-phuong-tien-vao-co-nhieu-duong', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'tu-phap-xa-ma-tha', label: '4. Tu pháp “Xa ma tha” (tu chỉ, tu định)', indent: 1 },
        { id: 'luoc-giai-tu-phap-xa-ma-tha', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'tu-phap-tam-ma-bat-de', label: '5. Tu pháp “Tam ma bát đề” (tu quán, tu huệ)', indent: 1 },
        { id: 'luoc-giai-tu-phap-tam-ma-bat-de', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'tu-phap-thien-na', label: '6. Tu pháp “Thiền na” (chỉ quán đồng thời tu, định huệ song tu)', indent: 1 },
        { id: 'luoc-giai-tu-phap-thien-na', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'tu-phuong-tien-nay-loi-ich-rat-lon', label: '7. Tu pháp phương tiện này lợi ích rất lớn', indent: 1 },
        { id: 'luoc-giai-tu-phuong-tien-nay-loi-ich-rat-lon', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-noi-bai-ke-tom-lai-nghia-tren', label: '8. Phật nói bài kệ tóm lại nghĩa trên', indent: 1 },
        { id: 'luoc-giai-phat-noi-bai-ke-tom-lai-nghia-tren', label: 'LƯỢC GIẢI', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-7-chuong-oai-duc-tu-tai/Gates_of_Perfect_Enlightenment.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/gjJVK9qXmPw',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/2cPZ5uwsUNOOq3MCv0y3Wq?utm_source=generator&si=f51ef5b9301a4c79',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Oai Đức Tự Tại',
    passPercentage: 70,
    questions,
  },
}

export default lesson
