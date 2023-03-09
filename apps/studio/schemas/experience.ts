import {RocketIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  icon: RocketIcon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'pageUrl',
      title: 'Page URL',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'start',
      title: 'Start',
      type: 'date',
    },
    {
      name: 'end',
      title: 'End',
      type: 'date',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'skill'}],
        },
      ],
    },
  ],
})
