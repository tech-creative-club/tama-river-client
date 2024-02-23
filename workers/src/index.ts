import { KVNamespace } from '@cloudflare/workers-types';
import { Hono } from 'hono';
import { Items } from './types/items';

type Bindings = {
  TAMARIVER_KV: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', async (c) => {
  return c.text('Hello, world!');
});

app.post('/api/items', async (c) => {
  try {
    const { title, sport, tag, date, url, image_url, location } = (await c.req.json()) as Items;
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
      try {
        await c.env.TAMARIVER_KV.put(url, data);
        return c.json({ success: true });
      } catch (error) {
        return c.json({ error: 'Internal server error' }, { status: 500 });
      }
    } else {
      return c.json({ error: 'Invalid request body format' }, { status: 400 });
    }
  } catch (error) {
    return c.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }
});

app.get('/api/items', async (c) => {
  try {
    const items: Items[] = [];
    const { keys } = await c.env.TAMARIVER_KV.list();
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
