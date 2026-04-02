/// <reference types="node" />

import { type Dirent, readdirSync, readFileSync } from 'node:fs'
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

function getCourseLessonRouteGroups(): { publishedRoutes: string[]; draftRoutes: string[] } {
  const publishedRoutes: string[] = []
  const draftRoutes: string[] = []

  const courseDirs = readdirSync(coursesRoot, { withFileTypes: true })
    .filter((entry: Dirent) => entry.isDirectory())

  for (const courseDir of courseDirs) {
    const courseSlug = courseDir.name
    publishedRoutes.push(`/phap-quyen/${courseSlug}`)

    const moduleRoot = join(coursesRoot, courseSlug)
    const moduleDirs = readdirSync(moduleRoot, { withFileTypes: true })
      .filter((entry: Dirent) => entry.isDirectory())

    for (const moduleDir of moduleDirs) {
      const lessonRoot = join(moduleRoot, moduleDir.name)
      const lessonFiles = readdirSync(lessonRoot, { withFileTypes: true })
        .filter((entry: Dirent) => entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts')

      for (const lessonFile of lessonFiles) {
        const lessonFilePath = join(lessonRoot, lessonFile.name)
        const lessonSlug = lessonFile.name.replace(/\.ts$/, '')
        const lessonRoute = `/phap-quyen/${courseSlug}/bai-hoc/${lessonSlug}`

        if (isDraftLesson(lessonFilePath)) {
          draftRoutes.push(lessonRoute)
          continue
        }

        publishedRoutes.push(lessonRoute)
      }
    }
  }

  return { publishedRoutes, draftRoutes }
}

const lessonRouteGroups = getCourseLessonRouteGroups()

export const prerenderRoutes = Array.from(new Set([
  ...staticRoutes,
  ...allPaths.map(path => `/phap-lo/${path.slug}`),
  ...lessonRouteGroups.publishedRoutes,
]))

export const draftLessonRoutes = Array.from(new Set(lessonRouteGroups.draftRoutes))