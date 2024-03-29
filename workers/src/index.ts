import { KVNamespace } from '@cloudflare/workers-types';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { Items, Data } from './types/items';

type Bindings = {
  TAMARIVER_KV: KVNamespace;
  POST_TOKEN: string;
};

const app = new Hono<{ Bindings: Bindings }>();

const archiveKeyPrefix = 'archive';

const validator = zValidator(
  'json',
  z.object({
    FQDN: z.string(),
    data: z.array(
      z.object({
        title: z.string(),
        sport: z.array(z.string().nullable()),
        tags: z.array(
          z.object({
            name: z.string(),
          }).nullable()
        ),
        date: z.string().nullable(),
        url: z.string(),
        image_url: z.string().nullable(),
        location: z.object({
          name: z.string().nullable(),
          address: z.string().nullable(),
          capacity: z.union([z.string(), z.number()]).nullable(),
        }),
      }).nullable()
    ),
  })
);

app.use(
  '/api/items/post',
  cors({
    origin: ['https://stg.tama-river.pages.dev', 'https://tama-river.pages.dev', 'localhost'],
    allowHeaders: ['Content-Type', 'X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
  })
);

app.get('/', async (c) => {
  return c.text('Hello, world!');
});

app.post('/api/items/post', validator, async (c) => {
  const token = c.req.header('X-API-TOKEN');
  if (token !== c.env.POST_TOKEN) {
    return c.json({ error: 'access forbidden' }, { status: 403 });
  }
  try {
    const { FQDN, data } = (await c.req.json()) as Items;
    const stringData = JSON.stringify(data);
    try {
      const key = `${archiveKeyPrefix}::${FQDN}`;
      await c.env.TAMARIVER_KV.put(key, stringData);
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
    const { keys } = await c.env.TAMARIVER_KV.list({ prefix: archiveKeyPrefix });
    for (const key of keys) {
      const value = await c.env.TAMARIVER_KV.get(key.name) as string | null;
      const valueJson = JSON.parse(value ?? "[]") as Data[];
      items.push({ FQDN: key.name.replace(`${archiveKeyPrefix}::`, ''), data: valueJson });
    }
    return c.json(items);
  } catch (error) {
    return c.json({ error: 'Internal server error' }, { status: 500 });
  }
});

// TODO: GET endpoint /api/image/?url=...で画像を取得するAPIを作成
// (enhance) (e.g. /api/image/?url=example.com/image.png のようなクエリパラメータを受け取り、BASE64で返す)
// TODO: POST endpoint /api/image で画像をアップロードするAPIを作成
// (enhance) (e.g. keyは image::example.com/image.png のようにし、POSTデータでBASE64文字列を送信し、BASE64で保存する)

export default app;
