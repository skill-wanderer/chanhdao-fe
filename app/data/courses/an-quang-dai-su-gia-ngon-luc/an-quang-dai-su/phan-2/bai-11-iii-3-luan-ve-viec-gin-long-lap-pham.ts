import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-11-iii-3-luan-ve-viec-gin-long-lap-pham',
  slug: 'bai-11-iii-3-luan-ve-viec-gin-long-lap-pham',
  title: '3. Luận về việc gìn lòng lập phẩm',
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

