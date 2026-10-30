export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://90ssouthkitchen.com',
      gtmId: process.env.NUXT_PUBLIC_GTM_ID || '',
      gaMeasurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || '',
      gscVerification: process.env.NUXT_PUBLIC_GSC_VERIFICATION || '',
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://90ssouthkitchen.com',
    name: "90's South Kitchen",
    description: "A nostalgic South Indian restaurant serving vegetarian and non-vegetarian favourites at Dining District, Patancheru, Hyderabad.",
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en-IN' },
      meta: [
        { name: 'theme-color', content: '#a73515' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://images.unsplash.com' },
        { rel: 'icon', type: 'image/svg+xml', href: '/images/90s-south-kitchen-icon.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap' },
      ],
    },
  },
  sitemap: {
    autoLastmod: true,
    urls: ['/about', '/menu', '/contact', '/request-a-quote'],
  },
  robots: { groups: [{ userAgent: '*', allow: '/' }] },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: "90's South Kitchen",
      url: process.env.NUXT_PUBLIC_SITE_URL || 'https://90ssouthkitchen.com',
      logo: '/images/90s-south-kitchen-logo.svg',
    },
  },
})
