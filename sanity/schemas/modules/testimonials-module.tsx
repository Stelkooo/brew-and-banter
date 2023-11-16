import { Users2 } from 'lucide-react';
import { defineField, defineArrayMember } from 'sanity';

const TITLE = 'Testimonials Module';

export default defineField({
  title: TITLE,
  name: 'testimonialsModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Type',
      name: 'testimonialType',
      type: 'string',
      options: { layout: 'radio', list: ['text', 'grid'] },
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
      name: 'testimonials',
      type: 'array',
      of: [
        defineArrayMember({ type: 'reference', to: [{ type: 'testimonial' }] }),
      ],
      validation: (rule) => rule.max(5).required(),
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
        media: <Users2 />,
      };
    },
  },
});
