import './globals.css';
import { Lora, Raleway } from 'next/font/google';

import { cn } from '@/lib/utils';

// Serif Font Import
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
// Sans Serif Font Import
const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-raleway',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(lora.variable, raleway.variable)}>{children}</body>
    </html>
  );
}
