'use client';

import SummaryCard from '@/types/SummaryCardType';
const key = 'apiendpoint';

export default async function fetchEvents(): Promise<SummaryCard[]> {
  const apiendpoint = localStorage.getItem(key);
  if (apiendpoint) {
    const parsed: string[] = apiendpoint ? JSON.parse(apiendpoint) : [];
    const data: SummaryCard[] = [];

    for (const url of parsed) {
      const response = await fetch(url);
      const json = await response.json();
      data.push(json as SummaryCard);
    }

    console.log('Key exists in localStorage', data);
    return data;
  } else {
    let data: SummaryCard[] = [];

    const response = await fetch('/api/events');
    const json = await response.json();
    data.push(json as SummaryCard);
    localStorage.setItem(key, JSON.stringify(['/api/events']));

    console.log('Key does not exist in localStorage', json);
    return data as SummaryCard[];
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
