<template>
  <component :is="tagType" :id="anchorId" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">

const { isB2C } = useTheme()

enum LEVEL_CLASSES {
  '1' = 'f-headline-page',
  '2' = 'f-headline-component',
  '3' = 'f-special-quote',
  '4' = 'f-subline',
  '5' = 'f-headline-module',
  '6' = 'f-headline-module'
}

const props = defineProps({
  anchor: { type: String, default: undefined },
  level: {
    validator(value) {
      return value >= 1 && value <= 6
    },
    default: 2
  },
  // will be set by level if user not define
  styleType: { type: String, default: undefined },
  space: {
    type: String,
    default: 'default'
  }
})
const switchClasses = () => {
  switch (props.styleType) {
    case 'f-headline-component':
      return 'f-headline-module'
    case 'f-special-quote':
      return 'f-copy f-medium'
    default:
      return 'f-headline-module'
  }
}

const typoB2C = switchClasses()
const typoB2B = props.styleType
  ? props.styleType
  : LEVEL_CLASSES[props.level]

const classes = computed(() => {
  return [
    'o-headline l-color-primary',
    isB2C ? typoB2C : typoB2B,
    props.space ? `has-${props.space}-space` : ''
  ]
})
const tagType = computed(() => {
  return `h${props.level}`
})
const anchorId = computed(() => {
  return props.anchor ? props.anchor.replace(/\s/g, '') : null
})

</script>

<style src="./headline.scss" lang="scss">
</style>
