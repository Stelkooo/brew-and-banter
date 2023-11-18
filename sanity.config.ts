import { visionTool } from '@sanity/vision';
import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';

import { apiVersion, dataset, projectId } from './sanity/env';
import schema from './sanity/schemas';
import structure from './sanity/desk';
import myTheme from './sanity/lib/theme';
import { defaultDocumentNode } from './sanity/desk/default-document-node';

const devOnlyPlugins = [visionTool({ defaultApiVersion: apiVersion })];

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Brew & Banter',

  theme: myTheme,

  schema,

  plugins: [
    deskTool({ structure, defaultDocumentNode }),
    ...(isDev ? devOnlyPlugins : []),
  ],
});
