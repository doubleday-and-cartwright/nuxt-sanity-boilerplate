<template>
  <div class="contact">
    <h1 class="page-title">
      Contact
    </h1>
    <form @submit.prevent="sendMessage">
      <input
        v-model="message"
        type="text"
        placeholder="Send message to server."
      >
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    async sendMessage () {
      console.log(`Sending message '${this.message}' to server.`)
      // The function which handles this POST is defined in /api/message.js
      try {
        const res = await this.$axios.post(`${window.location.origin}/api/message`, { message: this.message })
        alert(res.data.message)
        this.message = ''
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
