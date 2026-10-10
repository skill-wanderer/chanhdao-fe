/**
 * Courses served at their own top-level path instead of /phap-quyen/<slug>.
 * Lessons live under <path>/bai-hoc/<lessonSlug>, and the old /phap-quyen URLs
 * 301-redirect to the new ones (see routeRules in nuxt.config.ts).
 *
 * Kept free of `~` imports so nuxt.config.ts and build scripts can import it.
 */
export const customCoursePaths: Record<string, string> = {
  'phat-hoc-pho-thong-quyen-4': '/ban-do-tu-phat',
}

export function getCoursePath(courseSlug: string): string {
  return customCoursePaths[courseSlug] ?? `/phap-quyen/${courseSlug}`
}

export function getLessonPath(courseSlug: string, lessonSlug: string): string {
  return `${getCoursePath(courseSlug)}/bai-hoc/${lessonSlug}`
}
