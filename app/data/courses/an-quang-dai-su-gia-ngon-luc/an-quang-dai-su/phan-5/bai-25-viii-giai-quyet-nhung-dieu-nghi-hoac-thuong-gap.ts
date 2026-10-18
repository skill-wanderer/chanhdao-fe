import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-25-viii-giai-quyet-nhung-dieu-nghi-hoac-thuong-gap',
  slug: 'bai-25-viii-giai-quyet-nhung-dieu-nghi-hoac-thuong-gap',
  title: 'VIII. GIẢI QUYẾT NHỮNG ĐIỀU NGHI HOẶC THƯỜNG GẶP',
  type: 'article',
  isSectionHeader: true,
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

