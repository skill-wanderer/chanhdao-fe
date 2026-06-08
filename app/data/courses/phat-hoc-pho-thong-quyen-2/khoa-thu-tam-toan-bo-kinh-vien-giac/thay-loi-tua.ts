import type { Lesson } from '~/types/course'

const content = `
<section class="space-y-6">
  <header class="text-center space-y-3">
    <p class="text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông</p>
    <div>
      <p class="text-lg font-semibold">Khóa VIII</p>
      <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Kinh Viên Giác</h2>
      <p class="text-sm text-text-muted">Phiên Dịch Và Lược Giải</p>
    </div>
  </header>

  <section>
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Thay Lời Tựa</h2>
    <p>Kinh Viên Giác là một bộ Kinh thuộc Đại thừa đốn giáo, chỉ có những người đủ căn tính Đại thừa, hay đã nhiều kiếp tu theo Viên Giác, thì mới lãnh thọ được. Nhưng may thay cho chúng ta, chư Bồ tát trong pháp hội, phát đại bi tâm thỉnh Phật nói pháp phương tiện và tiệm thứ, hầu mong cho tất cả chúng sanh đều có thể y theo Kinh này mà tu hành, tiến tới quả vị Phật.</p>
    <p>Chúng tôi một nhóm tín đồ, nhờ phước duyên đời trước, nên nay mới được thường lui tới Phật học đường Nam Việt, chùa Ấn Quang, Chợ Lớn và được nghe quý vị Giảng sư giảng dạy Phật pháp trong sáu bảy năm nay. Đi dần từ dễ đến khó, từ cạn đến sâu, càng theo học, chúng tôi càng thêm phấn khởi tinh thần, vì sung sướng nhận thấy một chân trời đạo lý rộng mở trước mắt. Nay đến Kinh Viên Giác, dưới sự giảng dạy rõ ràng và tận tâm của Hòa thượng Thích Thiện Hoa, Giáo sư Phật học đường Nam Việt và là Ủy viên Hoằng pháp của Tổng Hội Phật Giáo Việt Nam, chúng tôi càng nhận chân được giáo lý thâm huyền của chư Phật và thêm say sưa trên bước đường tu học.</p>
    <p>Để đáp lại trong muôn một công ơn Đức Bổn sư Thích Ca đã hiện thân thuyết pháp trong 49 năm, chỉ vẽ những phương pháp ra khỏi sanh tử luân hồi, và để khỏi phụ công phu giảng dạy của Thượng tọa Thích Thiện Hoa, cùng quý vị Giảng sư trong Phật học đường Nam Việt, chúng tôi vội vã tập trung các bài học về Kinh Viên Giác này, in thành bộ, hầu kính tặng quý vị Đạo hữu gần xa, với lòng mong ước rằng từ nay sự nghiên cứu tu học của quý vị sẽ dễ dàng và mỗi ngày tăng tiến.</p>
    <p>Thưa quý Đạo hữu, Đức Phật có dạy: “Thân người khó được, Phật pháp khó gặp.” Chúng ta từ vô thỉ đến nay, sống say chết ngủ trong trường giả danh huyễn mộng, luân hồi đã nhiều đời nhiều kiếp, chúng sanh cũng vẫn lại hoàn chúng sanh, thế chẳng là phụ cái Tâm thường còn không mất, cái Tánh giác bình đẳng chân như “Viên Giác” của chúng ta lắm sao? Chúng ta nhờ thiện nhơn đời trước nên mới được cái quả làm người đời nay, thì chúng ta quyết bồi bổ cái nhân lành kia cho thêm phần mỹ mãn, quyết đoạn trừ các phiền não, tự tin mình có tính Viên Giác và sống theo tánh ấy, đặng bước một bước dài trên con đường giải thoát.</p>
    <p>Kinh Viên Giác này là một ngọn đèn soi sáng hướng dẫn chúng ta trên đường giải thoát, cho nên chúng tôi thành tâm và trân trọng giới thiệu cùng các chư Đạo hữu.</p>
    <p>Cầu nguyện Tam bảo gia hộ cho những người đã đọc bộ Kinh Viên Giác này, đều được nhập Viên Giác.</p>
    <footer class="text-right space-y-1">
      <p>Chợ Lớn, ngày 17-11 Mậu Tuất (27-12-1958)</p>
      <p>Phật tử Minh Chánh</p>
      <p>(Bác sĩ Lê Văn Cầm)</p>
    </footer>
  </section>
</section>
`

const lesson: Lesson = {
  id: 'lesson-khoa-8-thay-loi-tua',
  slug: 'thay-loi-tua',
  title: 'Thay lời tựa',
  type: 'article',
  status: 'published',
  order: 1,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-08',
}

export default lesson
