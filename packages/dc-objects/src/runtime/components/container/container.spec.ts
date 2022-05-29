import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OContainer from './container.vue'

it('render component', () => {
  // generate
  const cmp = mount(OContainer)

  // default class
  expect(cmp.element.classList).toContain('o-container')
})
