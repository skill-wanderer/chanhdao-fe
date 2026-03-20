type SubmissionType = 'contact'

interface SubmissionResponse {
  id: string
  type: SubmissionType
  content: Record<string, unknown>
  createdAt: string
}

export function useSubmissions() {
  const config = useRuntimeConfig()
  const apiBaseUrl = (config.public.apiBaseUrl as string).replace(/\/+$/, '')

  async function submitContact(payload: {
    name: string
    email: string
    message: string
  }): Promise<SubmissionResponse> {
    return $fetch<SubmissionResponse>(`${apiBaseUrl}/api/submissions`, {
      method: 'POST',
      body: {
        type: 'contact' as SubmissionType,
        content: payload,
      },
    })
  }

  return { submitContact }
}
