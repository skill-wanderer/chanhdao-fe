<script setup lang="ts">
import allPaths from '~/data/paths'
import allCourses from '~/data/courses'
import { isPublishedCourse } from '~/types/course'

useSeo({
  title: 'Chánh Đạo Học Tập — Nền tảng học tập mở',
  description: 'Nền tảng học tập mở, miễn phí. Khám phá khóa học, theo dõi tiến độ và nâng cao kỹ năng mỗi ngày.',
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
    title: 'Miễn phí và mở',
    description: 'Mọi khóa học đều có thể truy cập miễn phí, không có paywall.',
  },
  {
    icon: 'mdi:school-outline',
    title: 'Lộ trình rõ ràng',
    description: 'Theo các lộ trình được sắp xếp từ cơ bản đến nâng cao.',
  },
  {
    icon: 'mdi:chart-timeline-variant-shimmer',
    title: 'Theo dõi tiến độ',
    description: 'Đánh dấu bài học đã xong và theo dõi tiến độ trên từng khóa học.',
  },
  {
    icon: 'mdi:code-tags',
    title: 'Học qua thực hành',
    description: 'Tập trung vào bài tập và tình huống áp dụng thực tế.',
  },
  {
    icon: 'mdi:earth',
    title: 'Mã nguồn mở',
    description: 'Dự án mã nguồn mở để cộng đồng đóng góp và phát triển.',
  },
  {
    icon: 'mdi:devices',
    title: 'Học mọi nơi',
    description: 'Giao diện tương thích desktop, tablet và điện thoại.',
  },
  {
    icon: 'mdi:robot-outline',
    title: 'Hỗ trợ bởi AI',
    description: 'AI hỗ trợ biên soạn và nâng cấp nội dung nhanh, dễ dàng duy trì.',
  },
]

const publishedCourseCount = allCourses.filter(isPublishedCourse).length
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Học thật vững. Không giới hạn."
      subtitle="Chào mừng đến với Chánh Đạo Học Tập"
      description="Nền tảng học tập mở, để bạn tự do khám phá khóa học và lộ trình theo nhịp độ riêng."
      :cta-primary="{ label: 'Xem khóa học', to: '/courses' }"
      :cta-tertiary="{ label: 'Xem lộ trình học', to: '/paths' }"
      :stats="[
        { value: String(allPaths.length), label: 'Lộ trình' },
        { value: String(publishedCourseCount), label: 'Khóa học' },
        { value: '100%', label: 'Miễn phí' },
        { value: 'Mở', label: 'Cộng đồng' },
      ]"
    />

    <!-- Features Section -->
    <section class="section section-glow">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold font-serif gradient-text mb-4">Vì sao chọn nền tảng này?</h2>
        <p class="text-text-secondary max-w-xl mx-auto leading-relaxed">
          Trải nghiệm học tập hiện đại, dễ tiếp cận và dễ duy trì lâu dài.
        </p>
      </div>

      <div class="card-grid">
        <div v-for="feature in features" :key="feature.title" class="glass-card p-6 text-center">
          <Icon :name="feature.icon" class="text-brand-primary text-3xl mb-4" />
          <h3 class="text-lg font-bold font-serif mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-text-secondary leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Learning Paths -->
    <section class="section">
      <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 class="text-3xl font-bold font-serif gradient-text mb-2">Lộ trình học</h2>
          <p class="text-text-secondary">Chọn lộ trình và bắt đầu ngay hôm nay</p>
        </div>
        <NuxtLink to="/paths" class="btn btn-outline btn-sm">
          Xem tất cả lộ trình <Icon name="mdi:arrow-right" />
        </NuxtLink>
      </div>

      <div class="card-grid">
        <NuxtLink
          v-for="path in learningPaths"
          :key="path.slug"
          to="/paths"
          class="glass-card p-6 text-center"
          style="text-decoration: none; color: inherit;"
        >
          <Icon :name="path.icon" class="text-brand-primary text-3xl mb-4" />
          <h3 class="text-lg font-bold font-serif">{{ path.title }}</h3>
        </NuxtLink>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10 md:p-14">
        <Icon name="mdi:rocket-launch-outline" class="text-brand-primary text-4xl mb-4" />
        <h2 class="text-2xl md:text-3xl font-bold font-serif gradient-text mb-4">Sẵn sàng bắt đầu học?</h2>
        <p class="text-text-secondary mb-6 leading-relaxed">
          Bạn có thể xem khóa học ngay. Tạo tài khoản miễn phí để lưu và theo dõi tiến độ.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/courses" class="btn btn-primary">
            Khám phá khóa học <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
