const SITE_URL = 'https://www.chams.com.au';

const DISCOVERY_LINKS = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</api/openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</docs/api/>; rel="service-doc"; type="text/html"',
  '</auth.md>; rel="describedby"; type="text/markdown"'
].join(', ');

const CONTENT_TYPES = new Map([
  ['/.well-known/api-catalog', 'application/linkset+json; charset=utf-8'],
  ['/.well-known/agent-skills/index.json', 'application/json; charset=utf-8'],
  ['/.well-known/mcp/server-card.json', 'application/json; charset=utf-8'],
  ['/.well-known/oauth-authorization-server', 'application/json; charset=utf-8'],
  ['/.well-known/openid-configuration', 'application/json; charset=utf-8'],
  ['/.well-known/oauth-protected-resource', 'application/json; charset=utf-8'],
  ['/auth.md', 'text/markdown; charset=utf-8'],
  ['/api/openapi.json', 'application/openapi+json; charset=utf-8'],
  ['/api/products.json', 'application/json; charset=utf-8'],
  ['/api/status.json', 'application/json; charset=utf-8'],
  ['/sitemap.xml', 'application/xml; charset=utf-8']
]);

const HOME_MARKDOWN = `# Cham's Small Meats & Preservatives

Family-owned smallgoods manufacturer in Lismore, NSW, producing traditional cured meats, preserved goods, and food-grade preservatives since 1987.

## Key pages

- Products: ${SITE_URL}/products/
- About: ${SITE_URL}/about/
- Community: ${SITE_URL}/community/
- Contact: ${SITE_URL}/contact/
- API documentation: ${SITE_URL}/docs/api/

## Agent discovery

- API catalog: ${SITE_URL}/.well-known/api-catalog
- OpenAPI description: ${SITE_URL}/api/openapi.json
- Product catalog: ${SITE_URL}/api/products.json
- Auth metadata: ${SITE_URL}/auth.md

## Wholesale contact

- Phone: +61 2 6621 4488
- Email: office@chams.com.au
- Enquiries: ${SITE_URL}/contact/
`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const accept = request.headers.get('Accept') || '';

    if ((url.pathname === '/' || url.pathname === '/index.html') && accept.includes('text/markdown')) {
      return new Response(HOME_MARKDOWN, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'x-markdown-tokens': String(Math.ceil(HOME_MARKDOWN.length / 4)),
          Link: DISCOVERY_LINKS,
          Vary: 'Accept'
        }
      });
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);

    if (url.pathname === '/' || url.pathname === '/index.html') {
      headers.set('Link', DISCOVERY_LINKS);
      headers.append('Vary', 'Accept');
    }

    const contentType = CONTENT_TYPES.get(url.pathname);
    if (contentType) {
      headers.set('Content-Type', contentType);
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};
