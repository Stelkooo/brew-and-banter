import { defineField } from 'sanity';

export default defineField({
  title: 'SEO',
  name: 'seo',
  type: 'object',
  group: 'seo',
  options: { collapsed: false, collapsible: true },
  fields: [
    defineField({
      name: 'title',
      description:
        'Title used to display in address bar and search results heading',
      type: 'string',
      validation: (rule) =>
        rule
          .max(50)
          .warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'description',
      description: 'Title used to display in search results',
      type: 'text',
      rows: 2,
      validation: (rule) =>
        rule
          .max(150)
          .warning('Longer descriptions may be truncated by search engines'),
    }),
  ],
});
