import React from 'react';
import Home from '@/components/icons/Home';
import Search from '@/components/icons/Search';
import Add from '@/components/icons/Add';
import Favorite from '@/components/icons/Favorite';
import History from '@/components/icons/History';
import { Label } from './Label';
import { tv } from 'tailwind-variants';
import Link from 'next/link';

import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const footer = tv({
  base: `flex w-full justify-center border-t border-border pb-6 pt-5`,
});

interface FooterProps {
  path?: string;
  fixed?: boolean;
  className?: string;
}

type Items = {
  icon: JSX.Element;
  label: string;
  link: string;
};

const items = [
  { icon: <Home />, label: 'ホーム', link: '/' },
  { icon: <Search />, label: '検索', link: '/search' },
  { icon: <Add />, label: '追加', link: '/add' },
  { icon: <Favorite />, label: 'いいね', link: '/favorite' },
  { icon: <History />, label: '履歴', link: '/history' },
] as Items[];

export const Footer = ({ path, fixed, className }: FooterProps) => (
  <footer
    className={`${footer({ className: `${fixed && 'fixed bottom-0'} ${className}` })} ${NotoSansJP.className}`}
  >
    <div className="flex w-full max-w-sm justify-between">
      {items.map((item, index) => (
        <Link key={index} className="cursor-pointer p-3" href={item.link}>
          <div className="flex w-6 flex-col items-center space-y-1">
            {item.icon}
            <Label innerText={item.label} size="quinary" weight="semibold" />
          </div>
        </Link>
      ))}
    </div>
  </footer>
);
