'use client';

import { SanityClient } from 'next-sanity';
import dynamic from 'next/dynamic';
import { suspend } from 'suspend-react';

const LiveQueryProvider = dynamic(() => import('next-sanity/preview'));

// suspend-react cache is global, so we use a unique key to avoid collisions
const UniqueKey = Symbol('lib/sanity.client');

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token?: string;
}) {
  const client = suspend(() => import('@/sanity/lib/client'), [UniqueKey]);
  if (!token) throw new TypeError('Missing token');
  return (
    <LiveQueryProvider
      client={client as unknown as SanityClient}
      token={token}
      logger={console}
    >
      {children}
    </LiveQueryProvider>
  );
}
