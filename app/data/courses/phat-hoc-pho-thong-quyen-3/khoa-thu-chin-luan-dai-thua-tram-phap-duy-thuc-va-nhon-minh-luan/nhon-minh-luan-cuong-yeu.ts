import type { Lesson } from '~/types/course'

const content = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>
  <h2 class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">NHƠN MINH LUẬN CƯƠNG YẾU</h2>

  <h3 class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">NHƠN MINH LUẬN TỪ ĐÂU MÀ CÓ?</h3>
  <p>Trước thời Phật Thích Ca giáng sanh (chưa rõ xác thật là bao nhiêu năm), ở Ấn độ có nhiều phái ngoại đạo, tranh chấp nhau bằng lý thuyết. Ông Túc Mục Tiên nhơn là một trong các vị Tổ của các phái, lập ra pháp luận lý này, để bác các đạo. Phương pháp này được tín dụng và đắc lực trong thời kỳ ấy.</p>
  <p>Đến khi Phật ra đời, thấy Nhơn minh là một môn luận lý có qui tắc, vừa đúng lý và vừa hợp thời, được công chúng thừa nhận, nên Phật cũng dùng lối lý luận này để bác các ngoại đạo tà giáo đem về chánh lý.</p>
  <p>Sau khi Phật nhập diệt, độ khoảng 600 năm, có Ngài Mã Minh và Long thọ, hai vị Bồ Tát ra đời ở Ấn độ, sưu tập lại, phân làm năm phần: Tôn, Nhơn, Dụ, Hiệp, Kết.</p>
  <p>Về sau Ngài Trần Na Bồ Tát, cải cách lại, thành lập Nhơn minh luận có 3 phần: Tôn, Nhơn, Dụ và viết ra bộ "Nhơn minh nhập chánh lý luận". Từ ngài Trần Na về trước, người ta gọi là: "Cổ Nhơn minh"; từ Ngài Trần Na về sau là: "Tân Nhơn minh".</p>
  <p>Đến đời Đường, Ngài Huyền Trang Pháp sư (người Trung hoa) sang Ấn Độ học Phật pháp, rất tinh thông về môn học này. Ngài đã nhiều lần lên luận đàm, dùng lối lý luận Nhơn minh này mà biện luận, làm cho cả Ấn độ 18 nước đều kính phục.</p>
  <p>Sau khi trở về nước, Ngài dịch lại và truyền bá trong nước Trung hoa.</p>
  <p>Vì sự đòi hỏi của tín đồ, nên tôi (Sa môn Thích Thiện Hoa) phỏng dịch và chú giải bằng chữ Việt.</p>

  <h3 class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">SAO GỌI LÀ "NHƠN MINH NHẬP CHÁNH LÝ LUẬN?"</h3>
  <p>Nhơn minh luận là một luận lý tối cổ ở Á đông, vừa đúng lý, vững chắc và vừa có quy tắc. Điều cốt yếu là phải rành rõ "nguyên nhân" hay "lý do vì sao", thì lối luận lý mới chơn chánh và đúng đắn, nên gọi là "Nhơn minh nhập chánh lý luận".</p>
  <p>Vì nhờ "Nhơn" mới rõ được Tôn, nhờ "Nhơn" mới lập được Dụ. Bởi "Nhơn" rất trọng yếu như vậy, nên gọi là "Nhơn minh", mà không gọi là "Tôn minh" hay "Dụ minh". Nhơn minh là một trong ngũ minh.</p>

  <h3 class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">NỘI DUNG CỦA NHƠN MINH</h3>
  <p>Nội dung của Nhơn minh luận chia làm 3 phần: Tôn, Nhơn, Dụ. Theo Cổ Nhơn minh có thêm 2 phần: Hiệp và Kết là 5 phần:</p>

  <h4 class="text-lg font-semibold">Cổ Nhơn minh</h4>
  <ol class="list-decimal space-y-2 pl-6">
    <li><strong>Tôn:</strong> Nhơn loại đều phải chết.</li>
    <li><strong>Nhơn:</strong> Vì có sanh vậy.</li>
    <li><strong>Dụ:</strong> Như loài vật.</li>
    <li><strong>Hiệp:</strong> Phàm có sanh phải có chết.</li>
    <li><strong>Kết:</strong> Loài vật có sanh, nên loài vật phải có chết; nhơn loại có sanh, nên nhơn loại phải có chết.</li>
  </ol>

  <h4 class="text-lg font-semibold">Tân Nhơn minh</h4>
  <ol class="list-decimal space-y-2 pl-6">
    <li><strong>Tôn:</strong> Nhơn loại đều phải chết.</li>
    <li><strong>Nhơn:</strong> Vì có sanh vậy.</li>
    <li><strong>Dụ:</strong> Phàm có sanh phải có chết, như loài vật.</li>
  </ol>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-9-nhon-minh-luan-cuong-yeu',
  slug: 'nhon-minh-luan-cuong-yeu',
  title: 'Nhơn Minh Luận cương yếu',
  type: 'article',
  status: 'published',
  order: 28,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-15',
}

export default lesson
