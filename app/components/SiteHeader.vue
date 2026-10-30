<script setup>
const menuOpen = ref(false);
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  },
);
const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Contact Us", to: "/contact" },
];
</script>
<template>
  <header class="site-header">
    <div class="header-accent" aria-hidden="true"></div>
    <div class="container header-inner">
      <NuxtLink to="/" class="brand" aria-label="90's South Kitchen home">
        <img
          src="/images/90s-south-kitchen-logo.svg"
          alt="90's South Kitchen original logo"
          width="240"
          height="70"
          fetchpriority="high"
        />
      </NuxtLink>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ menuOpen ? "Close menu" : "Open menu" }}</span
        ><span></span><span></span><span></span>
      </button>
      <nav
        id="primary-navigation"
        class="main-nav"
        :class="{ 'is-open': menuOpen }"
        aria-label="Main navigation"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="{ active: route.path === link.to }"
          >{{ link.label }}</NuxtLink
        >
        <NuxtLink class="nav-cta" to="/request-a-quote"
          >Request a Quote</NuxtLink
        >
      </nav>
      <!-- <a class="header-phone" href="tel:+918639408555"
        >☎ <span>086394 08555</span></a
      > -->
    </div>
  </header>
</template>
