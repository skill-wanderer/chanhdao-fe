import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-50-ix-2-luan-ve-giao-duc-gia-dinh',
  slug: 'bai-50-ix-2-luan-ve-giao-duc-gia-dinh',
  title: '2. Luận về giáo dục gia đình',
  type: 'article',
  status: 'published',
  order: 3,
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

