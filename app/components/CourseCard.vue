<script setup lang="ts">
import type { Course } from '~/types/course'

const props = defineProps<{
  course: Course
}>()

const { formatDuration, getCourseDuration } = useCourses()

const totalDuration = computed(() => getCourseDuration(props.course))

const difficultyClass = computed(() => {
  switch (props.course.difficulty) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
})

const difficultyLabel = computed(() => {
  switch (props.course.difficulty) {
    case 'beginner': return 'Cơ bản'
    case 'intermediate': return 'Trung cấp'
    case 'advanced': return 'Nâng cao'
    default: return props.course.difficulty
  }
})
</script>

<template>
  <NuxtLink :to="`/phap-quyen/${course.slug}`" class="group glass-card flex flex-col overflow-hidden no-underline text-text-primary" :aria-label="`Xem pháp quyển: ${course.title}`">
    <div class="relative aspect-video overflow-hidden bg-brand-primary/[0.03]">
      <NuxtImg
        v-if="course.thumbnail"
        :src="course.thumbnail"
        :alt="course.title"
        width="400"
        height="225"
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-brand-primary/30 bg-brand-primary/5">
        <Icon name="mdi:school-outline" size="48" />
      </div>
      <span class="badge badge-free absolute top-3 right-3">Miễn phí</span>
    </div>

    <div class="p-5 flex-1 flex flex-col">
      <div class="flex items-center gap-3 mb-3">
        <span :class="['badge', difficultyClass]">{{ difficultyLabel }}</span>
      </div>

      <h3 class="text-[1.15rem] font-bold mb-2 leading-tight font-serif">{{ course.title }}</h3>
      <p class="text-sm text-text-secondary leading-relaxed flex-1 line-clamp-2">{{ course.excerpt }}</p>

      <div class="mt-4 flex items-center justify-between gap-3">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1.5 text-sm text-text-muted">
            <Icon name="mdi:play-circle-outline" size="16" />
            {{ course.lessonCount }} bài học
          </div>
          <div v-if="totalDuration" class="flex items-center gap-1.5 text-sm text-text-muted">
            <Icon name="mdi:clock-outline" size="16" />
            {{ formatDuration(totalDuration) }}
          </div>
        </div>
        <div v-if="course.progress !== undefined" class="flex items-center gap-2 flex-1 max-w-[140px]">
          <div class="progress-bar flex-1">
            <div class="progress-bar-fill" :style="{ width: `${course.progress}%` }" />
          </div>
          <span class="text-xs text-brand-accent font-semibold">{{ course.progress }}%</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>


