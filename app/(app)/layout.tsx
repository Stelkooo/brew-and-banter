import Footer from '@/components/global/footer.component';
import Header from '@/components/global/header/header.component';
import { sanityFetch } from '@/sanity/lib/fetch';
import { siteQuery } from '@/sanity/lib/queries';
import { TSiteSettings } from '@/types';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await sanityFetch<TSiteSettings>({
    query: siteQuery,
    tags: ['site'],
  });

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header header={site.header} />
      <main className="flex-1">{children}</main>
      <Footer footer={site.footer} />
      <div id="portal" />
    </div>
  );
}
