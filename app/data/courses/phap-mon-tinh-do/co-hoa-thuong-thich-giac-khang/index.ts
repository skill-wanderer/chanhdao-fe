import type { Module } from '~/types/course'

import bai1BayCauHoiVePhapMonTinhDo from './bai-1-7-cau-hoi-ve-phap-mon-tinh-do'
import bai2KhaiThiVaPhatNguyenVangSanh from './bai-2-khai-thi-va-phat-nguyen-vang-sanh'
import bai3DieuKienVangSanhVeCoiCucLac from './bai-3-dieu-kien-vang-sanh-ve-coi-cuc-lac'
import bai4NhanThucVeTaiSanhChungNgoVangSanh from './bai-4-nhan-thuc-ve-tai-sanh-chung-ngo-vang-sanh'
import bai5NhungDiemThietYeuCuaNguoiTuTinhDo from './bai-5-nhung-diem-thiet-yeu-cua-nguoi-tu-tinh-do'

/**
 * Modules in this course are grouped by teacher rather than by book, because
 * the course is a compilation drawn from several sources. Additional teachers
 * are added as sibling modules.
 */
const moduleData: Module = {
  id: 'module-phap-mon-tinh-do-thich-giac-khang',
  slug: 'co-hoa-thuong-thich-giac-khang',
  title: 'Cố Hòa thượng Thích Giác Khang',
  order: 1,
  lessons: [
    bai1BayCauHoiVePhapMonTinhDo,
    bai2KhaiThiVaPhatNguyenVangSanh,
    bai3DieuKienVangSanhVeCoiCucLac,
    bai4NhanThucVeTaiSanhChungNgoVangSanh,
    bai5NhungDiemThietYeuCuaNguoiTuTinhDo,
  ],
}

export default moduleData
