import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section>
    <h2 id="chuong-hien-thien-thu" class="text-2xl font-bold text-primary-700 dark:text-primary-300">XII. CHƯƠNG HIỀN THIỆN THỦ</h2>

    <p>Chương Hiền Thiện Thủ đặt ra câu hỏi cuối cùng theo tinh thần lưu thông kinh điển: kinh này tên gì, phải phụng trì ra sao, công đức của người tu theo kinh này thế nào, phải bảo hộ người thọ trì ra sao và nên truyền bá ở địa vị nào. Vì vậy chương này không chỉ nhắc lại giá trị của Kinh Viên Giác, mà còn mở ra trách nhiệm giữ gìn và trao truyền chánh pháp cho đời sau.</p>
    <p>Từ đó, Phật nêu năm tên của kinh, giải rõ ý nghĩa từng tên, so sánh công đức nghe, giảng và trì kinh, rồi khuyên các đệ tử cùng các vị thiện thần phải hộ trì người tu trong đời mạt pháp. Toàn chương mang tinh thần rất rõ: hiểu đúng kinh, quý trọng kinh và bảo hộ người đang nương kinh mà tu.</p>

    <h3 id="ngai-hien-thien-thu-bo-tat-hoi-phat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">1. Ngài Hiền Thiện Thủ Bồ Tát hỏi Phật</h3>
    <p>Khi ngài Hiền Thiện Thủ Bồ Tát ở trong đại chúng đứng dậy, đi quanh bên hữu của Phật ba vòng, rồi quỳ thẳng chắp tay bạch Phật rằng: Bạch đức Đại bi Thế Tôn, ngài đã vì chúng con và các chúng sanh đời sau, rộng rãi giảng dạy cho chúng con hiểu ngộ được những việc không thể nghĩ bàn.</p>
    <p>Rồi Ngài thưa hỏi năm điều rất thiết thực cho việc lưu thông và phụng trì kinh:</p>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li>Kinh Đại thừa này tên gì?</li>
        <li>Chúng con phải phụng trì như thế nào?</li>
        <li>Chúng sanh tu theo kinh này sẽ được công đức gì?</li>
        <li>Chúng con phải bảo hộ những người thọ trì kinh này ra sao?</li>
        <li>Phải truyền bá kinh giáo này ở địa vị nào?</li>
      </ul>
    </div>
    <p>Ngài Hiền Thiện Thủ Bồ Tát thưa thỉnh như vậy ba lần, kính cẩn lạy Phật rồi trở lui.</p>
    <h4 id="luoc-giai-ngai-hien-thien-thu-bo-tat-hoi-phat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đoạn kinh này có hai phần rất rõ. Trước hết, ngài Hiền Thiện Thủ Bồ Tát tán thán Phật vì đã giảng giải cho chúng sanh những việc không thể nghĩ bàn. Kế đó, Ngài thay mặt đại chúng hỏi đủ năm điều then chốt để kinh không chỉ được hiểu mà còn được phụng trì và truyền bá đúng hướng.</p>
    <p>Nói gọn, câu hỏi của Ngài gom lại quanh hai trọng tâm: <strong>giá trị của kinh</strong> và <strong>trách nhiệm của người giữ kinh</strong>. Đây là bước chuyển rất tự nhiên sau khi người học đã nghe xong phần giáo nghĩa và bắt đầu nghĩ đến chuyện gìn giữ, thực hành và trao truyền cho đời sau.</p>

    <h3 id="phat-khen-ngai-hien-thien-thu-bo-tat" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">2. Phật khen ngài Hiền Thiện Thủ Bồ Tát</h3>
    <p>Khi ấy đức Thế Tôn khen ngài Hiền Thiện Thủ Bồ Tát và dạy rằng: Này Thiện nam, hay lắm và quý lắm. Ông vì các vị Bồ Tát và chúng sanh đời sau, thưa hỏi Như Lai tên kinh và công đức trì kinh này. Các ông nên chăm chú nghe lời ta chỉ giáo.</p>
    <h4 id="luoc-giai-phat-khen-ngai-hien-thien-thu-bo-tat" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Phật khen vì câu hỏi này không còn dừng ở chỗ hiểu nghĩa, mà đi đến việc làm sao để mưa pháp tiếp tục gội nhuần chúng sanh đời sau. Nếu không có người hỏi về thọ trì, công đức và bảo hộ kinh, thì pháp quý rất dễ bị xem nhẹ hoặc truyền sai.</p>
    <p>Chỗ này cũng nhắc người học rằng nghe kinh chưa phải đoạn cuối. Sau phần nghe hiểu phải có phần phụng trì, bảo vệ và giúp người khác có duyên tiếp cận chánh pháp.</p>

    <h3 id="phat-noi-ten-kinh-nay" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">3. Phật nói tên kinh này</h3>
    <p>Phật dạy rằng kinh này không phải chỉ một mình Ngài nói, mà các đức Phật trong mười phương nhiều như trăm ngàn muôn ức lần số cát sông Hằng cũng đều nói kinh này. Các đức Phật trong ba đời đều bảo hộ kinh này, và mười phương các vị Bồ Tát đều quy y kinh này.</p>

    <h4 id="kinh-nay-la-trong-con-mat-cua-12-bo-kinh" class="text-lg font-semibold">3.1. Kinh này là tròng con mắt của 12 bộ kinh</h4>
    <p>Phật gọi kinh này là tròng con mắt của 12 bộ kinh. Giáo pháp của Phật tuy nhiều, nhưng đều nhắm về một mục đích là dạy chúng sanh tu hành thành Phật. Mà muốn thành Phật thì phải ngộ nhập Viên Giác, nên kinh này được xem là phần tinh yếu bậc nhất.</p>
    <div class="rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-secondary-900 dark:bg-secondary-950/30">
      <p class="mb-2 font-semibold">Bài kệ tóm 12 bộ kinh được nêu trong lược giải:</p>
      <div class="space-y-1 italic">
        <p>Trường hàng, Trùng tụng và Cô khởi</p>
        <p>Thí dụ, Nhơn duyên cùng Tự thuyết</p>
        <p>Bổn sanh, Bổn sự, Vị tằng hữu</p>
        <p>Phương quảng, Luận nghị và Ký biệt</p>
      </div>
    </div>

    <h4 id="kinh-nay-co-nam-ten" class="text-lg font-semibold">3.2. Kinh này có năm tên</h4>
    <p>Phật dạy rằng kinh này có năm tên và người học phải hết lòng cung kính phụng trì:</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Đại Phương Quảng Viên Giác Đà La Ni Kinh</strong></li>
      <li><strong>Tu Đa La Liễu Nghĩa Kinh</strong></li>
      <li><strong>Bí Mật Vương Tam Muội Kinh</strong></li>
      <li><strong>Như Lai Quyết Định Cảnh Giới Kinh</strong></li>
      <li><strong>Như Lai Tạng Tự Tánh Sai Biệt Kinh</strong></li>
    </ul>

    <h4 id="y-nghia-dai-phuong-quang-vien-giac-da-la-ni-kinh" class="text-lg font-semibold">3.3. Ý nghĩa tên “Đại Phương Quảng Viên Giác Đà La Ni Kinh”</h4>
    <p>Tánh Viên Giác quảng đại, phương viên, bao trùm và gìn giữ các pháp. Chữ “Đà La Ni” nghĩa là “Tổng trì”, tức bao trùm và gìn giữ các pháp.</p>
    <ul class="list-disc space-y-2 pl-6">
      <li><strong>Pháp Đà La Ni</strong>: Một chữ, một danh hiệu hay một câu mà bao trùm tất cả chữ, tất cả danh hiệu và tất cả câu.</li>
      <li><strong>Nghĩa Đà La Ni</strong>: Như nói Chơn như, Duy tâm, Duy thức, Pháp giới v.v. là đã tóm thâu sự vật sai biệt.</li>
      <li><strong>Định Đà La Ni</strong>: Do sức định mà tinh thần thống nhất tập trung lại, nên phát huy được lực lượng rất mạnh.</li>
      <li><strong>Chú Đà La Ni</strong>: Tức là thần chú; do hành giả tập trung tinh thần trì chú, nên có sức mạnh làm cho hành giả được toại bản nguyện.</li>
    </ul>

    <h4 id="y-nghia-tu-da-la-lieu-nghia-kinh" class="text-lg font-semibold">3.4. Ý nghĩa tên “Tu Đa La Liễu Nghĩa Kinh”</h4>
    <p>“Tu Đa La” nghĩa là “Khế kinh”, tức kinh này hiệp với chơn lý và căn cơ của chúng sanh. “Liễu Nghĩa” là nghĩa lý rốt ráo đứng đắn.</p>
    <p>Kinh của Phật có hai loại. <strong>Bất liễu nghĩa kinh</strong> là những bộ kinh Phật tùy quốc độ, tùy thời đại và tùy căn cơ mà phương tiện nói ra, nghĩa lý chưa rốt ráo. Còn <strong>liễu nghĩa kinh</strong> là những bộ kinh nghĩa lý rốt ráo đúng đắn, Phật nói đúng chân lý, không có tùy thời tùy cơ. Kinh Viên Giác thuộc về kinh Liễu Nghĩa của Đại thừa.</p>

    <h4 id="y-nghia-bi-mat-vuong-tam-muoi-kinh" class="text-lg font-semibold">3.5. Ý nghĩa tên “Bí Mật Vương Tam Muội Kinh”</h4>
    <p>“Tam muội” tức là “Tam ma địa”, có thể hiểu là đẳng trì, chánh định, chánh thụ hay chánh tư duy. Viên Giác tam muội cao cả hơn các pháp tam muội khác nên gọi là “vương”.</p>
    <p>Chữ “bí mật” ở đây có nghĩa là pháp Viên Giác tam muội này chỉ có Phật mới hoàn toàn thấu rõ. Chúng sanh thì không biết, cho đến bậc Đẳng Giác Bồ Tát cũng chưa thể thấu tột, nên gọi là bí mật.</p>

    <h4 id="y-nghia-nhu-lai-quyet-dinh-canh-gioi-kinh" class="text-lg font-semibold">3.6. Ý nghĩa tên “Như Lai Quyết Định Cảnh Giới Kinh”</h4>
    <p>Cảnh giới Viên Giác này chỉ có đức Như Lai mới quyết định chứng nhập được. Từ bậc Đẳng Giác Bồ Tát trở xuống vẫn còn ở trong vòng cầu chứng nhập, nên chưa thể gọi là quyết định.</p>

    <h4 id="y-nghia-nhu-lai-tang-tu-tanh-sai-biet-kinh" class="text-lg font-semibold">3.7. Ý nghĩa tên “Như Lai Tạng Tự Tánh Sai Biệt Kinh”</h4>
    <p>“Như Lai tạng” là Như Lai còn tại triền, nghĩa là quả đức Như Lai còn tiềm tàng ẩn phục trong tâm chúng sanh vì các vọng huyễn chưa viễn ly, giác tánh chưa phát hiện. “Tự tánh sai biệt” là tánh Viên Giác tùy duyên ứng hiện ra các pháp sai khác.</p>
    <h4 id="luoc-giai-phat-noi-ten-kinh-nay" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Kinh này nói về tánh Viên Giác. Người ngộ nhập được tánh Viên Giác thì thành Phật, còn không ngộ được thì vẫn làm chúng sanh. Vì mục đích Phật ra đời là độ chúng sanh thành Phật, nên hằng sa đức Phật cũng đều nói kinh Viên Giác và cùng bảo hộ kinh này.</p>
    <p>Việc gọi kinh này là “tròng con mắt” của 12 bộ kinh cho thấy đây không phải một bộ kinh đứng riêng, mà là phần cốt tủy soi sáng toàn bộ đường tu. Năm tên của kinh cũng chỉ ra năm mặt khác nhau của cùng một thực tại Viên Giác: bao trùm và giữ gìn các pháp, nghĩa lý rốt ráo, tam muội tối thắng, cảnh giới quyết định của Như Lai và kho tàng giác tánh tiềm ẩn nơi chúng sanh.</p>

    <h3 id="phat-noi-cong-duc-tri-kinh-nay" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">4. Phật nói công đức trì kinh này</h3>
    <p>Phật dạy rằng kinh này nói về cảnh giới của Như Lai, nên chỉ có Phật mới hay biết trọn vẹn. Các vị Bồ Tát và chúng sanh đời sau chỉ có thể y theo đây tu hành mà lần hồi tiến đến địa vị Phật.</p>
    <p>Kinh này tên là “Đại thừa đốn giáo”. Những chúng sanh đốn cơ có thể nhờ kinh này mà được khai ngộ. Kinh này cũng tiếp độ các chúng sanh về tiệm tu, cũng như biển cả không nhường các dòng sông nhỏ. Lớn như thần A Tu La và nhỏ như loài mòng muỗi, uống nước biển đều no bụng cả.</p>
    <p>Phật lại dạy rằng nếu có người dùng bảy món báu chứa đầy cả đại thiên thế giới đem bố thí, công đức ấy tuy lớn nhưng vẫn không bằng có người nghe tên kinh này, cho đến chỉ nghe nghĩa một câu. Lại nữa, nếu có người giáo hóa chúng sanh chứng quả A La Hán nhiều đến trăm lần số cát sông Hằng, công đức ấy vẫn không bằng người giảng nói kinh này, cho đến chỉ giảng nửa bài kệ.</p>
    <p>Nếu có người nghe kinh này mà tin tưởng không nghi ngờ, thì biết người ấy không phải chỉ mới gieo trồng căn lành ở một hay hai đời Phật, mà đã trồng phước huệ từ nhiều đời Phật như số cát sông Hằng.</p>
    <h4 id="luoc-giai-phat-noi-cong-duc-tri-kinh-nay" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <ol class="list-decimal space-y-3 pl-6">
      <li>Kinh này nói về cảnh giới Viên Giác nên chỉ có Phật mới hay thấu triệt hoàn toàn. Từ các vị Bồ Tát trở xuống đều phải y theo đây mà tu hành lần hồi.</li>
      <li>Kinh này thuộc về Đại thừa đốn giáo, rất hợp với người căn cơ đốn ngộ, nhưng cũng không bỏ người tiệm tu. Vì thế mới ví như biển cả không từ chối các dòng sông nhỏ.</li>
      <li>Công đức nghe tên kinh hay nghe nghĩa một câu quý hơn công đức bố thí bảy báu đầy cả đại thiên thế giới, vì tài thí thuộc phước hữu lậu, còn gieo hạt giống Viên Giác là nhân vô lậu đưa đến thành Phật.</li>
      <li>Công đức giảng nói kinh này, dù rất ít như nửa bài kệ, vẫn hơn công đức giáo hóa vô số người chứng quả A La Hán, vì kinh này mở ra con đường Đại thừa liễu nghĩa hướng đến quả Phật cứu cánh.</li>
      <li>Người nghe kinh này mà sanh tâm vui mừng, ham mộ và tin tưởng không nghi thì biết người ấy đã có trồng hạt giống Đại thừa từ nhiều đời đức Phật.</li>
    </ol>
    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-4 dark:border-primary-900 dark:bg-primary-950/30">
      <p class="mb-2 font-semibold">Phần lược giải còn nhắc đến cách phân giáo:</p>
      <ul class="mb-0 list-disc space-y-2 pl-6">
        <li><strong>Ngài Hiền Thủ</strong> phân Tam tạng kinh giáo thành năm thời: Tiểu, Thỉ, Chung, Đốn, Viên.</li>
        <li><strong>Ngài Thiên Thai</strong> phân làm bốn thời: Tạng, Thông, Biệt, Viên.</li>
      </ul>
    </div>

    <h3 id="phat-khuyen-cac-de-tu-phai-bao-ho-cho-nguoi-tri-kinh-nay" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">5. Phật khuyên các đệ tử phải bảo hộ cho người trì kinh này</h3>
    <p>Phật dạy: Này Thiện nam, các ông phải bảo hộ những người tu hành đời mạt pháp, chớ để cho các loài ác ma và ngoại đạo làm não loạn thân tâm của người tu hành khiến cho họ thối tâm.</p>
    <h4 id="luoc-giai-phat-khuyen-cac-de-tu-phai-bao-ho-cho-nguoi-tri-kinh-nay" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Đời mạt pháp, ngoại đạo tà sư và các duyên nhiễu loạn rất dễ làm người tu lung lay. Vì vậy, bảo hộ người trì kinh không phải là việc phụ, mà là một phần của trách nhiệm hộ pháp. Nếu không có sự bảo vệ đúng mức, người mới phát tâm rất dễ bị nhiễu hại rồi thối chí ngã lòng.</p>

    <h3 id="cac-vi-thien-than-phat-nguyen-bao-ho-nguoi-tu-hanh" class="text-xl font-semibold text-secondary-700 dark:text-secondary-300">6. Các vị thiện thần phát nguyện bảo hộ người tu hành</h3>

    <h4 id="tam-van-than-kim-cang-phat-nguyen" class="text-lg font-semibold">6.1. Tám vạn Thần Kim Cang phát nguyện</h4>
    <p>Khi ấy trong pháp hội có tám vạn Thần Kim Cang như ông Hỏa Đầu Kim Cang, Tồi Toái Kim Cang, Ni Lam Bà Kim Cang cùng với quyến thuộc đứng dậy, đi quanh bên hữu của Phật ba vòng rồi kính cẩn lạy Phật. Các vị thưa rằng nếu các chúng sanh đời sau có người thọ trì kinh Đại thừa này, thì các vị sẽ bảo hộ người ấy giữ gìn như giữ gìn tròng con mắt, cho đến nơi đạo tràng tu hành cũng sẽ dẫn binh tướng đến sớm chiều bảo hộ, khiến cho họ chẳng thối chuyển.</p>
    <p>Các vị còn nguyện rằng nhà cửa nơi người trì kinh ở sẽ không có tai chướng, các tật bệnh đều tiêu, của báu giàu có thường chẳng thiếu thốn.</p>

    <h4 id="dai-pham-vuong-va-chu-thien-phat-nguyen" class="text-lg font-semibold">6.2. Đại Phạm Vương và chư Thiên phát nguyện</h4>
    <p>Khi ấy ông Đại Phạm Vương và hai mươi tám vị Thiên Vương, cùng ông Tu Di Sơn Vương và Hộ Quốc Thiên Vương v.v. đều đứng dậy đi quanh bên hữu của Phật ba vòng rồi kính cẩn lạy Phật và thưa rằng: Chúng con cũng nguyện bảo hộ người thọ trì kinh này, thường được an ổn, tâm chẳng thối lui.</p>

    <h4 id="dai-luc-quy-vuong-cat-ban-tra-phat-nguyen" class="text-lg font-semibold">6.3. Đại Lực Quỷ Vương Cát Bàn Trà phát nguyện</h4>
    <p>Khi ấy có Đại Lực Quỷ Vương tên là Cát Bàn Trà cùng với mười vạn Quỷ Vương đứng dậy đi quanh bên hữu của Phật ba vòng, rồi lạy Phật và thưa rằng: Chúng con cũng nguyện sớm chiều hộ vệ người thọ trì kinh này, khiến cho họ không thối lui. Chỗ của người trì kinh ở, trong khoảng một do tuần nếu có chúng quỷ thần nào đến xâm phạm cảnh giới này, thì chúng con sẽ đập nó nát như vi trần.</p>
    <p>Sau đó tất cả đại chúng như các vị Bồ Tát, thiên long, quỷ thần, quyến thuộc của tám bộ quỷ thần và chư thiên, Phạm Vương v.v. nghe Phật nói kinh này đều hoan hỷ, tín thọ và phụng hành.</p>
    <h4 id="luoc-giai-cac-vi-thien-than-phat-nguyen-bao-ho-nguoi-tu-hanh" class="text-lg font-semibold">LƯỢC GIẢI</h4>
    <p>Chương thứ 12 là phần nói về việc truyền bá lưu thông. Từ các vị đại Bồ Tát cho đến quỷ thần trong pháp hội, tất cả đều thấy kinh này quý báu vô cùng và lợi lạc cho chúng sanh vô tận, nên đều hớn hở vui mừng, tin thọ và phụng hành.</p>
    <p>Việc các vị Thiện thần cùng phát nguyện bảo hộ cho thấy người trì kinh không đi một mình. Khi có người thật lòng nương kinh mà tu và truyền bá chánh pháp, thì pháp hội hữu hình và vô hình đều có phần nâng đỡ. Phần kết này cũng nhắc chúng ta rằng được nghe kinh đã là do căn lành từ nhiều đời, nên càng phải phát Bồ Đề tâm tu hành và truyền bá để đền đáp ơn Phật và thực hành hạnh “tự giác, giác tha, giác hạnh viên mãn”.</p>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: 'Ai là vị Bồ Tát đã đứng dậy thưa thỉnh Phật trong nội dung của chương thứ XII này?',
    options: {
      a: 'Ngài Phổ Hiền Bồ Tát',
      b: 'Ngài Hiền Thiện Thủ Bồ Tát',
      c: 'Ngài Quán Thế Âm Bồ Tát',
      d: 'Ngài Văn Thù Sư Lợi Bồ Tát',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Văn bản không nhắc đến Ngài Phổ Hiền Bồ Tát thưa thỉnh trong chương này.',
      b: 'Đúng. Trong chương XII, Ngài Hiền Thiện Thủ Bồ Tát đã ở trong đại chúng đứng dậy và thưa thỉnh Phật.',
      c: 'Sai. Ngài Quán Thế Âm không phải là người đứng lên thưa thỉnh ở đoạn mở đầu chương XII.',
      d: 'Sai. Ngài Văn Thù Sư Lợi không phải là người thưa thỉnh trong chương này.',
    },
  },
  {
    question: 'Phật ví kinh này như bộ phận nào của 12 bộ kinh?',
    options: {
      a: 'Nền móng của ngôi nhà',
      b: 'Cánh tay vững chãi',
      c: 'Tròng con mắt',
      d: 'Trái tim của giáo pháp',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Văn bản không sử dụng hình ảnh nền móng ngôi nhà.',
      b: 'Sai. Không có chi tiết nào so sánh kinh với cánh tay.',
      c: 'Đúng. Phật dạy rõ: "Kinh này là tròng con mắt của 12 bộ kinh".',
      d: 'Sai. Dù kinh mang ý nghĩa cốt lõi, nhưng từ ngữ chính xác Phật dùng là "tròng con mắt".',
    },
  },
  {
    question: 'Kinh này có bao nhiêu tên gọi chính thức được đức Phật nêu ra?',
    options: {
      a: '3 tên',
      b: '12 tên',
      c: '7 tên',
      d: '5 tên',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Số lượng tên gọi nhiều hơn 3.',
      b: 'Sai. 12 là số bộ kinh được chia ra, không phải số tên gọi của kinh này.',
      c: 'Sai. Kinh không có 7 tên gọi.',
      d: 'Đúng. Kinh này có 5 tên gọi được Phật nêu rõ.',
    },
  },
  {
    question: 'Theo lược giải, tại sao kinh này được gọi là "Liễu Nghĩa"?',
    options: {
      a: 'Vì nghĩa lý rốt ráo đứng đắn, nói đúng chân lý không tùy thời tùy cơ',
      b: 'Vì nội dung chỉ dành riêng cho hàng Tiểu thừa',
      c: 'Vì kinh chỉ bao gồm các câu thần chú bí mật',
      d: 'Vì nghĩa lý chưa rốt ráo, cần phương tiện giải thích thêm',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Kinh Liễu nghĩa là những bộ kinh có nghĩa lý rốt ráo đúng đắn, Phật nói đúng chân lý không có tùy thời tùy cơ.',
      b: 'Sai. Kinh Viên Giác là kinh Liễu nghĩa thuộc Đại thừa.',
      c: 'Sai. Đây không phải ý nghĩa của từ "Liễu Nghĩa".',
      d: 'Sai. Nghĩa lý chưa rốt ráo là định nghĩa của "Bất liễu nghĩa".',
    },
  },
  {
    question: 'Trong tên gọi "Bí Mật Vương Tam Muội Kinh", chữ "Bí mật" có hàm ý gì?',
    options: {
      a: 'Kinh điển này bị cấm truyền bá rộng rãi cho chúng sanh',
      b: 'Chỉ có Phật mới hoàn toàn thấu rõ, ngay cả bậc Đẳng Giác Bồ Tát cũng chưa thấu tột',
      c: 'Vì nội dung kinh khó hiểu đối với mọi tầng lớp chúng sanh',
      d: 'Nghĩa là kinh chỉ được giảng dạy vào ban đêm',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Việc truyền bá kinh luôn được khuyến khích.',
      b: 'Đúng. Lược giải nêu rõ pháp này chỉ có Phật mới hoàn toàn thấu rõ, đến bậc Đẳng Giác Bồ Tát cũng chưa thấu tột được nên gọi là "bí mật".',
      c: 'Sai. Kinh vẫn tiếp độ được chúng sanh đốn cơ và tiệm tu.',
      d: 'Sai. Không có quy định về thời gian giảng dạy.',
    },
  },
  {
    question: 'Phật so sánh công đức của người giảng nói kinh này, dù chỉ nửa bài kệ, cao hơn công đức của việc gì?',
    options: {
      a: 'Trì tụng các bộ kinh thuộc hệ Tiểu thừa trong nhiều đời',
      b: 'Giáo hóa vô số chúng sanh đắc quả A La Hán',
      c: 'Bố thí bảy món báu đầy cả đại thiên thế giới',
      d: 'Xây dựng hàng ngàn ngôi chùa và bảo tháp',
    },
    answer: 'b',
    explanation: {
      a: 'Sai. Văn bản không so sánh với việc trì tụng kinh Tiểu thừa nhiều đời.',
      b: 'Đúng. Công đức giảng nói kinh này nhiều hơn việc giáo hóa chúng sanh chứng quả A La Hán nhiều đến trăm lần số cát sông Hằng.',
      c: 'Sai. Bố thí bảy món báu được dùng để so sánh với việc nghe tên kinh hoặc nghe một câu nghĩa.',
      d: 'Sai. Văn bản không đề cập đến việc xây chùa hay bảo tháp.',
    },
  },
  {
    question: 'Vì sao kinh này được ví như "biển cả không nhường các dòng sông nhỏ"?',
    options: {
      a: 'Vì kinh được thuyết giảng ở gần khu vực biển',
      b: 'Vì kinh này chỉ dành cho những người có trí tuệ lớn như biển',
      c: 'Vì kinh có khả năng tiếp độ cả người đốn cơ lẫn người tiệm tu',
      d: 'Vì nội dung kinh quá rộng lớn không ai có thể học hết được',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Không có chi tiết nào nói về địa điểm thuyết giảng ở gần biển.',
      b: 'Sai. Kinh không từ chối chúng sanh căn cơ nhỏ.',
      c: 'Đúng. Kinh này tiếp độ các chúng sanh về tiệm tu và đốn cơ, giống như biển cả không nhường các dòng sông nhỏ.',
      d: 'Sai. Đây không phải ý nghĩa của sự ví von này.',
    },
  },
  {
    question: 'Vị thần nào đã phát nguyện nếu có quỷ thần xâm phạm người trì kinh trong khoảng một do tuần sẽ đập nát như vi trần?',
    options: {
      a: 'Hỏa Đầu Kim Cang',
      b: 'Hộ Quốc Thiên Vương',
      c: 'Đại Lực Quỷ Vương Cát Bàn Trà',
      d: 'Đại Phạm Vương',
    },
    answer: 'c',
    explanation: {
      a: 'Sai. Hỏa Đầu Kim Cang thuộc nhóm Thần Kim Cang phát nguyện bảo hộ người tu như giữ gìn tròng con mắt.',
      b: 'Sai. Hộ Quốc Thiên Vương phát nguyện bảo hộ người thọ trì thường được an ổn.',
      c: 'Đúng. Đại Lực Quỷ Vương Cát Bàn Trà phát nguyện đập nát chúng quỷ thần xâm phạm trong khoảng một do tuần.',
      d: 'Sai. Đại Phạm Vương không có lời thệ nguyện đập nát quỷ thần như chi tiết này.',
    },
  },
  {
    question: 'Dấu hiệu để biết một người đã trồng căn lành từ nhiều đời Phật như số cát sông Hằng là gì?',
    options: {
      a: 'Người đó khi nghe kinh này liền tin tưởng không nghi ngờ',
      b: 'Người đó có thể giảng giải kinh này một cách lưu loát cho mọi người',
      c: 'Người đó có tài sản giàu có không bao giờ thiếu thốn',
      d: 'Người đó có khả năng thuộc lòng 12 bộ kinh',
    },
    answer: 'a',
    explanation: {
      a: 'Đúng. Phật dạy nếu có người nghe kinh này tin tưởng không nghi ngờ, thì biết người đó đã trồng căn lành từ nhiều đời Phật như số cát sông Hằng.',
      b: 'Sai. Khả năng giảng lưu loát không được nhắc đến như dấu hiệu này.',
      c: 'Sai. Tài sản giàu có là phước hữu lậu, không phải dấu hiệu được nêu ở đây.',
      d: 'Sai. Khả năng thuộc lòng 12 bộ kinh không phải là dấu hiệu được nhắc tới.',
    },
  },
  {
    question: 'Phật khuyên các đệ tử phải bảo hộ người trì kinh đời mạt pháp khỏi đối tượng nào?',
    options: {
      a: 'Những chúng sanh chưa biết đến Phật pháp',
      b: 'Những người nghèo khổ và bệnh tật',
      c: 'Các vị quan lại chính quyền',
      d: 'Các loài ác ma và ngoại đạo',
    },
    answer: 'd',
    explanation: {
      a: 'Sai. Người chưa biết Phật pháp không phải là đối tượng được Phật chỉ định cần bảo vệ khỏi.',
      b: 'Sai. Không có chi tiết nào nói về người nghèo khổ làm não loạn người tu.',
      c: 'Sai. Văn bản không nhắc đến quan lại chính quyền.',
      d: 'Đúng. Phật bảo các đệ tử phải bảo hộ người tu, chớ để các loài ác ma và ngoại đạo làm não loạn thân tâm.',
    },
  },
]

const lesson: Lesson = {
  id: 'lesson-khoa-8-bai-12-chuong-hien-thien-thu',
  slug: 'bai-thu-12-chuong-hien-thien-thu',
  title: 'Bài Thứ 12 - Chương Hiền Thiện Thủ',
  type: 'article',
  status: 'published',
  order: 15,
  createdAt: '2026-03-20',
  updatedAt: '2026-06-29',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-12-chuong-hien-thien-thu/%C3%9D_ngh%C4%A9a_Kinh_Vi%C3%AAn_Gi%C3%A1c.png',
      readingContent,
      tableOfContents: [
        { id: 'chuong-hien-thien-thu', label: 'XII. CHƯƠNG HIỀN THIỆN THỦ' },
        { id: 'ngai-hien-thien-thu-bo-tat-hoi-phat', label: '1. Ngài Hiền Thiện Thủ Bồ Tát hỏi Phật', indent: 1 },
        { id: 'luoc-giai-ngai-hien-thien-thu-bo-tat-hoi-phat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-khen-ngai-hien-thien-thu-bo-tat', label: '2. Phật khen ngài Hiền Thiện Thủ Bồ Tát', indent: 1 },
        { id: 'luoc-giai-phat-khen-ngai-hien-thien-thu-bo-tat', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-noi-ten-kinh-nay', label: '3. Phật nói tên kinh này', indent: 1 },
        { id: 'kinh-nay-la-trong-con-mat-cua-12-bo-kinh', label: '3.1. Kinh này là tròng con mắt của 12 bộ kinh', indent: 2 },
        { id: 'kinh-nay-co-nam-ten', label: '3.2. Kinh này có năm tên', indent: 2 },
        { id: 'y-nghia-dai-phuong-quang-vien-giac-da-la-ni-kinh', label: '3.3. Ý nghĩa tên “Đại Phương Quảng Viên Giác Đà La Ni Kinh”', indent: 2 },
        { id: 'y-nghia-tu-da-la-lieu-nghia-kinh', label: '3.4. Ý nghĩa tên “Tu Đa La Liễu Nghĩa Kinh”', indent: 2 },
        { id: 'y-nghia-bi-mat-vuong-tam-muoi-kinh', label: '3.5. Ý nghĩa tên “Bí Mật Vương Tam Muội Kinh”', indent: 2 },
        { id: 'y-nghia-nhu-lai-quyet-dinh-canh-gioi-kinh', label: '3.6. Ý nghĩa tên “Như Lai Quyết Định Cảnh Giới Kinh”', indent: 2 },
        { id: 'y-nghia-nhu-lai-tang-tu-tanh-sai-biet-kinh', label: '3.7. Ý nghĩa tên “Như Lai Tạng Tự Tánh Sai Biệt Kinh”', indent: 2 },
        { id: 'luoc-giai-phat-noi-ten-kinh-nay', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-noi-cong-duc-tri-kinh-nay', label: '4. Phật nói công đức trì kinh này', indent: 1 },
        { id: 'luoc-giai-phat-noi-cong-duc-tri-kinh-nay', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'phat-khuyen-cac-de-tu-phai-bao-ho-cho-nguoi-tri-kinh-nay', label: '5. Phật khuyên các đệ tử phải bảo hộ cho người trì kinh này', indent: 1 },
        { id: 'luoc-giai-phat-khuyen-cac-de-tu-phai-bao-ho-cho-nguoi-tri-kinh-nay', label: 'LƯỢC GIẢI', indent: 2 },
        { id: 'cac-vi-thien-than-phat-nguyen-bao-ho-nguoi-tu-hanh', label: '6. Các vị thiện thần phát nguyện bảo hộ người tu hành', indent: 1 },
        { id: 'tam-van-than-kim-cang-phat-nguyen', label: '6.1. Tám vạn Thần Kim Cang phát nguyện', indent: 2 },
        { id: 'dai-pham-vuong-va-chu-thien-phat-nguyen', label: '6.2. Đại Phạm Vương và chư Thiên phát nguyện', indent: 2 },
        { id: 'dai-luc-quy-vuong-cat-ban-tra-phat-nguyen', label: '6.3. Đại Lực Quỷ Vương Cát Bàn Trà phát nguyện', indent: 2 },
        { id: 'luoc-giai-cac-vi-thien-than-phat-nguyen-bao-ho-nguoi-tu-hanh', label: 'LƯỢC GIẢI', indent: 2 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl:
        'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/phat-hoc-pho-thong-2/bai-thu-12-chuong-hien-thien-thu/Tr%C3%B2ng_M%E1%BA%AFt_Kinh_Vi%C3%AAn_Gi%C3%A1c.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/c-HCOx2Rfgg',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl:
        'https://open.spotify.com/embed/episode/5WtWl4u6OLfeZDKXpQREgO?utm_source=generator&si=65986ef8911a428a',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Chương Hiền Thiện Thủ',
    passPercentage: 70,
    questions,
  },
}

export default lesson
