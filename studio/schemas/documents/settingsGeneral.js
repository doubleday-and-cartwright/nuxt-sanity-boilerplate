/*
  Fields added here will be accessible across the site in the Vuex store,
  and by default are loaded in layouts/default.vue
*/

export default {
  name: 'settingsGeneral',
  title: 'General Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string'
    }
  ]
}