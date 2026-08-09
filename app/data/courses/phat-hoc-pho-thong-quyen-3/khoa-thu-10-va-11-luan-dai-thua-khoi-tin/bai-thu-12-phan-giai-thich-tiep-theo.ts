import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">BÀI THỨ MƯỜI HAI · CHƯƠNG THỨ BA · PHẦN GIẢI THÍCH</p>
      <h2 id="doi-tri-cac-chap-sai-lam" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">B. Đối trị các chấp sai lầm</h2>
    </div>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Tất cả các chấp sai lầm (tà chấp), đều do chấp ngã và chấp pháp mà sanh; nếu rời chấp ngã và chấp pháp thì không còn các chấp sai lầm.</p>
    
    <p id="chap-nga" class="mt-8 font-semibold">I. CHẤP NGÃ (chấp bản ngã thật có).</p>
    <p>Chúng phàm phu chấp ngã có 5 thứ:</p>
    
    <p id="chap-hu-khong"><strong>1. Chấp "Hư không là chân tánh của Như Lai".</strong></p>
    <p>- Vì phá chấp của chúng sanh nên trong kinh Phật nói: "Pháp thân của Như Lai rốt ráo vắng lặng cũng như hư không". Chúng phàm phu nghe nói như thế, không hiểu, lại lầm chấp: "Hư không là chân tánh của Như Lai".</p>
    <p>Vì đối trị cái chấp sai lầm này, nên phải giải thích rằng: "Hư không là pháp hư đối, không có thật thể, do đối với sắc tướng mà thấy có hư không; nếu không có sắc tướng thì cũng không có tướng hư không. Nghĩa là từ hồi nào đến giờ, tất cả cảnh giới (sắc pháp) đều do vọng tâm biến hiện, không có pháp nào ngoài tâm; chúng sanh không biết, vọng chấp (biến kế chấp) là thật có. Nếu vọng tâm hết, thì các cảnh giới cũng không còn. Lúc bấy giờ chỉ còn chân tâm hiện khắp tất cả. Đó là pháp thân quảng đại thuộc về tâm trí (tánh trí) của Như Lai không phải như hư không, không có tri giác.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đối trị chấp tà là phá trừ các sự chấp nhất sai lầm. Các sự chấp nhất sai lầm đều do chấp ngã, chấp pháp mà sanh. Nếu phá trừ được chấp ngã, chấp pháp thì các chấp sai lầm không còn.</p>
    <p>Vì quan niệm thân tâm là thật, nên gọi là chấp ngã; quan niệm vũ trụ vạn vật là thật, thì gọi là chấp pháp.</p>
    <p>Chúng sanh chấp pháp thân của Phật có hình tướng như thế này, hoặc như thế kia v.v... Vì muốn phá các chấp sai lầm ấy, nên Phật nói: "Pháp thân của Phật rốt ráo vắng lặng, cũng như hư không".</p>
    <p>Nghe trong kinh nói như vậy, chúng sanh trở lại chấp: "Hư không là pháp thân của Như Lai", vì phá cái chấp sai lầm này, nên Ngài Mã Minh giải thích rằng: "Hư không là cái không thật thể, do các sắc tướng mà thấy có hư không. Nếu không có sắc tướng thì cũng không có hư không. Cả sắc tướng và hư không đều do vọng tâm biến hiện; rồi chúng sanh lầm chấp là thật có. Nếu vọng tâm hết thì sắc tướng và hư không cũng không còn. Lúc bấy giờ bản thể chân tâm hiện ra, rộng lớn bao la và trùm khắp tất cả. Đó là pháp thân thanh tịnh của Như Lai. Đây thuộc về phần tâm trí, không phải như hư không, không có tri giác.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="chap-chan-nhu-la-khong"><strong>2. Chấp "Chân như hay Niết bàn, chỉ là không không, chẳng có chi hết".</strong></p>
    <p>- Vì phá vọng chấp của chúng sanh, nên trong kinh Phật nói: "các pháp thế gian rốt ráo không có thật thể; cho đến các pháp xuất thế gian, như Chân như hay Niết bàn rốt ráo, cũng không có thật thể; từ hồi nào đến giờ, nó không có các tướng". Chúng phàm phu nghe nói như vậy không hiểu, trở lại chấp: "Chân như hay Niết bàn là không có chi hết".</p>
    <p>Vì đối trị sự chấp sai lầm này, nên phải giải thích rằng: "Chân như hay Pháp thân của Phật, chẳng phải không có tự thể; nó sẵn có và đầy đủ vô lượng công đức".</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn trên phá quan niệm sai lầm, chấp "hư không là chân tánh của Như Lai"; đoạn này phá quan niệm sai lầm, cho rằng "Chân như hay Niết bàn là cảnh giới hư không ảo tưởng không có chi hết".</p>
    <p>Chúng sanh thường lầm tưởng: "Các pháp thật có". Vì phá trừ quan niệm sai lầm ấy, nên trong kinh Phật nói: "các pháp thế gian hư giả không thật, cho đến các pháp xuất thế gian như Chân như, Bồ Đề, Niết bàn v.v... rốt ráo cũng không có thật thể, vì không có các hình tướng". Chúng phàm phu nghe nói như vậy không hiểu, trở lại chấp: "Chân như hay Niết bàn v.v... là cảnh giới hư vô ảo tưởng, chẳng có chi hết".</p>
    <p>Để đối trị sự chấp sai lầm này, nên Ngài Mã Minh Bồ Tát giải thích rằng: "Chân như, Pháp thân hay Bồ Đề, Niết bàn không phải là cảnh giới ảo tưởng hư vô, không có gì cả, mà nó sẵn có đầy đủ vô lượng đức tánh, nhiều hơn số cát sông Hằng, như: thiện, thường, lạc, ngã, tịnh, giải thoát v.v…</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="chap-nhu-lai-tang-hinh-tuong"><strong>3. Chấp "Như Lai tạng" có các hình tướng sai khác như Sắc và Tâm v.v...</strong></p>
    <p>- Nghe trong kinh Phật nói: "Như Lai tạng không tăng không giảm, sẵn đủ tất cả các công đức"; chúng phàm phu vì không hiểu nghĩa này, nên trở lại chấp: "Như Lai tạng có đủ các hình tướng sai khác, như sắc và tâm v.v...".</p>
    <p>Để đối trị sự chấp sai lầm này, nên phải giải thích rằng: "Căn cứ về thể Chân như thì không có các tướng sai khác; còn theo tướng nhiễm ô sanh diệt, thì có các hình tướng sai khác".</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn này phá quan niệm sai lầm cho rằng: "Chân" đồng với "Vọng".</p>
    <p>Nghe trong kinh Phật nói: "Như Lai tạng không tăng không giảm, sẵn có đủ tất cả đức tánh", chúng phàm phu không hiểu trở lại chấp: "Như Lai tạng cũng có các hình sắc sai khác".</p>
    <p>Để đối trị quan niệm sai lầm này, Ngài Mã Minh giải thích rằng: "Thể Chân như" (Chân như môn) thì thanh tịnh không có các hình tướng sai khác, còn về "tướng sanh diệt" (Sanh diệt môn) thì đủ các hình tướng sai khác".</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="chap-nhu-lai-tang-sanh-tu"><strong>4. Chấp "Trong Như Lai tạng thật có đủ các pháp sanh tử nhiễm ô".</strong></p>
    <p>- Nghe trong kinh Phật nói: "Các pháp sanh tử nhiễm ô của thế gian, đều do Như Lai tạng mà có, tất cả các pháp đều không rời Chân như", chúng phàm phu không hiểu nghĩa này, lại chấp: "Chính trong bản thể Như Lai tạng, sẵn có tất cả các pháp sanh tử nhiễm ô của thế gian".</p>
    <p>Để đối trị cái chấp sai lầm này, nên giải thích rằng: "Từ vô thủy tới giờ, trong Như Lai tạng, chỉ có các công đức thanh tịnh, nhiều hơn số cát sông Hằng. Các công đức này không lìa, không đoạn và cũng không khác với Chân như; còn hằng hà sa số các pháp phiền não nhiễm ô kia, chỉ là hư vọng, vốn không có thật tánh. Bởi thế nên từ hồi nào đến giờ, trong Như Lai tạng chưa từng thật có các pháp nhiễm ô. Nếu trong bản thể Như Lai tạng (chân) thật có các phiền não nhiễm ô, rồi hành giả phải diệt trừ các phiền não nhiễm ô, mới chứng được chân như thanh tịnh, thì rất vô lý".</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chúng phàm phu nghe trong kinh Phật nói: "Các pháp sanh tử nhiễm ô đều do Như Lai tạng mà có, các pháp không rời chân như"; rồi họ chấp "Trong Như Lai tạng hay chân như, thật có sẵn các pháp sanh tử nhiễm ô".</p>
    <p>Để phá quan niệm sai lầm này, nên Ngài Mã Minh Bồ Tát giải thích rằng: "Từ hồi nào đến giờ, trong Như Lai tạng (chân) chỉ có hằng hà sa số đức tánh thanh tịnh, các đức tánh này không rời chân như; còn pháp sanh tử nhiễm ô, vì là hư vọng, không có thật thể, nên từ hồi nào đến giờ, không có ở trong Như Lai tạng".</p>
    <p>Như Lai tạng hay chân như, dụ như "tâm người đương thức tỉnh"; sanh tử nhiễm ô, dụ như "giấc ngủ mà có chiêm bao". Đành rằng "cái ngủ chiêm bao" là nương nơi "tâm người thức tỉnh" mà có; song từ hồi nào đến giờ, trong "tâm người thức tỉnh" không bao giờ thật có chứa sẵn "cái ngủ chiêm bao". Bởi "cái ngủ chiêm bao" hư vọng không thật, nên khi thức giấc rồi thì nó tự mất. Cũng thế, các pháp sanh tử nhiễm ô, vì hư vọng không thật, nên khi giác ngộ rồi, nó không còn.</p>
    <p>Nếu quan niệm rằng: "trong Như Lai tạng thật sẵn có các phiền não nhiễm ô; hành giả phải diệt trừ hết các phiền não nhiễm ô, mới chứng được chân như thanh tịnh", thì không phải. Cũng như nói "trong tâm người thức tỉnh, thật sẵn có 'cái ngủ chiêm bao' phải diệt trừ hết 'cái ngủ chiêm bao' rồi, mới được thức tỉnh"; nói như thế rất là phi lý.</p>
    <p>Phải biết, các phiền não sanh tử, chỉ là cái mê vọng, không có thật thể. Phật đã dạy rằng: "Biết mình mê thì cái 'mê' hết, cái 'biết' đó không sanh mê trở lại" (Giác mê mê diệt, giác bất sanh mê). Cũng như người khi biết mình dại, thì không còn dại nữa. Lúc bấy giờ họ trở thành khôn; khi khôn rồi, thì cái "khôn" đó không sanh cái dại trở lại nữa.</p>
    <p>Nếu cái "dại" (mê) này thật có, thì khi biết khôn (giác) rồi, cái "dại" đó trốn núp ở đâu? Cũng như "cái ngủ chiêm bao" nếu thật có, thì khi tỉnh thức rồi nó phải còn. Nhưng vì nó không còn, nên biết "cái ngủ chiêm bao" (mê dại) này không thật có.</p>
    <p>Nếu nói "phải diệt trừ hết các pháp sanh tử nhiễm ô mới chứng được chân như thanh tịnh" thì cũng như nói "phải phá trừ cho hết 'cái ngủ chiêm bao' rồi, mới được sự thức tỉnh"; nói như thế, đều phi lý.</p>
    <p>Bởi thế nên từ hồi nào đến giờ, trong Như Lai tạng hay Chân như, không bao giờ thật có sanh tử nhiễm ô; cũng như trong "tâm người thức tỉnh", không bao giờ thật có "cái mê ngủ chiêm bao" vậy.</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="chap-chung-sanh-huu-thi"><strong>5. Chấp: "Chúng sanh có thủy, chư Phật có chung tận".</strong></p>
    <p>- Chúng phàm phu nghe trong kinh Phật nói: "Do Như Lai tạng mà có sanh tử, do Như Lai tạng mà đặng Niết bàn". Vì họ không hiểu nên chấp: "Chúng sanh hữu thủy (có đầu tiên) và chư Phật chứng Niết bàn, sẽ có ngày chung tận, rồi trở lại làm chúng sanh".</p>
    <p>Để đối trị cái chấp sai lầm này, nên giải thích rằng: Như Lai tạng (Chân như tại triền) và vô minh đều có từ vô thủy (không có đầu tiên). Nếu nói chúng sanh (có sanh khởi đầu tiên) là kinh của ngoại đạo nói (kinh Đại hữu), không phải kinh Phật. Lại nữa, Như Lai tạng không có chung tận; chư Phật chứng Niết bàn là thể nhập (tương ưng) Như Lai tạng, nên cũng không có chung tận.</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chúng sanh nghe trong kinh Phật nói: "Do Như Lai tạng mà có sanh tử, do Như Lai tạng mà chứng Niết bàn"; rồi họ suy luận và chấp rằng: vì do Như Lai tạng mà có sanh tử (Vô minh, chúng sanh); như thế thì chúng sanh (sanh tử, vô minh) tất phải có sự bắt đầu sanh khởi (hữu thủy) và do Như Lai tạng mà chứng Niết bàn, vậy thì Niết bàn cũng có sự bắt đầu sanh khởi (hữu thủy). Do đó người ta kết luận: Chúng sanh đã hữu thủy nên cũng hữu chung, Niết bàn hữu thủy nên cũng hữu chung. Bởi thế nên họ chấp chư Phật chứng Niết bàn rồi, có ngày cũng cùng tận, phải trở lại làm chúng sanh.</p>
    <p>Để đối trị với chấp sai lầm này, nên Ngài Mã Minh giải thích, đại ý nói "Chân như và vô minh đồng thời có từ vô thủy". Cũng như chất ngọt và chất chát đồng thời có trong trái hồng. Song hành giả khi chuyển phiền não trở lại Bồ Đề, chuyển sanh tử trở lại Niết bàn, thì lúc bấy giờ chúng sanh không còn (chung tận), mà chỉ còn Chân như hay Phật. Cũng như khi trái hồng lớn chín, đổi hết chất chát chỉ còn chất ngọt. Khi trái hồng đã chín ngọt rồi, thì không bao giờ trở lại chát nữa. Cũng như khi đã thành Phật rồi, không bao giờ trở lại làm chúng sanh nữa.</p>
    <p>Vậy nên biết, vô minh (chúng sanh) vô thủy mà hữu chung; Chân như (Phật) vô thủy và vô chung.</p>
    <p>Kinh Phật thì chép "Chúng sanh vô thủy"; còn kinh Đại hữu của ngoại đạo lại chép "Chúng sanh hữu thủy".</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p id="chap-phap" class="mt-8 font-semibold">II. CHẤP PHÁP (chấp thật có vũ trụ vạn hữu).</p>
    <p>Đối với hàng Nhị thừa, vì độn căn chấp ngã, nên trong kinh Phật nói: "Chỉ có năm ấm sanh diệt, không có thật ngã". Nghe như thế, hạng này trở lại chấp: "Thật có năm ấm sanh diệt" (chấp thật pháp), nên họ rất sợ khổ sanh tử và cầu vui Niết bàn.</p>
    
    <p id="chap-vu-tru-van-huu"><strong>Chấp thật có vũ trụ, vạn hữu</strong></p>
    <p>Để đối trị cái chấp sai lầm này, nên phải giải thích rằng: "Tánh của năm ấm, từ hồi nào đến giờ, vốn là Niết bàn, không sanh và cũng không diệt".</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Năm ấm tức sắc, thọ, tưởng, hành và thức. Vì năm đám mây này che khuất vầng trăng chân như, nên gọi là "Ấm" (che).</p>
    <p>Để phá trừ chấp ngã của hàng Nhị thừa độn căn, nên Phật nói: "chỉ có năm ấm sanh diệt, không có thật ngã". Lúc bấy giờ hạng này không còn chấp ngã, mà trở lại chấp pháp; nghĩa là chấp thật có năm ấm, thật có khổ sanh tử và vui Niết bàn. Do đó, họ rất sợ sanh tử và thích thú vui ở mãi nơi cảnh Niết bàn.</p>
    <p>Để phá trừ cái chấp thật Pháp của Nhị thừa, nên Ngài Mã Minh Bồ Tát giải thích, đại ý nói: "Tướng của các pháp không thật, tánh nó là chân như, là Niết bàn, xưa nay không sanh, nên cũng không diệt". Vì các pháp không thật có, nên Bồ Tát không sợ sanh tử và không yên vui ở mãi nơi Niết bàn.</p>
    <p>Nếu nói một cách đầy đủ, thì phải nói "vô ngã và vô pháp". Nhưng đây vì đối với hàng Nhị thừa, nên Phật chỉ mới nói "năm ấm vô thường", chứ chưa nói đến "sanh tử tức chân thường".</p>

    <h4 class="mt-6 text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Lại nữa, nếu người rốt cả xa lìa các vọng chấp, thì mới biết rõ các pháp Nhiễm tịnh đều do đối đãi nhau mà thôi, thật ra không có cái tướng gì có thể kêu gọi được. Bởi thế nên, từ hồi nào đến giờ, tất cả các pháp, không phải sắc, không phải tâm, không phải trí, không phải thức, không phải hữu, không phải vô, rốt ráo không có tướng gì có thể gọi được. Song, sở dĩ Phật có nói năng kêu gọi như thế này hoặc như thế kia, là vì đức Như Lai khôn khéo, phương tiện tạm dùng lời nói để dẫn dắt chúng sanh, mục đích là làm cho chúng sanh xa lìa các vọng niệm (ly niệm) trở về chân như; nếu còn vọng niệm thì tâm phải sanh diệt, nên chẳng nhập được trí Phật (thật trí: chân như).</p>

    <h4 class="mt-6 text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Từ hồi nào đến giờ, tất cả các pháp, không phải sắc, không phải tâm, không phải trí, không phải thức v.v... chỉ vì chúng sanh vọng chấp phân biệt, so sánh (biến kế chấp) đối đãi với nhau mà thành thế này hoặc thế kia, như đối với hữu gọi là vô, đối với sắc gọi là tâm, đối với thức gọi là trí, đối với cao gọi là thấp, đối với lớn gọi là nhỏ, đối với tốt gọi là xấu v.v... Nếu chúng sanh rốt ráo xa lìa các vọng chấp thì thật không có một pháp gì có thể kêu gọi được. Lúc bấy giờ hành giả mới thấy rõ các pháp không thể kêu gọi (ly danh tự tướng), không thể nói năng luận bàn (ly ngôn thuyết tướng), hay suy nghĩ được (ly tâm duyên tướng).</p>
    <p>Chư Phật đã hoàn toàn xa lìa các vọng chấp, song còn gọi pháp khổ, pháp vui, nhiễm tịnh, sanh tử, Niết bàn v.v... là vì Phật phương tiện tạm đặt ra những danh từ kêu gọi như thế, mục đích là để dẫn dắt chúng sanh lìa các vọng niệm chấp trước, đặng nhập vào chân như hay trí Phật. Khi chúng sanh đã nhập vào chân như hay trí Phật rồi, lúc bấy giờ cũng không còn danh từ gì để kêu gọi được.</p>
    <p class="italic text-text-muted">Bài này nói về phần đối trị các chấp sai lầm rồi, đến bài thứ 13, sẽ nói về hành tướng phát tâm đến đạo.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo nội dung bài học, tất cả các 'tà chấp' (chấp sai lầm) đều phát sinh từ những nguyên nhân gốc rễ nào?",
    options: {
      a: "Chấp ngã và chấp pháp",
      b: "Chấp hữu và chấp vô",
      c: "Chấp sắc và chấp tâm",
      d: "Chấp thường và chấp đoạn",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Văn bản nêu rõ: Tất cả các chấp sai lầm (tà chấp), đều do chấp ngã và chấp pháp mà sanh.",
      b: "Sai. Đây chỉ là một dạng chấp cụ thể nằm trong chấp pháp.",
      c: "Sai. Đây là cách phân loại các hiện tượng, không phải gốc rễ của tà chấp.",
      d: "Sai. Đây là hai cực đoan (đoạn kiến, thường kiến) phát sinh từ chấp ngã/pháp.",
    },
  },
  {
    question: "Tại sao một số người phàm phu lại nảy sinh lầm chấp cho rằng 'Hư không là chân tánh của Như Lai'?",
    options: {
      a: "Do họ quan niệm hư không là thực thể đầu tiên sinh ra vạn vật",
      b: "Do hư không có tính bao la rộng lớn giống như trí tuệ của Phật",
      c: "Do nghe kinh nói Pháp thân của Như Lai vắng lặng cũng như hư không mà không hiểu nghĩa lý",
      d: "Do họ cho rằng ngoài hư không ra thì không có pháp nào khác là chân thật",
    },
    answer: "c",
    explanation: {
      a: "Sai. Không phải lý do được đề cập trong văn bản.",
      b: "Sai. Hư không không có tri giác, không giống trí tuệ Phật.",
      c: "Đúng. Để phá chấp, Phật ví dụ 'Pháp thân vắng lặng như hư không', nhưng phàm phu không hiểu ý nghĩa ví von này nên lầm tưởng bản chất của Như Lai chính là hư không.",
      d: "Sai.",
    },
  },
  {
    question: "Mã Minh Bồ Tát giải thích như thế nào để phá trừ quan niệm sai lầm rằng 'Chân như hay Niết bàn là không có chi hết'?",
    options: {
      a: "Cho rằng Chân như chỉ là một tên gọi khác của hư không",
      b: "Khẳng định Chân như sẵn có và đầy đủ vô lượng công đức",
      c: "Nhấn mạnh rằng Chân như và Niết bàn là những khái niệm do con người tự đặt ra",
      d: "Giải thích rằng Niết bàn là một cảnh giới vật chất hữu hình",
    },
    answer: "b",
    explanation: {
      a: "Sai. Chân như không phải là hư không.",
      b: "Đúng. Bồ Tát giải thích Chân như/Niết bàn không phải là cảnh giới hư vô ảo tưởng, mà nó chẳng những có tự thể mà còn sẵn có và đầy đủ vô lượng công đức (thiện, thường, lạc, ngã, tịnh...).",
      c: "Sai.",
      d: "Sai. Niết bàn không phải là vật chất.",
    },
  },
  {
    question: "Theo văn bản, sự khác biệt giữa 'thể Chân như' và 'tướng nhiễm ô' liên quan đến hình tướng như thế nào?",
    options: {
      a: "Thể Chân như không có tướng sai khác, còn tướng sanh diệt thì có đủ các hình tướng sai khác",
      b: "Cả thể và tướng đều có vô số hình sắc sai khác như sắc và tâm",
      c: "Thể và tướng đều vốn là hư không nên không có bất kỳ hình tướng nào",
      d: "Thể Chân như chứa đựng các hình tướng, còn tướng nhiễm ô thì không",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Căn cứ về thể Chân như (Chân như môn) thì thanh tịnh không có các tướng sai khác; còn theo tướng nhiễm ô sanh diệt (Sanh diệt môn) thì mới có các hình tướng sai khác (sắc và tâm).",
      b: "Sai. Thể Chân như không có tướng sai khác.",
      c: "Sai. Tướng sanh diệt có hình tướng.",
      d: "Sai. Ngược lại mới đúng.",
    },
  },
  {
    question: "Ví dụ về 'người đương thức tỉnh' và 'giấc ngủ chiêm bao' được dùng để giải thích điều gì?",
    options: {
      a: "Để chứng minh rằng thế giới thực tại chỉ là một giấc mơ không có ý nghĩa",
      b: "Để chứng minh rằng các pháp nhiễm ô không thật có sẵn trong bản thể Như Lai tạng",
      c: "Để chỉ ra rằng Chân như và vô minh là hai thực thể tồn tại song song độc lập",
      d: "Để giải thích rằng con người cần phải ngủ mới có thể thấu hiểu Chân như",
    },
    answer: "b",
    explanation: {
      a: "Sai. Không phải mục đích chính của ví dụ.",
      b: "Đúng. 'Tâm thức tỉnh' dụ cho Như Lai tạng, 'chiêm bao' dụ cho pháp nhiễm ô. Dù chiêm bao nương vào người ngủ mà có, nhưng trong người thức không bao giờ thật có chứa sẵn cái chiêm bao. Từ đó chứng minh trong Như Lai tạng (chân) chưa từng thật có pháp nhiễm ô (vọng).",
      c: "Sai. Vô minh nương nơi Chân như mà khởi, không độc lập.",
      d: "Sai. Hoàn toàn trái ngược với ý nghĩa tu tập.",
    },
  },
  {
    question: "Quan điểm nào sau đây về 'Chúng sanh' và 'Chư Phật' được coi là đúng theo lời giải thích trong bài?",
    options: {
      a: "Cả chúng sanh và chư Phật đều là những pháp hữu thủy và hữu chung",
      b: "Chúng sanh có điểm bắt đầu và chư Phật sẽ có ngày kết thúc",
      c: "Chân như có từ khi chúng sanh bắt đầu tu hành",
      d: "Vô minh (chúng sanh) vô thủy mà hữu chung; Chân như (Phật) vô thủy và vô chung",
    },
    answer: "d",
    explanation: {
      a: "Sai.",
      b: "Sai. Đây là tà chấp (Chấp 5).",
      c: "Sai. Chân như có từ vô thủy.",
      d: "Đúng. Vô minh có từ vô thủy nhưng bị diệt khi thành Phật (hữu chung). Chân như có từ vô thủy và tồn tại mãi mãi (vô chung).",
    },
  },
  {
    question: "Tại sao hàng Nhị thừa lại nảy sinh 'chấp pháp' (chấp thật có năm ấm sanh diệt)?",
    options: {
      a: "Vì họ muốn chứng minh rằng thế gian này là vĩnh cửu",
      b: "Vì họ cho rằng năm ấm chính là bản thể thanh tịnh của Phật",
      c: "Vì họ nghe Phật dạy không có thật ngã, chỉ có năm ấm sanh diệt nên lầm cho năm ấm là thật",
      d: "Vì họ không tin vào sự tồn tại của cảnh giới Niết bàn",
    },
    answer: "c",
    explanation: {
      a: "Sai. Họ cho thế gian là vô thường, sanh diệt.",
      b: "Sai. Họ coi năm ấm là khổ cần thoát khỏi.",
      c: "Đúng. Vì Phật muốn phá 'chấp ngã' nên nói 'chỉ có năm ấm sanh diệt'. Nhị thừa căn cơ kém nên tuy bỏ được chấp ngã nhưng lại bám vào câu nói đó để sinh ra 'chấp pháp' (cho rằng năm ấm, sanh tử là thật có).",
      d: "Sai. Họ cầu Niết bàn.",
    },
  },
  {
    question: "Theo Mã Minh Bồ Tát, tánh của năm ấm thực sự là gì để đối trị với chấp pháp của Nhị thừa?",
    options: {
      a: "Vốn là Niết bàn, không sanh và cũng không diệt",
      b: "Là các pháp nhiễm ô cần phải tiêu diệt hoàn toàn",
      c: "Là những đám mây đen che khuất vầng trăng chân như",
      d: "Là những thực thể vật chất do tâm biến hiện ra",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Bồ Tát giải thích rằng tướng của năm ấm tuy sanh diệt không thật, nhưng bản tánh của nó từ xưa đến nay vốn là chân như, là Niết bàn, không sanh cũng không diệt.",
      b: "Sai. Đây là cách hiểu của Nhị thừa, không phải của Bồ tát đại thừa.",
      c: "Sai. Đây là cách giải thích từ 'ấm', không phải bản tánh thật.",
      d: "Sai. Đây là hiện tượng, không phải bản tánh.",
    },
  },
  {
    question: "Việc Phật sử dụng các danh từ như 'nhiễm', 'tịnh', 'sanh tử', 'Niết bàn' được văn bản giải thích là gì?",
    options: {
      a: "Là những định nghĩa chính xác về bản chất thật của vũ trụ",
      b: "Vì không có cách nào khác để mô tả chân lý cho chúng sanh",
      c: "Để chứng minh rằng thế giới có sự phân chia giai cấp giữa các pháp",
      d: "Là phương tiện tạm dùng lời nói để dẫn dắt chúng sanh xa lìa vọng niệm",
    },
    answer: "d",
    explanation: {
      a: "Sai. Tướng thật không thể diễn tả bằng danh từ.",
      b: "Sai.",
      c: "Sai. Pháp vốn bình đẳng.",
      d: "Đúng. Vạn pháp vốn ly danh tự tướng (không có tướng gì để gọi), Phật gọi tên như vậy chỉ là 'khôn khéo, phương tiện tạm dùng lời nói' để dẫn dắt chúng sanh lìa vọng niệm trở về chân như.",
    },
  },
  {
    question: "Câu nói 'Giác mê mê diệt, giác bất sanh mê' trong văn bản có nghĩa là gì?",
    options: {
      a: "Sự mê lầm và sự giác ngộ luôn luôn tồn tại cùng nhau",
      b: "Khi đã nhận biết mình mê thì cái mê tự hết, và cái biết đó không khiến người ta mê trở lại",
      c: "Càng tìm cách giác ngộ thì càng dễ rơi vào vòng mê lầm mới",
      d: "Mê lầm là một thực thể cứng nhắc cần phải dùng sức mạnh để tiêu diệt",
    },
    answer: "b",
    explanation: {
      a: "Sai. Giác sinh thì mê diệt.",
      b: "Đúng. Nghĩa là khi biết mình đang mê (dại) thì sự mê lầm đó tự tan biến (vì nó vốn không có thật thể), và một khi đã giác ngộ (khôn) rồi thì không bao giờ sinh ra cái mê trở lại nữa.",
      c: "Sai.",
      d: "Sai. Mê lầm hư vọng, không có thật thể để 'tiêu diệt' bằng sức mạnh.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-bai-12-phan-giai-thich-tiep-theo',
  slug: 'bai-thu-12-phan-giai-thich-tiep-theo',
  title: 'Bài Thứ 12 - Phần giải thích (tiếp theo)',
  type: 'article',
  status: 'published',
  order: 14,
  createdAt: '2026-08-01',
  updatedAt: '2026-08-01',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-12-phan-giai-thich-tiep-theo/Con_%C4%90%C6%B0%E1%BB%9Dng_Tr%E1%BB%9F_V%E1%BB%81_Ch%C3%A2n_Nh%C6%B0.png',
      readingContent,
      tableOfContents: [
        { id: 'doi-tri-cac-chap-sai-lam', label: 'B. Đối trị các chấp sai lầm' },
        { id: 'chap-sai-lam-2-thu', label: 'Chấp sai lầm có 2 thứ:', indent: 1 },
        { id: 'chap-nga', label: 'I. Chấp ngã, có 5 thứ:', indent: 2 },
        { id: 'chap-hu-khong', label: 'Chấp Hư không là Chân tánh của Như Lai', indent: 3 },
        { id: 'chap-chan-nhu-la-khong', label: 'Chấp Chân như hay Niết bàn, chỉ là không không, chẳng có chi hết.', indent: 3 },
        { id: 'chap-nhu-lai-tang-hinh-tuong', label: 'Chấp Như Lai tạng có các hình tướng sai khác như Sắc và Tâm', indent: 3 },
        { id: 'chap-nhu-lai-tang-sanh-tu', label: 'Chấp trong Như Lai tạng có đủ các sanh tử nhiễm ô', indent: 3 },
        { id: 'chap-chung-sanh-huu-thi', label: 'Chấp chúng sanh có thủy, chư Phật có chung tận.', indent: 3 },
        { id: 'chap-phap', label: 'II. Chấp pháp:', indent: 2 },
        { id: 'chap-vu-tru-van-huu', label: 'Chấp thật có vũ trụ, vạn hữu', indent: 3 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-12-phan-giai-thich-tiep-theo/Awakening_to_True_Nature.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/ev1EX2CsWvQ',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/7G2IgTbgcPNYdImemc1Mgj',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Bài Thứ 12',
    passPercentage: 70,
    questions,
  },
}


export default lesson