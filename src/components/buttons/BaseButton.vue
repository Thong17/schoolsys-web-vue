<template>
  <button :class="classes">
    {{ type }}
    <slot />
  </button>
</template>

<!-- convert code below to vue composition api -->
<script setup lang="ts">
  import { computed, defineProps } from 'vue'
  import { baseButtonClassVariants } from './constant'

  const props = defineProps({
    type: {
      type: String,
      validator: (value: 'PRIMARY' | 'SECONDARY' | 'DANGER') =>
        ['PRIMARY', 'SECONDARY', 'DANGER'].includes(value),
      default: 'PRIMARY',
    },
  })

  const classes = computed(() => [
    'btn p-3',
    ...baseButtonClassVariants[
      props.type as keyof typeof baseButtonClassVariants
    ],
  ])
</script>

<script lang="ts">
  export default {}
</script>

<style></style>
