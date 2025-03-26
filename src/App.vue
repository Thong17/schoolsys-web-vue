<script setup lang="ts">
  import MainLayout from '@/components/MainLayout.vue'
  import { RouterView } from 'vue-router'
</script>
<template>
  <MainLayout title="Layout Title">
    <RouterView />
  </MainLayout>
</template>

<style scoped></style>
