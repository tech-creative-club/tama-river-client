'use client';

import React from 'react';
import { Label } from '@/components/common/Label';
import { tv } from 'tailwind-variants';
import { Items } from '@/components/Items';
import { Noto_Sans_JP } from 'next/font/google';
import useIsDesktop from '@/utils/useIsDesktop';
import { useRouter } from 'next/navigation';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const header = tv({
  base: `flex w-full justify-center border-b border-border py-4`,
  variants: {
    isDesktop: {
      true: `px-5`,
    },
  },
});

interface HeaderProps {
  title?: string;
  fixed?: boolean;
  className?: string;
}

export const Header = ({ title, fixed, className }: HeaderProps) => {
  const isDesktop = useIsDesktop();
  const router = useRouter();
  return (
    <header
      className={`${header({ className: `${fixed && 'fixed top-0'} ${className}`, isDesktop })} ${NotoSansJP.className}`}
    >
      <div className="flex w-full max-w-sm justify-between p-1 md:max-w-full">
        <button
          className="flex items-center"
          onClick={() => {
            router.push('/');
          }}
        >
          <Label variant="large">{title ?? 'タマリバ'}</Label>
        </button>
        {isDesktop ? (
          <div className="flex">
            <Items hideIcon={true} variant="small" />
          </div>
        ) : (
          <div className="flex">
            <span>v0.1.0</span>
          </div>
        )}
      </div>
    </header>
  );
};
