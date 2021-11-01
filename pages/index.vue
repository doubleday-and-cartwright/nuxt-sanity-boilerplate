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

    <div class="notes">
      <p>
        The Sanity CMS for this site can be accessed via
        <NuxtLink to="/studio">
          /studio
        </NuxtLink>
      </p>
      <br>
      <p>Whenever any data is updated in the CMS, a Sanity Webhook will cause the static site to be rebuilt and redeployed on Vercel. Updates may take a few minutes to appear on the live site.</p>
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

.notes {
  max-width: 600px;
  margin: 0 auto;
  padding: $space-xl 0;
}
</style>
