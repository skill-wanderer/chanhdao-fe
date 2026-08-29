import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="ten-dich-gia" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">Tên dịch giả</h2>
    </div>

    <h4 class="mt-6 text-lg font-semibold">TÊN DỊCH GIẢ</h4>
    <p>Đức Phật Thích Ca Mâu Ni nói kinh này tại tịnh xá của ông Trưởng giả Cấp Cô Độc trong vườn của Thái tử Kỳ Đà, ở nước Xá Vệ.</p>
    <p>Ngài A Nan kiết tập. Ngài Tam Tạng Pháp sư tên Cưu Ma La Thập dịch từ văn Phạn (Ấn Độ) qua văn Trung Hoa.</p>

    <p id="tam-tang-phap-su" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">TAM TẠNG PHÁP SƯ:</p>
    <p>Tam Tạng là ba kho tàng; vì có công năng trùm chứa văn nghĩa của Phật pháp, nên gọi là "Tàng".</p>
    
    <div class="pl-6 space-y-2 mt-4 mb-4">
      <p class="mb-0"><strong>Kinh tạng:</strong> chép những lời Phật dạy hoặc những lời của các vị Bồ Tát nói ra, khi đã được Phật chứng nhận.</p>
      <p class="mb-0"><strong>Luật tạng:</strong> chép những giới và luật (kỷ luật) trong 7 chúng (Tỳ-kheo, Tỳ-kheo-ni, Sa-di, Sa-di-ni, Thức-xoa-ma-na và Ưu-bà-tắc, Ưu-bà-di).</p>
      <p class="mb-0"><strong>Luận tạng:</strong> chép những lời nghị luận chánh tà, phân biệt chơn vọng của các vị Bồ Tát và chư Tổ.</p>
    </div>

    <div class="pl-6 space-y-2 mt-4 mb-4 border-l-2 border-secondary-300 dark:border-secondary-700 py-2">
      <p class="mb-0">Thầy giảng "Kinh" thì gọi là <strong>"Pháp sư"</strong>.</p>
      <p class="mb-0">Thầy giảng "Luật" thì gọi là <strong>"Luật sư"</strong>.</p>
      <p class="mb-0">Thầy giảng "Luận" thì gọi là <strong>"Luận sư"</strong>.</p>
    </div>

    <p>Ngài Cưu Ma La Thập thông suốt cả ba tạng và giảng dạy cả Kinh, Luật, Luận, nên gọi Ngài là "Tam Tạng Pháp sư" (vị Pháp sư thông ba tạng).</p>

    <p id="cuu-ma-la-thap" class="mt-8 font-semibold uppercase text-primary-700 dark:text-primary-300">CƯU MA LA THẬP (Kumārajīva):</p>
    <p>Tên của một vị Pháp sư có danh tiếng lỗi lạc ở Ấn Độ; bên Trung Hoa dịch nghĩa là "Đồng Thọ", nghĩa là vị Pháp sư tuổi tác thì "đồng niên", mà tài đức lại "kỳ lão" (thọ).</p>
    <p>Kinh này có nhiều bản dịch, nhưng bản dịch của Ngài Cưu Ma La Thập rất rõ ràng sáng suốt, nên được phổ biến nhiều hơn hết.</p>
  </section>
</div>
`
const lesson: Lesson = {
  id: 'lesson-khoa-12-ten-tac-gia',
  slug: 'ten-tac-gia',
  title: 'Tên tác giả',
  type: 'article',
  status: 'published',
  order: 4,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'ten-dich-gia', label: 'TÊN DỊCH GIẢ' },
        { id: 'tam-tang-phap-su', label: 'Tam Tạng Pháp Sư', indent: 1 },
        { id: 'cuu-ma-la-thap', label: 'Cưu Ma La Thập (Kumārajīva)', indent: 1 },
      ],
    },
  ]
}

export default lesson