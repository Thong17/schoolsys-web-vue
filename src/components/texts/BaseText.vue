<template>
  <p class="text-lg text-gray-700G" :style="{ fontSize: size, color }">
    <slot />
  </p>
</template>

<script lang="ts">
  export default {
    name: 'BaseText',
    props: {
      size: {
        type: String,
        validator: (value: 'md' | 'sm' | 'lg') =>
          ['md', 'sm', 'lg'].includes(value),
        default: 'md',
      },
      color: {
        type: String,
        default: 'gray',
      },
    },
  }
</script>

<style></style>
