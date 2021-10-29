/*
  Defines the schema for SEO settings such as title, description, and share image.
*/

export default {
  title: 'SEO Settings',
  name: 'seo',
  type: 'object',
  options: {
    collapsible: true
  },
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title used for search engines and browsers',
      validation: Rule => Rule.max(50).warning('Longer titles may be truncated by search engines')
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      rows: 3,
      description: 'Description for search engines',
      validation: Rule => Rule.max(150).warning('Longer descriptions may be truncated by search engines')
    },
    {
      title: 'Share Image',
      name: 'shareImage',
      type: 'image'
    }
  ]
}