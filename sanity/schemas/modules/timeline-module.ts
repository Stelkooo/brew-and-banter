import { CalendarDays, Clock3 } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Timeline Module';

export default defineField({
  title: TITLE,
  name: 'timelineModule',
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
      name: 'timeline',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              text: 'text',
            },
            prepare({ text }) {
              return {
                title: text,
                media: Clock3,
              };
            },
          },
        }),
      ],
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
        media: CalendarDays,
      };
    },
  },
});
