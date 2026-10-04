import type { Lesson, QuizQuestion } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section class="space-y-6">
    <div class="mb-8">
      <h2 id="ket-kinh" class="mt-0 mb-2 text-3xl font-bold text-primary-700 dark:text-primary-300">3. Kết Kinh</h2>
    </div>

    <div class="mb-8">
      <h3 id="chanh-van" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Chánh Văn:</h3>
    <p>Này Xá-Lợi-Phất, ý thầy thế nào? Vì sao kinh tên là: Hết Thảy Chư Phật Sở Hộ Niệm?</p>
    <p>Này Xá-Lợi-Phất, nếu có người trai hiền gái lành nào nghe kinh này mà thọ trì, và nghe danh hiệu của đức Phật, thời những người trai hiền gái lành ấy đều được tất cả các đức Phật hộ niệm, đều được không thối chuyển nơi đạo vô thượng chánh đẳng chánh giác.</p>
    <p>Này Xá-Lợi-Phất, cho nên quý thầy đều phải tin nhận lời của Ta và của các đức Phật nói. Này Xá-Lợi-Phất, nếu có người đã phát nguyện, hiện nay phát nguyện, sẽ phát nguyện muốn sinh về cõi nước của đức Phật A Di Đà, thời những người ấy đều không thối chuyển nơi đạo Vô Thượng Chánh Đẳng Chánh Giác nơi cõi nước kia, hoặc đã sinh về, hoặc hiện nay sinh về, hoặc sẽ sinh về.</p>
    <p>Vì vậy cho nên, này Xá-Lợi-Phất, những người trai hiền gái lành nào có lòng tin thời phải nên phát nguyện sinh về cõi nước kia.</p>
    <p>Này Xá-Lợi-Phất, như Ta hôm nay ngợi khen công đức chẳng thể nghĩ bàn của các đức Phật, các đức Phật đó cũng ngợi khen công đức chẳng thể nghĩ bàn của Ta, mà nói lời này: "Đức Phật Thích Ca Mâu Ni hay làm được việc rất khó khăn hiếm có, có thể ở trong cõi Ta Bà đời ác năm món trược: kiếp trược, kiến trược, phiền não trược, chúng sinh trược, mạng trược mà Ngài chứng được ngôi Vô Thượng Chánh Đẳng Chánh Giác. Ngài vì các chúng sinh nói kinh pháp mà tất cả thế gian khó tin này. Này Xá-Lợi-Phất, phải biết rằng Ta ở trong đời ác năm trược thực hành việc khó này: được thành bậc Vô Thượng Chánh Giác và vì tất cả thế gian nói kinh pháp khó tin này, đó là rất khó."</p>
    <p>Đức Phật nói kinh này rồi, thầy Xá-Lợi-Phất cùng với quý thầy Tỳ-kheo, và cả đại chúng: Trời, Người, A-Tu-La, v.v.. nghe lời của đức Phật dạy, đều vui mừng tin nhận đảnh lễ mà lui ra. Phật nói kinh A Di Đà.</p>

    </div>

    <div class="mb-8">
      <h3 id="giai-thich-tu-ngu" class="mt-0 mb-4 text-xl font-bold text-secondary-700 dark:text-secondary-300">Giải thích từ ngữ:</h3>
    <p>1. Hộ niệm: Hộ là giúp, niệm là nhớ nghĩ đến; nhớ nghĩ đến để giúp đỡ.</p>
    <p>2. Sở: là đối tượng của vọng tâm, cũng gọi là biến kế sở chấp.</p>
    <p>3. Nghe và thọ trì kinh này: Kinh A Di Đà hay kinh chư Phật sở hộ niệm, hay chính là tự tánh tự độ của mình vậy. Văn là nghe lại tự tánh, thọ là nhận lại tự tánh, trì là giữ gìn tự tánh.</p>
    <p>4. Phát nguyện: Phát nguyện ở đây chính là phát khởi tâm Bồ-đề, nhờ lực niệm tự tánh Di-đà để đạt thành nhất tâm bất loạn; nó khế hợp với ba pháp ấn là: không – vô tướng – vô tác hay vô nguyện. Khác với phát nguyện của Nhị thừa, là dùng ý thức phát khởi một nguyện lực để làm việc lợi ích cho chúng sanh, thuộc pháp hữu vi.</p>
    <p>5. Không thối chuyển: Nhờ nương vào tự tánh Di-đà nên tâm không còn lui sụt. Ở bậc Bồ-tát địa thứ tám trở lên, tức Bất động địa thì tâm mới không lui sụt.</p>
    <p>6. Kiếp trược: Kiếp trược là nói về kiếp sống của con người trong cõi đời này đầy khó khăn, bất an và khổ lụy.</p>
    <p>7. Kiến trược: là cái thấy biết của con người cũng còn hạn cuộc và đầy dẫy những sai lầm.</p>
    <p>8. Phiền não trược: là những thứ bức xúc trong tâm, làm cho ngày đêm bừng bừng trong lửa giận.</p>
    <p>9. Chúng sanh trược: là thân tứ đại duyên sanh chứa đầy ô trược, và tăng giảm bất chừng.</p>
    <p>10. Mạng trược: là tuổi thọ con người bị chi phối bởi nguồn sống và môi trường sống bị ô nhiễm, và cả cách sống không lành mạnh, tạo tiền đề cho tuổi thọ bị giảm dần.</p>

    </div>

    <div class="mb-8">
      <h3 id="luoc-giai" class="mt-0 mb-4 text-2xl font-bold text-secondary-700 dark:text-secondary-300">Lược giải:</h3>
    <p>Đoạn này đức Phật nêu nghi vấn với ngài Xá Lợi Phất, rồi đức Phật tuần tự lý giải, vì rất quan trọng. Đức Phật hỏi: “Ý thầy nghĩ sao? Sao tên kinh là: Hết thảy chư Phật sở hộ niệm?”.</p>
    <p>Sở là đối tượng của vọng tâm, hộ có nghĩa là giúp đỡ, niệm là nhớ nghĩ đến. Như vậy, chư Phật có dùng vọng tâm nhớ nghĩ đến để giúp đỡ cho hành giả được tâm không thối chuyển nơi đạo vô thượng chánh đẳng chánh giác không? Hoàn toàn không. Đức Phật không thể tu thay cho ai được giải thoát giác ngộ. Nếu người này tu mà người khác được giải thoát giác ngộ, là trái luật nhân quả. Cũng vậy, không ai dùng vọng thức để niệm danh hiệu Phật A Di Đà cho người khác được vãng sanh; bởi như vậy là cũng trái luật nhân quả. Vì vậy cho nên, hành giả phải cẩn thận trong lúc hành pháp, để khỏi sai lạc lời đức Phật dạy. Như vậy sở hộ niệm ở đây chính là do công phu niệm tự tánh Di Đà, dần dần đạt thành nhất tâm bất loạn; đó chính là lực sở hộ niệm vậy; chứ không phải có một sở hộ niệm nào cả. Như vậy, cả kinh lẫn pháp đều không tịch, tức nghe lại tự tánh của mình, thọ là nhận lại tự tánh của mình, và trì là giữ gìn tự tánh của mình, nên mới không thối chuyển nơi đạo vô thượng chánh đẳng chánh giác. Vì vậy cho nên ở kinh Kim Cương đức Phật nói: “Không một pháp có thể nói ra, mà tạm nói là nói pháp vậy thôi”.</p>
    <p>Pháp không tịch ấy chính là pháp không pháp, hay chính là cái tánh không xưa nay vắng lặng của mình, nên suy không ra nghĩ không tới. Chỉ nghe kinh hiểu chỗ dụng rồi thì tự mình phải hành trì ngay nơi tâm mình, nên kinh nói “văn thị kinh, thọ trì giả”. Chính cái pháp không pháp ấy, tự nó hóa giải mọi sở niệm thuộc vọng thức, nên nói “Tự tánh Di Đà, duy tâm Tịnh độ”. Nếu có sở niệm, thì chính cái sở niệm ấy là hư vọng (phàm sở hữu tướng giai thị hư vọng), nên không thể dẫn đến nhất tâm bất loạn được. Đây là điều mà đức Phật Thích Ca đã xác quyết, và chư Phật cũng xác quyết như vậy, nên nói “Phải tin nhận lời của Ta và của chư Phật nói”.</p>
    <p>Đến đây là nói phát nguyện sanh về cõi Phật A Di Đà, hay phát tâm giải thoát giác ngộ (phát tâm Bồ-đề). Nếu có người đã phát nguyện, đang phát nguyện, sẽ phát nguyện sanh về cõi của đức Phật A Di Đà hay chính là trở lại tự tánh của mình, thì người ấy sẽ không thối chuyển nơi đạo vô thượng chánh đẳng chánh giác. Như vậy, phát nguyện ở đây không như phát nguyện của Nhị thừa là dùng ý thức phát khởi một nguyện lực, làm lợi ích về vật chất cũng như tinh thần cho chúng sanh, thuộc pháp hữu vi.</p>
    <p>Phát nguyện ở đây chính là phát khởi tâm Bồ-đề, bằng cách niệm tự tánh Di Đà bất sanh bất diệt của mình, làm cho đạt thành nhất tâm bất loạn, để được sống trong cõi tịnh. Phát nguyện ở đây chính là thực hành ba pháp ấn: Không – vô tướng – vô tác hay vô nguyện, mới khế hợp với giáo lý viên đốn A Di Đà.</p>
    <p>Vì vậy cho nên, pháp niệm danh tự tánh Di Đà này trực chỉ nơi chân tâm của hành giả, mà không qua phương tiện của Nhị nguyên, nên nói là “đệ nhất”. Đó chính là: “Không lập văn tự, truyền ngoài kinh giáo, trực chỉ tâm người, thấy tánh thành Phật” mà Tổ Đạt Ma chỉ dạy vậy.</p>
    <p>Vì trực chỉ vào tâm, nên đã hành trì thì đã sanh về, đang hành thì đang sanh về, sẽ hành thì sẽ sanh về. Sanh về đâu? Đến đây thì tắt lối, vì chân tâm không có chỗ chỉ, mà chỉ nói sanh về mà thôi. Nếu người nào có niềm tin, tin tự tánh Di Đà bất sanh bất diệt của mình, thì phải nên phát tâm sanh về nơi ấy.</p>
    <p>Như vậy, Phật trong sáu phương “sở hộ niệm kinh” cũng chính là Phật tánh trong tâm mình sở hộ niệm vậy.</p>
    <p>Tin tự tâm là Phật, hành tự tâm là giác, nguyện tự tâm là đạo. Phật, đạo và giác không lìa tự tâm mà có được. Như vậy, nói kia tức đây, không sai khác, nên nói: “Nay Ta khen ngợi công đức chẳng thể nghĩ bàn của chư Phật. Các đức Phật cũng khen ngợi công đức chẳng thể nghĩ bàn của Ta mà nói lời này: “Đức Phật Thích Ca hay làm được việc khó khăn hiếm có. Ngài có thể ở trong cõi Ta Bà có năm món trược: kiếp trược, kiến trược, phiền não trược, chúng sanh trược, mạng trược, mà Ngài chứng được quả Vô Thượng Chánh Đẳng Chánh Giác, lại vì các chúng sanh nói kinh pháp mà tất cả thế gian khó tin này".</p>
    <p>Kiếp trược là nói về kiếp sống của con người trong cõi đời này đầy khó khăn, bất an và khổ lụy. Nào thời khí bốn mùa nóng lạnh bất chừng, mùa màng thất thoát, nào hạn hán cho đến sóng thần, động đất; nào là chiến tranh ý thức hệ, chiến tranh tôn giáo, chiến tranh xâm chiếm tài nguyên, đất đai của nước khác, dẫn đến chiến tranh khủng bố, nào là độc tài áp bức của mạnh được yếu thua v.v.. từ thiên灾 (thiên thiên tai) cho đến nhân tai luôn ập xuống con người chưa biết lúc nào.</p>
    <p>Kiến trược là cái thấy biết của con người cũng còn hạn cuộc và đầy dẫy những sai lầm, rồi dựng lên chủ thuyết này, chủ nghĩa nọ, tôn giáo kia, quan điểm nọ, tạo tiền đề cho đối kháng và bất an.</p>
    <p>Phiền não trược là những thứ bức xúc trong tâm, làm cho ngày đêm bừng bừng trong lửa giận; mà không có một chút ánh sáng của trí tuệ lọt vào, nên cũng gọi là hỏa ngục trần gian.</p>
    <p>Chúng sanh trược là thân tứ đại duyên sanh chứa đầy những thứ không trong sạch (bất tịnh), và tăng giảm bất chừng theo thời khí bốn mùa mà phát sanh bệnh tật.</p>
    <p>Mạng trược là tuổi thọ con người bị chi phối bởi nguồn sống, môi trường sống, và cách sống không lành mạnh. Nguồn sống thì bị cái văn minh thiếu trí tuệ của con người tạo ra, như cho hóa chất vào các nguồn thức ăn, thức uống, đất đai, dòng nước và cả bầu trời, làm cho môi trường sống bị ô nhiễm mà không có chỗ nào an toàn để trốn thoát. Còn lẽ sống thì gần như tắt lịm ở tận tâm hồn, nên tạo ra cảnh con đấu cha, cha đấu con, vợ đấu chồng, chồng đấu vợ, anh chị em chống đối lẫn nhau. Ngoài xã hội thì đảng này đấu tranh với đảng nọ mà chẳng lo cho dân cho nước, sắc tộc này chống sắc tộc kia, chủ nghĩa này chống chủ nghĩa khác, quốc gia này lấn áp và cướp đoạt tài nguyên của quốc gia kia, tôn giáo này chống tôn giáo nọ, rồi gây nên cảnh hỗn mang đau khổ cho loài người.</p>
    <p>Sự xấu ác hiện hữu trong mọi khía cạnh của sự sống, nên đức Phật nói năm thứ trược. Trước hết, nhờ thấy rõ năm thứ trược, nên đưa đến nhàm chán gọi ly tham. Từ lìa tham đưa đến đoạn diệt. Từ đoạn diệt tham ái, nên đưa đến Niết-bàn. Phải thấy rõ cõi Ta-bà là uế trược để nhàm chán, rồi tha thiết phát nguyện sanh về thế giới trong sạch thanh tịnh. Đó chính là việc khó làm, mà đức Phật Thích Ca đã làm được. Còn có gì khó bằng cách làm cho vọng tâm của mình bị tan biến. Trì niệm danh tự A Di Đà Phật ư? Không được, bởi danh tự thuộc về sở tướng, tức chính là vọng lại chồng thêm vọng. Như vậy phải dùng pháp gì?</p>
    <p>Pháp mà đức Phật Thích Ca nói là “pháp mà tất cả thế gian khó tin”, bởi không có đối tượng, tức không có sở niệm. Vì cất hết mọi đối tượng, không cho vọng thức dính vào, nên nói “không thể nghĩ bàn” (bất khả tư nghì).</p>
    <p>Vì vậy cho nên, đức Phật nói: “Này Xá-Lợi-Phất! Thầy phải biết rằng, Tôi ở trong cuộc đời có năm thứ ô trược này mà thực hành việc khó này, nên thành tựu đạo quả vô thượng chánh đẳng chánh giác, và vì tất cả thế gian nói pháp khó tin này”.</p>
    <p>Đó chính là niệm tự tánh Di-đà ở trong tâm, cũng gọi là niệm Phật tam-muội, và dụng công thì phải miên mật không cho tâm leo qua cơ cảnh khác, hoặc một ngày cho đến bảy ngày, đạt đến nhất tâm bất loạn.</p>
    <p>Còn niệm danh tự A Di Đà Phật, như trên đã nói là chỉ gom đa niệm về nhất niệm, để an lập ý mà thôi; không thể nhất tâm được. Xin hành giả đừng nhầm lẫn pháp hành của Nhị thừa và Đại thừa.</p>
    <p>Đức Phật nói xong kinh, thầy Xá-Lợi-Phất và chúng Tỳ-kheo cùng hết thảy thế gian gồm: chư thiên, loài người, A-tu-la v.v… đều vui mừng tin nhận, đảnh lễ rồi lui ra.</p>

    <p>Lược giải kinh A Di Đà - Hết</p>
    </div>
  </section>
</div>
`

const questions: QuizQuestion[] = [
  {
    question: "Trong phần giải thích từ ngữ, 'Hộ niệm' được định nghĩa như thế nào?",
    options: {
      a: 'Hộ là giúp đỡ, niệm là ghi nhớ công đức của tiền nhân.',
      b: 'Hộ là bao bọc bên ngoài, niệm là quán tưởng bên trong.',
      c: 'Hộ là giúp, niệm là nhớ nghĩ đến; nhớ nghĩ đến để giúp đỡ.',
      d: 'Hộ là bảo vệ khỏi tà ma, niệm là cầu nguyện để được gia hộ.',
    },
    answer: 'c',
  },
  {
    question: "Theo văn bản, ý nghĩa của việc 'Văn, Thọ, Trì' kinh này là gì?",
    options: {
      a: 'Nghe kinh, nhận kinh từ thầy và giữ gìn bản kinh cẩn thận.',
      b: 'Nghe lại tự tánh, nhận lại tự tánh và giữ gìn tự tánh của mình.',
      c: 'Nghe giảng giải, chấp nhận giáo lý và thực hành các nghi lễ.',
      d: 'Học thuộc lòng kinh văn và truyền bá cho nhiều người khác nghe.',
    },
    answer: 'b',
  },
  {
    question: "Sự khác biệt giữa 'Phát nguyện' trong kinh này và 'Phát nguyện' của Nhị thừa là gì?",
    options: {
      a: 'Phát nguyện ở đây là phát khởi tâm Bồ-đề, niệm tự tánh để đạt nhất tâm, khế hợp với ba pháp ấn.',
      b: 'Phát nguyện trong kinh này thuộc pháp hữu vi, còn Nhị thừa là vô vi.',
      c: 'Kinh này yêu cầu phát nguyện bằng hành động, Nhị thừa chỉ cần phát nguyện bằng tâm.',
      d: 'Nhị thừa phát nguyện sinh về cõi Tịnh độ, kinh này phát nguyện ở lại Ta bà.',
    },
    answer: 'a',
  },
  {
    question: "Theo mục 'Lược giải', tại sao chư Phật không thể tu thay hay niệm Phật hộ cho người khác được giải thoát?",
    options: {
      a: 'Vì cõi Tịnh độ của Phật A Di Đà chỉ dành cho những người tự phát nguyện.',
      b: 'Vì chư Phật chỉ sử dụng vọng tâm để nhớ nghĩ, không có lực thực tế.',
      c: 'Vì chư Phật bận rộn hộ niệm cho tất cả chúng sinh trong mười phương.',
      d: 'Vì nếu người này tu mà người khác được giải thoát là trái luật nhân quả.',
    },
    answer: 'd',
  },
  {
    question: "Thuật ngữ 'Kiến trược' trong văn bản đề cập đến vấn đề gì của con người?",
    options: {
      a: 'Sự ô nhiễm của môi trường sống và nguồn thực phẩm.',
      b: 'Sự bừng bừng của lửa giận và các bức xúc trong tâm hồn.',
      c: 'Cái thấy biết hạn cuộc, đầy dẫy sai lầm và các chủ thuyết gây đối kháng.',
      d: 'Thân xác tứ đại chứa đầy những thứ không trong sạch.',
    },
    answer: 'c',
  },
  {
    question: "Vì sao việc niệm danh tự (tên gọi) Phật A Di Đà được cho là không thể đạt đến 'nhất tâm' tuyệt đối như niệm tự tánh?",
    options: {
      a: 'Vì Phật A Di Đà không thể nghe thấy lời cầu nguyện qua danh tự.',
      b: 'Vì niệm danh tự chỉ dành cho các bậc thánh Nhị thừa.',
      c: "Vì danh tự thuộc về sở tướng (vọng thức), dẫn đến tình trạng 'vọng chồng thêm vọng'.",
      d: 'Vì niệm danh tự đòi hỏi quá nhiều thời gian từ một đến bảy ngày.',
    },
    answer: 'c',
  },
  {
    question: "Khái niệm 'Mạng trược' được giải thích bao gồm những yếu tố nào sau đây?",
    options: {
      a: 'Sự biến đổi của bốn mùa nóng lạnh bất thường gây thất bát mùa màng.',
      b: 'Tuổi thọ bị chi phối bởi môi trường ô nhiễm và cách sống thiếu lành mạnh, xung đột.',
      c: 'Chiến tranh tôn giáo và các thiên tai như sóng thần, động đất.',
      d: 'Sự suy giảm trí tuệ và khả năng học hỏi giáo pháp.',
    },
    answer: 'b',
  },
  {
    question: "Theo văn bản, 'vãng sanh' về cõi Phật A Di Đà thực chất nên được hiểu như thế nào?",
    options: {
      a: 'Là được đức Phật Thích Ca Mâu Ni dẫn đi sau khi qua đời.',
      b: 'Là việc trở lại với tự tánh của chính mình để sống trong cõi tịnh.',
      c: 'Là kết quả của việc làm nhiều việc thiện để được lên thiên đàng.',
      d: 'Là sự di chuyển thần thức từ thế giới này sang một hành tinh khác.',
    },
    answer: 'b',
  },
  {
    question: "Tại sao kinh pháp này lại được gọi là 'tất cả thế gian khó tin'?",
    options: {
      a: 'Vì con người trong đời ác năm trược không còn lòng tin vào thần linh.',
      b: 'Vì không có ai đủ trình độ trí tuệ để đọc hiểu hết các từ ngữ cổ.',
      c: 'Vì các đức Phật mười phương chưa bao giờ xác nhận về kinh này.',
      d: 'Vì nó không có đối tượng, không cho vọng thức dính vào và vượt ngoài suy nghĩ thông thường.',
    },
    answer: 'd',
  },
  {
    question: "Câu nói 'Không lập văn tự, truyền ngoài kinh giáo, trực chỉ tâm người, thấy tánh thành Phật' của Tổ Đạt Ma được trích dẫn để minh chứng cho điều gì?",
    options: {
      a: 'Minh chứng rằng không cần đọc kinh A Di Đà cũng có thể thành Phật.',
      b: 'Cho thấy Phật giáo có rất nhiều tông phái khác nhau với các giáo lý mâu thuẫn.',
      c: 'Khẳng định pháp niệm tự tánh Di Đà trực chỉ chân tâm, không qua phương tiện nhị nguyên.',
      d: 'Nhắc nhở hành giả nên bỏ việc niệm Phật để chuyển sang tu Thiền định.',
    },
    answer: 'c',
  },
]

const lesson: Lesson = {
  id: 'lesson-luoc-giai-kinh-a-di-da-bai-3-ket-kinh',
  slug: 'bai-3-ket-kinh',
  title: 'Kết Kinh',
  type: 'article',
  status: 'published',
  order: 7,
  createdAt: '2026-10-04',
  updatedAt: '2026-10-04',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      infographicUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/3-ket-kinh/%C3%9D_ngh%C4%A9a_Kinh_Di_%C4%90%C3%A0.png',
      readingContent,
      tableOfContents: [
        { id: 'ket-kinh', label: '3. Kết Kinh' },
        { id: 'chanh-van', label: 'Chánh Văn:', indent: 1 },
        { id: 'giai-thich-tu-ngu', label: 'Giải thích từ ngữ:', indent: 1 },
        { id: 'luoc-giai', label: 'Lược giải:', indent: 1 },
      ],
    },
    {
      type: 'slide',
      label: 'Slide',
      icon: 'mdi:presentation',
      slideUrl: 'https://cdn.jsdelivr.net/gh/skill-wanderer/chanhdao-material@main/kinh-a-di-da/3-ket-kinh/Th%E1%BB%A9c_T%E1%BB%89nh_T%E1%BB%B1_T%C3%A1nh.pdf',
    },
    {
      type: 'video',
      label: 'Video',
      icon: 'mdi:play-circle-outline',
      videoUrl: 'https://www.youtube.com/embed/gnEv5cUOY2A',
    },
    {
      type: 'audio',
      label: 'Audio',
      icon: 'mdi:headphones',
      audioEmbedUrl: 'https://open.spotify.com/embed/episode/5pZWIADoN2qL4QUWqJNxqd?si=rbgHM28dT-qaP2qFvYTtFg',
    },
  ],
  quiz: {
    title: 'Câu hỏi ôn tập - Kết Kinh',
    passPercentage: 70,
    questions,
  },
}

export default lesson
