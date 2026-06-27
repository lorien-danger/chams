import type { APIRoute } from 'astro';

export const GET: APIRoute = () => new Response(JSON.stringify({ keys: [] }, null, 2), {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});
