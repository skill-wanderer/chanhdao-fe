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
      <h2 id="luan-dai-thua-tram-phap" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">BÀI THỨ NHẤT - LUẬN ĐẠI THỪA TRĂM PHÁP</h2>
      <p class="mb-0 italic">(Trích yếu Bài này nên học thuộc lòng)</p>
    </div>

    <h3 id="phan-thu-nhat-chanh-van" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">PHẦN THỨ NHẤT - CHÁNH VĂN</h3>
    <p><strong>Hỏi:</strong> Như lời Phật dạy: "Tất cả các pháp đều vô ngã". Vậy cái gì là "Tất cả pháp" và sao gọi là "vô ngã"?</p>
    <p><strong>Đáp:</strong> Tất cả các pháp tuy nhiều, nhưng tóm lại có 100 pháp, chia làm 5 loại:</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <ol class="mb-0 list-decimal space-y-2 pl-6">
        <li><strong>Tâm pháp</strong> (Có 8 món)</li>
        <li><strong>Tâm sở hữu pháp</strong> (Có 51 món)</li>
        <li><strong>Sắc pháp</strong> (Có 11 món)</li>
        <li><strong>Tâm bất tương ưng hành pháp</strong> (Có 24 món)</li>
        <li><strong>Vô vi pháp</strong> (Có 6 món)</li>
      </ol>
    </div>

    <h4 id="tam-phap" class="text-lg font-semibold">I. TÂM PHÁP HOẶC GỌI LÀ TÂM VƯƠNG CÓ 8 MÓN</h4>
    <ul class="list-disc space-y-2 pl-6">
      <li>Nhãn thức (cái biết của mắt)</li>
      <li>Nhĩ thức (cái biết của tai)</li>
      <li>Tỷ thức (cái biết của mũi)</li>
      <li>Thiệt thức (cái biết của lưỡi)</li>
      <li>Thân thức (cái biết của thân)</li>
      <li>Ý thức (cái biết của ý)</li>
      <li>Mạt-na thức (Thức thứ 7)</li>
      <li>A-lại-da thức (Thức thứ 8)</li>
    </ul>

    <h4 id="tam-so-huu-phap" class="text-lg font-semibold">II. TÂM SỞ HỮU PHÁP, GỌI TẮT LÀ TÂM SỞ, CÓ 51 MÓN, PHÂN LÀM 6 LOẠI</h4>
    <ol class="list-decimal space-y-3 pl-6">
      <li><strong>Biến hành</strong>, có năm: Xúc, Tác ý, Thọ, Tưởng, Tư.</li>
      <li><strong>Biệt cảnh</strong>, có năm: Dục, Thắng giải, Niệm, Định, Huệ.</li>
      <li><strong>Thiện</strong>, có mười một: Tín, Tàm, Quý, Vô tham, Vô sân, Vô si, Tinh tấn, Khinh an, Bất phóng dật, Hành xả, Bất hại.</li>
      <li>
        <strong>Căn bản phiền não</strong>, có sáu: Tham, Sân, Si, Mạn, Nghi, Ác kiến.
        <p class="mt-2 mb-0"><strong>Ác kiến</strong> lại chia làm năm: Thân kiến, Biên kiến, Tà kiến, Kiến thủ, Giới cấm thủ.</p>
      </li>
      <li>
        <strong>Tùy phiền não</strong>, có 20 món, chia làm ba loại:
        <ul class="mt-2 list-disc space-y-2 pl-6">
          <li>a) Tiểu tùy, có 10: Phẫn, Hận, Phú, Não, Tật, Xan, Cuồng, Xiểm, Hại, Kiêu.</li>
          <li>b) Trung tùy, có 2: Vô tàm, Vô quý.</li>
          <li>c) Đại tùy, có 8: Trạo cử, Hôn trầm, Bất tín, Giải đãi, Phóng dật, Thất niệm, Tán loạn, Bất chánh tri.</li>
        </ul>
      </li>
      <li><strong>Bất định</strong>, có bốn món: Hối, Miên, Tầm, Tư.</li>
    </ol>

    <h4 id="sac-phap" class="text-lg font-semibold">III. SẮC PHÁP, CÓ 11 MÓN</h4>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Năm căn</strong>: Nhãn căn, Nhĩ căn, Tỷ căn, Thiệt căn và Thân căn.</li>
      <li><strong>Sáu trần</strong>: Sắc trần, Thinh trần, Hương trần, Vị trần, Xúc trần và Pháp trần.</li>
    </ul>

    <h4 id="tam-bat-tuong-ung-hanh-phap" class="text-lg font-semibold">IV. TÂM BẤT TƯƠNG ƯNG HÀNH PHÁP, GỌI TẮT LÀ "BẤT TƯƠNG ƯNG HÀNH", CÓ 24 MÓN</h4>
    <p>Đắc, Mạng căn, Chúng đồng phận, Dị sanh tánh, Vô tưởng định, Diệt tận định, Vô tưởng báo, Danh thân, Cú thân, Văn thân, Sanh, Trụ, Lão, Vô thường, Lưu chuyển, Định dị, Tương ưng, Thế tốc, Thứ đệ, Thời, Phương, Số, Hòa hiệp tánh, Bất hòa hiệp tánh.</p>

    <h4 id="vo-vi-phap" class="text-lg font-semibold">V. VÔ VI PHÁP, CÓ 6 MÓN</h4>
    <p>Hư không vô vi, Trạch diệt vô vi, Phi trạch diệt vô vi, Bất động diệt vô vi, Tưởng thọ diệt vô vi, Chơn như vô vi.</p>

    <h4 id="nguyen-van-chu-han" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <div class="space-y-1 italic">
      <p>Nhất thế tối thắng cố</p>
      <p>Dữ thử tương ưng cố</p>
      <p>Nhị sở hiện ảnh cố</p>
      <p>Tam vị sai biệt cố</p>
      <p>Tứ sở hiển thị cố</p>
      <p>Như thị thứ đệ.</p>
    </div>

    <h4 id="dich-nghia" class="text-lg font-semibold">Dịch nghĩa</h4>
    <p>Thứ lớp như vầy: Tâm vương hơn tất cả. Tâm vương cùng Tâm sở hợp nhau. Do hai món: Tâm vương và Tâm sở, mà hiện ra ảnh tượng là "sắc pháp". Do ba món: Tâm vương, Tâm sở và Sắc pháp, mà thành ra 24 món sai khác là "Bất tương ưng hành". Do bốn món: Tâm vương, Tâm sở, Sắc pháp, Bất tương ưng hành, đều thuộc về Pháp Hữu vi, nên hiện ra 6 Pháp Vô vi.</p>

    <h3 id="luoc-giai-phan-thu-nhat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">LƯỢC GIẢI</h3>
    <p>Tóm lại, ngoại nhân hỏi: "Cái gì là tất cả pháp?". Đại ý, Luận chủ trả lời: Các pháp tuy nhiều, nhưng ước lược chỉ có một trăm pháp, phân làm 5 loại: 1. Tâm vương có 8; 2. Tâm sở có 51; 3. Sắc pháp có 11; 4. Bất tương ưng hành có 24; 5. Vô vi pháp có 6. Trong 5 loại, lại chia làm hai: Bốn loại trên thuộc về Pháp Hữu vi, loại thứ 5 thuộc về pháp Vô vi.</p>
    <p>Trên nguyên văn nói "tất cả pháp" tức là pháp Hữu vi và Vô vi vậy. Từ trước đến đây Luận chủ đã trả lời xong câu hỏi thứ nhất: "Cái gì là tất cả pháp".</p>

    <h4 id="bai-ke-tom-tat-tram-phap" class="text-lg font-semibold">Bài kệ tóm lại 100 pháp</h4>
    <p>Vì muốn cho học giả dễ nhớ, nên Cổ nhân có làm bài kệ bốn câu, tóm lại 100 pháp như vầy:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Sắc pháp thập nhất, tâm pháp bát,</p>
        <p>Ngũ thập nhất cá tâm sở pháp</p>
        <p>Nhị thập tứ chủng bất tương ưng,</p>
        <p>Lục cá Vô vi thành bá pháp.</p>
      </div>
    </div>
    <p><strong>Dịch nghĩa:</strong></p>
    <div class="space-y-1">
      <p>Sắc pháp mười một, Tâm pháp tám,</p>
      <p>Năm mươi mốt món Tâm sở pháp,</p>
      <p>Hai mươi bốn món Bất tương ưng,</p>
      <p>Sáu món Vô vi thành trăm pháp.</p>
    </div>

    <h3 id="phan-thu-hai-vo-nga" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">PHẦN THỨ HAI - THẾ NÀO LÀ VÔ NGÃ?</h3>
    <p>Luận chủ trả lời câu hỏi thứ hai: "Sao gọi là vô ngã?"</p>

    <h4 id="chanh-van-vo-nga" class="text-lg font-semibold">CHÁNH VĂN</h4>
    <p>Nói "vô ngã", lược có 2 món:</p>
    <ol class="list-decimal pl-6">
      <li>Nhân vô ngã.</li>
      <li>Pháp vô ngã.</li>
    </ol>

    <h4 id="luoc-giai-vo-nga" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chúng sinh chấp thân, tâm này thật là mình (ta), như thế là "Nhân ngã"; chấp núi, sông, đất, nước, tất cả sự vật bên ngoài là thật có, như thế là "Pháp ngã".</p>
    <p>Vì "nhân" không thật có và "Pháp" cũng không thật có, nên Phật gọi rằng: "Tất cả Pháp vô ngã"; tức là "Nhân không thật" và "Pháp không thật" vậy.</p>
    <p>Như thế là Luận chủ đã trả lời xong câu hỏi thứ hai: "Thế nào là vô ngã".</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Theo Luận Đại Thừa Trăm Pháp, \"Tất cả các pháp\" được tóm lược thành bao nhiêu pháp và chia làm mấy loại?",
    "options": {
      "a": "100 pháp, chia làm 5 loại",
      "b": "75 pháp, chia làm 5 loại",
      "c": "100 pháp, chia làm 8 loại",
      "d": "101 pháp, chia làm 6 loại"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Tất cả các pháp tuy nhiều, nhưng tóm lại có 100 pháp, chia làm 5 loại [1].",
      "b": "Sai. Tài liệu ghi rõ là có 100 pháp, không phải 75 pháp [1].",
      "c": "Sai. Các pháp được chia làm 5 loại chứ không phải 8 loại [1].",
      "d": "Sai. Tổng cộng có 100 pháp và chia làm 5 loại, không phải 101 pháp và 6 loại [1]."
    }
  },
  {
    "question": "Trong năm loại pháp, loại pháp nào được gọi là \"Tâm vương\" và có bao nhiêu món?",
    "options": {
      "a": "Tâm pháp, có 8 món",
      "b": "Vô vi pháp, có 6 món",
      "c": "Tâm sở hữu pháp, có 51 món",
      "d": "Sắc pháp, có 11 món"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Tâm pháp còn được gọi là Tâm vương và có 8 món [1, 2].",
      "b": "Sai. Vô vi pháp là loại pháp khác và có 6 món [2].",
      "c": "Sai. Tâm sở hữu pháp (Tâm sở) có 51 món [2].",
      "d": "Sai. Sắc pháp là một nhóm khác bao gồm 11 món [2]."
    }
  },
  {
    "question": "Tại sao Tâm pháp (Tâm vương) lại được xếp hàng đầu trong thứ tự các pháp?",
    "options": {
      "a": "Vì Tâm vương không có sự sinh diệt",
      "b": "Vì Tâm vương là pháp vô vi",
      "c": "Vì Tâm vương bao hàm cả Sắc pháp",
      "d": "Vì Tâm vương là pháp thù thắng nhất (tối thắng)"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Tài liệu không giải thích Tâm vương xếp đầu do không có sinh diệt.",
      "b": "Sai. Tâm vương thuộc Pháp Hữu vi, không phải pháp Vô vi [3].",
      "c": "Sai. Tâm vương không bao hàm Sắc pháp mà Sắc pháp chỉ là ảnh tượng hiện ra từ Tâm vương và Tâm sở [3].",
      "d": "Đúng. Tâm vương được xếp đầu vì \"Nhất thế tối thắng cố\", dịch nghĩa là Tâm vương hơn tất cả [3]."
    }
  },
  {
    "question": "Sắc pháp bao gồm 11 món, cụ thể là những gì?",
    "options": {
      "a": "8 thức và 3 trần",
      "b": "6 căn và 5 trần",
      "c": "5 căn và 6 trần",
      "d": "5 biến hành và 6 biệt cảnh"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Tám thức thuộc về Tâm pháp (Tâm vương) [2].",
      "b": "Sai. Sắc pháp gồm 5 căn và 6 trần chứ không phải ngược lại [4].",
      "c": "Đúng. Sắc pháp có 11 món bao gồm Năm căn (nhãn, nhĩ, tỷ, thiệt, thân) và Sáu trần (sắc, thinh, hương, vị, xúc, pháp) [4].",
      "d": "Sai. Năm biến hành và sáu biệt cảnh nằm trong loại Tâm sở hữu pháp [2, 5]."
    }
  },
  {
    "question": "Nhóm pháp nào bao gồm các món như \"Sanh, Trụ, Lão, Vô thường\"?",
    "options": {
      "a": "Tâm bất tương ưng hành pháp",
      "b": "Biệt cảnh tâm sở",
      "c": "Vô vi pháp",
      "d": "Căn bản phiền não"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Các món Sanh, Trụ, Lão, Vô thường thuộc về nhóm Tâm bất tương ưng hành pháp gồm 24 món [4].",
      "b": "Sai. Biệt cảnh gồm năm món: Dục, Thắng giải, Niệm, Định, Huệ [5].",
      "c": "Sai. Vô vi pháp gồm sáu món khác như Hư không vô vi, Trạch diệt vô vi... [3].",
      "d": "Sai. Căn bản phiền não có sáu món: Tham, Sân, Si, Mạn, Nghi, Ác kiến [5]."
    }
  },
  {
    "question": "Tâm sở hữu pháp được chia làm bao nhiêu loại nhỏ?",
    "options": {
      "a": "6 loại",
      "b": "3 loại",
      "c": "5 loại",
      "d": "8 loại"
    },
    "answer": "a",
    "explanation": {
      "a": "Đúng. Tâm sở hữu pháp có 51 món và được phân làm 6 loại [2].",
      "b": "Sai. Chỉ riêng phần Tùy phiền não mới chia làm 3 loại (tiểu, trung, đại) [5].",
      "c": "Sai. Tài liệu ghi rõ phân làm 6 loại, không phải 5 loại [2].",
      "d": "Sai. Tám là số lượng món của Tâm vương, không phải số loại của Tâm sở [1]."
    }
  },
  {
    "question": "Theo lược giải, việc chấp núi, sông, đất, nước là thật có được gọi là gì?",
    "options": {
      "a": "Vô vi pháp",
      "b": "Nhân vô ngã",
      "c": "Pháp ngã",
      "d": "Nhân ngã"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Vô vi pháp là loại pháp độc lập không có sinh diệt [3].",
      "b": "Sai. Nhân vô ngã là việc con người (nhân) không thật có [6].",
      "c": "Đúng. Việc chấp núi, sông, đất, nước, tất cả sự vật bên ngoài là thật có gọi là \"Pháp ngã\" [7].",
      "d": "Sai. Việc chấp thân, tâm này thật là mình thì mới được gọi là \"Nhân ngã\" [7]."
    }
  },
  {
    "question": "Câu kệ \"Sắc pháp thập nhất, tâm pháp bát\" nằm trong bài kệ tóm tắt 100 pháp nhằm mục đích gì?",
    "options": {
      "a": "Chứng minh các pháp là vô ngã",
      "b": "Giải thích định nghĩa của từng pháp",
      "c": "Phân biệt pháp Hữu vi và Vô vi",
      "d": "Giúp người học dễ học thuộc lòng số lượng các pháp"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Bài kệ không dùng để chứng minh sự vô ngã [7].",
      "b": "Sai. Nội dung kệ chỉ mang tính liệt kê số lượng chứ không có phần giải thích định nghĩa [7].",
      "c": "Sai. Dù liệt kê đủ trăm pháp, nhưng mục đích chính của bài kệ không phải là phân biệt hữu vi hay vô vi [7].",
      "d": "Đúng. Cổ nhân làm bài kệ bốn câu tóm lại 100 pháp là vì muốn cho học giả dễ nhớ [7]."
    }
  },
  {
    "question": "Trong hệ thống 100 pháp, những pháp nào được gọi là pháp Hữu vi?",
    "options": {
      "a": "Chỉ có Vô vi pháp",
      "b": "Cả 5 loại pháp",
      "c": "Bốn loại đầu (Tâm pháp, Tâm sở, Sắc pháp, Bất tương ưng hành)",
      "d": "Chỉ có Tâm pháp và Tâm sở hữu pháp"
    },
    "answer": "c",
    "explanation": {
      "a": "Sai. Pháp Hữu vi đối lập với Vô vi pháp [8].",
      "b": "Sai. Loại thứ 5 là Vô vi pháp nên không thuộc Hữu vi [8].",
      "c": "Đúng. Bốn món: Tâm vương, Tâm sở, Sắc pháp, Bất tương ưng hành, đều thuộc về Pháp Hữu vi [3, 8].",
      "d": "Sai. Ngoài Tâm pháp và Tâm sở thì Sắc pháp cùng Bất tương ưng hành cũng là pháp Hữu vi [3]."
    }
  },
  {
    "question": "Mối quan hệ giữa Sắc pháp với Tâm vương và Tâm sở được mô tả như thế nào?",
    "options": {
      "a": "Sắc pháp sinh ra Tâm vương",
      "b": "Sắc pháp và Tâm sở là một loại",
      "c": "Sắc pháp tồn tại độc lập hoàn toàn với tâm",
      "d": "Sắc pháp là ảnh tượng hiện ra từ Tâm vương và Tâm sở"
    },
    "answer": "d",
    "explanation": {
      "a": "Sai. Tâm vương là nền tảng, không phải do Sắc pháp sinh ra [3].",
      "b": "Sai. Sắc pháp (11 món) và Tâm sở (51 món) là hai loại pháp khác biệt [2, 4].",
      "c": "Sai. Sắc pháp không tồn tại độc lập mà phải nương vào Tâm vương và Tâm sở [3].",
      "d": "Đúng. Do hai món Tâm vương và Tâm sở mà hiện ra ảnh tượng gọi là \"sắc pháp\" [3]."
    }
  }
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-bai-1-luan-dai-thua-tram-phap',
  slug: 'bai-thu-1-luan-dai-thua-tram-phap',
  title: 'Bài Thứ 1 - Luận Đại Thừa Trăm Pháp',
  type: 'article',
  status: 'draft',
  order: 3,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-1-luan-dai-thua-tram-phap/B%E1%BA%A3n_%C4%91%E1%BB%93_B%C3%A1ch_Ph%C3%A1p_Minh_M%C3%B4n.png',
      readingContent,
      tableOfContents: [
        { id: 'luan-dai-thua-tram-phap', label: 'Bài Thứ Nhất - Luận Đại Thừa Trăm Pháp' },
        { id: 'phan-thu-nhat-chanh-van', label: 'Phần thứ nhất - Chánh văn', indent: 1 },
        { id: 'tam-phap', label: 'I. Tâm pháp hoặc gọi là Tâm vương có 8 món', indent: 2 },
        { id: 'tam-so-huu-phap', label: 'II. Tâm sở hữu pháp có 51 món', indent: 2 },
        { id: 'sac-phap', label: 'III. Sắc pháp có 11 món', indent: 2 },
        { id: 'tam-bat-tuong-ung-hanh-phap', label: 'IV. Tâm bất tương ưng hành pháp có 24 món', indent: 2 },
        { id: 'vo-vi-phap', label: 'V. Vô vi pháp có 6 món', indent: 2 },
        { id: 'nguyen-van-chu-han', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia', label: 'Dịch nghĩa', indent: 2 },
        { id: 'luoc-giai-phan-thu-nhat', label: 'Lược giải', indent: 1 },
        { id: 'bai-ke-tom-tat-tram-phap', label: 'Bài kệ tóm lại 100 pháp', indent: 2 },
        { id: 'phan-thu-hai-vo-nga', label: 'Phần thứ hai - Thế nào là vô ngã?', indent: 1 },
        { id: 'chanh-van-vo-nga', label: 'Chánh văn', indent: 2 },
        { id: 'luoc-giai-vo-nga', label: 'Lược giải', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/bai-thu-1-luan-dai-thua-tram-phap/The_Hundred_Dharmas_Blueprint.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/5ngjihuIg2Y',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/42Dzs7OcFfhmMA41ZVnSfJ?utm_source=generator&si=e5014ea769954a62',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Luận Đại Thừa Trăm Pháp',
    passPercentage: 70,
    questions,
  },
}

export default lesson
