import {RobotIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export default defineType({
  name: 'oss',
  title: 'Open Source Project',
  icon: RobotIcon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metric',
      title: 'Metric',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
})
