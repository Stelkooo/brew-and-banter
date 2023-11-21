import { draftMode } from 'next/headers';

import { homeQuery } from '@/sanity/lib/queries';
import HomePage from '@/components/pages/home/home.page';
import { sanityFetch } from '@/sanity/lib/fetch';
import { THome } from '@/types';
import PreviewProvider from '@/components/global/preview-provider.component';
import PreviewHomePage from '@/components/pages/home/preview-home.page';
import { token } from '@/sanity/env';

export default async function Home() {
  // Fetch home page modules
  const home = await sanityFetch<THome>({ query: homeQuery, tags: ['home'] });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token)
    return (
      <PreviewProvider token={token}>
        <PreviewHomePage home={home} />
      </PreviewProvider>
    );

  return <HomePage home={home} />;
}
