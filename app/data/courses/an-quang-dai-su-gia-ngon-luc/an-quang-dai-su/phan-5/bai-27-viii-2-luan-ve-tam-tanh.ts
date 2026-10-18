import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-27-viii-2-luan-ve-tam-tanh',
  slug: 'bai-27-viii-2-luan-ve-tam-tanh',
  title: '2. Luận về tâm tánh',
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

