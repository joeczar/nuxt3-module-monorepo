<template>
  <div ref="root" class="o-border" :style="styles" :class="classes">
    <template v-if="arrow">
      <svg width="100%" :height="svgHeight" :viewBox="viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg"
        class="background secondary">
        <g fill="#f2b700">
          <path :d="linePath" />
          <path v-if="arrow" :d="arrowPath" />
        </g>
      </svg>
    </template>
  </div>
</template>

<script setup lang="ts">
import { getPrefixedLogger } from '@dc/utilities'
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { addEventListener, removeEventListener } from '@dc/utilities/utilities/global'

const logger = getPrefixedLogger('o-border')

const COLORS = ['gradient', 'primary', 'secondary']

const BORDER_RADIUS = 10

const ARROW = {
  height: 10,
  width: 90.4
}
const HEIGHTS = {
  small: 12,
  large: 18
}
const props = defineProps({
  color: {
    type: String,
    // validator: v => COLORS.includes(v),
    // eslint-disable-next-line vue/valid-define-props
    default: COLORS[0]
  },
  arrow: {
    type: Boolean,
    default: false
  }
})

const root = ref()
const rect = ref({ width: 0 })
const classes = computed(() => [
  props.arrow ? 'has-arrow' : 'is-regular',
  `as-color-${props.color}`
])
const boxSize = computed(() => {
  const width = rect.value.width || 100
  const height = props.arrow ? HEIGHTS.large : HEIGHTS.small
  const outerHeight = props.arrow ? height + ARROW.height : height

  return { width, height, outerHeight }
})
const viewBox = computed(() => {
  const { outerHeight, width } = boxSize.value
  return `0 0 ${width} ${outerHeight}`
})
const styles = computed(() => {
  const { height } = boxSize.value
  return props.arrow ? `height: ${height}px` : null
})
const svgHeight = computed(() => {
  const { outerHeight } = boxSize.value
  return `${outerHeight}px`
})
const linePath = computed(() => {
  const { height, width } = boxSize.value
  const radius = BORDER_RADIUS
  const rh = height - radius
  const rw = width - radius
  return [
    'M0,0',
    `L${width} 0,${width} ${rh}`,
    `S${width} ${height}, ${rw} ${height}`,
    `L${radius} ${height}`,
    `S0 ${height}, 0,${rh}`,
    'Z'
  ].join(' ')
})
/**
     * @todo make curve arrow style
     * @returns {string}
     */
const arrowPath = computed(() => {
  const { height, width } = boxSize.value
  const cW = width / 2
  const arrowCW = ARROW.width / 2
  return [
    `M${cW - arrowCW} ${height}`,
    'c5.8 0 24.1 0 0 0',
    `c26.7 0 35.1 ${ARROW.height} 44.2 ${ARROW.height}`,
    'c0 0 0 0 2 0',
    `c9.1 0 17.5-${ARROW.height} 44.2-${ARROW.height}`,
    `V${height}`,
    `H${cW - arrowCW}`,
    'Z'
  ].join('')
})
const updateBoxing = () => {
  if (root.value instanceof HTMLElement) {
    try {
      rect.value = root.value.getBoundingClientRect()
    } catch (err) {
      logger.error(err)
    }
  }
}
onMounted(() => {
  if (props.arrow) {
    nextTick(updateBoxing)
    setTimeout(updateBoxing, 300)
  }
})
if (props.arrow) {
  // const boundUpdateBoxing = this.updateBoxing.bind(this);
  addEventListener('resize', updateBoxing)
}
onBeforeUnmount(() => {
  if (props.arrow) {
    removeEventListener('resize', updateBoxing)
  }
})

</script>

<style lang="scss" scoped src="./border.scss">
</style>
