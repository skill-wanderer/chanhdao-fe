import type { Module } from '~/types/course'

import baiThu1BonPhanCuaPhatTuTaiGia from './bai-thu-1-bon-phan-cua-phat-tu-tai-gia'
import baiThu2VuLanBon from './bai-thu-2-vu-lan-bon'
import baiThu3VoThuong from './bai-thu-3-vo-thuong'
import baiThu4ThieuDucVaTriTuc from './bai-thu-4-thieu-duc-va-tri-tuc'
import baiThu5NhanQua from './bai-thu-5-nhan-qua'
import baiThu6LuanHoi from './bai-thu-6-luan-hoi'
import baiThu7ThapThienNghiep from './bai-thu-7-thap-thien-nghiep'
import baiThu8TuNhiepPhap from './bai-thu-8-tu-nhiep-phap'
import baiThu9LucHoa from './bai-thu-9-luc-hoa'
import baiThu10TinhDo from './bai-thu-10-tinh-do'
import baiThu11LuocSuDucPhatADiDaVa48DaiNguyen from './bai-thu-11-luoc-su-duc-phat-a-di-da-va-48-dai-nguyen'

const moduleData: Module = {
  id: 'module-khoa-thu-hai-thien-thua-phat-giao',
  slug: 'khoa-thu-hai-thien-thua-phat-giao',
  title: 'Khóa Thứ Hai: Thiên thừa Phật giáo',
  order: 2,
  lessons: [
    baiThu1BonPhanCuaPhatTuTaiGia,
    baiThu2VuLanBon,
    baiThu3VoThuong,
    baiThu4ThieuDucVaTriTuc,
    baiThu5NhanQua,
    baiThu6LuanHoi,
    baiThu7ThapThienNghiep,
    baiThu8TuNhiepPhap,
    baiThu9LucHoa,
    baiThu10TinhDo,
    baiThu11LuocSuDucPhatADiDaVa48DaiNguyen
  ],
}

export default moduleData
