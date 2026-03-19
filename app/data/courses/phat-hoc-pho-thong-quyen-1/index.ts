import type { Course } from '~/types/course'
import { phatHocPhoThongAuthor } from '~/data/authors'

const course: Course = {
  id: 'course-phat-hoc-pho-thong-quyen-1',
  slug: 'phat-hoc-pho-thong-quyen-1',
  title: 'Phật học phổ thông quyển 1',
  excerpt: 'Pháp quyển nền tảng nhập môn Phật học dành cho người mới bắt đầu.',
  description: 'Đây là pháp quyển placeholder cho pháp lộ nội dung Phật học dành cho người Việt.\n\nNội dung chi tiết sẽ được cập nhật theo từng bài học trong các phiên bản tiếp theo.',
  difficulty: 'beginner',
  lessonCount: 1,
  modules: [
    {
      id: 'module-phat-hoc-mo-dau',
      slug: 'module-phat-hoc-mo-dau',
      title: 'Phần mở đầu',
      order: 1,
      lessons: [
        {
          id: 'lesson-gioi-thieu-khoa-hoc',
          slug: 'gioi-thieu-khoa-hoc',
          title: 'Giới thiệu pháp quyển',
          type: 'article',
          status: 'draft',
          order: 1,
          content: '<p>Nội dung bài học đang được biên soạn.</p>',
          createdAt: '2026-03-19',
          updatedAt: '2026-03-19',
        },
      ],
    },
  ],
  tags: ['phat-hoc', 'viet-nam', 'nhap-mon'],
  instructor: 'Ban bien soan',
  author: phatHocPhoThongAuthor,
  createdAt: '2026-03-19',
  updatedAt: '2026-03-19',
}

export default course
