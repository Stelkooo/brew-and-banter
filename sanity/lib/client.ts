import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

// eslint-disable-next-line import/prefer-default-export
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
});
