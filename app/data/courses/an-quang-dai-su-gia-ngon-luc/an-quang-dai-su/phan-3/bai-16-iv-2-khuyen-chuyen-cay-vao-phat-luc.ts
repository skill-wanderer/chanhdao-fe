import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/4.luan-ve-viec-lon-sinh-tu/2.khuyen-chuyen-cay-vao-phat-luc'
  return base + '/' + encodeURIComponent(file)
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div>
      <p class="mb-1 text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400">IV. LUẬN VỀ VIỆC LỚN SANH TỬ</p>
      <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">2. Khuyên chuyên cậy vào Phật lực</h2>
    </div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ấn Quang từ Tây qua Ðông, từ Bắc xuống Nam, qua lại hơn vạn dặm, gặp gỡ nhiều người. Trong số đó, lắm kẻ bình nhật tự vỗ ngực là bậc thông Tông, thông Giáo, coi Tịnh Ðộ như uế vật, chỉ sợ nó làm bẩn lây đến mình. Lúc lâm chung, đa số chân loạn tay cuống, kêu cha gào mẹ. Trong số ấy, có những người trì giới niệm Phật già giặn, chắc thật, dù Tín Nguyện chưa đến mức cùng cực, tướng lành chẳng hiện, nhưng đều an nhiên mạng chung.</p><p class="mb-0">Vì sao như vậy? Là vì tâm thủy trong lặng, do phân biệt nên xao động, đục ngầu, sóng thức trào dâng. Do Phật hiệu nên tâm thủy ngưng lặng. Bởi thế, kẻ thượng trí chẳng bằng kẻ hạ ngu, biến quá khéo thành vụng về lớn vậy!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Phật nói hết thảy pháp môn Ðại, Tiểu, Quyền, Thật đều phải cậy vào công sức của chính mình để đoạn Hoặc chứng Chân mới thoát khỏi sanh tử. Nếu còn chút mảy may Hoặc nghiệp, sẽ quyết định khó thoát khỏi sanh tử. Vì thế, từ đời này sang đời khác, từ kiếp này sang kiếp khác, lần lượt tu trì, nếu ai có đầy đủ sức lực sẽ tiến thẳng lên Bất Thoái, liền được liễu thoát.</p><p class="mb-0">Ða phần là từ giác chợt mê, thoạt tiến liền lùi, trải qua bao kiếp nhiều như bụi trần chẳng thể xuất ly. Sở dĩ, ngài và tôi hôm nay vẫn còn là phàm phu, toàn là vì chẳng biết đến pháp môn Tịnh Ðộ độ khắp ba căn, chí cực viên đốn của đức Như Lai.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Người chẳng hiểu Tịnh Ðộ đọc đến kinh Lăng Nghiêm sẽ cho kinh này là nhân tố chính để đả phá Tịnh Ðộ. Người hiểu Tịnh Ðộ đọc đến, liền biết kinh này khéo hướng dẫn hoằng dương Tịnh Ðộ. Vì sao nói thế?</p><p class="mb-0">Vì tự lực ngộ đạo thì khó, Tịnh Ðộ vãng sanh là dễ. Nhân quả mười pháp giới mỗi mỗi phân minh. Nếu chẳng cậy vào Phật lực, dù phá được một hai Ấm, vẫn bị ma dựa phát cuồng, thành chủng tử địa ngục. Vả nữa, trong hai mươi bốn công phu Viên Thông, người đời nay có ai là kẻ tu tập được? Chỉ có mỗi phép Niệm Phật như con nhớ mẹ, hễ ai hữu tâm đều có thể phụng hành được! Cốt sao tịnh niệm tiếp nối, sẽ tự chứng được tam-ma-địa. Kẻ biết phân biệt tốt xấu đọc đến, lẽ nào chỉ ưng chịu chủ trương tự lực, chẳng cậy vào Phật lực hay sao? Kẻ chẳng biết hay dở mới nghĩ như vậy, bởi họ chỉ mong làm bậc thông gia, không có lòng liễu sanh thoát tử!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Tu hành dụng công vốn là để liễu sanh thoát tử. Nếu dụng công nhưng chẳng thể liễu sanh tử là do chẳng chịu y vào pháp có thể liễu được sanh tử mà hành. Khác nào gánh gai bỏ vàng, tự chuốc lấy lỗi hay sao? Dù tham thiền đại triệt đại ngộ như Ngũ Tổ Giới, Thảo Ðường Thanh, Chân Như Triết, Ðoạn Nham Nghĩa còn chưa liễu nổi sanh tử, phải thọ thân đời sau, đến nỗi mê lầm. So ra, ta còn thua xa họ, họ còn chẳng thể liễu sanh tử nổi, huống hồ là bọn ta ư?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Pháp môn Tịnh Ðộ là pháp môn phổ độ chúng sanh, viên đốn, thẳng tắt, rộng lớn, giản dị nhất của đức Như Lai. Vì sao nói thế? Do hết thảy các pháp môn đều phải đoạn hai Hoặc: Kiến và Tư mới hòng liễu sanh tử. Nhưng đoạn Kiến Hoặc còn như cắt đứt dòng chảy rộng bốn mươi dặm, huống hồ là Tư Hoặc? Ðoạn Kiến Hoặc là chứng Sơ Quả. Nếu ước theo Viên Giáo thì là Sơ Tín. Ðoạn sạch Tư Hoặc liền chứng Tứ Quả; trong Viên Giáo là địa vị Thất Tín. Sơ Quả, Sơ Tín còn có sanh tử. Tứ Quả, Thất Tín mới hết sanh tử.</p><p class="mb-0">Nhưng Thiên Thai Trí Giả đại sư chỉ thị hiện chứng được địa vị ngũ phẩm, tuy sở ngộ đã bằng với chư Phật, đã hàng phục trọn vẹn ngũ trụ phiền não, nhưng vẫn chưa từng đoạn Kiến Hoặc. Thế nhưng, bổn địa22 của Ðại Sư thực chẳng thể suy lường được. Lúc mạng chung, Ngài chỉ nói là chứng ngũ phẩm, vì lo xa hậu thế chẳng dốc sức đoạn Hoặc chứng Chân, chỉ lấy minh tâm kiến tánh làm rốt ráo.</p><p class="mb-0">Minh tâm kiến tánh là đại triệt đại ngộ. Nếu là bậc tối thượng thượng căn, hễ ngộ liền chứng, thì liễu được sanh tử. Nếu không, dù có biết trước được vị lai như sư Viên Trạch vẫn chẳng tránh khỏi phải thọ sanh lần nữa. Ðến như Ngũ Tổ Giới lại sanh làm Tô Ðông Pha, Thảo Ðường Thanh lại làm thân Lỗ Công. Ðấy hãy còn là tạm được. Ngài Hải Ấn Tín thành con gái của quan Phòng Ngự họ Châu, đã đáng buồn lòng. Nhưng ông Tăng ở núi Nhạn Ðãng trở thành Tần Cối thì thật là đáng thương xót quá. Tự lực đoạn Hoặc chứng Chân để liễu sanh thoát tử thật khó khăn thay!</p><p class="mb-0">Các giáo lý tu chứng thông thường trong cả một đời đức Như Lai đã nói tuy có nhiều pháp khác nhau, nhưng không có một pháp nào khiến cho kẻ còn đầy dẫy Hoặc nghiệp có thể liễu sanh thoát tử cả! Chỉ mình pháp Tịnh Ðộ, chỉ cần lòng tin chân thành, nguyện thiết tha, dùng tâm chí thành trì danh hiệu Phật, cầu sanh Tây Phương. Chẳng luận là Hoặc nghiệp dày hay mỏng, công phu cạn hay sâu, khi lâm chung đều cậy vào Phật từ lực, đới nghiệp vãng sanh. Ðã vãng sanh liền siêu phàm nhập thánh, liễu sanh thoát tử. Từ đấy, lần lượt tấn tu, liền chứng được Vô Sanh, thậm chí viên mãn Phật Quả! Ðây chính là pháp môn đặc biệt thương xót chúng sanh căn cơ hèn kém, muốn cho họ mau thoát khỏi luân hồi của đức Như Lai.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Những người nghiên cứu về Giáo dựa trên giáo lý thông thường để luận đoán sự chứng đắc, chẳng tin có việc đới nghiệp vãng sanh, khoe mình là hạng thường ở trong sanh tử để độ chúng sanh, chẳng muốn mau thoát khỏi sanh tử. Chẳng biết chén, bình chưa nung, gặp mưa liền rã; phiền hoặc chưa đoạn, chuyển sanh liền mê. Tự lợi còn khó, huống là lợi người! Bọn họ đều là hạng chẳng lượng đức mình, là hạng phàm phu sát đất, có chút huệ tánh bèn vội bắt chước phong cách của bậc Pháp Thân Ðại Sĩ, đến nỗi lầm lỡ một phen, lỡ lầm vĩnh viễn!</p><p class="mb-0">Kẻ tham Thiền thì chuyên chú tham cứu, mong minh tâm kiến tánh, chẳng biết căn cơ mình khá hèn kém, chẳng thể minh tâm kiến tánh rất nhiều. Dù cho đã được minh tâm kiến tánh, nhưng nếu Hoặc nghiệp chưa đoạn, vẫn luân hồi sanh tử y như cũ, chẳng thể xuất ly cũng lại nhiều lắm. Ngũ Tổ Giới, Thảo Ðường Thanh, Hải Ấn Tín, Chân Như Triết v.v... là những chứng cứ xác thực.</p><p class="mb-0">Ôi! Sanh tử lớn thế, sao lại chuyên cậy vào tự lực, chẳng cậy vào Phật lực? Ý chừng tự lực hơn hẳn Phật lực ư? Phàm người sống trong đời, việc lớn như sáng lập sự nghiệp lưu truyền nhiều đời, việc nhỏ như một manh áo, một bữa ăn, không gì là chẳng phải nhờ vào sức của nhiều người để hoàn thành việc mình. Ðến như việc lớn liễu sanh tử, dù sẵn có Phật lực vẫn chẳng chịu nương nhờ, cứ muốn tỏ ra phong cách phi thường, chỉ e lại rớt vào thói thường của kẻ phàm ngu. Chí của họ đáng bảo là lớn, nhưng tiếc là chẳng biết khả năng của họ có đáng gọi là lớn hay chăng?</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Muốn liễu sanh tử thì phải thật chứng. Nếu phiền hoặc vẫn còn, ắt phải thật nỗ lực mới có thể tranh cạnh với nghiệp, trải qua những duyên giồi mài thì trong tâm thường giác chiếu, thầm hợp với Thánh Trí. Phàm tình nhân ngã thị phi không do đâu khởi được. Nếu chẳng tăng thêm giác chiếu, phàm tình vẫn lừng lẫy như cũ, thì công hạnh càng cao, tình kiến càng nặng, từ ngộ vào mê là chuyện khó tránh khỏi. Như người ngủ chẳng tỉnh, càng ngủ mê mệt thêm.</p><p class="mb-0">Cổ nhân bảo: “Ðại sự dĩ minh như táng khảo tỷ” (Ðại sự đã hiểu như chôn cha mẹ). Chính là vì phiền hoặc chưa đoạn, chỉ e lại mê. Phải biết rằng người đã đoạn Hoặc chẳng có phàm tình. Ðã không có phàm tình, lấy đâu sanh tử? Người đại ngộ dù ngộ bằng với Phật, nhưng chưa đoạn trừ Hoặc thì phải niệm niệm giác chiếu, mới hòng tránh khỏi tác dụng của phàm tình.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Pháp môn này toàn cậy vào Phật lực. Ví như người thọt một ngày chỉ đi được mấy dặm; nếu ngồi trên luân báu của Chuyển Luân Thánh Vương liền trong khoảnh khắc đến khắp bốn đại châu. Ðấy là sức của Luân Vương, chẳng phải do sức mình. Người đời tu hành cố nhiên giống vậy. Dù là kẻ ngũ nghịch thập ác tội lỗi cực nặng, lúc lâm chung, tướng địa ngục hiện, nếu có thể chí tâm niệm Phật, liền được Phật tiếp dẫn. Ấy là vì Phật xem chúng sanh khác nào con một. Ðứa nào thiện thuận, dĩ nhiên từ ái dưỡng dục. Ðứa nào ác nghịch, càng thêm xót thương. Nếu con hồi tâm hướng về mẹ, ắt mẹ sẽ rủ lòng từ tiếp nhận.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Cậy tự lực tu hành, đoạn Hoặc chứng Chân thật chẳng dễ dàng! Ðoạn Kiến Hoặc như cắt ngang dòng nước rộng bốn mươi dặm, huống hồ là Tư Hoặc! Kiến Hoặc đoạn được liền chứng Sơ Quả, dự vào dòng thánh, vẫn còn phải bảy lần sanh lên trời, bảy lần sanh xuống nhân gian mới đoạn sạch được Tư Hoặc để chứng Tứ Quả.</p><p class="mb-0">Tuy nói là mười bốn lần sanh tử, nhưng trên trời tuổi thọ dài lâu, cố nhiên chẳng thể dùng năm tháng để luận. Thánh nhân Sơ Quả muốn liễu sanh tử còn khó khăn như thế, huống hồ là phàm phu đầy dẫy Hoặc nghiệp ư? Nếu chứng Tứ Quả sẽ vĩnh viễn đoạn được căn bản sanh tử, siêu xuất lục đạo luân hồi. Nếu phát tâm Ðại Bi, nhập thế độ sanh, nương theo nguyện thị hiện hạ sanh, sẽ chẳng giống như kẻ đầy dẫy Hoặc nghiệp bị nghiệp thiện ác lôi kéo thăng trầm trong lục đạo, tự mình chẳng mảy may làm chủ được! Tự lực liễu sanh tử nếu chẳng phải là hạng túc căn thâm hậu sẽ chẳng thể làm được; chúng sanh đời mạt mong bằng được sao?</p><p class="mb-0">Bởi thế, Như Lai đặc biệt mở ra pháp môn Tịnh Ðộ để hết thảy dù thánh hay phàm, thượng trung hạ căn cùng được liễu sanh thoát tử ngay trong đời này. Lòng từ bi cứu hộ ấy tột bậc không chi hơn được! Ðể tu trì pháp này cũng phải nghiêm trì tịnh giới, tận lực tu Ðịnh - Huệ, kiêm thêm sanh lòng tin, phát nguyện, trì danh hiệu Phật, cầu sanh Tây Phương. Lòng tin chân thành, nguyện thiết tha, niệm lực tinh thuần, ngay trong hiện đời cũng có thể chứng thánh, lâm chung lên ngay thượng phẩm, dự vào địa vị Bồ Tát, chứng địa vị Bất Thoái.</p><p class="mb-0">Nếu như căn cơ hèn kém, chưa làm được như thế, cứ chí thành niệm Phật thì tâm và Phật khế hợp nhau, cảm ứng đạo giao. Lúc lâm chung ắt được Phật rủ lòng từ tiếp dẫn, đới nghiệp vãng sanh. Thậm chí kẻ ngũ nghịch, thập ác, lúc lâm chung tướng địa ngục hiện, nếu tâm thức chẳng mê, có thiện tri thức dạy cho niệm Phật, người ấy sanh lòng sợ hãi lớn lao, sanh lòng hổ thẹn lớn sám hối, dù niệm mấy tiếng rồi liền mạng chung, cũng vẫn được Phật từ lực tiếp dẫn vãng sanh.</p><p class="mb-0">Một phen được vãng sanh liền vĩnh viễn thoát khỏi luân hồi, cao dự hải hội, lần lượt tấn tu, ắt chứng Phật Quả. Cậy vào tự lực để liễu sanh tử khó như thế ấy, cậy vào Phật lực để liễu sanh tử dễ như thế đó. Phàm ai có tâm đều có thể niệm Phật, đều có thể vãng sanh. Là trang nam nhi có huyết tánh, nhất định chẳng chịu để Chân Như Phật Tánh sẵn có trái nghịch tịnh duyên, theo duyên mê nhiễm, luân hồi trong lục đạo bao kiếp dài lâu không thể thoát khỏi!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Chúng ta luân hồi trong sanh tử, trải kiếp số đã lâu, đã tạo ác nghiệp vô lượng vô biên. Nếu cậy vào sức tu trì của mình, muốn diệt sạch phiền não Hoặc nghiệp để liễu sanh tử, còn khó hơn lên trời! Nếu tin được pháp môn Tịnh Ðộ do Ðức Phật đã giảng, dùng lòng tin chân thành, nguyện thiết tha, niệm danh hiệu A Di Ðà Phật, cầu sanh Tây Phương, chẳng luận là nghiệp lực lớn hay nghiệp lực nhỏ, đều có thể nhờ vào Phật lực vãng sanh Tây Phương.</p><p class="mb-0">Ví như một hạt cát gieo xuống nước liền chìm. Dù đem hòn đá nặng cả mấy ngàn vạn cân đặt lên chiếc đại hỏa luân thuyền sẽ chẳng bị chìm, còn chở được sang chỗ khác để tùy ý sử dụng. Ðá ví như nghiệp lực sâu nặng của chúng sanh. Ðại hỏa luân thuyền ví như từ lực rộng lớn của Phật Di Ðà. Nếu chẳng niệm Phật, cậy vào sức tu trì của chính mình hòng liễu sanh thoát tử, cần phải đạt đến chỗ nghiệp tận tình không mới làm được. Nếu không, dù cho phiền não Hoặc nghiệp chỉ còn chút mảy may chưa đoạn cũng chẳng liễu nổi. Ví như một hạt cát bé tí cũng bị chìm trong nước, quyết chẳng thể tự nó thoát ra ngoài nước được!</p><p class="mb-0">Các hạ chỉ nên sanh tín tâm, niệm Phật cầu sanh Tây Phương, chẳng nên khởi lên những ý niệm nào khác. Nếu thật sự làm được như vậy, nếu tuổi thọ chưa hết sẽ mau được lành bệnh. Do công đức chuyên nhất chí thành niệm Phật liền diệt trừ được ác nghiệp đời trước, khác nào mặt trời rạng rỡ đã mọc, sương tuyết liền tiêu. Tuổi thọ đã hết sẽ liền được vãng sanh vì tâm không có niệm nào khác nên cảm ứng đạo giao với Phật. Vì thế, được Phật tiếp dẫn vãng sanh. Nếu các hạ tin được lời này thì sống cũng được đại lợi ích, mà chết cũng được đại lợi ích!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Tình thế hiện tại chính là tình thế hoạn nạn. Nếu chẳng lấy Phật A Di Ðà và Quán Thế Âm Bồ Tát làm chỗ nương cậy để thường niệm, lỡ ra họa hoạn xảy tới, hoặc thình lình gặp phải chuyện bất trắc, kêu gào xuông cũng chẳng được! Nếu đã niệm sẵn từ trước sẽ có sự chuyển biến âm thầm. Huống hồ cơn sanh tử xảy tới, ai cũng phải có ngày ấy!</p><p class="mb-0">Vì thế, phải thường nghĩ đến lúc lâm chung, tự chẳng dốc sức rong ruổi theo đuổi hết thảy vọng tưởng trái phận và các pháp môn chẳng giúp ích gì cho việc liễu sanh thoát tử, đến nỗi bỏ phế, chẳng tu pháp môn phải quyết định dựa vào để liễu sanh thoát tử này. Mong vợ chồng, cha con ông đều chẳng cho lời Quang là hủ bại, vớ vẩn thì thật là may mắn lắm!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Người niệm Phật có bệnh nên nhất tâm chờ chết. Nếu tuổi đời chưa tận sẽ chóng lành bệnh. Ðem toàn thân buông xuống để niệm Phật, tiêu nghiệp rất hay! Nghiệp tiêu thì bệnh lành. Nếu chẳng buông xuống được, cứ mong được khoẻ lại; nếu chẳng được khỏe lại chắc chắn không cách chi được vãng sanh vì chẳng nguyện sanh! Chẳng hiểu rõ đạo lý này, còn mong cậy vào Phật từ lực nữa ư?</p><p class="mb-0">Với căn bệnh của mẹ ông, hãy nên khuyên bà khẩn thiết buông xuống, cầu vãng sanh. Nếu tuổi thọ chưa hết mà cầu vãng sanh sẽ hóa ra chóng được lành bệnh. Ấy là vì tâm chí thành nên được Phật từ gia bị. Mong ông hãy nhỏ nhẹ, khéo léo khuyên mẹ, đừng bắt chước kẻ si nói những lời si dại nữa!</p></div>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
    <h3 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Chú thích:</h3>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/50 p-5 space-y-2 text-base text-text-secondary dark:border-primary-900 dark:bg-primary-950/20"><p class="mb-0">22 . Bổn địa: là ứng với Tích Hóa mà nói. Bổn là gốc, là Pháp Thân, Tích là sự hóa hiện để hóa độ chúng sanh. Bổn địa là nói đến sự chứng ngộ thật sự của Ngài.</p></div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo văn bản, tại sao việc cậy vào tự lực để liễu sanh thoát tử lại vô cùng khó khăn đối với phàm phu?",
    "options": {
      "a": "Vì các giáo lý thông thường cấm đoán việc kết hợp thiền định với giữ giới luật.",
      "b": "Vì phải đoạn sạch cả hai Hoặc (Kiến Hoặc và Tư Hoặc) mới thoát khỏi luân hồi.",
      "c": "Vì phàm phu không thể đọc hiểu bất kỳ kinh điển Đại thừa nào nếu không có thầy chỉ dạy.",
      "d": "Vì tự lực tu hành đòi hỏi phải nhập Định tuyệt đối và ngừng mọi hoạt động tâm trí."
    },
    "answer": "b"
  },
  {
    "question": "Trong hình ảnh so sánh ở đoạn văn, chiếc \"đại hỏa luân thuyền\" chở hòn đá nặng tượng trưng cho điều gì?",
    "options": {
      "a": "Sức tu trì kiên cố của phàm phu khi đã đảnh lễ và giữ trọn tịnh giới.",
      "b": "Thế giới Tây Phương Cực Lạc nơi không còn bất kỳ hạt cát hay nghiệp chướng nào.",
      "c": "Sự vi diệu của kinh Lăng Nghiêm trong việc đả phá các loại ma chướng.",
      "d": "Từ lực rộng lớn của Phật A Di Đà nâng đỡ nghiệp lực sâu nặng của chúng sanh."
    },
    "answer": "d"
  },
  {
    "question": "Vì sao những bậc đại triệt đại ngộ như Ngũ Tổ Giới hay Thảo Đường Thanh vẫn chưa thể liễu thoát sanh tử ngay trong đời đó?",
    "options": {
      "a": "Họ thiếu lòng từ bi và không chịu đem giáo pháp đi hóa độ chúng sanh.",
      "b": "Họ bị rơi vào ma giới do tu tập sai lầm theo kinh Lăng Nghiêm.",
      "c": "Tuy sở ngộ bằng chư Phật nhưng họ chưa đoạn trừ sạch phiền não Hoặc nghiệp.",
      "d": "Họ đã bỏ quên việc nghiên cứu giáo lý và không tu tập Thiền định."
    },
    "answer": "c"
  },
  {
    "question": "Theo tác giả, người hiểu Tịnh Độ sẽ nhìn nhận Kinh Lăng Nghiêm như thế nào?",
    "options": {
      "a": "Là văn bản chỉ dành riêng cho bậc Pháp Thân Đại Sĩ tu tập Viên Thông.",
      "b": "Là bộ kinh chuyên dùng để đả phá và phủ nhận pháp môn Niệm Phật.",
      "c": "Khéo hướng dẫn hoằng dương Tịnh Độ vì cho thấy tự lực ngộ đạo rất khó.",
      "d": "Là tác phẩm khuyến khích con người chỉ cậy vào sức mình để phá năm Ấm."
    },
    "answer": "c"
  },
  {
    "question": "Thái độ đúng đắn nhất của người niệm Phật khi gặp bệnh tật được khuyên trong văn bản là gì?",
    "options": {
      "a": "Chỉ mong mau chóng khỏe lại để tiếp tục rong đuổi các duyên thế gian.",
      "b": "Dừng niệm Phật để tập trung tìm kiếm các bài thuốc dân gian cấp tốc.",
      "c": "Buông xuống toàn thân, nhất tâm niệm Phật cầu vãng sanh.",
      "d": "Chờ đợi người khác cầu nguyện hộ mình mà bản thân không cần chí thành."
    },
    "answer": "c"
  },
  {
    "question": "Đoạn sạch Kiến Hoặc tương đương với việc chứng được địa vị nào trong giáo lý thông thường?",
    "options": {
      "a": "Địa vị Ngũ Phẩm Dụng Công của Đại sư Trí Giả.",
      "b": "Tứ Quả Arhat (trong Tiểu Thừa) hoặc Thất Tín (trong Viên Giáo).",
      "c": "Quả vị Bồ Tát Bất Thoái Chuyển ngay trong đời hiện tại.",
      "d": "Sơ Quả (trong Tiểu Thừa) hoặc Sơ Tín (trong Viên Giáo)."
    },
    "answer": "d"
  },
  {
    "question": "Hình ảnh \"người thọt ngồi trên luân báu của Chuyển Luân Thánh Vương\" minh họa cho nguyên lý nào?",
    "options": {
      "a": "Pháp tu Thiền định dành riêng cho những người có thân thể tật nguyện.",
      "b": "Ý chí kiên cường của kẻ hạ ngu khi tự mình vượt qua khó khăn.",
      "c": "Sự nguy hiểm của việc theo đuổi danh lợi vương quyền thế gian.",
      "d": "Sự chênh lệch to lớn giữa tự lực yếu ớt và Phật lực gia hộ mạnh mẽ."
    },
    "answer": "d"
  },
  {
    "question": "Điều gì giúp kẻ tạo tội ngũ nghịch thập ác lúc lâm chung vẫn có thể vãng sanh?",
    "options": {
      "a": "Nhờ túc căn đời trước tự động diệt sạch mọi tội lỗi ngay trước giờ chết.",
      "b": "Nhờ gia quyến cúng bái và đóng góp thật nhiều tiền tài vào chùa.",
      "c": "Do tướng địa ngục hiện ra làm họ tự nhiên chứng được Vô Sanh Pháp Nhẫn.",
      "d": "Gặp thiện tri thức dạy niệm Phật, sinh lòng sợ hãi, hối hận chí thành sám hối niệm Phật."
    },
    "answer": "d"
  },
  {
    "question": "Theo văn bản, nguy cơ lớn nhất của một phàm phu chưa đoạn phiền não nhưng lại bắt chước phong cách Pháp Thân Đại Sĩ là gì?",
    "options": {
      "a": "Mất đi khả năng tiên đoán tương lai như sư Viên Trạch.",
      "b": "Bị mọi người xung quanh chê bai vì thiếu tri thức giáo lý.",
      "c": "Không thể đạt được chức vị cao trong chốn thiền lâm.",
      "d": "Khi chuyển sanh bị mê lầm, từ ngộ vào mê, tiếp tục luân hồi."
    },
    "answer": "d"
  },
  {
    "question": "Tính chất \"đới nghiệp vãng sanh\" trong pháp môn Tịnh Độ có nghĩa là gì?",
    "options": {
      "a": "Mang theo nghiệp cũ chưa đoạn dứt để vãng sanh nhờ Phật lực tiếp dẫn.",
      "b": "Nghiệp lực tự động biến mất mà không cần lòng tin hay nguyện lực.",
      "c": "Chỉ những ai không có ác nghiệp mới có thể nương nhờ Phật lực.",
      "d": "Bắt buộc phải tiêu sạch hoàn toàn mọi nghiệp tội mới được về Cực Lạc."
    },
    "answer": "a"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-16-iv-2-khuyen-chuyen-cay-vao-phat-luc',
  slug: 'bai-16-iv-2-khuyen-chuyen-cay-vao-phat-luc',
  title: '2. Khuyên chuyên cậy vào Phật lực',
  type: 'article',
  status: 'published',
  order: 3,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Tự_Lực_Hay_Phật_Lực_.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Từ_Tự_Lực_Đến_Phật_Lực.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/YQWu80xtg1o',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6XFUgdiBQZ1hwV790F4pjH?si=MLMKzDijRoOT1ok3nmwJOQ',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Khuyên chuyên cậy vào Phật lực',
    passPercentage: 70,
    questions,
  },
}

export default lesson
