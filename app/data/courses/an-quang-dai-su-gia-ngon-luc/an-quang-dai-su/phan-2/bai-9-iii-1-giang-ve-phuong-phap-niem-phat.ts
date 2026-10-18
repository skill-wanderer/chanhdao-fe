import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/3.chi-day-phuong-phap-tu-tri/1.giang-ve-phuong-phap-niem-phat'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">1. Giảng về phương pháp Niệm Phật</h2>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Ðã có lòng tin chân thành, nguyện thiết tha thì hãy nên tu chánh hạnh Niệm Phật. Lấy Tín - Nguyện để dẫn đường, lấy niệm Phật làm chánh hạnh. Ba thứ Tín - Nguyện - Hạnh chính là tông yếu của pháp môn Niệm Phật. Có Hạnh nhưng không có Tín - Nguyện sẽ chẳng thể vãng sanh. Có Tín - Nguyện nhưng thiếu Hạnh cũng chẳng thể vãng sanh. Ba thứ Tín - Nguyện - Hạnh đầy đủ không thiếu sẽ quyết định được vãng sanh. Ðược vãng sanh hay không toàn là do có Tín - Nguyện hay không, phẩm vị cao hay thấp toàn là do công trì danh sâu hay cạn. Về chánh hạnh niệm Phật nên tùy sức mỗi người mà lập, chẳng thể chấp chặt một bề. Nếu thân mình không bận việc, cố nhiên nên từ sáng đến tối, từ đêm đến sáng, đi, đứng, nằm, ngồi, nói năng, im lặng, động, tịnh, ăn cơm, mặc áo, đại tiện, tiểu tiện, trong hết thảy thời, hết thảy chỗ, giữ sao cho một câu hồng danh thánh hiệu chẳng rời tâm, miệng! Nếu rửa ráy, súc miệng thanh tịnh, áo mũ chỉnh tề và nơi chốn thanh tịnh thì niệm Phật ra tiếng hoặc niệm thầm đều được cả. Còn lúc ngủ nghỉ, lúc thân hình hở hang, tắm gội, đại tiểu tiện, cũng như khi đến chỗ dơ bẩn chẳng sạch, chỉ nên thầm niệm, đừng niệm ra tiếng. Thầm niệm cũng có cùng một công đức với niệm ra tiếng. Niệm ra tiếng chẳng cung kính. Chớ bảo ở những chỗ ấy chẳng thể niệm Phật. Phải biết là ở những nơi ấy, chẳng được niệm ra tiếng mà thôi. Hơn nữa, lúc nằm ngủ nếu niệm ra tiếng chẳng những không cung kính lại còn bị tổn khí. Chẳng thể không biết điều này!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Dù là niệm Phật lâu ngày chẳng hề gián đoạn, nhưng mỗi sáng chiều nên hướng về Phật lễ bái. Lễ xong, trước hết, niệm một biến kinh A Di Ðà, ba biến chú Vãng Sanh; đoạn niệm tám câu kệ tán Phật: “A Di Ðà Phật thân kim sắc...” Niệm kệ xong, niệm“nam mô Tây Phương Cực Lạc thế giới đại từ đại bi A Di Ðà Phật”. Tiếp đó, niệm sáu chữ “nam mô A Di Ðà Phật” một ngàn lần hoặc năm trăm lần, nên vừa nhiễu Phật vừa niệm. Nếu chẳng tiện nhiễu Phật thì quỳ, hoặc ngồi, hoặc đứng niệm đều được cả. Lúc niệm gần xong, bèn trở về chỗ, quỳ niệm Quán Âm, Thế Chí, Thanh Tịnh Ðại Hải Chúng Bồ Tát, mỗi danh hiệu ba lượt. Sau đấy mới niệm Tịnh Ðộ Văn phát nguyện hồi hướng vãng sanh. Khi niệm Tịnh Ðộ Văn phải nương theo văn nghĩa mà phát tâm. Nếu tâm chẳng nương theo văn sẽ thành ra uổng công đọc xuông, chẳng được lợi ích thật sự! Ðọc Tịnh Ðộ Văn xong niệm Tam Quy Y, lễ bái lui ra. Ðây là công khóa sáng, buổi tối cũng như vậy. Nếu muốn lễ bái nhiều hơn thì khi trở về chỗ, sẽ lễ Phật bao nhiêu lạy đó, xưng danh Bồ Tát chín lượt, lễ chín lạy. Lễ xong, phát nguyện hồi hướng. Hoặc lễ bái lúc niệm xong công khóa, miễn sao tiện cho mình là được. Nhưng phải khẩn thiết, chí thành, đừng làm lếu láo, qua loa. Bồ đoàn chẳng được cao quá, cao là chẳng cung kính! Nếu như công việc bộn bề, không lúc rảnh rỗi, thì sáng tối sau khi rửa ráy, súc miệng xong, nếu có tượng Phật thì nên lễ Phật ba lạy, đứng ngay, niệm nam mô A Di Ðà Phật. Hết một hơi là một niệm. Niệm đến mười hơi liền niệm Tiểu Tịnh Ðộ Văn, hoặc chỉ niệm bốn câu kệ “nguyện sanh Tây Phương Tịnh Ðộ trung...”. Niệm xong, lễ Phật ba lạy, lui ra. Nếu không có tượng Phật thì hướng về Tây xá lạy, chiếu theo cách trên mà niệm. Ðây là phép Thập Niệm do ngài Từ Vân Sám Chủ đời Tống vì hàng vương giả, đại thần quá bận rộn việc triều chánh, không rảnh để tu trì mà lập ra. Vì sao dạy niệm hết một hơi? Là vì chúng sanh tâm tán loạn, lại không rảnh để chuyên niệm. Lúc niệm như vậy, họ sẽ mượn khí để nhiếp tâm, tự tâm chẳng tán. Phải tùy theo hơi dài hay ngắn, chẳng được cưỡng niệm cho nhiều đến nỗi tổn khí. Lại chỉ nên niệm mười hơi, chẳng được niệm hai mươi, ba mươi hơi. Niệm nhiều hơi cũng tổn khí. Vì tán tâm niệm Phật khó được vãng sanh nên pháp này khiến cho tâm quy một chỗ, nhất tâm niệm Phật, quyết định vãng sanh. Số câu niệm tuy ít, công đức rất sâu. Người cực nhàn, kẻ cực bận đều có pháp tắc. Còn kẻ nửa nhàn, nửa bận hãy tự nên châm chước để lập thành pháp tắc tu trì.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Một pháp Niệm Phật chính là diệu pháp bậc nhất để bỏ trần lao, quay về giác, phản bổn quy nguyên. Ðối với người tại gia, pháp này lại càng thân thiết. Vì người tại gia, thân trong lưới trần, công việc đa đoan, đối với những việc như nhiếp tâm tham thiền, tụng kinh trong tịnh thất... do hoàn cảnh sẽ chẳng làm được nổi hoặc chẳng đủ sức. Chỉ có mình pháp Niệm Phật là thuận tiện nhất. Sáng tối đối trước Phật, tùy phận, tùy sức lễ bái, trì niệm, hồi hướng, phát nguyện. Ngoài ra thì đi, đứng, nằm, ngồi, nói năng, im lặng, động, tịnh, mặc áo, ăn cơm, hết thảy thời, hết thảy chỗ đều niệm được cả. Nhưng ở nơi sạch sẽ, lúc cung kính thì niệm ra tiếng hay niệm thầm đều được. Còn như ở những nơi chẳng sạch sẽ (như vào nhà tiêu chẳng hạn) hoặc nhằm lúc chẳng cung kính (chẳng hạn như đang nằm ngủ, tắm gội...) chỉ nên niệm thầm, chẳng nên niệm ra tiếng, chứ chẳng phải là ở những chỗ ấy, nhằm lúc ấy, không được niệm! Nằm ngủ niệm ra tiếng thì chẳng những không cung kính, lại còn bị tổn khí, lâu ngày thành bệnh. Công đức niệm thầm giống hệt công đức niệm bình thường. Ấy là: “Niệm ở đâu sẽ ở đó. Ngay thẳng cũng do đấy, mà điên đảo cũng bởi đấy”.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Ðối với những điều như: Muốn tâm chẳng tham sự vật bên ngoài, chuyên niệm Phật nhưng chẳng thể chuyên, cứ toan chuyên chuyện khác; chẳng thể niệm, cứ muốn niệm những sự khác; chẳng thể nhất tâm, cứ muốn nhất tâm nơi chuyện khác v.v... thì chẳng có pháp tắc kỳ đặc, áo diệu nào khác cả; cứ lấy một chữ Tử dán ngay trên trán, rủ xuống tận lông mày, tâm luôn nghĩ: “Ta là người nào mà từ vô thỉ mãi cho đến đời này đã tạo ác nghiệp vô lượng, vô biên. Giả sử ác nghiệp có thể tướng thì tận mười phương hư không chẳng thể chứa đựng nổi. Ðời trước do may mắn nào, nay được thân người, lại được nghe Phật pháp. Nếu chẳng nhất tâm niệm Phật cầu sanh Tây Phương, khi một hơi thở ra chẳng trở lại, quyết sẽ phải thọ khổ trong vạc sôi, lò than, rừng gươm, núi đao nơi địa ngục, chẳng biết phải trải qua mấy kiếp. Dù thoát địa ngục, lại đọa vào ngạ quỷ, bụng to như biển cả, họng bé như chiếc kim, đói khát bao kiếp dài lâu. Trong họng lửa cháy, chẳng được nghe đến tên chất tương hay nước, khó được no lòng chốc lát. Từ ngạ quỷ ra, lại làm súc sanh: bị người cưỡi cổ, hoặc gieo thân vào bếp núc nhà người. Dù được làm người, cũng ngu si, vô trí, coi tạo nghiệp là đức năng, coi tu thiện là gông cùm. Chẳng qua mấy mươi năm lại bị đọa lạc; trải qua kiếp số nhiều như cát bụi luân hồi lục đạo. Dù có muốn xuất ly, cũng chẳng biết làm sao!”. Nghĩ được như thế thì những việc mong muốn nói trên sẽ thành tựu được ngay. Bởi thế, ông Trương Thiện Hòa, Trương Chung Quỳ, lâm chung tướng địa ngục hiện, niệm Phật mấy tiếng liền tận mắt thấy Phật đến tiếp dẫn vãng sanh. Lợi ích như thế, trăm ngàn vạn ức pháp môn khác trong cả một đời giáo hóa của Ðức Phật đều không có. Tôi thường nói: “Cửu giới chúng ta rời pháp này thì trên là chẳng thể viên thành Phật đạo. Mười phương chư Phật bỏ pháp này thì dưới là chẳng thể lợi khắp quần sanh” chính là vì lẽ này.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Nếu niệm Phật tâm khó quy nhất thì nên nhiếp tâm niệm khẩn thiết, tâm sẽ tự có thể quy nhất. Tâm chẳng chí thành, muốn nhiếp tâm cũng chẳng được. Nếu đã chí thành, nhưng vẫn chưa thuần nhất thì hãy nên lắng tai nghe kỹ; chẳng luận là niệm ra tiếng hay niệm thầm, mỗi niệm đều phải từ tâm khởi, tiếng từ miệng thoát ra, âm thanh lọt vào tai (khi niệm thầm, miệng chẳng động, nhưng trong ấy vẫn có thanh tướng). Tâm và miệng niệm được rõ ràng, tách bạch; tai nghe cho rõ ràng, phân minh. Nhiếp tâm như thế vọng niệm sẽ tự dứt. Nếu sóng vọng tưởng vẫn còn trào dâng thì dùng ngay pháp Thập Niệm Ký Số, dốc toàn bộ sức lực của tự tâm đặt vào mỗi câu Phật hiệu thì vọng muốn khởi cũng chẳng đủ sức. Diệu pháp nhiếp tâm niệm Phật rốt ráo này các vị hoằng dương Tịnh Ðộ trước kia chưa nhắc đến vì căn tánh người thời ấy còn lanh lợi, chẳng cần phải làm vậy vẫn có thể quy nhất. Ấn Quang vì tâm khó chế phục, mới biết cách này mầu nhiệm, càng thực hành càng thấy hiệu nghiệm, chứ chẳng phải là tự tiện nói mò. Xin chia sẻ cùng những người độn căn trong khắp thiên hạ đời sau ngõ hầu vạn người tu, vạn người về. Pháp Thập Niệm Ký Số vừa nhắc đến đó như sau: Trong khi niệm Phật, từ một câu đến mười câu phải niệm cho phân minh, nhớ số phân minh. Niệm hết mười câu lại niệm từ một câu đến mười câu, chẳng được niệm hai mươi, ba mươi câu. Niệm câu nào nhớ câu nấy, chẳng được lần chuỗi, chỉ dựa vào tâm để nhớ. Nếu thấy khó nhớ cả mười câu thì chia ra làm hai hơi: từ câu thứ nhất đến câu thứ năm và từ câu thứ sáu đến câu thứ mười. Nếu vẫn chưa được, hãy niệm thành ba hơi: từ câu thứ nhất đến câu thứ ba, từ câu thứ tư đến câu thứ sáu, và từ câu thứ bảy đến câu thứ mười. Niệm cho rõ ràng, nhớ cho phân minh, nghe cho rành rẽ, vọng niệm không chỗ chen chân, lâu ngày sẽ tự được Nhất Tâm Bất Loạn. Phải biết là pháp Thập Niệm này nhiếp vọng giống như pháp Thập Niệm sáng chiều, chỉ có cách dụng công là khác nhau. Pháp Thập Niệm Sáng Chiều coi hết một hơi là một niệm, chẳng luận là số câu niệm Phật nhiều hay ít; còn cách này cứ một câu là một niệm. Cách kia chỉ có thể niệm mười hơi vào mỗi sáng, chiều; nếu niệm đến hai mươi, ba mươi hơi sẽ bị tổn khí thành bệnh. Cách này niệm một câu Phật hiệu, tâm biết là một câu; niệm mười câu Phật hiệu, tâm biết là mười câu. Từ một đến mười, rồi lại từ một đến mười. Suốt ngày niệm mấy vạn câu đều giống như thế. Chẳng những trừ được vọng, lại còn dưỡng thần rất hay. Dù niệm chậm hay nhanh, trọn chẳng trệ ngại. Từ sáng đến tối, không lúc nào chẳng thích hợp. So với cách lần chuỗi để nhớ số, lợi ích cách xa một trời một vực. Cách nhớ số bằng chuỗi khiến thân mệt, tinh thần động. Cách Thập Niệm Ký Số này khiến thân thong thả, tâm an nhàn. Chỉ những lúc làm việc khó nhớ nổi số thì cứ khẩn thiết niệm. Làm việc xong, lại nhiếp tâm nhớ số thì những ý tưởng lông bông qua lại sẽ theo nhau gom về chuyên chú nơi một cảnh Phật hiệu. Ðức Ðại Thế Chí nói: “Nhiếp trọn sáu căn, tịnh niệm tiếp nối, đắc tam-ma-địa, ấy là bậc nhất”. Kẻ lợi căn chẳng cần bàn đến, còn như bọn độn căn ta bỏ cách Thập Niệm Ký Số này lại mong “nhiếp trọn sáu căn, tịnh niệm tiếp nối” thật khó khăn lắm thay! Lại phải nên biết rằng cách nhiếp tâm niệm Phật này chính là pháp vừa cạn vừa sâu, vừa Tiểu vừa Ðại, chẳng thể nghĩ bàn! Chỉ nên ngửa tin lời Phật, chớ vì mình chưa hiểu đến nơi đến chốn bèn sanh ngờ vực, đến nỗi thiện căn nhiều kiếp do đây phải mất, chẳng thể tự rốt ráo đạt được lợi ích, thật là đáng buồn! Chỉ nên lần chuỗi niệm Phật trong hai lúc: đi hoặc đứng. Nếu tịnh tọa dưỡng thần, do tay động tinh thần chẳng thể an, lâu ngày thành bệnh. Pháp Thập Niệm Ký Số này, đi, đứng, nằm, ngồi đều thực hành được cả, nhưng lúc nằm chỉ nên niệm thầm, chẳng được niệm ra tiếng. Nếu niệm ra tiếng thì một là chẳng cung kính, hai là bị tổn khí. Hãy nhớ kỹ, nhớ chắc!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Ðã có lòng tin chân thành, nguyện thiết tha, phải nên chí tâm chấp trì sáu chữ thánh hiệu “nam mô A Di Ðà Phật”. Bất luận đi, đứng, nằm, ngồi, nói năng, im lặng, mặc áo, ăn cơm, và đại tiểu tiện v.v... đều chẳng lìa sáu chữ hồng danh (hoặc trì bốn chữ cũng được). Cần phải niệm sao cho toàn tâm là Phật, toàn Phật là tâm, tâm Phật chẳng hai, tâm Phật nhất như. Nếu có thể niệm tại đâu chú tâm tại đó, niệm đến cùng cực, tình mất sạch, tâm không, Phật hiện, sẽ chứng được tam muội ngay trong đời này. Ðến lúc lâm chung, sanh trong Thượng Thượng Phẩm, có thể nói là đã hoàn tất sự tu trì đến cùng cực vậy.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Lúc niệm Phật nên tùy nghi. Nay trong Niệm Phật đường của các tùng lâm đều niệm kinh A Di Ðà xong thì niệm chú Vãng Sanh ba biến hoặc một biến, rồi mới xướng kệ niệm Phật. Tán kệ xong, niệm tiếp “nam mô Tây Phương Cực Lạc thế giới đại từ đại bi A Di Ðà Phật” rồi nhiễu niệm. Phải đi nhiễu từ Ðông sang Nam, từ Tây sang Bắc. Ðấy là thuận tùng, là tùy hỷ. Thuận tùng mới có công đức. Tây Vực trọng nhất là đi nhiễu. Ở phương này, cùng thực hành cả hai cách lễ bái và đi nhiễu. Nếu đi từ Ðông sang Bắc, từ Tây sang Nam thì là “phản nhiễu” (đi nhiễu ngược chiều) sẽ mắc tội, chẳng thể không biết điều này! Nhiễu niệm một khắc rưỡi rồi ngồi thầm niệm. Ước chừng một khắc lại niệm Phật ra tiếng. Niệm xong, quỳ niệm Phật mười lần. Quan Âm, Thế Chí, Thanh Tịnh Ðại Hải Chúng, mỗi danh hiệu niệm ba lượt. Sau đấy mới niệm Phát Nguyện Văn. Người tại gia ngại thất nhỏ khó nhiễu niệm thì đứng, quỳ hay ngồi niệm đều được. Chỉ nên án theo tinh thần mình mà định, bất tất phải nhờ người khác lập pháp tắc cho mình.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Niệm Phật tuy quý ở tâm niệm, nhưng chẳng thể bỏ miệng tụng. Vì ba thứ thân - khẩu - ý hỗ trợ nhau. Nếu tâm ức niệm, nhưng thân chẳng lễ kính, miệng chẳng trì tụng thì cũng khó được lợi ích. Thế gian nhấc vật nặng còn phải dùng tiếng hò reo để trợ lực, huống là muốn nhiếp tâm để chứng tam muội ư? Vì thế, kinh Ðại Tập nói: “Niệm lớn thấy Phật lớn. Niệm nhỏ thấy Phật nhỏ”. Cổ đức bảo: “Niệm lớn tiếng sẽ hiện thân Phật lớn. Niệm nhỏ tiếng sẽ hiện thân Phật nhỏ”. Hàng phàm phu đầy dẫy triền phược, tâm nhiều hôn trầm, nếu chẳng nhờ vào sức thân khẩu lễ niệm mà mong được nhất tâm thật chẳng thể được!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Hòa Thượng Thiện Ðạo là hóa thân của đức Di Ðà, có đại thần thông, có đại trí huệ, nhưng khi hoằng khai, xiển dương Tịnh Ðộ, Ngài chẳng luận đến chỗ huyền diệu, chỉ chú trọng vào những điểm chân thật, thiết thực, bình thường để dạy người tu trì. Thuyết Chuyên Tạp Nhị Tu (hai đường lối chuyên tu và tạp tu) của Ngài dạy lợi ích vô cùng. Chuyên Tu nghĩa là thân nghiệp chuyên lễ (đi nhiễu và trong hết thảy chỗ đều chẳng phóng dật thì là thân nghiệp chuyên lễ), khẩu nghiệp chuyên xưng (hễ trì tụng kinh chú đều chí tâm hồi hướng, cũng có thể gọi là chuyên xưng), ý nghiệp chuyên niệm. Như thế thì vãng sanh Tây Phương vạn người chẳng sót một. Tạp Tu là kiêm tu các thứ pháp môn, hồi hướng vãng sanh. Do tâm chẳng thuần nhất nên khó được lợi ích; trong trăm người họa may được một hai, trong ngàn người may ra được ba bốn người vãng sanh! Ðấy là lời chân thành phát xuất từ miệng vàng, là lời phán định chắc như sắt ngàn đời chẳng đổi được.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Phát Nguyện Văn, văn tuy rộng lớn, nhưng phải chân thật phát nguyện từ nơi tâm mới gọi là Nguyện. Nếu không, tâm - miệng trái nhau, gọi là Nguyện sao được? Muốn nguyện được phước báo trong hiện đời cũng chẳng ngại gì. Muốn được phước huệ, đông con lắm cháu thì cứ cầu bằng cách chất chứa thật nhiều âm đức, rộng hành các phương tiện.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Niệm Phật chẳng thể bỏ qua hồi hướng. Hồi hướng chính là dùng miệng để phát khởi tín nguyện. Nhưng chỉ nên hồi hướng sau khi hoàn tất khóa tụng sáng tối và sau khi niệm Phật, tụng kinh giữa ngày xong. Niệm Phật thì nên niệm từ sáng đến tối chẳng gián đoạn, chỉ cần trong tâm có ý niệm nguyện được vãng sanh là đã luôn hồi hướng. Nếu cứ theo nghi thức tụng văn hồi hướng sẽ chẳng luôn luôn được như vậy. Các kinh Ðại Thừa, kinh nào cũng đều dạy chúng sanh thẳng đến Phật đạo; chỉ hận người tụng chẳng thành tâm niệm tụng, đến nỗi chẳng được lợi ích hoàn toàn.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Trong sinh hoạt hằng ngày, với tất cả những việc thiện nhỏ nhoi và các thiện căn tụng kinh, lễ bái đều đem những công đức ấy hồi hướng vãng sanh. Như thế thì hết thảy hạnh môn đều là Trợ Hạnh của Tịnh Ðộ. Giống như các hạt bụi tụ thành đất, các dòng chảy dồn lại thành biển rộng lớn sâu thẳm, ai có thể cùng tận được nổi! Nhưng phải phát Bồ Ðề tâm, thệ nguyện độ sanh, tất cả công đức tu trì hồi hướng cho khắp bốn ân, ba cõi pháp giới chúng sanh, như lửa thêm dầu, như mạ gặp mưa. Ðã kết sâu pháp duyên cùng hết thảy chúng sanh thì sẽ mau thành tựu hạnh Ðại Thừa thù thắng của chính mình. Nếu chẳng biết nghĩa này thì chỉ là sự hiểu biết của phàm phu, Nhị Thừa, dù tu diệu hạnh chỉ cảm được quả báo thấp kém!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Nên phát nguyện vào lúc niệm Phật sáng chiều xong (với pháp Thập Niệm sáng chiều cũng phải niệm Phật trước rồi mới phát nguyện). Hoặc là dùng bài Tiểu Tịnh Ðộ Văn để phát nguyện. Nếu thân tâm rảnh rỗi thì nên đọc bài Tịnh Ðộ Văn do Liên Trì đại sư soạn. Bài này văn từ, nghĩa lý châu đáo, hay nhất xưa nay. Phải biết rằng phát nguyện đọc văn là nương theo văn để phát nguyện, chứ chẳng phải chỉ đọc qua một lượt là đã phát nguyện đâu!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Với công khóa mỗi ngày, công khóa nào cũng đều nên hồi hướng cho pháp giới chúng sanh. Nếu đem công khóa này hồi hướng cho việc này, công khóa kia hồi hướng cho việc kia thì chẳng phải là không được, nhưng phải có lời phổ đồng hồi hướng thì mới tương hợp với ba thứ hồi hướng.</p>
    <p>Ba thứ hồi hướng là:</p>
    <ul class="list-none space-y-2 pl-0"><li>- Một là hồi hướng về Chân Như Thật Tế, tâm tâm khế hợp.</li><li>- Hai là hồi hướng Phật Quả Bồ Ðề, niệm niệm viên mãn.</li><li>- Ba là hết thảy pháp giới chúng sanh cùng sanh Tịnh Ðộ.</li></ul>
    <p>Ai nấy có chí riêng, người người có nghiệp riêng (nghiệp ở đây là thức nghiệp), nhưng tùy duyên tùy phận đều được vãng sanh cả, bất tất mọi người phải giống hệt nhau.</p>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo đoạn trích, yếu tố nào quyết định việc người tu theo pháp môn Niệm Phật có được vãng sanh hay không?",
    "options": {
      "a": "Khả năng tụng thuộc lòng tất cả các kinh điển Đại Thừa.",
      "b": "Việc niệm Phật luôn luôn phải niệm lớn tiếng ở mọi nơi.",
      "c": "Việc có đầy đủ lòng Tín và Nguyện thiết tha hay không.",
      "d": "Số lần lần chuỗi niệm Phật nhiều hay ít trong ngày."
    },
    "answer": "c"
  },
  {
    "question": "Vì sao khi nằm ngủ hoặc ở những nơi không sạch sẽ (như nhà tiêu, lúc tắm gội) người tu chỉ nên niệm thầm mà không niệm ra tiếng?",
    "options": {
      "a": "Vì niệm ra tiếng ở những nơi đó là không cung kính, đồng thời khi nằm niệm ra tiếng còn bị tổn khí lâu ngày thành bệnh.",
      "b": "Vì niệm thầm sẽ giúp xua đuổi các vọng tưởng nhanh hơn khi ở nơi bẩn.",
      "c": "Vì niệm thầm ở những nơi đó sẽ thu được công đức gấp đôi niệm ra tiếng.",
      "d": "Vì Đức Phật không thể nghe thấy lời niệm ra tiếng ở những nơi không thanh tịnh."
    },
    "answer": "a"
  },
  {
    "question": "Phép \"Thập Niệm Sáng Chiều\" do ngài Từ Vân Sám Chủ lập ra dành cho người cực kỳ bận rộn quy định một \"niệm\" được tính như thế nào?",
    "options": {
      "a": "Ghi nhớ nhẩm trong đầu đúng 100 câu Phật hiệu liên tục.",
      "b": "Niệm liên tục mươi phút không nghỉ ngơi.",
      "c": "Đếm đủ mươi câu Phật hiệu bằng cách lần một hạt chuỗi.",
      "d": "Niệm xong trọn một hơi thở (hơi dài hay ngắn tùy sức) được tính là một niệm."
    },
    "answer": "d"
  },
  {
    "question": "Phương pháp \"Thập Niệm Ký Số\" do Đại Sư Ấn Quang đề xướng có đặc điểm đếm số và ghi nhớ như thế nào?",
    "options": {
      "a": "Dùng tay lần chuỗi từ 1 đến 10 câu, mỗi ngày niệm hai mươi hoặc ba mươi hơi.",
      "b": "Vừa niệm vừa gõ mõ theo nhịp từ 1 đến 10 để tinh thần khỏi lay động.",
      "c": "Mỗi câu Phật hiệu là một niệm, dùng tâm nhớ từ 1 đến 10 câu rõ ràng rồi lặp lại, không dùng chuỗi hạt.",
      "d": "Chỉ niệm đúng 10 câu Phật hiệu vào buổi sáng và buổi tối rồi ngừng."
    },
    "answer": "c"
  },
  {
    "question": "Theo văn bản, việc lần chuỗi hạt để ghi số niệm Phật chỉ nên thực hiện trong những hoàn cảnh nào?",
    "options": {
      "a": "Lúc nằm nghỉ trên giường.",
      "b": "Mọi lúc đi, đứng, nằm, ngồi bất kỳ.",
      "c": "Lúc ngồi tĩnh tọa dưỡng thần.",
      "d": "Lúc đi hoặc đứng."
    },
    "answer": "d"
  },
  {
    "question": "Để đối trị tình trạng tâm hay tham việc bên ngoài, không thể chuyên nhất niệm Phật, tác giả khuyên người tu nên áp dụng mẹo quán tưởng nào?",
    "options": {
      "a": "Đọc thuộc lòng các bài kệ tham thiền của chư Tổ.",
      "b": "Quán tưởng đến của cải và danh vọng thế gian là mây khói.",
      "c": "Dán một chữ \"Tử\" (chết) ngay trên trán và luôn nghĩ đến cảnh khổ luân hồi, địa ngục nếu không vãng sanh.",
      "d": "Tập trung suy nghĩ về các cảnh giới tươi đẹp của chư Thiên."
    },
    "answer": "c"
  },
  {
    "question": "Khi thực hành đi nhiễu niệm Phật (nhiễu niệm) ở Niệm Phật đường, hướng đi nào là đúng chuẩn và mang lại công đức?",
    "options": {
      "a": "Đi ngược chiều kim đồng hồ từ Bắc sang Tây.",
      "b": "Đi từ Đông sang Bắc, rồi từ Tây sang Nam.",
      "c": "Tùy ý đi theo hướng nào cũng được miễn là tâm thấy thoải mái.",
      "d": "Đi thuận từ Đông sang Nam, từ Tây sang Bắc."
    },
    "answer": "d"
  },
  {
    "question": "Theo Hòa thượng Thiện Đạo được trích dẫn trong bài, sự khác biệt về hiệu quả vãng sanh giữa \"Chuyên Tu\" và \"Tạp Tu\" là gì?",
    "options": {
      "a": "Tạp tu giúp đạt phẩm vị cao hơn Chuyên tu nhờ tu nhiều pháp môn.",
      "b": "Chuyên tu vạn người tu vạn người vãng sanh; Tạp tu trăm người may ra được 1-2, ngàn người may ra được 3-4 người.",
      "c": "Cả hai đường lối đều có tỷ lệ vãng sanh ngang nhau nếu có lòng thành.",
      "d": "Chuyên tu dành riêng cho người xuất gia, còn Tạp tu dành cho người tại gia."
    },
    "answer": "b"
  },
  {
    "question": "Tại sao người tu Tịnh Độ cần đem tất cả các công đức làm việc thiện nhỏ nhặt hay tụng kinh, lễ bái hàng ngày để hồi hướng vãng sanh?",
    "options": {
      "a": "Vì nếu không hồi hướng thì các công đức thiện đó sẽ tự động biến mất.",
      "b": "Để mau chóng nhận được phước báo giàu sang và con cháu đông đúc ngay trong đời hiện tại.",
      "c": "Để các công đức đó trở thành Trợ Hạnh cho Tịnh Độ, tích tiểu thành đại như trăm sông dồn về biển lớn.",
      "d": "Vì kinh điển bắt buộc phải làm theo nghi thức chứ không có ý nghĩa thực tiễn."
    },
    "answer": "c"
  },
  {
    "question": "\"Ba thứ hồi hướng\" mà người tu hành cần tương hợp bao gồm những gì?",
    "options": {
      "a": "Hồi hướng về Chân Như Thật Tế, hồi hướng Phật Quả Bồ Đề, và hồi hướng hết thảy pháp giới chúng sanh cùng sanh Tịnh Độ.",
      "b": "Hồi hướng cho cõi Địa ngục, cõi Ngạ quỷ và cõi Súc sanh.",
      "c": "Hồi hướng cho bản thân, gia đình và thân quyến quá cố.",
      "d": "Hồi hướng phước đức, hồi hướng mưu sinh và hồi hướng sức khỏe."
    },
    "answer": "a"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-9-iii-1-giang-ve-phuong-phap-niem-phat',
  slug: 'bai-9-iii-1-giang-ve-phuong-phap-niem-phat',
  title: '1. Giảng về phương pháp Niệm Phật',
  type: 'article',
  status: 'published',
  order: 2,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Phương_pháp_niệm_Phật_nhất_tâm.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Con_Đường_Hoa_Sen.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/mw13IeO4JbA',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/11fOnUPMKOnaJwwvLI00gb?si=ujG7Gm3gTyuwx7P7w0C82w',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Giảng về phương pháp Niệm Phật',
    passPercentage: 70,
    questions,
  },
}

export default lesson
