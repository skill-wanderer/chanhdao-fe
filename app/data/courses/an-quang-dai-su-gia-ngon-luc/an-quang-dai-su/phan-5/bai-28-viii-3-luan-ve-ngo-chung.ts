import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-28-viii-3-luan-ve-ngo-chung',
  slug: 'bai-28-viii-3-luan-ve-ngo-chung',
  title: '3. Luận về ngộ chứng',
  type: 'article',
  status: 'published',
  order: 5,
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

