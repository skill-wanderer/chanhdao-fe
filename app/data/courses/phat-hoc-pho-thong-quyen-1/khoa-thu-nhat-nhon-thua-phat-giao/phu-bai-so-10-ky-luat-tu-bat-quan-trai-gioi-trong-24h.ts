import type { Lesson } from '~/types/course'

const readingContent = `
<h2>KỶ LUẬT TU BÁT QUAN TRAI GIỚI TRONG 24 GIỜ</h2>
<p>Không được ra ngoài phạm vi đại giới, (trong vườn chùa, hoặc vườn nhà mình)</p>
<p>Không nên tiếp khách và nói chuyện lớn tiếng.</p>
<p>Bớt nói chuyện, không ăn trầu và hút thuốc.</p>
<p>Oai nghi cử chỉ phải giữ gìn cẩn thận.</p>
<p>Phải giữ đúng giờ tu tập.</p>
<p>Không nên nghĩ đến việc nhà hoặc việc thế tục.</p>
<p>Phải nhứt tâm niệm Phật.</p>
<p>Những ngày thọ Bát Quan Trai Giới, tùy theo hoàn cảnh của mỗi người, trong mỗi tháng thọ 1 ngày cho đến sáu ngày: mồng 8, 14, 23, 29, 30 (tháng thiếu thì 28 và 29). Nếu người bận làm việc thì thọ ngày chủ nhật cũng được. Nếu Phật tử mỗi lần phát nguyện tu trong 24 giờ, giữ trai giới cho thanh tịnh thì công đức ấy về sau sẽ được quả Niết-bàn.</p>

<h2>CHƯƠNG TRÌNH TU BÁT QUAN TRAI GIỚI TRONG MỘT NGÀY MỘT ĐÊM (24 GIỜ)</h2>

<h3>BUỔI MAI:</h3>
<p>6 giờ sáng: Thọ giới<br/>
7 giờ: Ăn điểm tâm<br/>
8 giờ: Sám hối<br/>
9 giờ: Xem Kinh<br/>
10 giờ: Niệm Phật<br/>
12 giờ: Thọ Trai<br/>
12 giờ 30: Kinh hành niệm Phật</p>

<h3>BUỔI CHIỀU:</h3>
<p>1 giờ 30: Chỉ tịnh (nghỉ)<br/>
3 giờ: Tụng Kinh<br/>
4 giờ: Xem Kinh<br/>
5 giờ: Niệm Phật<br/>
6 giờ: Dùng nước (sữa hoặc nước cháo)</p>

<h3>BUỔI TỐI:</h3>
<p>7 giờ: Tịnh Độ<br/>
8 giờ: Học<br/>
10 giờ 15: Quán sổ tức<br/>
10 giờ 40: Nghỉ<br/>
4 giờ khuya: Tịnh Niệm (Niệm Phật)<br/>
4 giờ 30: Công phu<br/>
6 giờ: Làm lễ xả giới</p>
`

const lesson: Lesson = {
  id: 'lesson-khoa-1-phu-bai-10-ky-luat-tu-bat-quan-trai-gioi-trong-24h',
  slug: 'phu-bai-so-10-ky-luat-tu-bat-quan-trai-gioi-trong-24h',
  title: 'Phụ bài số 10 - Kỷ luật Tu Bát Quan Trai Giới trong 24h',
  type: 'article',
  status: 'published',
  order: 14,
  durationMinutes: 45,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-31',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/phu-bai-so-10-ky-luat-tu-bat-quan-trai-gioi-trong-24h/infographic.png',
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-1/phu-bai-so-10-ky-luat-tu-bat-quan-trai-gioi-trong-24h/24_Hours_of_Purity.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/60efSyidNoQ',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4ChGpMjGsoRaqAmRA2SmxG?utm_source=generator',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập — Kỷ luật Tu Bát Quan Trai Giới trong 24h',
    passPercentage: 70,
    questions: [
      {
        question: 'Trong thời gian tu Bát Quan Trai Giới, hành giả được phép di chuyển trong phạm vi nào?',
        options: {
          a: 'Tự do đi lại trong khu dân cư xung quanh nơi tu tập.',
          b: 'Chỉ được ở trong chánh điện của chùa.',
          c: 'Được phép ra ngoài nếu có việc cần thiết liên quan đến gia đình.',
          d: 'Trong phạm vi đại giới như vườn chùa hoặc vườn nhà mình.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Văn bản quy định không được ra ngoài phạm vi đại giới [1].',
          b: 'Sai. Không có quy định chỉ được ở trong chánh điện [1].',
          c: 'Sai. Hành giả không được ra ngoài phạm vi đại giới [1].',
          d: 'Đúng. Theo kỷ luật, hành giả không được ra ngoài phạm vi đại giới (trong vườn chùa, hoặc vườn nhà mình) [1].',
        },
      },
      {
        question: 'Những vật phẩm nào sau đây hành giả cần tránh sử dụng trong 24 giờ tu tập?',
        options: {
          a: 'Trà và các loại nước trái cây.',
          b: 'Ăn trầu và hút thuốc.',
          c: 'Nước lọc và nước cháo.',
          d: 'Các loại thuốc chữa bệnh cá nhân.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Tài liệu không cấm dùng trà và các loại nước trái cây [1].',
          b: 'Đúng. Văn bản quy định hành giả phải bớt nói chuyện, không ăn trầu và hút thuốc [1].',
          c: 'Sai. Nước cháo vẫn được phép dùng vào lúc 6 giờ chiều [2].',
          d: 'Sai. Không có quy định cấm sử dụng các loại thuốc chữa bệnh cá nhân [1].',
        },
      },
      {
        question: 'Đối với người bận rộn, văn bản gợi ý có thể thọ giới vào ngày nào trong tuần?',
        options: {
          a: 'Ngày thứ Bảy hàng tuần.',
          b: 'Bất kỳ ngày nào cảm thấy rảnh rỗi.',
          c: 'Ngày Chủ nhật.',
          d: 'Ngày rằm hàng tháng.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Không có nhắc đến ngày thứ Bảy trong tài liệu [1].',
          b: 'Sai. Tài liệu gợi ý một ngày cụ thể chứ không phải bất kỳ ngày nào [1].',
          c: 'Đúng. Văn bản ghi rõ, nếu người bận làm việc thì thọ ngày chủ nhật cũng được [1].',
          d: 'Sai. Ngày rằm không nằm trong danh sách gợi ý dành cho người bận rộn [1].',
        },
      },
      {
        question: 'Theo lịch trình buổi sáng, hoạt động nào diễn ra vào lúc 12 giờ?',
        options: {
          a: 'Kinh hành niệm Phật.',
          b: 'Nghỉ trưa (Chỉ tịnh).',
          c: 'Thọ Trai.',
          d: 'Tụng Kinh.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Kinh hành niệm Phật diễn ra vào lúc 12 giờ 30 [2].',
          b: 'Sai. Nghỉ trưa (Chỉ tịnh) diễn ra vào lúc 1 giờ 30 chiều [2].',
          c: 'Đúng. Theo chương trình tu Bát Quan Trai Giới, 12 giờ là thời gian Thọ Trai [2].',
          d: 'Sai. Tụng kinh được xếp vào lúc 3 giờ chiều [2].',
        },
      },
      {
        question: 'Hành giả thực hiện pháp tu \'Quán sổ tức\' vào thời điểm nào trong ngày?',
        options: {
          a: '8 giờ tối.',
          b: '4 giờ khuya.',
          c: '10 giờ 15 phút tối.',
          d: '1 giờ 30 phút chiều.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. 8 giờ tối là thời gian dành cho việc Học [2].',
          b: 'Sai. 4 giờ khuya là thời gian cho Tịnh Niệm (Niệm Phật) [2].',
          c: 'Đúng. Lịch trình buổi tối ghi rõ 10 giờ 15 là lúc thực hiện Quán sổ tức [2].',
          d: 'Sai. 1 giờ 30 chiều là lúc Chỉ tịnh (nghỉ) [2].',
        },
      },
      {
        question: 'Vào lúc 6 giờ chiều, hành giả được phép dùng những loại thực phẩm nào?',
        options: {
          a: 'Cơm nhẹ và rau củ.',
          b: 'Chỉ được uống nước lọc.',
          c: 'Trái cây và bánh ngọt.',
          d: 'Nước, sữa hoặc nước cháo.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Lịch trình không cho phép dùng cơm và rau củ vào thời điểm này [2].',
          b: 'Sai. Hành giả vẫn được dùng thêm sữa hoặc nước cháo [2].',
          c: 'Sai. Trái cây và bánh ngọt không nằm trong thực đơn buổi chiều [2].',
          d: 'Đúng. Vào lúc 6 giờ chiều, hành giả được dùng nước (sữa hoặc nước cháo) [2].',
        },
      },
      {
        question: 'Theo văn bản, công đức của việc giữ trai giới thanh tịnh trong 24 giờ sẽ dẫn đến quả vị nào?',
        options: {
          a: 'Trở thành người có trí tuệ thông suốt.',
          b: 'Được giàu sang phú quý ở kiếp sau.',
          c: 'Được vãng sanh về cõi Trời.',
          d: 'Đạt được quả Niết-bàn.',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Tài liệu không đề cập đến quả vị này [1].',
          b: 'Sai. Tài liệu không nhắc đến sự giàu sang phú quý ở kiếp sau [1].',
          c: 'Sai. Vãng sanh về cõi Trời không phải là quả vị được nêu ra [1].',
          d: 'Đúng. Văn bản khẳng định nếu giữ trai giới cho thanh tịnh thì công đức ấy về sau sẽ được quả Niết-bàn [1].',
        },
      },
      {
        question: 'Khóa tu Bát Quan Trai Giới kết thúc bằng nghi lễ nào và vào lúc mấy giờ?',
        options: {
          a: 'Lễ Sám hối vào lúc 10 giờ tối.',
          b: 'Lễ tịnh độ vào lúc 7 giờ tối.',
          c: 'Lễ xả giới vào lúc 6 giờ sáng ngày hôm sau.',
          d: 'Lễ thọ giới vào lúc 6 giờ sáng.',
        },
        answer: 'c',
        explanation: {
          a: 'Sai. Sám hối diễn ra vào lúc 8 giờ sáng ngày bắt đầu [2].',
          b: 'Sai. Lễ Tịnh Độ diễn ra vào lúc 7 giờ tối ngày bắt đầu [2].',
          c: 'Đúng. Sau thời khóa 4 giờ 30 sáng công phu, 6 giờ sáng sẽ làm lễ xả giới kết thúc khóa tu [2].',
          d: 'Sai. Lễ thọ giới bắt đầu khóa tu vào lúc 6 giờ sáng hôm trước, không phải lễ kết thúc [2].',
        },
      },
      {
        question: 'Trong số các ngày âm lịch sau, ngày nào KHÔNG nằm trong danh sách sáu ngày thọ giới mỗi tháng?',
        options: {
          a: 'Ngày 23.',
          b: 'Ngày mồng 8.',
          c: 'Ngày 29.',
          d: 'Ngày rằm (15).',
        },
        answer: 'd',
        explanation: {
          a: 'Sai. Ngày 23 nằm trong danh sách các ngày thọ giới [1].',
          b: 'Sai. Ngày mồng 8 nằm trong danh sách các ngày thọ giới [1].',
          c: 'Sai. Ngày 29 nằm trong danh sách các ngày thọ giới [1].',
          d: 'Đúng. Danh sách sáu ngày thọ giới chỉ bao gồm mồng 8, 14, 23, 29, 30 (tháng thiếu thì 28 và 29), không bao gồm ngày rằm 15 [1].',
        },
      },
      {
        question: 'Thái độ tâm lý nào mà hành giả cần duy trì đối với việc gia đình trong khi tu tập?',
        options: {
          a: 'Bàn bạc việc nhà với các đồng tu khác.',
          b: 'Không nên nghĩ đến việc nhà hoặc việc thế tục.',
          c: 'Vừa tu tập vừa tranh thủ giải quyết việc nhà.',
          d: 'Chỉ nghĩ đến việc nhà khi có khách đến thăm.',
        },
        answer: 'b',
        explanation: {
          a: 'Sai. Tài liệu không cho phép việc này [1].',
          b: 'Đúng. Kỷ luật tu quy định rõ: Không nên nghĩ đến việc nhà hoặc việc thế tục [1].',
          c: 'Sai. Hành giả phải giữ gìn cẩn thận oai nghi, nhứt tâm niệm Phật, không được tranh thủ giải quyết việc nhà [1].',
          d: 'Sai. Văn bản cũng quy định không nên tiếp khách trong khi tu tập [1].',
        },
      },
    ],
  },
}

export default lesson
