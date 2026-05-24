import type { Lesson } from '~/types/course'

const content = `
<section class="space-y-6">
  <header class="text-center space-y-3">
    <p class="text-sm font-semibold uppercase tracking-wide text-text-muted">Phật Học Phổ Thông</p>
    <div>
      <p class="text-lg font-semibold">Khóa VI-VII</p>
      <p class="text-sm text-text-muted">*</p>
      <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Triết Lý Đạo Phật</h2>
      <p class="text-sm text-text-muted">hay là</p>
      <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Đại Cương Kinh Lăng Nghiêm</h2>
    </div>
    <p>Giảng lần đầu tiên tại Phật Học Đường Nam Việt ngày 7 tháng 11 năm 1954 (12.10. Giáp Ngọ)</p>
    <p><strong>Lưu ý:</strong> Người muốn tu Thiền, nên đọc kỹ đoạn NGŨ ẤM MA trong kinh này.</p>
  </header>

  <section>
    <h2 class="text-2xl font-bold text-primary-700 dark:text-primary-300">Thay Lời Tựa</h2>
    <p>Giữa cơn nắng hạn lại gặp mưa phùn, đang lúc ly loạn, lòng người đau khổ, lại được cam lồ pháp vị làm cho tâm hồn người bớt sự đau khổ, thì còn may mắn gì hơn!</p>
    <p>Chúng tôi là cư sĩ của Phật học đường Nam Việt tại chùa Ấn Quang, không biết có phúc duyên gì, mặc dầu sinh trong đời Mạt pháp, mà vẫn gặp Chánh pháp của Phật Đà. Trên ba năm nay, chúng tôi thường đến Phật học đường Nam Việt học hỏi về giáo lý với quý vị Pháp sư. Càng học thấy càng hay; như người ăn mía: càng nhai lại càng ngọt. Say sưa với đạo vị, mà quên bớt những sự đau khổ giữa lúc loạn ly.</p>
    <p>Càng học lại thấy giáo lý càng thâm cao. Quý hóa thay! Năm nay chúng tôi được ngài Thích Thiện Hoa, trưởng ban hoằng pháp Phật giáo Nam Việt, kiêm Đốc giáo Phật học đường Nam Việt ban cho một vật báu vô giá: giảng về đại cương kinh Lăng Nghiêm. Hay làm sao! Và thú vị làm sao! Chúng tôi không thể miêu tả ra hết được.</p>
    <p>Chúng tôi thường nghe nói: Kinh Lăng Nghiêm là một bộ kinh Đại Thừa, vừa quý giá nhất, mà cũng vừa cao siêu nhất. Trước đây thỉnh thoảng chúng tôi cũng có thỉnh những bản của các nhà dịch khác để xem, nhưng khó hiểu quá! Ngoài cái khó về văn chương và danh từ triết lý chuyên môn lại còn nghĩa lý rộng sâu như biển, thật khó nắm lấy đại cương!</p>
    <p>Hôm nay được nghe giảng Đại cương, thật chẳng khác nào bầu thế giới bao la, mà được thâu vào một bản đồ nhỏ hẹp, rất dễ ngắm xem.</p>
    <p>Chúng tôi được nghe lời Phật dạy:</p>
    <blockquote>
      <p>Người chưa được độ mà muốn độ người đó là tâm Bồ tát; người đã được giác ngộ, rồi đem ra khai sáng cho người khác là hạnh của Như Lai.</p>
    </blockquote>
    <p>Chúng tôi tự nghĩ rằng: "Mình đã là con của Phật, phải học theo hạnh Bồ tát: Mỗi khi được điều lợi gì, thì phải đều chia sớt cho mọi người".</p>
    <p>Nghĩ thế, nên chúng tôi yêu cầu Thầy Đốc giáo Phật học đường Nam Việt viết lại thành bài, và chung cùng nhau in ra phát hành; trong số đó, có ấn tống 1000 quyển (khi lần thứ nhất).</p>
    <p>Như thế, trước để đền đáp Hồng ân của Tam Bảo, và công trình giáo huấn của chư Tăng, sau mong cho mỗi người đọc hiểu, đều ngộ được chân tâm của mình, cùng chúng tôi đồng tu đồng chứng.</p>
    <p>Mong thay! Vui lắm thay!</p>
    <footer class="text-right space-y-1">
      <p>Chợ Lớn ngày 15 tháng 1 năm Ất Mùi (1955)</p>
      <p>T.M Cư Sĩ Phật Học Đường Nam Việt</p>
      <p><strong>Phật Tử MINH PHÚC</strong></p>
    </footer>
  </section>
</section>
`

const lesson: Lesson = {
  id: 'lesson-khoa-6-7-thay-loi-tua',
  slug: 'thay-loi-tua',
  title: 'Thay lời tựa',
  type: 'article',
  status: 'published',
  order: 1,
  content,
  createdAt: '2026-03-20',
  updatedAt: '2026-05-25',
}

export default lesson
