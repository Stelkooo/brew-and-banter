import { Wallpaper } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Hero Module';

export default defineField({
  name: 'heroModule',
  title: TITLE,
  type: 'object',
  fields: [
    defineField({
      title: 'Type',
      name: 'heroType',
      type: 'string',
      options: {
        list: [
          'text',
          { title: 'Content / Images', value: 'contentImages' },
          { title: 'Content Above Images', value: 'contentAboveImages' },
        ],
        layout: 'radio',
        direction: 'vertical',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'copy',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineField({
          name: 'cta',
          type: 'button',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [defineArrayMember({ type: 'customImage' })],
      hidden: ({ parent }) =>
        parent.heroType !== 'contentImages' ||
        parent.heroType !== 'contentAboveImages',
      validation: (rule) => rule.max(8).required(),
    }),
  ],
  initialValue: {
    type: 'text',
  },
  preview: {
    select: {
      copy: 'copy',
      type: 'heroType',
    },
    prepare({ copy, type }) {
      return {
        title: copy,
        subtitle: `${TITLE} - ${type.title}`,
        media: Wallpaper,
      };
    },
  },
});
