import type { APIRoute } from 'astro';
import { PRODUCTS } from '../products.js';
import { NEWS } from '../news.js';

const SITE_URL = 'https://www.chams.com.au';

const staticPaths = [
  '/',
  '/about/',
  '/products/',
  '/community/',
  '/news/',
  '/contact/',
  '/docs/api/'
];

const urls = [
  ...staticPaths,
  ...PRODUCTS.filter((product) => product.slug !== 'sodium-nitrite').map((product) => `/products/${product.slug}/`),
  ...NEWS.map((post) => `/news/${post.slug}/`)
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
  </url>`).join('\n')}
</urlset>
`;

export const GET: APIRoute = () => new Response(xml, {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8'
  }
});
