<script setup lang="ts">
  import BaseButton from '@/components/buttons/BaseButton.vue'
  import MainLayout from '@/components/MainLayout.vue'
  import { RouterView } from 'vue-router'
  import { useAuthStore } from './stores/auth'

  const authStore = useAuthStore()
</script>
<template>
  <MainLayout title="Layout Title">
    <h1>Hello</h1>
    <BaseButton>Click me Update</BaseButton>
    <p>{{ authStore.user?.name }}</p>
    <RouterView />
  </MainLayout>
</template>

<style scoped></style>
