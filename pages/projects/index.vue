<template>
  <div class="projects">
    <h1 class="page-title">
      Our Work
    </h1>
    <div
      v-for="(project, index) in projects"
      :key="`project-${index}`"
      class="project-single"
    >
      <NuxtLink :to="`/projects/${project.slug.current}`">
        <div
          class="project-single__image"
          :style="`background-image:url(${$urlFor(project.featuredImage).height(500)})`"
        >
          <h2>{{ project.title }}</h2>
        </div>
      </NuxtLink>
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
  a {
    text-decoration: none;
  }

  .project-single__image {
    @include flex-center;
    @include bg-cover-center;

    height: 300px;

    h2 {
      color: white;
      font-size: $font-size-l;
    }
  }
}
</style>
