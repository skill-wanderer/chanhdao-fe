import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-12-iii-4-luan-dinh-cac-phap-tu-tri',
  slug: 'bai-12-iii-4-luan-dinh-cac-phap-tu-tri',
  title: '4. Luận định các pháp tu trì',
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

