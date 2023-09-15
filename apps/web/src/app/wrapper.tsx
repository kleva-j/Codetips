"use client";

import { type PropsWithChildren } from "react";

import { Navbar } from "@/components/layout";
import { ThemeProvider } from "next-themes";
import { Toaster } from "ui";

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="container">
        <div className="h-12" />
        <Navbar />
        {children}
        <div className="h-12" />
      </div>
      <Toaster />
    </ThemeProvider>
  );
};
