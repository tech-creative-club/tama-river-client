import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Text({ children }: { children: React.ReactNode }) {
  return <span className={inter.className}>{children}</span>;
}
