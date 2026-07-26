import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ NĂM · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="noi-ve-nghia-bat-giac" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">2. Nói về nghĩa "Bất giác" (không giác ngộ: mê)</h2>
    </div>

    <h4 id="chanh-van-bat-giac" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Do không thật biết pháp "Chơn như" nên tâm bất giác (mê) nổi lên, liền khởi vọng niệm (sanh tướng vô minh). Song vọng niệm vì là không có thật thể, nên chẳng rời Bản giác.</p>
    <p>Thí như người lầm phương hướng; vì có phương hướng nên mới lầm, nếu không phương hướng thì không có lầm.</p>
    <p>Chúng sanh cũng thế, do có "Giác" nên mới có "Mê"; nếu không có "Giác" thì cũng không có "Mê" (Bất giác).</p>
    <p>Song chúng sanh cũng nhờ có "Tâm vọng tưởng bất giác" này, nên mới biết phân biệt danh từ và nghĩa lý của các pháp. Và cũng nhờ thế mà chư Phật mới có thể vì chúng sanh nói ra "Chơn giác" (tánh Phật). Nếu lìa "Tâm bất giác" thì cũng không thể chỉ bày cái "Chơn giác" được (dụ như lìa sóng không có nước).</p>

    <h4 id="luoc-giai-bat-giac" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Chúng sanh vì không ngộ được Phật tánh (bản giác) nên gọi là mê (bất giác). Song cái "mê" này không có thật thể, chỉ lấy Phật tánh làm thể, nên không rời Phật tánh (bản giác) được. Cũng như người lầm đường, do có con đường nên mới có lầm, nếu không có con đường thì cũng không có sự lầm lạc. Bởi thế nên, nếu rời Phật tánh (bản giác) thì cũng không có cái mê (bất giác). Cũng như bỏ sóng, không có nước.</p>
    <p>Song, cũng nhờ có cái mê vọng (bất giác) này, nên chúng sanh mới biết phân biệt các pháp chơn vọng, thánh phàm và nhàm chán cảnh khổ sanh tử, ham mộ thú vui "Niết bàn".</p>
    <p>Và cũng nhờ chúng sanh có biết phân biệt, nên chư Phật mới có thể thuyết pháp giảng dạy, chỉ bày Phật tánh (chơn giác). Nếu không có tâm mê vọng bất giác phân biệt của chúng sanh, thì Phật cũng không làm sao chỉ bày Phật tánh (chơn giác) cho chúng sanh được.</p>
    <p>Đọc qua đoạn văn này, chúng ta nên lưu ý đến câu: "Vì không ngộ được Phật tánh, nên gọi là mê" hay đổi lại cách nói "Tại sao có dại? Vì chưa khôn vậy". Vậy thì cái mê dại (vô minh) này, sẵn có từ hồi nào đến giờ, vì từ hồi nào đến giờ chúng sanh chưa từng ngộ được Phật tánh.</p>
    <p>Nói tóm lại, chơn như với vô minh đồng thời có, không phải chơn như có trước, vô minh có sau. Khi chơn như (Phật tánh) hiện, thì vô minh mất, cũng như khi "khôn" rồi, thì "dại" tự hết.</p>

    <h4 id="giai-danh-tu-bat-giac" class="mt-6 text-lg font-semibold">Giải danh từ</h4>
    <p><strong>"Bất giác":</strong> không biết. Thật ra không phải là không biết; vẫn có biết, song cái "biết" ấy hư vọng, chẳng chơn thật, nên cũng gọi là "vọng niệm" hay "vô minh" v.v..</p>
    <p><strong>"Không thật biết":</strong> Chúng sanh vẫn biết được chơn như hay Phật tánh; song chỉ biết suông trên văn tự, do ý thức phân biệt hư dối mà thôi; chứ không biết đúng như thật.</p>
    <p class="italic text-text-muted">(Đoạn này nói về căn bản vô minh (bất giác), tiếp sau đây sẽ nói đến chi mạt vô minh (tam tế, lục thô)).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="noi-ve-tam-te" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">a. Nói về Tam tế</h3>
    </div>

    <h4 id="chanh-van-tam-te" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Và, do "Bất giác" (căn bản vô minh) nên sanh ra ba tướng rất vi tế (tam tế: chi mạt vô minh); ba tướng vi tế này không rời "Bất giác".</p>
    <p id="nghiep-tuong"><strong>Tướng nghiệp vô minh (Nghiệp tướng):</strong> vì "Bất giác" (hoặc) cho nên tâm động, gọi đó là "Nghiệp". Bởi thế nghiệp (nhơn) nên có "khổ" (quả). Trái lại, nếu "Giác" (không có hoặc) thì tâm không động (nghiệp nhơn) nên cũng không khổ (quả).</p>
    <p id="chuyen-tuong"><strong>Tướng năng kiến (Chuyển tướng, tức là kiến phần):</strong> Vì có "Động" (nghiệp tướng) cho nên sanh ra "Năng phân biệt" (năng kiến). Nếu không "Động" thì không có "Năng phân biệt" (không có nghiệp tướng thì cũng không có chuyển tướng).</p>
    <p id="hien-tuong"><strong>Tướng cảnh giới (Hiện tướng, tức là tướng phần):</strong> Vì có "Năng phân biệt" (kiến phần) nên cảnh bị phân biệt (tướng phần) vọng hiện ra. Bởi thế nên rời "Năng phân biệt" (kiến phần) thì cũng không có cảnh bị phân biệt (nghĩa là nếu không có chuyển tướng thì cũng không có hiện tướng).</p>

    <h4 id="luoc-giai-tam-te" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này nói: Vô minh sanh ra 3 tướng rất vi tế: Nghiệp, Chuyển và Hiện; ba tướng này không rời vô minh.</p>
    <p>1. Vì vô minh (bất giác) cho nên tâm động tức là "Nghiệp". Đó là tướng vi tế thứ nhứt, gọi là "Tướng nghiệp vô minh", cũng gọi là "Hoặc, Chuyển"; bên Duy thức tôn gọi là "Tự chứng phần" của thức A lại da.</p>
    <p>Do "Hoặc" (vô minh) nên tạo "Nghiệp" (tâm động); bởi có "nghiệp" nên phải thọ "quả khổ". Trái lại, nếu giác ngộ không mê hoặc (vô minh) thì không tạo nghiệp (vọng động); không tạo nghiệp nên chẳng có quả khổ.</p>
    <p>Tất cả quả khổ, không ngoài hai món sanh tử: Phàm phu thì bị khổ "Phần đoạn sanh tử"; Tiểu thánh thì bị khổ "Biến dịch sanh tử". Song hai món quả khổ này, đều do "động niệm" mà có; nếu hành giả được "vô niệm" (không vọng niệm), thì chơn tâm hiện, tức là hướng về trí Phật.</p>
    <p>2. Vì tâm động (nghiệp tướng) cho nên mới có phân biệt. Đó là tướng vi tế thứ hai, gọi là "Tướng năng kiến" (phần năng phân biệt), cũng gọi là "Chuyển tướng"; bên Duy thức tôn gọi là kiến phần của thức A lại da. Nếu tâm không vọng động, thì cũng không do đâu mà phát sanh ra phân biệt được. Nghĩa là: Nếu không có "nghiệp tướng" thì cũng không có "chuyển tướng"; hay nói cách khác: nếu không có "Tự chứng phần" thì cũng không có "Kiến phần".</p>
    <p>3. Vì có tâm năng phân biệt, nên mới vọng hiện ra cảnh giới bị phân biệt. Đó là tướng vi tế thứ ba, gọi là "Tướng cảnh giới" (phần bị phân biệt) cũng gọi là "Hiện tướng"; bên Duy thức tôn gọi là "Tướng phần" của thức A lại da. Bởi tâm và cảnh không rời nhau, nếu lìa tâm năng phân biệt thì không có cảnh giới bị phân biệt. Nghĩa là: rời "Chuyển tướng" thì không có "Hiện tướng"; hay nói cách khác: rời "Kiến phần" thì không có "Tướng phần".</p>
    <p>Từ thể tánh chơn tâm, không có năng sở (bỉ, thử); song vì mê nên tâm động (nghiệp tướng) mà sanh ra có năng phân biệt (chuyển tướng) và cảnh giới bị phân biệt (hiện tướng). Nếu giác ngộ không mê, thì tâm không động, không sanh, và cảnh bị phân biệt chẳng hiện.</p>
    <p>Đoạn này xin lưu ý độc giả: Trong luận này nói "Do nghiệp tướng sanh ra chuyển tướng, do chuyển tướng sanh ra hiện tướng". Nói như thế, là lấy theo nghĩa "tương quan, tương sanh" mà nói. Kỳ thật ba tướng này, đồng thời sanh khởi; nghĩa là một pháp vừa động, thì tất cả pháp đều động, không phải có thứ lớp tuần tự như vậy.</p>
    <p>Tóm lại, ba tướng "Nghiệp tướng, Chuyển tướng và Hiện tướng" này, ở các kinh khác, cũng thường gọi là "Hoặc, Nghiệp và Khổ", hay trong Duy thức gọi là "Tự chứng phần, Kiến phần và Tướng phần" của thức A lại da.</p>

    <h4 id="giai-danh-tu-tam-te" class="mt-6 text-lg font-semibold">Giải danh từ</h4>
    <p><strong>Bất giác và vô minh:</strong> "Vô minh" là không sáng suốt, "Bất giác" là không giác ngộ. Bởi thế nên bất giác cũng tức là vô minh.</p>
    <p><strong>Tướng nghiệp vô minh:</strong> Vô minh vọng động thành ra tướng nghiệp, gọi tắt là "Nghiệp tướng"; tức là "Tự chứng phần" của thức A lại da.</p>
    <p><strong>Tướng Năng kiến:</strong> Phần năng phân biệt, cũng gọi là "Chuyển tướng"; tức là "Kiến phần" của thức A lại da.</p>
    <p><strong>Tướng cảnh giới:</strong> Cảnh giới bị phân biệt, cũng gọi là "Hiện tướng"; tức là "Tướng phần" của thức A lại da.</p>
    <p><strong>Biến dịch sanh tử:</strong> Sanh tử do sự biến đổi. Như vị Tu đà hoàn, khi chứng lên quả Tư đà hàm (sanh) thì xả vị Tu đà hoàn (tử); khi lên vị A na hàm, thì bỏ quả Tư đà hàm v.v... Thí như người Lính, khi lên Cai thì bỏ Lính, lên Đội thì bỏ Cai v.v...</p>
    <p><strong>Tự chứng phần:</strong> Duy thức tôn nói: Mỗi người có 8 món Tâm vương và 51 món Tâm sở. Mỗi một Tâm vương hay Tâm sở đều có 4 phần: 1. Phần bị phân biệt (tướng phần), 2. Phần năng phân biệt (Kiến phần); Hai phần này thuộc về Dụng, ở bên ngoài. 3. Phần tự chứng và 4. Phần chứng tự chứng; hai phần này thuộc về thể, ở bên trong và làm chỗ nương cho hai phần ngoài.</p>
    <p><strong>Tương quan tương sanh:</strong> Liên quan với nhau và sanh cùng nhau, có cái này thì phải có cái kia.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="noi-ve-luc-tho" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">b. Nói về Lục thô</h3>
    </div>

    <h4 id="chanh-van-luc-tho" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Do đã có cảnh giới hiện ra (Hiện tướng) nên tiếp tục sanh sáu tướng sau này:</p>
    <p id="tri-tuong"><strong>Tướng Trí (Trí tướng: Phân biệt):</strong> Do có cảnh giới hiện ra nên sanh tâm phân biệt (trí) thương, ghét.</p>
    <p id="tuong-tuc-tuong"><strong>Tướng tương tục (Tương tục tướng: Vọng niệm tương tục):</strong> Do tâm phân biệt thương ghét, cho nên tiếp tục sanh ra các niệm khổ vui, mừng lo v.v... không dứt.</p>
    <p id="chap-thu-tuong"><strong>Tướng chấp thủ (Chấp thủ tướng: Chấp sự vật):</strong> Do các niệm tương tục phân biệt những cảnh khổ vui, cho nên tâm mới vướng mắc, chấp lấy nơi sự vật (cảnh).</p>
    <p id="ke-danh-tu-tuong"><strong>Tướng chấp danh tự (Kế danh tự tướng: Chấp danh tự):</strong> Do phân biệt vọng chấp nơi sự vật, nên giả đặt ra những danh tự để kêu gọi.</p>
    <p id="khoi-nghiep-tuong"><strong>Tướng khởi nghiệp (Khởi nghiệp tướng: Tướng tạo nghiệp):</strong> Do chấp theo danh tự tốt xấu đó, rồi tạo ra các nghiệp lành hay dữ.</p>
    <p id="nghiep-he-kho-tuong"><strong>Tướng nghiệp hệ khổ (Nghiệp hệ khổ tướng: Thọ quả khổ):</strong> Do tạo ra các nghiệp, nên bị các nghiệp kéo dẫn đi lãnh thọ quả khổ, không được tự tại.</p>
    <p>Tóm lại, phải biết: Gốc từ vô minh (căn bản vô minh) sanh ra các pháp nhiễm ô (chi mạt vô minh) nên các pháp nhiễm ô đều là vô minh (bất giác).</p>

    <h4 id="luoc-giai-luc-tho" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này nói về 6 món thô (lục thô). Do từ vô minh vọng động (Tự chứng phần của thức A lại da) khởi ra tâm (Kiến phần của thức A lại da) và cảnh (Tướng phần của thức A lại da) là ba món vi tế, rồi tiếp tục sanh khởi 6 món thô sau này:</p>
    <p>Vì có cảnh giới (hiện tướng) nên tâm phân biệt tốt xấu, rồi sanh ra thương (tham) ghét (sân) v.v... gọi là "Tướng trí", chữ "Trí" là biết phân biệt tốt xấu.</p>
    <p>Do tâm biết phân biệt tốt xấu v.v... nên các niệm thương ghét, mừng giận, khổ vui v.v... tiếp tục sanh khởi không gián đoạn, gọi là "Tướng tương tục".</p>
    <p>Do các niệm thương ghét, mừng giận, khổ vui, nên sanh tâm chấp lấy: Cái gì vui thích thì tham luyến, còn buồn khổ thì sân hận, gọi là "Tướng chấp thủ".</p>
    <p>Do sanh tâm chấp cảnh, nên giả đặt ra những danh từ để kêu gọi, cái này đẹp, cái kia xấu v.v... gọi là "Tướng kế danh tự".</p>
    <p>Do có những danh tự kêu gọi đẹp xấu v.v... nên sanh tâm tham lam, giận ghét, và vì thế mà tạo ra cái nghiệp, gọi là "Tướng khởi nghiệp".</p>
    <p>Do tạo các nghiệp, nên bị nghiệp kéo dẫn sanh tử luân hồi trong 3 cõi, để thọ quả báo, không được tự tại, gọi là "Tướng nghiệp hệ khổ".</p>
    <p>Tóm lại, do "mê hoặc" nên "tạo nghiệp"; nhơn "tạo nghiệp" nên phải thọ "quả khổ" trở lại "mê hoặc" nữa; nhơn "hoặc" lại tạo "nghiệp" thọ "quả khổ", mãi mãi không biết bao giờ cùng tận, như cái vòng tròn không mối, nên gọi là "Luân hồi".</p>
    <p>Bởi do vô minh vọng niệm sanh ra tất cả các pháp phiền não tạp nhiễm, nên các pháp đều là vô minh. Nếu người được "vô niệm" (không vọng niệm), thì tất cả các pháp phiền não sanh tử đều hết.</p>
    <p>Trong 3 món Tế và 6 món Thô này, về phàm phu thì đủ cả; Tiểu thừa về 3 quả trước, thì đủ 3 món Tế và 4 món Thô trước; A la hán thì có 3 món Tế và 3 món Thô trước; hàng Pháp thân Bồ Tát (từ Bát địa trở lên) chỉ còn 3 món Tế.</p>

    <p id="bieu-do-tam-te-luc-tho" class="mt-4 font-semibold">Biểu đồ Tam tế - Lục thô theo từng quả vị:</p>
    <table>
      <thead>
        <tr>
          <th>Quả vị</th>
          <th>3 món Tế</th>
          <th>Món Thô còn lại</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>I. Phàm phu (đủ 9 món)</td>
          <td>Nghiệp tướng (vọng động), Chuyển tướng (trực giác), Hiện tướng (cảnh)</td>
          <td>Trí tướng, Tương tục tướng, Chấp thủ tướng, Kế danh tự tướng, Khởi nghiệp tướng, Nghiệp hệ khổ tướng</td>
        </tr>
        <tr>
          <td>II. Tiểu thừa, 3 quả trước (7 món)</td>
          <td>Nghiệp tướng, Chuyển tướng, Hiện tướng</td>
          <td>Trí tướng, Tương tục tướng, Chấp thủ tướng, Kế danh tự tướng</td>
        </tr>
        <tr>
          <td>III. A la hán (6 món)</td>
          <td>Nghiệp tướng, Chuyển tướng, Hiện tướng</td>
          <td>Trí tướng, Tương tục tướng, Chấp thủ tướng</td>
        </tr>
        <tr>
          <td>IV. Pháp thân Bồ Tát (chỉ 3 món Tế)</td>
          <td>Vô minh nghiệp tướng (nghiệp tướng), Năng kiến tướng (chuyển tướng), Cảnh giới tướng (hiện tướng)</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="noi-ve-hai-tuong" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">c. Nói về hai Tướng</h3>
    </div>

    <h4 id="chanh-van-hai-tuong" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Lại nữa, "Giác" (chơn) với "Bất giác" (vọng) đều có 2 tướng: Đồng và Khác.</p>
    <p id="dong"><strong>Thế nào là "Đồng"?</strong> Các sự nghiệp huyễn hoá của "Giác" (vô lậu) và "Bất giác" (vô minh) đều đồng một thể tánh chơn như. Thí như các món đồ gốm đều đồng một chất đất.</p>
    <p>Bởi thế nên trong Khế kinh chép: "Tất cả chúng sanh, từ hồi nào đến giờ, vẫn thường ở trong Bồ Đề Niết bàn; không phải do tu mới có, do làm mới được; rốt ráo không có gì gọi là 'chứng' cả, và cũng không hình tướng gì có thể thấy được."</p>
    <p>Song, chúng sanh thấy sắc thân Phật, có 32 tướng tốt, có 80 vẻ đẹp v.v... là do tuỳ tâm vọng nhiễm của chúng sanh mà huyễn hiện, không phải tánh chơn như có các hình tướng ấy; vì tánh chơn như không có thấy được vậy.</p>
    <p id="khac"><strong>Thế nào là "Khác"?</strong> Do tuỳ tâm vọng nhiễm của chúng sanh mà hiện ra các huyễn tướng sai khác: hữu lậu (mê) và vô lậu (giác). Ví như các thứ đồ gốm, hình tướng khác nhau.</p>

    <h4 id="luoc-giai-hai-tuong" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này lấy hai mặt "giác" và "bất giác", để chỉ sự tương quan tương phản của hai thứ ấy. Đứng về bản thể của các pháp mà luận, thì "nhiễm" và "tịnh" đều là chơn như. Còn đứng về hiện tượng của các pháp mà nói, thì "nhiễm" và "tịnh" có sai khác.</p>
    <p>Bởi "giác" và "bất giác" đều là Chơn như, cũng như các thứ đồ gốm (đồ kiểu hay đồ đá) đều bằng đất, nên nói tất cả chúng sanh từ hồi nào đến giờ, vẫn thường ở trong Chơn như. Tánh Chơn như này không phải do tu mới được, hay làm mới có; rốt ráo không có sở đắc, và cũng không có hình tướng gì có thể chỉ bày được.</p>
    <p>Song, chúng sanh thấy có Phật hiện thân độ sanh; đó là tự tâm của chúng sanh, tuỳ nghiệp huyễn hiện, chứ không phải tánh Chơn như có những hình tướng như thế.</p>
    <p>Câu "Tuỳ tâm vọng nhiễm" của chúng sanh mà hiện ra các huyễn tướng sai khác: hữu lậu (mê) và vô lậu (giác), nghĩa là nói: Không phải ở đâu khác, mà chính ở tâm chúng sanh, có thể đổi các phiền não nhiễm ô, ra các công đức thanh tịnh. Khi tâm vọng động thì sanh ra vô lượng hằng sa pháp tạp nhiễm, khi tâm hết vọng động thì hiện ra vô lượng hằng sa công đức thanh tịnh. Tất cả đều tuỳ tâm của chúng sanh mà hiện ra các tướng nhiễm, tịnh. Các tướng này đều như huyễn.</p>
    <p>Câu "... Các sự nghiệp chuyển hoá của vô lậu (giác) và vô minh (mê)", có nghĩa là: Tánh giác đã có nghiệp dụng, hiện ra tất cả cảnh giới thù thắng vi diệu, không thể nghĩ bàn, thì vô minh cũng có nghiệp lực hiện ra Tam tế, Lục thô, tất cả sanh tử khổ vui, cũng không thể nghĩ bàn. Bởi thế nên Chơn và vọng đều là huyễn cả. Khế kinh chép: "Sanh tử và Niết bàn đều như mộng huyễn".</p>

    <h4 id="quyet-nghi-hai-tuong" class="mt-6 text-lg font-semibold">Quyết nghi</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Chúng sanh đã vốn là Phật, tại sao không thấy chúng sanh có Báo thân và Hoá thân Phật?</p>
      <p class="mb-0"><strong>Đáp:</strong> Khi nói chúng sanh vốn là Phật, là đứng về phương diện bản thể Phật tánh mà nói, chứ không phải đứng về phương diện hiện tượng Phật tướng mà nói vậy. Về bản thể thì các chúng sanh đều có Phật tánh, nhưng về hiện tượng thì chúng sanh có Báo thân và Hoá thân.</p>
    </div>
    <div class="mt-4 rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Chơn như Phật tánh đã không có sắc tướng, tại sao chư Phật chứng được, và có tướng Báo thân và Hoá thân?</p>
      <p class="mb-0"><strong>Đáp:</strong> Sắc thân của chư Phật, chỉ tuỳ theo tâm của chúng sanh mà hiện ra, không phải trong thể tánh chơn như có những hình tướng ấy.</p>
    </div>
    <p class="italic text-text-muted">(Đã nói về "Tâm sanh diệt", dưới đây sẽ nói "Tướng Nhơn duyên sanh diệt").</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Tại sao "Bất giác" (mê) lại không rời khỏi "Bản giác"?',
    options: {
      a: 'Vì Bất giác lấy Bản giác (Phật tánh) làm thể.',
      b: 'Vì Bản giác sinh ra Bất giác để thử thách chúng sanh.',
      c: 'Vì Bản giác và Bất giác có hình tướng hoàn toàn giống nhau.',
      d: 'Vì Bất giác là một thực thể tồn tại độc lập trước Bản giác.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Tài liệu ghi rõ cái mê không có thật thể, chỉ lấy Phật tánh làm thể, nên không rời Phật tánh.',
      b: 'Sai. Văn bản không đề cập đến việc Bản giác sinh ra Bất giác để thử thách chúng sanh.',
      c: 'Sai. Bản giác và Bất giác không giống nhau về hình tướng (Bất giác là vọng niệm, Bản giác là chơn).',
      d: "Sai. Văn bản khẳng định 'mê' không có thật thể, không tồn tại độc lập mà phải nương vào Bản giác.",
    },
  },
  {
    question: 'Trong ba tướng vi tế (Tam tế), tướng nào được gọi là "Năng phân biệt" hay "Kiến phần" theo Duy thức tôn?',
    options: {
      a: 'Nghiệp tướng',
      b: 'Hiện tướng',
      c: 'Chuyển tướng',
      d: 'Trí tướng',
    },
    answer: 'c',
    explanation: {
      a: "Sai. Nghiệp tướng là 'tâm động', tương đương 'Tự chứng phần'.",
      b: "Sai. Hiện tướng là 'cảnh bị phân biệt', tương đương 'Tướng phần'.",
      c: 'Đúng. Tướng năng kiến (phần năng phân biệt) còn gọi là Chuyển tướng, tức là kiến phần.',
      d: 'Sai. Trí tướng (tâm phân biệt thương ghét) là một trong sáu món thô (Lục thô), không thuộc Tam tế.',
    },
  },
  {
    question: 'Tướng nào trong Lục thô là nguyên nhân trực tiếp dẫn đến việc chúng sanh bị kéo dẫn đi thọ quả khổ trong ba cõi?',
    options: {
      a: 'Kế danh tự tướng',
      b: 'Nghiệp hệ khổ tướng',
      c: 'Khởi nghiệp tướng',
      d: 'Chấp thủ tướng',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Kế danh tự tướng là việc giả đặt danh từ để gọi sự vật tốt xấu.',
      b: 'Đúng. Nghiệp hệ khổ tướng là trạng thái do tạo các nghiệp nên bị kéo dẫn sanh tử luân hồi để thọ quả báo.',
      c: 'Sai. Khởi nghiệp tướng là bước tạo ra các nghiệp (lành hoặc dữ) trước khi chịu quả khổ.',
      d: 'Sai. Chấp thủ tướng là tâm vướng mắc, chấp lấy sự vật.',
    },
  },
  {
    question: 'Tại sao tài liệu khẳng định nếu không có tâm "Bất giác" của chúng sanh thì chư Phật không thể chỉ bày "Chơn giác"?',
    options: {
      a: 'Vì chư Phật cần chúng sanh lầm lỗi để thể hiện lòng từ bi.',
      b: 'Vì Bất giác là nguồn năng lượng nuôi dưỡng Chơn giác.',
      c: 'Vì Chơn giác chỉ có thể tồn tại nếu có Bất giác đi kèm.',
      d: 'Vì nhờ tâm mê vọng phân biệt, chúng sanh mới hiểu được danh từ và nghĩa lý để nghe thuyết pháp.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Không có thông tin này trong văn bản.',
      b: 'Sai. Bất giác lấy Chơn giác (Bản giác) làm thể, không phải nuôi dưỡng nó.',
      c: 'Sai. Khi chơn như hiện thì vô minh tự mất, chúng không tồn tại song song mãi mãi.',
      d: 'Đúng. Nhờ tâm mê vọng phân biệt mà chúng sanh mới biết danh từ, nghĩa lý, từ đó chư Phật mới có cơ sở để thuyết pháp chỉ bày Phật tánh.',
    },
  },
  {
    question: 'Theo biểu đồ trong văn bản, hàng "A la hán" còn lại bao nhiêu món trong Tế và Thô?',
    options: {
      a: 'Có 3 món Tế và 3 món Thô',
      b: 'Chỉ còn 3 món Tế',
      c: 'Có 3 món Tế và 4 món Thô',
      d: 'Có đủ 9 món',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Biểu đồ chỉ rõ A la hán có 6 món: 3 món Tế và 3 món Thô (Trí, Tương tục, Chấp thủ).',
      b: "Sai. 'Chỉ còn 3 món Tế' là quả vị của Pháp thân Bồ Tát.",
      c: "Sai. '3 món Tế và 4 món Thô' thuộc về Tiểu thừa (3 quả trước).",
      d: "Sai. 'Có đủ 9 món' là trạng thái của Phàm phu.",
    },
  },
  {
    question: 'Khái niệm "Biến dịch sanh tử" được giải thích trong tài liệu như thế nào?',
    options: {
      a: 'Sự biến mất hoàn toàn của Phật tánh khi gặp vô minh.',
      b: 'Sự thay đổi về tâm thức hoặc quả vị tu hành (như khi lên chức vị cao hơn thì bỏ vị thấp).',
      c: 'Sự luân hồi trong sáu nẻo do nghiệp ác dẫn dắt.',
      d: 'Sự sinh ra và chết đi của thân xác vật lý qua các kiếp.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phật tánh (Chơn như) không bao giờ biến mất.',
      b: "Đúng. Giải danh từ nêu 'Biến dịch sanh tử' là sanh tử do sự biến đổi quả vị tu hành, ví dụ như lên quả vị cao thì bỏ quả vị thấp (như Lính lên Cai).",
      c: "Sai. Đây không phải cách tài liệu định nghĩa 'Biến dịch sanh tử'.",
      d: "Sai. Sự sinh tử của thân xác vật lý được gọi là 'Phần đoạn sanh tử' (khổ của phàm phu).",
    },
  },
  {
    question: 'Khi nói về tướng "Đồng" (giống nhau) giữa Giác và Bất giác, tài liệu khẳng định điều gì?',
    options: {
      a: 'Cả hai đều sinh ra từ nghiệp lực của chúng sanh.',
      b: 'Cả hai đều cùng một thể tánh Chơn như.',
      c: 'Cả hai đều có thể được nhìn thấy bằng mắt thường.',
      d: 'Cả hai đều có 32 tướng tốt và 80 vẻ đẹp.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Giác (Chơn) không sinh ra từ nghiệp lực.',
      b: "Đúng. Văn bản khẳng định các sự nghiệp huyễn hoá của Giác và Bất giác đều 'đồng một thể tánh chơn như', như đồ gốm đều đồng một chất đất.",
      c: 'Sai. Tánh chơn như rốt ráo không có hình tướng gì có thể thấy được.',
      d: 'Sai. 32 tướng tốt và 80 vẻ đẹp là do tuỳ tâm vọng nhiễm của chúng sanh huyễn hiện ra, không phải thể tánh Chơn như.',
    },
  },
  {
    question: 'Trong Lục thô, "Tương tục tướng" phát sinh ngay sau tướng nào?',
    options: {
      a: 'Khởi nghiệp tướng',
      b: 'Trí tướng',
      c: 'Chấp thủ tướng',
      d: 'Hiện tướng',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Khởi nghiệp tướng nằm phía sau Tương tục tướng trong chuỗi Lục thô.',
      b: "Đúng. Do có 'Trí tướng' (tâm phân biệt thương ghét), nên tiếp tục sinh ra các niệm khổ vui không dứt, gọi là 'Tương tục tướng'.",
      c: 'Sai. Chấp thủ tướng phát sinh ngay sau Tương tục tướng.',
      d: 'Sai. Hiện tướng thuộc Tam tế, không nằm trong Lục thô.',
    },
  },
  {
    question: 'Theo phần Giải danh từ, "Bất giác" có thực sự có nghĩa là hoàn toàn không biết gì không?',
    options: {
      a: 'Có, vì nó đối lập hoàn toàn với trí tuệ của Phật.',
      b: 'Có, nó là trạng thái tâm trí trống rỗng hoàn toàn.',
      c: 'Không, vẫn có biết nhưng cái biết ấy hư vọng, không chân thật.',
      d: 'Không, nó là cái biết thấu triệt tất cả các pháp văn tự.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Giải danh từ nói rõ không phải là hoàn toàn không biết.',
      b: 'Sai. Bất giác là trạng thái vọng niệm, không phải trống rỗng hoàn toàn.',
      c: "Đúng. Văn bản ghi 'Bất giác' thật ra không phải là không biết; vẫn có biết, song cái 'biết' ấy hư vọng, chẳng chơn thật.",
      d: 'Sai. Cái biết trên văn tự chỉ là do ý thức phân biệt, không phải là thấu triệt đúng như thật.',
    },
  },
  {
    question: 'Về mối quan hệ thời gian giữa "Chơn như" và "Vô minh", tài liệu đưa ra nhận định nào?',
    options: {
      a: 'Chơn như và Vô minh luân phiên thay thế nhau theo chu kỳ.',
      b: 'Vô minh có trước, tu hành đạt đạo mới có Chơn như.',
      c: 'Chơn như có trước, sau đó Vô minh mới nảy sinh.',
      d: 'Chơn như và Vô minh đồng thời có, không có cái nào trước sau.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Văn bản không nói chúng thay thế nhau theo chu kỳ.',
      b: 'Sai. Chơn như luôn sẵn có, không phải tu mới có.',
      c: 'Sai. Tài liệu phản bác trực tiếp quan niệm này.',
      d: "Đúng. Văn bản kết luận 'chơn như với vô minh đồng thời có, không phải chơn như có trước, vô minh có sau'.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-5-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-5-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 5 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 7,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-26',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-5-phan-giai-thich-tiep-theo/Ti%E1%BA%BFn_tr%C3%ACnh_c%E1%BB%A7a_m%C3%AA_v%E1%BB%8Dng.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-nghia-bat-giac', label: '2. Nói về nghĩa "Bất giác" (mê)' },
        { id: 'chanh-van-bat-giac', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-bat-giac', label: 'Lược giải', indent: 1 },
        { id: 'giai-danh-tu-bat-giac', label: 'Giải danh từ', indent: 1 },
        { id: 'noi-ve-tam-te', label: 'a. Nói về Tam tế' },
        { id: 'chanh-van-tam-te', label: 'Chánh văn', indent: 1 },
        { id: 'nghiep-tuong', label: 'Nghiệp tướng (Vọng động)', indent: 2 },
        { id: 'chuyen-tuong', label: 'Chuyển tướng (Tâm phân biệt, trực giác)', indent: 2 },
        { id: 'hien-tuong', label: 'Hiện tướng (Cảnh bị phân biệt)', indent: 2 },
        { id: 'luoc-giai-tam-te', label: 'Lược giải', indent: 1 },
        { id: 'giai-danh-tu-tam-te', label: 'Giải danh từ', indent: 1 },
        { id: 'noi-ve-luc-tho', label: 'b. Nói về Lục thô' },
        { id: 'chanh-van-luc-tho', label: 'Chánh văn', indent: 1 },
        { id: 'tri-tuong', label: 'Trí tướng (Vọng thức phân biệt)', indent: 2 },
        { id: 'tuong-tuc-tuong', label: 'Tương tục tướng (Vọng niệm tương tục)', indent: 2 },
        { id: 'chap-thu-tuong', label: 'Chấp thủ tướng (Chấp sự vật)', indent: 2 },
        { id: 'ke-danh-tu-tuong', label: 'Kế danh tự tướng (Chấp danh tự)', indent: 2 },
        { id: 'khoi-nghiep-tuong', label: 'Khởi nghiệp tướng (Tạo nghiệp)', indent: 2 },
        { id: 'nghiep-he-kho-tuong', label: 'Nghiệp hệ khổ tướng (Thọ quả)', indent: 2 },
        { id: 'luoc-giai-luc-tho', label: 'Lược giải', indent: 1 },
        { id: 'bieu-do-tam-te-luc-tho', label: 'Biểu đồ Tam tế - Lục thô', indent: 1 },
        { id: 'noi-ve-hai-tuong', label: 'c. Nói về hai Tướng' },
        { id: 'chanh-van-hai-tuong', label: 'Chánh văn', indent: 1 },
        { id: 'dong', label: 'Đồng (đồng bản chất)', indent: 2 },
        { id: 'khac', label: 'Khác (khác hình tướng)', indent: 2 },
        { id: 'luoc-giai-hai-tuong', label: 'Lược giải', indent: 1 },
        { id: 'quyet-nghi-hai-tuong', label: 'Quyết nghi', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-5-phan-giai-thich-tiep-theo/Awakening_from_Delusion.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/2qYe_bcmjNA',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/1nAKUt7kemsWtb6MVTrZMK?utm_source=generator&si=5637380b19ad4c30',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần giải thích (tiếp theo)',
    passPercentage: 70,
    questions,
  },
}

export default lesson
