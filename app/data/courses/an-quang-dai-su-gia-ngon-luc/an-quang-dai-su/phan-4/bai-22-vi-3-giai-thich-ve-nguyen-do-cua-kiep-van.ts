import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-22-vi-3-giai-thich-ve-nguyen-do-cua-kiep-van',
  slug: 'bai-22-vi-3-giai-thich-ve-nguyen-do-cua-kiep-van',
  title: '3. Giải thích về nguyên do của kiếp vận',
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

