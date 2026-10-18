import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-39-viii-14-luan-ve-ty-huong',
  slug: 'bai-39-viii-14-luan-ve-ty-huong',
  title: '14. Luận về tý hương',
  type: 'article',
  status: 'published',
  order: 16,
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

