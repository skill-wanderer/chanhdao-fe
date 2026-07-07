import type { Lesson } from '~/types/course'

const content = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại thừa trăm pháp, Duy thức và Nhơn minh luận</p>
  <h2 class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">LỜI CỦA DỊCH GIẢ</h2>
  <p>Phật ra đời độ sanh gần nửa thế kỷ, thuyết pháp trên 300 hội, nói ra 84.000 pháp môn, nào quyền, thiệt, đốn, tiệm, các phương tiện đều dạy bày; chung quy lại chỉ có hai phần: pháp tướng và pháp tánh. Duy thức tôn là một trong Pháp tướng tôn.</p>
  <p>Lý Duy thức, trong các kinh điển, Phật đã nói nhiều. Về sau các vị Bồ Tát trích lục lại, sắp xếp theo hệ thống, có thứ lớp, biên thành sách, lập thành tôn, gọi là Pháp tướng tôn hay Duy thức tôn.</p>
  <p>Như vào khoảng 900 năm, sau khi Phật diệt độ, có Ngài Bồ Tát Thiên Thân, y theo các Kinh, viết qua quyển "Duy thức tam thập tụng" v.v... Đến sau có 10 vị Đại luận sư (1) ra đời, tuần tự giải thích quyển "Duy thức tam thập tụng" lập thành mười bộ đại luận. Trong số ấy, bộ sớ giải của Ngài Hộ Pháp là có phần hoàn bị hơn hết.</p>
  <p>Đến đời Đường, ở Trung Hoa có Ngài Tam Tạng Pháp sư Huyền Trang, trí tuệ vô song, thông minh xuất chúng, phát tâm qua Ấn Độ, nghiên cứu Phật pháp 18 năm trường (xem bộ Huyền Trang của Võ Đình Cường), Ngài rất thông về Duy thức tôn. Sau khi trở về nước, Ngài phiên dịch rất nhiều kinh sách, mà quyển "Duy thức tam thập tụng" của Bồ tát Thiên Thân là một. Ngài lại còn lượm lặt những tinh hoa sớ giải trong 10 bộ luận của 10 vị Đại luận sư, rồi phiên dịch ra chữ Trung Hoa, làm thành một bộ 10 quyển, mệnh danh là "Thành Duy thức luận".</p>
  <p>Đệ tử lớn của Ngài Huyền Trang là Khuy Cơ, trải qua thời gian mấy mươi năm hầu Thầy, được đắc truyền về môn Duy thức học này, nên sớ giải lại bộ "Thành Duy thức luận" đến 60 quyển, đặt tên là "Thành Duy thức luận thuật ký".</p>
  <p>Đến sau, Ngài Huyền Trang muốn cho người học dễ nhớ, nên làm 12 bài tụng (mỗi bài bốn câu) tóm tắt nghĩa lý rộng rãi u huyền của Duy thức, đặt tên là "Bát thức quy củ tụng".</p>
  <p>Đành rằng sách vở Duy thức rất nhiều, vì các vị Bồ Tát nhắm nhiều khía cạnh của Duy thức mà phân tích giảng giải, song có ba bổn, từ xưa đến nay được xem là chánh tông, là căn bản của Duy thức học:</p>
  <ul class="list-disc pl-6">
    <li><strong>Đại Thừa Bá Pháp Minh Môn Luận:</strong> Nói về pháp số (danh từ chuyên môn) của Duy thức.</li>
    <li><strong>Duy Thức Tam Thập Tụng:</strong> Nói về nghĩa chánh của Duy thức.</li>
    <li><strong>Bát Thức Quy Củ Tụng:</strong> Tóm tắt nghĩa lý bao la của Duy thức.</li>
  </ul>
  <p>Về sau các học giả hoặc sáng tác hoặc giải thích sách vở Duy thức, đều căn cứ vào ba bổn luận ấy, khai thác nhiều khía cạnh, rồi tán rộng ra hoặc làm cho nổi bật những điểm quan trọng.</p>
  <p>Bổn "Đại Thừa Bá Pháp Minh Môn Luận" và bổn "Bát Thức Quy Củ Tụng" Tôi đã dịch và giải rồi, hiệp chung lại dưới nhan đề là "Duy Thức Nhập Môn".</p>
  <p>Còn bổn "Duy Thức Tam Thập Tụng" này, nay mới dịch xong. Nội dung của luận này, do Ngài Bồ Tát Thiên Thân dùng 24 bài tụng đầu, nói về Duy thức tướng, bài tụng thứ 25 nói về Duy thức tánh, 5 bài tụng sau là nói về Duy thức vị; hay nói một cách khác là: Duy thức cảnh, Duy thức hành và Duy thức quả (xem 2 cái biểu ở cuối quyển này).</p>
  <p>Quý vị muốn nghiên cứu về Duy thức học, trước nhứt nên đọc kỹ 3 bổn luận này. Cũng như người học nghề võ, trước phải học đường thảo, rồi sau mới phân miếng.</p>
  <p>Huyền diệu thay! Cũng ba bổn luận này, mà từ xưa đến nay, không biết bao nhiêu vị Đại luận sư và các nhà học giả, sớ giải mãi cũng không cùng.</p>
  <p>Chúng ta chớ nên có ý nghĩ nông cạn: học sơ lược chánh văn hay đọc lời sớ giải thô sơ của ba bổn luận này, rồi cho là đầy đủ. Phải học mãi, coi nhiều, chúng ta sẽ thấy rừng hoa Duy thức, thật không biết bao nhiêu màu sắc tốt tươi xinh đẹp.</p>
  <p><sup>(1)</sup> Thắng Thân, Hòa Biện, Đức Huệ, An Huệ, Nan Đà, Tịnh Nguyệt, Thắng Hữu, Trần Na, Trí Nguyệt, Hộ Pháp</p>
  <footer class="text-right space-y-1">
    <p>Kính đề</p>
    <p>Sa môn THÍCH THIỆN HOA</p>
  </footer>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-9-loi-cua-dich-gia',
  slug: 'loi-cua-dich-gia',
  title: 'Lời của dịch giả',
  type: 'article',
  status: 'published',
  order: 17,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-07',
}

export default lesson
