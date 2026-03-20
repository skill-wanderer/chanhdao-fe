<script setup lang="ts">
import { getAllLessons, isPublishedLesson } from '~/types/course'

const route = useRoute()
const courseSlug = route.params.slug as string
const lessonSlug = route.params.lessonSlug as string

const { getCourseBySlug } = useCourses()
const course = getCourseBySlug(courseSlug)

if (!course) {
  throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy pháp quyển' })
}

const allLessons = getAllLessons(course)
const lesson = allLessons.find(l => l.slug === lessonSlug)

if (!lesson) {
  throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy bài học' })
}

if (!isPublishedLesson(lesson)) {
  throw createError({ statusCode: 404, statusMessage: 'Bài học chưa được công bố' })
}

function stripHtmlContent(content?: string): string {
  return (content || '')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const lessonPlainText = stripHtmlContent(lesson.content)
const lessonDescription = lessonPlainText
  ? `${lessonPlainText.slice(0, 180)}${lessonPlainText.length > 180 ? '…' : ''}`
  : `Bài học ${lesson.title} thuộc pháp quyển ${course.title} trên Chánh Đạo, giúp người học tiếp cận giáo lý rõ ràng và có dẫn chiếu.`
const lessonKeywords = [lesson.title, course.title, 'bài học Phật học', ...(course.tags || [])]

// Extract first YouTube video URL from lesson content for VideoObject schema
const videoUrlMatch = lesson.content?.match(/youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]{11})/)
const firstVideoUrl = videoUrlMatch ? `https://www.youtube-nocookie.com/embed/${videoUrlMatch[1]}` : undefined

useLessonSeo({
  title: lesson.title,
  courseTitle: course.title,
  courseSlug: courseSlug,
  lessonSlug: lessonSlug,
  description: lessonDescription,
  keywords: lessonKeywords,
  datePublished: lesson.createdAt || course.createdAt,
  dateModified: lesson.updatedAt || course.updatedAt,
  videoUrl: firstVideoUrl,
  author: course.author ? { name: course.author.name, url: course.author.websiteUrl } : undefined,
})

const currentIndex = allLessons.findIndex(l => l.slug === lessonSlug)
const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

const { isAuthEnabled, isAuthenticated, accessToken } = useKeycloak()
const config = useRuntimeConfig()
const apiBaseUrl = (config.public.apiBaseUrl as string).replace(/\/+$/, '')

// Sandbox YouTube & Spotify iframes to prevent cross-origin frame access errors
const processedContent = computed(() => {
  if (!lesson.content) return ''
  return lesson.content.replace(
    /<iframe([^>]*src="https:\/\/www\.youtube-nocookie\.com\/[^"]*"[^>]*)>/g,
    '<iframe$1 sandbox="allow-scripts allow-same-origin allow-popups allow-presentation" loading="lazy">'
  )
})

const router = useRouter()
const activeTab = computed<'summary' | 'quiz'>({
  get: () => route.query.tab === 'quiz' ? 'quiz' : 'summary',
  set: (val) => {
    router.replace({ query: { ...route.query, tab: val === 'quiz' ? 'quiz' : undefined } })
  },
})

const isCompleted = ref(lesson.completed ?? false)
const isLoading = ref(false)
const showLoginModal = ref(false)
const errorToast = ref('')
let errorTimer: ReturnType<typeof setTimeout> | null = null

function showError(msg: string) {
  errorToast.value = msg
  if (errorTimer) clearTimeout(errorTimer)
  errorTimer = setTimeout(() => { errorToast.value = '' }, 5000)
}

function buildCompletionUrl() {
  return `${apiBaseUrl}/api/courses/${courseSlug}/lessons/${lessonSlug}/complete`
}

function buildAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = {}
  if (accessToken.value) {
    headers.Authorization = `Bearer ${accessToken.value}`
  }
  return headers
}

// Fetch completion status on mount if user is authenticated
onMounted(async () => {
  if (!apiBaseUrl || !isAuthenticated.value) return
  try {
    const data = await $fetch<{ completed: boolean }>(buildCompletionUrl(), {
      headers: buildAuthHeaders(),
    })
    isCompleted.value = data.completed
  }
  catch {
    showError('Không thể tải trạng thái hoàn thành. Vui lòng thử lại sau.')
  }
})

async function toggleComplete() {
  // If auth is enabled but user is not logged in, show login modal
  if (isAuthEnabled.value && !isAuthenticated.value) {
    showLoginModal.value = true
    return
  }

  const newState = !isCompleted.value
  isLoading.value = true

  try {
    if (newState) {
      await $fetch(buildCompletionUrl(), { method: 'POST', headers: buildAuthHeaders() })
    }
    else {
      await $fetch(buildCompletionUrl(), { method: 'DELETE', headers: buildAuthHeaders() })
    }
    isCompleted.value = newState
  }
  catch {
    showError('Đã xảy ra lỗi. Vui lòng thử lại sau.')
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div v-if="course && lesson">
    <!-- Error Toast -->
    <Transition name="toast">
      <div v-if="errorToast" class="fixed top-5 right-5 z-[9999] flex items-center gap-2 py-3 px-4 bg-red-600/95 text-white rounded-[10px] text-sm font-medium shadow-[0_4px_20px_rgba(220,38,38,0.4)] max-w-[380px]" role="alert">
        <Icon name="mdi:alert-circle-outline" />
        <span>{{ errorToast }}</span>
        <button class="ml-2 bg-transparent border-none text-white text-xl cursor-pointer opacity-80 leading-none hover:opacity-100" aria-label="Đóng" @click="errorToast = ''">&times;</button>
      </div>
    </Transition>

    <!-- Breadcrumb -->
    <div class="section" style="padding-bottom: 0;">
      <BreadcrumbNav :items="[
        { label: 'Trang chủ', to: '/' },
        { label: 'Pháp quyển', to: '/phap-quyen' },
        { label: course.title, to: `/phap-quyen/${course.slug}` },
        { label: lesson.title },
      ]" />
    </div>

    <!-- Lesson Content -->
    <section class="grid grid-cols-[280px_1fr] max-w-content mx-auto p-5 gap-8 max-md:grid-cols-1 max-md:p-4 max-sm:p-3 max-sm:gap-4">
      <!-- Sidebar: Lesson list -->
      <aside class="sticky top-[70px] max-h-[calc(100vh-70px)] overflow-y-auto self-start max-md:static max-md:top-auto max-md:max-h-none max-md:overflow-y-visible max-md:border-b max-md:border-brand-primary/5 max-md:pb-5 max-md:mb-5">
        <h3 class="text-base font-bold mb-3 text-text-primary">{{ course.title }}</h3>
        <div class="mb-4">
          <div class="progress-bar">
            <div class="progress-bar-fill" :style="{ width: '0%' }" />
          </div>
        </div>
        <nav class="flex flex-col gap-0.5">
          <template v-for="(mod, mi) in course.modules" :key="mod.id">
            <div class="text-xs font-bold uppercase tracking-wide text-text-light py-3 px-3 pb-1 mt-2 first:mt-0">{{ mod.title }}</div>
            <template v-for="(l, li) in mod.lessons" :key="l.id">
              <NuxtLink
                v-if="isPublishedLesson(l)"
                :to="`/phap-quyen/${course.slug}/bai-hoc/${l.slug}`"
                :class="[
                  'flex items-center gap-2.5 py-2.5 px-3 rounded-lg no-underline text-[0.85rem] transition-all duration-200',
                  l.slug === lessonSlug
                    ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                    : 'text-text-muted hover:bg-brand-primary/5 hover:text-text-primary'
                ]"
              >
                <span :class="['shrink-0 text-xs w-6', l.slug === lessonSlug ? 'text-brand-primary' : 'text-text-light']">{{ String(course.modules.slice(0, mi).reduce((sum, m) => sum + m.lessons.length, 0) + li + 1).padStart(2, '0') }}</span>
                <span>{{ l.title }}</span>
              </NuxtLink>
              <div
                v-else
                class="flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-[0.85rem] text-text-light"
              >
                <span class="shrink-0 text-xs w-6 text-text-light">{{ String(course.modules.slice(0, mi).reduce((sum, m) => sum + m.lessons.length, 0) + li + 1).padStart(2, '0') }}</span>
                <span>{{ l.title }}</span>
                <span class="ml-auto text-[0.68rem] uppercase tracking-wider text-brand-accent/75">Sắp mở</span>
              </div>
            </template>
          </template>
        </nav>
      </aside>

      <!-- Main content -->
      <main>
        <div class="mb-8">
          <span class="text-[0.85rem] text-brand-primary font-semibold uppercase tracking-wide">
            Bài học {{ currentIndex + 1 }} / {{ allLessons.length }}
          </span>
          <h1 class="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold mt-2 mb-3">{{ lesson.title }}</h1>
          <div class="flex gap-4 text-sm text-text-muted flex-wrap">
            <span class="flex items-center gap-1">
              <Icon :name="lesson.type === 'video' ? 'mdi:play-circle-outline' : 'mdi:file-document-outline'" />
              {{ lesson.type === 'video' ? 'Video' : 'Bài viết' }}
            </span>
            <span v-if="lesson.updatedAt || course.updatedAt" class="flex items-center gap-1 text-[0.82rem] text-text-light">
              <Icon name="mdi:update" />
              Cập nhật: {{ new Date(lesson.updatedAt || course.updatedAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'short', day: 'numeric' }) }}
            </span>
          </div>
        </div>

        <!-- Video Placeholder -->
        <div v-if="lesson.type === 'video'" class="aspect-video bg-brand-primary/[0.03] border border-brand-primary/15 rounded-2xl flex flex-col items-center justify-center mb-8">
          <Icon name="mdi:play-circle" class="text-6xl text-brand-primary opacity-50" />
          <p class="text-text-muted mt-4">Trình phát video sẽ được tích hợp tại đây</p>
        </div>

        <!-- Tabbed layout when lesson has both content and quiz -->
        <div v-if="lesson.content && lesson.quiz" class="flex flex-col mb-8">
          <div class="lesson-tabs">
            <button
              :class="[
                'inline-flex items-center gap-2 py-3 px-6 text-[0.95rem] font-semibold bg-transparent border-none border-b-[3px] border-transparent cursor-pointer transition-all duration-200 -mb-[2px]',
                activeTab === 'summary' ? 'text-brand-primary !border-brand-primary' : 'text-text-muted hover:text-text-secondary hover:bg-brand-primary/[0.04]'
              ]"
              @click="activeTab = 'summary'"
            >
              <Icon name="mdi:book-open-variant" />
              Tóm tắt và ghi nhớ
            </button>
            <button
              :class="[
                'inline-flex items-center gap-2 py-3 px-6 text-[0.95rem] font-semibold bg-transparent border-none border-b-[3px] border-transparent cursor-pointer transition-all duration-200 -mb-[2px]',
                activeTab === 'quiz' ? 'text-brand-primary !border-brand-primary' : 'text-text-muted hover:text-text-secondary hover:bg-brand-primary/[0.04]'
              ]"
              @click="activeTab = 'quiz'"
            >
              <Icon name="mdi:pencil-outline" />
              Quiz
            </button>
          </div>
          <div v-show="activeTab === 'summary'" class="rounded-b-2xl glass-card">
            <div class="lesson-content p-4 sm:p-6 md:p-8 prose-content" v-html="processedContent" />
          </div>
          <div v-show="activeTab === 'quiz'" class="rounded-b-2xl">
            <QuizSection
              :questions="lesson.quiz.questions"
              :title="lesson.quiz.title"
              :pass-percentage="lesson.quiz.passPercentage"
              :return-to="route.path"
              :course-slug="courseSlug"
              :lesson-slug="lessonSlug"
            />
          </div>
        </div>

        <!-- Article Content (normal when no quiz) -->
        <div v-else-if="lesson.content" class="lesson-content glass-card p-4 sm:p-6 md:p-8 mb-8 prose-content" v-html="processedContent" />

        <!-- Quiz only (no content) -->
        <QuizSection
          v-else-if="lesson.quiz"
          :questions="lesson.quiz.questions"
          :title="lesson.quiz.title"
          :pass-percentage="lesson.quiz.passPercentage"
          :return-to="route.path"
          :course-slug="courseSlug"
          :lesson-slug="lessonSlug"
          class="mb-8"
        />

        <!-- Article Content Placeholder (no content yet) -->
        <div v-else class="lesson-content glass-card p-4 sm:p-6 md:p-8 mb-8">
          <p class="text-text-secondary leading-relaxed">
            Nội dung của bài <strong>"{{ lesson.title }}"</strong> sẽ hiển thị tại đây.
            Nội dung có thể bao gồm văn bản định dạng, đoạn mã, hình ảnh và thành phần tương tác.
          </p>
        </div>

        <!-- Mark Complete -->
        <div v-if="!lesson.hideCompletion" class="mb-8 flex items-center gap-3">
          <button
            :class="['btn', isCompleted ? 'btn-completed' : 'btn-outline']"
            :disabled="isLoading"
            @click="toggleComplete"
          >
            <Icon :name="isLoading ? 'mdi:loading' : isCompleted ? 'mdi:check-circle' : 'mdi:check-circle-outline'" :class="{ 'animate-spin': isLoading }" />
            {{ isCompleted ? 'Đã hoàn thành' : 'Đánh dấu đã học xong' }}
          </button>
        </div>

        <!-- Login Required Modal -->
        <LoginRequiredModal :visible="showLoginModal" :return-to="route.path" @close="showLoginModal = false" />

        <!-- Prev / Next Navigation -->
        <nav class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <NuxtLink
            v-if="prevLesson"
            :to="`/phap-quyen/${course.slug}/bai-hoc/${prevLesson.slug}`"
            class="flex items-center gap-3 py-4 px-5 no-underline text-text-primary glass-card max-sm:py-3 max-sm:px-3.5 max-sm:gap-2"
          >
            <Icon name="mdi:arrow-left" />
            <div>
              <span class="block text-xs text-text-light uppercase tracking-wide">Trước</span>
              <span class="block font-semibold text-[0.95rem] max-sm:text-[0.85rem]">{{ prevLesson.title }}</span>
            </div>
          </NuxtLink>
          <div v-else />

          <NuxtLink
            v-if="nextLesson"
            :to="`/phap-quyen/${course.slug}/bai-hoc/${nextLesson.slug}`"
            class="flex items-center gap-3 py-4 px-5 no-underline text-text-primary text-right justify-end glass-card max-sm:py-3 max-sm:px-3.5 max-sm:gap-2"
          >
            <div>
              <span class="block text-xs text-text-light uppercase tracking-wide">Tiếp theo</span>
              <span class="block font-semibold text-[0.95rem] max-sm:text-[0.85rem]">{{ nextLesson.title }}</span>
            </div>
            <Icon name="mdi:arrow-right" />
          </NuxtLink>
          <div v-else />
        </nav>
      </main>
    </section>
  </div>
</template>

<style scoped>
.btn-completed {
  @apply bg-[rgba(76,175,80,0.15)] text-[#4caf50] border border-[rgba(76,175,80,0.4)];
}
.btn-completed:hover {
  @apply bg-[rgba(76,175,80,0.25)] border-[rgba(76,175,80,0.6)];
}

.lesson-tabs {
  @apply flex gap-1 border-b-2 border-brand-primary/[0.06];
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
