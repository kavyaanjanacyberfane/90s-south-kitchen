import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Tailwind utilities first, then hand-written vintage styling.
  css: ['~/assets/css/main.css', '~/assets/css/vintage.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
  },

  // Optional: set NUXT_FORM_WEBHOOK_URL to forward form submissions
  // (Zapier, Make, Formspree, a Google Apps Script URL, etc.).
  runtimeConfig: {
    formWebhookUrl: '',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#014d2e' },
        { name: 'format-detection', content: 'telephone=yes' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/brand/90sk-badge.png' },
        { rel: 'apple-touch-icon', href: '/brand/90sk-badge.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Nunito+Sans:wght@400;600;700&display=swap',
        },
      ],
    },
  },

  nitro: {
    compressPublicAssets: true,
  },

  experimental: {
    // Keeps the CSS inlined for faster first paint on a small marketing site.
    inlineSSRStyles: true,
  },
})
