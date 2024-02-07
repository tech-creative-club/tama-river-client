import React from 'react';
import { Noto_Sans_JP } from 'next/font/google';
import Text from '@/components/Text';
import { twMerge } from 'tailwind-merge';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const base = 'text-center text-sm font-semibold text-zinc-900 text-black';

interface LabelProps {
  innerText: string;
  className?: string;
}

export const Label = ({ innerText, className }: LabelProps) => {
  const containsAlphabet = /[a-zA-Z]/.test(innerText);

  return (
    <div className={`${twMerge(base, className)} ${NotoSansJP.className}`}>
      {containsAlphabet ? <Text>{innerText}</Text> : innerText}
    </div>
  );
};
