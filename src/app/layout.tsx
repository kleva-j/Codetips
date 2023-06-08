import { Navbar } from '@/components/layout/navbar';
import { Toaster } from '@/components/ui/toaster';
import { PropsWithChildren } from 'react';
import { siteConfig } from '@/config/site';
import { cairoFont } from '@/lib/fonts';
import { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
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
