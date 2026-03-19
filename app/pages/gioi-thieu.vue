<script setup lang="ts">
useSeo({
  title: 'Giới thiệu Chánh Đạo — AI cho học Phật học',
  description: 'Nền tảng dành cho người Việt học Phật giáo, kết hợp AI để soạn nội dung, hỗ trợ truy cứu Phật học và phát triển nhiều hình thức học tập phục vụ tu học.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Mục đích của Chánh Đạo"
      subtitle="Giới thiệu dự án"
      description="Đây là nền tảng dành cho người Việt học Phật giáo, kết hợp công nghệ AI mới với việc tu học đạo Phật, vừa hỗ trợ tiếp cận nội dung vừa mở rộng khả năng truy cứu và tìm tòi."
    />

    <section class="section section-narrow pt-0">
      <div class="glass-card p-8 md:p-10">
        <h2 class="text-2xl md:text-3xl font-bold font-serif gradient-text mb-4 text-center">AI được tích hợp để hỗ trợ tu học như thế nào?</h2>
        <div class="space-y-4 text-text-secondary leading-relaxed">
          <p>
            Dự án được định hướng dùng AI như một công cụ trợ duyên cho người Việt học Phật giáo. AI có thể hỗ trợ soạn thảo,
            cấu trúc lại bài học, gợi ý các cách trình bày dễ tiếp cận hơn và giúp đội ngũ cập nhật nội dung nhanh hơn.
          </p>
          <p>
            Với người học và các đồng hữu đang tìm hiểu giáo pháp, AI cũng được kỳ vọng hỗ trợ truy cứu nội dung, tìm lại chủ đề liên quan,
            mở rộng câu hỏi, đối chiếu các ý niệm và giúp quá trình tìm tòi diễn ra thuận tiện hơn.
          </p>
          <p>
            Song song với đó, nền tảng hướng đến việc phát triển nhiều hình thức học tập như video, slide, podcast đọc, quiz và các mô thức tương tác khác,
            để việc học không chỉ dừng ở đọc văn bản mà có thể hỗ trợ tu tập một cách toàn diện hơn.
          </p>
        </div>
      </div>
    </section>

    <section class="section section-narrow pt-0">
      <div class="glass-card p-8 md:p-10 border border-brand-primary/20">
        <div class="flex gap-4 items-start">
          <Icon name="mdi:shield-alert-outline" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div class="space-y-4">
            <h2 class="text-2xl font-bold font-serif gradient-text">Lưu ý về kiểm duyệt và độ chính xác</h2>
            <p class="text-text-secondary leading-relaxed">
              Chúng tôi kiểm duyệt nội dung nghiêm túc. Tuy vậy, vẫn có khả năng xuất hiện sai sót hoặc điểm chưa tương hợp,
              vì hiểu biết và cách diễn đạt về Phật học luôn cần được học hỏi và cập nhật liên tục.
            </p>
            <p class="text-text-secondary leading-relaxed">
              Bạn đọc nên kiểm chứng thêm từ các nguồn tin cậy và tự quán chiếu cẩn trọng trước khi áp dụng.
            </p>
            <blockquote class="rounded-2xl border border-brand-primary/25 bg-surface-bg-alt px-5 py-4 italic text-text-primary">
              "Đây chỉ là cánh tay chỉ mặt trăng, đừng chấp cánh tay mà hãy từ đó để nhìn mặt trăng."
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- Why a Custom LMS -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold font-serif gradient-text mb-6 text-center">Tầm nhìn và hướng đi</h2>

      <div class="glass-card p-8 md:p-12 space-y-8">
        <!-- AI-Powered -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:robot-outline" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold font-serif mb-2">Nội dung được cập nhật nhanh hơn</h3>
            <p class="text-text-secondary leading-relaxed">
              Chúng tôi xây dựng theo hướng nội dung được quản lý minh bạch, dễ cập nhật và dễ mở rộng.
              AI được tích hợp để hỗ trợ biên soạn, chuẩn hóa cách trình bày và rút ngắn thời gian cập nhật,
              để đội ngũ có thể cải tiến nội dung liên tục mà không bị phụ thuộc vào quy trình phức tạp.
            </p>
          </div>
        </div>

        <!-- Playing to Our Strengths -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:code-braces" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold font-serif mb-2">Tập trung vào trải nghiệm người học</h3>
            <p class="text-text-secondary leading-relaxed">
              Mọi thay đổi giao diện và nội dung đều được ưu tiên theo nhu cầu học tập thực tế.
              Nền tảng được thiết kế để hỗ trợ đồng hữu truy cứu nội dung, tìm tòi sâu hơn và tiếp cận kiến thức theo cách rõ ràng, dễ theo dõi.
            </p>
          </div>
        </div>

        <!-- Modern & Open -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:open-source-initiative" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold font-serif mb-2">Mở, minh bạch và dễ tiếp cận</h3>
            <p class="text-text-secondary leading-relaxed">
              Chúng tôi theo đuổi hướng mã nguồn mở để cộng đồng có thể cùng xem xét, đóng góp
              và phát triển. Người học có thể truy cập nội dung miễn phí trên nhiều thiết bị và dần tiếp cận thêm các định dạng như video, slide, podcast đọc hay quiz.
            </p>
          </div>
        </div>

        <!-- Full Control -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:tune-vertical" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold font-serif mb-2">Cải tiến liên tục theo phản hồi</h3>
            <p class="text-text-secondary leading-relaxed">
              Dự án được xây dựng để dễ dàng tiếp nhận phản hồi và nâng cấp theo từng giai đoạn.
              Mục tiêu là giữ cho hệ thống nhẹ, dễ dùng và ngày càng hữu ích cho người học.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Source CTA -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10">
        <Icon name="mdi:source-repository" class="text-brand-primary text-4xl mb-4" />
        <h2 class="text-2xl font-bold font-serif gradient-text mb-4">Dự án mã nguồn mở</h2>
        <p class="text-text-secondary mb-6 leading-relaxed">
          Bạn có thể theo dõi quá trình phát triển, đóng góp ý kiến và gửi pull request tại kho mã nguồn mở.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="https://github.com/skill-wanderer/chanhdao-fe" target="_blank" rel="noopener" class="btn btn-primary">
            Xem kho mã nguồn <Icon name="mdi:open-in-new" />
          </a>
          <NuxtLink to="/phap-quyen" class="btn btn-outline">
            Xem pháp quyển <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>