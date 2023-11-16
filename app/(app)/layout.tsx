import Footer from '@/components/global/footer.component';
import Header from '@/components/global/header/header.component';
import { getSiteSettings } from '@/sanity/lib/fetch';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSiteSettings();

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header header={site.header} />
      <main className="flex-1">{children}</main>
      <Footer footer={site.footer} />
      <div id="portal" />
    </div>
  );
}
