import type { Course } from '~/types/course'

import { courseMaterialUrl } from './material'
import thichMinhCanh from './thich-minh-canh'

const modules = [
  thichMinhCanh,
]

const course: Course = {
  id: 'course-kinh-vo-luong-tho',
  slug: 'kinh-vo-luong-tho',
  title: 'KINH ĐẠI THỪA VÔ LƯỢNG THỌ TRANG NGHIÊM THANH TỊNH BÌNH ĐẲNG GIÁC',
  excerpt: 'Kinh Đại Thừa Vô Lượng Thọ Trang Nghiêm Thanh Tịnh Bình Đẳng Giác, hội tập bởi Bồ-tát giới Hạ Liên Cư và Việt dịch bởi Tỳ-kheo Thích Minh Cảnh.',
  description: `KINH ĐẠI THỪA VÔ LƯỢNG THỌ
TRANG NGHIÊM THANH TỊNH
BÌNH ĐẲNG GIÁC

Hội tập: Bồ-tát giới Hạ Liên Cư
Việt dịch: Tỳ-kheo Thích Minh Cảnh

Nội dung được sắp xếp thành các bài đọc gồm lời cẩn bạch, nghi thức trì tụng, phần kinh chính, Kinh Tinh Yếu và chú thích.`,
  thumbnail: courseMaterialUrl(),
  difficulty: 'beginner',
  lessonCount: modules.reduce((count, moduleData) => count + moduleData.lessons.length, 0),
  modules,
  tags: ['kinh-vo-luong-tho', 'tinh-do'],
  instructor: 'Tỳ-kheo Thích Minh Cảnh',
  createdAt: '2026-10-10',
  updatedAt: '2026-10-10',
}

export default course
