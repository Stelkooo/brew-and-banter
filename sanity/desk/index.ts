import { ListItemBuilder, StructureResolver } from 'sanity/desk';

import pageStructure from './page-structure';
import blogStructure from './blog-structure';
import settingsStructure from './settings-structure';
import teamMemberStructure from './team-member-structure';
import menuItemStructure from './menu-item-structure';
import testimonialStructure from './testimonial-structure';

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId();

  if (!id) return false;

  return ![
    'blog',
    'footerSettings',
    'headerSettings',
    'generalSettings',
    'home',
    'menuItem',
    'page',
    'reusableModule',
    'teamMember',
    'testimonial',
  ].includes(id);
};

const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      pageStructure(S, context),
      blogStructure(S, context),
      S.divider(),
      teamMemberStructure(S, context),
      menuItemStructure(S, context),
      testimonialStructure(S, context),
      S.divider(),
      settingsStructure(S, context),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

export default structure;
