<!--
  This file represents a dynamic route, in this case /projects/_slug
  The value for "_slug" will be available in params.slug as seen below.
-->
<template>
  <div v-if="project" class="project">
    <h1 class="page-title">
      {{ project.title }}
    </h1>
    <img class="project__featured-image" :src="$urlFor(project.featuredImage)" :alt="project.title">
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData ({ params, $sanity }) {
    const query = groq`*[_type == "project" && slug.current == "${params.slug}"][0]`
    const project = await $sanity.fetch(query)
    return { project }
  },
  // By using the head() function, dynamic data can be passed to SEO related metadata
  head () {
    return {
      title: this.project.seo ? this.project.seo.metaTitle : this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.seo ? this.project.seo.metaDescription : this.project.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  .project__featured-image {
    width: 100%;
  }
}
</style>
