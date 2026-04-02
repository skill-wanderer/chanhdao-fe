import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import allPaths from '../app/data/paths'

const coursesRoot = join(process.cwd(), 'app', 'data', 'courses')
const staticRoutes = [
  '/',
  '/auth/callback',
  '/gioi-thieu',
  '/lien-he',
  '/phap-lo',
  '/phap-quyen',
  '/robots.txt',
  '/search',
  '/sitemap.xml',
  '/thien-thu',
]

function isDraftLesson(filePath: string): boolean {
  return /status:\s*['"]draft['"]/.test(readFileSync(filePath, 'utf8'))
}

function getCourseLessonRoutes(): string[] {
  const routes: string[] = []

  const courseDirs = readdirSync(coursesRoot, { withFileTypes: true })
    .filter(entry => entry.isDirectory())

  for (const courseDir of courseDirs) {
    const courseSlug = courseDir.name
    routes.push(`/phap-quyen/${courseSlug}`)

    const moduleRoot = join(coursesRoot, courseSlug)
    const moduleDirs = readdirSync(moduleRoot, { withFileTypes: true })
      .filter(entry => entry.isDirectory())

    for (const moduleDir of moduleDirs) {
      const lessonRoot = join(moduleRoot, moduleDir.name)
      const lessonFiles = readdirSync(lessonRoot, { withFileTypes: true })
        .filter(entry => entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts')

      for (const lessonFile of lessonFiles) {
        const lessonFilePath = join(lessonRoot, lessonFile.name)
        if (isDraftLesson(lessonFilePath)) {
          continue
        }

        const lessonSlug = lessonFile.name.replace(/\.ts$/, '')
        routes.push(`/phap-quyen/${courseSlug}/bai-hoc/${lessonSlug}`)
      }
    }
  }

  return routes
}

export const prerenderRoutes = Array.from(new Set([
  ...staticRoutes,
  ...allPaths.map(path => `/phap-lo/${path.slug}`),
  ...getCourseLessonRoutes(),
]))