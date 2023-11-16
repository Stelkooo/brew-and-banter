import { UserSquare2 } from 'lucide-react';
import { defineField, defineArrayMember } from 'sanity';

const TITLE = 'Team Module';

export default defineField({
  title: TITLE,
  name: 'teamModule',
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
      title: 'Team Members',
      name: 'teamMembers',
      type: 'array',
      of: [
        defineArrayMember({ type: 'reference', to: [{ type: 'teamMember' }] }),
      ],
      validation: (rule) => rule.required(),
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
        media: UserSquare2,
      };
    },
  },
});
