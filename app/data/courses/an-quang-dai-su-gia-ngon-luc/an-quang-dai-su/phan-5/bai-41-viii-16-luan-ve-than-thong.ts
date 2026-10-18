import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-41-viii-16-luan-ve-than-thong',
  slug: 'bai-41-viii-16-luan-ve-than-thong',
  title: '16. Luận về thần thông',
  type: 'article',
  status: 'published',
  order: 18,
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

