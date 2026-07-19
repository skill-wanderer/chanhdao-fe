import type { Lesson } from '~/types/course'

const content = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 10 và 11: Luận Đại thừa khởi tín</p>
  <h2 class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">THÔNG BẠCH</h2>
  <p>Các loại sách của tôi phiên dịch hoặc sáng tác đều không giữ bản quyền. Song quý vị nào muốn ấn tống, xin theo bản sửa chữa cuối cùng của tôi. Nếu vị nào muốn sửa đổi nội dung hay hình thức hoặc in để phát hành (bán) đều phải được sự chấp thuận của tôi.</p>
  <footer class="text-right space-y-1">
    <p>Sa-môn THÍCH THIỆN HOA</p>
    <p>Giảng lần thứ nhất tại Phật học đường Nam Việt</p>
    <p>Ngày 12 tháng 9 năm Tân Sửu (11-10-1961)</p>
  </footer>
  <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">LỜI DỊCH GIẢ</h2>
  <p>Chúng tôi tưởng không cần phải giới thiệu dài dòng, chắc quý độc giả cũng đã biết rằng bộ Luận "Đại Thừa Khởi Tín" là một trong số những bộ Luận có một nội dung hàm súc, sâu sắc nhất và một lối lý luận rốt ráo bén nhọn và tế nhị nhất. Vì lẽ đó nên chúng tôi đã khổ công rất nhiều đoạn chưa được vừa ý, nên chúng tôi đã bỏ tất cả, và dịch lại lần thứ hai. Tính tất cả hai lần dịch thuật, thời gian trên một năm (từ tháng 11 năm Canh Tý đến tháng 12 năm Tân Sửu, tức là từ năm 1960 đến 1962).</p>
  <p>Bộ Luận này do Bồ Tát Mã Minh soạn ra bằng chữ Phạn, những nhà dịch giả danh tiếng đã dịch sang chữ Hán. Chúng tôi căn cứ vào bản dịch bằng Hán văn của ngài Chân Đế Tam Tạng Pháp sư, để dịch sang chữ Việt. Về phần chú giải, thì sau khi tham khảo nhiều bản khác nhau của các dịch giả Trung Hoa, chúng tôi đã căn cứ một phần lớn vào bản trực giải của ngài Đức Thanh, mà chúng tôi nhận thấy rõ ràng và gọn gàng hơn hết.</p>
  <p>Tuy thế, trong khi phiên dịch sang Việt ngữ, để cho lý luận được biểu lộ rõ ràng, gãy gọn và mạch văn thích hợp với cú pháp Việt Nam, nên có nhiều đoạn chúng tôi chỉ dịch cho rõ ý, hoặc đảo ngược trước sau, hoặc thêm bớt một vài chữ. Mong quý độc giả thông cảm mà lượng thứ cho.</p>
  <p>Nói riêng về chương trình Phật học Phổ thông mà Ban Hoằng Pháp Phật Giáo Nam Việt đã chủ trương từ trước đến nay, thì bộ Luận này thuộc về khóa thứ IX; nhưng ngay sau khi phiên dịch và giảng dạy, chúng tôi nhận thấy, vì ý nghĩa thâm sâu của nó nên sắp vào khóa thứ X và XI, thì mới đúng với trình độ, lợi ích cho độc giả và những vị theo học các lớp Phật học Phổ thông.</p>
  <p>Thưa quý vị độc giả,</p>
  <p>"Lời của dịch giả", đến đây có thể xem như đã chấm dứt. Nhưng chúng tôi xin phép quý vị để nói thêm lên đây lòng nguyện ước thiết tha của chúng tôi trước khi dừng bút:</p>
  <p>Trong khi chúng tôi đang dịch bộ Luận này, thì Bổn sư chúng tôi là Hòa thượng Thích Khánh Anh, nguyên Thượng thủ Giáo hội Tăng già toàn quốc kiêm cố Pháp Chủ Giáo Hội Tăng Già Nam Việt viên tịch. Trong nỗi niềm đau xót lớn lao trước một cái tang chung và riêng ấy, chúng tôi rất ngậm ngùi và nhớ tưởng lại hồng ân của Bổn sư, người đã hướng dẫn và thúc đẩy chúng tôi trong công tác phiên dịch này.</p>
  <p>Vậy, hôm nay công việc dịch thuật đã xong xuôi, chúng tôi kính cẩn dâng công đức này hồi hướng lên Giác linh Bổn sư chúng tôi sớm đăng Phật địa, ngõ hầu báo đáp hồng ân pháp hóa trong muôn một.</p>
  <footer class="text-right space-y-1">
    <p>CHÙA PHƯỚC HẬU TRÀ ÔN</p>
    <p>Dịch xong ngày khởi công trùng tu chùa Phước Hậu</p>
    <p>(Ngày Phật thành đạo năm Tân Sửu, nhằm ngày 13-1-1962)</p>
    <p>Sa-môn THÍCH THIỆN HOA.</p>
  </footer>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-10-11-loi-dich-gia',
  slug: 'loi-dich-gia',
  title: 'Lời dịch giả',
  type: 'article',
  status: 'published',
  order: 1,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-19',
}

export default lesson
