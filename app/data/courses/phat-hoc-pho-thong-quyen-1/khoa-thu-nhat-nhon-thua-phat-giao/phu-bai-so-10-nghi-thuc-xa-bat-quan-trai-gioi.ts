import type { Lesson } from '~/types/course'

const readingContent = `
<section id="nghi-thuc-xa-bat-quan-trai-gioi">
<h2>NGHI THỨC XẢ BÁT QUAN TRAI GIỚI</h2>
<p>Sau 24 giờ đồng hồ (đúng như giờ thọ giới), người thọ giới thỉnh Giới sư lên chùa ngồi một bên. Người thọ giới lạy Giới sư một lạy rồi ngồi xuống chắp tay lạy rằng:</p>
<p><em>"Đại đức một lòng nghĩ, con pháp danh là... đã nguyện thọ Bát quan trai giới, giữ trọn một ngày đêm. Bạch Đại đức! Nay con xin xả giới."</em> (Bạch xong, lạy một lạy lui ra)</p>
<p>Nếu không có Giới sư, tự mình làm lễ xả giới thì nên theo nghi thức sau này.</p>
</section>

<section id="le-xa-gioi-truoc-tam-bao">
<h2>LỄ XẢ GIỚI TRƯỚC TAM BẢO</h2>
<p>Đến trước Tam Bảo, thắp hương quỳ xuống khấn nguyện:</p>
<p>Pháp vương Vô Thượng Tôn,<br/>
Tam giới vô luân thất,<br/>
Thiên nhân chi Đạo Sư,<br/>
Tứ sanh chi Từ Phụ,<br/>
Ư nhứt niệm quy y,<br/>
Năng diệt tam kỳ nghiệp,<br/>
Xưng dương nhược tán thán,<br/>
Ức kiếp mạc năng tận.</p>
<p>Tư thời đệ tử (tên họ gì) Pháp danh (pháp danh gì) ư nhứt nhựt nhứt dạ, phát nguyện thọ trì Bát Quan Trai Giới, công huân dĩ mãn, nguyện lực châu toàn, nguyện thập phương chư Phật, chư đại Bồ-tát, chư đại thiên thần, từ bi gia hộ, đệ tử sanh sanh đắc phùng Phật pháp, đắc trị thiện duyên, cập nhất thiết chúng sanh đồng thành Phật đạo. <em>(1 xá, đứng dậy)</em></p>
<p><strong>Nam Mô Hộ Giới Tạng Bồ-tát Ma-ha-tát</strong> <em>(Xướng ba lần, lạy ba lạy)</em></p>
</section>

<section id="bat-nha-tam-kinh">
<h2>MA-HA BÁT-NHÃ BA-LA-MẬT-ĐA TÂM KINH</h2>
<p><em>(Đứng dậy tụng Bát nhã)</em></p>
<p>Quán Tự Tại Bồ-tát, hành thâm Bát-nhã Ba-la-mật-đa thời, chiếu kiến ngũ uẩn giai không, độ nhứt thiết khổ ách.</p>
<p>Xá-lợi tử! Sắc bất dị không, không bất dị sắc; thọ, tưởng, hành, thức, diệc phục như thị.</p>
<p>Xá-lợi tử! Thị chư pháp không tướng, bất sanh bất diệt, bất cấu bất tịnh, bất tăng bất giảm, thị cố không trung vô sắc, vô thọ, tưởng, hành, thức; vô nhãn, nhĩ, tỷ, thiệt, thân, ý; vô sắc, thanh, hương, vị, xúc, pháp; vô nhãn giới, nãi chí vô ý thức giới; vô vô minh diệc, vô vô minh tận, nãi chí vô lão tử diệc vô lão tử tận; vô Khổ, Tập, Diệt, Đạo; vô trí diệc vô đắc. Dĩ vô sở đắc cố, Bồ-đề-tát-đỏa y Bát-nhã Ba-la-mật-đa cố tâm vô quái ngại; vô quái ngại cố, vô hữu khủng bố, viễn ly điên đảo mộng tưởng, cứu cánh Niết-bàn. Tam thế chư Phật y Bát-nhã Ba-la-mật-đa cố, đắc A-nậu-đa-la Tam-miệu Tam-bồ-đề. Cố tri Bát-nhã Ba-la-mật-đa thị đại thần chú, thị đại minh chú, thị vô thượng chú, thị vô đẳng đẳng chú, năng trừ nhất thiết khổ, chơn thiệt bất hư; cố thuyết Bát-nhã Ba-la-mật-đa chú, tức thuyết chú viết:</p>
<p>Yết-đế-yết-đế, ba-la yết-đế, ba-la-tăng yết-đế, Bồ-đề tát-bà-ha.</p>
</section>

<section id="vang-sanh-than-chu">
<h2>VÃNG SANH THẦN CHÚ</h2>
<p>Nam mô A di đa bà dạ, đa tha già đa dạ, đa điệt dạ tha, a di rị đô bà tỳ, a di rị đa tất đam bà tỳ, a di rị đa tỳ ca lan đế, a di rị đa tỳ ca lan đa, dà di nị, dà dà na, chỉ đa ca lệ ta-bà-ha. <em>(3 lần)</em></p>
</section>

<section id="tan-phat-niem-phat">
<h2>TÁN PHẬT</h2>
<p>A Di Đà Phật thân kim sắc<br/>
Tướng hảo quang minh vô đẳng luân<br/>
Bạch hào uyển chuyển ngũ Tu-di,<br/>
Cám mục trừng thanh tứ đại hải,<br/>
Quang trung hóa Phật vô số ức,<br/>
Hóa Bồ-tát chúng diệc vô biên,<br/>
Tứ thập bát nguyện độ chúng sanh,<br/>
Cửu phẩm hàm linh đăng bỉ ngạn.</p>
<p>Nam Mô Tây Phương Cực Lạc Thế giới Đại Từ Đại Bi Tiếp dẫn Đạo sư A Di Đà Phật.</p>
<p><strong>Nam Mô A Di Đà Phật</strong> <em>(108 lần)</em></p>
<p>Nam Mô Quán Thế Âm Bồ-tát <em>(10 lần)</em><br/>
Nam Mô Đại Thế Chí Bồ-tát <em>(10 lần)</em><br/>
Nam Mô Thanh Tịnh Đại Hải Chúng Bồ-tát <em>(10 lần)</em></p>
</section>

<section id="pho-hien-hanh-nguyen">
<h2>PHỔ HIỀN HẠNH NGUYỆN</h2>
<p><em>(Quỳ xuống chắp tay đọc bài Phổ Hiền hạnh nguyện)</em></p>
<p>Đệ tử chúng đẳng,<br/>
Tùy thuận tu tập,<br/>
Phổ Hiền Bồ-tát,<br/>
Thập chủng đại nguyện:<br/>
Nhứt giả lễ kính chư Phật,<br/>
Nhị giả xưng tán Như Lai,<br/>
Tam giả quảng tu cúng dường,<br/>
Tứ giả sám hối nghiệp chướng,<br/>
Ngũ giả tùy hỷ công đức,<br/>
Lục giả thỉnh chuyển pháp luân,<br/>
Thất giả thỉnh Phật trụ thế,<br/>
Bát giả thường tùy Phật học,<br/>
Cửu giả hằng thuận chúng sanh,<br/>
Thập giả phổ giai hồi hướng.</p>
</section>

<section id="that-phat-diet-toi">
<h2>THẤT PHẬT DIỆT TỘI CHƠN NGÔN</h2>
<p>Ly bà ly bà đế, cầu ha cầu ha đế, đà ra ni đế, ni ha ra đế, tỳ lê nể đế, ma ha già đế, chơn lăng càng đế ta-bà-ha. <em>(3 lần)</em></p>
</section>

<section id="hoi-huong">
<h2>HỒI HƯỚNG</h2>
<p>Nguyện dĩ thử công đức<br/>
Trang nghiêm Phật Tịnh độ,<br/>
Thượng báo tứ trọng ân,<br/>
Hạ tế Tam đồ khổ,<br/>
Nhược hữu kiến văn giả,<br/>
Tất phát Bồ-đề tâm,<br/>
Tận thử nhứt báo thân,<br/>
Vãng sanh An Lạc sát.</p>
<p><em>(Đứng dậy xướng lạy)</em></p>
</section>

<section id="tam-le">
<h2>TAM LỄ</h2>
<p>Đệ tử đại vị nhứt thiết sư trưởng ân, chí tâm đảnh lễ, Nam mô Tận Hư không, biến pháp giới, quá, hiện, vị lai, thập phương chư Phật, Tôn Pháp, Hiền Thánh Tăng, thường trú Tam Bảo. <em>(1 lạy)</em></p>
<p>Đệ tử đại vị nhứt thiết phụ mẫu ân, chí tâm đảnh lễ, Nam mô Ta-bà Giáo Chủ Điều Ngự Bổn Sư Thích Ca Mâu Ni Phật, Long Hoa Giáo Chủ Đương Lai Hạ Sanh Di Lặc Tôn Phật, Đại Trí Văn Thù Sư Lợi Bồ-tát, Đại Hạnh Phổ Hiền Bồ-tát, Linh Sơn Hội Thượng Phật Bồ-tát. <em>(1 lạy)</em></p>
<p>Đệ tử đại vị tam đồ thọ khổ, cập pháp giới, nhứt thiết chúng sanh, chí tâm đảnh lễ, Nam mô Tây phương Cực lạc Thế Giới Đại Từ Đại Bi tiếp dẫn Đạo Sư A Di Đà Phật, Đại Bi Quán Thế Âm Bồ-tát, Đại Thế Chí Bồ-tát, Liên Trì Hải Hội Phật Bồ-tát. <em>(1 lạy)</em></p>
<p><em>(xá 3 xá, lui)</em></p>
</section>
`

const lesson: Lesson = {
  id: 'lesson-khoa-1-phu-bai-10-nghi-thuc-xa-bat-quan-trai-gioi',
  slug: 'phu-bai-so-10-nghi-thuc-xa-bat-quan-trai-gioi',
  title: 'Phụ bài số 10 - Nghi thức xả Bát Quan Trai Giới',
  type: 'article',
  status: 'published',
  order: 13,
  durationMinutes: 45,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/phu-bai-so-10-nghi-thuc-xa-bat-quan-trai-gioi/infographic.png',
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/phu-bai-so-10-nghi-thuc-xa-bat-quan-trai-gioi/1.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/i9UJJp1rMuI',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/1c2b2zRWToj3G1kmWtcvPy?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Nghi thức xả Bát Quan Trai Giới',
    passPercentage: 70,
    questions: [
      {
        question: 'Thời gian giữ Bát quan trai giới kéo dài trong bao lâu trước khi thực hiện nghi thức xả giới?',
        options: {
          a: '12 giờ đồng hồ.',
          b: '48 giờ đồng hồ.',
          c: '24 giờ đồng hồ.',
          d: '7 ngày đêm.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Tài liệu không đề cập đến mốc thời gian này [1].',
          b: 'Sai. Tài liệu không đề cập đến mốc thời gian này [1].',
          c: 'Đúng. Nghi thức quy định lễ xả giới được thực hiện sau 24 giờ đồng hồ, đúng như giờ thọ giới [1].',
          d: 'Sai. Tài liệu không đề cập đến mốc thời gian này [1].',
        },
      },
      {
        question: 'Trong trường hợp tự làm lễ xả giới, vị Bồ-tát nào được xướng danh ba lần sau khi khấn nguyện?',
        options: {
          a: 'Nam Mô Địa Tạng Vương Bồ-tát.',
          b: 'Nam Mô Đại Thế Chí Bồ-tát.',
          c: 'Nam Mô Quán Thế Âm Bồ-tát.',
          d: 'Nam Mô Hộ Giới Tạng Bồ-tát Ma-ha-tát.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Không có hướng dẫn xưng danh vị Bồ-tát này ở phần khấn nguyện xả giới [2].',
          b: 'Sai. Không có hướng dẫn xưng danh vị Bồ-tát này ở phần khấn nguyện xả giới [2].',
          c: 'Sai. Không có hướng dẫn xưng danh vị Bồ-tát này ở phần khấn nguyện xả giới [2].',
          d: 'Đúng. Theo nghi thức tự xả giới, sau khi khấn nguyện, người thọ giới sẽ xướng \'Nam Mô Hộ Giới Tạng Bồ-tát Ma-ha-tát\' ba lần và lạy ba lạy [2].',
        },
      },
      {
        question: 'Sau khi tụng Bát Nhã Tâm Kinh, người thực hiện nghi thức cần trì tụng \'Vãng Sanh Thần Chú\' bao nhiêu lần?',
        options: {
          a: '21 lần.',
          b: '3 lần.',
          c: '7 lần.',
          d: '1 lần.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Không phải là 21 lần [3].',
          b: 'Đúng. Tài liệu ghi rõ sau khi tụng Bát Nhã Tâm Kinh thì tụng Vãng Sanh Thần Chú 3 lần [2, 3].',
          c: 'Sai. Không phải là 7 lần [3].',
          d: 'Sai. Không phải là 1 lần [3].',
        },
      },
      {
        question: 'Trong phần niệm danh hiệu Phật và Bồ-tát, danh hiệu \'Nam Mô A Di Đà Phật\' được niệm bao nhiêu lần?',
        options: {
          a: '1000 lần.',
          b: '21 lần.',
          c: '108 lần.',
          d: '10 lần.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Số lần này không đúng với nghi thức [4].',
          b: 'Sai. Số lần này không đúng với nghi thức [4].',
          c: 'Đúng. Danh hiệu \'Nam Mô A Di Đà Phật\' được chỉ định niệm 108 lần [4].',
          d: 'Sai. 10 lần là số lượng niệm dành cho các danh hiệu Bồ-tát khác như Quán Thế Âm, Đại Thế Chí [4].',
        },
      },
      {
        question: 'Mười đại nguyện (Thập chủng đại nguyện) được nhắc đến trong bài \'Phổ Hiền hạnh nguyện\' bao gồm nguyện thứ nhất là gì?',
        options: {
          a: 'Lễ kính chư Phật.',
          b: 'Xưng tán Như Lai.',
          c: 'Quảng tu cúng dường.',
          d: 'Sám hối nghiệp chướng.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Nguyện đầu tiên trong Thập chủng đại nguyện là \'Nhứt giả lễ kính chư Phật\' [4].',
          b: 'Sai. Đây là đại nguyện thứ hai [4].',
          c: 'Sai. Đây là đại nguyện thứ ba [4].',
          d: 'Sai. Đây là đại nguyện thứ tư [4].',
        },
      },
      {
        question: 'Bài thần chú nào sau đây được trì tụng 3 lần để cầu nguyện tiêu trừ tội lỗi sau phần mười đại nguyện?',
        options: {
          a: 'Thất Phật Diệt Tội Chơn Ngôn.',
          b: 'Án Ma Ni Bát Di Hồng.',
          c: 'Ma-ha Bát-nhã Ba-la-mật-đa.',
          d: 'Chú Đại Bi.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Sau phần mười đại nguyện, người thọ giới sẽ đọc bài \'Thất Phật Diệt Tội Chơn Ngôn\' 3 lần [5].',
          b: 'Sai. Thần chú này không có trong văn bản [5].',
          c: 'Sai. Đây là phần Tâm Kinh được đọc trước đó [2].',
          d: 'Sai. Thần chú này không có trong văn bản [5].',
        },
      },
      {
        question: 'Trong phần hồi hướng, công đức tu tập được nguyện dùng để trang nghiêm nơi nào?',
        options: {
          a: 'Nơi cư ngụ của chúng sanh.',
          b: 'Trần gian hữu hình.',
          c: 'Cung trời Đao Lợi.',
          d: 'Phật Tịnh độ.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Không đúng với văn bản [5].',
          b: 'Sai. Không đúng với văn bản [5].',
          c: 'Sai. Không đúng với văn bản [5].',
          d: 'Đúng. Kệ hồi hướng có ghi rõ: \'Nguyện dĩ thử công đức / Trang nghiêm Phật Tịnh độ\' [5].',
        },
      },
      {
        question: 'Lễ lạy cuối cùng trong nghi thức là dành cho đối tượng nào?',
        options: {
          a: 'Chư vị sư trưởng.',
          b: 'Vị Giới sư truyền giới.',
          c: 'Chúng sanh trong ba đường khổ và khắp pháp giới.',
          d: 'Cha mẹ hiện tiền.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Đây là lễ lạy đầu tiên [6].',
          b: 'Sai. Lễ lạy Giới sư diễn ra ở đầu nghi thức xả giới [1].',
          c: 'Đúng. Lễ lạy thứ ba (cuối cùng) xướng lễ cho: \'Đệ tử đại vị tam đồ thọ khổ, cập pháp giới, nhứt thiết chúng sanh...\' [6].',
          d: 'Sai. Lễ lạy cho phụ mẫu ân là lễ lạy thứ hai [6].',
        },
      },
      {
        question: 'Câu kệ \'Thượng báo tứ trọng ân, Hạ tế Tam đồ khổ\' mang ý nghĩa gì trong nghi thức?',
        options: {
          a: 'Liệt kê danh sách các vị Phật cần đảnh lễ.',
          b: 'Báo đáp bốn ơn nặng và cứu giúp ba đường khổ.',
          c: 'Yêu cầu người thọ giới phải thọ thêm giới mới.',
          d: 'Chỉ tập trung vào việc cầu nguyện cho bản thân được giải thoát.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Câu kệ này không liệt kê chư Phật [5].',
          b: 'Đúng. Đây là câu kệ hồi hướng diễn tả tâm nguyện đền đáp bốn ơn nặng và cứu độ chúng sanh trong ba đường khổ [5].',
          c: 'Sai. Không mang hàm ý yêu cầu thọ giới mới [5].',
          d: 'Sai. Câu kệ là sự mở rộng tâm từ bi đến chúng sanh chứ không chỉ tập trung cho bản thân [5].',
        },
      },
    ],
  },
}

export default lesson
