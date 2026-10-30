<script setup lang="ts">
const config = useRuntimeConfig()
useHead(() => ({
  meta: config.public.gscVerification
    ? [{ name: 'google-site-verification', content: String(config.public.gscVerification) }]
    : [],
}))
</script>
<template>
  <NuxtLayout><NuxtPage /></NuxtLayout>
</template>
