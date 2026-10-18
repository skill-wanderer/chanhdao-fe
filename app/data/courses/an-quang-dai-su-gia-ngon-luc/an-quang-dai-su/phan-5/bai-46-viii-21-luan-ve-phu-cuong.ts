import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-46-viii-21-luan-ve-phu-cuong',
  slug: 'bai-46-viii-21-luan-ve-phu-cuong',
  title: '21. Luận về phú cường',
  type: 'article',
  status: 'published',
  order: 23,
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

