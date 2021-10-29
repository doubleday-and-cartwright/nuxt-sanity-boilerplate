<template>
  <footer>
    {{ footer.copy }}
  </footer>
</template>

<script>
export default {
  computed: {
    footer () { return this.$store.state.siteSettings.footer }
  }
}
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: $brand-color;
  padding: $space-s;
  text-align: center;
}
</style>
