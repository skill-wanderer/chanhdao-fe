import type { Lesson } from '~/types/course'

const content = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>
  <pre class="whitespace-pre-wrap font-sans text-base leading-relaxed">
MỤC LỤC CHI TIẾT
LUẬN ĐẠI THỪA KHỞI TÍN
BÀI KỆ QUY KÍNH TAM BẢO
Chương thứ nhất: Phần Nhơn duyên
Chương thứ hai: Phần Định danh nghĩa
Chương thứ ba: Phần Giải thích
Chương thứ tư: Phần Tín tâm, Tu hành
Chương thứ năm: Phần Lợi ích và khuyến tu


BÀI KỆ HỒI HƯỚNG
Chương thứ nhất: PHẦN NHƠN DUYÊN
Vì tám nhơn duyên nên Bồ Tát tạo ra Luận này.


Chương thứ hai: PHẦN ĐỊNH DANH NGHĨA
A. Pháp Đại thừa
I. Tướng Chơn như
II. Tướng Sanh diệt
B. Nghĩa Đại thừa
I. Thể chất lớn
II. Hình tướng lớn
III. Diệu dụng lớn


Chương thứ ba: PHẦN GIẢI THÍCH (Chia làm ba)
A. Nói rõ nghĩa chánh (10 bài)
B. Đối trị các chấp sai lầm (1 bài)
C. Phân biệt hành tướng phát tâm đến Đạo (2 bài)
A. NÓI VỀ NGHĨA CHÁNH (Có 3 phần)
I. Tâm Chơn như (Chơn tâm)
II. Tâm Sanh diệt (Thức A-lại-da)
III. Trở về Chơn như
I. NÓI VỀ TÂM CHƠN NHƯ (Có 2 nghĩa):
Thật không (không có các pháp nhiễm ô)
Thật có (có các công đức thanh tịnh)
II. NÓI VỀ TÂM SANH DIỆT (THỨC A-LẠI-DA) (Có 2 nghĩa):
Nghĩa "Giác" (Chơn)
Nghĩa "Bất giác" (mê: vọng)
1. Nói về nghĩa "Giác" (Có 5 tên):
a. Bản giác (tánh Phật sẵn có)
b. Bất giác (mê: vô minh)
c. Thỉ giác (mới giác ngộ)
d. Phần giác (giác ngộ từng phần)
e. Cứu cánh giác (giác ngộ rốt ráo)
Thỉ giác có 4 lớp, từ Thô đến Tế:
Giác ngộ niệm "Diệt"
Giác ngộ niệm "Dị"
Giác ngộ niệm "Trụ"
Giác ngộ niệm "Sanh"
Bản giác có 2 tướng và 4 nghĩa:
Hai tướng:
Tướng Trí tịnh
Tướng nghiệp dụng bất tư nghị
Bốn nghĩa:
Như thật không
Nhơn huân tập
Pháp xuất ly
Duyên huân tập
2. Nói về nghĩa "Bất giác" (mê: vô minh) (Phân làm 11 phần):
a. Tam tế (ba tướng vi tế)
b. Lục thô (sáu món Thô)
c. Hai tướng (đồng và khác)
d. Ý tương tục (có năm thứ)
e. Ý thức
g. Tâm nhiễm ô (có 6 lớp)
h. Tâm nhiễm ô và vô minh khác nhau thế nào?
i. Ba tướng nhiễm ô sanh diệt
k. Bốn món huân tập
l. Chơn như và vô minh, thỉ và chung
m. Ba đại nghĩa của tâm
Nói về Tam tế:
Nghiệp tướng
Chuyển tướng
Hiện tướng
Nói về Lục thô:
Trí tướng
Tương tục tướng
Chấp thủ tướng
Kế danh tự tướng
Khởi nghiệp tướng
Nghiệp hệ khổ tướng
Nói về 2 tướng (Giác và Bất giác đều có hai tướng):
Đồng (đồng thể)
Khác (khác tướng)
Nói về "Ý tương tục" (Có 5 tên):
Nghiệp thức (nghiệp tướng)
Chuyển thức (chuyển tướng)
Hiện thức (hiện tướng)
Trí thức (Trí tướng)
Tương tục thức (tương tục tướng)
Nói về "Ý thức" (Có 3 tên):
Ý thức
Phân ly thức
Phân biệt sự thức
Nói về "Tâm nhiễm ô" (Có 6 lớp):
Nhiễm ô chấp trước (chấp thủ tướng và Kế danh tự tướng)
Nhiễm ô bất đoạn (Tương tục tướng)
Nhiễm ô phân biệt (Trí tướng)
Nhiễm ô cảnh sắc (Hiện tướng)
Nhiễm ô năng phân biệt (Kiến tướng)
Nhiễm ô về nghiệp (Nghiệp tướng)
Nói về Tâm nhiễm ô và Vô minh khác nhau:
Tâm nhiễm ô là phiền não chướng, làm chướng ngại căn bản trí.
Vô minh là sở tri chướng, làm chướng ngại sai biệt trí.
Nói về 3 tướng nhiễm ô sanh diệt:
Tướng sanh diệt thô
Tướng sanh diệt vừa
Tướng sanh diệt vi tế
Nói về 4 món huân tập:
Chơn như huân tập
Vô minh huân tập
Nghiệp thức huân tập
Cảnh giới hư vọng huân tập
Nói về cảnh giới hư vọng (sáu trần) huân tập:
Cảnh giới huân tập làm tăng trưởng vọng niệm.
Cảnh giới huân tập làm tăng trưởng chấp thủ.
Nói về vọng tâm (Nghiệp thức) huân tập:
Vọng tâm huân tập lại căn bản vô minh.
Vọng tâm huân tập chi mạt vô minh.
Nói về vô minh huân tập:
Căn bản vô minh huân tập vào chơn như.
Chi mạt vô minh huân tập vào vọng tâm.
Nói về chơn như huân tập:
Thể tướng chơn như huân tập.
Diệu dụng chơn như huân tập.
Lại chia hai phần nữa:
Chưa chứng nhập chơn như
Đã chứng nhập chơn như, được hai trí:
Căn bản trí (vô phân biệt trí)
Hậu đắc trí (sai biệt trí)
Nói về Chơn như và vô minh, thỉ và chung:
Chơn như vô thỉ vô chung.
Vô minh vô thỉ hữu chung.
Nói về ba đại nghĩa của tâm:
Thể rộng lớn của Tâm: Tâm bình đẳng không vọng.
Tướng rộng lớn của Tâm: Đủ hằng sa công đức.
Dụng rộng lớn của Tâm: Báo thân, Ứng thân và Y báo trang nghiêm.
(Đã hết nghĩa Bất giác)
III. TRỞ VỀ CHƠN NHƯ:
Không khởi vọng niệm thì trở về Chơn như.
(Hết phần thứ nhứt (Nói rõ nghĩa chánh) trong chương thứ ba (Phần Giải thích) của Luận này).
B. ĐỐI TRỊ CÁC CHẤP SAI LẦM
I. CHẤP NGÃ (CÓ 5 THỨ):
Chấp hư không là chơn tánh của Như Lai.
Chấp Chơn như hay Niết-bàn không có chi hết.
Chấp Như Lai tạng có các hình tướng sai khác.
Chấp Như Lai tạng có đủ các pháp nhiễm ô.
Chấp chúng sanh có thỉ, chư Phật có chung.
II. CHẤP PHÁP:
Chấp thật có vũ trụ và vạn hữu.
C. PHÂN BIỆT HÀNH TƯỚNG PHÁT TÂM ĐẾN ĐẠO (Ba món phát tâm):
I. Tin hoàn toàn mà phát tâm.
II. Hiểu biết và làm mà phát tâm.
III. Chứng nhập chơn như mà phát tâm.
I. NÓI VỀ TÍN HOÀN TOÀN MÀ PHÁT TÂM:
Ba món Tâm trong Tín vị:
a. Trực tâm
b. Thâm tâm
c. Đại bi tâm
Bốn món phương tiện:
a. Phương tiện căn bản
b. Phương tiện ngăn ngừa các việc tội ác
c. Phương tiện làm phát sanh các việc lành
d. Phương tiện Đại nguyện và Bình đẳng
Tám tướng thành Đạo:
a. Giáng sanh
b. Nhập thai
c. Ở trong thai
d. Sanh ra
đ. Xuất gia
e. Thành đạo
g. Thuyết pháp
h. Nhập Niết-bàn
II. NÓI VỀ HIỂU BIẾT VÀ LÀM MÀ PHÁT TÂM:
Bồ Tát biết tự tánh mình không có lục tệ:
Không tham lam
Không nhiễm ô
Không sân hận
Không giải đãi
Không tán loạn
Không si mê
Bồ Tát tu lục độ:
Bố thí
Trì giới
Nhẫn nhục
Tinh tấn
Thiền định
Trí huệ
III. NÓI VỀ CHỨNG NHẬP CHƠN NHƯ MÀ PHÁT TÂM:
Bồ Tát khi nhập chơn như, rồi khởi dụng độ sanh:
Chơn tâm tức là thật trí.
Phương tiện tâm tức là Quyền trí.
Nghiệp thức tâm tức là Dị thục thức.
(Hết phần Giải thích về chương thứ ba)


Chương thứ tư: TÍN TÂM TU HÀNH (Có 4 phần)
A. Bốn món Tín tâm
B. Năm môn tu hành
C. Các thứ ma chướng
D. Mười điều lợi ích tu Thiền
A. NÓI VỀ BỐN MÓN TÍN TÂM:
I. Tin căn bản (Phật tánh)
II. Tin Phật
III. Tin Pháp
IV. Tin Tăng
B. NÓI VỀ NĂM MÓN TU HÀNH (Lục độ):
Bố thí
Trì giới
Nhẫn nhục
Tinh tấn
Chỉ, Quán (Định, Huệ)
C. NÓI VỀ CÁC THỨ MA CHƯỚNG:
I. Ma hiện Phật, Bồ Tát v.v...
II. Ma nói Pháp
III. Ma làm hành giả hoặc điên
D. NÓI VỀ 10 ĐIỀU LỢI ÍCH TU THIỀN:
Được mười phương Phật, Bồ Tát bảo hộ v.v…


Chương thứ năm: PHẦN LỢI ÍCH VÀ KHUYẾN TU
Học và tu theo luận này sẽ được lợi ích vô cùng; hành giả nên tu theo luận Đại thừa này.
  </pre>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-muc-luc-chi-tiet',
  slug: 'muc-luc-chi-tiet',
  title: 'Mục lục chi tiết',
  type: 'article',
  status: 'published',
  order: 2,
  content,
  createdAt: '2026-07-19',
  updatedAt: '2026-07-19',
}

export default lesson
