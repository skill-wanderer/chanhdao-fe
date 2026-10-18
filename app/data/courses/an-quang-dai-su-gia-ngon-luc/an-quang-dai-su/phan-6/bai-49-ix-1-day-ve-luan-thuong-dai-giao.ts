import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-49-ix-1-day-ve-luan-thuong-dai-giao',
  slug: 'bai-49-ix-1-day-ve-luan-thuong-dai-giao',
  title: '1. Dạy về luân thường đại giáo',
  type: 'article',
  status: 'published',
  order: 2,
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

