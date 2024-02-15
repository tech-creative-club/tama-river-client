'use client';

import SummaryCard from '@/types/SummaryCardType';
const key = 'apiendpoint';

export default async function fetchEvents(): Promise<SummaryCard[]> {
  const apiendpoint = localStorage.getItem(key); // ["http://localhost:3000", "http://localhost:3000"]みたいな感じで入ってる
  const endpoints = JSON.parse(apiendpoint ?? '[]');
  const articles = endpoints.map( async (url: string) => { await (await fetch(url)).json()}) as SummaryCard[][];
  if (articles.length === 0) {
    // 本来、lengthが0の場合は何も返さないのが正しいが、今回はデバッグ用途のため、デフォルトでデータを返す
    const response: SummaryCard[] = await (await fetch('/api/events')).json();
    return response;
  }
  else {
    return articles.flat();
  }
}

export function addEventAPIEndpoint(url: string): void {
  const apiendpoint = localStorage.getItem(key);
  if (apiendpoint) {
    const parsed: string[] = JSON.parse(apiendpoint);
    if (!parsed.includes(url)) {
      const parsedApiendpoint = JSON.parse(apiendpoint);
      parsedApiendpoint.push(url);
      localStorage.setItem(key, JSON.stringify(parsedApiendpoint));
    }
  } else {
    localStorage.setItem(key, JSON.stringify([url]));
  }
}

export function removeEventAPIEndpoint(url: string): void {
  const apiendpoint = localStorage.getItem(key);
  if (apiendpoint) {
    const parsed = JSON.parse(apiendpoint);
    const filtered = parsed.filter((item: string) => item !== url);
    localStorage.setItem(key, JSON.stringify(filtered));
  }
}
