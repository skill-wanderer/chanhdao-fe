<script setup lang="ts">
import allPaths from '~/data/paths'
import allCourses from '~/data/courses'
import { isPublishedCourse } from '~/types/course'

useSeo({
  title: 'Chanh Dao Hoc Tap — Nen tang hoc tap mo',
  description: 'Nen tang hoc tap mo, mien phi. Kham pha khoa hoc, theo doi tien do va nang cao ky nang moi ngay.',
})

const learningPaths = [
  { title: 'Web Developer', icon: 'mdi:web', slug: 'web-developer' },
  { title: 'Mobile Developer', icon: 'mdi:cellphone', slug: 'mobile-developer' },
  { title: 'DevOps', icon: 'mdi:server-network', slug: 'devops' },
  { title: 'QA / Tester', icon: 'mdi:bug-check-outline', slug: 'qa-tester' },
  { title: 'Project Management', icon: 'mdi:clipboard-check-outline', slug: 'project-management' },
  { title: 'Software Architecture', icon: 'mdi:sitemap-outline', slug: 'software-architecture-design-patterns' },
]

const features = [
  {
    icon: 'mdi:lock-open-variant-outline',
    title: 'Mien phi va mo',
    description: 'Moi khoa hoc deu co the truy cap mien phi, khong co paywall.',
  },
  {
    icon: 'mdi:school-outline',
    title: 'Lo trinh ro rang',
    description: 'Theo cac lo trinh duoc sap xep tu co ban den nang cao.',
  },
  {
    icon: 'mdi:chart-timeline-variant-shimmer',
    title: 'Theo doi tien do',
    description: 'Danh dau bai hoc da xong va theo doi tien do tren tung khoa hoc.',
  },
  {
    icon: 'mdi:code-tags',
    title: 'Hoc qua thuc hanh',
    description: 'Tap trung vao bai tap va tinh huong ap dung thuc te.',
  },
  {
    icon: 'mdi:earth',
    title: 'Ma nguon mo',
    description: 'Du an ma nguon mo de cong dong dong gop va phat trien.',
  },
  {
    icon: 'mdi:devices',
    title: 'Hoc moi noi',
    description: 'Giao dien tuong thich desktop, tablet va dien thoai.',
  },
  {
    icon: 'mdi:robot-outline',
    title: 'Ho tro boi AI',
    description: 'AI ho tro bien soan va nang cap noi dung nhanh, de dang duy tri.',
  },
]

const publishedCourseCount = allCourses.filter(isPublishedCourse).length
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Hoc that vung. Khong gioi han."
      subtitle="Chao mung den voi Chanh Dao Hoc Tap"
      description="Nen tang hoc tap mo, de ban tu do kham pha khoa hoc va lo trinh theo nhip do rieng."
      :cta-primary="{ label: 'Xem khoa hoc', to: '/courses' }"
      :cta-tertiary="{ label: 'Xem lo trinh hoc', to: '/paths' }"
      :stats="[
        { value: String(allPaths.length), label: 'Lo trinh' },
        { value: String(publishedCourseCount), label: 'Khoa hoc' },
        { value: '100%', label: 'Mien phi' },
        { value: 'Mo', label: 'Cong dong' },
      ]"
    />

    <!-- Features Section -->
    <section class="section section-glow">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-4">Vi sao chon nen tang nay?</h2>
        <p class="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Trai nghiem hoc tap hien dai, de tiep can va de duy tri lau dai.
        </p>
      </div>

      <div class="card-grid">
        <div v-for="feature in features" :key="feature.title" class="glass-card p-6 text-center">
          <Icon :name="feature.icon" class="text-brand-orange text-3xl mb-4" />
          <h3 class="text-lg font-bold mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-gray-400 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Learning Paths -->
    <section class="section">
      <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 class="text-3xl font-bold gradient-text mb-2">Lo trinh hoc</h2>
          <p class="text-gray-400">Chon lo trinh va bat dau ngay hom nay</p>
        </div>
        <NuxtLink to="/paths" class="btn btn-outline btn-sm">
          Xem tat ca lo trinh <Icon name="mdi:arrow-right" />
        </NuxtLink>
      </div>

      <div class="card-grid">
        <NuxtLink
          v-for="path in learningPaths"
          :key="path.slug"
          to="/paths"
          class="glass-card p-6 text-center"
          style="text-decoration: none; color: var(--light-text);"
        >
          <Icon :name="path.icon" class="text-brand-orange text-3xl mb-4" />
          <h3 class="text-lg font-bold">{{ path.title }}</h3>
        </NuxtLink>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10 md:p-14">
        <Icon name="mdi:rocket-launch-outline" class="text-brand-orange text-4xl mb-4" />
        <h2 class="text-2xl md:text-3xl font-bold gradient-text mb-4">San sang bat dau hoc?</h2>
        <p class="text-gray-400 mb-6 leading-relaxed">
          Ban co the xem khoa hoc ngay. Tao tai khoan mien phi de luu va theo doi tien do.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/courses" class="btn btn-primary">
            Kham pha khoa hoc <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
