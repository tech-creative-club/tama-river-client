import React from 'react';
import Home from '@/components/icons/Home';
import Search from '@/components/icons/Search';
import Add from '@/components/icons/Add';
import Favorite from '@/components/icons/Favorite';
import History from '@/components/icons/History';
import { Label } from './Label';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

const itemsStyle = tv({
  base: `flex w-8 flex-col items-center space-y-1`,
  variants: {
    desktop: {
      true: `w-fit flex-row`,
    },
  },
});

interface ItemsProps {
  desktop?: boolean;
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
] as Items[];

export const Items = ({ desktop = false }: ItemsProps) => {
  return (
    <>
      {items.map((item, index) => (
        <Link key={index} className="cursor-pointer p-3" href={item.link}>
          <div className={itemsStyle({ desktop })}>
            {desktop === false && item.icon}
            <Label innerText={item.label} size={desktop ? 'secondary' : 'quaternary'} weight="semibold" />
          </div>
        </Link>
      ))}
    </>
  );
};
