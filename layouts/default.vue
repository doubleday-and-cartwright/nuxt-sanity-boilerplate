<!--
  Components that should appear globally (i.e. Site Navigation) should be placed here.
  Note that components do not need to be imported manually.
  This is because "components: true" in nuxt.config.js means that components will be imported as needed.
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
export default {
  // By loading global settings in nuxtServerInit and setting the title here,
  // SEO friendly metadata can be populated.
  head () {
    return {
      title: this.globalSettings.siteTitle
    }
  },
  computed: {
    globalSettings () { return this.$store.state.siteSettings.general }
  }
}
</script>
