<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    intro?: string
    align?: 'center' | 'left'
  }>(),
  { eyebrow: '', intro: '', align: 'center' },
)
</script>

<template>
  <header :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p v-if="eyebrow" class="eyebrow mb-3" :class="{ 'eyebrow--left': align === 'left' }">
      {{ eyebrow }}
    </p>
    <h2 class="display-2">{{ title }}</h2>
    <p v-if="intro" class="lead mt-4">{{ intro }}</p>
  </header>
</template>
