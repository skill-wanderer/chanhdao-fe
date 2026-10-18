import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-17-iv-3-day-nhung-dieu-thiet-yeu-ve-lam-chung',
  slug: 'bai-17-iv-3-day-nhung-dieu-thiet-yeu-ve-lam-chung',
  title: '3. Dạy những điều thiết yếu về lâm chung',
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

