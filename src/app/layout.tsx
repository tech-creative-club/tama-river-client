'use strict';

import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Metadata } from 'next';

// Component
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
export const runtime = 'edge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'たまりば',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-screen flex-col overflow-hidden">
          <Header />
          {children}
          <Footer className="bg-white" />
        </div>
      </body>
    </html>
  );
}
