import { defineField, defineType } from 'sanity';
import { PanelTop } from 'lucide-react';

const TITLE = 'Home Page';

export default defineType({
  title: TITLE,
  name: 'home',
  type: 'document',
  groups: [
    { title: 'Editorial', name: 'editorial', default: true },
    { title: 'SEO', name: 'seo' },
  ],
  fields: [
    defineField({ name: 'modules', type: 'modules', group: 'editorial' }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
        subtitle: '/',
        media: PanelTop,
      };
    },
  },
});
