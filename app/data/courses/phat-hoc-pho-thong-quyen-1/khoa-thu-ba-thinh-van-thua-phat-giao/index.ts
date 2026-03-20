import type { Module } from '~/types/course'

import baiThu1KhaiNiemTongQuatVeTuDieuDe from './bai-thu-1-khai-niem-tong-quat-ve-tu-dieu-de'
import baiThu2KhoDe from './bai-thu-2-kho-de'
import baiThu3TapDe from './bai-thu-3-tap-de'
import baiThu4TapDeTiepTheo from './bai-thu-4-tap-de-tiep-theo'
import baiThu5DietDe from './bai-thu-5-diet-de'
import baiThu6DietDeTiepTheo from './bai-thu-6-diet-de-tiep-theo'
import baiThu7DaoDeTuNiemXu from './bai-thu-7-dao-de-tu-niem-xu'
import baiThu8DaoDeTuChanhCan from './bai-thu-8-dao-de-tu-chanh-can'
import baiThu8bDaoDeTuNhuYTuc from './bai-thu-8b-dao-de-tu-nhu-y-tuc'
import baiThu9DaoDeNguCanNguLuc from './bai-thu-9-dao-de-ngu-can-ngu-luc'
import baiThu9bDaoDeThatBoDePhan from './bai-thu-9b-dao-de-that-bo-de-phan'
import baiThu10DaoDeBatChanhDao from './bai-thu-10-dao-de-bat-chanh-dao'

const moduleData: Module = {
  id: 'module-khoa-thu-ba-thinh-van-thua-phat-giao',
  slug: 'khoa-thu-ba-thinh-van-thua-phat-giao',
  title: 'Khóa Thứ Ba: Thinh văn thừa Phật giáo',
  order: 3,
  lessons: [
    baiThu1KhaiNiemTongQuatVeTuDieuDe,
    baiThu2KhoDe,
    baiThu3TapDe,
    baiThu4TapDeTiepTheo,
    baiThu5DietDe,
    baiThu6DietDeTiepTheo,
    baiThu7DaoDeTuNiemXu,
    baiThu8DaoDeTuChanhCan,
    baiThu8bDaoDeTuNhuYTuc,
    baiThu9DaoDeNguCanNguLuc,
    baiThu9bDaoDeThatBoDePhan,
    baiThu10DaoDeBatChanhDao
  ],
}

export default moduleData
