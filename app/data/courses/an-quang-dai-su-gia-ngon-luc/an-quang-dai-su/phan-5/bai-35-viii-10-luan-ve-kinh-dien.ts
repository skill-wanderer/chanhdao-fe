import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-35-viii-10-luan-ve-kinh-dien',
  slug: 'bai-35-viii-10-luan-ve-kinh-dien',
  title: '10. Luận về kinh điển',
  type: 'article',
  status: 'published',
  order: 12,
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

