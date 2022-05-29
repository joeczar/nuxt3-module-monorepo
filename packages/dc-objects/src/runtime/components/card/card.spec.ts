/* eslint-disable-next-line */ // somehow eslint does not read the workspace devDependencies
import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest'
import OCard from './card.vue'

describe('card', () => {
  it('snapshot matching', () => {
    // generate
    const cmp = shallowMount(OCard, { propsData: {} })
    expect(cmp.element.className).toBe(
      'o-card has-border as-shadow-soft as-default-padding'
    )
  })

  describe('shadow', () => {
    it('can change shadow', () => {
      // generate
      const cmp = shallowMount(OCard, { propsData: { shadow: 'hard' } })
      expect(cmp.element.classList.contains('as-shadow-hard')).toBe(true)
      expect(cmp.element.classList.contains('as-shadow-soft')).toBe(false)
    })

    it('can hide shadow', () => {
      // generate
      const cmp = shallowMount(OCard, { propsData: { shadow: false } })
      expect(cmp.element.classList.contains('as-shadow-soft')).toBe(false)
    })
  })

  describe('arrow', () => {
    it('can have arrow border', () => {
      // generate
      const cmp = shallowMount(OCard, { propsData: { border: 'arrow' } })
      expect(cmp.element.classList.contains('has-border')).toBe(false)
      expect(cmp.element.classList.contains('has-arrow-border')).toBe(true)
    })

    it('can hide arrow', () => {
      // generate
      const cmp = shallowMount(OCard, { propsData: { border: false } })
      expect(cmp.element.classList.contains('has-arrow-border')).toBe(false)
    })
  })
})
