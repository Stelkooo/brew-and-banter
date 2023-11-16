import { ListItemBuilder } from 'sanity/desk';
import { MenuSquare } from 'lucide-react';

import defineStructure from '../utils/define-structure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Menu Items')
    .schemaType('menuItem')
    .child(S.documentTypeList('menuItem').title('Menu Items'))
    .icon(MenuSquare)
);
