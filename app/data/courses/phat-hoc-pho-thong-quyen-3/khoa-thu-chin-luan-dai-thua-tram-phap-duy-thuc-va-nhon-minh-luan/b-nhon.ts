import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">NHƠN MINH LUẬN</p>
      <h2 id="b-nhon" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">B. NHƠN</h2>
    </div>

    <p>Nhơn là nguyên nhơn hay lý do. Phàm một sự vật hay câu nói gì, cũng đều có nguyên nhơn hay lý do cả. Như nói:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong> Tôi muốn ăn cơm.</p>
      <p class="mb-0"><strong>Nhơn:</strong> Vì tôi đói bụng vậy (lý do).</p>
    </blockquote>
    <p>Phàm cái "Nhơn" nào đủ cả ba tánh chất sau đây mới đúng đắn. Trái lại, nếu thiếu một, thiếu hai, hoặc thiếu ba, thì cái Nhơn ấy có lỗi. 14 lỗi về Nhơn sau này cũng bởi thiếu một, hai hoặc ba tánh chất sau đây. Vậy quý vị nên nhớ kỹ ba tánh chất của Nhơn.</p>

    <h3 id="ba-tanh-chat-cua-nhon" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Ba tánh chất của Nhơn</h3>

    <h4 id="tinh-chat-1-bien-thi-ton-phap-tanh" class="mt-6 text-lg font-semibold">1. Biến thị Tôn pháp tánh</h4>
    <p>Nghĩa là: Cái Nhơn phải bao trùm cả Tôn (tánh chất thứ nhất).</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tôi muốn ăn cơm.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì tôi đói bụng vậy.</td></tr>
        <tr><td colspan="2"><em>Nhơn trùm cả Tôn</em></td></tr>
      </tbody>
    </table>
    <p>Nghĩa là: Vì tôi đói bụng, nên "tôi muốn"; và vì tôi đói bụng, nên "tôi ăn cơm".</p>
    <p>Cái Nhơn "Vì tôi đói bụng" này, nó trùm được danh từ trước của Tôn là "Tôi muốn"; và cũng trùm được danh từ sau của Tôn là "Ăn cơm".</p>

    <h4 id="tinh-chat-2-dong-pham-dinh-huu-tanh" class="mt-6 text-lg font-semibold">2. Đồng phẩm định hữu tánh</h4>
    <p>Nghĩa là cái Nhơn quyết định phải hoàn toàn hoặc ít nhất là phải có một phần liên quan với Đồng dụ. Nó phải là đồng một tánh chất như Đồng dụ (tánh chất thứ hai của Nhơn).</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tôi muốn ăn cơm.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì đói bụng vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như anh A (đói bụng và muốn ăn cơm).</td></tr>
        <tr><td colspan="2"><em>Nhơn trùm cả Tôn và liên quan với Đồng dụ</em></td></tr>
      </tbody>
    </table>
    <p>Cái Nhơn "vì đói bụng" này hoàn toàn liên quan với Tôn và Đồng dụ (thí dụ thuận).</p>
    <p>"Như anh A" là đồng dụ. Nghĩa là anh A cũng "vì đói bụng" (Nhơn) nên "muốn ăn cơm" (Tôn).</p>

    <h4 id="tinh-chat-3-di-pham-bien-vo-tanh" class="mt-6 text-lg font-semibold">3. Dị phẩm biến vô tánh</h4>
    <p>Cái "Nhơn" này đối với Dị dụ (thí dụ về bề trái) phải hoàn toàn không liên quan; nghĩa là tánh chất của Nhơn phải hoàn toàn không có trong Dị dụ mới được (tánh chất thứ ba của Nhơn).</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tôi muốn ăn cơm.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì đói bụng vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như anh A (đói bụng, muốn ăn).</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như anh B (no bụng, không muốn ăn).</td></tr>
        <tr><td colspan="2"><em>Nhơn này trùm cả Tôn và Đồng dụ, còn Dị dụ thì không liên quan đến Tôn và Nhơn</em></td></tr>
      </tbody>
    </table>
    <p>Cái Nhơn "vì đói bụng" này, đối với Dị dụ hoàn toàn không có liên quan; nghĩa là: anh B (Dị dụ) đã no bụng (trái với Nhơn: đói bụng), nên không muốn ăn (trái với Tôn: muốn ăn).</p>

    <h3 id="14-loi-ve-nhon" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">14 lỗi về Nhơn</h3>
    <p>Phàm lập cái "Nhơn", phải tránh 14 lỗi sau này thì cái "Nhơn" ấy mới hoàn toàn đúng đắn, chia làm 3 loại:</p>

    <h4 id="bon-loi-bat-thanh" class="mt-6 text-lg font-semibold">I. Bốn lỗi bất thành</h4>

    <p class="mb-1"><strong>1. Lưỡng câu bất thành</strong></p>
    <p>Lập cái Nhơn mà cả chủ và khách đều không nhìn nhận.</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong> Con rắn Hổ mây chạy mau.</p>
      <p class="mb-0"><strong>Nhơn:</strong> Vì nó có chân vậy (nguyên nhơn).</p>
    </blockquote>
    <p>Cả chủ và khách đều không nhìn nhận "rắn hổ có chân". Nay lại lập cái Nhơn "vì có chân", nên cái Nhơn này chẳng thành.</p>

    <p class="mb-1"><strong>2. Tùy nhất bất thành</strong></p>
    <p>Phàm lập cái Nhơn, phải chủ và khách hai bên đều công nhận, ít nhất là một bên khách phải có công nhận thì cái Nhơn ấy mới thành. Nay cái Nhơn này bên khách không công nhận nên bị lỗi "Tùy nhất bất thành". Như đối với nhà Khoa học mà lập như vầy:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong> Vò vò không sanh con (trứng).</p>
      <p class="mb-0"><strong>Nhơn:</strong> Vì nó bắt sâu làm con vậy.</p>
    </blockquote>
    <p>Theo Khoa học nói con Vò vò đẻ trứng trong tổ, rồi bắt sâu nhét vào làm mồi, để cho con nó khi nở ra có mồi ăn. Nay lập cái Nhơn "bắt sâu làm con" thì bên khách (Khoa học) không công nhận, nên bị lỗi.</p>

    <p class="mb-1"><strong>3. Dự dự bất thành (Do dự bất thành)</strong></p>
    <p>Cái Nhơn dự dự chẳng nhất định, nên không thành. Như ở xa thấy mù mù, không rõ đó là sương mù hay khói mù, lại lập như vầy:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong> Chỗ kia có lửa.</p>
      <p class="mb-0"><strong>Nhơn:</strong> Vì có mù (mây mù).</p>
    </blockquote>
    <p>Bởi cái Nhơn này có thể lập được cả hai Tôn, vừa "có lửa" và vừa "không có lửa", dự dự không nhất định, nên bị lỗi "bất thành".</p>

    <p class="mb-1"><strong>4. Sở y bất thành</strong></p>
    <p>Chỗ y cứ của mình, bên khách không công nhận. Như tín đồ Nhất thần giáo đối với khoa học hoặc Phật giáo mà lập như vầy:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong> Thần sanh ra mọi vật.</p>
      <p class="mb-0"><strong>Nhơn:</strong> Vì trong kinh của Đạo tôi nói vậy.</p>
    </blockquote>
    <p>Phải là tín đồ của Tôn giáo họ mới nhìn nhận kinh của Đạo họ là đúng. Còn đối với khoa học hay Phật giáo, không nhìn nhận kinh sách của họ, mà y cứ nơi kinh sách đó để lập luận với người ngoài Đạo mình, nên bị lỗi "sở y bất thành".</p>
    <p>Một tỷ dụ thứ hai: Theo trong Nhơn minh có lập cái lượng như vầy:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong> Hư không thật có.</p>
      <p class="mb-0"><strong>Nhơn:</strong> Vì muôn vật đều y hư không vậy.</p>
    </blockquote>
    <p>Phái "Vô không luận", họ chẳng công nhận "thật có hư không". Nếu với phái này mà lập cái Nhơn như vậy thì bị lỗi "sở y bất thành".</p>
    <p>Bốn lỗi "bất thành" đã nói rồi, bây giờ sẽ nói đến sáu lỗi "bất định"...</p>

    <h4 id="sau-loi-bat-dinh" class="mt-6 text-lg font-semibold">II. Sáu lỗi bất định</h4>

    <p class="mb-1"><strong>1. Cộng bất định (Cọng bất định)</strong></p>
    <p>Cái Nhơn này liên quan cả Đồng dụ và Dị dụ, nên bị lỗi "không nhất định".</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Anh A đau.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì ăn xoài sống.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như anh B (ăn xoài sống và đau).</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như anh D (ăn xoài sống, không đau).</td></tr>
      </tbody>
    </table>
    <p>Nếu nói anh A "vì ăn xoài sống" mà đau như anh B, thì tại sao anh D cũng "ăn xoài sống" mà lại không đau?</p>
    <p>Bởi thế nên người ta có thể lập cái Tôn ngược lại rằng:</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Anh D không đau.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì ăn xoài sống.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như anh D (ăn xoài sống và không đau).</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như anh A (ăn xoài sống, đau).</td></tr>
      </tbody>
    </table>
    <p>Người ta có thể hỏi rằng: Vậy thì "vì ăn xoài sống" mà bị đau như anh A, hay "vì ăn xoài sống" mà không đau như anh D? Bởi lập cái Nhơn bất định như vậy nên có lỗi.</p>

    <p class="mb-1"><strong>2. Bất cộng bất định (Bất cọng bất định)</strong></p>
    <p>Cái Nhơn này không có liên quan với Đồng dụ.</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng là thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì tai nghe vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như hư không (tai không nghe).</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như cỏ cây (tai không nghe).</td></tr>
      </tbody>
    </table>
    <p>Cái Nhơn "vì tai nghe" này, đối với "Đồng dụ" và Dị dụ đều không có liên quan chút nào cả, nên cũng bị lỗi "bất định".</p>
    <p>Bởi cái Nhơn này người ta có thể lập ngược lại như vầy:</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng là vô thường.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì tai nghe vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như cỏ cây (vô thường).</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như hư không (thường còn).</td></tr>
      </tbody>
    </table>
    <p>Vậy, "vì tai nghe" mà tiếng nói thường còn như hư không? Hay "vì tai nghe" mà tiếng nói vô thường như cỏ cây? Bởi thế nên cái Nhơn này bị lỗi "bất định".</p>

    <p class="mb-1"><strong>3. Đồng phẩm nhất phần chuyển, Dị phẩm biến chuyển bất định</strong></p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Chỗ kia có khói.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có lửa vậy.</td></tr>
        <tr><td rowspan="2"><strong>Đồng dụ</strong></td><td>Như lửa rượu cồn (alcool) (có lửa, không khói).</td></tr>
        <tr><td>Như lửa ở nhà bếp (có lửa, có khói).</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như ao nước (không khói, không lửa).</td></tr>
      </tbody>
    </table>
    <p>Nếu cái Nhơn "vì có lửa", dụ như lửa ở nhà bếp, thì Tôn này có "khói"; còn "vì có lửa", dụ như lửa rượu, thì cái Tôn này "không khói".</p>
    <p>Vì cái Nhơn này đối với Tôn "có khói" hay "không khói" đều không nhất định, nên cái Nhơn này có lỗi bất định. Bởi người ta có thể lập ngược lại như vầy:</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Chỗ kia không khói.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có lửa vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như lửa Alcool (có lửa, không khói).</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như lửa ở nhà bếp (có lửa, có khói).</td></tr>
      </tbody>
    </table>

    <p class="mb-1"><strong>4. Dị phẩm nhất phần chuyển, Đồng phẩm biến chuyển bất định</strong></p>
    <p>Cái Nhơn này đối với Dị dụ có dính líu một phần, còn đối với Đồng dụ thì phải hoàn toàn dính líu, nên cái Nhơn này cũng bị lỗi "bất định".</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Con khỉ leo cây giỏi.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có hai tay.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như con vượn (có hai tay, leo cây giỏi).</td></tr>
        <tr><td rowspan="2"><strong>Dị dụ</strong></td><td>Như con bò (không tay, không biết leo).</td></tr>
        <tr><td>Như con rắn (không tay, leo cây giỏi).</td></tr>
      </tbody>
    </table>
    <p>Phàm Đồng dụ thì phải hoàn toàn liên quan cả Tôn và Nhơn; còn Dị dụ thì hoàn toàn không dính líu gì đến Tôn và Nhơn, như thế mới đúng.</p>
    <p>Nay cái Nhơn này đối với Dị dụ bị dính líu hết một phần. Bởi thế cái tánh chất thứ ba của Nhơn là "Dị phẩm biến vô tánh" bị lỗi; vì khách có thể hỏi lại rằng: "Vì không tay, nên leo cây giỏi như con rắn? Hay vì không tay, nên chẳng biết leo cây như con bò?". Bởi thế nên cái Nhơn này bị lỗi "bất định".</p>

    <p class="mb-1"><strong>5. Câu phẩm nhất phần chuyển bất định</strong></p>
    <p>Cái Nhơn này đối với Đồng dụ và Dị dụ đều chỉ có dính líu một phần, nên cũng bị lỗi "bất định".</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập thí dụ thứ nhất</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Tiếng vô thường.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì mắt không thấy.</td></tr>
        <tr><td rowspan="2"><strong>Đồng dụ</strong></td><td>Như tánh giận, buồn v.v... (mắt không thấy và vô thường).</td></tr>
        <tr><td>Như ruộng, nhà v.v... (mắt thấy và cũng vô thường).</td></tr>
        <tr><td rowspan="2"><strong>Dị dụ</strong></td><td>Như Hư không (thường, mắt không thấy).</td></tr>
        <tr><td>Như Giác tánh (thường, mắt không thấy).</td></tr>
      </tbody>
    </table>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Biểu lập thí dụ thứ hai</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Người ta ai cũng phải chết.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì là vật hữu hình vậy.</td></tr>
        <tr><td rowspan="2"><strong>Đồng dụ</strong></td><td>Như cầm thú (hữu hình, có chết).</td></tr>
        <tr><td>Như nước biển (hữu hình, không chết - theo quan niệm cổ).</td></tr>
        <tr><td rowspan="2"><strong>Dị dụ</strong></td><td>Như hư không (vô hình, không chết).</td></tr>
        <tr><td>Như tượng gỗ (hữu hình, không chết).</td></tr>
      </tbody>
    </table>
    <p>Nếu cái Nhơn "vì hữu hình" này mà dụ như cầm thú, thì cái Tôn này "có chết", còn cái Nhơn "vì hữu hình" mà thí dụ như nước, thì cái Tôn này "không chết".</p>
    <p>Phàm Dị dụ là dụ bề trái của Tôn và Nhơn, nên phải dùng những vật "không chết" (trái với Tôn) và "vô hình" (trái với Nhơn) để làm thí dụ. Nay cái Dị dụ này chỉ trái với Nhơn được phân nửa. Vì ngoại nhơn có thể hỏi lại rằng: Vậy "hư không không chết vì vô hình vậy? Hay tượng gỗ không chết vì hữu hình vậy?". Bởi hữu hình (tượng gỗ) và vô hình (hư không) đều không chết, nên cái Nhơn này bị lỗi "bất định".</p>

    <p class="mb-1"><strong>6. Tương vi quyết định bất định</strong></p>
    <p>Chủ và khách lập lượng trái nhau; song cả hai đều không có lỗi, và đều quyết định thành lập được. Nhưng không bên nào phá được bên nào.</p>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Khách lập</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Sóng thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì sóng tức là nước.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như điện (hoặc đất).</td></tr>
      </tbody>
    </table>
    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Chủ phá</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Sóng là vô thường.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì chuyển động được.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như gió.</td></tr>
      </tbody>
    </table>
    <p>Hai cái lượng này rất mâu thuẫn nhau, song đều quyết định thành lập được. Bên khách vẫn công nhận "sóng có chuyển động", bên chủ cũng nhận "sóng tức là nước". Nhưng không bên nào phá được bên nào, nên Nhơn này bị lỗi "bất định". Đây cũng là vì thiếu lời lẽ khôn khéo để làm cho người ta phục mình. Thuở xưa có người nói: "Ai lập trước thì hơn".</p>
    <p>Phải lập như vầy:</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Sóng không thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì nó là nước bị gió động.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Cũng như gió.</td></tr>
      </tbody>
    </table>
    <p>Sáu lỗi "Bất định" đã giải thích rồi, bây giờ sẽ nói đến bốn lỗi tương vi...</p>

    <h4 id="bon-loi-tuong-vi" class="mt-6 text-lg font-semibold">III. Bốn lỗi tương vi</h4>

    <p class="mb-1"><strong>1. Pháp tự tướng tương vi</strong></p>
    <p>Cái Nhơn trái (mâu thuẫn) với tự tướng (lời nói trắng) của danh từ sau.</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Gió thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có động vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như hư không.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như sóng.</td></tr>
      </tbody>
    </table>
    <p>Đã có động thì làm sao lại thường còn; nên cái Nhơn "có động" này, rất trái với tiếng "thường còn" là lời nói trắng về danh từ sau của Tôn.</p>

    <p class="mb-1"><strong>2. Pháp sai biệt tương vi Nhơn</strong></p>
    <p>Cái Nhơn trái (mâu thuẫn) với ý hứa (ẩn ý) của danh từ sau.</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Loài người quyết định có tạo ra (ý hứa là một vị thần).</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có trí khôn và mắt, tai v.v...</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như con do cha mẹ sanh ra.</td></tr>
      </tbody>
    </table>
    <p>Trong cái Tôn này, về chữ "quyết định có người tạo ra" là do người lập Tôn, ẩn ý của họ muốn nói: Người tạo ấy là một vị Thần. Và ẩn ý của họ cho vị Thần ấy có ba đức tánh sau này: 1. Toàn trí toàn năng, 2. Thường còn, 3. Độc tôn.</p>
    <p>Nhưng cái Nhơn này nó lại trái ngược (mâu thuẫn) với ẩn ý của họ:</p>
    <p>Nếu vị thần ấy tạo ra loài người có trí khôn và mắt tai v.v... như cha mẹ sanh con; vậy cha mẹ "không toàn trí toàn năng", vì sanh ra có những đứa con ngỗ nghịch với cha mẹ, thì vị thần ấy cũng "không toàn trí toàn năng" vì tạo ra loài người mà có những kẻ oán trách lại vị Thần ấy, và giữa loài người, không biết bao nhiêu những điều bất bình đẳng.</p>
    <p>Cha mẹ sanh ra con, đến khi già phải chết "không phải thường còn"; vậy vị Thần ấy đã sanh ra loài người, thì vị thần ấy cũng phải chết, "không thường còn".</p>
    <p>Cha mẹ sanh ra con, tất nhiên phải có ông, bà sanh lại cha mẹ, nên cha mẹ không phải "độc tôn". Vậy thì vị Thần ấy đã tạo ra loài người, thì vị thần ấy cũng phải có một vị thần lớn hơn sanh ra, nên vị thần ấy cũng không "độc tôn".</p>
    <p>Bởi thế nên cái Nhơn này bị lỗi mâu thuẫn với ý hứa (ẩn ý) của danh từ sau là "người tạo ra".</p>

    <p class="mb-1"><strong>3. Hữu pháp tự tướng tương vi Nhơn</strong></p>
    <p>Cái Nhơn mâu thuẫn với lời nói trắng (tự tướng) về danh từ trước của Tôn.</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Phải có một ông Vô hình, tạo ra Vũ trụ.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì Vũ trụ có trật tự ấy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như ông Kiến trúc sư làm nhà.</td></tr>
      </tbody>
    </table>
    <p>Cái Nhơn "Vì vũ trụ có trật tự" này, rất trái ngược với danh từ trước của Tôn là "Ông Vô hình". Đã Vô hình thì làm sao tạo ra Vũ trụ là vật hữu hình và có trật tự được? Phải vật hữu hình mới tạo ra vật hữu hình. Như ông kiến trúc sư, vì hữu hình mới tạo ra cái nhà hữu hình được.</p>

    <p class="mb-1"><strong>4. Hữu pháp sai biệt tương vi Nhơn</strong></p>
    <p>Cái Nhơn trái ngược với ý hứa (ẩn ý) về danh từ trước của Tôn.</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Phải có một đấng sanh ra vũ trụ.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì vũ trụ có thứ tự vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như ông thợ làm nhà.</td></tr>
      </tbody>
    </table>
    <p>Người lập lượng này, nếu nói trắng ra "Có một ông thần", thì sợ bên đối phương không công nhận, mà phải bị lỗi "Sở biệt bất thành", nên họ chỉ nói một cách hỗn hàm là "Có một Đấng". Song ẩn ý của họ muốn nói "Đấng ấy là một vị thần"; và họ cho vị Thần này có 3 đức tánh: 1. Thường còn, 2. Cao cả, 3. Sanh vạn vật.</p>
    <p>Nhưng Đấng ấy đã sanh ra được vạn vật, thì Đấng ấy tất nhiên cũng phải bị người khác lớn hơn sanh ra và chết; không phải cao cả và thường còn. Cũng như ông thợ làm nhà. Vì cái Nhơn này, trái ngược với ẩn ý của danh từ trước, nên bị lỗi "tương vi".</p>
    <p>Ngoại nhơn có thể lập lượng bác lại rằng:</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Đấng ấy phải bị người khác sanh ra và phải chết.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì Đấng ấy sanh ra vũ trụ vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như ông thợ làm nhà.</td></tr>
      </tbody>
    </table>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-0">14 lỗi về Tự Nhơn, chúng tôi đã giải thích rồi, sau đây sẽ nói 10 lỗi về Tợ dụ.</p>
    </div>

    <h3 id="phu-bai-on-hoc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Phụ bài ôn học (ôn lại 14 lỗi về Tợ Nhơn)</h3>
    <p>Quý vị nên xét kỹ các lượng sau này, rồi chỉ ra: lỗi của Tôn, lỗi của Nhơn, và nói rõ tại sao.</p>

    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Lượng thứ I</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Nhơn loại quyết định có người tạo.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có trí khôn và đủ cả mắt, tai v.v...</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như con, phải có cha mẹ sanh ra.</td></tr>
      </tbody>
    </table>

    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Lượng thứ II</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Gió thường còn.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì có động vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như hư không.</td></tr>
        <tr><td><strong>Dị dụ</strong></td><td>Như sóng.</td></tr>
      </tbody>
    </table>

    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Lượng thứ III</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Phải có một Đấng sanh ra vũ trụ.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì vũ trụ có trật tự vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như ông Kiến trúc sư làm nhà.</td></tr>
      </tbody>
    </table>

    <p class="mb-2 text-sm font-semibold text-secondary-700 dark:text-secondary-300">Lượng thứ IV</p>
    <table>
      <tbody>
        <tr><td><strong>Tôn</strong></td><td>Phải có một ông vô hình tạo ra vũ trụ.</td></tr>
        <tr><td><strong>Nhơn</strong></td><td>Vì vũ trụ có trật tự vậy.</td></tr>
        <tr><td><strong>Đồng dụ</strong></td><td>Như ông thợ làm nhà.</td></tr>
      </tbody>
    </table>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong Nhơn Minh Luận, thuật ngữ \'Nhơn\' được định nghĩa như thế nào?',
    options: {
      a: 'Là kết luận cuối cùng của một lập luận.',
      b: 'Là nguyên nhân hay lý do để giải thích cho một sự vật hoặc câu nói.',
      c: 'Là ví dụ cụ thể để minh họa cho lập luận.',
      d: 'Là đối tượng bị bác bỏ trong một cuộc tranh luận.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Kết luận của một lập luận là Tôn, không phải Nhơn.',
      b: 'Đúng. Theo tài liệu, Nhơn là nguyên nhân hay lý do để giải thích cho một sự vật hay câu nói.',
      c: 'Sai. Ví dụ cụ thể để minh họa được gọi là Dụ.',
      d: 'Sai. Đây không phải là định nghĩa của thuật ngữ Nhơn.',
    },
  },
  {
    question: 'Tánh chất \'Biến thị Tôn pháp tánh\' yêu cầu Nhơn phải có quan hệ như thế nào với Tôn?',
    options: {
      a: 'Nhơn phải hoàn toàn trái ngược với ý nghĩa của Tôn.',
      b: 'Nhơn phải không có bất kỳ liên hệ nào với Dị dụ.',
      c: 'Nhơn chỉ cần liên quan đến ví dụ thuận (Đồng dụ).',
      d: 'Nhơn phải bao trùm cả chủ từ và vị từ của Tôn.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Tánh chất này không yêu cầu Nhơn phải trái ngược với Tôn.',
      b: 'Sai. Yêu cầu không liên quan đến Dị dụ là tánh chất thứ ba (Dị phẩm biến vô tánh).',
      c: 'Sai. Sự liên quan với Đồng dụ là tánh chất thứ hai (Đồng phẩm định hữu tánh).',
      d: 'Đúng. Tánh chất Biến thị Tôn pháp tánh yêu cầu cái Nhơn phải bao trùm cả danh từ trước (chủ từ) và danh từ sau (vị từ) của Tôn.',
    },
  },
  {
    question: 'Lỗi \'Lưỡng câu bất thành\' xảy ra khi nào?',
    options: {
      a: 'Khi cái Nhơn đưa ra mập mờ, gây ra sự do dự.',
      b: 'Khi chỉ có bên khách không công nhận lý do đưa ra.',
      c: 'Khi cả người lập luận (chủ) và người nghe (khách) đều không công nhận cái Nhơn đó.',
      d: 'Khi cái Nhơn mâu thuẫn với ẩn ý của người lập luận.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Nhơn mập mờ, gây do dự là lỗi Dự dự bất thành.',
      b: 'Sai. Chỉ bên khách không công nhận thì đó là lỗi Tùy nhất bất thành.',
      c: 'Đúng. Lỗi Lưỡng câu bất thành xảy ra khi lập cái Nhơn mà cả chủ và khách đều không nhìn nhận.',
      d: 'Sai. Nhơn mâu thuẫn với ẩn ý thuộc về nhóm các lỗi Tương vi.',
    },
  },
  {
    question: 'Tại sao việc lập Nhơn \'Vì có mù\' để chứng minh \'Chỗ kia có lửa\' lại bị lỗi \'Dự dự bất thành\'?',
    options: {
      a: 'Vì không xác định rõ đó là sương mù hay khói, dẫn đến kết luận có thể có lửa hoặc không.',
      b: 'Vì Nhơn này mâu thuẫn với ví dụ về ao nước.',
      c: 'Vì \'mù\' hoàn toàn không liên quan gì đến lửa.',
      d: 'Vì lý do này không được giới khoa học công nhận.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Lỗi này xảy ra do Nhơn dự dự chẳng nhất định, không rõ là sương mù hay khói mù nên có thể lập được cả hai Tôn là \'có lửa\' và \'không có lửa\'.',
      b: 'Sai. Ví dụ về ao nước không liên quan đến trường hợp lỗi này.',
      c: 'Sai. Lỗi nằm ở sự mập mờ của việc xác định khói hay sương, chứ không phải là hoàn toàn không liên quan.',
      d: 'Sai. Nếu không được giới khoa học công nhận thì sẽ mắc lỗi Tùy nhất bất thành hoặc Sở y bất thành.',
    },
  },
  {
    question: 'Lỗi \'Cộng bất định\' được hiểu như thế nào trong các phép lập lượng?',
    options: {
      a: 'Nhơn chỉ xuất hiện ở Đồng dụ mà không có ở Dị dụ.',
      b: 'Nhơn không có mặt ở cả Đồng dụ lẫn Dị dụ.',
      c: 'Nhơn xuất hiện ở cả Đồng dụ và Dị dụ, khiến kết luận không thể xác định duy nhất.',
      d: 'Nhơn trái ngược hoàn toàn với tự tướng của danh từ trước.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Nếu Nhơn xuất hiện ở Đồng dụ và không có ở Dị dụ thì đó là một cái Nhơn đúng đắn.',
      b: 'Sai. Nhơn không có mặt ở cả Đồng dụ và Dị dụ là lỗi Bất cộng bất định.',
      c: 'Đúng. Lỗi Cộng bất định (Cọng bất định) xảy ra khi Nhơn liên quan đến cả Đồng dụ và Dị dụ, nên bị lỗi không nhất định.',
      d: 'Sai. Trái ngược tự tướng danh từ trước là lỗi Hữu pháp tự tướng tương vi.',
    },
  },
  {
    question: 'Trong ví dụ về tiếng là thường còn vì \'tai nghe\', tại sao lại mắc lỗi \'Bất cộng bất định\'?',
    options: {
      a: 'Vì cái Nhơn \'tai nghe\' không dính líu gì đến cả ví dụ thuận (thường còn) và ví dụ nghịch (vô thường).',
      b: 'Vì tai không thể nghe được những vật thường còn như hư không.',
      c: 'Vì bên khách không chấp nhận khả năng nghe của tai.',
      d: 'Vì tiếng nói thực chất là vô thường.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Cái Nhơn \'vì tai nghe\' này đối với cả Đồng dụ (hư không) và Dị dụ (cỏ cây) đều không có liên quan chút nào cả, nên bị lỗi bất định.',
      b: 'Sai. Tai không nghe được chỉ là chi tiết của ví dụ, lỗi cốt lõi là Nhơn không liên quan đến cả hai phần Dụ.',
      c: 'Sai. Việc khách không chấp nhận thuộc về nhóm lỗi Bất thành.',
      d: 'Sai. Đây không phải nguyên nhân tạo ra lỗi Bất cộng bất định trong Nhơn Minh Luận.',
    },
  },
  {
    question: 'Lỗi \'Tương vi quyết định\' xảy ra trong tình huống nào?',
    options: {
      a: 'Khi chủ và khách lập hai lượng trái ngược nhau nhưng cả hai đều có lý và không bên nào phá được bên nào.',
      b: 'Khi Nhơn mâu thuẫn với ẩn ý về một vị thần của người lập Tôn.',
      c: 'Khi một bên đưa ra lập luận quá yếu và bị bên kia bác bỏ dễ dàng.',
      d: 'Khi Nhơn được sử dụng không bao trùm hết đối tượng của Tôn.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Lỗi này xảy ra khi chủ và khách lập lượng trái nhau, cả hai đều không có lỗi và quyết định thành lập được nhưng không bên nào phá được bên nào.',
      b: 'Sai. Mâu thuẫn với ẩn ý về vị thần là lỗi Pháp sai biệt tương vi hoặc Hữu pháp sai biệt tương vi.',
      c: 'Sai. Phải là cả hai lập luận đều vững chắc, không phá được nhau mới tạo ra lỗi Tương vi quyết định.',
      d: 'Sai. Nhơn không bao trùm đối tượng của Tôn là do thiếu tánh chất thứ nhất, không phải lỗi Tương vi quyết định.',
    },
  },
  {
    question: 'Lỗi \'Pháp tự tướng tương vi\' được định nghĩa là gì?',
    options: {
      a: 'Nhơn mâu thuẫn với ý nghĩa tiềm ẩn của chủ từ.',
      b: 'Nhơn có liên quan đến một phần của Dị dụ.',
      c: 'Nhơn mâu thuẫn trực tiếp với lời nói rõ ràng (tự tướng) của danh từ sau trong Tôn.',
      d: 'Nhơn không được bên khách chấp nhận về mặt thực tế.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Mâu thuẫn với ý nghĩa tiềm ẩn (ẩn ý) của chủ từ là lỗi Hữu pháp sai biệt tương vi.',
      b: 'Sai. Liên quan đến một phần Dị dụ là lỗi thuộc nhóm Bất định.',
      c: 'Đúng. Lỗi này xảy ra khi cái Nhơn trái (mâu thuẫn) với tự tướng (lời nói trắng) của danh từ sau trong Tôn.',
      d: 'Sai. Nhơn không được khách chấp nhận là lỗi Tùy nhất bất thành hoặc Lưỡng câu bất thành.',
    },
  },
  {
    question: 'Trong lập luận \'Phải có một ông Vô hình tạo ra Vũ trụ\' vì \'Vũ trụ có trật tự\', tại sao lại mắc lỗi \'Hữu pháp tự tướng tương vi\'?',
    options: {
      a: 'Vì bên khách không tin vào sự tồn tại của ông Vô hình.',
      b: 'Vì vũ trụ thực chất không có trật tự.',
      c: 'Vì ông thợ làm nhà (Đồng dụ) không thể so sánh với đấng tạo hóa.',
      d: 'Vì một thực thể vô hình không thể tạo ra những vật hữu hình có trật tự như kiến trúc sư làm nhà.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Không tin vào điều được nói tới là vấn đề khác. Ở đây Tôn đang được lập ra để chứng minh.',
      b: 'Sai. \'Vũ trụ có trật tự\' là cái Nhơn đã được đưa ra để biện luận.',
      c: 'Sai. Sự mâu thuẫn cốt lõi không nằm ở Đồng dụ.',
      d: 'Đúng. Lỗi xảy ra do Nhơn \'có trật tự\' thuộc tính chất của vật hữu hình, rất trái ngược với danh từ trước của Tôn là \'Ông Vô hình\', vì đã vô hình thì không thể tạo ra vũ trụ hữu hình có trật tự.',
    },
  },
  {
    question: 'Lỗi \'Sở y bất thành\' liên quan đến vấn đề gì trong lập luận?',
    options: {
      a: 'Nhơn quá rộng bao trùm cả những điều sai trái.',
      b: 'Nhơn dựa trên một nền tảng hoặc kinh sách mà đối phương không công nhận.',
      c: 'Nhơn bị thay đổi ý nghĩa giữa chừng cuộc tranh luận.',
      d: 'Sự thiếu hụt ví dụ minh họa.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Đây không phải là định nghĩa của lỗi Sở y bất thành.',
      b: 'Đúng. Lỗi Sở y bất thành xảy ra khi chỗ y cứ của mình (như lấy kinh của Đạo mình làm bằng chứng) mà bên khách không công nhận.',
      c: 'Sai. Việc thay đổi ý nghĩa không được định nghĩa là Sở y bất thành.',
      d: 'Sai. Thiếu hụt ví dụ minh họa không phải là nguyên nhân của lỗi này.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-b-nhon',
  slug: 'b-nhon',
  title: 'B. Nhơn',
  type: 'article',
  status: 'published',
  order: 30,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/b-nhon/Ngh%E1%BB%87_thu%E1%BA%ADt_l%E1%BA%ADp_lu%E1%BA%ADn_Nh%C6%A1n_Minh.png',
      readingContent,
      tableOfContents: [
        { id: 'b-nhon', label: 'B. Nhơn' },
        { id: 'ba-tanh-chat-cua-nhon', label: 'Ba tánh chất của Nhơn', indent: 1 },
        { id: 'tinh-chat-1-bien-thi-ton-phap-tanh', label: '1. Biến thị Tôn pháp tánh', indent: 2 },
        { id: 'tinh-chat-2-dong-pham-dinh-huu-tanh', label: '2. Đồng phẩm định hữu tánh', indent: 2 },
        { id: 'tinh-chat-3-di-pham-bien-vo-tanh', label: '3. Dị phẩm biến vô tánh', indent: 2 },
        { id: '14-loi-ve-nhon', label: '14 lỗi về Nhơn', indent: 1 },
        { id: 'bon-loi-bat-thanh', label: 'I. Bốn lỗi bất thành', indent: 2 },
        { id: 'sau-loi-bat-dinh', label: 'II. Sáu lỗi bất định', indent: 2 },
        { id: 'bon-loi-tuong-vi', label: 'III. Bốn lỗi tương vi', indent: 2 },
        { id: 'phu-bai-on-hoc', label: 'Phụ bài ôn học', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/b-nhon/Architecture_of_Truth.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/sTVaHkYz-to',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/4w2S6c4fPXdIkDgazj2A8t?utm_source=generator&si=a91b8e97817d4a59',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - B. Nhơn',
    passPercentage: 70,
    questions,
  },
}

export default lesson
