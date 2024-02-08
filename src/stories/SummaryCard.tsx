import React from 'react';
import SummaryCardType from '@/types/SummaryCardType';
import Link from 'next/link';
import { Label } from './Label';

interface SummaryCardProps {
  prop: SummaryCardType;
  pulse?: boolean;
}

export const SummaryCard = ({ prop, pulse = false }: SummaryCardProps) => {
  const formattedDate = new Date(prop.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <Link href={typeof prop !== undefined ? prop.url : 'http://localhost:3000'} legacyBehavior>
      <div className={`flex w-full justify-center space-x-3 bg-white p-5 py-4 ${pulse && 'animate-pulse'}`}>
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
