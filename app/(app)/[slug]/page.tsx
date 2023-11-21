import { draftMode } from 'next/headers';

import SlugPage from '@/components/pages/slug/slug.page';
import { sanityFetch } from '@/sanity/lib/fetch';
import { pageQuery, pageSlugs } from '@/sanity/lib/queries';
import { TPage } from '@/types';
import PreviewProvider from '@/components/global/preview-provider.component';
import { token } from '@/sanity/env';
import PreviewSlugPage from '@/components/pages/slug/preview-slug.page';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const pages = await sanityFetch<{ slug: string }[]>({
    query: pageSlugs,
    tags: ['page'],
  });

  return pages.map((slug) => ({ params: { slug } }));
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const isDraftMode = draftMode().isEnabled;
  // Fetch dynamic root pages
  const page = await sanityFetch<TPage>({
    query: pageQuery,
    tags: ['page'],
    params: { slug },
    isDraftMode,
  });

  if (isDraftMode && token)
    return (
      <PreviewProvider token={token}>
        <PreviewSlugPage page={page} slug={slug} />
      </PreviewProvider>
    );

  return <SlugPage page={page} />;
}
