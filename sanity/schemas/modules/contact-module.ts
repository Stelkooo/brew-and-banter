import { defineArrayMember, defineField } from 'sanity';

import _ from 'lodash';
import {
  AtSign,
  Calendar,
  FileText,
  Hash,
  Phone,
  PhoneCall,
  Text,
} from 'lucide-react';

const getInputIcon = (inputType: string) => {
  switch (inputType) {
    case 'date':
      return Calendar;
    case 'email':
      return AtSign;
    case 'tel':
      return Phone;
    case 'text':
      return Text;
    case 'textArea':
      return FileText;
    case 'number':
      return Hash;
    default:
      return Text;
  }
};

const TITLE = 'Contact Module';

export default defineField({
  title: TITLE,
  name: 'contactModule',
  type: 'object',
  fields: [
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
    defineField({
      name: 'form',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              title: 'Required',
              name: 'isRequired',
              type: 'boolean',
            }),
            defineField({
              title: 'Field Label',
              name: 'fieldLabel',
              description: 'Inform what needs to be entered',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Field ID',
              name: 'fieldId',
              description: 'Unique ID to distinguish each field apart',
              type: 'slug',
              options: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                source: (_doc, { parent }) => parent.fieldLabel,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Input Type',
              name: 'inputType',
              type: 'string',
              options: {
                list: [
                  'date',
                  'email',
                  'number',
                  'tel',
                  'text',
                  { title: 'Text Area', value: 'textArea' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'fieldLabel',
              subtitle: 'inputType',
              isRequired: 'isRequired',
            },
            prepare({ subtitle, title, isRequired }) {
              return {
                title: `${title}${isRequired ? '*' : ''}`,
                subtitle: _.capitalize(subtitle),
                media: getInputIcon(subtitle),
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      headline: 'headline',
    },
    prepare({ headline }) {
      return {
        title: headline,
        subtitle: TITLE,
        media: PhoneCall,
      };
    },
  },
});
