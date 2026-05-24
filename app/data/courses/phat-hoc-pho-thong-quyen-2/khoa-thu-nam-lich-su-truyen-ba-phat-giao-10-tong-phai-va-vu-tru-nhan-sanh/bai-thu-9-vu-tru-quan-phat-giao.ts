import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="vu-tru-quan-phat-giao">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI 9: VŨ TRỤ QUAN PHẬT GIÁO</h2>

    <section id="mo-de">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">A. MỞ ĐỀ</h3>
      <p>Một câu hỏi nan giải nhất của nhân loại: "Vũ trụ từ đâu mà có?"</p>
      <p>Từ xưa đến nay câu hỏi này đã làm cho bao nhiêu đầu óc phải vô cùng bối rối, thắc mắc, và có khi đến cuồng loạn. Bao nhiêu mực đã chảy, bao nhiêu giấy đã chất chồng, bao nhiêu bọt mép đã khô cạn để thuyết minh về vấn đề trên. Nhưng cuối cùng nhân loại vẫn chưa thấy được thỏa mãn.</p>
      <p>Về phía các triết gia, người thì cho vũ trụ do nước tạo thành, người thì cho do không khí, người cho do hơi nóng, người cho do tứ đại... tạo thành.</p>
      <p>Về phía các tôn giáo, thì hầu hết đều tin vũ trụ do một Tạo vật chủ dựng nên. Tạo vật chủ ấy tùy theo các tôn giáo mà có tên khác nhau: hoặc Brahma, hoặc Ngọc Hoàng Thượng đế, hoặc Chúa Trời, hoặc Jéhovah... Vậy vấn đề này, do Phật trả lời như thế nào?</p>
    </section>

    <section id="chanh-de">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">B. CHÁNH ĐỀ</h3>

      <section id="dat-van-de-tien-quyet">
        <h4 class="text-lg font-semibold">I. Đặt vấn đề tiên quyết</h4>
        <p>Phật giáo, khác với các tôn giáo khác, không tin có Tạo vật chủ. Đối với Phật giáo, thì vũ trụ vạn hữu sanh ra, không nhờ một đấng nào, hay một phép nào ở ngoài nó cả, mà chỉ do tự kỷ nhân quả tiếp nối mà thành. Cái quả bây giờ là do cái nhân ở trước, các cái nhân ở trước là do cái quả ở trước nữa; cứ như thế đi ngược trở lên mãi, nhân này quả nọ, không bao giờ cùng. Như thế, đối với Phật giáo, vũ trụ là vô thỉ (không có cái ban đầu). Mà đã vô thỉ thì làm sao có cái nhân duyên đầu tiên?</p>
        <p>Sở dĩ người đời tin phải có một sự bắt đầu, là vì với sự nhận xét có giới hạn của mình, thấy vật gì cũng có cái bắt đầu cả. Thí dụ: cái bàn, trước khi chưa có thợ mộc đóng thì nó không có; hay con gà, sanh ra là do mẹ nó... Tương đối mà nói, thì cái bàn hay con gà có một sự sanh thành; nhưng nếu chúng ta đừng cắt xén thời gian và không gian ra từng khoảng một như thế, thì chúng ta thấy rằng trước cái bàn không phải là không có gì hết mà phải có gỗ, trước gỗ là cây, trước cây là hạt... Con gà cũng như thế, trước con gà, có con gà mẹ; trước con gà mẹ là mẹ, thì nó là con, do một con gà mẹ khác sinh ra...</p>
        <p>Nguyên nhân thứ hai làm cho người đời tin có một sự bắt đầu của vũ trụ vạn hữu là ý niệm sai lầm về quan niệm "có và không". Với con mắt trần nông cạn và hẹp hòi, khi chúng ta thấy một khoảng trống thì gọi là không; khi thấy một vật có màu sắc, hình dáng, trọng lượng... thì gọi là có. Và cũng do sự quan sát hẹp hòi, nông cạn, chúng ta thường có quan niệm rằng: "cái không" có trước "cái có". Thí dụ: một khoảng đất kia, thường ngày chúng ta đi ngang qua nó, nhận thấy trên ấy không có nhà cửa gì cả, ta gọi là đất trống. Bặt đi một dạo độ 6 tháng, ta không đi ngang qua đó nữa. Bây giờ có việc đi qua đó lại, ta thấy một tòa nhà đồ sộ cất lên, ta tự bảo khoảng đất ấy hết trống rồi. Trước là không có bây giờ là có. Ta phóng đại ý nghĩ ấy ra và cho rằng: "cái không" có trước "cái có", hay "cái có" bao giờ cũng đến sau "cái không". Và chúng ta dẫn cái suy luận ấy đi xa hơn để kết luận rằng "cái không" mà thành cái có được, tất nhiên phải có một cái khác tạo ra.</p>
        <p>Nhưng chúng ta đã suy luận sai, và cái sai lầm ấy bắt đầu từ quan niệm sai lầm về "có" và "không".</p>
        <p>Trước tiên, chúng ta quên rằng: khoảng đất kia không phải là trống không, hoàn toàn không có gì cả, mà trống ở đây có nghĩa là không có nhà. Và cái "có" sau này là có nhà, chứ không phải là hoàn toàn có, vì một ngày kia nó cũng sẽ tan rã, và trở thành không.</p>
        <p>Cái "có" và "không" ở đây là "có", "không" tương đối. "Có" là một cái gì, "không" cũng là một cái gì. Còn nói một cách tuyệt đối, thì trong vũ trụ này chưa bao giờ có một cái không hoàn toàn không cả. Cũng như cái có mà ta thường thấy chung quanh ta cũng không phải hoàn toàn, vĩnh viễn có. "Có, không" đều tương đối, nghĩa là dựa vào nhau mà thành. Hoặc trong một chỗ này có thì chỗ khác không, hoặc đắp đổi nhau trong thời gian có trước rồi không sau, hay không trước rồi có sau. Khi ấy lấy riêng ra từng pháp mà xét, thì thấy tuần tự có thành, trụ, hoại, không, nhưng xét toàn thể thì phút giây này cũng đồng thời có thành, có trụ, có hoại, có không cả.</p>
        <p>Như thế, để kết luận: không phải cái không xuất hiện trước cái có. "Không và có" đều có một lần. Và vì thế, cho nên không thể có nguyên nhân đầu tiên của cái có.</p>
        <p>Trong hiện tượng giới ta thấy có sanh diệt, có thể có, chúng ta cho là vô thường. Nhưng nếu xét toàn thể vũ trụ, đứng về thực tại giới, thì chẳng có sanh diệt mà vạn hữu là thường trụ.</p>
        <p>Như trên đã nói, không có nguyên nhân đầu tiên. Và do đó, ta sẽ đặt sai vấn đề, nếu ta hỏi: "Nguyên nhân đầu tiên là gì?" và ta lại càng đi xa hơn nữa trong sự sai lầm, khi hỏi: "Ai sáng tạo ra vũ trụ vạn hữu?".</p>
        <p>Phải đặt câu hỏi này mới đúng: "Thật thể của cái có và cái không tương đối (tức là vũ trụ vạn hữu) là như thế nào? Hay thực tại của vũ trụ như thế nào?".</p>
        <p>Đó là câu hỏi thứ nhất, nhắm mục đích tìm hiểu thật thể, thật tánh, thật tướng, hay nói theo danh từ triết học, nhắm mục đích tìm hiểu thực tại của vũ trụ vạn hữu.</p>
        <p>Câu hỏi thứ hai là: "Phát nguyện từ thực tại, vũ trụ vạn hữu đã hình thành và biến chuyển bởi nguyên nhân gì, và như thế nào?".</p>
        <p>Đây là hai câu hỏi chính, sau đó, chúng ta có thể thêm vào những câu hỏi phụ như: "Vũ trụ rộng hay hẹp, có cùng hay không cùng?"...</p>
        <p>Trả lời câu hỏi thứ nhất đạo Phật có Thật tướng luận; trả lời câu hỏi thứ hai, đạo Phật có Duyên khởi luận; trả lời câu hỏi thứ ba: Phật dạy vũ trụ hay thế giới là vô lượng vô biên vô cùng vô tận.</p>
        <p>Dưới đây, chúng ta lần lượt trình bày những vấn đề trên.</p>
      </section>

      <section id="that-tuong-luan">
        <h4 class="text-lg font-semibold">II. Thật tướng luận</h4>
        <p>Thật tướng luận là lý thuyết giải bày về thật thể của vũ trụ. Thật thể hay thật tướng của vũ trụ, đạo Phật thường gọi là chân như. Chân như nghĩa là chân thật, không giả dối. Như là luôn luôn như thế, không biến đổi, không sanh diệt, không còn mất, vô thỉ vô chung. Vậy chân như là một thật thể không biến đổi, không sanh diệt, không còn mất, vô thỉ vô chung, sáng suốt, có đủ tất cả những diệu dụng đức tánh.</p>
        <p>Để chỉ chân như, nhiều khi Phật giáo, tùy theo mỗi trường hợp, cũng gọi bằng những danh từ như: Chân tâm, Viên giác, Thắng nghĩa, Phật tánh, Giác tánh, Pháp tánh, Như như, Nhất như...</p>
        <p>Thật ra thì khó mà kể cho hết những danh từ chỉ cho Chân như. Nhưng dù có kể hết, thì cũng chỉ là kể danh từ, chứ không thể nhận thấy được Chân như, chỉ có những vị giác ngộ mới trực nhận, mới thể nhập, hay thể chứng mà thôi.</p>
        <p>Ngôn ngữ, văn tự chỉ có thể diễn tả được hiện tượng giới; còn khi muốn trình bày về thực tại, thì trở thành bất lực. Và càng bám vào, càng y như nhất thiết vào văn tự, ngôn ngữ lại càng đi xa thật thể, chân như. Một triết gia Pháp, ông Bergson đã nói rất đúng rằng: ngôn ngữ, danh tự đã cắt xén Sự Sống (thực tại) ra thành manh mún. Thật thế, mỗi tên gọi, mỗi chữ đều có một phạm vi, một nội dung nhất định của nó. Dùng một cái có hạn lượng để đo lường, dò xét một cái không hạn lượng, vượt ra ngoài không gian và thời gian, thì chắc chắn là phải sai lầm.</p>
        <p>Cho nên thái độ đúng đắn nhất để trực nhận thật thể chân như là im lặng, lìa xa văn tự, ngôn ngữ. Đó là thái độ mà Đức Phật đã áp dụng lần đầu tiên sau khi chứng đạo dưới cây Bồ-đề.</p>
        <p>Nhưng nếu không nói gì cả thì làm sao cứu độ được chúng sinh, làm sao đưa nhân loại đến bờ giác. Cuối cùng Đức Phật phải nói. Nhưng khi nói đến cái khó nói nhất là "Thực tại" hay "Chân như", thì Đức Phật không thể dùng một lối như thông thường được. Do đó, mà chúng ta thấy trong kinh điển Phật giáo, có những cách nói mới nghe thì rất vô lý, gàn dở như: cũng có, cũng không, không phải không, không phải có, không phải đồng, không phải khác, cũng đồng cũng khác, không phải một, không phải nhiều, không phải nhớp, không phải sạch, vân vân và vân vân...</p>
        <p>Nhưng, mặc dù đã nói như thế rồi, Đức Phật vẫn sợ người đời chấp vào những câu nói ấy mà cho là thật, nên Ngài lại rào đón thêm nữa: "Chân lý như mặt trăng, giáo lý ta dạy như ngón tay để chỉ mặt trăng cho các người thấy. Đừng nhận lầm ngón tay ta là mặt trăng". Hay: "Những điều ta biết như lá trong rừng, và cái ta nói như nắm lá trong tay này". Hay: "Y theo kinh điển giải nghĩa thì oan cho tam thế chư Phật, nhưng lìa kinh ra một chữ thì lại đồng với ma thuyết". Hay: "Suốt đời, Như Lai chưa nói một câu nào".</p>
        <p>Tóm lại, mục đích của Thật tướng luận là muốn cho chúng ta nhận chân rằng: Thực tại, hay Chân như không thể dùng ngôn ngữ văn tự mà thấy được; trái lại, phải rời bỏ tất cả danh tướng mà trực nhận. Nhưng để có một ý niệm thô thiển về Chân như, hãy tự bảo rằng: "Chân như là cái gì trái hẳn với hiện tượng giới". Hay: "Hiện tượng giới là mặt trái của Chân như".</p>
        <p>Nhưng, khi nói đến hai chữ "mặt trái" đừng liên tưởng rằng có một "bề mặt" như bao nhiêu bề mặt ta thường thấy trong hiện tượng giới.</p>
      </section>

      <section id="duyen-khoi-luan">
        <h4 class="text-lg font-semibold">III. Duyên khởi luận</h4>
        <p>Duyên khởi luận tức là những lý thuyết nói về nguyên nhân hay lý do sanh khởi của hiện tượng giới.</p>
        <p>Duyên khởi luận trong Phật giáo có nhiều thuyết; những thuyết này không trái ngược nhau, mà chỉ khác nhau về phương diện sâu cạn, rốt ráo hay chưa mà thôi. Vậy chúng ta hãy tuần tự đi từ cạn đến sâu:</p>

        <section id="nghiep-cam-duyen-khoi">
          <h5 class="font-semibold">1. Nghiệp cảm duyên khởi</h5>
          <p>Nghiệp cảm duyên khởi luận là chủ trương của tiểu thừa nguyên thỉ Phật giáo. Lý thuyết này rút ra từ trong "Tứ diệu đế" và "Thập nhị nhân duyên". Như chúng ta đã học về "Tứ diệu đế", Phật dạy nguyên nhân của đau khổ, của sanh tử luân hồi là do "hoặc nghiệp". Hoặc tức là mê vọng; có hành động sai lầm, vì hành động sai lầm nên chịu quả đau khổ... và cái vòng nhân quả luân hồi cứ tiếp tục mãi, tạo ra có chánh báo là thân ta và y báo tức là sơn hà đại địa. Sơn hà đại địa sở dĩ có là có một cách tương đối với thân ta mà thôi. Khi nghiệp nhân biến đổi thì nghiệp quả cũng biến đổi và do đó chánh báo và y báo cũng biến đổi theo. Người khi tạo những nghiệp nhân làm người thì đời sau đầu thai lại, chánh báo vẫn là người và y báo vẫn là sơn hà đại địa như người đã nhận thấy. Nhưng nếu tạo những nghiệp nhân dữ, thì chánh báo ở đời sau sẽ là loài súc sinh hay ngạ quỷ, và y báo, tức là cảnh giới ở chung quanh cũng không còn giống như cảnh giới của người nữa, nghĩa là vũ trụ, vạn hữu sẽ biến đổi theo tầm mắt và sự hiểu biết của các loài ấy. Do đó mà gọi là "nghiệp cảm", nghĩa là do nghiệp như thế nào, thì cảm thọ cái thân và cảnh như thế ấy. Nói một cách tổng quát, do nghiệp lực mà có thân (chánh báo) và thế giới (y báo). Chánh báo và y báo có thể thế này hay thế khác, tốt hay xấu, là do nghiệp lành hay dữ. Nhưng dù sao, hễ còn nghiệp là còn có hiện tượng giới. Dứt trừ được nghiệp là trở về với Chân như, là nhập Niết-bàn.</p>
        </section>

        <section id="a-lai-da-duyen-khoi">
          <h5 class="font-semibold">2. A-lại-da duyên khởi</h5>
          <p>Thuyết này thuộc về Đại thừa thỉ giáo, đi sâu hơn thuyết trên một tầng. Trong thuyết nghiệp cảm duyên khởi, chỉ nói có sáu thức là nhãn, nhĩ, tỷ, thiệt, thân, ý. Sau khi chết, ngũ uẩn tan rã, nghiệp lực dẫn dắt đi đầu thai. Nhưng dẫn dắt cái gì? Lục thức hay ý thức sanh diệt vô thường, biến chuyển luôn luôn, thì nghiệp dù còn, mà lấy gì giữ gìn cái nghiệp quả, khiến cho nó triển chuyển không dứt?</p>
          <p>Đại thừa thỉ giáo, bổ khuyết cho thuyết trên, tìm thấy thêm hai thức nữa là Đệ thất thức hay Mạt-na thức, và Đệ bát thức hay A-lại-da thức.</p>
          <p>Mạt-na nghĩa là cầm bắt lấy chỗ thấy biết, nghĩa là tự nhận có một cái ngã, và gìn giữ cái ngã ấy. Nhưng làm sao giữ được cái giả ngã ấy, trong lúc ngũ uẩn, lục thức đều sanh diệt vô thường hợp ly mãi mãi? Vậy thì dưới Mạt-na thức, tất phải có một thức khác thường tại, trùm chứa tất cả chủng tử của các pháp mới được.</p>
          <p>Đó chính là thức thứ Tám, hay A-lại-da thức, hay tạng thức (thức trùm chứa). Thức này không phải vô thường như ngũ uẩn, mà là hằng khởi, thường tại. Nó có hai công năng: một là thâu nhiếp tất cả các pháp, hai là sinh khởi tất cả các pháp. Khi chúng ta gây thiện nghiệp hay ác nghiệp, thì những chủng tử được dồn chứa vào Tạng thức, đến khi đủ nhân duyên thì những chủng tử ấy phát ra hiện hành.</p>
          <p>Bởi A-lại-da thức bao gồm hết thảy chủng tử của chư pháp, nên nó phát hiện được hết năng lực vô hạn của vạn tượng. Khi căn thân của ta vừa phát sanh là nó bao gồm hàm khách quan giới (tức là vạn vật). Khách quan giới thiên sai vạn biệt là do trong chủ quan giới có ý thức tác động mà ra.</p>
          <p>Tóm lại, A-lại-da thức là cái căn bản của hiện tượng giới. Từ vô thỉ, A-lại-da thức đã bao gồm chủng tử. Hiện tượng giới do chủng tử này mà phát hiện. Hiện tượng đã phát hiện thì kích thích phát sinh duyên mới, dẫn đến chỗ tác dụng. Như thế, chủng tử cùng hiện tượng, nhân quả nhau mãi, mà làm cho hiển hiện vạn hữu, và làm nền móng qua bao kiếp nhân quả luân hồi.</p>
          <p>Nhưng, nếu A-lại-da thức là nền móng của nhân quả luân hồi, thì A-lại-da thức cũng là căn nguyên của giải thoát, vì trong A-lại-da thức có đủ cả chủng tử hữu lậu và chủng tử vô lậu. Chủng tử hữu lậu là những hạt giống phát sanh ra thiên sai vạn biệt, tức là hiện tượng giới; còn chủng tử vô lậu, đối với ngoại giới biết có hư vọng, cho nên không đủ cho tâm vọng động, do đó có thể đưa đến sự giải thoát.</p>
        </section>

        <section id="chan-nhu-duyen-khoi">
          <h5 class="font-semibold">3. Chân như duyên khởi</h5>
          <p>Thuyết này là của Đại thừa chung giáo. Theo Đại thừa chung giáo thì chân như tùy duyên sanh ra muôn pháp; hay nhất thiết duy tâm tạo. Tâm bao gồm tất cả và có hai phương diện: về phương diện động, thì tâm là cái cửa của Chân như.</p>
          <p>Nhưng vì sao, cũng một tâm mà có hai phương diện tương phản như thế? Ấy bởi vô minh. Chân như vốn là thường trụ, bất động, nhưng bởi vô minh làm duyên, khiến cho nó vọng động, làm ra thiên sai vạn biệt. Vô minh không phải là vật có thật, nó dựa vào tâm thể mà có. Nó là một vọng niệm, cho nên trong kinh thường nói: "Hốt nhiên niệm khởi, gọi là vô minh". Do cái vọng niệm ấy mà thấy có chủ quan, có khách quan, có tự ngã, có phi ngã, có vũ trụ, vạn hữu.</p>
          <p>Nhưng vạn hữu không phải ngoài tâm mà tồn tại được. Chân như tuy bị vô minh kích thích mà dao động, nhưng trong động có tịnh, trong tịnh có động, cũng như nước và sóng ở trong biển: Đứng về phương diện nước mà nhìn, thì tất cả sóng đều là nước; đứng về phương diện sóng mà nhìn, thì tất cả nước đều là sóng. Tâm dụ cho biển, Chân như dụ cho nước, và vạn tượng giới dụ cho sóng. Chúng sanh, vì vô minh che lấp nên chỉ thấy có vạn tượng giới; Bồ-tát và Phật vì đã trừ vô minh nên thấy vạn tượng là chân như: Tịnh là chân như, Động là vạn tượng. Động, Tịnh không rời nhau, không cùng là một, nhưng cũng không phải là khác nhau. Đó là hai phương diện của Tâm. Để chỉ hai phương diện này, trong kinh thường có câu: "Tùy duyên bất biến, bất biến tùy duyên". Tùy duyên tịnh, sanh ra tứ thánh; tùy duyên nhiễm, sanh ra lục phàm. Từ tịnh trở thành động là đi vào cửa của sanh diệt, và đó cũng là nguyên nhân phát triển của vũ trụ vạn hữu. Từ động trở về tịnh là đi ra cửa chân như, và đó cũng là nguyên nhân của giải thoát.</p>
        </section>

        <section id="luc-dai-duyen-khoi">
          <h5 class="font-semibold">4. Lục đại duyên khởi</h5>
          <p>Lục đại duyên khởi là chủ trương của Mật tông hay Chân ngôn tông. Lục đại là: địa, thủy, hỏa, phong, không (tức là không gian) và thức. Năm đại trước thuộc về sắc pháp (tức là vật), đại thứ sáu thuộc về tâm pháp (tức là tâm). Sáu đại này mỗi mỗi đều dung thông không ngăn ngại nhau, và tùy duyên sanh khởi ra vũ trụ vạn hữu.</p>
          <p>Chia ra vật và tâm là trí thức của ta phân biệt ra như thế, chứ bản thể của thực tại vẫn là một, vẫn không thể phân chia được. Vật là hình tướng, tâm là lực hoạt động. Lực không lìa được hình. Lìa hình thì lực chẳng tồn tại được. Còn hình nếu không nhờ lực thì không phát hiện được. Vật và tâm là hai phương diện của bản thể nhất như.</p>
          <p>Ta có đây là do Lục đại kết hợp mà ra. Lục đại ly tán thì ta không còn. Còn mất chẳng qua là một cuộc đổi thay của Lục đại mà thôi. Lục đại kết hợp và ly tán làm thành vũ trụ hoạt động. Đứng về phương diện tổng quát mà nhìn, thì vũ trụ là một sự hoạt động không ngừng của Lục đại.</p>
          <p>Chân như là thực thể của lục đại, mà lý tánh của ta trừu tượng được. Lìa hiện tượng không có thật thể được, lìa vật không có lý được.</p>
          <p>Thánh, phàm khác nhau, thiện, ác khác nhau ở chỗ biết hay không biết phân biệt chân như với hiện tượng.</p>
        </section>

        <section id="phap-gioi-duyen-khoi">
          <h5 class="font-semibold">5. Pháp giới duyên khởi</h5>
          <p>Pháp giới duyên khởi là chủ trương của Đại thừa viên giáo (Hoa Nghiêm tông). Thuyết này cho rằng pháp giới (tức là vũ trụ vạn hữu) là một duyên khởi rất lớn nghĩa là các pháp làm nhân, làm duyên cho nhau, nương tựa, tương phản, dung thông nhau mà thành lập.</p>
          <p>Cái năng lực chủ động của pháp giới duyên khởi không phải thuộc về "nghiệp lực" của chúng sanh, không phải "tạng thức" sai biệt sanh diệt của A-lại-da, cũng không phải cái "lý tánh bình đẳng" bất sanh bất diệt của chân như, mà chính là do vạn pháp, pháp này dung thông với pháp kia, pháp kia dung thông với pháp này, cùng nhau làm duyên khởi, mỗi lớp mỗi lớp không cùng tột, cho nên gọi là "vô tận duyên khởi" hay "trùng trùng duyên khởi".</p>
          <p>Như thế, vũ trụ vạn hữu là một cuộc đại hoạt động của hiện tượng, từ vô thỉ đến vô chung, nối tiếp và lan tràn vô cùng tận, như những đợt sóng. Vì có hoạt động nên mới có sanh diệt chuyển biến, tức là có vạn tượng, có vũ trụ.</p>
          <p>Sở dĩ các pháp làm nhân, làm duyên hòa hợp, dung thông nhau được là do mười đặc tánh kỳ diệu mà Đại thừa viên giáo gọi là "mười món huyền môn". Lại do mười món "huyền môn" này, mà trong pháp giới, Sự (chỉ cho sự tướng sai biệt), Lý (chỉ cho lý tánh bình đẳng), Lý-Sự và Sự-Sự được dung thông vô ngại (xem lại bốn "pháp giới" và mười "huyền môn" trong bài nói về Hoa Nghiêm tông).</p>
        </section>

        <p>Trong Duyên khởi luận của Phật giáo, chúng ta thấy có năm thuyết. Đó là: Nghiệp cảm duyên khởi, A-lại-da duyên khởi, chân như duyên khởi, Lục đại duyên khởi và pháp giới duyên khởi. Có người ngạc nhiên tự hỏi: tại sao cũng là Phật dạy cả, mà lại bất nhất như thế? Khi thì Phật dạy chúng sanh và thế giới do Nghiệp cảm mà phát sanh, khi thì dạy do A-lại-da thức, khi thì do chân như, khi thì do Lục đại, khi thì Trùng trùng duyên khởi, vậy thì viết theo lý thuyết nào đúng?</p>
        <p>Sự sai khác đó là vì căn cơ của chúng sanh không đồng, phải dắt dẫn dần dần từ thấp đến cao, chúng sanh mới hiểu được.</p>
        <p>Đối với hàng Tiểu thừa thì Phật nói: "nghiệp", vì hàng Tiểu thừa chưa nhận được tạng thức, chủng tử... Lần lên đến Đại thừa thỉ giáo, các bậc này vì mới hướng về Đại thừa, chưa rõ chân như tùy duyên sanh ra các pháp, nên Phật chỉ nói về "A-lại-da thức". Đến Đại thừa đốn giáo vì hạng này chưa nhận được lý "Trùng trùng duyên khởi", nên Phật nói "Chân như tùy duyên sanh ra các pháp". Đến Đại thừa viên giáo, thì các bậc Bồ Tát căn cơ đã thuần thục, nên Phật mới nói đến "Lục đại" và "Trùng trùng duyên khởi".</p>
        <p>Sự sai khác ở đây, chỉ là sai khác về tầng bậc, chứ không phải sai khác về nội dung; sai khác về khía cạnh đứng nhìn và tầm mắt rộng hẹp, chứ không phải sai khác về bản chất.</p>
        <p>Nhìn một cách nông cạn và nhỏ hẹp thì chỉ thấy có nghiệp lực; nhưng nhìn sâu hơn và rộng hơn tí nữa thì thấy: dưới cái nghiệp lực, là A-lại-da thức. Nhìn sâu và rộng hơn nữa thì thấy dưới A-lại-da thức là Chân như.</p>
        <p>Vì Chân như tùy duyên mà sanh ra hiện tượng. Trước thì bảo rằng có A-lại-da thức mới phát khởi ra hiện tượng. Đây thì tự Chân như tùy duyên mà hiện tượng phát khởi.</p>
        <p>Khi đã khám phá ra Chân như rồi, nếu nghiên cứu kỹ lưỡng tường tận hơn nữa, thì nhận thấy Chân như không phải là một cái gì xa lạ, mà chính là chân như nằm ngay nơi vạn tượng. Chân như là khía cạnh Tịnh, mà vạn tượng là khía cạnh Động của một cái gọi là "Nhất như" hay "Tâm". Nhưng nếu đi sâu hơn nữa, thì Tịnh và Động không phải là hai khía cạnh riêng rẽ, mà chính ngay trong Động có Tịnh, trong Tịnh có Động. Động là "Sự" (vạn tượng), Tịnh là "Lý" mà ta trực nhận được qua "Sự", qua cái "Trùng trùng duyên khởi" của vạn hữu.</p>
        <p>Đến "Chân như duyên khởi" luận là ta đã tìm đến cái căn nguyên của vũ trụ vạn hữu. Nhưng nếu còn phải nói đến "Lục đại duyên khởi" và "Pháp giới duyên khởi" là muốn tìm hiểu cái hành tướng, cái then máy của vạn tượng để trực nhận chân như. "Lục đại duyên khởi" luận là dựa trên kinh nghiệm mà suy diễn chân như. Hai luận này không khác nhau về nội dung hay từng bậc, mà chỉ khác nhau về luận pháp mà thôi. Một bên đi từ Sự đến Lý, một bên đi từ Lý đến Sự.</p>
        <p>Nếu có thể dùng một ví dụ để chứng minh một cách cụ thể những lý lẽ vừa nói đến trên đây, chúng tôi xin mạn phép dùng một thí dụ thô sơ sau đây, nhưng xin thưa trước rằng thí dụ không phải là lý lẽ, mà chỉ nói lên một khía cạnh nào của lý lẽ mà thôi.</p>
        <p>Chúng ta đi vào xem một rạp hát kỳ lạ, khi đèn đã tắt và không biết trên sân khấu người ta đã bắt đầu trình diễn từ lúc nào. Rạp hát tối mò, trên sân khấu cũng không sáng mấy, mà chúng ta đứng ở đằng sau xa. Trước sân khấu, nhiều lớp màn mỏng buông xuống (dụ cho vô minh). Khi chúng ta vào thì một tấm màn từ từ kéo lên. Chúng ta thấy lờ mờ những cánh tay, những cái chân và cái miệng của một con nộm gỗ đang múa máy, ca hát trên sân khấu. Chúng ta đoán chắc ở phía trong, ở đằng sau con nộm gỗ ấy có một động lực (dụ cho nghiệp cảm duyên khởi) làm cho con nộm kia múa máy, ca hát.</p>
        <p>Một cái màn nữa vén lên và ta tiến tới thêm một mức nữa để nhìn. Chúng ta thấy bóng dáng một người đang đứng sau con nộm gỗ kia (dụ cho A-lại-da duyên khởi).</p>
        <p>Một cái màn nữa vén lên và ta tiến tới gần sân khấu hơn nữa. Ta thấy rõ ràng hơn. Thì ra con người và nộm gỗ là một: con người mang lớp nộm gỗ và đã múa máy ca hát (dụ cho Chân như duyên khởi).</p>
        <p>Một bức màn nữa được kéo lên, và ta đi sát đến sân khấu, ta nhìn thấu suốt đến hậu trường. Ta thấy rõ mỗi vật, mỗi người, từng chi tiết một trên sân khấu, sự liên lạc giữa vật này với vật kia, giữa người làm trò, người kéo màn, người đạo diễn v.v... (dụ cho Lục đại duyên khởi).</p>
        <p>Sau khi đã quan sát kỹ lưỡng sân khấu, ta xoay mặt lại nhìn khán giả, và ta đã khám phá một bí mật vô cùng quan trọng: sự liên lạc mật thiết giữa người đóng trò và khán giả. Người đóng trò vui thì khán giả vui, người đóng trò than thở thì khán giả buồn. Ngược lại, khán giả cũng ảnh hưởng rất nhiều đến người đóng trò: người đóng trò tuân theo ý muốn của khán giả, khi đóng hay thì khán giả vỗ tay hoan hô và bắt buộc diễn viên phải đóng lại; khi diễn dở, thì khán giả la ó, phản đối... Diễn viên và khán giả, hậu trường và tiền trường, tất cả một rạp hát đều liên lạc mật thiết với nhau, làm nhân duyên cho nhau, ảnh hưởng mật thiết lẫn nhau (dụ cho Pháp giới duyên khởi).</p>
        <p>Để kết luận về chương Duyên khởi luận này, chúng ta có thể tóm tắt như sau:</p>
        <p>Nghiệp cảm duyên khởi, muốn nói nghiệp lực là nguyên nhân của hiện tượng giới. Nghiệp bởi mê hoặc mà có.</p>
        <p>A-lại-da duyên khởi, muốn nói: căn nguyên của hiện tượng giới là A-lại-da thức. A-lại-da bao trùm tất cả chủng tử hữu lậu mà phát sanh vũ trụ vạn hữu. Muốn giải thoát khỏi hiện tượng giới thì phải huân tập và làm phát hiện chủng tử vô lậu.</p>
        <p>Chân như duyên khởi, là muốn nói: chân như vì duyên với vô minh mà dao động và làm phát sanh ra vũ trụ vạn hữu.</p>
        <p>Lục đại duyên khởi và Pháp giới duyên khởi là hai thuyết mường tượng giống nhau, đều thuyết minh hai phương diện hiện tượng và thật thể của nhất như. Bất tri bất giác là cái nguyên nhân của hiện tượng. Tri giác được thì giải thoát được.</p>
        <p>Những thuyết trên này đều có những điểm giống nhau: mỗi thuyết đều công nhận có chân như là bản thể của vũ trụ vạn hữu. Cái nguyên nhân làm sanh khởi vũ trụ vạn hữu là mê vọng hay vô minh. Muốn giải thoát thì phải trừ cho được mê vọng.</p>
      </section>

      <section id="khong-gian-thoi-gian">
        <h4 class="text-lg font-semibold">IV. Không gian và thời gian của pháp giới</h4>
        <p>Chúng ta đã nói về nguyên nhân sanh khởi của vũ trụ, vạn hữu. Đến đây chúng ta hãy nghe Phật dạy về sự rộng lớn vô biên và sự tồn tại vô cùng của vũ trụ, hay pháp giới.</p>

        <section id="khong-gian">
          <h5 class="font-semibold">1. Không gian</h5>
          <p>Theo lời dạy của các kinh, thì vũ trụ hay nói theo danh từ của Phật giáo: pháp giới rộng lớn vô cùng vô tận. Thế giới mà chúng ta ở đây không phải là một, mà nhiều như cát sông Hằng. Cứ một ngàn thế giới nhỏ hiệp thành một Tiểu thiên thế giới; hiệp một ngàn Tiểu thiên thế giới thành một Trung thiên thế giới; hiệp một ngàn Trung thiên thế giới thành một Đại thiên thế giới, hay "tam thiên đại thiên thế giới". Mỗi tam thiên đại thiên thế giới gồm có một ngàn triệu thế giới nhỏ như thế giới ta. Hơn nữa, vũ trụ không phải chỉ có một tam thiên đại thiên thế giới, mà gồm có vô số tam thiên đại thiên thế giới.</p>
        </section>

        <section id="thoi-gian">
          <h5 class="font-semibold">2. Thời gian (Thế gian)</h5>
          <p>Phật đã dạy: "Các pháp hữu vi, bất cứ một pháp nào cũng đều bị bốn thời kỳ chi phối, tức là thành, trụ, hoại, không". Thế giới cũng vậy, không thể thoát ra ngoài cái luật thành, trụ, hoại, không ấy được. Nhưng bởi vì trong pháp giới có không biết bao nhiêu thế giới, nên sự thành, trụ của một thế giới này là sự hoại, không của một thế giới khác, cứ như thế mà xoay vòng không dứt.</p>
          <p>Nếu lấy riêng ra một thế giới để đo lường thời gian, thì chúng ta sẽ có một con số như sau: Mỗi một thế giới đều có bốn thời kỳ hay bốn trung kiếp; mỗi trung kiếp có hai mươi tiểu kiếp, mỗi tiểu kiếp có mười sáu triệu (16.000.000) năm. Như thế một thế giới từ khi thành lập, đến khi tiêu diệt, phải trải qua: 4 x 20 x 16.000.000 = 1.280.000.000 năm. Nhưng chúng ta đã biết thế giới nhiều như cát sông Hằng, thì sự tồn tại của Pháp giới lâu dài không thể suy tính, nghĩ bàn được.</p>
          <p>Ở đây, chúng ta không có ý nêu lên một con số như trên để đo lường đích xác sự rộng lớn và sự dài lâu của Pháp giới là bao nhiêu. Chúng ta chỉ có mục đích là nêu lên những con số để có ý niệm về "sự vô cùng vô tận, vô thỉ, vô chung" của Pháp giới mà thôi. Ý niệm ấy, ngày nay cũng được khoa học tán đồng.</p>
        </section>
      </section>
    </section>

    <section id="ket-luan">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">C. KẾT LUẬN</h3>
      <p>Pháp giới tuy rộng lớn vô cùng vô tận, nhưng như chúng ta đã thấy trong đoạn nói về "Duyên khởi luận", pháp giới và nhân sanh ảnh hưởng trực tiếp lẫn nhau. Hơn nữa, như trong nghiệp cảm duyên khởi đã nói: vũ trụ do nghiệp lực của chúng sanh chiêu cảm kết thành; nghiệp lành chiêu cảm thì thân căn được viên mãn, mà vũ trụ cũng tốt đẹp; còn nghiệp dữ chiêu cảm thì thân căn xấu xa mà vũ trụ ô uế, lắm tai họa.</p>
      <p>Còn theo như A-lại-da duyên khởi đã nói: do chủng tử trong A-lại-da thức huân tập và hiện hành mà chúng ta có căn thân và thế giới như thế này hay thế khác. Nếu chúng ta huân tập chủng tử hữu lậu thì chúng ta quay cuồng mãi trong cảnh giới đau khổ, ô trược; nếu chúng ta huân tập chủng tử vô lậu, thì chúng ta sẽ thoát ra khỏi cảnh giới khổ đau này.</p>
      <p>Theo trình độ, căn cơ của chúng ta hiện tại thì hai thuyết trên này thích hợp với chúng ta hơn; còn ba thuyết dưới thì vì cao quá, khó mà thực hành cho được.</p>
      <p>Vậy chúng ta hãy nghe lời của Phật dạy trong hai thuyết "Nghiệp cảm duyên khởi" và "A-lại-da duyên khởi" mà cải tạo vũ trụ và nhân sinh.</p>
      <p>Trong hai pháp này, về nghiệp thì chúng ta nên dứt trừ "sự hoặc" và "lý hoặc", cải tạo các nghiệp dữ đổi lại các việc lành, tức là ta chiêu cảm lấy quả báo đời sau được thân thể và vũ trụ rất trang nghiêm tốt đẹp, không còn bị khổ quả như hiện nay nữa.</p>
      <p>Về chủng tử, thì hằng ngày chúng ta nên cẩn thận trong sự huân tập. Bởi vì công việc hằng ngày đều ghi vào tạng thức chúng ta, không khi nào mất được. Ta phải huân tập những điều chân lẽ chính của thánh hiền. Còn về phần tu tập, chúng ta phải quán tất cả các pháp đều do Duy thức tạo, và phải phá trừ ngã chấp và pháp chấp.</p>
      <p>Làm được như thế, chắc chắn chúng ta sẽ cải tạo thân thể và vũ trụ xấu xa này trở thành trang nghiêm tốt đẹp.</p>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo quan điểm Phật giáo, nguyên nhân nào khiến con người tin rằng vũ trụ phải có một điểm bắt đầu (hữu thỉ)?",
    "options": {
      "a": "Do sự quan sát các sự vật tương đối trong đời sống hàng ngày bị giới hạn về thời gian và không gian.",
      "b": "Do các tôn giáo lớn trên thế giới đều khẳng định có một Đấng Sáng Tạo.",
      "c": "Do ý niệm về luật nhân quả yêu cầu phải có một cái nhân đầu tiên.",
      "d": "Do khoa học chứng minh được điểm khởi đầu của mọi vật chất thông qua các thí nghiệm."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Sở dĩ người đời tin có sự bắt đầu là do nhận xét có giới hạn, khi ta cắt xén không gian và thời gian ra từng khoảng thì mới thấy có sự bắt đầu [1].",
      "b": "Sai. Dù nhiều tôn giáo tin vào Tạo vật chủ, nhưng lý do chính yếu khiến con người nghĩ vũ trụ có điểm khởi đầu là do quan niệm sai lầm về có - không và sự quan sát hẹp hòi [1].",
      "c": "Sai. Đối với Phật giáo, sự tiếp nối của nhân quả là không bao giờ cùng, đi ngược lên mãi sẽ không có cái nhân duyên đầu tiên [1].",
      "d": "Sai. Tài liệu không đề cập đến việc khoa học chứng minh điểm khởi đầu của vật chất [1]."
    }
  },
  {
    "question": "Trong 'Thật tướng luận', tại sao ngôn ngữ và văn tự được cho là bất lực khi trình bày về 'Chân như'?",
    "options": {
      "a": "Vì các triết gia phương Tây như Bergson cho rằng sự sống không cần đến ngôn ngữ.",
      "b": "Vì Chân như là một bí mật mà Đức Phật không muốn tiết lộ cho người thường.",
      "c": "Vì ngôn ngữ chỉ mang tính chất ước lệ và thường cắt xén thực tại thành từng phần manh mún.",
      "d": "Vì ngôn ngữ và văn tự thuộc về 'vô minh', không thể chứa đựng được sự thật."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Triết gia Bergson được trích dẫn để minh họa rằng ngôn ngữ đã cắt xén sự sống thành manh mún, chứ không phải nói rằng sự sống không cần đến ngôn ngữ [2].",
      "b": "Sai. Thái độ im lặng là cách tốt nhất để trực nhận Chân như, nhưng sau đó vì muốn cứu độ chúng sinh nên Đức Phật vẫn dùng phương tiện ngôn ngữ để thuyết pháp [2].",
      "c": "Đúng. Mỗi tên gọi đều có giới hạn, nếu dùng cái có hạn lượng để đo lường cái không hạn lượng (Chân như) thì sẽ làm cắt xén thực tại thành manh mún và sai lầm [2].",
      "d": "Sai. Ngôn ngữ có giới hạn chứ không đơn thuần chỉ là 'vô minh', Đức Phật vẫn vận dụng nó như 'ngón tay chỉ mặt trăng' để giáo hóa [2]."
    }
  },
  {
    "question": "Thuyết 'Nghiệp cảm duyên khởi' giải thích như thế nào về sự tồn tại của thế giới (y báo)?",
    "options": {
      "a": "Thế giới được hình thành do nghiệp lực của chúng sanh chiêu cảm nên.",
      "b": "Thế giới là kết quả từ sự tích tụ của các nguyên tố vật chất như đất, nước, gió, lửa.",
      "c": "Thế giới là một phần của Chân như bị biến đổi bởi vô minh.",
      "d": "Thế giới tồn tại độc lập và không thay đổi theo sự nhận thức của chúng sanh."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Theo thuyết này, tạo nghiệp nào thì thân (chánh báo) và cảnh giới (y báo) sẽ tương ứng thế ấy, do nghiệp lực mà cảm thọ thân và cảnh [3].",
      "b": "Sai. Dù vật chất cấu tạo từ tứ đại, nguyên nhân sâu xa sinh khởi thế giới theo thuyết này là nghiệp lực của chúng sinh [3].",
      "c": "Sai. Quan niệm Chân như do vô minh kích thích dao động mà thành vạn tượng thuộc về thuyết 'Chân như duyên khởi' [4].",
      "d": "Sai. Y báo không tồn tại độc lập mà biến đổi tùy theo nghiệp báo, tầm mắt và sự hiểu biết của các loài khác nhau [3]."
    }
  },
  {
    "question": "Đặc điểm cốt lõi của 'A-lại-da thức' (thức thứ Tám) trong việc hình thành vạn hữu là gì?",
    "options": {
      "a": "Nó là một dạng thức vô thường, tan biến hoàn toàn sau khi ngũ uẩn tan rã.",
      "b": "Nó hoạt động dựa trên sự điều khiển trực tiếp của ý thức (lục thức).",
      "c": "Nó chỉ chứa đựng những hạt giống (chủng tử) ác dẫn đến luân hồi.",
      "d": "Nó có công năng thâu nhiếp và sinh khởi tất cả các pháp thông qua các chủng tử."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. A-lại-da thức là hằng khởi, thường tại, đóng vai trò giữ gìn nghiệp quả sau khi ngũ uẩn tan rã [3].",
      "b": "Sai. Lục thức là dạng thức sinh diệt vô thường, không có khả năng điều khiển A-lại-da thức thường tại [3].",
      "c": "Sai. Tạng thức chứa đựng cả chủng tử hữu lậu (tạo ra hiện tượng giới luân hồi) và vô lậu (đưa đến giải thoát) [4].",
      "d": "Đúng. A-lại-da thức là nền móng của hiện tượng giới với hai công năng chính là thâu nhiếp và sinh khởi vạn pháp [3], [4]."
    }
  },
  {
    "question": "Trong thuyết 'Chân như duyên khởi', mối quan hệ giữa 'Chân như' và 'Vạn tượng giới' được ví như điều gì?",
    "options": {
      "a": "Như mặt trăng và bóng trăng dưới nước.",
      "b": "Như nước và sóng ở trong biển.",
      "c": "Như lửa và khói, cái này sinh ra cái kia nhưng tách biệt nhau.",
      "d": "Như thợ mộc và cái bàn gỗ."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Đức Phật ví giáo lý của Ngài như ngón tay chỉ mặt trăng, không phải ví dụ này [2].",
      "b": "Đúng. Trong tịnh có động, trong động có tịnh, Chân như ví như nước, còn vạn tượng giới được ví như sóng ở trong biển [4].",
      "c": "Sai. Chân như và vạn tượng không tách biệt, Động và Tịnh không rời nhau [4].",
      "d": "Sai. Phật giáo bác bỏ sự tồn tại của một Đấng Sáng Tạo ở bên ngoài vạn hữu như thợ mộc làm ra bàn [1]."
    }
  },
  {
    "question": "Thuyết 'Lục đại duyên khởi' của Mật tông đưa ra sự kết hợp giữa hai phương diện nào của thực tại?",
    "options": {
      "a": "Quá khứ và Tương lai.",
      "b": "Thiện nghiệp và Ác nghiệp.",
      "c": "Vô minh và Trí tuệ.",
      "d": "Sắc pháp (vật) và Tâm pháp (tâm)."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Không liên quan đến phạm trù thời gian [5].",
      "b": "Sai. Thiện, ác không phải là hai thành phần cơ bản của Lục đại [5].",
      "c": "Sai. Vô minh là nguyên nhân của mọi sự vọng động trong Chân như duyên khởi, không thuộc định nghĩa Lục đại [4], [5].",
      "d": "Đúng. Năm đại đầu tiên (địa, thủy, hỏa, phong, không) thuộc về vật (sắc pháp), đại thứ sáu là thức thuộc về tâm pháp [5]."
    }
  },
  {
    "question": "Khái niệm 'Trùng trùng duyên khởi' trong thuyết 'Pháp giới duyên khởi' có nghĩa là gì?",
    "options": {
      "a": "Các pháp làm nhân duyên cho nhau, nương tựa và dung thông nhau không cùng tận.",
      "b": "Nghiệp lực của cá nhân quyết định toàn bộ trật tự của vũ trụ.",
      "c": "Mọi sự vật đều sinh ra từ một nguyên nhân duy nhất và tối cao.",
      "d": "Thế giới trải qua nhiều vòng lặp sinh diệt giống hệt nhau."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Các pháp làm nhân duyên cho nhau, dung thông tương phản nhau nối tiếp vô tận, vì vậy gọi là vô tận duyên khởi hay trùng trùng duyên khởi [5].",
      "b": "Sai. Đây là trọng tâm của thuyết 'Nghiệp cảm duyên khởi' [3], [5].",
      "c": "Sai. Phật giáo không tin có sự bắt đầu hay nguyên nhân tối cao đầu tiên sáng tạo ra vạn vật [1].",
      "d": "Sai. Trùng trùng duyên khởi nhấn mạnh sự tương giao, dung thông mật thiết không cùng tận giữa vạn pháp chứ không nói về việc các thế giới giống hệt nhau [5]."
    }
  },
  {
    "question": "Theo văn bản, tại sao Đức Phật lại đưa ra nhiều thuyết duyên khởi khác nhau (từ Nghiệp cảm đến Pháp giới)?",
    "options": {
      "a": "Để chứng minh rằng Phật giáo có thể dung hòa mọi lý thuyết triết học khác.",
      "b": "Vì mỗi thuyết chỉ đúng với một phần nhất định của vũ trụ.",
      "c": "Để phù hợp với trình độ, căn cơ và sự tiếp nhận khác nhau của chúng sanh.",
      "d": "Vì quan điểm của Ngài thay đổi theo thời gian khi Ngài đạt đến những tầng bậc giác ngộ cao hơn."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Việc đưa ra các thuyết nhằm giải quyết vấn đề của nhân sinh, chứ không nhằm đối chiếu triết học [6].",
      "b": "Sai. Các thuyết không sai khác về bản chất, chỉ khác nhau về tầm nhìn sâu rộng hoặc đi từ Sự đến Lý và ngược lại [6].",
      "c": "Đúng. Do căn cơ chúng sanh không đồng, Phật phải dắt dẫn dần từ thấp đến cao để chúng sanh có thể dần dần thấu hiểu [6].",
      "d": "Sai. Các pháp của Phật có sự thống nhất từ thấp lên cao tùy theo đối tượng, chứ không phải vì sự giác ngộ của Ngài bị thay đổi theo thời gian [6]."
    }
  },
  {
    "question": "Một 'Tiểu kiếp' trong cách tính thời gian của Phật giáo tương đương với bao nhiêu năm?",
    "options": {
      "a": "1.280.000.000 năm.",
      "b": "1.000.000.000 năm.",
      "c": "16.000.000 năm.",
      "d": "20.000.000 năm."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. 1.280.000.000 năm là số năm của 4 trung kiếp, tương ứng vòng đời của một thế giới từ khi thành lập đến tiêu diệt [7].",
      "b": "Sai. Không có mốc thời gian này được nhắc đến [7].",
      "c": "Đúng. Mỗi tiểu kiếp theo quan điểm Phật giáo có 16 triệu năm [7].",
      "d": "Sai. Số 20 là số lượng tiểu kiếp trong một trung kiếp [7]."
    }
  },
  {
    "question": "Lời khuyên thực tiễn nhất được đề cập trong phần kết luận để cải tạo vũ trụ và nhân sinh là gì?",
    "options": {
      "a": "Phải phá bỏ mọi công việc hàng ngày để tập trung thiền định.",
      "b": "Dứt trừ sự hoặc, cải tạo nghiệp dữ thành nghiệp lành và cẩn thận trong sự huân tập chủng tử.",
      "c": "Chỉ cần im lặng và lìa xa văn tự giống như thái độ của Đức Phật sau khi chứng đạo.",
      "d": "Nên tập trung nghiên cứu sâu vào thuyết Pháp giới duyên khởi vì nó rốt ráo nhất."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Văn bản khuyên cẩn thận ngay trong các công việc hằng ngày vì nó huân tập vào tạng thức [8].",
      "b": "Đúng. Văn bản nhấn mạnh việc dựa vào hai thuyết 'Nghiệp cảm' và 'A-lại-da', đổi nghiệp dữ thành nghiệp lành, dứt trừ sự hoặc và huân tập chủng tử vô lậu [8].",
      "c": "Sai. Sự im lặng là cách để trực nhận Chân như, nhưng để cải tạo cuộc sống thì cần phải chủ động thay đổi hành động [2], [8].",
      "d": "Sai. Văn bản khuyên nên dựa vào 2 thuyết cơ bản (Nghiệp cảm, A-lại-da) để thực hành do 3 thuyết sau quá cao so với căn cơ hiện tại [7], [8]."
    }
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-5-bai-9-vu-tru-quan-phat-giao',
  slug: 'bai-thu-9-vu-tru-quan-phat-giao',
  title: 'Bài Thứ 9 - Vũ trụ quan Phật giáo',
  type: 'article',
  status: 'published',
  order: 9,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-25',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-9-vu-tru-quan-phat-giao/infographic.png',
      readingContent,
      tableOfContents: [
        { id: 'vu-tru-quan-phat-giao', label: 'Bài 9: Vũ trụ quan Phật giáo' },
        { id: 'mo-de', label: 'A. Mở đề', indent: 1 },
        { id: 'chanh-de', label: 'B. Chánh đề', indent: 1 },
        { id: 'dat-van-de-tien-quyet', label: 'I. Đặt vấn đề tiên quyết', indent: 2 },
        { id: 'that-tuong-luan', label: 'II. Thật tướng luận', indent: 2 },
        { id: 'duyen-khoi-luan', label: 'III. Duyên khởi luận', indent: 2 },
        { id: 'nghiep-cam-duyen-khoi', label: '1. Nghiệp cảm duyên khởi', indent: 3 },
        { id: 'a-lai-da-duyen-khoi', label: '2. A-lại-da duyên khởi', indent: 3 },
        { id: 'chan-nhu-duyen-khoi', label: '3. Chân như duyên khởi', indent: 3 },
        { id: 'luc-dai-duyen-khoi', label: '4. Lục đại duyên khởi', indent: 3 },
        { id: 'phap-gioi-duyen-khoi', label: '5. Pháp giới duyên khởi', indent: 3 },
        { id: 'khong-gian-thoi-gian', label: 'IV. Không gian và thời gian của pháp giới', indent: 2 },
        { id: 'khong-gian', label: '1. Không gian', indent: 3 },
        { id: 'thoi-gian', label: '2. Thời gian (Thế gian)', indent: 3 },
        { id: 'ket-luan', label: 'C. Kết luận', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-9-vu-tru-quan-phat-giao/Luminous_Emptiness.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/nszx0YBw9uc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/2UbaXCet3gLV6Chl2d59IZ?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Vũ trụ quan Phật giáo',
    passPercentage: 70,
    questions,
  },
}

export default lesson
