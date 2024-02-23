import { KVNamespace } from '@cloudflare/workers-types';
import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { Items } from './types/items';

type Bindings = {
  TAMARIVER_KV: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

const validator = zValidator(
  'json',
  z.object({
    title: z.string(),
    sport: z.array(z.string()),
    tag: z.object({
      name: z.string(),
    }),
    date: z.string(),
    url: z.string(),
    image_url: z.string(),
    location: z.object({
      name: z.string(),
      address: z.string(),
      capacity: z.union([z.string(), z.number()]),
    }),
  })
);

app.get('/', async (c) => {
  return c.text('Hello, world!');
});

app.post('/api/items', validator, async (c) => {
  try {
    const { title, sport, tag, date, url, image_url, location } = (await c.req.json()) as Items;

    const data = JSON.stringify({ title, sport, tag, date, url, image_url, location });
    try {
      const key = `url::${url}`;
      await c.env.TAMARIVER_KV.put(key, data);
      return c.json({ success: true });
    } catch (error) {
      return c.json({ error: 'Internal server error' }, { status: 500 });
    }
  } catch (error) {
    return c.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }
});

app.get('/api/items', async (c) => {
  try {
    const items: Items[] = [];
    const { keys } = await c.env.TAMARIVER_KV.list({ prefix: 'url::' });
    for (const key of keys) {
      const value = await c.env.TAMARIVER_KV.get(key.name);
      if (value !== null) {
        items.push(JSON.parse(value));
      }
    }
    return c.json(items);
  } catch (error) {
    return c.json({ error: 'Internal server error' }, { status: 500 });
  }
});

// TODO: GET endpoint /api/itemsで記事情報のkv全件取得(key prefixが "url" であるものを取得する)

// TODO: GET endpoint /api/image/?url=...で画像を取得するAPIを作成
// (enhance) (e.g. /api/image/?url=example.com/image.png のようなクエリパラメータを受け取り、BASE64で返す)
// TODO: POST endpoint /api/image で画像をアップロードするAPIを作成
// (enhance) (e.g. keyは image::example.com/image.png のようにし、POSTデータでBASE64文字列を送信し、BASE64で保存する)

export default app;