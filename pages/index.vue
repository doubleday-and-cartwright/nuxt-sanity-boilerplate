<!--
  In Nuxt, index.vue will always be used as the view for the site's root directory
-->

<template>
  <div class="home">
    <h1 class="page-title">
      Our Company
    </h1>
    <div class="logo">
      <div class="texture" />
      <h1>
        OC
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
  margin: 0 auto;

  .texture {
    position: absolute;
    // Static images can be linked from the assets folder.
    background-image: url('~assets/images/home-texture.jpg');
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
