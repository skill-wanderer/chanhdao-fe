import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-53-ix-5-cac-sach-vo-nen-doc',
  slug: 'bai-53-ix-5-cac-sach-vo-nen-doc',
  title: '5. Các sách vở nên đọc',
  type: 'article',
  status: 'published',
  order: 6,
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

