'use client';

export function getFavorite(): string[] {
  return JSON.parse(localStorage.getItem('favorite') ?? '[]');
}

export function setFavorite(url: string): void {
  const favorites = getFavorite();
  // 重複入力を避けるバリデーション
  if (!favorites.includes(url)) {
    overrideFavorites([...favorites, url]);
  }
}

export function removeFavorite(url: string): void {
  const favorites = getFavorite();
  if (favorites) {
    const filtered = favorites.filter((item: string) => item !== url);
    overrideFavorites(filtered);
  }
}

function overrideFavorites(favorites: string[]): void {
  localStorage.setItem('favorite', JSON.stringify(favorites));
}
