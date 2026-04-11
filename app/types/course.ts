export type PublishStatus = 'published' | 'draft'

export interface Course {
  id: string
  slug: string
  title: string
  excerpt: string
  description: string
  thumbnail?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  status?: PublishStatus
  lessonCount: number
  modules: Module[]
  tags: string[]
  instructor?: string
  author?: AuthorInfo
  progress?: number
  createdAt: string
  updatedAt: string
}

export interface Module {
  id: string
  slug: string
  title: string
  order: number
  status?: PublishStatus
  lessons: Lesson[]
}

export interface QuizQuestion {
  question: string
  options: Record<string, string>
  answer: string
  explanation?: Record<string, string>
}

export type LearningMethodType = 'video' | 'audio' | 'slide' | 'reading'

export interface LearningMethod {
  type: LearningMethodType
  label: string
  icon: string
  videoUrl?: string
  audioEmbedUrl?: string
  slideUrl?: string
  readingContent?: string
  infographicUrl?: string
  tableOfContents?: { id: string; label: string; indent?: number }[]
}

export interface Lesson {
  id: string
  slug: string
  title: string
  type: 'video' | 'article'
  status?: PublishStatus
  content?: string
  videoUrl?: string
  completed?: boolean
  order: number
  durationMinutes?: number
  hideCompletion?: boolean
  createdAt?: string
  updatedAt?: string
  learningMethods?: LearningMethod[]
  quiz?: {
    title?: string
    passPercentage?: number
    questions: QuizQuestion[]
  }
}

export interface AuthorInfo {
  name: string
  title: string
  bio: string
  avatarUrl: string
  linkedinUrl: string
  websiteUrl: string
}

/**
 * Get a flat array of all lessons across all modules in the course.
 */
export function getAllLessons(course: Course): Lesson[] {
  return (course.modules ?? []).flatMap(m => m.lessons)
}

export function isPublishedCourse(course: Course): boolean {
  return course.status !== 'draft'
}

export function isPublishedLesson(lesson: Lesson): boolean {
  return lesson.status !== 'draft'
}

export interface LearningPath {
  id: string
  slug: string
  title: string
  description: string
  courses: Course[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

const ESTIMATED_STUDY_WORDS_PER_MINUTE = 90
const ESTIMATED_QUIZ_MINUTES_PER_QUESTION = 1
const ESTIMATED_SUPPLEMENTARY_METHOD_MINUTES = 3
const ESTIMATED_STANDALONE_VIDEO_MINUTES = 10
const MINIMUM_ESTIMATED_DURATION_MINUTES = 5

function decodeHtmlEntities(content: string): string {
  return content
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&#x27;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
}

function stripHtmlContent(content?: string): string {
  return decodeHtmlEntities(content || '')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function getReadingContent(lesson: Lesson): string {
  const readingMethod = lesson.learningMethods?.find(method => method.type === 'reading' && method.readingContent)
  return readingMethod?.readingContent || lesson.content || ''
}

export function getLessonDuration(lesson: Lesson): number {
  if (typeof lesson.durationMinutes === 'number' && lesson.durationMinutes > 0) {
    return lesson.durationMinutes
  }

  const readingText = stripHtmlContent(getReadingContent(lesson))
  const wordCount = readingText ? readingText.split(/\s+/).filter(Boolean).length : 0
  const readingMinutes = wordCount ? Math.ceil(wordCount / ESTIMATED_STUDY_WORDS_PER_MINUTE) : 0
  const quizMinutes = lesson.quiz?.questions?.length
    ? lesson.quiz.questions.length * ESTIMATED_QUIZ_MINUTES_PER_QUESTION
    : 0
  const supplementaryMinutes = (lesson.learningMethods ?? [])
    .filter(method => method.type !== 'reading')
    .length * ESTIMATED_SUPPLEMENTARY_METHOD_MINUTES
  const standaloneVideoMinutes = (!lesson.learningMethods?.length && lesson.videoUrl)
    ? ESTIMATED_STANDALONE_VIDEO_MINUTES
    : 0

  const estimatedDuration = readingMinutes + quizMinutes + supplementaryMinutes + standaloneVideoMinutes
  return estimatedDuration > 0 ? Math.max(estimatedDuration, MINIMUM_ESTIMATED_DURATION_MINUTES) : 0
}

export function getModuleDuration(module: Module): number {
  return (module.lessons ?? []).reduce((sum, lesson) => sum + getLessonDuration(lesson), 0)
}

export function getCourseDuration(course: Course): number {
  return getAllLessons(course).reduce((sum, lesson) => sum + getLessonDuration(lesson), 0)
}

export function normalizeCourseDurationMetadata(course: Course): Course {
  return {
    ...course,
    modules: (course.modules ?? []).map(module => ({
      ...module,
      lessons: (module.lessons ?? []).map(lesson => ({
        ...lesson,
        durationMinutes: getLessonDuration(lesson),
      })),
    })),
  }
}
