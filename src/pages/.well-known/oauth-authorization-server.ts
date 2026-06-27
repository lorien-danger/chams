import type { APIRoute } from 'astro';

const metadata = {
  issuer: 'https://www.chams.com.au',
  authorization_endpoint: 'https://www.chams.com.au/contact/',
  token_endpoint: 'https://www.chams.com.au/contact/',
  jwks_uri: 'https://www.chams.com.au/.well-known/jwks.json',
  grant_types_supported: [],
  response_types_supported: [],
  scopes_supported: ['public_catalog.read'],
  service_documentation: 'https://www.chams.com.au/auth.md',
  agent_auth: {
    skill: 'auth.md',
    register_uri: 'https://www.chams.com.au/contact/',
    identity_types_supported: ['anonymous'],
    anonymous: {
      credential_types_supported: ['none'],
      claim_uri: 'https://www.chams.com.au/contact/'
    }
  }
};

export const GET: APIRoute = () => new Response(JSON.stringify(metadata, null, 2), {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});
