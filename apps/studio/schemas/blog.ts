import {defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    },

    {
      name: 'content',
      type: 'localeBlock',
      title: 'Content',
    },
  ],

  preview: {
    select: {
      title: 'title.en',
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
})
