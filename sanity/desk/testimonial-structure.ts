import { ListItemBuilder } from 'sanity/desk';
import { Users2 } from 'lucide-react';

import defineStructure from '../utils/define-structure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Testimonials')
    .schemaType('testimonial')
    .child(S.documentTypeList('testimonial').title('Testimonials'))
    .icon(Users2)
);
