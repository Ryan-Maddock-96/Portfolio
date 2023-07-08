export default {
    name: 'project',
    type: 'document',
      title: 'Project',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'github',
        type: 'string',
        title: 'GitHub Link'
      },
      {
        name: 'skills',
        type: 'array',
        of: [{type: 'string'}],
        title: 'Technologies Used'
      }
    ]
  }