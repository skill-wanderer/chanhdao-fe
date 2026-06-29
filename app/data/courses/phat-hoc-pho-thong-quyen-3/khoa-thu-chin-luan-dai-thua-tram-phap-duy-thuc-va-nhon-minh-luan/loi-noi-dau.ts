import type { Lesson } from '~/types/course'

const content = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Duy thức học và Nhân minh luận</p>
  <h2 class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">LỜI NÓI ĐẦU</h2>
  <p>Giáo lý của Phật có đến tám vạn bốn ngàn (84.000) pháp môn, chia ra làm mười tôn, chung quy chỉ có hai loại: Pháp tánh và Pháp tướng. Duy thức tôn thuộc về Pháp tướng. Nghiên cứu, phân tích, tìm hiểu Duy thức tôn gọi là Duy thức học. Môn học này là một môn triết học rất cao siêu và rộng rãi, nên từ xưa đến nay không biết bao nhiêu học giả đã phải bóp trán nặn đầu vì nó.</p>
  <p>Cái khó khăn trong việc nghiên cứu Duy thức có nhiều nguyên nhân:</p>
  <ol class="list-decimal pl-6">
    <li>Rất nhiều danh từ chuyên môn mới lạ mà học giả chưa quen nghe;</li>
    <li>Phân tích các hành tướng về tâm lý cũng như vật chất rất nhiều, và quá tỉ mỉ, làm cho học giả khó nhớ;</li>
    <li>Sách vở Duy thức quá nhiều, học giả không biết nên xem quyển nào trước, quyển nào sau;</li>
    <li>Những sách ấy phần nhiều là sách chữ Hán, văn lại quá cổ nên người nay khó học;</li>
    <li>Phải có tu quán mới hiểu rõ được Duy thức.</li>
  </ol>
  <p>Vì những nguyên nhân trên, học giả phần đông đành bỏ lỡ một môn triết học thâm thúy, cao siêu là Duy thức học!</p>
  <p>Muốn nghiên cứu môn học này một cách có hiệu quả, cần phải có những phương pháp và người hướng dẫn.</p>
  <p>Chúng tôi còn nhớ, khi đang tòng học tại Phật học đường Lưỡng Xuyên (Vĩnh Bình), một hôm Sư cụ Tuyên Linh (Lê Khánh Hòa) Giám đốc Phật học đường Lưỡng Xuyên đưa cho chúng tôi quyển "Đại thừa bá pháp minh môn luận" mà dạy rằng:</p>
  <blockquote>
    <p>"Duy thức là một môn học khó vô cùng. Văn chương đã khó danh từ lại nhiều, và hành tướng Tâm Vương, Tâm sở cũng rất phiền phức. Tôi đã ba năm nghiên cứu bộ Thành duy thức luận, mà như người đi vào rừng rậm, không tìm được lối ra. Đến năm Đinh Mão nhờ ban tổ chức trường hương chùa Long Khánh ở Quy Nhơn mời tôi làm Pháp sư. Tôi được may mắn gặp Hòa thượng Thập Tháp. Tôi thuật lại sự khó khăn trong việc nghiên cứu Thành duy thức của tôi. Hòa thượng Thập Tháp nghe xong, đem biếu tôi quyển "Đại thừa bá pháp minh môn luận chuế ngôn" và nói: "Tôi biếu ngài một cái chìa khóa để mở kho Duy thức. Người nghiên cứu Duy thức mà trước không đọc Luận này, thì cũng như người gỡ nùi tơ rối mà không tìm được mối. Vậy Ngài nên đọc quyển Luận này cho kỹ rồi nghiên cứu Thành Duy thức. Ngài sẽ thấy dễ dàng ..."</p>
    <p>Quả thật như thế. Sau khi tôi trở về Nam, chuyên chú đọc quyển "Đại thừa bá pháp minh môn luận" trong ba tháng, tôi trở lại nghiên cứu Thành Duy thức, thấy không còn khó khăn như trước nữa. Bởi thế, quyển "Bá pháp" này đối với tôi quý báu vô cùng: Ngoài cái kỷ niệm vô giá của Hòa thượng Thập Tháp, nó còn là một cái chìa khóa cho tôi mở cửa vào Duy thức.</p>
    <p>"Hôm nay, tôi trao lại cho các ông quyển Luận này để các ông khởi công trong việc nghiên cứu Duy thức".</p>
  </blockquote>
  <p>Mặc dù Sư cụ Thập Tháp và Sư cụ Tuyên Linh đã về cõi Phật gần hai chục năm rồi, song những kỷ niệm cao quý của hai Sư cụ mà chúng tôi được vinh hạnh theo hầu trong mấy năm, vẫn còn ghi đậm nét trong tâm hồn chúng tôi, và những lời vàng ngọc trên vẫn còn văng vẳng bên tai chúng tôi.</p>
  <p>Ngày nay, để nhắc nhở công đức lớn lao của hai Sư cụ, những vị đã lập công đầu trong phong trào chấn hưng Phật giáo Việt Nam, và cũng để cho học giới nước nhà nghiên cứu được dễ dàng môn học Duy thức, chúng tôi đánh bạo, cố gắng phiên dịch và giải thích quyển "Đại thừa bá pháp minh môn luận" này và đổi danh đề là "Duy thức nhập môn" cho dễ hiểu. Quyển Duy thức nhập môn này, như danh đề của nó đã nêu lên, sẽ hướng dẫn quý vị độc giả đi đúng vào cửa của tòa nhà Duy thức. Quý độc giả hãy đọc và nhớ kỹ quyển sách này, rồi tiếp tục đọc những quyển Duy thức học tập I, II, III, v.v... thì quý vị sẽ thấy mình đang bước dần một cách dễ dàng và thú vị lên tòa lâu đài rực rỡ và đồ sộ của Duy thức.</p>
  <p>Mong quý vị sẽ chóng đạt được mục đích.</p>
  <footer class="text-right space-y-1">
    <p>Biên tại Phật học đường Nam Việt</p>
    <p>Mạnh Đông năm Mậu Tuất (1958)</p>
    <p>THÍCH THIỆN HOA</p>
  </footer>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-9-loi-noi-dau',
  slug: 'loi-noi-dau',
  title: 'Lời Nói Đầu',
  type: 'article',
  status: 'draft',
  order: 1,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-29',
}

export default lesson
