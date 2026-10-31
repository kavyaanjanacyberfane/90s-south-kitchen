<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    /** CSS aspect-ratio, e.g. "4 / 3" */
    ratio?: string
    /** Set on the first image above the fold so it loads immediately. */
    priority?: boolean
  }>(),
  { ratio: '4 / 3', priority: false },
)

const failed = ref(false)
const img = ref<HTMLImageElement | null>(null)

// A server-rendered <img> can fail before Vue hydrates, so check once on mount.
onMounted(() => {
  const el = img.value
  if (el && el.complete && el.naturalWidth === 0) failed.value = true
})
</script>

<template>
  <figure class="food-image" :style="{ aspectRatio: props.ratio }">
    <img
      v-if="!failed"
      ref="img"
      :src="props.src"
      :alt="props.alt"
      :loading="props.priority ? 'eager' : 'lazy'"
      decoding="async"
      @error="failed = true"
    />
    <div v-else class="food-image__fallback" role="img" :aria-label="props.alt">
      <span>{{ props.alt }}</span>
    </div>
  </figure>
</template>
