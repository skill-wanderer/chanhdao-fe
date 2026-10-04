import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div class="mb-8">
      <h2 id="duyen-khoi-va-dai-chung-phap-hoi" class="mt-0 mb-2 text-3xl font-bold text-primary-700 dark:text-primary-300">2.2. Duyên khởi và đại chúng pháp hội</h2>
    </div>

    <div class="mb-8">
      <h3 id="chanh-van" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chánh văn:</h3>
    <p>Tôi nghe như vầy: Một thuở nọ Đức Phật ở tại mảnh vườn rừng của Kỳ Thọ - Cấp Cô Độc thuộc nước Xá-Vệ, cùng với một nghìn hai trăm năm mươi vị Tỳ-kheo lớn đều đến hội họp. Quý thầy đều là bậc A-la-hán lớn mà mọi người đều quen biết như: Trưởng lão Xá-Lợi-Phất, Mục-Kiền-Liên, Ca-Diếp, Ca-Chiên-Diên, Câu-Hy-La, Ly-Bà-Đa, Châu-Lợi-Bàn-Đà-Già, Nan-Đà, A-Nan-Đà, La-Hầu-La, Kiều-Phạm-Ba-Đề, Tân-Đầu-Lô-Phả-La-Đọa, Ca-Lưu-Đà-Di, Kiếp-Tân-Na, Bạc-Câu-La, A-Nậu-Lâu-Đà, hết thảy những vị đệ tử lớn như thế. Và hàng Bồ-tát lớn thì có: Văn-Thù-Sư-Lợi Pháp-Vương-Tử, A-Dật-Đa, Càn-Đà-Ha-Đề, Thường-Tinh-Tấn, cùng với nhiều vị Bồ-tát lớn như thế, cùng với vô lượng chư Thiên như: Thích-Đề-Hoàn-Nhơn... v.v... với đại chúng cùng đến dự hội.</p>

    </div>

    <div class="mb-8">
      <h3 id="giai-thich-tu-ngu" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Giải thích từ ngữ:</h3>

    <p><strong>Tôi nghe:</strong> Lời của ngài A-nan khi trình bày về kinh do nghe Đức Phật nói (người thuyết trình).</p>
    <p><strong>Một thuở nọ:</strong> Là nói về thời gian Đức Phật nói kinh (Thời gian nói kinh).</p>
    <p><strong>Mảnh vườn rừng của Kỳ Đà và Cấp Cô Độc thuộc nước Xá-Vệ:</strong> Mảnh vườn này, cây thì do Thái tử Kỳ Đà cúng, còn đất thì do Cấp Cô Độc bỏ vàng ra mua lại của Kỳ Đà, tại nước Xá-Vệ (Không gian Đức Phật nói kinh).</p>

    <p><strong>Tỳ-kheo lớn:</strong> “Đại Tỳ-kheo” là người xuất gia, đã được thọ giới Cụ Túc. Tỳ-kheo là dịch âm từ tiếng Phạn là Bhikkhu. Tỳ-kheo có 3 nghĩa:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>a) Khất sĩ: Là người đi khất thực và tùy duyên mà giáo hóa chúng sinh.</li>
      <li>b) Phá ác: Dùng trí tuệ chân chính để phá trừ mọi điều xấu ác, mọi phiền não, chẳng sa đọa vào vòng ái kiến.</li>
      <li>c) Bố ma: Phát tâm thọ giới Tỳ-kheo, phép Yết-ma đã thành tựu, tức thời loài ma trông thấy phải sợ hãi.</li>
    </ul>

    <p><strong>Tăng (hay Tăng-già):</strong> Là dịch âm từ tiếng Phạn Saṅgha, dịch nghĩa ra chữ Hán là Hòa Hợp Chúng. Chứng được lý tánh giải thoát, gọi là Lý hòa. Thân hòa, Miệng hòa, Ý hòa, Kiến hòa, Lợi hòa, Giới hòa. Lục Hòa thì mới được gọi là Tăng-già, tức Hòa Hợp Chúng.</p>
    <p>Tăng-già hay Tăng đoàn (Saṅgha) là những người từ bỏ gia đình thế gian, sống đời sống độc thân, phát nguyện sống trong tinh thần hòa hợp và thanh tịnh, để hỗ trợ cho nhau thực hiện đời sống giải thoát và lý tưởng giác ngộ. Một Tăng đoàn tối thiểu phải gồm bốn vị Tỳ-kheo, Tỳ-kheo-ni trở lên, dưới bốn vị không thể gọi là Tăng đoàn hoặc ba vị Tỳ-kheo và một vị Sa-di cũng không thể gọi là Tăng đoàn được. Tăng-già là một trong ba ngôi báu, biểu hiện sự có mặt của Phật giáo và là những người trực tiếp thay Đức Phật truyền giới pháp cho cả Tăng lẫn cư sĩ Phật tử tại gia. Năm vị Tôn giả, được biết đến là năm anh em Kiều-trần-như là Tăng đoàn đầu tiên của Phật giáo.</p>
    <p>Tăng-già (Saṅgha) thời Đức Phật còn ở đời gồm có 1.250 vị, thì ba anh em trưởng lão Ca-diếp với học trò của ba vị ấy cộng lại được 1.000 vị. Thầy Xá-lợi-phất và Mục-kiền-liên với học trò của hai vị ấy cộng lại được 200 vị. Nhóm của Gia-xá-tử có 50 vị; đều là những người khi Phật mới thành đạo được độ, vì cảm nhận thâm ân của Phật nên thường theo Phật.</p>

    <p><strong>A-la-hán:</strong> Dịch âm từ tiếng Phạn Arhat, là bậc mà trong tâm đã sạch hết phiền não (sát tặc), mãi ở Niết-bàn tịch tịnh (bất sanh), nên xứng đáng nhận sự cúng dường của trời và loài người (ứng cúng). Lại có 3 bậc A-la-hán khác nhau:</p>
    <ul class="list-none space-y-2 pl-0">
      <li>Tuệ giải thoát (1).</li>
      <li>Câu giải thoát (2).</li>
      <li>Vô nghi giải thoát (3).</li>
    </ul>
    <p>Các vị ở đây là “vô nghi giải thoát”, cho nên gọi là Đại A-la-hán. Những vị ấy vốn là bậc Pháp Thân Đại Sĩ (4) thị hiện ra làm Thanh Văn để chứng thực phép tu Tịnh Độ là một phép không thể nghĩ bàn (bất khả tư nghì), cho nên gọi là Đại A-la-hán. Các vị theo Phật đi thuyết pháp, gọi là “chuyển pháp luân” (lăn bánh xe pháp), làm lợi ích khắp cõi trời và người, cho nên đại chúng đều quen biết.</p>

    <p><strong>Trưởng lão:</strong> Là vị tuổi cao đức trọng, mọi người đều tôn quý nên cũng gọi là Tôn Giả, gồm:</p>
    <p>Ngài Xá-Lợi-Phất, tiếng Phạn là Śāriputra, chữ Hán là Thu Tử, trong hàng Thanh Văn, Ngài là bậc Trí Tuệ đệ nhất.</p>
    <p>Ngài Ma-ha Mục-Kiền-Liên, tên tiếng Phạn là Mahā-Maudgalyāyana, dịch chữ Hán là Đại Thái Thúc Thị, là bậc có phép thần thông đệ nhất.</p>
    <p>Ngài Ma-ha Ca-Diếp, tiếng Phạn là Mahā-Kāśyapa, dịch chữ Hán là Đại Ẩm Quang, thân Ngài có ánh sáng vàng, được Phật truyền tâm ấn cho làm Tổ thứ nhất, Ngài là bậc tu hạnh Đầu Đà đệ nhất.</p>
    <p>Ngài Ma-ha Ca-Chiên-Diên, tiếng Phạn là Mahā-Kātyāyana, chữ Hán là Đại Văn Sức, là dòng Bà-la-môn, là bậc có tài nghị luận giỏi đệ nhất.</p>
    <p>Ngài Ma-ha Câu-Si-La, tiếng Phạn là Mahā-Kauṣṭhila, chữ Hán là Đại Tất, là bậc có tài trả lời các câu hỏi hay đệ nhất.</p>
    <p>Ngài Ly-Bà-Đa, tiếng Phạn là Revata, chữ Hán là Tinh Tú, là bậc không điên đảo rối loạn đệ nhất (tức giỏi Thiền Định).</p>
    <p>Ngài Châu-Lợi-Bàn-Đà-Già, tiếng Phạn là Cūḍapanthaka (hoặc Kṣullapanthaka), chữ Hán là Kế Đạo, là người rất đần độn, chỉ nhớ nghĩa được một bài kệ mà thành người có tài biện luận giỏi vô cùng, nên Ngài là bậc nhớ nghĩa hay đệ nhất.</p>
    <p>Ngài Nan-Đà, tiếng Phạn là Nanda, chữ Hán là Hoan Hỷ hay Gia Lạc, là em ruột của Phật, Ngài là bậc có uy nghi, dung mạo đệ nhất.</p>
    <p>Ngài A-Nan-Đà, tiếng Phạn là Ānanda, chữ Hán đọc là Khánh Hỷ, là em con chú của Phật, lại được làm Thị Giả đứng hầu Phật, Ngài là bậc được nghe nhiều đệ nhất.</p>
    <p>Ngài La-Hầu-La, tiếng Phạn là Rāhula, chữ Hán là Phú Chướng, là con của Tất-đạt-đa, Ngài có đạo hạnh bí mật đệ nhất.</p>
    <p>Ngài Kiều-Phạm-Ba-Đề, tiếng Phạn là Gavāṃpati, chữ Hán là Ngưu Tư, vì có tội ác khẩu từ kiếp trước nên phải chịu quả báo còn sót lại: mồm nhai như con bò, Ngài là bậc được hưởng cúng dường ở cõi Thiên bậc nhất.</p>
    <p>Ngài Tân-Đầu-Lô-Phả-La-Đọa, tiếng Phạn là Piṇḍola-Bhāradvāja, chữ Hán là Bất Động và Lợi Căn, Ngài ở lại thế gian rất lâu dài để hưởng cúng dường ở đời mạt thế. Ngài là bậc phước điền đệ nhất, giống như một thửa ruộng tốt để người đời trồng cây phúc.</p>
    <p>Ngài Ca-Lưu-Đà-Di, tiếng Phạn là Kāludāyin, chữ Hán là Hắc Quang, Ngài là sứ giả của Phật, là bậc giáo hóa được nhiều người đệ nhất.</p>
    <p>Ngài Ma-ha Kiếp-Tân-Na, tiếng Phạn là Mahā-Kapphina, chữ Hán là Phòng Tú, là bậc biết xem sao đệ nhất.</p>
    <p>Ngài Bạc-Câu-La, tiếng Phạn là Vakkula, chữ Hán là Thiện Dung, Ngài là bậc có thọ mệnh sống lâu đệ nhất.</p>
    <p>Ngài A-Nậu-Lâu-Đà, tiếng Phạn là Aniruddha, chữ Hán là Vô Bần, Ngài cũng là em con chú của Phật. Ngài là bậc có Thiên Nhãn, con mắt trông xa đệ nhất.</p>
    <p>Các Ngài thường theo Phật luôn luôn, cho nên gọi là Thường Tùy Chúng. Các Ngài vốn là bậc Pháp Thân Đại Sĩ, là bậc Bồ-tát đã chứng được Pháp Thân, mà thị hiện ra làm Thanh Văn, cho nên lại gọi các Ngài là Ảnh Hưởng Chúng, là các vị Tỳ-kheo có nhiều ảnh hưởng cho đạo Phật.</p>
    <p>Nay các Ngài được nghe phép tu Tịnh Độ là phép thu nhận được vô lượng công đức, các Ngài đều được lợi ích là: Phật đã bố thí cho các Ngài được hiểu nghĩa đệ nhất trong giáo lý của Phật. Các Ngài làm cho đường đạo tăng lên, đường đời giảm bớt, cho nên các Ngài lại được gọi là Đương Cơ Chúng, là các vị Tỳ-kheo gánh vác nổi việc Phật.</p>

    <p><strong>Bồ-tát lớn:</strong> Chữ Bồ-tát Ma-ha-tát là dịch âm từ tiếng Phạn là Bodhisattva Mahāsattva (Bồ-đề-tát-đỏa Ma-ha-tát-đỏa), dịch nghĩa ra chữ Hán là “đại đạo tâm thành tựu hữu tình” nghĩa là có tâm đạo lớn làm cho tình thức được thành tựu. Đó là một danh hiệu của một người đã vận dụng được cả hai tâm: tình thương và trí tuệ, làm lợi lạc cả mình và người.</p>

    <p><strong>Ngài Văn-Thù-Sư-Lợi:</strong> Nguyên tiếng Phạn là Mañjuśrī, chữ Hán là Diệu Đức, Diệu Cát Tường. Ngài vốn nối nghiệp của Phật nên được gọi là Pháp Vương Tử (con của Đức Pháp Vương); còn Đức Phật là Pháp Vương (vua tạo ra các pháp). Trong hàng Bồ-tát Tăng, Ngài là bậc có trí tuệ đệ nhất, nên cũng biểu trưng cho Trí căn bản, tức từ pháp hóa sinh. Bồ-tát Văn-Thù biểu trưng cho trí tuệ nên đứng hầu bên phải Đức Thích-ca. Bồ-tát Phổ Hiền biểu trưng cho từ bi nên đứng bên trái Đức Thích-ca. Bi và Trí là diệu dụng của chân tâm, hay tự tánh Di Đà nên nói đến pháp môn Tịnh Độ này, thì Ngài được đứng đầu, tức dụ cho trí giác ngộ.</p>

    <p><strong>Ngài A-Dật-Đa:</strong> Tiếng Phạn là Ajita, chữ Hán là Vô Năng Thắng, là tên riêng của Bồ-tát Di-Lặc, tiếng Ấn Độ đọc là Maitreya. Ngài là bậc sẽ được thành Phật về tương lai, ngụ ý là phải chuyển thức thành trí thì Phật tánh mới hiển lộ; mà Di-Lặc là biểu trưng cho thức. Ngài lấy việc làm cho tâm địa mình trở nên trang nghiêm trong sạch bằng cách chuyển thức thành trí, cho nên Ngài đứng thứ nhì.</p>

    <p><strong>Ngài Càn-Đà-Ha-Đề:</strong> Tiếng Phạn là Gandhahastin, dịch sang nghĩa chữ Hán là Bất Hưu Tức, là “chẳng ngừng nghỉ”. Vì Ngài là người hành pháp tương tục (bám sát công phu không gián đoạn) chẳng hề ngừng nghỉ; dụ cho niệm tự tánh tương tục đến lúc đủ lực chuyển y (vô công dụng hạnh) mới đạt thành nhất tâm bất loạn; nên gọi là Bất Hưu Tức nên đứng thứ ba.</p>

    <p><strong>Ngài Thường-Tinh-Tấn:</strong> Là một vị Bồ-tát thường làm lợi lạc cho cả mình và người mà không hề mỏi mệt, bởi chính nhờ vào sự tinh tấn niệm danh tự tánh Di Đà, mà tâm không còn điên đảo và vượt qua khỏi sinh tử, nên đứng thứ tư.</p>
    <p>Các vị này đều là các vị Bồ-tát đã chứng quả vị Phật thuộc về quá khứ, nhưng nay thị hiện làm Bồ-tát để trợ hóa giúp Đức Phật Thích-ca. Nói cách khác, đây là diệu dụng phương tiện để Đức Thế Tôn chỉ dạy pháp tu Tịnh độ, bằng chuyển thức thành trí, tức cất hết sở niệm. Cùng một ý này, ở kinh Pháp Bảo Đàn, Tổ Huệ Năng dạy: “Vô niệm niệm tức chánh, hữu niệm niệm thành tà”, tức cất hết mọi sở niệm nên gọi là chánh niệm, còn nếu ở nơi vọng niệm nên gọi là niệm lệch ra bên ngoài vậy.</p>

    <p><strong>Thích-Đề-Hoàn-Nhơn:</strong> Nguyên tiếng Phạn là Śakra Devānām Indra, dịch sang chữ Hán là Năng Vi Chúa hay Năng Thiên Chúa, tức là một vị Thiên vương ở cõi trời Đao Lợi, ở đỉnh núi Tu-di, cao nhất thế giới.</p>
    <p>Chữ Đẳng là kiêm cả hạ đẳng và thượng đẳng tức là các vị vua chúa ở cõi trời dưới vua Đế Thích và các vị ở cõi trời trên vua Đế Thích. Dưới vua Đế Thích có bốn vị Thiên vương ở lưng chừng núi Tu-di. Trên vua Đế Thích ở hư không, còn có vô số các đấng ở các cõi trời khác, tức là 4 cõi Dục Giới: Dạ Ma, Đâu Suất, Hóa Lạc và Tha Hóa, 18 cõi trời Sắc Giới và 4 cõi Vô Sắc Giới (5).</p>

    <p><strong>Đại chúng câu:</strong> Là tóm thâu tất cả các giới ở khắp mười phương: cõi trời, cõi người, tám bộ quỷ thần, A-tu-la, nhân, phi nhân v.v... và trên là Thanh Văn, Duyên Giác, Bồ-tát và Phật; không một ai là không đến dự Hội nói pháp này, không một người nào là không được thu hút vào trong pháp môn Tịnh Độ; tức ám chỉ cho không một vọng tưởng nào mà không bị hóa giải mỗi khi niệm tự tánh Di Đà đạt đến nhất tâm (Diệt thọ tưởng định). Đó cũng dụ cho chân tâm trùm khắp pháp giới, hay trùm khắp mười loại pháp giới là: Địa ngục, ngạ quỷ, súc sinh, A-tu-la, người, trời, Thanh Văn, Duyên Giác, Bồ-tát và Phật (6).</p>

    </div>

    <div class="mb-8">
      <h3 id="luoc-giai" class="mt-0 mb-4 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Lược giải:</h3>
    <p>Mở đầu kinh văn là giới thiệu người thuyết trình lại kinh văn mà Đức Phật đã nói, đó là ngài A-nan. Ngài A-nan là vị thị giả luôn luôn hầu cận Đức Phật, trong lúc Ngài còn ở đời. Vì vậy cho nên, nghe trực tiếp từ kim khẩu của Đức Phật, không ai hơn ngài A-nan. Chủ thuyết giảng kinh này là Đức Phật (pháp chủ), mà người trình bày lại kinh này là ngài A-nan.</p>
    <p>Nói về thời gian mà Đức Phật thuyết kinh thì ngài A-nan nói “một thuở nọ”, chứ không nói ngày tháng năm như bây giờ. Đức Phật thuyết tại mảnh vườn rừng do Thái tử Kỳ Đà cùng với thí chủ Cấp Cô Độc cúng cho Đức Phật và giáo đoàn, thuộc nước Xá-Vệ. Đó là trình bày về không gian mà Đức Phật nói kinh.</p>
    <p>Thành phần tham dự pháp hội này thì gồm: Quý thầy Tỳ-kheo lớn như: Xá-Lợi-Phất, Mục-Kiền-Liên, Ca-Diếp, Ca-Chiên-Diên, Câu-Hy-La, Ly-Bà-Đa, Châu-Lợi-Bàn-Đà-Già, Nan-Đà, A-Nan-Đà, La-Hầu-La, Kiều-Phạm-Ba-Đề, Tân-Đầu-Lô-Phả-La-Đọa, Ca-Lưu-Đà-Di, Kiếp-Tân-Na, Bạc-Câu-La, A-Nậu-Lâu-Đà, những vị đệ tử lớn như thế.</p>
    <p>Ở đây chỉ cho hàng Thanh Văn, bước đầu thực hành 37 phẩm trợ đạo, nay cũng hướng đến Tịnh độ bằng niệm danh tự tánh Di Đà để đạt thành quả vị Phật. Đây là những vị đệ tử xuất gia của Đức Thế Tôn hiện thời ở Ấn Độ.</p>

    <p>Còn hàng Bồ-tát lớn thì có Đại trí Văn-Thù-Sư-Lợi. Ngài Văn-Thù-Sư-Lợi được mệnh danh là con của đấng Pháp vương (Pháp vương tử), tức từ Pháp mà sinh ra, cũng biểu trưng cho Trí căn bản, tức trí giác ngộ hay trí Phật vậy.</p>
    <p>Thứ đến là Bồ-tát A-Dật-Đa tức Bồ-tát Di-Lặc, cũng gọi là Từ Thị, do lúc còn nhỏ Ngài đã không ăn thịt chúng sinh. Bồ-tát Di-Lặc có sở trường chuyển thức thành Trí, nên gọi là thành Phật về tương lai. Như vậy, ai cũng sẽ thành Phật về tương lai cả, nếu biết chuyển thức thành trí, hay chính là niệm tự tánh Di Đà của mình vậy.</p>
    <p>Thứ đến là Bồ-tát Càn-Đà-Ha-Đề, là dịch âm từ tiếng Phạn Gandhahastin, dịch nghĩa sang Hán văn là Bất Hưu Tức, nghĩa Việt là “không ngừng nghỉ”, nghĩa là muốn chuyển thức thành trí thì phải niệm tự tánh tương tục (cất hết sở niệm), mới đủ lực chuyển y thành nhất tâm bất loạn, cho đến lúc mạng mạch của dòng thức bị chặt đứt hoàn toàn (kỳ nhân lâm mạng chung thời) thì tánh giác mới hiển lộ.</p>
    <p>Thứ đến là Bồ-tát Thường-Tinh-Tấn, do niệm tự tánh không ngừng nghỉ (Bất hưu tức) mới đạt thành tinh tấn ba-la-mật, làm cho sáu căn không dính mắc sáu trần, hóa giải sáu thức, đạt thành giác ngộ rốt ráo (cứu cánh giác).</p>
    <p>Thứ nhất là muốn làm cho căn bản trí hiển lộ (Văn-Thù-Sư-Lợi), thì phải chuyển thức thành trí (A-Dật-Đa), và phải dụng công miên mật không dừng nghỉ (Bất Hưu Tức), và phát nguyện dụng công không mệt mỏi (Thường Tinh Tấn), mới đủ lực trực nhập tự tánh Di Đà của mình, tức đạt thành “tâm không điên đảo, tức được vãng sinh”. Đó là bốn yếu tố căn bản, mà hành giả nào cũng phải thực hành, mới giải thoát, giác ngộ.</p>

    <p>Thứ đến là hàng chư Thiên thì có Trời Đế Thích... v.v... cùng với đại chúng đều đến hội họp. Đại chúng đủ thành phần như vậy, nói lên pháp môn niệm tự tánh Di Đà này có công năng nhiếp hóa tất cả vọng tâm. Bởi một tâm của chúng sinh có đủ mười pháp giới là: Địa ngục, ngạ quỷ, súc sinh, A-tu-la, người, trời, Thanh Văn, Duyên Giác, Bồ-tát và Phật. Còn tự tánh Di Đà là toàn thể nhất tâm, nên nói “Pháp giới tạng thân” hay “Như Lai tạng tâm”. Hiểu được ý này, nên Thiền sư Tông Bổn nói: “Ý thánh tình phàm đều ném hết. Một vầng trăng sáng giữa trời treo”.</p>
    <p>Tâm Như Lai gồm đủ bốn đức tính là: Thường - Lạc - Ngã - Tịnh, cũng gọi là thủy giác, bổn giác, chân như, Phật tánh, Bồ-đề, Niết-bàn. Vì vậy nên nói “Ba đời mười phương Phật, A Di Đà đệ nhất” nghĩa là các Đức Phật trong 10 phương ba đời, không vị Phật nào là không nhất tâm. Trì danh hiệu Phật A Di Đà là trì lấy nhất tâm. Vì trì lấy nhất tâm, nên tóm thâu hết thảy pháp môn, và xóa sạch mọi vọng tâm duyên lự, nên gọi là tổng nhiếp.</p>
    <p>Vì vậy cho nên, pháp trì danh tự tánh Di Đà, hay niệm Phật tam-muội này khế hợp với Phật tâm tông hay chính là Thiền tông vậy. Chúng ta hãy nghe Phật hoàng Trần Nhân Tông nói về cõi Tịnh độ trong tác phẩm Cư Trần Lạc Đạo của Ngài: “Tịnh độ chính là lòng trong sạch, chớ còn ngờ hỏi đến Tây phương. Di Đà là tánh giác sáng soi trong mỗi tâm hồn, mựa phải nhọc tìm về Cực lạc”. Xin hành giả liễu tri.</p>

    </div>

    <div class="mt-10 mb-6">
      <h3 id="ghi-chu" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Ghi chú:</h3>
      <div class="space-y-4 text-[0.95em]">
      <p>Nhờ lực tu huệ mà dứt trừ được phiền não, nhưng chưa đắc được Diệt tận định.</p>
      <p>Đạt được Diệt tận định, nên cả tâm và trí thảy đều giải thoát nên nói câu giải thoát.</p>
      <p>Ở trong câu giải thoát, nhưng thông hiểu tất cả văn nghĩa và được bốn vô ngại giải: Pháp vô ngại tức không bị ngăn trệ về giáo pháp. Nghĩa vô ngại tức biết rõ nghĩa lý của giáo pháp, giải thích không hề ngưng trệ. Từ vô ngại tức thông đạt mọi ngôn từ. Nhạo thuyết vô ngại, hay biện thuyết vô ngại tức dùng ba loại trí ở trên mà vì chúng sinh nói pháp một cách trôi chảy, hợp chánh lý, không ngưng trệ.</p>
      <p>Bồ-tát đã chứng được Pháp Thân.</p>
      <p>Tất cả có 2 cõi trời Dục Giới ở núi Tu-di và 26 cõi trời ở trên Hư Không, cộng là 28 cõi.</p>
      <p>Nhất chúng sinh tâm cụ thập pháp giới.</p>
      </div>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong ba nghĩa của từ 'Tỳ-kheo' (Bhikkhu), nghĩa 'Bố ma' được hiểu như thế nào?",
    options: {
      a: 'Khi vị Tỳ-kheo phát tâm thọ giới và phép Yết-ma thành tựu, loài ma sẽ cảm thấy sợ hãi.',
      b: 'Dùng sức mạnh thần thông để xua đuổi các loài ma quỷ quấy nhiễu dân làng xung quanh.',
      c: 'Là người đi khất thực để nuôi dưỡng thân mạng và tùy duyên giáo hóa chúng sinh.',
      d: 'Sử dụng trí tuệ để tiêu diệt các thế lực xấu ác bên ngoài xã hội.',
    },
    answer: 'a',
  },
  {
    question: "Vì sao các vị A-la-hán có mặt trong pháp hội này lại được gọi là 'Đại A-la-hán'?",
    options: {
      a: 'Vì các Ngài vốn là bậc Pháp Thân Đại Sĩ thị hiện làm Thanh Văn để chứng thực pháp tu Tịnh Độ.',
      b: 'Vì các Ngài là những người duy nhất đã đoạn tận được phiền não ' + "'sát tặc'" + '.',
      c: 'Vì các Ngài là những người có tuổi thọ cao nhất và sức khỏe tốt nhất trong Tăng đoàn.',
      d: 'Vì các Ngài đã đạt được thần thông quảng đại, có thể di chuyển giữa các cõi trời.',
    },
    answer: 'a',
  },
  {
    question: 'Trong bối cảnh pháp môn Tịnh Độ, Bồ-tát Văn-Thù-Sư-Lợi biểu trưng cho điều gì?',
    options: {
      a: 'Sự chuyển hóa các loại tình cảm và cảm xúc thành sức mạnh thần thông.',
      b: 'Trí giác ngộ hoặc Trí căn bản, là yếu tố đứng đầu để dẫn dắt hành giả vào đạo.',
      c: 'Lòng từ bi rộng lớn, luôn cứu khổ cứu nạn cho chúng sinh trong các cõi.',
      d: 'Sự kiên trì, bền bỉ và không bao giờ nghỉ ngơi trong việc tu tập.',
    },
    answer: 'b',
  },
  {
    question: "Bồ-tát Càn-Đà-Ha-Đề được dịch nghĩa sang chữ Hán là 'Bất Hưu Tức'. Tên gọi này có ý nghĩa gì trong việc niệm Phật?",
    options: {
      a: 'Thường xuyên di chuyển giữa các thế giới để cứu độ chúng sinh mà không mệt mỏi.',
      b: 'Không cần ngủ nghỉ để nghe hết tất cả các bài giảng của Đức Phật.',
      c: 'Dành toàn bộ thời gian trong ngày để đi bộ xung quanh vườn Kỳ Đà.',
      d: 'Niệm tự tánh tương tục, bám sát công phu không gián đoạn để đạt đến nhất tâm bất loạn.',
    },
    answer: 'd',
  },
  {
    question: 'Vị Trưởng lão nào được mô tả là dù rất đần độn, chỉ nhớ được một bài kệ nhưng sau đó lại trở thành bậc nhớ nghĩa hay đệ nhất?',
    options: {
      a: 'Ngài Bạc-Câu-La.',
      b: 'Ngài Kiều-Phạm-Ba-Đề.',
      c: 'Ngài Châu-Lợi-Bàn-Đà-Già.',
      d: 'Ngài Tân-Đầu-Lô-Phả-La-Đọa.',
    },
    answer: 'c',
  },
  {
    question: "Cụm từ 'Đại chúng câu' trong pháp hội này ngụ ý điều gì về pháp môn niệm Phật?",
    options: {
      a: 'Chỉ những người có phước báu cực lớn mới có thể tham dự vào pháp hội này.',
      b: 'Tất cả mọi người tham dự đều phải xuất thân từ hoàng tộc như Thái tử Kỳ Đà.',
      c: 'Mọi vọng tưởng và thành phần tâm thức (mười pháp giới) đều bị hóa giải và thu hút vào nhất tâm.',
      d: 'Đây là một cuộc hội thảo lớn thu hút tất cả các tôn giáo khác tại Ấn Độ thời bấy giờ.',
    },
    answer: 'c',
  },
]

const lesson: Lesson = {
  id: 'lesson-luoc-giai-kinh-a-di-da-bai-2-2-duyen-khoi-va-dai-chung-phap-hoi',
  slug: 'bai-2-2-duyen-khoi-va-dai-chung-phap-hoi',
  title: 'Duyên khởi và đại chúng pháp hội',
  type: 'article',
  status: 'published',
  order: 3,
  coverImage: materialUrl('2.2-duyen-khoi-va-dai-chung-phap-hoi'),
  createdAt: '2026-10-04',
  updatedAt: '2026-10-04',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.2-duyen-khoi-va-dai-chung-phap-hoi/%C3%9D_ngh%C4%A9a_bi%E1%BB%83u_t%C6%B0%E1%BB%A3ng_T%E1%BB%8Bnh_%C4%90%E1%BB%99.png',
      readingContent,
      tableOfContents: [
        { id: 'duyen-khoi-va-dai-chung-phap-hoi', label: '2.2. Duyên khởi và đại chúng pháp hội' },
        { id: 'chanh-van', label: 'Chánh văn:', indent: 1 },
        { id: 'giai-thich-tu-ngu', label: 'Giải thích từ ngữ:', indent: 1 },
        { id: 'luoc-giai', label: 'Lược giải:', indent: 1 },
        { id: 'ghi-chu', label: 'Ghi chú:', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.2-duyen-khoi-va-dai-chung-phap-hoi/Architecture_of_Awakening.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/S7XKgDazaK0',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/625KBqKBtMGaWVmiysRrQE?si=2MW3xj9rR8yPRSsLIkvuyA',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Duyên khởi và đại chúng pháp hội',
    passPercentage: 70,
    questions,
  },
}

export default lesson
