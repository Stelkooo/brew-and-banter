'use server';

import type { QueryParams } from '@sanity/client';
import { client } from '@/sanity/lib/client';
import { token } from '../env';

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

// eslint-disable-next-line import/prefer-default-export
export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
  isDraftMode = false,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
  isDraftMode?: boolean;
}): Promise<QueryResponse> {
  if (isDraftMode && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required.'
    );
  }
  const isDevelopment = process.env.NODE_ENV === 'development';

  return client.fetch<QueryResponse>(query, params, {
    cache: isDevelopment || isDraftMode ? undefined : 'force-cache',
    ...(isDraftMode && {
      token,
      perspective: 'previewDrafts',
    }),
    next: {
      ...(isDraftMode && { revalidate: 30 }),
      tags,
    },
  });
}
