import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mb-8">
      <h2 id="loi-tua" class="mt-0 mb-0 text-2xl font-bold text-secondary-700 dark:text-secondary-300">LỜI TỰA</h2>
    </div>

    <h4 class="mt-6 text-lg font-semibold">Chánh văn</h4>
    <p>Phật nói kinh Đại Bát Nhã, tại 4 chỗ, 16 hội, chép đến 600 quyển<sup>(1)</sup> mới hết (Nhị thập nhị niên Bát Nhã đàm). Tóm tắt bộ kinh lớn trên là "Kinh Kim Cang Bát Nhã Ba La Mật", gọi tắt là "Kinh Kim Cang". Kinh này rút lại trong một bài là "Ma Ha Bát Nhã Ba La Mật Đa Tâm Kinh", gọi tắt là "Tâm kinh", gồm 260 chữ. Rốt sau Phật dạy: "Ta không nói một chữ".</p>
    
    <p>Kinh Kim Cang Bát Nhã Ba La Mật, mở đầu, mà cũng là trọng tâm của kinh này, bằng hai câu hỏi của ông Tu Bồ Đề:</p>
    <div class="pl-6 italic my-4 border-l-4 border-primary-300 dark:border-primary-700">
      <p class="mb-0">"Vân hà ưng trụ?"</p>
      <p class="mb-0">"Vân hà hàng phục kỳ tâm?"</p>
    </div>
    
    <p>Nghĩa là:</p>
    <div class="pl-6 italic my-4 border-l-4 border-primary-300 dark:border-primary-700">
      <p class="mb-0">"Làm sao hàng phục vọng tâm?" và</p>
      <p class="mb-0">"Làm sao an trụ chơn tâm?"</p>
    </div>

    <p>Toàn bộ kinh Kim Cang Bát Nhã, Phật chỉ giải đáp hai câu hỏi trên, tóm tắt lại chỉ trong một câu:</p>
    <p class="pl-6 font-bold text-primary-600 dark:text-primary-400 my-4 text-xl">"Ưng vô sở trụ nhi sanh kỳ tâm"</p>
    <p>Nghĩa là: "Đừng sanh vọng tâm trụ chấp một nơi nào". Đây là câu "tinh ba" của bộ kinh Kim Cang Bát Nhã, mà ngày xưa đức Lục Tổ Huệ Năng nhờ đó đã được tỏ ngộ.</p>
    
    <p class="text-sm opacity-70 mt-2 mb-4"><sup>(1)</sup> Xem Phật học Đại Từ Điển, trang 406</p>

    <h4 class="mt-8 text-lg font-semibold">Lược giải</h4>
    <p>Phật dạy: "Đừng sanh vọng tâm trụ chấp một nơi nào", tức là dạy: "Dùng trí huệ Kim Cang Bát Nhã, phá trừ rốt ráo (Ba la mật) các vô minh vọng chấp: ngã, pháp hay bốn tướng" (Ngã, Nhơn, Chúng sanh và Thọ giả).</p>
    <p>Khi các vô minh phiền não vọng chấp hết rồi thì chơn tâm thanh tịnh hiện ra. Đó là từ bờ mê muội triền phược của chúng sanh mà sang bờ giác ngộ giải thoát của chư Phật, tức là: "đáo bỉ ngạn" (đến bờ giác ngộ).</p>
    <p>Phật dạy: "Đừng sanh vọng tâm trụ chấp một nơi nào". Đó là phương pháp tu hành của Đại thừa đốn giáo, để "hàng phục vọng tâm" mà cũng là "an trụ chơn tâm" vậy.</p>
    
    <p>Vì phạm vi của bài tựa này có hạn và theo trình độ tầm thường của tôi, nên tôi chỉ trình bày sơ sài được một vài đặc điểm của kinh này thôi. Ngoài ra, không biết bao nhiêu nghĩa lý cao siêu mầu nhiệm còn bí ẩn trong kinh này; dù tôi có suốt đời, cũng không thể dùng trí phàm phu diễn tả hay lời nói phàm phu giải thích thấu đáo được ý nghĩa của Thánh hiền!</p>
    <p class="font-medium text-primary-700 dark:text-primary-300">Xin quý vị hãy cố gắng đọc kỹ và tinh tấn tu hành để hiểu được nghĩa lý cao siêu của kinh này.</p>
    
    <p>Tôi dịch Kinh này đến ba năm mới xong. Bắt đầu từ ngày 24 tháng 2 năm Quý mão (19/3/1963) đến ngày mùng 10 tháng 7 năm Ất Tỵ (6/8/1965). Vì Kinh đã khó, mà trong khi dịch lại gặp nhiều duyên trở ngại: vì hai năm Pháp nạn lận đận lao đao quá lao tâm khổ trí; đến khi Phật giáo thống nhất, lại Phật sự quá tràn ngập, rồi tiếp đến hai lần tôi vào dưỡng đường, nên công việc phải chậm trễ.</p>
    
    <p>Hôm nay, nhờ Tam bảo gia hộ, tôi đã dịch và lược giải xong kinh Kim Cang và Bát Nhã Tâm kinh, là bộ kinh thuộc khoá XII trong toàn bộ Phật học phổ thông, do tôi chủ trương biên soạn. Thế là tôi đã đóng hoàn thành cây thang giáo lý 12 nấc, mà tôi đã hoài bão trên 25 năm nay <sup>(2)</sup>.</p>
    
    <p>Được mãn nguyện, tôi rất vui mừng và thành tâm đốt nén hương lòng, cầu nguyện:</p>

    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-3 bg-primary-50/30 dark:bg-primary-900/10 italic my-6 space-y-1">
      <p class="mb-0">Mặt trời Phật sáng thêm</p>
      <p class="mb-0">Xe chánh pháp chạy hoài</p>
      <p class="mb-0">Trên đền đáp bốn ơn</p>
      <p class="mb-0">Dưới cứu độ ba loài</p>
      <p class="mb-0">Thế giới được hoà bình</p>
      <p class="mb-0">Nhơn dân đều an lạc</p>
      <p class="mb-0">Đệ tử và chúng sanh</p>
      <p class="mb-0">Đều trọn thành đạo Phật.</p>
    </div>

    <div class="mt-8 mb-8 text-right font-semibold">
      <p class="mb-1">Mùa Hạ năm Ất Tỵ 1965</p>
      <p class="mb-0">Sa môn THÍCH THIỆN HOA</p>
    </div>

    <p class="text-sm opacity-70 mb-8"><sup>(2)</sup> Xem bài “Một sự nghiệp của đời tôi” sau quyển Kinh này.</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mt-12 mb-6">
      <h3 id="muc-luc-quyen" class="mt-0 mb-0 text-xl font-bold text-secondary-700 dark:text-secondary-300">TRONG QUYỂN NÀY:</h3>
    </div>
    
    <div class="pl-6 space-y-2">
      <p class="mb-0"><strong>I.</strong> Lời tựa</p>
      <p class="mb-0"><strong>II.</strong> Kinh Kim Cang Bát Nhã (Dịch nghĩa và lược giải)</p>
      <p class="mb-0"><strong>III.</strong> Bát Nhã Tâm Kinh (Dịch nghĩa và lược giải)</p>
      <p class="mb-0"><strong>IV.</strong> Phụ lục: “Một sự nghiệp của đời tôi”</p>
    </div>

  </section>
</div>
`


const lesson: Lesson = {
  id: 'lesson-khoa-12-loi-tua',
  slug: 'loi-tua-2',
  title: 'Lời tựa',
  type: 'article',
  status: 'published',
  order: 2,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'loi-tua', label: 'LỜI TỰA' },
      ],
    },
  ]
}

export default lesson