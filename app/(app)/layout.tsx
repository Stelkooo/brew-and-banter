import Header from '@/components/global/header/header.component';
import { getSiteSettings } from '@/sanity/lib/fetch';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSiteSettings();

  return (
    <>
      <Header header={site.header} />
      <main>{children}</main>
      <div id="portal" />
    </>
  );
}
