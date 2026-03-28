// https://nuxt.com/docs/api/configuration/nuxt-config
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
        { name: 'description', content: 'Chánh Đạo là nền tảng học Phật học mở giúp người Việt tìm pháp lộ, học pháp quyển miễn phí và tra cứu giáo lý với trợ lực AI.' },
        { name: 'theme-color', content: '#D4AF37' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:site_name', content: 'Chánh Đạo' },
        { property: 'og:locale', content: 'vi_VN' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Chánh Đạo | Số hóa kinh điển | Mở đường tuệ giác.' },
        { property: 'og:description', content: 'Tìm pháp lộ, học pháp quyển miễn phí và khám phá nội dung Phật học rõ ràng hơn với trợ lực AI trên Chánh Đạo.' },
        { property: 'og:image', content: 'https://chanhdao.vn/og-image.png' },
        { property: 'og:url', content: 'https://chanhdao.vn' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Chánh Đạo | Số hóa kinh điển | Mở đường tuệ giác.' },
        { name: 'twitter:description', content: 'Nền tảng học Phật học mở cho người Việt với pháp lộ, pháp quyển miễn phí và trợ lực AI để tra cứu giáo lý.' },
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
    exclude: ['/auth/**', '/search'],
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
        userAgent: ['*'],
        allow: ['/'],
        disallow: ['/auth/', '/search', '/api/'],
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
  },

  // Security headers for iframe embedding
  routeRules: {
    '/phap-quyen/**': {
      isr: 3600,
      headers: {
        'Content-Security-Policy': "frame-src 'self' https://www.youtube.com https://open.spotify.com https://cdn.jsdelivr.net;",
        'Permissions-Policy': 'fullscreen=(self "https://www.youtube.com" "https://open.spotify.com")',
      },
    },
    '/': { prerender: true },
    '/about': { redirect: '/gioi-thieu' },
    '/gioi-thieu': { prerender: true },
    '/lien-he': { prerender: true },
  },
})
