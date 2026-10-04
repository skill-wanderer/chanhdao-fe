import type { Course } from '~/types/course'

import thichMinhDien from './thich-minh-dien'
import { courseMaterialUrl } from './material'

const modules = [
  thichMinhDien,
]

const course: Course = {
  id: 'course-luoc-giai-kinh-a-di-da',
  slug: 'luoc-giai-kinh-a-di-da',
  title: 'LƯỢC GIẢI KINH A DI ĐÀ',
  excerpt: 'Bản lược giải Kinh A Di Đà do Tỳ kheo Thích Minh Điền lược giải, trình bày theo từng phần của mục lục kinh.',
  description: `LƯỢC GIẢI KINH A DI ĐÀ

Thời đại Dao Tần, Pháp Sư ba tạng Cưu Ma La Thập dịch văn Phạn sang văn Trung Hoa.

Lược giải: Tỳ kheo Thích Minh Điền

Nội dung khóa học được sắp xếp theo mục lục gồm Lời tựa, phần chánh văn với các nội dung giải thích tiêu đề kinh, duyên khởi và đại chúng pháp hội, cảnh giới Cực Lạc, Đức Phật A DI ĐÀ, mười phương chư Phật tán thán và hộ niệm, cùng phần Kết Kinh.`,
  thumbnail: courseMaterialUrl('Ảnh_bìa.jpg'),
  difficulty: 'beginner',
  lessonCount: modules.reduce((count, moduleData) => count + moduleData.lessons.length, 0),
  modules,
  tags: ['kinh-a-di-da', 'tinh-do'],
  instructor: 'Tỳ kheo Thích Minh Điền',
  createdAt: '2026-10-04',
  updatedAt: '2026-10-04',
}

export default course
