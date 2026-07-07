import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/getting-started',
  '/api-reference',
  '/architecture',
  '/benchmarks',
  '/faq',
  '/contributing',
  '/updates',
  '/tutorials',
  '/tutorials/session-store',
  '/tutorials/cache-layer',
  '/tutorials/rate-limiting',
  '/tutorials/chat-app',
  '/tutorials/distributed-locking',
  '/tutorials/job-queue',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://solidis.vcms.io${route}`,
  }));
}
