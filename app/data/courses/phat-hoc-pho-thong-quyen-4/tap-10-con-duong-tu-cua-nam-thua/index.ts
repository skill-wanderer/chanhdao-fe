import type { Module } from '~/types/course'

import conDuongTuCuaNamThua from './con-duong-tu-cua-nam-thua'
import phanTongKet from './phan-tong-ket'

const moduleData: Module = {
  id: 'module-bdtp-tap-10-con-duong-tu-cua-nam-thua',
  slug: 'tap-10-con-duong-tu-cua-nam-thua',
  title: 'Tập 10: Con đường tu của Năm Thừa',
  order: 10,
  lessons: [
    conDuongTuCuaNamThua,
    phanTongKet,
  ],
}

export default moduleData
