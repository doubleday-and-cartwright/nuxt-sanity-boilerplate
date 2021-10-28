export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      description: 'The title of the project.',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Project Slug',
      description: 'The URL slug for this project.',
      type: 'slug',
      validation: Rule => Rule.required()
    },
    {
      name: 'featuredImage',
      title: 'Project Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text'
    }
  ]
}