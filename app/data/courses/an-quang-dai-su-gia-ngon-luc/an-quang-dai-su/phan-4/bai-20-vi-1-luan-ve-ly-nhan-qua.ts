import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-20-vi-1-luan-ve-ly-nhan-qua',
  slug: 'bai-20-vi-1-luan-ve-ly-nhan-qua',
  title: '1. Luận về lý nhân quả',
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

