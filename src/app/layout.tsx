'use client';

import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { useEffect, useState } from 'react';

// Component
import { Header } from '@/stories/Header';
import { Footer } from '@/stories/Footer';
export const runtime = 'edge';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width > 768);
    };

    handleResize(); // Call the function initially

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-screen flex-col overflow-hidden">
          <Header desktop={isDesktop} />
            {children}
          <Footer className="bg-white" desktop={isDesktop} />
        </div>
      </body>
    </html>
  );
}
