import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div class="mb-8">
      <h2 id="muoi-phuong-chu-phat-tan-than-va-ho-niem" class="mt-0 mb-2 text-3xl font-bold text-primary-700 dark:text-primary-300">2.5. Mười phương chư Phật tán thán và hộ niệm</h2>
    </div>

    <div class="mb-8">
      <h3 id="chanh-van" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chánh Văn:</h3>
    <p>Này Xá-Lợi-Phất, như Ta hôm nay ngợi khen công đức lợi ích chẳng thể nghĩ bàn của đức Phật A Di Đà. Phương Đông cũng có đức Phật A-Súc-Bệ, Phật Tu-Di-Tướng, Phật Đại-Tu-Di, Phật Tu-Di-Quang, Phật Diệu-Âm. Hằng hà sa số những đức Phật như thế đều ở tại nước mình, hiện ra tướng lưỡi rộng dài trùm khắp ba ngàn thế giới rộng lớn mà nói lời thành thật rằng: "Chúng sinh các ngươi phải nên tin kinh: Xưng Tán Không Thể Nghĩ Bàn Công Đức Hết Thảy Chư Phật Sở Hộ Niệm Này".</p>
    <p>Này Xá-Lợi-Phất, thế giới phương Nam có đức Phật Nhật-Nguyệt-Đăng, Phật Danh-Văn-Quang, Phật Đại-Diệm-Kiên, Phật Tu-Di-Đăng, Phật Vô-Lượng-Tinh-Tấn. Hằng hà sa số những đức Phật như thế, đều tại nước mình, hiện ra tướng lưỡi rộng dài trùm khắp ba ngàn thế giới rộng lớn mà nói lời thành thật rằng: "Chúng sinh các ngươi phải nên tin kinh: Xưng Tán Không Thể Nghĩ Bàn Công Đức Hết Thảy Chư Phật Sở Hộ Niệm Này".</p>
    <p>Này Xá-Lợi-Phất, thế giới phương Tây có đức Phật Vô-Lượng-Thọ, Phật Vô-Lượng-Tướng, Phật Vô-Lượng-Tràng, Phật Đại-Quang, Phật Đại-Minh, Phật Bảo-Tướng, Phật Tịnh-Quang. Hằng hà sa số những đức Phật như thế, đều tại nước mình, hiện ra tướng lưỡi rộng dài trùm khắp ba ngàn thế giới rộng lớn mà nói lời thành thật rằng: "Chúng sinh các ngươi phải nên tin kinh: Xưng Tán Không Thể Nghĩ Bàn Công Đức Hết Thảy Chư Phật Sở Hộ Niệm Này".</p>
    <p>Này Xá-Lợi-Phất, thế giới phương Bắc có đức Phật Diệm-Kiên, Phật Tối-Thắng-Âm, Phật Nan-Trở, Phật Nhật-Sinh, Phật Võng-Minh. Hằng hà sa số những đức Phật như thế, đều tại nước mình, hiện ra tướng lưỡi rộng dài trùm khắp ba ngàn thế giới rộng lớn mà nói lời thành thật rằng: "Chúng sinh các ngươi phải nên tin kinh: Xưng Tán Không Thể Nghĩ Bàn Công Đức Hết Thảy Chư Phật Sở Hộ Niệm Này".</p>
    <p>Này Xá-Lợi-Phất, thế giới phương dưới có đức Phật Sư-Tử, Phật Danh-Văn, Phật Danh-Quang, Phật Đạt-Ma, Phật Pháp-Tràng, Phật Trì-Pháp. Hằng hà sa số những đức Phật như thế, đều tại nước mình, hiện ra tướng lưỡi rộng dài trùm khắp ba ngàn thế giới rộng lớn mà nói lời thành thật rằng: "Chúng sinh các ngươi phải nên tin kinh: Xưng Tán Không Thể Nghĩ Bàn Công Đức Hết Thảy Chư Phật Sở Hộ Niệm Này".</p>
    <p>Này Xá-Lợi-Phất, thế giới phương trên có đức Phật Phạm-Âm, Phật Tú-Vương, Phật Hương-Thượng, Phật Hương-Quang, Phật Đại-Diệm-Kiên, Phật Tạp-Sắc Bảo-Hoa-Nhiêm-Thân, Phật Ta-La-Thọ-Vương, Phật Bảo-Hoa-Đức, Phật Kiến-Nhất-Thiết-Nghĩa, Phật Như-Tu-Di-Sơn. Hằng hà sa số những đức Phật như thế, đều tại nước mình, hiện ra tướng lưỡi rộng dài trùm khắp ba ngàn thế giới rộng lớn mà nói lời thành thật rằng: "Chúng sinh các ngươi phải nên tin kinh: Xưng Tán Không Thể Nghĩ Bàn Công Đức Hết Thảy Chư Phật Sở Hộ Niệm Này".</p>

    </div>

    <div class="mb-8">
      <h3 id="giai-thich-tu-ngu" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Giải thích từ ngữ:</h3>
    <p>Công đức chẳng thể nghĩ bàn của đức Phật A Di Đà: Như trên đã nói: Phật A Di Đà là dụ cho tự tánh, mà tự tánh thì vô thủy vô chung nên nói vô lượng thọ, vô lượng quang. Tự là bổn nhiên như thế, không do tạo tác mà có; nếu do tạo tác mà có thì thuộc về nghiệp thức sinh diệt. Tánh chân thật bổn nhiên ở nơi vô tình thì gọi là pháp tánh, ở nơi hữu tình thì gọi là Phật tánh. Phật tánh thì vượt ngoài mọi ký hiệu nghĩ suy, nên nói không thể nghĩ bàn.</p>
    <p>Phật A-Súc-Bệ (Bất Động Phật): Đức Phật trụ cõi Bất Động ở phương Đông. Phật A-Súc-Bệ do nghe đức Phật Đại Mục Như Lai nói về pháp sáu độ vô cực. Sau khi nghe xong, Ngài liền phát tâm vô thượng chánh đẳng chánh giác; nên Đại Mục Như Lai cho Bồ-tát này danh hiệu là Bất Động.</p>
    <p>Phật Tu-Di-Tướng: Tu-di là dụ cho thân năm ấm (ngũ tu-di), mà tướng Phật ở nơi thân năm ấm này chính là tánh giác vậy.</p>
    <p>Phật Đại-Tu-Di: Đại tu-di là dụ cho thể của chân tâm thì vô lượng, nên nói: “Lớn ắt buông ra trùm pháp giới”.</p>
    <p>Phật Tu-Di-Quang: Cũng là Tu-Di Đăng Vương hay trí Bát-nhã vậy, tức dụng của chân tâm cũng vô lượng; dụ cho trí giác sáng soi cùng pháp giới.</p>
    <p>Phật Diệu-Âm: Âm thanh không thể nghĩ bàn, không có gì so sánh được, nên gọi là diệu âm; dụ cho tiếng nói của chân tâm siêu vượt ngữ ngôn, nên hàm nhiếp tất cả (diệu trạm tổng trì).</p>
    <p>Hằng hà sa số: Lấy số cát của sông Hằng để ví dụ cho hằng số vô tận.</p>
    <p>Phật Nhật-Nguyệt-Đăng: Dụ cho hết thảy ánh sáng của trăng sao trên bầu trời chiếu khắp thế gian, hay chính là ánh sáng giác ngộ trùm khắp mười phương vậy.</p>
    <p>Phật Danh-Văn-Quang: Danh là tiếng, văn là nghe, quang là ánh sáng của chân tâm. Nghe lại tiếng của tự tánh, nên làm cho dòng vọng tâm dừng bặt, đạt thành vô lượng quang, làm cho trí giác trùm khắp.</p>
    <p>Phật Đại-Diệm-Kiên: Đại diệm là ánh sáng lớn, kiên là trút bỏ hết phiền não. Dụ cho ánh sáng rộng lớn của chân tâm, hay đạt được nhất tâm bất loạn thì dứt sạch phiền nào.</p>
    <p>Phật Tu-Di-Đăng: Dụ cho ánh sáng của tánh giác rộng lớn vô lượng.</p>
    <p>Phật Vô-Lượng-Tinh-Tấn: Tâm không vọng tưởng là tinh, được nhất tâm nên không bị lui sụt là tấn. Vô lượng tinh tấn là không còn trở lại sinh tử nữa.</p>
    <p>Phật Vô-Lượng-Thọ: Dụ cho thọ mạng của Phật tánh thì vô lượng, tức vô thủy vô chung.</p>
    <p>Phật Vô-Lượng-Tướng: Dụ cho chân tướng thì vô lượng và không thể nghĩ bàn, vì vượt khỏi đối đái hai bên.</p>
    <p>Phật Vô-Lượng-Tràng: Tràng hay trường nghĩa là dài, dụ cho chân tâm buông ra trùm pháp giới, nên nói dài vô lượng.</p>
    <p>Phật Đại-Quang: Ánh sáng lớn, dụ cho trí giác thì trùm khắp pháp giới.</p>
    <p>Phật Đại-Minh: Sự chiếu soi lớn, dụ cho dụng của chân tâm thì chiếu soi tất cả mọi hiện hữu và trùm khắp pháp giới.</p>
    <p>Phật Bảo-Tướng: Tướng quý do phước và trí nghiêm thân mà có; dụ cho đức tướng của Như Lai.</p>
    <p>Phật Tịnh-Quang: Thanh tịnh và sáng suốt, cũng dụ cho tánh giác.</p>
    <p>Phật Diệm-Kiên: Dụ cho lửa niết-bàn đốt hết phiền não.</p>
    <p>Phật Tối-Thắng-Âm: Âm thanh tối tôn tối thắng, không thể nghĩ bàn; cũng chỉ cho âm thanh không lời không tiếng của tự tánh, nên nói “Phản văn, văn tự tánh” (quay cái nghe nghe lại tự tánh thanh tịnh bổn nhiên của mình).</p>
    <p>Phật Nan-Trở: Do lực của tánh giác ngăn cản không cho trở lại vọng tâm sinh diệt, nên khi thành đạo đức Phật Thích Ca nói: “Sinh đã tận, lậu đã tận, gánh nặng đã để xuống, những việc nên làm đã làm, từ nay không trở lại sinh tử nữa”.</p>
    <p>Phật Nhật-Sinh: Ánh sáng của trí giác như mặt trời, có công năng phá tan bóng tối vô minh.</p>
    <p>Phật Võng-Minh: Ánh sáng của chân tâm như cái lưới trời Phạm Thiên, vung ra thì trùm khắp. Dụ cho tánh giác phá tan hầm sâu vô minh của chúng sinh, xóa sạch 62 kiến chấp trong tâm thức, như kinh Phạm Võng ở kinh Trường A-hàm diễn tả.</p>
    <p>Phật Sư-Tử: Dụ cho đức vô úy, dõng mãnh của Phật làm cho ma vương kính sợ. Cũng dụ cho tánh giác có sức mạnh phá tan vô minh.</p>
    <p>Phật Danh-Văn: Dụ cho nghe tự tánh, nên đoạn trừ những tự ngôn tự ngữ ở trong tâm.</p>
    <p>Phật Danh-Quang: Dụ cho thấy tự tánh.</p>
    <p>Phật Đạt-Ma: Dụ cho ngộ tự tánh.</p>
    <p>Phật Pháp-Tràng: Tràng là cái cờ phướng để ghi kinh vào; ở đây dụ cho nhập tự tánh.</p>
    <p>Phật Trì-Pháp: Dụ cho an trụ tự tánh.</p>
    <p>Phật Phạm-Âm: Lấy âm thanh của trời Đại Phạm dụ cho âm thanh của đức Phật có năm yếu tố: Tiếng nói chánh trực, tiếng nói hòa nhã, tiếng nói trong trẻo, tiếng nói sang sảng, tiếng nói âm thanh vang xa. Đó là một trong 32 tướng tốt của đức Phật.</p>
    <p>Phật Tú-Vương: Tú là năm mùi hương, đó là: hương giới – hương định – hương huệ - hương giải thoát và hương giải thoát tri kiến. Năm mùi hương này vượt thắng tất cả những loài hương khác (nên gọi là vương).</p>
    <p>Phật Hương-Thượng: Hương giải thoát tối thượng.</p>
    <p>Phật Hương-Quang: Hương tuệ giác sáng khắp mười phương.</p>
    <p>Phật Đại-Diệm-Kiên: Diệm là lửa thiền định, kiên là giải trừ hết thảy phiền não; dụ cho Đại niết-bàn.</p>
    <p>Phật Tạp-Sắc Bảo-Hoa-Nhiêm-Thân: Nhiều loài hoa quý có nhiều màu sắc trang nghiêm thân; dụ cho trang nghiêm tự thân bằng hoa giác ngộ biến khắp pháp giới (bồ-đề diệu pháp biến trang nghiêm).</p>
    <p>Phật Ta-La-Thọ-Vương: Cây ta-la, biểu trưng cho niết-bàn của Phật là tối thượng.</p>
    <p>Phật Bảo-Hoa-Đức: Đức giải thoát hay giác ngộ là tôn quý.</p>
    <p>Phật Kiến-Nhất-Thiết-Nghĩa: Nhận rõ hết thảy nghĩa lý các pháp, cũng gọi là “Nhất thiết chủng trí” hay “nhất thiết trí trí”, cũng không ngoài chân lý “mười như vậy”.</p>
    <p>Phật Như-Tu-Di-Sơn: Dụ cho định lực của Phật vững như núi Tu-di.</p>

    </div>

    <div class="mb-8">
      <h3 id="luoc-giai" class="mt-0 mb-4 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Lược giải:</h3>
    <p>Đến đoạn này, đức Phật nói chư Phật trong sáu phương đều khen ngợi công đức không thể nghĩ bàn của Phật A Di Đà, hay tự tánh của mỗi chúng ta. Lưỡi tiếng rộng dài là dụ cho chân lý trùm khắp, hay chính là trí giác trùm khắp pháp giới và xuyên suốt thời gian, nên nói pháp giới tạng thân, hay pháp thân cùng khắp.</p>
    <p>Trước hết là đức Phật Thích Ca dùng lời khen ngợi công đức niệm tự tánh Di Đà, và các vị Phật ở phương Đông cũng khen ngợi như thế. Chư Phật ở phương Đông gồm:</p>
    <p>Phật A-Súc-Bệ, tức biểu trưng cho trí giác bất động. Khi còn hành đạo Bồ-tát, vị này gặp đức Đại Mục Như Lai. Đại mục là mở con mắt lớn, mà muốn mở ra tuệ giác thì phải xả ly sáu căn không để cho dính mắc sáu trần, nên Đại Mục Như Lai dạy A-Súc pháp sáu độ vô cực. Tại tai thì nghe, tại mắt thì thấy, tại mũi ngửi mùi, tại lưỡi nếm vị, tại thân xúc chạm, tại ý rõ biết; mà không khởi vọng tâm thêm bớt, chấp thủ, nên đạt thành sáu pháp ba-la-mật, Bồ-tát chứng đắc quả vô thượng chánh giác. Phật Đại Mục cho danh hiệu là A-Súc-Bệ, tức Phật bất động trí.</p>
    <p>Phật Tu-Di-Tướng, là dụ cho nơi tướng thân năm ấm này có Phật tánh tròn đầy. Phương Đông là phương mặt trời mọc, dụ cho tuệ giác. Muốn cho tuệ giác hiển lộ, thì phải vượt qua tám vạn bốn ngàn trần lao, tức phải sạch hết chấp ngã và chấp pháp.</p>
    <p>Vì vậy cho nên, trong kinh Duy-ma-cật ở phẩm Bất tư nghì viết: “Vượt qua phương Đông 36 hằng sa, có một thế giới tên là Tu Di Tướng, có đức Phật hiệu là Tu Di Đăng Vương, thân cao 8 vạn 4 ngàn do-tuần, có tòa sư tử cũng cao 8 vạn 4 ngàn do-tuần, nghiêm sức số một”. Đăng vương hay ngọn đèn không gì sánh được chính là vô lượng quang, hay tuệ giác của chúng ta vậy. 36 pháp đối là phương tiện của Nhị thừa để độ chúng sinh, nay vượt qua 36 pháp đối là xả ly hết thảy vọng tâm, thì đạt thành pháp thân trí tướng Như Lai, tỏa chiếu cùng khắp. Vậy Tịnh độ chính là chân tâm thanh tịnh tuyệt đãi, nên Tịnh độ ở phương Tây và Tịnh độ ở phương Đông cũng không ngoài nhất tâm bất loạn mà có; một phương tức mười phương vậy.</p>
    <p>Phật Đại-Tu-Di, cũng dụ cho tánh giác vô thủy vô chung, tức thể của chân tâm thì vô lượng nên nói là Đại; cũng gọi là “nhất thiết trí”. Còn vọng tâm của chúng ta cũng nhiều vô số kể nhưng ở trong hữu lượng, nên có ngày chấm dứt, mỗi khi chúng ta giác ngộ hoàn toàn.</p>
    <p>Phật Tu-Di-Quang, tức dụng của chân tâm cũng vô lượng, nên nói trí giác sáng soi cùng pháp giới. Cũng gọi là “nhất thiết chủng trí” tức trùm khắp pháp giới, không có gì mà chân tâm không bao trùm, nên mới có “chánh biến tri”.</p>
    <p>Phật Diệu-Âm, là chỉ cho âm thanh của tự tánh thì không thể nghĩ bàn, không có gì so sánh được; dụ cho lực của tự tánh cũng vô lượng, nên nói “vô lượng công đức”.</p>
    <p>Hằng hà sa số những vị Phật như thế ở tại nước mình, hiện ra lưỡi tiếng rộng dài trùm khắp ba ngàn thế giới rộng lớn, mà nói lời thành thật rằng: Chúng sinh phải nên tin kinh: “Xưng Tán Không Thể Nghĩ Bàn Công Đức Hết Thảy Chư Phật Sở Hộ Niệm Này”. Sở hộ niệm mà không thể nghĩ bàn là hộ niệm gì? Niệm tự tánh, chứ chẳng có niệm gì khác. Như vậy, sở hộ niệm chính là tánh giác trong tâm của chúng ta, chứ không có sở niệm. Nếu có đối tượng của sở niệm, tức có “biến kế sở chấp” thì đó là vọng; không thể giúp hành giả đạt thành nhất tâm bất loạn được.</p>
    <p>Vì vậy cho nên, Tổ Đạt Ma dạy: “Công đức chân thật là trí phải được thanh tịnh sáng suốt, thể thì trống không vắng lặng; và công đức này không thể lấy việc thế gian như xây chùa, tụng kinh, tiếp Tăng độ chúng, viết chép kinh điển mà cầu được”.</p>
    <p>Chư Phật hiện ra lưỡi tiếng rộng dài, trùm khắp ba ngàn thế giới rộng lớn là dụ cho tánh của âm thanh chân không trùm khắp, không ngăn ngại. Ở đây dụ cho chân lý (thành thật) thì trùm khắp, vượt thời gian và không gian.</p>
    <p>Còn thứ mà thế gian gọi là chân lý, thì chính nó là sản phẩm của vọng thức, nên mang tính chủ quan, cục bộ và hạn hữu của biệt nghiệp và cộng nghiệp; nên không có giá trị chung cùng.</p>
    <p>Một vị thành tựu quả Phật, thì những vị Phật khác cũng y như vậy; tức chân tâm thì đồng đẳng, nên đức Phật nói “thanh tịnh bình đẳng giác”. Trong 48 nguyện của Tỳ-kheo Pháp Tạng, có nguyện: “Khi tôi thành Phật thì ánh sáng vô lượng chiếu khắp mười phương”, cũng dụ cho trùm khắp ba ngàn thế giới rộng lớn, nên được mệnh danh là “pháp giới tạng thân Phật A Di Đà”.</p>
    <p>Tiếp theo là nói về chư Phật ở phương Nam như: Phật Nhật-Nguyệt-Đăng, dụ cho ánh sáng của chân tâm, hay ánh sáng của trí giác ngộ, giống như hết thảy những thứ ánh sáng của trăng sao đèn đuốc gộp lại. Vì vậy cho nên, mỗi khi thành Phật rồi thì đức Phật nào cũng đạt được vô lượng quang cả, chứ không có vị Phật nào hơn kém vị Phật nào; nên kinh Phật bản hạnh nói: “Sáu vạn đức Phật đều cùng hiệu là Nhật Nguyệt Đăng Minh Như Lai”. (1)</p>
    <p>Phật Danh-Văn-Quang, văn là nghe lại tự tánh (phản văn, văn tự tánh) đạt thành nhất tâm bất loạn, nên tình thức bị đoạn tận, ánh sáng toàn giác hiện bày. Còn chúng ta thì thường nghe những tiếng nói thầm kín ở trong tâm, do “biến kế sở chấp” giả lập mà có. Những tự ngôn tự ngữ ở trong vọng tâm, chư Tổ gọi là mở mắt chiêm bao, tạo thành chuỗi dài sinh diệt, nên ở phẩm Phổ môn dụ cho “vô tận ý”.</p>
    <p>Phật Đại-Diệm-Kiên, là dụ cho ánh sáng rộng lớn trùm khắp pháp giới của chân tâm, hay chính nhất tâm bất loạn (đại định), nên dứt sạch phiền não nghiệp chướng.</p>
    <p>Phật Tu-Di-Đăng, là dụ cho trí giác soi khắp pháp giới, như ngọn đèn đặt ở trên núi Tu-di nên ánh sáng tỏa ra cùng khắp vậy.</p>
    <p>Phật Vô-Lượng-Tinh-Tấn, là dụ cho chuyên nhất niệm tự tánh Di Đà nên đạt thành nhất tâm bất loạn, nên nói tinh (định). Tấn là tâm không bị lui sụt trong sinh tử nữa. Vô lượng tinh tấn cũng được gọi là tinh tấn ba-la-mật, tức độ sinh không mệt mỏi, hay bám sát công phu không gián đoạn, cho đến khi đạt thành chánh quả.</p>
    <p>Hằng hà sa số những vị Phật như thế ở tại nước mình, hiện ra lưỡi tiếng rộng dài trùm khắp ba ngàn thế giới rộng lớn, mà nói lời thành thật rằng: "Chúng sinh các ngươi phải nên tin kinh: Xưng Tán Không Thể Nghĩ Bàn Công Đức Hết Thảy Chư Phật Sở Hộ Niệm Này". (Như đoạn trên đã giải).</p>

    <p>Tiếp theo là nói về chư Phật ở phương Tây:</p>
    <p>Phật Vô-Lượng-Thọ, là dụ cho thọ mạng của Phật tánh thì vô lượng, tức vô thủy vô chung; nên nói vô lượng thọ, vô lượng quang.</p>
    <p>Phật Vô-Lượng-Tướng, diễn tả thật tướng của Như Lai cũng vô lượng và không thể nghĩ bàn, tức chân tâm thì tuyệt đãi, nên nói vô lượng tướng.</p>
    <p>Phật Vô-Lượng-Tràng, tràng hay trường là dài vô tận, nói lên chân tâm vô thủy vô chung và trùm khắp pháp giới.</p>
    <p>Phật Đại-Quang, nói lên thể tịch nhiên vắng lặng của chân tâm thì trùm khắp pháp giới, vô thủy vô chung, nên nói “vô lượng thọ”.</p>
    <p>Phật Đại-Minh, nói lên dụng chiếu soi của chân tâm soi rõ thật thể hết thảy mọi pháp, nên nói “vô lượng quang”.</p>
    <p>Phật Bảo-Tướng, nói lên lực do phước và trí nghiêm thân của Như Lai thì chí tôn chí quý, nên nói “vô lượng công đức”.</p>
    <p>Phật Tịnh-Quang, nói lên thể và dụng của Như Lai hay chân tâm thì thường tịch thường chiếu. Vì vậy cho nên nói “thường tịch quang tịnh độ, A Di Đà Như Lai, pháp thân mầu thanh tịnh, khắp pháp giới chư Phật”. Một vị Phật có bao nhiêu phước trí như thế, thì chư Phật trong mười phương cũng có bấy nhiêu phước trí như thế, không có sai khác. Đạt thành tuệ giác, và tán thán những vị đạt thành tuệ giác cũng lại như vậy, không có sai khác.</p>

    <p>Tiếp theo là nói về chư Phật ở phương Bắc:</p>
    <p>Phật Diệm-Kiên, diệm là hơi nóng, nên cũng gọi là viêm; tức dùng sức định đốt cháy phiền não, nên gọi là diệm kiên; cũng dụ cho lửa trí tuệ đốt cháy vô minh, đạt thành niết-bàn tối thượng.</p>
    <p>Phật Tối-Thắng-Âm, cũng gọi là diệu âm, tức chỉ cho tiếng của cõi lòng thanh tịnh; nên nói quay lại nghe tự tánh (phản văn, văn tự tánh), làm cho năng nghe và sở nghe đi vào tịch tịnh (năng sở song vong). Đó cũng chính là niệm Phật tam-muội, hay niệm tự tánh Di Đà như trên đã giải.</p>
    <p>Phật Nan-Trở, tức chỉ cho năng lực của nhất tâm bất loạn ngăn không cho vọng tâm sinh diệt trở lại. Còn khi chưa đạt được nhất tâm, mà chỉ gạt đa niệm về nhất niệm thôi (như trên đã giải), thì còn đứng trước cửa sinh diệt và vọng tâm còn khởi trở lại (2).</p>
    <p>Có nhiều vị lập luận rằng, mỗi khi đạt thành vô niệm tự niệm, thì chắc chắn sẽ được vãng sinh. Ý này có thể đúng, mà cũng có thể sai. Đúng vì niệm Phật tam-muội, hay niệm tự tánh nên trong tâm cất hết sở niệm; cứ miên mật như vậy dần dần tạo thành lực chuyển y của “vô công dụng hạnh” sẽ đạt thành nhất tâm. Vì vậy cho nên, Tổ Huệ Năng nói: “Vô niệm, niệm tức chánh; hữu niệm, niệm thành tà”.</p>
    <p>Còn dùng quán ngữ “A Di Đà Phật” để buộc chặt ý vào, làm cho ý mất khả năng tư duy thì nó sẽ đẩy quán ngữ “A Di Đà Phật” vào cho thức Mạt-na nắm giữ, nên nói “vô niệm, tự niệm” suốt cả ngày đêm không cho ngừng nghỉ, thì đây là bắt Mạt-na ngậm cục đá tảng vô ký, trăm kiếp ngàn đời, tánh giác không thể bùng lên được, đây là ngậm nước chết của vô ký vậy. Vì vậy cho nên đức Phật dạy: “Không nên chế ngự ý trong mọi thời, mà chỉ nên chế ngự ý lúc có tham sân khởi”.</p>
    <p>Phật Nhật-Sinh, dụ cho ánh sáng của chân tâm phá tan hầm sâu vô minh của chúng sinh, làm cho giải thoát giác ngộ; như ánh sáng mặt trời phá tan bóng tối của đêm trường.</p>
    <p>Phật Võng-Minh, cũng dụ cho tuệ giác như màng lưới bao trùm pháp giới. Trí giác cũng như màng lưới cõi trời Phạm Thiên trùm khắp không gian, nên trong kinh Phạm Võng thuộc Kinh Trường Bộ, đức Phật dùng thật trí để xóa bỏ 62 kiến chấp của ngoại đạo.</p>
    <p>Hằng hà sa số những đức Phật như thế, tức đồng danh đồng hiệu (như đoạn trên đã giải).</p>

    <p>Tiếp đến là diễn tả về những vị Phật ở phương dưới:</p>
    <p>Phật Sư-Tử, là dụ cho đức vô úy của Phật, làm cho ma vương khiếp sợ (bố ma); cũng dụ cho tánh giác có công năng phá tan hầm sâu vô minh. Đức Phật cũng được dụ cho sư tử của nhân loại (nhân sư tử), tức từ con người mà giác ngộ.</p>
    <p>Phật Danh-Văn, dụ cho nghe lại tự tánh mà giác ngộ. Tánh nghe là “năng” nghe, mà tiếng nghe là “sở” nghe; nếu năng theo sở thì đó là vọng nghe (nhân và pháp). Còn năng nghe mà không có sở nghe, thì đó là nghe của tánh giác, nên cũng gọi là “tuệ giác thực tại”, tức nghe như tiếng đương tại.</p>
    <p>Phật Danh-Quang, quang là ánh sáng tức dụ cho thấy tự tánh. Tánh thấy thì năng thấy, mà tiếng là sở thấy; nếu năng theo sở thì đó là vọng thấy (nhân và pháp). Còn kiến tánh (hay thấy tánh) thì không ở nơi vọng thấy; vì vậy đừng hiểu nhầm thấy tánh là phải thấy một cái gì, tức có đối tượng của vọng kiến.</p>
    <p>Phật Đạt-Ma, đạt-ma là pháp, dụ cho ngộ tự tánh.</p>
    <p>Phật Pháp-Tràng, tràng là cái phướng dài để ghi kinh vào; ở đây dụ cho nhập tự tánh.</p>
    <p>Phật Trì-Pháp, ở đây dụ cho an trụ tự tánh.</p>
    <p>Nghe, thấy, ngộ, nhập, an trụ tự tánh. Phương dưới dụ cho phần vô thức hay tánh giác, có công năng phá tan hầm sâu vô minh. Vì vậy, muốn làm cho tánh giác hiển lộ thì phải “nghe tự tánh, thấy tự tánh, ngộ tự tánh, nhập tự tánh, và an trụ tự tánh”. Cùng một ý này, ở kinh Pháp Hoa, đức Phật dạy: “Khai, thị, ngộ, nhập Phật tri kiến”.</p>
    <p>Hằng hà sa số những đức Phật như thế (đồng danh đồng hiệu - như trên đã giải)……</p>

    <p>Tiếp đến là diễn tả về những vị Phật ở phương trên:</p>
    <p>Phật Phạm-Âm, lấy âm thanh của trời Đại Phạm để dụ cho tiếng nói của đức Phật. Tiếng nói của đức Phật có năm đức tính: chánh trực, hòa nhã, trong trẻo, sang sảng và vang xa.</p>
    <p>Phật Tú-Vương, Tú là năm mùi hương, dụ cho tiếng nói của đức Phật có năm mùi hương là: hương giới, hương định, hương huệ, hương giải thoát và hương giải thoát tri kiến. Năm mùi hương này vượt thắng tất cả (vương) những mùi hương của thế gian; bởi mùi hương của thế gian không thể bay ngược gió.</p>
    <p>Phật Hương-Thượng, dụ cho hương giới là tối thượng.</p>
    <p>Phật Hương-Quang, dụ cho hương của trí tuệ.</p>
    <p>Phật Đại-Diệm-Kiên, diệm là lửa thiền định, kiên là nhờ định lực nên tâm như như bất động, không còn phiền não nhiễm ô, cũng dụ cho Đại niết-bàn của Phật.</p>
    <p>Phật Tạp-Sắc Bảo-Hoa-Nhiêm-Thân, dụ cho dùng nhiều loài hoa có nhiều hương sắc để trang nghiêm thân, nên kinh nói: “Hoa mầu diệu pháp biến trang nghiêm”. Cũng dụ cho hoa giải thoát biến khắp pháp giới.</p>
    <p>Phật Ta-La-Thọ-Vương, lấy hình ảnh hai cây Ta-la để dụ cho niết-bàn của Phật là tối thượng. Đạt giải thoát, giác ngộ hay niết-bàn là vượt thoát dòng vọng tâm sinh diệt; chứ không phải chết. Cũng vậy, vãng sinh là đưa tâm ra khỏi dòng vọng tâm sinh diệt, chứ không phải chết, nên nói: (3) “Lên đài sen nhưng không rời khỏi tâm, bởi Tịnh độ chỉ ở trước mắt…”.</p>
    <p>Phật Bảo-Hoa-Đức, dụ cho đức giải thoát là tôn quý.</p>
    <p>Phật Kiến-Nhất-Thiết-Nghĩa, là hiểu rõ nghĩa chân thật của mọi pháp bằng mười “như thị” hay “mười như vậy”. Pháp Hoa Huyền Nghĩa định nghĩa: Như có nghĩa là chẳng khác, dụ cho thể là tịch; vậy là đúng sự thật, dụ cho dụng là chiếu soi. Tâm thể tịch chiếu này trùm khắp mười pháp giới, bao gồm thế giới chúng sinh cho đến thế giới của chư Phật và Bồ-tát. Mười như vậy (thập như thị) là nguyên lý tồn tại của tất cả Pháp, đó là: tướng như vậy, tánh như vậy, thể như vậy, lực như vậy, tác như vậy, nhân như vậy, duyên như vậy, quả như vậy, báo như vậy, gốc ngọn rốt ráo như vậy (bổn mạt cứu cánh), bao hàm mười “như thị” nên nói “Kiến nhất thiết nghĩa”.</p>
    <p>Phật Như-Tu-Di-Sơn, dụ cho định lực của Phật trụ vững như núi chúa Tu-di.</p>
    <p>Chư Phật nhiều như số cát sông Hằng, đều từ chân tâm thể hiện chân lý trùm khắp ba ngàn thế giới hệ rộng lớn, dùng lời thành thật (chân ngữ dã) để tán thán công đức không thể nghĩ bàn, chư Phật sở hộ niệm kinh này.</p>

    </div>

    <div class="mt-10 mb-6">
      <h3 id="ghi-chu" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Ghi chú:</h3>
      <div class="space-y-4 text-[0.95em]">
      <p>Nhất tinh minh sinh sáu hòa hợp, hay sáu căn hỗ dụng.</p>
      <p>Hốt sinh nhất niệm vô minh.</p>
      <p>Di liên đài bất ly đương xứ, Tịnh độ chỉ tại mục tiền, bất lao đàn chỉ chứng vô sinh; tức tâm tiệm tham quán tự tại.</p>
      </div>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo lược giải trong văn bản, tướng "lưỡi rộng dài" của chư Phật trùm khắp ba ngàn thế giới biểu trưng cho điều gì?',
    options: {
      a: 'Sự ca ngợi riêng biệt dành cho hóa thân lịch sử của đức Phật A Di Đà.',
      b: 'Chân lý và trí giác trùm khắp pháp giới, xuyên suốt thời gian.',
      c: 'Thần thông biến hóa để hàng phục các lực lượng ma vương.',
      d: 'Âm thanh vật lý truyền đi xa qua nhiều tầng không gian.',
    },
    answer: 'b',
  },
  {
    question: 'Đức Phật A-Súc-Bệ ở phương Đông gắn liền với câu chuyện gặp đức Phật Đại Mục Như Lai. Danh hiệu "A-Súc-Bệ" (Bất Động) biểu trưng cho trạng thái nào?',
    options: {
      a: 'Trí giác bất động đạt được khi xả ly sáu căn, không dính mắc sáu trần.',
      b: 'Việc kiên trì tụng đọc danh hiệu Phật liên tục không ngừng nghỉ.',
      c: 'Khả năng kiên trì trụ định không bị lay chuyển bởi thiên tai.',
      d: 'Trạng thái ngưng trệ hoàn toàn tư duy để rơi vào vô ký.',
    },
    answer: 'a',
  },
  {
    question: 'Trong phần giải thích từ ngữ, đức Phật A Di Đà được biểu trưng cho khái niệm cốt lõi nào nơi mỗi chúng sinh?',
    options: {
      a: 'Tự tánh chân thật vô thủy vô chung, vốn sẵn có.',
      b: 'Dòng nghiệp thức sinh diệt luân hồi qua nhiều kiếp.',
      c: 'Công đức tạo tác thế gian do làm việc thiện tích lũy được.',
      d: 'Một vị Phật lịch sử bằng xương bằng thịt.',
    },
    answer: 'a',
  },
  {
    question: 'Theo giải thích về danh hiệu Phật Vô-Lượng-Tinh-Tấn ở phương Nam, hai chữ "tinh" và "tấn" có ý nghĩa là gì?',
    options: {
      a: 'Siêng năng làm việc thiện là "tinh", nghiên cứu kinh điển là "tấn".',
      b: 'Trí tuệ sáng suốt là "tinh", lực thần thông là "tấn".',
      c: 'Giữ giới nghiêm ngặt là "tinh", ăn chay trường là "tấn".',
      d: 'Tâm không vọng tưởng là "tinh", đạt nhất tâm không bị lui sụt là "tấn".',
    },
    answer: 'd',
  },
  {
    question: 'Ý nghĩa biểu trưng của danh hiệu Phật Nan-Trở ở phương Bắc được giải thích như thế nào?',
    options: {
      a: 'Khả năng đi lại tự do không bị ngăn trở trong mười phương cõi Phật.',
      b: 'Năng lực của nhất tâm bất loạn ngăn không cho vọng tâm sinh diệt trở lại.',
      c: 'Sự kiên trì đè nén các tư tưởng xấu để giữ lại tư tưởng tốt.',
      d: 'Sức mạnh dũng mãnh vượt qua mọi chướng ngại của ma quân.',
    },
    answer: 'b',
  },
  {
    question: 'Đức Phật Sư-Tử ở phương dưới tượng trưng cho đức tính và năng lực gì?',
    options: {
      a: 'Sự ghi nhớ trọn vẹn tất cả kinh giáo của Như Lai.',
      b: 'Đức vô úy dõng mãnh và sức mạnh phá tan hầm sâu vô minh.',
      c: 'Thể trạng kiên cố không bị hư hại bởi thời gian.',
      d: 'Tiếng nói vang xa và quyền uy của chúa tể cõi trời.',
    },
    answer: 'b',
  },
  {
    question: 'Danh hiệu Phật Tú-Vương ở phương trên biểu trưng cho 5 loại mùi hương vượt thắng thế gian. Mùi hương đó đại diện cho những yếu tố nào?',
    options: {
      a: 'Hương hoa, hương trầm, hương thảo mộc, hương nến và hương trà.',
      b: 'Hương giới, hương định, hương huệ, hương giải thoát và hương giải thoát tri kiến.',
      c: 'Hương nhân, hương nghĩa, hương lễ, hương trí và hương tín.',
      d: 'Hương từ bi, hương hỷ xả, hương nhẫn nhượng, hương bố施 và hương cúng xường.',
    },
    answer: 'b',
  },
  {
    question: 'Theo văn bản, Tổ Đạt Ma dạy thế nào về "công đức chân thật"?',
    options: {
      a: 'Là việc tích cực xây chùa, tụng kinh, chép kinh và độ Tăng.',
      b: 'Là sự đạt được các phép thuật thần thông qua thiền định.',
      c: 'Trí phải thanh tịnh sáng suốt, thể trống không vắng lặng.',
      d: 'Là kết quả của việc ép ý niệm niệm Phật liên tục suốt ngày đêm.',
    },
    answer: 'c',
  },
  {
    question: 'Lược giải trong văn bản giải thích bản chất của sự "vãng sinh" như thế nào?',
    options: {
      a: 'Là sự kết thúc hoàn toàn thân xác vật lý khi qua đời.',
      b: 'Được tái sinh vào cõi trời để hưởng phước báu lâu dài.',
      c: 'Sự di chuyển linh hồn đến một không gian địa lý ở phương Tây.',
      d: 'Đưa tâm ra khỏi dòng vọng tâm sinh diệt.',
    },
    answer: 'd',
  },
  {
    question: 'Danh hiệu Phật Kiến-Nhất-Thiết-Nghĩa ở phương trên liên hệ trực tiếp với nguyên lý tồn tại nào của các pháp?',
    options: {
      a: 'Sáu mươi hai kiến chấp của ngoại đạo.',
      b: 'Mười "như thị" (Thập như thị).',
      c: 'Ba mươi sáu pháp đối của Nhị thừa.',
      d: 'Tám vạn bốn ngàn trần lao phiền não.',
    },
    answer: 'b',
  },
]

const lesson: Lesson = {
  id: 'lesson-luoc-giai-kinh-a-di-da-bai-2-5-muoi-phuong-chu-phat-tan-than-va-ho-niem',
  slug: 'bai-2-5-muoi-phuong-chu-phat-tan-than-va-ho-niem',
  title: 'Mười phương chư Phật tán thán và hộ niệm',
  type: 'article',
  status: 'published',
  order: 6,
  coverImage: materialUrl('2.5-muoi-phuong-chu-phat'),
  createdAt: '2026-10-04',
  updatedAt: '2026-10-04',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.5-muoi-phuong-chu-phat/%C3%9D_ngh%C4%A9a_bi%E1%BB%83u_ph%C3%A1p.png',
      readingContent,
      tableOfContents: [
        { id: 'muoi-phuong-chu-phat-tan-than-va-ho-niem', label: '2.5. Mười phương chư Phật tán thán và hộ niệm' },
        { id: 'chanh-van', label: 'Chánh Văn:', indent: 1 },
        { id: 'giai-thich-tu-ngu', label: 'Giải thích từ ngữ:', indent: 1 },
        { id: 'luoc-giai', label: 'Lược giải:', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.5-muoi-phuong-chu-phat/M%E1%BA%A1n-%C4%91%C3%A0-la_Ch%C3%A2n_T%C3%A2m.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/fYSCpNcA68w',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/2Z1cwoy6k9DkGwgoFp9xIO?si=RaCdU1e5QreyX-kA44jrrQ',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Mười phương chư Phật tán thán và hộ niệm',
    passPercentage: 70,
    questions,
  },
}

export default lesson
