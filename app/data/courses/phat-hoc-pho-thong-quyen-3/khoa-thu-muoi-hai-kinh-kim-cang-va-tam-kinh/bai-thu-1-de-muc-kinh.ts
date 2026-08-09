import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="bai-thu-nhat" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ NHẤT: Đề mục Kinh</h2>
    </div>

    <div class="my-6 pl-4 border-l-4 border-primary-300 dark:border-primary-700 italic opacity-80">
      <p class="mb-1">Ngài Tam Tạng Pháp sư Cưu Ma La Thập, dịch chữ Phạn ra chữ Hán</p>
      <p class="mb-0">Sa môn THÍCH THIỆN HOA dịch lại chữ Việt và lược giải</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-8 mb-6">
      <h3 id="phan-tu" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">A. Phần tự (Phần mở đề)</h3>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đề mục kinh có tám chữ: "Kim Cang Bát Nhã Ba la mật kinh"; gọi tắt là "kinh Kim Cang".</p>
    
    <p id="nghia-chu-kinh" class="mt-6 font-semibold uppercase text-primary-700 dark:text-primary-300">KINH:</p>
    <p>Kinh điển hay giáo lý, do Phật hoặc Bồ Tát nói ra. Chữ "Kinh" có nhiều nghĩa, nhưng tóm lại có ba nghĩa như sau:</p>
    <div class="pl-6 space-y-2 mt-2">
      <p class="mb-0"><strong>Đường canh (nghĩa đen):</strong> Sợi chỉ xuôi trong tấm vải. Nhờ sợi chỉ xuôi xâu kết các sợi chỉ ngang, để làm thành một tấm vải. "Kinh" cũng có nghĩa là sự tổng hợp ghi chép lại các lời nói của Phật hoặc thánh hiền.</p>
      <p class="mb-0"><strong>Thường:</strong> Không thay đổi. Chơn lý của Phật không thay đổi; dù Phật quá khứ, hiện tại hay vị lai cũng đều nói chơn lý như vậy.</p>
      <p class="mb-0"><strong>Hợp (Khế):</strong> Kinh của Phật "hợp với chơn lý của vũ trụ" và "hợp với căn cơ trình độ của chúng sanh". Cũng một bộ kinh, mà tuỳ theo trình độ của mỗi người, kẻ hiểu cao, người hiểu thấp. Tuy sự hiểu ngộ có cao thấp không đồng, mà cứ như lý tu hành thì đều được khỏi khổ luân hồi, không sót một người nào. Kinh Phật có những đặc điểm như thế, nên gọi là "Khế kinh".</p>
    </div>

    <p id="nghia-chu-kim-cang" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">KIM CANG:</p>
    <p>Chữ "Cang", người Nam đọc là "cang", người Bắc đọc là "cương". Có hai nghĩa:</p>
    <div class="pl-6 space-y-2 mt-2 mb-4">
      <p class="mb-0"><strong>Ngọc Kim cương:</strong> Thuộc về loại khoáng vật rất quý giá. Tánh nó rất cứng và rất bén, đã không bị các vật phá hoại, trái lại còn phá hoại các vật.</p>
      <p class="mb-0"><strong>Kim Cang:</strong> chất cứng rắn trong loại kim khí, tức là "thép", cũng thuộc về loại khoáng vật. Tánh nó cũng rất cứng bén, và cũng không bị các vật phá hoại, trái lại còn phá hoại các vật, như khoan sắt, đục đá v.v... dao búa nhờ có thép mới bén.</p>
    </div>
    <p>Chất "cứng rắn" của "ngọc Kim cương" hay của "thép", đã sẵn có từ hồi nào đến giờ, không phải do rèn luyện mới có, hay nhờ các vật bên ngoài tạo thành.</p>
    <p>Phật dùng "ngọc kim cương" hay "chất thép cứng", để thí dụ "trí huệ Bát Nhã" rất quý báu và sẵn có trong mọi người (tức là tánh Phật sáng suốt của mỗi chúng sanh).</p>
    <p>Trí huệ Bát Nhã, không phải do tu mới có, hay nhờ các duyên bên ngoài luyện tập mới thành. Nó có sẵn trong mỗi chúng sanh từ vô thỉ đến nay. Dù ở địa vị phàm phu nó cũng không giảm, hay chứng quả Thánh nó cũng không thêm. Nó đã không bị các vô minh phiền não tàn phá, trái lại còn phá tiêu tất cả vô minh phiền não từ vô thỉ đến nay. Nó phá một cách rốt ráo và dễ dàng, như gió thổi mây bay, mặt trời chiếu sương mù tan. Bởi thế nên gọi là "Bát Nhã Ba La mật" Trí huệ rốt ráo.</p>

    <p id="nghia-chu-bat-nha" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">BÁT NHÃ:</p>
    <p>Dịch âm của chữ Phạn "Prajnà". Vì Trung hoa không có chữ dịch cho cân xứng nên chỉ dịch nguyên âm là "Bát Nhã".</p>
    <p>Bát Nhã có nhiều nghĩa sâu xa, nhưng tóm lại có sáu nghĩa:</p>
    <div class="pl-6 grid grid-cols-2 gap-2 mt-2 mb-4">
      <p class="mb-0">1. Viễn ly: xa lìa các vô minh, phiền não vọng chấp;</p>
      <p class="mb-0">2. Minh: Sáng, không mờ tối</p>
      <p class="mb-0">3. Huệ: Sáng tỏ</p>
      <p class="mb-0">4. Thanh tịnh: trong sạch không nhiễm ô</p>
      <p class="mb-0">5. Trí: Thông suốt</p>
      <p class="mb-0">6. Trí huệ: Sáng tỏ thông suốt</p>
    </div>
    
    <p>Bát Nhã có nhiều nghĩa như vậy, nếu lấy một nghĩa thì không được đúng lắm, nên các nhà dịch chỉ để nguyên âm chữ Phạn (Bát Nhã).</p>
    <p>Tuy nhiên, trong 6 nghĩa trên đây, nếu đem so sánh và cân nhắc, thì có thể dùng tạm nghĩa "trí huệ"; vì nghĩa "trí huệ" có phần rõ ràng và xác đáng hơn hết.</p>
    <p>Nhưng cần phải chọn lọc thật kỹ, bỏ ra các thứ Trí huệ sau đây, mới đúng với nghĩa chữ "Bát Nhã":</p>
    
    <div class="pl-6 space-y-3 mt-4 mb-4 border-l-2 border-secondary-300 dark:border-secondary-700 py-2">
      <p class="mb-0"><strong>Trí huệ thế gian:</strong> Trong thế gian, những người học rộng thấy xa, thông minh lanh lợi, khôn khéo lịch duyệt, hay giỏi mọi phương diện, thiên hạ gọi đó là người "trí huệ". Nhưng trí huệ đó là trí huệ của thế tục phàm phu, chứ không phải là "trí huệ Bát Nhã".</p>
      <p class="mb-0"><strong>Trí huệ ngoại đạo:</strong> Chúng ngoại đạo tu thiền định lâu ngày cũng có trí huệ, biết được quá khứ vị lai, thần thông biến hoá vô cùng, nhiều pháp kỳ lạ. Nhưng trí huệ đó là tà trí huệ, chứ không phải là "trí huệ Bát Nhã".</p>
      <p class="mb-0"><strong>Trí huệ Nhị thừa:</strong> Hàng Thanh văn và Duyên giác, do tu pháp Tứ đế và Thập Nhị Nhân duyên mà đặng đạo quả. Các vị này đã khỏi sanh tử luân hồi, thần thông tự tại và có trí huệ biết được việc quá khứ, hiện tại và vị lai. Nhưng trí huệ đó thuộc về Tiểu thừa trí huệ, chỉ thấy về "ngã không chơn như" (thiên không), chớ chưa thấy được "pháp không chơn như", nên cũng không phải trí huệ Bát Nhã.</p>
    </div>

    <p>Trừ ba loại trí huệ trên đây, duy chỉ có trí huệ Phật hay của Đại thừa Bồ Tát, mới phải là trí huệ Bát Nhã.</p>
    <p>Công dụng của trí huệ Bát Nhã, như mặt nhựt chiếu phá các mây mù vô minh vọng chấp: ngã, pháp, bốn tướng (ngã, nhơn, chúng sanh, thọ giả), có, không, chẳng phải có, chẳng phải không v.v... Bởi thế nên Trí huệ Bát Nhã chiếu soi các pháp, thì pháp nào cũng bỏ hình tướng giả dối, mà hiện ra tướng chơn thật. Tướng chơn thật của các pháp đã hiện, tức là chơn tâm, chơn như hay chơn lý của vũ trụ hiện ra vậy.</p>
    <p>Trí huệ Bát Nhã, có công năng như chiếc thuyền đưa chúng sanh một cách rốt ráo, từ bên này bờ mê muội triền phược của phàm phu, đến bên kia bờ giác ngộ giải thoát của chư Phật, nên cổ nhơn cũng gọi là "thuyền Bát Nhã".</p>
    <p>Muốn phân biệt trí huệ Bát Nhã khác với trí huệ của phàm phu, ngoại đạo và Tiểu thừa, thì chúng ta nên dịch nghĩa chữ "Bát Nhã" như sau:</p>
    <div class="pl-6 my-2 font-medium">
      <p class="mb-0">- Trí huệ Phật</p>
      <p class="mb-0">- Trí huệ rốt ráo (Bát Nhã Ba La mật)</p>
      <p class="mb-0">- Trí huệ Bát Nhã (dùng cả chữ Phạn và chữ Hán)</p>
    </div>

    <p id="nghia-chu-ba-la-mat" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">BA LA MẬT:</p>
    <p>"ba la mật" hoặc "ba la mật đa" là dịch âm của chữ Phạn "Paramita". Có hai nghĩa:</p>
    <div class="pl-6 space-y-2 mt-2 mb-4">
      <p class="mb-0"><strong>Đáo bỉ ngạn:</strong> Đến bờ bên kia. Trí huệ Bát Nhã có công năng đưa chúng sanh từ bờ triền phược mê muội của phàm phu bên này, mà qua đến bờ giác ngộ giải thoát của chư Phật bên kia, nên gọi là "Bát Nhã Ba la mật".</p>
      <p class="mb-0"><strong>Cứu kính viên mãn:</strong> hoàn toàn rốt ráo. Theo tục ngữ ở Ấn Độ, phàm làm việc gì, khi đã được hoàn toàn viên mãn, thì gọi là "Ba la mật". Trí huệ Bát Nhã là loại trí huệ đã rốt ráo viên mãn, nên gọi là "Bát Nhã Ba la mật".</p>
    </div>

    <p>Tóm lại, "Kim Cang Bát Nhã Ba la mật kinh" là kinh nói về "Trí huệ Phật" (Bát Nhã), loại Trí huệ đã rốt ráo viên mãn (ba la mật). Trí huệ này có công năng đưa hành giả từ bến mê muội triền phược của chúng sanh, sang bờ giác ngộ giải thoát của chư Phật (đáo bỉ ngạn).</p>
    <p>Trí huệ Phật (Bát Nhã) rất quý báu (như ngọc kim cương), vừa cứng rắn và sắc bén (như thép), có thể phá tiêu núi vô minh vọng chấp (ngã, pháp hay bốn tướng) và đốn tận gốc rừng phiền não nghiệp chướng, từ vô lượng kiếp đến nay, mà không bị hư tổn; cũng như ngọc kim cương hay chất thép, có thể đục chẻ các loại rất cứng, như sắt, đá v.v... mà không bị hư hoại.</p>
    <p>Phật nói kinh "Đại Bát Nhã" tại 4 chỗ, 16 hội gồm 600 quyển, trong 22 năm mới xong (nhị thập nhị niên Bát Nhã đàm). Tóm tắt lại kinh Đại Bát Nhã là "kinh Kim Cang Bát Nhã Ba la mật".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/3 mt-8 mb-6">
      <h3 id="danh-tuong-the-dung" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">NÓI VỀ DANH, TƯỚNG, THỂ, DỤNG VÀ TÔN CHỈ CỦA KINH NÀY</h3>
    </div>
    <div class="pl-6 space-y-2">
      <p class="mb-0"><strong>Danh:</strong> Kinh này lấy "thí dụ" (Kim Cang) và "pháp" (Bát Nhã Ba la mật) mà đặt tên.</p>
      <p class="mb-0"><strong>Tướng:</strong> Kinh này lấy "Đại thừa" làm giáo tướng.</p>
      <p class="mb-0"><strong>Thể:</strong> Kinh này lấy "Thật tướng" làm thể.</p>
      <p class="mb-0"><strong>Dụng:</strong> Công dụng của kinh này là phá các chấp tướng (Ngã, pháp) đoạn hết các vô minh mê hoặc.</p>
      <p class="mb-0"><strong>Tôn chỉ:</strong> Kinh này lấy "Vô trụ" (không trụ chấp nơi nào) làm tôn chỉ.</p>
    </div>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mt-8 mb-6">
      <h3 id="ket-luan" class="mt-0 mb-0 text-xl font-bold text-primary-700 dark:text-primary-300">KẾT LUẬN</h3>
    </div>
    <p>Mới đọc đến đề mục kinh, chúng ta đã thấy thích thú lắm rồi! Đề mục kinh chỉ có tám chữ, mà đã nói lên được rõ ràng nội dung và tôn chỉ của kinh: Phật dạy tất cả chúng sanh đều sẵn có Trí huệ Bát Nhã (Trí huệ Phật) từ vô thỉ đến nay. Trí huệ Bát Nhã (Phật tánh sáng suốt hay khả năng thành Phật) rất là quý báu và cứng bén, như ngọc Kim cương hay chất thép. Trí huệ Bát Nhã có sẵn từ vô thỉ đến nay, đã không bị cái gì làm hư hoại; trái lại, còn phá tiêu núi Ngã tướng, Nhơn tướng, chúng sanh tướng và Thọ giả tướng, hay núi Ngã chấp, pháp chấp; nói tổng quát là phá các vô minh vọng chấp từ vô thỉ đến nay. Nó phá một cách hoàn toàn rốt ráo (Ba la mật) và dễ dàng, như mặt trời chiếu sương tan, gió thổi mây bay.</p>
    <p>Trí huệ Bát Nhã có công năng như chiếc thuyền, đưa hành giả từ bên này bến vô minh mê muội của chúng sanh, vượt qua khỏi sông mê bể khổ, đến bờ bên kia Giác ngộ giải thoát của chư Phật, tức là "Đáo bỉ ngạn" (Ba la mật). Bởi thế nên Cổ nhơn gọi là "Thuyền Bát Nhã".</p>
    <p>Chúng ta đã sẵn có "Trí huệ Bát Nhã" hay "Trí huệ Phật", thì thế nào chúng ta cũng sẽ thành Phật.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong ba nghĩa của chữ 'Kinh', nghĩa 'Hợp' (Khế) được giải thích như thế nào?",
    options: {
      a: "Kinh là sự kết hợp giữa các sợi chỉ ngang và dọc để tạo thành tấm vải giáo lý.",
      b: "Kinh phải được sự đồng ý và hợp tác của tất cả các vị Bồ Tát.",
      c: "Kinh hợp với chơn lý vũ trụ và hợp với căn cơ trình độ của chúng sanh.",
      d: "Kinh phải phù hợp với mong muốn và sở thích của mọi chúng sanh.",
    },
    answer: "c",
    explanation: {
      a: "Sai. Đây là nghĩa của 'Đường canh'.",
      b: "Sai.",
      c: "Đúng. 'Hợp' hay 'Khế' nghĩa là kinh của Phật hợp với chơn lý vũ trụ và hợp với căn cơ trình độ của chúng sanh.",
      d: "Sai.",
    },
  },
  {
    question: "Tại sao Trí huệ Bát Nhã được ví như 'Kim Cang' (ngọc kim cương hay thép cứng)?",
    options: {
      a: "Vì nó không bị các vật phá hoại, trái lại còn có khả năng phá hoại các vật khác.",
      b: "Vì nó cần được rèn luyện lâu dài mới có thể trở nên sắc bén và cứng rắn.",
      c: "Vì nó có màu sắc rực rỡ và chiếu sáng như mặt trời xua tan sương mù.",
      d: "Vì nó là loại trí huệ vô cùng quý hiếm, chỉ có Phật mới có.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Phật dùng 'ngọc kim cương' hay 'chất thép' để thí dụ 'trí huệ Bát Nhã' vì tánh nó rất cứng bén, không bị phá hoại mà có thể phá hoại các vật (như khoan đục đá, sắt) - tượng trưng cho việc phá tan vô minh.",
      b: "Sai. Nó sẵn có, không phải do rèn luyện.",
      c: "Sai.",
      d: "Sai. Sẵn có trong mọi chúng sanh.",
    },
  },
  {
    question: "Nguồn gốc của Trí huệ Bát Nhã trong mỗi chúng sanh được mô tả như thế nào?",
    options: {
      a: "Là kết quả của quá trình tu hành khổ hạnh và rèn luyện tâm trí.",
      b: "Được chư Phật ban tặng sau khi hành giả đạt được các quả vị Thánh.",
      c: "Chỉ xuất hiện khi hành giả đạt đến địa vị Bồ Tát hoặc Phật.",
      d: "Sẵn có từ vô thỉ đến nay, không tăng khi thành Thánh, không giảm khi là phàm.",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Sai.",
      d: "Đúng. Trí huệ Bát Nhã không phải do tu mới có hay luyện mới thành, nó sẵn có trong mỗi chúng sanh từ vô thỉ đến nay, ở phàm không giảm, chứng Thánh không thêm.",
    },
  },
  {
    question: "Tại sao các nhà dịch kinh thường giữ nguyên âm tiếng Phạn là 'Bát Nhã' thay vì chỉ dịch là 'Trí huệ'?",
    options: {
      a: "Vì tiếng Hán và tiếng Việt hoàn toàn không có từ nào tương đương với nghĩa này.",
      b: "Vì chữ Bát Nhã bao hàm nhiều nghĩa sâu xa mà một từ tiếng Hán không dịch hết được.",
      c: "Để bảo tồn sự huyền bí của kinh điển đối với người đọc.",
      d: "Để phân biệt với các loại trí huệ thông thường của người thế gian.",
    },
    answer: "b",
    explanation: {
      a: "Sai. Có thể dịch tạm là 'Trí huệ'.",
      b: "Đúng. Bát Nhã bao hàm nhiều nghĩa (viễn ly, minh, huệ, thanh tịnh, trí...), dùng một nghĩa thì không đúng lắm nên để nguyên âm.",
      c: "Sai.",
      d: "Sai. Đây là một lý do cần cân nhắc khi dùng từ 'trí huệ', nhưng lý do chính để giữ nguyên âm là do Bát Nhã đa nghĩa.",
    },
  },
  {
    question: "Sự khác biệt chính giữa Trí huệ Nhị thừa (Thanh văn, Duyên giác) và Trí huệ Bát Nhã là gì?",
    options: {
      a: "Trí huệ Nhị thừa là tà trí huệ do tu theo ngoại đạo.",
      b: "Trí huệ Nhị thừa vẫn còn bị luân hồi sinh tử chi phối.",
      c: "Trí huệ Nhị thừa không có thần thông tự tại như Trí huệ Bát Nhã.",
      d: "Trí huệ Nhị thừa chỉ thấy được 'ngã không' mà chưa thấy được 'pháp không'.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Nó không phải tà đạo.",
      b: "Sai. Đã khỏi sanh tử luân hồi.",
      c: "Sai. Có thần thông tự tại.",
      d: "Đúng. Nhị thừa chỉ thấy 'ngã không chơn như' (thiên không), chưa thấy được 'pháp không chơn như' nên chưa phải Bát Nhã.",
    },
  },
  {
    question: "Theo nghĩa tục ngữ Ấn Độ, từ 'Ba la mật' (Paramita) được hiểu như thế nào khi hoàn thành một việc gì đó?",
    options: {
      a: "Sự từ bỏ mọi vật chất thế gian.",
      b: "Sự nỗ lực không ngừng nghỉ.",
      c: "Sự cứu kính viên mãn, hoàn toàn rốt ráo.",
      d: "Sự khởi đầu thuận lợi.",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. Theo tục ngữ Ấn Độ, phàm làm việc gì khi đã được hoàn toàn viên mãn thì gọi là 'Ba la mật' (cứu kính viên mãn).",
      d: "Sai.",
    },
  },
  {
    question: "Hình ảnh 'Chiếc thuyền Bát Nhã' (Thuyền Bát Nhã) tượng trưng cho điều gì?",
    options: {
      a: "Sự trôi lăn của chúng sanh trong vòng sinh tử luân hồi.",
      b: "Công năng đưa chúng sanh từ bờ mê muội đến bờ giác ngộ.",
      c: "Nơi cất giữ các bộ kinh điển quý giá của Phật giáo.",
      d: "Phương tiện để Phật đi thuyết pháp khắp nơi.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Trí huệ Bát Nhã có công năng như chiếc thuyền đưa chúng sanh từ bến mê muội sang bờ giác ngộ giải thoát, nên gọi là Thuyền Bát Nhã.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Kinh Kim Cang lấy điều gì làm 'Tôn chỉ'?",
    options: {
      a: "Đại thừa (giáo pháp cao thượng).",
      b: "Vô trụ (không trụ chấp nơi nào).",
      c: "Phá các chấp tướng (ngã, pháp).",
      d: "Thật tướng (tướng chơn thật của các pháp).",
    },
    answer: "b",
    explanation: {
      a: "Sai. Đây là 'Tướng'.",
      b: "Đúng. Kinh này lấy 'Vô trụ' làm tôn chỉ.",
      c: "Sai. Đây là 'Dụng'.",
      d: "Sai. Đây là 'Thể'.",
    },
  },
  {
    question: "Khi Trí huệ Bát Nhã chiếu soi, các pháp sẽ hiện ra tướng trạng như thế nào?",
    options: {
      a: "Hiện ra tướng chơn thật, tức là chơn tâm hay chơn lý vũ trụ.",
      b: "Hiện ra hình tướng giả dối của thế gian.",
      c: "Biến mất hoàn toàn và trở thành hư không.",
      d: "Hiện ra bốn tướng: ngã, nhơn, chúng sanh, thọ giả.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Trí huệ Bát Nhã chiếu soi các pháp, thì pháp nào cũng bỏ hình tướng giả dối, mà hiện ra tướng chơn thật... tức là chơn tâm, chơn như'.",
      b: "Sai.",
      c: "Sai.",
      d: "Sai. Bốn tướng này là thứ bị phá trừ.",
    },
  },
  {
    question: "Câu 'Nhị thập nhị niên Bát Nhã đàm' trong văn bản ám chỉ điều gì?",
    options: {
      a: "Đức Phật đã dành 22 năm để thuyết giảng về giáo lý Bát Nhã.",
      b: "Phật nói kinh Bát Nhã tại 22 địa điểm khác nhau.",
      c: "Bộ kinh Bát Nhã gồm có 22 quyển tất cả.",
      d: "Cứ sau 22 năm, kinh Bát Nhã lại được thuyết giảng một lần.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Phật nói kinh Đại Bát Nhã... trong 22 năm mới xong ('nhị thập nhị' là 22, 'niên' là năm, 'Bát Nhã đàm' là thuyết giảng Bát Nhã).",
      b: "Sai. Tại 4 chỗ, 16 hội.",
      c: "Sai. Gồm 600 quyển.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-12-bai-1-de-muc-kinh',
  slug: 'bai-thu-1-de-muc-kinh',
  title: 'Bài Thứ 1 - Đề mục Kinh',
  type: 'article',
  status: 'published',
  order: 3,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-1-de-muc-kinh/%C3%9D_ngh%C4%A9a_Kinh_Kim_Cang.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-nhat', label: 'BÀI THỨ NHẤT: Đề mục Kinh' },
        { id: 'phan-tu', label: 'A. Phần tự (Phần mở đề)', indent: 1 },
        { id: 'nghia-chu-kinh', label: 'KINH', indent: 2 },
        { id: 'nghia-chu-kim-cang', label: 'KIM CANG', indent: 2 },
        { id: 'nghia-chu-bat-nha', label: 'BÁT NHÃ', indent: 2 },
        { id: 'nghia-chu-ba-la-mat', label: 'BA LA MẬT', indent: 2 },
        { id: 'danh-tuong-the-dung', label: 'Danh, Tướng, Thể, Dụng và Tôn chỉ', indent: 1 },
        { id: 'ket-luan', label: 'Kết luận', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-1-de-muc-kinh/Diamond_Wisdom_Essence.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/e1VTvpqCc6s',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/75EZdmgrUzbAABazyTjnjF',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài 1',
    passPercentage: 70,
    questions,
  },
}

export default lesson