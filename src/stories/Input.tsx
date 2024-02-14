import React from 'react';
import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

interface InputProps {
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ id, onChange }: InputProps) => {
  return (
    <input
      id={id}
      onChange={onChange}
      className={`h-10 w-full rounded border-2 border-black p-2 outline-none ${NotoSansJP.className}`}
    ></input>
  );
};
