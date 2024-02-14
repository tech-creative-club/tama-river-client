'use client';

const key = 'apiendpoint';

export default async function fetchEvents() {
  const apiendpoint = localStorage.getItem(key);
  if (apiendpoint) {
    const parsed = JSON.parse(apiendpoint);
    const fetchPromises = parsed.map((url: string) => fetch(url).then((res) => res.json()));
    fetchPromises.push(fetch('/api/events').then((res) => res.json()));
    return Promise.all(fetchPromises);
  } else {
    const data = fetch('/api/events').then((res) => res.json());
    localStorage.setItem(key, JSON.stringify(['/api/events']));
    return data;
  }
}

export function addEventAPIEndpoint(url: string) {
  const apiendpoint = localStorage.getItem(key);
  if (apiendpoint) {
    const parsed = JSON.parse(apiendpoint);
    if (parsed.includes(url) === false) {
      const parsedApiendpoint = JSON.parse(apiendpoint);
      parsedApiendpoint.push(url);
      localStorage.setItem(key, JSON.stringify(parsedApiendpoint));
    }
  } else {
    localStorage.setItem(key, JSON.stringify([url]));
  }
}

export function removeEventAPIEndpoint(url: string) {
  const apiendpoint = localStorage.getItem(key);
  if (apiendpoint) {
    const parsed = JSON.parse(apiendpoint);
    const filtered = parsed.filter((item: string) => item !== url);
    localStorage.setItem(key, JSON.stringify(filtered));
  }
}
