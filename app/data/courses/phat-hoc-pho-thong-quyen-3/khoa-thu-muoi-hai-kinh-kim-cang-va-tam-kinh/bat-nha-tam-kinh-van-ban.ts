import type { Lesson } from '~/types/course'

const readingContent = `
<div class="prose prose-lg max-w-none dark:prose-invert">
  <section class="max-w-3xl mx-auto">
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-text-muted text-center">Phật Học Phổ Thông · Khóa XII</p>

    <div class="rounded-2xl border border-primary-200 bg-primary-50/70 p-6 dark:border-primary-900 dark:bg-primary-950/30 text-center mb-10">
      <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">VĂN BẢN TỤNG NIỆM</p>
      <h2 id="bat-nha-tam-kinh" class="mt-0 mb-0 text-3xl font-bold text-primary-700 dark:text-primary-300">BÁT NHÃ TÂM KINH</h2>
    </div>

    <!-- PHẦN ÂM HÁN VIỆT -->
    <div class="mb-12">
      <h3 class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 text-center mb-6 border-b border-secondary-200 pb-2">ÂM HÁN VIỆT</h3>
      <div class="space-y-4 text-center text-lg leading-relaxed font-medium">
        <p>Ma Ha Bát Nhã Ba La Mật Đa Tâm Kinh</p>
        <p>Quán Tự Tại Bồ Tát hành thâm Bát nhã Ba la mật đa thời, chiếu kiến ngũ uẩn giai không, độ nhất thiết khổ ách.</p>
        <p>Xá Lợi Tử! Sắc bất dị không, không bất dị sắc, sắc tức thị không, không tức thị sắc, thọ, tưởng, hành, thức, diệc phục như thị.</p>
        <p>Xá Lợi Tử! Thị chư pháp không tướng, bất sanh bất diệt, bất cấu bất tịnh, bất tăng bất giảm.</p>
        <p>Thị cố không trung vô sắc, vô thọ, tưởng, hành, thức.</p>
        <p>Vô nhãn, nhĩ, tỷ, thiệt, thân, ý; vô sắc, thanh, hương, vị, xúc, pháp; vô nhãn giới nãi chí vô ý thức giới.</p>
        <p>Vô vô minh, diệc vô vô minh tận, nãi chí vô lão tử, diệc vô lão tử tận.</p>
        <p>Vô khổ, tập, diệt, đạo.</p>
        <p>Vô trí diệc vô đắc, dĩ vô sở đắc cố.</p>
        <p>Bồ đề tát đỏa y Bát nhã Ba la mật đa cố, tâm vô quái ngại, vô quái ngại cố, vô hữu khủng bố, viễn ly điên đảo mộng tưởng, cứu cánh Niết bàn.</p>
        <p>Tam thế chư Phật, y Bát nhã Ba la mật đa cố, đắc A nậu đa la Tam miệu Tam bồ đề.</p>
        <p>Cố tri Bát nhã Ba la mật đa, thị đại thần chú, thị đại minh chú, thị vô thượng chú, thị vô đẳng đẳng chú, năng trừ nhất thiết khổ, chân thiệt bất hư.</p>
        <p>Cố thuyết Bát nhã Ba la mật đa chú, tức thuyết chú viết:</p>
        <p class="text-primary-600 dark:text-primary-400 font-bold italic">"Yết đế yết đế, ba la yết đế, ba la tăng yết đế, Bồ đề tát bà ha."</p>
      </div>
    </div>

    <div class="my-12 border-t-2 border-dashed border-secondary-200 dark:border-secondary-800 w-1/2 mx-auto"></div>

    <!-- PHẦN DỊCH NGHĨA -->
    <div class="mb-10">
      <h3 class="text-2xl font-bold text-secondary-700 dark:text-secondary-300 text-center mb-6 border-b border-secondary-200 pb-2">DỊCH NGHĨA VIỆT</h3>
      <div class="space-y-4 text-center text-lg leading-relaxed">
        <p>Sau khi đi sâu vào Trí huệ Bát Nhã rồi, Ngài Quán Tự Tại Bồ Tát thấy các pháp đều là Bát Nhã (không), nên không còn các khổ.</p>
        <p>Ngài gọi ông Xá Lợi Tử dạy rằng: Này Xá Lợi Tử! Các pháp chẳng khác với Bát Nhã (không), Bát Nhã chẳng khác với các Pháp; các Pháp tức là Bát Nhã (không), Bát Nhã tức là các Pháp.</p>
        <p>Này Xá Lợi Tử! Bát Nhã (tướng không) là tánh của các Pháp. Nó không sanh không diệt, không nhơ không sạch, không thêm không bớt.</p>
        <p>Bởi thế nên trong Bát Nhã (không), không có các Pháp thế gian như: Năm uẩn (sắc, thọ, tưởng, hành, thức), sáu căn (mắt, tai, mũi, lưỡi, thân, ý), sáu trần (sắc, thinh, hương, vị, xúc, pháp), sáu thức.</p>
        <p>Và trong Bát Nhã, cũng không có các Pháp xuất thế gian như: Tứ đế (khổ, tập, diệt, đạo), Mười hai nhơn duyên (không có vô minh và cũng không có hết vô minh; cho đến không có già chết và cũng không có hết già chết).</p>
        <p>Không có "trí" tu chứng và đạo quả để chứng đắc. Tóm lại, trong Bát Nhã không có đặng cái gì cả.</p>
        <p>Các vị Bồ Tát nhờ y theo Trí huệ Bát Nhã (không) mà xa lìa được các mộng tưởng điên đảo, nên tâm không còn ngăn ngại, lo sợ và chứng được đạo quả Niết bàn.</p>
        <p>Các đức Phật quá khứ, hiện tại và vị lai, cũng đều y theo Trí huệ Bát Nhã (không) mà đặng đạo vô thượng Bồ Đề.</p>
        <p>Vì Trí huệ Bát Nhã có khả năng diệt trừ hết các khổ, chắc chắn như vậy không hư dối, nên cũng gọi là Thần chú Bát Nhã, cũng gọi là chú Đại thần, chú Đại minh, chú Vô thượng và chú Vô đẳng đẳng.</p>
        <p>Ngài Quán Tự Tại Bồ Tát, liền nói thần chú Bát Nhã:</p>
        <p class="text-primary-600 dark:text-primary-400 font-bold italic">"Yết đế yết đế, Ba la yết đế, Ba La Tăng Yết đế, Bồ Đề tát bà ha."</p>
      </div>
    </div>
  </section>
</div>
`

const lesson: Lesson = {
  id: 'lesson-khoa-12-bat-nha-tam-kinh-van-ban',
  slug: 'bat-nha-tam-kinh-van-ban',
  title: 'Bát Nhã Tâm Kinh (Văn bản)',
  type: 'article',
  status: 'published',
  order: 18,
  createdAt: '2026-03-20',
  updatedAt: '2026-03-20',
  learningMethods: [
    {
      type: 'reading',
      label: 'Bản đọc',
      icon: 'mdi:book-open-page-variant',
      readingContent,
      tableOfContents: [
        { id: 'bat-nha-tam-kinh', label: 'Bát Nhã Tâm Kinh' },
      ],
    },
  ],
}

export default lesson