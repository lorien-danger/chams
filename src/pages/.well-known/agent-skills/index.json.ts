import type { APIRoute } from 'astro';

const index = {
  $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
  skills: [
    {
      name: 'chams-catalog',
      type: 'skill-md',
      description: "Use Cham's public catalog, API documentation, and wholesale contact discovery resources.",
      url: 'https://www.chams.com.au/.well-known/agent-skills/chams-catalog/SKILL.md',
      digest: 'sha256:fde84884f86bcfdff4578cbd2986800db6a9951aff449ede7321a9e57d0c2996'
    }
  ]
};

export const GET: APIRoute = () => new Response(JSON.stringify(index, null, 2), {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});
