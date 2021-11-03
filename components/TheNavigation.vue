<template>
  <div id="nav">
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <NuxtLink to="/projects">
      Projects
    </NuxtLink>
    <NuxtLink to="/animation_1">
      Animation Test
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<!-- Styling that is specific to a component should be placed in a scoped <style> tag within the component. -->
<style lang="scss" scoped>
#nav {
  a {
    text-decoration: none;
    display: inline-block;
    padding: $space-s;
    color: $font-color;

    &:visited {
      color: $font-color;
    }
  }
}
</style>
