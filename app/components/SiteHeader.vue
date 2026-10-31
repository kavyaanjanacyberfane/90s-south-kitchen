<script setup lang="ts">
import { navItems, quoteLink, site } from '~/data/site'

const open = ref(false)
const route = useRoute()

// Close the menu after navigating.
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="site-header">
    <div class="container-x site-header__bar">
      <NuxtLink to="/" aria-label="90's South Kitchen, home page" class="shrink-0">
        <BrandLogo variant="lockup" />
      </NuxtLink>

      <nav class="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        
        <a :href="site.phoneHref" class="nav-link whitespace-nowrap" :aria-label="`Call us on ${site.phoneDisplay}`">
         ☎ {{ site.phoneDisplay }}
        </a>
        <NuxtLink :to="quoteLink.to" class="btn btn-primary">{{ quoteLink.label }}</NuxtLink>
      </div>

      <button
        type="button"
        class="burger"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <nav
      v-show="open"
      id="mobile-menu"
      class="mobile-panel lg:hidden"
      aria-label="Mobile navigation"
    >
      <div class="container-x">
        <NuxtLink
          v-for="item in [...navItems, quoteLink]"
          :key="item.to"
          :to="item.to"
          class="mobile-link"
        >
          {{ item.label }}
        </NuxtLink>
        <a :href="site.phoneHref" class="btn btn-primary mt-5 w-full">
          Call {{ site.phoneDisplay }}
        </a>
      </div>
    </nav>
  </header>
</template>
