import { defineSitemapEventHandler, asSitemapUrl } from '#imports'
import allCourses from '~/data/courses'

/**
 * Provides dynamic course and lesson URLs to the sitemap module.
 *
 * Automatically discovers all courses, modules, and lessons from the
 * course data so new content appears in /sitemap.xml without manual edits.
 */
export default defineSitemapEventHandler(() => {
  const urls = []

  // Static pages
  const staticPages = [
    { loc: '/', changefreq: 'weekly' as const, priority: 1.0 },
    { loc: '/gioi-thieu', changefreq: 'monthly' as const, priority: 0.7 },
    { loc: '/lien-he', changefreq: 'yearly' as const, priority: 0.5 },
    { loc: '/phap-quyen', changefreq: 'weekly' as const, priority: 0.9 },
    { loc: '/phap-lo', changefreq: 'weekly' as const, priority: 0.8 },
    { loc: '/thien-thu', changefreq: 'weekly' as const, priority: 0.7 },
  ]

  for (const page of staticPages) {
    urls.push(asSitemapUrl(page))
  }

  // Course listing page + individual course pages + all lesson pages
  for (const course of allCourses) {
    urls.push(
      asSitemapUrl({
        loc: `/phap-quyen/${course.slug}`,
        lastmod: course.updatedAt || course.createdAt,
        changefreq: 'weekly',
        priority: 0.8,
      }),
    )

    for (const module of course.modules) {
      for (const lesson of module.lessons) {
        urls.push(
          asSitemapUrl({
            loc: `/phap-quyen/${course.slug}/bai-hoc/${lesson.slug}`,
            lastmod: course.updatedAt || course.createdAt,
            changefreq: 'monthly',
            priority: 0.6,
          }),
        )
      }
    }
  }

  return urls
})
