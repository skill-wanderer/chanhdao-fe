import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Pháp Môn Tịnh Độ</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mb-8 text-center">
      <h2 class="mt-0 mb-4 text-2xl md:text-3xl font-bold text-primary-700 dark:text-primary-300 uppercase leading-snug">NHẬN THỨC VỀ NHÂN QUẢ VÀ NGHIỆP</h2>
      <div class="h-1 w-20 bg-secondary-400 mx-auto my-4 rounded-full"></div>
      <p class="mb-0 text-lg font-medium opacity-80">Tóm lược bài giảng của</p>
      <p class="mt-1 mb-0 text-xl font-bold text-primary-800 dark:text-primary-200">Cố HT. Thích Giác Khang</p>
    </div>

    <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-8 text-sm italic">
      <strong>Lưu ý:</strong> Nội dung này được dựa trên bài giảng của Cố HT Thích Giác Khang, nhằm giúp người đọc dễ dàng nắm bắt các ý chính và thuận tiện trong việc học tập, tham khảo; không phải là bản chép nguyên văn toàn bộ bài giảng.
    </div>

    <h2 id="dan-nhap" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">I. DẪN NHẬP: KHÁI NIỆM TÂM, NHÂN QUẢ VÀ NGHIỆP</h2>
    <p>Đạo Phật là đạo nhân quả (nhân nào quả nấy) trên cơ sở lấy <strong>"Tâm"</strong> làm gốc và được ứng dụng vào trong cuộc sống.</p>
    <p><strong>Tâm còn gọi là nhận thức.</strong> Nhận thức dẫn đến hành động như thế nào thì sẽ cho kết quả tương ưng như thế đó dựa trên nền tảng luật "Nhân quả" (nghĩa là <em>"Hiện tại là quả của quá khứ và làm nhân cho vị lai"</em>).</p>
    <p>Thế nhưng, có lúc Đức Phật lại nói <em>"kết quả hiện tại là do nghiệp lực dẫn dắt"</em>.</p>
    <p class="font-semibold text-primary-700 dark:text-primary-300">Đặt vấn đề: Vậy thì Nhân quả là sao? Nghiệp là như thế nào? Nhân quả và Nghiệp giống nhau hay khác nhau?</p>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="dinh-nghia" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">II. ĐỊNH NGHĨA VÀ MỐI QUAN HỆ GIỮA NHÂN QUẢ VÀ NGHIỆP</h2>
    
    <div class="mt-6 space-y-6">
      <div>
        <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2 border-l-4 border-primary-400 pl-3">1. Phân loại Nhân quả</h3>
        <ul class="space-y-3 pl-0 list-none">
          <li class="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border border-secondary-100 dark:border-secondary-800/50">
            <strong>Nhân quả đồng thời:</strong> Là thế giới chuyển biến sát-na của A-lại-da, thế giới biến dịch sinh tử, là sự vận hành tự nhiên trùng trùng duyên khởi vô lượng pháp trong vũ trụ (còn gọi là <em>pháp chấp</em>).
          </li>
          <li class="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border border-secondary-100 dark:border-secondary-800/50">
            <strong>Nhân quả khác thời:</strong> Nương vào nhân quả đồng thời mà phát hiện, là thế giới chuyển biến chu kỳ của Mạt-na, thế giới phần đoạn sinh tử. Nhận thức có: quá khứ - hiện tại - vị lai trải qua ba cõi. Nhân quả khác thời là hành động tự nhiên của thân căn sinh lý (còn gọi là <em>ngã chấp</em>).
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2 border-l-4 border-primary-400 pl-3">2. Định nghĩa Nghiệp</h3>
        <p>Nghiệp trải qua tiến trình 5 uẩn, ý chí cải sửa nhân quả khác thời thành nghiệp ác hay thiện. Nghiệp có 3 loại: <strong>Thân nghiệp, Khẩu nghiệp, Ý nghiệp</strong>.</p>
        <p>Trong đó, <strong>Ý nghiệp</strong> là mấu chốt điều khiển thân-khẩu hành động tạo nghiệp.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2 border-l-4 border-primary-400 pl-3">3. Mối quan hệ giữa Nhân quả và Nghiệp</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Nền tảng:</strong> Nhân quả đồng thời là căn bản làm nền tảng duyên khởi nhân quả khác thời để tạo ra nghiệp.</li>
          <li><strong>Mối liên hệ:</strong> Trong nhân quả chưa có nghiệp, nhưng trong nghiệp đã hàm chứa nhân quả.</li>
          <li>
            <strong>Điểm giống và khác nhau:</strong>
            <ul class="list-circle pl-5 mt-1 space-y-1">
              <li><em>Giống nhau:</em> Đều biểu hiện ở hành động của thân căn.</li>
              <li><em>Khác nhau:</em> Nhân quả là hành động tự nhiên; còn <strong>Nghiệp là hành động có tác ý</strong>.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="gia-tri-than-nguoi" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">III. GIÁ TRỊ CỦA THÂN NGƯỜI VÀ KHẢ NĂNG CHUYỂN NGHIỆP</h2>
    <p>Đức Phật có nói: <strong>"Nhân thân nan đắc"</strong> (tức được thân người là khó). Trên thế giới hiện nay có khoảng 6 tỷ người, nhưng không ai giống ai về hình dáng lẫn tính tình:</p>
    <ul class="list-disc pl-5 space-y-1">
      <li><strong>Hình dáng:</strong> Cao - thấp, mập - ốm, đẹp - xấu, trắng - đen, thân đầy đủ căn hay khuyết tật,…</li>
      <li><strong>Hoàn cảnh:</strong> Sung sướng thanh nhàn - vất vả lo toan, giàu sang - bần hàn, hạnh phúc - đau khổ,…</li>
      <li><strong>Sự hiểu biết:</strong> Sâu - cạn, thông minh - tối dạ, có học - thất học,…</li>
      <li><strong>Tính tình:</strong> Hiền - dữ, thật thà - ranh ma, tế nhị - thô lỗ,…</li>
    </ul>

    <p class="mt-4">Các tôn giáo khác cho đó là "định mệnh", nhưng Đạo Phật cho là <strong>"nhân-quả" của mỗi người tự tạo</strong>: Quá khứ làm việc thiện thì hiện tại được hưởng những điều tốt đẹp, làm điều ác thì hiện tại nhận lãnh những điều xấu xa. Do đó <em>"chính mình tự chịu trách nhiệm vận mệnh của mình"</em>.</p>
    
    <p class="font-bold text-primary-700 dark:text-primary-400 mt-4 text-lg">Đức Phật có nói: "Được làm người rất quý" vì con người có ý chí biết cải sửa nhân quả thành nghiệp, chuyển nghiệp ác thành thiện cho đến thuần thiện, nếu đủ duyên sẽ dứt nghiệp.</p>

    <div class="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl border border-primary-100 dark:border-primary-800 mt-4">
      <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">Nguyên lý chuyển nghiệp trong hiện tại:</h4>
      <p class="mb-2">Cái quả hiện tại đang nhận chịu, mình có quyền dùng ý chí kinh nghiệm cải sửa "quả xấu thành quả tốt, quả tốt thành quả tốt hơn".</p>
      <p class="mb-0">Hoặc ngay trong nhân quả và nghiệp, lặng lẽ thấy rõ mọi tiến trình diễn biến của nó thì <strong>"bất muội nhân quả và nghiệp mà phi nghiệp"</strong>.</p>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="phan-tich-nhan-qua" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">IV. PHÂN TÍCH NHÂN QUẢ VÀ NGHIỆP QUA 15 HẠNG CHÚNG SANH</h2>
    
    <p>Thông qua 15 hạng chúng sanh (trong 3 cõi) để phân tích nhân quả, nghiệp và cách chuyển nghiệp như thế nào, nhất là của người và trời Dục giới trong cuộc sống hiện tại.</p>
    <ul class="list-disc pl-5 space-y-2 mb-6">
      <li><strong>Nhân quả đồng thời:</strong> Là thế giới sinh diệt sát-na luôn vận hành tự nhiên trùng trùng duyên khởi ra vô lượng pháp trong vũ trụ, gom gọn là 15 hạng chúng sanh.</li>
      <li><strong>Nhân quả khác thời:</strong> Là thế giới sinh diệt chu kỳ của Mạt-na, thế giới có thân căn sinh lý và trần cảnh vật lý đều là thức biến nên luôn thu hút giao thoa lẫn nhau để nhận thức phát hiện.</li>
    </ul>

    <div class="pl-4 border-l-2 border-secondary-300 dark:border-secondary-700 mb-6 italic opacity-90">
      <p class="mb-1">Thân căn có ba, tương ưng với ba trần cảnh để phát hiện ba thức:</p>
      <ul class="list-none pl-4 space-y-1">
        <li>- <strong>Cõi Dục:</strong> Thân căn phù trần giao thoa ngoại pháp phát hiện cái nhìn.</li>
        <li>- <strong>Cõi Sắc:</strong> Thân căn tịnh sắc giao thoa nội pháp phát hiện cái thấy (tức cảm giác).</li>
        <li>- <strong>Cõi Vô sắc:</strong> Thân căn tịnh sắc vi tế giao thoa pháp trần phát hiện cái biết phân biệt.</li>
      </ul>
    </div>

    <!-- CÕI DỤC GIỚI -->
    <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400 mt-8 mb-4 bg-primary-50 dark:bg-primary-900/20 inline-block px-4 py-1 rounded-lg">A. CÕI DỤC GIỚI</h3>
    <p>Tạm chia có 3 trường hợp nhân quả khác thời:</p>
    <ol class="list-decimal pl-5 space-y-1 mb-4 font-medium">
      <li>Khi thân căn có nhu cầu sinh lý tự nhiên (đi, đứng, nằm, ngồi,…) thường hành động bộc phát không ý thức.</li>
      <li>Khi thân căn đối xúc với trần cảnh phát sinh cảm giác dễ chịu hoặc khó chịu.</li>
      <li>Khi thân căn có nhu cầu bồi dưỡng thì phát khởi dục vọng.</li>
    </ol>

    <div class="space-y-6">
      <div>
        <h4 class="font-bold text-lg text-secondary-600 dark:text-secondary-400">1. Bốn đường ác (Địa ngục, Ngạ quỷ, Súc sanh, A-tu-la)</h4>
        <p>Có thân căn sinh lý thuần phù trần, tâm si mê đến mức ý chí ẩn khuất, chỉ có cảm giác và phân biệt lờ mờ, luôn hành động theo dục vọng bản năng, <em>thuần nhân quả khác thời</em>.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-900/30 text-sm">
            <p class="font-bold text-red-700 dark:text-red-400 mb-1">Hành vi:</p>
            <ul class="list-disc pl-4 space-y-1">
              <li>Hành động tự nhiên theo nhu cầu, có sự cố vẫn thản nhiên.</li>
              <li>Tâm quá ngu si nên vui-buồn nhận lờ mờ.</li>
              <li>Hành động chiếm hữu ngoại pháp theo bản năng sinh tồn.</li>
            </ul>
          </div>
          <div class="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-900/30 text-sm">
            <p class="font-bold text-red-700 dark:text-red-400 mb-1">Biểu hiện tâm lý:</p>
            <ul class="list-disc pl-4 space-y-1">
              <li><strong>Địa ngục:</strong> Tâm ù lỳ.</li>
              <li><strong>Ngạ quỷ:</strong> Tâm tham lam.</li>
              <li><strong>Súc sanh:</strong> Tâm sân giận.</li>
              <li><strong>A-tu-la:</strong> Tâm ganh tỵ thích gây sự.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h4 class="font-bold text-lg text-secondary-600 dark:text-secondary-400">2. Loài Người</h4>
        <p>Có thân căn gồm phù trần và tịnh sắc, bắt đầu có ý chí, sống theo luân lý.</p>
        <p><strong>Cơ chế tạo nghiệp:</strong> Khi thân căn sinh lý có nhu cầu, dục vọng khởi lên, liền tác ý tập trung vào một giác quan... rồi tư tưởng phân biệt suy tính lên kế hoạch chiếm hữu (Ý nghiệp); Ý chí sai thân-khẩu hành động chiếm hữu ngũ dục (Thân/Khẩu nghiệp).</p>
        
        <p class="mt-3 font-semibold">Con người do mới tiến hóa nên tâm thức đứng giữa ranh giới ác và thiện, môi trường sống rất quan trọng:</p>
        
        <div class="space-y-4 mt-2">
          <div class="border-l-4 border-red-400 pl-4 py-2">
            <p class="font-bold text-red-600 dark:text-red-400">Trường hợp A: Trong môi trường KHÔNG luân lý</p>
            <p class="text-sm mb-2">Dễ bị dục vọng chi phối mạnh, ý chí đồng hóa với tâm ác và hành động tạo nghiệp theo bản năng.</p>
            <ul class="list-disc pl-5 text-sm space-y-1">
              <li>Đổ trút mọi lỗi lầm cho người khác, gia tăng sự oán thù.</li>
              <li>Hành động quá trớn: vui/buồn thiếu ý thức, chạy theo xì ke, rượu chè, cờ bạc, dâm dục,...</li>
              <li>"Chỉ nghĩ đến mình", chiếm hữu ngũ dục thỏa mãn bản thân.</li>
            </ul>
            <p class="text-sm font-semibold text-red-700 dark:text-red-400 mt-2">Kết quả: Hiện tại cố ý cải sửa nhân quả chuyển thành nghiệp ác, sẽ nhận lãnh quả ác.</p>
          </div>

          <div class="border-l-4 border-green-400 pl-4 py-2">
            <p class="font-bold text-green-600 dark:text-green-400">Trường hợp B: Trong môi trường CÓ luân lý</p>
            <p class="text-sm mb-2">Ý chí chế ngự được dục vọng, thường hành động tạo nghiệp thiện.</p>
            <ul class="list-disc pl-5 text-sm space-y-1">
              <li>Biết xấu hổ, ăn năn, hối lỗi, tìm cách khắc phục thiệt hại.</li>
              <li>Ý chí chế ngự "không vui vui quá, không buồn buồn tênh", có thể xả thân cứu người.</li>
              <li>Suy nghĩ phân tích chiếm hữu ngũ dục phù hợp luân lý, "nhường cơm xẻ áo" giúp người.</li>
            </ul>
            <p class="text-sm font-semibold text-green-700 dark:text-green-400 mt-2">Kết quả: Luôn ý thức cải sửa nhân quả chuyển thành nghiệp thiện thì sẽ giảm nghiệp ác nhận được quả thiện.</p>
          </div>
        </div>
      </div>

      <div>
        <h4 class="font-bold text-lg text-secondary-600 dark:text-secondary-400">3. Trời Dục giới</h4>
        <p>Ngoài ý chí còn có học vị, kiến thức, kinh nghiệm,… tâm hướng thiện, sống "tri túc thiểu dục", chọn luân lý làm thước đo.</p>
        <p class="mt-2 text-sm italic">Ví dụ: Nhà bác học phát minh khoa học; Nhà giáo tận tâm giảng dạy; Ngành y dược cứu chữa bệnh nhân; Nhà báo đăng tin chuẩn xác; Nhà hảo tâm bố thí giúp đỡ...</p>
        <p class="mt-2 font-semibold text-primary-600 dark:text-primary-400">Kết quả: Quả đã tốt nay cải sửa chuyển thành quả tốt hơn, sẽ tiến hóa lên cao hơn.</p>

        <div class="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg mt-4 border border-gray-200 dark:border-gray-700">
          <p class="font-bold text-red-600 dark:text-red-400 mb-1">⚠️ Thực trạng đáng tiếc thời đại ngày nay:</p>
          <p class="text-sm">Vật chất ngút trời, ngũ dục lung lạc ý chí. Nhiều người chuyển mục đích "mình vì mọi người" thành "mọi người vì mình". Kiến thức, kinh nghiệm bị thương mại hóa. Đã có quả tốt nay cải sửa chuyển thành quả xấu ác, sẽ rơi xuống bốn đường ác. Thật đáng tiếc!!!</p>
        </div>
      </div>
    </div>

    <!-- CÕI TRỜI SẮC GIỚI & VÔ SẮC GIỚI -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div>
        <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-3 bg-primary-50 dark:bg-primary-900/20 inline-block px-4 py-1 rounded-lg">B. CÕI TRỜI SẮC GIỚI</h3>
        <p class="text-sm mb-2">Quyết tâm bỏ ác hướng thiện, tu thiền định để làm chủ nghiệp, thăng hoa lên cõi Sắc.</p>
        <ul class="list-disc pl-5 text-sm space-y-2">
          <li><strong>Sơ thiền:</strong> "ly dục sinh hỷ lạc". Đạt nhất niệm, chuyển nghiệp ác thành thiện, chuyển ngoại pháp thành nội pháp.</li>
          <li><strong>Nhị thiền:</strong> Đạt "định sanh hỷ lạc".</li>
          <li><strong>Tam thiền:</strong> Đạt "ly hỷ diệu lạc".</li>
        </ul>
        <p class="text-sm font-semibold mt-3">Đặc điểm Nghiệp:</p>
        <p class="text-sm">Tu thiền định tâm nhất niệm, làm chủ được nghiệp... cải sửa nhân quả khác thời của thọ chuyển thành nghiệp hoàn toàn thiện.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-3 bg-primary-50 dark:bg-primary-900/20 inline-block px-4 py-1 rounded-lg">C. CÕI TRỜI VÔ SẮC GIỚI</h3>
        <p class="text-sm mb-2">Dùng định lực kỹ lâu sâu thăng hoa lên Tứ thiền sắc giới và các tầng Vô sắc.</p>
        <ul class="list-disc pl-5 text-sm space-y-2">
          <li><strong>Tứ thiền:</strong> An trú trong "hiện tại", không còn dính mắc vào thân và cảm giác. Tận hưởng "hiện tại lạc trú".</li>
          <li><strong>Tứ Không:</strong> Chìm đắm vào "tịch tịnh trú", dùng định lực tiêu dung nhân quả khác thời của sắc, thọ.</li>
        </ul>
        <p class="text-sm font-semibold mt-3">Đặc điểm Nghiệp:</p>
        <p class="text-sm">Sống tự tại "gió bát phong không động tới" nên nghĩ rằng mình đã hoàn toàn "bất lạc nhân quả và dứt nghiệp".</p>
      </div>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="bat-muoi-nhan-qua" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">V. SỰ THẬT VỀ "BẤT MUỘI NHÂN QUẢ" VÀ TẬN DIỆT NGHIỆP</h2>
    
    <h3 class="text-xl font-bold text-primary-700 dark:text-primary-300 mt-6 mb-2">1. Bất lạc nhân quả vs. Bất muội nhân quả</h3>
    <p>Nhân quả là dòng chuyển biến sát-na không ngừng nghỉ của vũ trụ, như vậy không thể "bất lạc nhân quả" (trốn tránh/không rơi vào nhân quả) mà là <strong>"bất muội nhân quả"</strong> (không mê mờ về nhân quả).</p>
    <p class="font-semibold text-secondary-600 dark:text-secondary-400">Chỉ có tâm "vô niệm" mới "bất muội nhân quả và phi nghiệp".</p>

    <h3 class="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">2. Sự chứng ngộ của Tứ Thánh</h3>
    
    <div class="space-y-6">
      <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
        <div class="bg-gray-100 dark:bg-gray-800 p-3 font-bold text-lg">a. Nhập lưu (Tu-đà-hoàn)</div>
        <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="font-bold text-green-600 dark:text-green-400 mb-1">Thánh chứng:</p>
            <p>Trở về Chân tâm rồi "lặng lẽ như dòng nước" nhìn thấy rõ tiến trình nhân quả của bốn đường ác. <em>Vĩnh viễn không có hành động ác.</em></p>
          </div>
          <div>
            <p class="font-bold text-red-600 dark:text-red-400 mb-1">Lầm lẫn của phàm phu:</p>
            <p>Người/trời Dục giới tưởng mình đắc Nhập lưu, nhưng khi gặp ngũ dục quá tải lại rớt xuống 4 đường ác do cố ý dùng ý chí cải sửa.</p>
          </div>
        </div>
      </div>

      <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
        <div class="bg-gray-100 dark:bg-gray-800 p-3 font-bold text-lg">b. Nhất vãng lai (Tư-đà-hàm)</div>
        <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="font-bold text-green-600 dark:text-green-400 mb-1">Thánh chứng:</p>
            <p>Rõ biết tiến trình tư tưởng cải sửa nghiệp thiện/ác. Bất muội nhân quả về sắc và phi nghiệp của người-trời Dục giới.</p>
          </div>
          <div>
            <p class="font-bold text-red-600 dark:text-red-400 mb-1">Lầm lẫn của phàm phu:</p>
            <p>Cõi Sắc tưởng mình đắc Nhất vãng lai, dùng định lực đè nén chạy trốn nhân quả. Khi xuất định gặp hoàn cảnh quá tải dễ rớt xuống cõi Dục.</p>
          </div>
        </div>
      </div>

      <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
        <div class="bg-gray-100 dark:bg-gray-800 p-3 font-bold text-lg">c. Bất lai (A-na-hàm)</div>
        <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="font-bold text-green-600 dark:text-green-400 mb-1">Thánh chứng:</p>
            <p>Bất muội nhân quả về thọ và phi nghiệp của cõi Sắc.</p>
          </div>
          <div>
            <p class="font-bold text-red-600 dark:text-red-400 mb-1">Lầm lẫn của phàm phu:</p>
            <p>Tứ thiền sắc giới tưởng mình đắc Bất lai, an trú trong "hiện tại" nhưng khi xuất định vẫn có thể rớt xuống.</p>
          </div>
        </div>
      </div>

      <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
        <div class="bg-gray-100 dark:bg-gray-800 p-3 font-bold text-lg">d. A-la-hán</div>
        <div class="p-4 text-sm">
          <p class="font-bold text-green-600 dark:text-green-400 mb-1">Thánh chứng:</p>
          <ul class="list-disc pl-5 mb-3">
            <li><strong>Nếu còn mang xác thân:</strong> Lặng lẽ như thật biết tiến trình ý chí cải sửa nhân quả nên <em>"nghiệp mà phi nghiệp"</em>.</li>
            <li><strong>Nếu nhập "diệt thọ tưởng định" (Chân không):</strong> Thì <em>"phi nhân quả, phi nghiệp"</em>.</li>
          </ul>
          <p class="font-bold text-red-600 dark:text-red-400 mb-1">Lầm lẫn của phàm phu:</p>
          <p>Tứ Không tưởng mình đắc A-la-hán, an trú trong "tịch tịnh", nhưng xuất định từ đỉnh cao tụt dốc, có thể tụt tận cùng 4 đường ác.</p>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-bold text-primary-700 dark:text-primary-300 mt-8 mb-4">3. Sự chứng ngộ của Ba Bậc Tam Tôn</h3>
    <ul class="list-disc pl-5 space-y-2">
      <li><strong>Bích Chi, Duyên Giác:</strong> Tâm bất động, hòa mình vào cuộc sống tìm hiểu hoàn cảnh chúng sanh, luôn <em>"bất muội nhân quả, nghiệp mà phi nghiệp"</em>.</li>
      <li><strong>Bồ Tát Thánh:</strong> Phát bồ đề tâm cứu độ chúng sanh. Từng bước tùy thuận "nhân quả và nghiệp" ứng hóa vô lượng thân.</li>
      <li><strong>Như Lai:</strong> Tâm như như bất động, lập tức ứng hóa "nhân quả và nghiệp" độ chúng sanh toàn pháp giới. Như Lai <em>thấu suốt "nhân quả và nghiệp" toàn thể chúng sanh trong vũ trụ</em>.</li>
    </ul>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="tong-ket" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">VI. TỔNG KẾT BÀI GIẢNG</h2>
    <ul class="list-none pl-0 space-y-4">
      <li class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-xl">
        <strong class="text-primary-700 dark:text-primary-300 text-lg">Bản chất Nhân quả:</strong> Nhân quả đồng thời là dòng chuyển biến tự nhiên làm nền tảng duyên khởi nhân quả khác thời. Tùy nhận thức mà chúng sanh cải sửa thành nghiệp thiện hoặc ác.
      </li>
      <li class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-xl">
        <strong class="text-primary-700 dark:text-primary-300 text-lg">Nguyên lý chuyển nghiệp:</strong> Thay đổi nhận thức ngay trong hiện tại. <em>"Những gì ở quá khứ được cải sửa ngay hiện tại, những gì ở tương lai đều nằm ngay hạt giống hiện tại".</em>
      </li>
      <li class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-xl">
        <strong class="text-primary-700 dark:text-primary-300 text-lg">Nguyên lý dứt nghiệp:</strong> Khi tâm vô niệm, nhận lại Chân tâm, lặng lẽ thấy rõ tiến trình ngũ uẩn diễn biến như thế nào nhận như thế nấy.
      </li>
    </ul>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="thi-du" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">VII. THÍ DỤ TRỰC QUAN VỀ NHÂN QUẢ VÀ NGHIỆP TRÊN NỀN TẢNG "TÂM"</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div class="border border-secondary-200 dark:border-secondary-800 rounded-xl p-5">
        <h3 class="font-bold text-lg text-secondary-700 dark:text-secondary-300 mb-3">Thí dụ 1: Hành động vô ý đạp con vật</h3>
        <p class="text-sm mb-3">Vô ý đạp nhầm con rắn mối chết (đây là hành động nhân quả, ví như <strong>2x2=4</strong>).</p>
        <ul class="text-sm space-y-3">
          <li>🔥 <strong>Tâm ác:</strong> Rủa chửi "tại mày mà tao suýt té". Chuyển thành nghiệp ác, thù hằn sinh ra → <strong>2x2=50</strong>.</li>
          <li>🌱 <strong>Tâm thiện:</strong> Hối hận, xin lỗi, đem chôn xác. Chuyển thành nghiệp thiện → <strong>2x2=2</strong>.</li>
          <li>✨ <strong>Hiểu đạo:</strong> Tụng chú Vãng sanh cầu cho linh hồn nó. Chuyển thành nghiệp thiện → <strong>2x2=0</strong> (và có thêm phước báo).</li>
        </ul>
      </div>

      <div class="border border-secondary-200 dark:border-secondary-800 rounded-xl p-5">
        <h3 class="font-bold text-lg text-secondary-700 dark:text-secondary-300 mb-3">Thí dụ 2: Ứng xử với người ăn xin</h3>
        <p class="text-sm mb-3">Ông lão ăn mày xin 4 ông chủ giàu có (hiện tại họ đang hưởng quả thiện):</p>
        <ul class="text-sm space-y-3">
          <li><strong>Ông 1:</strong> Bố thí vì sĩ diện, tiếc của → Tâm keo kiệt, chuyển thiện thành nhân ác.</li>
          <li><strong>Ông 2:</strong> Thương cảm, bố thí thường xuyên → Tâm thiện, chuyển thiện càng thiện hơn.</li>
          <li><strong>Ông 3:</strong> Bố thí với tâm "không người cho, không vật cho, không người nhận" (Tam luân không tịch) → Đây là hành động của <strong>Thánh A-la-hán</strong>.</li>
          <li><strong>Ông 4:</strong> Bố thí vật chất + bố thí pháp (hướng dẫn tu tập) → Tâm đại từ đại bi, đây là <strong>Bồ Tát Thánh</strong> tùy thuận cứu độ.</li>
        </ul>
      </div>
    </div>

  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo văn bản, 'Tâm' còn được gọi bằng thuật ngữ nào khác để giải thích về sự vận hành của nhân quả?",
    options: {
      a: "Nhận thức",
      b: "Định mệnh",
      c: "Trần cảnh",
      d: "Bản năng",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Văn bản ghi rõ: 'Tâm còn gọi là nhận thức. Nhận thức dẫn đến hành động như thế nào thì sẽ cho kết quả tương ưng như thế đó...'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Sự khác biệt căn bản giữa 'Nhân quả' và 'Nghiệp' theo định nghĩa trong tài liệu là gì?",
    options: {
      a: "Nhân quả là hành động tự nhiên, còn Nghiệp là hành động có tác ý",
      b: "Nhân quả và Nghiệp hoàn toàn giống nhau về mọi mặt",
      c: "Nhân quả chỉ có ở quá khứ, còn Nghiệp chỉ có ở hiện tại",
      d: "Nhân quả thuộc về tâm, còn Nghiệp thuộc về thân",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Nhân quả là hành động tự nhiên; còn Nghiệp là hành động có tác ý.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Loại nhân quả nào được mô tả là thế giới chuyển biến sát-na của A-lại-da và là sự vận hành tự nhiên của vũ trụ?",
    options: {
      a: "Nhân quả khác thời",
      b: "Nhân quả đồng thời",
      c: "Phần đoạn sinh tử",
      d: "Nghiệp ác",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Nhân quả đồng thời: Là thế giới chuyển biến sát-na của A-lại-da, thế giới biến dịch sinh tử, là sự vận hành tự nhiên...'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Đức Phật lại nói 'Được làm người là rất quý' (Nhân thân nan đắc)?",
    options: {
      a: "Vì con người có ý chí biết cải sửa nhân quả thành nghiệp thiện",
      b: "Vì con người sống thọ hơn tất cả các hạng chúng sanh khác",
      c: "Vì con người có hình dáng đẹp đẽ nhất trong 15 hạng chúng sanh",
      d: "Vì con người là loài duy nhất không phải chịu quy luật nhân quả",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Được làm người rất quý vì con người có ý chí biết cải sửa nhân quả thành nghiệp, chuyển nghiệp ác thành thiện cho đến thuần thiện...'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Nhóm chúng sanh nào được mô tả là hành động thuần theo bản năng sinh tồn và 'thuần nhân quả khác thời' do ý chí bị ẩn khuất?",
    options: {
      a: "Chư thiên cõi Sắc giới",
      b: "Bốn đường ác (Địa ngục, Ngạ quỷ, Súc sanh, A-tu-la)",
      c: "Các bậc Thánh A-la-hán",
      d: "Loài người trong môi trường có luân lý",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Bốn đường ác... tâm si mê đến mức ý chí ẩn khuất... luôn hành động theo dục vọng bản năng, thuần nhân quả khác thời.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trong ví dụ về hành động vô ý đạp chết con vật, nếu một người hiểu đạo và tụng chú Vãng sanh thì kết quả nhân quả được mô tả như thế nào?",
    options: {
      a: "2×2=4 không thay đổi",
      b: "2×2=50 vì gây ra cái chết",
      c: "2×2=2 vì biết hối hận",
      d: "2×2=0 và có thêm phước báo",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Nếu hiểu đạo: Tụng chú Vãng sanh... Từ nhân quả chuyển thành nghiệp thiện, lúc này 2x2=0 mà có thêm phước báo.'",
    },
  },
  {
    question: "Sự khác biệt giữa 'Bất lạc nhân quả' và 'Bất muội nhân quả' là gì?",
    options: {
      a: "Bất lạc dành cho người phàm, Bất muội dành cho bậc Thánh",
      b: "Bất lạc là hành động thiện, Bất muội là hành động ác",
      c: "Bất lạc là không rơi vào nhân quả (không thể có), còn Bất muội là không lầm lạc về nhân quả",
      d: "Hai khái niệm này hoàn toàn đồng nghĩa",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Nhân quả là sự chuyển biến sát na không ngừng, do đó 'không thể bất lạc nhân quả (tức không rơi vào nhân quả) mà là bất muội nhân quả (không mê mờ về nhân quả)'.",
      d: "Sai.",
    },
  },
  {
    question: "Trạng thái chứng ngộ của bậc Thánh A-la-hán khi còn mang xác thân được mô tả như thế nào?",
    options: {
      a: "Sống hoàn toàn bằng bản năng như bốn đường ác",
      b: "Bất muội nhân quả, nghiệp mà phi nghiệp",
      c: "Chỉ còn thực hiện nghiệp ác để thử thách tâm thức",
      d: "Hoàn toàn không còn chịu tác động của nhân quả đồng thời",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Nếu còn mang xác thân: Vẫn còn trả nghiệp cũ, nhưng các Ngài lặng lẽ như thật biết tiến trình ý chí, tư tưởng cải sửa nhân quả... nên nghiệp mà phi nghiệp.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo văn bản, nguyên lý để 'dứt nghiệp' hoàn toàn là gì?",
    options: {
      a: "Chạy trốn và đè nén mọi cảm giác đau khổ bằng định lực",
      b: "Chỉ cần làm thật nhiều việc thiện tích đức là đủ",
      c: "Trở về Chân tâm, lặng lẽ thấy rõ tiến trình ngũ uẩn mà không dính mắc",
      d: "Đợi đến khi chết đi thì nghiệp sẽ tự động biến mất",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Khi tâm vô niệm, nhận lại Chân tâm, lặng lẽ thấy rõ tiến trình ngũ uẩn diễn biến như thế nào nhận như thế nấy...'",
      d: "Sai.",
    },
  },
  {
    question: "Trong ví dụ về ông lão ăn xin, hành động của 'Ông chủ thứ 3' với tâm 'Tam luân không tịch' đại diện cho quả vị nào?",
    options: {
      a: "Bồ Tát Thánh",
      b: "Người trong môi trường luân lý",
      c: "Thánh A-la-hán",
      d: "Chư thiên cõi Dục",
    },
    answer: "c",
    explanation: {
      a: "Sai. Bồ tát Thánh là ông chủ thứ 4 (bố thí vật chất và bố thí pháp).",
      b: "Sai.",
      c: "Đúng. 'Ông chủ 3: Lặng lẽ bố thí với tâm “không có người cho, không có vật cho, không có người nhận” (Tam luân không tịch) đây là Thánh A-la-hán.'",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-phap-mon-tinh-do-bai-6-nhan-thuc-ve-nhan-qua-va-nghiep',
  slug: 'bai-6-nhan-thuc-ve-nhan-qua-va-nghiep',
  title: 'Nhận Thức Về Nhân Quả Và Nghiệp',
  type: 'article',
  status: 'published',
  order: 6,
  coverImage: materialUrl('NHẬN THỨC VỀ NHÂN QUẢ VÀ NGHIỆP', 'ẢNH BÌA.png'),
  createdAt: '2026-08-29',
  updatedAt: '2026-08-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'dan-nhap', label: 'I. Dẫn Nhập' },
        { id: 'dinh-nghia', label: 'II. Định Nghĩa Và Mối Quan Hệ' },
        { id: 'gia-tri-than-nguoi', label: 'III. Giá Trị Của Thân Người' },
        { id: 'phan-tich-nhan-qua', label: 'IV. Phân Tích Nhân Quả Qua 15 Hạng Chúng Sanh' },
        { id: 'bat-muoi-nhan-qua', label: 'V. Sự Thật Về "Bất Muội Nhân Quả"' },
        { id: 'tong-ket', label: 'VI. Tổng Kết Bài Giảng' },
        { id: 'thi-du', label: 'VII. Thí Dụ Trực Quan' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/NH%E1%BA%ACN%20TH%E1%BB%A8C%20V%E1%BB%80%20NH%C3%82N%20QU%E1%BA%A2%20V%C3%80%20NGHI%E1%BB%86P/Awakening_to_Karma_(2).pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/w4G_5VCIIW8',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1iR4Kh0IaMaahyuL1LKy8L',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Nhân Quả Và Nghiệp',
    passPercentage: 70,
    questions,
  },
}

export default lesson
