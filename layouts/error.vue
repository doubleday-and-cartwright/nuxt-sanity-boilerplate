<template>
  <div class="error">
    <h1>{{ error.statusCode }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  @include flex-center;

  min-height: 85vh;

  h1 {
    font-size: $font-size-xl;
  }
}
</style>
