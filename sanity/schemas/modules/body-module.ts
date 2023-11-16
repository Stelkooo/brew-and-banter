import { Text } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'Body Module';

export default defineField({
  title: TITLE,
  name: 'bodyModule',
  type: 'object',
  fields: [
    defineField({
      name: 'copy',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Show Table of Content?',
      name: 'showTableOfContents',
      type: 'boolean',
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
        media: Text,
      };
    },
  },
});
