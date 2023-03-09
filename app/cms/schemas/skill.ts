import { defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'skill',
  title: 'Skills',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: ['Frontend', 'Backend', 'DevOps', 'Other']
      }
    }
  ]
});
