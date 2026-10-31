<script setup lang="ts">
/**
 * Label + error wrapper. The input itself goes in the default slot and should
 * use the same `id`, plus :aria-describedby / :aria-invalid (see `describedBy`).
 */
const props = defineProps<{
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
}>()
</script>

<template>
  <div class="field">
    <label :for="props.id">
      {{ props.label }}
      <span v-if="props.required" class="req" aria-hidden="true">*</span>
      <span v-if="props.required" class="sr-only-text">(required)</span>
    </label>
    <slot />
    <p v-if="props.hint && !props.error" :id="`${props.id}-hint`" class="hint">{{ props.hint }}</p>
    <p v-if="props.error" :id="`${props.id}-error`" class="error-text">{{ props.error }}</p>
  </div>
</template>
