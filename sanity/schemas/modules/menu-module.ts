import { MenuSquare } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Menu Module';

export default defineField({
  title: TITLE,
  name: 'menuModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Menu Type',
      name: 'menuType',
      type: 'string',
      options: {
        list: [
          { title: '2 Menu Items', value: 'twoMenuItems' },
          { title: '3 Menu Items', value: 'threeMenuItems' },
          { title: '4 Menu Items', value: 'fourMenuItems' },
          { title: '5 Menu Items', value: 'fiveMenuItems' },
        ],
        layout: 'radio',
        direction: 'vertical',
      },
      validation: (rule) => rule.required(),
    }),
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
      validation: (rule) => rule.max(5).required(),
    }),
  ],
  initialValue: {
    type: 'twoMenuItems',
  },
  preview: {
    select: {
      headline: 'headline',
      type: 'menuType',
    },
    prepare({ type, headline }) {
      return {
        title: headline,
        subtitle: `${TITLE} - ${type.title}`,
        media: MenuSquare,
      };
    },
  },
});
