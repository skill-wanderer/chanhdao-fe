import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP NHẤT</p>
      <p class="mb-2 font-semibold">LUẬN ĐẠI THỪA TRĂM PHÁP VÀ BÁT THỨC QUY CỦ TỤNG</p>
      <p class="mb-1">Ngài <strong>THIÊN THÂN</strong> Bồ Tát tạo luận</p>
      <p class="mb-1">Ngài <strong>HUYỀN TRANG</strong> Pháp sư dịch chữ Phạn ra chữ Hán</p>
      <p class="mb-3">Sa môn <strong>THÍCH THIỆN HOA</strong> dịch lại chữ Việt và lược giải.</p>
      <h2 id="bai-thu-hai-luan-dai-thua-tram-phap" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ HAI - LUẬN ĐẠI THỪA TRĂM PHÁP</h2>
    </div>

    <h3 id="nguyen-van-chu-han" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Nguyên văn chữ Hán</h3>
    <div class="space-y-1 italic">
      <p>Như Thế Tôn ngôn:</p>
      <p>"Nhứt thế pháp vô ngã".</p>
      <p>Hà đẳng nhứt thế pháp?</p>
      <p>Vân hà vi vô ngã?</p>
    </div>

    <h3 id="dich-nghia" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Dịch nghĩa</h3>
    <div class="space-y-1">
      <p>Như lời đức Thế Tôn nói:</p>
      <p>"Tất cả Pháp không thật".</p>
      <p>Vậy, cái gì là "tất cả Pháp"?</p>
      <p>Và sao gọi là "không thật"?</p>
    </div>

    <h3 id="luoc-giai-mo-dau" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Lược giải</h3>
    <p>Chữ "PHÁP" tức là tất cả sự vật từ tinh thần lẫn vật chất, nào Thánh Phàm chơn vọng, hữu tình vô tình, hữu hình vô hình, hữu vi vô vi, v.v... đều gọi là Pháp.</p>
    <p>Dịch đúng theo văn Tàu: "Phàm cái gì, tự nó có thể giữ được hình dáng hay khuôn khổ của nó, làm cho người, khi trông đến nó, biết đó là vật gì, thì gọi là 'Pháp' (Nhậm trì tự tánh, quỷ sanh vật giải)."</p>
    <p>Chữ "NGÃ" là Ta hay Tôi. Phàm nói "Ta" thì phải đủ hai điều kiện:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Tự tại hay tự chủ.</li>
      <li>Có thể sắp đặt sai khiến mọi việc.</li>
    </ul>
    <p>Như thế mới được gọi "Ta". Nhưng chữ "vô ngã" ở đây, nên hiểu nghĩa là "không thật" thì rõ hơn.</p>

    <h3 id="phan-thu-nhat-noi-100-phap" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">Phần thứ nhất, nói 100 pháp</h3>

    <h4 id="nguyen-van-chu-han-phan-thu-nhat" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="space-y-1 italic">
      <p>Nhứt thế pháp giả, lược hữu ngũ chủng:</p>
      <p>Nhứt giả Tâm pháp,</p>
      <p>Nhị giả Tâm sở hữu pháp,</p>
      <p>Tam giả Sắc pháp,</p>
      <p>Tứ giả Tâm bất tương ưng hành pháp,</p>
      <p>Ngũ giả Vô vi pháp.</p>
    </div>

    <h4 id="dich-nghia-phan-thu-nhat" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Nói tất cả Pháp có năm món:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Tâm pháp</li>
      <li>Tâm sở hữu pháp</li>
      <li>Sắc pháp</li>
      <li>Tâm bất tương ưng hành pháp</li>
      <li>Vô vi pháp</li>
    </ol>

    <h4 id="luoc-giai-tam-phap" class="text-lg font-semibold">Lược giải</h4>
    <p>Chữ "TÂM" có nhiều nghĩa, nhưng tóm lại có 6 nghĩa:</p>
    <div class="space-y-3">
      <p><strong>Tập khởi:</strong> Chứa nhóm và phát khởi. Nghĩa này thuộc về thức thứ Tám (Tàng thức). Vì thức này có công năng "chứa nhóm" chủng tử của các pháp, rồi "phát khởi" ra hiện hành.</p>
      <p><strong>Tích tập:</strong> Chứa nhóm. Nghĩa này thuộc về bảy thức trước. Vì bảy thức trước có công năng "chứa nhóm" các pháp hiện hành để huân vào Tàng thức.</p>
      <p>Trái lại, Bảy thức trước cũng có nghĩa "tập khởi" (chứa nhóm và phát khởi), vì bảy thức trước có công năng "chứa nhóm" các pháp hiện hành, để huân vào Tàng thức, "khởi thành" chủng tử.</p>
      <p>Thức thứ Tám cũng có nghĩa "tích tập" (chứa nhóm), vì thức thứ Tám có công năng "chứa nhóm" chủng tử của các pháp vậy.</p>
      <p><strong>Duyên lự:</strong> Duyên cảnh, khởi phân biệt. Tám thức đều tự duyên cái cảnh tướng phần của mình, rồi khởi ra phân biệt (lự).</p>
      <p><strong>Thức:</strong> Hiểu biết phân biệt. Cả tám thức đều có công dụng hiểu biết phân biệt.</p>
      <p><strong>Ý:</strong> Sanh diệt tương tục không gián đoạn. Cả tám thức đều niệm niệm sanh diệt tương tục không gián đoạn.</p>
    </div>
    <p><strong>Tâm, Ý và Thức:</strong> Vì y theo đặc tánh của mỗi thức, thì thức thứ Tám về nghĩa "Tích tập" thù thắng, nên gọi là "Tâm"; thức thứ Bảy về nghĩa "sanh diệt tương tục" thù thắng, nên gọi là "Ý" và sáu thức trước về nghĩa phân biệt thù thắng nên gọi là "Thức".</p>
    <p>Chữ "TÂM PHÁP": Pháp thuộc về Tâm. Vì 8 món Tâm này có công năng thù thắng hơn hết; cũng như ông Vua có oai quyền thế lực, thống trị thiên hạ, cho nên cũng gọi là "Tâm vương".</p>

    <h4 id="nguoi-hoc-nen-hoc-thuoc-long" class="mt-8 text-lg font-semibold">Người học nên học thuộc lòng những danh từ sau đây</h4>

    <h5 id="ba-canh" class="text-base font-semibold">I. Ba cảnh</h5>
    <ul class="list-disc space-y-2 pl-6">
      <li>Tánh cảnh</li>
      <li>Độc ảnh cảnh</li>
      <li>Đới chất cảnh</li>
    </ul>

    <h5 id="ba-luong" class="text-base font-semibold">II. Ba lượng</h5>
    <ul class="list-disc space-y-2 pl-6">
      <li>Hiện lượng</li>
      <li>Tỷ lượng</li>
      <li>Phi lượng</li>
    </ul>

    <h5 id="ba-tanh" class="text-base font-semibold">III. Ba tánh</h5>
    <ul class="list-disc space-y-2 pl-6">
      <li>Thiện tánh</li>
      <li>Ác tánh</li>
      <li>Vô ký tánh</li>
    </ul>

    <h5 id="ba-tho" class="text-base font-semibold">IV. Ba thọ</h5>
    <ul class="list-disc space-y-2 pl-6">
      <li>Khổ thọ</li>
      <li>Lạc thọ</li>
      <li>Xả thọ</li>
    </ul>

    <h5 id="nam-tho" class="text-base font-semibold">V. Năm thọ</h5>
    <ul class="list-disc space-y-2 pl-6">
      <li>Khổ thọ</li>
      <li>Lạc thọ</li>
      <li>Ưu thọ</li>
      <li>Hỷ thọ</li>
      <li>Xả thọ</li>
    </ul>

    <h5 id="tam-co-bon-phan" class="text-base font-semibold">VI. Tâm có bốn phần</h5>
    <ul class="list-disc space-y-2 pl-6">
      <li>Tướng phần</li>
      <li>Kiến phần</li>
      <li>Tự chứng phần</li>
      <li>Chứng tự chứng phần</li>
    </ul>

    <h5 id="nam-mot-mon-tam-so" class="text-base font-semibold">VII. 51 món Tâm sở, phân làm 6 vị</h5>
    <ul class="list-disc space-y-2 pl-6">
      <li>Biến hành, có 5</li>
      <li>Biệt cảnh, có 5</li>
      <li>Thiện, có 11</li>
      <li>Căn bổn phiền não, có 6</li>
      <li>Tùy phiền não, có 20</li>
      <li>Bất định, có 4</li>
    </ul>

    <h5 id="ba-gioi-va-chin-dia" class="text-base font-semibold">VIII. Ba giới và chín địa</h5>
    <p><strong>Dục giới:</strong></p>
    <ul class="list-disc pl-6">
      <li>Ngũ thú tạp cư địa.</li>
    </ul>
    <p><strong>Sắc giới:</strong></p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Ly sanh hỷ lạc địa.</li>
      <li>Định sanh hỷ lạc địa.</li>
      <li>Ly hỷ diệu lạc địa.</li>
      <li>Xả niệm thanh tịnh địa.</li>
    </ul>
    <p><strong>Vô sắc giới:</strong></p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Không vô biên xứ địa.</li>
      <li>Thức vô biên xứ địa.</li>
      <li>Vô sở hữu xứ địa.</li>
      <li>Phi tưởng phi phi tưởng xứ địa.</li>
    </ul>

    <h5 id="bo-tat-co-hai" class="text-base font-semibold">IX. Bồ Tát có hai</h5>
    <p><strong>Hiền:</strong></p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Tam hiền (Tư lượng vị): 1. Thập trụ, 2. Thập hạnh, 3. Thập hồi hướng.</li>
      <li>Tứ gia hạnh vị: 1. Noãn, 2. Đảnh, 3. Nhẫn, 4. Thế đệ nhứt.</li>
    </ul>
    <p><strong>Thánh:</strong></p>
    <ul class="list-disc space-y-2 pl-6">
      <li>Hoan hỷ địa</li>
      <li>Ly cấu địa</li>
      <li>Phát quang địa</li>
      <li>Diệm huệ địa</li>
      <li>Nan thắng địa</li>
      <li>Hiện tiền địa</li>
      <li>Viễn hành địa</li>
      <li>Bất động địa</li>
      <li>Thiện huệ địa</li>
      <li>Pháp vân địa</li>
    </ul>

    <h5 id="tam-thuc-va-cac-duyen" class="text-base font-semibold">X. Tám thức và các duyên</h5>
    <ul class="list-disc space-y-3 pl-6">
      <li><strong>Nhãn thức, có 9 duyên:</strong> 1. Hư không, 2. Ánh sáng, 3. Căn, 4. Cảnh, 5. Tác ý, 6. Phân biệt y, 7. Nhiễm tịnh y, 8. Căn bản y, 9. Chủng tử.</li>
      <li><strong>Nhĩ thức, có 8 duyên:</strong> Các duyên cũng đồng như Nhãn thức trên, chỉ trừ "ánh sáng".</li>
      <li><strong>Ba thức: Tỷ, Thiệt và Thân, lại còn có 7 duyên:</strong> Các duyên đồng như Nhãn thức trên, chỉ bớt 2 duyên là Hư không và Ánh sáng.</li>
      <li><strong>Ý thức, có 5 duyên:</strong> 1. Căn, 2. Cảnh, 3. Tác ý, 4. Căn bản y, 5. Chủng tử.</li>
      <li><strong>Mạt na thức, có 3 duyên:</strong> 1. Căn cảnh, 2. Tác ý, 3. Chủng tử.</li>
      <li><strong>A lại da thức, có 4 duyên:</strong> 1. Căn (Mạt na), 2. Cảnh (thân căn, khí giới và chủng tử), 3. Tác ý, 4. Chủng tử.</li>
    </ul>

    <h5 id="bai-tung-cac-duyen" class="text-base font-semibold">Bài tụng các duyên</h5>
    <p>Vì muốn dễ nhớ, nên Cổ nhân có bài tụng như sau:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Nhãn thức cửu duyên sanh</p>
        <p>Nhĩ thức duy tùng bát</p>
        <p>Tỷ, Thiệt, Thân tam, thất</p>
        <p>Hậu tam; ngũ, tam, tứ</p>
      </div>
    </div>

    <h5 id="dich-nghia-bai-tung" class="text-base font-semibold">Dịch nghĩa</h5>
    <div class="space-y-1">
      <p>Nhãn thức đủ chín duyên</p>
      <p>Nhĩ thức chỉ còn tám</p>
      <p>Tỷ, Thiệt, Thân có bảy</p>
      <p>Sau ba; năm, ba, bốn</p>
    </div>

    <h5 id="luoc-giai-cac-duyen" class="text-base font-semibold">Lược giải</h5>
    <p>Nhãn thức có đủ chín duyên; Nhĩ thức chỉ có 8 duyên; Tỷ, Thiệt và Thân ba thức này lại có 7 duyên; còn ba thức sau thì thức thứ 6 có 5 duyên, thức thứ 7 có 3 duyên và thức thứ 8 có 4 duyên. (Thức thứ 7 lấy kiến phần của A lại da thức làm cảnh; Thức thứ 8 lấy căn thân, khí giới và chủng tử làm cảnh).</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo lược giải trong văn bản, định nghĩa nào sau đây đúng nhất về chữ 'PHÁP'?",
    options: {
      a: 'Cái gì tự nó giữ được khuôn khổ riêng và giúp người ta nhận biết được nó là vật gì.',
      b: 'Chỉ những sự vật hữu hình, có thể nhìn thấy và sờ chạm được trong thế giới vật chất.',
      c: 'Những quy định và luật lệ do đức Thế Tôn đặt ra để các đệ tử tuân theo.',
      d: 'Chỉ những trạng thái tâm linh cao thượng của các bậc Thánh như Bồ Tát hay Phật.',
    },
    answer: 'a',
    explanation: {
      a: "Đúng. Văn bản định nghĩa Pháp là phàm cái gì tự nó có thể giữ được hình dáng hay khuôn khổ của nó, làm cho người nhận biết được đó là vật gì [1].",
      b: 'Sai. Pháp bao gồm tất cả sự vật từ tinh thần lẫn vật chất, hữu hình hay vô hình, không chỉ giới hạn ở vật chất [1].',
      c: 'Sai. Trong ngữ cảnh này, Pháp bao gồm tất cả mọi sự vật, không giới hạn ở luật lệ hay quy định [1].',
      d: 'Sai. Chữ Pháp bao gồm cả Thánh và Phàm, chơn và vọng, không chỉ là trạng thái tâm linh cao thượng [1].',
    },
  },
  {
    question: "Để được gọi là 'NGÃ' (cái Tôi), văn bản nêu ra hai điều kiện cần thiết là gì?",
    options: {
      a: 'Tự tại (tự chủ) và có thể sắp đặt sai khiến mọi việc.',
      b: 'Có trí tuệ sáng suốt và khả năng giao tiếp với mọi người.',
      c: 'Có hình hài cố định và có tên gọi riêng biệt.',
      d: 'Tồn tại vĩnh hằng và không bị biến đổi theo thời gian.',
    },
    answer: 'a',
    explanation: {
      a: "Đúng. Tài liệu nêu rõ phàm nói 'Ta' thì phải đủ hai điều kiện: Tự tại hay tự chủ và có thể sắp đặt sai khiến mọi việc [2].",
      b: "Sai. Tài liệu không nhắc đến điều kiện về trí tuệ hay giao tiếp để định nghĩa chữ 'Ngã' [2].",
      c: "Sai. Hình hài hay tên gọi riêng không phải là hai điều kiện được nhắc đến trong văn bản [2].",
      d: "Sai. Sự tồn tại vĩnh hằng không được tài liệu đề cập như một điều kiện của 'Ngã' [2].",
    },
  },
  {
    question: "Trong 'Nhứt thế pháp' (100 pháp), năm nhóm (ngũ chủng) được liệt kê theo thứ tự nào?",
    options: {
      a: 'Tâm pháp, Tâm sở hữu pháp, Sắc pháp, Tâm bất tương ưng hành pháp, Vô vi pháp.',
      b: 'Sắc pháp, Tâm pháp, Tâm sở hữu pháp, Vô vi pháp, Tâm bất tương ưng hành pháp.',
      c: 'Vô vi pháp, Tâm pháp, Tâm sở hữu pháp, Sắc pháp, Tâm bất tương ưng hành pháp.',
      d: 'Tâm pháp, Sắc pháp, Vô vi pháp, Tâm sở hữu pháp, Tâm bất tương ưng hành pháp.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Văn bản liệt kê theo thứ tự: 1. Tâm pháp, 2. Tâm sở hữu pháp, 3. Sắc pháp, 4. Tâm bất tương ưng hành pháp, 5. Vô vi pháp [2, 3].',
      b: 'Sai. Sắc pháp nằm ở vị trí thứ ba, không phải thứ nhất [2].',
      c: 'Sai. Vô vi pháp nằm ở vị trí thứ năm, không phải thứ nhất [2, 3].',
      d: 'Sai. Thứ tự liệt kê Sắc pháp, Vô vi pháp và Tâm sở hữu pháp trong đáp án này không đúng với bản gốc [2, 3].',
    },
  },
  {
    question: "Thức thứ Tám (Tàng thức) được gọi là 'TÂM' chủ yếu vì đặc tánh thù thắng nào?",
    options: {
      a: 'Đặc tánh hiểu biết phân biệt rõ ràng các cảnh.',
      b: "Đặc tánh 'Sanh diệt tương tục' không gián đoạn.",
      c: "Đặc tánh 'Tích tập' (chứa nhóm chủng tử).",
      d: "Đặc tánh 'Duyên lự' (khởi phân biệt cảnh).",
    },
    answer: 'c',
    explanation: {
      a: "Sai. Đặc tánh hiểu biết phân biệt thù thắng thuộc về sáu thức trước, nên gọi là 'Thức' [4].",
      b: "Sai. Đặc tánh sanh diệt tương tục thù thắng thuộc về thức thứ Bảy, nên gọi là 'Ý' [4].",
      c: "Đúng. Thức thứ Tám về nghĩa 'Tích tập' thù thắng nên được gọi là 'Tâm' [4].",
      d: "Sai. Duyên lự là đặc tính chung của cả tám thức khi tự duyên cảnh tướng phần của mình, không phải là đặc tánh riêng để thức thứ Tám được gọi là 'Tâm' [4].",
    },
  },
  {
    question: 'Theo bài tụng về các duyên, Nhãn thức (mắt) cần bao nhiêu duyên để phát sanh?',
    options: {
      a: '5 duyên',
      b: '7 duyên',
      c: '8 duyên',
      d: '9 duyên',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. 5 duyên là số lượng cần thiết của Ý thức, không phải Nhãn thức [5].',
      b: 'Sai. 7 duyên là số lượng cần thiết cho Tỷ, Thiệt và Thân thức [5, 6].',
      c: 'Sai. 8 duyên là số lượng duyên của Nhĩ thức [5, 7].',
      d: "Đúng. Văn bản khẳng định Nhãn thức có 9 duyên, bài tụng cũng ghi 'Nhãn thức cửu duyên sanh' [5, 7].",
    },
  },
  {
    question: 'Sự khác biệt về số lượng duyên giữa Nhãn thức và Nhĩ thức là gì?',
    options: {
      a: "Nhĩ thức không cần 'Hư không'.",
      b: "Nhĩ thức không cần 'Căn'.",
      c: "Nhĩ thức không cần 'Ánh sáng' (Minh).",
      d: "Nhĩ thức cần thêm duyên 'Âm thanh'.",
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Nhĩ thức vẫn cần duyên Hư không, hai thức Tỷ, Thiệt, Thân mới bớt duyên Hư không [5, 7].',
      b: 'Sai. Nhĩ thức vẫn cần Căn, tương tự như các thức khác [7].',
      c: "Đúng. Các duyên của Nhĩ thức đồng như Nhãn thức, nhưng chỉ trừ đi 'ánh sáng' [7].",
      d: "Sai. Tài liệu không nhắc đến việc Nhĩ thức cần bổ sung duyên 'âm thanh' ngoài 8 duyên đã liệt kê [7].",
    },
  },
  {
    question: "Nhóm 'Tam hiền' thuộc vị trí 'Tư lượng vị' của Bồ Tát bao gồm những cấp độ nào?",
    options: {
      a: 'Thập trụ, Thập hạnh, Thập hồi hướng.',
      b: 'Hoan hỷ địa, Ly cấu địa, Phát quang địa.',
      c: 'Dục giới, Sắc giới, Vô sắc giới.',
      d: 'Noãn, Đảnh, Nhẫn, Thế đệ nhứt.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Tài liệu nêu rõ Tam hiền (Tư lượng vị) gồm: 1. Thập trụ, 2. Thập hạnh, 3. Thập hồi hướng [7].',
      b: 'Sai. Hoan hỷ địa, Ly cấu địa, Phát quang địa thuộc về vị trí của bậc Thánh (Thập địa), không phải Tam hiền [7].',
      c: 'Sai. Dục giới, Sắc giới, Vô sắc giới là ba giới, không phải cấp độ Bồ Tát [7, 8].',
      d: 'Sai. Noãn, Đảnh, Nhẫn, Thế đệ nhứt là 4 cấp độ thuộc nhóm Tứ gia hạnh vị [7].',
    },
  },
  {
    question: "Trong 'Năm thọ' (Ngũ thọ), sự khác biệt so với 'Ba thọ' (Tam thọ) là việc bổ sung thêm những yếu tố nào?",
    options: {
      a: 'Thiện thọ và Ác thọ.',
      b: 'Ưu thọ và Hỷ thọ.',
      c: 'Sanh thọ và Tử thọ.',
      d: 'Thánh thọ và Phàm thọ.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Thiện và Ác thuộc về nhóm Ba tánh, không phải Năm thọ [9].',
      b: 'Đúng. Ba thọ gồm Khổ thọ, Lạc thọ, Xả thọ; trong khi Năm thọ bổ sung thêm Ưu thọ và Hỷ thọ [9].',
      c: 'Sai. Tài liệu không liệt kê Sanh thọ và Tử thọ trong danh sách các thọ [9].',
      d: 'Sai. Tài liệu không có khái niệm Thánh thọ và Phàm thọ [9].',
    },
  },
  {
    question: 'Thành phần nào của Tâm có nhiệm vụ tự xác nhận hoặc chứng thực sự hiểu biết của chính mình?',
    options: {
      a: 'Tướng phần',
      b: 'Tự chứng phần',
      c: 'Chứng tự chứng phần',
      d: 'Kiến phần',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Tướng phần là một trong bốn phần của Tâm được liệt kê, nhưng không khớp với khái niệm xác nhận [8].',
      b: "Đúng. 'Tự chứng phần' là một trong 4 phần của Tâm [8]. Lưu ý: Chi tiết về 'nhiệm vụ tự xác nhận' là kiến thức bên ngoài giúp giải thích thuật ngữ này, do trong tài liệu được cung cấp chỉ liệt kê tên bốn phần của Tâm mà không đi sâu vào định nghĩa chức năng, nên bạn có thể cần tự xác minh thêm.",
      c: "Sai. Mặc dù là một phần của Tâm, khái niệm cơ bản về sự tự xác nhận (tự chứng) hiểu biết khớp nhất với Tự chứng phần [8].",
      d: 'Sai. Kiến phần được liệt kê nhưng không phù hợp với khái niệm được hỏi [8].',
    },
  },
  {
    question: "Theo bài thơ về các duyên, cụm từ 'Hậu tam; ngũ, tam, tứ' ám chỉ số duyên của các thức nào?",
    options: {
      a: 'Thập trụ, Thập hạnh, Thập hồi hướng.',
      b: 'Tâm pháp, Sắc pháp, Vô vi pháp.',
      c: 'Nhãn thức, Nhĩ thức, Tỷ thức.',
      d: 'Ý thức, Mạt na thức, A lại da thức.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Thập trụ, Thập hạnh, Thập hồi hướng là Tam hiền của Bồ Tát [7].',
      b: 'Sai. Đây là các nhóm trong 100 pháp [2], không liên quan đến bài tụng về số duyên.',
      c: 'Sai. Nhãn thức cần 9 duyên, Nhĩ thức cần 8 duyên, Tỷ thức cần 7 duyên, không khớp với số liệu 5, 3, 4 [5-7].',
      d: "Đúng. Cụm từ 'Sau ba; năm, ba, bốn' (Hậu tam; ngũ, tam, tứ) được tài liệu lược giải là ám chỉ ba thức sau cùng: Thức thứ 6 (Ý thức) có 5 duyên, Thức thứ 7 (Mạt na thức) có 3 duyên, và Thức thứ 8 (A lại da thức) có 4 duyên [5, 6].",
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-2-luan-dai-thua-tram-phap',
  slug: 'bai-thu-2-luan-dai-thua-tram-phap',
  title: 'Bài Thứ 2 - Luận Đại Thừa Trăm Pháp',
  type: 'article',
  status: 'published',
  order: 4,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-2-luan-dai-thua-tram-phap/L%C6%B0%E1%BB%A3c_%C4%91%E1%BB%93_v%E1%BB%81_Tr%C4%83m_Ph%C3%A1p.png',
      readingContent,
      tableOfContents: [
        { id: 'bai-thu-hai-luan-dai-thua-tram-phap', label: 'Bài Thứ Hai - Luận Đại Thừa Trăm Pháp' },
        { id: 'nguyen-van-chu-han', label: 'Nguyên văn chữ Hán', indent: 1 },
        { id: 'dich-nghia', label: 'Dịch nghĩa', indent: 1 },
        { id: 'luoc-giai-mo-dau', label: 'Lược giải', indent: 1 },
        { id: 'phan-thu-nhat-noi-100-phap', label: 'Phần thứ nhất, nói 100 pháp', indent: 1 },
        { id: 'nguyen-van-chu-han-phan-thu-nhat', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-phan-thu-nhat', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-tam-phap', label: 'Lược giải', indent: 2 },
        { id: 'nguoi-hoc-nen-hoc-thuoc-long', label: 'Người học nên học thuộc lòng', indent: 2 },
        { id: 'ba-canh', label: 'I. Ba cảnh', indent: 3 },
        { id: 'ba-luong', label: 'II. Ba lượng', indent: 3 },
        { id: 'ba-tanh', label: 'III. Ba tánh', indent: 3 },
        { id: 'ba-tho', label: 'IV. Ba thọ', indent: 3 },
        { id: 'nam-tho', label: 'V. Năm thọ', indent: 3 },
        { id: 'tam-co-bon-phan', label: 'VI. Tâm có bốn phần', indent: 3 },
        { id: 'nam-mot-mon-tam-so', label: 'VII. 51 món Tâm sở', indent: 3 },
        { id: 'ba-gioi-va-chin-dia', label: 'VIII. Ba giới và chín địa', indent: 3 },
        { id: 'bo-tat-co-hai', label: 'IX. Bồ Tát có hai', indent: 3 },
        { id: 'tam-thuc-va-cac-duyen', label: 'X. Tám thức và các duyên', indent: 3 },
        { id: 'bai-tung-cac-duyen', label: 'Bài tụng các duyên', indent: 3 },
        { id: 'dich-nghia-bai-tung', label: 'Dịch nghĩa', indent: 3 },
        { id: 'luoc-giai-cac-duyen', label: 'Lược giải', indent: 3 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-2-luan-dai-thua-tram-phap/Mapping_the_Hundred_Dharmas.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/Lh4e0z-jCZU',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/35AH0r3MjxSIrLN5gzcqTJ?utm_source=generator&si=d3ad027392f84566',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận Đại Thừa Trăm Pháp',
    passPercentage: 70,
    questions,
  },
}

export default lesson
