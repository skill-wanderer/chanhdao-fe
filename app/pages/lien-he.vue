<script setup lang="ts">
useSeo({
  title: 'Liên hệ — Chánh Đạo',
  description: 'Gửi câu hỏi, góp ý hoặc phản hồi đến đội ngũ Chánh Đạo. Chúng tôi luôn sẵn sàng lắng nghe.',
})

const { submitContact } = useSubmissions()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const repositories = [
  { label: 'Frontend', href: 'https://github.com/skill-wanderer/chanhdao-fe' },
  { label: 'Backend API', href: 'https://github.com/skill-wanderer/chanhdao-be' },
  { label: 'Keycloak SSO', href: 'https://github.com/skill-wanderer/keycloak-sso' },
  { label: 'AI Service', href: 'https://github.com/skill-wanderer/an-lac-vien-ai' },
]

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  errorMessage.value = ''
  isSubmitting.value = true
  try {
    await submitContact({
      name: form.name,
      email: form.email,
      message: form.message,
    })
    isSubmitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    errorMessage.value = 'Gửi liên hệ không thành công. Vui lòng thử lại sau.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <TheHero
      title="Liên hệ với chúng tôi"
      subtitle="Liên hệ"
      description="Bạn có câu hỏi, góp ý về nội dung, hoặc muốn đồng hành cùng dự án? Hãy gửi lời nhắn, chúng tôi luôn sẵn sàng lắng nghe."
    />

    <section class="section section-narrow pt-0">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="glass-card p-6 text-center">
          <Icon name="mdi:email-outline" class="text-brand-primary text-3xl mb-3" />
          <h3 class="text-lg font-bold font-serif mb-1">Email</h3>
          <div class="space-y-1">
            <p class="text-text-secondary text-sm">quan.nguyen@skill-wanderer.com</p>
            <p class="text-text-secondary text-sm">dongvandung1209@gmail.com</p>
          </div>
        </div>
        <div class="glass-card p-6 text-center">
          <Icon name="mdi:github" class="text-brand-primary text-3xl mb-3" />
          <h3 class="text-lg font-bold font-serif mb-1">Mã nguồn dự án</h3>
          <div class="space-y-1.5">
            <a
              v-for="repo in repositories"
              :key="repo.href"
              :href="repo.href"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-text-secondary text-sm hover:text-brand-accent"
            >
              {{ repo.label }}
            </a>
          </div>
        </div>
        <div class="glass-card p-6 text-center">
          <Icon name="mdi:map-marker-outline" class="text-brand-primary text-3xl mb-3" />
          <h3 class="text-lg font-bold font-serif mb-1">Dự án</h3>
          <p class="text-text-secondary text-sm">Chánh Đạo — Mã nguồn mở</p>
        </div>
      </div>

      <div class="glass-card p-8 md:p-10">
        <h2 class="text-2xl md:text-3xl font-bold font-serif gradient-text mb-2 text-center">Gửi lời nhắn</h2>
        <p class="text-text-secondary text-center mb-8">Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>

        <Transition name="fade" mode="out-in">
          <div v-if="isSubmitted" class="flex flex-col items-center gap-3 py-8">
            <Icon name="mdi:check-circle" class="text-semantic-success text-5xl" />
            <p class="text-lg font-semibold text-semantic-success">Gửi liên hệ thành công!</p>
            <p class="text-text-secondary text-center">Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi qua email sớm nhất có thể.</p>
            <button class="btn btn-primary btn-sm mt-4" @click="isSubmitted = false">
              Gửi lời nhắn khác
            </button>
          </div>

          <form v-else class="max-w-[640px] mx-auto space-y-5" @submit.prevent="handleSubmit">
            <div>
              <label for="contact-name" class="block text-sm font-semibold text-text-primary mb-1.5">Họ và tên</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                required
                placeholder="Nguyễn Văn A"
                class="w-full py-3.5 px-5 rounded-pill border border-brand-primary/25 bg-white text-text-primary text-base outline-none transition-colors duration-300 focus:border-brand-primary placeholder:text-text-light"
              />
            </div>
            <div>
              <label for="contact-email" class="block text-sm font-semibold text-text-primary mb-1.5">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                required
                placeholder="ban@email.com"
                class="w-full py-3.5 px-5 rounded-pill border border-brand-primary/25 bg-white text-text-primary text-base outline-none transition-colors duration-300 focus:border-brand-primary placeholder:text-text-light"
              />
            </div>
            <div>
              <label for="contact-message" class="block text-sm font-semibold text-text-primary mb-1.5">Nội dung</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                required
                rows="5"
                placeholder="Nội dung bạn muốn gửi..."
                class="w-full py-3.5 px-5 rounded-2xl border border-brand-primary/25 bg-white text-text-primary text-base outline-none transition-colors duration-300 focus:border-brand-primary placeholder:text-text-light resize-y"
              />
            </div>

            <div v-if="errorMessage" class="flex items-center gap-2 text-semantic-error text-sm">
              <Icon name="mdi:alert-circle-outline" class="text-lg shrink-0" />
              {{ errorMessage }}
            </div>

            <div class="text-center pt-2">
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                <Icon v-if="isSubmitting" name="mdi:loading" class="animate-spin" />
                <Icon v-else name="mdi:send" />
                {{ isSubmitting ? 'Đang gửi...' : 'Gửi liên hệ' }}
              </button>
            </div>
          </form>
        </Transition>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
