import { groq } from '@nuxtjs/sanity'

export const state = () => ({
  siteSettings: {}
})

export const actions = {
  /**
   * This is a built in Nuxt action that is called on load.
   * In this case, it's used to get any global data required throughout the site.
   * This might include global site navigation or the site footer.
   */
  async nuxtServerInit ({ commit }) {
    const query = groq`{
      "general": *[_type == "settingsGeneral"][0],
      "footer": *[_type == "settingsFooter"][0]
    }`
    const siteSettings = await this.$sanity.fetch(query)
    commit('setSiteSettings', siteSettings)
  }
}

export const mutations = {
  setSiteSettings (state, val) {
    state.siteSettings = val
  }
}
