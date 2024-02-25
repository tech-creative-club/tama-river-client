'use client';

import React from 'react';
import { Items } from '@/components/Items';
import { tv } from 'tailwind-variants';
import useIsDesktop from '@/utils/useIsDesktop';
import { Noto_Sans_JP } from 'next/font/google';
import { Label } from '@/components/common/Label';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const footer = tv({
  base: `flex w-full justify-center border-t border-border p-4`,
  variants: {
    isDesktop: {
      true: 'hidden',
      false: 'fixed bottom-0',
    },
  },
});

interface FooterProps {
  path?: string;
  className?: string;
}

const year = new Date().getFullYear();

export const Footer = ({ path, className }: FooterProps) => {
  const isDesktop = useIsDesktop();
  className = `${className} ${NotoSansJP.className}`;

  return (
    <>
      <footer className={footer({ className, isDesktop })}>
        <div className="flex w-full max-w-sm justify-between">
          <Items />
        </div>
      </footer>
      <footer>
        {/* Copylight */}
        <div className={`${isDesktop ? 'flex' : 'hidden'} justify-start p-6 px-5`}>
          <Label variant="small">{`© ${year} タマリバ v0.1.0`}</Label>
        </div>
      </footer>
    </>
  );
};
