import type { Module } from '~/types/course'

import cauXaTong from './cau-xa-tong'
import thanhThatTong from './thanh-that-tong'

const moduleData: Module = {
  id: 'module-bdtp-tap-8-cau-xa-tong-va-thanh-that-tong',
  slug: 'tap-8-cau-xa-tong-va-thanh-that-tong',
  title: 'Tập 8: Câu Xá Tông và Thành Thật Tông',
  order: 8,
  lessons: [
    cauXaTong,
    thanhThatTong,
  ],
}

export default moduleData
