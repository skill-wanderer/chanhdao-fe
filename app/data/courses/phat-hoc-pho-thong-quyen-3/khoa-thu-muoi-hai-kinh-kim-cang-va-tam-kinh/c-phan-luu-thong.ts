import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">KINH KIM CANG BÁT NHÃ BA LA MẬT</p>
      <h2 id="c-phan-luu-thong" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">C. PHẦN LƯU THÔNG (Phần truyền bá lưu thông)</h2>
    </div>

    <h4 class="mt-8 text-lg font-semibold">Chánh văn</h4>
    <div class="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 italic my-4 bg-primary-50/30 dark:bg-primary-900/10">
      <p class="mb-0">Khi Phật nói kinh này rồi, ông Trưởng lão Tu Bồ Đề, các vị Tỳ kheo, Tỳ kheo ni, thiện nam, tín nữ, trời, người và thần A Tu La, đều tin thọ và hoan hỷ vâng làm.</p>
    </div>

    <h4 class="mt-8 text-lg font-semibold">Lược giải</h4>
    <p>Theo thông lệ, thì tất cả các kinh của Phật đều chia làm ba phần: Phần Tự (phần mở đề), phần Chánh tôn (phần chánh đề) và phần Lưu thông (phần truyền bá lưu thông).</p>
    <p>Đoạn này là phần Lưu thông, nói về các thính giả, sau khi nghe Phật nói kinh Kim Cang Bát Nhã rồi, tất cả đều lãnh thọ tin theo và hoan hỷ vâng làm.</p>

    <div class="mt-12 mb-8 text-right italic text-sm text-text-muted">
      <p class="mb-1">Dịch xong, ngày 10-7 Ất Tỵ</p>
      <p class="mb-0">(Nhằm ngày 6-8-1965)</p>
    </div>
    
    <p class="text-center font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mt-16">— HẾT KHOÁ XII —</p>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-12-c-phan-luu-thong',
  slug: 'c-phan-luu-thong',
  title: 'C- Phần lưu thông',
  type: 'article',
  status: 'published',
  order: 15,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'c-phan-luu-thong', label: 'C. Phần lưu thông' },
      ],
    },
  ],
}

export default lesson