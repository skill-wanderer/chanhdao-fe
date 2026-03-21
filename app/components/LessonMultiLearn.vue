<script setup lang="ts">
import type { LearningMethod, LearningMethodType, QuizQuestion } from '~/types/course'

const props = defineProps<{
  learningMethods: LearningMethod[]
  quiz?: {
    title?: string
    passPercentage?: number
    questions: QuizQuestion[]
  }
  courseSlug: string
  lessonSlug: string
  returnTo: string
}>()

const route = useRoute()
const router = useRouter()

const tocOpen = ref(true)

type TabType = LearningMethodType | 'quiz'

const allTabs = computed(() => {
  const tabs: { type: TabType; label: string; icon: string }[] = props.learningMethods.map(m => ({
    type: m.type,
    label: m.label,
    icon: m.icon,
  }))
  if (props.quiz) {
    tabs.push({ type: 'quiz', label: 'Quiz', icon: 'mdi:pencil-outline' })
  }
  return tabs
})

const activeTab = computed<TabType>({
  get: () => {
    const tab = route.query.tab as string
    if (tab && allTabs.value.some(t => t.type === tab)) return tab as TabType
    return allTabs.value[0]?.type ?? 'video'
  },
  set: (val) => {
    router.replace({ query: { ...route.query, tab: val === allTabs.value[0]?.type ? undefined : val } })
  },
})

function getMethod(type: LearningMethodType): LearningMethod | undefined {
  return props.learningMethods.find(m => m.type === type)
}

const completedTabs = ref<Set<TabType>>(new Set())

function markTabVisited(tab: TabType) {
  completedTabs.value.add(tab)
}

watch(activeTab, (tab) => {
  markTabVisited(tab)
}, { immediate: true })

const visitedCount = computed(() => completedTabs.value.size)
const totalTabs = computed(() => allTabs.value.length)

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div class="multi-learn">
    <!-- Encouragement banner -->
    <div class="encourage-banner">
      <div class="flex items-center gap-3">
        <span class="text-2xl shrink-0">🧭</span>
        <div>
          <strong class="block text-[0.95rem] text-text-primary">Khám phá nhiều cách học!</strong>
          <p class="mt-0.5 text-[0.85rem] text-text-secondary m-0">
            Mỗi tab bên dưới là một cách tiếp cận bài học khác nhau — hãy thử nhiều cách để ghi nhớ sâu hơn.
            <span v-if="visitedCount > 1" class="text-brand-accent font-semibold"> Bạn đã khám phá {{ visitedCount }}/{{ totalTabs }} cách học!</span>
          </p>
        </div>
      </div>
      <div class="encourage-progress">
        <div class="encourage-progress-fill" :style="{ width: `${(visitedCount / totalTabs) * 100}%` }" />
      </div>
    </div>

    <!-- Tab bar -->
    <div class="multi-learn-tabs">
      <button
        v-for="tab in allTabs"
        :key="tab.type"
        :class="[
          'multi-learn-tab',
          activeTab === tab.type && 'multi-learn-tab--active',
          completedTabs.has(tab.type) && activeTab !== tab.type && 'multi-learn-tab--visited',
        ]"
        @click="activeTab = tab.type"
      >
        <Icon :name="tab.icon" class="text-lg" />
        <span class="max-sm:hidden">{{ tab.label }}</span>
        <Icon v-if="completedTabs.has(tab.type) && activeTab !== tab.type" name="mdi:check-circle" class="text-sm text-semantic-success ml-0.5" />
      </button>
    </div>

    <!-- Tab contents -->
    <div class="multi-learn-content">
      <!-- VIDEO TAB -->
      <div v-show="activeTab === 'video'" class="tab-panel">
        <template v-if="getMethod('video')">
          <div class="aspect-video rounded-xl overflow-hidden border border-brand-primary/15">
            <iframe
              :src="getMethod('video')!.videoUrl"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
              title="Video bài học"
            />
          </div>
          <p class="text-sm text-text-muted mt-3 flex items-center gap-1.5">
            <Icon name="mdi:information-outline" />
            Xem video bài giảng để nắm bắt nội dung một cách trực quan.
          </p>
        </template>
      </div>

      <!-- AUDIO TAB -->
      <div v-show="activeTab === 'audio'" class="tab-panel">
        <template v-if="getMethod('audio')">
          <div class="rounded-xl overflow-hidden">
            <iframe
              :src="getMethod('audio')!.audioEmbedUrl"
              class="w-full rounded-xl"
              style="border-radius: 12px; min-height: 352px;"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowfullscreen
              loading="lazy"
              title="Audio podcast bài học"
            />
          </div>
          <p class="text-sm text-text-muted mt-3 flex items-center gap-1.5">
            <Icon name="mdi:information-outline" />
            Nghe audio khi di chuyển hoặc nghỉ ngơi — cách học thụ động hiệu quả.
          </p>
        </template>
      </div>

      <!-- SLIDE TAB -->
      <div v-show="activeTab === 'slide'" class="tab-panel">
        <template v-if="getMethod('slide')">
          <div class="slide-container rounded-xl overflow-hidden border border-brand-primary/15">
            <iframe
              :src="getMethod('slide')!.slideUrl"
              class="w-full"
              style="min-height: 600px;"
              frameborder="0"
              loading="lazy"
              title="Slide bài học"
            />
          </div>
          <div class="flex items-center justify-between mt-3 flex-wrap gap-2">
            <p class="text-sm text-text-muted flex items-center gap-1.5 m-0">
              <Icon name="mdi:information-outline" />
              Xem slide tóm tắt các ý chính của bài học.
            </p>
            <a
              :href="getMethod('slide')!.slideUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-primary transition-colors"
            >
              <Icon name="mdi:download" />
              Tải PDF
            </a>
          </div>
        </template>
      </div>

      <!-- READING TAB -->
      <div v-show="activeTab === 'reading'" class="tab-panel">
        <template v-if="getMethod('reading')">
          <!-- Infographic -->
          <div v-if="getMethod('reading')!.infographicUrl" class="mb-6">
            <img
              :src="getMethod('reading')!.infographicUrl"
              alt="Infographic - Đạo Phật"
              class="w-full rounded-xl shadow-card border border-brand-primary/10"
              loading="lazy"
            />
          </div>

          <!-- Table of Contents -->
          <nav v-if="getMethod('reading')!.tableOfContents?.length" class="reading-toc glass-card p-4 mb-6">
            <button class="flex items-center gap-2 w-full text-left font-bold text-text-primary" @click="tocOpen = !tocOpen">
              <Icon name="mdi:format-list-bulleted" class="text-brand-accent" />
              <span>Dàn bài</span>
              <Icon :name="tocOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="ml-auto text-text-muted" />
            </button>
            <Transition name="toc-expand">
              <ul v-show="tocOpen" class="mt-3 flex flex-col gap-1 list-none p-0 m-0">
                <li
                  v-for="item in getMethod('reading')!.tableOfContents"
                  :key="item.id"
                >
                  <button
                    :class="[
                      'toc-link',
                      item.indent && 'toc-link--indent',
                    ]"
                    @click="scrollToSection(item.id)"
                  >
                    {{ item.label }}
                  </button>
                </li>
              </ul>
            </Transition>
          </nav>

          <!-- Reading content -->
          <div class="prose-content reading-body" v-html="getMethod('reading')!.readingContent" />
        </template>
      </div>

      <!-- QUIZ TAB -->
      <div v-show="activeTab === 'quiz'" class="tab-panel">
        <QuizSection
          v-if="quiz"
          :questions="quiz.questions"
          :title="quiz.title"
          :pass-percentage="quiz.passPercentage"
          :return-to="returnTo"
          :course-slug="courseSlug"
          :lesson-slug="lessonSlug"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.encourage-banner {
  @apply rounded-xl p-4 mb-6;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(184, 134, 11, 0.04));
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.encourage-progress {
  @apply h-1.5 rounded-full mt-3;
  background: rgba(212, 175, 55, 0.12);
}

.encourage-progress-fill {
  @apply h-full rounded-full transition-all duration-700 ease-out;
  background: linear-gradient(90deg, #D4AF37, #B8860B);
}

.multi-learn-tabs {
  @apply flex gap-1 overflow-x-auto border-b-2 border-brand-primary/[0.06] mb-0 -mx-1 px-1;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.multi-learn-tabs::-webkit-scrollbar {
  display: none;
}

.multi-learn-tab {
  @apply inline-flex items-center gap-2 py-3 px-5 text-[0.9rem] font-semibold bg-transparent border-none border-b-[3px] border-transparent cursor-pointer transition-all duration-200 -mb-[2px] whitespace-nowrap text-text-muted;
}

.multi-learn-tab:hover:not(.multi-learn-tab--active) {
  @apply text-text-secondary;
  background: rgba(212, 175, 55, 0.04);
}

.multi-learn-tab--active {
  @apply text-brand-primary;
  border-bottom-color: #D4AF37;
}

.multi-learn-tab--visited {
  @apply text-text-secondary;
}

.multi-learn-content {
  @apply pt-6;
}

.tab-panel {
  @apply min-h-[200px];
}

/* Reading TOC */
.reading-toc {
  @apply hover:translate-y-0;
}

.toc-link {
  @apply w-full text-left py-2 px-3 rounded-lg text-[0.88rem] text-text-secondary bg-transparent border-none cursor-pointer transition-all duration-200;
}

.toc-link:hover {
  @apply bg-brand-primary/[0.06] text-brand-accent;
}

.toc-link--indent {
  @apply pl-8;
}

.toc-expand-enter-active,
.toc-expand-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.toc-expand-enter-from,
.toc-expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.toc-expand-enter-to,
.toc-expand-leave-from {
  opacity: 1;
  max-height: 800px;
}

/* Reading body additions */
.reading-body :deep(section) {
  scroll-margin-top: 80px;
}

.reading-body :deep(h4) {
  font-family: 'Lora', serif;
  font-size: 1.05rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: #6B5B3E;
}

@media (max-width: 640px) {
  .multi-learn-tab {
    @apply py-2.5 px-3.5 text-[0.82rem] gap-1.5;
  }
}
</style>
