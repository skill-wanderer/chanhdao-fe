import type { ComputedRef, Ref } from 'vue'

type SeoValue<T> = T | Ref<T> | ComputedRef<T> | (() => T)

interface SeoOptions {
  title: SeoValue<string>
  description: SeoValue<string>
  image?: SeoValue<string | undefined>
  url?: SeoValue<string | undefined>
  type?: SeoValue<string | undefined>
  pageType?: SeoValue<string | undefined>
  noIndex?: SeoValue<boolean | undefined>
  keywords?: SeoValue<string[] | undefined>
  about?: SeoValue<string[] | undefined>
  section?: SeoValue<string | undefined>
  audience?: SeoValue<string | undefined>
  datePublished?: SeoValue<string | undefined>
  dateModified?: SeoValue<string | undefined>
  breadcrumbs?: SeoValue<{ name: string; url?: string }[] | undefined>
  schemas?: SeoValue<Record<string, any>[] | undefined>
}

function resolveSeoValue<T>(value?: SeoValue<T>): T | undefined {
  if (typeof value === 'function') {
    return (value as () => T)()
  }

  return unref(value as T | Ref<T> | ComputedRef<T> | undefined)
}

function toAbsoluteUrl(value: string | undefined, siteUrl: string): string | undefined {
  if (!value) {
    return undefined
  }

  if (/^https?:\/\//i.test(value)) {
    return value
  }

  return `${siteUrl}${value.startsWith('/') ? value : `/${value}`}`
}

function buildKeywords(keywords: string[]): string[] {
  return Array.from(new Set(keywords.map(keyword => keyword.trim()).filter(Boolean)))
}

export function useSeo(options: SeoOptions) {
  const config = useRuntimeConfig()
  const siteUrl = ((config.public.siteUrl as string) || 'https://chanhdao.vn').replace(/\/+$/, '')
  const siteName = 'Chánh Đạo'

  useHead(() => {
    const title = resolveSeoValue(options.title) || siteName
    const description = resolveSeoValue(options.description) || ''
    const keywords = buildKeywords(resolveSeoValue(options.keywords) || [])
    const pageUrl = toAbsoluteUrl(resolveSeoValue(options.url), siteUrl)
    const imageUrl = toAbsoluteUrl(resolveSeoValue(options.image) || '/og-image.png', siteUrl)
    const ogType = resolveSeoValue(options.type) || 'website'
    const noIndex = !!resolveSeoValue(options.noIndex)
    const section = resolveSeoValue(options.section)
    const datePublished = resolveSeoValue(options.datePublished)
    const dateModified = resolveSeoValue(options.dateModified)
    const robots = noIndex
      ? 'noindex, nofollow, noarchive'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

    return {
      title,
      link: pageUrl
        ? [{ rel: 'canonical', href: pageUrl, key: 'canonical' }]
        : [],
      meta: [
        { name: 'description', content: description, key: 'description' },
        { name: 'keywords', content: keywords.join(', '), key: 'keywords' },
        { name: 'author', content: siteName, key: 'author' },
        { name: 'publisher', content: siteName, key: 'publisher' },
        { name: 'robots', content: robots, key: 'robots' },
        { name: 'googlebot', content: robots, key: 'googlebot' },
        { property: 'og:site_name', content: siteName, key: 'og:site_name' },
        { property: 'og:locale', content: 'vi_VN', key: 'og:locale' },
        { property: 'og:title', content: title, key: 'og:title' },
        { property: 'og:description', content: description, key: 'og:description' },
        { property: 'og:type', content: ogType, key: 'og:type' },
        { property: 'og:image', content: imageUrl, key: 'og:image' },
        { property: 'og:url', content: pageUrl, key: 'og:url' },
        { name: 'twitter:card', content: 'summary_large_image', key: 'twitter:card' },
        { name: 'twitter:title', content: title, key: 'twitter:title' },
        { name: 'twitter:description', content: description, key: 'twitter:description' },
        { name: 'twitter:image', content: imageUrl, key: 'twitter:image' },
        ...(section ? [{ property: 'article:section', content: section, key: 'article:section' }] : []),
        ...(keywords.length
          ? keywords.map(keyword => ({ property: 'article:tag', content: keyword }))
          : []),
        ...(datePublished ? [{ property: 'article:published_time', content: datePublished, key: 'article:published_time' }] : []),
        ...(dateModified ? [{ property: 'article:modified_time', content: dateModified, key: 'article:modified_time' }] : []),
      ],
    }
  })

  useSchemaOrg(computed(() => {
    const title = resolveSeoValue(options.title) || siteName
    const description = resolveSeoValue(options.description) || ''
    const imageUrl = toAbsoluteUrl(resolveSeoValue(options.image) || '/og-image.png', siteUrl)
    const pageUrl = toAbsoluteUrl(resolveSeoValue(options.url), siteUrl)
    const keywords = buildKeywords(resolveSeoValue(options.keywords) || [])
    const about = buildKeywords(resolveSeoValue(options.about) || keywords)
    const breadcrumbs = resolveSeoValue(options.breadcrumbs) || []
    const extraSchemas = resolveSeoValue(options.schemas) || []
    const pageType = resolveSeoValue(options.pageType) || 'WebPage'
    const audience = resolveSeoValue(options.audience)
    const datePublished = resolveSeoValue(options.datePublished)
    const dateModified = resolveSeoValue(options.dateModified)

    const schemas: Record<string, any>[] = [
      {
        '@type': pageType,
        name: title,
        headline: title,
        description,
        inLanguage: 'vi-VN',
        ...(pageUrl && { url: pageUrl, mainEntityOfPage: pageUrl }),
        ...(imageUrl && { image: imageUrl }),
        ...(keywords.length && { keywords: keywords.join(', ') }),
        ...(about.length && {
          about: about.map(topic => ({
            '@type': 'Thing',
            name: topic,
          })),
        }),
        ...(audience && {
          audience: {
            '@type': 'Audience',
            audienceType: audience,
          },
        }),
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
        isPartOf: {
          '@type': 'WebSite',
          name: siteName,
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          url: siteUrl,
        },
      },
    ]

    if (breadcrumbs.length) {
      schemas.push(
        defineBreadcrumb({
          itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            ...(item.url && { item: toAbsoluteUrl(item.url, siteUrl) }),
          })),
        }),
      )
    }

    schemas.push(...extraSchemas)

    return schemas
  }))
}

interface CourseSeoOptions {
  title: string
  description: string
  slug: string
  thumbnail?: string
  tags?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  datePublished?: string
  dateModified?: string
  author?: { name: string; url?: string }
}

const difficultyToLevel: Record<string, string> = {
  beginner: 'Co ban',
  intermediate: 'Trung cap',
  advanced: 'Nang cao',
}

export function useCourseSeo(course: CourseSeoOptions) {
  const config = useRuntimeConfig()
  const siteUrl = (config.public.siteUrl as string) || 'https://chanhdao.vn'

  useSeo({
    title: `${course.title} | Pháp quyển học Phật miễn phí | Chánh Đạo`,
    description: course.description,
    image: course.thumbnail || '/og-image.png',
    url: `${siteUrl}/phap-quyen/${course.slug}`,
    type: 'article',
    pageType: 'CollectionPage',
    section: 'Pháp quyển',
    audience: 'Người Việt học Phật giáo',
    keywords: [course.title, 'pháp quyển', 'học Phật online', 'Phật học miễn phí', ...(course.tags || [])],
    about: [course.title, 'Phật học', 'Giáo lý Phật giáo', ...(course.tags || [])],
    datePublished: course.datePublished,
    dateModified: course.dateModified,
    breadcrumbs: [
      { name: 'Trang chủ', url: siteUrl },
      { name: 'Pháp quyển', url: `${siteUrl}/phap-quyen` },
      { name: course.title },
    ],
  })

  useSchemaOrg([
    defineCourse({
      name: course.title,
      description: course.description,
      provider: {
        '@type': 'Organization',
        name: 'Chanh Dao',
        url: siteUrl,
      },
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'VND',
        availability: 'https://schema.org/InStock',
      },
      ...(course.tags?.length && { keywords: course.tags.join(', ') }),
      ...(course.difficulty && { educationalLevel: difficultyToLevel[course.difficulty] }),
      ...(course.datePublished && { datePublished: course.datePublished }),
      ...(course.dateModified && { dateModified: course.dateModified }),
      ...(course.author && {
        author: {
          '@type': 'Person',
          'name': course.author.name,
          ...(course.author.url && { url: course.author.url }),
        },
      }),
    }),
  ])
}

interface LessonSeoOptions {
  title: string
  courseTitle: string
  courseSlug: string
  lessonSlug: string
  description: string
  keywords?: string[]
  datePublished?: string
  dateModified?: string
  videoUrl?: string
  videoTitle?: string
  author?: { name: string; url?: string }
}

export function useLessonSeo(lesson: LessonSeoOptions) {
  const config = useRuntimeConfig()
  const siteUrl = (config.public.siteUrl as string) || 'https://chanhdao.vn'
  const lessonUrl = `${siteUrl}/phap-quyen/${lesson.courseSlug}/bai-hoc/${lesson.lessonSlug}`

  useSeo({
    title: `${lesson.title} | ${lesson.courseTitle} | Chánh Đạo`,
    description: lesson.description,
    url: lessonUrl,
    type: 'article',
    pageType: 'Article',
    section: lesson.courseTitle,
    audience: 'Người Việt học Phật giáo',
    keywords: [lesson.title, lesson.courseTitle, 'bài học Phật học', 'học Phật online', ...(lesson.keywords || [])],
    about: [lesson.title, lesson.courseTitle, ...(lesson.keywords || [])],
    datePublished: lesson.datePublished,
    dateModified: lesson.dateModified,
    breadcrumbs: [
      { name: 'Trang chủ', url: siteUrl },
      { name: 'Pháp quyển', url: `${siteUrl}/phap-quyen` },
      { name: lesson.courseTitle, url: `${siteUrl}/phap-quyen/${lesson.courseSlug}` },
      { name: lesson.title },
    ],
  })

  const schemas: Record<string, any>[] = [
    {
      '@type': ['Article', 'LearningResource'],
      headline: lesson.title,
      name: lesson.title,
      description: lesson.description,
      inLanguage: 'vi-VN',
      url: lessonUrl,
      isPartOf: {
        '@type': 'Course',
        name: lesson.courseTitle,
        url: `${siteUrl}/phap-quyen/${lesson.courseSlug}`,
      },
      ...(lesson.datePublished && { datePublished: lesson.datePublished }),
      ...(lesson.dateModified && { dateModified: lesson.dateModified }),
      ...(lesson.keywords?.length && { keywords: lesson.keywords.join(', ') }),
      ...(lesson.author && {
        author: {
          '@type': 'Person',
          name: lesson.author.name,
          ...(lesson.author.url && { url: lesson.author.url }),
        },
      }),
    },
  ]

  if (lesson.videoUrl) {
    const videoId = extractYouTubeId(lesson.videoUrl)
    if (videoId) {
      schemas.push({
        '@type': 'VideoObject',
        name: lesson.videoTitle || lesson.title,
        description: lesson.description,
        thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        uploadDate: lesson.datePublished || undefined,
        contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
      })
    }
  }

  if (schemas.length) {
    useSchemaOrg(schemas)
  }
}

/**
 * Extract YouTube video ID from various URL formats.
 */
function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match?.[1] ?? null
}
