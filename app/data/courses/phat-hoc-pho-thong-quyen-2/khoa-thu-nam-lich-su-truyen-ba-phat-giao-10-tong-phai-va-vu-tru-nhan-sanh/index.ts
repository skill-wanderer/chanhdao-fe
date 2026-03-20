import type { Module } from '~/types/course'

import baiThu1LichSuPhatGiaoAnDo from './bai-thu-1-lich-su-phat-giao-an-do'
import baiThu2LichSuPhatGiaoTrungHoa from './bai-thu-2-lich-su-phat-giao-trung-hoa'
import baiThu3LichSuPhatGiaoVietNam from './bai-thu-3-lich-su-phat-giao-viet-nam'
import baiThu4LichSuPhatGiaoVietNamTiepTheo from './bai-thu-4-lich-su-phat-giao-viet-nam-tiep-theo'
import baiThu5PhongTraoChanHungPhatGiao from './bai-thu-5-phong-trao-chan-hung-phat-giao'
import baiThu6LuatTongTinhDoTongThienTong from './bai-thu-6-luat-tong-tinh-do-tong-thien-tong'
import baiThu7DuyThucTongMatTongThienThaiTong from './bai-thu-7-duy-thuc-tong-mat-tong-thien-thai-tong'
import baiThu8HoaNghiemTongTamLuanTongCauXaTongThanhThatTong from './bai-thu-8-hoa-nghiem-tong-tam-luan-tong-cau-xa-tong-thanh-that-tong'
import baiThu9VuTruQuanPhatGiao from './bai-thu-9-vu-tru-quan-phat-giao'
import baiThu10NhanSinhQuanPhatGiao from './bai-thu-10-nhan-sinh-quan-phat-giao'

const moduleData: Module = {
  id: 'module-khoa-thu-nam-lich-su-truyen-ba-phat-giao-10-tong-phai-va-vu-tru-nhan-sanh',
  slug: 'khoa-thu-nam-lich-su-truyen-ba-phat-giao-10-tong-phai-va-vu-tru-nhan-sanh',
  title: 'Khóa Thứ Năm: Lịch sử truyền bá Phật giáo, 10 Tông phái và vũ trụ nhân sanh',
  order: 1,
  lessons: [
    baiThu1LichSuPhatGiaoAnDo,
    baiThu2LichSuPhatGiaoTrungHoa,
    baiThu3LichSuPhatGiaoVietNam,
    baiThu4LichSuPhatGiaoVietNamTiepTheo,
    baiThu5PhongTraoChanHungPhatGiao,
    baiThu6LuatTongTinhDoTongThienTong,
    baiThu7DuyThucTongMatTongThienThaiTong,
    baiThu8HoaNghiemTongTamLuanTongCauXaTongThanhThatTong,
    baiThu9VuTruQuanPhatGiao,
    baiThu10NhanSinhQuanPhatGiao
  ],
}

export default moduleData
