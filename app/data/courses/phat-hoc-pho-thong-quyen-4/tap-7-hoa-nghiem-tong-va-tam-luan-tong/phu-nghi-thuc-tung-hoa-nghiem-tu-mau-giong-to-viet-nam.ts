import type { Lesson } from '~/types/course'

// Bài chưa biên soạn. Khi có nội dung: thêm readingContent + learningMethods
// theo mẫu các bài ở quyển 3, rồi đổi status thành 'published'.
const lesson: Lesson = {
  id: 'lesson-bdtp-tap-7-hoa-nghiem-tong-va-tam-luan-tong-phu-nghi-thuc-tung-hoa-nghiem-tu-mau-giong-to-viet-nam',
  slug: 'phu-nghi-thuc-tung-hoa-nghiem-tu-mau-giong-to-viet-nam',
  title: 'Phụ: Nghi thức Tụng Hoa Nghiêm tự mẫu (giọng Tổ Việt Nam)',
  type: 'article',
  status: 'draft',
  order: 2,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
}

export default lesson
