import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-57-tang-bo-4-thu-phuc-dap-cu-si-thieu-hue-vien',
  slug: 'bai-57-tang-bo-4-thu-phuc-dap-cu-si-thieu-hue-vien',
  title: '4. Thư phúc đáp cư sĩ Thiệu Huệ Viên',
  type: 'article',
  status: 'published',
  order: 4,
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

