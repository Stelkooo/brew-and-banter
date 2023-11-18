'use client';

import { useLiveQuery } from 'next-sanity/preview';

import { homeQuery } from '@/sanity/lib/queries';
import { THome } from '@/types';
import HomePage from './home.page';

type Props = {
  home?: THome;
};

export default function PreviewHomePage({ home }: Props) {
  const [data] = useLiveQuery(home, homeQuery);

  return <HomePage home={data} />;
}
