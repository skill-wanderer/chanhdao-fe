import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-37-viii-12-luan-ve-bon-coi-tinh-do',
  slug: 'bai-37-viii-12-luan-ve-bon-coi-tinh-do',
  title: '12. Luận về bốn cõi Tịnh Độ',
  type: 'article',
  status: 'published',
  order: 14,
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

