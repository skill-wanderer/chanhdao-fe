type SubmissionType = 'contact' | 'feedback'

interface CreateSubmissionRequest {
  type: SubmissionType
  content: Record<string, unknown>
}

interface ContactPayload {
  name: string
  email: string
  message: string
}

interface FeedbackPayload {
  name?: string
  email?: string
  role?: string
  rating: number
  topics: string[]
  message: string
  improvement?: string
  allowContact: boolean
  source: string
}

interface SubmissionResponse {
  id: string
  type: SubmissionType
  content: Record<string, unknown>
  createdAt: string
}

function isUnsupportedFeedbackTypeError(error: unknown): boolean {
  const maybeError = error as {
    statusCode?: number
    status?: number
    data?: { statusCode?: number; message?: string | string[] }
    response?: { status?: number }
  }

  const statusCode = maybeError.data?.statusCode || maybeError.statusCode || maybeError.status || maybeError.response?.status
  const messages = Array.isArray(maybeError.data?.message)
    ? maybeError.data.message
    : [maybeError.data?.message || '']

  return statusCode === 400 && messages.some(message => (
    message.toLowerCase().includes('type')
    && message.toLowerCase().includes('contact')
  ))
}

export function useSubmissions() {
  const config = useRuntimeConfig()
  const apiBaseUrl = (config.public.apiBaseUrl as string).replace(/\/+$/, '')

  async function createSubmission(body: CreateSubmissionRequest): Promise<SubmissionResponse> {
    return $fetch<SubmissionResponse>(`${apiBaseUrl}/api/submissions`, {
      method: 'POST',
      body,
    })
  }

  async function fetchSubmissionsByType(
    type: SubmissionType,
    token: string,
  ): Promise<SubmissionResponse[]> {
    return $fetch<SubmissionResponse[]>(`${apiBaseUrl}/api/submissions/type/${type}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  async function submitContact(payload: ContactPayload): Promise<SubmissionResponse> {
    return createSubmission({
      type: 'contact',
      content: { ...payload },
    })
  }

  async function submitFeedback(payload: FeedbackPayload): Promise<SubmissionResponse> {
    try {
      return await createSubmission({
        type: 'feedback',
        content: { ...payload },
      })
    } catch (error) {
      if (!isUnsupportedFeedbackTypeError(error)) {
        throw error
      }

      return createSubmission({
        type: 'contact',
        content: {
          ...payload,
          kind: 'feedback',
          intendedType: 'feedback',
        },
      })
    }
  }

  return { submitContact, submitFeedback, fetchSubmissionsByType }
}
