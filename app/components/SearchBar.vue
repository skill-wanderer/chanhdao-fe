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
    class="flex items-center gap-3 bg-surface-card border border-brand-orange/20 rounded-pill py-2 pr-2 pl-5 max-w-[600px] w-full transition-colors duration-300 focus-within:border-brand-orange max-[500px]:flex-wrap max-[500px]:rounded-card max-[500px]:p-2.5 max-[500px]:gap-2"
    @submit.prevent="handleSearch"
    role="search"
  >
    <Icon name="mdi:magnify" class="text-[rgba(224,224,224,0.4)] text-xl shrink-0 max-[500px]:hidden" />
    <input
      v-model="query"
      type="search"
      placeholder="Tim khoa hoc, lo trinh hoc, ky nang..."
      class="flex-1 bg-transparent border-none text-[#e0e0e0] text-base outline-none placeholder:text-[rgba(224,224,224,0.35)] min-w-0 max-[500px]:w-full max-[500px]:text-[0.95rem]"
      aria-label="Tim khoa hoc va lo trinh hoc"
    />
    <button type="submit" class="btn btn-primary btn-sm max-[500px]:w-full max-[500px]:justify-center">Tim kiem</button>
  </form>
</template>
