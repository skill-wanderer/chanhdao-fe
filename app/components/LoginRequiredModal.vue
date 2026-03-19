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
          <button class="absolute top-3 right-3 bg-transparent border-none text-[rgba(224,224,224,0.5)] text-[1.3rem] cursor-pointer p-1 flex transition-colors duration-200 hover:text-[#e0e0e0]" aria-label="Dong" @click="emit('close')">
            <Icon name="mdi:close" />
          </button>

          <div class="text-[3rem] text-brand-orange mb-4 flex justify-center">
            <Icon name="mdi:lock-outline" />
          </div>

          <h2 id="login-modal-title" class="text-[1.4rem] font-bold mb-3 text-[#e0e0e0]">Can dang nhap</h2>

          <p class="text-[0.95rem] text-[rgba(224,224,224,0.6)] leading-relaxed mb-6">
            Ban can dang nhap de theo doi tien do hoc. Hay dang nhap hoac tao tai khoan mien phi de danh dau bai hoc da hoan thanh.
          </p>

          <div class="flex gap-3 justify-center mb-4">
            <a :href="loginUrl(returnTo)" class="btn btn-primary btn-sm">
              <Icon name="mdi:login" />
              Dang nhap
            </a>
            <a :href="registerUrl(returnTo)" class="btn btn-secondary btn-sm">
              <Icon name="mdi:account-plus-outline" />
              Dang ky
            </a>
          </div>

          <button class="bg-transparent border-none text-[rgba(224,224,224,0.4)] text-[0.85rem] cursor-pointer transition-colors duration-200 hover:text-[rgba(224,224,224,0.7)]" @click="emit('close')">
            De sau
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
