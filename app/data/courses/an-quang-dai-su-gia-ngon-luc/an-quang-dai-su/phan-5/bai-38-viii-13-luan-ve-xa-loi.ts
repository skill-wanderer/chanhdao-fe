import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-38-viii-13-luan-ve-xa-loi',
  slug: 'bai-38-viii-13-luan-ve-xa-loi',
  title: '13. Luận về xá-lợi',
  type: 'article',
  status: 'published',
  order: 15,
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

