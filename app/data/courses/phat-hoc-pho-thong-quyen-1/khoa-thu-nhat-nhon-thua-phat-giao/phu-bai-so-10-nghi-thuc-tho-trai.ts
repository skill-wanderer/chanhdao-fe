import type { Lesson } from '~/types/course'

const readingContent = `
<section id="nghi-thuc-tho-trai">
<h2>NGHI THỨC THỌ TRAI</h2>
<p>Ngồi tề chỉnh, tay trái co ngón giữa, ngón áp, con ba ngón dựng thẳng, để chén cơm lên; tay mặt kiết ấn cam lồ (ngón cái bên tay phải đề lên ngón áp) để dựa ngang phía trong miệng chén rồi xướng:</p>
<p>Cúng dường Thanh tịnh pháp thân Tỳ Lô Giá Na Phật.<br/>
Viên mãn báo thân Lô Xá Na Phật.<br/>
Thiên bá ức hóa thân Thích Ca Mâu Ni Phật.<br/>
Đương lai hạ sanh Di Lặc Tôn Phật.<br/>
Thập phương tam thế nhứt thiết chư Phật.<br/>
Đại Trí Văn Thù Sư Lợi Bồ Tát.<br/>
Đại Hạnh Phổ Hiền Bồ Tát.<br/>
Đại bi quán thế âm bồ tát.<br/>
Chư Tôn Bồ Tát Ma ha tát.<br/>
Ma ha Bát nhã ba la mật.</p>
<p>Tam đức, lục vị, cúng Phật cập Tăng pháp giới hữu tình, phổ đồng cúng dường, nhược phạn thực thời, đương nguyện chúng sanh thiền duyệt vi thực, pháp hỷ sung mãn.</p>
<p><em>(Cúng dường rồi để bát xuống)</em></p>
</section>

<section id="xuat-sanh">
<h2>XUẤT SANH</h2>
<p>Lấy cái chén nhỏ múc chút nước, để trong lòng bàn tay trái, gắp bảy hột cơm để trong chén; tay mặt kiết ấn cam lồ, đặt trên chén cách một tấc, mặc niệm:</p>
<p>Pháp luật bất tư nghì,<br/>
Từ bi vô chướng ngại,<br/>
Thất liệp biến thập phương,<br/>
Phổ trí châu sa giới,<br/>
Án, độ lợi ích tóa ha. <em>(7 lần)</em></p>
<p>Tay bắt ấn viết bóng hai chữ "Án lam" rồi khảy móng tay trên chén ba lần, đưa thị giả đem ra trước, để trên một cái bàn nhỏ, đọc kệ chú:</p>
<p>Đại bàng kim sí điểu,<br/>
Khoáng đã quỉ thần chúng,<br/>
La sát quỉ tử mẫu,<br/>
Cam lồ tất sung mãn.<br/>
Án, mục lực lăng tóa ha. <em>(7 lần)</em></p>
</section>

<section id="bung-chen-com">
<h2>BƯNG CHÉN CƠM</h2>
<p>Hai tay, mỗi tay co hai ngón sau, còn sáu ngón bưng chén cơm ngang trán, đọc thầm:</p>
<p>Chấp trì ứng khí đương nguyện chúng sanh, thành tựu pháp thí thọ thiên nhơn cúng.<br/>
Án, chỉ rị, chỉ rị phạ nhật ra hồng phấn tra. <em>(3 lần)</em></p>
</section>

<section id="tam-de">
<h2>TAM ĐỀ</h2>
<p><em>(Ăn ba miếng đầu tiên)</em></p>
<p>Miếng thứ nhất <em>(niệm thầm)</em>:<br/>
Nguyện đoạn nhứt thiết ác.</p>
<p>Miếng thứ hai <em>(niệm thầm)</em>:<br/>
Nguyện tu nhứt thiết thiện.</p>
<p>Miếng thứ ba <em>(niệm thầm)</em>:<br/>
Thệ độ nhứt thế chúng sanh.</p>
<p>Trong khi ăn phải tưởng năm pháp tướng này:</p>
<p>Nhứt kế công đa thiểu, lượng bỉ lai xứ.<br/>
Nhị thổn kỷ đức hạnh toàn khuyết ứng cúng.<br/>
Tam phòng tâm ly quá, tham đẳng vi tông.<br/>
Tứ chánh sự lương dược, vị liệu hình khô.<br/>
Ngũ vị thành đạo nghiệp, phương thọ thử thực.</p>
</section>

<section id="tuoc-duong-chi">
<h2>TƯỚC DƯƠNG CHI</h2>
<p><em>(Ăn cơm xong xỉa răng đọc chú này)</em></p>
<p>Tước đương chí thời, đương nguyện chúng sanh thân tâm đều tịnh, phệ chư phiền não.</p>
<p>Án, a mộ dà di ma lệ, nhĩ phạ ca ra, tăng du dad nể, bát đầu na, câu ma ra, nhĩ phạ ca ra tăng thâu đà da, đà ra đà ra, tố di ma lệ, tá phạ ha. <em>(3 lần)</em></p>
</section>

<section id="am-thuy-ke-chu">
<h2>ẨM THỦY KỆ CHÚ</h2>
<p><em>(Uống nước đọc chú nầy)</em></p>
<p>Phật quán nhất bát thủy, bát vạn tứ thiên trùng, nhược bất trì thử chú, như thực chúng sanh nhục.</p>
<p>Án phạ tất ba ra, ma ni tá ha. <em>(3 lần)</em></p>
</section>

<section id="trai-ke-chu">
<h2>TRAI KỆ CHÚ</h2>
<p><em>(Ăn cơm uống nước xong tụng chú nầy)</em></p>
<p>Nam mô tát đa nẩm, tam miệu tam bồ đà, câu chi nẩm, đát điệt tha. Án chiếc lệ, chủ lệ chuẩn đề ta bà ha. <em>(7 lần)</em></p>
<p>Sở vị bố thí giả, tất hoạch kỳ lợi ích, nhược vị lạc bố thí, hậu tất đắc an lạc.</p>
<p>Phạn thực dĩ ngật, đương nguyện chúng sanh, sở tác giai biện cụ chư Phật Pháp.</p>
</section>

<section id="phuc-nguyen">
<h2>PHỤC NGUYỆN</h2>
<p>Thân phi nhứt lũ, thường tư chức nữ chi lao; nhựt thực tam xang, mỗi niệm nông phu chi khổ. Phổ nguyện hiện tiền tứ húng phước huệ song tu, một hậu đắc Di Đà thọ ký; âm siêu dương thới, pháp giới chúng sanh tề thành Phật đạo.</p>
<p><strong>NAM MÔ A DI ĐÀ PHẬT</strong></p>
<p><em>(Lược trích nghi thức thọ trai này để cho các Phật tử tại gia dùng, trong khi thọ Bát quan trai)</em></p>
</section>
`

const lesson: Lesson = {
  id: 'lesson-khoa-1-phu-bai-10-nghi-thuc-tho-trai',
  slug: 'phu-bai-so-10-nghi-thuc-tho-trai',
  title: 'Phụ bài số 10 - Nghi thức thọ trai',
  type: 'article',
  status: 'published',
  order: 12,
  durationMinutes: 45,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/phu-bai-so-10-nghi-thuc-tho-trai/infographic.png',
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/phu-bai-so-10-nghi-thuc-tho-trai/12.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/vooTEekrFVk',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5i0kxV9rVq6aMYKONDDYna?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Nghi thức thọ trai',
    passPercentage: 70,
    questions: [
      {
        question: 'Trong nghi thức Cúng dường, tay trái được hướng dẫn đặt như thế nào khi nâng chén cơm?',
        options: {
          a: 'Nắm chặt chén cơm bằng cả bàn tay để giữ thăng bằng.',
          b: 'Xòe cả năm ngón tay để nâng chén cơm ngang mặt.',
          c: 'Co ngón giữa và ngón áp, ba ngón còn lại dựng thẳng.',
          d: 'Kiết ấn cam lồ bằng cách để ngón cái đè lên ngón áp.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Tài liệu không có hướng dẫn nắm chặt chén cơm bằng cả bàn tay [1].',
          b: 'Sai. Tài liệu không có hướng dẫn xòe cả năm ngón tay [1].',
          c: 'Đúng. Theo văn bản, tư thế tay trái là co ngón giữa, ngón áp, ba ngón còn lại dựng thẳng để chén cơm lên [1].',
          d: 'Sai. Kiết ấn cam lồ là thao tác của tay mặt (tay phải), không phải tay trái [1].',
        },
      },
      {
        question: 'Khi thực hiện nghi thức Xuất sanh, người thực hiện cần gắp bao nhiêu hột cơm để vào chén nước nhỏ?',
        options: {
          a: 'Bảy hột cơm.',
          b: 'Ba hột cơm.',
          c: 'Một hột cơm tượng trưng.',
          d: 'Chín hột cơm.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Trong phần Xuất sanh, văn bản ghi rõ người thực hiện cần gắp bảy hột cơm để trong chén [2].',
          b: 'Sai. Số lượng đúng là bảy hột cơm [2].',
          c: 'Sai. Số lượng đúng là bảy hột cơm [2].',
          d: 'Sai. Số lượng đúng là bảy hột cơm [2].',
        },
      },
      {
        question: 'Nội dung của miếng ăn thứ hai trong nghi thức \'Tam đề\' là gì?',
        options: {
          a: 'Nguyện đoạn nhứt thiết ác.',
          b: 'Thệ độ nhứt thế chúng sanh.',
          c: 'Cúng dường thập phương Phật.',
          d: 'Nguyện tu nhứt thiết thiện.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Đây là nội dung niệm thầm của miếng thứ nhất [3].',
          b: 'Sai. Đây là nội dung niệm thầm của miếng thứ ba [3].',
          c: 'Sai. Nội dung này không nằm trong nghi thức Tam đề [3].',
          d: 'Đúng. Nội dung của miếng thứ hai được yêu cầu niệm thầm là \'Nguyện tu nhứt thiết thiện\' [3].',
        },
      },
      {
        question: 'Trong phần \'Ngũ quán\', điều thứ tư nhắc nhở người thọ trai coi thức ăn như là gì?',
        options: {
          a: 'Vị thuốc hay để chữa trị thân thể gầy yếu.',
          b: 'Một chướng ngại cho việc giải thoát.',
          c: 'Một phần thưởng cho sự tu tập.',
          d: 'Một món quà từ thiên nhiên.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Câu thứ tư là \'Tứ chánh sự lương dược, vị liệu hình khô\', coi thức ăn như thuốc tốt (lương dược) để chữa trị hình hài khô gầy [3].',
          b: 'Sai. Thức ăn không được coi là chướng ngại trong phần Ngũ quán [3].',
          c: 'Sai. Thức ăn không được coi là phần thưởng [3].',
          d: 'Sai. Ý này không có trong Ngũ quán [3].',
        },
      },
      {
        question: 'Theo \'Ẩm thủy kệ chú\', trong một bát nước có bao nhiêu vi trùng (trùng)?',
        options: {
          a: 'Vô số không thể đếm được.',
          b: 'Bốn vạn tám ngàn (48.000).',
          c: 'Bảy ngàn hai trăm (7.200).',
          d: 'Tám vạn bốn ngàn (84.000).',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Con số được nêu cụ thể chứ không phải vô số [4].',
          b: 'Sai. Tài liệu không nhắc đến con số này [4].',
          c: 'Sai. Tài liệu không nhắc đến con số này [4].',
          d: 'Đúng. Lời kệ chú nhắc đến \'bát vạn tứ thiên trùng\', trong đó \'bát vạn tứ thiên\' chính là 8 vạn 4 ngàn (84.000) [4].',
        },
      },
      {
        question: 'Phần \'Phục nguyện\' nhắc nhở người ăn phải nhớ đến nỗi khổ của ai khi ăn ngày ba bữa?',
        options: {
          a: 'Nỗi khổ của người nông phu.',
          b: 'Nỗi khổ của người dệt vải.',
          c: 'Nỗi khổ của cha mẹ nhiều đời.',
          d: 'Nỗi khổ của chúng sanh trong địa ngục.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Câu phục nguyện nhắc nhở \'nhựt thực tam xang, mỗi niệm nông phu chi khổ\' [5].',
          b: 'Sai. Nỗi khổ của người dệt vải (chức nữ) được nhắc đến khi nhớ về việc mặc (thân phi nhứt lũ) [5].',
          c: 'Sai. Không được nhắc đến trong đoạn Phục nguyện này [5].',
          d: 'Sai. Không được nhắc đến trong đoạn Phục nguyện này [5].',
        },
      },
      {
        question: 'Nghi thức \'Tước dương chi\' được thực hiện vào thời điểm nào?',
        options: {
          a: 'Ngay sau khi uống nước.',
          b: 'Sau khi ăn cơm xong và bắt đầu xỉa răng.',
          c: 'Trong khi đang chờ đợi dọn thức ăn.',
          d: 'Trước khi bắt đầu bữa ăn.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Kệ chú uống nước có tên riêng là \'Ẩm thủy kệ chú\' [4].',
          b: 'Đúng. Văn bản ghi chú rõ dưới phần Tước dương chi là: \'(Ăn cơm xong xỉa răng đọc chú này)\' [3].',
          c: 'Sai. Thực hiện sau khi đã ăn xong [3].',
          d: 'Sai. Thực hiện sau khi đã ăn xong [3].',
        },
      },
      {
        question: 'Đối tượng chính mà bài kệ \'Đại bàng kim sí điểu\' trong phần Xuất sanh hướng tới là gì?',
        options: {
          a: 'Chim đại bàng, quỷ thần và quỷ tử mẫu.',
          b: 'Hương linh của những người đã khuất.',
          c: 'Các vị tu sĩ đang thực hành thọ trai.',
          d: 'Chư vị Bồ Tát ma ha tát.',
        },
        answer: 'a',
        explanation: {
          a: 'Đúng. Bài kệ chú đọc rõ 3 đối tượng này: \'Đại bàng kim sí điểu, Khoáng đã quỉ thần chúng, La sát quỉ tử mẫu\' [6].',
          b: 'Sai. Không phải là đối tượng chính của bài kệ này [6].',
          c: 'Sai. Không hướng tới các vị tu sĩ [6].',
          d: 'Sai. Không hướng tới chư vị Bồ Tát [6].',
        },
      },
      {
        question: 'Tư thế \'kiết ấn cam lồ\' được mô tả như thế nào trong văn bản?',
        options: {
          a: 'Ngón cái đè lên ngón trỏ.',
          b: 'Ngón cái đè lên ngón áp (ngón áp út).',
          c: 'Nắm bốn ngón tay lại và dựng ngón cái.',
          d: 'Ngón cái đè lên ngón giữa.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Không phải đè lên ngón trỏ [1].',
          b: 'Đúng. Văn bản mô tả \'ngón cái bên tay phải đề lên ngón áp\' [1].',
          c: 'Sai. Mô tả này không có trong tài liệu [1].',
          d: 'Sai. Không phải đè lên ngón giữa [1].',
        },
      },
      {
        question: 'Mục đích sử dụng của nghi thức thọ trai này được ghi chú dành cho ai?',
        options: {
          a: 'Chỉ dành cho các chú tiểu mới xuất gia.',
          b: 'Dành cho khách tham quan vãng cảnh chùa.',
          c: 'Các Phật tử tại gia dùng khi thọ Bát quan trai.',
          d: 'Chỉ dành cho các vị Tỳ-kheo tại chùa.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Tài liệu không ghi chú dành cho chú tiểu [5].',
          b: 'Sai. Không dành cho khách tham quan [5].',
          c: 'Đúng. Phần cuối tài liệu ghi chú: \'Lược trích nghi thức thọ trai này để cho các Phật tử tại gia dùng, trong khi thọ Bát quan trai\' [5].',
          d: 'Sai. Nghi thức lược trích này dành riêng cho Phật tử tại gia [5].',
        },
      },
    ],
  },
}

export default lesson
