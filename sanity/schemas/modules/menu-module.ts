import { MenuSquare } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Menu Module';

export default defineField({
  title: TITLE,
  name: 'menuModule',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Menu Items',
      name: 'menuItems',
      type: 'array',
      of: [
        defineArrayMember({ type: 'reference', to: [{ type: 'menuItem' }] }),
      ],
      validation: (rule) => rule.min(2).max(5).required(),
    }),
  ],
  preview: {
    select: {
      headline: 'headline',
    },
    prepare({ headline }) {
      return {
        title: headline,
        subtitle: TITLE,
        media: MenuSquare,
      };
    },
  },
});
