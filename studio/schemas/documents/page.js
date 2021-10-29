/*
  Defines a schema for a minimal page document
  By default, rendered by _slug.vue
*/

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Page Slug',
      type: 'slug'
    },
    {
      name: 'copy',
      title: 'Page Copy',
      type: 'text'
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo'
    }
  ]
}