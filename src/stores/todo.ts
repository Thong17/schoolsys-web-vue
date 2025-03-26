import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([{ id: 1, text: 'Buy milk', done: false }])
  const getTodos = computed(() => todos.value)
  const getOneTodo = (id: number) => todos.value.find((todo) => todo.id === id)

  const addTodo = (text: string) => {
    todos.value.push({
      id: todos.value.length + 1,
      text,
      done: false,
    })
  }

  return {
    getTodos,
    getOneTodo,
    addTodo,
    todos,
  }
})
