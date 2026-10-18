import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-32-viii-7-luan-ve-bang-phat',
  slug: 'bai-32-viii-7-luan-ve-bang-phat',
  title: '7. Luận về báng Phật',
  type: 'article',
  status: 'published',
  order: 9,
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

