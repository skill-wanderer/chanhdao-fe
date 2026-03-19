<script setup lang="ts">
import type { Lesson } from '~/types/course'
import { isPublishedLesson } from '~/types/course'

const props = defineProps<{
  lesson: Lesson
  courseSlug: string
  index: number
}>()

const { formatDuration } = useCourses()
const isAvailable = computed(() => isPublishedLesson(props.lesson))
</script>

<template>
  <NuxtLink
    v-if="isAvailable"
    :to="`/phap-quyen/${courseSlug}/bai-hoc/${lesson.slug}`"
    class="lesson-item glass-card flex items-center gap-4 py-4 px-5 no-underline text-text-primary"
    :aria-label="`Bài học ${index + 1}: ${lesson.title}`"
  >
    <div class="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-brand-primary/10">
      <span v-if="lesson.completed" class="text-semantic-success text-[1.4rem] flex">
        <Icon name="mdi:check-circle" />
      </span>
      <span v-else class="text-sm font-bold text-brand-accent">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>

    <div class="flex-1">
      <h4 class="text-base font-semibold mb-1">{{ lesson.title }}</h4>
      <div class="flex items-center gap-3 text-[0.8rem] text-text-muted">
        <span class="flex items-center gap-1">
          <Icon :name="lesson.type === 'video' ? 'mdi:play-circle-outline' : 'mdi:file-document-outline'" size="14" />
          {{ lesson.type === 'video' ? 'Video' : 'Bài viết' }}
        </span>
        <span v-if="lesson.durationMinutes" class="flex items-center gap-1">
          <Icon name="mdi:clock-outline" size="14" />
          {{ formatDuration(lesson.durationMinutes) }}
        </span>
      </div>
    </div>

    <Icon name="mdi:chevron-right" class="lesson-arrow text-text-light transition-all duration-300" />
  </NuxtLink>

  <div
    v-else
    class="lesson-item glass-card flex items-center gap-4 py-4 px-5 text-text-primary opacity-80"
    :aria-label="`Bài học ${index + 1}: ${lesson.title} (sắp mở)`"
  >
    <div class="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-brand-primary/10">
      <span class="text-sm font-bold text-brand-accent">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>

    <div class="flex-1">
      <div class="flex items-center gap-2 mb-1 flex-wrap">
        <h4 class="text-base font-semibold">{{ lesson.title }}</h4>
        <span class="text-[0.7rem] uppercase tracking-wider text-brand-accent/80">Sắp mở</span>
      </div>
      <div class="flex items-center gap-3 text-[0.8rem] text-text-muted">
        <span class="flex items-center gap-1">
          <Icon :name="lesson.type === 'video' ? 'mdi:play-circle-outline' : 'mdi:file-document-outline'" size="14" />
          {{ lesson.type === 'video' ? 'Video' : 'Bài viết' }}
        </span>
        <span v-if="lesson.durationMinutes" class="flex items-center gap-1">
          <Icon name="mdi:clock-outline" size="14" />
          {{ formatDuration(lesson.durationMinutes) }}
        </span>
      </div>
    </div>

    <Icon name="mdi:lock-outline" class="text-text-light" />
  </div>
</template>

<style scoped>
.lesson-item:hover .lesson-arrow {
  @apply text-brand-accent translate-x-1;
}
</style>
