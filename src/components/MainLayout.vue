<template>
  <header>{{ title }}</header>
  <main>
    <slot />
  </main>
</template>

<script>
  export default {
    name: 'MainLayout',
    props: {
      title: {
        type: String,
        default: 'Main Layout',
      },
    },
  }
</script>

<style></style>
