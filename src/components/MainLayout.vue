<template>
  <v-app>
    <v-toolbar app class="px-10">
      <v-btn icon @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <header>
        <h1>{{ title }}</h1>
        <p>{{ user }}</p>
      </header>
      <v-spacer />
      <v-btn flat variant="tonal" color="blue">
        Login
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app>
      <h1>Hello</h1>
    </v-navigation-drawer>
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
    data() {
      return {
        drawer: false,
      }
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer
      },
    },
  }
</script>
<!-- BUG: fix script -->

<style></style>
