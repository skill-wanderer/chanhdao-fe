import type { Module } from '~/types/course'

import bai14IvLuanVeViecLonSanhTu from './bai-14-iv-luan-ve-viec-lon-sanh-tu'
import bai15Iv1CanhTinhMangNguoiVoThuong from './bai-15-iv-1-canh-tinh-mang-nguoi-vo-thuong'
import bai16Iv2KhuyenChuyenCayVaoPhatLuc from './bai-16-iv-2-khuyen-chuyen-cay-vao-phat-luc'
import bai17Iv3DayNhungDieuThietYeuVeLamChung from './bai-17-iv-3-day-nhung-dieu-thiet-yeu-ve-lam-chung'
import bai18Iv4KhuyenNenGiuLongThanhKinh from './bai-18-iv-4-khuyen-nen-giu-long-thanh-kinh'

const moduleData: Module = {
  id: 'module-an-quang-dai-su-gia-ngon-luc-phan-3',
  slug: 'phan-3',
  title: 'Phần 3',
  order: 4,
  lessons: [
    bai14IvLuanVeViecLonSanhTu,
    bai15Iv1CanhTinhMangNguoiVoThuong,
    bai16Iv2KhuyenChuyenCayVaoPhatLuc,
    bai17Iv3DayNhungDieuThietYeuVeLamChung,
    bai18Iv4KhuyenNenGiuLongThanhKinh,
  ],
}

export default moduleData

