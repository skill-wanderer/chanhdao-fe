<script setup lang="ts">
type SubmissionType = 'contact' | 'feedback'

interface SubmissionRecord {
  id: string
  type: SubmissionType | string
  content: Record<string, unknown>
  createdAt: string
}

const submissionTypes: Array<{ value: SubmissionType; label: string; icon: string }> = [
  { value: 'contact', label: 'Liên hệ', icon: 'mdi:email-outline' },
  { value: 'feedback', label: 'Góp ý', icon: 'mdi:message-text-outline' },
]

const fieldLabels: Record<string, string> = {
  allowContact: 'Cho phép liên hệ lại',
  email: 'Email',
  improvement: 'Ưu tiên cải thiện',
  intendedType: 'Loại dự kiến',
  kind: 'Loại nội dung',
  message: 'Nội dung',
  name: 'Họ tên',
  rating: 'Đánh giá',
  role: 'Vai trò',
  source: 'Nguồn',
  topics: 'Chủ đề',
}

useSeo({
  title: 'Quản trị phản hồi | Chánh Đạo',
  description: 'Trang quản trị phản hồi và liên hệ của Chánh Đạo.',
  url: '/admin/submissions',
  noIndex: true,
  pageType: 'WebPage',
})

const {
  isAuthEnabled,
  isAuthenticated,
  accessToken,
  loginUrl,
  refreshAccessToken,
  hasRole,
} = useKeycloak()
const { fetchSubmissionsByType } = useSubmissions()

const selectedType = ref<SubmissionType>('contact')
const submissions = ref<SubmissionRecord[]>([])
const isLoading = ref(false)
const errorMessage = ref('')
const copiedId = ref('')

const isAdmin = computed(() => hasRole('admin'))
const canViewAdmin = computed(() => isAuthenticated.value && isAdmin.value)
const selectedTypeLabel = computed(
  () => submissionTypes.find(type => type.value === selectedType.value)?.label || selectedType.value,
)

const dateFormatter = new Intl.DateTimeFormat('vi-VN', {
  dateStyle: 'medium',
  timeStyle: 'short',
})

function getStatusCode(error: unknown): number | undefined {
  const maybeError = error as {
    status?: number
    statusCode?: number
    data?: { statusCode?: number }
    response?: { status?: number }
  }

  return maybeError.data?.statusCode || maybeError.statusCode || maybeError.status || maybeError.response?.status
}

function getErrorText(error: unknown): string {
  const maybeError = error as {
    data?: { message?: string | string[] }
    message?: string
  }

  const message = maybeError.data?.message
  if (Array.isArray(message)) return message.join(' ')
  return message || maybeError.message || ''
}

function isUnauthorizedError(error: unknown): boolean {
  return getStatusCode(error) === 401
}

function isUnsupportedTypeError(error: unknown): boolean {
  return getStatusCode(error) === 400 && getErrorText(error).toLowerCase().includes('type')
}

function isFeedbackLikeSubmission(submission: SubmissionRecord): boolean {
  const content = submission.content || {}

  return (
    submission.type === 'feedback'
    || content.kind === 'feedback'
    || content.intendedType === 'feedback'
    || content.source === 'feedback-page'
  )
}

async function requestSubmissions(type: SubmissionType): Promise<SubmissionRecord[]> {
  if (!accessToken.value) {
    throw new Error('Missing access token')
  }

  try {
    return await fetchSubmissionsByType(type, accessToken.value)
  }
  catch (error) {
    if (isUnauthorizedError(error) && await refreshAccessToken() && accessToken.value) {
      return fetchSubmissionsByType(type, accessToken.value)
    }

    throw error
  }
}

async function loadSubmissions() {
  if (!canViewAdmin.value) return

  isLoading.value = true
  errorMessage.value = ''

  try {
    const data = await requestSubmissions(selectedType.value)

    submissions.value = selectedType.value === 'contact'
      ? data.filter(submission => !isFeedbackLikeSubmission(submission))
      : data
  }
  catch (error) {
    if (selectedType.value === 'feedback' && isUnsupportedTypeError(error)) {
      try {
        const contactSubmissions = await requestSubmissions('contact')
        submissions.value = contactSubmissions.filter(isFeedbackLikeSubmission)
        return
      }
      catch (fallbackError) {
        errorMessage.value = getReadableError(fallbackError)
        return
      }
    }

    errorMessage.value = getReadableError(error)
  }
  finally {
    isLoading.value = false
  }
}

function getReadableError(error: unknown): string {
  const statusCode = getStatusCode(error)

  if (statusCode === 401) {
    return 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.'
  }

  if (statusCode === 403) {
    return 'Tài khoản chưa có quyền admin để xem dữ liệu này.'
  }

  return 'Không thể tải dữ liệu. Vui lòng thử lại sau.'
}

function formatDate(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return dateFormatter.format(date)
}

function formatKey(key: string): string {
  return fieldLabels[key] || key
}

function formatValue(value: unknown): string {
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'boolean') return value ? 'Có' : 'Không'
  if (value && typeof value === 'object') return JSON.stringify(value, null, 2)
  return String(value ?? '')
}

function contentEntries(content: Record<string, unknown>) {
  return Object.entries(content || {}).filter(([, value]) => value !== undefined && value !== null && value !== '')
}

async function copySubmission(submission: SubmissionRecord) {
  if (!import.meta.client || !navigator.clipboard) return

  await navigator.clipboard.writeText(JSON.stringify(submission, null, 2))
  copiedId.value = submission.id
  window.setTimeout(() => {
    if (copiedId.value === submission.id) {
      copiedId.value = ''
    }
  }, 1600)
}

watch(selectedType, () => {
  loadSubmissions()
})

watch(
  () => [canViewAdmin.value, accessToken.value],
  () => {
    if (canViewAdmin.value) {
      loadSubmissions()
    }
  },
)

onMounted(() => {
  loadSubmissions()
})
</script>

<template>
  <div class="pt-[128px] md:pt-[148px]">
    <section class="section pt-0">
      <div class="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-accent">Admin</p>
          <h1 class="text-3xl font-bold md:text-4xl">Quản trị phản hồi</h1>
          <p class="mt-2 max-w-[720px] text-sm text-text-secondary md:text-base">
            Xem nội dung liên hệ và góp ý đã gửi về hệ thống.
          </p>
        </div>

        <button
          v-if="canViewAdmin"
          type="button"
          class="btn btn-outline btn-sm self-start md:self-auto"
          :disabled="isLoading"
          @click="loadSubmissions"
        >
          <Icon :name="isLoading ? 'mdi:loading' : 'mdi:refresh'" :class="{ 'animate-spin': isLoading }" />
          Tải lại
        </button>
      </div>

      <div v-if="!isAuthEnabled" class="admin-panel glass-card p-6 md:p-8">
        <div class="flex items-start gap-4">
          <Icon name="mdi:shield-alert-outline" class="mt-1 shrink-0 text-2xl text-semantic-failure" />
          <div>
            <h2 class="text-xl font-bold">Chưa cấu hình đăng nhập</h2>
            <p class="mt-1 text-text-secondary">
              Cần cấu hình Keycloak public env để sử dụng trang admin.
            </p>
          </div>
        </div>
      </div>

      <div v-else-if="!isAuthenticated" class="admin-panel glass-card p-6 md:p-8">
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-xl font-bold">Cần đăng nhập</h2>
            <p class="mt-1 text-text-secondary">Đăng nhập bằng tài khoản admin để xem dữ liệu.</p>
          </div>
          <a :href="loginUrl('/admin/submissions')" class="btn btn-primary self-start md:self-auto">
            <Icon name="mdi:login" />
            Đăng nhập
          </a>
        </div>
      </div>

      <div v-else-if="!isAdmin" class="admin-panel glass-card p-6 md:p-8">
        <div class="flex items-start gap-4">
          <Icon name="mdi:lock-outline" class="mt-1 shrink-0 text-2xl text-semantic-failure" />
          <div>
            <h2 class="text-xl font-bold">Không có quyền truy cập</h2>
            <p class="mt-1 text-text-secondary">Token hiện tại không có role <strong>admin</strong>.</p>
          </div>
        </div>
      </div>

      <div v-else class="space-y-5">
        <div class="admin-panel glass-card p-4 md:p-5">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="type in submissionTypes"
                :key="type.value"
                type="button"
                class="inline-flex items-center gap-2 rounded-pill border px-4 py-2 text-sm font-semibold transition-colors"
                :class="selectedType === type.value ? 'border-brand-primary bg-brand-primary/10 text-brand-accent' : 'border-brand-primary/20 bg-white text-text-secondary hover:border-brand-primary hover:text-brand-accent'"
                :aria-pressed="selectedType === type.value"
                @click="selectedType = type.value"
              >
                <Icon :name="type.icon" />
                {{ type.label }}
              </button>
            </div>

            <div class="text-sm text-text-secondary">
              <strong class="text-text-primary">{{ submissions.length }}</strong>
              mục {{ selectedTypeLabel.toLowerCase() }}
            </div>
          </div>
        </div>

        <div v-if="errorMessage" class="admin-panel glass-card border-semantic-failure/30 p-4 text-semantic-failure">
          <div class="flex items-center gap-2">
            <Icon name="mdi:alert-circle-outline" class="text-xl" />
            <span class="text-sm font-semibold">{{ errorMessage }}</span>
          </div>
        </div>

        <div v-if="isLoading" class="admin-panel glass-card p-8 text-center text-text-secondary">
          <Icon name="mdi:loading" class="mx-auto mb-3 text-3xl text-brand-primary animate-spin" />
          Đang tải dữ liệu...
        </div>

        <div v-else-if="!submissions.length && !errorMessage" class="admin-panel glass-card p-8 text-center text-text-secondary">
          Chưa có dữ liệu {{ selectedTypeLabel.toLowerCase() }}.
        </div>

        <div v-else class="space-y-4">
          <article
            v-for="submission in submissions"
            :key="submission.id"
            class="submission-card glass-card overflow-hidden"
          >
            <header class="flex flex-col gap-3 border-b border-brand-primary/10 px-5 py-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="badge badge-free">{{ submission.type }}</span>
                  <span v-if="isFeedbackLikeSubmission(submission)" class="badge badge-intermediate">feedback</span>
                </div>
                <p class="mt-2 text-xs text-text-muted">{{ submission.id }}</p>
              </div>

              <div class="flex items-center gap-3 text-sm text-text-secondary">
                <span>{{ formatDate(submission.createdAt) }}</span>
                <button
                  type="button"
                  class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/20 text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-accent"
                  :aria-label="`Copy JSON ${submission.id}`"
                  @click="copySubmission(submission)"
                >
                  <Icon :name="copiedId === submission.id ? 'mdi:check' : 'mdi:content-copy'" />
                </button>
              </div>
            </header>

            <dl class="divide-y divide-brand-primary/10">
              <div
                v-for="[key, value] in contentEntries(submission.content)"
                :key="`${submission.id}-${key}`"
                class="grid gap-1 px-5 py-3 md:grid-cols-[180px_1fr] md:gap-4"
              >
                <dt class="text-sm font-semibold text-text-muted">{{ formatKey(key) }}</dt>
                <dd class="whitespace-pre-wrap break-words text-sm text-text-primary md:text-base">
                  {{ formatValue(value) }}
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.admin-panel:hover,
.submission-card:hover {
  transform: none;
}
</style>
