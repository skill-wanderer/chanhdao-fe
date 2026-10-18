import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-31-viii-6-luan-ve-xuat-gia',
  slug: 'bai-31-viii-6-luan-ve-xuat-gia',
  title: '6. Luận về xuất gia',
  type: 'article',
  status: 'published',
  order: 8,
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

