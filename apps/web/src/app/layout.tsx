import "../styles/globals.css";
import "ui/styles.css";

import { type PropsWithChildren } from "react";

import { PageWrapper } from "@/app/wrapper";
import { siteConfig } from "@/config/site";
import { fontMono } from "@/lib/fonts";
import { Metadata } from "next";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={fontMono.className}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "./manifest.json",
};
