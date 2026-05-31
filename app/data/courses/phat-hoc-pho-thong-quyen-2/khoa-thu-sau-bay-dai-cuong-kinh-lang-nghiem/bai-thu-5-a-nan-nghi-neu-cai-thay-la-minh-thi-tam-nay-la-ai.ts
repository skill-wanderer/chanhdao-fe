import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="a-nan-nghi-neu-cai-thay-la-minh-thi-than-tam-nay-la-ai">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ NĂM</h2>

    <section id="a-nan-nghi-neu-cai-thay-la-minh-thi-than-tam-nay-la-ai-phan-1">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I.- A-NAN NGHI: NẾU CÁI "THẤY" LÀ MÌNH THÌ THÂN TÂM NÀY LÀ AI?</h3>
      <p>A-Nan thưa Phật: - Bạch Thế Tôn! Nếu cái "thấy" này thật là "tâm" con, thì thân tâm của con hiện nay đây là ai? Và nếu cái "thấy" thật của con, thì nó phải hiện ở trước, khiến cho con thấy được nó.</p>
      <p>Lại nữa, thân tâm của con hiện nay đây, biết phân biệt được nó (cái thấy), còn nó không biết phân biệt được thân tâm con. Xin Đức Thế Tôn mở lòng đại bi chỉ dạy cho kẻ chưa ngộ này.</p>
    </section>

    <section id="cai-thay-roi-tat-ca-hinh-tuong">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II.- CÁI THẤY (TÂM) RỜI TẤT CẢ HÌNH TƯỚNG</h3>
      <p>Phật dạy A-Nan: Ông nói "cái thấy phải ở trước mặt để ông thấy nó", nói như vậy không phải, vì nếu cái "thấy" thật ở trước mặt ông, ông thấy được nó, thì cái "thấy" đó ở chỗ nào phải có nhất định và phải chỉ ra được.</p>
      <p>Nay ông ngồi trong rừng Kỳ đà, xem các cảnh vật, đưa tay chỉ ra từng món: chỗ im mát kia là rừng cây, cái sáng chiếu nọ là mặt nhựt, nơi ngăn ngại này là vách, chỗ trống đó là hư không; cho đến cỏ cây hoa lá, các vật lớn nhỏ tuy khác, song đều có hình tướng, có thể chỉ ra được cả. Còn cái "thấy" nếu có ở trước mắt ông, thì ông nên lấy tay chỉ chắc chắn, cái nào là cái "thấy". Nếu hư không là cái "thấy" thì cái gì là hư không? Còn nếu cảnh vật là cái "thấy", thì cái gì là cảnh vật? Đối với các cảnh vật sum la vạn tượng, ông nên chín chắn phân tích rõ ràng, rồi chỉ cho ta xem, cái nào là cái "thấy" cũng như chỉ các vật, không có lầm lộn.</p>
      <p>A-Nan thưa: Bạch Thế Tôn! Con mở tầm con mắt và đưa tay chỉ khắp tất cả, thì đều là "vật" chớ không có cái nào là "thấy". Dù cho bậc Bồ tát cũng không thể phân tích ở nơi muôn vật để chỉ riêng cái "thấy" ra được; huống chi chúng con là bậc sơ học Thanh văn, làm sao chỉ được.</p>
      <p>Phật dạy: Phải lắm!</p>

      <section id="luoc-giai-2">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Tâm không phải cái hình tướng, cũng như vàng không phải là vòng, kiềng, xoa, xuyến v.v...</p>
      </section>
    </section>

    <section id="cai-thay-tuc-tat-ca-phap">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. CÁI THẤY (TÂM) TỨC TẤT CẢ PHÁP</h3>
      <p>Phật dạy rằng: Này A-Nan! Như lời ông nói: "trong các cảnh vật, không thể chỉ riêng cái "thấy" ra được"; vậy nay ông đứng trước cảnh vật chỉ lại coi, cái nào không phải là cái "thấy"?</p>
      <p>A-Nan thưa: Con hiện đang xem tất cả các cảnh vật, không biết cái nào không phải cái "thấy". Nếu rừng cây kia không phải cái "thấy", thì làm sao thấy được rừng cây. Còn rừng cây là cái "thấy", thì sao gọi là rừng cây. Lại nữa, hư không nếu không phải là cái "thấy", thì làm sao thấy được hư không. Còn nếu hư không tức là cái "thấy", thì sao lại gọi là hư không. Con chín chắn suy nghĩ: cái nào cũng là cái "thấy" cả.</p>
      <p>Phật dạy: Phải lắm!</p>
      <p>Khi đó đại chúng nghe lời Phật nói như vậy, tất cả đều hoang mang lo sợ, vì không biết nghĩa ấy thế nào.</p>

      <section id="luoc-giai-3">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Tâm đã sanh ra các pháp, thì pháp nào cũng là tâm cả: cũng như vàng đã làm ra các đồ trang sức thì món nào cũng là vàng cả.</p>
      </section>
    </section>

    <section id="phat-tran-tinh-dai-chung">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. PHẬT TRẤN TĨNH ĐẠI CHÚNG</h3>
      <p>Phật thấy A-Nan và đại chúng hoang mang, sợ hãi, nên sanh tâm thương xót, liền an ủi A-Nan và đại chúng rằng:</p>
      <p>Như-Lai nói chơn thật, chẳng dối trá, không phải như chúng ngoại đạo Mạc-già-lê, nói năng rối loạn không nhất định đâu. Các ông nên bình tĩnh và chín chắn suy xét lại, chớ để cho Như Lai thêm lòng thương xót.</p>
    </section>

    <section id="ngai-van-thu-dung-len-thua-hoi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V.- NGÀI VĂN THÙ ĐỨNG LÊN THƯA HỎI</h3>
      <p>Khi ấy Ngài Văn Thù Sư Lợi Pháp Vương tử thương cả bốn chúng, nên đứng dậy lạy Phật, cung kính chắp tay và thưa rằng:</p>
      <p>Bạch Thế Tôn! Trong đại chúng đây chưa hiểu cái nghĩa: các cảnh vật là cái "thấy" hay không phải cái "thấy"?</p>
      <p>Bạch Thế Tôn! Các cảnh vật hiện tiền đây, nếu là cái "thấy", thì phải chỉ ra được; còn nếu không phải cái "thấy", thì đáng lẽ không thể thấy được. Vì trong đại chúng không hiểu nghĩa này thế nào, cho nên mới sợ hãi, hoang mang. Cúi xin Đức Như Lai duỗi lòng từ bi chỉ dạy cho biết: Các cảnh vật hiện tiền đây, cùng với cái "thấy" này, nguyên là gì? Trong đây không có cái "phải" và cái "không phải".</p>

      <section id="luoc-giai-5">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đoạn này lý thâm, nên ngài Văn-Thù mới đứng lên thưa hỏi: người học phải suy xét nhiều mới hiểu được.</p>
        <p>Nói cảnh vật và cái thấy, tức là chỉ cả vật chất với tinh thần đồng một thể tánh chơn tâm. Vì chơn tâm thì không thể suy nghĩ và bàn luận được, phải tự ngộ mà thôi, nên nói, "nguyên nó là cái gì?" (vì không thể nói ra được). Bởi nó rời đối đãi thị phi, nên nói "trong đó không có cái phải và cái không phải".</p>
      </section>
    </section>

    <section id="phat-day-cai-thay-khong-co-thi-phi-thi">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI.- PHẬT DẠY: CÁI "THẤY" KHÔNG CÓ "PHẢI" VÀ "KHÔNG PHẢI" (THỊ, PHI THỊ)</h3>
      <p>Phật kêu ngài Văn-Thù và Đại chúng, dạy rằng:</p>
      <p>Mười phương các Đức Phật và các vị Đại Bồ tát an trụ trong chơn tâm rồi, thời không còn thấy thật có các cảnh vật là căn, trần, thức nữa. Cái thấy cùng với cảnh vật bị thấy, nguyên là "chơn tâm". Đã là chơn tâm, thì đâu còn có "phải" hay "không phải" nữa. Như ông là Văn Thù, vậy có thể nói ông là "thật" Văn Thù hay "không thật" Văn Thù được không?</p>
      <p>Văn-Thù thưa: - Bạch Thế Tôn! Chính như thế đó, con là Văn-Thù rồi, thì không thể nói "thật Văn-Thù" được; vì nếu nói "thật Văn-Thù", thì phải nói ông Văn-Thù giả (thứ hai). Song con nay đã là Văn-Thù rồi, thì không thể nói "thật" hay "không thật" được.</p>

      <section id="luoc-giai-6-a">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Chơn tâm không hai, nên không còn thị và phi đối đãi; không thể nói "quấy" đã đành, mà nói "phải" cũng không trúng. Bởi vì nó ngoài vòng đối đãi, cũng như ông Văn-Thù là Văn-Thù, không thể nói: "thật" hay "không thật" được.</p>
      </section>

      <p>Phật dạy: - Cái thấy cùng với cảnh vật bị thấy cũng lại như vậy, đều là thể tánh chơn tâm, vì vọng động mà có ra: thấy nghe và các cảnh vật. Nó cũng như mặt trăng thứ hai, đâu có gì mà nói "phải" hay "không phải". Nghĩa là chỉ có một mặt trăng chánh (chơn tâm), trong đó không có cái "phải" mặt trăng hay "không phải" mặt trăng.</p>
      <p>Nay ông thấy có cái "thấy" và "cảnh vật bị thấy" đó là vọng tưởng; còn đối với thể tánh chơn tâm, thì không còn nói phải hay không phải được. Bởi thế nên chơn tâm nói ra ngoài cái phạm vi "chỉ bày" và "không chỉ bày" của ông rồi.</p>

      <section id="luoc-giai-6-b">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Suy nghĩ không tới, nói năng không nhằm. Đại ý đoạn này nói: chỉ có một chơn tâm, không thể nói phải hay không phải, nó vượt ra ngoài sự đối đãi và nói năng phân biệt.</p>
        <p>Vì vọng động mà sanh ra các vật chất (cảnh) và tinh thần (tâm). Cũng như chỉ có một mặt trăng chánh, không thể nói phải mặt trăng hay không phải mặt trăng; vì lòa mà thấy in tuồng có mặt trăng thứ hai.</p>
      </section>
    </section>

    <section id="a-nan-nghi-chan-tam-dong-voi-thuyet-tu-nhien">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII.- A-NAN NGHI "CHƠN TÂM" ĐỒNG VỚI THUYẾT "TỰ NHIÊN" CỦA NGOẠI ĐẠO</h3>
      <p>A-Nan thưa: - Bạch Thế Tôn! Ngày trước Phật ở tại núi Lăng Già, có dạy cho ông Đại Huệ Bồ Tát v.v... rằng: "các chúng ngoại đạo kia thường chủ trương thuyết "tự nhiên sanh", còn Ta thời nói "các pháp do nhơn duyên sanh", nên không đồng với thuyết của các ngoại đạo kia".</p>
      <p>Hôm nay nghe lời Phật dạy, thì con hiểu cái "chơn tâm" này in như tự nhiên mà có; chớ không phải "nhơn duyên sanh", vì nó rời tất cả các vọng tưởng điên đảo, không sanh, không diệt. Cúi xin Phật từ bi chỉ dạy cho con ngộ được chơn tâm thường trụ này, mà không lạc vào thuyết "tự nhiên" của các tà đạo.</p>

      <section id="luoc-giai-7">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Cái chơn tâm này, nó tuyệt đối đãi, ngoài thị và phi. Nếu còn chấp có, không, thị và phi, nhơn duyên hay tự nhiên v.v... đều không trúng cả. Song chúng sanh vì cái mê chấp nhiều đời, cũng như cây chuối nhiều bẹ, lột hết bẹ này, thì nó bày ra bẹ khác. Phật vừa bác xong thị và phi, thì ông A-Nan liền chấp nhơn duyên và tự nhiên v.v... than ôi! Lưới mê nhiều đời chồng chập, thật khó trong một lúc vẫy vùng ra khỏi!</p>
      </section>
    </section>

    <section id="phat-bac-cai-chap-tam-tu-nhien-ma-co">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII.- PHẬT BÁC CÁI CHẤP "TÂM TỰ NHIÊN MÀ CÓ"</h3>
      <p>Phật dạy rằng: Ta đã dùng nhiều phương tiện và thành thật chỉ dạy cho tường tất như thế, mà ông cũng chưa hiểu ngộ, lại còn mê muội chấp là tự nhiên nữa.</p>
      <p>A-Nan, nếu thật tự nhiên, thì ông phải chỉ rõ cái "thấy" này, lấy gì làm cái thể tự nhiên của nó? Lấy cái "sáng" làm tự nhiên hay lấy cái "tối" làm tự nhiên? Lấy cái "trống không" làm tự nhiên hay lấy cái "ngăn bít" v.v... làm tự nhiên?</p>
      <p>A-Nan, nếu lấy cái "sáng" cho là tự nhiên cái thể của nó như vậy, thì khi tối lại, đáng lẽ ông không thấy được tối. Cho đến lấy cái "tối" v.v... làm thể tự nhiên của nó, thì khi sáng đến, cái thấy của ông phải mất, làm sao thấy được cái sáng v.v...</p>
    </section>

    <section id="a-nan-lai-nghi-tam-do-nhon-duyen-sanh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX.- A-NAN LẠI NGHI TÂM DO "NHƠN DUYÊN SANH"</h3>
      <p>A-Nan thưa: Bạch Thế Tôn, cái thấy này nếu không phải tự nhiên mà có, thì chắc do nhơn duyên sanh. Con hiểu như vậy chẳng biết có phải không? Xin Đức Thế Tôn từ bi chỉ dạy.</p>
    </section>

    <section id="phat-bac-cai-chap-nhon-duyen-sanh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">X.- PHẬT BÁC CÁI CHẤP "NHƠN DUYÊN SANH"</h3>
      <p>Phật bác rằng: - Ông nói "nhơn duyên sanh". Vậy nay ta hỏi ông: Cái thấy này là nhơn duyên cái sáng mà có, hay nhơn duyên cái tối mà có? Nhơn duyên cái trống không mà có, hay nhơn duyên cái ngăn bít v.v... mà có?</p>
      <p>A-Nan, nếu nhơn duyên cái sáng mà có, thì khi tối đến, ông phải không thấy được cái tối; còn nhơn duyên cái tối, cái trống, cái bít v.v... cũng vậy.</p>
    </section>

    <section id="phat-day-chan-tam-khong-the-suy-nghi-va-luan-ban">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XI.- PHẬT DẠY: CHƠN TÂM KHÔNG THỂ SUY NGHĨ VÀ LUẬN BÀN ĐƯỢC</h3>
      <p>Phật dạy: A-Nan! Ông phải biết: Cái thấy (tâm) này không phải "nhơn", không phải "duyên", không phải "tự nhiên", và cũng không phải "không tự nhiên", không cái "phi", không cái "bất phi", không cái "thị", không cái "phi thị", nó rời tất cả tướng, mà chính là tất cả pháp. Như thế thời ông làm sao để tâm suy nghĩ cho tới, dùng lời nói luận bàn cho kịp và gọi nó bằng thứ gì được. (ly ngôn thuyết tướng, ly tâm duyên tướng, ly danh tự tướng).</p>
      <p>Nếu ông để tâm suy nghĩ và dùng lời nói luận bàn, thì cũng như người quơ tay chụp bắt hư không; chỉ thêm mệt nhọc, chớ làm sao mà chụp bắt hư không cho được.</p>

      <section id="luoc-giai-11">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Đến chỗ cao siêu tuyệt diệu, thì không còn suy nghĩ, luận bàn được; nếu còn suy nghĩ luận bàn được thì không phải là cao siêu tuyệt diệu.</p>
        <p>Bởi thế nên Đức Thích Ca đóng cửa thất tại nước Ma-Kiệt, ông Duy-Ma-Cật ngậm miệng tại thành Tỳ-Da, tổ Đạt-Ma ngồi tại chùa Thiếu Lâm, day mặt vô vách chín năm, không nói một lời, đều vì cái lý cao siêu, không thể luận bàn được.</p>
      </section>
    </section>

    <section id="a-nan-tro-lai-nghi-nhon-duyen-sanh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XII.- A-NAN TRỞ LẠI NGHI "NHƠN DUYÊN SANH"</h3>
      <p>A-Nan thưa Phật: Bạch Thế Tôn! Cái "thấy" này nếu không phải "nhơn" không phải "duyên", tại sao Đức Thế Tôn thường cùng với các thầy Tỳ-kheo nói: "cái thấy phải đủ bốn duyên mới sanh"; như nhơn hư không, ánh sáng, tâm và con mắt mới sanh. Vậy nghĩa này thế nào?</p>
      <p>Phật dạy rằng: Này A-Nan, ta nói thuyết nhơn duyên, là đứng về phần sự tướng (hiện tượng), chỉ các pháp trong thế gian mà nói, chớ không phải chỉ cho lý tánh tuyệt đối (bản thể) vậy.</p>

      <section id="luoc-giai-12">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Về phương diện pháp tướng (mượn danh từ triết học nói cho dễ hiểu, gọi là phần hiện tượng) nói về "thức", thì Phật nói có căn, trần, thức và nhơn duyên v.v... Còn đứng về phương diện pháp tánh (mượn danh từ triết học nói cho dễ hiểu, gọi là phần bản thể) thì không còn danh tướng, nói năng khiếu gọi hay suy nghĩ được.</p>
        <p>Bởi thế nên trong kinh, Phật nói: "Đạo ta cao siêu không thể suy nghĩ và luận bàn được". Kinh này là nói về phần lý tánh tuyệt đối.</p>
      </section>
    </section>

    <section id="phat-gan-hoi-lai-cai-thay-de-chi-ro-chan-tam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XIII.- PHẬT GẠN HỎI LẠI CÁI "THẤY" ĐỂ CHỈ RÕ CHƠN TÂM</h3>
      <p>Phật hỏi: - Này A-Nan! Bây giờ ta hỏi ông: người đời thường nói "tôi thấy". Vậy thế nào là "thấy" và thế nào là không "thấy"?</p>
      <p>A-Nan thưa: Người đời nhơn có ánh sáng mới thấy được cái vật, thì gọi là "thấy"; còn không có ánh sáng, chẳng thấy các vật, thì bảo rằng "không thấy".</p>
      <p>Phật dạy: Nếu không có ánh sáng mà bảo là không thấy, thì khi tối đến đáng lẽ ông cũng không thấy được cái "tối"? Còn như ông thấy được cái "tối", thì khi đó chẳng qua không có ánh sáng mà thôi, chớ sao lại nói "không thấy"?</p>
      <p>Lại nữa, nếu khi tối ông không thấy được cái "sáng", mà ông cho là thấy, thì khi sáng ông không thấy được cái "tối", đáng lẽ cũng phải bảo là không thấy mới phải. Như vậy, thời "tối" và "sáng" cả hai đều phải bảo là "không thấy" hết.</p>
      <p>Bởi thế, ông nên biết: "tối" và "sáng" hai món trần tướng nó tự thay đổi với nhau, còn cái "thấy" của ông lúc nào cũng có. Vậy thì thấy "tối" và "sáng" đều gọi là thấy cả, tại sao khi thấy tối, ông nói "không thấy"?</p>
    </section>

    <section id="phat-chi-thay-cai-khong-phai-vong-song-chua-phai-chan-tam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XIV.- PHẬT CHỈ THẤY CÁI KHÔNG PHẢI VỌNG, SONG CHƯA PHẢI LÀ CHƠN TÂM</h3>
      <p>(Đoạn này nguyên ở trước, nay dịch giả đem lại đây cho thuận nghĩa).</p>
      <p>Phật dạy A-Nan rằng: - Cái "thấy" của ông đó, không phải là vọng, song chưa phải là "chơn tâm". Nó cũng như mặt trăng thứ hai (do lòa con mắt mà có) tuy không phải bóng mặt trăng dưới nước, nhưng chưa phải là mặt trăng chánh.</p>

      <section id="luoc-giai-14-a">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Mặt trăng chánh là dụ cho chơn tâm, mặt trăng thứ hai là dụ cho cái thấy, nghe v.v... các giác quan về phần trực giác. Bóng mặt trăng là dụ cho vọng tưởng phân biệt.</p>
        <p>Đại ý đoạn này nói cái "thấy" không phải vọng tâm, nhưng cũng chưa phải là chơn tâm, nghĩa là nó gần với chơn tâm mà thôi. Cũng như mặt trăng thứ hai do lòa con mắt mà có; nó không phải bóng mặt trăng dưới nước, nhưng cũng chưa phải là mặt trăng chánh.</p>
      </section>

      <p>Phật dạy: A-Nan, ông phải biết: Khi ông thấy sáng, thì cái "thấy" của ông không phải là cái "sáng"; khi ông thấy tối, cái "thấy" của ông không phải là cái "tối"; khi ông thấy trống không, cái thấy của ông không phải là cái "trống không"; khi ông thấy ngăn bít, cái "thấy" của ông không phải là cái "ngăn bít".</p>

      <section id="luoc-giai-14-b">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Nói cái "thấy" chớ kỳ thực là chỉ chung cho cả cái "nghe, hay, biết". Nói "sáng, tối, trống, bít" là chỉ chung cho các cảnh vật.</p>
        <p>Đại ý bài này nói: Khi thấy các cảnh vật, thì cái "thấy" không phải là cảnh vật.</p>
      </section>
    </section>

    <section id="phat-chi-chan-tam-lan-thu-sau">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">XV.- PHẬT CHỈ CHƠN TÂM LẦN THỨ SÁU</h3>
      <p>Phật dạy: - Ông đã hiểu rõ bốn nghĩa này rồi; ông nên hiểu thêm lên một từng nữa: Khi chơn tâm đã khởi ra cái "thấy" (cái giác quan), thì cái "thấy" không phải là "chơn tâm"; cái "thấy" còn cách biệt với chơn tâm (vì còn một lớp mê), cái "thấy" không thể bì kịp với "Chơn tâm" (đoạn này Phật mới chỉ chính xác cái chơn tâm).</p>

      <section id="luoc-giai-15">
        <h4 class="text-lg font-semibold">LƯỢC GIẢI</h4>
        <p>Mượn danh từ triết học nói cho dễ hiểu: khi bản thể (tâm) khởi ra hiện tượng (các giác quan) thì hiện tượng không phải là bản thể, hiện tượng còn cách biệt với bản thể, hiện tượng không thể bì kịp bản thể. Cũng như khi nước đã biến thành sóng, thì sóng không phải hoàn toàn là nước, sóng còn xa biệt với nước (vì bị gió xao động), sóng không thể bì kịp với nước.</p>
        <p>Đành rằng "tâm" cùng với cái "thấy" v.v... không hai, nhưng vì mê nên tâm biến ra các giác quan thấy nghe hay biết. Lúc bấy giờ cái thấy nghe hay biết, không phải là chơn tâm. Ngộ rồi thì cái thấy nghe hay biết mới gọi là "chơn tâm". Song khi chưa ngộ thì không thể nói cái thấy, nghe v.v... các giác quan là chơn tâm được.</p>
        <p>Cũng như nước với sóng không khác, nhưng vì gió động nên nước biến thành sóng; lúc bấy giờ sóng không phải là nước, nước cách biệt với sóng. Đến khi hết gió xao động thì sóng trở lại thành nước. Nhưng khi còn động thì không thể nói sóng đó là nước.</p>
      </section>

      <p>Như thế thời ông làm sao lại nói là "nhơn duyên, tự nhiên, hòa hợp, và phi hòa hợp" được. Các ông là hàng Thanh văn, trí thức hẹp hòi, không thông hiểu được thật tướng (chơn tâm). Ta đã chỉ dạy nhiều lần rồi, vậy các ông nên khôn khéo suy nghĩ và cố gắng tiến lên tu hành, chớ nên giải đãi trên con đường Bồ đề.</p>
    </section>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo lời thưa của A-Nan ở phần I, nếu cái "thấy" là tâm chân thật của ông, thì ông thắc mắc điều gì về thân tâm hiện tại của mình?',
    options: {
      a: 'Thân tâm hiện tại là chủ thể điều khiển cái thấy.',
      b: 'Thân tâm hiện tại chỉ là hư huyễn không có thật.',
      c: 'Cái thấy và thân tâm vốn là một không thể tách rời.',
      d: 'Nếu cái thấy là tâm, thì thân tâm hiện nay đây là ai?',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Lựa chọn này không được đề cập trong lời thưa của A-Nan.',
      b: 'Sai. Đây không phải là nội dung thắc mắc của A-Nan trong phần này.',
      c: 'Sai. A-Nan không khẳng định điều này trong câu hỏi của mình.',
      d: 'Đúng. A-Nan đã thắc mắc rằng nếu cái thấy thật là tâm mình thì thân tâm hiện tại của ông là ai.',
    },
  },
  {
    question: 'Tại sao Phật khẳng định cái "thấy" không thể chỉ ra được như các vật thể (như rừng cây, mặt trời)?',
    options: {
      a: 'Vì cái thấy nằm bên ngoài tầm mắt của con người.',
      b: 'Vì con người chưa đủ định lực để nhìn thấy nó.',
      c: 'Vì cái thấy không có hình tướng nhất định.',
      d: 'Vì cái thấy là một phần của hư không.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Lập luận của Phật không dựa trên vị trí của cái thấy so với tầm mắt.',
      b: 'Sai. Định lực không phải là lý do được Phật nhắc đến ở đây.',
      c: 'Đúng. Các cảnh vật có hình tướng nên có thể chỉ ra được, còn cái thấy không phải hình tướng nên không thể chỉ ra.',
      d: 'Sai. Phật còn hỏi ngược lại nếu hư không là cái thấy thì cái gì là hư không.',
    },
  },
  {
    question: 'Trong ví dụ về vàng và đồ trang sức, "vàng" tượng trưng cho điều gì?',
    options: {
      a: 'Các pháp hữu vi.',
      b: 'Vọng tưởng phân biệt.',
      c: 'Chơn tâm (bản thể).',
      d: 'Thân thể vật lý.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Các đồ trang sức mới tượng trưng cho các pháp.',
      b: 'Sai. Vàng không phải là ví dụ cho vọng tưởng.',
      c: 'Đúng. Vàng tượng trưng cho chơn tâm (bản thể) đã sinh ra các pháp.',
      d: 'Sai. Thân thể vật lý không phải ý nghĩa của hình ảnh này.',
    },
  },
  {
    question: 'Tại sao Ngài Văn Thù khẳng định trong chơn tâm không có cái "phải" (thị) và "không phải" (phi thị)?',
    options: {
      a: 'Vì chơn tâm nằm ngoài vòng đối đãi nhị nguyên.',
      b: 'Vì ngôn ngữ con người quá giới hạn.',
      c: 'Vì mọi sự vật đều là giả tạm.',
      d: 'Vì chơn tâm luôn thay đổi liên tục.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Chơn tâm không hai, tuyệt đối đãi, rời sự đối đãi thị phi.',
      b: 'Sai. Dù ngôn ngữ có giới hạn, lý do gốc là bản chất của chơn tâm.',
      c: 'Sai. Đây không phải lý do trực tiếp cho tính phi nhị nguyên.',
      d: 'Sai. Chơn tâm là thường trụ, không đổi dời.',
    },
  },
  {
    question: 'Hình ảnh "mặt trăng thứ hai" (do lòa mắt) được Phật dùng để ví dụ cho điều gì?',
    options: {
      a: 'Chơn tâm thuần khiết.',
      b: 'Cái thấy (giác quan) do vọng động mà có.',
      c: 'Sự sáng suốt của trí tuệ.',
      d: 'Bóng của mặt trăng dưới nước.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Mặt trăng chánh mới là dụ cho chơn tâm.',
      b: 'Đúng. Mặt trăng thứ hai là ví dụ cho cái thấy, nghe của giác quan do vọng động.',
      c: 'Sai. Hình ảnh này nói về mê lầm, không phải trí tuệ.',
      d: 'Sai. Bóng mặt trăng dưới nước là ví dụ cho vọng tưởng phân biệt.',
    },
  },
  {
    question: 'Tại sao Phật bác bỏ quan niệm cái thấy là "tự nhiên"?',
    options: {
      a: 'Vì cái thấy luôn thay đổi theo nhân duyên.',
      b: 'Vì nếu là tự nhiên thì nó không cần sáng hay tối để biểu hiện.',
      c: 'Vì nếu lấy sáng làm tự nhiên thì khi tối đến cái thấy phải mất.',
      d: 'Vì thuyết tự nhiên là của tà đạo nên luôn sai.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Cái thấy cũng không phải do nhân duyên sanh ra.',
      b: 'Sai. Đây không phải cách lập luận trực tiếp trong đoạn kinh.',
      c: 'Đúng. Nếu lấy sáng làm thể tự nhiên thì khi tối đến không thể thấy tối.',
      d: 'Sai. Phật dùng lập luận logic để bác bỏ.',
    },
  },
  {
    question: 'Theo văn bản, việc Phật nói về "nhân duyên" trong các bài giảng trước đây nhằm mục đích gì?',
    options: {
      a: 'Giải thích phần sự tướng (hiện tượng) của các pháp thế gian.',
      b: 'Chứng minh cái thấy do mắt và ánh sáng tạo ra.',
      c: 'Chỉ rõ bản thể tuyệt đối của tâm.',
      d: 'Bác bỏ thuyết hư vô của ngoại đạo.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Nhân duyên được nói trên bình diện hiện tượng của các pháp thế gian.',
      b: 'Sai. Nhân duyên không dùng để xác lập bản thể của cái thấy ở đây.',
      c: 'Sai. Bản thể tuyệt đối vượt ngoài khái niệm nhân duyên.',
      d: 'Sai. Không phải trọng tâm của đoạn này.',
    },
  },
  {
    question: 'Phật dùng lập luận nào để chứng minh cái "thấy" vẫn tồn tại ngay cả khi không có ánh sáng?',
    options: {
      a: 'Cái thấy có thể nhìn xuyên thấu bóng tối.',
      b: 'Vì nếu không thấy thì làm sao biết là "tối".',
      c: 'Cái thấy là năng lực nội tại không cần đối tượng.',
      d: 'Bóng tối chính là một hình thức khác của ánh sáng.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Không phải luận điểm của Phật trong đoạn này.',
      b: 'Đúng. Nếu bảo không thấy trong tối thì cũng không thể biết cái tối.',
      c: 'Sai. Lập luận ở đây vẫn dựa trên khả năng nhận biết đối tượng là tối.',
      d: 'Sai. Sáng và tối là hai trần tướng thay đổi nhau.',
    },
  },
  {
    question: 'Sự khác biệt lớn nhất giữa "cái thấy" (giác quan) và "chơn tâm" theo phần XV là gì?',
    options: {
      a: 'Cái thấy là giả, chơn tâm là thật.',
      b: 'Cái thấy nằm ở mắt, chơn tâm nằm ở não.',
      c: 'Cái thấy là hiện tượng khởi từ chơn tâm nhưng còn bị che lấp bởi mê lầm.',
      d: 'Không có sự khác biệt nào giữa chúng.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Phật dạy cái thấy không phải vọng, nhưng chưa phải chơn tâm.',
      b: 'Sai. Không có mô tả định vị não bộ trong nội dung này.',
      c: 'Đúng. Cái thấy còn cách biệt chơn tâm vì còn một lớp mê.',
      d: 'Sai. Có khác biệt rõ khi chưa giác ngộ.',
    },
  },
  {
    question: 'Cụm từ "Ly ngôn thuyết tướng, ly tâm duyên tướng, ly danh tự tướng" mô tả đặc tính nào của chơn tâm?',
    options: {
      a: 'Sự phụ thuộc của tâm vào thế giới bên ngoài.',
      b: 'Không thể dùng lời nói, suy tư hay tên gọi để diễn tả trọn vẹn.',
      c: 'Sự phức tạp của các bộ phận tạo nên tâm trí.',
      d: 'Tính chất có thể đo lường bằng khoa học.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Chơn tâm không phụ thuộc vào ngoại cảnh.',
      b: 'Đúng. Chơn tâm vượt ngoài khả năng diễn tả của ngôn ngữ, tư duy và danh tự.',
      c: 'Sai. Chơn tâm không phải cấu trúc bộ phận.',
      d: 'Sai. Chơn tâm vượt ngoài phạm vi đo lường luận bàn.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-5-a-nan-nghi-neu-cai-thay-la-minh-thi-tam-nay-la-ai',
  slug: 'bai-thu-5-a-nan-nghi-neu-cai-thay-la-minh-thi-tam-nay-la-ai',
  title: 'Bài Thứ 5 - A Nan nghi: Nếu “cái thấy” là mình, thì tâm này là ai?',
  type: 'article',
  status: 'published',
  order: 6,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-5-a-nan-nghi-neu-cai-thay-la-minh-thi-tam-nay-la-ai/Ch%C3%A2n_T%C3%A2m_qua_C%C3%A1i_Th%E1%BA%A5y.png',
      readingContent,
      tableOfContents: [
        { id: 'a-nan-nghi-neu-cai-thay-la-minh-thi-than-tam-nay-la-ai-phan-1', label: 'I. A-Nan nghi: Nếu cái "thấy" là mình thì thân tâm này là ai?' },
        { id: 'cai-thay-roi-tat-ca-hinh-tuong', label: 'II. Cái thấy (tâm) rời tất cả hình tướng', indent: 1 },
        { id: 'luoc-giai-2', label: 'Lược giải', indent: 2 },
        { id: 'cai-thay-tuc-tat-ca-phap', label: 'III. Cái thấy (tâm) tức tất cả pháp', indent: 1 },
        { id: 'luoc-giai-3', label: 'Lược giải', indent: 2 },
        { id: 'phat-tran-tinh-dai-chung', label: 'IV. Phật trấn tĩnh đại chúng', indent: 1 },
        { id: 'ngai-van-thu-dung-len-thua-hoi', label: 'V. Ngài Văn Thù đứng lên thưa hỏi', indent: 1 },
        { id: 'luoc-giai-5', label: 'Lược giải', indent: 2 },
        { id: 'phat-day-cai-thay-khong-co-thi-phi-thi', label: 'VI. Cái "thấy" không có "phải" và "không phải"', indent: 1 },
        { id: 'luoc-giai-6-a', label: 'Lược giải', indent: 2 },
        { id: 'luoc-giai-6-b', label: 'Lược giải', indent: 2 },
        { id: 'a-nan-nghi-chan-tam-dong-voi-thuyet-tu-nhien', label: 'VII. A-Nan nghi chơn tâm đồng với thuyết tự nhiên', indent: 1 },
        { id: 'luoc-giai-7', label: 'Lược giải', indent: 2 },
        { id: 'phat-bac-cai-chap-tam-tu-nhien-ma-co', label: 'VIII. Phật bác cái chấp tâm tự nhiên mà có', indent: 1 },
        { id: 'a-nan-lai-nghi-tam-do-nhon-duyen-sanh', label: 'IX. A-Nan lại nghi tâm do nhơn duyên sanh', indent: 1 },
        { id: 'phat-bac-cai-chap-nhon-duyen-sanh', label: 'X. Phật bác cái chấp nhơn duyên sanh', indent: 1 },
        { id: 'phat-day-chan-tam-khong-the-suy-nghi-va-luan-ban', label: 'XI. Phật dạy: Chơn tâm không thể suy nghĩ và luận bàn', indent: 1 },
        { id: 'luoc-giai-11', label: 'Lược giải', indent: 2 },
        { id: 'a-nan-tro-lai-nghi-nhon-duyen-sanh', label: 'XII. A-Nan trở lại nghi nhơn duyên sanh', indent: 1 },
        { id: 'luoc-giai-12', label: 'Lược giải', indent: 2 },
        { id: 'phat-gan-hoi-lai-cai-thay-de-chi-ro-chan-tam', label: 'XIII. Phật gạn hỏi lại cái "thấy" để chỉ rõ chơn tâm', indent: 1 },
        { id: 'phat-chi-thay-cai-khong-phai-vong-song-chua-phai-chan-tam', label: 'XIV. Phật chỉ thấy cái không phải vọng, song chưa phải là chơn tâm', indent: 1 },
        { id: 'luoc-giai-14-a', label: 'Lược giải', indent: 2 },
        { id: 'luoc-giai-14-b', label: 'Lược giải', indent: 2 },
        { id: 'phat-chi-chan-tam-lan-thu-sau', label: 'XV. Phật chỉ chơn tâm lần thứ sáu', indent: 1 },
        { id: 'luoc-giai-15', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-5-a-nan-nghi-neu-cai-thay-la-minh-thi-tam-nay-la-ai/Finding_the_True_Mind.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/g_6a-wMwU-Y',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1C3NagNBpodvxaF2CaBpQe?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - A Nan nghi: Nếu “cái thấy” là mình, thì tâm này là ai?',
    passPercentage: 70,
    questions,
  },
}

export default lesson
