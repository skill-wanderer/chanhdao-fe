import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP BA</p>
      <p class="mb-2 font-semibold">DUY THỨC TAM THẬP TỤNG DỊ GIẢI</p>
      <h2 id="bai-thu-tu-duy-thuc-tam-thap-tung-di-giai" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ TƯ</h2>
      <p class="mb-0 italic">Hành tướng sai khác của các loại Tâm sở: Biến hành, Biệt cảnh, Thiện, Căn bản phiền não, Tuỳ phiền não và Bất định.</p>
    </div>

    <h3 id="chanh-van-bien-hanh-biet-canh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: BIẾN HÀNH VÀ BIỆT CẢNH</h3>
    <p><strong>Hỏi:</strong> Trên đã lược nêu 6 loại Tâm sở tương ưng nay xin nói rõ hành tướng (hành vi và tướng trạng) sai khác của các loại Tâm sở này; vậy 2 loại Tâm sở đầu tiên thế nào?</p>

    <h4 id="nguyen-van-chu-han-bien-hanh-biet-canh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Sơ biến hành: Xúc đẳng</p>
        <p>Thứ Biệt cảnh vị: Dục</p>
        <p>Thắng giải, Niệm, Định, Huệ</p>
        <p>Sở duyên sự bất đồng.</p>
      </div>
    </div>

    <h4 id="dich-nghia-bien-hanh-biet-canh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói bài tụng để trả lời rằng: Hai loại Tâm sở, đầu tiên là Biến hành, có năm món: Xúc, Tác ý, Thọ, Tưởng và Tư; loại Tâm sở thứ hai là Biệt cảnh, cũng có năm món: Dục, Thắng giải, Niệm, Định, Huệ. Công việc duyên cảnh của năm món Biệt cảnh không đồng nhau.</p>

    <h4 id="luoc-giai-bien-hanh-biet-canh" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Biến hành Tâm sở:</strong> Tâm sở này đi khắp tất cả:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Đi khắp tất cả thời gian (quá khứ, hiện tại, vị lai).</li>
      <li>Đi khắp tất cả không gian (ba cõi, chín địa).</li>
      <li>Đi khắp tất cả tánh (thiện, ác và vô ký).</li>
      <li>Đi khắp tất cả thức (tám thức tâm vương).</li>
    </ul>
    <p>Năm món Biến hành là: Xúc, Tác ý, Thọ, Tưởng và Tư. Trong bài nói về thức Sơ năng biến ở trước, đã có nói về hành tướng của năm món Biến hành Tâm sở rồi, nên bài này chỉ nói về năm món Biệt cảnh.</p>
    <p><strong>Biệt cảnh Tâm sở:</strong> Tâm sở này có năm món, mỗi món duyên mỗi cảnh giới khác nhau, không thể đi khắp tất cả như năm món Biến hành.</p>
    <p>Năm món Biệt cảnh là: Dục, Thắng giải, Niệm, Định và Huệ.</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Dục:</strong> Muốn; như phát tâm muốn lìa trần tục, hoặc muốn học Phật v.v...</li>
      <li><strong>Thắng giải:</strong> Hiểu biết rõ ràng; như học Duy thức, hiểu biết được rõ ràng.</li>
      <li><strong>Niệm:</strong> Nhớ nghĩ; như ngày trước học giáo lý, hôm nay nhớ lại.</li>
      <li><strong>Định:</strong> Chăm chú; như chăm chú nghe hoặc học Duy thức, tâm không loạn động.</li>
      <li><strong>Huệ:</strong> Trí huệ; nhơn định nên sanh trí huệ.</li>
    </ol>
    <p>Vì năm Tâm sở này, mỗi món duyên mỗi cảnh và hành tướng khác nhau; cũng như năm người, mỗi người ở mỗi chỗ và làm mỗi việc không đồng, nên bài tụng trên nói "Sở duyên sự bất đồng": Công việc duyên cảnh của năm món Tâm sở này không đồng.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Biệt cảnh</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Dục:</strong> Tâm sở duyên cảnh bị mong muốn.</li>
        <li><strong>Thắng giải:</strong> đã rõ ràng.</li>
        <li><strong>Niệm:</strong> nhớ lại.</li>
        <li><strong>Định:</strong> chăm chú.</li>
        <li><strong>Huệ:</strong> quán sát.</li>
      </ul>
    </div>

    <h3 id="chanh-van-thien-tam-so" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: THIỆN TÂM SỞ</h3>
    <p><strong>Hỏi:</strong> Trên đã nói hai loại Tâm sở Biến hành và Biệt cảnh; còn hành tướng của Thiện Tâm sở thế nào?</p>

    <h4 id="nguyen-van-chu-han-thien" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thiện, vị: Tín, Tàm, Quí</p>
        <p>Vô tham đẳng tam căn</p>
        <p>Cần, An, Bất phóng dật</p>
        <p>Hành xả cập Bất hại.</p>
      </div>
    </div>

    <h4 id="dich-nghia-thien" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói bài tụng để trả lời rằng: Thiện Tâm sở có 11 món: Tín, Tàm, Quí và ba thiện căn là Vô tham, Vô sân, Vô si với Cần, An, Bất phóng dật, Hành xả và Bất hại.</p>

    <h4 id="luoc-giai-thien" class="text-lg font-semibold">Lược giải</h4>
    <p>11 món Thiện Tâm sở này, cũng như các vị Trung thần trong nước, hay người tớ trung thành trong nhà.</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Tín:</strong> Tin; như tin Tam bảo.</li>
      <li><strong>Tàm:</strong> Xấu hổ; như mình lỡ làm việc có tội lỗi, sanh ra xấu hổ.</li>
      <li><strong>Quí:</strong> Thẹn thùa; như mình làm việc sái quấy, đối với người sanh lòng thẹn thùa. Nói lại cho dễ hiểu: Tàm là tự hổ lấy mình; Quí là thẹn với người.</li>
      <li><strong>Vô tham:</strong> Không tham; gặp cảnh tốt đẹp, không sanh tâm tham lam.</li>
      <li><strong>Vô sân:</strong> Không nóng giận.</li>
      <li><strong>Vô si:</strong> Không si mê; đối với tất cả sự vật, tâm không si mê. Ba món tâm sở này (Vô tham, Vô sân, Vô si) là gốc rễ của các pháp lành, nên được gọi là "Tam thiện căn" (ba căn lành).</li>
      <li><strong>Cần:</strong> Siêng năng; gặp việc lành, tâm tinh tấn không thối lui.</li>
      <li><strong>Khinh an:</strong> Nhẹ nhàng sảng khoái; thâm tâm vui vẻ nhẹ nhàng.</li>
      <li><strong>Bất phóng dật:</strong> Không phóng túng; bỏ dữ làm lành, không buông lung theo dục lạc.</li>
      <li><strong>Hành xả:</strong> Làm mà không cố chấp; làm tất cả việc tốt, mà không tham luyến cố chấp, làm với bản tánh tự nhiên, chớ không có dụng công, tâm thường an trụ nơi bình đẳng. Hành tướng của Hành xả, như người đi đường: Phải bỏ bước sau mới tiến tới bước trước. Nếu không bỏ bước sau thì không bao giờ tiến tới bước trước được. Lại nữa, Hành xả với Xả thọ khác nhau: "Hành xả" là món Xả trong Hành uẩn, thuộc về pháp lành; còn "Xả thọ" là một trong Thọ uẩn, thuộc về tánh vô ký.</li>
      <li><strong>Bất hại:</strong> Không làm tổn hại tất cả chúng sanh.</li>
    </ol>

    <h3 id="chanh-van-can-ban-phien-nao" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: CĂN BẢN PHIỀN NÃO</h3>
    <p><strong>Hỏi:</strong> Trên đã nói 11 món Thiện Tâm sở, còn hành tướng (hành vi, tướng trạng) của Căn bản phiền não thế nào?</p>

    <h4 id="nguyen-van-chu-han-can-ban-phien-nao" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Phiền não vị: tham, sân</p>
        <p>Si, mạn, nghi, ác kiến.</p>
      </div>
    </div>

    <h4 id="dich-nghia-can-ban-phien-nao" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói hai câu tụng để trả lời rằng: Căn bản phiền não có sáu món: Tham, Sân, Si, Mạn, Nghi, Ác kiến.</p>

    <h4 id="luoc-giai-can-ban-phien-nao" class="text-lg font-semibold">Lược giải</h4>
    <p>Phiền não nghĩa là buồn phiền não loạn. Vì 6 món phiền não này làm căn bản để sinh ra các phiền não chi mạt, nên gọi là Căn bản phiền não.</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li><strong>Tham</strong></li>
      <li><strong>Sân</strong></li>
      <li><strong>Si;</strong> ba món Tâm sở này trái ngược với ba món Thiện căn (Vô tham, Vô sân, Vô si) trong 11 món Thiện Tâm sở. Trong Khế kinh gọi ba món phiền não này là "tam độc" (3 món độc).</li>
      <li><strong>Mạn,</strong> tức là Ngã mạn; đã giải trong bài thức năng biến thứ hai.</li>
      <li><strong>Nghi:</strong> Nghi ngờ; như người nghi ngờ Phật pháp, không tin thuyết nhơn quả luân hồi v.v...</li>
      <li><strong>Ác kiến:</strong> Hiểu biết có tội ác; nghĩa là hiểu biết không chơn chánh tà vạy.</li>
    </ol>
    <p>Ác kiến này, chia ra làm năm món: Thân kiến, Biên kiến, Tà kiến, Kiến thủ, Giới cấm thủ, sẽ giải ở sau.</p>

    <h3 id="chanh-van-tuy-phien-nao" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: TÙY PHIỀN NÃO</h3>
    <p><strong>Hỏi:</strong> Trên đã nói 6 món Căn bản phiền não, còn hành tướng (hành vi, tướng trạng) của 20 món Tùy phiền não thế nào?</p>

    <h4 id="nguyen-van-chu-han-tuy-phien-nao" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Tuỳ phiền não vị: Phẫn</p>
        <p>Hận, Phú, Não, Tật, Xan</p>
        <p>Cuống, Siểm, dữ hại, Kiêu</p>
        <p>Vô tàm cập vô quí</p>
        <p>Trạo cử dữ Hôn trầm</p>
        <p>Bất tín tinh Giải đãi</p>
        <p>Phóng dật cập Thất niệm</p>
        <p>Tán loạn, Bất chánh tri.</p>
      </div>
    </div>

    <h4 id="dich-nghia-tuy-phien-nao" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói hai bài tụng để trả lời rằng: Tùy phiền não có hai mươi món: Phẫn, Hận, Phú, Não, Tật, Xan, Cuống, Siểm, Hại, Kiêu, Vô tàm, Vô quí, Trạo cử, Hôn trầm, Bất tín, Giải đãi, Phóng dật, Thất niệm, Tán loạn và Bất chánh tri.</p>

    <h4 id="luoc-giai-tuy-phien-nao" class="text-lg font-semibold">Lược giải</h4>
    <p>Vì hai mươi món phiền não này tùy thuộc vào các căn bản phiền não, nên gọi là "Tùy phiền não".</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Phẫn:</strong> Giận, khi gặp nghịch cảnh sanh tâm giận dỗi.</li>
      <li><strong>Hận:</strong> Hờn, sau khi giận rồi lưu lại trong tâm không bỏ.</li>
      <li><strong>Phú:</strong> Che giấu, che giấu tội lỗi của mình không cho ai biết.</li>
      <li><strong>Não:</strong> Phiền, sau khi giận rồi buồn phiền nơi lòng.</li>
      <li><strong>Tật:</strong> Ganh ghét, thấy người hơn mình sanh tâm đố kị.</li>
      <li><strong>Xan:</strong> Bỏn xẻn, có tiền của mà rít rắm không bố thí.</li>
      <li><strong>Cuống:</strong> Dối gạt, vì muốn đặng danh lợi nên dối gạt người.</li>
      <li><strong>Siểm:</strong> Nịnh, bợ đỡ nịnh hót với người để xin danh vọng quyền lợi.</li>
      <li><strong>Hại:</strong> Tổn hại, trái với "Bất hại" trong Thiện Tâm sở.</li>
      <li><strong>Kiêu:</strong> Kiêu cách, giống như Mạn tâm sở, song "Mạn tâm sở" là khinh dễ lấn lướt người, còn "Kiêu tâm sở" là ỷ tài năng của mình mà khinh ngạo xem thường người.</li>
      <li><strong>Vô tàm, Vô quí:</strong> trái với Tàm và Quí trong Thiện tâm sở.</li>
      <li><strong>Trạo cử:</strong> Chao động, làm chướng ngại tu Chỉ; trái với Định tâm sở trong vị Biệt cảnh.</li>
      <li><strong>Hôn trầm:</strong> Tối mờ, làm chướng ngại tu Quán; trái với Huệ tâm sở.</li>
      <li><strong>Bất tín:</strong> Không tin, trái với Tín tâm sở trong 11 món thiện.</li>
      <li><strong>Giải đãi:</strong> Trễ nải, trái với Cần tâm sở trong 11 món thiện.</li>
      <li><strong>Phóng dật:</strong> Buông lung; trái với "Bất phóng dật" trong Thiện tâm sở.</li>
      <li><strong>Thất niệm:</strong> Không nhớ; trái với "Niệm tâm sở" trong vị Biệt cảnh.</li>
      <li><strong>Tán loạn:</strong> Rối loạn, tâm lăng xăng rối loạn; trái với "Định tâm sở" trong vị Biệt cảnh.</li>
      <li><strong>Bất chánh tri:</strong> Biết không chơn chánh, khi đối với cảnh hiểu biết sai lầm, làm chướng ngại hiểu biết chơn chánh.</li>
    </ul>

    <h3 id="chanh-van-bat-dinh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: BẤT ĐỊNH</h3>
    <p><strong>Hỏi:</strong> Trên đã nói 20 món Tùy phiền não, còn hành tướng của 4 món Bất định thế nào?</p>

    <h4 id="nguyen-van-chu-han-bat-dinh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Bất định, vị: Hối Miên</p>
        <p>Tầm Tư nhị các nhị</p>
      </div>
    </div>

    <h4 id="dich-nghia-bat-dinh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói hai câu tụng trên để trả lời rằng: Bất định là Hối Miên và Tầm Tư, mỗi món lại chia làm hai (là bốn).</p>

    <h4 id="luoc-giai-bat-dinh" class="text-lg font-semibold">Lược giải</h4>
    <p>Bất định là không nhứt định thiện hay ác.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Hối:</strong> Ăn năn, nghĩa là ăn năn những việc nên làm mà không làm, hoặc ăn năn những việc không nên làm mà lại làm.</li>
      <li><strong>Miên:</strong> Ngủ nghỉ, làm cho thân tâm không tự tại.</li>
      <li><strong>Tầm:</strong> Tìm kiếm, đối với cảnh danh ngôn của ý thức, nó làm cho tâm thô động gấp gáp.</li>
      <li><strong>Tư:</strong> Rình xét, đối với cảnh danh ngôn của ý thức, nó khiến cho tâm tế nhị mà gấp gáp.</li>
    </ul>
    <p>Lại nữa, bốn món tâm sở này, mỗi món đều có hai tánh: hoặc thiện hoặc ác không nhứt định, nên gọi là "Bất định".</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Năm món tâm sở Biến hành bao gồm Xúc, Tác ý, Thọ, Tưởng và Tư được gọi là 'Biến hành' vì lý do nào sau đây?",
    options: {
      a: 'Vì chúng có khả năng chuyển hóa các phiền não thành bồ đề.',
      b: 'Vì chúng đi khắp tất cả thời gian, không gian, các tánh và cả tám thức.',
      c: 'Vì chúng chỉ hiện hành trong các trạng thái tâm thiện và tốt lành.',
      d: 'Vì chúng chỉ xuất hiện khi tâm thức duyên vào những cảnh giới riêng biệt.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tài liệu không đề cập đến việc Biến hành chuyển hóa phiền não thành bồ đề.',
      b: 'Đúng. Tâm sở Biến hành đi khắp tất cả thời gian (quá khứ, hiện tại, vị lai), không gian, các tánh (thiện, ác, vô ký) và tám thức.',
      c: 'Sai. Biến hành đi khắp tất cả các tánh, bao gồm cả ác và vô ký chứ không chỉ thiện.',
      d: 'Sai. Tính chất duyên cảnh giới riêng biệt là đặc điểm của tâm sở Biệt cảnh, không phải Biến hành.',
    },
  },
  {
    question: "Trong năm món Biệt cảnh, tâm sở nào được định nghĩa là sự 'ghi nhớ lại' những giáo lý hoặc sự việc đã học?",
    options: {
      a: 'Thắng giải',
      b: 'Niệm',
      c: 'Định',
      d: 'Dục',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Thắng giải là sự hiểu biết rõ ràng.',
      b: 'Đúng. Niệm là nhớ nghĩ, ví dụ như ngày trước học giáo lý, hôm nay nhớ lại.',
      c: 'Sai. Định là sự chăm chú, tâm không loạn động.',
      d: 'Sai. Dục là muốn, sự mong muốn.',
    },
  },
  {
    question: "Tại sao nhóm tâm sở Biệt cảnh lại được mô tả bằng câu 'Sở duyên sự bất đồng'?",
    options: {
      a: 'Vì chúng không thể cùng xuất hiện trong một sát-na tâm thức.',
      b: 'Vì chúng chỉ duyên những cảnh giới mang tính chất bất thiện.',
      c: 'Vì hành tướng của chúng thay đổi tùy theo thời gian quá khứ hay hiện tại.',
      d: 'Vì mỗi tâm sở trong nhóm này duyên một cảnh giới và có hành tướng khác nhau.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Không có thông tin cho thấy chúng không thể xuất hiện cùng lúc.',
      b: 'Sai. Tâm sở Biệt cảnh không bị giới hạn ở cảnh giới bất thiện.',
      c: 'Sai. Sự bất đồng không phải do thay đổi theo thời gian.',
      d: 'Đúng. Vì năm Tâm sở này, mỗi món duyên mỗi cảnh và có hành tướng khác nhau, công việc duyên cảnh của chúng không đồng.',
    },
  },
  {
    question: "Trong 11 món Thiện Tâm sở, sự khác biệt giữa 'Tàm' và 'Quí' được giải thích như thế nào?",
    options: {
      a: 'Tàm là không nóng giận; Quí là không tham lam.',
      b: 'Tàm là thẹn với người khác; Quí là tự hổ thẹn với chính mình.',
      c: 'Tàm là siêng năng làm việc thiện; Quí là tin tưởng vào Tam bảo.',
      d: 'Tàm là tự xấu hổ với chính mình; Quí là thẹn với người khác.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Không nóng giận là Vô sân, không tham lam là Vô tham.',
      b: 'Sai. Sự giải thích này bị ngược.',
      c: 'Sai. Siêng năng là Cần, tin Tam bảo là Tín.',
      d: 'Đúng. Tàm là tự hổ lấy chính mình khi lỡ làm việc tội lỗi; Quí là thẹn với người khi làm việc sái quấy.',
    },
  },
  {
    question: "Ba tâm sở nào được gọi là 'Tam thiện căn' (ba căn lành)?",
    options: {
      a: 'Vô tham, Vô sân, Vô si',
      b: 'Tín, Tàm, Quí',
      c: 'Cần, An, Bất phóng dật',
      d: 'Hành xả, Bất hại, Tín',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Vô tham, Vô sân, Vô si là gốc rễ của các pháp lành, nên được gọi là Tam thiện căn.',
      b: 'Sai. Tín, Tàm, Quí là các tâm sở thiện nhưng không phải là ba căn lành.',
      c: 'Sai. Cần, Khinh an, Bất phóng dật không phải là Tam thiện căn.',
      d: 'Sai. Hành xả, Bất hại, Tín cũng không phải là gốc rễ tạo ra pháp lành như ba món trên.',
    },
  },
  {
    question: "Theo lược giải, tâm sở 'Hành xả' khác với 'Xả thọ' ở điểm quan trọng nào?",
    options: {
      a: 'Hành xả là cảm giác không vui không buồn; Xả thọ là tinh thần buông bỏ chấp trước.',
      b: 'Hành xả thuộc Hành uẩn và là pháp lành; Xả thọ thuộc Thọ uẩn và mang tính vô ký.',
      c: 'Hành xả chỉ có ở người tu hành; Xả thọ có ở tất cả mọi người.',
      d: 'Hành xả là một loại phiền não; Xả thọ là một tâm sở thiện.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Định nghĩa bị nhầm lẫn giữa hai khái niệm.',
      b: "Đúng. 'Hành xả' là món Xả trong Hành uẩn thuộc về pháp lành, còn 'Xả thọ' là một trong Thọ uẩn thuộc về tánh vô ký.",
      c: 'Sai. Lược giải không phân chia sự tồn tại của hai pháp này theo đối tượng tu hành hay không.',
      d: 'Sai. Hành xả là pháp lành (thiện tâm sở), không phải phiền não.',
    },
  },
  {
    question: 'Nhóm Căn bản phiền não bao gồm 6 món chính là gì?',
    options: {
      a: 'Tham, Sân, Si, Mạn, Nghi, Ác kiến',
      b: 'Tham, Sân, Si, Phóng dật, Giải đãi, Bất tín',
      c: 'Phẫn, Hận, Phú, Não, Tật, Xan',
      d: 'Si, Mạn, Nghi, Ác kiến, Tấn, Thù',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Sáu món Căn bản phiền não làm nền tảng sinh ra các phiền não chi mạt là: Tham, Sân, Si, Mạn, Nghi, Ác kiến.',
      b: 'Sai. Phóng dật, Giải đãi, Bất tín thuộc nhóm 20 món Tùy phiền não.',
      c: 'Sai. Phẫn, Hận, Phú, Não... đều là Tùy phiền não.',
      d: 'Sai. Tấn, Thù không có trong danh sách Căn bản phiền não.',
    },
  },
  {
    question: "Sự khác biệt giữa tâm sở 'Mạn' (trong Căn bản phiền não) và 'Kiêu' (trong Tùy phiền não) là gì?",
    options: {
      a: 'Mạn là tự hào về mình; Kiêu là coi thường người khác.',
      b: 'Mạn thuộc nhóm Biệt cảnh; Kiêu thuộc nhóm Tùy phiền não.',
      c: 'Mạn là khinh dễ lấn lướt người khác; Kiêu là ỷ vào tài năng mình mà khinh ngạo.',
      d: 'Mạn là một tâm sở thiện; Kiêu là một tâm sở ác.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Định nghĩa này không bám sát văn bản Lược giải.',
      b: 'Sai. Mạn thuộc Căn bản phiền não chứ không phải Biệt cảnh.',
      c: 'Đúng. Theo tài liệu, Mạn là khinh dễ lấn lướt người, còn Kiêu là ỷ tài năng của mình mà khinh ngạo xem thường người.',
      d: 'Sai. Cả hai đều thuộc về phiền não (ác hoặc nhiễm ô), không phải tâm sở thiện.',
    },
  },
  {
    question: "Cặp tâm sở nào sau đây làm chướng ngại trực tiếp cho việc tu 'Chỉ' và tu 'Quán'?",
    options: {
      a: 'Giải đãi (chướng ngại tu Chỉ) và Bất tín (chướng ngại tu Quán).',
      b: 'Trạo cử (chướng ngại tu Chỉ) và Hôn trầm (chướng ngại tu Quán).',
      c: 'Tán loạn (chướng ngại tu Chỉ) và Thất niệm (chướng ngại tu Quán).',
      d: 'Phẫn (chướng ngại tu Chỉ) và Hận (chướng ngại tu Quán).',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Bất tín và Giải đãi không được nhắc đến như là chướng ngại trực tiếp của tu Chỉ - Quán.',
      b: 'Đúng. Trạo cử (chao động) làm chướng ngại tu Chỉ; Hôn trầm (tối mờ) làm chướng ngại tu Quán.',
      c: 'Sai. Thất niệm là không nhớ, Tán loạn là tâm rối loạn, không phải cặp chướng ngại tu Chỉ - Quán.',
      d: 'Sai. Phẫn và Hận là giận hờn, không liên quan đến chướng ngại Chỉ - Quán trong bài.',
    },
  },
  {
    question: "Tại sao bốn tâm sở Hối, Miên, Tầm, Tư được xếp vào nhóm 'Bất định'?",
    options: {
      a: 'Vì chúng không nhất định là thiện hay ác, có thể thay đổi tính chất tùy trường hợp.',
      b: 'Vì chúng có hành tướng mờ nhạt, khó nhận biết.',
      c: 'Vì chúng không nhất định xuất hiện trong tâm vương.',
      d: 'Vì chúng chỉ xuất hiện ở một số cõi nhất định trong ba cõi.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Chúng được gọi là Bất định vì mỗi món đều có hai tánh: hoặc thiện hoặc ác không nhất định tùy trường hợp.',
      b: 'Sai. Lý do không liên quan đến độ mờ nhạt của hành tướng.',
      c: 'Sai. Lý do liên quan đến tính chất thiện ác, không phải sự xuất hiện của chúng.',
      d: 'Sai. Không có thông tin về việc chúng chỉ xuất hiện ở một số cõi.',
    },
  },
  {
    question: "Tâm sở 'Tầm' và 'Tư' trong nhóm Bất định khác nhau như thế nào về hành tướng?",
    options: {
      a: 'Tầm là tìm kiếm việc thiện; Tư là suy tính việc ác.',
      b: 'Tầm thuộc về ý thức; Tư thuộc về mạt-na thức.',
      c: 'Tầm làm cho tâm thô động gấp gáp; Tư khiến cho tâm tế nhị mà gấp gáp.',
      d: 'Tầm là trạng thái tỉnh thức; Tư là trạng thái mê ngủ.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Tầm và Tư đều có thể mang hai tánh thiện hoặc ác không nhất định.',
      b: 'Sai. Cả hai đều đối với cảnh danh ngôn của ý thức.',
      c: 'Đúng. Tầm là tìm kiếm làm cho tâm thô động gấp gáp; Tư là rình xét khiến cho tâm tế nhị mà gấp gáp.',
      d: 'Sai. Không liên quan đến trạng thái thức hay ngủ.',
    },
  },
  {
    question: "Tâm sở 'Hối' được giải thích là sự ăn năn. Trường hợp nào sau đây được coi là 'Hối' mang tánh thiện?",
    options: {
      a: 'Ăn năn chỉ vì cảm thấy buồn bã mà không rõ lý do.',
      b: 'Ăn năn vì đã lỡ làm một việc thiện khiến mình bị thiệt thòi.',
      c: 'Ăn năn những việc ác đã làm hoặc những việc thiện đáng lẽ nên làm mà không làm.',
      d: 'Ăn năn vì không kịp thực hiện một hành vi lừa dối người khác.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hối là có chủ đích ăn năn về một việc làm cụ thể.',
      b: 'Sai. Ăn năn vì làm việc thiện thì Hối mang tánh ác.',
      c: 'Đúng. Ăn năn những việc không nên làm mà lại làm (như việc ác), hoặc ăn năn những việc nên làm mà không làm (việc thiện) thể hiện sự hối cải thiện lành.',
      d: 'Sai. Ăn năn vì lỡ mất cơ hội làm việc ác là Hối mang tánh ác.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-4-duy-thuc-tam-thap-tung',
  slug: 'bai-thu-4-duy-thuc-tam-thap-tung',
  title: 'Bài Thứ 4 - Duy Thức Tam Thập Tụng',
  type: 'article',
  status: 'published',
  order: 22,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-4-duy-thuc-tam-thap-tung/B%E1%BA%A3n_%C4%91%E1%BB%93_51_t%C3%A2m_s%E1%BB%9F%20(1).png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-tu-duy-thuc-tam-thap-tung-di-giai', label: 'Bài Thứ Tư' },
        { id: 'chanh-van-bien-hanh-biet-canh', label: 'Chánh văn: Biến hành và Biệt cảnh', indent: 1 },
        { id: 'nguyen-van-chu-han-bien-hanh-biet-canh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-bien-hanh-biet-canh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-bien-hanh-biet-canh', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-thien-tam-so', label: 'Chánh văn: Thiện Tâm sở', indent: 1 },
        { id: 'nguyen-van-chu-han-thien', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-thien', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-thien', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-can-ban-phien-nao', label: 'Chánh văn: Căn bản phiền não', indent: 1 },
        { id: 'nguyen-van-chu-han-can-ban-phien-nao', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-can-ban-phien-nao', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-can-ban-phien-nao', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-tuy-phien-nao', label: 'Chánh văn: Tùy phiền não', indent: 1 },
        { id: 'nguyen-van-chu-han-tuy-phien-nao', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-tuy-phien-nao', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-tuy-phien-nao', label: 'Lược giải', indent: 2 },
        { id: 'chanh-van-bat-dinh', label: 'Chánh văn: Bất định', indent: 1 },
        { id: 'nguyen-van-chu-han-bat-dinh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-bat-dinh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-bat-dinh', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-4-duy-thuc-tam-thap-tung/Mind_Architecture%20(1).pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/gCIpB793gsc',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/5Z3P7j9p9TIeQg0jhfDqNo?utm_source=generator&si=99f1883068de4b45',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Duy Thức Tam Thập Tụng Bài 4',
    passPercentage: 70,
    questions,
  },
}

export default lesson
