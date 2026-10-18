import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-23-vi-4-giang-nhung-diem-trong-yeu-ve-viec-gioi-sat',
  slug: 'bai-23-vi-4-giang-nhung-diem-trong-yeu-ve-viec-gioi-sat',
  title: '4. Giảng những điểm trọng yếu về việc giới sát',
  type: 'article',
  status: 'published',
  order: 5,
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

