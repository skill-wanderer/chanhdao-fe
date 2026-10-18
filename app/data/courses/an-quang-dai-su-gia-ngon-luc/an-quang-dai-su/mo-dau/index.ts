import type { Module } from '~/types/course'

import bai1LoiTua from './bai-1-loi-tua'
import bai2DuyenKhoiTaiBan from './bai-2-duyen-khoi-tai-ban'

const moduleData: Module = {
  id: 'module-an-quang-dai-su-gia-ngon-luc-mo-dau',
  slug: 'mo-dau',
  title: 'Mở đầu',
  order: 1,
  lessons: [
    bai1LoiTua,
    bai2DuyenKhoiTaiBan,
  ],
}

export default moduleData

