import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-58-tang-bo-5-thu-goi-cu-si-vuong-tam-thien',
  slug: 'bai-58-tang-bo-5-thu-goi-cu-si-vuong-tam-thien',
  title: '5. Thư gởi cư sĩ Vương Tâm Thiền',
  type: 'article',
  status: 'published',
  order: 5,
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

