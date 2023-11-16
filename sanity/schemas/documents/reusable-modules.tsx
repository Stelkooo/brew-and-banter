import { Puzzle } from 'lucide-react';
import { defineField, defineType } from 'sanity';

import { modulesArr } from '../modules';

const getSubtitle = (type: string) => {
  switch (type) {
    case 'layoutModule':
      return 'Layout Module';
    default:
      return 'Invalid Module';
  }
};

export default defineType({
  title: 'Reusable Modules',
  name: 'reusableModule',
  type: 'document',
  groups: [{ title: 'Editorial', name: 'editorial', default: true }],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'editorial',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'modules',
      type: 'array',
      group: 'editorial',
      of: [...modulesArr],
      validation: (rule) => rule.length(1),
    }),
  ],
  preview: {
    select: {
      moduleType: 'modules',
      title: 'title',
    },
    prepare({ moduleType, title }) {
      return {
        title,
        subtitle: getSubtitle(moduleType[0]._type),
        media: <Puzzle />,
      };
    },
  },
});
