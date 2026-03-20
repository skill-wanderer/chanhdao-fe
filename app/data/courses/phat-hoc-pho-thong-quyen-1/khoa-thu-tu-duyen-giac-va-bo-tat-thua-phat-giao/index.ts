import type { Module } from '~/types/course'

import loiChiDanTongQuat from './loi-chi-dan-tong-quat'
import baiThu1QuanSoTuc from './bai-thu-1-quan-so-tuc'
import baiThu2QuanBatTinh from './bai-thu-2-quan-bat-tinh'
import baiThu3QuanTuBi from './bai-thu-3-quan-tu-bi'
import baiThu4QuanNhanDuyen from './bai-thu-4-quan-nhan-duyen'
import baiThu5QuanGioiPhanBiet from './bai-thu-5-quan-gioi-phan-biet'
import baiThu6BoThiBaLaMat from './bai-thu-6-bo-thi-ba-la-mat'
import baiThu6bTriGioiBaLaMat from './bai-thu-6b-tri-gioi-ba-la-mat'
import baiThu7TinhTanBaLaMat from './bai-thu-7-tinh-tan-ba-la-mat'
import baiThu7bNhanNhucBaLaMat from './bai-thu-7b-nhan-nhuc-ba-la-mat'
import baiThu8ThienDinhBaLaMat from './bai-thu-8-thien-dinh-ba-la-mat'
import baiThu8bTriHueBaLaMat from './bai-thu-8b-tri-hue-ba-la-mat'
import baiThu9TuVoLuongTam from './bai-thu-9-tu-vo-luong-tam'
import baiThu10NguMinh from './bai-thu-10-ngu-minh'

const moduleData: Module = {
  id: 'module-khoa-thu-tu-duyen-giac-va-bo-tat-thua-phat-giao',
  slug: 'khoa-thu-tu-duyen-giac-va-bo-tat-thua-phat-giao',
  title: 'Khóa Thứ Tư: Duyên giác thừa và Bồ tát thừa Phật giáo',
  order: 4,
  lessons: [
    loiChiDanTongQuat,
    baiThu1QuanSoTuc,
    baiThu2QuanBatTinh,
    baiThu3QuanTuBi,
    baiThu4QuanNhanDuyen,
    baiThu5QuanGioiPhanBiet,
    baiThu6BoThiBaLaMat,
    baiThu6bTriGioiBaLaMat,
    baiThu7TinhTanBaLaMat,
    baiThu7bNhanNhucBaLaMat,
    baiThu8ThienDinhBaLaMat,
    baiThu8bTriHueBaLaMat,
    baiThu9TuVoLuongTam,
    baiThu10NguMinh
  ],
}

export default moduleData
