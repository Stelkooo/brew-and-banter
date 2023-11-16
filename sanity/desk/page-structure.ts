import { ListItemBuilder } from 'sanity/desk';
import { Home, Files, Puzzle } from 'lucide-react';

import defineStructure from '../utils/define-structure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Pages')
    .id('pages')
    .child(
      S.list()
        .title('Pages')
        .items([
          S.listItem()
            .title('Home')
            .child(S.editor().id('home').schemaType('home').documentId('home'))
            .icon(Home),
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
