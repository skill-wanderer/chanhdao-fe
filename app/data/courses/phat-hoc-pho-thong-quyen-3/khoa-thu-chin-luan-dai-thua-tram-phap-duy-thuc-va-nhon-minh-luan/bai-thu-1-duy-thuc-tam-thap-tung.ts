import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP BA</p>
      <p class="mb-2 font-semibold">DUY THỨC TAM THẬP TỤNG DỊ GIẢI</p>
      <h2 id="bai-thu-nhat-duy-thuc-tam-thap-tung-di-giai" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ NHẤT - DUY THỨC TAM THẬP TỤNG DỊ GIẢI</h2>
      <p class="mb-0 italic">Giải đề mục, phần vấn đáp về Ngã - Pháp và ba loại thức năng biến.</p>
    </div>

    <h3 id="giai-de-muc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">GIẢI ĐỀ MỤC</h3>

    <h4 id="duy-thuc" class="text-lg font-semibold">"Duy thức"</h4>
    <p><strong>Thức</strong> là phân biệt; có hai phần:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Sở phân biệt</strong> (bị biết) gọi là cảnh, hoặc gọi là sự vật, tức là núi, sông, ruộng, vườn...</li>
      <li><strong>Năng phân biệt</strong> (cái biết) gọi là thức, tức là cái tác dụng phân biệt hay nhận biết các cảnh vật.</li>
    </ol>
    <p>Cảnh vật có hình tướng, thức không hình tướng. Người đời đều nói hai vật này (vật chất, tinh thần) riêng khác; thật ra năng phân biệt (biết) và sở phân biệt (bị biết) cũng đều là thức; ngoài thức ra không có vật gì khác. Bởi thế nên gọi là Duy thức.</p>
    <p>Người đời vì chấp tất cả sự vật là thật có, nên không tin lý duy thức. Nay môn học này, giải thích cho người biết: tất cả sự vật, chỉ có thức biến hiện, không phải thật có, nên gọi là "Duy thức học".</p>

    <h4 id="tam-thap-tung" class="text-lg font-semibold">"Tam thập tụng"</h4>
    <p>Theo lệ thường, trong kinh Phật, mỗi một bài là bốn câu; nay dùng 30 bài tụng, để giải thích nghĩa mầu nhiệm của Duy thức, cho nên quyển luận này gọi là "Duy thức tam thập tụng".</p>

    <h4 id="di-giai" class="text-lg font-semibold">"Dị giải"</h4>
    <p>Nguyên văn bổn luận này có 30 bài tụng, do ngài Bồ Tát Thiên Thân tạo ra. Văn tự đã khó mà nghĩa lý lại thâm, người học rất khó hiểu. Nay tôi giải thích bổn luận này, dùng những lời lẽ gọn gàng dễ hiểu, nên gọi là "Dị giải".</p>

    <h3 id="chanh-van" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN</h3>
    <p><strong>Hỏi:</strong> Nếu chỉ có thức, tại sao người thế gian và trong Phật giáo, đều nói có Ngã và Pháp?</p>

    <h3 id="luoc-giai-cau-hoi" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">LƯỢC GIẢI</h3>
    <p>Người đời chấp tất cả sự vật, như núi, sông, cỏ, cây... đều thật có. Nay lại nghe nói: "Các cảnh vật ấy đều do thức biến hiện, chỉ là giả tướng, chớ không phải thật có", thì họ quyết định không tin. Bởi thế nên Luận chủ đề xướng Duy thức học, đặt ra những lời vấn đáp, để giải thích các điều nghi ngờ đó.</p>
    <p>Có người hỏi: Nếu chỉ có thức mà thôi, thì tại làm sao, người thế gian và trong Phật giáo đều nói có Ngã, Pháp? Nếu lý Duy thức đúng, thì lời người thế gian và Phật giáo nói sai, còn nếu thế gian và Phật giáo nói đúng, thì lý Duy thức phải sai. Hai thuyết rất mâu thuẫn nhau, vậy bên nào nói đúng lý?</p>
    <p>Câu hỏi này rất khó, nếu không phải bậc Bồ Tát trí huệ vô biên, thì không dễ gì trả lời được.</p>

    <h4 id="nghia-nga-phap" class="text-lg font-semibold">"Ngã pháp" nghĩa là gì?</h4>
    <p><strong>"Ngã"</strong> là chủ tể (tự chủ, có quyền sắp đặt). Như người đời chấp thân này là "ta"; có quyền tự chủ, tự tại và sai khiến sắp đặt các việc, như thế gọi là "Ngã".</p>
    <p><strong>"Pháp"</strong> là khuôn phép và giữ gìn; nghĩa là tự nó giữ gìn bản chất của nó, làm cho người xem đến, thì biết là vật gì. (Nhậm trì tự tánh, quỹ sanh vật giải).</p>
    <p>Như cái bàn ở trước mặt đây, tự nó giữ gìn bản chất cứng nhắc, hình dáng dài rộng hoặc cao thấp và có công năng chứa vật. Một khi người xem đến thì biết là cái bàn. Như thế gọi là "pháp".</p>
    <p>Người thế gian chấp ngã, như chấp thân mạng loài hữu tình, đều có quyền tự chủ, tự tại và sai khiến sắp xếp mọi việc.</p>
    <p>Người thế gian chấp pháp, không ngoài ba điểm: Thật (bản chất), Đức (hình dáng), Năng (công dụng). Như họ chấp nhà cửa cỏ cây, v.v... là thật có (thật), hình dáng tốt hay xấu (đức) và công dụng của nó (nghiệp); mỗi món đều gọi là một pháp.</p>
    <p>Trong Phật giáo nói ngã, như nói "Tu Đà hoàn, Tu Đà hàm, A Na Hàm, A La Hán, v.v...". Mỗi tên đều hàm ẩn ý nghĩa: ta đã chứng, ta được tự chủ và tự tại.</p>
    <p>Trong Phật giáo nói Pháp, như nói "5 uẩn, 12 xứ, 18 giới, v.v...". Mỗi pháp đều tự giữ gìn bản chất (tự tánh) và hình dáng của nó; khi người xem đến, có thể biết đó là vật gì.</p>
    <p>Nhưng chúng ta phải chú ý ở điểm này: Trong Phật giáo nói "ngã", không đồng với người thế gian "chấp ngã". Như kinh Kim Cang nói: "Gọi là Tu Đà Hoàn (Nhập lưu) mà không có Tu Đà Hoàn (vô sở nhập) thế mới gọi là Tu Đà Hoàn, v.v..."</p>
    <p>Đem đoạn kinh này để chứng minh, thì chúng ta thấy trong kinh tuy nói "Ngã", song chỉ có giả danh mà thôi, không phải như thế gian chấp có thật Ngã.</p>

    <h3 id="dap-gia-thuyet-nga-phap" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">ĐÁP: DO GIẢ THUYẾT NGÃ PHÁP</h3>

    <h4 id="nguyen-van-chu-han-ba-cau" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Tụng viết:</strong></p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Do giả thuyết Ngã Pháp</p>
        <p>Hữu chủng chủng tướng chuyển</p>
        <p>Bỉ y thức sở biến.</p>
      </div>
    </div>

    <h4 id="dich-nghia-ba-cau" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói ba câu tụng để trả lời rằng: Thế gian và Thánh giáo đều giả nói có Ngã, Pháp; bởi vì các tướng Ngã, Pháp kia đều do thức sanh ra vậy.</p>

    <h4 id="luoc-giai-ba-cau" class="text-lg font-semibold">Lược giải</h4>
    <p>Đại ý ba câu tụng này nói: Do thế gian và Thánh giáo đều giả nói có Ngã, Pháp, rồi từ trên thức của người nghe tự biến ra hình tướng của Ngã, Pháp.</p>

    <h3 id="tuong-nga-phap-the-gian" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">NÓI VỀ TƯỚNG NGÃ, PHÁP CỦA THẾ GIAN</h3>
    <p>Như có người đang ngồi yên trong nhà tối, bỗng nghe người nói: "Ở góc nhà kia có con quỷ". Lúc bấy giờ trên thức của họ liền biến ra con quỷ, tóc tai xù xụ, hình tướng rất ghê sợ, muốn chụp bắt người. Thật ra không có quỷ, nhưng trên thức người nghe lại biến ra quỷ. Đây là tướng Ngã của thế gian, do thức biến vậy.</p>
    <p>Có người ngồi trong nhà, nghe nói: "Tuyết rơi ngoài sân". Lúc bấy giờ trên thức họ tự biến ra hình tướng tuyết bay trắng xoá. Thật ra không có tuyết, nhưng trên thức của người nghe lại biến ra có hình tướng của tuyết. Đây là tướng Pháp của thế gian, do thức biến ra vậy.</p>

    <h3 id="tuong-nga-phap-thanh-giao" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">NÓI VỀ TƯỚNG NGÃ, PHÁP TRONG THÁNH GIÁO</h3>
    <p>Như có người nghe trong kinh nói: "Phật có 32 tướng". Rồi từ trên thức của họ tự biến ra tướng Phật tốt đẹp lạ thường. Đây là tướng "Ngã" trong Thánh giáo, do thức biến ra.</p>
    <p>Hoặc nghe nói: "Cõi Phật có 7 món báu trang nghiêm"; rồi từ trên thức của họ biến ra cảnh Tịnh độ. Đây là tướng "Pháp" trong Thánh giáo, do thức biến hiện.</p>
    <p>Ngoại nhân đã nghe Luận Chủ nói: "Các tướng Ngã, Pháp đều do thức biến hiện", thế tất nhiên họ phải nghi rằng:</p>
    <blockquote>
      <p>Hình tướng của thức thế nào?<br>Và có bao nhiêu chủng loại?</p>
    </blockquote>
    <p>Vì đoán tâm lý của ngoại nhân, nên Luận chủ nói tiếp ba câu tụng, để trả lời rằng:</p>

    <h3 id="thuc-nang-bien-co-ba-loai" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">THỨC NĂNG BIẾN CÓ BA LOẠI</h3>

    <h4 id="nguyen-van-chu-han-ba-thuc" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thử năng biến duy tam</p>
        <p>Vị: Dị thục, Tư lương</p>
        <p>Cập Liễu biệt cảnh thức</p>
      </div>
    </div>

    <h4 id="dich-nghia-ba-thuc" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Thức Năng biến này có 3 loại:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Dị thục thức (thức thứ Tám)</li>
      <li>Tư lương thức (thức thứ Bảy)</li>
      <li>Liễu biệt cảnh thức (6 thức trước).</li>
    </ol>

    <h4 id="luoc-giai-ba-thuc" class="text-lg font-semibold">Lược giải</h4>
    <p>Đoạn trên nói: "Do thức biến ra các tướng Ngã, Pháp". Đã có cảnh sở biến (bị biến) tất nhiên phải có thức năng biến.</p>
    <p>Đoạn này nói về thức năng biến. Thức năng biến có ba loại:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Dị thục thức, tức là thức thứ Tám.</li>
      <li>Tư lương thức, tức là thức thứ Bảy.</li>
      <li>Liễu biệt cảnh thức, tức là 6 thức trước (từ nhãn thức cho đến ý thức).</li>
    </ul>
    <p>Ba loại thức Năng biến này, nếu phân tích ra thì có tám thức (Nhãn thức, Nhĩ thức, Tỷ thức, Thiệt thức, Thân thức, Ý thức, Mạt na thức và A lại da thức).</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Trong khái niệm 'Duy thức', phần 'Năng phân biệt' được hiểu là gì?",
    "options": {
      "a": "Sự kết hợp giữa vật chất và tinh thần.",
      "b": "Các sự vật khách quan như núi sông, ruộng vườn.",
      "c": "Tác dụng phân biệt hay nhận biết các cảnh vật.",
      "d": "Hình tướng cụ thể của các sự vật trong thế gian."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Năng phân biệt không phải là sự kết hợp vật chất và tinh thần [1].",
      "b": "Sai. Các sự vật khách quan (núi, sông...) được gọi là 'Sở phân biệt' (cảnh bị biết) [1].",
      "c": "Đúng. Năng phân biệt (cái biết) gọi là thức, tức là tác dụng phân biệt hay nhận biết các cảnh vật [1].",
      "d": "Sai. Năng phân biệt (thức) không có hình tướng [1]."
    }
  },
  {
    "question": "Tại sao môn học này được gọi là 'Duy thức học'?",
    "options": {
      "a": "Vì nó là môn học duy nhất giải thích về các hiện tượng tự nhiên.",
      "b": "Vì nó chỉ tập trung nghiên cứu về sáu giác quan của con người.",
      "c": "Vì nó giải thích rằng mọi sự vật đều do thức biến hiện, không thật có ngoài thức.",
      "d": "Vì nó chứng minh rằng vật chất tồn tại độc lập với tinh thần."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Tài liệu không cho rằng đây là môn duy nhất giải thích hiện tượng tự nhiên [1].",
      "b": "Sai. Môn học này giải thích sự vật dựa trên thức nói chung, không chỉ giới hạn ở sáu giác quan [1, 2].",
      "c": "Đúng. Môn học giải thích cho người biết: tất cả sự vật, chỉ có thức biến hiện, không phải thật có, nên gọi là 'Duy thức học' [1].",
      "d": "Sai. Duy thức học chỉ ra rằng ngoài thức ra không có vật gì khác, không chứng minh vật chất độc lập [1]."
    }
  },
  {
    "question": "Theo văn bản, thế nào được gọi là 'Pháp'?",
    "options": {
      "a": "Là những quy định đạo đức trong xã hội loài người.",
      "b": "Là cái có quyền tự chủ, tự tại và sai khiến mọi việc.",
      "c": "Là khuôn phép và sự giữ gìn bản chất để người khác nhận biết được.",
      "d": "Là trạng thái tâm lý khi không còn phân biệt đối tượng."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Văn bản không định nghĩa Pháp là quy định đạo đức [3].",
      "b": "Sai. Cái có quyền tự chủ, tự tại và sai khiến mọi việc là định nghĩa của 'Ngã' [3].",
      "c": "Đúng. 'Pháp' là khuôn phép và giữ gìn; nghĩa là tự nó giữ gìn bản chất của nó, làm cho người xem đến thì biết là vật gì [3].",
      "d": "Sai. Đây không phải là định nghĩa của Pháp theo Duy thức học [3]."
    }
  },
  {
    "question": "Sự khác biệt căn bản giữa cách nói 'Ngã' trong Phật giáo và sự 'chấp ngã' của thế gian là gì?",
    "options": {
      "a": "Trong Phật giáo, 'Ngã' chỉ là giả danh, không phải thật ngã.",
      "b": "Không có sự khác biệt vì cả hai đều dùng chung một thuật ngữ.",
      "c": "Trong Phật giáo, 'Ngã' được hiểu là một linh hồn bất tử.",
      "d": "Thế gian cho rằng 'Ngã' chỉ là tên gọi tạm thời."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Trong kinh Phật tuy nói 'Ngã', song chỉ có giả danh mà thôi, không phải như thế gian chấp có thật Ngã [3].",
      "b": "Sai. Dù dùng chung từ 'Ngã' nhưng bản chất hoàn toàn khác biệt [3].",
      "c": "Sai. Văn bản không đề cập 'Ngã' trong Phật giáo là linh hồn bất tử [3].",
      "d": "Sai. Người thế gian chấp Ngã là có quyền tự chủ, tự tại, sai khiến mọi việc (thật Ngã) chứ không phải tạm thời [3]."
    }
  },
  {
    "question": "Ví dụ về người nghe nói có 'quỷ' trong nhà tối minh họa cho điều gì?",
    "options": {
      "a": "Tướng 'Ngã' của thế gian do thức biến hiện.",
      "b": "Khả năng ngoại cảm của con người trong điều kiện thiếu ánh sáng.",
      "c": "Sự sợ hãi bản năng của con người trước cái chết.",
      "d": "Sự tồn tại khách quan của các thực thể tâm linh."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Sự việc nghe nói có quỷ rồi trong thức biến ra hình quỷ ghê rợn là minh họa cho tướng Ngã của thế gian, do thức biến vậy [4].",
      "b": "Sai. Văn bản không nhắc đến khả năng ngoại cảm [4].",
      "c": "Sai. Không phải ví dụ minh họa về sợ hãi bản năng trước cái chết [4].",
      "d": "Sai. Ngược lại, ví dụ cho thấy quỷ không thật có (không khách quan) mà do thức của người nghe biến ra [4]."
    }
  },
  {
    "question": "Thức 'Năng biến' được chia thành bao nhiêu loại chính theo bài tụng?",
    "options": {
      "a": "2 loại: Năng phân biệt và Sở phân biệt.",
      "b": "8 loại: Từ Nhãn thức đến A lại da thức.",
      "c": "30 loại tương ứng với 30 bài tụng.",
      "d": "3 loại: Dị thục, Tư lương và Liễu biệt cảnh thức."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Năng phân biệt và Sở phân biệt là 2 phần của thức nói chung, không phải phân loại của thức năng biến [1, 2].",
      "b": "Sai. Nếu phân tích chi tiết thì có 8 thức, nhưng theo bài tụng thì thức năng biến chia làm 3 loại [2].",
      "c": "Sai. Không có cách chia thành 30 loại theo bài tụng [2].",
      "d": "Đúng. Thức Năng biến này có 3 loại: Dị thục thức, Tư lương thức, và Liễu biệt cảnh thức [2]."
    }
  },
  {
    "question": "Thức thứ Tám trong hệ thống Duy thức học được gọi tên là gì trong ba loại năng biến?",
    "options": {
      "a": "Dị thục thức.",
      "b": "Liễu biệt cảnh thức.",
      "c": "Sở biến thức.",
      "d": "Tư lương thức."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Dị thục thức, tức là thức thứ Tám [2].",
      "b": "Sai. Liễu biệt cảnh thức là 6 thức trước [2].",
      "c": "Sai. Sở biến không phải là tên gọi của một loại thức Năng biến [2].",
      "d": "Sai. Tư lương thức là tên gọi của thức thứ Bảy [2]."
    }
  },
  {
    "question": "Nhóm 'Liễu biệt cảnh thức' bao gồm những thức nào?",
    "options": {
      "a": "6 thức trước, từ nhãn thức đến ý thức.",
      "b": "Thức thứ 7 và thức thứ 8.",
      "c": "Chỉ bao gồm Ý thức (thức thứ 6).",
      "d": "Tất cả 8 thức trong hệ thống."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Liễu biệt cảnh thức tức là 6 thức trước (từ nhãn thức cho đến ý thức) [2].",
      "b": "Sai. Thức thứ 7 là Tư lương thức, thức thứ 8 là Dị thục thức [2].",
      "c": "Sai. Nhóm này bao gồm cả 6 thức trước, không chỉ riêng ý thức [2].",
      "d": "Sai. Chỉ bao gồm 6 thức trước, không bao gồm thức thứ 7 và thứ 8 [2]."
    }
  },
  {
    "question": "Theo văn bản, người thế gian chấp 'Pháp' dựa trên ba điểm nào?",
    "options": {
      "a": "Sắc, Thọ, Tưởng.",
      "b": "Quá khứ, Hiện tại, Vị lai.",
      "c": "Thật (bản chất), Đức (hình dáng), Năng (công dụng).",
      "d": "Danh, Tướng, Phân biệt."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Sắc, Thọ, Tưởng thuộc về 5 uẩn, không phải điểm mà người thế gian chấp Pháp [3].",
      "b": "Sai. Không liên quan đến khái niệm thời gian [3].",
      "c": "Đúng. Người thế gian chấp pháp không ngoài ba điểm: Thật (bản chất), Đức (hình dáng), Năng (công dụng) [3].",
      "d": "Sai. Không có trong văn bản [3]."
    }
  },
  {
    "question": "Tại sao tác giả lại gọi tác phẩm giải thích của mình là 'Dị giải'?",
    "options": {
      "a": "Vì ông muốn phê phán các bản giải thích trước đó là sai lầm.",
      "b": "Vì ông đưa ra một cách hiểu hoàn toàn khác lạ (dị biệt) so với truyền thống.",
      "c": "Vì ông dùng lời lẽ gọn gàng, dễ hiểu để giải thích nội dung thâm sâu.",
      "d": "Vì đây là bản dịch từ một ngôn ngữ khác không phải chữ Hán."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Tác giả không phê phán các bản giải thích trước [1].",
      "b": "Sai. Từ 'Dị' ở đây mang nghĩa dễ dàng (dễ hiểu), không phải khác biệt [1].",
      "c": "Đúng. Tác giả giải thích bộ luận văn tự khó, nghĩa lý thâm sâu bằng những lời lẽ gọn gàng dễ hiểu, nên gọi là 'Dị giải' [1].",
      "d": "Sai. 'Dị giải' có nghĩa là giải thích một cách dễ hiểu, không liên quan đến việc phiên dịch [1]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-1-duy-thuc-tam-thap-tung',
  slug: 'bai-thu-1-duy-thuc-tam-thap-tung',
  title: 'Bài Thứ 1 - Duy Thức Tam Thập Tụng Dị Giải',
  type: 'article',
  status: 'draft',
  order: 19,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-07',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-1-duy-thuc-tam-thap-tung/Infographic_v%E1%BB%81_Duy_Th%E1%BB%A9c_H%E1%BB%8Dc.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-nhat-duy-thuc-tam-thap-tung-di-giai', label: 'Bài Thứ Nhất - Duy Thức Tam Thập Tụng Dị Giải' },
        { id: 'giai-de-muc', label: 'Giải đề mục', indent: 1 },
        { id: 'duy-thuc', label: '"Duy thức"', indent: 2 },
        { id: 'tam-thap-tung', label: '"Tam thập tụng"', indent: 2 },
        { id: 'di-giai', label: '"Dị giải"', indent: 2 },
        { id: 'chanh-van', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-cau-hoi', label: 'Lược giải câu hỏi', indent: 1 },
        { id: 'nghia-nga-phap', label: '"Ngã pháp" nghĩa là gì?', indent: 2 },
        { id: 'dap-gia-thuyet-nga-phap', label: 'Đáp: do giả thuyết Ngã Pháp', indent: 1 },
        { id: 'nguyen-van-chu-han-ba-cau', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-ba-cau', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-ba-cau', label: 'Lược giải', indent: 2 },
        { id: 'tuong-nga-phap-the-gian', label: 'Tướng Ngã, Pháp của thế gian', indent: 1 },
        { id: 'tuong-nga-phap-thanh-giao', label: 'Tướng Ngã, Pháp trong Thánh giáo', indent: 1 },
        { id: 'thuc-nang-bien-co-ba-loai', label: 'Thức năng biến có ba loại', indent: 1 },
        { id: 'nguyen-van-chu-han-ba-thuc', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-ba-thuc', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-ba-thuc', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-1-duy-thuc-tam-thap-tung/Mapping_Consciousness.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/EBmMKMPSNlQ',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/1wI9gHyk1JDny7UxD4g9nR?utm_source=generator&si=f600688a89af4382',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Duy Thức Tam Thập Tụng Dị Giải',
    passPercentage: 70,
    questions,
  },
}

export default lesson
