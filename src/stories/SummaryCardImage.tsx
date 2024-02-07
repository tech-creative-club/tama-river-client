import React from 'react';
import Image from 'next/image';

interface SummaryCardImageProps {
  img: string;
  icon: React.ReactNode;
  view: string | React.ReactNode;
}

export const SummaryCardImage = ({ img, icon, view }: SummaryCardImageProps) => {
  return (
    <figure className="relative">
      <Image
        className="m-0 w-full items-center justify-center rounded-lg p-0"
        src={img}
        alt="content"
        height={200}
        width={300}
      />
      <div className="absolute right-0 top-0">
        <div className="group relative">
          <span className="pointer-events-none absolute  right-1/2 top-1/4 min-w-max -translate-x-1/2 rounded p-2 opacity-0 transition group-hover:opacity-100 ">
            <div className="rounded bg-white/80 p-5">{view}</div>
          </span>
          <button className="m-2 transition hover:bg-gray-100">{icon}</button>
        </div>
      </div>
    </figure>
  );
};
