import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-56-tang-bo-3-thu-phuc-dap-cu-si-ngu-tang',
  slug: 'bai-56-tang-bo-3-thu-phuc-dap-cu-si-ngu-tang',
  title: '3. Thư phúc đáp cư sĩ Ngu Tăng',
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

