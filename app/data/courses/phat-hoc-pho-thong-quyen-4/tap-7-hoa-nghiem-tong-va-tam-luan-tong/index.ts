import type { Module } from '~/types/course'

import hoaNghiemTong from './hoa-nghiem-tong'
import phuNghiThucTungHoaNghiemTuMauGiongToVietNam from './phu-nghi-thuc-tung-hoa-nghiem-tu-mau-giong-to-viet-nam'
import phuNghiThucTungHoaNghiemTuMauGiongQuangDong from './phu-nghi-thuc-tung-hoa-nghiem-tu-mau-giong-quang-dong'
import tamLuanTong from './tam-luan-tong'

const moduleData: Module = {
  id: 'module-bdtp-tap-7-hoa-nghiem-tong-va-tam-luan-tong',
  slug: 'tap-7-hoa-nghiem-tong-va-tam-luan-tong',
  title: 'Tập 7: Hoa Nghiêm Tông và Tam Luận Tông',
  order: 7,
  lessons: [
    hoaNghiemTong,
    phuNghiThucTungHoaNghiemTuMauGiongToVietNam,
    phuNghiThucTungHoaNghiemTuMauGiongQuangDong,
    tamLuanTong,
  ],
}

export default moduleData
