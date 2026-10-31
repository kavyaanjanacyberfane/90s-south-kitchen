<script setup lang="ts">
/**
 * Displays the supplied logo files exactly as provided: no recolouring,
 * no re-typesetting, no stretching. "lockup" shows the horizontal badge +
 * wordmark from the cover artboard; "badge" shows the round emblem.
 */
withDefaults(defineProps<{ variant?: 'lockup' | 'badge' }>(), { variant: 'lockup' })
</script>

<template>
  <span class="brand-logo" :class="`brand-logo--${variant}`">
    <img
      v-if="variant === 'lockup'"
      src="/brand/90sk-lockup.png"
      alt="90's South Kitchen"
      width="1640"
      height="856"
      decoding="async"
    />
    <img
      v-else
      src="/brand/90sk-badge.png"
      alt="90's South Kitchen"
      width="1080"
      height="1080"
      decoding="async"
    />
  </span>
</template>
