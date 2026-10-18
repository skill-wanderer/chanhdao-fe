import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-24-vii-phan-dinh-gioi-han-giua-thien-va-tinh',
  slug: 'bai-24-vii-phan-dinh-gioi-han-giua-thien-va-tinh',
  title: 'VII. PHÂN ĐỊNH GIỚI HẠN GIỮA THIỀN VÀ TỊNH',
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

