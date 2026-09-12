import type { Module } from '~/types/course'

import thienTongQuyenNhi from './thien-tong-quyen-nhi'

const moduleData: Module = {
  id: 'module-bdtp-tap-4-thien-tong-quyen-nhi',
  slug: 'tap-4-thien-tong-quyen-nhi',
  title: 'Tập 4: Thiền Tông (Quyển nhì)',
  order: 4,
  lessons: [
    thienTongQuyenNhi,
  ],
}

export default moduleData
