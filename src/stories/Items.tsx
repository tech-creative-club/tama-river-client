// TODO: 名前が変。HeaderとFooterで使っているコンポーネントで、機能であることを示してほしい
// TODO: Story的にはHeaderとFooterをparamsで分けておきたい
import React from 'react';
import Home from '@/components/icons/Home';
import Search from '@/components/icons/Search';
import Add from '@/components/icons/Add';
import Favorite from '@/components/icons/Favorite';
import Setting from '@/components/icons/Setting';
import { Label } from './Label';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

const itemsStyle = tv({
  base: `flex w-8 flex-col items-center space-y-1`,
  variants: {
    hideIcon: {
      true: `w-fit flex-row`,
    },
  },
});

interface ItemsProps {
  hideIcon?: boolean;
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
  { icon: <Setting />, label: '設定', link: '/setting' },
] as Items[];

export const Items = ({ hideIcon = false }: ItemsProps) => {
  return (
    <>
      {items.map((item, index) => (
        <Link key={index} className="cursor-pointer p-3" href={item.link}>
          <div className={itemsStyle({ hideIcon })}>
            {hideIcon === false && item.icon}
            <Label variant="small">{item.label}</Label>
          </div>
        </Link>
      ))}
    </>
  );
};
