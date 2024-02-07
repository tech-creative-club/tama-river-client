import React from 'react';
import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div
      className={`flex w-fit min-w-80 cursor-pointer justify-center rounded-md border-2 border-zinc-900 bg-white ${NotoSansJP.className}`}
    >
      {children}
    </div>
  );
};
