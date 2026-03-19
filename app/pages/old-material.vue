<script setup lang="ts">
useSeo({
  title: 'Nội dung đã được di chuyển',
  description: 'Đường dẫn bạn vừa truy cập không còn hợp lệ hoặc đã được cập nhật.',
  noIndex: true,
})
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center p-10 max-sm:p-6">
    <div class="text-center max-w-[600px]">
      <Icon name="mdi:archive-clock-outline" class="text-brand-orange text-[5rem] mb-4" />

      <h1 class="text-[clamp(1.4rem,4vw,2rem)] font-bold mb-4">
        Nội dung đã được cập nhật
      </h1>

      <p class="text-[rgba(224,224,224,0.8)] text-lg leading-relaxed mb-6">
        Đường dẫn bạn vừa mở có thể đã cũ, đã thay đổi, hoặc không còn tồn tại.
      </p>

      <p class="text-[rgba(224,224,224,0.65)] text-base leading-relaxed mb-6">
        Bạn có thể quay về trang chủ, tìm khóa học, hoặc sử dụng Lyra để tìm nội dung tương tự.
      </p>

      <p class="text-[rgba(224,224,224,0.65)] text-base leading-relaxed mb-8">
        Nếu bạn không tìm thấy bài học cần thiết, hãy dùng trang tìm kiếm để tìm nhanh hơn.
      </p>

      <div class="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-3">
        <NuxtLink to="/" class="btn btn-primary">
          <Icon name="mdi:home" /> Về trang chủ
        </NuxtLink>
        <NuxtLink to="/courses" class="btn btn-secondary">
          Xem khóa học
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
