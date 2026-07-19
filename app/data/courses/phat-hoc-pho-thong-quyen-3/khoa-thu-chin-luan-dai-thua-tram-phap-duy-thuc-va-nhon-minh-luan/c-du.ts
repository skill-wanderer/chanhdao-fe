import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">NHƠN MINH LUẬN</p>
      <h2 id="c-du" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">C. DỤ</h2>
    </div>

    <p>Phàm lấy một vật gì mà bên đối phương đã biết và đã công nhận, để so sánh chứng minh với một vật khác mà bên đối phương kia chưa biết, hoặc chưa công nhận thì gọi là "Dụ".</p>
    <p>Thí dụ khi lập cái "Tôn thường còn", thì phải lấy tất cả những vật "thường còn" làm Đồng dụ; trái lại, phải lấy tất cả những vật "vô thường" làm Dị dụ.</p>
    <p>Về Tợ dụ có 10, chia làm 2 loại:</p>

    <h3 id="to-dong-du" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">I. Tợ Đồng dụ có 5</h3>

    <p class="mb-1"><strong>1. Năng lập pháp bất thành</strong></p>
    <p>Phàm cái Nhơn là để thành lập cái Tôn, nên cái Nhơn là "Năng lập pháp" còn cái Tôn là "Sở lập pháp". Cái Dụ này trái ngược Nhơn, nên bị lỗi "bất thành".</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Con ngựa chạy hay.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có bốn vó.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như con rắn hổ ngựa.</td></tr>
      </tbody>
    </table>
    <p>Cái Dụ này hiệp với Tôn (chạy hay), trái với Nhơn (thiếu chân).</p>

    <p class="mb-1"><strong>2. Sở lập pháp bất thành</strong></p>
    <p>Nhơn là Năng lập mà Tôn là Sở lập (bị lập). Cái dụ này trái ngược với Tôn, nên cũng bị lỗi "bất thành".</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Người ta không bay được.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì thiếu hai cánh.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như mây (không cánh, bay được).</td></tr>
      </tbody>
    </table>
    <p>Cái Dụ này hiệp với Nhơn (thiếu cánh) và trái với Tôn (không bay).</p>

    <p class="mb-1"><strong>3. Câu bất thành</strong></p>
    <p>Cái Dụ này trái ngược với Tôn và Nhơn. Bởi lấy Dị dụ làm Đồng dụ, nên bị lỗi "bất thành".</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì tai nghe vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như bàn, ghế.</td></tr>
      </tbody>
    </table>
    <p>Bàn, ghế "vô thường" nên trái với Tôn, và "tai không nghe được", nên trái với Nhơn.</p>

    <p class="mb-1"><strong>4. Vô hiệp</strong></p>
    <p>Cái Dụ này không có lời phối hiệp để kết thúc lại cho dễ hiểu.</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Người ta phải chết.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có sanh vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như chim v.v...</td></tr>
      </tbody>
    </table>
    <p>Đáng lẽ phải nói lời phối hiệp để kết thúc lại như vầy: "Người ta có sanh (Nhơn) phải có chết (Tôn). Phàm vật gì có sanh (Nhơn) phải có chết (Tôn), như chim v.v..." thời người ta mới dễ hiểu. Cái này chỉ nói tắt rằng "như chim"; làm cho người ta không hiểu: Như chim có hai cánh, hay là như chim có mỏ? nên bị lỗi "vô hiệp".</p>

    <p class="mb-1"><strong>5. Đảo hiệp</strong></p>
    <p>Lời thí dụ, kết thúc phối hiệp lại trái ngược. Phàm kết thúc phối hiệp thì phải nói cái Nhơn trước rồi nói cái Tôn sau.</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập (phối hiệp đúng)</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Người ta phải chết.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có sanh vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Phàm vật gì có sanh (Nhơn) thì phải có chết (Tôn) như chim v.v...</td></tr>
      </tbody>
    </table>
    <p>Nay kết thúc lại trái ngược, nghĩa là: Phối hiệp Tôn trước rồi Nhơn sau.</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập (phối hiệp sai - Đảo hiệp)</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Người ta phải chết.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có sanh vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Phàm có chết (Tôn) phải có sanh (Nhơn) như chim v.v...</td></tr>
      </tbody>
    </table>
    <p>Bởi vì nói "có sanh phải có chết" thì ai cũng thấy; còn nói "có chết phải có sanh", người ta khó nhận.</p>

    <h3 id="to-di-du" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">II. Tợ Dị dụ có 5</h3>
    <p>Phàm Dị dụ là dụ bề trái của Tôn và Nhơn, nên phải hoàn toàn trái ngược với Tôn và Nhơn.</p>

    <p class="mb-1"><strong>1. Sở lập pháp bất khiển</strong> - Cái Dị dụ này không trái với Tôn</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng nói thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì vô hình vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như hư không.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như vi trần (vi trần hữu hình và thường còn).</td></tr>
      </tbody>
    </table>
    <p>Vi trần có hình chất mà lại thường còn. Nếu lấy vi trần làm Dị dụ, thì chỉ trái với Nhơn (vô hình) mà không trái với Tôn (thường) nên bị lỗi.</p>

    <p class="mb-1"><strong>2. Năng lập pháp bất khiển</strong> - Cái Dị dụ này không trái với Nhơn</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng nói thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì vô hình vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như hư không.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như điện chớp (vô hình, không thường).</td></tr>
      </tbody>
    </table>
    <p>Lấy điện chớp làm Dị dụ, thì chỉ trái với "Tôn thường còn", mà không trái với "Nhơn vô hình", nên bị lỗi.</p>

    <p class="mb-1"><strong>3. Câu bất khiển</strong> - Cái Dị dụ không trái với Tôn và Nhơn. Lỗi này vì lấy Đồng dụ làm Dị dụ</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Người phải chết.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có sanh vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như cỏ cây.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như loài vật.</td></tr>
      </tbody>
    </table>
    <p>Phàm Dị dụ là phải trái với Tôn và Nhơn. Nay dùng cái Dị dụ này không trái với Tôn và Nhơn nên bị lỗi.</p>

    <p class="mb-1"><strong>4. Bất ly</strong> - Dị dụ không có lời kết thúc để ly biệt Tôn và Nhơn</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng nói thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì không hình chất.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Những gì vô hình đều thường còn, như hư không.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như bàn ghế.</td></tr>
      </tbody>
    </table>
    <p>Về Dị dụ, đáng lẽ cũng phải có lời phối hiệp kết thúc để ly biệt Tôn và Nhơn như vậy: "Phàm những gì vô thường, thì đều có hình chất, như bàn ghế". Nay chỉ nói tắt rằng: "Như bàn ghế" làm cho người ta không hiểu: Như bàn ghế có bốn chân? Hay như bàn ghế có mặt?</p>
    <p>Phải lưu ý: Về Đồng dụ, nếu thiếu lời phối hiệp để kết thúc, thì gọi là "Vô hiệp"; còn bên Dị dụ, nếu thiếu lời phối hiệp để kết thúc, thì gọi là "bất ly".</p>

    <p class="mb-1"><strong>5. Đảo ly</strong> - Lời kết thúc của Dị dụ, để ly biệt Tôn và Nhơn, lại phối hiệp một cách trái ngược</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì vô chất ngại.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như hư không.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Những gì có chất ngại (Nhơn) đều vô thường (Tôn) như bình, bàn v.v...</td></tr>
      </tbody>
    </table>
    <p>Phàm lời phối hiệp để kết thúc của Dị dụ là phải nói Tôn trước rồi Nhơn sau, mới thuận. Như nói: "Những gì vô thường (Tôn) thì đều có chất ngại (Nhơn) như bình, bàn v.v..." Nay phối hiệp ngược lại Nhơn trước Tôn sau, nên bị lỗi "Đảo ly".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-0">Lưu ý: Về Đồng dụ, khi kết thúc, phải nói Nhơn trước rồi nói Tôn sau. Nếu trái lại thì bị lỗi "Đảo hiệp". Về Dị dụ, khi kết thúc, phải nói Tôn trước rồi nói Nhơn sau. Nếu trái lại thì bị lỗi "Đảo ly". 10 lỗi về Tợ Dụ đã giải thích rồi.</p>
    </div>

    <h3 id="phu-bai-on-hoc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Phụ bài học ôn</h3>
    <p>Quý vị nên xét kỹ các lượng sau này: Tôn thuộc về lỗi gì? Nhơn thuộc về lỗi gì? Và Dụ thuộc về lỗi gì?</p>

    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Lượng thứ I</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Người ta phải chết.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có sanh vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Phàm có chết phải có sanh, như chim.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Phàm không sanh thì không chết, như hư không.</td></tr>
      </tbody>
    </table>

    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Lượng thứ II</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng nói thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì vô hình vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như hư không.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như vi trần.</td></tr>
      </tbody>
    </table>

    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Lượng thứ III</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng nói thường còn.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như hư không.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như điện chớp.</td></tr>
      </tbody>
    </table>

    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Lượng thứ IV</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Người ta phải chết.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có sanh vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như cỏ cây.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như loài vật. Hoặc lập nhiều lượng khác.</td></tr>
      </tbody>
    </table>

    <h3 id="loi-ich-hoc-nhon-minh-luan" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Lợi ích học Nhơn Minh Luận</h3>
    <p>Trong các Kinh điển Đại thừa, phần nhiều Phật dạy các đệ tử phải biết Ngũ minh (1. Nội minh, 2. Nhơn minh, v.v...) thời việc hóa đạo mới được nhiều lợi ích. Trong Ngũ minh, Nhơn minh là một.</p>
    <p>Nhờ biết Nhơn minh nên lời nói ít lỗi, luận lý vững vàng, có thể thuyết phục được các tà thuyết đem về chánh đạo.</p>
    <p>Nhờ biết Nhơn minh, mới học nổi được các bộ luận trong Phật giáo. Vì trong các bộ luận ấy phần nhiều dùng Nhơn minh để lập Chánh lý và phá các tà thuyết.</p>
    <p>Tóm lại, Nhơn minh là một môn Luận lý học, vừa lợi ích cho mình và lợi ích cho người.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 text-right dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-0">Sa môn THÍCH THIỆN HOA<br />Sửa lại và viết xong mùa thu năm Mậu Tuất (1958)<br />Chùa PHẬT QUANG (Trà Ôn)</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong Nhơn minh luận, phương pháp dùng một vật đã biết để chứng minh cho một vật chưa biết được gọi là gì?',
    options: {
      a: 'Tôn',
      b: 'Năng lập',
      c: 'Nhơn',
      d: 'Dụ',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tôn là điều cần được lập, chưa phải là phương pháp so sánh.',
      b: 'Sai. Năng lập chỉ vai trò của Nhơn đối với Tôn, không phải là định nghĩa của Dụ.',
      c: 'Sai. Nhơn là nguyên nhân hay lý do, không phải là vật dùng để so sánh chứng minh.',
      d: 'Đúng. Phàm lấy một vật gì mà bên đối phương đã biết và đã công nhận, để so sánh chứng minh với một vật khác mà bên đối phương kia chưa biết, hoặc chưa công nhận thì gọi là "Dụ".',
    },
  },
  {
    question: 'Lỗi \'Năng lập pháp bất thành\' trong Tợ Đồng dụ xảy ra khi ví dụ đưa ra có đặc điểm nào?',
    options: {
      a: 'Đúng với Nhơn nhưng không có lời kết luận',
      b: 'Hiệp với Nhơn nhưng trái với Tôn',
      c: 'Hiệp với Tôn nhưng trái với Nhơn',
      d: 'Trái ngược với cả Tôn và Nhơn',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Thiếu lời kết luận là lỗi Vô hiệp, không phải Năng lập pháp bất thành.',
      b: 'Sai. Đây là mô tả của lỗi Sở lập pháp bất thành.',
      c: 'Đúng. Nhơn là "Năng lập pháp". Lỗi "Năng lập pháp bất thành" xảy ra khi ví dụ hiệp với Tôn nhưng lại trái ngược với Nhơn, như ví dụ con rắn hổ ngựa (chạy hay nhưng thiếu chân).',
      d: 'Sai. Trái ngược cả Tôn và Nhơn là lỗi Câu bất thành.',
    },
  },
  {
    question: 'Khi trình bày phần Đồng dụ, quy tắc phối hiệp đúng về mặt thứ tự là gì?',
    options: {
      a: 'Nói cái Nhơn trước rồi nói cái Tôn sau',
      b: 'Nói cái Dụ trước rồi mới đến Nhơn và Tôn',
      c: 'Nói cái Tôn trước rồi nói cái Nhơn sau',
      d: 'Chỉ cần nêu cái Dụ mà không cần nhắc lại Nhơn hay Tôn',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Về Đồng dụ, khi kết thúc, phải nói Nhơn trước rồi nói Tôn sau. Nếu trái lại thì bị lỗi "Đảo hiệp".',
      b: 'Sai. Đây không phải là thứ tự phối hiệp đúng của Đồng dụ.',
      c: 'Sai. Thứ tự này áp dụng cho phần Dị dụ, không phải Đồng dụ; nếu dùng cho Đồng dụ sẽ bị lỗi "Đảo hiệp".',
      d: 'Sai. Thiếu lời phối hiệp Nhơn và Tôn sẽ bị lỗi "Vô hiệp".',
    },
  },
  {
    question: 'Lỗi \'Sở lập pháp bất khiển\' trong Tợ Dị dụ được hiểu như thế nào?',
    options: {
      a: 'Dị dụ hiệp với cả Nhơn và Tôn',
      b: 'Dị dụ bị đảo ngược thứ tự phối hiệp',
      c: 'Dị dụ không trái với Tôn',
      d: 'Dị dụ không trái với Nhơn',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Đây là mô tả của lỗi Câu bất khiển.',
      b: 'Sai. Đảo ngược thứ tự phối hiệp thuộc lỗi Đảo ly.',
      c: 'Đúng. Tôn là "Sở lập pháp". Nếu Dị dụ đưa ra chỉ trái với Nhơn mà không trái với Tôn (như ví dụ vi trần: vô hình nhưng lại thường còn) thì sẽ bị lỗi "Sở lập pháp bất khiển".',
      d: 'Sai. Đây là mô tả của lỗi Năng lập pháp bất khiển.',
    },
  },
  {
    question: 'Sự khác biệt chính giữa lỗi \'Vô hiệp\' và lỗi \'Bất ly\' là gì?',
    options: {
      a: '\'Vô hiệp\' thuộc về Nhơn, còn \'Bất ly\' thuộc về Tôn',
      b: '\'Vô hiệp\' thuộc về Đồng dụ, còn \'Bất ly\' thuộc về Dị dụ',
      c: '\'Vô hiệp\' là lỗi nội dung, còn \'Bất ly\' là lỗi hình thức',
      d: '\'Vô hiệp\' là nói ngược, còn \'Bất ly\' là nói thiếu',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Cả hai lỗi đều liên quan đến việc thiếu lời phối hiệp kết thúc, không phân theo Nhơn/Tôn riêng biệt.',
      b: 'Đúng. Về Đồng dụ, nếu thiếu lời phối hiệp để kết thúc thì gọi là "Vô hiệp"; còn bên Dị dụ, nếu thiếu lời phối hiệp để kết thúc, thì gọi là "bất ly".',
      c: 'Sai. Cả hai đều là lỗi về hình thức (thiếu lời kết thúc phối hiệp).',
      d: 'Sai. Nói ngược thứ tự là lỗi Đảo hiệp/Đảo ly, không phải Vô hiệp/Bất ly.',
    },
  },
  {
    question: 'Trong phần Dị dụ, quy tắc phối hiệp để ly biệt Tôn và Nhơn đúng là gì?',
    options: {
      a: 'Nói cái Tôn trước rồi nói cái Nhơn sau',
      b: 'Phối hiệp cả Nhơn và Tôn cùng một lúc',
      c: 'Chỉ nêu ví dụ tương đồng với Nhơn',
      d: 'Nói cái Nhơn trước rồi nói cái Tôn sau',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Phàm lời phối hiệp để kết thúc của Dị dụ là phải nói Tôn trước rồi Nhơn sau, mới thuận.',
      b: 'Sai. Đây không phải là quy tắc phối hiệp được nêu ra.',
      c: 'Sai. Dị dụ phải trái ngược hoàn toàn với Tôn và Nhơn, không phải tương đồng.',
      d: 'Sai. Thứ tự này áp dụng cho Đồng dụ; nếu dùng cho Dị dụ sẽ bị lỗi "Đảo ly".',
    },
  },
  {
    question: 'Lỗi \'Câu bất thành\' trong Tợ Đồng dụ xảy ra khi ví dụ có tính chất nào?',
    options: {
      a: 'Có lời kết thúc nhưng sai thứ tự',
      b: 'Chỉ trái với Nhơn nhưng hiệp với Tôn',
      c: 'Vừa trái với Tôn vừa trái với Nhơn',
      d: 'Chỉ trái với Tôn nhưng hiệp với Nhơn',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Đây là mô tả của lỗi Đảo hiệp.',
      b: 'Sai. Đây là mô tả của lỗi Năng lập pháp bất thành.',
      c: 'Đúng. Lỗi "Câu bất thành" xuất hiện do ví dụ (Dụ) trái ngược với cả Tôn và Nhơn, bởi lấy Dị dụ làm Đồng dụ.',
      d: 'Sai. Đây là mô tả của lỗi Sở lập pháp bất thành.',
    },
  },
  {
    question: 'Tại sao việc học Nhơn minh luận lại giúp \'lời nói ít lỗi, luận lý vững vàng\'?',
    options: {
      a: 'Vì nó là phương pháp thiền định giúp tâm trí minh mẫn',
      b: 'Vì nó giúp người học ghi nhớ mọi kinh điển mà không cần suy nghĩ',
      c: 'Vì nó cung cấp phương pháp luận lý học để thiết lập chánh lý và phá tà thuyết',
      d: 'Vì nó là môn học duy nhất mà Phật dạy cho đệ tử',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Nhơn minh không phải là một phương pháp thiền định.',
      b: 'Sai. Nhơn minh là môn luận lý học, không phải phương pháp ghi nhớ.',
      c: 'Đúng. Nhơn minh là một môn Luận lý học, nhờ biết Nhơn minh nên lời nói ít lỗi, luận lý vững vàng, có thể thuyết phục được các tà thuyết đem về chánh đạo và dùng để lập Chánh lý.',
      d: 'Sai. Nhơn minh chỉ là một trong Ngũ minh mà Phật dạy các đệ tử.',
    },
  },
  {
    question: 'Trong ví dụ: Tôn: \'Tiếng thường còn\', Nhơn: \'Vì tai nghe vậy\', Đồng dụ: \'Như bàn ghế\'. Lỗi ở đây là gì?',
    options: {
      a: 'Đảo hiệp',
      b: 'Câu bất thành',
      c: 'Sở lập pháp bất thành',
      d: 'Vô hiệp',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đảo hiệp là lỗi sai thứ tự phối hiệp, không phải trường hợp này.',
      b: 'Đúng. Bàn ghế "vô thường" nên trái với Tôn, và "tai không nghe được" nên trái với Nhơn. Bởi lấy Dị dụ làm Đồng dụ (trái với cả Tôn và Nhơn) nên bị lỗi "Câu bất thành".',
      c: 'Sai. Sở lập pháp bất thành chỉ trái với Tôn mà hiệp với Nhơn, không phải trường hợp này.',
      d: 'Sai. Vô hiệp là thiếu lời kết thúc phối hiệp, không liên quan đến việc trái ngược Tôn và Nhơn.',
    },
  },
  {
    question: '(Đúng/Sai) \'Đảo ly xảy ra khi lời kết thúc của Dị dụ phối hiệp theo thứ tự Nhơn trước, Tôn sau.\'',
    options: {
      a: 'Sai',
      b: 'Đúng',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Nhận định này đúng với định nghĩa lỗi Đảo ly đã nêu.',
      b: 'Đúng. Về Dị dụ, khi kết thúc phải nói Tôn trước rồi nói Nhơn sau. Nếu phối hiệp ngược lại Nhơn trước Tôn sau, thì bị lỗi "Đảo ly".',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-c-du',
  slug: 'c-du',
  title: 'C. Dụ',
  type: 'article',
  status: 'published',
  order: 31,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-19',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/c-du/L%E1%BB%97i_L%E1%BA%ADp_Lu%E1%BA%ADn_Th%C3%AD_D%E1%BB%A5.png',
      readingContent,
      tableOfContents: [
        { id: 'c-du', label: 'C. Dụ' },
        { id: 'to-dong-du', label: 'I. Tợ Đồng dụ có 5', indent: 1 },
        { id: 'to-di-du', label: 'II. Tợ Dị dụ có 5', indent: 1 },
        { id: 'phu-bai-on-hoc', label: 'Phụ bài học ôn', indent: 1 },
        { id: 'loi-ich-hoc-nhon-minh-luan', label: 'Lợi ích học Nhơn Minh Luận', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/c-du/C%E1%BA%A5u_Tr%C3%BAc_Ch%C3%A2n_L%C3%BD.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/wlhDNaTPrK8',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/2jia4O4N1Bqnokbooi3GaB?utm_source=generator&si=909e1c9db5804a37',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - C. Dụ',
    passPercentage: 70,
    questions,
  },
}

export default lesson
