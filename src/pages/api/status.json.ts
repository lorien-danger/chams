import type { APIRoute } from 'astro';

export const GET: APIRoute = () => new Response(JSON.stringify({
  status: 'ok',
  service: 'chams-public-catalog',
  homepage: 'https://www.chams.com.au/'
}, null, 2), {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});
