import { defineSitemapEventHandler, asSitemapUrl } from '#imports'

/**
 * Provides dynamic course and lesson URLs to the sitemap module.
 *
 * When adding a new course, add its course URL and all lesson URLs here
 * so they appear in /sitemap.xml.
 */
export default defineSitemapEventHandler(() => {
  const courseSlug = 'phat-hoc-pho-thong-quyen-1'
  const lastmod = '2026-03-19'

  return [
    asSitemapUrl({
      loc: `/courses/${courseSlug}`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8,
    }),
  ]
})
