import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section>
    <h2>LỜI TỰA</h2>
    <p>Pháp môn Tịnh Ðộ lý cực cao sâu, sự cực giản dị. Do vậy, người thiên tư thông mẫn, tri kiến cao siêu thường xem Tịnh Ðộ là pháp tu của bọn ngu phu, ngu phụ, chẳng chịu tu trì. Nào biết đây là pháp môn rốt ráo để mười phương tam thế hết thảy chư Phật, trên thành Phật đạo, dưới độ chúng sanh, thành thỉ, thành chung. Họ thấy kẻ ngu phu, ngu phụ tu được pháp này bèn coi thường, sao chẳng xét trong hội Hoa Nghiêm, bậc đã chứng bằng với Phổ Hiền, bằng với chư Phật, vẫn phải dùng mười đại nguyện vương hồi hướng vãng sanh Tây Phương Cực Lạc ngõ hầu viên mãn Phật Quả? Miệt thị pháp môn Tịnh Ðộ chẳng chịu tu là coi những vị trong hội Hoa Nghiêm thuộc hạng người gì? Chỗ quy tông cuối cùng của kinh Hoa Nghiêm có đáng nên tôn trọng hay nên coi thường đây?</p>
    <p>Có thái độ như vậy không có gì khác hơn là do chưa xét kỹ nguyên do của từng pháp môn thông thường và đặc biệt, cũng như tự lực, Phật lực, đại, tiểu, khó, dễ, nên mới đến nỗi như thế. Nếu đã xét kỹ, há chẳng học đòi Hoa Nghiêm Hải Chúng, nhất trí tiến hành cùng cầu vãng sanh ư? Ấn Quang tôi từ lúc búi tóc đọc sách, nhiễm ngay phải cái độc bài Phật của Hàn, Âu, Trình, Chu, may là không có được cái tài như Hàn, Âu, Trình, Chu. Nếu như có được chút tài như họ, ắt sẽ tự mình lầm, khiến người lầm, thân còn sống mà đã hãm trong địa ngục A Tỳ mất rồi. Từ năm mười bốn, mười lăm tuổi về sau, bệnh nặng nhiều năm. Từ đấy chiêm nghiệm khắp xưa nay, xem kỹ kinh sách, mới hay những thuyết do Hàn, Âu, Trình, Chu lập đó đều là những tri kiến quẩn quanh ngoài cửa ngõ, tuyệt chẳng đạt đến những sự huyền áo trong nhà.</p>
    <p>Nhược quan1 được một năm, tôi liền xuất gia làm Tăng, chuyên tu Tịnh nghiệp. Thề trọn một đời này làm một kẻ tự tu, chẳng lập môn đình, rộng thâu đồ chúng đến nỗi con cháu đời sau làm Phật pháp bại hoại, kéo cả Ấn Quang tôi vào trong địa ngục A Tỳ chịu khổ với chúng. Ðến năm Quang Tự 19 (Quý Tỵ - 1893), hòa thượng Hóa Văn chùa Pháp Vũ ở Phổ Ðà Sơn lên kinh đô thỉnh Ðại Tạng Kinh, nhờ tôi coi sóc việc ấn loát. Xong việc, Hòa Thượng mời tôi cùng về núi. Biết tôi chẳng thích tham gia Tăng sự, Ngài cho tôi ở riêng một liêu, tùy ý tu trì. Ðến nay đã hơn ba mươi lăm năm rồi. Ở núi lâu ngày, có việc phải dùng đến bút mực viết lách, tuyệt chẳng dùng đến tên gọi Ấn Quang. Ngay cả những văn tự cần phải ký tên, cũng chỉ tùy tiện viết hai chữ là xong. Vì thế trong hai mươi năm qua, không có người khách nào đến thăm, cũng không có thư từ qua lại làm phiền.</p>
    <p>Năm đầu Dân Quốc (1911), cư sĩ Cao Hạc Niên đem mấy thiên văn cảo đăng trên Phật Học Tùng Báo, chẳng dám dùng tên Ấn Quang, mà dùng tên Ấn Quang thường tự xưng là Thường Tàm Quý Tăng. Vì thế, ký tên là Thường Tàm. Cư sĩ Từ Uất Như và Châu Mạnh Do tưởng lầm là Kiến Thường, nghe nói lầm như vậy cả ba bốn năm chẳng hề biết. Sau Mạnh Do lên núi bái yết, xin quy y, đem mấy thiên bản cảo tệ hại gởi cho Uất Như, đưa in ở kinh đô, đặt tên là Ấn Quang Pháp Sư Văn Sao khiến cho văn tôi gai mắt khắp mọi người cao nhã nên càng thêm hổ thẹn.</p>
    <p>Năm Dân Quốc thứ bảy, thứ tám (1918-1919), họ lại lôi ra thêm mấy thiên nữa, soạn thành sách Tục Biên, in chung với cuốn Sơ Biên. Năm Dân Quốc thứ chín, giao cho Thượng Hải Thương Vụ Ấn Thư Quán sắp chữ thành hai cuốn để làm bản lưu. Mùa Xuân năm Dân Quốc thứ 10, sách in xong. Quang tôi lại qua Dương Châu, đem bản sắp chữ năm Dân Quốc thứ 9 khắc thành một bản, chia làm bốn cuốn. Năm Dân Quốc thứ 11, lại giao cho Thương Vụ Ấn Thư Quán in thành bốn cuốn. Khi ấy, các cư sĩ chỉ yêu cầu in hai vạn bộ, nhưng đến khi Thương Vụ Ấn Thư Quán in xong, gởi ra bán, số ấy vẫn chẳng đủ!</p>
    <p>Mùa Ðông năm Dân Quốc thứ 14 (1925), lại giao cho Trung Hoa Thư Cục in bản tăng quảng (bản mở rộng – do thêm vào những bài mới), cũng chia thành bốn cuốn, dày hơn lần in trước một trăm tờ. Mùa Hạ năm nay in sách, do phong trào công nhân đấu tranh, giá in rất cao, chỉ in được hai ngàn bản. Bản gốc đã đem đánh máy ra thành bốn bản sao thì nhà in giữ lại hai bản, trả về cho Quang hai bản. Tôi bèn giao cho Hàng Châu Chiết Giang Ấn Loát Công Ty in trước một vạn bản, sau đó sẽ in tiếp.</p>
    <p>Một nhân duyên tình cờ nữa là cư sĩ Viên Tịnh Lý Vinh Tường trong mấy năm qua, chuyên tâm học Phật, đối với luận Khởi Tín, kinh Lăng Nghiêm, kinh Viên Giác đều viết sớ giải. Quang bảo: “Người thanh niên nên thiết thực dụng công niệm Phật trước đã, đến khi nghiệp tiêu trí rạng, chướng tận, phước dày rồi sẽ lại phát huy, tự có thể xiển minh Phật ý truyền khắp vũ trụ”. Khi ấy, ông Lý chẳng chịu là đúng. Sau vì dụng tâm quá độ, tinh thần, thân thể mỗi ngày một suy, mới hay lời tôi nói chẳng sai.</p>
    <p>Ông bèn đọc kỹ Văn Sao, hoan hỷ khôn xiết nên trích lục những nghĩa trọng yếu, chia thành từng môn, từng loại, soạn thành một cuốn, tính dùng giấy in báo in một ngàn cuốn để đáp ứng nhu cầu cần đọc ngay của độc giả. Tháng Năm, ông đến thưa chuyện cùng Quang, rồi cùng vợ thọ quy y. Tháng Tám sách in ra, chẳng lâu sau sách được thỉnh hết. Thư yêu cầu nườm nượp gởi tới, tôi bèn bảo giám ngục Tào Hà Kinh sắp đặt việc in sách. Cư sĩ Trần Ðịch Châu xin đảm nhiệm việc trình bày, cũng như chịu phí tổn đánh máy bốn bản sao. Ông lại chịu tiền in hai ngàn bản, một lúc bỏ ra gần hai vạn.</p>
    <p>Với xuất xứ của mỗi câu trong bản này, thuộc quyển nào, trang nào, ông Lý đều ghi kỹ để người đọc có thể đối chiếu với quyển Văn Sao. Do chỉ chép lấy những nghĩa trọng yếu trong các bài văn, xếp vào một loại nên trong mỗi thể loại, ý nghĩa từng đoạn trích khá giống nhau, nhưng tôi chẳng lược bớt đi, ngõ hầu người đọc được khuyên đi, khuyên lại nhiều lần sẽ đoạn ngay được lòng nghi, phát sanh lòng tin. Xuất xứ từ quyển nào, trang số mấy đều dựa theo cách đánh số trong bản Tăng Quảng Văn Sao để làm bản lưu thông vĩnh viễn, sau này không phải in lại nữa.</p>
    <p>Lại vì Văn Sao ý nhiều, nghĩa lắm, có lẽ kẻ sơ cơ khó lòng phân biệt, hiểu rõ dễ dàng được, nên tôi thuận theo cơ nghi, muốn cho họ trước hết thấy được những điều trọng yếu của pháp môn, từ đấy sẽ thiết thực tấn tu, tự đạt đến chỗ cùng cực, khỏi phải đến nỗi nhìn biển than dài hoặc đến nỗi lui sụt. Nhân đây, chép cả mục lục cuốn Văn Sao Tuyển Ðộc Biên vào sau mục lục cuốn Gia Ngôn Lục để người chưa từng nghiên cứu Phật học dễ theo dõi. Tôi trình bày duyên do như thế để mong người đọc đều biết rõ.</p>
    <p>Nguyện người thấy, người nghe đừng cho lời tôi nói là tầm thường, quê mùa rồi bỏ qua, chỉ toan cầu lấy điều cao thâm, huyền diệu. Ðạo của Nghiêu Thuấn chỉ là hiếu đễ mà thôi. Ðạo của Như Lai chỉ là Giới - Ðịnh - Huệ. Thực hành được việc tầm thường, quê mùa, hành đến cùng cực thì lý cao thâm huyền diệu há còn phải cầu nơi nào khác nữa ư? Nếu không thì chỉ cao thâm huyền diệu nơi đầu môi chót lưỡi, khi sanh tử xảy đến chẳng dùng được mảy may! Xin độc giả hãy lưu tâm!</p>
    <p>Mồng Tám tháng Chạp năm Ðinh Mão, Dân Quốc 16 (1927), Cổ Tân Thường Tàm Quý Tăng Thích Ấn Quang cẩn soạn.</p>
    <p class="my-10 text-center text-xs font-medium tracking-[0.45em] text-primary-400 dark:text-primary-500">---o0o---</p>
    <h3>Chú thích:</h3>
    <p>1. Nhược quan: là 20 tuổi. Thời cổ, con trai đến 20 tuổi làm lễ đội mũ (nhược quan), công nhận là một người trưởng thành. Theo Ấn Quang Niên Phổ, đại sư trốn nhà đi xuất gia năm 21 tuổi, vào năm Quang Tự thứ 7 (Tân Tỵ - 1881) tại chùa Nam Ngũ Ðài Liên Hoa Ðộng Tự ở núi Chung Nam, thờ hòa thượng Ðạo Thuần làm thầy.</p>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-an-quang-dai-su-gia-ngon-luc-bai-1-loi-tua',
  slug: 'bai-1-loi-tua',
  title: 'LỜI TỰA',
  type: 'article',
  status: 'published',
  order: 1,
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
    },
  ],
}

export default lesson

