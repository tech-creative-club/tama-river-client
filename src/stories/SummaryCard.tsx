import React from 'react';
import {Noto_Sans_JP} from 'next/font/google';
import SummaryCardType from "@/types/SummaryCardType"
import Link from 'next/link'

const NotoSansJP = Noto_Sans_JP({subsets: ['latin']});

/* interface SummaryCardProps {
  data: SummaryCardType;
  className?: string;
  onClick?: () => void;
} */

export const SummaryCardComp = ({plop}: {plop:SummaryCardType}) => {
  return (
    <Link href={plop.url ? plop.url : "http://localhost:3000"} legacyBehavior>
        <div className='bg-white dark:bg-slate-400 rounded-lg border border-inherit	border-t-2 border-l-2 border-r-0 border-b-0 shadow-lg p-3 hover:bg-slate-100'>
          {plop.image !== undefined && <figure className='relative'>
              <img className='rounded-lg' src={plop.image} alt={plop.name} height={500} width={700}/>
          </figure>}
          <h3 className='text-2xl mt-5'>{plop.name}</h3>
          <div className='flex justify-between'>
              <div className='border rounded-full border-[1px] shadow-sm p-1 text-sm'>{new Date(plop.date).toLocaleString()}</div>
              <div>
                {plop.sport.length > 1 ? <div className='border rounded-full border-[1px] shadow-sm p-1 text-sm'>{plop.sport[0]}</div> : plop.sport.map((sport, index) => {
                  return <div key={index} className='border rounded-full border-[1px] shadow-sm p-1 text-sm'>{sport}</div>
                })}  
              </div>
              
          </div>
        </div>
    </Link>
  );
};
