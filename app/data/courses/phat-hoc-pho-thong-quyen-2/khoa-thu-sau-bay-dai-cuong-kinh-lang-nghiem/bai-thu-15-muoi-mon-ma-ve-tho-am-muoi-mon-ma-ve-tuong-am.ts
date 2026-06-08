import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bai-thu-muoi-lam-muoi-mon-ma-ve-tho-am-muoi-mon-ma-ve-tuong-am">
    <h2 id="bai-thu-muoi-lam" class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ 15</h2>
    <h3 id="i-muoi-mon-ma-ve-tho-am" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. MƯỜI MÓN MA VỀ THỌ ẤM:</h3>
    <h4 id="thay-loai-vat-thuong-khoc" class="text-lg font-semibold">THẤY LOÀI VẬT THƯƠNG KHÓC</h4>
    <p>Này A Nan, người tu thiền định khi phá trừ sắc ấm rồi, tâm trí sáng suốt, do hành giả dụng công dằn ép các vọng tưởng thái quá, nên phát sanh lòng thương xót các loài vật vô cùng, cho đến thấy loài mòng muỗi, thương cũng như con ruột, thương cho đến nỗi sa nước mắt khóc ròng. Nếu hành giả giác ngộ thì cảnh ấy lần lần tiêu hết, không có hại chi; còn mê lầm không biết, thì bị ma sầu bi ám ảnh vào tâm, rồi thấy người tự khóc ròng, tâm mất chánh định, sau khi chết rồi đọa vào cảnh ma.</p>
    <h4 id="chi-dong-manh-bang-phat" class="text-lg font-semibold">CHÍ DÕNG MÃNH BẰNG PHẬT</h4>
    <p>Này A Nan, người tu thiền định khi sắc ấm tiêu, thọ ấm hiện bày, thấy có nhiều điều linh ứng và những cảnh tốt đẹp hiện ra. Vì trong lòng cảm khích thái quá, nên hành giả phát tâm đại dõng mãnh, lập chí đồng với chư Phật, quyết tu một đời thành Phật, không chịu trải qua bao vô số kiếp. Nếu hành giả giác ngộ thì cảnh ấy lần lần tiêu diệt; còn mê lầm không biết cho mình chứng Thánh thì bị ma nhập tâm, thấy người hay khoe khoang hống hách, ngã mạn không ai bằng, cho đến trên thấy không có Phật, dưới thấy không có người, mất chánh định, sau khi chết rồi bị đọa vào ác đạo.</p>
    <h4 id="tam-nghi-tuong-kho-khan" class="text-lg font-semibold">TÂM NGHĨ TƯỞNG KHÔ KHAN</h4>
    <p>Lại nữa, người tu thiền định, khi địa vị cũ đã qua khỏi, địa vị mới chưa chứng, lúc ấy bơ vơ giữa chừng, vì trí lực suy kém, nên trong tâm sanh ra rất khô khan, tất cả thời nhớ nghĩ vẩn vơ, rồi tự cho đó là tinh tấn. Đây vì trong lúc tu thiền, không có trí tuệ sáng suốt để phán đoán. Nếu hành giả hiểu biết thì không có hại; còn mê lầm không biết, cho mình chứng Thánh thì bị ma ám ảnh vào tâm, sớm chiều bóc quăng trái tim của mình, mất chánh định, chết rồi đọa vào ác đạo.</p>
    <h4 id="dang-chut-it-cho-la-day-du" class="text-lg font-semibold">ĐẶNG CHÚT ÍT CHO LÀ ĐẦY ĐỦ</h4>
    <p>Người tu thiền định khi sắc ấm tiêu, thọ ấm hiện bày, vì dùng huệ nhiều hơn định, mất sự thăng bằng, nên gặp những cảnh thù thắng hiện ra, sanh lòng nghi ngờ cho là Đức Tỳ Lô Giá Na Phật, mới đặng chút ít cho là đầy đủ. Nếu hành giả hiểu biết thì không có hại; còn mê lầm không biết cho mình là Thánh, thì bị ma ám ảnh, khi gặp người tự xưng: “Ta đặng đạo vô thượng Bồ đề”, sẽ mất chánh định, sau đọa vào đường ma.</p>
    <h4 id="tam-buon-rau-vo-han" class="text-lg font-semibold">TÂM BUỒN RẦU VÔ HẠN</h4>
    <p>Người tu thiền định, khi cảnh cũ đã mất, địa vị mới chưa chứng, tự thấy bơ vơ; gặp cảnh gian nan nguy hiểm, sanh tâm buồn rầu vô hạn, như ngồi trên chông sắt, như uống thuốc độc, tâm chẳng muốn sống, thường cầu xin người giết giúp thân mạng mình, đặng sớm được giải thoát. Đây là do trong khi tu hành, hành giả thiếu phương tiện để lướt qua những cảnh ấy. Nếu liễu ngộ thì không hại; còn mê lầm chẳng biết, hành giả cho mình chứng Thánh, thời bị ma u sầu ám ảnh, rồi tự cầm gươm dao lóc lấy thịt mình, ưa bỏ thân mạng, thường hay lo rầu hoặc vào ở trong núi non rừng rú, không muốn thấy người, mất tâm chánh định, sau chết rồi đọa vào đường ma.</p>
    <h4 id="vui-cuoi-khong-thoi" class="text-lg font-semibold">VUI CƯỜI KHÔNG THÔI</h4>
    <p>Người tu thiền định, khi tâm được thanh tịnh an ổn rồi, bỗng nhiên sanh ra vui mừng vô hạn không thể ngăn được. Nếu hiểu biết thời không có hại; còn mê lầm cho mình chứng Thánh, thì bị ma nhập vào tâm phủ. Thấy người cười hoài, đi trên đường sá một mình ca múa, tự cho rằng “Ta đã đặng vô ngại giải thoát”, mất chánh định, sẽ đọa vào đường tà.</p>
    <h4 id="sanh-dai-nga-man" class="text-lg font-semibold">SANH ĐẠI NGÃ MẠN</h4>
    <p>Người tu thiền định, khi thấy sắc ấm tiêu, thọ ấm hiện bày, tự cho mình được như thế là đầy đủ rồi, sanh tâm ngã mạn, đối với mười phương chư Phật còn khinh khi, huống hồ là Thinh-văn, Duyên-giác. Nếu hiểu ngộ thì chẳng hại; còn hành giả mê lầm không biết cho là chứng Thánh, thì bị ma đại ngã mạn nó nhập tâm, không lạy Phật tổ, hủy hoại kinh tượng. Hạng người ấy thường nói với tín đồ rằng: “Phật bằng cây, đất, đồng, chì; còn kinh tượng là giấy mực, có gì mà kính lạy; nhục thân này mới là chơn thật thường còn, sao chẳng cung kính, thật là điên đảo”. Tín đồ nghe rồi tin theo, đốt kinh chôn Phật. Người làm cho chúng sanh nghi lầm như thế, sau khi chết rồi bị đọa vào địa ngục vô gián.</p>
    <h4 id="tam-sanh-khinh-an" class="text-lg font-semibold">TÂM SANH KHINH AN</h4>
    <p>Người tu thiền định, khi sắc ấm tiêu, thọ ấm hiện bày, trong tâm sanh ra vô lượng khinh an rồi tự cho mình đã chứng Thánh, đặng đại tự tại. Nếu hành giả hiểu biết thời không hại; còn mê lầm không biết thì bị ma nhập tâm, rồi tự cho mình đã đầy đủ, không cần tu tấn, mất chánh định, sau khi chết rồi bị đọa vào đường tà.</p>
    <h4 id="chap-khong" class="text-lg font-semibold">CHẤP KHÔNG</h4>
    <p>Người tu thiền định, khi sắc ấm tiêu, thọ ấm hiện bày, trong tâm bỗng sáng, rồi sanh ra chấp đoạn diệt, bác không nhân quả, không tội phước, tất cả đều không. Nếu hành giả hiểu biết thời không hại; còn mê lầm không biết chấp mình chứng Thánh thì bị ma nhập tâm, rồi chê bai người trì giới cho là tu hành Tiểu thừa, tự xưng mình là Bồ-tát ngộ chơn lý chơn không rồi, không còn trì giới và phạm giới nữa, vẫn ăn thịt và uống rượu làm những việc tà dục. Do thần lực của ma nó làm cho tín đồ say mê, thương yêu cung phụng, luôn luôn trung thành, chẳng sanh lòng nghi ngờ hủy báng. Vì ma nhập lâu ngày làm cho phải điên, đến nỗi ăn uống những đồ nhơ uế, mà cho cũng như là uống rượu ăn thịt, phá các giới cấm của Phật, hoàn toàn chấp không, làm mất chánh kiến của mình, sau khi chết rồi đọa vào đường tà.</p>
    <h4 id="vi-qua-tham-ai-nen-sanh-ra-cuong" class="text-lg font-semibold">VÌ QUÁ THAM ÁI NÊN SANH RA CUỒNG</h4>
    <p>Người tu thiền định, khi sắc ấm tiêu, thọ ấm hiện bày, sanh ra vô cùng ái dục, đến đỗi phát cuồng. Nếu hành giả giác ngộ thì cảnh đó hết dần, còn mê lầm không biết cho là chứng Thánh, thì bị ma nhập tâm, rồi khuyến hóa người đời bình đẳng hành dục, bảo họ rằng: “Hành dục là đạo Bồ-đề, người hành dâm dục là kẻ duy trì chánh pháp”. Do thần lực của ma làm cho người cuồng kia chinh phục được cả ngàn muôn người, đến chừng ma nhàm chán, bỏ người tu thiền kia rồi, lúc bấy giờ hành giả không còn oai đức gì nữa, bị luật nước giam cầm, đến khi lâm chung đọa vào địa ngục vô gián.</p>
    <h4 id="tom-lai" class="text-lg font-semibold">TÓM LẠI</h4>
    <p>A Nan, mười cảnh ma này, đều do trong lúc tu thiền, hành giả dụng tâm phá trừ thọ ấm, nên tự hiện ra các cảnh như vậy. Nếu hành giả mê lầm không biết, cho rằng chứng Thánh, thì bị ma dựa vào, làm nhiều hại đến thế; chết rồi đọa vào địa ngục vô gián.</p>
    <p>Sau khi Ta nhập diệt, các ông nên đem lời Ta dạy đây mà truyền dạy cho chúng sanh đời sau, bảo hộ người tu hành được thành đạo Bồ-đề, chớ để cho họ gặp các loài ma chướng làm hại, mà phải bị đọa vào ác đạo.</p>
    <h3 id="ii-muoi-mon-ma-ve-tuong-am" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. MƯỜI MÓN MA VỀ TƯỞNG ẤM:</h3>
    <h4 id="tham-cau-dieu-dung" class="text-lg font-semibold">THAM CẦU DIỆU DỤNG</h4>
    <p>A Nan, người tu thiền định, khi phát minh được diệu định rồi, lại khởi tâm tham cầu những việc diệu dụng và linh nghiệm. Khi đó thiên ma được biết, gặp dịp thuận tiện, nên xuất hồn nhập vào người, mà người bị nhập kia lại không biết, tự cho mình đặng đạo vô thượng Niết-bàn, cũng thường nói ra kinh pháp. Trong giây phút, thân mình người bị nhập kia, biến hiện ông Thầy, cô Ni, vị Đế thích hay người phụ nữ v.v… hoặc ở trong nhà tối, từ nơi thân họ chiếu ra hào quang sáng ánh. Người đời lầm cho là Bồ-tát thật, rồi tin nghe theo lời ma giáo hóa, sanh tâm buông lung, phá giới luật của Phật, lén làm việc tham dục. Người này ưa nói những điểm tai biến lạ lùng, hoặc nói chỗ kia có Phật ra đời, năm nào nổi đao binh giặc giã, năm nào có hỏa hoạn v.v… khủng bố tinh thần dân chúng, khiến cho người hao tài tốn của. Đến khi ma kia nhàm chán bỏ đi, thì thầy trò người bị ma nhập kia đều bị giam cầm. Các ông nếu biết trước thời khỏi vào luân hồi; còn mê lầm không biết thì đọa vào ác đạo.</p>
    <h4 id="tham-cau-du-ngoan" class="text-lg font-semibold">THAM CẦU DU NGOẠN</h4>
    <p>A Nan, hành giả khi tu thiền, trong tâm muốn xuất thần dạo chơi. Lúc bấy giờ Thiên ma Ba tuần hiểu biết, được dịp thuận tiện nhiễu hại, nên xuất hồn nhập vào người, mà người bị nhập kia lại không biết, tự nói mình đặng đạo vô thượng Niết-bàn, miệng cũng nói kinh pháp thông suốt, làm cho những người nghe đều tự thấy thân mình hóa ra sắc vàng sáng rỡ, ngồi trên tòa sen báu, đặng những điều chưa từng có. Người đời lầm tưởng là Bồ-tát thị hiện. Người bị ma nhập kia lại dạy người phá giới luật của Phật, âm thầm làm việc tham dục, miệng ưa nói chuyện chư Phật giáng thế, như: ở xứ kia, ông đó là Đức Phật nào thị hiện, người nọ là vị Bồ-tát chi thị hiện v.v… làm cho người thấy, nghe sanh lòng khao khát, dâm tà kiến thêm mạnh, giống trí tiêu mòn. Đến lúc ma kia nhàm chán bỏ đi, thì thầy trò người bị ma nhập ấy đều bị bắt cả. Các ông nếu sớm giác ngộ thì khỏi vào luân hồi; còn mê lầm không biết thì đọa vào địa ngục.</p>
    <h4 id="cau-ngo-chan-ly" class="text-lg font-semibold">CẦU NGỘ CHÂN LÝ</h4>
    <p>Lại nữa, người tu thiền định, trong tâm tham, cầu ngộ chơn lý. Lúc bấy giờ Thiên ma Ba tuần biết được ý muốn, nên xuất hồn nhập cho người, mà người tự không biết, tự cho rằng ta đặng đạo vô thượng Niết-bàn, miệng cũng nói kinh pháp, làm cho thính giả tuy chưa nghe pháp, mà tâm tự khai ngộ, biết được việc nhiều đời trước, hoặc biết rõ được tâm tánh người, hoặc thấy các cảnh địa ngục, biết trước những họa phước ở nhơn gian, miệng tự đọc kinh hay nói kệ, mỗi người đều tự vui mừng, cho là đặng những việc chưa từng có. Người đời mê lầm cho là Bồ-tát thị hiện. Ma kia lại ưa nói: “Phật có lớn nhỏ, Phật thiệt, Phật giả, Phật nam, Phật nữ, Đức Phật kia là Đức Phật trước, Đức Phật nọ là Đức Phật sau; Bồ-tát cũng vậy”, làm cho người mất chánh tín lại sanh tà kiến, tâm tánh buông lung, phá giới luật của Phật, lén làm việc tham dục. Đến khi chúng ma kia sanh tâm nhàm chán bỏ đi, thì thầy trò người bị ma nhập kia đều bị bắt. Các ông biết trước thời khỏi bị luân hồi; còn mê lầm tin theo thời đọa vào địa ngục.</p>
    <h4 id="mong-tam-muon-biet-nguon-goc-cua-muon-loai" class="text-lg font-semibold">MÓNG TÂM MUỐN BIẾT NGUỒN GỐC CỦA MUÔN LOÀI</h4>
    <p>Lại nữa, người tu thiền định, khi ở trong định, móng tâm muốn biết cùng tột căn nguyên của muôn vật, thỉ chung sanh hóa thế nào. Khi đó Thiên ma hiểu biết ý muốn, gặp dịp thuận tiện để khuấy nhiễu, nên xuất hồn đến nhập cho người, mà người nhập kia lại không biết, cho mình đặng đạo vô thượng Niết-bàn, cũng thường nói kinh pháp. Chúng ma kia dùng oai thần nhiếp phục quần chúng, làm cho thính giả tuy chưa nghe pháp mà trong lòng đã tự kính phục. Chúng ma nói: “Thân thịt hiện tiền đây là Bồ-đề Niết-bàn, là Pháp thân của Phật”. Chúng ma lại nói: “Mắt, tai, mũi, lưỡi là cảnh tịnh độ, nam căn và nữ căn tức là Bồ-đề Niết-bàn”. Nhưng người mê lầm không biết tưởng là Bồ-tát thị hiện, tin tưởng quy y theo, cho là một đấng hy hữu chưa từng có. Mất tâm chánh tín, phá giới luật của Phật, âm thầm làm hạnh tham dục. Đến khi ma kia nhàm chán bỏ đi rồi, thì thầy trò người bị ma nhập kia đều bị bắt cả. Các ông nếu biết trước thì khỏi bị luân hồi, còn mê lầm tin theo thời đọa vào địa ngục vô gián.</p>
    <h4 id="tham-cau-cam-ung-linh-nghiem" class="text-lg font-semibold">THAM CẦU CẢM ỨNG LINH NGHIỆM</h4>
    <p>Người tu thiền định vì móng tâm tham cầu sự cảm ứng linh nghiệm, nên Thiên ma biết được ý muốn, nó xuất hồn đến gá vào người mà người kia không biết, tự cho mình đặng đạo vô thượng Niết-bàn, cũng thường nói kinh pháp. Ma lại dùng thần lực khiến cho những người nghe pháp đều thấy thân thể người bị nhập kia già nua như người trăm tuổi sanh lòng thương mến, đêm ngày hầu hạ không biết mệt mỏi, và tứ sự cúng dường. Nó lại làm cho người người kính trọng là vị Tiên sư hay Thiện tri thức. Đối với người, nó ưa nói việc huyền ảo như: “Đời trước ta tế độ người kia, người nọ. Đời trước người kia là anh em hay vợ con của ta, đời nay ta tế độ, để cùng nhau sẽ sanh về thế giới kia và cúng dường Đức Phật nọ”; hoặc nói: “Có cõi Trời Đại quang minh, tất cả các Đức Phật đều ở đó”. Những người mê muội không biết, lầm cho là Bồ-tát thị hiện, tin tưởng kính trọng vô cùng, mất tâm chánh tín, phá giới luật của Phật, âm thầm làm việc tham dục. Đến khi chúng ma kia sanh tâm nhàm bỏ. Các ông biết trước thời khỏi vào luân hồi, còn tin tưởng nghe theo thì đọa vào địa ngục vô gián.</p>
    <h4 id="tham-cau-o-cho-vang-ve-tinh-mich" class="text-lg font-semibold">THAM CẦU Ở CHỖ VẮNG VẺ TĨNH MỊCH</h4>
    <p>Người tu thiền định, khép mình nơi khổ hạnh tham cầu ở chỗ vắng vẻ tịch mịch. Khi đó Thiên ma Ba tuần biết được ý muốn, nên xuất hồn nhập vào người, mà người kia không biết, cho mình chứng đạo vô thượng Niết-bàn, cũng thường hay nói pháp. Ma dùng thần lực khiến cho các người nghe đều biết được đời trước của mình. Hoặc trong chỗ đông người, nó chỉ một người nào đó nói rằng: “Người này chưa chết, mà đã thành súc sanh”. Nói rồi, ma nó bảo một người khác đạp sau cái đuôi, thì người kia biến thành súc sanh, đứng dậy không được, làm cho đồ chúng hết sức kính phục. Có ai vừa móng tâm niệm gì, thì ma nó liền biết và nói ra ngay. Ngoài giới luật của Phật, chúng còn giữ thêm những điều khổ hạnh, phỉ báng các thầy Tỳ-kheo, mắng nhiếc tín đồ, làm tiết lộ việc bí mật của người mà không sợ người hiềm ghét, thường nói những việc họa phước sắp đến, không sai một mảy. Đến lúc ma kia nhàm chán bỏ rồi, thì thầy trò người bị ma nhập đều bị bắt. Các ông biết trước thời không vào luân hồi; còn mê mờ tin theo thì đọa vào địa ngục vô gián.</p>
    <h4 id="tham-cau-biet-kiep-truoc" class="text-lg font-semibold">THAM CẦU BIẾT KIẾP TRƯỚC</h4>
    <p>Người trong khi tu thiền định, móng tâm tham cầu biết kiếp trước của mình. Khi đó Thiên ma hiểu biết, gặp dịp thuận tiện, nên xuất hồn nhập vào người, mà người bị nhập kia không biết, tự cho mình đặng đạo vô thượng Niết-bàn, cũng thường nói kinh pháp, hoặc làm cho người tình cờ đặng châu báu. Nó hóa ra một con vật ngậm hột châu hay những vật kỳ quái đem đến đưa cho người. Nó chỉ ăn rau rác đơn sơ, không dùng đồ ngon quí, có khi mỗi ngày chỉ ăn một hột mè, hột bắp, mà thân hình vẫn mập tốt. Chúng thường nói: “Xứ kia có kho báu, chỗ nọ có các Thánh Hiền ẩn”. Chúng làm cho người thấy những điều kỳ dị, hoặc nói những việc tham dục, phá giới của Phật, âm thầm làm hạnh dâm dục. Đến khi ma kia nhàm bỏ rồi, thì thầy trò người bị nhập đều bị bắt cả. Các ông biết trước thì khỏi đọa vào luân hồi; còn mê lầm tin theo, thì đọa vào địa ngục.</p>
    <h4 id="tham-cau-than-thong" class="text-lg font-semibold">THAM CẦU THẦN THÔNG</h4>
    <p>Người khi tu thiền định, móng tâm muốn được thần thông biến hóa. Khi đó Thiên ma liền biết, nên xuất hồn nhập cho người mà người không biết, tự cho rằng: “Đặng đạo vô thượng Bồ-đề”. Miệng nói kinh pháp và một tay cầm lửa, một tay rứt ánh sáng phân phát để trên đầu của thính giả. Mỗi người đều thấy trên đầu có ánh sáng dài đến vài thước, mà chẳng biết nóng; hoặc đi trên nước hay ngồi trên hư không vẫn tự tại; hoặc vào trong bình, vô trong đãy (bọc), đi ngang qua vách tường, mà không bị chướng ngại. Chỉ trừ khi đối với binh đao, thì họ không tự tại. Họ xưng là Phật mà thân mặc đồ thế gian, thọ các thầy tỳ-kheo lễ bái, chê bai người tham thiền và trì giới, mắng nhiếc đồ chúng, làm tiết lộ việc nhà người mà không sợ người hiềm giận. Họ thường nói với người: “Ta đã đặng thần thông tự tại”; hoặc làm cho người thấy được cõi Phật (ma hiện ra cõi Phật) đem những điều dở hèn làm việc truyền đạo và khen ngợi việc hành dục. Đến khi ma kia nhàm bỏ, thì thầy trò người bị ma nhập kia đều bị bắt cả. Các ông biết trước thời khỏi vào luân hồi; còn mê lầm tin theo thời đọa vào địa ngục vô gián.</p>
    <h4 id="tham-cau-khong-khong" class="text-lg font-semibold">THAM CẦU KHÔNG KHÔNG</h4>
    <p>Người khi tu thiền định, tâm ưa nhập diệt, tham cầu không không. Khi ấy Thiên ma liền biết, đặng dịp thuận tiện, nên xuất hồn nhập cho người, mà người kia chẳng biết, tự cho mình đặng đạo vô thượng Niết-bàn, miệng nói kinh pháp. Hoặc ở trong chỗ đông người, người ấy tự biến mất, không ai thấy được, rồi tình cờ từ hư không hiện ra, khi ẩn khi hiện thần diệu vô cùng, hoặc hiện thân trong suốt như ngọc lưu ly, khi duỗi tay chân ra thì thơm nực mùi hương chiên đàn, chê bai giới luật, hủy báng người xuất gia, bác không có nhơn quả, cho rằng chết rồi mất hẳn không có đầu thai, âm thầm làm việc tham dục, khiến cho những người thọ dục, cũng chấp không có nhơn quả tội phước v.v… Đến lúc ma nhàm bỏ, thì thầy trò người bị ma nhập kia đều bị bắt cả. Các ông biết trước thời khỏi vào luân hồi; còn mê lầm không biết thì đọa vào địa ngục vô gián.</p>
    <h4 id="tham-cau-song-lau" class="text-lg font-semibold">THAM CẦU SỐNG LÂU</h4>
    <p>Người tu thiền định, móng tâm tham cầu sống lâu. Lúc bấy giờ Thiên ma hiểu biết, xuất hồn nhập cho người, mà người tự không biết, nói mình đặng đạo vô thượng Niết-bàn, miệng thường nói kinh pháp và đi qua lại các thế giới được tự tại không ngăn ngại; mặc dù đường xa muôn dặm, nhưng đi không nháy mắt đã trở về đến chỗ, lại lấy những vật ở phương xa kia đem về làm tin. Hoặc ở trong một căn nhà nhỏ, nó bảo người đi thiệt mau, từ vách bên này qua vách bên kia, đi mấy năm cũng không đến; hoặc thường nói: “Chúng sanh trong mười phương đều là con của ta, ta sanh ra chư Phật, ta sanh ra thế giới, ta là Phật đầu tiên tự nhiên có, chẳng chơn tu hành mà được”; hoặc ngồi nói lầm thầm một mình như người cuồng, khiến cho người đời tin tưởng là Phật thiệt. Các ông biết trước thì khỏi bị luân hồi, còn mê lầm tin theo thời đọa vào địa ngục vô gián.</p>
    <h4 id="tom-lai-2" class="text-lg font-semibold">TÓM LẠI</h4>
    <p>A Nan, mười món ma tưởng ấm này, ở trong đời mạt pháp, sẽ giả làm người xuất gia tu hành, trong đạo của Ta, hoặc nhập cho người, hoặc tự hiện hình, đều tự xưng rằng: “Đã chứng quả Phật”. Chúng khen ngợi việc dâm dục, phá giới luật của Phật. Ma thầy, ma trò cùng nhau truyền dạy, làm hại cho người đến nhiều đời lắm, khiến người chơn tu mất chánh kiến, bị đọa làm bà con quyến thuộc của ma.</p>
    <p>Các ông ngày nay đã được độ ra khỏi sanh tử luân hồi rồi, vậy các ông phải khởi lòng đại bi, không nên nhập diệt sớm, phải nguyện ở lại đời mạt pháp để cứu độ những người chơn chánh tu hành đời sau, khỏi bị ma nhiễu hại.</p>
    <p>Các ông tuân theo lời Ta dạy đây, mới gọi là đền đáp ơn Phật. Các ông gắng bảo hộ người tu hành, nên đem lời nói của Ta đây truyền dạy cho chúng sanh đời sau, khiến cho họ hiểu rõ các việc ma, để khỏi bị Thiên ma nhiễu hại và mau được thành đạo vô thượng.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Trong mười món ma về thọ ấm, trạng thái \"Thấy loài vật thương khóc\" phát sinh do nguyên nhân chính nào từ phía hành giả?",
    "options": {
      "a": "Do hành giả bị ma sầu bi xâm nhập ngay từ khi bắt đầu tu.",
      "b": "Do hành giả dụng công dằn ép các vọng tưởng thái quá.",
      "c": "Do hành giả chưa phá trừ được sắc ấm.",
      "d": "Do hành giả đã đạt được lòng đại bi của chư Phật."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Ma sầu bi chỉ ám ảnh khi hành giả mê lầm không biết cảnh giới đang xảy ra chứ không xâm nhập ngay từ đầu [1].",
      "b": "Đúng. Nguyên nhân chính là do hành giả dụng công dằn ép các vọng tưởng thái quá nên phát sinh lòng thương xót vô cùng [1].",
      "c": "Sai. Trạng thái này xảy ra khi người tu thiền định đã phá trừ được sắc ấm [1].",
      "d": "Sai. Đây là một trạng thái ma chướng đánh lừa hành giả, hoàn toàn không phải lòng đại bi của chư Phật [1]."
    }
  },
  {
    "question": "Khi hành giả rơi vào trạng thái \"Chí dõng mãnh bằng Phật\", biểu hiện sai lầm nào thường xảy ra nếu họ bị ma nhập tâm?",
    "options": {
      "a": "Quyết tâm tu hành trải qua vô số kiếp để thành đạo.",
      "b": "Chỉ tập trung vào việc cứu độ chúng sanh mà quên bản thân.",
      "c": "Luôn khiêm tốn vì thấy mình đã bằng Phật.",
      "d": "Hay khoe khoang hống hách, coi thường cả Phật và người khác."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Hành giả trong trạng thái này mong muốn quyết tu một đời thành Phật, không chịu trải qua bao vô số kiếp [2].",
      "b": "Sai. Văn bản không đề cập đến việc họ quên bản thân để cứu độ chúng sanh [2].",
      "c": "Sai. Trái lại, họ trở nên ngã mạn không ai bằng [2].",
      "d": "Đúng. Biểu hiện của họ là hay khoe khoang hống hách, ngã mạn, cho đến trên thấy không có Phật, dưới thấy không có người [2]."
    }
  },
  {
    "question": "Tại sao trạng thái \"Tâm nghĩ tưởng khô khan\" lại khiến hành giả dễ bị ma ám ảnh?",
    "options": {
      "a": "Vì hành giả quá mệt mỏi sau khi phá trừ được thọ ấm.",
      "b": "Vì hành giả đã hoàn toàn đoạn tuyệt với mọi vọng tưởng.",
      "c": "Vì hành giả bơ vơ giữa chừng khi địa vị cũ đã qua nhưng địa vị mới chưa chứng.",
      "d": "Vì hành giả có trí tuệ quá sáng suốt nên tâm trở nên lạnh lùng."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Nguyên nhân không bắt nguồn từ sự mệt mỏi sau khi phá trừ thọ ấm [3].",
      "b": "Sai. Trong tâm hành giả vẫn nhớ nghĩ vẩn vơ, không hề đoạn tuyệt với vọng tưởng [3].",
      "c": "Đúng. Sự ám ảnh xảy ra do địa vị cũ đã qua khỏi, địa vị mới chưa chứng, lúc ấy bơ vơ giữa chừng và trí lực suy kém [3].",
      "d": "Sai. Thực tế là trong lúc tu thiền, hành giả thiếu trí tuệ sáng suốt để phán đoán [3]."
    }
  },
  {
    "question": "Trạng thái \"Đặng chút ít cho là đầy đủ\" xuất phát từ sự mất thăng bằng giữa hai yếu tố nào?",
    "options": {
      "a": "Sử dụng huệ nhiều hơn định.",
      "b": "Sự thiếu hụt giữa đức hạnh và năng lực.",
      "c": "Sự mâu thuẫn giữa từ bi và trí tuệ.",
      "d": "Sử dụng định nhiều hơn huệ."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Trạng thái này xảy ra vì hành giả dùng huệ nhiều hơn định, dẫn đến mất sự thăng bằng [4].",
      "b": "Sai. Văn bản không đề cập đến sự thiếu hụt giữa đức hạnh và năng lực [4].",
      "c": "Sai. Văn bản không hề nhắc đến yếu tố mâu thuẫn giữa từ bi và trí tuệ [4].",
      "d": "Sai. Sự mất thăng bằng ở đây là do hành giả dùng huệ nhiều hơn định, chứ không phải ngược lại [4]."
    }
  },
  {
    "question": "Khi bị ma \"Chấp không\" ám ảnh, hành giả thường có thái độ như thế nào đối với giới luật?",
    "options": {
      "a": "Chỉ giữ các giới tính đức mà bỏ qua các giới về hành vi.",
      "b": "Chê bai người trì giới và tự cho phép mình làm các việc tà dục.",
      "c": "Càng trở nên tinh nghiêm trong việc giữ gìn các giới cấm.",
      "d": "Ép buộc tín đồ phải tu khổ hạnh để đạt đến cái không."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Kẻ bị ám ảnh bác bỏ hoàn toàn nhân quả tội phước, không giữ bất kỳ loại giới luật nào [5].",
      "b": "Đúng. Hành giả chê bai người trì giới, tự xưng không còn trì giới và phạm giới, vẫn ăn thịt uống rượu làm những việc tà dục [5].",
      "c": "Sai. Thái độ của họ là phá bỏ hoàn toàn các giới cấm của Phật chứ không hề tinh nghiêm [5].",
      "d": "Sai. Ép buộc đồ chúng tu khổ hạnh là biểu hiện của ma \"Tham cầu ở chỗ vắng vẻ tịch mịch\" chứ không phải ma chấp không [6]."
    }
  },
  {
    "question": "Trong phần ma về tưởng ấm, người \"Tham cầu diệu dụng\" thường bị Thiên ma lừa dối bằng hiện tượng gì?",
    "options": {
      "a": "Khiến cho người nghe pháp tự biết được việc nhiều đời trước.",
      "b": "Làm cho hành giả có khả năng nhịn ăn mà vẫn mập tốt.",
      "c": "Thân người bị nhập biến hiện nhiều hình tướng hoặc chiếu ra hào quang.",
      "d": "Giúp hành giả bay lượn tự tại trên không trung."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Việc biết được việc nhiều đời trước là hiện tượng của ma \"Cầu ngộ chơn lý\" [7].",
      "b": "Sai. Khả năng nhịn ăn mà vẫn mập tốt là đặc điểm của ma \"Tham cầu biết kiếp trước\" [8].",
      "c": "Đúng. Trong giây phút, thân người bị nhập biến hiện thành ông Thầy, cô Ni... hoặc từ nơi thân họ chiếu ra hào quang sáng ánh [9].",
      "d": "Sai. Bay lượn trên không trung hoặc đi trên nước là khả năng do ma \"Tham cầu thần thông\" tạo ra [10]."
    }
  },
  {
    "question": "Điểm chung của các loại ma thuộc \"Tưởng ấm\" được mô tả trong văn bản là gì?",
    "options": {
      "a": "Chúng thường giả làm người tu hành, tự xưng chứng quả và khen ngợi dâm dục.",
      "b": "Chúng giúp hành giả mau chóng thành đạo Bồ-đề thông qua thần thông.",
      "c": "Chúng chỉ xuất hiện khi hành giả đã hoàn toàn nhập diệt.",
      "d": "Chúng luôn dùng bạo lực để đe dọa người tu hành."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Mười món ma tưởng ấm này sẽ giả làm người xuất gia tu hành, tự xưng đã chứng quả Phật, khen ngợi việc dâm dục và phá giới luật của Phật [11].",
      "b": "Sai. Ma chỉ lợi dụng tâm tham cầu để lừa dối, làm người tu mất chánh kiến chứ không giúp thành đạo [11].",
      "c": "Sai. Ma xuất hiện khi hành giả đang ở trong định và phát khởi các tâm tham cầu [9], [7].",
      "d": "Sai. Ma dùng thần lực và sự huyền ảo để lừa gạt, khiến quần chúng tự nguyện kính phục chứ không dùng bạo lực [12], [13]."
    }
  },
  {
    "question": "Trong trạng thái \"Tham cầu thần thông\", ma nhập thường khiến hành giả có khả năng gì đặc biệt nhưng lại có hạn chế nào?",
    "options": {
      "a": "Có thể đi trên nước, ngồi trên hư không nhưng không tự tại trước binh đao.",
      "b": "Có thể biến ra vàng bạc nhưng không thể mang đi xa.",
      "c": "Có thể nói tiếng của muôn loài nhưng không hiểu được kinh Phật.",
      "d": "Có thể hiện thân Phật nhưng không thể ở lâu trong chùa."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Kẻ bị nhập có thể đi trên nước hay ngồi trên hư không vẫn tự tại, đi ngang qua vách tường không bị chướng ngại, nhưng chỉ trừ khi đối với binh đao thì họ không tự tại [10].",
      "b": "Sai. Văn bản không hề nói đến khả năng biến ra vàng bạc của người bị ma nhập này [10].",
      "c": "Sai. Không có chi tiết nào đề cập tới việc nói tiếng muôn loài [10].",
      "d": "Sai. Họ có thể xưng là Phật nhưng thân lại mặc đồ thế gian, không bị hạn chế việc ở trong chùa [10]."
    }
  },
  {
    "question": "Trạng thái \"Tham cầu sống lâu\" dẫn đến quan niệm sai lầm nào về nguồn gốc của Phật và thế giới?",
    "options": {
      "a": "Khẳng định rằng Phật chỉ có thể được tìm thấy trong rừng sâu u tịch.",
      "b": "Cho rằng thế giới này chỉ là ảo giác và không có thật.",
      "c": "Tự xưng là Phật đầu tiên, sanh ra chư Phật và thế giới mà không cần tu hành.",
      "d": "Tin rằng chỉ có khổ hạnh mới giúp kéo dài mạng sống."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Quan niệm tìm Phật trong rừng sâu không được nhắc đến ở đoạn này [14].",
      "b": "Sai. Họ không phủ nhận sự tồn tại của thế giới mà tự nhận mình tạo ra nó [14].",
      "c": "Đúng. Người bị nhập thường nói lầm thầm rằng ta sanh ra chư Phật, ta sanh ra thế giới, ta là Phật đầu tiên tự nhiên có mà chẳng cần chân tu [14].",
      "d": "Sai. Thiên ma lừa người bằng những trò di chuyển không gian ảo diệu, không dạy phải khổ hạnh để sống lâu [14]."
    }
  },
  {
    "question": "Theo đoạn kết của văn bản, trách nhiệm của các vị đệ tử sau khi Phật nhập diệt đối với người tu hành đời sau là gì?",
    "options": {
      "a": "Truyền dạy những lời Phật dạy về các cảnh ma để bảo hộ người tu hành.",
      "b": "Khuyên tất cả mọi người nên nhập diệt sớm để tránh ma nhiễu hại.",
      "c": "Chỉ tập trung vào việc tự tu chứng cho bản thân để đền đáp ơn Phật.",
      "d": "Tiêu diệt tất cả những người bị ma nhập để thanh lọc đạo pháp."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Các đệ tử phải đem lời Ngài truyền dạy cho chúng sanh đời sau để bảo hộ người tu hành khỏi bị Thiên ma nhiễu hại [15], [16].",
      "b": "Sai. Ngược lại, Phật khuyên các đệ tử phải khởi lòng đại bi và không nên nhập diệt sớm [11].",
      "c": "Sai. Phật yêu cầu các đệ tử phải ở lại đời mạt pháp để cứu độ người chân tu chứ không được chỉ tập trung lo cho bản thân [11].",
      "d": "Sai. Trách nhiệm là truyền đạt kiến thức bảo hộ, không phải dùng bạo lực hay tiêu diệt những người bị ma nhập [16]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-15-muoi-mon-ma-ve-tho-am-muoi-mon-ma-ve-tuong-am',
  slug: 'bai-thu-15-muoi-mon-ma-ve-tho-am-muoi-mon-ma-ve-tuong-am',
  title: 'Bài Thứ 15 - Mười món ma về Thọ ấm; Mười món ma về Tưởng ấm',
  type: 'article',
  status: 'published',
  order: 16,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-08',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-15-muoi-mon-ma-ve-tho-am-muoi-mon-ma-ve-tuong-am/20_ma_ch%C6%B0%E1%BB%9Bng_thi%E1%BB%81n_%C4%91%E1%BB%8Bnh.png',
      readingContent,
      tableOfContents: [
              {
                      "id": "i-muoi-mon-ma-ve-tho-am",
                      "label": "I. MƯỜI MÓN MA VỀ THỌ ẤM:"
              },
              {
                      "id": "thay-loai-vat-thuong-khoc",
                      "label": "THẤY LOÀI VẬT THƯƠNG KHÓC",
                      "indent": 1
              },
              {
                      "id": "chi-dong-manh-bang-phat",
                      "label": "CHÍ DÕNG MÃNH BẰNG PHẬT",
                      "indent": 1
              },
              {
                      "id": "tam-nghi-tuong-kho-khan",
                      "label": "TÂM NGHĨ TƯỞNG KHÔ KHAN",
                      "indent": 1
              },
              {
                      "id": "dang-chut-it-cho-la-day-du",
                      "label": "ĐẶNG CHÚT ÍT CHO LÀ ĐẦY ĐỦ",
                      "indent": 1
              },
              {
                      "id": "tam-buon-rau-vo-han",
                      "label": "TÂM BUỒN RẦU VÔ HẠN",
                      "indent": 1
              },
              {
                      "id": "vui-cuoi-khong-thoi",
                      "label": "VUI CƯỜI KHÔNG THÔI",
                      "indent": 1
              },
              {
                      "id": "sanh-dai-nga-man",
                      "label": "SANH ĐẠI NGÃ MẠN",
                      "indent": 1
              },
              {
                      "id": "tam-sanh-khinh-an",
                      "label": "TÂM SANH KHINH AN",
                      "indent": 1
              },
              {
                      "id": "chap-khong",
                      "label": "CHẤP KHÔNG",
                      "indent": 1
              },
              {
                      "id": "vi-qua-tham-ai-nen-sanh-ra-cuong",
                      "label": "VÌ QUÁ THAM ÁI NÊN SANH RA CUỒNG",
                      "indent": 1
              },
              {
                      "id": "tom-lai",
                      "label": "TÓM LẠI",
                      "indent": 1
              },
              {
                      "id": "ii-muoi-mon-ma-ve-tuong-am",
                      "label": "II. MƯỜI MÓN MA VỀ TƯỞNG ẤM:"
              },
              {
                      "id": "tham-cau-dieu-dung",
                      "label": "THAM CẦU DIỆU DỤNG",
                      "indent": 1
              },
              {
                      "id": "tham-cau-du-ngoan",
                      "label": "THAM CẦU DU NGOẠN",
                      "indent": 1
              },
              {
                      "id": "cau-ngo-chan-ly",
                      "label": "CẦU NGỘ CHÂN LÝ",
                      "indent": 1
              },
              {
                      "id": "mong-tam-muon-biet-nguon-goc-cua-muon-loai",
                      "label": "MÓNG TÂM MUỐN BIẾT NGUỒN GỐC CỦA MUÔN LOÀI",
                      "indent": 1
              },
              {
                      "id": "tham-cau-cam-ung-linh-nghiem",
                      "label": "THAM CẦU CẢM ỨNG LINH NGHIỆM",
                      "indent": 1
              },
              {
                      "id": "tham-cau-o-cho-vang-ve-tinh-mich",
                      "label": "THAM CẦU Ở CHỖ VẮNG VẺ TĨNH MỊCH",
                      "indent": 1
              },
              {
                      "id": "tham-cau-biet-kiep-truoc",
                      "label": "THAM CẦU BIẾT KIẾP TRƯỚC",
                      "indent": 1
              },
              {
                      "id": "tham-cau-than-thong",
                      "label": "THAM CẦU THẦN THÔNG",
                      "indent": 1
              },
              {
                      "id": "tham-cau-khong-khong",
                      "label": "THAM CẦU KHÔNG KHÔNG",
                      "indent": 1
              },
              {
                      "id": "tham-cau-song-lau",
                      "label": "THAM CẦU SỐNG LÂU",
                      "indent": 1
              },
              {
                      "id": "tom-lai-2",
                      "label": "TÓM LẠI",
                      "indent": 1
              }
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-15-muoi-mon-ma-ve-tho-am-muoi-mon-ma-ve-tuong-am/%E1%BA%A2o_%E1%BA%A2nh_Thi%E1%BB%81n_%C4%90%E1%BB%8Bnh.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/JfLV_tf_ldY',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/0DdTPACiS2TR4MkUjP69WC?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Mười món ma về Thọ ấm; Mười món ma về Tưởng ấm',
    passPercentage: 70,
    questions,
  },
}

export default lesson
