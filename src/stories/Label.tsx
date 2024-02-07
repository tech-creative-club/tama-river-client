import React from 'react';
import { Noto_Sans_JP } from 'next/font/google';
import Text from '@/components/Text';
import { tv } from 'tailwind-variants';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

const label = tv({
  base: 'text-sm font-medium',
  variants: {
    size: {
      primary: 'text-base',
      secondary: 'text-sm',
      tertiary: 'text-xs',
      quaternary: 'text-2xs',
      quinary: 'text-3xs',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
  },
});

interface LabelProps {
  innerText: string;
  className?: string;
  size?: Size;
  weight?: Weight;
}

type Size = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
type Weight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export const Label = ({ innerText, className, size = 'primary', weight = 'medium' }: LabelProps) => {
  const containsAlphabet = /[a-zA-Z]/.test(innerText);

  return (
    <div className={`${label({ className, size, weight })} ${NotoSansJP.className}`}>
      {containsAlphabet ? <Text>{innerText}</Text> : innerText}
    </div>
  );
};
