import './globals.css';
import { Lora, Raleway } from 'next/font/google';
import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';

import { cn } from '@/lib/utils';
import { token } from '@/sanity/lib/fetch';

// Serif Font Import
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
// Sans Serif Font Import
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

// Sanity Preview Provider
const PreviewProvider = dynamic(
  () => import('@/components/global/preview-provider.component')
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(lora.variable, raleway.variable)}>
        {draftMode().isEnabled ? (
          <PreviewProvider token={token}>{children}</PreviewProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
