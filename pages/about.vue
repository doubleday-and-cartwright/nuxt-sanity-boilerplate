<template>
  <div class="about">
    <h1 class="page-title">
      About The Company
    </h1>
    <p>{{ page.aboutText }}</p>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData ({ $sanity }) {
    const query = groq`*[_type == "pageAbout"]`
    const page = await $sanity.fetch(query)
    return { page }
  }
}
</script>
