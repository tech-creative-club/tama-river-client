import React from 'react';
import Home from '@/components/icons/Home';
import Search from '@/components/icons/Search';
import Add from '@/components/icons/Add';
import Favorite from '@/components/icons/Favorite';
import History from '@/components/icons/History';
import { Label } from './Label';
import { tv } from 'tailwind-variants';

import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const footer = tv({
  base: `mt-5 flex w-full justify-center space-x-9 border-t border-border pb-6`,
});

interface FooterProps {
  path?: string;
  fixed?: boolean;
  className?: string;
}

const icons = [
  { icon: <Home />, label: 'ホーム' },
  { icon: <Search />, label: '検索' },
  { icon: <Add />, label: '追加' },
  { icon: <Favorite />, label: 'いいね' },
  { icon: <History />, label: '履歴' },
];

export const Footer = ({ path, fixed, className }: FooterProps) => (
  <footer
    className={`${footer({ className: `${fixed && 'fixed bottom-0'} ${className}` })} ${NotoSansJP.className}`}
  >
    {icons.map((item, index) => (
      <button key={index} className="p-3">
        <div className="flex w-6 flex-col space-y-1">
          {item.icon}
          <Label innerText={item.label} size="quinary" weight="semibold" />
        </div>
      </button>
    ))}
  </footer>
);
