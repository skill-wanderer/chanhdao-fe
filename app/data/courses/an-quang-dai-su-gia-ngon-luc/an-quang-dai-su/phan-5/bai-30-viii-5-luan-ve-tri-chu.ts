import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-30-viii-5-luan-ve-tri-chu',
  slug: 'bai-30-viii-5-luan-ve-tri-chu',
  title: '5. Luận về Trì Chú',
  type: 'article',
  status: 'published',
  order: 7,
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

