<script setup lang="ts">
import { site } from '~/data/site'

useHead({
  titleTemplate: (title) => (title ? `${title} | ${site.name}` : site.name),
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: site.name,
        description: site.shortDescription,
        servesCuisine: ['South Indian', 'Andhra', 'Vegetarian', 'Non-vegetarian'],
        telephone: '+91 86394 08555',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Dining District, Patancheru Industrial Area',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '502319',
          addressCountry: 'IN',
        },
      }),
    },
  ],
})
</script>

<template>
  <a href="#main" class="skip-link">Skip to main content</a>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <NuxtPage />
  </main>
  <SiteFooter />
</template>
