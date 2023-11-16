import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from 'lucide-react';
import { defineField } from 'sanity';

const getIcon = (type: string) => {
  switch (type) {
    case 'linkedin':
      return Linkedin;
    case 'facebook':
      return Facebook;
    case 'instagram':
      return Instagram;
    case 'twitter':
      return Twitter;
    case 'youtube':
      return Youtube;
    default:
      return X;
  }
};

export default defineField({
  name: 'social',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: ['linkedin', 'youtube', 'instagram', 'twitter', 'facebook'],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) => rule.uri({}).required(),
    }),
  ],
  preview: {
    select: {
      type: 'type',
      url: 'url',
    },
    prepare({ type, url }) {
      return {
        title: url,
        media: getIcon(type),
      };
    },
  },
});
