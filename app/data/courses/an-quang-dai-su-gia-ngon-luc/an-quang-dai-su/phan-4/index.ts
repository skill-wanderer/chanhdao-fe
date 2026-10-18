import type { Module } from '~/types/course'

import bai19ViKhuyenChuTrongNhanQua from './bai-19-vi-khuyen-chu-trong-nhan-qua'
import bai20Vi1LuanVeLyNhanQua from './bai-20-vi-1-luan-ve-ly-nhan-qua'
import bai21Vi2GiangNhanQuaVeMatSu from './bai-21-vi-2-giang-nhan-qua-ve-mat-su'
import bai22Vi3GiaiThichVeNguyenDoCuaKiepVan from './bai-22-vi-3-giai-thich-ve-nguyen-do-cua-kiep-van'
import bai23Vi4GiangNhungDiemTrongYeuVeViecGioiSat from './bai-23-vi-4-giang-nhung-diem-trong-yeu-ve-viec-gioi-sat'

const moduleData: Module = {
  id: 'module-an-quang-dai-su-gia-ngon-luc-phan-4',
  slug: 'phan-4',
  title: 'Phần 4',
  order: 5,
  lessons: [
    bai19ViKhuyenChuTrongNhanQua,
    bai20Vi1LuanVeLyNhanQua,
    bai21Vi2GiangNhanQuaVeMatSu,
    bai22Vi3GiaiThichVeNguyenDoCuaKiepVan,
    bai23Vi4GiangNhungDiemTrongYeuVeViecGioiSat,
  ],
}

export default moduleData

