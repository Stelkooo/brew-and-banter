import { defineField } from 'sanity';

export default defineField({
  name: 'button',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reference',
      type: 'reference',
      to: [{ type: 'home' }, { type: 'page' }, { type: 'blog' }],
      validation: (rule) => rule.required(),
    }),
  ],
});
