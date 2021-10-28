<template>
  <div class="about">
    <h1 class="page-title">About our company</h1>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData ({ $sanity }) {
    const query = groq`*[_type == "employee"]`
    const employees = await $sanity.fetch(query)
    return { employees }
  }
}
</script>
