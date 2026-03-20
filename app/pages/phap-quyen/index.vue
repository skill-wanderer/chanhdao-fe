<script setup lang="ts">
const { courses, searchCourses, getCoursesByDifficulty } = useCourses()
const config = useRuntimeConfig()
const siteUrl = ((config.public.siteUrl as string) || 'https://chanhdao.vn').replace(/\/+$/, '')

useSeo({
  title: 'Pháp quyển học Phật | Khóa học Phật học miễn phí | Chánh Đạo',
  description: 'Xem toàn bộ pháp quyển học Phật tại Chánh Đạo, từ nhập môn đến chuyên sâu, với nội dung miễn phí, dễ theo dõi và phù hợp cho người Việt tự học.',
  url: '/phap-quyen',
  pageType: 'CollectionPage',
  keywords: [
    'pháp quyển học Phật',
    'khóa học Phật học miễn phí',
    'Phật học online',
    'nội dung Phật học cho người Việt',
    'Chánh Đạo pháp quyển',
  ],
  about: [
    'pháp quyển',
    'khóa học Phật học',
    'học Phật miễn phí',
    'giáo lý Phật giáo',
  ],
  audience: 'Người Việt tự học Phật qua pháp quyển',
  schemas: [
    {
      '@type': 'ItemList',
      name: 'Danh sách pháp quyển học Phật',
      itemListElement: courses.value.map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: course.title,
        url: `${siteUrl}/phap-quyen/${course.slug}`,
      })),
    },
  ],
})

const searchQuery = ref('')
const selectedDifficulty = ref<string>('all')

const filteredCourses = computed(() => {
  let result = courses.value

  if (searchQuery.value.trim()) {
    result = searchCourses(searchQuery.value)
  }

  if (selectedDifficulty.value !== 'all') {
    result = result.filter(c => c.difficulty === selectedDifficulty.value)
  }

  return result
})

const difficulties = ['all', 'beginner', 'intermediate', 'advanced']
const difficultyLabels: Record<string, string> = {
  all: 'Tất cả cấp độ',
  beginner: 'Cơ bản',
  intermediate: 'Trung cấp',
  advanced: 'Nâng cao',
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-[170px] pb-[60px] px-5 text-center">
      <div class="max-w-[700px] mx-auto">
        <h1 class="gradient-text text-[clamp(2rem,5vw,3.5rem)] font-black font-serif mb-3">Pháp quyển</h1>
        <p class="text-text-secondary text-[1.1rem] leading-relaxed mb-7">
          Pháp quyển mở và miễn phí với nội dung đa dạng, để bạn học theo nhu cầu.
        </p>

        <!-- Search -->
        <div class="flex justify-center">
          <SearchBar @search="(q: string) => searchQuery = q" />
        </div>
      </div>
    </section>

    <!-- Filters & Grid -->
    <section class="section">
      <!-- Difficulty Filter -->
      <div class="flex gap-2.5 flex-wrap mb-6">
        <button
          v-for="diff in difficulties"
          :key="diff"
          class="py-2 px-5 rounded-full text-sm font-medium border cursor-pointer transition-all duration-300 capitalize"
          :class="selectedDifficulty === diff
            ? 'bg-brand-primary border-brand-primary text-white'
            : 'bg-transparent border-brand-primary/20 text-text-secondary hover:border-brand-primary hover:text-brand-primary'"
          @click="selectedDifficulty = diff"
        >
          {{ difficultyLabels[diff] || diff }}
        </button>
      </div>

      <!-- Results Count -->
      <p class="text-sm text-text-muted mb-6">
        Tìm thấy {{ filteredCourses.length }} pháp quyển
      </p>

      <!-- Course Grid -->
      <div v-if="filteredCourses.length" class="card-grid">
        <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-[60px] px-5">
        <Icon name="mdi:magnify-close" class="text-text-light text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">Không tìm thấy pháp quyển</h3>
          <p class="text-text-muted">Thử từ khóa khác hoặc điều chỉnh bộ lọc.</p>
      </div>
    </section>
  </div>
</template>

