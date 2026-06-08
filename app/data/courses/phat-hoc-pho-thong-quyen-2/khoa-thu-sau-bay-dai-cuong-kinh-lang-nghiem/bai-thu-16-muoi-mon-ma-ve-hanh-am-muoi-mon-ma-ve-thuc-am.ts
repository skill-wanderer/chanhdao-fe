import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bai-thu-muoi-sau-muoi-mon-ma-ve-hanh-am-muoi-mon-ma-ve-thuc-am">
    <h2 id="bai-thu-muoi-sau" class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ 16</h2>
    <h3 id="muoi-mon-ma-ve-hanh-am" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. MƯỜI MÓN MA VỀ HÀNH ẤM :</h3>
    <h4 id="chap-khong-nguyen-nhan-sanh" class="text-lg font-semibold">1. CHẤP KHÔNG NGUYÊN NHÂN SANH</h4>
    <p>A Nan, người tu thiền định khi tưởng ấm hết rồi, thì tâm được minh chánh, không còn khởi các vọng tưởng tham muốn như trên, nên các Thiên ma không gặp dịp thuận tiện để nhiễu hại nữa. Lúc bấy giờ hành giả tự nghiên cứu nguồn gốc của muôn loài, rồi sanh ra hai lối chấp :</p>
    <p>a/ Vì chỉ thấy biết được chúng sanh từ tám vạn kiếp trở lại, ngoài tám vạn kiếp thì mù mịt không thấy biết, nên sanh ra chấp : « Chúng sanh từ tám vạn kiếp trở lại tự nhiên có, không có nguyên nhân sanh ».</p>
    <p>b/ Hành giả nghiên cứu chỉ thấy người sanh ra người, chim sanh ra chim, quạ từ hồi nào đến giờ vẫn đen, không phải do nhuộm mà đen, cò từ hồi nào đến giờ vẫn trắng, không phải do rửa mới trắng v.v... từ tám vạn kiếp đến nay đã vậy, thì từ đây về sau cũng thế. Hành giả tự nghĩ ta từ hồi nào đến giờ không thành Bồ-đề, thì về sau đâu lại có thành Phật, rồi khởi ra tà chấp : « Các vật tượng ngày nay đều không có nguyên nhân ». Bởi mê mờ tánh Bồ-đề, mất chánh tri kiến, sanh ra hai lối chấp trên, nên đều đọa về ngoại đạo.</p>
    <h4 id="bon-mon-chap-thuong" class="text-lg font-semibold">2. BỐN MÓN CHẤP THƯỜNG</h4>
    <p>A Nan, người tu thiền định, khi tưởng ấm hết rồi, tâm được minh chánh, nên ngoại ma không còn thuận tiện để nhiễu hại được. Khi đó hành giả tham cứu tột cội gốc của muôn loài, khởi ra bốn món chấp thường :</p>
    <p>a/ Chấp hai vạn kiếp thường. – Vì hành giả nghiên cứu cùng tột cả tâm và cảnh đều vô nhân, vì sức tu chỉ biết được chúng sanh sanh diệt xoay vần từ hai vạn kiếp trở lại không mất, nên chấp cho là thường.</p>
    <p>b/ Chấp bốn vạn kiếp thường. – Hành giả tham cứu cùng tột tánh của tứ đại thường còn, do sức tu tập chỉ biết được chúng sanh từ bốn vạn kiếp trở lại, tuy có sanh diệt, mà bản thể nó vẫn thường còn thường mất, nên chấp là thường.</p>
    <p>c/ Chấp tám vạn kiếp là thường. – Hành giả tham cứu cùng tận tám thức, thấy nó thường hằng. Vì thấy từ tám vạn kiếp trở lại chúng sanh xoay vần không mất, nên chấp là thường.</p>
    <p>d/ Chấp cái không sanh diệt là thường. – Người tu thiền định khi các tưởng ấm sanh diệt đã hết, nhân đó khởi tâm chấp cái không sanh diệt là thường.</p>
    <p>A Nan, người tu thiền định, do mất chánh kiến, mê mờ tánh Bồ-đề, khởi ra bốn món chấp thường trên, nên đều đọa về ngoại đạo.</p>
    <h4 id="chap-mot-phan-thuong-mot-phan-vo-thuong" class="text-lg font-semibold">3. CHẤP MỘT PHẦN THƯỜNG, MỘT PHẦN VÔ THƯỜNG</h4>
    <p>Người tu thiền định, khi tưởng ấm hết, nghiên cứu cùng tột cội gốc của sanh loại, rồi khởi ra bốn lối chấp điên đảo :</p>
    <p>a/ Chấp tâm là thường, chúng sanh vô thường. – Hành giả khi quán tâm mình yên lặng khắp cả mười phương, các chúng sanh từ trong tâm mình tự sanh và tự chết, rồi chấp tâm ta là thường, chúng sanh vô thường.</p>
    <p>b/ Chấp thế giới, những chỗ bị hoại là vô thường, những chỗ không bị hoại là thường. – Người tu thiền định quán sát cả mười phương thế giới, chỗ kiếp hoại (như từ Tam thiền trở xuống bị tam tai làm hại) thì chấp là vô thường ; những chỗ không hoại thì chấp là thường (từ Tứ thiền trở lên, tam tai không làm hoại được, chấp cho là cứu cánh Niết-bàn).</p>
    <p>c/ Chấp cái tâm là thường, còn sanh tử là vô thường. – Người tu thiền định, quán sát tâm mình không biến đổi, nó nhỏ nhiệm tinh vi như hạt bụi và lưu chuyển cả mười phương, lại khiến cho thân này sanh và diệt mà nó không biến đổi; nên chấp cho : « Tâm là thường; tất cả các vật đều từ tâm sanh ra, có sanh tử nên vô thường ».</p>
    <p>d/ Chấp hành ấm thường ; sắc, thọ, tưởng là vô thường. – Người tu thiền định, khi thấy sắc, thọ, tưởng ba ấm trước đã diệt, nên chấp là vô thường, thấy hành ấm lưu chuyển thường còn nên chấp là thường.</p>
    <p>Bốn lối chấp trên, đều sai lầm cả, do mê muội tánh Bồ-đề, mất chánh kiến, nên đọa về ngoại đạo.</p>
    <h4 id="chap-co-bon-mon-bien-gioi" class="text-lg font-semibold">4. CHẤP CÓ BỐN MÓN BIÊN GIỚI</h4>
    <p>Người tu thiền định, khi tưởng ấm hết rồi, thấy được cùng tột cội gốc của sanh loại, lúc bấy giờ khởi ra bốn lối chấp có biên giới :</p>
    <p>a/ Chấp ba đời. – Người tu thiền định, lúc bấy giờ chấp tâm niệm hiện tại tương tục (hành ấm) là vô biên, còn quá khứ và vị lai là hữu biên.</p>
    <p>b/ Chấp chúng sanh. – Người tu thiền định vì chỉ thấy được chúng sanh trong đại chúng tám vạn kiếp, nên chấp là hữu biên ; còn trước đại chúng tám vạn kiếp thì tịch mịch không thấy và cũng không nghe, nên chấp là vô biên.</p>
    <p>c/ Chấp tâm tánh. – Người tu thiền định khi thấy tâm mình biến khắp và biến ra tất cả người, nên khởi lên chấp tâm ta vô biên. Còn tất cả người đều ở trong tâm ta, là hữu biên.</p>
    <p>d/ Chấp sanh diệt. – Người tu thiền định khi cùng tột hành ấm, thấy được tâm mình, sanh tâm chấp tất cả chúng sanh và thế giới đều có phân nửa sanh và phân nửa diệt; sanh là hữu biên, diệt là vô biên.</p>
    <p>Các lối tà chấp trên, đều do trong khi tu thiền mất chánh kiến, mê mờ tánh Bồ-đề, nên đều đọa về ngoại đạo cả.</p>
    <h4 id="bon-mon-nghi-luan-roi-loan-khong-co-nhat-dinh" class="text-lg font-semibold">5. BỐN MÓN NGHỊ LUẬN RỐI LOẠN KHÔNG CÓ NHẤT ĐỊNH</h4>
    <p>Người tu thiền định, khi tưởng ấm hết, liền khởi ra bốn lối chấp điên đảo không nhất định :</p>
    <p>a/ Chấp tám món cũng. – Người tu thiền định, khi quán sát nguồn gốc biến hóa của muôn vật, thấy có chỗ thì biến đổi, có chỗ lại thường còn ; có cái sanh, có cái diệt ; có pháp tăng, có vật giảm, có cái có, có cái không. Bởi thế nên có ai đến hỏi đạo thì nói rằng : « Cũng biến, cũng hằng, cũng sanh, cũng diệt, cũng tăng, cũng giảm, cũng có, cũng không ». Lúc nào cũng nói rối loạn như vậy, làm cho người không hiểu chi cả.</p>
    <p>b/ Chấp duy cái « không ». – Người tu thiền định, vì quán cả tâm và pháp đều không ; rồi cứ chấp ở nơi cái « không ». Có ai đến hỏi đạo thì họ chỉ đáp một chữ « không » ; ngoài cái « không » ra thì không còn nói chi nữa cả.</p>
    <p>c/ Chấp duy cái « có ». – Người tu thiền định, do quán sát tâm mình biến khắp tất cả, chỗ nào cũng có, rồi cứ chấp ở nơi cái « có ». Có ai đến hỏi đạo, thì họ chỉ nói một chữ « có »; ngoài cái « có » ra thì không còn nói gì nữa cả.</p>
    <p>d/ Chấp « cũng có » và « cũng không ». – Người tu thiền định vì thấy ở nơi cảnh đã lăng xăng, còn tâm thì rối loạn, nên có người đến hỏi đạo thì đáp rằng : « cái cũng có » cũng tức là « cái cũng không » ; trong cái « cũng không » cũng tức là cái « cũng có ». Lúc nào họ cũng nói rối loạn như vậy, không ai gạn cùng được.</p>
    <p>Người tu thiền định vì mất chánh kiến mê mờ tánh Bồ-đề, khởi ra các lối chấp như vậy, nên đều đọa về ngoại đạo.</p>
    <h4 id="chap-muoi-sau-tuong-co" class="text-lg font-semibold">6. CHẤP MƯỜI SÁU TƯỚNG CÓ</h4>
    <p>Người tu thiền định khi tưởng ấm hết, chỉ còn hành ấm diêu động, họ thấy một nguồn sống vô tận, nên sanh tâm chấp cho « chết rồi còn tướng ».</p>
    <p>Chấp về sắc uẩn có bốn : a) chấp sắc uẩn là « ta », b) chấp « ta » có sắc uẩn, c) chấp sắc uẩn thuộc nơi « ta », d) chấp « ta » ở nơi sắc uẩn.</p>
    <p>Còn Thọ, tưởng, hành mỗi uẩn cũng đều có bốn lối chấp như vậy, cộng thành mười sáu tướng. Hoặc chấp phiền não và Bồ-đề hai tánh thật có, hết phiền não mới được Bồ-đề ; hai tánh không chung gặp nhau.</p>
    <p>Vì hành giả trong lúc tu thiền, mất chánh tri kiến, mê mờ tánh Bồ-đề, khởi ra các lối tà chấp trên, nên đều đọa về ngoại đạo.</p>
    <h4 id="chap-tam-mon-vo-tuong" class="text-lg font-semibold">7. CHẤP TÁM MÓN VÔ TƯỚNG</h4>
    <p>Người tu thiền định khi sắc, thọ, tưởng đã diệt rồi, lúc bấy giờ thấy thân hình hiện tiền đây còn không thật có, thì khi chết rồi làm gì có các hình tướng. Vì so sánh như vậy, nên chấp chết rồi không có hình tướng. Chấp sắc ấm như vậy thì thọ, tưởng, hành cũng như vậy (chấp hiện tại và vị lai đều không tướng), thành ra tánh tám món vô tướng. Hoặc chấp Niết-bàn chỉ có cái tên suông, không có nhân quả, rốt ráo đoạn diệt.</p>
    <p>Vì hành giả mê mờ tánh Bồ-đề, mất chánh tri kiến, khởi ra các lối tà chấp như vậy, nên đều đọa về ngoại đạo.</p>
    <h4 id="chap-tam-mon-cu-phi" class="text-lg font-semibold">8. CHẤP TÁM MÓN CU PHI</h4>
    <p>Người tu thiền định, đối với ba ấm : sắc, thọ và tưởng, trước kia thấy có mà nay lại không ; còn đối với hành ấm thiên lưu hiện nay thì có mà về sau lại không. Vì họ chấp mỗi ấm đều có hai tướng : chết rồi phi hữu và phi vô; cả bốn ấm thành ra tám tướng, Bởi hành giả mê mờ tánh Bồ-đề, mất chánh tri kiến nên đọa về ngoại đạo.</p>
    <h4 id="chap-nam-mon-doan-diet" class="text-lg font-semibold">9. CHẤP NĂM MÓN ĐOẠN DIỆT</h4>
    <p>Người tu thiền định, khởi ra các chấp : cõi dục thì sắc thân diệt hết ; cõi Sơ thiền các « dục » diệt hết ; cõi Nhị thiền các « khổ » diệt hết, cõi Tam thiền các « vui » diệt hết ; cõi Tứ thiền các « xả » diệt hết.</p>
    <p>Như vậy xoay vần cùng tột cả năm chỗ đều chấp hiện tiền tiêu diệt, diệt rồi không sanh trở lại. Vì hành giả mê mờ tánh Bồ-đề, mất chánh tri kiến, sanh các lối tà chấp như vậy, nên đọa về ngoại đạo.</p>
    <h4 id="chap-nam-mon-niet-ban-hien-tai" class="text-lg font-semibold">10. CHẤP NĂM MÓN NIẾT BÀN HIỆN TẠI</h4>
    <p>Người tu thiền định, khi thọ ấm hết, xét cùng cội gốc của sanh loại, khởi ra chấp năm chỗ Niết-bàn : a) Chấp dục giới là cảnh Niết-bàn, b) Chấp cõi Sơ thiền là Niết-bàn, c) Chấp Nhị thiền là Niết-bàn, d) Chấp tam thiền là Niết-bàn, e) Chấp cõi Tứ thiền là Niết-bàn.</p>
    <p>Vì hành giả mê muội tánh Bồ-đề, chấp năm cảnh vui cõi trời hữu lậu mà cho là Vô vi Niết-bàn, nên đọa về ngoại đạo.</p>
    <h4 id="tom-lai" class="text-lg font-semibold">TÓM LẠI</h4>
    <p>A Nan, mười cảnh ma về hành ấm này, là do hành giả dụng tâm sai lầm nên mới sanh ra như vậy. Vì hành giả mê mờ không biết, tự cho là chứng Thánh, sanh đại vọng ngữ, nên đọa vào ngục vô gián. Vậy các ông nên đem các việc ma này truyền dạy cho chúng sanh đời sau, chớ để cho người tu thiền bị tâm ma khởi lên làm hại đến thế. Các ông phải bảo hộ người tu hành đi thẳng đến đạo Bồ-đề, chớ để cho họ gặp con đường chia rẽ.</p>
    <h3 id="muoi-mon-ma-ve-thuc-am" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. MƯỜI MÓN MA VỀ THỨC ẤM :</h3>
    <h4 id="chap-minh-de" class="text-lg font-semibold">1. CHẤP MINH ĐẾ :</h4>
    <p>Người tu thiền định khi hành ấm hết, chỉ còn thức ấm, các tướng sanh diệt đã hết, mà tâm thanh tịnh tịch diệt chưa hiện bày. Lúc bấy giờ nếu hành giả móng tâm chấp là chân thường, thì mất chánh kiến, mê mờ tánh Bồ-đề, thành bạn bè với phái ngoại đạo Ta-tỳ-ca-la, chấp minh đế (sơ tướng A-lại-da) là cái chỗ trở về của vạn vật trái với thành Niết-bàn, đọa về ngoại đạo.</p>
    <h4 id="chap-nang-sanh" class="text-lg font-semibold">2. CHẤP NĂNG SANH</h4>
    <p>Người tu thiền định khi hành ấm hết, các tướng sanh diệt đã diệt, mà tâm thanh tịnh tịch diệt chưa hiện, khi đó thấy thức tâm mình châu biến, rồi khởi ra cái chấp : « Tất cả chúng sanh đều do ta sanh ra ». Vì sanh tâm chấp như thế, nên mất chánh kiến, mê lầm tánh Bồ-đề, thành bà con của trời Đại-ngã-mạn (Ma-hê-thủ-la-thiên).</p>
    <h4 id="chap-nhan-thuong" class="text-lg font-semibold">3. CHẤP NHÂN THƯỜNG</h4>
    <p>Người tu thiền định khi hành ấm hết, thức ấm hiện ra, rồi sanh tâm nghi : Thân mình và mười phương hư không đều từ thức kia hiện ra, nên sanh tâm chấp cho « Thức là chân thường », mất chánh kiến, mê mờ tánh Bồ-đề, thành bè bạn của trời Tự tại.</p>
    <h4 id="chap-cay-co-cung-biet" class="text-lg font-semibold">4. CHẤP CÂY CỎ CŨNG BIẾT</h4>
    <p>Người tu thiền định khi hành ấm hết, tướng sanh diệt đã diệt, chân tâm tịch diệt chưa hiện bày, lúc bấy giờ thức ấm biến khắp tất cả, rồi sanh tâm chấp : « Mười phương cây cỏ cũng đều là hữu tình, cùng với người không khác. Cỏ cây chết làm người, người chết trở lại làm cỏ cây ». Mê mờ tánh Bồ-đề, mất chánh kiến, nên sẽ làm bè bạn với hai chúng ngoại đạo Bà-tra và Tán-ni, chấp tất cả vạn vật đều có tri giác (biết).</p>
    <h4 id="chap-tu-dai-hoa-sanh" class="text-lg font-semibold">5. CHẤP TỨ ĐẠI HÓA SANH</h4>
    <p>Người tu thiền định khi hành ấm hết, chân tâm chưa hiện, lúc bấy giờ thấy lửa sáng, nước trong, gió động, đất cứng, do bốn món này sanh ra các vật, rồi chấp cho là thường còn, hết lòng cung kính phụng thờ. Như ông Ca Diếp Ba và phái Bà-la-môn thờ lửa, thờ nước v.v... để cầu ra khỏi sanh tử, mê mờ tánh Bồ-đề, mất chánh kiến, đọa làm ngoại đạo.</p>
    <h4 id="chap-hu-vo" class="text-lg font-semibold">6. CHẤP HƯ VÔ</h4>
    <p>Người tu thiền định khi hành ấm hết, thấy thức ấm viên minh, rồi sanh ra chấp cái thức ấm hư vô, là chỗ nương của muôn vật, tất cả các vật đều về chỗ hư vô. Vì vậy mà mất chánh kiến, mê mờ tánh Bồ-đề, nên thành bè bạn với trời Vô tưởng, Tứ không và thần Hư không.</p>
    <h4 id="tham-cau-song-lau" class="text-lg font-semibold">7. THAM CẦU SỐNG LÂU</h4>
    <p>Người tu thiền định khởi tâm tham cầu thân này thường còn, cố làm cho thân này được sống hoài không chết, nên thành bè bạn của tiên A Tư Đà, cầu mạng sống lâu, mê mờ tánh Bồ-đề, mất chánh kiến, đọa về ngoại đạo.</p>
    <h4 id="tham-luyen-canh-duc" class="text-lg font-semibold">8. THAM LUYẾN CẢNH DỤC</h4>
    <p>Người tu thiền định khi hành ấm hết, lúc bấy giờ thấy thân thể và thức tâm tiêu diệt, cho nên sanh tâm lưu luyến lại cảnh trần, tự biến hóa ra nhiều cảnh báu đẹp và nhiều mỹ nữ, rồi mặc tình vui thú. Vì mất chánh kiến, mê mờ tánh Bồ-đề, nên thành bè bạn của Thiên ma ở cõi trời Tự tại (trên đảnh cõi Dục).</p>
    <h4 id="dinh-tanh-thanh-van" class="text-lg font-semibold">9. ĐỊNH TÁNH THANH VĂN</h4>
    <p>Người tu thiền định khi hành ấm hết, các tướng sanh diệt đã diệt, mà chân tâm tịch diệt chưa viên, lúc bấy giờ khởi tâm tham luyến ở chỗ không tịch, chẳng muốn tăng tiến, vì mất chánh kiến, mê mờ tánh Bồ-đề, đọa về hàng Định tánh Thanh-văn, như ông Vô Văn Tỳ-kheo, sanh tâm tăng thượng mạn.</p>
    <h4 id="dinh-tanh-duyen-giac" class="text-lg font-semibold">10. ĐỊNH TÁNH DUYÊN GIÁC</h4>
    <p>Người tu thiền định khi hành ấm hết, chỉ thấy một màu thanh tịnh sáng suốt, lúc bấy giờ sanh tâm chấp cho đó là Niết-bàn ; rồi tham trước cảnh này, không cầu tăng tiến, mê mờ tánh Bồ-đề, mất chánh kiến, nên đọa về hàng Định tánh Duyên-giác.</p>
    <h4 id="tom-lai-2" class="text-lg font-semibold">TÓM LẠI</h4>
    <p>A Nan, mười món ma này, do người tu thiền, khi dụng tâm phá trừ thức ấm, nên nó biến hiện ra các cảnh như vậy. Vì mất chánh tri kiến, mê lầm tánh Bồ-đề, khởi tâm chấp trước, cho mình đặng thiền, đặng đạo, thành Phật, thành Thánh v.v... có người sanh ra điên cuồng, nên đều đọa về ngoại đạo cả.</p>
    <p>Vậy các ông phải giữ gìn nơi lòng, vâng lời Ta dạy : Sau khi Ta diệt độ rồi, các ông phải đem lời Ta dạy đây mà truyền dạy cho chúng sanh đời sau, bảo hộ người tu hành, chớ để cho chúng ma làm hại. Trên đường tu hành họ được thẳng vào chỗ tri kiến của Phật chẳng gặp các đường rẽ.</p>
    <p>Này A Nan, người trong khi tu thiền, gặp ma nó biến hiện ra nhiều cảnh rất là vi tế, nếu các ông hiểu biết, rửa sạch tâm cấu nhiễm, chẳng khởi tà kiến, thì cảnh ma kia lần lần tiêu diệt, các ông sẽ thẳng đến đạo Bồ-đề.</p>
    <p>Còn như đời sau, có chúng sanh nào chẳng dám tu thiền, sợ bị các ma nhiễu hại, thì ông nên khuyên họ nhất tâm trì chú Lăng Nghiêm này, để các ma chướng kia không thể hại được, rồi cũng thẳng đến được đạo Bồ-đề.</p>
    <p>Khi Phật nói Kinh này rồi, toàn cả hội chúng, nào là : Tăng, Ni, thiện nam, tín nữ, trời, người, thần A-tu-la, Thánh, Tiên, quỷ thần, Thanh-văn, Duyên-giác, Bồ-tát, tất cả đều hoan hỷ lễ Phật rồi trở lui.</p>
    <h3 id="luu-y" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">LƯU Ý</h3>
    <p>Quý Phật tử đọc hết đoạn ngũ ấm ma này rồi, từ đây về sau, trên đường tu hành cần phải thận trọng, chớ nên gặp chi tin nấy, mà nguy hiểm cho mình về hiện tại cũng như tương lai.</p>
    <p>Chúng tôi thấy trong giới Phật tử, phần đông là hàng phụ nữ (xin lỗi quý bà) lòng tin tưởng dồi dào lắm ! Mỗi khi thấy một việc gì lạ thường, có tính cách thần kỳ huyễn hoặc, không chịu bình tâm suy xét chân hay ngụy; cứ cho đó là Phật thị hiện hay Bồ-tát giáng thế v.v... rồi rủ nhau tin tưởng theo càn, say mê như người nghiện thuốc, rủ nhau theo rất đông cho đến nỗi như cả phong trào. Như những việc trước mắt... mà quý vị đã thấy vừa qua... kết cuộc rồi thế nào quý vị đã biết rõ... Thật nguy hại vô cùng ! Nếu lỡ một phen bước vào đường tà rồi, thì trăm kiếp ngàn đời khó trở lại.</p>
    <p>Tôi xin dẫn một vài bằng chứng trong Kinh, để quý vị xem qua, đặng cẩn thận những điều nguy hiểm trong lúc tu hành.</p>
    <p>« Thuở xưa, Tổ Ưu Bà Quật Tôn giả đang nhập định, bị Thiên ma Ba tuần khuấy nhiễu... Đến khi xuất định, ngài dùng thần thông hàng phục được Thiên ma. Sau khi chúng đã hối ngộ quy y Tam bảo rồi, vì cảm hồng ân tế độ của Tổ sư, nên đến xin cúng dường ngài một bữa cơm để tỏ lòng tri ân.</p>
    <p>Tổ sư dạy : - « Ta vì chuyên lo tu hành không giờ rảnh để đi thụ trai. Ta chỉ muốn xem một việc, nếu ngươi bằng lòng, thế là đền ơn cho ta rồi ». Thiên ma : - « Dạ, đệ tử xin vâng ». Tổ sư dạy : - « Khi Phật ra đời đã có ngươi : vậy trong lúc đó Phật cùng các vị Thánh chúng như thế nào ? Hôm nay ngươi hóa hiện lại cho ta xem thử ». Thiên ma thưa : - « Con xin vâng lời Tổ sư dạy. Nhưng khi con hóa hiện ra Phật, xin Tổ sư nhớ đừng lạy, vì sợ tổn phước con nhiều ». Tổ sư hứa lời.</p>
    <p>Thiên ma ba tuần liền biến mất, trong giây phút hóa hiện ra Đức Phật, thân vàng rực rỡ, đủ 32 tướng tốt, 80 vẻ đẹp, hào quang sáng chiếu khắp cả một góc trời, trong rừng từ từ đi ra. Nào là ngài Xá Lợi Phất, Mục Kiền Liên, A Nan, Ca Diếp đứng hầu hai bên oai nghi tề chỉnh đủ cả 1.250 vị đệ tử, rần rộ theo sau...</p>
    <p>Tổ Ưu Bà Quật Tôn giả thấy Phật đi đến phóng hào quang rực rỡ, các vị Thánh chúng theo hầu, oai nghi tề chỉnh v.v... nên hết sức vui mừng, liền đứng dậy kính lễ, mà quên hẳn lời hứa trước kia. Lúc bấy giờ Thiên ma biến mất ».</p>
    <p>Phật tử chúng ta xem qua đoạn này, nên xét nghĩ : Như Tổ Ưu Bà Quật Tôn giả đã biết trước là ma hiện ra Phật và có hứa hẹn trước « không lạy », mà đến khi ma hiện ra còn quên, không phân biệt là ma hay Phật. Nếu chúng ta tình cờ gặp cảnh ngộ như thế, thử nghĩ trong tâm chúng ta thế nào ?</p>
    <p>Bởi thế trên đường tu hành, lúc nào chúng ta cũng phải cẩn thận cho lắm, chớ nên thấy cái gì lạ, không chịu suy xét kỹ, cứ nhắm mắt theo càn, ùa nhau tin tưởng cho là Thần, Thánh thật. Lỡ một phen sa vào đường tà rồi, thì trăm kiếp ngàn đời khó trở lại. Chúng ta nên nhớ rằng : cái gì thiệt thì nó vẫn thiệt, dù mình tin hay không tin nó cũng không mất. Còn cái gì giả thì ồ ạt trong một thời gian mà thôi, nếu người không tin thì nó sẽ tự tiêu diệt.</p>
    <p>Phật dạy các đệ tử : « Không nên thấy Phật cứ theo, nghe lời Phật nói cứ tin ; mà phải luôn luôn suy nghĩ, nếu đúng chân lý sẽ tin theo ». Phật dạy như thế, để cho các Phật tử khỏi bị tà ma ngoại đạo dối gạt.</p>
    <p>Trong Kinh Kim Cang Phật dạy :</p>
    <p>Nhược dĩ sắc kiến ngã</p>
    <p>Dĩ âm thanh cầu ngã</p>
    <p>Thị nhân hành tà đạo</p>
    <p>Bất năng kiến Như lai</p>
    <p>Đại ý đoạn này Phật dạy: Nếu người nào cho rằng thấy sắc thân của Phật có 32 tướng tốt, là thấy được Phật, thì ông Chuyển Luân Thánh Vương cũng có đủ 32 tướng tốt, hoặc ma nó hiện ra sắc thân Phật có đủ tướng tốt, vậy cũng là Phật hay sao? – hay nghe tiếng nói pháp thanh tao của Phật mà cho là nghe được tiếng Phật, thì tiếng chim Ca-lăng-tần-già, kêu rất thanh tao lảnh lót, vậy cũng là tiếng nói của Phật hay sao? Những người tin tưởng như vậy, là theo tà đạo, không bao giờ thấy được Phật.</p>
    <p>Phật thường nhắc nhở dặn dò các đệ tử: Phải dùng giáo lý chân chánh dạy người. Khi người hiểu được chân lý rồi tin theo, thì lòng tin đó mới được chân chánh. Phật cấm các đệ tử không cho dùng phép thần thông hay phép lạ để cảm hóa người. Chỉ trừ một vài trường hợp hàng phục Ngoại đạo hoặc quỷ thần; vì sợ sau này Thiên ma ngoại đạo dùng thần thông hay phép lạ làm mê hoặc người.</p>
    <p>Vì thế nên Phật không từ trên hư không rớt xuống, hay tự nhiên xuất hiện; mà Ngài lại thị hiện cũng như người, lớn lên có vợ con, rồi đi tu và thành đạo v.v… để cho chúng sanh sau này, đừng tin tưởng những điều huyễn hoặc thần kỳ.</p>
    <p>Khi Phật còn trụ thế, có người đàn việt đem dâng cái bình bát cho chư tăng, lại để trên đầu một cây cột phướn cao, và thưa rằng: “Nếu vị nào lấy được tôi sẽ cúng cho”.</p>
    <p>Khi đó ông Tân Đầu Lô Phả Đọa Xà Tôn giả, dùng thần thông lấy cái bình bát ấy. Ông bị Phật quở trách rất nghiêm khắc, và phạt ông phải ở lại thế gian ứng cúng, làm phước điền cho chúng sanh, không được nhập diệt. Và Phật còn chế ra giới luật cấm các đệ tử không được dùng thần thông hay phép lạ trước người phàm phu.</p>
    <p>Trong Kinh cũng có chỗ nói, các Đức Phật và Bồ-tát thỉnh thoảng thị hiện ra đời để hóa độ chúng sanh, như Đức Di Lặc hay Ngài Quán Thế Âm v.v… Nhưng khi các Ngài hiện ra không ai biết được, chỉ trừ đến khi tịch diệt, các Ngài mới để lại vài di tích. Chừng đó người đời mới biết Phật hay Bồ-tát thị hiện; khi biết thì không còn thấy các Ngài nữa.</p>
    <p>Như Đức Di Lặc Bồ-tát hiện thân làm vị Bố Đại Hòa thượng. Ngài thường xách bị lớn bằng vải, đi khắp đó đây để hóa độ chúng sanh, mà người đời không ai biết, chỉ gọi Ngài là vị Bố Đại Hòa thượng(1). Đến khi thị tịch, Ngài nói một bài kệ, lúc bấy giờ người ta mới biết là Đức Di Lặc Bồ-tát hiện thân.</p>
    <p>Bài kệ:</p>
    <p>Di Lặc chân Di Lặc,</p>
    <p>Hóa thân thiên bách ức,</p>
    <p>Thời thời thị thời nhân,</p>
    <p>Thời nhân giai bất thức.</p>
    <p>Nghĩa là: Di Lặc thật là Di Lặc, biến hóa trăm ngàn muôn ức thân hình; thường thường thị hiện độ người, mà người đời chẳng ai biết.</p>
    <h3 id="ket-luan" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. KẾT LUẬN</h3>
    <p>Đại ý toàn cả bộ Kinh này, Phật dạy chúng sanh phải trở về với thể tánh chân tâm thường trụ, đồng với ý nghĩa như trong Kinh Pháp Hoa : « Khai thị ngộ nhập Phật tri kiến ».</p>
    <p>(1) Bố Đại Hòa thượng là vị Hòa thượng tay cầm cái đãy lớn bằng vải, người mập bụng to, sắc mặt thường hoan hỷ. Hiện nay ở phần lớn nhiều chùa đều có thờ Ngài, người đời thường gọi là Đức Di Lặc</p>
    <p>Phật đã dạy cho chúng ta biết rằng : Chư Phật và chúng sanh cũng đồng một bản thể chân tâm không khác. Vì chúng sanh mê muội thể tánh chân tâm này, nên phải chịu sinh tử luân hồi ; còn chư Phật đã ngộ chân tâm nên được tự tại giải thoát. Vì vậy mà Phật dạy : « Ta là Phật đã thành, còn các chúng sanh là Phật sẽ thành ».</p>
    <p>Nguyên nhân Phật nói Kinh này, là do ngài A Nan thị hiện mắc nạn, bị nàng Ma-đăng-già bắt. Sau khi nhờ Phật cứu độ được thoát nạn rồi, ngài mới cầu Phật chỉ dạy cho phương pháp nào mà mười phương các Đức Phật tu hành đều được thành đạo chứng quả.</p>
    <p>Nhờ đó Phật nói Kinh Lăng Nghiêm, để chỉ rõ chân tâm. Nếu giác ngộ được chân tâm là được thành Phật. Đó là một con đường tu duy nhất của chư Phật quá khứ, hiện tại cũng như vị lai.</p>
    <p>Trước khi chỉ chân tâm thì Phật gạn hỏi cái tâm theo thường tình chúng sanh vọng chấp. Bảy đoạn hỏi tâm làm cho ngài A Nan cùng đường tột lối ; lúc bấy giờ Phật mới từ từ chỉ cái tâm đến sáu lần. Ban đầu Phật tạm chỉ các giác quan về phần trực giác như thấy, nghe v.v... là tâm. Khi A Nan và đại chúng đều hiểu rồi, Phật lại chỉ lên một tầng nữa : « Các giác quan tuy không phải vọng, nhưng cũng chưa phải là chân tâm, nó cũng như mặt trăng thứ hai v.v... » Phật lại chỉ cái Bản thể sanh ra các giác quan (hiện tượng) mới thật là chân tâm. Tức là ở về đoạn, trong văn kinh chữ Hán chép : « Kiến kiến chi thời, kiến vi thị kiến, kiến du ly kiến, kiến bất năng cập v.v... ».</p>
    <p>Phật dạy : vì các ông còn ở trong vòng mê, nên chỉ gọi là giác quan : Thấy, nghe, hay, biết của chúng sanh ; đến khi ngộ rồi thì gọi là bốn đức Niết-bàn của Phật : thường, lạc, ngã, tịnh. Và Phật dạy : Tất cả các pháp đều từ tâm biến hiện, như năm ấm, sáu nhập, mười hai xứ, mười tám giới và bảy đại đều do tâm sanh ra, rồi cũng trở về thể tánh chân tâm. Thế là Ngài dẫn cái tướng quy về chân tánh.</p>
    <p>Đến đoạn này ngài A Nan mới ngộ được chân tâm, nên đứng dậy lạy Phật và xứng theo thể tánh chân tâm rộng lớn mà phát lời thệ nguyện rộng sâu vô tận.</p>
    <p>Ngài nguyện rằng : « Trong đời ngũ trọc tội ác, con thề vào trước để độ chúng sanh ; nếu còn có một chúng sanh nào chưa thành Phật thì con thề chẳng lãnh quả vui Niết-bàn... » Và câu « Hư không kia có thể tiêu hết, chớ chí nguyện của con đây không hề lay chuyển ». Cũng vì ngộ được đồng thể chân tâm, nên ngài mới phát lời thệ nguyện rộng lớn như thế.</p>
    <p>Mình đã được độ, muốn cho chúng sanh cũng đều được độ, nên ngài A Nan cầu Phật chỉ dạy phương pháp tu hành cho chúng sanh đời sau :</p>
    <p>Phật dạy có ba việc :</p>
    <p>1.- Khi đối cảnh không khỏi vọng niệm phân biệt theo vọng trần ; tức là câu « bất tùy phân biệt ». Nghĩa là, xoay các giác quan như thấy, nghe, hay, biết đều trở về thể tánh chân tâm. Nếu vọng niệm không khởi thì chân tâm hiện bày, đây là một pháp tu trực chỉ của bậc thượng căn.</p>
    <p>2.- Phật dạy trì giới. Nhờ trì giới tâm được thanh tịnh, nhờ tâm tịnh mới phát sanh ra trí huệ, để phá trừ vô minh. Vô minh hết thì chân tâm tự hiện bày. Nhưng trong Kinh này nói trì giới là chỉ cho tâm giới. Nghĩa là thân đã không sát, đạo, dâm, vọng cho đến cái « biết mình đã đoạn trừ » cũng không còn. Thật là cao siêu vô cùng, khó khăn tột bực. Vì nếu tâm còn móng một tí vọng niệm gì, thế là tâm chưa tịnh. Nếu tâm chưa tịnh thì giới thể chưa viên.</p>
    <p>3.- Phật dạy, nếu người nào nghiệp chướng nặng nề, thì nên chí tâm trì tụng chú Lăng Nghiêm, dù nghiệp chướng nặng đến đâu cũng lần lần tiêu hết, phước lành tăng trưởng, sẽ thành đạo Bồ-đề ; như thuận gió tung bụi chẳng có khó khăn gì.</p>
    <p>Trên đường tu hành, Phật dạy phải trải qua các thứ ma (sắc, thọ, tưởng, hành, thức mỗi ấm có mười) nó biến hiện đủ điều, nào là ma nội tâm, ma ngoại cảnh, đủ cách nhiễu hại hành giả. Cho đến khi gần thành Phật mà nó cũng vẫn còn theo phá. Như thái tử Sĩ Đạt Ta, trước giờ phút đại ngộ, dưới gốc cây Bồ-đề, vẫn còn bị ba người con của Ma vương tận lực khuấy nhiễu. Đến sao mai sắp mọc Ngài thành Phật mới hết.</p>
    <p>Sau mỗi đoạn ma hiện, Phật đều dạy rằng : « Do hành giả dụng công tu thiền, nên nó biến hiện ra như vậy, không phải là đặng đạo hay chứng Thánh, nếu hành giả biết trước thì các cảnh ma kia lần lần tiêu diệt không hại chi, còn mê lầm không biết, cho mình đặng đạo hay chứng Thánh, sanh tâm chấp trước, thì bị ma nó cám dỗ, rồi phải đọa vào đường tà, làm quyến thuộc của ma.</p>
    <p>Bởi thế, nên người tu hành cần phải thận trọng, chớ nên gặp chi tin nấy mà bị ma cám dỗ, rất nguy hiểm cho đời mình về hiện tại cũng như vị lai.</p>
    <p>Phật nhắc đi nhắc lại nhiều lần, bảo các đệ tử : « Nên đem lời Ta nói đây truyền dạy cho chúng sanh đời sau, khiến cho mọi người đều biết rõ, để tránh khỏi bị ma nhiễu hại, trên đường tu hành được thẳng đến đạo Bồ-đề ».</p>
    <p>Phật lại thiết tha kêu gọi các đệ tử : Hôm nay các ông đã được Ta tế độ rồi, vậy các ông không nên nhập diệt sớm, mà phải nguyện ở lại đời mạt pháp, để bảo hộ người tu hành đời sau, thế mới là người biết ơn Phật.</p>
    <p>Lòng từ của Phật thật là vô biên, tế độ chúng sanh không cùng tận, thương chúng ta như mẹ thương con, dạy dỗ chúng ta như mẹ hiền khuyên con dại ; nhắc đi nhắc lại nhiều lần không biết mỏi. Thật đúng với câu : « Đại từ đại bi mẫn chúng sanh. Đại hỷ, đại xả tế hàm thức... ».</p>
    <p>Phật tử chúng ta phải làm thế nào để khỏi phụ lòng thương yêu của Từ Phụ, cho xứng với danh từ « Phật tử ».</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Trong mười món ma về hành ấm, nguyên nhân chính khiến hành giả sanh ra chấp 'Chúng sanh từ tám vạn kiếp trở lại tự nhiên có, không có nguyên nhân sanh' là gì?",
    "options": {
      "a": "Do hành giả chứng đắc được túc mạng thông vô hạn.",
      "b": "Do Thiên ma Ba-tuần dùng thần thông che lấp trí tuệ của hành giả.",
      "c": "Do chỉ thấy biết được chúng sanh trong vòng tám vạn kiếp, ngoài đó thì mù mịt.",
      "d": "Do quan sát thấy chim sanh ra chim, quạ vốn đen, cò vốn trắng không đổi."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Sức tu của hành giả chỉ có giới hạn thấy được chúng sanh từ tám vạn kiếp trở lại, không phải vô hạn [1].",
      "b": "Sai. Trong giai đoạn tưởng ấm hết, tâm được minh chánh nên ngoại ma không còn dịp thuận tiện để nhiễu hại nữa [1].",
      "c": "Đúng. Do chỉ thấy biết được chúng sanh từ tám vạn kiếp trở lại, ngoài tám vạn kiếp thì mù mịt nên lầm tưởng chúng sanh không nguyên nhân sanh [1].",
      "d": "Sai. Quan sát vạn vật không đổi là ý giải thích cho vế sau (các vật tượng ngày nay đều không có nguyên nhân), không trực tiếp lý giải ý sanh ra tự nhiên trong 8 vạn kiếp [1]."
    }
  },
  {
    "question": "Hành giả rơi vào 'Bốn món chấp thường' khi nào?",
    "options": {
      "a": "Khi hành giả đạt đến cảnh giới Niết-bàn vô dư.",
      "b": "Khi nhận ra tâm mình biến khắp mười phương và chúng sanh tự sanh tự diệt trong đó.",
      "c": "Khi thấy sắc, thọ, tưởng đã diệt và cho rằng hành ấm cũng sẽ diệt theo.",
      "d": "Khi tham cứu tột cội gốc của muôn loài và thấy chúng sanh xoay vần không mất trong một khoảng thời gian dài."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Lúc này hành giả chỉ mới hết tưởng ấm khi tu thiền định, chưa đạt Niết-bàn vô dư [1].",
      "b": "Sai. Trạng thái này thuộc về lỗi 'chấp một phần thường, một phần vô thường' [2].",
      "c": "Sai. Đây là sự nhầm lẫn với lỗi 'chấp hành ấm thường; sắc, thọ, tưởng là vô thường' [2].",
      "d": "Đúng. Khi hành giả tham cứu cội gốc muôn loài và do sức tu biết được chúng sanh xoay vần từ hai vạn, bốn vạn đến tám vạn kiếp không mất đi, nên khởi chấp là thường [1]."
    }
  },
  {
    "question": "Loại chấp nào cho rằng 'tâm là thường, còn tất cả các vật có sanh tử nên là vô thường'?",
    "options": {
      "a": "Chấp một phần thường, một phần vô thường.",
      "b": "Chấp có bốn món biên giới.",
      "c": "Chấp mười sáu tướng có.",
      "d": "Chấp năm món Niết-bàn hiện tại."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Trong lỗi chấp này, hành giả quán sát tâm không đổi nhưng vạn vật sanh ra từ tâm lại có sanh tử nên vô thường [2].",
      "b": "Sai. Lỗi này liên quan đến chấp hữu biên hay vô biên đối với thời gian, tâm tánh và chúng sanh [2].",
      "c": "Sai. Lỗi chấp này cho rằng 'chết rồi còn tướng' với 16 trường hợp của các uẩn [3].",
      "d": "Sai. Lỗi chấp này cho rằng cảnh vui ở các cõi trời (Dục, Sơ thiền...) là cảnh Niết-bàn [4]."
    }
  },
  {
    "question": "Trong các món ma về hành ấm, việc chấp 'sanh là hữu biên, diệt là vô biên' thuộc về nhóm nào?",
    "options": {
      "a": "Bốn món nghị luận rối loạn.",
      "b": "Chấp năm món đoạn diệt.",
      "c": "Chấp có bốn món biên giới.",
      "d": "Chấp tám món cu phi."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Lỗi nghị luận rối loạn là lối đáp trả loanh quanh như 'cũng có, cũng không' [3].",
      "b": "Sai. Lỗi đoạn diệt là chấp hiện tiền tiêu diệt (như ở cõi Dục, cõi Sơ thiền...) rồi không sanh lại nữa [4].",
      "c": "Đúng. Đây là một trong 'Bốn món chấp có biên giới', khi hành giả sanh tâm phân biệt vạn vật thành nửa sanh (hữu biên) và nửa diệt (vô biên) [2].",
      "d": "Sai. Lỗi này chấp mỗi ấm đều có 2 tướng phi hữu và phi vô sau khi chết [4]."
    }
  },
  {
    "question": "Khi hành giả chấp 'Thức ấm' là cái chỗ trở về của vạn vật và gọi đó là Minh đế, họ sẽ trở thành bạn bè với phái ngoại đạo nào?",
    "options": {
      "a": "Phái Bà-la-môn thờ lửa.",
      "b": "Phái ngoại đạo Bà-tra.",
      "c": "Phái Ta-tỳ-ca-la.",
      "d": "Phái của tiên A Tư Đà."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Phái Bà-la-môn thờ lửa thuộc về lỗi 'Chấp tứ đại hóa sanh' [5].",
      "b": "Sai. Phái ngoại đạo Bà-tra và Tán-ni thuộc về lỗi 'Chấp cây cỏ cũng biết' [5].",
      "c": "Đúng. Người tu thiền sanh tâm chấp minh đế làm chỗ trở về của vạn vật sẽ thành bạn bè với phái ngoại đạo Ta-tỳ-ca-la [5].",
      "d": "Sai. Tiên A Tư Đà liên quan đến ma chướng 'Tham cầu sống lâu' [5]."
    }
  },
  {
    "question": "Hành giả rơi vào ma chấp 'Đại ngã mạn' (Ma-hê-thủ-la-thiên) khi có tư tưởng nào sau đây?",
    "options": {
      "a": "Cho rằng sắc thân này là vĩnh cửu không bao giờ hoại.",
      "b": "Cho rằng mười phương hư không đều từ thức hiện ra.",
      "c": "Cho rằng tất cả chúng sanh đều do ta sanh ra.",
      "d": "Cho rằng sau khi chết sẽ tan biến vào hư không."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đây là tư tưởng của lối 'Tham cầu sống lâu' [5].",
      "b": "Sai. Đây là thuộc lỗi 'Chấp nhân thường', khiến hành giả thành bạn của trời Tự tại [5].",
      "c": "Đúng. Khi thức tâm châu biến, hành giả lầm chấp tất cả chúng sanh do ta sanh ra (Chấp năng sanh), đọa thành bà con của trời Đại ngã mạn [5].",
      "d": "Sai. Lỗi này là 'Chấp hư vô' [5]."
    }
  },
  {
    "question": "Tại sao Phật giáo phê phán quan điểm 'Cây cỏ chết làm người, người chết trở lại làm cây cỏ'?",
    "options": {
      "a": "Vì quan điểm này đánh đồng tất cả vạn vật đều có tri giác (biết) như nhau, sai lệch về bản chất hữu tình và vô tình.",
      "b": "Vì cây cỏ không có khả năng thực hiện các hành vi thiện ác để luân hồi.",
      "c": "Vì quan điểm này khuyến khích con người không cần tu tập.",
      "d": "Vì nó phủ nhận sự tồn tại của các tầng trời."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Tài liệu chỉ rõ hành giả sai lầm khi chấp mười phương cây cỏ cũng đều là hữu tình, có tri giác như con người, rơi vào đường lối ngoại đạo [5].",
      "b": "Sai. Dù lý lẽ này hợp lý về mặt giáo lý sâu xa, nhưng theo văn bản thì lỗi ở đây là sự lầm lẫn thức ấm làm vạn vật đều có tri giác [5].",
      "c": "Sai. Trọng tâm của lỗi chấp này nằm ở nhận thức sai lệch về tri giác bản thể chứ không phải việc lười biếng tu tập [5].",
      "d": "Sai. Lỗi chấp này không liên quan trực tiếp tới việc phủ nhận các tầng trời [5]."
    }
  },
  {
    "question": "Hàng 'Định tánh Thanh-văn' trong mười món ma về thức ấm bị kẹt ở trạng thái nào?",
    "options": {
      "a": "Chấp một màu thanh tịnh sáng suốt là Niết-bàn rốt ráo.",
      "b": "Tham luyến cảnh dục và tự biến hóa ra mỹ nữ để vui thú.",
      "c": "Tham luyến ở chỗ không tịch, chẳng muốn tiến tu thêm nữa.",
      "d": "Sợ hãi ma vương nên không dám tiếp tục thiền định."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đây là tình trạng đọa về hàng Định tánh Duyên-giác [6].",
      "b": "Sai. Đây là trạng thái 'Tham luyến cảnh dục', thành bạn của Thiên ma cõi Dục [6].",
      "c": "Đúng. Hành giả khởi tâm tham luyến ở chỗ không tịch, chẳng muốn tăng tiến nên đọa về hàng Định tánh Thanh-văn [6].",
      "d": "Sai. Việc sợ hãi ma vương không phải là nguyên nhân đọa vào hàng Định tánh Thanh-văn [6, 7]."
    }
  },
  {
    "question": "Theo lời dạy của Phật trong đoạn kết, phương pháp nào giúp hành giả đời sau tránh khỏi sự nhiễu hại của ma chướng nếu không tự tin vào sức mình?",
    "options": {
      "a": "Đọc tụng các bài kệ của Thiên ma để hiểu đối phương.",
      "b": "Dùng thần thông để hàng phục các loại ma cảnh.",
      "c": "Nhất tâm trì tụng chú Lăng Nghiêm.",
      "d": "Tìm đến các vị Bố Đại Hòa thượng để cầu xin bảo vệ."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đây không phải là phương pháp Phật dạy trong kinh [7].",
      "b": "Sai. Phật cấm dùng thần thông, và không khuyến khích việc này đối với hành giả sợ hãi bị ma nhiễu hại [8].",
      "c": "Đúng. Phật dặn người chẳng dám tu thiền sợ bị ma nhiễu hại thì khuyên họ nhất tâm trì chú Lăng Nghiêm để bảo vệ bản thân, ma chướng không thể hại [7].",
      "d": "Sai. Bố Đại Hòa thượng là hiện thân của Bồ-tát Di Lặc, việc đi tìm ngài không phải là pháp môn đối trị ma chướng được Phật dạy [8]."
    }
  },
  {
    "question": "Phật đưa ra giới luật cấm các đệ tử dùng thần thông trước người phàm phu nhằm mục đích gì?",
    "options": {
      "a": "Vì thần thông không có thật, chỉ là ảo giác của người tu thiền.",
      "b": "Vì thần thông làm tiêu hao phước đức của người tu hành nhanh chóng.",
      "c": "Để ép buộc các đệ tử phải tập trung vào việc nghiên cứu kinh điển thay vì luyện phép.",
      "d": "Để ngăn chặn việc Thiên ma ngoại đạo dùng phép lạ mê hoặc lòng người về sau."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Thần thông là có thật (như Tổ Ưu Bà Quật hay Tôn giả Tân Đầu Lô đã từng dùng), nhưng Phật cấm dùng trước mặt phàm phu [8, 9].",
      "b": "Sai. Tài liệu không ghi nhận nguyên nhân này [8].",
      "c": "Sai. Việc nghiên cứu kinh điển không được nhắc đến như là lý do cấm thần thông trong tài liệu [8].",
      "d": "Đúng. Phật cấm dùng phép thần thông hay phép lạ để cảm hóa người vì sợ sau này Thiên ma ngoại đạo sẽ lợi dụng điều đó làm mê hoặc lòng người [8]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-16-muoi-mon-ma-ve-hanh-am-muoi-mon-ma-ve-thuc-am',
  slug: 'bai-thu-16-muoi-mon-ma-ve-hanh-am-muoi-mon-ma-ve-thuc-am',
  title: 'Bài Thứ 16 - Mười món ma về Hành ấm; Mười món ma về Thức ấm',
  type: 'article',
  status: 'published',
  order: 17,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-08',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-16-muoi-mon-ma-ve-hanh-am-muoi-mon-ma-ve-thuc-am/Ma_Ch%C6%B0%E1%BB%9Bng_Trong_Thi%E1%BB%81n_%C4%90%E1%BB%8Bnh.png',
      readingContent,
      tableOfContents: [
              {
                      "id": "muoi-mon-ma-ve-hanh-am",
                      "label": "I. MƯỜI MÓN MA VỀ HÀNH ẤM :"
              },
              {
                      "id": "chap-khong-nguyen-nhan-sanh",
                      "label": "1. CHẤP KHÔNG NGUYÊN NHÂN SANH",
                      "indent": 1
              },
              {
                      "id": "bon-mon-chap-thuong",
                      "label": "2. BỐN MÓN CHẤP THƯỜNG",
                      "indent": 1
              },
              {
                      "id": "chap-mot-phan-thuong-mot-phan-vo-thuong",
                      "label": "3. CHẤP MỘT PHẦN THƯỜNG, MỘT PHẦN VÔ THƯỜNG",
                      "indent": 1
              },
              {
                      "id": "chap-co-bon-mon-bien-gioi",
                      "label": "4. CHẤP CÓ BỐN MÓN BIÊN GIỚI",
                      "indent": 1
              },
              {
                      "id": "bon-mon-nghi-luan-roi-loan-khong-co-nhat-dinh",
                      "label": "5. BỐN MÓN NGHỊ LUẬN RỐI LOẠN KHÔNG CÓ NHẤT ĐỊNH",
                      "indent": 1
              },
              {
                      "id": "chap-muoi-sau-tuong-co",
                      "label": "6. CHẤP MƯỜI SÁU TƯỚNG CÓ",
                      "indent": 1
              },
              {
                      "id": "chap-tam-mon-vo-tuong",
                      "label": "7. CHẤP TÁM MÓN VÔ TƯỚNG",
                      "indent": 1
              },
              {
                      "id": "chap-tam-mon-cu-phi",
                      "label": "8. CHẤP TÁM MÓN CU PHI",
                      "indent": 1
              },
              {
                      "id": "chap-nam-mon-doan-diet",
                      "label": "9. CHẤP NĂM MÓN ĐOẠN DIỆT",
                      "indent": 1
              },
              {
                      "id": "chap-nam-mon-niet-ban-hien-tai",
                      "label": "10. CHẤP NĂM MÓN NIẾT BÀN HIỆN TẠI",
                      "indent": 1
              },
              {
                      "id": "tom-lai",
                      "label": "TÓM LẠI",
                      "indent": 1
              },
              {
                      "id": "muoi-mon-ma-ve-thuc-am",
                      "label": "II. MƯỜI MÓN MA VỀ THỨC ẤM :"
              },
              {
                      "id": "chap-minh-de",
                      "label": "1. CHẤP MINH ĐẾ :",
                      "indent": 1
              },
              {
                      "id": "chap-nang-sanh",
                      "label": "2. CHẤP NĂNG SANH",
                      "indent": 1
              },
              {
                      "id": "chap-nhan-thuong",
                      "label": "3. CHẤP NHÂN THƯỜNG",
                      "indent": 1
              },
              {
                      "id": "chap-cay-co-cung-biet",
                      "label": "4. CHẤP CÂY CỎ CŨNG BIẾT",
                      "indent": 1
              },
              {
                      "id": "chap-tu-dai-hoa-sanh",
                      "label": "5. CHẤP TỨ ĐẠI HÓA SANH",
                      "indent": 1
              },
              {
                      "id": "chap-hu-vo",
                      "label": "6. CHẤP HƯ VÔ",
                      "indent": 1
              },
              {
                      "id": "tham-cau-song-lau",
                      "label": "7. THAM CẦU SỐNG LÂU",
                      "indent": 1
              },
              {
                      "id": "tham-luyen-canh-duc",
                      "label": "8. THAM LUYẾN CẢNH DỤC",
                      "indent": 1
              },
              {
                      "id": "dinh-tanh-thanh-van",
                      "label": "9. ĐỊNH TÁNH THANH VĂN",
                      "indent": 1
              },
              {
                      "id": "dinh-tanh-duyen-giac",
                      "label": "10. ĐỊNH TÁNH DUYÊN GIÁC",
                      "indent": 1
              },
              {
                      "id": "tom-lai-2",
                      "label": "TÓM LẠI",
                      "indent": 1
              },
              {
                      "id": "luu-y",
                      "label": "LƯU Ý"
              },
              {
                      "id": "ket-luan",
                      "label": "III. KẾT LUẬN"
              }
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-16-muoi-mon-ma-ve-hanh-am-muoi-mon-ma-ve-thuc-am/Beyond_Inner_Illusions.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/ijli8lL960s',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/20awh0eLXdaXHPPGka34d9?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Mười món ma về Hành ấm; Mười món ma về Thức ấm',
    passPercentage: 70,
    questions,
  },
}

export default lesson
