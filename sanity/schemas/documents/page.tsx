import { defineField, defineType } from 'sanity';
import { PanelTop } from 'lucide-react';

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  groups: [
    { title: 'Editorial', name: 'editorial', default: true },
    { title: 'SEO', name: 'seo' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'editorial',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'editorial',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'modules', type: 'modules', group: 'editorial' }),
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
        subtitle: `/${slug}`,
        media: PanelTop,
      };
    },
  },
});
