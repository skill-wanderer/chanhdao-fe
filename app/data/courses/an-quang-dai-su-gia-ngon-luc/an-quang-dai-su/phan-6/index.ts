import type { Module } from '~/types/course'

import bai48IxKhuyenNhuCacThienTinTaiGia from './bai-48-ix-khuyen-nhu-cac-thien-tin-tai-gia'
import bai49Ix1DayVeLuanThuongDaiGiao from './bai-49-ix-1-day-ve-luan-thuong-dai-giao'
import bai50Ix2LuanVeGiaoDucGiaDinh from './bai-50-ix-2-luan-ve-giao-duc-gia-dinh'
import bai51Ix3KhuyenNenTaiGiaHoangPhap from './bai-51-ix-3-khuyen-nen-tai-gia-hoang-phap'
import bai52Ix4KhuyenNenSongTrongCoiTranHocDao from './bai-52-ix-4-khuyen-nen-song-trong-coi-tran-hoc-dao'
import bai53Ix5CacSachVoNenDoc from './bai-53-ix-5-cac-sach-vo-nen-doc'

const moduleData: Module = {
  id: 'module-an-quang-dai-su-gia-ngon-luc-phan-6',
  slug: 'phan-6',
  title: 'Phần 6',
  order: 7,
  lessons: [
    bai48IxKhuyenNhuCacThienTinTaiGia,
    bai49Ix1DayVeLuanThuongDaiGiao,
    bai50Ix2LuanVeGiaoDucGiaDinh,
    bai51Ix3KhuyenNenTaiGiaHoangPhap,
    bai52Ix4KhuyenNenSongTrongCoiTranHocDao,
    bai53Ix5CacSachVoNenDoc,
  ],
}

export default moduleData

