import { defineArrayMember, defineField, defineType } from 'sanity';

const TITLE = 'Header Settings';

export default defineType({
  title: TITLE,
  name: 'headerSettings',
  type: 'document',
  fields: [
    defineField({
      title: 'Navigation Links',
      name: 'navItems',
      type: 'array',
      of: [defineArrayMember({ type: 'link' })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'CTA',
      name: 'cta',
      type: 'link',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      };
    },
  },
});
