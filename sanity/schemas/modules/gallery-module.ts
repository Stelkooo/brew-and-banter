import { LayoutGrid } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Gallery Module';

export default defineField({
  title: TITLE,
  name: 'galleryModule',
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
      name: 'images',
      type: 'array',
      of: [defineArrayMember({ type: 'customImage' })],
      validation: (rule) => rule.length(5).required(),
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
        media: LayoutGrid,
      };
    },
  },
});
