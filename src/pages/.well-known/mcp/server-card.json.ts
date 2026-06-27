import type { APIRoute } from 'astro';

const serverCard = {
  schemaVersion: '2025-06-18',
  serverInfo: {
    name: 'chams-public-site',
    version: '1.0.0',
    description: "Public discovery card for Cham's Small Meats & Preservatives."
  },
  transport: {
    type: 'http',
    endpoint: 'https://www.chams.com.au/mcp'
  },
  capabilities: {
    tools: {
      listChanged: false,
      tools: [
        {
          name: 'search_products',
          description: "Search Cham's public product catalog."
        },
        {
          name: 'get_wholesale_contact',
          description: "Return Cham's public wholesale contact details."
        }
      ]
    },
    resources: {
      listChanged: false,
      resources: [
        {
          uri: 'https://www.chams.com.au/api/products.json',
          name: 'Public product catalog',
          mimeType: 'application/json'
        }
      ]
    },
    prompts: {}
  }
};

export const GET: APIRoute = () => new Response(JSON.stringify(serverCard, null, 2), {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});
