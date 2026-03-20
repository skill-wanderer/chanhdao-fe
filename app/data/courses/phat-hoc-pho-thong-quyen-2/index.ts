import type { Course } from '~/types/course'
import { phatHocPhoThongAuthor, phatHocPhoThongIntroduction } from '~/data/authors'

import khoaThuNamLichSuTruyenBaPhatGiao10TongPhaiVaVuTruNhanSanh from './khoa-thu-nam-lich-su-truyen-ba-phat-giao-10-tong-phai-va-vu-tru-nhan-sanh'
import khoaThuSauBayDaiCuongKinhLangNghiem from './khoa-thu-sau-bay-dai-cuong-kinh-lang-nghiem'
import khoaThuTamToanBoKinhVienGiac from './khoa-thu-tam-toan-bo-kinh-vien-giac'

const modules = [
  khoaThuNamLichSuTruyenBaPhatGiao10TongPhaiVaVuTruNhanSanh,
  khoaThuSauBayDaiCuongKinhLangNghiem,
  khoaThuTamToanBoKinhVienGiac
]

const course: Course = {
  id: 'course-phat-hoc-pho-thong-quyen-2',
  slug: 'phat-hoc-pho-thong-quyen-2',
  title: 'Phật học phổ thông quyển 2',
  excerpt: 'Pháp quyển tiếp nối cùng tác giả, giữ nguyên tinh thần nhập môn và nền tảng giáo lý của bộ Phật học phổ thông.',
  description: phatHocPhoThongIntroduction,
  thumbnail: '/images/courses/phat-hoc-pho-thong.jpg',
  difficulty: 'beginner',
  lessonCount: modules.reduce((count, moduleData) => count + moduleData.lessons.length, 0),
  modules,
  tags: ['phat-hoc', 'viet-nam', 'nhap-mon'],
  instructor: 'Hòa thượng Thích Thiện Hoa',
  author: phatHocPhoThongAuthor,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
}

export default course
