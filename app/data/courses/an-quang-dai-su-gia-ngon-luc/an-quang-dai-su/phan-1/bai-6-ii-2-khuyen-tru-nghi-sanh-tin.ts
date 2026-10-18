import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/2.khuyen-tin-hanh-nguyen/2.khuyen-tru-nghi-sanh-tin'
  return `${base}/${encodeURIComponent(file)}`
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <h2 class="mt-0 text-3xl font-bold text-primary-700 dark:text-primary-300">2. Khuyên trừ nghi sanh tín</h2>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Pháp môn Tịnh Ðộ nếu tin cho tới, còn gì tốt lành hơn! Nếu trí mình chưa quyết thì phải nên tin tưởng lời chân thành của chư Phật, chư Tổ, trọn chẳng được một niệm nghi tâm. Nghi sẽ chẳng tương ứng chư Phật, lâm chung nhất định khó thể cảm thông. Cổ nhân bảo: “Pháp môn Tịnh Ðộ chỉ có Phật với Phật mới có thể hiểu trọn vẹn. Hàng Ðăng Ðịa Bồ Tát13 chẳng biết được ít phần”. Hàng Ðăng Ðịa Ðại Sĩ còn chẳng thể biết hết, huống hồ là hạng phàm phu lè tè sát đất lại vọng sanh ức đoán ư?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Nếu tâm sanh tử thật sự thiết tha, tin tới nơi, tâm chẳng sanh một niệm ngờ vực thì dù chưa ra khỏi Sa Bà, đã chẳng còn là khách trọ lâu ngày trong chốn Sa Bà; chưa sanh Cực Lạc, nhưng đã là khách quý cõi Cực Lạc. Thấy người hiền mong mình được bằng, gặp điều nhân đừng để lỡ. Há có nên do dự, lười nhác, sao nhãng, để đến nỗi một phen lầm lỡ khiến mình bị lỡ làng mãi mãi ư? Là trang nam nhi có huyết tánh, dứt khoát chẳng chịu sống làm thây đi, thịt chạy, chết mục nát như cỏ cây. Hãy gắng lên, cố lên!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Trong các pháp môn khác, tiểu pháp thì đại căn chẳng cần tu, đại pháp thì tiểu căn chẳng tu nổi. Chỉ có một pháp Tịnh Ðộ này thích ứng khắp ba căn, gồm thâu lợi độn. Trên thì Quán Âm, Thế Chí, Văn Thù, Phổ Hiền, không vị nào vượt ra ngoài pháp này; dưới thì ngũ nghịch, thập ác, chủng tánh A Tỳ cũng được dự vào. Nếu Như Lai chẳng mở ra pháp này thì chúng sanh đời mạt muốn liễu sanh thoát tử ngay trong đời này tuyệt chẳng có chút hy vọng gì!</p>
    <p>Tuy pháp môn này rộng lớn như thế, nhưng cách tu lại cực giản dị. Bởi lẽ đó, chẳng phải là người kiếp trước có thiện căn Tịnh Ðộ sẽ khó thể tin chắc chẳng nghi. Chẳng riêng phàm phu không tin, phần nhiều hàng Nhị Thừa cũng nghi. Chẳng những Nhị Thừa chẳng tin, quyền vị Bồ Tát vẫn có người còn nghi. Chỉ có các vị Bồ Tát Ðại Thừa địa vị cao sâu mới có thể triệt để tin tưởng không nghi.</p>
    <p>Người sanh lòng tin sâu xa nơi pháp này, dù là phàm phu đầy dẫy triền phược nhưng chủng tánh đã vượt qua Nhị Thừa, khác nào Thái Tử ngã xuống đất vẫn quý hơn quần thần. Tuy tài đức chưa lập, nhưng cậy vào thế lực của cha, cảm được báo như thế. Người tu Tịnh Ðộ cũng giống như vậy. Do dùng tín nguyện trì danh hiệu Phật nên có thể đem tâm phàm phu gieo vào biển giác của Phật. Bởi thế, ngầm được Phật trí, ám hợp đạo mầu.</p>
    <p>Muốn bàn về pháp tu trong Tịnh Ðộ mà chẳng nói lược qua sự khó khăn của các pháp cậy vào tự lực để liễu thoát và sự dễ dàng của pháp cậy vào Phật lực này thì người nghe nếu chẳng nghi pháp cũng sẽ nghi chính mình. Nếu tâm có chút mảy may nào nghi ngờ, sẽ do nghi thành chướng; đừng nói là không tu, dù tu cũng chẳng được lợi ích thật sự. Do vậy phải nói rằng Tín là một pháp chẳng thể không gấp gáp giảng giải để mong gây dựng sâu xa đến cùng cực vậy!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Pháp môn Tịnh Ðộ do Phật Thích Ca và Di Ðà kiến lập, do Văn Thù, Phổ Hiền chỉ quy, do Mã Minh, Long Thọ hoằng dương, do các vị Khuông Lư (Huệ Viễn), Thiên Thai (Trí Khải), Thanh Lương, Vĩnh Minh, Liên Trì, Ngẫu Ích phát huy, xướng suất để khuyên khắp dù phàm hay thánh, dù ngu hay trí. Các vị Bồ Tát đại sĩ ấy trăm ngàn năm trước, sớm đã vì ta nghiên cứu khắp các giáo pháp trong Ðại Tạng, đặc biệt chọn ra pháp chẳng cần đoạn Hoặc mà được dự ngôi Bổ Xứ này, ngay trong một đời này quyết định xổ lồng, chí viên, chí đốn, cực kỳ giản dị, thống nhiếp Thiền - Giáo - Luật, lại vượt xa Thiền Giáo Luật cho dù căn cơ cạn hay sâu, dù Quyền hay Thật. Thật là một diệu pháp thật đặc biệt, siêu việt lẽ thường.</p>
    <p>Chúng ta chẳng tin tưởng Phật, Tổ là những bực thầy từ xưa bằng những vị tri thức cận thời hay sao? Kinh Hoa Nghiêm là vua trong Tam Tạng, cuối kinh quy kết chú trọng nguyện vương. Hoa Tạng hải chúng đều đã chứng Pháp Thân, đều cầu vãng sanh hòng viên mãn Phật Quả. Bọn ta là hạng gì mà lại dám chẳng bắt chước theo? Hãy bỏ tâm cuồng ấy, tận lực thực hành đạo này. Công đức lợi ích sẽ tự chứng biết. Nào đợi phải tham học khắp cả rồi mới thành hạng biết pháp ư?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Luận bàn xác thực thì pháp môn Ðại Thừa, pháp nào cũng viên diệu. Nhưng căn cơ có sống, chín, duyên có cạn, sâu. Bởi thế, xét về mặt lợi ích thì có “khó được” và “dễ được”. Tổ Thiện Ðạo, hóa thân của Phật Di Ðà, đã dạy chuyên tu. Ngài chỉ e hành nhân tâm chí bất định, bị các thầy trong những pháp môn khác lung lạc, nên bảo: Cho dù thánh nhân Sơ Quả, Nhị Quả, Tam Quả, Tứ Quả, và Thập Trụ, Thập Hạnh, Thập Hồi Hướng, Ðẳng Giác Bồ Tát cho đến thập phương chư Phật tận hư không, trọn pháp giới hiện thân, phóng quang, khuyên ta bỏ pháp Tịnh Ðộ, giảng cho pháp thù thắng nhiệm mầu nào khác, ta cũng chẳng chịu nhận. Thưa là do lúc ban đầu đã phát tâm chuyên tu Tịnh Ðộ, chẳng dám trái nghịch nguyện ấy.</p>
    <p>Hòa Thượng Thiện Ðạo đã sớm thấy người đời sau đứng núi này trông núi nọ, chẳng có kiến giải nhất định. Vì thế Ngài nói như vậy để kiệt lực xoay chuyển cái tâm ngấm nghé cuồng vọng, ưa ham cầu. Ai đã biết ngài Thiện Ðạo là thầy mà lại chẳng tuân theo? Thế mà người tuân theo lời Ngài thật chẳng được mấy! Có phải là do túc thế ác nghiệp sai khiến đến nỗi ngoảnh mặt bỏ lỡ pháp khế lý, khế cơ bậc nhất này, không Thiền, không Tịnh Ðộ, nghiệp thức mang mang, làm kẻ không cội rễ trong nẻo luân hồi đó chăng? Áo não thay!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Tu hành Tịnh Ðộ có cái lẽ quyết định chẳng nghi. Chẳng cần phải hỏi han người khác hiệu nghiệm hay không! Dù khắp cả người đời không ai được hiệu nghiệm, cũng chẳng sanh nhất niệm nghi tâm, cứ lấy lời lẽ chân thành của Phật, Tổ làm căn cứ. Nếu hỏi người khác về sự hiệu nghiệm, chính là tin Phật chưa đến mức cùng cực, tâm vẫn còn so đo, chưa thể trọn vẹn mọi sự. Nam nhi anh liệt quyết chẳng đến nỗi bỏ lời Phật để tin lời người, trong tâm không chủ ý, chỉ muốn cậy vào lời người khác khoe hiệu nghiệm để hướng dẫn tiền đồ của chính mình. Thật chẳng đáng buồn ư?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Do tập khí, mỗi chúng sanh có điểm riêng thiên trọng. Kẻ ngu thiên về cái tầm thường, hèn kém. Người trí thiên về điều cao thượng. Nếu kẻ ngu cam phận ngu, chẳng tạp dụng tâm, chuyên tu Tịnh nghiệp sẽ ngay trong đời này quyết định được vãng sanh. Như vậy dù ngu nhưng chẳng ai bằng được. Nếu là người trí, nhưng chẳng tự đắc, vẫn từ Sự hướng đến pháp môn cậy vào Phật từ lực, cầu sanh Tịnh Ðộ thì có thể nói là bậc đại trí. Còn như cậy vào kiến giải của mình, miệt thị Tịnh Ðộ; sẽ thấy kẻ đó từ kiếp này đến kiếp khác, trầm luân ác đạo, muốn học đòi theo kiểu ngu phu ngày hôm nay cũng trọn chẳng thể được!</p>
    <p>Những người thông hiểu Tánh Tướng Tông Giáo, tôi thực sự ái mộ, nhưng chẳng dám học theo. Vì sao? Là vì dây ngắn chẳng kéo được nước sâu, túi nhỏ chẳng thể chứa vật lớn. Tôi chẳng bảo là hết thảy mọi người đều nên phỏng theo việc tôi làm. Nhưng nếu cũng hèn kém như tôi mà lại toan học theo hành vi của bậc đại thông gia, toan thẳng vào diệu ngộ tự tâm, vẫy vùng biển giáo, tôi chỉ e chẳng thành bậc đại thông gia, trái lại còn bị hàng ngu phu, ngu phụ già giặn, chắc thật niệm vãng sanh Tây Phương thương xót! Há có phải là biến khéo thành vụng to, toan bay lên không nhưng lại bị rớt xuống vực sâu thăm thẳm đó chăng? Một lời đủ để bao quát hết: Hãy tự xét kỹ căn cơ của chính mình mà thôi!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Ông La Ðài Sơn chẳng được vãng sanh, lại bị đọa vào nơi phước báo là do tập khí văn chương quá nặng. Tập khí ấy đã nặng, dù nói là niệm Phật, nhưng thực ra niệm niệm đặt nơi công phu sáng tác văn chương. Công phu niệm Phật chỉ là chống đỡ mặt ngoài đó thôi. Ðấy là bệnh chung của văn nhân, chẳng phải chỉ riêng Ðài Sơn thôi đâu! Phật bảo thế trí biện thông là một trong tám nạn, chính là vì lẽ này.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Người sống trong cõi đời, nhất nhất phải theo đúng bổn phận của mình, chẳng thể vọng tưởng tính toán ra ngoài bổn phận. Tức là như thường nói: “Quân tử chẳng vượt ngoài phận vị của mình”. Cũng như nói: “Quân tử chỉ làm đúng theo phận vị của mình”. Tuy đối với pháp môn Tịnh Ðộ đã sanh tín tâm, nhưng ý niệm ưa cao, chuộng trội vẫn còn chưa buông xuống được, chưa chịu đặt mình vào hàng ngu phu, ngu phụ. Phải biết rằng ngu phu, ngu phụ dễ liễu thoát sanh tử bởi tâm họ chẳng có dị kiến.</p>
    <p>Nếu hiểu Tông, thông Giáo, toàn thân có thể buông xuống hết, thực hành công phu của hạng ngu phu, ngu phụ thì cũng dễ liễu thoát sanh tử. Nếu không thì bậc cao nhân thông Tông, thông Giáo lại chẳng bằng ngu phu, ngu phụ đới nghiệp vãng sanh! Pháp môn Tịnh Ðộ lấy vãng sanh làm chủ, tùy duyên tùy phận chuyên tinh chí mình, Phật quyết chẳng dối người. Nếu không, mong bay lên hóa ra lại rớt xuống; đấy là tự mình lầm lẫn, nào phải lỗi của Phật đâu!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Một pháp Tịnh Ðộ chính là pháp môn tối huyền, tối diệu, chí viên, chí đốn trong giáo pháp của cả một đời Ðức Phật (một pháp có đủ hết thảy pháp là Viên, ngay trong đời này tu sẽ chứng đắc ngay trong đời này nên bảo là Ðốn). Hạng phàm phu lè tè sát đất cũng vào được pháp này, bậc Ðẳng Giác Bồ Tát cũng chẳng ra khỏi pháp này. Thực là một con đường tắt để thượng thánh hạ phàm chóng thành Phật đạo, là một chiếc thuyền từ phổ độ chúng sanh của chư Phật, chư Tổ.</p>
    <p>Chẳng sanh tín tâm nơi pháp này, hoặc tin chẳng chân thành, thiết tha, chính là do nghiệp chướng sâu nặng, chẳng kham liễu sanh thoát tử, siêu phàm nhập thánh, đời đời kiếp kiếp vĩnh viễn thường luân hồi lục đạo trong thế giới này, chẳng có kỳ ra. Dẫu được làm thân trời, người, thời gian ấy rất ít, như khách chỉ ở trọ. Một phen đọa trong tam đồ, thời gian ấy dài lâu như ở yên nơi quê nhà. Mỗi lần nghĩ đến tâm kinh sợ, dựng đứng lông tóc, chẳng nề rát miệng khẩn cáo đồng nhân.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Xem kỹ thơ ngài gởi đến, bàn luận nhiều điều, nhưng có thể nói gọn một lời là “chỉ dùng tri kiến phàm phu để suy lường xằng bậy Phật trí mà thôi”! Vả như chúng ta từ sống đến chết, trong là thân tâm, ngoài là cảnh giới, có một ai biết rõ được nguyên do mọi sự chăng? Từ khi mình có hiểu biết đến nay, thấy tiền nhân làm sao mình cũng bắt chước làm đúng như thế thì thân thể mới được thành lập, mọi sự mới thuận tiện, thích đáng, thân tâm an lạc, từ sống đến chết hưởng thọ tự tại. Ðối với những lời khuyên dụ của đức Như Lai, các hạ cho rằng vì chẳng biết ngọn ngành Phật trí và ngọn ngành Tịnh Ðộ như thế nào, nên dù Phật, Tổ nói lời thành thực, cũng chẳng thể nhân đó sanh lòng tin.</p>
    <p>Xin lấy chuyện này để xét: Các hạ suốt ngày ăn cơm, suốt ngày mặc áo, thì có biết hay là không biết nguồn gốc của việc chống đói, ngăn lạnh chăng? Nếu nói là biết thì ai là người biết, xin chỉ đích xác ra. Nếu chỉ không được, vẫn là theo quy củ của tiền nhân đã lập mà ăn cơm, mặc áo! Sao lại đối với diệu pháp liễu sanh thoát tử bậc nhất, cứ đòi phải biết trước cội nguồn rồi mới sanh lòng tin, trọn chẳng chịu do lời thành thực của chư Phật, chư Tổ mà sanh lòng tin vậy?</p>
    <p>Hơn nữa, nếu các hạ có bệnh cần phải uống thuốc thì trước hết sẽ mở sách Bản Thảo, Mạch Quyết ra xem để biết dược tánh, nguồn gốc căn bệnh rồi căn cứ trên bệnh chứng mà kê toa, sau đấy mới uống thuốc; hay là lập tức mời thầy lang chẩn mạch, lập tức uống thuốc? Nếu lập tức uống thuốc thì việc trị bệnh và học Phật mâu thuẫn nhau quá!</p>
    <p>Dù cho có mở sách Bản Thảo, Mạch Quyết ra xem để biết dược tánh, gốc bệnh, cũng vẫn mâu thuẫn với việc học Phật. Vì sao vậy? Bản Thảo, Mạch Quyết đều là lời để đời của tiền nhân. Ông chưa thể tận mắt thấy, làm sao tin được? Nếu bảo những câu trong Bản Thảo, Mạch Quyết chẳng thể không tin thì lời của Phật, Tổ, thiện tri thức sao lại đều chẳng tin, cứ phải chính mình thấy mới tin?</p>
    <p>Với tri kiến của ông, nếu cứ thực tình mà luận thì trước hết phải thấy thuốc ấy chạy vào kinh lạc nào, trị được bệnh nào, rồi mới kê toa, uống thuốc; quyết chẳng chịu dựa theo những điều nói trong Bản Thảo, Mạch Quyết để lập toa, uống thuốc. Vì sao vậy? Vì chưa từng thấy.</p>
    <p>Nay nguồn gốc của việc chống đói, ngăn lạnh, trị bệnh chưa từng thấy nhưng vẫn cứ ăn cơm, mặc áo, uống thuốc; thế thì ngọn nguồn của Phật và Tịnh Ðộ chưa từng thấy, dù có lời thành thực của Phật, của Tổ cũng chẳng tin là vì lẽ gì? Với điều này thì coi là chuyện liên quan đến tánh mạng, tuy không biết vẫn chẳng dám không làm đúng như thế. Còn với chuyện kia lại cậy mình cao minh, đòi phải thấy tột cùng mới chịu tu trì pháp ấy. Xưa nay được mấy kẻ hào kiệt phi thường như thế? Do tri kiến đó, rốt cục chẳng hưởng lợi ích thật sự của Phật pháp.</p>
    <p>Những kẻ bị coi là ngu phu, ngu phụ kia, thoạt đầu cũng chẳng biết gì, nhưng y theo quy củ của tiền nhân, cắm đầu niệm Phật. Bởi đó, ngầm thông Phật trí, thầm hợp đạo mầu, liền được đới nghiệp vãng sanh, cùng kẻ đoạn Hoặc vãng sanh đều chứng Phật Quả, có hơn kẻ chỉ biết xuông rồi thôi chăng? Loại người tự dán nhãn mình là hạng xuất cách, do nghi sanh báng, sẽ từ kiếp này sang kiếp khác, đọa mãi trong ác đạo, dù hàng ngu phu, ngu phụ niệm Phật vãng sanh thương xót muốn cứu vớt giùm cũng chẳng biết làm sao! Vì sao? Vì hạng này bị ác nghiệp bất tín đời trước chướng ngại. Trí của các hạ như bảo kiếm Can Tương, Mạc Gia, chặt ngọc như chém bùn. Do chẳng khéo dùng trí ấy, khác nào dùng thanh Can Tương, Mạc Gia để chém bùn, bùn không việc gì, uổng phí kiếm sắc, chẳng đáng buồn sao?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Phật pháp là tâm pháp. Hết thảy pháp thế gian chẳng sánh ví được. Có sánh ví chẳng qua là để khiến người ta lãnh hội được ý nghĩa. Chẳng được chấp chết vào sự để bàn ngang. Dùng cái quạt để ví cho mặt trăng, rung cây dạy gió. Nếu cứ do cái quạt tìm lấy quang minh, từ nơi cây tìm ra sự phất phơ thì có còn gọi được là trí hay chăng? Tuy mộng cảnh là giả, nhân quả là chân, cũng chẳng ngại dùng mộng cảnh để ví dụ nhân quả, cốt sao chúng phù hợp nhau. Là sao? Vọng tâm là Nhân, mộng cảnh là Quả. Nếu không vọng tâm chắc chắn chẳng có mộng cảnh. Ðiều này nhất định chẳng dễ luận. Tâm thiện ác và việc tu trì là Nhân, được quả báo thiện ác và quả báo tu trì là Quả. Các hạ phải tin; nếu không, do vọng tâm là nhân của mộng sẽ được mộng cảnh. Tâm niệm Phật là nhân thành Phật, gần là được vãng sanh Tây Phương, xa là rốt ráo viên thành Phật đạo. Ðấy chính là điều ngài đang nghi, ngăn trở ngài phát khởi lòng tin vậy!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Hãy để chuyện Phật rốt ráo là có hay không lại đó. Các hạ cứ muốn cật vấn Phật là có hay là không thì hãy tự hỏi chính các hạ rốt ráo là có hay là không? Nếu bảo là không thì mối ràng buộc này đây, ai là người thuật nói? Nếu bảo là có, xin hãy chỉ đích xác! Lời lẽ của người nói chỉ là do yết hầu và thức tâm hợp lại mà có. Văn tự cũng do thức tâm, tay, bút vận động mà hiện. Mỗi mỗi đều chẳng ngoài Ngũ Uẩn: Sắc, Thọ, Tưởng, Hành, Thức, đều chẳng phải là các hạ! Rời ngoài năm pháp này có chỉ được ai là các hạ để hỏi Phật rốt ráo là có hay không, mà cho đó là câu hỏi đại trí huệ? Nếu chẳng chỉ ra được chính mình là có hay không, nhưng lại muốn biết Phật là có hay không trước đã thì đấy chỉ là câu hỏi cuồng vọng, không đáng luận tới, chẳng phải câu hỏi thấu đạt lý đến cùng tận! Phật rốt ráo là có. Vì phàm tình của ông chưa sạch, nên Phật chẳng thể hiện. Chính các hạ cũng là có. Do Ngũ Uẩn của ông chưa là không nên cũng chẳng thể chỉ ra ngoài Sắc, Thọ, Tưởng, Hành, Thức được!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Kinh Kim Cang dạy hàng Bồ Tát phát tâm Bồ Ðề, phát tâm độ hết thảy chúng sanh khiến họ đều chứng Vô Dư Niết Bàn, nhưng chẳng thấy có một</p>
    <p>chúng sanh được diệt độ. Chẳng trụ vào Sắc, Thanh, Hương, Vị, Xúc, Pháp để hành bố thí. Bố thí đứng đầu trong lục độ vạn hạnh. Nêu lên bố thí thì trì giới, nhẫn nhục, tinh tấn, thiền định, trí huệ, cho đến vạn hạnh cũng đều chẳng trụ vào Sắc, Thanh, Hương, Vị, Xúc, Pháp để tu. Văn kinh này giản lược, chỉ nêu bố thí để nói chung tất cả các pháp kia.</p>
    <p>Hãy nên không trụ vào đâu để sanh tâm. Không có các tướng ngã, nhân, chúng sanh, thọ giả mà tu hết thảy thiện pháp. Nói như vậy thì bảo là hữu tướng hay vô tướng?</p>
    <p>Tướng quang minh rộng lớn như thế chật kín thái hư mà bảo là không thì khác gì mù lòa từ lúc mới sanh? Nói “không có một chúng sanh được độ” là chẳng trụ vào tướng, vô tướng. “Vô sở trụ” là muốn cho con người chẳng vướng mắc trong phàm tình, thánh kiến, rồi chấp trước tướng.</p>
    <p>Nói “độ tận chúng sanh, hành bố thí, sanh tâm, tu thiện pháp” là muốn cho con người xứng tánh tu tập pháp tự lợi, lợi tha, ngõ hầu mình lẫn người cùng được viên mãn Bồ Ðề mới thôi, đừng vướng vào đó, vọng chấp vô tướng là rốt ráo, chia xẻ cùng một tri kiến với kẻ nhai bã hèm, có đáng gọi là người có trí huệ chăng? Tín có gì là khó khởi, nghi có gì là khó trừ? Ông quyết định chẳng chịu khởi, quyết định chẳng chịu trừ. Dù Phật có đích thân thuyết pháp cho ông, cũng chẳng làm sao được! Huống hồ tôi đây chỉ là kẻ phàm phu đầy dẫy triền phược?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Muốn biết Phật là thật hay giả, sao chẳng đối với những lý được bàn trong Tịnh Ðộ Văn, Tây Quy Trực Chỉ và những chuyện được chép trong ấy mà phát khởi lòng tin, dứt lòng nghi, lại cho những ngôn luận, sự tích ấy chỉ là chuyện bịa đặt, lời đồn, chẳng đáng để vào mắt vậy? Nếu nghĩ như vậy thì nhất định linh hồn chẳng đọa trong năm đường nào khác, chỉ ở ngay trong địa ngục A Tỳ đến hết đời vị lai. Cứ mãi mãi hưởng thọ vạc sôi, lò than, rừng gươm, núi đao do tâm hiển hiện, cứ coi chúng như các thứ lạc cảnh tự tại thọ dụng. Coi đó là vui thì chẳng thể khuyên dụ được nữa!</p>
    <p>Ông cứ muốn biết Phật là thật hay giả, dù Tịnh Ðộ Văn, Tây Quy Trực Chỉ nói gì đi nữa đều coi là chẳng thật; chỉ khi tự mình thấy, đích thân chứng, mới nhận là thật; nay tôi lấy một sự tướng để hỏi, ông nên thẳng thắn đáp lời, chẳng được hàm hồ, thoái thác.</p>
    <p>Bắc Thông Châu Vương là Tiền San, thời nhà Thanh từng giữ chức Phiên Ðài ở Quảng Tây. Khi ấy, Quảng Tây thổ phỉ rất nhiều. Lúc ông Tiền coi việc binh bị bèn bày kế diệt hết phỉ đảng, bắt giết rất nhiều. Bốn năm trước đây, ông mắc bệnh rất nặng. Cứ chợp mắt liền thấy mình ở trong căn nhà tối. Nhà đó rất lớn, lại rất tối, bọn quỷ vô số đều đến bức bách ông, sợ quá tỉnh dậy. Một lát sau, chợp mắt lại thấy y như cảnh cũ, lại hoảng sợ tỉnh dậy. Suốt ba ngày đêm chẳng dám chợp mắt. Ông ta chỉ còn thở thoi thóp, vợ bèn khuyên dụ: “Ông cứ như thế chẳng tốt đâu! Ông niệm nam mô A Di Ðà Phật đi, niệm Phật sẽ ổn ngay!” Tiền San nghe vậy liền gắng niệm. Ðược một chốc liền ngủ, ngủ đẫy một giấc không mộng mị gì, mà bệnh cũng dần dần thuyên giảm. Nhân đó, ông trường trai niệm Phật. Năm ngoái, Tiền San và Trần Tích Chu lên núi, có trò chuyện cùng Quang.</p>
    <p>Nếu các hạ lâm vào cảnh ấy, thì cứ phải biết trước là Phật là thật hay giả rồi sau mới niệm chăng? Hay là nghe xong liền niệm? Nếu lúc ấy chẳng nhọc công xét thật, giả, cứ niệm ngay, thì hiện tại sao lại cùng người đời này bàn bạc ngôn luận, sự tích người đời trước là thật hay hư? Cứ nhất loạt cho là vọng, chỉ cầu lấy chỗ đúng; cứ vin vào đó khiến tâm cảnh mơ màng, mờ mịt, còn toan nhỏ lệ khóc cầu nữa ư? Ðã có thể coi phú quý như chiếc dép rách, sao không thể coi chấp trước giống như chiếc dép rách để bỏ sạch cả đi? Ông tính dùng tri kiến ấy để làm cửa nhập đạo đấy ư? Chẳng biết nó chính là đường để đạt địa ngục A Tỳ đấy!</p>
    <p>Lấy mộng để ví cho Phật thì vọng tâm là Nhân, mộng cảnh là Quả. Ví như niệm Phật là Nhân, vãng sanh gặp Phật là Quả. Vì sao có thể lấy sáu thí dụ trong kinh Kim Cang làm chứng? Ngôn ngữ, văn tự thế gian, một chữ, một sự, chẳng ngại gì diễn tả cả sang lẫn hèn, giảng giải cả tốt lẫn xấu. Chẳng hạn như chữ “Tử”, dùng để chỉ mình đức Phu Tử cũng được, mà chỉ người bình thường cũng được, dùng để gọi con cái cũng tốt. Ðều phải dựa vào văn mạch để xác định ý nghĩa, quyết chẳng thể đối với chữ Tử có nghĩa là Phu Tử, lại giảng là “nhi tử” (con cái) được. Cõi Phật là mộng cảnh, đâu cần chờ các hạ thành Phật rồi mới nói sau. Nói như vậy chỉ tự tổn hại, vô ích mà thôi!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Sự, Lý, Tánh, Tướng, Không, Hữu, Nhân, Quả lẫn lộn chẳng phân, chi bằng học theo ngu phu, ngu phụ, cắm cúi niệm Phật, cứ chí cung, chí kính, một mực thành khẩn. Lâu ngày chầy tháng, nghiệp tiêu, trí rạng, chướng tận, phước dày, mối nghi tâm ấy triệt để rơi rụng hết, thì những chuyện Phật có hay là không, chính mình là có hay là không, đường nẻo “vào cửa Phật, lên bờ kia” đã có xác cứ, nào phải đợi hỏi ai nữa!</p>
    <p>Nếu chẳng chuyên tâm, dốc chí niệm Phật, cứ cùng người khác bàn xuông những hiểu biết chỉ mới được một phần thì cũng giống như xem kinh Kim Cang nhưng chẳng biết Thật Tướng. Xem Tịnh Ðộ Văn, Tây Quy Trực Chỉ nhưng chẳng sanh tín tâm là do nghiệp ngăn chướng tâm, chẳng thể lãnh hội. Như kẻ mù nhìn mặt trời, mặt trời ở ngay trên không, mắt nhìn ngay vào mặt trời nhưng chẳng thấy được tướng sáng, nào khác lúc chẳng thấy. Nếu mắt được sáng lại, vừa nhìn liền thấy ngay tướng sáng.</p>
    <p>Một pháp Niệm Phật chính là một pháp tối thiết yếu để mắt được sáng lại. Muốn thấy tướng trạng Thật Tướng, hãy nên dốc trọn lòng thành nơi pháp này, ắt mau có ngày được thỏa nguyện lắm. Muốn tự thấy Chân Ngã, nếu chẳng phải là bậc đại triệt đại ngộ sẽ chẳng thể làm được. Muốn chứng ngộ mà chẳng đoạn Hoặc chứng chân sẽ không thể được. Muốn viên chứng, nếu ba Hoặc chưa đoạn sạch, hai tử (phần đoạn sanh tử và biến dịch sanh tử) chưa vĩnh viễn mất, sẽ chẳng thể được!</p>
    <p>Luận trên thực tại, các hạ luân hồi bao kiếp dài lâu và nay đang cật vấn những điều trái với giáo lý đều là do sức tác dụng của Chân Ngã. Do các hạ quay lưng với giác, xuôi theo trần lao, nên chẳng thể thọ dụng chân thật. Khác nào cái đầu của gã Diễn Nhã14 , hạt châu trong áo, từ đầu đến cuối chưa hề mất, lầm sanh sợ hãi, lầm chịu khốn cùng vậy!</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Tất cả thế gian dù là căn thân hay là thế giới đều là do đồng nghiệp, biệt nghiệp trong tâm của chúng sanh cảm thành, đều có thành hoại, đều chẳng trường cửu. Thân có sanh, già, bệnh, chết; thế giới có thành, trụ, hoại không. Câu nói: “Vật cực tắc phản, cực lạc sanh bi” (mọi sự đến chỗ cùng cực sẽ chuyển biến theo chiều ngược lại, vui quá hóa buồn) là nói về ý này. Do Nhân đã là sanh diệt, Quả cũng chẳng thể không sanh diệt.</p>
    <p>Thế giới Cực Lạc là thế giới do Phật A Di Ðà đã chứng ngộ triệt để Phật tánh sẵn có trong tự tâm, tùy tâm biến hiện, xứng tánh trang nghiêm. Vì thế, sự vui trong cõi ấy chẳng có lúc cùng tận. Ví như hư không rộng rãi to lớn, bao hàm hết thảy sâm la vạn tượng. Dù thế giới nhiều lần thành, nhiều lần hoại, hư không rốt ráo chẳng bị tăng giảm.</p>
    <p>Ông đem sự vui thế gian để nạn sự vui Cực Lạc, nhưng sự vui Cực Lạc ông chưa thể thấy. Dẫu ông chưa thể thấy toàn bộ hư không, nhưng với khoảng hư không trong vòng trời đất đây, ông có bao giờ thấy nó bị biến cải hay chưa?</p>
    <p>Phải biết rằng hết thảy chúng sanh đều có Phật Tánh. Vì thế Ðức Phật dạy con người niệm Phật cầu sanh Tây Phương để nhờ vào nguyện lực đại từ bi của Phật Di Ðà sẽ cũng được thọ dụng niềm vui bất sanh bất diệt ấy. Do căn thân là liên hoa hóa sanh nên không có nỗi khổ sanh, già, bệnh, chết. Thế giới là do công đức xứng tánh hóa hiện nên không có biến chuyển Thành, Trụ, Hoại, Diệt. Dù là thánh nhân vẫn có những điều không biết, há nên vì những pháp sanh diệt trong thế gian mà khởi nghi ư?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Pháp môn Tịnh Ðộ là bi tâm triệt để của đức Như Lai, là pháp môn phổ độ chúng sanh khiến cho những kẻ phàm phu đầy dẫy triền phược, không có sức đoạn Hoặc, nhờ tín nguyện trì danh sẽ được liễu thoát ngay trong đời này, cùng làm bè bạn với Quán Âm, Thế Chí. Trên đến bậc Ðẳng Giác Bồ Tát, địa vị gần kề Phật Quả vẫn còn phải vãng sanh mới thành Chánh Giác. Chí viên, chí đốn, thông trên, suốt dưới, vượt trội hết thảy các pháp môn đã được giảng trong cả một đời giáo hóa. Vì thế, trong khi Ðức Phật giảng kinh A Di Ðà, sáu phương chư Phật hiện tướng lưỡi rộng dài đồng thanh tán thán, khen là kinh Công Ðức Chẳng Thể Nghĩ Bàn Ðược Hết Thảy Chư Phật Hộ Niệm.</p>
    <p>Phật lại nói: Ta là Thích Ca Mâu Ni Thế Tôn làm được chuyện rất khó, hiếm có. Ðức Thế Tôn ta tự phô bày túc nhân, bảo: “Ta trong đời ác ngũ trược, làm được chuyện khó làm sau đây: chứng đắc Bồ Ðề, vì hết thảy thế gian nói pháp khó tin này. Thật là rất khó” khiến cho người nghe tin nhận, phụng hành, chỉ nhằm bày trọn bổn hoài xuất thế mà thôi.</p>
    <p>Nhưng pháp môn này rất sâu, khó lường, tuy đã được Bổn Sư và chư Phật Thế Tôn cùng khuyên nên tin tưởng, nhưng đời vẫn còn rất nhiều kẻ nghi. Chẳng những hạng thế trí phàm tình chẳng tin, ngay cả hạng tri thức thông hiểu Tông, Giáo sâu xa cũng còn ngờ vực. Chẳng những hạng tri thức chẳng tin, mà bậc Thanh Văn, Duyên Giác đã chứng Chân Ðế, nghiệp tận tình không hãy còn nghi ngờ. Chẳng những bậc tiểu thánh chẳng tin, ngay cả Quyền Vị Bồ Tát cũng hãy còn ngờ. Ngay đến bậc Pháp Thân Ðại Sĩ dù đã tin chắc, nhưng vẫn chẳng thể thấu hiểu tận cùng nguồn cội.</p>
    <p>Ấy là vì pháp môn này lấy Quả Giác làm Nhân Tâm, toàn thể là cảnh giới Phật, chỉ mình Phật với Phật mới có thể hiểu trọn, chẳng phải trí con người thấu hiểu được nổi! Bọn phàm phu ta ngửa tin lời Phật, y giáo phụng hành sẽ tự được lợi ích thật sự. Nếu được nghe pháp môn chẳng thể nghĩ bàn này thì phải là trong nhiều kiếp đã gieo sâu căn lành, huống hồ là tin nhận, phụng hành ư?</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Kinh Hoa Nghiêm vua của Tam Tạng, là do đức Như Lai lúc tối sơ thành Chánh Giác, vì các bậc Pháp Thân Ðại Sĩ thuộc bốn mươi địa vị đã vượt ngoài cửu giới, giảng ra pháp một đời thành Phật. Chỗ quy tông kết đảnh của Thật Nghĩa rốt ráo là “dùng mười đại nguyện vương, hồi hướng vãng sanh Tây Phương Cực Lạc thế giới để mong viên mãn Phật Quả”.</p>
    <p>Cảnh sở chứng của Thiện Tài đã bằng với Phổ Hiền, bằng với chư Phật, được gọi là bậc Ðẳng Giác Bồ Tát. Ðẳng Giác chỉ kém Phật một chút vẫn còn phải hồi hướng vãng sanh. Toàn bộ các Bồ Tát trong Hoa Tạng thế giới hải đều bẩm thọ giáo pháp này, cùng tu pháp này. Huống nay kẻ thông Tông, thông Giáo, mức căn tánh thông lợi, mức chứng nhập sâu xa có hơn nổi các vị Ðẳng Giác Bồ Tát kia chăng? Ngàn kinh, vạn luận, đâu đâu cũng dạy quy hướng. Vãng thánh tiền hiền ai nấy đều hướng về, những kinh luận ấy há chẳng đáng để tuân thủ, hành theo ư? Các vị thánh hiền ấy đều là hạng ngu phu, ngu phụ ư?</p>
    <p>Nói gọn một lời: Nghiệp sâu chướng nặng, chưa được giải thoát nên đến nỗi đối với việc hằng ngày còn chẳng biết, cứ quen thói chẳng suy xét đó thôi.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Nếu bảo: “A Di Ðà Phật an cư Cực Lạc. Mười phương thế giới vô lượng, vô biên. Trong một thế giới, chúng sanh niệm Phật đã nhiều vô lượng, vô biên, A Di Ðà Phật một thân làm sao tiếp dẫn khắp hết thảy những chúng sanh niệm Phật trong mười phương vô lượng vô biên thế giới được?”</p>
    <p>Ðáp: Sao ông lại dùng tri kiến phàm phu để suy lường Phật cảnh? Tôi mượn thí dụ nói rõ cho ông khỏi lầm. Một vầng trăng sáng rực trên không, hiện bóng trong vạn con sông, trăng có tâm chăng? Trên trời chỉ có một vầng trăng, nhưng biển cả, sông ngòi, sông to, suối nhỏ, đều hiện trọn vẹn khuôn trăng. Dù nhỏ như một chước15 , một giọt nước, không nơi nào chẳng hiện toàn thể bóng trăng.</p>
    <p>Vả nữa, vầng trăng hiện nơi sông, rạch, một người nhìn thì có một vầng trăng ở ngay trước người ấy. Trăm ngàn vạn ức người trong trăm ngàn vạn ức chỗ cùng nhìn, không một ai là chẳng có một vầng trăng ở ngay trước mặt. Nếu trăm ngàn vạn ức người ai nấy đi qua Ðông, Tây, Nam, Bắc; mỗi người đi đến đâu, luôn thấy trăng cũng đi theo đấy, chẳng hề gần xa! Nếu trăm ngàn vạn ức người đứng yên chẳng động, trăng cũng đứng yên chẳng động, thường ở bên người. Chỉ là nước trong lặng, trăng sẽ hiện; nước đục chao động, trăng ẩn mất. Trăng vốn chẳng lấy bỏ, trăng chẳng hiện là do nước đục ngầu, lay động, chẳng phản chiếu được bóng trăng.</p>
    <p>Tâm chúng sanh như nước, A Di Ðà Phật như trăng. Chúng sanh đầy đủ tín nguyện hạnh, chí thành cảm Phật thì Phật sẽ ứng như nước trong trăng hiện. Nếu tâm chẳng thanh tịnh, chẳng chí thành, ứng với tham, sân, si, trái nghịch Phật như nước vừa đục vừa xao động dù trăng vẫn chiếu xuống nhưng chẳng thể hiện bóng rõ ràng.</p>
    <p>Trăng là sắc pháp thế gian, còn diệu dụng như thế, huống hồ Phật A Di Ðà đã hết sạch phiền hoặc, phước huệ đầy đủ, tâm trùm thái hư, lượng trọn pháp giới ư? Vì thế kinh Hoa Nghiêm bảo: “Phật thân đầy khắp pháp giới, hiện trước khắp hết thảy chúng sanh. Tùy duyên cảm ứng không đâu là chẳng trọn khắp, nhưng luôn ngồi nơi tòa Bồ Ðề này”.</p>
    <p>Do đó, biết rằng Phật cảm khắp pháp giới, Phật ứng khắp pháp giới. Phật thật sự chưa từng khởi tâm động niệm, có ý tưởng đến đi, nhưng có thể khiến cho chúng sanh duyên đã thành thục thấy Ngài đến đây tiếp dẫn vãng sanh Tây Phương. Cho nên Phật chẳng phải là một, chẳng phải là hai. Chỉ nêu đại ý để sanh chánh tín mà thôi.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Phải biết rằng pháp môn Tịnh Ðộ chính là để nhiếp phục người thượng thượng căn. Vì thế, Thiện Tài đã chứng Ðẳng Giác, Phổ Hiền Bồ Tát vẫn dạy dùng mười đại nguyện vương hồi hướng vãng sanh ngõ hầu viên mãn Phật Quả; nhân đó, khuyên khắp Hoa Tạng hải chúng. Do vậy, ta biết rằng một pháp hồi hướng vãng sanh Tịnh Ðộ chính là pháp tối hậu để viên mãn Phật Quả.</p>
    <p>Ðời có kẻ cuồng chẳng hiểu kỹ giáo lý, thấy ngu phu, ngu phụ đều tu được pháp này bèn khinh rẻ, cho là pháp Tiểu Thừa, chẳng biết rằng đây chính là pháp môn đệ nhất một đời thành Phật, thành thỉ, thành chung của Hoa Nghiêm.</p>
    <p>Cũng có kẻ ngu tri kiến hẹp kém, nghĩ mình công phu cạn mỏng, nghiệp lực sâu dày, làm sao sanh ngay được; chẳng biết rằng tâm tánh chúng sanh và tâm tánh của Phật chẳng hai. Ngũ nghịch, thập ác sắp đọa địa ngục, gặp thiện tri thức dạy cho niệm Phật đủ cả mười tiếng hoặc chỉ mấy tiếng rồi liền chết đi, còn được vãng sanh. Lời Quán kinh dạy cớ sao chẳng tin?</p>
    <p>Bọn họ còn vãng sanh, huống hồ chúng ta dù còn tội nghiệp, dù ít công phu, sánh với kẻ thập ác ngũ nghịch kia chỉ niệm mười tiếng hay là mấy tiếng, còn vượt trội hơn rất nhiều, lẽ nào tự vội vàng bỏ qua đến nỗi đánh mất lợi ích vô thượng này?</p>
    <p>Như Lai gọi pháp môn Tịnh Ðộ này là pháp khó tin là vì hạ thủ dễ lại thành công cao, dùng công ít được hiệu quả nhanh. Chí viên, chí đốn, thẳng tắt, rộng lớn, giản dị, vượt trội hết thảy giáo lý thông thường. Chẳng phải xưa vốn đã có thiện căn, quyết sẽ khó tin nhận, phụng hành. Tôi thường nói: “Cửu giới chúng sanh lìa khỏi pháp môn này thì trên chẳng thể viên thành Phật đạo. Mười phương chư Phật bỏ pháp môn này thì dưới chẳng thể lợi khắp quần manh” là chuyện thực vậy.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">* Pháp môn Tịnh Ðộ độ khắp ba căn, chính là để tiếp độ căn khí thượng thượng, kiêm tiếp dẫn hạng trung hạ căn. Kẻ ngu thường hay chê là pháp thiển cận, Tiểu Thừa; nói chung là vì chẳng xem kinh luận Ðại Thừa, chưa phải là người thông suốt có đủ con mắt. Chỉ dùng cái tâm điên đảo, chấp trước của mình để suy lường đạo nguyên thủy trọng yếu, chung cục của Như Lai. Như kẻ mù ngó mặt trời, như người điếc nghe sấm, đương nhiên chẳng thấy, chẳng nghe, chỉ đành suy luận vọng tưởng!</p>
    <p>Phải biết một pháp tín nguyện niệm Phật là do Như Lai vì bi tâm triệt để phổ độ chúng sanh mà tuyên thuyết. Chỉ có các vị Bồ Tát như Quán Âm, Thế Chí, Văn Thù, Phổ Hiền mới có thể rốt ráo đảm đương. Bọn họ thấy ngu phu, ngu phụ đều niệm Phật được bèn coi là pháp Tiểu Thừa thiển cận, khác nào ngôi sao bé chỉ chiếm lãnh được khoảng trời nhỏ, con trùng bé chỉ bò được khoảng đất hẹp!</p>
    <p>Nếu tin tưởng được pháp này thì là nhiều kiếp đã trồng sâu thiện căn. Nếu có thể dùng tín nguyện sâu trì danh hiệu Phật, nhiếp trọn sáu căn, tịnh niệm tiếp nối thì cái tâm phàm phu đó biến thành Như Lai Tạng, như người nhiễm hương, thân có mùi thơm. Hiện tại đã tiếp xúc với khí phận của Phật thì lúc lâm chung lại chẳng cảm ứng đạo giao, được Phật tiếp dẫn hay sao?</p>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
    <h3 class="mt-10 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chú Thích:</h3>
    <p class="text-[0.95em]">13 . Ðăng Ðịa Bồ Tát: còn gọi là Ðịa Thượng Bồ Tát, bậc Bồ Tát đã chứng từ Sơ Ðịa trở lên. 14 . Ðầu gã Diễn Nhã: trong kinh Lăng Nghiêm có nhắc đến một người tên là Diễn Nhã, soi gương thấy mặt mình, bèn sanh vọng tưởng là đầu của ai đây, đầu của mình ở đâu, rồi đâm ra phát cuồng.</p>
    <p class="text-[0.95em]">15 . Chước: một phần trăm của thăng (ta thường dịch là thưng), đơn vị đo dung lượng rất nhỏ. Mười chước là một cáp (ta thường dịch là một “lẻ”). Một thưng gần bằng một lít (Tàu gọi litre là “công thăng”). Như vậy, có thể tạm hiểu một chước gần bằng một centilitre.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = 
[
  {
    "question": "Theo văn bản, pháp môn Tịnh Độ có đặc điểm gì nổi bật về mặt thích ứng căn cơ so với các pháp môn khác?",
    "options": {
      "a": "Chỉ dành cho người có đại căn vì là diệu pháp tối huyền tối diệu.",
      "b": "Thích ứng khắp ba căn, gồm thâu lợi độn từ Bồ Tát đến kẻ phạm tội ngũ nghịch.",
      "c": "Chỉ thích hợp cho hạng phàm phu hèn kém vì cách tu trì cực kỳ giản dị.",
      "d": "Yêu cầu hành nhân phải đoạn sạch phiền hoặc mới có thể tự lực vãng sanh."
    },
    "answer": "b"
  },
  {
    "question": "Trong Kinh Hoa Nghiêm, Bồ Tát Phổ Hiền đã dùng phương pháp nào để hướng dẫn các bậc Pháp Thân Đại Sĩ viên mãn Phật Quả?",
    "options": {
      "a": "Yêu cầu thâm nhập Tam Tạng kinh điển và tham học khắp nơi.",
      "b": "Dùng mười đại nguyện vương hồi hướng vãng sanh Cực Lạc.",
      "c": "Khuyên xả bỏ thân tâm, chuyên tu định tuệ cậy vào tự lực.",
      "d": "Khuyên quán chiếu tự tâm để đạt diệu ngộ thẳng vào tự tánh."
    },
    "answer": "b"
  },
  {
    "question": "Tổ Thiện Đạo khuyên người tu Tịnh Độ xử trí thế nào nếu các vị thánh nhân hay chư Phật hiện thân khuyên đổi sang pháp môn thù thắng khác?",
    "options": {
      "a": "Lập tức đổi sang pháp môn mới vì lời chư Phật khuyên dạy luôn đúng đắn.",
      "b": "Giữ vững lòng tin ban đầu, quyết chẳng chịu nhận vì đã phát tâm chuyên tu Tịnh Độ.",
      "c": "Xin thọ học kiêm cả hai pháp môn để tăng trưởng công đức tu tập.",
      "d": "Tự nghi ngờ căn cơ của mình và tìm gặp thiện tri thức để hỏi về sự hiệu nghiệm."
    },
    "answer": "b"
  },
  {
    "question": "Theo văn bản, nguyên nhân chính khiến ông La Đài Sơn không được vãng sanh mà đọa vào phước báo là gì?",
    "options": {
      "a": "Tập khí văn chương quá nặng, niệm niệm đặt nơi sáng tác văn chương thay vì thật lòng niệm Phật.",
      "b": "Do không tin tưởng vào những lời chân thành của chư Phật, chư Tổ.",
      "c": "Do đã mắc phải tội lỗi nghiêm trọng lúc còn làm quan.",
      "d": "Do không hiểu ngọn nguồn Phật trí và cảnh giới Tịnh Độ."
    },
    "answer": "a"
  },
  {
    "question": "Tác giả sử dụng các ví dụ thực tế như ăn cơm, mặc áo và uống thuốc nhằm mục đích gì?",
    "options": {
      "a": "Khuyên hành nhân nên nghiên cứu kỹ các kinh luận Tánh Tướng trước khi hạ thủ công phu.",
      "b": "Chứng minh rằng việc tu hành Phật pháp hoàn toàn giống hệt quy luật sinh hoạt thế gian.",
      "c": "Phê phán tư tưởng đòi phải thấy tột cùng cội nguồn Phật trí rồi mới chịu sanh lòng tin tu trì.",
      "d": "Giải thích chi tiết cơ chế vận hành của Ngũ Uẩn trong thân tâm con người."
    },
    "answer": "c"
  },
  {
    "question": "Ví dụ 'vầng trăng hiện bóng trong muôn sông' được tác giả dùng để giải thích thắc mắc nào?",
    "options": {
      "a": "Giải thích nguyên nhân cõi Cực Lạc không rơi vào quy luật Thành, Trụ, Hoại, Không.",
      "b": "Lý do vì sao người tu Tịnh Độ phải đoạn sạch ba Hoặc mới thấy Phật.",
      "c": "Phương pháp để hành nhân chứng đắc Thật Tướng ngay trong mộng cảnh.",
      "d": "Cách Đức Phật A Di Đà chỉ một thân mà có thể tiếp dẫn vô lượng chúng sanh ở mười phương."
    },
    "answer": "d"
  },
  {
    "question": "Sự vui ở cõi Cực Lạc khác với sự vui thế gian ở điểm cốt lõi nào?",
    "options": {
      "a": "Sự vui Cực Lạc là do chúng sanh dùng tâm thiện thế gian tích tụ phước báu tạo ra.",
      "b": "Sự vui Cực Lạc biến chuyển theo chu kỳ Thành, Trụ, Hoại, Không nhưng dài lâu hơn.",
      "c": "Sự vui Cực Lạc do Phật Di Đà chứng ngộ Phật tánh hóa hiện nên bất sanh bất diệt, không bị biến đổi.",
      "d": "Sự vui Cực Lạc chỉ tồn tại trong mộng cảnh tạm thời của các bậc Nhị Thừa."
    },
    "answer": "c"
  },
  {
    "question": "Trong câu chuyện của ông Tiền San, yếu tố quyết định giúp ông ngủ yên không mộng mị và lui bệnh nặng là gì?",
    "options": {
      "a": "Chí thành gắng sức niệm câu 'Nam mô A Di Đà Phật' theo lời khuyên.",
      "b": "Ông dùng trí huệ sắc bén như bảo kiếm Can Tương Mạc Gia để xua đuổi quỷ.",
      "c": "Ông đã tra cứu xong sách Mạch Quyết để tìm ra căn nguyên chứng bệnh.",
      "d": "Ông đã hiểu rõ Phật là thật hay giả trước khi cất tiếng niệm."
    },
    "answer": "a"
  },
  {
    "question": "Tác giả nhận định thế nào về hàng ngu phu ngu phụ chân thật niệm Phật so với người thông hiểu giáo lý nhưng đầy lòng nghi ngờ?",
    "options": {
      "a": "Ngu phu ngu phụ tuy không biết gì nhưng y quy củ niệm Phật thì ngầm thông Phật trí, đới nghiệp vãng sanh.",
      "b": "Ngu phu ngu phụ sẽ vĩnh viễn trầm luân vì không có trí huệ phân biệt Tánh Tướng.",
      "c": "Người thông hiểu giáo lý luôn dễ liễu thoát sanh tử hơn ngu phu ngu phụ.",
      "d": "Cả hai hạng người đều bắt buộc phải đoạn sạch ba Hoặc mới có thể ra khỏi luân hồi."
    },
    "answer": "a"
  },
  {
    "question": "Ý nghĩa chính của nhận định: 'Cửu giới chúng sanh lìa khỏi pháp môn này thì trên chẳng thể viên thành Phật đạo...' là gì?",
    "options": {
      "a": "Khẳng định Tịnh Độ là pháp môn chí viên chí đốn, là con đường tắt tối hậu để cả chúng sanh lẫn chư Phật hoàn thành bổn nguyện.",
      "b": "Chỉ ra rằng chỉ có chín giới hạ cấp mới cần đến pháp môn Tịnh Độ để thoát khổ.",
      "c": "Tuyên bố rằng các pháp môn cậy vào tự lực hoàn toàn không có giá trị tu tập.",
      "d": "Khuyên hành nhân nên bỏ Tịnh Độ để chuyển sang tu tập kinh Hoa Nghiêm."
    },
    "answer": "a"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-6-ii-2-khuyen-tru-nghi-sanh-tin',
  slug: 'bai-6-ii-2-khuyen-tru-nghi-sanh-tin',
  title: '2. Khuyên trừ nghi sanh tín',
  type: 'article',
  status: 'published',
  order: 4,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Con_Đường_Trừ_Nghi_Sanh_Tín.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Khuyên_Trừ_Nghi_Sanh_Tín.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/ZXci_BlyOnU',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/2JZgq02Ut4FMEzmLXXDxM2?si=-fnvFEAtQaqDa_NTqxifSA',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Khuyên trừ nghi sanh tín',
    passPercentage: 70,
    questions,
  },
}

export default lesson
