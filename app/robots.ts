import { MetadataRoute } from 'next';

import { WEBSITE_HOST_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${WEBSITE_HOST_URL}/sitemap.xml`,
  };
}
