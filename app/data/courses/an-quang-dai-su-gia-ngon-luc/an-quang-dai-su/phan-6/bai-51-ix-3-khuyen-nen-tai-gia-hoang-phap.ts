import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-51-ix-3-khuyen-nen-tai-gia-hoang-phap',
  slug: 'bai-51-ix-3-khuyen-nen-tai-gia-hoang-phap',
  title: '3. Khuyên nên tại gia hoằng pháp',
  type: 'article',
  status: 'published',
  order: 4,
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

