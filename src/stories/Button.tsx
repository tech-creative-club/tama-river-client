import React from 'react';

interface ButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ active, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`flex min-h-8 min-w-fit cursor-pointer items-center justify-center rounded-md bg-zinc-300 px-3 py-2 text-center ${active && 'bg-zinc-900 text-white'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
