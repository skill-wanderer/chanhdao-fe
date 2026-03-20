import type { Module } from '~/types/course'

import kinhKimCang from './kinh-kim-cang'
import loiTua from './loi-tua'
import baiThu1DeMucKinh from './bai-thu-1-de-muc-kinh'
import tenTacGia from './ten-tac-gia'
import aPhanTu from './a-phan-tu'
import baiThu2BPhanChanhTon from './bai-thu-2-b-phan-chanh-ton'
import baiThu3PhanChanhTonTiepTheo from './bai-thu-3-phan-chanh-ton-tiep-theo'
import baiThu4PhanChanhTonTiepTheo from './bai-thu-4-phan-chanh-ton-tiep-theo'
import baiThu5PhanChanhTonTiepTheo from './bai-thu-5-phan-chanh-ton-tiep-theo'
import baiThu6PhanChanhTonTiepTheo from './bai-thu-6-phan-chanh-ton-tiep-theo'
import baiThu7PhanChanhTonTiepTheo from './bai-thu-7-phan-chanh-ton-tiep-theo'
import baiThu8PhanChanhTonTiepTheo from './bai-thu-8-phan-chanh-ton-tiep-theo'
import baiThu9PhanChanhTonTiepTheo from './bai-thu-9-phan-chanh-ton-tiep-theo'
import baiThu10PhanChanhTonTiepTheo from './bai-thu-10-phan-chanh-ton-tiep-theo'
import cPhanLuuThong from './c-phan-luu-thong'
import batNhaTamKinh from './bat-nha-tam-kinh'
import kinhDaiBatNhaToatYeu from './kinh-dai-bat-nha-toat-yeu'
import batNhaTamKinhVanBan from './bat-nha-tam-kinh-van-ban'
import phanDaiBatNhaToatYeu from './phan-dai-bat-nha-toat-yeu'
import phanDuyenKhoi from './phan-duyen-khoi'
import phanChanhTon from './phan-chanh-ton'
import phuLucMotSuNghiepCuaDoiToi from './phu-luc-mot-su-nghiep-cua-doi-toi'

const moduleData: Module = {
  id: 'module-khoa-thu-muoi-hai-kinh-kim-cang-va-tam-kinh',
  slug: 'khoa-thu-muoi-hai-kinh-kim-cang-va-tam-kinh',
  title: 'Khóa Thứ Mười Hai: Kinh Kim Cang và Tâm Kinh',
  order: 3,
  lessons: [
    kinhKimCang,
    loiTua,
    baiThu1DeMucKinh,
    tenTacGia,
    aPhanTu,
    baiThu2BPhanChanhTon,
    baiThu3PhanChanhTonTiepTheo,
    baiThu4PhanChanhTonTiepTheo,
    baiThu5PhanChanhTonTiepTheo,
    baiThu6PhanChanhTonTiepTheo,
    baiThu7PhanChanhTonTiepTheo,
    baiThu8PhanChanhTonTiepTheo,
    baiThu9PhanChanhTonTiepTheo,
    baiThu10PhanChanhTonTiepTheo,
    cPhanLuuThong,
    batNhaTamKinh,
    kinhDaiBatNhaToatYeu,
    batNhaTamKinhVanBan,
    phanDaiBatNhaToatYeu,
    phanDuyenKhoi,
    phanChanhTon,
    phuLucMotSuNghiepCuaDoiToi
  ],
}

export default moduleData
