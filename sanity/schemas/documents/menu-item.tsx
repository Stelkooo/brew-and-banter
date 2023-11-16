import { defineField, defineType } from 'sanity';

const TITLE = 'Menu Item';

export default defineType({
  title: TITLE,
  name: 'menuItem',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'customImage',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title,
        media: image,
      };
    },
  },
});
