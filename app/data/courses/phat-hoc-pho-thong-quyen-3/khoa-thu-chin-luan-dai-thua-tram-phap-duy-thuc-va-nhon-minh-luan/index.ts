import type { Module } from '~/types/course'

import loiNoiDau from './loi-noi-dau'
import baiThu1LuanDaiThuaTramPhap from './bai-thu-1-luan-dai-thua-tram-phap'
import baiThu2LuanDaiThuaTramPhap from './bai-thu-2-luan-dai-thua-tram-phap'
import baiThu3TamVuong from './bai-thu-3-tam-vuong'
import baiThu4YThuc from './bai-thu-4-y-thuc'
import baiThu5MatNaThuc from './bai-thu-5-mat-na-thuc'
import baiThu6ALaiDaThuc from './bai-thu-6-a-lai-da-thuc'
import baiThu7TamSo from './bai-thu-7-tam-so'
import baiThu8TuyPhienNao from './bai-thu-8-tuy-phien-nao'
import baiThu9BatDinhTamSo from './bai-thu-9-bat-dinh-tam-so'
import baiThu10SacPhap from './bai-thu-10-sac-phap'
import baiThu10bTamBatTuongUngHanhPhap from './bai-thu-10b-tam-bat-tuong-ung-hanh-phap'
import baiThu10cVoViPhap from './bai-thu-10c-vo-vi-phap'
import tapNhiLuanADaNaThuc from './tap-nhi-luan-a-da-na-thuc'
import tapBaDuyThucTamThapTung from './tap-ba-duy-thuc-tam-thap-tung'
import loiCuaDichGia from './loi-cua-dich-gia'
import loiTua from './loi-tua'
import baiThu1DuyThucTamThapTung from './bai-thu-1-duy-thuc-tam-thap-tung'
import baiThu2DuyThucTamThapTung from './bai-thu-2-duy-thuc-tam-thap-tung'
import baiThu3DuyThucTamThapTung from './bai-thu-3-duy-thuc-tam-thap-tung'
import baiThu4DuyThucTamThapTung from './bai-thu-4-duy-thuc-tam-thap-tung'
import baiThu5DuyThucTamThapTung from './bai-thu-5-duy-thuc-tam-thap-tung'
import baiThu6GiaiThichCacDieuNghi from './bai-thu-6-giai-thich-cac-dieu-nghi'
import baiThu7DuyThucTamThapTung from './bai-thu-7-duy-thuc-tam-thap-tung'
import duyThucTamThapTungChanhVan from './duy-thuc-tam-thap-tung-chanh-van'
import nhonMinhLuan from './nhon-minh-luan'
import nhonMinhLuanCuongYeu from './nhon-minh-luan-cuong-yeu'
import aTon from './a-ton'
import bNhon from './b-nhon'
import cDu from './c-du'

const moduleData: Module = {
  id: 'module-khoa-thu-chin-luan-dai-thua-tram-phap-duy-thuc-va-nhon-minh-luan',
  slug: 'khoa-thu-chin-luan-dai-thua-tram-phap-duy-thuc-va-nhon-minh-luan',
  title: 'Khóa Thứ Chín: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận',
  order: 1,
  lessons: [
    loiNoiDau,
    baiThu1LuanDaiThuaTramPhap,
    baiThu2LuanDaiThuaTramPhap,
    baiThu3TamVuong,
    baiThu4YThuc,
    baiThu5MatNaThuc,
    baiThu6ALaiDaThuc,
    baiThu7TamSo,
    baiThu8TuyPhienNao,
    baiThu9BatDinhTamSo,
    baiThu10SacPhap,
    baiThu10bTamBatTuongUngHanhPhap,
    baiThu10cVoViPhap,
    tapNhiLuanADaNaThuc,
    tapBaDuyThucTamThapTung,
    loiCuaDichGia,
    loiTua,
    baiThu1DuyThucTamThapTung,
    baiThu2DuyThucTamThapTung,
    baiThu3DuyThucTamThapTung,
    baiThu4DuyThucTamThapTung,
    baiThu5DuyThucTamThapTung,
    baiThu6GiaiThichCacDieuNghi,
    baiThu7DuyThucTamThapTung,
    duyThucTamThapTungChanhVan,
    nhonMinhLuan,
    nhonMinhLuanCuongYeu,
    aTon,
    bNhon,
    cDu
  ],
}

export default moduleData
