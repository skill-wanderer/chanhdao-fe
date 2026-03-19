<script setup lang="ts">
const query = ref('')
const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

function handleSearch() {
  if (query.value.trim()) {
    emit('search', query.value.trim())
  }
}
</script>

<template>
  <form
    class="flex items-center gap-3 bg-white border border-brand-primary/20 rounded-pill py-2 pr-2 pl-5 max-w-[600px] w-full transition-colors duration-300 focus-within:border-brand-primary shadow-card max-[500px]:flex-wrap max-[500px]:rounded-card max-[500px]:p-2.5 max-[500px]:gap-2"
    @submit.prevent="handleSearch"
    role="search"
  >
    <Icon name="mdi:magnify" class="text-text-light text-xl shrink-0 max-[500px]:hidden" />
    <input
      v-model="query"
      type="search"
      placeholder="Tìm khóa học, lộ trình học, kỹ năng..."
      class="flex-1 bg-transparent border-none text-text-primary text-base outline-none placeholder:text-text-light min-w-0 max-[500px]:w-full max-[500px]:text-[0.95rem]"
      aria-label="Tìm khóa học và lộ trình học"
    />
    <button type="submit" class="btn btn-primary btn-sm max-[500px]:w-full max-[500px]:justify-center">Tìm kiếm</button>
  </form>
</template>
