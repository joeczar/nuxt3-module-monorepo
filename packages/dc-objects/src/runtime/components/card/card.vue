
<template>
  <div class="o-card" :class="classes" @click="handleClick($event)">
    <slot name="card-head" />
    <div class="inner">
      <slot />
    </div>
    <!-- <o-border v-if="border" :arrow="border === 'arrow'" :color="borderColor" /> -->
  </div>
</template>

<script setup lang="ts">
import get from 'lodash/get'
import { computed } from 'vue'

const SHADOWS = ['soft', 'hard', 'soft-small', false]
const BORDERS = ['arrow', false, true]
const PADDING = ['default', 'small', 'center', 'nottiny', 'none']
const BACKGROUND = ['primary', 'secondary', 'grey', 'soft', 'none']

const props = defineProps({
  shadow: {
    type: [Boolean, String],
    default: 'soft'
  },
  border: {
    type: [Boolean, String],
    default: true
  },
  borderColor: {
    type: String,
    default: 'gradient'
  },
  padding: {
    type: String,
    default: 'default'
  },
  background: {
    type: String,
    default: 'none'
  },
  smallRadius: { type: Boolean, default: false }
})
const emit = defineEmits(['click', 'blur'])
const handleClick = (event) => {
  emit('click', event)
}
const classes = computed(() => {
  const classesArray: string[] = []

  if (props.border) {
    classesArray.push(
      get(props, 'border') === 'arrow' ? 'has-arrow-border' : 'has-border'
    )
  }

  if (props.shadow) {
    classesArray.push(`as-shadow-${props.shadow}`)
  }

  if (props.smallRadius) {
    classesArray.push('as-small-radius')
  }

  if (props.background && props.background !== 'none') {
    classesArray.push(`has-background-class l-bgcolor-${props.background}`)
  }

  classesArray.push(`as-${props.padding}-padding`)

  return classesArray.join(' ')
})

</script>

<style src="./card.scss" lang="scss">
</style>
