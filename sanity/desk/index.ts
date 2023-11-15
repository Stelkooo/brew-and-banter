import { ListItemBuilder, StructureResolver } from 'sanity/desk';

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId();

  if (!id) return false;

  return ![''].includes(id);
};

const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([...S.documentTypeListItems().filter(hiddenDocTypes)]);

export default structure;
