import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-29-viii-4-luan-ve-tong-giao',
  slug: 'bai-29-viii-4-luan-ve-tong-giao',
  title: '4. Luận về Tông, Giáo',
  type: 'article',
  status: 'published',
  order: 6,
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

