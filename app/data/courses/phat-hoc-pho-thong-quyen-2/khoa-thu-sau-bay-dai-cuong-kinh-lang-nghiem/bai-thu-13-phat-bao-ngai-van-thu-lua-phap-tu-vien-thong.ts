import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section id="bai-thu-muoi-ba-phat-bao-ngai-van-thu-lua-phap-tu-vien-thong">
    <h2 id="bai-thu-muoi-ba-phat-bao-ngai-van-thu-lua-phap-tu-vien-thong" class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ 13</h2>
    <h3 id="i-phat-bao-ngai-van-thu-lua-chon-phap-tu-vien-thong" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. PHẬT BẢO NGÀI VĂN THÙ LỰA CHỌN PHÁP TU VIÊN THÔNG</h3>
    <p>Khi ấy Phật bảo ngài Văn Thù Sư Lợi:</p>
    <p>Ông đã nghe các vị Đại Bồ-tát và A-la-hán vừa trình bày các phương pháp tu hành được thành đạo quả. Thật ra 25 pháp tu hành này, đối với các vị Thánh, thì tu pháp nào cũng đều được chứng quả cả, không có phép tu nào hơn kém. Song nay Ta muốn cho A Nan và chúng sanh đời sau, nếu muốn vào Đại thừa Bồ-tát thì đối với 25 pháp tu này, ông nên lựa chọn pháp tu hành để mau thành đạo vô thượng Bồ-đề.</p>
    <h3 id="ii-ngai-van-thu-vang-loi-phat-lua-phuong-phap-tu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. NGÀI VĂN THÙ VÂNG LỜI PHẬT LỰA PHƯƠNG PHÁP TU</h3>
    <p>Ngài Văn Thù Sư Lợi vâng lời Phật dạy, đứng dậy lạy Phật, kính cẩn nói bài kệ, khen chơn tâm nhiệm mầu sáng suốt, chỉ rõ cái (vọng) vốn không và lựa chọn pháp tu viên thông.</p>
    <h4 id="nguyen-van-chu-han" class="text-lg font-semibold">NGUYÊN VĂN CHỮ HÁN</h4>
    <p>Giác hải tánh trừng viên</p>
    <p>Viên trừng giác nguyên diệu</p>
    <p>Nguyên minh chiếu sanh sở</p>
    <p>Sở lập chiếu tánh vọng</p>
    <p>Mê vọng hữu hư không</p>
    <p>Y không lập thế giới</p>
    <p>Tưởng trừng thành quốc độ</p>
    <p>Trí giác nãi chúng sanh</p>
    <p>Không sanh đại giác trung</p>
    <p>Như hải nhứt âu phát</p>
    <p>Hữu lậu vi trần quốc</p>
    <p>Giai y không sở sanh</p>
    <p>Âu diệt không bổn vô</p>
    <p>Huống phục chư tam hữu</p>
    <p>Quy nguyên tánh vô nhị</p>
    <p>Phương tiện hữu đa môn</p>
    <p>Thánh tánh vô bác thông</p>
    <p>Thuận nghịch giai phương tiện</p>
    <p>Sơ tâm nhập tam-muội</p>
    <p>Trì tốc bất đồng luân…</p>
    <h4 id="dich-nghia" class="text-lg font-semibold">DỊCH NGHĨA</h4>
    <p>Chơn tâm thanh tịnh viên mãn lại nhiệm mầu như biển đứng lặng và rộng sâu. Vì vọng động chiếu soi (phân biệt) nên sanh ra có cảnh bị chiếu (bị phân biệt). Khi năng, sở đã vọng sanh, thì cái “tánh chơn” lại ẩn (chiếu tánh vọng).</p>
    <h4 id="luoc-giai-1" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Như biển đứng lặng lóng trong, vì xao động nên thành sóng; lúc bấy giờ tánh trong lặng của nước bị ẩn đi v.v…</p>
    <hr />
    <p>Từ mê muội, vọng động cho nên có hư không, nhơn hư không mà có thế giới. Những vọng tưởng suy mê lóng lại thành ra thế giới, còn cái phân biệt hiểu biết thì làm chúng sanh.</p>
    <p>Hư không sanh ở trong chơn tâm rộng lớn này, cũng như chùm bọt nổi trên mặt biển. Thế giới nhiều như vi trần đều y hư không mà sanh; khi bọt tan cũng như hư không diệt, thì hằng sa thế giới đều tiêu hết.</p>
    <p>Trở về chơn tâm thì đồng một, nhưng trên đường tu có nhiều phương tiện. Đối với bậc Thánh tu pháp nào cũng đều chứng quả, dầu khó hay dễ cũng đều là phương tiện cả. Còn đối với kẻ sơ tâm tu hành lại có khó và dễ, bởi căn cơ không đồng. Hôm nay con xét 25 pháp tu của các vị Thánh vừa trình bày, thì duy có pháp tu nhĩ căn (tai nghe) của Ngài Quán Âm mới là viên thông.</p>
    <h3 id="iii-chung-sanh-o-the-gioi-ta-ba-nay-nho-co-nghe-phap-moi-biet-duong-loi-tu-hanh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">III. CHÚNG SANH Ở THẾ GIỚI TA BÀ NÀY NHỜ CÓ NGHE PHÁP MỚI BIẾT ĐƯỜNG LỐI TU HÀNH</h3>
    <p>Bạch Thế Tôn, Phật ra đời ở thế giới Ta-bà này, dùng âm thanh nói pháp để giáo hóa chúng sanh. Chúng sanh nhờ có nghe tiếng của Phật nói pháp mới biết đường lối tu hành được thanh tịnh. Hôm nay muốn đặng chánh định, quyết phải nhờ có nghe rồi mới tu được.</p>
    <h3 id="iv-cong-nang-cua-nhi-can-tai-nghe" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IV. CÔNG NĂNG CỦA NHĨ CĂN (TAI NGHE)</h3>
    <p>Bạch Thế Tôn, như lời Ngài Quán Âm nói: (Ngài ở chỗ thanh vắng mười phương đồng đánh trống, nhứt thời đồng được nghe); nên duy có nhĩ căn (tai nghe) mới được viên thông. Mắt xem còn bị cách ngại; miệng, mũi, thân và ý cũng không bằng, chỉ có nhĩ căn là hơn hết. Mặc dầu bị cách vách, hay tiếng ở xa gần, tai đều nghe được cả nên nhĩ căn mới thật là viên thông.</p>
    <p>Âm thanh khi có, khi không còn cái nghe lúc nào cũng có. Khi không có tiếng thế gian nói rằng: “không nghe”; thật ra chẳng phải “cái nghe” không có. Không tiếng, cái nghe không diệt, có tiếng, cái nghe cũng không sanh; bởi cái nghe không có sanh và diệt nên nó mới thật là thường.</p>
    <p>Dầu cho ở trong chiêm bao, tâm không có suy nghĩ phân biệt, mà “cái nghe” ấy cũng không mất (vì khi chiêm bao vẫn còn nghe tiếng chày giã gạo). Cái nghe, nó thoát ngoài tâm niệm suy nghĩ phân biệt, nên thân và tâm (thức thứ sáu) đều không bằng (không bằng tánh nghe).</p>
    <h3 id="v-ngai-van-thu-quo-trach-ong-a-nan-hoc-nhieu-ma-khong-tu" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">V. NGÀI VĂN THÙ QUỞ TRÁCH ÔNG A NAN HỌC NHIỀU MÀ KHÔNG TU</h3>
    <p>Nay chúng sanh ở thế giới Ta-bà này, nhờ có nghe nói chỉ dạy, nên mới hiểu biết tu hành. Song chúng sanh vì mê cái “tánh nghe thường còn” của mình cứ chạy theo tiếng nói phân biệt, cho nên mới bị lưu chuyển.</p>
    <p>A Nan, ông tuy học rộng nhớ nhiều, nhưng vì chạy theo vọng trần phân biệt, nên không khỏi đọa lạc theo tà. Nếu ông xoay cái nghe trở vào tự tánh, thì sẽ đặng hết vọng.</p>
    <p>A Nan, ông nên chú ý nghe: Tôi vâng oai thần của Phật, nói pháp môn tu hành này. Ông đem cái nghe của ông, nghe tất cả pháp môn thâm mật của chư Phật, nhiều như vi trần, nếu các phiền não dục lậu không trừ, thì cái nghe càng thêm lầm lỗi. Ông biết đem cái nghe của ông, nghe các pháp môn của chư Phật, sao ông không đem cái nghe đó, trở lại nghe “tánh nghe” (chơn tánh) của mình.</p>
    <p>A Nan, cái “nghe” nó không phải tự nhiên sanh, do có tiếng (thinh trần) nên mới gọi rằng "nghe". Nếu xoay cái nghe trở vào tự tánh, không chạy theo tiếng, thế là thoát ly được cái tiếng (thinh trần); lúc bấy giờ cái nghe này cũng không còn gọi tên là nghe nữa (vì không còn đối đãi, nên chẳng có tên kêu gọi). Một căn (lỗ tai) đã được phản vọng trở về chơn rồi, thì cả sáu căn đều được giải thoát.</p>
    <p>A Nan, các tri giác, thấy, nghe, hay, biết của ông đó, đều hư huyễn, như con mắt bị nhặm. Còn ba cõi sum la vạn tượng đây, cũng không thật, đều như hoa đốm giữa hư không. Khi cái thấy, nghe, hay, biết, xoay trở lại chơn rồi, thì cũng như con mắt kia hết nhặm. Khi cái vọng trần tiêu hết, thì tâm ông được thanh tịnh.</p>
    <h4 id="luoc-giai-2" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Vì vọng động cho nên mới thấy, nghe, hay, biết là năng phân biệt. Bởi có năng phân biệt, nên mới có cảnh bị phân biệt là ba cõi muôn vật. Đến khi năng phân biệt hết, thì cảnh bị phân biệt cũng tiêu, lúc bấy giờ chơn tánh hiện bày. Cũng như vì mắt nhặm nên mới thấy hoa đốm, đến khi nhặm hết, thì hoa đốm không còn, và chỉ còn con mắt trong sáng.</p>
    <hr />
    <p>Khi tâm hoàn toàn thanh tịnh rồi, thì cái trí quang sáng suốt hiện ra. Lúc bấy giờ chơn tâm ông vừa tịch tịnh lại vừa chiếu soi, bao trùm khắp cả mười phương hư không thế giới; lúc bấy giờ ông trở lại xem cảnh vật hiện tiền ở thế gian này, cũng như là việc trong chiêm bao. Khi ông được như thế rồi thì nàng Ma-đăng-già ở trong mộng kia làm gì bắt ông được!</p>
    <p>A Nan, dụ như các nhà huyễn thuật, làm các thứ hình, tuy có thấy cử động, nhưng cốt yếu là tại cái máy rút. Nếu máy kia thôi rút, thì các hình huyễn kia yên lặng, đều không có tự tánh.</p>
    <p>Sáu căn của ông cũng thế, gốc từ nơi tâm, vì vô minh vọng động thành ra có sáu căn; nếu một căn được phản vọng về chơn rồi, thì sáu dụng kia (sáu giác quan) đều không thành. Nếu trần cấu chưa sạch thì ông vẫn còn ở địa vị hữu học (còn phải tu). Khi trần cấu hết, thì tâm tánh ông hoàn toàn sáng suốt, đó là Phật.</p>
    <p>A Nan, ông chỉ xoay cái nghe của mình trở về chơn tánh, không chạy theo phân biệt vọng trần bên ngoài, thì ông liền thành đạo vô thượng, đây thật là pháp tu viên thông.</p>
    <p>Các Đức Phật nhiều như số vi trần cũng đều do một con đường này mà đến cửa Niết-bàn. Hiện tại các Bồ-tát và những người tu hành đời sau, đều y như pháp môn này mà thành đạo. Chính tôi cũng nhờ pháp môn này mà được chứng quả, đâu phải một mình Ngài Quán Âm tu mà thôi.</p>
    <p>Nay Phật dạy con lựa chọn pháp môn tu hành, để cho người đời sau tu hành mà thành đạo quả, thì duy có pháp tu của Ngài Quán Âm là hơn hết. Còn bao nhiêu các pháp tu hành khác, đều nhờ oai thần của Phật gia hộ mới được thành tựu. Các pháp ấy đều từ nơi sự tướng mà dẹp trừ trần lao, nên không phải là một phương pháp trường kỳ tu tập.</p>
    <p>Kính lạy Đức Như Lai, xin Ngài gia hộ cho chúng sanh đời sau, đối với pháp môn này không còn mê lầm. Bạch Thế Tôn, phương pháp này rất dễ tu, mau được thành đạo quả, có thể đem dạy A Nan và chúng sanh đời sau, y theo đây tu hành thì hơn các phương pháp khác. Đây là do lòng thành thật của con lựa chọn như thế.</p>
    <h3 id="vi-cac-vi-nghe-phap-duoc-chung-ngo" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VI. CÁC VỊ NGHE PHÁP ĐƯỢC CHỨNG NGỘ</h3>
    <p>A Nan và đại chúng nghe ngài Văn Thù nói bài kệ rồi thì tâm tánh đều được khai ngộ, đối quả Phật Bồ-đề và Đại Niết-bàn hiểu rất rành rõ, cũng như người đi xa quê hương, đã biết rõ con đường về nhà, nhưng chưa có dịp trở về. Trong đại hội có vô số Thiên, Long, Bát bộ, các hàng Nhị thừa hữu học và các vị Bồ-tát mới phát tâm, đều được xa lìa trần cấu, ngộ được chơn tâm. Bà tánh Tỳ-kheo-ni nghe bài kệ này rồi, đặng thành A-la-hán và vô lượng chúng sanh đều phát Bồ-đề tâm.</p>
    <h3 id="vii-a-nan-cau-phat-chi-day-phuong-phap-de-do-chung-sanh-doi-sau" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VII. A NAN CẦU PHẬT CHỈ DẠY PHƯƠNG PHÁP ĐỂ ĐỘ CHÚNG SANH ĐỜI SAU:</h3>
    <p>A Nan cúi đầu lạy Phật kính cẩn thưa rằng: - Bạch Thế Tôn, con nay đã hiểu pháp môn tu hành để thành Phật rồi; trên đường tu hành con không lầm lạc nữa. Nhưng con thường nghe Phật dạy:</p>
    <p>“Người chưa được ngộ mà muốn độ người, đó là tâm Bồ-tát. Còn người đã được ngộ hoàn toàn, rồi giác ngộ cho người, đó là việc làm của Như Lai”. Nay con chưa được độ, mà phát tâm muốn độ tất cả chúng sanh đời sau.</p>
    <p>Bạch Thế Tôn, tất cả chúng sanh đời sau cách Phật càng xa, lại gặp chúng tà sư ngoại đạo nói pháp nhiều như cát bụi. Vậy nếu có chúng sanh phát tâm tu hành, thì làm sao để tránh xa các ma chướng, đối với con đường Bồ-đề, tâm không thối lui?</p>
    <h3 id="viii-phat-day-phai-tu-gioi-dinh-hue" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">VIII. PHẬT DẠY PHẢI TU GIỚI, ĐỊNH, HUỆ</h3>
    <p>Phật khen A Nan và dạy rằng: - Ông hỏi phương pháp tu hành để độ chúng sanh trầm luân đời sau, vậy ông nên chú ý nghe, Ta sẽ vì các ông chỉ dạy.</p>
    <p>Này A Nan, ông đã thường nghe Ta dạy, người tu hành quyết định phải đủ ba điều cần yếu:</p>
    <p>Dùng giới luật nhiếp phục tự tâm</p>
    <p>Nhơn giữ giới, tâm mới sanh định</p>
    <p>Nhơn định, tâm phát huệ</p>
    <p>Đây gọi là ba món tu vô lậu.</p>
    <p>(Vì tu ba phép này, thì không còn sa đọa).</p>
    <h4 id="luoc-giai-3" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ngài An Pháp sư nói: “Giới, Định, Huệ là cái cửa của người vào đạo, cũng là cái ải trọng yếu để vào thành Niết-bàn”.</p>
    <p>Ngài La Thập Pháp sư nói: “Trì giới hay chiết phục được phiền não làm cho phiền não yếu thế. Thiền định như bốn cái núm để ngăn dòng nước phiền não. Trí huệ diệt được hết phiền não”.</p>
    <p>Trong Kinh Niết-bàn nói: “Có phiền não thì không trí huệ, có trí huệ thì không phiền não”.</p>
    <hr />
    <h3 id="ix-day-noi-ve-dai-thua-tam-gioi-co-bon-dam-sat-dao-vong" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">IX. ĐÂY NÓI VỀ ĐẠI THỪA TÂM GIỚI CÓ BỐN: DÂM, SÁT, ĐẠO, VỌNG</h3>
    <h4 id="a-truoc-doan-long-dam" class="text-lg font-semibold">A. Trước đoạn lòng dâm</h4>
    <p>A Nan, tại sao dùng giới luật để nhiếp phục tự tâm?</p>
    <p>Này A Nan, nếu các chúng sanh trong tâm không còn nghĩ đến việc dâm dục nữa, thì sẽ ra khỏi sanh tử luân hồi.</p>
    <p>Ông tu hành quyết cầu ra khỏi trần lao, nếu tâm dâm dục không trừ, thì cảnh trần lao không bao giờ ra khỏi. Dầu cho ông hiện tiền đặng nhiều trí huệ và thiền định, cũng sẽ đọa vào ma đạo. Thượng phẩm làm ma chúa, trung phẩm làm ma dân, hạ phẩm làm ma nữ. Các loài ma kia cũng đều có đồ đệ và tự xưng đã thành đạo vô thượng Bồ-đề.</p>
    <p>Sau khi Ta nhập diệt rồi, vào đời mạt pháp, chúng ma này rất thạnh hành trong thế gian, ưa làm việc tham dục, xưng là thiện tri thức của chúng sanh, khiến cho chúng sanh đọa vào hầm tà kiến, mất con đường Bồ-đề.</p>
    <p>A Nan, ông tu thiền định, nếu không đoạn lòng dâm, thì cũng như người nấu cát muốn cho thành cơm, dầu trải bao nhiêu kiếp cũng không thể thành cơm được.</p>
    <p>Ông đem tâm dâm dục để cầu quả Phật, dầu cho ông có được diệu ngộ đi nữa, cũng không ra khỏi tam giới, vì gốc của nó là dâm thì làm sao ra khỏi sanh tử luân hồi được; huống chi quả Niết-bàn của Phật, ông làm sao chứng được.</p>
    <p>Nên quyết định phải đoạn trừ dâm cơ: trong tâm ngoài thân đều đoạn, cho đến cái biết đoạn cũng không còn, được như thế thì đối với quả Phật Bồ-đề, ông mới có hy vọng!</p>
    <p>Vậy ông nên dạy người tu hành, điều thứ nhứt là quyết phải đoạn trừ lòng dâm, đây mới gọi là Phật nói, trái lại là Thiên ma Ba tuần nói.</p>
    <h4 id="luoc-giai-4" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đây là Đại thừa giới, cao siêu và khó hơn Tiểu thừa giới nhiều. Nếu tâm còn nghĩ tưởng đến dâm, sát, đạo và vọng, thế là phạm giới rồi.</p>
    <p>Tổ Đơn Hà dạy: “Nếu người chưa tỏ ngộ được chơn tâm thanh tịnh của mình, thì hột giống dâm còn ẩn núp”. Nói cho dễ hiểu, nếu còn vô minh, thì chơn tâm sáng suốt chẳng hiện, thế là giới thể chưa thanh tịnh.</p>
    <p>Phật tử đọc đến đoạn này, chớ nên thấy khó mà nản lòng. Phải biết rằng việc tu hành cũng như lóng nước để lâu quyết định sẽ trong, và cũng như lột bẹ chuối, lột mãi sẽ đến lõi.</p>
    <p>Người tu hành cũng thế, trước đoạn phần thô thiển ngoài thân, sau dần dần trừ đến phần tế nhị trong tâm, lâu ngày thành tánh quen, thì quyết định có ngày sẽ được thanh tịnh. Điều cốt yếu là nên nhớ lời Phật dạy có bốn chữ “bất tùy phân biệt”. Nghĩa là khi đối cảnh không khởi vọng niệm phân biệt, thì tham, sân, si không khởi. Tham, sân, si không khởi thì sát, đạo, dâm chẳng sanh. Đây là lối tu tắt của Đại thừa, để trở lại với chơn tâm thanh tịnh.</p>
    <hr />
    <h4 id="b-doan-long-sat-hai" class="text-lg font-semibold">B. Đoạn lòng sát hại</h4>
    <p>A Nan, nếu các chúng sanh trong tâm không nghĩ tưởng đến việc sát hại, thì không còn bị sanh tử luân hồi nữa. Ông tu hành quyết cầu phải ra khỏi trần lao, nếu ông không đoạn trừ tâm sát hại, thì ông chỉ đọa vào thần đạo. Bậc thượng làm đại lực quỷ, bậc trung làm Phi hành dạ xoa và các loại quỷ soái, bậc hạ làm Địa hành La sát và các quỷ thần. Các loài quỷ thần này cũng có đồ đệ, đều tự cho mình thành đạo vô thượng.</p>
    <p>Sau khi Ta diệt độ rồi, trong đời mạt pháp, các loài quỷ thần này rất thạnh hành trong thế gian, và tuyên bố rằng “Ăn thịt cũng được đạo Bồ-đề”. A Nan, trước khi Ta cho các ông ăn ngũ tịnh nhục, là vì ở nhằm địa phương đất chai, nhiều đá sỏi, không trồng rau cải được, nên Ta tạm cho các ông dùng. Sau khi Ta diệt độ rồi, tại sao những người ăn thịt chúng sanh, mà cũng xưng Tăng lữ.</p>
    <h4 id="luoc-giai-5" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Trong Kinh Lăng Già, Phật dạy ngài Đại Huệ Bồ-tát: “Ta trước kia phương tiện cho các ông ăn năm thứ thịt hoặc mười thứ, hôm nay tất cả đều cấm tuyệt”.</p>
    <p>A Nan, những người ăn thịt, dầu cho có đặng tâm trí khai ngộ, cũng thành quỷ Đại la sát, đến khi mãn kiếp quỷ La sát rồi, quyết định phải trầm luân trong biển khổ sanh tử. Giết hại ăn thịt lẫn nhau, thì làm sao ra khỏi sanh tử luân hồi được.</p>
    <p>A Nan, ông tu thiền định, nếu không trừ tâm sát hại mà muốn cầu được đạo, thì cũng như người tự bịt hai lỗ tai của mình, la tiếng thiệt lớn, mà muốn cho người khác không nghe, thì không thể được.</p>
    <p>A Nan, ông nên dạy người tu hành, điều thứ hai là quyết định phải đoạn trừ lòng sát hại. Đây là lời sáng suốt trong sạch của Ta cũng như lời các Đức Phật quá khứ đã chỉ dạy. Như lời Ta dạy đây mới gọi là Phật nói, trái lại Thiên ma Ba tuần nói.</p>
    <h4 id="c-doan-tru-trom-cuop" class="text-lg font-semibold">C. Đoạn trừ trộm cướp</h4>
    <p>A Nan, nếu các chúng sanh, trong tâm không nghĩ tưởng đến việc (tham lam) trộm cướp, thì không còn sanh tử luân hồi nữa. Các ông tu hành quyết cầu ra khỏi cảnh trần lao, nếu tâm (tham lam) trộm cướp không trừ, thì không bao giờ ra khỏi.</p>
    <p>Dầu cho hiện tiền ông đặng nhiều trí huệ hay thiền định, nếu không đoạn tâm (tham lam) trộm cướp thì quyết định đọa vào tà đạo. Bậc thượng làm loài tinh tinh, bậc trung làm loài yêu mỵ, bậc hạ làm người tà, bị các loài yêu tinh này nhập (dựa). Bọn này cũng có đồ đệ, đều tự xưng rằng đặng đạo vô thượng.</p>
    <p>Sau khi Ta diệt độ rồi, trong đời mạt pháp, chúng tinh yêu tà mị này rất thạnh hành trong đời, tự xưng là thiện tri thức, dối gạt phỉnh phờ người, khiến cho người mất tâm chánh tín; chúng nó đi đến đâu, thì làm cho người tiêu hao tài sản đến đó.</p>
    <p>A Nan, ông tu thiền định, nếu không đoạn trừ tâm trộm cướp, mà muốn cầu cho được đạo quả, thì cũng như người rót vào chén bể, mà muốn cho đầy, dầu trải bao nhiêu kiếp cũng không thể đầy được. Ông nên dạy người tu hành, điều thứ ba là quyết định phải đoạn trừ tâm trộm cướp. Đây là lời nói sáng suốt trong sạch của Ta cũng như của các Đức Phật quá khứ. Đúng như lời Ta dạy gọi là Phật nói, trái lại với Thiên ma Ba tuần nói.</p>
    <h4 id="d-doan-tru-vong-ngu" class="text-lg font-semibold">D. Đoạn trừ vọng ngữ</h4>
    <p>A Nan, nếu các chúng sanh, đã giữ hoàn toàn ba hạnh trên là không sát, đạo, dâm rồi mà còn đại vọng ngữ, thì tâm cũng không thanh tịnh, mất hột giống Phật, thành ma ái kiến. Thế nào là đại vọng ngữ? Nghĩa là: chưa đặng đạo nói mình đặng đạo, chưa chứng quả nói mình chứng quả. Đối với người đời, nói: “Ta đã chứng Thanh-văn, Duyên-giác, Bồ-tát và Phật”, để trông cầu người lạy cúng. Những người nói dối như thế, làm tiêu diệt hột giống Phật, sẽ đọa vào trong biển khổ. Cũng như cây Đa-la khi bị chặt đứt đọt rồi (như cây cau xứ ta) thì không thể mọc chồi đâm tược được.</p>
    <p>A Nan, Ta có dạy các vị Bồ-tát và A-la-hán: “Sau khi Ta diệt độ rồi, các ông phải thị hiện thân hình, trong đời mạt pháp để cứu độ các chúng sanh đang trầm luân, làm thầy sa-môn, cư sĩ, vua, quan, đồng nam, đồng nữ, người gian giảo, kẻ trộm cướp, người hàng thịt, kẻ buôn bán, để lẫn lộn trong từng lớp người, chung một nghề nghiệp, đặng giáo hóa chúng sanh trở về chánh đạo”.</p>
    <p>Nhưng các vị ấy quyết chẳng bao giờ nói: “Ta đây thật là Bồ-tát hoặc A-la-hán v.v…” hay tỏ ra một vài cử chỉ gì làm tiết lộ sự bí mật, để cho người ta biết mình là Thánh nhơn thị hiện. Chỉ trừ sau khi mạng chung rồi, các vị ấy mới âm thầm để lại một vài di tích cho người biết thôi.</p>
    <h4 id="luoc-giai-6" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Các Phật tử đọc đến đoạn này nên chú ý: Phật và Bồ-tát thị hiện, chúng ta không biết được; nếu chúng ta biết được thì đó không phải thiệt Phật hay Bồ-tát. Chỉ trừ khi nào các vị ấy cởi bỏ xác phàm, mới lưu lại một vài di tích, lúc bấy giờ chúng ta mới biết được. Nhưng khi biết, thì không gặp các Ngài nữa.</p>
    <p>Như Tổ Đạt Ma hiện thân đến Trung Quốc, vua Lương Võ Đế không biết; đến khi biết được ngài là Thánh thì không còn thấy được ngài.</p>
    <p>Vậy hiện nay những người tự xưng mình là Phật hay Bồ-tát v.v… giáng thế, thì căn cứ vào đoạn Kinh này, chúng ta thấy rõ ràng và chắc chắn không phải thiệt Phật hay Bồ-tát rồi, chớ nên tin mà bị hại.</p>
    <hr />
    <p>A Nan, chính thật Bồ-tát hay A-la-hán thị hiện, mà còn không cho người biết, tại sao những người phàm phu lại dám mạo xưng là Phật, Bồ-tát v.v… cũng như những người cùng đinh, mà mạo xưng mình là Đế vương, thì sẽ bị tội tru diệt.</p>
    <p>A Nan, nếu người tu hành, không đoạn trừ đại vọng ngữ, mà muốn được đạo, thì cũng như người lấy đồ hôi tanh, tô đắp thành cái hình chiên-đàn, muốn cho thơm chừng nào lại càng hôi chừng nấy. Cái nhân đã chẳng ngay, thì kết quả phải cong vầy. Những người như thế mà cầu quả Phật Bồ-đề, thì cũng như người muốn tự cắn cái rốn của mình, làm sao cắn được!</p>
    <p>A Nan, ông nên dạy người tu hành điều thứ tư là quyết định phải đoạn trừ đại vọng ngữ. Đây là lời nói sáng suốt trong sạch của Ta, và các Đức Phật quá khứ chỉ dạy. Đúng như lời Ta dạy đây gọi là Phật nói, trái lại là Thiên ma Ba tuần nói.</p>
    <h4 id="luoc-giai-7" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bốn đoạn trên Phật ân cần nhắc nhở, nói đi lặp lại nhiều lần. Phật tử chúng ta nên ghi xương khắc dạ những lời vàng ngọc chỉ dạy rất thống thiết của Đức Từ phụ.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Tại sao Ngài Văn Thù Sư Lợi lại lựa chọn pháp tu 'Nhĩ căn' (tai nghe) là phương pháp viên thông nhất cho chúng sanh ở thế giới Ta-bà?",
    "options": {
      "a": "Vì các căn khác như mắt, mũi, thân đều không có khả năng nhận biết được chơn tâm.",
      "b": "Vì tai có thể nghe được âm thanh xuyên qua các chướng ngại như vách tường và hoạt động ngay cả khi đang ngủ.",
      "c": "Vì tai là căn duy nhất không bao giờ bị ảnh hưởng bởi các vọng trần bên ngoài.",
      "d": "Vì âm thanh của Phật thuyết pháp là phương tiện duy nhất để đạt được cứu cánh."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Các căn khác vẫn có thể chứng quả đối với bậc Thánh, nhưng kém viên thông hơn so với nhĩ căn ở thế giới Ta-bà [1, 2].",
      "b": "Đúng. Nhĩ căn viên thông vì có thể nghe xuyên cách ngại (vách tường, xa gần) và cái nghe không mất ngay cả khi chiêm bao [2, 3].",
      "c": "Sai. Tai vẫn bị lưu chuyển nếu chạy theo tiếng phân biệt (vọng trần) bên ngoài [4].",
      "d": "Sai. Âm thanh thuyết pháp là phương tiện giáo hóa rất tốt, nhưng còn 24 phương pháp tu hành khác vẫn có thể chứng quả [1, 2]."
    }
  },
  {
    "question": "Theo lời dạy của Đức Phật, mối quan hệ giữa Giới, Định và Huệ (Tam vô lậu học) được thiết lập như thế nào?",
    "options": {
      "a": "Thiền định là quan trọng nhất, giới luật và trí huệ chỉ là các yếu tố bổ trợ không bắt buộc.",
      "b": "Huệ là gốc để sanh ra giới luật, từ đó mới có được thiền định thanh tịnh.",
      "c": "Nhơn giữ giới thì tâm mới sanh định, nhơn định thì tâm mới phát huệ.",
      "d": "Ba môn này có thể tu tập độc lập mà không cần hỗ trợ hay làm tiền đề cho nhau."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Cả ba yếu tố đều quyết định và cần thiết, là ba điều cần yếu [5].",
      "b": "Sai. Giới mới là nền tảng ban đầu để sinh định và huệ [5].",
      "c": "Đúng. Phật dạy: dùng giới luật nhiếp phục tự tâm, nhơn giữ giới tâm sanh định, nhơn định tâm phát huệ [5].",
      "d": "Sai. Ba môn này liên kết mật thiết theo trình tự nhân - quả [5]."
    }
  },
  {
    "question": "Việc tu thiền định mà không đoạn trừ lòng dâm dục được ví với hình ảnh nào trong văn bản?",
    "options": {
      "a": "Như người rót nước vào chiếc chén bị bể.",
      "b": "Như người dùng đồ hôi tanh để tô đắp hình chiên-đàn.",
      "c": "Như người nấu cát mà muốn thành cơm.",
      "d": "Như người bịt tai mà la lớn cho người khác không nghe."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đây là hình ảnh ví cho việc tu thiền mà không trừ tâm trộm cướp [6].",
      "b": "Sai. Đây là hình ảnh ví cho việc không đoạn trừ đại vọng ngữ [7].",
      "c": "Đúng. Tu thiền định nếu không đoạn lòng dâm thì như người nấu cát muốn cho thành cơm, dẫu bao nhiêu kiếp cũng không thành [8].",
      "d": "Sai. Đây là hình ảnh ví cho người tu thiền mà không trừ tâm sát hại [9]."
    }
  },
  {
    "question": "Theo văn bản, hậu quả của việc người tu hành ăn thịt chúng sanh (không đoạn sát hại) là gì?",
    "options": {
      "a": "Phật cho phép ăn thịt mãi mãi nếu đó là ngũ tịnh nhục ở vùng đất khô cằn.",
      "b": "Ăn thịt chỉ là lỗi nhỏ về sự tướng, không ảnh hưởng đến tâm tánh bên trong.",
      "c": "Người ăn thịt sẽ bị mất hết trí thông minh và không thể hiểu được giáo pháp.",
      "d": "Dù có đắc tâm trí khai ngộ cũng sẽ thành quỷ La-sát và sau đó trầm luân trong biển khổ."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Phật chỉ tạm cho phép trước đây, sau khi Ngài diệt độ thì cấm tuyệt [10].",
      "b": "Sai. Sát hại là giới trọng, ảnh hưởng trực tiếp đến việc giải thoát [9].",
      "c": "Sai. Có thể đặng tâm trí khai ngộ nhưng kết cục vẫn bị đọa [9].",
      "d": "Đúng. Dầu đặng tâm trí khai ngộ cũng thành quỷ Đại la sát, mãn kiếp quyết định phải trầm luân sanh tử [9]."
    }
  },
  {
    "question": "Thế nào được gọi là 'Đại vọng ngữ' theo lời dạy của Đức Phật?",
    "options": {
      "a": "Nói những lời thô tục, ác độc xúc phạm đến người khác.",
      "b": "Tiết lộ bí mật về các vị Bồ-tát đang thị hiện trong đời mạt pháp.",
      "c": "Chưa đắc đạo mà nói mình đắc đạo, chưa chứng quả mà nói mình chứng quả để cầu sự cúng dường.",
      "d": "Dùng lời lẽ hoa mỹ để che đậy tâm tham lam trộm cướp của mình."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đây là lỗi ác khẩu, không phải đại vọng ngữ được nhắc đến trong bài [11].",
      "b": "Sai. Bí mật là do các Ngài giữ kín, không phải lỗi đại vọng ngữ của người tu hành [12, 13].",
      "c": "Đúng. Đại vọng ngữ là chưa đặng đạo nói đặng đạo, chưa chứng quả nói chứng quả để trông cầu người lạy cúng [11].",
      "d": "Sai. Đây không phải là định nghĩa đại vọng ngữ của Đức Phật trong đoạn kinh này [11]."
    }
  },
  {
    "question": "Đặc điểm nào giúp nhận diện các vị Bồ-tát hoặc A-la-hán thật sự khi họ thị hiện trong đời mạt pháp?",
    "options": {
      "a": "Các vị ấy thường thể hiện thần thông và xưng danh để lôi kéo nhiều đồ đệ theo chánh đạo.",
      "b": "Các vị ấy chỉ thị hiện dưới hình tướng sa-môn hoặc cư sĩ thuần thành.",
      "c": "Các vị ấy sẽ trực tiếp chỉ trích những tà sư để mọi người biết mình là người của Phật.",
      "d": "Các vị ấy tuyệt đối không bao giờ tự xưng mình là Thánh hay để lộ bí mật về thân phận khi còn sống."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Các Ngài tuyệt đối không tự xưng để thu hút đồ đệ [12, 13].",
      "b": "Sai. Các Ngài có thể làm vua quan, đồng nam nữ, cả người gian giảo hay hàng thịt... để hòa mình độ sanh [12].",
      "c": "Sai. Các Ngài hòa mình vào tầng lớp để giáo hóa, không tự tỏ ra mình là Thánh [12].",
      "d": "Đúng. Các vị ấy quyết chẳng bao giờ xưng mình là Bồ-tát, A-la-hán hay tiết lộ bí mật khi còn sống, trừ khi mạng chung [12, 13]."
    }
  },
  {
    "question": "Khái niệm 'Phản văn tự tánh' (xoay cái nghe trở vào tự tánh) có nghĩa là gì?",
    "options": {
      "a": "Ngừng chạy theo các âm thanh phân biệt bên ngoài để nhận ra tánh nghe thường còn của chính mình.",
      "b": "Chỉ nghe những lời kinh tiếng kệ và từ bỏ nghe các âm thanh thế gian.",
      "c": "Cố gắng lắng tai nghe những âm thanh vi tế nhất của vũ trụ.",
      "d": "Sử dụng sự tập trung vào tai để loại bỏ hoàn toàn khả năng nghe thấy tiếng động."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Là xoay cái nghe trở vào tự tánh, không chạy theo tiếng phân biệt (vọng trần bên ngoài) để thoát ly thinh trần [4, 14].",
      "b": "Sai. Vẫn là chạy theo tiếng bên ngoài, chưa phải là trở về tự tánh [4].",
      "c": "Sai. Nghe âm thanh vũ trụ vẫn là chạy theo cảnh bị phân biệt [4].",
      "d": "Sai. Không phải là diệt bỏ khả năng nghe mà là không theo vọng trần để tánh nghe được thanh tịnh [14, 15]."
    }
  },
  {
    "question": "Hình ảnh 'con mắt bị nhặm' trong bài giảng được dùng để ám chỉ điều gì?",
    "options": {
      "a": "Sự thiếu hiểu biết về kinh điển của những người không chịu học rộng nhớ nhiều.",
      "b": "Các tri giác (thấy, nghe, hay, biết) và cảnh vật thế gian đều là hư huyễn do vọng động sinh ra.",
      "c": "Những lỗi lầm nhỏ nhặt trong quá trình trì giới của các vị hữu học.",
      "d": "Sự mê lầm của nàng Ma-đăng-già khi cố gắng bắt giữ A Nan."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Không liên quan đến việc học rộng nhớ nhiều [14].",
      "b": "Đúng. Do vô minh vọng động sinh ra tri giác và cảnh vật hư huyễn, cũng như mắt nhặm nên mới thấy hoa đốm [14, 16].",
      "c": "Sai. Không dùng để chỉ lỗi lầm trì giới [14, 16].",
      "d": "Sai. Nàng Ma-đăng-già là ảnh dụ khác về cảnh chiêm bao [16]."
    }
  },
  {
    "question": "Điều gì xảy ra với sáu căn khi một căn (như nhĩ căn) được phản vọng trở về chơn?",
    "options": {
      "a": "Cả sáu căn đều được giải thoát vì chúng đều chung một gốc rễ từ tâm vô minh.",
      "b": "Người tu phải tiếp tục luyện tập riêng biệt cho năm căn còn lại để đạt giải thoát hoàn toàn.",
      "c": "Tánh nghe sẽ lấn át và thay thế hoàn toàn chức năng của thấy, ngửi, nếm, chạm.",
      "d": "Các căn khác sẽ bị vô hiệu hóa và người tu không còn cảm giác về thế giới bên ngoài."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Sáu căn chung một gốc từ tâm do vô minh sinh ra, khi một căn phản vọng về chơn thì cả sáu dụng đều được giải thoát [14, 15].",
      "b": "Sai. Không cần thiết tu tuần tự từng căn một [14, 15].",
      "c": "Sai. Không lấn át chức năng các căn khác [15].",
      "d": "Sai. Không phải mất cảm giác mà là tánh trở nên sáng suốt thanh tịnh không nhiễm trần [15]."
    }
  },
  {
    "question": "Tại sao thế giới và chúng sanh lại hình thành từ trong 'Chơn tâm' theo bài kệ của Ngài Văn Thù?",
    "options": {
      "a": "Do ước nguyện của chúng sanh muốn có nơi cư ngụ để hưởng thụ lạc thú.",
      "b": "Do Chơn tâm tự phân chia mình ra để tạo điều kiện cho các vị Bồ-tát tu hành.",
      "c": "Do mê muội và vọng động phát sinh ra hư không, rồi từ hư không mà lập ra thế giới và chúng sanh.",
      "d": "Do sự tích tụ của các hạt vi trần trong không gian bao la từ thời vô thủy."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Nguyên nhân là do mê muội vọng động, không phải do ước nguyện hưởng thụ [17].",
      "b": "Sai. Chơn tâm bản thể vốn đứng lặng (như biển lặng), sự phân chia là do vọng động sinh ra [17, 18].",
      "c": "Đúng. Từ mê muội, vọng động sinh ra hư không, những vọng tưởng lóng lại thành thế giới, sự phân biệt hiểu biết thành chúng sanh [17].",
      "d": "Sai. Hạt vi trần chỉ là hình ảnh ví von về số lượng thế giới [17]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-bai-13-phat-bao-ngai-van-thu-lua-phap-tu-vien-thong',
  slug: 'bai-thu-13-phat-bao-ngai-van-thu-lua-phap-tu-vien-thong',
  title: "Bài Thứ 13 - Phật bảo ngài Văn Thù lựa pháp tu viên thông",
  type: 'article',
  status: 'published',
  order: 14,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-07',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-13-phat-bao-ngai-van-thu-lua-phap-tu-vien-thong/H%C3%A0nh_tr%C3%ACnh_gi%C3%A1c_ng%E1%BB%99.png',
      readingContent,
      tableOfContents: [
              {
                      "id": "i-phat-bao-ngai-van-thu-lua-chon-phap-tu-vien-thong",
                      "label": "I. Phật bảo ngài Văn Thù lựa chọn pháp tu viên thông"
              },
              {
                      "id": "ii-ngai-van-thu-vang-loi-phat-lua-phuong-phap-tu",
                      "label": "II. Ngài Văn Thù vâng lời Phật lựa phương pháp tu"
              },
              {
                      "id": "nguyen-van-chu-han",
                      "label": "Nguyên văn chữ Hán",
                      "indent": 1
              },
              {
                      "id": "dich-nghia",
                      "label": "Dịch nghĩa",
                      "indent": 1
              },
              {
                      "id": "luoc-giai-1",
                      "label": "Lược giải",
                      "indent": 1
              },
              {
                      "id": "iii-chung-sanh-o-the-gioi-ta-ba-nay-nho-co-nghe-phap-moi-biet-duong-loi-tu-hanh",
                      "label": "III. Chúng sanh ở thế giới Ta-bà nhờ nghe pháp mới biết đường tu"
              },
              {
                      "id": "iv-cong-nang-cua-nhi-can-tai-nghe",
                      "label": "IV. Công năng của nhĩ căn (tai nghe)"
              },
              {
                      "id": "v-ngai-van-thu-quo-trach-ong-a-nan-hoc-nhieu-ma-khong-tu",
                      "label": "V. Ngài Văn Thù quở trách ông A Nan học nhiều mà không tu"
              },
              {
                      "id": "luoc-giai-2",
                      "label": "Lược giải",
                      "indent": 1
              },
              {
                      "id": "vi-cac-vi-nghe-phap-duoc-chung-ngo",
                      "label": "VI. Các vị nghe pháp được chứng ngộ"
              },
              {
                      "id": "vii-a-nan-cau-phat-chi-day-phuong-phap-de-do-chung-sanh-doi-sau",
                      "label": "VII. A Nan cầu Phật chỉ dạy phương pháp độ chúng sanh đời sau"
              },
              {
                      "id": "viii-phat-day-phai-tu-gioi-dinh-hue",
                      "label": "VIII. Phật dạy phải tu Giới, Định, Huệ"
              },
              {
                      "id": "luoc-giai-3",
                      "label": "Lược giải",
                      "indent": 1
              },
              {
                      "id": "ix-day-noi-ve-dai-thua-tam-gioi-co-bon-dam-sat-dao-vong",
                      "label": "IX. Đại thừa tâm giới có bốn: dâm, sát, đạo, vọng"
              },
              {
                      "id": "a-truoc-doan-long-dam",
                      "label": "A. Trước đoạn lòng dâm",
                      "indent": 1
              },
              {
                      "id": "luoc-giai-4",
                      "label": "Lược giải",
                      "indent": 1
              },
              {
                      "id": "b-doan-long-sat-hai",
                      "label": "B. Đoạn lòng sát hại",
                      "indent": 1
              },
              {
                      "id": "luoc-giai-5",
                      "label": "Lược giải",
                      "indent": 1
              },
              {
                      "id": "c-doan-tru-trom-cuop",
                      "label": "C. Đoạn trừ trộm cướp",
                      "indent": 1
              },
              {
                      "id": "d-doan-tru-vong-ngu",
                      "label": "D. Đoạn trừ vọng ngữ",
                      "indent": 1
              },
              {
                      "id": "luoc-giai-6",
                      "label": "Lược giải",
                      "indent": 1
              },
              {
                      "id": "luoc-giai-7",
                      "label": "Lược giải",
                      "indent": 1
              }
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-13-phat-bao-ngai-van-thu-lua-phap-tu-vien-thong/L%C4%83ng_Nghi%C3%AAm_Tinh_Y%E1%BA%BFu.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/SLzSL21WR30',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/3rwcvP8UAKl8jBDImwfI8x?utm_source=generator',
    },
  ],
  quiz: {
    title: "Câu hỏi ôn tập - Phật bảo ngài Văn Thù lựa pháp tu viên thông",
    passPercentage: 70,
    questions,
  },
}

export default lesson
