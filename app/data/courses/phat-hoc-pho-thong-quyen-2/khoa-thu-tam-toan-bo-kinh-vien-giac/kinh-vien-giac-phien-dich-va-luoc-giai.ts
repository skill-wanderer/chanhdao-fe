import type { Lesson } from '~/types/course'

const content = `
<section class="space-y-6">
  <header class="text-center space-y-3">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">KINH VIÊN GIÁC</h2>
    <p class="text-sm font-semibold uppercase tracking-wide text-text-muted">(PHIÊN DỊCH VÀ LƯỢC GIẢI)</p>
    <div class="space-y-1">
      <p>Ngài PHẬT ĐÀ ĐA LA dịch chữ Phạn ra chữ Hán</p>
      <p>Tu sĩ THÍCH THIỆN HOA dịch chữ Hán ra chữ Việt</p>
    </div>
  </header>

  <section class="space-y-4">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">A. PHẦN TỰ</h2>
    <p>Chính tôi được nghe như vầy: Một hôm, Phật nhập Chánh định (chơn tâm) là nơi an trụ của chư Phật, cũng là chỗ thanh tịnh sáng suốt của chúng sanh.</p>
    <p>Phật tùy thuận cảnh giới bất nhị (không hai) là chỗ thể tánh bình đẳng của chúng sanh và chư Phật. Thể tánh này thanh tịnh viên mãn khắp pháp giới cả mười phương, tâm và cảnh đều vắng lặng (ngã pháp đều không).</p>
    <p>Từ cảnh giới “bất nhị” này mà hiện ra có các cõi Tịnh độ và mười vạn vị Đại Bồ tát, như ngài Văn Thù Sư Lợi Bồ tát, ngài Phổ Hiền Bồ tát, ngài Di Lặc Bồ tát, ngài Phổ Nhãn Bồ tát, ngài Kim Cang Tạng Bồ tát, ngài Thanh Tịnh Huệ Bồ tát, ngài Oai Đức Tự Tại Bồ tát, ngài Diệu Âm Bồ tát, ngài Tịnh Chư Nghiệp Chướng Bồ tát, ngài Phổ Giác Bồ tát, ngài Viên Giác Bồ tát, ngài Hiền Thiện Thủ Bồ tát v.v… Những vị Bồ tát này, đều là bậc Thượng thủ trong chúng hội, cùng với quyến thuộc đều nhập chánh định, đồng ở trong Pháp hội thanh tịnh bình đẳng của Như Lai (ở trong Viên Giác).</p>
  </section>

  <section class="space-y-4">
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">LƯỢC GIẢI</h2>
    <p>“Viên Giác” tức là chỉ cho “Bản tâm thanh tịnh”. Vậy muốn nói và nghe cảnh giới thanh tịnh, cố nhiên không thể ở nơi cảnh vọng tâm mà nói và nghe được, nên Phật nhập Chánh định để nói Kinh Viên Giác, thì các Bồ tát cũng nhập Chánh định mới nghe và hiểu được Kinh Viên Giác. Các Phật tử đọc Kinh này, trước phải định tâm chuyên chú mới hiểu được.</p>
    <p>Đại ý đoạn này là Phật và Bồ tát nhập Chánh định để nói và nghe Kinh Viên Giác.</p>
  </section>
</section>
`

const lesson: Lesson = {
  id: 'lesson-khoa-8-kinh-vien-giac-phien-dich-va-luoc-giai',
  slug: 'kinh-vien-giac-phien-dich-va-luoc-giai',
  title: 'Kinh Viên Giác (phiên dịch và lược giải)',
  type: 'article',
  status: 'published',
  order: 3,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-08',
}

export default lesson
