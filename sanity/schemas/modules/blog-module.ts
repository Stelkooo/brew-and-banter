import { ScrollText } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

const getHeadline = (type: 'latest' | 'all' | 'similar', headline?: string) => {
  switch (type) {
    case 'all':
      return 'All Posts';
    case 'latest':
      return headline;
    case 'similar':
      return 'Similar Posts';
    default:
      return 'Blog Posts';
  }
};

const TITLE = 'Blog Module';

export default defineField({
  title: TITLE,
  name: 'blogModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Type',
      name: 'blogType',
      type: 'string',
      options: { layout: 'radio', list: ['latest', 'all', 'similar'] },
    }),
    defineField({
      name: 'headline',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
      hidden: ({ parent }) => parent.blogType !== 'latest',
    }),
    defineField({
      title: 'Similar Blog Posts',
      name: 'similarPosts',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'blog' }] })],
      hidden: ({ parent }) => parent.blogType !== 'similar',
    }),
  ],
  initialValue: {
    blogType: 'all',
  },
  preview: {
    select: {
      headline: 'headline',
      type: 'blogType',
    },
    prepare({ headline, type }) {
      return {
        title: getHeadline(type, headline),
        subtitle: TITLE,
        media: ScrollText,
      };
    },
  },
});
