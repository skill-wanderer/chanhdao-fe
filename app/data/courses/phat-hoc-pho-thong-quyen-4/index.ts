import type { Course } from '~/types/course'
import { banDoTuPhatIntroduction, phatHocPhoThongAuthor } from '~/data/authors'

import tap1ChonDuongTu from './tap-1-chon-duong-tu'
import tap2LuatTongVaTinhDoTong from './tap-2-luat-tong-va-tinh-do-tong'
import tap3ThienTongQuyenNhut from './tap-3-thien-tong-quyen-nhut'
import tap4ThienTongQuyenNhi from './tap-4-thien-tong-quyen-nhi'
import tap5DuyThucTong from './tap-5-duy-thuc-tong'
import tap6MatTongVaThienThaiTong from './tap-6-mat-tong-va-thien-thai-tong'
import tap7HoaNghiemTongVaTamLuanTong from './tap-7-hoa-nghiem-tong-va-tam-luan-tong'
import tap8CauXaTongVaThanhThatTong from './tap-8-cau-xa-tong-va-thanh-that-tong'
import tap9ConDuongTuCuaBacDaiThuaBoTat from './tap-9-con-duong-tu-cua-bac-dai-thua-bo-tat'
import tap10ConDuongTuCuaNamThua from './tap-10-con-duong-tu-cua-nam-thua'

const modules = [
  tap1ChonDuongTu,
  tap2LuatTongVaTinhDoTong,
  tap3ThienTongQuyenNhut,
  tap4ThienTongQuyenNhi,
  tap5DuyThucTong,
  tap6MatTongVaThienThaiTong,
  tap7HoaNghiemTongVaTamLuanTong,
  tap8CauXaTongVaThanhThatTong,
  tap9ConDuongTuCuaBacDaiThuaBoTat,
  tap10ConDuongTuCuaNamThua,
]

/**
 * Mục lục của "Bản đồ tu Phật" đã dựng sẵn theo 10 tập của bản in gốc.
 * Trừ Lời tựa, các bài còn lại đang ở trạng thái 'draft' — chúng hiện trong
 * mục lục dưới dạng "sắp mở" và chưa có trang riêng. Mỗi bài được biên soạn
 * độc lập: điền nội dung vào file bài tương ứng rồi đổi sang 'published'.
 */
const course: Course = {
  id: 'course-phat-hoc-pho-thong-quyen-4',
  slug: 'phat-hoc-pho-thong-quyen-4',
  title: 'Bản đồ tu Phật',
  excerpt: 'Pháp tập khép lại bộ Phật học phổ thông, vẽ lại "bản đồ" các lối tu — từ cách chọn đường tu, pháp tu của mười tông phái, đến con đường của Bồ tát và Năm thừa.',
  description: banDoTuPhatIntroduction,
  thumbnail: '/images/courses/ban-do-tu-phat.jpg',
  difficulty: 'beginner',
  lessonCount: modules.reduce((count, moduleData) => count + moduleData.lessons.length, 0),
  modules,
  tags: ['phat-hoc', 'viet-nam', 'tong-phai', 'phap-tu'],
  instructor: 'Hòa thượng Thích Thiện Hoa',
  author: phatHocPhoThongAuthor,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
}

export default course
