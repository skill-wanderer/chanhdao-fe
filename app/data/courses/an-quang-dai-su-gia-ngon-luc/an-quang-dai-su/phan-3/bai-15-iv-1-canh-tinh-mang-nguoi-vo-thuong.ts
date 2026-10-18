import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-15-iv-1-canh-tinh-mang-nguoi-vo-thuong',
  slug: 'bai-15-iv-1-canh-tinh-mang-nguoi-vo-thuong',
  title: '1. Cảnh tỉnh mạng người vô thường',
  type: 'article',
  status: 'published',
  order: 2,
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

