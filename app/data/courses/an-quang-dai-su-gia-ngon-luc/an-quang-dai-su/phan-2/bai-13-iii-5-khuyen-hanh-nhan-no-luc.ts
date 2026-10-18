import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-13-iii-5-khuyen-hanh-nhan-no-luc',
  slug: 'bai-13-iii-5-khuyen-hanh-nhan-no-luc',
  title: '5. Khuyên hành nhân nỗ lực',
  type: 'article',
  status: 'published',
  order: 6,
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

