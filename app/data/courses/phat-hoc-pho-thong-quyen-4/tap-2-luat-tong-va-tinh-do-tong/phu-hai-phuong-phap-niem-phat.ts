import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <span class="badge badge-free">Bản Đồ Tu Phật - Tập 2.3</span>

  <div class="format-notice">
    <span class="format-notice-icon">📌</span>
    <div>
      <strong>Lưu ý:</strong>
      <p>Nghi thức Tọa Thiền Niệm Phật và Kinh Hành Niệm Phật được trích dẫn nguyên văn từ Bản Đồ Tu Phật, nhằm hướng dẫn chi tiết cách thức thực hành cho hành giả tu Tịnh Độ Tông.</p>
    </div>
  </div>

  <h2>TẬP 2.3: PHỤ HAI PHƯƠNG PHÁP NIỆM PHẬT</h2>

  <hr>

  <h3 id="nghi-thuc-toa-thien">NGHI THỨC TỌA THIỀN NIỆM PHẬT</h3>

  <ul style="padding-left: 2.5rem;">
    <li>Hành giả súc miệng, rửa tay sạch sẽ, y phục tề chỉnh ngồi trước bàn Phật hoặc ở trong phòng riêng hay trong mùng, chỗ nào mát mẻ và không muỗi, là tiện hơn hết.</li>
    <li>Hành giả ngồi kiết già hay bán già cũng được, ngồi thẳng lưng, cổ ngay, đầu hơi nghiêng tới, đôi mắt mở một phần ba, tay bỏ xuôi theo chân và đọc thầm hai bài chú như sau :</li>
  </ul>

  <h4>CHÚ NGỒI KIẾT GIÀ</h4>
  <blockquote>
    <p>Kiết già phu tọa<br>
    Đương nguyện chúng sanh<br>
    Thiện căn kiên cố<br>
    Đắc bất động địa<br>
    Án phạ tất ra a ni, bác ra ni, ấp da da tá ha (3 lần)</p>
  </blockquote>

  <h4>CHÚ TỌA THIỀN</h4>
  <blockquote>
    <p>Chánh thân đoan tọa<br>
    Đương nguyện chúng sanh<br>
    Tọa Bồ đề tòa<br>
    Tâm vô sở trước<br>
    Án phạ tất ra a ni, bác ra ni, ấp da da tá ha (3 lần)</p>
  </blockquote>

  <ul style="padding-left: 2.5rem;">
    <li>Hành giả bắt đầu hít vô và thở ra mười hơi thiệt dài và mạnh. Khi thở ra hành giả phải tưởng bao nhiêu các phiền não trược khí trong người bị tống ra theo hơi thở này. Khi hít vào hành giả phải tưởng : những thanh khí, tươi sáng của vũ trụ, của chơn lý, được thấm vào thân tâm làm cho hành giả nhẹ nhàng sảng khoái.</li>
    <li>Xong rồi hành giả trở lại thở thật nhẹ và dài, chắp tay ngang ngực và đọc thầm các bài như sau :</li>
  </ul>

  <h4>BÀI CÚNG HƯƠNG</h4>
  <blockquote>
    <p>Giới hương, định hương dữ Huệ hương<br>
    Giải thoát, Giải thoát tri kiến hương<br>
    Quang minh vân đài biến pháp giới<br>
    Cúng dường thập phương tam bảo tiền<br>
    Nam mô Hương cúng dường Bồ tát ma ha tát (3 biến)<br>
    Nam mô Bổn sư Thích Ca Mâu ni Phật (3 biến)<br>
    Vô thượng thậm thâm vi diệu pháp<br>
    Bá thiên vạn ức kiếp nan ngộ<br>
    Ngã kim kiến văn đắc thọ trì<br>
    Nguyện giải Như lai chơn thật nghĩa<br>
    Nam mô thập phương thường trụ Tam bảo (3 lần)</p>
  </blockquote>

  <p>Hành giả tay trái ký thẳng, tay mặt cầm chuỗi và đọc các bài chú như sau :</p>

  <h4>CHÚ CẦM CHUỖI NIỆM PHẬT</h4>
  <blockquote>
    <p>Bồ đề nhất bá bát<br>
    Diệt tội đẳng hà sa<br>
    Viễn ly tam đồ khổ<br>
    Xích sắc biến liên hoa<br>
    Án phệ lô dá na, mạ lạ, mạ lạ, tá phạ hạ (3 lần)<br>
    Ái hà thiên xích lãng<br>
    Khổ hải vạn trùng ba<br>
    Dục thoát luân hồi khổ<br>
    Tảo cấp niệm Di Đà<br>
    Nam mô Tây phương Cực lạc thế giới, Đại từ Đại bi, tiếp dẫn đạo sư A Di Đà Phật. (niệm nhiều ít tùy ý).</p>
  </blockquote>

  <p>Hành giả không niệm ra tiếng, chỉ dùng tâm tưởng niệm danh hiệu Phật A Di Đà. Niệm mỗi câu, tai hành giả đều nghe rõ ràng sáu tiếng, không lu mờ một tiếng nào.<br>
  Niệm “Nam mô A Di Đà Phật” đếm một, niệm “Nam mô A Di Đà Phật” đếm hai, cho đến mười câu lần một hột chuỗi. Hành giả bắt đầu đếm một lại, cho đến mười câu lần một hột chuỗi nữa.<br>
  Trong khi đếm, nếu niệm ít mà nhớ nhiều thì hành giả phải bắt đầu đếm lại một, hay đã niệm nhiều, mà nhớ ít, cũng bắt đầu đếm lại một, hoặc quên không biết đã niệm được bao nhiêu rồi, cũng bắt đầu đếm lại một.</p>

  <p>Khi niệm Phật xong, tiếp niệm bốn vị thánh như sau :</p>
  <ul style="padding-left: 2.5rem;">
    <li>Nam mô Quán thế âm Bồ tát (10 biến)</li>
    <li>Nam mô Đại Thế Chí Bồ tát</li>
    <li>Nam mô Địa Tạng Vương Bồ tát</li>
    <li>Nam mô Thanh Tịnh đại hải chúng Bồ tát</li>
  </ul>

  <h4>BÀI SÁM</h4>
  <blockquote>
    <p>Đệ tử chúng đẳng tùy thuận tu tập<br>
    Phổ Hiền Bồ tát thập chủng đại nguyện :<br>
    Nhứt giả lễ kỉnh chư Phật<br>
    Nhị giả xưng táng Như Lai<br>
    Tam giả quảng tu cúng dường<br>
    Tứ giả sám hối nghiệp chướng<br>
    Ngũ giả tùy hỷ công đức<br>
    Lục giả thỉnh chuyển pháp luân<br>
    Thất giả thỉnh Phật trụ thế<br>
    Bát giả thường tùy Phật học<br>
    Cửu giả hằng thuận chúng sinh<br>
    Thập giả phổ giai hồi hướng</p>
  </blockquote>

  <h4>HỒI HƯỚNG</h4>
  <blockquote>
    <p>Niệm Phật công đức thù thắng hạnh<br>
    Vô biên thắng phước giai hồi hướng<br>
    Phổ nguyện Pháp giới chư chúng sanh<br>
    Tốc vãng Vô lượng quang Phật sát<br>
    Nguyện tiêu tam chướng trừ phiền não<br>
    Nguyện đắc trí huệ chơn minh liễu<br>
    Phổ nguyện tội chướng tất tiêu trừ<br>
    Thế thế thường hành Bồ tát đạo<br>
    Nguyện sanh Tây phương Tịnh độ trung<br>
    Cửu phẩm liên hoa vi phụ mẫu<br>
    Hoa khai kiến Phật ngộ vô sanh<br>
    Bất thối Bồ tát vi bạn lữ.<br>
    Nguyện dĩ thử công đức<br>
    Phổ cập ư nhất thiết<br>
    Ngã đẳng dữ chúng sanh<br>
    Giai cọng thành Phật đạo.</p>
  </blockquote>

  <ul style="padding-left: 2.5rem;">
    <li>Tự quy y Phật, đương nguyện chúng sanh, thể giải đại đạo, phát vô thượng tâm (1 xá)</li>
    <li>Tự quy y Pháp, đương nguyện chúng sanh, thâm nhập kinh tạng, trí huệ như hải (1 xá)</li>
    <li>Tự quy y Tăng, đương nguyện chúng sanh, thống lý đại chúng, nhứt thiết vô ngại (1 xá)</li>
  </ul>

  <p>Hành giả đọc bài kệ xả già như sau và duỗi dài hai chân ra độ 3 phút cho máu chạy đều rồi sẽ đứng dậy.</p>

  <blockquote>
    <p>Xả già phu tọa<br>
    Đương nguyện chúng sanh<br>
    Quán chư hạnh pháp<br>
    Tất quy tán diệt.</p>
  </blockquote>

  <p>- HẾT-</p>

  <hr>

  <h3 id="nghi-thuc-kinh-hanh">NGHI THỨC KINH HÀNH NIỆM PHẬT</h3>

  <p>Hành giả nào thường bị bệnh hôn trầm (ngủ gật) hoặc ngồi lâu hay tê mỏi v.v…thì nên dùng phương pháp Kinh hành niệm Phật này. Nghĩa là hành giả vừa đi xung quanh bàn thờ Phật và vừa niệm Phật, (đi từ trái qua mặt).<br>
  Trước nhất hành giả phải đốt hương đèn trên bàn đứng trước Phật, đọc bài tán thán công đức Phật, rồi lễ Tam bảo, theo nghi thức như sau :</p>

  <blockquote>
    <p>Như Lai diệu sắc thân<br>
    Thế gian vô dữ đẳng<br>
    Vô tỷ bất tư nghị<br>
    Thị cố kim đảnh lễ<br>
    Như Lai sắc vô tận<br>
    Trí huệ diệc phục nhiên<br>
    Nhứt thế pháp thường trụ<br>
    Thị cố ngã quy y<br>
    Đại trí đại nguyện lực<br>
    Phổ độ ư quần sanh<br>
    Linh xả nhiệt não thân<br>
    Sanh bỉ thanh lương quốc<br>
    Ngã kim tịnh tam nghiệp<br>
    Quy y cập lễ tán<br>
    Nguyện cộng chư chúng sanh<br>
    Đồng sanh an lạc sát.</p>
  </blockquote>

  <ol style="padding-left: 2.5rem;">
    <li>Chí tâm đảnh lễ<br>
    Thường Tịch Quang Tịnh độ, A Di Đà Như Lai, Thanh tịnh diệu pháp thân, biến pháp giới chư Phật. (1 lạy)</li>
    <li>Chí tâm đảnh lễ<br>
    Thật báo trang nghiêm độ, A Di Đà Như Lai, vi trần tướng hải thân, biến pháp giới chư Phật. (1 lạy)</li>
    <li>Chí tâm đảnh lễ<br>
    Phương tiện thánh cư độ, A Di Đà Như Lai, Giải thoát tướng nghiêm thân, biến pháp giới chư Phật. (1 lạy)</li>
    <li>Chí tâm đảnh lễ<br>
    Tây phương An lạc độ, A Di Đà Như Lai, Đại thừa căn giới thân, biến pháp giới chư Phật. (1 lạy)</li>
    <li>Chí tâm đảnh lễ<br>
    Tây phương An lạc độ, A Di Đà Như Lai, thập phương quá vãng thân, biến pháp giới chư Phật. (1 lạy)</li>
    <li>Chí tâm đảnh lễ<br>
    Tây phương An lạc độ, Giáo Hạnh Lý tam kinh, cực y chánh tuyên dương, biến pháp giới tôn pháp. (1 lạy)</li>
    <li>Chí tâm đảnh lễ<br>
    Tây phương An lạc độ, Quán Thế Âm Bồ tát, vạn ức tử kim thân, biến pháp giới Bồ tát. (1 lạy)</li>
    <li>Chí tâm đảnh lễ<br>
    Tây phương An lạc độ, Đại Thế Chí Bồ tát, vô biên quang trí thân, biến pháp giới Bồ tát. (1 lạy)</li>
    <li>Chí tâm đảnh lễ<br>
    Tây phương An lạc độ, thanh tịnh Đại hải chúng, Phước Trí nhị nghiêm thân, biến pháp giới Thánh chúng. (1 lạy)</li>
  </ol>

  <p>Đứng chắp tay nguyện (chủ lễ xướng)<br>
  Ngã kim phổ vị tứ ân, tam hữu, pháp giới chúng sanh, tất nguyện đoạn trừ tam chướng, quy mạng sám hối.<br>
  Quỳ gối chắp tay sám hối.<br>
  Chí tâm sám hối :</p>

  <blockquote>
    <p>Đệ tử (pháp danh), cập pháp giới chúng sanh, tùng vô thỉ lai, vô minh sở phú, điên đảo mê hoặc, nhi do lục căn tam nghiệp, tập bất thiện pháp, quảng tạo thập ác, cập ngũ vô gián nhứt thiết chúng tội, vô lượng vô biên, thuyết bất khả tận, thập phương chư Phật, thường trụ thế gian, pháp âm bất tuyệt, diệu hương sung tắc, pháp vị đinh không, phóng tịnh quang minh, chiếu xúc nhất thiết, thường trụ diệu lý, biến mãn hư không.<br>
    Ngã vô thỉ lai, lục căn nội manh, tam nghiệp hôn ám, bất kiến, bất văn, bất giác, bất tri, dĩ thị nhơn duyên, trường lưu sanh tử, kinh lịch ác đạo, bá thiên vạn kiếp, vĩnh vô xuất kỳ.<br>
    Kinh vân : Tỳ lô giá na, biến nhứt thiết xứ, kỳ Phật sở trụ, danh Thường tịch quang.<br>
    Thị cố đương tri, nhứt thiết chư pháp, vô phi Phật pháp, nhi ngã bất liễu, tùy vô minh lưu, thị tắc ư Bồ đề trung, kiến bất thanh tịnh, ư giải thoát trung, nhi khởi triền phược; kim thỉ giác ngộ, kim thỉ chi hối, phụng đối chư Phật, Di Đà Thế tôn, phát lồ sám hối, Đương linh ngã dữ pháp giới chúng sanh, tam nghiệp lục căn, vô thỉ sở tác, hiện tác, đương tác, tự tác giáo tha, kiến văn tùy hỷ, nhược ức bất ức, nhược thức bất thức, nhược nghi bất nghi, nhược phú nhược lộ, nhứt thiết trọng tội, tất giai thanh tịnh.<br>
    Ngã sám hối dĩ, lục căn tam nghiệp, tịnh vô hà lụy, sở tu thiện căn, tất diệt thanh tịnh, giai tất hồi hướng, trang nghiêm Tịnh độ, phổ dữ chúng sanh, đồng sanh an dưỡng.<br>
    Nguyện : A Di Đà Phật, thường lai hộ trì, linh ngã thiện căn, hiện tiền tăng tấn, bất thất tịnh nhân, lâm mạng chung thời, thân tâm chánh niệm, thị thính phân minh, diện phụng Di Đà, dữ chư Thánh chúng, thủ chấp hoa đài tiếp dẫn ư ngã, nhứt sát na khoảnh, sanh tại Phật tiền, cụ Bồ tát đạo, quảng độ chúng sanh đồng thành chủng trí. (1 xá)</p>
  </blockquote>

  <blockquote>
    <p>Tội tùng tâm khởi tùng tâm sám<br>
    Tâm nhược diệt thời tội diệt vong<br>
    Tội vong tâm diệt lưỡng câu không<br>
    Thị tắc danh vi chơn sám hối (xá rồi đứng dậy)<br>
    Nam mô cầu sám hối Bồ Tát Ma Ha Tát<br>
    (đọc 3 lần, mỗi lần 1 lạy rồi đứng dậy đọc tiếp)</p>
  </blockquote>

  <blockquote>
    <p>A Di Đà Phật thân kim sắc<br>
    Tướng hảo quang minh vô đẳng luân<br>
    Bạch hào uyển chuyển ngũ Tu di<br>
    Hám mục trừng thanh tứ đại hải<br>
    Quang trung hóa Phật vô số ức<br>
    Hóa Bồ tát chúng diệt vô biên<br>
    Tứ thập bát nguyện độ chúng sanh<br>
    Cửu phẩm hàm linh đăng bỉ ngạn<br>
    Nam mô Tây phương cực lạc thế giới, đại từ đại bi, tiếp dẫn đạo sư A Di Đà Phật.<br>
    Nam mô A Di Đà Phật.</p>
  </blockquote>

  <p>(hành giả đi xung quanh bàn Phật từ trái qua mặt, hoặc 3 vòng hoặc 8 vòng tùy ý, vừa đi vừa niệm Phật)</p>

  <ul style="padding-left: 2.5rem;">
    <li>Nam mô Đại bi Quán thế Âm Bồ tát. (3 lần)</li>
    <li>Nam mô Đại Thế Chí Bồ tát (3 lần)</li>
    <li>Nam mô Đại nguyện Địa Tạng Vương Bồ tát (3 lần)</li>
    <li>Nam mô Thanh tịnh Đại hải chúng Bồ tát (3 lần)</li>
  </ul>
  <p>(đồng quỳ xuống chắp tay và đọc bài sám như sau) :</p>

  <blockquote>
    <p>Đệ tử chúng đẳng<br>
    Tùy thuận tu tập<br>
    Phổ Hiền Bồ tát<br>
    Thập chủng đại nguyện<br>
    Nhứt giả lễ kính chư Phật<br>
    Nhị giả xưng tán Như Lai<br>
    Tam giả quảng tu cúng dường<br>
    Tứ giả sám hối nghiệp chướng<br>
    Ngũ giả tùy hỷ công đức<br>
    Lục giả thỉnh chuyển pháp luân<br>
    Thất giả thỉnh Phật trụ thế<br>
    Bát giả thường tùy Phật học<br>
    Cửu giả hằng thuận chúng sanh<br>
    Thập giả phổ giai hồi hướng</p>
  </blockquote>

  <p>(tiếp đọc bài hồi hướng)</p>

  <blockquote>
    <p>Niệm Phật công đức thù thắng hạnh<br>
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
    Phổ cập ư nhứt thế<br>
    Ngã đẳng dữ chúng sanh<br>
    Giai cộng thành Phật đạo</p>
  </blockquote>
  
  <p>(đồng đứng dậy)</p>

  <ul style="padding-left: 2.5rem;">
    <li>Đệ tử đại vì nhứt thế Sư trưởng ân, chí tâm đảnh lễ, Nam mô Tận Hư không, biến pháp giới, quá hiện, vị lai, thập phương chư Phật, Tôn pháp, Hiền Thánh Tăng, thường trụ Tam bảo. (1 lạy)</li>
    <li>Đệ tử đại vì nhứt thế Phụ mẫu ân, chí tâm đảnh lễ, Nam mô Ta Bà Giáo Chủ Điều Ngự Bổn Sư Thích Ca Mâu Ni Phật, Long Hoa Giáo Chủ đương lai hạ sanh Di Lặc Tôn Phật, Đại Trí Văn Thù Sư Lợi Bồ tát, Đại Hạnh Phổ Hiền Bồ tát, Linh Sơn hội thượng Phật Bồ tát. (1 lạy)</li>
    <li>Đệ tử đại vì tam đồ thọ khổ, cập pháp giới nhứt thế chúng sanh, chí tâm đảnh lễ, Nam mô Tây phương Cực Lạc thế giới, Đại từ Đại bi tiếp dẫn Đạo Sư A Di Đà Phật, Đại bi Quán Thế Âm Bồ tát, Đại Thế Chí Bồ tát, Liên trì Hải hội Phật Bồ tát. (1 lạy)</li>
  </ul>

  <p>- HẾT-</p>
</div>
`

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-2-luat-tong-va-tinh-do-tong-phu-hai-phuong-phap-niem-phat',
  slug: 'phu-hai-phuong-phap-niem-phat',
  title: 'Phụ: Hai phương pháp niệm Phật',
  type: 'article',
  status: 'published',
  order: 3,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'toa-thien-niem-phat', label: 'Nghi thức Tọa thiền niệm Phật' },
        { id: 'kinh-hanh-niem-phat', label: 'Nghi thức Kinh hành niệm Phật' },
      ],
    }
  ],
}

export default lesson