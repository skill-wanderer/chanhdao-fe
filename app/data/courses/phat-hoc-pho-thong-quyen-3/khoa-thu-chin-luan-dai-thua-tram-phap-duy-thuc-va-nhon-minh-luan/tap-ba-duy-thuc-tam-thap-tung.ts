import type { Lesson } from '~/types/course'

const content = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại thừa trăm pháp, Duy thức và Nhơn minh luận</p>
  <h2 class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">TẬP BA</h2>
  <h3 class="text-xl font-semibold">DUY THỨC TAM THẬP TỤNG DỊ GIẢI</h3>
  <p>Tập Duy thức Tam thập tụng chia làm 3 phần:</p>
  <ol class="list-decimal pl-6">
    <li>Duy thức Tam thập tụng dị giải</li>
    <li>Duy thức Tam thập tụng chánh văn</li>
    <li>Phụ hai cái biểu</li>
  </ol>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-9-tap-ba-duy-thuc-tam-thap-tung',
  slug: 'tap-ba-duy-thuc-tam-thap-tung',
  title: 'Tập Ba: Duy Thức Tam Thập Tụng',
  type: 'article',
  status: 'draft',
  order: 16,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-06',
}

export default lesson
