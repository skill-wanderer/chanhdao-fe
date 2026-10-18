import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-52-ix-4-khuyen-nen-song-trong-coi-tran-hoc-dao',
  slug: 'bai-52-ix-4-khuyen-nen-song-trong-coi-tran-hoc-dao',
  title: '4. Khuyên nên sống trong cõi trần học đạo',
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

