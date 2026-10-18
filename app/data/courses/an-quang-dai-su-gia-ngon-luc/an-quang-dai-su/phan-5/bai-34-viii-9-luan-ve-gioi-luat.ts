import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-34-viii-9-luan-ve-gioi-luat',
  slug: 'bai-34-viii-9-luan-ve-gioi-luat',
  title: '9. Luận về Giới Luật',
  type: 'article',
  status: 'published',
  order: 11,
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

