import { expect, it } from 'vitest'
import BaseText from '@/components/texts/BaseText.vue'
import { mount } from '@vue/test-utils'

it('Base Text should render text Hello World', async () => {
  const wrapper = mount(BaseText, { slots: { default: 'Hello World' } })
  expect(wrapper.html()).toMatchSnapshot()
})
