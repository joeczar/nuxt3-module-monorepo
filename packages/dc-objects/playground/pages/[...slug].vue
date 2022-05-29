<template>
  <main ref="main" class="prose">
    <ContentDoc />
  </main>
</template>
<script setup lang="ts">
import { getPrefixedLogger } from '@dc/utilities'

// const logger = getPrefixedLogger('[Objects]')
const main = ref(null)
onMounted(() => {
  if (window) {
    console.log('onMounted', { main })
  }
})
</script>
