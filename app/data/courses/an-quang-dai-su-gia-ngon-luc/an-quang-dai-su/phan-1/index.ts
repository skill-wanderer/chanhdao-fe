import type { Module } from '~/types/course'

import bai3ITinhDoThuThang from './bai-3-i-tinh-do-thu-thang'
import bai4IiKhuyenTinHanhNguyen from './bai-4-ii-khuyen-tin-hanh-nguyen'
import bai5Ii1GiangVeLongTinChanThanhTamNguyenThaThiet from './bai-5-ii-1-giang-ve-long-tin-chan-thanh-tam-nguyen-tha-thiet'
import bai6Ii2KhuyenTruNghiSanhTin from './bai-6-ii-2-khuyen-tru-nghi-sanh-tin'
import bai7Ii3KhuyenDayDuTinNguyen from './bai-7-ii-3-khuyen-day-du-tin-nguyen'

const moduleData: Module = {
  id: 'module-an-quang-dai-su-gia-ngon-luc-phan-1',
  slug: 'phan-1',
  title: 'Phần 1',
  order: 2,
  lessons: [
    bai3ITinhDoThuThang,
    bai4IiKhuyenTinHanhNguyen,
    bai5Ii1GiangVeLongTinChanThanhTamNguyenThaThiet,
    bai6Ii2KhuyenTruNghiSanhTin,
    bai7Ii3KhuyenDayDuTinNguyen,
  ],
}

export default moduleData

