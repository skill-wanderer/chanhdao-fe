<script setup lang="ts">
useSeo({
  title: 'Noi dung da duoc di chuyen',
  description: 'Duong dan ban vua truy cap khong con hop le hoac da duoc cap nhat.',
  noIndex: true,
})
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center p-10 max-sm:p-6">
    <div class="text-center max-w-[600px]">
      <Icon name="mdi:archive-clock-outline" class="text-brand-orange text-[5rem] mb-4" />

      <h1 class="text-[clamp(1.4rem,4vw,2rem)] font-bold mb-4">
        Noi dung da duoc cap nhat
      </h1>

      <p class="text-[rgba(224,224,224,0.8)] text-lg leading-relaxed mb-6">
        Duong dan ban vua mo co the da cu, da thay doi, hoac khong con ton tai.
      </p>

      <p class="text-[rgba(224,224,224,0.65)] text-base leading-relaxed mb-6">
        Ban co the quay ve trang chu, tim khoa hoc, hoac su dung Lyra de tim noi dung tuong tu.
      </p>

      <p class="text-[rgba(224,224,224,0.65)] text-base leading-relaxed mb-8">
        Neu ban khong tim thay bai hoc can thiet, hay dung trang tim kiem de tim nhanh hon.
      </p>

      <div class="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-3">
        <NuxtLink to="/" class="btn btn-primary">
          <Icon name="mdi:home" /> Ve trang chu
        </NuxtLink>
        <NuxtLink to="/courses" class="btn btn-secondary">
          Xem khoa hoc
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
