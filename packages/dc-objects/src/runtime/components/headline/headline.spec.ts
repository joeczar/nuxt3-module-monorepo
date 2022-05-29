/* eslint-disable-next-line */ // somehow eslint does not read the workspace devDependencies
import { shallowMount } from "@vue/test-utils";
import OHeadline from './headline.vue'

describe('headline object', () => {
  it('matches snapshop & default behaviour', () => {
    // generate
    const cmp = shallowMount(OHeadline, {
      propsData: {
        level: 3
      }
    })

    // match snapshot
    expect(cmp.element).toMatchSnapshot()
    // check class
    expect(cmp.element.classList.contains('o-headline')).toBe(true)
    // right element
    expect(cmp.element.tagName).toBe('H3')
  })
})
