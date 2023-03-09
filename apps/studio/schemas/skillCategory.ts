import {defineType} from 'sanity'

export default defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
  ],
})
