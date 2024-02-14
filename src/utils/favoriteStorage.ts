export default function favoriteStorage(id: string) {
  const key = 'favorite';
  const favorites = localStorage.getItem(key);
  if (favorites) {
    const parsed = JSON.parse(favorites);
    if (parsed.includes(id) === false) {
      const parsedFavorites = JSON.parse(favorites);
      parsedFavorites.push(id);
      localStorage.setItem(key, JSON.stringify(parsedFavorites));
    }
  } else {
    localStorage.setItem(key, JSON.stringify([id]));
  }
}

export function removeFavoriteStorage(id: string) {
  const key = 'favorite';
  const favorites = localStorage.getItem(key);
  if (favorites) {
    const parsed = JSON.parse(favorites);
    const filtered = parsed.filter((item: string) => item !== id);
    localStorage.setItem(key, JSON.stringify(filtered));
  }
}

export function getFavoriteStorage() {
  const key = 'favorite';
  const favorites = localStorage.getItem(key);
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
}
