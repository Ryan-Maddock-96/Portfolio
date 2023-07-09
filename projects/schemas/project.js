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
        name: 'date',
        type: 'string',
        title: 'Date of Project'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'github',
        type: 'string',
        title: 'GitHub Link'
      },
      {
        name: 'liveLink',
        type: 'string',
        title: 'Live Link'
      },
      {
        name: 'skills',
        type: 'array',
        of: [{type: 'string'}],
        title: 'Technologies Used'
      }
    ]
  }