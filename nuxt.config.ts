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
      title: 'Chanh Dao — Nen tang hoc tap mo',
      htmlAttrs: { lang: 'vi' },
      meta: [
        { name: 'description', content: 'Nen tang hoc tap mo va mien phi. Kham pha khoa hoc, theo doi tien do, va nang cao ky nang.' },
        { name: 'theme-color', content: '#D4AF37' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Chanh Dao — Nen tang hoc tap mo' },
        { property: 'og:description', content: 'Kham pha khoa hoc, theo doi tien do, va hoc tap mien phi cho moi nguoi.' },
        { property: 'og:image', content: '/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Chanh Dao — Nen tang hoc tap mo' },
        { name: 'twitter:description', content: 'Kham pha khoa hoc, theo doi tien do, va hoc tap mien phi cho moi nguoi.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  site: {
    url: 'https://chanhdao.vn',
    name: 'Chanh Dao',
  },

  sitemap: {
    sources: ['/__sitemap__/urls'],
    exclude: ['/auth/**', '/search'],
  },

  robots: {
    allow: '/',
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Chanh Dao',
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
        apiUrl: process.env.NUXT_PUBLIC_ANLACVIEN_API_URL || 'http://localhost:8000',
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
        'Content-Security-Policy': "frame-src 'self' https://www.youtube-nocookie.com https://open.spotify.com https://cdn.jsdelivr.net;",
        'Permissions-Policy': 'fullscreen=(self "https://www.youtube-nocookie.com" "https://open.spotify.com")',
      },
    },
    '/': { prerender: true },
    '/about': { redirect: '/gioi-thieu' },
    '/gioi-thieu': { prerender: true },
    '/lien-he': { prerender: true },
  },
})
