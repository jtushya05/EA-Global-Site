import { MetadataRoute } from 'next';
import { siteConfig } from './metadata.config';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/blog',
    '/testimonials',
    '/services',
    '/book',
    '/career-counselling/class-8-9',
    '/career-counselling/class-10-12',
    '/career-counselling/college-graduates',
    '/college-selection/overseas',
    '/college-selection/india',
    '/institutions/career-guidance',
    '/institutions/book-expert',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}