'use client';

import React from 'react';
import { Label } from './Label';
import { tv } from 'tailwind-variants';
import { Items } from './Items';
import useIsDesktop from '@/utils/useIsDesktop';

import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const footer = tv({
  base: `flex w-full justify-center border-b border-border py-4`,
  variants: {
    isDesktop: {
      true: `px-5`,
    },
  },
});

interface FooterProps {
  title?: string;
  fixed?: boolean;
  className?: string;
}

export const Header = ({ title, fixed, className }: FooterProps) => {
  const isDesktop = useIsDesktop();

  return (
    <header
      className={`${footer({ className: `${fixed && 'fixed top-0'} ${className}`, isDesktop })} ${NotoSansJP.className}`}
    >
      <div className="flex w-full max-w-sm justify-between p-1 md:max-w-full">
        <Label variant="large">{title ?? 'たまりば'}</Label>
        {isDesktop && (
          <div className="flex">
            <Items hideIcon={true} />
          </div>
        )}
      </div>
    </header>
  );
};
