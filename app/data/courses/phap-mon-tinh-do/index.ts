import type { Course } from '~/types/course'
import { phapMonTinhDoIntroduction, thichGiacKhangAuthor } from '~/data/authors'

import coHoaThuongThichGiacKhang from './co-hoa-thuong-thich-giac-khang'

const modules = [
  coHoaThuongThichGiacKhang,
]

const course: Course = {
  id: 'course-phap-mon-tinh-do',
  slug: 'phap-mon-tinh-do',
  title: 'Pháp môn Tịnh độ',
  excerpt: 'Pháp tập tuyển chọn các bài giảng về Tín — Nguyện — Hạnh và pháp môn niệm Phật, mở đầu với loạt bài của cố Hòa thượng Thích Giác Khang.',
  description: phapMonTinhDoIntroduction,
  thumbnail: '/images/courses/phap-mon-tinh-do.jpg',
  difficulty: 'beginner',
  lessonCount: modules.reduce((count, moduleData) => count + moduleData.lessons.length, 0),
  modules,
  tags: ['tinh-do', 'niem-phat', 'phap-mon'],
  instructor: 'Cố Hòa thượng Thích Giác Khang',
  author: thichGiacKhangAuthor,
  createdAt: '2026-08-29',
  updatedAt: '2026-08-29',
}

export default course
