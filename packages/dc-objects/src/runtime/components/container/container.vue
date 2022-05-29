<template>
  <component :is="tagName" class="o-container grid-container" :class="computedClasses">
    <slot />
  </component>
</template>

<script lang="ts">

export default {
  name: 'OContainer',
  props: {
    tagName: {
      type: String,
      default: 'div'
    },
    display: {
      type: String,
      default: undefined
    },
    direction: {
      type: String,
      default: undefined
    },
    classes: {
      type: String,
      default: undefined
    }
  },

  computed: {
    computedClasses() {
      if (!this.display) {
        return this.classes
      }
      let classString
      if (this.classes) { classString += ` ${this.classes}` }
      if (this.display) { classString += ` ${this.display}` }
      if (this.direction) { classString += ` ${this.direction}` }

      return classString
    }
  }
}
</script>

<style src="./container.scss" lang="scss">
</style>
