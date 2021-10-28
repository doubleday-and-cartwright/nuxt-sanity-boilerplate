export default {
  name: 'employee',
  title: 'Employee',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'The name of the employee',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    }
  ]
}