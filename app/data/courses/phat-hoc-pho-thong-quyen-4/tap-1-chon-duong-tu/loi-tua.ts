import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-5 dark:border-secondary-900 dark:bg-secondary-950/30 mb-8">
      <h2 id="loi-tua" class="mt-0 mb-0 text-2xl font-bold text-secondary-700 dark:text-secondary-300">LỜI TỰA</h2>
    </div>

    <p>Từ lâu không biết bao nhiêu người, ở ngoài đời cũng như trong đạo, rất bỡ ngỡ về vấn đề tu hành. Như một kẻ bộ hành ngơ ngác, lạc lõng giữa ngã ba đường, họ băn khoăn tự hỏi: Tu làm sao đây? Tu phương pháp gì? Và phải hạ thủ công phu làm sao mới đúng?</p>

    <p>Họ có cảm tưởng như lạc vào rừng rậm, tìm không được lối ra, mặc dù trong số ấy có nhiều người đã quy y lâu ngày hay đã ở chùa nhiều năm. Lại có người lại đơn giản hóa sự tu hành: họ chỉ thực hành qua loa một vài việc cho có lệ, và cho như thế là tu rồi. Có người chấp nhặt ở một phương pháp tu hành này, rồi bài xích tất cả phương pháp khác mà họ cho là quấy. Thậm chí có người hiểu nghĩa chữ “tu” một cách mơ hồ hay sai lạc, rồi dựa vào đó mà thực hành một cách mù quáng, sai đường, và đôi khi lại còn trở lại công kích những kẻ đi đường khác!</p>

    <p>Đứng trước tình trạng buồn thảm ấy, ai lại chẳng đau lòng! Vì thế chúng tôi bạo dạn soạn loạt bài này, để cống hiến cho quý vị nào còn bỡ ngỡ trên bước đường tu hành, một <em>“bản đồ”</em> chỉ đường tu về cõi Phật.</p>

    <h4 id="noi-dung" class="mt-8 text-lg font-semibold">Nội dung loạt bài</h4>
    <p>Trong loạt bài này chúng tôi in thành từng tập sách nhỏ, chúng tôi sẽ tuần tự đề cập đến những điểm quan trọng sau đây:</p>

    <ol class="space-y-3">
      <li>Thanh toán những quan niệm chật hẹp sai lầm, những sự bài xích lẫn nhau của các tông phái về chữ “tu”.</li>
      <li>Giải thích và phân tích rành rõ về nghĩa chữ “tu”.</li>
      <li>Nhấn mạnh vào sự cần yếu của sự tu hành, đối với hết thảy mọi người, mọi giai cấp trong xã hội, và chỉ rõ về cách “tu” của quảng đại quần chúng.</li>
      <li>Trình bày về lối tu thông thường, nhưng cần yếu của giới Phật tử, xuất gia và tại gia từ xưa đến nay.</li>
      <li>Trình bày về lối tu chuyên môn riêng biệt của các tông phái Phật giáo (mười tông). Các lối tu này nhằm mục đích đi sâu vào đạo, nên các tu sĩ xuất gia rất cần biết rõ.</li>
      <li>Trình bày cách tu rộng lớn của Đại thừa Bồ tát trong mọi ý nghĩ, lời nói, cử chỉ và hành động, v.v…</li>
      <li>Cuối cùng, giải rõ về lối tu của năm thừa, phân biệt so sánh lối tu của Đại thừa và Tiểu thừa để quy về Nhất thừa.</li>
    </ol>

    <h4 id="loi-uoc-mong" class="mt-8 text-lg font-semibold">Lời ước mong</h4>
    <p>Chúng tôi trông mong, sau khi đọc xong loạt bài này, quý vị độc giả sẽ có một ý niệm rõ ràng về ý nghĩa của sự tu hành, một quan niệm tổng quát, chính xác về các lối tu, và sẽ lựa một đường lối tu hành thích hợp với hoàn cảnh, khả năng, hoài bảo của mình, và sẽ vui vẻ tự bảo:</p>

    <div class="pl-6 italic my-4 border-l-4 border-primary-300 dark:border-primary-700">
      <p class="mb-0">“Từ đây về sau chắc chắn không còn sợ lạc đường nữa, vì ta đã có trên tay một bản đồ chỉ rành rẽ đường tu về cõi Phật”.</p>
    </div>

    <div class="mt-8 mb-8 text-right font-semibold">
      <p class="mb-0">Sa-môn THÍCH THIỆN HOA</p>
    </div>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-bdtp-tap-1-loi-tua',
  slug: 'loi-tua',
  title: 'Lời tựa',
  type: 'article',
  status: 'published',
  order: 1,
  createdAt: '2026-09-12',
  updatedAt: '2026-09-12',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'loi-tua', label: 'LỜI TỰA' },
        { id: 'noi-dung', label: 'Nội dung loạt bài', indent: 1 },
        { id: 'loi-uoc-mong', label: 'Lời ước mong', indent: 1 },
      ],
    },
  ]
}

export default lesson
