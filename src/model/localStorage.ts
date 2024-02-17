'use client';

export function getFavorite(): string[] {
  // TODO:もっとかっこいい書き方があるはず
  const favorites : string | null = localStorage.getItem('favorite');
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
}

export function setFavorite(url: string ): void {
  const favorites = getFavorite();
  //重複チェック
  if (favorites) {
    if (favorites.includes(url)) {
      // TODO:adhocな書き方なのでじき直す
      return;
    }
  } else {
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
