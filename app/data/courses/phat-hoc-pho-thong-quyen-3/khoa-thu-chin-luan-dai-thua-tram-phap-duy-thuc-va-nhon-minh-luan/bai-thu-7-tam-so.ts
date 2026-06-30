import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <h2 id="bai-thu-bay-tam-so" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ BẢY - II. TÂM SỞ (CÓ 51 MÓN)</h2>
    </div>

    <h3 id="khai-niem-tam-so" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Khái niệm Tâm sở</h3>
    <p>"Tâm sở hữu pháp" gọi tắt là "Tâm sở", nghĩa là pháp sở hữu của Tâm vương. Tâm sở tùy theo Tâm vương mà khởi và giúp đỡ Tâm vương để tạo nghiệp (Dữ thử tương ưng cố).</p>

    <h3 id="sau-loai-tam-so" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tâm sở có 51 món, chia làm 6 loại</h3>
    <p>Trong phần nội dung của bài này, bản văn lần lượt trình bày các nhóm Tâm sở Biến hành, Biệt cảnh, Thiện và Căn bản phiền não.</p>

    <h3 id="tam-so-bien-hanh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">A. Tâm sở Biến hành (Có 5 món)</h3>
    <p>Chữ "Biến hành" nghĩa là đi khắp. Năm món Tâm sở này đi khắp 4 chỗ: 1. Tất cả thời gian (quá khứ, hiện tại và vị lai), 2. Tất cả chỗ (không gian: Ba cõi, chín địa), 3. Tất cả các thức (Tám thức Tâm vương), 4. Tất cả tánh (tánh lành, dữ và tánh không lành dữ).</p>

    <h4 id="nam-mon-bien-hanh" class="text-lg font-semibold">Năm món Biến hành</h4>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Xúc:</strong> Tiếp xúc, gặp gỡ. Tánh của Tâm sở này hay làm cho Tâm vương hoặc Tâm sở tiếp xúc với cảnh. Nghiệp dụng của nó làm chỗ nương cho Thọ, Tưởng, Tư... để phát sanh.</li>
      <li><strong>Tác ý:</strong> Mong khởi chú ý. Tánh của Tâm sở này hay đánh thức chủng tử của Tâm vương, Tâm sở khiến cho sanh khởi. Nghiệp dụng của nó dẫn tâm đến duyên tự cảnh.</li>
      <li><strong>Thọ:</strong> Lãnh thọ. Tánh của Tâm sở này hay lãnh thọ những cảnh thuận, nghịch và cảnh không thuận nghịch. Nghiệp dụng của nó là mong muốn. Như gặp cảnh thuận thì muốn hiệp, gặp cảnh nghịch thì muốn lìa và muốn cảnh không thuận nghịch. Nói lại cho dễ hiểu là thọ cảnh vui, buồn và cảnh bình thường.</li>
      <li><strong>Tưởng:</strong> Nhớ tưởng. Tánh của Tâm sở này hay tưởng hình tượng của cảnh vật. Nghiệp dụng của nó là bịa đặt ra những danh từ để kêu gọi. Như tưởng hình tướng trắng, mỏng và vuông, rồi tùy theo đó mà đặt ra cái tên là "tờ giấy".</li>
      <li><strong>Tư:</strong> Lo nghĩ. Tánh của Tâm sở này khiến cho tâm lo nghĩ tạo tác. Nghiệp dụng của nó là sai tâm làm những việc lành, dữ hoặc không phải lành dữ.</li>
    </ul>

    <h3 id="tam-so-biet-canh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">B. Tâm sở Biệt cảnh (Có 5 món)</h3>
    <p>Chữ "Biệt cảnh" là mỗi cảnh riêng khác. Năm món Tâm sở này, mỗi món duyên mỗi cảnh riêng khác.</p>

    <h4 id="nam-mon-biet-canh" class="text-lg font-semibold">Năm món Biệt cảnh</h4>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Dục:</strong> Mong muốn. Tánh của Tâm sở này là hằng mong muốn duyên những cảnh vui thích. Nghiệp dụng của nó làm chỗ nương cho "siêng năng".</li>
      <li><strong>Thắng giải:</strong> Hiểu biết rõ ràng. Tánh của Tâm sở này hiểu biết rõ ràng không có nghi ngờ. Nghiệp dụng của nó là quyết định không chuyển đổi.</li>
      <li><strong>Niệm:</strong> Nhớ. Tánh của Tâm sở này khiến cho tâm ghi nhớ rõ ràng những cảnh đã qua. Nghiệp dụng của nó làm chỗ nương cho Định.</li>
      <li><strong>Định:</strong> Chuyên chú. Tánh của Tâm sở này khiến cho tâm khi đối với cảnh, chuyên chú không tán loạn. Nghiệp dụng của nó làm chỗ nương cho Trí; vì khi đối với cảnh, tâm chuyên chú không tán loạn, nên sanh ra Trí.</li>
      <li><strong>Huệ:</strong> Sáng tỏ. Tánh của Tâm sở này khi đối với cảnh sáng suốt lựa chọn. Nghiệp dụng của nó dứt nghi ngờ. Trong khi đối với cảnh, vì có Huệ suy xét nên quyết định không còn nghi ngờ.</li>
    </ul>

    <h3 id="tam-so-thien" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">C. Tâm sở Thiện (Có 11 món)</h3>
    <p>Chữ "Thiện" là hiền lành. Bản tánh của 11 Tâm sở này hiền lành và làm lợi ích cho chúng sanh.</p>

    <h4 id="muoi-mot-mon-thien" class="text-lg font-semibold">Mười một món Tâm sở Thiện</h4>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Tín:</strong> Tin. Tánh của Tâm sở này tin chịu những gì có thật (chơn thật), Đức (hình dung), Năng (nghiệp dụng) và làm cho Tâm được thanh tịnh. Nghiệp dụng của nó là đối trị Bất tín và ưa việc lành.</li>
      <li><strong>Tinh tấn:</strong> Tinh chuyên và tấn tới. Tánh của Tâm sở này siêng năng đoạn các việc dữ, làm các việc lành. Nghiệp dụng của nó đối trị giải đãi và làm viên mãn việc lành.</li>
      <li><strong>Tàm:</strong> Tự xấu hổ. Tánh của Tâm sở này, mỗi khi làm điều gì quấy, tự mình xấu hổ; kính trọng người hiền và ưa việc phải. Nghiệp dụng của nó là đối trị "tâm không biết xấu hổ" và ngăn ngừa việc dữ.</li>
      <li><strong>Quý:</strong> Thẹn với người. Tánh của Tâm sở này, khi mình làm điều gì quấy, thấy người thẹn thùa; không chịu gần người ác, chẳng làm việc dữ. Nghiệp dụng của nó là đối trị "tâm không biết thẹn" và ngăn làm việc ác.</li>
      <li><strong>Vô tham:</strong> Không tham lam. Tánh của Tâm sở này không tham lam cảnh dục lạc trong tam giới. Nghiệp dụng của nó là đối trị lòng "tham" và ưa làm việc lành.</li>
      <li><strong>Vô sân:</strong> Không sân hận. Tánh của Tâm sở này, khi đối với cảnh trái nghịch, không nóng giận. Nghiệp dụng của nó là đối trị "sân hận" và ưa làm việc lành.</li>
      <li><strong>Vô si:</strong> Không si mê. Tánh của Tâm sở này, khi đối với sự lý, hiểu biết rành rõ không mờ ám. Nghiệp dụng của nó là đối trị "si mê" và ưa làm việc lành.</li>
      <li><strong>Khinh an:</strong> Nhẹ nhàng, thư thới. Tánh của Tâm sở này làm cho thân tâm nhẹ nhàng khoan khoái, xa lìa những gì nặng nề bực bội. Nghiệp dụng của nó là đối trị "Hôn trầm".</li>
      <li><strong>Bất phóng dật:</strong> Không buông lung, phóng túng. Tánh của Tâm sở này là phòng ngừa việc ác, làm việc lành và không phóng túng. Nghiệp dụng của nó làm viên mãn việc lành ở thế gian, xuất thế gian và đối trị "Buông lung".</li>
      <li><strong>Hành xả:</strong> Làm rồi không chấp trước. Tánh của Tâm sở này, khi làm các việc phước thiện, không chấp trước, khiến tâm an trụ nơi vô công dụng. Nghiệp dụng của nó là đối trị "Trạo cử" và làm cho tâm an trụ nơi yên tịnh.</li>
      <li><strong>Bất hại:</strong> Không làm tổn hại. Tánh của Tâm sở này không làm tổn hại tất cả chúng hữu tình. Nghiệp dụng của nó là từ bi thương xót loài vật và đối trị "Tổn hại".</li>
    </ul>

    <h3 id="can-ban-phien-nao" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">D. Căn bản phiền não (Có 6 món)</h3>
    <p>Sáu món phiền não này thuộc về ác. Nó làm cội gốc sanh ra các phiền não chi mạc, nên gọi là "Căn bản".</p>

    <h4 id="sau-mon-can-ban-phien-nao" class="text-lg font-semibold">Sáu món căn bản phiền não</h4>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Tham:</strong> Tham lam. Tánh của Tâm sở này tham lam đắm nhiễm những gì nó ưa thích, như tài sắc, danh vọng... Nghiệp dụng của nó là làm chướng ngại "Vô tham" và sanh tội khổ.</li>
      <li><strong>Sân:</strong> Nổi nóng. Tánh của Tâm sở này giận ghét những cảnh trái nghịch. Nghiệp dụng của nó làm cho thân tâm không yên ổn, chướng ngại tánh "Vô sân" và sanh các tội lỗi.</li>
      <li><strong>Si:</strong> Ngu si, hoặc gọi là "Vô minh" (không sáng suốt). Tánh của Tâm sở này là mê muội, không biết hay dở, phải quấy. Nghiệp dụng của nó sanh ra các pháp tạp nhiễm và chướng ngại tánh "Vô si".</li>
      <li><strong>Mạn:</strong> Khinh mạn. Tánh của Tâm sở này, ỷ tài năng hoặc thế lực của mình, khinh dễ ngạo mạn người. Nghiệp dụng của nó làm nhơn sanh ra tội lỗi và chướng ngại tánh "không khinh mạn".</li>
      <li><strong>Nghi:</strong> Nghi ngờ, do dự. Tánh của Tâm sở này nghi ngờ không tin những việc phải, chơn chánh. Nghiệp dụng của nó làm trở ngại việc lành và chướng ngại tánh "không nghi".</li>
      <li><strong>Ác kiến:</strong> Thấy biết thuộc về tội ác, nhiễm ô. Tánh của Tâm sở này hiểu biết điên đảo, không đúng chánh lý. Nghiệp dụng của nó gây tạo tội khổ và chướng ngại những hiểu biết chơn chánh.</li>
    </ul>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-0">Ba món phiền não Tâm sở là Tham, Sân, Si làm chướng ngại ba món Vô lậu là Giới, Định và Huệ.</p>
    </div>

    <h4 id="nam-mon-ac-kien" class="mt-8 text-lg font-semibold">Năm món Ác kiến</h4>
    <ol class="list-decimal space-y-3 pl-6">
      <li><strong>Thân kiến:</strong> Chấp Ta (Ngã).</li>
      <li><strong>Biên kiến:</strong> Chấp một bên, hoặc chấp Ta chết rồi mất hẳn (chấp đoạn), hoặc chấp Ta chết rồi còn hoài (chấp thường).</li>
      <li><strong>Tà kiến:</strong> Chấp tà, mê tín, dị đoan.</li>
      <li><strong>Kiến thủ:</strong> Chấp cứng chỗ hiểu biết của mình là đúng, mặc dù có người biết sai, chỉ bảo lại cũng không nghe.</li>
      <li><strong>Giới cấm thủ:</strong> Chấp giữ theo những giới cấm không chơn chánh của ngoại đạo. Nói rộng ra là chấp theo những tục lệ không hay.</li>
    </ol>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo văn bản, 'Tâm sở' có nghĩa là gì?",
    "options": {
      "a": "Là thực thể độc lập hoàn toàn với Tâm vương trong việc điều hành nhận thức.",
      "b": "Là tên gọi chung của tám thức Tâm vương khi chúng hoạt động cùng nhau.",
      "c": "Là những pháp thuộc sở hữu của Tâm vương và giúp đỡ Tâm vương tạo nghiệp.",
      "d": "Là các trạng thái vật chất giúp cơ thể nhận biết được thế giới bên ngoài."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Tâm sở không độc lập hoàn toàn mà tùy theo Tâm vương mà khởi [1].",
      "b": "Sai. Tâm sở không phải là tên gọi chung của tám thức Tâm vương [1].",
      "c": "Đúng. 'Tâm sở' nghĩa là pháp sở hữu của Tâm vương, tùy theo Tâm vương mà khởi và giúp đỡ Tâm vương để tạo nghiệp [1].",
      "d": "Sai. Tâm sở không phải là trạng thái vật chất [1]."
    }
  },
  {
    "question": "Đặc điểm 'Biến hành' của 5 món Tâm sở đầu tiên có nghĩa là gì?",
    "options": {
      "a": "Chúng chỉ có mặt trong các thức cảm giác như mắt, tai, mũi, lưỡi, thân.",
      "b": "Chúng đi khắp tất cả thời gian, không gian, các thức và mọi tính chất của tâm.",
      "c": "Chúng là những tâm lý đặc biệt chỉ xuất hiện khi đối diện với cảnh riêng biệt.",
      "d": "Chúng chỉ xuất hiện trong những thời điểm con người làm việc thiện."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Biến hành đi khắp tất cả các thức, không chỉ riêng trong các thức cảm giác [1].",
      "b": "Đúng. Chữ 'Biến hành' nghĩa là đi khắp 4 chỗ: tất cả thời gian, tất cả chỗ, tất cả các thức và tất cả tánh [1].",
      "c": "Sai. Đây là đặc điểm của nhóm Tâm sở Biệt cảnh [2].",
      "d": "Sai. Biến hành đi khắp tất cả tánh gồm cả lành, dữ và không lành dữ [1]."
    }
  },
  {
    "question": "Nghiệp dụng của Tâm sở 'Tưởng' là gì?",
    "options": {
      "a": "Đánh thức các chủng tử của Tâm vương khiến cho chúng sanh khởi.",
      "b": "Bịa đặt ra những danh từ để kêu gọi dựa trên hình tượng của cảnh vật.",
      "c": "Thúc đẩy tâm làm những việc lành hoặc dữ.",
      "d": "Lãnh thọ những cảnh vui, buồn hoặc bình thường."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Đây là nghiệp dụng của Tâm sở 'Tác ý' [3].",
      "b": "Đúng. Nghiệp dụng của 'Tưởng' là bịa đặt ra những danh từ để kêu gọi [2].",
      "c": "Sai. Đây là nghiệp dụng của Tâm sở 'Tư' [2].",
      "d": "Sai. Đây là nghiệp dụng của Tâm sở 'Thọ' [3]."
    }
  },
  {
    "question": "Tâm sở 'Định' trong nhóm Biệt cảnh có vai trò gì đối với sự phát triển của tâm?",
    "options": {
      "a": "Làm chỗ nương cho 'Siêng năng' để đạt được mong muốn.",
      "b": "Giúp tâm ghi nhớ rõ ràng những cảnh tượng đã xảy ra trong quá khứ.",
      "c": "Dứt sạch mọi nghi ngờ và lựa chọn cảnh giới sáng suốt.",
      "d": "Làm chỗ nương cho 'Trí' vì giúp tâm chuyên chú không tán loạn."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Làm chỗ nương cho 'siêng năng' là nghiệp dụng của Tâm sở 'Dục' [2].",
      "b": "Sai. Ghi nhớ rõ ràng những cảnh đã qua là tánh của Tâm sở 'Niệm' [4].",
      "c": "Sai. Dứt sạch nghi ngờ và lựa chọn sáng suốt là đặc tính của Tâm sở 'Huệ' [4].",
      "d": "Đúng. Định khiến tâm chuyên chú không tán loạn, làm chỗ nương cho Trí phát sinh [4]."
    }
  },
  {
    "question": "Sự khác biệt cơ bản giữa Tâm sở 'Tàm' và 'Quý' là gì?",
    "options": {
      "a": "Tàm thuộc về tâm thiện, trong khi Quý thuộc về tâm ác kiến.",
      "b": "Tàm dùng để đối trị tham lam, còn Quý dùng để đối trị sân hận.",
      "c": "Tàm là thẹn với người khác, còn Quý là tự xấu hổ với chính mình.",
      "d": "Tàm là tự mình thấy xấu hổ khi làm sai, còn Quý là thấy thẹn với người khác."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Cả Tàm và Quý đều thuộc Tâm sở Thiện [5], [6].",
      "b": "Sai. Tàm không đối trị tham lam và Quý không đối trị sân hận [5], [6].",
      "c": "Sai. Giải thích này bị ngược ý nghĩa giữa Tàm và Quý [5], [6].",
      "d": "Đúng. Tàm là tự mình xấu hổ khi làm điều quấy [5], còn Quý là thấy người thẹn thùa khi mình làm điều quấy [6]."
    }
  },
  {
    "question": "Tâm sở 'Hành xả' có tác dụng gì trong việc tu tập?",
    "options": {
      "a": "Khi làm việc phước thiện thì không chấp trước, giúp tâm an trụ yên tịnh.",
      "b": "Giúp con người không làm tổn hại đến các loài chúng hữu tình.",
      "c": "Phòng ngừa các việc ác và làm cho các việc lành ở thế gian được viên mãn.",
      "d": "Làm cho thân tâm nhẹ nhàng, thư thới và xa lìa sự nặng nề."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Khi làm các việc phước thiện không chấp trước, Hành xả khiến tâm an trụ nơi yên tịnh [7].",
      "b": "Sai. Không làm tổn hại chúng hữu tình là tánh của Tâm sở 'Bất hại' [7].",
      "c": "Sai. Phòng ngừa việc ác và làm việc lành viên mãn là tánh của Tâm sở 'Bất phóng dật' [8].",
      "d": "Sai. Làm thân tâm nhẹ nhàng thư thới là tánh của Tâm sở 'Khinh an' [8]."
    }
  },
  {
    "question": "Ba món phiền não nào được coi là chướng ngại trực tiếp của 'Giới, Định và Huệ'?",
    "options": {
      "a": "Mạn, Nghi, Ác kiến.",
      "b": "Thân kiến, Biên kiến, Tà kiến.",
      "c": "Tham, Mạn, Nghi.",
      "d": "Tham, Sân, Si."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Các món này không trực tiếp chướng ngại Giới, Định, Huệ [9].",
      "b": "Sai. Đây là các loại Ác kiến [10].",
      "c": "Sai. Mạn và Nghi không nằm trong nhóm 3 món này [9].",
      "d": "Đúng. Ba món phiền não tâm sở Tham, Sân, Si làm chướng ngại ba món Vô lậu là Giới, Định và Huệ [9]."
    }
  },
  {
    "question": "Người cho rằng 'sau khi chết là hết hẳn' (chấp đoạn) hoặc 'chết rồi vẫn còn hoài không đổi' (chấp thường) là mắc vào loại Ác kiến nào?",
    "options": {
      "a": "Biên kiến.",
      "b": "Tà kiến.",
      "c": "Giới cấm thủ.",
      "d": "Thân kiến."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Biên kiến là chấp một bên, chấp chết rồi mất hẳn (chấp đoạn) hoặc chấp Ta chết rồi còn hoài (chấp thường) [10].",
      "b": "Sai. Tà kiến là chấp tà, mê tín, dị đoan [10].",
      "c": "Sai. Giới cấm thủ là chấp giữ theo những giới cấm không chơn chánh [10].",
      "d": "Sai. Thân kiến là chấp Ta (Ngã) [10]."
    }
  },
  {
    "question": "Đặc tính của Tâm sở 'Vô si' là gì?",
    "options": {
      "a": "Lòng tin vào những điều chân thật và đức hạnh của người hiền.",
      "b": "Sự siêng năng đoạn trừ việc ác và làm các việc lành.",
      "c": "Hiểu biết sự lý rành rõ, không mờ ám và đối trị sự si mê.",
      "d": "Sự sáng suốt lựa chọn cảnh giới để dứt bỏ nghi ngờ."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Đây là tánh của Tâm sở 'Tín' [5].",
      "b": "Sai. Đây là tánh của Tâm sở 'Tinh tấn' [5].",
      "c": "Đúng. Tánh của Vô si là khi đối với sự lý hiểu biết rành rõ không mờ ám, nghiệp dụng là đối trị si mê [8].",
      "d": "Sai. Đây là tánh của Tâm sở 'Huệ' [4]."
    }
  },
  {
    "question": "Loại Ác kiến nào thể hiện sự bảo thủ, luôn cho rằng hiểu biết của mình là đúng nhất dù người khác đã chỉ ra cái sai?",
    "options": {
      "a": "Giới cấm thủ.",
      "b": "Tà kiến.",
      "c": "Biên kiến.",
      "d": "Kiến thủ."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Giới cấm thủ là chấp theo những giới cấm ngoại đạo, tục lệ không hay [10].",
      "b": "Sai. Tà kiến là mê tín dị đoan [10].",
      "c": "Sai. Biên kiến là chấp đoạn hoặc chấp thường [10].",
      "d": "Đúng. Kiến thủ là chấp cứng chỗ hiểu biết của mình là đúng, mặc dù có người chỉ ra chỗ sai cũng không nghe [10]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-7-tam-so',
  slug: 'bai-thu-7-tam-so',
  title: 'Bài Thứ 7 - II. Tâm sở',
  type: 'article',
  status: 'published',
  order: 9,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-30',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-7-tam-so/B%E1%BA%A3n_%C4%90%E1%BB%93_51_T%C3%A2m_S%E1%BB%9F.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-bay-tam-so', label: 'Bài Thứ Bảy - II. Tâm sở (có 51 món)' },
        { id: 'khai-niem-tam-so', label: 'Khái niệm Tâm sở', indent: 1 },
        { id: 'sau-loai-tam-so', label: 'Tâm sở có 51 món, chia làm 6 loại', indent: 1 },
        { id: 'tam-so-bien-hanh', label: 'A. Tâm sở Biến hành (5 món)', indent: 1 },
        { id: 'nam-mon-bien-hanh', label: 'Năm món Biến hành', indent: 2 },
        { id: 'tam-so-biet-canh', label: 'B. Tâm sở Biệt cảnh (5 món)', indent: 1 },
        { id: 'nam-mon-biet-canh', label: 'Năm món Biệt cảnh', indent: 2 },
        { id: 'tam-so-thien', label: 'C. Tâm sở Thiện (11 món)', indent: 1 },
        { id: 'muoi-mot-mon-thien', label: 'Mười một món Tâm sở Thiện', indent: 2 },
        { id: 'can-ban-phien-nao', label: 'D. Căn bản phiền não (6 món)', indent: 1 },
        { id: 'sau-mon-can-ban-phien-nao', label: 'Sáu món căn bản phiền não', indent: 2 },
        { id: 'nam-mon-ac-kien', label: 'Năm món Ác kiến', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-7-tam-so/Map_of_Consciousness.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/rDe5eidCiUo',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/0SSCGxWdXV91IUEtuEHWiW?utm_source=generator&si=59b1290e0a484719',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Tâm sở',
    passPercentage: 70,
    questions,
  },
}

export default lesson
