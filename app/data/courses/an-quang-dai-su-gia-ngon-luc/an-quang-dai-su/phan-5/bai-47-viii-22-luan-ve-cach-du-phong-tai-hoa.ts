import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-47-viii-22-luan-ve-cach-du-phong-tai-hoa',
  slug: 'bai-47-viii-22-luan-ve-cach-du-phong-tai-hoa',
  title: '22. Luận về cách dự phòng tai họa',
  type: 'article',
  status: 'published',
  order: 24,
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

