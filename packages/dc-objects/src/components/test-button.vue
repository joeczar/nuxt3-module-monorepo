<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

defineProps({
  classes: {
    type: Array,
    default: () => ['button']
  }
})
onMounted(() => {
  console.log('test-button mounted')
})

</script>

<style lang="css" scoped>
button {
  background-color: cyan;
  color: red;
}
</style>
