import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-43-viii-18-luan-ve-cau-co',
  slug: 'bai-43-viii-18-luan-ve-cau-co',
  title: '18. Luận về cầu cơ',
  type: 'article',
  status: 'published',
  order: 20,
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

