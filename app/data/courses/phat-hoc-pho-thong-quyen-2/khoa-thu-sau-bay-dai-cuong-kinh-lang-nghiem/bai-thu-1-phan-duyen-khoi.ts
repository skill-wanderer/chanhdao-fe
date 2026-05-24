import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="phan-duyen-khoi">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Bài thứ nhất: Phần Duyên Khởi</h2>

    <section id="duyen-khoi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">A. Phần Duyên Khởi</h3>
      <p>Người đến đô thành lạ, nếu chẳng có bản đồ, thì không sao khỏi lầm đường lạc nẻo. Người đi trong biển khơi diệu vợi, sóng dồi gió dập, lênh đênh giữa biển, nếu không có kim chỉ nam, thì không dễ vượt qua mấy vạn trùng dương, trở về xứ sở. Người đi đánh giặc, nếu không có binh thư đồ trận, không hiểu chiến thuật, chiến lược, thì không sao thắng được giặc, đem trở lại trật tự an ninh cho nước nhà, và giữ gìn non sông cẩm tú. Kẻ làm thợ nếu chẳng có mực thước, thì không sao làm thành món đồ có giá trị được.</p>
      <p>Người tu hành cũng thế, nếu không hiểu được lối thẳng, khúc quanh, chỗ đèo ải gay go, nơi hố hầm nguy hiểm trong đường lối tu hành, lớp lang chứng đạo, thì không sao khỏi lạc vào nẻo tà, sa nơi ác đạo.</p>
      <p>Kinh Lăng Nghiêm là một bộ kinh quý báu vô cùng, chỉ đường lối tu hành một cách rành mạch, nào là giáo, lý, hạnh, quả đều rõ ràng. Người tu phải trải qua bao nhiêu địa vị, trong khi tu gặp những điều nguy hiểm thế nào, mà phải làm sao mới tránh khỏi những điều nguy hiểm ấy, thì trong Kinh Lăng Nghiêm dạy hết sức rõ ràng.</p>
      <p>Nói đến Kinh Lăng Nghiêm, hàng Phật tử ai chẳng nghe tiếng là một bộ kinh Đại thừa, vừa hay nhất, mà cũng vừa quý nhất. Người tu hành hiểu được Kinh Lăng Nghiêm, chẳng khác nào người bộ hành có bản đồ, kẻ thủy thủ có kim chỉ nam, người thợ có dây mực, cây thước, kẻ chiến sĩ có binh thư đồ trận.</p>
      <p>Vì Kinh Lăng Nghiêm quý giá như thế, nên thuở xưa các vị vua Ấn Độ cho là một quốc bảo, giữ gìn nghiêm ngặt không cho truyền bá ra ngoài. Trong lúc ấy bên Trung Hoa, có Ngài Thiên Thai Trí Giả Đại Sư, được nghe Kinh Lăng Nghiêm quý báu như vậy, nên mỗi ngày hai lần sớm chiều xoay mặt về phía Tây (Ấn Độ) quỳ lạy cầu khẩn cho Kinh Lăng Nghiêm được sớm truyền bá qua Tàu, để lợi ích quần sanh.</p>
      <p>Cách 100 năm sau, có Ngài Bát-thích-mật-đế, người Ấn Độ, đã nhiều lần tìm cách đem Kinh Lăng Nghiêm đến truyền bá tại Trung Hoa, nhưng không kết quả, vì luật nước nghiêm cấm, kiểm soát rất chặt chẽ.</p>
      <p>Đến lần cuối cùng, Ngài viết kinh trong tấm lụa mỏng, rồi cuốn lại, xẻ thịt bắp vế nhét vào, băng lại làm như người có ghẻ, mới đem ra được khỏi nước.</p>
      <p>Chúng ta nên nhớ tưởng lại kỳ công "Vị pháp vong xu" của Ngài Bát-thích-mật-đế. Thử nghĩ: Một cây cỏ cắt vào da còn đau; một mụn ghẻ con, còn biết nhức; huống chi xẻ một đường dài nơi bắp thịt, nhét cho được một cuốn lụa con, trải qua bao nhiêu ngày, từ Ấn Độ sang đến Trung Hoa. Nếu không may bị tiết lộ thì phải tử hình. Như thế chúng ta đủ thấy sự quý báu của Kinh Lăng Nghiêm là dường nào!</p>
      <p>Tâm vì đạo quên mình của Bồ Tát Bát-thích-mật-đế đáng cho chúng sanh trọn đời bái phục.</p>
      <p>Khi Ngài Bát-thích-mật-đế đem Kinh Lăng Nghiêm này qua Tàu, đến đất Nam Thuyên, gặp quan Thừa tướng tên Phòng Dung, là bậc bác học uyên thâm, lại có lòng mộ Phật, nên Ngài trình bày với Thừa tướng, về giá trị của Kinh Lăng Nghiêm mà Ngài đã huyền diệu sinh mạng mang đến.</p>
      <p>Quan Thừa tướng Phòng Dung nghe nói rồi hết sức mừng rỡ, cho là đặng một vật báu chưa từng có. Nhưng khi đem cuốn lụa ra thì, vì bị máu mủ bám vào lâu ngày, nên mất cả chữ nghĩa.</p>
      <p>Một bà có công lớn trong việc này, là Phu nhân của Thừa tướng Phòng Dung. Bà đem cuốn lụa ấy nấu với một chất hóa học, thì máu mủ đều theo nước mà tan đi, chỉ lưu lại các nét mực, nên còn thấy để phiên dịch.</p>
      <p>Quan Thừa tướng thỉnh Ngài Bát-thích-mật-đế dịch chữ Phạn ra chữ Tàu. Ngài Di-già-thích-ca dịch từ ngữ, còn quan Thừa tướng nhuận sắc. Bởi thế nên Kinh Lăng Nghiêm chẳng những nghĩa lý rất hay, mà văn chương còn tuyệt diệu! Từ xưa các học giả, không những trong đạo Phật, mà cả đạo Nho, các đại gia văn chương, một phen xem đến Kinh Lăng Nghiêm, đều kính phục và vô cùng khen ngợi cái nghĩa lý cao siêu, và văn chương tuyệt diệu của kinh.</p>
    </section>

    <section id="chanh-de">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">B. Phần Chánh Đề</h3>

      <section id="nguyen-nhan-phat-noi-kinh-lang-nghiem">
        <h4 class="text-lg font-semibold">I. Nguyên nhân Phật nói Kinh Lăng Nghiêm</h4>
        <p>Theo lệ thường, mỗi năm đến ngày rằm tháng bảy, là ngày mãn hạ, chư Tăng cùng nhau tự tứ, để rửa sạch những hành vi lỗi lầm và những tưởng không tốt, cho giới thể được thanh tịnh, vì trong ba tháng kết hạ an cư, chư Tăng đều thúc liễm thân tâm, trau giồi giới hạnh, tích công lũy đức, nên đến ngày mãn hạ, các hàng Phật tử cư sĩ đều đua nhau sắm đủ các món trai diên, thỉnh chư Tăng đến cúng dường, để gieo trồng cội phúc.</p>
        <p>Hôm ấy, nhằm ngày húy nhật của Tiên Hoàng, nên vua Ba-tư-nặc sắm đủ các món trân tu mỹ vị rất linh đình, rồi chính vua thân hành đến rước Phật và chư Tăng về cúng dường.</p>
        <p>Cũng hôm ấy, các hàng trưởng giả, cư sĩ đều sắm đủ thức cơm chay, cung thỉnh chư Tăng đến cúng dường. Phật bảo Ngài Văn-thù chia ban, để đi đến từng nhà thọ cúng.</p>
        <p>Trong lúc ấy, ông A-nan vì đã chịu người thỉnh riêng trước, nên trở về chẳng kịp để dự vào hàng chúng Tăng thọ cúng.</p>
        <p>Ông mang bình bát đi vào thành, oai nghi tề chỉnh, bộ điệu chậm rãi, qua từng nhà một để khất thực. Với tâm bình đẳng, ông muốn làm phước điền cho tất cả mọi người, không phân biệt bậc quý phái hay hạng bình dân. Ông chỉ mong gặp những người chưa biết làm phước, hôm nay phát tâm cúng dường, để họ được ương trồng hạt giống lành, đặng ngày sau hưởng quả.</p>
        <p>Vì lòng từ bi bình đẳng không lựa chọn, nên ông tuần tự trải qua các xóm làng. Không may ông gặp nhà tín nữ ngoại đạo, tên Ma-đăng-già, dùng phép huyễn thuật là thần chú của Ta-tỳ-ca-la Tiên Phạm thiên, bắt vào phòng, dùng đủ lời dịu ngọt, vuốt ve mơn trớn, ép uổng về tình duyên!...</p>
        <p>A-nan bị nạn, hết sức buồn rầu! Ông chắp tay niệm Phật, hướng về Đức Chí Tôn cầu cứu!... Phật biết A-nan bị nạn, nên khi thọ trai xong không kịp thuyết pháp, liền trở về tịnh xá ngồi kiết già, trên đảnh phóng hào quang trăm báu, trong hào quang ấy có hoa sen ngàn cánh, trên hoa sen có Đức Hóa Phật ngồi kiết già, nói thần chú Lăng Nghiêm (mỗi buổi khuya các chùa đều tụng).</p>
        <p>Phật bảo Ngài Văn-thù đem thần chú ấy đi đến chỗ nàng Ma-đăng-già, để phá trừ tà chú, cứu nạn cho A-nan.</p>
      </section>

      <section id="a-nan-cau-phat-day-phuong-phap-tu-hanh-lan-thu-nhat">
        <h4 class="text-lg font-semibold">II. A-nan cầu Phật dạy phương pháp tu hành lần thứ nhất</h4>
        <p>Khi ông A-nan được thoát nạn, về đến chỗ Phật, cúi đầu kính lạy, buồn tủi, khóc than và bạch Phật rằng:</p>
        <blockquote>
          <p>Bạch Thế Tôn! Con từ hồi nào đến giờ có lòng ỷ lại: Con là em Phật, được Phật thương yêu, chắc chắn Phật sẽ ban cho con thần thông trí huệ, hay đạo quả Bồ-đề, nên chỉ lo học rộng nghe nhiều, chẳng cần tu niệm, không ngờ ai tu nấy chứng, mặc dù con là em của Phật, nếu không tu, thì cũng bị đọa như ai; học nhiều mà không tu, thì cũng chẳng có ích gì! Cúi xin Phật rộng lòng từ bi, chỉ dạy cho con phương pháp nào mà mười phương các Đức Phật tu hành đều được thành chứng quả.</p>
        </blockquote>
      </section>

      <section id="phan-luoc-giai">
        <h4 class="text-lg font-semibold">III. Phần lược giải</h4>

        <section id="dinh-danh-va-giai-nghia-ten-kinh">
          <h5 class="font-semibold">1. Định danh và giải nghĩa tên kinh</h5>
          <p>Khi đó Phật an ủi A-nan và hứa sẽ dạy phương pháp tu hành để thành đạo chứng quả, là Kinh Lăng Nghiêm. Kinh này đọc cho đủ là:</p>
          <p>"Kinh Đại Phật Đảnh Như Lai Mật Nhân Tu Chứng Liễu Nghĩa Chư Bồ Tát Vạn Hạnh Thủ Lăng Nghiêm"; gọi tắt là "kinh Thủ Lăng Nghiêm" tức là kinh nói về chơn tâm.</p>
          <p>a. Vì kinh này rất quý báu, đã ít có mà lại khó gặp, hàng Tiểu thừa Thanh văn và Quyền thừa Bồ Tát không thể thấu suốt được, nên dụ như cái tướng "Vô kiến đảnh" của Phật. Vì tướng này rất quý báu và khó thấy, hạng phàm phu và Nhị thừa không thể thấy được.</p>
          <p>b. Mười phương các Đức Phật đều y theo kinh này mà làm nhân địa tu hành mà được thành đạo chứng quả, nên gọi là "Như Lai mật nhân".</p>
          <p>c. Y theo kinh này mà tu và chứng thì lối tu chứng ấy mới được là rốt ráo, nên gọi rằng "tu chứng liễu nghĩa".</p>
          <p>d. Các vị Bồ Tát tu pháp lục độ vạn hạnh đều y theo kinh này, nên kinh này cũng gọi là "Chư Bồ Tát vạn hạnh".</p>
          <p>đ. Tóm lại là "Thủ Lăng Nghiêm", Tàu dịch là "Đại định kiên cố". Nghĩa là cái bản thể chơn tâm sẵn có của tất cả chúng sanh và chư Phật, nó bao la trùm khắp cả vũ trụ, nên gọi là "Đại". Tâm ấy thường tịch tịnh không vọng động nên gọi rằng "Định". Nó không bị thời gian thay đổi, hay không gian chuyển dời, thấu xưa suốt nay, bao giờ cũng vẫn thường như thế, ở nơi bậc Thánh không thêm, tại phàm cũng không bớt, như như bất động, nên gọi rằng "Kiên cố".</p>
          <p>Chữ "Kinh" theo nghĩa hẹp là đường chỉ xuôi, tức là đường canh trong tấm vải. Tấm vải nhờ có đường canh xâu kết lại các chỉ ngang, mới thành một tấm vải.</p>
          <p>Còn theo nghĩa rộng, chữ "Kinh" là xâu tóm các lời lẽ và nghĩa lý của Thánh hiền làm thành một quyển hay một bộ.</p>
          <p>Trong đạo Phật hay ngoài đời đều có kinh điển. Song Kinh Phật có thêm chữ "Khế" nên khác hơn kinh sách ở thế gian. Chữ "Khế" nghĩa là hợp:</p>
          <p>a. Hợp căn cơ trình độ của chúng sanh.</p>
          <p>b. Hợp chân lý.</p>
          <p>Chữ "Kinh" có nghĩa "thường pháp", là một chân lý không thay đổi: quá khứ Phật nói pháp như vậy, hiện tại Phật cũng nói pháp như vậy và vị lai Phật ra đời cũng nói pháp như vậy mà thôi, nên gọi là "thường pháp".</p>
          <p>Nói một cách xác thật hơn:</p>
          <p>"Kinh này chính là tâm của chúng ta".</p>
          <p>a. Chúng ta sẵn có bản thể chơn tâm thanh tịnh và như như bất động, thế là nơi ta có "Thủ Lăng Nghiêm".</p>
          <p>b. Y theo chơn tâm này mà khởi tu lục độ muôn hạnh của Bồ Tát, thì chính là nơi ta có "Chư Bồ Tát vạn hạnh".</p>
          <p>c. Y theo chơn tâm mà tu, và cũng y theo chơn tâm này mà chứng, tu chứng như thế mới là rốt ráo, nên gọi là "Tu chứng liễu nghĩa".</p>
          <p>d. Chúng ta y chơn tâm này làm nhân địa tu hành, sẽ được thành Phật, nên gọi là "Như Lai mật nhân".</p>
          <p>đ. Chơn tâm này rất quý báu, những hàng phàm phu, Tiểu thừa và Quyền thừa Bồ Tát không ngộ nhập được, nên dụ như "vô kiến đảnh tướng" của Phật. Chơn tâm chúng ta bao trùm cả vũ trụ, muôn sự muôn vật không ngoài chơn tâm ta, đó là nghĩa chữ "kinh".</p>
          <p>Mười chín chữ đầu đề của kinh này: "Đại Phật Đảnh Như Lai Mật Nhân Tu Chứng Liễu Nghĩa Chư Bồ Tát Vạn Hạnh Thủ Lăng Nghiêm", đã bao hàm toàn bộ kinh, nào là giáo, lý, hạnh, quả, thể đại, tướng đại và dụng đại, nhân địa tu chứng đều trùm cả, mà rốt cuộc chỉ ở nơi tự tâm chúng ta sẵn đủ. Bởi ngộ được lý này, nên Đức Lục Tổ Huệ Năng nói rằng:</p>
          <blockquote>
            <p>Không ngờ tâm mình vốn sẵn thanh tịnh<br>
            Không ngờ tâm mình vốn không sanh diệt<br>
            Không ngờ tâm mình sẵn đủ các pháp<br>
            Không ngờ tâm mình vốn không lay động<br>
            Không ngờ tâm mình hay sanh muôn pháp.</p>
          </blockquote>
          <p>Đọc đề mục Kinh chỉ có 19 chữ, chúng ta thấy đã vui thú rồi, vì chính nơi ta sẵn có kinh "Đại Phật Đảnh Như Lai Mật Nhân Tu Chứng Liễu Nghĩa Chư Bồ Tát Vạn Hạnh Thủ Lăng Nghiêm". Chỉ vì chúng ta mê muội nên chẳng nhận được Kinh Lăng Nghiêm của mình. Song nó cũng không mất, khi ngộ được thì sẽ thành Phật.</p>
        </section>

        <section id="noi-dung-kinh-lang-nghiem">
          <h5 class="font-semibold">2. Nội dung Kinh Lăng Nghiêm</h5>
          <p>Nội dung của Kinh Lăng Nghiêm là Phật chỉ dạy cho chúng ta ngộ được chơn tâm. Chúng ta vì không ngộ được chơn tâm nên phải vĩnh kiếp làm chúng sanh, trầm luân trong biển sanh tử, chịu không biết bao nhiêu khổ sở. Còn như Phật thoát ly sanh tử luân hồi, được tự do giải thoát, thần thông tự tại, trí huệ vô ngại v.v... đều do các Ngài đã ngộ chơn tâm, nên mới được như thế.</p>
          <p>Nói cho dễ hiểu: Phật với chúng sanh vẫn đồng một thể tánh chơn tâm, nhưng các Ngài đã hoàn toàn giác ngộ được thể tánh ấy, nên mới thành Phật. Trái lại, chúng sanh vì mê muội thể tánh chơn tâm, nên phải bị sanh tử luân hồi. Nếu chúng sanh giác ngộ chơn tâm, thì sẽ được như Phật.</p>
          <p>Ông A-nan cầu Phật chỉ dạy phương pháp nào mà mười phương các Đức Phật đã tu hành và đều được chứng quả, thì Phật chỉ dạy, phải ngộ "Chơn tâm" mà thôi. Nếu ngộ được chơn tâm này thì thành Phật. Ngộ được chơn tâm, như người tỉnh giấc chiêm bao. Đây là phương pháp duy nhất mà mười phương chư Phật tu hành đã được thành đạo chứng quả.</p>
        </section>
      </section>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong phần duyên khởi, Kinh Lăng Nghiêm được ví như công cụ nào đối với người tu hành để không lạc vào nẻo tà?',
    options: {
      a: 'Thuyền bè và bè gỗ',
      b: 'Gậy chống và đèn pha',
      c: 'Bản đồ và kim chỉ nam',
      d: 'Vũ khí và áo giáp',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Kinh không được ví như thuyền bè hay bè gỗ trong văn bản [1], [2].',
      b: 'Sai. Không có hình ảnh gậy chống và đèn pha trong các đoạn trích dẫn [1], [2].',
      c: 'Đúng. Kinh Lăng Nghiêm được ví như bản đồ cho người bộ hành, kim chỉ nam cho kẻ thủy thủ để người tu không lạc vào nẻo tà [1], [2].',
      d: 'Sai. Kinh được ví như binh thư đồ trận cho kẻ chiến sĩ, không phải vũ khí và áo giáp [1], [2].',
    },
  },
  {
    question: 'Ngài Bát-thích-mật-đế đã dùng cách nào để mang Kinh Lăng Nghiêm ra khỏi Ấn Độ khi bị luật pháp ngăn cấm?',
    options: {
      a: 'Giấu kinh trong các kiện hàng lụa quý',
      b: 'Xẻ thịt bắp vế để giấu cuốn lụa vào trong',
      c: 'Nhờ quan Thừa tướng Phòng Dung bảo lãnh',
      d: 'Học thuộc lòng toàn bộ bộ kinh',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ngài không giấu kinh trong kiện hàng lụa để qua cửa ải [3].',
      b: 'Đúng. Ngài đã viết kinh trên lụa mỏng, cuốn lại, xẻ thịt bắp vế nhét vào và băng lại như người có ghẻ để đem qua biên giới [3].',
      c: 'Sai. Quan Thừa tướng Phòng Dung là người Ngài gặp tại Trung Hoa sau khi đã mang kinh đến nơi [4].',
      d: 'Sai. Ngài đã mang theo bản lụa chép tay trực tiếp, không phải chỉ học thuộc lòng [3].',
    },
  },
  {
    question: 'Ai là người đã có công dùng hóa chất để tẩy sạch máu mủ trên cuốn lụa kinh, giúp việc phiên dịch được tiến hành?',
    options: {
      a: 'Ngài Thiên Thai Trí Giả Đại Sư',
      b: 'Quan Thừa tướng Phòng Dung',
      c: 'Phu nhân của Thừa tướng Phòng Dung',
      d: 'Ngài Di-già-thích-ca',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Ngài Thiên Thai Trí Giả là người ở Trung Hoa ngày đêm quỳ lạy hướng về Ấn Độ cầu kinh Lăng Nghiêm [2].',
      b: 'Sai. Thừa tướng Phòng Dung là người nhuận sắc bản dịch, nhưng không trực tiếp dùng hóa chất tẩy lụa [5].',
      c: 'Đúng. Phu nhân của Thừa tướng Phòng Dung là người đem cuốn lụa nấu với hóa chất để máu mủ tan đi, giữ lại nét chữ Phạn [5].',
      d: 'Sai. Ngài Di-già-thích-ca đóng vai trò dịch từ ngữ, không phải người tẩy lụa [5].',
    },
  },
  {
    question: 'Nguyên nhân trực tiếp dẫn đến việc Đức Phật thuyết Kinh Lăng Nghiêm là gì?',
    options: {
      a: 'Chư Tăng tự tứ vào ngày rằm tháng bảy',
      b: 'Ông A-nan gặp nạn với nàng Ma-đăng-già',
      c: 'Vua Ba-tư-nặc thỉnh cầu Phật dạy về chơn tâm',
      d: 'Ngài Văn-thù Sư-lợi muốn tìm hiểu về thần chú',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ngày mãn hạ tự tứ chỉ là bối cảnh thời gian [6].',
      b: 'Đúng. Việc ông A-nan bị nàng Ma-đăng-già dùng huyễn thuật bắt giữ khiến Phật phải nói thần chú cứu nạn và sau đó giảng kinh Lăng Nghiêm [7], [8].',
      c: 'Sai. Vua Ba-tư-nặc thỉnh Phật về cúng dường, không phải thỉnh cầu dạy về chơn tâm [6].',
      d: 'Sai. Ngài Văn-thù được Phật sai đem thần chú đi cứu ông A-nan, không phải là người yêu cầu giảng kinh [8].',
    },
  },
  {
    question: 'Theo giải thích trong văn bản, từ "Thủ Lăng Nghiêm" (Tàu dịch là Đại định kiên cố) có nghĩa là gì?',
    options: {
      a: 'Sự tập trung trí tuệ vào một điểm',
      b: 'Phép thuật mạnh nhất để trừ tà',
      c: 'Bản thể chơn tâm bao la, tịnh lặng và bất động',
      d: 'Một trạng thái thiền định tạm thời',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. "Thủ Lăng Nghiêm" mang ý nghĩa sâu xa hơn sự tập trung thông thường [9].',
      b: 'Sai. Dù chú Lăng Nghiêm có công năng trừ tà, nhưng ý nghĩa tên kinh chỉ về chơn tâm [8], [9].',
      c: 'Đúng. "Thủ Lăng Nghiêm" nghĩa là bản thể chơn tâm bao la trùm khắp vũ trụ (Đại), thường tịch tịnh (Định) và như như bất động, không thay đổi (Kiên cố) [9].',
      d: 'Sai. Bản thể này là "kiên cố", "thấu xưa suốt nay", tức là vĩnh viễn, không phải trạng thái tạm thời [9].',
    },
  },
  {
    question: 'Tại sao Kinh Phật thường có thêm chữ "Khế" (Khế kinh)?',
    options: {
      a: 'Vì hợp với căn cơ chúng sanh và hợp với chân lý',
      b: 'Vì đó là mệnh lệnh của các vị vua Ấn Độ',
      c: 'Vì đó là những lời tiên tri cho tương lai',
      d: 'Vì nó được viết trên lá bối hoặc vải lụa',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Chữ "Khế" có nghĩa là hợp: vừa hợp với căn cơ trình độ của chúng sanh, vừa hợp với chân lý [10].',
      b: 'Sai. Không liên quan đến mệnh lệnh của các vua Ấn Độ [10].',
      c: 'Sai. Chữ Khế không mang ý nghĩa là lời tiên tri [10].',
      d: 'Sai. Chữ Khế không dùng để chỉ chất liệu ghi chép như lá bối hay lụa [10].',
    },
  },
  {
    question: 'Sai lầm nào của ông A-nan khiến ông nhận ra rằng "ai tu nấy chứng" mặc dù mình là em của Phật?',
    options: {
      a: 'Ông không tham gia lễ tự tứ cùng chư Tăng',
      b: 'Ông ỷ lại vào tình thương của Phật và chỉ lo học rộng nghe nhiều',
      c: 'Ông phân biệt đối xử khi đi khất thực',
      d: 'Ông quá tập trung vào việc bố thí',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ông không kịp dự lễ do nhận lời thỉnh riêng trước, đây không phải sai lầm cốt lõi [11].',
      b: 'Đúng. Ông A-nan khóc than nhận lỗi vì đã ỷ lại mình là em Phật nên bỏ bê tu niệm, chỉ lo học rộng nghe nhiều [8].',
      c: 'Sai. Văn bản nhấn mạnh ông đi khất thực với tâm bình đẳng, không phân biệt đối xử [11].',
      d: 'Sai. Bố thí không phải là sai lầm được nhắc đến trong đoạn này [11], [8].',
    },
  },
  {
    question: 'Hình ảnh "Vô kiến đảnh tướng" của Phật được dùng để dụ cho điều gì trong tiêu đề kinh?',
    options: {
      a: 'Khả năng thần thông biến hóa của người tu',
      b: 'Ánh hào quang chiếu rọi khi Phật thuyết pháp',
      c: 'Chiều dài vô tận của văn bản kinh',
      d: 'Sự quý báu và khó thấu suốt của kinh này',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Hình ảnh này không dụ cho thần thông [12].',
      b: 'Sai. Hào quang trên đỉnh đầu Phật là bối cảnh xuất hiện thần chú, nhưng không phải là ý nghĩa dụ của "Vô kiến đảnh tướng" trong tên kinh [7], [12].',
      c: 'Sai. Không liên quan đến độ dài của bộ kinh [12].',
      d: 'Đúng. Tướng "Vô kiến đảnh" dùng để dụ cho bản thể chơn tâm và bộ kinh này rất quý báu, ít có, khó gặp và hàng phàm phu hay Nhị thừa khó bề thấu suốt được [12], [13].',
    },
  },
  {
    question: 'Theo nội dung kinh, sự khác biệt căn bản giữa Phật và chúng sanh là gì?',
    options: {
      a: 'Phật và chúng sanh có thể tánh chơn tâm khác nhau',
      b: 'Phật có thần thông còn chúng sanh thì không',
      c: 'Phật không còn thân xác vật lý như chúng sanh',
      d: 'Phật hoàn toàn giác ngộ chơn tâm, còn chúng sanh thì mê muội',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Phật và chúng sanh vốn đồng một thể tánh chơn tâm [14].',
      b: 'Sai. Dù Phật có thần thông nhưng đó không phải là điểm khác biệt căn cốt [14].',
      c: 'Sai. Yếu tố thân xác vật lý không được đề cập là sự khác biệt chính trong ngữ cảnh này [14].',
      d: 'Đúng. Cả hai đồng một thể tánh chơn tâm, nhưng Phật đã giác ngộ hoàn toàn, trong khi chúng sanh bị mê muội chơn tâm nên phải luân hồi sanh tử [14].',
    },
  },
  {
    question: 'Cụm từ "Như Lai mật nhân" trong tiêu đề kinh có ý nghĩa gì?',
    options: {
      a: 'Là tên gọi của một vị Phật cổ đại',
      b: 'Là chặng đường tu hành khởi đầu để thành đạo chứng quả',
      c: 'Là những bí mật mà Phật không bao giờ tiết lộ',
      d: 'Là những phép thần thông bí mật của Như Lai',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đây không phải tên một vị Phật [9].',
      b: 'Đúng. Chỉ việc mười phương các Đức Phật đều y theo kinh này làm "nhân địa tu hành" (bước khởi đầu) để đạt được thành đạo chứng quả [9], [15].',
      c: 'Sai. Lời Phật dạy trong kinh để truyền bá và độ sinh, không phải bí mật giấu kín [2], [9].',
      d: 'Sai. "Nhân" chỉ nguyên nhân, nền tảng tu tập (nhân địa), không phải thần thông bí mật [9].',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-1-phan-duyen-khoi',
  slug: 'bai-thu-1-phan-duyen-khoi',
  title: 'Bài Thứ 1 - Phần Duyên Khởi',
  type: 'article',
  status: 'published',
  order: 2,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-25',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-1-phan-duyen-khoi/infographic.png',
      readingContent,
      tableOfContents: [
        { id: 'phan-duyen-khoi', label: 'Bài thứ nhất: Phần Duyên Khởi' },
        { id: 'duyen-khoi', label: 'A. Phần Duyên Khởi', indent: 1 },
        { id: 'chanh-de', label: 'B. Phần Chánh Đề', indent: 1 },
        { id: 'nguyen-nhan-phat-noi-kinh-lang-nghiem', label: 'I. Nguyên nhân Phật nói Kinh Lăng Nghiêm', indent: 2 },
        { id: 'a-nan-cau-phat-day-phuong-phap-tu-hanh-lan-thu-nhat', label: 'II. A-nan cầu Phật dạy phương pháp tu hành lần thứ nhất', indent: 2 },
        { id: 'phan-luoc-giai', label: 'III. Phần lược giải', indent: 2 },
        { id: 'dinh-danh-va-giai-nghia-ten-kinh', label: '1. Định danh và giải nghĩa tên kinh', indent: 3 },
        { id: 'noi-dung-kinh-lang-nghiem', label: '2. Nội dung Kinh Lăng Nghiêm', indent: 3 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-1-phan-duyen-khoi/B%E1%BA%A3n_%C4%90%E1%BB%93_Ch%C6%A1n_T%C3%A2m.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/HzUSR-w7MEU',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6iOIpJJzHB0aRB8DmLVZmo?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần Duyên Khởi',
    passPercentage: 70,
    questions,
  },
}

export default lesson
