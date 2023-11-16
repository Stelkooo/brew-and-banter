import { defineType, defineField, defineArrayMember } from 'sanity';
import { ScrollText } from 'lucide-react';

import modules from '../modules';
import resolveHref from '@/sanity/lib/links';

export default defineType({
  name: 'blog',
  type: 'document',
  groups: [
    { title: 'Editorial', name: 'editorial', default: true },
    { title: 'SEO', name: 'seo' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'editorial',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
      group: 'editorial',
    }),
    defineField({
      name: 'thumbnail',
      type: 'customImage',
      validation: (rule) => rule.required(),
      group: 'editorial',
    }),
    defineField({
      name: 'copy',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          of: [defineField({ type: 'link', name: 'link' })],
        }),
        defineArrayMember({
          type: 'customImage',
        }),
      ],
      validation: (rule) => rule.required(),
      group: 'editorial',
    }),
    modules,
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ slug, title }) {
      return {
        title,
        subtitle: resolveHref('blog', slug),
        media: <ScrollText />,
      };
    },
  },
});
