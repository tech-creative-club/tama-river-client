import React from 'react';
import { Label } from './Label';
import { tv } from 'tailwind-variants';

import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const footer = tv({
  base: `flex w-full justify-center border-b border-border py-4`,
});

interface FooterProps {
  title?: string;
  fixed?: boolean;
  className?: string;
}

export const Header = ({ title, fixed, className }: FooterProps) => (
  <header
    className={`${footer({ className: `${fixed && 'fixed top-0'} ${className}` })} ${NotoSansJP.className}`}
  >
    <div className="flex w-full max-w-sm justify-between p-1">
      <Label innerText={title ? title : 'たまりば'} size="primary" weight="medium" />
    </div>
  </header>
);