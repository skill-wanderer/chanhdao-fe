<script setup lang="ts">
import allPaths from '~/data/paths'

const { formatDuration, getCourseDuration, getCourseBySlug } = useCourses()

useSeo({
  title: 'Lộ trình học',
  description: 'Các lộ trình học được sắp xếp theo mục tiêu, từ cơ bản đến nâng cao.',
})

const paths = allPaths

const searchQuery = ref('')
const selectedDifficulty = ref('')

const filteredPaths = computed(() => {
  return paths.filter((path) => {
    const matchesSearch = !searchQuery.value.trim()
      || path.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      || path.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesDifficulty = !selectedDifficulty.value
      || path.difficulty === selectedDifficulty.value
    return matchesSearch && matchesDifficulty
  })
})

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

/**
 * Compute total estimated duration for a learning path
 * by summing durations of its linked courses.
 */
function getPathDuration(path: { courses?: { slug: string }[] }): number {
  if (!path.courses?.length) return 0
  return path.courses.reduce((total, c) => {
    const course = getCourseBySlug(c.slug)
    return total + (course ? getCourseDuration(course) : 0)
  }, 0)
}

function isCourseAvailable(slug: string): boolean {
  return !!getCourseBySlug(slug)
}
</script>

<template>
  <div>
    <TheHero
      title="Lộ trình học"
      subtitle="Học theo từng bước"
      description="Chọn lộ trình phù hợp và học theo trình tự để đạt kết quả bền vững."
      :cta-primary="{ label: 'Xem khóa học', to: '/courses' }"
    />

    <section class="section">
      <!-- Search & Filter Bar -->
      <div class="flex flex-wrap gap-4 items-center mb-8 max-md:flex-col max-md:items-stretch">
        <div class="flex items-center gap-2.5 flex-1 min-w-[220px] bg-white border border-brand-primary/20 rounded-full py-2.5 px-5 transition-colors duration-300 focus-within:border-brand-primary">
          <Icon name="mdi:magnify" class="text-text-light text-xl shrink-0" />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Tìm lộ trình học..."
            class="flex-1 bg-transparent border-none text-text-primary text-base outline-none placeholder:text-text-light"
            aria-label="Tìm lộ trình học"
          />
        </div>
        <div class="flex gap-2 flex-wrap max-md:justify-center">
          <button
            v-for="filter in [
              { key: '', label: 'Tất cả', activeClasses: 'bg-brand-primary/15 border-brand-primary text-brand-accent' },
              { key: 'beginner', label: 'Cơ bản', activeClasses: 'bg-[rgba(76,175,80,0.15)] border-[#4caf50] text-[#4caf50]' },
              { key: 'intermediate', label: 'Trung cấp', activeClasses: 'bg-[rgba(255,152,0,0.15)] border-[#ff9800] text-[#ff9800]' },
              { key: 'advanced', label: 'Nâng cao', activeClasses: 'bg-[rgba(244,67,54,0.15)] border-[#f44336] text-[#f44336]' },
            ]"
            :key="filter.key"
            :class="[
              'py-2 px-4 rounded-full text-[0.85rem] font-semibold border cursor-pointer transition-all duration-200 max-sm:py-1.5 max-sm:px-3 max-sm:text-[0.8rem]',
              selectedDifficulty === filter.key
                ? filter.activeClasses
                : 'border-brand-primary/10 bg-transparent text-text-muted hover:border-brand-primary/40 hover:text-text-primary'
            ]"
            @click="selectedDifficulty = filter.key"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Results count -->
      <p v-if="searchQuery.trim() || selectedDifficulty" class="text-[0.95rem] text-text-secondary mb-6">
        Tìm thấy {{ filteredPaths.length }} lộ trình
        <template v-if="searchQuery.trim()">
          với từ khóa <strong class="text-brand-accent">"{{ searchQuery }}"</strong>
        </template>
        <template v-if="selectedDifficulty">
          ở mức <strong class="text-brand-accent">{{ selectedDifficulty }}</strong>
        </template>
      </p>

      <div v-if="filteredPaths.length" class="flex flex-col gap-8">
        <div v-for="path in filteredPaths" :key="path.slug" class="glass-card p-8 max-md:p-5 max-sm:p-4">
          <div class="flex gap-4 items-start mb-6 max-md:flex-col">
            <Icon :name="path.icon" class="text-[2rem] text-brand-primary shrink-0 mt-1 max-md:text-[1.6rem]" />
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h2 class="text-xl font-bold">{{ path.title }}</h2>
                <span :class="['badge', difficultyClass(path.difficulty)]">{{ difficultyLabel(path.difficulty) }}</span>
              </div>
              <p class="text-text-secondary text-sm">{{ path.description }}</p>
              <div class="flex items-center gap-4 mt-2">
                <span class="text-xs text-text-muted">
                  <Icon name="mdi:book-open-outline" class="inline" /> {{ path.courseCount }} khóa học
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
                :to="`/courses/${course.slug}`"
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

          <!-- Coming soon when no courses yet -->
          <div v-else class="flex items-center gap-2.5 py-3 px-4 rounded-lg bg-brand-primary/5 border border-dashed border-brand-primary/20">
            <Icon name="mdi:hammer-wrench" class="text-brand-accent text-lg" />
            <span class="text-sm text-text-secondary">Nội dung đang được cập nhật. Vui lòng quay lại sau.</span>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-[60px] px-5 max-sm:py-10 max-sm:px-3">
        <Icon name="mdi:magnify-close" class="text-text-light text-5xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">Không tìm thấy lộ trình</h3>
        <p class="text-text-muted mb-4">Thử từ khóa khác hoặc xóa bộ lọc hiện tại.</p>
        <button class="btn btn-outline btn-sm" @click="searchQuery = ''; selectedDifficulty = ''">
          Xóa bộ lọc
        </button>
      </div>
    </section>
  </div>
</template>


