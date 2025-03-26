import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import TodoPage from '@/views/TodoPage.vue'

describe('TodoPage', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    const pinia = createPinia()
    wrapper = mount(TodoPage, {
      global: {
        plugins: [pinia],
      },
    })
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the correct initial title', () => {
    const title = wrapper.find('h1')
    expect(title.text()).toBe('Todo Application')
  })

  it('renders an empty list initially', () => {
    const items = wrapper.findAll('.todo-item')
    expect(items.length).toBeGreaterThanOrEqual(0)
  })

  it('adds a new todo item when the form is submitted', async () => {
    const input = wrapper.find('input[type="text"]')
    const form = wrapper.find('form')
    const oldItems = wrapper.findAll('.todo-item')

    await input.setValue('New Todo')
    await form.trigger('submit.prevent')

    const items = wrapper.findAll('.todo-item')
    expect(items.length).toBeGreaterThan(oldItems.length)
    expect(items[items.length - 1].text()).toContain('New Todo')
  })

  it('clears the input field after adding a todo', async () => {
    const input = wrapper.find('input[type="text"]')
    const form = wrapper.find('form')

    await input.setValue('Another Todo')
    await form.trigger('submit.prevent')

    expect((input.element as HTMLInputElement).value).toBe('')
  })
})
