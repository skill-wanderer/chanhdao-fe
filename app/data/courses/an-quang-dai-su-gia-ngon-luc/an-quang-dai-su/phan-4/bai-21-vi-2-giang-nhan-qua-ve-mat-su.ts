import type { Lesson, QuizQuestion } from '~/types/course'

const lessonMaterialUrl = (file: string): string => {
  const base = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc/5.khuyen-chu-trong-nhan-qua/2.giang-nhan-qua-ve-mat-su'
  return base + '/' + encodeURIComponent(file)
}

const readingContent = `
<div class="prose-content">
  <section class="space-y-8">
    <header class="mb-2">
      <p class="!mb-1 text-xs font-medium uppercase tracking-widest text-brand-accent">V. KHUYÊN CHÚ TRỌNG NHÂN QUẢ</p>
      <h2 class="!mt-0">2. Giảng nhân quả về mặt Sự</h2>
    </header>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Kinh dạy: “Bồ Tát sợ nhân, chúng sanh sợ quả”. Bồ Tát sợ gặp phải ác quả, nên đã đoạn sẵn ác nhân từ trước. Do vậy, tội chướng tiêu diệt, công đức viên mãn thẳng đến khi thành Phật mới thôi. Chúng sanh thường tạo ác nhân, muốn tránh ác quả, như ở trước mặt trời lại muốn không có bóng, cứ nhọc nhằn rảo chạy.</p><p class="!mb-0 text-justify indent-8 leading-8">Thường thấy kẻ ngu vô tri vừa làm chút điều lành liền mong đại phước. Vừa gặp phải nghịch cảnh bèn bảo làm lành mắc họa, chẳng có nhân quả. Từ đó, cái tâm ban đầu lùi sụt, đâm ra báng bổ Phật pháp. Họ nào biết đến ý chỉ huyền áo “báo thông ba đời, chuyển biến do tâm”.</p><p class="!mb-0 text-justify indent-8 leading-8">Hiện đời làm thiện, làm ác; hiện đời được phước, mắc họa thì gọi là “hiện báo”. Đời này làm thiện, làm ác, đời sau được phước, mắc họa, gọi là “sanh báo”. Đời này làm thiện, làm ác, đến đời thứ ba, hoặc đời thứ tư, hoặc mười, trăm, vạn đời sau, hoặc đến vô lượng vô biên kiếp sau mới hưởng phước, mắc họa, thì gọi là “hậu báo”. Hậu báo sớm, chậm bất định. Phàm những nghiệp đã tạo, tuyệt đối không có nghiệp nào lại chẳng có báo.</p><p class="!mb-0 text-justify indent-8 leading-8">“Chuyển biến do tâm” là ví như có người đã tạo ác nghiệp, sẽ phải đọa mãi trong địa ngục, chịu khổ cả bao kiếp dài lâu. Về sau, kẻ ấy sanh lòng hổ thẹn lớn lao, phát đại Bồ Đề tâm, cải ác tu thiện, tụng kinh, niệm Phật, tự hành, dạy người hành, cầu sanh Tây Phương. Do đó, trong đời này, người ấy bị người khinh miệt hoặc mắc chút bệnh khổ, hoặc phải tạm chịu bần cùng, và gặp hết thảy chuyện chẳng như ý. Nghiệp vĩnh viễn đọa địa ngục chịu khổ bao kiếp dài lâu mình đã tạo trước đây liền bị tiêu diệt, lại còn có thể liễu sanh thoát tử, siêu phàm nhập thánh. Đấy là điều Kim Cang đã nói: “Nếu có người thọ trì kinh này bị người khác khinh rẻ, người ấy do tội nghiệp đời trước đáng đọa ác đạo, nhưng vì đời này bị người đời khinh rẻ nên tội nghiệp đời trước liền bị tiêu diệt, sẽ đắc A Nậu Đa La Tam Miệu Tam Bồ Đề”. Đây chính là ý nghĩa “chuyển biến do tâm”.</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Thế nhân gặp chút tai ương nếu chẳng oán trời, cũng sẽ trách người, tuyệt chẳng có ý tưởng trả nợ, sanh tâm sám hối tội lỗi. Phải biết rằng: trồng dưa được dưa, gieo đậu được đậu, trồng cỏ dại chẳng thể được thóc tốt, gieo gai góc chớ mong lúa nếp.</p><p class="!mb-0 text-justify indent-8 leading-8">Kẻ làm ác được phước thì phước đó là do đời trước đã vun trồng sâu dày. Nếu chẳng làm ác thì phước càng thêm lớn. Ví như con em nhà giàu, ăn xài phung phí, xem vàng như đất, chẳng bị đói lạnh ngay là do vàng nhiều. Nhưng nếu ngày ngày cứ như thế, dù giàu đến trăm vạn, chẳng được mấy năm cũng nhà tan, người chết, mất sạch sành sanh cả!</p><p class="!mb-0 text-justify indent-8 leading-8">Làm lành mắc họa là do tội nghiệp đời trước sâu nặng. Nếu chẳng làm lành thì tai ương càng lớn. Ví như người phạm trọng tội, chưa bị hành hình, lập được công nhỏ; do công nhỏ nên chẳng thể xá tội hoàn toàn, nhưng đã đổi nặng thành nhẹ. Nếu có thể ngày ngày lập công, do công càng nhiều, càng lớn nên tội hết, được xá miễn; lại được phong hầu bái tướng, tước vị thế tập dài lâu cùng vận nước.</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Phải biết rằng: điều trái nghịch xảy đến cứ thuận theo, mới gọi là “lạc thiên” (vui theo mệnh trời). Tu thân, gieo đức mới gọi là “tận tánh”. Đời có kẻ ngu chẳng biết thiện ác đời trước, chỉ thấy việc tốt xấu trước mắt, thấy làm thiện mắc họa bèn bảo “thiện chẳng đáng làm”; thấy làm ác được phước bèn bảo “ác chẳng đáng kiêng”.</p><p class="!mb-0 text-justify indent-8 leading-8">Chẳng biết thiện báo, ác báo chẳng phải là chuyện một sớm, một chiều, phải xảy ra dần dần. Ví như ba thước băng, nào có phải là trời lạnh một buổi đã kết thành được đâu! Trăm sông đầy ắp nước nào có phải là trời nóng một ngày mà tan được băng đâu! Chớ nên oán trời, trách người, cũng đừng do dự, hối hận, lui sụt; hãy nên học theo cách tu thân của ông Du Tịnh Ý, cách lập mạng của ông Viên Liễu Phàm!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Như Lai giảng kinh: báo thông tam thế. Phàm người sanh con, đại lược có bốn nhân.</p><p class="!mb-0 text-justify indent-8 leading-8">Thứ nhất là hiện báo, nghĩa là đời này làm thiện, làm ác, đời này hưởng phước, mắc họa. Như sĩ tử rèn luyện văn chương khoa cử, thân đời này được công danh. Điều này mắt phàm thấy được.</p><p class="!mb-0 text-justify indent-8 leading-8">Thứ hai là sanh báo, nghĩa là đời này làm thiện, làm ác, đời sau hưởng phước, mắc tội. Như tổ phụ có trọng học vấn thì con cháu mới hiển đạt. Điều này mắt phàm chẳng thấy được, nhưng thiên nhãn còn thấy được (đời này, đời sau đều là ước theo người đó mà nói. Đối với việc cách đời, dùng thí dụ để giảng cho dễ hiểu, nên tạm dùng tổ phụ và con cháu. Đừng chấp vào văn mà đánh mất ý nghĩa. Mong lắm thay!)</p><p class="!mb-0 text-justify indent-8 leading-8">Thứ ba là hậu báo, tức là đời này làm thiện, làm ác, đến đời thứ ba, hoặc bốn, năm, sáu, bảy đời, hoặc mười, trăm, ngàn, vạn đời, hoặc một, mười, trăm, ngàn, vạn kiếp, hoặc là đến vô lượng vô biên hằng hà sa kiếp mới hưởng báo thiện hay ác. Như vương nghiệp nhà Thương, nhà Châu xưa kia, thật sự bắt nguồn từ việc ông Tắc giúp vua Thuấn, ông Khiết phò vua Vũ.</p><p class="!mb-0 text-justify indent-8 leading-8">Nếu là chuyện trong ba bốn đời, thiên nhãn còn thấy được. Như trong trăm ngàn vạn kiếp, thiên nhãn chẳng thấy được, nhưng đạo nhãn của Thanh Văn còn thấy được. Nếu là vô lượng vô biên hằng hà sa kiếp, chỉ ngũ nhãn viên minh của đức Như Lai mới thấy được nổi. Đấy còn chưa phải là cảnh giới thuộc đạo nhãn của Thanh Văn, huống hồ là thiên nhãn, nhục nhãn ư!</p><p class="!mb-0 text-justify indent-8 leading-8">Hiểu ý nghĩa của ba thứ báo này thì chuyện làm thiện được phước, làm ác tai họa giáng xuống, thánh ngôn vốn chẳng sai lầm. Phú quý, bần tiện, thọ, yểu, cùng, thông, mạng trời chưa từng thiên vị. Cảnh duyên xảy đến như hình ảnh hiện trong gương. Kẻ trí chỉ quan tâm đến vẻ mặt ở ngoài gương, người ngu uổng công ghét hình ảnh hiện trong gương. Chuyện trái nghịch xảy đến, vui chịu mới gọi là “lạc thiên”. Chẳng oán, chẳng trách mới gọi là “lập mạng”.</p><p class="!mb-0 text-justify indent-8 leading-8">Con có bốn nhân là: một là báo ân, hai là báo oán, ba là trả nợ, bốn là đòi nợ.</p><ul class="!mb-0 !list-none space-y-3 !pl-4"><li class="!mb-0 text-justify leading-8">- Báo ân nghĩa là trong đời trước cha mẹ có ân với con, nên nó sanh vào làm con để hầu hạ, phụng dưỡng, sống thờ, chết chôn. Cho nên cha mẹ còn sống ắt chăm sóc, chết thì cúng giỗ. Thậm chí tận tụy với vua, lợi dân, tên lưu sử xanh, khiến thiên hạ hậu thế kính người ấy bèn kính luôn cả cha mẹ, như các ông: Tăng Lỗ Công, Trần Trung Tú, Vương Quy Linh, Sử Đại Thành (Ba ông Tăng, Trần, Vương đều là bậc danh thần đời Tống. Ông Sử là trạng nguyên đầu đời Thanh. Bốn ông cùng tin Phật, nhưng chỉ mình Trung Tú ngộ nhập rất sâu. Do ông đời trước là cao tăng nên tuy hưởng phú quý vẫn không quên mất bổn nhân). Con hiếu, cháu hiền trong đời này đều thuộc về loại này.</li><li class="!mb-0 text-justify leading-8">- Báo oán là đời trước cha mẹ từng phụ ân con, nên sanh vào làm con để báo oán. Lúc nhỏ ngỗ nghịch khiến cha mẹ buồn lòng, lớn lên gây họa khiến cha mẹ mắc vạ lây. Lúc sống, ngọt bùi chẳng đoái, chết đi phải mang nhục dưới chín suối. Lại còn những trường hợp quá đáng, con có quyền vị trọng yếu, mưu chuyện phi pháp, diệt môn tàn tộc, quật mồ cuốc mả, khiến cho thiên hạ hậu thế thóa mạ kẻ ấy, chửi lây cả cha mẹ. Như Vương Mãng, Tào Tháo, Đổng Trác, Tần Cối v.v... chính là loại này.</li><li class="!mb-0 text-justify leading-8">- Đền nợ là đời trước mắc nợ cha mẹ tiền tài. Nay để đền trả bèn sanh làm con. Nếu nợ nhiều sẽ làm con suốt đời. Nếu nợ ít, chẳng thể tránh khỏi giữa chừng chết trước cha mẹ, như: học sắp thành tài bèn mất mạng, buôn bán vừa có lời bèn chôn thân.</li><li class="!mb-0 text-justify leading-8">- Đòi nợ là đời trước cha mẹ nợ tiền tài của con, nó bèn sanh vào làm con để đòi nợ. Nợ nhỏ sẽ uổng công biếu xén mời thầy, dạm vàng hỏi vợ, dạy răn các thứ, những mong con được thành người, nhưng đại hạn chợt xảy đến, hốt nhiên chết mất. Nợ lớn thì chẳng chỉ có thế, ắt còn phải mất nghiệp phá sản, nhà bại, người mất mới thôi!</li></ul></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Chuyện trong thiên hạ đều có nhân duyên. Sự được thành hay chăng đều do nhân duyên xui khiến. Dù có người làm cho việc thành hay hoại, nhưng quyền lực thật sự là do nhân trước của ta, chứ chẳng do duyên hiện tại. Hiểu điều này sẽ vui biết mạng trời, chẳng oán, chẳng trách, làm đúng theo địa vị, chẳng chứng nhập mà tự đạt được vậy.</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Với chuyện vun bồi đức hãy nên thường xem các sách Thái Thượng Cảm Ứng, Âm Chất Văn. Với điều thiện sẽ tùy phận, tùy lực mà hành. Với điều ác bỏ đi như oán, như thù. Ông Viên Liễu Phàm hành pháp Công Quá Cách, nhận chân được bản thể, chẳng mảy may buông lung. Vì thế, mạng vốn chẳng thọ bèn được thọ, không có đại công danh bèn được đại công danh, không con bèn có con.</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Phàm những người hiển đạt nhờ khoa cử, tổ phụ họ đều có đại âm đức. Nếu không âm đức, cậy sức người để hiển đạt, sau này ắt gặp đại họa; chẳng thà không hiển đạt còn hơn. Xem khắp cuộc đời của các bậc đại thánh, đại hiền xưa nay, đều là do tổ phụ họ tích đức mà nên. Đại phú, đại quý cũng thế. Con cháu họ sanh ra phú quý, chỉ biết hưởng phước tạo nghiệp, quên mất công tổ phụ một phen vun bồi. Do đấy, chôn vùi tổ đức, phá sạch tổ nghiệp, cam chịu bần tiện. Đấy chính là bệnh chung của kẻ phú quý trong cả cõi đời.</p><p class="!mb-0 text-justify indent-8 leading-8">Đời đời giữ cho đức tổ tiên vĩnh cửu chẳng bị chìm lấp chỉ có mỗi nhà họ Phạm ở Tô Châu là bậc nhất từ xưa đến nay. Từ Văn Chánh Công (Phạm Trọng Yêm) đời Tống đến nay, đến mãi cuối đời Thanh, hơn tám trăm năm, gia phong chẳng suy sụp, con cháu nối tiếp nhau đỗ đạt, đáng gọi là nhà thư hương đời đời. Nhà họ Bành ở Trường Châu từ đầu đời Thanh đến nay, khoa bảng đứng đầu thiên hạ. Nhà ấy có bốn năm người đỗ trạng nguyên, có lúc cả mấy anh em cùng làm quan cực phẩm. Nhưng họ đời đời sùng phụng Phật pháp, dù là trạng nguyên, tể tướng vẫn hằng ngày đọc Cảm Ứng, Âm Chất Văn để noi gương thành ý, chánh tâm, tận tụy thờ vua, giúp dân.</p><p class="!mb-0 text-justify indent-8 leading-8">Gã cuồng sanh kia bảo những sách ấy là để hạng ông già, bà cả quê mùa tin theo, chẳng những chẳng biết vì sao thánh hiền là thánh hiền, mà còn chẳng biết vì sao người là người nữa kia! Sống làm thây đi, thịt chạy, chết mục nát cùng cỏ cây. Lại còn ác nghiệp khó tiêu, vĩnh viễn trầm luân trong ác đạo. Gã ấy cứ vênh váo tự coi mình là hạng học rộng thông suốt, đến nỗi đời sau, những danh từ “thiên, địa, phụ mẫu” còn chẳng được nghe đến, còn đáng gọi là hay ư?</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Đừng có nói nhà mình nghèo hèn, chẳng thể rộng chứa âm đức, hành phương tiện lớn. Phải biết rằng ba nghiệp thân - khẩu - ý đều ác thì không có gì ác bằng, còn nếu ba nghiệp thân - khẩu - ý đều thiện thì không có chi thiện bằng!</p><p class="!mb-0 text-justify indent-8 leading-8">Như có người ngu chẳng tin nhân quả, chẳng tin tội phước báo ứng ngông nghênh, ngạo ngược, dựa theo những điều đã nói trong An Sĩ Toàn Thư mà giảng cho kẻ ấy, khiến hắn bắt đầu tin nhân quả dần dần, kế đó thâm tín Phật pháp, cuối cùng là vãng sanh Tây Phương, liễu sanh thoát tử. Độ một người như thế, công đức vô lượng vô biên, huống hồ là nhiều người.</p><p class="!mb-0 text-justify indent-8 leading-8">Nhưng mình phải nghiêm túc không tỳ vết mới cảm ứng được người chung quanh. Vợ con mình tin nhận, vâng làm, người khác trông thấy mới ham thích, nào phải đâu là tiền của nhiều mới tích chứa âm đức được!</p></div>
    <div class="space-y-4 border-t border-brand-primary/20 pt-8 first-of-type:border-t-0 first-of-type:pt-0"><p class="!mb-0 border-l-4 border-brand-primary pl-4 font-serif text-xl font-semibold leading-9 text-text-primary">* Người sanh trong thế gian có được cái vốn để thành đức, thành tài, dựng công lập nghiệp, và có được một tài, một nghề để nuôi thân cùng gia đình, đều là do sức chủ trì của văn tự mà được thành tựu. Chữ nghĩa là của cải quý báu nhất trong thế gian, có thể khiến kẻ phàm thành thánh, biến kẻ ngu thành trí, kẻ nghèo hèn thành phú quý, kẻ tật bệnh trở thành khỏe mạnh. Đạo mạch thánh hiền được lưu truyền thiên cổ; kinh doanh nuôi sống mình và gia đình, để của cải lại cho con cháu, không việc gì chẳng nhờ vào sức lực chữ nghĩa. Nếu trên đời không có chữ nghĩa, hết thảy sự lý sẽ đều chẳng thành lập được, con người cũng chẳng khác gì cầm thú!</p><p class="!mb-0 text-justify indent-8 leading-8">Chữ nghĩa đã có công sức như thế, tất nhiên phải nên trân trọng, yêu tiếc. Trộm thấy người đời nay mặc tình khinh thường, làm nhơ chữ nghĩa, đúng là xem của cải chí bảo khác gì phân, đất! Đời này chẳng bị giảm phước, tổn thọ; đời sau cũng bị vô tri, vô thức đấy thôi! Chẳng những chớ xem thường, làm ô uế, vứt bỏ những văn tự hữu hình; đối với những văn tự vô hình cũng chẳng được khinh thường, ô uế, vứt bỏ! Nếu chẳng ra sức thực hành “hiếu, đễ, trung, tín, lễ, nghĩa, liêm, sỉ” là đã mất cả tám chữ. Tám chữ ấy đã mất thì sống là loài cầm thú mặc áo, đội mũ; chết sẽ đọa tam đồ, ác đạo!</p></div>
    <div class="my-10 flex items-center justify-center gap-4" aria-hidden="true"><span class="h-px w-20 bg-gradient-to-r from-transparent to-brand-primary"></span><span class="text-xl text-brand-primary">❀</span><span class="h-px w-20 bg-gradient-to-l from-transparent to-brand-primary"></span></div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    "question": "Quan niệm “Bồ Tát sợ nhân, chúng sanh sợ quả” thể hiện sự khác biệt cốt lõi nào giữa Bồ Tát và chúng sanh trong nhận thức và hành động đối với nhân quả?",
    "options": {
      "a": "Bồ Tát coi mọi phước họa đều do mệnh trời định sẵn, còn chúng sanh tin rằng có thể dùng tiền tài để cải biến.",
      "b": "Bồ Tát sợ ác quả nên đã đoạn trừ ác nhân từ trước, trong khi chúng sanh thường tạo ác nhân rồi mới nhọc nhằn tìm cách né tránh ác quả.",
      "c": "Bồ Tát chỉ làm điều thiện nhỏ để mong đại phước, trong khi chúng sanh vừa gặp nghịch cảnh liền oán trời trách người.",
      "d": "Bồ Tát hoàn toàn không chịu ảnh hưởng của quy luật nhân quả, còn chúng sanh luôn bị nhân quả chi phối."
    },
    "answer": "b"
  },
  {
    "question": "Theo văn bản, khái niệm “Sanh báo” trong giáo lý báo thông ba đời được hiểu là trường hợp nào?",
    "options": {
      "a": "Đời này làm điều thiện hay điều ác, đến đời sau mới hưởng phước hoặc mắc tội.",
      "b": "Đời này làm điều thiện hay điều ác, đến đời thứ ba trở đi hoặc vô lượng kiếp sau mới chịu quả báo.",
      "c": "Đời này làm điều thiện hay điều ác, ngay trong đời này nhận phước hoặc mắc họa.",
      "d": "Đời trước làm ác nhưng đời này phát tâm Bồ Đề nên tội nghiệp được tiêu trừ ngay lập tức."
    },
    "answer": "a"
  },
  {
    "question": "Khi gặp chuyện trái nghịch hoặc tai ương bất ngờ xảy đến, thái độ ứng xử đúng đắn theo tinh thần “lạc thiên” và “lập mạng” là gì?",
    "options": {
      "a": "Tin rằng mọi tai họa xảy đến hoàn toàn do sức mạnh duyên hiện tại chứ không liên quan đến nhân quá khứ.",
      "b": "Dừng làm điều thiện ngay lập tức vì thấy việc tích đức không mang lại hiệu quả tức thì.",
      "c": "Oán trời trách người vì cho rằng làm lành mà vẫn mắc họa là điều bất công.",
      "d": "Vui vẻ chấp nhận, không oán trách, xem đó là dịp trả nợ và sanh tâm sám hối tội lỗi."
    },
    "answer": "d"
  },
  {
    "question": "Dựa vào văn bản, trường hợp con cái 'học sắp thành tài bèn mất mạng' hoặc 'buôn bán vừa có lời bèn chôn thân' là hiện tượng thuộc về nhân duyên sanh con nào?",
    "options": {
      "a": "Báo ân sâu (khiến thiên hạ kính trọng cha mẹ và tên lưu sử xanh).",
      "b": "Đền nợ ít (nợ tiền tài đời trước ít nên giữa chừng chết trước cha mẹ).",
      "c": "Đòi nợ lớn (khiến cha mẹ phải phá sản, nhà bại người mất mới thôi).",
      "d": "Báo oán lớn (đời trước bị phụ ân nặng nên diệt môn tàn tộc)."
    },
    "answer": "b"
  },
  {
    "question": "Văn bản giải thích ra sao về hiện tượng kẻ làm điều ác nhưng hiện tại vẫn được hưởng phước báu, giàu sang?",
    "options": {
      "a": "Do quy luật nhân quả có sự thiên vị đối với những kẻ có quyền thế và giàu có.",
      "b": "Do kẻ đó đã dùng công đức nhỏ hiện tại để xóa bỏ hoàn toàn ác nghiệp đã tạo.",
      "c": "Do quả báo ác chỉ xuất hiện ở đời hiện tại chứ không ảnh hưởng đến các đời sau.",
      "d": "Do phước đức từ đời trước của người đó đã vun trồng quá sâu dày; nếu không làm ác thì phước báu còn lớn hơn nữa."
    },
    "answer": "d"
  },
  {
    "question": "Tác giả cảnh báo điều gì về thái độ đối với chữ nghĩa (văn tự hữu hình và vô hình)?",
    "options": {
      "a": "Chỉ có văn tự hữu hình trên sách vở mới cần trân trọng, còn các chuẩn mực đạo đức vô hình không quan trọng.",
      "b": "Chữ nghĩa chỉ dành cho hạng học rộng vâng làm, người dân quê mùa không cần quan tâm.",
      "c": "Khinh thường chữ nghĩa hữu hình đời này sẽ bị giảm phước tổn thọ, đời sau vô tri; bỏ quên chữ nghĩa vô hình (8 nết) thì sống như cầm thú.",
      "d": "Chữ nghĩa chỉ là công cụ phương tiện buôn bán, không ảnh hưởng đến phước báu hay phẩm đạo con người."
    },
    "answer": "c"
  }
]

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-21-vi-2-giang-nhan-qua-ve-mat-su',
  slug: 'bai-21-vi-2-giang-nhan-qua-ve-mat-su',
  title: '2. Giảng nhân quả về mặt Sự',
  type: 'article',
  status: 'published',
  order: 3,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: lessonMaterialUrl('Bản_đồ_nhân_quả_tâm_linh.png'),
      readingContent,
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: lessonMaterialUrl('Đại_Đạo_Nhân_Quả.pdf'),
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/TyMkl4P4nZA',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/4f1O7CGLvVFpU9rF1JGY6p?si=JCoEfwAFQm6XXHGzFUHyRw',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Giảng nhân quả về mặt Sự',
    passPercentage: 70,
    questions,
  },
}

export default lesson
