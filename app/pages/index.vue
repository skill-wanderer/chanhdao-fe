<script setup lang="ts">
import allPaths from '~/data/paths'
import allCourses from '~/data/courses'
import { isPublishedCourse } from '~/types/course'

useSeo({
  title: 'Chánh Đạo — Ứng dụng AI để học Phật học',
  description: 'Nền tảng mở dành cho người Việt học Phật giáo, kết hợp AI để soạn nội dung, hỗ trợ truy cứu Phật học và mở rộng nhiều hình thức học như video, slide, podcast, quiz.',
})

const learningPaths = [
  { title: 'Phật học cơ bản', icon: 'mdi:book-open-variant', slug: 'phat-hoc-can-ban' },
  { title: 'Đọc hiểu kinh điển', icon: 'mdi:text-box-search-outline', slug: 'doc-hieu-kinh-dien' },
  { title: 'Ứng dụng vào đời sống', icon: 'mdi:meditation', slug: 'ung-dung-doi-song' },
]

const features = [
  {
    icon: 'mdi:lock-open-variant-outline',
    title: 'Miễn phí và mở',
    description: 'Mọi pháp quyển đều có thể truy cập miễn phí, không có paywall.',
  },
  {
    icon: 'mdi:school-outline',
    title: 'Pháp lộ rõ ràng',
    description: 'Theo các pháp lộ được sắp xếp từ cơ bản đến nâng cao.',
  },
  {
    icon: 'mdi:chart-timeline-variant-shimmer',
    title: 'Theo dõi tiến độ',
    description: 'Đánh dấu bài học đã xong và theo dõi tiến độ trên từng pháp quyển.',
  },
  {
    icon: 'mdi:brain',
    title: 'Nền tảng sử dụng các nội dung AI để hỗ trợ học tập',
    description: 'AI hỗ trợ soạn nội dung, tóm tắt ý chính, gợi ý câu hỏi và giúp đồng hữu truy cứu, tìm tòi nội dung Phật học nhanh hơn.',
  },
  {
    icon: 'mdi:play-box-multiple-outline',
    title: 'Học đa định dạng',
    description: 'Nội dung được định hướng triển khai qua video, slide, podcast, quiz và các hình thức học phù hợp khác.',
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
    title: 'Định hướng cho người Việt',
    description: 'Nội dung và trải nghiệm được tối ưu cho người Việt học Phật giáo, để kết hợp công nghệ AI mới với việc tu học đạo Phật một cách gần gũi hơn.',
  },
]

const publishedCourseCount = allCourses.filter(isPublishedCourse).length
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Học Phật học vững vàng với trợ lực AI"
      subtitle="Chào mừng đến với Chánh Đạo"
      description="Nền tảng mở dành cho người Việt học Phật giáo, kết hợp công nghệ AI mới để soạn nội dung, hỗ trợ truy cứu giáo lý và tìm tòi chủ đề liên hệ."
      :cta-primary="{ label: 'Xem pháp quyển', to: '/phap-quyen' }"
      :cta-tertiary="{ label: 'Xem Pháp Lộ', to: '/phap-lo' }"
      :stats="[
        { value: String(allPaths.length), label: 'Pháp Lộ' },
        { value: String(publishedCourseCount), label: 'Pháp quyển' },
        { value: '100%', label: 'Miễn phí' },
        { value: 'Mở', label: 'Cộng đồng' },
      ]"
    />

    <section class="section section-narrow pt-0">
      <div class="glass-card p-6 md:p-8 border border-brand-primary/20">
        <div class="flex items-start gap-3">
          <Icon name="mdi:alert-circle-outline" class="text-brand-primary text-2xl mt-0.5 shrink-0" />
          <div>
            <h2 class="text-xl md:text-2xl font-bold font-serif mb-3">Lưu ý khi học với AI</h2>
            <p class="text-text-secondary leading-relaxed">
              Chúng tôi kiểm duyệt nội dung nghiêm túc, nhưng vẫn có thể tồn tại sai sót hoặc điểm chưa tương hợp.
              Bạn nên kiểm chứng thêm từ các nguồn tin cậy và thực tập với tinh thần quan sát, đối chiếu.
            </p>
            <p class="text-text-secondary leading-relaxed mt-3">
              Mục tiêu của nền tảng không chỉ là đọc văn bản, mà còn từng bước phát triển các hình thức học như video, slide, podcast, quiz và các trải nghiệm hỗ trợ tu tập tối đa.
            </p>
          </div>
        </div>
      </div>
    </section>

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
          <h2 class="text-3xl font-bold font-serif gradient-text mb-2">Pháp Lộ</h2>
          <p class="text-text-secondary">Bắt đầu từ nền tảng, học từng bước và kết hợp nhiều cách tiếp cận để duy trì việc tu học</p>
        </div>
        <NuxtLink to="/phap-lo" class="btn btn-outline btn-sm">
          Xem tất cả pháp lộ <Icon name="mdi:arrow-right" />
        </NuxtLink>
      </div>

      <div class="card-grid">
        <NuxtLink
          v-for="path in learningPaths"
          :key="path.slug"
          to="/phap-lo"
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
          Bạn có thể bắt đầu học ngay với các pháp quyển mở hôm nay, và đón nhận thêm nhiều hình thức học tập mới khi nền tảng tiếp tục được hoàn thiện.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/phap-quyen" class="btn btn-primary">
            Khám phá pháp quyển <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
