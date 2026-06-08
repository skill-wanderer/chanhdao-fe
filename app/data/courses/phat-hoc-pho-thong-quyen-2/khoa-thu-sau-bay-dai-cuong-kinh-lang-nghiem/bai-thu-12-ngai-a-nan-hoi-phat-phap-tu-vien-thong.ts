import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bai-thu-muoi-hai-ngai-a-nan-hoi-phat-phap-tu-vien-thong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ 12</h2>
    <h3 id="i-ngai-a-nan-hoi-phat-phap-tu-vien-thong" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. NGÀI A NAN HỎI PHẬT PHÁP TU VIÊN THÔNG</h3>
    <p>Ngài A Nan và đại chúng nhờ Phật khai thị trí tuệ sáng suốt, tâm hết nghi lầm, nên đồng lạy Phật, quỳ gối chắp tay và kính cẩn thưa rằng:</p>
    <p>Bạch Thế Tôn, chúng con là kẻ phiêu linh nhiều kiếp bần cùng cô quạnh, không biết nhờ có hạnh phúc gì mà được làm em của Phật, cũng như đứa hài nhi mất sữa đã lâu, nay lại gặp được từ mẫu.</p>
    <p>Bạch Thế Tôn, hôm nay chúng con thâm tâm đã được khai ngộ, hết những nghi ngờ, nghe Phật chỉ dạy hiểu được cái nghĩa “sáu gút mở thì cái tên một gút cũng không còn”. Nhưng chúng con còn chưa hiểu “tu căn nào mới được viên thông”. Cúi xin đức Như Lai, duỗi lòng đại bi khai thị cho chúng con lần cuối cùng, may ra ở cơ hội này, con trở lại với bản tâm thanh tịnh của mình, được thành đạo quả.</p>
    <h3 id="ii-phat-hoi-25-vi-thanh-do-tu-phap-mon-gi-duoc-chung-qua" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. PHẬT HỎI 25 VỊ THÁNH DO TU PHÁP MÔN GÌ ĐƯỢC CHỨNG QUẢ</h3>
    <p>Khi đó đức Phật hỏi toàn thể đại chúng: Các ông là người tu hành trong đạo của ta, vậy khi các ông mới phát tâm, đối với 18 giới (sáu căn, sáu trần và sáu thức) do tu theo phương tiện nào mà được thành đạo quả?</p>
    <h4 id="luoc-giai-1" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Tuy nói 18 giới, chớ tóm lại thì có 6 căn. Do sáu căn tu hành mà được thành đạo quả. Nên trước kia Phật nói: “Sanh tử luân hồi hay an vui giải thoát, cũng chỉ tại sáu căn của các ông” (vì muốn cho độc giả hiểu qua những pháp tu của 24 vị Thánh, nên lần tái bản quyển Ðại cương Lăng Nghiêm này, chúng tôi có trích một đoạn (từ trang 166 đến 201) trong bản kinh Lăng Nghiêm do ông Tâm Minh dịch in thêm vào đây, để giúp độc giả nghiên cứu)</p>
    <h3 id="iii-25-vi-thanh-thuat-lai-phap-tu-cua-minh-duoc-chung-qua" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. 25 VỊ THÁNH THUẬT LẠI PHÁP TU CỦA MÌNH ĐƯỢC CHỨNG QUẢ</h3>
    <h4 id="1-do-thanh-tran-chung-a-la-han" class="text-lg font-semibold">1. DO THANH TRẦN CHỨNG A LA HÁN</h4>
    <p>Ông Kiều Trần Na trong hàng năm vị Tỳ-kheo, liền từ chỗ ngồi đứng dậy bạch Phật rằng: - Con ở nơi Lộc Uyển và Kê Viên, gặp đức Như Lai khi mới thành đạo; nhân nghe âm thanh thuyết pháp của Phật mà tỏ ngộ lý Tứ đế. Phật hỏi các Tỳ-kheo, thì con trước hết được gọi là “hiểu”; Như Lai ấn chứng cho con tên là A Nhã Ða. Con do nơi âm thanh vi diệu viên mãn mà thành bậc A La Hán. Nay Phật hỏi pháp tu viên thông, thì như chỗ sở chứng của con, âm thanh là hơn cả.</p>
    <h4 id="luoc-giai-2" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Viên dung thông nhập Như Lai tạng diệu chân như tánh của các pháp nên gọi là viên thông. Bất cứ tu pháp nào mà chứng được chân như của tất cả pháp thì đều gọi pháp đó là viên thông.</p>
    <p>Trong các đoạn trước, Phật đã chỉ rõ cho chúng ta thấy: sanh tử luân hồi do nơi sáu căn, mà được an vui diệu thường cũng do nơi sáu căn; sáu căn tuy vọng, nhưng không thể ngoài sáu căn mà tìm cái chân được, vì rằng trong khi đang mê, chúng ta đem sáu căn này mà thấy nghe cảm xúc; đến khi giác ngộ, chúng chúng ta cũng chỉ đem sáu căn này mà tiếp xúc với trần cảnh. Vậy mà khi mê thì các căn bị ràng buộc nên gọi là gút (kiết); đến khi ngộ thì sáu căn được viên thoát nên gọi là mở.</p>
    <p>Vì sao mà thành ra cột gút, và làm sao để mở gút thì trước Phật đã dùng phương tiện cột khăn mở khăn để chỉ dạy rõ ràng. Ðồng một tánh Như Lai tạng mà vì nguyên do mê lầm nên hiện ra sáu căn ràng buộc. Bởi thế nên nếu nói rằng vọng, thì căn nào cũng vọng; mà nói rằng chân, thì căn nào cũng chân. Nếu một căn được chân thì tất cả các căn đều chân. Lúc bấy giờ các căn tự tại không còn bị bó buộc trong phạm vi: mắt chỉ thấy sắc, tai chỉ nghe tiếng, mũi chỉ ngửi mùi v.v... mà trái lại sáu căn tự tại thọ dụng. Vậy nên tu nhãn căn không phải là tiệt, tu nhĩ căn không phải là thắng v.v... cho đến bất luận tu một căn nào hay một món đại nào cũng như nhau cả, không gì hơn chẳng gì kém, miễn làm sao thấy rõ thật tánh của một pháp thì được viên ngộ viên thoát. Ông A Nan tuy đã thâm ngộ cái ý nghĩa viên ngộ viên tu ấy, nhưng hiện tiền chưa rõ sáu căn, căn nào thích hợp với trình độ của mình và chúng sanh ở cõi Ta-bà này, nên cầu Phật chỉ bày. Phật liền gạn hỏi trong đại chúng, các vị Bồ-tát và các vị A La Hán đã chứng quả vô học, để xem mỗi người, khi ban sơ phát tâm, tu theo phương tiện gì mà đặng ngộ đạo. Một điều mà chúng ta nên chú ý là Phật gạn hỏi chỗ ngộ đạo của các bậc Thánh hiền tăng, đây không phải để so sánh chỗ hơn kém, mà cốt để chứng minh lời Phật đã dạy trước, để chỉ rõ lối tu viên đốn của Ðại thừa, khác lối tu tiệm thứ của Nhị thừa, và để cho ngài A Nan nhân đó, tự lựa căn nào viên thông thích hợp với trình độ của mình mà tu để được giải thoát. Không riêng ông A Nan, nếu chúng ta sau khi nghe hiểu và biết lựa lấy một pháp thích hợp để tu hành, thì sẽ đặng ngộ nhập viên thông tam-muội.</p>
    <p>Ông Kiều Trần Như cùng bốn thầy Tỳ-kheo (5 ông này theo Phật tu khổ hạnh và được Phật hóa độ trước nhất) nhân âm thanh của Phật thuyết pháp mà ngộ lý Tứ đế, chứng viên thông; nên đối với pháp môn thích hợp làm cho ông chứng ngộ, thì thanh trần là hơn cả. Thứ nhất nhờ âm thanh của Phật giảng về Tứ đế mà ngộ được lý Tứ đế (khổ, tập, diệt, đạo). Thứ hai ông quan sát rõ thấu thật tướng của âm thanh, mà ngộ đạo. Thật tướng của âm thanh là vô tướng, không đọa về nhân duyên, tự nhiên, hòa hợp, phi hòa hợp như trước Phật đã chỉ dạy; nó thường vắng lặng, cùng khắp 10 phương, theo nghiệp cảm, theo tâm lượng của chúng sanh mà phát hiện, nên tuy khi chúng ta không đem tâm phân biệt, mà khi ấy tiếng cũng chẳng phải không, chẳng phải các chúng sanh khác cũng tuyệt không nghe thấy như ta. Xưa nay chúng ta chỉ phân biệt theo giả ảnh của thanh trần sanh diệt đối dãi với ta, nên bị thống khổ theo khi có tiếng, hay khi không có tiếng, chứ chưa hề lắng lòng định trí rời vọng trần để quán thật tánh của những tiếng động tịnh là từ đâu, nên cũng chưa hề liễu nhập tánh âm thanh vốn là tánh diệu chân như của Như Lai tạng. Thật tướng âm thanh đã như vậy, thì thật tướng trí do âm thanh thuyết minh cũng vậy.</p>
    <h4 id="2-do-sac-tran-chung-a-la-han" class="text-lg font-semibold">2. DO SẮC TRẦN CHỨNG A LA HÁN</h4>
    <p>Ông Ưu Ba Ni Sa Ðà liền từ chỗ ngồi đứng dậy đảnh lễ chân Phật mà bạch rằng:</p>
    <p>Con gặp Phật lúc mới thành đạo, nhân quán tướng bất tịnh, sanh tâm rất nhàm chán xa lìa; từ tướng bất tịnh đến tướng xương trắng, vi trần rồi tan về hư không, sắc không không hai, ngộ thật tánh các sắc, thành vô học đạo. Ðức Như Lai ấn chứng cho con tên Ni Sa Ðà, sắc phù trần tiêu hết, sắc diệu tánh châu mật viên dung. Con từ sắc tướng kia mà thành bậc A La Hán. Nay Phật hỏi viên thông thì như chỗ sở chứng của con, quán sắc làm nhân là hơn cả.</p>
    <h4 id="luoc-giai-3" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Ưu Ba Ni Sa Ðà (Hán dịch là Trần Tánh, theo chỗ ngộ mà đặt tên), nhân quán sắc tướng mà chứng quả. Hàng Nhị thừa thì quán bất tịnh để sanh tâm nhàm chán diệt tham dục, cầu chứng Niết-bàn. Trái lại hàng Bồ-tát quán bất tịnh để nhận rõ nhân duyên thống khổ, chỗ đảo chấp bất tịnh kế tịnh của chúng sanh mà hóa độ, phá trừ tâm tham đắm sắc thân ngũ dục.</p>
    <p>Ông Ưu Ba Ni Sa Ðà tu theo pháp quán đó, tịnh tâm nhiếp ý, quán sát thân phần của chúng sanh, chỉ toàn là một vật nhơ nhớp thối tha, cả từ đầu đến chân, từ trong ra ngoài, và rõ ràng nhất khi thân ấy đã thành một tử thi phình trướng bầm xanh, bại hoại, máu mủ chảy ra, gân thịt úa rữa, cầm thú rúc ăn, xương gân ly tán, chỉ còn nắm xương khô, lần lần tiêu ra tro bụi, biến vào hư không. Các sắc thân đã tan về hư không, đâu có phân biệt chia rẽ sai khác; chỉ vì đem tâm phân biệt, tương đối với sắc mà gọi là không, tương đối với không mà gọi là sắc, vậy nên sắc, không đều không tự tánh.</p>
    <h4 id="3-do-huong-tran-chung-a-la-han" class="text-lg font-semibold">3. DO HƯƠNG TRẦN CHỨNG A LA HÁN</h4>
    <p>Ông Hương Nghiêm Ðồng tử liền từ chỗ ngồi, đứng dậy đảnh lễ chân Phật mà bạch rằng: - Con nghe đức Như Lai dạy con chín chắn quán các tướng hữu vi. Con liền từ tạ Phật lui về nhà thanh trai yên tịnh, trông thấy các thầy Tỳ-kheo đốt hương trầm thủy, mùi hương lặng lẽ bay vào trong mũi; con quan sát mùi hương đó: chẳng phải khói, chẳng phải lửa, đi không chỗ tới, đến không chỗ bắt đầu, do đó vọng ý thức con tiêu diệt, phát minh tánh vô lậu. Ðức Như Lai ấn chứng cho con hiệu là Hương Nghiêm, hơi hương phù trần thoạt diệt, hơi hương diệu tánh được mật viên. Con do nơi hương trần kia mà thành bậc A La Hán. Nay Phật hỏi viên thông, thì như chỗ sở chứng của con, hương nghiêm là hơn cả.</p>
    <h4 id="luoc-giai-4" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Hương Nghiêm Ðồng tử (theo chỗ ngộ mà đặt tên) nhân quan sát cái tướng hữu vi là hương trần mà chứng được viên thông. Thường thường chúng ta chỉ tưởng mùi hương là một thứ sẵn có của gỗ trầm v.v... hễ có gỗ trầm là có hương; nhưng xét kỹ thì mùi hương ấy đâu phải chỉ do gỗ trầm mà có được; còn do không khí, do lửa đốt và do tỷ căn của ta tiếp xúc, tỷ thức giác xúc, ý thức phân biệt, thiếu một thì không thành mùi hương được. Vậy thật ra tánh chân thật hương trần không phải là năng tri sở tri, cũng không phải là ly năng tri sở tri mà nó có ra, chỉ tùy theo nghiệp của mỗi chúng sanh mà phát hiện.</p>
    <h4 id="4-do-vi-tran-chung-bo-tat" class="text-lg font-semibold">4. DO VỊ TRẦN CHỨNG BỒ TÁT</h4>
    <p>Hai vị Pháp vương tử Dược Vương và Dược Thượng cùng năm trăm Phạm Thiên trong hội, liền từ chỗ ngồi đứng dậy, đảnh lễ dưới chân Phật mà bạch rằng: - Con từ vô thỉ kiếp làm lương y trong đời, miệng con từng nếm các vị cỏ, cây, vàng, đá của thế giới Ta-bà này, số đến mười vạn tám nghìn thứ; như vậy đều biết hết thảy vị của: đắng, cay, chua, ngọt, mặn, lạt, các vị hòa hiệp, câu sanh, biến dị, cho đến nào là lạnh, là nóng, có độc, không độc, đều biết khắp cả. Sau con lại nhân thừa sự đức Như Lai mà hiểu rõ vị tánh, chẳng phải không, chẳng phải có, chẳng phải tức thân tâm, chẳng phải ly thân tâm, phân biệt vị trần, mà đặng khai ngộ. Do đó, Phật ấn chứng cho anh em con hiệu là Dược Vương Bồ-tát, Dược Thượng Bồ-tát và làm pháp vương tử ở trong hội này; chúng con nhân vị trần mà đặng giác ngộ lên hàng Bồ-tát. Nay Phật hỏi viên thông, thì như chỗ sở chứng của con, quán vị trần làm nhân là hơn cả.</p>
    <h4 id="luoc-giai-5" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Vị trần là các vị cay, chua, đắng, ngọt; vị hòa hiệp như các món ăn do nhiều thức hiệp lại; vị câu sanh như ớt sẵn cay, bồ hòn sẵn đắng; vị biến dị là do thay đổi mà ra, như mật ong để lâu hóa chua, rượu để lâu thì lạt...</p>
    <p>Ngài Dược Vương, Dược Thượng Bồ-tát do phân biệt quán sát bốn nhân của vị trần mà chứng đạo. Quán sát nguyên nhân của vị, như thế nào? Nếu nói vị do hư không thì sao nếm hư không, không biết ngọt, đắng; nói rằng vị thật có, thì vị vốn vô hình; nói rằng vị tức là thân tâm, thành ra nó có tánh biết; còn nói vị ly thân tâm thì cái gì phân biệt mà biết vị. Hai vị Bồ-tát quan sát như vậy, ngộ nhập cái tánh phi tức, phi ly, phi không, phi hữu của vị trần, nên vọng ý tiêu tan, mà giác tánh được tỏ bày vậy.</p>
    <h4 id="5-do-xuc-tran-ma-chung-thanh" class="text-lg font-semibold">5. DO XÚC TRẦN MÀ CHỨNG THÁNH</h4>
    <p>Ông Bạt Ðà Bà La với mười sáu người bạn Bồ-tát sơ phát tâm, liền từ chỗ ngồi, đứng dậy đảnh lễ chân Phật mà bạch rằng: - Kiếp trước, lúc đức Phật Oai Âm Vương ra đời, chúng con nhân đặng gặp Phật, nghe pháp mà xuất gia, trong ngày chúng Tăng tắm gội, con theo thứ tự vào nhà tắm, thì thoạt nhiên ngộ biết thủy trần vốn không rửa bụi trần hay không rửa bụi trần, tâm giác thường vắng lặng, không có tướng gì ... do tập quán cũ ấy nay được thành bậc vô học. Ðức Oai Âm Vương gọi tên con là Bạt Ðà Bà La, nhân diệu xúc tỏ bày sáng suốt, thành vị Phật tử trụ. Nay Phật hỏi viên thông, thì như chỗ sở chứng của con, quán xúc trần làm nhân là hơn cả.</p>
    <h4 id="luoc-giai-6" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Bạt Ðà Bà La (Hán dịch là Hiền Thủ hay Hiền Hộ) nhân quán xúc trần mà ngộ nhập viên thông. Xúc là đụng chạm, tiếp xúc. Cảnh bị biết của thân căn, hay nói cách khác là cảnh ứng hợp thân căn phát sanh, nhận biết có lạnh, nóng, trơn, nhám v.v... đều là xúc trần. Như vậy, xúc trần được phát hiện là bởi có thân căn với sắc cảnh, thiếu một không thành, xúc trần hư dối. Vả lại như khi đối trước một lò lửa, nếu kẻ rét thì có cảm xúc ấm, còn kẻ ấm thì lại có cảm xúc nóng thêm. Vậy thì chỉ tùy chúng sanh mà thành lạnh hay nóng, không có thật thể nhất định. Ðối với nước cũng vậy, khi chúng ta dùng nước tắm gội thân thể, nước chảy trên mình mà sinh ra cảm giác thế này thế khác, gọi là xúc trần. Nhưng xét nghiệm kỹ thì khi ta gọi là tắm rửa, ấy là rửa thân thể hay rửa bụi trần? Nếu nói là rửa thân thể, thì như không bụi trần lấy gì để rửa, nếu nói là rửa bụi trần, thì như nước chảy trên đất cũng gọi là tắm rửa đặng sao? Thế thì nước, bụi trần, thân thể vốn thật an nhiên, nước không phải hay rửa (năng), mà bụi trần và thân thể không phải bị rửa (sở), cho nên xúc trần chỉ là tướng giả dối, đối dãi theo vọng nghiệp chúng sanh không xúc mà hiện xúc, nên xúc trần đều là như huyễn: phi hữu, phi vô. Ngộ được như vậy mà tu hành, tức thành bậc vô học.</p>
    <h4 id="6-do-phap-tran-chung-a-la-han" class="text-lg font-semibold">6. DO PHÁP TRẦN CHỨNG A LA HÁN</h4>
    <p>Ông Ma Ha Ca Diếp và Tỳ-kheo-ni Tử Kim Quang, liền từ chỗ ngồi đứng dậy, đảnh lễ dưới chân Phật và bạch rằng: - Con nhớ kiếp trước, trong thế giới này có nhiều đức Phật ra đời hiệu Nhật Nguyệt Ðăng, con được thân cận nghe pháp tu học, sau khi Phật diệt độ thì cúng dường xá-lợi, đốt đèn nối ánh sáng, lại dùng vàng tử kim sáng chói mà thếp hình tượng của Phật. Từ đó đến nay đời đời thân con thường được đầy đặn, ánh sáng như đồng vàng tử kim, còn Tỳ-kheo-ni Tử Kim Quang này chính là quyến thuộc của con, từng đã cùng phát tâm một lúc với con. Con xem thấy thế gian sáu trần biến hoại, nên chỉ đem tâm không tịch tu hành, thành diệt tận định. Thân tâm tự tại, hay vượt qua trăm ngàn kiếp, dường như khảy móng tay. Con do quán sát pháp không tịch mà thành bậc A La Hán; đức Thế Tôn cho con là người tu hạnh đầu-đà bậc nhất. Diệu pháp mở sáng, các lậu tiêu trừ. Nay Phật hỏi viên thông, thì như chỗ sở chứng của con, quán pháp trần làm nhân là hơn cả.</p>
    <h4 id="luoc-giai-7" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Ma Ha Ca Diếp nhân quán pháp trần mà ngộ nhập viên thông. Pháp trần là tất cả ấn tượng của tiền trần: sắc, thanh, hương, vị, xúc, lưu lại trong tâm ý mà làm cảnh sở duyên cho ý thức. Tất cả cảnh giới thế gian tóm lại không ngoài sáu trần: sắc, thanh, hương, vị, xúc, pháp ấy. Những pháp đó luôn luôn biến chuyển hoặc âm thầm kín đáo, hoặc rõ rệt phô bày, chứ không niệm nào yên lặng dừng nghỉ. Vừa vị lai đã thành hiện tại, vừa hiện tại đã thành quá khứ; như vậy hãy chỉ vào đâu mà cho là có pháp thật. Chỉ vào vị lai ư? Hay chỉ vào quá khứ, hiện tại? Thật không thể chỉ vào đâu được. Pháp trần đã không thật, pháp trần là chân không, thì các món thọ tưởng, hư vọng phiền não, nương pháp trần sanh ra cũng liền tiêu diệt, phá trừ ý thức, chứng diệt tận định. Khi ấy thân tâm tự tại, đối với không gian cũng như đối với thời gian: không rời chỗ ngồi mà ở khắp mười phương, vượt trăm ngàn kiếp mà dường như trong giây phút khảy móng tay, thoát ngoài vòng chướng ngại của những sự lâu, mau, xa, gần, hạn cuộc.</p>
    <p>Sáu vị trên đây do tu sáu trần mà được chứng quả.</p>
    <h4 id="7-do-nhan-can-chung-a-la-han" class="text-lg font-semibold">7. DO NHÃN CĂN CHỨNG A LA HÁN</h4>
    <p>Ông A Na Luật Ðà liền từ chỗ ngồi đứng dậy đảnh lễ chân Phật và bạch rằng: - Con mới xuất gia thường ưa ngủ nghỉ, nên bị Như Lai quở trách là loại súc sanh. Nghe lời Phật quở, con khóc lóc tự trách, thức suốt bảy ngày không ngủ, hư cả hai mắt. Ðức Thế Tôn dạy cho con phép Tam-muội nhạo kiến chiếu minh kim cang. Con không do con mắt mà vẫn xem thấy mười phương, tánh chân rỗng suốt, như xem cái trái trong bàn tay. Như Lai ấn chứng cho con thành bậc A La Hán. Nay Phật hỏi viên thông, thì như chỗ sở chứng của con, xoay cái thấy trở về tánh nguyên, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-8" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông A Na Luật Ðà nhân tu về nhãn căn, xả bỏ sắc trần, xoay cái thấy (hư vọng) trở về kiến tinh (chân tánh) mà thành bậc vô học.</p>
    <p>Kiến tánh thường diệu thường minh, nương nơi con mắt mà phát ra cái dụng thấy sắc gọi là nhãn căn; kiến tánh vốn đã diệu minh, cho nên kiến dụng chẳng lúc nào không minh không diệu. Chúng sanh nhiều kiếp mê lầm không tự nhận biết, trở lại chấp rằng cái thấy chỉ do con mắt mà có sắc trần; hễ có sắc trần thì gọi rằng có thấy; còn không sắc trần thì gọi rằng không thấy: mở mắt là thấy, nhắm mắt là không. Ðã đem tánh thấy viên dung cùng khắp mà khuôn khổ một nơi, nên bị cách ngại, thấy không ngoài sống mũi, thấy không thấu đặng hai đời. Dẫu khi nhắm mắt, khi ngủ mê không thấy đã đành, mà khi mở mắt cũng chẳng thấy được sự thật của muôn pháp. Trong một đoạn trước, Phật gạn hỏi ông A Nan về cái thấy là tâm hay con mắt? Và Ngài đã bảo: Tâm thấy chứ không phải mắt thấy. Đây Phật chỉ cái kiến tánh này cho đến cái văn tánh, khứu tánh, v.v... cho chúng sanh rõ. Thế nên biết rằng: Có mắt không tâm, không thành có thấy; có tâm không mắt cũng thấy khắp mười phương, ấy gọi là “nhạo kiến chiếu minh”. Kiến tánh bản minh đó, xưa nay không hề lay chuyển, ấy gọi là kim cang Tam-muội.</p>
    <h4 id="8-do-ty-can-ma-chung-a-la-han" class="text-lg font-semibold">8. DO TỶ CĂN MÀ CHỨNG A LA HÁN</h4>
    <p>Ông Châu Lợi Bàn Ðặc Ca, liền từ chỗ ngồi đứng dậy đảnh lễ chân Phật và bạch rằng: - Con vì thiếu sự tụng trì, nên tánh tình ngu độn, khi mới gặp Phật, nghe pháp xuất gia, chỉ tụng trì một câu kệ của Như Lai, mà trong trăm ngày không thuộc, hễ nhớ trước thì quên sau, nhớ sau thì quên trước; Phật thương con ngu muội, dạy pháp an cư, điều hòa hơi thở ra vào; con liền quán hơi thở đến vi tế cùng tột, thấy các hạnh sanh, trụ, dị, diệt từng mỗi sát-na, mà tâm được rỗng rang tự tại không chút ngăn ngại; hết các món lậu thành A La Hán, ở dưới tòa của Phật, được ấn chứng thành vô học đạo. Nay Phật hỏi viên thông, thì như chỗ sở chứng của con, xoay hơi thở trở về tánh không, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-9" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Châu Lợi Bàn Ðặc Ca (là hai anh em, Tàu dịch là Ðại Lộ Biên và Tiểu Lộ Biên. Ðây là chỉ ông em) nhân tu tỷ căn mà chứng nhập viên thông.</p>
    <p>Kiếp xưa, ông là một vị Ðại pháp sư vì tâm bỏn xẻn Phật pháp, không muốn nói cho ai nghe, nên bị quả báo ngu mê thiếu tánh nghe nhiều, hiểu rộng. Nhân đó Phật mới dạy phương pháp nhiếp tâm là điều hòa hơi thở ra vào, đếm từ một đến trăm, từ trăm lui một; sau khi tâm định tĩnh, xét cùng tột đến tướng vi tế của hơi thở, thảy đều sanh, trụ, dị, diệt từng mỗi sát-na. Tâm chỉ chú vào hơi thở, ngoài hơi thở không riêng có sự vật gì, cũng không có tướng hơi thở nữa, bởi vì hơi thở đã từng sát-na chuyển biến, hơi thở không có thật tánh; vậy do tánh yên lặng, quán cảnh thanh tịnh, mà được rỗng rang sáng suốt.</p>
    <h4 id="9-do-thiet-can-chung-a-la-han" class="text-lg font-semibold">9. DO THIỆT CĂN CHỨNG A LA HÁN</h4>
    <p>Ông Kiều Phạm Bác Ðề, liền từ chỗ ngồi đứng dậy đảnh lễ chân Phật mà bạch rằng: - Con bị khẩu nghiệp nặng nề; trong kiếp quá khứ đã chê bai vị Sa-môn, nên đời đời mắc bệnh, miệng thường nhơi như trâu. Ðức Như Lai dạy cho pháp môn Nhất vị thanh tịnh tâm địa; con nhân đó mà tâm được tịch diệt vào tam-ma-địa, quán sát cái tánh biết vị không phải thân, cũng không phải vật; liền trong miệng ấy, vượt bỏ các lậu thế gian, bề trong giải thoát thân tâm, bề ngoài không dính mắc thế giới, xa lìa ba cõi như chim ra khỏi lồng, tiêu hết các món trần cấu, nên đặng con mắt pháp thanh tịnh, thành A La Hán. Ðức Như Lai ấn chứng cho con thành vô học đạo. Nay Phật hỏi viên thông, thì như chỗ sở chứng của con, xoay về quán sát tánh biết vị ấy là thứ nhất.</p>
    <h4 id="luoc-giai-10" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Kiều Phạm Bác Ðề (Hán dịch là Ngưu Ty) nhân tu thiệt căn mà chứng nhập viên thông. Trong một kiếp quá khứ, ông từng buông lời chê bai vị lão Tăng, nên nhiều đời mắc lấy cái tật miệng thường nhơi suông như trâu.</p>
    <p>Phật thuyết pháp lúc nào cũng tùy căn cơ, tùy tập quán của chúng sanh cả; nên Ngài đã tùy tập quán của ông, mà dạy cho pháp môn nhất vị thanh tịnh tâm địa; nghĩa là quán cái tánh biết vị khắp hiện nơi thiệt căn, vốn thường thanh tịnh không phải đối dãi giả dối, không thay đổi theo mặn, đắng, ngọt, cay, nên gọi là nhất vị. Ðã vậy, thì cái tánh chẳng phải trần nên chẳng phải vô tri, mà chẳng phải căn nên không giả dối; vì vậy, các món dục lậu, hữu lậu, vô minh lậu trong thế gian không thể ô nhiễm buộc ràng; tuy ở trong ba cõi, mà vốn xa lìa ba cõi, như chim ra khỏi lồng, thong dong tự tại, thấy biết rộng xa. Ấy gọi là Pháp nhãn thanh tịnh thành A La Hán, không còn thọ sanh trong vòng luân hồi sanh tử.</p>
    <h4 id="10-do-than-can-chung-a-la-han" class="text-lg font-semibold">10. DO THÂN CĂN CHỨNG A LA HÁN</h4>
    <p>Ông Tất Lăng Già Bà Sa liền từ chỗ ngồi đứng dậy, đầu lạy chân Phật và bạch rằng: - Lúc con mới xuất gia theo Phật nhập đạo, thường nghe đức Như Lai dạy những điều thống khổ trong thế gian; con đi khất thực trong thành, để tâm tư niệm pháp môn đó, bất giác giữa đường đạp nhằm gai độc, chân bị thương, sự đau nhức khắp cùng thân thể. Con liền nghĩ rằng: có tánh biết mới biết sự đau nhức đó. Tánh biết ấy chính là giác tâm thanh tịnh, tuy biết cái “biết đau” mà nó không phải bị đau. Con lại suy nghĩ: Nếu như vậy thì một thân lẽ nào lại có hai tánh biết? Con nhiếp niệm chưa bao lâu, thân tâm bỗng nhiên thanh tịnh; trong hai mươi mốt ngày thì các lậu tập tiêu hết, thành quả A La Hán, được Phật ấn ký, chứng bậc vô học. Nay Phật hỏi viên thông, thì như chỗ sở chứng của con, là xả bỏ thân chấp, thuần một giác tánh, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-11" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Tất Lăng Già Bà Sa (Hán dịch là Dư Tập) nhân tu thân căn mà ngộ nhập viên thông. Giác tâm thanh tịnh vốn thường bất biến, hàm dung không có năng sở, không có trong ngoài, không bị khổ vui làm lay động; chúng sinh nhân mê, khởi ra vọng tưởng phân biệt, chấp có ngoại cảnh, có nội thân, buộc tánh biết nơi thân căn làm nơi y chỉ, mà lãnh nạp các cảnh thuận nghịch giữa thế gian. Vì vậy nên không tránh khỏi các món khổ. Ông Tất Lăng Già Bà Sa nghe theo lời Phật, quán khổ đế giữa thế gian trong khi đi khất thực, bất giác chân đạp nhằm gai độc, đau buốt toàn thân, mà càng chứng rõ khổ đế một cách thống thiết. Nhân đau nhức mà phát suy nghĩ: tự mình biết mình đang đau; vậy đã có cái đau lại có cái biết đau; đau là cái biết hư vọng nơi thân căn, tùy nhân duyên ngoại cảnh mà phát hiện có năng có sở; chữ “biết đau” chính là chỉ giác tâm thanh tịnh, ra ngoài có không, dù đau hay không đau cũng không thể làm tăng giảm. Ngặt vì trong lúc tâm ngã pháp chưa tiêu, nên tướng năng sở vẫn còn hiện tiền, cần phải nhiếp niệm vậy, sau mới xả thân tâm, đoạn trừ năng sở, không thấy có cái tướng đau, không thấy cái tướng bị đau, chỉ thuần một giác tâm thanh tịnh. Lúc ấy, chứng những giác tức là giác mà mê cũng tức là giác; tánh giác hoàn toàn viên mãn không còn bị điều chi ô nhiễm.</p>
    <h4 id="11-do-y-can-ma-chung-a-la-han" class="text-lg font-semibold">11. DO Ý CĂN MÀ CHỨNG A LA HÁN</h4>
    <p>Ông Tu Bồ Đề liền từ chỗ ngồi đứng dậy, đầu lạy chân Phật và bạch rằng: - Nhiều kiếp lại đây, tâm con rỗng rang không ngại, nhớ lại kiếp thọ sanh nhiều như số cát sông Hằng, lúc còn ở trong thai liền biết muôn pháp không tịch, như thế cho đến thấy cả mười phương toàn không, và giáo hóa khiến cho chúng sanh chứng đặng không tánh. Nhờ đức Như Lai phát minh tánh chân không của bản giác, tánh “không” viên mãn sáng suốt, chứng A La Hán, liền vào biển giác không tịch sáng suốt tôn quý của Như Lai, đồng tánh tri kiến với Phật, nên được ấn chứng thành bậc vô học. Con do tánh không mà giải thoát, không ai sánh bằng. Nay Phật hỏi viên thông thì như chỗ sở chứng của con, là đem các tướng quy vào phi tướng, mà năng phi sở phi cũng diệt, xoay tánh biết nơi ý căn về không vô, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-12" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Tu Bồ Đề (Hán dịch là Không Sanh) nhân tiêu trừ ý căn mà chứng nhập viên thông. Ý căn là tánh hay hiểu biết tất cả pháp trần, hễ có pháp trần thì có ý căn, mà ý căn tiêu trừ thì pháp trần không tịch. Pháp pháp đều không tịch cả, dù sắc uẩn, thọ uẩn, tưởng uẩn, hành uẩn tất cả đều không; ở trong thân tâm chánh báo không, ở ngoài thế giới y báo cũng không, nên tâm đặng tự tại không bị năm uẩn ngăn che, không bị cái hôn mê cách ấm, khi ở trong thai cũng như ra khỏi thai, chỉ là tùy tưởng thọ sanh mà vẫn không bị sắc thân chướng cách. Tuy vậy, mặc dù ngộ được không lý, nhưng chưa ngộ tánh chân như của Như Lai tạng là tức nơi không mà tùy duyên hiện hữu, tức nơi diệt hữu mà vốn không, cái không ấy mới thật là cái tánh chân không của đệ nhất nghĩa, của nhất chân pháp giới; vậy nên nhất thời đốn ngộ tánh chân không, ấy tức đồng một tánh thấy biết cùng khắp như chư Phật, không có sai khác.</p>
    <p>Năm vị trên đây do tu năm căn mà chứng đạo quả.</p>
    <h4 id="12-do-nhan-thuc-ma-chung-a-la-han" class="text-lg font-semibold">12. DO NHÃN THỨC MÀ CHỨNG A LA HÁN</h4>
    <p>Ông Xá Lợi Phất liền từ chỗ ngồi đứng dậy, đảnh lễ chân Phật và bạch rằng: - Con nhiều kiếp lại đây, tâm thấy rất thanh tịnh, như vậy trong nhiều đời thọ sanh như số cát sông Hằng, mà đối với các pháp biến hóa của thế gian, xuất thế gian, hễ một phen thấy liền thông suốt không bị ngăn ngại. Một hôm, nhân ở giữa đường con gặp đặng hai anh em ông Ca Diếp Ba cùng đi với nhau, tuyên nói kệ nhân duyên mà ngộ biết tự tâm vốn không ngằn mé. Con theo Phật đi xuất gia, tánh thấy biết viên mãn sáng suốt, được sức vô úy thành A La Hán làm trưởng tử của Phật, từ miệng Phật mà có, do pháp Phật mà hóa sanh. Nay Phật hỏi viên thông, thì như chỗ sở chứng của con là do tâm thấy pháp sáng, sáng cùng tột các pháp sở tri, sở kiến, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-13" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Xá Lợi Phất (Hán dịch là Thu Tử) do tu nhãn thức mà chứng nhập viên thông. Do nhãn thức thanh tịnh nên tất cả pháp tướng của thế gian đều thấy thông suốt cả; nhận thấy thông suốt các pháp biến hóa ấy nên đến khi nghe thấy bài kệ nhân duyên, liền ngộ đặng thật tướng trung đạo, ngộ Tạng tâm cùng khắp pháp giới, không phải lớn nhỏ, không có ngằn mé trong ngoài. Bài kệ nhân duyên theo Ðại thừa nghĩa là:</p>
    <p>“Các pháp nhân duyên sanh Tôi nói nó là không Gọi nó là giả danh Cũng gọi nghĩa trung đạo”</p>
    <p>(Nhân duyên sở sanh pháp, ngã thuyết tức thị không, diệc danh thị giả danh, diệc danh trung đạo nghĩa). Các pháp do nhân duyên hòa hiệp sanh, không có thật tánh tức là không; tuy không nhưng đã tùy vọng nghiệp cơ cảm của chúng sanh, chẳng phải không có giả tướng phát hiện; ngoài giả không thể có không, ngoài không không thể có giả, không và giả không hai, ấy tức là thật tướng trung đạo của các pháp. Ðã ngộ lý trung đạo tức là ngộ được Tạng tâm tùy duyên bất biến, bất biến tùy duyên, không phải giả, không phải không, nhưng không chỗ nào không có, không pháp nào không do Tạng tâm, tùy duyên biến hiện, mà thấy biết cùng tận tất cả pháp không chút ngăn che sợ hãi.</p>
    <h4 id="13-do-nhi-thuc-ma-chung-bo-tat" class="text-lg font-semibold">13. DO NHĨ THỨC MÀ CHỨNG BỒ TÁT</h4>
    <p>Ông Phổ Hiền Bồ-tát liền từ chỗ ngồi đứng dậy, đảnh lễ chân Phật và bạch rằng: - Con đã từng làm vị Pháp vương tử với hằng sa đức Như Lai. Mười phương các đức Như Lai mỗi khi dạy hàng đệ tử có căn cơ Bồ-tát, tu hạnh Phổ Hiền, thảy đều lấy tên con mà đặt tên. Bạch Thế Tôn! Con dùng tâm mà nghe và phân biệt mọi niệm lự, tri kiến của chúng sanh; nếu ở phương nào khác, ngoài hằng sa cõi nước, có một chúng sanh phát tâm tu niệm hạnh Phổ Hiền, thì trong khi ấy, con liền cưỡi voi trắng sáu ngà, phân hóa trăm ngàn thân đến khắp các nơi ấy; dầu cho chúng sanh đó nghiệp chướng sâu dày không thể thấy con, thì con nhân trong khi tối tăm lấy tay rờ đầu, gia hộ an ủi khiến đặng thành công đức. Nay Phật hỏi viên thông, như bổn nhân chứng ngộ của con, là phát minh tánh nghe, phân biệt tự tại, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-14" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Phổ Hiền Bồ-tát (hạnh độ sanh cùng pháp giới là Phổ, gần địa vị cực thánh là Hiền) nhân tu nhĩ thức mà chứng nhập viên thông. Phổ Hiền có ba vị khác nhau:</p>
    <h4 id="14-do-ty-thuc-ma-chung-a-la-han" class="text-lg font-semibold">14. DO TỶ THỨC MÀ CHỨNG A LA HÁN</h4>
    <p>Ông Tôn Ðà La Nan Ðà liền từ chỗ ngồi đứng dậy, đảnh lễ chân Phật và bạch rằng: - Con lúc đầu xuất gia theo Phật nhập đạo, tuy đối với giới luật (giới) giữ gìn đầy đủ, mà đối với pháp Tam-ma-địa (định) thì tâm thường loạn động, nên chưa thành vô lậu. Ðức Thế Tôn dạy con cùng ông Câu Thi La quán tướng trắng trên chót sống mũi. Lúc đầu quán kỹ, trải qua 21 ngày thấy hơi trong mũi ra vào như khói, thân tâm thế giới trong ngoài rỗng suốt, khắp đều trong sạch như ngọc lưu ly. Rồi dần dần tướng khói tiêu tan mà hơi thở lại biến thành sắc trắng, tâm đặng khai ngộ; các lậu tiêu trừ, hơi thở ra vào hóa thành ánh quang minh, soi cùng mười phương thế giới, chứng quả A La Hán. Ðức Thế Tôn thọ ký cho con, tương lai chứng đặng Bồ-đề. Nay Phật hỏi viên thông, con do tiêu trừ hơi thở; hơi thở tiêu nên tâm phát sáng, sáng càng viên mãn, các lậu dứt trừ, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-15" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Tôn Ðà La Nan Ðà nhân tu về tỷ thức mà ngộ nhập viên thông; trên đường tu hành chân chánh đến kết quả vô thượng Bồ-đề là phải đủ ba điều kiện cần yếu: giới luật, thiền định và trí tuệ. Giới để ngăn ngừa tội lỗi, Định để dồn dẹp vọng tưởng tán loạn, Huệ để phá vô minh thấu rõ thật lý. Bởi vậy mặc dầu giữ gìn giới luật hoàn toàn mà tâm thiếu thiền quán, bị tán loạn, thì bao nhiêu hoặc lậu vô minh vẫn còn tương tục ngăn che thành quả vô lậu. Thiền quán cốt tại buộc tâm vào một chỗ hay một pháp môn để quán sát. Như Phật dạy ông Tôn Ðà La Nan Ðà cùng Câu Thi La chuyên tâm quán tướng trắng đầu chót sống mũi; hễ quán tâm lần sâu xa, thì cảnh sở quán lần thanh tịnh, nên thấy hơi thở có khi như hơi khói, có khi thành trắng đến khi hóa ra ánh sáng, đều do quán tâm sâu cạn mà ra cả. Cảnh sở quán đã sáng suốt, tâm năng quán cũng viên minh, thì thân tâm thế giới mười phương, thảy đều trong suốt như chất lưu ly, không nhơ bợn, không ngăn cách, ấy là dứt nhân sanh tử, được Phật thọ ký chứng quả Bồ-đề.</p>
    <h4 id="15-do-thiet-thuc-ma-chung-a-la-han" class="text-lg font-semibold">15. DO THIỆT THỨC MÀ CHỨNG A LA HÁN</h4>
    <p>Ông Phú Lâu Na Di Ða La Ni Tử, liền từ chỗ ngồi đứng dậy, đảnh lễ chân Phật và bạch rằng: - Con từ nhiều kiếp lại đây, biện tài vô ngại, tuyên nói các pháp khổ, không, đạt cùng thật tướng; như vậy cho đến tất cả pháp môn bí mật của hằng sa Như Lai, con đều đem giải bày rất rõ ràng, vi diệu ra giữa đại chúng không chút sợ sệt. Ðức Thế Tôn biết con có tài hùng biện, nên dùng âm thanh tuyên nói pháp luân dạy con đem ra truyền bá. Con ở trước Phật dùng tiếng thuyết pháp như sư tử rống, để giúp Phật chuyển pháp luân, đặng thành A La Hán. Ðức Thế Tôn ấn chứng con là người thuyết pháp không ai bằng. Nay Phật hỏi viên thông, con do pháp âm, hàng phục lũ ma oán, tiêu diệt các lậu, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-16" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Phú Lâu Na Di Ða La Ni Tử, nhân tu thiệt thức mà ngộ nhập viên thông. Thiệt thức có công năng biết vị và thuyết pháp. Phật vì muốn cứu chúng sanh khỏi vòng điên đảo, chấp mọi sự vật là thường, là lạc, là ngã, là tịnh, nên truyền dạy pháp vô thường, khổ, vô ngã, bất tịnh. Nhân đó mà hàng Nhị thừa giải thoát phần đoạn sanh tử, chứng Vô dư y Niết-bàn và đem giáo hóa dẫn đạo chúng sanh. Thật ra trong khi Phật dạy lý vô thường, khổ, bốn điều ấy nhận thấu thật tướng, bình đẳng thường, lạc, ngã, tịnh của tất cả các pháp. Vì thật tướng ấy mới là pháp môn bí mật của hằng sa đức Như Lai, là chỗ muốn chỉ cho âm thanh luân của Phật tuyên nói khổ không, để điều nhiếp chúng sanh, hàng phục ma ngoại.</p>
    <h4 id="16-do-than-thuc-ma-chung-a-la-han" class="text-lg font-semibold">16. DO THÂN THỨC MÀ CHỨNG A LA HÁN</h4>
    <p>Ông Ưu Ba Ly liền từ chỗ ngồi đứng dậy đảnh lễ chân Phật mà bạch rằng: - Con thân hành theo Phật, thấy Ngài vượt thành xuất gia, chính con quán thấy đức Như Lai, 6 năm tu khổ hạnh, hàng phục loài ma, uốn dẹp ngoại đạo, giải thoát các tham dục thế gian; lại được thừa lãnh giáo giới của Phật chế; như thế cho đến 3000 oai nghi, 80000 hạnh vi tế, nào tánh nghiệp, nào giá nghiệp, con đều gìn giữ thanh tịnh, thân tâm vắng lặng, thành bậc A La Hán. Con là giềng mối trong chúng đệ tử của Như Lai. Phật ấn chứng tâm con, giữ giới tu thân, chúng suy tôn là bậc thượng thủ. Nay Phật hỏi viên thông thì con trước do chấp giữ thân, thân đặng tự tại; sau lại do chấp giữ tâm, tâm đặng thông suốt. Vậy sau tất cả thân tâm thảy đều thông lợi, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-17" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Ưu Ba Ly nhân tu thân thức mà ngộ nhập viên thông. Ông là một người hầu cận của Phật trong khi Ngài còn làm Thái tử, nên thấy rõ hành động của Phật khi xuất gia, khi tu khổ hạnh cho đến khi thuyết phục tà ma, thành đạo quả và thiết chế giới luật, lại là vị đệ tử trì luật thứ nhất, lãnh thọ giới luật, thanh tịnh tu trì. Nào những điều thể tánh vốn ác như sát, đạo, dâm, vọng, gọi là tánh nghiệp; những điều thể tánh tuy không ác nhưng vì hay mở đường tội lỗi như rượu v.v... mà Phật chế ngăn gọi là giá nghiệp, cho đến 3000 oai nghi (250 giới đều có 4 cử động là đi, đứng, ngồi, nằm, 250x4 = 1000; 1000 đối với 3 tụ giới thành ra 3000). 84000 tế hạnh (3000 oai nghi đem phối với bảy chi: sát, đạo, dâm, lưỡng thiệt, vọng ngôn, ác khẩu, ỷ ngữ, thành 21000; lại phối với 4 phần phiền não là đa tham, đa sân, đa si, tham si đồng phần, thành ra 84000) thảy đều giữ gìn, không giới nào khuyết phạm, thân thường ở trong giới, toàn thân tức là giới, khi giới đã thanh tịnh, thì thân ấy là thân tịch diệt, mà tâm ấy là tâm chân thường diệu giác, mặc dù ở trong thế gian uế ác mà không bao giờ ô nhiễm như diệu liên hoa vậy.</p>
    <h4 id="17-do-y-thuc-ma-chung-a-la-han" class="text-lg font-semibold">17. DO Ý THỨC MÀ CHỨNG A LA HÁN</h4>
    <p>Ông Ðại Mục Kiền Liên liền từ chỗ ngồi đứng dậy, đảnh lễ chân Phật và bạch rằng: - Lúc trước con đi khất thực, giữa đường gặp ba anh em ông Ca Diếp Ba, là ông Ưu Lầu Tần Loa, ông Già Da và ông Na Đề tuyên nói nghĩa nhân duyên sâu xa của Như Lai; con liền phát tâm, thấu suốt rộng lớn, đức Như Lai cho con mặc y cà-sa, râu tóc con tự rụng hết. Con dạo đi cùng mười phương, không bị ngăn ngại, phát minh thần thông, được chúng suy tôn con là hơn hết và thành A La Hán. Đâu chỉ một mình Thế Tôn, mà mười phương Như Lai cũng đều khen thần lực con, tròn sáng thanh tịnh, tự tại không e sợ. Nay Phật hỏi viên thông, con xoay ý thức về tánh viên trạm, tam quang mở bày, ví như lắng dòng nước đục, lâu ngày thành trong suốt, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-18" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Ðại Mục Kiền Liên nhân tu ý thức mà ngộ nhập viên thông. Sau khi nghe ba anh em ông Ca Diếp Ba nói lý nhân duyên của Phật, liền ngộ đặng nhân duyên thâm nghĩa, không phải như nghĩa thông thường nói các pháp có ra là do nhiều cái họp lại; hơn nữa các pháp nhân duyên sanh tức không thật có, tức là như huyễn, tức là trung đạo thật tướng; chính nơi các pháp đối dãi sanh diệt. Vậy nên dầu gần dầu xa, dầu lớn dầu nhỏ, không còn chút gì ngăn ngại, xứng hợp thật tướng, phát hiện thần thông để độ chúng sanh và phụng thờ chư Phật. Vì được như vậy nên ông Mục Kiền Liên mới được gọi là thần thông bậc nhất.</p>
    <p>Sáu vị trên đây là do tu sáu thức mà được viên thông.</p>
    <h4 id="18-do-lua-ma-chung-a-la-han" class="text-lg font-semibold">18. DO LỬA MÀ CHỨNG A LA HÁN</h4>
    <p>Ông Ô Sô Sắc Ma ở trước Như Lai chắp tay cúi đầu đảnh lễ chân Phật và bạch rằng: - Con thường nhớ lại nhiều kiếp xa xôi về trước, tánh nhiều tham dục. Có đức Phật ra đời hiệu là Không Vương. Ngài dạy: người nhiều dâm tánh là thành đống lửa hãi hùng, lại dạy con quán khắp 100 hài 4 vóc, các khí lạnh, nóng và tinh thần bề trong mà được ngưng tịnh, hóa tâm đa dâm thành ra lửa trí huệ. Từ đó chư Phật đều gọi con là Hỏa Đầu. Con do sức hỏa quang tam-muội mà thành A La Hán, tâm phát nguyện lớn: “Hễ chư Phật thành đạo thì con làm người lực sĩ hầu cận, uốn dẹp lũ ma oán”. Nay Phật hỏi viên thông, con do quán sát cái xúc nóng nơi thân tâm, rỗng suốt không ngại, các lậu tiêu trừ, phát sanh lửa trí huệ lớn báu, lên bậc vô thượng giác, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-19" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Ô Sô Sắc Ma nhân tu về Hỏa đại mà ngộ nhập viên thông. Chỉ vì còn vọng tưởng nên còn tánh tham dâm; do tánh tham dâm mới kết thành lửa nghiệp hừng hực đốt cháy thân tâm, lu mờ ánh sáng trí huệ. Nhưng vọng tưởng chỉ là tâm, tham dâm chỉ là tâm, mà trí huệ cũng chỉ là tâm; nếu tâm vọng tưởng tham dâm ngừng tiêu, thì lửa trí huệ phát hiện. Ông Ô Sô Sắc Ma vốn người nhiều dâm dục; sau khi nghe đức Phật Không Vương dạy cho biết người đa dâm biến thành đống lửa dữ, mới chuyên tâm quán sát toàn thân tứ đại vốn không chủ tể; 100 hài và 4 vóc, khi lạnh khi nóng v.v.. đều thuộc về tứ đại; tâm đa dâm vốn không tự tánh, tất cả đều do vọng tưởng mà ra; bởi tạng tâm tùy duyên biến hiện, ngộ được tất cả vô tánh, tức thành định lực hỏa quang tam-muội đốt cháy hết thảy thế gian và oán ma sanh tử.</p>
    <h4 id="19-do-dat-ma-duoc-chung-bo-tat" class="text-lg font-semibold">19. DO ÐẤT MÀ ÐƯỢC CHỨNG BỒ TÁT</h4>
    <p>Ông Trì Ðịa Bồ-tát liền từ chỗ ngồi đứng dậy, đảnh lễ chân Phật và bạch rằng: - Con nhớ kiếp xưa thuở đức Phổ Quang Như Lai hiện thân ra đời. Con làm thầy Tỳ-kheo thường đi đến các nẻo đường, bến đò, ruộng đất hiểm trở, hoặc làm cầu cống, hoặc gánh cát, đất, siêng năng khổ nhọc như vậy, trải qua vô lượng đức Phật ra đời. Hoặc có chúng sanh ở chỗ chợ búa, cần người chuyển vật, con vì họ trước hơn ai cả, chuyển đi đến nơi tận chỗ để đổ vật xuống, liền đi ngay, chứ không nhận lấy tiền thuê. Trong khoảng đức Phật Tỳ Xá Phù ra đời, ở thế gian, phần nhiều bị đói thiếu, con làm người chuyên chở không kể gần xa, chỉ lấy tiền thuê một tiền; nếu có xe trâu mắc phải bùn lầy thì con đem sức lực vì chúng đẩy xe, cứu vớt sự khổ não. Vị quốc vương thuở ấy, mời Phật thết trai cúng dường; bấy giờ con sửa sang đất đai bằng phẳng chờ Phật đi qua. Ðức Tỳ Xá Như Lai khi đi ngang qua, xoa đầu con và bảo: “Hãy bình tâm địa thì thế giới đại địa cả đều bình”. Tâm con liền đặng mở mang, thấy rõ vi trần tạo thành ra thế giới, bình đẳng không khác; tự tánh của vi trần không chạm lẫn nhau, cho đến đao binh cũng chẳng hề đụng chạm; trong các pháp tự tánh, ngộ được vô sanh nhẫn, thành bậc A La Hán. Xoay tâm tiểu thừa này vào trong vị Bồ-tát, nghe các Như Lai nói chỗ tri kiến Phật như Diệu Liên Hoa; con đặng chứng tỏ lần đầu tiên mà làm vị thượng chủ. Nay Phật hỏi viên thông, con do chỗ đế quán hai thứ vi trần của căn thân và thế giới bình đẳng như nhau, vốn từ Như Lai tạng hư vọng phát sinh trần cấu, trần cấu tiêu rồi thì trí viên mãn, thành Bồ-tát, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-20" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ngài Trì Ðịa Bồ-tát nhân nơi địa đại mà chứng ngộ viên thông. Phàm những vị hướng cầu Bồ-đề mà tu Bồ-tát hạnh, thường xem việc lợi tha làm trọng, lợi kỷ làm khinh, lắm khi vì xả kỷ để mà lợi nhân cũng không tiếc. Nhưng phương tiện thực hành Bồ-tát hạnh sai khác nhau, có vị dùng lời nói dịu dàng thuyết pháp để lợi ích chúng sanh, có vị đem tiền tài của cải bố thí để lợi ích chúng sanh v..v... còn như ngài Trì Ðịa thì thường đem thân lực mạnh khỏe mà giúp ích nhiếp hóa chúng sanh; từ kiếp đức Phật Phổ Quang xuất thế, mãi về sau vô lượng kiếp Ngài thường đi qua các nẻo đường, bến đò, và bất cứ nơi nào hiểm trở lầy lội, phương ngại người đi, ngài đều ra công tự gánh đất cát sửa sang bằng phẳng, xây dựng cầu cống hoặc gánh gồng mang chở vật nặng giúp người về tận nơi chỗ mà không lấy tiền thuê, cho đến đẩy giùm xe trâu bùn lầy tự đi không nổi v.v... Sau nhân gặp đức Tỳ Xá Như Lai dạy một câu rằng: “Nên bình tâm địa thì đại địa thế giới tất cả đều bình”. Tâm liền khai ngộ, Ngài chứng quả vô sanh. Câu ấy nghĩa là tất cả đại địa vi trần từ trong thân đến ngoài thế giới đều giả dối, không có tự tánh, chỉ do nhất tâm biến hiện. Chúng sanh vì mê không ngộ cảnh sở hiện ấy toàn là duy tâm, vốn không trong ngoài, năng sở cao thấp, mà lại phân chia có trong ngoài, năng sở cao thấp, nên mới thấy tướng bất bình; nếu gạt bỏ hết các vọng tưởng đảo điên, mà bình được tâm địa nơi mình thì đại địa ở ngoài thế giới tự nhiên bằng phẳng, xem thấy các vi trần hiệp thành nơi thân, vi trần hiệp thành ngoại giới vốn đồng một tâm, tâm đồng một tánh, bình đẳng như như, không ngăn ngại nhau thì dù dao cắt vào thân thể như rạch vào hư không; vi trần không diệt cũng như băng tiêu tức thành nước, chỉ băng diệt chứ không bị mất. Pháp tánh vốn tự viên dung, chẳng có gì thêm, bớt, sanh, diệt. Nếu ngộ pháp tánh ấy tức là nhập chỗ tri kiến của Phật.</p>
    <h4 id="20-do-nuoc-ma-duoc-chung-bo-tat" class="text-lg font-semibold">20. DO NƯỚC MÀ ÐƯỢC CHỨNG BỒ TÁT</h4>
    <p>Ông Nguyệt Quang Ðồng tử liền từ chỗ ngồi đứng dậy đảnh lễ dưới chân Phật và bạch rằng: - Con nhớ hằng hà sa số kiếp về trước, có đức Phật ra đời hiệu là Thủy Thiên, dạy các vị Bồ-tát tu phép quán nước, chứng nhập chánh định. Quán nước ở trong thân, tánh nó không cướp đoạt nhau. Đầu tiên quán từ nước miếng, rồi đến mồ hôi, tinh huyết, đại tiện, tiểu tiện xoay vần trong thân mà vẫn đồng một tánh nước. Quán thấy nước ở trong thân cùng nước biển hương thủy nơi cõi phù tràng vương ngoài thế giới bình đẳng không sai khác. Lúc con mới thành pháp quán nước, thì chỉ trông thấy nước mà chưa được không thân (nghĩa còn chấp có thân này). Đang lúc còn làm Tỳ-kheo yên lặng tu thiền ở trong nhà, thì có người đệ tử từ nơi cửa sổ ngó vào, chỉ thấy nước trong khắp đầy cả nhà, không thấy gì khác, nó trẻ dại không biết, liền lấy một viên ngói quăng vào trong nước quấy nước lên tiếng, ngó quanh quẩn rồi bỏ đi; sau khi con xuất định, liền cảm nghe đau bụng, giống như ông Xá Lợi Phất gặp phải nạn quỷ vi hại. Con tự suy nghĩ: Nay ta đã được quả A La Hán, khỏi bệnh duyên lâu ngày, vì sao nay bỗng phát sinh đau bụng, chừng bị thối thất chăng! Bấy giờ đứa nhỏ thẳng đến trước con, nói lại việc như trên; con liền bảo: “Hễ ngươi trông thấy nước lại, thì nên liền mở cửa vào lượm viên ngói quăng đi”. Đứa nhỏ vâng lời, lúc sau con nhập định, nó trở lại thấy nước và viên ngói rõ ràng, liền mở cửa lượm ra. Đến khi con xuất định, thần thể lại y như cũ. Gặp vô lượng Phật, như vậy đến đời đức Sơn Hải Tự Tại Thông Vương Như Lai, con được vong thân, thân cùng nước biển hương thủy khắp mười phương hiệp một tánh chân không, không hai không khác. Ngày nay đối trước Như Lai được danh hiệu Đồng Chân, dự hội Bồ-tát. Nay Phật hỏi viên thông con do thủy tánh, một vị lưu thông, chứng được phép vô sanh nhẫn, viên mãn đạo Bồ-đề, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-21" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Nguyệt Quang đồng tử nhân quán thủy đại mà ngộ nhập viên thông. Thủy đại là chỉ tất cả nước trong biển cả, nước lưu hành trong thân v.v.. tuy thấy in tuồng có trong có ngoài, mà vốn dung thông. Quán thủy đại dung thông cùng khắp thế giới, không chỗ nào không phải nước, toàn một tướng nước mà thôi, thì tâm phân biệt tiêu diệt, chân trí vô phân biệt hiện ra. Nhưng đây ông Nguyệt Quang lúc đầu vì chưa chứng được chân tự tánh; tánh thủy tức là chân không, tánh thân tức là chân không, tất cả đều chân, tất cả đều không; nên ông thấy còn có thân, còn đem thân nhập định, dụng tâm quán nước, chứ chưa phải tâm tức là định, định tức là tâm, tâm tức là nước, nước tức là tâm. Vậy nên khi nhập định quán nước, có tướng nước hiện tiền, đứa đồng tử thấy nước quăng ngói vào trong, đến khi xuất định tướng nước không còn, lại nghe tâm đau; về sau gặp đời đức Sơn Hải Tự Tại Thông Vương xuất thế mới được vong thân; thân đã vong, pháp cũng diệt, thì cùng mười phương đồng một tánh thủy chân không, không hai không khác, chẳng nhập định xuất định, mà tự nhiên chứng được vô sanh pháp nhẫn.</p>
    <h4 id="21-do-gio-ma-chung-thanh-qua" class="text-lg font-semibold">21. DO GIÓ MÀ CHỨNG THÁNH QUẢ</h4>
    <p>Ông Lưu Ly Quang Pháp vương tử, liền từ chỗ ngồi đứng dậy, đảnh lễ chân Phật và bạch rằng: - Con còn nhớ trải qua hằng hà sa số kiếp trước, có đức Phật ra đời hiệu Vô Lượng Thanh, khai thị tánh Bản giác diệu minh cho các hàng Bồ-tát, quán thế giới này và các thân chúng sanh, đều bởi sức gió nhân duyên hư vọng chuyển biến ra. Lúc bấy giờ con quán cõi nước đứng yên, quán thời gian qua lại, quán thân phần đi đứng, quán tâm niệm động lay, tất cả các thứ động không hai, như nhau không sai khác.</p>
    <p>Con hiểu biết rằng tánh của các món động ấy, đến thì không có chỗ ban đầu, đi không nơi cùng tột; chúng sanh điên đảo số như vi trần trong mười phương, đều đồng một tánh hư vọng cả. Như vậy cho đến những loại chúng sanh ở trong một Tam thiên đại thiên thế giới, chẳng khác nào trong một cái đồ chứa hàng trăm mòng muỗi vo vo loạn lạc, ở trong phân tấc nổi sanh cuồng náo, gặp Phật chưa bao lâu mà chứng vô sanh nhẫn; bấy giờ tâm địa mở mang, trông thấy phương đông cõi Phật Bất Động, làm con đấng Pháp vương (Phật), kính thờ mười phương Phật, thân tâm phát sáng, rỗng suốt không ngăn ngại. Nay Phật hỏi viên thông, con do quán sát phong lực giả dối không chỗ nương, ngộ tâm Bồ-đề chứng nhập tam-ma-địa, hiệp với mười phương Phật, toàn một diệu giác tâm, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-22" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ông Lưu Ly Quang pháp vương tử do phong đại mà ngộ nhập viên thông. Tánh bản giác diệu minh thường không dao động, nhân xem thấy sự chuyển lay gọi là phong đại hay phong lực. Ông Lưu Ly Quang thường quán tất cả thân tâm thế giới đều nhân phong lực chuyển biến, nào sự thành lập phương cõi, sự qua lại của thời gian; sự động chỉ nơi thân, sự động niệm nơi tâm, thảy đều không tự tánh, đều do sức gió hư vọng phát sanh, không thật có đến có đi, hay có sanh diệt; chúng sanh không nhận biết, chỉ do một tánh hư vọng như thế, nên cuộc chấp nơi thân phần bé nhỏ, thân lại ràng buộc vào thế giới; rồi tự chịu lấy sự sanh tử luân hồi rất là đảo điên oan uổng; không khác nào trăm ngàn con mòng muỗi vô tri ở trong đồ hẹp bé gang tấc, tự kêu la inh ỏi, dao động lăng xăng, mà thật ra gió hư vọng không chỗ nương, chỉ nương Bồ-đề bản giác. Như sóng nổi từ nước, hễ gió hư vọng tiêu, tức Bồ-đề hiển lộ thông suốt không ngại. Mười phương chư Phật đều lấy cái đó làm tâm; hết thảy chúng sanh cũng lấy đó làm tâm, chỉ một điệu tâm vô nhị ấy; nhưng mà chứng nhập được là phải diệt hết mê lầm.</p>
    <h4 id="22-do-hu-khong-ma-chung-bo-tat" class="text-lg font-semibold">22. DO HƯ KHÔNG MÀ CHỨNG BỒ TÁT</h4>
    <p>Ông Hư Không Tạng Bồ-tát liền từ chỗ ngồi đứng dậy, đảnh lễ chân Phật và bạch rằng: - Con với đức Như Lai cùng ở thời đức Phật Định Quang (Phật Nhiên Đăng) chứng được vô biên thân, lúc ấy tay cầm 4 viên bảo châu lớn, chiếu sáng mười phương cõi Phật số như vi trần, đều hóa thành hư không. Lại nơi tự tâm hiện ra cái gương tròn lớn, từ gương phóng ra mười ánh sáng vi diệu quý báu; trong ánh sáng lưu xuất mười phương các cõi nước khắp hư không, rồi trở lại vào trong gương và lần vào thân con. Thân đồng như hư không, chẳng còn sợ ngăn ngại, nên có thể khéo léo hiện thân vào các quốc độ số như vi trần, rộng làm Phật sự, được công đức tùy thuận rộng lớn.</p>
    <p>Đạt thần lực như thế ấy là con chín chắn quán sát tứ đại không chỗ nương, sanh diệt theo vọng tưởng; hư không không hai và cõi Phật vốn đồng, phát minh tới chỗ đồng, chứng đặng vô sanh nhẫn. Nay Phật hỏi viên thông, con do quán sát hư không không ngằn, ngộ nhập Tam-ma-địa, diệu lực viên mãn sáng suốt, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-23" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ngài Hư Không Tạng Bồ-tát nhân tu không đại mà chứng nhập viên thông.</p>
    <p>Quán sát 4 món đại là giả dối, như huyễn đều do vọng tưởng của chúng sanh phát hiện; mà vọng tưởng không có thiệt tánh, y nơi nhất tâm; khi đã ngộ lý duy tâm triệt để thì cả 4 đại sắc không, bản lai bình đẳng như hư không. Như bài kệ nói:</p>
    <p>Hư không chẳng phải cao, thấp cũng không thể có; các pháp cũng như vậy, tánh vốn không cao thấp. Bồ-tát Hư Không Tạng, đặng kho tàng hư không. Đầy đủ cho hữu tình, thức ấy không cùng tận.</p>
    <p>Đem thức tâm hư không vô tận ấy mà ấn nhập tất cả pháp, thì pháp nào cũng vô tận, toàn tâm là sắc, vậy nên tất cả pháp đều duy tâm sở hiện duy tâm không có trong ngoài.</p>
    <p>Trong bài này, ngọc châu là tiêu biểu sắc pháp, gương sáng là tiêu biểu tâm pháp. Toàn sắc là tâm không phân chia chủ bạn, nên hay soi chiếu mười phương vi trần cõi Phật hóa thành hư không. Toàn tâm là sắc, không phải xa rời nơi bản tế. Nên hay phóng quang hiện phương cõi, đều vào trong gương, trong thân không chút nào ngăn ngại; chính nơi thân mà hiện độ, nơi độ mà hiện thân, để hoằng pháp độ sanh, tiếp nối Phật chủng mà không bao giờ trái với tánh bình đẳng thanh tịnh của pháp thân, nên gọi là đức tùy thuận rộng lớn.</p>
    <h4 id="23-do-thuc-dai-ma-chung-thanh-qua" class="text-lg font-semibold">23. DO THỨC ĐẠI MÀ CHỨNG THÁNH QUẢ</h4>
    <p>Ngài Di Lặc Bồ-tát, liền từ chỗ ngồi đứng dậy, đảnh lễ chân Phật và bạch rằng:</p>
    <p>Con nhớ trải qua vi trần số kiếp về trước, có đức Phật ra đời là Nhật Nguyệt Đăng Minh. Từ đức Phật ấy, con được xuất gia, nhưng tâm con còn nặng nề thế danh, ưa giao du với các dòng quyền quý. Lúc ấy đức Thế Tôn dạy con tu tập pháp định duy tâm thức mà ngộ nhập Tam-ma-địa. Nhều kiếp lại đây, do sức Tam-muội ấy, con kính thờ hằng hà sa số Phật và tâm ham chuộng thế danh kia nay đã hết. Đến kiếp đức Phật Nhiên Đăng ra đời, con mới được chứng pháp vô thượng diệu viên thức tâm tam muội, thấy khắp hư không các cõi nước dù uế, tịnh, có, không, thảy đều do tâm thức con biến hóa hiện ra. Bạch Thế Tôn! Bởi con liễu chứng duy tâm thức tánh như vậy, từ thức tánh xuất hiện vô lượng Như Lai, nên nay đặng Phật thọ ký sẽ bổ xứ làm Phật. Nay Phật hỏi viên thông, con do chín chắn quán sát mười phương đều là duy thức, thức tâm viên mãn sáng suốt, chứng nhập tánh viên thành thật, xa lìa tánh y tha và biến kế chấp, ngộ vô sanh nhẫn, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-24" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đức Di Lặc Bồ-tát nhân tu duy thức mà ngộ viên thông.</p>
    <p>Ngộ tất cả vạn pháp đều do nơi thức biến hiện thì cảnh nào cũng là tánh cảnh, cũng là tánh viên thành thật. Không ngộ tất cả vạn pháp do nơi thức biến hiện, in tuồng sanh mà không thật sanh, in tuồng diệt mà không thật diệt; nếu chấp thiệt có sanh diệt, thành pháp y tha. Các pháp do y tha (nhân duyên) sanh khởi mà không nhận là y tha, lại so đo sai lầm, chấp có ngã, ngã sở, cho nên thường bị danh tướng thế gian ràng buộc. Tâm còn ham chuộng thế danh, vì còn cho thế gian là thiệt. Trái lại, sau khi ngài Di Lặc tu tập phép duy tâm, duy thức, quán sát tất cả danh là giả, tất cả tưởng là giả, không vì duyên gì còn làm sanh trưởng tâm ham mê danh vị được nữa. Lần lần chứng được vô thượng diệu viên thức tâm tam muội (chơn duy thức tánh) chẳng những không thấy thiệt có tướng duy thức; vì mười phương Như Lai, quốc độ, sắc không v.v... đều không món nào ra ngoài thức tánh ấy mà tự có. Các pháp đã là thức tánh, thì pháp pháp đều là tự tánh viên mãn, thành tựu chân thật, nơi tánh viên thành, sanh vốn vô sanh. Cho nên xa lìa y tha như huyễn, nơi tánh viên thành không thiệt có ngã và ngã sở, xa lìa biến kế sai lầm, chứng pháp vô sanh nhẫn.</p>
    <h4 id="24-do-kien-dai-ma-chung-thanh-qua" class="text-lg font-semibold">24. DO KIẾN ĐẠI MÀ CHỨNG THÁNH QUẢ</h4>
    <p>Ngài Đại Thế Chí pháp vương tử cùng các Bồ-tát đồng hàng là năm mươi hai vị, liền từ chỗ ngồi, đảnh lễ chân Phật và bạch rằng: - Con nhớ hằng sa số kiếp trước, có đức Phật ra đời hiệu Vô Lượng Quang. Nội trong một kiếp ấy, mười hai đấng Như Lai kế nhau ra đời. Vị Phật sau hết hiệu là Siêu Nhật Nguyệt Quang. Ngài dạy con tu phép Niệm Phật Tam muội. Ví như có hai người, một đàng chuyên nhớ, một đàng chuyên quên, thì hai người ấy hoặc gặp nhau cũng như chẳng gặp, dù thấy nhau cũng như không thấy; nếu cả hai người nhớ nhau, hai mối nhớ càng ăn sâu thì dù đời này cho đến trải qua đời khác, cũng luôn luôn như bóng với hình, không bao giờ trái xa.</p>
    <p>Mười phương các đức Như Lai thương nhớ chúng sanh như mẹ nhớ con, nếu con trốn tránh, tuy mẹ nhớ cũng chẳng có ích gì; nếu con nhớ mẹ như mẹ nhớ con, thì mẹ con đời đời không xa cách nhau. Nếu chúng sanh đem tâm nhớ Phật, niệm Phật thì hiện tại hay tương lai chắc chắn thấy Phật, cách Phật không xa, chẳng cần tu hành phương tiện nào khác mà tự nhiên tâm được khai ngộ. Cũng như người ướp hương mà thân có hương như thế gọi là dùng hương quang để trang nghiêm vậy. Chỗ bổn nhân tu hành của con là do tâm niệm Phật mà ngộ vô sanh nhẫn, nguyện ở cõi này để nhiếp hóa mọi người niệm Phật vãng sanh Tịnh độ. Nay Phật hỏi viên thông, con vốn không lựa chọn, chuyên thâu nhiếp cả sáu căn, khiến cho Tịnh niệm nối luôn, được vào Tam-ma-địa, ấy là thứ nhất.</p>
    <h4 id="luoc-giai-25" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Kiến đại cũng tức là căn đại; trước thức đại thuộc về thức, đây kiến đại thuộc về căn. Ngài Đại Thế Chí Pháp vương tử, nhân tu kiến đại mà ngộ nhập viên thông.</p>
    <p>Không như các viên thông trước, chỉ lựa chọn từng căn để hạ thủ công phu, mà trái lại ở đây, ngài Đại Thế Chí nhân pháp niệm Phật Tam muội nhiếp phục cả 6 căn, quy cả 6 căn đều thâu về nơi nhất niệm niệm Phật, không để tán loạn dong ruổi theo ngoại duyên. Tịnh niệm thường nối luôn, không xen một niệm gì khác, thì quyết nhiên chứng đặng niệm Phật tam muội, thường thương xót tưởng niệm chúng sanh, như nhớ con dại; nếu chúng sanh chuyên tâm nhớ Phật, niệm Phật như con biết nhớ mẹ, như mẹ nhớ con, thì hiện tiền hoặc tương lai, quyết định gặp Phật, thấy Phật, vì nhân nào quả nấy mảy mún không sai. Trái lại, Phật tuy nhớ chúng sanh, mà chúng sanh cứ trốn tránh không biết nhớ Phật; cũng như hai người, một bên chuyên nhớ, còn một bên chuyên quên, thì gặp cũng như không gặp, thấy cũng như không thấy, chẳng ích gì.</p>
    <p>Vả chăng, tâm mê ngộ của chúng sanh cũng như mẹ và con vậy. Tâm ngộ như mẹ, tâm mê như con, ngộ luôn luôn có trong mê, ví như mẹ thương nhớ con, mà mê thì không biết tự nhận, niệm niệm chuyển dời trái tánh giác, hiệp trần lao, ví như con trốn tránh không nhớ nghĩ đến mẹ, bởi vậy mà uổng chịu luân hồi sanh tử. Nếu biết phản quán, đem tâm niệm Phật giác ngộ nơi tự tâm, thì mỗi phút, mê hóa thành giác, năng sở đều chứng nhập tánh pháp giới bình đẳng, không ly đương độ mà nhiếp hóa những chúng sanh niệm Phật đồng vãng sanh Tịnh độ.</p>
    <p>Bảy vị trên đây do tu bảy đại mà chứng đạo quả.</p>
    <h4 id="25-do-nhi-can-ma-duoc-ngo-dao" class="text-lg font-semibold">25. DO NHĨ CĂN MÀ ĐƯỢC NGỘ ĐẠO</h4>
    <p>Khi đó, đức Quán Thế Âm Bồ-tát đứng dậy cung kính lạy Phật và thưa rằng: - Bạch Thế Tôn, con nhớ từ hằng hà sa số kiếp về trước, có Phật ra đời, tên là Quán Âm. Con đối với trước Phật Quán Âm phát tâm Bồ-đề. Ngài dạy con từ nơi nghe rồi nhớ và tu mà được vào chánh định (văn, tư, tu là điều cần yếu của người tu hành).</p>
    <p>Khi mới nghe tiếng, không chạy theo thinh trần, xoay cái nghe trở vào chân tánh (nhập lưu vong sở). Vì chỗ vào (chân tánh) đã yên lặng, nên động và tịnh hai món trần cảnh không sanh.</p>
    <h4 id="luoc-giai-26" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại ý đoạn này nói: Khi cái nghe đối với tiếng, không khởi vọng niệm phân biệt theo tiếng, do xoay cái nghe trở lại tự tánh, nên tâm yên, cảnh tịch. Đây mới giai đoạn thứ nhất.</p>
    <p>Như thế lần lần tăng tấn đến cái nghe (năng) và cảnh bị nghe (sở) cũng hết (đoạn trên nói thinh trần yên tịnh, song còn cái nghe; đoạn này nói “cái nghe” và “trần bị nghe” đều hết).</p>
    <p>Cũng không an trụ ở chỗ hết nghe. Cái biết hết và cái bị biết cũng không còn (đoạn trên nói “cái nghe với cái bị nghe hết”, nhưng còn chấp ở nơi “cái hết”. Đoạn này nói cũng không chấp ở nơi chỗ hết. Song sợ e còn “cái biết hết”, nên nói tiếp: cái biết và cái bị biết cũng không).</p>
    <p>“Cái biết” và “cái bị biết” cả hai đều không, đến chỗ cùng tột viên mãn. Song hãy còn cái “không”, phải tiến lên một tầng nữa là cái “không” với cái “bị không” cả hai đều diệt hết. Khi các cái sanh và diệt đã diệt hết, thì cái chân tâm tịch diệt hiện tiền.</p>
    <hr />
    <h4 id="luoc-giai-27" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Cách tu hành của Ngài Quán Thế Âm Bồ-tát là:</p>
    <p>Bắt đầu từ khi cái nghe đối với thinh trần, không khởi phân biệt theo thinh trần, nên thinh trần tự vắng lặng; song còn cái “nghe”.</p>
    <p>Đến giai đoạn thứ hai cái nghe (năng, sở) cũng hết, song còn cái “hết”.</p>
    <p>Đến từng thứ ba không chấp ở nơi hết, song còn cái “biết hết”.</p>
    <p>Đến từng thứ tư là “cái biết” đó cũng không, song còn cái “không”.</p>
    <p>Lên đến từng thứ năm là cái “không” đó cũng không còn. Lúc bấy giờ các cái vọng niệm phân biệt chấp trước đều hết, thì chân tâm thanh tịnh tự hiện bày; cũng như các cặn đục đã hết, thì tánh nước trong tự hiện. Mười phương các Đức Phật hay các vị đại Bồ-tát tu hành, chỉ có một con đường duy nhất là trừ hết “vọng” thì “chân” hiện bày, như lau gương sạch bụi, thì ánh sáng tự hiện, thế gọi là thành Phật, hay là chứng đại Niết-bàn.</p>
    <h3 id="iv-ngai-quan-am-ke-lai-su-ket-qua" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. NGÀI QUÁN ÂM KỂ LẠI SỰ KẾT QUẢ</h3>
    <p>(Đoạn trên là Ngài ngộ được chân tâm, từ đây về sau là chân tâm khởi ra diệu dụng)</p>
    <p>Bạch Thế Tôn, do con tu như vậy, nên vượt ra khỏi thế gian, và xuất thế gian. Vì đã được chân tâm thanh tịnh sáng suốt viên mãn khắp cả mười phương cùng với chư Phật và chúng sanh đồng một thể tánh ấy, nên con được hai điều thù thắng:</p>
    <ul>
      <li>Hiệp với đức “từ độ sanh” của chư Phật.</li>
      <li>Hiệp với lòng “bi ngưỡng mộ” của tất cả chúng sanh. Và được các món diệu dụng như sau:</li>
    </ul>
    <h4 id="a-hien-ra-32-ung-than-de-hoa-do-tat-ca-chung-sanh" class="text-lg font-semibold">A. HIỆN RA 32 ỨNG THÂN ĐỂ HÓA ĐỘ TẤT CẢ CHÚNG SANH</h4>
    <p>Bạch Thế Tôn, con nhờ chứng được chỗ đồng thể đó, nên cùng với chư Phật hiệp đức từ, hiện ra 32 ứng thân để tùy thuận theo các chúng sanh mà hóa độ.</p>
    <ul>
      <li>Hiện thân Phật</li>
      <li>Hiện thân Độc giác</li>
      <li>Hiện thân Duyên giác</li>
      <li>Hiện thân Thinh văn</li>
      <li>Hiện thân Phạm vương</li>
      <li>Hiện thân Đế thích</li>
      <li>Hiện thân Trời tự tại</li>
      <li>Hiện thân Trời đại tự tại</li>
      <li>Hiện thân Đại tướng quân</li>
      <li>Hiện thân Tứ thiên vương</li>
      <li>Hiện thân Thái tử</li>
      <li>Hiện thân vua</li>
      <li>Hiện thân trưởng giả</li>
      <li>Hiện thân cư sĩ</li>
      <li>Hiện thân tể quan</li>
      <li>Hiện thân Bà-la-môn</li>
      <li>Hiện thân Tỳ-kheo</li>
      <li>Hiện thân Tỳ-kheo-ni</li>
      <li>Hiện thân Ưu-bà-tắc</li>
      <li>Hiện thân Ưu-bà-di</li>
    </ul>
    <ul>
      <li>Hiện thân bà Chúa</li>
      <li>Hiện thân đồng nam</li>
      <li>Hiện thân đồng nữ</li>
      <li>Hiện thân Trời</li>
      <li>Hiện thân Rồng</li>
      <li>Hiện thân Dược-xoa</li>
      <li>Hiện thân Càn-thát-bà</li>
      <li>Hiện thân A-tu-la</li>
      <li>Hiện thân Khẩn-na-la</li>
      <li>Hiện thân Ma-hầu-la-già</li>
      <li>Hiện thân người</li>
      <li>Hiện thân các chúng sanh</li>
    </ul>
    <h4 id="b-duoc-14-mon-khong-so" class="text-lg font-semibold">B. ĐƯỢC 14 MÓN KHÔNG SỢ</h4>
    <p>Bạch Thế Tôn, con nhờ tu pháp này, chứng được chỗ đồng thể với chúng sanh, nên cùng với chúng sanh đồng một lòng bi ngưỡng mộ. Vì thế nên con khiến cho các chúng sanh đặng 14 món không sợ:</p>
    <ul>
      <li>Chúng sanh khổ não quán tiếng tăm được giải thoát</li>
      <li>Vào lửa không cháy</li>
      <li>Vào nước không chìm</li>
      <li>Quỷ không hại được</li>
      <li>Dao chặt không đứt</li>
      <li>Quỷ không thể thấy được</li>
      <li>Không ai trói cột được</li>
      <li>Không ai trộm cướp được</li>
      <li>Lìa tâm dâm dục</li>
      <li>Lìa nóng giận</li>
      <li>Lìa si mê</li>
      <li>Cầu nam đặng nam</li>
      <li>Cầu nữ đặng nữ</li>
      <li>Niệm danh hiệu Quán Thế Âm công đức bằng niệm danh hiệu của hằng sa Bồ-tát</li>
    </ul>
    <h4 id="c-duoc-4-mon-khong-the-nghi-ban" class="text-lg font-semibold">C. ĐƯỢC 4 MÓN KHÔNG THỂ NGHĨ BÀN</h4>
    <p>Bạch Thế Tôn, con nhờ tu pháp môn này mà đặng bốn món thần diệu không thể nghĩ bàn:</p>
    <ul>
      <li>Hiện nhiều đầu, nhiều tay và nhiều mắt</li>
      <li>Hiện hình nói thần chú</li>
      <li>Chúng sanh hy sinh tài sản cầu con thương xót</li>
      <li>Chúng sanh cầu chi được nấy</li>
    </ul>
    <p>Bạch Thế Tôn, do đó mà Đức Phật Quán Âm thọ ký cho con tên là Quán Thế Âm.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong phần mở đầu bài thứ 12, ngài A Nan đã thưa với Phật rằng ngài đã hiểu nghĩa "sáu gút mở thì cái tên một gút cũng không còn", nhưng ngài còn vướng mắc điều gì?',
    options: {
      a: 'Chưa biết cách làm sao để trở lại với bản tâm thanh tịnh.',
      b: 'Chưa thấu hiểu về bản tính của 18 giới.',
      c: 'Chưa hiểu tu căn nào mới được viên thông.',
      d: 'Chưa biết cách đoạn trừ phiền não tận gốc.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Lời thưa của ngài A Nan không đề cập trực tiếp đến việc chưa biết cách trở lại với bản tâm.',
      b: 'Sai. Ngài không nhắc đến sự vướng mắc về 18 giới trong lời thưa thỉnh này.',
      c: 'Đúng. Ngài A Nan thưa rằng: "Nhưng chúng con còn chưa hiểu ‘tu căn nào mới được viên thông’".',
      d: 'Sai. Ngài không hỏi về việc đoạn trừ phiền não tận gốc mà hỏi về pháp tu viên thông.',
    },
  },
  {
    question: 'Theo phần Lược giải, thuật ngữ "Viên thông" có ý nghĩa cốt lõi là gì?',
    options: {
      a: 'Là khả năng sử dụng sáu căn một cách thần thông tự tại.',
      b: 'Là chứng được chân như của tất cả pháp thông qua bất kỳ pháp tu nào.',
      c: 'Là phương pháp tu hành dành riêng cho hàng Nhị thừa.',
      d: 'Là việc hiểu rõ tất cả giáo lý của 25 vị Thánh.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Viên thông không chỉ đơn thuần là việc sử dụng thần thông.',
      b: 'Đúng. Phần Lược giải ghi rõ: "Bất cứ tu pháp nào mà chứng được chân như của tất cả pháp thì đều gọi pháp đó là viên thông".',
      c: 'Sai. Đây là lối tu viên đốn của Đại thừa, không phải dành riêng cho Nhị thừa.',
      d: 'Sai. Việc hiểu giáo lý 25 vị Thánh không phải là ý nghĩa cốt lõi của chữ viên thông.',
    },
  },
  {
    question: 'Ngài Kiều Trần Na và bốn vị Tỳ-kheo khác đã đạt được quả vị A La Hán nhờ quán xét đối tượng nào?',
    options: {
      a: 'Nhãn căn',
      b: 'Sắc trần',
      c: 'Ý thức',
      d: 'Thanh trần',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Các ngài không quán nhãn căn.',
      b: 'Sai. Sắc trần không phải là đối tượng chứng ngộ của các ngài.',
      c: 'Sai. Các ngài không dùng ý thức làm phương tiện ngộ đạo.',
      d: 'Đúng. Ngài Kiều Trần Như nhân nghe "âm thanh thuyết pháp của Phật" (thanh trần) mà tỏ ngộ lý Tứ đế.',
    },
  },
  {
    question: 'Ngài Ưu Ba Ni Sa Đà đã chọn phương pháp quán nào để chứng đạo từ sắc trần?',
    options: {
      a: 'Quán ánh sáng vàng tử kim từ thân Phật.',
      b: 'Quán các món ăn để phân biệt vị ngọt đắng.',
      c: 'Quán sự biến chuyển của các vì sao trên trời.',
      d: 'Quán tướng bất tịnh và xương trắng để thấy sắc không không hai.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Đây không phải pháp tu của ngài Ưu Ba Ni Sa Đà.',
      b: 'Sai. Phân biệt vị trí là pháp quán của Bồ-tát Dược Vương, Dược Thượng.',
      c: 'Sai. Không có chi tiết nào nhắc đến việc ngài quán vì sao.',
      d: 'Đúng. Ngài đã quán từ "tướng bất tịnh đến tướng xương trắng, vi trần rồi tan về hư không, sắc không không hai".',
    },
  },
  {
    question: 'Điều gì đã khiến ngài Châu Lợi Bàn Đặc Ca từ một người ngu muội trở thành bậc vô học?',
    options: {
      a: 'Ngài đã thuộc lòng hàng ngàn câu kệ của Như Lai.',
      b: 'Ngài quán hơi thở đến vi tế cùng tột, thấy rõ sự sanh diệt của nó.',
      c: 'Ngài đã nghe và phân biệt mọi niệm lự của chúng sanh.',
      d: 'Ngài đã cúng dường đèn và vàng để thếp hình tượng Phật.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Thực tế ngài không thể nhớ nổi một câu kệ dù tụng trong trăm ngày.',
      b: 'Đúng. Phật dạy ngài điều hòa hơi thở, ngài liền "quán hơi thở đến vi tế cùng tột, thấy các hạnh sanh, trụ, dị, diệt" và chứng A La Hán.',
      c: 'Sai. Nghe và phân biệt niệm lự là pháp tu của Bồ-tát Phổ Hiền.',
      d: 'Sai. Việc cúng dường đèn và vàng là nhân quả quá khứ của ngài Ma Ha Ca Diếp.',
    },
  },
  {
    question: 'Trong pháp tu của ngài Tất Lăng Già Bà Sa, sự kiện nào là bước ngoặt dẫn đến chứng ngộ?',
    options: {
      a: 'Khi ngài tắm gội và ngộ ra nước không rửa được bụi trần.',
      b: 'Khi ngài bị đạp phải gai độc và nhận ra tánh "biết đau" không bị đau.',
      c: 'Khi ngài nghe tiếng sư tử rống của Phật thuyết pháp.',
      d: 'Khi ngài nhìn thấy ánh sáng lưu ly tỏa ra từ chóp mũi.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Ngộ ra nước không rửa được trần là bước ngoặt của ngài Bạt Đà Bà La.',
      b: 'Đúng. Khi đi khất thực, ngài đạp gai độc nhức buốt toàn thân nhưng ngộ ra "tuy biết cái ‘biết đau’ mà nó không phải bị đau".',
      c: 'Sai. Đây là liên quan đến biện tài thuyết pháp của ngài Phú Lâu Na.',
      d: 'Sai. Quán ánh sáng chóp mũi là pháp của ngài Tôn Đà La Nan Đà.',
    },
  },
  {
    question: 'Ngài Trì Địa Bồ-tát đã nhận được lời khai thị quan trọng nào từ đức Phật Tỳ Xá Phù?',
    options: {
      a: 'Hãy quán sát vi trần để thấy thế giới là giả dối.',
      b: 'Tất cả các món động đều đồng một tánh hư vọng.',
      c: 'Phải siêng năng làm cầu cống và gánh đất giúp người.',
      d: 'Hãy bình tâm địa thì thế giới đại địa cả đều bình.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Đây không phải lời khai thị trực tiếp của Phật Tỳ Xá Phù.',
      b: 'Sai. Đây là ngộ nhận của ngài Lưu Ly Quang quán phong đại.',
      c: 'Sai. Ngài tự phát nguyện làm việc khổ nhọc này, không phải nội dung câu khai thị.',
      d: 'Đúng. Đức Phật xoa đầu và dạy: "Hãy bình tâm địa thì thế giới đại địa cả đều bình", nhờ đó ngài được khai ngộ.',
    },
  },
  {
    question: 'Ngài Đại Thế Chí Bồ-tát dạy rằng phương pháp nào giúp tâm tự nhiên khai ngộ mà không cần phương tiện khác?',
    options: {
      a: 'Quán sát hư không vô tận.',
      b: 'Đem tâm nhớ Phật, niệm Phật để tịnh niệm nối luôn.',
      c: 'Dùng lửa trí huệ để đốt cháy tham dục.',
      d: 'Thấu suốt các pháp nhân duyên là không.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Quán sát hư không là pháp của ngài Hư Không Tạng.',
      b: 'Đúng. Ngài dạy: "Nếu chúng sanh đem tâm nhớ Phật, niệm Phật... chẳng cần tu hành phương tiện nào khác mà tự nhiên tâm được khai ngộ".',
      c: 'Sai. Dùng hỏa quang tam muội là pháp của ngài Ô Sô Sắc Ma.',
      d: 'Sai. Thấu suốt nhân duyên là pháp tu của ngài Đại Mục Kiền Liên.',
    },
  },
  {
    question: 'Trong tiến trình tu hành của ngài Quán Thế Âm, trạng thái "Nhập lưu vong sở" có nghĩa là gì?',
    options: {
      a: 'Vào được dòng thánh và quên đi địa vị của mình.',
      b: 'Xoay cái nghe trở vào chân tánh, không chạy theo tiếng tăm bên ngoài.',
      c: 'Nghe được tất cả âm thanh đau khổ của chúng sanh.',
      d: 'Quên đi tất cả những gì đã học được từ đức Phật Quán Âm.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Trạng thái này không nói đến địa vị dòng thánh.',
      b: 'Đúng. Nhập lưu vong sở là trạng thái "không chạy theo thinh trần, xoay cái nghe trở vào chân tánh".',
      c: 'Sai. Nghe âm thanh chúng sanh không phải là nghĩa lý của câu này.',
      d: 'Sai. Không liên quan đến việc quên sở học.',
    },
  },
  {
    question: 'Theo văn bản, ngài Quán Thế Âm hiện ra 32 ứng thân nhằm mục đích gì?',
    options: {
      a: 'Để tùy thuận theo căn cơ của chúng sanh mà hóa độ.',
      b: 'Để chứng tỏ thần lực vô song trước mặt đức Phật.',
      c: 'Để thay thế các vị Bồ-tát khác trong việc thuyết pháp.',
      d: 'Để bảo vệ các vị Thánh khác khỏi sự quấy nhiễu của ma quân.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Ngài cùng chư Phật hiệp đức từ, hiện 32 ứng thân "để tùy thuận theo các chúng sanh mà hóa độ".',
      b: 'Sai. Ngài không hiện ứng thân để chứng tỏ thần lực.',
      c: 'Sai. Mục đích không phải là để thay thế các vị Bồ-tát khác.',
      d: 'Sai. Không có đề cập việc bảo vệ các vị Thánh khỏi ma quân.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-12-ngai-a-nan-hoi-phat-phap-tu-vien-thong',
  slug: 'bai-thu-12-ngai-a-nan-hoi-phat-phap-tu-vien-thong',
  title: 'Bài Thứ 12 - Ngài A Nan hỏi Phật pháp tu viên thông',
  type: 'article',
  status: 'published',
  order: 13,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-07',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-12-ngai-a-nan-hoi-phat-phap-tu-vien-thong/25_Ph%C3%A1p_M%C3%B4n_Vi%C3%AAn_Th%C3%B4ng.png',
      readingContent,
      tableOfContents: [
        { id: 'i-ngai-a-nan-hoi-phat-phap-tu-vien-thong', label: 'I. NGÀI A NAN HỎI PHẬT PHÁP TU VIÊN THÔNG' },
        { id: 'ii-phat-hoi-25-vi-thanh-do-tu-phap-mon-gi-duoc-chung-qua', label: 'II. PHẬT HỎI 25 VỊ THÁNH DO TU PHÁP MÔN GÌ ĐƯỢC CHỨNG QUẢ' },
        { id: 'luoc-giai-1', label: 'Lược giải', indent: 1 },
        { id: 'iii-25-vi-thanh-thuat-lai-phap-tu-cua-minh-duoc-chung-qua', label: 'III. 25 VỊ THÁNH THUẬT LẠI PHÁP TU CỦA MÌNH ĐƯỢC CHỨNG QUẢ' },
        { id: '1-do-thanh-tran-chung-a-la-han', label: '1. DO THANH TRẦN CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-2', label: 'Lược giải', indent: 1 },
        { id: '2-do-sac-tran-chung-a-la-han', label: '2. DO SẮC TRẦN CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-3', label: 'Lược giải', indent: 1 },
        { id: '3-do-huong-tran-chung-a-la-han', label: '3. DO HƯƠNG TRẦN CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-4', label: 'Lược giải', indent: 1 },
        { id: '4-do-vi-tran-chung-bo-tat', label: '4. DO VỊ TRẦN CHỨNG BỒ TÁT', indent: 1 },
        { id: 'luoc-giai-5', label: 'Lược giải', indent: 1 },
        { id: '5-do-xuc-tran-ma-chung-thanh', label: '5. DO XÚC TRẦN MÀ CHỨNG THÁNH', indent: 1 },
        { id: 'luoc-giai-6', label: 'Lược giải', indent: 1 },
        { id: '6-do-phap-tran-chung-a-la-han', label: '6. DO PHÁP TRẦN CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-7', label: 'Lược giải', indent: 1 },
        { id: '7-do-nhan-can-chung-a-la-han', label: '7. DO NHÃN CĂN CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-8', label: 'Lược giải', indent: 1 },
        { id: '8-do-ty-can-ma-chung-a-la-han', label: '8. DO TỶ CĂN MÀ CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-9', label: 'Lược giải', indent: 1 },
        { id: '9-do-thiet-can-chung-a-la-han', label: '9. DO THIỆT CĂN CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-10', label: 'Lược giải', indent: 1 },
        { id: '10-do-than-can-chung-a-la-han', label: '10. DO THÂN CĂN CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-11', label: 'Lược giải', indent: 1 },
        { id: '11-do-y-can-ma-chung-a-la-han', label: '11. DO Ý CĂN MÀ CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-12', label: 'Lược giải', indent: 1 },
        { id: '12-do-nhan-thuc-ma-chung-a-la-han', label: '12. DO NHÃN THỨC MÀ CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-13', label: 'Lược giải', indent: 1 },
        { id: '13-do-nhi-thuc-ma-chung-bo-tat', label: '13. DO NHĨ THỨC MÀ CHỨNG BỒ TÁT', indent: 1 },
        { id: 'luoc-giai-14', label: 'Lược giải', indent: 1 },
        { id: '14-do-ty-thuc-ma-chung-a-la-han', label: '14. DO TỶ THỨC MÀ CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-15', label: 'Lược giải', indent: 1 },
        { id: '15-do-thiet-thuc-ma-chung-a-la-han', label: '15. DO THIỆT THỨC MÀ CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-16', label: 'Lược giải', indent: 1 },
        { id: '16-do-than-thuc-ma-chung-a-la-han', label: '16. DO THÂN THỨC MÀ CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-17', label: 'Lược giải', indent: 1 },
        { id: '17-do-y-thuc-ma-chung-a-la-han', label: '17. DO Ý THỨC MÀ CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-18', label: 'Lược giải', indent: 1 },
        { id: '18-do-lua-ma-chung-a-la-han', label: '18. DO LỬA MÀ CHỨNG A LA HÁN', indent: 1 },
        { id: 'luoc-giai-19', label: 'Lược giải', indent: 1 },
        { id: '19-do-dat-ma-duoc-chung-bo-tat', label: '19. DO ÐẤT MÀ ÐƯỢC CHỨNG BỒ TÁT', indent: 1 },
        { id: 'luoc-giai-20', label: 'Lược giải', indent: 1 },
        { id: '20-do-nuoc-ma-duoc-chung-bo-tat', label: '20. DO NƯỚC MÀ ÐƯỢC CHỨNG BỒ TÁT', indent: 1 },
        { id: 'luoc-giai-21', label: 'Lược giải', indent: 1 },
        { id: '21-do-gio-ma-chung-thanh-qua', label: '21. DO GIÓ MÀ CHỨNG THÁNH QUẢ', indent: 1 },
        { id: 'luoc-giai-22', label: 'Lược giải', indent: 1 },
        { id: '22-do-hu-khong-ma-chung-bo-tat', label: '22. DO HƯ KHÔNG MÀ CHỨNG BỒ TÁT', indent: 1 },
        { id: 'luoc-giai-23', label: 'Lược giải', indent: 1 },
        { id: '23-do-thuc-dai-ma-chung-thanh-qua', label: '23. DO THỨC ĐẠI MÀ CHỨNG THÁNH QUẢ', indent: 1 },
        { id: 'luoc-giai-24', label: 'Lược giải', indent: 1 },
        { id: '24-do-kien-dai-ma-chung-thanh-qua', label: '24. DO KIẾN ĐẠI MÀ CHỨNG THÁNH QUẢ', indent: 1 },
        { id: 'luoc-giai-25', label: 'Lược giải', indent: 1 },
        { id: '25-do-nhi-can-ma-duoc-ngo-dao', label: '25. DO NHĨ CĂN MÀ ĐƯỢC NGỘ ĐẠO', indent: 1 },
        { id: 'luoc-giai-26', label: 'Lược giải', indent: 1 },
        { id: 'luoc-giai-27', label: 'Lược giải', indent: 1 },
        { id: 'iv-ngai-quan-am-ke-lai-su-ket-qua', label: 'IV. NGÀI QUÁN ÂM KỂ LẠI SỰ KẾT QUẢ' },
        { id: 'a-hien-ra-32-ung-than-de-hoa-do-tat-ca-chung-sanh', label: 'A. HIỆN RA 32 ỨNG THÂN ĐỂ HÓA ĐỘ TẤT CẢ CHÚNG SANH', indent: 1 },
        { id: 'b-duoc-14-mon-khong-so', label: 'B. ĐƯỢC 14 MÓN KHÔNG SỢ', indent: 1 },
        { id: 'c-duoc-4-mon-khong-the-nghi-ban', label: 'C. ĐƯỢC 4 MÓN KHÔNG THỂ NGHĨ BÀN', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-12-ngai-a-nan-hoi-phat-phap-tu-vien-thong/25_Paths_to_Perfect_Penetration.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/JbMssH18IVw',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/54bOxnS5NfuUNA2SuE8Fpp?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Ngài A Nan hỏi Phật pháp tu viên thông',
    passPercentage: 70,
    questions,
  },
}

export default lesson
