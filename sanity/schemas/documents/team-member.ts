import { defineField, defineType } from 'sanity';

const TITLE = 'Team Member';

export default defineType({
  title: TITLE,
  name: 'teamMember',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Job Title',
      name: 'jobTitle',
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
      name: 'name',
      image: 'image',
      jobTitle: 'jobTitle',
    },
    prepare({ name, image, jobTitle }) {
      return {
        title: name,
        subtitle: jobTitle,
        media: image,
      };
    },
  },
});
