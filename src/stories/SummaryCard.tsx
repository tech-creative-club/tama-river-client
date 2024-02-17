'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Label } from './Label';
import Favorite from '@/components/icons/Favorite';
import FavoriteActive from '@/components/icons/FavoriteActive';
import { getFavorite, removeFavorite, setFavorite } from '@/model/localStorage';
import SampleImage from '@/stories/assets/park.jpg';

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

// TODO: FavoriteIconをbooleanで切り替えられるようなcomponentにする
function MobileSummaryCard(props: SummaryCardProps) {
  const { prop, loading } = props;
  const [isFavorite, setIsFavorite] = useState<boolean>(getFavorite().includes(prop.url));
  const formattedDate = new Date(prop.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
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
            <div className="relative m-1 h-20 w-28 overflow-hidden rounded bg-zinc-200">
              {!loading ? (
                prop.image_url ? (
                  // TODO: ちゃんとした画像が入るようにする
                  <Image
                    src={SampleImage.src}
                    width={200}
                    height={200}
                    alt="photos"
                    className="absolute left-1/2 top-1/2 h-20 w-fit -translate-x-1/2 -translate-y-1/2 object-cover"
                  />
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
                <Label type="large">{prop.title}</Label>
              )}
              {loading ? (
                <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-200"></div>
              ) : (
                <Label type="small">{formattedDate}</Label>
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
}

// TODO: DesktopでComponent分けるのバグの温床なのでなんとか考える(SOLID原則のOCP違反)
function DesktopSummaryCard(props: SummaryCardProps) {
  const { prop, loading } = props;
  const [isFavorite, setIsFavorite] = useState<boolean>(getFavorite().includes(prop.url));
  const formattedDate = new Date(prop.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

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
        <Label type="large">{prop.title}</Label>
      )}

      {loading ? (
        <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-200"></div>
      ) : (
        <Label type="small">{formattedDate}</Label>
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
}

export function SummaryCard(props: SummaryCardProps) {
  const { desktop } = props;
  return desktop ? <DesktopSummaryCard {...props} /> : <MobileSummaryCard {...props} />;
}
