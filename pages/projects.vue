<template>
  <div class="projects">
    <h1 class="page-title">Our Work</h1>
    <div
      v-for="(project, index) in projects"
      :key="`project-${index}`"
      class="project-single"
    >
      <div
        class="project-single__image"
        :style="`background-image:url(${$urlFor(project.featuredImage)})`"
      >
        <h2>{{ project.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData ({ $sanity }) {
    const query = groq`*[_type == "project"]`
    const projects = await $sanity.fetch(query)
    return { projects }
  }
}
</script>

<style lang="scss" scoped>
.project-single {
  .project-single__image {
    @include flex-center;

    height: 300px;

    h2 {
      color: white;
      font-size: $font-size-l;
    }
  }
}
</style>
