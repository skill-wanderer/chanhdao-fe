import type { Lesson } from '~/types/course'

// Bài chưa biên soạn. Khi có nội dung: thêm readingContent + learningMethods
// theo mẫu các bài ở quyển 3, rồi đổi status thành 'published'.
const lesson: Lesson = {
  id: 'lesson-bdtp-tap-7-hoa-nghiem-tong-va-tam-luan-tong-phu-nghi-thuc-tung-hoa-nghiem-tu-mau-giong-quang-dong',
  slug: 'phu-nghi-thuc-tung-hoa-nghiem-tu-mau-giong-quang-dong',
  title: 'Phụ: Nghi thức Tụng Hoa Nghiêm tự mẫu (giọng Quảng Đông)',
  type: 'article',
  status: 'draft',
  order: 3,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
}

export default lesson
