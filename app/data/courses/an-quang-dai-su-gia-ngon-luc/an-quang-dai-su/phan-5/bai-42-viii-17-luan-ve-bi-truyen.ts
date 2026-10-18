import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-42-viii-17-luan-ve-bi-truyen',
  slug: 'bai-42-viii-17-luan-ve-bi-truyen',
  title: '17. Luận về bí truyền',
  type: 'article',
  status: 'published',
  order: 19,
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

