import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section>
    <p>TRUNG TÂM DỊCH THUẬT HÁN NÔM HUỆ QUANG</p>
    <p>KINH ĐẠI THỪA VÔ LƯỢNG THỌ
TRANG NGHIÊM THANH TỊNH
BÌNH ĐẲNG GIÁC
Hội tập: Bồ-tát giới Hạ Liên Cư
Việt dịch: Tỳ-kheo Thích Minh Cảnh
(Tái bản có sửa chữa, bổ sung)
NHÀ XUẤT BẢN HỒNG ĐỨC</p>
    <h2>LỜI CẨN BẠCH</h2>
    <p>
Người tu theo Tịnh Độ tông y cứ vào ba kinh:
- Vô Lượng Thọ kinh
- Quán Vô Lượng Thọ kinh, hay Quán kinh
- A-di-đà kinh
Tùy theo pháp tu trì niệm hay quán tưởng mà y cứ vào mỗi kinh khác nhau. Nếu người tu theo pháp trì niệm thì y cứ vào hai kinh: Vô Lượng Thọ và A-di-đà, còn tu pháp quán tưởng thì không thể bỏ qua Quán kinh.
Kinh A-di-đà được gọi là Tiểu bổn và kinh Vô Lượng Thọ được gọi là Đại bổn. Danh từ Đại bổn, Tiểu bổn nói lên tính cách rộng hẹp như thế nào về ý nghĩa của nó.
Xưa nay, người tu theo pháp trì niệm chỉ y cứ vào lời dạy ở kinh A-di-đà mà ít biết đến kinh Vô Lượng Thọ, đó là do các nguyên nhân sau:
Kinh Đại bổn có đến năm bản dịch trải qua các đời: Hán, Ngô, Tào Ngụy, Đường, Tống. Có bản lược bớt, có bản rườm rà, văn nghĩa trúc trắc, vì thế không được lưu thông phổ biến.
Để bổ cứu những điều thiếu sót đó, cư sĩ Vương Nhật Hưu đời Tống đã gom bốn bản Hán, Ngô, Tào Ngụy, Tống làm một bản hội tập, lấy tên là Đại A-di-đà kinh.
Bản Đại A-di-đà kinh rất được hoan nghênh thời ấy, chính Liên Trì đại sư cũng rất ca ngợi, nhưng lại cho rằng có nhiều chỗ “Trước dẫn kinh văn, sau thêm ý riêng của mình, chưa thuận với phép phiên dịch”.
Đến thời cận đại, Hạ Liên Cư lão cư sĩ hội tập các bản dịch kinh Vô Lượng Thọ của thời Hán, Ngô, Tào Ngụy, Đường, Tống san định, bổ cứu, sắp xếp hợp lý những chỗ thiếu, chỗ thừa của các bản thành một bản hội tập này lấy tên là Phật Thuyết Đại Thừa Vô Lượng Thọ Trang Nghiêm Thanh Tịnh Bình Đẳng Giác kinh.
Hiện nay, phần lớn giới Phật tử Hoa kiều chuyên tu Tịnh Độ ở các nước đều lấy quyển kinh này làm khóa bổn trì tụng hàng ngày.
Nhận thấy ý nghĩa đầy đủ, lợi ích rộng lớn của kinh này đối với người chuyên tu pháp môn Tịnh Độ niệm Phật cầu vãng sanh, nên tôi không quản tài hèn trí cạn cố gắng phiên dịch ra Việt ngữ để giúp các hành giả tu Tịnh Độ đọc tụng.
Trí thức có hạn, không thể tránh khỏi các sai lầm khi chuyển dịch, xin quý vị thức giả thương tình chỉ bảo cho, dịch giả xin đa tạ.
Cẩn chí
Tỳ-kheo Thích Minh Cảnh</p>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-kinh-vo-luong-tho-bai-1-loi-can-bach',
  slug: 'bai-1-loi-can-bach',
  title: 'Lời cẩn bạch',
  type: 'article',
  status: 'published',
  order: 1,
  createdAt: '2026-10-10',
  updatedAt: '2026-10-10',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
    },
  ],
}

export default lesson
