import { KVNamespace } from '@cloudflare/workers-types';
import { Hono } from 'hono';

type Bindings = {
  TAMARIVER_KV: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', async (c) => {
  return c.text('Hello, world!');
});

app.post('/api/items', async (c) => {
  try {
    const { title, sport, tag, date, url, image_url, location } = await c.req.json();

    if (
      typeof title === 'string' &&
      Array.isArray(sport) &&
      typeof tag === 'object' &&
      typeof tag.name === 'string' &&
      typeof date === 'string' &&
      typeof url === 'string' &&
      typeof image_url === 'string' &&
      typeof location === 'object' &&
      typeof location.name === 'string' &&
      typeof location.address === 'string' &&
      (typeof location.capacity === 'number' || typeof location.capacity === 'string')
    ) {
      const data = JSON.stringify({ title, sport, tag, date, url, image_url, location });
      await c.env.TAMARIVER_KV.put(title, data);
      return c.json({ success: true });
    } else {
      return c.json({ error: 'Invalid request body format' }, { status: 400 });
    }
  } catch (error) {
    return c.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }
});

export default app;
