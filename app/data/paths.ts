export interface PathData {
  title: string
  slug: string
  description: string
  content?: string
  difficulty: string
  icon: string
  courseCount: number
  courses?: { title: string; slug: string; available?: boolean }[]
}

const paths: PathData[] = [
  {
    title: 'Phật học Phổ thông',
    slug: 'phat-hoc-can-ban',
    description: 'Pháp lộ nhập môn xây dựng căn bản giáo lý cho tín đồ, mở đầu bằng Phật học phổ thông quyển 1 của Hòa thượng Thích Thiện Hoa.',
    content: `Đạo Phật truyền vào Việt Nam ta đã trên 15 thế kỷ cho nên phần đông dân chúng nước ta là tín đồ đạo Phật. Dân chúng thường nói "Đạo Phật là đạo của ông bà", hay "Nhà nào có đốt hương, đều là tín đồ đạo Phật cả...". Kể về số lượng thì tín đồ Phật giáo ở Việt Nam thật là đông đảo, nhưng xét về phần phẩm, thì chúng ta chưa có thể lạc quan được. Tình trạng phẩm ít, lượng nhiều ấy phát sinh vì nhiều nguyên nhân phức tạp:

- Có người theo đạo Phật vì truyền thống của ông cha (ông cha theo đạo Phật, nên con cháu cũng theo).

- Có người theo đạo Phật vì cảm tình đối với thân bằng quyến thuộc, hay đối với cái đạo đã chia sẻ những phút vui buồn, thịnh suy của đất nước.

- Có người theo đạo Phật, vì mong cầu được tai qua nạn khỏi, hay cầu của, cầu con v.v...

Ngày nay, vẫn biết có một số đông tín đồ đã hiểu đúng giá trị cao siêu và lợi ích rộng lớn của đạo Phật, nhưng cái số ấy không phải là đa số, nếu đem so với cái khối tín đồ hiểu đạo một cách nông cạn, hay sai lạc nói trên.

Vì không hiểu một cách thấu đáo đạo Phật, nên lòng tin không được chắc chắn. Mỗi khi gặp một lý thuyết nào lạ, một tôn giáo nào mới, thì họ ùa hòa tin theo, như cây thiếu rễ cái, gió thổi phía nào thì ngã rạp theo phía ấy, thật đáng buồn thương.

Tình trạng buồn thương ấy có thể bổ cứu được, nếu chúng ta có một chương trình dạy Phật pháp bằng chữ Việt. Dân tộc ta là người Việt, ở đất Việt, ăn cơm Việt, nói tiếng Việt, mà kinh sách bằng chữ ngoại quốc; cả triết lý cao sâu của đạo Phật vẫn còn nằm nguyên trong 3 tạng chữ Tàu, thử hỏi có mấy ai đọc được? Như thế thì bảo tín đồ làm sao hiểu biết giáo lý cao sâu của đạo Phật và lòng tin làm sao vững chắc được?

Nóng lòng vì tình cảnh ấy, chúng tôi bạo dạn và cố gắng soạn ra chương trình "Phật học phổ thông" này, mong giúp tín đồ mau hiểu giáo lý, thấy được chỗ quí báu của đạo, để cho lòng tin được chơn chánh và vững bền.

Chúng tôi tự biết mình đức bạc tài sơ, chưa đủ khả năng làm việc vĩ đại này. Nhưng nếu do dự và nhún nhường mãi, rồi suốt đời cũng chẳng làm được gì. Chi bằng cứ cố gắng hy sinh đắp trước con đường đất, để cho các bực có tài đức sau này sửa chữa lại, rồi cán đá và tráng nhựa.

Chương trình "Phật học phổ thông" có mục đích xây dựng cho tín đồ có căn bản giáo lý, hiểu biết Phật pháp từ thấp đến cao, lấy Ngũ thừa Phật giáo làm nền tảng.

Từ khóa thứ nhứt đến khóa thứ tư, chúng tôi đã soạn hết Ngũ thừa Phật giáo. Khi tín đồ đã hiểu giáo lý căn bản nói trên rồi các khóa sau, chúng tôi sẽ mở thêm bề rộng và xây thêm bề cao của tòa nhà Phật giáo. Từ khóa thứ V đến khóa thứ XII, tín đồ sẽ tuần tự học về Đại cương kinh Lăng nghiêm, Viên giác, Duy thức luận và Kim cang, Tâm kinh.

Chương trình này, chúng tôi đã soạn từ năm 1953 đến nay và đã xuất bản thành tập, từ tập Phật học phổ thông thứ nhứt cho đến tập Phật học phổ thông thứ 12.

Công việc trên đây là cả một gánh nặng, mà đường lại dài, chúng tôi khẩn thiết yêu cầu những vị nhiệt tâm vì đạo, từ quý vị đại đức Tăng già cho đến các hàng Cư sĩ, kẻ công người của tiếp sức với chúng tôi (hoặc giúp sáng kiến, tài liệu hay tài chánh), cùng nhau xây dựng cho hoàn bị một chương trình Hoằng pháp ở nước nhà, hầu bổ cứu những khuyết điểm và dẹp bỏ những tình tệ trong đạo Phật từ trước đến nay.

Chúng tôi chấm dứt trong sự tin tưởng ở lòng nhiệt thành vì đạo của quý vị độc giả xa gần.

THÍCH THIỆN HOA`,
    difficulty: 'beginner',
    icon: 'mdi:book-open-variant',
    courseCount: 3,
    courses: [
      { title: 'Phật học phổ thông quyển 1', slug: 'phat-hoc-pho-thong-quyen-1' },
      { title: 'Phật học phổ thông quyển 2', slug: 'phat-hoc-pho-thong-quyen-2' },
      { title: 'Phật học phổ thông quyển 3', slug: 'phat-hoc-pho-thong-quyen-3' },
    ],
  },
]

export default paths
