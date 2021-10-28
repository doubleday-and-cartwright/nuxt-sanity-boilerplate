<template>
  <div id="nav">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/projects">Projects</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
#nav {
  a {
    text-decoration: none;
    display: inline-block;
    padding: $space-s;

    &:visited {
      color: black;
    }
  }
}
</style>
