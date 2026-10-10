import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose-content">
  <section>
    <h2>NGHI THỨC TRÌ TỤNG</h2>
    <h2>DÂNG HƯƠNG</h2>
    <p>
Nguyện đem lòng thành kính<br />
Gởi theo đám mây hương<br />
Phưởng phất khắp mười phương<br />
Cúng dường ngôi tam bảo<br />
Thề trọn đời giữ đạo<br />
Theo tự tánh làm lành<br />
Cùng pháp giới chúng sanh<br />
Cầu Phật từ gia hộ<br />
Tâm bồ-đề kiên cố<br />
Chí tu học vững bền<br />
Xa bể khổ nguồn mê<br />
Chóng quay về bờ giác.
    </p>
    <p>(Chủ lễ đứng lên cắm nhang, rồi đứng thẳng cùng đại chúng đọc lớn)</p>
    <h2>TÁN DƯƠNG PHẬT</h2>
    <p>
Đấng Pháp Vương vô thượng<br />
Ba cõi chẳng ai bằng<br />
Thầy dạy khắp trời người<br />
Cha lành chung bốn loài<br />
Quy y trọn một niệm<br />
Dứt sạch nghiệp ba kỳ<br />
Xưng dương cùng tán thán<br />
Ức kiếp không cùng tận.
    </p>
    <h2>LỄ PHẬT</h2>
    <p>
Phật, chúng sanh tánh thường rỗng lặng<br />
Đạo cảm thông không thể nghĩ bàn<br />
Lưới đế châu ví đạo tràng<br />
Mười phương Phật bảo hào quang sáng ngời<br />
Trước bảo tọa, thân con ảnh hiện<br />
Cúi đầu xin thệ nguyện quy y.
    </p>
    <h2>ĐẢNH LỄ TAM BẢO</h2>
    <p>
- Chí tâm đảnh lễ: nam-mô tận hư không<br />
biến pháp giới quá, hiện, vị lai chư Phật,<br />
tôn pháp, hiền thánh tăng thường trú tam<br />
bảo. (1 lạy)
    </p>
    <p>
- Chí tâm đảnh lễ: nam-mô Ta-bà Giáo<br />
Chủ Điều Ngự Bổn Sư Thích-ca Mâu-ni<br />
Phật, Long Hoa Giáo Chủ Di-lặc Tôn Phật,<br />
Đại Trí Văn-thù-sư-lợi bồ-tát, Đại Hạnh Phổ<br />
Hiển bồ-tát, Hộ Pháp Chư Tôn bồ-tát, Linh<br />
Sơn Hội Thượng Phật bồ-tát. (1 lạy)
    </p>
    <p>
- Chí tâm đảnh lễ: nam-mô Tây Phương<br />
Cực Lạc thế giới Đại Từ Đại Bi A-di-đà Phật,<br />
Đại Bi Quán Thế Âm bồ-tát, Đại Thế Chí<br />
bồ-tát, Đại Nguyện Địa Tạng Vương bồ-tát,<br />
Thanh Tịnh Đại Hải Chúng bồ-tát. (1 lạy)
    </p>
    <p>(Khai chuông mõ rồi tụng tiếp)</p>
    <p>
Thân Căn Giới Đại Thừa<br />
Khắp Pháp Giới Chư Phật O (lạy 1 lạy)
    </p>
    <p>
Nam Mô Cõi An Lạc Phương Tây<br />
A Di Đà Như Lai<br />
Thân Hóa Đến Mười Phương<br />
Khắp Pháp Giới Chư Phật O (lạy 1 lạy)
    </p>
    <p>
Nam Mô Cõi An Lạc Phương Tây<br />
Giáo Hạnh Lý Ba Kinh<br />
Tột Nói Bày Y Chánh<br />
Khắp Pháp Giới Tôn Pháp O (lạy 1 lạy)
    </p>
    <p>
Nam Mô Cõi An Lạc Phương Tây<br />
Quán Thế Âm Bồ Tát<br />
Thân Trí Sáng Vô Biên<br />
Khắp Pháp Giới Bồ Tát O (lạy 1 lạy)
    </p>
    <p>
Nam Mô Cõi An Lạc Phương Tây<br />
Thanh Tịnh Đại Hải Chúng<br />
Thân Trang Nghiêm Phước Trí<br />
Khắp Pháp Giới Thánh Chúng O (lạy 1 lạy)
    </p>
    <h2>TÁN HƯƠNG</h2>
    <p>
Hương xông đỉnh báu<br />
Giới định tuệ hương<br />
Giải thoát tri kiến quý khôn lường<br />
Ngào ngạt khắp muôn phương<br />
Thanh tịnh tâm hương<br />
Đệ tử nguyện cúng dường.
    </p>
    <p>Nam-mô Hương Cúng Dường bồ-tát ma-ha-tát. (3 lần)</p>
    <h2>TỊNH PHÁP GIỚI CHƠN NGÔN</h2>
    <p>Án lam tóa ha. (7 lần)</p>
    <h2>TỊNH TAM NGHIỆP CHƠN NGÔN:</h2>
    <p>
Án ta phạ bà phạ, thuật đà ta phạ, đạt<br />
ma ta phạ bà phạ thuật độ hám. (3 lần)
    </p>
    <h2>PHỔ CÚNG DƯỜNG CHƠN NGÔN:</h2>
    <p>
Án nga nga nẵng tam bà phạ phiệt nhựt<br />
ra hồng. (3 lần)
    </p>
    <h2>CHÚ ĐẠI BI</h2>
    <p>
Nam-mô Đại Bi Hội Thượng Phật bồ-tát<br />
(3 lần)<br />
Thiên Thủ Thiên Nhãn Vô Ngại Đại Bi<br />
Tâm đà-la-ni.<br />
Nam-mô hắc ra đát na đa ra dạ da. Nam Mô a rị da, bà lô kiết đế thước bát ra da, bồ<br />
đề tát đỏa bà da, ma ha tát đỏa bà da, ma<br />
ha ca lô ni ca da. Án, tát bàn ra phạt duệ<br />
số đát na đát tỏa. Nam-mô tất kiết lật đỏa<br />
y mông, a rị da bà lô kiết đế, thất Phật ra<br />
lăng đà bà.<br />
Nam-mô na ra cẩn trì hê rị ma ha bàn<br />
đa sa mế, tát bà a tha đậu du bằng, a thệ<br />
dựng, tát bà tát đa na ma bà già, ma phạt<br />
đạt đậu, đát điệt tha. Án, a bà lô hê, lô ca<br />
đế, ca ra đế, di hê rị, ma ha bồ đề tát đỏa,<br />
tát bà tát bà, ma ra ma ra, ma hê ma hê, rị<br />
đà dựng, cu lô cu lô kiết mông, độ lô độ lô,<br />
phạt xà ra đế, ma ha phạt xà ra đế, đà ra<br />
đà ra, địa rị ni, thất Phật ra da, dá ra dá<br />
ra. Mạ mạ phạt ma ra, mục đế lệ, y hê y<br />
hê, thất na thất na, a ra sâm Phật ra xá lợi,<br />
phạt sa phạt sâm, Phật ra xá da, hô lô hô<br />
lô ma ra, hô lô hô lô hê rị, ta ra ta ra, tất rị<br />
tất rị, tô rô tô rô, bồ đề dạ, bồ đề dạ, bồ đà<br />
dạ, bồ đà dạ, di đế rị dạ, na ra cẩn trì địa<br />
rị sắc ni na. Ba da ma na, ta bà ha. Tất đà<br />
dạ, ta bà ha. Ma ha tất đà dạ, ta bà ha. Tất<br />
đà dũ nghệ, thất bàn ra dạ, ta bà ha. Na ra<br />
cẩn trì, ta bà ha. Ma ra na ra, ta bà ha. Tất<br />
ra tăng a mục khư da, ta bà ha. Ta bà ma<br />
ha, a tất đà dạ, ta bà ha. Giả kiết ra a tất<br />
đà dạ, ta bà ha. Ba đà ma yết tất đà dạ, ta<br />
bà ha. Na ra cẩn trì bàn đà ra dạ, ta bà ha.<br />
Ma bà lợi thắng yết ra dạ, ta bà ha.<br />
Nam-mô hắc ra đát na đa ra dạ da. Nam Mô a rị da bà lô kiết đế thước bàn ra dạ,<br />
ta bà ha.<br />
Án, tất điện đô, mạn đa ra, bạt đà dạ, ta<br />
bà ha.<br />
(3 lần)
    </p>
    <h2>KỆ KHAI KINH</h2>
    <p>
Phật pháp cao siêu rất thâm sâu<br />
Trăm ngàn muôn kiếp khó tìm cầu<br />
Nay con nghe được xin trì niệm<br />
Nguyện tỏ Như Lai nghĩa nhiệm mầu.
    </p>
    <p>Nam-mô Bổn Sư Thích-ca Mâu-ni Phật <br />(3 lần)</p>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-kinh-vo-luong-tho-bai-2-nghi-thuc-tri-tung',
  slug: 'bai-2-nghi-thuc-tri-tung',
  title: 'Nghi thức trì tụng',
  type: 'article',
  status: 'published',
  order: 2,
  createdAt: '2026-10-10',
  updatedAt: '2026-10-10',
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
