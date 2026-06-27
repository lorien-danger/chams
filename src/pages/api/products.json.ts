import type { APIRoute } from 'astro';
import { PRODUCTS } from '../../products.js';

export const GET: APIRoute = () => {
  const products = PRODUCTS.map(({ cat, slug, name, sub, weight, batch, description, ingredients, formats, storage, curing, origin }) => ({
    category: cat,
    slug,
    name,
    summary: sub,
    weight,
    batch,
    description,
    ingredients,
    formats,
    storage,
    curing,
    origin,
    url: `https://www.chams.com.au/products/${slug}/`
  }));

  return new Response(JSON.stringify({ products }, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
};
