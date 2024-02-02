import React from 'react';
import Home from '@/components/icons/Home';
import Search from '@/components/icons/Search';
import Add from '@/components/icons/Add';
import Favorite from '@/components/icons/Favorite';
import History from '@/components/icons/History';

import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

interface FooterProps {
  path?: string;
  fixed?: boolean;
}

export const Footer = ({ path, fixed }: FooterProps) => (
  <footer
    className={`mt-5 flex w-full justify-center space-x-12 border-t border-border pb-9 pt-3 ${fixed && 'fixed bottom-0'} ${NotoSansJP.className}`}
  >
    <div className="flex w-6 flex-col space-y-1">
      <Home />
      <span className="text-center text-3xs font-semibold">ホーム</span>
    </div>
    <div className="flex w-6 flex-col space-y-1">
      <Search />
      <span className="text-center text-3xs font-semibold">検索</span>
    </div>
    <div className="flex w-6 flex-col space-y-1">
      <Add />
      <span className="text-center text-3xs font-semibold">追加</span>
    </div>
    <div className="flex w-6 flex-col space-y-1">
      <Favorite />
      <span className="text-center text-3xs font-semibold">いいね</span>
    </div>
    <div className="flex w-6 flex-col space-y-1">
      <History />
      <span className="text-center text-3xs font-semibold">履歴</span>
    </div>
  </footer>
);
