import type { Module } from '~/types/course'

import matTong from './mat-tong'
import nghiThucTriNguBoChu from './nghi-thuc-tri-ngu-bo-chu'
import thienThaiTong from './thien-thai-tong'
import phuBaPhuongPhapTungKinh from './phu-ba-phuong-phap-tung-kinh'

const moduleData: Module = {
  id: 'module-bdtp-tap-6-mat-tong-va-thien-thai-tong',
  slug: 'tap-6-mat-tong-va-thien-thai-tong',
  title: 'Tập 6: Mật Tông và Thiên Thai Tông',
  order: 6,
  lessons: [
    matTong,
    nghiThucTriNguBoChu,
    thienThaiTong,
    phuBaPhuongPhapTungKinh,
  ],
}

export default moduleData
