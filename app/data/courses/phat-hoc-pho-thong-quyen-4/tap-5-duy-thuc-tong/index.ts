import type { Module } from '~/types/course'

import duyThucTong from './duy-thuc-tong'

const moduleData: Module = {
  id: 'module-bdtp-tap-5-duy-thuc-tong',
  slug: 'tap-5-duy-thuc-tong',
  title: 'Tập 5: Duy Thức Tông',
  order: 5,
  lessons: [
    duyThucTong,
  ],
}

export default moduleData
