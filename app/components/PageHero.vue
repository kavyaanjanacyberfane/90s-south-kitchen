<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  intro: string
}>()
</script>

<template>
  <section class="band-forest on-dark scallop-bottom" style="--scallop-color: var(--color-cream-50)">
    <div class="container-x py-14 text-center sm:py-20">
      <p class="eyebrow mb-4">{{ eyebrow }}</p>
      <h1 class="display-1 mx-auto max-w-3xl">{{ title }}</h1>
      <p class="lead mx-auto mt-5 max-w-2xl">{{ intro }}</p>
    </div>
  </section>
</template>
