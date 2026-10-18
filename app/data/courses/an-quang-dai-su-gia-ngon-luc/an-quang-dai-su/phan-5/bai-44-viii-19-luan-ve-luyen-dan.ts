import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-44-viii-19-luan-ve-luyen-dan',
  slug: 'bai-44-viii-19-luan-ve-luyen-dan',
  title: '19. Luận về luyện đan',
  type: 'article',
  status: 'published',
  order: 21,
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

