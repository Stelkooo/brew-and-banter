'use client';

import { useLiveQuery } from 'next-sanity/preview';

import { pageQuery } from '@/sanity/lib/queries';
import { TPage } from '@/types';
import SlugPage from './slug.page';

type Props = { page?: TPage; slug?: string };

export default function PreviewSlugPage({ page, slug }: Props) {
  const [data] = useLiveQuery(page, pageQuery, { slug });

  return <SlugPage page={data} />;
}
