import { ListItemBuilder } from 'sanity/desk';
import { Files, Puzzle } from 'lucide-react';

import defineStructure from '../utils/define-structure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Pages')
    .id('pages')
    .child(
      S.list()
        .title('Pages')
        .items([
          S.documentListItem().id('home').schemaType('home'),
          S.divider(),
          S.listItem()
            .title('Other Pages')
            .schemaType('page')
            .child(S.documentTypeList('page').title('Other Pages'))
            .icon(Files),
          S.divider(),
          S.listItem()
            .title('Reusable Modules')
            .schemaType('reusableModule')
            .child(
              S.documentTypeList('reusableModule').title('Reusable Modules')
            )
            .icon(Puzzle),
        ])
    )
    .icon(Files)
);
