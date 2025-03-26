<template>
  <v-app>
    <header style="background-color: #444; width: 100%">
      <div>
        <h1>{{ title }}</h1>
        <p>{{ user }}</p>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </v-app>
</template>
<!-- TODO: learn pinia -->

<script>
  import { useAuthStore } from '@/stores/auth'
  import { ref } from 'vue'

  export default {
    name: 'MainLayout',
    props: {
      title: {
        type: String,
        default: 'Main Layout',
      },
    },
    setup() {
      const authStore = useAuthStore()
      const user = ref(authStore.user?.name)

      return { user }
    },
  }
</script>
<!-- BUG: fix script -->

<style></style>
