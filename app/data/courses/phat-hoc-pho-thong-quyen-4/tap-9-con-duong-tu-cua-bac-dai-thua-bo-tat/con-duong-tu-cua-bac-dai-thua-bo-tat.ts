import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 9</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Nội dung này được dựa trên bài giảng của Cố HT Thích Thiện Hoa, nhằm giúp người đọc dễ dàng nắm bắt các ý chính và thuận tiện trong việc học tập, tham khảo; không phải là bản chép nguyên văn toàn bộ bài giảng.</p>
    </div>
  </div>

  <h2>TẬP 9: CON ĐƯỜNG TU CỦA BẬC ĐẠI THỪA BỒ TÁT</h2>

  <hr>

  <h3 id="loi-noi-dau">I. LỜI NÓI ĐẦU</h3>
  <p>Trong các quả tu chứng trước khi thành Phật, thì quả Bồ tát là cao hơn cả, tốt đẹp viên mãn hơn cả. Muốn đến quả đó, con đường tu hành tất nhiên phải trải qua nhiều giai đoạn khó khăn, gian khổ, hơn tất cả những con đường mà chúng tôi đã trình bày trong “Bản đồ tu Phật”. Thật ra, trong mười con đường tu Phật của “mười Tông phái ở Trung Hoa” mà nhà xuất bản Hương Đạo đã giới thiệu với quý độc giả qua những tập “Bài giảng”, chúng ta cũng đã thấy có những con đường dẫn đến quả vị Bồ tát. Nhưng những con đường ấy chỉ được giới thiệu một cách sơ lược thiếu sót. Bản ý của chúng tôi là muốn dành riêng một tập để nói về “Con đường tu quảng đại và cao tột độ của các bậc Đại Thừa Bồ Tát”.</p>

  <p>Với nội dung ấy, chúng tôi sẽ lần lượt trình bày tôn chỉ cao thượng, đại nguyện và đại hạnh cùng các pháp môn tu hành của các bậc ấy. Cuối cùng chúng tôi sẽ nêu lên một số gương sáng trong sự tu hành của quý Ngài để dẫn chứng cho các đoạn đã nói trên.</p>

  <p>Qua những gương sáng ấy, quý vị sẽ thấy các pháp tu của Đại thừa Bồ tát không theo một đường lối, thể thức nhất định nào cả, cũng không hạn cuộc vào một quy luật nào nhất định. Tuy thế, người tu hành Bồ tát vẫn nắm vững một nguyên tắc chính, qua muôn vạn hình thái sai biệt trong sự tu hành: đó là lấy lợi tha làm tự lợi. Nắm vững được nguyên tắc ấy rồi, hành giả tu theo hạnh Bồ tát có thể làm bất luận một hành động gì, có nhiều khi trái với quan niệm thông thường. Do đó, hành động của các vị tu hạnh Bồ tát, có nhiều sự khó hiểu đối với một số người thường, quen sống trong mực thước.</p>

  <p>Tóm lại, tư tưởng và hành động của các vị tu hạnh Bồ tát vô cùng tự do và phức tạp, nhưng vẫn không ra ngoài một nguyên tắc chính là “Bồ tát dĩ lợi sanh vi bổn hoài” (Bồ tát lấy việc làm lợi ích cho chúng sanh làm hoài bảo của mình).</p>

  <h3 id="ton-chi-dai-nguyen">II. TÔN CHỈ VÀ ĐẠI NGUYỆN CỦA BẬC ĐẠI THỪA BỒ TÁT</h3>
  <p>Tôn chỉ của bậc tu theo hạnh Đại thừa Bồ tát thật vô cùng cao cả, rộng rãi, khác với hàng phàm phu và Tiểu thừa.</p>

  <p>Phàm phu và Tiểu thừa có tư tưởng yếm thế, tiêu cực, nên mong cầu được sớm giải thoát cõi đời ô trọc này, tìm một cảnh giới an vui khác. Họ nghĩ đến tự lợi trước lợi tha, giải thoát cho mình trước rồi mới giải thoát cho người sau. Họ nhàm chán cảnh giới ô trọc, đầy ngũ trược, ác thế, đầy máu lệ và khổ đau này, để cầu mong sinh về cõi an lạc, thanh tịnh trường tồn hơn. Qua bao nhiêu đời kiếp trôi nổi hụp lặn trong biển sanh tử, quay lăn theo bánh xe luân hồi, họ đã quá ê chề mệt mỏi, nên thường không hy vọng gì khác hơn là được vào sống trong cõi Niết bàn tịch tịnh. Tự nhận biết mình tài hèn sức yếu, dễ bị hoàn cảnh lôi kéo, nhiễm ô, họ cố gắng tránh những cảnh nghịch, tìm những cảnh thuận, tránh những nơi phồn hoa đô hội, tìm nơi thanh vắng để dễ tu hành.</p>

  <p>Trái lại, bậc Đại thừa Bồ tát, có tư tưởng tích cực, nhập thế, chủ trương lấy lợi tha làm tự lợi; tự giác và giác tha là một, không thấy có mình và người riêng khác. Họ không sợ nghịch cảnh, trái lại, còn lăn vào đấy, chịu đựng các thử thách, gian khổ để xem trình độ tu học của mình đến mức nào. Họ xông pha vào cảnh phồn hoa, náo nhiệt, chui mình vào phiền não, lăn lộn trong cõi dục giới đầy quyến rũ, để xem tâm mình còn phiền não nhiễm ô hay không, đặng trừ. Sự tu hành của Đại thừa Bồ tát, cũng như ly nước qua nhiều lần gạn lọc, nhưng còn thử xem nó đã thật hết cặn cáu hay chưa, nên lại còn phải khuấy động, lắc mạnh nữa để nếu thấy còn cáu bẩn, thì lại gạn lọc nữa. Cho nên đối với bậc này, thì càng gặp nhiều trở ngại lại càng tốt, vì đó là những cơ hội để tu hành. Mỗi khi gặp một tai nạn gì vừa qua, thì họ cho là trả xong một mối nợ. Cũng trong ý nghĩa đó, những kẻ ác độc, thường phá hại người tu hành cũng là những thiện hữu. Chính Đức Thích Ca cũng đã dạy: “Đề-bà-đạt-đa cũng là thiện hữu của ta. Nhờ Đề-bà-đạt-đa mà ta chóng thành Phật quả”.</p>

  <p>Vì không có tâm phân biệt “tự” và “tha” và lấy lợi tha làm tự lợi, nên các vị Đại thừa Bồ tát có một đại nguyện không ai theo kịp, đó là nguyện cứu độ cho tất cả, không phân biệt bạn và thù, thân và sơ, người và vật, hễ còn thấy có chúng sanh đau khổ là còn tìm cách cứu độ. Vì Bồ tát xem tất cả chúng sanh là mình, nên chúng sanh còn trầm luân, tức là mình chưa tự tại giải thoát. Do đó mà Bồ tát thường có những câu phát nguyện vô cùng hùng dũng như sau:</p>

  <blockquote>
    <p>Chúng sanh độ tận, phương chứng Bồ-đề;<br>
    Địa ngục vị không, thệ bất thành Phật.</p>
  </blockquote>

  <p>Nghĩa là: Sau khi độ tất cả chúng sanh, tôi mới chịu chứng quả Bồ-đề; trong địa ngục, nếu còn tội nhân, tôi thề chẳng thành Phật. Điều ấy mới nghe qua, người ta có cảm tưởng như các vị Bồ tát đã nói quá đáng. Nhưng nếu nghĩ cho kỹ, thì thấy đó là một lý đương nhiên. Vì các vị Bồ tát đã giác ngộ rằng: mình với chúng sanh cùng chung một bản thể, nếu chúng sanh còn trầm luân đau khổ, thì làm sao mình có thể giải thoát an vui được? Cũng như mọi bộ phận trong người dù có hình dáng, địa vị sai khác, nhưng một khi còn bị bệnh tật đau ốm, thì dù bộ phận ấy nhỏ nhặt bao nhiêu, cũng làm đau chung cho cả cơ thể.</p>

  <p>Vì giác ngộ điều ấy, nên Ngài A-nan cũng đã thệ nguyện rằng:</p>

  <blockquote>
    <p>Phục thỉnh Thế Tôn vị chứng minh;<br>
    Ngũ trược ác thế thệ tiên nhập.<br>
    Như nhất chúng sanh vị thành Phật,<br>
    Chung bất ư thử thủ Nê-hoàn.</p>
  </blockquote>

  <p>Nghĩa là: Kính thỉnh Đức Thế Tôn chứng minh cho lời đại nguyện của con: “Trong đời tội ác, năm trược này, con thề xung phong vào trước để cứu độ chúng sanh. Nếu còn một chúng sanh nào chưa thành Phật, thì con nguyện không chứng đạo quả Niết-bàn”.</p>

  <p>Tóm lại, để nhắc nhở mình thực hiện đại nguyện lớn lao trên đường tu tập, người tu hạnh Đại thừa Bồ tát, thường tụng đọc mỗi ngày 4 lời thệ nguyện sau đây:</p>

  <blockquote>
    <p>Chúng sanh vô biên thệ nguyện độ.<br>
    Phiền não vô tận thệ nguyện đoạn.<br>
    Pháp môn vô lượng thệ nguyện học.<br>
    Phật đạo vô thượng thệ nguyện thành.</p>
  </blockquote>

  <p>Tôn chỉ và đại nguyện đã cao cả, lớn lao như thế, thì chắc chắn hạnh tu của các vị Bồ tát cũng phải khác thường, mới mong chứng ngộ được.</p>

  <h3 id="dai-hanh">III. ĐẠI HẠNH CỦA CÁC VỊ ĐẠI THỪA BỒ TÁT</h3>
  <p>Như trên đã nói, đại nguyện của hàng Đại thừa Bồ tát lớn lao vô cùng, nên phải có những hạnh tu cũng lớn lao, mới tương xứng và thể hiện được mục đích. Nói một cách khác, Bồ tát đã có đại nguyện tất phải có đại hạnh. Nếu không thì chẳng khác gì anh chàng nói suông, ngồi khoanh tay mà nói chuyện đội đá vá trời. Đại hạnh của Bồ tát không những lớn lao mà lại còn có nhiều loại, nhiều tánh chất khác nhau. Người tu hạnh Bồ tát có thể làm tất cả mọi việc, có nhiều khi rất thông thường, nhưng có nhiều khi lại vượt ra ngoài mực thước, không ai ngờ được, không ai làm nổi. Sự tu hành của các vị này, không chỉ hạn cuộc trong chùa, trong tịnh xá hay một nơi thâm sơn cùng cốc, mà có thể diễn ra ở tất cả mọi nơi, mọi địa hạt: trong gia đình, giữa chợ búa, trong công trường, ngoài đường xá, hay những nơi ô uế, thối tha. Sự tu hành của họ cũng không theo một đường lối nhất định, có sẵn, mà tùy theo hoàn cảnh căn cơ, phương tiện, miễn làm sao thực hiện được đại nguyện thì thôi. Hạnh tu của Bồ tát rất phóng túng, nhưng không bao giờ ra ngoài tinh thần: “dĩ lợi sanh vi bổn hoài” (lấy việc làm lợi ích cho chúng sanh làm bản nguyện tu hành) hay “lấy lợi tha làm tự lợi”.</p>

  <p>Sau đây, chúng tôi xin kể qua một số các Đại hạnh của hàng Đại thừa Bồ tát:</p>

  <p><strong>1. Giác ngộ chúng sanh là hạnh tu của Bồ tát</strong><br>
  Giác ngộ là nhận chân được sự thật của nhân sanh, vũ trụ. Có biết rõ sự thật này, mới có thể tu hành và giải thoát được. Chúng sanh đau khổ lặn hụp mãi trong biển sanh tử luân hồi, vì không thấy rõ được mình đang ở đâu và mình sẽ đi đâu. Vì không thấy rõ được hoàn cảnh của mình trong hiện tại, và không thấy được con đường sáng trong tương lai, nên không thể thoát ra ngoài vòng tục lụy, đớn đau, mà cứ dẫm chân mãi trên những con đường chông gai nguy hiểm, tối tăm, đầy cạm bẫy. Vậy hạnh tu của Bồ tát là đem lại ánh sáng cho cõi đời u tối, soi sáng đầu óc và cõi lòng tối tăm của chúng sanh. Ánh sáng mà các vị Bồ tát đem đến là ánh sáng của trí huệ. Trí huệ ở đây không phải là sự thông minh lanh lẹ thông thường. Trí huệ ở đây là sự hiểu biết rốt ráo, đúng như thật; là ngọn hải đăng soi sáng biển cả trong cơn giông tố, để thuyền bè khỏi bị đắm chìm.</p>
  <p>Bồ tát vì xem chúng sanh như mình, vì muốn cứu độ chúng sanh, nên phải đem trí huệ soi sáng chúng sanh, gieo trí huệ vào đầu óc chúng sanh, làm cho đầu óc chúng sanh cũng bừng sáng lên, để họ thấy rõ sự thật, biết đường mà đi. Công việc ấy gọi là “Giác ngộ chúng sanh”.</p>
  <p>Trong đạo Phật, giác ngộ là vấn đề quan trọng nhất, là vấn đề căn bản. Do đó đạo Phật thường được gọi là: “Đạo Giác ngộ” và Đức Phật cũng gọi là: “Đấng Giác ngộ”. Người tu hạnh Bồ tát mà không làm công việc giác ngộ ấy thì khó mà thành tựu quả Phật.</p>

  <p><strong>2. Nuôi dưỡng lòng Từ bi quảng đại là hạnh tu của Bồ tát</strong><br>
  Sau trí huệ là Từ bi. Từ bi là cho vui, Bi là cứu khổ (“Từ, năng dữ nhất thiết chúng sanh chi lạc; Bi, năng bạt nhất thiết chúng sanh chi khổ”). Sau khi đã giác ngộ rằng chúng sanh và mình cùng chung một bản thể, người vui là mình vui, người khổ là mình khổ, hàng Đại thừa Bồ tát cố gắng không ngừng, để làm cho đời bớt khổ thêm vui.</p>
  <p>Muốn làm được công việc ấy, phải có một tình thương rộng lớn vô biên, như trời cao, như biển cả. Tình thương này không phải chỉ hạn cuộc trong phạm vi loài người, mà còn lan tràn đến toàn thể sinh vật cỏ cây, không phân chia nhân ngã, bỉ thử, không phân biệt bạn và thù, thân và sơ. Hễ còn chúng sanh đau khổ là còn tìm cách để cứu vớt, an ủi vỗ về; hễ còn chúng sanh khao khát được vui là tìm cách đem vui tới. Bồ tát thương tất cả chúng sanh như mẹ thương con, nên không nài hà khó nhọc, không quản ngại gian nguy, không từ chối một điều gì, cho đến cả thân mạng. Nhưng tình thương rộng lớn này, không phải tự nhiên mà có được. Cần phải nuôi dưỡng, tập luyện nó ngày đêm, không bao giờ dừng nghỉ, bất luận khi ăn khi nằm, khi đi khi đứng. Và khi đã coi mọi sinh vật đều có một sự sống, biết tìm vui, lánh khổ, sợ chết thì dù là một con ve, con kiến, người tu hạnh Bồ tát cũng không tàn sát một cách vô cớ. Cho đến cỏ cây vì cũng đều có sự sống, nên hành giả cũng cố tránh sự tàn phá một cách vô ích. Thể hiện tinh thần tôn trọng sự sống, nuôi dưỡng tình thương, hàng Đại thừa Bồ tát giữ gìn thận trọng từng cử chỉ nhỏ nhặt hằng ngày, để tránh sự gieo rắt khổ đau và chết chóc quanh mình: dùng lưới che đèn để ngăn chặn những con thiêu thân khỏi bị nạn cháy thiêu; lọc nước với một cái lưới trước khi dùng, để những sinh vật nhỏ sống trong nước khỏi bị hại lây; lọc xong, đổ cái lưới lọc nước về chỗ cũ, để sinh vật khỏi bị chết khô; khi vào cầu tiêu, gảy móng tay 3 tiếng, để cho sinh vật ở dưới cầu biết mà tránh; khi đi đường, nhìn xuống đất để khỏi dẫm đạp trùng, kiến, hay dẫm lên cây cỏ. Đành rằng đây là những cử chỉ nhỏ nhặt, nhưng chính vì nhỏ nhặt mà giữ được hằng ngày mới khó. Nếu không nhớ nghĩ đến luôn và không có một lòng Từ bi quảng đại, thì không dễ gì giữ được mãi những cử chỉ ấy.</p>
  <p>Kinh chép: “Phật ái chúng sanh như mẫu ái tử”, thực đúng vậy. Hàng tu Đại thừa Bồ tát, nếu xem thường lòng từ bi, không trau dồi cho có một tình thương rộng lớn như Phật, thì không thể thành Phật, không thể thành tựu được đại nguyện của mình.</p>

  <p><strong>3. Trì giới Ba-la-mật là hạnh tu của Bồ tát</strong><br>
  Trong luận Đại thừa khởi tín có chép: “Bồ tát biết tánh Phật nơi mình không có phiền não, nhiễm ô, xa lìa các tội lỗi ngũ dục, nên tùy thuận theo Phật tánh, tu pháp Trì giới Ba-la-mật”.</p>
  <p>Trì giới Ba-la-mật tức là giữ giới một cách rốt ráo, đầy đủ, hoàn toàn trong mọi phương diện, chớ không hạn cuộc trong một vài phạm vi nào.</p>
  <p>Giới đầy đủ nhất là “Tam tụ tịnh giới”; nghĩa là 3 phần giới thanh tịnh sau đây:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Nhiếp luật nghi giới: nghĩa là bỏ các điều tội lỗi. Giới này thuộc về phần tiêu cực, mục đích ngăn ngừa không cho các điều ác phát hiện. Giới này hàng Thanh văn (Tiểu thừa) rất sở trường.</li>
    <li>Nhiếp thiện pháp giới: nghĩa là làm các việc lành. Giới này thuộc về phần tích cực, mục đích thúc giục làm các điều thiện, ích lợi cho mình và người. Giới này hàng Thanh văn cũng thường giữ.</li>
    <li>Nhiêu ích hữu tình giới: nghĩa là làm lợi ích cho toàn thể chúng sanh. Giới này thuộc phần tích cực, phạm vi vô cùng lớn lao, bao trùm tất cả, rốt ráo vô cùng; giới này bắt buộc kẻ tu hành phải nỗ lực làm tất cả mọi việc ích lợi, không riêng gì trong phạm vi nhân loại mà chung cho tất cả loài hữu tình (nghĩa là có sự sống, biết vui mừng và đau khổ). Vì nó bao quát, vô hạn lượng như thế, nên hàng Thanh văn không thể làm được, mà chỉ hàng Đại thừa Bồ tát mới giữ nổi.</li>
  </ul>

  <p><strong>4. Bố thí Ba-la-mật là hạnh tu của Bồ tát</strong><br>
  Luận Đại thừa khởi tín có chép: “Bồ tát biết tánh Phật nơi mình không có tham lam, bỏn xẻn, nên tùy thuận theo tánh Phật ấy, mà tu Bố thí Ba-la-mật”.</p>
  <p>Tại sao tu hạnh Bố thí mà phải viện dẫn và căn cứ vào tánh Phật là tánh vốn không tham lam, bỏn xẻn? Vì tu hạnh Bồ tát là phải rốt ráo, nếu còn một phần nào hạn cuộc, thì đó chưa phải là hạnh Bồ tát. Người làm Bố thí mà chưa hoàn toàn thanh tịnh, vẫn còn vướng vít một phần nào nhiễm ô, thì tánh Phật vẫn còn bị che lấp, chưa hoàn toàn biểu lộ được. Cũng như viên ngọc quý, nếu chưa hoàn toàn chùi rửa hết bụi nhơ, thì viên ngọc vẫn chưa phục hồi đầy đủ, trọn vẹn giá trị của nó.</p>
  <p>Do đó, khi nói đến Bố thí Ba-la-mật là người ta phải liên tưởng đến một sự bố thí hoàn toàn, trọn vẹn, không thấy có nhân, ngã, bỉ, thử, không một chút tiếc nuối, dù cho vật bố thí quý giá bao nhiêu, thân thiết bao nhiêu, dù cho đó là thân mạng mình chăng nữa. Bố thí này là một thứ Bố thí hoàn toàn không vì danh, không vì lợi, không cầu người cảm ơn, không mong mỏi phước báo. Trong khi cho, Bồ tát không phân biệt ta đây là người cho, nên không sanh tâm kiêu mạn; kia là kẻ được cho, nên không sanh tâm khinh rẽ họ; không thấy có giá trị của vật đem cho, cho nên không tiếc nuối.</p>
  <p>Bố thí có ba thứ: thí tài, thí pháp, thí không sợ.</p>
  <ul style="padding-left: 2.5rem;">
    <li><strong>a) Thí tài:</strong> Tức là cho của cải vật chất, sức cần lao v.v… Loại Bố thí này có chia làm hai:<br>
    Đem tiền bạc giúp của cải cho người, thì gọi là thí ngoại tài (cho của ngoài thân).<br>
    Đem sức lực, hoặc thân mạng mình để cứu người, như cho máu, nhảy vào lửa, xuống nước để cứu người lâm nạn, thì gọi là thí nội tài (thí tự thân).</li>
    <li><strong>b) Thí pháp:</strong> Tức là chỉ bày phương pháp, thí pháp cũng chia làm hai loại:<br>
    Chỉ dạy cho người những phương pháp (dạy nghề nghiệp) chơn chánh để họ tự nuôi sống, làm lợi lạc cho đời họ, thì gọi là thí pháp thế gian.<br>
    Chỉ dạy cho người những phương pháp tu hành để giải thoát sanh tử luân hồi, thì gọi là thí pháp xuất thế gian.</li>
    <li><strong>c) Thí sự không sợ hãi (Thí vô úy):</strong> Tức là làm cho người khác vững tâm, không sợ sệt. Loại Bố thí này cũng có hai phần:<br>
    Về phương diện tiêu cực, không làm cho người khác phải sợ hãi vì mình.<br>
    Về phương diện tích cực, đem cho người khác sự gan dạ, vững tâm để đối phó với những nỗi nguy nan, hoạn nạn đang xảy ra.</li>
  </ul>
  <p>Hạnh Bố thí đem lại kết quả lớn lao trên đường tu hành, đó là: trừ được tâm ích kỷ, tham lam, bỏn xẻn, và nuôi lớn tánh Phật Từ bi, Hỷ xả, Vị tha. Đối với người thọ thí, thí hạnh này đem lại nguồn an ủi, trút hết nỗi khổ đau, tạo niềm hoan lạc, khai trí sáng suốt.</p>

  <p><strong>5. Nhẫn nhục Ba-la-mật là hạnh tu của Bồ tát</strong><br>
  Luận Đại thừa khởi tín có chép: “Bồ tát biết tánh Phật của mình không sân hận, xa lìa các khổ não, nên thuận theo tánh Phật, tu pháp Nhẫn nhục Ba-la-mật”.</p>
  <p>Nhẫn nhục có hai phần:</p>
  <ul style="padding-left: 2.5rem;">
    <li>a) Cam chịu những điều khổ não, nhục nhã, xót đau người ta làm cho mình mà mình không hờn giận, phẫn uất và nghĩ đến sự trả thù, như Đức Phật đã nhẫn chịu những âm mưu phá hại của Đề-bà-đạt-đa khi lăn đá từ trên núi cao xuống chân Phật; của bọn ngoại đạo khi cho cô gái độn bụng đến vu oan cho Phật, để làm tổn thương đến uy danh Ngài; của vua A-xà-thế khi cho voi uống rượu say chạy đến để sát hại Ngài. Ngài đã không hờn giận, trừng phạt, mà trái lại, còn Từ bi hóa độ cho tất cả đều được giải thoát.</li>
    <li>b) Bình thản, không xao động trước tất cả các cảnh thuận và nghịch của cuộc đời mà mình gặp phải. Chẳng hạn, khi gặp nghịch cảnh, Bồ tát không oán hận, trách móc, phiền não, để cho tâm mình phải vướng bận, đảo điên. Khi gặp thuận cảnh, Bồ tát cũng không mừng rỡ, thích thú, để cho tâm mình phải bị xáo động, vương vấn theo.</li>
  </ul>
  <p>Nhẫn nhục Ba-la-mật là một thứ nhẫn nhục cùng tột, không một sự vui buồn, sướng khổ, vinh nhục nào trong đời có thể làm lay động, xáo trộn tâm tư được. Thứ nhẫn nhục này, chỉ có hạng Đại thừa Bồ tát mới thực hiện nổi; vì các Ngài đã nhận chân được bản tánh thanh tịnh, bình đẳng, không thấy có nhân ngã, có người làm nhục và kẻ bị nhục.</p>

  <p><strong>6. Tinh tấn Ba-la-mật là hạnh tu của Bồ tát</strong><br>
  Tinh tấn là cố gắng không dừng nghỉ để mau mau đạt được quả vị tối thượng trong việc tu hành. Tinh ở đây có nghĩa là tinh thuần; Tấn là đi tới. Tinh tấn là cố gắng không ngừng, luôn luôn nỗ lực để tiến tới cảnh giới tinh thuần, tức bản thể thanh tịnh. Muốn đạt được quả vị mong muốn, kẻ tu hành phải có tâm lý và thái độ của một kẻ bộ hành trên đường thiên lý vạn dặm: đi ngày, đi đêm, luôn luôn không biết mệtỏi, tranh thủ thời gian, tranh thủ không gian. Người bộ hành ấy, bên trong thì tâm tâm niệm niệm phải đi cho đến đích, dù gặp gian nguy khổ ải cũng quyết không dừng; bên ngoài thì phải nỗ lực dẹp phá những trở ngại trên đường, khắc phục được mọi khó khăn.</p>
  <p>Nói một cách khác, người tu Đại thừa Bồ tát, phải luôn luôn tinh tấn tu hành, để thắng giặc nội tâm và ngoại cảnh.</p>
  <p>Giặc nội tâm là những gì? Đó là lục tặc, tam độc, thất tình, lục dục v.v… Bồ tát tích cực lo xoay vọng thức trở lại bản tâm thanh tịnh, không cho rong ruổi theo sáu trần. Bồ tát tinh tấn giữ tâm thanh tịnh, không cho khởi vọng niệm; vọng niệm không khởi thì ba độc không sanh, ba độc không sanh thì ba nghiệp không tạo, ba nghiệp không tạo thì không thọ sanh tử luân hồi. Nhưng giặc nội tâm không phải dễ thắng. Người xưa nói: “Thắng người thì dễ, mà thắng mình rất khó”. Những kẻ thiện chiến, ở chiến trường, có thể trăm trận trăm thắng; nhưng khi chiến đấu với giặc lòng, chưa chắc đã thắng được dễ dàng. Bởi thế, kẻ tu hành phải luôn luôn cảnh giác đề phòng sự khởi loạn của nội tâm, và phải cương quyết mở một mặt trận để tiêu trừ nội loạn cho đến tận gốc.</p>
  <p>Giặc bên ngoài là những gì? Đó là những cạm bẫy lợi danh, món ngon vị lạ; đó là những giường êm, nệm ấm; đó là những sắc đẹp, lời hay v.v… Người tu theo hạnh tinh tấn phải luôn luôn đề phòng, xa tránh mọi thứ giặc nguy hiểm ấy, và quyết tâm đi thẳng đến mục đích đã vạch sẵn.</p>

  <p><strong>7. Tứ nhiếp pháp là pháp tu của Bồ tát</strong><br>
  Người tu Đại thừa Bồ tát, nhắm mục đích lợi tha hơn tự lợi, nên tìm mọi cách để làm lợi lạc cho chúng sanh. Một trong những pháp môn để hóa độ chúng sanh một cách có hiệu quả nhất là “Tứ nhiếp pháp”. Tứ nhiếp pháp là bốn phương pháp để cảm hóa chúng sanh. Bốn phương pháp ấy là:</p>
  <ul style="padding-left: 2.5rem;">
    <li>a) Bố thí: là dùng sự Bố thí để cảm hóa chúng sanh. Phương pháp này đã có nói ở đoạn trên rồi, tưởng không cần phải nhắc lại ở đây nữa.</li>
    <li>b) Ái ngữ: là dùng lời nói nhỏ nhẹ, thương yêu để cảm hóa chúng sanh. Có nhiều người trong lòng không xấu, nhưng vì lời nói thiếu nhã nhặn, thiếu dịu dàng mà mất cảm tình, có nhiều khi gây thù oán với người chung quanh. Bởi thế, muốn chúng sanh nghe theo mình, hoan hỷ làm các điều thiện, Bồ tát phải dùng lời nói nhẹ nhàng, chứa đầy yêu thương.</li>
    <li>c) Lợi hành: là làm những việc lợi lạc cho chúng sanh để cảm hóa họ. Người tu theo hạnh Bồ tát, hễ thấy chúng sanh thiếu thốn cái gì thì mình cho cái ấy, không so đo, tính toán. Ra đường, hễ thấy ai cần dùng đến mình, thì dù khó khăn bao nhiêu, cũng không từ nan. Hành giả luôn luôn tìm cách giúp đỡ mọi người, để trút cho họ gánh đau thương đang đè nặng trên hai vai họ. Ngày nay, những công việc từ thiện xã hội chính là những công việc rất thích hợp đối với người tu hạnh Bồ tát.</li>
    <li>d) Đồng sự: là làm chung công việc với người, để cảm hóa họ. Muốn làm lợi ích cho chúng sanh, phải hiểu rõ hoàn cảnh, tâm lý tư tưởng của họ. Muốn thế, phải gần gũi thân cận với họ, cùng chung gánh vác công việc với họ, làm cho họ thấy mình với họ không xa cách nhau, cùng chung sống trong một hoàn cảnh như nhau. Có thế, họ mới cảm mến mình và nghe theo những lời mình khuyên bảo.</li>
  </ul>

  <p><strong>8. Ngũ minh là pháp tu của Bồ tát</strong><br>
  Tứ nhiếp pháp vừa nói ở trên là một pháp môn mà mọi người, với một thành tâm thiện chí muốn giúp ích cho đời, đều có thể thực hành được. Nhưng muốn giúp ích một cách có nhiều hiệu quả hơn, hành giả phải thông thạo các ngành chuyên môn mà Phật đã dạy trong Ngũ minh. Đó là:</p>
  <ul style="padding-left: 2.5rem;">
    <li>a) Nội minh: là thông hiểu giáo lý nội điển để truyền bá sâu rộng Phật pháp.</li>
    <li>b) Nhơn minh: là thông hiểu phương pháp luận lý, để biện luận chống ngoại đạo tà giáo, vạch rõ cho mọi người thấy cái giá trị chơn thật của Phật pháp và cái sai quấy, thiếu sót của các học thuyết, giáo điều khác.</li>
    <li>c) Thanh minh: là thông thạo văn chương ngôn ngữ, biết nhiều thứ tiếng để truyền bá Phật pháp một cách có hiệu quả, từ trong nước đến ngoài nước, hầu hóa độ được nhiều người.</li>
    <li>d) Phương minh (Y phương minh): là thông thạo về y khoa để chữa bệnh cho người. Sự thông thạo này rất ích lợi cho việc hóa độ, vì những bệnh nhân, một khi được chữa khỏi, thì dễ dàng nghe theo, làm theo những lời chỉ dạy của người chữa. Vả lại, trong việc làm này, người đời nhận thấy rõ ràng thiện chí, lòng vị tha của mình đối với họ. Do đó, họ sẽ cảm phục và nghe theo mình.</li>
    <li>đ) Công xảo minh: là thông thạo về nghề nghiệp. Người biết được nhiều nghề, thì gặp hoàn cảnh khó khăn nào cũng có thể giúp đỡ người đời được. Nếu có thiện chí giúp đời mà tay chân vụng về, thiếu chuyên môn, không biết việc, thì cũng chẳng giúp ích gì được cho ai. Bởi vậy, những kẻ muốn ra giúp đời một cách đắc lực, trước hãy tự luyện tập cho mình có nhiều khả năng chuyên môn hơn ai hết. Các vị tu hạnh Bồ tát, để thực hiện được Đại nguyện, cần phải trau dồi tay chân cho thật điêu luyện, nghề nghiệp cho thật tinh xảo để dù ở trong trường hợp nào, cũng có thể giúp ích cho đời.</li>
  </ul>
  <p>Khi chế ra pháp môn ngũ minh này, Đức Phật quả đã chứng tỏ rất sành tâm lý quần chúng. Ngày nay, nếu vị nào có phát tâm tu hạnh Bồ tát, mà áp dụng được pháp môn “Ngũ minh” này, chắc chắn sẽ được quần chúng ngưỡng mộ, tin theo, và Đạo Phật sẽ phát triển vô cùng mạnh mẽ.</p>

  <p><strong>9. Tu sáu trần, sáu căn, sáu thức, và bảy đại</strong><br>
  Như chúng ta đã biết, pháp môn của Phật nhiều không xiết kể; kẻ lựa pháp môn này, người lựa pháp môn khác, nhưng chung cục, nếu tu một cách rốt ráo, thì quả vị cuối cùng vẫn giống nhau. Đó là quả Bồ tát hay quả Phật. Cũng như muôn ngàn lạch nước, cái nhỏ, cái lớn, cái cao, cái thấp, cái ở phương đông, cái ở phương tây, nhưng một khi đã được khai thông cho đến tận cùng thì cũng đều chảy ra biển cả. Vì lẽ đó, cho nên các vị Bồ tát, có vị tu theo những pháp môn đã nói ở đoạn trên; còn có vị lại chỉ tu riêng một Trần, một Căn, một Thức, hay một Đại mà cũng chứng quả. Những bằng chứng mà kinh điển ghi chép về các vị Bồ tát chứng quả do tu một pháp môn như trên, không sao kể xiết.</p>
  <p>Noi gương các Ngài nói trên, về sau, có nhiều vị cũng tu riêng một căn hay một thức. Như có vị tu hai con mắt: thấy sắc không mê sắc; tu hai lỗ tai: nghe tiếng không nhiễm tiếng; tu lỗ mũi: ngửi mùi không vướng mùi; tu cái lưỡi: nếm vị không nhiễm vị; tu cái thân: xúc chạm làn da mà không cảm xúc; tu cái ý thức: tiếp nhận pháp trần mà không nhiễm pháp trần. Bởi thế, chư tổ thường dạy những câu như: “Kiến sắc phi can sắc, văn thanh bất thị thanh” (thấy sắc đẹp không hệ lụy vì sắc; nghe tiếng hay không dính dấp gì đến tiếng) hay câu: “Ngộ thanh ngộ sắc như thạch thượng tài hoa; kiến lợi kiến danh như nhãn trung trước tiết” (nghe tiếng, thấy sắc như hoa trồng trên đá; thấy lợi thấy danh như bụi rơi trong mắt).</p>
  <p>Tóm lại, từ mắt thấy tai nghe, mũi ngửi, miệng nếm, thân xúc, ý nghĩ v.v… Bồ tát mỗi mỗi đều tu, cho đến đi đứng nằm ngồi, cũng đều là tu. Tất cả mọi sự mọi việc từ nội tâm đến ngoại cảnh, từ một vi trần đến sơn hà đại địa, đều là pháp tu của Bồ tát. Ý nghĩa trên đây, được diễn ra trong câu kinh sau đây:</p>
  <blockquote>
    <p>“Nhất thiết chư pháp vô phi Phật pháp”<br>
    (Tất cả các pháp đều là Phật pháp)</p>
  </blockquote>

  <p><strong>10. Xông pha vào nghịch cảnh, thử xem tâm mình còn phiền não nhiễm ô không, để trừ</strong><br>
  Khi mới tu, hành giả phải tìm thuận cảnh và tránh xa nghịch cảnh, để sự tu hành được dễ dàng thuận lợi. Nhưng nếu cứ ở mãi trong thuận cảnh, thì sự tu hành khó tiến bộ, vì thiếu thử thách; cũng như một thủy thủ, khi mới vào nghề thì chỉ tập lái thuyền trên những khúc sông lặng lẽ, hiền lành, nhưng cứ sợ sóng to gió lớn, mà quanh quẩn mãi trong những dòng sông ấy thì không bao giờ trở thành một thủy thủ giỏi. Muốn thành một thủy thủ có tài, có kinh nghiệm thì phải tập ra biển cả, chiến đấu với sóng to gió lớn; có như thế mới hy vọng một ngày kia vượt đại dương mà đến bờ bên kia. Cũng vậy, người tu hành muốn đến mức độ cao, phải tuần tự thử thách với các nghịch cảnh. Có gặp nhiều nghịch cảnh, mới lượng được sức lực, khả năng, chí khí, sự tu luyện của mình tới đâu. Những thử thách ấy cho mình nhận thấy tâm còn phiền não, nhiễm ô hay không, để trừ. Hành giả đến giai đoạn này, cũng giống như ly nước đã qua giai đoạn để yên và lọc cặn rồi, bây giờ đến giai đoạn phải bị lắc mạnh, để lọc lại cho hết sạch.</p>
  <p>Bồ tát xem các nghịch cảnh là những phương tiện tốt nhất, để giúp cho mình chóng thành quả Phật. Bởi thế, Phật dạy: Đề-bà-đạt-đa là thiện hữu của Ngài, vì nhờ có Đề-bà-đạt-đa mà Ngài mau thành Phật. Nếu không có những hạng người như chàng Vô-não, cô gái Ngoại đạo vu oan cho Ngài, vua A-xà-thế tìm cách hãm hại Ngài thì làm sao thấy được đức tính “Đại Hùng, Đại Lực, Đại Từ Bi” của Ngài? Cũng vậy, nếu không có nàng Thị Kính, thì làm sao hiển lộ được đức tính Nhẫn nhục của Ngài Quan Âm Thị Kính? Nếu không có sa mạc Gobi, núi Himalaya, thì làm sao thử thách được ý chí đi cầu Đạo dũng mãnh của Ngài Đường Tam Tạng?</p>
  <p>Người tu hạnh Bồ tát mà sợ gian khổ, trốn tránh nghịch cảnh, tìm chốn an tịnh, thì khó mà thành tựu đại nguyện của mình. Nhiệm vụ chính của Bồ tát là giúp đời cứu chúng sanh, nếu không thắng được nghịch cảnh, làm chủ được tâm mình, thì còn cứu độ ai được? Cho nên, để thử thách và điêu luyện bản lĩnh của mình, hành giả phải tìm nghịch cảnh mà đến, tìm trở ngại mà vượt qua, tìm gian nguy mà xông vào. Sự tu luyện của các vị Bồ tát đi ngược với quan niệm thông thường về sự tu hành.</p>
  <p>Đối với các vị Bồ tát, thì những nơi tối tăm nhơ bẩn, cũng đều là cảnh tu thanh tịnh của họ. Do đó, mới có câu: “Dâm phòng, tửu tứ vô phi thanh tịnh đạo tràng” (phòng dâm, tiệm rượu, đều là đạo tràng thanh tịnh). Đứng trước một nghịch cảnh khó khăn, nguy hiểm ấy, mà hành giả thắng được, vượt qua được, thì sự tu hành mới thật là có giá trị lớn lao, siêu phàm, bạt tục. Người xưa có nói “Cây mọc trên đá sỏi, gỗ mới tốt; người gặp khó khăn, chí mới kiên”; hay: “Chiến đấu không khó khăn, thì chiến thắng không oanh liệt”.</p>

  <p><strong>11. Thọ khổ để cứu chúng sanh là hạnh tu của Bồ tát</strong><br>
  Các bậc tu theo hạnh Bồ tát, đã có Đại nguyện cứu độ chúng sanh, nên dù gặp khó khăn bao nhiêu, dù phải khổ sở bao nhiêu, dù phải hy sinh đến thân mạng đi nữa, các vị cũng vui lòng. Trong kinh điển, cũng như trong lịch sử truyền bá Phật pháp, đã có không biết bao nhiêu trường hợp các vị Bồ tát thọ khổ để cứu độ chúng sanh:</p>
  <ul style="padding-left: 2.5rem;">
    <li>a) Bồ tát vì chúng sanh mà phạm giới sát sanh: Trong một tiền kiếp của Đức Phật Thích Ca, Ngài làm một nhà lái buôn, cùng 500 người vượt biển đi buôn xa. Khi thuyền đang lênh đênh ngoài biển cả, thì một tướng cướp xuất hiện, định đánh chìm thuyền và giết hết cả 500 người lái buôn để đoạt của. Trước cảnh nguy nan ấy, Ngài đã giết tướng cướp và cứu 500 người kia khỏi chết. Như thế là Ngài đã phạm tội sát nhân, phải chịu quả báo, nhưng vì thương xót cho 500 người bị chết oan, và cứu cho tên cướp kia khỏi bị đọa vào ác đạo, mà Ngài phải ra tay không do dự.</li>
    <li>b) Bồ tát vì chúng sanh mà phạm giới trộm cắp: Kinh Lăng nghiêm đối với Ấn Độ là một quốc bảo, nên các vua chúa đời xưa ngăn cấm nghiêm nhặt, không cho phép một ai được đem ra khỏi nước. Ai đem trộm kinh ấy ra nước ngoài, sẽ bị tội tử hình. Nhưng Ngài Bát-la-mật-đế (Paramiti), đã vì chúng sanh, xẻ bắp đùi, nhét bộ kinh ấy vào, may lại mà đem đến Trung Hoa để truyền bá.</li>
    <li>c) Bồ tát vì chúng sanh mà phạm giới uống rượu và nói dối: Bà Mạt-lợi Phu nhân, để cứu mạng cho quan Trù Giám, đã phạm tội uống rượu và nói dối với vua.</li>
  </ul>
  <p>Không cần dẫn chứng đâu xa, ngay tại Việt Nam chúng ta, trong “Vụ bảo vệ Chánh pháp” vừa qua, nhãn tiền không biết bao nhiêu bằng chứng về sự thọ khổ để cứu độ chúng sanh và bảo vệ Đạo pháp. Bằng chứng hùng hồn nhất là 7 vị Bồ tát đã tự thiêu thân, nhiều vị tăng, ni đã cam chịu cảnh đánh đập dã man, tù đày nhục nhã, để nêu cao Chánh pháp và bảo vệ tín đồ.</p>
  <p>Ở đây trước khi qua đoạn khác, chúng ta cũng nên phân biệt hai trường hợp khác nhau của sự phạm giới nói ở trên để khỏi sự ngộ nhận: xét bề ngoài thì cũng đồng là phạm giới, như sát sanh, trộm cắp, nói láo, uống rượu; nhưng xét về động cơ thúc đẩy bên trong thì phàm phu và Bồ tát khác nhau. Bồ tát thì vì lòng từ bi và trí tuệ, vì mục đích lợi tha, cứu độ mà phạm giới. Các vị sáng suốt thấy nếu mình không gánh chịu cái quả khổ do hành động mê mờ tội lỗi của chúng sanh gây ra, thì chúng sanh phải trôi lăn mãi trong vòng khổ não, nên đứng ra chịu đựng thay cho chúng sanh. Bởi thế, quý Ngài giết người không vì sân hận, trộm cắp không vì tham lam, uống rượu không vì thèm khát, nói láo không vì mưu lợi cho mình. Trái lại, chúng sanh phạm giới hoàn toàn do dục vọng thúc đẩy, phiền não kéo lôi. Họ giết người vì hung ác, sân hận, trộm cắp vì tham lam, uống rượu vì ham dục lạc, nói láo vì khoe khoang, kiêu mạn là vì lợi riêng. Do động lực thúc đẩy khác nhau đó, mà quả báo của sự phạm giới, mặc dù không tránh khỏi, nhưng đối với các vị Bồ tát thì nhẹ hơn.</p>

  <h3 id="guong-sang">IV. NHỮNG GƯƠNG SÁNG TRONG HÀNH ĐỘNG CỦA CÁC VỊ BỒ TÁT</h3>
  <p><strong>1. Ngài Thiện Tài Bồ tát</strong><br>
  Trong kinh Hoa Nghiêm về phẩm “Thiện Tài ngũ thập tam tham” có chép về sự tu hành của Ngài Thiện Tài, đại ý như sau:</p>
  <p>Ngài Thiện Tài, sau khi theo học với Ngài Văn-thù, ngộ được căn bản trí rồi, thì đi tìm các vị Thiện tri thức khác để tu học, hầu chứng ngộ được sai biệt trí. Mỗi khi Ngài đến tham học với một vị Thiện tri thức và ngộ được một pháp môn rồi, vị này lại giới thiệu Ngài đến học với một vị Thiện tri thức khác. Ngài đã đi tham học như thế với đủ hạng Thiện tri thức. Khi thì Ngài đến học Đạo với một vị vua hung ác; vị vua này là một Bồ tát thị hiện, dùng những phương tiện đánh khảo để thức tỉnh những người hung ác, khiến họ hồi tâm hướng thiện. Mục đích của Ngài Thiện Tài khi đến tham học với các vị vua này là cốt để thử xem mình có thật ngộ được pháp “quán như huyễn” không. Nếu khi bị đánh đập, kềm kẹp mà Ngài vẫn còn cảm thấy đau đớn, khổ sở thì tức là Ngài chưa chứng được pháp quán ấy.</p>
  <p>Khi đã thành tựu được pháp quán này, Ngài lại đi học với một vị Bà-la-môn, mà cũng chính là một vị Bồ tát thị hiện. Vị này hứa dạy, nhưng với một điều kiện là Ngài phải leo lên núi cao để nhảy xuống hố. Ngài đã ưng thuận, làm y như vị Bà-la-môn bắt buộc, để thử xem mình có thật chứng đến pháp “Quán vô ngã”, hay còn lo sợ cho thân mình bị hủy hoại, nghĩa là chưa chứng được lý “vô ngã”.</p>
  <p>Rồi sau đó, Ngài lại đến học đạo với Ngài Thắng Nhiệt. Ngài Thắng Nhiệt cũng lại bảo Ngài phải nhảy vào lửa và lên núi gươm v.v… rồi mới chịu dạy đạo nhiệm màu. Mục đích của sự bắt buộc này là cốt để thử xem Ngài Thiện Tài có thật đã chứng được lý “Bát-nhã chơn không: Sắc tức thị không” chưa. Ngài Thiện Tài đã làm theo đúng như lời Ngài Thắng Nhiệt. Sau khi ngộ được pháp môn màu nhiệm này, Ngài Thiện Tài có làm bài kệ sau đây:</p>
  <blockquote>
    <p>Dịch âm:<br>
    Đồng tử tầm cầu Thắng Nhiệt công,<br>
    Môn đình biệt lộ nhất gia phong.<br>
    Đao sơn hỏa tụ phương đăng khiếu,<br>
    Đốn ngộ viên minh sắc thị không.</p>
    <p>Dịch nghĩa:<br>
    Thiện Tài đồng tử đến xin học đạo với Ngài Thắng Nhiệt. Gia phong của Ngài Thắng Nhiệt hiện ra trước sân. Ngài Thắng Nhiệt dạy phải nhảy vào lửa, leo lên núi gươm đao. Do đó, Ngài Thiện Tài được tỏ ngộ lý “Sắc tức thị không”.</p>
  </blockquote>
  <p>Ngài Thiện Tài lại đến học đạo với bà Tu-mật-nữ. Bà này là một Bồ tát thị hiện làm người mua son bán phấn, để cảm hóa những người ham mê sắc dục (đồng sự nhiếp) trở về đường chánh. Bà Tu-mật-nữ thử Ngài đủ cách để xem Ngài còn nhiễm trần không. Sau một thời kỳ tham học, Ngài Thiện Tài ngộ được pháp môn “tận tham dục tế” (đến chỗ hết tham dục) và làm ra bài kệ sau đây:</p>
  <blockquote>
    <p>Dịch âm:<br>
    Tương phùng tương kiến hữu hà duyên,<br>
    Cao Hạnh Như Lai nhất bảo tiền.<br>
    Chấp thủ bảo thân tâm nguyệt tịnh,<br>
    Vẫn thần tiếp thiệt giới châu viên.<br>
    Nhơn phi nhơn nữ giai tùy hiện,<br>
    Thiên dữ thiên hình ứng bất thiên.<br>
    Tam đức dĩ minh tham dục tế,<br>
    Tửu lâu hoa động túy thần tiên.</p>
    <p>Dịch nghĩa:<br>
    Bởi nhơn duyên gì hôm nay được gặp nhau? Do đời trước có cúng một đồng tiền quý cho đức Cao Hạnh Như Lai. Ôm ấp, nắm tay mà tâm nguyệt vẫn thanh tịnh. Hôn môi, nút lưỡi mà giới thể vẫn châu viên. Tùy mỗi loại ứng hiện thân hình để hóa độ cùng khắp tất cả; hiện người, hiện không phải người, hiện nam nữ và trời v.v… Lòng tham dục đã hết, ba đức (pháp thân, bát nhã và giải thoát) được viên minh. Tửu lâu hoa động là cảnh giới của thần tiên.</p>
  </blockquote>
  <p>Ngài Thiện Tài lại đến học đạo với Đức Di-lặc. Khi đến lầu đài của Đức Di-lặc, Ngài Thiện Tài phải đứng chờ một hồi lâu, vì Đức Di-lặc đi phương xa chưa về. Khi trở về, Đức Di-lặc chỉ khảy móng tay ba lần, cửa lầu liền mở. Ngài Thiện Tài theo Đức Di-lặc đi vào và làm lễ Ngài. Đức Di-lặc lại khảy móng tay ba lần, bỗng xuất hiện vô số Đức Di-lặc và Thiện Tài; và cứ mỗi Đức Di-lặc lại có một Ngài Thiện Tài đứng làm lễ. Cảnh giới huy hoàng tráng lệ, nguy nga trùng điệp, không sao kể xiết. Sau khi Ngài Thiện Tài làm lễ xong, Đức Di-lặc nhiếp thần hóa, thì chỉ còn lại một Đức Di-lặc và một Ngài Thiện Tài đứng trước mà thôi. Ngài Thiện Tài ngạc nhiên hỏi: Tại sao có sự biến hóa kỳ lạ như thế?</p>
  <p>Đức Di-lặc dạy:<br>
  “Chư pháp như thị, như huyễn như hóa” (như thế đó, các pháp đều là huyễn hóa).</p>
  <p>Ngài Thiện Tài nghe nói, liền tỏ ngộ và làm bài kệ sau đây:</p>
  <blockquote>
    <p>Dịch âm:<br>
    Lầu các môn tiền lập phiến thời,<br>
    Long hoa sư chí viễn phương quy.<br>
    Bất duy đàn chỉ quan thâm diệu,<br>
    Hựu thính từ âm ngữ tế vi.<br>
    Lý trí viên dung siêu nhật nguyệt,<br>
    Bồ-đề tâm thị đạo xu cơ.<br>
    Hứa đa cảnh giới hà lai khứ,<br>
    Vạn lý thiên biên nhất nhạn phi.</p>
    <p>Dịch nghĩa:<br>
    Thiện Tài đứng chờ trước cửa lầu một hồi. Đức Di-lặc từ phương xa về, khảy móng tay, cửa lầu liền mở. Chẳng những Thiện Tài này thấy được cảnh giới thâm diệu mà lại còn nghe được lời thuyết pháp màu nhiệm của Đức Di-lặc. Thiện Tài được ngộ đạo, lý trí sáng suốt, chiếu soi hơn nhật nguyệt. Tâm Bồ-đề chính là cái máy đạo. Bao nhiêu cảnh giới vừa rồi, đi đâu cả. Bây giờ chỉ còn một con nhạn bay trong bầu trời muôn dặm xa.</p>
  </blockquote>
  <p>Sau đó, Ngài Thiện Tài lại đến tham học với Ngài Đức Vân tại núi Diệu Cao. Nhưng sau 7 ngày đến đây, Ngài mới gặp được Ngài Đức Vân và được Ngài dạy cho pháp môn “Phổ kiến”. Được tỏ ngộ rồi, Ngài Thiện Tài làm bài kệ sau đây:</p>
  <blockquote>
    <p>Dịch âm:<br>
    Đức Vân thường tại Diệu Cao phong,<br>
    Hành nhiễu phong đầu bất kiến tung.<br>
    Thất nhật ký vong tầm bất kiến,<br>
    Nhất tiêu hà cố đắc tương phùng.<br>
    Phát tâm trụ xứ sư tư hiệp,<br>
    Phổ kiến môn trung Phật cảnh dung.</p>
    <p>Dịch nghĩa:<br>
    Ngài Đức Vân thường ở núi Diệu Cao. Ngài Thiện Tài đến đây đã bảy ngày rồi mà không trông thấy. Một hôm tình cờ thầy trò được gặp nhau. Ngài Thiện Tài ngộ được “pháp môn Phổ kiến”; thấy cảnh Phật viên dung.</p>
  </blockquote>
  <p>Câu chuyện học Đạo của Ngài Thiện Tài trên đây, đem lại cho chúng ta hai ý nghĩa:<br>
  a) Người học đạo, muốn đạt được cứu cánh rốt ráo, phải tìm tòi học hỏi luôn luôn, không quản ngại gian lao, nguy hiểm.<br>
  b) Những thuận duyên, thuận cảnh giúp cho hành giả dễ tu, dễ chứng đã đành, mà những nghịch duyên, nghịch cảnh lại càng giúp cho hành giả chóng thành đạo quả.</p>

  <p><strong>2. Ngài Đơn Hà đã phá chấp cho chúng sanh như thế nào?</strong><br>
  Đối với những kẻ tu hành tầm thường thì không bao giờ dám vượt ra ngoài mực thước, quy luật đã định sẵn. Nhưng đối với các vị Bồ tát, thì có nhiều khi cần phải dùng những phương tiện bất thường, trái ngược với quan niệm thông thường để phá chấp cho chúng sanh, hầu đưa họ đến bờ giác ngộ.</p>
  <p>Theo các Ngài, mọi phương tiện nào có thể cứu độ được chúng sanh, đều được áp dụng.</p>
  <p>Cũng ở trong tinh thần ấy, Ngài Đơn Hà đã đốt tượng Phật, để phá chấp cho chúng sanh. Nhận thấy chúng sanh thường mê chấp Sự tướng bên ngoài, mà bỏ Lý tánh (tánh Phật) bên trong; cứ chạy theo hình thức hư giả, nên Ngài muốn giác ngộ cho chúng sanh, bắt phải từ bỏ giả tướng, để xoay trở lại tìm kiếm bên trong, tánh Phật của mình.</p>
  <p>Một hôm Ngài đã bưng tượng Phật gỗ ở trên bàn thờ, đem xuống chẻ ra và châm lửa đốt, để sưởi ấm. Tất cả tăng chúng ở trong chùa đều kinh ngạc; nhất là vị Trụ trì đã quá sợ hãi, đến nỗi râu mày đều rụng hết. Vì theo quan niệm thông thường, thì tội đốt Phật sẽ bị đọa xuống địa ngục A-tỳ. Nhưng Ngài Đơn Hà điềm nhiên dạy rằng: “Ta thiêu Phật để tìm Xá-lợi”. Ý của Ngài muốn nói: Thiêu cái xác Phật, để tìm cái tâm Phật (đốt cái chấp ở nơi Phật gỗ, để tìm Phật tâm). Phá cái vọng chấp chạy theo Đức Phật ở bên ngoài để quay lại tìm Đức Phật lý tánh ở trong tâm.</p>
  <p>Do đó, Cổ nhân có bài kệ rằng:</p>
  <blockquote>
    <p>Dịch âm:<br>
    Đơn Hà thiêu mộc Phật,<br>
    Viện chủ lạc tú mỹ.<br>
    Nhất trường kỳ đặc sự,<br>
    Thiên hạ thiểu nhơn tri.</p>
    <p>Dịch nghĩa:<br>
    Đơn Hà đốt Phật gỗ,<br>
    Trụ trì rụng râu mày.<br>
    Một trường việc kỳ đặc,<br>
    Thiên hạ ít người hay.</p>
  </blockquote>

  <p><strong>3. Ngài Phật Ấn hóa độ ông Tô Đông Pha</strong><br>
  Ông Tô Đông Pha là một nhà đại thi sĩ. Ngài Phật Ấn là bạn của ông, muốn hóa độ ông, nên đã dùng pháp đồng sự nhiếp (trong Tứ nhiếp pháp) sau đây:</p>
  <p>Ngài Phật Ấn đã hòa mình trong đời sống của Tô Đông Pha, kết giao mật thiết với ông, để nhắc nhở ông, mỗi khi ông sắp làm điều sai quấy.</p>
  <p>Một hôm ông Tô Đông Pha lén Ngài Phật Ấn đi chơi thuyền uống rượu, thưởng trăng. Ngài Phật Ấn có tha tâm thông, biết được nên lén xuống thuyền trước nằm đợi sẵn. Khi thuyền ra giữa dòng, thấy bèo lục bình dạt ra, có con cá đang nhởn nhơ bơi lội, nhà thi sĩ họ Tô tức cảnh, liền ứng khẩu ngâm bài thơ sau đây:</p>
  <blockquote>
    <p>Phù bình bát khai,<br>
    Ngư du xuất lai.<br>
    Đắc kỳ sở tại!<br>
    Đắc kỳ sở tại!</p>
    <p>Dịch nghĩa:<br>
    Bèo cỏ vẹt hai,<br>
    Cá lội chơi đây.<br>
    Thích thú lắm thay!<br>
    Thích thú lắm thay!</p>
  </blockquote>
  <p>Để ông Tô Đông Pha ngâm xong, Ngài Phật Ấn liền thoát ván chun ra và đọc bài thơ đáp lại:</p>
  <blockquote>
    <p>Bình bản bát khai,<br>
    Phật Ấn xuất lai.<br>
    Nhơn yên sưu tai!<br>
    Nhơn yên sưu tai!</p>
    <p>Dịch nghĩa:<br>
    Ván bằng vẹt hai,<br>
    Phật Ấn lại đây.<br>
    Người giấu được thay!<br>
    Người giấu được thay!</p>
  </blockquote>
  <p>Một lần khác, ông Tô Đông Pha lén ăn mặn trong ngày chay. Ngài Phật Ấn biết, liền đi đến nhà ông để ngăn chặn. Khi thấy Ngài đến ở ngoài ngõ, ông Tô Đông Pha liền bưng đĩa cá giấu trên kệ cửa. Sau khi vào nhà chào hỏi, Ngài Phật Ấn giả quên, hỏi:</p>
  <p>Quan lớn họ Tô, vậy chữ Tô viết thế nào?<br>
  Ông Tô Đông Pha thật tình trả lời:<br>
  Vậy chứ Hòa thượng quên chữ “Tô” họ nhà tôi rồi sao? Chữ “Thảo” ở trên là cỏ; chữ “Ngư” ở bên trái là cá; chữ “Hòa” ở bên phải là lúa. Chữ “Tô” nghĩa là sống, cá sống dưới cỏ và bên bụi lúa.</p>
  <p>Ngài Phật Ấn trả lời:<br>
  Tôi nhớ chữ “Tô” hình như là chữ “Ngư” ở trên, rồi chữ “Thảo” ở dưới, mới đúng chứ!</p>
  <p>Ông Tô Đông Pha vô tình cãi lại:<br>
  Đâu có chữ “Tô” gì lạ vậy, Hòa thượng?</p>
  <p>Ngài Phật Ấn lấy tay chỉ đĩa cá để trên ngạch cửa, vừa cười, vừa nói:<br>
  “Chữ ‘Tô’ của Cổ nhân chế ra, thì là cá núp dưới cỏ cây; còn chữ ‘Tô’ của nhà ông thì cá ở trên cây?” (đĩa cá để trên bệ cửa).</p>
  <p>Đó là một cách hóa độ khôn khéo, tùy thuận chúng sanh mà làm. Biết rằng ông Tô Đông Pha là một người thích văn chương thi phú, Ngài Phật Ấn cũng dùng văn chương thi phú để cảm hóa, làm cho ông đi vào con đường ngay, lẽ phải một cách tự nhiên, không miễn cưỡng bó buộc trái với sở thích của mình. Đó cũng là một hạnh tu của Bồ tát.</p>

  <p><strong>4. Gương hy sinh cao cả của Ngài Thích Quảng Đức</strong><br>
  Không cần phải tìm gương sáng đâu xa của các vị Bồ tát, ngay trong thời đại này, gần bên cạnh chúng ta đây, gương hy sinh anh dũng của Ngài Quảng Đức cho Đạo pháp và chúng sanh, cũng đủ cho chúng ta một gương sáng về hành vi của các vị Bồ tát.</p>
  <p>Trong khi nước nhà đang bị nạn độc tài cá nhân làm cho điêu linh, suy sụp, dân chúng lầm than oán thán, và Phật giáo đồ đang lâm vào nguy cơ bị tiêu diệt, cùng một lần với Phật giáo Việt Nam, thì hành động sáng suốt, đúng thời và đúng chỗ của Bồ tát Quảng Đức đã cứu vãn được tất cả: nước nhà thoát khỏi ách độc tài Nhu, Diệm; Phật giáo đồ thoát khỏi nạn bị tiêu diệt và Phật giáo Việt Nam khôi phục lại địa vị của mình trên đất nước. Sự hy sinh cao cả, bình tĩnh, không một chút vướng bận lợi danh, đã nêu lên một gương sáng chói, rạng rỡ không chỉ riêng cho Việt Nam mà còn cả thế giới nữa. Hành động của Ngài, phi các vị Bồ tát, không ai làm nổi, vì nó có đủ cả: Bi, Trí, Dũng.</p>
  <p>Bi, vì Ngài đã xót thương cho đất nước, đồng bào và tín đồ Phật giáo đang lầm than, đau xót, dưới một chế độ tàn bạo;<br>
  Trí, vì Ngài đã biết đem thân mạng mình ra phục vụ cho chúng sanh một cách vô cùng hiệu quả;<br>
  Dũng, vì Ngài không sợ chết, trái lại đã tìm một hình thức hy sinh hùng dũng nhất, là sự tự thiêu, và đã chịu đựng được sự tự thiêu một cách bình tĩnh, oai hùng.<br>
  Cho nên chúng ta không lấy làm lạ, khi thấy hành động hy sinh của Ngài Quảng Đức đã chấn động cả Năm Châu.</p>

  <h3 id="ket-luan">V. KẾT LUẬN</h3>
  <p>Qua các phần trình bày ở các đoạn trên, chắc quý độc giả đã có một ý niệm rõ ràng về con đường tu hành rộng lớn của các vị Đại thừa Bồ tát.</p>
  <p>Thật vậy, con đường đi của các Ngài vô cùng rộng rãi, cao thâm tột bậc, không một con đường nào sánh kịp. Sở dĩ được như vậy là vì Đại nguyện của các Ngài vĩ đại vô cùng, có tính cách vị tha vô lượng.</p>
  <p>Đại nguyện đã lớn lao, thì Đại hạnh cũng phải kỳ diệu mới tương xứng. Bởi thế, chúng ta thấy trong hành vi cử chỉ của các Ngài có nhiều lúc vượt ra ngoài quan niệm thông thường của thế tục.</p>
  <p>Đối với các Ngài, không giờ phút nào mà không tu: đi, đứng, nằm, ngồi đều là Tu cả; thấy, nghe, nếm, ngửi, xúc chạm, đều là Tu cả.</p>
  <p>Đối với các Ngài, không phải chỉ ở trước bàn Phật, tụng kinh niệm Phật mới là tu; không phải ngồi tham thiền nhập định mới là tu; các Ngài tu khắp nơi, mọi chỗ; tu hết cảnh thuận rồi lăn vào cảnh nghịch; hết cảnh thanh tịnh lại xông vào cảnh ô uế, để rèn luyện tâm trí, chịu đựng thử thách, xem tâm mình còn nhiễm ô không, để tiếp tục thanh trừ.</p>
  <p>Cách tu hành của các Ngài, như lóng nước gạn bùn: ban đầu để yên cho cặn cáu lắng xuống. Đến khi lọc hết cặn rồi, lại chao động nữa, để xem còn cặn bẩn không, để trừ cho thật sạch. Khi đã thật sạch rồi, thì dù có chao động bao nhiêu cũng vẫn là nước trong, không còn ngại ngùng gì nữa.</p>
  <p>Đối với các Ngài, tất cả chúng sanh đều là con chung, không phân biệt xa gần, lớn nhỏ, bạn thù, hễ chúng sanh còn khổ là còn cứu độ.</p>
  <p>Tóm lại, con đường tu của Đại thừa Bồ tát thật là cao siêu vô cùng, rộng rãi, bao la vô tận.</p>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Nguyên tắc cốt lõi xuyên suốt mọi hành động của một bậc Đại Thừa Bồ Tát là gì?",
    options: {
      a: "Tìm kiếm sự giải thoát cá nhân trước nhất",
      b: "Lấy lợi tha làm tự lợi",
      c: "Tuân thủ nghiêm ngặt các quy luật bất biến",
      d: "Tránh xa mọi cảnh phồn hoa đô hội",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Tóm lại, tư tưởng và hành động của các vị tu hạnh Bồ tát vô cùng tự do và phức tạp, nhưng vẫn không ra ngoài một nguyên tắc chính là Bồ tát dĩ lợi sanh vi bổn hoài... hay lấy lợi tha làm tự lợi.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong 'Tam tụ tịnh giới', loại giới nào được coi là phạm vi vô cùng lớn lao mà hàng Thanh văn không thể làm nổi?",
    options: {
      a: "Nhiếp luật nghi giới",
      b: "Nhiêu ích hữu tình giới",
      c: "Nhiếp thiện pháp giới",
      d: "Ngũ giới cấm",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Nhiêu ích hữu tình giới: nghĩa là làm lợi ích cho toàn thể chúng sanh... Vì nó bao quát, vô hạn lượng như thế, nên hàng Thanh văn không thể làm được, mà chỉ hàng Đại thừa Bồ tát mới giữ nổi.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Hành động 'thí nội tài' trong hạnh Bố thí Ba-la-mật được hiểu như thế nào?",
    options: {
      a: "Quyên góp tiền bạc và của cải vật chất",
      b: "Chỉ dạy phương pháp tu hành thoát ly sanh tử",
      c: "Đem sức lực hoặc thân mạng mình để cứu người",
      d: "Đem lại sự bình an, không sợ hãi cho người khác",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là thí ngoại tài.",
      b: "Sai. Đây là thí pháp xuất thế gian.",
      c: "Đúng. 'Đem sức lực, hoặc thân mạng mình để cứu người, như cho máu, nhảy vào lửa, xuống nước để cứu người lâm nạn, thì gọi là thí nội tài (thí tự thân).'",
      d: "Sai. Đây là thí vô úy.",
    },
  },
  {
    question: "Theo văn bản, tại sao Bồ Tát lại coi nghịch cảnh và những kẻ ác phá hại là 'thiện hữu'?",
    options: {
      a: "Vì Bồ Tát không có khả năng chống lại họ",
      b: "Vì đó là cơ hội để thử thách và gạn lọc phiền não",
      c: "Vì những kẻ đó thực chất là những người hiền lành giả dạng",
      d: "Vì Bồ Tát muốn chịu khổ để tích lũy danh tiếng",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Sự tu hành của Đại thừa Bồ tát, cũng như ly nước qua nhiều lần gạn lọc... nên càng gặp nhiều trở ngại lại càng tốt, vì đó là những cơ hội để tu hành... những kẻ ác độc, thường phá hại người tu hành cũng là những thiện hữu.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Pháp tu 'Ngũ minh' giúp Bồ Tát điều gì trong quá trình hóa độ chúng sanh?",
    options: {
      a: "Thông thạo các ngành chuyên môn để giúp đời hiệu quả hơn",
      b: "Chỉ đơn thuần là để học hỏi kiến thức lý thuyết",
      c: "Đạt được thần thông để biến hóa kỳ ảo",
      d: "Nắm giữ quyền lực chính trị tại các quốc gia",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Nhưng muốn giúp ích một cách có nhiều hiệu quả hơn, hành giả phải thông thạo các ngành chuyên môn mà Phật đã dạy trong Ngũ minh.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Hành động Bồ Tát tự thiêu thân để bảo vệ Đạo pháp được xếp vào đức tính nào trong ba đức tính: Bi, Trí, Dũng?",
    options: {
      a: "Chỉ có đức Trí vì là một chiến thuật khôn khéo",
      b: "Cả Bi, Trí và Dũng",
      c: "Chỉ có đức Dũng vì không sợ chết",
      d: "Chỉ có đức Bi vì lòng thương xót chúng sanh",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Hành động của Ngài, phi các vị Bồ tát, không ai làm nổi, vì nó có đủ cả: Bi, Trí, Dũng.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Câu chuyện Ngài Đơn Hà thiêu tượng Phật gỗ nhằm mục đích phá trừ sự chấp trước nào của chúng sanh?",
    options: {
      a: "Mê chấp vào hình thức, sự tướng bên ngoài",
      b: "Chấp vào việc phải giữ giới sát sanh",
      c: "Chấp vào việc phải ăn chay nằm đất",
      d: "Chấp vào các kinh điển giáo khoa",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Nhận thấy chúng sanh thường mê chấp Sự tướng bên ngoài, mà bỏ Lý tánh (tánh Phật) bên trong... Ngài muốn giác ngộ cho chúng sanh, bắt phải từ bỏ giả tướng, để xoay trở lại tìm kiếm bên trong, tánh Phật của mình.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong Tứ nhiếp pháp, 'Ái ngữ' được định nghĩa là gì?",
    options: {
      a: "Cùng chung sống và làm việc với chúng sanh",
      b: "Dùng lời nói nhẹ nhàng, chứa đầy yêu thương để cảm hóa",
      c: "Im lặng để người khác tự suy ngẫm về lỗi lầm",
      d: "Dùng tiền bạc để lôi kéo mọi người về phía mình",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là Đồng sự.",
      b: "Đúng. 'Ái ngữ: là dùng lời nói nhỏ nhẹ, thương yêu để cảm hóa chúng sanh.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Lý do Bồ Tát có thể phạm giới (như sát sanh hay nói dối) trong một số trường hợp đặc biệt là gì?",
    options: {
      a: "Vì Bồ Tát đã đạt đến trình độ không còn bị nghiệp báo tác động",
      b: "Vì lòng từ bi muốn cứu độ chúng sanh khỏi tai nạn lớn hơn",
      c: "Để thể hiện rằng mình đứng trên các quy luật đạo đức",
      d: "Do sự nhầm lẫn vô ý trong quá trình tu hành",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Bồ tát thì vì lòng từ bi và trí tuệ, vì mục đích lợi tha, cứu độ mà phạm giới... đứng ra chịu đựng thay cho chúng sanh.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Ý nghĩa của câu 'Nhất thiết chư pháp vô phi Phật pháp' trong đời sống của Bồ Tát là gì?",
    options: {
      a: "Không cần phải tu hành vì mọi thứ đã là Phật pháp rồi",
      b: "Tất cả các tôn giáo khác đều thuộc về Phật giáo",
      c: "Mọi sự việc và hoàn cảnh đều là cơ hội để tu hành",
      d: "Chỉ những lời Phật dạy trong kinh mới là Phật pháp",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Tất cả mọi sự mọi việc từ nội tâm đến ngoại cảnh, từ một vi trần đến sơn hà đại địa, đều là pháp tu của Bồ tát. Ý nghĩa trên đây, được diễn ra trong câu kinh... Nhất thiết chư pháp vô phi Phật pháp.'",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-9-con-duong-tu-cua-bac-dai-thua-bo-tat-con-duong-tu-cua-bac-dai-thua-bo-tat',
  slug: 'con-duong-tu-cua-bac-dai-thua-bo-tat',
  title: 'Con đường tu của bậc Đại thừa Bồ tát',
  type: 'article',
  status: 'published',
  order: 1,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-9-hanh-trinh-dai-thua-bo-tat/Con_%C4%91%C6%B0%E1%BB%9Dng_tu_B%E1%BB%93_T%C3%A1t.png',
      readingContent,
      tableOfContents: [
        { id: 'loi-noi-dau', label: 'I. Lời Nói Đầu' },
        { id: 'ton-chi-dai-nguyen', label: 'II. Tôn Chỉ Và Đại Nguyện' },
        { id: 'dai-hanh', label: 'III. Đại Hạnh Của Bồ Tát' },
        { id: 'guong-sang', label: 'IV. Những Gương Sáng' },
        { id: 'ket-luan', label: 'V. Kết Luận' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-9-hanh-trinh-dai-thua-bo-tat/H%C3%A0nh_Tr%C3%ACnh_%C4%90%E1%BA%A1i_Th%E1%BB%ABa_B%E1%BB%93_T%C3%A1t.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/kYuBtovwiH8',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3KQKbmQSeqZo1Q9sdYLVTN',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Con Đường Tu Bồ Tát',
    passPercentage: 70,
    questions,
  }
}

export default lesson