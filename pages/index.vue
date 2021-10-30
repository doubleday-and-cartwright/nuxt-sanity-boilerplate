<!--
  In Nuxt, index.vue will always be used as the view for the site's root directory
-->

<template>
  <div class="home">
    <h1 class="page-title">
      The Company
    </h1>
    <div class="logo">
      <!-- nuxt-img provides utilites for resizing images in the static directory -->
      <nuxt-img
        src="images/home-texture.jpg"
        fit="cover"
        class="texture"
        width="200"
      />
      <h1>
        TC
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.logo {
  @include flex-center;

  position: relative;
  width: 200px;
  height: 200px;
  margin: $space-l auto;

  .texture {
    position: absolute;
    transform: rotateZ(45deg);
    width: 100%;
    height: 100%;
  }

  h1 {
    position: relative;
    color: $brand-color;
    font-size: $font-size-xl;
  }
}
</style>
