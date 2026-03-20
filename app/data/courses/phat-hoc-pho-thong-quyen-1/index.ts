import type { Course } from '~/types/course'
import { phatHocPhoThongAuthor, phatHocPhoThongIntroduction } from '~/data/authors'

import khoaThuNhatNhonThuaPhatGiao from './khoa-thu-nhat-nhon-thua-phat-giao'
import khoaThuHaiThienThuaPhatGiao from './khoa-thu-hai-thien-thua-phat-giao'
import khoaThuBaThinhVanThuaPhatGiao from './khoa-thu-ba-thinh-van-thua-phat-giao'
import khoaThuTuDuyenGiacVaBoTatThuaPhatGiao from './khoa-thu-tu-duyen-giac-va-bo-tat-thua-phat-giao'

const modules = [
  khoaThuNhatNhonThuaPhatGiao,
  khoaThuHaiThienThuaPhatGiao,
  khoaThuBaThinhVanThuaPhatGiao,
  khoaThuTuDuyenGiacVaBoTatThuaPhatGiao
]

const course: Course = {
  id: 'course-phat-hoc-pho-thong-quyen-1',
  slug: 'phat-hoc-pho-thong-quyen-1',
  title: 'Phật học phổ thông quyển 1',
  excerpt: 'Pháp quyển mở đầu đặt nền tảng giáo lý cho người học Phật theo chương trình Phật học phổ thông.',
  description: phatHocPhoThongIntroduction,
  thumbnail: '/images/courses/phat-hoc-pho-thong.jpg',
  difficulty: 'beginner',
  lessonCount: modules.reduce((count, moduleData) => count + moduleData.lessons.length, 0),
  modules,
  tags: ['phat-hoc', 'viet-nam', 'nhap-mon'],
  instructor: 'Hòa thượng Thích Thiện Hoa',
  author: phatHocPhoThongAuthor,
  createdAt: '2026-03-19',
  updatedAt: '2026-03-20',
}

export default course
