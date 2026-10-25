import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/3.chi-day-phuong-phap-tu-tri/3.luan-ve-viec-giu-gin-long-lap-pham'
  return base + '/' + encodeURIComponent(file)
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div>
      <p class="mb-1 text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400">III. CHỈ DẠY PHƯƠNG PHÁP TU TRÌ</p>
      <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">3. Luận về việc gìn lòng lập phẩm</h2>
    </div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Nếu cảnh ngộ chẳng tốt lành thì hãy nên nghĩ đến việc lùi một bước. Hãy thử nghĩ, trong đời, người hơn ta cố nhiên là nhiều, người thua ta cũng chẳng phải là ít. Chỉ mong chẳng đói chẳng lạnh, mong chi đại phú, đại quý? Vui theo thiên mệnh, an vui với hoàn cảnh. Như vậy còn có thể chuyển phiền não thành Bồ Ðề, huống hồ là chẳng chuyển nổi ưu khổ thành an lạc sao?</p><p class="mb-0">Nếu tật bệnh triền miên thì nên đau đáu nghĩ thân là gốc khổ, sanh cực chán lìa, tận lực tu Tịnh nghiệp, thề cầu vãng sanh. Chư Phật lấy khổ làm thầy đạt thành Phật đạo. Chúng ta nên lấy bệnh làm thuốc, mau cầu xuất ly. Phải biết rằng phàm phu đầy dẫy triền phược nếu không có các nỗi khổ: bần cùng, tật bệnh v.v... sẽ suốt ngày rong ruổi trong trường thanh sắc danh lợi chẳng hề thỏa. Trong lúc hiển hách, đắc ý, ai chịu quay đầu tưởng đến lúc chìm đắm mai sau?</p><p class="mb-0">Mạnh Tử nói: “Trời muốn giao trách nhiệm lớn cho ai thì trước đó sẽ khiến kẻ đó tâm chí khổ sở, gân xương mỏi mệt, thân thể đói khát, thân thể trống trải, nhiễu loạn hành vi của họ ngõ hầu tâm họ khởi tánh Nhẫn, tăng trưởng khả năng làm được những điều mình chưa thể làm được”. Do đó, ta biết rằng những người được trời thành tựu phần nhiều gặp nghịch cảnh, con người chỉ nên thuận theo mạng trời nhận lãnh nghịch cảnh.</p><p class="mb-0">Cái “trách nhiệm lớn” Mạnh Tử đã nói đó chỉ là tước vị trong thế gian mà còn phải lo buồn, vất vả như thế mới khỏi phụ lòng trời. Huống chi bọn ta là phàm phu sát đất muốn trên thì tiếp nối đạo giác của đấng Pháp Vương, dưới thì giáo hóa pháp giới hữu tình, nếu chẳng bị nghèo đói thử thách đôi chút thì Phàm Hoặc ngày thêm lừng lẫy, Tịnh nghiệp khó thành, mê muội bổn tâm, vĩnh viễn chìm đắm trong ác đạo đến tận đời vị lai, không thời gian nào mong thoát khỏi được! Cổ đức nói:</p><div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic bg-primary-50/40 dark:bg-primary-900/10 rounded-r-xl"><p class="mb-0">Bất kinh nhất phiên hàn triệt cốt,</p><p class="mb-0">Tranh đắc mai hoa phác tỵ hương,</p></div><div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic bg-primary-50/40 dark:bg-primary-900/10 rounded-r-xl"><p class="mb-0">(Chẳng trải một phen lạnh thấu xương,</p><p class="mb-0">Dễ đâu hoa mai thơm ngát mũi!)</p></div><p class="mb-0">Chính là nói về ý này vậy.</p><p class="mb-0">Chỉ nên chí tâm niệm Phật để tiêu nghiệp cũ, trọn chẳng nên khởi tâm phiền bực, oán trời trách người, bảo là nhân quả hư huyễn, Phật pháp chẳng thiêng!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ông Cừ Bá Ngọc đến tuổi năm mươi biết bốn mươi chín năm trước là sai trái. Khổng Tử tuổi chừng bảy mươi, còn mong trời cho sống thêm vài năm nữa để học Dịch hầu khỏi mắc lỗi lớn. Thánh hiền học hỏi không vị nào là chẳng mong muốn hiểu đến chỗ rốt ráo. Các nho gia cận đại chỉ học từ chương, chẳng bận tâm đến chánh tâm thành ý. Tuy suốt ngày đọc sách, trọn chẳng biết ý lưu lại sách vở để răn đời của thánh hiền. Nếu lời nói, hành vi của mình đem đọ với lời nói, hành vi của thánh hiền mà sáng - tối chẳng hợp nhau, tròn - vuông chẳng khớp nhau, chẳng nên gấp suy xét tới từng điểm sai biệt ẩn kín, nhỏ nhặt ư?</p><p class="mb-0">Kinh Phật dạy người ta thường hành sám hối ngõ hầu đoạn sạch vô minh, viên thành Phật đạo. Dù địa vị đến bậc Ðẳng Giác như Di Lặc Bồ Tát vẫn trong mười hai thời lễ thập phương chư Phật để mong hết sạch vô minh, viên chứng Pháp Thân, huống những kẻ kém hơn Ngài chẳng học theo vậy ư? Kẻ phàm phu sát đất khắp thân là nghiệp lực, chẳng sanh hổ thẹn, chẳng tu sám hối, dù nhất niệm tâm tánh bình đẳng với Phật, nhưng do phiền não ác nghiệp ngăn lấp nguồn tâm chẳng thể hiển hiện được.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ðối với việc dứt ác làm lành, dựa trên thực tế mà suy xét thì không gì hay bằng Công Quá Cách. Nhưng nếu tâm chẳng thành kính, dù suốt ngày ghi công, chép lỗi, cũng chỉ là hư văn!</p><p class="mb-0">Ở nơi đây chưa có sách Công Quá Cách, nhưng theo tôi thấy, chỉ nên chú trọng lòng thành, giữ lòng kính, trong suốt mười hai thời, chẳng có một niệm hời hợt, một tướng lười nhác, xao nhãng. Ðối xử với thế nhân chỉ giữ lòng trung thứ (trung hậu và khoan dung)thì tự nhiên trong hết thảy lúc, hết thảy chỗ, ác niệm chẳng thể khởi từ đâu được. Giả như do túc tập sai khiến, ngẫu nhiên ác niệm phát sanh, vì luôn ôm ấp lòng thành kính, trung thứ, sẽ tự có thể hễ niệm khởi liền nhận biết ngay. Hễ đã giác thì ác niệm liền không, quyết chẳng đến nỗi để nó tăng trưởng khiến cả ba nghiệp phải xuôi theo.</p><p class="mb-0">Sở dĩ kẻ tiểu nhân dối làm lành chứ thật sự là làm ác, là do nghĩ rằng người khác chẳng biết tới. Họ chẳng hiểu rằng người chẳng biết họ chỉ là những phàm phu trong thế gian mà thôi! Nếu là bậc thánh nhân đắc đạo, cố nhiên sẽ biết họ tường tận. Thiên địa, quỷ thần dù chưa đắc đạo, nhưng do được báo Tha Tâm Thông nên cũng sẽ biết họ tường tận. Huống hồ là Thanh Văn, Duyên Giác, Bồ Tát, chư Phật! Tha Tâm Ðạo Nhãn của các vị ấy thấy trọn tam thế như nhìn vật đang đặt trong lòng bàn tay. Muốn không ai biết thì chỉ có mình không biết mới được mà thôi!</p><p class="mb-0">Nếu chính mình đã biết thì tất nhiên thiên địa, quỷ thần, Phật, Bồ Tát v.v... không vị nào là chẳng biết, chẳng thấy cả! Nếu biết nghĩa này, dù ở trong phòng tối, nhà kín cũng chẳng dám biếng trễ, xao nhãng; dù ở nơi người khác không biết đến vẫn chẳng dám manh nha làm ác bởi thiên địa, quỷ thần, chư Phật, Bồ Tát đều biết. Nếu chẳng biết hổ thẹn nhưng hiểu được nghĩa này rồi thì cũng sẽ hổ thẹn không cùng vậy; huống hồ là người chân thật tu hành ư?</p><p class="mb-0">Vì thế muốn ít phạm lỗi thì phải bắt đầu từ chỗ sợ thánh phàm cùng biết, cùng thấy. Xem gương tiên triết ăn canh, nhìn tường, dù ở một mình hành vi chẳng cẩu thả, chẳng thẹn với bóng áo20 , vẫn còn là những cách nói thiển cận ước theo sự thấy biết của thế gian đó thôi! Thật ra, bản thể tâm ta cùng bản thể mười phương pháp giới tương hợp khít khao. Do ta mê nên sự thấy biết bị hạn cuộc trong một thân. Mười phương pháp giới thánh nhân triệt chứng pháp giới tạng tâm sẵn có trong tự tâm nên hết thảy hữu tình trong pháp giới khởi tâm động niệm, các ngài đều hay biết cả. Vì sao thế? Do cùng bẩm thọ Chân Như, tự - tha chẳng hai vậy. Nếu biết nghĩa này thì sẽ tự sợ hãi, kiêng dè, giữ lòng thành kính, thoạt đầu phải gắng sức dứt vọng, lâu ngày vọng sẽ chẳng khởi được nữa.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Việc giảm thiểu lầm lỗi thật sự là công phu thiết yếu của cả Nho lẫn Phật. Ông Cừ Bá Ngọc đến năm năm mươi tuổi, thấy cả bốn mươi chín năm trước mình đều sai trái. Nếu ai nói muốn bớt lỗi nhưng chưa làm được, thì nên biết là phải thật sự dụng công nơi ý, chứ chẳng phải hễ thân khẩu vừa phát động liền có lỗi đâu! Tại gia cư sĩ hằng ngày cùng người cư xử phải luôn đề phòng trong mỗi khắc. Nếu không, chẳng những ý nghiệp không tịnh mà thân khẩu cũng thành ra ô uế, bất tịnh. Muốn cả mình lẫn người cùng được lợi thì không gì bằng lấy những hành vi của vị danh nhân đã nói ở trên (tức Cừ Bá Ngọc) làm khuôn phép, gương mẫu vậy.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Muốn học theo Phật, Tổ liễu sanh tử thì phải bắt đầu từ việc hổ thẹn, sám hối, dứt ác, tu thiện, ăn chay, tự răn nhắc, ý thật chân thành, thiết tha. Phải thực sự tu tập, tận lực thực hành. Nếu không chỉ trở thành vọng ngữ trong các thứ hư dối. Biết chẳng khó, làm được mới khó. Mấy kẻ thông minh trong thế gian đều chỉ nói được, nhưng không làm được. Trọn một đời này, uổng công vào núi báu, trở về tay không. Ðáng xót, đáng tiếc thay! Ðáng xót, đáng tiếc thay!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Phàm phu còn mê, tín tâm bất định; vì thế có tật lắm phen tin rồi lại ngờ, lắm phen đã tu rồi lại tạo nghiệp, cũng là do người dạy ban đầu không hiểu đạo đến nơi đến chốn. Nếu lúc ban đầu, chỉ từ nhân quả thiển cận mà khởi sự sẽ chẳng đến nỗi bị điên đảo, mê hoặc như thế. Ðối với những tội cũ, dù rất sâu nặng, hãy nên chí tâm sám hối, sửa đổi thói xưa, tu tập từ nay, dùng chánh tri kiến tu tập Tịnh nghiệp, dốc chí tự lợi, lợi tha thì tội chướng như sương tiêu tan, bầu trời chân tánh sáng rạng. Vì thế, kinh nói: “Thế gian có hai hạng người mạnh mẽ: một là người chẳng tạo tội; hai là đã tạo tội rồi lại có thể sám hối”.</p><p class="mb-0">Một chữ Hối phải từ tâm khởi. Tâm chẳng thật sám hối, có nói gì cũng vô ích. Ví như chỉ đọc toa thuốc, chứ chẳng uống thuốc, nhất định chẳng hy vọng gì lành bệnh được. Còn nếu theo toa uống thuốc, sẽ tự được lành bệnh, thân an. Ðiều đáng ngại là lập chí chẳng vững, một nóng mười lạnh thì chỉ uổng mang hư danh, không mảy may lợi ích thật sự.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Cảnh không tự tánh, tổn hại hay lợi ích toàn do người. Ba nghiệp, bốn oai nghi (đi, đứng, nằm, ngồi) thường giữ như “tứ vật” (bốn điều đừng) của Nhan Uyên. Ngũ giới, thập thiện khác gì “tam tỉnh” (ba điều tự cảnh tỉnh) của Tăng tử. Trong nhà tối tuy không ai thấy nhưng thiên địa, quỷ thần đều biết. Niệm mới manh nha nhưng tội phước ẩn nhiệm đã rạch ròi như trời với vực. Nếu thường tu tỉnh được như thế thì tất cả hành động đều là thiện, ác chẳng sanh từ đâu được. Ðây chính là quy mô sâu rộng của chánh tâm thành ý, chớ nói là nhà Phật phiền toái, chẳng giản dị, nhanh tắt như Nho gia!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Người niệm Phật đối với sự sự phải trung thứ, tâm tâm luôn đề phòng tội khiên. Biết lỗi liền sửa, thấy điều nghĩa mạnh mẽ làm ngay thì mới hợp với Phật. Người như thế quyết định vãng sanh. Nếu chẳng như thế là trái nghịch với Phật, quyết khó cảm thông!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Kinh Pháp Hoa nói: “Tam giới không yên, hệt như nhà cháy. Các khổ đầy dẫy, thật đáng kinh sợ”. Vì thế, để thành tựu con người, trời phải có khổ, có vui, có nghịch, có thuận, có phước, có họa, vốn chẳng nhất định. Nhưng người trong hoàn cảnh ấy nếu có cái nhìn thấu suốt sẽ thấy không khổ, không vui, không nghịch, không thuận, không họa, không phước. Vì thế, quân tử vui biết mệnh trời, trên chẳng oán trời, dưới chẳng trách người, an vui theo hoàn cảnh, không lúc nào là chẳng tự tại tiêu dao!</p><p class="mb-0">Vì thế họ chẳng phú quý mà hành như đang hưởng phú quý (chữ Hành ở đây hàm ý ung dung, tự tại. Phú là cứu giúp khắp mọi người bần cùng. Quý là tận tụy với vua, giúp đỡ dân), chẳng bần tiện mà hành như bần tiện (nếu trong nhà không tiền của, thân chưa ra làm quan thì thanh bần giữ khí tiết, chẳng dám làm bậy), chẳng phải mọi rợ mà hành xử như mọi rợ (ý nói: Nếu vì lòng tận trung bị sàm tấu, bị vua biếm truất ra miền xa như các tỉnh Vân Nam, Quý Châu, Lưỡng Quảng (Quảng Ðông - Quảng Tây), Hắc Long Giang v.v... thì tâm bình, khí hòa, trên chẳng oán vua, dưới chẳng hận người sàm tấu, tự coi mình giống như người dân đang sống tại những vùng ấy), chẳng hoạn nạn mà hành như đang hoạn nạn (nếu như chẳng những bị đày, còn bị trừng phạt. Nhẹ thì bị đánh đập, giam cầm, nặng thì bị chém đầu, phanh thây, hoặc đến nỗi diệt tộc. Nhưng vẫn cứ chẳng oán vua, chẳng hận gian đảng. Nếu tự mình làm được như thế, khi gặp người gieo vạ còn giữ được như thế, huống hồ khi trời gieo vạ, há có nên oán hận chăng? Người như vậy người yêu mến, trời bảo vệ, ngay trong đời này hoặc trong đời sau, hoặc con cháu người đó nhất định sẽ hưởng phước báo vô cùng xứng với đức ấy).</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Phàm là người bỏ lỗi theo lành và tu Tịnh nghiệp, chỉ quý ở chỗ chân thành, tối kỵ giả dối. Chẳng được ngoài mặt phô trương cái danh làm lành tu hành, trong lòng bất trung, bất thứ. Ông Cừ Bá Ngọc năm năm mươi tuổi thấy bốn mươi chín năm trước mình toàn làm quấy. Có vậy mới mong thành thánh, thành hiền, học Phật, học Tổ, là bậc danh giáo công thần, là con đích thực của đức Như Lai. Vì thế, tôi chẳng quan tâm đến kẻ Tăng, người tục ấy là thành đạt hay cùng quẫn chi cả!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Niệm Phật cầu sanh Tây Phương, phải biết nhân hiểu quả. Hành vi nơi thân, ý niệm nơi tâm phải hợp với Phật. Nếu trái nghịch Phật, dù có niệm Phật cũng khó vãng sanh vì chẳng cảm ứng đạo giao vậy! Nếu có thể sanh lòng hổ thẹn lớn lao, sửa lỗi như trừ ghẻ độc, lập chí như giữ bạch ngọc thì vạn người chẳng sót một ai đều được vãng sanh cả!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Nói về những quy luật phải giữ ngoài việc ăn chay trường niệm Phật là nói đến việc chăm chắm bền lòng hiếu thuận, thành kính giữ trọn vẹn luân thường, đừng làm các điều ác, vâng làm các điều lành. Tâm nghĩ, niệm khởi chẳng hề tà vạy, khuất khúc và hư ngụy. Làm việc cho người phải tận hết trách nhiệm. Gặp người hữu duyên, khuyên họ nhập đạo. Các hành tướng như vậy chẳng cần phải thuật đủ. Chỉ siêng xem Ấn Quang Văn Sao và An Sĩ Toàn Thư sẽ tự biết.</p><p class="mb-0">Phải biết rằng: là đệ tử Phật, phàm làm gì phải vượt trội hơn hành vi thế tục thì chính mình mới đạt được lợi ích chân thật, khiến cho người khác trông thấy làm lành theo. Nếu miệng nói tu hành, trong tâm chẳng lành, đối với cha mẹ, anh em và hết thảy người đời chẳng trọn hết bổn phận thì người như thế gọi là “ngụy thiện nhân”! Nhân địa đã giả dối, làm sao đạt lợi ích thật sự? Cái học của thánh hiền đều bắt đầu từ “cách vật trí tri, thành ý chánh tâm”; huống muốn liễu sanh thoát tử, siêu phàm nhập thánh lại chẳng như thế ư? Về ý nghĩa của “cách vật trí tri” nên xem lời tựa bản in lại sách chú giải Tứ Thư của ngài Ngẫu Ích và lời tựa cuốn Liễu Phàm Tứ Huấn.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Các việc ác và các điều thiện đều là dựa trên tâm địa mà luận, chứ chẳng phải chỉ nói về sự tướng mà thôi. Trong tâm đã chẳng khởi ác thì toàn thể là thiện, niệm ấy là Phật, công đức hơn hẳn người thường trăm ngàn vạn lần. Muốn cho cõi lòng chỉ thiện không ác thì trong hết thảy lúc, hết thảy nơi, hãy nên giữ lòng thành kính như đối trước trời Phật mới hòng đạt được. Nếu tâm vừa mới phóng túng thì các ý niệm chẳng đúng pháp sẽ theo đó mà khởi!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Niệm Phật phải khéo phát tâm. Tâm làm chủ việc tu trì. Tâm nếu phù hợp với bốn hoằng thệ nguyện thì niệm Phật một câu, làm một điều lành, công đức vô lượng vô biên; huống hồ là ba nghiệp thân - khẩu - ý luôn đặt nơi niệm Phật lợi sanh?</p><p class="mb-0">Nếu tâm chỉ cầu tự lợi, chẳng mong lợi người, dù làm nhiều việc vẫn đạt được công đức rất ít. Huống hồ lại còn có ý khuynh đảo người, hại người, và tâm tự khoe khoang, hợm hĩnh thì việc mình niệm Phật đó, việc mình làm đó dù chẳng phải hoàn toàn không công đức, nhưng trong trăm ngàn vạn ức phần, mình chỉ thật sự đạt được một phần rưỡi thôi! Thế nhưng tội lỗi của ác niệm cũng lại chẳng ít. Bởi vậy, người tu hành ai nấy phải khéo phát tâm, chứ chẳng riêng gì người niệm Phật!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Phải biết rằng Phật pháp vốn chẳng lìa thế gian. Tất cả những bạn trong liên xã ai nấy đều phải trọn vẹn bổn phận của mình. Như cha hiền con hiếu, anh rộng lượng, em cung kính, chồng xướng vợ theo, chủ nhân từ, tớ trung thành v.v... Lại phải đừng làm các điều ác, vâng làm các điều lành, kiêng giết, phóng sanh, chẳng ăn mặn, uống rượu, ngăn điều tà, giữ lòng thành, khắc kỷ, giữ lễ, tự lợi, lợi tha; lấy những việc như vậy làm trách nhiệm của mình. Như thế thì nền tảng vững vàng, ngay ngắn, đáng thọ pháp nhuận. Nếu có đủ lòng tin chân thành, nguyện thiết tha, ắt sẽ vãng sanh thượng phẩm.</p><p class="mb-0">Kẻ ngu trong đời phần nhiều thường không tu hành thật sự, chỉ mong được cái hư danh là tu hành chân thật. Vì thế, bày ra đủ mọi cách tô son trát phấn thành ra những trò trông giống như thật nhưng chỉ là giả, chỉ mong người khác khen ngợi mình. Tâm hạnh họ đã dơ bẩn quá đỗi, dù có tu trì cũng bị tâm ấy làm bẩn, quyết khó được lợi ích chân thật. Ðấy gọi là “háo danh ố thật” (thích danh ghét thật), là điều đại kỵ bậc nhất cho việc tu hành.</p><p class="mb-0">Nếu ai thực hiện những điều nên làm đã nói ở phần trước, không có những điều nên tránh như đã nói ở phần sau, người ấy là người hiền trong thế gian, là bậc Khai Sĩ trong Phật pháp. Dùng thân mình làm gương cho mọi người, từ trong nhà ra đến làng xóm, từ làng xóm đến thành ấp, cho đến toàn quốc và tứ thiên hạ thì lễ nghĩa hưng thịnh, can qua vĩnh viễn ngưng dứt, từ thiện nẩy nở, tai hại chẳng sanh, mới hòng thiên hạ thái bình, nhân dân an lạc!</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Ðã niệm Phật cầu sanh Tây Phương thì phải phát tâm từ bi, hành phương tiện sự, dứt tham - sân - si, tránh giết - trộm - dâm, tự lợi, lợi người mới hợp ý Phật. Nếu không, tâm trái với Phật, cảm ứng đạo giao bị gián cách, chỉ gieo nhân đời sau, khó được quả hiện đời. Nếu chí thành niệm Phật, hạnh hợp tâm Phật, tâm khẩu tương ứng thì người như thế đến lúc lâm chung, A Di Ðà Phật và các thánh chúng tất nhiên hiện đến tiếp dẫn vãng sanh Tây Phương.</p><p class="mb-0">Một phen sanh về Tây Phương liền siêu phàm nhập thánh, liễu sanh thoát tử, vĩnh viễn lìa khỏi các khổ, chỉ hưởng các vui. Ðấy là toàn cậy vào Phật lực, chẳng bàn đến công đức là cạn hay sâu, có Hoặc hay không Hoặc! Chỉ đầy đủ lòng tin chân thành, nguyện thiết tha, quyết định vạn người chẳng sót một.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Người học đạo an tâm lập hạnh ắt phải chất trực, trung chánh, chẳng được có mảy may thiên lệch, tư vị, cong vẹo nào. Nếu có chút thiên lệch, tư vị, cong vẹo nào sẽ giống như cái cân có mấu cân chẳng chuẩn, cân các vật nặng nhẹ đều sai! Như tấm gương thể chất chẳng sạch, chiếu các vật đẹp xấu chẳng đúng. Sai chỉ hào ly, mất cả ngàn dặm. Sai lầm lan truyền, không sao dứt được.</p><p class="mb-0">Vì thế, kinh Lăng Nghiêm nói: “Thập phương Như Lai đồng một đạo nên xuất ly sanh tử đều dùng trực tâm”. Do tâm lẫn lời nói đều ngay thẳng như thế cho đến địa vị Chung Thỉ, trong khoảng thời gian ấy vĩnh viễn không có các tướng ủy khúc. Kinh Thư nói: “‘Nhân tâm nguy ách, đạo tâm tế nhị, ròng chuyên một mối, đừng chấp hai bên”.</p></div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 space-y-4 dark:border-primary-900 dark:bg-primary-950/30"><p class="mb-0 font-semibold text-primary-700 dark:text-primary-300">* Quán kinh dùng hiếu dưỡng phụ mẫu, phụng sự sư trưởng, từ tâm chẳng giết, tu thập thiện nghiệp và thọ trì Tam Quy, các giới: Cụ Túc... chẳng phạm oai nghi, phát Bồ Ðề tâm, tin sâu nhân quả, đọc tụng kinh điển Ðại Thừa để khuyến tấn hành giả dùng đó làm chánh nhân cho Tịnh nghiệp. Với mười một điều này, chỉ có một điều “dùng tín nguyện sâu xa, hồi hướng vãng sanh” thì đều được như nguyện.</p></div>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
    <h3 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Chú thích:</h3>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/50 p-5 space-y-2 text-base text-text-secondary dark:border-primary-900 dark:bg-primary-950/20"><p class="mb-0">20 . Nguyên văn: “Kiến tiên triết ư canh tường, thận độc tri khâm ảnh”. Canh tường là điển tích nói về vua Ngu Thuấn do hâm mộ đức hạnh của vua Ðường Nghiêu nên trong suốt ba năm ăn canh thấy bóng vua Nghiêu hiện trong bát canh, ngồi thấy bóng vua Nghiêu hiện trên tường. Ðời sau thường dùng chữ “canh tường” để chỉ lòng cung kính, chí thành đến cùng cực. “Thận độc” là ở một mình, hành vi luôn dè dặt, chẳng cẩu thả. “Khâm ảnh” là bóng chiếc áo, lấy từ thành ngữ “khâm ảnh vô quý” (chẳng thẹn với bóng áo). Như vậy “thận độc khâm ảnh” ngụ ý hành vi luôn cẩn thận, nghiêm cung, không hề phải hổ thẹn với ai, dù ngay cả với bóng của chính mình.</p></div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo văn bản, khi gặp nghịch cảnh hoặc tật bệnh triền miên, người tu học nên có thái độ và tư duy như thế nào?",
    "options": {
      "a": "Tìm cách oán trời trách người và cầu mong ngay lập tức đạt được đại phú đại quý.",
      "b": "Tập trung vào trường thanh sắc danh lợi để quên đi những nỗi đau đớn về thể xác.",
      "c": "Coi thân là gốc khổ, lấy bệnh làm thuốc để mau cầu xuất ly và dốc lòng tu Tịnh nghiệp.",
      "d": "Bỏ qua việc tu hành vì cho rằng nhân quả là hư huyễn và Phật pháp không thiêng."
    },
    "answer": "c"
  },
  {
    "question": "Trích dẫn câu nói của Mạnh Tử về việc 'Trời muốn giao trách nhiệm lớn cho ai...' trong bài viết nhằm mục đích gì?",
    "options": {
      "a": "Khuyên con người nên tránh xa mọi gian khổ và tìm kiếm cuộc sống an nhàn.",
      "b": "Giải thích rằng nghịch cảnh là sự thử thách giúp rèn luyện tâm chí, giúp phàm phu luyện tánh Nhẫn và thành tựu Tịnh nghiệp.",
      "c": "Chứng minh rằng phàm phu không thể gánh vác trách nhiệm lớn nếu thiếu của cải.",
      "d": "Đẩy mạnh việc tìm kiếm tước vị cao sang trong thế gian bằng mọi giá."
    },
    "answer": "b"
  },
  {
    "question": "Tác giả dẫn gương ông Cừ Bá Ngọc và Khổng Tử để nhấn mạnh điều gì trong công phu tu tập?",
    "options": {
      "a": "Ý thức về sự hoàn hảo không lỗi lầm của bậc thánh hiền ngay từ trẻ.",
      "b": "Tầm quan trọng của việc đạt đến địa vị xã hội cao trước khi học đạo.",
      "c": "Việc chỉ cần học thuộc từ chương sách vở mà không cần quan tâm đến tâm tính.",
      "d": "Sự cần thiết của việc liên tục tự kiểm điểm, nhận ra sai lầm và không ngừng dứt ác tu thiện."
    },
    "answer": "d"
  },
  {
    "question": "Tại sao việc ghi chép công lỗi (Công Quá Cách) hay thực hành dứt ác làm lành chỉ thực sự có hiệu quả khi có 'lòng thành kính'?",
    "options": {
      "a": "Vì lòng thành kính giúp người tu nhanh chóng đạt được danh tiếng trong xã hội.",
      "b": "Vì Công Quá Cách là phương pháp do Nho gia tạo ra nên Phật tử không cần áp dụng.",
      "c": "Vì nếu thiếu lòng thành kính và trung thứ thì việc ghi chép chỉ là hư văn, ác niệm vẫn có thể phát sinh.",
      "d": "Vì thiên địa quỷ thần chỉ quan tâm đến hình thức bên ngoài chứ không thấu suốt nội tâm."
    },
    "answer": "c"
  },
  {
    "question": "Theo văn bản, tại sao dù ở trong phòng tối hay nơi không ai thấy, người chân thật tu hành vẫn không dám làm ác hay biếng trễ?",
    "options": {
      "a": "Vì bản thể tâm ta tương hợp với pháp giới, chư Phật, Bồ Tát, thiên địa quỷ thần đều thấy biết rõ qua Tha Tâm Thông và Chân Như.",
      "b": "Vì luật pháp thế gian có thể trừng phạt họ bất cứ lúc nào.",
      "c": "Vì sợ bị người thế gian phát hiện và chê bai.",
      "d": "Vì họ lo lắng bị mất các tước vị và tài sản ở thế hệ sau."
    },
    "answer": "a"
  },
  {
    "question": "Cụm từ 'háo danh ố thật' trong bài viết dùng để chỉ đối tượng nào?",
    "options": {
      "a": "Bậc Khai Sĩ dùng thân mình làm gương cho người khác noi theo.",
      "b": "Những người chân thành sám hối và dốc lòng cầu sanh Tây Phương.",
      "c": "Kẻ ngu không tu hành thật sự, chỉ bày ra các trò giả dối để mong được người khác khen ngợi.",
      "d": "Những người hiền trong thế gian luôn hết lòng giúp đỡ người bần cùng."
    },
    "answer": "c"
  },
  {
    "question": "Theo tác giả, điều kiện then chốt nào giúp người niệm Phật chắc chắn được vãng sanh Tây Phương Cực Lạc?",
    "options": {
      "a": "Phải tích lũy thật nhiều của cải để làm việc từ thiện quy mô lớn.",
      "b": "Chỉ cần niệm Phật nhiều mà không cần quan tâm tâm hạnh có hợp với Phật hay không.",
      "c": "Có đầy đủ lòng tin chân thành, nguyện thiết tha, chí thành niệm Phật và tâm hạnh phù hợp với tâm Phật.",
      "d": "Phải trốn tránh mọi bổn phận thế gian để vào núi sâu tu tập."
    },
    "answer": "c"
  },
  {
    "question": "Mối quan hệ giữa Phật pháp và việc thực hiện bổn phận thế gian được giải thích như thế nào trong bài?",
    "options": {
      "a": "Người học Phật phải từ bỏ hoàn toàn các mối quan hệ gia đình và xã hội.",
      "b": "Việc làm tròn bổn phận gia đình sẽ cản trở con đường đạt được Tịnh nghiệp.",
      "c": "Chỉ cần lo tu niệm Phật, các bổn phận xã hội không mang lại lợi ích gì.",
      "d": "Phật pháp không lìa thế gian, đệ tử Phật phải trọn vẹn bổn phận làm người như cha hiền, con hiếu, trung thành, giữ tròn luân thường."
    },
    "answer": "d"
  },
  {
    "question": "Lời dạy trong kinh Lăng Nghiêm được trích dẫn 'xuất ly sanh tử đều dùng trực tâm' có nghĩa là gì đối với người học đạo?",
    "options": {
      "a": "Chỉ cần niệm Phật bằng miệng, tâm có cong queo cũng không ảnh hưởng.",
      "b": "Phải sống khéo léo, khuất khúc để tránh những va chạm trong xã hội.",
      "c": "Tâm và lời nói phải ngay thẳng, chất trực, trung chánh, không được thiên lệch hay dối trá.",
      "d": "Cần phải dùng các thủ đoạn tinh vi để thu phục lòng người."
    },
    "answer": "c"
  },
  {
    "question": "Theo tác giả, yếu tố nào là chủ quyết định công đức lớn hay nhỏ trong việc tu trì và niệm Phật?",
    "options": {
      "a": "Việc thông thuộc các từ chương và lý luận Nho học.",
      "b": "Việc nhận được sự tán thán và khen ngợi của người đời.",
      "c": "Số lượng câu niệm Phật và số tiền cúng chùa.",
      "d": "Sự phát tâm của bản thân: nếu phát tâm vì bốn hoằng thệ nguyện và lợi sanh thì công đức vô lượng, nếu chỉ cầu tự lợi hoặc hại người thì công đức rất ít."
    },
    "answer": "d"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-11-iii-3-luan-ve-viec-gin-long-lap-pham',
  slug: 'bai-11-iii-3-luan-ve-viec-gin-long-lap-pham',
  title: '3. Luận về việc gìn lòng lập phẩm',
  type: 'article',
  status: 'published',
  order: 4,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Gìn_Lòng_Lập_Phẩm.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Gìn_Lòng_Lập_Phẩm.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/lTWlOLN-PEg',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4eSLoKjPiPw1kY2L0wWmgj?si=gJNZF4RCR1qhuVbuJ24NGw',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận về việc gìn lòng lập phẩm',
    passPercentage: 70,
    questions,
  },
}

export default lesson
