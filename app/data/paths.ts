export interface PathData {
  title: string
  slug: string
  description: string
  difficulty: string
  icon: string
  courseCount: number
  courses?: { title: string; slug: string; available?: boolean }[]
}

const paths: PathData[] = [
  {
    title: 'Phật học cơ bản',
    slug: 'phat-hoc-can-ban',
    description: 'Lộ trình nhập môn với placeholder cho khóa học Phật học phổ thông quyển 1.',
    difficulty: 'beginner',
    icon: 'mdi:book-open-variant',
    courseCount: 1,
    courses: [
      { title: 'Phật học phổ thông quyển 1', slug: 'phat-hoc-pho-thong-quyen-1' },
    ],
  },
]

export default paths
