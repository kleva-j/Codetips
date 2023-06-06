import { Navbar } from '@/components/layout/navbar';
import { Toaster } from '@/components/ui/toaster';
import { Cairo } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';

const cairoFont = Cairo({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `TypeScript starter for Next.js`,
  description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cairoFont.className}>
        <div className="container">
          <div className="h-12" />
          <Navbar />
          {children}
          <div className="h-12" />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
