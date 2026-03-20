import type { Module } from '~/types/course'

import thayLoiTua from './thay-loi-tua'
import baiThu1PhanDuyenKhoi from './bai-thu-1-phan-duyen-khoi'
import baiThu2BayDoanPhatHoiVeTam from './bai-thu-2-bay-doan-phat-hoi-ve-tam'
import baiThu3ANanCauPhatDayPhuongPhapTuHanhLanThuHai from './bai-thu-3-a-nan-cau-phat-day-phuong-phap-tu-hanh-lan-thu-hai'
import baiThu4ANanCauPhatChiCaiDienDao from './bai-thu-4-a-nan-cau-phat-chi-cai-dien-dao'
import baiThu5ANanNghiNeuCaiThayLaMinhThiTamNayLaAi from './bai-thu-5-a-nan-nghi-neu-cai-thay-la-minh-thi-tam-nay-la-ai'
import baiThu6ANanKhongHieuHoiPhat from './bai-thu-6-a-nan-khong-hieu-hoi-phat'
import baiThu7HuKhongTuChonTamBienHien from './bai-thu-7-hu-khong-tu-chon-tam-bien-hien'
import baiThu8OngPhuLauNaHoiPhatHaiCauQuanTrong from './bai-thu-8-ong-phu-lau-na-hoi-phat-hai-cau-quan-trong'
import baiThu9PhatDayChonTamPhiTatCaTuong from './bai-thu-9-phat-day-chon-tam-phi-tat-ca-tuong'
import baiThu10ANanThuatLaiChoMinhDaNgo from './bai-thu-10-a-nan-thuat-lai-cho-minh-da-ngo'
import baiThu11NgaiANanHoiPhatTroiCotOChoNaoVaLamSaoMoDuoc from './bai-thu-11-ngai-a-nan-hoi-phat-troi-cot-o-cho-nao-va-lam-sao-mo-duoc'
import baiThu12NgaiANanHoiPhatPhapTuVienThong from './bai-thu-12-ngai-a-nan-hoi-phat-phap-tu-vien-thong'
import baiThu13PhatBaoNgaiVanThuLuaPhapTuVienThong from './bai-thu-13-phat-bao-ngai-van-thu-lua-phap-tu-vien-thong'
import baiThu14PhatDayTriChuLangNghiem from './bai-thu-14-phat-day-tri-chu-lang-nghiem'
import baiThu15MuoiMonMaVeThoAmMuoiMonMaVeTuongAm from './bai-thu-15-muoi-mon-ma-ve-tho-am-muoi-mon-ma-ve-tuong-am'
import baiThu16MuoiMonMaVeHanhAmMuoiMonMaVeThucAm from './bai-thu-16-muoi-mon-ma-ve-hanh-am-muoi-mon-ma-ve-thuc-am'

const moduleData: Module = {
  id: 'module-khoa-thu-sau-bay-dai-cuong-kinh-lang-nghiem',
  slug: 'khoa-thu-sau-bay-dai-cuong-kinh-lang-nghiem',
  title: 'Khóa Thứ Sáu - Bảy: Đại cương Kinh Lăng Nghiêm',
  order: 2,
  lessons: [
    thayLoiTua,
    baiThu1PhanDuyenKhoi,
    baiThu2BayDoanPhatHoiVeTam,
    baiThu3ANanCauPhatDayPhuongPhapTuHanhLanThuHai,
    baiThu4ANanCauPhatChiCaiDienDao,
    baiThu5ANanNghiNeuCaiThayLaMinhThiTamNayLaAi,
    baiThu6ANanKhongHieuHoiPhat,
    baiThu7HuKhongTuChonTamBienHien,
    baiThu8OngPhuLauNaHoiPhatHaiCauQuanTrong,
    baiThu9PhatDayChonTamPhiTatCaTuong,
    baiThu10ANanThuatLaiChoMinhDaNgo,
    baiThu11NgaiANanHoiPhatTroiCotOChoNaoVaLamSaoMoDuoc,
    baiThu12NgaiANanHoiPhatPhapTuVienThong,
    baiThu13PhatBaoNgaiVanThuLuaPhapTuVienThong,
    baiThu14PhatDayTriChuLangNghiem,
    baiThu15MuoiMonMaVeThoAmMuoiMonMaVeTuongAm,
    baiThu16MuoiMonMaVeHanhAmMuoiMonMaVeThucAm
  ],
}

export default moduleData
