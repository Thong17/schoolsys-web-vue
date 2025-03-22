<template>
  <form @submit.prevent="login">
    <h2>Login Page</h2>
    <input v-model="username" type="text" placeholder="Username">
    <input v-model="password" type="password" placeholder="Password">
    <button>Login</button>
  </form>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'

  const username = reactive({ value: '' })
  const password = reactive({ value: '' })
  const login = () => {
    console.log({ username, password })
  }
</script>

<script lang="ts">
  export default {
    name: 'LoginPage',
  }
</script>

<style></style>
