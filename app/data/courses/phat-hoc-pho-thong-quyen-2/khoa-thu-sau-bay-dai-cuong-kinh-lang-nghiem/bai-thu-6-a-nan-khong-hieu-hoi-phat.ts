import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="a-nan-khong-hieu-hoi-phat">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ SÁU</h2>

    <section id="a-nan-khong-hieu-hoi-phat-phan-1">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I.- A-NAN KHÔNG HIỂU HỎI PHẬT</h3>
      <p>A-Nan thưa Phật: - Bạch Thế Tôn, vừa rồi Phật nói cái nghĩa "nhơn duyên, tự nhiên hòa hiệp và bất hòa hiệp", chúng con còn chưa hiểu, nay lại nghe Phật nói đến nghĩa "tâm sanh ra cái thấy, cái thấy không phải tâm..." chúng con lại còn thêm mù mịt nữa. Cúi xin đức Như Lai duỗi lòng từ bi, chỉ dạy cho chúng con ngộ được nhơn tâm thanh tịnh, sáng suốt này.</p>
    </section>

    <section id="phat-chi-hai-mon-vong-thay">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II.- PHẬT CHỈ HAI MÓN VỌNG THẤY</h3>
      <p>Phật dạy: - A-Nan ông phải chín chắn nghe, ta sẽ vì các ông phân biệt chỉ dạy, cũng khiến cho chúng sanh đời sau ngộ được đạo quả Bồ đề.</p>
      <p>Này A-Nan, tất cả chúng sanh bị sanh tử luân hồi trong thế gian, đều do hai món điên đảo phân biệt vọng thấy, tức nơi đó phát sanh ra sự nghiệp, rồi theo nghiệp mà chịu khổ luân hồi.</p>

      <section id="luoc-giai-2">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Từ nơi tâm động vọng sanh ra các nghiệp, rồi theo nghiệp mà chịu khổ hay vui. Cũng như người từ mê mà sanh ra ngủ, từ nơi đó mà hiện ra các cảnh vật vui, buồn rồi chịu lấy buồn vui.</p>
        <p>Thế nào là hai món?</p>
        <p>1- Cái điên đảo vọng thấy thuộc về nghiệp riêng của cá nhơn.</p>
        <p>2- Cái điên đảo vọng thấy thuộc về nghiệp chung của nhơn loại.</p>
      </section>
    </section>

    <section id="du-ve-nghiep-rieng-cua-ca-nhon">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III.- DỤ VỀ NGHIỆP RIÊNG CỦA CÁ NHƠN</h3>
      <p>A-Nan, sao gọi là cái điên đảo vọng thấy thuộc về nghiệp riêng của cá nhơn? Dụ như người nhặm con mắt, ban đêm dòm đèn thấy có vòng tròn lòa đỏ năm màu (ngũ uẩn).</p>
      <p>Ý ông nghĩ sao? Cái vầng đỏ năm màu ấy, của đèn hay cái thấy?</p>
      <p>A-Nan, nếu ông nói "của đèn" thì sao những người không nhặm mắt, họ chẳng thấy vầng đỏ, mà duy có người nhặm mắt mới thấy thôi?</p>
      <p>Nếu nói "cái vầng đỏ đó của cái thấy", thì cái thấy đã thành vầng đỏ; vậy người nhặm con mắt thấy vầng đỏ, thì bảo là thấy cái gì? (vì cái thấy đã thành vầng đỏ rồi, thì không thể nói thấy vầng đỏ nữa được)</p>
      <p>Lại nữa nếu ông chấp "cái vầng đỏ rời đèn riêng có", thời đáng lẽ ông xem bàn ghế chung quanh đều có vầng đỏ cả. Còn nói "vầng đỏ rời cái thấy riêng có", thì không cần con mắt thấy. Vậy thì tại sao người nhặm mắt thấy có vầng đỏ?</p>
      <p>Thế nên phải biết: cái mà sáng là ở nơi đèn, cái thấy vì bệnh mắt mà có bóng lòa. Cái "bóng lòa" và cái "thấy lòa" đều do nơi mắt nhặm. Còn cái thấy được lòa nhặm, thì "cái thấy" đó không phải nhặm hiện.</p>

      <section id="luoc-giai-3">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đại ý đoạn này Phật nói: Vì vô minh vọng động (nhặm) mà thấy có cái cảnh vật hiện ra như vậy (lòa đỏ). Chớ không phải do chơn lý (dụ đèn) hay chơn trí (dụ cái thấy) và cũng không thể nói nó ngoài chơn lý hay chơn trí.</p>
      </section>
    </section>

    <section id="du-ve-nghiep-chung-cua-dong-loai">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV.- DỤ VỀ NGHIỆP CHUNG CỦA ĐỒNG LOẠI</h3>
      <p>A-Nan, sao gọi là nghiệp chung vọng thấy của đồng loại? - Dụ như trong thế giới này có nhiều nước. Nhưng chỉ có một nước vì dân chúng đồng tạo ác nghiệp, nên đều cảm thấy có điềm không tốt, như sao chổi, sao phướn, hoặc hai mặt trời, hai mặt trăng v.v... Còn dân chúng ở các nước khác thời đều không thấy và cũng không nghe.</p>
    </section>

    <section id="lay-nghiep-rieng-de-chi-ro-nghiep-chung">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V.- LẤY NGHIỆP RIÊNG ĐỂ CHỈ RÕ NGHIỆP CHUNG</h3>
      <p>Này A-Nan, như người nhặm con mắt, vì nghiệp riêng của họ, nên "vọng thấy" cái đèn có vầng đỏ hiện ra. Tại con mắt nhặm mới thành ra lòa, chớ "cái thấy" đó không lòa.</p>
      <p>So sánh như các ông ngày hôm nay, thấy có núi, sông, thế giới và chúng sanh đó, đều do cái "nhặm lòa từ vô thỉ" (vô minh vọng động từ vô thỉ) cho nên mới thấy cảnh vật hiện ra như vậy.</p>
      <p>Các ông nên biết: "mắt thấy" (kiến) với cảnh vật bị thấy (kiến duyên) hiện tiền đây, đều do cái "vọng thấy" (giác minh) hiện ra. Cái "vọng thấy" đó (giác kiến) nó lòa nhặm, chớ cái chơn tâm không lòa nhặm.</p>
      <p>Cái chơn tâm biết được cái lòa nhặm đó (giác sở giác tánh) nó không phải ở trong lòa nhặm (giác phi tánh trung).</p>
      <p>Như thế thời làm sao bảo cái chơn tâm đó là các cảm giác thấy, nghe, hay biết được ư? Đây chính là cái nghĩa: "tâm sanh ra cái thấy, cái thấy không phải tâm v.v... ông mới vừa hỏi trước".</p>
      <p>Thế nên, nay ông thấy "tôi", thấy "ông" cùng thấy "thế giới" và "chúng sanh", đều do ông lòa nhặm (vô minh vọng động) mà thấy như vậy, chớ không phải cái thấy (tâm) đó nó lòa nhặm, cho nên không thể bảo nó (chơn tâm) là "cái thấy".</p>

      <section id="luoc-giai-5">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đại ý đoạn này nói: từ nơi chơn tâm, vì vô minh vọng động, nên khởi ra có căn và cảnh (cái thấy và cái bị thấy). Vì các cảm giác: thấy, nghe, hay, biết cùng với các cảnh vật bị thấy, đều do vô minh vọng động hiện ra cả. Còn "chơn tâm" vì không phải là vô minh, nên không thể gọi nó (chơn tâm) là cái cảm giác: nghe, thấy, hay, biết được.</p>
        <p>Đây là giải lại cái nghĩa ở đoạn trước nói: "chơn tâm sanh ra cái thấy v.v... (kiến kiến chi thời) cái thấy v.v... không phải là chơn tâm (kiến phi thị kiến). Cái thấy nó còn xa cách chơn tâm v.v..."</p>
        <p>Nên nhớ lỗi tại "vô minh vọng động", chớ không phải lỗi tại cái "thấy" và "cảnh bị thấy". Cũng như tại nhặm chớ không phải lỗi tại "cái thấy" của con mắt và "bóng lòa".</p>
      </section>
    </section>

    <section id="phat-ket-thuc-lai">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI.- PHẬT KẾT THÚC LẠI</h3>
      <p>A-Nan, một người nhặm mắt, vì nghiệp riêng của họ, nên họ thấy có cái vầng đỏ; cũng như dân chúng trong một nước, do ác nghiệp chung tạo của họ, nên đồng thấy những điềm không lành hiện ra.</p>
      <p>Lên một tầng nữa, là toàn cả chúng sanh trong mười phương thế giới ngày nay đây, đều do "vô minh vọng động từ vô thỉ" nên đồng vọng thấy có thế giới chúng sanh hiện ra vậy.</p>
      <p>Từ nơi chơn tâm, vì hư vọng nên hiện ra các cảm giác thấy, nghe, hay, biết. Do hòa hiệp vọng sanh ra, rồi cũng do hòa hiệp vọng diệt đi.</p>
      <p>Nếu các ông xa lìa được các duyên hòa hiệp cùng bất hòa hiệp, và trừ hết các nhơn sanh tử rồi, thì cái chơn tâm thường trụ thanh tịnh, bất sanh bất diệt hiện ra, và các ông được viên mãn đạo Bồ Đề.</p>

      <section id="luoc-giai-6">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Phật lấy một người nhặm để dụ một nước thấy điềm ác; lấy một nước để dụ chúng sanh trong mười phương. Vì vô minh vọng động từ vô thỉ, nên thấy có chúng sanh và thế giới. Cũng như người nhặm mắt thấy có vầng đỏ. Nếu hết nhặm thì vầng đỏ không còn, lúc ấy con mắt lành mạnh tự hiện.</p>
        <p>Cũng như vô minh vọng tưởng hết, thì thế giới chúng sanh chẳng còn. Lúc bấy giờ chơn tâm sáng suốt hiện ra, được viên mãn đạo Bồ đề, thế gọi là bậc Đại Giác.</p>
      </section>
    </section>

    <section id="phat-chi-cac-phap-deu-tro-ve-chon-tam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII.- PHẬT CHỈ CÁC PHÁP ĐỀU TRỞ VỀ CHƠN TÂM</h3>
      <p>A-Nan, ông còn chưa hiểu: các trần tướng huyễn hóa đó là nơi tâm sanh ra, rồi cũng tùy tâm diệt mất (đương xứ xuất sanh, tùy xứ diệt tận).</p>
      <p>Cái "tướng" (hiện tượng) của nó thì huyễn vọng, còn "tánh" (bản thể) của nó lại chơn thường.</p>
      <p>Nào là: 5 ấm, 6 nhập, 12 xứ, 18 giới đều do nhơn duyên hư vọng hòa hiệp tạm có sanh; nhơn duyên biệt ly, hư vọng tạm gọi là diệt.</p>
      <p>Các ông không biết: nào sanh, diệt, khứ, lai đều gốc ở nơi chơn tâm thường trụ. Trong thể tánh chơn như thường trụ này, tìm kiếm cái khứ, lai, mê, ngộ, sanh tử v.v... quyết không thể được.</p>

      <section id="luoc-giai-7">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Hiện tượng các pháp thì vọng, mà bản thể của các pháp lại chơn. Đứng về phần hình tướng (hiện tượng) các pháp thì thấy có sanh, diệt, khứ, lai. Còn đứng về phần bản tánh (bản thể) thời tìm cái khứ, lai, sanh, diệt, mê, ngộ không thể được.</p>
      </section>
    </section>

    <section id="a-nan-nghi-cai-nghia-bon-dai-hoa-hiep-sanh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII.- A-NAN NGHI CÁI NGHĨA BỐN ĐẠI HÒA HIỆP SANH</h3>
      <p>A-Nan thưa Phật rằng: - Bạch Thế Tôn, trước kia Ngài thường nói "tất cả các vật trong thế gian đều do bốn đại hòa hiệp sanh". Tại sao ngày hôm nay, Như Lai bác bỏ cả thuyết "nhơn duyên" và "tự nhiên". Chúng con không biết nghĩa này thế nào? Cúi xin đức Từ Tôn chỉ dạy nghĩa trung đạo rốt ráo cho chúng con.</p>

      <section id="luoc-giai-8">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Phật đã nhiều lần bác cả nhơn duyên và tự nhiên, mà ông A-Nan vẫn còn chấp mãi. Cũng vì lưới nghi nhiều lớp, không thể một lần lột hết được!</p>
      </section>
    </section>

    <section id="phat-quo-a-nan-hoc-nhieu-ma-khong-hieu">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX.- PHẬT QUỞ A-NAN HỌC NHIỀU MÀ KHÔNG HIỂU</h3>
      <p>Phật dạy rằng: - Ông trước kia nhàm chán quả Thinh văn, Duyên giác là thuộc về Tiểu-thừa, phát tâm cầu đạo vô thượng Bồ đề, cho nên ta mới vì ông chỉ bày nghĩa lý cao thượng thứ nhứt (đệ nhứt nghĩa đế).</p>
      <p>Tại sao ông còn đem lời nói tầm thường trong thế gian, là thuyết "nhơn duyên" để tự ràng buộc lấy mình?</p>
      <p>Ông tuy học nhiều mà không hiểu chi cả; cũng như người trong thế gian nói đến tên món thuốc này, món thuốc kia, đến khi thuốc thật đem ra trước mắt, thì họ không thể phân biệt được, thật đáng thương xót!</p>
      <p>Ông nên chăm chú nghe, nay ta sẽ vì các ông, cùng với những người tu về Đại-thừa đời sau, mà phân biệt chỉ dạy, để cho các ông thông hiểu được thật tướng (chơn tâm).</p>
      <p>A-Nan yên lặng, lắng nghe lời Phật dạy.</p>
    </section>

    <section id="phat-noi-cai-tanh-cua-tu-dai-phi-hoa-hiep">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">X.- PHẬT NÓI CÁI TÁNH CỦA TỨ-ĐẠI PHI HÒA HIỆP</h3>
      <p>A-Nan, ông nói rằng: "Do bốn đại hòa hiệp sanh ra tất cả vật". Này A-Nan, nếu cái thể tánh (bản thể) của bốn đại kia không có hòa hiệp, thời nó không thể hòa với gì được; cũng như hư không, không hòa hiệp với các vật. Còn nó có hòa hiệp, thời đồng với vật biến hóa (hiện tượng sanh diệt) nghĩa là, trước sau thành nhau, như nước thành băng, băng trở lại thành nước. Sanh diệt nối nhau, sanh tử, tử sanh, sanh sanh tử tử, xoay tròn như vòng lửa, không dứt đoạn.</p>

      <section id="luoc-giai-10">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Ông A-Nan lấy "hình tướng" (hiện tượng) của tứ đại có hư vọng hòa hiệp mà hỏi. Còn Phật chỉ cái "thể tánh" (bản thể) của tứ đại phi hòa hiệp, cũng như hư không, để giải thích. Nếu nó (tánh) có hòa hiệp thì cũng đồng như các tướng (tứ đại) có sanh diệt.</p>
      </section>
    </section>

    <section id="dat-tu-chon-tam-bien-hien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XI.- ĐẤT TỪ CHƠN TÂM BIẾN HIỆN</h3>
      <p>A-Nan, ông xem đất kia, lớn là quả địa cầu, còn nhỏ là hạt bụi (vi trần). Chẻ hạt bụi rất nhỏ (cực vi) ra làm bảy phần, thì thành hạt bụi lân hư (gần với hư không). Cái giáp ranh của sắc tướng tột đến chừng đó. Nếu chẻ hạt bụi nhỏ nhứt này (lân hư) ra làm một lần nữa, thì thành hư không. Thế thì rõ ràng hư không do chẻ bụi mà có, không phải do hòa hiệp sanh.</p>
      <p>Này A-Nan, như lời ông nói: "Do hòa hiệp sanh ra các vật trong thế gian". Vậy ông thử xem một hạt bụi nhỏ nhứt này (lân hư), phải dùng bao nhiêu hư không hòa hiệp lại mới thành ra nó? Không lẽ hư không hòa hiệp lại thành ra hạt bụi nhỏ nhứt (lân hư trần).</p>

      <section id="luoc-giai-11-a">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Nếu nói "các vật do hòa hiệp thành" thì hạt bụi nhỏ nhất này cũng phải do hòa hiệp mà thành.</p>
        <p>Vậy thì lấy cái gì hòa hiệp thành hạt bụi này? Nếu nói "lấy hư không hòa hiệp lại thành" thì phi lý. Còn không lấy hư không thì lấy cái gì hòa hiệp thành ra nó? (vì ông A-Nan chấp các pháp do hòa hiệp mà sanh). Nếu nói lấy sắc tướng hòa hiệp, thì thành ra một vật lớn, chớ không phải là thành hạt bụi nhỏ nhứt (lân hư trần) nữa.</p>
      </section>

      <p>Lại nữa, nếu chẻ hạt bụi nhỏ nhứt (lân hư) ra thành hư không, thì rõ ràng hư không không phải do hòa hiệp thành. Nếu nói do hòa hiệp thành, thì phải dùng bao nhiêu sắc tướng hòa hiệp lại mới thành hư không? Không thể hư không tự nó hòa hiệp thành hư không?</p>

      <section id="luoc-giai-11-b">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Vì chấp "các pháp do hòa hiệp mà có". Vậy hư không lấy cái gì mà thành? Không lẽ lấy hư không hòa hiệp thành hư không. Đoạn trên Phật chỉ hạt bụi, đoạn này Phật chỉ hư không, đều phi hòa hiệp cả.</p>
        <p>Vậy nên biết: khi sắc hòa hiệp thì không phải hư không, khi hư không hòa hiệp thì không phải sắc. Cái sắc còn có thể chia chẻ ra được, chớ hư không làm sao mà hòa hiệp cho được?</p>
      </section>

      <section id="luoc-giai-11-c">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đại ý đoạn này, Phật nói các pháp hư vọng huyễn hóa, như hóa, phi hòa, phi hiệp, do chúng sanh mê vọng mà thấy in tuồng như thật.</p>
        <p>Các ông không biết: trong chơn tâm, tánh (bản thể) của sắc là chơn không (tâm); tánh (bản thể) của không là chơn sắc (tâm). Nó vốn sẵn thanh tịnh, khắp giáp cả pháp giới; tùy theo tâm của chúng sanh tạo nghiệp và phân biệt như thế nào, thì có ứng hiện ra như thế nấy. Chúng sanh không biết, chấp là nhơn duyên sanh, hay tự nhiên có v.v... những cái chấp đó, đều do thức tâm phân biệt so đo cả. Phàm có nói năng, phân biệt, thì đều không đúng.</p>
        <p>Thật ra các vật ở giữa này, không có nhứt định vật gì, thật là vật gì cả. Tùy theo tâm của chúng sanh tạo nghiệp như thế nào, thì nó hiện ra như thế ấy. Đối với chúng sanh đó, nó thật hay đúng với loài đó thôi.</p>
        <p>Như chén nước đây, nếu đồng nghiệp loài người thì đều thấy thật là nước; còn đối với con vi trùng trong chén nước, thì không phải là nước nữa rồi, mà chính là nhà cửa của nó.</p>
        <p>Hay như cái bàn gỗ này, đối với loài người thì thấy nó là cái bàn thật, chớ đối với con mọt, thì lại không thành cái bàn nữa, mà thật là món ăn của chúng.</p>
        <p>Thêm một tỷ dụ nữa, như thân này đối với loài người, thì thấy thật là thân người, chớ đối với con vi trùng trong thân, thì không thành cái thân nữa, mà thật là một thế giới bao la vô tận của nó.</p>
        <p>Vậy thì thấy thật nước hay thật chỗ ở, thật cái bàn gỗ hay thật món ăn, thấy thật thân người hay thật thế giới, đều tùy theo tâm niệm phân biệt nhận định riêng của mỗi loài như thế nào, thì nó thành ra thế nấy. Nên trong kinh nói: "tùy tâm biến hiện".</p>
        <p>Chúng ta thường thấy: Khi nào tâm ta vui vẻ, thì thấy cảnh vật chung quanh đều vui, cho đến ngủ chiêm bao cũng thấy cảnh vui hiện ra. Trái lại, khi nào tâm ta buồn phiền thì thấy cảnh vật chung quanh cũng buồn bực; mỗi mỗi đều do tâm mình biến hiện ra cả.</p>
      </section>
    </section>

    <section id="lua-tu-chon-tam-bien-hien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XII.- LỬA TỪ CHƠN TÂM BIẾN HIỆN</h3>
      <p>A-Nan, lửa không có tự thể, nó chỉ gá các duyên mà sanh. Ông hãy xem những nhà trong thành này, khi họ muốn nấu ăn, thì họ cần cái kiếng (dương toại) đưa ra trước mặt trời lấy lửa. Này A-Nan, lửa ấy nếu nhơn hòa hiệp mà có, thì nó từ trong cái kiếng sanh, từ bùi nhùi ra, hay từ nơi mặt nhựt đến?</p>
      <p>Nếu lửa từ mặt nhựt đến, cháy được bùi nhùi trong tay của ông, thì những cây rừng và các cảnh vật nó vừa trải qua đó đáng lẽ đều phải bị cháy cả.</p>
      <p>Còn nói "lửa từ trong kiếng sanh ra cháy cái bùi nhùi", sao cái kiếng người cầm đó không cháy? Và cái bàn tay của người cầm cũng không cháy?</p>
      <p>Còn nói "lửa trong bùi nhùi sanh" thì cần gì phải có bàn tay cầm cái kiếng hứng ánh sáng mặt trời, mới có lửa?</p>
      <p>Ông nên chín chắn xem xét: cái kiếng ở nơi tay người cầm, mặt nhựt thời ở trên trời, bùi nhùi thì nằm tại đất. Cái kiếng và mặt trời vẫn xa nhau, không phải hòa, không phải hiệp. Vậy thì lửa này từ đâu mà đến cháy đây? Không lẽ lửa không từ đâu cả mà tự có?</p>
      <p>Các ông không biết trong chơn tâm, tánh (bản thể) của lửa (tâm) là thật không; tánh (bản thể) của không (tâm) mới là lửa thật. Nó vẫn thanh tịnh khắp giáp cả pháp giới, tùy theo tâm của chúng sanh phân biệt như thế nào, thì nó hiện ra như thế nấy.</p>
      <p>Nếu một người cầm kiếng lấy lửa, thì một chỗ đó có lửa hiện ra. Nếu tất cả người trong thế gian đều cầm kiếng lấy lửa, thì khắp tất cả trong thế gian đều có lửa hiện ra; chỉ tùy theo vọng nghiệp của chúng sanh mà hiện đó thôi, chớ không có xứ sở gì. Người thế gian không biết, dùng thức tâm hư vọng phân biệt mê lầm chấp cho nhơn duyên sanh, hoặc tự nhiên có v.v... phàm có nói năng, phân biệt đều không đúng sự thật.</p>

      <section id="luoc-giai-12">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đại ý như đoạn trên (đất).</p>
      </section>
    </section>

    <section id="nuoc-tu-chon-tam-bien-hien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XIII.- NƯỚC TỪ CHƠN TÂM BIẾN HIỆN</h3>
      <p>A-Nan, tánh nước không tịnh, đứng chảy chẳng thường. Như trong thành Thất La, các vị đại huyễn sư, như ông Ca-tỳ-la-tiên, Chiết-ca-la-tiên, Bác-đầu-ma và Ha-tát-đa v.v... Các vị này thường lấy nước mặt trăng hòa với thuốc. Họ chờ đêm nào trăng sáng trong, cầm hột châu phương chư hứng mặt trăng, thì có nước chảy ra ở thau.</p>
      <p>Vậy nước ấy từ hột châu sanh? Hay từ hư không ra? Hay từ mặt trăng đến?</p>
      <p>A-Nan, nếu từ mặt trăng đến, nó làm cho hột châu ra nước; vậy thời từ phương xa đến đây, trong khi trải qua cây cối các cảnh vật, nó phải đều làm cho ngập ướt cả; nếu thế thì cần gì phải có hột châu phương chư (hột châu lấy nước)? Song sự thật các cảnh vật không ngập ướt, thì rõ ràng nước ấy không phải từ mặt trăng đến.</p>
      <p>Còn nói "nước từ hạt châu ra", thì hột châu nếu đã chảy ra được nước, đáng lẽ lúc nào nó cũng tự chảy ra được nước, cần gì phải chờ nửa đêm hứng mặt trăng sáng mới có nước?</p>
      <p>Còn nói "nước từ hư không sanh" thì hư không vô biên, nước cũng phải vô biên; vậy thì từ nhơn gian cho đến thiên thượng, tất cả cỏ cây, đất đai đều bị ngập lụt cả.</p>
      <p>Ông nên chín chắn xem xét: Mặt trăng ở trên trời, hột châu ở tay người cầm, cái thau hứng nước lại để dưới đất. Mặt trăng với hột châu để cách xa nhau, không phải hòa cũng không phải hiệp, vậy nước đó từ đâu mà đến? Không lẽ không nhơn đâu mà nó tự có.</p>
      <p>Ông không biết trong chơn tâm, tánh (bản thể) của nước (tâm) thật không; tánh (bản thể) của không (tâm) thật nước, vốn sẵn thanh tịnh khắp giáp cả pháp giới, tùy tâm của chúng sanh phân biệt như thế nào, thì nó hiện ứng như thế nấy. Một người cầm hột châu lấy nước, thì một chỗ đó có nước. Nếu tất cả người trong thế gian đều cầm hột châu lấy nước, thì khắp cả trong thế gian đều có nước. Nước tùy theo nghiệp chướng trong chúng sanh mà phát hiện ra; nó không có phương hướng xứ sở gì. Người trong thế gian không biết, lầm chấp nhơn duyên sanh, hoặc tự nhiên có, đều do thức tâm vọng chấp, phân biệt cả. Phàm có nói năng, luận bàn thế nào, cũng đều không đúng cả.</p>
    </section>

    <section id="gio-tu-chon-tam-bien-hien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XIV.- GIÓ TỪ CHƠN TÂM BIẾN HIỆN</h3>
      <p>A-Nan, tánh gió không tịnh, động và tịnh chẳng thường. Như ông thường đắp y đi vào đại chúng, cái chéo y của ông phất qua người gần bên, thì có một chút gió quạt đến mặt người. Vậy gió này từ chéo y bay ra, hay từ hư không bay đến, hay từ nơi mặt người sanh?</p>
      <p>A-Nan, nếu gió này từ cái y bay ra, thì cái y đã thành gió, vậy nó phải bay bổng rời khỏi thân ông, và ông đắp y thành ra đắp gió hay sao? Ta hãy xổ cái y ra, ông hãy thử xem coi gió ở chỗ nào? Chẳng lẽ trong y có chỗ cất (để) gió.</p>
      <p>Nếu gió từ hư không sanh, vậy thời khi ông không động cái y, sao chẳng có gió? Và hư không thường còn, thì gió cũng phải thường sanh, nếu khi nào không có gió, thì hư không phải diệt. Song thật ra gió có thể diệt (hết) chớ không làm sao diệt được.</p>
      <p>Nếu hư không có sanh diệt, thời không gọi là hư không; còn gọi là hư không thời làm sao lại sanh ra gió được.</p>
      <p>Còn ông nói "gió từ nơi mặt người bị phất sanh"; nếu thật thế, thì gió phải phất đến mặt ông mới phải, tại sao nó lại phất ngược trở lại mặt người bị phất.</p>
      <p>Ông nên chín chắn xem xét: Cái y là ở nơi ông, cái mặt là thuộc về người kia (bị phất), còn hư không thì tự yên lặng; gió (động) với hư không (lặng) tánh khác nhau, không hòa không hiệp, vậy gió từ nơi đâu mà phát động đến đây? Không lẽ không từ nơi đâu mà tự có.</p>
      <p>Các ông không biết trong chơn tâm, tánh (bản thể) của gió (tâm) là thật gió, vốn sẵn thanh tịnh, khắp giáp cả pháp giới, tùy tâm chúng sanh phân biệt như thế nào, thời nó hiện ra như thế nấy. Một người phất y, thời có một chút gió sanh ra. Nếu tất cả mọi người trong thế giới đều phất y, thì cả thế giới đều có gió, theo nghiệp của chúng sanh mà phát hiện, không có phương hướng, xứ sở gì. Thế gian không biết, khởi thức tâm phân biệt so đo, lầm chấp là nhơn duyên sanh, hoặc tự nhiên có v.v... đều không đúng cả.</p>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo lời Phật dạy, hai món điên đảo vọng thấy khiến chúng sanh luân hồi là gì?',
    options: {
      a: 'Nghiệp thiện của kiếp trước và nghiệp ác của kiếp này.',
      b: 'Sự hòa hiệp của bốn đại và sự chia lìa của chúng.',
      c: 'Sự mê lầm về nhân quả và sự chấp ngắt vào cái tôi.',
      d: 'Nghiệp riêng của cá nhân và nghiệp chung của đồng loại.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tài liệu không đề cập đến nghiệp thiện ác trong định nghĩa này.',
      b: 'Sai. Sự hòa hiệp của bốn đại không phải là nội dung của hai món điên đảo vọng thấy.',
      c: 'Sai. Phật không dùng khái niệm này để chỉ hai món điên đảo.',
      d: 'Đúng. Phật dạy tất cả chúng sanh luân hồi đều do hai món điên đảo phân biệt vọng thấy là nghiệp riêng của cá nhơn và nghiệp chung của nhơn loại.',
    },
  },
  {
    question: 'Trong dụ về người nhặm mắt thấy vầng đỏ quanh đèn, Phật muốn chỉ ra điều gì về bản chất của "cái thấy"?',
    options: {
      a: 'Vầng đỏ là một thực thể tồn tại độc lập với mắt người.',
      b: 'Cái thấy bị bệnh (lòa) khác với bản tánh của cái thấy không bị bệnh.',
      c: 'Cái thấy và vầng đỏ là một, không thể tách rời.',
      d: 'Ánh sáng đèn chính là nguyên nhân duy nhất tạo ra vầng đỏ.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Vầng đỏ không tách rời mà do con mắt nhặm tạo ra.',
      b: 'Đúng. Cái "bóng lòa" do mắt nhặm, nhưng cái "tánh thấy" thì không phải do nhặm hiện.',
      c: 'Sai. Bản thân cái thấy không bị lòa nhặm nên không thể nói là một với vầng đỏ.',
      d: 'Sai. Ánh sáng đèn chỉ là duyên, nhặm mắt mới là nguyên nhân tạo ra bóng lòa.',
    },
  },
  {
    question: 'Ví dụ về một đất nước thấy điềm xấu như sao chổi, trong khi các nước khác không thấy, được dùng để minh họa cho khái niệm nào?',
    options: {
      a: 'Nghiệp chung vọng thấy của đồng loại.',
      b: 'Khả năng tiên tri của dân chúng trong nước đó.',
      c: 'Sự vận hành tự nhiên của các thiên thể.',
      d: 'Sự trùng hợp ngẫu nhiên của các sự kiện lịch sử.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Đây là ví dụ để minh họa cho nghiệp chung vọng thấy của đồng loại do dân chúng đồng tạo ác nghiệp.',
      b: 'Sai. Không liên quan đến khả năng tiên tri.',
      c: 'Sai. Hiện tượng này không thuộc về sự vận hành tự nhiên theo lời Phật dạy.',
      d: 'Sai. Nó là kết quả của ác nghiệp chung chứ không phải là sự ngẫu nhiên.',
    },
  },
  {
    question: 'Theo Phật, tại sao chúng ta thấy có núi sông, thế giới và chúng sanh hiện tiền?',
    options: {
      a: 'Do cái nhặm lòa từ vô thỉ (vô minh vọng động).',
      b: 'Do chơn tâm tự nhiên sinh ra các hình tướng đó.',
      c: 'Do các vị thần linh hoặc đấng tạo hóa sắp đặt.',
      d: 'Do sự hòa hiệp thật sự của bốn đại: đất, nước, lửa, gió.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Cảnh vật hiện ra đều do cái "nhặm lòa từ vô thỉ" tức là vô minh vọng động.',
      b: 'Sai. Chơn tâm không lòa nhặm nên không tự nhiên sinh ra các hình tướng.',
      c: 'Sai. Tài liệu không nhắc đến sự sắp đặt của thần linh.',
      d: 'Sai. Phật đã bác bỏ lý thuyết do nhơn duyên hư vọng hòa hiệp.',
    },
  },
  {
    question: 'Khi chẻ hạt bụi nhỏ nhất (lân hư trần) thêm một lần nữa, kết quả thu được là gì và điều này chứng minh điều gì?',
    options: {
      a: 'Thành các nguyên tử; chứng minh vật chất là vô tận.',
      b: 'Thành lửa hoặc nước; chứng minh sự chuyển hóa giữa các đại.',
      c: 'Thành hạt bụi nhỏ hơn; chứng minh lý thuyết về sự phân chia vật chất.',
      d: 'Thành hư không; chứng minh hư không không do hòa hiệp mà có.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Kết quả không tạo thành các nguyên tử theo ví dụ này.',
      b: 'Sai. Hạt bụi không chuyển hóa thành lửa hoặc nước.',
      c: 'Sai. Chẻ lân hư trần ra không thể thành hạt bụi nhỏ hơn nữa.',
      d: 'Đúng. Chẻ lân hư trần sẽ thành hư không, điều này chứng tỏ rõ ràng hư không không phải do hòa hiệp mà sanh ra.',
    },
  },
  {
    question: 'Trong dụ về lửa, Phật đặt câu hỏi về nguồn gốc của lửa khi dùng kiếng (dương toại) hứng mặt trời để đốt bùi nhùi nhằm mục đích gì?',
    options: {
      a: 'Để khẳng định lửa là một thực thể tự nhiên tồn tại vĩnh cửu.',
      b: 'Để chứng minh mặt trời là nguồn gốc của mọi loại nhiệt lượng.',
      c: 'Để chỉ ra rằng lửa không từ đâu đến, cũng không phải do hòa hiệp đơn thuần.',
      d: 'Để dạy A-Nan cách tạo ra lửa trong thực tế.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Lửa hiện tượng không vĩnh cửu.',
      b: 'Sai. Nếu mặt trời là nguồn gốc thì mọi cảnh vật đi qua đều bị cháy.',
      c: 'Đúng. Phật chỉ ra lửa không từ kiếng, không từ bùi nhùi hay mặt trời đến, chứng tỏ nó không do hòa hiệp đơn thuần.',
      d: 'Sai. Đây là một ví dụ nhằm giảng đạo lý về chơn tâm biến hiện.',
    },
  },
  {
    question: 'Khái niệm "Tùy tâm biến hiện" trong văn bản có nghĩa là gì?',
    options: {
      a: 'Chúng ta có thể dùng ý chí để thay đổi thế giới vật chất ngay lập tức.',
      b: 'Sự vật hiện ra tùy theo nghiệp chướng và sự phân biệt của tâm mỗi loài.',
      c: 'Tâm của mỗi cá nhân tạo ra một vũ trụ hoàn toàn khác biệt không liên quan đến người khác.',
      d: 'Thế giới sẽ biến mất nếu chúng ta không suy nghĩ về nó.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Khái niệm này không mang ý dùng ý chí thao túng vật chất.',
      b: 'Đúng. Sự vật hiện ra tùy theo tâm của chúng sanh tạo nghiệp và phân biệt.',
      c: 'Sai. Các cá nhân có thể có đồng nghiệp, cảm thọ cảnh giới chung cho đồng loại.',
      d: 'Sai. Văn bản không chỉ ra rằng thế giới biến mất ngay khi ngừng suy nghĩ.',
    },
  },
  {
    question: 'Phật quở trách A-Nan học nhiều mà không hiểu (đa văn) bằng hình ảnh ẩn dụ nào?',
    options: {
      a: 'Người mù sờ voi, mỗi người chỉ hiểu được một phần của sự thật.',
      b: 'Người đếm tiền cho kẻ khác mà bản thân mình không có một đồng nào.',
      c: 'Người nói tên các món thuốc nhưng khi thuốc đưa ra trước mắt lại không phân biệt được.',
      d: 'Người đi trên thuyền mà lại tìm kiếm dấu vết của thanh kiếm đã rơi xuống nước.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hình ảnh người mù sờ voi không được sử dụng ở bài thứ sáu.',
      b: 'Sai. Không dùng hình ảnh người đếm tiền.',
      c: 'Đúng. Phật ví người đa văn học nhiều mà không hiểu như người nói tên các món thuốc nhưng không nhận ra được thuốc thật.',
      d: 'Sai. Hình ảnh khắc thuyền tìm kiếm gươm không có trong bài.',
    },
  },
  {
    question: 'Mối quan hệ giữa "Hiện tượng" và "Bản thể" của các pháp được mô tả như thế nào?',
    options: {
      a: 'Hiện tượng là thực tại duy nhất, không có bản thể nào khác.',
      b: 'Bản thể cũng sanh diệt giống như hiện tượng.',
      c: 'Hiện tượng thì huyễn vọng (sanh diệt), còn bản thể (tánh) thì chơn thường.',
      d: 'Hiện tượng và bản thể hoàn toàn không có mối liên hệ nào với nhau.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hiện tượng chỉ là tướng hư vọng do duyên sanh.',
      b: 'Sai. Bản thể (tánh) không thể tìm thấy sanh, diệt, khứ, lai trong đó.',
      c: 'Đúng. Hiện tượng (tướng) thì huyễn vọng có sanh diệt, còn bản thể (tánh) lại chơn thường không sanh diệt.',
      d: 'Sai. Hiện tượng và bản thể có liên hệ vì mọi hiện tượng sanh diệt đều có gốc ở nơi chơn tâm.',
    },
  },
  {
    question: 'Điều gì sẽ xảy ra khi một người "xa lìa được các duyên hòa hiệp" và "trừ hết các nhơn sanh tử"?',
    options: {
      a: 'Người đó sẽ tan biến vào hư không vô tận.',
      b: 'Thế giới vật chất sẽ trở nên rực rỡ và vĩnh cửu.',
      c: 'Chơn tâm thường trụ hiện ra và viên mãn đạo Bồ Đề.',
      d: 'Người đó sẽ có quyền năng điều khiển các đại theo ý muốn.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Người đó không tan biến vào hư không.',
      b: 'Sai. Thế giới vật chất là do vô minh vọng tưởng, khi dứt thì chẳng còn.',
      c: 'Đúng. Nếu dứt các duyên và nhơn sanh tử thì cái chơn tâm thường trụ thanh tịnh hiện ra và được viên mãn đạo Bồ Đề.',
      d: 'Sai. Không có thông tin nói về quyền năng điều khiển các đại.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-6-a-nan-khong-hieu-hoi-phat',
  slug: 'bai-thu-6-a-nan-khong-hieu-hoi-phat',
  title: 'Bài Thứ 6 - A Nan không hiểu hỏi Phật',
  type: 'article',
  status: 'published',
  order: 7,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-6-a-nan-khong-hieu-hoi-phat/B%E1%BA%A3n_Ch%E1%BA%A5t_C%E1%BB%A7a_Th%E1%BB%B1c_T%E1%BA%A1i.png',
      readingContent,
      tableOfContents: [
        { id: 'a-nan-khong-hieu-hoi-phat-phan-1', label: 'I. A-Nan không hiểu hỏi Phật' },
        { id: 'phat-chi-hai-mon-vong-thay', label: 'II. Phật chỉ hai món vọng thấy', indent: 1 },
        { id: 'luoc-giai-2', label: 'Lược giải', indent: 2 },
        { id: 'du-ve-nghiep-rieng-cua-ca-nhon', label: 'III. Dụ về nghiệp riêng của cá nhơn', indent: 1 },
        { id: 'luoc-giai-3', label: 'Lược giải', indent: 2 },
        { id: 'du-ve-nghiep-chung-cua-dong-loai', label: 'IV. Dụ về nghiệp chung của đồng loại', indent: 1 },
        { id: 'lay-nghiep-rieng-de-chi-ro-nghiep-chung', label: 'V. Lấy nghiệp riêng để chỉ rõ nghiệp chung', indent: 1 },
        { id: 'luoc-giai-5', label: 'Lược giải', indent: 2 },
        { id: 'phat-ket-thuc-lai', label: 'VI. Phật kết thúc lại', indent: 1 },
        { id: 'luoc-giai-6', label: 'Lược giải', indent: 2 },
        { id: 'phat-chi-cac-phap-deu-tro-ve-chon-tam', label: 'VII. Phật chỉ các pháp đều trở về chơn tâm', indent: 1 },
        { id: 'luoc-giai-7', label: 'Lược giải', indent: 2 },
        { id: 'a-nan-nghi-cai-nghia-bon-dai-hoa-hiep-sanh', label: 'VIII. A-Nan nghi cái nghĩa bốn đại hòa hiệp sanh', indent: 1 },
        { id: 'luoc-giai-8', label: 'Lược giải', indent: 2 },
        { id: 'phat-quo-a-nan-hoc-nhieu-ma-khong-hieu', label: 'IX. Phật quở A-Nan học nhiều mà không hiểu', indent: 1 },
        { id: 'phat-noi-cai-tanh-cua-tu-dai-phi-hoa-hiep', label: 'X. Phật nói cái tánh của tứ-đại phi hòa hiệp', indent: 1 },
        { id: 'luoc-giai-10', label: 'Lược giải', indent: 2 },
        { id: 'dat-tu-chon-tam-bien-hien', label: 'XI. Đất từ chơn tâm biến hiện', indent: 1 },
        { id: 'luoc-giai-11-a', label: 'Lược giải', indent: 2 },
        { id: 'luoc-giai-11-b', label: 'Lược giải', indent: 2 },
        { id: 'luoc-giai-11-c', label: 'Lược giải', indent: 2 },
        { id: 'lua-tu-chon-tam-bien-hien', label: 'XII. Lửa từ chơn tâm biến hiện', indent: 1 },
        { id: 'luoc-giai-12', label: 'Lược giải', indent: 2 },
        { id: 'nuoc-tu-chon-tam-bien-hien', label: 'XIII. Nước từ chơn tâm biến hiện', indent: 1 },
        { id: 'gio-tu-chon-tam-bien-hien', label: 'XIV. Gió từ chơn tâm biến hiện', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-6-a-nan-khong-hieu-hoi-phat/Beyond_Illusion.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/wY7LnNI-P7M',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1qvywjB7WXbu8pICCSf2jc?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - A Nan không hiểu hỏi Phật',
    passPercentage: 70,
    questions,
  },
}

export default lesson
