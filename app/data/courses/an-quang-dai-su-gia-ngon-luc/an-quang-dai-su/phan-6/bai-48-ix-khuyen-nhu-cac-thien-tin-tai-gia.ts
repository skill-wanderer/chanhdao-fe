import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-48-ix-khuyen-nhu-cac-thien-tin-tai-gia',
  slug: 'bai-48-ix-khuyen-nhu-cac-thien-tin-tai-gia',
  title: 'IX. Khuyên nhủ các thiện tín tại gia',
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

