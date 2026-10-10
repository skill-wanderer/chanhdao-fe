import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section>
    <h2>CHÚ THÍCH</h2>
    <p>1. Thành Vương Xá: đô thành của nước Ma-kiệt-dà thuộc trung Ấn-độ.</p>
    <p>2. Hiền kiếp: tức kiếp hiện tại, vì trong kiếp này có một ngàn bậc hiền thánh ra đời, nên gọi là hiền kiếp.</p>
    <p>3. Đâu-suất: cõi trời thứ tư trong sáu tầng trời cõi Dục, rộng tám vạn do-tuần.</p>
    <p>4. Bồ-đề: quả vị Vô thượng chánh đẳng chánh giác.</p>
    <p>5. A-xà-lê: người dạy dỗ đệ tử, khiến cho mọi việc làm của đệ tử đều trang nghiêm, đúng pháp; chính bản thân cũng xứng đáng làm bậc thầy gương mẫu cho đệ tử noi theo, nên còn gọi là đạo sư.</p>
    <p>6. Thanh văn: các đệ tử xuất gia nghe âm thanh của Phật mà chứng ngộ.</p>
    <p>7. Bích-chi Phật: bậc thánh không có thầy mà tự giác ngộ.</p>
    <p>8. Đà-la-ni (Cg: tổng trì): năng lực của trí tuệ tóm thâu, giữ gìn vô lượng Phật pháp, không để quên sót.</p>
    <p>9. Ba cõi: cõi Dục, cõi Sắc, cõi Vô Sắc.</p>
    <p>10. Mười hiệu: Như Lai, Ứng Cúng, Chánh Biến Tri, Minh Hành Túc, Thiện Thệ, Thế Gian Giải, Vô Thượng Sĩ, Điều Ngự Trượng Phu, Thiên Nhân Sư, Phật Thế Tôn.</p>
    <p>11. Đấu: cái đấu để đong gạo. Theo đơn vị đo lường thời xưa, một đấu bằng mười thăng (Một thăng tương đương một lít).</p>
    <p>12. Câu-chi: đơn vị chỉ số lượng của Ấn-độ.</p>
    <p>13. Na-do-tha (Cg: na-do-đa): danh từ số lượng của Ấn-độ.</p>
    <p>14. Nhất sanh bổ xứ: người còn bị sinh tử lần cuối cùng, nghĩa là sau đời sống hiện tại này sẽ được thành tựu Phật quả tại nhân gian.</p>
    <p>15. Do-tuần: đơn vị đo khoảng cách. Theo Đại Đường Tây Vực ký, một do-tuần là chỉ lộ trình một ngày hành quân của nhà vua.</p>
    <p>16. Ly sanh: thoát ly sanh tử.</p>
    <p>17. Chấn động sáu cách: sáu cách chấn động của mặt đất đó là: đông trồi tây sụt, tây trồi đông sụt, nam trồi bắc sụt, bắc trồi nam sụt, bên trồi giữa sụt và giữa trồi bên sụt.</p>
    <p>18. Tu-di: vốn là ngọn núi trong thần thoại Ấn-độ, được Phật giáo sử dụng. Ngọn núi này rất cao, đứng sừng sững ở chính giữa một tiểu thiên thế giới, có tám lớp núi, tám lớp biển bao bọc chung quanh, hình thành một thế giới.</p>
    <p>19. Thiết Vi: dãy núi lấy núi Tu-di làm trung tâm, chung quanh núi này có tám lớp núi, tám lớp biển, lớp ngoài cùng là lớp do sắt tạo thành nên gọi là Thiết Vi sơn, tức lớp núi ngoại hải bao quanh Tu-di và bốn châu.</p>
    <p>20. Ma-ni: từ gọi chung các châu ngọc quý giá.</p>
    <p>21. Nước tám đức: nước trong ao sen ở Tịnh Độ có tám tính chất ưu việt: trong trẻo, mát mẻ, ngon ngọt, mềm nhẹ, thấm nhuần, an hòa, trừ đói khát, nuôi lớn các căn.</p>
    <p>22. Hoặc lậu: phiền não.</p>
    <p>23. Bảy giác chi: bảy pháp có công năng giúp cho trí tuệ bồ-đề phát triển: niệm giác chi, trạch pháp giác chi, tinh tiến giác chi, hỷ giác chi, khinh an giác chi, định giác chi, xả giác chi.</p>
    <p>24. Tám phần thánh đạo: tám thánh đạo cầu niết-bàn: chánh kiến, chánh tư duy, chánh ngữ, chánh nghiệp, chánh mạng, chánh tinh tiến, chánh niệm, chánh định.</p>
    <p>25. Ba cấu: tham, sân, si.</p>
    <p>26. Tam-ma-địa: thiền định.</p>
    <p>27. Uất-đơn-việt: Bắc câu lô châu, một trong bốn châu quanh núi Tu-di.</p>
    <p>28. Tam đồ: ba đường ác: địa ngục, ngạ quỷ, súc sanh.</p>
    <p>29. Thủy tai: một trong ba đại tai. Trong bốn kiếp thành, trụ, hoại, không thì vào thời gian cuối cùng của kiếp hoại, tam tai thủy, hỏa, phong sẽ lần lượt khởi lên, lan tràn cùng khắp thế giới.</p>
    <p>30. Pháp nhãn tịnh: pháp nhãn có năng lực quán sát chân lý các pháp mà không bị chướng ngại và nghi hoặc.</p>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-kinh-vo-luong-tho-bai-10-chu-thich',
  slug: 'bai-10-chu-thich',
  title: 'Chú thích',
  type: 'article',
  status: 'published',
  order: 10,
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
