import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">NHƠN MINH LUẬN</p>
      <h2 id="a-ton" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">A. TÔN</h2>
    </div>

    <p>Phàm nói ra một câu gì, hãy trình bày một lập thuyết gì, cái lập thuyết ấy gọi là Tôn. Như nói: <em>"Tôi ăn cơm."</em></p>
    <p>Tôn có nhiều tên, như:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Tiền trần</strong> (danh từ trước) cũng gọi: Hữu pháp, Tự tướng, Sở biệt.</li>
      <li><strong>Hậu trần</strong> (danh từ sau) cũng gọi: Pháp, Sai biệt, Năng biệt.</li>
    </ul>
    <p>Thí dụ như nói: <em>"Tôi ăn cơm"</em></p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Tôi:</strong> Tiền trần (danh từ trước), Hữu pháp, Tự tướng, Sở biệt.</li>
      <li><strong>ăn cơm:</strong> Hậu trần (danh từ sau), Pháp, Sai biệt, Năng biệt.</li>
    </ul>

    <h3 id="ton-co-ton-y-va-ton-the" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Tôn có Tôn y và Tôn thể</h3>

    <h4 id="ton-y" class="mt-6 text-lg font-semibold">I. Tôn y gồm có 2 phần</h4>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Tiền trần:</strong> Hữu pháp, Sở biệt và Tự tướng.</li>
      <li><strong>Hậu trần:</strong> Pháp, Năng biệt và Sai biệt.</li>
    </ul>

    <h4 id="ton-the" class="mt-6 text-lg font-semibold">II. Tôn thể</h4>
    <p>Cổ Nhơn minh (từ Ngài Trần Na về trước) lấy Tiền trần làm Tôn y, Hậu trần làm Tôn thể.</p>
    <p>Tân Nhơn minh (từ Ngài Trần Na về sau) cho Tiền trần và Hậu trần là vật kiện để lập Tôn, nên đều là Tôn y. Hai vật kiện ấy hợp chung lại thì gọi là Tôn thể.</p>

    <h3 id="chin-loi-ve-to-ton" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Chín lỗi về tợ Tôn</h3>
    <p>Phàm lập Tôn phải tránh chín lỗi sau đây, thì cái Tôn ấy mới đúng đắn, mới đủ tư cách để thành lập luận thuyết của mình, hoặc bác thuyết của người khác. Chín lỗi gồm có:</p>

    <h4 id="loi-1-hien-luong-tuong-vi" class="mt-6 text-lg font-semibold">1. Hiện lượng tương vi</h4>
    <p>Lập cái Tôn, trái với cảm giác hiện tiền. Như hiện tiền ai cũng hiểu biết rằng: Mũi ngửi mùi, tai nghe tiếng v.v... Nay lại lập cái Tôn rằng:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Tai tôi nghe mùi thơm</p>
      <p class="mb-0">mắt tôi thấy tiếng nói v.v...</p>
    </blockquote>
    <p>Vì nói như vậy là trái với sự hiểu biết hiện tại; vừa nói ra, người ta thấy mình nói sai rồi. Tôn đã sai thì làm sao lập được "Nhơn" và "Dụ".</p>

    <h4 id="loi-2-ty-luong-tuong-vi" class="mt-6 text-lg font-semibold">2. Tỷ lượng tương vi</h4>
    <p>Lập cái Tôn trái với sự "so sánh phân biệt". Theo sự so sánh hiểu biết của người: Phàm là người, ai cũng phải chết, như các vị tiền nhân đã chết. Và phàm vật gì có hình phải có hoại, cũng như bao nhiêu vật đã hoại trước. Nay lại lập Tôn rằng:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Tôi sống hoài không chết.</p>
      <p class="mb-0">Cái nhà tôi không bao giờ hư.</p>
    </blockquote>
    <p>Lập Tôn như vậy là trái với sự "so sánh phân biệt" của người, nên có lỗi.</p>

    <h4 id="loi-3-tu-giao-tuong-vi" class="mt-6 text-lg font-semibold">3. Tự giáo tương vi</h4>
    <p>Lập cái Tôn, trái với giáo lý của mình tôn thờ. Nói rộng ra là trái với chủ nghĩa, đảng phái, gia đình, quốc gia hay một lý thuyết mà mình đương tôn trọng.</p>
    <p>Như trong Đạo Phật nói "Chúng sanh có quả báo luân hồi". Và nói "Có thế giới Cực Lạc ở phương Tây v.v...". Chúng ta là Phật tử lại lập cái Tôn rằng:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Chúng sanh không có luân hồi quả báo</p>
      <p class="mb-0">không có nước Cực Lạc.</p>
    </blockquote>
    <p>Ngoại nhơn hỏi lại: "Ông nói như vầy, thì mâu thuẫn với Tôn giáo của ông. Vậy ông nói đúng lý, hay Tôn giáo của ông đúng lý? Nếu Tôn giáo ông dạy đúng lý, thì lời nói ông sai, còn lời nói của ông đúng lý thì Tôn giáo của ông sai. Vậy ông nhìn nhận cái nào đúng?"</p>
    <p>Họ không cần bác mà mình cũng bị thua.</p>

    <h4 id="loi-4-the-gian-tuong-vi" class="mt-6 text-lg font-semibold">4. Thế gian tương vi</h4>
    <p>Lập cái Tôn, trái với phong tục, tập quán và sự hiểu biết của thế gian.</p>
    <p>Thế gian có 2 hạng người: Có học thức và không học thức.</p>
    <p>Nếu đối với người có học thức mà chúng ta lập cái Tôn như vầy:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Ông Thiên lôi đánh anh Xoài chết</p>
      <p class="mb-0">Bệnh ho lao không phải do vi trùng gây nên.</p>
    </blockquote>
    <p>Lập cái Tôn như thế, bị lỗi trái với thế gian, với những người có học thức (Khoa học). Vì khoa học (người có học thức) nói "bệnh ho lao do vi trùng gây nên", và không công nhận có ông Thiên lôi. Chúng ta nói như thế, sẽ bị họ chê là người không có học thức.</p>
    <p>Trái lại, nếu đối với thế gian người vô học, mà chúng ta lập cái Tôn như vầy, cũng bị lỗi Thế gian tương vi.</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Không có ông Thần ban phước giáng họa.</p>
      <p class="mb-0">Bệnh ho lao phát sinh do vi trùng.</p>
    </blockquote>
    <p>Bởi thế người thế gian vô học, họ tin có ông Thần ban phước giáng họa và họ không biết vi trùng. Mặc dù chúng ta nói phải, nhưng thiếu những lời lẽ khôn khéo ngăn đón, nên họ không công nhận. Bởi họ không công nhận, nên lời nói sau của mình không giá trị, vì thế nên mới bị lỗi "Thế gian tương vi".</p>

    <h4 id="loi-5-tu-ngu-tuong-vi" class="mt-6 text-lg font-semibold">5. Tự ngữ tương vi</h4>
    <p>Lập cái Tôn mà lời nói sau của mình, tự mâu thuẫn với lời nói trước của mình. Như lập:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Vật này bao nhiêu mà rẻ vậy?</p>
      <p class="mb-0">Ông này mù mà cái chi cũng thấy hết.</p>
    </blockquote>
    <p>Đã không biết giá là bao nhiêu, tại sao biết rẻ? Đã là mù thì tại sao cái chi cũng thấy. Lời nói của mình tự mâu thuẫn với lời nói của mình. Chính mình cũng thấy sai, thì ai công nhận là phải.</p>

    <h4 id="loi-6-nang-biet-bat-cuc-thanh" class="mt-6 text-lg font-semibold">6. Năng biệt bất cực thành</h4>
    <p>Lập cái Tôn mà "danh từ sau" bên đối phương không công nhận. Như đối với Phật học hay khoa học mà lập cái Tôn như vầy:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Thế giới này (danh từ trước) do Thần Tạo vật (danh từ sau) sanh.</p>
      <p class="mb-0">Anh Ổi (danh từ trước) bị Thiên lôi (danh từ sau) đánh.</p>
    </blockquote>
    <p>Phật học và khoa học đồng nhận Thế giới và anh Ổi; nhưng không bao giờ nhận có "Thần Tạo vật" và "Thiên lôi". Bởi đối phương không công nhận nên bị lỗi "bất thành".</p>

    <h4 id="loi-7-so-biet-bat-cuc-thanh" class="mt-6 text-lg font-semibold">7. Sở biệt bất cực thành</h4>
    <p>Lập cái Tôn mà "danh từ trước" bên đối phương không công nhận. Như đối với Phật học và khoa học, lập như vầy:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Thần Tạo vật (danh từ trước) sanh ra loài người.</p>
      <p class="mb-0">Thái cực (danh từ trước) sanh ra vạn vật.</p>
    </blockquote>
    <p>Loài người và vạn vật là hai danh từ sau, thì cả Phật học và khoa học đều nhận có; còn Thần Tạo vật và Thái cực là hai danh từ trước, thì Phật học cũng như khoa học đều không công nhận, nên bị lỗi "bất thành".</p>

    <h4 id="loi-8-cau-bat-cuc-thanh" class="mt-6 text-lg font-semibold">8. Câu bất cực thành</h4>
    <p>Lập cái Tôn mà "danh từ trước" và "danh từ sau", bên đối phương đều không nhìn nhận. Như đối với khoa học mà lập như vầy:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Cốc thần, Thái cực tức là chân như</p>
      <p class="mb-0">Thần Tạo vật chính là Thái cực.</p>
    </blockquote>
    <p>Bên khoa học không nhìn nhận danh từ trước là "Cốc thần, Thái cực hay Thần Tạo vật" và cũng không nhìn nhận danh từ sau là "Chân như hay Thái cực". Phàm lập luận mà bên đối phương không hiểu, hoặc hiểu mà không nhìn nhận, thì không thể lý luận được nữa. Nên bị lỗi "bất thành".</p>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold text-secondary-700 dark:text-secondary-300">Tóm lại ba lỗi bất thành</p>
      <p class="mb-2">Ba lỗi bất thành này (Năng biệt, Sở biệt và Câu bất thành) bên đối phương không hiểu, hoặc hiểu mà không công nhận. Bởi hai nguyên nhân:</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li>Lập không đúng.</li>
        <li>Lập đúng mà thiếu lời khôn khéo giản biệt, nên bị lỗi ấy.</li>
      </ul>
    </div>

    <h4 id="loi-9-tuong-phu-cuc-thanh" class="mt-6 text-lg font-semibold">9. Tương phù cực thành</h4>
    <p>Lập cái Tôn mà trùng ý kiến với bên đối phương. Như lập:</p>
    <blockquote class="border-l-4 border-primary-300 pl-4 italic text-text-muted dark:border-primary-700">
      <p class="mb-1"><strong>Tôn:</strong></p>
      <p class="mb-1">Cơm ăn no bụng.</p>
      <p class="mb-0">Nước uống đã khát.</p>
    </blockquote>
    <p>Phàm cãi nhau là vì hai bên ý kiến không đồng. Nếu bên khách đã nhìn nhận như mình, mà mình còn lập thêm cái Tôn ra nữa thì vô ích, nên bị lỗi "tương phù" (trùng điệp).</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-0">Trong 9 lỗi về Tôn, từ 1 đến 5 là thuộc về lỗi "tương vi"; từ 6 đến 8 là thuộc về lỗi "bất thành". Lỗi thứ 9 vì lập trùng điệp, nên không có hiệu quả. 9 lỗi về tợ Tôn, giải thích đã rồi, bây giờ sẽ nói 14 lỗi về tợ Nhơn.</p>
    </div>

    <h3 id="phu-bai-hoc-on" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Phụ bài học ôn (ôn lại 9 lỗi về tợ Tôn)</h3>
    <p>Quý vị nên xét kỹ, những câu sau này, đối với 9 lỗi trong tợ Tôn, thuộc về lỗi gì?</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Mẹ tôi không có chồng.</li>
      <li>Không có Trời Đất Quỷ Thần.</li>
      <li>Không Nhơn quả, Luân hồi.</li>
      <li>Không Thiên đường và Địa ngục.</li>
      <li>Trời sanh muôn loại.</li>
      <li>Trời không luân hồi.</li>
      <li>Minh sơ sanh Thần ngã.</li>
      <li>Vò vò bắt sâu làm con của nó.</li>
      <li>Tai nghe mùi thơm.</li>
      <li>Tai nghe tiếng, mũi ngửi mùi.</li>
      <li>Tôi trường sanh bất tử.</li>
      <li>Vật này bao nhiêu mà rẻ vậy.</li>
      <li>Ông mù này, cái chi cũng thấy.</li>
      <li>Ngựa đua dưới nước, tàu chạy trên bờ.</li>
    </ol>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Trong Nhơn minh học, khái niệm \'Tôn\' (Proposition) được định nghĩa như thế nào?',
    options: {
      a: 'Là nguyên nhân dùng để chứng minh cho một lập luận.',
      b: 'Là các ví dụ thực tế dùng để minh họa cho lý thuyết.',
      c: 'Là quy tắc logic dùng để bác bỏ ý kiến của người khác.',
      d: 'Là một câu nói hoặc một lập thuyết được trình bày ra.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Nguyên nhân dùng để chứng minh không phải là khái niệm của Tôn.',
      b: 'Sai. Ví dụ thực tế không phải là định nghĩa về Tôn.',
      c: 'Sai. Tôn không phải là định nghĩa cho một quy tắc logic dùng để bác bỏ.',
      d: 'Đúng. Phàm nói ra một câu gì, hãy trình bày một lập thuyết gì, cái lập thuyết ấy gọi là Tôn.',
    },
  },
  {
    question: 'Theo Tân Nhơn minh (từ Ngài Trần Na về sau), \'Tôn thể\' được hiểu là gì?',
    options: {
      a: 'Sự kết hợp giữa Tiền trần và Hậu trần.',
      b: 'Mối quan hệ mâu thuẫn giữa hai danh từ trong câu.',
      c: 'Chỉ riêng phần Hậu trần (danh từ sau).',
      d: 'Chỉ riêng phần Tiền trần (danh từ trước).',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Tân Nhơn minh cho Tiền trần và Hậu trần là vật kiện để lập Tôn (Tôn y), hai vật kiện ấy hợp chung lại thì gọi là Tôn thể.',
      b: 'Sai. Mối quan hệ mâu thuẫn không phải là định nghĩa của Tôn thể.',
      c: 'Sai. Cổ Nhơn minh (từ Ngài Trần Na về trước) mới lấy Hậu trần làm Tôn thể.',
      d: 'Sai. Không có trường phái nào chỉ lấy riêng Tiền trần làm Tôn thể (Cổ Nhơn minh lấy Tiền trần làm Tôn y).',
    },
  },
  {
    question: 'Lỗi \'Hiện lượng tương vi\' xảy ra trong trường hợp nào sau đây?',
    options: {
      a: 'Lập một Tôn trái với niềm tin tôn giáo của chính mình.',
      b: 'Lập một Tôn trái với cảm giác hiện tiền của con người.',
      c: 'Lập một Tôn mà lời nói sau phủ định lời nói trước.',
      d: 'Lập một Tôn mâu thuẫn với các quy luật so sánh phân biệt.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Lập Tôn trái với niềm tin tôn giáo là lỗi Tự giáo tương vi.',
      b: 'Đúng. Hiện lượng tương vi là lập cái Tôn trái với cảm giác hiện tiền, ví dụ như nói \'Tai tôi nghe mùi thơm\'.',
      c: 'Sai. Lời nói sau phủ định lời trước là lỗi Tự ngữ tương vi.',
      d: 'Sai. Mâu thuẫn với so sánh phân biệt là lỗi Tỷ lượng tương vi.',
    },
  },
  {
    question: 'Nếu một người lập luận rằng \'Cái nhà tôi không bao giờ hư\', người đó phạm phải lỗi gì?',
    options: {
      a: 'Tỷ lượng tương vi.',
      b: 'Tương phù cực thành.',
      c: 'Hiện lượng tương vi.',
      d: 'Thế gian tương vi.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Lập Tôn \'Cái nhà tôi không bao giờ hư\' là trái với sự \'so sánh phân biệt\' (vật có hình phải có hoại), phạm lỗi Tỷ lượng tương vi.',
      b: 'Sai. Tương phù cực thành là lỗi lập Tôn trùng ý kiến với đối phương.',
      c: 'Sai. Hiện lượng tương vi là lỗi lập Tôn trái cảm giác hiện tiền.',
      d: 'Sai. Thế gian tương vi là lỗi lập Tôn trái phong tục, tập quán, sự hiểu biết thế gian.',
    },
  },
  {
    question: 'Lỗi \'Tự ngữ tương vi\' được minh họa rõ nhất qua ví dụ nào?',
    options: {
      a: 'Trời sanh muôn loại.',
      b: 'Cơm ăn no bụng.',
      c: 'Tai nghe mùi thơm.',
      d: 'Mẹ tôi không có chồng.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Ví dụ này có thể phạm lỗi bất thành đối với khoa học, không phải tự mâu thuẫn nội tại.',
      b: 'Sai. Đây là ví dụ của lỗi Tương phù cực thành (trùng ý kiến).',
      c: 'Sai. Đây là ví dụ của lỗi Hiện lượng tương vi (trái cảm giác hiện tiền).',
      d: 'Đúng. \'Mẹ tôi không có chồng\' mang lỗi Tự ngữ tương vi vì từ \'Mẹ\' hàm ý đã có con/có chồng, mâu thuẫn với vế sau \'không có chồng\'.',
    },
  },
  {
    question: 'Khi lập một Tôn mà danh từ trước (Sở biệt) không được đối phương chấp nhận, lỗi đó gọi là gì?',
    options: {
      a: 'Năng biệt bất cực thành.',
      b: 'Sở biệt bất cực thành.',
      c: 'Thế gian tương vi.',
      d: 'Câu bất cực thành.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Năng biệt bất cực thành là khi danh từ sau không được công nhận.',
      b: 'Đúng. Lập cái Tôn mà \'danh từ trước\' (Sở biệt) bên đối phương không công nhận thì phạm lỗi Sở biệt bất cực thành.',
      c: 'Sai. Thế gian tương vi là khi lập Tôn trái với hiểu biết của thế gian.',
      d: 'Sai. Câu bất cực thành là khi cả danh từ trước và sau đều không được công nhận.',
    },
  },
  {
    question: 'Tại sao câu khẳng định \'Nước uống đã khát\' lại bị coi là một lỗi trong lập Tôn (Tương phù cực thành)?',
    options: {
      a: 'Vì nó trái với cảm giác hiện tiền của con người.',
      b: 'Vì lập luận này trùng ý kiến với đối phương nên trở nên vô ích.',
      c: 'Vì đây là một chân lý không cần phải chứng minh bằng logic.',
      d: 'Vì nó sử dụng những danh từ quá đơn giản, thiếu tính học thuật.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Trái với cảm giác hiện tiền là lỗi Hiện lượng tương vi.',
      b: 'Đúng. Lập cái Tôn mà trùng ý kiến với bên đối phương (Tương phù cực thành) thì vô ích, vì cãi nhau là do ý kiến không đồng.',
      c: 'Sai. Lỗi này xét trên phương diện trùng ý kiến với đối phương, không xét trên khía cạnh chân lý.',
      d: 'Sai. Tính học thuật của danh từ không phải là nguyên nhân gây ra lỗi này.',
    },
  },
  {
    question: 'Lỗi \'Thế gian tương vi\' phân chia thế gian thành hai hạng người nào để xem xét?',
    options: {
      a: 'Người đồng quan điểm và người đối lập quan điểm.',
      b: 'Người trong đạo và người ngoại đạo.',
      c: 'Người có học thức và người không có học thức.',
      d: 'Người trẻ tuổi và người lớn tuổi.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Tài liệu không phân chia theo tiêu chí quan điểm.',
      b: 'Sai. Tài liệu không chia thành trong đạo và ngoại đạo đối với lỗi này.',
      c: 'Đúng. Theo tài liệu, thế gian có 2 hạng người: Có học thức và không học thức, lập Tôn trái với sự hiểu biết của họ sẽ phạm lỗi Thế gian tương vi.',
      d: 'Sai. Tài liệu không dùng yếu tố tuổi tác để phân loại.',
    },
  },
  {
    question: 'Trong ví dụ \'Thần Tạo vật sanh ra loài người\' đối với một nhà khoa học, tại sao lại phạm lỗi \'Sở biệt bất cực thành\'?',
    options: {
      a: 'Vì nhà khoa học không công nhận khái niệm \'loài người\'.',
      b: 'Vì câu nói này mâu thuẫn với các quy luật tiến hóa.',
      c: 'Vì câu nói này tự mâu thuẫn về mặt ngôn từ.',
      d: 'Vì nhà khoa học không công nhận sự tồn tại của \'Thần Tạo vật\'.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Khoa học vẫn công nhận danh từ sau là \'loài người\'.',
      b: 'Sai. Lỗi được xét trên góc độ đối phương có nhìn nhận danh từ chủ thể hay không, không xét quy luật tiến hóa.',
      c: 'Sai. Tự mâu thuẫn ngôn từ là lỗi Tự ngữ tương vi.',
      d: 'Đúng. \'Thần Tạo vật\' là danh từ trước (Sở biệt), vì khoa học không công nhận danh từ này nên bị lỗi bất thành.',
    },
  },
  {
    question: 'Lỗi nào sau đây thuộc nhóm lỗi \'Bất thành\' (không thành lập được) trong 9 lỗi về Tôn?',
    options: {
      a: 'Câu bất cực thành.',
      b: 'Tự giáo tương vi.',
      c: 'Tương phù cực thành.',
      d: 'Hiện lượng tương vi.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Nhóm lỗi \'bất thành\' (từ lỗi số 6 đến số 8) bao gồm Năng biệt bất cực thành, Sở biệt bất cực thành và Câu bất cực thành.',
      b: 'Sai. Tự giáo tương vi thuộc nhóm lỗi \'tương vi\' (từ lỗi số 1 đến số 5).',
      c: 'Sai. Tương phù cực thành là lỗi số 9 (thuộc nhóm lập trùng điệp).',
      d: 'Sai. Hiện lượng tương vi thuộc nhóm lỗi \'tương vi\'.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-a-ton',
  slug: 'a-ton',
  title: 'A. Tôn',
  type: 'article',
  status: 'published',
  order: 29,
  createdAt: '2026-03-20',
  updatedAt: '2026-07-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/a-ton/C%E1%BA%A5u_tr%C3%BAc_v%C3%A0_l%E1%BB%97i_logic.png',
      readingContent,
      tableOfContents: [
        { id: 'a-ton', label: 'A. Tôn' },
        { id: 'ton-co-ton-y-va-ton-the', label: 'Tôn có Tôn y và Tôn thể', indent: 1 },
        { id: 'ton-y', label: 'I. Tôn y', indent: 2 },
        { id: 'ton-the', label: 'II. Tôn thể', indent: 2 },
        { id: 'chin-loi-ve-to-ton', label: 'Chín lỗi về tợ Tôn', indent: 1 },
        { id: 'loi-1-hien-luong-tuong-vi', label: '1. Hiện lượng tương vi', indent: 2 },
        { id: 'loi-2-ty-luong-tuong-vi', label: '2. Tỷ lượng tương vi', indent: 2 },
        { id: 'loi-3-tu-giao-tuong-vi', label: '3. Tự giáo tương vi', indent: 2 },
        { id: 'loi-4-the-gian-tuong-vi', label: '4. Thế gian tương vi', indent: 2 },
        { id: 'loi-5-tu-ngu-tuong-vi', label: '5. Tự ngữ tương vi', indent: 2 },
        { id: 'loi-6-nang-biet-bat-cuc-thanh', label: '6. Năng biệt bất cực thành', indent: 2 },
        { id: 'loi-7-so-biet-bat-cuc-thanh', label: '7. Sở biệt bất cực thành', indent: 2 },
        { id: 'loi-8-cau-bat-cuc-thanh', label: '8. Câu bất cực thành', indent: 2 },
        { id: 'loi-9-tuong-phu-cuc-thanh', label: '9. Tương phù cực thành', indent: 2 },
        { id: 'phu-bai-hoc-on', label: 'Phụ bài học ôn', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/a-ton/Zen_Logic_Architecture.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/1lC3GIVDr_Q',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/2gla4l4TY0WGt1COdBjfRX?utm_source=generator&si=bfd5c07574134c55',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - A. Tôn',
    passPercentage: 70,
    questions,
  },
}

export default lesson
