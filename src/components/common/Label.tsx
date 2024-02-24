'use client';

import React from 'react';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import { tv } from 'tailwind-variants';

const inter = Inter({ subsets: ['latin'] });
const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const makeClassLabel = tv({
  variants: {
    tag: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7',
      span: '',
    },
    variant: {
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
  children?: string;
  className?: string; // user defined Tailwind CSS class
  tag?: tagType; //HTML tag
  variant?: variantType; // Tailwind css variant
  border?: boolean;
}

type tagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

type variantType = 'blockquote' | 'inline-code' | 'lead' | 'large' | 'small' | 'muthed';

export function Label(props: LabelProps) {
  const { children, className = '', tag = 'p', variant, border = tag === 'h2' } = props;
  const HTMLTag = tag as keyof JSX.IntrinsicElements;
  const styleClass = `${className} ${inter.className} ${NotoSansJP.className} ${makeClassLabel({ tag: tag, variant: variant, border: border })}`;
  return <HTMLTag className={styleClass}>{children}</HTMLTag>;
}
