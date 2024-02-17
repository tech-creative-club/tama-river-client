'use client';

import React from 'react';
import { GeistSans } from 'geist/font/sans';
import { Noto_Sans_JP } from 'next/font/google';
import { tv } from 'tailwind-variants';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const label = tv({
  variants: {
    type: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      'inline-code': 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muthed: 'text-sm text-muted-foreground',
    },
    border: {
      true: 'border-b pb-2',
    },
  },
});

interface LabelProps {
  children?: React.ReactNode;
  className?: string;
  type?: labelType;
  border?: boolean;
}

type labelType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'blockquote'
  | 'inline-code'
  | 'lead'
  | 'large'
  | 'small'
  | 'muthed';

export const Label = ({ children, className, type = 'p', border }: LabelProps) => {
  const Tag = type as keyof JSX.IntrinsicElements;

  // If no border is specified and it is an h2, a border is automatically added
  if (typeof border === 'undefined') border = type === 'h2' ? true : false;

  return (
    <Tag className={`${label({ className, type, border })} ${GeistSans.className} ${NotoSansJP.className}`}>
      {children}
    </Tag>
  );
};
