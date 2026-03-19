<script setup lang="ts">
import type { PathData } from '~/data/paths'
import allPaths from '~/data/paths'

const router = useRouter()
const route = useRoute()

useSeo({
  title: 'Tìm kiếm pháp quyển & pháp lộ',
  description: 'Tìm kiếm pháp quyển và pháp lộ theo tên, chủ đề hoặc kỹ năng tại Chánh Đạo.',
})

const { searchCourses, formatDuration, getCourseDuration, getCourseBySlug } = useCourses()

const query = ref((route.query.q as string) || '')
const activeTab = ref<'all' | 'courses' | 'paths'>('all')

const courseResults = computed(() => {
  if (!query.value.trim()) return []
  return searchCourses(query.value)
})

const pathResults = computed(() => {
  if (!query.value.trim()) return []
  const q = query.value.toLowerCase()
  return allPaths.filter(p =>
    p.title.toLowerCase().includes(q)
    || p.description.toLowerCase().includes(q)
  )
})

const totalResults = computed(() => courseResults.value.length + pathResults.value.length)

function handleSearch(q: string) {
  query.value = q
  activeTab.value = 'all'
  router.replace({ query: { q } })
}

function getPathDuration(path: PathData): number {
  if (!path.courses?.length) return 0
  return path.courses.reduce((total, c) => {
    const course = getCourseBySlug(c.slug)
    return total + (course ? getCourseDuration(course) : 0)
  }, 0)
}

function isCourseAvailable(slug: string): boolean {
  return !!getCourseBySlug(slug)
}

const difficultyClass = (d: string) => {
  switch (d) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
}

const difficultyLabel = (d: string) => {
  switch (d) {
    case 'beginner': return 'Cơ bản'
    case 'intermediate': return 'Trung cấp'
    case 'advanced': return 'Nâng cao'
    default: return d
  }
}

// Sync with URL on mount
watch(() => route.query.q, (newQ) => {
  if (typeof newQ === 'string') {
    query.value = newQ
  }
})
</script>

<template>
  <div>
    <section class="pt-[170px] px-5 pb-10 text-center max-md:pt-[150px] max-md:px-4 max-md:pb-8 max-sm:pt-[140px] max-sm:px-3 max-sm:pb-6">
      <div class="max-w-[600px] mx-auto">
        <h1 class="gradient-text text-3xl md:text-4xl font-bold mb-6">Tìm kiếm pháp quyển & pháp lộ</h1>
        <SearchBar @search="handleSearch" />
      </div>
    </section>

    <section class="section">
      <template v-if="query.trim()">
        <p class="text-[0.95rem] text-text-secondary mb-4">
          Tìm thấy {{ totalResults }} kết quả cho
          <strong class="text-brand-accent">"{{ query }}"</strong>
        </p>

        <!-- Tabs -->
        <div class="flex gap-2 mb-8 flex-wrap">
          <button
            v-for="tab in [
              { key: 'all', label: `Tất cả (${totalResults})` },
              { key: 'courses', label: `Pháp quyển (${courseResults.length})` },
              { key: 'paths', label: `Pháp lộ (${pathResults.length})` },
            ]"
            :key="tab.key"
            :class="[
              'py-2 px-5 rounded-full text-[0.85rem] font-semibold border cursor-pointer transition-all duration-200 max-sm:py-1.5 max-sm:px-3.5 max-sm:text-[0.8rem]',
              activeTab === tab.key
                ? 'bg-brand-primary/15 border-brand-primary text-brand-accent'
                : 'border-brand-primary/10 bg-transparent text-text-muted hover:border-brand-primary/40 hover:text-text-primary'
            ]"
            @click="activeTab = tab.key as 'all' | 'courses' | 'paths'"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Courses section -->
        <div v-if="(activeTab === 'all' || activeTab === 'courses') && courseResults.length" class="mb-12">
          <h2 v-if="activeTab === 'all'" class="flex items-center gap-2 text-xl font-bold font-serif mb-5 text-text-primary">
            <Icon name="mdi:school-outline" class="text-brand-accent" /> Pháp quyển
          </h2>
          <div class="card-grid">
            <CourseCard v-for="course in courseResults" :key="course.id" :course="course" />
          </div>
        </div>

        <!-- Paths section -->
        <div v-if="(activeTab === 'all' || activeTab === 'paths') && pathResults.length" class="mb-12">
          <h2 v-if="activeTab === 'all'" class="flex items-center gap-2 text-xl font-bold font-serif mb-5 text-text-primary">
            <Icon name="mdi:map-marker-path" class="text-brand-accent" /> Pháp lộ
          </h2>
          <div class="flex flex-col gap-6">
            <div v-for="path in pathResults" :key="path.slug" class="glass-card p-7 max-md:p-5 max-sm:p-4">
              <div class="flex gap-4 items-start mb-5 max-md:flex-col">
                <Icon :name="path.icon" class="text-[2rem] text-brand-primary shrink-0 mt-1" />
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <h3 class="text-xl font-bold">{{ path.title }}</h3>
                    <span :class="['badge', difficultyClass(path.difficulty)]">{{ difficultyLabel(path.difficulty) }}</span>
                  </div>
                  <p class="text-text-secondary text-sm">{{ path.description }}</p>
                  <div class="flex items-center gap-4 mt-2">
                    <span class="text-xs text-text-muted">
                      <Icon name="mdi:book-open-outline" class="inline" /> {{ path.courseCount }} pháp quyển
                    </span>
                    <span v-if="getPathDuration(path)" class="text-xs text-text-muted">
                      <Icon name="mdi:clock-outline" class="inline" /> {{ formatDuration(getPathDuration(path)) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Course list when available -->
              <div v-if="path.courses && path.courses.length" class="flex flex-col gap-2">
                <div
                  v-for="(course, index) in path.courses"
                  :key="course.slug"
                  class="flex items-center gap-3 py-2.5 px-4 rounded-lg bg-brand-primary/[0.03] border border-brand-primary/[0.08] transition-all duration-200 hover:bg-brand-primary/[0.06] hover:border-brand-primary/20"
                >
                  <span class="flex items-center justify-center w-7 h-7 rounded-full bg-brand-primary/[0.12] text-brand-accent text-[0.8rem] font-bold shrink-0">{{ index + 1 }}</span>
                  <NuxtLink
                    v-if="isCourseAvailable(course.slug)"
                    :to="`/phap-quyen/${course.slug}`"
                    class="text-text-primary no-underline text-[0.95rem] font-medium transition-colors duration-200 hover:text-brand-accent"
                  >
                    {{ course.title }}
                  </NuxtLink>
                  <span v-else class="text-text-secondary text-[0.95rem] font-medium">
                    {{ course.title }}
                  </span>
                  <span v-if="!isCourseAvailable(course.slug)" class="ml-auto text-[0.72rem] uppercase tracking-wider text-brand-accent/80">Sắp mở</span>
                </div>
              </div>

              <!-- Coming soon -->
              <div v-else class="flex items-center gap-2.5 py-3 px-4 rounded-lg bg-brand-primary/5 border border-dashed border-brand-primary/20">
                <Icon name="mdi:hammer-wrench" class="text-brand-accent text-lg" />
                <span class="text-sm text-text-secondary">Nội dung đang được cập nhật. Vui lòng quay lại sau.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- No results -->
        <div v-if="totalResults === 0" class="text-center py-[60px] px-5 max-sm:py-10 max-sm:px-3">
          <Icon name="mdi:magnify-close" class="text-text-light text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">Không tìm thấy kết quả</h3>
          <p class="text-text-muted mb-4">Thử tìm với từ khóa khác.</p>
          <NuxtLink to="/phap-quyen" class="btn btn-outline btn-sm">Xem tất cả pháp quyển</NuxtLink>
        </div>
      </template>

      <template v-else>
        <div class="text-center py-[60px] px-5 max-sm:py-10 max-sm:px-3">
          <Icon name="mdi:magnify" class="text-text-light text-5xl mb-4" />
          <h3 class="text-xl font-semibold mb-2">Bạn muốn học gì hôm nay?</h3>
          <p class="text-text-muted">Hãy tìm pháp quyển và pháp lộ theo tên, chủ đề hoặc kỹ năng.</p>
        </div>
      </template>
    </section>
  </div>
</template>


