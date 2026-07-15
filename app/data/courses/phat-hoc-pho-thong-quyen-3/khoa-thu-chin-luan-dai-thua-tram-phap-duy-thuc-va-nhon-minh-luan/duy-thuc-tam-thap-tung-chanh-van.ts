import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted">Khóa thứ 9: Luận Đại Thừa Trăm Pháp, Duy Thức và Nhơn Minh Luận</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-5 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">TẬP BA</p>
      <p class="mb-2 font-semibold">DUY THỨC TAM THẬP TỤNG DỊ GIẢI</p>
      <h2 id="chanh-van-duy-thuc-tam-thap-tung" class="mt-0 text-2xl font-bold text-primary-700 dark:text-primary-300">CHÁNH VĂN</h2>
      <p class="mb-0 font-semibold">DUY THỨC TAM THẬP TỤNG (Toàn văn 30 bài tụng)</p>
    </div>

    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Xem infographic: Hành trình tâm thức giác ngộ</p>
      <p class="mb-0">Bài này gom trọn nguyên văn chữ Hán và dịch nghĩa của toàn bộ 30 bài tụng Duy Thức Tam Thập Tụng, giúp ôn lại mạch lạc từ ba thức Năng biến, các tâm sở tương ưng, đến ba tự tánh, ba vô tánh và năm địa vị tu chứng.</p>
    </div>

    <h3 id="chanh-van-tam-nang-bien" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: BA THỨC NĂNG BIẾN</h3>
    <p><strong>Hỏi:</strong> Nếu chỉ có thức, tại sao người thế gian và trong Phật giáo đều nói có Ngã và Pháp?</p>

    <h4 id="nguyen-van-chu-han-tam-nang-bien" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Luận chủ nói bài tụng để trả lời rằng: Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Do giả thuyết Ngã Pháp</p>
        <p>Hữu chủng chủng tướng chuyển</p>
        <p>Bỉ y thức sở biến</p>
        <p>Thử năng biến duy tam</p>
        <p>Vị: Dị thục, Tư lương</p>
        <p>Cập liễu biệt cảnh thức.</p>
      </div>
    </div>

    <h4 id="dich-nghia-tam-nang-bien" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Do giả nói Ngã, Pháp:</p>
        <p>Các tướng Ngã, Pháp kia,</p>
        <p>Nương nơi thức sanh ra.</p>
        <p>Thức năng biến có ba:</p>
        <p>Dị thục và Tư lương</p>
        <p>Cùng thức Liễu biệt cảnh.</p>
      </div>
    </div>

    <h3 id="so-nang-bien-a-lai-da" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: SƠ NĂNG BIẾN - A LẠI DA THỨC</h3>
    <p><strong>Hỏi:</strong> Trên đã được nói cái "tên" của ba thức Năng biến, song chưa nói rõ cái "tướng"; vậy cái "tướng" của thức Năng biến thứ nhứt thế nào?</p>

    <h4 id="nguyen-van-chu-han-so-nang-bien" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Sơ A lại da thức</p>
        <p>Dị thục, Nhứt thế chủng</p>
        <p>Bất khả tri chấp thọ</p>
        <p>Xứ liễu thường dữ xúc</p>
        <p>Tác ý, Thọ, Tưởng, Tư</p>
        <p>Tương ưng duy Xả thọ</p>
        <p>Thị vô phú vô ký</p>
        <p>Xúc đẳng diệc như thị</p>
        <p>Hằng chuyển như bộc lưu</p>
        <p>A la hán vị xả.</p>
      </div>
    </div>

    <h4 id="dich-nghia-so-nang-bien" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Trước là A lại da,</p>
        <p>Dị thục, Nhứt thế chủng.</p>
        <p>Không thể biết: giữ, chịu (chấp thọ)</p>
        <p>Thế giới (xứ) và phân biệt (liễu).</p>
        <p>Tương ưng năm Biến hành,</p>
        <p>Năm thọ chỉ Xả thọ</p>
        <p>Thức này và Tâm sở</p>
        <p>Hằng chuyển như nước thác</p>
        <p>A la hán mới xả.</p>
      </div>
    </div>

    <h3 id="de-nhi-nang-bien-mat-na" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: ĐỆ NHỊ NĂNG BIẾN - MẠT NA THỨC</h3>
    <p><strong>Hỏi:</strong> Trên đã nói thức Năng biến thứ nhứt; còn thức năng biến thứ hai thế nào?</p>

    <h4 id="nguyen-van-chu-han-de-nhi-nang-bien" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thứ đệ nhị năng biến</p>
        <p>Thị thức danh Mạt na</p>
        <p>Y bỉ chuyển duyên bỉ</p>
        <p>Tư lương vi tánh tướng</p>
        <p>Tứ phiền não thường câu</p>
        <p>Vị: Ngã si, Ngã kiến</p>
        <p>Tịnh Ngã mạn, Ngã ái</p>
        <p>Cập dư Xúc đẳng câu</p>
        <p>Hữu phú vô ký nhiếp</p>
        <p>Tuỳ sở sanh sở hệ</p>
        <p>A la hán, Diệt định,</p>
        <p>Xuất thế đạo vô hữu.</p>
      </div>
    </div>

    <h4 id="dich-nghia-de-nhi-nang-bien" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Thức năng biến thứ hai,</p>
        <p>Tên là thức Mạt na.</p>
        <p>Nương kia lại duyên kia (A lại da)</p>
        <p>Tánh tướng đều lo nghĩ;</p>
        <p>Thường cùng bốn phiền não;</p>
        <p>Ngã si và Ngã kiến</p>
        <p>Ngã mạn với Ngã ái;</p>
        <p>Cùng với Xúc vân vân.</p>
        <p>Hữu phú vô ký tánh</p>
        <p>Sanh đâu chấp ngã đó.</p>
        <p>La hán và Diệt định</p>
        <p>Đạo Xuất thế không có.</p>
      </div>
    </div>

    <h3 id="de-tam-nang-bien-luc-thuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: ĐỆ TAM NĂNG BIẾN - SÁU THỨC TRƯỚC</h3>
    <p><strong>Hỏi:</strong> Như vậy đã nói thức Năng biến thứ hai, còn thức Năng biến thứ ba thế nào?</p>

    <h4 id="nguyen-van-chu-han-de-tam-nang-bien" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thứ đệ tam Năng biến</p>
        <p>Sai biệt hữu lục chủng</p>
        <p>Liễu cảnh vi tánh tướng</p>
        <p>Thiện, bất thiện, câu phi</p>
        <p>Thử tâm sở Biến hành</p>
        <p>Biệt cảnh, Thiện, Phiền não</p>
        <p>Tuỳ phiền não, Bất định</p>
        <p>Giai tam thọ tương ưng</p>
      </div>
    </div>

    <h4 id="dich-nghia-de-tam-nang-bien" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Thức Năng biến thứ ba</p>
        <p>Có sáu món sai biệt</p>
        <p>Tánh, tướng đều biết (liễu) cảnh.</p>
        <p>Thiện, Bất thiện, Vô ký</p>
        <p>Đây tâm sở: Biến hành</p>
        <p>Biệt cảnh, Thiện, Phiền não</p>
        <p>Tuỳ Phiền não, Bất định,</p>
        <p>Tương ưng với ba thọ.</p>
      </div>
    </div>

    <h3 id="tam-so-bien-hanh-biet-canh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: TÂM SỞ BIẾN HÀNH VÀ BIỆT CẢNH</h3>
    <p><strong>Hỏi:</strong> Trên đã lược nêu 6 vị tâm sở tương ưng; nay xin nói rõ hành tướng sai khác của các loại tâm sở. Vậy hai vị tâm sở đầu thế nào?</p>

    <h4 id="nguyen-van-chu-han-bien-hanh-biet-canh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Sơ Biến hành: Xúc đẳng</p>
        <p>Thứ Biệt cảnh vị: Dục,</p>
        <p>Thắng giải, Niệm, Định, Huệ.</p>
        <p>Sở duyên sự bất đồng</p>
      </div>
    </div>

    <h4 id="dich-nghia-bien-hanh-biet-canh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Trước Biến hành là Xúc;</p>
        <p>Sau biệt cảnh là Dục,</p>
        <p>Thắng giải, Niệm, Định, Huệ</p>
        <p>Cảnh bị duyên không đồng.</p>
      </div>
    </div>

    <h3 id="tam-so-thien" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: TÂM SỞ THIỆN</h3>
    <p><strong>Hỏi:</strong> Trên đã nói hai loại Biến hành và Biệt cảnh, còn hành tướng của Thiện tâm sở thế nào?</p>

    <h4 id="nguyen-van-chu-han-thien" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thiện vị: Tín, Tàm, Quới</p>
        <p>Vô tham đẳng tam căn</p>
        <p>Cần, An, Bất phóng dật</p>
        <p>Hành xả cập Bất hại.</p>
      </div>
    </div>

    <h4 id="dich-nghia-thien" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Thiện là: Tín, Tàm, Quới</p>
        <p>Vô tham, Sân và Si</p>
        <p>Cần, An, Bất phóng dật</p>
        <p>Hành xả và Bất hại</p>
      </div>
    </div>

    <h3 id="tam-so-phien-nao-can-ban" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: TÂM SỞ PHIỀN NÃO CĂN BẢN</h3>
    <p><strong>Hỏi:</strong> Như trên đã nói Thiện tâm sở rồi, còn hành tướng của căn bản phiền não thế nào?</p>

    <h4 id="nguyen-van-chu-han-phien-nao-can-ban" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Phiền não vị: Tham, Sân</p>
        <p>Si, Mạn, Nghi, Ác kiến.</p>
      </div>
    </div>

    <h4 id="dich-nghia-phien-nao-can-ban" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Phiền não là: Tham, Sân</p>
        <p>Si, Mạn, Nghi, Ác kiến.</p>
      </div>
    </div>

    <h3 id="tam-so-tuy-phien-nao" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: TÂM SỞ TUỲ PHIỀN NÃO</h3>
    <p><strong>Hỏi:</strong> Trên đã nói 6 món căn bản phiền não còn hành tướng của Tuỳ phiền não thế nào?</p>

    <h4 id="nguyen-van-chu-han-tuy-phien-nao" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Tuỳ phiền não vị: Phẫn</p>
        <p>Hận, Phú, Não, Tật, Xan</p>
        <p>Cuống, Siểm dữ Hại, Kiêu</p>
        <p>Vô tàm cập Vô quới</p>
        <p>Trạo cử dữ Hôn trầm</p>
        <p>Bất tín tinh Giải đãi</p>
        <p>Phóng dật cập Thất niệm</p>
        <p>Tán loạn, Bất chánh tri</p>
      </div>
    </div>

    <h4 id="dich-nghia-tuy-phien-nao" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Tuỳ phiền não là: Phẫn,</p>
        <p>Hận, Phú, Não, Tật, Xan</p>
        <p>Cuống, Siểm, và Hại, Kiêu</p>
        <p>Vô tàm với Vô quới</p>
        <p>Trạo cử cùng Giải đãi</p>
        <p>Phóng dật và Thất niệm</p>
        <p>Tán loạn, Bất chánh tri.</p>
      </div>
    </div>

    <h3 id="tam-so-bat-dinh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: TÂM SỞ BẤT ĐỊNH</h3>
    <p><strong>Hỏi:</strong> Trên đã nói hai mươi món Tuỳ phiền não, còn hành tướng của bốn món Bất định thế nào?</p>

    <h4 id="nguyen-van-chu-han-bat-dinh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Bất định vị Hối, Miên</p>
        <p>Tầm, Tư nhị các nhị.</p>
      </div>
    </div>

    <h4 id="dich-nghia-bat-dinh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Bất định là Hối, Miên</p>
        <p>Tầm, Tư lại chia hai</p>
      </div>
    </div>

    <h3 id="phan-vi-hien-khoi" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: PHẬN VỊ HIỆN KHỞI CỦA CÁC THỨC</h3>
    <p><strong>Hỏi:</strong> Trên đã nói 6 loại tâm sở tương ưng rồi, bây giờ làm sao biết được phận vị hiện khởi của 6 thức?</p>

    <h4 id="nguyen-van-chu-han-phan-vi-hien-khoi" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Y chỉ căn bản thức</p>
        <p>Ngũ thức tuỳ duyên hiện</p>
        <p>Hoặc câu hoặc bất câu</p>
        <p>Như đào ba y thuỷ</p>
        <p>Ý thức thường hiện khởi</p>
        <p>Trừ sanh vô tưởng thiên</p>
        <p>Cập vô tâm nhị định</p>
        <p>Thuỳ miên dữ muộn tuyệt.</p>
      </div>
    </div>

    <h4 id="dich-nghia-phan-vi-hien-khoi" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Nương nơi thức căn bản (A lại da)</p>
        <p>Năm thức tuỳ duyên hiện,</p>
        <p>Hoặc chung hoặc chẳng chung,</p>
        <p>Như sóng nương với nước.</p>
        <p>Ý thức thường hiện khởi,</p>
        <p>Trừ sanh trời vô tưởng</p>
        <p>Và hai định vô tâm,</p>
        <p>Ngủ mê hay chết giả.</p>
      </div>
    </div>

    <h3 id="duy-thuc-tuong-chuyen-bien" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: CÁC THỨC CHUYỂN BIẾN - TẤT CẢ DUY THỨC</h3>
    <p><strong>Hỏi:</strong> Trên đã nói ba thức Năng biến, đều do hai phần làm sở y, rồi tự nó biến ra hai phần (Kiến phần và Tướng phần); bây giờ làm sao lại biết "Tất cả đều Duy thức biến ra" rồi giả nói ngã pháp, chứ không phải thật có?</p>

    <h4 id="nguyen-van-chu-han-duy-thuc-tuong-chuyen-bien" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thị chư thức chuyển biến</p>
        <p>Phân biệt sở Phân biệt</p>
        <p>Do thử bỉ giai vô</p>
        <p>Cố nhứt thế Duy thức.</p>
      </div>
    </div>

    <h4 id="dich-nghia-duy-thuc-tuong-chuyen-bien" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Các thức này chuyển biến:</p>
        <p>Phân biệt, bị phân biệt.</p>
        <p>Do bỉ, thử đều không</p>
        <p>Nên tất cả Duy thức,</p>
      </div>
    </div>

    <h3 id="noi-thuc-sanh-phan-biet" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: NỘI THỨC SANH CÁC MÓN PHÂN BIỆT</h3>
    <p><strong>Hỏi:</strong> Nếu chỉ có nội thức không có ngoại cảnh để làm duyên, thì làm sao sanh ra các món phân biệt?</p>

    <h4 id="nguyen-van-chu-han-noi-thuc-sanh-phan-biet" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Do nhứt thế chủng thức</p>
        <p>Như thị như thị biến</p>
        <p>Dĩ triển chuyển lực cố</p>
        <p>Bỉ bỉ phân biệt sanh</p>
      </div>
    </div>

    <h4 id="dich-nghia-noi-thuc-sanh-phan-biet" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Do tất cả chủng thức,</p>
        <p>Biến như vậy như vậy;</p>
        <p>Vì sức biến chuyển đó,</p>
        <p>Sanh các món phân biệt.</p>
      </div>
    </div>

    <h3 id="sanh-tu-tuong-tuc" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: SANH TỬ TƯƠNG TỤC</h3>
    <p><strong>Hỏi:</strong> Nếu chỉ có nội thức, không có ngoại cảnh để làm trợ duyên, thì tại làm sao chúng hữu tình lại sanh tử tương tục?</p>

    <h4 id="nguyen-van-chu-han-sanh-tu-tuong-tuc" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Do chư nghiệp tập khí</p>
        <p>Nhị thủ tập khí câu</p>
        <p>Tiền Dị thục ký tận</p>
        <p>Phục sanh dư Dị thục</p>
      </div>
    </div>

    <h4 id="dich-nghia-sanh-tu-tuong-tuc" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Do chủng tử các nghiệp</p>
        <p>Và chủng tử hai thủ (năng thủ, sở thủ)</p>
        <p>Nên Dị thục trước chết</p>
        <p>Lại sanh Dị thục sau</p>
      </div>
    </div>

    <h3 id="ba-tu-tanh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: BA TỰ TÁNH</h3>
    <p><strong>Hỏi:</strong> Nếu chỉ có thức, tại sao trong các kinh đức Thế Tôn nói có ba tánh?</p>
    <p><strong>Đáp:</strong> Phải biết ba tánh đó cũng không rời thức.</p>
    <p><strong>Hỏi:</strong> Tại sao thế?</p>

    <h4 id="nguyen-van-chu-han-ba-tu-tanh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Do bỉ bỉ Biến kế</p>
        <p>Biến kế chủng chủng vật</p>
        <p>Thử Biến kế sở chấp</p>
        <p>Tự tánh vô sở hữu</p>
        <p>Y tha khởi tự tánh</p>
        <p>Phân biệt duyên sở sanh</p>
        <p>Viên thành thật ư bỉ</p>
        <p>Thường viễn ly tiền tánh</p>
        <p>Cố thử dữ Y tha</p>
        <p>Phi dị phi bất dị</p>
        <p>Như vô thường đẳng tánh</p>
        <p>Phi bất kiến thử bỉ.</p>
      </div>
    </div>

    <h4 id="dich-nghia-ba-tu-tanh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Do các tánh biến kế,</p>
        <p>Chấp hết tất cả vật.</p>
        <p>Tánh Biến kế sở chấp,</p>
        <p>Tự nó không thật có.</p>
        <p>Còn tánh Y tha khởi</p>
        <p>Do các duyên mà sanh.</p>
        <p>Viên thành thật với kia (Y tha)</p>
        <p>Xa lìa Biến kế trước.</p>
        <p>Thành thật với Y tha,</p>
        <p>Cũng khác cũng không khác;</p>
        <p>Như vô thường vân vân</p>
        <p>Chẳng thấy đây (Viên thành) và kia (Y tha).</p>
      </div>
    </div>

    <h3 id="ba-vo-tanh" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: BA VÔ TÁNH</h3>
    <p><strong>Hỏi:</strong> Nếu có ba tánh, tại sao đức Thế Tôn nói: "Tất cả pháp đều không có tự tánh"?</p>

    <h4 id="nguyen-van-chu-han-ba-vo-tanh" class="text-lg font-semibold">Nguyên văn chữ Hán</h4>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Tức y thử tam tánh,</p>
        <p>Lập bỉ tam vô tánh.</p>
        <p>Cố Phật mật ý thuyết:</p>
        <p>Nhứt thế pháp vô tánh.</p>
        <p>Sơ tức tướng vô tánh,</p>
        <p>Thứ vô tự nhiên tánh,</p>
        <p>Hậu do viễn ly tiền:</p>
        <p>Sở chấp ngã pháp tánh.</p>
        <p>Thử chư pháp thắng nghĩa,</p>
        <p>Diệc tức thị Chơn như:</p>
        <p>Thường như kỳ tánh cố;</p>
        <p>Tức Duy thức thật tánh.</p>
      </div>
    </div>

    <h4 id="dich-nghia-ba-vo-tanh" class="text-lg font-semibold">Dịch nghĩa</h4>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Y theo ba tánh này,</p>
        <p>Lập ra ba vô tánh.</p>
        <p>Nên Phật mật ý nói:</p>
        <p>Tất cả pháp vô tánh.</p>
        <p>Trước là "tướng" vô tánh,</p>
        <p>Kế, không tự nhiên tánh,</p>
        <p>Sau, do xa lìa trước:</p>
        <p>Tánh chấp Ngã và Pháp.</p>
        <p>Đây Thắng nghĩa các Pháp,</p>
        <p>Cũng tức là Chơn như,</p>
        <p>Vì tánh thường như vậy,</p>
        <p>Tức thật tánh Duy thức.</p>
      </div>
    </div>

    <h3 id="ngu-vi-tu-tap" class="mt-8 text-xl font-semibold text-secondary-700 dark:text-secondary-300">CHÁNH VĂN: NĂM ĐỊA VỊ NGỘ NHẬP DUY THỨC</h3>
    <p><strong>Hỏi:</strong> Như thế là đã thành lập tướng và tánh của Duy thức. Vậy người nào, có mấy vị, và làm sao ngộ nhập được Duy thức?</p>
    <p><strong>Đáp:</strong> Phải người có đủ hai món tánh Đại thừa và tu hành trải qua năm địa vị sau này, mới ngộ nhập được Duy thức tánh:</p>
    <ol class="list-decimal space-y-1 pl-6">
      <li>Vị Tư lương</li>
      <li>Vị Gia hạnh</li>
      <li>Vị Thông đạt</li>
      <li>Vị Tu tập</li>
      <li>Vị Cứu cánh</li>
    </ol>

    <h4 id="vi-tu-luong" class="text-lg font-semibold">1. Vị Tư lương</h4>
    <p><strong>Hỏi:</strong> Hành tướng của vị Tư lương thế nào?</p>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Nãi chí vị khởi thức</p>
        <p>Cầu trụ Duy thức tánh</p>
        <p>Ư nhị thủ tuỳ miên</p>
        <p>Du vi năng phục diệt</p>
      </div>
    </div>
    <div class="mt-3 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Cho đến chưa khởi thức</p>
        <p>Cầu trụ Duy thức tánh</p>
        <p>Hai thủ còn miên phục</p>
        <p>Chưa có thể diệt trừ.</p>
      </div>
    </div>

    <h4 id="vi-gia-hanh" class="mt-6 text-lg font-semibold">2. Vị Gia hạnh</h4>
    <p><strong>Hỏi:</strong> Hành tướng của vị Gia hạnh thế nào?</p>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Hiện tiền lập thiểu vật</p>
        <p>Vị thị Duy thức tánh</p>
        <p>Dĩ hữu sở đắc cố</p>
        <p>Phi thật trụ Duy thức</p>
      </div>
    </div>
    <div class="mt-3 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Hiện tiền còn một tí</p>
        <p>Gọi là Duy thức tánh;</p>
        <p>Vì còn sở đắc vậy,</p>
        <p>Chẳng thật trụ Duy thức.</p>
      </div>
    </div>

    <h4 id="vi-thong-dat" class="mt-6 text-lg font-semibold">3. Vị Thông đạt</h4>
    <p><strong>Hỏi:</strong> Hành tướng của vị Thông đạt thế nào?</p>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Nhược thời ư sở duyên</p>
        <p>Trí đô vô sở đắc</p>
        <p>Nhĩ thời trụ Duy thức</p>
        <p>Ly nhị thủ tướng cố.</p>
      </div>
    </div>
    <div class="mt-3 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Khi nào "cảnh" bị duyên</p>
        <p>Và "trí" đều không có</p>
        <p>Khi đó trụ Duy thức</p>
        <p>Đã lìa hai món thủ.</p>
      </div>
    </div>

    <h4 id="vi-tu-tap" class="mt-6 text-lg font-semibold">4. Vị Tu tập</h4>
    <p><strong>Hỏi:</strong> Hành tướng của vị Tu tập thế nào?</p>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Vô đắc bất tư nghị</p>
        <p>Thị xuất thế gian trí</p>
        <p>Xả thị thô trọng cố</p>
        <p>Tiên chứng đắc chuyển y.</p>
      </div>
    </div>
    <div class="mt-3 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>"Không đặng", chẳng nghĩ bàn;</p>
        <p>Đây là "Trí xuất thế" (vô phân biệt trí)</p>
        <p>Vì bỏ hai Thô trọng</p>
        <p>Nên chứng đặng "chuyển y"</p>
      </div>
    </div>

    <h4 id="vi-cuu-canh" class="mt-6 text-lg font-semibold">5. Vị Cứu cánh</h4>
    <p><strong>Hỏi:</strong> Hành tướng của vị Cứu cánh thế nào?</p>
    <p><strong>Đáp:</strong> Tụng viết:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <div class="space-y-1 italic">
        <p>Thử tức vô lậu giới</p>
        <p>Bất tư nghị, Thiện, Thường</p>
        <p>An lạc, Giải thoát thân</p>
        <p>Đại Mâu ni danh Pháp.</p>
      </div>
    </div>
    <div class="mt-3 rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <div class="space-y-1">
        <p>Đây là cõi Vô lậu</p>
        <p>Bất tư nghị, Thiện, Thường</p>
        <p>An lạc, Giải thoát thân</p>
        <p>Đại Mâu ni Pháp thân</p>
      </div>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong giáo lý Duy Thức, ba loại thức 'Năng biến' bao gồm những gì?",
    options: {
      a: 'Dị thục, Tư lương và Liễu biệt cảnh',
      b: 'A-lại-da, Mạt-na và A-la-hán',
      c: 'Ngã, Pháp và Duy thức',
      d: 'Biến hành, Biệt cảnh và Thiện',
    },
    answer: 'a',
    explanation: {
      a: "Đúng. Bài tụng chỉ rõ ba loại thức năng biến gồm có 'Dị thục và Tư lương, Cùng thức Liễu biệt cảnh'.",
      b: 'Sai. A-la-hán không phải là tên của một loại thức năng biến.',
      c: 'Sai. Ngã và Pháp nương nơi thức sanh ra chứ không phải ba năng biến.',
      d: 'Sai. Đây là tên các nhóm tâm sở, không phải ba thức năng biến.',
    },
  },
  {
    question: "Thức thứ nhất (A-lại-da) được ví với hình ảnh nào để mô tả tính chất 'luôn trôi chảy' của nó?",
    options: {
      a: 'Ngọn đèn trong gió',
      b: 'Bóng gương soi',
      c: 'Nước thác (Bộc lưu)',
      d: 'Hạt giống (Chủng tử)',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Văn bản không sử dụng hình ảnh ngọn đèn trong gió.',
      b: 'Sai. Văn bản không sử dụng hình ảnh bóng gương soi.',
      c: "Đúng. Bài tụng ví A-lại-da thức là 'Hằng chuyển như nước thác'.",
      d: "Sai. 'Chủng tử' (hạt giống) có được nhắc đến nhưng hình ảnh mô tả tính trôi chảy là 'nước thác'.",
    },
  },
  {
    question: 'Thức Mạt-na (thức thứ hai) luôn đi kèm với bao nhiêu món phiền não căn bản?',
    options: {
      a: 'Năm (Biến hành)',
      b: 'Bốn (Ngã si, Ngã kiến, Ngã mạn, Ngã ái)',
      c: 'Hai mươi (Tùy phiền não)',
      d: 'Sáu (Tham, Sân, Si, Mạn, Nghi, Ác kiến)',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Thức Mạt-na không đi cùng năm tâm sở Biến hành như thức A-lại-da.',
      b: "Đúng. Mạt-na 'Thường cùng bốn phiền não; Ngã si và Ngã kiến, Ngã mạn với Ngã ái'.",
      c: 'Sai. Thức Mạt-na đi kèm bốn phiền não căn bản, không phải hai mươi món tùy phiền não.',
      d: 'Sai. Chỉ đi kèm bốn loại trong số sáu phiền não căn bản.',
    },
  },
  {
    question: "Nhóm tâm sở 'Biệt cảnh' bao gồm những thành phần nào sau đây?",
    options: {
      a: 'Tín, Tàm, Quới, Vô tham, Cần',
      b: 'Hối, Miên, Tầm, Tư',
      c: 'Dục, Thắng giải, Niệm, Định, Huệ',
      d: 'Xúc, Tác ý, Thọ, Tưởng, Tư',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Đây là một phần của nhóm tâm sở Thiện.',
      b: 'Sai. Đây là các tâm sở thuộc nhóm Bất định.',
      c: "Đúng. Nhóm Biệt cảnh bao gồm 'Dục, Thắng giải, Niệm, Định, Huệ'.",
      d: 'Sai. Xúc, Tác ý, Thọ, Tưởng, Tư là thuộc nhóm tâm sở Biến hành.',
    },
  },
  {
    question: 'Tại sao Ý thức (thức thứ sáu) đôi khi không hiện khởi?',
    options: {
      a: 'Do hành giả đã đạt đến quả vị A-la-hán',
      b: 'Do tâm sở Biến hành không hoạt động',
      c: 'Do sanh vào cõi Vô tưởng, vào các định vô tâm, ngủ mê hoặc chết giả',
      d: 'Do các căn bị hỏng hoặc thiếu ngoại duyên',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Quả vị A-la-hán liên quan đến việc xả A-lại-da và Mạt-na, không làm Ý thức ngừng hiện khởi.',
      b: 'Sai. Văn bản không đề cập lý do này.',
      c: "Đúng. Bài tụng chỉ rõ ý thức thường hiện khởi 'Trừ sanh trời vô tưởng, Và hai định vô tâm, Ngủ mê hay chết giả'.",
      d: 'Sai. Văn bản không đề cập đến nguyên nhân về căn hay ngoại duyên.',
    },
  },
  {
    question: "Mối quan hệ giữa Tánh 'Viên thành thật' và Tánh 'Y tha khởi' được mô tả như thế nào?",
    options: {
      a: 'Hoàn toàn là một',
      b: 'Phi dị phi bất dị (Chẳng phải khác, chẳng phải không khác)',
      c: 'Y tha khởi sinh ra Viên thành thật',
      d: 'Đối lập hoàn toàn',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Chúng không hoàn toàn là một.',
      b: "Đúng. Tánh Viên thành thật đối với Y tha khởi là 'Cũng khác cũng không khác' (Phi dị phi bất dị).",
      c: 'Sai. Văn bản không nói Y tha khởi sinh ra Viên thành thật.',
      d: 'Sai. Tánh Viên thành thật và Y tha khởi không đối lập hoàn toàn.',
    },
  },
  {
    question: "Trong 'Ngũ vị' (5 địa vị tu hành), tại vị thứ hai là 'Gia hạnh vị', hành giả đạt đến trạng thái nào?",
    options: {
      a: 'Đã hoàn toàn đoạn trừ được hai món thủ (năng thủ, sở thủ)',
      b: 'Đã chứng đắc Pháp thân và giải thoát hoàn toàn',
      c: 'Còn thấy có một ít tướng Duy thức hiện tiền nên chưa thật trụ',
      d: 'Chưa khởi tâm cầu trụ vào tánh Duy thức',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Đoạn trừ hai món thủ là đặc điểm ở vị Thông đạt.',
      b: 'Sai. Chứng đắc Pháp thân thuộc về Cứu cánh vị.',
      c: "Đúng. Ở Gia hạnh vị, 'Hiện tiền còn một tí, Gọi là Duy thức tánh; Vì còn sở đắc vậy, Chẳng thật trụ Duy thức'.",
      d: 'Sai. Trạng thái chưa khởi tâm cầu trụ Duy thức là ở Tư lương vị.',
    },
  },
  {
    question: "Theo văn bản, 'Thắng nghĩa' của các pháp cũng chính là gì?",
    options: {
      a: 'Sanh tử tương tục',
      b: 'Chơn như',
      c: 'A-lại-da thức',
      d: 'Biến kế sở chấp',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Sanh tử tương tục là kết quả của nghiệp và hai thủ.',
      b: "Đúng. 'Đây Thắng nghĩa các Pháp, Cũng tức là Chơn như'.",
      c: 'Sai. Thắng nghĩa các pháp không phải là A-lại-da.',
      d: 'Sai. Thắng nghĩa là tánh thật sự sau khi xa lìa Biến kế sở chấp.',
    },
  },
  {
    question: "Điều gì khiến cho chúng hữu tình tiếp tục sanh tử tương tục dù chỉ có nội thức?",
    options: {
      a: 'Do sự hiện khởi của năm thức cảm giác',
      b: 'Do tác động của ngoại cảnh thật có bên ngoài',
      c: "Do tập khí của các nghiệp và tập khí của 'nhị thủ'",
      d: 'Do sức mạnh của tâm sở Thiện',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Không phải do sự hiện khởi của năm thức cảm giác.',
      b: 'Sai. Văn bản khẳng định chỉ có nội thức, không có ngoại duyên.',
      c: "Đúng. Sự luân hồi sanh tử tương tục là 'Do chủng tử các nghiệp, Và chủng tử hai thủ'.",
      d: 'Sai. Văn bản không nhắc đến sức mạnh của tâm sở Thiện là nguyên nhân.',
    },
  },
  {
    question: "Địa vị nào trong năm vị tu hành được gọi là 'Trí xuất thế' và đã chứng được 'chuyển y'?",
    options: {
      a: 'Tu tập vị',
      b: 'Tư lương vị',
      c: 'Thông đạt vị',
      d: 'Dị thục vị',
    },
    answer: 'a',
    explanation: {
      a: "Đúng. Tại vị Tu tập: 'Đây là \"Trí xuất thế\" ... Nên chứng đặng \"chuyển y\"'.",
      b: 'Sai. Tư lương vị là vị đầu tiên, chưa chứng đặng chuyển y.',
      c: "Sai. Vị Thông đạt nói về trí không sở đắc, chưa đạt đến đoạn mô tả về 'Trí xuất thế' và 'chuyển y'.",
      d: 'Sai. Dị thục không phải là một trong năm địa vị tu hành ngộ nhập Duy thức.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-9-duy-thuc-tam-thap-tung-chanh-van',
  slug: 'duy-thuc-tam-thap-tung-chanh-van',
  title: 'Duy Thức Tam Thập Tụng - Chánh Văn',
  type: 'article',
  status: 'published',
  order: 26,
  createdAt: '2026-07-15',
  updatedAt: '2026-07-15',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/duy-thuc-tam-thap-tung-chanh-van/H%C3%A0nh_tr%C3%ACnh_t%C3%A2m_th%E1%BB%A9c_gi%C3%A1c_ng%E1%BB%99.png',
      readingContent,
      tableOfContents: [
        { id: 'chanh-van-duy-thuc-tam-thap-tung', label: 'Chánh Văn: Duy Thức Tam Thập Tụng' },
        { id: 'chanh-van-tam-nang-bien', label: 'Ba thức Năng biến', indent: 1 },
        { id: 'nguyen-van-chu-han-tam-nang-bien', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-tam-nang-bien', label: 'Dịch nghĩa', indent: 2 },
        { id: 'so-nang-bien-a-lai-da', label: 'Sơ Năng biến - A lại da thức', indent: 1 },
        { id: 'nguyen-van-chu-han-so-nang-bien', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-so-nang-bien', label: 'Dịch nghĩa', indent: 2 },
        { id: 'de-nhi-nang-bien-mat-na', label: 'Đệ nhị Năng biến - Mạt na thức', indent: 1 },
        { id: 'nguyen-van-chu-han-de-nhi-nang-bien', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-de-nhi-nang-bien', label: 'Dịch nghĩa', indent: 2 },
        { id: 'de-tam-nang-bien-luc-thuc', label: 'Đệ tam Năng biến - Sáu thức trước', indent: 1 },
        { id: 'nguyen-van-chu-han-de-tam-nang-bien', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-de-tam-nang-bien', label: 'Dịch nghĩa', indent: 2 },
        { id: 'tam-so-bien-hanh-biet-canh', label: 'Tâm sở Biến hành và Biệt cảnh', indent: 1 },
        { id: 'nguyen-van-chu-han-bien-hanh-biet-canh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-bien-hanh-biet-canh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'tam-so-thien', label: 'Tâm sở Thiện', indent: 1 },
        { id: 'nguyen-van-chu-han-thien', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-thien', label: 'Dịch nghĩa', indent: 2 },
        { id: 'tam-so-phien-nao-can-ban', label: 'Tâm sở Phiền não căn bản', indent: 1 },
        { id: 'nguyen-van-chu-han-phien-nao-can-ban', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-phien-nao-can-ban', label: 'Dịch nghĩa', indent: 2 },
        { id: 'tam-so-tuy-phien-nao', label: 'Tâm sở Tuỳ phiền não', indent: 1 },
        { id: 'nguyen-van-chu-han-tuy-phien-nao', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-tuy-phien-nao', label: 'Dịch nghĩa', indent: 2 },
        { id: 'tam-so-bat-dinh', label: 'Tâm sở Bất định', indent: 1 },
        { id: 'nguyen-van-chu-han-bat-dinh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-bat-dinh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'phan-vi-hien-khoi', label: 'Phận vị hiện khởi của các thức', indent: 1 },
        { id: 'nguyen-van-chu-han-phan-vi-hien-khoi', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-phan-vi-hien-khoi', label: 'Dịch nghĩa', indent: 2 },
        { id: 'duy-thuc-tuong-chuyen-bien', label: 'Các thức chuyển biến - Tất cả Duy thức', indent: 1 },
        { id: 'nguyen-van-chu-han-duy-thuc-tuong-chuyen-bien', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-duy-thuc-tuong-chuyen-bien', label: 'Dịch nghĩa', indent: 2 },
        { id: 'noi-thuc-sanh-phan-biet', label: 'Nội thức sanh các món phân biệt', indent: 1 },
        { id: 'nguyen-van-chu-han-noi-thuc-sanh-phan-biet', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-noi-thuc-sanh-phan-biet', label: 'Dịch nghĩa', indent: 2 },
        { id: 'sanh-tu-tuong-tuc', label: 'Sanh tử tương tục', indent: 1 },
        { id: 'nguyen-van-chu-han-sanh-tu-tuong-tuc', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-sanh-tu-tuong-tuc', label: 'Dịch nghĩa', indent: 2 },
        { id: 'ba-tu-tanh', label: 'Ba tự tánh', indent: 1 },
        { id: 'nguyen-van-chu-han-ba-tu-tanh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-ba-tu-tanh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'ba-vo-tanh', label: 'Ba vô tánh', indent: 1 },
        { id: 'nguyen-van-chu-han-ba-vo-tanh', label: 'Nguyên văn chữ Hán', indent: 2 },
        { id: 'dich-nghia-ba-vo-tanh', label: 'Dịch nghĩa', indent: 2 },
        { id: 'ngu-vi-tu-tap', label: 'Năm địa vị ngộ nhập Duy thức', indent: 1 },
        { id: 'vi-tu-luong', label: '1. Vị Tư lương', indent: 2 },
        { id: 'vi-gia-hanh', label: '2. Vị Gia hạnh', indent: 2 },
        { id: 'vi-thong-dat', label: '3. Vị Thông đạt', indent: 2 },
        { id: 'vi-tu-tap', label: '4. Vị Tu tập', indent: 2 },
        { id: 'vi-cuu-canh', label: '5. Vị Cứu cánh', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-3/duy-thuc-tam-thap-tung-chanh-van/Anatomy_of_Consciousness.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/WOneAhgbeHQ',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/7yeeaJzt4IgPkDyggfnxt4?utm_source=generator&si=24e6bce0cb844322',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Duy Thức Tam Thập Tụng (Chánh Văn)',
    passPercentage: 70,
    questions,
  },
}

export default lesson
