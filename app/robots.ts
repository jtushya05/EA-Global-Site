import { MetadataRoute } from 'next';
import { siteConfig } from './metadata.config';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}