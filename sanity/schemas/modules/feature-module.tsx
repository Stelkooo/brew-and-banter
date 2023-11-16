import { List } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

import Icon from '@/components/shared/icon.component';

const TITLE = 'Feature Module';

export default defineField({
  title: TITLE,
  name: 'featureModule',
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
      name: 'features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'text',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              text: 'text',
              icon: 'icon',
            },
            prepare({ text, icon }) {
              return {
                title: text,
                media: <Icon name={icon} />,
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
        media: List,
      };
    },
  },
});
