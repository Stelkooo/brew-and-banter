import { ListItemBuilder } from 'sanity/desk';
import { UserSquare2 } from 'lucide-react';

import defineStructure from '../utils/define-structure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Team Members')
    .schemaType('teamMember')
    .child(S.documentTypeList('teamMember').title('Team Members'))
    .icon(UserSquare2)
);
