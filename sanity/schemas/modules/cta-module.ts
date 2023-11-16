import { Phone } from 'lucide-react';
import { defineArrayMember, defineField } from 'sanity';

const TITLE = 'CTA Module';

export default defineField({
  title: TITLE,
  name: 'ctaModule',
  type: 'object',
  fields: [
    defineField({
      title: 'Type',
      name: 'ctaType',
      type: 'string',
      options: { layout: 'radio', list: ['newsletter', 'link'] },
    }),
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
      name: 'cta',
      type: 'button',
      hidden: ({ parent }) => parent.ctaType !== 'link',
    }),
  ],
  initialValue: {
    ctaType: 'link',
  },
  preview: {
    select: {
      headline: 'headline',
      type: 'ctaType',
    },
    prepare({ headline, type }) {
      return {
        title: headline,
        subtitle: `${TITLE} - ${type.title}`,
        media: Phone,
      };
    },
  },
});
