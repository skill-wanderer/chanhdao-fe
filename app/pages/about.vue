<script setup lang="ts">
useSeo({
  title: 'Giới thiệu Chánh Đạo Học Tập',
  description: 'Thông tin tổng quan về nền tảng, hướng phát triển và giá trị mà dự án theo đuổi.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Vì sao chúng tôi xây dựng nền tảng này"
      subtitle="Giới thiệu dự án"
      description="Một nền tảng học tập mở, tối giản và bền vững, được xây dựng để phục vụ người học tiếng Việt."
    />

    <!-- Why a Custom LMS -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Tầm nhìn và hướng đi</h2>

      <div class="glass-card p-8 md:p-12 space-y-8">
        <!-- AI-Powered -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:robot-outline" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Nội dung được cập nhật nhanh hơn</h3>
            <p class="text-gray-400 leading-relaxed">
              Chúng tôi xây dựng theo hướng nội dung được quản lý minh bạch, dễ cập nhật và dễ mở rộng.
              Việc biên soạn bài học được tối ưu để đội ngũ có thể cải tiến liên tục mà không bị phụ thuộc
              vào quy trình phức tạp.
            </p>
          </div>
        </div>

        <!-- Playing to Our Strengths -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:code-braces" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Tập trung vào trải nghiệm người học</h3>
            <p class="text-gray-400 leading-relaxed">
              Mọi thay đổi giao diện và nội dung đều được ưu tiên theo nhu cầu học tập thực tế.
              Nền tảng được thiết kế để đơn giản, rõ ràng và giúp người học tập trung vào kiến thức.
            </p>
          </div>
        </div>

        <!-- Modern & Open -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:open-source-initiative" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Mở, minh bạch và dễ tiếp cận</h3>
            <p class="text-gray-400 leading-relaxed">
              Chúng tôi theo đuổi hướng mã nguồn mở để cộng đồng có thể cùng xem xét, đóng góp
              và phát triển. Người học có thể truy cập nội dung miễn phí và nhất quán trên nhiều thiết bị.
            </p>
          </div>
        </div>

        <!-- Full Control -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:tune-vertical" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Cải tiến liên tục theo phản hồi</h3>
            <p class="text-gray-400 leading-relaxed">
              Dự án được xây dựng để dễ dàng tiếp nhận phản hồi và nâng cấp theo từng giai đoạn.
              Mục tiêu là giữ cho hệ thống nhẹ, dễ dùng và ngày càng hợu ích cho người học.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Source CTA -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10">
        <Icon name="mdi:source-repository" class="text-brand-orange text-4xl mb-4" />
        <h2 class="text-2xl font-bold gradient-text mb-4">Dự án mã nguồn mở</h2>
        <p class="text-gray-400 mb-6 leading-relaxed">
          Bạn có thể theo dõi quá trình phát triển, đóng góp ý kiến và gửi pull request tại kho mã nguồn mở.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="https://github.com/skill-wanderer/chanhdao-fe" target="_blank" rel="noopener" class="btn btn-primary">
            Xem kho mã nguồn <Icon name="mdi:open-in-new" />
          </a>
          <NuxtLink to="/courses" class="btn btn-outline">
            Xem khóa học <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
