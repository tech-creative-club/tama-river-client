import React from 'react';
import { Items } from './Items';
import { tv } from 'tailwind-variants';

import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const footer = tv({
  base: `flex w-full justify-center border-t border-border pb-6 pt-5`,
});

interface FooterProps {
  path?: string;
  fixed?: boolean;
  className?: string;
  desktop?: boolean;
}

export const Footer = ({ path, fixed, className, desktop = false }: FooterProps) => (
  <footer
    className={`${footer({ className: `${fixed && 'fixed bottom-0'} ${className} ${desktop && 'hidden'}` })} ${NotoSansJP.className}`}
  >
    <div className="flex w-full max-w-sm justify-between">
      <Items />
    </div>
  </footer>
);
