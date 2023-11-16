import { defineField } from 'sanity';
import { AtSign, ExternalLink, Link, Phone, X } from 'lucide-react';

const getValue = (
  type: string,
  url = '',
  email = '',
  phone = '',
  reference = ''
) => {
  switch (type) {
    case 'internal':
      return reference;
    case 'external':
      return url;
    case 'email':
      return email;
    case 'phone':
      return phone;
    default:
      return 'Invalid type';
  }
};

const getSubtitle = (type: string, value: string) => {
  switch (type) {
    case 'internal':
      return `/${value}`;
    case 'external':
      return `${value}`;
    case 'email':
      return `mailto:${value}`;
    case 'phone':
      return `tel:${value}`;
    default:
      return 'Invalid type';
  }
};

const getIcon = (type: string) => {
  switch (type) {
    case 'internal':
      return Link;
    case 'external':
      return ExternalLink;
    case 'email':
      return AtSign;
    case 'phone':
      return Phone;
    default:
      return X;
  }
};

export default defineField({
  name: 'link',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      description: 'Name of link which users will see and click on',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Type of link',
      name: 'type',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: ['internal', 'external', 'email', 'phone'],
      },
    }),
    defineField({
      title: 'URL',
      name: 'url',
      description: 'URL of external page to take users to',
      type: 'url',
      hidden: ({ parent }) => parent.type !== 'external',
    }),
    defineField({
      name: 'reference',
      description: 'Reference to internal page to take users to',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'home' }, { type: 'blog' }],
      hidden: ({ parent }) => parent.type !== 'internal',
    }),
    defineField({
      name: 'email',
      description: 'Email address for users to contact',
      type: 'string',
      hidden: ({ parent }) => parent.type !== 'email',
      validation: (rule) => rule.email(),
    }),
    defineField({
      title: 'Phone Number',
      name: 'phone',
      description: 'Phone number for users to contact',
      type: 'string',
      hidden: ({ parent }) => parent.type !== 'phone',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      type: 'type',
      email: 'email',
      phone: 'phone',
      reference: 'reference.slug.current',
    },
    prepare({ url, title, email, phone, type, reference }) {
      return {
        title,
        subtitle: getSubtitle(
          type,
          getValue(type, url, email, phone, reference)
        ),
        media: getIcon(type),
      };
    },
  },
});
