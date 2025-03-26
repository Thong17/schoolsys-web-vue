<template>
  <form v-if="!authStore?.user" @submit.prevent="login">
    <h2>Login Page</h2>
    <input v-model="username" type="text" placeholder="Username">
    <input v-model="password" type="password" placeholder="Password">
    <button>Login</button>
  </form>
  <button v-else @click="authStore.removeSession()">
    Logout
  </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { apiInstance } from '../configs/axios'
  import { useAuthStore } from '../stores/auth'

  const authStore = useAuthStore()

  const username = ref('')
  const password = ref('')
  const login = () => {
    apiInstance
      .post('auth/login', {
        username: username.value,
        password: password.value,
      })
      .then((res) => {
        const { accessToken, user, code } = res.data
        if (code !== 'SUCCESS') return
        authStore.setSession(accessToken, null, {
          id: user._id,
          name: user.username,
          email: user.email,
        })
      })
      .catch((err) => {
        alert(err?.response?.data?.message || 'Login failed')
        console.error(err)
      })
  }
</script>

<script lang="ts">
  export default {
    name: 'LoginPage',
  }
</script>

<style></style>
