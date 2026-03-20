import type { Module } from '~/types/course'

import thayLoiTua from './thay-loi-tua'
import loiCuaDichGia from './loi-cua-dich-gia'
import kinhVienGiacPhienDichVaLuocGiai from './kinh-vien-giac-phien-dich-va-luoc-giai'
import baiThu1ChuongVanThu from './bai-thu-1-chuong-van-thu'
import baiThu2ChuongPhoHien from './bai-thu-2-chuong-pho-hien'
import baiThu3ChuongPhoNhan from './bai-thu-3-chuong-pho-nhan'
import baiThu4ChuongKimCangTang from './bai-thu-4-chuong-kim-cang-tang'
import baiThu5ChuongDiLacBoTat from './bai-thu-5-chuong-di-lac-bo-tat'
import baiThu6ChuongThanhTinhHue from './bai-thu-6-chuong-thanh-tinh-hue'
import baiThu7ChuongOaiDucTuTai from './bai-thu-7-chuong-oai-duc-tu-tai'
import baiThu8ChuongBienAm from './bai-thu-8-chuong-bien-am'
import baiThu9ChuongTinhChuNghiepChuong from './bai-thu-9-chuong-tinh-chu-nghiep-chuong'
import baiThu1011ChuongPhoGiacVaChuongVienGiac from './bai-thu-10-11-chuong-pho-giac-va-chuong-vien-giac'
import baiThu12ChuongHienThienThu from './bai-thu-12-chuong-hien-thien-thu'

const moduleData: Module = {
  id: 'module-khoa-thu-tam-toan-bo-kinh-vien-giac',
  slug: 'khoa-thu-tam-toan-bo-kinh-vien-giac',
  title: 'Khóa Thứ Tám: Toàn bộ Kinh Viên Giác',
  order: 3,
  lessons: [
    thayLoiTua,
    loiCuaDichGia,
    kinhVienGiacPhienDichVaLuocGiai,
    baiThu1ChuongVanThu,
    baiThu2ChuongPhoHien,
    baiThu3ChuongPhoNhan,
    baiThu4ChuongKimCangTang,
    baiThu5ChuongDiLacBoTat,
    baiThu6ChuongThanhTinhHue,
    baiThu7ChuongOaiDucTuTai,
    baiThu8ChuongBienAm,
    baiThu9ChuongTinhChuNghiepChuong,
    baiThu1011ChuongPhoGiacVaChuongVienGiac,
    baiThu12ChuongHienThienThu
  ],
}

export default moduleData
