import React from 'react';
import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="p-5">
      <div
        className={`flex w-full space-x-5 rounded-md border border-border bg-white p-5 text-justify ${NotoSansJP.className}`}
      >
        {children}
      </div>
    </div>
  );
};
