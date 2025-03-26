<template>
  <h1>Todo Application</h1>
  <v-container>
    <form @submit.prevent="addTodo">
      <v-text-field
        v-model="newTodo"
        type="text"
        placeholder="Add new todo"
        variant="outlined"
      />
      <button type="submit">
        Add
      </button>
    </form>
  </v-container>
  <ul>
    <li v-for="todo in todos" :key="todo.id" class="todo-item">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useTodoStore } from '../stores/todo'

  const todoStore = useTodoStore()

  const todos = ref(todoStore.getTodos)
  const newTodo = ref('')

  const addTodo = () => {
    if (newTodo.value.trim() !== '') {
      todoStore.addTodo(newTodo.value)
      newTodo.value = ''
    }
  }
</script>

<style></style>
