import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Pháp Môn Tịnh Độ</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mb-8 text-center">
      <h2 class="mt-0 mb-4 text-2xl md:text-3xl font-bold text-primary-700 dark:text-primary-300 uppercase leading-snug">MUỐN VÃNG SANH VỀ XỨ CỰC LẠC CỦA PHẬT A DI ĐÀ<br>CÓ MẤY ĐIỀU KIỆN?</h2>
      <div class="h-1 w-20 bg-secondary-400 mx-auto my-4 rounded-full"></div>
      <p class="mb-0 text-xl font-bold text-primary-800 dark:text-primary-200">Thích Giác Khang</p>
    </div>

    <p>Muốn cảm ứng đạo giao với Phật A Di Đà để vãng sanh về xứ Cực lạc cần phải tu cho đúng, nghĩa là niệm Phật phải đạt nhất niệm, muốn được vậy phải có 3 điều kiện:</p>
    <ul class="space-y-2 mt-4 font-medium text-lg">
      <li><strong>TÍN - ĐỊNH - THỂ</strong> (thuộc tâm)</li>
      <li><strong>HẠNH - GIỚI - TƯỚNG</strong> (thuộc thân)</li>
      <li><strong>NGUYỆN - TUỆ - DỤNG</strong> (diệu dụng của tâm)</li>
    </ul>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-1/2 mx-auto"></div>

    <h3 id="tin-la-tin-sau" class="mt-8 text-2xl font-bold text-secondary-700 dark:text-secondary-300 border-l-4 border-secondary-400 pl-4">1. TÍN là TIN SÂU</h3>
    <p class="font-semibold italic text-primary-600 dark:text-primary-400">Thế nào gọi là tin sâu?</p>
    <p>Muốn có tin sâu thì tối thiểu phải đạt từ nhất niệm của nhị thiền trở lên, đến giai đoạn này, tiếng niệm Phật phát ra từ Vô thức tức là Tàng thức còn gọi là A-lại-da thức hay Thức thứ 8. Tin sâu có nhiều mức độ, thông qua 4 cấp: Sự - Lý - Sự lý viên dung - Sự sự vô ngại pháp giới.</p>

    <div class="pl-4 space-y-6 mt-6">
      <div>
        <h4 class="font-bold text-lg text-primary-700 dark:text-primary-300 mb-2">a/ TIN SỰ</h4>
        <p>Là hiện tượng đối với hiện tượng của phàm phu, căn cứ vào thiền định làm minh chứng. Tu thiền định trải qua 5 giai đoạn, lấy câu "Nam mô A Di Đà Phật" làm đề mục để được nhất niệm. Nếu có phát nguyện sẽ vãng sanh về <strong>"Hạ phẩm"</strong> ở cảnh Phàm thánh đồng cư Tịnh độ.</p>
        
        <ul class="space-y-3 mt-4">
          <li class="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg">
            <strong>Sơ thiền:</strong> "ly dục sinh hỷ lạc" niệm Phật bằng ý thức trải qua 2 giai đoạn:
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li><em>Tầm:</em> niệm Phật đếm từ 1 - 10 cho đến khi không còn tạp niệm xen vào.</li>
              <li><em>Tứ:</em> niệm Phật khỏi đếm, theo dõi lắng nghe tiếng niệm Phật.</li>
            </ul>
            <p class="mt-2 mb-0 font-medium">Đạt Sơ thiền nếu có phát nguyện sẽ vãng sanh về <span class="text-secondary-600 dark:text-secondary-400">"Hạ phẩm Hạ sanh"</span>.</p>
          </li>
          <li class="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg">
            <strong>Nhị thiền:</strong> "định sanh hỷ lạc" niệm Phật bằng vô thức. Khi nghĩ đến là lắng nghe tiếng niệm Phật tự phát từ tàng thức, dẫn đến thân an - tâm hỷ.
          </li>
          <li class="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg">
            <strong>Tam thiền:</strong> "ly hỷ diệu lạc" niệm Phật bằng vô thức. Chìm đắm (sâu) vào tiếng niệm Phật, dẫn đến thân lạc - tâm lạc.
            <p class="mt-2 mb-0 font-medium">Đạt nhị thiền, tam thiền nếu có phát nguyện sẽ vãng sanh về <span class="text-secondary-600 dark:text-secondary-400">"Hạ phẩm Trung sanh"</span>.</p>
          </li>
          <li class="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg">
            <strong>Tứ thiền – Tứ không:</strong> "bất lạc bất khổ thọ" (Đại thừa gọi là xả niệm thanh tịnh địa, Tiểu thừa gọi là định bất động hay tịnh định xả). Tâm thức thăng hoa, không dính mắc vào xác thân, thấy tất cả đều là duyên hợp, bấy giờ tiếng niệm Phật tự phát chính là thân-tâm-hoàn cảnh và ngược lại thân-tâm-hoàn cảnh chính là tiếng niệm Phật.
            <p class="mt-2 mb-0 font-medium">Đạt tứ thiền - tứ không nếu có phát nguyện sẽ vãng sanh về <span class="text-secondary-600 dark:text-secondary-400">"Hạ phẩm Thượng sanh"</span>.</p>
          </li>
        </ul>

        <p class="font-semibold mt-4 mb-2 text-primary-700 dark:text-primary-300">Khi tin sâu sẽ có 6 điều lợi:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Tin sự:</strong> có xứ Cực lạc ở phương Tây.</li>
          <li><strong>Tin lý:</strong> tin y báo và chánh báo của xứ Cực lạc phát hiện từ Chân tâm, là báo thân của Đức Phật A Di Đà lập ra để cứu độ chúng sanh.</li>
          <li><strong>Tin tự:</strong> tin chắc chính mình tự tu, chính mình sẽ được nhất niệm thông qua chứng đắc các tầng thiền: sơ thiền, nhị thiền, tam thiền, tứ thiền, tứ không. Từ nhất niệm chuyển sang vô niệm chắc chắn vãng sanh.</li>
          <li><strong>Tin tha:</strong> tin chắc Phật A Di Đà dùng tha lực tiếp dẫn thần thức mình về xứ Cực lạc.</li>
          <li><strong>Tin nhân:</strong> gieo nhân niệm Phật được nhất niệm và nguyện lực sẽ nhận được quả vãng sanh.</li>
          <li><strong>Tin quả:</strong> gieo được nhân trên sẽ nhận được quả vãng sanh về xứ Cực lạc.</li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-lg text-primary-700 dark:text-primary-300 mb-2">b/ TIN LÝ</h4>
        <p>Từ hiện tượng nhận lại bản thể, từ nhất niệm nhận lại vô niệm, từ vọng tâm nhận lại Chân tâm, từ tướng nhận lại tánh của tứ Thánh. Nếu có phát nguyện sẽ vãng sanh về <strong>"Trung phẩm"</strong> ở cảnh Phương tiện hữu dư Tịnh độ.</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Thánh Nhập lưu về <span class="font-medium text-secondary-600 dark:text-secondary-400">"Trung phẩm Hạ sanh"</span>.</li>
          <li>Thánh Nhất vãng lai và Thánh Bất lai hướng về <span class="font-medium text-secondary-600 dark:text-secondary-400">"Trung phẩm Trung sanh"</span>.</li>
          <li>Thánh Bất lai quả và Thánh A-la-hán về <span class="font-medium text-secondary-600 dark:text-secondary-400">"Trung phẩm Thượng sanh"</span>.</li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-lg text-primary-700 dark:text-primary-300 mb-2">c/ TIN SỰ LÝ VIÊN DUNG</h4>
        <p>Từ Bản thể trở ra hiện tượng giới cứu độ chúng sanh của Bồ Thánh thực hiện hạnh đại bi. Nếu có hướng tâm sẽ vãng sanh về <strong>"Thượng phẩm"</strong> ở cảnh Thật báo trang nghiêm Tịnh độ.</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Từ Sơ địa đến Lục địa về <span class="font-medium text-secondary-600 dark:text-secondary-400">"Thượng phẩm Hạ sanh"</span>.</li>
          <li>Từ Thất địa đến Cửu địa về <span class="font-medium text-secondary-600 dark:text-secondary-400">"Thượng phẩm Trung sanh"</span>.</li>
          <li>Từ Thập địa đến Đẳng giác về <span class="font-medium text-secondary-600 dark:text-secondary-400">"Thượng phẩm Thượng sanh"</span>.</li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-lg text-primary-700 dark:text-primary-300 mb-2">d/ TIN SỰ SỰ VÔ NGẠI PHÁP GIỚI</h4>
        <p>Hiện tượng chính là Bản thể, Bản thể chính là hiện tượng. Bản thể và hiện tượng tương ưng vô ngại, đây là thế giới Diệu giác của chư Phật có Pháp thân thường trụ, tự tại lực ứng hóa. Nếu hướng tâm cõi Tịnh độ, các Ngài lập tức ứng hiện trong phẩm <strong>"Tối thượng"</strong> ở cảnh Thường tịch quang Tịnh độ.</p>
      </div>
    </div>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-1/2 mx-auto"></div>

    <h3 id="hanh-la-hanh-chuyen" class="mt-8 text-2xl font-bold text-secondary-700 dark:text-secondary-300 border-l-4 border-secondary-400 pl-4">2. HẠNH là HÀNH CHUYÊN</h3>
    <p class="font-semibold italic text-primary-600 dark:text-primary-400">Thế nào gọi là hành chuyên?</p>
    <p>Là thực hành phải chuyên cần. Trước hết cần giữ giới kỹ lưỡng, tối thiểu là 5 giới không làm 5 điều ác phải làm 5 điều lành:</p>
    <ul class="space-y-1 pl-5 list-decimal mb-4">
      <li>Không sát sanh mà còn phải phóng sanh.</li>
      <li>Không trộm cắp mà còn phải bố thí.</li>
      <li>Không tà dâm mà còn phải tiết dục.</li>
      <li>Không nói dối mà còn phải nói lời chân thật, dịu dàng.</li>
      <li>Không dùng các chất say như: cờ bạc, rượu, ma túy,... mà còn phải tâm thức tỉnh táo quán vô thường - vô ngã - khổ đau.</li>
    </ul>

    <p class="font-semibold text-primary-700 dark:text-primary-300 mb-2">Giữ giới kỹ lưỡng sẽ có 4 điều lợi:</p>
    <ol class="space-y-2 pl-5 list-decimal">
      <li><strong>Rành rõ:</strong> rành là từng chữ, từng câu rành rọt không lẫn lộn. Rõ là tự mình nhận lấy tiếng niệm Phật rõ ràng.</li>
      <li><strong>Tương ưng:</strong> tiếng niệm Phật ở đâu thì tâm đó, tâm ở đâu thì tiếng niệm Phật ở đó, tiếng và tâm hòa hiệp với nhau.</li>
      <li><strong>Chí thiết:</strong> nhất tâm tha thiết luôn nhớ - nghĩ - tưởng đến Phật A Di Đà.</li>
      <li><strong>Nhiếp tâm:</strong> chú tâm theo dõi tiếng niệm Phật không cho tạp niệm xen vào, nếu xao lãng thâu lại tức khắc.</li>
    </ol>
    <p class="mt-4 bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border border-secondary-200 dark:border-secondary-800">
      Hành có tinh chuyên thì Tín mới sâu và tin có sâu thì hành chuyên thêm. Vì vậy tin sâu và hành chuyên luôn luôn bổ sung, tương hỗ cho nhau.
    </p>

    <div class="my-10 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-1/2 mx-auto"></div>

    <h3 id="nguyen-phai-nguyen-thiet" class="mt-8 text-2xl font-bold text-secondary-700 dark:text-secondary-300 border-l-4 border-secondary-400 pl-4">3. NGUYỆN phải NGUYỆN THIẾT</h3>
    <p>Nguyện không cần điều kiện, đây là yếu tố quyết định cho vãng sanh. Nguyện thuộc diệu dụng của tâm tức trí tuệ.</p>
    <p class="font-semibold italic text-primary-600 dark:text-primary-400">Như thế nào gọi là nguyện thiết?</p>
    <p>Nguyện thiết là trong nguyện phải có tin sâu và hành chuyên. Vì hành có chuyên thì tin sâu làm cho thức trong sáng quán vô thường - vô ngã - khổ đau để hiểu rõ mà phân tích, so sánh cho được sự khác nhau giữa cõi Uế độ với cõi Cực lạc:</p>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Cõi Uế độ sinh diệt chu kỳ đưa đến 8 khổ đau.</li>
      <li>Cõi Cực lạc sinh diệt sát-na được 8 cái vui.</li>
    </ul>
    <p class="mt-2">Từ đó yểm ly cõi Uế độ mà hân nguyện cõi Tịnh độ.</p>

  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo tài liệu, ba điều kiện cốt yếu để cảm ứng đạo giao với Phật A Di Đà và vãng sanh về xứ Cực lạc là gì?",
    options: {
      a: "Tín - Hạnh - Nguyện",
      b: "Từ - Bi - Hỷ - Xả",
      c: "Giới - Định - Tuệ",
      d: "Văn - Tư - Tu",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Văn bản nêu rõ: 'muốn được vậy phải có 3 điều kiện: TÍN - ĐỊNH - THỂ... HẠNH - GIỚI - TƯỚNG... NGUYỆN - TUỆ - DỤNG'. Tức là Tín, Hạnh, Nguyện.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Giai đoạn 'Tứ' trong Sơ thiền khi niệm Phật được mô tả như thế nào?",
    options: {
      a: "Niệm Phật không cần đếm, chỉ theo dõi lắng nghe tiếng niệm.",
      b: "Niệm Phật đếm từ 1 đến 10 để tránh tạp niệm.",
      c: "Thân tâm đạt đến trạng thái 'ly hỷ diệu lạc'.",
      d: "Niệm Phật bằng vô thức từ tàng thức phát ra.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Tứ: niệm Phật khỏi đếm, theo dõi lắng nghe tiếng niệm Phật.'",
      b: "Sai. Đây là Tầm.",
      c: "Sai. Đây là Tam thiền.",
      d: "Sai. Đây là Nhị thiền.",
    },
  },
  {
    question: "Hành giả đạt đến trình độ Nhị thiền hoặc Tam thiền khi niệm Phật, nếu phát nguyện sẽ vãng sanh về phẩm vị nào?",
    options: {
      a: "Hạ phẩm Hạ sanh",
      b: "Hạ phẩm Thượng sanh",
      c: "Hạ phẩm Trung sanh",
      d: "Trung phẩm Hạ sanh",
    },
    answer: "c",
    explanation: {
      a: "Sai. (Sơ thiền)",
      b: "Sai. (Tứ thiền - Tứ không)",
      c: "Đúng. 'Đạt nhị thiền, tam thiền nếu có phát nguyện sẽ vãng sanh về Hạ phẩm Trung sanh.'",
      d: "Sai.",
    },
  },
  {
    question: "Trong 6 điều lợi của 'Tin sâu', 'Tin Tự' có ý nghĩa là gì?",
    options: {
      a: "Tin rằng y báo và chánh báo Cực lạc phát hiện từ Chân tâm.",
      b: "Tin chắc chính mình tự tu, tự đạt nhất niệm qua các tầng thiền.",
      c: "Tin chắc Phật A Di Đà sẽ dùng tha lực tiếp dẫn mình.",
      d: "Tin chắc có xứ Cực lạc ở phương Tây.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là Tin lý.",
      b: "Đúng. 'Tin tự: tin chắc chính mình tự tu, chính mình sẽ được nhất niệm thông qua chứng đắc các tầng thiền...'",
      c: "Sai. Đây là Tin tha.",
      d: "Sai. Đây là Tin sự.",
    },
  },
  {
    question: "Hàng Thánh Nhất vãng lai và Thánh Bất lai hướng về sẽ vãng sanh vào phẩm vị nào?",
    options: {
      a: "Thượng phẩm Hạ sanh",
      b: "Trung phẩm Thượng sanh",
      c: "Trung phẩm Hạ sanh",
      d: "Trung phẩm Trung sanh",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. 'Thánh Nhất vãng lai và Thánh Bất lai hướng về Trung phẩm Trung sanh.'",
    },
  },
  {
    question: "Điều kiện 'HẠNH' (Hành chuyên) thuộc về phương diện nào của con người?",
    options: {
      a: "Trí tuệ",
      b: "Tâm",
      c: "Thân",
      d: "Khẩu",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai. Tâm thuộc về Tín.",
      c: "Đúng. 'HẠNH - GIỚI - TƯỚNG (thuộc thân)'.",
      d: "Sai.",
    },
  },
  {
    question: "Lợi ích 'Tương ưng' trong việc giữ giới kỹ lưỡng khi niệm Phật được hiểu như thế nào?",
    options: {
      a: "Dùng trí tuệ để phân tích sự khác nhau giữa hai cõi.",
      b: "Tiếng niệm và tâm hòa hiệp, tiếng ở đâu tâm ở đó.",
      c: "Luôn nhớ - nghĩ - tưởng tha thiết đến Phật A Di Đà.",
      d: "Từng chữ, từng câu rành rọt không lẫn lộn.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. 'Tương ưng: tiếng niệm Phật ở đâu thì tâm đó, tâm ở đâu thì tiếng niệm Phật ở đó, tiếng và tâm hòa hiệp với nhau.'",
      c: "Sai. Đây là Chí thiết.",
      d: "Sai. Đây là Rành rõ.",
    },
  },
  {
    question: "Tại sao 'Nguyện thiết' được coi là diệu dụng của tâm (trí tuệ)?",
    options: {
      a: "Vì nguyện là sự tin tưởng mù quáng vào thần linh.",
      b: "Vì nhờ có trí tuệ mới phân tích được sự khổ của cõi Uế và sự vui của cõi Lạc để yểm ly - hân nguyện.",
      c: "Vì nguyện giúp hành giả đắc được thần thông biến hóa.",
      d: "Vì nó yêu cầu sự kiên trì tuyệt đối của thân thể.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Văn bản giải thích: 'tin sâu làm cho thức trong sáng quán vô thường - vô ngã - khổ đau để hiểu rõ mà phân tích, so sánh cho được sự khác nhau giữa cõi Uế độ với cõi Cực lạc... từ đó yểm ly cõi Uế độ mà hân nguyện cõi Tịnh độ.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Trạng thái 'Tứ thiền – Tứ không' được gọi là gì trong giáo lý Đại thừa?",
    options: {
      a: "Xả niệm thanh tịnh địa",
      b: "Định bất động",
      c: "Ly dục sinh hỷ lạc",
      d: "Định sanh hỷ lạc",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Đại thừa gọi là xả niệm thanh tịnh địa'.",
      b: "Sai. Đây là tên gọi theo Tiểu thừa.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Mối quan hệ giữa 'Tin sâu' (Tín) và 'Hành chuyên' (Hạnh) là gì?",
    options: {
      a: "Hành chuyên thì Tín mới sâu, và Tín sâu thì Hành càng chuyên thêm.",
      b: "Hai điều này độc lập và không ảnh hưởng đến nhau.",
      c: "Tin sâu là kết quả cuối cùng, hành chuyên chỉ là bước đệm.",
      d: "Chỉ cần Tin sâu là đủ, không cần thiết phải Hành chuyên.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Hành có tinh chuyên thì Tín mới sâu và tin có sâu thì hành chuyên thêm. Vì vậy tin sâu và hành chuyên luôn luôn bổ sung, tương hỗ cho nhau.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-phap-mon-tinh-do-bai-3-dieu-kien-vang-sanh',
  slug: 'bai-3-dieu-kien-vang-sanh-ve-coi-cuc-lac',
  title: 'Muốn Vãng Sanh Về Xứ Cực Lạc Của Phật A Di Đà Có Mấy Điều Kiện?',
  type: 'article',
  status: 'published',
  order: 3,
  coverImage: materialUrl('MUỐN VÃNG SANH VỀ XỨ CỰC LẠC CỦA PHẬT A DI ĐÀ CÓ MẤY ĐIỀU KIỆN'),
  createdAt: '2026-08-29',
  updatedAt: '2026-08-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/MU%E1%BB%90N%20V%C3%83NG%20SANH%20V%E1%BB%80%20X%E1%BB%A8%20C%E1%BB%B0C%20L%E1%BA%A0C%20C%E1%BB%A6A%20PH%E1%BA%ACT%20A%20DI%20%C4%90%C3%80%20C%C3%93%20M%E1%BA%A4Y%20%C4%90I%E1%BB%80U%20KI%E1%BB%86N/Ba_%C4%90i%E1%BB%81u_Ki%E1%BB%87n_V%C3%A3ng_Sanh.png',
      readingContent,
      tableOfContents: [
        { id: 'tin-la-tin-sau', label: '1. Tín là tin sâu' },
        { id: 'hanh-la-hanh-chuyen', label: '2. Hạnh là hành chuyên' },
        { id: 'nguyen-phai-nguyen-thiet', label: '3. Nguyện phải nguyện thiết' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/MU%E1%BB%90N%20V%C3%83NG%20SANH%20V%E1%BB%80%20X%E1%BB%A8%20C%E1%BB%B0C%20L%E1%BA%A0C%20C%E1%BB%A6A%20PH%E1%BA%ACT%20A%20DI%20%C4%90%C3%80%20C%C3%93%20M%E1%BA%A4Y%20%C4%90I%E1%BB%80U%20KI%E1%BB%86N/The_Pure_Land_Path.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/zfzUtS38GgI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4HBp8KvuTjTZ3403fykgC2',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Điều Kiện Vãng Sanh',
    passPercentage: 70,
    questions,
  },
}

export default lesson