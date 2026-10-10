import type { Module } from '~/types/course'

import bai1LoiCanBach from './bai-1-loi-can-bach'
import bai2NghiThucTriTung from './bai-2-nghi-thuc-tri-tung'
import bai3PhapHoiVaPhatNguyen from './bai-3-phap-hoi-va-phat-nguyen'
import bai4CoiNuocCucLac from './bai-4-coi-nuoc-cuc-lac'
import bai5VangSanhVaCongDuc from './bai-5-vang-sanh-va-cong-duc'
import bai6BoTatVaCongDucChanThat from './bai-6-bo-tat-va-cong-duc-chan-that'
import bai7KhuyenTuVaLoiIch from './bai-7-khuyen-tu-va-loi-ich'
import bai8CacChuongCuoiVaNgheKinh from './bai-8-cac-chuong-cuoi-va-nghe-kinh'
import bai9KinhTinhYeuVaNghiThucHoiHuong from './bai-9-kinh-tinh-yeu-va-nghi-thuc-hoi-huong'
import bai10ChuThich from './bai-10-chu-thich'

const moduleData: Module = {
  id: 'module-kinh-vo-luong-tho-thich-minh-canh',
  slug: 'thich-minh-canh',
  title: 'Tỳ-kheo Thích Minh Cảnh',
  order: 1,
  lessons: [
    bai1LoiCanBach,
    bai2NghiThucTriTung,
    bai3PhapHoiVaPhatNguyen,
    bai4CoiNuocCucLac,
    bai5VangSanhVaCongDuc,
    bai6BoTatVaCongDucChanThat,
    bai7KhuyenTuVaLoiIch,
    bai8CacChuongCuoiVaNgheKinh,
    bai9KinhTinhYeuVaNghiThucHoiHuong,
    bai10ChuThich,
  ],
}

export default moduleData
