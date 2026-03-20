import type { Course } from '~/types/course'
import { phatHocPhoThongAuthor, phatHocPhoThongIntroduction } from '~/data/authors'

import khoaThuChinLuanDaiThuaTramPhapDuyThucVaNhonMinhLuan from './khoa-thu-chin-luan-dai-thua-tram-phap-duy-thuc-va-nhon-minh-luan'
import khoaThu10Va11LuanDaiThuaKhoiTin from './khoa-thu-10-va-11-luan-dai-thua-khoi-tin'
import khoaThuMuoiHaiKinhKimCangVaTamKinh from './khoa-thu-muoi-hai-kinh-kim-cang-va-tam-kinh'

const modules = [
  khoaThuChinLuanDaiThuaTramPhapDuyThucVaNhonMinhLuan,
  khoaThu10Va11LuanDaiThuaKhoiTin,
  khoaThuMuoiHaiKinhKimCangVaTamKinh
]

const course: Course = {
  id: 'course-phat-hoc-pho-thong-quyen-3',
  slug: 'phat-hoc-pho-thong-quyen-3',
  title: 'Phật học phổ thông quyển 3',
  excerpt: 'Pháp quyển tiếp tục lộ trình Phật học phổ thông, cùng tác giả và cùng phần giới thiệu nền tảng như các quyển trước.',
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
