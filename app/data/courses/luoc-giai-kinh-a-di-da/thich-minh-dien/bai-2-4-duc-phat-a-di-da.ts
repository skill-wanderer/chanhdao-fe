import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div class="mb-8">
      <h2 id="duc-phat-a-di-da" class="mt-0 mb-2 text-3xl font-bold text-primary-700 dark:text-primary-300">2.4. Đức Phật A DI ĐÀ</h2>
    </div>

    <div class="mb-8">
      <h3 id="chanh-van" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chánh Văn:</h3>
    <p>Này Xá-Lợi-Phất, ý thầy nghĩ sao? Đức Phật đó vì sao hiệu là A Di Đà?</p>
    <p>Này Xá-Lợi-Phất, đức Phật đó, hào quang sáng chói vô lượng, soi suốt các cõi nước trong mười phương không bị chướng ngại, vì thế nên hiệu là A Di Đà.</p>
    <p>Này Xá-Lợi-Phất, đức Phật đó và nhân dân của Ngài sống lâu vô lượng vô biên a-tăng-kỳ kiếp, nên hiệu là A Di Đà.</p>
    <p>Này Xá-Lợi-Phất, đức Phật A Di Đà thành Phật đến nay, đã được mười kiếp.</p>
    <p>Lại nữa này Xá-Lợi-Phất, đức Phật đó có vô lượng vô biên đệ tử Thanh Văn đều là bậc A-la-hán, chẳng phải tính đếm mà có thể biết được, hàng Bồ-tát cũng đông như thế.</p>
    <p>Này Xá-Lợi-Phất, cõi nước của đức Phật đó thành tựu công đức trang nghiêm dường ấy.</p>
    <p>Lại nữa này Xá-Lợi-Phất, trong cõi Cực Lạc, những chúng sinh vãng sinh vào đó đều là bậc bất thối chuyển.</p>
    <p>Trong đó có rất nhiều vị là bậc nhất sinh bổ xứ, số đó rất đông, chẳng phải tính đếm mà biết được, chỉ có thể dùng số vô lượng vô biên a-tăng-kỳ để nói thôi.</p>
    <p>Này Xá-Lợi-Phất, chúng sinh nào nghe những điều trên đây, nên phải phát nguyện cầu sinh về cõi đó. Vì sao như vậy? Vì được cùng với các bậc Thượng thiện nhân như thế trở về một chỗ.</p>
    <p>Này Xá-Lợi-Phất, không thể dùng chút ít thiện căn phước đức nhân duyên mà được sinh về cõi đó.</p>
    <p>Này Xá-Lợi-Phất, nếu có người trai hiền gái lành nào nghe nói đức Phật A Di Đà, rồi chấp trì danh hiệu, hoặc trong một ngày, hoặc hai ngày, hoặc ba ngày, hoặc bốn ngày, hoặc năm ngày, hoặc sáu ngày, hoặc bảy ngày, đạt đến nhất tâm bất loạn.</p>
    <p>Thời người đó đến lúc mạng mạch của vọng thức chấm dứt tức được đức Phật A Di Đà cùng hàng Thánh Chúng hiện thân ở trước người đó. Lúc vọng thức đã bị đoạn tận thì tâm không còn điên đảo, liền được vãng sinh về cõi Cực Lạc của đức Phật A Di Đà.</p>
    <p>Này Xá-Lợi-Phất, Ta thấy có sự lợi ích ấy nên nói những lời như thế.</p>
    <p>Nếu có chúng sinh nào, nghe những lời trên đó, nên phải phát nguyện sinh về cõi Cực Lạc.</p>

    </div>

    <div class="mb-8">
      <h3 id="giai-thich-tu-ngu" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Giải thích từ ngữ:</h3>
    <p>1. Đức Phật đó vì sao hiệu là A Di Đà? Đó là đức Thế Tôn đưa ra nghi vấn, để trình bày những hoạt dụng của tánh giác, hay tự tánh Di Đà.</p>
    <p>2. Hào quang: Dụ cho ánh sáng của chân tâm, hay chính là trí tuệ Bát-nhã vậy.</p>
    <p>3. Mười phương: Đông, tây, nam, bắc, bốn góc, trên, dưới. Cũng dụ cho mười pháp giới: Địa ngục, ngạ quỷ, súc sinh, A-tu-la, người, trời, Thanh Văn, Duyên Giác, Bồ-tát và Phật (nhất chúng sinh tâm cụ thập pháp giới).</p>
    <p>4. Sống lâu vô lượng: Dụ cho mạng sống vô lượng, tức tánh giác thì vô thủy vô chung.</p>
    <p>5. A-tăng-kỳ: Là hằng số vô tận.</p>
    <p>6. Thanh Văn: Các đệ tử xuất gia nghe âm thanh đức Phật thuyết giáo rồi tu hành mà chứng ngộ. Thanh Văn ở kinh này là Nhất hướng thú tịch (tâm hướng về tịch tịnh) và Hồi hướng bồ-đề bởi niệm tự tánh Di Đà. Cũng gọi là Đại thừa Thanh Văn, tức nhờ văn tự tánh Di Đà nên tâm thức không trụ nơi hóa thành, mà trở về lý thật tướng của Đại thừa.</p>
    <p>7. A-la-hán: Bậc thánh đã đoạn hết kiến hoặc, tư hoặc trong ba cõi, chứng được tận trí, xứng đáng nhận tất cả sự cúng dường của thế gian. Ứng cúng là một trong mười đức hiệu của một vị Phật. A-la-hán thường có ba nghĩa: Sát tặc, bất sinh, ứng cúng. Kiến hoặc là do vọng kiến phân biệt mà sinh ra sở tri và phiền não, nó thuộc hư vọng không có thực thể nên gọi là hoặc (mê hoặc về nghĩa lý). Mê hoặc về sự việc rồi khởi phiền não tham, sân… duyên theo sự tướng của năm trần cảnh với sáu dục (lục dục) rồi lưu lại trong tâm thức, nên gọi tư hoặc.</p>
    <p>8. Mười kiếp: Dụ cho mười kiết sử hay mười vọng niệm căn bản trong tâm thức.</p>
    <p>9. Bồ-tát: Như đoạn trên đã giải.</p>
    <p>10. Bậc bất thối chuyển: Bậc này nhờ niệm tự tánh Di Đà đạt thành nhất tâm, được pháp vô sinh nên tâm không còn thối chuyển, hay rơi rụng. Kể từ địa thứ tám (Bất động địa) trở lên.</p>
    <p>11. Bậc nhất sinh bổ xứ: Chỉ cho bậc Bồ-tát Đẳng giác, cũng gọi là Bồ-tát ở địa thứ chín nên chỉ còn một đời nữa là thành Phật (bổ xứ), như Bồ-tát Di Lặc chỉ một lần (nhất sinh) chuyển thức thành trí là thành Phật. Diệu giác là quả vị Phật, thì Đẳng giác là kế quả vị Diệu giác.</p>
    <p>12. Bậc thượng thiện nhân: Nhờ niệm tự tánh Di Đà nên bậc Bồ-tát giữ tâm bất loạn, gọi là thượng nhân.</p>
    <p>13. Thiện căn: Căn là cái gốc, thiện là lành. Đây là chỉ cho thiện vô lậu.</p>
    <p>14. Chấp trì danh hiệu: Chấp là nắm lấy, trì là ghì chặt, danh hiệu như trên đã giải thích là danh tự tánh.</p>
    <p>15. Nhất tâm bất loạn: Nhất là thuần nhất, bất loạn là định; là tự tịnh tâm ý. Vọng tâm thì có nhiều thứ và có sai khác, còn nhất tâm thì toàn là chân tâm.</p>
    <p>16. Lâm mạng chung thời: Lâm thời là đến lúc, mạng chung là mạng mạch của dòng thức chấm dứt (vọng thức); chứ không phải chết.</p>
    <p>17. Tâm bất điên đảo: Tâm không còn điên đảo, nên kinh Bát-nhã nói: “Lìa hẳn điên đảo”. Có hai loại điên đảo: Một là sự vẽ vời của ý thức, cũng gọi là mở mắt chiêm bao. Hai là sự chấp thủ của Mạt-na thức, cũng gọi là nhắm mắt chiêm bao.</p>

    </div>

    <div class="mb-8">
      <h3 id="luoc-giai" class="mt-0 mb-4 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Lược giải:</h3>
    <p>Đến đây đức Phật Thích Ca nêu nghi vấn để diễn tả những hoạt dụng của tự tánh Di Đà, hay chân tâm. Thứ nhất là ánh sáng của A Di Đà hay chân tâm thì vô lượng, nên nói vô lượng quang. Thứ hai là ánh sáng giác ngộ ấy trùm khắp mười phương, tức dụ cho trí giác tổng nhiếp mười loại tâm chúng sinh, mà không bị chướng ngại (pháp tánh). Thứ ba là nói đến thọ mạng của Phật A Di Đà và nhân dân cõi Cực Lạc cũng vô lượng, tức chỉ cho mỗi khi thành tựu giải thoát giác ngộ rồi thì sống lại với tánh giác vô thủy vô chung của mình.</p>
    <p>Thứ tư là nói Phật A Di Đà từ khi thành Phật đến nay đã được mười kiếp. Thọ mạng của đức Phật A Di Đà hay Phật tánh là vô lượng, nhưng nay kinh nói: “Phật A Di Đà từ khi thành Phật đến nay đã được mười kiếp” như vậy thì có bắt đầu, mà có bắt đầu thì có kết thúc, sao gọi là vô lượng? Tánh giác hay Phật tánh thì vô thủy vô chung, nhưng chúng ta thì đang sống trong vọng kiến sinh diệt với mười kiết sử, nên luôn trôi lăn trong ba cõi sáu đường. Nhưng nay nhờ nương vào niệm tự tánh Di Đà, nên đạt thành nhất tâm bất loạn, làm cho mạng mạch của dòng thức sinh diệt bị đoạn tận, nên vượt thoát mười kiết sử, làm cho Phật tánh hiển lộ; mà kinh văn ẩn dụ cho mười kiếp vậy.</p>
    <p>Vì vậy, bất cứ ai muốn thành Phật cũng phải vượt thoát mười kiết sử cả, chứ không riêng gì Phật A Di Đà. Mười kiếp cũng dụ cho mười vọng niệm căn bản trong tâm thức, mà kinh Kim Cương đức Phật dụ cho mười loại chúng sinh tâm: sinh từ trứng (noãn), sinh từ bào thai (thai), sinh từ nơi ẩm thấp (thấp), sinh chuyển hóa (hóa), sinh từ sắc chất (hữu sắc), sinh từ không sắc chất (vô sắc), sinh từ có tưởng (hữu tưởng), sinh từ không tưởng (vô tưởng), sinh từ phi hữu tưởng (trầm không), sinh từ phi vô tưởng (trệ tịch).</p>
    <p>Lâm mạng chung thời, lâm thời là đến lúc, mạng hay sinh mạng chính là nghiệp thức. Mạng chung là sự chấm dứt của dòng nghiệp thức, chứ không phải chết cái thân vật lý này. Do không hiểu ẩn ý mà đức Phật Thích Ca chỉ dạy, nên tưởng rằng khi gần chết chỉ khởi tâm niệm mười lần câu: "Nam mô A Di Đà Phật", thì được đức Phật A Di Đà rước về Cực Lạc ở đâu đó. Đó là một ngộ nhận hết sức tai hại, làm cho người ta dụng công tu tập sai lạc, hoặc làm biếng ỷ lại chờ khi gần chết mới niệm mười câu danh hiệu A Di Đà Phật, hoặc nhờ người khác tới niệm giúp (ban hộ niệm).</p>
    <p>Thứ năm là nói cảnh giới Cực Lạc của đức Phật A Di Đà cũng có hàng Thanh Văn chứng quả A-la-hán và hàng Bồ-tát đông vô số kể. A-la-hán hay bậc vô sinh, còn Bồ-tát là bậc Giác hữu tình, tức giác ngộ những tình thức biến dạng liên tục trong tâm. Buông hết tình thức rồi thì chân tâm hiển lộ, hay đạt được nhất tâm bất loạn rồi thì vọng tâm không còn chi phối nữa, nên nói vô sinh hay Giác hữu tình. Sạch hết sở hành rồi thì cũng không lấy gì để so sánh nữa, nên nói chẳng phải tính đếm mà biết được, nên nói số đông vô kể.</p>
    <p>Thứ sáu là nói đến những chúng sinh ở nước Cực Lạc đều là những bậc Bất thối chuyển; mà bất thối chuyển chính là bậc Bồ-tát ở địa thứ tám trở lên. Bồ-tát từ sơ địa cho đến địa thứ bảy thì còn tâm thức thú hướng nhất tâm.</p>
    <p>Còn Bồ-tát ở địa thứ tám, cũng gọi là Càn huệ địa tức huệ khô, nên cũng gọi là Bất động địa. Đến địa thứ tám của bậc Bồ-tát, thì lực chuyển y đã đủ để đẩy vào lực quán tính của “vô công dụng hạnh”, nên không còn bị tâm thức kéo lui, nên nói “bất thối chuyển”. Kinh này như trên đã nói là thuộc giáo lý viên đốn, nên dạy pháp niệm tự tánh Di Đà cho bậc Bồ-tát tu để đạt thành quả vị Phật. Vì vậy cho nên, chúng sinh ở đây toàn là những vị Bồ-tát từ địa thứ tám trở lên. Tiếp đến là nói về bậc nhất sinh bổ xứ, chính là Bồ-tát Đẳng giác, nên chỉ còn một lần chuyển thức thành trí nữa là thành Phật, như Bồ-tát Di Lặc chẳng hạn. Hết thảy chúng sinh, sinh sang cõi Cực Lạc đều đạt thành nhất tâm cả, nên không thể dùng bộ óc mà tính đếm được, nên chỉ nói vô lượng vô biên mà thôi. Vì vậy, kinh nói chúng sinh nào về được ở Cực Lạc rồi, tức cùng với những vị Bồ-tát Đẳng giác (Thượng thiện nhân) cùng ở một chỗ, tức chỉ cho cùng được nhất tâm như nhau.</p>
    <p>Thứ nữa, đức Phật Thích Ca dạy là phải miên mật dụng công niệm tự tánh Di Đà mới đủ lực sinh sang nước ấy. Không thể dùng một chút thiện căn mà sinh vào được. Thiện là lành, mà căn là gốc rễ; gốc rễ lành là chỉ cho thiện vô lậu, do đem tâm niệm tự tánh mà có, nhưng phải dụng công tương tục; chứ không thể dụng một chút mà thành tựu được.</p>
    <p>Tổ xưa cũng dạy: “Bám sát công phu không gián đoạn, mới mong tham thấu Tổ sư thiền”. Thiền Tổ sư chính là Tịnh độ mà kinh này dạy vậy; cũng chính là thiền mà đức Phật Thích Ca đã chứng. Vì vậy, phân ra Tổ sư thiền và Như Lai thiền là không chính xác.</p>
    <p>Đến đây đức Phật mới dạy chúng ta cách hành trì để đạt thành Tịnh độ. Nếu có ai nghe nói về Phật A Di Đà, tức tự tánh vô lượng thọ, vô lượng quang, mà chấp trì danh hiệu. Danh hiệu ở đây là danh tự tánh, chứ không phải danh từ. Nếu chấp trì quán ngữ: “A Di Đà Phật” thì chỉ trừ được đa niệm, đưa về nhất niệm mà thôi, thuộc an lập ý của Nhị thừa; chứ không đưa đến nhất tâm bất loạn được. Tự tánh thì vô hình vô tướng, nằm ngoài mọi khái niệm, văn tự, nghĩ suy nên kinh nói: “Pháp đây không thể nghĩ lường phân biệt mà có thể biết được” (bất khả tư nghì). Như vậy, niệm danh tự tánh Di Đà ở đây là niệm vô niệm, làm cho sơn cùng thủy tận, từ một ngày miên mật đến bảy ngày, đạt được nhất tâm bất loạn. Vì vậy cho nên, trong Di Đà yếu giải, ngài Ngẫu Ích Trí Húc nói: “Cái danh hiệu Phật A Di Đà ấy là lý tính bổn giác của chúng sinh. Chấp trì danh hiệu ấy tức là đem thủy giác trở lại với bổn giác vậy thôi”; cho nên “niệm Phật không phải là kêu Phật” (Hòa thượng Trí Quảng).</p>
    <p>Niệm tự tánh, hay niệm vô niệm miên mật không gián đoạn, từ một ngày, hoặc hai ngày, hoặc ba ngày cho đến bảy ngày. Nếu niệm một ngày mà được nhất tâm bất loạn, thì tánh giác cũng hiển lộ. Nhưng nay chúng ta niệm tự tánh Di Đà, làm cho tâm định tương tục trong một phút là đã khó rồi; huống gì làm cho tâm định tương tục hoặc một ngày, hoặc hai ngày cho đến bảy ngày, đến khi nào mạng mạch của dòng thức bị cắt đứt hoàn toàn (lâm mạng chung thời) thì được vãng sinh, tức vượt qua khỏi sinh tử, làm cho tánh giác hiển lộ; nên kinh nói: “Phật A Di Đà và các thánh hiện tiền”.</p>
    <p>Nếu cho vãng sinh là chết, thì chính đức Phật Thích Ca lúc còn ở đời, Ngài chưa vãng sinh hay sao? Khi thành đạo, đức Phật Thích Ca nói: “Sinh đã tận, lậu đã tận, gánh nặng đã để xuống, những việc nên làm đã làm, từ nay không còn trở lại trạng thái của luân hồi sinh tử nữa”. Như vậy lời này Ngài nói dối hay sao? Đó là sự ngộ nhận tai hại, làm cho người ta hiểu lầm pháp môn Tịnh độ là pháp dành cho sự chết, cho người chết, và khi chết thì nói đi vãng sinh, rồi lại bày đặt ra đi hộ niệm vãng sinh; thật trái với luật nhân quả mà đức Phật Thích Ca đã dạy.</p>
    <p>Nếu mình không dụng công tu tập đúng pháp, mà chỉ chờ người khác đến niệm danh tự “Nam mô A Di Đà Phật” làm cho tâm mình định, là một việc dối trá, nhân không tu hành mà quả được vãng sinh; đó chính là tội phá kiến, thuộc về thiên ma ngoại đạo.</p>
    <p>Đức Phật Thích Ca nói: “Ta như vị lương y, biết bệnh và cho thuốc, uống hay không là tại các người. Ta như vị chỉ đường, chỉ cho chúng sinh con đường giải thoát giác ngộ, đi hay không là cũng tại các người”. Đúng luật nhân quả là ai ăn thì được no, ai uống nước thì được hết khát, chứ không ai ăn uống thay cho ai được.</p>
    <p>Xin hành giả liễu tri.</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Theo nội dung bài viết, danh hiệu 'A Di Đà' được giải thích dựa trên những đặc điểm nào của đức Phật?",
    options: {
      a: 'Số lượng đệ tử đông đảo và các bậc Thánh chúng đi theo.',
      b: 'Khả năng cứu độ chúng sinh và sự giàu có của cõi nước.',
      c: 'Hào quang sáng chói vô lượng và thọ mạng vô lượng.',
      d: 'Sự thanh tịnh của tâm thức và lòng từ bi vô hạn.',
    },
    answer: 'c',
  },
  {
    question: "Trong phần giải thích từ ngữ, 'Hào quang' của Phật A Di Đà là ẩn dụ cho điều gì?",
    options: {
      a: 'Ánh sáng của chân tâm hay trí tuệ Bát-nhã.',
      b: 'Năng lượng tích cực lan tỏa đến mọi loài chúng sinh.',
      c: 'Phép màu giúp chúng sinh vượt qua khổ đau.',
      d: 'Vầng sáng vật lý tỏa ra từ thân thể bậc giác ngộ.',
    },
    answer: 'a',
  },
  {
    question: 'Con số 10 kiếp từ khi đức Phật A Di Đà thành Phật đến nay mang ý nghĩa ẩn dụ gì?',
    options: {
      a: 'Khoảng thời gian lịch sử cụ thể trong quá khứ.',
      b: 'Mười loại công đức mà một vị Phật cần tích lũy.',
      c: 'Mười phương thế giới mà đức Phật đã đi qua thuyết pháp.',
      d: 'Vượt thoát mười kiết sử hoặc mười vọng niệm căn bản.',
    },
    answer: 'd',
  },
  {
    question: "Theo văn bản, trạng thái 'Lâm mạng chung thời' thực sự có nghĩa là gì?",
    options: {
      a: 'Lúc mạng mạch của dòng vọng thức bị chấm dứt.',
      b: 'Thời điểm cái thân vật lý này ngừng hoạt động (cái chết).',
      c: 'Giai đoạn cuối cùng của một kiếp người trước khi tái sinh.',
      d: 'Khi con người buông bỏ mọi tài sản thế gian.',
    },
    answer: 'a',
  },
  {
    question: "Bậc 'Bất thối chuyển' ở cõi Cực Lạc được xác định tương đương với phẩm vị nào?",
    options: {
      a: 'Các đệ tử Thanh Văn mới phát tâm tu học.',
      b: 'Hàng Bồ-tát từ địa thứ tám (Bất động địa) trở lên.',
      c: 'Những người thường xuyên làm việc thiện tại thế gian.',
      d: 'Bậc A-la-hán đã nhập Niết-bàn tịch tĩnh.',
    },
    answer: 'b',
  },
  {
    question: "Tại sao tác giả cho rằng việc ỷ lại vào 'Ban hộ niệm' khi lâm chung là một sai lầm?",
    options: {
      a: 'Vì Phật A Di Đà chỉ cứu những người tự mình niệm Phật.',
      b: 'Vì trái với luật nhân quả, ai ăn nấy no, không ai tu thay cho ai được.',
      c: 'Vì chi phí cho ban hộ niệm quá tốn kém và không cần thiết.',
      d: 'Vì âm thanh bên ngoài không thể lọt được vào tai người chết.',
    },
    answer: 'b',
  },
  {
    question: "Theo 'Di Đà yếu giải' được trích dẫn, việc 'Chấp trì danh hiệu' thực chất là quá trình gì?",
    options: {
      a: 'Ghi nhớ các câu chuyện về cuộc đời đức Phật A Di Đà.',
      b: 'Đọc to tên đức Phật nhiều lần để mọi người cùng nghe.',
      c: 'Đem thủy giác trở lại với bổn giác.',
      d: 'Cầu xin đức Phật ban cho sức mạnh để vượt qua khó khăn.',
    },
    answer: 'c',
  },
  {
    question: "Để đạt được 'Nhất tâm bất loạn' trong 1 đến 7 ngày, hành giả cần thực hiện cách niệm nào?",
    options: {
      a: 'Chỉ niệm khi cảm thấy tâm trí đang gặp căng thẳng.',
      b: 'Niệm bằng miệng thật nhanh để át đi các tạp niệm.',
      c: 'Kết hợp niệm Phật với việc quán tưởng các hình ảnh đẹp.',
      d: 'Niệm vô niệm, làm cho sơn cùng thủy tận, miên mật không gián đoạn.',
    },
    answer: 'd',
  },
  {
    question: "Sự khác biệt giữa 'Tâm điên đảo' của ý thức và của Mạt-na thức là gì?",
    options: {
      a: 'Ý thức gây ra tội lỗi, Mạt-na thức giúp sửa chữa lỗi lầm.',
      b: 'Ý thức thuộc về ban ngày, Mạt-na thức thuộc về ban đêm.',
      c: "Ý thức là 'mở mắt chiêm bao', Mạt-na thức là 'nhắm mắt chiêm bao'.",
      d: 'Ý thức là giả tạm, Mạt-na thức là chân thật.',
    },
    answer: 'c',
  },
  {
    question: "Tại sao không thể dùng 'chút ít thiện căn phước đức' mà được sinh về cõi Cực Lạc?",
    options: {
      a: 'Vì cõi Cực Lạc yêu cầu một khoản lệ phí công đức rất lớn.',
      b: 'Vì đức Phật chỉ ưu tiên những người giàu lòng vị tha nhất.',
      c: 'Vì cần phải có sự dụng công tương tục và thiện vô lậu từ tâm niệm tự tánh.',
      d: 'Vì thiện căn của con người thường bị mất đi theo thời gian.',
    },
    answer: 'c',
  },
]

const lesson: Lesson = {
  id: 'lesson-luoc-giai-kinh-a-di-da-bai-2-4-duc-phat-a-di-da',
  slug: 'bai-2-4-duc-phat-a-di-da',
  title: 'Đức Phật A DI ĐÀ',
  type: 'article',
  status: 'published',
  order: 5,
  createdAt: '2026-10-04',
  updatedAt: '2026-10-04',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.4-duc-phat-a-di-da/Gi%E1%BA%A3i_m%C3%A3_T%E1%BB%B1_T%C3%A1nh_Di_%C4%90%C3%A0.png',
      readingContent,
      tableOfContents: [
        { id: 'duc-phat-a-di-da', label: '2.4. Đức Phật A DI ĐÀ' },
        { id: 'chanh-van', label: 'Chánh Văn:', indent: 1 },
        { id: 'giai-thich-tu-ngu', label: 'Giải thích từ ngữ:', indent: 1 },
        { id: 'luoc-giai', label: 'Lược giải:', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/2.4-duc-phat-a-di-da/Amitabha_Within.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/gSJ-yskkZF4',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4XJvSq20FCHnXSji8nnX38?si=_zY-bSxBR1WFi_k1m1Cupg',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Đức Phật A DI ĐÀ',
    passPercentage: 70,
    questions,
  },
}

export default lesson
