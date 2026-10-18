import type { Course } from '~/types/course'
import { isStandaloneSectionHeaderLesson } from '~/types/course'

import { courseMaterialUrl } from './material'
import moDau from './an-quang-dai-su/mo-dau'
import phan1 from './an-quang-dai-su/phan-1'
import phan2 from './an-quang-dai-su/phan-2'
import phan3 from './an-quang-dai-su/phan-3'
import phan4 from './an-quang-dai-su/phan-4'
import phan5 from './an-quang-dai-su/phan-5'
import phan6 from './an-quang-dai-su/phan-6'
import tangBo from './an-quang-dai-su/tang-bo'

const modules = [
  moDau,
  phan1,
  phan2,
  phan3,
  phan4,
  phan5,
  phan6,
  tangBo,
]

const course: Course = {
  id: 'course-an-quang-dai-su-gia-ngon-luc',
  slug: 'an-quang-dai-su-gia-ngon-luc',
  title: 'ẤN QUANG ĐẠI SƯ GIA NGÔN LỤC',
  excerpt: 'Tuyển tập lời dạy của Ấn Quang Đại Sư, do Cư sĩ Lý Viên Tịnh kết tập, Ấn Quang Đại Sư giám định và Bửu Quang Tự - Đệ Tử Như Hòa chuyển ngữ.',
  description: `ẤN QUANG ĐẠI SƯ GIA NGÔN LỤC

Theo bản in của Phật Quang Viện, thành phố Bản Kiều, Đài Loan, tháng 2 năm 1982.

Cư sĩ Lý Viên Tịnh kết tập
Ấn Quang Đại Sư giám định
Chuyển ngữ: Bửu Quang Tự - Đệ Tử Như Hòa

Nội dung khóa học được sắp xếp theo mục lục gồm phần mở đầu, sáu phần nội dung chính và phần Tăng Bổ.`,
  thumbnail: courseMaterialUrl(),
  difficulty: 'beginner',
  lessonCount: modules.reduce((count, moduleData) => count + moduleData.lessons.filter(lesson => !isStandaloneSectionHeaderLesson(lesson)).length, 0),
  modules,
  tags: ['an-quang-dai-su-gia-ngon-luc', 'tinh-do'],
  instructor: 'Ấn Quang Đại Sư',
  createdAt: '2026-10-18',
  updatedAt: '2026-10-18',
}

export default course

