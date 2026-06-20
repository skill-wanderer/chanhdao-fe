import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-pho-giac" class="text-2xl font-bold text-primary-700 dark:text-primary-300">X. CHƯƠNG PHỔ GIÁC</h2>

    <p>Chương này đi thẳng vào nỗi lo rất thực tế của người tu trong đời mạt pháp: khi Phật đã xa, Thánh hiền ẩn khuất, tà sư ngoại đạo lại thịnh hành, thì phải nương ai, tu thế nào và giữ tâm ra sao để không lạc tà kiến. Ngài Phổ Giác Bồ Tát hỏi thay cho người học đạo đời sau, nên toàn chương mang màu sắc rất cụ thể và thực hành.</p>
    <p>Trọng tâm của chương là ba việc liên kết chặt với nhau: nhận diện đúng Thiện tri thức, thấy rõ bốn bệnh vi tế của người tu, và phát tâm Đại thừa cho đúng hướng. Nếu sai ở một trong ba chỗ này, người học rất dễ đi xa mà vẫn không chạm được Viên Giác.</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 font-semibold">Năm câu hỏi cốt lõi Ngài Phổ Giác đặt ra:</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li>Phải cầu bậc nào để dạy bảo?</li>
        <li>Phải y theo phương pháp nào để tu hành?</li>
        <li>Phải làm những hạnh gì?</li>
        <li>Phải trừ những bệnh gì?</li>
        <li>Phải phát tâm như thế nào để khỏi đọa tà kiến?</li>
      </ul>
    </div>

    <h3 id="ngai-pho-giac-bo-tat-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Phổ Giác Bồ Tát hỏi Phật</h3>
    <p>Khi ấy Ngài Phổ Giác Bồ Tát ở trong đại chúng đứng dậy, đi quanh bên hữu của Phật ba vòng, kính cẩn lạy Phật rồi quỳ thẳng chắp tay bạch rằng: Phật đã vì chúng sanh chỉ rõ những chứng bệnh của người tu thiền là bốn tướng, khiến đại chúng gội sạch mê lầm nơi tâm và được an ổn. Đó là một lợi ích lớn chưa từng có.</p>
    <p>Nhưng Ngài cũng nhìn xa hơn: chúng sanh đời sau cách Phật lần xa, các vị Thánh hiền lại ẩn, tà sư ngoại đạo thịnh hành. Vậy người tu phải cầu ai để dạy bảo, phải y theo phương pháp nào, phải làm hạnh gì, phải trừ bệnh gì và phải phát tâm ra sao để khỏi rơi vào tà kiến. Ngài thưa hỏi như vậy ba lần rồi trở về chỗ cũ.</p>
    <h4 id="luoc-giai-ngai-pho-giac-bo-tat-hoi-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Ở chương trước, Phật đã chỉ rõ bốn tướng Ngã, Nhơn, Chúng sanh, Thọ mạng làm chướng ngại người tu. Sang chương này, Ngài Phổ Giác đi thêm một bước nữa: sau khi biết bệnh thô, người học còn phải biết cách chọn thầy, nhận diện bệnh vi tế và giữ phát tâm cho đúng. Nếu không, mây vô minh vẫn còn che mặt trăng Viên Giác, khiến ánh sáng giác ngộ chưa thể chiếu soi cùng khắp.</p>

    <h3 id="phat-khen-ngai-pho-giac-bo-tat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen Ngài Phổ Giác Bồ Tát</h3>
    <p>Đức Thế Tôn khen Ngài Phổ Giác rằng: “Hay lắm và quý lắm”. Vì câu hỏi này không chỉ giúp đại chúng hiện tại, mà còn bố thí cho chúng sanh đời sau “con mắt đạo không sợ”, tức thấy rõ đường tu nên không còn hoang mang trước tà kiến. Phật dạy mọi người chăm chú lắng nghe, vì Ngài sẽ chỉ rõ đường lối tu hành.</p>
    <h4 id="luoc-giai-phat-khen-ngai-pho-giac-bo-tat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>“Đạo nhãn vô úy” nghĩa là thấy đường nên không sợ lạc đường. Phật khen câu hỏi này vì nó không bàn chuyện cao xa suông, mà chạm đúng nỗi nguy của người tu trong thời mạt pháp: không sợ khó tu, chỉ sợ tu sai đường.</p>

    <h3 id="phat-day-ve-thien-tri-thuc" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật dạy về Thiện tri thức</h3>

    <h4 id="phai-cau-bac-co-chanh-tri-kien" class="text-lg font-semibold">3.1. Phải cầu bậc có chánh tri kiến</h4>
    <p>Phật dạy rằng chúng sanh đời sau muốn phát tâm tu Đại thừa thì phải cầu Thiện tri thức, tức người có chánh tri kiến. Vị ấy tâm không trụ nơi tướng phàm phu, cũng không mắc vào cảnh của Thanh văn hay Duyên giác; tuy hiện ở giữa trần lao mà tâm vẫn thường thanh tịnh. Có khi vị ấy đồng ăn đồng ở với người tội lỗi để hóa độ, nhưng vẫn luôn khen ngợi các hạnh thanh tịnh và không để cho chúng sanh thuận theo việc ác.</p>
    <p>Hành giả muốn thành tựu quả Phật phải cầu những người như vậy để được chỉ dạy tu hành. Không có nội tâm Đại thừa thì không đủ chánh nhân; không có ngoại duyên là Thiện tri thức thì khó khỏi đi lạc đường.</p>
    <h4 id="luoc-giai-phai-cau-bac-co-chanh-tri-kien" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật trả lời rất rõ câu hỏi “phải cầu bậc nào dạy bảo?”. Cốt lõi là cầu người có chánh tri kiến. Có thể nhận diện vị ấy ở hai mặt:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Thuận cảnh</strong>: không trụ nơi phước báo phàm phu, cũng không mắc vào lối tu yểm thế ích kỷ của Nhị thừa.</li>
      <li><strong>Nghịch cảnh</strong>: có thể ở trong trần lao mà tâm không ô nhiễm, thậm chí dùng hạnh đồng sự nhiếp để gần người mê mà cứu người mê.</li>
    </ul>
    <p>Thiện tri thức theo nghĩa này là người biết rõ chân và vọng, biết bệnh của chúng sanh và biết pháp dược của Phật để đối trị. Không phải cứ nói hay, có tiếng tăm hay có thần thông là đủ.</p>

    <h4 id="het-long-cung-duong-khong-khoi-tam-khinh-thuong" class="text-lg font-semibold">3.2. Hết lòng cung dường, không khởi tâm khinh thường</h4>
    <p>Nếu gặp được Thiện tri thức như thế, hành giả phải hết lòng cung dường, không tiếc thân mạng. Khi vị ấy giữ bốn oai nghi thanh tịnh, mình cung kính đã đành; nhưng ngay cả khi vị ấy thị hiện lẫn lộn với chúng sanh để làm hạnh đồng sự nhiếp, hành giả cũng chớ nên sanh tâm khinh dễ.</p>
    <p>Phật dạy rằng nếu đối với Thiện tri thức mà không khởi một niệm khinh thường, thì “tâm hoa” sẽ nở rộng, chiếu sáng khắp mười phương và thành tựu quả Phật.</p>
    <h4 id="luoc-giai-het-long-cung-duong-khong-khoi-tam-khinh-thuong" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đại ý ở đây là “y pháp bất y nhân”. Nếu vị Thiện tri thức có thể giải nghĩa sâu xa của Phật và dẫn người tu đi vào chánh đạo, thì không nên vì một vài hình tướng bên ngoài mà sanh khinh chê. Cũng như không nên bỏ viên ngọc chỉ vì cái đãi xấu, hay không chịu dùng đuốc sáng chỉ vì người cầm đuốc có ghẻ lở. Người cầu đạo phải nhìn thẳng vào chỗ pháp được chỉ bày và công năng dẫn đường của bậc thầy.</p>

    <h3 id="phat-noi-bon-benh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Phật nói bốn bệnh</h3>
    <p>Phật dạy rằng vị Thiện tri thức chân thật đã chứng diệu pháp thì rời được bốn bệnh lớn của người tu. Bốn bệnh này rất dễ lẫn với công phu, nên nếu không soi kỹ thì càng tu càng kẹt. Người quán sát đúng để trừ bốn bệnh ấy gọi là chánh quán; trái lại là tà quán.</p>

    <h4 id="benh-tac" class="text-lg font-semibold">4.1. Bệnh tác</h4>
    <p>Bệnh tác là chấp rằng: “Bản tâm của tôi muốn cầu Viên Giác nên phải làm tất cả hạnh lành để được Viên Giác”. Phật dạy đó là bệnh, vì tánh Viên Giác không phải do làm mà thành. Dùng cái hữu vi tạo tác để mong đạt cảnh vô vi thanh tịnh thì không thể tương ưng.</p>
    <h4 id="luoc-giai-benh-tac" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Điểm này rất dễ hiểu lầm. Phật không bảo người mới tu bỏ hết việc lành. Ngài chỉ dạy rằng có hai giai đoạn:</p>
    <ol class="list-decimal space-y-2 pl-6">
      <li>Giai đoạn đầu, hành giả vẫn phải học tu, bỏ dữ làm lành, lấy vọng trị vọng, như dùng tiếng gõ bảng để dẹp tiếng ồn, hay dùng bè để qua sông.</li>
      <li>Giai đoạn sau, khi công phu đã đưa đến chỗ lặng, phải buông chấp nơi việc làm, như đến bờ rồi thì bỏ bè. Nếu còn ôm chặt cái “ta đang làm để được giác ngộ”, bệnh tác vẫn còn nguyên.</li>
    </ol>
    <p>Vì vậy, tu vẫn phải tu, nhưng không được chấp Viên Giác là món đồ do mình tạo tác mà có.</p>

    <h4 id="benh-nham" class="text-lg font-semibold">4.2. Bệnh nhậm</h4>
    <p>Bệnh nhậm là chấp rằng: “Tôi nay không cần đoạn sanh tử, cũng không cần cầu Niết bàn. Người muốn cầu Viên Giác chớ nên móng niệm diệt sanh tử hay cầu Niết bàn, cứ mặc cho mọi sự tùy pháp tánh mà sanh diệt”. Phật dạy kiểu buông xuôi đó cũng không thể nhập Viên Giác.</p>
    <h4 id="luoc-giai-benh-nham" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đây là lỗi hiểu lầm rằng Viên Giác không do tu mà vào được, rồi quay sang mặc kệ nghiệp lực xoay chuyển, không sợ tội lỗi, không ham phước lành, sanh tử chẳng chê, Niết bàn chẳng quý. Bề ngoài có vẻ “siêu thoát”, nhưng thật ra là buông xuôi và mất hết sức tu.</p>

    <h4 id="benh-chi" class="text-lg font-semibold">4.3. Bệnh chỉ</h4>
    <p>Bệnh chỉ là chấp rằng: “Muốn cầu Viên Giác thì phải dứt sạch các vọng niệm để tất cả pháp được bình đẳng vắng lặng”. Phật dạy nếu còn lấy cái “dừng đứng” ấy làm chỗ nương để mong nhập Viên Giác thì vẫn còn bệnh.</p>
    <h4 id="luoc-giai-benh-chi" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chữ “chỉ” ở đây là ép vọng niệm dừng lại. Hành giả thấy bệnh tác làm tâm động, bệnh nhậm làm tâm phóng túng, nên quay qua bám vào chỗ dừng. Nhưng tánh Viên Giác vốn không có niệm để trừ, cũng không có cái “chỉ” để chấp. Nếu còn lấy ý chí đè vọng mà cầu giác, vẫn là còn ở trong đối đãi.</p>

    <h4 id="benh-diet" class="text-lg font-semibold">4.4. Bệnh diệt</h4>
    <p>Bệnh diệt là chấp rằng: “Muốn cầu Viên Giác thì phải đoạn sạch phiền não, thân tâm và cảnh vật rốt ráo vắng lặng”. Phật dạy dùng cái “diệt” ấy mà cầu Viên Giác là chưa đúng, vì tánh Viên Giác không phải chỉ có mặt tịch lặng.</p>
    <h4 id="luoc-giai-benh-diet" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Tánh Viên Giác vừa <strong>tịch</strong> vừa <strong>chiếu</strong>. Nếu chỉ chấp một bên vắng lặng mà bỏ mất mặt linh tri sáng suốt, thì đó chưa phải Viên Giác trọn vẹn. Bệnh diệt vì thế là thiên lệch về một phía.</p>

    <h4 id="tom-lai-bon-benh" class="text-lg font-semibold">4.5. Tóm lại bốn bệnh</h4>
    <p>Người cầu đạo phải rời cả bốn bệnh Tác, Nhậm, Chỉ, Diệt mới có thể nhập Viên Giác thanh tịnh. Dùng bốn bệnh ấy để soi lại tâm mình, còn vướng món nào thì món ấy đều là chỗ cần trừ.</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Tác</strong>: lấy việc làm hữu vi để cầu Viên Giác.</li>
        <li><strong>Nhậm</strong>: buông xuôi, mặc kệ, không chịu hạ thủ công phu.</li>
        <li><strong>Chỉ</strong>: chấp vào việc ép vọng niệm phải dừng sạch.</li>
        <li><strong>Diệt</strong>: chấp riêng một bên vắng lặng mà quên mặt sáng biết của Viên Giác.</li>
      </ul>
    </div>
    <h4 id="luoc-giai-tom-lai-bon-benh" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Điểm chung của cả bốn bệnh là đều đem một cái gì đó có đối đãi để cầu chỗ không đối đãi. Vì tánh Viên Giác vốn bất sanh bất diệt, bất cấu bất tịnh, nên chỉ cần còn chấp một phương tiện như cứu cánh thì bệnh vẫn chưa dứt.</p>

    <h3 id="phat-tra-loi-phai-lam-nhung-hanh-gi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Phật trả lời: Phải làm những hạnh gì?</h3>
    <p>Phật dạy rằng chúng sanh đời sau muốn tu hành thì suốt đời phải kính trọng và cúng dường Thiện hữu tri thức. Khi ở gần, chớ sanh tâm khinh lờn; khi đi xa, chớ sanh tâm hờn giận. Dù Thiện tri thức hiện ra cảnh thuận hay nghịch, tâm mình vẫn phải như hư không, không vì đó mà đổi khác.</p>
    <p>Hành giả lại phải quán sát rằng thân tâm mình, thầy bạn và tất cả chúng sanh đều đồng một bản thể bình đẳng rốt ráo không khác. Tu được hạnh như thế mới có thể nhập Viên Giác.</p>
    <h4 id="luoc-giai-phat-tra-loi-phai-lam-nhung-hanh-gi" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Hạnh Bồ Tát rất nhiều, nhưng trong thời mạt pháp, hạnh thờ thầy và gần Thiện tri thức đặc biệt quan trọng. Không có Minh sư, người tu rất dễ rơi vào tà kiến. Quán thầy, mình và chúng sanh đồng một thể Viên Giác sẽ giúp bỏ tánh kiêu mạn, quên bản ngã và giữ được lòng cung kính bền chắc.</p>

    <h3 id="phat-tra-loi-phai-tru-bo-benh-gi" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Phật trả lời: Phải trừ bỏ bệnh gì?</h3>
    <p>Phật dạy rằng chúng sanh đời sau không thành đạo, cốt ở chỗ còn tất cả hạt giống thương ghét, nhân ngã từ vô thỉ đến nay. Vì thế nên chẳng được giải thoát. Nếu người nhìn kẻ oan gia cũng như cha mẹ, đối với các pháp không còn thương ghét, không phân biệt tự tha, thì người ấy mới thật trừ được bệnh.</p>
    <h4 id="luoc-giai-phat-tra-loi-phai-tru-bo-benh-gi" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chương trước đã nói việc trừ thương ghét ở phần thô; đến đây Phật nhắc sâu hơn ở phần chủng tử vi tế. Chỉ cần còn một chút thương ghét ngấm ngầm, người tu vẫn chưa nhập được Viên Giác. Bao giờ thấy oan gia như cha mẹ, sanh tử và Niết bàn không hai, khi ấy gốc thương ghét mới thật sự nhổ tận.</p>

    <h3 id="phat-tra-loi-phai-phat-tam-the-nao" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">7. Phật trả lời: Phải phát tâm thế nào?</h3>
    <p>Phật dạy chúng sanh đời sau muốn cầu Viên Giác thì phải phát tâm như sau: nguyện độ tất cả chúng sanh khắp hư không đều rốt ráo vào Viên Giác; nhưng người được Viên Giác không chấp nơi Viên Giác; lại trừ hết các tướng Nhân, Ngã và các vọng chấp điên đảo. Phát tâm như vậy mới khỏi đọa tà kiến.</p>
    <h4 id="luoc-giai-phat-tra-loi-phai-phat-tam-the-nao" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phần lược giải trong bản gốc gom phát tâm đúng thành bốn mặt rất rõ:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Phát tâm quảng đại</strong>: nguyện độ tất cả chúng sanh khắp mười phương.</li>
      <li><strong>Phát tâm rốt ráo</strong>: độ chúng sanh vào Viên Giác cứu cánh.</li>
      <li><strong>Phát tâm chân thường</strong>: ở trong Viên Giác mà không chấp nơi Viên Giác.</li>
      <li><strong>Phát tâm không điên đảo</strong>: không khởi các tướng Ngã, Nhân, Chúng sanh, Thọ mạng hay tướng độ sanh để chấp giữ.</li>
    </ul>
    <p>Hai mặt đầu là đại bi, hai mặt sau là đại trí. Người tu đi lâu được hay không, phần lớn nhờ nguyện lực này làm động cơ thúc đẩy. Có nguyện tha thiết thì hạnh mới bền và đường tu mới khỏi lệch.</p>

    <h3 id="phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">8. Phật nói bài kệ tóm lại các nghĩa trên</h3>
    <p>Đức Thế Tôn dùng bài kệ để gom lại toàn bộ ý chính của chương: phải cầu người chánh kiến, phải trừ bốn bệnh, phải giữ lòng cung kính với Thiện tri thức, phải giữ giới thanh tịnh và phát tâm độ sanh rốt ráo mà không chấp tướng.</p>
    <div class="space-y-1 italic">
      <p>Phổ Giác! Ông nên biết:</p>
      <p>Các chúng sanh đời sau,</p>
      <p>Muốn cầu thiện tri thức</p>
      <p>Phải cầu người chánh kiến,</p>
      <p>Tâm xa lìa Nhị thừa,</p>
      <p>Và trừ bốn món bệnh:</p>
      <p>Làm, dừng, mặc kệ, diệt.</p>
      <p>Gần Thầy chớ khinh lờn,</p>
      <p>Cách Thầy chớ sầu hận.</p>
      <p>Thấy những cảnh giới lạ,</p>
      <p>Tâm phải sanh hy hữu,</p>
      <p>Xem như Phật ra đời,</p>
      <p>Chẳng phạm các tội lỗi,</p>
      <p>Giới căn hằng thanh tịnh.</p>
      <p>Độ tất cả chúng sanh,</p>
      <p>Rốt ráo vào Viên Giác,</p>
      <p>Không còn tướng ngã, nhân.</p>
      <p>Phải y chánh trí huệ,</p>
      <p>Mới được khỏi tà kiến,</p>
      <p>Chứng Giác vào Niết bàn.</p>
    </div>
    <h4 id="luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Bài kệ chốt lại rất gọn: chọn đúng thầy, trị đúng bệnh, giữ đúng hạnh và phát đúng tâm. Toàn bộ chương Phổ Giác thực chất là một bản đồ để người tu đời sau tự giữ mình khỏi lệch hướng giữa đường.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Theo lời Phật dạy trong chương Phổ Giác, tiêu chuẩn cốt lõi để nhận diện một vị Thiện tri thức là gì?',
    options: {
      a: 'Phải là người có chánh tri kiến, không trụ vào tướng phàm phu hay nhị thừa.',
      b: 'Phải là người có khả năng biện luận để bào chữa cho mọi hành vi của mình.',
      c: 'Phải là người luôn sống tách biệt, không bao giờ tiếp xúc với người tội lỗi.',
      d: 'Phải là người có thần thông và các phép lạ biến hóa.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Thiện tri thức được nhận diện trước hết ở chỗ có chánh tri kiến, không trụ nơi tướng phàm phu và không mắc vào cảnh giới Nhị thừa.',
      b: 'Sai. Người chân chính không lấy lý luận miễn cưỡng để bào chữa cho lỗi mình.',
      c: 'Sai. Có khi vị ấy còn thị hiện đồng sự nhiếp, gần gũi người tội lỗi để hóa độ.',
      d: 'Sai. Chương này không lấy thần thông làm tiêu chuẩn nhận diện.',
    },
  },
  {
    question: 'Cụm từ “Đạo nhãn vô úy” mà Phật dùng để khen Ngài Phổ Giác có nghĩa gì?',
    options: {
      a: 'Con mắt đạo sáng suốt, không lo sợ bị đọa vào tà kiến.',
      b: 'Khả năng nhìn thấy tương lai mà không sợ hãi.',
      c: 'Sự dũng cảm trực tiếp chiến thắng ngoại đạo.',
      d: 'Phương pháp tu làm cho mắt không bị mờ bởi vô minh.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Thấy rõ đường đạo nên không còn hoang mang và sợ rơi vào tà kiến.',
      b: 'Sai. Ở đây không nói đến năng lực thấy tương lai.',
      c: 'Sai. Trọng tâm là thấy đúng đường, không phải chiến thắng ai ở bên ngoài.',
      d: 'Sai. Cụm từ này chỉ sự sáng tỏ về đường tu, không phải một kỹ thuật riêng cho mắt.',
    },
  },
  {
    question: 'Tại sao việc “làm các hạnh lành để cầu Viên Giác” lại bị gọi là “bệnh tác”?',
    options: {
      a: 'Vì tánh Viên Giác là vô vi, không thể dùng tạo tác hữu vi mà đạt được.',
      b: 'Vì làm việc lành sẽ khiến tâm bị động, nên tuyệt đối không nên làm.',
      c: 'Vì người tu hành không được làm gì ngoài ngồi thiền.',
      d: 'Vì các hạnh lành chỉ đưa đến phước báo nhân thiên, không có chút giá trị nào.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Cốt lõi của bệnh tác là lấy cái làm hữu vi để mong đạt chỗ vô vi thanh tịnh.',
      b: 'Sai. Ở giai đoạn đầu người tu vẫn cần bỏ dữ làm lành, chỉ là không được chấp đó là cứu cánh.',
      c: 'Sai. Phật không dạy cấm mọi hành động.',
      d: 'Sai. Việc lành vẫn là phương tiện cần thiết, chỉ không nên chấp nó như nguyên nhân trực tiếp tạo ra Viên Giác.',
    },
  },
  {
    question: 'Người mắc “bệnh nhậm” trong tu hành thường có thái độ như thế nào?',
    options: {
      a: 'Mặc kệ mọi chuyện, không cầu Niết bàn cũng chẳng đoạn sanh tử.',
      b: 'Chăm chỉ làm việc thiện nhưng vẫn giữ tâm không dính mắc.',
      c: 'Sợ hãi sanh tử nên nỗ lực tìm giải thoát thật nhanh.',
      d: 'Luôn cố gắng diệt trừ mọi phiền não và vọng tưởng.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Bệnh nhậm là buông xuôi, để mặc sanh tử và Niết bàn như một cái cớ để không hạ thủ công phu.',
      b: 'Sai. Đây không phải mô tả của bệnh nhậm.',
      c: 'Sai. Người mắc bệnh nhậm không phải người quá tinh tấn, mà là người phó mặc.',
      d: 'Sai. Đó gần với khuynh hướng của bệnh diệt hơn.',
    },
  },
  {
    question: 'Sự khác biệt cơ bản giữa “bệnh diệt” và tánh Viên Giác chân thật là gì?',
    options: {
      a: 'Bệnh diệt là sự vắng lặng hoàn toàn, còn Viên Giác là sự náo nhiệt của trần cảnh.',
      b: 'Bệnh diệt là pháp của phàm phu, còn Viên Giác là pháp riêng của Nhị thừa.',
      c: 'Bệnh diệt chỉ chú trọng vào thân, còn Viên Giác chỉ chú trọng vào tâm.',
      d: 'Bệnh diệt chỉ chấp mặt tịch, còn Viên Giác vừa tịch vừa chiếu.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Viên Giác không phải là náo nhiệt của trần cảnh.',
      b: 'Sai. Chương này không phân biệt theo cách đó.',
      c: 'Sai. Bệnh diệt không phải chỉ nói riêng về thân.',
      d: 'Đúng. Viên Giác không chỉ vắng lặng mà còn sáng biết; chấp riêng mặt tịch là thiên lệch.',
    },
  },
  {
    question: 'Khi vị Thiện tri thức thực hiện hạnh “đồng sự nhiếp”, hành giả cần làm gì để thành tựu quả Phật?',
    options: {
      a: 'Chỉ cung kính khi vị ấy giữ oai nghi thanh tịnh, còn khi thị hiện sai khác thì thôi.',
      b: 'Phải phê phán những hành động ấy để giúp vị ấy thức tỉnh.',
      c: 'Nên giữ khoảng cách để tự bảo vệ sự thanh tịnh của mình.',
      d: 'Không khởi tâm khinh thường, vẫn giữ lòng cung kính như đối với Phật.',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Chỉ kính ở lúc thuận mắt mình vẫn chưa phải lòng tin sâu.',
      b: 'Sai. Phật dạy không nên sanh tâm khinh dễ vì hình tướng thị hiện.',
      c: 'Sai. Người học đạo cần biết y pháp bất y nhân, không vội lùi xa vì vẻ ngoài khó hiểu.',
      d: 'Đúng. Không khởi niệm khinh thường mới khiến tâm hoa nở rộng và thành tựu quả Phật.',
    },
  },
  {
    question: 'Để trừ bỏ bệnh thương ghét ở mức độ vi tế, Phật dạy hành giả phải làm gì?',
    options: {
      a: 'Chỉ cần không biểu lộ thương ghét ra hành động bên ngoài.',
      b: 'Coi kẻ oan gia như cha mẹ, tâm không phân biệt tự tha hay thương ghét.',
      c: 'Diệt sạch mọi cảm xúc để trở nên vô cảm như gỗ đá.',
      d: 'Tránh xa người mình ghét và chỉ gần gũi người mình thương.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Không biểu lộ ra ngoài mà bên trong còn chủng tử thương ghét thì gốc bệnh vẫn còn.',
      b: 'Đúng. Bình đẳng với oan gia như với cha mẹ là dấu hiệu chủng tử thương ghét đang được nhổ tận gốc.',
      c: 'Sai. Bình đẳng không đồng nghĩa với vô cảm.',
      d: 'Sai. Cách đó chỉ nuôi lớn thêm phân biệt tự tha.',
    },
  },
  {
    question: 'Theo chương Phổ Giác, phát tâm đúng đắn để khỏi đọa tà kiến cần bao gồm điều gì?',
    options: {
      a: 'Nguyện tiêu diệt hết ngoại đạo để bảo vệ chánh pháp.',
      b: 'Nguyện độ tất cả chúng sanh vào Viên Giác và không chấp vào tướng độ sanh hay tướng Viên Giác.',
      c: 'Nguyện làm thật nhiều việc thiện để tích lũy công đức cho đời sau.',
      d: 'Chỉ cần nguyện cho bản thân sớm đạt Niết bàn vắng lặng.',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Phát tâm Đại thừa không đặt trên nền thù ghét.',
      b: 'Đúng. Phát tâm đúng gồm cả đại bi độ sanh và đại trí không chấp tướng.',
      c: 'Sai. Làm việc thiện để cầu phước báo vẫn chưa phải phát tâm cầu Viên Giác.',
      d: 'Sai. Chỉ lo giải thoát riêng mình chưa phải tâm Đại thừa trọn vẹn.',
    },
  },
  {
    question: 'Tại sao hành giả phải dùng “vọng để trừ vọng” trong giai đoạn đầu tu hành?',
    options: {
      a: 'Vì hữu vi và vô vi thực chất là một, không cần phân biệt.',
      b: 'Vì Phật muốn thử thách lòng kiên trì của hành giả qua nhiều tầng nấc.',
      c: 'Vì nếu không dùng phương tiện hữu vi ban đầu thì khó lòng đi đến chỗ vô vi.',
      d: 'Vì vọng tưởng là bản chất thật của tâm, nên không thể diệt trừ hoàn toàn.',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hữu vi và vô vi không thể lẫn làm một ở giai đoạn công phu.',
      b: 'Sai. Đây là phương tiện cần thiết chứ không phải phép thử.',
      c: 'Đúng. Giống như dùng bè qua sông hay dùng tiếng gõ bảng để dẹp tiếng ồn, người tu cần phương tiện ban đầu để dọn đường.',
      d: 'Sai. Vọng tưởng không phải bản tánh chân thật của tâm.',
    },
  },
  {
    question: '“Bệnh chỉ” trong tu tập thiền định được mô tả là gì?',
    options: {
      a: 'Dùng ý chí để dừng đứng các vọng niệm, cầu sự bình đẳng vắng lặng.',
      b: 'Cố gắng làm thật nhiều việc thiện để tâm được bình an.',
      c: 'Để mặc tâm ý tự do bay bổng không kìm chế.',
      d: 'Tiêu diệt hoàn toàn cả thân lẫn tâm để không còn phiền não.',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Bệnh chỉ là chấp vào việc ép vọng niệm dừng sạch để mong vào Viên Giác.',
      b: 'Sai. Đây gần với bệnh tác.',
      c: 'Sai. Đó là biểu hiện của bệnh nhậm.',
      d: 'Sai. Đó nghiêng về bệnh diệt.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-10-chuong-pho-giac',
  slug: 'bai-thu-10-chuong-pho-giac',
  title: 'Bài Thứ 10 - Chương Phổ Giác',
  type: 'article',
  status: 'published',
  order: 13,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-10-chuong-pho-giac/L%E1%BB%99_tr%C3%ACnh_%C4%91%E1%BA%A1t_T%C3%A1nh_Vi%C3%AAn_Gi%C3%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-pho-giac', label: 'X. CHƯƠNG PHỔ GIÁC' },
        { id: 'ngai-pho-giac-bo-tat-hoi-phat', label: '1. Ngài Phổ Giác Bồ Tát hỏi Phật', indent: 1 },
        { id: 'luoc-giai-ngai-pho-giac-bo-tat-hoi-phat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-khen-ngai-pho-giac-bo-tat', label: '2. Phật khen Ngài Phổ Giác Bồ Tát', indent: 1 },
        { id: 'luoc-giai-phat-khen-ngai-pho-giac-bo-tat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-day-ve-thien-tri-thuc', label: '3. Phật dạy về Thiện tri thức', indent: 1 },
        { id: 'phai-cau-bac-co-chanh-tri-kien', label: '3.1. Phải cầu bậc có chánh tri kiến', indent: 2 },
        { id: 'luoc-giai-phai-cau-bac-co-chanh-tri-kien', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'het-long-cung-duong-khong-khoi-tam-khinh-thuong', label: '3.2. Hết lòng cung dường, không khởi tâm khinh thường', indent: 2 },
        { id: 'luoc-giai-het-long-cung-duong-khong-khoi-tam-khinh-thuong', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'phat-noi-bon-benh', label: '4. Phật nói bốn bệnh', indent: 1 },
        { id: 'benh-tac', label: '4.1. Bệnh tác', indent: 2 },
        { id: 'luoc-giai-benh-tac', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'benh-nham', label: '4.2. Bệnh nhậm', indent: 2 },
        { id: 'luoc-giai-benh-nham', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'benh-chi', label: '4.3. Bệnh chỉ', indent: 2 },
        { id: 'luoc-giai-benh-chi', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'benh-diet', label: '4.4. Bệnh diệt', indent: 2 },
        { id: 'luoc-giai-benh-diet', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'tom-lai-bon-benh', label: '4.5. Tóm lại bốn bệnh', indent: 2 },
        { id: 'luoc-giai-tom-lai-bon-benh', label: 'LƯỢC GIẢI', indent: 3 },
        { id: 'phat-tra-loi-phai-lam-nhung-hanh-gi', label: '5. Phật trả lời: Phải làm những hạnh gì?', indent: 1 },
        { id: 'luoc-giai-phat-tra-loi-phai-lam-nhung-hanh-gi', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-tra-loi-phai-tru-bo-benh-gi', label: '6. Phật trả lời: Phải trừ bỏ bệnh gì?', indent: 1 },
        { id: 'luoc-giai-phat-tra-loi-phai-tru-bo-benh-gi', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-tra-loi-phai-phat-tam-the-nao', label: '7. Phật trả lời: Phải phát tâm thế nào?', indent: 1 },
        { id: 'luoc-giai-phat-tra-loi-phai-phat-tam-the-nao', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: '8. Phật nói bài kệ tóm lại các nghĩa trên', indent: 1 },
        { id: 'luoc-giai-phat-noi-bai-ke-tom-lai-cac-nghia-tren', label: 'LƯỢC GIẢI', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-10-chuong-pho-giac/Mapping_Enlightenment.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/WDOpM-RR5Cs',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/6N00aMQyOXBIvx6xOnCMbj?utm_source=generator&si=2773058cec5644aa',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Phổ Giác',
    passPercentage: 70,
    questions,
  },
}

export default lesson
