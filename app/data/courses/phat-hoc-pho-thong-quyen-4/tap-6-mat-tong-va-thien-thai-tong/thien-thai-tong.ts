import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 6.3</span>

  <h2>TẬP 6.3: THIÊN THAI TÔN</h2>
  <p><strong>(PHÁP HOA TÔN)</strong></p>
  <p><strong>CON ĐƯỜNG TU THỨ SÁU TRONG MƯỜI TÔN</strong></p>

  <hr>

  <h3 id="duyen-khoi">I. DUYÊN KHỞI LẬP TÔN</h3>
  <p>Thiên Thai Tôn được khởi xướng từ Bắc Tề do ngài Huệ Văn Thiền sư dựa vào bộ Trí Độ Luận mà lập ra phép “Nhất tâm tam quán”. Phép quán này được truyền lại cho ngài Nam Nhạc Huệ Tư Thiền Sư. Ngài Huệ Tư lại truyền cho ngài Trí Giả ở núi Thiên Thai. Ngài Trí Giả là một bậc đại sư, y theo kinh Pháp Hoa, bổ túc thêm cho phép “Nhất tâm tam quán” được hoàn bị và lập thành một tôn phái có uy thế tại núi Thiên Thai. Do đó mới có cái tên Thiên Thai Tôn (hoặc gọi Pháp Hoa Tôn). Vị đại đệ tử của ngài Trí Giả là Chương An đại sư ghi chép lại những lời của Thầy, làm ra nhiều bộ luận có giá trị, để làm cơ sở cho Thiên Thai Tôn, như bộ Pháp Hoa Huyền Nghĩa, Pháp Hoa Văn Cú, Ma Ha Chỉ Quán. Từ ngài Chương An, giáo nghĩa của tôn này được hoằng truyền mãi qua các vị đại đệ tử, thứ tự như sau: ngài Trí Oai, ngài Huệ Oai, ngài Huyền Minh và ngài Trạm Nhiên.</p>

  <p>Đến đời ngài Trạm Nhiên, cũng gọi là Kinh Khê tôn giả, giáo lý và tôn chỉ của Thiên Thai Tôn lại được rộng truyền và thêm nhiều thanh thế, vì ngài Trạm Nhiên là một vị cao tăng, học rộng, hiểu nhiều, bổ túc và chú giải thêm cho các bộ luận căn bản của tôn được hoàn bị. Từ ngài Trạm Nhiên về sau, đời nào cũng có những vị đệ tử có tài đức rộng truyền giáo nghĩa của tôn này.</p>

  <p>Kinh sách của Thiên Thai Tôn rất nhiều, trong số này có thể lựa ra ba bộ sách lớn làm căn bản cho tôn này là: Pháp Hoa Huyền Nghĩa, Pháp Hoa Văn Cú, Ma Ha Chỉ Quán. Ngoài ra còn có thể kể thêm năm bộ nhỏ, tuy không quan trọng bằng ba bộ trên, nhưng cũng rất cần thiết cho người tu học là: Quán Âm Huyền Nghĩa, Quán Âm Nghĩa Sớ, Kim Quang Minh Huyền Nghĩa, Kim Quang Minh Văn Cú và Quán Kinh Sớ.</p>

  <h3 id="ton-chi">II. TÔN CHỈ VÀ GIÁO LÝ CĂN BẢN</h3>
  <p>Cũng như các tôn phái khác trong Phật giáo, Thiên Thai Tôn không đi ra ngoài giáo lý của Đức Phật. Đó là: “Chư pháp duy nhất tâm”. Cái công lớn của Thiên Thai Tôn là làm sáng tỏ giáo lý trên bằng một phương pháp diễn dịch rất là minh bạch tinh vi.</p>

  <p>Sao gọi là “Chư pháp duy nhất tâm”? Theo Thiên Thai Tôn thì ngoài tâm không có các pháp; ngoài các pháp không có tâm. Tâm tức là nhất thiết pháp, nhất thiết pháp ấy là tâm. Hai cái không phải là khác, nhưng cũng không phải là một. Tâm bao trùm tất cả. Tâm tức là chúng sinh, tâm cũng tức là Bồ-tát, Phật. Sinh tử cũng ở nơi tâm ấy; Niết-bàn cũng ở nơi tâm ấy.</p>

  <p>Nhưng làm sao để nhận chân được những phương diện của tâm, mà mới nghe qua hình như là trái ngược, mâu thuẫn nhau ấy?</p>

  <p>Muốn thấy được toàn diện của tâm, người quan sát phải đứng ở nhiều khía cạnh, nhiều quan điểm khác nhau mà nhìn:</p>

  <p>Nếu chúng ta đứng về phương diện tuyệt đối mà xét sự vật (hay nói theo danh từ nhà Phật, đứng về phương diện chơn đế), thì thấy sự vật trong vũ trụ, không có một vật gì tự nó đứng vững một mình và tồn tại vĩnh viễn. Mọi vật đều nương vào nhau mà tồn tại; mọi vật không có tự thể riêng biệt, mọi vật đều do nhân duyên mà thành. Cái “có” của sự vật là một cái có tạm bợ, giả dối, có mà như “không”. Đứng về phương diện tuyệt đối mà xét, thì thấy không có một pháp nào là tuyệt đối cả. Cho nên gọi là “không”.<br>
  Nhưng nếu đứng về phương diện tương đối mà xét, (hay nói theo danh từ nhà Phật, là phương diện tục đế), thì không thể bảo mọi pháp là hoàn toàn “không” được. Trước mắt chúng ta đành rành có đủ mọi vật, và mỗi vật có một giới hạn, một đời sống riêng biệt, sao lại gọi là hoàn toàn “không” được? Cho nên đứng về phương diện đối đãi, thì mọi vật đều không thiếu một vật gì.</p>

  <p>Đứng về phương diện tuyệt đối, thì vạn pháp là “không”; đứng về phương diện tương đối thì vạn pháp là “có”. “Không” và “có”, đấy là hai phương diện của tâm. Lấy phương diện này mà bỏ phương diện kia, hay trái lại, lấy phương diện kia mà bỏ phương diện này, đều là thiên chấp, thiếu sót. Một giáo lý hoàn toàn là phải chấp nhận cả hai phương diện ấy. Đó là trung đạo. Phải là trung đạo, mới có thể tuyên bố: “Tâm là nhất thiết pháp, nhất thiết pháp là tâm; tâm là sinh tử luân hồi, mà cũng là Niết-bàn tịch tịnh”.</p>

  <p>Như thế, tâm có đầy đủ tất cả các tánh: thiện và ác, tịnh và bất tịnh, Phật và chúng sinh. Trong cõi sinh diệt vô thường, vẫn có cái lý bất sinh bất diệt; trong cõi Ta-bà, vẫn có cảnh giới của Phật. Đó là ý nghĩa của câu “Pháp môn tánh cụ”, mà tôn này thường chủ trương. “Pháp môn tánh cụ” nghĩa là bản tánh bao giờ cũng có đủ các pháp, như lành và dữ, tịnh và bất tịnh v.v… Do đó đủ các pháp, nên hành động như thế nào thì kết quả sẽ như thế ấy. Muốn thành Phật thì tu nhân Phật, còn muốn làm chúng sinh thì tạo nhân chúng sinh. Chúng sinh muốn thành Phật chỉ dứt trừ ác nghiệp và chuyển lại tu thiện nghiệp.</p>

  <p>Và cũng vì có đủ các pháp, nên trong mỗi pháp giới nào cũng đều có đầy đủ mười pháp giới là sáu loại phàm phu (địa ngục, ngạ quỷ, súc sinh, A-tu-la, Nhân, Thiên) và bốn bậc Thánh (Thanh văn, Duyên giác, Bồ-tát, Phật). Do chủ trương: “Pháp môn tánh cụ”, và mỗi pháp giới đều có đầy đủ mười pháp giới, nên quan niệm tu hành của Thiên Thai Tôn cũng lạc quan hơn các tôn phái khác: Ở trong pháp giới nào dù tối tăm, khổ sở bao nhiêu cũng có thể tu hành và thành tựu được. Như thế không cần phải từ bỏ một cảnh giới này, cầu sinh một cảnh giới khác mới có thể tu hành và thành Phật.</p>

  <h3 id="phuong-phap-tu">III. PHƯƠNG PHÁP TU HÀNH</h3>
  <p>Phần chủ trương của Thiên Thai Tôn như vừa trình bày ở trên, có phần lạc quan và dễ dàng; trong cảnh giới hiện tại có đủ cảnh giới phàm và thánh, muốn thành Phật, Bồ-tát thì cứ gieo nhân (tu hành) thành Phật, Bồ-tát. Đó là nói về lý thuyết. Nhưng trong thực hành, không phải dễ dàng như thế.</p>

  <p>Trước tiên, chúng ta phải nhận định hoàn cảnh thực tế của chúng sinh là một hoàn cảnh bị che phủ rất nhiều mê lầm, hay nói theo thuật ngữ nhà Phật thì là “chướng” hay “hoặc”. Dứt trừ được những “chướng” hay “hoặc” ấy là công việc chính của người tu hành. Nhưng muốn dứt trừ những tên giặc nguy hiểm ấy, trước tiên phải tìm hiểu tướng trạng, hành tung, phạm vi hoạt động của chúng như thế nào đã. Những chướng ngại, mê lầm hay những hoặc nói trên nhiều vô số, nhưng có thể phân làm ba loại, từ cạn đến sâu, từ hẹp đến rộng. Đó là: kiến tư hoặc, trần sa hoặc và vô minh hoặc.</p>

  <ol style="padding-left: 2.5rem;">
    <li><strong>Kiến tư hoặc:</strong> Kiến tư hoặc tức là danh từ chỉ cho những kiến hoặc và tư hoặc. Kiến hoặc là sự mê lầm về lý, làm che lấp trí não của chúng ta, không cho thấy rõ được chơn lý; tư hoặc tức là điều mê lầm về sự, nghĩa là những sự tham nhiễm, chấp trước theo sự vật, hoàn cảnh. Vì hai thứ mê lầm về lý và sự này mà chúng sinh phải sinh tử luân hồi, lăn lóc trong ba cõi. Những mê lầm này thường được gọi là những mê lầm về giới nội, nghĩa là ràng buộc chúng sinh trong ba giới. Hàng Nhị thừa chỉ mới khám phá ra loại mê lầm này, ngoài ra không nhận ra được những mê lầm hay “hoặc” sâu xa hơn nữa. Vì thế, khi họ tu tập và dứt trừ được những “hoặc” này, thì họ cũng mới chỉ thoát ra khỏi tam giới mà thôi.</li>
    <li><strong>Trần sa hoặc:</strong> Trần sa hoặc nghĩa đen là cát bụi. Trần sa hoặc là những hoặc nhiều không thể đếm được, như cát bụi. Thật vậy, các pháp trong thế gian và ngoài thế gian đã là vô lượng, thì sự mê lầm cũng nhiều không thể lường được. Những kẻ tâm lượng hẹp hòi và không tìm được nguyên nhân của những “hoặc” ấy, nên hoảng sợ trước trần sa hoặc, không dám phát lòng đại bi, cứu độ tất cả chúng sinh. Chỉ riêng các bậc Bồ-tát mới dứt trừ sự mê lầm ấy, nên trần sa hoặc cũng gọi là biệt hoặc; và vì nó rộng lớn ra ngoài cả ba giới nên cũng gọi là giới ngoại hoặc.</li>
    <li><strong>Vô minh hoặc:</strong> Chữ vô minh nghĩa chung là mê lầm. Mê lầm cũng có nhiều tầng bậc cạn và sâu, hẹp và rộng, thô thiển và vi tế. Hàng Tiểu thừa cũng dùng chữ vô minh, mà hàng Đại thừa cũng dùng chữ vô minh. Nhưng vô minh theo quan niệm của Tiểu thừa là sự mê lầm che lấp không cho chúng sinh thấy được cội gốc của đau khổ, phiền não, nguyên nhân của sinh tử luân hồi. Còn vô minh theo nghĩa của Đại thừa và đặc biệt của Thiên Thai là sự mê lầm che lấp chơn lý thật tướng của Trung đạo. Vô minh hoặc ở đây có một nghĩa bao quát rộng rãi như thế, nên cũng gọi là giới ngoại hoặc; và chỉ có hàng Bồ-tát mới dứt trừ được nên cũng gọi là biệt hoặc.</li>
  </ol>

  <p>Đối trị với ba hoặc này, Thiên Thai Tôn lập ra ba phép quán là: Không quán, Giả quán và Trung quán.</p>

  <p><strong>BA PHÉP QUÁN:</strong> Ba phép quán này nguyên ngài Huệ Văn rút từ những phẩm kệ trong bộ Trung Luận của ngài Long Thọ Bồ-tát mà lập ra. Phẩm kệ ấy như sau:</p>

  <blockquote>
    <p>“Nhân duyên sở sinh pháp<br>
    Ngã thuyết tức thị không<br>
    Diệc danh vi giả danh<br>
    Diệc thị Trung đạo nghĩa”.</p>
    <p>(Các pháp do nhân duyên sinh, nên ta bảo là không, mà cũng là giả danh, đó cũng là nghĩa lý của Trung đạo).</p>
  </blockquote>

  <p>Đối với Thiên Thai Tôn thì ba phép quán này là phần nòng cốt trong sự tu hành. Nếu không thực hành ba phép quán này thì không làm sao thành tựu được. Ba phép quán này, như trên đã nói là Không quán, Giả quán và Trung quán; nghĩa là quán các pháp cũng tức là không, cũng tức là giả, cũng tức là trung.</p>

  <ul style="padding-left: 2.5rem;">
    <li><strong>3.1. Không quán:</strong> Không quán là đứng về phương diện chơn đế mà quán sát sự vật. Theo chơn đế, thì các pháp vốn là không, nhưng chúng sinh vì mê lầm không rõ, chấp là có thật. Do đó mà có kiến tư hoặc, và cứ mãi quay cuồng trong sinh tử luân hồi của tam giới. Nay phải dùng Không quán mà phá trừ sự mê lầm chấp trước trên, cắt đứt tất cả tình chấp (trừ kiến và tư hoặc) mới thoát khỏi sinh tử luân hồi.</li>
    <li><strong>3.2. Giả quán:</strong> Giả quán là đứng về phương diện tục đế mà quán sát sự vật. Các pháp tuy không và không sở đắc, nhưng nếu đứng về thế tục mà nhìn, thì thấy bản tánh vốn đủ các pháp, muôn hình vạn trạng, không thiếu một pháp nào. Pháp quán này có thể dứt được trần sa hoặc, vì hành giả biết rằng hoặc tuy nhiều như cát bụi, nhưng đều là giả cả, nên không lo sợ trước số nhiều ấy, và cứ vững tâm phát nguyện độ sinh khắp tất cả.</li>
    <li><strong>3.3. Trung quán:</strong> Trung quán là đứng về phương diện trung đế để quán sát các pháp. Trung đế hay đệ nhất nghĩa đế là sự thật đúng đắn nhất, không gì hơn, sự thật trung chánh, tóm thâu, bao gồm tất cả các sự thật khác. Khi đứng về chơn đế hay tục đế mà quán sát sự vật, thì không phải là không đạt đến sự thật; nhưng sự thật ấy chỉ mới được vén lên ở một khía cạnh này hay khía cạnh khác mà thôi. Và những sự thật ấy, nếu không có Trung quán, thì trở thành mâu thuẫn, đối chọi nhau. Nhờ Trung quán mới nhìn được cùng một lần cả hai khía cạnh Có và Không, mới nhận chân được rõ ràng các pháp không phải Chơn mà cũng không phải Tục, tức Chơn, tức Tục, dung thông cả hai, không có chướng ngại. Pháp quán này sẽ trừ được vô minh hoặc một cách rốt ráo, cùng tột.</li>
  </ul>

  <p>Ba phép quán này có thể thực hành bằng nhiều lối:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Hoặc quán theo Thứ lớp, hết Không đến Giả, hết Giả đến Trung. Lối quán này gọi là quán ba đế về lối cách lịch, thứ đệ, hay về biệt tướng, hay biệt giáo.</li>
    <li>Hoặc quán theo lối Thông tướng. Theo lối sau này thì quán một đế mà ba đế đều đủ, ba tức là một. Thí dụ: quán pháp Không thời hết thảy đều Không, Giả Trung cũng đều Không; quán pháp Giả, thời hết thảy đều Giả, Không, Trung cũng đều Giả; quán pháp Trung, thời hết thảy đều Trung, Không, Giả cũng đều Trung.</li>
    <li>Hoặc quán theo lối Viên dung; Viên nghĩa là đầy đủ; Dung nghĩa là dung hòa. Theo pháp quán này, thì dùng một tâm mà đồng thời tu ba pháp quán, nghĩa là trong một tâm niệm mà ba pháp quán đều đủ và không ngăn ngại nhau. Quán như thế gọi là: “Nhất tâm tam quán”, một pháp quán của viên giáo. Nhất tâm tam quán là phép quán vi diệu nhất. Nhờ phép quán này mà hành giả trực nhận được trong một lúc mọi khía cạnh của tâm (mà cũng tức là của vạn pháp), rõ ràng như khi chúng ta đứng soi vào gương, mà vừa nhận thấy được ánh sáng của gương (dụ cho không), những bóng phản chiếu trong gương (dụ cho giả), và thể tánh của chất gương (dụ cho trung). Ba thứ: ánh sáng, bóng phản chiếu và thể tánh của gương đều đầy đủ, đều thể hiện cùng một lúc mà vẫn viên dung, không trở ngại nhau. Cái lý ba đế viên dung là đức tánh sẵn có trong mười pháp giới, không một sự vật, một pháp gì, là không viên dung cả ba đế, cho nên thông thường gọi là: “một cảnh ba đế”.</li>
  </ul>

  <p>Hành giả sau khi đã quán thành thục, sẽ đi đến cái kết luận sau đây:<br>
  Chân như, Tâm và Vật, quan hệ mật thiết như tánh ướt, nước và sóng. Chân như dụ cho tánh ướt. Tâm dụ cho nước, Vật dụ cho sóng. Ngoài tánh ướt không có nước; ngoài nước không có sóng. Ngoài Chân như không có tâm, ngoài Tâm không có Vật. Chân như, Tâm và Vật không rời nhau, mà cũng không là một, mà cũng không khác.</p>

  <h3 id="qua-vi">IV. QUẢ VỊ TU CHỨNG</h3>
  <p>Như trên đã nói, do sự khám phá của “Nhất tâm tam quán”, Thiên Thai Tôn có một quan niệm lạc quan về sự tu chứng. Thật vậy, khi đã nhận rõ chân như nằm ngay trong sự vật, phàm, thánh không hai, uế độ tức tịnh độ, thì hành giả không cần phải cầu sinh ở một cảnh giới thanh tịnh nào khác mới tu hành được, cũng không cần phải tu hành lâu đời lâu kiếp mới thành Phật được. Ngay trong hiện tiền, nếu hiểu rõ được nghĩa lý của Trung đạo và khởi công tu luyện thì cũng đã là Phật rồi. Ấy là ý nghĩa mà Thiên Thai Tôn đã đề xướng trong chủ trương “Lục tức Phật”.</p>

  <p><strong>1. Lục tức Phật</strong>, gồm có: Lý tức Phật, Danh tự tức Phật, Quán hạnh tức Phật, Tương tợ tức Phật, Phần chứng tức Phật, Cứu cánh tức Phật.</p>
  <ul style="padding-left: 2.5rem;">
    <li><strong>1.1. Lý tức Phật.</strong> Lý tức là nghĩa lý. Hiểu rõ được nghĩa lý mà Đức Phật đã dạy trong câu: “Chúng sinh vốn đủ Phật tánh, cùng các đức Như Lai không hai không khác”; hay trong câu: “Hết thảy chúng sinh đều là Phật”; hiểu rõ được lý ấy tức là Phật.</li>
    <li><strong>1.2. Danh tự tức Phật.</strong> Danh tự ở đây tức là những kinh điển, hay những lời thuyết pháp mà mình đã đọc hay đã nghe được, và đã hiểu được thông suốt rằng: “Hết thảy các pháp đều là Phật pháp”. Danh tự tức Phật nghĩa là lãnh hội được lý tánh của vũ trụ, vạn hữu qua kinh điển, văn tự, tức là Phật.</li>
    <li><strong>1.3. Quán hạnh tức Phật.</strong> Quán là quán tưởng, Hạnh là tu hành, hành động; nói một cách tổng quát: quán hạnh tức Phật nghĩa là thực hành đúng theo những lời Phật dạy tức là Phật.</li>
    <li><strong>1.4. Tương tợ tức Phật.</strong> Chữ tương tợ ở đây có nghĩa là trong lúc mình tu hành, tuy chưa có thể thực chứng được lý tánh, nhưng tâm mình đã được yên lặng, nơi lý đã mường tượng như tuồng đã chứng được, nên gọi là tương tợ tức Phật. Đến đây tức là bậc Thập tín, thuộc về nội phàm (phàm phu trong nội giới).</li>
    <li><strong>1.5. Phần chứng tức Phật.</strong> Theo Thiên Thai Tôn, thì vô minh như là một tấm màn dày đặc gồm 41 lớp; mỗi khi nhờ công phu tu hành, phá trừ được một lớp tức là chứng được một phần trung đạo. Đó là ý nghĩa của phần chứng tức Phật. Đến đây tức là đã lên đến các bậc thập trụ, thập hạnh, thập hồi hướng, thập địa và đẳng giác.</li>
    <li><strong>1.6. Cứu cánh tức Phật.</strong> Cứu cánh tức là đạt được bậc cuối cùng, chứng được chỗ mầu nhiệm cực điểm, nghĩa là đến bậc Diệu giác, chủng trí đều viên mãn. Đến đây tức là đến bậc Diệu giác Phật vậy.</li>
  </ul>

  <p>Chúng ta nên nhớ rằng trong “Lục tức Phật” này có phân biệt Lý và Sự khác nhau. Về lý thì kẻ mới bắt đầu bước lên bậc thứ nhất và vị đã đến từng bậc thứ sáu, đều bình đẳng như nhau, không hơn không kém, vì thể tánh vẫn là một và mọi chúng sinh đều là Phật. Cái lý này đem lại cho hành giả sự phấn khởi, trên đường tu hành, không sinh lòng chán nản, không buồn trách mình chậm thành đạo quả mà thối tâm.</p>
  <p>Nhưng về Sự, thì vị thứ cao thấp đều có trật tự, kẻ mới tu hành và vị đã chứng quả Phật, không thể như nhau và ngang nhau được. Người tu hành hiểu rõ như thế mới không sinh lòng tăng thượng mạn, tự xưng là Phật, là Thánh trên bước đường tu hành của mình.</p>
  <p>Về Sự thì chỉ những vị đã đạt đến bậc thứ sáu, tức là bậc Cứu cánh, mới đúng danh nghĩa là Phật, vì chỉ có Phật mới có đủ ba Trí và ba Đức.</p>

  <p><strong>2. Ba trí:</strong> Ba Trí tức là Nhất thiết trí, Đạo chủng trí và Nhất thiết chủng trí.</p>
  <ul style="padding-left: 2.5rem;">
    <li><strong>2.1. Nhất thiết trí.</strong> Trí này rõ biết hết thảy (nhất thiết) các pháp đều không sinh; biết rõ danh, tướng của nội tâm và ngoại cảnh, biết rõ không có ngã và ngã sở (cái chấp của ngã). Trí này các bậc tu theo Tiểu thừa, sau khi đã chứng quả đều có được. Còn theo Thiên Thai Tôn thì do tu Không quán mà có được.</li>
    <li><strong>2.2. Đạo chủng trí.</strong> Trí này rõ biết nhất thiết pháp đều là Có, nhưng có một cách giả dối, do nhân duyên hòa hợp mà thành. Cái trí ở trên (nhất thiết trí) chỉ thông suốt được các pháp không sinh, chứ không phân biệt được các pháp do duyên khởi. Vì không rõ được nguyên nhân sinh khởi các pháp như thế, nên không thể dùng đạo pháp của các Đức Phật để phát khởi các giống lành cho hết thảy chúng sinh, và không dám phát nguyện rộng lớn cứu độ chúng sinh. Vậy phải có Đạo chủng trí này mới phá tan được trần sa hoặc, có tâm dũng mãnh để cứu độ chúng sinh. Trí này chỉ các bậc Bồ-tát mới có được, và do Giả quán mà thành.</li>
    <li><strong>2.3. Nhất thiết chủng trí.</strong> Trí này rõ biết được hết thảy pháp đều là trung đạo, biết được đạo pháp của các Đức Phật và hết thảy nhân chủng (chủng tử khi tạo nhân) của các loài chúng sinh, phá tan được vô minh hoặc, thông suốt thật tướng của các pháp. Trí này tức là trí của Phật, do thành tựu Trung quán mà có.</li>
  </ul>

  <p>Chứng được ba trí trên này là nhờ tu ba phép quán: không, giả, trung. Vì ba phép quán này có cách lịch, viên dung khác nhau, nên khi chứng được, ba trí cũng có thứ lớp và không thứ lớp khác nhau. Ba trí có thứ lớp nghĩa là thành tựu tuần tự từ Nhất thiết trí, đến Đạo chủng trí, cuối cùng đến Nhất thiết chủng trí.<br>
  Ba trí không thứ lớp là ba trí đồng thời thành tựu, do tu phép “Nhất tâm viên quán”.</p>

  <p>Đoạn văn sau đây, trong bộ Ma Ha Chỉ Quán có thể tóm tắt một cách đầy đủ ý nghĩa của ba trí nói trên:</p>
  <blockquote>
    <p>“Trí huệ Phật soi rõ lý Không, như chỗ nhận thấy của bậc Tiểu thừa, gọi là Nhất thiết trí. Trí huệ Phật soi rõ lý Giả, như sự nhận thấy của các bậc Bồ-tát, gọi là Đạo chủng trí. Trí huệ Phật soi rõ cả lý Không, Giả, Trung, thông suốt thật tướng các pháp, gọi là Nhất thiết chủng trí… Ba trí do một tâm, đồng thời tu ba phép quán mà thành, biết rõ ba cảnh bất tư nghị, trí ấy do tu quán mà đặng, nên gọi là trí. Trí ấy cũng chính là Phật trí.”</p>
  </blockquote>

  <p><strong>3. Ba Đức:</strong> Kết quả tu chứng của Thiên Thai Tôn, không phải chỉ có được Ba trí mà còn được ba Đức nữa. Chữ “Đức” ở đây không phải hiểu theo nghĩa thông thường ở thế gian, mà là đức của cảnh giới Niết-bàn, nghĩa là có đầy đủ thường, lạc, ngã, tịnh. Ba đức ấy là:</p>
  <ul style="padding-left: 2.5rem;">
    <li><strong>3.1. Đức Pháp thân.</strong> Pháp tức là khuôn phép đúng với chơn tướng của vũ trụ. Các Đức Phật nhờ nương theo khuôn phép ấy mà tu hành thành Phật, thể chứng được chơn tướng vũ trụ, cho nên gọi là pháp thân.</li>
    <li><strong>3.2. Đức Bát-nhã.</strong> Tức là cái đức sáng suốt về thủy giác của Phật, rõ biết các pháp không sinh không diệt, vắng lặng siêu hình, một mực bình đẳng, không thêm không bớt.</li>
    <li><strong>3.3. Đức Giải thoát.</strong> Giải là không bị ràng buộc; Thoát là vượt ra ngoài, là tự tại vô ngại. Ở đây muốn nói các Đức Phật đã lìa bỏ các phiền não nghiệp chướng ràng buộc, chứng được cảnh giới đại tự tại, Giải thoát vậy.</li>
  </ul>

  <h3 id="ket-luan">V. KẾT LUẬN</h3>
  <p>Bốn phần trình bày trên đây về Thiên Thai Tôn (duyên khởi lập tôn, tôn chỉ và giáo lý căn bản, phương pháp tu hành, và quả vị tu chứng) tuy không nói lên được một cách tỉ mỉ về mọi khía cạnh của tôn, nhưng thiết tưởng cũng đem lại cho quý vị độc giả một ý niệm căn bản, tổng quát về Thiên Thai Tôn, một tôn đặc biệt thành lập ở Trung Hoa và đã lan tràn ảnh hưởng sang các nước Mông Cổ, Nhật Bản, Cao Ly và Việt Nam.</p>

  <p>Điểm đặc sắc của tôn này chính là ở phép “Nhất tâm tam quán”. Nhờ ba phép quán này mà hành giả nhận chân được một cách rõ ràng ba khía cạnh của vũ trụ vạn hữu: Vật, Tâm và Chân như. Ba thứ ấy dụ cho sóng, nước và tánh ướt. Ba thứ ấy không rời nhau, cũng không phải là một mà cũng không phải là khác và vẫn dung thông nhau, cùng nhau hòa hiệp: Có một tất có cả ba, cả ba nhưng có thể quy về một; nếu đứng về phương diện sóng mà xét, thì nước cũng là sóng mà tánh ướt cũng là sóng; nếu đứng về phương diện nước mà xét, thì sóng cũng là nước, mà tánh ướt cũng là nước; nếu đứng về phương diện tánh ướt, thì sóng cũng là tánh ướt, mà nước cũng là tánh ướt. Nếu góp cả ba phương diện mà xét, thì ba phương diện vẫn có thể quy về một; nếu đứng về một phương diện mà xét, thì vẫn có thể thấy cả ba. Đó là ý nghĩa sâu sắc của Thiên Thai Tôn mà tất cũng là lý nghĩa chung của Viên giáo.</p>

  <p>Mong rằng quý độc giả sẽ nghiền ngẫm cho thấu đáo, để nhận rõ được cái lẽ “tam tức nhất, nhất tức tam” ấy. Và như thế tức cũng đi dần vào phép “Nhất tâm tam quán” rồi đó.</p>

  <p>Chúng tôi thành thật hy vọng quý vị độc giả, nếu thấy con đường tu thứ sáu này thích hợp với căn cơ của mình, hãy sớm khởi công tu hành để chóng thành tựu.</p>

  <h3 id="phu-tung-kinh">PHỤ: BA PHƯƠNG PHÁP TỤNG KINH</h3>
  <p>Nói đến sự truyền bá và tu hành theo Pháp Hoa Tôn, thì từ lâu, hầu hết trong giới Phật tử, xuất gia cũng như tại gia, đều không nghiêm chỉnh thực hành như Pháp Hoa Tôn, mà đa số chỉ tụng kinh Pháp Hoa.</p>
  <p>Riêng về sự tụng kinh, chúng tôi thấy nhiều Phật tử chưa rành rõ cách thức tụng. Người tụng nếu theo đúng cách thức, sẽ thấy thích thú lạ thường, càng tụng càng thú, mà người ngoài nghe cũng được nhẹ nhàng tâm trí.</p>
  <p>Vì thế, chúng tôi nói qua một vài cách thức tụng kinh gõ mõ, để giúp quý Phật tử nào chưa rành rõ, sẽ thâu hoạch được sự lợi lạc trong khi tụng kinh. Tụng kinh có ba cách:</p>

  <ol style="padding-left: 2.5rem;">
    <li><strong>Tụng với nhiều người.</strong> Cách tụng này, quý Phật tử đã biết: khi tụng với nhiều người, phải lấy mõ làm trường canh; tụng theo tiếng mõ, đọc mỗi tiếng là đánh một tiếng mõ; tiếng mõ đều đều; không mau lắm và cũng không chậm lắm. Nếu nghe tiếng tụng lơi quá, như xe mất trớn, thì người đánh mõ phải thúc đến; nếu mau quá thì nên chậm bớt lại. Người đánh chuông mõ phải đánh làm sao cho vừa người tụng, cũng như người nấu thức ăn, phải vừa miệng; như thế mới được lợi lạc. Trái lại, đánh chuông mõ không đều, cũng như thức ăn chẳng vừa miệng, người tụng nổi sân, bất lợi.</li>
    <li><strong>Tụng một mình.</strong> Khi tụng một mình thì mỗi tiếng tụng đánh mỗi tiếng mõ hoặc hai tiếng tụng đánh một tiếng mõ. Tiếng mõ phải chậm rãi, đều đều, không mau không chậm. Tiếng tụng kinh không lớn không nhỏ. Người nghe sẽ cảm thấy nhẹ nhàng thư thái.</li>
    <li><strong>Tụng giải thoát.</strong> Cách tụng này chỉ tụng một mình. Tiếng người tụng khi bổng khi trầm, lúc khoan lúc nhặt, giọng đọc rất thanh thoát; thỉnh thoảng điểm một vài tiếng mõ kêu sương, tiếng chuông ngân dài. Người tụng phải cảm thấy nhẹ nhàng, thích thú, người nghe tụng kinh, lòng như trút bớt những gì nặng nề triền phược. Cách tụng này, phải vào những lúc đêm khuya thanh vắng, và người tụng phải có một trình độ tu học khá cao mới được.</li>
  </ol>

  <p>Chúng tôi tin chắc quý Phật tử, sau khi biết qua ba phương pháp tụng kinh trên đây, và áp dụng đúng cách, nhất là phương pháp thứ 3, thì quý vị sẽ hưởng được sự lợi lạc vô cùng trong việc tụng kinh.</p>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Ai là người đã bổ túc và hoàn thiện phép 'Nhất tâm tam quán' để chính thức lập thành Thiên Thai Tôn tại núi Thiên Thai?",
    options: {
      a: "Đại sư Chương An",
      b: "Thiền sư Huệ Văn",
      c: "Thiền sư Huệ Tư",
      d: "Đại sư Trí Giả",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Ngài Trí Giả là một bậc đại sư, y theo kinh Pháp Hoa, bổ túc thêm cho phép Nhất tâm tam quán được hoàn bị và lập thành một tôn phái có uy thế tại núi Thiên Thai.'",
    },
  },
  {
    question: "Theo giáo lý Thiên Thai Tôn, thuật ngữ 'Pháp môn tánh cụ' mang ý nghĩa cốt lõi nào sau đây?",
    options: {
      a: "Vạn pháp đều do tâm biến hiện ra bên ngoài",
      b: "Bản tánh vốn có đầy đủ các pháp bao gồm cả thiện và ác",
      c: "Chỉ có những pháp thanh tịnh mới tồn tại trong Phật tánh",
      d: "Sự vật chỉ hiện hữu khi có sự quan sát của tâm",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Pháp môn tánh cụ nghĩa là bản tánh bao giờ cũng có đủ các pháp, như lành và dữ, tịnh và bất tịnh v.v…'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Loại mê lầm nào được ví như 'cát bụi', liên quan đến sự vô lượng của các pháp mà hàng Nhị thừa không nhận ra được?",
    options: {
      a: "Tư hoặc",
      b: "Trần sa hoặc",
      c: "Kiến hoặc",
      d: "Vô minh hoặc",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Trần sa hoặc nghĩa đen là cát bụi. Trần sa hoặc là những hoặc nhiều không thể đếm được, như cát bụi. Thật vậy, các pháp trong thế gian và ngoài thế gian đã là vô lượng...'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong ba phép quán, phép quán nào giúp hành giả nhận chân được các pháp 'tức Chơn, tức Tục', dung thông không chướng ngại?",
    options: {
      a: "Không quán",
      b: "Thứ đệ quán",
      c: "Trung quán",
      d: "Giả quán",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Nhờ Trung quán mới nhìn được cùng một lần cả hai khía cạnh Có và Không, mới nhận chân được rõ ràng các pháp không phải Chơn mà cũng không phải Tục, tức Chơn, tức Tục, dung thông cả hai...'",
      d: "Sai.",
    },
  },
  {
    question: "Khi thực hành 'Nhất tâm tam quán' theo lối Viên dung, hành giả sẽ đạt được trạng thái nào?",
    options: {
      a: "Trong một tâm niệm mà cả ba phép quán đều đầy đủ và không ngăn ngại",
      b: "Loại bỏ hoàn toàn thế giới vật chất để nhập vào Chân như",
      c: "Thực hiện xong Không quán rồi mới chuyển sang Giả quán",
      d: "Chỉ tập trung vào phương diện Không để thoát ly sinh tử",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Theo pháp quán này, thì dùng một tâm mà đồng thời tu ba pháp quán, nghĩa là trong một tâm niệm mà ba pháp quán đều đủ và không ngăn ngại nhau. Quán như thế gọi là: Nhất tâm tam quán.'",
      b: "Sai.",
      c: "Sai. Đây là quán theo thứ lớp (thứ đệ).",
      d: "Sai.",
    },
  },
  {
    question: "Bậc nào trong 'Lục tức Phật' chỉ những người đã hiểu thông suốt kinh điển và lãnh hội được lý tánh nhưng chưa bắt đầu thực hành sâu?",
    options: {
      a: "Phần chứng tức Phật",
      b: "Quán hạnh tức Phật",
      c: "Danh tự tức Phật",
      d: "Lý tức Phật",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Danh tự tức Phật nghĩa là lãnh hội được lý tánh của vũ trụ, vạn hữu qua kinh điển, văn tự, tức là Phật.'",
      d: "Sai.",
    },
  },
  {
    question: "Trí huệ nào giúp Bồ-tát biết rõ các pháp là giả có do nhân duyên để từ đó dũng mãnh cứu độ chúng sinh?",
    options: {
      a: "Đạo chủng trí",
      b: "Nhất thiết trí",
      c: "Nhất thiết chủng trí",
      d: "Thủy giác trí",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Đạo chủng trí. Trí này rõ biết nhất thiết pháp đều là Có, nhưng có một cách giả dối... phải có Đạo chủng trí này mới phá tan được trần sa hoặc, có tâm dũng mãnh để cứu độ chúng sinh.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong ẩn dụ về sóng, nước và tánh ướt, yếu tố nào đại diện cho 'Vật' (thế giới hiện tượng)?",
    options: {
      a: "Nước",
      b: "Sóng",
      c: "Đại dương",
      d: "Tánh ướt",
    },
    answer: "b",
    explanation: {
      a: "Sai. Nước dụ cho Tâm.",
      b: "Đúng. 'Chân như, Tâm và Vật, quan hệ mật thiết như tánh ướt, nước và sóng. Chân như dụ cho tánh ướt. Tâm dụ cho nước, Vật dụ cho sóng.'",
      c: "Sai.",
      d: "Sai. Tánh ướt dụ cho Chân như.",
    },
  },
  {
    question: "Vì sao Thiên Thai Tôn phân biệt giữa 'Lý' và 'Sự' trong hệ thống Lục tức Phật?",
    options: {
      a: "Để khẳng định chỉ có bậc Cứu cánh mới thực sự là Phật",
      b: "Để người tu không nảy sinh lòng tự mãn (tăng thượng mạn) khi chưa thực chứng",
      c: "Để ưu tiên việc học tập lý thuyết hơn là thực hành",
      d: "Để chứng minh rằng chúng sinh và Phật hoàn toàn khác biệt",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Nhưng về Sự, thì vị thứ cao thấp đều có trật tự, kẻ mới tu hành và vị đã chứng quả Phật, không thể như nhau... Người tu hành hiểu rõ như thế mới không sinh lòng tăng thượng mạn, tự xưng là Phật, là Thánh...'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Phương pháp 'Tụng giải thoát' trong ba cách tụng kinh có đặc điểm nào nổi bật?",
    options: {
      a: "Dùng tiếng mõ làm trường canh đều đặn cho nhiều người",
      b: "Tiếng tụng khi bổng khi trầm, khoan nhặt và thanh thoát",
      c: "Phải tụng thật to để lấn át những tạp âm bên ngoài",
      d: "Mỗi tiếng tụng phải đánh kèm một tiếng mõ một cách nghiêm ngặt",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là cách tụng với nhiều người.",
      b: "Đúng. 'Tiếng người tụng khi bổng khi trầm, lúc khoan lúc nhặt, giọng đọc rất thanh thoát; thỉnh thoảng điểm một vài tiếng mõ kêu sương...'",
      c: "Sai.",
      d: "Sai. Đây là đặc điểm của tụng một mình.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-6-mat-tong-va-thien-thai-tong-thien-thai-tong',
  slug: 'thien-thai-tong',
  title: 'Thiên Thai Tông',
  type: 'article',
  status: 'published',
  order: 3,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-6.3-thien-thai-tong/Tri%E1%BA%BFt_l%C3%BD_Thi%C3%AAn_Thai_T%C3%B4ng.png',
      readingContent,
      tableOfContents: [
        { id: 'duyen-khoi', label: 'I. Duyên Khởi Lập Tôn' },
        { id: 'ton-chi', label: 'II. Tôn Chỉ Và Giáo Lý' },
        { id: 'phuong-phap-tu', label: 'III. Phương Pháp Tu Hành' },
        { id: 'qua-vi', label: 'IV. Quả Vị Tu Chứng' },
        { id: 'ket-luan', label: 'V. Kết Luận' },
        { id: 'phu-tung-kinh', label: 'Phụ: Ba Cách Tụng Kinh' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-6.3-thien-thai-tong/Tiantai_One_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/YCo_gwlzdy8',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4LxphOdHmRDhvYEEzdMmyH',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Thiên Thai Tông',
    passPercentage: 70,
    questions,
  }
}

export default lesson