<script setup lang="ts">
import allPaths from '~/data/paths'

const route = useRoute()
const slug = route.params.slug as string

const { formatDuration, getCourseDuration, getCourseBySlug } = useCourses()
const path = allPaths.find(p => p.slug === slug)
const difficultyLabels: Record<string, string> = {
  beginner: 'cơ bản',
  intermediate: 'trung cấp',
  advanced: 'nâng cao',
}

if (!path) {
  throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy Pháp lộ' })
}

const config = useRuntimeConfig()
const siteUrl = (config.public.siteUrl as string) || 'http://localhost:3000'
const difficultyLabelForSeo = difficultyLabels[path.difficulty] || 'phù hợp'
const availableCourseCount = path.courses?.filter(course => getCourseBySlug(course.slug)).length || 0

useSeo({
  title: `${path.title} | Pháp lộ học Phật ${difficultyLabelForSeo} | Chánh Đạo`,
  description: `${path.title} là pháp lộ học Phật ${difficultyLabelForSeo} tại Chánh Đạo, gồm ${path.courseCount} pháp quyển dự kiến và ${availableCourseCount} pháp quyển đang mở. ${path.description}`,
  url: `${siteUrl}/phap-lo/${path.slug}`,
  pageType: 'CollectionPage',
  keywords: [
    path.title,
    'pháp lộ học Phật',
    'lộ trình học Phật',
    `Phật học ${difficultyLabelForSeo}`,
    'Chánh Đạo',
  ],
  about: [path.title, 'pháp lộ', 'giáo lý Phật giáo', 'học Phật theo lộ trình'],
  audience: 'Người Việt học Phật theo lộ trình có hệ thống',
  breadcrumbs: [
    { name: 'Trang chủ', url: siteUrl },
    { name: 'Pháp Lộ', url: `${siteUrl}/phap-lo` },
    { name: path.title },
  ],
  schemas: [
    {
      '@type': 'ItemList',
      name: `Danh sách pháp quyển trong pháp lộ ${path.title}`,
      itemListElement: (path.courses || []).map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: course.title,
        url: `${siteUrl}/phap-quyen/${course.slug}`,
      })),
    },
  ],
})

const totalDuration = computed(() => {
  if (!path.courses?.length) return 0
  return path.courses.reduce((sum, course) => {
    const found = getCourseBySlug(course.slug)
    return sum + (found ? getCourseDuration(found) : 0)
  }, 0)
})

const availableCourses = computed(() => {
  if (!path.courses?.length) return 0
  return path.courses.filter(course => isCourseAvailable(course.slug)).length
})

function isCourseAvailable(slugValue: string): boolean {
  return !!getCourseBySlug(slugValue)
}

function difficultyClass(d: string): string {
  switch (d) {
    case 'beginner': return 'badge-beginner'
    case 'intermediate': return 'badge-intermediate'
    case 'advanced': return 'badge-advanced'
    default: return 'badge-beginner'
  }
}

function difficultyLabel(d: string): string {
  switch (d) {
    case 'beginner': return 'Cơ bản'
    case 'intermediate': return 'Trung cấp'
    case 'advanced': return 'Nâng cao'
    default: return d
  }
}
</script>

<template>
  <div>
    <div class="section" style="padding-bottom: 0;">
      <BreadcrumbNav :items="[
        { label: 'Trang chủ', to: '/' },
        { label: 'Pháp Lộ', to: '/phap-lo' },
        { label: path.title },
      ]" />
    </div>

    <section class="px-5 pt-10 pb-[50px] max-md:px-4 max-md:pt-6 max-md:pb-8 max-sm:px-3 max-sm:pb-6">
      <div class="max-w-content mx-auto">
        <div class="glass-card p-8 max-md:p-6 max-sm:p-4">
          <div class="flex gap-4 items-start mb-4 max-md:flex-col">
            <Icon :name="path.icon" class="text-[2.2rem] text-brand-primary shrink-0 mt-1" />
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2 flex-wrap">
                <h1 class="gradient-text text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.15]">{{ path.title }}</h1>
                <span :class="['badge', difficultyClass(path.difficulty)]">{{ difficultyLabel(path.difficulty) }}</span>
              </div>
              <p class="text-text-secondary text-[1.02rem] leading-[1.75]">{{ path.description }}</p>

              <div class="flex items-center gap-5 mt-4 flex-wrap">
                <span class="text-sm text-text-muted">
                  <Icon name="mdi:book-open-outline" class="inline" /> {{ path.courseCount }} pháp quyển dự kiến
                </span>
                <span class="text-sm text-text-muted">
                  <Icon name="mdi:check-circle-outline" class="inline" /> {{ availableCourses }} pháp quyển đang mở
                </span>
                <span v-if="totalDuration" class="text-sm text-text-muted">
                  <Icon name="mdi:clock-outline" class="inline" /> {{ formatDuration(totalDuration) }} nội dung đang mở
                </span>
              </div>
            </div>
          </div>

          <div
            v-if="path.content"
            class="mt-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.03] px-5 py-4 text-text-secondary"
          >
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent/80">
              Lời dẫn
            </p>
            <div class="space-y-4 text-[1rem] leading-[1.9]" style="white-space: pre-line;">
              {{ path.content }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="glass-card p-7 max-md:p-5 max-sm:p-4">
        <div class="flex items-center gap-2 mb-5">
          <Icon name="mdi:map-marker-path" class="text-brand-primary text-xl" />
          <h2 class="text-2xl font-bold">Lộ trình nội dung</h2>
        </div>

        <div v-if="path.courses?.length" class="flex flex-col gap-3">
          <div
            v-for="(course, index) in path.courses"
            :key="course.slug"
            class="flex items-center gap-3 py-3 px-4 rounded-lg bg-brand-primary/[0.03] border border-brand-primary/[0.06]"
          >
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/[0.12] text-brand-primary text-[0.85rem] font-bold shrink-0">{{ index + 1 }}</span>

            <NuxtLink
              v-if="isCourseAvailable(course.slug)"
              :to="`/phap-quyen/${course.slug}`"
              class="text-text-primary no-underline text-[0.98rem] font-medium transition-colors duration-200 hover:text-brand-primary"
            >
              {{ course.title }}
            </NuxtLink>

            <span v-else class="text-text-secondary text-[0.98rem] font-medium">
              {{ course.title }}
            </span>

            <span v-if="isCourseAvailable(course.slug)" class="ml-auto text-[0.72rem] uppercase tracking-wider text-[#4caf50]">Đang mở</span>
            <span v-else class="ml-auto text-[0.72rem] uppercase tracking-wider text-brand-accent/80">Sắp mở</span>
          </div>
        </div>

        <div v-else class="flex items-center gap-2.5 py-3 px-4 rounded-lg bg-brand-primary/5 border border-dashed border-brand-primary/20">
          <Icon name="mdi:hammer-wrench" class="text-brand-primary text-lg" />
          <span class="text-sm text-text-secondary">Nội dung đang được cập nhật. Vui lòng quay lại sau.</span>
        </div>

        <div class="mt-6 pt-5 border-t border-brand-primary/10 flex flex-wrap gap-3">
          <NuxtLink to="/phap-quyen" class="btn btn-primary btn-sm">
            <Icon name="mdi:school-outline" /> Xem pháp quyển đang mở
          </NuxtLink>
          <NuxtLink to="/phap-lo" class="btn btn-outline btn-sm">
            <Icon name="mdi:arrow-left" /> Quay lại pháp lộ
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
