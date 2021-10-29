<!--
  Components that should appear globally (i.e. Site Navigation) should be placed here.
  Note that it also imports the global.scss file to apply global styling.
-->
<template>
  <div class="site-content">
    <TheNavigation />
    <div class="container">
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: {
    TheNavigation,
    TheFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
</style>
