<script setup lang="ts">
const props = defineProps<{
  visible: boolean
  returnTo?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const { loginUrl, registerUrl } = useKeycloak()

function onOverlayClick(e: MouseEvent) {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-5" @click="onOverlayClick">
        <div class="modal-content glass-card relative max-w-[420px] w-full px-8 pt-10 pb-8 text-center !hover:transform-none" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
          <button class="absolute top-3 right-3 bg-transparent border-none text-text-muted text-[1.3rem] cursor-pointer p-1 flex transition-colors duration-200 hover:text-text-primary" aria-label="Đóng" @click="emit('close')">
            <Icon name="mdi:close" />
          </button>

          <div class="text-[3rem] text-brand-primary mb-4 flex justify-center">
            <Icon name="mdi:lock-outline" />
          </div>

          <h2 id="login-modal-title" class="text-[1.4rem] font-bold mb-3 text-text-primary">Đăng nhập để tiếp tục</h2>

          <p class="text-[0.95rem] text-text-secondary leading-relaxed mb-6">
            Bạn cần đăng nhập để theo dõi tiến độ học. Hãy đăng nhập hoặc tạo tài khoản miễn phí để đánh dấu bài học đã hoàn thành.
          </p>

          <div class="flex gap-3 justify-center mb-4">
            <a :href="loginUrl(returnTo)" class="btn btn-primary btn-sm">
              <Icon name="mdi:login" />
              Đăng nhập
            </a>
            <a :href="registerUrl(returnTo)" class="btn btn-secondary btn-sm">
              <Icon name="mdi:account-plus-outline" />
              Đăng ký
            </a>
          </div>

          <button class="bg-transparent border-none text-text-light text-[0.85rem] cursor-pointer transition-colors duration-200 hover:text-text-secondary" @click="emit('close')">
            Để sau
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-content:hover {
  transform: none;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  @apply transition-opacity duration-[250ms];
}
.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  @apply transition-transform duration-[250ms];
}
.modal-enter-from,
.modal-leave-to {
  @apply opacity-0;
}
.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(10px);
}
</style>
