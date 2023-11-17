import { LiveQuery } from 'next-sanity/preview/live-query';
import { draftMode } from 'next/headers';

import { getHomePage } from '@/sanity/lib/fetch';
import { homeQuery } from '@/sanity/lib/queries';
import HomePage from '@/components/pages/home/home.page';
import previewHomePage from '@/components/pages/home/preview-home.page';

export default async function Home() {
  // Fetch home page modules
  const home = await getHomePage();

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={homeQuery}
      initialData={home}
      as={previewHomePage}
    >
      <HomePage home={home} />
    </LiveQuery>
  );
}
