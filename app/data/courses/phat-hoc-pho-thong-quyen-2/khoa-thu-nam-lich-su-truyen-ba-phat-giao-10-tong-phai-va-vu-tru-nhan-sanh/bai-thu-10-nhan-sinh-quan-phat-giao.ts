import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="nhan-sinh-quan-phat-giao">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">NHÂN SINH QUAN PHẬT GIÁO</h2>

    <section id="mo-de">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">A. MỞ ĐỀ</h3>
      <p>Đã là người không ai không băn khoăn tự hỏi mình do đâu mà có? Sự hiện diện của mình trên cõi đời này như thế nào? Hoàn cảnh của mình sống như thế nào? v.v... Thật là bao nhiêu vấn đề, bao nhiêu câu hỏi làm người ta băn khoăn, thắc mắc, ăn không yên, ngủ không yên.</p>
      <p>Để giải quyết các vấn đề trên, các triết học và tôn giáo đều có đưa ra những lời giải đáp hay biện minh về "vấn đề sống" ấy, gọi là nhân sinh quan.</p>
      <p>Là một tôn giáo, có một triết học rất cao, đạo Phật tất nhiên cũng có dành một phần lớn để nói về nhân sinh quan.</p>
      <p>Nhân sinh quan ấy như thế nào? Đó là một vấn đề mà mỗi Phật tử chúng ta không thể không biết đến được. Sự hiểu biết này có thể giúp chúng ta nhận chân được những ưu điểm và khuyết điểm của con người và giúp chúng ta sắp đặt cuộc đời và sống một cuộc sống có ý nghĩa và lợi lạc cho mình và cho xã hội.</p>
    </section>

    <section id="chanh-de">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">B. CHÁNH ĐỀ</h3>

      <section id="nhan-sinh-quan-do-dau-ma-co">
        <h4 class="text-lg font-semibold">I. NHÂN SINH QUAN DO ĐÂU MÀ CÓ?</h4>
        <p>Trước tiên, vấn đề làm chúng ta thắc mắc nhiều nhất là: Con người do đâu mà có?</p>
        <p>Để giải đáp vấn đề này, Đạo Phật có thuyết "mười hai nhân duyên".</p>
        <p>Trong mười hai nhân duyên ấy, vô minh là căn bản. Vô minh là gì? Tức là đối với sự lý, không rõ biết được đúng như thật. Do đó mà sanh ra mê lầm, thật cho là giả, giả cho là thật, điên đảo hư vọng chấp ngã, chấp pháp, phân biệt mình, người; rồi theo cảnh thuận nghịch mà khởi phiền não, nên cũng gọi là "hoặc". Từ mê hoặc mà tạo tác ra các nghiệp, hoặc thiện hoặc ác. Sự tạo tác ấy gọi là "Hành", chi thứ hai trong mười hai nhân duyên.</p>
        <p>Do nghiệp lành dữ huân tập chứa nhóm thành ra "nghiệp thức". Nghiệp thức này theo chỗ huân tập thuần thục rồi thác sanh vào thai mẹ, đó là món "Thức", chi thứ ba trong mười hai nhân duyên.</p>
        <p>Trong thai mẹ, gom tinh huyết làm nhục thể, tâm thức cùng nhục thể hòa hiệp gọi là "Danh sắc", đó là chi thứ tư trong mười hai nhân duyên (Danh: Tâm thức; Sắc: Nhục thể).</p>
        <p>Từ Danh sắc lần lần tượng đủ sáu căn, gọi là "Lục nhập". Đó là chi thứ năm trong mười hai nhân duyên.</p>
        <p>Sau khi ra khỏi thai, sáu căn xúc đối với sáu trần, biết nóng, lạnh, đau, êm... nên gọi là "Xúc", chi thứ sáu trong mười hai nhân duyên.</p>
        <p>Do sự xúc chạm ấy, mà tâm dần dần sanh niệm phân biệt, rồi có những giác thọ vui, khổ... Đó là "Thọ", chi thứ bảy trong mười hai nhân duyên.</p>
        <p>Do sự cảm thọ vui, khổ, khởi niệm ưa ghét, chấp đắm ấy mà sanh ra có "Ái", chi thứ tám trong mười hai nhân duyên.</p>
        <p>Vì tham ái nên tìm cầu nắm lấy cái hay cái tốt, cái ưa thích. Đó là "Thủ", chi thứ chín trong mười hai nhân duyên.</p>
        <p>Muốn cho thỏa mãn những chỗ nhiễm trước, ưa thích của "Ái" và "Thủ", nên phải tạo nghiệp. Nghiệp này có thể chiêu cảm quả báo vị lai, nên gọi là "Hữu", chi thứ mười trong mười hai nhân duyên.</p>
        <p>Đã có "Hữu" là cái mầm giống, thì thế nào cũng có "Sanh" là chi thứ mười một trong mười hai nhân duyên.</p>
        <p>Đã có "Sanh" thì phải có "Lão và Tử" là chi thứ mười hai trong mười hai nhân duyên.</p>
        <p>Trong mười hai nhân duyên, "Vô minh" thuộc về "hoặc" và "Hành" thuộc "nghiệp". Đó là nhân quá khứ mà có năm quả "Khổ" hiện tại là: Thức, Danh sắc, Lục nhập, Xúc và Thọ.</p>
        <p>Do quả "Khổ" hiện tại nói trên mà khởi ra "Hoặc" là ái thủ và tạo "Nghiệp" là hữu, để làm nhân cho quả "Khổ" sau là sanh và lão tử ở vị lai.</p>
        <p>Như thế, từ nhân quá khứ, sang quả hiện tại, làm lại nhân cho quả tương lai, ba đời cứ nối tiếp xoay vần mãi mãi không dứt, như một bánh xe lăn tròn, lên xuống, xuống lên không dừng nghỉ.</p>
        <p>Cứ đó mà suy ra thì biết rằng, người chẳng những sống một đời trong hiện tại này, mà trước kia, về quá khứ đã trải qua không biết bao nhiêu đời sống rồi. Và sau này, trong vị lai, cũng sẽ còn vô lượng đời sống nữa. Người hiện sống đây để rồi chết, mà cái chết lại là cái nhân làm thành đời sống vị lai.</p>
        <p>Như thế, sống, chết nối tiếp theo nhau không bao giờ dứt, như những làn sóng, cái này tan đi để hiệp lại cái khác, không bao giờ hết, nếu còn gió. Con người, nếu gió vô minh còn thổi thì dòng sanh mạng còn lưu chuyển, lăn trôi, chìm nổi mãi.</p>
      </section>

      <section id="than-nguoi-nhu-the-nao">
        <h4 class="text-lg font-semibold">II. THÂN NGƯỜI NHƯ THẾ NÀO?</h4>
        <p>Sau khi chúng ta đã biết nguyên nhân gây tạo ra sự hiện diện của người trên cõi thế này rồi, một câu hỏi khác hiện đến trong đầu chúng ta là: Thân con người như thế nào? Đẹp đẽ hay xấu xa, có thật hay giả, đáng quý hay đáng khinh?</p>
        <p>Để giải đáp vấn đề này, đạo Phật có nhiều thuyết, tùy theo Tiểu Thừa hay Đại Thừa, tông phái này hay tông phái khác. Những thuyết ấy, mặc dù khác nhưng không trái chống nhau, mà chính là bổ khuyết cho nhau, làm cho vấn đề này được trình bày trong nhiều khía cạnh, từ hẹp đến rộng, từ cạn đến sâu, từ ngoài đến trong, từ tướng đến thể, từ biệt tướng đến tổng tướng...</p>
        <p>Dưới đây chúng tôi xin tuần tự trình bày các quan niệm ấy từ Nhơn thừa đến Thiên thừa, qua Nhị thừa rồi cuối cùng đến Đại Thừa, để quý độc giả có một quan niệm đầy đủ về vấn đề này:</p>

        <section id="quan-niem-nhon-thua">
          <h5 class="font-semibold">1. Quan niệm Nhơn thừa</h5>
          <p>Thân người hòa hợp, do tinh huyết cha mẹ cùng thần thức, góp bốn chất: Cứng, ướt, nóng, động mà thành. Chủ động trong ấy là thức (nghiệp thức). Bởi nghiệp thức người nhóm các duyên hội họp làm thân người. Nghiệp thức ấy có ra do bởi sự gây tạo vì đời trước huân tập nơi tự tâm kết thành công năng có tánh cách người, có thể cảm đặng thân người. Như vậy là từ nơi tự tâm tạo tác hạnh nghiệp, các hạnh nghiệp ấy trở lại huân tập thành công năng nghiệp người nơi tự tâm, cho đến khi công năng nghiệp thức ấy thuần thục, gặp đủ các trợ duyên, chiêu cảm hiện ra có thân người. Vậy thân thể không phải tự nhiên không nhân mà có, cũng không phải ai khác làm ra, mà chính do tự tâm tạo, tự tâm biến hiện, nên có câu: "Tâm tạo nhứt thế" và câu "Tam giới hữu tình, giai tuần nghiệp hữu". Thân thể theo nghiệp nhân mà có, nghiệp nhân hữu hạn, nên thân thể có lúc rã rời. Trong khi thân thể còn, từ nơi tự tâm tạo tác các hạnh nghiệp để gây thành công năng chiêu cảm thân sau, và thân sau này sẽ thành hiện tại; khi thân trước đã theo nghiệp báo mà tiêu diệt. Cho nên Phật giáo đối với sự chết, chỉ là sự xoay biến của nghiệp nơi tự tâm, để thay thân cũ, lấy thân mới.</p>
          <p>Trong khi mọi người, vì sự hiểu biết cạn hẹp đã lầm tưởng thân thể thoạt nhiên sanh, và sau khi chết hoàn toàn tiêu diệt.</p>
          <p>Chết để thay đổi thân mới, sanh để thế thân cũ, xoay vần nơi vòng chết và sanh, sanh và chết, thay thân cũ lấy thân mới, lấy thân mới để thế thân cũ, như người thay y phục.</p>
          <p>Vậy thân thể của người hiện nay, chỉ là một thân trong vô lượng thân. Người đã thay bỏ không biết bao nhiêu thân về trước, sau này người cũng sẽ phải đổi thay không biết bao nhiêu thân nữa, nếu không một niệm "hồi quang phản chiếu".</p>
          <p>Sự sanh hiện tại, chỉ là một lần sanh trong vô lượng lần sanh; và sự chết ngày nay cũng chỉ là một phen chết trong vô lượng lần chết.</p>
          <p>Phật giáo đối với sự sanh, không tham cầu, vì nó là vô thường không lâu không bền; đối với sự chết, không sợ hãi, vì nó không phải mất hẳn đi, mà chỉ là sự thay cũ đổi mới. Không tham cầu, không hãi sợ, nên Phật giáo đối với thân thể khác hẳn với thường tình trong đời.</p>
          <p>Người ta thấy nơi người đã thật hiểu Phật giáo, khi chết như khi sống, lúc đau như lúc mạnh vẫn an hòa bình tĩnh.</p>
          <p>Thân hiện có đây, là cái quả của nghiệp thân đã tạo ra từ trước và thân sẽ có sau này là do sự tạo nghiệp bây giờ, nên người trong Phật giáo đương thọ lãnh báo thân hiện tại, dầu khổ hay vui đều nhận chịu một cách vui vẻ và nhẫn nại, vì có kêu cầu chán nản thế nào không thể làm gì được một khi đã kết quả, mà nhất là chỉ lo lắng trau dồi cá nhân, là điều có thể đổi xấu ra tốt, để hưởng lấy quả báo tốt đẹp ở tương lai, tức là tu tập các pháp lành, cùng dẹp trừ tâm niệm hành vi bạo ác.</p>
          <p>Cõi người thuộc về đường lành, mặc dầu chưa khỏi khổ, nhưng có thể tu tạo nghiệp nhân để hưởng lấy nhiều hạnh phúc ở thân người. Người ta sẽ bảo, hoặc sẽ cảm thấy sự vui thú, sự hạnh phúc ở nơi người xinh đẹp khỏe mạnh, đầy đủ tất cả nhu dụng, và sự khổ não, sự tai hại ở người xấu xí, đau yếu, thiếu thốn các vận dụng.</p>
          <p>Trong hội nói pháp ở Ta Kiệt La Long Cung, đức Phật đã chỉ cho đại chúng biết sự sai khác nơi thân thể của mọi loài, như thiên thân thể tốt đẹp uy nghiêm, hàng Bát bộ sức hùng mạnh mẽ, loài rồng cả thân hình thô bỉ xấu xa, bọn cua trạnh tanh hôi hèn yếu. Đều là thân thể, tại sao có tốt xấu khác nhau? Đó là lúc bình sanh nơi thân, khẩu, ý thi thố lành hay gây tạo dữ. Nghiệp lành cảm thân tốt đẹp; nhân dữ chiêu cảm quả xấu xa, do tự tâm tạo rồi tự thọ. Muốn chúng sanh được thân thể tốt đẹp khỏe mạnh, để hưởng hạnh phúc trong cõi người, trong kinh Thiện Sanh đức Phật cặn kẽ chỉ dạy cách ăn ở hợp pháp trong gia đình về nhân đạo, lấy năm giới cấm làm căn bản. Bất sát sinh để gây tạo thiện nhân, cảm thành quả thể xinh đẹp khỏe mạnh sống lâu ở tương lai. Không trộm cắp gian tham để làm thành nghiệp lành, hưởng quả no ấm đầy đủ cho thân thể tốt đẹp. Trừ tà dâm để chiêu cảm thân hình đoan trang, cùng hưởng phúc gia đình. Tránh vọng ngữ để được giọng nói điều hòa, trong trẻo. Và kiêng rượu để khỏi phạm mấy điều trên, cùng gây dựng ở hiện tại và vị lai, một trí óc sáng suốt.</p>
        </section>

        <section id="quan-niem-thien-thua">
          <h5 class="font-semibold">2. Quan niệm Thiên thừa</h5>
          <p>Trọn vẹn năm giới cấm, nhân đạo đã hoàn thành, đào tạo chắc chắn nghiệp chủng người tốt lành nơi tự tâm, và sau này khi thuần thục sẽ cảm lấy thân thể làm người tốt đẹp mạnh khỏe, trường thọ, giọng hay, óc sáng để hưởng hạnh phúc nơi cõi người. Trên cõi người còn có các cõi Trời, về thân thể, mọi phương diện đều hơn người; không như thân người phải thai sanh nhớp nhúa, khổ sở vì các vị Trời được hóa sanh. Thân thể cực kỳ xinh đẹp, cao lớn giống nhau, các căn đầy đủ, thấy suốt, nghe xa, được thần thông tự tại theo ý muốn, đồ nhu dụng tự nhiên có, cho đến khỏi tất cả bệnh tật. Thân thể thường khỏe mạnh luôn, vẫn mãi trẻ trung không già; không như thân người đều không tránh khỏi nỗi đau khổ vì bệnh hoạn, bức bách vì già yếu. Thân thể các loài trong thế gian, chỉ có thân Trời là hơn hết, từ những điều tốt đẹp của thân, nhẫn đến sự thọ dụng.</p>
          <p>Từ đâu chiêu cảm được sự thù thắng ấy? Cũng như đã nói ở trước, tạo nghiệp nhân gì thì tự tâm sẽ gìn giữ nghiệp nhân ấy, và sẽ chuyển hiện ra quả đúng như vậy.</p>
          <p>Như vậy ngay ở dưới ánh sáng mặt trời, thì bóng của vật ấy thẳng; trái lại, vật ấy cong bóng ắt cong, muốn được bóng thẳng thì phải sửa sang cho vật ấy thật ngay. Cũng như muốn được hưởng thân Trời, phải vun trồng nghiệp nhân Trời. Phật dạy 10 điều lành gọi là "thập thiện nghiệp" tức là các đức tánh tốt, phát sanh từ thân, khẩu, ý tưởng, thực hành hoàn toàn 10 nghiệp lành. Tự tâm trong sạch, thì nghiệp chủng có công năng tốt đẹp, sẽ cảm thọ thân thù thắng, không bệnh tật, khỏi già nua, trường thọ ở cõi Trời.</p>
          <p>Đức Phật dạy những nguyên nhân và quả báo cùng sự tu hành, để khỏi bị những thân xấu xa, khổ sở và được cảm hiện những thân cường tráng, vui vẻ tốt tươi của người và Trời; chính là "Nhơn thừa Phật giáo" cùng "Thiên thừa Phật giáo" đối với thân thể.</p>
          <p>Mặc dù vui vẻ ở thân người, song thân người còn phải bị tám điều khổ lụy. Dầu thù thắng ở thân Trời, song thân Trời chưa khỏi nạn vô thường, khi nghiệp nhân đã mãn (ngũ suy tướng hiện). Vì Trời và người đều còn là phàm phu trong tam giới, vậy thân người và thân Trời chưa phải là chỗ đáng ham, nên trong Phật giáo còn có ba Thừa siêu thoát ngoài vòng khổ lụy của ba cõi, tức là: Thanh văn thừa, Duyên giác thừa và Bồ tát thừa.</p>
        </section>

        <section id="quan-niem-nhi-thua">
          <h5 class="font-semibold">3. Quan niệm Nhị thừa</h5>

          <section id="than-bat-tinh">
            <h6 class="font-semibold">a) Thân bất tịnh</h6>
            <p>Lấy con mắt của hàng Nhị thừa xem nơi thân thể, chỉ là một giống nhơ nhớp, do nhiều chất nhơ uế hòa hiệp. Các Ngài chỉ cảm thấy nó là hiện tượng của muôn điều khổ sở, buộc ràng không có mảy may chi đáng gọi là vui thú, nên có câu "thân vi khổ bổn". Và thân thể là chỗ nhơ, góp tất cả sự nhơ nhớp, cùng để rồi rã rời tan nát, nên có câu "thị thân bất tịnh, cách nang xú uế", và "thị thân vô thường, tất quy tán diệt". Thử nghiệm xem những sự thống khổ ở trong thế gian từ đâu mà có? Phải chăng do nơi thân thể; các sự thống khổ như: lạnh, nóng, đói, khát, mỏi, khổ, đau, nghịch trái... Đều thuộc về nơi thọ, mà thọ có ra là bởi lục căn tiếp xúc với lục trần, thân thể là chỗ nương của lục căn, nên sự khổ thọ lấy thân làm gốc. Vả lại, người đời không gì khổ bằng: lúc sinh đau đớn kêu la, khi già lụm cụm run rẩy, lúc ốm đau, yếu đuối bức rức, khi chết giãy giụa hãi hùng, bốn việc đại khổ ấy, lại là cái khổ sanh, trụ, dị, diệt, của thân thể.</p>
            <p>Xưa bốn thầy Tỳ kheo cho ở đời sự sợ sệt, sự nóng giận, sự dâm dục cùng sự đói khát là khổ nhất. Đã bị Phật quở trách vì chưa xét đến thân là gốc của muôn điều khổ. Không thân thì các sự khổ: sợ, giận, dâm, đói từ đâu mà có. Thấu đáo thay cho câu "thân vi khổ bổn" và câu "thân như oan thù". Sự nhơ nhớp hôi hám của thân thể không thể tả xiết. Người ta không nhớ quá khứ, không nghĩ đến vị lai, chỉ dòm nơi hiện tại và dùng nào là quần áo phủ che, nào là xạ hương xông ướp, để tự làm mê hồn mình, trước đống hôi tanh bất tịnh.</p>
            <p>Thử nhìn đến các chất như cửu khiếu (9 lỗ cống) trong thân chảy ra, tự mình cũng đã quá gớm của mình, chưa nói đến thân thể của người khác, nên trong kinh có câu "chư khổ lưu bất tịnh".</p>
            <p>Làn da mỏng là một cái bao mà trong đó chứa đầy những: máu, mủ, thịt, xương, đờm dãi và đại tiểu tiện v.v... Còn gì ghê tởm bằng khi một thân người bị lột cả da và bị banh xé. Câu "Cách nang xú uế" đã từ miệng Phật thốt ra để cảnh tỉnh kẻ say đắm. Thân nhơ nhớp hiện tại từ đâu mà có? Từ ngày trước: điểm tinh, giọt huyết hòa lẫn trong khi nghiệp thức vọng tưởng mê cuồng với sự giao hợp của cha mẹ mà kết thành. Sự dơ dáy của tinh huyết, sự đáng nhờm của bào thai, thật không bút mực nào tả hết, cho đến sau này nghiệp thức đã xa lìa, thân thể sẽ xanh cứng, sẽ sình chướng, sẽ nứt nở ra lần để làm ổ cho đám giòi tửa, làm chỗ cho ruồi kiến bu đậu, và để tiết ra những chất nhơ nhớp nhất và hôi tanh nhất. Lúc mới kết hợp: vọng tưởng tinh huyết bất tịnh; khi to lớn: đờm dãi, phân đái máu mủ bất tịnh. Lúc chết tan rã hôi tanh bất tịnh. Như vậy thân người là một vật bất tịnh nhất trong các vật bất tịnh. Từ đầu đến cuối, khi mới tượng sanh đến lúc hư mất, thảy đều toàn là bất tịnh.</p>
            <p>Trong thân nhơ nhớp bất tịnh, đáng ghê tởm nhất ấy, còn có một sự mà nếu thấy hiểu, người ta sẽ không còn ham muốn gì về thân thể. Từ lúc nào đến lúc nào, bao giờ cũng ráp ranh đến chỗ tiêu diệt. Đang trẻ trung, thấm thoát đã già nua. Từ cái mạnh mẽ tươi tắn, không bao lâu đổi thành yếu đuối, mệt nhọc, nhăn nheo. Trong khoảng thời gian ấy, không biết bao nhiêu sự đổi thay vô thường. Thân năm trước không phải là thân năm nay, thân tháng trước không phải là thân tháng tới, thân ngày nay không phải là thân hôm qua, cho đến từng giờ từng phút, từng sát na cũng đã đổi khác. Đã có đổi thay, tất phải có lúc tiêu diệt, không ai có thể dừng được sự thay đổi nhanh chóng của thân, và không có gì bảo đảm được cái họa trạng hấp tấp mà mọi người đều sợ: "cái chết". Mạng sống không khác chỉ mành treo chuông, chỉ chực đứt dây là rớt bể, nên có câu: "nhơn mạng tại hô hấp gian". Một hơi thở ra mà không hít vào, tức là đời sống của thân không còn, giờ tan rã sắp đến. Than ôi! Thân là cội khổ, thân là bất tịnh, thân là vô thường, có gì đáng sợ, có gì chán bằng thân. Ở nơi thân không có mảy mún, chỉ có thể tạm gọi là đáng trìu mến, đáng thương tiếc!</p>
            <p>Người tu hạnh Nhị thừa, quán sát thấy thân như vậy, nên nhàm chán nơi thân, ghê sợ sanh tử vô thường, gớm nhờm hôi tanh nhớp nhúa, do đó nên gấp lo tự lợi, vội mong thoát ly thân, mà tu các pháp môn tu siêu diệt thoát ly tam giới. Có người thấy rõ thân là khổ sở dơ dáy vô thường như trên, rồi sợ quá, quá nhờm, bèn vội vàng tìm cách xa lìa mau chóng: "tự tử". Mấy kẻ lầm to. Họ tự tử để chóng ra khỏi thân, mà họ không biết rằng chính họ đang bồi đắp cho thân được chắc chắn lâu dài. Vì thân có ra là do nghiệp nhân, thân là quả của nghiệp nhân, muốn khỏi quả phải trừ nhân, nay nhân cứ tạo, cứ gieo mà muốn đừng có quả, quyết hẳn không thể được. Không khác nào người sợ bóng mình, muốn bóng mình không hiện, mà cứ chạy trong ánh nắng. Khi Phật còn tại thế đã có một người có ý tưởng sai lầm này, đó là ông Phước Tăng Tỳ kheo, ghét thân già yếu đau khổ, toan thoát thân bằng cách treo cổ trên bờ suối, bèn bị Ngài Mục Kiền Liên quở trách là khờ dại, cùng giải bày chánh lý cho nghe. Sợ già, đau, sống, chết mà quyên sinh, thật là trở lại gây tạo sự già đau sống chết. Người ta có thể dứt bỏ thân hiện tại, song không thể rời bỏ muôn ngàn thân sẽ có ở vị lai, khi nghiệp hoặc hãy còn. Nghiệp hoặc còn thì khi thân này hư, tất lại tạo thành thân khác, có thân khác tất phải có già, đau, sống, chết, khổ sở... như vậy, muốn thoát hẳn khổ lụy vì thân thể, phải đoạn trừ cội gốc hiện ra thân, tức là phải dứt hoặc chướng cùng nghiệp nhân.</p>
          </section>

          <section id="than-gia-hop">
            <h6 class="font-semibold">b) Thân giả hợp</h6>
            <p>Cái gốc "hoặc nghiệp" đã trừ, thì cái ngọn là "thân" tức nhiên phải khô mục. Nhân đã không còn thì quả cũng tự mất. Thân sau không còn chiêu cảm thì các khổ lụy không nương đâu mà có, tức là an vui giải thoát. Dứt được nghiệp hoặc thì vô lậu huệ sanh, thành bực Nhị thừa Thánh nhân. Đến đây thân thể các bực này không còn thiệt thân thể, mà chỉ là sự kết cấu của ngũ ấm, hay thập nhị xứ. Trong khi người thường nhận là thiệt có thân thể, có đầu mặt tay chân, có hình dung động tác, mà với huệ chứng của các Ngài thấy là sắc, là thọ, cho đến là thức; hay thấy là: nhãn, nhĩ, tỷ, thiệt, thân, ý; mỗi món có phần vị riêng, không có cái gì có thể gọi là thân thể? Khác nào như ở xa có thấy một cụm rừng liên lạc um tùm, mà khi đến gần kề, thì chỉ thấy cây cối rời rạc, thể của rừng không còn là thật. Cảnh giới ấy đối với người chưa chứng đến, thật khó nhận hiểu, thân chỉ không thiệt có, nó có chỉ là có đối với nghiệp thức của chúng ta thôi. Nó đẹp, nó đáng ưa, cũng chỉ là phù hợp với tình vọng ô nhiễm, xinh đẹp đối với người này, chưa chắc hẳn đã xinh đẹp với người khác. Nàng Tây Thi người đời ca tụng là đẹp, là đáng yêu, mà chim gặp chim sợ bay xa, cá thấy cá sợ lẩn trốn. Nếu thân Nàng Tây Thi chắc thiệt là đẹp đáng yêu, thì sao chim cá lại phải sợ hãi? Phải chăng sự đẹp ấy, chỉ là do đồng nghiệp của loài người. Cho đến thân thể hình dáng tác dụng, chỉ có con mắt thường của người. Một mỹ nhân cực kỳ lộng lẫy, nếu ta dùng quang tuyến mà xem, thì mỹ nhân không còn, mà chỉ hiển hiện bộ xương hồng trắng, và nếu ta dùng kính chiếu đại gấp trên ngàn lần, thì ta chỉ thấy đó là một đống da thịt rời rạc, cách nhau từng khoảng. Nếu mọi người đều mang con mắt quang tuyến, cùng kính chiếu đại gấp ngàn lần, thì thử hỏi giữa đây, còn có cái gì thiệt là thân như trước.</p>
            <p>Huệ nhãn của các vị Nhị thừa Thánh nhân cũng thế. Đối với người thường là thân thể xinh đẹp, với các ngài thì thân thể còn không có, huống nữa là xinh đẹp. Chẳng phải là duyên cảnh khác, mà chỗ thấy có sai khác. Cũng đồng một cảnh, song vì thức trí khác nhau, nên chỗ nhận thấy thành không đồng. Do không còn thấy là thật có thân thể, nên các Ngài không còn sanh lòng luyến ái nơi thân, không còn có niệm: thân mình, thân người, vì tất cả đều là ngũ ấm, là lục căn, lục trần; dưới huệ nhãn của các ngài, và hơn nữa đều đồng là tứ đại giả hợp: da, thịt, gân, xương, tóc, móng toàn là địa đại; tinh, huyết, đờm, nhớt, nước mắt, mồ hôi toàn về thủy đại; nhiệt độ thuộc về hỏa đại; cùng sự chuyển động thuộc về phong đại. Tứ đại nếu trái nhau, thì thân thể làm sao đặng có. Rõ biết thân thể là hư vọng, thì cả thảy phiền não tự trừ, vì thân là căn bản của ái nhiễm; khi bấy giờ vô ngã trí phát sinh, vĩnh viễn thoát ly sanh tử trong ba cõi, tức là rốt ráo được Nhị thừa Phật giáo.</p>
          </section>
        </section>

        <section id="quan-niem-dai-thua">
          <h5 class="font-semibold">4. Quan niệm Đại thừa</h5>

          <section id="than-nhu-huyen-hoa">
            <h6 class="font-semibold">a) Thân như huyễn hóa</h6>
            <p>Mở rộng tầm quan niệm, thân thể đối với hàng tu quán Đại Thừa, là một giả pháp do sự kết cấu của sắc tâm và không rời ngoài thức. Do danh ngôn, ngã chấp, hữu chi ba món huân tập nơi tự thức, tạo thành danh và sắc công năng, khi đủ duyên bèn chuyển hiện, thành thân thể, rồi bám lấy sắc thân, làm tự thể sanh giác thọ, và cùng với thân đồng an đồng nguy; khi thức không còn chấp trì, thì thân hoại diệt. Thân không tự có, do thức tự chuyển biến mà có, thân không tự thể, lấy thức làm thể, toàn thân là thức, ngoài thức không thân. Thân có là do thức công năng biến hiện, công năng hiện thân, bởi các nghiệp duyên huân tập nơi thức mà thành. Nghiệp duyên có ra, lại nương nơi thân mà phát khởi, nên thân thể là pháp hư giả, do thức biến hiện. Song từ nơi thân thể tạo nghiệp nhiễm hay tịnh, làm duyên huân tập nơi tự tâm, khiến tự tâm chuyển thành công năng nhiễm hay tịnh. Thân thể cùng công năng xoay chuyển làm nhân duyên cho nhau, có không phải thiệt có, không không phải thiệt không, thật đồng huyễn hóa. Vì đó nên với quán trí của Đại Thừa thì thân thể như huyễn hiện. Bởi như huyễn không thật có, nên không sa vào lỗi tăng ích của phàm phu, cùng lỗi vọng chấp thường còn của ngoại đạo. Bởi như huyễn, giả có chẳng phải không hẳn, nên khỏi bị lỗi tổn giảm của Nhị thừa và chấp đoạn diệt của tà giáo.</p>
            <p>Bồ tát nương nơi huyễn thân, tu như huyễn pháp môn, dứt huyễn ái kiến, độ huyễn hữu tình, chứng huyễn Thánh quả. Do thấy thân như huyễn hóa, toàn hư vọng, không còn ái trước nơi thân, nên phiền não không sanh. Không ái trước nơi thân, thì khỏi vì thân mà phải thối thất đạo hạnh. Thọ vô lượng thân, tu hành trải qua vô lượng kiếp, mà với Bồ tát, không có một mảy may niệm tưởng là có thọ thân, cùng có sả thân.</p>
            <p>Mảy niệm còn không, huống gì có kiếp số, nên có câu: "thọ thị khổ... kiếp số phi kiếp số". Vì thân tùy duyên như huyễn sanh, sanh tức vô sanh; thân tùy duyên như huyễn diệt, diệt tức vô diệt, nên có câu: "chúng duyên giả hiệp, hư vọng danh sanh, chúng duyên ly tán, hư vọng danh diệt". Không sanh không diệt tức là "thật-tướng". Cổ đức có câu: "Huyễn thân bổn tự không tịch, sanh du như cảnh hình tượng, - Giác liễu nhứt thế không, huyễn thân tu du chứng thật tướng". Đó là từ nơi thân, quán "giả" nhập "không", chứng "trung đạo".</p>
          </section>

          <section id="than-minh-va-vu-tru-la-mot">
            <h6 class="font-semibold">b) Thân mình và vũ trụ là một</h6>
            <p>Thêm lên một tầng nữa, Bồ tát quán thân mình tức là toàn thể vũ trụ, là toàn thể chúng sanh. Vì sao? Tất cả các pháp đều đắp đổi làm duyên, đối đãi với nhau. Một pháp này có ra, là do đối đãi với các pháp kia, các pháp kia có ra, là do đối đãi với pháp này. Thân thể hiện có, là nhờ vũ trụ đối đãi làm duyên, vũ trụ trở lại là do sự đối đãi của thân thể mà có. Duyên nơi vũ trụ mà có thân thể, thì thân thể là vũ trụ. Duyên nơi thân thể mà có vũ trụ, thì vũ trụ là thân thể. Vũ trụ và thân thể không hai không khác. Thân mình và toàn thể vũ trụ, thân người cũng toàn thể vũ trụ. Cho đến thân của tất cả hữu tình, cũng đều là thân thể vũ trụ. Toàn thể vũ trụ là thân mình, mà toàn thể vũ trụ cũng là thân của tất cả hữu tình, và thân hữu tình là toàn thể thân mình. Vũ trụ thể tánh viên mãn, thì thân mình là thân tất cả hữu tình, thể tánh cũng đều viên mãn.</p>
          </section>
        </section>
      </section>

      <section id="than-phan-con-nguoi-dang-chan-hay-khong">
        <h4 class="text-lg font-semibold">III. THÂN PHẬN CỦA CON NGƯỜI ĐÁNG CHÁN HAY KHÔNG ĐÁNG CHÁN</h4>

        <section id="hoan-canh-dia-vi-con-nguoi">
          <h5 class="font-semibold">1. Hoàn cảnh và địa vị của con người trong vũ trụ như thế nào?</h5>
          <p>Như trong phần vũ trụ quan đã có nói, thế giới có chia ra ba tầng bậc là: Dục giới, Sắc giới và Vô sắc giới. Sống trong Dục giới là những sanh vật còn bị lòng dục sai sử, điều khiển, như thực dục, dâm dục. Những loài sống trong Dục giới là: súc sinh, ngạ quỷ, địa ngục, a tu la, người và chư thiên.</p>
          <p>Như thế là người cũng sống cùng một cảnh giới với các loài vừa kể trên. Vẫn biết trong sáu loài ấy thì địa vị con người được xếp vào hạng nhì, nhưng dù sao thì cũng sống trong một hoàn cảnh không sáng sủa gì, vì hoàn cảnh ấy chủ tể là lòng Dục. Cho nên Phật thường dạy: "Nước mắt chúng sanh nhiều hơn bốn biển", là thế! Lòng dục đòi hỏi những sự ham muốn về vật chất như thèm ăn, thèm ngủ, thèm ái ân... Nói tóm lại là muốn được thỏa mãn những khoái lạc về ngũ quan. Nhưng đâu đã hết! Con người còn ham muốn được thỏa mãn những nhu cầu về tinh thần: ham muốn chiếm đoạt, ham muốn về chế ngự, ham muốn phô trương... nghĩa là tham danh tham lợi.</p>
          <p>Nhưng nếu tham mà được thỏa mãn tất cả, thì cũng đỡ khổ. Ở đây, trái lại, lòng dục không bao giờ được thỏa mãn cả. May ra thì còn có thể thỏa mãn tạm thời trong chốc lát. Và như thế lại càng nguy hiểm, vì chẳng khác gì người khát mà uống nước mặn, càng uống càng khát.</p>
          <p>Loài người bị trói buộc vào lòng dục, như con ngựa bị buộc vào cỗ xe, cứ phải kéo chạy mãi, không bao giờ được yên nghỉ.</p>
          <p>Hơn nữa, lòng dục ấy chính là cái mầm xung đột giữa loài này với loài khác: ai cũng mong được thỏa mãn lòng dục của mình, cho nên sanh ra vị kỷ, làm khổ cho người khác và loài khác để mình được vui. Do đó, mỗi chúng sanh là một kẻ địch thù của mỗi chúng sanh khác, và cõi đời này là một bãi chiến trường, mà trong mỗi phút mỗi giây, có không biết bao nhiêu là chiến sĩ bị ngã gục. Do đó cõi chiến trường ấy cũng là một bãi tha ma rộng lớn vô cùng. Theo Phật dạy thì đó là một biển khổ mênh mông!</p>
          <blockquote>
            <p>Biển khổ mênh mông sóng lụt trời,<br />Khách trần chèo một chiếc thuyền trôi,<br />Thuyền ai ngược gió, ai xuôi gió?<br />Xét lại, cùng trong biển thảm thôi.</p>
          </blockquote>
        </section>

        <section id="vo-thuong-vo-nga">
          <h5 class="font-semibold">2. Tánh chất vô thường và vô ngã của con người</h5>
          <p>Con người khổ vì lòng dục, con người còn khổ hơn nữa vì hai tánh chất căn bản sau đây:</p>

          <section id="vo-thuong">
            <h6 class="font-semibold">a) Vô thường</h6>
            <p>Mọi vật ở đời không đứng yên một chỗ, mà biến chuyển di động luôn luôn trong từng phút, từng sát na. Thân phút trước không phải là thân phút sau. Cứ trong mỗi phút giây, bao nhiêu triệu tế bào trong người đang chết và bị thay thế. Con người thì tham được sống, mà con người cứ bị kéo dần về cõi chết. Càng muốn được sống chừng nào, lại càng sợ chết chừng ấy. Sự chuyển biến mau lẹ, từ tóc xanh đến bạc đầu, chẳng khác gì một giấc chiêm bao.</p>
          </section>

          <section id="vo-nga">
            <h6 class="font-semibold">b) Vô ngã</h6>
            <p>Con người cũng như mọi vật, sở dĩ có là do nhân duyên hòa hợp. Con người chỉ là một cái tên, là một giả danh để gọi cái hợp hợp của năm uẩn là: sắc, thọ, tưởng, hành, thức. Khi đủ nhân duyên chúng nó tập hợp lại thì gọi là sống, khi nó tan ra thì chết. Trong năm uẩn ấy, có cái gì chủ tể, thuần nhất đâu? Vả lại, ngay trong năm uẩn ấy cũng không có cái nào gọi là thuần nhất, mà cũng lại do sự tập hợp của lục đại.</p>
            <p>Không thường mà tưởng là thường, không ngã mà tưởng là có ngã. Đó cũng tức là cái mê mờ lớn nhất của con người. Và cũng chính do cái mê mờ ấy mà con người đau khổ lại càng đau khổ thêm.</p>
          </section>
        </section>

        <section id="kha-nang-con-nguoi">
          <h5 class="font-semibold">3. Khả năng của con người</h5>
          <p>Xét như trên, thì thân phận con người thật là đáng chán. Vậy thì chúng ta đành thất vọng, buông xuôi tay mà than khóc để chờ chết hay sao? Ta còn niềm tin gì ở con người nữa chăng?</p>
          <p>Tất nhiên là có! Phật dạy: "Chúng sanh đều có khả năng thành Phật". Nói một cách khác, con người, mặc dù sống trong đau khổ, nhưng đều có Phật tánh. Với cái Phật tánh ấy, con người có thể thoát ra khỏi hoàn cảnh tối tăm của mình. Để thoát ra khỏi hoàn cảnh ấy, con người không cần phải quỳ lụy, cầu xin một đấng nào khác, mà do tự lực và hành động của mình. Chỉ có mình mới giải thoát cho chính mình được mà thôi. Con người, chính là vị sáng tạo của đời mình. Khi mê thì con người tự mình làm cho mình đau khổ, nhưng khi biết mình mê mà tìm cách thoát ra khỏi cảnh mê, thì con người chính là kẻ tự gầy dựng hạnh phúc cho mình.</p>
          <p>Đó là ưu điểm của con người, đó cũng là niềm tin tưởng lớn của con người. Đứng về một phương diện, thì thân phận của con người thật là đáng chán. Nhưng đứng về một phương diện khác, thì con người thật đáng phấn khởi.</p>
          <p>Cho nên bảo rằng nhân sinh quan của đạo Phật là bi quan cũng không đúng hẳn. Lạc quan hay bi quan còn tùy thuộc ở phương diện quan sát của mình.</p>
        </section>
      </section>
    </section>

    <section id="ket-luan">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">C. KẾT LUẬN</h3>
      <p>Rút những nhận xét trên, chúng ta có thể nào kết luận rằng: Khi trong mê, thì thân phận con người thật là bi đát. Nhưng khi bắt đầu nhận được mình mê, thì con người có thể hoán cải được hoàn cảnh và cuộc sống của mình.</p>
      <p>Nhưng làm thế nào để hoán cải? Làm thế nào để chuyển mê thành ngộ? Làm thế nào để chuyển khổ thành vui? May thay! Giáo lý của Đức Phật có đấy, người chỉ dẫn phương pháp chuyển mê thành ngộ, chuyển khổ thành vui còn đó.</p>
      <p>Chúng ta chỉ còn gia công tu tập, thì thế nào cũng chuyển đổi được hoàn cảnh buồn thảm của chúng ta. Cho nên Đức Phật thường dạy: Cảnh Ta bà này cũng tức là cảnh Phật. Người cũng là Phật.</p>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo quan niệm của Đạo Phật, căn bản sâu xa nhất dẫn đến sự hiện diện của con người trong vòng luân hồi là gì?",
    options: {
      a: "Danh sắc",
      b: "Ái dục",
      c: "Hành nghiệp",
      d: "Vô minh",
    },
    answer: "d",
    explanation: {
      a: "Sai. Danh sắc là sự kết hợp giữa tâm thức và nhục thể, thuộc chi thứ tư trong mười hai nhân duyên [1].",
      b: "Sai. Ái dục là chi thứ tám, phát sinh do sự cảm thọ vui buồn [1].",
      c: "Sai. Hành nghiệp (hay Hành) là chi thứ hai, do vô minh mê lầm mà tạo tác ra [1].",
      d: "Đúng. Đạo Phật giải thích nguồn gốc con người qua thuyết 'mười hai nhân duyên', trong đó vô minh là căn bản [1].",
    },
  },
  {
    question: "Trong mười hai nhân duyên, khái niệm 'Danh sắc' được giải thích như thế nào?",
    options: {
      a: "Sự kết hợp giữa tâm thức và nhục thể trong thai mẹ",
      b: "Sự tiếp xúc của sáu căn với sáu trần",
      c: "Sự hình thành của sáu cơ quan cảm giác",
      d: "Sự phân biệt giữa mình và người",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Khi ở trong thai mẹ, gom tinh huyết làm nhục thể (Sắc), tâm thức (Danh) cùng nhục thể hòa hiệp thì được gọi là Danh sắc [1].",
      b: "Sai. Sự tiếp xúc của sáu căn đối với sáu trần được gọi là Xúc, thuộc chi thứ sáu [1].",
      c: "Sai. Sự tượng đủ sáu căn (cơ quan cảm giác) được gọi là Lục nhập, thuộc chi thứ năm [1].",
      d: "Sai. Sự phân biệt mình và người là do vô minh gây ra sự mê lầm điên đảo [1].",
    },
  },
  {
    question: "Quan niệm Nhơn thừa ví việc thay đổi thân thể từ đời này sang đời khác giống như việc gì?",
    options: {
      a: "Làn sóng tan đi rồi hợp lại",
      b: "Thay đổi y phục cũ để lấy y phục mới",
      c: "Một giấc chiêm bao dài",
      d: "Chiếc xe cũ bị hỏng hóc",
    },
    answer: "b",
    explanation: {
      a: "Sai. Làn sóng tan đi hiệp lại là ví dụ chung cho dòng sanh mạng lưu chuyển, không phải hình ảnh tiêu biểu riêng của Nhơn thừa [1].",
      b: "Đúng. Quan niệm Nhơn thừa cho rằng xoay vần nơi vòng chết và sanh, thay thân cũ lấy thân mới giống như người thay y phục [2].",
      c: "Sai. Giấc chiêm bao là hình ảnh dùng để nói về tính chất biến chuyển vô thường thoắt chốc của con người [3].",
      d: "Sai. Tài liệu không sử dụng hình ảnh chiếc xe cũ hỏng hóc để ví von về sự thay đổi thân thể [2].",
    },
  },
  {
    question: "Theo quan niệm Thiên thừa, để được hưởng thân thể tốt đẹp và thọ dụng ở cõi Trời, con người cần tu tập pháp môn nào?",
    options: {
      a: "Thập thiện nghiệp",
      b: "Lục độ muôn hạnh",
      c: "Ngũ giới",
      d: "Tứ diệu đế",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Để cảm thọ thân thù thắng ở cõi Trời, cần phải vun trồng nghiệp nhân Trời tức là thực hành hoàn toàn 10 điều lành (thập thiện nghiệp) [4].",
      b: "Sai. Lục độ muôn hạnh là pháp tu của Bồ Tát (Đại thừa), không được đề cập làm nhân sinh cõi Trời [4].",
      c: "Sai. Trọn vẹn năm giới cấm (ngũ giới) là căn bản để hoàn thành nhân đạo, cảm lấy thân người tốt đẹp chứ chưa sinh lên cõi Trời [5], [4].",
      d: "Sai. Tứ diệu đế không được nhắc đến trong bối cảnh tu tập để sinh cõi Trời của Thiên thừa [4].",
    },
  },
  {
    question: "Tại sao hàng Nhị thừa lại coi thân thể là 'thân vi khổ bổn' (thân là gốc của khổ)?",
    options: {
      a: "Vì thân thể luôn thay đổi không ngừng trong từng sát na",
      b: "Vì thân thể không phải do mình tự chủ",
      c: "Vì mọi sự thống khổ như nóng, lạnh, đói, khát đều nương nơi thân mà có",
      d: "Vì thân thể được cấu tạo từ bốn chất cứng, ướt, nóng, động",
    },
    answer: "c",
    explanation: {
      a: "Sai. Sự thay đổi không ngừng nghỉ (vô thường) được đề cập nhưng không phải là lý do trực tiếp giải thích câu 'thân vi khổ bổn' [6].",
      b: "Sai. Vấn đề không tự chủ không được Nhị thừa dùng để giải thích vì sao thân là gốc khổ [7].",
      c: "Đúng. Các thống khổ như lạnh, nóng, đói, khát đều thuộc về thọ, mà thọ có ra bởi lục căn tiếp xúc lục trần nương nơi thân thể, nên sự khổ thọ lấy thân làm gốc [7].",
      d: "Sai. Tứ đại cấu tạo nên thân là theo quan niệm Nhơn thừa và khi phân tích về thân giả hợp, chứ không phải lý do trực tiếp gọi là khổ bổn [2], [8].",
    },
  },
  {
    question: "Theo văn bản, tại sao việc 'tự tử' để thoát khỏi thân xác khổ sở lại bị coi là sai lầm trong Phật giáo?",
    options: {
      a: "Vì thân thể này là do cha mẹ ban cho nên phải quý trọng",
      b: "Vì tự tử là hành động sát sinh nghiêm trọng",
      c: "Vì khi nghiệp hoặc vẫn còn thì sẽ lại tạo ra thân khác và tiếp tục chịu khổ",
      d: "Vì chết rồi sẽ rơi vào cõi địa ngục",
    },
    answer: "c",
    explanation: {
      a: "Sai. Tài liệu không đưa ra lý do này để phản đối việc tự tử [9].",
      b: "Sai. Mặc dù sát sinh là cấm kỵ, nhưng lý do cốt lõi được đưa ra là tự tử không giải quyết được vấn đề luân hồi [9].",
      c: "Đúng. Có thể dứt bỏ thân hiện tại nhưng không rời được muôn ngàn thân vị lai vì khi nghiệp hoặc còn thì lại tạo thành thân khác và tiếp tục chịu khổ đau [9].",
      d: "Sai. Tài liệu không đề cập đến việc đọa địa ngục như một hệ quả của việc tự tử ở đoạn này [9].",
    },
  },
  {
    question: "Quan niệm Đại thừa nhìn nhận mối quan hệ giữa thân con người và vũ trụ như thế nào?",
    options: {
      a: "Vũ trụ là cảnh giới bên ngoài để thân thể nương tựa",
      b: "Thân mình và vũ trụ là một, không hai không khác",
      c: "Thân người nhỏ bé và bị chi phối hoàn toàn bởi vũ trụ",
      d: "Thân thể là một phần nhỏ trong cấu trúc lớn của vũ trụ",
    },
    answer: "b",
    explanation: {
      a: "Sai. Quan niệm chia tách vũ trụ và thân thể không phản ánh đúng tư tưởng Đại thừa quán chiếu sự dung nhiếp [10].",
      b: "Đúng. Bồ tát quán thân mình tức là toàn thể vũ trụ, duyên đối đãi với nhau mà có nên vũ trụ và thân thể không hai không khác [10].",
      c: "Sai. Đại thừa không cho rằng thân người nhỏ bé bị chi phối mà cho rằng thể tánh của thân và vũ trụ đều viên mãn [10].",
      d: "Sai. Thân không phải chỉ là một phần nhỏ, Đại thừa cho rằng thân thể chính là toàn thể vũ trụ [10].",
    },
  },
  {
    question: "Đâu là 'ưu điểm' và là 'niềm tin lớn' của con người mà Phật giáo nhấn mạnh để vượt qua sự bi quan về thân phận?",
    options: {
      a: "Mọi chúng sanh đều có khả năng thành Phật (Phật tánh)",
      b: "Khả năng thỏa mãn các nhu cầu vật chất và tinh thần",
      c: "Sự cứu rỗi từ các đấng thần linh tối cao",
      d: "Con người có trí thông minh hơn các loài súc sinh",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Dù sống trong đau khổ, nhưng mọi chúng sanh đều có Phật tánh, có thể tự gầy dựng hạnh phúc, đây là ưu điểm và niềm tin lớn [11].",
      b: "Sai. Việc cố thỏa mãn nhu cầu dục vọng là không thể, càng đáp ứng càng khát như uống nước mặn [12].",
      c: "Sai. Đạo Phật nhấn mạnh con người tự sáng tạo đời mình, giải thoát bằng tự lực chứ không quỳ lụy, cầu xin đấng nào khác [11].",
      d: "Sai. Tài liệu không lấy sự thông minh hơn súc sinh làm điểm tựa cho niềm tin lạc quan [12], [11].",
    },
  },
  {
    question: "Tính chất 'Vô ngã' của con người trong Phật giáo được hiểu là gì?",
    options: {
      a: "Sau khi chết con người hoàn toàn biến mất, không còn gì cả",
      b: "Con người do năm uẩn (sắc, thọ, tưởng, hành, thức) giả hợp thành, không có chủ thể duy nhất",
      c: "Con người không có quyền quyết định số phận của mình",
      d: "Con người phải hy sinh cá nhân vì lợi ích cộng đồng",
    },
    answer: "b",
    explanation: {
      a: "Sai. Con người chết đi lại tái sinh theo nghiệp nhân, không phải biến mất hoàn toàn. Đạo Phật bác bỏ lỗi chấp đoạn diệt [13].",
      b: "Đúng. Con người chỉ là giả danh gọi cái tập hợp của năm uẩn, không có cái gì là chủ tể hay thuần nhất [14].",
      c: "Sai. Quan điểm vô ngã không tước đi quyền tự chủ, ngược lại con người chính là vị sáng tạo tự quyết định đời mình [11].",
      d: "Sai. Khái niệm hy sinh lợi ích cá nhân không được dùng để định nghĩa Vô ngã trong tài liệu này [14].",
    },
  },
  {
    question: "Hình ảnh 'người khát uống nước mặn' được văn bản dùng để ẩn dụ cho điều gì?",
    options: {
      a: "Sự vô thường của cuộc đời như bọt nước ngoài biển khơi",
      b: "Lòng dục của con người không bao giờ thỏa mãn, càng đáp ứng càng thấy thiếu",
      c: "Những người cố gắng học đạo nhưng không hiểu đúng giáo lý",
      d: "Sự khổ đau của chúng sanh nhiều hơn nước trong bốn biển",
    },
    answer: "b",
    explanation: {
      a: "Sai. Sự chuyển biến vô thường thoắt chốc được ví như một giấc chiêm bao, không phải uống nước mặn [3].",
      b: "Đúng. Việc thỏa mãn lòng dục được ví như người khát uống nước mặn, càng uống càng khát chứ không bao giờ dừng nghỉ [12].",
      c: "Sai. Tài liệu không dùng hình ảnh này để nói về những người học đạo hiểu sai giáo lý [12].",
      d: "Sai. Việc nước mắt chúng sanh nhiều hơn bốn biển là một ý riêng do Phật dạy mô tả cảnh khổ, không phải ý nghĩa của việc khát uống nước mặn [12].",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-5-bai-10-nhan-sinh-quan-phat-giao',
  slug: 'bai-thu-10-nhan-sinh-quan-phat-giao',
  title: 'Bài Thứ 10 - Nhân sinh quan Phật giáo',
  type: 'article',
  status: 'published',
  order: 10,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-25',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-10-nhan-sinh-quan-phat-giao/infographic.png',
      readingContent,
      tableOfContents: [
        { id: 'nhan-sinh-quan-phat-giao', label: 'Nhân sinh quan Phật giáo' },
        { id: 'mo-de', label: 'A. Mở đề', indent: 1 },
        { id: 'chanh-de', label: 'B. Chánh đề', indent: 1 },
        { id: 'nhan-sinh-quan-do-dau-ma-co', label: 'I. Nhân sinh quan do đâu mà có?', indent: 2 },
        { id: 'than-nguoi-nhu-the-nao', label: 'II. Thân người như thế nào?', indent: 2 },
        { id: 'quan-niem-nhon-thua', label: '1. Quan niệm Nhơn thừa', indent: 3 },
        { id: 'quan-niem-thien-thua', label: '2. Quan niệm Thiên thừa', indent: 3 },
        { id: 'quan-niem-nhi-thua', label: '3. Quan niệm Nhị thừa', indent: 3 },
        { id: 'than-bat-tinh', label: 'a) Thân bất tịnh', indent: 4 },
        { id: 'than-gia-hop', label: 'b) Thân giả hợp', indent: 4 },
        { id: 'quan-niem-dai-thua', label: '4. Quan niệm Đại thừa', indent: 3 },
        { id: 'than-nhu-huyen-hoa', label: 'a) Thân như huyễn hóa', indent: 4 },
        { id: 'than-minh-va-vu-tru-la-mot', label: 'b) Thân mình và vũ trụ là một', indent: 4 },
        { id: 'than-phan-con-nguoi-dang-chan-hay-khong', label: 'III. Thân phận của con người đáng chán hay không đáng chán', indent: 2 },
        { id: 'hoan-canh-dia-vi-con-nguoi', label: '1. Hoàn cảnh và địa vị của con người', indent: 3 },
        { id: 'vo-thuong-vo-nga', label: '2. Tánh chất vô thường và vô ngã', indent: 3 },
        { id: 'vo-thuong', label: 'a) Vô thường', indent: 4 },
        { id: 'vo-nga', label: 'b) Vô ngã', indent: 4 },
        { id: 'kha-nang-con-nguoi', label: '3. Khả năng của con người', indent: 3 },
        { id: 'ket-luan', label: 'C. Kết luận', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-10-nhan-sinh-quan-phat-giao/The_Lotus_Journey.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/nooC2tAt8qo',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1i2Z2ELUlEGj8f9UhxjRuk?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Nhân sinh quan Phật giáo',
    passPercentage: 70,
    questions,
  },
}

export default lesson
