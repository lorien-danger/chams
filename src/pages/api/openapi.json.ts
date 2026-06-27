import type { APIRoute } from 'astro';

const spec = {
  openapi: '3.1.0',
  info: {
    title: "Cham's Public Catalog API",
    version: '1.0.0',
    description: "Public product catalog metadata for Cham's Small Meats & Preservatives."
  },
  servers: [
    {
      url: 'https://www.chams.com.au'
    }
  ],
  paths: {
    '/api/products.json': {
      get: {
        summary: 'List public products',
        operationId: 'listProducts',
        responses: {
          '200': {
            description: 'Public product catalog',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['products'],
                  properties: {
                    products: {
                      type: 'array',
                      items: {
                        type: 'object',
                        required: ['category', 'slug', 'name', 'summary', 'url'],
                        properties: {
                          category: { type: 'string' },
                          slug: { type: 'string' },
                          name: { type: 'string' },
                          summary: { type: 'string' },
                          weight: { type: 'string' },
                          batch: { type: 'string' },
                          description: { type: 'string' },
                          ingredients: { type: 'string' },
                          formats: {
                            type: 'array',
                            items: { type: 'string' }
                          },
                          storage: { type: 'string' },
                          curing: { type: 'string' },
                          origin: { type: 'string' },
                          url: {
                            type: 'string',
                            format: 'uri'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/api/status.json': {
      get: {
        summary: 'Service status',
        operationId: 'getStatus',
        responses: {
          '200': {
            description: 'Static API status',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['status', 'service', 'homepage'],
                  properties: {
                    status: { type: 'string', enum: ['ok'] },
                    service: { type: 'string' },
                    homepage: {
                      type: 'string',
                      format: 'uri'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const GET: APIRoute = () => new Response(JSON.stringify(spec, null, 2), {
  headers: {
    'Content-Type': 'application/openapi+json; charset=utf-8'
  }
});
