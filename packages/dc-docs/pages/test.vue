<template>
  <div>
    <OContainer>
      <OCard>
        <template #card-head>
          <OHeadline>
            Hello test DC-Docs
          </OHeadline>

        </template>
        <o-test-button>My test button</o-test-button>
      </OCard>
    </OContainer>

  </div>
</template>

<script lang="ts">

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