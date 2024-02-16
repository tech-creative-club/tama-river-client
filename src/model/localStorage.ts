'use client';

export function getFavorite(): string[] {
  const favorites : string | null = localStorage.getItem('favorite');
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
}

export function setFavorite({url}: {url:string}): void {
  const favorites = getFavorite();
  //重複チェック
  if (favorites) {
    if (favorites.includes(url)) {
      // adhocな書き方だが一旦これで凌ぐ
      return;
    }
  } else {
    localStorage.setItem('favorite', JSON.stringify([...favorites, url]));
  }
}

export function removeFavorite({url}: {url:string}): void {
  const favorites = getFavorite();
  if (favorites) {
    const filtered = favorites.filter((item: string) => item !== url);
    localStorage.setItem('favorite', JSON.stringify(filtered));
  }
}
