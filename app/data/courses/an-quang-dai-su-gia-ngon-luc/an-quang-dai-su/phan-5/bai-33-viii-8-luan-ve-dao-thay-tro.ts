import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-33-viii-8-luan-ve-dao-thay-tro',
  slug: 'bai-33-viii-8-luan-ve-dao-thay-tro',
  title: '8. Luận về đạo thầy trò',
  type: 'article',
  status: 'published',
  order: 10,
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

