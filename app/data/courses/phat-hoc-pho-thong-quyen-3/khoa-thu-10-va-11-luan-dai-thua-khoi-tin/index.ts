import type { Module } from '~/types/course'

import loiDichGia from './loi-dich-gia'
import baiThu1PhanNhanDuyenPhanDinhDanhNghia from './bai-thu-1-phan-nhan-duyen-phan-dinh-danh-nghia'
import baiThu2PhanGiaiThich from './bai-thu-2-phan-giai-thich'
import baiThu3PhanGiaiThichTiepTheo from './bai-thu-3-phan-giai-thich-tiep-theo'
import baiThu4PhanGiaiThichTiepTheo from './bai-thu-4-phan-giai-thich-tiep-theo'
import baiThu5PhanGiaiThichTiepTheo from './bai-thu-5-phan-giai-thich-tiep-theo'
import baiThu6PhanGiaiThichTiepTheo from './bai-thu-6-phan-giai-thich-tiep-theo'
import baiThu7PhanGiaiThichTiepTheo from './bai-thu-7-phan-giai-thich-tiep-theo'
import baiThu8PhanGiaiThichTiepTheo from './bai-thu-8-phan-giai-thich-tiep-theo'
import baiThu9PhanGiaiThichTiepTheo from './bai-thu-9-phan-giai-thich-tiep-theo'
import baiThu10PhanGiaiThichTiepTheo from './bai-thu-10-phan-giai-thich-tiep-theo'
import baiThu11PhanGiaiThichTiepTheo from './bai-thu-11-phan-giai-thich-tiep-theo'
import baiThu12PhanGiaiThichTiepTheo from './bai-thu-12-phan-giai-thich-tiep-theo'
import baiThu13PhanGiaiThichTiepTheo from './bai-thu-13-phan-giai-thich-tiep-theo'
import baiThu14PhanGiaiThichTiepTheo from './bai-thu-14-phan-giai-thich-tiep-theo'
import baiThu15PhanTinTamTuHanhTiepTheoVaHet from './bai-thu-15-phan-tin-tam-tu-hanh-tiep-theo-va-het'
import baiThu16PhanTinTamTuHanhLoiIchVaKhuyenTu from './bai-thu-16-phan-tin-tam-tu-hanh-loi-ich-va-khuyen-tu'

const moduleData: Module = {
  id: 'module-khoa-thu-10-va-11-luan-dai-thua-khoi-tin',
  slug: 'khoa-thu-10-va-11-luan-dai-thua-khoi-tin',
  title: 'Khóa Thứ 10 và 11: Luận Đại Thừa Khởi Tín',
  order: 2,
  lessons: [
    loiDichGia,
    baiThu1PhanNhanDuyenPhanDinhDanhNghia,
    baiThu2PhanGiaiThich,
    baiThu3PhanGiaiThichTiepTheo,
    baiThu4PhanGiaiThichTiepTheo,
    baiThu5PhanGiaiThichTiepTheo,
    baiThu6PhanGiaiThichTiepTheo,
    baiThu7PhanGiaiThichTiepTheo,
    baiThu8PhanGiaiThichTiepTheo,
    baiThu9PhanGiaiThichTiepTheo,
    baiThu10PhanGiaiThichTiepTheo,
    baiThu11PhanGiaiThichTiepTheo,
    baiThu12PhanGiaiThichTiepTheo,
    baiThu13PhanGiaiThichTiepTheo,
    baiThu14PhanGiaiThichTiepTheo,
    baiThu15PhanTinTamTuHanhTiepTheoVaHet,
    baiThu16PhanTinTamTuHanhLoiIchVaKhuyenTu
  ],
}

export default moduleData
