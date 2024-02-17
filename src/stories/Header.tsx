import React from 'react';
import { Label } from './Label';
import { tv } from 'tailwind-variants';
import { Items } from './Items';

import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const footer = tv({
  base: `flex w-full justify-center border-b border-border py-4`,
  variants: {
    desktop: {
      true: `px-5`,
    },
  },
});

interface FooterProps {
  title?: string;
  fixed?: boolean;
  className?: string;
  desktop?: boolean;
}

export const Header = ({ title, fixed, className, desktop = false }: FooterProps) => (
  <header
    className={`${footer({ className: `${fixed && 'fixed top-0'} ${className}`, desktop })} ${NotoSansJP.className}`}
  >
    <div className="flex w-full max-w-sm justify-between p-1 md:max-w-full">
      <Label variant="large">{title ?? 'たまりば'}</Label>
      {desktop && (
        <div className="flex">
          <Items hideIcon={true} />
        </div>
      )}
    </div>
  </header>
);
