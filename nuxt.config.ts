/// <reference types="node" />

import { draftLessonRoutes, prerenderRoutes } from './build/prerender-routes'
import { customCoursePaths } from './app/utils/course-paths'

// https://nuxt.com/docs/api/configuration/nuxt-config
const googleCrawlerUserAgents = [
  'Googlebot',
  'Googlebot-Image',
  'GoogleOther',
  'Google-Extended',
]

const aiCrawlerUserAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'CCBot',
]

const phapQuyenHeaders = {
  'Content-Security-Policy': "frame-src 'self' https://www.youtube.com https://open.spotify.com https://cdn.jsdelivr.net;",
  'Permissions-Policy': 'fullscreen=(self "https://www.youtube.com" "https://open.spotify.com")',
}

// Courses with a custom path get the same headers as /phap-quyen, and their
// old /phap-quyen/<slug> URLs redirect permanently to the new path.
const customCourseRouteRules = Object.fromEntries(
  Object.entries(customCoursePaths).flatMap(([courseSlug, coursePath]) => [
    [coursePath, { headers: phapQuyenHeaders }],
    [`${coursePath}/**`, { headers: phapQuyenHeaders }],
    [`/phap-quyen/${courseSlug}`, { redirect: { to: coursePath, statusCode: 301 } }],
    [`/phap-quyen/${courseSlug}/**`, { redirect: { to: `${coursePath}/**`, statusCode: 301 } }],
  ]),
)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    'nuxt-schema-org',
  ],

  // SSR enabled for SEO
  ssr: true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Chánh Đạo | Số hóa kinh điển | Mở đường tuệ giác.',
      htmlAttrs: { lang: 'vi' },
      meta: [
        { name: 'description', content: 'Chánh Đạo là nền tảng học Phật học mở giúp người Việt tìm pháp lộ, học pháp tập miễn phí và tra cứu giáo lý với trợ lực AI.' },
        { name: 'theme-color', content: '#D4AF37' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:site_name', content: 'Chánh Đạo' },
        { property: 'og:locale', content: 'vi_VN' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Chánh Đạo | Số hóa kinh điển | Mở đường tuệ giác.' },
        { property: 'og:description', content: 'Tìm pháp lộ, học pháp tập miễn phí và khám phá nội dung Phật học rõ ràng hơn với trợ lực AI trên Chánh Đạo.' },
        { property: 'og:image', content: 'https://chanhdao.vn/og-image.png' },
        { property: 'og:url', content: 'https://chanhdao.vn' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Chánh Đạo | Số hóa kinh điển | Mở đường tuệ giác.' },
        { name: 'twitter:description', content: 'Nền tảng học Phật học mở cho người Việt với pháp lộ, pháp tập miễn phí và trợ lực AI để tra cứu giáo lý.' },
        { name: 'twitter:image', content: 'https://chanhdao.vn/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  site: {
    url: 'https://chanhdao.vn',
    name: 'Chánh Đạo',
  },

  sitemap: {
    sources: ['/__sitemap__/urls'],
    exclude: ['/auth/**', '/search', '/admin/**'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.5,
    },
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '20%' },
      { label: 'Priority', select: 'sitemap:priority', width: '15%' },
    ],
  },

  robots: {
    groups: [
      {
        userAgent: googleCrawlerUserAgents,
        allow: ['/'],
      },
      {
        userAgent: aiCrawlerUserAgents,
        allow: ['/'],
      },
      {
        userAgent: ['*'],
        allow: ['/'],
      },
    ],
    sitemap: ['https://chanhdao.vn/sitemap.xml'],
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Chánh Đạo',
      url: 'https://chanhdao.vn',
      logo: '/logo.png',
    },
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },

  image: {
    // Lesson/course artwork is hosted in the companion chanhdao-material repo.
    domains: ['raw.githubusercontent.com'],
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://chanhdao.vn',
      keycloakUrl: process.env.NUXT_PUBLIC_KEYCLOAK_URL || '',
      keycloakRealm: process.env.NUXT_PUBLIC_KEYCLOAK_REALM || '',
      keycloakClientId: process.env.NUXT_PUBLIC_KEYCLOAK_CLIENT_ID || '',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
      anLacVien: {
        apiUrl: process.env.NUXT_PUBLIC_ANLACVIEN_API_URL || '',
        domains: process.env.NUXT_PUBLIC_ANLACVIEN_DOMAINS || 'localhost',
        sessionExpiryMinutes: Number(process.env.NUXT_PUBLIC_ANLACVIEN_SESSION_EXPIRY_MINUTES) || 30,
        sessionStorage: process.env.NUXT_PUBLIC_ANLACVIEN_SESSION_STORAGE || 'browser',
      },
    },
  },

  nitro: {
    compressPublicAssets: true,
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: false,
      ignore: draftLessonRoutes,
      routes: prerenderRoutes,
    },
  },

  // Security headers for iframe embedding
  routeRules: {
    '/phap-quyen': { headers: phapQuyenHeaders },
    '/phap-quyen/**': { headers: phapQuyenHeaders },
    '/about': { redirect: '/gioi-thieu' },
    ...customCourseRouteRules,
  },

  hooks: {
    // Serve courses with a custom path on the same page components as /phap-quyen/:slug.
    'pages:extend'(pages) {
      const coursePage = pages.find(page => page.file?.endsWith('/phap-quyen/[slug]/index.vue'))
      const lessonPage = pages.find(page => page.file?.endsWith('/phap-quyen/[slug]/bai-hoc/[lessonSlug].vue'))
      if (!coursePage?.file || !lessonPage?.file) {
        throw new Error('Course page components not found for custom course paths')
      }

      for (const [courseSlug, coursePath] of Object.entries(customCoursePaths)) {
        pages.push(
          { name: `course-${courseSlug}`, path: coursePath, file: coursePage.file, meta: { courseSlug } },
          { name: `course-${courseSlug}-lesson`, path: `${coursePath}/bai-hoc/:lessonSlug`, file: lessonPage.file, meta: { courseSlug } },
        )
      }
    },
  },
})
