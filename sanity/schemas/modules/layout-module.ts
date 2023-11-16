import { Layout } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Layout Module';

export default defineField({
  name: 'layoutModule',
  title: TITLE,
  type: 'object',
  fields: [
    defineField({
      title: 'Type',
      name: 'layoutType',
      type: 'string',
      options: {
        list: [
          { title: 'Content / Image', value: 'contentImage' },
          { title: 'Content Above Image', value: 'contentAboveImage' },
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
        defineField({
          name: 'cta',
          type: 'button',
        }),
      ],
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
      hidden: ({ parent }) => parent.layoutType !== 'contentAboveImage',
    }),
    defineField({
      name: 'image',
      type: 'customImage',
      validation: (rule) => rule.required(),
    }),
  ],
  initialValue: {
    type: 'contentImage',
  },
  preview: {
    select: {
      headline: 'headline',
      type: 'layoutType',
    },
    prepare({ headline, type }) {
      return {
        title: headline,
        subtitle: `${TITLE} - ${type.title}`,
        media: Layout,
      };
    },
  },
});
