import type { Module } from '~/types/course'

import loiTua from './loi-tua'
import chonDuongTu from './chon-duong-tu'

const moduleData: Module = {
  id: 'module-bdtp-tap-1-chon-duong-tu',
  slug: 'tap-1-chon-duong-tu',
  title: 'Tập 1: Chọn đường tu',
  order: 1,
  lessons: [
    loiTua,
    chonDuongTu,
  ],
}

export default moduleData
