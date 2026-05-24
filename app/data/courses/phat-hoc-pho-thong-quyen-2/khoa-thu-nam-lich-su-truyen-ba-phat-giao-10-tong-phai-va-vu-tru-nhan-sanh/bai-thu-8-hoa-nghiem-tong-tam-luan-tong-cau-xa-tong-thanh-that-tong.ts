import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="hoa-nghiem-tong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">7. Hoa Nghiêm tông hay là Hiền Thủ tông</h2>
    <h3 id="hoa-nghiem-duyen-khoi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Duyên khởi lập tôn</h3>
    <p>Tôn này thuộc về Đại thừa, căn cứ theo giáo nghĩa trong kinh Hoa Nghiêm là một bộ kinh cao nhất mà đức Phật đã nói ra, nên gọi là Hoa Nghiêm tôn.</p>
    <p>Người sáng lập ra tôn này là ngài Đỗ Thuận một vị Hòa thượng đời Đường. Ngài đã thâu góp ý nghĩa mầu nhiệm của kinh Hoa Nghiêm, làm ra ba bộ “Pháp giới quán”.</p>
    <p>Người kế vị ngài Đỗ Thuận là Ngài Trí Nghiễm, ở chùa Chí Tướng. Ngài Trí Nghiễm đã làm ra nhiều bộ luận có giá trị để giải bày nghĩa lý của Tôn này như các bộ: “Sưu huyền ký”, “Thập huyền môn”, “Ngũ thập yếu vấn đáp”.</p>
    <p>Vị thừa kế ngài Trí Nghiễm và đã có nhiều công nghiệp lớn đối với Tôn này là ngài Pháp Tạng, cũng gọi là Hiền Thủ quốc sư. Ngài đã làm ra bộ “Thám huyền ký” và nhiều chương sớ khác, khiến cho Hoa Nghiêm tôn rất được thạnh hành và phát triển trong đời Ngài. Do đó, Tôn này cũng thường gọi là Hiền Thủ tôn. Sau khi Ngài Hiền Thủ qua đời được ít lâu, kinh Hoa Nghiêm được dịch lại bằng Hán văn bộ mới, ngài Trừng Quán, tức là Thanh Lương quốc sư, dựa theo ý nghĩa bộ Hoa Nghiêm mới dịch này mà làm ra bộ “Hoa Nghiêm sớ sao”, bày giải nghĩa lý rộng rãi, sâu xa mầu nhiệm của kinh Hoa Nghiêm. Vì thế, Hoa Nghiêm tôn lại càng được người đời sùng mộ, nhất là trong giới thượng lưu trí thức nước Tàu.</p>
    <h3 id="hoa-nghiem-ton-chi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Tôn chỉ và giáo lý căn bản</h3>
    <p>Trong các bộ kinh của đức Phật, kinh Hoa Nghiêm là bộ kinh có ý nghĩa cao siêu, mầu nhiệm nhất. Chỉ những vị đại đệ tử, căn cơ minh mẫn, lanh lẹ mới có thể hiểu thấu được. Do đó, Hoa Nghiêm tôn chỉ thích hợp với những ai đã có một căn bản Phật pháp vững chắc và đã quen với lối suy luận trừu tượng của giáo lý nhà Phật. Đem một giáo lý uyên thâm của Phật pháp ra trình bày trong một tập sách phổ thông như thế này, thật khó mà nói cho rõ ràng, đầy đủ nghĩa lý của Hoa Nghiêm tôn. Tuy thế, để có một bộ sách gồm đầy đủ mười tôn phái của Phật giáo Trung Hoa, và để quý độc giả có đủ tài liệu để so sánh sự sai khác của mỗi tôn, chúng tôi không thể không nói đến Hoa Nghiêm tôn trong khi điểm qua tôn chỉ và giáo lý căn bản của mười tôn. Chúng tôi sẽ cố gắng trình bày một cách giản dị, gọn gàng về giáo lý đặc sắc của tôn này, và cũng mong mỏi quý độc giả theo dõi một cách chăm chú sự trình bày này, ngõ hầu vấn đề được sáng tỏ.</p>
    <p>Tôn này được gọi là “Viên giáo”, nghĩa là giáo lý viên dung hoàn toàn đầy đủ.</p>
    <p>Tôn này chủ trương “Pháp giới duyên khởi”, nghĩa là vũ trụ vạn hữu trùng trùng do nhân duyên hòa hợp mà thành. Nói một cách khác, mọi sự vật trong vũ trụ bao la, từ một vật nhỏ như hạt bụi, cho đến một vật lớn như trăng sao, đều nương vào nhau, làm nhân làm quả, lớp lớp không cùng tột, dung thông nhau, ảnh hưởng lẫn nhau mà có. Mỗi pháp, trong vũ trụ không thể tồn tại riêng rẽ, biệt lập mà tự có được. Cái này có là nhờ cái kia, cái kia có là nhờ cái này. Cái này và cái kia tương quan, tương duyên, lớp lớp không cùng tột, cho nên gọi là “vô tận duyên khởi” hay “trùng trùng duyên khởi”.</p>
    <p>Vì là trùng trùng duyên nhau, nên một là hết thảy, hết thảy là một, mọi sự vật trong vũ trụ đều dung thông nhau. Và do đó, trong kinh Hoa Nghiêm đã nêu lên pháp môn “Sự sự vô ngại pháp giới”.</p>
    <p>Để hiểu rõ nghĩa lý của pháp môn này, chúng ta hãy đi theo pháp quy nạp gồm có 4 giai đoạn sau đây, cũng gọi là bốn pháp giới:</p>
    <p><strong>1. Sự pháp giới:</strong> Sự là nói về các hình tướng sai biệt của các pháp trong vũ trụ. Trong vũ trụ, các pháp đều có giới hạn rõ ràng như nước lạnh, nước đá, nước sôi, hơi nước, đều có tướng trạng khác nhau. Đó là đứng về sự mà quan sát vũ trụ vạn hữu hay nói theo danh từ đạo Phật là “Sự pháp giới”.</p>
    <p><strong>2. Lý pháp giới:</strong> Lý là nói về các phần bên trong, vô hình của sự vật. Đây tức là lý tánh bình đẳng, chỗ nương tựa cho tất cả sự tướng; lý dung thông khắp tất cả, như nước lạnh, nước đá, hơi nước, tuy tướng trạng khác nhau, nhưng thể tánh vẫn là một (nghĩa là gồm H2O). Vũ trụ vạn hữu không chỉ có phần sự tướng mà còn phần lý tánh nữa. Đó tức là “Lý pháp giới”.</p>
    <p><strong>3. Lý, Sự vô ngại pháp giới:</strong> Như trên chúng ta đã thấy, mỗi pháp đều có Sự và Lý do nơi Sự mà rõ, Sự nương vào Lý mà thành. Lý và Sự dung thông, như nước tức là sóng, sóng tức là nước. Lý, Sự trong mỗi pháp đã dung thông thì Lý, Sự trong pháp giới cũng dung thông, vô ngại. Đó là ý nghĩa của “Lý, Sự vô ngại pháp giới”.</p>
    <p><strong>4. Sự Sự vô ngại pháp giới:</strong> Trong pháp giới, có hằng hà sa số sự vật, hình tướng tuy khác nhau, giới hạn tuy bất đồng nhưng lý tánh lại dung thông bình đẳng, không có phân chia ngăn cách. Nhờ Lý, mà Sự Sự được dung thông vô ngại. Như các vật dụng bằng điện, nào quạt điện, đèn điện, máy lạnh, ủi điện, lò điện,v.v... tuy mỗi vật đều có hình dáng, công dụng sai khác, nhưng đều thông nhau qua luồng điện chi phối lẫn nhau, ảnh hưởng qua lại. Một thí dụ khác: nhiều hồ chứa nước, hình dáng, rộng hẹp khác nhau, nhưng ăn thông với nhau bằng những ống nước, do đó sự đầy vơi, nhớp sạch của một hồ này đều liên quan mật thiết đến tất cả các hồ khác.</p>
    <p>Trên đây là những thí dụ vô cùng thô thiển, cốt để gợi lên một ý niệm về “Sự Sự vô ngại pháp giới” thôi, chứ không đúng hẳn. Trong hai thí dụ trên, chúng ta lấy những vật dụng điện khí hay những hồ nước để hình dung cho Sự Sự trong pháp giới; và lấy những luồng điện hay luồng nước để hình dung cho Lý của pháp giới. Thí dụ như thế, người ta sẽ tưởng rằng Sự và Lý là hai loại khác nhau, có thể phân tách ra được. Nhưng thật ra Lý và Sự không thể phân tách ra được: trong Sự có Lý, trong Lý có Sự. Sự, Lý chẳng qua là hai phương diện của một vấn đề vô cùng tế nhị, mà lý trí của chúng ta đã phân tách ra để tạm nghiên cứu đó thôi.</p>
    <p>Để tóm tắt ý nghĩa của bốn pháp giới này, chúng tôi xin nói một cách giản dị như sau:</p>
    <p>Pháp giới gồm có triệu triệu sự vật khác nhau, như A, B, C, v.v... (Sự pháp giới).</p>
    <p>Trong mỗi sự vật đều có lý tánh bình đẳng, mà chúng tôi hình dung là L (Lý pháp giới).</p>
    <p>Lý tánh bình đẳng ấy dung thông với tất cả mọi sự vật, như A=L; B=L; C=L. (Lý, Sự vô ngại pháp giới).</p>
    <p>Nhờ lý tánh dung thông với mọi sự vật, mà mọi sự vật trong vũ trụ trở thành dung thông nhau, vô ngại đối với nhau, như A=C, v.v... (Sự Sự vô ngại pháp giới).</p>
    <h4 class="text-lg font-semibold">Sáu tướng và mười lý huyền diệu của các pháp</h4>
    <p>Trong pháp giới, sở dĩ Sự Sự được vô ngại, dung thông là do các pháp đều có đủ “sáu tướng” và “mười lý huyền diệu” sau đây:</p>
    <h3 id="hoa-nghiem-sau-tuong" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">Sáu tướng viên dung</h3>
    <p>Dựa theo bộ kinh Hoa Nghiêm, Ngài Bồ tát Thế Thân đã làm ra bộ “Thập địa luận” để giải thích nghĩa lý của sáu tướng (lục tướng). Sáu tướng này được gọi là Viên-dung, vì nó có những đức tính viên mãn, dung thông vô ngại. Sáu tướng của sự vật trong vũ trụ ấy là:</p>
    <p><strong>1. Tổng tướng:</strong> Tổng tướng là cái tướng bao trùm tất cả, tổng cộng tất cả các tướng sai biệt. Như khi ta nói đến cái nhà, là gồm tất cả cột kèo, tường, mái, đá, gạch, v.v... Vậy cái nhà tức là tổng tướng.</p>
    <p><strong>2. Biệt tướng:</strong> Biệt tướng là nói các tướng riêng biệt; nhiều biệt tướng cộng lại thành tổng tướng. Như các biệt tướng trong cái nhà là: cột, kèo, mái, tường, gạch, v.v... Đã có Tổng tức phải có Biệt; nếu không có Biệt thì cũng không thể lấy gì mà gọi là Tổng.</p>
    <p><strong>3. Đồng tướng:</strong> Đồng tướng là cái tướng chung cùng, dung hòa với nhau, không ngăn ngại nhau, không trái chống nhau. Như kèo, cột, tường, mái, tuy khác nhau, nhưng không ngăn ngại nhau mà vẫn đồng hướng về một mục tiêu chung là cái nhà.</p>
    <p><strong>4. Dị tướng:</strong> Dị tướng là các tướng riêng biệt, cái này, cái kia, hình tướng không giống nhau, mặc dù vẫn cùng nhau dung hòa để gánh vác một nhiệm vụ chung; như cột, kèo, tường, mái trong một cái nhà, không cái nào giống cái nào. Dị tướng không phải là biệt tướng, cũng như đồng tướng không phải là tổng tướng.</p>
    <p>Như 100 đồng bạc là tổng tướng. Tổng tướng này là tổng cộng của các tờ giấy bạc: 1 tờ 50 đồng, 2 tờ 20 đồng, 1 tờ 10 đồng (50+40+10=100). Những tờ giấy bạc 50, 20, 10 đồng là biệt tướng. Những tờ giấy bạc này to nhỏ, hình ảnh, màu sắc khác nhau, là dị tướng. Mặc dù hình tướng khác nhau, nhưng cũng là những tờ bạc cả, tánh chất “bạc” là đồng tướng.</p>
    <p><strong>5. Thành tướng:</strong> Thành tướng là tướng thành tựu. Sự chung cùng để thành ra một cái gì, đó là thành tướng. Như cái nhà là sự thành tựu của các cái cột, kèo, tường, mái, v.v... Vậy cái nhà, đứng về phương diện công dụng để ở, là thành tướng của các cột, kèo, tường, mái, v.v... Nếu lấy thí dụ 100 đồng, thì số tiền này là thành tướng của những tờ 50 đồng, 20 đồng và 10 đồng. Nhờ sự kết hợp của những số tiền này mà có được số bạc 100 để mua được một vật gì đó, như thế là thành tướng.</p>
    <p><strong>6. Hoại tướng:</strong> Hoại tướng là cái tướng độc lập của các pháp. Như cột, kèo, tường, mái, trong khi hợp tác với nhau, để thành cái nhà, thì vẫn giữ cái địa vị riêng của chúng nó là cột, kèo, tường, mái, chứ không phải vì thành cái nhà mà chúng nó không còn là cột, kèo, tường, mái nữa. Cũng như trong khi hợp thành số bạc 100 đồng, các tờ giấy bạc 50, 20, 10 đồng vẫn là những tờ giấy bạc 50, 20, 10 và vẫn giữ cái giá trị riêng của mỗi thứ.</p>
    <p>Sáu tướng này phân ra làm ba đối, gọi là “Tam đối lục tướng”.</p>
      <ul>
        <li>Tổng, Biệt cùng đối nhau thuộc về Thể.</li>
        <li>Đồng, Dị cùng đối nhau thuộc về Tướng.</li>
        <li>Thành, Hoại cùng đối nhau thuộc về Dụng.</li>
      </ul>
    <p>Nếu chúng ta lấy con sư tử bằng vàng làm thí dụ, thì toàn thể thân hình của nó là Tổng tướng; mỗi bộ phận riêng rẽ như tai, mắt, mũi lưỡi là Biệt tướng; chất vàng của nó là Đồng tướng; mỗi bộ phận có hình dáng riêng khác là Dị tướng; mỗi bộ phận cộng tác hòa hiệp với nhau để thành hình con sư tử là Thành tướng; nhưng mỗi bộ phận đều có phạm vi riêng biệt, tự lập của nó là Hoại tướng.</p>
    <p>Khi chúng ta nói đến Tổng, Đồng, Thành là nói về phương diện toàn thể, viên dung bình đẳng của bản thể vũ trụ; khi chúng ta nói đến Biệt, Dị, Hoại là nói về phương diện hiện tượng giới, trong ấy mỗi mỗi sự vật đều phơi bày riêng rẽ khác nhau. Theo trong kinh Hoa Nghiêm thì Tổng, Đồng, Thành tướng thuộc về môn viên dung; còn Biệt, Dị, Hoại tướng thuộc về môn hàng bố (nghĩa là hiển lộ, phơi bày la liệt). Một bên là bình đẳng, một bên là sai biệt. Nhưng bình đẳng và sai biệt tương tức, tương nhập, viên dung không ngại. Tương tức nghĩa là cái này tức cái kia, như nước tức là sóng; tương nhập nghĩa là ăn nhập với nhau, dung thông nhau, như mặt gương này và mặt gương kia phản chiếu vào nhau không cùng mà không cản trở gì nhau. Vì tương tức, tương nhập, nên lìa tổng tướng thời không biệt tướng, lìa đồng tướng thời không dị tướng, lìa thành tướng thời không hoại tướng. Tóm lại, viên dung không lìa hàng bố, hàng bố không lìa viên dung, viên dung tức hàng bố hàng bố tức là viên dung. Hết thảy các pháp đều đủ sáu tướng ấy, không một pháp nào là không viên dung tự tại, tức, nhập không ngại. Vì thế cho nên gọi là 6 tướng viên dung. Đấy là ý nghĩa huyền diệu của Hoa Nghiêm nhất thừa viên giáo.</p>
    <h3 id="hoa-nghiem-muoi-huyen-mon" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">Mười lý huyền diệu của các pháp hay mười huyền môn</h3>
    <p>Ngoài sáu tướng nói trên, các pháp còn có mười lý huyền diệu, hay mười đức tính huyền diệu, mà bộ kinh Hoa Nghiêm sớ sao và bộ Tham Huyền Ký của ngài Hiền Thủ có giải thích như sau:</p>
    <p><strong>1. Môn “đồng thời đầy đủ các pháp tương ưng” (đồng thời cụ túc tương ưng):</strong> Nghĩa là trong mỗi một pháp nào đồng thời cũng có đủ, hàm chứa tất cả các pháp khác trong vũ trụ. Như một giọt nước có đủ khí vị của muôn ngàn sông, biển.</p>
    <p><strong>2. Môn “rộng và hẹp tự tại không ngại” (quảng hiệp tự tại vô ngại):</strong> Nghĩa là một vật gọi là lớn, chưa hẳn là lớn, một vật gọi là nhỏ chưa hẳn là nhỏ. Nhờ cái lý dung thông, một vật nhỏ như đầu mảy lông, có thể chứa được cả thái hư mà còn rộng. Một vật lớn như thái hư, có thể nằm gọn trong đầu mảy lông, mà không chật. Đây muốn nói rằng, trong pháp giới, Sự Sự đã vô ngại, dung thông, thì quan niệm về sự rộng hẹp, lớn nhỏ đều là những danh từ suông, không có biên giới nhất định giữa một vật này và một vật khác: một vật nhỏ như vi trần có liên quan đến vũ trụ; một vật lớn như vũ trụ có liên quan đến một vi trần. Cho nên kinh Hoa Nghiêm có chép: “Trong một mảy trần, hết thảy cõi nước rộng rãi an trụ”. Để giải thích ý nghĩa này, kinh thường dạy: “Sự nhờ Lý mà được dung thông, tự tại không ngăn ngại”.</p>
    <p><strong>3. Môn “một và nhiều dung nhau không đồng” (nhất, đa tương dung bất đồng):</strong> Nghĩa là về số lượng, một và nhiều vật có thể dung nạp lẫn nhau, mà vẫn không phá hoại cái tướng riêng biệt (an lập) của mỗi vật. Như muôn ngàn ngọn đèn thắp sáng một gian nhà, ngọn này ngọn kia lẫn hiệp với nhau, nhưng ngọn nào vẫn có ánh sáng riêng của nó</p>
    <p><strong>4. Môn “các pháp tương tức tự tại” (chư pháp tương tức tự tại):</strong> Nghĩa là các pháp cùng dung, cùng tức, không ngăn ngại nhau. Như một pháp khi bỏ mình đồng với các pháp khác, thì toàn thể đều nơi pháp kia; nếu một pháp nhiếp thâu các pháp đồng về mình, thì hết thảy các pháp kia lại về nơi một pháp thâu nhiếp ấy. Cũng ví như chất vàng với sắc vàng, hai pháp ấy không rời nhau.</p>
    <p><strong>5. Môn “ẩn mật tỏ rõ đều thành” (bí mật ẩn hiện câu thành):</strong> Nghĩa là một pháp có nhiều phương diện, khi phương diện này hiển thì phương diện kia ẩn; khi phương diện kia ẩn, thì phương diện này hiển; trong ẩn có hiển; trong hiển có ẩn; ẩn hiển đắp đổi nhau mà thành tựu. Sự ẩn hiển cũng không nhất định cái nào sau cái nào trước, cũng không ngăn ngại, chống đối nhau. Như một pho tượng bằng vàng, khi chú ý đến vàng thì không thấy cái đẹp của pho tượng, khi chú ý đến cái đẹp của pho tượng thì không thấy vàng. Tóm lại, khi cái đẹp hiển thì vàng ẩn, khi vàng hiển thì cái đẹp ẩn.</p>
    <p><strong>6. Môn “vi tế dung nhau, an lập” (vi tế tương dung an lập):</strong> Vi tế nghĩa là nhỏ nhiệm mà rõ ràng. Một vật nhỏ nhiệm này có thể bao trùm một vật nhỏ nhiệm khác, mà không cản trở nhau, không phá hoại cái tướng của nhau. Như một giọt nước bao gồm nhiều hạt nước, mỗi hạt nước gồm nhiều hóa chất, mỗi hóa chất gồm nhiều nguyên tử, mỗi nguyên tử gồm nhiều điện tử, giữa những điện tử có cái nhân: Mỗi thứ đều dung nhau và an lập trong nhau.</p>
    <p><strong>7. Môn “cảnh giới tướng võng nhơn đà la” (Nhơn đà la võng cảnh giới):</strong> Nhơn đà la tức là phiên âm chữ Indra là cõi trời Đế Thích. Theo Bà la môn giáo, thì trên cõi trời Nhơn đà la, có cái màn lưới bằng bửu châu; mỗi hạt bửu châu chói hiện đến muôn trượng, hạt này hạt khác phản chiếu nhau, chói sáng lẫn nhau, lớp lớp không cùng tận. Môn này cũng như vậy: trong mỗi pháp có nhiều pháp khác, trong nhiều pháp khác lại có nhiều pháp khác nữa. Cứ thế nhân mãi lên cho đến vô cùng tận. Kinh Hoa Nghiêm có chép: “Hết thảy thế giới đều như thế giới màn lưới Nhơn đà la”.</p>
    <p><strong>8. Môn “nhơn sự rõ pháp, sanh trí hiểu biết” (pháp sự hiểu pháp sanh giải):</strong> Nghĩa là nhờ Sự mà hiểu được Lý; nhưng khi lý đã rõ, thì lý lại lan rộng làm cho chúng ta hiểu rộng sâu xa qua nhiều Sự khác. Đây muốn nói trí hiểu biết lan rộng dung thông qua sự vật, như vết dầu lan trên mặt nước, chỉ một tia lửa có thể bừng cháy rất xa.</p>
    <p><strong>9. Môn “mười đời cách pháp dị thành” (thập thế cách pháp dị thành):</strong> Đây muốn nói thời gian mặc dù cách biệt nhau từ quá khứ đến hiện tại qua tương lai, nhưng chính nhờ thế mà các pháp được thành tựu một cách dễ dàng. Tại sao chia thời gian thành mười đời mà không chia làm ba đời? Đáng lẽ chỉ nói quá khứ, hiện tại, tương lai là đủ. Nhưng muốn chia một cách rốt ráo, tinh vi, trong kinh chia mười đời như sau: trong quá khứ cũng gồm có quá khứ, hiện tại và tương lai; trong hiện tại cũng gồm như thế và trong tương lai cũng vậy: ba đời, mỗi đời lại chia nhỏ làm ba thành chín. Nhưng nếu chia nhỏ như thế mà không có ý niệm tổng quát so sánh liên hệ với nhau thì cũng không có được ý niệm về thời gian. Vì thế cho nên về chín niệm biệt ấy, còn cộng thêm một niệm tổng (tổng quát) nữa, thành ra mười.</p>
    <p>10. Môn “chủ và bạn nương nhau làm đầy đủ công đức sáng suốt hoàn toàn” (chủ, bạn, viên minh cụ đức): Như chúng ta đã thấy ở các phần trên: các pháp nương nhau mà thành. Nếu ta lấy một pháp làm chủ, thì các pháp khác là bạn. Chủ và bạn nương nhau làm đầy đủ công đức, lớp lớp không cùng tận, như mặt trăng sáng trên không, chung quanh vây những vì sao nhấp nháy, rồi trên mặt đất bao nhiêu sông ngòi, ao hồ, lại phản chiếu ánh sáng trăng sao ở trên không, làm cho cảnh vật khắp nơi càng thêm rạng rỡ.</p>
    <p>Tóm lại, mười lý huyền diệu này cộng với sáu tướng nói trên của các pháp là nguyên nhân giải thích vì sao “Sự Sự được vô ngại” trong pháp giới, và cắt nghĩa một cách đầy đủ giáo lý “trùng trùng duyên khởi” mà Hoa Nghiêm tôn chủ trương.</p>
    <h3 id="hoa-nghiem-phuong-phap" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. Phương pháp tu hành</h3>
    <p>Giáo lý căn bản của Hoa Nghiêm tôn đã sâu xa mầu nhiệm, thì phương pháp tu hành tất nhiên cũng phải cao siêu, mầu nhiệm mới đưa hành giả đến chỗ cứu cánh tu hành. Tựu trung, trong các phương pháp tu hành ấy, ba pháp quán về pháp giới sau đây được xem là các pháp môn trọng yếu và có hiệu quả rốt ráo nhất:</p>
    <p><strong>1. Chơn không quán:</strong> “Chơn” có nghĩa là chơn thật, không hư vọng; “Không” nghĩa là không bị sắc tướng chi phối, ngăn ngại.</p>
    <p>Pháp quán này dựa trên “lý pháp giới” mà lập ra. Mục đích của pháp quán này là dứt vọng tình, rõ chơn tánh, khiến cho hành giả thấy sắc mà không bị sắc ngăn ngại và nhận được rằng toàn thể là chơn không; thấy không, mà nhận được rằng đó không phải là không hẳn (đoạn không) mà toàn là chơn tánh. Tóm lại, pháp quán này nhìn thấu qua được sự đối đãi giả dối của cái không và cái có, để nhận rõ được cái “lý của vũ trụ (lý pháp giới) là chơn không” (đã giải ở trên).</p>
    <p><strong>2. Lý sự vô ngại quán:</strong> Pháp quán này y theo “lý sự vô ngại pháp giới” mà lập ra. “Lý” là thể tánh thanh tịnh sáng suốt; “Sự” là hình tướng phận hạn của các pháp. Lý, Sự vô ngại, như trong phần giáo lý căn bản đã có nói ở trước, nghĩa là Lý và Sự không phải là hai loại trái chống nhau, ngăn cách nhau, mà trái lại, dung thông nhau. Lý, Sự thấu suốt, viên dung không ngại nên gọi là “Lý, Sự vô ngại quán”.</p>
    <p>Theo pháp quán này, hành giả quán sát cái sắc tướng của một mảy trần mà khám phá ra được cái lý của vũ trụ. Tức là qua cái tướng hư giả của sự vật mà thấy được cái tánh sáng suốt của nhứt chơn.</p>
    <p><strong>3. Châu biến hàm dung quán:</strong> Pháp quán này dựa trên cái lý “Sự Sự vô ngại pháp giới” mà lập ra. “Châu biến” là lan ra, biến hóa cùng khắp tất cả; “Hàm dung” là bao gồm, thâu nhiếp hết, dung thông tất cả. “Châu biến hàm dung quán” là pháp quán nhằm mục đích nhận chân được rằng: cái pháp một và nhiều không ngại nhau, lớn và nhỏ trùm nhau, dung nhiếp lẫn nhau, lớp lớp không cùng tột, ẩn hiện tự tại, đồng thời tương tức tương nhập, thâu nhiếp, dung thông nhau cho đến vô cùng vô tận, trùm chứa cả vũ trụ bao la.</p>
    <p>Theo pháp quán này, hành giả quán sát cái Lý nơi một Sự, rồi do một Sự ấy mà mỗi mỗi Sự khác cũng đều thấy rõ. Hành giả lại quán mọi Sự tức nơi Lý, rồi theo Lý ấy mà mỗi mỗi Sự đều dung thông.</p>
    <h3 id="hoa-nghiem-qua-vi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. Quả vị tu chứng</h3>
    <p>Theo Hoa Nghiêm tôn, giải thoát vẫn không phá hoại thế gian tướng; nói một cách khác, không phải phủ nhận thế gian tướng mà có thể tìm thấy giải thoát ở một nơi nào khác. Ngay trong thế gian này, nếu hành giả phân biệt được chân vọng, khử trừ điên đảo, khiến cho tâm thanh tịnh để cùng thật tại nhất trí: đó là giải thoát.</p>
    <p>Quan niệm về giải thoát của Hoa Nghiêm tôn này không khác với Thiên Thai tôn, nghĩa là đều chủ trương một cách lạc quan rằng chúng sanh và Phật không sai cách: không nhận chân được lý trùng trùng duyên khởi, sự sự vô ngại pháp giới, là chúng sanh; giác ngộ được chân lý trên là Phật.</p>
    <h3 id="hoa-nghiem-ket-luan" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. Kết luận</h3>
    <p>Hoa Nghiêm tôn vì y theo bộ kinh cao nhất của Phật mà thành lập, nên được liệt vào hạng viên giáo, nghĩa là giáo lý hoàn toàn viên mãn. Và cũng vì là viên giáo cho nên phải cần một căn trí thông lợi mới tu theo được.</p>
    <p>Vậy hành giả, trước khi muốn lựa con đường này để tiến bước, cần phải cân nhắc cho kỹ lưỡng, nhất là cần phải tìm nghiên cứu thêm cho thấu đáo. Nếu thấy nó khó hiểu, quá cao đối với căn cơ của mình, thì tốt hơn, nên tìm một con đường khác, bởi vì con đường nào, cuối cùng cũng đưa đến giải thoát cả.</p>
    <p>Nhưng nếu quý vị nào nhận thấy căn cơ của mình có thể theo kịp được giáo lý huyền diệu của tôn này, thì đó cũng là một diễm phúc lớn. Trí tuệ quý vị sẽ nếm được hương vị thanh cao nhất của đạo nhiệm mầu, và sự tu hành của quý vị cũng mau đến đích, vì quý vị đã trèo theo con đường thẳng đứng để lên đỉnh núi “giải thoát”. Bao giờ con đường thẳng đứng cũng khó trèo, nhưng mau đến đích hơn những con đường vòng quanh co. Trong vấn đề tu hành cũng vậy.</p>
  </section>
  <section id="tam-luan-tong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">8. Tam Luận tông hay là Tánh Không tông</h2>
    <h3 id="tam-luan-duyen-khoi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Duyên khởi lập tôn</h3>
    <p>Tôn này căn cứ vào ba bộ luận sau đây mà thành lập, nên gọi là Tam Luận tôn.</p>
    <p>1. Bộ Trung luận, gồm có bốn quyển, do ngài Bồ tát Long Thọ làm ra, mục đích chính là phá chấp của Tiểu thừa và kèm một phần phụ đả phá sai lầm của ngoại đạo.</p>
    <p>2. Bộ Bách luận, gồm có hai quyển, do ngài Bồ tát Đề Bà làm ra, mục đích chính là phá chấp của ngoại đạo và kèm một phần phụ phá chấp của Tiểu thừa.</p>
    <p>3. Bộ Thập Nhị Môn luận, gồm có một quyển, cũng do ngài Long Thọ làm ra, mục đích phá cả Tiểu thừa và ngoại đạo.</p>
    <p>Tóm lại, ba bộ luận trên đây, đều phá sự thiên chấp sai lầm của Tiểu thừa và ngoại đạo và mục đích cuối cùng là làm sáng tỏ nghĩa lý sâu xa, mầu nhiệm của Đại thừa.</p>
    <p>Tôn này được thạnh hành ở Trung Hoa trong đời Dao Tần do công đức hoằng dương của ngài Cưu Ma La Thập, và trong đời Đường do công đức của ngài Đại sư Gia Tường.</p>
    <h3 id="tam-luan-ton-chi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Tôn chỉ và giáo lý căn bản</h3>
    <p>Như chúng ta đã thấy trong nội dung của ba bộ luận căn bản nói trên, chủ trương của tôn này là phá các điều tà chấp, nêu bày chánh lý.</p>
    <p>Theo Tam Luận tôn, là chấp có bốn loại:</p>
    <p><strong>1. Tà chấp của ngoại đạo:</strong> Ngoại đạo tức là những học phái hay tôn giáo khác với đạo Phật. Ngoại đạo vì không thấu rõ lý ngã không và pháp không, nên chấp chặt tà kiến, như tà nhơn, tà quả, không nhơn mà có quả, có nhơn mà không quả, v.v... những cái chấp nầy cần phải đả phá.</p>
    <p><strong>2. Chấp trước của Tiểu thừa Tỳ Đàm tôn:</strong> Tiểu thừa Tỳ Đàm tôn tức là Câu Xá tôn. Tôn này chủ trương lý ngã không, pháp hữu, nghĩa là cho rằng cái ngã nơi thân người là không có, nhưng các pháp là có. Quan niệm sai lầm về pháp hữu ấy cần phải phá trừ.</p>
    <p><strong>3. Chấp trước của Thành Thật tôn:</strong> Tôn này, tuy chủ trương ngã pháp đều không, nhưng lại chấp cái “không” ấy là thật “có” (thật có một cái không), chứ không biết rằng cái “không” ấy cũng không hoàn toàn là không, cho nên cần phải phá trừ.</p>
    <p><strong>4. Chấp trước của người tu về Đại thừa:</strong> Người tu về Đại thừa không còn những chấp trước mê lầm về ngã, pháp của ngoại đạo và Tiểu thừa, đã đoạn trừ những thành kiến chấp có, chấp không, chấp đoạn, chấp thường, nhưng còn có một số người ôm chặt cái sở đắc của mìmh, nghe nói “có” thì sa vào có, nghe nói “không” thì trệ vào không, nghe nói “trung đạo” thì chấp trước về trung đạo. Cho nên cần phải phá trừ những chấp trước ấy.</p>
    <p>Có người hỏi:</p>
      <ul>
        <li>Tam Luận tôn chủ trương phá tà như trên, có thể gọi là đầy đủ lắm, nhưng còn phần hiển chánh thì như thế nào?</li>
        <li><strong>Xin thưa:</strong> Phá hết tà, tức là hiển chánh. Phá cũng tức là lập. Trừ mê tức là ngộ. Như vậy, tà chấp đã bị phá, thời chánh lý tự bày, ngoài sự phá tà, không có chánh lý nào riêng nữa.</li>
      </ul>
    <p><strong>Trọn bộ “Tam luận huyền nghĩa” có nói:</strong> Sự phá tà hiển chánh phân làm bốn loại:</p>
    <p>1. Phá mà không thâu , nghĩa là trước một đối thủ nói không hợp đạo, thì chỉ phá mà không thâu.</p>
    <p>2. Thâu mà không phá , nghĩa là đối với người chủ trương hợp với chân lý thì chỉ thâu mà không phá.</p>
    <p>3. Cũng phá mà cũng thâu , nghĩa là đối với người học đạo mà còn đầy lòng mê chấp, thì phải phá trừ chỗ mê chấp và thâu lại giáo nghĩa mà họ đã hiểu lầm.</p>
    <p>4. Không thâu mà cũng không phá , đây là trường hợp khi đã tiêu trừ ba loại nói trên, quy về một chơn thật tướng: đến đây thì đã xa lìa nói phô, bặt dứt niệm lự, không thể nói rằng phá, không thể nói rằng thâu.</p>
    <p>Chủ trương phá tà hiển chánh trên này có thể cô đọng trong bốn chữ sau đây: “Trung đạo bát bất”.</p>
    <p>Trung đạo tức là đạo lý viên dung cũng gọi là đệ nhứt nghĩa đế, nghĩa là cái chơn lý cùng tột, không gì hơn.</p>
    <p>Bát bất tức là tám cái “Bất” (chẳng phải):</p>
    <p>Bất sanh, bất diệt, bất thường, bất đoạn, bất nhất, bất dị, bất lai, bất xuất. Hiểu rõ tám cái “Bất” ấy, tức là nhận chân được nghĩa lý của Trung đạo.</p>
    <p>Chúng ta hãy nghe bài kệ sau đây trong “Trung đạo” thì rõ:</p>
    <p>Bất sanh, diệc bất diệt</p>
    <p>Bất thường, diệc bất đoạn</p>
    <p>Bất nhất, diệc bất dị</p>
    <p>Bất lai, diệc bất xuất</p>
    <p>Năng thuyết thị nhân duyên</p>
    <p>Thiện diệt chư hý luận</p>
    <p>Ngã khể thủ lễ Phật</p>
    <p>Chư thuyết trung đệ nhất</p>
    <p>Giảng rộng đoạn văn trên này, ông Phan Văn Hùm, trong quyển Phật giáo triết học đã viết như sau:</p>
    <p>“Nhất thiết vạn hữu trong hiện tượng giới đều sanh diệt vô thường. Sanh diệt vô thường như thế, nguyên là vì không có tự tánh, mà bởi nhân duyên mê vọng nên sanh ra giả hữu.</p>
    <p>Thế tục vì vọng kiến, nên chấp lấy cái giả hữu đó. Chân trí thời phủ định giả hữu mà đều nhận thấy là không ... Siêu việt được tất cả hữu và vô là cái quan niệm tuyệt đối ấy. Muốn đạt được cái quan niệm tuyệt đối ấy, phải biết rằng chư pháp đều do nhân duyên sanh ra.</p>
    <p>Chư pháp tuy là hữu nhưng mà là phi thường hữu. Hữu, mà phi thường hữu là giả hữu. Giả hữu tuy là hữu mà phi hữu. Hữu mà phi hữu, thời cùng với vô có khác gì? Cho nên chư pháp tuy là vạn hữu, nhưng uyển nhiên là không .</p>
    <p>Lý thể của chân như, tuy là không tịch, bất sanh diệt, mà bởi nó sanh ra chư pháp, cho nên nó là căn của giả hữu. Đã là căn của giả hữu, thời mặc dù lý thể của chân như là không, thật ra nó là phi không. Như thế, chân như là không mà không thật là không cho nên cùng với hữu có khác gì? Vì thế, rốt lại, chân như tuy là không tịch, mà nó uyển nhiên là hữu.</p>
    <p>Hữu, không, hai cái toàn nhiên cùng nhau hỗn hiệp.</p>
    <p>Trung đạo ra ngoài chỗ chấp hữu cùng chấp không ”.</p>
    <h3 id="tam-luan-ba-thoi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. Ba thời giáo lý</h3>
    <p>Trong phần tôn chỉ và giáo lý căn bản nói trên, chúng ta thấy Tam Luận tôn bác tất cả các tôn phái của Tiểu thừa và một phần của Đại thừa. Nhưng dù Tiểu thừa hay Đại thừa, cũng là dựa trên giáo lý của đức Phật cả. Vậy, bác các tôn phái trong đạo Phật, tức là gián tiếp bác giáo lý của Phật chăng?</p>
    <p>Thật ra, không phải thế. Tất cả lời dạy của đức Phật chỉ có một tánh chất chung là sự giải thoát, như tất cả nước đại dương chỉ có một mùi vị là mặn. Phật nói ra các pháp môn, đều để đối trị những phiền não của chúng sanh. Người lương y giỏi tùy theo chứng bịnh mà cho thuốc, thuốc không cao thấp, lành bịnh là hay. Cũng thế, căn cơ chúng sanh không đồng nhau, cho nên pháp môn cũng tùy theo đó mà có sai biệt.</p>
    <p>Theo Tam Luận tôn, thì giáo lý của đức Phật chia làm ba thời kỳ:</p>
      <ul>
        <li>Thời kỳ thứ nhứt, tại vườn Lộc Giả vì các bậc căn trí hẹp hòi, Phật nói pháp Tiểu thừa, tâm cảnh đều có. Trong thời kỳ này vì cần phải phá cái chấp về tự tánh, thần ngã của ngoại đạo, nên Phật nói “pháp duyên sanh”, xác định là thật có.</li>
        <li>Thời kỳ thứ hai, Phật vì các bậc căn trí bậc trung, nói “pháp tướng Đại thừa”, chỉ rõ đạo lý duy thức “cảnh không tâm có” (thế giới hiện tượng không thật có nhưng tâm thức thật có). Cũng trong thời kỳ này, Phật lần hồi phá trừ chỗ chấp của Nhị thừa về lý duyên sanh thật có, mà nói lý duyên sanh ấy chỉ là giả dối như tuồng có mà thôi, vì họ sợ về chỗ chơn không, nên phải để “giả hữu” lại để dìu dắt họ.</li>
        <li>Thời kỳ thứ ba, Phật vì các bậc thượng căn thượng trí nói ra giáo lý “vô tướng Đại thừa”, biện bạch tâm cảnh đều không, một mực bình đẳng là chơn liễu nghĩa. Đến thời kỳ này mới thật là chỗ rốt ráo của Đại thừa, chủ trương duyên sanh ấy tức là tánh không, một mực bình đẳng, viên dung cả hai đế (chơn đế, tục đế) không ngại.</li>
      </ul>
    <p>Tóm lại, thời kỳ thứ nhất, phá trừ ngoại đạo, chỉ dạy Tiểu thừa với giáo lý tâm cảnh đều có. Thời kỳ thứ hai, thông cả Tiểu thừa và một phần của Đại thừa, (tam thừa) với giáo lý cảnh không, tâm có. Thời kỳ thứ ba, chỉ có nhất thừa, với giáo lý tâm cảnh đều không, nhưng cái không đây tức là chơn “chơn không, diệu hữu”.</p>
    <h3 id="tam-luan-phuong-phap" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. Phương pháp tu hành</h3>
    <p>Chúng ta đã thấy ở các phần ở trên, chủ trương của Tam Luận tôn là phá tà, và do chỗ phá tà ấy là hiển chánh. Vậy thì phương pháp tu hành của tôn này là làm sao nhận rõ được những chỗ sai lầm chấp trước của ngoại đạo và các tôn phái khác, tức là chứng ngộ. Muốn vậy, tức phải thực hành pháp quán “bát bất trung đạo”.</p>
    <p><strong>Bát bất tức là:</strong> Bất sanh, bất diệt; bất đoạn, bất thường; bất nhứt, bất dị; bất khứ, bất lai. Không ngộ được tám món ấy tức là không rõ chơn đế và tục đế; mà không rõ được chơn đế và tục đế thì cũng không thể nào nhận thấy được ý nghĩa của trung đạo.</p>
    <p>Pháp quán này có nhiều giai đoạn, mỗi giai đoạn quán về một phần của “bát bất”; chẳng hạn giai đoạn thứ nhứt quán về “bất sanh, bất diệt”; giai đoạn thứ hai quán về “bất đoạn, bất thường” v.v...</p>
    <p>Trong mỗi giai đoạn như thế phải quán năm câu:</p>
    <p><strong>1. Câu thứ nhứt:</strong> “Thật có sanh, thật có diệt”. Ấy là giả thiết thật có sanh diệt như thế gian thường chấp, để mà bác. Chấp như thế gọi là đơn tục (đứng riêng về mặt thế tục), tức nhiên là thiên chấp (chấp một bên), chưa hiệp với trung đạo.</p>
    <p><strong>2. Câu thứ hai:</strong> “Không sanh không diệt”. Ấy là chấp không sanh không diệt làm thật, để mà bác. Chấp như thế gọi là đơn chơn, cũng là thiên chấp, không hiệp với trung đạo.</p>
    <p><strong>3. Câu thứ ba:</strong> “Giả sanh giả diệt”. Ấy là giả lập có sự sanh diệt phát xuất từ nơi bất sanh bất diệt. Đây tức là trung đạo về thế tục.</p>
    <p><strong>4. Câu thứ tư:</strong> “Giả bất sanh, giả bất diệt”. Nếu sanh diệt đã giả, thời sự bất sanh bất diệt cũng là giả. Ấy là trung đạo về chơn đế.</p>
    <p><strong>5. Câu thứ năm:</strong> “Không phải sanh diệt, mà cũng không phải là không sanh diệt”. Đây là dung hiệp cả tục đế và chơn đế mà tìm ra lý trung đạo. Thật vậy, thật tướng của pháp giới không sanh diệt , mà cũng không phải không sanh diệt. Đến đây là bặt dứt lời nói phô, tâm niệm lự, mà chỉ nhờ trực quan mới đạt tới.</p>
    <p>Trong năm câu này, thì ba câu cuối (từ câu thứ ba đến câu thứ năm) thường gọi là tam trung (ba lý trung đạo). Vì thế cho nên trong pháp quán này, người ta thường nói: dùng năm câu và ba lý trung đạo để quán sát.</p>
    <p>Trên đây là chỉ đưa ra một số thí dụ về một giai đoạn trong pháp “quán trung đạo bát bất”. Sau khi quán hết giai đoạn thứ nhất “bất sanh, bất diệt”, hành giả tiếp tục giai đoạn thứ hai là “bất đoạn, bất thường”. Và cứ như thế mà quán cho đến hết tám cái “bất”.</p>
    <p>Đây là pháp quán riêng biệt của Tam Luận tôn. Ngoài ra trên đường tu hành, hành giả còn tùy theo căn cơ mà tu các pháp môn khác như Lục độ vạn hạnh.</p>
    <h3 id="tam-luan-qua-vi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. Quả vị tu chứng</h3>
    <p>Giáo lý đã có phân chia thành chơn đế và tục đế, thì quả vị tu chứng cũng phải đứng về cả hai phương diện mà xét.</p>
    <p><strong>1. Chơn đế:</strong> Nếu đứng về phương diện chơn đế mà xét thì không có vấn đề chứng hay không chứng, thành Phật hay không thành Phật, vì mê ngộ vốn không, nhiễm tịnh đều bình đẳng, hết thảy chúng sanh xưa nay là Phật rồi.</p>
    <p><strong>2. Tục đế:</strong> Nếu đứng về phương diện tục đế, thì căn cơ chúng sanh không giống nhau, nên sự tu chứng cũng có chậm có mau. Với những căn cơ rất lanh lợi, thì trong một niệm có thể thành tựu “chánh quán bát bất”, chứng được quả Phật. Trái lại, với những căn cơ chậm lụt, thì trải qua ba đại kiếp tu hành lục độ vạn hạnh, mới được thành Phật. Nếu tuần tự mà tiến thì phải trải qua 52 quả vị. Trong các tôn khác quý độc giả cũng thường nghe nói đến 52 quả vị, nhưng chúng tôi chỉ nêu danh mà không nói rõ nội dung, đến Tam Luận tôn này, chúng tôi tưởng nên trình bày rõ một lần về các quả vị ấy, và để sau nầy, khi qua các tôn khác, nếu quý độc giả có gặp lại 52 quả vị này, cũng sẽ không còn bỡ ngỡ. 52 quả vị ấy là:</p>
    <p>Thập tín (mười bậc lấy đức tin làm gốc):</p>
    <p>1. Tín tâm; 2. Tinh tấn tâm; 3. Niệm tâm; 4. Định tâm; 5. Huệ tâm; 6. Thí tâm; 7. Giới tâm; 8. Hộ tâm; 9. Nguyện tâm; 10. Hồi hướng tâm.</p>
    <p><strong>Thập trụ:</strong> Trụ là an trụ. Các vị Bồ tát khi mới phát tâm, an trụ nơi mười bực này mà tu hành, trên cầu chứng được quả Phật, dưới hóa độ chúng sanh. Thập trụ là:</p>
    <p>1. Pháp tâm trụ; 2. Trị địa trụ; 3. Tu hành trụ; 4. Sanh quý trụ; 5. Phương tiện trụ; 6. Chánh tâm trụ; 7. Bất thối trụ; 8. Đồng chơn trụ; 9. Pháp vương tử trụ; 10. Quán đảnh trụ.</p>
    <p><strong>Thập hạnh:</strong> Mười bực này chú trọng tu hạnh lục độ nhiều hơn các hạnh khác, nên gọi là hạnh. Mười hạnh là:</p>
    <p>1. Hoan hỷ hạnh; 2. Nhiêu ích hạnh; 3. Vô nhuế hạnh; 4. Vô tận hạnh; 5. Ly si loạn hạnh; 6. Thiện hiện hạnh; 7. Vô trước hạnh; 8. Tôn trọng hạnh; 9. Thiện pháp hạnh; 10. Chơn thiệt hạnh</p>
    <p><strong>Thập hồi hướng:</strong> Hồi nghĩa là xoay về, Hướng tức là xu hướng. Hành giả đem mười hạnh này mà quy hướng về ba nơi sau đây:</p>
    <p>a) Xoay sự về lý, lấy chơn như thật tế mà làm chỗ chứng.</p>
    <p>b) Xoay nhơn về quả, lấy đạo vô thượng Bồ đề làm chỗ sở cầu.</p>
    <p>c) Xoay mình về nơi người, một lòng bình đẳng, phổ độ chúng sanh.</p>
    <p>Mười hồi hướng là:</p>
    <p>1. Cứu độ chúng sanh, ly chúng sanh tướng hồi hướng; nghĩa là cứu giúp chúng sanh mà không chấp trước về sự cứu giúp.</p>
    <p>2. Bất hoại hồi hướng; nghĩa là không bao giờ thối tâm cứu giúp chúng sanh.</p>
    <p><strong>3. Đẳng chư Phật hồi hướng:</strong> nghĩa là lòng từ bi cứu giúp chúng sanh cũng bằng chư Phật.</p>
    <p>4. Chí nhứt thế xứ hồi hướng; nghĩa là lòng cứu giúp chúng sanh mỗi việc đều chu đáo.</p>
    <p>5. Vô tận công đức tạng hồi hướng; nghĩa là chất chứa công đức vô tận.</p>
    <p>6. Tùy thuận nhứt thiết kiên cố thiện căn hồi hướng; nghĩa là thuận theo hết thảy căn lành bền chặt.</p>
    <p>7. Đẳng tâm tùy thuận nhứt thế chúng sanh hồi hướng; nghĩa là đem tâm bình đẳng tùy thuận hết thảy chúng sanh.</p>
    <p>8. Như tướng hồi hướng; nghĩa là làm các công đức hồi hướng về tự tánh chơn như.</p>
    <p>9. Vô trước vô phược giải thoát tâm hồi hướng; nghĩa là không chấp trước không ràng buộc, một lòng giải thoát.</p>
    <p>10. Pháp giới vô lượng hồi hướng; nghĩa là hướng về pháp giới không cùng tận.</p>
    <p>Bốn mươi quả vị trên này (Thập tín, Thập trụ, Thập hạnh, Thập hồi hướng) nói về thời gian tu tập thì thuộc vào kiếp A tăng kỳ thứ nhứt.</p>
    <p><strong>Thập địa:</strong> Mười bực này, vì tóm thâu các công đức hữu vi và vô vi, dùng làm tự tánh, cùng làm chỗ nương dựa chắc chắn hơn cả cho sự tu hành, nên gọi là Địa. Mười địa là:</p>
    <p>1. Hoan hỷ địa; 2. Ly khổ địa; 3. Pháp quang địa; 4. Diệm huệ địa; 5. Nan thắng địa; 6. Hiện tiền địa; 7. Viễn hành địa; 8. Bất động địa; 9. Thiện huệ địa; 10. Pháp vân địa</p>
    <p><strong>Trong thập địa, mỗi địa còn có ba tâm:</strong> Nhập, Trụ, Xuất. Khi vừa bước vào một bực nào, gọi là nhập tâm. Trong lúc ở yên trong bực ấy mà tu, gọi là trụ tâm. Sau khi tu tập lâu rồi, cần bước qua bực khác gọi là xuất tâm. Ba tâm ấy đều phải trải qua trăm ngàn số kiếp. Từ khi nhập tâm về Sơ địa (tức Hoan hỷ địa) đến Thất địa (tức Viễn hành địa) phải trải qua suốt một kiếp A tăng kỳ thứ hai. Từ Bát địa (tức Bất động địa) đến Thập địa (tức Pháp vân địa) thuộc về kiếp A tăng kỳ thứ ba.</p>
    <p><strong>Đẳng giác:</strong> Khi đã mãn quả Thập địa thì gọi là Đẳng giác, là địa vị đã gần đến quả Phật.</p>
    <p><strong>Diệu giác:</strong> Tức là Phật quả, tự mình đã giác ngộ, lại giác ngộ cho người, trí giác ngộ và công phu tu hành đều được đầy đủ, không thể nghĩ bàn nên gọi là Diệu giác. Bực này vì các lậu nghiệp đã hết sạch và không còn pháp gì phải học nữa, nên cũng gọi là Vô học đạo.</p>
    <h3 id="tam-luan-ket-luan" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. Kết luận</h3>
    <p>Như chúng ta đã thấy ở các phần trên, Tam Luận tôn chủ trương “lấy phá làm lập”, phá tất cả những sự chấp trước của ngoại đạo, của Tiểu thừa Tỳ đàm, của Thành Thật tôn và của cả một số người tu theo Đại thừa. Nhận chân được những sự sai lầm ấy tức là ngộ rồi đấy. Con đường đi đến chân lý không đâu khác hơn con đường mình đang đi. Nhưng muốn khỏi lạc đường và chậm bước, thì phải dẹp tất cả những hình bóng phỉnh phờ và những chướng ngại vật trên đường đi ấy. Một khi sự phá dẹp hoàn thành thì chân lý tự nhiên hiện bày.</p>
    <p>Theo thiển kiến chúng tôi, Tam Luận tôn không phải là một con đường Tu như các tôn khác, mà đúng hơn là một cửa ải: những hành giả muốn đi từ Tiểu thừa hay Đại thừa Thỉ giáo sang Đại thừa Đốn giáo, hay Viên giáo thì phải đi ngang cửa ải Tam Luận tôn. Đến cửa ải này, hành giả bị lục soát một cách kỹ lưỡng, nếu ai còn mang theo một món hành lý “chấp trước” gì, thì không thể qua cửa ải này được. Hành giả khi đi qua cửa ải này là phải thông suốt các vấn đề: có, không, sanh, diệt, thường, đọan, nhất, dị, v.v...</p>
    <p>Vậy chúng tôi mong mỏi quý vị Phật tử muốn đi xa vào thế giới Trung đạo hay Viên giáo thì hãy nghiên cứu cho kỹ Tam Luận tôn.</p>
    <p>Chúc quý độc giả thành công.</p>
  </section>
  <section id="cau-xa-tong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">9. Câu Xá tông hay là Hữu tông</h2>
    <h3 id="cau-xa-duyen-khoi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Duyên khởi lập tôn</h3>
    <p>Tôn này thuộc về Tiểu thừa, phát xuất từ bộ luận Câu Xá của ngài Thế Thân. Bộ luận Câu Xá lại dựa theo ý nghĩa của bộ kinh Đại Tỳ Bà Sa (Mahavibhasacastra) mà thành lập. Bộ luận Câu Xá được Ngài Trần Chân Đế dịch và truyền sang Tàu rất sớm, nhưng về sau bị thất truyền. Trong giai đoạn đầu nầy, Câu Xá tôn chưa thành một tôn phái riêng biệt ở Trung Hoa. Chỉ đến khi ngài Huyền Trang đi thỉnh kinh ở Ấn Độ trở về, đem dịch lại bộ luận Câu Xá và đệ tử của Ngài là Đại sư Phổ Quang dựa theo bộ luận nói trên mà làm ra bộ “Câu Xá thuật ký”, và ngài Pháp Bảo làm bộ “Câu Xá luận sớ” thì Câu Xá tôn mới thành một tôn và được thạnh hành ở Trung Hoa. Nhưng hết đời Đường (từ đầu thế kỷ thứ VII đến cuối thế kỷ thứ IX) thì tôn này lại dần dần suy tàn và nhường địa vị quan trọng cho những tôn phái Đại thừa khác, thích hợp với triết học và tâm lý của người Trung Hoa hơn.</p>
    <h3 id="cau-xa-ton-chi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Tôn chỉ và giáo lý căn bản</h3>
    <p><strong>1. Tôn chỉ:</strong> Tôn này chủ trương “ngã không pháp hữu”, nghĩa là không có thật ngã nhưng có thật pháp.</p>
    <p>Đối với các tôn giáo khác thì chủ trương có một cái thật ngã, chủ tế thường nhất, một cái linh hồn trường tồn bất biến, mặc dù mọi sự vật đổi thay, sống hay chết. Theo Câu Xá tôn thì một cái ngã như thế không thể có được, vì mọi sự vật trong vũ trụ, kể cả con người đều là giả hợp mà thành, chứ không có một vật gì đồng nhất và bất biến. Đây cũng là chủ trương chung của các giáo phái khác trong Phật giáo. Điểm sai khác giữa Câu Xá tôn với các tôn phái khác là: Câu Xá tôn thì chủ trương Pháp hữu, trong khi các giáo phái khác thì bảo rằng Pháp không. Pháp hữu, nghĩa là bản thể thật tại của các pháp, hay nói một cách dễ hiểu hơn, nguyên liệu sanh ra các sự vật trong vũ trụ, là thường có, là có thật. Thí dụ: Con người không có thật ngã, nhưng những nguyên liệu làm ra con người, như ngũ uẩn, tứ đại là thật có.</p>
    <p><strong>2. Vũ trụ quan:</strong> Câu Xá tôn phân biệt vũ trụ vạn hữu ra làm hữu vi pháp và vô vi pháp. Hữu vi pháp chỉ về hiện tượng trong hiện tượng giới, có sanh diệt, chuyển biến. Vô vi pháp chỉ về cảnh giới thường trụ, không sanh diệt, chuyển biến, cũng tức là chỉ về lý thể.</p>
    <p>Hữu vi pháp gồm có 72 món, và vô vi pháp gồm có 3 món, cộng tất cả là 75 món, hay 75 pháp.</p>
    <p>ĐỒ BIỂU VỀ 75 PHÁP</p>
    <p>Trong phạm vi nhỏ hẹp của tập sách, chúng tôi không thể đi sâu để giải thích từng pháp một được. Tuy thế để có một ý niệm về các loại pháp ấy, chúng tôi xin sơ lược đại khái sau đây:</p>
    <p><strong>Sắc pháp:</strong> Phàm cái có thể hư nát và có tánh cách chướng ngại đều thuộc về sắc pháp. Trong 11 món thuộc về sắc pháp, gồm có năm căn và năm cảnh, thì độc giả cũng đã biết rồi, không cần phải giải nữa; còn món thứ 11 là vô biểu sắc cần phải giải thích. Vô biểu sắc là cái sắc pháp không biểu hiện ra ngoài (pháp trần), nó là đối tượng của ý căn.</p>
    <p><strong>Tâm pháp:</strong> Cũng gọi là Tâm vương, vì nó có năng lực chủ động như ông vua có quyền chủ trương trong một nước. Tâm vương có ba tên: Tâm, ý và thức. Theo Câu Xá luận thì: “nhóm góp các tập quán mà khởi ra gọi là tâm; nghĩ ngợi gọi là ý; phân biệt gọi là thức”.</p>
    <p><strong>Tâm sở pháp:</strong> Là cái pháp sở hữu phụ thuộc của tâm vương, như các ông quan phụ thuộc dưới quyền sai sử của ông vua, hay các nhân viên phụ thuộc dưới sự điều khiển của ông chủ.</p>
    <p><strong>Bất tương ưng hành pháp:</strong> Có thể gọi tắt là cái pháp bất tương ưng, nghĩa là các pháp không hẳn thuộc về sắc, mà cũng không hẳn thuộc về tâm, nhưng là kết quả của sự tiếp xúc giữa tâm và sắc. Thí dụ như “sự được” là một pháp bất tương ưng. Khi ta được một cái gì, “sự được” ấy không thuộc về sắc pháp, cũng không thuộc về tâm pháp. “Cái mà ta được” là sắc pháp, “cái nỗi vui mừng” khi được là tâm pháp, còn “sự được” không thể liệt vào sắc pháp hay tâm pháp được, vì thế cho nên gọi là bất tương ưng hành pháp.</p>
    <p><strong>Vô vi pháp:</strong> Nghĩa là những pháp không sanh diệt, chuyển biến, vượt ra ngoài sự đối đãi.Vô vi gồm có ba pháp là: Trạch diệt vô vi, Phi trạch diệt vô vi và Hư không vô vi.</p>
    <p>Bảy mươi lăm pháp này bao gồm tất cả sự vật trong vũ trụ.</p>
    <p><strong>Sự vật trong vũ trụ chia ra làm hai loại lớn là:</strong> hữu tình thế gian và khí thế gian.</p>
      <ul>
        <li>Hữu tình thế gian tức là toàn thể chúng sanh, có sự sống.</li>
        <li>Khí thế gian tức là hoàn cảnh mà chúng sanh nương vào để sống như đất cát, núi sông, nhà cửa, v.v...</li>
      </ul>
    <p>Xét về phương diện thời gian, thì vũ trụ là vô thỉ vô chung, nghĩa là không có lúc bắt đầu và cũng không có lúc chung cục, mà chỉ có sự thay đổi, biến chuyển thôi. Trong vũ trụ có hằng hà sa thế giới, thế giới này thành, thì thế giới kia hoại, đắp đổi cho nhau. Tuy thế, riêng mỗi thế giới, từ khi sanh thành cho đến khi tiêu diệt, phải qua bốn giai đoạn (thành, trụ, hoại, không) gồm một đại kiếp, tức là một ngàn hai trăm tám chục triệu năm (1.280.000.000).</p>
    <p>Xét về phương diện không gian, thì vũ trụ rộng lớn không thể tưởng tượng được. Trước tiên đơn vị nhỏ nhất của vũ trụ là thế giới (như thế giới nhỏ mà chúng ta đang ở đây).</p>
    <p>Họp một ngàn thế giới mới thành được một tiểu thiên thế giới; họp một ngàn tiểu thiên thế giới mới thành một trung thiên thế giới; họp một ngàn trung thiên thế giới mới thành một đại thiên thế giới. Như thế một đại thiên thế giới gồm(1.000x1.000x1.000) một ngàn triệu thế giới nhỏ (như thế giới chúng ta đang ở đây). Nhưng trong vũ trụ không phải chỉ có một đại thiên thế giới mà có vô lượng vô số đại thiên thế giới; cho nên trong kinh thường nói là: thập phương vi trần thế giới (mười phương thế giới nhiều như cát bụi) hay thập phương hằng hà sa thế giới (mười phương thế giới nhiều như cát sông Hằng).</p>
    <p>Xét về phương diện phẩm chất thì vũ trụ chia làm ba từng bực cao thấp khác nhau, cũng gọi là tam giới, hay ba cõi là: dục giới, sắc giới, vô sắc giới.</p>
    <p>Dục giới là cõi của loài hữu tình chưa xa lìa được dâm dục và thực dục. Trong dục giới có sáu loại chúng sanh là thiên, nhơn, a tu la, súc sanh, ngạ quỷ, địa ngục.</p>
    <p>Sắc giới là cõi của loài hữu tình có hình sắc tốt đẹp, đã rời bỏ được dâm dục và thực dục. Cõi này có bốn bực là: Ly sanh hỷ lạc địa, Định sanh hỷ dục địa, Ly hỷ diệu lạc địa và Xả niệm thanh tịnh địa.</p>
    <p>Vô sắc giới là cõi không có hình sắc. Các loài hữu tình sanh trong cõi này chỉ có tâm thức mà thôi. Cõi này cũng chia làm bốn từng bực cao thấp, thông thường gọi là Tứ không thiên: Không vô biên xứ, Vô sở hữu xứ và Phi tưởng phi phi tưởng xứ.</p>
    <p><strong>3. Nhân sanh quan:</strong> Chúng sanh nói chung, và con người nói riêng, do đâu mà có? Và đời sống của chúng sanh có giá trị như thế nào?</p>
    <p>a) Theo Câu Xá tôn, thì chúng sanh sở dĩ bị xoay chuyển trong vòng sanh tử luân hồi, là do “nghiệp cảm duyên khởi”, nghĩa là do mê hoặc mà tạo nghiệp, do tạo nghiệp làm nhân mà cảm thọ các quả báo.</p>
    <p>Thế nào gọi là hoặc? Họăc nghĩa là mê mờ, không sáng suốt, không biết đâu là phải, đâu là trái tức là vô minh, mê vọng. Hoặc có hai loại: bổn hoặc và tùy hoặc. Bổn hoặc là sự mê lầm cội gốc, cũng gọi là căn bản phiền não, như tham, sân, si, mạn, nghi, ác kiến. Tùy hoặc là những mê lầm dựa theo bổn hoặc mà phát sanh, cũng gọi là tùy phiền não.</p>
    <p><strong>Trong sáu bổn hoặc nói trên, thì năm hoặc đầu:</strong> tham, sân, si, mạn, nghi, vì tánh chất chậm lụt, ăn sâu gốc rễ trong thâm tâm chúng ta, rất khó dứt trừ, nên gọi là ngũ độn sử (sử là sai sử, xúi sử; những hoặc này sai khiến một cách tiềm tàng, sâu kín loài hữu tình làm cho chúng sanh cứ luẩn quẩn trong chỗ mê lầm nên gọi là độn sử).</p>
    <p>Còn hoặc thứ sáu là ác kiến, vì tánh chất nó lanh lẹ, không ăn sâu gốc rễ trong thâm tâm và dễ dứt trừ, nên gọi là lợi sử. Ác kiến hay lợi sử gồm có năm thứ là: Thân kiến, Biên kiến, Tà kiến, Kiến thủ, và Giới cấm thủ.</p>
    <p><strong>Thân kiến:</strong> là chấp một cách sai lầm rằng cái thân do ngũ uẩn giả hiệp này là có thật ngã.</p>
    <p><strong>Biên kiến:</strong> là chấp sai lầm rằng cái thân này chết rồi thì tiêu diệt hẳn, không còn gì cả (đoạn kiến) hay trái lại, chấp cái thân này chết rồi, linh hồn vẫn còn mãi mãi (thường kiến). Những sự chấp ấy làm mất hẳn lý trung đạo, nên gọi là biên kiến.</p>
    <p><strong>Tà kiến:</strong> là chấp những đạo lý mơ hồ tà bậy và bài bác những lý nhơn quả chơn chánh.</p>
    <p><strong>Kiến thủ:</strong> là chấp chặt kiến giải sai lầm của mình, mà không chịu theo đời các bậc hiển thánh.</p>
    <p><strong>Giới cấm thủ:</strong> là giữ giới sai lầm như những giới khổ hạnh của ngoại đạo v.v...</p>
    <p>Do những bổn hoặc và ác kiến nói trên sai sử, chúng sanh tạo ra các nghiệp, làm nhân quả cho nhau và khiến cho chúng sanh phải xoay vần mãi trong sanh tử luân hồi. Nghiệp có ba thứ: ý nghiệp, tức là sự suy nghĩ, hành động của ý niệm; ngữ nghiệp, tức là sự nói năng; thân nghiệp, tức là những hành động về thân xác.</p>
    <p><strong>Nghiệp có ba tánh là:</strong> lành, dữ và vô ký (nghĩa là trung bình, không lành, không dữ). Nghiệp lành thì có quả báo lành, nghiệp dữ thì có quả báo dữ. Còn nghiệp vô ký thì có quả báo không lành không dữ.</p>
    <p>Nghiệp lành, cũng như nghiệp dữ, đều có mười thứ:</p>
    <p><strong>Mười nghiệp dữ là:</strong> giết hại, trộm cắp, tà dâm, nói dối gạt, nói thêu dệt, nói chia rẽ, nói độc ác, tham lam, giận dữ, si mê.</p>
    <p><strong>Mười nghiệp lành là:</strong> không giết hại, không trộm cắp, không tà dâm, không nói dối gạt, không nói thêu dệt, không nói chia rẽ, không nói độc ác, không tham lam, không giận dữ, không si mê.</p>
    <p>Quả báo của mười nghiệp lành và mười nghiệp dữ có mau và chậm, nghĩa là có khi xảy ra trong một đời, có khi hai ba đời sau mới thọ quả báo.</p>
    <p>Khi thời kỳ cảm quả chịu báo đã xác định, thì gọi là định nghiệp. Trái lại, thì gọi là bất định nghiệp. Bất định nghiệp có hai thứ: một là quả báo đã định mà thời kỳ chịu quả báo chưa định; hai là cả quả báo và thời kỳ chịu quả báo đều chưa định.</p>
    <p>b) Trên đây là nói lý do vì sao có sự hiện diện của chúng sanh trong thế giới này. Dưới đây, chúng tôi sẽ nói đến giá trị của sự hiện diện ấy theo quan niệm của Câu Xá tôn, tức cũng là quan niệm của Tiểu thừa Phật giáo.</p>
    <p>Quan niệm ấy, không xa lạ gì đối với chúng ta. Đó là cõi đời là một biển khổ, trong ấy, chúng sanh đang lặn hụp, trôi lăn, sống chết. Con người khổ vì sanh, lão, bệnh, tử. Con người khổ vì yêu nhau mà phải xa lìa, ghét nhau mà phải chung sống, muốn một đàng mà thực tế đưa đi một nẻo. Con người khổ vì tai trời, nạn nước: bão, lụt, chiến tranh, trộm cướp v.v... Con người khổ vì sống trong một hoàn cảnh mê mờ, tối tăm, không biết đâu là thật, đâu là giả, đâu là hạnh phúc chân thật, đâu là ảo ảnh giả dối. Con người khổ vì mong được trường tồn mà cõi đời lại vô thường, luôn luôn biến đổi, có đó không đó, còn đó mất đó, như một trò mộng huyễn. Con người khổ vì tưởng rằng có một cái thật ngã làm nòng cốt cho sự sống, thuần nhất, tự tại, ngờ đâu cái Ngã ấy là giả dối, không có thật, và bị hoàn cảnh chi phối làm cho điêu đứng, đảo điên.</p>
    <p>Tóm lại, cõi đời là một bể khổ làm bằng nước mắt của tất cả chúng sanh.</p>
    <h3 id="cau-xa-phuong-phap" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. Phương pháp tu hành</h3>
    <p>1. Tứ diệu đế</p>
    <p>Muốn giải thoát ra ngoài bể khổ mênh mông của cõi đời, Câu Xá tôn chủ trương phải tu theo pháp “Tứ diệu đế”. Tứ diệu đế tức là bốn lẽ chân thật đưa người tu hành từ cảnh mê đến cảnh ngộ, từ cõi Ta bà đau khổ, đến cảnh giới Niết bàn tịch tịnh.</p>
      <ul>
        <li>Diệu đế thứ nhất chỉ rõ cho người tu hành thấy cõi đời là đau khổ.</li>
        <li>Diệu đế thứ hai chỉ rõ cho người tu hành thấy được nguyên nhân của sự đau khổ trong cõi Ta bà.</li>
        <li>Diệu đế thứ ba chỉ rõ cảnh giới an lạc sau khi ra khỏi cõi đời đau khổ.</li>
        <li>Diệu đế thứ tư chỉ rõ con đường tu hành để đi đến cảnh giới an lạc của Niết bàn.</li>
      </ul>
    <p><strong>Bốn Diệu đế ấy tức là:</strong> khổ, tập, diệt, đạo vậy.</p>
    <p>2. Thập nhị nhân duyên</p>
    <p>Với những căn cơ lanh lợi, thì có thể tu theo pháp Thập nhị nhân duyên. Thập nhị nhân duyên là 12 nhân duyên kế tiếp theo nhau, làm nhân, làm quả, khiến cho chúng sanh phải mãi mãi xoay vần trong biển khổ sanh tử luân hồi. Mười hai nhân duyên ấy là: vô minh, hành, thức, danh sắc, lục nhập, xúc, thọ, ái, thủ, hữu, sanh, lão tử. Mười hai nhân duyên này như mười hai vòng xích nối liền với nhau làm thành một chuỗi xích, không biết đâu là đầu, đâu là cuối. Nếu cắt đứt được một vòng xích thì chuỗi xích ấy tất phải phải đứt đọan. Đối với kẻ tu hành, muốn chấm dứt sanh tử luân hồi, thì cái mắc xích cần phải bị cắt đứt là “ái”. Ái ở đây tức là luyến ái. Vì luyến ái nên mới có thủ cho mình, rồi “thủ” sanh ra “hữu”. Và từ đó, cái vòng sanh tử lại tái diễn. Vậy không có “ái”, thì không có “hữu”, không có “hữu” thì không có “sanh”, không có “sanh” thì không có “lão tử”, nghĩa là không có khổ đau.</p>
    <h3 id="cau-xa-qua-vi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. Quả vị tu chứng</h3>
    <p>1. Người tu theo pháp Tứ diệu đế , nếu mau lắm thì cũng phải trải qua ba đời, còn nếu chậm, thì phải trải qua 60 kiếp, mới chứng được A la hán, là cõi cao nhất của hàng Thanh văn.</p>
    <p>Trước khi chứng được quả vị A la hán, hành giả tuần tự chứng các quả dưới đây:</p>
    <p>Tu đà hoàn , Tàu dịch là Nhập lưu, hay Dự lưu, nghĩa là bắt đầu nhập vào dòng Thánh.</p>
    <p>Tư đà hàm , Tàu dịch là Nhất lai, nghĩa là còn phải đầu thai vào cõi Dục giới một lần cuối cùng nữa, để tu hành cho rốt ráo, trước khi vĩnh viễn xa rời cõi này.</p>
    <p>A na hàm , Tàu dịch là Bất-lai, nghĩa là không còn phải đầu thai vào cõi Dục giới nữa. Hết bực này là đến quả vị A la hán.</p>
    <p>A la hán , Tàu dịch là Ứng cúng hay Vô sanh, nghĩa là dứt bỏ được cái điều mê lầm trong cõi Sắc giới và Vô sắc giới, không còn phiền não, không còn chịu sanh tử luân hồi, vượt ra khỏi ba cõi, hưởng sự cúng dường của thiên và nhân. Bậc này gọi là bậc Vô học, nghĩa là không phải tu học pháp gì nữa.</p>
    <p>2. Đối với lối tu Duyên giác , nghĩa là tu theo lối quán 12 nhân duyên, thì quả vị không có chia ra nhiều tầng bậc, chẳng qua khi đang tu hành thì gọi là Duyên giác hướng, nghĩa là đi lần tới mục đích của sự tu hành là quả Duyên giác. Còn khi tu được đầy đủ, dứt mối mê lầm, chứng được chân lý, thường hưởng được cái vui giải thoát trong cảnh Niết bàn, thì gọi là Duyên giác quả. Vị chứng được quả này thì gọi là Bích Chi Phật, tức là vị Phật đã tự giải thoát cho mình, nhưng chưa có thể giác tha. Từ khi bắt đầu tu hành cho đến khi chứng quả Duyên giác, thời gian dài ngắn khác nhau tùy theo căn cơ của kẻ tu hành: với căn cơ lanh lợi thì ít ra cũng phải trải qua bốn đời tu luyện; với căn cơ chậm lụt thì phải trải qua 100 kiếp tu hành.</p>
    <h3 id="cau-xa-ket-luan" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. Kết luận</h3>
    <p>Câu Xá tôn, mặc dù chỉ là một tôn phái trong nhiều tôn phái của Tiểu thừa, nhưng có thể đại diện một cách gần đầy đủ cho phái Tiểu thừa Phật giáo. Bởi thế, Câu Xá tôn, chúng ta có thể hiểu một cách khá tường tận giáo lý căn bản và phương pháp tu hành của hàng Tiểu thừa trong quá khứ xa xưa.</p>
    <p>Nhưng từ khi tôn này được thành lập ở Trung Hoa đến bây giờ, thời gian đã trôi qua hơn một ngàn năm. Trong thời gian ấy, chắc cũng có nhiều sự biến đổi trong chi tiết. Chúng tôi rất tiếc không có nhiều tài liệu để nghiên cứu một cách đầy đủ những biến chuyển của tôn này qua thời gian và sự tồn tại của nó trong hiện tại như thế nào. Do đó, chúng tôi thành thật đề nghị với quý vị độc giả hãy xem bài này như một bài nghiên cứu về một trong mười tôn phái ở Trung Hoa, chứ chưa phải là một “con đường” hoàn bị, hướng dẫn trực tiếp quý vị vào sự tu luyện. Chúng tôi muốn nói, nếu quý vị thấy căn cơ mình thích hợp với giáo lý Tiểu thừa, mà muốn bắt tay vào sự tu luyện, thì cũng cần phải tìm đọc thêm nhiều nữa và nghiên cứu cho đến nơi đến chốn, để khỏi lạc hướng sai đường.</p>
  </section>
  <section id="thanh-that-tong">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">10. Thành Thật tông</h2>
    <h3 id="thanh-that-duyen-khoi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Duyên khởi lập tôn</h3>
    <p>Tôn này thuộc về Tiểu thừa, y cứ vào lý nghĩa của bộ Thành thật luận, do đó gọi là Thành Thật tôn.</p>
    <p>Bộ Thành thật luận do ngài Ha-lê-bạt-ma (Harivarman, Tàu dịch là Sư Tử Khải) học trò thông thái nhất của ngài Cưu-ma-la-đà (Kumaraladha) thuộc phái Tiểu thừa Tát-bà-đa làm ra, vào khoảng 900 năm, sau khi đức Phật Thích Ca nhập Niết bàn. Như chúng ta đã biết qua trong phần lịch sử truyền giáo ở Ấn Độ, sau khi đức Phật nhập Niết bàn, phái Tiểu thừa chia ra thành nhiều nhóm, giải thích kinh điển của Phật không giống nhau. Nhận thấy nguy cơ có thể làm cho Phật giáo suy đồi vì sự không đồng quan điểm về giáo lý của các chi phái ấy, ngài Ha-lê-bạt-ma đã đem hết tâm lực và trí tuệ uyên bác của mình, rút nghĩa lý tinh túy trong các bộ kinh luận của Tiểu thừa, làm ra bộ Thành thật luận. Sở dĩ ngài dùng hai chữ “Thành thật” để đặt tên cho bộ luận của mình là hàm ý muốn nói rằng: những lý nghĩa trong bộ luận của mình là chân thật, đúng đắn hoàn toàn với giáo lý căn bản trong ba tạng kinh điển của Phật. Mà thật như thế, bộ Thành thật luận là bộ luận có thể tiêu biểu một cách trung thực giáo lý của Tiểu thừa.</p>
    <p>Và cũng vì giá trị chân chính ấy mà bộ Thành thật luận được truyền sang Trung Hoa và được ngài Cưu-ma-la Thập trong đời Dao Tần dịch ra văn Tàu, gồm có tất cả 16 cuốn, chia ra làm 202 phẩm. Nhưng mặc dù được người đời hâm mộ, bộ luận này phải đợi đến đời Nam Bắc triều mới lập thành một tôn riêng tức là “Thành Thật tôn”.</p>
    <h3 id="thanh-that-ton-chi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Tôn chỉ và giáo lý căn bản</h3>
    <p>Tôn này chủ trương “nhân không, pháp không”.</p>
    <p>Như chúng ta đã biết, theo Câu Xá tôn thì nhơn không nhưng pháp lại có. Thành Thật tôn, đi xa hơn, cho rằng nhơn không thật, mà pháp cũng không thật.</p>
    <p>Để giải thích chủ trương “hai không” này, Thành Thật tôn lập ra hai môn là: Thế giới môn và Đệ nhất nghĩa môn.</p>
    <p><strong>1. Thế giới môn:</strong> Môn nghĩa đen là cửa; Thế giới môn tức là cửa của Thế giới; nói một cách thông thường như ngày nay thường nói, “thế giới môn” tức là đứng về “phương diện thế tục, phương diện tương đối” mà quan sát suy luận.</p>
    <p>Xét về phương diện tương đối, thì nhơn cũng có, mà pháp cũng có. Thật vậy, theo sự nhận xét thông thường, thì ta có một cái thân; ta đi, đứng, nằm, ngồi; ta có một cái tâm để suy xét, phân biệt, nhớ chuyện quá khứ, tính chuyện tương lai? Thế mà bảo mà không có ngã thì thật là vô lý. Lại trong kinh cũng thường nói: ta thường tự ngăn ngừa và gìn giữ lấy ta, làm lành tự mình được hưởng điều lành; làm dữ, tự mình chịu hưởng quả dữ. Vậy nếu bảo rằng không có người, không có ta, thì thật là trái với nhận xét và lý luận thông thường.</p>
    <p>Xét về các pháp cũng vậy, bảo rằng không thì cũng là vô lý. Nếu không có sắc pháp thì làm sao có thân ta, có cảnh giới chung quanh ta? Ừ, thì thân ta, do ngũ uẩn là sắc, thọ, tưởng, hành, thức, giả hợp mà thành. Những thứ này cũng là pháp cả. Thí dụ nếu ta chia chẻ cái sắc pháp ra thành nhỏ mãi, thì cuối cùng, dù nhỏ đến không thể chia chẻ được nữa, cũng vẫn là sắc, chứ sắc không thể chia ra mà thành “không” được. Ngược lại, nếu đã là không, thì không thể đem cái “không” ấy nhân lên mãi mà thành “có” được. Cũng như trong toán học, dù có nhân bao nhiêu lần với con số không (zero), thì không cũng vẫn là không.</p>
    <p><strong>2. Đệ nhất nghĩa môn:</strong> Đệ nhất nghĩa môn, hay chơn đế, là nói về phương diện tuyệt đối. Đứng về phương diện này mà xét, thì Ngã và Pháp đều là giả có, chứ không thật có. Khi năm uẩn hòa hợp thì tạm gọi là ta; khi năm uẩn tan rã thì cái ta ấy cũng không còn nữa. Vả lại cái ta ấy, trong lúc còn sanh tiền, thì mỗi phút, mỗi giây cũng đều có đổi thay, biến chuyển chứ không thuần nhất và bất biến.</p>
    <p>Các pháp cũng vậy, tương đối mà nói thì có, nhưng tuyệt đối mà xét thì cũng không thật có. Các pháp cũng do nhân duyên hòa hiệp mà tạm gọi là có, chứ không thể có một cách tuyệt đối, nghĩa là không thuần nhất và bất biến. Vì thế cho nên Phật dạy: “các pháp đều là như huyễn như hóa”. Kinh Bát Nhã cũng nói: “Sắc chẳng khác gì không , không chẳng khác gì sắc, sắc tức không, không tức là sắc”... Tóm lại, đứng về đệ nhất nghĩa môn mà xét, các pháp rốt ráo là chơn không. Chơn không là thế nào? Chơn không có nghĩa là: chơn lý của các pháp trong vũ trụ vốn là chơn thật, nhưng không phải là có hình tướng như các hình tướng giả dối mà người đời thường thấy ở chung quanh. Cái “có” và cái “không “ ở trong đời, đối với chơn đế, hay đệ nhất nghĩa đế, đều giả dối, không thật.</p>
    <p>Nên biết cái “không” hiểu theo nghĩa Chơn đế, khác với “không” hiểu theo nghĩa Tục đế. Cái “không” của Chơn đế thì gọi là Chơn không; còn cái “không” của Tục đế là cái “không” đối đãi với cái “có” mà thành, đó là Không giới. Chơn không thường vắng lặng tịch diệt ra ngoài cái đối đãi của “có” và “không” phàm tục. Còn Không giới chẳng qua là cái sắc đối với nhãn căn đó thôi. Chơn không không phải là sắc; Không giới mới là sắc. Chơn không, không thấy được; Không giới có thấy được. Chơn không không đối tượng; Không giới thuộc về đối tượng. Chơn không là vô lậu, Không giới là hữu lậu. Chơn không là vô vi, Không giới là hữu vi.</p>
    <p><strong>3. Tương quan giữa Thế giới môn (Tục đế) và Đệ nhất nghĩa môn (Chơn đế):</strong> Theo Đệ nhất nghĩa môn thì chơn lý của vũ trụ vốn là Chơn không tịch diệt,vắng lặng; theo Thế giới môn thì có ta và người, có sắc và không, nghĩa là có ngã và pháp. Vậy thì giữa Thế giới môn và Đệ nhất nghĩa môn có tương quan gì với nhau không? Làm sao từ Chơn không tịch tịnh lại phát sanh ra ngã và pháp, nghĩa là từ chỗ Chơn không lại phát sanh ra chúng sanh và sơn hà đại địa?</p>
    <p><strong>Thành Thật tôn cắt nghĩa:</strong> đó là vô minh. Các pháp trong vũ trụ, thể tánh vốn vắng lặng, tịch diệt, nhưng vì do tâm vọng tưởng phân biệt mà có rối loạn, lăng xăng. Nói một cách rõ ràng hơn, bản tánh của vũ trụ vốn là không có ngã, không có pháp, nhưng vì “hai món chướng” mà thấy có ngã và pháp. Hai món chướng ấy là: Phiền não chướng và Sở tri chướng.</p>
    <p>a) Phiền não chướng , tức là các nghiệp chướng về Kiến hoặc và Tư hoặc. Chướng này vì chấp cái ta là thiệt có, nên mới sanh các phiền não, rối loạn thâm tâm, chướng ngại đạo Niết bàn tịch tịnh. Chướng này, trong Câu Xá luận, thì gọi là “tánh nhiễm ô vô tri”.</p>
    <p><strong>b) Sở tri chướng:</strong> cũng gọi là trí chướng. Căn bản của chướng này, là chấp các pháp thật có, làm che lấp cái tánh vô điên đảo đối với các cảnh mình hay biết, làm chướng ngại đạo Bồ đề. Chướng này trong Câu Xá luận gọi là “bất nhiễm ô vô tri” (không nhiễm ô, nhưng vẫn thuộc về si mê không biết, vì làm cho mình không chứng rõ được chơn lý).</p>
    <p><strong>4. 84 pháp:</strong> Như chúng ta đã thấy trong Câu Xá tôn, những hiện tượng của nhơn sanh và vũ trụ, được phân loại thành 75 pháp. Theo Thành Thật tôn, thì nhân sanh, vũ trụ lại được chia làm 84 pháp. Còn Pháp Tướng tôn lại chia thành 100 pháp. Như thế, chúng ta nên hiểu rằng sự phân chia ra ít hay nhiều pháp chỉ là một vấn đề tương đối, chứ không có nghĩa nhất định. Sự phân loại các pháp này, chỉ có một mục đích là để nghiên cứu cho rõ ràng nhân sanh, vũ trụ mà thôi. 84 pháp mà Thành Thật tôn đã phân loại là:</p>
      <ul>
        <li><strong>14 Sắc pháp:</strong> 5 Căn, 5 Trần, 4 Đại.</li>
        <li><strong>50 Tâm pháp:</strong> 1 Tâm vương, 49 Tâm sở (so với Câu Xá tôn, thì có thêm 3 Tâm sở là Hân (tánh hớn hở), Yểm (tánh nhàm chán) và Thùy miên và Câu Xá tôn ghép thành một Tâm sở, còn Thành Thật tôn thì chia làm hai là Thùy và Miên.</li>
        <li>17 Phi sắc phi tâm pháp (tức là Bất tương ưng hành pháp). Về loại này, Thành Thật tôn hơn bên Câu Xá tôn 3 pháp: Thành Thật tôn hợp “Mạng căn” và “Đồng phận” lại là một, nhưng lại thêm: Lão, Tử, Phàm phu và Vô tác (tức là Vô biểu sắc bên Câu Xá tôn).</li>
        <li>3 Vô vi pháp (như bên Câu Xá tôn) Trạch diệt vô vi, Phi trạch diệt vô vi và Hư không vô vi.</li>
      </ul>
    <h3 id="thanh-that-phuong-phap" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. Phương pháp tu hành</h3>
    <p>Phương pháp tu hành của Thành Thật tôn cũng gần giống như của Câu Xá tôn; nhưng vì Câu Xá tôn chủ trương “nhơn không pháp hữu”; còn Thành Thật tôn thì chủ trương “nhơn không pháp không”, nên về phương pháp tu hành của Thành Thật tôn, đặc biệt có hai pháp quán là: Ngã không quán và Pháp không quán.</p>
    <p>1. Ngã không quán và Pháp không quán:</p>
    <p><strong>a) Ngã không quán:</strong> như quán trong cái bình không có nước, thì gọi là Không. Quán thân ta do năm uẩn hòa hợp giả tạm mà có, chứ không có một cái ta chơn thật. Pháp quán này mục đích là để nhận rõ lý ngã (nhơn) không, nên gọi là “Ngã không quán”.</p>
    <p><strong>b) Pháp không quán:</strong> như sau khi quán cái bình không có nước, lại quán thêm một tầng nữa để thấy rằng, thể chất của bình cũng không chơn thật. Áp dụng pháp quán này trong thân người, hành giả đi đến kết luận rằng: không những cái ta là không thật, do ngũ uẩn tạo thành; mà chính các pháp tạo ra ngũ uẩn cũng không chơn thật. Ấy là pháp quán về pháp không.</p>
    <p><strong>2. Ba tâm và diệt đế:</strong> Phương pháp này cũng gần giống như hai pháp quán trên, nhưng đi xa hơn một tầng, nghĩa là không chấp có, nhưng cũng không chấp không. Ba tâm là:</p>
    <p>a) Giả danh tâm , tức là cái tâm chấp những giả danh, như chấp người ta là có thật. Đối với sự chấp trước này, hành giả dùng trí huệ mà quan sát, biết nó đều là nhơn duyên hòa hợp mà sanh, tức chứng được lý nhơn không.</p>
    <p>b) Pháp tâm , là cái tâm chấp pháp thể năm uẩn là thật có. Đối với sự chấp trước này, hành giả dùng trí Chơn không mà trừ bỏ, thấy được pháp không.</p>
    <p>c) Không tâm là cái tâm chấp cái “không” là thật có, nghĩa là đã quán biết được Nhơn ngã, Pháp ngã đều không, mà lại chấp cái “không” là thật. Như thế, chấp “có” đã là sai, mà chấp “không” lại càng sai hơn. Vậy phải quán Ngã, Pháp đều không, mà cái không ấy cũng không có tướng nắm bắt, nhận thấy được, như không giới. Rốt lại chỉ còn cái “Chơn không” là chơn lý tuyệt đối, ra ngoài “có” và “không” của phàm tục. Đến đây tức là Diệt đế.</p>
    <h3 id="thanh-that-qua-vi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. Quả vị tu chứng</h3>
    <p>Về quả vị tu chứng, tôn này cũng giống như Câu Xá tôn, có 27 từng bực, tức là 27 vị Hiền Thánh.</p>
    <p><strong>a) Dự lưu hướng:</strong> Dự lưu hướng, nghĩa hướng tới dòng thánh; nói một cách nôm na, hành giả đang đi dần đến để nhập vào dòng thánh, như chiếc thuyền đang đi trên dòng sông con, để vào con sông cái. Dự lưu hướng gồm có 3 bực sau đây:</p>
    <p><strong>1. Tùy tín hành:</strong> Tùy tín nghĩa là nghe theo lời dạy của các bậc đã chứng quả, rồi tin và tu tập theo.</p>
    <p><strong>2. Tùy pháp hành:</strong> Vị này không còn đợi có những lời dạy bảo của các bực thánh hiền, nhưng chỉ thuận theo chánh pháp mà tự tu hành.</p>
    <p><strong>3. Vô tướng hành:</strong> Là bậc kiến đạo, thấy được chơn lý của tứ diệu đế, trí vô lậu đã phát sanh.</p>
    <p><strong>b) Dự lưu quả:</strong> Tức là quả Tu đà hoàn. Bực này đã dứt hết những kiến hoặc trong ba cõi, dự vào dòng thánh đạo.</p>
    <p><strong>c) Nhứt lai hướng:</strong> Bực này đã dứt được năm phẩm tư hoặc ở cõi Dục giới, đang hướng đến quả Nhứt lai.</p>
    <p><strong>d) Nhứt lai quả:</strong> Bực này đã dứt được phẩm tư hoặc thứ sáu ở cõi Dục giới, nhưng còn phải trở lại một lần cuối cùng (nhứt lai) ở cõi Dục giới.</p>
    <p><strong>đ) Bất hoàn hướng:</strong> Bực này đã dứt được hai phẩm tư hoặc thứ bảy và thứ tám ở cõi Dục giới, và đang tu hành để hướng đến quả Bất hoàn, là quả đã thoát ra vòng Dục giới và không còn trở về Dục giới nữa.</p>
    <p><strong>e) Bất hoàn quả:</strong> Bực này đã hoàn toàn dứt được 9 phẩm tư ở cõi Dục giới, cho nên không trở về cõi Dục giới nữa. Quả này gồm có 11 bực như sau:</p>
    <p><strong>1. Trung ban:</strong> Bực này, sau khi ở cõi Dục giới vừa chết, sắp sanh lên cõi Sắc giới, cái thân trung ấm tuy còn ở vào khoảng trung gian mà đã dứt trừ các mê lầm phiền não của cõi Sắc giới, nên vào ngay Niết bàn.</p>
    <p><strong>2. Sanh ban:</strong> Bực này, sau khi lên cõi Sắc giới, chẳng bao lâu thì vào Niết bàn; ấy là do sự siêng năng về đường tu đạo mà mau tới vậy.</p>
    <p><strong>3. Hữu hành ban:</strong> Bực này, sau khi sanh về cõi Sắc giới, tu hành tinh tấn mãi không nghỉ, mà vào được Niết bàn.</p>
    <p><strong>4. Vô hành ban:</strong> Bực này trái lại, sau khi sanh vào cõi Sắc giới, vì trễ nải đường tu hành, nên thành quả dù chậm đến, nhưng cuối cùng cũng vào Niết bàn.</p>
    <p><strong>5. Lạc huệ ban:</strong> Bực này, sau khi sanh về cõi Sắc giới, lại lần lượt sanh lên cõi Sắc cứu kính là cõi cao nhất ở cõi Sắc giới mới vào Niết bàn. Cõi trời Sắc giới có định, có huệ, bực này dùng huệ làm vui nên gọi là “Lạc huệ”.</p>
    <p><strong>6. Lạc định bàn:</strong> Bực này, không chịu vào Niết bàn nơi cõi Sắc giới, mà còn muốn chuyển sanh lên cõi Hữu đảnh là cõi cao của Vô sắc giới, mà vào Niết bàn. Trong cõi Vô sắc giới này, chỉ có định mà không có huệ, hành giả lấy định làm vui, cho nên gọi là “Lạc định”.</p>
    <p><strong>7. Chuyển thể:</strong> Bực này, sau khi ở cõi Dục giới, chứng được quả Dự lựu và Nhất lai, đáng lẽ sanh về cõi Sắc giới hay Vô sắc giới, nhưng hành giả lại chuyển sanh lại cõi Dục giới mà tu hành, chứng được quả Bất hoàn rồi vào thẳng ngay Niết bàn.</p>
    <p><strong>8. Hiện ban:</strong> Bực này, không sanh vào cõi Sắc giới, Vô sắc giới, cũng không cần chuyển sanh, chỉ tu tập trong một thời kỳ, chứng luôn ba quả, rồi đi thẳng từ cõi Dục giới vào Niết bàn.</p>
    <p><strong>9. Tín giới:</strong> Bực này, vì căn cơ hơi chậm lụt, nên chỉ tin theo lời dạy bảo của kẻ khác mà tu hành, chứng được quả Bất hoàn.</p>
    <p><strong>10. Kiến đắc:</strong> Bực này, trái lại với bực Tín giới nói ở trên, chứng được quả Bất hoàn là nhờ có căn cơ lanh lợi, tự nương theo trí huệ của mình mà thôi.</p>
    <p><strong>11. Thân chứng:</strong> Bực này là bực lợi căn tột độ, chứng được Diệt tận định.</p>
    <p>Mười một bực Bất hoàn quả kể trên này, không phải có thứ bậc tuần tự mà hành giả phải vượt qua. Đây chỉ là 11 trường hợp khác nhau trong quả Bất hoàn, do căn cơ lanh lẹ, hay chậm lụt, do sở nguyện hay hoàn cảnh, tâm tính khác nhau mà ra. Nhưng dù sao, thì cũng là ở trong quả Bất hoàn cả, không có cao và thấp, hơn và kém, và đều gọi là A la hán hướng , nghĩa là đang hướng đến quả A la hán.</p>
    <p><strong>Nếu kể từ bậc đầu tiên là:</strong> Dự lưu hướng cho đến bậc Bất hoàn quả, gồm cả thảy 18 bậc, thì gọi là bậc Hữu học.</p>
    <p>Còn chín bậc cuối cùng sau đây là chín bậc A la hán quả, cũng gọi là bậc Vô học.</p>
    <p><strong>g) A la hán quả:</strong> Quả vị này gồm có 9 bậc, cũng gọi là Vô học, nghĩa là không cần phải học hỏi gì nữa.</p>
    <p><strong>1. Thối pháp tướng:</strong> Thối nghĩa là thối lui. Thối lui ở đây không có nghĩa là thối lui về sanh tử, làm chúng sanh, mà chỉ thối lui về cảnh thiền định đã đặng, như các bậc độn căn La hán.</p>
    <p><strong>2. Thủ hộ tướng:</strong> Thủ hộ là gìn giữ bảo hộ. Thủ hộ tướng tức là bậc La hán gìn giữ bảo hộ cảnh thiền định đã được, không mất.</p>
    <p><strong>3. Tử tướng:</strong> Là bực La hán rất nhàm chán thế gian, lại sợ thối mất chỗ chứng ngộ của mình, nên muốn vào liền cõi Niết bàn.</p>
    <p><strong>4. Trú tướng:</strong> Là bực La hán, căn cơ không thể tu tới mà cũng không đến nỗi thối lui, chỉ giữ về bực trung mà thôi.</p>
    <p><strong>5. Khả tấn tướng:</strong> Khả tấn là có thể tiến thêm nữa. Đây là bực La hán đã chứng được bực thiền định, mà còn tu tới mãi.</p>
    <p><strong>6. Hoại tướng:</strong> Đây là bực La hán, căn cơ chậm lụt, nhưng vẫn giữ được không thối lui, mặc dù gặp phải duyên trở ngại.</p>
    <p><strong>7. Huệ giải thoát:</strong> Bực La hán này đã chứng được Diệt tận định, được chơn trí vô lậu, đã giải thoát các phiền não, nhưng chưa ly được sự chướng ngại về cảnh thiền định.</p>
    <p><strong>8. Cầu giải thoát:</strong> Đây là bực La hán đã giải thoát được cả huệ chướng và định chướng; nghĩa là không còn bị trí huệ hay thiền định làm chướng ngại nữa.</p>
    <p><strong>9. Bất thối tướng:</strong> Đây là bực La hán có căn cơ lanh lợi, bao nhiêu công đức trí huệ đã tu tập đều không thối lui hay là tiêu mất được .</p>
    <p>Tóm lại, mặc dù quả vị tu chứng của tôn này có chia ra đến 27 bậc, nhưng đó là muốn chia chẻ một cách rốt ráo của từng trường hợp, chứ đại khái cũng giống như quả vị tu chứng trong Câu Xá tôn. Thật vậy, nếu chúng ta đem so sánh quả vị của hai tôn Câu Xá và Thành Thật, thì sẽ thấy như sau:</p>
    <p>CÂU XÁ TÔN</p>
    <p>1. Tu đà hoàn (hay Nhập lưu)</p>
    <p>1. Dự lưu hướng và Dự lưu quả</p>
    <p>2. Tư đà hàm (hay Nhứt lai)</p>
    <p>2. Nhứt lai hướng và Nhứt lai quả</p>
    <p>3. A na hàm (hay Bất lai)</p>
    <p>3. Bất hoàn hướng và Bất hoàn quả</p>
    <p>4. A la hán (hay Vô sanh, Vô học)</p>
    <p>4. A la hán (Vô sanh, Vô học)</p>
    <h3 id="thanh-that-ket-luan" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. Kết luận</h3>
    <p>Thành Thật tôn, cũng như Câu Xá tôn, đều thuộc các tôn phái của Tiểu thừa Phật giáo. Giáo lý căn bản của hai tôn cũng gần giống nhau, chỉ có khác ở điểm: Câu Xá tôn thì chủ trương “nhơn không pháp hữu” , còn Thành Thật tôn thì chủ trương “nhơn không pháp không”. Như thế, Thành Thật tôn đã bước thêm một bước lại gần Đại thừa Phật giáo hơn. Đó là một điểm chứng minh rằng theo với thời gian, Tiểu thừa và Đại thừa càng xích lại gần nhau hơn. Với cái đà ấy, chúng ta hy vọng rồi đây, giữa biên giới hai phái lớn của Phật giáo sẽ được xóa hết, chỉ còn lại một danh từ, một cái đạo chung cho cả thế giới là Đạo Phật.</p>
    <p>Hoài bão ấy, hiện Tổng hội Phật giáo thế giới đang cố gắng thực hiện qua nhiều quyết nghị trong các Đại hội Phật giáo thế giới. Và ở Việt Nam hoài bão ấy đã được thể hiện trong những ngày đầu năm 1964, dưới danh hiệu Giáo hội Phật giáo Việt Nam Thống nhất. Trong Giáo hội này, các giáo phái Đại thừa và Tiểu thừa đều thề nguyện chung sức chung lòng để phát huy nền Phật giáo Việt Nam mỗi ngày thêm rạng rỡ.</p>
  </section>
  <section id="tong-ket-muoi-ton">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Tổng kết về mười tôn</h2>
    <p>Chúng ta đã có một cái nhìn tổng quát về mười tôn. Chúng ta đã hiểu sơ qua sự thành lập, tôn chỉ và giáo lý căn bản, sự tu hành và sự chứng quả của mười tôn. Vì đây là những bài học phổ thông, nên chúng ta không thể đi sâu vào chi tiết, và phạm vi cũng như thời hạn không cho phép chúng tôi nói nhiều hơn nữa. Nếu quý vị độc giả nào muốn hiểu rõ ràng hơn, hãy tìm các kinh sách nói về mười tôn ấy.</p>
    <p>Mặc dù vắn tắt, qua những bài học này, chúng ta đã có thể nắm được những điểm chính căn bản của mỗi tôn.</p>
    <p>Mỗi tôn, tuy có một tôn chỉ một chủ trương riêng, nhưng tôn nào cũng thờ đức Phật Thích Ca làm giáo chủ, và đều dựa trên các kinh điển của Ngài đã nói ra mà lập tôn.</p>
    <p>Sự sai khác chẳng qua là cách giải thích vũ trụ vạn hữu và phương pháp tu hành. Chứ còn những điểm chính căn bản, thì mọi tôn phái đều công nhận giống nhau, là: có một chân như trong suốt, linh diệu bên trong vũ trụ vạn hữu, làm nền móng cho mọi hiện tượng ở thế gian này. Chúng sanh không nhận được cái chân như ấy, vì chúng sanh bị vô minh che ám; nhưng với phương pháp tu hành mà đức Phật Thích Ca đã dạy bảo, chúng ta sẽ giác ngộ và thể nhập với các chân như ấy.</p>
    <p>Nếu sự giải thích vũ trụ vạn hữu có nhiều cách, và phương pháp tu hành có nhiều lối là vì xu hướng, trình độ, căn cơ của chúng sanh không đều; cũng như trong phương pháp chữa bệnh, phải tùy bệnh nặng nhẹ, phải tùy người mà cho thuốc. Làm sao cho bệnh nhân lành mạnh là lương y giỏi.</p>
    <p>Chúng ta rất không may, ở vào thời kỳ mạt pháp, không có lương y giỏi. Nhưng sự giải thích căn bịnh và phương pháp chữa bịnh của các bậc đại lương y là giáo lý của các tôn phái, đang còn đó. Chúng ta hãy tự nghiên cứu lấy căn bệnh của chúng ta, và hãy lựa phương thuốc nào thích hợp với bệnh của chúng ta mà uống thì chắc chắn chúng ta sẽ lành bệnh.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Trong Hoa Nghiêm tôn, vị sư nào được gọi là Hiền Thủ Quốc sư và có công lớn khiến tôn phái này phát triển mạnh mẽ nhất?",
    "options": {
      "a": "Ngài Trí Nghiễm",
      "b": "Ngài Đỗ Thuận",
      "c": "Ngài Trừng Quán",
      "d": "Ngài Pháp Tạng"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Ngài Trí Nghiễm là vị kế vị Ngài Đỗ Thuận, làm ra các bộ luận giải bày nghĩa lý nhưng không phải là Hiền Thủ Quốc sư [1].",
      "b": "Sai. Ngài Đỗ Thuận là người sáng lập ra Hoa Nghiêm tôn [1].",
      "c": "Sai. Ngài Trừng Quán được gọi là Thanh Lương quốc sư [1].",
      "d": "Đúng. Ngài Pháp Tạng được gọi là Hiền Thủ quốc sư, có nhiều công nghiệp lớn khiến Hoa Nghiêm tôn thạnh hành và phát triển [1]."
    }
  },
  {
    "question": "Theo giáo lý Hoa Nghiêm tôn, 'Lý pháp giới' được giải thích bằng ví dụ nào sau đây?",
    "options": {
      "a": "Sự đầy vơi của một hồ nước ảnh hưởng đến các hồ nước khác qua hệ thống ống thông.",
      "b": "Một trăm đồng bạc là tổng cộng của các tờ tiền có mệnh giá khác nhau.",
      "c": "Các trạng thái của nước như nước đá, nước sôi đều có chung bản thể là H2O.",
      "d": "Ánh sáng của muôn ngàn ngọn đèn trong một căn phòng hòa quyện vào nhau."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đây là ví dụ cho 'Sự sự vô ngại pháp-giới' [2].",
      "b": "Sai. Đây là ví dụ giải thích về các Lục tướng (Tổng tướng, Biệt tướng, Thành tướng...) [3].",
      "c": "Đúng. Các trạng thái của nước tuy khác nhau nhưng thể tánh bên trong vẫn là một (H2O), là ví dụ của 'Lý pháp-giới' [2].",
      "d": "Sai. Đây là ví dụ cho môn 'một và nhiều dung nhau không đồng' trong Mười huyền môn [4]."
    }
  },
  {
    "question": "Trong 'Lục tướng viên dung' của Hoa Nghiêm tôn, cặp tướng nào sau đây thuộc về phương diện 'Dụng' (công dụng)?",
    "options": {
      "a": "Thành tướng và Hoại tướng",
      "b": "Viên dung và Hàng bố",
      "c": "Tổng tướng và Biệt tướng",
      "d": "Đồng tướng và Dị tướng"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Thành tướng và Hoại tướng cùng đối nhau thuộc về Dụng [3].",
      "b": "Sai. Viên dung và Hàng bố là hai môn dùng để phân loại sự bình đẳng và sai biệt của 6 tướng, không phải là cặp tướng thuộc phương diện Dụng [5].",
      "c": "Sai. Tổng tướng và Biệt tướng cùng đối nhau thuộc về Thể [3].",
      "d": "Sai. Đồng tướng và Dị tướng cùng đối nhau thuộc về Tướng [3]."
    }
  },
  {
    "question": "Tam Luận tôn căn cứ vào ba bộ luận nào để thành lập?",
    "options": {
      "a": "Trung luận, Bách luận, Thập địa luận",
      "b": "Thành Thật luận, Trung luận, Bách luận",
      "c": "Trung luận, Thập Nhị Môn luận, Câu Xá luận",
      "d": "Trung luận, Bách luận, Thập Nhị Môn luận"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Thập địa luận do Ngài Thế Thân làm ra dùng để giải thích nghĩa lý sáu tướng của Hoa Nghiêm tôn [3].",
      "b": "Sai. Thành Thật luận là bộ luận căn bản của Thành Thật tôn [6].",
      "c": "Sai. Câu Xá luận là bộ luận căn bản của Câu Xá tôn [7].",
      "d": "Đúng. Tam Luận tôn căn cứ vào ba bộ luận: Trung luận, Bách luận, Thập Nhị Môn luận để thành lập [8]."
    }
  },
  {
    "question": "Chủ trương 'Trung đạo bát bất' của Tam Luận tôn nhằm phủ định điều gì?",
    "options": {
      "a": "Phủ định lý thuyết nhân duyên sinh của Phật giáo.",
      "b": "Phủ định các cặp đối đãi cực đoan như sanh - diệt, thường - đoạn.",
      "c": "Phủ định sự tồn tại của tâm thức con người.",
      "d": "Phủ định toàn bộ giáo lý của Tiểu thừa."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Tam Luận tôn công nhận chư pháp do nhân duyên sinh ra [9].",
      "b": "Đúng. 'Bát bất' nhằm phủ định 8 cặp đối đãi: sanh-diệt, thường-đoạn, nhất-dị, lai-xuất để hiển lộ Trung đạo viên dung vượt ngoài cực đoan [10].",
      "c": "Sai. Tam Luận tôn không nhằm phủ định riêng tâm thức mà muốn xóa bỏ sự chấp trước về giả hữu [9].",
      "d": "Sai. Tam Luận tôn phá tà chấp của Tiểu thừa nhưng không phủ định toàn bộ giáo lý, xem đó là giáo lý thời kỳ thứ nhất để đối trị căn trí hẹp hòi [9]."
    }
  },
  {
    "question": "Tôn chỉ đặc trưng nhất của Câu Xá tôn (Hữu tôn) là gì?",
    "options": {
      "a": "Nhân không, pháp hữu",
      "b": "Nhân không, pháp không",
      "c": "Tâm không, cảnh hữu",
      "d": "Sự sự vô ngại"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Câu Xá tôn chủ trương 'ngã không pháp hữu' (nhân không pháp hữu), nghĩa là không có thật ngã nhưng có thật pháp [7].",
      "b": "Sai. 'Nhân không, pháp không' là tôn chỉ của Thành Thật tôn [6].",
      "c": "Sai. 'Cảnh không tâm có' là giáo lý của pháp tướng Đại-thừa (Duy-thức) [9].",
      "d": "Sai. 'Sự sự vô ngại' là giáo lý đặc sắc của Hoa Nghiêm tôn [2]."
    }
  },
  {
    "question": "Trong giáo lý về 75 pháp của Câu Xá tôn, 'Vô biểu sắc' thuộc về loại pháp nào?",
    "options": {
      "a": "Bất tương ưng hành pháp",
      "b": "Tâm pháp",
      "c": "Sắc pháp",
      "d": "Vô vi pháp"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Bất tương ưng hành pháp là các pháp không thuộc sắc cũng không hẳn thuộc tâm, là kết quả của sự tiếp xúc giữa tâm và sắc [11].",
      "b": "Sai. Tâm pháp (Tâm vương) có năng lực chủ động phân biệt sự việc [7].",
      "c": "Đúng. Vô biểu sắc là món thứ 11 nằm trong nhóm Sắc pháp của Câu Xá tôn [7].",
      "d": "Sai. Vô vi pháp là những pháp không sanh diệt, chuyển biến, vượt ra ngoài sự đối đãi [11]."
    }
  },
  {
    "question": "Theo phương pháp tu hành Thập nhị nhân duyên, mắt xích nào cần bị cắt đứt để chấm dứt vòng sanh tử luân hồi?",
    "options": {
      "a": "Vô minh",
      "b": "Hành",
      "c": "Lục nhập",
      "d": "Ái"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Vô minh là một mắt xích gốc rễ nhưng theo Câu Xá tôn, mắt xích trực tiếp cần cắt đứt để dừng chuỗi luân hồi là Ái [12].",
      "b": "Sai. Hành không phải là mắt xích được chỉ định cắt đứt trong tôn phái này [12].",
      "c": "Sai. Lục nhập là một trong 12 nhân duyên nhưng không phải điểm trọng yếu để cắt đứt [12].",
      "d": "Đúng. Đối với kẻ tu hành, muốn chấm dứt sanh tử luân hồi thì cái mắt xích cần phải bị cắt đứt là 'ái' (luyến ái), không có ái thì không có hữu và sanh [12]."
    }
  },
  {
    "question": "Thành Thật tôn phân chia giáo lý thành 'Thế giới môn' và 'Đệ nhất nghĩa môn'. Mục đích của 'Đệ nhất nghĩa môn' là gì?",
    "options": {
      "a": "Hướng dẫn các phương pháp bố thí và giữ giới.",
      "b": "Giải thích vạn vật đứng về phương diện thế tục, tương đối.",
      "c": "Chứng minh rằng cả Ngã và Pháp rốt ráo đều là Chơn không.",
      "d": "Liệt kê đầy đủ 84 pháp cấu thành vũ trụ."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Tài liệu không đề cập Đệ nhất nghĩa môn dùng để hướng dẫn bố thí và giữ giới [6].",
      "b": "Sai. Xét về phương diện thế tục, tương đối là mục đích của Thế giới môn [6].",
      "c": "Đúng. Đệ nhất nghĩa môn (chơn đế) xét về phương diện tuyệt đối để thấy Ngã và Pháp đều là giả có, rốt ráo là Chơn không [6], [13].",
      "d": "Sai. Liệt kê 84 pháp cấu thành vũ trụ là sự phân loại hiện tượng nhân sanh, không phải định nghĩa cốt lõi của Đệ nhất nghĩa môn [14]."
    }
  },
  {
    "question": "Trong Thành Thật tôn, 'Không tâm' được định nghĩa là gì?",
    "options": {
      "a": "Tâm chấp rằng mọi người xung quanh là có thật.",
      "b": "Tâm chấp cái 'không' là thật có.",
      "c": "Tâm thấu hiểu lý nhân duyên hòa hợp.",
      "d": "Tâm thanh tịnh hoàn toàn đã chứng đắc Niết-bàn."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Tâm chấp giả danh (như người ta là có thật) gọi là 'Giả danh tâm' [14].",
      "b": "Đúng. Không tâm là tâm chấp cái 'không' là thật có, sau khi đã quán biết được nhân ngã, pháp ngã đều không [14].",
      "c": "Sai. Quán biết lý nhân duyên hòa hợp là dùng trí tuệ quan sát để phá Giả danh tâm [14].",
      "d": "Sai. Tâm đã chứng Niết-bàn thuộc về quả vị tu chứng cao cấp, còn 'Không tâm' vẫn là một cái tâm sai lầm (chấp không làm thật) cần phải loại bỏ để đạt đến Diệt đế [14]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-5-bai-8-hoa-nghiem-tong-tam-luan-tong-cau-xa-tong-thanh-that-tong',
  slug: 'bai-thu-8-hoa-nghiem-tong-tam-luan-tong-cau-xa-tong-thanh-that-tong',
  title: 'Bài Thứ 8 - 7. Hoa Nghiêm tông, 8. Tam Luận tông (Tánh Không tông), 9. Câu Xá tông (Hữu tông), 10. Thành Thật tông',
  type: 'article',
  status: 'published',
  order: 8,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-25',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-8-hoa-nghiem-tong-tam-luan-tong-cau-xa-tong-thanh-that-tong/infographic.png',
      readingContent,
      tableOfContents: [
        { id: 'hoa-nghiem-tong', label: '7. Hoa Nghiêm tông hay là Hiền Thủ tông' },
        { id: 'hoa-nghiem-duyen-khoi', label: 'I. Duyên khởi lập tông', indent: 1 },
        { id: 'hoa-nghiem-ton-chi', label: 'II. Tôn chỉ và giáo lý căn bản', indent: 1 },
        { id: 'hoa-nghiem-sau-tuong', label: 'Sáu tướng viên dung', indent: 2 },
        { id: 'hoa-nghiem-muoi-huyen-mon', label: 'Mười huyền môn', indent: 2 },
        { id: 'hoa-nghiem-phuong-phap', label: 'III. Phương pháp tu hành', indent: 1 },
        { id: 'hoa-nghiem-qua-vi', label: 'IV. Quả vị tu chứng', indent: 1 },
        { id: 'hoa-nghiem-ket-luan', label: 'V. Kết luận', indent: 1 },
        { id: 'tam-luan-tong', label: '8. Tam Luận tông hay Tánh Không tông' },
        { id: 'tam-luan-duyen-khoi', label: 'I. Duyên khởi lập tông', indent: 1 },
        { id: 'tam-luan-ton-chi', label: 'II. Tôn chỉ và giáo lý căn bản', indent: 1 },
        { id: 'tam-luan-ba-thoi', label: 'III. Ba thời giáo lý', indent: 1 },
        { id: 'tam-luan-phuong-phap', label: 'IV. Phương pháp tu hành', indent: 1 },
        { id: 'tam-luan-qua-vi', label: 'V. Quả vị tu chứng', indent: 1 },
        { id: 'tam-luan-ket-luan', label: 'VI. Kết luận', indent: 1 },
        { id: 'cau-xa-tong', label: '9. Câu Xá tông hay Hữu tông' },
        { id: 'cau-xa-duyen-khoi', label: 'I. Duyên khởi lập tông', indent: 1 },
        { id: 'cau-xa-ton-chi', label: 'II. Tôn chỉ và giáo lý căn bản', indent: 1 },
        { id: 'cau-xa-phuong-phap', label: 'III. Phương pháp tu hành', indent: 1 },
        { id: 'cau-xa-qua-vi', label: 'IV. Quả vị tu chứng', indent: 1 },
        { id: 'cau-xa-ket-luan', label: 'V. Kết luận', indent: 1 },
        { id: 'thanh-that-tong', label: '10. Thành Thật tông' },
        { id: 'thanh-that-duyen-khoi', label: 'I. Duyên khởi lập tông', indent: 1 },
        { id: 'thanh-that-ton-chi', label: 'II. Tôn chỉ và giáo lý căn bản', indent: 1 },
        { id: 'thanh-that-phuong-phap', label: 'III. Phương pháp tu hành', indent: 1 },
        { id: 'thanh-that-qua-vi', label: 'IV. Quả vị tu chứng', indent: 1 },
        { id: 'thanh-that-ket-luan', label: 'V. Kết luận', indent: 1 },
        { id: 'tong-ket-muoi-ton', label: 'Tổng kết về mười tôn' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-8-hoa-nghiem-tong-tam-luan-tong-cau-xa-tong-thanh-that-tong/Four_Gates_to_Enlightenment.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/-K3KsxNiA-M',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3UVVniZsCi8aI307hmCmNg?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Hoa Nghiêm tông, Tam Luận tông, Câu Xá tông và Thành Thật tông',
    passPercentage: 70,
    questions,
  },
}

export default lesson
