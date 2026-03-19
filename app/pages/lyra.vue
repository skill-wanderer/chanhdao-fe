<script setup lang="ts">
useSeo({
  title: 'Lyra trợ lý học tập',
  description: 'Lyra là trợ lý AI hỗ trợ tra cứu khóa học, bài học và lộ trình học trên nền tảng.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Gặp Lyra"
      subtitle="Trợ lý lưu trữ"
      description="Người bạn đồng hành AI giúp bạn tìm khóa học, bài học và lộ trình học nhanh hơn."
      :cta-primary="{ label: 'Xem khóa học', to: '/courses' }"
      :cta-secondary="{ label: 'Xem lộ trình học', to: '/paths' }"
    />

    <!-- What is Lyra -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Lyra là gì?</h2>

      <div class="glass-card p-8 md:p-12 space-y-6">
        <div class="flex gap-4 items-start">
          <Icon name="mdi:book-open-page-variant-outline" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Trợ lý AI cho người học</h3>
            <p class="text-text-secondary leading-relaxed">
              Lyra là trợ lý hỏi đáp được tích hợp ngay trên nền tảng. Lyra có khả năng tìm kiếm
              trong kho nội dung khóa học, bài học và lộ trình học để gợi ý thông tin phù hợp.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <Icon name="mdi:brain" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Vận hành với RAG</h3>
            <p class="text-text-secondary leading-relaxed">
              Lyra sử dụng Retrieval-Augmented Generation để tạo câu trả lời dựa trên nội dung thật
              của nền tảng. Mọi câu hỏi đều được đối chiếu từ nguồn dữ liệu liên quan để tăng độ chính xác.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <Icon name="mdi:link-variant" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Trả lời kèm nguồn tham chiếu</h3>
            <p class="text-text-secondary leading-relaxed">
              Các câu trả lời kèm theo liên kết đến bài học hoặc trang liên quan để bạn kiểm chứng và
              học sâu hơn khi cần.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What Can You Ask -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Bạn có thể hỏi gì?</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="glass-card p-6">
          <Icon name="mdi:school-outline" class="text-brand-primary text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Khóa học và bài học</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            "Có những khóa học nào?" · "Cho tôi biết về khóa học kiểm thử" · "Module 2 học gì?"
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:map-marker-path" class="text-brand-primary text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Lộ trình học</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            "Có những lộ trình nào?" · "Tôi nên bắt đầu từ đâu?" · "Cho tôi biết về lộ trình QA"
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:progress-check" class="text-brand-primary text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Tiến độ và tính năng</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            "Theo dõi tiến độ thế nào?" · "Quiz hoạt động ra sao?" · "Tôi có cần tài khoản không?"
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:compass-outline" class="text-brand-primary text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Hướng dẫn chung</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            "Nên bắt đầu từ đâu?" · "Học kiểm thử thế nào hiệu quả?" · "Nền tảng này khác gì?"
          </p>
        </div>
      </div>
    </section>

    <!-- How to Use -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Cách sử dụng Lyra</h2>

      <div class="glass-card p-8 md:p-12">
        <ol class="space-y-6">
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold shrink-0">1</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Mở khung trò chuyện</h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Bấm vào biểu tượng cuốn sách ở góc dưới bên phải để mở khung Lyra.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold shrink-0">2</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Đặt câu hỏi</h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Nhập câu hỏi hoặc chọn gợi ý có sẵn. Lyra sẽ tìm dữ liệu và trả lời kèm tham chiếu.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold shrink-0">3</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Mở nguồn tham chiếu</h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Mọi phản hồi đều có liên kết liên quan để bạn học sâu ngay lập tức.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold shrink-0">4</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Tiếp tục hoặc đặt lại</h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Lyra ghi nhớ hội thoại trong phiên hiện tại. Bạn có thể hỏi tiếp hoặc đặt lại để bắt đầu mới.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10">
        <Icon name="mdi:book-open-page-variant-outline" class="text-brand-primary text-4xl mb-4" />
        <h2 class="text-2xl font-bold gradient-text mb-4">Sẵn sàng khám phá?</h2>
        <p class="text-text-secondary mb-6 leading-relaxed">
          Bạn có thể mở Lyra từ mọi trang bằng biểu tượng cuốn sách, hoặc vào thẳng danh sách khóa học.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/courses" class="btn btn-primary">
            Xem khóa học <Icon name="mdi:arrow-right" />
          </NuxtLink>
          <NuxtLink to="/paths" class="btn btn-outline">
            Lộ trình học <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
