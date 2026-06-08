import type { Lesson } from '~/types/course'

const content = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">LỜI CỦA DỊCH GIẢ</h2>
  <p>Đã gần ngót năm năm trường, mỗi buổi chiều chủ nhật dưới mái chùa Ấn Quang, mỗi khi lên giảng đường là tôi trông thấy rất nhiều Phật tử, từng cặm cụi đeo đuổi lớp học Phật pháp của Phật học đường Nam Việt. Chủ nhật nào cũng thế, các Phật tử ấy, với một nhịp độ đều đều, với nét mắt chăm chú, ngồi suốt gần ba tiếng đồng hồ, mà chẳng lộ dáng gì mỏi mệt.</p>
  <p>Cảnh tượng ấy làm cho tôi cảm động vô cùng! Cảm động nhất là trong những buổi giảng về Kinh Đại thừa, triết lý khô khan, cao siêu khó hiểu, mà các Phật tử vẫn tỏ vẻ thích thú hân hoan, chăm chú nghe không xao lãng. Tôi quên mệt, lòng hoan hỷ vô hạn! Buổi giảng trở thành vô cùng hứng thú cho tôi.</p>
  <p>Tôi thường mừng thầm: Đời mạt pháp, mà vẫn còn nhiều người rất hâm mộ học Kinh điển Đại thừa như thế này, thì còn quý báu nào hơn!</p>
  <p>Sau khi nghe giảng xong Kinh Lăng Nghiêm, các Phật tử lại yêu cầu giảng Kinh Viên Giác, tôi hoan hỷ nhận lời. Đời mạt pháp mà có rất nhiều người hâm mộ học đạo thì còn vui thú nào bằng!</p>
  <p>Trước khi giảng Kinh Viên Giác, tôi có xem qua các bản dịch Kinh này, thấy có nhiều đoạn tôi chưa được thỏa mãn. E rằng đối với người học có phần khó hiểu chăng? Nên tôi cố gắng dịch lại, hầu mong giúp cho người học dễ lãnh hội hơn. Sau những đoạn dịch, tôi lại còn phụ chú, tóm tắt lại ý nghĩa Kinh, nhấn mạnh những đoạn quan trọng trong chánh văn.</p>
  <p>Vì muốn xuôi theo văn Việt, tránh những đoạn lặp đi lặp lại của văn Hán, đơn giản hóa những đoạn văn phiền toái, tránh những danh từ mới lạ khó hiểu, nên tôi lược dịch và chọn dùng những danh từ phổ thông dễ hiểu.</p>
  <p>Mặc dù các danh từ ấy so với chánh văn không cân xứng lắm, nhưng tôi thiết nghĩ cũng không xa ý chính là bao nhiêu.</p>
  <p>Hiểu thế nào, tôi dịch ra như thế ấy. Tôi vẫn biết rằng: “Thánh ý cao siêu, phàm tâm nan trắc”, nhưng ngòi bút tôi không cho phép viết những gì khác hơn sự hiểu biết của tôi được.</p>
  <p>Dịch Kinh này tôi chỉ có một ước nguyện là: May ra trúng với Thánh ý đôi phần, người học hiểu biết được phần nào, thì tôi nguyện đem công đức này hồi hướng cho bốn trọng ân và pháp giới chúng sanh đều thành Phật đạo.</p>
  <footer class="text-right space-y-1">
    <p>Viết tại PHẬT HỌC ĐƯỜNG NAM VIỆT</p>
    <p>Mùa thu năm Đinh Dậu nhằm 12 tháng 10 năm 1957</p>
    <p>THÍCH THIỆN HOA</p>
  </footer>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-8-loi-cua-dich-gia',
  slug: 'loi-cua-dich-gia',
  title: 'Lời của dịch giả',
  type: 'article',
  status: 'published',
  order: 2,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-08',
}

export default lesson
