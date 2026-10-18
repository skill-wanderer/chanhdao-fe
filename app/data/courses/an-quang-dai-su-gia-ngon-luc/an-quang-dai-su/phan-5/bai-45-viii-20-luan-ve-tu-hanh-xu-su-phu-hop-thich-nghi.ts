import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-45-viii-20-luan-ve-tu-hanh-xu-su-phu-hop-thich-nghi',
  slug: 'bai-45-viii-20-luan-ve-tu-hanh-xu-su-phu-hop-thich-nghi',
  title: '20. Luận về tu hành, xử sự phải phù hợp, thích nghi',
  type: 'article',
  status: 'published',
  order: 22,
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

