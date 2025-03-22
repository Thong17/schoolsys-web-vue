<script setup lang="ts">
  import BaseButton from '@/components/buttons/BaseButton.vue'
  import MainLayout from '@/components/MainLayout.vue'
  import { RouterView } from 'vue-router'
</script>
<template>
  <MainLayout title="Layout Title">
    <h1>Hello</h1>
    <BaseButton>Click me Update</BaseButton>
    <RouterView />
  </MainLayout>
</template>

<style scoped></style>
