<template>
  <div>
    Hello test DC-Docs
    <o-test-button>My test button</o-test-button>
  </div>
</template>

<script lang="ts">
// import OTestButton from '@nuxt-module/dc-objects'

export default {
  setup() {


    return {}
  },
  mounted() {
    console.log('mounted', this)
  }
}
</script>

<style scoped>
</style>