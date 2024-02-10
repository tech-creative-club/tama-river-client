import React from 'react';
import { Noto_Sans_JP } from 'next/font/google';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="flex min-h-8 min-w-fit cursor-pointer items-center justify-center rounded-md bg-zinc-300 px-3 py-2 text-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
