import type { Module } from '~/types/course'

import bai1LoiTua from './bai-1-loi-tua'
import bai21GiaiThichTieuDeKinh from './bai-2-1-giai-thich-tieu-de-kinh'
import bai22DuyenKhoiVaDaiChungPhapHoi from './bai-2-2-duyen-khoi-va-dai-chung-phap-hoi'
import bai23CanhGioiCucLac from './bai-2-3-canh-gioi-cuc-lac'
import bai24DucPhatADiDa from './bai-2-4-duc-phat-a-di-da'
import bai25MuoiPhuongChuPhatTanThanVaHoNiem from './bai-2-5-muoi-phuong-chu-phat-tan-than-va-ho-niem'
import bai3KetKinh from './bai-3-ket-kinh'

const moduleData: Module = {
  id: 'module-luoc-giai-kinh-a-di-da-thich-minh-dien',
  slug: 'thich-minh-dien',
  title: 'Tỳ kheo Thích Minh Điền',
  order: 1,
  lessons: [
    bai1LoiTua,
    bai21GiaiThichTieuDeKinh,
    bai22DuyenKhoiVaDaiChungPhapHoi,
    bai23CanhGioiCucLac,
    bai24DucPhatADiDa,
    bai25MuoiPhuongChuPhatTanThanVaHoNiem,
    bai3KetKinh,
  ],
}

export default moduleData
