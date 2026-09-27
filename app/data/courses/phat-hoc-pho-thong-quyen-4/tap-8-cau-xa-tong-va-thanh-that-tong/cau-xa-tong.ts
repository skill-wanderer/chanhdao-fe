import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 8</span>

  <h2>Tập 8: CÂU XÁ TÔNG</h2>
  <p><strong>CON ĐƯỜNG TU THỨ CHÍN TRONG 10 TÔNG</strong></p>

  <hr>

  <h3 id="duyen-khoi">I. DUYÊN KHỞI LẬP TÔNG</h3>
  <p>Tông này thuộc về Tiểu thừa, phát xuất từ bộ luận Câu xá của ngài Thế Thân. Bộ luận Câu xá lại dựa theo ý nghĩa của bộ luận Đại Tỳ-bà-sa (Mahāvibhāṣā-śāstra) mà thành lập.</p>
  <p>Bộ luận Câu xá được ngài Chân Đế dịch và truyền sang Tàu rất sớm, nhưng về sau bị thất truyền. Trong giai đoạn đầu này, Câu xá tông chưa thành một tông phái riêng biệt ở Trung Hoa. Chỉ đến khi ngài Huyền Trang đi thỉnh kinh ở Ấn Độ trở về, đem dịch lại bộ luận Câu xá và đệ tử của ngài là Đại sư Phổ Quang dựa theo bộ luận nói trên mà làm ra bộ Câu xá luận thuật ký, và ngài Pháp Bảo làm bộ Câu xá luận sớ thì Câu xá tông mới thành một tông và được thịnh hành ở Trung Hoa.</p>
  <p>Nhưng hết đời Đường (từ đầu thế kỷ thứ VII đến cuối thế kỷ thứ X) thì tông này dần dần suy tàn và nhường địa vị quan trọng cho những tông phái Đại thừa khác, thích hợp với triết học và tâm lý của người Trung Hoa hơn.</p>

  <h3 id="ton-chi">II. TÔNG CHỈ VÀ GIÁO LÝ CĂN BẢN</h3>
  <h4>1. Tông chỉ</h4>
  <p>Tông này chủ trương “ngã không, pháp hữu”, nghĩa là không có thật ngã nhưng có thật pháp.</p>
  <p>Đối với các tôn giáo khác thì chủ trương có một cái thật ngã, chủ tể thường nhất, một cái linh hồn trường tồn bất biến, mặc dù mọi sự vật đổi thay, sống hay chết. Theo Câu xá tông thì một cái ngã như thế không thể có được, vì mọi sự mọi vật trong vũ trụ, kể cả con người đều là giả hợp mà thành, chứ không có một vật gì đồng nhất và bất biến. Đây cũng là chủ trương chung của các giáo phái khác trong Phật giáo.</p>
  <p>Điểm sai khác giữa Câu xá tông với các tông phái khác là: Câu xá tông thì chủ trương Pháp hữu, trong khi các giáo phái khác thì bảo rằng Pháp không; Pháp hữu nghĩa là bản thể thực tại của các pháp, hay nói một cách dễ hiểu hơn, nguyên liệu sinh ra các sự vật trong vũ trụ, là thường có, là có thật. Thí dụ: con người không có thật ngã, nhưng những nguyên liệu làm ra con người, như ngũ uẩn, tứ đại là thật có.</p>

  <h4>2. Vũ trụ quan</h4>
  <p>Câu xá tông phân biệt vũ trụ vạn hữu ra làm hữu vi pháp và vô vi pháp. Hữu vi pháp chỉ về vạn tượng trong hiện tượng giới, có sanh diệt, chuyển biến. Vô vi pháp chỉ về cảnh giới thường trụ, không sanh diệt, chuyển biến, cũng tức là chỉ về lý thể.</p>
  <p>Hữu vi pháp gồm có 72 món, và Vô vi pháp gồm có 3 món, cộng tất cả là 75 món, hay 75 pháp.</p>
  <p>Trong phạm vi nhỏ hẹp của tập sách, chúng tôi không thể đi sâu để giải thích từng pháp một được. Tuy thế, để có một ý niệm về các loại pháp ấy, chúng tôi xin sơ lược giải thích đại khái sau đây:</p>
  <ul style="padding-left: 2.5rem;">
    <li><strong>Sắc pháp:</strong> Phàm cái gì có thể hư nát và có tánh cách chướng ngại đều thuộc về sắc pháp. Trong 11 món thuộc về sắc pháp, gồm có 5 căn và 5 cảnh, thì độc giả cũng đã biết rồi, không cần phải giải nữa; còn món thứ 11 là vô biểu sắc, cần phải giải thích. Vô biểu sắc là cái sắc pháp không biểu hiện ra ngoài (pháp trần); nó là đối tượng của ý căn.</li>
    <li><strong>Tâm pháp:</strong> Cũng gọi là Tâm vương, vì nó có năng lực chủ động như ông vua có quyền chủ trương trong một nước. Tâm vương có ba tên: tâm, ý, và thức. Theo Câu xá luận thì: “Nhóm góp các tập quán mà khởi ra gọi là tâm; nghĩ ngợi gọi là ý; phân biệt gọi là thức”.</li>
    <li><strong>Tâm sở pháp:</strong> Là cái pháp sở hữu phụ thuộc của tâm vương, như các ông quan phụ thuộc dưới quyền sai sử của ông vua, hay các nhân viên phụ thuộc dưới sự điều khiển của ông chủ.</li>
    <li><strong>Bất tương ưng hành pháp:</strong> Có thể gọi tắt là cái pháp bất tương ưng, nghĩa là các pháp không hẳn thuộc về sắc, mà cũng không hẳn thuộc về tâm, nhưng là kết quả của sự tiếp xúc giữa tâm và sắc. Thí dụ như “sự được” (đắc) là một pháp bất tương ưng. Khi ta được một cái gì, sự được ấy không thuộc về sắc pháp, cũng không thuộc về tâm pháp. “Cái mà ta được” là sắc pháp; “cái nỗi vui mừng” khi được là tâm pháp; còn “sự được” không thể liệt vào sắc pháp hay tâm pháp được, vì thế cho nên gọi là bất tương ưng hành pháp.</li>
    <li><strong>Vô vi pháp:</strong> Nghĩa là những pháp không sanh diệt, chuyển biến, vượt ra ngoài sự đối đãi. Vô vi gồm có ba pháp là: trạch diệt vô vi, phi trạch diệt vô vi và hư không vô vi.</li>
  </ul>
  <p>Bảy mươi lăm pháp này bao gồm tất cả sự vật trong vũ trụ.</p>
  <p>Sự vật trong vũ trụ chia ra làm hai loại lớn là: Hữu tình thế gian và Khí thế gian.</p>
  <ul style="padding-left: 2.5rem;">
    <li>Hữu tình thế gian tức là toàn thể chúng sanh, có sự sống.</li>
    <li>Khí thế gian tức là hoàn cảnh mà chúng sanh nương vào để sống như đất cát, núi sông, nhà cửa v.v...</li>
  </ul>
  <p>Xét về phương diện thời gian, thì vũ trụ là vô thủy và vô chung, nghĩa là không có lúc bắt đầu và cũng không có lúc chung cục, mà chỉ có sự thay đổi, biến chuyển thôi. Trong vũ trụ có hằng hà sa thế giới, thế giới này thành, thì thế giới kia hoại, đắp đổi cho nhau. Tuy thế, riêng mỗi thế giới, từ khi sanh thành cho đến khi tiêu diệt, phải trải qua bốn giai đoạn (thành, trụ, hoại, không) gồm một đại kiếp, tức là một ngàn hai trăm tám chục triệu năm (1.280.000.000).</p>
  <p>Xét về phương diện không gian, thì vũ trụ rộng lớn không thể tưởng tượng được. Trước tiên đơn vị nhỏ nhất của vũ trụ là thế giới (như thế giới nhỏ mà chúng ta đang ở đây). Họp một ngàn thế giới mới thành được một tiểu thiên thế giới; họp một ngàn tiểu thiên thế giới mới thành một trung thiên thế giới; họp một ngàn trung thiên thế giới mới thành một đại thiên thế giới. Như thế một đại thiên thế giới gồm (1.000 x 1.000 x 1.000) một ngàn triệu thế giới nhỏ (như thế giới chúng ta đang ở đây). Nhưng trong vũ trụ không phải chỉ có một đại thiên thế giới mà có vô lượng vô số đại thiên thế giới; cho nên trong kinh thường nói là: thập phương vi trần thế giới (mười phương thế giới nhiều như cát bụi) hay thập phương hằng hà sa thế giới (mười phương thế giới nhiều như cát sông Hằng).</p>
  <p>Xét về phương diện phẩm chất thì vũ trụ chia làm ba tầng bậc cao thấp khác nhau, cũng gọi là tam giới, hay ba cõi là: dục giới, sắc giới, vô sắc giới.</p>
  <ul style="padding-left: 2.5rem;">
    <li>Dục giới là cõi của loài hữu tình chưa xa lìa được dâm dục và thực dục. Trong dục giới có sáu loại chúng sanh (lục đạo) hoặc năm loại chúng sanh (ngũ thú) là: thiên, nhân, súc sinh, ngạ quỷ, địa ngục.</li>
    <li>Sắc giới là cõi của loài hữu tình có hình sắc tốt đẹp, đã rời bỏ được dâm dục và thực dục. Cõi này có bốn bậc là: Sơ thiền (Ly sanh hỷ lạc địa), Nhị thiền (Định sanh hỷ lạc địa), Tam thiền (Ly hỷ diệu lạc địa), và Tứ thiền (Xả niệm thanh tịnh địa).</li>
    <li>Vô sắc giới là cõi không có hình sắc. Các loài hữu tình sanh trong cõi này chỉ có tâm thức mà thôi. Cõi này cũng chia làm bốn tầng bậc cao thấp, thông thường gọi là Tứ không thiên: Không vô biên xứ, Thức vô biên xứ, Vô sở hữu xứ và Phi tưởng phi phi tưởng xứ.</li>
  </ul>

  <h4>3. Nhân sinh quan</h4>
  <p>Chúng sanh nói chung, và con người nói riêng, do đâu mà có? Và đời sống của chúng sanh có giá trị như thế nào?</p>
  <p>a) Theo Câu xá tông, thì chúng sanh sở dĩ bị xoay chuyển trong vòng sanh tử luân hồi, là do “nghiệp cảm duyên khởi”, nghĩa là do mê hoặc mà tạo nghiệp, do tạo nghiệp làm nhân mà cảm thọ các quả báo.</p>
  <p>Thế nào gọi là hoặc? Hoặc nghĩa là mê mờ, không sáng suốt, không biết đâu là phải, đâu là trái, tức là vô minh, mê vọng. Hoặc có 2 loại: bổn hoặc và tùy hoặc. Bổn hoặc là sự mê lầm cội gốc, cũng gọi là căn bản phiền não, như tham, sân, si, mạn, nghi, ác kiến. Tùy hoặc là những mê lầm dựa theo bổn hoặc mà phát sinh, cũng gọi là tùy phiền não.</p>
  <p>Trong 6 bổn hoặc nói trên, thì năm hoặc đầu: tham, sân, si, mạn, nghi, vì tánh chất chậm lụt, ăn sâu gốc rễ trong thâm tâm chúng ta, rất khó dứt trừ, nên gọi là ngũ độn sử (sử là sai sử, xúi sử; những sử này sai khiến một cách tiềm tàng, sâu kín loài hữu tình làm cho chúng sanh cứ lẩn quẩn trong chỗ mê lầm nên gọi là độn sử).</p>
  <p>Còn hoặc thứ sáu là ác kiến, thì vì tánh chất lanh lẹ, không ăn sâu gốc rễ trong thâm tâm và dễ dứt trừ, nên gọi là lợi sử. Ác kiến hay lợi sử gồm có năm thứ là: Thân kiến, biên kiến, tà kiến, kiến thủ và giới cấm thủ.</p>
  <ul style="padding-left: 2.5rem;">
    <li>Thân kiến là chấp một cách sai lầm rằng cái thân do ngũ uẩn giả hiệp này là có thật ngã.</li>
    <li>Biên kiến là chấp sai lầm rằng cái thân này chết rồi thì tiêu diệt hẳn, không còn gì cả (đoạn kiến) hay trái lại, chấp cái thân này chết rồi, linh hồn vẫn còn mãi mãi (thường kiến). Những sự chấp ấy làm mất hẳn lý trung đạo, nên gọi là biên kiến.</li>
    <li>Tà kiến là chấp những đạo lý mơ hồ và bài bác những lý nhân quả chơn chánh.</li>
    <li>Kiến thủ là chấp chặt kiến giải sai lầm của mình, mà không chịu theo lời các bậc hiền thánh.</li>
    <li>Giới cấm thủ là giữ giới sai lầm như giữ những giới khổ hạnh của ngoại đạo v.v...</li>
  </ul>
  <p>Do những bổn hoặc và ác kiến nói trên sai sử, chúng sanh tạo ra các nghiệp, làm nhân quả cho nhau và khiến cho chúng sanh phải xoay vần mãi trong sanh tử luân hồi. Nghiệp có ba thứ:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Ý nghiệp, tức là sự suy nghĩ, hành động của ý niệm.</li>
    <li>Ngữ nghiệp, tức là sự nói năng.</li>
    <li>Thân nghiệp, tức là những hành động về thân xác.</li>
  </ul>
  <p>Nghiệp có ba tính là: lành, dữ và vô ký (nghĩa là trung bình, không lành, không dữ). Nghiệp lành thì có quả báo lành, nghiệp dữ thì có quả báo dữ. Còn nghiệp vô ký thì có quả báo không lành không dữ. Nghiệp lành, cũng như nghiệp dữ, đều có mười thứ:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Mười nghiệp dữ là: giết hại, trộm cắp, tà dâm, nói dối gạt, nói thêu dệt, nói chia rẽ, nói ác độc, tham lam, giận dữ, si mê.</li>
    <li>Mười nghiệp lành là: không giết hại, không trộm cắp, không tà dâm, không dối gạt, không nói thêu dệt, không nói chia rẽ, không nói ác độc, không tham lam, không giận dữ, không si mê.</li>
  </ul>
  <p>Quả báo của mười nghiệp lành và mười nghiệp dữ có mau có chậm, nghĩa là có khi xảy ra ngay trong một đời, có khi hai ba đời sau mới thọ quả báo.</p>
  <p>Khi thời kỳ cảm quả chịu báo đã xác định, thì gọi là định nghiệp. Trái lại, thì gọi là bất định nghiệp. Bất định nghiệp có hai thứ: một là quả báo đã định mà thời kỳ chịu quả báo chưa định; hai là cả quả báo và thời kỳ chịu quả báo đều chưa định.</p>
  <p>b) Trên đây là nói lý do vì sao có sự hiện diện của chúng sanh trong thế giới này. Dưới đây, chúng ta sẽ nói đến giá trị của sự hiện diện ấy theo quan niệm của Câu xá tông, tức cũng là quan niệm của Tiểu thừa Phật giáo.</p>
  <p>Quan niệm ấy không xa lạ gì đối với chúng ta. Đó là: cõi đời là một biển khổ, trong ấy, chúng sanh đang lặn hụp, trôi lăn, sống chết. Con người khổ vì sanh, lão, bệnh, tử. Con người khổ vì yêu nhau mà phải xa lìa, ghét nhau mà phải chung sống, muốn một đàng mà thực tế đưa đi một nẻo. Con người khổ vì tai trời, nạn nước: bão, lụt, chiến tranh, trộm cướp v.v... Con người khổ vì sống trong một hoàn cảnh mê mờ, tối tăm, không biết đâu là thật, đâu là giả, đâu là hạnh phúc chân thật, đâu là ảo ảnh giả dối. Con người khổ vì mong được trường tồn mà cõi đời lại vô thường, luôn luôn biến đổi, có đó không đó, còn đó mất đó, như một trò mộng huyễn. Con người khổ vì tưởng rằng có một cái thật ngã làm nòng cốt cho sự sống, thuần nhất, tự tại, ngờ đâu cái Ngã ấy là giả dối, không có thật, và bị hoàn cảnh chi phối làm cho điêu đứng, đảo điên.</p>
  <p>Tóm lại, cõi đời là một bể khổ làm bằng nước mắt của tất cả chúng sanh.</p>

  <h3 id="phuong-phap-tu">III. PHƯƠNG PHÁP TU HÀNH</h3>
  <h4>1. Tứ diệu đế</h4>
  <p>Muốn giải thoát ra ngoài bể khổ mênh mông của cõi đời, Câu xá tông chủ trương phải tu theo pháp “Tứ diệu đế”. Tứ diệu đế tức là bốn lẽ chân thật đưa người tu hành từ cảnh mê đến cảnh ngộ, từ cõi Ta bà đau khổ, đến cảnh giới Niết bàn tịch tịnh.</p>
  <ul style="padding-left: 2.5rem;">
    <li>Diệu đế thứ nhất (Khổ đế) chỉ rõ cho người tu hành thấy cõi đời là đau khổ.</li>
    <li>Diệu đế thứ hai (Tập đế) chỉ rõ cho người tu hành thấy được nguyên nhân của sự đau khổ trong cõi Ta bà.</li>
    <li>Diệu đế thứ ba (Diệt đế) chỉ rõ cảnh giới an lạc sau khi ra khỏi cõi đời đau khổ.</li>
    <li>Diệu đế thứ tư (Đạo đế) chỉ rõ con đường tu hành để đi đến cảnh giới an lạc của Niết bàn.</li>
  </ul>
  <p>Bốn Diệu đế ấy tức là: khổ, tập, diệt, đạo vậy.</p>

  <h4>2. Thập nhị nhân duyên</h4>
  <p>Đối với những căn cơ lanh lợi, thì có thể tu theo pháp Thập nhị nhân duyên. Thập nhị nhân duyên là 12 nhân duyên kế tiếp theo nhau, làm nhân làm quả khiến cho chúng sanh phải mãi mãi xoay vần trong biển khổ sanh tử luân hồi. Mười hai nhân duyên ấy là: vô minh, hành, thức, danh sắc, lục nhập, xúc, thọ, ái, thủ, hữu, sanh, lão tử.</p>
  <p>Mười hai nhân duyên này như mười hai vòng xích nối liền với nhau làm thành một chuỗi xích, không biết đâu là đầu, đâu là cuối. Nếu cắt đứt được một vòng xích thì chuỗi xích ấy tất phải đứt đoạn. Đối với kẻ tu hành, muốn chấm dứt sanh tử luân hồi, thì mắt xích cần phải bị cắt đứt là “ái”. Ái ở đây tức là luyến ái. Vì luyến ái nên mới cố thủ cho mình, “thủ” sanh “hữu”. Và từ đó, cái vòng sanh tử lại tái diễn. Vậy không có “ái” thì không có “hữu”, không có “hữu” thì không có “sanh”, không có “sanh” thì không có “lão tử”, nghĩa là không có khổ đau.</p>

  <h3 id="qua-vi">IV. QUẢ VỊ TU CHỨNG</h3>
  <h4>1. Người tu theo pháp Tứ diệu đế</h4>
  <p>Nếu mau lắm thì cũng phải trải qua ba đời, còn nếu chậm, thì phải trải qua 60 kiếp, mới chứng được quả A-la-hán, là cõi cao nhất của hàng Thanh Văn.</p>
  <p>Trước khi chứng được quả vị A-la-hán, hành giả tuần tự chứng các quả dưới đây:</p>
  <ul style="padding-left: 2.5rem;">
    <li>Tu-đà-hoàn, Hán dịch là Nhập lưu, hay Dự lưu, nghĩa là bắt đầu nhập vào dòng Thánh.</li>
    <li>Tư-đà-hàm, Hán dịch là Nhất lai, nghĩa là còn phải đầu thai vào cõi Dục giới một lần cuối cùng nữa, để tu hành cho rốt ráo, trước khi vĩnh viễn xa rời cõi này.</li>
    <li>A-na-hàm, Hán dịch là Bất lai, nghĩa là không còn đầu thai vào cõi Dục giới nữa.</li>
  </ul>
  <p>Hết bậc này là đến quả vị A-la-hán. A-la-hán, Hán dịch là Ứng cúng hay Vô sanh, nghĩa là dứt bỏ được các điều mê lầm trong cõi Sắc giới và Vô sắc giới, không còn phiền não, không còn chịu sanh tử luân hồi, vượt ra khỏi ba cõi, hưởng sự cúng dường của thiên và nhân. Bậc này cũng gọi là bậc Vô học, nghĩa là không còn phải học pháp gì nữa.</p>

  <h4>2. Đối với lối tu Duyên giác</h4>
  <p>Nghĩa là tu theo lối quán 12 nhân duyên, thì quả vị không có chia ra nhiều tầng bậc, chẳng qua khi đang tu hành thì gọi là Duyên giác hướng, nghĩa là đi lần tới mục đích của sự tu hành là quả Duyên giác. Còn khi tu hành được đầy đủ, dứt mối mê lầm chứng được chân lý, thường hưởng được cái vui giải thoát trong cảnh Niết bàn, thì gọi là Duyên giác quả.</p>
  <p>Vị chứng được quả này thì gọi là Bích Chi Phật, tức là vị Phật đã tự giải thoát cho mình, nhưng chưa có thể giác tha. Từ khi bắt đầu tu hành cho đến khi chứng quả Duyên giác, thời gian dài ngắn khác nhau tùy theo căn cơ của kẻ tu hành: với căn cơ lanh lợi thì ít ra cũng trải qua 4 đời tu luyện; với căn cơ chậm lụt thì phải trải qua 100 kiếp tu hành.</p>

  <h3 id="ket-luan">V. KẾT LUẬN</h3>
  <p>Câu xá tông, mặc dù chỉ là một tông phái trong nhiều tông phái của Tiểu thừa, nhưng có thể đại diện một cách gần đầy đủ cho phái Tiểu thừa Phật giáo. Bởi thế, đọc Câu xá tông, chúng ta có thể hiểu một cách khá tường tận giáo lý căn bản và phương pháp tu hành của hàng Tiểu thừa trong quá khứ xa xưa.</p>
  <p>Nhưng từ khi tông này được thành lập ở Trung Hoa đến bây giờ, thời gian đã trôi qua hơn một ngàn năm. Trong thời gian ấy, chắc cũng có nhiều sự biến đổi trong chi tiết. Chúng tôi rất tiếc không có nhiều tài liệu để nghiên cứu một cách đầy đủ những biến chuyển của tông này qua thời gian và sự tồn tại của nó trong hiện tại như thế nào. Do đó, chúng tôi thành thật đề nghị với quý độc giả hãy xem tập sách nhỏ này như một tập nghiên cứu về một trong mười tông phái ở Trung Hoa, chứ chưa phải là một “con đường” hoàn bị, hướng dẫn trực tiếp quý vị vào sự tu luyện. Chúng tôi muốn nói, nếu quý vị thấy căn cơ mình thích hợp với giáo lý Tiểu thừa, mà muốn bắt tay vào sự tu luyện, thì cũng cần phải tìm đọc thêm nhiều nữa và nghiên cứu cho đến nơi đến chốn để khỏi lạc hướng sai đường.</p>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Tông Câu xá chủ trương tư tưởng cốt lõi nào sau đây về thực tại?",
    options: {
      a: "Ngã hữu, pháp hữu",
      b: "Ngã không, pháp không",
      c: "Ngã không, pháp hữu",
      d: "Ngã hữu, pháp không",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Tông này chủ trương “ngã không, pháp hữu”, nghĩa là không có thật ngã nhưng có thật pháp.'",
      d: "Sai.",
    },
  },
  {
    question: "Theo Câu xá luận, tổng số các món pháp (sự vật, hiện tượng) trong vũ trụ được chia thành bao nhiêu loại?",
    options: {
      a: "84 pháp",
      b: "12 pháp",
      c: "75 pháp",
      d: "100 pháp",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Hữu vi pháp gồm có 72 món, và Vô vi pháp gồm có 3 món, cộng tất cả là 75 món, hay 75 pháp.'",
      d: "Sai.",
    },
  },
  {
    question: "Loại pháp nào được định nghĩa là 'không hẳn thuộc về sắc, cũng không hẳn thuộc về tâm, nhưng là kết quả của sự tiếp xúc giữa tâm và sắc'?",
    options: {
      a: "Bất tương ưng hành pháp",
      b: "Tâm sở pháp",
      c: "Vô vi pháp",
      d: "Vô biểu sắc",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Bất tương ưng hành pháp: ...nghĩa là các pháp không hẳn thuộc về sắc, mà cũng không hẳn thuộc về tâm, nhưng là kết quả của sự tiếp xúc giữa tâm và sắc.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong quan niệm về thời gian của Câu xá tông, một 'đại kiếp' kéo dài bao nhiêu năm?",
    options: {
      a: "1.280.000.000 năm",
      b: "128.000.000 năm",
      c: "12.800.000.000 năm",
      d: "1.280.000 năm",
    },
    answer: "a",
    explanation: {
      a: "Đúng. '...gồm một đại kiếp, tức là một ngàn hai trăm tám chục triệu năm (1.280.000.000).'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Cõi nào trong 'Tam giới' được mô tả là nơi chúng sanh không còn hình sắc, chỉ tồn tại tâm thức?",
    options: {
      a: "Vô sắc giới",
      b: "Sơ thiền địa",
      c: "Sắc giới",
      d: "Dục giới",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Vô sắc giới là cõi không có hình sắc. Các loài hữu tình sanh trong cõi này chỉ có tâm thức mà thôi.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong 'Ngũ độn sử', phiền não nào được coi là sự mê lầm cội gốc, khó dứt trừ nhất?",
    options: {
      a: "Ác kiến",
      b: "Giới cấm thủ",
      c: "Tham, sân, si, mạn, nghi",
      d: "Thân kiến",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là lợi sử.",
      b: "Sai.",
      c: "Đúng. '...tham, sân, si, mạn, nghi, vì tánh chất chậm lụt, ăn sâu gốc rễ trong thâm tâm chúng ta, rất khó dứt trừ, nên gọi là ngũ độn sử...'",
      d: "Sai.",
    },
  },
  {
    question: "Theo giáo lý Thập nhị nhân duyên, hành giả cần cắt đứt 'mắt xích' nào để chấm dứt vòng sinh tử luân hồi?",
    options: {
      a: "Ái",
      b: "Danh sắc",
      c: "Lão tử",
      d: "Vô minh",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Đối với kẻ tu hành, muốn chấm dứt sanh tử luân hồi, thì mắt xích cần phải bị cắt đứt là ái. Ái ở đây tức là luyến ái.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Quả vị 'A-na-hàm' (Bất lai) có ý nghĩa gì đối với một hành giả Thanh văn?",
    options: {
      a: "Không còn tái sinh vào cõi Dục giới nữa",
      b: "Đã nhập vào dòng Thánh lần đầu tiên",
      c: "Còn phải đầu thai vào cõi Dục một lần cuối",
      d: "Đã hoàn toàn dứt bỏ mọi phiền não trong ba cõi",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'A-na-hàm, Hán dịch là Bất lai, nghĩa là không còn đầu thai vào cõi Dục giới nữa.'",
      b: "Sai. Đây là Tu-đà-hoàn.",
      c: "Sai. Đây là Tư-đà-hàm.",
      d: "Sai. Đây là A-la-hán.",
    },
  },
  {
    question: "Sự khác biệt chính giữa quả vị Duyên giác và A-la-hán là gì?",
    options: {
      a: "A-la-hán tự ngộ không cần thầy dạy",
      b: "A-la-hán phải tu trong thời gian lâu hơn Duyên giác",
      c: "Duyên giác có khả năng giáo hóa chúng sanh rộng rãi",
      d: "Duyên giác tự giải thoát cho mình nhưng chưa giác tha",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Vị chứng được quả này thì gọi là Bích Chi Phật, tức là vị Phật đã tự giải thoát cho mình, nhưng chưa có thể giác tha.'",
    },
  },
  {
    question: "Tại sao Câu xá tông dần suy tàn tại Trung Hoa sau đời Đường?",
    options: {
      a: "Do bị triều đình cấm đoán hoạt động",
      b: "Do các đại sư truyền thừa không còn đệ tử",
      c: "Do thiếu các bản dịch kinh điển chính xác",
      d: "Do không phù hợp với triết học và tâm lý người Trung Hoa",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Nhưng hết đời Đường... thì tông này dần dần suy tàn và nhường địa vị quan trọng cho những tông phái Đại thừa khác, thích hợp với triết học và tâm lý của người Trung Hoa hơn.'",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-8-cau-xa-tong-va-thanh-that-tong-cau-xa-tong',
  slug: 'cau-xa-tong',
  title: 'Câu Xá Tông',
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
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-8.1-cau-xa-tong/KI%E1%BA%BEN_TR%C3%9AC_GI%E1%BA%A2I_THO%C3%81T_C%C3%82U_X%C3%81.pdf',
      readingContent,
      tableOfContents: [
        { id: 'duyen-khoi', label: 'I. Duyên Khởi Lập Tông' },
        { id: 'ton-chi', label: 'II. Tông Chỉ Và Giáo Lý Căn Bản' },
        { id: 'phuong-phap-tu', label: 'III. Phương Pháp Tu Hành' },
        { id: 'qua-vi', label: 'IV. Quả Vị Tu Chứng' },
        { id: 'ket-luan', label: 'V. Kết Luận' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-4/tap-8.1-cau-xa-tong/Tri%E1%BA%BFt_l%C3%BD_C%C3%A2u_X%C3%A1_T%C3%B4ng.png',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/j-Z7jEEI-tw',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/0yq66JZTp4VuR4qbTgvNoT',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Câu Xá Tông',
    passPercentage: 70,
    questions,
  }
}

export default lesson