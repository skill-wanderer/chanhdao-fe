import type { Course } from '~/types/course'

/**
 * Course catalogue registry.
 *
 * Each course lives in its own folder for maintainability.
 * Import the course and add it to the array below.
 *
 * Structure:
 *   courses/<course-slug>/
 *     index.ts          — course metadata + module imports
 *     <module-slug>/
 *       index.ts        — module metadata + lesson imports
 *       <lesson-slug>.ts — individual lesson data
 */
import phatHocPhoThongQuyen1 from './phat-hoc-pho-thong-quyen-1'

const allCourses: Course[] = [
  phatHocPhoThongQuyen1,
]

export default allCourses
