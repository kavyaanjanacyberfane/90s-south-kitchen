<script setup lang="ts">
import { navItems, quoteLink, site } from '~/data/site'

const year = new Date().getFullYear()
const links = [...navItems, quoteLink]
</script>

<template>
  <footer class="site-footer">
    <div class="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
      <div>
        <NuxtLink to="/" class="footer-logo" aria-label="90's South Kitchen, home page">
          <BrandLogo variant="lockup" />
        </NuxtLink>
        <p class="mt-5 max-w-sm text-[0.98rem]">
          South Indian vegetarian and non-vegetarian cooking, served with the warmth of a
          1990s family table.
        </p>
      </div>

      <nav aria-labelledby="footer-explore">
        <h2 id="footer-explore">Explore</h2>
        <ul class="footer-links">
          <li v-for="item in links" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div>
        <h2>Visit us</h2>
        <address class="not-italic">
          <span v-for="line in site.addressLines" :key="line" class="block">{{ line }}</span>
        </address>
        <ul class="footer-links mt-4">
          <li>
            Phone:
            <a :href="site.phoneHref" class="font-bold text-[var(--color-cream-50)]">{{ site.phoneDisplay }}</a>
          </li>
          <li>
            <a :href="site.mapsLink" target="_blank" rel="noopener noreferrer">
              Get directions<span class="sr-only-text"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a :href="site.diningDistrictUrl" target="_blank" rel="noopener noreferrer">
              Dining District website<span class="sr-only-text"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container-x flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ year }} {{ site.name }}. All rights reserved.</p>
        <p>Located at Dining District, Patancheru, Hyderabad.</p>
      </div>
    </div>
  </footer>
</template>
