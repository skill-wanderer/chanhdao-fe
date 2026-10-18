import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-18-iv-4-khuyen-nen-giu-long-thanh-kinh',
  slug: 'bai-18-iv-4-khuyen-nen-giu-long-thanh-kinh',
  title: '4. Khuyên nên giữ lòng thành kính',
  type: 'article',
  status: 'published',
  order: 5,
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

