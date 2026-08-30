import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Pháp Môn Tịnh Độ</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mb-8 text-center">
      <h2 class="mt-0 mb-4 text-2xl md:text-3xl font-bold text-primary-700 dark:text-primary-300 uppercase leading-snug">NHỮNG ĐIỂM THIẾT YẾU CỦA NGƯỜI TU TỊNH ĐỘ</h2>
      <div class="h-1 w-20 bg-secondary-400 mx-auto my-4 rounded-full"></div>
      <p class="mb-0 text-lg font-medium opacity-80">Tóm lược bài giảng của</p>
      <p class="mt-1 mb-0 text-xl font-bold text-primary-800 dark:text-primary-200">Cố HT. Thích Giác Khang</p>
    </div>

    <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-8 text-sm italic">
      <strong>Lưu ý:</strong> Bài viết này được biên tập dưới hình thức tóm lược và hệ thống hóa những nội dung chính từ bài giảng "Những Điểm Thiết Yếu Của Người Tu Tịnh Độ" của Cố Hòa thượng Thích Giác Khang. Nội dung nhằm giúp người đọc dễ dàng nắm bắt các ý chính và thuận tiện trong việc học tập, tham khảo; không phải là bản chép nguyên văn toàn bộ bài giảng. Dưới đây là phần tóm lược và hệ thống hóa những kiến thức cốt lõi.
    </div>

    <div class="space-y-8">
      
      <!-- Điểm 1-5 -->
      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">1. Người tu Tịnh Độ rốt cuộc tu để làm gì?</h3>
        <p class="mb-2"><strong>→ Cầu vãng sanh về Cực Lạc của Phật A Di Đà, thoát khỏi luân hồi sinh tử.</strong></p>
        <p>Bài giảng đặt vấn đề sinh tử làm trọng tâm: con người sinh ra rồi già, bệnh, chết; vấn đề quan trọng là sau khi chết sẽ đi đâu và có thể chủ động con đường tái sinh hay không.</p>
        <p class="bg-primary-50 dark:bg-primary-900/20 p-3 rounded mt-2 text-sm border border-primary-100 dark:border-primary-800">
          <strong>Kiến thức cốt lõi:</strong> Tịnh Độ không phải chủ yếu để cầu giàu sang, may mắn, tai qua nạn khỏi hay biến Phật thành một vị thần ban phước.
        </p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">2. Muốn vãng sanh Cực Lạc cần những gì?</h3>
        <p class="mb-2">Đây là trọng tâm xuyên suốt toàn bộ bài giảng. Theo cách trình bày của Hòa thượng, có 2 điều kiện chính: <strong>① Nhất niệm</strong> và <strong>② Phát nguyện</strong>.</p>
        <ul class="list-disc pl-5 mb-2">
          <li><strong>Nhất niệm</strong> = tự lực (điều kiện phía người tu).</li>
          <li><strong>Phát nguyện</strong> = tha lực của Phật A Di Đà (hướng tâm cầu Phật tiếp dẫn).</li>
        </ul>
        <p class="font-bold text-lg text-center text-primary-600 dark:text-primary-400 my-4 bg-primary-50 dark:bg-primary-900/20 py-2 rounded-lg border border-primary-200 dark:border-primary-800">Nhất niệm + Phát nguyện → Vãng sanh</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">3. “Nhất niệm” có phải là niệm Phật thật nhiều không?</h3>
        <p class="mb-2"><strong>Không.</strong> Đây là một điểm rất quan trọng của bài giảng. Hòa thượng nhấn mạnh: Nhất niệm không được quyết định bởi số lượng câu niệm Phật, mà bởi trạng thái của tâm.</p>
        <p>Một người niệm 10.000 câu nhưng tâm liên tục tán loạn thì chưa chắc bằng người niệm ít hơn nhưng tâm chuyên nhất.</p>
        <ul class="list-none pl-4 mt-2 space-y-1 font-medium italic" style="list-style-type: none;">
          <li>- Niệm nhiều ≠ nhất niệm</li>
          <li>- Niệm ít ≠ không có kết quả</li>
        </ul>
        <p class="mt-2 font-semibold">Điều quyết định là tâm có chuyên nhất hay không.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">4. Làm thế nào để đạt được nhất niệm?</h3>
        <p class="mb-3">Bài giảng trình bày quá trình niệm Phật thành 5 giai đoạn, trong đó ba giai đoạn đầu được giảng khá rõ:</p>
        <div class="pl-4 space-y-3">
          <p><strong>Giai đoạn 1:</strong> Niệm Phật từ 1 đến 10. (Ví dụ: Nam Mô A Di Đà Phật – từ 1 đến 10). Nếu tâm chạy đi nghĩ chuyện khác → trở lại số 1.</p>
          <p><strong>Giai đoạn 2:</strong> Niệm Phật không cần đếm. Tâm đã bớt tán loạn nhưng vẫn có thể khởi vọng niệm.</p>
          <p class="bg-secondary-50 dark:bg-secondary-900/20 p-3 rounded border border-secondary-200 dark:border-secondary-800">
            <strong>Giai đoạn 3:</strong> Không cần chủ động niệm mà vẫn có tiếng niệm Phật trong tâm. Đây được Hòa thượng xem là “nhất niệm” thực sự và là mốc rất quan trọng.
          </p>
        </div>
        <p class="text-sm italic mt-2 opacity-80">Hai giai đoạn 4 và 5 được nói đến nhưng không được giảng sâu vì thời gian hạn chế.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">5. Tại sao phải giữ giới khi tu Tịnh Độ?</h3>
        <p>Hòa thượng nói Tịnh Độ cũng lấy Giới – Định – Tuệ làm căn bản, nhưng diễn đạt theo hệ thống <strong>Hành – Tín – Nguyện</strong>:</p>
        <ul class="list-none pl-6 font-medium space-y-1 mt-2" style="list-style-type: none;">
          <li> Hành → Giới</li>
          <li> Tín → Định</li>
          <li> Nguyện → Tuệ</li>
        </ul>
        <p class="mt-2">Và Hành trước hết là thực hành niệm “A Di Đà Phật” hoặc “Nam Mô A Di Đà Phật”.</p>
      </div>

      <!-- Điểm 6-10 -->
      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">6. Người tu Tịnh Độ phải giữ 5 giới như thế nào?</h3>
        <p class="mb-3">Bài giảng không chỉ nói “không làm ác” mà còn nhấn mạnh mặt tích cực:</p>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse mb-4">
            <thead>
              <tr class="bg-primary-100 dark:bg-primary-900/40 border-b-2 border-primary-200 dark:border-primary-800">
                <th class="p-3 font-bold">Không làm (Ác)</th>
                <th class="p-3 font-bold">Đồng thời phải làm (Thiện)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-primary-100 dark:divide-primary-800/50">
              <tr>
                <td class="p-3">Không sát sanh</td>
                <td class="p-3 font-medium text-secondary-600 dark:text-secondary-400">Phóng sanh</td>
              </tr>
              <tr>
                <td class="p-3">Không trộm cắp</td>
                <td class="p-3 font-medium text-secondary-600 dark:text-secondary-400">Bố thí</td>
              </tr>
              <tr>
                <td class="p-3">Không tà dâm</td>
                <td class="p-3 font-medium text-secondary-600 dark:text-secondary-400">Tiết dục</td>
              </tr>
              <tr>
                <td class="p-3">Không nói dối</td>
                <td class="p-3 font-medium text-secondary-600 dark:text-secondary-400">Chân thật, ái ngữ</td>
              </tr>
              <tr>
                <td class="p-3">Không uống rượu</td>
                <td class="p-3 font-medium text-secondary-600 dark:text-secondary-400">Quán xét để phát triển trí tuệ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="font-semibold text-primary-700 dark:text-primary-300">Điểm đặc biệt:</p>
        <p>Hòa thượng nhiều lần nhấn mạnh rằng tu không chỉ nằm ở hành động bên ngoài mà <strong>quan trọng nhất là cái tâm phía sau hành động</strong>. Ví dụ: phóng sanh rất nhiều nhưng làm vì danh lợi, khoe khoang thì không bằng một hành động nhỏ nhưng xuất phát từ tâm chân thành.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">7. Giữ giới giúp ích gì cho việc niệm Phật?</h3>
        <p class="mb-2">Theo bài giảng, giữ giới tốt giúp việc niệm Phật đạt được 4 lợi ích:</p>
        <ol class="list-decimal pl-5 space-y-2">
          <li><strong>Rành rõ:</strong> Niệm câu Phật hiệu đầy đủ, không bị đứt đoạn.</li>
          <li><strong>Tương ưng:</strong> Tâm ở đâu thì câu niệm Phật ở đó. (Miệng niệm Phật nhưng tâm nghĩ chuyện gia đình, tiền bạc… thì chưa tương ưng).</li>
          <li><strong>Chí thiết / chí thành:</strong> Niệm Phật bằng tâm tha thiết. Hòa thượng dùng những hình ảnh rất mạnh để diễn tả: như người nhớ mẹ, người đang ở hoàn cảnh nguy cấp mong được cứu.</li>
          <li><strong>Nhiếp tâm:</strong> Tâm chạy đi đâu thì nhẹ nhàng kéo trở lại câu Phật hiệu.</li>
        </ol>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">8. Khi vọng niệm xuất hiện thì phải làm gì?</h3>
        <p class="mb-2">Đây là một điểm rất đáng chú ý. Hòa thượng không khuyến khích ghét bỏ vọng niệm hay coi vọng niệm như “kẻ thù”.</p>
        <p class="font-semibold text-primary-600 dark:text-primary-400">Khi tâm chạy: Nhận biết → nhẹ nhàng đưa tâm trở lại câu Nam Mô A Di Đà Phật.</p>
        <p>Không cần sân giận với chính vọng niệm của mình. Bài giảng giải theo quan điểm của Hòa thượng rằng cả nhất niệm và tạp niệm đều là những hiện tượng phát hiện từ chân tâm.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">9. Điều gì quan trọng hơn số lượng niệm Phật?</h3>
        <p class="mb-2 font-bold text-lg text-primary-700 dark:text-primary-300">“Bền” – tức tinh tấn.</p>
        <p class="italic">
          “Không niệm được một giờ → niệm 15 phút.<br>
          Không chạy được → đi.<br>
          Không đi được → bò.<br>
          Không bò được → vẫn tiếp tục tiến lên.”
        </p>
        <p class="mt-2 font-semibold">Ý chính là: Không được bỏ cuộc vì vọng niệm nhiều. Tạp niệm nhiều không phải lý do để ngừng tu. Phải kiên trì huân tập.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">10. Tại sao phát nguyện lại quan trọng đến vậy?</h3>
        <ul class="list-disc pl-5 mb-2">
          <li>Niệm Phật mà <strong>không phát nguyện</strong> → chủng tử niệm Phật được giải thích là trở thành thiện nghiệp, hướng về cõi trời.</li>
          <li>Niệm Phật <strong>+ phát nguyện vãng sanh</strong> → hướng đến Cực Lạc.</li>
        </ul>
        <p>Do đó, Hòa thượng nhiều lần nhắc: <strong>“Nhất niệm và phát nguyện.”</strong> Nguyện phải tha thiết, không phải phát nguyện một cách hời hợt.</p>
      </div>

      <!-- Điểm 11-15 -->
      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">11. Phải niệm Phật mới được vãng sanh hay không?</h3>
        <p class="mb-2">Theo phần Hòa thượng giải thích về nguyện thứ 18, 19 và 20:</p>
        <ul class="space-y-2 pl-4 border-l-2 border-primary-200 dark:border-primary-800">
          <li><strong>Nguyện 18:</strong> Tu thuần Tịnh Độ, niệm Phật đạt nhất niệm + phát nguyện → vãng sanh.</li>
          <li><strong>Nguyện 19:</strong> Tu pháp môn khác, nhưng đạt nhất niệm + phát nguyện → vẫn có thể vãng sanh.</li>
          <li><strong>Nguyện 20:</strong> Không nhất thiết tu riêng một pháp môn, mà làm các việc phước thiện, nếu đạt nhất niệm + phát nguyện → vẫn vãng sanh theo cách giải thích của bài giảng.</li>
        </ul>
        <p class="mt-3 font-semibold text-primary-700 dark:text-primary-300">Điểm cốt lõi:</p>
        <p>Không nên chấp cứng rằng chỉ người “niệm Phật theo đúng một hình thức” mới có thể vãng sanh.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">12. Cực Lạc có thật sự ở “hướng Tây” không?</h3>
        <p>Hòa thượng giải thích rằng Đông – Tây chỉ là cách nói giúp người tu tập trung tâm, còn theo cách giải thích Duy Thức trong bài giảng, Cực Lạc không thể hiểu đơn giản bằng không gian Đông–Tây của thế giới Ta Bà.</p>
        <p>Người ở Việt Nam hướng Tây; người ở Mỹ có thể có hướng địa lý khác, nhưng điều đó không quyết định việc vãng sanh. Điều quyết định vẫn là: <strong>Nhất niệm + phát nguyện.</strong></p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">13. Tịnh Độ khác thế giới Ta Bà như thế nào?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/30">
            <p class="font-bold text-red-700 dark:text-red-400 mb-2">Thế giới Uế Độ (Ta Bà)</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Có không gian.</li>
              <li>Có thời gian theo cách chúng ta nhận biết.</li>
              <li>Có sinh – già – bệnh – chết.</li>
              <li>Có thiện – ác.</li>
              <li>Có luân hồi.</li>
            </ul>
          </div>
          <div class="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
            <p class="font-bold text-blue-700 dark:text-blue-400 mb-2">Thế giới Tịnh Độ</p>
            <p>Hòa thượng giải thích theo hệ thống Duy Thức rằng đây là thế giới không gian và nhận thức khác với thế giới Ta Bà, không thể lấy tư tưởng thông thường để giải thích hoàn toàn.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">14. “Linh hồn” trong bài giảng được giải thích như thế nào?</h3>
        <p>Hòa thượng sử dụng hình ảnh radio:</p>
        <ul class="list-none pl-4 space-y-1 mb-2 font-medium" style="list-style-type: none;">
          <li>📻 Thân xác giống như <em>máy radio</em>.</li>
          <li>🔊 Não giống như <em>loa</em>.</li>
          <li>⚡ “Linh hồn” được ví như <em>sóng điện</em>.</li>
        </ul>
        <p>Thân xác thay đổi và mất đi, nhưng phần được Hòa thượng gọi là “linh hồn” vẫn tiếp tục và tìm một thân mới tùy theo nghiệp/chủng tử.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">15. Chủng tử niệm Phật hoạt động như thế nào?</h3>
        <p>Trong A-lại-da thức, Hòa thượng mô tả có nhiều loại chủng tử: Chủng tử ác, Chủng tử thiện, Chủng tử vô ký, Chủng tử niệm Phật.</p>
        <p>Khi niệm Phật nhất tâm, chủng tử niệm Phật được huân tập ngày càng mạnh, từ đó làm yếu thế các chủng tử ác. Vì vậy: Tu là quá trình huân tập liên tục. Đó cũng là lý do tại sao chữ “bền” được nhấn mạnh rất nhiều.</p>
      </div>

      <!-- Điểm 16-20 -->
      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">16. Nếu chỉ đạt giai đoạn 1–2 thì sao?</h3>
        <p>Theo bài giảng: Giai đoạn 1 (niệm Phật có đếm) và Giai đoạn 2 (niệm Phật không đếm) chưa phải nhất niệm hoàn toàn. Do đó, khi lâm chung, Hòa thượng nhấn mạnh vai trò của ban hộ niệm và người nhắc niệm.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">17. Người nhắc niệm lúc lâm chung có vai trò gì?</h3>
        <p>Thời điểm cuối đời rất quan trọng vì tư tưởng cuối cùng/cận tử nghiệp có ảnh hưởng đến hướng đi. Người nhắc niệm phải: <em>Khéo léo, Nhẹ nhàng, Không làm người hấp hối nổi sân, Giúp họ nhớ đến Phật, Hướng tâm họ về Cực Lạc.</em></p>
        <p class="font-bold text-red-600 dark:text-red-400 mt-2">Đặc biệt nhấn mạnh: Không được làm người hấp hối sinh sân hận.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">18. Bài giảng nói gì về hộ niệm?</h3>
        <p>Nếu người tu chưa đạt định lực sâu, bài giảng đề cao vai trò của đại chúng hộ niệm. Một người định lực yếu có thể được trợ duyên bởi đại chúng tu hành và niệm Phật. Hòa thượng gọi đây là sức mạnh của <strong>“phước chúng như hải”</strong>.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">19. Làm sao biết người mất có vãng sanh hay không?</h3>
        <p>Bài giảng đưa ra một số dấu hiệu theo hệ thống giải thích của Hòa thượng:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Dấu hiệu 1:</strong> Phản ứng của người hấp hối khi được nhắc niệm (Mỉm cười → Thượng sanh; Gật đầu → Trung sanh; Chớp mắt → Hạ sanh).</li>
          <li><strong>Dấu hiệu 2:</strong> Quan sát trạng thái thân thể sau khi mất.</li>
          <li><strong>Dấu hiệu 3:</strong> Trình bày cách xem vị trí còn nóng/lạnh trên thân để phân biệt cảnh giới.</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">20. Tại sao bài giảng đặc biệt nhấn mạnh thời điểm lâm chung?</h3>
        <p>Bởi theo lập luận của bài: <strong>Sát-na cuối cùng rất quan trọng.</strong></p>
        <ul class="list-none pl-4 space-y-1" style="list-style-type: none;">
          <li>Nếu cuối đời tâm hướng về Ác → theo hướng ác.</li>
          <li>Hướng về Thiện → hướng về thiện.</li>
          <li><strong>Niệm Phật + phát nguyện → hướng về Cực Lạc.</strong></li>
        </ul>
        <p class="mt-2">Đây là lý do việc giữ giới, huân tập niệm Phật và phát nguyện từ khi còn sống được xem là cực kỳ quan trọng.</p>
      </div>

      <!-- Điểm 21-24 -->
      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">21. Sáu điều lợi khi tu đạt định lực</h3>
        <p>Tổng kết thành 6 chữ/khía cạnh: <strong>Sự – Lý – Nhân – Quả – Tự – Tha</strong>.</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Sự:</strong> Thấy được mặt sự tướng của pháp tu.</li>
          <li><strong>Lý:</strong> Hiểu lý của Tịnh Độ.</li>
          <li><strong>Nhân:</strong> Hiểu nhân mình gieo.</li>
          <li><strong>Quả:</strong> Hiểu quả mình nhận.</li>
          <li><strong>Tự:</strong> Tự lực của chính mình (phải đạt nhất niệm và phát nguyện).</li>
          <li><strong>Tha:</strong> Tha lực của Phật A Di Đà (Phật tiếp dẫn).</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">22. Nhân và quả trong Tịnh Độ được giải thích thế nào?</h3>
        <p>Nguyên tắc: Gieo nhân nào → gặt quả đó.</p>
        <ul class="list-none pl-4 space-y-2 mt-2" style="list-style-type: none;">
          <li>🌿 Nhân: <strong>nhất niệm + phát nguyện</strong> → Quả: <strong>vãng sanh Cực Lạc</strong>.</li>
          <li>☁️ Nhất niệm nhưng <strong>không phát nguyện</strong> → hướng về cõi trời.</li>
          <li>🍂 Tạp niệm + không đủ điều kiện → không đạt được kết quả như mong muốn.</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">23. Phát nguyện phải như thế nào?</h3>
        <p>Đây là điểm cuối cùng nhưng cũng là điểm được nhấn mạnh nhất. <strong>Nguyện phải tha thiết.</strong></p>
        <p>Hòa thượng dùng câu chuyện người tử tù đội chén dầu làm ví dụ: Người tử tù biết nếu làm rơi dầu thì mất mạng, nên toàn bộ tâm đều tập trung vào chén dầu. Người tu Tịnh Độ phải xem việc vãng sanh là việc lớn, phải chuyên tâm và tha thiết như vậy.</p>
      </div>

      <div>
        <h3 class="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 border-l-4 border-secondary-400 pl-3">24. Toàn bộ bài giảng có thể cô đọng thành “10 kiến thức vàng”</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">1. Mục đích</p>
            <p>Cầu vãng sanh Cực Lạc, thoát luân hồi.</p>
          </div>
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">2. Hai điều kiện</p>
            <p>Nhất niệm + Phát nguyện.</p>
          </div>
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">3. Nhất niệm</p>
            <p>Không phải niệm nhiều, mà là tâm chuyên nhất.</p>
          </div>
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">4. Nền tảng</p>
            <p>Giới → giúp tâm thanh tịnh và hỗ trợ niệm Phật.</p>
          </div>
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">5. Năm giới</p>
            <p>Không sát sanh, trộm cắp, tà dâm, nói dối, uống rượu (và làm việc thiện tương ứng).</p>
          </div>
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">6. Phương pháp</p>
            <p>Từ niệm có đếm → niệm không đếm → niệm Phật tự nhiên.</p>
          </div>
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">7. Bí quyết</p>
            <p>Tạp niệm xuất hiện thì nhẹ nhàng kéo tâm trở lại, không chống ghét.</p>
          </div>
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">8. Chìa khóa</p>
            <p>Bền = tinh tấn, liên tục huân tập.</p>
          </div>
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">9. Lâm chung</p>
            <p>Cận tử nghiệp và sự trợ duyên (hộ niệm) cực kỳ quan trọng.</p>
          </div>
          <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
            <p class="font-bold text-primary-700 dark:text-primary-400">10. Tâm nguyện</p>
            <p>Nguyện vãng sanh phải tha thiết, chân thành.</p>
          </div>
        </div>

        <div class="mt-8 text-center bg-secondary-50 dark:bg-secondary-900/20 p-6 rounded-2xl border border-secondary-200 dark:border-secondary-800">
          <p class="italic text-lg mb-4">Theo tinh thần xuyên suốt của bài giảng, có thể cô đọng trục xương sống thành:</p>
          <p class="text-xl md:text-2xl font-bold text-secondary-700 dark:text-secondary-300 uppercase leading-snug">GIỮ GIỚI → NHIẾP TÂM → NHẤT NIỆM → PHÁT NGUYỆN → CẦU VÃNG SANH</p>
          <p class="mt-4 font-bold text-primary-600 dark:text-primary-400 text-2xl">“NHẤT NIỆM + PHÁT NGUYỆN”</p>
        </div>
      </div>

    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Mục đích cốt lõi của người tu theo pháp môn Tịnh Độ theo bài giảng là gì?",
    options: {
      a: "Cầu vãng sanh về cõi Cực Lạc để thoát khỏi luân hồi sinh tử.",
      b: "Cầu mong sự giàu sang và may mắn trong cuộc sống hiện tại.",
      c: "Tu tập để đạt được các thần thông biến hóa.",
      d: "Chỉ để tâm hồn được thanh thản và giảm bớt căng thẳng hàng ngày.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Văn bản nêu rõ mục đích là 'Cầu vãng sanh về Cực Lạc của Phật A Di Đà, thoát khỏi luân hồi sinh tử.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Công thức vãng sanh nào sau đây được Hòa thượng cô đọng trong bài giảng?",
    options: {
      a: "Ăn chay + Giữ giới",
      b: "Tụng kinh + Lạy Phật",
      c: "Niệm Phật nhiều + Làm từ thiện",
      d: "Nhất niệm + Phát nguyện",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Đây là trục xương sống của toàn bộ bài giảng: Nhất niệm (tự lực) + Phát nguyện (tha lực) → Vãng sanh.",
    },
  },
  {
    question: "Theo Hòa thượng, yếu tố nào quyết định trạng thái 'Nhất niệm'?",
    options: {
      a: "Việc sử dụng chuỗi hạt khi niệm Phật.",
      b: "Số lượng câu niệm Phật trong một ngày (ví dụ 10.000 câu).",
      c: "Âm thanh niệm Phật phải thật lớn.",
      d: "Trạng thái tâm chuyên nhất, không tán loạn.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Hòa thượng nhấn mạnh: 'Nhất niệm không được quyết định bởi số lượng câu niệm Phật, mà bởi trạng thái của tâm… Điều quyết định là tâm có chuyên nhất hay không.'",
    },
  },
  {
    question: "Trong 5 giai đoạn niệm Phật, giai đoạn nào được coi là đạt được 'Nhất niệm' thực sự?",
    options: {
      a: "Giai đoạn 5: Giai đoạn cao nhất được giảng sâu nhất trong bài.",
      b: "Giai đoạn 3: Không cần chủ động niệm mà tiếng niệm Phật vẫn tự vang lên trong tâm.",
      c: "Giai đoạn 2: Niệm Phật không cần đếm nhưng vẫn còn vọng niệm.",
      d: "Giai đoạn 1: Niệm Phật có đếm số từ 1 đến 10.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Ở giai đoạn 3: 'Không cần chủ động niệm mà vẫn có tiếng niệm Phật trong tâm. Đây được Hòa thượng xem là “nhất niệm” thực sự và là mốc rất quan trọng.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khi có 'vọng niệm' xuất hiện trong lúc tu tập, thái độ đúng đắn nhất là gì?",
    options: {
      a: "Để mặc vọng niệm dẫn dắt vì chúng cũng là một phần của tâm.",
      b: "Ngừng niệm Phật ngay lập tức để giải quyết vọng niệm.",
      c: "Nhận biết vọng niệm và nhẹ nhàng đưa tâm trở lại câu niệm Phật.",
      d: "Cố gắng xua đuổi và ghét bỏ vọng niệm như kẻ thù.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Bài giảng khuyên: 'Khi tâm chạy: Nhận biết → nhẹ nhàng đưa tâm trở lại câu Nam Mô A Di Đà Phật. Không cần sân giận với chính vọng niệm của mình.'",
      d: "Sai.",
    },
  },
  {
    question: "Nếu một người niệm Phật đạt 'Nhất niệm' nhưng KHÔNG 'Phát nguyện' vãng sanh thì kết quả sẽ ra sao?",
    options: {
      a: "Chủng tử niệm Phật trở thành thiện nghiệp hướng về cõi trời.",
      b: "Sẽ bị rơi vào các cõi ác vì tu sai phương pháp.",
      c: "Vẫn chắc chắn được vãng sanh về Cực Lạc.",
      d: "Không đạt được bất kỳ lợi ích hay phước đức nào.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Niệm Phật mà không phát nguyện → chủng tử niệm Phật được giải thích là trở thành thiện nghiệp, hướng về cõi trời.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Hòa thượng sử dụng hình ảnh 'chiếc radio' để giải thích điều gì về con người?",
    options: {
      a: "Giải thích cấu tạo của bộ não con người.",
      b: "Giải thích cách thức âm thanh được truyền đi trong vũ trụ.",
      c: "Chứng minh rằng con người hoàn toàn máy móc.",
      d: "Giải thích về mối quan hệ giữa thân xác và linh hồn/thần thức.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Hòa thượng ví: 'Thân xác giống như máy radio… Linh hồn được ví như sóng điện. Thân xác thay đổi và mất đi, nhưng phần được Hòa thượng gọi là “linh hồn” vẫn tiếp tục…'",
    },
  },
  {
    question: "Điều gì là quan trọng nhất khi giúp một người đang hấp hối (hộ niệm)?",
    options: {
      a: "Nhắc nhở về tài sản và những việc chưa hoàn thành.",
      b: "Phải mời thật nhiều người đến tụng kinh thật lớn tiếng.",
      c: "Phải khóc thật nhiều để thể hiện tình thương.",
      d: "Không được làm người hấp hối nổi tâm sân hận và giúp họ hướng tâm về Phật.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Người nhắc niệm phải: Khéo léo, nhẹ nhàng… Đặc biệt nhấn mạnh không được làm người hấp hối sinh sân hận.'",
    },
  },
  {
    question: "Theo bài giảng, tại sao việc 'Giữ giới' lại quan trọng đối với việc niệm Phật?",
    options: {
      a: "Để tích lũy đủ phước báu để được giàu sang ở kiếp sau.",
      b: "Giữ giới giúp tâm thanh tịnh, tạo nền tảng để đạt được định lực (nhiếp tâm).",
      c: "Vì đó là quy định bắt buộc của tất cả các tôn giáo.",
      d: "Để được mọi người xung quanh kính trọng.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Việc giữ giới kỹ lưỡng mang lại 4 điều lợi cho hành giả: rành rõ, tương ưng, chí thiết và nhiếp tâm (chú tâm theo dõi câu niệm Phật không để tạp niệm xen vào).",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khái niệm 'Bền' (tinh tấn) được Hòa thượng ví von như thế nào trong quá trình tu tập?",
    options: {
      a: "Chỉ dành cho những người có sức khỏe tốt và trẻ tuổi.",
      b: "Dù không đi được thì bò, không bò được cũng không được bỏ cuộc.",
      c: "Phải tập trung tu tập cực độ trong một thời gian ngắn rồi nghỉ.",
      d: "Chỉ những người chạy nhanh nhất mới đến được đích.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Ý chính của sự 'bền' (tinh tấn) là: 'Không chạy được → đi. Không đi được → bò. Không bò được → vẫn tiếp tục tiến lên. Không được bỏ cuộc vì vọng niệm nhiều.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-phap-mon-tinh-do-bai-5-diem-thiet-yeu',
  slug: 'bai-5-nhung-diem-thiet-yeu-cua-nguoi-tu-tinh-do',
  title: 'Những Điểm Thiết Yếu Của Người Tu Tịnh Độ',
  type: 'article',
  status: 'published',
  order: 5,
  coverImage: materialUrl('NHỮNG ĐIỂM THIẾT YẾU CỦA NGƯỜI TU TỊNH ĐỘ'),
  createdAt: '2026-08-29',
  updatedAt: '2026-08-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/NH%E1%BB%AENG%20%C4%90I%E1%BB%82M%20THI%E1%BA%BET%20Y%E1%BA%BEU%20C%E1%BB%A6A%20NG%C6%AF%E1%BB%9CI%20TU%20T%E1%BB%8ANH%20%C4%90%E1%BB%98/Con_%C4%91%C6%B0%E1%BB%9Dng_T%E1%BB%8Bnh_%C4%91%E1%BB%99_C%E1%BB%B1c_l%E1%BA%A1c.png',
      readingContent,
      tableOfContents: [],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/NH%E1%BB%AENG%20%C4%90I%E1%BB%82M%20THI%E1%BA%BET%20Y%E1%BA%BEU%20C%E1%BB%A6A%20NG%C6%AF%E1%BB%9CI%20TU%20T%E1%BB%8ANH%20%C4%90%E1%BB%98/Tinh_Y%E1%BA%BFu_T%E1%BB%8Bnh_%C4%90%E1%BB%99.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/VOYzYawr4Hg',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/21Agkc6qXtPuxzGjMCTduN',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Những Điểm Thiết Yếu',
    passPercentage: 70,
    questions,
  },
}

export default lesson
