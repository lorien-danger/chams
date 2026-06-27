import type { APIRoute } from 'astro';

const metadata = {
  resource: 'https://www.chams.com.au',
  authorization_servers: ['https://www.chams.com.au'],
  scopes_supported: ['public_catalog.read'],
  bearer_methods_supported: ['header'],
  resource_documentation: 'https://www.chams.com.au/docs/api/'
};

export const GET: APIRoute = () => new Response(JSON.stringify(metadata, null, 2), {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});
