import type { Lesson, QuizQuestion } from '~/types/course'
import { materialUrl } from '../material'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Pháp Môn Tịnh Độ</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30 mb-8 text-center">
      <h2 class="mt-0 mb-2 text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-300 uppercase">KHAI THỊ & PHÁT NGUYỆN VÃNG SANH</h2>
      <div class="h-1 w-20 bg-secondary-400 mx-auto my-4 rounded-full"></div>
      <p class="mb-0 text-xl font-bold text-primary-800 dark:text-primary-200">Thích Giác Khang</p>
    </div>

    <h2 id="khai-thi" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2">I. KHAI THỊ</h2>

    <div class="mt-6">
      <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4 bg-primary-50 dark:bg-primary-900/20 inline-block px-4 py-1 rounded-full">1. Đối với người sắp lâm chung</h3>
      <p class="italic mb-4">(có 4 điều cần hiểu để hành)</p>
      
      <p>Xác thân chết nhưng linh hồn còn chuyển biến liên tục mãi mãi.</p>
      <p>Lúc hấp hối hiện ra những việc thiện, ác hay vô ký (không thiện không ác) đã làm trong cuộc sống. Nếu tắt thở hiện ra việc thiện thì tái sanh về cõi thiện (người, trời); hiện ra việc ác thì tái sanh về cõi ác (địa ngục, ngạ quỷ, a-tu-la). Tốt nhất, chúng ta niệm Phật niệm Phật được nhất niệm và phát nguyện vãng sanh sẽ được Phật tiếp dẫn về Tây phương Cực lạc, vĩnh viễn thoát luân hồi sinh tử khổ.</p>

      <p class="font-semibold mt-6 mb-2">Phương cách niệm lục tự A Di Đà được nhất niệm thông qua 6 căn:</p>
      <ul class="space-y-2 pl-5 list-disc">
        <li><strong>Mắt</strong> nhìn hình Phật A Di Đà đặt ở hướng Tây tức hướng mặt trời lặn.</li>
        <li><strong>Tai</strong> nghe tiếng niệm Phật.</li>
        <li><strong>Mũi</strong> ngửi mùi thơm của nhang.</li>
        <li><strong>Miệng</strong> niệm "Nam mô A Di Đà Phật".</li>
        <li><strong>Thân</strong> ngồi kiết già, mặt quay về hướng Tây. Nếu nằm thì đầu quay về hướng Bắc, chân hướng Nam, nằm nghiêng qua bên phải để lưng quay về hướng Đông, mặt quay về hướng Tây nhìn hình Phật.</li>
        <li><strong>Ý</strong> luôn nghĩ, tưởng nhớ đến Phật A Di Đà.</li>
      </ul>

      <p class="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <span class="font-semibold">Lưu ý:</span> Lúc lâm chung thấy người hoặc cảnh giới: màu đen là quỷ, màu đỏ là a-tu-la, màu xanh là tiên, màu trắng là trời thì chúng ta <strong>từ chối khéo léo không đi theo</strong>, đợi khi màu vàng và Phật A Di Đà hiện ra tay cầm hoa sen thì linh hồn nhập vào hoa sen đó.
      </p>
    </div>

    <div class="mt-10">
      <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4 bg-primary-50 dark:bg-primary-900/20 inline-block px-4 py-1 rounded-full">2. Đối với người thân trong gia đình</h3>
      <p class="italic mb-4">(có 7 điều cần hiểu để hành)</p>
      
      <ul class="space-y-4 pl-0 list-none">
        <li class="relative pl-6  before:absolute before:left-0 before:text-primary-500 before:font-bold before:text-xl">
          Người sắp lâm chung hay bị hôn mê nên rất cần người nhắc nhở niệm Phật thường xuyên, có thể vị Chân sư khai thị hoặc Ban hộ niệm, tốt nhất là người thân cận nhưng phải khéo léo, dịu dàng,... để khi nhắc người bệnh vui vẻ chấp nhận niệm Phật.
        </li>
        <li class="relative pl-6  before:absolute before:left-0 before:text-primary-500 before:font-bold before:text-xl">
          Nếu bị bệnh nan y, thân mình đau nhức, khó tập trung niệm Phật. Người nhà nấu nước gạo lức để ấm 37 độ cho uống (không uống lạnh hoặc nóng) rồi xem nước tiểu nếu màu vàng lợt thì bệnh nhân hết nhức và còn nhức khi nước tiểu màu vàng đậm là do nhiệt (không rang gạo lức) hoặc màu trắng là do hàn (rang gạo lức ngả màu vàng sậm).
        </li>
        <li class="relative pl-6  before:absolute before:left-0 before:text-primary-500 before:font-bold before:text-xl">
          Người thân của người sắp lâm chung nên niệm Phật, tụng kinh, ăn chay rồi hồi hướng cho người bệnh và cứ tiếp tục cho đến 49 ngày sau khi mất.
        </li>
        <li class="relative pl-6  before:absolute before:left-0 before:text-primary-500 before:font-bold before:text-xl text-red-700 dark:text-red-400">
          <strong>Trước và sau khi chết, cả người thân cũng như người đến thăm không đến hỏi han hoặc khóc.</strong> Vì nếu khóc hoặc hỏi han thì người sắp lâm chung niệm Phật không nhất niệm sẽ khó ra đi hoặc linh hồn lưu luyến khó siêu thoát.
        </li>
        <li class="relative pl-6  before:absolute before:left-0 before:text-primary-500 before:font-bold before:text-xl">
          <strong>Sau khi chết không đụng vào tử thi, phải chờ sau 8 tiếng đồng hồ mới thay đồ và liệm</strong>, cũng không bỏ vàng, nếp,... vào miệng người chết. Bởi vì các dây thần kinh cảm giác còn dính liền với linh hồn, khi va chạm dễ bị đau mà bị đọa vào súc sanh.
        </li>
        <li class="relative pl-6  before:absolute before:left-0 before:text-primary-500 before:font-bold before:text-xl">
          Khi đã chết rồi không rước ban kèn trống làm mất thanh tịnh. Người thân, Ban hộ niệm hoặc mở băng niệm Phật mà thôi.
        </li>
        <li class="relative pl-6  before:absolute before:left-0 before:text-primary-500 before:font-bold before:text-xl">
          Không đốt, không rải giấy tiền vàng bạc địa phủ. Không cúng và đãi khách đồ ăn mặn trong thời gian tổ chức đám tang.
        </li>
      </ul>
    </div>

    <div class="mt-10">
      <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4 bg-primary-50 dark:bg-primary-900/20 inline-block px-4 py-1 rounded-full">3. Ấn chứng vãng sanh</h3>
      <p class="italic mb-4">(có niệm Phật và phát nguyện vãng sanh)</p>

      <p class="font-semibold">Tỉnh táo niệm Phật trước khi tắt thở. Khi nhắc niệm mà người sắp lâm chung:</p>
      <ul class="space-y-2 pl-5 list-disc mb-4">
        <li><strong>Mỉm cười:</strong> có 3/4 hào quang của Đức A Di Đà chiếu vào thân thể.</li>
        <li><strong>Gật đầu:</strong> có 2/4 hào quang của Đức A Di Đà chiếu vào thân thể.</li>
        <li><strong>Chớp mắt:</strong> có 1/4 hào quang của Đức A Di Đà chiếu vào thân thể.</li>
      </ul>

      <p>Chết sau 8 tiếng đồng hồ mà thân thể mềm mại, mặt tươi tỉnh như lúc còn sống.</p>

      <p class="font-semibold mt-4">Sau 8 tiếng đồng hồ, trước khi liệm, nhờ người nào có định lực, tu hành, tốt nhất là các vị Sư chân chánh khéo léo, nhẹ nhàng rà soát châu thân xác định điểm nóng, ấm chỗ nào, nếu ở:</p>
      <ul class="space-y-2 pl-5 list-disc mb-4">
        <li><strong>Đỉnh đầu:</strong> đây là hiện tượng của 4 bậc Thánh, vãng sanh về cõi Trung phẩm.</li>
        <li><strong>Trán:</strong> sanh về Hạ phẩm Thượng sanh. Nếu không phát nguyện sanh về cõi trời Vô sắc giới.</li>
        <li><strong>Mặt:</strong> sanh về Hạ phẩm Trung sanh. Nếu không phát nguyện sanh về cõi trời Sắc giới.</li>
        <li><strong>Ngực:</strong> sanh về Hạ phẩm Hạ sanh. Nếu không phát nguyện sanh về cõi người, trời Dục giới.</li>
      </ul>

      <p class="mb-4">Ngoài ra, nếu còn nóng, ấm ở: <strong>bụng</strong> sẽ sanh vào ngạ quỷ, <strong>đầu gối</strong> sẽ sanh vào súc sanh, <strong>bàn chân</strong> sẽ sanh vào địa ngục.</p>
      
      <p>Sau khi hỏa táng (thiêu), trường hợp 1, 2, 3 trên sẽ có xá lợi nhiều hay ít là do Phật lực chiếu vào. Người thân nên thờ xá lợi này sẽ giúp cho gia đình được yên ấm.</p>
    </div>

    <div class="mt-10">
      <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4 bg-primary-50 dark:bg-primary-900/20 inline-block px-4 py-1 rounded-full">4. Cần kiêng ăn</h3>
      <ul class="space-y-4 pl-0 list-none border-l-4 border-red-400 dark:border-red-600 pl-4">
        <li>
          <strong>Kiêng ăn:</strong> hành, hẹ, tỏi, nén, ngò, kiệu,... để niệm Phật được trong sạch và linh nghiệm.
        </li>
        <li>
          <strong>Để tránh bệnh nan y như:</strong> ung thư, tiểu đường, bại liệt,... Cần tránh ăn: bột ngọt, dầu chiên, ớt, đồ nóng,... giá, măng, cà nâu, các loại nấm trồng bằng meo (nấm rơm, nấm đông cô,...). 
          <br><strong>Nên ăn:</strong> bí rợ (bí đỏ), xà lách song, ngó sen, hạt sen, dưa gan muối, dưa leo muối,... các thứ đậu (đen, đỏ,...). Nấu nước gạo rang để ấm 37 độ thay nước uống trong ngày.
        </li>
      </ul>
    </div>

    <div class="my-16 border-t border-dashed border-secondary-300 dark:border-secondary-700 opacity-50 w-2/3 mx-auto"></div>

    <h2 id="phat-nguyen" class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mt-10 border-b-2 border-secondary-200 dark:border-secondary-800 pb-2 text-center">II. PHÁT NGUYỆN & NIỆM PHẬT<br><span class="text-xl">CẦU VÃNG SANH TÂY PHƯƠNG CỰC LẠC</span></h2>

    <div class="mt-8 max-w-2xl mx-auto bg-primary-50 dark:bg-primary-950/40 p-8 rounded-2xl shadow-sm border border-primary-100 dark:border-primary-900">
      
      <div class="text-center italic font-medium text-lg text-primary-800 dark:text-primary-200 mb-8 space-y-1">
        <p>Quy mạng lễ A Di Đà Phật,</p>
        <p>Ở phương Tây thế giới an lành,</p>
        <p>Con nay xin phát nguyện vãng sanh,</p>
        <p>Cúi xin Đức từ bi tế độ.</p>
      </div>

      <div class="text-center font-bold text-lg mb-6 text-secondary-700 dark:text-secondary-400">
        <p>Nam mô Tây phương Cực lạc Thế giới<br>đại từ đại bi tiếp dẫn Đạo Sư A Di Đà Phật.</p>
      </div>

      <div class="space-y-3 font-semibold text-lg text-center list-none pl-0">
        <p class="text-primary-600 dark:text-primary-400">Nam mô A Di Đà Phật <span class="text-sm font-normal opacity-80">(10 lần,... 108 lần,...)</span></p>
        <p>Nam mô Quán Thế Âm Bồ Tát <span class="text-sm font-normal opacity-80">(3 lần)</span></p>
        <p>Nam mô Đại Thế Chí Bồ Tát <span class="text-sm font-normal opacity-80">(3 lần)</span></p>
        <p>Nam mô Địa Tạng Vương Bồ Tát <span class="text-sm font-normal opacity-80">(3 lần)</span></p>
        <p>Nam mô Thanh Tịnh Đại Hải Chúng Bồ Tát <span class="text-sm font-normal opacity-80">(3 lần)</span></p>
      </div>

      <div class="mt-10 pt-6 border-t border-primary-200 dark:border-primary-800">
        <h4 class="text-center font-bold text-xl mb-4 uppercase text-primary-700 dark:text-primary-300">Nguyện</h4>
        <div class="text-center italic text-lg space-y-1">
          <p>Nguyện con sắp đến lúc lâm chung,</p>
          <p>Trừ hết tất cả các chướng ngại,</p>
          <p>Tận mặt thấy Phật A Di Đà,</p>
          <p>Liền được sanh về cõi Cực lạc.</p>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-primary-200 dark:border-primary-800">
        <h4 class="text-center font-bold text-xl mb-4 uppercase text-primary-700 dark:text-primary-300">Hồi Hướng</h4>
        <div class="text-center italic text-lg space-y-1">
          <p>Xin đem công đức niệm Phật này,</p>
          <p>Hồi hướng bốn ân và ba cõi,</p>
          <p>Nguyện khắp pháp giới các chúng sanh,</p>
          <p>Đều sanh Cực lạc thành Phật đạo.</p>
        </div>
      </div>
    </div>

  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo tài liệu, tại sao người thân không nên đụng vào tử thi hoặc thay đồ cho người chết trước 8 tiếng đồng hồ?",
    options: {
      a: "Để đảm bảo người chết có đủ sự yên tĩnh để tỉnh lại nếu chỉ là chết lâm sàng.",
      b: "Vì các dây thần kinh cảm giác còn dính liền với linh hồn, va chạm dễ gây đau đớn dẫn đến đọa vào súc sanh.",
      c: "Để chờ linh hồn hoàn toàn thoát ra khỏi đỉnh đầu.",
      d: "Vì cần thời gian để cơ thể nguội lạnh hoàn toàn mới có thể liệm.",
    },
    answer: "b",
    explanation: {
      a: "Sai.",
      b: "Đúng. Văn bản ghi rõ: 'Bởi vì các dây thần kinh cảm giác còn dính liền với linh hồn, khi va chạm dễ bị đau mà bị đọa vào súc sanh.'",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Khi lâm chung, nếu nhìn thấy màu vàng và Phật A Di Đà hiện ra, linh hồn nên làm gì?",
    options: {
      a: "Nhập ngay vào hoa sen mà Phật đang cầm.",
      b: "Từ chối khéo léo để đợi người thân đến dẫn đi.",
      c: "Cầu nguyện để được tái sanh làm tiên ở cõi trời.",
      d: "Chờ đợi ánh sáng màu trắng xuất hiện để đi theo.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Văn bản khuyên: 'đợi khi màu vàng và Phật A Di Đà hiện ra tay cầm hoa sen thì linh hồn nhập vào hoa sen đó.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Theo hướng dẫn về tư thế nằm niệm Phật, người bệnh nên nằm nghiêng về bên nào và mặt hướng về phía nào?",
    options: {
      a: "Nằm nghiêng bên phải, mặt hướng về phía Tây để nhìn hình Phật.",
      b: "Nằm nghiêng bên phải, đầu hướng về phía Nam.",
      c: "Nằm nghiêng bên trái, mặt hướng về phía Đông.",
      d: "Nằm ngửa, mặt hướng lên trên để nhìn hào quang.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Theo phương cách niệm Phật: 'nằm nghiêng qua bên phải để lưng quay về hướng Đông, mặt quay về hướng Tây nhìn hình Phật.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Nếu sau 8 tiếng đồng hồ, điểm nóng/ấm được xác định ở vùng ngực, điều này biểu thị sự tái sanh về đâu?",
    options: {
      a: "Sanh về Hạ phẩm Hạ sanh hoặc cõi người, trời Dục giới.",
      b: "Sanh về Hạ phẩm Thượng sanh.",
      c: "Vãng sanh về cõi Trung phẩm.",
      d: "Sanh vào cõi ngạ quỷ.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Ngực: sanh về Hạ phẩm Hạ sanh. Nếu không phát nguyện sanh về cõi người, trời Dục giới.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Nước gạo lức cho người bệnh uống nên được duy trì ở nhiệt độ bao nhiêu để giúp giảm đau nhức?",
    options: {
      a: "25°C",
      b: "100°C",
      c: "37°C",
      d: "50°C",
    },
    answer: "c",
    explanation: {
      a: "Sai.",
      b: "Sai.",
      c: "Đúng. 'Người nhà nấu nước gạo lức để ấm 37 độ cho uống (không uống lạnh hoặc nóng)'",
      d: "Sai.",
    },
  },
  {
    question: "Ấn chứng nào cho thấy người sắp lâm chung có 3/4 hào quang của Đức A Di Đà chiếu vào thân thể?",
    options: {
      a: "Mỉm cười",
      b: "Chớp mắt",
      c: "Tỉnh táo niệm Phật",
      d: "Gật đầu",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Mỉm cười: có 3/4 hào quang của Đức A Di Đà chiếu vào thân thể.'",
      b: "Sai. Đây là 1/4 hào quang.",
      c: "Sai.",
      d: "Sai. Đây là 2/4 hào quang.",
    },
  },
  {
    question: "Theo tài liệu, để tránh các bệnh nan y như ung thư hay bại liệt, loại thực phẩm nào sau đây cần tuyệt đối tránh?",
    options: {
      a: "Bí rợ và xà lách song.",
      b: "Dưa gan muối và dưa leo muối.",
      c: "Các loại đậu đen và đậu đỏ.",
      d: "Bột ngọt, dầu chiên, giá, măng, và nấm trồng bằng meo.",
    },
    answer: "d",
    explanation: {
      a: "Sai. Đây là thực phẩm nên ăn.",
      b: "Sai. Đây là thực phẩm nên ăn.",
      c: "Sai. Đây là thực phẩm nên ăn.",
      d: "Đúng. 'Cần tránh ăn: bột ngọt, dầu chiên, ớt, đồ nóng,... giá, măng, cà nâu, các loại nấm trồng bằng meo'.",
    },
  },
  {
    question: "Việc cúng và đãi khách bằng đồ ăn mặn trong thời gian tổ chức đám tang được khuyên như thế nào?",
    options: {
      a: "Tuyệt đối không thực hiện để giữ thanh tịnh và tích đức cho người mất.",
      b: "Chỉ thực hiện sau khi đã qua 49 ngày.",
      c: "Tùy thuộc vào nguyện vọng lúc còn sống của người chết.",
      d: "Nên thực hiện để tỏ lòng hiếu khách của gia đình.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. Văn bản ghi rõ trong những điều người thân cần hiểu: 'Không cúng và đãi khách đồ ăn mặn trong thời gian tổ chức đám tang.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Nếu sau khi mất 8 tiếng, điểm ấm cuối cùng nằm ở đầu gối, linh hồn sẽ sanh vào cảnh giới nào?",
    options: {
      a: "Súc sanh",
      b: "Ngạ quỷ",
      c: "Địa ngục",
      d: "Cõi người",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'nếu còn nóng, ấm ở: bụng sẽ sanh vào ngạ quỷ, đầu gối sẽ sanh vào súc sanh, bàn chân sẽ sanh vào địa ngục.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
  {
    question: "Mục đích chính của việc niệm Phật và phát nguyện vãng sanh là gì?",
    options: {
      a: "Vĩnh viễn thoát luân hồi sinh tử khổ.",
      b: "Để được giàu sang trong kiếp sau.",
      c: "Để được vãng sanh về cõi trời Sắc giới.",
      d: "Để linh hồn được trở thành tiên.",
    },
    answer: "a",
    explanation: {
      a: "Đúng. 'Tốt nhất, chúng ta niệm Phật niệm Phật được nhất niệm và phát nguyện vãng sanh sẽ được Phật tiếp dẫn về Tây phương Cực lạc, vĩnh viễn thoát luân hồi sinh tử khổ.'",
      b: "Sai.",
      c: "Sai.",
      d: "Sai.",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-phap-mon-tinh-do-bai-2-khai-thi-phat-nguyen',
  slug: 'bai-2-khai-thi-va-phat-nguyen-vang-sanh',
  title: 'Khai Thị & Phát Nguyện Vãng Sanh',
  type: 'article',
  status: 'published',
  order: 2,
  coverImage: materialUrl('KHAI THỊ & PHÁT NGUYỆN VÃNG SANH'),
  createdAt: '2026-08-29',
  updatedAt: '2026-08-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/KHAI%20TH%E1%BB%8A%20&%20PH%C3%81T%20NGUY%E1%BB%86N%20V%C3%83NG%20SANH/H%C6%B0%E1%BB%9Bng_d%E1%BA%ABn_v%C3%A3ng_sanh_C%E1%BB%B1c_L%E1%BA%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'khai-thi', label: 'I. Khai Thị' },
        { id: 'phat-nguyen', label: 'II. Phát Nguyện & Niệm Phật Cầu Vãng Sanh' },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phap-mon-tinh-do/KHAI%20TH%E1%BB%8A%20&%20PH%C3%81T%20NGUY%E1%BB%86N%20V%C3%83NG%20SANH/Path_to_the_Pure_Land.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/dbHg9tJmIQ0',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/2im0rQuPVdYbGJ456KMLkL',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Khai Thị & Phát Nguyện Vãng Sanh',
    passPercentage: 70,
    questions,
  },
}

export default lesson