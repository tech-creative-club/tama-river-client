'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Label } from './Label';
import Favorite from '@/components/icons/Favorite';
import FavoriteActive from '@/components/icons/FavoriteActive';
import { getFavorite, removeFavorite, setFavorite } from '@/model/localStorage';

export type SummaryCardType = {
  title: string;
  sport: string[];
  tag: { name: string }[];
  date: string;
  url: string;
  image_url?: string;
  location: {
    name: string;
    address: string;
    capacity: number | string;
  };
};

interface SummaryCardProps {
  prop: SummaryCardType;
  loading?: boolean;
  desktop?: boolean;
}
// TODO: localstorage系の処理関数を変える
// TODO: FavoriteIconをbooleanで切り替えられるようなcomponentにする
// TODO: functionで書き直す
// TODO: image_urlを指定する
export const SummaryCard = ({ prop, loading = false, desktop = false }: SummaryCardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(getFavorite().includes(prop.url));
  const formattedDate = new Date(prop.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  if (desktop) {
    return DesktopSummaryCard(prop, formattedDate, loading);
  }
  // TODO: もっとマシな名前をつける
  const favorite = (url: string) => {
    if (isFavorite) {
      removeFavorite(url);
      setIsFavorite(false);
    } else {
      setFavorite(url);
      setIsFavorite(true);
    }
  };

  return (
    <div className="relative h-fit w-full">
      <Link href={prop ? prop.url : 'http://localhost:3000'} legacyBehavior>
        <div
          className={`my-4 flex w-full cursor-pointer flex-col justify-center space-x-3 bg-white px-5 pt-4 ${loading && 'animate-pulse'}`}
        >
          <div className="flex w-full max-w-md flex-row">
            {/* TODO: pulse false時はbgを変える */}
            <div className="m-1 h-20 w-28 rounded bg-zinc-200">
              {!loading ? (
                prop.image_url ? (
                  <Image src={prop.image_url} width={200} height={200} alt="photos" />
                ) : (
                  <p>No Image</p>
                )
              ) : (
                <></>
              )}
            </div>
            <div className="m-1 flex w-full flex-1 flex-col space-y-1.5 truncate">
              {/* TODO: ここloadingでロジック統一したい。 */}
              {loading ? (
                <div className="h-6 w-full animate-pulse rounded bg-zinc-200"></div>
              ) : (
                <Label
                  innerText={prop.title}
                  size="primary"
                  weight="semibold"
                  className="w-full overflow-hidden truncate text-left text-zinc-900"
                />
              )}
              {loading ? (
                <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-200"></div>
              ) : (
                <Label
                  innerText={formattedDate}
                  size="tertiary"
                  weight="normal"
                  className="w-full text-left text-zinc-500"
                />
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-1 right-0 flex flex-row px-5">
        {/* TODO: ここ、favorite側でclickロジックを持っているので、3項演算子にする意味ない */}
        {isFavorite ? (
          <button onClick={() => favorite(prop.url)}>
            <FavoriteActive />
          </button>
        ) : (
          <button onClick={() => favorite(prop.url)}>
            <Favorite />
          </button>
        )}
      </div>
    </div>
  );
};

// TODO: ここもfunctionで書き直す
// TODO: DesktopでComponent分けるのバグの温床なのでなんとか考える(SOLID原則のOCP違反)
const DesktopSummaryCard = (prop: SummaryCardType, formattedDate: string, loading: boolean) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(getFavorite().includes(prop.url));

  const favorite = (url: string) => {
    console.log(url);
    if (isFavorite) {
      removeFavorite(url);
      setIsFavorite(false);
    } else {
      setFavorite(url);
      setIsFavorite(true);
    }
  };

  return (
    <div className="relative w-full p-5">
      <div className="aspect-video w-full rounded bg-zinc-200"></div>
      {loading ? (
        <div className="h-6 w-full animate-pulse rounded bg-zinc-200"></div>
      ) : (
        <Label
          innerText={prop.title}
          size="primary"
          weight="semibold"
          className="w-full overflow-hidden truncate text-left text-zinc-900"
        />
      )}

      {loading ? (
        <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-200"></div>
      ) : (
        <Label
          innerText={formattedDate}
          size="tertiary"
          weight="normal"
          className="w-full text-left text-zinc-500"
        />
      )}
      <div className="absolute bottom-5 right-5 flex flex-row">
        {isFavorite ? (
          <button onClick={() => favorite(prop.url)}>
            <FavoriteActive />
          </button>
        ) : (
          <button onClick={() => favorite(prop.url)}>
            <Favorite />
          </button>
        )}
      </div>
    </div>
  );
};
