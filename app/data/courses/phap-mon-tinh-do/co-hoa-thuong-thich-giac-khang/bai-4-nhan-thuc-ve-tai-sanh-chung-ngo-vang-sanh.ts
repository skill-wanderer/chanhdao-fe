import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Pháp Môn Tịnh Độ</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mb-8 text-center">
      <h2 class="mt-0 mb-4 text-2xl md:text-3xl font-bold text-primary-700 dark:text-primary-300 uppercase leading-snug">NHẬN THỨC VỀ TÁI SANH — CHỨNG NGỘ — VÃNG SANH</h2>
      <div class="h-1 w-20 bg-secondary-400 mx-auto my-4 rounded-full"></div>
      <p class="mb-0 text-xl font-bold text-primary-800 dark:text-primary-200">Thích Giác Khang</p>
    </div>

    <p>Sau khi thành đạo, Đức Phật Thích Ca đã thấu suốt cội nguồn pháp giới trong vũ trụ. Ngài đã nhìn thấy rõ mỗi chúng sanh đều có Phật tính, nhưng vì mê muội mà chưa nhận được. Với lòng bi mẫn, trong 49 năm, Ngài đã đi khắp nơi giảng đạo nhằm giúp chúng sanh thay đổi nhận thức để thành Phật như Ngài. Và Đức Phật đã truyền lại pho tạng Kinh - Luật cho người đời nương vào đó để mà "văn - tư - tu". Trong quá trình tư - tu các vị Tổ sư đã triển khai Kinh - Luật thành Luận. Nay, thông qua "Kinh - Luật - Luận" để tìm hiểu: Như thế nào gọi là Tái sanh? Như thế nào gọi là Chứng ngộ? Như thế nào gọi là Vãng sanh? Và ba cái này giống nhau và khác nhau ra sao?</p>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="tai-sanh" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">I. TÁI SANH</h2>
    
    <p class="font-semibold text-lg text-primary-700 dark:text-primary-300">Tái sanh tức là luân hồi đồng nghĩa với không giải thoát.</p>
    <p>Tái sanh là do nghiệp lực chiêu cảm mà sanh trở lại cõi Ta-bà, tức là khi thọ mạng chấm dứt, mống tâm tác ý muốn hiện hữu do đó tái sanh dưới hình thức một xác thân mới.</p>
    <p>Qua "Kinh - Luật - Luận", hiểu rằng, trong cuộc sống hằng ngày, ngay xác thân ngũ uẩn, tiến trình tâm thức trải dài qua 15 hạng chúng sanh từ địa ngục cho tới Như Lai, nhưng vì mê muội khó mà nhận biết. Nếu tâm thức dừng lại rồi tư tưởng phân biệt dính mắc tham đắm vào đâu thì khi thọ mạng chấm dứt sẽ tái sanh mang một xác thân mới ứng hợp với tâm thức cùng cảnh giới đang dính mắc.</p>

    <div class="pl-4 space-y-4 mt-6 border-l-4 border-secondary-400">
      <p><strong>1.</strong> Tâm thức lờ đờ dừng ở bề mặt của 5 căn phù trần không có cái biết. Khi thọ mạng dứt, lập tức sa đọa vào cảnh giới <strong>Địa ngục</strong>.</p>
      
      <p><strong>2.</strong> Tâm thức dừng lại ở cảm giác lờ mờ chưa phân biệt của 5 thức đầu, dục vọng phát khởi làm tăng trưởng cảm giác đam mê trau chuốt xác thân, dẫn đến tham lam chiếm hữu ngoại sắc thô tháo. Khi thọ mạng dứt, lập tức sa đọa vào cảnh giới <strong>Ngạ quỷ</strong>.</p>
      
      <p><strong>3.</strong> Tâm thức dừng lại ở óc có sự phân biệt lờ mờ dục vọng bản năng, không suy tính trong mọi hành động chiếm hữu ngoại sắc, vì thế thường thất bại nên dễ quạu quọ sân giận. Khi thọ mạng dứt, lập tức sa đọa vào cảnh giới <strong>Súc sanh</strong>.</p>
      
      <p><strong>4.</strong> Tâm thức dừng lại ở tư tưởng phân biệt lờ mờ trên phương diện tật đố, ganh tỵ. Luôn tranh giành chiếm hữu ngũ dục bằng bạo lực qua hành động của thân - khẩu. Khi thọ mạng dứt, lập tức sa đọa vào cảnh giới <strong>A-tu-la</strong>.</p>
      
      <p><strong>5.</strong> Tâm thức dừng lại ở ý chí. Khi đối cảnh, tư tưởng tập trung vào mỗi giác quan để so đo phân biệt theo luân lý, rồi dùng ý chí đè nén dục vọng bản năng cải sửa hành động hướng thiện, bằng lòng với hoàn cảnh sống hiện tại. Khi thọ mạng dứt, nếu không bị nghịch duyên sẽ tái sanh vào cảnh giới <strong>Người</strong>.</p>
      
      <p><strong>6.</strong> Tâm thức dừng lại ở ý chí và kinh nghiệm. Tư tưởng tổng hợp sự hiểu biết qua 5 giác quan kết hợp với kiến thức qua sách vở làm cho kinh nghiệm ngày càng phong phú, dễ thành công trong mọi lĩnh vực hoạt động, chiếm hữu ngoại sắc thanh cao, vui sống với cảnh an nhàn. Khi thọ mạng dứt, nếu không bị nghịch duyên sẽ tái sanh vào <strong>cảnh trời Dục giới</strong>.</p>
      
      <p><strong>7.</strong> Tâm thức dừng lại ở ý chí mạnh và kinh nghiệm dồi dào dễ dàng nhập định Sơ thiền - Nhị thiền - Tam thiền, chìm đắm chiếm hữu nội sắc để tận hưởng cảm giác hỷ lạc, xem đây là cảnh thiên đường trần gian. Khi thọ mạng dứt lập tức tái sanh vào <strong>cảnh trời Sắc giới</strong>.</p>
      
      <p><strong>8.</strong> Tâm thức dừng lại ở ý chí mạnh mẽ và kinh nghiệm tuyệt vời, tự tại xuất nhập định, an trú trong cảm giác bất lạc bất khổ thọ của Tứ thiền - Tứ không, tư tưởng say mê tạo dựng cảnh giới mông lung, vui sống trong "hiện tại lạc trú và tịch tịnh trú". Khi thọ mạng dứt lập tức tái sanh vào <strong>cảnh trời Vô sắc giới</strong>.</p>
    </div>

    <p class="mt-6 bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border border-primary-100 dark:border-primary-800">
      <strong>Tóm lại:</strong> Sau khi hết thọ mạng, sẽ tái sanh theo nghiệp vào các cõi người - trời không có Phật pháp. Có nhiều hướng tái sanh, nhưng tạm phân có 2: một là thường nghiệp lôi kéo sẽ tái sanh cảnh giới người - trời Dục giới; hai là trọng nghiệp thiện lập tức tái sanh vào cảnh trời Sắc giới và trời Vô sắc giới, còn nếu là trọng nghiệp ác lập tức sa đọa xuống 4 đường ác. Tái sanh là cũng để trả nghiệp cũ, song song đó tạo nghiệp mới bằng thân - khẩu - ý.
    </p>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="chung-ngo" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">II. CHỨNG NGỘ</h2>
    <p class="font-semibold text-lg text-primary-700 dark:text-primary-300">Chứng ngộ tức giải thoát. Chứng ngộ có tự độ và độ tha.</p>

    <div class="mt-6 space-y-6">
      <div>
        <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">1. Tự độ</h3>
        <p>Là tự tu - tự chứng - tự đắc tức là tự mình tu tập, tự chứng ngộ Phật tính và đắc quả Tứ Sa-môn. Trước hết cần "giữ giới (3-5-8-10-250) để đạt định nhất niệm rồi tâm thức sẽ trong sáng". Và nhờ thức trong sáng, có Thiện tri thức khai ngộ nhận lại Phật tính, từng bước, tâm lặng lẽ nhìn - thấy - biết rõ tiến trình tâm thức trải dài qua 8 cảnh giới từ Địa ngục tới trời Phi tưởng phi phi tưởng, trở về "Niết-bàn tịch tịnh", chấm dứt tái sanh.</p>
        
        <ul class="space-y-4 pl-0 list-none mt-4">
          <li class="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border border-secondary-100 dark:border-secondary-800">
            <strong>Thánh Nhập lưu (Dự lưu):</strong> Đây là quả Thánh quan trọng nhất vì "giải thoát đầu tiên cũng là giải thoát cuối cùng". Thánh Nhập lưu, tâm lặng lẽ nhìn thấy biết rõ 16 oai nghi của thân sinh lý, tiến trình diễn biến phát sinh tâm tham lam, sân giận, tật đố. Do rõ biết nên vĩnh viễn không dính mắc vào cảnh giới 4 đường ác, nhưng nếu không tiến mà dậm chân một chỗ sẽ tái sanh vào cảnh giới người - trời Dục giới tối đa 7 lần.
          </li>
          <li class="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border border-secondary-100 dark:border-secondary-800">
            <strong>Thánh Nhất vãng lai:</strong> Tâm lặng lẽ nhìn thấy biết rõ tiến trình tư tưởng, ý chí cải sửa dục vọng theo hướng thiện hoặc ác và tư tưởng phân tích tổng hợp đúc kết thành kinh nghiệm như thế nào nhận như thế nấy. Vì rõ biết nên vĩnh viễn không dính mắc vào cảnh giới người - trời Dục giới. Nếu dậm chân một chỗ sẽ tái sanh vào cảnh trời Sắc giới tối đa 1 lần.
          </li>
          <li class="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border border-secondary-100 dark:border-secondary-800">
            <strong>Thánh Bất lai:</strong> Tâm lặng lẽ thấy biết rõ tư tưởng, ý chí dùng kinh nghiệm dồi dào nhập định kéo dài cảm giác hỷ lạc, vì rõ biết nên vĩnh viễn không dính mắc vào cảnh trời Sắc giới. Nếu dậm chân một chỗ sẽ tái sanh vào cảnh trời Vô sắc giới tối đa 1 lần.
          </li>
          <li class="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border border-secondary-100 dark:border-secondary-800">
            <strong>Thánh A-la-hán:</strong> Trở về Chân tâm như thật biết: ý chí mạnh mẽ, kinh nghiệm tuyệt vời tự tại xuất nhập định, tư tưởng tạo dựng cảnh giới mông lung và tiến trình tâm thức trải dài từ địa ngục đến trời Vô sắc giới... Vì như thật biết nên tự độ đã xong, chấm dứt tái sanh, an trụ Niết-bàn tịch tịnh.
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">2. Độ tha</h3>
        <p>Thánh A-la-hán phát Bồ-đề tâm, thực hiện hạnh Bồ-tát, từ "Niết-bàn tịch tịnh" trở ra hiện tượng giới để cứu độ chúng sanh.</p>
        <ul class="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Bích Chi, Duyên Giác:</strong> hòa nhập vào cảnh giới chúng sanh cùng cõi để tìm hiểu tâm thức.</li>
          <li><strong>Bồ-tát Thánh:</strong> ứng hóa một thân đến nhiều thân chúng sanh hòa nhập vào một cảnh giới đến nhiều cảnh giới để từng bước hiểu rõ nguồn cội tâm thức chúng sanh trong pháp giới.</li>
          <li><strong>Như Lai:</strong> lập tức ứng hiện vô lượng thân chúng sanh trong vô biên cảnh giới, từ đó thấu suốt cội nguồn tâm thức chúng sanh trong pháp giới vũ trụ.</li>
        </ul>
      </div>
    </div>

    <p class="mt-6 bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border border-primary-100 dark:border-primary-800">
      <strong>Tóm lại:</strong> Ba bậc Thánh hữu học chứng ngộ Phật tính từng phần: 1/4, 2/4, 3/4. Vì còn tư tưởng chi phối, nếu các Ngài không tiến mà dậm chân một chỗ sẽ tái sanh vào cảnh giới người - trời có Phật pháp để tiếp tục tu học và trả nghiệp. Thánh A-la-hán chứng ngộ Phật tính 4/4 an trụ Niết-bàn tịch tịnh. Ba bậc Tam tôn "tịch chiếu" vào pháp giới, thị hiện ứng hóa nhiều thân chúng sanh trong nhiều cảnh giới, đến khi lập tức ứng hiện vô lượng thân chúng sanh trong vô biên cảnh giới thành tựu Như Lai.
    </p>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="vang-sanh" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">III. VÃNG SANH</h2>
    
    <p class="font-semibold text-lg text-primary-700 dark:text-primary-300">Vãng sanh tức giải thoát.</p>
    <p>Vãng sanh do tự lực cá nhân và tha lực của Phật A-Di-Đà tiếp dẫn về thế giới Cực Lạc yểm ly thế giới Ta-bà.</p>
    <ul class="list-disc pl-5 space-y-1 mb-4">
      <li><strong>Tự lực</strong> là tự mình hành trì câu niệm Phật đạt nhất niệm rồi phát nguyện cảm ứng đạo giao với Phật lực A-Di-Đà.</li>
      <li><strong>Tha lực</strong> là Đức Phật A-Di-Đà phóng quang tiếp dẫn tâm thức chúng sanh về cõi Cực Lạc.</li>
    </ul>

    <p>Với tâm đại từ bi, Đức Phật A-Di-Đà phát 48 đại thệ nguyện, dùng Phật lực quán trong 5 a-tăng-kỳ kiếp lập thành thế giới Cực Lạc, sau đó Ngài phát nguyện độ hết tất cả chúng sanh có duyên với Ngài về thế giới Cực Lạc, thoát luân hồi sanh tử khổ.</p>

    <p class="font-semibold mt-4">Cực Lạc là thế giới: vô lượng quang, vô lượng thọ, vô lượng công đức.</p>
    <ul class="space-y-2 pl-0 list-none mt-2">
      <li class="relative pl-6  before:absolute before:left-0 before:text-secondary-500"><strong>Vô lượng quang</strong> vì toàn thể cảnh giới Cực Lạc là do Phật lực của Đức Phật tạo thành, mặc dù mỗi chúng sanh, mỗi sự vật có hình tướng nhưng đều kết bằng hào quang xuyên suốt không chướng ngại.</li>
      <li class="relative pl-6  before:absolute before:left-0 before:text-secondary-500"><strong>Vô lượng thọ</strong> vì thế giới Cực Lạc chuyển biến sát-na, là thế giới phát hiện nên vô lượng vô biên với hằng hà sa số chúng sanh có tuổi thọ vô cùng tận.</li>
      <li class="relative pl-6  before:absolute before:left-0 before:text-secondary-500"><strong>Vô lượng công đức</strong> vì thế giới Cực Lạc do công đức Đức Phật thành lập... chúng sanh ở đây đều được thấm đẫm hào quang công đức của Phật và sau khi nghe Đức Phật thuyết một thời pháp đều phát trí tuệ đắc Thánh quả tối thiểu là Nhập lưu, có ngay lục thông được vay mượn từ Phật lực của Ngài, và tiến thẳng một đường thành Như Lai.</li>
    </ul>
    
    <p class="italic text-primary-700 dark:text-primary-300 mt-2">Đặc biệt, những chúng sanh nào còn mang nghiệp mà được vãng sanh, nhờ Phật lực sẽ trả bằng ý nghiệp cho đến chấm dứt nghiệp mà không tạo nghiệp mới.</p>

    <p class="font-bold text-lg mt-6 mb-2">Nhưng muốn được vãng sanh về Cực Lạc cần có 3 điều kiện: Tín - Hạnh - Nguyện.</p>
    <ul class="space-y-2 pl-5 list-disc mb-4">
      <li><strong>Tín:</strong> Tin sự là có thế giới Cực Lạc ở hướng Tây. Tin lý là thế giới Cực Lạc phát hiện từ Chân tâm... Và tin phải sâu tức là niệm Phật tối thiểu phải đạt nhất niệm.</li>
      <li><strong>Hạnh:</strong> là thực hành chuyên cần niệm - nhớ - nghĩ - tưởng đến Phật A-Di-Đà trong mọi oai nghi đạt nhất niệm... Tin sâu và hành chuyên luôn bổ sung hỗ tương cho nhau.</li>
      <li><strong>Nguyện:</strong> thuộc trí huệ, nghĩa là phải hiểu rõ thế giới Cực Lạc và chí thành tha thiết nguyện cầu tha lực của Phật A-Di-Đà phóng quang tiếp dẫn... Nguyện là yếu tố quyết định cho sự vãng sanh.</li>
    </ul>

    <p class="font-semibold text-primary-700 dark:text-primary-300 mt-6">Các trường hợp vãng sanh:</p>
    <div class="pl-4 space-y-3 mt-2 border-l-4 border-secondary-400">
      <p><strong>1. Chúng sanh 4 đường ác:</strong> tâm tán loạn và tạp niệm nên khó thể cảm ứng với Phật lực A-Di-Đà do đó không vãng sanh.</p>
      <p><strong>2. Chúng sanh người - trời Dục giới:</strong> tâm được nhất niệm nhưng không liên tục, do đó sắp lâm chung, muốn chắc chắn vãng sanh bắt buộc phải đủ 3 yếu tố: <em>thiện căn, phước đức, nhân duyên</em>.</p>
      <p><strong>3. Chúng sanh trời Sắc giới và trời Vô sắc giới:</strong> nhờ tâm đạt định nhất niệm cao, sâu, liên tục do đó các vị muốn vãng sanh chỉ cần phát nguyện liền cảm ứng với Phật lực, lập tức được A-Di-Đà phóng quang tiếp dẫn về Cực Lạc.</p>
      <p><strong>4. Ba bậc Thánh hữu học (Nhập lưu, Nhất vãng lai, Bất lai):</strong> đã nhận Phật tính tức tâm vô niệm, nhưng vì còn tư tưởng, do đó nếu muốn vãng sanh thì các Ngài hướng tâm phát nguyện, lập tức Phật tiếp dẫn.</p>
      <p><strong>5. Ba bậc Tam Tôn:</strong> tâm vô niệm mà niệm, niệm mà vô niệm, vì vậy chỉ hướng tâm là thế giới Cực Lạc hiện tiền.</p>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="so-sanh" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">IV. SO SÁNH: TÁI SANH – CHỨNG NGỘ – VÃNG SANH</h2>

    <div class="space-y-6 mt-6">
      <div>
        <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">1. Tái sanh và Vãng sanh khác nhau rất xa</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Tái sanh</strong> là luân hồi trong cõi Uế độ do cộng nghiệp của chúng sanh phàm phu trong 3 cõi lập thành, gọi là thế giới "Dân lập", là thế giới chuyển biến chu kỳ... Tái sanh để rồi trả nghiệp cũ đồng thời tạo nghiệp mới bằng thân - khẩu - ý.</li>
          <li><strong>Vãng sanh</strong> là hoàn toàn giải thoát và an trụ trong cõi Cực Lạc do Phật lực của A-Di-Đà lập thành, gọi là thế giới "Phật lập"... Vãng sanh được đới nghiệp gọi là "Đới nghiệp vãng sanh" nghĩa là mang nghiệp cũ về Cực Lạc trả bằng ý nghiệp mà không bao giờ tạo nghiệp mới.</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">2. Chứng ngộ và Tái sanh giống nhau & khác nhau</h3>
        <p>Giống nhau là cùng tái sanh vào cõi người - trời, nhưng khác nhau là có Phật pháp hay không Phật pháp.</p>
        <ul class="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Chứng ngộ:</strong> nếu dậm chân một chỗ thì ba bậc Thánh hữu học còn tái sanh vào cõi người - trời nhưng <span class="text-primary-600 dark:text-primary-400 font-semibold">có Phật pháp</span>.</li>
          <li><strong>Tái sanh:</strong> theo nghiệp lực của mỗi cá nhân mà tái sanh vào cõi người - trời nhưng <span class="text-red-600 dark:text-red-400 font-semibold">không Phật pháp</span>.</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">3. Vãng sanh và Chứng ngộ</h3>
        <p>Vãng sanh tức chứng ngộ, chứng ngộ có phát nguyện tức vãng sanh.</p>
        <ul class="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Vãng sanh</strong> thù thắng nhất, nhờ Phật lực đương nhiên đắc Thánh bất thối chuyển, từ Nhập lưu tiến thẳng tới Như Lai – Có lục thông – Được "Đới nghiệp vãng sanh".</li>
          <li><strong>Chứng ngộ</strong> tự chứng ngộ mà đắc Thánh quả. Nhưng nếu không có Phật tại thế, ba bậc Thánh hữu học dễ bị dậm chân tại chỗ, nên còn phải tái sanh để trả nghiệp.</li>
        </ul>
      </div>
    </div>

    <p class="mt-8 bg-primary-100 dark:bg-primary-900/30 p-5 rounded-xl border border-primary-200 dark:border-primary-800 text-center font-medium text-lg text-primary-800 dark:text-primary-200">
      Đức Phật Thích Ca giới thiệu pháp môn Tịnh Độ cho chúng sanh trong thời Mạt pháp là rất cần thiết và tối ư quan trọng. Chúng ta cần <span class="text-secondary-600 dark:text-secondary-400 font-bold">TIN SÂU – HÀNH CHUYÊN – NGUYỆN THIẾT</span> sẽ được vãng sanh về xứ Cực Lạc của Đức Phật A-Di-Đà. Đây là thế giới an vui, giải thoát và thù thắng nhất, không có gì sánh bằng.
    </p>

  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo tài liệu, nguyên nhân chính dẫn đến sự 'Tái sanh' là gì?",
    options: {
      a: "Do tâm thức đã đạt đến trạng thái nhất niệm nhưng chưa phát nguyện.",
      b: "Do ý chí muốn cứu độ chúng sanh ở cõi Ta-bà.",
      c: "Do sự dẫn dắt của các bậc Thiện tri thức về cõi người.",
      d: "Do nghiệp lực chiêu cảm và mống tâm tác ý muốn hiện hữu khi thọ mạng chấm dứt.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Văn bản nêu: 'Tái sanh là do nghiệp lực chiêu cảm mà sanh trở lại cõi Ta-bà, tức là khi thọ mạng chấm dứt, mống tâm tác ý muốn hiện hữu do đó tái sanh...'",
    },
  },
  {
    question: "Tâm thức dừng lại ở trạng thái nào thì sau khi mạng chung sẽ sa đọa vào cảnh giới Ngạ quỷ?",
    options: {
      a: "Dừng lại ở sự phân biệt lờ mờ về tật đố và ganh tỵ.",
      b: "Dừng ở bề mặt của 5 căn phù trần và không có cái biết.",
      c: "Dừng lại ở cảm giác lờ mờ của 5 thức đầu, dục vọng phát khởi tham lam chiếm hữu ngoại sắc.",
      d: "Dừng lại ở óc với sự phân biệt bản năng, không suy tính và dễ sân giận.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là A-tu-la.",
      b: "Sai. Đây là Địa ngục.",
      c: "Đúng. 'Tâm thức dừng lại ở cảm giác lờ mờ chưa phân biệt của 5 thức đầu... dẫn đến tham lam chiếm hữu ngoại sắc thô tháo. Khi thọ mạng dứt, lập tức sa đọa vào cảnh giới Ngạ quỷ.'",
      d: "Sai. Đây là Súc sanh.",
    },
  },
  {
    question: "Tại sao quả Thánh Nhập lưu (Dự lưu) lại được coi là quả Thánh quan trọng nhất?",
    options: {
      a: "Vì Thánh Nhập lưu đã thấu suốt cội nguồn tâm thức của vô lượng chúng sanh.",
      b: "Vì đây là bước giải thoát đầu tiên, vĩnh viễn không còn dính mắc vào 4 đường ác.",
      c: "Vì đây là quả vị đã chấm dứt hoàn toàn việc tái sanh vào cõi người.",
      d: "Vì người đắc quả này lập tức có đầy đủ lục thông như Phật.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là Như Lai.",
      b: "Đúng. 'Thánh đầu tiên nhận lại Phật tính là Nhập lưu, đây là quả Thánh quan trọng nhất vì giải thoát đầu tiên cũng là giải thoát cuối cùng... vĩnh viễn không dính mắc vào cảnh giới 4 đường ác.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Thánh Bất lai (Anagami) sẽ tái sanh vào đâu nếu không tiếp tục tiến tu?",
    options: {
      a: "Không còn tái sanh vì đã an trụ Niết-bàn tịch tịnh.",
      b: "Tái sanh vào cõi trời Sắc giới tối đa 1 lần.",
      c: "Tái sanh vào cõi trời Vô sắc giới tối đa 1 lần.",
      d: "Tái sanh vào cõi người hoặc trời Dục giới tối đa 7 lần.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là A-la-hán.",
      b: "Sai. Đây là Thánh Nhất vãng lai.",
      c: "Đúng. 'Thánh Bất lai... Nếu dậm chân một chỗ sẽ tái sanh vào cảnh trời Vô sắc giới tối đa 1 lần.'",
      d: "Sai. Đây là Thánh Nhập lưu.",
    },
  },
  {
    question: "Trong ba điều kiện để được Vãng sanh (Tín - Hạnh - Nguyện), yếu tố nào được coi là quyết định?",
    options: {
      a: "Hạnh (Chuyên cần niệm Phật đạt nhất niệm).",
      b: "Nguyện (Chí thành nguyện cầu Phật lực tiếp dẫn).",
      c: "Giới (Giữ gìn 250 giới tỳ-kheo thật nghiêm ngặt).",
      d: "Tín (Tin sâu vào sự tồn tại của thế giới Cực Lạc).",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Nguyện là yếu tố quyết định cho sự vãng sanh. Trong nguyện bao hàm cả tin sâu và hành chuyên.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khái niệm 'Đới nghiệp vãng sanh' trong cõi Cực Lạc có nghĩa là gì?",
    options: {
      a: "Nghiệp cũ sẽ tự động biến mất nhờ vào ánh sáng Vô lượng quang của Phật.",
      b: "Mang nghiệp cũ về Cực Lạc để trả bằng thân nghiệp qua các kiếp sống mới.",
      c: "Xóa bỏ hoàn toàn mọi nghiệp cũ ngay khi vừa đặt chân đến thế giới Cực Lạc.",
      d: "Mang nghiệp cũ về Cực Lạc và trả bằng ý nghiệp cho đến khi chấm dứt mà không tạo nghiệp mới.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Đới nghiệp vãng sanh nghĩa là mang nghiệp cũ về Cực Lạc trả bằng ý nghiệp mà không bao giờ tạo nghiệp mới.'",
    },
  },
  {
    question: "Đối với chúng sanh ở cõi người thuộc Dục giới, ngoài Tín-Hạnh-Nguyện, họ cần thêm yếu tố nào để chắc chắn vãng sanh khi lâm chung?",
    options: {
      a: "Cần đầy đủ 3 yếu tố: Thiện căn, Phước đức và Nhân duyên.",
      b: "Cần phải nhập được vào các tầng định Sơ thiền hoặc Nhị thiền.",
      c: "Cần hiểu rõ cấu trúc của 15 hạng chúng sanh trong vũ trụ.",
      d: "Cần thực hiện đầy đủ các hạnh Bồ-tát cứu độ chúng sanh.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Chúng sanh người - trời Dục giới... muốn chắc chắn vãng sanh bắt buộc phải đủ 3 yếu tố: thiện căn, phước đức, nhân duyên.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Điểm khác biệt căn bản giữa sự 'Chứng ngộ' và 'Tái sanh' thông thường vào cõi Người - Trời là gì?",
    options: {
      a: "Chứng ngộ sẽ tái sanh vào cõi không có đau khổ, còn tái sanh thông thường thì có.",
      b: "Chứng ngộ là do Phật lực tiếp dẫn, còn tái sanh là do tự lực.",
      c: "Chứng ngộ không còn mang theo nghiệp, còn tái sanh thì mang theo nghiệp lực.",
      d: "Chứng ngộ là tái sanh vào cõi có Phật pháp, còn tái sanh thông thường là vào cõi không có Phật pháp.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Chứng ngộ: nếu dậm chân một chỗ thì ba bậc Thánh hữu học còn tái sanh vào cõi người - trời nhưng có Phật pháp. Tái sanh: theo nghiệp lực... tái sanh vào cõi người - trời nhưng không Phật pháp.'",
    },
  },
  {
    question: "Tại sao thế giới Cực Lạc được gọi là thế giới 'Phật lập'?",
    options: {
      a: "Vì đó là thế giới do sự cộng nghiệp thiện của chúng sanh tạo thành.",
      b: "Vì đó là nơi chỉ dành riêng cho các vị Phật cư ngụ.",
      c: "Vì thế giới đó được tạo thành từ 48 đại nguyện và công đức của Đức Phật A-Di-Đà.",
      d: "Vì thế giới đó có không gian và thời gian tương ứng với cõi Ta-bà.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là đặc điểm của Uế độ (thế giới Dân lập).",
      b: "Sai.",
      c: "Đúng. 'Vãng sanh là hoàn toàn giải thoát và an trụ trong cõi Cực Lạc do Phật lực của A-Di-Đà lập thành, gọi là thế giới Phật lập'.",
      d: "Sai.",
    },
  },
  {
    question: "Bậc Thánh Nhất vãng lai đạt được bao nhiêu phần chứng ngộ Phật tính?",
    options: {
      a: "2/4 Phật tính.",
      b: "Toàn bộ (4/4) Phật tính.",
      c: "3/4 Phật tính.",
      d: "1/4 Phật tính.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Ba bậc Thánh hữu học chứng ngộ Phật tính từng phần 1/4 (Nhập lưu), 2/4 (Nhất vãng lai), 3/4 (Bất lai).",
      b: "Sai. Đây là Thánh A-la-hán.",
      c: "Sai. Đây là Thánh Bất lai.",
      d: "Sai. Đây là Thánh Nhập lưu.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-phap-mon-tinh-do-bai-4-nhan-thuc-tai-sanh',
  slug: 'bai-4-nhan-thuc-ve-tai-sanh-chung-ngo-vang-sanh',
  title: 'Nhận Thức Về Tái Sanh — Chứng Ngộ — Vãng Sanh',
  type: 'article',
  status: 'published',
  order: 4,
  coverImage: materialUrl('NHẬN THỨC VỀ TÁI SANH - CHỨNG NGỘ - VÃNG SANH'),
  createdAt: '2026-08-29',
  updatedAt: '2026-08-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/NH%E1%BA%ACN%20TH%E1%BB%A8C%20V%E1%BB%80%20T%C3%81I%20SANH%20-%20CH%E1%BB%A8NG%20NG%E1%BB%98%20-%20V%C3%83NG%20SANH/Nh%E1%BA%ADn_th%E1%BB%A9c_v%E1%BB%81_gi%E1%BA%A3i_tho%C3%A1t.png',
      readingContent,
      tableOfContents: [
        { id: 'tai-sanh', label: 'I. Tái Sanh' },
        { id: 'chung-ngo', label: 'II. Chứng Ngộ' },
        { id: 'vang-sanh', label: 'III. Vãng Sanh' },
        { id: 'so-sanh', label: 'IV. So sánh: Tái sanh – Chứng ngộ – Vãng sanh' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/NH%E1%BA%ACN%20TH%E1%BB%A8C%20V%E1%BB%80%20T%C3%81I%20SANH%20-%20CH%E1%BB%A8NG%20NG%E1%BB%98%20-%20V%C3%83NG%20SANH/Pathways_to_Liberation.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/Ntle3bNgkqI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4F6Im7DJOQZVWVCfwqJ46V',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Tái Sanh, Chứng Ngộ & Vãng Sanh',
    passPercentage: 70,
    questions,
  },
}

export default lesson