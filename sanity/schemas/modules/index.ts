import { ArrayOfType, defineArrayMember, defineField } from 'sanity';

export const modulesArr: ArrayOfType[] = [
  defineArrayMember({ type: 'blogModule' }),
  defineArrayMember({ type: 'bodyModule' }),
  defineArrayMember({ type: 'contactModule' }),
  defineArrayMember({ type: 'ctaModule' }),
  defineArrayMember({ type: 'featureModule' }),
  defineArrayMember({ type: 'galleryModule' }),
  defineArrayMember({ type: 'heroModule' }),
  defineArrayMember({ type: 'layoutModule' }),
  defineArrayMember({ type: 'menuModule' }),
  defineArrayMember({ type: 'teamModule' }),
  defineArrayMember({ type: 'testimonialsModule' }),
  defineArrayMember({ type: 'timelineModule' }),
];

export default defineField({
  name: 'modules',
  type: 'array',
  group: 'editorial',
  of: [
    ...modulesArr,
    defineArrayMember({ type: 'reference', to: [{ type: 'reusableModule' }] }),
  ],
});
