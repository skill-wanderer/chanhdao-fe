import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-4-ii-khuyen-tin-hanh-nguyen',
  slug: 'bai-4-ii-khuyen-tin-hanh-nguyen',
  title: 'II. KHUYÊN TÍN HẠNH NGUYỆN NÊN CHÂN THÀNH , THA THIẾT',
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

