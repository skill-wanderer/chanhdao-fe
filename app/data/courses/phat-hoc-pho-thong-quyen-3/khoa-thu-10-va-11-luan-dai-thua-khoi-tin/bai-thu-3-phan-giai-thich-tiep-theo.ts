import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ BA · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="noi-ve-tam-sanh-diet" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">II. Tâm Sanh diệt (Thức A lại da)</h2>
    </div>

    <h4 id="chanh-van-tam-sanh-diet" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Do Như Lai tạng (chơn) mà có "Tâm sanh diệt"; nghĩa là Chơn (không sanh diệt) Vọng (sanh diệt) hoà hiệp, không phải "một" không phải "khác" gọi là thức A lại da (tâm sanh diệt). Thức này tóm thâu tất cả các pháp và xuất sanh tất cả các pháp. Thức này có hai nghĩa "Giác" và "Bất giác" (mê).</p>

    <h4 id="luoc-giai-tam-sanh-diet" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn trước nói chỉ có một tâm mà chia ra làm hai phương diện: Tâm Chơn như và Tâm sanh diệt.</p>
    <p>Đoạn này nói do Như Lai tạng mà có "Tâm sanh diệt" tức là thức A lại da. Vì thức A lại da là do chơn vọng hoà hiệp, không phải một không phải khác, nên có hai nghĩa "Giác" và "Bất giác". Thức này có công năng giữ gìn tất cả các pháp và sanh ra các pháp.</p>
    <p>Trên đây nói thức A lại da có 2 nghĩa, không nên hiểu lầm thức A lại da có hai thứ "Giác" và "Bất giác" khác nhau; mà nên hiểu rằng: thức này có hai trạng thái, tuỳ nhiễm duyên thì trạng thái "Bất giác" hiện, tuỳ tịnh duyên thì trạng thái "Giác" hiện. Cũng như sáng với tối, chỉ là hiện tượng của thái hư mà thôi.</p>
    <p>Chúng ta cũng nên phân biệt ba danh từ: Chơn như, Như Lai tạng và thức A lại da là đồng hay khác, và liên quan với nhau như thế nào.</p>
    <p>"Chơn như" là chỉ cho cái "Tổng thể" của tâm; "Như Lai tạng" là chỉ cho cái "Tổng tướng" của tâm, "thức A lại da" là chỉ cho cái "Thể, Tướng và Dụng" về nhiễm và tịnh hoà hiệp của tâm.</p>
    <p>Chơn như, dụ như "tánh" ướt của nước; Như Lai tạng, dụ như "nước" (hình tướng của nước); A lại da, dụ như "sóng" (dụng của nước). Trong sóng gồm có cả tánh ướt và nước. Thế là thức A lại da (Tâm sanh diệt) gồm cả "Thể, Tướng và Dụng" về nhiễm và tịnh hoà hiệp của tâm.</p>
    <p>Tại sao không nói "do Chơn như, có Tâm Sanh diệt" mà chỉ nói "do Như Lai tạng có Tâm Sanh diệt"? Vì Chơn như là "Thể" của nhứt tâm; Như Lai tạng là "Tướng" của nhứt tâm; Chơn như thì thanh tịnh không động, còn Như Lai tạng tuy rằng cũng chơn tịnh, nhưng còn bị phiền não che phủ, làm nhơn cho động, nên chỉ nói "do Như Lai tạng có tâm sanh diệt là thức A lại da" mà không nói "do Chơn như sanh ra thức A lại da" (Tâm Sanh diệt).</p>
    <p>Tâm Sanh diệt này có hai phần:</p>
    <ul class="list-disc space-y-1 pl-6">
      <li>Sanh diệt về phần lưu chuyển sanh tử,</li>
      <li>Sanh diệt về phần hoàn tịnh (trở lại bản tánh Niết bàn).</li>
    </ul>

    <h4 id="giai-danh-tu-tam-sanh-diet" class="mt-6 text-lg font-semibold">Giải danh từ</h4>
    <p><strong>Như Lai tạng</strong>, có hai nghĩa:</p>
    <ol class="list-decimal space-y-1 pl-6">
      <li>Như Lai tại triền, nghĩa là tánh Phật (Như Lai) còn bị chứa trong vòng phiền não nhiễm ô.</li>
      <li>Như Lai xuất triền, nghĩa là tánh Phật (Như Lai) chứa đựng các pháp vô lậu thanh tịnh, đã ra khỏi phiền não nhiễm ô.</li>
    </ol>
    <p>Song, trong kinh luận nói đến Như Lai tạng, là phần nhiều dùng cái nghĩa "Như Lai tại triền" (tánh Phật bị chứa trong phiền não).</p>
    <p><strong>Câu "Chơn vọng hoà hiệp, không phải một và không phải khác":</strong></p>
    <p>"Chơn" là bản thể, còn "Vọng" là hiện tượng; bản thể và hiện tượng không rời nhau, nên nói "hoà hiệp". Vì bản thể không phải là hiện tượng, nên nói "không phải một"; vì hiện tượng và bản thể không rời nhau, nên nói "không phải khác".</p>
    <p>Trong đây nói chữ "Hoà hiệp", không phải thật có hai vật riêng nhau, như sữa với nước hoà hiệp lại, mà chính là bản thể với hiện tượng không rời nhau, nên tạm gọi là "hoà hiệp".</p>
    <p><strong>A lại da:</strong> Trong luận này, chữ "thức A lại da", chúng ta phải hiểu tức là "thức A đà na" mới khỏi ngại. Căn cứ theo luận Duy thức, khi đến quả A la hán hay Bát địa, thì thức A lại da không còn (A la hán vị xả); vì hai vị này đã trừ ngã chấp, nên thức này không còn là A lại da, mà chỉ gọi là thức A đà na (thức trì chủng).</p>
    <p>Còn trong luận này, thì nói: Từ phàm phu cho đến quả Phật, đều có thức A lại da, vì nó duy trì cả thánh và phàm. Vì thế nên chữ "A lại da" ở luận Khởi tín này, tức là thức "A đà na" trong luận Duy thức vậy. Trong luận Duy thức chép: "Thức A đà na có công năng duy trì chủng tử của các pháp nhiễm tịnh, thánh phàm..."</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="nghia-giac-co-5-ten" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Nói về nghĩa "Giác" có 5 tên</h3>
    </div>

    <h4 id="chanh-van-nghia-giac" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>"Giác" là chỉ cho bản thể chơn tâm lìa các vọng niệm, nó khắp giáp tất cả, rộng lớn như hư không; cũng gọi là "Pháp thân bình đẳng của Như Lai". Pháp thân này, tất cả chúng sanh sẵn có, nên gọi là "Bản giác" (tánh Phật sẵn có).</p>
    <p>Vì đối với "Thỉ giác" nên gọi là "Bản giác"; song Thỉ giác tức là Bản giác. Nghĩa là từ Bản giác mà có Bất giác (mê); do Bất giác nên có Thỉ giác (mới giác ngộ); giác ngộ chưa hoàn toàn thì gọi là Phần giác (giác ngộ từng phần); giác ngộ được hoàn toàn thì gọi là Cứu cánh giác.</p>

    <h4 id="luoc-giai-nghia-giac" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này nói về nghĩa "Giác" (sáng suốt) tức là tánh Phật sẵn có ở chúng sanh. Tánh Phật này ở nơi chúng sanh thì gọi là "Như Lai tạng" (Như Lai bị phiền não che giấu); còn ở nơi Phật thì gọi là "Pháp thân thanh tịnh".</p>
    <p>Tánh Phật tuy luân chuyển trong sáu đường, mà không bao giờ mất, vẫn vắng lặng thường còn và viên mãn. Chẳng qua chúng sanh vì bị mây vô minh che phủ, nên trăng Phật tánh này chẳng hiện được.</p>
    <p>Tất cả chúng sanh từ hồi nào đến giờ, vì không rời vọng niệm, nên tuy trọn ngày ở trong tánh Phật mà chẳng tự biết; nếu khi rời vọng niệm rồi, thì tánh Phật này sáng soi, rỗng suốt khắp giáp tất cả như thái hư. Lúc bấy giờ chỉ còn tánh Phật thuần chơn, gọi là "Pháp thân bình đẳng của Như Lai".</p>
    <p>Vì căn cứ theo tánh Phật sẵn có của chúng sanh, nên gọi là "Bản giác". Bởi thế nên Khế kinh nói:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1 italic">"Tất cả chúng sanh đã thành Phật từ lâu",</p>
      <p class="mb-0 italic">và nói: "Ta thành ngôi Chánh giác trong tâm của chúng sanh".</p>
    </div>
    <p>Song "Giác" có nhiều tên: Bản giác, Bất giác, Thỉ giác, Phần giác và Cứu cánh giác. Vì theo mỗi khía cạnh mà chia ra làm 5 tên, chớ không phải thật có 5 cái "Giác" khác nhau.</p>

    <h4 id="giai-danh-tu-nghia-giac" class="mt-6 text-lg font-semibold">Giải danh từ</h4>
    <p><strong>Pháp thân bình đẳng:</strong> Dùng pháp giới tánh làm thân, nên gọi là "Pháp thân". Vì Pháp thân này, ở tại phàm không bớt, ở nơi thánh không thêm, nên gọi là "Bình đẳng".</p>
    <p><strong>Bản giác:</strong> Sẵn có giác ngộ, tức là chỉ cho tánh Phật sẵn có của chúng sanh.</p>
    <p><strong>Bất giác:</strong> Không giác ngộ (mê). Chúng sanh tuy có sẵn tánh Phật, nhưng không tự giác ngộ.</p>
    <p><strong>Thỉ giác:</strong> Mới giác ngộ. Nhờ sự tu học, nên hành giả mới giác ngộ được tánh Phật.</p>
    <p><strong>Phần giác:</strong> Giác ngộ từng phần. Hành giả tu hành trải qua từng bực, được sự giác ngộ từng phần.</p>
    <p><strong>Cứu cánh giác:</strong> Giác ngộ rốt ráo (tức là Phật).</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="the-giac-co-4-lop" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Thể Giác có 4 lớp, từ thô đến tế</h3>
    </div>

    <h4 id="chanh-van-the-giac-4-lop" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Nghĩa là thế nào?</p>
      <p class="mb-0"><strong>Đáp:</strong> Có 4 lớp như sau:</p>
    </div>
    <p class="mt-4"><strong>a) Giác ngộ "niệm DIỆT"</strong></p>
    <p>Chúng phàm phu (Tiểu thừa thì hữu học, Đại thừa thì Thập tín) giác ngộ vọng niệm trước đã khởi ác, nên ngăn dứt vọng niệm sau, không cho sanh khởi ác nữa (niệm diệt). Vì chúng phàm phu in như đã giác ngộ, nhưng thật ra chưa giác ngộ, nên gọi là "Bất giác".</p>
    <p><strong>b) Giác ngộ "niệm DỊ" (hoại)</strong></p>
    <p>Hàng sơ phát tâm Bồ Tát (Tam hiền) và Nhị thừa (vô học), dùng trí huệ quán sát, giác ngộ được "niệm Dị" (dị tướng vô minh) và không còn tướng "niệm Dị". Hai vị này vì đã xả được tướng phân biệt chấp trước về phần thô trọng, nên gọi là "Tương tợ giác" (tương tợ như đã giác ngộ).</p>
    <p><strong>c) Giác ngộ "niệm TRỤ"</strong></p>
    <p>Hàng Thập địa Bồ Tát (Bồ Tát đã chứng Pháp thân) giác ngộ được "niệm Trụ" (trụ tướng vô minh) và không còn tướng "niệm Trụ". Vị này vì đã lìa được tướng phân biệt về thô niệm, nên gọi là "Tuỳ phần giác" (Giác ngộ từng phần).</p>
    <p><strong>d) Giác ngộ "niệm SANH"</strong></p>
    <p>Hàng Đẳng giác Bồ Tát (Địa tận Bồ Tát) do các phương tiện tu hành đã đầy đủ, nhứt niệm hợp với chơn tâm, nên giác ngộ được tâm sơ khởi (sanh tướng vô minh) và không còn tướng sơ khởi. Vì vị này đã xa lìa vọng niệm vi tế (vi tế vô minh) ngộ nhập chơn tâm thường trụ, nên gọi là "Cứu cánh giác" (Giác ngộ rốt ráo).</p>
    <p>Bởi thế nên trong kinh chép: "Nếu chúng sanh nào quán "vô niệm" (không vọng niệm) thì chúng sanh đó đã hướng về trí Phật".</p>

    <h4 id="luoc-giai-the-giac-4-lop" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Đoạn này Bồ Tát Mã Minh dùng bốn danh từ: Niệm sanh, Niệm trụ, Niệm dị, Niệm diệt để nói lên vô minh có thô tế, sâu cạn và chỉ rõ người tu hành ở địa vị nào mới diệt được thứ vô minh nào.</p>
    <p>Trong đoạn này nói "chúng phàm phu", thật ra không phải hoàn toàn là phàm phu, mà chính là chỉ cho: bên Đại thừa thì hàng Thập tín, còn Tiểu thừa thì ba quả trước, thuộc về hữu học. Vì các vị này chưa được dự vào hạng Hiền (Tam hiền) và Thánh (Thập thánh) nên bị gọi là Phàm phu.</p>
    <p>Chúng phàm phu này giác ngộ được niệm diệt tức là phá trừ "Diệt tướng vô minh" (vô minh thô sơ bên ngoài). Nếu so với Lục thô, thì "Niệm diệt" này thuộc về hai món thô sau là: Khởi nghiệp tướng và Nghiệp hệ khổ tướng (sẽ giải ở bài thứ năm). Vì sự phá trừ vô minh này không thấm vào đâu, và đối với việc giác ngộ chơn tâm còn xa xôi lắm, nên gọi họ là "Bất giác" (chưa giác ngộ).</p>
    <p>Hàng Nhị thừa và Bồ Tát ở vị Tam hiền (Thập trụ, Thập hạnh và Thập hồi hướng) giác ngộ được "Niệm dị", tức là phá trừ "Dị tướng vô minh" (vô minh thô). Nếu so với Lục thô thì "Niệm dị" này thuộc về hai món thô bực trung là: Chấp thủ tướng và Kế danh tự tướng (sẽ giải ở bài thứ năm). Vì các vị này tương tợ như giác ngộ được chơn tâm và chứng được pháp thân thanh tịnh, nhưng chưa phải thật ngộ và thật chứng, nên gọi họ là "Tương tợ giác".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Thế nào là giác ngộ "Niệm dị" và không còn tướng "Niệm dị"?</p>
      <p class="mb-0"><strong>Đáp:</strong> Bồ Tát sơ phát tâm dùng trí huệ quán sát Ngã (thân tâm) và Pháp (vũ trụ) đều do nhơn duyên sanh, nên đoạn trừ hai món vọng chấp phân biệt thật ngã và thật pháp về phần thô, đó là "Giác ngộ niệm dị". Đến khi Bồ Tát không còn thấy có tướng Ngã, tướng Pháp, thế gọi là "không còn tướng niệm dị".</p>
    </div>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Sao gọi là "Phân biệt chấp trước về phần thô trọng"?</p>
      <p class="mb-0"><strong>Đáp:</strong> Ngã chấp và Pháp chấp có chia ra làm hai phần: 1. Thô trọng, tức là phân biệt Ngã chấp và Pháp chấp, phần này dễ trừ. 2. Vi tế, tức là câu sanh Ngã chấp và Pháp chấp, phần này khó trừ.</p>
    </div>

    <p>Hàng Thập địa Bồ Tát vì đã chứng pháp thân thanh tịnh, nên cũng gọi là "Pháp thân Bồ Tát". Các vị Bồ Tát này giác ngộ được "Niệm trụ", tức là phá trừ "trụ tướng vô minh" (tế vô minh). Nếu so với Lục thô ở bài sau, thì thuộc về hai món thô đầu là: Trí tướng và Tương tục tướng.</p>
    <p>Bồ Tát phá một phần vô minh thì chứng được một phần Pháp thân, gọi là lên Sơ địa; phá hai phần vô minh thì chứng hai phần Pháp thân, gọi là lên Nhị địa; cho đến phá mười phần vô minh, thì chứng được mười phần Pháp thân, gọi là lên Thập địa Bồ Tát. Vì Bồ Tát phá vô minh từng phần và giác ngộ từng phần, nên gọi là "tuỳ phần giác".</p>
    <p>Các vị Bồ Tát này, vì tâm niệm còn trụ ở năng sở đối đãi, chưa dứt trừ được, nên gọi là "Trụ tướng vô minh". Đến khi Bồ Tát nhập Chơn như quán, chỉ nhứt tâm chánh niệm Chơn như, không còn tướng năng sở đối đãi, nên gọi "Không còn tướng niệm trụ". Như thế là lìa được tướng phân biệt về thô niệm (vô minh thô).</p>
    <p>Sở dĩ gọi "Thô" là vì không tế nhị bằng "Sanh tướng vô minh" (vô minh rất vi tế); kỳ thật đây cũng là một thứ vô minh vi tế, rất khó trừ.</p>
    <p>Tóm lại, từ phàm phu (Thập tín) cho đến địa vị Pháp thân Bồ Tát (Thập địa), về sự phá trừ vô minh của mỗi bực có thô và tế khác nhau:</p>
    <ol class="list-decimal space-y-1 pl-6">
      <li>Chúng phàm phu đối với cảnh, chấp có và thấy vọng niệm diệt rồi, đè nén không cho sanh khởi.</li>
      <li>Hàng Nhị thừa và Tam hiền Bồ Tát, thì quán ngã pháp đều không, nhưng còn cái "Niệm không".</li>
      <li>Đến bực Thập địa Bồ Tát, thì cái "Tâm niệm chấp không" cũng không còn; nghĩa là không còn cái "Năng Niệm".</li>
    </ol>
    <p>Nói rằng bực Đẳng giác Bồ Tát, giác ngộ được "niệm sanh" tức là nói vị Bồ Tát này phá trừ được "Sanh tướng vô minh" (vô minh rất vi tế). Nghĩa là các vị Bồ Tát tu hành, đến lúc chơn cùng hoặc tận, tột bực Thập địa, chứng lên vị Đẳng giác, khi ấy Bồ Tát dùng trí Kim Cang đoạn trừ "sanh tướng vô minh" (giác ngộ được niệm sanh) xa lìa các vọng hoặc rất vi tế, và nhứt niệm hiệp với tâm thể Chơn như, nên không còn "tướng sơ khởi"; khi đó Bồ Tát chứng lên quả Diệu giác (Phật) gọi là "Cứu cánh giác".</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Phải chăng trong một niệm, có sanh, trụ, dị, diệt; chúng phàm phu giác ngộ khi "Niệm diệt"; Nhị thừa giác ngộ khi "Niệm dị"; Thập địa Bồ Tát giác ngộ khi "Niệm trụ"; Đẳng giác Bồ Tát giác ngộ khi "Niệm sanh"?</p>
      <p class="mb-0"><strong>Đáp:</strong> Hiểu như vậy không được đúng lắm; đây nói sanh, trụ, dị, diệt là chỉ cho vọng niệm có phần thô và tế. Chúng phàm phu chỉ giác ngộ vọng niệm về phần thô bên ngoài gọi là "Niệm diệt". Nhị thừa giác ngộ vọng niệm về phần tế hơn gọi là "Niệm dị". Thập địa Bồ Tát giác ngộ vọng niệm lại tế hơn nữa, gọi là "Niệm trụ". Đến bực Đẳng giác Bồ Tát, giác ngộ vọng niệm lại rất vi tế, gọi là "Niệm sanh".</p>
    </div>

    <p>Thí như mặt nước bằng phẳng là dụ tâm thể thanh tịnh vô niệm. Mặt nước vừa dợn động, là dụ "Niệm sanh". Sóng nổi lăn tăn là dụ "Niệm trụ". Sóng nhấp nhô, dụ "Niệm dị". Sóng nổi ba đào là dụ "Niệm diệt".</p>
    <p>Chúng tôi đem 4 niệm trong bài này, phối hiệp với tam tế lục thô ở bài sau, để quý vị dễ hiểu.</p>
    <table>
      <thead>
        <tr>
          <th>4 niệm</th>
          <th>Tam tế</th>
          <th>Lục thô</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Niệm sanh</td>
          <td>1. Vô minh nghiệp tướng</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Niệm trụ</td>
          <td>2. Năng kiến tướng; 3. Cảnh giới tướng</td>
          <td>1. Trí tướng; 2. Tương tục tướng</td>
        </tr>
        <tr>
          <td>Niệm dị</td>
          <td>—</td>
          <td>3. Chấp thủ tướng; 4. Kế danh tự tướng</td>
        </tr>
        <tr>
          <td>Niệm diệt</td>
          <td>—</td>
          <td>5. Khởi nghiệp tướng; 6. Nghiệp hệ khổ tướng</td>
        </tr>
      </tbody>
    </table>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-1"><strong>Hỏi:</strong> Làm sao để được trí Phật?</p>
      <p class="mb-0"><strong>Đáp:</strong> Trí Phật thanh tịnh không các vọng niệm, muốn được trí Phật, hành giả phải "vô niệm". Trong kinh Lăng già quyển hai có chép: "Nếu chúng sanh nào quán vô niệm, thì chúng sanh ấy sẽ hướng về trí Phật".</p>
    </div>

    <p>Ngài Đức Thanh giải rằng: "Vô niệm là con đường tắt để thành Phật..." và "...không những Bồ Tát tu hành đoạn trừ phiền não, đến vô niệm mà gọi là "Cứu cánh giác"; tức như chúng sanh nào, ngày đêm quán vô niệm, thì chúng sanh ấy mỗi niệm đã hướng về trí Phật".</p>
    <p>Trong luận nầy nói hai chữ "vô niệm" đồng với bốn chữ "bất tuỳ phân biệt" trong kinh Lăng Nghiêm; chữ "vô niệm" nghĩa là không khởi vọng niệm. Nếu vọng niệm không khởi, thì tâm được định, do tâm định nên mới phát sanh ra trí huệ thanh tịnh của Phật.</p>
    <p>Chữ "Bất tuỳ phân biệt", nghĩa là không theo trần cảnh khởi phân biệt. Không khởi phân biệt thì vọng niệm chẳng sanh; vọng niệm chẳng sanh thì chơn tâm tự hiện ra.</p>
    <p>Bởi thế nên luận nầy nói chữ "Vô niệm", Kinh Lăng Nghiêm nói "bất tuỳ phân biệt"; hai danh từ tuy khác, song đồng một ý nghĩa và đồng một con đường tắt, để đi đến quả Phật.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30">
      <h3 id="vong-niem-het-thi-chon-tam-hien" class="mt-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">Vọng niệm hết (vô niệm) thì Chơn tâm hiện</h3>
    </div>

    <h4 id="chanh-van-vong-niem-het" class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Lại nữa, thật ra Tâm không có tướng sơ khởi, mà nói rằng "biết được tướng sơ khởi của tâm", đó tức là được "vô niệm". Tất cả chúng sanh từ hồi nào đến giờ, vì chưa từng xa lìa vọng niệm tương tục (chưa được vô niệm), nên không được gọi là "Giác", mà chỉ gọi là "Vô thỉ vô minh".</p>
    <p>Nếu người được vô niệm (ngộ chơn tâm) thì các tướng sanh, trụ, dị, diệt của tâm đều hết, chỉ còn một tâm thể vô niệm (chơn tâm). Bởi thế nên Thỉ giác không khác với Bản giác. Vì vọng niệm nên bốn tướng: Sanh, Trụ, Dị và Diệt đồng thời nương nhau mà có, và đều không tự lập; khi vọng niệm hết, thời bốn tướng không còn, chỉ một tánh giác (chơn tâm) xưa nay bình đẳng.</p>

    <h4 id="luoc-giai-vong-niem-het" class="mt-6 text-lg font-semibold">Lược giải</h4>
    <p>Tất cả chúng sanh từ hồi nào đến giờ, do một niệm mê nên bốn tướng: sanh, trụ, dị, diệt nhứt thời nương nhau khởi hiện, không có trước sau. Vì vọng niệm tương tục mãi, làm cho chúng sanh không ngộ được chơn tâm (vô niệm) của mình, nên gọi là "vô thỉ vô minh". Bởi thế nên có chia ra Bản giác và Thỉ giác.</p>
    <p>Trái lại, bực Đẳng giác Bồ Tát, đã diệt hết vọng niệm, ngộ được chơn tâm thường trú của mình, nên bốn tướng không còn, mà chỉ còn một tánh sáng suốt bình đẳng không vọng niệm, gọi là "Cứu cánh giác". Bởi vậy nên "Thỉ giác" cũng tức là "Bản giác".</p>

    <h4 id="giai-danh-tu-vong-niem-het" class="mt-6 text-lg font-semibold">Giải danh từ</h4>
    <p>"Tướng sơ khởi" tức là chơn tâm, mà chơn tâm thì vô tướng và vô niệm. Người được vô niệm tức là ngộ chơn tâm; phải ngộ được chơn tâm mới gọi là "Cứu cánh giác".</p>
    <p>"Bản giác" tức là tâm tánh xưa nay vốn thanh tịnh sáng suốt, trái với vô minh bất giác (mê). "Thỉ giác" là mới giác ngộ. Hành giả dùng quán trí trừ các vọng niệm, mới vừa giác ngộ tâm thể không có bổn tướng, nên gọi là "Thỉ giác".</p>
    <p>Nên biết, những danh từ trên đây đều giả lập: "Bản giác" là đối với "Thỉ giác" mà lập, "Thỉ giác" nhơn "Bất giác" mà có, "Bất giác" lại nhơn "Bản giác" mà sanh. Do đối đãi nhau nên giả lập ra có nhiều tên, thật ra chỉ có tánh giác mà thôi.</p>
    <p class="italic text-text-muted">(Đoạn này nói về "Thỉ giác", đoạn sau nói đến "Bản giác").</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo văn bản, thức A lại da (tâm sanh diệt) được hình thành từ sự hòa hiệp của hai yếu tố nào?',
    options: {
      a: 'Giác và Bất giác',
      b: 'Như Lai tạng và Chơn như',
      c: 'Chơn (không sanh diệt) và Vọng (sanh diệt)',
      d: 'Pháp thân và Phiền não',
    },
    answer: 'c',
    explanation: {
      a: "Sai. 'Giác' và 'Bất giác' là hai nghĩa (hai trạng thái) của thức A lại da, không phải là yếu tố tạo thành.",
      b: 'Sai. Văn bản không định nghĩa A lại da là sự hòa hiệp giữa Như Lai tạng và Chơn như.',
      c: 'Đúng. Thức A lại da (tâm sanh diệt) là do Chơn (không sanh diệt) và Vọng (sanh diệt) hoà hiệp tạo thành.',
      d: 'Sai. Pháp thân và phiền não không phải là hai yếu tố hòa hiệp được nhắc đến trong cấu trúc này.',
    },
  },
  {
    question: "Trong ví dụ về nước, 'Như Lai tạng' được ví với thực thể nào?",
    options: {
      a: 'Tánh ướt của nước',
      b: 'Hơi nước',
      c: 'Nước (hình tướng của nước)',
      d: 'Sóng (sự chuyển động của nước)',
    },
    answer: 'c',
    explanation: {
      a: "Sai. Tánh ướt của nước được dùng để ví cho 'Chơn như'.",
      b: 'Sai. Hơi nước không xuất hiện trong phép so sánh của văn bản.',
      c: "Đúng. Theo văn bản, Như Lai tạng được dụ như 'nước' (tức là hình tướng của nước).",
      d: 'Sai. Sóng (dụng của nước) là hình ảnh dùng để ví cho thức A lại da.',
    },
  },
  {
    question: "Tại sao tác giả nói 'do Như Lai tạng có tâm sanh diệt' mà không nói 'do Chơn như có tâm sanh diệt'?",
    options: {
      a: 'Vì Chơn như không có thật, chỉ là một danh từ giả lập',
      b: 'Vì Như Lai tạng là Tướng của tâm, tuy chơn tịnh nhưng còn bị phiền não che phủ làm nhân cho động',
      c: 'Vì Chơn như chỉ xuất hiện khi hành giả đã đắc quả Phật',
      d: 'Vì Như Lai tạng là nguồn gốc của mọi sự ô nhiễm',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Lý do này không được đề cập trong văn bản để giải thích câu hỏi này.',
      b: 'Đúng. Chơn như là Thể thanh tịnh không động, trong khi Như Lai tạng là Tướng của nhứt tâm, tuy chơn tịnh nhưng bị phiền não che phủ nên làm nhơn cho động sinh ra tâm sanh diệt.',
      c: 'Sai. Không phải là lập luận của Bồ Tát Mã Minh trong luận này.',
      d: 'Sai. Như Lai tạng vốn chơn tịnh (tánh Phật), chỉ là đang bị phiền não che phủ chứ không phải là nguồn gốc của ô nhiễm.',
    },
  },
  {
    question: "Khái niệm 'Như Lai tại triền' có nghĩa là gì?",
    options: {
      a: 'Sự hóa thân của Như Lai vào cõi ta bà để cứu độ chúng sanh',
      b: 'Tánh Phật đã thoát khỏi mọi phiền não và đạt đến thanh tịnh',
      c: 'Giai đoạn bắt đầu tu tập để tìm về bản thể',
      d: 'Tánh Phật còn bị bao vây, chứa đựng trong vòng phiền não nhiễm ô',
    },
    answer: 'd',
    explanation: {
      a: "Sai. Đây không phải là định nghĩa của 'Như Lai tại triền' trong luận Khởi Tín.",
      b: "Sai. Đây là nghĩa của từ 'Như Lai xuất triền' (đã ra khỏi phiền não nhiễm ô).",
      c: 'Sai. Khái niệm này chỉ trạng thái của tánh Phật, không chỉ giai đoạn tu tập.',
      d: "Đúng. 'Như Lai tại triền' nghĩa là tánh Phật (Như Lai) còn bị chứa trong vòng phiền não nhiễm ô.",
    },
  },
  {
    question: "Theo văn bản, tại sao chữ 'A lại da' trong luận này được hiểu tương đương với 'A đà na' trong luận Duy thức?",
    options: {
      a: 'Vì nó duy trì chủng tử của các pháp và hiện hữu từ phàm phu đến quả Phật',
      b: 'Vì đó là cách gọi khác nhau tùy theo vùng miền phát triển Phật giáo',
      c: 'Vì cả hai đều biến mất khi hành giả đạt đến Bát địa',
      d: 'Vì chúng đều chỉ về phần tâm thức hoàn toàn thanh tịnh',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Cả thức A lại da (trong Khởi tín) và A đà na (trong Duy thức) đều có công năng duy trì chủng tử của các pháp thánh phàm, tồn tại từ phàm phu cho đến quả Phật.',
      b: 'Sai. Sự tương đương này là do tính chất và công năng của thức, không liên quan đến vùng miền.',
      c: 'Sai. Thức A lại da trong luận Khởi Tín tồn tại đến tận quả Phật chứ không mất ở Bát địa.',
      d: 'Sai. Thức này bao hàm cả nhiễm và tịnh hòa hiệp, duy trì cả phàm và thánh chứ không chỉ hoàn toàn thanh tịnh.',
    },
  },
  {
    question: "Hàng Bồ Tát ở địa vị 'Thập địa' giác ngộ được loại vọng niệm nào?",
    options: {
      a: 'Niệm Trụ (trụ tướng vô minh)',
      b: 'Niệm Dị (dị tướng vô minh)',
      c: 'Niệm Diệt (diệt tướng vô minh)',
      d: 'Niệm Sanh (sanh tướng vô minh)',
    },
    answer: 'a',
    explanation: {
      a: "Đúng. Hàng Thập địa Bồ Tát (Bồ Tát đã chứng Pháp thân) giác ngộ được 'niệm Trụ' (trụ tướng vô minh).",
      b: 'Sai. Niệm Dị là do hàng Bồ Tát Tam hiền và Nhị thừa giác ngộ.',
      c: 'Sai. Niệm Diệt là cảnh giới giác ngộ của chúng phàm phu.',
      d: 'Sai. Niệm Sanh là cảnh giới giác ngộ của hàng Đẳng giác Bồ Tát.',
    },
  },
  {
    question: "Trạng thái 'Cứu cánh giác' được đạt tới khi hành giả giác ngộ được điều gì?",
    options: {
      a: 'Niệm Diệt để ngăn dứt các ác niệm phát sinh',
      b: 'Niệm Sanh (vô minh rất vi tế) và không còn tướng sơ khởi',
      c: 'Sự trống rỗng của vạn pháp và không còn chấp ngã',
      d: 'Sự hòa hợp giữa chơn và vọng trong tâm sanh diệt',
    },
    answer: 'b',
    explanation: {
      a: "Sai. Giác ngộ Niệm Diệt chỉ là 'Bất giác' (chưa thực sự giác ngộ) của hàng phàm phu.",
      b: 'Đúng. Cứu cánh giác là khi hành giả (hàng Đẳng giác Bồ Tát) giác ngộ được tâm sơ khởi (sanh tướng vô minh, tức niệm sanh) và xa lìa các vọng niệm vi tế.',
      c: 'Sai. Dù đây là một thành tựu trên đường tu học nhưng không phải mô tả cụ thể của Cứu cánh giác trong đoạn này.',
      d: 'Sai. Không phù hợp với định nghĩa về Cứu cánh giác.',
    },
  },
  {
    question: "Câu nói 'Thỉ giác tức là Bản giác' có ý nghĩa gì?",
    options: {
      a: 'Khi vọng niệm hết, cái mới giác ngộ và cái sẵn có không còn khác biệt, chỉ là một tánh giác bình đẳng',
      b: 'Hai khái niệm này hoàn toàn khác nhau về bản chất và không bao giờ gặp nhau',
      c: 'Bản giác là nguyên nhân sinh ra các vọng niệm của Thỉ giác',
      d: 'Hành giả không cần tu tập vì vốn dĩ đã là Phật',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Khi diệt hết vọng niệm, ngộ được chơn tâm thì 4 tướng sanh, trụ, dị, diệt biến mất, chỉ còn một tánh sáng suốt bình đẳng, nên cái mới giác (Thỉ giác) không khác tánh sẵn có (Bản giác).',
      b: 'Sai. Chúng vốn đồng nhất khi đạt đến vô niệm.',
      c: 'Sai. Bản giác không sinh ra vọng niệm.',
      d: 'Sai. Dù có sẵn Bản giác nhưng vẫn cần sự tu học để có Thỉ giác, phá vô minh mới thành Phật.',
    },
  },
  {
    question: "Con đường tắt để thành Phật được nhắc đến trong văn bản thông qua trích dẫn Kinh Lăng già và ý kiến của Ngài Đức Thanh là gì?",
    options: {
      a: 'Tụng kinh và niệm danh hiệu Phật',
      b: 'Bố thí và trì giới mật thiết',
      c: 'Nghiên cứu sâu các kinh điển Đại thừa',
      d: "Quán 'vô niệm' (không khởi vọng niệm)",
    },
    answer: 'd',
    explanation: {
      a: "Sai. Pháp môn này không được nhắc tới trong bài như là 'con đường tắt'.",
      b: 'Sai. Không được đề cập trong đoạn văn.',
      c: 'Sai. Không được đề cập trong đoạn văn.',
      d: "Đúng. Ngài Đức Thanh giải thích rằng 'vô niệm là con đường tắt để thành Phật' và kinh Lăng già cũng chép 'nếu chúng sanh nào quán vô niệm, thì sẽ hướng về trí Phật'.",
    },
  },
  {
    question: "Trong phép so sánh về mặt nước, 'Niệm trụ' được ví với hiện tượng nào?",
    options: {
      a: 'Sóng nổi lăn tăn',
      b: 'Sóng nổi ba đào (sóng lớn)',
      c: 'Mặt nước vừa dợn động',
      d: 'Mặt nước bằng phẳng',
    },
    answer: 'a',
    explanation: {
      a: "Đúng. Trong ví dụ về mặt nước, 'Sóng nổi lăn tăn' được dụ cho 'Niệm trụ'.",
      b: 'Sai. Sóng nổi ba đào là dụ cho Niệm diệt.',
      c: 'Sai. Mặt nước vừa dợn động là dụ cho Niệm sanh.',
      d: 'Sai. Mặt nước bằng phẳng dụ cho tâm thể thanh tịnh vô niệm.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-3-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-3-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 3 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 5,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-26',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-3-phan-giai-thich-tiep-theo/L%E1%BB%99_tr%C3%ACnh_Th%E1%BB%A9c_A-L%E1%BA%A1i-Da.png',
      readingContent,
      tableOfContents: [
        { id: 'noi-ve-tam-sanh-diet', label: 'II. Tâm Sanh diệt (Thức A lại da)' },
        { id: 'chanh-van-tam-sanh-diet', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-tam-sanh-diet', label: 'Lược giải', indent: 1 },
        { id: 'giai-danh-tu-tam-sanh-diet', label: 'Giải danh từ', indent: 1 },
        { id: 'nghia-giac-co-5-ten', label: 'Nói về nghĩa "Giác" có 5 tên' },
        { id: 'chanh-van-nghia-giac', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-nghia-giac', label: 'Lược giải', indent: 1 },
        { id: 'giai-danh-tu-nghia-giac', label: 'Giải danh từ', indent: 1 },
        { id: 'the-giac-co-4-lop', label: 'Thể Giác có 4 lớp, từ thô đến tế' },
        { id: 'chanh-van-the-giac-4-lop', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-the-giac-4-lop', label: 'Lược giải', indent: 1 },
        { id: 'vong-niem-het-thi-chon-tam-hien', label: 'Vọng niệm hết (vô niệm) thì Chơn tâm hiện' },
        { id: 'chanh-van-vong-niem-het', label: 'Chánh văn', indent: 1 },
        { id: 'luoc-giai-vong-niem-het', label: 'Lược giải', indent: 1 },
        { id: 'giai-danh-tu-vong-niem-het', label: 'Giải danh từ', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-3-phan-giai-thich-tiep-theo/Ocean_of_Consciousness.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/06qO_2t-Ki4',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/5ng5wypGtAxU2lbVedmdew?utm_source=generator&si=b191192c1bf740c0',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Phần giải thích (tiếp theo)',
    passPercentage: 70,
    questions,
  },
}

export default lesson
