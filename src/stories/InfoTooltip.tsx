import React from 'react';
import {Noto_Sans_JP} from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({subsets: ['latin']});

interface InfoTooltipProps {
  children: React.ReactNode;
}

export const InfoTooltip = ({children}:InfoTooltipProps) => {
  return (
    <span>
       <span className="whitespace-nowrap rounded px-2 py-1">
         {children}
       </span>
       <button className="rounded border bg-white px-2 py-1 shadow transition hover:bg-gray-100">
          Button
        </button>
     </span>
  );
};
