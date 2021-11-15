<!--
  This view is provided as an example of a very simple, repeatable page template.
  A more robust version might use rich text for the page.copy field.
-->

<template>
  <div class="about">
    <h1 class="page-title">
      {{ page.title }}
    </h1>
    <p>{{ page.copy }}</p>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  name: 'AboutPage',
  // Get page data specific to the current page slug.
  async asyncData ({ params, $sanity, error }) {
    const query = groq`*[_type == "page" && slug.current == "${params.slug}"][0]`
    const page = await $sanity.fetch(query)
    // If this page doesn't exist, directs the router to the error page, defined in layouts/error.vue
    if (!page) {
      error({
        statusCode: 404,
        message: 'The requested page was not found.'
      })
    }
    return { page: page || {} }
  },
  head () {
    // Insert SEO data from the CMS, or fallback.
    return {
      title: this.page.seo ? this.page.seo.metaTitle : this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.seo ? this.page.seo.metaDescription : this.page.copy
        }
      ]
    }
  }
}
</script>
