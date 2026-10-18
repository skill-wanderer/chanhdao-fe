import type { Module } from '~/types/course'

import bai8IiiChiDayPhuongPhapTuTri from './bai-8-iii-chi-day-phuong-phap-tu-tri'
import bai9Iii1GiangVePhuongPhapNiemPhat from './bai-9-iii-1-giang-ve-phuong-phap-niem-phat'
import bai10Iii2DoiTriTapKhi from './bai-10-iii-2-doi-tri-tap-khi'
import bai11Iii3LuanVeViecGinLongLapPham from './bai-11-iii-3-luan-ve-viec-gin-long-lap-pham'
import bai12Iii4LuanDinhCacPhapTuTri from './bai-12-iii-4-luan-dinh-cac-phap-tu-tri'
import bai13Iii5KhuyenHanhNhanNoLuc from './bai-13-iii-5-khuyen-hanh-nhan-no-luc'

const moduleData: Module = {
  id: 'module-an-quang-dai-su-gia-ngon-luc-phan-2',
  slug: 'phan-2',
  title: 'Phần 2',
  order: 3,
  lessons: [
    bai8IiiChiDayPhuongPhapTuTri,
    bai9Iii1GiangVePhuongPhapNiemPhat,
    bai10Iii2DoiTriTapKhi,
    bai11Iii3LuanVeViecGinLongLapPham,
    bai12Iii4LuanDinhCacPhapTuTri,
    bai13Iii5KhuyenHanhNhanNoLuc,
  ],
}

export default moduleData

