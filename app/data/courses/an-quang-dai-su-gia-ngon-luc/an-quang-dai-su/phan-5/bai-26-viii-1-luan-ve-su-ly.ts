import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-26-viii-1-luan-ve-su-ly',
  slug: 'bai-26-viii-1-luan-ve-su-ly',
  title: '1. Luận về sự - lý',
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

