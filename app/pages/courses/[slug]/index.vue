<script setup lang="ts">
import { getAllLessons, isPublishedLesson } from '~/types/course'

const route = useRoute()
const slug = route.params.slug as string

const { getCourseBySlug, formatDuration, getCourseDuration } = useCourses()
const course = getCourseBySlug(slug)

if (!course) {
  throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy khóa học' })
}

useCourseSeo({
  title: course.title,
  description: course.description,
  slug: course.slug,
  thumbnail: course.thumbnail,
  difficulty: course.difficulty,
  datePublished: course.createdAt,
  dateModified: course.updatedAt,
  author: course.author ? { name: course.author.name, url: course.author.websiteUrl } : undefined,
})

const allLessons = computed(() => getAllLessons(course))
const availableLessons = computed(() => allLessons.value.filter(isPublishedLesson))

const completedCount = computed(() =>
  availableLessons.value.filter(l => l.completed).length
)
const progressPercent = computed(() =>
  availableLessons.value.length
    ? Math.round((completedCount.value / availableLessons.value.length) * 100)
    : 0
)

const difficultyClass = computed(() => {
  switch (course.difficulty) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
})

const difficultyLabel = computed(() => {
  switch (course.difficulty) {
    case 'beginner': return 'Cơ bản'
    case 'intermediate': return 'Trung cấp'
    case 'advanced': return 'Nâng cao'
    default: return course.difficulty
  }
})

const totalDuration = computed(() => getCourseDuration(course))
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <div class="section" style="padding-bottom: 0;">
      <BreadcrumbNav :items="[
        { label: 'Trang chủ', to: '/' },
        { label: 'Khóa học', to: '/courses' },
        { label: course.title },
      ]" />
    </div>

    <!-- Course Header -->
    <section class="px-5 pt-10 pb-[60px] max-md:px-4 max-md:pt-6 max-md:pb-10 max-sm:px-3 max-sm:pb-8">
      <div class="max-w-content mx-auto grid grid-cols-[1fr_340px] gap-12 items-start max-[900px]:grid-cols-1 max-[900px]:gap-6">
        <div>
          <div class="flex gap-2 mb-4">
            <span :class="['badge', difficultyClass]">{{ difficultyLabel }}</span>
            <span class="badge badge-free">Miễn phí</span>
          </div>

          <h1 class="gradient-text text-[clamp(1.8rem,4vw,2.8rem)] font-black font-serif leading-[1.15] mb-4">{{ course.title }}</h1>
          <p class="text-text-secondary text-[1.05rem] leading-[1.8] mb-5" style="white-space: pre-line;">{{ course.description }}</p>

          <div class="flex gap-5 flex-wrap mb-4 max-sm:gap-3">
            <span class="flex items-center gap-1.5 text-sm text-text-muted max-sm:text-[0.82rem]">
              <Icon name="mdi:play-circle-outline" /> {{ course.lessonCount }} bài học
            </span>
            <span v-if="totalDuration" class="flex items-center gap-1.5 text-sm text-text-muted max-sm:text-[0.82rem]">
              <Icon name="mdi:clock-outline" /> {{ formatDuration(totalDuration) }}
            </span>
            <span class="flex items-center gap-1.5 text-sm text-text-muted max-sm:text-[0.82rem]">
              <Icon name="mdi:account-outline" /> {{ course.instructor || 'Ban biên soạn' }}
            </span>
          </div>

          <div class="flex gap-2 flex-wrap">
            <span v-for="tag in course.tags" :key="tag" class="py-1 px-3 rounded-full text-[0.78rem] bg-brand-primary/10 text-brand-accent border border-brand-primary/15">
              {{ tag }}
            </span>
          </div>

          <NuxtLink
            v-if="availableLessons.length"
            :to="`/courses/${course.slug}/lessons/${availableLessons[0]?.slug}`"
            class="btn btn-primary mt-6"
          >
            <Icon name="mdi:play" /> Bắt đầu học
          </NuxtLink>

          <div v-else class="mt-6 rounded-xl border border-dashed border-brand-primary/20 bg-brand-primary/5 py-3 px-4 text-sm text-text-secondary">
            Nội dung bài học đang được cập nhật. Cấu trúc khóa học đã sẵn sàng và bài học sẽ mở dần.
          </div>
        </div>

        <!-- Progress Card (sidebar) -->
        <div class="sticky top-[100px] max-[900px]:static">
          <div class="glass-card p-6">
            <h3 class="text-lg font-bold mb-4">Tiến độ của bạn</h3>
            <div class="progress-bar mb-2">
              <div class="progress-bar-fill" :style="{ width: `${progressPercent}%` }" />
            </div>
            <p class="text-sm text-text-secondary mb-4">
              Đã hoàn thành {{ completedCount }} / {{ availableLessons.length }} bài học đang mở
            </p>

            <div class="text-sm text-text-muted space-y-2">
              <div class="flex items-center gap-2">
                <Icon name="mdi:trophy-outline" class="text-brand-gold-light" />
                <span>Chứng nhận sau khi hoàn thành</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:infinity" class="text-semantic-growth" />
                <span>Truy cập lâu dài</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Author Bio -->
    <section v-if="course.author" class="section" style="padding-bottom: 0;">
      <div class="glass-card flex gap-5 p-6 items-start max-sm:flex-col max-sm:items-center max-sm:text-center">
        <img
          :src="course.author.avatarUrl"
          :alt="`${course.author.name} — Tác giả khóa học`"
          class="w-20 h-20 rounded-full object-cover border-2 border-brand-primary/30 shrink-0"
          width="80"
          height="80"
          loading="lazy"
        />
        <div class="flex-1">
          <h2 class="text-[1.1rem] font-bold font-serif text-text-primary mb-1">Thông tin tác giả</h2>
          <p class="text-sm text-brand-accent mb-2 font-semibold">{{ course.author.name }} · {{ course.author.title }}</p>
          <p class="text-sm text-text-secondary leading-relaxed mb-3">{{ course.author.bio }}</p>
          <div class="flex gap-4 max-sm:justify-center">
            <a v-if="course.author.linkedinUrl" :href="course.author.linkedinUrl" target="_blank" rel="noopener" class="flex items-center gap-1 text-[0.85rem] text-text-muted transition-colors duration-300 hover:text-brand-accent">
              <Icon name="mdi:linkedin" /> LinkedIn
            </a>
            <a v-if="course.author.websiteUrl" :href="course.author.websiteUrl" target="_blank" rel="noopener" class="flex items-center gap-1 text-[0.85rem] text-text-muted transition-colors duration-300 hover:text-brand-accent">
              <Icon name="mdi:web" /> Website
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Last Updated -->
    <section class="section" style="padding-top: 12px; padding-bottom: 0;">
      <div class="flex gap-5 flex-wrap">
        <span class="flex items-center gap-1.5 text-[0.85rem] text-text-light">
          <Icon name="mdi:calendar-outline" /> Đăng: {{ new Date(course.createdAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </span>
        <span v-if="course.updatedAt !== course.createdAt" class="flex items-center gap-1.5 text-[0.85rem] text-text-light">
          <Icon name="mdi:update" /> Cập nhật: {{ new Date(course.updatedAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </span>
      </div>
    </section>

    <!-- Lessons List -->
    <section class="section">
      <h2 class="text-2xl font-bold mb-6">Nội dung khóa học</h2>

      <div v-for="mod in course.modules" :key="mod.id" class="mb-8 last:mb-0">
        <div class="flex items-center gap-3 mb-4 p-3 px-4 rounded-xl bg-brand-primary/[0.06] border border-brand-primary/[0.12]">
          <Icon name="mdi:book-open-variant" class="text-[1.4rem] text-brand-accent" />
          <div>
            <h3 class="text-[1.1rem] font-bold font-serif text-text-primary">{{ mod.title }}</h3>
            <span class="text-[0.8rem] text-text-muted">
              {{ mod.lessons.length }} bài học
              <template v-if="mod.lessons.some(l => l.durationMinutes)">
                · {{ formatDuration(mod.lessons.reduce((s, l) => s + (l.durationMinutes || 0), 0)) }}
              </template>
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <LessonItem
            v-for="lesson in mod.lessons"
            :key="lesson.id"
            :lesson="lesson"
            :course-slug="course.slug"
            :index="allLessons.indexOf(lesson)"
          />
        </div>
      </div>
    </section>
  </div>
</template>


