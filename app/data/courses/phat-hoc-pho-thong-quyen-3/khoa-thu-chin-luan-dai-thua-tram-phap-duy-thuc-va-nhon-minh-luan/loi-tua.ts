import type { Lesson } from '~/types/course'

const content = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại thừa trăm pháp, Duy thức và Nhơn minh luận</p>
  <h2 class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">LỜI TỰA</h2>
  <p>Trong Duy thức nói "Thức A lại da", tức là nói về pháp chúng sanh, đáng lẽ phải dễ hiểu, tại sao lại rất khó hiểu?</p>
  <p>Tuy nói về pháp chúng sanh, song chúng sanh có vô lượng vô biên, nên lời nói cũng phải vô lượng vô biên; đây là điều khó thứ nhứt.</p>
  <p>Lại nữa, bên Thiền tông thì chỉ thẳng về "Tâm pháp" nên không cần văn tự ngữ ngôn; còn Duy thức tôn lại khai phương tiện, dùng văn tự, ngữ ngôn. Đã dùng văn tự biên chép và lời nói luận bàn, những sự lý vô lượng vô biên, cho nên lời nói phải nhiều, văn tự phải thâm; đây là điều khó thứ hai.</p>
  <p>Bởi hai điều khó trên, nên môn học Duy thức này ngày xưa bị bặt tăm, cho đến ngày nay người học Phật, phần nhiều cũng tránh chỗ khó mà tìm nơi dễ: nghe nói đến Duy thức thì thối lui. Đôi khi cũng có người cố gắng tìm học, song lại không gặp cửa để vào!</p>
  <p>Đại Viên này đã ôm ấp chí lợi tha từ lâu, nên đối với việc khó khăn này đã nhiều lần lưu ý.</p>
  <p>Nền tảng đầu tiên của Duy thức học là quyển "Đại Thừa Bá Pháp Minh Môn Luận" và quyển "Duy Thức Tam Thập Tụng".</p>
  <p>Song, if theo những bản chú giải về đời Đường thì rất khó khăn; người sơ học không dễ gì nhập được. Còn những bản Duy thức thuộc về đời Minh chú giải, lại sợ ngụy truyền.</p>
  <p class="text-sm italic text-text-muted">[Trang 107]</p>
  <p>Bởi thế nên tôi căn cứ theo bản chú giải xưa (đời Đường), rồi cải tạo văn thể những chỗ nghĩa lý thâm thúy khó hiểu, thì tôi làm cho rõ ràng dễ hiểu; còn những chỗ phiền phức, thì tôi thanh giản cho gọn gàng. Vì thế nên tôi đặt tên quyển sách này là "Duy thức dị giản" (Duy thức dễ gọn).</p>
  <p>Bởi "dễ", nên người đọc dễ hiểu và có thể đọc lâu, vì "gọn" nên người học dễ theo và có thể đọc nhiều.</p>
  <p>Nay tôi giảng 30 bài tụng Duy thức này là muốn cho người học dễ hiểu và dễ theo, dễ tiến đến việc đọc nhiều, đọc lâu về môn Duy thức học vậy.</p>
  <footer class="text-right">
    <p>ĐƯỜNG ĐẠI VIÊN</p>
  </footer>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-9-loi-tua',
  slug: 'loi-tua',
  title: 'Lời tựa',
  type: 'article',
  status: 'published',
  order: 18,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-07',
}

export default lesson
