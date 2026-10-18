import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section></section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-55-tang-bo-2-thu-phuc-dap-du-hue-uc-tran-hue-suong',
  slug: 'bai-55-tang-bo-2-thu-phuc-dap-du-hue-uc-tran-hue-suong',
  title: '2. Thư phúc đáp Du Huệ Úc, Trần Huệ Sưởng',
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

