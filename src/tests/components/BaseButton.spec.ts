// @vitest-environment happy-dom

import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '../../components/buttons/BaseButton.vue'
import { baseButtonClassVariants } from '../../components/buttons/constant'

const buttonClasses = 'btn p-3'

it.only.each(
  Object.keys(baseButtonClassVariants).map((key) => ({
    type: key as keyof typeof baseButtonClassVariants,
    classes: [
      ...baseButtonClassVariants[key as keyof typeof baseButtonClassVariants],
      ...buttonClasses.split(' '),
    ],
  }))
)(
  'expect base button to render variant $type correctly',
  ({ type, classes }) => {
    const wrapper = mount(BaseButton, {
      props: {
        type,
      },
      slots: {
        default: 'Button',
      },
    })

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        ...buttonClasses.split(' '),
        ...(Array.isArray(classes) ? classes : [classes]),
      ])
    )
  }
)
