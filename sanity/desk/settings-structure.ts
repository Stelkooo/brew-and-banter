import { ListItemBuilder } from 'sanity/desk';
import { Anchor, Cog, Navigation, Settings } from 'lucide-react';

import defineStructure from '../utils/define-structure';

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Settings')
    .id('settings')
    .child(
      S.list()
        .title('Settings')
        .items([
          S.listItem()
            .title('General')
            .child(
              S.editor()
                .id('generalSettings')
                .schemaType('generalSettings')
                .documentId('generalSettings')
            )
            .icon(Settings),
          S.divider(),
          S.listItem()
            .title('Header')
            .child(
              S.editor()
                .id('headerSettings')
                .schemaType('headerSettings')
                .documentId('headerSettings')
            )
            .icon(Navigation),
          S.listItem()
            .title('Footer')
            .child(
              S.editor()
                .id('footerSettings')
                .schemaType('footerSettings')
                .documentId('footerSettings')
            )
            .icon(Anchor),
        ])
    )
    .icon(Cog)
);
