import type { Module } from '~/types/course'

import luatTong from './luat-tong'
import tinhDoTong from './tinh-do-tong'
import phuHaiPhuongPhapNiemPhat from './phu-hai-phuong-phap-niem-phat'

const moduleData: Module = {
  id: 'module-bdtp-tap-2-luat-tong-va-tinh-do-tong',
  slug: 'tap-2-luat-tong-va-tinh-do-tong',
  title: 'Tập 2: Luật Tông và Tịnh Độ Tông',
  order: 2,
  lessons: [
    luatTong,
    tinhDoTong,
    phuHaiPhuongPhapNiemPhat,
  ],
}

export default moduleData
