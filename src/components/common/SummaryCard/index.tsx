'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Label } from '@/components/common/Label';
import Favorite from '@/components/icons/Favorite';
import { removeFavorite, setFavorite } from '@/model/localStorage';
import SampleImage from '@/stories/assets/park.jpg';
import { NoImage } from './NoImage';
import { Card } from '@mui/material';

export type SummaryCardProp = {
  title: string;
  sport: string[];
  tags: { name: string }[];
  date: string;
  url: string;
  image_url?: string;
  isFavorite?: boolean;
  location: {
    name: string;
    address: string;
    capacity: number | string;
  };
};

interface SummaryCardProps {
  prop: SummaryCardProp;
  loading?: boolean;
  desktop?: boolean;
}
//TODO: 現状、デスクトップ版とモバイル版でコンポーネントを分けているが、これだと2回ロードが走るため、非効率
function MobileSummaryCard(props: SummaryCardProps) {
  const { prop, loading } = props;
  const formattedDate = prop.date;
  const [isFavorite, setIsFavorite] = useState(prop.isFavorite ?? false);

  function ClickFavoriteButton(url: string) {
    isFavorite ? removeFavorite(url) : setFavorite(url);
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="relative h-fit w-full">
      <Link href={prop.url} legacyBehavior>
        <div
          className={`my-4 flex w-full cursor-pointer flex-col justify-center space-x-3 bg-white px-5 pt-4 ${loading && 'animate-pulse'}`}
        >
          <div className="flex w-full max-w-md flex-row">
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
                  <NoImage />
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
                <Label variant="small" tag="p" className='text-wrap'>{prop.title}</Label>
              )}
              {loading ? (
                <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-200"></div>
              ) : (
                <Label variant="small">{formattedDate + '更新'}</Label>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-1 right-0 flex flex-row px-5">
        <button onClick={() => ClickFavoriteButton(prop.url)}>
          <Favorite active={isFavorite} />
        </button>
      </div>
    </div>
  );
}

// TODO: DesktopでComponent分けるのバグの温床なのでなんとか考える(SOLID原則のOCP違反)
// TODO: Desktopの場合はカードのようにして表示したい。
function DesktopSummaryCard(props: SummaryCardProps) {
  const { prop, loading } = props;
  const formattedDate = prop.date;
  const [isFavorite, setIsFavorite] = useState(prop.isFavorite ?? false);

  function ClickFavoriteButton(url: string) {
    isFavorite ? removeFavorite(url) : setFavorite(url);
    setIsFavorite(!isFavorite);
  }

  return (
    <Card className="relative w-full p-5">
      <a href={prop.url} target="_blank">
        {loading ? (
          <div className="relative m-1 h-20 w-28 overflow-hidden rounded bg-zinc-200"></div>
        ) : prop.image_url ? (
          <Image
            src={SampleImage.src}
            width={200}
            height={200}
            alt="photos"
            className="relative m-1 h-20 w-28 overflow-hidden rounded"
          />
        ) : (
          <NoImage />
        )}
        {loading ? (
          <div className="h-6 w-full animate-pulse rounded bg-zinc-200"></div>
        ) : (
          <Label variant="large">{prop.title}</Label>
        )}

        {loading ? (
          <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-200"></div>
        ) : (
          <Label variant="small">{formattedDate + '更新'}</Label>
        )}
      </a>
      <div className="absolute bottom-5 right-5 flex flex-row">
        <button onClick={() => ClickFavoriteButton(prop.url)}>
          <Favorite active={isFavorite} />
        </button>
      </div>
    </Card>
  );
}

export function SummaryCard(props: SummaryCardProps) {
  const { desktop } = props;
  return desktop ? <DesktopSummaryCard {...props} /> : <MobileSummaryCard {...props} />;
}
