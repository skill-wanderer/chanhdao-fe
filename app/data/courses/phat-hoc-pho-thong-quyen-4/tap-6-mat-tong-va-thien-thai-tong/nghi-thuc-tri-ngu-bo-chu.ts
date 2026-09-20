import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 6.2</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Nghi thức Trì Ngũ Bộ Chú là phần phụ đính quan trọng của Mật Tông, giúp hành giả tịnh hóa thân tâm, tiêu trừ chướng ngại và huân tập công đức thù thắng trên con đường tu tập.</p>
    </div>
  </div>

  <h2>NGHI THỨC TRÌ NGŨ BỘ CHÚ</h2>

  <hr>

  <p><em>(Đứng đọc 2 bài kệ : Khen Phật và Lễ Phật)</em></p>
  <blockquote>
    <p>Thiên thượng thiên hạ vô như Phật<br>
    Thập phương thế giới diệc vô tỷ<br>
    Thế gian sở hữu ngã tận kiến<br>
    Nhất thế vô hữu như Phật giả<br>
    Năng lễ sở lễ tánh không tịch<br>
    Cảm ứng đạo giao nan tư nghị<br>
    Ngã thử đạo tràng như đế châu<br>
    Thập phương chư Phật ảnh hiện trung<br>
    Ngã thân ảnh hiện chư Phật tiền<br>
    Đầu diện tiếp túc quy mạng lễ.</p>
  </blockquote>

  <p><em>(Xướng lễ Tam Bảo)</em></p>
  <ol>
    <li>Chí tâm đảnh lễ, Nam mô thập phương pháp giới thanh tịnh diệu pháp thân, Tỳ Lô Giá Na Phật.</li>
    <li>Chí tâm đảnh lễ, Nam mô thập phương pháp giới viên mãn báo thân, Lô Xá Na Phật.</li>
    <li>Chí tâm đảnh lễ, Nam mô thập phương pháp giới, giải thoát tướng nghiêm thâm, nhất thế Ứng Hóa Phật.</li>
    <li>Chí tâm đảnh lễ, Nam mô thập phương pháp giới, thâm diệu mật tạng, nhất thế Đà La Ni môn.</li>
    <li>Chí tâm đảnh lễ, Nam mô thập phương pháp giới, phước trí nhị nghiêm thân, nhất thế hải chúng Bồ tát.</li>
  </ol>

  <p><em>(Đứng dậy chắp tay đọc bài Tán Dương Chi)</em></p>
  <blockquote>
    <p>Dương chi tịnh thủy, biến sái tam thiên.<br>
    Tánh không bát đức lợi nhơn thiên<br>
    Pháp giới quảng tăng diên, diệt tội tiêu khiên, hỏa diệm hóa hồng liên.<br>
    Nam mô Thanh Lương Địa Bồ tát ma ha tát. (3 lần)</p>
  </blockquote>

  <p><em>(Ngồi kiết già chắp tay tụng Chú Đại Bi)</em></p>
  <blockquote>
    <p>Nam mô đại bi hội thượng Phật Bồ tát (3 lần)<br>
    Thiên thủ thiên nhãn vô ngại đại bi tâm đà la ni</p>
    <ol>
      <li>Nam mô hắc ra đát na đa ra dạ da</li>
      <li>Nam mô a rị da</li>
      <li>Bà lô yết đế thước bát ra da</li>
      <li>Bồ Đề tát đỏa bà da</li>
      <li>Ma ha tát đỏa bà da</li>
      <li>Ma ha ca lô ni ca da</li>
      <li>Án</li>
      <li>Tát bàn ra phạt duệ</li>
      <li>Số đát na đát tỏa</li>
      <li>Nam mô tất kiết lật đỏa y mông a rị da</li>
      <li>Bà lô kiết đế thất Phật ra lăng đà bà</li>
      <li>Nam mô na ra cẩn trì</li>
      <li>Hê rị, ma ha bàn đa sa mế</li>
      <li>Tát bà a tha đậu du bằng</li>
      <li>A thệ dựng</li>
      <li>Tát bà tát đa (Na ma bà tát đa)</li>
      <li>Na ma bà dà</li>
      <li>Ma phạt đạt đậu đát điệt tha</li>
      <li>Án. A bà lô hê</li>
      <li>Lô ca đế</li>
      <li>Ca ra đế</li>
      <li>Di hê rị</li>
      <li>Ma ha bồ đề tát đỏa</li>
      <li>Tát bà tát bà</li>
      <li>Ma ra ma ra</li>
      <li>Ma hê ma hê rị đà dựng</li>
      <li>Cu lô cu lô yết mông</li>
      <li>Độ lô độ lô phạt xà da đế</li>
      <li>Ma ha phạt xà da đế</li>
      <li>Đà ra đà ra</li>
      <li>Địa rị ni</li>
      <li>Thất Phật ra da</li>
      <li>Giá ra giá ra</li>
      <li>Mạ mạ phạt ma ra</li>
      <li>Mục đế lệ</li>
      <li>Y hê di hê</li>
      <li>Thất na thất na</li>
      <li>A Ra sâm Phật ra xá lợi</li>
      <li>Phạt sa phạt sâm</li>
      <li>Phật ra xá da</li>
      <li>Hô lô hô lô ma ra</li>
      <li>Hô lô hô lô hê rị</li>
      <li>Ta ra ta ra</li>
      <li>Tất rị tất rị</li>
      <li>Tô rô tô rô</li>
      <li>Bồ Đề dạ Bồ Đề dạ</li>
      <li>Bồ đà dạ bồ đà dạ</li>
      <li>Di đế rị dạ</li>
      <li>Na ra cẩn trì</li>
      <li>Địa rị sắc ni na</li>
      <li>Ba dạ ma na</li>
      <li>Ta bà ha</li>
      <li>Tất đà dạ</li>
      <li>Ta bà ha</li>
      <li>Ma ha tất đà dạ</li>
      <li>Ta bà ha</li>
      <li>Tất đà du nghệ</li>
      <li>Thất bàn ra dạ</li>
      <li>Ta bà ha</li>
      <li>Na ra cẩn trì</li>
      <li>Ta bà ha</li>
      <li>Ma ra na ra</li>
      <li>Ta bà ha</li>
      <li>Tất ra tăng a mục khê da</li>
      <li>Ta bà ha</li>
      <li>Ta bà ma ha a tất đà dạ</li>
      <li>Ta bà ha</li>
      <li>Giả kiết ra a tất đà dạ</li>
      <li>Ta bà ha</li>
      <li>Ba đà ma kiết tất đà dạ</li>
      <li>Ta bà ha</li>
      <li>Na ra cẩn trì bàn đà ra dạ</li>
      <li>Ta bà ha</li>
      <li>Ma bà rị thắng yết ra dạ</li>
      <li>Ta bà ha</li>
      <li>Nam mô hắc ra đát na đa ra dạ da</li>
      <li>Nam mô a rị da</li>
      <li>Bà lô kiết đế</li>
      <li>Thước bàn ra dạ</li>
      <li>Ta bà ha</li>
      <li>Án. Tất điện đô</li>
      <li>Mạn đà ra</li>
      <li>Bạt đà gia</li>
      <li>Ta bà ha.</li>
    </ol>
  </blockquote>

  <p><em>(Đọc bài tán dương công đức chú Chuẩn đề)</em></p>
  <blockquote>
    <p>Chuẩn đề công đức tụ<br>
    Tịch tịnh tâm thường tụng<br>
    Nhất thế chư đại nạn<br>
    Vô năng xâm thị nhân<br>
    Thiên thượng cập nhân gian<br>
    Thọ phước như Phật đẳng<br>
    Ngộ thử như ý châu<br>
    Định hoạch vô đẳng đẳng</p>
  </blockquote>

  <p><em>(Đọc tiếp bài kệ này)</em></p>
  <blockquote>
    <p>Khể thủ quy y tô tất đế<br>
    Đầu diện đảnh lễ thất cu chi<br>
    Ngã kim xưng tán đại Chuẩn đề<br>
    Duy nguyện từ bi thùy gia hộ.<br>
    Nam mô thất cu chi Phật mẫu sở thuyết đại Chuẩn đề Đà la ni</p>
  </blockquote>

  <hr>

  <h3>TRÌ NGŨ BỘ CHÚ</h3>
  <ol>
    <li><strong>Tịnh pháp giới chơn ngôn :</strong> (1 lần)<br>
    Án lam (21 lần)</li>
    <li><strong>Hộ thân chơn ngôn :</strong> (1 lần)<br>
    Án xỉ lam (21 lần)</li>
    <li><strong>Lục tự đại minh chơn ngôn :</strong> (1 lần)<br>
    Án ma ni bát di hồng (21 lần)</li>
    <li>Nam mô tát đa nẩm, tam miệu tam bồ đề, cu chi nẩm, đát điệt tha. Án chiết lệ chủ lệ chuẩn đề, ủng hộ đệ tử, pháp danh… nguyện tiêu tai chướng, nguyện chưởng phước duyên, nguyện kiến Di Đà, nguyện sanh Tịnh Độ, ta bà ha bộ lâm. (21 lần)</li>
    <li>Án chiết lệ chủ lệ chuẩn đề ta ha bộ lâm (108 biến)</li>
  </ol>

  <p><em>(Quỳ thẳng và tụng tiếp sau đây)</em></p>
  <blockquote>
    <p>Ngã kim trì tụng đại Chuẩn đề<br>
    Tốc phát Bồ đề quảng đại nguyện<br>
    Nguyện ngã định huệ tốc viên minh<br>
    Nguyện ngã công đức giai thành tựu<br>
    Nguyện ngã thắng phước biến trang nghiêm<br>
    Nguyện cọng chúng sanh thành Phật đạo<br>
    Ngã tích sở tạo chư ác nghiệp<br>
    Giai do vô thỉ tham, sân, si<br>
    Tùng thân khẩu ý chi sở sanh.<br>
    Nhất thiết ngã kim giai sám hối<br>
    Nguyện ngã lâm dục mạng chung thời<br>
    Tận trừ nhất thế chư chướng ngại<br>
    Diện kiến bỉ Phật A Di Đà<br>
    Tức đắc vãng sanh an lạc sát.</p>
  </blockquote>

  <p><em>(đồng đứng dậy, xướng lạy ba lạy)</em></p>
  <ul>
    <li>Nam mô Đại thánh Chuẩn đề vương Bồ tát ma ha tát. (3 lạy)</li>
  </ul>

  <p><em>(đồng quỳ xuống, tụng tiếp như sau)</em></p>
  <h3>THIỆN NỮ THIÊN CHÚ</h3>
  <blockquote>
    <p>Nam mô Phật Đà<br>
    Nam mô Đạt Mạ<br>
    Nam mô Tăng Già<br>
    Nam mô thất lỵ, ma ha đề tỷ da, đát nể dã tha, ba lỵ phú lầu na, giá lỵ tam mạn đà, đạt xá ni, ma ha tỳ ha ra dà đế, tam mạn đà, tỳ ni dà đế, ma ha ca rị đã, ba nể ba ra ba nể, tát rị phạ lặt tha, tam mạn đà, tu bát lê đế, phú lệ na, a rị na, đạt mạ đế, ma ha tỳ cổ tất đế, ma ha di lặc đế, lâu phạ tăng kỳ đế, hê đế, tỷ tăng kỳ hê đế, tam mạn đà, a tha a nâu đà la ni.</p>
    <p>Nam mô Tam châu cảm ứng Hộ pháp Vi đà tôn thiên Bồ tát. (3 lần)</p>
  </blockquote>

  <blockquote>
    <p>Trì chú công đức thù thắng hạnh<br>
    Vô biên thắng phước giai hồi hướng<br>
    Phổ nguyện pháp giới chư chúng sanh<br>
    Tốc vãng vô lượng quang Phật sát<br>
    Nguyện tiêu tam chướng trừ phiền não<br>
    Nguyện đắc trí huệ chơn minh liễu<br>
    Phổ nguyện tội chướng tất tiêu trừ<br>
    Thế thế thường hành Bồ tát đạo<br>
    Nguyện sanh Tây phương Tịnh độ trung<br>
    Cửu phẩm liên hoa vi phụ mẫu<br>
    Hoa khai kiến Phật ngộ vô sanh<br>
    Bất thối Bồ tát vi bạn lữ<br>
    Nguyện dĩ thử công đức<br>
    Phổ cập ư nhất thiết<br>
    Ngã đẳng dữ chúng sanh<br>
    Giai cọng thành Phật đạo</p>
  </blockquote>

  <blockquote>
    <p>Thiên, A tu la, dược xoa đẳng<br>
    Lai thính pháp giả ứng chí tâm<br>
    Ủng hộ Phật pháp sử thường tồn<br>
    Các các thường hành Thế tôn giáo<br>
    Chư hữu thính đồ lai chí thử<br>
    Hoặc tại địa thượng hoặc hư không<br>
    Thường ư nhơn thế khởi từ tâm<br>
    Trú dạ tự thân y pháp trụ<br>
    Nguyện chư thế giới thường an ổn<br>
    Vô biên phước trí ích quần sanh<br>
    Sở hữu tội chướng tịnh tiêu trừ<br>
    Viễn ly chúng khổ quy viên tịch<br>
    Hằng dụng giới hương đồ oanh thể<br>
    Thường trì định phục dĩ tư thân<br>
    Bồ đề diệu pháp biến trang nghiêm<br>
    Tùy sở trụ xứ thường an lạc.</p>
  </blockquote>

  <ul>
    <li>Nam mô Hộ pháp tạng Bồ tát ma ha tát (3 lạy)</li>
  </ul>

  <hr>

  <p><em>(đứng đọc tiếp)</em></p>

  <h3>PHỤC NGUYỆN</h3>
  <blockquote>
    <p>Tam bảo chứng minh<br>
    Oai thần hộ niệm<br>
    Bồ tát Thinh văn<br>
    Phạm thiên Đế thích<br>
    Tứ thiên vương chúng<br>
    Thiên long bát bộ<br>
    Hộ pháp thần vương<br>
    Nhất thế thiện thần<br>
    Đồng thùy chứng giám<br>
    Đệ tử chúng đẳng<br>
    Chí tâm trì chú<br>
    Hồi hướng công đức<br>
    Sơn lâm thủy lục<br>
    Không giã thị thành<br>
    Oan hồn yểu tử<br>
    Nhất thế hương linh<br>
    Cu sanh Tịnh độ</p>
  </blockquote>

  <h3>THỨ NGUYỆN</h3>
  <blockquote>
    <p>Đệ tử chúng đẳng<br>
    Tiêu trừ nghiệp chướng<br>
    Tà ma ngoại đạo<br>
    Yêu quái ác tinh<br>
    Ly mỵ vọng lượng<br>
    Áp trừ chú trớ<br>
    Tật bệnh tội khiên<br>
    Tai nạn hoạnh ương<br>
    Nhất thế ác duyên<br>
    Tất giai tiêu diệt</p>
  </blockquote>

  <h3>PHỔ NGUYỆN</h3>
  <blockquote>
    <p>Tứ thời an lạc<br>
    Sở trụ phong nhiêu<br>
    Phước huệ tăng long<br>
    Tùy tâm mãn nguyện<br>
    Nam mô công đức lâm Bồ tát ma ha tát. (3 lạy)</p>
  </blockquote>
</div>
`

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-6-mat-tong-va-thien-thai-tong-nghi-thuc-tri-ngu-bo-chu',
  slug: 'nghi-thuc-tri-ngu-bo-chu',
  title: 'Nghi thức Trì Ngũ Bộ Chú',
  type: 'article',
  status: 'published',
  order: 2,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'tri-ngu-bo-chu', label: 'Trì Ngũ Bộ Chú' },
      ],
    }
  ],
}

export default lesson