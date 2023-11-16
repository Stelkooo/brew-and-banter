import { defineField, defineType } from 'sanity';

const TITLE = 'General Settings';

export default defineType({
  title: TITLE,
  name: 'generalSettings',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coords',
      type: 'geopoint',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      };
    },
  },
});
