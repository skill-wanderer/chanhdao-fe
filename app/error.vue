<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error?.statusCode || 500)
const message = computed(() => {
  if (statusCode.value === 404) return 'Không tìm thấy trang'
  return props.error?.statusMessage || 'Đã xảy ra lỗi'
})

useSeo({
  title: `${statusCode.value} — Chánh Đạo Học Tập`,
  description: message.value,
  noIndex: true,
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-10 max-sm:p-6 bg-surface-bg text-text-primary">
    <div class="text-center max-w-[500px]">
      <span class="text-[clamp(5rem,15vw,10rem)] font-black font-serif leading-none block mb-4 gradient-text">{{ statusCode }}</span>
      <h1 class="text-[clamp(1.3rem,4vw,1.8rem)] font-bold font-serif mb-3">{{ message }}</h1>
      <p class="text-text-secondary text-base mb-8">
        Trang bạn cần tìm không tồn tại hoặc đã được di chuyển.
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


