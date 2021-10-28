<template>
  <div class="about">
    <h1>About our company</h1>
    <h2>Our Employees</h2>
    <div class="employees">
      <div
        v-for="(employee, index) in employees"
        :key="`employee-${index}`"
        class="employee-single"
      >
        <div
          class="portrait"
          :style="`background-image: url(${$urlFor(employee.image)})`"
        />
        <div class="copy">
          <h3>{{ employee.name }}</h3>
          <p>{{ employee.bio }}</p>
        </div>
      </div>
    </div>
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
