import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP BA</p>
      <p class="mb-2 font-semibold">DUY THỨC TAM THẬP TỤNG DỊ GIẢI</p>
      <h2 id="bai-thu-hai-duy-thuc-tam-thap-tung-di-giai" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ HAI - DUY THỨC TAM THẬP TỤNG DỊ GIẢI</h2>
      <p class="mb-0 italic">Giải về thức Năng biến thứ nhứt: A lại da thức, Dị thục thức và Nhứt thế chủng thức.</p>
    </div>

    <h3 id="chanh-van" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN</h3>
    <p><strong>Hỏi:</strong> Trên đã lược nói cái "tên", nhưng chưa nói rõ cái "tướng" của thức Năng biến; vậy cái "tướng" của thức Năng biến thứ nhứt thế nào?</p>

    <h4 id="nguyen-van-chu-han-so-a-lai-da-thuc" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Tụng viết:</strong></p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Sơ A lại da thức</p>
        <p>Dị thục, Nhứt thế chủng.</p>
      </div>
    </div>

    <h4 id="dich-nghia-so-a-lai-da-thuc" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Luận chủ nói tụng để trả lời rằng: Thức Năng biến thứ nhứt tên là A lại da, cũng gọi là Dị thục thức hay Nhứt thế chủng thức.</p>

    <h3 id="luoc-giai-ba-tuong" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">LƯỢC GIẢI</h3>
    <p>Thức Năng biến thứ nhất có ba tướng:</p>

    <h4 id="tu-tuong-a-lai-da-tang" class="text-lg font-semibold">I. Tự tướng: A lại da, nghĩa là Tàng</h4>
    <p>Tự tướng là cái thể. Tiếng Phạn gọi là "A lại da", Tàu dịch là "Tàng". Chữ Tàng có ba nghĩa:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Năng tàng:</strong> Thức này có công năng chứa tất cả chủng tử (hạt giống) của các Pháp thiện ác; cũng như cái kho có công năng chứa lúa.</li>
      <li><strong>Sở tàng:</strong> Thức này có chỗ để chứa chủng tử của các Pháp; cũng như cái kho là chỗ để chứa lúa.</li>
      <li><strong>Ngã ái chấp tàng:</strong> Thức này thường bị thức thứ Bảy ái luyến chấp làm ngã. Nó như người giữ kho, giữ gìn chẳng cho lúa mất.</li>
    </ul>

    <h4 id="qua-tuong-di-thuc" class="mt-8 text-lg font-semibold">II. Quả tướng: Dị thục thức</h4>
    <p>Quả tướng gọi là "Dị thục thức". Chữ Dị thục có ba nghĩa:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Dị thời nhi thục:</strong> Khác thời mà chín. Dụ như trái xoài, từ khi sanh cho đến khi chín, thời gian khác nhau.</li>
      <li><strong>Dị loại nhi thục:</strong> Khác loài mà chín. Dụ như trái xoài, khi nhỏ tánh chua, đến chín lại ngọt.</li>
      <li><strong>Biến dị nhi thục:</strong> Biến đổi khác chất mà chín. Dụ như trái xoài, khi nhỏ thì xanh, đến khi già chín biến đổi lại vàng.</li>
    </ul>
    <p>Vì thức Dị thục này lãnh thọ thân quả báo, nên gọi là Dị thục quả. Tánh chất của Dị thục quả là vô ký (không nhứt định thiện hay ác); song về nghiệp nhơn đời trước của nó, lại có thiện và ác.</p>
    <p>Bởi lấy nghiệp nhơn (thiện ác) đối với quả (vô ký) mà nói, nên có ba nghĩa: khác thời gian chín, khác loại mà chín và biến đổi chín.</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Dị thục</p>
      <ol class="mb-2 list-decimal space-y-1 pl-6">
        <li>Dị thời nhi thục</li>
        <li>Dị loại nhi thục</li>
        <li>Biến dị nhi thục</li>
      </ol>
      <p class="mb-0 text-sm text-text-muted">Nhơn thuộc thiện, ác; quả thuộc vô ký.</p>
    </div>

    <h4 id="nhon-tuong-nhut-the-chung" class="mt-8 text-lg font-semibold">III. Nhơn tướng: Nhứt thế chủng thức</h4>
    <p>Nhơn tướng gọi là Nhứt thế chủng thức. Tất cả các pháp hiện tượng (hiện hành) trong thế gian và xuất thế gian, đều có chủng tử (công năng tiềm tàng) của nó. Các chủng tử này đều chứa trong thức thứ Tám (tàng thức).</p>
    <p>Các chủng tử là "nhơn" khởi hiện ra các Pháp là "quả". Vì theo "nhơn tướng" (chủng tử), nên gọi thức này là "Nhứt thế chủng".</p>

    <h3 id="bat-kha-tri-chap-tho" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">BẤT KHẢ TRI CHẤP THỌ</h3>

    <h4 id="nguyen-van-chu-han-bat-kha-tri" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Bất khả tri chấp thọ</p>
        <p>Xứ liễu thường dữ xúc</p>
        <p>Tác ý thọ tưởng tư</p>
        <p>Tương ưng duy xả thọ</p>
      </div>
    </div>

    <h4 id="dich-nghia-bat-kha-tri" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Không thể biết hành tướng năng duyên và công năng giữ gìn chủng tử, lãnh thọ thân thể và thế giới của thức này được. Thức này thường tương ưng với năm món biến hành là: xúc, tác ý, thọ, tưởng và tư. Song trong các thọ, nó chỉ tương ưng với xả thọ.</p>

    <h4 id="luoc-giai-bat-kha-tri" class="text-lg font-semibold">Lược giải</h4>
    <p>Hành tướng thức Năng biến thứ nhứt rất là tế nhị. Bởi người đời tâm thô không thể biết được, nên nói "Bất khả tri".</p>
    <p>Những việc của thức này mà người đời không thể biết được, có hai phần:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Thức này giữ gìn chủng tử, thế giới, thân thể và làm cho thân thể sanh ra cảm giác, lãnh thọ; nghĩa là thức thứ Tám này biến hiện ra thế giới và chúng sanh rồi giữ gìn không cho mất. Đây là điều khó biết thứ nhứt.</li>
      <li>Hành tướng năng duyên (liễu) của thức này rất sâu xa và tế nhị. Đây là điều khó biết thứ hai.</li>
    </ol>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Không thể biết duyên của thức này</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Kiến phần năng duyên:</strong> phần liễu biệt rất sâu xa, tế nhị.</li>
        <li><strong>Tướng phần bị duyên:</strong> gồm chủng tử, thân thể (chấp thọ) và thế giới (xứ).</li>
      </ul>
    </div>

    <h4 id="tam-vuong-va-tam-so" class="mt-8 text-lg font-semibold">Tâm vương và Tâm sở</h4>
    <p>Tám thức, phân làm ba món năng biến, đều có quyền tự chủ, tự tại; cũng như vị Quốc Vương, nên gọi là Tâm vương. Song như vị Quốc vương phải có quần thần phụ tá, thì mới có thể giữ nước trị dân. Tâm vương cũng phải có bộ hạ tuỳ tùng để giúp đỡ mới hay tạo ra các nghiệp.</p>
    <p>Những bộ hạ tuỳ tùng ấy lệ thuộc Tâm vương, không được tự tại, nên gọi "Tâm sở", hoặc gọi là "Tâm sở hữu"; nghĩa là cái sở hữu của Tâm vương.</p>
    <p>Lại nữa, Tâm sở đã giúp Tâm vương tạo nghiệp, thì Tâm vương với Tâm sở phải ưng thuận với nhau nên gọi là tương ưng.</p>

    <h4 id="nam-tam-so-bien-hanh" class="mt-8 text-lg font-semibold">Năm Tâm sở Biến hành tương ưng với thức này</h4>
    <p><strong>Hỏi:</strong> Có mấy Tâm sở tương ưng với thức này?</p>
    <p><strong>Đáp:</strong> Chỉ có năm món biến hành thường tương ưng với thức này là: Xúc, Tác ý, Thọ, Tưởng và Tư.</p>

    <h5 id="xuc" class="text-base font-semibold">Xúc</h5>
    <p>Xúc là tiếp xúc. Như con mắt xem hoa, khi mới vừa tiếp xúc với hoa; đó là tác dụng của Xúc Tâm sở. Thí như hai người đồng đi một con đường; một người đi từ phương Đông đến phương Tây, một người đi từ phương Tây đến phương Đông; hai người gặp nhau một chỗ, gọi đó là xúc.</p>
    <p>Một thí dụ nữa, như môn Kỷ hà học: trên cái hình tròn gạch qua một đường, chỗ đụng nhau một chỗ trên đường gạch, đó là xúc.</p>

    <h5 id="tac-y" class="text-base font-semibold">Tác ý</h5>
    <p>Tác ý là móng khởi cái ý. Như khi muốn xem hoa, trước nhứt móng khởi cái ý; đó là "Tác ý Tâm sở". Rồi nó dẫn dắt nhãn thức xem hoa. Nếu không có tác dụng của Tâm sở này, thì dù có gặp hoa cũng không thấy.</p>
    <p>Người đời có khi đi ngang qua vườn đầy hoa, mà không thấy hoa. Như thế là vì trong lúc đó, Tâm sở tác ý không có tương ưng với nhãn thức.</p>

    <h5 id="tho" class="text-base font-semibold">Thọ</h5>
    <p>Thọ là lãnh thọ. Như khi thấy hoa, có sự cảm thọ vui buồn.</p>

    <h5 id="tuong" class="text-base font-semibold">Tưởng</h5>
    <p>Tưởng là tưởng tượng. Như sau khi thấy hoa, rồi tưởng tượng hình tướng của hoa đỏ hay vàng, tốt hay xấu.</p>

    <h5 id="tu" class="text-base font-semibold">Tư</h5>
    <p>Tư là lo nghĩ, tạo tác. Như nhơn thấy hoa, rồi lo nghĩ trồng hoa hay bẻ hoa.</p>

    <h4 id="ba-loai-tho" class="mt-8 text-lg font-semibold">Ba loại Thọ Tâm sở</h4>
    <p>Lại nữa, "Thọ Tâm sở" có 3 loại:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Lạc thọ:</strong> Thọ vui. Khi gặp cảnh thuận, như được người khen ngợi, thì cảm thọ vui mừng.</li>
      <li><strong>Khổ thọ:</strong> Thọ khổ. Khi gặp cảnh nghịch, như bị người huỷ báng hạ nhục, thì cảm thọ buồn khổ.</li>
      <li><strong>Xả thọ:</strong> Thọ cảnh không vui buồn. Khi gặp cảnh bình thường không thuận nghịch, như trong lúc không được khen hay bị chê, thì cảm thọ không vui buồn.</li>
    </ul>
    <p>Tóm lại, thức thứ Tám này tương ưng với 5 món Tâm sở Biến hành và hành tướng của nó rất là tế nhị, không có hiện ra khổ và vui, nên chỉ tương ưng với xả thọ.</p>

    <h3 id="vo-phu-vo-ky" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">VÔ PHÚ VÔ KÝ</h3>

    <h4 id="nguyen-van-chu-han-vo-phu-vo-ky" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thị vô phú vô ký</p>
        <p>Xúc đẳng diệc như thị</p>
      </div>
    </div>

    <h4 id="dich-nghia-vo-phu-vo-ky" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Tánh của thức này là vô phú vô ký, nên những Tâm sở tương ưng với nó, như Xúc, Tác ý... cũng vô phú vô ký.</p>

    <h4 id="luoc-giai-vo-phu-vo-ky" class="text-lg font-semibold">Lược giải</h4>
    <p>Tánh của các pháp, tóm lại có 3 loại: tánh thiện, tánh ác và tánh vô ký (không thiện không ác).</p>
    <p>Tánh vô ký lại chia làm 2 loại: Vô phú vô ký và Hữu phú vô ký. Thí như mặt gương, không phải thiện ác, dụ cho "tánh vô ký"; khi bị bụi che lấp ánh sáng, dụ cho "tánh hữu phú vô ký". Đến lúc lau chùi sạch bụi, dụ cho "tánh vô phú vô ký".</p>
    <p>Tóm lại, thức thứ Tám này không bị các phiền não ngăn che, nên thuộc về tánh vô phú vô ký. Và những Tâm sở tương ưng với thức này, như Xúc, Tác ý... cũng thuộc về tánh vô phú vô ký.</p>

    <h3 id="hang-chuyen-nhu-boc-luu" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">HẰNG CHUYỂN NHƯ BỘC LƯU</h3>

    <h4 id="nguyen-van-chu-han-boc-luu" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-0 italic">Hằng chuyển như bộc lưu</p>
    </div>

    <h4 id="dich-nghia-boc-luu" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Hằng chuyển biến như dòng nước chảy mạnh.</p>

    <h4 id="luoc-giai-boc-luu" class="text-lg font-semibold">Lược giải</h4>
    <p>Ngoại đạo chấp các pháp thường còn không mất, như thế gọi là chấp "thường"; hoặc chấp chết rồi mất hẳn, như thế gọi là chấp "đoạn".</p>
    <p>Nhà Duy thức nói: từ vô thỉ đến nay, thức này hằng chuyển biến luôn, mỗi niệm sanh diệt tương tục không gián đoạn. Cũng như nước thác, từ trên núi cao đổ xuống, một dãy trắng xoá; ở xa trông như tấm vải trắng.</p>
    <p>Vì nó hằng chảy luôn, nên chẳng phải "đoạn diệt". Song nó liên kết tiếp tục nhiều giọt, biến chuyển sanh diệt luôn, nên không phải "thường nhứt".</p>

    <h3 id="a-la-han-vi-xa" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">A LA HÁN VỊ XẢ</h3>

    <h4 id="nguyen-van-chu-han-a-la-han" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-0 italic">A la hán vị xả</p>
    </div>

    <h4 id="dich-nghia-a-la-han" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Đến vị A la hán mới xả bỏ thức này (tàng thức).</p>

    <h4 id="luoc-giai-a-la-han" class="text-lg font-semibold">Lược giải</h4>
    <p><strong>Hỏi:</strong> Thức này, đã sanh diệt tương tục, là gốc của sanh tử luân hồi, vậy phải tu đến địa vị nào mới xả bỏ nó được?</p>
    <p><strong>Đáp:</strong> Người tu hành đoạn hết phiền não chướng, đến quả vị A la hán, mới xả bỏ được thức "A lại da". Song chỉ xả bỏ cái "danh", chớ không phải xả bỏ cái "thể" của thức này.</p>
    <p><strong>Hỏi:</strong> Tại sao không xả bỏ cái "thể" của thức này?</p>
    <p><strong>Đáp:</strong> Cái "thể" của thức này có hai phần: nhiễm và tịnh. Phần tịnh tức là "Trí". Trong bài tụng nói "xả bỏ thức này", tức là chuyển thức thành trí, chớ không phải xả bỏ. Nếu xả bỏ cái "thể" của thức này, thì thành ra đoạn diệt, thuộc về ngoại đạo. Trong Đạo Phật không có chủ trương đoạn diệt (mất hẳn).</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Trong ba nghĩa của chữ \"Tàng\" thuộc Tự tướng của thức A lại da, \"Năng tàng\" được hiểu như thế nào?",
    "options": {
      "a": "Thức này là nơi chứa đựng các chủng tử của các pháp.",
      "b": "Thức này bị thức thứ Bảy ái luyến và chấp làm bản ngã.",
      "c": "Thức này có công năng chứa nhóm tất cả hạt giống thiện và ác.",
      "d": "Thức này biến đổi từ nhân thiện ác thành quả vô ký."
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Thức là \"chỗ để chứa\" thuộc về nghĩa của \"Sở tàng\" [1].",
      "b": "Sai. Đây là nghĩa của \"Ngã ái chấp tàng\", tức là bị thức thứ Bảy ái luyến chấp làm ngã [1].",
      "c": "Đúng. Năng tàng là công năng chứa tất cả chủng tử (hạt giống) của các pháp thiện ác giống như cái kho có công năng chứa lúa [1].",
      "d": "Sai. Đây là đặc điểm của \"Dị thục thức\" thuộc Quả tướng, không phải Tự tướng [1, 2]."
    }
  },
  {
    "question": "Tại sao thức A lại da còn được gọi là \"Dị thục thức\" về mặt Quả tướng?",
    "options": {
      "a": "Vì nó mang tính chất thiện hoặc ác tùy thuộc vào nghiệp nhân.",
      "b": "Vì quả báo mà nó lãnh thọ có sự khác biệt về thời gian, tính chất và sự biến đổi so với nhân.",
      "c": "Vì nó chỉ chứa các hạt giống đã chín mùi qua nhiều kiếp.",
      "d": "Vì nó biểu hiện sự trưởng thành của tâm thức qua ba giai đoạn khác nhau."
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Tính chất của Dị thục quả là \"vô ký\" (không nhất định thiện hay ác), chỉ có nghiệp nhân đời trước mới là thiện hay ác [2].",
      "b": "Đúng. Dị thục có nghĩa là khác thời gian (Dị thời nhi thục), khác loại (Dị loại nhi thục) và biến đổi khác chất (Biến dị nhi thục) từ khi là nhân cho đến khi thành quả [1, 2].",
      "c": "Sai. Khía cạnh chứa hạt giống là đặc tính \"Nhứt thế chủng thức\" thuộc Nhơn tướng [3].",
      "d": "Sai. Tài liệu không đề cập đến việc tâm thức trưởng thành qua 3 giai đoạn [1, 2]."
    }
  },
  {
    "question": "Đặc tính \"Vô phú vô ký\" của thức thứ Tám có ý nghĩa gì?",
    "options": {
      "a": "Nó không bị phiền não ngăn che và không có tính chất thiện hay ác nhất định.",
      "b": "Nó là cội nguồn của mọi điều ác nhưng có thể được lau sạch như gương.",
      "c": "Nó hoàn toàn thiện và không bao giờ bị ô nhiễm bởi các pháp thế gian.",
      "d": "Nó bị các phiền não ngăn che nhưng không có tính thiện ác."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. \"Vô ký\" nghĩa là không thiện không ác, \"Vô phú\" nghĩa là không bị các phiền não ngăn che [4, 5].",
      "b": "Sai. Nó vốn mang tánh vô ký (không thiện không ác), nên không phải là cội nguồn của mọi điều ác [4].",
      "c": "Sai. Nó không mang tánh thiện mà mang tánh vô ký (không thiện không ác) [4].",
      "d": "Sai. Đặc tính bị phiền não ngăn che được gọi là \"Hữu phú vô ký\", hoàn toàn khác với \"Vô phú vô ký\" [4]."
    }
  },
  {
    "question": "Hình ảnh \"Bộc lưu\" (dòng nước thác) được dùng để mô tả tính chất nào của thức A lại da?",
    "options": {
      "a": "Sự biến chuyển sinh diệt liên tục và tiếp nối không gián đoạn của các niệm.",
      "b": "Tính chất vĩnh hằng, không bao giờ thay đổi của linh hồn.",
      "c": "Sự đứt đoạn hoàn toàn của tâm thức sau khi chết.",
      "d": "Sự trôi lăn vô định của các chủng tử trong thế giới vật chất."
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Thức này hằng chuyển biến, mỗi niệm sanh diệt tương tục không gián đoạn giống như dòng thác nước từ trên núi đổ xuống liên tục (bộc lưu) [5].",
      "b": "Sai. Thức này hằng biến chuyển sanh diệt luôn nên không phải \"thường nhứt\" hay vĩnh hằng không thay đổi [5].",
      "c": "Sai. Thức này hằng chảy luôn (tương tục) nên không phải là \"đoạn diệt\" [5].",
      "d": "Sai. Dòng thác được dùng để chỉ sự chuyển biến của tâm thức (thức A lại da), không phải thế giới vật chất [5]."
    }
  },
  {
    "question": "Tâm sở nào trong năm món Biến hành có chức năng \"lo nghĩ, tạo tác\" dẫn đến việc tạo nghiệp?",
    "options": {
      "a": "Thọ",
      "b": "Xúc",
      "c": "Tư",
      "d": "Tưởng"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Thọ là sự lãnh thọ (cảm thọ) vui, buồn, hoặc không vui không buồn [6, 7].",
      "b": "Sai. Xúc là sự tiếp xúc (như khi hai người gặp nhau hay con mắt vừa tiếp xúc với hoa) [8].",
      "c": "Đúng. Tâm sở Tư mang ý nghĩa là \"lo nghĩ, tạo tác\", chẳng hạn như thấy hoa rồi lo nghĩ đến việc trồng hoa hay bẻ hoa [7].",
      "d": "Sai. Tưởng là sự tưởng tượng hình tướng của sự vật sau khi thấy [7]."
    }
  },
  {
    "question": "Theo lược giải, tại sao khi đạt đến quả vị A la hán, hành giả được nói là \"xả bỏ\" thức này?",
    "options": {
      "a": "Vì thức thứ Tám sẽ nhập vào hư không và không còn hoạt động.",
      "b": "Vì lúc đó thể của thức thứ Tám hoàn toàn biến mất.",
      "c": "Vì các chủng tử thiện ác đã bị tiêu hủy hoàn toàn.",
      "d": "Vì hành giả đã chuyển đổi cái tên và phần nhiễm ô của thức thành Trí."
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Đạo Phật không có chủ trương đoạn diệt (mất hẳn vào hư không) [9].",
      "b": "Sai. Ở quả vị A la hán, người tu chỉ xả bỏ cái \"danh\" (tên) chớ không phải xả bỏ cái \"thể\" của thức [9].",
      "c": "Sai. Tài liệu không nói tiêu hủy hoàn toàn mọi chủng tử, chỉ đoạn hết phiền não chướng [9].",
      "d": "Đúng. Cái thể của thức gồm phần nhiễm và tịnh. Việc \"xả bỏ\" tức là xả bỏ phần nhiễm và chuyển phần tịnh thành Trí (chuyển thức thành trí) [9]."
    }
  },
  {
    "question": "Trong ví dụ về việc đi ngang qua vườn hoa mà không thấy hoa, tâm sở nào đã không tương ưng với nhãn thức?",
    "options": {
      "a": "Xúc",
      "b": "Tác ý",
      "c": "Thọ",
      "d": "Tưởng"
    },
    "answer": "b",
    "explanation": {
      "a": "Sai. Xúc là sự tiếp xúc ban đầu, nhưng để thấy được cần có Tác ý dẫn dắt [6, 8].",
      "b": "Đúng. Tác ý là móng khởi ý niệm dẫn dắt nhãn thức. Khi đi ngang vườn hoa mà không thấy hoa là do lúc đó tâm sở tác ý không tương ưng với nhãn thức [6].",
      "c": "Sai. Thọ là sự cảm nhận xảy ra khi và sau khi đã nhận biết được hoa [6, 7].",
      "d": "Sai. Tưởng là sự tưởng tượng hình dáng, màu sắc, chỉ diễn ra sau khi đã thấy [7]."
    }
  },
  {
    "question": "Thức thứ Tám được gọi là \"Nhứt thế chủng thức\" dựa trên phương diện nào?",
    "options": {
      "a": "Hành tướng",
      "b": "Tự tướng",
      "c": "Nhơn tướng",
      "d": "Quả tướng"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Hành tướng của thức này được mô tả là không thể biết (bất khả tri), khó nhận biết năng duyên và giữ gìn chủng tử [10].",
      "b": "Sai. Về phương diện Tự tướng, thức này được gọi là \"A lại da\" hay \"Tàng\" [11].",
      "c": "Đúng. Về phương diện Nhơn tướng, thức này chứa các chủng tử làm \"nhơn\" khởi ra các Pháp làm quả, nên được gọi là \"Nhứt thế chủng thức\" [3].",
      "d": "Sai. Về phương diện Quả tướng, thức này được gọi là \"Dị thục thức\" [1]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-2-duy-thuc-tam-thap-tung',
  slug: 'bai-thu-2-duy-thuc-tam-thap-tung',
  title: 'Bài Thứ 2 - Duy Thức Tam Thập Tụng Dị Giải',
  type: 'article',
  status: 'published',
  order: 20,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-07',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-2-duy-thuc-tam-thap-tung/Th%E1%BB%A9c_A-l%E1%BA%A1i-da__C%C4%83n_b%E1%BA%A3n.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-hai-duy-thuc-tam-thap-tung-di-giai', label: 'Bài Thứ Hai - Duy Thức Tam Thập Tụng Dị Giải' },
        { id: 'chanh-van', label: 'Chánh văn', indent: 1 },
        { id: 'nguyen-van-chu-han-so-a-lai-da-thuc', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-so-a-lai-da-thuc', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-ba-tuong', label: 'Lược giải', indent: 1 },
        { id: 'tu-tuong-a-lai-da-tang', label: 'I. Tự tướng: A lại da', indent: 2 },
        { id: 'qua-tuong-di-thuc', label: 'II. Quả tướng: Dị thục thức', indent: 2 },
        { id: 'nhon-tuong-nhut-the-chung', label: 'III. Nhơn tướng: Nhứt thế chủng thức', indent: 2 },
        { id: 'bat-kha-tri-chap-tho', label: 'Bất khả tri chấp thọ', indent: 1 },
        { id: 'nguyen-van-chu-han-bat-kha-tri', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-bat-kha-tri', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-bat-kha-tri', label: 'Lược giải', indent: 2 },
        { id: 'tam-vuong-va-tam-so', label: 'Tâm vương và Tâm sở', indent: 2 },
        { id: 'nam-tam-so-bien-hanh', label: 'Năm Tâm sở Biến hành', indent: 2 },
        { id: 'ba-loai-tho', label: 'Ba loại Thọ Tâm sở', indent: 2 },
        { id: 'vo-phu-vo-ky', label: 'Vô phú vô ký', indent: 1 },
        { id: 'nguyen-van-chu-han-vo-phu-vo-ky', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-vo-phu-vo-ky', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-vo-phu-vo-ky', label: 'Lược giải', indent: 2 },
        { id: 'hang-chuyen-nhu-boc-luu', label: 'Hằng chuyển như bộc lưu', indent: 1 },
        { id: 'nguyen-van-chu-han-boc-luu', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-boc-luu', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-boc-luu', label: 'Lược giải', indent: 2 },
        { id: 'a-la-han-vi-xa', label: 'A la hán vị xả', indent: 1 },
        { id: 'nguyen-van-chu-han-a-la-han', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-a-la-han', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-a-la-han', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-2-duy-thuc-tam-thap-tung/To%C3%A0n_C%E1%BA%A3nh_A_L%E1%BA%A1i_Da.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/6Qqlomhf2GY',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/6hzW0q1i7zXjzyVsh5H7C6?utm_source=generator&si=65192b6b1d7b48a9',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Duy Thức Tam Thập Tụng Dị Giải Bài 2',
    passPercentage: 70,
    questions,
  },
}

export default lesson
