<script setup lang="ts">
useSeo({
  title: 'Góp ý cải thiện Chánh Đạo | Chia sẻ phản hồi về nền tảng',
  description: 'Gửi góp ý về nội dung, trải nghiệm học, trợ lý AI và các điểm cần cải thiện trên nền tảng Chánh Đạo.',
  url: '/feedback',
  pageType: 'ContactPage',
  keywords: [
    'góp ý Chánh Đạo',
    'feedback Chánh Đạo',
    'cải thiện nền tảng học Phật',
    'phản hồi người học',
  ],
  about: [
    'góp ý nền tảng',
    'phản hồi người học',
    'cải thiện nội dung Phật học',
    'trải nghiệm học Phật online',
  ],
  audience: 'Người học và cộng đồng sử dụng Chánh Đạo',
})

const { submitFeedback } = useSubmissions()

const feedbackTopics = [
  { value: 'content', label: 'Nội dung bài học', icon: 'mdi:book-open-page-variant-outline' },
  { value: 'learning-experience', label: 'Trải nghiệm học', icon: 'mdi:school-outline' },
  { value: 'ai-assistant', label: 'Trợ lý AI', icon: 'mdi:robot-outline' },
  { value: 'navigation', label: 'Tìm kiếm, điều hướng', icon: 'mdi:compass-outline' },
  { value: 'bug', label: 'Lỗi kỹ thuật', icon: 'mdi:bug-outline' },
  { value: 'idea', label: 'Ý tưởng mới', icon: 'mdi:lightbulb-on-outline' },
]

const ratingOptions = [
  { value: 1, label: 'Khó dùng', icon: 'mdi:emoticon-sad-outline' },
  { value: 2, label: 'Cần cải thiện', icon: 'mdi:emoticon-confused-outline' },
  { value: 3, label: 'Tạm ổn', icon: 'mdi:emoticon-neutral-outline' },
  { value: 4, label: 'Hữu ích', icon: 'mdi:emoticon-happy-outline' },
  { value: 5, label: 'Rất tốt', icon: 'mdi:emoticon-excited-outline' },
]

const roleOptions = [
  'Người mới học Phật',
  'Đang học theo pháp quyển',
  'Nghiên cứu / giảng dạy',
  'Cộng tác viên',
  'Khác',
]

const form = reactive({
  name: '',
  email: '',
  role: '',
  rating: 0,
  topics: [] as string[],
  message: '',
  improvement: '',
  allowContact: false,
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

function toggleTopic(topic: string) {
  if (form.topics.includes(topic)) {
    form.topics = form.topics.filter(item => item !== topic)
    return
  }

  form.topics.push(topic)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.role = ''
  form.rating = 0
  form.topics = []
  form.message = ''
  form.improvement = ''
  form.allowContact = false
}

async function handleSubmit() {
  errorMessage.value = ''

  const email = form.email.trim()
  const message = form.message.trim()
  const improvement = form.improvement.trim()

  if (!form.rating) {
    errorMessage.value = 'Vui lòng chọn mức đánh giá tổng quan.'
    return
  }

  if (email && !isValidEmail(email)) {
    errorMessage.value = 'Email chưa đúng định dạng.'
    return
  }

  if (form.allowContact && !email) {
    errorMessage.value = 'Vui lòng nhập email nếu bạn đồng ý để chúng tôi liên hệ lại.'
    return
  }

  isSubmitting.value = true

  try {
    await submitFeedback({
      name: form.name.trim() || undefined,
      email: email || undefined,
      role: form.role || undefined,
      rating: form.rating,
      topics: [...form.topics],
      message,
      improvement: improvement || undefined,
      allowContact: form.allowContact,
      source: 'feedback-page',
    })

    isSubmitted.value = true
    resetForm()
  } catch {
    errorMessage.value = 'Gửi góp ý không thành công. Vui lòng thử lại sau.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <TheHero
      title="Góp ý cải thiện Chánh Đạo"
      subtitle="Chúng tôi đang lắng nghe phản hồi"
      description="Mỗi góp ý giúp nền tảng học Phật miễn phí này rõ ràng, dễ học và hữu ích hơn cho cộng đồng."
    />

    <section class="section section-narrow pt-0">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div class="glass-card p-6">
          <Icon name="mdi:book-edit-outline" class="text-brand-primary text-3xl mb-4" />
          <h2 class="text-lg font-bold font-serif mb-2">Nội dung</h2>
          <p class="text-sm text-text-secondary leading-relaxed">Bài học, pháp quyển, slide, quiz và cách trình bày giáo lý.</p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:monitor-dashboard" class="text-brand-primary text-3xl mb-4" />
          <h2 class="text-lg font-bold font-serif mb-2">Trải nghiệm</h2>
          <p class="text-sm text-text-secondary leading-relaxed">Tốc độ, bố cục, tìm kiếm, điều hướng và khả năng học trên điện thoại.</p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:heart-outline" class="text-brand-primary text-3xl mb-4" />
          <h2 class="text-lg font-bold font-serif mb-2">Ưu tiên</h2>
          <p class="text-sm text-text-secondary leading-relaxed">Điều nên làm tiếp để Chánh Đạo phục vụ người học tốt hơn.</p>
        </div>
      </div>

      <div class="glass-card p-6 md:p-10" id="feedback-form">
        <Transition name="fade" mode="out-in">
          <div v-if="isSubmitted" class="flex flex-col items-center gap-4 py-10 text-center">
            <Icon name="mdi:check-circle" class="text-semantic-success text-6xl" />
            <h2 class="text-2xl md:text-3xl font-bold font-serif gradient-text">Đã nhận góp ý</h2>
            <p class="text-text-secondary max-w-[560px] leading-relaxed">
              Cảm ơn bạn đã dành thời gian phản hồi. Những góp ý này sẽ được dùng để ưu tiên cải thiện nội dung và trải nghiệm học.
            </p>
            <div class="flex gap-3 justify-center flex-wrap mt-3">
              <button type="button" class="btn btn-primary" @click="isSubmitted = false">
                <Icon name="mdi:plus" />
                Gửi góp ý khác
              </button>
              <NuxtLink to="/" class="btn btn-outline">
                <Icon name="mdi:home-outline" />
                Về trang chủ
              </NuxtLink>
            </div>
          </div>

          <form v-else class="space-y-8" @submit.prevent="handleSubmit">
            <div class="text-center max-w-[680px] mx-auto">
              <h2 class="text-2xl md:text-3xl font-bold font-serif gradient-text mb-3">Chia sẻ phản hồi của bạn</h2>
              <p class="text-text-secondary leading-relaxed">
                Góp ý ngắn hay dài đều hữu ích nếu chỉ ra điều đang tốt, điều gây khó khăn hoặc điều nên ưu tiên tiếp theo.
              </p>
            </div>

            <fieldset>
              <legend class="block text-sm font-semibold text-text-primary mb-3">Mức đánh giá tổng quan</legend>
              <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
                <button
                  v-for="rating in ratingOptions"
                  :key="rating.value"
                  type="button"
                  class="min-h-[92px] rounded-xl border px-3 py-4 text-center transition-all duration-200"
                  :class="form.rating === rating.value ? 'border-brand-primary bg-brand-primary/10 text-brand-accent shadow-brand' : 'border-brand-primary/20 bg-white text-text-secondary hover:border-brand-primary hover:text-brand-accent'"
                  :aria-pressed="form.rating === rating.value"
                  @click="form.rating = rating.value"
                >
                  <Icon :name="rating.icon" class="text-2xl mb-2 mx-auto" />
                  <span class="block font-bold text-lg">{{ rating.value }}</span>
                  <span class="block text-xs font-semibold leading-snug">{{ rating.label }}</span>
                </button>
              </div>
            </fieldset>

            <fieldset>
              <legend class="block text-sm font-semibold text-text-primary mb-3">Chủ đề góp ý</legend>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <button
                  v-for="topic in feedbackTopics"
                  :key="topic.value"
                  type="button"
                  class="min-h-[58px] rounded-xl border px-4 py-3 flex items-center gap-3 text-left transition-all duration-200"
                  :class="form.topics.includes(topic.value) ? 'border-brand-primary bg-brand-primary/10 text-brand-accent shadow-card' : 'border-brand-primary/20 bg-white text-text-secondary hover:border-brand-primary hover:text-brand-accent'"
                  :aria-pressed="form.topics.includes(topic.value)"
                  @click="toggleTopic(topic.value)"
                >
                  <Icon :name="topic.icon" class="text-xl shrink-0" />
                  <span class="font-semibold text-sm">{{ topic.label }}</span>
                </button>
              </div>
            </fieldset>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label for="feedback-name" class="block text-sm font-semibold text-text-primary mb-1.5">Họ tên</label>
                <input
                  id="feedback-name"
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  placeholder="Nguyễn Văn A"
                  class="w-full py-3.5 px-5 rounded-pill border border-brand-primary/25 bg-white text-text-primary text-base outline-none transition-colors duration-300 focus:border-brand-primary placeholder:text-text-light"
                />
              </div>

              <div>
                <label for="feedback-email" class="block text-sm font-semibold text-text-primary mb-1.5">Email</label>
                <input
                  id="feedback-email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  placeholder="ban@email.com"
                  class="w-full py-3.5 px-5 rounded-pill border border-brand-primary/25 bg-white text-text-primary text-base outline-none transition-colors duration-300 focus:border-brand-primary placeholder:text-text-light"
                />
              </div>
            </div>

            <div>
              <label for="feedback-role" class="block text-sm font-semibold text-text-primary mb-1.5">Bạn đang sử dụng Chánh Đạo với vai trò</label>
              <select
                id="feedback-role"
                v-model="form.role"
                class="w-full py-3.5 px-5 rounded-pill border border-brand-primary/25 bg-white text-text-primary text-base outline-none transition-colors duration-300 focus:border-brand-primary"
              >
                <option value="">Chọn vai trò phù hợp</option>
                <option v-for="role in roleOptions" :key="role" :value="role">
                  {{ role }}
                </option>
              </select>
            </div>

            <div>
              <label for="feedback-message" class="block text-sm font-semibold text-text-primary mb-1.5">Góp ý chính</label>
              <textarea
                id="feedback-message"
                v-model="form.message"
                required
                rows="6"
                placeholder="Điều gì đang hữu ích, điều gì gây khó khăn, hoặc lỗi bạn gặp phải..."
                class="w-full py-3.5 px-5 rounded-2xl border border-brand-primary/25 bg-white text-text-primary text-base outline-none transition-colors duration-300 focus:border-brand-primary placeholder:text-text-light resize-y"
              />
            </div>

            <div>
              <label for="feedback-improvement" class="block text-sm font-semibold text-text-primary mb-1.5">Điều nên ưu tiên cải thiện</label>
              <textarea
                id="feedback-improvement"
                v-model="form.improvement"
                rows="4"
                placeholder="Ví dụ: thêm quiz, sửa nội dung, cải thiện tìm kiếm, tối ưu giao diện mobile..."
                class="w-full py-3.5 px-5 rounded-2xl border border-brand-primary/25 bg-white text-text-primary text-base outline-none transition-colors duration-300 focus:border-brand-primary placeholder:text-text-light resize-y"
              />
            </div>

            <label class="flex items-start gap-3 text-sm text-text-secondary">
              <input
                v-model="form.allowContact"
                type="checkbox"
                class="mt-1 h-4 w-4 rounded border-brand-primary/30 text-brand-primary focus:ring-brand-primary"
              />
              <span>Chúng tôi có thể liên hệ lại qua email để hỏi thêm chi tiết về góp ý này.</span>
            </label>

            <div v-if="errorMessage" class="flex items-center gap-2 text-semantic-error text-sm">
              <Icon name="mdi:alert-circle-outline" class="text-lg shrink-0" />
              {{ errorMessage }}
            </div>

            <div class="flex justify-center pt-2">
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                <Icon v-if="isSubmitting" name="mdi:loading" class="animate-spin" />
                <Icon v-else name="mdi:send" />
                {{ isSubmitting ? 'Đang gửi...' : 'Gửi góp ý' }}
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
