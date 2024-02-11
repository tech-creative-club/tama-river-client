import React from 'react';
import SummaryCardType from '@/types/SummaryCardType';
import Link from 'next/link';
import { Label } from './Label';

interface SummaryCardProps {
  prop: SummaryCardType;
  pulse?: boolean;
  desktop?: boolean; // is Desktop
}

export const SummaryCard = ({ prop, pulse = false, desktop = false }: SummaryCardProps) => {
  const formattedDate = new Date(prop.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  if (desktop) {
    return DesktopSummaryCard(prop, formattedDate, pulse);
  }

  return (
    <Link href={typeof prop !== undefined ? prop.url : 'http://localhost:3000'} legacyBehavior>
      <div
        className={`my-4 flex w-full cursor-pointer justify-center space-x-3 bg-white px-5 pt-4 ${pulse && 'animate-pulse'}`}
      >
        <div className="flex w-full max-w-md flex-row">
          <div className="m-1 h-20 w-28 rounded bg-zinc-200"></div>
          <div className="m-1 flex w-full flex-1 flex-col space-y-1.5 truncate">
            {pulse ? (
              <div className="h-6 w-full animate-pulse rounded bg-zinc-200"></div>
            ) : (
              <Label
                innerText={prop.name}
                size="primary"
                weight="semibold"
                className="w-full overflow-hidden truncate text-left text-zinc-900"
              />
            )}

            {pulse ? (
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
  );
};

const DesktopSummaryCard = (prop: SummaryCardType, formattedDate: string, pulse: boolean) => {
  return (
    <div className="m-5">
      <div className="aspect-video w-full rounded bg-zinc-200"></div>
      {pulse ? (
        <div className="h-6 w-full animate-pulse rounded bg-zinc-200"></div>
      ) : (
        <Label
          innerText={prop.name}
          size="primary"
          weight="semibold"
          className="w-full overflow-hidden truncate text-left text-zinc-900"
        />
      )}

      {pulse ? (
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
  );
};
