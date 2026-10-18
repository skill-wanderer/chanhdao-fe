import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-8-iii-chi-day-phuong-phap-tu-tri',
  slug: 'bai-8-iii-chi-day-phuong-phap-tu-tri',
  title: 'III. CHỈ DẠY PHƯƠNG PHÁP TU TRÌ',
  type: 'article',
  isSectionHeader: true,
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

