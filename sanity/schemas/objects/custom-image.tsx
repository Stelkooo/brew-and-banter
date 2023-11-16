import { defineField } from 'sanity';
import { Image } from 'lucide-react';

export default defineField({
  title: 'Image',
  name: 'customImage',
  type: 'image',
  icon: Image,
  fields: [
    defineField({
      title: 'Alt text',
      name: 'alt',
      description:
        'Alternative text for screenreaders. Falls back on caption if not set',

      type: 'string',
    }),
    defineField({
      title: 'Custom Sizes',
      name: 'sizes',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
});
