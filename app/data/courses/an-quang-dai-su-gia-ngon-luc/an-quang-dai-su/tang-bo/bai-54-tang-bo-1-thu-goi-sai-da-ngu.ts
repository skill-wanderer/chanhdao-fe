import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-54-tang-bo-1-thu-goi-sai-da-ngu',
  slug: 'bai-54-tang-bo-1-thu-goi-sai-da-ngu',
  title: '1. Thư gởi Sài Dã Ngu',
  type: 'article',
  status: 'published',
  order: 1,
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

