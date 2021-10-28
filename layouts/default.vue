<template>
  <div class="site-content">
    <TheNavigation />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
export default {
  components: {
    TheNavigation
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
</style>
