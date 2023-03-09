import {defineType} from 'sanity'
import {IceCreamIcon} from '@sanity/icons'

export default defineType({
  name: 'skill',
  title: 'Skill',
  icon: IceCreamIcon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'includes',
      title: 'Includes',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      name: 'name',
      includes: 'includes',
    },
    prepare({name, includes}) {
      const subtitle = includes ? includes.join(', ') : ''

      return {
        title: name,
        subtitle,
      }
    },
  },
})
