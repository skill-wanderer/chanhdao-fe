import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-khoa-1-bai-10-bat-quan-trai-gioi',
  slug: 'bai-thu-10-bat-quan-trai-gioi',
  title: 'Bài Thứ 10 - Bát Quan Trai Giới',
  type: 'article',
  status: 'published',
  order: 10,
  durationMinutes: 45,
  content: '<p>Nội dung bài học đang được biên soạn.</p>',
  createdAt: '2026-03-20',
  updatedAt: '2026-03-27',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/bai-thu-10-bat-quan-trai-gioi/infographic.png',
      tableOfContents: [
        { id: 'mo-de', label: 'A. Mở Đề' },
        { id: 'chanh-de', label: 'B. Chánh Đề' },
        { id: 'dinh-nghia', label: 'I. Định Nghĩa', indent: 1 },
        { id: 'tam-dieu-ngan-cam', label: 'II. Giải Rõ Tám Điều Ngăn Cấm', indent: 1 },
        { id: 'khong-sat-sanh', label: '1. Không được sát sanh', indent: 2 },
        { id: 'khong-trom-cuop', label: '2. Không được trộm cướp', indent: 2 },
        { id: 'khong-dam-duc', label: '3. Không được dâm dục', indent: 2 },
        { id: 'khong-noi-doi', label: '4. Không được nói dối', indent: 2 },
        { id: 'khong-uong-ruou', label: '5. Không được uống rượu', indent: 2 },
        { id: 'khong-trang-diem', label: '6. Không được trang điểm, múa hát', indent: 2 },
        { id: 'khong-giuong-cao', label: '7. Không được nằm ngồi giường cao đẹp', indent: 2 },
        { id: 'khong-an-qua-ngo', label: '8. Không được ăn quá giờ ngọ', indent: 2 },
        { id: 'ket-luan', label: 'C. Kết Luận' },
        { id: 'loi-ich', label: '1. Lợi ích của Bát-quan-trai giới', indent: 1 },
        { id: 'thuc-hanh', label: '2. Phật tử nên thực hành', indent: 1 },
      ],
      readingContent: `
<div class="prose prose-lg max-w-none dark:prose-invert">

  <!-- A. MỞ ĐỀ -->
  <section id="mo-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI — BÁT QUAN TRAI GIỚI</h2>
    <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">A. MỞ ĐỀ</h3>
    <p>Đức Phật Thích Ca nói pháp gần 50 năm, có đến 84.000 pháp môn, vô lượng diệu nghĩa. Mặc dù giáo pháp nhiều như thế, nhưng không ngoài ba môn chính là <strong>"Giới, Định, Huệ"</strong>.</p>
    <p>Trong "Giới, Định, Huệ", thì <strong>Giới là phần quan trọng, là phần căn bản</strong>. Nhờ Giới, tâm mới định, tâm có định, huệ mới phát sanh, huệ có phát sanh mới dứt trừ được vô minh phiền não; vô minh phiền não có dứt trừ mới minh tâm kiến tánh và thành Phật.</p>
    <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
      <p class="mb-0">Nhưng Giới cũng có nhiều thứ: có thứ cao, thứ thấp, có thứ áp dụng cho hàng xuất gia, có thứ cho hàng tại gia. Trong hàng xuất gia, thì <strong>Sa-di</strong> chỉ giữ 10 giới, <strong>Tỳ-kheo</strong> giữ 250 giới, <strong>Tỳ-kheo-ni</strong> đến 348 giới. Về phía tại gia thì có Tam quy, Ngũ giới, Bát-quan-trai giới, Bồ-tát giới.</p>
    </div>
    <p>Tam quy Ngũ giới, thì chúng ta đã học rồi; Bồ-tát giới thì khó khăn hơn, chúng ta sẽ học sau. Bây giờ đây, chúng tôi chỉ nói đến <strong>Bát-quan-trai giới</strong>.</p>
  </section>

  <!-- B. CHÁNH ĐỀ -->
  <section id="chanh-de">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">B. CHÁNH ĐỀ</h2>

    <!-- I. ĐỊNH NGHĨA -->
    <section id="dinh-nghia">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Định Nghĩa</h3>
      <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
        <p class="mb-0"><strong>Bát-quan-trai giới</strong> là một phép tu hành của người tại gia áp dụng trong <strong>một ngày một đêm (24 giờ)</strong>.</p>
      </div>
      <p>Chữ <strong>"Quan"</strong> là cửa, cửa ngăn chặn 8 điều tội lỗi. Chữ <strong>"Trai"</strong>, tiếng Phạn là <em>Posadha</em>, nghĩa là khi đã qua giờ ngọ (12 giờ trưa) không được ăn nữa.</p>
      <p>Vậy <strong>"Bát-quan-trai giới"</strong> là sự giữ gìn cho thân tâm được thanh tịnh trong 24 tiếng đồng hồ bằng cách ngăn chặn 8 điều tội lỗi sau đây:</p>
      <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
        <ol class="mb-0">
          <li>Không được sát sanh</li>
          <li>Không được trộm cướp</li>
          <li>Không được dâm dục</li>
          <li>Không được nói dối</li>
          <li>Không được uống rượu</li>
          <li>Không được trang điểm, thoa dầu thơm, múa hát và xem múa hát</li>
          <li>Không được nằm ngồi giường cao rộng đẹp đẽ</li>
          <li>Không được ăn quá giờ ngọ</li>
        </ol>
      </div>
    </section>

    <!-- II. GIẢI RÕ TÁM ĐIỀU NGĂN CẤM -->
    <section id="tam-dieu-ngan-cam">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Giải Rõ Tám Điều Ngăn Cấm</h3>

      <!-- 1. Không được sát sanh -->
      <section id="khong-sat-sanh">
        <h4 class="text-lg font-semibold">1. Không được sát sanh</h4>
        <p><strong>a) Ý nghĩa vì sao không được sát sanh:</strong> Chúng sanh mặc dù hình dáng có khác nhau, nhưng cùng có một điểm quan trọng giống nhau là <strong>tham sống, sợ chết, biết đau khổ vui mừng</strong>. Không cần phải dẫn chứng cho xa xôi, ngay trong sự quan sát hằng ngày, chúng ta cũng nhận thấy: cá thấy người cá lội xa, chim thấy người chim bay cao, cũng như người thấy cọp người lẩn trốn, vì đều sợ lâm nguy đến tính mạng cả.</p>
        <p>Khi bị bắt, chim, cá hay người đều vùng vẫy để trốn thoát. Và khi được thả ra, thoát chết, chao ôi! Còn gì sung sướng cho bằng! Nhận thấy được sự tham sống sợ chết, nỗi vui mừng, đau xót của muôn loại như thế, mà chúng ta còn đang tâm giết hại sanh mạng, thì thật là nhẫn tâm, tàn ác vô cùng.</p>
        <p>Từ trước đến nay, loài người đã giết hại rất nhiều, bằng đủ phương tiện, nào làm lưới để bắt cá dưới nước, dùng cung tên súng đạn để bắt cầm thú trên đất... và nhất là dùng đủ mưu mô kế hoạch để giết hại chém giết lẫn nhau. Về phía thiện, thì có nhiều người cũng thiện vô cùng; nhưng về phía ác, thì cũng nhiều người ác vô cùng.</p>
        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100">Chúng ta là Phật tử, nghĩa là những người theo Đạo Từ bi. Chúng ta cần phải cố gắng đừng sát hại sinh vật và nhất là đừng sát hại người.</p>
          <p class="mb-0">Về sự sát hại người, trong Ngũ giới Phật đã tuyệt đối cấm chỉ. Nhưng về sinh vật, vì một số Phật tử còn ăn mặn, nên chưa tuyệt đối giữ được giới sát. Vậy ít ra trong ngày thọ Bát quan trai, chúng ta hãy tuyệt đối giữ giới ấy.</p>
        </div>
        <p>Chúng ta không giết người, không trù tính mưu mô giết người, đã đành! Chúng ta cũng không nên động đến sanh mạng của tất cả mọi loài hữu hình. Hơn nữa, nếu thấy ai có ý giết hại sinh vật, chúng ta phải khuyên lơn ngăn cản đừng cho người ta thi hành ác ý ấy.</p>
        <p>Được như thế là ta giữ được trọn vẹn giới sát, mặc dù chỉ trong một ngày đêm, nhưng <strong>lợi ích sẽ lớn lao vô cùng</strong> cho việc tu hành của chúng ta.</p>
      </section>

      <!-- 2. Không được trộm cướp -->
      <section id="khong-trom-cuop">
        <h4 class="text-lg font-semibold">2. Không được trộm cướp</h4>
        <p>Hai chữ trộm cướp ở đây có một ý nghĩa vô cùng. Những vật thuộc quyền sở hữu của người ta, từ vàng, bạc, châu báu, đất ruộng nhà cửa, cho đến đồ đạc, cây kim sợi chỉ, cọng rau, người ta không cho mà mình lấy, là trộm cướp.</p>
        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Lường thăng tráo đấu, đo thiếu lấy thừa, đi làm trễ giờ, bóc lột công nhân, lấy của công, ăn hối lộ, được của người không trả lại, đều là <strong>trộm cướp</strong>.</p>
        </div>
        <p>Người đời coi tiền của hơn tánh mạng, trèo non, lặn suối, lo mưu này tính kế nọ để làm ra tiền nuôi thân và gia đình, và để dành dụm phòng khi đau ốm, tai nạn. Nếu rủi bị mất tiền của do mồ hôi nước mắt mà có, người ta vô cùng đau khổ, tuyệt vọng có khi đến quyên sinh. Chúng ta cũng đã có nhiều khi đau buồn vì mất của, thì xét người khác cũng vậy.</p>
        <p>Chúng ta không muốn ai trộm cướp của mình, thì tất nhiên mình cũng không nên trộm cướp của ai. Đó là lẽ công bằng rất giản dị. Huống chi chúng ta là Phật tử, nghĩa là những người quyết tâm diệt trừ tham dục, để được giải thoát, thì lẽ nào ta lại lấy của phi nghĩa?</p>
        <p>Trong cuộc đời tranh đấu hằng ngày để sống, có nhiều khi chúng ta không giữ được một cách tuyệt đối giới cấm này, chẳng hạn, chúng ta làm ít mà cố đòi lương cho cao, bán hàng xấu với giá cao, mưu tính chước này kế nọ để được lợi nhiều một cách thiếu chính đáng...</p>
        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100">Nhưng trong ngày thọ Bát-quan-trai giới, chúng ta hãy triệt để giữ giới đạo. Chúng ta nhất quyết không trộm cướp đã đành, mà cũng không được để cho một ý nghĩ tham lợi móng lên trong tâm.</p>
          <p class="mb-0">Không những không trộm cướp và ngăn ngừa sự trộm cướp mà thôi, chúng ta còn <strong>bố thí</strong> cho những người nghèo khổ, thiếu ăn thiếu mặc, tìm cách giúp đỡ những người thân thuộc, trong cảnh túng thiếu.</p>
        </div>
        <p>Giữ được giới này một cách tuyệt đối, thì dù thời gian ngắn ngủi trong 24 giờ đồng hồ, chúng ta cũng đã gieo được những nhân lành tốt đẹp cho sự tu hành của chúng ta.</p>
      </section>

      <!-- 3. Không được dâm dục -->
      <section id="khong-dam-duc">
        <h4 class="text-lg font-semibold">3. Không được dâm dục</h4>
        <p>Dâm dục là cái nghiệp nhơn sanh tử luân hồi, nên người xuất gia phải đoạn hẳn.</p>
        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Phật dạy rằng: <em>"Người muốn đoạn trừ sanh tử, chứng quả Niết-bàn mà không trừ hẳn dâm dục, thì không khác kẻ nấu cát sạn mà muốn cho thành cơm, dù ra công đem nấu, trải qua trăm ngàn kiếp cũng không thành cơm được"</em>.</p>
        </div>
        <p>Vậy những Phật tử xuất gia, muốn thành Phật quả thì phải trừ dâm dục. Còn những Phật tử tại gia, chưa có thể hoàn toàn đoạn trừ dâm dục được, thì Phật chỉ cấm <strong>tà dâm</strong>, nghĩa là ngoài vợ chồng, không được lang chạ; và giữa vợ chồng, cũng cần phải giữ chánh lễ, biết tiết dục để cho thân tâm được trong sạch nhẹ nhàng.</p>
        <p>Nhưng đây là nói về ngày thường của Phật tử tại gia. Chứ đến ngày thọ Bát-quan-trai giới, thì <strong>tuyệt đối phải giữ giới tịnh hạnh</strong>, không được hành động dâm dục đã đành, mà cũng không được nhớ nghĩ đến những điều dâm dục.</p>
        <p>Nếu triệt để giữ đúng giới này, thì dù chỉ trong 24 giờ đồng hồ, lợi ích cũng rộng lớn vô cùng, vì chúng ta đã có dịp để gieo nhơn tịnh hạnh là một nhơn rất quý báu trong sự tu hành diệt dục.</p>
      </section>

      <!-- 4. Không được nói dối -->
      <section id="khong-noi-doi">
        <h4 class="text-lg font-semibold">4. Không được nói dối</h4>
        <p>Nói dối là tâm nghĩ miệng nói trái nhau. Nói dối có 4 cách, mà chúng ta đã có học rồi trong bài Ngũ giới. Đó là: <strong>nói không thật, nói thêu dệt, nói lưỡi hai chiều, nói lời hung ác</strong>.</p>
        <p>Chúng ta đã thấy, hằng ngày trong đời, tai hại của sự nói dối. Tai hại lớn nhất là làm mất lòng tin cậy nhau. Trong một gia đình mà không tin nhau, thì gia đình sẽ tan nát; trong một xã hội mà không tin nhau, thì xã hội sẽ điêu tàn.</p>
        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Trong ngày thọ Bát-quan-trai giới, chúng ta hãy triệt để thực hành giới cấm này. Chúng ta không nói sai, không nói thêu dệt, không nói hai chiều, không nói lời hung ác đã đành; chúng ta lại còn khuyên răn những người chung quanh giữ đúng giới không nói dối ấy!</p>
        </div>
        <p>Nếu thực hành triệt để giới cấm này, thì dù chỉ trong một ngày đêm, chúng ta cũng đã gieo được một hột nhơn quý báu rất hiếm có trong đời này là: <strong>lòng chân thật</strong>.</p>
      </section>

      <!-- 5. Không được uống rượu -->
      <section id="khong-uong-ruou">
        <h4 class="text-lg font-semibold">5. Không được uống rượu</h4>
        <p>Rượu làm say mê, tối tăm trí não người uống. Nó còn nguy hiểm hơn cả thuốc độc, vì thuốc độc uống vào chết ngay, song chỉ giết chết một đời người thôi; chớ rượu làm cho người cuồng tâm, mất trí, gây nên nhiều tội lỗi, chết đi sanh lại, luân hồi nhiều kiếp trong tối tăm si ám.</p>
        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Bởi thế, trong Kinh, Phật dạy: <em>"Thà uống nước đồng sôi cho tan mất thân này, chứ không nên uống rượu"</em>.</p>
        </div>
        <p>Chúng ta là Phật tử, nghĩa là những người đang trau dồi Trí tuệ để được sáng suốt như Phật, chúng ta không được uống rượu. Chúng ta không uống rượu đã đành, mà cũng không khuyên mời người uống rượu. Tự mình uống rượu tội còn nhẹ, chớ khuyên mời người khác uống, tội lại nặng hơn.</p>
        <p>Song, trong lúc đau ốm, nếu lương y bảo phải có rượu hòa với thuốc uống mới lành bệnh, thì chúng ta cũng được tạm dùng. Khi đó rượu trở thành một vị thuốc, chứ không phải là một vị làm cho trí não ta cuồng loạn nữa.</p>
        <p>Đấy là nói về ngày thường, chứ trong ngày thọ "Bát-quan-trai giới", chúng ta phải trừ tuyệt rượu, không được uống đã đành, mà còn khuyên răn người khác đừng uống nữa.</p>
      </section>

      <!-- 6. Không được trang điểm, múa hát -->
      <section id="khong-trang-diem">
        <h4 class="text-lg font-semibold">6. Không được trang điểm, thoa dầu thơm, múa hát và đi xem múa hát</h4>
        <p>Năm giác quan: tai, mắt, mũi, lưỡi, thân là năm cửa ngõ, có thể mở đường cho chúng ta đến cảnh giới Niết-bàn, hay vào địa ngục.</p>
        <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100">Nếu chúng ta biết mở năm cánh cửa ấy về nẻo thanh tịnh, nghe những lời hay lẽ phải, thấy những điều thiện, điều lành, ngửi những mùi thơm tinh khiết, đạo vị, thì con đường đến <strong>Niết Bàn</strong>, giải thoát không xa.</p>
          <p class="mb-0">Trái lại, nếu chúng ta hướng những cánh cửa giác quan ấy vào cõi ô trọc, mở rộng chúng cho tội lỗi ùa vào, nào nghe tiếng du dương luyến ái của dục vọng, thấy cảnh trụy lạc, dâm ô, ngửi mùi vị say nồng, kích thích dục lạc, thì con đường <strong>địa ngục</strong> đã sẵn sàng mở rộng để đón chờ chúng ta.</p>
        </div>
        <p>Phật cấm Phật tử trang điểm, tô son trét phấn, xức ướp dầu thơm, múa hát lả lơi, quyến rũ, hay cấm đi xem những cảnh múa hát ấy, là vì muốn cho chúng ta khỏi đọa vào địa ngục.</p>
        <p>Nhưng trong đời sống hằng ngày của người Phật tử tại gia, vì còn tiếp xúc với đời sống xã hội, nên phải ăn mặc tề chỉnh trang nghiêm, đôi khi cũng phải đi dự những buổi hòa nhạc, hay múa hát, miễn là những thứ âm nhạc, những điệu múa hát ấy có tánh cách trong sạch, xây dựng và hướng thiện.</p>
        <p>Nhưng trong hiện tại, các thứ nghệ thuật: kịch nhạc, ca vũ, cải lương, chiếu bóng... phần nhiều có tánh cách trụy lạc, thoái hóa, chúng ta nên đề phòng, đừng quá dễ dãi mà sa vào vòng tội lỗi.</p>
        <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Trên đây là nói trong ngày thường, chứ ngày thọ giới Bát-quan-trai, chúng ta nhất định không được trang điểm, xức ướp dầu thơm, múa hát hay đi xem múa hát. Hơn nữa, chúng ta phải cố gắng diệt trừ những âm hưởng, bóng dáng của những thứ nghệ thuật không lành mạnh, trong đầu óc chúng ta.</p>
        </div>
        <p>Được như thế, thì tuy thời gian chỉ ngắn ngủi có 24 giờ, ảnh hưởng tốt đẹp của nó vô cùng quý báu cho sự tu hành của chúng ta.</p>
      </section>

      <!-- 7. Không được nằm ngồi giường cao đẹp -->
      <section id="khong-giuong-cao">
        <h4 class="text-lg font-semibold">7. Không được nằm ngồi giường cao đẹp, rộng lớn</h4>
        <p>Điều răn cấm này cũng như điều răn cấm thứ sáu, có mục đích ngăn ngừa thân xác ta, không cho buông lung theo những cảm giác mơn trớn khoái lạc của giường cao nệm tốt, chăn ấm màn êm. Vì những cảm giác này có thể kích thích lòng ham muốn bất chính của xác thân, tạo điều kiện cho chúng ta gây tội lỗi, nên Phật chế ra giới cấm này.</p>
        <div class="my-6 rounded-lg border-l-4 border-purple-400 bg-purple-50/30 p-5 dark:border-purple-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="text-gray-900 dark:text-gray-100">Xưa Ngài <strong>Ngộ Đạt Quốc sư</strong> là một bậc cao đức, được vua Ý Tôn và vua Hy Tôn hết sức ưu đãi. Vua Ý Tôn cúng cho Ngài một bảo tọa bằng trầm hương rất quý báu. Từ khi được bảo tọa ấy, Ngộ Đạt Quốc Sư mống niệm danh lợi, thành ra thất đức, phải chịu nhiều tai vạ và đau khổ.</p>
          <p class="mb-0">Vì hiểu rõ cái tai hại của giường cao chiếu rộng, chăn ấm nệm êm, nên xưa Ngài <strong>Hiếp Tôn Giả</strong> từ khi xuất gia, lưng không nằm chiếu; Ngài <strong>Cao Phong Diệu</strong> thiền sư lập nguyện: ba năm không nằm giường chõng; đức Phật Thích Ca, trong khi xuất gia tìm đạo, đã gối cỏ nằm sương, từ năm này sang năm khác...</p>
        </div>
        <p>Noi gương người xưa, các vị xuất gia chỉ nằm trên một cái giường nhỏ hẹp, vừa ngủ, chứ không bao giờ dùng giường rộng nệm cao. Kẻ tại gia cũng nên tập dần đức tánh giản dị đạm bạc ấy. Nếu chưa làm được trong ngày thường, thì ngày thọ giới Bát-quan-trai, cũng phải triệt để thi hành giới thứ bảy này.</p>
      </section>

      <!-- 8. Không được ăn quá giờ ngọ -->
      <section id="khong-an-qua-ngo">
        <h4 class="text-lg font-semibold">8. Không được ăn quá giờ ngọ</h4>
        <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
          <p class="mb-0">Trong luật Phật dạy: <em>"Chư thiên ăn sớm mai, Phật ăn giờ ngọ, súc sanh ăn sau giờ ngọ, ngạ quỷ ăn tối, chư Tăng học theo Phật, phải ăn đúng giờ ngọ"</em>.</p>
        </div>
        <p>Ăn đúng giờ ngọ, được <strong>năm điều lợi</strong> sau đây:</p>
        <ul>
          <li>Ít mống tâm sai quấy</li>
          <li>Ít buồn ngủ</li>
          <li>Dễ được nhất tâm</li>
          <li>Ít hạ phong</li>
          <li>Thân được yên ổn và ít sanh bệnh</li>
        </ul>
        <p>Trừ một vài trường hợp như khi đau ốm, luật cũng châm chước cho được ăn cơm cháo sau giờ ngọ, nhưng khi ăn phải sanh lòng hổ thẹn.</p>
        <p>Vì những lợi ích thiết thực nói trên, nên người xuất gia cần phải thực hành. Còn Phật tử tại gia, khi tu Bát-quan-trai giới cũng phải giữ đúng giới này.</p>
      </section>
    </section>
  </section>

  <!-- C. KẾT LUẬN -->
  <section id="ket-luan">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">C. KẾT LUẬN</h2>

    <section id="loi-ich">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Lợi ích của Bát-quan-trai giới rất lớn lao</h3>
      <p>Như chúng ta đã thấy ở các đoạn trên, Bát-quan-trai giới là một pháp tu vô cùng lợi ích cho Phật tử tại gia. Trong thời gian tu hành ấy, thân, khẩu, ý của người thọ giới được hoàn toàn thanh tịnh, tuy chỉ có 24 giờ đồng hồ, nhưng 24 giờ ấy còn quý báu hơn cả một đời của người không tu hành. Tuy lượng rất ít, mà phẩm lại nhiều vô cùng.</p>
      <div class="my-6 rounded-lg border-l-4 border-green-400 bg-green-50/30 p-5 dark:border-green-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
        <p class="mb-0">Nó chỉ là giọt nước, nhưng là <strong>một giọt nước trong sạch hoàn toàn</strong>, cho nên nó còn quý hơn cả một ao nước đục bùn nhơ. Nó chỉ là một viên ngọc nhỏ xíu, nhưng đó là <strong>viên ngọc Ma-ni</strong>, nên nó còn quý hơn trăm ngàn châu báu khác.</p>
      </div>
      <p>Chúng ta hãy phân tích một cách rõ ràng những lợi ích mà chúng ta đã thâu hoạch được trong 24 giờ ấy mà xem:</p>
      <ul>
        <li>Nhờ <strong>giới thứ Nhất</strong>, tâm ta không có ác ý giết hại sanh vật, miệng ta không nhai nuốt những máu huyết tanh hôi, thân ta không nặng nề vì thịt cá. Đối với chung quanh, ta không làm cho người và súc vật đau khổ, mất thân mạng.</li>
        <li>Nhờ <strong>giới thứ Hai</strong>, tâm ta không động, ý ta không tham lam, thân ta không mang nặng những vật phi nghĩa. Đối với người chung quanh, ta không làm họ đau khổ vì mất của cải mà họ đã nâng niu, quý trọng.</li>
        <li>Nhờ <strong>giới thứ Ba</strong>, tâm ta được thanh tịnh, thân ta khỏi ô uế. Đối với người bạn trăm năm, cùng những người chung quanh, ta giữ đúng lề, làm cho họ kính trọng.</li>
        <li>Nhờ <strong>giới thứ Tư</strong>, tâm ta không tà vạy, lưỡi ta không dối trá, điêu ngoa. Đối với người chung quanh, ta giữ được chữ tín, làm mọi người khỏi lo sợ, nghi ngờ vì ta.</li>
        <li>Nhờ <strong>giới thứ Năm</strong>, tâm ta được minh mẫn, miệng ta không nồng nặc hơi men, thân ta không loạn động. Đối với người chung quanh, ta không làm cho họ phải lo sợ, khổ sở vì con ma men này hành hạ.</li>
        <li>Nhờ <strong>giới thứ Sáu</strong>, tâm ta không buông luông theo dục lạc, giác quan ta không dung chứa những hình ảnh, mùi vị, âm thanh tà tạp, dâm ô... Đối với người chung quanh, ta không làm cho họ phải tập nhiễm những cảm giác không trong sạch, không thanh thoát.</li>
        <li>Nhờ <strong>giới thứ Bảy</strong>, tâm ta không mống lên những niệm danh lợi, xa hoa; thân ta không bị dục lạc lôi cuốn. Đối với người chung quanh, ta dễ gần gũi, thân cận, vì không bị cái cao sang, phù phiếm bên ngoài ngăn cách.</li>
        <li>Nhờ <strong>giới thứ Tám</strong>, tâm ta được định tỉnh, sáng suốt, thân ta nhẹ nhàng, ít bệnh tật; đối với các loài chung quanh, như người nghèo đói, ngạ quỷ, súc sinh, ta không gây ra sự thèm khát, vì sự lục lạo ăn uống về đêm.</li>
      </ul>
      <p>Bao nhiêu sự lợi ích cho mình và cho người mà chúng ta đã thâu thập được trong khoảng 24 giờ đồng hồ, thử hỏi có một pháp tu hành của người tại gia nào quý báu hơn thế nữa?</p>
    </section>

    <section id="thuc-hanh">
      <h3 class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Bởi vậy Phật tử nên thực hành Bát quan trai giới</h3>
      <p>Phật tử tại gia mặc dù suốt ngày suốt tháng bận bịu về sinh kế làm ăn, mỗi tháng cũng nên sắp xếp việc nhà, vào chùa thọ Bát-quan-trai giới một vài lần. Nếu hoàn cảnh thuận lợi, có thể thọ được nhiều lần lại càng tốt.</p>
      <div class="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50/30 p-5 dark:border-blue-600 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300">
        <p class="mb-0">Nếu không đủ điều kiện đến chùa, thì nên cố gắng thật hành y như lời Phật dạy, tu theo hạnh giải thoát, rồi khuyên nhiều người thật hành theo, để cùng nhau tiến bước lên đường <strong>giải thoát, an vui</strong>.</p>
      </div>
    </section>
  </section>

</div>
`,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/bai-thu-10-bat-quan-trai-gioi/10.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube-nocookie.com/embed/bDiPo0FIQGw',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/6Y0W3Kg0KdL72oE0nYGOdR?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Bát Quan Trai Giới',
    passPercentage: 70,
    questions: [
      {
        question: 'Phép tu Bát-quan-trai giới được Đức Phật chế ra nhằm mục đích chủ yếu dành cho đối tượng nào?',
        options: {
          a: 'Người xuất gia như Tỳ-kheo và Tỳ-kheo-ni.',
          b: 'Những người mới bắt đầu tìm hiểu về Đạo Phật nhưng chưa Quy y.',
          c: 'Chỉ dành riêng cho những người già không còn vướng bận việc gia đình.',
          d: 'Người tại gia muốn tập tu theo hạnh xuất gia trong một thời gian ngắn.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Phép tu Bát-quan-trai giới được chế ra cho người tại gia, không phải hàng xuất gia.',
          b: 'Sai. Tài liệu không đề cập đến việc giới này chỉ dành cho người chưa Quy y.',
          c: 'Sai. Bát-quan-trai giới dành cho mọi người tại gia, không giới hạn độ tuổi hay hoàn cảnh gia đình.',
          d: 'Đúng. Bát-quan-trai giới là một phép tu hành của người tại gia áp dụng trong một ngày một đêm (24 giờ).',
        },
      },
      {
        question: 'Trong định nghĩa về Bát-quan-trai giới, chữ \'Quan\' được giải thích mang ý nghĩa gì?',
        options: {
          a: 'Cơ quan hoặc nơi chốn để thực hiện việc tu hành.',
          b: 'Cánh cửa ngăn chặn những điều tội lỗi.',
          c: 'Quan sát và xem xét lại lỗi lầm của bản thân.',
          d: 'Sự quan tâm và lòng từ bi đối với mọi loài.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Chữ \'Quan\' không mang ý nghĩa là cơ quan hay nơi chốn.',
          b: 'Đúng. Chữ \'Quan\' nghĩa là cửa, cụ thể là cửa ngăn chặn 8 điều tội lỗi.',
          c: 'Sai. Mặc dù tu hành cần tự xem xét lỗi lầm, nhưng định nghĩa của chữ \'Quan\' trong ngữ cảnh này không phải là quan sát.',
          d: 'Sai. Lòng từ bi rất quan trọng nhưng không phải là nghĩa của chữ \'Quan\' ở đây.',
        },
      },
      {
        question: 'Sự khác biệt cơ bản giữa giới thứ ba của Ngũ giới và giới thứ ba của Bát-quan-trai giới là gì?',
        options: {
          a: 'Cả hai đều giống nhau là chỉ cấm việc quan hệ ngoài luồng.',
          b: 'Bát-quan-trai giới không bắt buộc giữ giới này nếu có sự đồng ý của bạn đời.',
          c: 'Bát-quan-trai giới chỉ cấm tà dâm, còn Ngũ giới cấm tuyệt đối dâm dục.',
          d: 'Bát-quan-trai giới yêu cầu tuyệt đối đoạn dâm (không dâm dục) trong suốt thời gian thọ giới.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Ngũ giới chỉ cấm tà dâm, nhưng Bát-quan-trai giới cấm tuyệt đối mọi hành vi dâm dục.',
          b: 'Sai. Bát-quan-trai giới yêu cầu tuyệt đối giữ tịnh hạnh trong 24 giờ, không có ngoại lệ.',
          c: 'Sai. Ngược lại mới đúng: Ngũ giới cấm tà dâm, Bát-quan-trai giới cấm tuyệt đối dâm dục.',
          d: 'Đúng. Trong ngày thọ Bát-quan-trai giới, người tu tuyệt đối phải giữ giới tịnh hạnh, không hành động và không được nhớ nghĩ đến dâm dục.',
        },
      },
      {
        question: 'Theo văn bản, việc không uống rượu được coi là quan trọng vì lý do chính nào sau đây?',
        options: {
          a: 'Rượu làm tốn kém tiền bạc và ảnh hưởng đến kinh tế gia đình.',
          b: 'Rượu làm mờ tối trí tuệ, dễ dẫn đến việc vi phạm các giới cấm khác.',
          c: 'Rượu là chất độc khiến con người chết ngay lập tức.',
          d: 'Uống rượu sẽ gây ra các bệnh lý nguy hiểm cho gan và dạ dày.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Vấn đề kinh tế không phải là lý do được Phật giáo nhấn mạnh nhất cho việc cấm uống rượu.',
          b: 'Đúng. Rượu làm say mê, tối tăm trí não, làm cuồng tâm mất trí, gây nên nhiều tội lỗi và khiến luân hồi trong tối tăm si ám.',
          c: 'Sai. Tài liệu ghi rõ rượu còn nguy hiểm hơn thuốc độc vì thuốc độc uống vào chết ngay chỉ mất một mạng, còn rượu thì làm chết trí tuệ từ từ.',
          d: 'Sai. Bệnh lý vật lý không được đề cập làm trọng tâm trong văn bản này.',
        },
      },
      {
        question: 'Điều răn thứ sáu cấm trang điểm, thoa dầu thơm, múa hát nhằm mục đích gì cho người tu hành?',
        options: {
          a: 'Để tránh việc khoe khoang sự giàu sang đối với những người xung quanh.',
          b: 'Để tiết kiệm thời gian cho việc đọc kinh sách.',
          c: 'Để ngăn chặn các giác quan tiếp xúc với những kích thích dục vọng, giữ tâm thanh tịnh.',
          d: 'Vì các loại dầu thơm và phấn trang điểm đều có hại cho da.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Việc tránh khoe khoang không phải là mục đích chính của giới này.',
          b: 'Sai. Tiết kiệm thời gian không phải là nguyên nhân được nêu ra.',
          c: 'Đúng. Mục đích là ngăn không cho 5 cửa ngõ giác quan hướng vào cõi ô trọc và tiếp xúc với các kích thích dục lạc, dâm ô.',
          d: 'Sai. Lý do bảo vệ da không liên quan đến giáo lý được trình bày.',
        },
      },
      {
        question: 'Câu chuyện về Ngộ Đạt Quốc sư được dẫn chứng nhằm minh họa cho tác hại của điều gì?',
        options: {
          a: 'Sự nguy hiểm khi không thực hành bố thí cho người nghèo.',
          b: 'Tác hại của việc nói dối làm mất lòng tin của nhà vua.',
          c: 'Việc ăn uống quá giờ ngọ làm cơ thể mệt mỏi.',
          d: 'Việc nằm ngồi giường cao đẹp, rộng lớn dẫn đến khởi tâm danh lợi.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Câu chuyện không nói về bố thí.',
          b: 'Sai. Ngộ Đạt Quốc sư không nói dối nhà vua.',
          c: 'Sai. Ngộ Đạt Quốc sư không vi phạm giới ăn quá giờ ngọ trong câu chuyện này.',
          d: 'Đúng. Khi nhận bảo tọa trầm hương quý báu (giường cao nệm tốt), Ngộ Đạt Quốc sư đã mống tâm danh lợi, dẫn đến thất đức và chịu tai vạ.',
        },
      },
      {
        question: 'Lợi ích nào sau đây KHÔNG phải là một trong năm điều lợi của việc ăn đúng giờ ngọ?',
        options: {
          a: 'Tăng cường sức mạnh cơ bắp để làm việc nặng.',
          b: 'Dễ được nhất tâm.',
          c: 'Thân được yên ổn và ít sanh bệnh.',
          d: 'Ít buồn ngủ.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng (là đáp án cần tìm vì đây là thông tin SAI). 5 điều lợi không bao gồm việc tăng cường sức mạnh cơ bắp.',
          b: 'Sai. Dễ được nhất tâm là một trong 5 điều lợi ích được nhắc đến.',
          c: 'Sai. Thân được yên ổn và ít sinh bệnh là một trong 5 điều lợi ích.',
          d: 'Sai. Ít buồn ngủ là một trong 5 điều lợi ích.',
        },
      },
      {
        question: 'Văn bản so sánh 24 giờ tu hành Bát-quan-trai giới với hình ảnh nào để nhấn mạnh giá trị của phẩm chất hơn số lượng?',
        options: {
          a: 'Một hòn đá tảng không bị lay chuyển bởi gió bão.',
          b: 'Ngọn đuốc sáng rực trong đêm tối mịt mù.',
          c: 'Một giọt nước trong sạch hoàn toàn so với một ao nước đục.',
          d: 'Một cái cây cổ thụ giữa rừng cây nhỏ.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Hình ảnh hòn đá tảng không xuất hiện trong kết luận của văn bản.',
          b: 'Sai. Hình ảnh ngọn đuốc không được sử dụng ở đây.',
          c: 'Đúng. Văn bản viết: \'Nó chỉ là giọt nước, nhưng là một giọt nước trong sạch hoàn toàn, cho nên nó còn quý hơn cả một ao nước đục bùn nhơ\'.',
          d: 'Sai. Văn bản không đề cập đến cây cổ thụ.',
        },
      },
      {
        question: 'Trong trường hợp nào người Phật tử có thể được \'châm chước\' sử dụng rượu hoặc ăn sau giờ ngọ?',
        options: {
          a: 'Không bao giờ được châm chước trong bất kỳ tình huống nào.',
          b: 'Khi bị đau ốm và có sự chỉ định dùng làm thuốc của thầy thuốc.',
          c: 'Khi cảm thấy quá đói hoặc quá thèm sau một ngày làm việc mệt mỏi.',
          d: 'Khi đi dự tiệc cưới hoặc đám tang của người thân.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Luật vẫn có những trường hợp châm chước ngoại lệ chứ không phải tuyệt đối không bao giờ.',
          b: 'Đúng. Khi đau ốm, nếu lương y bảo cần dùng rượu hòa với thuốc thì được dùng, hoặc khi ốm đau cũng được châm chước ăn cơm cháo sau giờ ngọ.',
          c: 'Sai. Cảm giác thèm ăn hay đói không phải là lý do chính đáng để được châm chước.',
          d: 'Sai. Dự tiệc không phải là lý do được phép vi phạm giới luật khi đang thọ Bát-quan-trai giới.',
        },
      },
      {
        question: 'Nội dung nào dưới đây thuộc về giới thứ tư \'Không được nói dối\'?',
        options: {
          a: 'Không được khuyên mời người khác uống rượu.',
          b: 'Không được nói lời hung ác, thêu dệt, hoặc lưỡi hai chiều.',
          c: 'Không được nghe nhạc hoặc xem kịch nghệ.',
          d: 'Không được lấy của công hay ăn hối lộ.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Việc khuyên mời người khác uống rượu thuộc về giới thứ năm (không được uống rượu).',
          b: 'Đúng. Giới thứ tư \'Không được nói dối\' bao gồm 4 điều: nói không thật, nói thêu dệt, nói lưỡi hai chiều, và nói lời hung ác.',
          c: 'Sai. Nghe nhạc, xem kịch nghệ vi phạm giới thứ sáu.',
          d: 'Sai. Lấy của công, ăn hối lộ thuộc về giới thứ hai là không trộm cướp.',
        },
      },
    ],
  },
}

export default lesson
