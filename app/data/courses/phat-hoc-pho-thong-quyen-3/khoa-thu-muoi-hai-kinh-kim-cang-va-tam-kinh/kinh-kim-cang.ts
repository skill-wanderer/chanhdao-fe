import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert flex flex-col items-center justify-center py-16 text-center">
  <p class="mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted">Phật Học Phổ Thông · Khóa XII</p>
  
  <div class="w-full max-w-2xl rounded-3xl border-2 border-primary-200 bg-primary-50/50 p-12 shadow-sm dark:border-primary-900/50 dark:bg-primary-950/20">
    <h1 class="mt-0 mb-4 text-4xl md:text-5xl font-extrabold text-primary-700 dark:text-primary-300">KINH KIM CANG</h1>
    <div class="h-1 w-24 bg-secondary-400 mx-auto my-6 rounded-full"></div>
    <h2 class="mt-0 mb-8 text-2xl md:text-3xl font-bold text-secondary-700 dark:text-secondary-300">DỊCH NGHĨA VÀ LƯỢC GIẢI</h2>
    
    <p class="mb-0 text-lg font-medium opacity-80">Sa môn</p>
    <p class="mt-1 mb-0 text-2xl font-bold text-primary-800 dark:text-primary-200">THÍCH THIỆN HOA</p>
  </div>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-12-kinh-kim-cang',
  slug: 'kinh-kim-cang',
  title: 'KINH KIM CANG',
  type: 'article',
  status: 'published',
  order: 1,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [],
    },
  ]
}

export default lesson