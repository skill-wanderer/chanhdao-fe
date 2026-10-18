import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-36-viii-11-luan-ve-trung-am',
  slug: 'bai-36-viii-11-luan-ve-trung-am',
  title: '11. Luận về Trung Ấm',
  type: 'article',
  status: 'published',
  order: 13,
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

