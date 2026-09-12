import type { Lesson } from '~/types/course'

// Bài chưa biên soạn. Khi có nội dung: thêm readingContent + learningMethods
// theo mẫu các bài ở quyển 3, rồi đổi status thành 'published'.
const lesson: Lesson = {
  id: 'lesson-bdtp-tap-1-chon-duong-tu-chon-duong-tu',
  slug: 'chon-duong-tu',
  title: 'Chọn đường tu',
  type: 'article',
  status: 'draft',
  order: 2,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
}

export default lesson
