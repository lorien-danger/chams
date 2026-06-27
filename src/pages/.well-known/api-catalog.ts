import type { APIRoute } from 'astro';

const catalog = {
  linkset: [
    {
      anchor: 'https://www.chams.com.au/api/products.json',
      'service-desc': [
        {
          href: 'https://www.chams.com.au/api/openapi.json',
          type: 'application/openapi+json'
        }
      ],
      'service-doc': [
        {
          href: 'https://www.chams.com.au/docs/api/',
          type: 'text/html'
        }
      ],
      status: [
        {
          href: 'https://www.chams.com.au/api/status.json',
          type: 'application/json'
        }
      ]
    }
  ]
};

export const GET: APIRoute = () => new Response(JSON.stringify(catalog, null, 2), {
  headers: {
    'Content-Type': 'application/linkset+json; charset=utf-8'
  }
});
