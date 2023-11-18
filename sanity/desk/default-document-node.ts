import { DefaultDocumentNodeResolver } from 'sanity/desk';
import { Iframe } from 'sanity-plugin-iframe-pane';
import { WEBSITE_HOST_URL } from '@/lib/constants';

// eslint-disable-next-line import/prefer-default-export
export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  const previewView = S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: `${WEBSITE_HOST_URL}/api/preview`,
      })
      .title('Preview'),
  ]);

  switch (schemaType) {
    case `home`:
      return previewView;
    case `page`:
      return previewView;
    case `blog`:
      return previewView;
    default:
      return S.document().views([S.view.form()]);
  }
};
