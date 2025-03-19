import { expect, it } from 'vitest'
import BaseText from '@/components/texts/BaseText.vue'
import { mount } from '@vue/test-utils'

it.each(['sm', 'md', 'lg'])(
  'Base Text should render text Hello World',
  async (size) => {
    const wrapper = mount(BaseText, {
      slots: { default: 'Hello World' },
      props: { size },
    })
    expect(wrapper.text()).toBe('Hello World')
    expect(wrapper.html()).toMatchSnapshot()
  }
)
