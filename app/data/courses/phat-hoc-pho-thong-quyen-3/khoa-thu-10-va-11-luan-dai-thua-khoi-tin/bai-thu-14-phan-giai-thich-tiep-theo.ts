import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI BỐN · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="phan-biet-hanh-tuong-phat-tam" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">C. Phân biệt hành tướng phát tâm đến Đạo (tiếp theo và hết)</h2>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="noi-ve-hieu-biet-va-lam" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">II. NÓI VỀ HIỂU BIẾT VÀ LÀM (Hạnh, hướng) mà phát tâm</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Phải biết, lối phát tâm này (biết và làm) có phần thặng hơn lối phát tâm trước (Tín phát tâm). Bồ Tát bắt đầu từ Chánh tín (Thập tín) đến đây (Hạnh và Hướng), trải qua gần mãn một vô số kiếp thứ nhứt, nên đối với Chơn như, các vị này hiện đã hiểu ngộ rất thâm thuý và sự tu hành không còn chấp tướng nữa.</p>
    
    <p id="bo-thi-tru-tham-lam">Bồ Tát biết tánh Phật của mình (tâm mình) không có tham lam bỏn xẻn, nên tuỳ thuận theo tánh Phật tu hạnh Bố thí Ba la mật (Bố thí rốt ráo).</p>
    <p id="tri-gioi-nhiem-o">Bồ Tát biết tánh Phật của mình không nhiễm ô, xa lìa các tội lỗi ngũ dục, nên tuỳ thuận theo tánh Phật, tu pháp trì giới Ba la mật.</p>
    <p id="nhan-nhuc-san-han">Bồ Tát biết tánh Phật của mình không khổ não, xa lìa các sân hận, nên thuận theo tánh Phật, tu pháp Nhẫn nhục Ba la mật.</p>
    <p id="tinh-tan-giai-dai">Bồ Tát biết tánh Phật của mình không có tướng thân tâm, xa lìa việc giải đãi, nên tuỳ thuận theo tánh Phật, tu Tinh tấn Ba la mật.</p>
    <p id="thien-dinh-tan-loan">Bồ Tát biết tánh Phật của mình thường định, không có tán loạn, nên tuỳ thuận theo tánh Phật, tu pháp Thiền định Ba la mật.</p>
    <p id="tri-hue-si-me">Bồ Tát biết tánh Phật của mình sáng suốt, không có vô minh, nên tuỳ thuận theo tánh Phật, tu Trí huệ Ba la mật.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Trong phần "Phân biệt hành tướng phát tâm đến Đạo", có chia ra ba hạng:</p>
    <p>- Tín phát tâm, tức là viên mãn địa vị Thập tín mà phát tâm.</p>
    <p>- Biết và làm phát tâm, tức là ở địa vị Tam hiền (Trụ, Hạnh, Hướng) mà phát tâm.</p>
    <p>- Chứng nhập chơn như phát tâm, tức là ở hàng Thập địa Bồ Tát mà phát tâm.</p>
    
    <p>Đoạn này nói về hàng Tam hiền phát tâm.</p>
    <p>Hành giả từ khi phát tâm tu hành, cho đến mãn địa vị Tam hiền, đây là đợt thứ nhất, phải trải qua một "vô số kiếp". Sau khi mãn Tam hiền lên đến Thất địa, hành giả phải trải qua một "vô số kiếp" về đợt thứ hai. Từ Bát địa trở lên quả vị Phật, hành giả phải trải qua một "vô số kiếp" nữa, về đợt thứ ba.</p>
    <p>Hành giả phải trải qua ba vô số kiếp như vậy, và trường kỳ kháng chiến với giặc phiền não nội tâm, bao giờ hoàn toàn thắng trận mới được thành Phật. Trong vô số kiếp thứ nhứt, hành giả bị bại trận nhiều mà thắng ít. Đến vô số kiếp thứ hai, là giai đoạn giằng co, hành giả năm ăn năm thua. Bước qua vô số kiếp thứ ba thì hành giả thắng nhiều thua ít.</p>
    <p>Vì hạng thứ hai là "Hiểu và Làm mà phát tâm" trước. Từ địa vị Thập tín đến địa vị Tam hiền, vì hành giả tu hành trải qua gần mãn một vô số kiếp, nên ngộ được chơn tâm; nhưng chưa chứng nhập. Tuy nhiên, về việc tu hành, hành giả đã cởi mở rất nhiều những sự nặng nề về phần tu hữu tướng (chấp danh, trước tướng) và bắt đầu về vô tướng, để nhập chơn tâm thanh tịnh.</p>
    
    <p>Bồ Tát biết chơn tâm mình từ bi, hỷ xả, không có tham lam bỏn xẻn, nên tu pháp bố thí Ba la mật, để trừ tâm bỏn xẻn (tu tâm) và nuôi dưỡng tánh từ bi hỷ xả (dưỡng tánh) để trở lại hiệp với chơn tâm của mình.</p>
    <p>Bồ Tát biết chơn tâm mình thanh tịnh, không có các nhiễm ô tội lỗi, nên tu pháp trì giới Ba la mật, để trừ tâm nhiễm ô tội lỗi (tu tâm) và nuôi dưỡng đức tánh thanh tịnh (dưỡng tánh) để hợp với chơn tâm của mình.</p>
    <p>Bồ Tát biết chơn tâm mình không có sân hận, nên tu pháp Nhẫn nhục Ba la mật, để đối trị tâm sân hận (tu tâm) và nuôi lớn đức tánh vô sân (dưỡng tánh) để hợp with chơn tâm.</p>
    <p>Bồ Tát biết chơn tâm mình không phiền não giải đãi, nên tu pháp Tinh tấn Ba la mật, để trừ tâm giải đãi (tu tâm) và nuôi dưỡng đức tánh siêng năng (dưỡng tánh) để hợp với chơn tâm.</p>
    <p>Bồ Tát biết chơn tâm mình thường định, không tán loạn, nên tu pháp Thiền định Ba la mật, để trừ tâm tán loạn (tu tâm) và nuôi dưỡng tánh tịch tịnh (dưỡng tánh) để hợp với chơn tâm.</p>
    <p>Bồ Tát biết chơn tâm mình sáng suốt, không có si mê, nên tu pháp Trí huệ Ba la mật, để trừ tâm si mê (tu tâm) và nuôi dưỡng trí huệ (dưỡng tánh) để hợp với chơn tâm của mình.</p>
    
    <p>Tóm lại, Bồ Tát biết tâm mình không có các điều xấu tệ, như tham lam bỏn xẻn, phá giới nhiễm ô, nóng nảy sân hận, biếng nhác trễ nãi, tán loạn và si mê v.v... mà trái lại, có đủ các đức tánh tốt, như từ bi, hỷ xả, thanh tịnh, không sân si, tinh tấn, thường định và trí huệ v.v... nên tu pháp Lục độ, để diệt trừ Lục tệ, nuôi lớn các đức tánh tốt ở nơi tâm mình. Khi các đức tánh tốt (tánh Phật) được hoàn toàn viên mãn, thì Bồ Tát sẽ thành Phật.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30 my-4">
      <p class="mb-1"><strong>GIẢI DANH TỪ</strong></p>
      <p class="mb-0">Chữ "Ba la mật", Tàu dịch là "Đáo bỉ ngạn" nghĩa là đến bờ bên kia, tức là bờ Giác. Song chữ "ba la mật" này cũng có nghĩa là "rốt ráo cùng tận". Như nói "Bố thí ba la mật", nghĩa là bố thí đến cùng tận. Chúng phàm phu khi bố thí, còn chấp Ta là người năng thí (làm ơn). Kia là kẻ thọ thí (chịu ơn); vì còn dính mắc nơi tướng, chấp có nhơn có ngã, nên bố thí mà không được ba la mật. Trái lại, Bồ Tát khi bố thí, hợp với chơn tâm thanh tịnh, không thấy có nhơn có ngã: ta đây là người làm ơn (năng thí). Kia là kẻ thọ ơn (được thí). Nọ là vật bị thí... Vì không dính mắc nơi tướng nên gọi là "Bố thí ba la mật". Năm món "ba la mật" sau, ý nghĩa cũng như thế.</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="noi-ve-chung-nhap-chan-nhu" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">III. Chứng nhập chơn như mà phát tâm</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Bồ Tát từ Sơ địa cho đến Đẳng giác, đã chứng được Chơn như, cũng gọi là Chứng pháp thân.</p>
    <p>Các vị Bồ Tát khi đã chứng nhập Chơn như thì từ trên tâm Chơn như này, khởi ra đại dụng: như trong nhứt niệm mà có thể đi hết cả mười phương thế giới, cúng dường chư Phật, thỉnh Phật chuyển pháp luân và mở đường dẫn dắt, làm lợi ích cho các chúng sanh, mà không cần đến ngôn ngữ. Hoặc vì để độ những chúng sanh căn tánh thấp kém, lo sợ phải trải qua nhiều kiếp tu hành mới thành đạo, nên Bồ Tát thị hiện mau thành quả Phật. Hoặc vì để độ những chúng sanh biếng nhác trễ nãi, nên Bồ Tát nói: "ta tu hành trải qua vô lượng a tăng kỳ kiếp mới được thành Phật". Các vị Bồ Tát mặc dù thị hiện ra vô số phương tiện như vậy, không thể nghĩ bàn được, song thật ra các vị này trình độ như nhau, và đều trải qua vô số kiếp tu hành, không có kẻ mau, người chậm, vị này hơn, vị kia kém. Các vị Bồ Tát tuỳ theo mỗi quốc độ, và trình độ thấy nghe, căn tánh sai khác, dục vọng không đồng của mỗi chúng sanh mà thị hiện ra nhiều hạnh (Bồ Tát đa hạnh), phương tiện độ sanh không giống nhau.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này nói "Chứng nhập chơn như mà phát tâm", tức là Bồ Tát chứng được thể chơn như, rồi phát ra đại dụng của chơn như.</p>
    <p>Các vị Bồ Tát từ Sơ địa đến Đẳng giác, đã chứng được chơn như, cũng gọi là chứng pháp thân thanh tịnh của Như Lai. Rồi từ nơi thể chơn như này phát khởi ra diệu dụng không thể nghĩ bàn, như trong nhứt niệm Bồ Tát có thể đi hết cả mười phương thế giới, cúng dường chư Phật, hoặc thỉnh Phật chuyển pháp luân. Và cũng từ nơi diệu dụng của chơn như, mà Bồ Tát giáo hoá làm lợi ích cho chúng sanh, hoặc không dùng đến văn tự ngữ ngôn.</p>
    <p>Có vị Bồ Tát vì muốn khuyến khích những chúng sanh thấp kém, lo sợ cho mình không thể đeo đuổi trải qua nhiều kiếp trường kỳ tu tập, nên thị hiện tu mau thành Phật, để cho chúng sanh ấy khỏi lo sợ; như nàng Long nữ trong Pháp hoa, ngài Quảng Ngạch trong kinh Niết bàn, ông Thiện Tài trong kinh Hoa nghiêm.</p>
    <p>Và có vị Bồ Tát, vì những chúng sanh giải đãi bê tha sự tu hành, nên thị hiện trải qua ba vô số kiếp tu hành, mới được thành Phật, để cho chúng sanh ấy, thấy con đường còn dài, phải siêng năng tu hành; như đức Thích Ca, trải qua ba vô số kiếp mới thành đạo.</p>
    <p>Bồ Tát, tuỳ theo mỗi quốc độ khác nhau, trình độ thấy nghe của chúng sanh không đồng, mà thị hiện ra rất nhiều phương tiện, không thể nghĩ bàn. Bởi thế nên gọi "Bồ Tát đa hạnh".</p>
    <p>Nhưng sự thật, về trình độ của các vị Bồ Tát thì đồng nhau, sự phát tâm, chỗ chứng ngộ cũng đồng nhau, và đều trải qua ba vô số kiếp tu hành, không có sự mau chậm hay hơn kém nhau.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Lại nữa, Bồ Tát phát tâm, có 3 tướng vi tế:</p>
    <p id="chon-tam-that-tri"><strong>1. Chơn tâm</strong>, tức là tâm vô phân biệt (thật trí).</p>
    <p id="phuong-tien-tam-quyen-tri"><strong>2. Phương tiện tâm</strong>, tức là tâm tự nhiên làm lợi ích cho các chúng sanh (quyền trí).</p>
    <p id="nghiep-thuc-tam-di-thuc-thuc"><strong>3. Nghiệp thức tâm</strong>, tức là tâm sanh diệt rất vi tế.</p>
    
    <p>Bồ Tát tu hành đến khi công đức thành tựu viên mãn rồi thì hiện thân cao lớn (báo thân) hơn các thế gian, ở trên cõi trời Sắc cứu cánh. Bồ Tát do nhứt niệm tương ưng (hiệp) với huệ, nên vô minh liền hết, gọi là "được nhứt thế chủng trí". Lúc bấy giờ Bồ Tát tự nhiên có diệu dụng không thể nghĩ bàn, hiện thân khắp mười phương thế giới làm lợi ích cho tất cả chúng sanh.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Các vị Bồ Tát phát tâm vừa nói trên, đều có 3 tướng vi tế như sau:</p>
    <p>1. Được thật trí, tức là chơn tâm vô phân biệt.</p>
    <p>2. Được quyền trí, tức là Trí phương tiện phân biệt, để làm lợi ích cho các chúng sanh.</p>
    <p>3. Dị thục thức, tức là nghiệp thức, sanh diệt rất vi tế.</p>
    
    <p>Bồ Tát tuy được quyền trí và thật trí, nhưng chưa rốt ráo như Phật và vì còn Dị thục thức (Kim Cang đạo hậu Dị thục không) nên còn bị biến dịch sanh tử.</p>
    <p>Bồ Tát tu hành, khi công đức được thành tựu viên mãn, đến phút tối hậu, phá sạch vô minh vi tế, nhứt niệm hiệp với Bát Nhã huệ, thì được "Nhứt thế chủng trí" gọi là "Chánh biến giác". Lúc bấy giờ Bồ Tát hiện thân Tự thọ dụng (Báo thân) cao lớn ngàn trượng, ở cõi Tự thọ dụng (tự thọ dụng độ), trên đảnh trời sắc giới, chờ đến thời kỳ, sẽ đi bổ xứ làm Phật, như đức Di Lặc hiện nay ở cõi trời Đâu Suất. Vị Bồ Tát này tự nhiên có diệu dụng, thị hiện mười phương thế giới, làm lợi ích cho các chúng sanh không thể nghĩ bàn.</p>
    <p>Tóm lại, từ khi phát tâm tu hành, cầu quả Phật, đến khi được Nhứt thế chủng trí, thành Chánh biến giác là rốt ráo sự phát tâm vậy.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Trong hư không, vô biên, có vô tận thế giới, trong mỗi thế giới có vô số chúng sanh; vì chúng sanh vô số, nên tâm niệm và hành vi cũng khác nhau vô cùng; nếu Bồ Tát đoạn vô minh, không còn tâm tưởng, thì lấy gì để biết tất cả pháp, mà gọi là "Nhứt thế chủng trí"?</p>
      <p class="mb-0"><strong>Đáp:</strong> Tất cả cảnh giới vốn là chơn tâm thanh tịnh, không có gì khác. Song vì chúng sanh không như chơn tâm thanh tịnh (xứng tánh) lại khởi ra các tưởng niệm phân biệt, vọng thấy có các cảnh giới sai khác, nên không thể biết được cảnh giới vô tướng thanh tịnh (chơn tâm) biến khắp tất cả, của chư Phật.</p>
      <p class="mb-0 mt-2">Chơn tâm này đã là bản thể hiện ra tất cả pháp và Bồ Tát vì đã chứng được bản thể của tất cả pháp, tất nhiên biết được tất cả pháp, nên gọi là "Nhứt thế chủng trí". Nhờ "Nhứt thế chủng trí" này, mà Bồ Tát tuỳ thuận theo trình độ của các chúng sanh, lập ra các pháp phương tiện, giáo hoá vô số chúng sanh.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này ngài Bồ Tát Mã Minh, lập lời vấn đáp, để giải thích những điều thắc mắc của độc giả.</p>
    <p>Thấy đoạn trên nói: Do Bồ Tát trong nhứt niệm tương ưng với Huệ, nên vô minh liền hết, gọi là được "Nhứt thế chủng trí", nên độc giả thắc mắc: Do vô minh mà có tâm tưởng, nhờ tâm tưởng nên mới biết được các sự vật. Nếu vô minh hết, tâm tưởng không còn, thì lấy cái gì để biết tất cả sự vật, mà gọi là "được Nhứt thế chủng trí"?</p>
    <p>Bồ Tát giải đáp, đại ý: Tất cả các pháp nguyên là chơn tâm (đó là định lý của Đại thừa). Nếu còn vô minh và tâm tưởng phân biệt, thì cố nhiên phải có năng sở bỉ thử, nên sự phân biệt bị cuộc hạn, tuy biết mà biết không cùng khắp, cái biết ấy chỉ là tưởng niệm mà thôi. Trái lại, if vô minh hết, tâm tưởng không còn, tức là hiệp với chơn tâm, mà chơn tâm là bản thể của các pháp, biến khắp tất cả các pháp; cũng như trời đất non sông, mà bể cả đều bao hàm hết thảy. Bởi thế nên hành giả trừ vô minh, diệt hết loạn tưởng chứng nhập chơn tâm, thì mới biết được các pháp một cách rốt ráo, gọi là được "Nhứt thế trí".</p>
    <p>Từ chơn tâm này phát ra đại trí dụng, biết rõ tất cả pháp, tuỳ theo căn cơ của vô số chúng sanh, dùng vô số phương tiện để dẫn dắt chúng sanh, gọi đó là được "Nhứt thế chủng trí". Chứng được Nhứt thế trí và Nhứt thế chủng trí, gọi là phát minh rốt ráo tâm đại thừa, tức là thành Phật.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Chư Phật đã nghiệp dụng tự nhiên thị hiện khắp tất cả chỗ, làm lợi ích cho các chúng sanh. Nếu chúng sanh nào thấy được thân Phật, hoặc nghe thuyết pháp, hoặc thấy thần thông biến hoá của Phật, thì đều được lợi ích; tại sao trong thế gian còn có nhiều người không thấy được Phật?</p>
      <p class="mb-0"><strong>Đáp:</strong> Pháp thân của chư Phật bình đẳng và khắp tất cả chỗ, tự nhiên làm lợi ích cho các chúng sanh, không dụng tâm hay cố ý. Song cũng tuỳ theo tâm của chúng sanh mà tự thấy có hiện hay không. Tâm chúng sanh như cái gương, nếu gương bị bụi đóng, thì cảnh vật không hiện; còn tâm chúng sanh bị cấu nhiễm thì Pháp thân không hiện.</p>
    </div>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Tiếp theo đoạn vấn đáp trên, nghe nói: "Phật có thần thông diệu dụng không thể nghĩ bàn, bình đẳng làm lợi ích cho tất cả chúng sanh, mà không dụng công hay cố ý": nên độc giả nghi: Nếu như thế, tại sao có chúng sanh được tế độ, có chúng sanh không được tế độ.</p>
    <p>Bồ Tát giải thích, đại ý: Phật tuy có Nhứt thế chủng trí và đủ các phương tiện, thần thông diệu dụng, bình đẳng và tự nhiên làm lợi ích cho tất cả chúng sanh, không dụng công hay cố ý, không phân biệt chủng loại nào. Nhưng chúng sanh có tiếp nhận được hay không là do tâm của họ có thanh tịnh hay không. Như cái gương tuy sáng mà bị bụi bám vào, dù cảnh vật tuy sẵn có, cũng không thể hiện gì ra được. Cũng thế, chúng sanh tâm tánh còn cấu nhiễm, thì chư Phật tuy có diệu dụng không thể nghĩ bàn, bình đẳng phổ độ, song họ cũng không thể thấy được Phật. Tuy không thấy Phật tế độ, nhưng Phật vẫn âm thầm gia hộ. Ví như kẻ mù sống dưới mặt trời, tuy họ không thấy được ánh sáng, nhưng mặt trời vẫn chiếu đến, và họ vẫn nhờ ánh sáng mà sống.</p>
    <p class="italic text-text-muted text-center mt-6">(HẾT PHẦN GIẢI THÍCH)</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo nội dung bài học, có bao nhiêu hạng hành tướng phát tâm đến Đạo?",
    options: {
      a: "Ba hạng",
      b: "Hai hạng",
      c: "Sáu hạng",
      d: "Bốn hạng",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Trong phần 'Phân biệt hành tướng phát tâm đến Đạo', có chia ra ba hạng: Tín phát tâm, Biết và làm phát tâm, Chứng nhập chơn như phát tâm.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Hạng 'Biết và Làm mà phát tâm' thuộc về địa vị nào trong quá trình tu hành?",
    options: {
      a: "Quả vị Phật",
      b: "Địa vị Thập tín",
      c: "Địa vị Thập địa",
      d: "Địa vị Tam hiền (Trụ, Hạnh, Hướng)",
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây là đích đến cuối cùng.",
      b: "Sai. Thập tín là 'Tín phát tâm'.",
      c: "Sai. Thập địa là 'Chứng nhập chơn như phát tâm'.",
      d: "Đúng. 'Biết và làm phát tâm' tức là ở địa vị Tam hiền (Trụ, Hạnh, Hướng) mà phát tâm.",
    },
  },
  {
    question: "Trong vô số kiếp thứ hai của lộ trình tu hành, tình trạng 'chiến đấu' với phiền não diễn ra như thế nào?",
    options: {
      a: "Hoàn toàn thắng trận",
      b: "Thắng nhiều thua ít",
      c: "Giai đoạn giằng co, năm ăn năm thua",
      d: "Bị bại trận nhiều mà thắng ít",
    },
    answer: "c",
    explanation: {
      a: "Sai. Hoàn toàn thắng trận là lúc thành Phật.",
      b: "Sai. Đây là tình trạng ở vô số kiếp thứ ba.",
      c: "Đúng. Đến vô số kiếp thứ hai, là giai đoạn giằng co, hành giả năm ăn năm thua với giặc phiền não nội tâm.",
      d: "Sai. Đây là tình trạng ở vô số kiếp thứ nhứt.",
    },
  },
  {
    question: "Bồ Tát tu pháp 'Nhẫn nhục Ba la mật' nhằm mục đích đối trị điều gì trong tâm?",
    options: {
      a: "Sân hận và khổ não",
      b: "Giải đãi và biếng nhác",
      c: "Tham lam bỏn xẻn",
      d: "Nhiễm ô tội lỗi",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Bồ Tát biết chơn tâm mình không có sân hận, nên tu pháp Nhẫn nhục Ba la mật, để đối trị tâm sân hận và nuôi lớn đức tánh vô sân.",
      b: "Sai. Giải đãi được đối trị bằng Tinh tấn Ba la mật.",
      c: "Sai. Tham lam được đối trị bằng Bố thí Ba la mật.",
      d: "Sai. Nhiễm ô tội lỗi được đối trị bằng Trì giới Ba la mật.",
    },
  },
  {
    question: "Ý nghĩa rốt ráo của từ 'Ba la mật' (Đáo bỉ ngạn) theo giải thích trong bài là gì?",
    options: {
      a: "Bố thí thật nhiều vật chất",
      b: "Đạt đến sự rốt ráo, không dính mắc nơi tướng",
      c: "Sự tu hành kéo dài nhiều kiếp",
      d: "Khả năng ghi nhớ tất cả kinh điển",
    },
    answer: "b",
    explanation: {
      a: "Sai. Dù bố thí nhiều mà còn dính mắc thì chưa phải rốt ráo.",
      b: "Đúng. 'Ba la mật' có nghĩa là 'rốt ráo cùng tận'. Khi tu tập mà hợp với chơn tâm thanh tịnh, không thấy có nhơn có ngã, không dính mắc nơi tướng (năng, sở) thì gọi là Ba la mật.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao có những vị Bồ Tát thị hiện tu hành mau thành quả Phật, trong khi vị khác lại thị hiện tu lâu?",
    options: {
      a: "Vì trình độ của các vị Bồ Tát có sự cao thấp khác nhau",
      b: "Vì mỗi vị chọn một con đường tu tập riêng biệt",
      c: "Để phù hợp với căn tánh và trình độ của chúng sanh cần độ",
      d: "Do sự khác biệt về quốc độ mà các vị đang cư ngụ",
    },
    answer: "c",
    explanation: {
      a: "Sai. Trình độ và chỗ chứng ngộ của các vị là đồng nhau.",
      b: "Sai.",
      c: "Đúng. Bồ Tát thị hiện mau thành Phật để độ chúng sanh căn tánh thấp kém hay lo sợ. Ngược lại, thị hiện tu lâu để độ những chúng sanh biếng nhác trễ nãi, làm gương cho họ siêng năng tu hành.",
      d: "Sai.",
    },
  },
  {
    question: "Trong ba tướng vi tế của Bồ Tát phát tâm, 'Phương tiện tâm' tương ứng với loại trí huệ nào?",
    options: {
      a: "Dị thục thức",
      b: "Thật trí",
      c: "Nhứt thế trí",
      d: "Quyền trí",
    },
    answer: "d",
    explanation: {
      a: "Sai. Dị thục thức tương ứng với 'Nghiệp thức tâm'.",
      b: "Sai. Thật trí tương ứng với 'Chơn tâm'.",
      c: "Sai. Đây là trí tuệ rốt ráo biết tất cả pháp.",
      d: "Đúng. 'Phương tiện tâm' tức là tâm tự nhiên làm lợi ích cho các chúng sanh, tương ứng với Quyền trí.",
    },
  },
  {
    question: "Bồ Tát hiện thân 'Báo thân' cao lớn ở cõi trời nào sau khi công đức viên mãn?",
    options: {
      a: "Cõi trời Tứ Thiên Vương",
      b: "Cõi trời Sắc cứu cánh",
      c: "Cõi trời Phi tưởng phi phi tưởng",
      d: "Cõi trời Đâu Suất",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Khi công đức viên mãn, Bồ Tát hiện thân Tự thọ dụng (Báo thân) cao lớn ngàn trượng ở cõi Tự thọ dụng, trên đảnh trời Sắc giới (Sắc cứu cánh).",
      c: "Sai.",
      d: "Sai. Đâu Suất là nơi chờ giáng sanh, không phải là nơi hiện Báo thân tối thắng sau khi viên mãn.",
    },
  },
  {
    question: "Tại sao người thế gian có người thấy được Phật, có người lại không thấy, dù Pháp thân Phật biến khắp mọi nơi?",
    options: {
      a: "Do khoảng cách địa lý giữa thế giới này và cõi Phật quá xa",
      b: "Do tâm chúng sanh còn cấu nhiễm như gương bị bụi bám",
      c: "Vì Phật chỉ chọn những người có duyên để hiện thân",
      d: "Vì Phật không muốn làm phiền những người đang hưởng lạc",
    },
    answer: "b",
    explanation: {
      a: "Sai. Pháp thân bình đẳng và khắp mọi nơi.",
      b: "Đúng. Tuỳ theo tâm của chúng sanh mà tự thấy có hiện hay không. Tâm chúng sanh cấu nhiễm (như gương bụi) thì không tiếp nhận và không thấy được Pháp thân thanh tịnh.",
      c: "Sai. Phật bình đẳng độ sinh không phân biệt.",
      d: "Sai.",
    },
  },
  {
    question: "Khái niệm 'Nhứt thế chủng trí' được giải thích như thế nào trong mối quan hệ với Chơn tâm?",
    options: {
      a: "Là loại trí huệ chỉ có được nhờ học hỏi kinh điển",
      b: "Là khả năng ghi nhớ vô số sự kiện trong quá khứ",
      c: "Là sự phân biệt rạch ròi giữa các cảnh giới hữu hình",
      d: "Là trí hiểu biết rốt ráo các pháp nhờ chứng được bản thể của chúng",
    },
    answer: "d",
    explanation: {
      a: "Sai. Trí huệ này phát sinh do dập tắt vô minh, không từ học hỏi bên ngoài.",
      b: "Sai.",
      c: "Sai. Sự phân biệt hạn cuộc thuộc về tưởng niệm vô minh.",
      d: "Đúng. Chơn tâm là bản thể của tất cả các pháp. Khi diệt hết vô minh chứng nhập Chơn tâm thì Bồ Tát biết được tất cả pháp một cách rốt ráo, nhờ đó lập vô số phương tiện độ sanh, gọi là 'Nhứt thế chủng trí'.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-14-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-14-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 14 - Phần giải thích (tiếp theo và hết)',
  type: 'article',
  status: 'published',
  order: 16,
  createdAt: '2026-08-01',
  updatedAt: '2026-08-01',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-14-phan-giai-thich-tiep-theo/H%C3%A0nh_tr%C3%ACnh_ph%C3%A1t_t%C3%A2m_tu_t%E1%BA%ADp.png',
      readingContent,
      tableOfContents: [
        { id: 'phan-biet-hanh-tuong-phat-tam', label: 'C. Phân biệt hành tướng phát tâm đến Đạo (bài thứ 2)' },
        { id: 'noi-ve-hieu-biet-va-lam', label: 'II. Nói về hiểu biết và làm mà phát tâm', indent: 1 },
        { id: 'luc-do-luc-te', label: 'Bồ Tát biết tâm mình (Phật tánh) không có Lục tệ nên tu pháp lục độ.', indent: 2 },
        { id: 'bo-thi-tru-tham-lam', label: 'Bố thí để trừ tham lam bỏn xẻn', indent: 3 },
        { id: 'tri-gioi-nhiem-o', label: 'Trì giới - Nhiễm ô', indent: 3 },
        { id: 'nhan-nhuc-san-han', label: 'Nhẫn nhục - Sân hận', indent: 3 },
        { id: 'tinh-tan-giai-dai', label: 'Tinh tấn - Giải đãi', indent: 3 },
        { id: 'thien-dinh-tan-loan', label: 'Thiền định - Tán loạn', indent: 3 },
        { id: 'tri-hue-si-me', label: 'Trí huệ - Si mê', indent: 3 },
        { id: 'noi-ve-chung-nhap-chan-nhu', label: 'III. Nói về chứng nhập chơn như mà phát tâm', indent: 1 },
        { id: 'ba-tuong-vi-te', label: 'Bồ Tát sau khi nhập chơn như, rồi khởi diệu dụng độ sanh, và có 3 tướng vi tế:', indent: 2 },
        { id: 'chon-tam-that-tri', label: '"Chơn tâm" tức là Thật trí', indent: 3 },
        { id: 'phuong-tien-tam-quyen-tri', label: '"Phương tiện tâm" tức là Quyền trí', indent: 3 },
        { id: 'nghiep-thuc-tam-di-thuc-thuc', label: '"Nghiệp thức tâm" tức là Dị thục thức', indent: 3 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-14-phan-giai-thich-tiep-theo/Awakening_the_True_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/DPJPlUddvsg',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/7LCWKeyjqYL41SHVQDSk8o',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài Thứ 14',
    passPercentage: 70,
    questions,
  },
}

export default lesson