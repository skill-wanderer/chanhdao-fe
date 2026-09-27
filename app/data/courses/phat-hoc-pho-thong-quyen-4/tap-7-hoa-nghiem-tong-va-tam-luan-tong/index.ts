import type { Module } from '~/types/course'

import hoaNghiemTong from './hoa-nghiem-tong'
import tamLuanTong from './tam-luan-tong'

const moduleData: Module = {
  id: 'module-bdtp-tap-7-hoa-nghiem-tong-va-tam-luan-tong',
  slug: 'tap-7-hoa-nghiem-tong-va-tam-luan-tong',
  title: 'Tập 7: Hoa Nghiêm Tông và Tam Luận Tông',
  order: 7,
  lessons: [
    hoaNghiemTong,
    tamLuanTong
  ],
}

export default moduleData
