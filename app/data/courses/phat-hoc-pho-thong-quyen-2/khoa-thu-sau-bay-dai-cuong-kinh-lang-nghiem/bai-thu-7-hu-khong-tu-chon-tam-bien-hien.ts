import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bai-thu-bay-hu-khong-tu-chon-tam-bien-hien">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ BẢY</h2>

    <section id="i-hu-khong-tu-chon-tam-bien-hien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. HƯ KHÔNG TỪ CHƠN TÂM BIẾN HIỆN</h3>
      <p>- A-Nan, hư không vô hình, nhơn các hình sắc mà hiện bày ra. Như ở trong thành Thất La này, khi dân chúng mới cất nhà, thì họ đào giếng để múc nước. Đào một thước đất, thì thấy có một thước hư không hiện ra, đào xuống mười thước thì thấy có mười thước hư không hiện ra; hư không cạn hay sâu là tùy người đào nhiều hay ít. Vậy hư không này là do đất sanh, do đào mà có, hay không do đâu mà tự sanh?</p>
      <p>A-Nan, hư không này, nếu không do đâu mà tự sanh, thì khi chưa đào sao không thấy có hư không, mà chỉ thấy đất đặc? Còn cái "hư không do đào mà có"; thì khi quăng đất ra, đáng lẽ phải thấy hư không vào. Nếu quăng đất ra trước mà không thấy hư không vào, thời sao lại nói "hư không do đào đất mà có". Nếu hư không không ra vào, thời đáng lẽ nó cùng với đất không khác; nếu không khác thời đồng với đất. Vậy khi quăng đất ra, sao chẳng thấy hư không ra?</p>
      <p>Nếu nói "hư không do đào đất mới có", thời khi đào, đáng lẽ phải ra hư không chớ sao lại ra đất? Còn nói "hư không chẳng do đào mà ra" thì khi đào ra đất, tại sao thấy có hư không?</p>
      <p>Các ông nên chín chắn quan sát: Đào là từ nơi tay người tùy theo chỗ mà đào. Còn đất cục là nhơn chỗ đất cái dời đi. Đào là việc thật, còn hư không thì trống không, hai cái không dính líu gì với nhau, không hòa không hiệp. Vậy hư không từ nơi đâu mà ra không lẽ không nhơn đâu mà hư không tự có.</p>
      <p>Các ông biết trong chơn tâm tánh (bản thể) của hư không (tâm) là chơn giác (tâm); tánh (bản thể) của giác (tâm) là chơn không, vốn sẵn thanh tịnh, khắp giáp cả pháp giới, tùy theo tâm chúng sanh thế nào, thì nó hiện ra thế ấy. Một chỗ đào giếng, thì một chỗ có hư không, khắp cả trong thế gian đều đào giếng, thì khắp cả thế gian có hư không; tùy theo nghiệp của chúng sanh mà hiện ra, không có phương hướng xứ sở gì. Người trong thế gian không biết, khởi tâm phân biệt so đo, chấp là nhơn duyên sanh hoặc tự nhiên có v.v...đều không đúng cả.</p>
      <p>A-Nan, ông nên biết: Hiện tiền tánh của năm đại: đất, nước, gió, lửa và hư không vốn viên dung khắp giáp, không lay động, đều là chơn tâm cả, không có sanh và diệt. Chỉ tại các ông mê muội không biết mà thôi.</p>

      <section id="luoc-giai-1">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đất, nước, gió, lửa và hư không, năm đại này thuộc về phần vật chất, đại diện cho các cảnh vật. Hai đại diện sau (kiến và thức) là thuộc về phần tinh thần, đại diện cho các thức.</p>
      </section>
    </section>

    <section id="ii-cac-giac-quan-tu-chon-tam-bien-hien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. CÁC GIÁC QUAN TỪ CHƠN TÂM BIÊN HIỆN</h3>
      <p>- A-Nan, cái "thấy" không tự thể, nhơn đối với cảnh vật và hư không mà có, như ông ngày nay ngồi trong rừng Kỳ đà, sớm mai thấy sáng, chiều lại thấy tối, đêm không trăng trời thấy tối, có trăng lại thấy sáng. Nhơn có tối và sáng, nên ông mới thấy có phân biệt.</p>
      <p>Vậy cái "thấy" này cùng với tối, sáng và hư không là một thể hay không phải một thể? Đồng hay khác?</p>
      <p>Này A-Nan, khi tối thì không có sáng, khi sáng không có tối. Nếu cái thấy này cùng với tối đồng một thể thì khi sáng đến, cái thấy phải mất. Còn cái thấy này cùng với cái sáng đồng một thể, thì khi tối lại, cái thấy diệt. Nếu cái thấy diệt, thời làm sao thấy tối và thấy sáng. Lại nữa, tối và sáng khác nhau, còn cái thấy lại không sinh diệt, như thế thời làm sao nói đồng một thể được.</p>
      <p>Nếu nói cái thấy cùng với tối, sáng và hư không chẳng phải một thể, thì rời tối, sáng và hư không, ông hãy chia riêng cái thấy của ông ra xem thử hình tướng của nó thế nào. Nếu rời tối, sáng và hư không thì cái thấy của ông như lông rùa, sừng thỏ; nghĩa là không có. Khi phân tách ra tối, sáng và hư không, ba cái đều khác, thì cái thấy của ông ở chỗ nào?</p>
      <p>Lại nữa, tối sáng trái nhau, thế nào nói đồng được? Rời tối, sáng và hư không ra, không có cái "thấy", thì làm sao nói khác được? Không thể chia ranh đây là hư không, kia là cái "thấy" được, thời làm sao lại nói "không đồng" tối, sáng chẳng đồng, còn cái "thấy" không biến đổi thì sao lại nói "không khác".</p>
      <p>Ông nên chín chắn suy xét: cái sáng là từ nơi mặt nhựt, cái tối thuộc ban đêm, chỗ trống thuộc hư không, nơi bít là thuộc về đất; cái "thấy" có biết còn hư không không biết, không phải hòa không phải hiệp. Vậy cái "thấy" từ nơi đâu mà sanh, không phải tự nhiên có?</p>
      <p>Các ông không biết: trong chơn tâm, cái tánh của "thấy" là tâm (giác minh) tâm là tánh của thấy; vốn sẵn thanh tịnh khắp cả pháp giới, tùy tâm của chúng sanh phân biệt như thế nào, thì hiện ra theo sự hiểu biết của chúng sanh như thế ấy. Như một con mắt là một cái thấy. Cho đến tai nghe, mũi ngửi, miệng nếm, thân xúc, ý biết, sáu giác quan cũng vậy, đều khắp cả pháp giới, tùy theo nghiệp của chúng sanh mà hiện ra, không có phương hướng xứ sở gì.</p>

      <section id="luoc-giai-2">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Như điện, vào đèn thì đèn cháy, vào quạt quạt lại quay v.v... điện không có phương hướng xứ sở gì, chỉ tùy duyên phát hiện.</p>
        <p>Còn tâm cũng thế, tâm vẫn là một, nếu đến mắt thì thấy, còn đến tai thì nghe v.v... tùy duyên phát hiện.</p>
        <p>Thấy, nghe, hay, biết sáu giác quan kể là một, cùng với hư không và bốn đại, thành ra sáu đại, tánh có viên dung vốn không lay động, đồng một thể chơn tâm, không sanh không diệt, thế gian vì mê lầm không biết, sanh tâm phân biệt, chấp cho nhân duyên sanh, hoặc tự nhiên có đều không đúng cả.</p>
      </section>
    </section>

    <section id="iii-thuc-phan-biet-tu-chon-tam-bien-hien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. THỨC (PHÂN BIỆT) TỪ CHƠN TÂM BIẾN HIỆN</h3>
      <p>- Này A-Nan, cái "thức" (phân biệt) không có căn nguyên, nhơn sáu căn và sáu trần mà vọng hiện. Ông nay dùng mắt xem khắp trong hội này, thì con mắt của ông chẳng khác nào như cái kiếng chiếu cảnh, không có phân biệt gì riêng khác. Rồi cái "thức" của ông mới khởi lên, tuần tự phân biệt: đây là ông Văn thù, kia là ông Phú-Lâu-Na, đó là ông Mục-kiền-liên, nọ là ông Tu-Bồ-Đề v.v... vậy cái thức hiểu biết phân biệt này, từ cái thấy sanh, hay từ nơi cảnh vật sanh? Từ hư không ra, hay không do đâu mà tự xuất hiện?</p>
      <p>A-Nan, nếu nói "cái thức của ông từ nơi cái thấy sanh", mà không có tối, sáng, cảnh vật và hư không bốn món, thì cái "thấy" của ông không có. Cái thấy còn không có, thời cái thức phân biệt kia làm sao từ nơi cái thấy mà sanh được.</p>
      <p>Còn nói "thức phân biệt này từ cảnh vật sanh, chớ không phải từ nơi cái thấy". Nếu không có cái thấy để thấy tối, sáng, cảnh vật và hư không các tướng, thời cái "thức" của ông từ nơi đâu mà sanh được.</p>
      <p>Còn nói "thức từ hư không sanh, không phải từ nơi cảnh vật và cái thấy". Nếu không có cái "thấy" thời không thấy được sáng, tối, cảnh vật và hư không. Còn nếu không có các cảnh vật thì thấy, nghe, hay, biết không từ nơi đâu mà có.</p>
      <p>Nếu nói "thức không phải từ cảnh vật và cái thấy sanh", như thế thì nó đồng với cái không. Còn nói "nó có mà không phải đồng cảnh vật", thì dầu cho cái thức của ông có phát sanh ra nữa, cũng không thể phân biệt cái gì được.</p>
      <p>Nếu nói "thức không nhơn đâu, thoạt nhiên xuất hiện", thì sao khi ban ngày, ông không thể phân biệt được mặt trăng?</p>
      <p>Ông nên chín chắn suy xét: cái thấy thì nó gá nơi con mắt của ông, còn các hình tướng là ở nơi cảnh vật. Những gì có hình tướng thời có, còn không hình tướng là không. Cái "thức" thì động (có phân biệt), còn cái "thấy" lại yên lặng (không phân biệt), không phải hòa không phải hiệp. Vậy thì cái thức phân biệt của ông từ đâu sanh ra? Không lẽ không do đâu mà tự có?</p>
      <p>Các ông không biết trong chơn tâm, tánh của thức là tâm, tâm mới thật là thức (chơn thức), nó nhiệm mầu yên lặng, sáng suốt, khắp giáp cả pháp giới, hàm chứa và sanh ra mười phương hư không thế giới, chỉ tùy theo nghiệp của chúng sanh mà hiện ra, không có phương hướng xứ sở. Thế gian không biết, khởi thức tâm phân biệt chấp trước, cho là nhơn duyên sanh hoặc tự nhiên có v.v... đều không đúng cả.</p>
      <p>Các ông nên biết: đất, nước, gió, lửa, hư không, cái thấy và thức tâm gọi chung là bảy đại, tánh của nó đều là chơn tâm viên mãn khắp giáp tất cả, vốn không sanh diệt. Các ông vì mê muội nên không biết.</p>

      <section id="luoc-giai-3">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Chúng ta nên phân biệt rõ ràng: "thức" và cái "thấy".</p>
        <p>Cái "thấy" là thuộc các giác quan, về phần trực giác. Nó cũng như cái kiếng chiếu cảnh, không có phân biệt tính toán. Còn "thức" thì có phân biệt tốt, xấu, hay, dở v.v... so theo Duy thức tông, để nói cho dễ hiểu: trong đây nói "thức" là chỉ cho thức thứ Sáu; còn nói cái "thấy" là chỉ về năm thức trước.</p>
        <p>Tóm lại, nói đất, nước, gió, lửa, hư không, cái thấy và thức, cộng là bảy đại, gồm cả vật chất cả tinh thần.</p>
        <p>Đất, nước, gió, lửa, hư không là thuộc về vật chất, còn thấy các thức là thuộc về phần tinh thần. Trong vũ trụ tuy có thiên hình vạn trạng, nhưng tóm lại thì không ngoài vật chất và tinh thần.</p>
        <p>Đoạn này là nói về cả vật chất lẫn tinh thần đều từ nơi chơn tâm, tùy theo nghiệp của chúng sanh mà hiện ra như thế này, hoặc như thế kia, ngàn sai muôn khác. Như người chiêm bao thấy hiện ra các cảnh vật (đất, nước v.v...)</p>
        <p>Về bản thể (tâm) của bảy đại thì chơn, không có sanh diệt. Còn về hiện tượng (các hình tướng) thì vọng. Vì chúng sanh mê muội không biết, chấp thế này hoặc thế kia, (như người đương chiêm bao chấp các cảnh chiêm bao là thật). Một phen ngộ được chơn tâm, thì bảy đại này đều trở về thể tánh chơn tâm (như người thức giấc, thì cảnh chiêm bao liền hết; lúc bấy giờ mới biết các cảnh vật trong chiêm bao đó, đều do tâm chiêm bao hiện ra).</p>
      </section>
    </section>

    <section id="iv-a-nan-phat-nguyen-rong-lon">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. A-NAN VÌ NGỘ ĐƯỢC CHƠN TÂM NÊN ĐỨNG DẬY PHÁT LỜI THỀ NGUYỆN RỘNG LỚN</h3>
      <p>Khi ấy A-Nan và đại chúng nhờ Phật chỉ dạy rất cặn kẽ, nên mỗi người đều ngộ được chơn tâm của mình rộng lớn khắp cả mười phương hư không. Lúc bấy giờ ông lại thấy cả mười phương thế giới rất nhỏ hẹp và rõ ràng cũng như một lá cây cầm trong tay. Tất cả các cảnh vật sum-la vạn-tượng trong thế gian này, đều ở trong chơn tâm; chơn tâm bao trùm khắp giáp cả mười phương thế giới. Khi ấy ông xem trở lại cái thân do cha mẹ sanh đây, thật nhỏ nhen làm sao! Như một hạt bụi nhỏ ở trong mười phương hư không, dù còn, dù mất cũng không thấm vào đâu và cũng như một hòn bọt nhỏ, nổi ở trong bể cả rộng khơi, dầu sanh dầu diệt cũng không nhằm gì.</p>
      <p>Vì ông A-Nan hiểu lộ được chơn tâm của mình còn không diệt và rộng lớn như vậy, nên ông đứng trước Phật chắp tay kính lạy, và xứng theo chơn tâm rộng lớn, mà nói bài kệ phát nguyện như vầy:</p>

      <section id="nguyen-van-chu-han-phien-am">
        <h4 class="text-lg font-semibold">NGUYÊN VĂN CHỮ HÁN (PHIÊN ÂM)</h4>
        <p>Diệu trạm, Tổng trì, Bất động tôn</p>
        <p>Thủ Lăng-Nghiêm vương, thế hi-hữu,</p>
        <p>Tiêu ngã ức kiếp điên đảo tưởng,</p>
        <p>Bất lịch tăng-kỳ hoạch pháp thân.</p>
        <p>Nguyện kim đắc quả thành bảo vương,</p>
        <p>Hườn độ như thị hằng sa chúng,</p>
        <p>Tương thử thâm tâm phụng trần sát,</p>
        <p>Thị tắc danh vi báo Phật ân.</p>
        <p>Phục thỉnh Thế-Tôn vị chứng minh:</p>
        <p>Ngũ trược ác thế thệ tiên nhập,</p>
        <p>Như nhất chúng sanh vị thành Phật,</p>
        <p>Chung bất ư thử thủ Nê-hoàn.</p>
        <p>Đại hùng, đại lực, đại từ bi,</p>
        <p>Hi cánh thẩm trừ vi tế hoặc,</p>
        <p>Lĩnh ngã tảo đăng vô thượng giác,</p>
        <p>Ư thập phương giới tọa đạo tràng.</p>
        <p>Thuấn-nhã-da tánh khả tiêu vong,</p>
        <p>Thước-ca-ra tâm vô động chuyển.</p>
      </section>

      <section id="dich-nghia">
        <h4 class="text-lg font-semibold">DỊCH NGHĨA</h4>
        <p>Kính lạy Pháp thân, Báo-thân, Hóa-thân Phật, và kinh Thủ-Lăng-Nghiêm vương là ngôi Pháp-bảo rất hi hữu trên đời. Tiêu trừ cho con các vọng tưởng điên đảo từ ức kiếp, khiến con chẳng cần trải qua vô số kiếp tu hành mà vẫn đặng pháp-thân Phật.</p>
        <p>Hôm nay con nguyện mau đặng thành quả Phật, để trở lại độ chúng sanh nhiều như hằng sa. Con nguyện đem thân</p>
        <p>(Trang 469)</p>
        <p>tâm này, phụng sự các Đức Phật nhiều như vi trần. Thế mới gọi là đền ơn chư Phật.</p>
        <p>Cúi xin Đức Thế-Tôn chứng minh cho lời nguyện của con: "trong đời ngũ trược tội ác này, con thề vào trước để cứu khổ chúng sanh". Nếu còn một chúng sanh nào chưa được thành Phật, thì con thề chẳng lãnh quả vui Niết-bàn.</p>
        <p>Phật là đấng Đại-lực và Đại-từ-bi. Cúi xin Ngài tiêu trừ các điều mê lầm vi tế cho con, khiến cho con sớm đặng thành quả Phật, để hóa độ chúng sanh khắp cả mười phương thế giới. Giả sử hư không kia có thể tiêu diệt hết, chớ chí nguyện của con đây chẳng hề lay động.</p>
      </section>

      <section id="luoc-giai-4">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Ngài A-Nan vì ngộ được chơn tâm của mình rộng lớn bao hàm cả vũ trụ: vô biên thế giới vô tận chúng sanh đều ở trong chơn tâm cả. Lúc bấy giờ, Ngài thấy mười phương thế giới rất rõ ràng và rất nhỏ hẹp cũng như cái lá cây nằm ở trong tay, còn thân này nhỏ nhen như hạt bụi bay trong hư không, dầu còn dầu mất cũng chẳng thấm vào đâu.</p>
        <p>Bởi Ngài ngộ được chơn tâm rộng lớn, cùng với chúng sanh đồng một thể không hai, cho nên Ngài mới xứng theo chơn tâm rộng lớn, khởi ra đồng thể đại bi, phát lời thề nguyện rộng sâu như thế.</p>
        <p>Xem như câu:</p>
        <p>Trong đời ngũ trược tội ác này, con thề vào trước để cứu khổ chúng sanh. Nếu còn một chúng sanh nào chưa thành Phật, thì con thề chẳng lãnh quả Niết-bàn ...</p>
        <p>Và câu:</p>
        <p>Giả sử hư không kia có thể tiêu hết, mà chí nguyện của con đây chẳng hề lay động.</p>
        <p>Trong Kinh nói: "thế giới vô biên, chúng sanh vô tận", biết bao giờ độ cho hết tất cả chúng sanh, mà Ngài lại thề nguyện xung phong vào đời ngũ trược tội ác trước hết, để cứu độ chúng sanh. Nếu còn một chúng sanh nào chưa thành Phật, thì Ngài chẳng chịu an vui ở cảnh Niết-bàn.</p>
        <p>Thật là lòng từ bi rộng lớn vô cùng, chí nguyện cao thượng huyền diệu sinh độ đời của Ngài như thế, đáng cho chúng ta trọn đời bái phục...</p>
        <p>Trông lên Ngài rồi ngó lại ta... thấy rõ tâm chí và hành vi của mình, thật cũng quá ư hẹp hòi và thấp thỏi!</p>
      </section>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong ví dụ về việc đào giếng, văn bản giải thích thế nào về nguồn gốc của "hư không" hiện ra trong giếng?',
    options: {
      a: 'Là một hiện tượng tự nhiên vốn có sẵn trong lòng đất.',
      b: 'Do sự hòa hợp giữa sức người và độ trống của đất.',
      c: 'Từ chơn tâm biến hiện tùy theo tâm của chúng sanh.',
      d: 'Do đất sinh ra hoặc do hành động đào mà có.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hư không không phải do tự nhiên có.',
      b: 'Sai. Đào là việc thật, hư không là trống không, hai cái không hòa không hiệp.',
      c: 'Đúng. Tánh của hư không là chơn giác (tâm), tùy theo tâm chúng sanh thế nào thì nó hiện ra thế ấy.',
      d: 'Sai. Nếu hư không do đào mới có thì khi đào đáng lẽ phải ra hư không chứ không phải ra đất.',
    },
  },
  {
    question: 'Theo văn bản, cái "thấy" của chúng ta có mối quan hệ như thế nào với các hiện tượng sáng và tối?',
    options: {
      a: 'Cái thấy phụ thuộc hoàn toàn vào sự hiện diện của ánh sáng.',
      b: 'Tánh của cái thấy là chơn tâm, không biến đổi theo sự thay đổi của sáng và tối.',
      c: 'Cái thấy và sáng/tối là một thể thống nhất, cùng sanh cùng diệt.',
      d: 'Cái thấy là một thực thể riêng biệt, không liên quan đến hư không.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Dù không có ánh sáng (như đêm không trăng), cái thấy vẫn hiện hữu để thấy tối.',
      b: 'Đúng. Sáng tối thay đổi nhưng cái thấy lại không sinh diệt và không biến đổi, vì tánh của cái thấy là tâm vốn sẵn thanh tịnh.',
      c: 'Sai. Tối và sáng trái nhau và thay đổi, còn cái thấy không sinh diệt nên không thể đồng một thể.',
      d: 'Sai. Rời hư không, tối, sáng ra thì không có cái thấy, nhưng không thể chia ranh giới tách bạch.',
    },
  },
  {
    question: 'Điểm khác biệt căn bản giữa cái "thấy" (thuộc giác quan) và cái "thức" (phân biệt) là gì?',
    options: {
      a: 'Cái thấy thuộc về vật chất (đại diện cho mắt), còn thức thuộc về tinh thần.',
      b: 'Thức là căn nguyên tạo ra cái thấy thông qua các cơ quan thị giác.',
      c: 'Cái thấy mang tính trực giác như gương soi, còn thức có tính chất phân biệt tốt xấu.',
      d: 'Cái thấy có hình tướng cụ thể còn thức thì không có hình tướng.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Cả cái thấy và thức đều thuộc về phần tinh thần.',
      b: 'Sai. Cái thức khởi lên sau khi đã có cái thấy.',
      c: 'Đúng. Cái thấy thuộc về trực giác như kiếng chiếu cảnh, không phân biệt tính toán; còn thức thì phân biệt tốt, xấu, hay, dở.',
      d: 'Sai. Cả cái thấy và thức đều không có hình tướng cụ thể như vật chất.',
    },
  },
  {
    question: 'Khái niệm "Bảy đại" được đề cập trong văn bản bao gồm những yếu tố nào?',
    options: {
      a: 'Nhân duyên, tự nhiên, chơn tâm, thức, thấy, không và vật.',
      b: 'Đất, nước, gió, lửa, hư không, cái thấy và thức.',
      c: 'Mắt, tai, mũi, lưỡi, thân, ý và hư không.',
      d: 'Sáng, tối, thông, bít, đất, nước và gió.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Nhân duyên hay tự nhiên chỉ là lầm chấp của thế gian.',
      b: 'Đúng. Văn bản ghi rõ: đất, nước, gió, lửa, hư không, cái thấy và thức tâm gọi chung là bảy đại.',
      c: 'Sai. Mắt, tai, mũi, lưỡi... là sáu giác quan, không phải là cấu thành của bảy đại.',
      d: 'Sai. Sáng, tối, thông, bít là những trạng thái hiện tượng, không đại diện cho bảy đại.',
    },
  },
  {
    question: 'Trong phần lược giải, ví dụ về "người chiêm bao" được dùng để minh họa cho điều gì?',
    options: {
      a: 'Mọi cảnh vật và thân thể đều là giả tạm, chỉ có tâm chiêm bao là thật.',
      b: 'Sự khác biệt giữa cảnh giới Niết-bàn và cảnh giới ngũ trược ác thế.',
      c: 'Con người cần phải ngủ để thấu hiểu được bản chất của chơn tâm.',
      d: 'Hiện tượng là vọng (giả), còn bản thể của bảy đại là chơn, không sanh diệt.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tâm chiêm bao dùng để ví cho vọng chấp, không phải là điều cần hướng tới.',
      b: 'Sai. Ví dụ này không đề cập đến Niết-bàn hay ngũ trược ác thế.',
      c: 'Sai. Đây chỉ là ví dụ ẩn dụ, không khuyến khích việc ngủ để ngộ đạo.',
      d: 'Đúng. Hiện tượng (các hình tướng) thì vọng như cảnh người chiêm bao thấy, còn bản thể của bảy đại thì chơn và không có sanh diệt.',
    },
  },
  {
    question: 'Sau khi ngộ được chơn tâm, ông A-Nan nhìn nhận thân xác do cha mẹ sinh ra như thế nào?',
    options: {
      a: 'Là một chướng ngại vật cần phải tiêu diệt để đạt được Niết-bàn.',
      b: 'Rất nhỏ nhen, như hạt bụi hay hòn bọt nhỏ trong bể cả.',
      c: 'Là một báu vật quý giá cần được bảo tồn để tu hành.',
      d: 'To lớn bao trùm khắp mười phương thế giới.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ông không coi thân là chướng ngại vật cần tiêu diệt.',
      b: 'Đúng. Ông thấy thân do cha mẹ sanh thật nhỏ nhen như hạt bụi trong mười phương hư không hay hòn bọt nhỏ nổi trong bể cả.',
      c: 'Sai. Không có thông tin cho thấy ông coi thân là báu vật.',
      d: 'Sai. Chơn tâm mới to lớn bao trùm khắp mười phương, còn thân xác thì rất nhỏ bé.',
    },
  },
  {
    question: 'Trong bài kệ phát nguyện, ông A-Nan thề rằng nếu còn một chúng sanh nào chưa thành Phật thì ông sẽ làm gì?',
    options: {
      a: 'Chẳng hề lay động chí nguyện dù hư không có tiêu diệt.',
      b: 'Tiếp tục tu hành cho đến khi đạt được quả vị Bảo Vương.',
      c: 'Sẽ không bao giờ rời khỏi thế giới ngũ trược ác thế.',
      d: 'Chẳng lãnh quả vui Niết-bàn (Nê-hoàn).',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Đây là một câu thề khác về sự kiên định, không phải điều kiện để thành Phật.',
      b: 'Sai. Việc cầu quả vị Phật là để hóa độ chúng sanh.',
      c: 'Sai. Ông thề vào đời ngũ trược trước, nhưng không nói không bao giờ rời khỏi.',
      d: 'Đúng. Lời nguyện ghi rõ: "Như nhất chúng sanh vị thành Phật, Chung bất ư thử thủ Nê-hoàn" (chẳng lãnh quả vui Niết-bàn).',
    },
  },
  {
    question: 'Cụm từ "Tương thử thâm tâm phụng trần sát" trong bài kệ của A-Nan có nghĩa là gì?',
    options: {
      a: 'Dùng tâm sâu thẳm để quan sát thế giới nhỏ như hạt bụi.',
      b: 'Đem thân tâm này phụng sự các đức Phật nhiều như vi trần.',
      c: 'Giữ tâm thanh tịnh trong đời ác ngũ trược đầy bụi bặm.',
      d: 'Diệt trừ các vọng tưởng điên đảo sâu kín trong tâm.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. "Trần sát" mang nghĩa số lượng cõi Phật nhiều như bụi, không phải để quan sát thế giới.',
      b: 'Đúng. Phần dịch nghĩa ghi rõ: "Con nguyện đem thân tâm này, phụng sự các Đức Phật nhiều như vi trần".',
      c: 'Sai. Không đúng với ý nghĩa của câu kệ này.',
      d: 'Sai. Việc tiêu trừ điên đảo tưởng thuộc về câu kệ khác trước đó.',
    },
  },
  {
    question: 'Theo lược giải ở phần II, tại sao tâm được ví như dòng điện?',
    options: {
      a: 'Vì tâm có sức mạnh to lớn có thể hủy diệt mọi thứ.',
      b: 'Vì tâm di chuyển rất nhanh giữa các giác quan khác nhau.',
      c: 'Vì tâm không có hình dáng cố định và chỉ tồn tại khi có vật chất.',
      d: 'Vì tâm là một, nhưng tùy duyên vào mắt thì thấy, vào tai thì nghe.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Lược giải không nhắc đến sức mạnh hủy diệt.',
      b: 'Sai. Tâm không di chuyển mà vốn sẵn khắp pháp giới.',
      c: 'Sai. Tâm tồn tại độc lập với vật chất, bản thể thanh tịnh không phụ thuộc.',
      d: 'Đúng. Tâm vẫn là một, tùy duyên đến mắt thì thấy, đến tai thì nghe, y hệt điện vào đèn thì sáng, vào quạt thì quay.',
    },
  },
  {
    question: 'Sai lầm chung của người thế gian khi nhìn nhận về các đại (như đất, nước, thấy, thức...) là gì?',
    options: {
      a: 'Cho rằng chúng là do nhân duyên sanh hoặc tự nhiên có.',
      b: 'Quá chú trọng vào phần tinh thần mà bỏ qua phần vật chất.',
      c: 'Không tin vào sự tồn tại của các hiện tượng vật lý.',
      d: 'Tin rằng thế giới rất nhỏ hẹp như một lá cây.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Thế gian mê lầm không biết, sanh tâm phân biệt, chấp cho nhân duyên sanh hoặc tự nhiên có đều không đúng cả.',
      b: 'Sai. Không có văn bản nào nói về việc bỏ qua vật chất.',
      c: 'Sai. Người thế gian mê lầm tin vào hiện tượng vật lý là thật, không phải là không tin.',
      d: 'Sai. Việc nhìn thấy thế giới nhỏ như lá cây là cái ngộ của Tôn giả A-Nan, không phải sai lầm của thế gian.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-7-hu-khong-tu-chon-tam-bien-hien',
  slug: 'bai-thu-7-hu-khong-tu-chon-tam-bien-hien',
  title: 'Bài Thứ 7 - Hư không từ Chơn Tâm biến hiện',
  type: 'article',
  status: 'published',
  order: 8,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-7-hu-khong-tu-chon-tam-bien-hien/Ch%C6%A1n_T%C3%A2m_V%C3%A0_S%E1%BB%B1_Bi%E1%BA%BFn_Hi%E1%BB%87n.png',
      readingContent,
      tableOfContents: [
        { id: 'i-hu-khong-tu-chon-tam-bien-hien', label: 'I. Hư không từ chơn tâm biến hiện' },
        { id: 'luoc-giai-1', label: 'Lược giải', indent: 1 },
        { id: 'ii-cac-giac-quan-tu-chon-tam-bien-hien', label: 'II. Các giác quan từ chơn tâm biên hiện' },
        { id: 'luoc-giai-2', label: 'Lược giải', indent: 1 },
        { id: 'iii-thuc-phan-biet-tu-chon-tam-bien-hien', label: 'III. Thức (phân biệt) từ chơn tâm biến hiện' },
        { id: 'luoc-giai-3', label: 'Lược giải', indent: 1 },
        {
          id: 'iv-a-nan-phat-nguyen-rong-lon',
          label: 'IV. A-Nan vì ngộ được chơn tâm nên đứng dậy phát lời thề nguyện rộng lớn',
        },
        { id: 'nguyen-van-chu-han-phien-am', label: 'Nguyên văn chữ Hán (phiên âm)', indent: 1 },
        { id: 'dich-nghia', label: 'Dịch nghĩa', indent: 1 },
        { id: 'luoc-giai-4', label: 'Lược giải', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-7-hu-khong-tu-chon-tam-bien-hien/%C3%81nh_S%C3%A1ng_Ch%C6%A1n_T%C3%A2m.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/fA729LEZAJQ',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/13U6CKu3upzxdyCrsN66Rw?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Hư không từ Chơn Tâm biến hiện',
    passPercentage: 70,
    questions,
  },
}

export default lesson
