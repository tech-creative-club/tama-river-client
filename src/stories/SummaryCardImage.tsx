import React from 'react';
import {Noto_Sans_JP} from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({subsets: ['latin']});

interface SummaryCardImageProps {
  img: string,
  icon: React.ReactNode
  view: React.ReactNode  | string
}

export const SummaryCardImage = ({img,icon,view}:SummaryCardImageProps) => {
  return (
      <figure className='relative'>
        <img className='justify-center items-center rounded-lg m-0 p-0 w-full' src={img} alt="content" height={500} width={700}/>
        <div className='absolute top-0 right-0'>
          <div className='relative group'>
            <span className="p-2 rounded absolute top-1/4 right-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none w-full">
              <div className='bg-white/80 rounded p-8 '> 
                {view}
              </div>
            </span>
            <button className="transition hover:bg-gray-100 m-2">
              {icon}
            </button>
          </div>
        </div>
      </figure>
  );
};
