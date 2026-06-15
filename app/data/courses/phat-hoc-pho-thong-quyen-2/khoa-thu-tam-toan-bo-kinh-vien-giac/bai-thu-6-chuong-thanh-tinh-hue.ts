import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-thanh-tinh-hue" class="text-2xl font-bold text-primary-700 dark:text-primary-300">VI. CHƯƠNG THANH TỊNH HUỆ</h2>

    <p>Chương này đi thẳng vào câu hỏi trung tâm của người học đạo: từ phàm phu đến Phật phải đi qua những địa vị nào, và vì sao Viên Giác vốn không có thủ, không có chứng mà trên mặt tu hành vẫn thấy có lớp lang. Ngài Thanh Tịnh Huệ đứng ra thưa hỏi chính là để mở sáng con đường hạ thủ công phu cho người hiện tại và đời sau.</p>
    <p>Điểm xuyên suốt của chương là: đứng trên lý tánh Viên Giác thì bình đẳng, không hai; nhưng đứng trên sự tu thì vẫn cần phân ra phàm phu, Tam hiền, Thánh địa và quả Phật. Chỗ này nếu hiểu không khéo sẽ rơi vào chấp lý bỏ sự, hoặc chấp sự quên lý.</p>

    <h3 id="ngai-thanh-tinh-hue-bo-tat-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Thanh Tịnh Huệ Bồ tát hỏi Phật</h3>
    <p>Ngài Thanh Tịnh Huệ đảnh lễ rồi thưa Phật xin chỉ dạy thứ lớp tu chứng của Như Lai như thế nào, để chúng sanh hiện tại và đời sau nghe pháp mà biết cách tùy thuận vào tánh Viên Giác. Câu hỏi này không phải để tìm hiểu lý thuyết, mà là để người tu có một lộ trình rõ ràng, không bị mơ hồ trên đường vào đạo.</p>
    <p>Trong lược giải, Thanh Tịnh Huệ là trí huệ thanh tịnh, tức Bát nhã huệ. Chương này và các chương sau đều nhấn mạnh việc hạ thủ công phu, nên ngay từ đầu đã mượn hình ảnh Ngài Thanh Tịnh Huệ để biểu trưng cho trí huệ dẫn đường.</p>
    <h4 id="luoc-giai-ngai-thanh-tinh-hue-bo-tat-hoi-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ý chính là: muốn tu đạo, trước hết phải biết thứ lớp tu chứng; biết rồi mới khỏi lầm đường. Bát nhã huệ không phải chỉ là hiểu biết, mà là khả năng soi đường cho toàn bộ công phu.</p>

    <h3 id="phat-khen-ngai-thanh-tinh-hue-bo-tat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Thanh Tịnh Huệ Bồ tát</h3>
    <p>Đức Thế Tôn khen câu hỏi ấy là quý, vì nó lợi ích cho không chỉ Bồ tát hiện tại mà còn cho chúng sanh đời sau. Rồi Phật dặn đại chúng phải chăm chú nghe, vì pháp môn Viên Giác thanh tịnh không thể hiểu bằng tâm tán loạn hay suy nghĩ quen lối đối đãi.</p>
    <h4 id="luoc-giai-phat-khen-ngai-thanh-tinh-hue-bo-tat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật khen trước rồi mới khai thị là để xác nhận câu hỏi đã chạm đúng gốc của vấn đề: nếu chưa thấy rõ chỗ tu chứng, người học rất dễ biến con đường giải thoát thành một mớ khái niệm suông.</p>

    <h3 id="phat-day-trong-vien-giac-khong-co-bo-tat-va-chung-sanh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật dạy: Trong Viên Giác không có Bồ tát và chúng sanh</h3>
    <p>Phật nói trong tánh Viên Giác thanh tịnh vốn không thủ, không chứng. Bồ tát và chúng sanh đều là huyễn hóa; khi huyễn hóa đã diệt thì không còn người năng chứng và quả sở chứng. Nói cách khác, trên mặt thật tướng, không có hai bên đối đãi để bám chấp.</p>
    <p>Đức Phật dùng ví dụ con mắt: mắt thấy được mọi vật nhưng không tự thấy chính mình. Tánh Viên Giác cũng vậy, tùy duyên hiện khắp mà không khởi ý chiếm giữ, không lập ra một cái ta đang chứng đắc.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Không có năng thủ, sở thủ.</li>
      <li>Không có năng chứng, sở chứng.</li>
      <li>Bồ tát và chúng sanh đều là tướng huyễn.</li>
    </ul>
    <h4 id="luoc-giai-phat-day-trong-vien-giac-khong-co-bo-tat-va-chung-sanh" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đây là mặt lý tánh. Khi còn đứng trong đối đãi thì còn thấy có hơn kém, có chứng và có đắc; còn đứng trong Viên Giác thì tất cả đều bình đẳng như nhau.</p>

    <h3 id="pham-phu-tuy-thuan-tanh-vien-giac-dia-vi-thap-tin" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Phàm phu tùy thuận tánh Viên Giác (địa vị Thập tín)</h3>
    <p>Chúng sanh từ vô thỉ đến nay lầm chấp có “thật ta” và “vật của ta”, nên gặp cảnh nghịch thì giận ghét, gặp cảnh thuận thì tham ái, say mê ngũ dục. Khi gặp thiện tri thức chỉ dạy, họ mới ngộ rằng thân tâm này chỉ là trần lao vọng lự, mỗi niệm sanh diệt không thật có một cái ngã cố định.</p>
    <p>Nhưng ở giai đoạn này, dù đã đoạn trừ được những chấp trước thô, hành giả vẫn còn bị “cái biết thanh tịnh” làm chướng. Đó là chỗ pháp chấp còn vi tế, nên gọi là phàm phu tùy thuận tánh Viên Giác, tức hàng Thập tín.</p>
    <h4 id="luoc-giai-pham-phu-tuy-thuan-tanh-vien-giac-dia-vi-thap-tin" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Thập tín là bước đầu đoạn ngã chấp. Tuy đã biết thân tâm là hư vọng, nhưng nếu còn bám vào cái “biết thanh tịnh” thì vẫn chưa thật tự tại với Viên Giác.</p>

    <h3 id="bo-tat-o-vi-tam-hien-tuy-thuan-tanh-vien-giac" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Bồ tát ở vị Tam hiền, tùy thuận tánh Viên Giác</h3>
    <p>Các vị Bồ tát ở Tam hiền đã vượt được cái biết thanh tịnh thô hơn, nhưng vẫn còn trụ ở cái “giác”. Nghĩa là tuy không còn mê theo cảnh, nhưng vẫn còn nương vào một chỗ sở trụ vi tế, nên tánh Viên Giác chưa hoàn toàn hiện bày tự tại.</p>
    <p>Tam hiền gồm Thập trụ, Thập hạnh và Thập hồi hướng. Đây là giai đoạn công phu đã sâu hơn, nhưng vẫn còn lớp chướng mỏng của pháp chấp và cái thấy “ta đang giác”.</p>
    <h4 id="luoc-giai-bo-tat-o-vi-tam-hien-tuy-thuan-tanh-vien-giac" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chỗ khó ở đây là rời được cái thô mà vẫn còn mắc cái vi tế. Người tu càng tinh vi thì chấp trước càng khó nhận ra, nên chương này đặc biệt nhấn mạnh chỗ “còn trụ ở cái giác”.</p>

    <h3 id="bo-tat-len-thanh-vi-tuy-thuan-tanh-vien-giac" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Bồ tát lên thánh vị, tùy thuận tánh Viên Giác</h3>
    <p>Đến Thánh địa, năng chiếu và sở chiếu đồng thời vắng lặng. Bồ tát dùng tâm chướng ngại để diệt trừ chướng ngại, nhưng khi chướng ngại hết rồi thì cả người năng diệt cũng không còn. Đó là chỗ “dĩ vọng diệt vọng”, không còn thêm một cái ngã nào đứng phía sau để nắm kết quả.</p>
    <p>Phật lại dạy rằng kinh giáo của Như Lai chỉ như ngón tay chỉ mặt trăng. Hành giả phải nhờ ngón tay để thấy trăng, nhưng đừng chấp ngón tay là cứu cánh. Khi nhận được mặt trăng Viên Giác rồi, mới thật là vào Thánh địa.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Năng và sở đều lặng.</li>
      <li>Phương tiện chỉ để dẫn vào chân lý.</li>
      <li>Chớ chấp giáo pháp như cứu cánh riêng.</li>
    </ul>
    <h4 id="luoc-giai-bo-tat-len-thanh-vi-tuy-thuan-tanh-vien-giac" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Thánh vị là chỗ đã vượt qua cái chấp “ta đang tu”, nhưng vẫn phải nhớ kinh giáo chỉ là phương tiện. Nếu bám vào phương tiện thì không bao giờ chạm được chân lý.</p>

    <h3 id="nhu-lai-tuy-thuan-tanh-vien-giac" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Như Lai tùy thuận tánh Viên Giác</h3>
    <p>Ở quả vị Phật, tất cả những cặp đối đãi đều được nhìn bằng một tâm bình đẳng: chánh niệm hay vọng niệm, trì giới hay phá giới, trí huệ hay ngu si, Bồ tát hay ngoại đạo, hữu tình hay vô tình. Tất cả đều được soi bằng biển huệ pháp giới, nên phiền não cũng không còn là phiền não theo nghĩa thông thường.</p>
    <p>Đây không phải là lẫn lộn đúng sai, mà là thấy rõ mọi pháp đồng một bản thể. Khi toàn bộ đối đãi đã tan, Như Lai gọi đó là tùy thuận tánh Viên Giác.</p>
    <h4 id="luoc-giai-nhu-lai-tuy-thuan-tanh-vien-giac" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Từ Thập tín đến Thánh địa còn thấy có chướng và có bỏ chướng; đến quả Phật thì thấy tất cả pháp đồng một bản thể, không còn biên giới cho tâm đối đãi.</p>

    <h3 id="tong-lai-bai-thu-6-chuong-thanh-tinh-hue" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">8. Tóm lại</h3>
    <p>Phật dạy trọng tâm thực hành rất gọn: trong tất cả thời, đừng khởi vọng niệm phân biệt; đối với vọng tâm cũng chẳng cần thêm ý diệt trừ; ở cảnh vọng tưởng thì đừng thêm phân biệt; ở nơi không rõ biết thì cũng chớ cố phân biệt chơn thật. Người nghe được như vậy mà không kinh hãi, trái lại sanh lòng tin chắc và giữ gìn phụng trì, đó chính là người tùy thuận tánh Viên Giác.</p>
    <p>Những người làm được như vậy là do căn lành đã trồng sâu qua nhiều đời, từng cúng dường chư Phật và Bồ tát nhiều như cát sông Hằng. Vì thế Phật ấn chứng cho họ sẽ thành tựu Nhất thiết chủng trí.</p>
    <h4 id="luoc-giai-tong-lai-bai-thu-6-chuong-thanh-tinh-hue" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Điểm then chốt là không chạy theo vọng niệm. Khi vọng niệm không khởi, tham sân si không khởi; ba nghiệp không tạo, sanh tử không còn, chơn tâm tự hiện.</p>

    <h3 id="phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">9. Phật nói bài kệ tóm lại các nghĩa trên</h3>
    <p>Đức Thế Tôn dùng bài kệ để gom lại toàn bộ ý của chương: Viên mãn tánh Bồ đề vốn không thủ, không chứng; khi còn mê thì thấy có thứ lớp, khi đã ngộ thì mọi thứ lớp chỉ là phương tiện dẫn vào một vị giải thoát duy nhất.</p>
    <div class="space-y-1 italic">
      <p>Thanh Tịnh Huệ! phải biết:</p>
      <p>Viên mãn tánh Bồ đề</p>
      <p>Không còn thủ và chứng,</p>
      <p>Không Bồ tát, chúng sanh.</p>
      <p>Giác và khi chưa giác</p>
      <p>Thứ lớp có sai khác:</p>
      <p>Chúng sanh bị “biết” ngại (Thập tín)</p>
      <p>Bồ tát bị “giác” ngại (Tam hiền)</p>
      <p>Thánh địa hằng vắng lặng (Thập thánh)</p>
      <p>Vì không trụ các tướng,</p>
      <p>Viên mãn quả Đại giác,</p>
      <p>Nên gọi “khắp tùy thuận” (Phật)</p>
      <p>Các chúng sanh đời sau,</p>
      <p>Tâm chẳng sanh hư vọng,</p>
      <p>Ta nói chúng sanh này,</p>
      <p>Hiện đời là Bồ tát</p>
      <p>Vì cúng dường chư Phật,</p>
      <p>Công đức đã viên mãn</p>
      <p>Tuy có nhiều phương tiện,</p>
      <p>Cũng đều tùy thuận Giác.</p>
    </div>
    <h4 id="luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bài kệ chốt lại hai tầng nghĩa: trên mặt lý thì không có Bồ tát và chúng sanh; trên mặt sự thì vẫn có thứ lớp tu chứng. Người học đạo phải biết nương phương tiện mà đi, nhưng đừng chấp phương tiện làm cứu cánh.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong chương Thanh Tịnh Huệ, Ngài Thanh Tịnh Huệ Bồ tát đại diện cho loại trí huệ nào?',
    options: {
      a: 'Hữu lậu huệ',
      b: 'Bát nhã huệ',
      c: 'Phân biệt huệ',
      d: 'Thế gian huệ',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tài liệu không nhắc đến việc đại diện cho Hữu lậu huệ [1].',
      b: 'Đúng. Theo phần lược giải, Thanh Tịnh Huệ là trí huệ thanh tịnh, tức là Bát nhã huệ, dùng để lãnh đạo công phu tu hành [1].',
      c: 'Sai. Ngài không tiêu biểu cho phân biệt huệ [1].',
      d: 'Sai. Trí huệ thế gian không phải là ý nghĩa của danh hiệu này [1].',
    },
  },
  {
    question: 'Vì sao trong tánh Viên Giác lại không có Bồ tát và chúng sanh?',
    options: {
      a: 'Vì tánh Viên Giác là một cõi giới trống rỗng',
      b: 'Vì tánh Viên Giác chỉ dành riêng cho chư Phật',
      c: 'Vì Bồ tát đã tiêu diệt hết chúng sanh',
      d: 'Vì Bồ tát và chúng sanh đều là tướng huyễn hóa',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tánh Viên Giác không phải là sự trống rỗng mà nó tùy duyên biến hiện ra đủ tất cả [2].',
      b: 'Sai. Tài liệu không đề cập Viên Giác chỉ dành riêng cho Phật [2].',
      c: 'Sai. Không có chi tiết này trong kinh [2].',
      d: 'Đúng. Phật dạy trong thật tướng không có Bồ tát và chúng sanh, bởi cả hai đều là huyễn hóa [2].',
    },
  },
  {
    question: 'Phật dùng ví dụ nào để chỉ việc tánh Viên Giác bình đẳng chiếu soi mà không tự thấy mình?',
    options: {
      a: 'Con mắt thấy vật mà không tự thấy mình',
      b: 'Cây đờn phát ra tiếng mà không có bản nhạc',
      c: 'Mặt trời soi sáng mà không cần hơi ấm',
      d: 'Dòng nước chảy mà không biết mình đi đâu',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Phật đưa ra ví dụ "Thí như con mắt, thấy được tất cả vật, mà không tự thấy mình" để chỉ sự bình đẳng và vô công dụng của Viên Giác [2].',
      b: 'Sai. Cây đờn là ví dụ minh họa việc tánh Viên Giác tùy duyên biến hiện chứ không phải minh họa việc bình đẳng không tự thấy [2].',
      c: 'Sai. Đây không phải là ví dụ Phật dùng trong đoạn này [2].',
      d: 'Sai. Tài liệu không có ví dụ này [2].',
    },
  },
  {
    question: 'Đối với hàng Phàm phu (địa vị Thập tín), cái gì được gọi là "chướng ngại" khiến họ chưa tự tại với tánh Viên Giác?',
    options: {
      a: 'Sự giận ghét cảnh nghịch',
      b: 'Lòng tham ái và ngũ dục',
      c: 'Cái biết thanh tịnh',
      d: 'Sự ngu si không biết chữ',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Sự giận ghét cảnh nghịch là trần lao vọng lự mà họ đã đoạn trừ được [3].',
      b: 'Sai. Tham ái ngũ dục cũng là điều hàng phàm phu tùy thuận đã nhìn nhận được là hư vọng [3].',
      c: 'Đúng. Tuy ngộ pháp giới thanh tịnh, nhưng họ chưa tự tại do còn bị "cái biết thanh tịnh" (pháp chấp) làm chướng ngại [3].',
      d: 'Sai. Chi tiết này không có trong tài liệu [3].',
    },
  },
  {
    question: 'Bồ tát ở vị Tam hiền (Thập trụ, Thập hạnh, Thập hồi hướng) còn bị kẹt ở trạng thái nào?',
    options: {
      a: 'Còn trụ ở cái "giác"',
      b: 'Còn bị cảnh ngũ dục lôi kéo',
      c: 'Còn lầm tưởng có "thật ta"',
      d: 'Còn phân biệt giữa địa ngục và thiên đường',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Bồ tát Tam hiền tuy đoạn được chướng ngại cũ nhưng vẫn "còn trụ ở cái giác", nên tánh Viên Giác chưa tự tại [3].',
      b: 'Sai. Sự lôi kéo của ngũ dục là lỗi của hàng chưa khai ngộ [3].',
      c: 'Sai. Lầm tưởng "thật ta" là mê lầm của chúng sanh từ vô thỉ đã được đoạn ở vị Thập tín [3].',
      d: 'Sai. Không được nhắc tới trong trạng thái của vị Tam hiền [3].',
    },
  },
  {
    question: 'Ví dụ "tự chặt đầu mình" trong chương này dùng để minh họa điều gì ở vị Thánh địa?',
    options: {
      a: 'Sự quyết tâm tu hành không lùi bước',
      b: 'Sự đau đớn khi đoạn trừ phiền não',
      c: 'Sự hy sinh thân mình vì chúng sanh',
      d: 'Năng chiếu và sở chiếu đồng vắng lặng',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Ví dụ này không dùng để diễn tả sự quyết tâm [4].',
      b: 'Sai. Không mang ý nghĩa nói về nỗi đau đớn [4].',
      c: 'Sai. Không phải là sự hy sinh [4].',
      d: 'Đúng. Bồ tát tự dùng tâm chướng ngại diệt trừ chướng ngại, diệt hết thì người năng diệt cũng mất, như người tự chặt đầu mình, đầu rụng thì không có người chặt và kẻ bị chặt, tức năng và sở đồng vắng lặng [4].',
    },
  },
  {
    question: 'Kinh giáo của Như Lai được ví với vật gì để chỉ cho chân lý Viên Giác?',
    options: {
      a: 'Chiếc bè qua sông',
      b: 'Cơn mưa tưới mát đất khô',
      c: 'Ngọn đèn trong đêm tối',
      d: 'Ngón tay chỉ mặt trăng',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Trong đoạn này kinh giáo không được ví như chiếc bè [4].',
      b: 'Sai. Cơn mưa không phải là ví dụ được đưa ra [4].',
      c: 'Sai. Không có ví dụ ngọn đèn [4].',
      d: 'Đúng. Tất cả kinh giáo được ví như ngón tay (phương tiện) chỉ mặt trăng Viên Giác (chân lý), hành giả phải nương theo để thấy trăng [4].',
    },
  },
  {
    question: 'Ở quả vị Như Lai tùy thuận tánh Viên Giác, "phiền não" được nhìn nhận như thế nào?',
    options: {
      a: 'Là nguyên nhân gây ra đau khổ',
      b: 'Là rốt ráo giải thoát',
      c: 'Là thứ cần phải tiêu diệt vĩnh viễn',
      d: 'Là những chướng ngại không thể vượt qua',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ở quả vị này, phiền não không còn được xem là nguyên nhân đau khổ [4].',
      b: 'Đúng. Ở quả vị Phật, biển huệ pháp giới chiếu soi, nên nhận thấy "tất cả phiền não là rốt ráo giải thoát" [4].',
      c: 'Sai. Không phải tiêu diệt vì tất cả pháp đồng một bản thể [4].',
      d: 'Sai. Chúng không phải là chướng ngại nữa mà "chướng ngại tức là Cứu kính giác" [4].',
    },
  },
  {
    question: 'Phương pháp hạ thủ công phu cốt yếu nhất được Phật dạy ở đoạn 8 là gì?',
    options: {
      a: 'Học thuộc tất cả các kinh điển',
      b: 'Trong tất cả thời không khởi vọng niệm',
      c: 'Trốn tránh các cảnh giới vọng tưởng',
      d: 'Phải nỗ lực diệt trừ mọi vọng tâm',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phật không yêu cầu phải học thuộc kinh điển làm công phu [5].',
      b: 'Đúng. Cốt yếu nhất là "chỉ trong tất cả thì giờ không khởi vọng niệm phân biệt", điều này giúp ba độc không sanh và đạt tùy thuận tánh Viên Giác [5].',
      c: 'Sai. Phật dạy đối với cảnh vọng tưởng chẳng gia thêm phân biệt, chứ không bảo trốn tránh [5].',
      d: 'Sai. Phật nhấn mạnh "đối với các vọng tâm cũng chẳng cần diệt trừ" [5].',
    },
  },
  {
    question: 'Vì sao một người có thể tin chắc và không kinh hãi khi nghe pháp môn Viên Giác này?',
    options: {
      a: 'Vì họ đã chán ghét cuộc sống thế gian',
      b: 'Vì họ là những người có trí thông minh tuyệt đỉnh',
      c: 'Vì đã nhiều đời cúng dường chư Phật và trồng thiện căn',
      d: 'Vì họ chưa bao giờ gặp phải phiền não',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Sự chán ghét không phải nguyên nhân được kinh nêu [5].',
      b: 'Sai. Trí thông minh không được nhắc đến làm căn cứ [5].',
      c: 'Đúng. Những người lãnh thọ được pháp môn này là do đã tu hành nhiều đời, từng "Cúng dường các đức Phật và các vị Bồ tát nhiều như số cát sông Hằng" [5].',
      d: 'Sai. Ai cũng có phiền não từ vô thỉ, chỉ là họ đã có công đức trồng sâu dày qua nhiều kiếp [5].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-6-chuong-thanh-tinh-hue',
  slug: 'bai-thu-6-chuong-thanh-tinh-hue',
  title: 'Bài Thứ 6 - Chương Thanh Tịnh Huệ',
  type: 'article',
  status: 'published',
  order: 9,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-6-chuong-thanh-tinh-hue/L%E1%BB%99_tr%C3%ACnh_T%C3%A1nh_Vi%C3%AAn_Gi%C3%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-thanh-tinh-hue', label: 'VI. CHƯƠNG THANH TỊNH HUỆ' },
        { id: 'ngai-thanh-tinh-hue-bo-tat-hoi-phat', label: '1. Ngài Thanh Tịnh Huệ Bồ tát hỏi Phật', indent: 1 },
        { id: 'luoc-giai-ngai-thanh-tinh-hue-bo-tat-hoi-phat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-khen-ngai-thanh-tinh-hue-bo-tat', label: '2. Phật khen Ngài Thanh Tịnh Huệ Bồ tát', indent: 1 },
        { id: 'luoc-giai-phat-khen-ngai-thanh-tinh-hue-bo-tat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-day-trong-vien-giac-khong-co-bo-tat-va-chung-sanh', label: '3. Phật dạy: Trong Viên Giác không có Bồ tát và chúng sanh', indent: 1 },
        { id: 'luoc-giai-phat-day-trong-vien-giac-khong-co-bo-tat-va-chung-sanh', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'pham-phu-tuy-thuan-tanh-vien-giac-dia-vi-thap-tin', label: '4. Phàm phu tùy thuận tánh Viên Giác (địa vị Thập tín)', indent: 1 },
        { id: 'luoc-giai-pham-phu-tuy-thuan-tanh-vien-giac-dia-vi-thap-tin', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'bo-tat-o-vi-tam-hien-tuy-thuan-tanh-vien-giac', label: '5. Bồ tát ở vị Tam hiền, tùy thuận tánh Viên Giác', indent: 1 },
        { id: 'luoc-giai-bo-tat-o-vi-tam-hien-tuy-thuan-tanh-vien-giac', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'bo-tat-len-thanh-vi-tuy-thuan-tanh-vien-giac', label: '6. Bồ tát lên thánh vị, tùy thuận tánh Viên Giác', indent: 1 },
        { id: 'luoc-giai-bo-tat-len-thanh-vi-tuy-thuan-tanh-vien-giac', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'nhu-lai-tuy-thuan-tanh-vien-giac', label: '7. Như Lai tùy thuận tánh Viên Giác', indent: 1 },
        { id: 'luoc-giai-nhu-lai-tuy-thuan-tanh-vien-giac', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'tong-lai-bai-thu-6-chuong-thanh-tinh-hue', label: '8. Tóm lại', indent: 1 },
        { id: 'luoc-giai-tong-lai-bai-thu-6-chuong-thanh-tinh-hue', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: '9. Phật nói bài kệ tóm lại các nghĩa trên', indent: 1 },
        { id: 'luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: 'LƯỢC GIẢI', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-6-chuong-thanh-tinh-hue/Path_of_Pure_Wisdom.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/AlpRuIZnHZc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/2V8u70RgB0L8JTd17Nim13?utm_source=generator&si=72362da4807f4643',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Thanh Tịnh Huệ',
    passPercentage: 70,
    questions,
  },
}

export default lesson
