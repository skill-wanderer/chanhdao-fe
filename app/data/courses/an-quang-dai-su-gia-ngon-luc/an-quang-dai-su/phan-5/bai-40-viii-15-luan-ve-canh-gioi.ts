import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-40-viii-15-luan-ve-canh-gioi',
  slug: 'bai-40-viii-15-luan-ve-canh-gioi',
  title: '15. Luận về cảnh giới',
  type: 'article',
  status: 'published',
  order: 17,
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

