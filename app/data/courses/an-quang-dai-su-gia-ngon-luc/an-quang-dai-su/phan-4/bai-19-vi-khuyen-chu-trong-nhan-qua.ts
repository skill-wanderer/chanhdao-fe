import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-19-vi-khuyen-chu-trong-nhan-qua',
  slug: 'bai-19-vi-khuyen-chu-trong-nhan-qua',
  title: 'VI. KHUYÊN CHÚ TRỌNG NHÂN QUẢ',
  type: 'article',
  isSectionHeader: true,
  status: 'published',
  order: 1,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
    },
  ],
}

export default lesson

