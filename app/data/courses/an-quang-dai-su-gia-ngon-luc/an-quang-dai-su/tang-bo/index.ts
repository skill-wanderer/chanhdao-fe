import type { Module } from '~/types/course'

import bai54TangBo1ThuGoiSaiDaNgu from './bai-54-tang-bo-1-thu-goi-sai-da-ngu'
import bai55TangBo2ThuPhucDapDuHueUcTranHueSuong from './bai-55-tang-bo-2-thu-phuc-dap-du-hue-uc-tran-hue-suong'
import bai56TangBo3ThuPhucDapCuSiNguTang from './bai-56-tang-bo-3-thu-phuc-dap-cu-si-ngu-tang'
import bai57TangBo4ThuPhucDapCuSiThieuHueVien from './bai-57-tang-bo-4-thu-phuc-dap-cu-si-thieu-hue-vien'
import bai58TangBo5ThuGoiCuSiVuongTamThien from './bai-58-tang-bo-5-thu-goi-cu-si-vuong-tam-thien'

const moduleData: Module = {
  id: 'module-an-quang-dai-su-gia-ngon-luc-tang-bo',
  slug: 'tang-bo',
  title: 'Phần Tăng Bổ',
  order: 8,
  lessons: [
    bai54TangBo1ThuGoiSaiDaNgu,
    bai55TangBo2ThuPhucDapDuHueUcTranHueSuong,
    bai56TangBo3ThuPhucDapCuSiNguTang,
    bai57TangBo4ThuPhucDapCuSiThieuHueVien,
    bai58TangBo5ThuGoiCuSiVuongTamThien,
  ],
}

export default moduleData

