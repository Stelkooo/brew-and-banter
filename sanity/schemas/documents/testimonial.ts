import { User2 } from 'lucide-react';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'testimonial',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      return {
        title: name,
        subtitle: 'Testimonial',
        media: User2,
      };
    },
  },
});
