import type { Module } from '~/types/course'

import baiThu1DaoPhat from './bai-thu-1-dao-phat'
import baiThu2LuocSuDucPhatThichCaTuGiangSinhDenThanhDao from './bai-thu-2-luoc-su-duc-phat-thich-ca-tu-giang-sinh-den-thanh-dao'
import baiThu3LuocSuDucPhatThichCaTuThanhDaoDenNietBan from './bai-thu-3-luoc-su-duc-phat-thich-ca-tu-thanh-dao-den-niet-ban'
import baiThu4QuyYTamBao from './bai-thu-4-quy-y-tam-bao'
import baiThu5NguGioi from './bai-thu-5-ngu-gioi'
import baiThu6SamHoi from './bai-thu-6-sam-hoi'
import baiThu7ThoPhatLayPhatCungPhat from './bai-thu-7-tho-phat-lay-phat-cung-phat'
import baiThu8TungKinhTriChuNiemPhat from './bai-thu-8-tung-kinh-tri-chu-niem-phat'
import baiThu9AnChay from './bai-thu-9-an-chay'
import baiThu10BatQuanTraiGioi from './bai-thu-10-bat-quan-trai-gioi'
import phuBaiSo10NghiThucThoBatQuanTraiGioi from './phu-bai-so-10-nghi-thuc-tho-bat-quan-trai-gioi'
import phuBaiSo10NghiThucThoTrai from './phu-bai-so-10-nghi-thuc-tho-trai'
import phuBaiSo10NghiThucXaBatQuanTraiGioi from './phu-bai-so-10-nghi-thuc-xa-bat-quan-trai-gioi'
import phuBaiSo10KyLuatTuBatQuanTraiGioiTrong24h from './phu-bai-so-10-ky-luat-tu-bat-quan-trai-gioi-trong-24h'

const moduleData: Module = {
  id: 'module-khoa-thu-nhat-nhon-thua-phat-giao',
  slug: 'khoa-thu-nhat-nhon-thua-phat-giao',
  title: 'Khóa Thứ Nhất: Nhơn thừa Phật giáo',
  order: 1,
  lessons: [
    baiThu1DaoPhat,
    baiThu2LuocSuDucPhatThichCaTuGiangSinhDenThanhDao,
    baiThu3LuocSuDucPhatThichCaTuThanhDaoDenNietBan,
    baiThu4QuyYTamBao,
    baiThu5NguGioi,
    baiThu6SamHoi,
    baiThu7ThoPhatLayPhatCungPhat,
    baiThu8TungKinhTriChuNiemPhat,
    baiThu9AnChay,
    baiThu10BatQuanTraiGioi,
    phuBaiSo10NghiThucThoBatQuanTraiGioi,
    phuBaiSo10NghiThucThoTrai,
    phuBaiSo10NghiThucXaBatQuanTraiGioi,
    phuBaiSo10KyLuatTuBatQuanTraiGioiTrong24h
  ],
}

export default moduleData
