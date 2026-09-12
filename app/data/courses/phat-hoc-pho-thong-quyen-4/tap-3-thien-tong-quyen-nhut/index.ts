import type { Module } from '~/types/course'

import thienTongQuyenNhut from './thien-tong-quyen-nhut'

const moduleData: Module = {
  id: 'module-bdtp-tap-3-thien-tong-quyen-nhut',
  slug: 'tap-3-thien-tong-quyen-nhut',
  title: 'Tập 3: Thiền Tông (Quyển nhứt)',
  order: 3,
  lessons: [
    thienTongQuyenNhut,
  ],
}

export default moduleData
