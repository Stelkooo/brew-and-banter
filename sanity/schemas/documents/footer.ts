import { defineArrayMember, defineField, defineType } from 'sanity';

const TITLE = 'Footer Settings';

export default defineType({
  title: TITLE,
  name: 'footerSettings',
  type: 'document',
  fields: [
    defineField({
      title: 'Navigation Links',
      name: 'navItems',
      type: 'array',
      of: [defineArrayMember({ type: 'link' })],
    }),
    defineField({
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [defineArrayMember({ type: 'social' })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'policies',
      type: 'array',
      of: [defineArrayMember({ type: 'link' })],
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
